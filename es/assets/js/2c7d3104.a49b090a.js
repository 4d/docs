"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10377],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,l(l({ref:a},c),{},{components:t})):r.createElement(f,l({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49776:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});t(67294);var r=t(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"paths",title:"Rutas de acceso"},s=void 0,i={unversionedId:"Concepts/paths",id:"version-20-R2/Concepts/paths",title:"Rutas de acceso",description:"Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gesti\xf3n de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/es/20-R2/Concepts/paths",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"paths",title:"Rutas de acceso"},sidebar:"docs",previous:{title:"Identificadores",permalink:"/docs/es/20-R2/Concepts/identifiers"},next:{title:"ORDA",permalink:"/docs/es/20-R2/ORDA/overview"}},p={},c=[{value:"Rutas de los filesystem",id:"rutas-de-los-filesystem",level:2},{value:"Sintaxis POSIX",id:"sintaxis-posix",level:2},{value:"Sintaxis espec\xedfica de la plataforma",id:"sintaxis-espec\xedfica-de-la-plataforma",level:2},{value:"Windows",id:"windows",level:3},{value:"Rutas de acceso Windows y secuencias de escape",id:"rutas-de-acceso-windows-y-secuencias-de-escape",level:4},{value:"macOS",id:"macos",level:3},{value:"Rutas absolutas y relativas",id:"rutas-absolutas-y-relativas",level:2},{value:"Constructores <code>File</code> y <code>Folder</code>",id:"constructores-file-y-folder",level:3},{value:"Funciones de carpeta <code>.file()</code> y <code>.folder()</code>",id:"funciones-de-carpeta-file-y-folder",level:3},{value:"Ejemplos",id:"ejemplos",level:2}],d={toc:c};function u(e){var{components:a}=e,t=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gesti\xf3n de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n')),(0,r.kt)("p",null,"Adem\xe1s, los objetos archivo y carpeta soportan los ",(0,r.kt)("inlineCode",{parentName:"p"},"fileSystems"),", que ofrecen una ruta contextual a las carpetas principales de la aplicaci\xf3n."),(0,r.kt)("h2",n({},{id:"rutas-de-los-filesystem"}),"Rutas de los filesystem"),(0,r.kt)("p",null,"4D acepta varios ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem")," que designan las carpetas 4D espec\xedficas con una ubicaci\xf3n variable en macOS y Windows. Las rutas de los filesystem son \xfatiles por dos razones principales:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Independencia: puede trasladar su soluci\xf3n de un lugar a otro independientemente del sistema operativo, sin tener que preocuparse por las rutas,"),(0,r.kt)("li",{parentName:"ul"},"Seguridad: ning\xfan c\xf3digo puede acceder a los elementos situados por encima de la ra\xedz del sistema de los file system en el disco (sandboxing).")),(0,r.kt)("p",null,"Se soportan los siguientes nombres de rutas de filesystem:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"filesystem"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Designa"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"/DATA"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Carpeta de datos actual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"/LOGS"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Carpeta Logs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"/PACKAGE"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Carpeta ra\xedz del proyecto (con o sin extensi\xf3n 4dbase)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"/PROJECT"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Carpeta Project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"/RESOURCES"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Carpeta de recursos actual del proyecto")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),'"/SOURCES"'),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Carpeta de fuentes del proyecto actual")))),(0,r.kt)("h2",n({},{id:"sintaxis-posix"}),"Sintaxis POSIX"),(0,r.kt)("p",null,"La sintaxis POSIX es compatible con todas las plataformas. ",(0,r.kt)("strong",{parentName:"p"},"Se recomienda la sintaxis POSIX")," ya que es la m\xe1s flexible. Se utiliza por defecto (devuelto por las propiedades ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FileClass#path"}),"file.path")," y ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#path"}),"folder.path"),")."),(0,r.kt)("p",null,"Con esta sintaxis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'las carpetas est\xe1n separadas por "/"'),(0,r.kt)("li",{parentName:"ul"},'los nombres de ruta absolutos empiezan por "/"'),(0,r.kt)("li",{parentName:"ul"},'para subir una carpeta en una ruta relativa, utilice "../" delante del nombre de la ruta (por seguridad, no puede subir en el sistema de archivos).')),(0,r.kt)("p",null,"En la sintaxis POSIX, generalmente se utilizar\xe1 los nombres de rutas ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem")," con los comandos ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FileClass#file"}),(0,r.kt)("inlineCode",{parentName:"a"},"File"))," y ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder")),", por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n')),(0,r.kt)("h2",n({},{id:"sintaxis-espec\xedfica-de-la-plataforma"}),"Sintaxis espec\xedfica de la plataforma"),(0,r.kt)("p",null,"La sintaxis espec\xedfica de la plataforma depende del sistema operativo en el que se ejecute el comando. Tenga en cuenta que al crear un objeto archivo o carpeta con esta sintaxis, debe declararlo utilizando la constante ",(0,r.kt)("inlineCode",{parentName:"p"},"fk platform path")," como par\xe1metro."),(0,r.kt)("h3",n({},{id:"windows"}),"Windows"),(0,r.kt)("p",null,"Se soportan los siguientes modelos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'los separadores de carpetas son "\\"'),(0,r.kt)("li",{parentName:"ul"},'el texto contiene ":" y "\\" como segundo y tercer caracter,'),(0,r.kt)("li",{parentName:"ul"},'el texto comienza con "',"\\",'".')),(0,r.kt)("p",null,"Ejemplos con ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n')),(0,r.kt)("h4",n({},{id:"rutas-de-acceso-windows-y-secuencias-de-escape"}),"Rutas de acceso Windows y secuencias de escape"),(0,r.kt)("p",null,"El lenguaje 4D permite utilizar ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/Concepts/quick-tour#escape-sequences"}),"secuencias de escape"),". Las secuencias de escape comienzan con una barra invertida ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),", seguida de un caracter. Por ejemplo, ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t")," es la secuencia de escape para el caracter ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab"),"."),(0,r.kt)("p",null,"Dado que el caracter ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," tambi\xe9n se utiliza como separador en los nombres de rutas en Windows, es necesario introducir un doble ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\")," en los nombres de rutas."),(0,r.kt)("h3",n({},{id:"macos"}),"macOS"),(0,r.kt)("p",null,"Se soportan los siguientes modelos (sintaxis HFS+):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'los separadores de carpetas son ":"'),(0,r.kt)("li",{parentName:"ul"},'la ruta no debe comenzar con un ":"')),(0,r.kt)("p",null,"Ejemplos con ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume debe llamarse Monday\n')),(0,r.kt)("h2",n({},{id:"rutas-absolutas-y-relativas"}),"Rutas absolutas y relativas"),(0,r.kt)("h3",n({},{id:"constructores-file-y-folder"}),"Constructores ",(0,r.kt)("inlineCode",{parentName:"h3"},"File")," y ",(0,r.kt)("inlineCode",{parentName:"h3"},"Folder")),(0,r.kt)("p",null,"Los comandos ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FileClass#file"}),(0,r.kt)("inlineCode",{parentName:"a"},"File"))," y ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#folder"}),(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))," solo aceptan ",(0,r.kt)("strong",{parentName:"p"},"rutas absolutas"),". Las rutas relativas no est\xe1n soportadas y devolver\xe1n errores. Por ejemplo, el siguiente c\xf3digo no es permitido:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'    //ERROR\n$ko:=Folder("myFolder").create() //nombre de ruta relativo con constructor\n')),(0,r.kt)("p",null,"Si quiere manejar los archivos o las carpetas en varias ubicaciones (carpeta de proyecto, carpetas sistema, etc.), puede utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystems")," (ver arriba). Por ejemplo, puede escribir:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$okFolder:=Folder("/PACKAGE/myFolder").create() //carpeta creada a nivel de la estructura\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //archivo creado en la carpeta de datos\n')),(0,r.kt)("h3",n({},{id:"funciones-de-carpeta-file-y-folder"}),"Funciones de carpeta ",(0,r.kt)("inlineCode",{parentName:"h3"},".file()")," y ",(0,r.kt)("inlineCode",{parentName:"h3"},".folder()")),(0,r.kt)("p",null,"Las funciones de los objetos carpeta, tales como ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#file"}),(0,r.kt)("inlineCode",{parentName:"a"},"folder.file()"))," y ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/API/FolderClass#folder-1"}),(0,r.kt)("inlineCode",{parentName:"a"},"folder.folder()"))," esperan nombres de ruta POSIX relativos. Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  //para referenciar una carpeta "Picture" dentro de la carpeta de documentos del usuario\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //para crear una carpeta en el escritorio\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n')),(0,r.kt)("p",null,"Las rutas absolutas no est\xe1n soportadas y devolver\xe1n errores."),(0,r.kt)("h2",n({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)("p",null,"La flexibilidad de las funciones de archivos y de carpetas le ofrecen varias posibilidades para manipular los archivos y las carpetas, como en los siguientes ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$f:=Folder(fk desktop folder).folder("archive/jan2019")\n\n$f2:=Folder("/DATA/archive/jan2019").file("total.txt")\n\n$f3:=Folder("/DATA/archive/jan2019")\n\n$f4:=File("/DATA/info.txt")\n\n$f5:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n\n$f6:=File(fk backup log file)\n')))}u.isMDXComponent=!0}}]);