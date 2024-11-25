"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28438"],{300516:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-index-cache-priority","title":"SET INDEX CACHE PRIORITY","description":"SET INDEX CACHE PRIORITY ( leChamp ; priorit\xe9 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-index-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-index-cache-priority","permalink":"/docs/fr/commands/set-index-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-index-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-index-cache-priority","title":"SET INDEX CACHE PRIORITY","slug":"/commands/set-index-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CACHE SIZE","permalink":"/docs/fr/commands/set-cache-size"},"next":{"title":"SET TABLE CACHE PRIORITY","permalink":"/docs/fr/commands/set-table-cache-priority"}}'),i=r("785893"),t=r("250065");let d={id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Mode expert",id:"mode-expert",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," ( ",(0,i.jsx)(n.em,{children:"leChamp"})," ; ",(0,i.jsx)(n.em,{children:"priorit\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"leField"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Champ dont vous voulez modifier la priorit\xe9 des index pour toute la session"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"priorit\xe9"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Priorit\xe9 du ou des index du champ dans le cache"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"mode-expert",children:"Mode expert"}),"\n",(0,i.jsx)(n.p,{children:"Cette commande est r\xe9serv\xe9e pour des besoins sp\xe9cifiques. Elle doit \xeatre utilis\xe9e avec pr\xe9caution car elle peut affecter les performances de la base."}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," applique une ",(0,i.jsx)(n.em,{children:"priorit\xe9"})," sp\xe9cifique aux index du champ ",(0,i.jsx)(n.em,{children:"leChamp"})," charg\xe9s dans le cache pour tous les process dans la session courante. Elle doit \xeatre appel\xe9e dans la m\xe9thode base ",(0,i.jsx)(n.strong,{children:"Sur ouverture"})," ou ",(0,i.jsx)(n.strong,{children:"Sur d\xe9marrage serveur"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas \xeatre utilis\xe9e avec 4D en mode distant."]}),"\n",(0,i.jsxs)(n.p,{children:["Cette commande d\xe9finit la priorit\xe9 de tous les index li\xe9s au champ ",(0,i.jsx)(n.em,{children:"leChamp"}),", y compris les index de mots-cl\xe9s (\xe0 noter qu'il n'est pas possible de personnaliser la priorit\xe9 des index composites)."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"priorit\xe9"}),' une des constantes du th\xe8me "',(0,i.jsx)(n.em,{children:"Gestion du cache"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority low"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority very low"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority normal"}),(0,i.jsx)(n.td,{children:"R\xe9tablit la priorit\xe9 de cache \xe0 sa valeur par d\xe9faut"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority high"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority very high"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.p,{children:"Dans la , vous souhaitez d\xe9finir une priorit\xe9 tr\xe8s haute pour les index du champ [Client]Nom :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX CACHE PRIORITY([Client]Nom;Cache priority very high)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);