#!/usr/bin/env python3
"""
sync_i18n.py — Synchronisation automatique des traductions i18n à partir d'un commit GitHub.

Usage:
    python sync_i18n.py <commit_sha> [--repo owner/repo] [--branch branch] [--dry-run]

Variables d'environnement requises (voir .env.example) :
    GITHUB_TOKEN   — Token GitHub avec droits lecture/écriture
    OPENAI_API_KEY — Clé API OpenAI
"""

from __future__ import annotations

import argparse
import base64
import logging
import os
import re
import sys
import time
from dataclasses import dataclass, field
from typing import Optional

import requests
from dotenv import load_dotenv

# ---------------------------------------------------------------------------
# Configuration du logging
# ---------------------------------------------------------------------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Constantes
# ---------------------------------------------------------------------------

TARGET_LANGS = ["fr", "es", "ja", "pt"]
DOCS_PREFIX = "docs/"
VERSIONED_PREFIX = "versioned_docs/"
I18N_BASE = "i18n/{lang}/docusaurus-plugin-content-docs"
OPENAI_MODEL = "gpt-4o"
MAX_RETRIES = 3
RETRY_DELAY = 5  # secondes

# ---------------------------------------------------------------------------
# Structures de données
# ---------------------------------------------------------------------------


@dataclass
class FilePatch:
    """Représente un fichier modifié dans un commit."""

    filename: str
    status: str  # 'modified', 'added', 'removed'
    patch: str = ""
    raw_url: str = ""


@dataclass
class TranslationChange:
    """Un bloc de modification à traduire."""

    old_text: str
    new_text: str


@dataclass
class FileUpdate:
    """Mise à jour à appliquer à un fichier traduit."""

    path: str
    content: str
    sha: Optional[str] = None  # SHA du fichier existant (None = nouveau fichier)


@dataclass
class SyncReport:
    """Rapport d'exécution."""

    commit_sha: str
    files_processed: int = 0
    translations_applied: int = 0
    files_created: int = 0
    files_updated: int = 0
    errors: list[str] = field(default_factory=list)

    def print_summary(self) -> None:
        print("\n" + "=" * 60)
        print("  RAPPORT DE SYNCHRONISATION I18N")
        print("=" * 60)
        print(f"  Commit traité    : {self.commit_sha[:12]}")
        print(f"  Fichiers EN      : {self.files_processed}")
        print(f"  Traductions      : {self.translations_applied}")
        print(f"  Fichiers créés   : {self.files_created}")
        print(f"  Fichiers mis à j.: {self.files_updated}")
        if self.errors:
            print(f"  Erreurs          : {len(self.errors)}")
            for err in self.errors:
                print(f"    • {err}")
        else:
            print("  Erreurs          : aucune")
        print("=" * 60 + "\n")


# ---------------------------------------------------------------------------
# Client GitHub
# ---------------------------------------------------------------------------


