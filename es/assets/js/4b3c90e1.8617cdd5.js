"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8900"],{305218:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/array-longint","title":"ARRAY LONGINT","description":"ARRAY LONGINT ( nombreArray ; tama\xf1o {; tama\xf1o2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-longint.md","sourceDirName":"commands-legacy","slug":"/commands/array-longint","permalink":"/docs/es/commands/array-longint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-longint.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-longint","title":"ARRAY LONGINT","slug":"/commands/array-longint","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY INTEGER","permalink":"/docs/es/commands/array-integer"},"next":{"title":"ARRAY OBJECT","permalink":"/docs/es/commands/array-object"}}'),a=r("785893"),l=r("250065");let d={id:"array-longint",title:"ARRAY LONGINT",slug:"/commands/array-longint",displayed_sidebar:"docs"},i=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ARRAY LONGINT"})," ( ",(0,a.jsx)(n.em,{children:"nombreArray"})," ; ",(0,a.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,a.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nombreArray"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre del array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tama\xf1o"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tama\xf1o2"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de columnas en un array de dos dimensiones"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ARRAY LONGINT crea y/o redimensiona un array de elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"})," de 4 bytes en memoria.es el nombre del Array."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos en el array."]}),"\n",(0,a.jsxs)(n.li,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"tama\xf1oi2"})," es opcional; si se especifica ",(0,a.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array de dos dimensiones. En este caso, ",(0,a.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,a.jsx)(n.em,{children:"tama\xf1o2"})," el n\xfamero de columnas en cada array. Cada fila en un array de dos dimensiones puede tratarse como un elemento y un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del arrray, puede utilizar otros comandos de array para insertar y borrar arrays completos en un array de dos dimensiones."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Cuando aplica ARRAY LONGINT a un array existente:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Si agranda el tama\xf1o del array, los elementos existentes no son modificados, y los elementos nuevos se inicializan en 0."}),"\n",(0,a.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, los \xfaltimos elementos son borrados del array y se pierden."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo crea un array proceso de 4 bytes de 100 elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(aiValores;100)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo crea un array local de 4 bytes de 100 filas de 50 elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($aiValores;100;50)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo crea un array interproceso de 4 bytes de 50 elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"Entre -2 millardos y +2 millardos",children:"Entero largo"})," y asigna a cada elemento su n\xfamero:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT(\u25CAaiValores;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAaiValores{$vlElem}:=$vlElem\n\xa0End for\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/array-integer",children:"ARRAY INTEGER"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/array-real",children:"ARRAY REAL"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"221"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let a={},l=s.createContext(a);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);