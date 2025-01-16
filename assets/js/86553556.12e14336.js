"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34918"],{76818:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/print-settings","title":"PRINT SETTINGS","description":"PRINT SETTINGS {( dialType )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/print-settings.md","sourceDirName":"commands-legacy","slug":"/commands/print-settings","permalink":"/docs/20-R7/commands/print-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-settings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-settings","title":"PRINT SETTINGS","slug":"/commands/print-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT SELECTION","permalink":"/docs/20-R7/commands/print-selection"},"next":{"title":"Print settings to BLOB","permalink":"/docs/20-R7/commands/print-settings-to-blob"}}'),i=s("785893"),r=s("250065");let d={id:"print-settings",title:"PRINT SETTINGS",slug:"/commands/print-settings",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PRINT SETTINGS"})," {( ",(0,i.jsx)(n.em,{children:"dialType"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dialType"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Dialog box to be displayed"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PRINT SETTINGS"})," displays a printing dialog box. This command must be called before a series of ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"})," commands or the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/open-printing-job",children:"OPEN PRINTING JOB"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"dialType"})," parameter can be used to configure the display of the printing dialog box. You can use one of the following constants from the ",(0,i.jsx)(n.em,{children:"Print Options"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Page setup dialog"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Display the Page setup dialog box"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Print dialog"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Display the Print job dialog box (default if omitted)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The Print Job dialog box contains a ",(0,i.jsx)(n.strong,{children:"Preview on Screen"})," check box that allows the user to preview their print job. You can preset or reset this option by calling ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-print-preview",children:"SET PRINT PREVIEW"})," before calling ",(0,i.jsx)(n.strong,{children:"PRINT SETTINGS"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["See example for the command ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(n.p,{children:"If the user clicks OK in both dialog boxes, the OK system variable is set to 1. Otherwise, the OK system variable is set to 0."}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/open-printing-job",children:"OPEN PRINTING JOB"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/page-break",children:"PAGE BREAK"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/print-form",children:"Print form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-print-preview",children:"SET PRINT PREVIEW"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"106"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);