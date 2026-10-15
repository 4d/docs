#!/usr/bin/env node
/**
 * i18n-sync: propagates English documentation changes (docs/, versioned_docs/)
 * to the translated files under i18n/pt/docusaurus-plugin-content-docs/
 * and translates them with an LLM (OpenAI API).
 * The tool is restricted to the Portuguese (pt) locale.
 *
 * Environment variables:
 *   BASE_SHA          Commit to diff from (default: HEAD_SHA~1; an all-zeros or unknown SHA falls back to HEAD_SHA~1)
 *   HEAD_SHA          Commit to diff to (default: HEAD)
 *   LANGS             Target locale (default: pt)
 *   OPENAI_API_KEY    OpenAI API key (required unless DRY_RUN=1)
 *   OPENAI_MODEL      Model name (default: gpt-4.1)
 *   I18N_MAX_FILES    Max number of changed source files to process (default: 200)
 *   I18N_CONCURRENCY  Number of parallel translation requests (default: 3)
 *   DRY_RUN           If "1"/"true", only print what would be done (no API call, no write)
 *
 * Usage (from the repository root):
 *   BASE_SHA=<sha> node tools/i18n-sync/i18n-sync.mjs
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PLUGIN_DIR = 'docusaurus-plugin-content-docs';
const DEFAULT_LANGS = 'pt';
const LANG_NAMES = { pt: 'Brazilian Portuguese' };
const CHUNK_THRESHOLD = 80 * 1024; // bytes
const MAX_ATTEMPTS = 6;

const env = process.env;
const DRY_RUN = /^(1|true|yes)$/i.test(env.DRY_RUN || '');
const MODEL = env.OPENAI_MODEL || 'gpt-4.1';
const MAX_FILES = parseInt(env.I18N_MAX_FILES || '200', 10);
const CONCURRENCY = Math.max(1, parseInt(env.I18N_CONCURRENCY || '3', 10) || 1);

// ───────────────────────────── helpers ─────────────────────────────

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 512 * 1024 * 1024 });
}

function fatal(msg) {
  console.error(`::error::${msg}`);
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function commitExists(sha) {
  try {
    git('cat-file', '-e', `${sha}^{commit}`);
    return true;
  } catch {
    return false;
  }
}

function showFile(sha, file) {
  try {
    return execFileSync('git', ['show', `${sha}:${file}`], {
      encoding: 'utf8',
      maxBuffer: 512 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return '';
  }
}

const isMarkdown = (f) => !!f && /\.mdx?$/i.test(f);

/** Maps an English source path to its translated path, or null if not applicable. */
export function toI18nPath(src, lang) {
  const base = `i18n/${lang}/${PLUGIN_DIR}`;
  if (src.startsWith('docs/')) return `${base}/current/${src.slice('docs/'.length)}`;
  const m = src.match(/^versioned_docs\/(version-[^/]+)\/(.+)$/);
  return m ? `${base}/${m[1]}/${m[2]}` : null;
}

/** Root folder of the docs version of a translated path (e.g. i18n/pt/docusaurus-plugin-content-docs/version-20). */
function versionRoot(target) {
  return target.split('/').slice(0, 4).join('/');
}

// ───────────────────────────── glossary / prompts ─────────────────────────────

function loadGlossary() {
  const file = path.join(SCRIPT_DIR, 'glossary.json');
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.warn(`::warning::Cannot parse ${file}: ${e.message} (glossary ignored)`);
    return null;
  }
}

const glossary = loadGlossary();

function glossaryPrompt(lang) {
  if (!glossary) return '';
  let out = '';
  if (Array.isArray(glossary.doNotTranslate) && glossary.doNotTranslate.length) {
    out += `\n- Never translate these terms, keep them exactly as written: ${glossary.doNotTranslate.join(', ')}.`;
  }
  const terms = glossary[lang];
  if (terms && typeof terms === 'object' && !Array.isArray(terms) && Object.keys(terms).length) {
    out += '\n- Mandatory terminology (English → translation):\n';
    out += Object.entries(terms).map(([k, v]) => `  - ${k} → ${v}`).join('\n');
  }
  return out;
}

export function systemPrompt(lang) {
  const name = LANG_NAMES[lang] || lang;
  return `You are a professional technical translator for the 4D documentation (Docusaurus Markdown/MDX).
Translate from English into ${name}. STRICT RULES:
- Preserve the exact Markdown/MDX structure: headings, lists, tables, blank lines, line breaks, indentation.
- Front matter: keep all keys unchanged; keep "id" and "slug" values unchanged; translate only the values of "title", "sidebar_label" and "description".
- Never translate: fenced code blocks, inline code, URLs, link targets, anchors (#...), heading ids ({#...}), file and image paths, JSX/HTML tags and their attributes, import/export statements, admonition keywords (:::note, :::tip, :::info, :::caution, :::warning, :::danger, etc.).
- Never translate 4D language elements: commands, keywords, class names, function and member names, property names, constants, parameter names.
- Keep product names unchanged.${glossaryPrompt(lang)}
- Return ONLY the resulting file content, without any commentary and without wrapping it in a code fence.`;
}

