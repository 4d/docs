"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59782"],{342780:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>i,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/selected-record-number","title":"Selected record number","description":"Selected record number {( aTable )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/selected-record-number.md","sourceDirName":"commands-legacy","slug":"/commands/selected-record-number","permalink":"/docs/commands/selected-record-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselected-record-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"selected-record-number","title":"Selected record number","slug":"/commands/selected-record-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SCAN INDEX","permalink":"/docs/commands/scan-index"},"next":{"title":"TRUNCATE TABLE","permalink":"/docs/commands/truncate-table"}}'),s=n("785893"),d=n("250065");let c={id:"selected-record-number",title:"Selected record number",slug:"/commands/selected-record-number",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Selected record number"})," {( ",(0,s.jsx)(r.em,{children:"aTable"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aTable"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Table for which to return the selected record number or Default table, if omitted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Function result"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Selected record number of current record"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Selected record number"})," returns the position of the current record within the current selection of ",(0,s.jsx)(r.em,{children:"aTable"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If the selection is not empty and if the current record is within the selection, ",(0,s.jsx)(r.strong,{children:"Selected record number"})," returns a value between ",(0,s.jsx)(r.em,{children:"1"})," and ",(0,s.jsx)(r.a,{href:"/docs/commands/records-in-selection",children:"Records in selection"}),". If the selection is empty, of if there is no current record, it returns ",(0,s.jsx)(r.em,{children:"0"})," (zero)."]}),"\n",(0,s.jsxs)(r.p,{children:["The selected record number is not the same as the number returned by ",(0,s.jsx)(r.a,{href:"/docs/commands/record-number",children:"Record number"}),", which returns the physical record number in the table. The selected record number depends on the current selection and the current record."]}),"\n",(0,s.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"The following example saves the current selected record number in a variable:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0CurSelRecNum:=Selected record number([People])\xa0// Get the selected record number\n"})}),"\n",(0,s.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"About Record Numbers"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/records-in-selection",children:"Records in selection"})]}),"\n",(0,s.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"246"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return c}});var t=n(667294);let s={},d=t.createContext(s);function c(e){let r=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);