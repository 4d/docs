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

node tools/overview_build
-> regénérer page des thèmes en anglais


