"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37726"],{192967:function(n,e,s){s.r(e),s.d(e,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-plugin-access","title":"Get plugin access","description":"Get plugin access ( plugIn ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-plugin-access.md","sourceDirName":"commands-legacy","slug":"/commands/get-plugin-access","permalink":"/docs/fr/commands/get-plugin-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-plugin-access.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-plugin-access","title":"Get plugin access","slug":"/commands/get-plugin-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET GROUP PROPERTIES","permalink":"/docs/fr/commands/get-group-properties"},"next":{"title":"GET USER LIST","permalink":"/docs/fr/commands/get-user-list"}}'),r=s("785893"),i=s("250065");let c={id:"get-plugin-access",title:"Get plugin access",slug:"/commands/get-plugin-access",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Get plugin access"})," ( ",(0,r.jsx)(e.em,{children:"plugIn"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Param\xe8tre"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"plugIn"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Num\xe9ro du plug-in"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"R\xe9sultat"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"Nom du groupe associ\xe9 au plug-in"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["La commande ",(0,r.jsx)(e.strong,{children:"Get plugin access"})," retourne le nom du groupe d\u2019utilisateurs autoris\xe9 \xe0 utiliser le plug-in dont le num\xe9ro a \xe9t\xe9 pass\xe9 dans le param\xe8tre ",(0,r.jsx)(e.em,{children:"plugIn"}),'. Si aucun groupe n\u2019est associ\xe9 au plug-in, la commande retourne une cha\xeene vide ("").']}),"\n",(0,r.jsxs)(e.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(e.em,{children:"plugIn"})," le num\xe9ro du plug-in duquel vous souhaitez conna\xeetre le groupe d\u2019utilisateurs associ\xe9. Les licences de plug-ins incluent les licences Web et SOAP de 4D Client. Vous pouvez passer une des constantes suivantes du th\xe8me ",(0,r.jsx)(e.em,{children:"Licence disponible"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Constante"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Valeur"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4D Client SOAP license"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"808465465"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4D Client Web license"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"808465209"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4D for OCI license"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"808465208"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4D ODBC Pro license"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"808464946"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4D View license"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"808465207"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"4D Write license"}),(0,r.jsx)(e.td,{children:"Entier long"}),(0,r.jsx)(e.td,{children:"808464697"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/fr/commands/set-group-access",children:"SET GROUP ACCESS"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/fr/commands/set-plugin-access",children:"SET PLUGIN ACCESS"})]}),"\n",(0,r.jsx)(e.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(e.td,{children:"846"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);