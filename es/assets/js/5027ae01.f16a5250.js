"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83072"],{43545:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>a,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/list-item-position","title":"List item position","description":"List item position ( { ;} lista ; refElem* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/list-item-position.md","sourceDirName":"commands-legacy","slug":"/commands/list-item-position","permalink":"/docs/es/commands/list-item-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-item-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"list-item-position","title":"List item position","slug":"/commands/list-item-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"List item parent","permalink":"/docs/es/commands/list-item-parent"},"next":{"title":"LIST OF CHOICE LISTS","permalink":"/docs/es/commands/list-of-choice-lists"}}'),t=i("785893"),r=i("250065");let o={id:"list-item-position",title:"List item position",slug:"/commands/list-item-position",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"List item position"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"lista"})," ; ",(0,t.jsx)(n.em,{children:"refElem"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es una referencia de lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lista"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) Nombre de objeto de tipo lista (si se pasa *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia del elemento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Posici\xf3n del elemento en listas desplegadas/contra\xeddas"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando List item position devuelve la posici\xf3n del elemento cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,t.jsx)(n.em,{children:"refElem"}),", en la lista cuyo n\xfamero de referencia se pasa en ",(0,t.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza s\xf3lo una representaci\xf3n de lista o trabaja con elementos estructurales (el segundo * se omite), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista, la sintaxis basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propia configuraci\xf3n desplegada/contra\xedda."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," si utiliza el car\xe1cter @ en el nombre del objeto de la lista y el formulario contiene varias listas que tienen este nombre, el comando List item position se aplicar\xe1 al primer objeto cuyo nombre corresponda."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," a diferencia de otros comandos de este tema, este comando no permite pasar el valor 0 en ",(0,t.jsx)(n.em,{children:"refElem"})," para designar el \xfaltimo elemento a\xf1adido."]}),"\n",(0,t.jsx)(n.p,{children:"La posici\xf3n se expresa con relaci\xf3n al elemento superior de la lista, utilizando, utilizando el estado actual desplegado/contra\xeddo de la lista y su sublista."}),"\n",(0,t.jsxs)(n.p,{children:["El resultado es un n\xfamero entre 1 y el valor devuelto por ",(0,t.jsx)(n.a,{href:"/docs/es/commands/count-list-items",title:"Count list items",children:"Count list items"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si el elemento no es visible porque est\xe1 ubicado en una lista contra\xedda, List item position despliega la lista correspondiente de manera que el elemento sea visible."}),"\n",(0,t.jsx)(n.p,{children:"Si el elemento no existe, List item position devuelve 0."}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/count-list-items",children:"Count list items"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"629"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var s=i(667294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);