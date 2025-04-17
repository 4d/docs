"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36968"],{174078:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/web-legacy-get-session-expiration","title":"WEB LEGACY GET SESSION EXPIRATION","description":"WEB LEGACY GET SESSION EXPIRATION ( idSession ; dateExp ; heureExp )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/web-legacy-get-session-expiration.md","sourceDirName":"commands-legacy","slug":"/commands/web-legacy-get-session-expiration","permalink":"/docs/fr/commands/web-legacy-get-session-expiration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-legacy-get-session-expiration.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-legacy-get-session-expiration","title":"WEB LEGACY GET SESSION EXPIRATION","slug":"/commands/web-legacy-get-session-expiration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY CLOSE SESSION","permalink":"/docs/fr/commands/web-legacy-close-session"},"next":{"title":"WEB SEND BLOB","permalink":"/docs/fr/commands/web-send-blob"}}'),t=s("785893"),r=s("250065");let d={id:"web-legacy-get-session-expiration",title:"WEB LEGACY GET SESSION EXPIRATION",slug:"/commands/web-legacy-get-session-expiration",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:2},{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB LEGACY GET SESSION EXPIRATION"})," ( ",(0,t.jsx)(n.em,{children:"idSession"})," ; ",(0,t.jsx)(n.em,{children:"dateExp"})," ; ",(0,t.jsx)(n.em,{children:"heureExp"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"idSession"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"UUID de session"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dateExp"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Date d\u2019expiration du cookie"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"heureExp"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Heure d\u2019expiration du cookie"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande peut \xeatre utilis\xe9e uniquement avec les ",(0,t.jsx)(n.strong,{children:"anciennes sessions Web"}),", disponibles dans les bases de donn\xe9es converties \xe0 partir de versions ant\xe9rieures \xe0 4D v18 R6. Elle retourne des valeurs null, date et heure lorsque le mode ",(0,t.jsx)(n.strong,{children:"sessions Web extensibles"})," est activ\xe9 (recommand\xe9 sous 4D v18 R6 et versions plus r\xe9centes). Pour plus d'informations, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Gestion des sessions Web"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"WEB LEGACY GET SESSION EXPIRATION"})," retourne les informations relatives \xe0 l\u2019expiration du cookie de la session dont vous avez pass\xe9 l\u2019UUID dans ",(0,t.jsx)(n.em,{children:"idSession"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"dateExp"})," re\xe7oit la date d\u2019expiration et le param\xe8tre ",(0,t.jsx)(n.em,{children:"heureExp"})," re\xe7oit l\u2019heure d\u2019expiration du cookie."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," \xc0 chaque requ\xeate Web, la date et l\u2019heure d\u2019expiration du cookie sont r\xe9initialis\xe9es \xe0 une valeur correspondant \xe0 l\u2019instant de la requ\xeate+la valeur de l'option Web inactive session timeout. Par exemple :",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Premi\xe8re requ\xeate, Lundi \xe0 01h00"}),(0,t.jsx)(n.br,{}),"\n-> envoi du cookie 4DSID xxxyyy expiration I+24h = Mardi 01:00",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Deuxi\xe8me requ\xeate, Lundi \xe0 01h10"}),(0,t.jsx)(n.br,{}),"\n-> envoi du cookie 4DSID xxxyyy expiration I+24h = Mardi 01:10",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Troisi\xe8me requ\xeate, Mardi \xe0 04h00 : cookie expir\xe9"}),(0,t.jsx)(n.br,{}),"\n-> envoi du cookie 4DSID aaabbb expiration I+24h = Mercredi 01:00"]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Gestion des sessions Web"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-get-current-session-id",children:"WEB Get current session ID"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/web-set-option",children:"WEB SET OPTION"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1207"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var i=s(667294);let t={},r=i.createContext(t);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);