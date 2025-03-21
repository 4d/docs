"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23288"],{749525:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/ob-get-property-names","title":"OB GET PROPERTY NAMES","description":"OB GET PROPERTY NAMES ( objeto ; arrProp {; arrTipos} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-get-property-names.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-property-names","permalink":"/docs/pt/commands/ob-get-property-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-property-names.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-get-property-names","title":"OB GET PROPERTY NAMES","slug":"/commands/ob-get-property-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB GET ARRAY","permalink":"/docs/pt/commands/ob-get-array"},"next":{"title":"OB Get type","permalink":"/docs/pt/commands/ob-get-type"}}'),a=n("785893"),d=n("250065");let t={id:"ob-get-property-names",title:"OB GET PROPERTY NAMES",slug:"/commands/ob-get-property-names",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"OB GET PROPERTY NAMES"})," ( ",(0,a.jsx)(r.em,{children:"objeto"})," ; ",(0,a.jsx)(r.em,{children:"arrProp"})," {; ",(0,a.jsx)(r.em,{children:"arrTipos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"objeto"}),(0,a.jsx)(r.td,{children:"Object"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Objeto estruturado"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"arrProp"}),(0,a.jsx)(r.td,{children:"Text array"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Nomes das propriedades"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"arrTipos"}),(0,a.jsx)(r.td,{children:"Integer array"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Tipos de propriedades"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O comando ",(0,a.jsx)(r.strong,{children:"OB GET PROPERTY NAMES"})," devolve, em ",(0,a.jsx)(r.em,{children:"arrProp"}),", os nomes das propriedades contidas no objeto de linguagem designados pelo par\xe2metro ",(0,a.jsx)(r.em,{children:"objeto"})," .deve ter sido definido utilizando o comando ",(0,a.jsx)(r.em,{children:"C_OBJECT"})," ou designar um campo objeto 4D."]}),"\n",(0,a.jsxs)(r.p,{children:["Passe um array texto no par\xe2metro ",(0,a.jsx)(r.em,{children:"arrProp"}),". Se o array n\xe3o existe, o comando cria e o redimensiona de forma autom\xe1tica."]}),"\n",(0,a.jsxs)(r.p,{children:["Opcionalmente, tamb\xe9m pode passar um array inteiro longo em ",(0,a.jsx)(r.em,{children:"arrTipos"}),". Para cada elemento de ",(0,a.jsx)(r.em,{children:"arrProp"}),", o comando devolve, em ",(0,a.jsx)(r.em,{children:"arrTipos"}),', o tipo de valor armazenado na propriedade. Pode comparar os valores recebidos com as seguintes constantes, que se encontram no tema "',(0,a.jsx)(r.em,{children:"Tipos de campos e vari\xe1veis"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Constante"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{children:"Valor"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Is Boolean"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"6"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Is collection"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"42"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Is null"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"255"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Is object"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"38"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Is real"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"1"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Is text"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"2"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Object array"}),(0,a.jsx)(r.td,{children:"Inteiro longo"}),(0,a.jsx)(r.td,{children:"39"})]})]})]}),"\n",(0,a.jsx)(r.p,{children:"Nota: para os atributos array, o comando devolve Is collection."}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(r.p,{children:"Deseja provar que um objeto n\xe3o est\xe1 vazio:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrNames;0)\n\xa0ARRAY LONGINT(arrTypes;0)\n\xa0var $ref_richard : Object\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0OB GET PROPERTY NAMES($ref_richard;arrNames;arrTypes)\n\xa0\xa0// arrNames{1}="name", arrNames{2}="age"\n\xa0\xa0// arrTypes{1}=2, arrTypes{2}=1\n\xa0If(Size of array(arrNames)#0)\n\xa0\xa0// ...\n\xa0End if\n'})}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(r.p,{children:"Utilizando um elemento de array de objetos:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrayChildren;0)\n\xa0\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4;"girl";True)\xa0//atributo adicional\n\xa0APPEND TO ARRAY($arrayChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James")\n\xa0OB SET NULL($ref_james;"age")\xa0//atributo null\n\xa0APPEND TO ARRAY($arrayChildren;$ref_james)\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{1};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{1} = {"name":"Richard","age":7}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=1\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{2};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{3} = {"name":"Susan","age":4,"girl":true}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrNames{3}="girl"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=1\n\xa0\xa0// $arrTypes{3}=6\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{3};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{3} = {"name":"James","age":null}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=255\n'})}),"\n",(0,a.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/commands/ob-get-type",children:"OB Get type"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/commands/ob-set-null",children:"OB SET NULL"})]}),"\n",(0,a.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"1232"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return t}});var s=n(667294);let a={},d=s.createContext(a);function t(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);