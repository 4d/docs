"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96265"],{347895:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>t,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/array-picture","title":"ARRAY PICTURE","description":"ARRAY PICTURE ( nombreArray ; tama\xf1o {; tama\xf1o2} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-picture.md","sourceDirName":"commands-legacy","slug":"/commands/array-picture","permalink":"/docs/es/commands/array-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-picture","title":"ARRAY PICTURE","slug":"/commands/array-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY OBJECT","permalink":"/docs/es/commands/array-object"},"next":{"title":"ARRAY POINTER","permalink":"/docs/es/commands/array-pointer"}}'),s=r("785893"),i=r("250065");let l={id:"array-picture",title:"ARRAY PICTURE",slug:"/commands/array-picture",displayed_sidebar:"docs"},d=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY PICTURE"})," ( ",(0,s.jsx)(n.em,{children:"nombreArray"})," ; ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," {; ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nombreArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos en el array o N\xfamero de filas si se especifica tama\xf1o2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tama\xf1o2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas en un array bidimensional"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ARRAY PICTURE crea y/o redimensiona un array de elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Imagen"})," en memoria.es el nombre del array."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," es el n\xfamero de elementos en el array."]}),"\n",(0,s.jsxs)(n.li,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tama\xf1o2"})," es opcional; si se especifica ",(0,s.jsx)(n.em,{children:"tama\xf1o2"}),", el comando crea un array bidimensional. En este caso, ",(0,s.jsx)(n.em,{children:"tama\xf1o"})," especifica el n\xfamero de filas y ",(0,s.jsx)(n.em,{children:"tama\xf1o2"})," especifica el n\xfamero de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensi\xf3n del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cuando aplica ARRAY PICTURE a un array existente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si agranda el tama\xf1o del array, los elementos existentes no son modificados, y los nuevos elementos se inicializan en im\xe1genes vac\xedas. Esto significa que ",(0,s.jsx)(n.a,{href:"/docs/es/commands/picture-size",title:"Picture size",children:"Picture size"})," aplicado a uno de estos elementos devuelve ",(0,s.jsx)(n.em,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Si reduce el tama\xf1o del array, se pierden los \xfaltimos elementos borrados del array."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array de proceso de 100 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Imagen"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY PICTURE(agValores;100)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array local de 100 filas de de 50 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Imagen"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY PICTURE($agValores;100;50)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Este ejemplo crea un array interpcoceso de elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Can be any Windows or Macintosh picture",children:"Imagen"})," y carga cada imagen en uno de los elementos del array. El tama\xf1o del array es igual al n\xfamero de recursos ",(0,s.jsx)(n.em,{children:"'PICT'"})," disponibles en la base. El nombre del recurso del array comienza por ",(0,s.jsx)(n.em,{children:'"User Intf/"'}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0RESOURCE LIST("PICT";$aiResIDs;$asResNombres)\n\xa0ARRAY PICTURE(\u25CAagValores;Size of array($aiResIDs))\n\xa0$vlPictElem:=0\n\xa0For($vlElem;1;Size of array(\u25CAagValues))\n\xa0\xa0\xa0\xa0If($asResNames="User Intf/@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPictElem:=vlPictElem+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PICTURE RESOURCE("PICT";$aiResIDs{$vlElem};$vgImagen)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u25CAagValores{$vlPictElem}:=$vgImagen\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0ARRAY PICTURE(\u25CAagValores;$vlPictElem)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"279"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var a=r(667294);let s={},i=a.createContext(s);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);