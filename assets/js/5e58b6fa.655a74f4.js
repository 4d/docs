"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88415"],{522363:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-current-printer","title":"Get current printer","description":"Get current printer  : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-current-printer.md","sourceDirName":"commands-legacy","slug":"/commands/get-current-printer","permalink":"/docs/commands/get-current-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-current-printer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-current-printer","title":"Get current printer","slug":"/commands/get-current-printer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE PRINTING JOB","permalink":"/docs/commands/close-printing-job"},"next":{"title":"Get print marker","permalink":"/docs/commands/get-print-marker"}}'),s=r("785893"),i=r("250065");let d={id:"get-current-printer",title:"Get current printer",slug:"/commands/get-current-printer",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get current printer"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Name of the current printer"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Get current printer"})," command returns the name of the current printer defined in the 4D application. By default, on start-up of 4D, the current printer is the printer defined in the system."]}),"\n",(0,s.jsx)(n.p,{children:"If the current printer is managed using a print server (spooler), the complete access path (under Windows) or the name of the spooler (under macOS) is returned."}),"\n",(0,s.jsxs)(n.p,{children:["To obtain the list of available printers as well as additional information, use the ",(0,s.jsx)(n.a,{href:"/docs/commands/printers-list",children:"PRINTERS LIST"})," command. To modify the current printer, use the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When the Generic PDF driver constant is used with ",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"}),", ",(0,s.jsx)(n.a,{href:"/docs/commands/get-current-printer",children:"Get current printer"}),' returns "_4d_pdf_printer" or the actual name of the PDF driver.']}),"\n",(0,s.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,s.jsx)(n.p,{children:"If no printer is installed, an error is generated."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/printers-list",children:"PRINTERS LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"788"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);