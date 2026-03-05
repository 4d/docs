import json

with open('i18n/fr/docusaurus-plugin-content-docs/current.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Group by description
desc_groups = {}
for key, entry in data.items():
    if 'sidebar.docs.category.' in key and ('-key' in key or '.link.generated-index.title' in key):
        desc = entry.get('description', '')
        if desc not in desc_groups:
            desc_groups[desc] = []
        desc_groups[desc].append((key, entry.get('message', '')))

# Find descriptions that have multiple entries
results = []
for desc, entries in desc_groups.items():
    if len(entries) >= 2:
        # Check if we have both -key and .link.generated-index.title
        has_key = any('-key' in k for k, _ in entries)
        has_gen = any('.link.generated-index.title' in k for k, _ in entries)
        
        if has_key and has_gen:
            # Check if messages are different
            messages = set(msg for _, msg in entries)
            if len(messages) > 1:
                # Found a mismatch!
                key_entry = [(k, m) for k, m in entries if '-key' in k][0]
                gen_entry = [(k, m) for k, m in entries if '.link.generated-index.title' in k][0]
                
                # Extract theme name
                theme = key_entry[0].replace('sidebar.docs.category.', '').replace('-key', '')
                results.append((theme, gen_entry[1], key_entry[1], desc))

if results:
    print("Found mismatches:")
    for theme, gen_msg, key_msg, desc in results:
        print(f"{theme} | {gen_msg} | {key_msg} | CHECK")
else:
    print("No mismatches found")

