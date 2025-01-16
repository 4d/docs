"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62448"],{767412:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/notify-resources-folder-modification","title":"NOTIFY RESOURCES FOLDER MODIFICATION","description":"NOTIFY RESOURCES FOLDER MODIFICATION","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/notify-resources-folder-modification.md","sourceDirName":"commands-legacy","slug":"/commands/notify-resources-folder-modification","permalink":"/docs/fr/commands/notify-resources-folder-modification","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnotify-resources-folder-modification.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"notify-resources-folder-modification","title":"NOTIFY RESOURCES FOLDER MODIFICATION","slug":"/commands/notify-resources-folder-modification","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is data file locked","permalink":"/docs/fr/commands/is-data-file-locked"},"next":{"title":"OPEN ADMINISTRATION WINDOW","permalink":"/docs/fr/commands/open-administration-window"}}'),i=n("785893"),t=n("250065");let o={id:"notify-resources-folder-modification",title:"NOTIFY RESOURCES FOLDER MODIFICATION",slug:"/commands/notify-resources-folder-modification",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"NOTIFY RESOURCES FOLDER MODIFICATION"})}),"\n\n\n\n\n\n\n\n",(0,i.jsx)(s.table,{children:(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Ne requiert pas de param\xe8tre"}),(0,i.jsx)(s.th,{})]})})}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"NOTIFY RESOURCES FOLDER MODIFICATION"}),' permet de "forcer" l\u2019envoi par 4D Server d\u2019une notification indiquant \xe0 tous les postes 4D connect\xe9s que le contenu du dossier ',(0,i.jsx)(s.strong,{children:"Resources"})," de la base a \xe9t\xe9 modifi\xe9, afin de leur permettre de synchroniser leur dossier ",(0,i.jsx)(s.strong,{children:"Resources"})," local. Cette commande permet en particulier de g\xe9rer la synchronisation des dossiers ",(0,i.jsx)(s.strong,{children:"Resources"})," t\xe9l\xe9charg\xe9s sur les postes distants lorsque le dossier ",(0,i.jsx)(s.strong,{children:"Resources"})," de la base est modifi\xe9 via une proc\xe9dure stock\xe9e sur le serveur.",(0,i.jsx)(s.br,{}),"\nPour plus d\u2019informations sur la gestion du dossier ",(0,i.jsx)(s.strong,{children:"Resources"})," en mode distant, reportez-vous au ",(0,i.jsx)(s.em,{children:"Guide de r\xe9f\xe9rence de 4D Server"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Seule l\u2019information de modification est envoy\xe9e par cette commande. Les postes distants r\xe9agiront en fonction du param\xe9trage courant. Les options sont :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["pas de synchronisation du dossier ",(0,i.jsx)(s.strong,{children:"Resources"})," local en cours de session,"]}),"\n",(0,i.jsxs)(s.li,{children:["synchronisation automatique du dossier ",(0,i.jsx)(s.strong,{children:"Resources"})," local en cours de session,"]}),"\n",(0,i.jsx)(s.li,{children:"affichage d\u2019une alerte afin que l'utilisateur effectue une synchronisation s'il le souhaite."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Le param\xe9trage courant peut \xeatre d\xe9fini soit :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"au niveau global de la base via le param\xe8tre des Propri\xe9t\xe9s de la base. Dans ce cas, il s'applique \xe0 tous les postes distants ;"}),"\n",(0,i.jsxs)(s.li,{children:["localement, \xe0 l'aide de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),' ex\xe9cut\xe9e sur le poste distant (s\xe9lecteur Auto synchro resources folder). Dans ce cas, il "surcharge" celui de la base et s\'applique uniquement au poste distant pour la session.']}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/commands/get-4d-folder",children:"Get 4D folder"})}),"\n",(0,i.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"1052"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var r=n(667294);let i={},t=r.createContext(i);function o(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);