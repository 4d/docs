"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24914"],{305451:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands/file","title":"File","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/file.md","sourceDirName":"commands","slug":"/commands/file","permalink":"/docs/es/20-R7/commands/file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ffile.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"file","title":"File","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"File and Folder","permalink":"/docs/es/20-R7/category/file-and-folder"},"next":{"title":"Folder","permalink":"/docs/es/20-R7/commands/folder"}}'),s=d("785893"),i=d("250065");let t={id:"file",title:"File",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R4"}),(0,s.jsxs)(n.td,{children:["Nueva constante ",(0,s.jsx)(n.code,{children:"HTTP Client log file"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"17 R5"}),(0,s.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"File"})," ( ",(0,s.jsx)(n.em,{children:"path"})," : Text { ; ",(0,s.jsx)(n.em,{children:"pathType"})," : Integer }{ ; * } ) : 4D.File",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"File"})," ( ",(0,s.jsx)(n.em,{children:"fileConstant"})," : Integer { ; * } ) : 4D.File"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"path"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta del archivo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileConstant"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"Constante del archivo 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pathType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"fk posix path"})," (por defecto) o ",(0,s.jsx)(n.code,{children:"fk platform path"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"operator"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(n.td,{children:"* para devolver el archivo de la base local"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"4D.File"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nuevo objeto de archivo"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"File"})," crea y devuelve un nuevo objeto de tipo ",(0,s.jsx)(n.code,{children:"4D.File"}),". El comando acepta dos sintaxis:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"File ( path { ; pathType } { ; * })"})}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"path"}),", pase una ruta de archivo. Puede utilizar una cadena personalizada o un ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/Concepts/paths#filesystem-pathnames",children:"filesystem"}),' (por ejemplo, "/DATA/myfile.txt").']}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["S\xf3lo se soportan los nombres de ruta absolutos con el comando ",(0,s.jsx)(n.code,{children:"File"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Por defecto, 4D espera una ruta expresada con la sintaxis POSIX. Si trabaja con los nombres de ruta de plataforma (Windows o macOS), debe declararlo utilizando el par\xe1metro ",(0,s.jsx)(n.em,{children:"pathType"}),". Las siguientes constantes est\xe1n disponibles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fk platform path"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Ruta expresada con una sintaxis espec\xedfica de la plataforma (obligatoria en caso de nombre de ruta de plataforma)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fk posix path"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Ruta expresada con sintaxis POSIX (por defecto)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"File ( fileConstant { ; * } )"})}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"fileConstant"}),", pase un archivo 4D interno o sistema, utilizando una de las siguientes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup history file"}),(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"Archivo de historial de copias de seguridad (ver Archivos de configuraci\xf3n y rastreo). Se almacena en la carpeta de destino de la copia de seguridad."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup log file"}),(0,s.jsx)(n.td,{children:"13"}),(0,s.jsx)(n.td,{children:"Archivo historial de copias de seguridad actual. Almacenado en la carpeta Logs de la aplicaci\xf3n."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup settings file"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Archivo backup.4DSettings por defecto (formato xml), almacenado en la carpeta Settings del proyecto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Backup settings file for data"}),(0,s.jsx)(n.td,{children:"17"}),(0,s.jsx)(n.td,{children:"archivo backup.4DSettings del archivo de datos (formato xml), almacenado en la carpeta Settings de la carpeta data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Build application log file"}),(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"Archivo de historial actual en formato xml del generador de aplicaciones. Almacenado en la carpeta Logs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Build application settings file"}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:'Archivo de configuraci\xf3n por defecto del generador de aplicaciones ("buildApp.4DSettings"). Almacenado en la carpeta Settings del proyecto.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Compacting log file"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"Archivo de historial de la compactaci\xf3n m\xe1s reciente realizada con el comando Compact data file o el Centro de seguridad y mantenimiento. Almacenado en la carpeta Logs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current backup settings file"}),(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"archivo backup.4DSettings utilizado actualmente por la aplicaci\xf3n. Puede ser el archivo de configuraci\xf3n de la copia de seguridad (por defecto) o un archivo de configuraci\xf3n de la copia de seguridad personalizado por el usuario definido para el archivo de datos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Debug log file"}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsxs)(n.td,{children:["Archivo de registro creado por el comando ",(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER(Debug log recording)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Diagnostic log file"}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsxs)(n.td,{children:["Archivo de registro creado por el comando ",(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER(Diagnostic log recording)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Directory file"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"archivo directory.json, que contiene la descripci\xf3n de los usuarios y grupos (si los hay) del proyecto. Puede situarse en la carpeta user settings (por defecto, se aplica a todo el proyecto), o en la carpeta data settings (espec\xedfica para un archivo de datos)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTTP Client log file"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,s.jsx)(n.code,{children:"HTTP SET OPTION(HTTP client log)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTTP debug log file"}),(0,s.jsx)(n.td,{children:"9"}),(0,s.jsxs)(n.td,{children:["Archivo de registro creado por el comando ",(0,s.jsx)(n.code,{children:"WEB SET OPTION(Web debug log)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTTP log file"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["Archivo de registro creado por el comando ",(0,s.jsx)(n.code,{children:"WEB SET OPTION(Web log recording)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IMAP Log file"}),(0,s.jsx)(n.td,{children:"23"}),(0,s.jsxs)(n.td,{children:["Archivo de registro creado por el comando ",(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER(IMAP Log)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup file"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["El \xfaltimo archivo de copia de seguridad, llamado ",(0,s.jsx)(n.code,{children:"\\<applicationName>[bkpNum].4BK"}),", se almacena en una ubicaci\xf3n personalizada."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last journal integration log file"}),(0,s.jsx)(n.td,{children:"22"}),(0,s.jsx)(n.td,{children:"Nombre completo del \xfaltimo archivo de registro de integraci\xf3n del historial (almacenado en la carpeta Logs de la aplicaci\xf3n restaurada), si la hay. Este archivo se crea, en modo de reparaci\xf3n autom\xe1tica, tan pronto como se produce una integraci\xf3n de archivos de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Repair log file"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"Archivo de historial de las reparaciones realizadas en la base por el Centro de seguridad y mantenimiento (CSM). Almacenado en la carpeta Logs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Request log file"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsxs)(n.td,{children:["Archivo de registro de peticiones cliente/servidor est\xe1ndar (excluyendo las peticiones web) creado por los comandos ",(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER(4D Server log recording)"})," o ",(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER(Client log recording)"}),". Si se ejecuta en el servidor, se devuelve el archivo de registro del servidor (almacenado en la carpeta Logs del servidor). Si se ejecuta en el cliente, se devuelve el archivo de registro del cliente (almacenado en la carpeta Logs local del cliente)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMTP log file"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsxs)(n.td,{children:["Archivo de registro creado por el comando ",(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER(SMTP Log)"}),". Almacenado en la carpeta Logs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"User settings file"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"archivo settings.4DSettings para todos los archivos de datos, almacenados en la carpeta Preferences junto a la estructura del archivo si est\xe1 activado."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"User settings file for data"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"archivo settings.4DSettings para el archivo de datos actual, almacenado en la carpeta Preferences junto al archivo de datos."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Verification log file"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:["Archivos de historial creados por los comandos ",(0,s.jsx)(n.code,{children:"VERIFY CURRENT DATA FILE"})," y ",(0,s.jsx)(n.code,{children:"VERIFY DATA FILE"})," o el Centro de seguridad y mantenimiento (MSC). Almacenado en la carpeta Logs."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si el objetivo ",(0,s.jsx)(n.em,{children:"fileConstant"})," no existe, se devuelve un objeto null. No se produce ning\xfan error."]}),"\n",(0,s.jsxs)(n.p,{children:["Si el comando se llama desde un componente, pase el par\xe1metro opcional ",(0,s.jsx)(n.code,{children:"*"})," para obtener la ruta de la base local. De lo contrario, si omite el par\xe1metro ",(0,s.jsx)(n.code,{children:"*"}),", siempre se devuelve un objeto null."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/folder",children:"Folder"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-4d-file",children:"Get 4D file"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-to-path",children:"Object to path"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/path-to-object",children:"Path to object"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1566"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return t}});var r=d(667294);let s={},i=r.createContext(s);function t(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);