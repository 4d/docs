# sync_i18n.py — Synchronisation automatique des traductions i18n

Outil Python autonome qui, à partir d'un SHA de commit GitHub, identifie les fichiers Markdown anglais modifiés et propage automatiquement les modifications dans toutes les langues cibles du dossier `i18n/`.

## Prérequis

- Python 3.9 ou supérieur
- Un token GitHub avec droits de lecture et d'écriture sur le dépôt
- Une clé API OpenAI

## Installation

```bash
cd scripts/
pip install -r requirements_sync_i18n.txt
```

## Configuration

Copier le fichier `.env.example` en `.env` et renseigner les valeurs :

```bash
cp .env.example .env
# Éditer .env avec vos valeurs
```

Variables d'environnement :

| Variable | Description | Obligatoire |
|---|---|---|
| `GITHUB_TOKEN` | Token GitHub (lecture + écriture) | ✅ |
| `OPENAI_API_KEY` | Clé API OpenAI | ✅ |
| `GITHUB_REPO` | Dépôt au format `owner/repo` | Non (défaut : `doc4d/docs`) |
| `GITHUB_BRANCH` | Branche cible du commit i18n | Non (défaut : `main`) |

## Utilisation

### Commande de base

```bash
python sync_i18n.py <commit_sha>
```

### Options disponibles

```
python sync_i18n.py --help

usage: sync_i18n.py [-h] [--repo OWNER/REPO] [--branch BRANCH]
                    [--dry-run] [--langs LANG [LANG ...]] [--env FILE]
                    sha

Arguments positionnels :
  sha                   SHA du commit à synchroniser

Options :
  --repo OWNER/REPO     Dépôt GitHub (défaut : doc4d/docs)
  --branch BRANCH       Branche cible (défaut : main)
  --dry-run             Simule l'exécution sans créer de commit
  --langs fr es ja pt   Langues cibles (défaut : fr es ja pt)
  --env FILE            Chemin vers le fichier .env
```

### Exemples

```bash
# Synchroniser un commit sur la branche main
python sync_i18n.py 881fdd7479b057cf619159e6b5677b38a9df7815

# Simulation sans commit (dry run)
python sync_i18n.py 881fdd7479b057cf619159e6b5677b38a9df7815 --dry-run

# Seulement le français et l'espagnol
python sync_i18n.py 881fdd7479b057cf619159e6b5677b38a9df7815 --langs fr es

# Sur une branche de feature
python sync_i18n.py abc123def456 --branch feature/my-branch

# Dépôt différent
python sync_i18n.py abc123def456 --repo myorg/myrepo --branch develop
```

## Fonctionnement

### 1. Récupération du commit

Le script appelle `GET /repos/{owner}/{repo}/commits/{sha}` pour obtenir la liste des fichiers modifiés et leurs diffs (patch unifié).

### 2. Filtrage

Seuls les fichiers `.md` dont le chemin commence par `docs/` ou `versioned_docs/` et dont le statut est `modified` ou `added` sont traités.

### 3. Mapping des chemins

| Source EN | Fichier i18n cible |
|---|---|
| `docs/foo/bar.md` | `i18n/{lang}/docusaurus-plugin-content-docs/current/foo/bar.md` |
| `versioned_docs/version-21/foo/bar.md` | `i18n/{lang}/docusaurus-plugin-content-docs/version-21/foo/bar.md` |
| `versioned_docs/version-21-R2/foo/bar.md` | `i18n/{lang}/docusaurus-plugin-content-docs/version-21-R2/foo/bar.md` |

### 4. Traduction

Pour chaque fichier modifié et chaque langue cible :

- **Fichier existant** : le diff est analysé pour extraire les blocs `old_text → new_text`. Seuls les passages modifiés sont re-traduits, en conservant le style et la terminologie existants.
- **Nouveau fichier** : l'intégralité du contenu EN est traduit.

La traduction est effectuée via l'API OpenAI (modèle `gpt-4o`). Les éléments suivants sont **préservés** :
- Frontmatter YAML (`--- ... ---`)
- Blocs de code (` ``` `)
- Commentaires HTML (`<!-- -->`)
- Balises HTML et attributs
- Noms de commandes 4D en gras ou en code inline
- URLs dans les liens (seul le texte visible est traduit)

### 5. Commit groupé

Toutes les modifications sont regroupées en un seul commit via l'API Git de GitHub (création d'un arbre + commit + mise à jour de la référence de branche).

Message de commit : `i18n sync: {message_original} ({sha[:8]})`

### 6. Rapport

En fin d'exécution, un résumé est affiché :

```
============================================================
  RAPPORT DE SYNCHRONISATION I18N
============================================================
  Commit traité    : 881fdd7479b0
  Fichiers EN      : 6
  Traductions      : 24
  Fichiers créés   : 0
  Fichiers mis à j.: 24
  Erreurs          : aucune
============================================================
```

## Codes de retour

| Code | Signification |
|---|---|
| `0` | Succès total |
| `1` | Erreur fatale (token manquant, commit introuvable, etc.) |
| `2` | Succès partiel (au moins une erreur non fatale) |

## Gestion des erreurs

- **Fichier traduit introuvable** : le fichier est traduit en intégralité et créé.
- **Passage à remplacer introuvable** : un avertissement est loggé, le reste du fichier est traité normalement.
- **Rate limiting OpenAI** : retente automatiquement en respectant le délai `Retry-After`.
- **Erreur réseau** : 3 tentatives avec délai exponentiel.

## Structure du projet

```
scripts/
├── sync_i18n.py                  ← Script principal
├── requirements_sync_i18n.txt    ← Dépendances Python
├── .env.example                  ← Template de configuration
└── README_sync_i18n.md           ← Cette documentation
```
