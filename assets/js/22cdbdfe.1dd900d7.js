"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4195],{838421:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=n(474848),t=n(28453);const s={id:"unload-record",title:"UNLOAD RECORD",slug:"/commands/unload-record",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/unload-record",title:"UNLOAD RECORD",description:"UNLOAD RECORD {( aTable )}",source:"@site/versioned_docs/version-20-R7/commands-legacy/unload-record.md",sourceDirName:"commands-legacy",slug:"/commands/unload-record",permalink:"/docs/commands/unload-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funload-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"unload-record",title:"UNLOAD RECORD",slug:"/commands/unload-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"READ WRITE",permalink:"/docs/commands/read-write"},next:{title:"CREATE RECORD",permalink:"/docs/commands/create-record"}},a={},i=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," {( ",(0,o.jsx)(r.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Parameter"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"aTable"}),(0,o.jsx)(r.td,{children:"Table"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Table for which to unload record, or Default table, if omitted"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," unloads the current record of ",(0,o.jsx)(r.em,{children:"table"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["If the record is unlocked for the local user (locked for the other users), ",(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," unlocks the record for the other users."]}),"\n",(0,o.jsxs)(r.p,{children:["Although ",(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," unloads it from memory, the record remains the current record. When another record is made the current record, the previous current record is automatically unloaded and therefore unlocked for other users. Always execute this command when you have finished modifying a record and want to make it available to other users, while retaining the record as your current record."]}),"\n",(0,o.jsxs)(r.p,{children:["If a record has a large amount of data, picture fields, or external documents (such as 4D Write Pro documents), you may not want to keep the current record in memory unless you need to modify it. In this case, use the ",(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," command to keep the current record without having it in memory. You free the memory occupied by the record, but you do not have access to its field values. If you later need access to the values of the record, use the ",(0,o.jsx)(r.a,{href:"/docs/commands/load-record",children:"LOAD RECORD"})," command."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Note:"})," When it is used in a transaction, the ",(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," command unloads the current record only for the process that manages the transaction. For other processes, the record stays locked as long as the transaction has not been validated (or cancelled)."]}),"\n",(0,o.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/commands/load-record",children:"LOAD RECORD"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.em,{children:"Record Locking"})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>c});var o=n(296540);const t={},s=o.createContext(t);function d(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);