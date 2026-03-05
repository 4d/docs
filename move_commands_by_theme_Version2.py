import re
from pathlib import Path
import subprocess
import yaml  # pip install pyyaml

ROOT = Path(__file__).resolve().parent
THEME_DIR = ROOT / "docs" / "commands" / "theme"

# Match markdown links: ](../../commands-legacy/backup.md) or ](../../commands/backup.md)
# Groups:
# 1 = full_rel_path (../../commands-legacy/backup.md)
# 2 = base_dir (commands or commands-legacy)
# 3 = rel_file (backup.md)
link_pattern = re.compile(r"\]\((\.\./\.\./(commands(?:-legacy)?)/([^)\s]+))\)")

def parse_frontmatter_and_body(md_path: Path):
    text = md_path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return None, text, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return None, text, text
    front = parts[1]
    rest = parts[2]
    data = yaml.safe_load(front) or {}
    return data, rest, text

def main():
    for md in THEME_DIR.glob("*.md"):
        print(f"\nProcessing theme file: {md}")
        frontmatter, body, full_text = parse_frontmatter_and_body(md)
        if not frontmatter:
            print(f"  No valid frontmatter found in {md}, skipping.")
            continue

        theme_name = frontmatter.get("title") or frontmatter.get("id")
        if not theme_name:
            print(f"  No 'title' (or 'id') in frontmatter of {md}, skipping.")
            continue

        print(f"  Theme name (folder) = '{theme_name}'")

        matches = list(link_pattern.finditer(body))
        if not matches:
            print("  No command links found, skipping.")
            continue

        new_body = body

        for m in matches:
            full_rel_path = m.group(1)      # ../../commands-legacy/backup.md
            base_dir = m.group(2)          # commands or commands-legacy
            rel_file = m.group(3)          # backup.md

            src = ROOT / "docs" / base_dir / rel_file

            if not src.exists():
                print(f"  WARNING: source file does not exist: {src}")
                continue

            # Build target path:
            # docs/language/<theme_name>/<base_dir>/<rel_file>
            target_dir = ROOT / "docs" / "language" / theme_name / base_dir
            target_dir.mkdir(parents=True, exist_ok=True)
            dst = target_dir / rel_file

            rel_src = src.relative_to(ROOT)
            rel_dst = dst.relative_to(ROOT)

            print(f"  Moving {rel_src} -> {rel_dst}")
            subprocess.run(["git", "mv", str(rel_src), str(rel_dst)], check=True)

            # Update link in body:
            # from ../../commands[-legacy]/file.md
            # to   ../../language/<theme_name>/commands[-legacy]/file.md
            new_rel = f"../../language/{theme_name}/{base_dir}/{rel_file}"
            new_body = new_body.replace(full_rel_path, new_rel)

        # Recomposer le fichier avec le frontmatter d’origine + le body modifié
        parts = full_text.split("---", 2)
        if len(parts) == 3:
            new_text = f"---{parts[1]}---{new_body}"
        else:
            # cas bizarre, mais on garde au moins le texte modifié
            new_text = new_body

        md.write_text(new_text, encoding="utf-8")

if __name__ == "__main__":
    main()