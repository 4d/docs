"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29365"],{455705:function(e,r,A){A.r(r),A.d(r,{default:()=>c,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>t,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/ob-set-array","title":"OB SET ARRAY","description":"OB SET ARRAY ( objeto ; propriedade ; array )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-set-array.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set-array","permalink":"/docs/pt/commands/ob-set-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set-array","title":"OB SET ARRAY","slug":"/commands/ob-set-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET","permalink":"/docs/pt/commands/ob-set"},"next":{"title":"OB SET NULL","permalink":"/docs/pt/commands/ob-set-null"}}'),a=A("785893"),s=A("250065");let d={id:"ob-set-array",title:"OB SET ARRAY",slug:"/commands/ob-set-array",displayed_sidebar:"docs"},i=void 0,o={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"OB SET ARRAY"})," ( ",(0,a.jsx)(r.em,{children:"objeto"})," ; ",(0,a.jsx)(r.em,{children:"propriedade"})," ; ",(0,a.jsx)(r.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"objeto"}),(0,a.jsx)(r.td,{children:"Object, Object"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Objeto estruturado"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"propriedade"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nome da propriedade a definir"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"array"}),(0,a.jsx)(r.td,{children:"Array, Variable"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array a armazenar em propriedade"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O comando ",(0,a.jsx)(r.strong,{children:"OB SET ARRAY"})," define o ",(0,a.jsx)(r.em,{children:"array"})," a ser associado a ",(0,a.jsx)(r.em,{children:"propriedade"})," no objeto definido pelo par\xe2metro ",(0,a.jsx)(r.em,{children:"objeto"}),".deve ter sido definido com o comando ",(0,a.jsx)(r.a,{href:"c-object.md",children:"C_OBJECT"})," ou designar um campo objeto 4D.."]}),"\n",(0,a.jsxs)(r.p,{children:["No par\xe2metro ",(0,a.jsx)(r.em,{children:"propriedade"}),", passe a etiqueta da propriedade a criar ou modificar. Se a propriedade j\xe1 existe em ",(0,a.jsx)(r.em,{children:"objeto"}),", seu valor se atualiza. Se n\xe3o existe, \xe9 criado.",(0,a.jsx)(r.br,{}),"\nTenha em conta que o par\xe2metro ",(0,a.jsx)(r.em,{children:"propriedade"})," leva em conta as mai\xfasculas e min\xfasculas."]}),"\n",(0,a.jsxs)(r.p,{children:["No par\xe2metro ",(0,a.jsx)(r.em,{children:"array"}),", passe o array que deve passar como valor da propriedade. Se admitem v\xe1rios tipos de array: real, inteiro longo, texto, booleano, objeto, ponteiro ou imagem."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota"}),":"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["vari\xe1veis simples s\xe3o compat\xedveis com o par\xe2metro ",(0,a.jsx)(r.em,{children:"array"}),", nesse caso um array de valor \xfanico \xe9 criado e associado com a ",(0,a.jsx)(r.em,{children:"propriedade"})]}),"\n",(0,a.jsx)(r.li,{children:"n\xe3o \xe9 poss\xedvel utilizar arrays de duas dimens\xf5es."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(r.p,{children:"Utilizando um array texto:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0var $Children : Object\n\xa0ARRAY TEXT($arrChildren;3)\n\xa0$arrChildren{1}:="Richard"\n\xa0$arrChildren{2}:="Susan"\n\xa0$arrChildren{3}:="James"\n\xa0\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\xa0// Valor de $Children = {"Children":["Richard","Susan","James"]}\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(r.p,{children:"Adi\xe7\xe3o de um elemento de um array:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrText;2)\n\xa0$arrText{1}:="Smith"\n\xa0$arrText{2}:="White"\n\xa0var $Employees : Object\n\xa0OB SET ARRAY($Employees;"Employees";$arrText)\n\xa0APPEND TO ARRAY($arrText;"Brown")\xa0// Add to the 4D array\n\xa0\xa0// $Employees = {"Employees":["Smith","White"]}\n\xa0\n\xa0OB SET ARRAY($Employees;"Employees";$arrText)\n\xa0\xa0// $Employees = {"Employees":["Smith","White","Brown"]}\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(r.p,{children:"Utilizando um array texto com sele\xe7\xe3o de um elemento:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// $Employees = {"Employees":["Smith","White","Brown"]}\n\xa0OB SET ARRAY($Employees ;"Manager";$arrText{1})\n\xa0\xa0// $Employees = {"Employees":["Smith","White","Brown"],"Manager":["Smith"]}\n'})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(r.p,{children:"Uso de um array objeto:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrChildren;0)\n\xa0OB SET($ref_richard;"nom";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4)\n\xa0APPEND TO ARRAY($arrChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James";"age";3)\n\xa0\n\xa0APPEND TO ARRAY($arrChildren;$ref_james)\n\xa0\n\xa0\xa0// $arrChildren {1} = {"name":"Richard","age":7}\n\xa0\xa0// $arrChildren {2} = {"name":"Susan","age":4}\n\xa0\xa0// $arrChildren {3} = {"name":"James","age":3}\n\xa0\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\n\xa0\xa0// $Children = {"Children":[{"name":"Richard","age":7},{"name":"Susan",\n\xa0\xa0// "age":4},{"name":"James","age":3}]}\n'})}),"\n",(0,a.jsx)(r.p,{children:"Assim \xe9 como o objeto aparece no depurador:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:A(876456).Z+"",width:"513",height:"215"})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrGirls;3)\n\xa0$arrGirls{1}:="Emma"\n\xa0$arrGirls{2}:="Susan"\n\xa0$arrGirls{3}:="Jamie"\n\xa0OB SET ARRAY([People]Children;"Girls";$arrGirls)\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:A(702929).Z+"",width:"310",height:"118"})}),"\n",(0,a.jsx)(r.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,a.jsx)(r.p,{children:"Usar um array de imagem:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY PICTURE($arrPhotos;3)\n\xa0READ PICTURE FILE("pict1.jpg";$arrPhotos{1})\n\xa0READ PICTURE FILE("pict2.jpg";$arrPhotos{2})\n\xa0READ PICTURE FILE("pict3.jpg";$arrPhotos{3})\n\xa0\n\xa0OB SET ARRAY([Cities]Places;"Photoset";$arrPhotos)\n'})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.em,{children:"Convers\xf5es de Tipo entre cole\xe7\xf5es e arrays 4D"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/ob-get-array",children:"OB GET ARRAY"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/ob-set",children:"OB SET"})]}),"\n",(0,a.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"1227"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},876456:function(e,r,A){A.d(r,{Z:function(){return n}});let n="data:image/png;base64,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"},702929:function(e,r,A){A.d(r,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,r,A){A.d(r,{Z:function(){return i},a:function(){return d}});var n=A(667294);let a={},s=n.createContext(a);function d(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);