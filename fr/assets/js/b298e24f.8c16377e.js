"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[539],{18833:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(474848),t=n(28453);const i={id:"listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",slug:"/commands/listbox-get-grid-colors",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",description:"LISTBOX GET GRID COLORS ( { ;} objet ; couleurH ; couleurV* )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-grid-colors.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-get-grid-colors",permalink:"/docs/fr/commands/listbox-get-grid-colors",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-grid-colors.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-get-grid-colors",title:"LISTBOX GET GRID COLORS",slug:"/commands/listbox-get-grid-colors",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX GET GRID",permalink:"/docs/fr/commands/listbox-get-grid"},next:{title:"LISTBOX Get headers height",permalink:"/docs/fr/commands/listbox-get-headers-height"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LISTBOX GET GRID COLORS"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objet"})," ; ",(0,r.jsx)(s.em,{children:"couleurH"})," ; ",(0,r.jsx)(s.em,{children:"couleurV"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)Si omis, objet est une variable"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objet"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsxs)(s.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(s.br,{}),"Variable (si * est omis)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"couleurH"}),(0,r.jsx)(s.td,{children:"Text, Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Valeur de couleur RVB pour les traits horizontaux"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"couleurV"}),(0,r.jsx)(s.td,{children:"Text, Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Valeur de couleur RVB pour les traits verticaux"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"LISTBOX GET GRID COLORS"})," retourne la couleur des lignes horizontales et verticales composant la grille de l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,r.jsx)(s.em,{children:"objet"})," et ",(0,r.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,r.jsxs)(s.p,{children:["La commande retourne dans les param\xe8tres ",(0,r.jsx)(s.em,{children:"couleurH"})," et ",(0,r.jsx)(s.em,{children:"couleurV"})," des valeurs de couleurs RVB. Le format de la couleur d\xe9pend du type de param\xe8tre que vous avez pass\xe9 dans ",(0,r.jsx)(s.em,{children:"couleurH"})," et ",(0,r.jsx)(s.em,{children:"couleurV"})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'Si vous avez pass\xe9 un texte, la couleur sera exprim\xe9e sous forme de CSS (format "#rrggbb")'}),"\n",(0,r.jsx)(s.li,{children:"Si vous avez pass\xe9 un entier long, la couleur sera exprim\xe9e sous forme d'entier long de 4 octets (format 0x00rrggbb)."}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/listbox-set-grid-color",children:"LISTBOX SET GRID COLOR"})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(296540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);