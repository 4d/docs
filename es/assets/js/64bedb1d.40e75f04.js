"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86924"],{992087:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/select-list-items-by-reference","title":"SELECT LIST ITEMS BY REFERENCE","description":"SELECT LIST ITEMS BY REFERENCE ( lista ; refElem {; refArray} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-list-items-by-reference.md","sourceDirName":"commands-legacy","slug":"/commands/select-list-items-by-reference","permalink":"/docs/es/20-R7/commands/select-list-items-by-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-list-items-by-reference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-list-items-by-reference","title":"SELECT LIST ITEMS BY REFERENCE","slug":"/commands/select-list-items-by-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SELECT LIST ITEMS BY POSITION","permalink":"/docs/es/20-R7/commands/select-list-items-by-position"},"next":{"title":"Selected list items","permalink":"/docs/es/20-R7/commands/selected-list-items"}}'),t=s("785893"),l=s("250065");let i={id:"select-list-items-by-reference",title:"SELECT LIST ITEMS BY REFERENCE",slug:"/commands/select-list-items-by-reference",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SELECT LIST ITEMS BY REFERENCE"})," ( ",(0,t.jsx)(n.em,{children:"lista"})," ; ",(0,t.jsx)(n.em,{children:"refElem"})," {; ",(0,t.jsx)(n.em,{children:"refArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lista"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia de lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refElem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia del elemento o 0 para el \xfaltimo elemento  a\xf1adido a la lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refArray"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Array de n\xfameros de referencia de elementos"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando SELECT LIST ITEMS BY REFERENCE selecciona el o los elementos cuyo n\xfamero de referencia se pasa en ",(0,t.jsx)(n.em,{children:"refElem"})," y opcionalmente en ",(0,t.jsx)(n.em,{children:"refArray"}),", en la lista cuyo n\xfamero de referencia se pasa en ",(0,t.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si ning\xfan elemento tiene el n\xfamero de referencia que pas\xf3, el comando no hace nada."}),"\n",(0,t.jsx)(n.p,{children:"Si un elemento no es visible actualmente (por ejemplo, si est\xe1 ubicado en una lista contra\xedda), el comando despliega la(s) sublista(s) correspondiente(s) de manera que quede(n) visible(s)."}),"\n",(0,t.jsxs)(n.p,{children:["Si no pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"refArray"}),", el par\xe1metro ",(0,t.jsx)(n.em,{children:"refElem"})," representa la referencia del elemento a seleccionar. Si el n\xfamero de elemento no corresponde a ning\xfan elemento de la lista, el comando no hace nada. Igualmente puede pasar el valor 0 en este par\xe1metro para designar el \xfaltimo elemento a\xf1adido a la lista."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"refArray"})," le permite seleccionar varios elementos simult\xe1neamente en la lista. En ",(0,t.jsx)(n.em,{children:"refArray"}),", debe pasar un array donde cada l\xednea indique la referencia fija de un elemento a seleccionar.",(0,t.jsx)(n.br,{}),"\nEn este caso, el elemento designado por el par\xe1metro ",(0,t.jsx)(n.em,{children:"refElemf"})," determina el nuevo elemento actual de la lista en la selecci\xf3n resultante, el cual puede pertenecer o no al conjunto de elementos definido por el array. El elemento actual es, m\xe1s particularmente, el que es editado por el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/edit-item",title:"EDIT ITEM",children:"EDIT ITEM"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," para seleccionar varios elementos simult\xe1neamente en una lista jer\xe1rquica (manualmente o por programaci\xf3n), la propiedad ",(0,t.jsx)(n.em,{children:"multi-seleccionable"})," debe haber sido seleccionada para la lista. Esta propiedad se define utilizando el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-list-properties",title:"SET LIST PROPERTIES",children:"SET LIST PROPERTIES"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si trabaja con los n\xfameros de referencia de los elementos, aseg\xfarese de construir un alista en la cual los elementos tengan n\xfameros de referencia \xfanicos; de lo contrario no podr\xe1 diferenciarlos. Para mayor informaci\xf3n, consulte la descripci\xf3n del comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"hList"})," es una lista cuyos elementos tienen n\xfameros de referencia \xfanicos. El siguiente m\xe9todo de objeto para un bot\xf3n selecciona el elemento padre (si lo hay) del elemento seleccionado actualmente:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\xa0// Obtener la posici\xf3n del elemento seleccionado\n\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText)\xa0// Obtener el n\xfamero de referencia del elemento seleccionado\n\xa0$vlParentItemRef:=List item parent(hList;$vlItemRef)\xa0// Obtener n\xfamero de referencia del elemento padre (si lo hay)\n\xa0If($vlParentItemRef>0)\n\xa0\xa0\xa0\xa0SELECT LIST ITEM BY REFERENCE(hList;List item parent(hList;$vlItemRef))\xa0// Selecci\xf3n del elemento padre End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/edit-item",children:"EDIT ITEM"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/selected-list-items",children:"Selected list items"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"630"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},l=r.createContext(t);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);