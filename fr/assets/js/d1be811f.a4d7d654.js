"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11349],{516749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(474848),r=t(28453);const a={id:"reload-external-data",title:"RELOAD EXTERNAL DATA",slug:"/commands/reload-external-data",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/reload-external-data",title:"RELOAD EXTERNAL DATA",description:"RELOAD EXTERNAL DATA ( leChamp )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/reload-external-data.md",sourceDirName:"commands-legacy",slug:"/commands/reload-external-data",permalink:"/docs/fr/commands/reload-external-data",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freload-external-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"reload-external-data",title:"RELOAD EXTERNAL DATA",slug:"/commands/reload-external-data",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"REGENERATE MISSING TABLE",permalink:"/docs/fr/commands/regenerate-missing-table"},next:{title:"RESUME INDEXES",permalink:"/docs/fr/commands/resume-indexes"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," ( ",(0,s.jsx)(n.em,{children:"leChamp"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"leChamp"}),(0,s.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Champ pour lequel recharger les donn\xe9es"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," vous permet de recharger en m\xe9moire le contenu d\u2019un fichier de stockage externe associ\xe9 \xe0 un champ de type Blob, Image ou Texte."]}),"\n",(0,s.jsx)(n.p,{children:"Cette commande est utile dans le cas o\xf9 le champ d\u2019un enregistrement d\xe9j\xe0 charg\xe9 en m\xe9moire est modifi\xe9 sur le disque par une autre application (les fichiers de stockage externe des champs sont toujours accessibles en \xe9criture). Par exemple, une image utilis\xe9e dans un champ image est modifi\xe9e par un \xe9diteur graphique puis sauvegard\xe9e sur disque."}),"\n",(0,s.jsxs)(n.p,{children:["Il est alors n\xe9cessaire de demander le rechargement des donn\xe9es \xe0 l'aide de la commande ",(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," pour mettre \xe0 jour le contenu du champ s\u2019il est affich\xe9 dans un formulaire."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," La commande ",(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," fonctionne uniquement sur 4D local ou 4D Server. Il n\u2019est pas possible de recharger individuellement un champ avec 4D en mode distant. Il est n\xe9cessaire dans ce contexte de recharger l\u2019ensemble de l\u2019enregistrement (\xe0 l\u2019aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/load-record",children:"LOAD RECORD"})," par exemple)."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-external-data-path",children:"SET EXTERNAL DATA PATH"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var s=t(296540);const r={},a=s.createContext(r);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);