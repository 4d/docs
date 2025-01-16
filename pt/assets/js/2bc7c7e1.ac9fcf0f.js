"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23751"],{566463:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/ob-set-null","title":"OB SET NULL","description":"OB SET NULL ( objeto ; propriedade )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-set-null.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set-null","permalink":"/docs/pt/20-R7/commands/ob-set-null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set-null.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set-null","title":"OB SET NULL","slug":"/commands/ob-set-null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB SET ARRAY","permalink":"/docs/pt/20-R7/commands/ob-set-array"},"next":{"title":"OB Values","permalink":"/docs/pt/20-R7/commands/ob-values"}}'),s=r("785893"),o=r("250065");let t={id:"ob-set-null",title:"OB SET NULL",slug:"/commands/ob-set-null",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OB SET NULL"})," ( ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"propriedade"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Object, Campo Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto estruturado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"propriedade"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome da propriedade onde o valor nulo ser\xe1 aplicado"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"OB SET NULL"})," armazena o valor ",(0,s.jsx)(n.strong,{children:"null"})," no objeto de linguagem designado pelo par\xe2metro ",(0,s.jsx)(n.em,{children:"objeto"})," .deve ter sido definido utilizando o comando ",(0,s.jsx)(n.em,{children:"C_OBJECT"})," ou designar um campo objeto 4D.."]}),"\n",(0,s.jsxs)(n.p,{children:["No par\xe2metro ",(0,s.jsx)(n.em,{children:"propriedade"}),", passe a etiqueta da propriedade na que deseja armazenar o valor ",(0,s.jsx)(n.strong,{children:"null"}),". Se a propriedade j\xe1 existe em ",(0,s.jsx)(n.em,{children:"objeto"}),", seu valor se atualiza. Se n\xe3o existe, \xe9 criada.",(0,s.jsx)(n.br,{}),"\nTenha em conta que o par\xe2metro ",(0,s.jsx)(n.em,{children:"propriedade"})," tem em conta as mai\xfasculas e min\xfasculas."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:'Queremos colocar o valor nulo na propriedade "idade" para Lea:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0OB SET($ref;"nome";"Lea";"idade";4)\n\xa0\xa0// $ref = {"nome":"Lea","idade":4}\n\xa0...\n\xa0OB SET NULL($ref ;"idade")\n\xa0\xa0// $ref = {"nome":"Lea","idade":null}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/null",children:"Null"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/ob-get-property-names",children:"OB GET PROPERTY NAMES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/ob-set",children:"OB SET"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1233"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var d=r(667294);let s={},o=d.createContext(s);function t(e){let n=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);