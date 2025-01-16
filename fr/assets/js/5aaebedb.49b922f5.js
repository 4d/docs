"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97206"],{254031:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-execute-command","title":"QR EXECUTE COMMAND","description":"QR EXECUTE COMMAND ( zone ; numCommande )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-execute-command.md","sourceDirName":"commands-legacy","slug":"/commands/qr-execute-command","permalink":"/docs/fr/20-R7/commands/qr-execute-command","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-execute-command.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-execute-command","title":"QR EXECUTE COMMAND","slug":"/commands/qr-execute-command","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR DELETE OFFSCREEN AREA","permalink":"/docs/fr/20-R7/commands/qr-delete-offscreen-area"},"next":{"title":"QR Find column","permalink":"/docs/fr/20-R7/commands/qr-find-column"}}'),d=s("785893"),t=s("250065");let c={id:"qr-execute-command",title:"QR EXECUTE COMMAND",slug:"/commands/qr-execute-command",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR EXECUTE COMMAND"})," ( ",(0,d.jsx)(n.em,{children:"zone"})," ; ",(0,d.jsx)(n.em,{children:"numCommande"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"zone"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numCommande"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Commande de menu \xe0 ex\xe9cuter"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"QR EXECUTE COMMAND"})," ex\xe9cute la commande de bouton de la barre d'outils dont la r\xe9f\xe9rence est pass\xe9e dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"numCommande"}),". En g\xe9n\xe9ral, cette commande est utilis\xe9e pour ex\xe9cuter une commande de menu s\xe9lectionn\xe9e par l'utilisateur et intercept\xe9e dans votre code via la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-on-command",children:"QR ON COMMAND"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"numCommande"})," une valeur ou l'une des constantes suivantes du th\xe8me ",(0,d.jsx)(n.em,{children:"QR Commandes"})," (seuls les \xe9v\xe9nements list\xe9s sont pris en charge) :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd generate"}),(0,d.jsx)(n.td,{children:"2008"}),(0,d.jsxs)(n.td,{children:["Utilisation de la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-run",children:"QR RUN"})," conseill\xe9e"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd open"}),(0,d.jsx)(n.td,{children:"2001"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd page setup"}),(0,d.jsx)(n.td,{children:"2006"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd print preview"}),(0,d.jsx)(n.td,{children:"2007"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd save"}),(0,d.jsx)(n.td,{children:"2002"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr cmd save as"}),(0,d.jsx)(n.td,{children:"2003"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,d.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,d.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,d.jsx)(n.em,{children:"numCommande"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,d.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-get-command-status",children:"QR Get command status"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/20-R7/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,d.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"791"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifie les variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);