"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92204"],{125797:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/ob-get-type","title":"OB Get type","description":"OB Get type ( objeto ; propriedade ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-get-type.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-type","permalink":"/docs/pt/commands/ob-get-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-type.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-get-type","title":"OB Get type","slug":"/commands/ob-get-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB GET PROPERTY NAMES","permalink":"/docs/pt/commands/ob-get-property-names"},"next":{"title":"OB Instance of","permalink":"/docs/pt/commands/ob-instance-of"}}'),r=t("785893"),s=t("250065");let o={id:"ob-get-type",title:"OB Get type",slug:"/commands/ob-get-type",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB Get type"})," ( ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"propriedade"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Objeto estruturado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propriedade"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome da propriedade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tipo de valor da propriedade"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"OB Get type"})," devolve o tipo do valor associado a ",(0,r.jsx)(n.em,{children:"propriedade"})," do ",(0,r.jsx)(n.em,{children:"objeto"}),".deve ter sido definido utilizando o comando ",(0,r.jsx)(n.em,{children:"C_OBJECT"})," ou designar um campo objeto 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"propriedade"}),", passe a etiqueta da propriedade cujo tipo quer conhecer.",(0,r.jsx)(n.br,{}),"\nTenha em conta que o par\xe2metro ",(0,r.jsx)(n.em,{children:"propriedade"})," leva em conta as mai\xfasculas e min\xfasculas."]}),"\n",(0,r.jsxs)(n.p,{children:['O comando devolve um inteiro longo que indica o tipo de valor. Pode comparar este valor com as seguintes constantes, que se encontram no tema "',(0,r.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is null"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"255"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is undefined"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Nota: para os atributos imagem, o comando devolve Is object."}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Queremos obter o tipo de valores padr\xe3o:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"nome";"smith";"idade";42)\n\xa0$type:=OB Get type($ref;"nome")\xa0//$type devolve 2\n\xa0$type2:=OB Get type($ref;"idade")\xa0//$type2 devolve 1\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/ob-get-property-names",children:"OB GET PROPERTY NAMES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/value-type",children:"Value type"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1230"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var d=t(667294);let r={},s=d.createContext(r);function o(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);