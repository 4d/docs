"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18304"],{697588:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/post-key","title":"POST KEY","description":"POST KEY ( code {; modifiers {; process}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/post-key.md","sourceDirName":"commands-legacy","slug":"/commands/post-key","permalink":"/docs/fr/commands/post-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-key.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"post-key","title":"POST KEY","slug":"/commands/post-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POST EVENT","permalink":"/docs/fr/commands/post-event"},"next":{"title":"REDRAW","permalink":"/docs/fr/commands/redraw"}}'),d=s("785893"),r=s("250065");let i={id:"post-key",title:"POST KEY",slug:"/commands/post-key",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function h(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"POST KEY"})," ( ",(0,d.jsx)(e.em,{children:"code"})," {; ",(0,d.jsx)(e.em,{children:"modifiers"})," {; ",(0,d.jsx)(e.em,{children:"process"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Param\xe8tre"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"code"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Code d'un caract\xe8re ou code de touche de fonction"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"modifiers"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Etat des touches Modifier"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"process"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process de destination ou File d'attente des \xe9v\xe9nements de l'application si param\xe8tre omis ou \xe9gal \xe0 0"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(e.p,{children:["La commande ",(0,d.jsx)(e.strong,{children:"POST KEY"})," simule la frappe d'une touche sur le clavier. Elle produit les m\xeames effets que lorsque l'utilisateur tape r\xe9ellement un caract\xe8re au clavier."]}),"\n",(0,d.jsxs)(e.p,{children:["Vous passez le code du caract\xe8re dans le param\xe8tre ",(0,d.jsx)(e.em,{children:"code"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["Si vous n'utilisez pas le param\xe8tre ",(0,d.jsx)(e.em,{children:"modifiers"}),', aucun "modifier" (Majuscule, Option, etc...) n\'est simul\xe9. Si vous utilisez le param\xe8tre ',(0,d.jsx)(e.em,{children:"modifiers"}),", vous devez passer une constante ou une combinaison de constantes du th\xe8me ",(0,d.jsx)(e.em,{children:"Ev\xe9nements (Modifiers)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Valeur"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Activate window bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Activate window mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Caps lock key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{children:"Windows et OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Caps lock key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"1024"}),(0,d.jsx)(e.td,{children:"Windows et OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous Windows, touche Commande sous OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"256"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous Windows, touche Commande sous OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Control key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"12"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous OS X, ou clic droit sous Windows et OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Control key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"4096"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous OS X, ou clic droit sous Windows et OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse button bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse button mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"128"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Option key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"11"}),(0,d.jsx)(e.td,{children:"Touche Alt (aussi appel\xe9e Option sous OS X)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Option key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"2048"}),(0,d.jsx)(e.td,{children:"Touche Alt (aussi appel\xe9e Option sous OS X)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right control key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"15"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right control key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"32768"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right option key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"14"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right option key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"16384"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right shift key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"13"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right shift key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"8192"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Shift key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"9"}),(0,d.jsx)(e.td,{children:"Windows et OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Shift key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"512"}),(0,d.jsx)(e.td,{children:"Windows et OS X"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"Par exemple, pour simuler la touche Majuscule, passez la valeur Shift key mask."}),"\n",(0,d.jsxs)(e.p,{children:["Si vous passez le param\xe8tre ",(0,d.jsx)(e.em,{children:"process"}),", la frappe clavier est envoy\xe9e au process dont le num\xe9ro de r\xe9f\xe9rence est sp\xe9cifi\xe9. Si vous passez ",(0,d.jsx)(e.em,{children:"0"})," (z\xe9ro) dans ce param\xe8tre ou si vous l'omettez, la frappe clavier est envoy\xe9e au niveau de l'application et le gestionnaire de 4D l'affectera au process appropri\xe9."]}),"\n",(0,d.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsxs)(e.p,{children:["Reportez-vous \xe0 l'exemple de la fonction ",(0,d.jsx)(e.a,{href:"/docs/fr/commands/process-number",children:"Process number"}),"."]}),"\n",(0,d.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"Codes ASCII"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"Codes des touches de fonction"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/fr/commands/post-click",children:"POST CLICK"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/fr/commands/post-event",children:"POST EVENT"})]}),"\n",(0,d.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(e.td,{children:"465"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread safe"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);