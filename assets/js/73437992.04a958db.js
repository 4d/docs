"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43799"],{991912:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/page-break","title":"PAGE BREAK","description":"PAGE BREAK {( * | > )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/page-break.md","sourceDirName":"commands-legacy","slug":"/commands/page-break","permalink":"/docs/commands/page-break","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpage-break.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"page-break","title":"PAGE BREAK","slug":"/commands/page-break","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN PRINTING JOB","permalink":"/docs/commands/open-printing-job"},"next":{"title":"Print form","permalink":"/docs/commands/print-form"}}'),s=t("785893"),i=t("250065");let o={id:"page-break",title:"PAGE BREAK",slug:"/commands/page-break",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," {( * | > )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"* | >"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"* Cancel printing job started with Print form, or > Force one printing job"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," triggers the printing of the data that has been sent to the printer and ejects the page. ",(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," is used with ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})," (in the context of the On Printing Detail form event) to force page breaks and to print the last page created in memory. Do not use ",(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," with the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})," command. Instead, use ",(0,s.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," with the optional parameter to generate page breaks."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"*"})," and ",(0,s.jsx)(n.em,{children:">"})," parameters are both optional."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"*"})," parameter allows you to cancel a print job started with the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})," command. Executing this command immediately stops the print job in progress."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Under Windows, this mechanism can be disrupted by the spooling properties of the print server. If the printer is configured to start printing immediately, cancelling will not be effective. For the ",(0,s.jsx)(n.strong,{children:"PAGE BREAK"}),'(*) command to operate correctly, it is preferable to choose the "Start printing after last page is spooled" property for the printer.']}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:">"})," parameter modifies the way in which the ",(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," command behaves. This syntax has two effects:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It holds the print job open until the ",(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," command is executed again without a parameter."]}),"\n",(0,s.jsxs)(n.li,{children:["It gives priority to the print job. No other printing can take place until the print job is finished.",(0,s.jsx)(n.br,{}),"\nThe second option is particularly useful when used with a spooled print job. The > parameter guarantees that the print job will be spooled to one file. This will reduce printing time."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When screen printing, if the user clicks on Cancel in the print preview dialog box, the ",(0,s.jsx)(n.strong,{children:"PAGE BREAK"})," command sets the system variable OK to 0."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["See example for the ",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the example of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-print-marker",children:"SET PRINT MARKER"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/print-form",children:"Print form"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);