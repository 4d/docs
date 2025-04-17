"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64999"],{730762:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/printing-page","title":"Printing page","description":"Printing page  : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/printing-page.md","sourceDirName":"commands-legacy","slug":"/commands/printing-page","permalink":"/docs/20-R8/commands/printing-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprinting-page.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"printing-page","title":"Printing page","slug":"/commands/printing-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINTERS LIST","permalink":"/docs/20-R8/commands/printers-list"},"next":{"title":"SET CURRENT PRINTER","permalink":"/docs/20-R8/commands/set-current-printer"}}'),i=t("785893"),s=t("250065");let a={id:"printing-page",title:"Printing page",slug:"/commands/printing-page",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Printing page"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Page number of page currently being printed"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Printing page"})," returns the printing page number. It can be used only when you are printing with ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/print-selection",children:"PRINT SELECTION"})," or the Print menu in the Design environment."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["The following example changes the position of the page numbers on a report so that the report can be reproduced in a double-sided format. The form for the report has two variables that display page numbers. A variable in the lower-left corner (",(0,i.jsx)(n.em,{children:"vLeftPageNum"}),") will print the even page numbers. A variable in the lower-right corner (",(0,i.jsx)(n.em,{children:"vRightPageNum"}),") will print the odd page numbers. The example tests for even pages, then clears and sets the appropriate variables:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((Printing page% 2)=0)\xa0// Modulo is 0, it is an even page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLeftPageNum:=String(Printing page)\xa0// Set the left page number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vRightPageNum:=""\xa0// Clear the right page number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0// Otherwise it is an odd page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLeftPageNum:=""\xa0// Clear the left page number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vRightPageNum:=String(Printing page)\xa0// Set the right page number\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/print-selection",children:"PRINT SELECTION"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"275"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var r=t(667294);let i={},s=r.createContext(i);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);