class GitHubClient:
    """Client pour l'API GitHub REST."""

    def __init__(self, token: str, repo: str) -> None:
        self.token = token
        self.repo = repo
        self.session = requests.Session()
        self.session.headers.update(
            {
                "Authorization": f"token {token}",
                "Accept": "application/vnd.github.v3+json",
                "X-GitHub-Api-Version": "2022-11-28",
            }
        )
        self.base_url = f"https://api.github.com/repos/{repo}"

    def _get(self, path: str, **kwargs) -> dict | list:
        url = f"{self.base_url}{path}"
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = self.session.get(url, **kwargs)
                if resp.status_code == 404:
                    return {}
                resp.raise_for_status()
                return resp.json()
            except requests.RequestException as exc:
                if attempt == MAX_RETRIES:
                    raise
                log.warning("Tentative %d/%d échouée (%s). Retente dans %ds…",
                            attempt, MAX_RETRIES, exc, RETRY_DELAY)
                time.sleep(RETRY_DELAY)
        return {}  # unreachable

    def _post(self, path: str, payload: dict) -> dict:
        url = f"{self.base_url}{path}"
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = self.session.post(url, json=payload)
                resp.raise_for_status()
                return resp.json()
            except requests.RequestException as exc:
                if attempt == MAX_RETRIES:
                    raise
                log.warning("Tentative %d/%d échouée (%s). Retente dans %ds…",
                            attempt, MAX_RETRIES, exc, RETRY_DELAY)
                time.sleep(RETRY_DELAY)
        return {}

    def _patch(self, path: str, payload: dict) -> dict:
        url = f"{self.base_url}{path}"
        resp = self.session.patch(url, json=payload)
        resp.raise_for_status()
        return resp.json()

    def get_commit(self, sha: str) -> dict:
        """Récupère les détails d'un commit."""
        return self._get(f"/commits/{sha}")

    def get_file(self, path: str, ref: str = "") -> dict:
        """Récupère le contenu d'un fichier (base64 encodé)."""
        params = {"ref": ref} if ref else {}
        return self._get(f"/contents/{path}", params=params)

    def get_branch(self, branch: str) -> dict:
        """Récupère les infos d'une branche."""
        return self._get(f"/branches/{branch}")

    def get_raw_content(self, url: str) -> str:
        """Télécharge le contenu brut d'un fichier depuis une URL raw."""
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = self.session.get(url)
                resp.raise_for_status()
                return resp.text
            except requests.RequestException as exc:
                if attempt == MAX_RETRIES:
                    raise
                time.sleep(RETRY_DELAY)
        return ""

    def decode_file_content(self, file_data: dict) -> str:
        """Décode le contenu base64 d'un fichier GitHub."""
        if not file_data or "content" not in file_data:
            return ""
        return base64.b64decode(file_data["content"]).decode("utf-8")

    def create_tree(self, base_tree_sha: str, updates: list[FileUpdate]) -> str:
        """Crée un nouvel arbre Git avec les fichiers modifiés."""
        tree_items = [
            {
                "path": u.path,
                "mode": "100644",
                "type": "blob",
                "content": u.content,
            }
            for u in updates
        ]
        result = self._post(
            "/git/trees",
            {"base_tree": base_tree_sha, "tree": tree_items},
        )
        return result["sha"]

    def create_commit(
        self, message: str, tree_sha: str, parent_sha: str
    ) -> str:
        """Crée un commit Git."""
        result = self._post(
            "/git/commits",
            {
                "message": message,
                "tree": tree_sha,
                "parents": [parent_sha],
            },
        )
        return result["sha"]

    def update_ref(self, branch: str, commit_sha: str) -> None:
        """Met à jour la référence d'une branche."""
        self._patch(
            f"/git/refs/heads/{branch}",
            {"sha": commit_sha, "force": False},
        )


# ---------------------------------------------------------------------------
# Client OpenAI
# ---------------------------------------------------------------------------


class TranslationClient:
    """Client pour l'API OpenAI (traduction)."""

    LANG_NAMES = {
        "fr": "French",
        "es": "Spanish",
        "ja": "Japanese",
        "pt": "Portuguese (Brazilian)",
    }

    def __init__(self, api_key: str) -> None:
        self.api_key = api_key
        self.session = requests.Session()
        self.session.headers.update(
            {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            }
        )

    def translate(
        self,
        text: str,
        target_lang: str,
        old_text_en: str = "",
        old_text_translated: str = "",
    ) -> str:
        """
        Traduit `text` (EN) vers `target_lang` via OpenAI.

        Fournit le contexte de l'ancienne traduction pour maintenir la
        cohérence du style et de la terminologie.
        """
        if not text.strip():
            return text

        lang_name = self.LANG_NAMES.get(target_lang, target_lang)
        context_block = ""
        if old_text_en and old_text_translated:
            context_block = (
                f"\n\nFor reference, the previous English text was:\n"
                f"```\n{old_text_en}\n```\n"
                f"And its existing {lang_name} translation was:\n"
                f"```\n{old_text_translated}\n```\n"
                f"Please maintain the same terminology and style."
            )

        system_prompt = (
            f"You are a professional technical documentation translator. "
            f"Translate from English to {lang_name}.\n\n"
            "Rules:\n"
            "- Translate only the prose/text content\n"
            "- Preserve all Markdown formatting (**, *, ##, ###, etc.)\n"
            "- Preserve all code blocks (``` ... ```) and inline code (`...`) unchanged\n"
            "- Preserve all YAML frontmatter (--- ... ---) unchanged\n"
            "- Preserve all HTML tags, attributes, and HTML comments unchanged\n"
            "- Preserve all URLs in links; only translate visible link text\n"
            "- Preserve 4D command names in bold (**CMD**) or inline code (`CMD`) unchanged\n"
            "- Output only the translated content, no extra commentary"
        )
        user_prompt = (
            f"Translate the following English text to {lang_name}:{context_block}\n\n"
            f"```\n{text}\n```"
        )

        payload = {
            "model": OPENAI_MODEL,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            "temperature": 0.2,
        }

        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = self.session.post(
                    "https://api.openai.com/v1/chat/completions",
                    json=payload,
                    timeout=120,
                )
                if resp.status_code == 429:
                    raw_retry = resp.headers.get("Retry-After", "")
                    try:
                        wait = int(raw_retry)
                    except (ValueError, TypeError):
                        # Fallback si la valeur est une date HTTP ou absente
                        wait = RETRY_DELAY * attempt
                    log.warning("Rate limit OpenAI. Attente %ds…", wait)
                    time.sleep(wait)
                    continue
                resp.raise_for_status()
                result = resp.json()
                translated = result["choices"][0]["message"]["content"].strip()
                # Retire les balises de bloc de code éventuellement ajoutées
                translated = re.sub(r"^```[^\n]*\n", "", translated)
                translated = re.sub(r"\n```$", "", translated)
                return translated
            except requests.RequestException as exc:
                if attempt == MAX_RETRIES:
                    raise
                log.warning("Erreur OpenAI tentative %d/%d : %s", attempt, MAX_RETRIES, exc)
                time.sleep(RETRY_DELAY * attempt)
        return text  # fallback : retourne le texte original


