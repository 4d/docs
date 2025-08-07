const fs = require('fs');
const path = require('path');
let exclude = ["cs", "de"];

let default_file = "./syntax/en.lproj/syntaxEN.json";
let dest = "/Users/gkotulski/Git/4eDimension/20R10/4D/Resources/";
for(let language of ["en", "es", "pt", "es", "cs", "ja", "de", "fr"]) {
    let file = `./syntax/${language}.lproj/syntax${language.toUpperCase()}.json`;
    if(exclude.includes(language)) {
        console.log(`Takes english ${language}`);
        file = default_file;
    }
    console.log(`Copying ${file} to ${language}`);
    fs.copyFileSync(file, path.join(dest, `${language}.lproj/syntax${language.toUpperCase()}.json`));
}