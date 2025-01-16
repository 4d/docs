"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69184"],{900656:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/users-to-blob","title":"USERS TO BLOB","description":"USERS TO BLOB ( utilisateurs )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/users-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/users-to-blob","permalink":"/docs/fr/20-R7/commands/users-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fusers-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"users-to-blob","title":"USERS TO BLOB","slug":"/commands/users-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"User in group","permalink":"/docs/fr/20-R7/commands/user-in-group"},"next":{"title":"Validate password","permalink":"/docs/fr/20-R7/commands/validate-password"}}'),r=n("785893"),i=n("250065");let d={id:"users-to-blob",title:"USERS TO BLOB",slug:"/commands/users-to-blob",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"USERS TO BLOB"})," ( ",(0,r.jsx)(s.em,{children:"utilisateurs"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"utilisateurs"}),(0,r.jsx)(s.td,{children:"Blob"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"BLOB devant contenir les utilisateurs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Comptes utilisateurs (crypt\xe9)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note de compatibilit\xe9 :"})," Cette commande fonctionne uniquement dans les bases binaires. Elle retourne toujours un BLOB vide dans les projets."]}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"USERS TO BLOB"})," stocke dans le BLOB ",(0,r.jsx)(s.em,{children:"utilisateurs"})," la liste de tous les comptes d\u2019utilisateurs et les groupes de la base cr\xe9\xe9s par l\u2019Administrateur."]}),"\n",(0,r.jsx)(s.p,{children:"Seuls l\u2019Administrateur et le Super_Utilisateur de la base peuvent ex\xe9cuter cette commande. Si un autre utilisateur tente de l\u2019ex\xe9cuter, la commande ne fait rien et une erreur de privil\xe8ge (-9949) est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsxs)(s.p,{children:["Le BLOB g\xe9n\xe9r\xe9 est automatiquement encrypt\xe9 et ne peut \xeatre lu que par la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/blob-to-users",children:"BLOB TO USERS"}),". Vous pouvez stocker ce BLOB dans un fichier disque ou dans un champ.",(0,r.jsx)(s.br,{}),"\nCette commande \xe9quivaut \xe0 l\u2019enregistrement des groupes et utilisateurs depuis la fen\xeatre de gestion des groupes de la Bo\xeete \xe0 outils, \xe0 la diff\xe9rence pr\xe8s qu\u2019elle permet de stocker les comptes utilisateurs dans un champ BLOB et non uniquement dans un fichier."]}),"\n",(0,r.jsx)(s.p,{children:"Ce principe permet de conserver une sauvegarde des utilisateurs parmi les donn\xe9es de la base, et ainsi de mettre en place un m\xe9canisme de sauvegarde et de chargement automatiques des utilisateurs en cas de mise \xe0 jour de la structure de la base (en effet, les informations relatives aux comptes utilisateurs sont stock\xe9es par 4D dans le fichier de structure de la base)."}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/20-R7/commands/blob-to-users",children:"BLOB TO USERS"})}),"\n",(0,r.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"849"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifie les variables"}),(0,r.jsx)(s.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return d}});var t=n(667294);let r={},i=t.createContext(r);function d(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);