# ---------------------------------------------------------------------------
# Utilitaires de mapping des chemins
# ---------------------------------------------------------------------------


def map_source_to_i18n(source_path: str, lang: str) -> Optional[str]:
    """
    Calcule le chemin i18n cible à partir d'un chemin source EN.

    docs/foo/bar.md
        → i18n/{lang}/docusaurus-plugin-content-docs/current/foo/bar.md

    versioned_docs/version-21/foo/bar.md
        → i18n/{lang}/docusaurus-plugin-content-docs/version-21/foo/bar.md
    """
    base = I18N_BASE.format(lang=lang)

    if source_path.startswith(DOCS_PREFIX):
        relative = source_path[len(DOCS_PREFIX):]
        return f"{base}/current/{relative}"

    if source_path.startswith(VERSIONED_PREFIX):
        # versioned_docs/version-XXX/rest → version-XXX/rest
        without_prefix = source_path[len(VERSIONED_PREFIX):]
        # without_prefix = "version-XXX/foo/bar.md"
        return f"{base}/{without_prefix}"

    return None  # fichier non concerné


# ---------------------------------------------------------------------------
# Parsing du diff
# ---------------------------------------------------------------------------


def parse_diff_chunks(patch: str) -> list[TranslationChange]:
    """
    Extrait les blocs de modification (old_text → new_text) depuis un diff unifié.
    Retourne une liste de TranslationChange.
    """
    if not patch:
        return []

    changes: list[TranslationChange] = []
    old_lines: list[str] = []
    new_lines: list[str] = []

    def flush():
        nonlocal old_lines, new_lines
        if old_lines or new_lines:
            changes.append(
                TranslationChange(
                    old_text="\n".join(old_lines),
                    new_text="\n".join(new_lines),
                )
            )
        old_lines = []
        new_lines = []

    in_hunk = False
    for line in patch.splitlines():
        if line.startswith("@@"):
            flush()
            in_hunk = True
            continue
        if not in_hunk:
            continue
        if line.startswith("-"):
            old_lines.append(line[1:])
        elif line.startswith("+"):
            new_lines.append(line[1:])
        else:
            # Ligne de contexte — sépare les chunks
            if old_lines or new_lines:
                flush()

    flush()
    return [c for c in changes if c.old_text.strip() or c.new_text.strip()]


# ---------------------------------------------------------------------------
# Application des modifications dans le fichier traduit
# ---------------------------------------------------------------------------


def apply_translation(
    translated_file: str,
    old_text: str,
    new_translated: str,
) -> str:
    """
    Remplace `old_text` (texte original traduit) par `new_translated`
    dans `translated_file`.

    Stratégie : recherche exacte, puis recherche normalisée (espaces/sauts de ligne).
    """
    if not old_text.strip():
        # Ajout pur : on ajoute à la fin du fichier
        return translated_file.rstrip("\n") + "\n" + new_translated + "\n"

    # 1. Recherche exacte
    if old_text in translated_file:
        return translated_file.replace(old_text, new_translated, 1)

    # 2. Normalisation légère : collapse des espaces multiples et retours de ligne
    def normalize(s: str) -> str:
        return re.sub(r"\s+", " ", s).strip()

    norm_old = normalize(old_text)
    # Tentative de remplacement ligne à ligne approximatif
    lines = translated_file.splitlines(keepends=True)
    old_search_lines = [ln.strip() for ln in old_text.splitlines() if ln.strip()]

    if not old_search_lines:
        return translated_file

    # Cherche le bloc complet dans le fichier en comparant la version normalisée
    for i, line in enumerate(lines):
        end = i + len(old_search_lines)
        candidate_lines = lines[i:end]
        if len(candidate_lines) < len(old_search_lines):
            continue
        candidate = "".join(candidate_lines)
        if normalize(candidate) == norm_old:
            before = "".join(lines[:i])
            after = "".join(lines[end:])
            return before + new_translated + "\n" + after

    # 3. En dernier recours : on logue un avertissement et on retourne le fichier intact
    log.warning(
        "Impossible de localiser le passage à remplacer dans le fichier traduit.\n"
        "  Recherché : %s…",
        old_text[:120].replace("\n", "↵"),
    )
    return translated_file


