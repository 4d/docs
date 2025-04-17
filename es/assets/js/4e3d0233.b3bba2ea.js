"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2519"],{611486:function(e,s,n){n.r(s),n.d(s,{default:()=>A,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"commands-legacy/select-list-items-by-position","title":"SELECT LIST ITEMS BY POSITION","description":"SELECT LIST ITEMS BY POSITION ( { ;} lista ; posicionElem {; posicionArray*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/select-list-items-by-position.md","sourceDirName":"commands-legacy","slug":"/commands/select-list-items-by-position","permalink":"/docs/es/20-R8/commands/select-list-items-by-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-list-items-by-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"select-list-items-by-position","title":"SELECT LIST ITEMS BY POSITION","slug":"/commands/select-list-items-by-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE LIST","permalink":"/docs/es/20-R8/commands/save-list"},"next":{"title":"SELECT LIST ITEMS BY REFERENCE","permalink":"/docs/es/20-R8/commands/select-list-items-by-reference"}}'),t=n("785893"),a=n("250065");let o={id:"select-list-items-by-position",title:"SELECT LIST ITEMS BY POSITION",slug:"/commands/select-list-items-by-position",displayed_sidebar:"docs"},r=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SELECT LIST ITEMS BY POSITION"})," ( {* ;} ",(0,t.jsx)(s.em,{children:"lista"})," ; ",(0,t.jsx)(s.em,{children:"posicionElem"})," {; ",(0,t.jsx)(s.em,{children:"posicionArray"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe1metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operador"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lista"}),(0,t.jsx)(s.td,{children:"Integer, Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"N\xfamero de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posicionElem"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Posici\xf3n del elemento en la(s) lista(s) desplegada(s) /contra\xedda(s)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"posicionArray"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Array de posiciones en la(s) lista(s) desplegada(s) /contra\xedda(s)"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(s.p,{children:["El comando SELECT LIST ITEMS BY POSITION selecciona el(los) elemento(s) cuya posici\xf3n se pasa en ",(0,t.jsx)(s.em,{children:"posicionElem"})," y opcionalmente en ",(0,t.jsx)(s.em,{children:"posicionArray"})," en la lista cuyo n\xfamero de referencia o nombre de objeto se pasa en ",(0,t.jsx)(s.em,{children:"lista"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si pasa el primer par\xe1metro opcional *, indica que el par\xe1metro ",(0,t.jsx)(s.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(s.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (RefLista). Si utiliza s\xf3lo una representaci\xf3n de lista, puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si usted utiliza varias representaciones de una misma lista, la lista basada en el nombre del objeto es necesaria ya que cada representaci\xf3n puede tener su propia configuraci\xf3n desplegada/contra\xedda."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota:"})," si utiliza el car\xe1cter @ en el nombre de la lista y el formulario contiene varias listas que responden a este nombre, el comando SELECT LIST ITEMS BY POSITION s\xf3lo aplicar\xe1 al primer objeto cuyo nombre corresponde."]}),"\n",(0,t.jsxs)(s.p,{children:["La posici\xf3n de los elementos siempre se expresa utilizando el estado desplegado/contra\xeddo de la lista y sus sublistas. Usted pasa un valor de posici\xf3n entre 1 y el valor devuelto por ",(0,t.jsx)(s.a,{href:"/docs/es/20-R8/commands/count-list-items",title:"Count list items",children:"Count list items"}),". Si pasa un valor fuera de este rango, no se selecciona ning\xfan elemento."]}),"\n",(0,t.jsxs)(s.p,{children:["Si no pasa el par\xe1metro ",(0,t.jsx)(s.em,{children:"posicionArray"}),", el par\xe1metro ",(0,t.jsx)(s.em,{children:"posicionElem"})," representa la posici\xf3n del elemento a seleccionar."]}),"\n",(0,t.jsxs)(s.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(s.em,{children:"posicionArray"})," le permite seleccionar varios elementos simult\xe1neamente de la ",(0,t.jsx)(s.em,{children:"lista"}),". En ",(0,t.jsx)(s.em,{children:"posicionArray"}),", debe pasar un array donde cada l\xednea indique la posici\xf3n de un elemento a seleccionar."]}),"\n",(0,t.jsxs)(s.p,{children:["Cuando pasa este par\xe1metro, el elemento designado por el par\xe1metro ",(0,t.jsx)(s.em,{children:"posicionElem"})," designa el nuevo elemento actual de la lista en la selecci\xf3n resultante, el cual puede pertenecer o no al conjunto de elementos definido por el array. El elemento actual es, m\xe1s particularmente, el que pasa a modo edici\xf3n si se utiliza el comando ",(0,t.jsx)(s.a,{href:"/docs/es/20-R8/commands/edit-item",title:"EDIT ITEM",children:"EDIT ITEM"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota:"})," para que varios elementos puedan ser seleccionados simult\xe1neamente en una lista jer\xe1rquica (manualmente o por programaci\xf3n), la propiedad ",(0,t.jsx)(s.em,{children:"multi-seleccionable"})," debe haber sido activada para la lista. Esta propiedad se define utilizando el comando ",(0,t.jsx)(s.a,{href:"/docs/es/20-R8/commands/set-list-properties",title:"SET LIST PROPERTIES",children:"SET LIST PROPERTIES"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(s.p,{children:["Dada la lista jer\xe1rquica llamada ",(0,t.jsx)(s.em,{children:"hList,"})," mostrada en el entorno Aplicaci\xf3n:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(971980).Z+"",width:"179",height:"177"})}),"\n",(0,t.jsx)(s.p,{children:"Despu\xe9s de la ejecuci\xf3n de este c\xf3digo:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SELECT LIST ITEMS BY POSITION(hList;Count list items(hList))\n"})}),"\n",(0,t.jsx)(s.p,{children:"El \xfaltimo elemento visible de la lista es seleccionado:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(239989).Z+"",width:"178",height:"175"})}),"\n",(0,t.jsx)(s.p,{children:"Despu\xe9s de la ejecuci\xf3n de las siguientes l\xedneas de c\xf3digo:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET LIST PROPERTIES(hList;0;0;18;0;1)\n\xa0\xa0//Es imperativo pasar 1 como \xfaltimo par\xe1metro para permitir las selecciones m\xfaltiples\n\xa0ARRAY LONGINT($arr;3)\n\xa0$arr{1}:=2\n\xa0$arr{2}:=3\n\xa0$arr{3}:=5\n\xa0SELECT LIST ITEMS BY POSITION(hList;3;$arr)\n\xa0\xa0//El tercer elemento se designa como elemento actual\n"})}),"\n",(0,t.jsx)(s.p,{children:"Se seleccionan los elementos segundo, tercero y quinto de la lista jer\xe1rquica"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:n(569060).Z+"",width:"179",height:"177"})}),"\n",(0,t.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/es/20-R8/commands/edit-item",children:"EDIT ITEM"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/20-R8/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/es/20-R8/commands/selected-list-items",children:"Selected list items"})]}),"\n",(0,t.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero de comando"}),(0,t.jsx)(s.td,{children:"381"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Hilo seguro"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},971980:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},239989:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},569060:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return o}});var i=n(667294);let t={},a=i.createContext(t);function o(e){let s=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);