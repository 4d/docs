
const fs = require('fs');
const path = require("path")
const preprocess = require("@4dsas/doc_preprocessing/lib/preprocessor")
const settings = require("@4dsas/doc_preprocessing/lib/settings")

const mainFolder = "/"


let versions = JSON.parse(fs.readFileSync("versions.json")).map(v => path.join("versioned_docs", "version-" + v))
versions.push("docs")
let listVersions = []
for (v of versions) {
    const info = new settings.Settings()
    info.set(settings.SETTINGS_KEY.PATH, path.join(v, mainFolder))
    info.set(settings.SETTINGS_KEY.CONFIG, "preprocessing.conf")
    info.set(settings.SETTINGS_KEY.EXCLUDE_LIST, ["ViewPro"])

    const currentV = v.replace(/\\/g, '/')

    listVersions.push(new Promise((resolve) => {
        let processor = new preprocess.Preprocessing(info); 
        processor.collect()
            .then(() => resolve({ version: currentV, data: processor.formatIndex() }))
    }))

}

Promise.all(listVersions).then((localData) => {

    let commandList = {}
    for (l of localData) {
        const data = l.data;
        const version = l.version
        const versionWithDash = version.replace("versioned_docs/version-", "")
        const cleanVersion = version.replace("versioned_docs/version-", "").replace("docs", "").replace("-", "")

        let commands = {}

        function cleanPath(inPath) {
            let path = inPath.replace(/\\/g, '/').replace("versioned_docs/version-", "")
            let paths = path.split("/");

            for (let i = 0; i < paths.length; i++) {
                if (paths[i] === "docs") {
                    paths[i] = ""
                }
                if (paths[i] === versionWithDash) {
                    paths[i] = ""
                }
            }
            path = paths.join("/")
                .replace(".md", "").slice(1)
            return path;
        }
        const regex = /slug:\s*(.*)/

        if (Object.keys(data).length !== 0) {
            Object.keys(data).forEach(function (key, index) {
                const split = key.split('.')
                if (split[0] === "_command_") {
                    const source = data[key]
                    const content = fs.readFileSync(source).toString()
                    const result = content.match(regex)
                    let dest = cleanPath(data[key]);
                    if(result)
                    {
                        dest = result[1].slice(1)
                    }
                    commands[split[1].toLowerCase()] = dest;
                }
            });
        }

        let classes = {}
        if (Object.keys(data).length !== 0) {
            Object.keys(data).forEach(function (key, index) {
                const split = key.split('.')
                if (split[0] !== "_command_" && split.slice(-1) == "Syntax" && split[0] !== "4D") {
                    classes[split[0].toLocaleLowerCase()] = cleanPath(data[key]);
                }
            });
        }

        if (!commandList.hasOwnProperty(cleanVersion)) {
            commandList[cleanVersion] = {}
        }

        let listForVersion = commandList[cleanVersion]
        if (!listForVersion.hasOwnProperty("commands")) {
            listForVersion["commands"] = {}
        }
        listForVersion["commands"] = commands

        if (!listForVersion.hasOwnProperty("classes")) {
            listForVersion["classes"] = {}
        }
        listForVersion["classes"] = classes
    }
    fs.writeFileSync("commandList.json", JSON.stringify(commandList, null, 2))

})

