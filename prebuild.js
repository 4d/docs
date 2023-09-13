const fs = require('fs');
const util = require('util');
const path = require("path")

let args = process.argv.slice(2);
const mainFolder = args[0]
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);


function collect(mainFolder) {
    return new Promise( async (resolve, reject)=>{

        let data = {}
        let promises = []
        let files = await readdir(mainFolder)
        let listFolders = []

        files.forEach((file)=> {
            if(file.endsWith(".md")) {
                const content = readFile(mainFolder + file,{encoding:"utf8"})
                const p = new Promise((resolve, reject)=> {
                    let localData = {}
                    content.then((content)=> {
                        const regex = /<!--\s*REF\s+#_command_.([0-9a-zA-Z\s]+)/g
                        const matches = [...content.matchAll(regex)].map(m=>m[1]).filter((value, index, self)=>self.indexOf(value) == index);
                        matches.forEach((value)=> {
                            localData[value] = path.join(mainFolder, file.split('.').slice(0, -1).join('.'));
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

collect(mainFolder).then(data=>{
    if(Object.keys(data).length !== 0) {
        Object.keys(data).forEach(function(key, index) {
            const content = data[key]
            data[key] = content.replace("docs/", "");
          });
          
        fs.writeFileSync("commandList.json", JSON.stringify(data))
    }
})




