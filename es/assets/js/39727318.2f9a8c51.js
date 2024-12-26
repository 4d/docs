"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77022"],{317320:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>t,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/ob-set-array","title":"OB SET ARRAY","description":"OB SET ARRAY ( objeto ; propiedad ; array )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-set-array.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set-array","permalink":"/docs/es/commands/ob-set-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set-array","title":"OB SET ARRAY","slug":"/commands/ob-set-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET","permalink":"/docs/es/commands/ob-set"},"next":{"title":"OB SET NULL","permalink":"/docs/es/commands/ob-set-null"}}'),s=r("785893"),i=r("250065");let d={id:"ob-set-array",title:"OB SET ARRAY",slug:"/commands/ob-set-array",displayed_sidebar:"docs"},l=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB SET ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"propiedad"})," ; ",(0,s.jsx)(n.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Object, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto estructurado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propiedad"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre de la propiedad a definir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array, Variable"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array a almacenar en propiedad"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OB SET ARRAY"})," define el ",(0,s.jsx)(n.em,{children:"array"})," a asociarse a la ",(0,s.jsx)(n.em,{children:"propiedad"})," en el objeto definido por el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"}),".debe haber sido definido con el comando ",(0,s.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," o designar un campo objeto 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"propiedad"}),", pase la etiqueta de la propiedad a crear o modificar. Si la propiedad ya existe en ",(0,s.jsx)(n.em,{children:"objeto"}),", su valor se actualiza. Si no existe, se crea.",(0,s.jsx)(n.br,{}),"\nTenga en cuenta que el par\xe1metro ",(0,s.jsx)(n.em,{children:"propiedad"})," tiene en cuenta las may\xfasculas y min\xfasculas."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"array"}),", pase el array que se debe pasar como valor de la propiedad. Se soportan varios tipos de array: real, entero largo, texto, booleano, objeto, puntero o imagen. Los arrays imagen se soportan a partir de 4D v16 R4."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Las variables simples son soportadas en el par\xe1metro ",(0,s.jsx)(n.em,{children:"array"}),", en cuyo caso se crea un array de valor \xfanico y se asocia a la ",(0,s.jsx)(n.em,{children:"propiedad"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"No es posible utilizar arrays de dos dimensiones."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Utilizando un array texto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children : Object\n\xa0ARRAY TEXT($arrChildren;3)\n\xa0$arrChildren{1}:="Richard"\n\xa0$arrChildren{2}:="Susan"\n\xa0$arrChildren{3}:="James"\n\xa0\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\xa0// Valor de $Children = {"Children":["Richard","Susan","James"]}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Adici\xf3n de un elemento de un array:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrText;2)\n\xa0$arrText{1}:="Smith"\n\xa0$arrText{2}:="White"\n\xa0var $Employees : Object\n\xa0OB SET ARRAY($Employees;"Employees";$arrText)\n\xa0APPEND TO ARRAY($arrText;"Brown")\xa0// A\xf1adir el array 4D\n\xa0\xa0// $Employees = {"Employees":["Smith","White"]}\n\xa0\n\xa0OB SET ARRAY($Employees;"Employees";$arrText)\n\xa0\xa0// $Employees = {"Employees":["Smith","White","Brown"]}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Utilizando una array texto con selecci\xf3n de un elemento:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Employees = {"Employees":["Smith","White","Brown"]}\n\xa0OB SET ARRAY($Employees ;"Manager";$arrText{1})\n\xa0\xa0// $Employees = {"Employees":["Smith","White","Brown"],"Manager":["Smith"]}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Uso de un array objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrChildren;0)\n\xa0OB SET($ref_richard;"nom";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4)\n\xa0APPEND TO ARRAY($arrChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James";"age";3)\n\xa0\n\xa0APPEND TO ARRAY($arrChildren;$ref_james)\n\xa0\n\xa0\xa0// $arrChildren {1} = {"name":"Richard","age":7}\n\xa0\xa0// $arrChildren {2} = {"name":"Susan","age":4}\n\xa0\xa0// $arrChildren {3} = {"name":"James","age":3}\n\xa0\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\n\xa0\xa0// $Children = {"Children":[{"name":"Richard","age":7},{"name":"Susan",\n\xa0\xa0// "age":4},{"name":"James","age":3}]}\n'})}),"\n",(0,s.jsx)(n.p,{children:"As\xed es como el objeto aparece en el depurador:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(594819).Z+"",width:"690",height:"141"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrGirls;3)\n\xa0$arrGirls{1}:="Emma"\n\xa0$arrGirls{2}:="Susan"\n\xa0$arrGirls{3}:="Jamie"\n\xa0OB SET ARRAY([People]Children;"Girls";$arrGirls)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(601250).Z+"",width:"310",height:"118"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,s.jsx)(n.p,{children:"Utilizando un array imagen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY PICTURE($arrPhotos;3)\n\xa0READ PICTURE FILE("pict1.jpg";$arrPhotos{1})\n\xa0READ PICTURE FILE("pict2.jpg";$arrPhotos{2})\n\xa0READ PICTURE FILE("pict3.jpg";$arrPhotos{3})\n\xa0\n\xa0OB SET ARRAY([Cities]Places;"Photoset";$arrPhotos)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Conversiones de tipo entre las colecciones y los arrays 4D"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-get-array",children:"OB GET ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/ob-set",children:"OB SET"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1227"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},594819:function(e,n,r){r.d(n,{Z:function(){return a}});let a=r.p+"assets/images/pict1211436.es-4f45d01908bc09b19592b162b4e9a1e4.png"},601250:function(e,n,r){r.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var a=r(667294);let s={},i=a.createContext(s);function d(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);