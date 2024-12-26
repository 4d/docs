"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18350"],{168227:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/trigger-properties","title":"TRIGGER PROPERTIES","description":"TRIGGER PROPERTIES ( niveauTrigger ; evenementBase ; numTable ; numEnreg )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-properties.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-properties","permalink":"/docs/fr/commands/trigger-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trigger-properties","title":"TRIGGER PROPERTIES","slug":"/commands/trigger-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Trigger level","permalink":"/docs/fr/commands/trigger-level"},"next":{"title":"User Interface","permalink":"/docs/fr/category/user-interface"}}'),t=r("785893"),i=r("250065");let d={id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"niveauTrigger"})," ; ",(0,t.jsx)(n.em,{children:"evenementBase"})," ; ",(0,t.jsx)(n.em,{children:"numTable"})," ; ",(0,t.jsx)(n.em,{children:"numEnreg"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"niveauTrigger"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Niveau d'ex\xe9cution du trigger"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"evenementBase"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Ev\xe9nement de base de donn\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numTable"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de la table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numEnreg"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de l'enregistrement"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," fournit des informations sur le niveau d'ex\xe9cution du trigger que vous avez pass\xe9 dans ",(0,t.jsx)(n.em,{children:"niveauTrigger"}),". Vous devez utiliser conjointement ",(0,t.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/trigger-level",children:"Trigger level"})," pour effectuer diff\xe9rentes actions en fonction de la cascade du trigger. Reportez-vous \xe0 la description des triggers en cascade dans la section ",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des triggers"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si vous passez un niveau d'ex\xe9cution de trigger inexistant, la commande retourne 0 (z\xe9ro) dans chaque param\xe8tre."}),"\n",(0,t.jsxs)(n.p,{children:["La nature de l'\xe9v\xe9nement de base de donn\xe9es pour le niveau d'ex\xe9cution du trigger est retourn\xe9e dans ",(0,t.jsx)(n.em,{children:"evenementBase"}),'. Les constantes pr\xe9d\xe9finies suivantes sont fournies dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Ev\xe9nements trigger"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Deleting Record Event"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Saving New Record Event"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Le num\xe9ro de table et d'enregistrement pour l'enregistrement concern\xe9 par l'\xe9v\xe9nement de base de donn\xe9es pour le niveau d'ex\xe9cution du trigger sont retourn\xe9s dans ",(0,t.jsx)(n.em,{children:"numTable"})," et ",(0,t.jsx)(n.em,{children:"numEnreg"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"A propos des num\xe9ros d'enregistrements"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des triggers"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/trigger-event",children:"Trigger event"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/trigger-level",children:"Trigger level"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"399"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);