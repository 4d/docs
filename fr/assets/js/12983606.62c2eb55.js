"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36777],{603905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},238391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});r(667294);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"ZipArchiveClass",title:"ZIPArchive"},o=void 0,p={unversionedId:"API/ZipArchiveClass",id:"version-20/API/ZipArchiveClass",title:"ZIPArchive",description:"Une archive ZIP 4D est un objet File ou Folder contenant un ou plusieurs fichiers ou dossiers, qui sont compress\xe9s afin d'\xeatre plus petits que leur taille d'origine. Ces archives sont cr\xe9\xe9es avec une extension \".zip\" et peuvent \xeatre utilis\xe9es pour \xe9conomiser de l'espace sur le disque ou transf\xe9rer des fichiers sur des supports de taille limit\xe9e (par exemple, l'email ou le r\xe9seau).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/API/ZipArchiveClass.md",sourceDirName:"API",slug:"/API/ZipArchiveClass",permalink:"/docs/fr/20/API/ZipArchiveClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FZipArchiveClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"ZipArchiveClass",title:"ZIPArchive"},sidebar:"docs",previous:{title:"WebSocketServer",permalink:"/docs/fr/20/API/WebSocketServerClass"},next:{title:"ZIPFile",permalink:"/docs/fr/20/API/ZipFileClass"}},s={},d=[{value:"Exemple",id:"exemple",level:3},{value:"Sommaire",id:"sommaire",level:3},{value:"ZIP Create archive",id:"zip-create-archive",level:2},{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"ZIP Read archive",id:"zip-read-archive",level:2},{value:"Description",id:"description-1",level:4},{value:"Exemple",id:"exemple-6",level:4},{value:".root",id:"root",level:2},{value:"Description",id:"description-2",level:4}],u={toc:d};function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Une archive ZIP 4D est un objet ",(0,n.kt)("inlineCode",{parentName:"p"},"File")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"Folder")," contenant un ou plusieurs fichiers ou dossiers, qui sont compress\xe9s afin d'\xeatre plus petits que leur taille d'origine. Ces archives sont cr\xe9\xe9es avec une extension \".zip\" et peuvent \xeatre utilis\xe9es pour \xe9conomiser de l'espace sur le disque ou transf\xe9rer des fichiers sur des supports de taille limit\xe9e (par exemple, l'email ou le r\xe9seau)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cr\xe9ez une archive ZIP 4D avec la commande ",(0,n.kt)("a",a({parentName:"li"},{href:"#zip-create-archive"}),"ZIP Create archive"),"."),(0,n.kt)("li",{parentName:"ul"},"Les instances ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/API/ZipFileClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"ZIPFile"))," et ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/fr/20/API/ZipFolderClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"ZIPFolder"))," de 4D sont disponibles via la propri\xe9t\xe9 ",(0,n.kt)("a",a({parentName:"li"},{href:"#root"}),(0,n.kt)("inlineCode",{parentName:"a"},"root"))," (",(0,n.kt)("inlineCode",{parentName:"li"},"ZIPFolder"),") de l'objet retourn\xe9 par la commande ",(0,n.kt)("a",a({parentName:"li"},{href:"#zip-read-archive"}),"ZIP Read archive"),".")),(0,n.kt)("h3",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Pour r\xe9cup\xe9rer et visualiser le contenu d'un objet ZIP file :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $path; $archive : 4D.File\nvar $zipFile : 4D.ZipFile\nvar $zipFolder : 4D.ZipFolder\nvar $txt : Text\n\n$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n$archive:=ZIP Read archive($path)\n$zipFolder:=$archive.root // store the zip main folder\n$zipFile:=$zipFolder.files()[0] //read the first zipped file\n\nIf($zipFile.extension=".txt")\n $txt:=$zipFile.getText()\nEnd if\n')),(0,n.kt)("h3",a({},{id:"sommaire"}),"Sommaire"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"#root"}),(0,n.kt)("strong",{parentName:"a"},".root")," : 4D.ZipFolder"),"\xa0","\xa0","\xa0","\xa0","un dossier virtuel permettant d'acc\xe9der au contenu de l'archive ZIP")))),(0,n.kt)("h2",a({},{id:"zip-create-archive"}),"ZIP Create archive"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historique"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifications"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"19 R3"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Ajout des propri\xe9t\xe9s ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression xy"),", ",(0,n.kt)("inlineCode",{parentName:"td"},".level"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"18"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Ajout"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,n.kt)("em",{parentName:"p"},"fileToZip")," : 4D.File ; ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,n.kt)("em",{parentName:"p"},"folderToZip")," : 4D.Folder ; ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File { ; ",(0,n.kt)("em",{parentName:"p"},"options")," : Integer }) : Object",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"ZIP Create archive")," ( ",(0,n.kt)("em",{parentName:"p"},"zipStructure")," : Object ; ",(0,n.kt)("em",{parentName:"p"},"destinationFile")," : 4D.File ) : Object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"})),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"fileToZip"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Objet fichier ou dossier \xe0 compresser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"folderToZip"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"4D.Folder"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Objet fichier ou dossier \xe0 compresser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"zipStructure"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Objet fichier ou dossier \xe0 compresser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"destinationFile"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fichier de destination de l'archive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Si ",(0,n.kt)("em",{parentName:"td"},"folderToZip")," utilis\xe9 : ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Without enclosing folder"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Objet statut")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," cr\xe9e un objet d'archive ZIP compress\xe9 et renvoie le statut de l'op\xe9ration.."),(0,n.kt)("p",null,"Vous pouvez passer un objet 4D.File, 4D.Folder, ou une structure Zip en tant que premier param\xe8tre :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"fileToZip")," : passez simplement un ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," \xe0 compresser.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"folderToZip")," : passez un ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder")," \xe0 compresser. Dans ce cas, le param\xe8tre ",(0,n.kt)("em",{parentName:"p"},"options")," vous permet de compresser uniquement le contenu du dossier (c'est-\xe0-dire d'exclure le dossier parent). Par d\xe9faut, l'archive ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Create archive")," compressera le dossier et son contenu, de sorte que l'op\xe9ration de d\xe9compression recr\xe9e un dossier. Si vous souhaitez que l'op\xe9ration de d\xe9compression ne restaure que le contenu du dossier, passez la constante ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Without enclosing folder")," dans le param\xe8tre ",(0,n.kt)("em",{parentName:"p"},"options"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"zipStructure")," : passez un objet d\xe9crivant l'objet ZIP archive. Les propri\xe9t\xe9s suivantes sont disponibles pour d\xe9finir la structure :"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"compression"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": R\xe9duire la compression (par d\xe9faut)"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": compression LZMA"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": compression XZ"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression none"),": Pas de compression"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"level"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Niveau de compression. Valeurs possibles : 1 \xe0 10. Une valeur plus faible produira un fichier plus volumineux, tandis qu'une valeur plus \xe9lev\xe9e produira un fichier plus petit. Le niveau de compression a toutefois un impact sur les performances. Valeur par d\xe9faut (si omis) : ",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression standard"),": 6"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression LZMA"),": 4"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Compression XZ"),": 4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"encryption"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Le chiffrement \xe0 utiliser si un mot de passe est d\xe9fini :",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES128"),": chiffrement AES \xe0 l'aide d'une cl\xe9 128 octets."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES192"),": chiffrement AES \xe0 l'aide d'une cl\xe9 192 octets."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption AES256"),": chiffrement AES \xe0 l'aide d'une cl\xe9 256 octets (par d\xe9faut si un mot de passe est d\xe9fini)."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Encryption none"),": les donn\xe9es ne sont pas chiffr\xe9es (par d\xe9faut si aucun mot de passe n'est d\xe9fini)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"password"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Un mot de passe \xe0 d\xe9finir si le chiffrement est requis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Historique"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"une collection d'objets ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.File")," ou ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.Folder")," ou"),(0,n.kt)("li",null,"une collection d'objets dont les propri\xe9t\xe9s sont les suivantes :"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Propri\xe9t\xe9"),(0,n.kt)("td",null,"Type"),(0,n.kt)("td",null,"Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"source"),(0,n.kt)("td",null,"4D.File ou 4D.Folder"),(0,n.kt)("td",null,"File ou Folder")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"destination"),(0,n.kt)("td",null,"Text"),(0,n.kt)("td",null,"(facultatif) - Indiquer un chemin de fichier relatif pour modifier l'organisation du contenu de l'archive")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"option"),(0,n.kt)("td",null,"number"),(0,n.kt)("td",null,"(facultatif) - ",(0,n.kt)("inlineCode",{parentName:"td"},"ZIP Ignore invisible files")," ou 0 pour compresser tout le fichier"))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"4D.Function"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Une formule de r\xe9tro-appel qui recevra la progression de la compression (0 \xe0 100) dans $1.")))),(0,n.kt)("p",null,"Dans le param\xe8tre ",(0,n.kt)("em",{parentName:"p"},"destinationFile"),", passez un objet ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," d\xe9crivant l'archive ZIP \xe0 cr\xe9er (nom, emplacement, etc.). Il est conseill\xe9 d'utiliser l'extension \".zip\" si vous souhaitez que l'archive ZIP soit trait\xe9e automatiquement par un logiciel."),(0,n.kt)("p",null,"Une fois que l'archive est cr\xe9\xe9e, vous pouvez utiliser la commande ",(0,n.kt)("a",a({parentName:"p"},{href:"#zip-read-archive"}),"ZIP Read archive")," pour y acc\xe9der."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Objet statut")),(0,n.kt)("p",null,"L'objet statut retourn\xe9 contient les propri\xe9t\xe9s suivantes :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Propri\xe9t\xe9"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"statusText"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Message d'erreur (le cas \xe9ch\xe9ant) :",(0,n.kt)("li",null,"Impossible d'ouvrir l'archive ZIP"),(0,n.kt)("li",null,"Impossible de cr\xe9er une archive ZIP"),(0,n.kt)("li",null,"Le mot de passe est requis pour le chiffrement"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"status"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Code d'\xe9tat")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"success"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Vrai si l'archive a \xe9t\xe9 cr\xe9\xe9e avec succ\xe8s, sinon faux")))),(0,n.kt)("h4",a({},{id:"exemple-1"}),"Exemple 1"),(0,n.kt)("p",null,"Pour compresser un ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' var $file; $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")\n $file:=Folder(fk desktop folder).file("MyDocs/text.txt")\n\n $status:=ZIP Create archive($file;$destination)\n')),(0,n.kt)("h4",a({},{id:"exemple-2"}),"Exemple 2"),(0,n.kt)("p",null,"Pour compresser un ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Folder")," sans le dossier lui-m\xeame :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' var $folder : 4D.Folder\n var $destination : 4D.File\n var $status : Object\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")\n $folder:=Folder(fk desktop folder).folder("MyDocs/Images")\n\n $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)\n')),(0,n.kt)("h4",a({},{id:"exemple-3"}),"Exemple 3"),(0,n.kt)("p",null,"Pour compresser une structure d'archive ZIP avec un mot de passe et une barre de progression :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$status : Object\n var progID : Integer\n\n $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n\n $zip:=New object\n $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()\n $zip.password:="password"\n $zip.callback:=Formula(myFormulaCompressingMethod($1))\n\n progID:=Progress New //nous utilisons le composant 4D Progress\n\n $status:=ZIP Create archive($zip;$destination)\n\n Progress QUIT(progID)\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"myFormulaCompressingMethod"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"})," var $1 : Integer\n Progress SET PROGRESS(progID;Num($1/100))\n")),(0,n.kt)("h4",a({},{id:"exemple-4"}),"Exemple 4"),(0,n.kt)("p",null,"Vous souhaitez passer une collection de dossiers et de fichiers \xe0 compresser \xe0 l'objet ",(0,n.kt)("em",{parentName:"p"},"zipStructure")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' var $destination : 4D.File\n var $zip;$err : Object\n $zip:=New object\n $zip.files:=New collection\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))\n $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))\n\n $destination:=Folder(fk desktop folder).file("file.zip")\n $err:=ZIP Create archive($zip;$destination)\n')),(0,n.kt)("h4",a({},{id:"exemple-5"}),"Exemple 5"),(0,n.kt)("p",null,"Vous souhaitez utiliser un autre algorithme de compression \xe0 un niveau de compression \xe9lev\xe9 :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'var $destination : 4D.File\nvar $zip; $err : Object\n\n$zip:=New object\n$zip.files:=New collection\n$zip.files.push(Folder(fk desktop folder).folder("images"))\n$zip.compression:=ZIP Compression LZMA\n$zip.level:=7 //4 par d\xe9faut\n\n$destination:=Folder(fk desktop folder).file("images.zip")\n$err:=ZIP Create archive($zip; $destination)\n')),(0,n.kt)("h2",a({},{id:"zip-read-archive"}),"ZIP Read archive"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historique"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifications"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"18"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Ajout"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ZIP Read archive")," ( ",(0,n.kt)("em",{parentName:"p"},"zipFile")," : 4D.File { ; ",(0,n.kt)("em",{parentName:"p"},"password")," : Text }) : 4D.ZipArchive"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Param\xe8tres"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"})),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"zipFile"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"4D.File"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fichier archive ZIP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"password"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mot de passe de l'archive ZIP, le cas \xe9ch\xe9ant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"R\xe9sultat"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"4D.ZipArchive"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Objet archive")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",a({},{id:"description-1"}),"Description"),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," r\xe9cup\xe8re le contenu de ",(0,n.kt)("em",{parentName:"p"},"zipFile")," et le renvoie sous la forme d'un objet ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cette commande ne d\xe9compresse pas l'archive ZIP, elle fournit seulement un aper\xe7u de son contenu. Pour extraire le contenu d'une archive, vous devez utiliser des m\xe9thodes telles que ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/Document#copyto"}),"file.copyTo()")," ou ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/Directory#copyto"}),"folder.copyTo()"),".")),(0,n.kt)("p",null,"Passez un objet ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.File")," r\xe9f\xe9ren\xe7ant l'archive ZIP compress\xe9e dans le param\xe8tre ",(0,n.kt)("em",{parentName:"p"},"zipFile"),". Le fichier d'archive cible est ouvert jusqu'\xe0 la fin de l'ex\xe9cution de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIP Read archive")," et jusqu'\xe0 ce que tous les contenus/r\xe9f\xe9rences soient extrait(e)s/publi\xe9(e)s ; il est ensuite ferm\xe9 automatiquement."),(0,n.kt)("p",null,"Si le ",(0,n.kt)("em",{parentName:"p"},"zipFile")," est prot\xe9g\xe9 par un mot de passe, vous devez utiliser le param\xe8tre ",(0,n.kt)("em",{parentName:"p"},"password")," pour fournir un mot de passe. Si un mot de passe est requis mais qu'il n'est pas pass\xe9 lorsque vous tentez de lire le contenu de l'archive, une erreur est g\xe9n\xe9r\xe9e."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Objet archive")),(0,n.kt)("p",null,"L'objet ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.ZipArchive")," retourn\xe9 contient une seule propri\xe9t\xe9, ",(0,n.kt)("a",a({parentName:"p"},{href:"#root"}),(0,n.kt)("inlineCode",{parentName:"a"},"root")),", dont la valeur est un objet ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.ZipFolder"),". Ce dossier d\xe9crit le contenu de l'archive ZIP."),(0,n.kt)("h4",a({},{id:"exemple-6"}),"Exemple"),(0,n.kt)("p",null,"Pour r\xe9cup\xe9rer et visualiser le contenu d'un objet ZIP file :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' var $archive : 4D.ZipArchive\n var $path : 4D.File\n\n $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")\n $archive:=ZIP Read archive($path)\n')),(0,n.kt)("p",null,"Pour r\xe9cup\xe9rer la liste des fichiers et dossiers de l'archive :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"})," $folders:=$archive.root.folders()\n $files:=$archive.root.files()\n")),(0,n.kt)("p",null,"Pour lire le contenu d'un fichier sans l'extraire du dossier root :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'\n If($files[$i].extension=".txt")\n    $txt:=$files[$i].getText()\n Else\n    $blob:=$files[$i].getContent()\n End if\n')),(0,n.kt)("p",null,"Pour extraire \xe0 partir du dossier root :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'  //extract a file\n $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))\n\n  //extract all files\n $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))\n')),(0,n.kt)("h2",a({},{id:"root"}),".root"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".root")," : 4D.ZipFolder"),(0,n.kt)("h4",a({},{id:"description-2"}),"Description"),(0,n.kt)("p",null,"La propri\xe9t\xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},".root")," contient un dossier virtuel permettant d'acc\xe9der au contenu de l'archive ZIP."),(0,n.kt)("p",null,"Le dossier ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," et son contenu sont manipul\xe9s \xe0 l'aide des fonctions et propri\xe9t\xe9s des classes ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/ZipFileClass"}),"ZipFile")," et ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/20/API/ZipFolderClass"}),"ZipFolder"),"."),(0,n.kt)("p",null,"Cette propri\xe9t\xe9 est en ",(0,n.kt)("strong",{parentName:"p"},"lecture seule"),"."))}m.isMDXComponent=!0}}]);