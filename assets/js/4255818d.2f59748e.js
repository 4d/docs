"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90571"],{250743:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/select-log-file","title":"SELECT LOG FILE","description":"SELECT LOG FILE ( logFile )","source":"@site/versioned_docs/version-20-R7/commands-legacy/select-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/select-log-file","permalink":"/docs/commands/select-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-log-file","title":"SELECT LOG FILE","slug":"/commands/select-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE INFO","permalink":"/docs/commands/restore-info"},"next":{"title":"BLOB","permalink":"/docs/category/blob"}}'),r=t("785893"),l=t("250065");let i={id:"select-log-file",title:"SELECT LOG FILE",slug:"/commands/select-log-file",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function d(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SELECT LOG FILE"})," ( ",(0,r.jsx)(n.em,{children:"logFile"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"logFile"}),(0,r.jsx)(n.td,{children:"*, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Name of the log file or "*" for closing the current log file'})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SELECT LOG FILE"})," command creates, or closes the log file according to the value you pass in ",(0,r.jsx)(n.em,{children:"logFile"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"logFile"}),', pass the name or the full pathname of the log file to be created. If you only pass a name, the file will be created in the "Logs" folder of the database located next to the database structure file.']}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an empty string in ",(0,r.jsx)(n.em,{children:"logFile"}),", ",(0,r.jsx)(n.strong,{children:"SELECT LOG FILE"})," presents an Save File dialog box, allowing the user to choose the name and location of the log file to be created. If the file is created correctly, the OK variable is set to 1. Otherwise, if the user clicks Cancel or if the log file could not be created, OK is set to 0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The new log file is not generated immediately after execution of the command, but rather after the next backup (the parameter is kept in the data file and will be taken into account even if the database is closed in the meantime). You can call the ",(0,r.jsx)(n.a,{href:"/docs/commands/backup",children:"BACKUP"})," command to trigger the creation of the log file."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass ",(0,r.jsx)(n.em,{children:'"*"'})," in ",(0,r.jsx)(n.em,{children:"logFile"}),", ",(0,r.jsx)(n.strong,{children:"SELECT LOG FILE"})," closes the current log file for the database. The OK variable is set to 1 when the log file is closed."]}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.strong,{children:"SELECT LOG FILE"})," to create a log file when a full backup has not yet been performed and the data file already contains records, 4D then generates an error ",(0,r.jsx)(n.em,{children:"-4447,"})," which you can intercept with an ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method."]}),"\n",(0,r.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(n.p,{children:"OK is set to 1 if the log file is correctly created, or closed."}),"\n",(0,r.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,r.jsxs)(n.p,{children:["An error -4447 is generated if the operation cannot be performed because the database needs to be backed up. You can intercept the error with an ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," method."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"345"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);