# ---------------------------------------------------------------------------
# Logique principale de synchronisation
# ---------------------------------------------------------------------------


class I18nSyncer:
    """Orchestre la synchronisation i18n à partir d'un commit."""

    def __init__(
        self,
        github: GitHubClient,
        translator: TranslationClient,
        dry_run: bool = False,
        langs: list[str] | None = None,
    ) -> None:
        self.gh = github
        self.tr = translator
        self.dry_run = dry_run
        self.langs = langs if langs is not None else list(TARGET_LANGS)

    def sync(self, sha: str, branch: str) -> SyncReport:
        report = SyncReport(commit_sha=sha)

        # 1. Récupération du commit
        log.info("Récupération du commit %s…", sha)
        commit_data = self.gh.get_commit(sha)
        if not commit_data:
            raise ValueError(f"Commit introuvable : {sha}")

        commit_message = commit_data.get("commit", {}).get("message", sha[:8])
        tree_sha = commit_data["commit"]["tree"]["sha"]
        files = commit_data.get("files", [])

        # 2. Filtrage des fichiers .md pertinents
        md_files = [
            FilePatch(
                filename=f["filename"],
                status=f["status"],
                patch=f.get("patch", ""),
                raw_url=f.get("raw_url", ""),
            )
            for f in files
            if f["filename"].endswith(".md")
            and (
                f["filename"].startswith(DOCS_PREFIX)
                or f["filename"].startswith(VERSIONED_PREFIX)
            )
            and f["status"] in ("modified", "added")
        ]

        if not md_files:
            log.info("Aucun fichier .md pertinent dans ce commit.")
            report.print_summary()
            return report

        log.info("%d fichier(s) .md à traiter.", len(md_files))
        report.files_processed = len(md_files)

        # 3. Pour chaque fichier, chaque langue
        all_updates: list[FileUpdate] = []

        for fp in md_files:
            log.info("→ %s [%s]", fp.filename, fp.status)

            # Récupère le contenu EN après le commit
            en_file_data = self.gh.get_file(fp.filename, ref=sha)
            en_content = self.gh.decode_file_content(en_file_data)
            if not en_content and fp.raw_url:
                en_content = self.gh.get_raw_content(fp.raw_url)

            if not en_content:
                log.warning("  Contenu EN introuvable, fichier ignoré.")
                report.errors.append(f"Contenu EN manquant : {fp.filename}")
                continue

            # Parse les chunks de diff
            diff_chunks = parse_diff_chunks(fp.patch)

            for lang in self.langs:
                i18n_path = map_source_to_i18n(fp.filename, lang)
                if not i18n_path:
                    continue

                log.info("  [%s] %s", lang, i18n_path)

                # Récupère le fichier traduit existant
                existing_data = self.gh.get_file(i18n_path)
                existing_content = self.gh.decode_file_content(existing_data)
                existing_sha = existing_data.get("sha") if existing_data else None

                if not existing_content or fp.status == "added":
                    # Fichier inexistant ou nouveau → traduction complète
                    log.info("    Traduction complète du fichier…")
                    try:
                        translated_full = self.tr.translate(en_content, lang)
                        all_updates.append(
                            FileUpdate(
                                path=i18n_path,
                                content=translated_full,
                                sha=existing_sha,
                            )
                        )
                        report.files_created += 1
                        report.translations_applied += 1
                    except Exception as exc:
                        msg = f"Erreur traduction complète {i18n_path}: {exc}"
                        log.error("    %s", msg)
                        report.errors.append(msg)
                    continue

                # Fichier existant : appliquer les chunks de diff
                updated_content = existing_content
                changed = False

                for chunk in diff_chunks:
                    if not chunk.new_text.strip():
                        continue

                    # Traduit old_text en langue cible pour le localiser dans le fichier
                    try:
                        old_translated = ""
                        if chunk.old_text.strip():
                            old_translated = self.tr.translate(
                                chunk.old_text,
                                lang,
                                old_text_en=chunk.old_text,
                                old_text_translated="",
                            )

                        new_translated = self.tr.translate(
                            chunk.new_text,
                            lang,
                            old_text_en=chunk.old_text,
                            old_text_translated=old_translated,
                        )
                    except Exception as exc:
                        msg = f"Erreur traduction chunk {i18n_path}: {exc}"
                        log.error("    %s", msg)
                        report.errors.append(msg)
                        continue

                    before = updated_content
                    # Essaie d'abord avec old_translated exact, sinon avec old_text anglais
                    updated_content = apply_translation(
                        updated_content, old_translated, new_translated
                    )
                    if updated_content == before and chunk.old_text.strip():
                        updated_content = apply_translation(
                            updated_content, chunk.old_text, new_translated
                        )
                    if updated_content != before:
                        changed = True
                        report.translations_applied += 1
                        log.info("    ✓ chunk appliqué")
                    else:
                        log.warning("    ⚠ chunk non appliqué (passage introuvable)")

                if changed:
                    all_updates.append(
                        FileUpdate(
                            path=i18n_path,
                            content=updated_content,
                            sha=existing_sha,
                        )
                    )
                    report.files_updated += 1

        if not all_updates:
            log.info("Aucune modification à committer.")
            report.print_summary()
            return report

        if self.dry_run:
            log.info("[DRY-RUN] %d fichier(s) auraient été commités.", len(all_updates))
            for u in all_updates:
                log.info("  • %s", u.path)
            report.print_summary()
            return report

        # 4. Commit groupé via l'API Git
        short_msg = commit_message.splitlines()[0]
        commit_msg = f"i18n sync: {short_msg} ({sha[:8]})"
        log.info("Création du commit : %s", commit_msg)

        # Récupère le SHA HEAD de la branche cible comme parent du nouveau commit
        branch_data = self.gh.get_branch(branch)
        head_sha = branch_data["commit"]["sha"]

        new_tree_sha = self.gh.create_tree(tree_sha, all_updates)
        new_commit_sha = self.gh.create_commit(commit_msg, new_tree_sha, head_sha)
        self.gh.update_ref(branch, new_commit_sha)

        log.info("✅ Commit créé : %s", new_commit_sha)

        # 5. Rapport
        report.print_summary()
        return report


