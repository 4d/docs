"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82069"],{788672:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>i,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/read-write","title":"READ WRITE","description":"READ WRITE {( aTable )}READ WRITE {( * )}","source":"@site/versioned_docs/version-20-R9/commands-legacy/read-write.md","sourceDirName":"commands-legacy","slug":"/commands/read-write","permalink":"/docs/commands/read-write","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-write.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"read-write","title":"READ WRITE","slug":"/commands/read-write","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Read only state","permalink":"/docs/commands/read-only-state"},"next":{"title":"UNLOAD RECORD","permalink":"/docs/commands/unload-record"}}'),s=r("785893"),d=r("250065");let a={id:"read-write",title:"READ WRITE",slug:"/commands/read-write",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"READ WRITE"})," {( ",(0,s.jsx)(t.em,{children:"aTable"})," )}",(0,s.jsx)(t.br,{}),(0,s.jsx)(t.strong,{children:"READ WRITE"})," {( * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aTable | *"}),(0,s.jsx)(t.td,{children:"Table, Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Table for which to set read-write state, or * for all the tables, or Default table, if omitted"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["READ WRITE changes the state of ",(0,s.jsx)(t.em,{children:"aTable"})," to read/write for the process in which it is called. If the optional * parameter is specified, all tables are changed to read/write state."]}),"\n",(0,s.jsx)(t.p,{children:"After a call to READ WRITE, when a record is loaded, the record is unlocked if no other user has locked the record. This command does not change the status of the currently loaded record, only that of subsequently loaded records."}),"\n",(0,s.jsx)(t.p,{children:"The default state for all tables is read/write."}),"\n",(0,s.jsx)(t.p,{children:"Use READ WRITE when you must modify a record and save the changes. Also use READ WRITE when you must lock a record for other users, even if you are not making any changes. Setting a table to read/write mode prevents other users from editing that table. However, other users can create new records."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," This command is not retroactive. A record is loaded according to the table\u2019s read/write status at the time of loading. To load a record from a read-only table in read/write mode, you must first change the table state to read/write."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/read-only",children:"READ ONLY"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/read-only-state",children:"Read only state"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:"Record Locking"})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"146"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return a}});var n=r(667294);let s={},d=n.createContext(s);function a(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);