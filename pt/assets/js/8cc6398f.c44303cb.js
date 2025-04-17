"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59953"],{885985:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>u,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/on-backup-startup-database-method","title":"On Backup Startup database method","description":"On Backup Startup database method  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/on-backup-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-backup-startup-database-method","permalink":"/docs/pt/commands/on-backup-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-backup-startup-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-backup-startup-database-method","title":"On Backup Startup database method","slug":"/commands/on-backup-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Shutdown database method","permalink":"/docs/pt/commands/on-backup-shutdown-database-method"},"next":{"title":"On Drop database method","permalink":"/docs/pt/commands/on-drop-database-method"}}'),n=a("785893"),d=a("250065");let s={id:"on-backup-startup-database-method",title:"On Backup Startup database method",slug:"/commands/on-backup-startup-database-method",displayed_sidebar:"docs"},r=void 0,c={},u=[{value:"M\xe9todo de base de dados On Backup Startup",id:"m\xe9todo-de-base-de-dados-on-backup-startup",level:2}];function i(e){let t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"On Backup Startup database method"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Par\xe2metro"}),(0,n.jsx)(t.th,{children:"Tipo"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Resultado"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2190"}),(0,n.jsx)(t.td,{children:"0 = backup can be launched; value other than 0 = backup not authorized"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"m\xe9todo-de-base-de-dados-on-backup-startup",children:"M\xe9todo de base de dados On Backup Startup"}),"\n",(0,n.jsxs)(t.p,{children:["O ",(0,n.jsx)(t.em,{children:"M\xe9todo de banco de dados On Backup Startup"})," \xe9 chamado cada vez que um backup est\xe1 a ponto de ser iniciado (backup manual, backup autom\xe1tico programado, ou utilizando o comando ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/backup",title:"BACKUP",children:"BACKUP"}),")."]}),"\n",(0,n.jsx)(t.p,{children:"Isto envolve todos os ambientes 4D: 4D em modo local, 4D Server, 4D em modo remoto, 4D Desktop e bancos fusionados com 4D Desktop."}),"\n",(0,n.jsxs)(t.p,{children:["O ",(0,n.jsx)(t.em,{children:"M\xe9todo de banco de dados On Backup Startup"})," permite verificar o in\xedcio do backup. Neste m\xe9todo, voc\xea deve retornar no par\xe2metro $0 um valor que autorize ou recuse o backup:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Se $0 = 0, o backup pode come\xe7ar."}),"\n",(0,n.jsxs)(t.li,{children:["Se $0 # 0, o backup n\xe3o \xe9 autorizado. A opera\xe7\xe3o \xe9 cancelada e retorna um erro. Voc\xea pode obter o erro utilizando o comando ",(0,n.jsx)(t.a,{href:"/docs/pt/commands/backup-info",title:"BACKUP INFO",children:"BACKUP INFO"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Voc\xea pode utilizar este m\xe9todo de base para verificar as condi\xe7\xf5es de execu\xe7\xe3o do backup (usu\xe1rio, data do \xfaltimo, etc.)."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Nota:"})," Voc\xea deve declarar o par\xe2metro ",(0,n.jsx)(t.em,{children:"$0"})," (inteiro longo) no m\xe9todo da base:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:"\xa0var $0 : Integer.\n"})})]})}function p(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return s}});var o=a(667294);let n={},d=o.createContext(n);function s(e){let t=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);