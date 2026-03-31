#!/usr/bin/env node
/**
 * Propagates English documentation changes from a git commit to i18n files.
 * Finds the matching translated lines by content-based anchors, translates
 * the new English text, and replaces in-place (no spurious insertions).
 *
 * Usage:
 *   node tools/propagate-commit-translations.js --commit <sha> [options]
 *
 * Options:
 *   --commit <sha>            Git commit SHA to propagate (required)
 *   --targets <lang,lang,...>  Target languages (default: auto-detect from i18n/)
 *   --dry-run                 Preview without writing files
 *   --commit-changes          Create a git commit with the changes
 *   --commit-message=<msg>    Custom commit message (use = for messages with spaces)
 *   --throttle <ms>           Delay between translation API calls (default: 600)
 *   --verbose                 Show detailed matching info
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const https = require("https");

// ═══════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════

function git(cmd) {
  return execSync(`git ${cmd}`, { encoding: "utf8", maxBuffer: 50 * 1024 * 1024 }).trim();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ═══════════════════════════════════════════════════════════════════
// CLI
// ═══════════════════════════════════════════════════════════════════

function parseArgs() {
  const opts = {
    commit: "",
    targets: [],
    dryRun: false,
    commitChanges: false,
    commitMessage: "",
    throttle: 600,
    verbose: false,
  };

  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // --key=value syntax
    if (arg.includes("=")) {
      const eqIdx = arg.indexOf("=");
      const key = arg.slice(0, eqIdx);
      const val = arg.slice(eqIdx + 1);
      if (key === "--commit") { opts.commit = val; continue; }
      if (key === "--targets") { opts.targets = val.split(",").map(s => s.trim()).filter(Boolean); continue; }
      if (key === "--commit-message") { opts.commitMessage = val; continue; }
      if (key === "--throttle") { opts.throttle = Number(val); continue; }
    }

    if (arg === "--commit") { opts.commit = args[++i] || ""; }
    else if (arg === "--targets") { opts.targets = (args[++i] || "").split(",").map(s => s.trim()).filter(Boolean); }
    else if (arg === "--dry-run") { opts.dryRun = true; }
    else if (arg === "--commit-changes") { opts.commitChanges = true; }
    else if (arg === "--commit-message") { opts.commitMessage = args[++i] || ""; }
    else if (arg === "--throttle") { opts.throttle = Number(args[++i] || "600"); }
    else if (arg === "--verbose") { opts.verbose = true; }
  }

  if (!opts.commit) throw new Error("Required: --commit <sha>");
  return opts;
}

// ═══════════════════════════════════════════════════════════════════
// Git operations
// ═══════════════════════════════════════════════════════════════════

function getChangedFiles(sha) {
  return git(`show --name-only --pretty=format: ${sha}`)
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && l.endsWith(".md"))
    .filter((l) => l.startsWith("docs/") || l.startsWith("versioned_docs/"));
}

function parseDiffHunks(sha, filePath) {
  const raw = git(`show --unified=0 --no-color ${sha} -- "${filePath.replace(/"/g, '\\"')}"`);
  const lines = raw.split(/\r?\n/);
  const hunks = [];
  let cur = null;

  for (const line of lines) {
    if (line.startsWith("@@ ")) {
      if (cur) hunks.push(cur);
      const m = line.match(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      cur = {
        oldStart: m ? Number(m[1]) : 1,
        oldCount: m && m[2] !== undefined ? Number(m[2]) : 1,
        newStart: m ? Number(m[3]) : 1,
        newCount: m && m[4] !== undefined ? Number(m[4]) : 1,
        removed: [],
        added: [],
      };
      continue;
    }
    if (!cur) continue;
    if (line.startsWith("-") && !line.startsWith("---")) {
      cur.removed.push(line.slice(1));
    } else if (line.startsWith("+") && !line.startsWith("+++")) {
      cur.added.push(line.slice(1));
    }
  }
  if (cur) hunks.push(cur);
  return hunks;
}

// ═══════════════════════════════════════════════════════════════════
// File path mapping
// ═══════════════════════════════════════════════════════════════════

function getTargetLanguages(requested) {
  if (requested.length > 0) return requested;
  return fs
    .readdirSync("i18n", { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((l) => l !== "en");
}

function mapToI18nPath(enPath, lang) {
  if (enPath.startsWith("docs/")) {
    return path.join("i18n", lang, "docusaurus-plugin-content-docs", "current", enPath.slice(5));
  }
  if (enPath.startsWith("versioned_docs/")) {
    const parts = enPath.split("/");
    return path.join("i18n", lang, "docusaurus-plugin-content-docs", parts[1], parts.slice(2).join(path.sep));
  }
  return "";
}

// ═══════════════════════════════════════════════════════════════════
// Content-based line matching
// ═══════════════════════════════════════════════════════════════════

function extractAnchors(text) {
  const anchors = [];
  let m;

  // 1. Markdown link URLs (never translated, highest confidence)
  const urlRe = /\]\(([^)]+)\)/g;
  while ((m = urlRe.exec(text)) !== null) {
    anchors.push({ value: m[1], weight: 10, type: "link-url" });
  }

  // 2. HTML comments (never translated)
  const htmlRe = /<!--[\s\S]*?-->/g;
  while ((m = htmlRe.exec(text)) !== null) {
    anchors.push({ value: m[0], weight: 10, type: "html" });
  }

  // 3. Link display text (ALL CAPS command names like VERIFY CURRENT DATA FILE)
  const linkTextRe = /\[([A-Z][A-Z ]{2,}[A-Z])\]/g;
  while ((m = linkTextRe.exec(text)) !== null) {
    anchors.push({ value: m[1], weight: 5, type: "link-text" });
  }

  // 4. Parenthesized file extensions like (.4DD)
  const extRe = /\(\.[A-Za-z0-9]{2,5}\)/g;
  while ((m = extRe.exec(text)) !== null) {
    anchors.push({ value: m[0], weight: 5, type: "ext" });
  }

  // 5. Escaped markdown patterns like 0\. (preserved in translation)
  const escapedRe = /\d+\\\./g;
  while ((m = escapedRe.exec(text)) !== null) {
    anchors.push({ value: m[0], weight: 4, type: "escaped" });
  }

  // 6. ALL CAPS words (2+ chars) - technical terms
  const capsRe = /\b[A-Z]{2,}\b/g;
  while ((m = capsRe.exec(text)) !== null) {
    // Avoid duplicates from link text already captured
    if (!anchors.some((a) => a.type === "link-text" && a.value.includes(m[0]))) {
      anchors.push({ value: m[0], weight: 2, type: "caps" });
    }
  }

  // 7. Known system variable / technical names preserved across translations
  for (const term of ["Document", "OK"]) {
    if (text.includes(term) && !anchors.some((a) => a.value === term)) {
      anchors.push({ value: term, weight: 3, type: "sysvar" });
    }
  }

  return anchors;
}

function findMatchingLine(targetLines, oldEnText, excludeSet, verbose) {
  const anchors = extractAnchors(oldEnText);
  if (anchors.length === 0) return -1;

  let bestIdx = -1;
  let bestScore = 0;
  const totalWeight = anchors.reduce((s, a) => s + a.weight, 0);

  for (let i = 0; i < targetLines.length; i++) {
    if (excludeSet && excludeSet.has(i)) continue;
    const line = targetLines[i];
    let score = 0;
    for (const a of anchors) {
      if (line.includes(a.value)) score += a.weight;
    }
    if (score > bestScore) {
      bestScore = score;
      bestIdx = i;
    }
  }

  const minScore = Math.max(2, totalWeight * 0.25);
  if (verbose && bestIdx >= 0) {
    const matched = anchors.filter((a) => targetLines[bestIdx].includes(a.value));
    console.log(`    match L${bestIdx + 1} score=${bestScore}/${totalWeight} anchors=[${matched.map((a) => a.type + ":" + a.value).join(", ")}]`);
  }

  return bestScore >= minScore ? bestIdx : -1;
}

// ═══════════════════════════════════════════════════════════════════
// Markdown protection for translation
// ═══════════════════════════════════════════════════════════════════

function protectMarkdown(text) {
  const tokens = [];
  let result = text;

  function save(match) {
    const ph = `XMDX${tokens.length}XMDX`;
    tokens.push(match);
    return ph;
  }

  // Order: longest/most specific patterns first
  result = result.replace(/<!--[\s\S]*?-->/g, (m) => save(m));
  result = result.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (m) => save(m));
  result = result.replace(/`[^`]+`/g, (m) => save(m));
  result = result.replace(/\*{3}[^*]+\*{3}/g, (m) => save(m));
  result = result.replace(/\*{2}[^*]+\*{2}/g, (m) => save(m));
  result = result.replace(/\*[^*]+\*/g, (m) => save(m));
  result = result.replace(/\(\.[A-Za-z0-9]{2,5}\)/g, (m) => save(m));

  return { text: result, tokens };
}

