const preprocess = require("@4dsas/doc_preprocessing/lib/preprocessor")
const settings = require("@4dsas/doc_preprocessing/lib/settings");
const fs = require('fs');
const path = require("path")


async function run(inFolder, sidebarObject) {

    const sidebar = sidebarObject.sidebar;
    const info = new settings.Settings()
    info.set(settings.SETTINGS_KEY.PATH, inFolder + "/")
    info.set(settings.SETTINGS_KEY.CONFIG, "preprocessing.conf")
    info.set(settings.SETTINGS_KEY.EXCLUDE_LIST, ["ViewPro"])
    let processor = new preprocess.Preprocessing(info);
    await processor.collect();
    const syntax = processor.getSyntaxObject();
    const index = processor.formatIndex();
    const reverseIndex = new Map();
    for (const key in index) {
        const value = index[key];
        const splitID = key.split(".");
        reverseIndex.set(value.split("/").at(-1), splitID[1]);
    }
    const sidebar_category = sidebar.docs[2].items[1];
    const commands = sidebar_category.items;
    const overview_folder = path.join(inFolder, "commands", "theme");
    if (!fs.existsSync(overview_folder)) {
        fs.mkdirSync(overview_folder);
    }

    for (const category of commands) {
        //console.log(category);
        if (!category.items) {
            continue;
        }
        const overview_id = category.label.replaceAll(" ", "_")
            .replace("(", "")
            .replace(")", "");
        const overview_file_name = overview_id + ".md";
        let overview = "---\n" +
            `id: ${overview_id}\n` +
            `title: ${category.label}\n` +
            "---\n"
        overview += "||\n|---|\n";
        for (const command of category.items) {
            const fileName = command.split("/").at(-1) + ".md";
            const commandName = reverseIndex.get(fileName);
            //console.log(commandName);
            const infoSyntax = syntax["_command_"][commandName];
            if (infoSyntax === undefined) {
                console.log(`Command ${commandName} not found`, fileName);
                continue;
            }
            overview += `|[<!-- INCLUDE #_command_.${commandName}.Syntax -->](../../${command}.md)<br/><!-- INCLUDE #_command_.${commandName}.Summary -->|\n`;
        }

        category.link = { type: "doc", id: `commands/theme/${overview_id}` };
        //console.log(sidebar_category);
        fs.writeFileSync(path.join(overview_folder, overview_file_name), overview);
    }

    let sidebar_stringied = JSON.stringify(sidebar, null, 2);
    if(sidebarObject.json){
        fs.writeFileSync(sidebarObject.name, sidebar_stringied);
    }
    else
    {
        sidebar_stringied = sidebar_stringied.replace(/"(\w+)":/g, "$1:");
        fs.writeFileSync(sidebarObject.name, "module.exports =\n" + sidebar_stringied);
    }
}


(async () => {
    await run("docs", {sidebar:require('../sidebars.js'), json:false, name:"sidebars.js"});
    
    let sidebarName = "versioned_sidebars/version-20-R8-sidebars.json";
    await run("versioned_docs/version-20-R8", {sidebar:JSON.parse(fs.readFileSync(sidebarName)), json:true, name:sidebarName});

    sidebarName = "versioned_sidebars/version-20-R7-sidebars.json";
    await run("versioned_docs/version-20-R7", {sidebar:JSON.parse(fs.readFileSync(sidebarName)), json:true, name:sidebarName});
})()