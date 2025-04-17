"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71964"],{376522:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/delete-from-list","title":"DELETE FROM LIST","description":"DELETE FROM LIST ( { ;} lista ; refElem |\xa0 {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/delete-from-list.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-list","permalink":"/docs/es/commands/delete-from-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-list.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-from-list","title":"DELETE FROM LIST","slug":"/commands/delete-from-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count list items","permalink":"/docs/es/commands/count-list-items"},"next":{"title":"Find in list","permalink":"/docs/es/commands/find-in-list"}}'),r=s("785893"),a=s("250065");let t={id:"delete-from-list",title:"DELETE FROM LIST",slug:"/commands/delete-from-list",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE FROM LIST"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"lista"})," ; refElem |\xa0* {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lista"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refElem |\xa0*"}),(0,r.jsx)(n.td,{children:"Entero largo, Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia del elemento, o 0 para el \xfaltimo elemento a\xf1adido a la lista o * para el elemento de la lista actualmente seleccionada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, borra las sublistas (si la hay) de la memoria Si se omite, las sublistas (si las hay) no son borradas"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando DELETE FROM LIST borra el elemento designado por el par\xe1metro ",(0,r.jsx)(n.em,{children:"refElem"})," de la lista cuyo n\xfamero de referencia se pasa en ",(0,r.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, usted indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (",(0,r.jsx)(n.em,{children:"refLista"}),"). Si utiliza una sola representaci\xf3n de lista o trabaja con todos los elementos (pasa el segundo *), puede utilizar cualquiera de las dos sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con los elementos visibles (el segundo * se omite), la sintaxis basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propia configuraci\xf3n desplegada/contra\xedda."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa ",(0,r.jsx)(n.em,{children:"*"})," en ",(0,r.jsx)(n.em,{children:"refElem"}),", borra el elemento actualmente seleccionado en la lista. Igualmente puede pasar 0 en este par\xe1metro para borrar el \xfaltimo elemento a\xf1adido a la lista."]}),"\n",(0,r.jsxs)(n.p,{children:["De lo contrario, especifique el n\xfamero de referencia del elemento que quiere borrar. Si el n\xfamero no corresponde a ning\xfan elemento de la ",(0,r.jsx)(n.em,{children:"lista"}),", el comando no hace nada."]}),"\n",(0,r.jsxs)(n.p,{children:["Si trabaja con los n\xfameros de referencia de los elementos, construya una lista en la cual los elementos tengan n\xfameros de referencia \xfanicos, de lo contrario no podr\xe1 distinguir los elementos. Para mayor informaci\xf3n, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Sin importar que elemento borre, debe especificar el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," para permitir a 4D borrar autom\xe1ticamente la sublista asociada al elemento, si la hay. Si no especifica el par\xe1metro ",(0,r.jsx)(n.em,{children:"*"}),", es una buena idea obtener previamente el n\xfamero de referencia de la sublista (si la hay) asociada al elemento, de manera que puede borrarla, si es necesario, utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente c\xf3digo borra el elemento seleccionado de la lista ",(0,r.jsx)(n.em,{children:"hList"}),". Si el elemento tiene una sublista asociada se borra (como tambi\xe9n toda sub-sublista):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0DELETE FROM LIST(hList;*;*)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/clear-list",children:"CLEAR LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/get-list-item",children:"GET LIST ITEM"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"624"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(667294);let r={},a=i.createContext(r);function t(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);