"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75292"],{58426:function(e,t,s){s.r(t),s.d(t,{default:()=>l,frontMatter:()=>o,metadata:()=>a,assets:()=>u,toc:()=>i,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/on-server-startup-database-method","title":"On Server Startup database method","description":"On Server Startup database method","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-startup-database-method","permalink":"/docs/fr/commands/on-server-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-startup-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-startup-database-method","title":"On Server Startup database method","slug":"/commands/on-server-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Shutdown database method","permalink":"/docs/fr/commands/on-server-shutdown-database-method"},"next":{"title":"On SQL Authentication database method","permalink":"/docs/fr/commands/on-sql-authentication-database-method"}}'),r=s("785893"),n=s("250065");let o={id:"on-server-startup-database-method",title:"On Server Startup database method",slug:"/commands/on-server-startup-database-method",displayed_sidebar:"docs"},d=void 0,u={},i=[];function c(e){let t={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"On Server Startup database method"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(t.table,{children:(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Ne requiert pas de param\xe8tre"}),(0,r.jsx)(t.th,{})]})})}),"\n",(0,r.jsx)(t.h4,{id:""}),"\n",(0,r.jsx)(t.p,{children:"La m\xe9thode base Sur d\xe9marrage serveur est appel\xe9e une fois sur le poste serveur lorsque vous ouvrez une base avec 4D Server. La m\xe9thode base Sur d\xe9marrage serveur n'est jamais ex\xe9cut\xe9e dans un environnement autre que 4D Server."}),"\n",(0,r.jsx)(t.p,{children:"La m\xe9thode base Sur d\xe9marrage serveur est l'emplacement id\xe9al pour :"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Initialiser les variables interprocess utilis\xe9es pendant toute la session 4D Server."}),"\n",(0,r.jsxs)(t.li,{children:["D\xe9marrer automatiquement des ",(0,r.jsx)(t.em,{children:"Proc\xe9dures stock\xe9es"})," \xe0 l'ouverture de la base."]}),"\n",(0,r.jsx)(t.li,{children:"Charger des pr\xe9f\xe9rences ou des param\xe9trages sauvegard\xe9(e)s dans ce but lors de la pr\xe9c\xe9dente session 4D Server."}),"\n",(0,r.jsxs)(t.li,{children:["Emp\xeacher l'ouverture de la base si une condition n'est pas remplie (par exemple, absence de ressources syst\xe8me) par un appel explicite \xe0 ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Placer toute action devant \xeatre automatiquement effectu\xe9e \xe0 chaque ouverture de la base."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Si vous souhaitez ex\xe9cuter du code automatiquement sur un poste client lorsqu'un 4D distant se connecte au serveur, utilisez la ",(0,r.jsx)(t.a,{href:"/docs/fr/commands/on-startup-database-method",children:"On Startup database method"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note :"})," La m\xe9thode base Sur d\xe9marrage serveur est ex\xe9cut\xe9e de fa\xe7on atomique, ce qui signifie qu'aucun 4D distant ne peut se connecter tant que l'ex\xe9cution de la m\xe9thode n'est pas termin\xe9e."]})]})}function l(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return o}});var a=s(667294);let r={},n=a.createContext(r);function o(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);