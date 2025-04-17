"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95968"],{378987:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","description":"REJECT NEW REMOTE CONNECTIONS ( statutRejet )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/reject-new-remote-connections.md","sourceDirName":"commands-legacy","slug":"/commands/reject-new-remote-connections","permalink":"/docs/fr/commands/reject-new-remote-connections","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject-new-remote-connections.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","slug":"/commands/reject-new-remote-connections","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUIT 4D","permalink":"/docs/fr/commands/quit-4d"},"next":{"title":"RELOAD PROJECT","permalink":"/docs/fr/commands/reload-project"}}'),r=t("785893"),o=t("250065");let c={id:"reject-new-remote-connections",title:"REJECT NEW REMOTE CONNECTIONS",slug:"/commands/reject-new-remote-connections",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," ( ",(0,r.jsx)(n.em,{children:"statutRejet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statutRejet"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Vrai si rejet des nouvelles connexions, sinon Faux."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," permet d'indiquer si le serveur d'application accepte ou non de nouvelles connexions depuis des 4D distants."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"statutRejet"}),", passez ",(0,r.jsx)(n.strong,{children:"vrai"})," pour rejeter les nouvelles connexions distantes ou passez ",(0,r.jsx)(n.strong,{children:"faux"})," pour les autoriser."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," : Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," ne fait rien."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez rejeter puis accepter les nouvelles connexions distantes :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Rejetez les nouvelles connexions\n\xa0REJECT NEW REMOTE CONNECTIONS(True)\n\xa0\xa0// Ex\xe9cutez l'op\xe9ration de maintenance\n\xa0...\n\xa0\xa0// Acceptez les nouvelles connexions\n\xa0REJECT NEW REMOTE CONNECTIONS(False)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/drop-remote-user",children:"DROP REMOTE USER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/application-info",children:"Application info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/soap-reject-new-requests",children:"SOAP REJECT NEW REQUESTS"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1635"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},o=s.createContext(r);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);