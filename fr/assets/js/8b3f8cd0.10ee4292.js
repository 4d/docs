"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85008"],{699979:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>l,assets:()=>u,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/on-backup-startup-database-method","title":"On Backup Startup database method","description":"On Backup Startup database method  -> $0","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-backup-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-backup-startup-database-method","permalink":"/docs/fr/commands/on-backup-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-backup-startup-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-backup-startup-database-method","title":"On Backup Startup database method","slug":"/commands/on-backup-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Backup Shutdown database method","permalink":"/docs/fr/commands/on-backup-shutdown-database-method"},"next":{"title":"On Drop database method","permalink":"/docs/fr/commands/on-drop-database-method"}}'),s=a("785893"),r=a("250065");let d={id:"on-backup-startup-database-method",title:"On Backup Startup database method",slug:"/commands/on-backup-startup-database-method",displayed_sidebar:"docs"},o=void 0,u={},c=[];function i(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"On Backup Startup database method"}),"  -> $0"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$0"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"0 = sauvegarde autoris\xe9e, valeur autre que 0 = sauvegarde non autoris\xe9e"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsxs)(t.p,{children:["La ",(0,s.jsx)(t.strong,{children:"On Backup Startup database method"}),"  est appel\xe9e \xe0 chaque fois qu\u2019une sauvegarde de la base est sur le point d\u2019avoir lieu (sauvegarde manuelle, sauvegarde automatique p\xe9riodique ou via la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/backup",children:"BACKUP"}),").",(0,s.jsx)(t.br,{}),"\nTous les environnements 4D sont concern\xe9s : 4D (tous modes), 4D Server ainsi que les applications 4D compil\xe9es et fusionn\xe9es avec 4D Volume Desktop."]}),"\n",(0,s.jsxs)(t.p,{children:["La ",(0,s.jsx)(t.strong,{children:"On Backup Startup database method"}),"  permet de contr\xf4ler le d\xe9clenchement de la sauvegarde. Au sein de la m\xe9thode, vous devez retourner dans le param\xe8tre $0 une valeur autorisant ou refusant la sauvegarde :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"si $0 = 0, vous autorisez la sauvegarde."}),"\n",(0,s.jsxs)(t.li,{children:["si $0 # 0, vous n'autorisez pas la sauvegarde. L\u2019op\xe9ration est annul\xe9e et une erreur est retourn\xe9e. Vous pouvez r\xe9cup\xe9rer l\u2019erreur \xe0 l\u2019aide de la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/backup-info",children:"BACKUP INFO"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Vous pouvez utiliser cette m\xe9thode base pour contr\xf4ler les conditions d\u2019ex\xe9cution de la sauvegarde (utilisateur, date de la derni\xe8re sauvegarde, etc.)."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Vous devez imp\xe9rativement d\xe9clarer le param\xe8tre ",(0,s.jsx)(t.em,{children:"$0"})," (entier long) dans la m\xe9thode base :"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $0 : Integer\n"})})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return d}});var n=a(667294);let s={},r=n.createContext(s);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);