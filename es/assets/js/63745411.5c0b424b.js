"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94668"],{528159:function(e,a,r){r.r(a),r.d(a,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/restore","title":"RESTORE","description":"RESTORE {( rutaArchivo {; rutaCarpetaDest} )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/restore.md","sourceDirName":"commands-legacy","slug":"/commands/restore","permalink":"/docs/es/20-R7/commands/restore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"restore","title":"RESTORE","slug":"/commands/restore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New log file","permalink":"/docs/es/20-R7/commands/new-log-file"},"next":{"title":"RESTORE INFO","permalink":"/docs/es/20-R7/commands/restore-info"}}'),s=r("785893"),t=r("250065");let i={id:"restore",title:"RESTORE",slug:"/commands/restore",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let a={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"RESTORE"})," {( ",(0,s.jsx)(a.em,{children:"rutaArchivo"})," {; ",(0,s.jsx)(a.em,{children:"rutaCarpetaDest"}),"} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"rutaArchivo"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Ruta de acceso del archivo a restituir"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"rutaCarpetaDest"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Ruta de acceso de la carpeta de destino"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"El comando RESTORE permite restituir el o los archivos incluidos en un archivo 4D. Este comando es \xfatil con interfaces personalizadas para la gesti\xf3n de backups."}),"\n",(0,s.jsxs)(a.p,{children:["Si no pasa el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaArchivo"}),", el comando muestra una caja de di\xe1logo de apertura para que el usuario pueda seleccionar el archivo a restaurar."]}),"\n",(0,s.jsxs)(a.p,{children:["El par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaArchivo"})," permite indicar la ruta de acceso del archivo a restituir. Esta ruta debe expresarse con la sintaxis del sistema. Puede pasar una ruta absoluta o una relativa al archivo de estructura de la base.",(0,s.jsx)(a.br,{}),"\nEn este caso (si se omite el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaCarpetDest"}),"), la caja de di\xe1logo de restituci\xf3n est\xe1ndar aparece con el archivo preseleccionado, de manera que el usuario puede designar la carpeta de destino. Cuando se completa el procedimiento, aparece una caja de di\xe1logo de alerta y se muestra la carpeta que contiene los elementos restituidos."]}),"\n",(0,s.jsxs)(a.p,{children:["Tambi\xe9n puede pasar el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaCarpetDest"}),"  con la ruta de acceso de la carpeta de destino de los elementos restituidos. Esta ruta debe expresarse con la sintaxis sistema. Puede pasar una ruta absoluta o relativa al archivo de estructura de la base. Si pasa este par\xe1metro, aparece una caja de di\xe1logo de restauraci\xf3n preconfigurada, permitiendo \xfanicamente al usuario lanzar o cancelar la restituci\xf3n. Cuando se completa el procedimiento, la ventana se cierra nuevamente sin mostrar informaci\xf3n adicional."]}),"\n",(0,s.jsxs)(a.p,{children:["El comando RESTORE modifica el valor de las variables ",(0,s.jsx)(a.em,{children:"OK"})," y ",(0,s.jsx)(a.em,{children:"Document"}),": si la restituci\xf3n es correcta, ",(0,s.jsx)(a.em,{children:"OK"})," toma el valor 1 y ",(0,s.jsx)(a.em,{children:"Document"})," contiene la ruta de la carpeta de restituci\xf3n. Si el usuario cancela la caja de restauraci\xf3n, interrumpe la restauraci\xf3n o si ocurre un error, ",(0,s.jsx)(a.em,{children:"OK"})," toma el valor 0 y ",(0,s.jsx)(a.em,{children:"Document"})," contiene una cadena vac\xeda. Puede interceptar el error utilizando un m\xe9todo instalado v\xeda el comando ",(0,s.jsx)(a.em,{children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," en una aplicaci\xf3n 4D compilada y fusionada con 4D Volume Desktop, el comando RESTORE produce la visualizaci\xf3n de una caja de di\xe1logo est\xe1ndar de apertura de archivos que lista por defecto los archivos de extensi\xf3n \u201C4BK\u201D."]}),"\n",(0,s.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/20-R7/commands/backup",children:"BACKUP"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/20-R7/commands/restore-info",children:"RESTORE INFO"})]}),"\n",(0,s.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero de comando"}),(0,s.jsx)(a.td,{children:"918"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Hilo seguro"}),(0,s.jsx)(a.td,{children:"\u2717"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Modifica variables"}),(0,s.jsx)(a.td,{children:"OK, Document, error"})]})]})]})]})}function u(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return d},a:function(){return i}});var n=r(667294);let s={},t=n.createContext(s);function i(e){let a=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);