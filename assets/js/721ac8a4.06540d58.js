"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66815"],{664481:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/one-record-select","title":"ONE RECORD SELECT","description":"ONE RECORD SELECT {( aTable )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/one-record-select.md","sourceDirName":"commands-legacy","slug":"/commands/one-record-select","permalink":"/docs/20-R7/commands/one-record-select","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fone-record-select.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"one-record-select","title":"ONE RECORD SELECT","slug":"/commands/one-record-select","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NEXT RECORD","permalink":"/docs/20-R7/commands/next-record"},"next":{"title":"PREVIOUS RECORD","permalink":"/docs/20-R7/commands/previous-record"}}'),s=r("785893"),o=r("250065");let c={id:"one-record-select",title:"ONE RECORD SELECT",slug:"/commands/one-record-select",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," {( ",(0,s.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table in which to reduce the selection to the current record, or Default table, if omitted"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," reduces the current selection of ",(0,s.jsx)(n.em,{children:"aTable"})," to the current record. If no current record exists or if the current record is not loaded into memory (special case), ",(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," has no effect."]}),"\n",(0,s.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.p,{children:["This command was useful to \u201Creturn\u201D a record that had been pushed and popped from the record stack back to the selection while the selection for the table was changed. ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/set-query-destination",children:"SET QUERY DESTINATION"})," allows you to make a query without changing the selection or the current record of a table; therefore, you no longer need to push and pop a current record in order to query its table. Consequently, ",(0,s.jsx)(n.strong,{children:"ONE RECORD SELECT"})," is less useful, unless you actually want to reduce the selection of a table to the current record."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Keep in mind that a record number can be reused if the record is deleted and another record is created (see ",(0,s.jsx)(n.em,{children:"About Record Numbers"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Named Selections"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"189"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current record"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current selection"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var t=r(667294);let s={},o=t.createContext(s);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);