"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7425"],{761266:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/print-selection","title":"PRINT SELECTION","description":"PRINT SELECTION ( {;}{* | >} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/print-selection.md","sourceDirName":"commands-legacy","slug":"/commands/print-selection","permalink":"/docs/commands/print-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-selection","title":"PRINT SELECTION","slug":"/commands/print-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT RECORD","permalink":"/docs/commands/print-record"},"next":{"title":"PRINT SETTINGS","permalink":"/docs/commands/print-settings"}}'),s=t("785893"),i=t("250065");let o={id:"print-selection",title:"PRINT SELECTION",slug:"/commands/print-selection",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," ( {",(0,s.jsx)(n.em,{children:"aTable"}),"}{;}{* | >} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to print the selection, or Default table, if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"* | >"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"* to suppress the printing dialog box, or > to not reinitialize print settings"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," prints the current selection of ",(0,s.jsx)(n.em,{children:"aTable"}),". The records are printed with the current output form of the table in the current process. ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," performs the same action as the ",(0,s.jsx)(n.strong,{children:"Print"})," menu command in the Design environment. If the selection is empty, ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," does nothing."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," displays the Print job dialog box before printing. If the user cancels the dialog box, the command is canceled and the report is not printed. You can suppress this dialog box by using either the optional asterisk (",(0,s.jsx)(n.em,{children:"*"}),") parameter or the optional \u201Cgreater than\u201D (",(0,s.jsx)(n.em,{children:">"}),") parameter:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"*"})," parameter causes a print job using the current print parameters (default parameters or those defined by the ",(0,s.jsx)(n.em,{children:"_o_PAGE SETUP"})," and/or ",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})," commands)."]}),"\n",(0,s.jsxs)(n.li,{children:["Furthermore, the ",(0,s.jsx)(n.em,{children:">"})," parameter causes a print job without reinitializing the current print parameters. This setting is useful for executing several successive calls to ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," (e.g., inside a loop) while maintaining previously set customized print parameters. For an example of the use of this parameter, refer to the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-record",children:"PRINT RECORD"})," command description."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"During printing, the output form method and/or the form\u2019s object methods are executed depending on the events that are enabled for the form and objects using the Property List window in the Design environment, as well as on the events actually occurring:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An On Header event is generated just before a header area is printed."}),"\n",(0,s.jsx)(n.li,{children:"An On Printing Detail event is generated just before a record is printed."}),"\n",(0,s.jsx)(n.li,{children:"An On Printing Break event is generated just before a break area is printed."}),"\n",(0,s.jsx)(n.li,{children:"An On Printing Footer event is generated just before a footer is printed."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can check whether ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," is printing the first header by testing ",(0,s.jsx)(n.a,{href:"/docs/commands/before-selection",children:"Before selection"})," during an On Header event. You can also check for the last footer, by testing ",(0,s.jsx)(n.a,{href:"/docs/commands/end-selection",children:"End selection"})," during an On Printing Footer event. For more information, see the description of these commands, as well as those of ",(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/level",children:"Level"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To print a sorted selection with subtotals or breaks using ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"}),", you must first sort the selection. Then, in each Break area of the report, include a variable with an object method that assigns the subtotal to the variable. You can also use statistical and arithmetical functions like ",(0,s.jsx)(n.a,{href:"/docs/commands/sum",children:"Sum"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/average",children:"Average"})," to assign values to variables. For more information, see the descriptions of ",(0,s.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,s.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Do not use the ",(0,s.jsx)(n.a,{href:"/docs/commands/page-break",children:"PAGE BREAK"})," command with the ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"})," command. ",(0,s.jsx)(n.a,{href:"/docs/commands/page-break",children:"PAGE BREAK"})," is to be used with the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["After a call to ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"}),", the OK variable is set to 1 if the printing has been completed. If the printing was interrupted, the OK variable is set to 0 (zero) (i.e., the user clicked Cancel in the printing dialog box)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," This command can be executed on 4D Server in a stored procedure. In this context:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the ",(0,s.jsx)(n.em,{children:"*"})," or ",(0,s.jsx)(n.em,{children:">"})," parameter."]}),"\n",(0,s.jsx)(n.li,{children:"In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example selects all the records in the [People] table. It then uses the ",(0,s.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," command to display the records and allows the user to highlight the records to print. Finally, it uses the selected records with the ",(0,s.jsx)(n.a,{href:"/docs/commands/use-set",children:"USE SET"})," command, and prints them with ",(0,s.jsx)(n.strong,{children:"PRINT SELECTION"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([People])\xa0// Select all records\n\xa0DISPLAY SELECTION([People];*)\xa0// Display the records\n\xa0USE SET("UserSet")\xa0// Use only records picked by user\n\xa0PRINT SELECTION([People])\xa0// Print the records that the user picked\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"_o_PAGE SETUP"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/level",children:"Level"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);