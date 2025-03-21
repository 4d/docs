"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22576"],{390123:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/insert-in-array","title":"INSERT IN ARRAY","description":"INSERT IN ARRAY ( array ; posicion {; reemplazos} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/insert-in-array.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-array","permalink":"/docs/es/20-R7/commands/insert-in-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-in-array","title":"INSERT IN ARRAY","slug":"/commands/insert-in-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in sorted array","permalink":"/docs/es/20-R7/commands/find-in-sorted-array"},"next":{"title":"LIST TO ARRAY","permalink":"/docs/es/20-R7/commands/list-to-array"}}'),i=r("785893"),d=r("250065");let a={id:"insert-in-array",title:"INSERT IN ARRAY",slug:"/commands/insert-in-array",displayed_sidebar:"docs"},t=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"INSERT IN ARRAY"})," ( ",(0,i.jsx)(n.em,{children:"array"})," ; ",(0,i.jsx)(n.em,{children:"posicion"})," {; ",(0,i.jsx)(n.em,{children:"reemplazos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"array"}),(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del array"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"posicion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Donde insertar los elementos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reemplazos"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de elementos a insertar, o 1 elemento si se omite"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando INSERT IN ARRAY inserta uno o m\xe1s elementos en el ",(0,i.jsx)(n.em,{children:"array"}),". Los nuevos elementos se insertan antes del elemento especificado por ",(0,i.jsx)(n.em,{children:"donde"}),", y se inicializan en el valor vac\xedo del tipo de array. Todos los elementos m\xe1s all\xe1 de ",(0,i.jsx)(n.em,{children:"donde"})," se mueven consecuentemente en el array por un valor de uno o por el valor especificado en ",(0,i.jsx)(n.em,{children:"cuantos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"donde"})," es mayor que el tama\xf1o del array, los elementos se a\xf1aden al final del array."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"cuantos"})," es el n\xfamero de elementos a insertar. Si no se especifica ",(0,i.jsx)(n.em,{children:"cuantos"}),", entonces se inserta s\xf3lo un elemento. El tama\xf1o del array aumenta en ",(0,i.jsx)(n.em,{children:"cuantos"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo inserta cinco nuevos elementos, comenzando en el elemento 10:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0INSERT IN ARRAY(anArray;10;5)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo a\xf1ade un elemento a un array:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$vlElem:=Size of array(anArray)+1\n\xa0INSERT IN ARRAY(anArray;$vlElem)\n\xa0anArray{$vlElem}:=...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/size-of-array",children:"Size of array"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"227"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var s=r(667294);let i={},d=s.createContext(i);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);