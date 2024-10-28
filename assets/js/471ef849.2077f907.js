"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83861],{852678:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(474848),r=s(28453);const i={id:"print-label",title:"PRINT LABEL",slug:"/commands/print-label",displayed_sidebar:"docs"},l=void 0,a={id:"commands-legacy/print-label",title:"PRINT LABEL",description:"PRINT LABEL ( {aTable }{;}{ document {; * | >}} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/print-label.md",sourceDirName:"commands-legacy",slug:"/commands/print-label",permalink:"/docs/commands/print-label",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-label.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"print-label",title:"PRINT LABEL",slug:"/commands/print-label",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Print form",permalink:"/docs/commands/print-form"},next:{title:"Print object",permalink:"/docs/commands/print-object"}},d={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," }{;}{ ",(0,t.jsx)(n.em,{children:"document"})," {; * | >}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table to print, or Default table, if omitted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name of disk label document"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"* | >"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"* to suppress the printing dialog box, or > to not reinitialize print settings"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," enables you to print labels with the data from the selection of ",(0,t.jsx)(n.em,{children:"aTable"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If do not specify the ",(0,t.jsx)(n.em,{children:"document"})," parameter, ",(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," prints the current selection of ",(0,t.jsx)(n.em,{children:"aTable"})," as labels, using the current output form. You cannot use this command to print subforms. For details about creating forms for labels, refer to the ",(0,t.jsx)(n.em,{children:"4D Design Reference"})," manual."]}),"\n",(0,t.jsxs)(n.p,{children:["If you specify the ",(0,t.jsx)(n.em,{children:"document"})," parameter, ",(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," enables you to access the Label Wizard (shown below) or to print an existing Label document stored on disk. See the following discussion."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(551459).A+"",width:"766",height:"618"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," displays the Print job dialog box before printing. If the user cancels the dialog box, the command is canceled and the labels are not printed. You can suppress these dialog box by using either the optional asterisk (",(0,t.jsx)(n.em,{children:"*"}),") parameter or the optional \u201cgreater than\u201d (",(0,t.jsx)(n.em,{children:">"}),") parameter:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.em,{children:"*"})," parameter causes a print job using the current print parameters."]}),"\n",(0,t.jsxs)(n.li,{children:["Furthermore, the ",(0,t.jsx)(n.em,{children:">"})," parameter causes a print job without reinitializing the current print parameters. This setting is useful for executing several successive calls to ",(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," (ex. inside a loop) while maintaining previously set customized print parameters. For an example of use of this parameter, refer to the ",(0,t.jsx)(n.a,{href:"/docs/commands/print-record",children:"PRINT RECORD"})," command description."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note that this parameter has no effect if the Label Wizard is involved."}),"\n",(0,t.jsxs)(n.p,{children:["If the Label Wizard is not involved, the OK variable is set to 1 if all labels are printed; otherwise, it is set to 0 (zero) (i.e., if user clicked ",(0,t.jsx)(n.strong,{children:"Cancel"})," in the printing dialog box)."]}),"\n",(0,t.jsxs)(n.p,{children:["If you specify the ",(0,t.jsx)(n.em,{children:"document"})," parameter, the labels are printed with the label setup defined in ",(0,t.jsx)(n.em,{children:"document"}),". If ",(0,t.jsx)(n.em,{children:"document"}),' is an empty string (""), ',(0,t.jsx)(n.strong,{children:"PRINT LABEL"})," will present an Open File dialog box so the user can specify the file to use for the label setup. If ",(0,t.jsx)(n.em,{children:"document"})," is the name of a document that does not exist (for example, pass ",(0,t.jsx)(n.em,{children:"char(1)"})," in ",(0,t.jsx)(n.em,{children:"document)"}),", the Label Wizard is displayed and the user can define the label setup."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If the ",(0,t.jsx)(n.em,{children:"table"})," has been declared \u201cinvisible\u201d in Design mode, the Label Wizard will not be displayed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server:"})," This command can be executed on 4D Server in a stored procedure. In this context:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the ",(0,t.jsx)(n.em,{children:"*"})," or ",(0,t.jsx)(n.em,{children:">"})," parameter."]}),"\n",(0,t.jsx)(n.li,{children:"The syntax which makes the label editor appear does not work with 4D Server; in this case, the system variable OK is set to 0."}),"\n",(0,t.jsx)(n.li,{children:"In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"The following example prints labels using the output form of a table. The example uses two methods. The first is a project method that sets the correct output form and then prints labels:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Addresses])\xa0// Select all records\n\xa0FORM SET OUTPUT([Addresses];"Label Out")\xa0// Select the output form\n\xa0PRINT LABEL([Addresses])\xa0// Print the labels\n\xa0FORM SET OUTPUT([Addresses];"Output")\xa0// Restore default output form\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The second method is the form method for the form ",(0,t.jsx)(n.em,{children:'"Label Out"'}),". The form contains one variable named ",(0,t.jsx)(n.em,{children:"vLabel"}),", which is used to hold the concatenated fields. If the second address field (Addr2) is blank, it is removed by the method. Note that this task is performed automatically with the Label Wizard. The form method creates the label for each record:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// [Addresses]; "Label Out" form method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLabel:=[Addresses]Name1+" "+[Addresses]Name2+Char(13)+[Addresses]Addr1+Char(13)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Addresses]Addr2 #"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLabel:=vLabel+[Addresses]Addr2+Char(13)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLabel:=vLabel+[Addresses]City+", "+[Addresses]State+" "+[Addresses]ZipCode\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"The following example lets the user query the [People] table, and then automatically prints the labels \u201cMy Labels\u201d:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([People];"My Labels";*)\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.p,{children:"The following example lets the user query the [People] table, and then lets the user choose the labels to be printed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([People];"")\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.p,{children:"The following example lets the user query the [People] table, and then displays the Label Wizard so the user can design, save, load and print any labels:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0PRINT LABEL([People];Char(1))\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/qr-report",children:"QR REPORT"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},551459:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pict2980390.en-2255f84e4ef8ebebfb5ba59bb7f15da4.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(296540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);