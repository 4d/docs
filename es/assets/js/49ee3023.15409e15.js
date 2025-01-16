"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84977"],{329423:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>u,contentTitle:()=>r});var n=JSON.parse('{"id":"commands-legacy/on-backup-startup-database-method","title":"On Backup Startup database method","description":"On Backup Startup database method  -> $0","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-backup-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-backup-startup-database-method","permalink":"/docs/es/commands/on-backup-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-backup-startup-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-backup-startup-database-method","title":"On Backup Startup database method","slug":"/commands/on-backup-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Shutdown database method","permalink":"/docs/es/commands/on-backup-shutdown-database-method"},"next":{"title":"On Drop database method","permalink":"/docs/es/commands/on-drop-database-method"}}'),s=a("785893"),d=a("250065");let o={id:"on-backup-startup-database-method",title:"On Backup Startup database method",slug:"/commands/on-backup-startup-database-method",displayed_sidebar:"docs"},r=void 0,c={},u=[];function i(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"On Backup Startup database method"}),"  -> $0"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$0"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"0 = backup can be launched; value other than 0 = backup not authorized"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"On Backup Startup database method"})," is called every time a database backup is about to start (manual backup, scheduled automatic backup, or using the ",(0,s.jsx)(t.a,{href:"/docs/es/commands/backup",children:"BACKUP"})," command).",(0,s.jsx)(t.br,{}),"\nThis concerns all 4D environments: 4D (all modes), 4D Server and databases merged with 4D Volume Desktop."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"On Backup Startup database method"}),"  allows verifying that the backup started. In this method, you should return a value that authorizes or refuses the backup in the $0 parameter:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If $0 = 0, the backup can be launched."}),"\n",(0,s.jsxs)(t.li,{children:["If $0 # 0, the backup is not authorized. The operation is cancelled and an error is returned. You can get the error using the ",(0,s.jsx)(t.a,{href:"/docs/es/commands/backup-info",children:"BACKUP INFO"})," command."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can use this database method to verify backup execution conditions (user, date of the last backup, etc.)."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," You must declare the ",(0,s.jsx)(t.em,{children:"$0"})," parameter (longint) in the database method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $0 : Integer.\n"})})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return o}});var n=a(667294);let s={},d=n.createContext(s);function o(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);