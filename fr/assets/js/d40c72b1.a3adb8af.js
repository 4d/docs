"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90646"],{16761:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/find-window","title":"Find window","description":"Find window ( gauche ; haut {; partieFen\xeatre} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/find-window.md","sourceDirName":"commands-legacy","slug":"/commands/find-window","permalink":"/docs/fr/commands/find-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"find-window","title":"Find window","slug":"/commands/find-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ERASE WINDOW","permalink":"/docs/fr/commands/erase-window"},"next":{"title":"Frontmost window","permalink":"/docs/fr/commands/frontmost-window"}}'),d=t("785893"),s=t("250065");let i={id:"find-window",title:"Find window",slug:"/commands/find-window",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Find window"})," ( ",(0,d.jsx)(e.em,{children:"gauche"})," ; ",(0,d.jsx)(e.em,{children:"haut"})," {; ",(0,d.jsx)(e.em,{children:"partieFen\xeatre"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Param\xe8tre"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"gauche"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Coordonn\xe9e globale gauche"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"haut"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Coordonn\xe9e globale sup\xe9rieure"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"partieFen\xeatre"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:'3 si une fen\xeatre est "touch\xe9e", 0 sinon'})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"R\xe9sultat"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fen\xeatre"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(e.p,{children:["La commande ",(0,d.jsx)(e.strong,{children:"Find window"}),' retourne (s\'il existe) le num\xe9ro de r\xe9f\xe9rence de la premi\xe8re fen\xeatre "touch\xe9e" par le point dont vous passez les coordonn\xe9es dans ',(0,d.jsx)(e.em,{children:"gauche"})," et ",(0,d.jsx)(e.em,{children:"haut"}),"."]}),"\n",(0,d.jsx)(e.p,{children:"Ces coordonn\xe9es doivent \xeatre exprim\xe9es relativement au coin sup\xe9rieur gauche de la zone de contenu (l'int\xe9rieur) de la fen\xeatre d'application (sous Windows) ou de l'\xe9cran principal (sous Mac OS)."}),"\n",(0,d.jsxs)(e.p,{children:["Le param\xe8tre ",(0,d.jsx)(e.em,{children:"partieFen\xeatre"})," retourne 3 si une fen\xeatre est touch\xe9e, et 0 sinon (",(0,d.jsx)(e.strong,{children:"Note de compatibilit\xe9 :"})," \xe0 compter de 4D v14, les constantes du th\xe8me ",(0,d.jsx)(e.em,{children:"Chercher fenetre"})," sont obsol\xe8tes)."]}),"\n",(0,d.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/fr/commands/frontmost-window",children:"Frontmost window"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/fr/commands/next-window",children:"Next window"})]}),"\n",(0,d.jsx)(e.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(e.td,{children:"449"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread safe"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var r=t(667294);let d={},s=r.createContext(d);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);