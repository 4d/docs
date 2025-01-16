"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91405"],{580883:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/active-transaction","title":"Active transaction","description":"Active transaction : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/active-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/active-transaction","permalink":"/docs/commands/active-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factive-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"active-transaction","title":"Active transaction","slug":"/commands/active-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Transactions","permalink":"/docs/category/transactions"},"next":{"title":"CANCEL TRANSACTION","permalink":"/docs/commands/cancel-transaction"}}'),r=t("785893"),i=t("250065");let c={id:"active-transaction",title:"Active transaction",slug:"/commands/active-transaction",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Description",id:"description-1",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Active transaction"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Function result"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Returns False if the current transaction is suspended"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"Active transaction"})," command returns ",(0,r.jsx)(e.strong,{children:"True"})," if the current process is in transaction, and this transaction is not suspended. It returns ",(0,r.jsx)(e.strong,{children:"False"})," if there is no current transaction, or if the current transaction is suspended. A transaction can be suspended using the ",(0,r.jsx)(e.a,{href:"/docs/commands/suspend-transaction",children:"SUSPEND TRANSACTION"})," command."]}),"\n",(0,r.jsxs)(e.p,{children:["Since the command will also return ",(0,r.jsx)(e.strong,{children:"False"})," if the current process is not in transaction, you may need to check using the ",(0,r.jsx)(e.a,{href:"/docs/commands/in-transaction",children:"In transaction"})," command to know whether the process is in transaction."]}),"\n",(0,r.jsxs)(e.p,{children:["For more information, please refer to ",(0,r.jsx)(e.em,{children:"Suspending transactions"}),"."]}),"\n",(0,r.jsx)(e.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"You want to know the current transaction status:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0If(In transaction)\n\xa0\xa0\xa0\xa0If(Not(Active transaction))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The current transaction is suspended")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The current transaction is active")\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("We are not in transaction")\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/commands/in-transaction",children:"In transaction"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/commands/resume-transaction",children:"RESUME TRANSACTION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/commands/suspend-transaction",children:"SUSPEND TRANSACTION"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.em,{children:"Suspending transactions"})]}),"\n",(0,r.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Command number"}),(0,r.jsx)(e.td,{children:"1387"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);