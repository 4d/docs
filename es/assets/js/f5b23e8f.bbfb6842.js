"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37797"],{686002:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>o,toc:()=>t,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/array-blob","title":"ARRAY BLOB","description":"ARRAY BLOB ( nomArray ; tam {; tam2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-blob.md","sourceDirName":"commands-legacy","slug":"/commands/array-blob","permalink":"/docs/es/commands/array-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-blob","title":"ARRAY BLOB","slug":"/commands/array-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND TO ARRAY","permalink":"/docs/es/commands/append-to-array"},"next":{"title":"ARRAY BOOLEAN","permalink":"/docs/es/commands/array-boolean"}}'),s=r("785893"),l=r("250065");let d={id:"array-blob",title:"ARRAY BLOB",slug:"/commands/array-blob",displayed_sidebar:"docs"},i=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY BLOB"})," ( ",(0,s.jsx)(n.em,{children:"nomArray"})," ; ",(0,s.jsx)(n.em,{children:"tam"})," {; ",(0,s.jsx)(n.em,{children:"tam2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tam"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos del array o n\xfamero de arrays si se especifica tam2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tam2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de los elementos de los array 2D"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"ARRAY BLOB"})," crea y/o cambia el tama\xf1o de un array de elementos de tipo Blob en memoria ."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"nomArray"})," es el nombre de la array."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tam"})," es el n\xfamero de elementos del array."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tam2"})," es opcional. Si lo pasa, este comando crea un array de dos dimensiones. En este caso, ",(0,s.jsx)(n.em,{children:"tam"})," especifica el n\xfamero de filas y ",(0,s.jsx)(n.em,{children:"tam2"})," el n\xfamero de columnas de cada array. Cada fila en un array de dos dimensiones se puede procesar tanto como un elemento y como un array. Esto significa que cuando se trabaja con la primera dimensi\xf3n de un array de dos dimensiones, puede insertar y retirar arrays enteros utilizando otros comandos en este tema."]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando se aplica el comando ",(0,s.jsx)(n.strong,{children:"ARRAY BLOB"})," a un array existente:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si ampl\xeda su tama\xf1o, los elementos existentes no se cambian y los nuevos elementos se inicializan en un BLOB vac\xedo (",(0,s.jsx)(n.a,{href:"/docs/es/commands/blob-size",children:"BLOB size"}),"= 0)."]}),"\n",(0,s.jsx)(n.li,{children:"Si reduce su tama\xf1o, se eliminan y pierden los elementos de abajo del array."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo crea un array proceso que contiene 100 elementos de tipo BLOB:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BLOB(arrBlob;100)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo crea un array local de 100 filas, que contienen cada una 50 elementos de tipo BLOB:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BLOB($arrBlob;100;50)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array local de 100 filas, conteniendo cada una 50 elementos de tipo BLOB. La variable $",(0,s.jsx)(n.em,{children:"vByteValue"})," recibe el d\xe9cimo byte del BLOB ubicado en la s\xe9ptima columna y la quinta fila del array BLOB:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0C_INTEGER($vByteValue)\n\xa0ARRAY BLOB($arrValues;100;50)\n\xa0...\n\xa0$vByteValue:=$arrValues{5}{7}{9}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Creaci\xf3n de arrays"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1222"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var a=r(667294);let s={},l=a.createContext(s);function d(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);