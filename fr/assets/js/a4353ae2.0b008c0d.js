"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28977"],{723534:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/web-legacy-close-session","title":"WEB LEGACY CLOSE SESSION","description":"WEB LEGACY CLOSE SESSION ( idSession )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-legacy-close-session.md","sourceDirName":"commands-legacy","slug":"/commands/web-legacy-close-session","permalink":"/docs/fr/20-R7/commands/web-legacy-close-session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-legacy-close-session.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-legacy-close-session","title":"WEB LEGACY CLOSE SESSION","slug":"/commands/web-legacy-close-session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Is server running","permalink":"/docs/fr/20-R7/commands/web-is-server-running"},"next":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/fr/20-R7/commands/web-legacy-get-session-expiration"}}'),t=n("785893"),o=n("250065");let r={id:"web-legacy-close-session",title:"WEB LEGACY CLOSE SESSION",slug:"/commands/web-legacy-close-session",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:2},{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB LEGACY CLOSE SESSION"})," ( ",(0,t.jsx)(s.em,{children:"idSession"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"idSession"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"UUID de session"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,t.jsxs)(s.p,{children:["Cette commande peut \xeatre utilis\xe9e uniquement avec les ",(0,t.jsx)(s.strong,{children:"anciennes sessions Web"}),", disponibles dans les bases de donn\xe9es converties \xe0 partir de versions ant\xe9rieures \xe0 4D v18 R6. Elle est ignor\xe9e lorsque le mode ",(0,t.jsx)(s.strong,{children:"sessions Web extensibles"})," est activ\xe9 (recommand\xe9 dans 4D v18 R6 et versions plus r\xe9centes). Pour plus d'informations, reportez-vous \xe0 la section ",(0,t.jsx)(s.em,{children:"Gestion des sessions Web"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"WEB LEGACY CLOSE SESSION"})," cl\xf4t la session Web existante d\xe9sign\xe9e par le param\xe8tre ",(0,t.jsx)(s.em,{children:"idSession"}),". Si la session n\u2019existe pas, la commande ne fait rien."]}),"\n",(0,t.jsx)(s.p,{children:"Lorsque cette commande est appel\xe9e depuis un process Web ou tout autre process :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"la date d\u2019expiration du cookie est mise \xe0 0,"}),"\n",(0,t.jsxs)(s.li,{children:["la ",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/on-web-legacy-close-session-database-method",children:"On Web Legacy Close Session database method"})," est appel\xe9e, vous permettant de stocker les informations de la session,"]}),"\n",(0,t.jsx)(s.li,{children:"les s\xe9lections courantes sont d\xe9truites, les enregistrements d\xe9verrouill\xe9s et les variables r\xe9initialis\xe9es."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Apr\xe8s l\u2019ex\xe9cution de cette commande, si un client Web envoie une requ\xeate utilisant un cookie invalide, une nouvelle session est ouverte et un nouveau cookie est envoy\xe9."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Dans le contexte d'une session 4D Mobile, la commande ",(0,t.jsx)(s.strong,{children:"WEB LEGACY CLOSE SESSION"})," referme la session 4D Mobile dont l'ID a \xe9t\xe9 pass\xe9 dans ",(0,t.jsx)(s.em,{children:"idSession"}),". Comme une session 4D Mobile peut g\xe9rer plusieurs process, cette commande demande en fait \xe0 tous les process Web li\xe9s \xe0 la session de terminer leur ex\xe9cution."]}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Gestion des sessions Web"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/on-web-legacy-close-session-database-method",children:"On Web Legacy Close Session database method"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"1208"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return r}});var i=n(667294);let t={},o=i.createContext(t);function r(e){let s=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);