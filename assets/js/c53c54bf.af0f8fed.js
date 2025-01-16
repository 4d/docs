"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79545"],{83402:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/suspend-transaction","title":"SUSPEND TRANSACTION","description":"SUSPEND TRANSACTION","source":"@site/versioned_docs/version-20-R8/commands-legacy/suspend-transaction.md","sourceDirName":"commands-legacy","slug":"/commands/suspend-transaction","permalink":"/docs/commands/suspend-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsuspend-transaction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"suspend-transaction","title":"SUSPEND TRANSACTION","slug":"/commands/suspend-transaction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"START TRANSACTION","permalink":"/docs/commands/start-transaction"},"next":{"title":"Transaction level","permalink":"/docs/commands/transaction-level"}}'),r=t("785893"),a=t("250065");let i={id:"suspend-transaction",title:"SUSPEND TRANSACTION",slug:"/commands/suspend-transaction",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SUSPEND TRANSACTION"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Does not require any parameters"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SUSPEND TRANSACTION"})," command pauses the current transaction in the current process. You can then handle data in other parts of the database, for example, without it being included in the transaction, and while preserving the transaction context untouched. Any records that have been updated or added in the transaction are locked until the transaction is resumed using the ",(0,r.jsx)(n.a,{href:"/docs/commands/resume-transaction",children:"RESUME TRANSACTION"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to the ",(0,r.jsx)(n.em,{children:"Suspending transactions"})," section."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/active-transaction",children:"Active transaction"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/resume-transaction",children:"RESUME TRANSACTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Suspending transactions"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1385"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);