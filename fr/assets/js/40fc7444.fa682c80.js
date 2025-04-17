"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91847"],{471794:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/backup-info","title":"BACKUP INFO","description":"BACKUP INFO ( s\xe9lecteur ; info1 ; info2 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/backup-info.md","sourceDirName":"commands-legacy","slug":"/commands/backup-info","permalink":"/docs/fr/20-R8/commands/backup-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"backup-info","title":"BACKUP INFO","slug":"/commands/backup-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BACKUP","permalink":"/docs/fr/20-R8/commands/backup"},"next":{"title":"CHECK LOG FILE","permalink":"/docs/fr/20-R8/commands/check-log-file"}}'),s=r("785893"),d=r("250065");let i={id:"backup-info",title:"BACKUP INFO",slug:"/commands/backup-info",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BACKUP INFO"})," ( ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,s.jsx)(n.em,{children:"info1"})," ; ",(0,s.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"s\xe9lecteur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type d\u2019information \xe0 r\xe9cup\xe9rer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info1"}),(0,s.jsx)(n.td,{children:"Integer, Date"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur 1 du s\xe9lecteur"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info2"}),(0,s.jsx)(n.td,{children:"Time, Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur 2 du s\xe9lecteur"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"BACKUP INFO"})," permet de r\xe9cup\xe9rer des informations relatives \xe0 la derni\xe8re sauvegarde effectu\xe9e sur les donn\xe9es de la base."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," le type d\u2019information \xe0 r\xe9cup\xe9rer. Le type et le contenu des param\xe8tres ",(0,s.jsx)(n.em,{children:"info1"})," et ",(0,s.jsx)(n.em,{children:"info2"})," d\xe9pendent de la valeur du ",(0,s.jsx)(n.em,{children:"s\xe9lecteur."})," Vous pouvez utiliser une des constantes suivantes, plac\xe9es dans le th\xe8me \u201C",(0,s.jsx)(n.em,{children:"Sauvegarde et restitution"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup date"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," et info2 retournent respectivement la date et l'heure de la derni\xe8re sauvegarde."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup information"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," retourne la dur\xe9e de la derni\xe8re sauvegarde en millisecondes (entier long) et ",(0,s.jsx)(n.em,{children:"info2"})," retourne le timestamp de d\xe9but de la derni\xe8re sauvegarde (chaine, voir les d\xe9tails de formatage dans la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/timestamp",children:"Timestamp"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup status"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," et info2 retournent respectivement le num\xe9ro et le texte du statut de la derni\xe8re sauvegarde."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Next backup date"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," et info2 retournent respectivement la date et l'heure de la prochaine sauvegarde pr\xe9vue."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/restore",children:"RESTORE"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"888"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);