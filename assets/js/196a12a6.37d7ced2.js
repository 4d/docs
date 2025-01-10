"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16081"],{312543:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/new-log-file","title":"New log file","description":"New log file  : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/new-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/new-log-file","permalink":"/docs/commands/new-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-log-file","title":"New log file","slug":"/commands/new-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOG FILE TO JSON","permalink":"/docs/commands/log-file-to-json"},"next":{"title":"RESTORE","permalink":"/docs/commands/restore"}}'),r=t("785893"),i=t("250065");let o={id:"new-log-file",title:"New log file",slug:"/commands/new-log-file",displayed_sidebar:"docs"},l=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New log file"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Full pathname of closed log file"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Preliminary note:"})," This command only works with 4D Server. It can only be executed via the ",(0,r.jsx)(n.a,{href:"/docs/commands/execute-on-server",children:"Execute on server"})," command or in a stored procedure."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"New log file"})," command closes the current log file, renames it and creates a new one with the same name in the same location as the previous one. This command is meant to be used for setting up a backup system using a logical mirror (see the section \u201C",(0,r.jsx)(n.em,{children:"Setting up a logical mirror"}),"\u201D in the 4D Server Reference Manual)."]}),"\n",(0,r.jsx)(n.p,{children:"The command returns the full pathname (access path + name) of the log file being closed (called the \u201Csegment\u201D). This file is stored in the same location as the current log file (specified on the Configuration page in the Backup theme of the Preferences). The command does not carry out any processing (compression, segmentation) on the saved file. No dialog box appears."}),"\n",(0,r.jsx)(n.p,{children:"The file is renamed with the current backup numbers of the database and of the log file, as shown in the following example: DatabaseName[BackupNum-LogBackupNum].journal. For instance:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the MyDatabase.4DD database has been saved 4 times, the last backup file will be named MyDatabase[0004].4BK. The name of the first \u201Csegment\u201D of the log file will therefore be MyDatabase[0004-0001].journal."}),"\n",(0,r.jsx)(n.li,{children:"If the MyDatabase.4DD database has been saved 3 times and the log file has been saved 5 times since, the name of the 6th backup of the log file will be MyDatabase[0003-0006].journal."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,r.jsxs)(n.p,{children:["In the event of an error, the command generates a code that can be intercepted using the ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"926"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);