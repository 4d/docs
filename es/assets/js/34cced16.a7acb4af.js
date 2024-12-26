"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64322"],{849358:function(e,a,n){n.r(a),n.d(a,{metadata:()=>d,contentTitle:()=>t,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>i});var d=JSON.parse('{"id":"commands-legacy/open-data-file","title":"OPEN DATA FILE","description":"OPEN DATA FILE ( rutaAcceso )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/open-data-file","permalink":"/docs/es/commands/open-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-data-file","title":"OPEN DATA FILE","slug":"/commands/open-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN ADMINISTRATION WINDOW","permalink":"/docs/es/commands/open-administration-window"},"next":{"title":"OPEN DATABASE","permalink":"/docs/es/commands/open-database"}}'),o=n("785893"),s=n("250065");let i={id:"open-data-file",title:"OPEN DATA FILE",slug:"/commands/open-data-file",displayed_sidebar:"docs"},t=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let a={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"OPEN DATA FILE"})," ( ",(0,o.jsx)(a.em,{children:"rutaAcceso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe1metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"rutaAcceso"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Nombre o ruta de acceso completa del archivo de datos a abrir"})]})})]}),"\n",(0,o.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(a.p,{children:"El comando OPEN DATA FILEpermite cambiar el archivo de datos abierto por la aplicaci\xf3n 4D."}),"\n",(0,o.jsxs)(a.p,{children:["Pase el nombre o la ruta de acceso completa del archivo de datos a abrir en el par\xe1metro ",(0,o.jsx)(a.em,{children:"rutaAcceso"}),' (archivo con el sufijo ".4DD"). Si pasa s\xf3lo el nombre del archivo, debe estar ubicado junto al archivo de estructura de la base.']}),"\n",(0,o.jsxs)(a.p,{children:["Si la ruta de acceso establece un archivo de datos v\xe1lido, 4D sale de la base y abre nuevamente con el archivo de datos especificado. En modo mono usuario ",(0,o.jsx)(a.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"})," y ",(0,o.jsx)(a.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"})," se llaman sucesivamente."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Advertencia:"})," como este comando hace que la aplicaci\xf3n se cierre antes de abrir nuevamente con el archivo de datos especificado, debe utilizarse con precauci\xf3n en el ",(0,o.jsx)(a.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"})," o en un m\xe9todo llamado por este m\xe9todo base con el fin de no generar un bucle sin fin."]}),"\n",(0,o.jsxs)(a.p,{children:["El comando se ejecuta de una manera asincr\xf3nica: despu\xe9s de su llamada, 4D continua ejecutando el resto del m\xe9todo. Luego, la aplicaci\xf3n se comporta como si el comando ",(0,o.jsx)(a.strong,{children:"Salir"})," hubiera sido seleccionado en el men\xfa ",(0,o.jsx)(a.strong,{children:"Archivo"})," las cajas de di\xe1logo abiertas son canceladas, los procesos abiertos tienen 10 segundos para terminar antes de que sean terminados, etc."]}),"\n",(0,o.jsx)(a.p,{children:"Antes de lanzar la operaci\xf3n, el comando verifica la validez del archivo de datos especificado. Tambi\xe9n, si el archivo ya estaba abierto, el comando verifica que corresponda a la estructura actual."}),"\n",(0,o.jsxs)(a.p,{children:["Si pasa una cadena vac\xeda en ",(0,o.jsx)(a.em,{children:"rutaAcceso"}),", el comando abrir\xe1 nuevamente la base de datos sin cambiar el archivo de datos."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"4D Server:"})," a partir de 4D v13, este comando puede utilizarse con 4D Server. En este contexto, hace una llamada interna a ",(0,o.jsx)(a.a,{href:"/docs/es/commands/quit-4d",children:"QUIT 4D"})," en el servidor (lo que produce la aparici\xf3n de una caja de di\xe1logo en cada equipo remoto, indicando que el servidor est\xe1 en proceso de salir) antes de abrir el archivo designado."]}),"\n",(0,o.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(a.p,{children:["En el contexto del despliegue de una aplicaci\xf3n fusionada, usted desea abrir o crear el archivo de datos usuario en el m\xe9todo base On Startup. En este ejemplo se utiliza el archivo de datos por defecto (ver ",(0,o.jsx)(a.em,{children:"Gesti\xf3n de archivo de datos en las aplicaciones finales"})," ):"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0If(Data file="@default.4dd")\n\xa0\xa0\xa0\xa0If(Version type?? Merged application)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is data file locked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"\n\xa0\xa0//Si un archivo de datos local ya existe\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Test path name($dataPath)=Is a document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OPEN DATA FILE($dataPath)\xa0//abrirlo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE DATA FILE($dataPath)\xa0//crearlo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,o.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"/docs/es/commands/create-data-file",children:"CREATE DATA FILE"})}),"\n",(0,o.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"N\xfamero de comando"}),(0,o.jsx)(a.td,{children:"312"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Hilo seguro"}),(0,o.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return t},a:function(){return i}});var d=n(667294);let o={},s=d.createContext(o);function i(e){let a=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);