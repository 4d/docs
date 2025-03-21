"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69175"],{39819:function(e,a,n){n.r(a),n.d(a,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/open-database","title":"OPEN DATABASE","description":"OPEN DATABASE ( rutaArchivo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/open-database.md","sourceDirName":"commands-legacy","slug":"/commands/open-database","permalink":"/docs/es/commands/open-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-database.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-database","title":"OPEN DATABASE","slug":"/commands/open-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATA FILE","permalink":"/docs/es/commands/open-data-file"},"next":{"title":"Open datastore","permalink":"/docs/es/commands/open-datastore"}}'),o=n("785893"),r=n("250065");let d={id:"open-database",title:"OPEN DATABASE",slug:"/commands/open-database",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Nota",id:"nota",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let a={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"OPEN DATABASE"})," ( ",(0,o.jsx)(a.em,{children:"rutaArchivo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe1metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"rutaArchivo"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Nombre o ruta de acceso completa del archivo de base de datos a abrir (.4db, .4dc, .4dbase o .4dlink)"})]})})]}),"\n",(0,o.jsx)(a.h2,{id:"nota",children:"Nota"}),"\n",(0,o.jsxs)(a.p,{children:["El comando ",(0,o.jsx)(a.strong,{children:"OPEN DATABASE"})," cierra la base de datos 4D actual y abre sobre la marcha de la base definida por ",(0,o.jsx)(a.em,{children:"rutaArchivo"}),". Este comando es \xfatil para realizar pruebas autom\xe1ticas, para reabrir una base de forma autom\xe1tica despu\xe9s de una compilaci\xf3n, o para permitir fusionar una aplicaci\xf3n remota 4D para seleccionar el servidor de la base al cual conectar."]}),"\n",(0,o.jsxs)(a.p,{children:["En el par\xe1metro ",(0,o.jsx)(a.em,{children:"rutaArchivo"}),", pase el nombre o la ruta de acceso completa de la base a abrir. Puede utilizar los archivos con una de las siguientes extensiones:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:".4db (archivo de estructura interpretado),"}),"\n",(0,o.jsx)(a.li,{children:".4dc (archivo de estructura compilado),"}),"\n",(0,o.jsx)(a.li,{children:".4dbase (paquete macOS),"}),"\n",(0,o.jsx)(a.li,{children:".4dproject (archivo de la base proyecto)"}),"\n",(0,o.jsx)(a.li,{children:".4dz (archivo de despliegue de las bases proyecto)"}),"\n",(0,o.jsx)(a.li,{children:".4dlink (archivo de acceso directo)."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Si pasa \xfanicamente el nombre de archivo, debe ser colocado en el mismo nivel que el archivo de estructura de la base actual."}),"\n",(0,o.jsxs)(a.p,{children:["Si la ruta de acceso define una base v\xe1lida, 4D cierra la base en progreso y abre la base especificada. En el modo mono usuario, el ",(0,o.jsx)(a.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"})," de la base cerrada y el ",(0,o.jsx)(a.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"})," (o ",(0,o.jsx)(a.a,{href:"metodo-base-on-server-open-connection.md",children:"M\xe9todo base On Server Open Connection"}),") de la base abierta se llaman sucesivamente."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Atenci\xf3n:"})," dado que este comando hace que la aplicaci\xf3n se cierre antes de la reapertura con la base especificada, no se recomienda su uso en el ",(0,o.jsx)(a.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"}),", o en un m\xe9todo llamado por este m\xe9todo base."]}),"\n",(0,o.jsxs)(a.p,{children:["El comando se ejecuta de forma as\xedncrona: despu\xe9s de su llamada, 4D contin\xfaa ejecutando el resto del m\xe9todo. Luego, la aplicaci\xf3n se comporta como si el comando ",(0,o.jsx)(a.strong,{children:"Salir"})," del men\xfa ",(0,o.jsx)(a.strong,{children:"Archivo"})," estuviera seleccionado: las cajas de di\xe1logo de apertura se cancelan, todos los procesos abiertos tienen 10 segundos para terminar antes de ser terminados, etc."]}),"\n",(0,o.jsx)(a.p,{children:"Si el archivo de la base objetivo no se encuentra o es inv\xe1lido, se devuelve un error sistema est\xe1ndar del administrador de archivos y 4D no hace nada."}),"\n",(0,o.jsx)(a.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0OPEN DATABASE("C:\\\\databases\\\\Invoices\\\\Invoices.4db")\n'})}),"\n",(0,o.jsx)(a.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsxs)(a.p,{children:["Desea seleccionar un servidor al inicio desde una aplicaci\xf3n mono usuario. Puede ejecutar este c\xf3digo desde un proceso lanzado por ",(0,o.jsx)(a.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0var $xml : Text\n\xa0$xml:=""\n\xa0$databaseName:="myServer"\n\xa0$IP:="192.168.6.7:19813"\n\xa0\n\xa0If(Shift down)\n\xa0\xa0\xa0\xa0$IP:=Request("IP address to connect to "+$databaseName;$IP)\n\xa0Else\n\xa0\xa0\xa0\xa0ok:=1\n\xa0End if\n\xa0\n\xa0If(ok=1)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{databaseName}";$databaseName)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{IP}";$IP)\n\xa0\xa0\xa0\xa0var $link : Object\n\xa0\xa0\xa0\xa0$link:=Folder(fk user preferences folder).file("server.4dlink")\n\xa0\xa0\xa0\xa0$link.setText($xml)\n\xa0\xa0\xa0\xa0OPEN DATABASE($link.platformPath)\n\xa0Else\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,o.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"N\xfamero de comando"}),(0,o.jsx)(a.td,{children:"1321"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Hilo seguro"}),(0,o.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return t},a:function(){return d}});var s=n(667294);let o={},r=s.createContext(o);function d(e){let a=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);