function userPrompt({ mode, oldSrc, newSrc, existing }) {
  if (mode === 'update') {
    return `The English source file changed. Update the EXISTING TRANSLATION MINIMALLY so that it matches the NEW ENGLISH source:
- Only modify, add or remove the passages corresponding to the differences between OLD ENGLISH and NEW ENGLISH.
- Keep every other part of the existing translation EXACTLY as it is (character for character), even if you would translate it differently: it was reviewed by humans.
- Return the complete updated translated file.

### OLD ENGLISH
${oldSrc}

### NEW ENGLISH
${newSrc}

### EXISTING TRANSLATION
${existing}`;
  }
  if (mode === 'resync') {
    return `Here is an English source file and an existing translation of a previous version of it. Update the EXISTING TRANSLATION MINIMALLY so that it fully matches the ENGLISH source:
- Keep every passage that is already a correct translation EXACTLY as it is (character for character): it was reviewed by humans.
- Only translate what is missing and fix what no longer matches.
- Return the complete updated translated file.

### ENGLISH
${newSrc}

### EXISTING TRANSLATION
${existing}`;
  }
  return `Translate the following file:\n\n${newSrc}`;
}

/** Removes a code fence wrapping the whole model output (unless the source itself starts with a fence). */
export function cleanOutput(out, src) {
  let text = out.replace(/^\uFEFF/, '');
  if (!/^\s*(```|~~~)/.test(src)) {
    const m = text.match(/^\s*```[\w-]*[ \t]*\r?\n([\s\S]*?)\r?\n```\s*$/);
    if (m) text = m[1];
  }
  return text;
}

/** Gives the translated text the same trailing newlines as the source (at least one). */
export function matchTrailing(text, src) {
  const trailing = src.match(/\n*$/)[0] || '\n';
  return text.replace(/\s+$/, '') + trailing;
}

// ───────────────────────────── chunking ─────────────────────────────

/** Splits a Markdown file into sections starting with "## " (ignoring front matter and code fences). */
export function splitSections(text) {
  const lines = text.split(/(?<=\n)/);
  const chunks = [];
  let current = '';
  let fence = null;
  let inFrontMatter = lines[0]?.trim() === '---';
  lines.forEach((line, i) => {
    if (inFrontMatter && i > 0 && line.trim() === '---') inFrontMatter = false;
    const f = line.match(/^\s*(`{3,}|~{3,})/);
    if (f) {
      if (!fence) fence = f[1];
      else if (line.trim().startsWith(fence)) fence = null;
    }
    if (!fence && !inFrontMatter && /^## /.test(line) && current.trim() !== '') {
      chunks.push(current);
      current = '';
    }
    current += line;
  });
  if (current) chunks.push(current);
  return chunks;
}

// ───────────────────────────── OpenAI ─────────────────────────────

let client = null;
async function getClient() {
  if (client) return client;
  const { default: OpenAI } = await import('openai');
  client = new OpenAI({ maxRetries: 0, timeout: 3 * 60 * 1000 });
  return client;
}

function isRetryable(err) {
  const status = err?.status;
  if (status === undefined) return true; // network errors / timeouts
  return status === 408 || status === 409 || status === 429 || (status >= 500 && status < 600);
}

function retryAfterMs(err) {
  const h = err?.headers;
  const value = typeof h?.get === 'function' ? h.get('retry-after') : h?.['retry-after'];
  const seconds = Number(value);
  return Number.isFinite(seconds) && seconds > 0 ? Math.min(seconds, 120) * 1000 : null;
}

async function callModel(lang, user, label) {
  const c = await getClient();
  for (let attempt = 1; ; attempt++) {
    try {
      const r = await c.chat.completions.create({
        model: MODEL,
        temperature: 0,
        messages: [
          { role: 'system', content: systemPrompt(lang) },
          { role: 'user', content: user },
        ],
      });
      const choice = r.choices?.[0];
      if (choice?.finish_reason === 'length') {
        throw Object.assign(new Error('model output truncated (finish_reason=length)'), { status: 400, truncated: true });
      }
      const content = choice?.message?.content;
      if (!content || !content.trim()) throw new Error('empty model output');
      return content;
    } catch (err) {
      if (attempt >= MAX_ATTEMPTS || !isRetryable(err)) throw err;
      const delay = retryAfterMs(err) ?? Math.min(60000, 2000 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 1000);
      console.warn(`  ! [${label}] attempt ${attempt} failed (${err?.status ?? 'network'}: ${err?.message}); retrying in ${Math.round(delay / 1000)}s`);
      await sleep(delay);
    }
  }
}

