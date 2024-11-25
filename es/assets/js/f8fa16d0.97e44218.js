"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81670"],{277431:function(e,o,a){a.r(o),a.d(o,{metadata:()=>n,contentTitle:()=>s,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>t});var n=JSON.parse('{"id":"commands-legacy/import-data","title":"IMPORT DATA","description":"IMPORT DATA ( nomArchivo {; proyecto {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/import-data.md","sourceDirName":"commands-legacy","slug":"/commands/import-data","permalink":"/docs/es/commands/import-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-data","title":"IMPORT DATA","slug":"/commands/import-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT TEXT","permalink":"/docs/es/commands/export-text"},"next":{"title":"IMPORT DIF","permalink":"/docs/es/commands/import-dif"}}'),r=a("785893"),i=a("250065");let t={id:"import-data",title:"IMPORT DATA",slug:"/commands/import-data",displayed_sidebar:"docs"},s=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let o={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"IMPORT DATA"})," ( ",(0,r.jsx)(o.em,{children:"nomArchivo"})," {; ",(0,r.jsx)(o.em,{children:"proyecto"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe1metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nomArchivo"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Ruta de acceso y nombre del archivo a importar"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"proyecto"}),(0,r.jsx)(o.td,{children:"Text, Blob"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Contenido del proyecto de importaci\xf3n"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Nuevo contenido del proyecto de importaci\xf3n (si se  pasa el par\xe1metro *)"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Visualizaci\xf3n de la caja de di\xe1logo de importaci\xf3n y actualizaci\xf3n del proyecto"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(o.p,{children:["El comando IMPORT DATA importa los datos ubicados en el archivo ",(0,r.jsx)(o.em,{children:"nomArchivo"}),". 4D puede importar los datos en los siguientes formatos: Texto, Texto de longitud fija, XML, SYLK, DIF, DBF (dBase) y 4D."]}),"\n",(0,r.jsxs)(o.p,{children:["Si pasa una cadena vac\xeda en ",(0,r.jsx)(o.em,{children:"nomArchivo"}),", IMPORT DATA muestra la caja de di\xe1logo est\xe1ndar de apertura de archivos, permitiendo al usuario definir el nombre, tipo, y ubicaci\xf3n del archivo a importar. Una vez aceptada la caja de di\xe1logo, la variable sistema Documento contiene la ruta de acceso y el nombre del archivo. Si el usuario hace clic en ",(0,r.jsx)(o.strong,{children:"Cancelar"}),", se detiene la ejecuci\xf3n del comando y la variable sistema OK toma el valor 0."]}),"\n",(0,r.jsxs)(o.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(o.em,{children:"proyecto"})," le permite utilizar un proyecto para importar datos. Cuando pasa este par\xe1metro, la importaci\xf3n se realiza directamente, sin intervenci\xf3n del usuario (a menos que utilice la opci\xf3n *, ver a continuaci\xf3n). Si no pasa este par\xe1metro, aparece la caja de di\xe1logo de importaci\xf3n. El usuario puede definir sus par\xe1metros de importaci\xf3n o cargar un proyecto de importaci\xf3n existente."]}),"\n",(0,r.jsxs)(o.p,{children:["Un proyecto de importaci\xf3n contiene todos los par\xe1metros de importaci\xf3n, tales como las tablas y campos en las cuales importar, los delimitadores a utilizar, etc. En el par\xe1metro ",(0,r.jsx)(o.em,{children:"proyecto"}),", puede pasar una variable Texto con XML o una variable Texto con una referencia a un elemento DOM pre existente o un BLOB. Los proyectos pueden crearse por programaci\xf3n (proyectos con formato XML \xfanicamente) o cargando par\xe1metros definidos previamente en la caja de di\xe1logo de importaci\xf3n. En el \xfaltimo caso, tiene dos soluciones disponibles:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Utilice el comando IMPORT DATA con un par\xe1metro ",(0,r.jsx)(o.em,{children:"proyecto"})," vac\xedo y el par\xe1metro opcional ",(0,r.jsx)(o.em,{children:"*"}),", luego guarde el par\xe1metro ",(0,r.jsx)(o.em,{children:"proyecto"})," resultante en un campo Texto o BLOB (ver a continuaci\xf3n). Esta soluci\xf3n le permite guardar el proyecto con el archivo de datos."]}),"\n",(0,r.jsxs)(o.li,{children:["Guarde el proyecto en el disco, luego c\xe1rguelo, utilizando por ejemplo el comando ",(0,r.jsx)(o.a,{href:"/docs/es/commands/dom-parse-xml-source",children:"DOM Parse XML source"}),", y pase su referencia en el par\xe1metro ",(0,r.jsx)(o.em,{children:"proyecto"}),".\n",(0,r.jsx)(o.strong,{children:"Nota de compatibilidad"}),": a partir de la versi\xf3n 12 de 4D, los proyectos de importaci\xf3n son codificados en XML. 4D puede abrir los proyectos de importaci\xf3n generados con las versiones anteriores de 4D (formato BLOB), sin embargo los proyectos creados a partir de la v12 no pueden abrirse con una versi\xf3n 11 o anterior. Recomendamos utilizar variables Texto para manipular los archivos de importaci\xf3n."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(o.em,{children:"*"}),", si se especifica, hace que aparezca la caja de di\xe1logo de importaci\xf3n con los par\xe1metros definidos en ",(0,r.jsx)(o.em,{children:"proyecto"}),". Esta caracter\xedstica le permite utilizar un proyecto predefinido, mientras tiene a\xfan la posibilidad de modificar uno o m\xe1s par\xe1metros. Adem\xe1s, el par\xe1metro ",(0,r.jsx)(o.em,{children:"proyecto"})," contiene, despu\xe9s de cerrar la caja de di\xe1logo de importaci\xf3n, los par\xe1metros del \u201Cnuevo\u201D proyecto. Entonces puede almacenar el nuevo proyecto en un campo BLOB, en disco, etc."]}),"\n",(0,r.jsx)(o.p,{children:"Si la importaci\xf3n fue exitosa, la variable sistema OK toma el valor 1."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," consulte el comando EXPORT DATA para ver un ejemplo sobre la definici\xf3n de un proyecto vac\xedo."]}),"\n",(0,r.jsx)(o.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsxs)(o.p,{children:["Si el usuario hace clic en ",(0,r.jsx)(o.strong,{children:"Cancelar"})," en la caja de di\xe1logo est\xe1ndar de guardar archivos o de importaci\xf3n, la variable sistema OK toma el valor 0. Si la importaci\xf3n fue exitosa, la variable sistema OK toma el valor 1."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/es/commands/export-data",children:"EXPORT DATA"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/import-dif",children:"IMPORT DIF"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/import-sylk",children:"IMPORT SYLK"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/es/commands/import-text",children:"IMPORT TEXT"})]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return s},a:function(){return t}});var n=a(667294);let r={},i=n.createContext(r);function t(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);