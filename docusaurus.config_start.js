let config = require("./docusaurus.config")

let newConfig = config;
newConfig.presets[0][1].docs.path = "docsPostProcessed/docs";

newConfig.presets[0][1].docs.disableVersioning = true
newConfig.presets[0][1].docs.lastVersion = "current"
newConfig.presets[0][1].docs.versions = {}

module.exports = newConfig