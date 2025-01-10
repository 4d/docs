"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67432"],{132866:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/subtotal","title":"Subtotal","description":"Subtotal ( data {; pageBreak} ) : Real","source":"@site/versioned_docs/version-20-R7/commands-legacy/subtotal.md","sourceDirName":"commands-legacy","slug":"/commands/subtotal","permalink":"/docs/commands/subtotal","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsubtotal.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"subtotal","title":"Subtotal","slug":"/commands/subtotal","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PRINTABLE MARGIN","permalink":"/docs/commands/set-printable-margin"},"next":{"title":"Process (Communications)","permalink":"/docs/category/process-communications"}}'),t=r("785893"),a=r("250065");let o={id:"subtotal",title:"Subtotal",slug:"/commands/subtotal",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Activating Break Processing in Form Reports",id:"activating-break-processing-in-form-reports",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Subtotal"})," ( ",(0,t.jsx)(n.em,{children:"data"})," {; ",(0,t.jsx)(n.em,{children:"pageBreak"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Numeric field or variable to return subtotal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pageBreak"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Break level for which to cause a page break"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Subtotal of data"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Subtotal"})," returns the subtotal for ",(0,t.jsx)(n.em,{children:"data"})," for the current or last break level. ",(0,t.jsx)(n.strong,{children:"Subtotal"})," works only when a sorted selection is being printed with ",(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})," or when printing using Print in the Design environment. The ",(0,t.jsx)(n.em,{children:"data"})," parameter must be of type real, integer, or long integer. Assign the result of the ",(0,t.jsx)(n.strong,{children:"Subtotal"})," function to a variable placed in the Break area of the form."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," You ",(0,t.jsx)(n.strong,{children:"must"})," execute ",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"})," before every form report for which you want to do break processing and calculate subtotals. See discussion at the end of the description of this command."]}),"\n",(0,t.jsxs)(n.p,{children:["The second, optional, argument to ",(0,t.jsx)(n.strong,{children:"Subtotal"})," is used to cause page breaks during printing. If ",(0,t.jsx)(n.em,{children:"pageBreak"})," is 0, ",(0,t.jsx)(n.strong,{children:"Subtotal"})," does not issue a page break. If ",(0,t.jsx)(n.em,{children:"pageBreak"})," equals 1, ",(0,t.jsx)(n.strong,{children:"Subtotal"})," issues a page break for each level 1 break. If ",(0,t.jsx)(n.em,{children:"pageBreak"})," equals 2, ",(0,t.jsx)(n.strong,{children:"Subtotal"})," issues a page break for each level 1 and level 2 break, and so on."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," If you execute ",(0,t.jsx)(n.strong,{children:"Subtotal"})," from within an output form displayed at the screen, an error will be generated, triggering an infinite loop of updates between the form and the error window. To get out of this loop, press Alt+Shift (Windows) or Option-Shift (Macintosh) when you click on the Abort button in the Error window (you may have to do so several times). This temporarily stops the updates for the form\u2019s window. Select another form as the output form so the error will occur again. Go back to the Design Environment and isolate the call to ",(0,t.jsx)(n.strong,{children:"Subtotal"})," into a test ",(0,t.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),"= On Printing Break if you use the form both for display and printing."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following example is a one-line object method in a Break area of a form (B0, the area above the B0 marker). The ",(0,t.jsx)(n.em,{children:"vSalary"})," variable is placed in the Break area. The variable is assigned the subtotal of the Salary field for this break level. Break processing must have been activated beforehand using the ",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"})," commands."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vSalary:=Subtotal([Employees]Salary)\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.p,{children:"For more information about designing forms with header and break areas, see the 4D Design Reference manual."}),"\n",(0,t.jsx)(n.h4,{id:"activating-break-processing-in-form-reports",children:"Activating Break Processing in Form Reports"}),"\n",(0,t.jsxs)(n.p,{children:["In order to generate reports with breaks, break processing in form reports can be activated by calling the ",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"})," commands."]}),"\n",(0,t.jsxs)(n.p,{children:["You must execute both of these commands before printing a form report. The ",(0,t.jsx)(n.strong,{children:"Subtotal"})," function is still required in order to display values on a form. You must sort on at least as many levels as you need to break on."]}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),", the process to print a report is typically like this:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Select the records to be printed."}),"\n",(0,t.jsxs)(n.li,{children:["Sort the records using ",(0,t.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),". Sort on at least the same number of levels as breaks."]}),"\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Print the report using ",(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Subtotal"})," function is necessary in order to display values on a form."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/level",children:"Level"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"97"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},a=s.createContext(t);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);