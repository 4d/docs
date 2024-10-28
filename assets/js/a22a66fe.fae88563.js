"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61578],{360927:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=n(474848),t=n(28453);const d={id:"add-record",title:"ADD RECORD",slug:"/commands/add-record",displayed_sidebar:"docs"},o=void 0,c={id:"commands-legacy/add-record",title:"ADD RECORD",description:"ADD RECORD ( {;}{*} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/add-record.md",sourceDirName:"commands-legacy",slug:"/commands/add-record",permalink:"/docs/commands/add-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"add-record",title:"ADD RECORD",slug:"/commands/add-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ACCEPT",permalink:"/docs/commands/accept"},next:{title:"CANCEL",permalink:"/docs/commands/cancel"}},i={},a=[{value:"Compatibility",id:"compatibility",level:4},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ADD RECORD"})," ( {",(0,r.jsx)(s.em,{children:"aTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aTable"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Table to use for data entry, or Default table, if omitted"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Hide scroll bars"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(s.h4,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["This command was implemented in 4D's early releases and is still useful for prototyping or basic developments. However, to build customized and modern interfaces, it is now recommended to use generic forms based upon the ",(0,r.jsx)(s.a,{href:"/docs/commands/dialog",children:"DIALOG"})," command which provide advanced features and better control over the data flow."]})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"ADD RECORD"})," command lets the user add a new record to the database for the table ",(0,r.jsx)(s.em,{children:"aTable"})," or for the default table, if you omit the ",(0,r.jsx)(s.em,{children:"aTable"})," parameter."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ADD RECORD"})," creates a new record, makes the new record the current record for the current process, and displays the current input form. In the Application environment, after the user has accepted the new record, the new record is the only record in the current selection."]}),"\n",(0,r.jsx)(s.p,{children:"The following figure shows a typical data entry form."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(851233).A+"",width:"642",height:"374"})}),"\n",(0,r.jsxs)(s.p,{children:["The form is displayed in the frontmost window of the process. The window has scroll bars and a size box. Specifying the optional ",(0,r.jsx)(s.em,{children:"*"})," parameter causes the window to be drawn without scroll bars and the form window can no longer be reduced:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(764636).A+"",width:"689",height:"414"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ADD RECORD"})," displays the form until the user accepts or cancels the record. If the user is adding several records, the command must be executed once for each new record."]}),"\n",(0,r.jsxs)(s.p,{children:["The record is saved (accepted) if the user clicks an Accept button or presses the Enter key (numeric keypad), or if the ",(0,r.jsx)(s.a,{href:"/docs/commands/accept",children:"ACCEPT"})," command is executed."]}),"\n",(0,r.jsxs)(s.p,{children:["The record is not saved (canceled) if the user clicks a Cancel button or presses the cancel key combination (Ctrl-Period on Windows, Command-Period on Macintosh), or if the ",(0,r.jsx)(s.a,{href:"/docs/commands/cancel",children:"CANCEL"})," command is executed."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," This command does not require ",(0,r.jsx)(s.em,{children:"aTable"})," to be in read/write mode. It can be used even when the table is in read-only mode (see ",(0,r.jsx)(s.em,{children:"Record Locking"}),")."]}),"\n",(0,r.jsxs)(s.p,{children:["After a call to ",(0,r.jsx)(s.strong,{children:"ADD RECORD"}),", OK is set to 1 if the record is accepted, to 0 if canceled."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," Even when canceled, the record remains in memory and can be saved if ",(0,r.jsx)(s.a,{href:"/docs/commands/save-record",children:"SAVE RECORD"})," is executed before the current record pointer is changed."]}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(s.p,{children:"The following example is a loop commonly used to add new records to a database:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Customers];"Std Input")\xa0// Set input form for [Customers] table\n\xa0Repeat\xa0// Loop until the user cancels\n\xa0\xa0\xa0\xa0ADD RECORD([Customers];*)\xa0// Add a record to the [Customers] table\n\xa0Until(OK=0)\xa0// Until the user cancels\n'})}),"\n",(0,r.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(s.p,{children:["The following example queries the database for a customer. Depending on the results of the search, one of two things may happen. If no customer is found, then the user is allowed to add a new customer with ",(0,r.jsx)(s.strong,{children:"ADD RECORD"}),". If at least one customer is found, the user is presented with the first record found, which can be modified with ",(0,r.jsx)(s.a,{href:"/docs/commands/modify-record",children:"MODIFY RECORD"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0READ WRITE([Customers])\n\xa0FORM SET INPUT([Customers];"Input")\xa0// Set the input form\n\xa0vlCustNum:=Num(Request("Enter Customer Number:"))\xa0// Get the customer number\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Customers];[Customers]CustNo=vlCustNum)\xa0// Look for the customer\n\xa0\xa0\xa0\xa0If(Records in selection([Customers])=0)\xa0// If no customer is found\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ADD RECORD([Customers])\xa0// Add a new customer\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Locked([Customers])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MODIFY RECORD([Customers])\xa0// Modify the record\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0UNLOAD RECORD([Customers])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("The record is currently being used.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(s.p,{children:"Accepting the record sets the OK system variable to 1; canceling it sets the OK system variable to 0. The OK system variable is set only after the record is accepted or canceled."}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/commands/accept",children:"ACCEPT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/cancel",children:"CANCEL"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/create-record",children:"CREATE RECORD"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/modify-record",children:"MODIFY RECORD"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/save-record",children:"SAVE RECORD"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},851233:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/pict2804768.en-90f1dbe0b38710d7f9696cee3162c305.png"},764636:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/pict2804770.en-5d1c5b3a4fa0cb23ab83527536f94b7e.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(296540);const t={},d=r.createContext(t);function o(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);