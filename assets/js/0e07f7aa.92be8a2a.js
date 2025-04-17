"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10994"],{504956:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/goto-record","title":"GOTO RECORD","description":"GOTO RECORD ( {aTable ;} record )","source":"@site/versioned_docs/version-20-R8/commands-legacy/goto-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-record","permalink":"/docs/20-R8/commands/goto-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"goto-record","title":"GOTO RECORD","slug":"/commands/goto-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DUPLICATE RECORD","permalink":"/docs/20-R8/commands/duplicate-record"},"next":{"title":"Is new record","permalink":"/docs/20-R8/commands/is-new-record"}}'),s=n("785893"),d=n("250065");let o={id:"goto-record",title:"GOTO RECORD",slug:"/commands/goto-record",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GOTO RECORD"})," ( {",(0,s.jsx)(r.em,{children:"aTable"})," ;} ",(0,s.jsx)(r.em,{children:"record"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aTable"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Table in which to go to the record, or Default table, if omitted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"record"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Number returned by Record number"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GOTO RECORD"})," selects the specified record of ",(0,s.jsx)(r.em,{children:"aTable"})," as the current record. The ",(0,s.jsx)(r.em,{children:"record"})," parameter is the number returned by the ",(0,s.jsx)(r.a,{href:"/docs/20-R8/commands/record-number",children:"Record number"})," function. After executing this command, the record is the only record in the selection."]}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.em,{children:"record"})," is less than the smallest record number in the database or greater than the greatest record number in the database, 4D generates an error message stating that the record number is out of range. If ",(0,s.jsx)(r.em,{children:"record"})," is equal to the record number of a deleted record, 4D returns the error -10503 and the selection becomes empty."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["See the example for ",(0,s.jsx)(r.a,{href:"/docs/20-R8/commands/record-number",children:"Record number"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"About Record Numbers"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R8/commands/record-number",children:"Record number"})]}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"242"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Modifies variables"}),(0,s.jsx)(r.td,{children:"error"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Changes current selection"}),(0,s.jsx)(r.td,{})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var t=n(667294);let s={},d=t.createContext(s);function o(e){let r=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);