function restoreMarkdown(text, tokens) {
  let result = text;
  for (let i = 0; i < tokens.length; i++) {
    // Translation APIs may add spaces around the number and change case
    const pattern = new RegExp(`xmdx\\s*${i}\\s*xmdx`, "gi");
    result = result.replace(pattern, tokens[i]);
  }
  return result;
}

// ═══════════════════════════════════════════════════════════════════
// Translation (MyMemory API - free, no dependency)
// ═══════════════════════════════════════════════════════════════════

const CACHE_FILE = ".translation-cache.json";
let translationCache = new Map();

function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      translationCache = new Map(Object.entries(JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"))));
    } catch (_) { /* ignore corrupt cache */ }
  }
}

function saveCache() {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(Object.fromEntries(translationCache), null, 2), "utf8");
}

function callMyMemory(text, targetLang) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({
      q: text,
      langpair: `en|${targetLang}`,
    });
    const url = `https://api.mymemory.translated.net/get?${params.toString()}`;

    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            const status = Number(json.responseStatus);
            if (status === 200) {
              let translated = json.responseData.translatedText;
              // Decode HTML entities that MyMemory returns
              translated = translated
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;/g, "&")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'");
              resolve(translated);
            } else {
              reject(new Error(json.responseDetails || `MyMemory status ${status}`));
            }
          } catch (e) {
            reject(new Error(`Parse error: ${e.message}`));
          }
        });
      })
      .on("error", reject);
  });
}

