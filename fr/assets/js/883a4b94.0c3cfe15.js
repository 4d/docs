"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94654],{578721:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=r(474848),t=r(28453);const i={id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/trigger-properties",title:"TRIGGER PROPERTIES",description:"TRIGGER PROPERTIES ( niveauTrigger ; evenementBase ; numTable ; numEnreg )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-properties.md",sourceDirName:"commands-legacy",slug:"/commands/trigger-properties",permalink:"/docs/fr/commands/trigger-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Trigger level",permalink:"/docs/fr/commands/trigger-level"},next:{title:"BEEP",permalink:"/docs/fr/commands/beep"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," ( ",(0,s.jsx)(n.em,{children:"niveauTrigger"})," ; ",(0,s.jsx)(n.em,{children:"evenementBase"})," ; ",(0,s.jsx)(n.em,{children:"numTable"})," ; ",(0,s.jsx)(n.em,{children:"numEnreg"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"niveauTrigger"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Niveau d'ex\xe9cution du trigger"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"evenementBase"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Ev\xe9nement de base de donn\xe9es"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numTable"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numEnreg"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de l'enregistrement"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," fournit des informations sur le niveau d'ex\xe9cution du trigger que vous avez pass\xe9 dans ",(0,s.jsx)(n.em,{children:"niveauTrigger"}),". Vous devez utiliser conjointement ",(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-level",children:"Trigger level"})," pour effectuer diff\xe9rentes actions en fonction de la cascade du trigger. Reportez-vous \xe0 la description des triggers en cascade dans la section ",(0,s.jsx)(n.em,{children:"Pr\xe9sentation des triggers"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Si vous passez un niveau d'ex\xe9cution de trigger inexistant, la commande retourne 0 (z\xe9ro) dans chaque param\xe8tre."}),"\n",(0,s.jsxs)(n.p,{children:["La nature de l'\xe9v\xe9nement de base de donn\xe9es pour le niveau d'ex\xe9cution du trigger est retourn\xe9e dans ",(0,s.jsx)(n.em,{children:"evenementBase"}),'. Les constantes pr\xe9d\xe9finies suivantes sont fournies dans le th\xe8me "',(0,s.jsx)(n.em,{children:"Ev\xe9nements trigger"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deleting Record Event"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving New Record Event"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Le num\xe9ro de table et d'enregistrement pour l'enregistrement concern\xe9 par l'\xe9v\xe9nement de base de donn\xe9es pour le niveau d'ex\xe9cution du trigger sont retourn\xe9s dans ",(0,s.jsx)(n.em,{children:"numTable"})," et ",(0,s.jsx)(n.em,{children:"numEnreg"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Pr\xe9sentation des triggers"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-event",children:"Trigger event"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-level",children:"Trigger level"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(296540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);