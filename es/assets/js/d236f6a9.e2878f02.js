"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21557"],{252956:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>t,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/read-picture-file","title":"READ PICTURE FILE","description":"READ PICTURE FILE ( nomArchivo ; imagen {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-picture-file.md","sourceDirName":"commands-legacy","slug":"/commands/read-picture-file","permalink":"/docs/es/20-R7/commands/read-picture-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-picture-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"read-picture-file","title":"READ PICTURE FILE","slug":"/commands/read-picture-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PICTURE TO BLOB","permalink":"/docs/es/20-R7/commands/picture-to-blob"},"next":{"title":"REMOVE PICTURE FROM LIBRARY","permalink":"/docs/es/20-R7/commands/remove-picture-from-library"}}'),a=r("785893"),s=r("250065");let d={id:"read-picture-file",title:"READ PICTURE FILE",slug:"/commands/read-picture-file",displayed_sidebar:"docs"},c=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"READ PICTURE FILE"})," ( ",(0,a.jsx)(n.em,{children:"nomArchivo"})," ; ",(0,a.jsx)(n.em,{children:"imagen"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomArchivo"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre o ruta de acceso completa del archivo a leer, o cadena vac\xeda"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"imagen"}),(0,a.jsx)(n.td,{children:"Picture"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Campo o variable que recibe la imagen"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Si se pasa = acepta todo tipo de archivo"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando READ PICTURE FILE permite abrir la imagen guardada en el archivo del disco ",(0,a.jsx)(n.em,{children:"nomArchivo"})," y cargarla en el campo o variable 4D ",(0,a.jsx)(n.em,{children:"imagen"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar en ",(0,a.jsx)(n.em,{children:"nomArchivo"})," la ruta de acceso completa del archivo a leer, o \xfanicamente el nombre del archivo. Si solo pasa el nombre del archivo, el archivo ser\xe1 ubicado junto al archivo de estructura de la base. Bajo Windows, igualmente debe indicar la extensi\xf3n del archivo."]}),"\n",(0,a.jsxs)(n.p,{children:['Si pasa una cadena vac\xeda ("") en ',(0,a.jsx)(n.em,{children:"nomArchivo"}),", aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos, permitiendo al usuario seleccionar el archivo a leer, as\xed como los formatos disponibles."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede obtener la lista de formatos disponibles con la ayuda del comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/picture-codec-list",title:"PICTURE CODEC LIST",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"imagen"})," la variable o el campo imagen que deba recibir la imagen le\xedda."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," el formato interno de la imagen se almacena dentro de la variable o campo 4D."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*"}),", el comando aceptar\xe1 todo tipo de archivo. Esto significa que puede trabajar con im\xe1genes sin necesariamente disponer de los codecs adecuados (ver la descripci\xf3n del comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-to-picture",children:"BLOB TO PICTURE"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"Si la ejecuci\xf3n del comando es correcta, la variable sistema Document contiene la ruta de acceso completa al archivo abierto y la variable sistema OK toma el valor 1. De lo contrario, OK toma el valor 0."}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-to-picture",children:"BLOB TO PICTURE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Im\xe1genes"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/write-picture-file",children:"WRITE PICTURE FILE"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"678"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var i=r(667294);let a={},s=i.createContext(a);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);