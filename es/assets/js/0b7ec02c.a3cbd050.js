"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48879"],{890858:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"commands-legacy/get-list-item","title":"GET LIST ITEM","description":"GET LIST ITEM ( { ;} lista ; posicionElem |  ; refElem ; textoElem {; sublista ; desplegada} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-list-item.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item","permalink":"/docs/es/commands/get-list-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-item","title":"GET LIST ITEM","slug":"/commands/get-list-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in list","permalink":"/docs/es/commands/find-in-list"},"next":{"title":"Get list item font","permalink":"/docs/es/commands/get-list-item-font"}}'),t=n("785893"),l=n("250065");let d={id:"get-list-item",title:"GET LIST ITEM",slug:"/commands/get-list-item",displayed_sidebar:"docs"},r=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET LIST ITEM"})," ( {* ;} ",(0,t.jsx)(s.em,{children:"lista"})," ; posicionElem | * ; ",(0,t.jsx)(s.em,{children:"refElem"})," ; ",(0,t.jsx)(s.em,{children:"textoElem"})," {; ",(0,t.jsx)(s.em,{children:"sublista"})," ; ",(0,t.jsx)(s.em,{children:"desplegada"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe1metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operador"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Si se especifica lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lista"}),(0,t.jsx)(s.td,{children:"Integer, Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posicionElem | *"}),(0,t.jsx)(s.td,{children:"Operador, Entero largo"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Posici\xf3n del elemento en lista(s) desplegada(s) o contra\xedda(s) * para el elemento actual de la lista."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"refElem"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"N\xfamero de referencia del elemento"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"textoElem"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Texto del elemento de la lista"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sublista"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"N\xfamero de referencia de la sublista (si la hay)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"desplegada"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Si una sublista est\xe1 asociada: TRUE = la sublista est\xe1 desplegada FALSE = la sublista est\xe1 contra\xedda"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(s.p,{children:["El comando GET LIST ITEM devuelve la informaci\xf3n sobre el elemento especificado por ",(0,t.jsx)(s.em,{children:"posicionElem"})," de la lista cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,t.jsx)(s.em,{children:"lista"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,t.jsx)(s.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(s.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza s\xf3lo una representaci\xf3n de lista, puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si usted utiliza varias representaciones de una misma lista, la lista basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propia configuraci\xf3n desplegada/contra\xedda y su propio elemento actual."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota:"})," si utiliza el car\xe1cter @ en el nombre de la lista y el formulario contiene varias listas que responden a este nombre, el comando GET LIST ITEM s\xf3lo aplicar\xe1 al primer objeto cuyo nombre corresponda."]}),"\n",(0,t.jsxs)(s.p,{children:["La posici\xf3n debe expresarse respecto al estado actual desplegado/contra\xeddo de la lista y de su sublista. Debe pasar un valor de posici\xf3n entre 1 y el valor devuelto por ",(0,t.jsx)(s.a,{href:"/docs/es/commands/count-list-items",title:"Count list items",children:"Count list items"}),'. Si pasa un valor que no est\xe1 en este rango, GET LIST ITEM devuelve valores vac\xedos (0, "", etc.).']}),"\n",(0,t.jsx)(s.p,{children:"Despu\xe9s de la llamada, recupera:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["El n\xfamero de referencia del elemento en ",(0,t.jsx)(s.em,{children:"refElem"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["El texto del elemento en ",(0,t.jsx)(s.em,{children:"textElem"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Si pasa los par\xe1metros opcionales ",(0,t.jsx)(s.em,{children:"sublista"})," y ",(0,t.jsx)(s.em,{children:"desplegada"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"subLista"})," devuelve el n\xfamero de referencia de la sublista asociada al elemento. Si el elemento no tiene sublista, ",(0,t.jsx)(s.em,{children:"subLista"})," devuelve cero (0)."]}),"\n",(0,t.jsxs)(s.li,{children:["Si el elemento tiene una sublista, ",(0,t.jsx)(s.em,{children:"desplegada"})," devuelve TRUE si la sublista est\xe1 desplegada, y FALSE si est\xe1 contra\xedda."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"hList"})," es una lista cuyos elementos tienen n\xfameros de referencia \xfanicos. El siguiente c\xf3digo pasa por programaci\xf3n al estado desplegado/contra\xeddo de la sublista, si hay, asociada al elemento seleccionado:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\n\xa0If($vlItemPos>0)\n\xa0\xa0\xa0\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbDesplegada)\n\xa0\xa0\xa0\xa0If(Is a list($hSublist))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;Not($vbDesplegada))\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(s.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsxs)(s.p,{children:["Consulte el ejemplo del comando ",(0,t.jsx)(s.a,{href:"/docs/es/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/es/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/commands/list-item-parent",children:"List item parent"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/commands/list-item-position",children:"List item position"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/commands/selected-list-items",children:"Selected list items"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/commands/set-list-item",children:"SET LIST ITEM"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,t.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero de comando"}),(0,t.jsx)(s.td,{children:"378"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Hilo seguro"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return d}});var i=n(667294);let t={},l=i.createContext(t);function d(e){let s=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);