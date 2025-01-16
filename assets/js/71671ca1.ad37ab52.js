"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67792"],{520782:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/before-selection","title":"Before selection","description":"Before selection {( aTable )} : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/before-selection.md","sourceDirName":"commands-legacy","slug":"/commands/before-selection","permalink":"/docs/20-R7/commands/before-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbefore-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"before-selection","title":"Before selection","slug":"/commands/before-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPLY TO SELECTION","permalink":"/docs/20-R7/commands/apply-to-selection"},"next":{"title":"CREATE SELECTION FROM ARRAY","permalink":"/docs/20-R7/commands/create-selection-from-array"}}'),s=r("785893"),o=r("250065");let c={id:"before-selection",title:"Before selection",slug:"/commands/before-selection",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before selection"})," {( ",(0,s.jsx)(n.em,{children:"aTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to test if record pointer is before the first selected record, or Default table, if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Yes (TRUE) or No (FALSE)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before selection"})," returns TRUE when the current record pointer is before the first record of the current selection of ",(0,s.jsx)(n.em,{children:"table"}),".is commonly used to check whether or not ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/previous-record",children:"PREVIOUS RECORD"})," has moved the current record pointer before the first record. If the current selection is empty, ",(0,s.jsx)(n.strong,{children:"Before selection"})," returns TRUE."]}),"\n",(0,s.jsxs)(n.p,{children:["To move the current record pointer back into the selection, use ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/first-record",children:"FIRST RECORD"}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/last-record",children:"LAST RECORD"})," or ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/next-record",children:"NEXT RECORD"})," does not move the pointer back into the selection."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before selection"})," also returns TRUE in the first header when a report is being printed with ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/print-selection",children:"PRINT SELECTION"})," or from the Print menu. You can use the following code to test for the first header and print a special header for the first page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Method of a form being used as output form for a summary report\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0// A header area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0// Code for the first break header goes here\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["This form method is used during the printing of a report. It sets a variable, ",(0,s.jsx)(n.em,{children:"vTitle"}),", to print in the Header area on the first page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// [Finances];"Summary" Form Method\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection([Finances))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitle:="Corporate Report 1997"\xa0// Set the title for the first page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitle:=""\xa0// Clear the title for all other pages\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/end-selection",children:"End selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/first-record",children:"FIRST RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/previous-record",children:"PREVIOUS RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"198"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var t=r(667294);let s={},o=t.createContext(s);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);