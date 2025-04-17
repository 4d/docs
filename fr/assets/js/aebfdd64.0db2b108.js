"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55309"],{328518:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/qr-run","title":"QR RUN","description":"QR RUN ( zone )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-run.md","sourceDirName":"commands-legacy","slug":"/commands/qr-run","permalink":"/docs/fr/20-R8/commands/qr-run","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-run.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-run","title":"QR RUN","slug":"/commands/qr-run","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR REPORT TO BLOB","permalink":"/docs/fr/20-R8/commands/qr-report-to-blob"},"next":{"title":"QR SET AREA PROPERTY","permalink":"/docs/fr/20-R8/commands/qr-set-area-property"}}'),s=r("785893"),d=r("250065");let i={id:"qr-run",title:"QR RUN",slug:"/commands/qr-run",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR RUN"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone \xe0 ex\xe9cuter"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR RUN"})," provoque l'ex\xe9cution de l'\xe9tat rapide d\xe9sign\xe9 par le param\xe8tre ",(0,s.jsx)(n.em,{children:"zone"}),". L'\xe9tat est g\xe9n\xe9r\xe9 avec ses param\xe9trages courants, notamment son type de sortie. Vous pouvez utiliser la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/qr-set-destination",children:"QR SET DESTINATION"})," pour modifier le type de sortie."]}),"\n",(0,s.jsxs)(n.p,{children:["L'\xe9tat est ex\xe9cut\xe9 sur la table \xe0 laquelle appartient la zone. Lorsque ",(0,s.jsx)(n.em,{children:"zone"})," d\xe9signe une zone hors \xe9cran, il est n\xe9cessaire de sp\xe9cifier la table \xe0 utiliser \xe0 l'aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/qr-set-report-table",children:"QR SET REPORT TABLE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server :"})," Cette commande peut \xeatre ex\xe9cut\xe9e sur 4D Server dans le cadre d'une proc\xe9dure stock\xe9e. Dans ce contexte, veillez \xe0 ce qu\u2019aucune bo\xeete de dialogue n\u2019apparaisse sur le poste serveur (sauf besoin sp\xe9cifique). Pour cela, il est n\xe9cessaire d\u2019appeler la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/qr-set-destination",children:"QR SET DESTINATION"})," avec le param\xe8tre \"*\". En cas de probl\xe8me sur l\u2019imprimante (plus de papier, imprimante d\xe9connect\xe9e, etc.), aucun message d'erreur n'est g\xe9n\xe9r\xe9."]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"746"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifie les variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);