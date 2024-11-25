"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7513"],{874581:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>d,default:()=>l,assets:()=>c,toc:()=>i,frontMatter:()=>o});var a=JSON.parse('{"id":"commands-legacy/on-backup-shutdown-database-method","title":"On Backup Shutdown database method","description":"$1 -> On Backup Shutdown database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-backup-shutdown-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-backup-shutdown-database-method","permalink":"/docs/es/commands/on-backup-shutdown-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-backup-shutdown-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-backup-shutdown-database-method","title":"On Backup Shutdown database method","slug":"/commands/on-backup-shutdown-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Database Methods","permalink":"/docs/es/category/database-methods"},"next":{"title":"On Backup Startup database method","permalink":"/docs/es/commands/on-backup-startup-database-method"}}'),s=n("785893"),r=n("250065");let o={id:"on-backup-shutdown-database-method",title:"On Backup Shutdown database method",slug:"/commands/on-backup-shutdown-database-method",displayed_sidebar:"docs"},d=void 0,c={},i=[];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"$1 -> On Backup Shutdown database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$1"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"0 = backup executed correctly; other value = error, interrupted by user or code returned by On Backup Startup"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsxs)(t.p,{children:["The On Backup Shutdown database method is called every time a database backup ends. The reasons for the stoppage of a backup can be the end of the copy, user interruption or an error.",(0,s.jsx)(t.br,{}),"\nThis concerns all 4D environments: 4D (all modes), 4D Server as well as 4D applications compiled and merged with 4D Volume Desktop."]}),"\n",(0,s.jsxs)(t.p,{children:["The On Backup Shutdown database method allows verifying that the backup was executed correctly. It receives, in the ",(0,s.jsx)(t.em,{children:"$1"})," parameter, a value representing the status of the backup once completed:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the backup was executed correctly, ",(0,s.jsx)(t.em,{children:"$1"})," equals 0."]}),"\n",(0,s.jsxs)(t.li,{children:["If the backup was interrupted by the user or following an error, ",(0,s.jsx)(t.em,{children:"$1"})," is different from 0.\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If the backup was stopped by the ",(0,s.jsx)(t.em,{children:"On Backup Startup Database Method"})," (",(0,s.jsx)(t.em,{children:"$0"})," # 0), ",(0,s.jsx)(t.em,{children:"$1"})," gets the value actually returned in the ",(0,s.jsx)(t.em,{children:"$0"})," parameter. This allows you to implement a customized error management system."]}),"\n",(0,s.jsxs)(t.li,{children:["If the backup was stopped due to an error, the error code is returned in ",(0,s.jsx)(t.em,{children:"$1"}),".",(0,s.jsx)(t.br,{}),"\nIn any case, you can get information about the error using the ",(0,s.jsx)(t.a,{href:"backup-info.md",children:"BACKUP INFO"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": You must declare the ",(0,s.jsx)(t.em,{children:"$1"})," parameter (longint) in the database method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $1 : Integer\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It is important to note that in the case of an error during backup (disk full, support unavailable, etc.), the information related to the error is only displayed in the 4D Server monitor or in the MSC, and copied into the backup log. No alert dialog box appears and the ",(0,s.jsx)(t.em,{children:"error"})," variable is not modified. If you want to be able to notify the administrator that an error has occurred, particularly in the context of an application running in client/server mode, you will need to use the ",(0,s.jsx)(t.strong,{children:"On Backup Shutdown database method"}),"."]})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var a=n(667294);let s={},r=a.createContext(s);function o(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);