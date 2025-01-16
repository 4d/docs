"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85153"],{489577:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/set-blobs-cache-priority","title":"SET BLOBS CACHE PRIORITY","description":"SET BLOBS CACHE PRIORITY ( laTable ; priorit\xe9 )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-blobs-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-blobs-cache-priority","permalink":"/docs/fr/commands/set-blobs-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-blobs-cache-priority.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-blobs-cache-priority","title":"SET BLOBS CACHE PRIORITY","slug":"/commands/set-blobs-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MEMORY STATISTICS","permalink":"/docs/fr/commands/memory-statistics"},"next":{"title":"SET CACHE SIZE","permalink":"/docs/fr/commands/set-cache-size"}}'),t=s("785893"),i=s("250065");let d={id:"set-blobs-cache-priority",title:"SET BLOBS CACHE PRIORITY",slug:"/commands/set-blobs-cache-priority",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Mode expert",id:"mode-expert",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET BLOBS CACHE PRIORITY"})," ( ",(0,t.jsx)(n.em,{children:"laTable"})," ; ",(0,t.jsx)(n.em,{children:"priorit\xe9"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:'Table dont vous souhaitez modifier la priorit\xe9 des donn\xe9es "blobs" pour toute la session'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"priorit\xe9"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:'Priorit\xe9 des donn\xe9es "blobs" de la table dans le cache'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"mode-expert",children:"Mode expert"}),"\n",(0,t.jsx)(n.p,{children:"Cette commande est r\xe9serv\xe9e pour des besoins sp\xe9cifiques. Elle doit \xeatre utilis\xe9e avec pr\xe9caution car elle peut affecter les performances de la base."}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET BLOBS CACHE PRIORITY"})," applique une ",(0,t.jsx)(n.em,{children:"priorit\xe9"}),' sp\xe9cifique aux "blobs" de ',(0,t.jsx)(n.em,{children:"laTable"})," charg\xe9es dans le cache pour tous les process dans la session courante. Elle doit \xeatre appel\xe9e dans la m\xe9thode base ",(0,t.jsx)(n.strong,{children:"Sur ouverture"})," ou ",(0,t.jsx)(n.strong,{children:"Sur d\xe9marrage serveur"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas \xeatre utilis\xe9e avec 4D en mode distant."]}),"\n",(0,t.jsx)(n.p,{children:'Les champs de donn\xe9es "blobs" incluent les types BLOB, texte, image et objet. La commande modifie la priorit\xe9 de ces donn\xe9es uniquement lorsqu\'elles sont stock\xe9es dans le fichier de donn\xe9es.'}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"priorit\xe9"}),' une des constantes du th\xe8me "',(0,t.jsx)(n.em,{children:"Gestion du cache"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cache priority low"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cache priority very low"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cache priority normal"}),(0,t.jsx)(n.td,{children:"R\xe9tablit la priorit\xe9 de cache \xe0 sa valeur par d\xe9faut"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cache priority high"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Cache priority very high"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:'Dans la , vous souhaitez fixer une priorit\xe9 tr\xe8s haute pour les "blobs" de la table [Client] :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOBS CACHE PRIORITY([Client];Cache priority very high)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/adjust-blobs-cache-priority",children:"ADJUST BLOBS CACHE PRIORITY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-adjusted-blobs-cache-priority",children:"Get adjusted blobs cache priority"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1425"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);