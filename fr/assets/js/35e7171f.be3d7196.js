"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66950],{728550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"longint-array-from-selection",title:"LONGINT ARRAY FROM SELECTION",slug:"/commands/longint-array-from-selection",displayed_sidebar:"docs"},l=void 0,o={id:"commands-legacy/longint-array-from-selection",title:"LONGINT ARRAY FROM SELECTION",description:"LONGINT ARRAY FROM SELECTION ( laTable ; tabEnrg {; tempo} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/longint-array-from-selection.md",sourceDirName:"commands-legacy",slug:"/commands/longint-array-from-selection",permalink:"/docs/fr/commands/longint-array-from-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flongint-array-from-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"longint-array-from-selection",title:"LONGINT ARRAY FROM SELECTION",slug:"/commands/longint-array-from-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LIST TO ARRAY",permalink:"/docs/fr/commands/list-to-array"},next:{title:"MULTI SORT ARRAY",permalink:"/docs/fr/commands/multi-sort-array"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LONGINT ARRAY FROM SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"laTable"})," ; ",(0,r.jsx)(n.em,{children:"tabEnrg"})," {; ",(0,r.jsx)(n.em,{children:"tempo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table de la s\xe9lection courante"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabEnrg"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Tableau de num\xe9ros d\u2019enregistrements"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tempo"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom de la s\xe9lection temporaire ou S\xe9lection courante si ce param\xe8tre est omis"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"LONGINT ARRAY FROM SELECTION"})," remplit le tableau ",(0,r.jsx)(n.em,{children:"tabEnrg"})," avec les num\xe9ros (absolus) des enregistrements faisant partie de la s\xe9lection temporaire ",(0,r.jsx)(n.em,{children:"tempo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,r.jsx)(n.em,{children:"tempo"}),", la commande utilise la s\xe9lection courante de la table ",(0,r.jsx)(n.em,{children:"table"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," L\u2019\xe9l\xe9ment n\xb0 0 du tableau ",(0,r.jsx)(n.em,{children:"tabEnrg"})," est initialis\xe9 \xe0 -1."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous voulez r\xe9cup\xe9rer les num\xe9ros des enregistrements de la s\xe9lection courante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY LONGINT($_tRecNum;0)\xa0//obligatoire pour le mode compil\xe9\n\xa0LONGINT ARRAY FROM SELECTION([Clients];$_tRecNum)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);