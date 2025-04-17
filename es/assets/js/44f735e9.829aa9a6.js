"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41986"],{393954:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>o,toc:()=>t,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/array-real","title":"ARRAY REAL","description":"ARRAY REAL ( nombreArray ; tama\xf1o {; tama\xf1o2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-real.md","sourceDirName":"commands-legacy","slug":"/commands/array-real","permalink":"/docs/es/20-R8/commands/array-real","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-real.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-real","title":"ARRAY REAL","slug":"/commands/array-real","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY POINTER","permalink":"/docs/es/20-R8/commands/array-pointer"},"next":{"title":"ARRAY TEXT","permalink":"/docs/es/20-R8/commands/array-text"}}'),s=r("785893"),l=r("250065");let d={id:"array-real",title:"ARRAY REAL",slug:"/commands/array-real",displayed_sidebar:"docs"},i=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY REAL"})," ( ",(0,s.jsx)(n.em,{children:"nombreArray"})," ; ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nombreArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas en un array de dos dimensiones"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando ARRAY REAL crea y/o redimensiona un array de elementos de tipo Real en memoria."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"El par\xe1metro nombreArray es el nombre del array."}),"\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos del array."]}),"\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o2"})," es opcional; si se especifica ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array bidimensional. En este caso, ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,s.jsx)(n.em,{children:"tama\xf1o2 e"}),"specifica el n\xfamero de columnas en cada array. Cada l\xednea en un array de dos dimensiones puede tratarse como un elemento y un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del array, puede utilizar otros comandos de array para insertar y borrar arrays completos en un array de dos dimensiones."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cuando aplica ARRAY REAL a un array existente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si agranda el tama\xf1o del array, los elementos existentes no son modificados y los nuevos elementos se inicializan en 0."}),"\n",(0,s.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, los \xfaltimos elementos son borrados del array y se pierden."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo crea un array de proceso de 100 elementos de tipo Real:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL(arValores;100)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo crea un array local de 100 filas de 50 elementos de tipo Real:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($arValores;100;50)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Este ejemplo crea un array interproceso de 50 elementos de tipo Real y asigna a cada elemento su n\xfamero:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL(\u25CAarValores;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAarValores{$vlElem}:=$vlElem\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/array-integer",children:"ARRAY INTEGER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/array-longint",children:"ARRAY LONGINT"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"219"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var a=r(667294);let s={},l=a.createContext(s);function d(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);