"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90932"],{875118:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>m,assets:()=>i,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"commands-legacy/array-text","title":"ARRAY TEXT","description":"ARRAY TEXT ( nombreArray ; tama\xf1o {; tama\xf1o2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-text.md","sourceDirName":"commands-legacy","slug":"/commands/array-text","permalink":"/docs/es/commands/array-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-text","title":"ARRAY TEXT","slug":"/commands/array-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY REAL","permalink":"/docs/es/commands/array-real"},"next":{"title":"ARRAY TIME","permalink":"/docs/es/commands/array-time"}}'),t=r("785893"),s=r("250065");let l={id:"array-text",title:"ARRAY TEXT",slug:"/commands/array-text",displayed_sidebar:"docs"},o=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ARRAY TEXT"})," ( ",(0,t.jsx)(n.em,{children:"nombreArray"})," ; ",(0,t.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,t.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombreArray"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del array"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tama\xf1o"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tama\xf1o2"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columnas en un array bidimensional"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ARRAY TEXT crea y/o redimensiona un array de elementos de tipo ",(0,t.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"})," en memoria.es el nombre del array."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos en el array."]}),"\n",(0,t.jsxs)(n.li,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"tama\xf1o2"})," es opcional; si se especifica ",(0,t.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array bidimensional. En este caso, ",(0,t.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,t.jsx)(n.em,{children:"tama\xf1o2"})," especifica el n\xfamero de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cuando aplica ARRAY TEXT a un array existente:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Si agranda el tama\xf1o del array, los elementos existentes no se modifican, y los nuevos elementos son inicializados en "" (cadena vac\xeda).'}),"\n",(0,t.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, se pierden los \xfaltimos elementos borrados del array."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["Este ejemplo crea un array de proceso de 100 elementos de tipo ",(0,t.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(atValores;100)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:["Este ejemplo crea un array local de 100 filas de 50 elementos de tipo ",(0,t.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($atValores;100;50)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Este ejemplo crea un array interproceso de 50 elementos de tipo texto y asigna a cada elemento el valor \u201CElemento #\u201D seguido por su n\xfamero de elemento:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(\u25CAatValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAatValores{$vlElem}:="Elemento #"+String($vlElem)\n\xa0End for\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"222"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);