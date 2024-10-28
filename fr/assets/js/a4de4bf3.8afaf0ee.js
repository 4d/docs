"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84266],{640776:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=r(474848),d=r(28453);const s={id:"get-print-marker",title:"Get print marker",slug:"/commands/get-print-marker",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/get-print-marker",title:"Get print marker",description:"Get print marker ( numTaquet ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-print-marker.md",sourceDirName:"commands-legacy",slug:"/commands/get-print-marker",permalink:"/docs/fr/commands/get-print-marker",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-print-marker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-print-marker",title:"Get print marker",slug:"/commands/get-print-marker",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get current printer",permalink:"/docs/fr/commands/get-current-printer"},next:{title:"GET PRINT OPTION",permalink:"/docs/fr/commands/get-print-option"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function h(n){const e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Get print marker"})," ( ",(0,t.jsx)(e.em,{children:"numTaquet"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Param\xe8tre"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"numTaquet"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Num\xe9ro de taquet"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"R\xe9sultat"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Position du taquet"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["La commande ",(0,t.jsx)(e.strong,{children:"Get print marker"})," permet de r\xe9cup\xe9rer la position courante d\u2019un taquet lors d\u2019une impression. Les coordonn\xe9es sont retourn\xe9es en pixels (1 pixel = 1/72 pouce)."]}),"\n",(0,t.jsx)(e.p,{children:"Cette commande peut \xeatre appel\xe9e dans deux contextes :"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["lors de l\u2019\xe9v\xe9nement formulaire On Header, dans le cadre de l\u2019utilisation des commandes ",(0,t.jsx)(e.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," et ",(0,t.jsx)(e.a,{href:"/docs/fr/commands/print-record",children:"PRINT RECORD"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["lors de l\u2019\xe9v\xe9nement formulaire On Printing Detail, dans le cadre de l\u2019utilisation de la commande ",(0,t.jsx)(e.a,{href:"/docs/fr/commands/print-form",children:"Print form"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(e.em,{children:"numTaquet"}),' une des constantes du th\xe8me "',(0,t.jsx)(e.em,{children:"Zone de formulaire"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constante"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Valeur"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break0"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"300"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break1"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break2"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"302"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break3"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"303"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break4"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"304"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break5"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break6"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"306"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break7"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"307"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break8"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"308"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break9"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"309"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form detail"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form footer"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"100"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"200"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header1"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"201"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header10"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"210"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header2"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"202"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header3"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"203"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header4"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"204"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header5"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"205"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header6"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"206"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header7"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"207"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header8"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"208"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header9"}),(0,t.jsx)(e.td,{children:"Entier long"}),(0,t.jsx)(e.td,{children:"209"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(e.p,{children:["Reportez-vous \xe0 l\u2019exemple de la commande ",(0,t.jsx)(e.a,{href:"/docs/fr/commands/set-print-marker",children:"SET PRINT MARKER"}),"."]}),"\n",(0,t.jsx)(e.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/fr/commands/object-move",children:"OBJECT MOVE"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/fr/commands/set-print-marker",children:"SET PRINT MARKER"})]})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var t=r(296540);const d={},s=t.createContext(d);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);