"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94002],{33760:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(474848),t=r(28453);const s={id:"array-text",title:"ARRAY TEXT",slug:"/commands/array-text",displayed_sidebar:"docs"},o=void 0,l={id:"commands-legacy/array-text",title:"ARRAY TEXT",description:"ARRAY TEXT ( nombreArray ; tama\xf1o {; tama\xf1o2} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-text.md",sourceDirName:"commands-legacy",slug:"/commands/array-text",permalink:"/docs/es/commands/array-text",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"array-text",title:"ARRAY TEXT",slug:"/commands/array-text",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ARRAY REAL",permalink:"/docs/es/commands/array-real"},next:{title:"ARRAY TIME",permalink:"/docs/es/commands/array-time"}},i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ARRAY TEXT"})," ( ",(0,a.jsx)(n.em,{children:"nombreArray"})," ; ",(0,a.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,a.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nombreArray"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nombre del array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tama\xf1o"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tama\xf1o2"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de columnas en un array bidimensional"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ARRAY TEXT crea y/o redimensiona un array de elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"})," en memoria."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"nombreArray"})," es el nombre del array."]}),"\n",(0,a.jsxs)(n.li,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos en el array."]}),"\n",(0,a.jsxs)(n.li,{children:["El par\xe1metro ",(0,a.jsx)(n.em,{children:"tama\xf1o2"})," es opcional; si se especifica ",(0,a.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array bidimensional. En este caso, ",(0,a.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,a.jsx)(n.em,{children:"tama\xf1o2"})," especifica el n\xfamero de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Cuando aplica ARRAY TEXT a un array existente:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Si agranda el tama\xf1o del array, los elementos existentes no se modifican, y los nuevos elementos son inicializados en "" (cadena vac\xeda).'}),"\n",(0,a.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, se pierden los \xfaltimos elementos borrados del array."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo crea un array de proceso de 100 elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(atValores;100)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo crea un array local de 100 filas de 50 elementos de tipo ",(0,a.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"Texto"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($atValores;100;50)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"Este ejemplo crea un array interproceso de 50 elementos de tipo texto y asigna a cada elemento el valor \u201cElemento #\u201d seguido por su n\xfamero de elemento:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(\u25caatValues;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25caatValores{$vlElem}:="Elemento #"+String($vlElem)\n\xa0End for\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"_o_ARRAY STRING"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var a=r(296540);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);