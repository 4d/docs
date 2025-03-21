"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93398"],{965276:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/object-get-list-reference","title":"OBJECT Get list reference","description":"OBJECT Get list reference ( { ;} objeto {; tipoLista*} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-list-reference.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-reference","permalink":"/docs/es/20-R7/commands/object-get-list-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-reference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-list-reference","title":"OBJECT Get list reference","slug":"/commands/object-get-list-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get list name","permalink":"/docs/es/20-R7/commands/object-get-list-name"},"next":{"title":"OBJECT GET MAXIMUM VALUE","permalink":"/docs/es/20-R7/commands/object-get-maximum-value"}}'),r=s("785893"),i=s("250065");let d={id:"object-get-list-reference",title:"OBJECT Get list reference",slug:"/commands/object-get-list-reference",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT Get list reference"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"tipoLista"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,r.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o ",(0,r.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipoLista"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de lista: lista de Selecci\xf3n, lista obligatoria o la lista de excluidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia de lista"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"OBJECT Get list reference"})," devuelve el n\xfamero de referencia (",(0,r.jsx)(n.em,{children:"RefList"}),") de la lista jer\xe1rquica asociada al objeto o grupo de objetos designados por los par\xe1metros ",(0,r.jsx)(n.em,{children:"objeto"})," y ",(0,r.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"tipoLista"}),", el comando devuelve el nombre de la lista de opciones (lista de valores) asociado al objeto. Tambi\xe9n puede obtener el n\xfamero de referencia de las listas obligatoria o las listas de excluidos pasando en ",(0,r.jsx)(n.em,{children:"tipoLista"}),', una de las siguientes constantes del tema "',(0,r.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Choice list"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:'Lista simple de selecci\xf3n de valores (opci\xf3n "Lista" en la Lista de Propiedades) (por defecto)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Excluded list"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:'Lista de valores no aceptados para la entrada (Opci\xf3n "Exclusiones" en la lista de propiedades)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Required list"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:'Lista s\xf3lo los valores aceptados para la entrada (Opci\xf3n "Obligatoria" en la Lista de Propiedades)'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si no hay una lista jer\xe1rquica asociada al objeto para el ",(0,r.jsx)(n.em,{children:"tipoLista"})," definido, el comando devuelve 0."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-get-list-name",children:"OBJECT Get list name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-list-by-reference",children:"OBJECT SET LIST BY REFERENCE"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1267"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);