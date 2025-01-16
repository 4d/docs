"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80224"],{299249:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/get-list-item-icon","title":"GET LIST ITEM ICON","description":"GET LIST ITEM ICON ( { ;} lista ; refElem |  ; icono )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-list-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-icon","permalink":"/docs/es/commands/get-list-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-icon.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-item-icon","title":"GET LIST ITEM ICON","slug":"/commands/get-list-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get list item font","permalink":"/docs/es/commands/get-list-item-font"},"next":{"title":"GET LIST ITEM PARAMETER","permalink":"/docs/es/commands/get-list-item-parameter"}}'),t=i("785893"),a=i("250065");let r={id:"get-list-item-icon",title:"GET LIST ITEM ICON",slug:"/commands/get-list-item-icon",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET LIST ITEM ICON"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,t.jsx)(n.em,{children:"icono"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lista"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre de objeto de tipo de lista (si pasa *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElem | *"}),(0,t.jsx)(n.td,{children:"Operador, Entero largo"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia del elemento o 0 para el \xfaltimo elemento a\xf1adido a la lista o * para el elemento actual de la lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"icono"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Icono asociado al elemento"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando GET LIST ITEM ICON devuelve, en ",(0,t.jsx)(n.em,{children:"icono"}),", el icono asociado al elemento cuyo n\xfamero de referencia se pasa en ",(0,t.jsx)(n.em,{children:"refElem"})," de la lista cuyo n\xfamero de referencia o nombre de objeto pasa en ",(0,t.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de la lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza una sola representaci\xf3n de lista o trabaja con los elementos estructurales (se omite el segundo ",(0,t.jsx)(n.em,{children:"*"})," ), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo ",(0,t.jsx)(n.em,{children:"*"}),"), la sintaxis basada en el nombre del objeto es requerida ya que cada representaci\xf3n tiene su propio elemento actual."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," si utiliza el car\xe1cter @ en el nombre de objeto de la lista y el formulario contiene varias listas que responden a este nombre, el comando GET LIST ITEM ICON se aplicar\xe1 al primer objeto cuyo nombre corresponda."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede pasar un n\xfamero de referencia en ",(0,t.jsx)(n.em,{children:"refElem"}),". Si este n\xfamero no corresponde a un elemento en la lista, el comando no hace nada. Tambi\xe9n puede pasar 0 en ",(0,t.jsx)(n.em,{children:"refElem"})," para indicar el \xfaltimo elemento a\xf1adido a la lista (usando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Finalmente, puede pasar ",(0,t.jsx)(n.em,{children:"*"})," en ",(0,t.jsx)(n.em,{children:"refElem:"})," en este caso, el comando se aplicar\xe1 al elemento actual de la lista. Si varios elementos son seleccionados manualmente, el elemento actual es el seleccionado de \xfaltimo. Si ning\xfan elemento est\xe1 seleccionado, el comando no hace nada."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en ",(0,t.jsx)(n.em,{children:"icono"})," una variable imagen. Despu\xe9s de ejecutar el comando, contendr\xe1 el icono asociado con el elemento, sin importar la fuente del icono (imagen est\xe1tica, recurso o expresi\xf3n imagen)."]}),"\n",(0,t.jsx)(n.p,{children:"Si ning\xfan icono est\xe1 asociado al elemento, la variable icono se devuelve vac\xeda."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," cuando el icono asociado a un elemento ha sido definido v\xeda una referencia est\xe1tica (referencias de recursos o im\xe1genes de la librer\xeda de im\xe1genes), es posible conocer su n\xfamero utilizando el comando GET LIST ITEM PROPERTIES."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/set-list-item-icon",children:"SET LIST ITEM ICON"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"951"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var s=i(667294);let t={},a=s.createContext(t);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);