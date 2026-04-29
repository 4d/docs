# doc


## Commands

### Start

Two processes should run at the same time:

* The preprocess
* The docusaurus start

#### The Preprocess

run `npm run start_watch` in one terminal.
The files from the folder "docs" will be preprocessed in the folder named "docsPostProcessed". A change to a file will be automatically preprocessed.

#### Docusaurus Start

The `docusaurus.config_start.js` uses `docusaurus.config.js` with a few modifications:

* path: "docsPostProcessed/docs"
* versions: only the current version is used

`npm run start -- --config ./docusaurus.config_start.js` in a new terminal to start the preview with this new config.

### Build

* Build the full doc: `npm run build`
* Build english only: `npm run build -- --locale en`

### Syntax

To generate syntax files:

`npm run syntax`

- auto build for main
- for a beta branch: see [generate syntax files](#generate-syntax-files) below

## Markdown conventions

### API file names

* xxxxClass.md -> exposed class function file
* xxxx.md -> non-exposed class function file (included only)

### preprocessing.conf

References class names vs file names

### html tags in markdown

A `#` in tag means used for syntax file. Other tags are used for ref/include only

* for a class function/property : 
`<!-- REF #ClassNameClass.functionName.Syntax -->` and `<!-- REF #ClassNameClass.functionName.Summary -->` 
ex: `<!-- REF #FileHandleClass.getSize().Syntax -->` and `<!-- REF #FileHandleClass.getSize().Summary -->`


* for a 4D command
`<!-- REF #_command_.name.Syntax -->` and `<!-- REF #_command_.name.Summary -->`
ex: `<!-- REF #_command_.IMAP New transporter.Syntax -->` and `<!-- REF #_command_.IMAP New transporter.Summary -->`

* REF = declare a ref, INCLUDE = insert a ref

## Prototype conventions

* variadic parameter syntax : `...paramName : type ` -> . Ex: "( name : Text ; ... value : Integer )"
* no specific type: `any`
* optional : `{ paramName1 : type }{; paramName2 : type }`
* optional but only if previous param is passed: `{ paramName1 : type {; paramName2 : type }}`


## Tools

Exemple:

`node tools/overview_build`
-> regénérer page des thèmes en anglais


### Classic Commands Update

- new command:
  1. create a page in commands folder
  2. add reference in:
    - commands/theme/ page
    - sidebars.js
    - commands/command-index.md (includes version added number) 
- modified command (moved to commands):
  1. move to commands (use move_command.exe)
  2. same as above

### Generate syntax files

- go where the docusaurus.config.js is located
- run `node tools/syntax-version.js --version=<version>`
if no `<version>` is provided the syntax will be generated with the last version.
`<version>` can be version-18, version-19, version-20, version-20-R9... like located in the versioned_docs folder.

## Versioning

### Préparation AVANT creation de version
- mettre à jour les liens:
  - sur la page Home
  - sur la sidebar
  - dans la page Notes (what's new pages+bugs)

- attention, uniquement deux R sont visibles (enlever anciens liens)

### Netkit

- dans la sidebar: readme github qui correspond à la version : à modifier
- dans la page home : https://developer.4d.com/4D-NetKit/ qui pointe la branche MAIN de 4D-Netkit (nothing to do)
- dans le readme final : mettre à jour la version qui correspond à MAIN
(dans la fork de la doc, on garde les features qui ne sont pas dans la beta courante)

### Créer la version vXX-Rx beta

0. Vérifier la version de Nodejs et aussi de docusaurus
1. Se placer dans main prête pour être versionnée (liens OK, **pas de pull request en attente**)
2. lancer le script

`npm run docusaurus docs:version XX-Rx (ex: 19-R4)`

### Mettre à jour docusaurus.config.js

Dans les presets:

1. Ajouter la version + BETA,
2. Retirer le BETA de la version précédente

ex :

```
versions: {
'19-R5':{
label: 'v19 R5 BETA',
banner: 'none',
},
'19-R4':{
label: 'v19 R4',
banner: 'none',
},
```

### Mettre à jour les i18n

1. Se placer dans **main** et lancer le script qui extrait les chaines à traduire:
`npm run docusaurus write-translations`

2. Aller dans le dossier i18n\en\docusaurus-plugin-content-docs/en/version-XX-RX.json (version RX-1) et mettre à jour la chaîne de la version précédente qui contient BETA (apparaît dans le menu)

3. Aller dans i18n\en\code.json, à la fin du fichier : liens de la page Home (vers extensions) à mettre à jour

### Mettre à jour le lien vers les versions Notes précédentes dans notes

Lien main :
`See [**Release Notes for 4D 20.x LTS**](../../20/Notes/updates)`. <br/>
à transformer en 
`See [**Release Notes for 4D 20.x LTS**](../20/Notes/updates)`. 

### Si problème de traduction avec cmfcmf:
1. Faire
`git restore --rebase --autostash` 
pour se synchroniser avec le repo
2. Dans docusaurus.config.js, désactiver `require.resolve('@cmfcmf/docusaurus-search-local')`,
+ supprimer @cmfcmf dans les plug ins de node

3. Lancer write-translations
4. remettre docusaurus.config.js
5. faire `npm i`

### Supprimer la version précédente (si nécessaire)
1. Enlever la version dans le version.json
2. A la main : supprimer la version dans versioned_docs et versioned_sidebars
3. A la main, supprimer la version dans les sous-dossiers i18n (langues)

### Commit dans main
1. Sur github desktop, faire un commit des modifs dans main
2. Faire un push

### Lancer une synchro sur Crowdin
Forcer une synchro globale de main sur Crowdin

Tester : Faire npm run build

### Builder
voir ["mise à jour prod"](#mise-a-jour-prod) ci dessous

### Algolia (4D only)
Aller dans l'interface Algolia et lancer un reindex de la doc

## Mise à jour 4D NetKit
1. Synchro avec prod (4D/4DNetKit)
2. Pull request vers prod : Main pour version en ligne
3. Pull request vers prod : version qui shippe pour doc embedded

## Mise à jour prod
1. Créer une nouvelle branche en local nommée par exemple Tempo
2. faire git fetch upstream (met à jour la preprod avec la prod)
3. faire git rebase upstream/main -X ours (remettre tout dans Tempo et en cas de conflit prendre la preprod)
4. git push (fait une PR auto et pas de conflit)

5. En cas de conflits résolus: sur la preprod sur github, cliquer sur **Sync Fork**.

## Building new architecture for sorted themes
### Edit the sidebars.js file
- replace the whole themes "Commands by themes" with
```{
          "type": "category",
          "label": "Commands by theme",
          "items": [
            {
              "type": "autogenerated",
              "dirName": "language-legacy",
            }
          ],
        },
```
### Edit the docusaurus.config.js
1. fix the locale for npm run start
```function getCliLocaleFromArgv() {
  // supporte: "--locale fr" ou "--locale=fr"
  const i = process.argv.indexOf('--locale');
  if (i > -1 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')) {
    return process.argv[i + 1];
  }
  const eq = process.argv.find((a) => a.startsWith('--locale='));
  if (eq) return eq.split('=')[1];
  return undefined;
}
```
2. Implement the functions to get i18n, sort, and push
```// docusaurus.config.js
const fs = require('fs');
const path = require('path');

// 1) Collator FR (tri “dictionnaire” : accents pris en compte)
const collators = {};
function getCollator(locale) {
  const loc = locale || 'en';
  if (!collators[loc]) {
    // Sensibilité 'accent' => 'é' > 'e' (contraire de 'base' qui les considère égaux)
    collators[loc] = new Intl.Collator(loc, {
      usage: 'sort',
      sensitivity: 'accent',
      ignorePunctuation: false,
      numeric: true,
    });
    // Log de diag : vérifie la locale réellement résolue par ICU
    const resolved = collators[loc].resolvedOptions().locale;
    console.log(`[sidebar-sort] requested=${loc} resolved=${resolved}`);
  }
  return collators[loc];
}

// 2) Charge le catalogue i18n des sidebars pour la locale
function loadSidebarTranslations(locale) {
  if (!locale || typeof locale !== 'string') return {};
  const base = path.join(__dirname, 'i18n', locale, 'docusaurus-plugin-content-docs');
  const candidates = [
    path.join(base, 'current.json'),
    path.join(base, 'current', 'current.json'),
    path.join(base, 'default', 'current.json'),
    path.join(__dirname, 'i18n', locale, 'code.json'),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file)) {
      try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch { /* ignore */ }
    }
  }
  return {};
}

// 3) Déduit le nom de la sidebar (docs/mainSidebar/…)
//    à partir des clés présentes dans le JSON de traduction.
function guessSidebarNameFromTranslations(translations) {
  for (const k of Object.keys(translations || {})) {
    const m = /^sidebar\.([^.]+)\.category\./.exec(k);
    if (m) return m[1];
  }
  return 'docs';
}

// 4) Récupère la traduction d’un label de catégorie
function getTranslatedCategoryLabel(labelSource, sidebarName, translations) {
  const src = String(labelSource || '').normalize('NFC').trim();
  if (!src) return '';
  const directKey = `sidebar.${sidebarName}.category.${src}`;
  const direct = translations[directKey]?.message;
  if (direct && direct.trim()) return direct;

  // Tolérance : si le nom de sidebar diffère, on scanne
  for (const [k, v] of Object.entries(translations)) {
    const m = /^sidebar\.([^.]+)\.category\.(.+)$/.exec(k);
    if (!m) continue;
    const keyLabel = String(m[2] || '').normalize('NFC').trim();
    if (keyLabel.localeCompare(src, undefined, {sensitivity: 'accent'}) === 0) {
      const msg = v?.message;
      if (msg && msg.trim()) return msg;
    }
  }
  // Pas de traduction → fallback source
  return src;
}

// 5) Clé de tri
function sortKey(item, helpers) {
  const { translations, sidebarName } = helpers;
  if (item.type === 'category') {
    return getTranslatedCategoryLabel(item.label, sidebarName, translations);
  }
  return item.label || item.title || item.id || '';
}

// 6) Tri des catégories racine.
function sortRec(items, helpers) {
  const collator = getCollator(helpers.locale);
  const withChildrenSorted = items.map((it) => {
    if (it.type === 'category' && Array.isArray(it.items)) {
      return { ...it, items: sortRec(it.items, helpers) };
    }
    return it;
  });
  return withChildrenSorted.sort((a, b) => collator.compare(sortKey(a, helpers), sortKey(b, helpers)));
}
```

### In docs/ AND in i18n/\<locale>\/docusaurus-plugin-content-docs/current folders

1. Add a "language-legacy/" folder
2. Add "language-legacy/\<theme\>" subfolders
3. "language-legacy/\<theme>\/_category_.json" files
contents of the_category_.json files:
```{
  "label": "Arrays",
  "link": {"type": "doc", "id": "commands/theme/Arrays_theme"},
  "key": "Arrays-key"
}
```
4; Check missing slugs
4. fix links:
   - ./commands/truc.md -> ./commands/truc
   - ../commands/truc.md -> ../commands/truc
   - ../commands-legacy/truc.md -> ../commands/truc


## Propager les traductions par IA dans VScode 

1. Dans une branche un commit propre contenant les modifications EN à reporter
2. Dans VSCode faire Ctrl+Shift+P (ou Terminal > Run task)
3. Choisir :
Translate commit (dry-run) — pour prévisualiser
Translate commit (apply + commit) — pour appliquer et committer
4. Coller le SHA du commit quand demandé

5. ## GRAM

| Character | r value |
|----------|---------|
| B | a_bool |
| X | noarg |
| A | a_text |
| S | _AnyText |
| a | _AnyText |
| R | _ETENDU |
| l | _LONGENTIER |
| L | _AnyNum |
| D | a_date |
| T | a_temps |
| o | a_object |
| U | a_pointe |
| u | _PtrNum |
| E | a_expr |
| e | a_expr |
| v | a_var |
| V | a_var |
| $ | a_var |
| C | a_champ |
| y | a_champouvar |
| Y | a_champouvar |
| W | a_ficouchamp |
| F | a_fichier |
| f | a_fichierstrict |
| * | a_etoile |
| # | a_dif |
| & | a_et |
| ! | a_ou |
| = | a_egal |
| Z | a_restant |
| j | a_collection |
| p | a_picture |
| b | a_blob |
| > | a_sup / a_supegal / a_supouinf |
| < | a_inf / a_infegal |
| + | a_fourch |
| % | a_contient_keyword |
| 179 (³) | a_supegal |
| 178 (²) | a_infegal |
| 177 (±) | a_fourch |
| 199 (Ç) | a_supouinf |
| 164 (¤) | a_contient_keyword |
| default | (assert) |

