"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87773"],{388289:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-update-folder","title":"SET UPDATE FOLDER","description":"SET UPDATE FOLDER ( rutaCarpeta {; erroresDiscretos} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-update-folder.md","sourceDirName":"commands-legacy","slug":"/commands/set-update-folder","permalink":"/docs/es/commands/set-update-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-update-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-update-folder","title":"SET UPDATE FOLDER","slug":"/commands/set-update-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET DATABASE PARAMETER","permalink":"/docs/es/commands/set-database-parameter"},"next":{"title":"Structure file","permalink":"/docs/es/commands/structure-file"}}'),r=n("785893"),t=n("250065");let i={id:"set-update-folder",title:"SET UPDATE FOLDER",slug:"/commands/set-update-folder",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SET UPDATE FOLDER"})," ( ",(0,r.jsx)(a.em,{children:"rutaCarpeta"})," {; ",(0,r.jsx)(a.em,{children:"erroresDiscretos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"rutaCarpeta"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Ruta de acceso de la carpeta (paquete bajo OS X) que contiene la aplicaci\xf3n actualizada"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"erroresDiscretos"}),(0,r.jsx)(a.td,{children:"Boolean"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsxs)(a.td,{children:["False (por defecto) = mostrar mensajes de error, ",(0,r.jsx)(a.br,{}),"True = no reportarlos"]})]})]})]}),"\n",(0,r.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["El comando ",(0,r.jsx)(a.strong,{children:"SET UPDATE FOLDER"})," especifica la carpeta que contiene la actualizaci\xf3n de la aplicaci\xf3n 4D fusionada actual. Esta informaci\xf3n se almacena en la sesi\xf3n 4D hasta que se llama el m\xe9todo ",(0,r.jsx)(a.a,{href:"/docs/es/commands/restart-4d",children:"RESTART 4D"}),". Si se sale de la aplicaci\xf3n manualmente, esta informaci\xf3n no se conserva."]}),"\n",(0,r.jsxs)(a.p,{children:["Este comando est\xe1 destinado a ser utilizado en un proceso de actualizaci\xf3n autom\xe1tica de una aplicaci\xf3n fusionada (servidor o monopuesto). Para m\xe1s informaci\xf3n, consulte el cap\xedtulo ",(0,r.jsx)(a.em,{children:"Terminar y desplegar aplicaciones finales"})," en el Manual de ",(0,r.jsx)(a.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota"}),": este comando s\xf3lo funciona con 4D Server o con una aplicaci\xf3n monopuesto fusionada con 4D Volume Desktop."]}),"\n",(0,r.jsxs)(a.p,{children:["En el par\xe1metro ",(0,r.jsx)(a.em,{children:"rutaCarpeta"}),", pase la ruta de acceso completa de la carpeta de la nueva versi\xf3n de la aplicaci\xf3n fusionada (carpeta que contiene la aplicaci\xf3n ",(0,r.jsx)(a.em,{children:"my4DApp.exe"})," bajo Windows o el paquete ",(0,r.jsx)(a.em,{children:"my4DApp.app"}),' bajo OS X), creado por el generador de aplicaciones de 4D. La nueva versi\xf3n debe haber sido generada por el generador de aplicaciones de 4D v14. En particular, debe contener una versi\xf3n actualizada de la herramienta "updater" incluida en 4D y que se utiliza para administrar las actualizaciones remotas.']}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota"}),": le recomendamos que utilice los mismos nombres de la versi\xf3n original para los archivos de la nueva versi\xf3n de la aplicaci\xf3n, ya que la carpeta de la aplicaci\xf3n se sustituye durante la actualizaci\xf3n. Si utiliza nombres diferentes para estos archivos, los atajos y/o rutas almacenados ya no funcionar\xe1n m\xe1s."]}),"\n",(0,r.jsxs)(a.p,{children:['Si los par\xe1metros son v\xe1lidos, la actualizaci\xf3n se pone "en espera" en la sesi\xf3n hasta que se llame el comando ',(0,r.jsx)(a.a,{href:"/docs/es/commands/restart-4d",children:"RESTART 4D"}),". Si ha ejecutado varias veces ",(0,r.jsx)(a.strong,{children:"SET UPDATE FOLDER"})," antes de llamar a [",(0,r.jsx)(a.a,{href:"/docs/es/commands/restart-4d",children:"RESTART 4D"}),", se tiene en cuenta la \xfaltima llamada v\xe1lida."]}),"\n",(0,r.jsxs)(a.p,{children:['Puede pasar una cadena vac\xeda ("" ) en el par\xe1metro ',(0,r.jsx)(a.em,{children:"rutaCarpeta"})," para reinicializar la informaci\xf3n de actualizaci\xf3n para la sesi\xf3n actual."]}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(a.em,{children:"erroresDiscretos"}),' especifica c\xf3mo se reportan los errores por la herramienta "updater":']}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["si pasa ",(0,r.jsx)(a.strong,{children:"False"})," o si se omite este par\xe1metro, los errores se registran en el historial de actualizaci\xf3n y se muestran en una caja de di\xe1logo de alerta."]}),"\n",(0,r.jsxs)(a.li,{children:["si pasa ",(0,r.jsx)(a.strong,{children:"True"}),', los errores s\xf3lo se registran en el historial de actualizaci\xf3n.\nExcepci\xf3n: si la herramienta "updater" no puede crear el archivo de historial, se muestra una caja de di\xe1logo de alerta, independientemente del valor del par\xe1metro ',(0,r.jsx)(a.em,{children:"erroresDiscretos"}),". Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/get-last-update-log-path",children:"Get last update log path"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1, de lo contrario, toma el valor 0. Puede interceptar los errores generados por el comando utilizando un m\xe9todo instalado utilizando el comando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(a.p,{children:'Usted cre\xf3 una carpeta "MyUpdates" en su disco, en la cual ubic\xf3 una nueva versi\xf3n de la aplicaci\xf3n "MyApp". Usted no desea mostrar los errores. Para preparar la actualizaci\xf3n, escribe:'}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// Sintaxis Windows\n\xa0SET UPDATE FOLDER("C:\\\\MyUpdates"+Folder separator+"MyApp"+Folder separator;True)\n\xa0\n\xa0\xa0// Sintaxis OS X\n\xa0SET UPDATE FOLDER("MacHD:MyUpdates"+Folder separator+"MyApp.app"+Folder separator;True)\n'})}),"\n",(0,r.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/get-last-update-log-path",children:"Get last update log path"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/restart-4d",children:"RESTART 4D"})]}),"\n",(0,r.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"1291"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2717"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modifica variables"}),(0,r.jsx)(a.td,{children:"OK, error"})]})]})]})]})}function p(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return d},a:function(){return i}});var s=n(667294);let r={},t=s.createContext(r);function i(e){let a=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);