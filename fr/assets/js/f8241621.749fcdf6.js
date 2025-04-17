"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61710"],{568505:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/post-event","title":"POST EVENT","description":"POST EVENT ( quoi ; message ; quand ; sourisX ; sourisY ; modifiers {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/post-event.md","sourceDirName":"commands-legacy","slug":"/commands/post-event","permalink":"/docs/fr/20-R8/commands/post-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-event.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"post-event","title":"POST EVENT","slug":"/commands/post-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POST CLICK","permalink":"/docs/fr/20-R8/commands/post-click"},"next":{"title":"POST KEY","permalink":"/docs/fr/20-R8/commands/post-key"}}'),d=s("785893"),r=s("250065");let i={id:"post-event",title:"POST EVENT",slug:"/commands/post-event",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function h(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"POST EVENT"})," ( ",(0,d.jsx)(e.em,{children:"quoi"})," ; ",(0,d.jsx)(e.em,{children:"message"})," ; ",(0,d.jsx)(e.em,{children:"quand"})," ; ",(0,d.jsx)(e.em,{children:"sourisX"})," ; ",(0,d.jsx)(e.em,{children:"sourisY"})," ; ",(0,d.jsx)(e.em,{children:"modifiers"})," {; ",(0,d.jsx)(e.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Param\xe8tre"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"quoi"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Type d'\xe9v\xe9nement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"message"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Message de l'\xe9v\xe9nement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"quand"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Moment de l'\xe9v\xe9nement exprim\xe9 en ticks"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sourisX"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Coordonn\xe9e horizontale de la souris"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sourisY"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Coordonn\xe9e verticale de la souris"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"modifiers"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Etat des touches Modifier"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"process"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process de destination ou File d'attente des \xe9v\xe9nements de l'application si ce param\xe8tre est omis ou si vous passez 0"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(e.p,{children:["La commande ",(0,d.jsx)(e.strong,{children:"POST EVENT"})," simule un \xe9v\xe9nement (clavier ou souris). Elle produit les m\xeames effets que lorsque l'utilisateur agit r\xe9ellement par l'interm\xe9diaire du clavier ou de la souris."]}),"\n",(0,d.jsxs)(e.p,{children:["Vous devez passer une des constantes pr\xe9d\xe9finies suivantes dans le param\xe8tre ",(0,d.jsx)(e.em,{children:"quoi"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Valeur"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Auto key event"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Key down event"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Key up event"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse down event"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse up event"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"2"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["Si l'\xe9v\xe9nement est li\xe9 \xe0 la souris, passez ",(0,d.jsx)(e.em,{children:"0"})," (z\xe9ro) dans le param\xe8tre ",(0,d.jsx)(e.em,{children:"message"}),". Si l'\xe9v\xe9nement est li\xe9 au clavier, passez dans ",(0,d.jsx)(e.em,{children:"message"})," le code du caract\xe8re simul\xe9."]}),"\n",(0,d.jsxs)(e.p,{children:["G\xe9n\xe9ralement, vous passez la valeur retourn\xe9e par la fonction ",(0,d.jsx)(e.a,{href:"/docs/fr/20-R8/commands/tickcount",children:"Tickcount"})," dans ",(0,d.jsx)(e.em,{children:"quand"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["Si l'\xe9v\xe9nement est li\xe9 \xe0 la souris, passez les coordonn\xe9es horizontale et verticale du clic dans ",(0,d.jsx)(e.em,{children:"sourisX"})," et ",(0,d.jsx)(e.em,{children:"sourisY"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["Dans le param\xe8tre ",(0,d.jsx)(e.em,{children:"modifiers"}),", vous devez passer une constante ou une combinaison de constantes du th\xe8me ",(0,d.jsx)(e.em,{children:"Ev\xe9nements (Modifiers)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Valeur"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Activate window bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Activate window mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Caps lock key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{children:"Windows et macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Caps lock key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"1024"}),(0,d.jsx)(e.td,{children:"Windows et macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous Windows, touche Commande sous macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"256"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous Windows, touche Commande sous macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Control key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"12"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous macOS, ou clic droit sous Windows et macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Control key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"4096"}),(0,d.jsx)(e.td,{children:"Touche Ctrl sous macOS, ou clic droit sous Windows et macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse button bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse button mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"128"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Option key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"11"}),(0,d.jsx)(e.td,{children:"Touche Alt (aussi appel\xe9e Option sous macOS)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Option key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"2048"}),(0,d.jsx)(e.td,{children:"Touche Alt (aussi appel\xe9e Option sous macOS)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right control key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"15"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right control key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"32768"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right option key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"14"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right option key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"16384"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right shift key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"13"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right shift key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"8192"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Shift key bit"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"9"}),(0,d.jsx)(e.td,{children:"Windows et macOS"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Shift key mask"}),(0,d.jsx)(e.td,{children:"Entier long"}),(0,d.jsx)(e.td,{children:"512"}),(0,d.jsx)(e.td,{children:"Windows et macOS"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"Par exemple, pour simuler la touche Majuscule, passez la valeur Shift key bit."}),"\n",(0,d.jsxs)(e.p,{children:["Si vous passez le param\xe8tre ",(0,d.jsx)(e.em,{children:"process"}),", l'\xe9v\xe9nement est envoy\xe9 au process dont vous avez pass\xe9 le num\xe9ro. Si vous passez ",(0,d.jsx)(e.em,{children:"0"})," (z\xe9ro) ou si vous omettez ce param\xe8tre, l'\xe9v\xe9nement est envoy\xe9 au niveau de l'application et le gestionnaire de 4D l'affectera au process appropri\xe9."]}),"\n",(0,d.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/fr/20-R8/commands/post-click",children:"POST CLICK"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/fr/20-R8/commands/post-key",children:"POST KEY"})]}),"\n",(0,d.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(e.td,{children:"467"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread safe"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);