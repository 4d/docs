"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58069"],{234143:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/ob-get-property-names","title":"OB GET PROPERTY NAMES","description":"OB GET PROPERTY NAMES ( objeto ; nomProp {; arrTipos} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-get-property-names.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-property-names","permalink":"/docs/es/20-R7/commands/ob-get-property-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-property-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-get-property-names","title":"OB GET PROPERTY NAMES","slug":"/commands/ob-get-property-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB GET ARRAY","permalink":"/docs/es/20-R7/commands/ob-get-array"},"next":{"title":"OB Get type","permalink":"/docs/es/20-R7/commands/ob-get-type"}}'),a=r("785893"),d=r("250065");let t={id:"ob-get-property-names",title:"OB GET PROPERTY NAMES",slug:"/commands/ob-get-property-names",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"OB GET PROPERTY NAMES"})," ( ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"nomProp"})," {; ",(0,a.jsx)(n.em,{children:"arrTipos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Objeto estructurado"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomProp"}),(0,a.jsx)(n.td,{children:"Text array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nombres de las propiedades"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"arrTipos"}),(0,a.jsx)(n.td,{children:"Integer array"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Tipos de propiedades"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"OB GET PROPERTY NAMES"})," devuelve, en ",(0,a.jsx)(n.em,{children:"arrProp"}),", los nombres de las propiedades contenidas en el objeto de lenguaje designados por el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," .debe haber sido definido utilizando el comando ",(0,a.jsx)(n.em,{children:"C_OBJECT"})," o designar un campo objeto 4D."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase un array texto en el par\xe1metro ",(0,a.jsx)(n.em,{children:"arrProp"}),". Si el array no existe, el comando lo crea y lo redimensiona de forma autom\xe1tica."]}),"\n",(0,a.jsxs)(n.p,{children:["Opcionalmente, tambi\xe9n puede pasar un array entero largo en ",(0,a.jsx)(n.em,{children:"arrTipos"}),". Para cada elemento de ",(0,a.jsx)(n.em,{children:"arrProp"}),", el comando devuelve, en ",(0,a.jsx)(n.em,{children:"arrTipos"}),', el tipo de valor almacenado en la propiedad. Puede comparar los valores recibidos con las siguientes constantes, que se encuentran en el tema "',(0,a.jsx)(n.em,{children:"Tipos de campos y variables"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is Boolean"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"6"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is collection"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"42"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is null"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"255"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is object"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"38"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is real"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is text"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Object array"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"39"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," para los atributos array, el comando devuelve Is collection."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Desea probar que un objeto no est\xe1 vac\xedo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrNames;0)\n\xa0ARRAY LONGINT(arrTypes;0)\n\xa0var $ref_richard : Object\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0OB GET PROPERTY NAMES($ref_richard;arrNames;arrTypes)\n\xa0\xa0// arrNames{1}="name", arrNames{2}="age"\n\xa0\xa0// arrTypes{1}=2, arrTypes{2}=1\n\xa0If(Size of array(arrNames)#0)\n\xa0\xa0// ...\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Utilizando un elemento de array de objetos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrayChildren;0)\n\xa0\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4;"girl";True)\xa0//atributo adicional\n\xa0APPEND TO ARRAY($arrayChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James")\n\xa0OB SET NULL($ref_james;"age")\xa0//null attribute\n\xa0APPEND TO ARRAY($arrayChildren;$ref_james)\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{1};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{1} = {"name":"Richard","age":7}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=1\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{2};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{3} = {"name":"Susan","age":4,"girl":true}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrNames{3}="girl"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=1\n\xa0\xa0// $arrTypes{3}=6\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{3};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{3} = {"name":"James","age":null}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=255\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/ob-get-type",children:"OB Get type"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/ob-set-null",children:"OB SET NULL"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1232"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let a={},d=s.createContext(a);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);