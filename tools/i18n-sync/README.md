# i18n-sync: automatic translation of documentation changes (Portuguese only)

This tool carries English documentation changes over to the Portuguese docs in `i18n/pt/` and translates them with an LLM (OpenAI API). It then opens a Pull Request against `main` so the translations can be reviewed before merging.

> **Scope:** the tool is restricted to the **`pt`** locale. The other locales (`fr`, `es`, `ja`) are not handled by this tool.

- Workflow: [`.github/workflows/i18n-auto-translate.yml`](../../.github/workflows/i18n-auto-translate.yml)
- Script: [`i18n-sync.mjs`](./i18n-sync.mjs) (ES module, Node.js 22, which the `openai@7` SDK requires)
- Optional glossary: [`glossary.json`](./glossary.json)

## How it works

1. **Trigger.** The workflow runs on every push to `main` that modifies `docs/**` or `versioned_docs/**`. You can also start it manually (see [Manual run](#manual-run)).
2. **Detection.** The script runs `git diff --name-status -M <base> <head> -- docs versioned_docs` and keeps only `.md`/`.mdx` files. Only these two commits are needed, so the workflow uses a shallow checkout (`fetch-depth: 2`) and fetches the base commit on demand when it is not `HEAD~1`, instead of cloning the full history.
3. **Path mapping.** The docs plugin uses the default id and `path: 'docs'`, so the paths map as follows:

   | English source | Translated file |
   |---|---|
   | `docs/<path>` | `i18n/pt/docusaurus-plugin-content-docs/current/<path>` |
   | `versioned_docs/version-<N>/<path>` | `i18n/pt/docusaurus-plugin-content-docs/version-<N>/<path>` |

   If a version has no `i18n/pt/docusaurus-plugin-content-docs/version-<N>/` folder, its files are skipped. This prevents a newly created version from triggering thousands of translations.
4. **Each git status is handled as follows:**
   - `A` (added): the file is fully translated. If a translation already exists, it is updated to match the source instead.
   - `M` (modified): the file is translated incrementally (see below).
   - `D` (deleted): the translated file is deleted.
   - `R` (renamed): the translated file is moved. If the content also changed, it is then updated incrementally.
   - `C` (copied): handled like `A`.
5. **Incremental translation.** The model receives the OLD English source, the NEW English source and the EXISTING Portuguese translation. It is told to change only the passages that differ and to keep everything else character for character, so human reviews are preserved.
6. **Large files.** Files over about 80 KB are split into `## ` sections, ignoring headings inside code blocks and front matter, and translated section by section. During an incremental update, a section whose English text did not change keeps its existing translation without any API call.
7. **Pull Request.** The workflow uses `peter-evans/create-pull-request` to commit the `i18n/pt/**` changes on the `i18n/auto-pt-<sha>` branch (`i18n/auto-pt-<sha>-<run id>` for manual runs) and open a PR against `main` with the `translation` and `automated` labels.

### Translation rules (system prompt)

- The Markdown/MDX structure and front matter keys are kept. `id` and `slug` stay unchanged; only `title`, `sidebar_label` and `description` are translated.
- These are never translated: code blocks, inline code, URLs, anchors, JSX/HTML tags and attributes, admonition keywords (`:::note`, etc.), 4D commands, class and function names, constants.
- The model must return only the file. A code fence wrapping its whole output is removed, and a trailing newline is guaranteed.

### Robustness

- API errors 429, 408, 409 and 5xx, as well as network errors, are retried with exponential backoff. The `Retry-After` header is honored, with up to 6 attempts.
- A file whose translation fails is reported as a warning and listed in the summary. The other files are still processed.
- The script exits with a non-zero code only on fatal errors: invalid configuration, missing API key, git error, or too many files (`I18N_MAX_FILES`).
- A summary is printed in the log and in the job summary.
- Files that did not change in the source are never touched.

## Setup

1. **Secret `OPENAI_API_KEY`:** go to *Settings → Secrets and variables → Actions → New repository secret*.
2. **Allow the workflow to open PRs:** go to *Settings → Actions → General → Workflow permissions* and check **"Allow GitHub Actions to create and approve pull requests"**.
3. **Optional repository variable `I18N_MODEL`:** set it under *Settings → Secrets and variables → Actions → Variables* to override the model. The default is `gpt-4.1`.

> PRs created with the default `GITHUB_TOKEN` do not trigger other workflows, such as the `build` workflow. To get the build check on translation PRs, close and reopen the PR, or configure `create-pull-request` with a PAT or a GitHub App token.

## Manual run

Go to *Actions → i18n auto-translate → Run workflow*. Optional input:

- `base`: the commit SHA to diff from. The default is the previous commit. For example, use the last commit that was already translated to catch up on several commits.

The target locale is always `pt`.

Local run (from the repository root):

```bash
npm install --no-save --no-package-lock --prefix tools/i18n-sync openai@7
DRY_RUN=1 BASE_SHA=<sha> node tools/i18n-sync/i18n-sync.mjs   # preview only
OPENAI_API_KEY=... BASE_SHA=<sha> node tools/i18n-sync/i18n-sync.mjs
```

The `openai` package is installed in `tools/i18n-sync/node_modules`, which is git-ignored. The site's `package.json` and `package-lock.json` are not modified.

### Environment variables

| Variable | Default | Description |
|---|---|---|
| `BASE_SHA` | `HEAD_SHA~1` | Base commit. An all-zeros or unknown SHA falls back to `HEAD_SHA~1`. |
| `HEAD_SHA` | `HEAD` | Head commit |
| `LANGS` | `pt` | Target locale. Kept for testing purposes; the workflow always uses `pt` (`en` is not allowed) |
| `OPENAI_API_KEY` | | Required, except in dry-run mode |
| `OPENAI_MODEL` | `gpt-4.1` | Model |
| `OPENAI_BASE_URL` | | Optional, for an OpenAI-compatible endpoint |
| `I18N_MAX_FILES` | `200` | Safety limit on the number of changed source files |
| `I18N_CONCURRENCY` | `3` | Number of parallel API requests |
| `DRY_RUN` | | `1` lists the actions without calling the API or writing files |

## Glossary

`glossary.json` is optional. If it is present, it is injected into the prompt:

```json
{
  "doNotTranslate": ["4D", "ORDA", "4D Server", "4D View Pro", "4D Write Pro", "Qodly"],
  "pt": { "project method": "método projeto" }
}
```

- `doNotTranslate`: terms that are always kept as is.
- `pt`: mandatory translations (English term → Portuguese translation).

## Coexistence with Crowdin

The repository also uses Crowdin (`crowdin.yml`), which syncs translations through `l10n_*` branches and PRs. To avoid conflicts and loops:

- The workflow only runs on pushes to `main` that touch `docs/**` or `versioned_docs/**`. Crowdin commits only modify `i18n/**`, so they do not trigger it. Merges of the bot's own PRs do not trigger it either, since they only touch `i18n/pt/**`.
- The job is also skipped when the head commit message contains `[i18n-bot]` (this bot's commits), `l10n_`, `New Crowdin` or `New translations` (Crowdin commits and merges), or when the commit author or actor contains `crowdin`.
- The bot only commits under `i18n/pt/**`, on its own `i18n/auto-pt-<sha>` branches.
- This tool is the source of truth for `pt`; Crowdin remains in charge of the other locales. To prevent Crowdin from overwriting the automatic Portuguese translations, exclude `pt` from the Crowdin project/configuration (`crowdin.yml`).
