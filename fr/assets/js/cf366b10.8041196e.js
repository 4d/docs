"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9388"],{280903:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/set-plugin-access","title":"SET PLUGIN ACCESS","description":"SET PLUGIN ACCESS ( plugIn ; groupe )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-plugin-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-plugin-access","permalink":"/docs/fr/20-R7/commands/set-plugin-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-plugin-access.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-plugin-access","title":"SET PLUGIN ACCESS","slug":"/commands/set-plugin-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Set group properties","permalink":"/docs/fr/20-R7/commands/set-group-properties"},"next":{"title":"SET USER ALIAS","permalink":"/docs/fr/20-R7/commands/set-user-alias"}}'),t=s("785893"),i=s("250065");let d={id:"set-plugin-access",title:"SET PLUGIN ACCESS",slug:"/commands/set-plugin-access",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET PLUGIN ACCESS"})," ( ",(0,t.jsx)(n.em,{children:"plugIn"})," ; ",(0,t.jsx)(n.em,{children:"groupe"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"plugIn"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro du plug-in"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupe"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom du groupe \xe0 associer au plug-in"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET PLUGIN ACCESS"})," permet de sp\xe9cifier par programmation le groupe d\u2019utilisateurs autoris\xe9 \xe0 utiliser chaque plug-in \u201Cs\xe9rialis\xe9\u201D install\xe9 dans la base. Cette d\xe9finition permet de g\xe9rer la r\xe9partition des licences des plug-ins."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette op\xe9ration peut \xe9galement \xeatre effectu\xe9e en mode D\xe9veloppement dans l'\xe9diteur de groupes."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"plugIn"})," le num\xe9ro du plug-in auquel associer un groupe d\u2019utilisateurs. Les licences de plug-ins incluent les licences Web et SOAP de 4D Client. Vous pouvez passer une des constantes suivantes du th\xe8me \u201C",(0,t.jsx)(n.em,{children:"Licence disponible"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D Client SOAP license"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"808465465"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D Client Web license"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"808465209"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D for OCI license"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"808465208"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D ODBC Pro license"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"808464946"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D View license"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"808465207"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D Write license"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"808464697"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"groupe"})," le nom du groupe dont les utilisateurs seront autoris\xe9s \xe0 utiliser le plug-in."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L'autorisation d'acc\xe8s \xe0 un plug-in n'est accord\xe9e qu'\xe0 un seul groupe. Si un autre groupe disposait d\xe9j\xe0 de l'autorisation d'acc\xe8s, il perd ce privil\xe8ge \xe0 l'issue de l'ex\xe9cution de la commande."}),"\n",(0,t.jsxs)(n.li,{children:["Les licences utilis\xe9es resteront associ\xe9es aux comptes utilisateurs 4D dans ",(0,t.jsx)(n.em,{children:"groupe"})," durant toute la session, m\xeame si elles changent de groupe ou si le ",(0,t.jsx)(n.em,{children:"groupe"})," perd ses droits d'acc\xe8s au plug-in."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-plugin-access",children:"Get plugin access"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/plugin-list",children:"PLUGIN LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-group-access",children:"SET GROUP ACCESS"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"845"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);