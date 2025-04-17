"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77129"],{937502:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>r,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"commands/new-log-file","title":"New log file","description":"New log file : Text","source":"@site/versioned_docs/version-20-R9/commands/new-log-file.md","sourceDirName":"commands","slug":"/commands/new-log-file","permalink":"/docs/commands/new-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-log-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"new-log-file","title":"New log file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOG FILE TO JSON","permalink":"/docs/commands/log-file-to-json"},"next":{"title":"RESTORE","permalink":"/docs/commands/restore"}}'),s=t("785893"),a=t("250065");let i={id:"new-log-file",title:"New log file",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"New log file"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Full pathname of closed log file"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Preliminary note:"})," This command only works with 4D Server. It can only be executed via the ",(0,s.jsx)(n.a,{href:"/docs/commands/execute-on-server",children:"Execute on server"})," command or in a stored procedure."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"New log file"})," command closes the current log file, renames it and creates a new one with the same name in the same location as the previous one. This command is meant to be used for setting up a backup system using a logical mirror (see the section ",(0,s.jsx)(n.em,{children:"Setting up a logical mirror"})," in the ",(0,s.jsx)(n.a,{href:"https://doc/4d.com",children:"4D Server Reference Manual"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["The command returns the full pathname (access path + name) of the log file being closed (called the \u201Csegment\u201D). This file is stored in the same location as the current log file (specified on the ",(0,s.jsx)(n.a,{href:"/docs/Backup/settings#configuration",children:"Configuration page"})," in the Backup theme of the Settings). The command does not carry out any processing (compression, segmentation) on the saved file. No dialog box appears."]}),"\n",(0,s.jsx)(n.p,{children:"The file is renamed with the current backup numbers of the database and of the log file, as shown in the following example: DatabaseName[BackupNum-LogBackupNum].journal. For instance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the MyDatabase.4DD database has been saved 4 times, the last backup file will be named MyDatabase[0004].4BK. The name of the first \u201Csegment\u201D of the log file will therefore be MyDatabase[0004-0001].journal."}),"\n",(0,s.jsx)(n.li,{children:"If the MyDatabase.4DD database has been saved 3 times and the log file has been saved 5 times since, the name of the 6th backup of the log file will be MyDatabase[0003-0006].journal."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["A log file must always be related to a data file. If you call this command just after a log file activation (without backup) using ",(0,s.jsx)(n.a,{href:"/docs/commands/select-log-file",children:(0,s.jsx)(n.code,{children:"SELECT LOG FILE"})})," or the ",(0,s.jsx)(n.a,{href:"/docs/Backup/settings#configuration",children:"Settings dialog box"}),", make sure to have a matching copy of your data file, otherwise the log file could not be integrated."]})}),"\n",(0,s.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,s.jsxs)(n.p,{children:["In the event of an error, the command generates a code that can be intercepted using the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/select-log-file",children:"SELECT LOG FILE"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var o=t(667294);let s={},a=o.createContext(s);function i(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);