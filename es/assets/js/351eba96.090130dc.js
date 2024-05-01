"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59832],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},142672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});a(667294);var r=a(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"ZipArchiveClass",title:"ZIPArchive"},o=void 0,p={unversionedId:"API/ZipArchiveClass",id:"version-20/API/ZipArchiveClass",title:"ZIPArchive",description:'Un archivo ZIP 4D es un objeto File o Folder que contiene uno o m\xe1s archivos o carpetas, que se comprimen para ser m\xe1s peque\xf1os que su tama\xf1o original. Estos archivos se crean con una extensi\xf3n ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a trav\xe9s de medios que pueden tener limitaciones de tama\xf1o (por ejemplo, el correo electr\xf3nico o la red).',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/es/20/API/ZipArchiveClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebSocketServer",permalink:"/docs/es/20/API/WebSocketServerClass"},next:{title:"ZIPFile",permalink:"/docs/es/20/API/ZipFileClass"}},d={},s=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"Resumen",id:"resumen",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:"Ejemplo",id:"ejemplo-6",level:4},{value:".root",id:"root",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4}],c={toc:s};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un archivo ZIP 4D es un objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"Folder"),' que contiene uno o m\xe1s archivos o carpetas, que se comprimen para ser m\xe1s peque\xf1os que su tama\xf1o original. Estos archivos se crean con una extensi\xf3n ".zip" y pueden utilizarse para ahorrar espacio en el disco o transferir archivos a trav\xe9s de medios que pueden tener limitaciones de tama\xf1o (por ejemplo, el correo electr\xf3nico o la red).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cree un archivo ZIP 4D con el comando ",(0,r.kt)("a",n({parentName:"li"},{href:"#zip-create-archive"}),"ZIP Create archive"),"."),(0,r.kt)("li",{parentName:"ul"},"Las instancias ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/20/API/ZipFileClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," y ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/es/20/API/ZipFolderClass"}),(0,r.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," de 4D est\xe1n disponibles v\xeda la propriedad ",(0,r.kt)("a",n({parentName:"li"},{href:"#root"}),(0,r.kt)("inlineCode",{parentName:"a"},"root"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") del objeto devuelto por el comando ",(0,r.kt)("a",n({parentName:"li"},{href:"#zip-read-archive"}),"ZIP Read archive"),".")),(0,r.kt)("h3",n({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"Para recuperar y ver el contenido de un objeto ZIP file:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // guardar la carpeta principal del zip\n$zipFile:=$zipFolder.files()[0] //leer la primera carpeta comprimida\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n')),(0,r.kt)("h3",n({},{id:"resumen"}),"Resumen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"#root"}),(0,r.kt)("strong",{parentName:"a"},".root")," : 4D.ZipFolder"),"\xa0","\xa0","\xa0","\xa0","una carpeta virtual que permite acceder al contenido del archivo ZIP")))),(0,r.kt)("h2",n({},{id:"zip-create-archive"}),"ZIP Create archive"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3rico"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Lanzamiento"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modificaciones"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"19 R3"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Adici\xf3n de las propiedades ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression xy"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".level"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"18"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"fileToZip")," : 4D.File ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"folderToZip")," : 4D.Folder ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File { ; ",(0,r.kt)("em",{parentName:"p"},"options")," : Integer }) : Object",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipStructure")," : Object ; ",(0,r.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"fileToZip"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D.File"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto archivo o carpeta a comprimir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"folderToZip"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D.Folder"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto archivo o carpeta a comprimir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"zipStructure"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto archivo o carpeta a comprimir")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"destinationFile"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D.File"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Archivo de destino del archivo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Opci\xf3n ",(0,r.kt)("em",{parentName:"td"},"folderToZip"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto estado")))),(0,r.kt)("p",null,"|"),(0,r.kt)("h4",n({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,r.kt)("p",null,"El comando ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," crea un objeto de archivo ZIP comprimido y devuelve el estado de la operaci\xf3n."),(0,r.kt)("p",null,"Puede pasar un objeto 4D.File, 4D.Folder, o una estructura zip como primer par\xe1metro:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"fileToZip"),": simplemente pase un ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," a comprimir.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"folderToZip"),": pase un ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Folder")," a comprimir. En este caso, el par\xe1metro ",(0,r.kt)("em",{parentName:"p"},"options")," permite comprimir s\xf3lo el contenido de la carpeta (es decir, excluir la carpeta padre). Por defecto, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," comprimir\xe1 la carpeta y su contenido, de modo que la operaci\xf3n de descompresi\xf3n volver\xe1 a crear una carpeta. Si desea que la operaci\xf3n de descompresi\xf3n restaure s\xf3lo el contenido de la carpeta, pase la constante ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," en el par\xe1metro ",(0,r.kt)("em",{parentName:"p"},"options"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"zipStructure"),": pase un objeto que describa el objeto ZIP archivo. Las siguientes propiedades est\xe1n disponibles para definir la estructura:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Propiedad"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"compression"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": Reducir la compresi\xf3n (por defecto)"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": compresi\xf3n LZMA"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": compresi\xf3n XZ"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": sin compresi\xf3n"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"level"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nivel de compresi\xf3n. Valores posibles: 1 a 10. Un valor m\xe1s bajo producir\xe1 un archivo m\xe1s grande, mientras que un valor m\xe1s alto producir\xe1 un archivo m\xe1s peque\xf1o. Sin embargo, el nivel de compresi\xf3n influye en el rendimiento. Valores por defecto si se omiten: ",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"encryption"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"La encriptaci\xf3n a utilizar si se define una contrase\xf1a:",(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": encriptaci\xf3n AES con una llave de 128 bits."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": encriptaci\xf3n AES con una llave de 192 bits."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": encriptaci\xf3n AES con una llave de 256 bits (por defecto si se define la contrase\xf1a)."),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": los datos no est\xe1n encriptados (por defecto si no se define una contrase\xf1a)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"contrase\xf1a"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Una contrase\xf1a a utilizar si se requiere encriptaci\xf3n.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Hist\xf3rico"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Collection"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("li",null,"una colecci\xf3n de objetos ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.File")," o ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Folder")," o"),(0,r.kt)("li",null,"una colecci\xf3n de objetos con las siguientes propiedades:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Propiedad"),(0,r.kt)("td",null,"Tipo"),(0,r.kt)("td",null,"Descripci\xf3n")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"source"),(0,r.kt)("td",null,"4D.File o 4D.Folder"),(0,r.kt)("td",null,"File o Folder")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"destination"),(0,r.kt)("td",null,"Text"),(0,r.kt)("td",null,"(opcional) - Especifica una ruta de archivo relativa para cambiar la organizaci\xf3n del contenido del archivo")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,"number"),(0,r.kt)("td",null,"(opcional) - ",(0,r.kt)("inlineCode",{parentName:"td"},"ZIP Ignore invisible files")," o 0 para comprimir todo el archivo"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"retrollamada"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D.Function"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Una f\xf3rmula de retrollamada que recibir\xe1 la progresi\xf3n de la compresi\xf3n (0 - 100) en $1.")))),(0,r.kt)("p",null,"En el par\xe1metro ",(0,r.kt)("em",{parentName:"p"},"destinationFile"),", pase un objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File"),' describiendo el archivo ZIP a crear (nombre, ubicaci\xf3n, etc.). Se aconseja utilizar la extensi\xf3n ".zip" si quiere que el archivo ZIP sea procesado autom\xe1ticamente por cualquier software.'),(0,r.kt)("p",null,"Una vez creado un archivo, puede utilizar el comando ",(0,r.kt)("a",n({parentName:"p"},{href:"#zip-read-archive"}),"ZIP Read archive")," para acceder a \xe9l."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objeto estado")),(0,r.kt)("p",null,"El objeto status devuelto contiene las siguientes propiedades:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Propiedad"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"statusText"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mensaje de error (si lo hay):",(0,r.kt)("li",null,"No se puede abrir el archivo ZIP"),(0,r.kt)("li",null,"No se puede crear un archivo ZIP"),(0,r.kt)("li",null,"La contrase\xf1a es necesaria para la codificaci\xf3n"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"status"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"C\xf3digo de estado")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"True si el archivo se ha creado con \xe9xito, si no, false")))),(0,r.kt)("h4",n({},{id:"ejemplo-1"}),"Ejemplo 1"),(0,r.kt)("p",null,"Para comprimir un ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n')),(0,r.kt)("h4",n({},{id:"ejemplo-2"}),"Ejemplo 2"),(0,r.kt)("p",null,"Para comprimir un ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Folder")," sin la carpeta misma:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n')),(0,r.kt)("h4",n({},{id:"ejemplo-3"}),"Ejemplo 3"),(0,r.kt)("p",null,"Para comprimir una estructura de archivo ZIP con una contrase\xf1a y una barra de progreso:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //utilizamos el componente 4D Progress\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myFormulaCompressingMethod"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"})," var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n")),(0,r.kt)("h4",n({},{id:"ejemplo-4"}),"Ejemplo 4"),(0,r.kt)("p",null,"Quiere pasar una colecci\xf3n de carpetas y archivos para comprimir al objeto ",(0,r.kt)("em",{parentName:"p"},"zipStructure"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n')),(0,r.kt)("h4",n({},{id:"ejemplo-5"}),"Ejemplo 5"),(0,r.kt)("p",null,"Desea utilizar un algoritmo de compresi\xf3n alternativo con un alto nivel de compresi\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //por defecto es 4\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n')),(0,r.kt)("h2",n({},{id:"zip-read-archive"}),"ZIP Read archive"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3rico"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Lanzamiento"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modificaciones"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"18"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIP Read archive")," ( ",(0,r.kt)("em",{parentName:"p"},"zipFile")," : 4D.File { ; ",(0,r.kt)("em",{parentName:"p"},"password")," : Text }) : 4D.ZipArchive"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"})),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"zIPFile"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D.File"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Archivos Zip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"contrase\xf1a"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Text"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Contrase\xf1a del archivo ZIP, si la hay")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Result"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"4D.ZipArchive"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Objeto archivo")))),(0,r.kt)("p",null,"|"),(0,r.kt)("h4",n({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,r.kt)("p",null,"El comando ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," recupera el contenido de ",(0,r.kt)("em",{parentName:"p"},"zipFile")," y lo devuelve como un objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Este comando no descomprime el archivo ZIP, s\xf3lo ofrece una vista de su contenido. Para extraer el contenido de un archivo, es necesario utilizar m\xe9todos como ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20/API/Document#copyto"}),"file.copyTo()")," o ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20/API/Directory#copyto"}),"folder.copyTo()"),".")),(0,r.kt)("p",null,"Pase un objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.File")," haciendo referencia al archivo ZIP comprimido en el par\xe1metro ",(0,r.kt)("em",{parentName:"p"},"zipFile"),". El archivo de destino se abrir\xe1 hasta que el ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," haya terminado de ejecutarse y todos los contenidos/referencias hayan sido extra\xeddos/liberados, entonces se cerrar\xe1 autom\xe1ticamente."),(0,r.kt)("p",null,"Si el ",(0,r.kt)("em",{parentName:"p"},"archivo_zip")," est\xe1 protegido por contrase\xf1a, es necesario utilizar el par\xe1metro opcional ",(0,r.kt)("em",{parentName:"p"},"password")," para suministrar una contrase\xf1a. Si se requiere una contrase\xf1a pero no se pasa al intentar leer el contenido del archivo, se genera un error."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objeto archivo")),(0,r.kt)("p",null,"El objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," revuelto contiene una sola propiedad, ",(0,r.kt)("a",n({parentName:"p"},{href:"#root"}),(0,r.kt)("inlineCode",{parentName:"a"},"root")),", cuyo valor es un objeto.",(0,r.kt)("inlineCode",{parentName:"p"},"4D.ZipFolder"),". Esta carpeta describe todo el contenido del archivo ZIP."),(0,r.kt)("h4",n({},{id:"ejemplo-6"}),"Ejemplo"),(0,r.kt)("p",null,"Para recuperar y ver el contenido de un objeto ZIP file:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n')),(0,r.kt)("p",null,"Para recuperar la lista de los archivos y carpetas del archivo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n")),(0,r.kt)("p",null,"Para leer el contenido de un archivo sin extraerlo de la carpeta root:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n')),(0,r.kt)("p",null,"Para extraer desde la carpeta root:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  //extraer un archivo\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extraer todos los archivos\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n')),(0,r.kt)("h2",n({},{id:"root"}),".root"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".root")," : 4D.ZipFolder"),(0,r.kt)("h4",n({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,r.kt)("p",null,"La propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},".root")," contiene una carpeta virtual que permite acceder al contenido del archivo ZIP."),(0,r.kt)("p",null,"La carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," y su contenido pueden ser manipulados con las funciones y propiedades ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20/API/ZipFileClass"}),"ZipFile")," y ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20/API/ZipFolderClass"}),"ZipFolder"),"."),(0,r.kt)("p",null,"Esta propiedad es ",(0,r.kt)("strong",{parentName:"p"},"de s\xf3lo lectura"),"."))}m.isMDXComponent=!0}}]);