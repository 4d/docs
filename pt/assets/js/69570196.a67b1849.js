"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86720"],{406531:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>d,default:()=>m,assets:()=>c,toc:()=>i,frontMatter:()=>o});var a=JSON.parse('{"id":"commands-legacy/start-transaction","title":"START TRANSACTION","description":"START TRANSACTION","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/start-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/start-transaction","permalink":"/docs/pt/commands/start-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-transaction.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"start-transaction","title":"START TRANSACTION","slug":"/commands/start-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME TRANSACTION","permalink":"/docs/pt/commands/resume-transaction"},"next":{"title":"SUSPEND TRANSACTION","permalink":"/docs/pt/commands/suspend-transaction"}}'),s=t("785893"),r=t("250065");let o={id:"start-transaction",title:"START TRANSACTION",slug:"/commands/start-transaction",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"START TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(e.table,{children:(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,s.jsx)(e.th,{})]})})}),"\n",(0,s.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(e.p,{children:"START TRANSACTION inicia uma transa\xe7\xe3o no processo atual. Todas as mudan\xe7as nos dados (registros) do banco dentro da transa\xe7\xe3o s\xe3o armazenados temporariamente at\xe9 que a transa\xe7\xe3o seja validada ou cancelada."}),"\n",(0,s.jsx)(e.p,{children:"A partir da vers\xe3o 11 de 4D, pode aninhar v\xe1rias transa\xe7\xf5es (subtransa\xe7\xf5es). Cada transa\xe7\xe3o ou subtransa\xe7\xe3o deve ser finalmente cancelada ou validada. Note que se a transa\xe7\xe3o principal for cancelada, todas as subtransa\xe7\xf5es tamb\xe9m s\xe3o canceladas, sem importar seu resultado."}),"\n",(0,s.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/pt/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/pt/commands/in-transaction",children:"In transaction"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/pt/commands/transaction-level",children:"Transaction level"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.em,{children:"Usar Transa\xe7\xf5es"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/pt/commands/validate-transaction",children:"VALIDATE TRANSACTION"})]}),"\n",(0,s.jsx)(e.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"N\xfamero do comando"}),(0,s.jsx)(e.td,{children:"239"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread-seguro"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return o}});var a=t(667294);let s={},r=a.createContext(s);function o(n){let e=a.useContext(r);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);