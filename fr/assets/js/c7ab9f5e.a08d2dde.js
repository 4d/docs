"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20803],{472626:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=n(474848),r=n(28453);const a={id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/flush-cache",title:"FLUSH CACHE",description:"FLUSH CACHE {( taille | * )}",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/flush-cache.md",sourceDirName:"commands-legacy",slug:"/commands/flush-cache",permalink:"/docs/fr/commands/flush-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fflush-cache.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Cache info",permalink:"/docs/fr/commands/cache-info"},next:{title:"Get adjusted blobs cache priority",permalink:"/docs/fr/commands/get-adjusted-blobs-cache-priority"}},d={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"FLUSH CACHE"})," {( taille | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"taille | *"}),(0,t.jsx)(s.td,{children:"R\xe9el, Op\xe9rateur"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"* pour vider le cache, ou nombre d'octets minimum de lib\xe9ration du cache"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"FLUSH CACHE"})," sauvegarde imm\xe9diatement le cache de donn\xe9es sur le disque. Toutes les modifications apport\xe9es \xe0 la base sont alors stock\xe9es sur disque."]}),"\n",(0,t.jsx)(s.p,{children:"Par d\xe9faut, cette commande n'affecte pas le contenu courant du cache, ce qui signifie que les donn\xe9es qu'il contient restent utilisables lors des acc\xe8s en lecture ult\xe9rieurs. Optionnellement, vous pouvez passer un param\xe8tre pour le modifier :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["passez ",(0,t.jsx)(s.em,{children:"*"})," pour sauvegarder le cache et vider enti\xe8rement le cache de la m\xe9moire,"]}),"\n",(0,t.jsxs)(s.li,{children:["passez une valeur pour sauvegarder le cache et lib\xe9rer au minimum le nombre ",(0,t.jsx)(s.em,{children:"taille"})," d'octets dans le cache."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Passer un param\xe8tre \xe0 cette commande est \xe0 envisager uniquement pour effectuer des tests. Pour des raisons de performances, il est fortement d\xe9conseill\xe9 de vider le cache en environnement de production."]}),"\n",(0,t.jsxs)(s.p,{children:["En temps normal, vous n'avez pas \xe0 appeler cette commande, car 4D sauvegarde r\xe9guli\xe8rement les modifications. Il est pr\xe9f\xe9rable d'utiliser l'option ",(0,t.jsx)(s.strong,{children:"Ecriture cache toutes les X mn"}),"/",(0,t.jsx)(s.strong,{children:"secondes"})," (option de la page ",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/fr/settings/database/",children:"Base de donn\xe9es"})," des Propri\xe9t\xe9s de la base), qui sp\xe9cifie les intervalles de sauvegarde des donn\xe9es, afin de contr\xf4ler l'\xe9criture du cache de donn\xe9es sur le disque. Il est recommand\xe9 d'utiliser la valeur par d\xe9faut, qui est de 20 secondes. Notez \xe9galement que le param\xe8tre Cache flush periodicity peut \xeatre utilis\xe9 avec les commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-database-parameter",children:"Get database parameter"})," pour fixer ou lire cet intervalle."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-database-parameter",children:"Get database parameter"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var t=n(296540);const r={},a=t.createContext(r);function c(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);