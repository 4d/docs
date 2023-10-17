"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76629],{603905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var o=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var a=o.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return o.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||n;return t?o.createElement(f,s(s({ref:a},d),{},{components:t})):o.createElement(f,s({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=c;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<n;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},490603:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});t(667294);var o=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"paths",title:"Pathnames"},l=void 0,i={unversionedId:"Concepts/paths",id:"version-20-R3/Concepts/paths",title:"Pathnames",description:"As fun\xe7\xf5es, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gest\xe3o de arquivos e pastas poderosa e flex\xedvel. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/pt/Concepts/paths",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"paths",title:"Pathnames"},sidebar:"docs",previous:{title:"Identificadores",permalink:"/docs/pt/Concepts/identifiers"},next:{title:"ORDA",permalink:"/docs/pt/ORDA/overview"}},p={},d=[{value:"Filesystem pathnames",id:"filesystem-pathnames",level:2},{value:"Sintaxe POSIX",id:"sintaxe-posix",level:2},{value:"Sintaxe espec\xedfica da plataforma",id:"sintaxe-espec\xedfica-da-plataforma",level:2},{value:"Windows",id:"windows",level:3},{value:"Entering Windows pathnames and escape sequences",id:"entering-windows-pathnames-and-escape-sequences",level:4},{value:"macOS",id:"macos",level:3},{value:"Nomes de caminho absolutos e relativos",id:"nomes-de-caminho-absolutos-e-relativos",level:2},{value:"Construtores <code>File</code> e <code>Folder</code>",id:"construtores-file-e-folder",level:3},{value:"<code>.file()</code> and <code>.folder()</code> folder methods",id:"file-and-folder-folder-methods",level:3},{value:"Exemplos",id:"exemplos",level:2}],m={toc:d};function c(e){var{components:a}=e,t=n(e,["components"]);return(0,o.kt)("wrapper",r({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As fun\xe7\xf5es, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gest\xe3o de arquivos e pastas poderosa e flex\xedvel. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n')),(0,o.kt)("p",null,"Al\xe9m disso, os objectos de arquivos e pastas suportam ",(0,o.kt)("inlineCode",{parentName:"p"},"fileSystems"),", que fornecem o caminho contextual para as pastas principais da aplica\xe7\xe3o."),(0,o.kt)("h2",r({},{id:"filesystem-pathnames"}),"Filesystem pathnames"),(0,o.kt)("p",null,"4D aceita v\xe1rios ",(0,o.kt)("inlineCode",{parentName:"p"},"filesystem")," pathnames que designam pastas 4D espec\xedficas com localiza\xe7\xe3o vari\xe1vel em macOS e Windows. Os nomes de caminho do sistema de arquivos s\xe3o \xfateis por duas raz\xf5es principais:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Independ\xeancia: Pode mover a sua solu\xe7\xe3o de um local para outro, independentemente do sistema operativo, sem ter de se preocupar com caminhos,"),(0,o.kt)("li",{parentName:"ul"},"Seguran\xe7a: Nenhum c\xf3digo pode acessar elementos localizados acima da raiz do sistema de arquivos no disco (sandboxing).")),(0,o.kt)("p",null,"S\xe3o compat\xedveis os seguintes nomes de caminho do sistema de arquivos:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"filesystem"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Designa"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"/DATA"'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pasta de dados actual")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"/LOGS"'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pasta Logs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"/PACKAGE"'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pasta de raiz do projeto (com ou sem extens\xe3o 4dbase)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"/PROJECT"'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pasta Project")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"/RESOURCES"'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pasta de recursos do projeto atual")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),'"/SOURCES"'),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Pasta de fontes do projeto atual")))),(0,o.kt)("h2",r({},{id:"sintaxe-posix"}),"Sintaxe POSIX"),(0,o.kt)("p",null,"A sintaxe POSIX \xe9 suportada em todas as plataformas. ",(0,o.kt)("strong",{parentName:"p"},"A sintaxe POSIX \xe9 recomendada")," por ser a mais flex\xedvel. \xc9 utilizado por predefini\xe7\xe3o (devolvido pelas propriedades ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FileClass#path"}),"file.path")," e ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#path"}),"folder.path"),")."),(0,o.kt)("p",null,"Com esta sintaxe:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'as pastas s\xe3o separadas por "/"'),(0,o.kt)("li",{parentName:"ul"},'os nomes de caminho absolutos come\xe7am com um "/"'),(0,o.kt)("li",{parentName:"ul"},'para subir uma pasta num caminho relativo, utilize "../" \xe0 frente do nome do caminho (por seguran\xe7a, n\xe3o pode subir no sistema de arquivos).')),(0,o.kt)("p",null,"Na sintaxe POSIX, utiliza-se geralmente ",(0,o.kt)("inlineCode",{parentName:"p"},"filesystem")," pathnames com os comandos ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FileClass#file"}),(0,o.kt)("inlineCode",{parentName:"a"},"File"))," e ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#folder"}),(0,o.kt)("inlineCode",{parentName:"a"},"Folder"))," , por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n')),(0,o.kt)("h2",r({},{id:"sintaxe-espec\xedfica-da-plataforma"}),"Sintaxe espec\xedfica da plataforma"),(0,o.kt)("p",null,"A sintaxe espec\xedfica da plataforma depende do sistema operativo em que o comando \xe9 executado. Note-se que, ao criar um objeto de ficheiro ou pasta com esta sintaxe, \xe9 necess\xe1rio declar\xe1-lo utilizando como par\xe2metro a constante ",(0,o.kt)("inlineCode",{parentName:"p"},"fk platform path")," ."),(0,o.kt)("h3",r({},{id:"windows"}),"Windows"),(0,o.kt)("p",null,"S\xe3o suportados os seguintes padr\xf5es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'os separadores de pasta s\xe3o "\\"'),(0,o.kt)("li",{parentName:"ul"},"the text contains ':' and '\\' as the second and third character,"),(0,o.kt)("li",{parentName:"ul"},'o texto come\xe7a por "',"\\",'".')),(0,o.kt)("p",null,"Exemplos com ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#folder"}),(0,o.kt)("inlineCode",{parentName:"a"},"Folder")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n')),(0,o.kt)("h4",r({},{id:"entering-windows-pathnames-and-escape-sequences"}),"Entering Windows pathnames and escape sequences"),(0,o.kt)("p",null,"A linguagem 4D permite a utiliza\xe7\xe3o das sequ\xeancias de escape ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/Concepts/quick-tour#escape-sequences"})),". As sequ\xeancias de fuga come\xe7am com uma barra invertida ",(0,o.kt)("inlineCode",{parentName:"p"},"\\"),", seguida de um car\xe1cter. Por exemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"\\t")," \xe9 a sequ\xeancia de escape para o car\xe1cter ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab")," ."),(0,o.kt)("p",null,"Uma vez que o car\xe1cter ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," tamb\xe9m \xe9 utilizado como separador nos nomes de caminho no Windows, \xe9 necess\xe1rio introduzir um duplo ",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\")," nos nomes de caminho do Windows."),(0,o.kt)("h3",r({},{id:"macos"}),"macOS"),(0,o.kt)("p",null,"S\xe3o suportados os seguintes padr\xf5es (sintaxe HFS+):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'os separadores de pasta s\xe3o ":"'),(0,o.kt)("li",{parentName:"ul"},'o caminho n\xe3o deve come\xe7ar com um ":"')),(0,o.kt)("p",null,"Exemplos com ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#folder"}),(0,o.kt)("inlineCode",{parentName:"a"},"Folder")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume deve ser chamado Monday\n')),(0,o.kt)("h2",r({},{id:"nomes-de-caminho-absolutos-e-relativos"}),"Nomes de caminho absolutos e relativos"),(0,o.kt)("h3",r({},{id:"construtores-file-e-folder"}),"Construtores ",(0,o.kt)("inlineCode",{parentName:"h3"},"File")," e ",(0,o.kt)("inlineCode",{parentName:"h3"},"Folder")),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FileClass#file"}),(0,o.kt)("inlineCode",{parentName:"a"},"Os comandos File"))," e ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#folder"}),(0,o.kt)("inlineCode",{parentName:"a"},"Folder"))," s\xf3 aceitam ",(0,o.kt)("strong",{parentName:"p"},"nomes de caminho absolutos"),". Os nomes de caminho relativos n\xe3o s\xe3o suportados e devolver\xe3o erros. Por exemplo, o seguinte c\xf3digo n\xe3o \xe9 permitido:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'    //ERROR\n$ko:=Folder("myFolder").create() //nome do caminho relativo com construtor\n')),(0,o.kt)("p",null,"Se quiser tratar a arquivos pastas em v\xe1rias localiza\xe7\xf5es (pasta do projeto, pastas do sistema, etc.), pode utilizar os  ",(0,o.kt)("inlineCode",{parentName:"p"},"filesystems")," (ver acima). Por exemplo, pode escrever:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$okFolder:=Folder("/PACKAGE/myFolder").create() //pasta criada ao n\xedvel da estrutura\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //ficheiro criado na pasta de dados\n')),(0,o.kt)("h3",r({},{id:"file-and-folder-folder-methods"}),(0,o.kt)("inlineCode",{parentName:"h3"},".file()")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},".folder()")," folder methods"),(0,o.kt)("p",null,"As fun\xe7\xf5es dos objetos pasta, tais como ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#file"}),(0,o.kt)("inlineCode",{parentName:"a"},"folder.file()"))," e ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/FolderClass#folder-1"}),(0,o.kt)("inlineCode",{parentName:"a"},"folder.folder()"))," esperam nomes de caminho POSIX relativos. Por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  //para referenciar uma pasta "Picture" dentro da pasta de documentos do utilizador\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //para criar uma pasta no ambiente de trabalho\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n')),(0,o.kt)("p",null,"Os nomes de caminho absolutos n\xe3o s\xe3o suportados e devolver\xe3o erros."),(0,o.kt)("h2",r({},{id:"exemplos"}),"Exemplos"),(0,o.kt)("p",null,"A flexibilidade das fun\xe7\xf5es de arquivos e pastas oferece-lhe v\xe1rias possibilidades de tratamento de arquivos e pastas, como nos exemplos seguintes:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$f:=Folder(fk desktop folder).folder("archive/jan2019")\n\n$f2:=Folder("/DATA/archive/jan2019").file("total.txt")\n\n$f3:=Folder("/DATA/archive/jan2019")\n\n$f4:=File("/DATA/info.txt")\n\n$f5:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n\n$f6:=File(fk backup log file)\n')))}c.isMDXComponent=!0}}]);