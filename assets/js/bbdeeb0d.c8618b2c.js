"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8582"],{868245:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/start-transaction","title":"START TRANSACTION","description":"START TRANSACTION","source":"@site/versioned_docs/version-20-R8/commands-legacy/start-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/start-transaction","permalink":"/docs/commands/start-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"start-transaction","title":"START TRANSACTION","slug":"/commands/start-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME TRANSACTION","permalink":"/docs/commands/resume-transaction"},"next":{"title":"SUSPEND TRANSACTION","permalink":"/docs/commands/suspend-transaction"}}'),a=t("785893"),r=t("250065");let i={id:"start-transaction",title:"START TRANSACTION",slug:"/commands/start-transaction",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"START TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(e.table,{children:(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Does not require any parameters"}),(0,a.jsx)(e.th,{})]})})}),"\n",(0,a.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"START TRANSACTION starts a transaction in the current process. All changes to the data (records) of the database within the transaction are stored temporarily until the transaction is accepted (validated) or canceled."}),"\n",(0,a.jsx)(e.p,{children:"Beginning with version 11 of 4D, you can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all the sub-transactions are cancelled as well, regardless of their result."}),"\n",(0,a.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/docs/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/commands/in-transaction",children:"In transaction"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/commands/transaction-level",children:"Transaction level"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.em,{children:"Using Transactions"}),(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"/docs/commands/validate-transaction",children:"VALIDATE TRANSACTION"})]}),"\n",(0,a.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{}),(0,a.jsx)(e.th,{})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Command number"}),(0,a.jsx)(e.td,{children:"239"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Thread safe"}),(0,a.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);