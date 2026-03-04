import json

# Load the JSON file
with open(r'c:\Github\docs\i18n\fr\docusaurus-plugin-content-docs\current.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Find all .link.generated-index.title entries
link_titles = {}
for key, value in data.items():
    if '.link.generated-index.title' in key:
        link_titles[key] = value

# Find all -key entries
key_entries = {}
for key, value in data.items():
    if key.endswith('-key') and 'sidebar.docs.category.' in key:
        key_entries[key] = value

print(f"Found {len(link_titles)} link.generated-index.title entries")
print(f"Found {len(key_entries)} -key entries\n")

# Show some examples of messages
print("Sample messages from link.generated-index.title:")
for i, (key, value) in enumerate(list(link_titles.items())[:3]):
    prefix = 'sidebar.docs.category.'
    suffix = '.link.generated-index.title'
    theme = key[len(prefix):-len(suffix)]
    msg = value.get('message', '')
    print(f"  {theme}: '{msg}'")

print("\nSample messages from -key:")
for i, (key, value) in enumerate(list(key_entries.items())[:3]):
    prefix = 'sidebar.docs.category.'
    suffix = '-key'
    theme = key[len(prefix):-len(suffix)]
    msg = value.get('message', '')
    print(f"  {theme}: '{msg}'")

# Match themes
matches = []
for link_key, link_val in link_titles.items():
    # Extract theme from link key
    prefix = 'sidebar.docs.category.'
    suffix = '.link.generated-index.title'
    if link_key.startswith(prefix) and link_key.endswith(suffix):
        theme = link_key[len(prefix):-len(suffix)]
        
        # Try to find corresponding -key entry
        # Convert theme name to -key format
        key_name_variations = [
            f'sidebar.docs.category.{theme}-key',
            f'sidebar.docs.category.{theme.replace(" ", "-")}-key',
        ]
        
        link_msg = link_val.get('message', '')
        
        for key_var in key_name_variations:
            if key_var in key_entries:
                key_msg = key_entries[key_var].get('message', '')
                if link_msg == key_msg:  # Compare MESSAGES, not descriptions
                    matches.append((theme, link_msg))
                break

# Sort alphabetically
matches.sort(key=lambda x: x[0].lower())

print("\n--- MATCHES (identical messages) ---")
for theme, message in matches:
    print(f"{theme} | {message} | {message}")
print(f"\nTotal matches: {len(matches)}")
