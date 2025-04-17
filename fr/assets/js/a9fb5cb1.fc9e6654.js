"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3303"],{365502:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/backup","title":"BACKUP","description":"BACKUP","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/backup.md","sourceDirName":"commands-legacy","slug":"/commands/backup","permalink":"/docs/fr/commands/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"backup","title":"BACKUP","slug":"/commands/backup","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sauvegarde","permalink":"/docs/fr/commands/theme/Backup"},"next":{"title":"BACKUP INFO","permalink":"/docs/fr/commands/backup-info"}}'),t=n("785893"),a=n("250065");let d={id:"backup",title:"BACKUP",slug:"/commands/backup",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"BACKUP"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(s.table,{children:(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Ne requiert pas de param\xe8tre"}),(0,t.jsx)(s.th,{})]})})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"BACKUP"})," d\xe9clenche la sauvegarde de la base de donn\xe9es avec les param\xe9trages de sauvegarde courants. Aucune bo\xeete de dialogue de confirmation n\u2019est affich\xe9e. Une fen\xeatre de progression appara\xeet \xe0 l\u2019\xe9cran."]}),"\n",(0,t.jsxs)(s.p,{children:["Les param\xe9trages de sauvegarde sont d\xe9finis dans les Propri\xe9t\xe9s de la base. Ils sont stock\xe9s dans le fichier ",(0,t.jsx)(s.em,{children:"backup.4DSettings"})," situ\xe9 dans le dossier Settings de la base ou dans le dossier Data (voir ",(0,t.jsx)(s.em,{children:"Fichiers de configuration et de suivi"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"BACKUP"})," appelle la ",(0,t.jsx)(s.em,{children:"M\xe9thode base Sur d\xe9marrage sauvegarde"})," au d\xe9but de son ex\xe9cution et la ",(0,t.jsx)(s.em,{children:"M\xe9thode base Sur arr\xeat sauvegarde"})," \xe0 la fin de son ex\xe9cution."]}),"\n",(0,t.jsx)(s.p,{children:"Attention, du fait de ce m\xe9canisme, la commande ne doit PAS \xeatre appel\xe9e depuis l'une de ces m\xe9thodes base."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"4D Server :"})," Lorsqu\u2019elle est appel\xe9e depuis un poste client, la commande ",(0,t.jsx)(s.strong,{children:"BACKUP"})," est consid\xe9r\xe9e comme une proc\xe9dure stock\xe9e, elle est toujours ex\xe9cut\xe9e sur le serveur."]}),"\n",(0,t.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"Si la sauvegarde se d\xe9roule correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0."}),"\n",(0,t.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["En cas d\u2019incident au cours de la sauvegarde, les informations relatives \xe0 l'incident sont \xe9crites dans le journal des sauvegardes et l'erreur de plus haut niveau est transmise uniquement \xe0 la ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/on-backup-shutdown-database-method",children:"On Backup Shutdown database method"}),". Il est donc particuli\xe8rement important d'utiliser cette m\xe9thode base afin de pouvoir g\xe9rer par programmation les erreurs li\xe9es \xe0 la sauvegarde."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/backup-info",children:"BACKUP INFO"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"M\xe9thode base Sur d\xe9marrage sauvegarde"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/restore",children:"RESTORE"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"887"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return d}});var r=n(667294);let t={},a=r.createContext(t);function d(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);