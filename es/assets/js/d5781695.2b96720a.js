"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83167"],{667061:function(n,e,s){s.r(e),s.d(e,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/start-transaction","title":"START TRANSACTION","description":"START TRANSACTION","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/start-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/start-transaction","permalink":"/docs/es/commands/start-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-transaction.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"start-transaction","title":"START TRANSACTION","slug":"/commands/start-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME TRANSACTION","permalink":"/docs/es/commands/resume-transaction"},"next":{"title":"SUSPEND TRANSACTION","permalink":"/docs/es/commands/suspend-transaction"}}'),a=s("785893"),r=s("250065");let c={id:"start-transaction",title:"START TRANSACTION",slug:"/commands/start-transaction",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"START TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(e.table,{children:(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Este comando no requiere par\xe1metros"}),(0,a.jsx)(e.th,{})]})})}),"\n",(0,a.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(e.p,{children:"START TRANSACTION inicia una transacci\xf3n en el proceso actual. Todos los cambios a los datos (registros) de la base dentro de la transacci\xf3n se almacenan temporalmente hasta que la transacci\xf3n sea validada o cancelada."}),"\n",(0,a.jsx)(e.p,{children:"A partir de la versi\xf3n 11 de 4D, puede anidar varias transacciones (subtransaccciones). Cada transacci\xf3n o subtransaction debe ser finalmente cancelada o validada. Note que si la transacci\xf3n principal se cancela, todas las subtransacciones tambi\xe9n se cancelan, sin importar su resultado."}),"\n",(0,a.jsx)(e.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/es/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/es/commands/in-transaction",children:"In transaction"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/es/commands/transaction-level",children:"Transaction level"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.em,{children:"Utilizaci\xf3n de transacciones"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/es/commands/validate-transaction",children:"VALIDATE TRANSACTION"})]}),"\n",(0,a.jsx)(e.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"N\xfamero de comando"}),(0,a.jsx)(e.td,{children:"239"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Hilo seguro"}),(0,a.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let a={},r=t.createContext(a);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);