"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32589"],{794649:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/web-set-home-page","title":"WEB SET HOME PAGE","description":"WEB SET HOME PAGE ( homePage )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-set-home-page.md","sourceDirName":"commands-legacy","slug":"/commands/web-set-home-page","permalink":"/docs/fr/commands/web-set-home-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-set-home-page.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-set-home-page","title":"WEB SET HOME PAGE","slug":"/commands/web-set-home-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Server list","permalink":"/docs/fr/commands/web-server-list"},"next":{"title":"WEB SET HTTP HEADER","permalink":"/docs/fr/commands/web-set-http-header"}}'),r=s("785893"),d=s("250065");let a={id:"web-set-home-page",title:"WEB SET HOME PAGE",slug:"/commands/web-set-home-page",displayed_sidebar:"docs"},o=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SET HOME PAGE"})," ( ",(0,r.jsx)(n.em,{children:"homePage"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"homePage"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Nom de page ou chemin d\u2019acc\xe8s HTML \xe0 la page ou "" pour ne pas envoyer de page d\u2019accueil personnalis\xe9e'})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"WEB SET HOME PAGE"})," vous permet de modifier la page d\u2019accueil (page Home) personnalis\xe9e pour le process Web courant."]}),"\n",(0,r.jsx)(n.p,{children:"La page d\xe9finie est li\xe9e au process Web, vous pouvez donc d\xe9finir des pages d\u2019accueil diff\xe9rentes en fonction, par exemple, de l\u2019utilisateur connect\xe9. Cette page peut \xeatre statique ou semi-dynamique."}),"\n",(0,r.jsxs)(n.p,{children:["Vous passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"homePage"})," le nom de la page HTML d\u2019accueil ou le chemin d\u2019acc\xe8s HTML complet \xe0 la page."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si la page d\xe9finie par le param\xe8tre ",(0,r.jsx)(n.em,{children:"homePage"})," n'existe pas lorsque le process Web y acc\xe8de pour la premi\xe8re fois, le serveur Web la cr\xe9e et lui affecte le contenu de la ."]}),"\n",(0,r.jsxs)(n.p,{children:["Pour ne plus envoyer ",(0,r.jsx)(n.em,{children:"homePage"})," comme page d\u2019accueil pour le process Web courant, appelez de nouveau la commande ",(0,r.jsx)(n.strong,{children:"WEB SET HOME PAGE"}),' en passant une cha\xeene vide ("") dans ',(0,r.jsx)(n.em,{children:"homePage"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La page d\u2019accueil par d\xe9faut du serveur Web est d\xe9finie dans les Propri\xe9t\xe9s de la base."]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"639"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(667294);let r={},d=t.createContext(r);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);