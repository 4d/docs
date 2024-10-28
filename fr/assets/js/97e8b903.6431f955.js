"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42768],{801934:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(474848),t=s(28453);const i={id:"set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",slug:"/commands/set-table-cache-priority",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",description:"SET TABLE CACHE PRIORITY ( laTable ; priorit\xe9 )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-table-cache-priority.md",sourceDirName:"commands-legacy",slug:"/commands/set-table-cache-priority",permalink:"/docs/fr/commands/set-table-cache-priority",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",slug:"/commands/set-table-cache-priority",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET INDEX CACHE PRIORITY",permalink:"/docs/fr/commands/set-index-cache-priority"},next:{title:"ARRAY TO COLLECTION",permalink:"/docs/fr/commands/array-to-collection"}},a={},l=[{value:"Mode expert",id:"mode-expert",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TABLE CACHE PRIORITY"})," ( ",(0,r.jsx)(n.em,{children:"laTable"})," ; ",(0,r.jsx)(n.em,{children:"priorit\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table dont vous souhaitez modifier la priorit\xe9 des donn\xe9es scalaires pour toute la session"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"priorit\xe9"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Priorit\xe9 des valeurs scalaires de la table dans le cache"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"mode-expert",children:"Mode expert"}),"\n",(0,r.jsx)(n.p,{children:"Cette commande est r\xe9serv\xe9e pour des besoins sp\xe9cifiques. Elle doit \xeatre utilis\xe9e avec pr\xe9caution car elle peut affecter les performances de la base."}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET TABLE CACHE PRIORITY"})," applique une ",(0,r.jsx)(n.em,{children:"priorit\xe9"})," sp\xe9cifique aux donn\xe9es de ",(0,r.jsx)(n.em,{children:"laTable"})," charg\xe9es dans le cache pour tous les process dans la session courante. Elle doit \xeatre appel\xe9e dans la m\xe9thode base ",(0,r.jsx)(n.strong,{children:"Sur ouverture"})," ou ",(0,r.jsx)(n.strong,{children:"Sur d\xe9marrage serveur"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas \xeatre utilis\xe9e avec 4D en mode distant."]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande d\xe9finit uniquement la priorit\xe9 des champs scalaires de la table (types date, num\xe9riques ou alpha). La priorit\xe9 des types de champs binaires (Blob, texte, images et objets) est g\xe9r\xe9e via la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"priorit\xe9"}),' une des constantes du th\xe8me "',(0,r.jsx)(n.em,{children:"Gestion du cache"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority normal"}),(0,r.jsx)(n.td,{children:"R\xe9tablit la priorit\xe9 de cache \xe0 sa valeur par d\xe9faut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority high"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very high"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Dans la , vous souhaitez fixer une priorit\xe9 tr\xe8s haute pour les donn\xe9es scalaires de la table [Client] :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET TABLE CACHE PRIORITY([Client];Cache priority very high)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(296540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);