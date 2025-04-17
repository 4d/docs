"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91591"],{281797:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>o,assets:()=>i,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/collection-to-array","title":"COLLECTION TO ARRAY","description":"COLLECTION TO ARRAY ( coleccion ; array {; nombreProp}{; array2 ; nombreProp2 ; ... ; arrayN ; nombrePropN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/collection-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/collection-to-array","permalink":"/docs/es/commands/collection-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcollection-to-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"collection-to-array","title":"COLLECTION TO ARRAY","slug":"/commands/collection-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO COLLECTION","permalink":"/docs/es/commands/array-to-collection"},"next":{"title":"Nueva colecci\xf3n","permalink":"/docs/es/commands/new-collection"}}'),c=r("785893"),s=r("250065");let l={id:"collection-to-array",title:"COLLECTION TO ARRAY",slug:"/commands/collection-to-array",displayed_sidebar:"docs"},a=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"COLLECTION TO ARRAY"})," ( ",(0,c.jsx)(n.em,{children:"coleccion"})," ; ",(0,c.jsx)(n.em,{children:"array"})," {; ",(0,c.jsx)(n.em,{children:"nombreProp"}),"}{; ",(0,c.jsx)(n.em,{children:"array2"})," ; ",(0,c.jsx)(n.em,{children:"nombreProp2"})," ; ... ; ",(0,c.jsx)(n.em,{children:"arrayN"})," ; ",(0,c.jsx)(n.em,{children:"nombrePropN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"coleccion"}),(0,c.jsx)(n.td,{children:"Collection"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Colecci\xf3n a copiar en array(s)"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"array"}),(0,c.jsx)(n.td,{children:"Array"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Array para recibir los elementos de la colecci\xf3n; si se pas\xf3 nombreProp, array para recibir los valores de nombreProp en la colecci\xf3n"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"nombreProp"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:'Nombre de la propiedad del objeto cuyos valores copiar en array ("" para todos los elementos)'})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"COLLECTION TO ARRAY"})," llena una o m\xe1s ",(0,c.jsx)(n.em,{children:"array"}),"(s) con elementos o valores de ",(0,c.jsx)(n.em,{children:"nombreProp"})," de la ",(0,c.jsx)(n.em,{children:"coleccion"})," en ",(0,c.jsx)(n.em,{children:"array"}),"(s)."]}),"\n",(0,c.jsxs)(n.p,{children:["Este comando puede funcionar con una ",(0,c.jsx)(n.em,{children:"coleccion"})," que contiene valores o una ",(0,c.jsx)(n.em,{children:"coleccion"})," que contiene objetos, en cuyo caso los par\xe1metros ",(0,c.jsx)(n.em,{children:"nombreProp"})," son obligatorios."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Si omite el par\xe1metro ",(0,c.jsx)(n.em,{children:"nombreProp"}),", el comando copia todos los elementos de ",(0,c.jsx)(n.em,{children:"coleccion"})," a ",(0,c.jsx)(n.em,{children:"array"}),". Despu\xe9s de que se ejecuta el comando, el tama\xf1o de ",(0,c.jsx)(n.em,{children:"array"})," es id\xe9ntico a la longitud de la ",(0,c.jsx)(n.em,{children:"coleccion"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["Si pasa uno o m\xe1s par\xe1metros ",(0,c.jsx)(n.em,{children:"nombreProp"}),"(s), ",(0,c.jsx)(n.em,{children:"coleccion"})," debe ser una colecci\xf3n de objetos (se ignoran otros elementos). En este caso, cada par\xe1metro ",(0,c.jsx)(n.em,{children:"nombreProp"})," indica el nombre de una propiedad dentro de cada objeto de la colecci\xf3n cuyos valores desea copiar en el ",(0,c.jsx)(n.em,{children:"array"})," correspondiente. Puede pasar todo par ",(0,c.jsx)(n.em,{children:"nombreProp"})," / ",(0,c.jsx)(n.em,{children:"array"}),", combinando tipos de array. Despu\xe9s de que se ejecuta el comando, cada tama\xf1o de ",(0,c.jsx)(n.em,{children:"array"})," es id\xe9ntico a la longitud de ",(0,c.jsx)(n.em,{children:"coleccion"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["En todos los casos, 4D convierte los elementos o valores de la colecci\xf3n de acuerdo al tipo de ",(0,c.jsx)(n.em,{children:"array"})," (si es necesario). Las reglas de conversi\xf3n se detallan en la p\xe1gina ",(0,c.jsx)(n.em,{children:"Conversiones de tipo entre las colecciones y los arrays 4D"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,c.jsx)(n.p,{children:"Desea copiar una colecci\xf3n de cadenas en un array de texto:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var $fruits : Collection\n\xa0$fruits:=New collection("Orange";"Banana";"Apple";"Grape")\n\xa0ARRAY TEXT($artFruits;0)\n\xa0COLLECTION TO ARRAY($fruits;$artFruits)\n\xa0\xa0//$artFruits{1}="Orange"\n\xa0\xa0//$artFruits{2}="Banana"\n\xa0\xa0//...\n'})}),"\n",(0,c.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,c.jsx)(n.p,{children:"Desea copiar diferentes valores de propiedad de una colecci\xf3n de objetos en diferentes arrays:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0ARRAY TEXT($city;0)\n\xa0ARRAY LONGINT($zipCode;0)\n\xa0$col.push(New object("name";"Cleveland";"zc";35049))\n\xa0$col.push(New object("name";"Blountsville";"zc";35031))\n\xa0$col.push(New object("name";"Adger";"zc";35006))\n\xa0$col.push(New object("name";"Clanton";"zc";35046))\n\xa0$col.push(New object("name";"Shelby";"zc";35143))\n\xa0\n\xa0COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")\n\xa0\xa0//$city{1}="Cleveland", $zipCode{1}=35049\n\xa0\xa0//$city{2}="Blountsville", $zipCode{2}=35031\n\xa0\xa0//...\n'})}),"\n",(0,c.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/array-to-collection",children:"ARRAY TO COLLECTION "}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.em,{children:"Conversiones de tipo entre las colecciones y los arrays 4D"})]}),"\n",(0,c.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"1562"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var o=r(667294);let c={},s=o.createContext(c);function l(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);