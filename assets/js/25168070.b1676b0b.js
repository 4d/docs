"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53520"],{483278:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/open-printing-job","title":"OPEN PRINTING JOB","description":"OPEN PRINTING JOB","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-printing-job.md","sourceDirName":"commands-legacy","slug":"/commands/open-printing-job","permalink":"/docs/20-R7/commands/open-printing-job","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-printing-job.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-printing-job","title":"OPEN PRINTING JOB","slug":"/commands/open-printing-job","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Level","permalink":"/docs/20-R7/commands/level"},"next":{"title":"PAGE BREAK","permalink":"/docs/20-R7/commands/page-break"}}'),i=t("785893"),r=t("250065");let o={id:"open-printing-job",title:"OPEN PRINTING JOB",slug:"/commands/open-printing-job",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"OPEN PRINTING JOB"})}),"\n\n\n\n\n\n\n\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Does not require any parameters"}),(0,i.jsx)(n.th,{})]})})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OPEN PRINTING JOB"})," command opens a print job and stacks all the subsequent printing orders there until the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"})," command is called. This command lets you control the print jobs and, more particularly, ensure that no other unexpected print job can be inserted into a printing sequence."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OPEN PRINTING JOB"})," command can be used with all the 4D printing commands, the quick report commands, and the printing commands of 4D Write Pro and 4D View Pro."]}),"\n",(0,i.jsx)(n.p,{children:"The print job is local to the process, each process has its own printing settings (print options,current printer,etc.). Several print jobs can be open at the same time in 4D."}),"\n",(0,i.jsxs)(n.p,{children:["You must call the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"})," command to terminate the print job and send the print document to the printer. If you omit this command, the print document will remain in the stack."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OPEN PRINTING JOB"})," uses the current print settings (default settings or set using the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-print-option",children:"SET PRINT OPTION"})," command). The commands that modify the print settings must be called before ",(0,i.jsx)(n.strong,{children:"OPEN PRINTING JOB"}),", otherwise an error is generated (exception: the Orientation option can be called by the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-print-option",children:"SET PRINT OPTION"})," command within a print job)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Compatibility Note:"})," Starting with 4D v20 R4, printing jobs are non-blocking in new projects. For more information, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/settings/compatibility",children:"Non-blocking printing option"})," documentation in the Compatibility settings."]}),"\n",(0,i.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsx)(n.p,{children:"The OK system variable is set to 1 if the print job has been successfully open. Otherwise, it is set to 0, for example in the followiing cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the print job has been canceled by the user"}),"\n",(0,i.jsx)(n.li,{children:"on Windows, the selected print preview format is not available"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/close-printing-job",children:"CLOSE PRINTING JOB"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"995"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);