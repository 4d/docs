import json
import os
from pathlib import Path

# Get all _category_.json files
language_dir = Path("docs/language")
category_files = sorted([f for f in language_dir.glob("*/_category_.json")])

patch_lines = ["*** Begin Patch"]

for cat_file in category_files:
    try:
        with open(cat_file, 'r', encoding='utf-8') as f:
            content = f.read()
            data = json.loads(content)
        
        # Check if file has link property with .md extension
        if "link" in data and "id" in data["link"]:
            link_id = data["link"]["id"]
            if link_id.endswith(".md") and link_id.startswith("commands/theme/"):
                # Extract theme name
                theme = link_id.replace("commands/theme/", "").replace(".md", "")
                
                # Get absolute path
                abs_path = str(cat_file.resolve())
                
                # Generate diff
                patch_lines.append(f"*** Update File: {abs_path}")
                patch_lines.append("@@")
                patch_lines.append(" {")
                patch_lines.append(f'   "label": "{data["label"]}",' if "label" in data else "")
                patch_lines.append(f'-  "link": {{"type": "doc", "id": "commands/theme/{theme}.md"}},')
                patch_lines.append(f'+  "link": {{"type": "doc", "id": "commands/theme/{theme}_theme"}},')
                patch_lines.append(f'   "key": "{data["key"]}"' if "key" in data else "")
                patch_lines.append(" }")
    except Exception as e:
        print(f"Error processing {cat_file}: {e}")

patch_lines.append("*** End Patch")
output = "\n".join([line for line in patch_lines if line])  # Remove empty lines
print(output)
