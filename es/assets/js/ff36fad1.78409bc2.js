"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20044"],{84901:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/insert-in-list","title":"INSERT IN LIST","description":"INSERT IN LIST ( { ;} lista ; antesElem |  ; textoElem ; refElem {; sublista ; desplegada} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/insert-in-list.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-list","permalink":"/docs/es/20-R8/commands/insert-in-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"insert-in-list","title":"INSERT IN LIST","slug":"/commands/insert-in-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST PROPERTIES","permalink":"/docs/es/20-R8/commands/get-list-properties"},"next":{"title":"Is a list","permalink":"/docs/es/20-R8/commands/is-a-list"}}'),i=s("785893"),r=s("250065");let l={id:"insert-in-list",title:"INSERT IN LIST",slug:"/commands/insert-in-list",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"INSERT IN LIST"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"lista"})," ; antesElem | * ; ",(0,i.jsx)(n.em,{children:"textoElem"})," ; ",(0,i.jsx)(n.em,{children:"refElem"})," {; ",(0,i.jsx)(n.em,{children:"sublista"})," ; ",(0,i.jsx)(n.em,{children:"desplegada"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lista"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"antesElem | *"}),(0,i.jsx)(n.td,{children:"Entero largo, Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia del elemento o 0 para el \xfaltimo elemento a\xf1adido a la lista o * para el elemento de la lista actualmente seleccionado"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"textoElem"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Texto para el nuevo elemento (max. 255 caracteres)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refElem"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia \xfanico del nuevo elemento"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sublista"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Sublista opcional para asociar al nuevo elemento"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"desplegada"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Indica si la sublista ser\xe1 desplegada o contra\xedda"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando INSERT IN LIST inserta el elemento designado por el par\xe1metro ",(0,i.jsx)(n.em,{children:"refElem"})," en la lista cuyo n\xfamero de referencia se pasa en ",(0,i.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el primer par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de la lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"lista"})," es una referencia de lista jer\xe1rquica  (RefLista). Si utiliza una sola representaci\xf3n de lista o trabaja con los elementos estructurales (se omite el segundo ",(0,i.jsx)(n.em,{children:"*"})," ), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de la misma lista y trabaja con el elemento actual (se pasa el segundo ",(0,i.jsx)(n.em,{children:"*"}),"), la sintaxis basada en el nombre del objeto es requerida ya que cada representaci\xf3n tiene su propio elemento actual."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"antesElem"})," puede utilizarse para designar el elemento delante del cual usted quiere insertar el nuevo elemento:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Puede pasar el valor 0 con el fin de designar el \xfaltimo elemento a\xf1adido a la lista. El nuevo elemento insertado se convertir\xe1 entonces en el elemento seleccionado."}),"\n",(0,i.jsxs)(n.li,{children:["Puede pasar ",(0,i.jsx)(n.em,{children:"*"})," para que el nuevo elemento sea insertado antes del elemento seleccionado actualmente en la lista. En este caso, el nuevo elemento insertado se convierte en el elemento seleccionado."]}),"\n",(0,i.jsx)(n.li,{children:"Por otra parte, si quiere insertar un elemento antes de un elemento espec\xedfico, pase el n\xfamero de referencia de ese elemento. En este caso, el nuevo elemento insertado no es seleccionado autom\xe1ticamente. Si no hay un elemento con el n\xfamero de referencia correspondiente, el comando no hace nada."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pase el n\xfamero de referencia del nuevo elemento en ",(0,i.jsx)(n.em,{children:"refElem"}),". Aunque calificamos este n\xfamero de referencia de elemento como \xfanico, realmente puede pasar el valor que desea. Consulte la secci\xf3n ",(0,i.jsx)(n.em,{children:"Gesti\xf3n de listas jer\xe1rquicas"})," para obtener m\xe1s informaci\xf3n sobre el par\xe1metro ",(0,i.jsx)(n.em,{children:"refElem"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si quiere que el elemento incluya subelementos, pase un n\xfamero de referencia de lista v\xe1lido en el par\xe1metro ",(0,i.jsx)(n.em,{children:"sublista"}),". En este caso, tambi\xe9n debe pasar el par\xe1metro ",(0,i.jsx)(n.em,{children:"desplegada"}),". Pase ",(0,i.jsx)(n.strong,{children:"True"})," o ",(0,i.jsx)(n.strong,{children:"False"})," en este par\xe1metro de manera que esta sublista se muestre desplegada o contra\xedda respectivamente."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["El siguiente c\xf3digo inserta un elemento (sin sublista asociada) justo antes del elemento seleccionado actualmente en la lista ",(0,i.jsx)(n.em,{children:"hList"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0vlUniqueRef:=vlUniqueRef+1\n\xa0INSERT IN LIST(hList;*;"Nuevo elemento";vlUniqueRef)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/append-to-list",children:"APPEND TO LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"625"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);