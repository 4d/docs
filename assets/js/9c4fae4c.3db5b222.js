"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18601"],{354824:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/end-selection","title":"End selection","description":"End selection {( aTable )} : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/end-selection.md","sourceDirName":"commands-legacy","slug":"/commands/end-selection","permalink":"/docs/commands/end-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fend-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"end-selection","title":"End selection","slug":"/commands/end-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Displayed line number","permalink":"/docs/commands/displayed-line-number"},"next":{"title":"FIRST RECORD","permalink":"/docs/commands/first-record"}}'),r=t("785893"),s=t("250065");let d={id:"end-selection",title:"End selection",slug:"/commands/end-selection",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"End selection"})," {( ",(0,r.jsx)(n.em,{children:"aTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table for which to test if record pointer is beyond the last selected record, or Default table, if omitted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Yes (TRUE) or No (FALSE)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"End selection"})," returns TRUE when the current record pointer is beyond the last record of the current selection of ",(0,r.jsx)(n.em,{children:"aTable"}),". ",(0,r.jsx)(n.strong,{children:"End selection"})," is commonly used to check whether or not ",(0,r.jsx)(n.a,{href:"/docs/commands/next-record",children:"NEXT RECORD"})," has moved the current record pointer past the last record. If the current selection is empty, ",(0,r.jsx)(n.strong,{children:"End selection"})," returns TRUE."]}),"\n",(0,r.jsxs)(n.p,{children:["To move the current record pointer back into the selection, use ",(0,r.jsx)(n.a,{href:"/docs/commands/first-record",children:"FIRST RECORD"}),", ",(0,r.jsx)(n.a,{href:"/docs/commands/last-record",children:"LAST RECORD"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,r.jsx)(n.a,{href:"/docs/commands/previous-record",children:"PREVIOUS RECORD"})," does not move the pointer back into the selection."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"End selection"})," also returns TRUE in the last footer when a report is being printed with ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})," or from the Print menu. You can use the following code to test for the last footer and print a special footer for the last page:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Method of a form being used as output form for a summary report\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0// A footer is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0// Code for the last footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Code for a footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["This form method is used during the printing of a report. It sets the variable ",(0,r.jsx)(n.em,{children:"vFooter"})," to print in the Footer area on the last page:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// [Finances];"Summary" Form Method\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection([Finances]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vFooter:="\xa92001 Acme Corp."\xa0// Set the footer for the last page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vFooter:=""\xa0// Clear the footer for all other pages\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/before-selection",children:"Before selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/last-record",children:"LAST RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/next-record",children:"NEXT RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var o=t(667294);let r={},s=o.createContext(r);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);