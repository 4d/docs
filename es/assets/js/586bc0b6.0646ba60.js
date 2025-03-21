"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10120"],{545727:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>t,assets:()=>r,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/object-get-list-name","title":"OBJECT Get list name","description":"OBJECT Get list name ( { ;} objeto {; tipoLista*} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-list-name.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-name","permalink":"/docs/es/commands/object-get-list-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-list-name","title":"OBJECT Get list name","slug":"/commands/object-get-list-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get keyboard layout","permalink":"/docs/es/commands/object-get-keyboard-layout"},"next":{"title":"OBJECT Get list reference","permalink":"/docs/es/commands/object-get-list-reference"}}'),i=s("785893"),d=s("250065");let o={id:"object-get-list-name",title:"OBJECT Get list name",slug:"/commands/object-get-list-name",displayed_sidebar:"docs"},a=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT Get list name"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," {; ",(0,i.jsx)(n.em,{children:"tipoLista"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre del objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *), o Campo o variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tipoLista"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Tipo de lista: lista de selecci\xf3n, lista de obligatorios o lista de excluidos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nombre de la lista (definida en modo Dise\xf1o)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando OBJECT Get list name devuelve el nombre de la lista asociada al objeto o a un grupo de objetos designados por ",(0,i.jsx)(n.em,{children:"objeto"}),". 4D le permite asociar una lista de opciones (creada con el editor de la listas en modo Dise\xf1o) a los objetos de formulario utilizando el editor de formularios o el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro objeto es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o de variable (campo o variable objeto \xfanicamente) en lugar de una cadena."]}),"\n",(0,i.jsxs)(n.p,{children:["Puede utilizar el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"tipoLista"})," para designar el tipo de lista que desea obtener. Por defecto, si omite este par\xe1metro, el comando devuelve el nombre de la lista de opciones (lista de valores) asociado al objeto. Tambi\xe9n puede obtener los nombres de las listas obligatorias o de las listas de excluidos pasando, en ",(0,i.jsx)(n.em,{children:"tipoLista"}),', una de las siguientes constantes que se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Choice list"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:'Lista simple de selecci\xf3n de valores (opci\xf3n "Lista" en la Lista de Propiedades) (por defecto)'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Excluded list"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:'Lista de valores no aceptados para la entrada (Opci\xf3n "Exclusiones" en la lista de propiedades)'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Required list"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:'Lista s\xf3lo los valores aceptados para la entrada (Opci\xf3n "Obligatoria" en la Lista de Propiedades)'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Si ninguna lista del tipo definido est\xe1 asociada al ",(0,i.jsx)(n.em,{children:"objeto"}),', el comando devuelve una cadena vac\xeda ("").']}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/object-get-list-reference",children:"OBJECT Get list reference"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1072"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(667294);let i={},d=t.createContext(i);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);