"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22410"],{621730:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/print-record","title":"PRINT RECORD","description":"PRINT RECORD ( {;}{* | >} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/print-record.md","sourceDirName":"commands-legacy","slug":"/commands/print-record","permalink":"/docs/commands/print-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print-record","title":"PRINT RECORD","slug":"/commands/print-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT OPTION VALUES","permalink":"/docs/commands/print-option-values"},"next":{"title":"PRINT SELECTION","permalink":"/docs/commands/print-selection"}}'),s=r("785893"),i=r("250065");let o={id:"print-record",title:"PRINT RECORD",slug:"/commands/print-record",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT RECORD"})," ( {",(0,s.jsx)(n.em,{children:"aTable"}),"}{;}{* | >} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to print the current record or Default table if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"* | >"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"* to suppress the printing dialog box, or > to not reinitialize print settings"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PRINT RECORD"})," prints the current record of ",(0,s.jsx)(n.em,{children:"aTable"}),", without modifying the current selection. The current output form is used for printing. If there is no current record for ",(0,s.jsx)(n.em,{children:"aTable"}),", ",(0,s.jsx)(n.strong,{children:"PRINT RECORD"})," does nothing."]}),"\n",(0,s.jsxs)(n.p,{children:["You can print subforms with the ",(0,s.jsx)(n.strong,{children:"PRINT RECORD"})," command. This is not possible with ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If there are modifications to the record that have not been saved, this command prints the modified field values, not the field values located on disk."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.strong,{children:"PRINT RECORD"})," displays the Print job dialog box before printing. If the user cancels the dialog box, the command is canceled and the record is not printed. You can suppress this dialog box by using either the optional asterisk (",(0,s.jsx)(n.em,{children:"*"}),") parameter or the optional \u201Cgreater than\u201D (",(0,s.jsx)(n.em,{children:">"}),") parameter:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"*"})," parameter causes a print job using the current print parameters (default parameters or those defined by the ",(0,s.jsx)(n.em,{children:"_o_PAGE SETUP"})," and/or ",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-option",children:"SET PRINT OPTION"})," commands)."]}),"\n",(0,s.jsxs)(n.li,{children:["Furthermore, the ",(0,s.jsx)(n.em,{children:">"})," parameter causes a print job without reinitializing the current print parameters. This setting is useful for executing several successive calls to ",(0,s.jsx)(n.strong,{children:"PRINT RECORD"})," (e.g. inside a loop) while maintaining previously set customized print parameters."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," This command can be executed on 4D Server in a stored procedure. In this context:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure that no dialog box appears on the server machine (except for a specific requirement). To do this, it is necessary to call the command with the ",(0,s.jsx)(n.em,{children:"*"})," or ",(0,s.jsx)(n.em,{children:">"})," parameter."]}),"\n",(0,s.jsx)(n.li,{children:"In the case of a problem concerning the printer (out of paper, printer disconnected, etc.), no error message is generated."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Do not use the ",(0,s.jsx)(n.a,{href:"/docs/commands/page-break",children:"PAGE BREAK"})," command with ",(0,s.jsx)(n.strong,{children:"PRINT RECORD"}),". ",(0,s.jsx)(n.a,{href:"/docs/commands/page-break",children:"PAGE BREAK"})," is exclusively reserved for use in combination with the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["The following example prints the current record of the [Invoices] table. The code is contained in the object method of a ",(0,s.jsx)(n.strong,{children:"Print"})," button on the input form. When the user clicks the button, the record is printed using an output form designed for this purpose."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Invoices];"Print One From Data Entry")\xa0// Select the right output form for printing\n\xa0PRINT RECORD([Invoices];*)\xa0// Print Invoices as it is (without showing the printing dialog boxes)\n\xa0FORM SET OUTPUT([Invoices];"Standard Output")\xa0// Restore the previous output form\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["The following example prints the same current record in two different forms. The code is contained in the object method of a ",(0,s.jsx)(n.strong,{children:"Print"})," button on the input form. You want to set customized print parameters and then use them in the two forms."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0PRINT SETTINGS\xa0//User defines print parameters\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Employees];"Detailed")\xa0//Use the first print form\n\xa0\xa0\xa0\xa0PRINT RECORD([Employees];>)\xa0//Print using user-defined parameters\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Employees];"Simple")\xa0//Use the second print form\n\xa0\xa0\xa0\xa0PRINT RECORD([Employees];>)\xa0//Print using user-defined parameters\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Employees];"Output")\xa0//Restore default output form\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"71"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);