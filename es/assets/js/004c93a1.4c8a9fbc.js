"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16231"],{610730:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>t,frontMatter:()=>o});var a=JSON.parse('{"id":"commands-legacy/array-longint","title":"ARRAY LONGINT","description":"ARRAY LONGINT ( nombreArray ; tama\xf1o {; tama\xf1o2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-longint.md","sourceDirName":"commands-legacy","slug":"/commands/array-longint","permalink":"/docs/es/commands/array-longint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-longint.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-longint","title":"ARRAY LONGINT","slug":"/commands/array-longint","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY INTEGER","permalink":"/docs/es/commands/array-integer"},"next":{"title":"ARRAY OBJECT","permalink":"/docs/es/commands/array-object"}}'),s=r("785893"),l=r("250065");let o={id:"array-longint",title:"ARRAY LONGINT",slug:"/commands/array-longint",displayed_sidebar:"docs"},i=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY LONGINT"})," ( ",(0,s.jsx)(n.em,{children:"nombreArray"})," ; ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nombreArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas en un array de dos dimensiones"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ARRAY LONGINT crea y/o redimensiona un array de elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"})," de 4 bytes en memoria."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"nombreArray"})," es el nombre del Array."]}),"\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos en el array."]}),"\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1oi2"})," es opcional; si se especifica ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array de dos dimensiones. En este caso, ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,s.jsx)(n.em,{children:"tama\xf1o2"})," el n\xfamero de columnas en cada array. Cada fila en un array de dos dimensiones puede tratarse como un elemento y un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del arrray, puede utilizar otros comandos de array para insertar y borrar arrays completos en un array de dos dimensiones."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cuando aplica ARRAY LONGINT a un array existente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si agranda el tama\xf1o del array, los elementos existentes no son modificados, y los elementos nuevos se inicializan en 0."}),"\n",(0,s.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, los \xfaltimos elementos son borrados del array y se pierden."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array proceso de 4 bytes de 100 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(aiValores;100)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array local de 4 bytes de 100 filas de 50 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($aiValores;100;50)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array interproceso de 4 bytes de 50 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"})," y asigna a cada elemento su n\xfamero:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(\u25CAaiValores;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAaiValores{$vlElem}:=$vlElem\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/array-integer",children:"ARRAY INTEGER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/array-real",children:"ARRAY REAL"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var a=r(667294);let s={},l=a.createContext(s);function o(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);