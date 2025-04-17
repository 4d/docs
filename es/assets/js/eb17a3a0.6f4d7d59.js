"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99850"],{286385:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/set-list-item-font","title":"SET LIST ITEM FONT","description":"SET LIST ITEM FONT ( { ;} lista ; refElem |  ; fuente )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-list-item-font.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-font","permalink":"/docs/es/commands/set-list-item-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-font.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-list-item-font","title":"SET LIST ITEM FONT","slug":"/commands/set-list-item-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM","permalink":"/docs/es/commands/set-list-item"},"next":{"title":"SET LIST ITEM ICON","permalink":"/docs/es/commands/set-list-item-icon"}}'),i=t("785893"),a=t("250065");let r={id:"set-list-item-font",title:"SET LIST ITEM FONT",slug:"/commands/set-list-item-font",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET LIST ITEM FONT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,i.jsx)(n.em,{children:"fuente"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lista"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refElem | *"}),(0,i.jsx)(n.td,{children:"Entero largo, Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia del elemento o 0 para el \xfaltimo elemento a\xf1adido a la lista o * para el elemento actual de la lista"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fuente"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre o n\xfamero de fuente"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando SET LIST ITEM FONT modifica la fuente de caracteres del elemento especificado por el par\xe1metro ",(0,i.jsx)(n.em,{children:"refElem"})," de la lista cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,i.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de la lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (",(0,i.jsx)(n.a,{href:"#",title:"Una referencia a una lista jer\xe1rquica",children:"ListRef"}),"). Si utiliza una sola representaci\xf3n de lista o trabaja con los elementos estructurales (se omite el segundo *), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo *), la sintaxis basada en el nombre del objeto es requerida ya que cada representaci\xf3n puede tener su propio elemento actual."]}),"\n",(0,i.jsxs)(n.p,{children:["Puede pasar un n\xfamero de referencia en ",(0,i.jsx)(n.em,{children:"refElem"}),". Si este n\xfamero no corresponde a ning\xfan elemento de la lista, el comando hace nada. Igualmente puede pasar 0 en ",(0,i.jsx)(n.em,{children:"refElem"})," para solicitar la modificaci\xf3n del \xfaltimo elemento a\xf1adido a la lista (utilizando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Por \xfaltimo, puede pasar * en ",(0,i.jsx)(n.em,{children:"refElem"}),": en este caso, el comando se aplicar\xe1 al elemento actual de la lista. Si varios elementos se seleccionan manualmente, el elemento actual es el que se seleccion\xf3 de \xfaltimo. Si ning\xfan elemento est\xe1 seleccionado, el comando no hace nada."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"fuente"}),", pase el nombre o n\xfamero de la fuente a utilizar. Para reaplicar la fuente por defecto de la lista jer\xe1rquica, pase una cadena vac\xeda en ",(0,i.jsx)(n.em,{children:"fuente"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Aplicar la fuente Times al elemento actual de la lista:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SET LIST ITEM FONT(*;"Milista";*;"Times")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/get-list-item-font",children:"Get list item font"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/object-set-font",children:"OBJECT SET FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-list-item-icon",children:"SET LIST ITEM ICON"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"953"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);