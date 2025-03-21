"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86815"],{419878:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/modify-record","title":"MODIFY RECORD","description":"MODIFY RECORD ( {;}{*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/modify-record.md","sourceDirName":"commands-legacy","slug":"/commands/modify-record","permalink":"/docs/20-R7/commands/modify-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modify-record","title":"MODIFY RECORD","slug":"/commands/modify-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Modified","permalink":"/docs/20-R7/commands/modified"},"next":{"title":"Old","permalink":"/docs/20-R7/commands/old"}}'),d=r("785893"),t=r("250065");let o={id:"modify-record",title:"MODIFY RECORD",slug:"/commands/modify-record",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," ( {",(0,d.jsx)(n.em,{children:"aTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Table to use for data entry, or Default table, if omitted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Hide scroll bars"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," command modifies the current record for the table ",(0,d.jsx)(n.em,{children:"aTable"})," or for the default table if you omit the ",(0,d.jsx)(n.em,{children:"aTable"})," parameter. ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," loads the record, if it is not already loaded for the current process, and displays the current input form. If there is no current record, then ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," does nothing. ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," does not affect the current selection."]}),"\n",(0,d.jsxs)(n.p,{children:["The form is displayed in the frontmost window of the process. The window has scroll bars and a size box. Specifying the optional ",(0,d.jsx)(n.em,{children:"*"})," parameter causes the window to be drawn without scroll bars or a size box."]}),"\n",(0,d.jsxs)(n.p,{children:["To use ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"}),", the current record must have read-write access and should not be locked.",(0,d.jsx)(n.br,{}),"\nIf the form contains buttons for moving within the selection of records, ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," lets the user click the buttons to modify records and move to other records."]}),"\n",(0,d.jsxs)(n.p,{children:["The record is saved (accepted) if the user clicks an Accept button or presses the Enter key (numeric key pad), or if the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/accept",children:"ACCEPT"})," command is executed."]}),"\n",(0,d.jsxs)(n.p,{children:["The record is not saved (canceled) if the user clicks a Cancel button or presses the cancel key combination (Ctrl-Period on Windows, Command-Period on Macintosh), or if the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/cancel",children:"CANCEL"})," command is executed. Even when canceled, the record remains in memory and can be saved if ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/save-record",children:"SAVE RECORD"})," is executed before the current record pointer is changed."]}),"\n",(0,d.jsxs)(n.p,{children:["After a call to ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"}),", OK is set to 1 if the record is accepted, to 0 if canceled."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," Even when canceled, the record remains in memory and can be saved if ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/save-record",children:"SAVE RECORD"})," is executed before the current record pointer is changed."]}),"\n",(0,d.jsxs)(n.p,{children:["If you are using ",(0,d.jsx)(n.strong,{children:"MODIFY RECORD"})," and the user does not change any of the data in the record, the record is not considered to be modified, and accepting the record does not cause it to be saved again. Actions such as changing variables, checking check boxes, and selecting radio buttons do not qualify as modifications. Only changing data in a field, either through data entry or through a method, causes the record to be saved."]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(n.p,{children:["See example for the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/add-record",children:"ADD RECORD"})," command."]}),"\n",(0,d.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsx)(n.p,{children:"Accepting the record sets the OK system variable to 1; canceling it sets the OK system variable to 0. The OK system variable is set only after the record is accepted or canceled."}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/add-record",children:"ADD RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/locked",children:"Locked"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/modified-record",children:"Modified record"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/read-write",children:"READ WRITE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/unload-record",children:"UNLOAD RECORD"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"57"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Forbidden on the server"}),(0,d.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var s=r(667294);let d={},t=s.createContext(d);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);