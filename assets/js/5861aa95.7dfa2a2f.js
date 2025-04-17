"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16600"],{926532:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/in-transaction","title":"In transaction","description":"In transaction  : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/in-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/in-transaction","permalink":"/docs/20-R8/commands/in-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fin-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"in-transaction","title":"In transaction","slug":"/commands/in-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL TRANSACTION","permalink":"/docs/20-R8/commands/cancel-transaction"},"next":{"title":"RESUME TRANSACTION","permalink":"/docs/20-R8/commands/resume-transaction"}}'),s=t("785893"),a=t("250065");let o={id:"in-transaction",title:"In transaction",slug:"/commands/in-transaction",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"In transaction"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Function result"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Returns TRUE if current process is in transaction"})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["The In transaction command returns ",(0,s.jsx)(e.strong,{children:"TRUE"})," if the current process is in a transaction, otherwise it returns ",(0,s.jsx)(e.strong,{children:"FALSE"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:"If you perform a multi-record operation (adding, modifying, or deleting records), you may encounter locked records. In this case, if you have to maintain data integrity, you must be in transaction so you can \u201Croll-back\u201D the whole operation and leave the database untouched."}),"\n",(0,s.jsx)(e.p,{children:"If you perform the operation from within a trigger or from a subroutine (that can be called while in transaction or not), you can use In transaction to check whether or not the current process method or the caller method started a transaction. If a transaction was not started, you do not even start the operation, because you already know that you will not be able to roll it back if it fails."}),"\n",(0,s.jsx)(e.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/20-R8/commands/active-transaction",children:"Active transaction"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/20-R8/commands/cancel-transaction",children:"CANCEL TRANSACTION"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/20-R8/commands/start-transaction",children:"START TRANSACTION"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.em,{children:"Triggers"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/20-R8/commands/validate-transaction",children:"VALIDATE TRANSACTION"})]}),"\n",(0,s.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Command number"}),(0,s.jsx)(e.td,{children:"397"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread safe"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return o}});var r=t(667294);let s={},a=r.createContext(s);function o(n){let e=r.useContext(a);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);