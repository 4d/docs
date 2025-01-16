"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81427"],{449325:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/record-number","title":"Record number","description":"Record number {( aTable )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/record-number.md","sourceDirName":"commands-legacy","slug":"/commands/record-number","permalink":"/docs/20-R7/commands/record-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frecord-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"record-number","title":"Record number","slug":"/commands/record-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PUSH RECORD","permalink":"/docs/20-R7/commands/push-record"},"next":{"title":"Records in table","permalink":"/docs/20-R7/commands/records-in-table"}}'),s=n("785893"),d=n("250065");let o={id:"record-number",title:"Record number",slug:"/commands/record-number",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Record number"})," {( ",(0,s.jsx)(r.em,{children:"aTable"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aTable"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Table for which to return the number of the current record, or Default table, if omitted"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Function result"}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Current record number"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Record number"})," returns the physical record number for the current record of ",(0,s.jsx)(r.em,{children:"aTable"}),". If there is no current record, such as when the record pointer is before or after the current selection, ",(0,s.jsx)(r.strong,{children:"Record number"})," returns \u20131. If the record is a new record that has not been saved, ",(0,s.jsx)(r.strong,{children:"Record number"})," returns \u20133."]}),"\n",(0,s.jsx)(r.p,{children:"Record numbers can change. The record numbers of deleted records are reused."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"4D Server:"})," This command returns a different result for the On Validate form event depending on whether it is executed on 4D in local mode or 4D in remote mode. In local mode, the command returns a record number (the record is considered as already created). In remote mode, the command returns -3 because, in this case, the record is already created on the server but the information has not yet been sent to the client."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," It is recommended to use the ",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/is-new-record",children:"Is new record"})," command to check whether a record is in the process of being created."]}),"\n",(0,s.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"The following example saves the current record number and then searches for any other records that have the same data:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0$RecNum:=Record number([People])\xa0// Get the record number\n\xa0QUERY([People];[People]Last =[People]Last)\xa0// Anyone else with the last name?\n\xa0\xa0// Display an alert with the number of people with the same last name\n\xa0ALERT("There are "+String(Records in selection([People])+" with that name.")\n\xa0GOTO RECORD([People];$RecNum)\xa0// Go back to the same record\n'})}),"\n",(0,s.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"About Record Numbers"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/goto-record",children:"GOTO RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/is-new-record",children:"Is new record"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/selected-record-number",children:"Selected record number"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/20-R7/commands/sequence-number",children:"Sequence number"})]}),"\n",(0,s.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"243"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var t=n(667294);let s={},d=t.createContext(s);function o(e){let r=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);