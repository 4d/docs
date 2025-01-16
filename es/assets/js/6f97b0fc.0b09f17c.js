"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38149"],{918809:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/get-list-item-parameter-arrays","title":"GET LIST ITEM PARAMETER ARRAYS","description":"GET LIST ITEM PARAMETER ARRAYS ( { ;} lista ; refElemento ; arrSelectores {; arrValores*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-list-item-parameter-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-parameter-arrays","permalink":"/docs/es/commands/get-list-item-parameter-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter-arrays.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-item-parameter-arrays","title":"GET LIST ITEM PARAMETER ARRAYS","slug":"/commands/get-list-item-parameter-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PARAMETER","permalink":"/docs/es/commands/get-list-item-parameter"},"next":{"title":"GET LIST ITEM PROPERTIES","permalink":"/docs/es/commands/get-list-item-properties"}}'),s=n("785893"),t=n("250065");let i={id:"get-list-item-parameter-arrays",title:"GET LIST ITEM PARAMETER ARRAYS",slug:"/commands/get-list-item-parameter-arrays",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let r={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," ( {* ;} ",(0,s.jsx)(r.em,{children:"lista"})," ; ",(0,s.jsx)(r.em,{children:"refElemento"})," ; ",(0,s.jsx)(r.em,{children:"arrSelectores"})," {; ",(0,s.jsx)(r.em,{children:"arrValores"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"*"}),(0,s.jsx)(r.td,{children:"Operador"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Si se especifica, lista es un nombre de objeto (cadena)Si se omite, lista es un n\xfamero de referencia de lista"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"lista"}),(0,s.jsx)(r.td,{children:"Integer, Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de referencia de lista oNombre de objeto de tipo lista (si se pasa *)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"refElemento"}),(0,s.jsx)(r.td,{children:"Integer, *"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero de referencia del elemento o 0 para el \xfaltimo elemento a\xf1adido a la lista o * para el elemento actual de la lista"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"arrSelectores"}),(0,s.jsx)(r.td,{children:"Text array"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Array de los nombres de par\xe1metros"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"arrValores"}),(0,s.jsx)(r.td,{children:"Text array"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Array de los valores de los par\xe1metros"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["El comando ",(0,s.jsx)(r.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," permite recuperar en una sola llamada el conjunto de los par\xe1metros (as\xed como tambi\xe9n, opcionalmente, sus valores) asociados al elemento ",(0,s.jsx)(r.em,{children:"refElemento"})," de la lista jer\xe1rquica cuya referencia o nombre de objeto se pas\xf3 en el par\xe1metro ",(0,s.jsx)(r.em,{children:"lista"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Los par\xe1metros asociados a los elementos permiten almacenar informaci\xf3n adicional sobre cada elemento. Se definen con la ayuda del comando ",(0,s.jsx)(r.a,{href:"/docs/es/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Si pasa el primer par\xe1metro opcional ",(0,s.jsx)(r.em,{children:"*"}),", indica que el par\xe1metro ",(0,s.jsx)(r.em,{children:"lista"})," es un nombre de objeto (cadena) correspondiente a una representaci\xf3n de lista en el formulario. Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(r.em,{children:"lista"})," es una referencia de lista jer\xe1rquica (",(0,s.jsx)(r.em,{children:"RefList"}),"). Si utiliza una sola representaci\xf3n de lista o trabaja con los elementos estructurales (el segundo ",(0,s.jsx)(r.em,{children:"*"})," se omite), puede utilizar indiferentemente una u otra sintaxis. Sin embargo, si utiliza varias representaciones de una misma lista y trabaja con el elemento actual (se pasa el segundo *), debe utilizar la sintaxis basada en el nombre del objeto, ya que cada representaci\xf3n puede tener su propio elemento actual."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," devuelve los par\xe1metros definidos para el elemento ",(0,s.jsx)(r.em,{children:"refElemento"})," en el array texto ",(0,s.jsx)(r.em,{children:"arrSelectores"}),". Cuando se pasa el array texto ",(0,s.jsx)(r.em,{children:"arrValores"}),", el comando lo utiliza para devolver los valores asociados con estos par\xe1metros."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"arrValores"}),' debe ser un array de tipo texto. Si tiene valores asociados que no son textuales (tipo num\xe9rico o Booleano), convertidos en cadenas (True="1", False="0").']}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(r.p,{children:"Dada la siguiente lista jer\xe1rquica:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0<>HL:=New list\n\xa0$ID:=30\n\xa0APPEND TO LIST(<>HL;"Martin";$ID)\n\xa0\xa0//5 par\xe1metros\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Nombre";"Phil")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Fecha de nacimiento";"01/02/1978")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Hombre";True)\xa0//Booleano\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Edad";33)\xa0//n\xfamero\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Ciudad";"Dallas")\n'})}),"\n",(0,s.jsx)(r.p,{children:'Para mayor simplicidad la lista se asoci\xf3 a una lista objeto con el mismo nombre ("<>HL").'}),"\n",(0,s.jsx)(r.p,{children:'Cuando el elemento "Martin" se selecciona en la lista, puede recuperar sus par\xe1metros ejecutando el siguiente c\xf3digo:'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrParamNames;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames)\n\xa0\xa0// arrParamNames{1} contiene "Nombre"\n\xa0\xa0// arrParamNames{2} contiene "Fecha de nacimiento"\n\xa0\xa0// arrParamNames{3} contiene "Hombre"\n\xa0\xa0// arrParamNames{4} contiene "Edad"\n\xa0\xa0// arrParamNames{5} contiene "Ciudad"\n'})}),"\n",(0,s.jsx)(r.p,{children:"Si tambi\xe9n quiere obtener los valores de los par\xe1metros, escriba:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrParamNames;0)\n\xa0ARRAY TEXT(arrParamValues;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";arrParamNames;arrParamValues)\n\xa0\xa0// arrParamValues{1} contiene "Phil"\n\xa0\xa0// arrParamValues{2} contiene "01/02/1978"\n\xa0\xa0// arrParamValues{3} contiene "1"\n\xa0\xa0// arrParamValues{4} contiene "33"\n\xa0\xa0// arrParamValues{5} contiene "Dallas"\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/es/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})}),"\n",(0,s.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero de comando"}),(0,s.jsx)(r.td,{children:"1195"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Hilo seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return i}});var a=n(667294);let s={},t=a.createContext(s);function i(e){let r=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);