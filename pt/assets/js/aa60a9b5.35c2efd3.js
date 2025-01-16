"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25637"],{885077:function(n,e,s){s.r(e),s.d(e,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/active-transaction","title":"Active transaction","description":"Active transaction : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/active-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/active-transaction","permalink":"/docs/pt/20-R7/commands/active-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factive-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"active-transaction","title":"Active transaction","slug":"/commands/active-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Transactions","permalink":"/docs/pt/20-R7/category/transactions"},"next":{"title":"CANCEL TRANSACTION","permalink":"/docs/pt/20-R7/commands/cancel-transaction"}}'),a=s("785893"),r=s("250065");let o={id:"active-transaction",title:"Active transaction",slug:"/commands/active-transaction",displayed_sidebar:"docs"},c=void 0,i={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Active transaction"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Par\xe2metro"}),(0,a.jsx)(e.th,{children:"Tipo"}),(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Resultado"}),(0,a.jsx)(e.td,{children:"Boolean"}),(0,a.jsx)(e.td,{children:"\u2190"}),(0,a.jsx)(e.td,{children:"Retorna False se a transa\xe7\xe3o atual for suspensa"})]})})]}),"\n",(0,a.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(e.p,{children:["O comando ",(0,a.jsx)(e.strong,{children:"Active transaction"})," devolve ",(0,a.jsx)(e.strong,{children:"True"})," se o processo atual estiver em transa\xe7\xe3o e se esta transa\xe7\xe3o n\xe3o for suspensa. Devolve ",(0,a.jsx)(e.strong,{children:"False"})," se n\xe3o houver uma transa\xe7\xe3o em curso, ou se for suspensa a transa\xe7\xe3o atual. Uma transa\xe7\xe3o pode ser suspensa utilizando o comando ",(0,a.jsx)(e.em,{children:"SUSPEND TRANSACTION"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Dado que o comando tamb\xe9m devolver\xe1 ",(0,a.jsx)(e.strong,{children:"False"})," se o processo atual n\xe3o estiver em transa\xe7\xe3o, pode ser que necessite utilizar o comando ",(0,a.jsx)(e.a,{href:"/docs/pt/20-R7/commands/in-transaction",children:"In transaction"})," para saber se o processo est\xe1 em transa\xe7\xe3o."]}),"\n",(0,a.jsx)(e.p,{children:"Para saber mais, consulte o par\xe1grafo ."}),"\n",(0,a.jsx)(e.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(e.p,{children:"Se quiser conhecer o estado da transa\xe7\xe3o atual:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-4d",children:'\xa0If(In transaction)\n\xa0\xa0\xa0\xa0If(Not(Active transaction))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("A transa\xe7\xe3o atual est\xe1 suspensa")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("A transa\xe7\xe3o atual est\xe1 ativa")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("N\xe3o estamos em transa\xe7\xe3o")\n\xa0End if\n'})}),"\n",(0,a.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/pt/20-R7/commands/in-transaction",children:"In transaction"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/pt/20-R7/commands/resume-transaction",children:"RESUME TRANSACTION"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/pt/20-R7/commands/suspend-transaction",children:"SUSPEND TRANSACTION"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.em,{children:"Suspender as transa\xe7\xf5es"})]}),"\n",(0,a.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"N\xfamero do comando"}),(0,a.jsx)(e.td,{children:"1387"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Thread-seguro"}),(0,a.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return o}});var t=s(667294);let a={},r=t.createContext(a);function o(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);