async function translateText(text, targetLang, throttleMs) {
  const trimmed = text.trim();
  if (!trimmed) return text;

  const cacheKey = `${targetLang}::${trimmed}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  // Protect markdown elements
  const { text: plain, tokens } = protectMarkdown(trimmed);

  await sleep(throttleMs);

  // Retry with exponential backoff
  let translated = null;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      translated = await callMyMemory(plain, targetLang);
      break;
    } catch (e) {
      if (attempt === 3) throw e;
      await sleep(1500 * Math.pow(2, attempt));
    }
  }

  // Restore markdown elements
  const result = restoreMarkdown(translated, tokens);
  translationCache.set(cacheKey, result);
  return result;
}

// ═══════════════════════════════════════════════════════════════════
// Hunk application
// ═══════════════════════════════════════════════════════════════════

async function applyHunks(targetPath, hunks, lang, opts) {
  const content = fs.readFileSync(targetPath, "utf8");
  const eol = content.includes("\r\n") ? "\r\n" : "\n";
  const lines = content.split(/\r?\n/);
  let applied = 0;
  let skipped = 0;
  const errors = [];
  const usedIndices = new Set();

  // Process hunks in reverse to preserve index validity after splices
  const sorted = [...hunks].sort((a, b) => b.oldStart - a.oldStart);

  for (const hunk of sorted) {
    // Find the matching line in the translated file using content anchors
    let matchIdx = -1;

    // Try each removed line to find a match
    for (const removedLine of hunk.removed) {
      if (!removedLine.trim()) continue;
      matchIdx = findMatchingLine(lines, removedLine, usedIndices, opts.verbose);
      if (matchIdx >= 0) break;
    }

    // Fallback: try first added line (for pure insertions where oldCount=0)
    if (matchIdx < 0 && hunk.oldCount === 0 && hunk.added.length > 0) {
      // For pure insertions, use the line BEFORE the insertion point
      matchIdx = Math.max(0, Math.min(hunk.oldStart - 1, lines.length - 1));
    }

    if (matchIdx < 0) {
      console.warn(`    [skip] No matching line found for hunk at EN L${hunk.oldStart}`);
      skipped++;
      continue;
    }

    // Translate the new English lines
    const translatedLines = [];
    try {
      for (const newLine of hunk.added) {
        translatedLines.push(await translateText(newLine, lang, opts.throttle));
      }
    } catch (e) {
      const msg = e.message || String(e);
      console.warn(`    [skip] Translation error for hunk at EN L${hunk.oldStart}: ${msg}`);
      errors.push(msg);
      skipped++;
      continue;
    }

    // For single-line replacement (most common case):
    // Replace exactly 1 line at matchIdx with the translated line(s)
    if (hunk.oldCount === 1) {
      lines.splice(matchIdx, 1, ...translatedLines);
      usedIndices.add(matchIdx);
      applied++;
      continue;
    }

    // For multi-line replacement:
    // Replace oldCount lines starting at matchIdx
    // But limit to avoid overflowing into unrelated content
    const deleteCount = Math.min(hunk.oldCount, lines.length - matchIdx);
    lines.splice(matchIdx, deleteCount, ...translatedLines);
    for (let j = matchIdx; j < matchIdx + deleteCount; j++) usedIndices.add(j);
    applied++;
  }

  const updated = lines.join(eol);
  return { changed: updated !== content, content: updated, applied, skipped, errors };
}

// ═══════════════════════════════════════════════════════════════════
// Git commit
// ═══════════════════════════════════════════════════════════════════

function commitFiles(files, message) {
  for (const f of files) {
    git(`add "${f.replace(/\\/g, "/").replace(/"/g, '\\"')}"`);
  }
  git(`commit -m "${message.replace(/"/g, '\\"')}"`);
}

