"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32824"],{334361:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/on-server-close-connection-database-method","title":"On Server Close Connection database method","description":"$1, $2, $3 -> On Server Close Connection database method","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-close-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-close-connection-database-method","permalink":"/docs/fr/commands/on-server-close-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-close-connection-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-close-connection-database-method","title":"On Server Close Connection database method","slug":"/commands/on-server-close-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On REST Authentication database method","permalink":"/docs/fr/commands/on-rest-authentication-database-method"},"next":{"title":"On Server Open Connection database method","permalink":"/docs/fr/commands/on-server-open-connection-database-method"}}'),s=t("785893"),o=t("250065");let d={id:"on-server-close-connection-database-method",title:"On Server Close Connection database method",slug:"/commands/on-server-close-connection-database-method",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"$1, $2, $3 -> On Server Close Connection database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'utilisateur utilis\xe9 en interne par 4D Server pour identifier les utilisateurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de connexion utilis\xe9 en interne par 4D Server pour identifier une connexion"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$3"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Obsol\xe8te : Retourne toujours 0 mais doit \xeatre d\xe9clar\xe9"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La ",(0,s.jsx)(n.strong,{children:"On Server Close Connection database method"})," est ex\xe9cut\xe9e sur le poste serveur \xe0 chaque fois qu'un process 4D Client est referm\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Comme pour la ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),", 4D Server passe trois param\xe8tres de type Entier long \xe0 la ",(0,s.jsx)(n.strong,{children:"On Server Close Connection database method"}),". En revanche, 4D Server n'attend pas de r\xe9sultat en retour."]}),"\n",(0,s.jsx)(n.p,{children:"Par cons\xe9quent, la m\xe9thode doit contenir la d\xe9claration explicite des trois param\xe8tres Entier long :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $1;$2;$3 : Integer\n"})}),"\n",(0,s.jsx)(n.p,{children:"Le tableau suivant d\xe9taille les informations fournies par les trois param\xe8tres pass\xe9s \xe0 la m\xe9thode base :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Param\xe8tre"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'utilisateur utilis\xe9 en interne par 4D Server pour identifier les utilisateurs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$2"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de connexion utilis\xe9 en interne par 4D Server pour identifier une connexion"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$3"}),(0,s.jsx)(n.td,{children:"Obsol\xe8te : Retourne toujours 0 mais doit \xeatre d\xe9clar\xe9"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["La ",(0,s.jsx)(n.strong,{children:"On Server Close Connection database method"})," est le pendant inverse de la ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),". Pour plus d'informations sur ce point, ainsi que pour la description des ",(0,s.jsx)(n.strong,{children:"process 4D Client"}),", reportez-vous \xe0 la description de cette m\xe9thode base."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["Reportez-vous au premier exemple de la ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},o=r.createContext(s);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);