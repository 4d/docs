"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74646"],{735321:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/validate-transaction","title":"VALIDATE TRANSACTION","description":"VALIDATE TRANSACTION","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/validate-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/validate-transaction","permalink":"/docs/pt/20-R7/commands/validate-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalidate-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"validate-transaction","title":"VALIDATE TRANSACTION","slug":"/commands/validate-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Transaction level","permalink":"/docs/pt/20-R7/commands/transaction-level"},"next":{"title":"Triggers","permalink":"/docs/pt/20-R7/category/triggers"}}'),t=a("785893"),r=a("250065");let o={id:"validate-transaction",title:"VALIDATE TRANSACTION",slug:"/commands/validate-transaction",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"VALIDATE TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["VALIDATE TRANSACTION aceita a transa\xe7\xe3o que foi iniciada com ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/start-transaction",children:"START TRANSACTION"})," do n\xedvel correspondente do processo atual. O comando salva as mudan\xe7as aos dados do banco que ocorreram durante a transa\xe7\xe3o."]}),"\n",(0,t.jsx)(n.p,{children:"Iniciando com a vers\xe3o 11 de 4D, voc\xea pode aninhar diversas transa\xe7\xf5es (sub-transa\xe7\xf5es). Se a transa\xe7\xe3o principal for cancelada, todas as sub-transa\xe7\xf5es ser\xe3o canceladas, mesmo se eles tiverem sido individualmente confirmadas usando o comando."}),"\n",(0,t.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(n.p,{children:"A vari\xe1vel de sistema Ok \xe9 estabelecida como 1 se a transa\xe7\xe3o for validada corretamente. De outro modo, \xe9 estabelecida como 0."}),"\n",(0,t.jsxs)(n.p,{children:["Note que quando OK for estabelecido como 0, a transa\xe7\xe3o \xe9 automaticamente cancelada internamente (equivalente a ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),"). Assim, n\xe3o deve chamar explicitamente ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/cancel-transaction",children:"CANCEL TRANSACTION"})," se OK=0, particularmente no contexto de transa\xe7\xf5es aninhadas, porque o cancelamento ser\xe1 ent\xe3o aplicada as transa\xe7\xf5es de n\xedvel mais alto."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/in-transaction",children:"In transaction"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/start-transaction",children:"START TRANSACTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Usar Transa\xe7\xf5es"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"240"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return o}});var s=a(667294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);