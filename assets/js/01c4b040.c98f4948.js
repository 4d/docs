"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90608"],{433093:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/delete-record","title":"DELETE RECORD","description":"DELETE RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/delete-record.md","sourceDirName":"commands-legacy","slug":"/commands/delete-record","permalink":"/docs/commands/delete-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-record","title":"DELETE RECORD","slug":"/commands/delete-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE RECORD","permalink":"/docs/commands/create-record"},"next":{"title":"DISPLAY RECORD","permalink":"/docs/commands/display-record"}}'),d=r("785893"),s=r("250065");let o={id:"delete-record",title:"DELETE RECORD",slug:"/commands/delete-record",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE RECORD"})," {( ",(0,d.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Table where the current record will be deleted, or Default table, if omitted"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE RECORD"})," deletes the current record of ",(0,d.jsx)(n.em,{children:"aTable"})," in the process. If there is no current record for ",(0,d.jsx)(n.em,{children:"aTable"})," in the process, ",(0,d.jsx)(n.strong,{children:"DELETE RECORD"})," has no effect. In a form, you can create a Delete Record button instead of using this command."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If the current record is unloaded from memory before calling ",(0,d.jsx)(n.strong,{children:"DELETE RECORD"})," (for example, subsequent to an ",(0,d.jsx)(n.a,{href:"/docs/commands/unload-record",children:"UNLOAD RECORD"}),"), the current selection of ",(0,d.jsx)(n.em,{children:"table"})," is empty after the deletion occurs."]}),"\n",(0,d.jsxs)(n.li,{children:["The ",(0,d.jsx)(n.strong,{children:"DELETE RECORD"})," command does nothing when the table is in ",(0,d.jsx)(n.a,{href:"/docs/commands/read-only",children:"READ ONLY"})," mode, regardless of whether the record to be deleted is locked or not."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Deleting records is a permanent operation and cannot be undone (except when it is executed during a transaction, see ",(0,d.jsx)(n.em,{children:"Using Transactions"}),")."]}),"\n",(0,d.jsx)(n.p,{children:"If a record is deleted, the record number will be reused when new records are created. Do not use the record number as the record identifier if you will ever delete records from the database."}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"The following example deletes an employee record. The code asks the user what employee to delete, searches for the employee\u2019s record, and then deletes it:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0vFind:=Request("Employee ID to delete:")\xa0// Get an employee ID\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Employee];[Employee]ID =vFind)\xa0// Find the employee\n\xa0\xa0\xa0\xa0DELETE RECORD([Employee])\xa0// Delete the employee\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/locked",children:"Locked"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Triggers"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"58"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Changes current record"}),(0,d.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var t=r(667294);let d={},s=t.createContext(d);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);