async function translatePiece(lang, piece, label) {
  const out = await callModel(lang, userPrompt(piece), label);
  return matchTrailing(cleanOutput(out, piece.newSrc), piece.newSrc);
}

/** Translates a whole file, splitting it by "## " sections when it is large. */
async function translateFile(lang, { mode, oldSrc, newSrc, existing }, label) {
  const newChunks = splitSections(newSrc);
  if (Buffer.byteLength(newSrc) <= CHUNK_THRESHOLD) {
    try {
      return await translatePiece(lang, { mode, oldSrc, newSrc, existing }, label);
    } catch (err) {
      if (!err?.truncated || newChunks.length < 2) throw err;
      console.warn(`  ! [${label}] output truncated, retrying section by section`);
    }
  }
  const exChunks = existing ? splitSections(existing) : [];
  const oldChunks = oldSrc ? splitSections(oldSrc) : [];
  const aligned = !!existing && exChunks.length === newChunks.length;
  const oldAligned = aligned && mode === 'update' && oldChunks.length === newChunks.length;
  if (existing && !aligned) {
    console.warn(`::warning::[${label}] large file: sections of the existing translation do not match the source, translating section by section`);
  }
  console.log(`  [${label}] large file split into ${newChunks.length} sections`);
  const parts = [];
  for (let i = 0; i < newChunks.length; i++) {
    const n = newChunks[i];
    if (oldAligned && oldChunks[i] === n) {
      parts.push(exChunks[i]); // unchanged section: keep the existing translation verbatim
      continue;
    }
    const piece = oldAligned
      ? { mode: 'update', oldSrc: oldChunks[i], newSrc: n, existing: exChunks[i] }
      : aligned
        ? { mode: 'resync', newSrc: n, existing: exChunks[i] }
        : { mode: 'full', newSrc: n };
    parts.push(await translatePiece(lang, piece, `${label} §${i + 1}/${newChunks.length}`));
  }
  return parts.join('');
}

// ───────────────────────────── main ─────────────────────────────

/** Parses `git diff --name-status -z` output into { status, from, to } entries. */
export function parseNameStatus(raw) {
  const tokens = raw.split('\0').filter((t) => t !== '');
  const changes = [];
  for (let i = 0; i < tokens.length; ) {
    const status = tokens[i++];
    if (/^[RC]/.test(status)) {
      changes.push({ status: status[0], from: tokens[i], to: tokens[i + 1] });
      i += 2;
    } else {
      changes.push({ status: status[0], from: tokens[i], to: tokens[i] });
      i += 1;
    }
  }
  return changes;
}

/** Normalizes renames/copies involving non-Markdown files into deletions/additions. */
export function normalizeChange({ status, from, to }) {
  if (status === 'R' && !isMarkdown(to)) return { status: 'D', from, to: from };
  if ((status === 'R' || status === 'C') && !isMarkdown(from)) return { status: 'A', from: to, to };
  if (status === 'C') return { status: 'A', from: to, to };
  if (status === 'T') return { status: 'M', from, to };
  return { status, from, to };
}

async function runPool(tasks, n) {
  let next = 0;
  const worker = async () => {
    while (next < tasks.length) {
      try {
        await tasks[next++]();
      } catch (err) {
        console.warn(`::warning::${err?.message}`);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, tasks.length) }, worker));
}

