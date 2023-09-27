
const fs = require('fs');
const util = require('util');
const path = require("path")

let args = process.argv.slice(2);
const mainFolder = "/"
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

function collect(mainFolder, inRegex) {
    return new Promise( async (resolve, reject)=>{

        if(!fs.existsSync(mainFolder))
        {
            resolve({})
            return;
        }

        let data = {}
        let promises = []
        let files = await readdir(mainFolder)
        const regex = inRegex


        files.forEach((file)=> {
            if(file.endsWith(".md")) {
                const content = readFile(mainFolder + file,{encoding:"utf8"})
                const p = new Promise((resolve, reject)=> {
                    let localData = {}
                    content.then((content)=> {
                        const matches = [...content.matchAll(regex)].map(m=>m[1]).filter((value, index, self)=>self.indexOf(value) == index);
                        matches.forEach((value)=> {
                            localData[value.toLocaleLowerCase()] = path.join(mainFolder, file.split('.').slice(0, -1).join('.')).replace(/\\/g, '/');
                        })
                        resolve(localData)
                    })
                })
                promises.push(p)

            }
            else
            {
                if(fs.lstatSync(mainFolder + file).isDirectory())
                {
                    const localPath = path.join(mainFolder,file) + path.sep
                    promises.push(collect(localPath, inRegex))
                }
            }
        })

        Promise.all(promises).then((localData)=> {
            for(const d of localData)
            {
                data = Object.assign(data, d)
            }
            resolve(data)
        })

    });
}

let versions = JSON.parse(fs.readFileSync("versions.json")).map(v=>path.join("versioned_docs","version-" +v))
versions.push("docs")
let listVersions = []
for(v of versions)
{
    const currentV = v.replace(/\\/g, '/')
    listVersions.push(new Promise((resolve) => collect(path.join(v, mainFolder), /<!--\s*REF\s+#_command_.([0-9a-zA-Z\s\-_]+)/g)
    .then(data =>resolve({version:currentV, data:data, name:"command"}))))

    listVersions.push(new Promise((resolve) => collect(path.join(v, mainFolder), /<!--\s*REF\s+#([0-9a-zA-Z\s\-_]+)(?<!_command_)\.[0-9a-zA-Z\s\-_]+.Syntax/g)
    .then(data =>resolve({version:currentV, data:data, name:"class"}))))
}

Promise.all(listVersions).then((localData)=> {

    let commandList = {}
    for(l of localData)
    {
        const name = l.name
        const data = l.data;
        const version = l.version
        if(Object.keys(data).length !== 0) {
            Object.keys(data).forEach(function(key, index) {
                const content = data[key]
                data[key] = content.replace(version + "/", "");
              });
        }
        const cleanVersion=version.replace("versioned_docs/version-", "").replace("docs", "").replace("-","")
        if(!commandList.hasOwnProperty(cleanVersion)) {
            commandList[cleanVersion] = {}
        }
        
        let listForVersion = commandList[cleanVersion]
        if(!listForVersion.hasOwnProperty(name))
        {
            listForVersion[name] = {}
        }
        listForVersion[name] = data
    }
    fs.writeFileSync("commandList.json", JSON.stringify(commandList))

})
