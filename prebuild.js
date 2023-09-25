
const fs = require('fs');
const util = require('util');
const path = require("path")

let args = process.argv.slice(2);
const mainFolder = args[0]
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);


function collect(mainFolder) {
    return new Promise( async (resolve, reject)=>{
        if(!fs.existsSync(mainFolder))
        {
            resolve({})
            return;
        }
        let data = {}
        let promises = []
        let files = await readdir(mainFolder)

        files.forEach((file)=> {
            if(file.endsWith(".md")) {
                const content = readFile(mainFolder + file,{encoding:"utf8"})
                const p = new Promise((resolve, reject)=> {
                    let localData = {}
                    content.then((content)=> {
                        const regex = /<!--\s*REF\s+#_command_.([0-9a-zA-Z\s-_]+)/g
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
                    //listFolders.push(mainFolder + file + '/')
                    const localPath = path.join(mainFolder,file) + path.sep
                    promises.push(collect(localPath))
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
    listVersions.push(new Promise((resolve) => collect(path.join(v, mainFolder)).then(data =>resolve({version:currentV, data:data}))))
}

Promise.all(listVersions).then((localData)=> {

    let commandList = {}
    for(l of localData)
    {
        const data = l.data;
        const version = l.version
        if(Object.keys(data).length !== 0) {
            Object.keys(data).forEach(function(key, index) {
                const content = data[key]
                data[key] = content.replace(version + "/", "");
              });
        }
        const cleanVersion=version.replace("versioned_docs/version-", "").replace("docs", "")
        commandList[cleanVersion.replace("-","")] = data
    }
    fs.writeFileSync("commandList.json", JSON.stringify(commandList))

})
