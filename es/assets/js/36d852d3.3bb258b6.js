"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92510"],{756108:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>t,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/array-to-collection","title":"ARRAY TO COLLECTION","description":"ARRAY TO COLLECTION  ( coleccion ; array {; nombreProp}{; array2 ; nombreProp2 ; ... ; arrayN ; nombrePropN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/array-to-collection.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-collection","permalink":"/docs/es/commands/array-to-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-collection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-to-collection","title":"ARRAY TO COLLECTION","slug":"/commands/array-to-collection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Collections","permalink":"/docs/es/category/collections"},"next":{"title":"COLLECTION TO ARRAY","permalink":"/docs/es/commands/collection-to-array"}}'),l=o("785893"),c=o("250065");let a={id:"array-to-collection",title:"ARRAY TO COLLECTION",slug:"/commands/array-to-collection",displayed_sidebar:"docs"},s=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"ARRAY TO COLLECTION"}),"  ( ",(0,l.jsx)(n.em,{children:"coleccion"})," ; ",(0,l.jsx)(n.em,{children:"array"})," {; ",(0,l.jsx)(n.em,{children:"nombreProp"}),"}{; ",(0,l.jsx)(n.em,{children:"array2"})," ; ",(0,l.jsx)(n.em,{children:"nombreProp2"})," ; ... ; ",(0,l.jsx)(n.em,{children:"arrayN"})," ; ",(0,l.jsx)(n.em,{children:"nombrePropN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"coleccion"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Colecci\xf3n a recibir los datos del array"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"array"}),(0,l.jsx)(n.td,{children:"Array"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Array a copiar a la colecci\xf3n; si se pas\xf3 nombreProp, array a copiar a los valores de nombreProp en la colecci\xf3n."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nombreProp"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre de la propiedad del objeto cuyo valor llenar con elementos del array"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"ARRAY TO COLLECTION"}),"  copia uno o m\xe1s ",(0,l.jsx)(n.em,{children:"array"}),"(s) en los elementos o los valores de ",(0,l.jsx)(n.em,{children:"nombreProp"})," de la ",(0,l.jsx)(n.em,{children:"coleccion"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Este comando puede funcionar con una ",(0,l.jsx)(n.em,{children:"coleccion"})," que contiene valores o una ",(0,l.jsx)(n.em,{children:"coleccion"}),"  que contiene objetos, en cuyo caso los par\xe1metros ",(0,l.jsx)(n.em,{children:"nombreProp"})," son obligatorios."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si omite el par\xe1metro ",(0,l.jsx)(n.em,{children:"nombreProp"}),", tel comando copia todos los elementos del ",(0,l.jsx)(n.em,{children:"array"})," a la ",(0,l.jsx)(n.em,{children:"coleccion"}),". Si la ",(0,l.jsx)(n.em,{children:"coleccion"})," no estaba vac\xeda, los elementos existentes se reemplazan y se agregan nuevos elementos si el tama\xf1o del ",(0,l.jsx)(n.em,{children:"array"})," es mayor que la longitud de la ",(0,l.jsx)(n.em,{children:"coleccion"}),". Despu\xe9s de que se ejecuta el comando, la longitud de la ",(0,l.jsx)(n.em,{children:"coleccion"})," es id\xe9ntica al tama\xf1o del ",(0,l.jsx)(n.em,{children:"array"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Si pasa uno o m\xe1s par\xe1metros ",(0,l.jsx)(n.em,{children:"nombreProp"}),", el comando crea o reemplaza objetos como elementos de ",(0,l.jsx)(n.em,{children:"coleccion"}),". Cada objeto se completa con una propiedad cuyo nombre se ofrece en el par\xe1metro ",(0,l.jsx)(n.em,{children:"nombreProp"}),", y cuyo valor es el elemento de array correspondiente. Si la ",(0,l.jsx)(n.em,{children:"coleccion"})," no estaba vac\xeda, los elementos existentes se reemplazan y se agregan nuevos elementos si el tama\xf1o del ",(0,l.jsx)(n.em,{children:"array"})," es mayor que la colecci\xf3n. Despu\xe9s de que se ejecuta el comando, la longitud de la ",(0,l.jsx)(n.em,{children:"coleccion"})," es la misma que el tama\xf1o del array m\xe1s grande."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsx)(n.p,{children:"Desea copiar un array de texto en una colecci\xf3n:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $colFruits : Collection\n\xa0$colFruits:=New collection\n\xa0ARRAY TEXT($artFruits;4)\n\xa0$artFruits{1}:="Orange"\n\xa0$artFruits{2}:="Banana"\n\xa0$artFruits{3}:="Apple"\n\xa0$artFruits{4}:="Grape"\n\xa0ARRAY TO COLLECTION($colFruits;$artFruits)\n\xa0\xa0//$colFruits[0]="Orange"\n\xa0\xa0//$colFruits[1]="Banana"\n\xa0\xa0//...\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsx)(n.p,{children:"Desea copiar valores de campo en una colecci\xf3n de objetos por medio de arrays:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0ARRAY TEXT($artCity;0)\n\xa0ARRAY LONGINT($arLZipCode;0)\n\xa0SELECTION TO ARRAY([Customer]City;$artCity)\n\xa0SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)\n\xa0ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")\n\xa0\xa0//$col[0]={"cityName":"Cleveland","Zip":35049}\n\xa0\xa0//$col[1]={"cityName":"Blountsville","Zip":35031}\n\xa0\xa0//...\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsx)(n.p,{children:"Desea copiar una array texto en una colecci\xf3n compartida:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($at;1)\n\xa0\n\xa0APPEND TO ARRAY($at;"Apple")\n\xa0APPEND TO ARRAY($at;"Orange")\n\xa0APPEND TO ARRAY($at;"Grape")\n\xa0\n\xa0var $sharedCol : Collection\n\xa0$sharedCol:=New shared collection\n\xa0\n\xa0Use($sharedCol)\n\xa0\xa0\xa0\xa0ARRAY TO COLLECTION($sharedCol;$at)\n\xa0End use\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/collection-to-array",children:"COLLECTION TO ARRAY"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"Conversiones de tipo entre las colecciones y los arrays 4D"})]}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1563"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var r=o(667294);let l={},c=r.createContext(l);function a(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);