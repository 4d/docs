"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30991"],{484278:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/duplicate-record","title":"DUPLICATE RECORD","description":"DUPLICATE RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/duplicate-record.md","sourceDirName":"commands-legacy","slug":"/commands/duplicate-record","permalink":"/docs/20-R7/commands/duplicate-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fduplicate-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"duplicate-record","title":"DUPLICATE RECORD","slug":"/commands/duplicate-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISPLAY RECORD","permalink":"/docs/20-R7/commands/display-record"},"next":{"title":"GOTO RECORD","permalink":"/docs/20-R7/commands/goto-record"}}'),s=r("785893"),d=r("250065");let c={id:"duplicate-record",title:"DUPLICATE RECORD",slug:"/commands/duplicate-record",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DUPLICATE RECORD"})," {( ",(0,s.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to duplicate the current record, or Default table, if omitted"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DUPLICATE RECORD"})," creates a new record for ",(0,s.jsx)(n.em,{children:"aTable"})," that is a duplicate of the current record. The new record becomes the current record. If there is no current record, then ",(0,s.jsx)(n.strong,{children:"DUPLICATE RECORD"})," does nothing. You must use ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/save-record",children:"SAVE RECORD"})," to save the new record."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DUPLICATE RECORD"})," can be executed during data entry. This allows you to create a clone of the currently displayed record. Remember that you must first execute ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/save-record",children:"SAVE RECORD"})," in order to save any changes made to the original record."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility note:"})," Beginning with version 11 of 4D, this command no longer supports subtables."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/save-record",children:"SAVE RECORD"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"225"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current record"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var t=r(667294);let s={},d=t.createContext(s);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);