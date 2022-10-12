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