# ---------------------------------------------------------------------------
# Point d'entrée
# ---------------------------------------------------------------------------


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Synchronise les traductions i18n à partir d'un commit GitHub.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("sha", help="SHA du commit à synchroniser")
    parser.add_argument(
        "--repo",
        default=os.getenv("GITHUB_REPO", "doc4d/docs"),
        help="Dépôt GitHub au format owner/repo (défaut : doc4d/docs)",
    )
    parser.add_argument(
        "--branch",
        default=os.getenv("GITHUB_BRANCH", "main"),
        help="Branche cible pour le commit i18n (défaut : main)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Simule l'exécution sans créer de commit",
    )
    parser.add_argument(
        "--langs",
        nargs="+",
        default=TARGET_LANGS,
        help=f"Langues cibles (défaut : {' '.join(TARGET_LANGS)})",
    )
    parser.add_argument(
        "--env",
        default=os.path.join(os.path.dirname(__file__), ".env"),
        help="Chemin vers le fichier .env",
    )
    return parser


def main() -> int:
    parser = build_arg_parser()
    args = parser.parse_args()

    # Chargement des variables d'environnement
    if os.path.isfile(args.env):
        load_dotenv(args.env)
    else:
        load_dotenv()  # Cherche un .env dans le répertoire courant

    github_token = os.getenv("GITHUB_TOKEN")
    openai_key = os.getenv("OPENAI_API_KEY")

    if not github_token:
        log.error("Variable d'environnement GITHUB_TOKEN manquante.")
        return 1
    if not openai_key:
        log.error("Variable d'environnement OPENAI_API_KEY manquante.")
        return 1

    gh = GitHubClient(token=github_token, repo=args.repo)
    tr = TranslationClient(api_key=openai_key)
    syncer = I18nSyncer(github=gh, translator=tr, dry_run=args.dry_run, langs=args.langs)

    try:
        report = syncer.sync(sha=args.sha, branch=args.branch)
        return 0 if not report.errors else 2
    except Exception as exc:
        log.exception("Erreur fatale : %s", exc)
        return 1


if __name__ == "__main__":
    sys.exit(main())
