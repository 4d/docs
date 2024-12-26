"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95105"],{196169:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/get-4d-file","title":"Get 4D file","description":"Get 4D file ( archivo {; *} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-4d-file.md","sourceDirName":"commands-legacy","slug":"/commands/get-4d-file","permalink":"/docs/es/commands/get-4d-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-4d-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-4d-file","title":"Get 4D file","slug":"/commands/get-4d-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Export structure file","permalink":"/docs/es/commands/export-structure-file"},"next":{"title":"Get 4D folder","permalink":"/docs/es/commands/get-4d-folder"}}'),d=r("785893"),s=r("250065");let i={id:"get-4d-file",title:"Get 4D file",slug:"/commands/get-4d-file",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",nombrebase:"nombrebase",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get 4D file"})," ( ",(0,d.jsx)(n.em,{children:"archivo"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"archivo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tipo de archivo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Archivo devuelto de la base local"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Ruta al archivo 4D"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"Get 4D file"})," devuelve la ruta de acceso al archivo del entorno 4D especificado por el par\xe1metro ",(0,d.jsx)(n.em,{children:"archivo"}),". La ruta se devuelve utilizando la sintaxis sistema."]}),"\n",(0,d.jsx)(n.p,{children:"Este comando le permite obtener la ruta de acceso actual de los archivos, cuyo nombre o ubicaci\xf3n pueden depender del contexto de la base. Tambi\xe9n le ayuda a escribir c\xf3digo gen\xe9rico independiente de la versi\xf3n de 4D o del sistema operativo."}),"\n",(0,d.jsxs)(n.p,{children:["Pase en ",(0,d.jsx)(n.em,{children:"archivo"}),' un valor para definir el archivo que desea recuperar la ruta completa. Puede utilizar una de las siguientes constantes del tema "',(0,d.jsx)(n.em,{children:"Entorno 4D"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup history file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"19"}),(0,d.jsxs)(n.td,{children:["Archivo de historial de la copia de seguridad (ver ",(0,d.jsx)(n.em,{children:"Configuraci\xf3n y archivos de seguimiento"}),"). Almacenado en la carpeta de destino de backup."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:"Archivo de historial de la copia de seguridad actual. Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup settings file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"18"}),(0,d.jsx)(n.td,{children:"Archivo Backup.xml, almacenado en la carpeta Preferencias/Backup junto al archivo de estructura de la base"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup settings file for data"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"17"}),(0,d.jsx)(n.td,{children:"Archivo Backup.xml, almacenado en la carpeta Preferencias/Backup junto al archivo de estructura de la base"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Build application log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"14"}),(0,d.jsxs)(n.td,{children:["Archivo de historial actual en formato xml del generador de aplicaciones. Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores.",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Build application settings file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:'Archivo de configuraci\xf3n predeterminado del generador de aplicaciones ("buildApp.4DSettings"). Almacenado en la carpeta Configuraci\xf3n de la base.'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Compacting log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsxs)(n.td,{children:["Archivo de historial de la compactaci\xf3n m\xe1s reciente de la base, creada por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/compact-data-file",children:"Compact data file"})," o por el Centro de seguridad y mantenimiento (CSM). Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores.",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Current backup settings file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Archivo Backup.xml, almacenado en la carpeta Preferencias/Backup junto al archivo de estructura de la base"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Debug log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"12"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (Debug log recording). Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Diagnostic log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"11"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Diagnostic log recording). Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Directory file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"16"}),(0,d.jsx)(n.td,{children:"Archivo directorio.json, que contiene la descripci\xf3n de usuarios y grupos (si los hay) para la base proyecto. Se puede ubicar en la carpeta de configuraci\xf3n de la base del usuario (predeterminada, global para el proyecto) o en la carpeta de configuraci\xf3n de datos (espec\xedfica de un archivo de datos)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTP Client log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"24"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/http-set-option",children:"HTTP SET OPTION"}),"(HTTP client log;value). Se almacena en la carpeta Logs."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTP debug log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"9"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/web-set-option",children:"WEB SET OPTION"}),"(Web debug log). Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTP log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/web-set-option",children:"WEB SET OPTION"}),"(Web log recording). Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores.",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"IMAP Log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"23"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(IMAP Log). Se almacena en la carpeta Logs de la base de datos"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last backup file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["\xdaltimo archivo de copia de seguridad, llamado ",(0,d.jsx)(n.nombrebase,{children:"[bkpNum].4BK, almacenado en una ubicaci\xf3n personalizada"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last journal integration log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"22"}),(0,d.jsx)(n.td,{children:"Ruta completa del \xfaltimo archivo de registro de la integraci\xf3n del historial (almacenado en la carpeta Logs de la aplicaci\xf3n restaurada), si lo hay. Este archivo se crea, en modo de reparaci\xf3n autom\xe1tica, tan pronto como una integraci\xf3n de un archivo de historial ocurre (ver )."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"POP3 Log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"21"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(POP3 Log). Almacenado en la carpeta Logs de la base."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Repair log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsxs)(n.td,{children:["Archivo de historial de las reparaciones realizadas a la base por el Centro de mantenimiento y seguridad (CMS).",(0,d.jsx)(n.br,{}),"Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de historial o no existe, se devuelve una ruta vac\xeda. No se generan errores.",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Request log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"10"}),(0,d.jsxs)(n.td,{children:["Archivo de peticiones cliente/servidor est\xe1ndar (excluyendo peticiones web) creado por los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(4D Server log recording) o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Client log recording). Si se ejecuta en el servidor, se devuelve el historial del servidor. Almacenado en la carpeta Logs en el servidor. Si se ejecuta en el cliente, se devuelve el historial del cliente. Almacenado en la carpeta Logs en el cliente. Si no existe ning\xfan archivo de historial, se devuelve una ruta vac\xeda.",(0,d.jsx)(n.br,{})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"15"}),(0,d.jsxs)(n.td,{children:["Archivo de historial creado por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(SMTP Log). Se almacena en la carpeta Logs junto al archivo de estructura de la base. Si no se ha creado ning\xfan archivo de registro SMTP o no existe, se devuelve una ruta vac\xeda. No se generan errores."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"User settings file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{children:"El archivo settings.4DSettings para los archivos de datos, almacenado en la carpeta Settings junto al archivo estructura de la base si se activa"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"User settings file for data"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"settings.4DSettings para el archivo de datos actual, almacenado en la carpeta Settings junto al archivo de datos."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Verification log file"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsxs)(n.td,{children:["Archivos de historial creados por los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})," y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/verify-data-file",children:"VERIFY DATA FILE"})," o el Centro de mantenimiento y seguridad (CMS). Almacenado en la carpeta Logs junto al archivo de estructura de la base. Si no se ha realizado ninguna verificaci\xf3n o no existe ning\xfan archivo de historial, se devuelve una ruta vac\xeda. No se generan errores.",(0,d.jsx)(n.br,{})]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si el ",(0,d.jsx)(n.em,{children:"archivo"})," objetivo no existe, se devuelve una ruta vac\xeda. No se generan errores."]}),"\n",(0,d.jsxs)(n.p,{children:["Cuando el comando se llama desde un componente, pase el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"*"})," para obtener la ruta del ",(0,d.jsx)(n.em,{children:"archivo"})," de la base local. En este caso, si se omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"*"}),", siempre se devuelve una cadena vac\xeda."]}),"\n",(0,d.jsxs)(n.p,{children:["En cuanto a User settings file for data y User settings file, una ruta se devuelve s\xf3lo si la opci\xf3n de seguridad ",(0,d.jsx)(n.strong,{children:"Autorizar las propiedades usuario en un archivo externo"})," se ha seleccionado en la caja de di\xe1logo Propiedades de la base (ver )."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Usted quiere obtener la ruta del \xfaltimo archivo de backup:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0$path:=Get 4D file(Last backup file)\n\xa0\xa0// $path = "C:\\Backups\\Countries\\Countries[0025].4BK" por ejemplo\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"file.md",children:"File"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1418"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return i}});var a=r(667294);let d={},s=a.createContext(d);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);