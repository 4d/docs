"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57955"],{690184:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/backup","title":"BACKUP","description":"BACKUP","source":"@site/versioned_docs/version-20-R9/commands-legacy/backup.md","sourceDirName":"commands-legacy","slug":"/commands/backup","permalink":"/docs/commands/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"backup","title":"BACKUP","slug":"/commands/backup","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Backup","permalink":"/docs/commands/theme/Backup"},"next":{"title":"BACKUP INFO","permalink":"/docs/commands/backup-info"}}'),a=t("785893"),r=t("250065");let i={id:"backup",title:"BACKUP",slug:"/commands/backup",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"BACKUP"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(n.table,{children:(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Does not require any parameters"}),(0,a.jsx)(n.th,{})]})})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The BACKUP command starts the backup of the database using the current backup settings. No confirmation dialog is displayed; however, a progress bar appears on screen."}),"\n",(0,a.jsxs)(n.p,{children:["Backup settings are set in the Database Settings. They are stored in the ",(0,a.jsx)(n.em,{children:"backup.4DSettings"})," file in the database Settings folder or in the data folder (see ",(0,a.jsx)(n.em,{children:"Configuration and trace files"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["The BACKUP command calls the ",(0,a.jsx)(n.em,{children:"On Backup Startup Database Method"})," at the beginning of its execution and the ",(0,a.jsx)(n.em,{children:"On Backup Shutdown Database Method"})," at the end of its execution."]}),"\n",(0,a.jsx)(n.p,{children:"Because of this mechanism, the command should not be called from one of these database methods."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"4D Server:"})," When called from a client machine, BACKUP is considered as a stored procedure; it is still executed on the server."]}),"\n",(0,a.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,a.jsx)(n.p,{children:"If the backup is performed correctly, the system variable OK is set to 1; otherwise, it is set to 0."}),"\n",(0,a.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,a.jsxs)(n.p,{children:["If an incident occurs during backup, information about the incident is written in the backup log and the top-level error is sent only to the ",(0,a.jsx)(n.a,{href:"/docs/commands/on-backup-shutdown-database-method",children:"On Backup Shutdown database method"}),". It is therefore particularly important to use this database method in order to be able to manage back-up related errors using programming."]}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/backup-info",children:"BACKUP INFO"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"On Backup Startup Database Method"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/restore",children:"RESTORE"})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"887"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifies variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);