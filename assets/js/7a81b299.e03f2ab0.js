"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90872"],{75267:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/check-log-file","title":"CHECK LOG FILE","description":"CHECK LOG FILE","source":"@site/versioned_docs/version-20-R7/commands-legacy/check-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/check-log-file","permalink":"/docs/20-R7/commands/check-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcheck-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"check-log-file","title":"CHECK LOG FILE","slug":"/commands/check-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BACKUP INFO","permalink":"/docs/20-R7/commands/backup-info"},"next":{"title":"INTEGRATE MIRROR LOG FILE","permalink":"/docs/20-R7/commands/integrate-mirror-log-file"}}'),i=t("785893"),s=t("250065");let o={id:"check-log-file",title:"CHECK LOG FILE",slug:"/commands/check-log-file",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let n={a:"a",br:"br",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CHECK LOG FILE"})}),"\n\n\n\n\n\n\n\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Does not require any parameters"}),(0,i.jsx)(n.th,{})]})})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"CHECK LOG FILE"})," command displays the dialog box for viewing the current log file of the database (which can also be accessed via the Maintenance Security Center window):"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(644295).Z+"",width:"802",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:["This dialog box includes the ",(0,i.jsx)(n.strong,{children:"Rollback"})," button that can be used to cancel operations carried out on the data of the database. For more information about this dialog box, please refer to the Design Reference manual of 4D."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Since the rollback function is relatively powerful, it is recommended that access to the CHECK LOG FILE command be restricted to the database administrators."]}),"\n",(0,i.jsx)(n.p,{children:"This command can only be used in the context of single-user applications. More particularly, it allows access to the rollback function from 4D Volume Desktop applications (applications with no Design mode). If it is called within a client/server application, the command has no effect and the error 1421 is returned."}),"\n",(0,i.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If this command is executed in a database operating without a log file, it does nothing and the error 1403 is returned."}),"\n",(0,i.jsxs)(n.li,{children:["If this command is executed in a client/server database, it does nothing and the error 1421 is returned.",(0,i.jsx)(n.br,{}),"\nYou can intercept these errors using an error-handling method installed with the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Backup Manager Errors (1401 -> 1421)"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/restore",children:"RESTORE"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"799"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},644295:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4835044.en-c03a839e618e55b8248c030086ee38d9.png"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let i={},s=r.createContext(i);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);