// ═══════════════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════════════

async function main() {
  const opts = parseArgs();
  const targets = getTargetLanguages(opts.targets);
  const changedFiles = getChangedFiles(opts.commit);

  if (changedFiles.length === 0) throw new Error("No markdown doc files found in the commit.");
  if (targets.length === 0) throw new Error("No target languages found in i18n/.");

  loadCache();

  console.log(`\nCommit: ${opts.commit}`);
  console.log(`English pages changed: ${changedFiles.length}`);
  changedFiles.forEach((f) => console.log(`  ${f}`));
  console.log(`Target languages: ${targets.join(", ")}\n`);

  const updatedFiles = [];

  for (const enFile of changedFiles) {
    const hunks = parseDiffHunks(opts.commit, enFile);
    if (hunks.length === 0) continue;

    console.log(`── ${enFile} (${hunks.length} hunk(s)) ──`);

    for (const lang of targets) {
      const targetPath = mapToI18nPath(enFile, lang);
      if (!targetPath || !fs.existsSync(targetPath)) {
        console.log(`  [${lang}] skip: file not found (${targetPath})`);
        continue;
      }

      const result = await applyHunks(targetPath, hunks, lang, opts);

      if (!result.changed) {
        console.log(`  [${lang}] no changes${result.skipped > 0 ? ` (${result.skipped} skipped)` : ""}`);
        continue;
      }

      if (!opts.dryRun) {
        fs.writeFileSync(targetPath, result.content, "utf8");
      }

      updatedFiles.push(targetPath);
      console.log(
        `  [${lang}] ${result.applied} hunk(s) applied, ${result.skipped} skipped${opts.dryRun ? " (dry-run)" : ""}`
      );
    }
  }

  saveCache();

  const unique = [...new Set(updatedFiles)];
  console.log(`\nTotal: ${unique.length} file(s) updated`);

  if (opts.commitChanges && !opts.dryRun && unique.length > 0) {
    const msg = opts.commitMessage || `chore(i18n): propagate translations from ${opts.commit.slice(0, 8)}`;
    commitFiles(unique, msg);
    console.log("Committed on current branch.");
  }
}

main().catch((e) => {
  console.error(`\nError: ${e.message || e}`);
  process.exit(1);
});
