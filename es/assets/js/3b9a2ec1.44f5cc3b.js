"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2324"],{383285:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>t,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/array-boolean","title":"ARRAY BOOLEAN","description":"ARRAY BOOLEAN ( nombreArray ; tama\xf1o {; tama\xf1o2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-boolean.md","sourceDirName":"commands-legacy","slug":"/commands/array-boolean","permalink":"/docs/es/20-R8/commands/array-boolean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-boolean.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-boolean","title":"ARRAY BOOLEAN","slug":"/commands/array-boolean","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY BLOB","permalink":"/docs/es/20-R8/commands/array-blob"},"next":{"title":"ARRAY DATE","permalink":"/docs/es/20-R8/commands/array-date"}}'),s=r("785893"),l=r("250065");let o={id:"array-boolean",title:"ARRAY BOOLEAN",slug:"/commands/array-boolean",displayed_sidebar:"docs"},i=void 0,d={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY BOOLEAN"})," ( ",(0,s.jsx)(n.em,{children:"nombreArray"})," ; ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nombreArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas en un array bidimensional"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ARRAY BOOLEAN crea y/o redimensiona un array de elementos ",(0,s.jsx)(n.em,{children:"Booleanos"})," en memoria.es el nombre del array."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos en el array."]}),"\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o2"})," es opcional; si se especifica ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array bidimensional."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En este caso, ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,s.jsx)(n.em,{children:"tama\xf1o2"})," especifica el n\xfamero de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional."]}),"\n",(0,s.jsx)(n.p,{children:"Cuando aplica ARRAY BOOLEAN a un array existente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si agranda el tama\xf1o del array, los elementos existente no son modificados, y los nuevos elementos se inicializan en False."}),"\n",(0,s.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, se pierden los \xfaltimos elementos borrados del array."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," en algunos contextos, una alternativa a utilizar arrays booleanos es utilizar un array entero donde cada elemento signifique \u201Cverdadero\u201D si es diferente de cero y signifique \u201Cfalso\u201D si es igual a cero."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array de proceso de 100 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be either TRUE or FALSE",children:"Booleano"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN(abValores;100)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array local de 100 filas de 50 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be either TRUE or FALSE",children:"Booleano"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN($abValores;100;50)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array interproceso de 50 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be either TRUE or FALSE",children:"Booleano"})," y a cada elemento asigna el valor Verdadero par:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BOOLEAN(\u25CAabValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAabValores{$vlElem}:=(($vlElem%2)=0)\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/array-integer",children:"ARRAY INTEGER"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"223"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var a=r(667294);let s={},l=a.createContext(s);function o(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);