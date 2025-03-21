"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75603"],{751360:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands/select-log-file","title":"SELECT LOG FILE","description":"SELECT LOG FILE ( logFile )SELECT LOG FILE ( * )","source":"@site/versioned_docs/version-20-R8/commands/select-log-file.md","sourceDirName":"commands","slug":"/commands/select-log-file","permalink":"/docs/commands/select-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fselect-log-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"select-log-file","title":"SELECT LOG FILE","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE INFO","permalink":"/docs/commands/restore-info"},"next":{"title":"BLOB","permalink":"/docs/commands/theme/BLOB"}}'),l=t("785893"),i=t("250065");let r={id:"select-log-file",title:"SELECT LOG FILE",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SELECT LOG FILE"})," ( ",(0,l.jsx)(n.em,{children:"logFile"})," )",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:"SELECT LOG FILE"})," ( * )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"logFile"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Name of the log file"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Close the current log file"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"SELECT LOG FILE"})," command creates, or closes the log file according to the value you pass in parameter."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"logFile"}),', pass the name or the full pathname of the log file to be created. If you only pass a name, the file will be created in the "Logs" folder of the database located next to the database structure file.']}),"\n",(0,l.jsxs)(n.p,{children:["If you pass an empty string in ",(0,l.jsx)(n.em,{children:"logFile"}),", ",(0,l.jsx)(n.strong,{children:"SELECT LOG FILE"})," presents an Save File dialog box, allowing the user to choose the name and location of the log file to be created. If the file is created correctly, the OK variable is set to 1. Otherwise, if the user clicks Cancel or if the log file could not be created, OK is set to 0."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," The new log file is not generated immediately after execution of the command, but after the next backup (the parameter is kept in the data file and will be taken into account even if the database is closed in the meantime) or a call to the ",(0,l.jsx)(n.a,{href:"/docs/commands/new-log-file",children:"New log file"})," command. You can call the ",(0,l.jsx)(n.a,{href:"/docs/commands/backup",children:"BACKUP"})," command to trigger the creation of the log file."]}),"\n",(0,l.jsxs)(n.p,{children:["If you pass ",(0,l.jsx)(n.em,{children:"*"})," in ",(0,l.jsx)(n.em,{children:"logFile"}),", ",(0,l.jsx)(n.strong,{children:"SELECT LOG FILE"})," closes the current log file for the database. The OK variable is set to 1 when the log file is closed."]}),"\n",(0,l.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,l.jsx)(n.p,{children:"OK is set to 1 if the log file is correctly created, or closed."}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/new-log-file",children:"New log file"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"345"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifies variables"}),(0,l.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);