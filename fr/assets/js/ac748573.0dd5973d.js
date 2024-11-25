"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59308"],{492629:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-set-report-kind","title":"QR SET REPORT KIND","description":"QR SET REPORT KIND ( zone ; type )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-report-kind.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-report-kind","permalink":"/docs/fr/commands/qr-set-report-kind","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-report-kind.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-report-kind","title":"QR SET REPORT KIND","slug":"/commands/qr-set-report-kind","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET INFO ROW","permalink":"/docs/fr/commands/qr-set-info-row"},"next":{"title":"QR SET REPORT TABLE","permalink":"/docs/fr/commands/qr-set-report-table"}}'),s=t("785893"),d=t("250065");let i={id:"qr-set-report-kind",title:"QR SET REPORT KIND",slug:"/commands/qr-set-report-kind",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR SET REPORT KIND"})," ( ",(0,s.jsx)(n.em,{children:"zone"})," ; ",(0,s.jsx)(n.em,{children:"type"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zone"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type d'\xe9tat"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"QR SET REPORT KIND"})," permet de d\xe9finir le ",(0,s.jsx)(n.em,{children:"type"})," de l'\xe9tat rapide pr\xe9sent dans la ",(0,s.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez passer dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"type"})," une des constantes du th\xe8me ",(0,s.jsx)(n.em,{children:"QR Types d'\xe9tats"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr cross report"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr list report"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous d\xe9finissez \xe0 l'aide de cette commande un nouveau ",(0,s.jsx)(n.em,{children:"type"})," pour un \xe9tat existant, les param\xe9trages pr\xe9c\xe9dents sont supprim\xe9s et un nouvel \xe9tat vide est cr\xe9\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,s.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e.",(0,s.jsx)(n.br,{}),"\nSi la valeur de ",(0,s.jsx)(n.em,{children:"type"})," est incorrecte, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/qr-get-report-kind",children:"QR Get report kind"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);