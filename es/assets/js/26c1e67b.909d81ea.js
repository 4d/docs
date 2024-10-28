"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18589],{627315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=t(474848),r=t(28453);const d={id:"encrypt-data-blob",title:"Encrypt data BLOB",slug:"/commands/encrypt-data-blob",displayed_sidebar:"docs"},l=void 0,o={id:"commands-legacy/encrypt-data-blob",title:"Encrypt data BLOB",description:"Encrypt data BLOB ( blobAEncriptar ; objetoLlave | frasePasar ; sal ; blobEncriptado ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/encrypt-data-blob.md",sourceDirName:"commands-legacy",slug:"/commands/encrypt-data-blob",permalink:"/docs/es/commands/encrypt-data-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"encrypt-data-blob",title:"Encrypt data BLOB",slug:"/commands/encrypt-data-blob",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Discover data key",permalink:"/docs/es/commands/discover-data-key"},next:{title:"Encrypt data file",permalink:"/docs/es/commands/encrypt-data-file"}},s={},c=[{value:"Description",id:"description",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Encrypt data BLOB"})," ( ",(0,a.jsx)(n.em,{children:"blobAEncriptar"})," ; objetoLlave | frasePasar ; ",(0,a.jsx)(n.em,{children:"sal"})," ; ",(0,a.jsx)(n.em,{children:"blobEncriptado"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"blobAEncriptar"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"BLOB a encriptar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objetoLlave | frasePasar"}),(0,a.jsx)(n.td,{children:"Objeto, Texto"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Objeto JSON que contiene la llave de cifrado o la frase de paso para la generaci\xf3n directa de la llave de cifrado (texto)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"sal"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Sal adicional para el algoritmo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"blobEncriptado"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"BLOB Encriptado"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"True si la encriptaci\xf3n se ha realizado correctamente, False en caso contrario"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"Encrypt data BLOB"})," encripta el par\xe1metro ",(0,a.jsx)(n.em,{children:"blobAEncriptar"})," con el mismo algoritmo que 4D utiliza para encriptar datos (AES-256) y devuelve el resultado en ",(0,a.jsx)(n.em,{children:"blobEncriptado"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede utilizar un ",(0,a.jsx)(n.em,{children:"objetoLlave"})," o una ",(0,a.jsx)(n.em,{children:"frasePasar"})," para encriptar el BLOB:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"objetoLlave"}),": un objeto JSON que contiene la llave de cifrado, con la misma estructura que el objeto devuelto por el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/new-data-key",children:"New data key"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"frasePasar"}),": una cadena utilizada para generar la llave de cifrado"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"sal"})," un n\xfamero que se utilizar\xe1 para hacer el cifrado m\xe1s robusto."]}),"\n",(0,a.jsxs)(n.p,{children:["Si el cifrado tiene \xe9xito, los datos cifrados se devuelven en el par\xe1metro ",(0,a.jsx)(n.em,{children:"blobEncriptado"})," y el comando devuelve True."]}),"\n",(0,a.jsx)(n.p,{children:"En caso de error, el BLOB se devuelve vac\xedo y el comando devuelve False."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," cuando se encripta un blob utilizando ",(0,a.jsx)(n.strong,{children:"Encrypt data BLOB"}),", el ",(0,a.jsx)(n.em,{children:"blobEncriptado"})," resultante es un m\xfaltiplo de 16 bytes debido al algoritmo de encriptaci\xf3n. En consecuencia, si ",(0,a.jsx)(n.em,{children:"blobAEncriptar"})," no es un m\xfaltiplo de 16 bytes, el comando lo convierte autom\xe1ticamente en un m\xfaltiplo de 16 bytes a\xf1adiendo bytes nulos al final. Para evitar errores al descifrar el blob con ",(0,a.jsx)(n.a,{href:"/docs/es/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),", es necesario manejar el tama\xf1o del ",(0,a.jsx)(n.em,{children:"blobAEncriptar"}),(0,a.jsx)(n.br,{}),"\ncuando se trabaja con archivos que no son de texto. Para un ejemplo detallado de c\xf3mo hacerlo, ver ",(0,a.jsx)(n.a,{href:"https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/",children:"este art\xedculo del blog"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Encriptar un archivo de texto ubicado en la carpeta RESOURCES de la base de datos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $fileToEncrypt;$encryptedFile : 4D.File\n\xa0var $blobToEncrypt;$encryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToEncrypt:=File("/RESOURCES/confidential.txt")\n\xa0$encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0\n\xa0$blobToencrypt:=$fileToEncrypt.getContent()\n\xa0\n\xa0$result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)\n\xa0$encryptedFile.setContent($encryptedBlob)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/encrypt-data-file",children:"Encrypt data file"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/new-data-key",children:"New data key"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(296540);const r={},d=a.createContext(r);function l(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);