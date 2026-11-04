---
name: main-version-to-previous-version
description: 'Use when backporting/copying a documentation section, component or page from the main version (docs/) to a previous version (versioned_docs/version-XX), including images, versioned sidebar and home page entries.'
---

# Main version to previous version

The main (next) documentation lives in `docs/` with its sidebar in `sidebars.js`. Previous versions live in `versioned_docs/version-<V>/` with sidebars in `versioned_sidebars/version-<V>-sidebars.json`. Available versions are listed in `versions.json` (first entry = latest released version).

## Steps

1. **Identify the source**: list all files of the section in `docs/<section>/` (including subfolders such as `Classes/`).
2. **Copy the docs** to `versioned_docs/version-<V>/<section>/`, keeping the same folder structure and file names (case-sensitive). Do not modify content unless asked.
3. **Copy the images**:
   - Search the copied `.md` files for image references (`../assets/...`, `.png`, `.gif`, `.jpg`, `.svg`).
   - Copy each referenced file from `docs/assets/en/<path>` to `versioned_docs/version-<V>/assets/en/<path>` (create folders as needed). Relative paths stay valid because the folder layout is identical.
4. **Update the versioned sidebar** `versioned_sidebars/version-<V>-sidebars.json`:
   - Copy the matching block from `sidebars.js` and convert it to strict JSON (double-quoted keys and strings, no trailing commas, no comments).
   - Insert it at the same position as in `sidebars.js` (e.g. Extensions items are sorted alphabetically by label).
   - Only reference doc ids that exist in the target version.
   - Validate: `Get-Content versioned_sidebars\version-<V>-sidebars.json -Raw | ConvertFrom-Json | Out-Null`.
5. **Home page** (if requested): `src/data/homepageTiles.js` is shared by all versions. Add a `<Link to="<section>/<doc>">` with a `<Translate>` label in the relevant section, respecting the existing order (alphabetical in Extensions).
6. **Check for broken links**: links in the copied pages to other docs must target pages that exist in version `<V>`.

## Notes

- Translations (`i18n/<lang>/docusaurus-plugin-content-docs/version-<V>/`, `code.json`) are managed through Crowdin; do not create them manually unless asked.
- Never edit `build/` output.
