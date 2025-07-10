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
- for a beta branch: get the prod and generate, then push in the branch

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


## tools

Exemple:

`node tools/overview_build`
-> regénérer page des thèmes en anglais


## Classic Commands Update

- new command:
  1. create a page in commands folder
  2. add reference in:
    - commands/theme/ page
    - sidebars.js
    - commands/command-index.md (includes version added number) 
- modified command (moved to commands):
  1. move to commands (use move_command.exe)
  2. same as above


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
Sur github, faire une PR de docs4d/docs/main sur 4d/docs/main

### Algolia (4D only)
Aller dans l'interface Algolia et lancer un reindex de la doc






