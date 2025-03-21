"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80664"],{473597:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/delete-from-array","title":"DELETE FROM ARRAY","description":"DELETE FROM ARRAY ( array ; posicion {; reemplazos} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-from-array.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-array","permalink":"/docs/es/commands/delete-from-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-from-array","title":"DELETE FROM ARRAY","slug":"/commands/delete-from-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count in array","permalink":"/docs/es/commands/count-in-array"},"next":{"title":"DISTINCT ATTRIBUTE PATHS","permalink":"/docs/es/commands/distinct-attribute-paths"}}'),d=r("785893"),t=r("250065");let l={id:"delete-from-array",title:"DELETE FROM ARRAY",slug:"/commands/delete-from-array",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FROM ARRAY"})," ( ",(0,d.jsx)(n.em,{children:"array"})," ; ",(0,d.jsx)(n.em,{children:"posicion"})," {; ",(0,d.jsx)(n.em,{children:"reemplazos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"array"}),(0,d.jsx)(n.td,{children:"Array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Array del cual borrar elementos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"posicion"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Elemento donde comienza la supresi\xf3n"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"reemplazos"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de elementos a borrar, o 1 elemento si se omite"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando DELETE FROM ARRAY borra uno o m\xe1s elementos del ",(0,d.jsx)(n.em,{children:"array"}),". Los elementos se borran a partir del elemento especificado por ",(0,d.jsx)(n.em,{children:"donde"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"cuantos"})," es el n\xfamero de elementos a borrar. Si no se especifica ",(0,d.jsx)(n.em,{children:"cuantos"}),", entonces se borra un elemento. El tama\xf1o del array se reduce en ",(0,d.jsx)(n.em,{children:"cuantos"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo borra tres elementos, comenzando en el elemento 5:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0DELETE FROM ARRAY(anArray;5;3)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente ejemplo borra el \xfaltimo elemento de un array, si existe:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$vlElem:=Size of array(anArray)\n\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0DELETE FROM ARRAY(anArray;$vlElem)\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/insert-in-array",children:"INSERT IN ARRAY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/size-of-array",children:"Size of array"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"228"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let d={},t=s.createContext(d);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);