async function main() {
  const head = git('rev-parse', '--verify', `${env.HEAD_SHA || 'HEAD'}^{commit}`).trim();
  let base = (env.BASE_SHA || '').trim();
  if (!base || /^0+$/.test(base) || !commitExists(base)) {
    if (base) console.log(`Base "${base}" is not usable, falling back to ${head.slice(0, 7)}~1`);
    base = `${head}~1`;
  }
  base = git('rev-parse', '--verify', `${base}^{commit}`).trim();

  const langs = [...new Set((env.LANGS || DEFAULT_LANGS).split(',').map((l) => l.trim()).filter(Boolean))];
  if (!langs.length) fatal('No target locale');
  for (const l of langs) {
    if (!/^[a-z]{2}(-[A-Za-z]+)?$/.test(l) || l === 'en') fatal(`Invalid target locale "${l}"`);
    if (!fs.existsSync(`i18n/${l}/${PLUGIN_DIR}`)) fatal(`Folder i18n/${l}/${PLUGIN_DIR} not found (run the script from the repository root)`);
  }

  console.log(`i18n-sync: ${base.slice(0, 7)}..${head.slice(0, 7)} → [${langs.join(', ')}] model=${MODEL}${DRY_RUN ? ' (dry run)' : ''}`);

  const changes = parseNameStatus(git('diff', '--name-status', '-z', '-M', base, head, '--', 'docs', 'versioned_docs'))
    .filter((c) => isMarkdown(c.from) || isMarkdown(c.to))
    .map(normalizeChange);

  if (!changes.length) {
    console.log('No Markdown change detected. Nothing to do.');
    return;
  }
  console.log(`${changes.length} changed Markdown file(s)`);
  if (changes.length > MAX_FILES) {
    fatal(`${changes.length} changed Markdown files exceed I18N_MAX_FILES=${MAX_FILES}. Run the workflow manually with a closer base SHA or raise the limit.`);
  }
  if (!DRY_RUN && !env.OPENAI_API_KEY) fatal('OPENAI_API_KEY is not set');

  const summary = { translated: [], updated: [], moved: [], deleted: [], skipped: [], failed: [] };
  const tasks = [];

  // Phase 1: deletions and moves are applied immediately; translations are queued.
  for (const { status, from, to } of changes) {
    for (const lang of langs) {
      const target = toI18nPath(to, lang);
      if (!target) continue;
      if (!fs.existsSync(versionRoot(target))) {
        summary.skipped.push(`${target} (no ${versionRoot(target)} folder)`);
        continue;
      }

      if (status === 'D') {
        if (fs.existsSync(target)) {
          console.log(`- [${lang}] delete ${target}`);
          if (!DRY_RUN) fs.rmSync(target, { force: true });
          summary.deleted.push(target);
        }
        continue;
      }

      let targetExists = fs.existsSync(target);
      if (status === 'R') {
        const oldTarget = toI18nPath(from, lang);
        if (oldTarget && oldTarget !== target && fs.existsSync(oldTarget)) {
          if (targetExists) {
            console.log(`- [${lang}] delete ${oldTarget} (renamed to an already translated file)`);
            if (!DRY_RUN) fs.rmSync(oldTarget, { force: true });
            summary.deleted.push(oldTarget);
          } else {
            console.log(`- [${lang}] move ${oldTarget} → ${target}`);
            if (!DRY_RUN) {
              fs.mkdirSync(path.dirname(target), { recursive: true });
              fs.renameSync(oldTarget, target);
            }
            summary.moved.push(`${oldTarget} → ${target}`);
            targetExists = true;
          }
        }
      }

      const oldSrc = status === 'A' ? '' : showFile(base, from);
      const newSrc = showFile(head, to);
      if (!newSrc.trim()) continue;
      if (targetExists && oldSrc === newSrc) continue; // content unchanged (pure rename)

      tasks.push(async () => {
        const existing = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
        const hasTranslation = !!existing || (DRY_RUN && targetExists);
        let mode = 'full';
        if (hasTranslation) mode = oldSrc ? 'update' : 'resync';
        const bucket = mode === 'full' ? summary.translated : summary.updated;
        const label = `${lang}] [${to}`;
        console.log(`→ [${lang}] ${mode === 'full' ? 'translate' : mode} ${to} → ${target}`);
        if (DRY_RUN) {
          bucket.push(target);
          return;
        }
        try {
          const out = await translateFile(lang, { mode, oldSrc, newSrc, existing }, label);
          if (out !== existing) {
            fs.mkdirSync(path.dirname(target), { recursive: true });
            fs.writeFileSync(target, out);
          }
          bucket.push(target);
          console.log(`✓ [${lang}] ${target}`);
        } catch (err) {
          console.warn(`::warning::[${label}] translation failed: ${err?.status ?? ''} ${err?.message}`);
          summary.failed.push(`${target}: ${err?.message}`);
        }
      });
    }
  }

  // Phase 2: translations.
  await runPool(tasks, CONCURRENCY);

  const lines = [
    `## i18n-sync summary (${base.slice(0, 7)}..${head.slice(0, 7)})`,
    '',
    ...Object.entries(summary).map(([k, list]) => `- ${k}: ${list.length}`),
  ];
  for (const [k, list] of Object.entries(summary)) {
    if (list.length) lines.push('', `### ${k}`, '', ...list.map((f) => `- ${f}`));
  }
  const text = lines.join('\n');
  console.log(`\n${text}`);
  if (env.GITHUB_STEP_SUMMARY) fs.appendFileSync(env.GITHUB_STEP_SUMMARY, `${text}\n`);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  main().catch((err) => fatal(err?.stack || String(err)));
}
