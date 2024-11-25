"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85680"],{222369:function(e,s,n){n.r(s),n.d(s,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>i,frontMatter:()=>d});var a=JSON.parse('{"id":"Concepts/paths","title":"Rutas de acceso","description":"Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gesti\xf3n de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/paths.md","sourceDirName":"Concepts","slug":"/Concepts/paths","permalink":"/docs/es/19/Concepts/paths","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"paths","title":"Rutas de acceso"},"sidebar":"docs","previous":{"title":"Identificadores","permalink":"/docs/es/19/Concepts/identifiers"},"next":{"title":"\xbfQu\xe9 es ORDA?","permalink":"/docs/es/19/ORDA/overview"}}'),r=n("785893"),l=n("250065");let d={id:"paths",title:"Rutas de acceso"},o=void 0,c={},i=[{value:"Rutas de los filesystem",id:"rutas-de-los-filesystem",level:2},{value:"Sintaxis POSIX",id:"sintaxis-posix",level:2},{value:"Sintaxis espec\xedfica de la plataforma",id:"sintaxis-espec\xedfica-de-la-plataforma",level:2},{value:"Windows",id:"windows",level:3},{value:"Entrada de rutas Windows y secuencias de escape",id:"entrada-de-rutas-windows-y-secuencias-de-escape",level:4},{value:"macOS",id:"macos",level:3},{value:"Rutas absolutas y relativas",id:"rutas-absolutas-y-relativas",level:2},{value:"Constructores <code>File</code> y <code>Folder</code>",id:"constructores-file-y-folder",level:3},{value:"<code>.file()</code> y <code>.folder()</code>",id:"file-y-folder",level:3},{value:"Ejemplos",id:"ejemplos",level:2}];function t(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Las funciones, propiedades y comandos de las clases File y Folder le permiten manejar los archivos y las carpetas como objetos. Esto hace que la gesti\xf3n de archivos y carpetas sea poderosa y flexible. Por ejemplo, para crear un nuevo archivo en la carpeta Documentos del usuario actual, puede escribir:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Adem\xe1s, los objetos archivo y carpeta soportan los ",(0,r.jsx)(s.code,{children:"fileSystems"}),", que ofrecen una ruta contextual a las carpetas principales de la aplicaci\xf3n."]}),"\n",(0,r.jsx)(s.h2,{id:"rutas-de-los-filesystem",children:"Rutas de los filesystem"}),"\n",(0,r.jsxs)(s.p,{children:["4D acepta varios ",(0,r.jsx)(s.code,{children:"filesystem"})," que designan las carpetas 4D espec\xedficas con una ubicaci\xf3n variable en macOS y Windows. Las rutas de los filesystem son \xfatiles por dos razones principales:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Independencia: puede trasladar su soluci\xf3n de un lugar a otro independientemente del sistema operativo, sin tener que preocuparse por las rutas,"}),"\n",(0,r.jsx)(s.li,{children:"Seguridad: ning\xfan c\xf3digo puede acceder a los elementos situados por encima de la ra\xedz del sistema de los file system en el disco (sandboxing)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Se soportan los siguientes nombres de rutas de filesystem:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"filesystem"}),(0,r.jsx)(s.th,{children:"Designa"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:'"/DATA"'}),(0,r.jsx)(s.td,{children:"Carpeta de datos actual"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:'"/LOGS"'}),(0,r.jsx)(s.td,{children:"Carpeta Logs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:'"/PACKAGE"'}),(0,r.jsx)(s.td,{children:"Carpeta ra\xedz del proyecto (con o sin extensi\xf3n 4dbase)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:'"/PROJECT"'}),(0,r.jsx)(s.td,{children:"Carpeta Project"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:'"/RESOURCES"'}),(0,r.jsx)(s.td,{children:"Carpeta de recursos actual del proyecto"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:'"/SOURCES"'}),(0,r.jsx)(s.td,{children:"Carpeta de fuentes del proyecto actual"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"sintaxis-posix",children:"Sintaxis POSIX"}),"\n",(0,r.jsxs)(s.p,{children:["La sintaxis POSIX es compatible con todas las plataformas. ",(0,r.jsx)(s.strong,{children:"Se recomienda la sintaxis POSIX"})," ya que es la m\xe1s flexible. Se utiliza por defecto (devuelto por las propiedades ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FileClass#path",children:"file.path"})," y ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#path",children:"folder.path"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"Con esta sintaxis:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'las carpetas est\xe1n separadas por "/"'}),"\n",(0,r.jsx)(s.li,{children:'los nombres de ruta absolutos empiezan por "/"'}),"\n",(0,r.jsx)(s.li,{children:'para subir una carpeta en una ruta relativa, utilice "../" delante del nombre de la ruta (por seguridad, no puede subir en el sistema de archivos).'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["En la sintaxis POSIX, generalmente se utilizar\xe1 los nombres de rutas ",(0,r.jsx)(s.code,{children:"filesystem"})," con los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FileClass#file",children:(0,r.jsx)(s.code,{children:"File"})})," y ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#folder",children:(0,r.jsx)(s.code,{children:"Folder"})}),", por ejemplo:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"sintaxis-espec\xedfica-de-la-plataforma",children:"Sintaxis espec\xedfica de la plataforma"}),"\n",(0,r.jsxs)(s.p,{children:["La sintaxis espec\xedfica de la plataforma depende del sistema operativo en el que se ejecute el comando. Tenga en cuenta que al crear un objeto archivo o carpeta con esta sintaxis, debe declararlo utilizando la constante ",(0,r.jsx)(s.code,{children:"fk platform path"})," como par\xe1metro."]}),"\n",(0,r.jsx)(s.h3,{id:"windows",children:"Windows"}),"\n",(0,r.jsx)(s.p,{children:"Se soportan los siguientes modelos:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'los separadores de carpetas son ""'}),"\n",(0,r.jsx)(s.li,{children:"el texto contiene ':' y '' como segundo y tercer car\xe1cter,"}),"\n",(0,r.jsx)(s.li,{children:'el texto comienza con "\\".'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Ejemplos con ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#folder",children:(0,r.jsx)(s.code,{children:"Folder"})}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,r.jsx)(s.h4,{id:"entrada-de-rutas-windows-y-secuencias-de-escape",children:"Entrada de rutas Windows y secuencias de escape"}),"\n",(0,r.jsxs)(s.p,{children:['El editor de c\xf3digo 4D permite el uso de secuencias de escape. Una secuencia de escape es un conjunto de caracteres que se utilizan para sustituir un caracter "especial". La secuencia comienza con una barra diagonal inversa ',(0,r.jsx)(s.code,{children:"\\"}),", seguida de un caracter. Por ejemplo, ",(0,r.jsx)(s.code,{children:"\\t"})," es la secuencia de escape para el caracter ",(0,r.jsx)(s.code,{children:"Tab"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["El caracter ",(0,r.jsx)(s.code,{children:"\\"})," tambi\xe9n se utiliza como separador en los nombres de ruta Windows. En general, 4D interpretar\xe1 correctamente los nombres de ruta Windows que se introduzcan en el editor de c\xf3digo sustituyendo las barras invertidas simples ",(0,r.jsx)(s.code,{children:"\\"})," por barras invertidas dobles ",(0,r.jsx)(s.code,{children:"\\\\`. Por ejemplo,"}),"C:\\Folder",(0,r.jsx)(s.code,{children:"se convertir\xe1 en "}),"C:\\Folder`."]}),"\n",(0,r.jsxs)(s.p,{children:["Sin embargo, si escribe ",(0,r.jsx)(s.code,{children:"C:\\MyDocuments\\New"}),", 4D mostrar\xe1 ",(0,r.jsx)(s.code,{children:"C:\\\\MyDocuments\\New"}),". En este caso, la segunda ",(0,r.jsx)(s.code,{children:"\\"})," se interpreta incorrectamente como ",(0,r.jsx)(s.code,{children:"\\N"}),' (una secuencia de escape existente). Por lo tanto, debe introducir un doble "-" cuando quiera insertar una barra invertida antes de un caracter que se utiliza en una de las secuencias de escape reconocidas por 4D.']}),"\n",(0,r.jsx)(s.p,{children:"Las siguientes secuencias de escape son reconocidas por 4D:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Secuencias de escape"}),(0,r.jsx)(s.th,{children:"Car\xe1cter reemplazado"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"\\n"})}),(0,r.jsx)(s.td,{children:"LF (Nueva l\xednea)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"\\t"})}),(0,r.jsx)(s.td,{children:"HT (Tabulaci\xf3n horizontal)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"\\r"})}),(0,r.jsx)(s.td,{children:"CR (Retorno carro)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"``\\`"}),(0,r.jsx)(s.td,{children:"``` (Backslash)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:'\\"'})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:'"'})," (Comillas)"]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"macos",children:"macOS"}),"\n",(0,r.jsx)(s.p,{children:"Se soportan los siguientes modelos (sintaxis HFS+):"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'los separadores de carpetas son ":"'}),"\n",(0,r.jsx)(s.li,{children:'la ruta no debe comenzar con un ":"'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Ejemplos con ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#folder",children:(0,r.jsx)(s.code,{children:"Folder"})}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume debe llamarse Monday\n'})}),"\n",(0,r.jsx)(s.h2,{id:"rutas-absolutas-y-relativas",children:"Rutas absolutas y relativas"}),"\n",(0,r.jsxs)(s.h3,{id:"constructores-file-y-folder",children:["Constructores ",(0,r.jsx)(s.code,{children:"File"})," y ",(0,r.jsx)(s.code,{children:"Folder"})]}),"\n",(0,r.jsxs)(s.p,{children:["Los comandos ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FileClass#file",children:(0,r.jsx)(s.code,{children:"File"})})," y ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#folder",children:(0,r.jsx)(s.code,{children:"Folder"})})," solo aceptan ",(0,r.jsx)(s.strong,{children:"rutas absolutas"}),". Las rutas relativas no est\xe1n soportadas y devolver\xe1n errores. Por ejemplo, el siguiente c\xf3digo no es permitido:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'    //ERROR\n$ko:=Folder("myFolder").create() //nombre de ruta relativo con constructor\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Si quiere manejar los archivos o las carpetas en varias ubicaciones (carpeta de proyecto, carpetas sistema, etc.), puede utilizar ",(0,r.jsx)(s.code,{children:"filesystems"})," (ver arriba). Por ejemplo, puede escribir:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() //carpeta creada a nivel de la estructura\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //archivo creado en la carpeta de datos\n'})}),"\n",(0,r.jsxs)(s.h3,{id:"file-y-folder",children:[(0,r.jsx)(s.code,{children:".file()"})," y ",(0,r.jsx)(s.code,{children:".folder()"})]}),"\n",(0,r.jsxs)(s.p,{children:["Las funciones de los objetos carpeta, tales como ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#file",children:(0,r.jsx)(s.code,{children:"folder.file()"})})," y ",(0,r.jsx)(s.a,{href:"/docs/es/19/API/FolderClass#folder-1",children:(0,r.jsx)(s.code,{children:"folder.folder()"})})," esperan nombres de ruta POSIX relativos. Por ejemplo:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'  //para referenciar una carpeta "Picture" dentro de la carpeta de documentos del usuario\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //para crear una carpeta en el escritorio\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,r.jsx)(s.p,{children:"Las rutas absolutas no est\xe1n soportadas y devolver\xe1n errores."}),"\n",(0,r.jsx)(s.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,r.jsx)(s.p,{children:"La flexibilidad de las funciones de archivos y de carpetas le ofrecen varias posibilidades para manipular los archivos y las carpetas, como en los siguientes ejemplos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'$f:=Folder(fk desktop folder).folder("archive/jan2019")\n\n$f2:=Folder("/DATA/archive/jan2019").file("total.txt")\n\n$f3:=Folder("/DATA/archive/jan2019")\n\n$f4:=File("/DATA/info.txt")\n\n$f5:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n\n$f6:=File(fk backup log file)\n'})})]})}function p(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return d}});var a=n(667294);let r={},l=a.createContext(r);function d(e){let s=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);