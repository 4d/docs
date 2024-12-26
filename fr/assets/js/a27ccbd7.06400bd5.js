"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79232"],{813070:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/post-click","title":"POST CLICK","description":"POST CLICK ( sourisX ; sourisY {; process} {; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/post-click.md","sourceDirName":"commands-legacy","slug":"/commands/post-click","permalink":"/docs/fr/commands/post-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-click.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"post-click","title":"POST CLICK","slug":"/commands/post-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pop up menu","permalink":"/docs/fr/commands/pop-up-menu"},"next":{"title":"POST EVENT","permalink":"/docs/fr/commands/post-event"}}'),t=n("785893"),i=n("250065");let o={id:"post-click",title:"POST CLICK",slug:"/commands/post-click",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"POST CLICK"})," ( ",(0,t.jsx)(s.em,{children:"sourisX"})," ; ",(0,t.jsx)(s.em,{children:"sourisY"})," {; ",(0,t.jsx)(s.em,{children:"process"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sourisX"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Coordonn\xe9e horizontale"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sourisY"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Coordonn\xe9e verticale"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process de destination ou File d'attente des \xe9v\xe9nements de l'application si ce param\xe8tre est omis ou si vous passez 0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operator"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, utiliser le syst\xe8me de coordonn\xe9es globales Si omis, utiliser le syst\xe8me de coordonn\xe9es locales"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"POST CLICK"})," simule un clic souris. Elle produit les m\xeames effets que lorsque l'utilisateur clique r\xe9ellement avec le bouton de la souris."]}),"\n",(0,t.jsxs)(s.p,{children:["Vous passez les coordonn\xe9es horizontale et verticale du clic dans ",(0,t.jsx)(s.em,{children:"sourisX"})," et ",(0,t.jsx)(s.em,{children:"sourisY"}),". Si vous passez le param\xe8tre ",(0,t.jsx)(s.em,{children:"*"}),", vous exprimez ces coordonn\xe9es par rapport \xe0 l'\xe9cran. Si vous omettez le param\xe8tre ",(0,t.jsx)(s.em,{children:"*"}),", vous exprimez ces coordonn\xe9es par rapport \xe0 la fen\xeatre de premier plan du process dont le num\xe9ro est pass\xe9 dans ",(0,t.jsx)(s.em,{children:"process"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez le param\xe8tre ",(0,t.jsx)(s.em,{children:"process"}),", le clic est envoy\xe9 au process dont vous avez pass\xe9 le num\xe9ro. Si vous passez ",(0,t.jsx)(s.em,{children:"0"})," (z\xe9ro) ou si vous omettez ce param\xe8tre, le clic est envoy\xe9 au niveau de l'application et le gestionnaire de 4D l'affectera au process appropri\xe9."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/post-event",children:"POST EVENT"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/post-key",children:"POST KEY"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"466"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var r=n(667294);let t={},i=r.createContext(t);function o(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);