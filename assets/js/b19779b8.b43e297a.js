"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49153"],{467052:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>d,assets:()=>a,toc:()=>i,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/load-record","title":"LOAD RECORD","description":"LOAD RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/load-record.md","sourceDirName":"commands-legacy","slug":"/commands/load-record","permalink":"/docs/20-R7/commands/load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-record","title":"LOAD RECORD","slug":"/commands/load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Record Locking","permalink":"/docs/20-R7/commands/theme/Record-Locking"},"next":{"title":"Locked","permalink":"/docs/20-R7/commands/locked"}}'),o=r("785893"),t=r("250065");let s={id:"load-record",title:"LOAD RECORD",slug:"/commands/load-record",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," {( ",(0,o.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"aTable"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Table for which to load record, or Default table, if omitted"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," loads the current record of ",(0,o.jsx)(n.em,{children:"aTable"}),". If there is no current record, ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," has no effect.",(0,o.jsx)(n.br,{}),"\nYou can then use the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/locked",children:"Locked"})," function to determine whether you can modify the record:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the table is in read-only state, the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/locked",children:"Locked"})," function returns TRUE, and you cannot modify the record."]}),"\n",(0,o.jsx)(n.li,{children:"If the table is in read/write state but the record was already locked, the record will be read-only, and you cannot modify the record."}),"\n",(0,o.jsxs)(n.li,{children:["If the table is in read/write state and the record is not locked, you can modify the record in the current process. The ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/locked",children:"Locked"})," function returns TRUE for all other users and processes."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," If the ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," command is executed after a ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/read-only",children:"READ ONLY"}),", the record is automatically unloaded and loaded without having to use the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/unload-record",children:"UNLOAD RECORD"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["Usually, you do not need to use the ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," command, because commands like ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/query",children:"QUERY"}),", ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/next-record",children:"NEXT RECORD"}),", ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/previous-record",children:"PREVIOUS RECORD"}),", etc., automatically load the current record."]}),"\n",(0,o.jsxs)(n.p,{children:["In multi-user and multi-process environments, when you need to modify an existing record, you must access the table (to which the record belongs) in read/write mode. If a record is locked and not loaded, ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," allows you to attempt to load the record again at a later time. By using ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," in a loop, you can wait until the record becomes available in read/write mode."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Tip:"})," The ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," command can be used to reload the current record in the context of an input form. All the data modified are then replaced by their previous values. In this case, the ",(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," command carries out a sort of general cancellation of data entry."]}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/locked",children:"Locked"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Record Locking"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/unload-record",children:"UNLOAD RECORD"})]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"52"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var d=r(667294);let o={},t=d.createContext(o);function s(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);