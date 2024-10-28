"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17141],{310729:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=r(474848),d=r(28453);const t={id:"screen-coordinates",title:"SCREEN COORDINATES",slug:"/commands/screen-coordinates",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/screen-coordinates",title:"SCREEN COORDINATES",description:"SCREEN COORDINATES ( gauche ; haut ; droite ; bas {; idEcran {; zoneEcran}} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/screen-coordinates.md",sourceDirName:"commands-legacy",slug:"/commands/screen-coordinates",permalink:"/docs/fr/commands/screen-coordinates",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscreen-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"screen-coordinates",title:"SCREEN COORDINATES",slug:"/commands/screen-coordinates",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OPEN FONT PICKER",permalink:"/docs/fr/commands/open-font-picker"},next:{title:"SCREEN DEPTH",permalink:"/docs/fr/commands/screen-depth"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SCREEN COORDINATES"})," ( ",(0,s.jsx)(n.em,{children:"gauche"})," ; ",(0,s.jsx)(n.em,{children:"haut"})," ; ",(0,s.jsx)(n.em,{children:"droite"})," ; ",(0,s.jsx)(n.em,{children:"bas"})," {; ",(0,s.jsx)(n.em,{children:"idEcran"})," {; ",(0,s.jsx)(n.em,{children:"zoneEcran"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gauche"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e gauche de la zone de l'\xe9cran"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"haut"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e sup\xe9rieure de la zone de l'\xe9cran"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"droite"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e droite de la zone de l'\xe9cran"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bas"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Coordonn\xe9e inf\xe9rieure de la zone de l'\xe9cran"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"idEcran"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de l'\xe9cran ou \xe9cran principal si omis"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zoneEcran"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ecran entier (par d\xe9faut) ou zone de travail"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"SCREEN COORDINATES"})," retourne dans les param\xe8tres ",(0,s.jsx)(n.em,{children:"gauche"}),", ",(0,s.jsx)(n.em,{children:"haut"}),", ",(0,s.jsx)(n.em,{children:"droite"})," et ",(0,s.jsx)(n.em,{children:"bas"})," les coordonn\xe9es de l'\xe9cran sp\xe9cifi\xe9 dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"idEcran"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,s.jsx)(n.em,{children:"idEcran"}),", ",(0,s.jsx)(n.strong,{children:"SCREEN COORDINATES"})," retourne les coordonn\xe9es de l'\xe9cran principal."]}),"\n",(0,s.jsx)(n.p,{children:"Le param\xe8tre optionnel zoneEcran vous permet d'indiquer si vous souhaitez les coordonn\xe9es de la zone de l'\xe9cran entier (par d\xe9faut) ou uniquement les coordonn\xe9es de la zone utilisable disponible. Deux s\xe9lecteurs sont disponibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Screen size"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Les coordonn\xe9es de l'\xe9cran entier. (valeur par d\xe9faut)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Screen work area"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Les coordonn\xe9es de la zone de travail disponible pouvant \xeatre utilis\xe9es (c'est-\xe0-dire non utilis\xe9es par la barre de t\xe2ches de Windows ou par la barre de menu et le Dock de macOS)."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Les images suivantes illustrent les diff\xe9rences entre la zone de l'\xe9cran et la zone de travail :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(249199).A+"",width:"730",height:"201"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notes"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si la barre de t\xe2ches ou le Dock est automatiquement cach\xe9(e), ",(0,s.jsx)(n.strong,{children:"SCREEN COORDINATES"})," retourne toujours la taille de l'\xe9cran entier."]}),"\n",(0,s.jsxs)(n.li,{children:["Si une valeur non valide est lue dans ",(0,s.jsx)(n.em,{children:"idEcran"})," ou ",(0,s.jsx)(n.em,{children:"zoneEcran"}),", une valeur z\xe9ro est retourn\xe9e pour toutes les coordonn\xe9es."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/count-screens",children:"Count screens"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/menu-bar-screen",children:"Menu bar screen"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/screen-depth",children:"SCREEN DEPTH"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},249199:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict4800387.en-09828b7fbc78891e9652bec39c1f7008.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(296540);const d={},t=s.createContext(d);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);