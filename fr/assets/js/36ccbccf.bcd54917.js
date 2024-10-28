"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18128],{521150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var s=t(474848),r=t(28453);const d={id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/get-menu-items",title:"GET MENU ITEMS",description:"GET MENU ITEMS ( menu ; tabTitresMenus ; tabRefsMenus )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-items.md",sourceDirName:"commands-legacy",slug:"/commands/get-menu-items",permalink:"/docs/fr/commands/get-menu-items",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get menu item style",permalink:"/docs/fr/commands/get-menu-item-style"},next:{title:"Get menu title",permalink:"/docs/fr/commands/get-menu-title"}},a={},u=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MENU ITEMS"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"tabTitresMenus"})," ; ",(0,s.jsx)(n.em,{children:"tabRefsMenus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"R\xe9f\xe9rence de menu ou Num\xe9ro de menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabTitresMenus"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tableau des libell\xe9s du menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabRefsMenus"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tableau des r\xe9f\xe9rences du menu"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GET MENU ITEMS"})," retourne dans les tableaux ",(0,s.jsx)(n.em,{children:"tabTitresMenu"})," et ",(0,s.jsx)(n.em,{children:"tabRefsMenu"})," les libell\xe9s et les identifiants de toutes les lignes du menu ou de la barre de menus d\xe9sign\xe9(e) par le param\xe8tre ",(0,s.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,s.jsx)(n.em,{children:"menu"})," un identifiant unique de menu (",(0,s.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),"), un num\xe9ro de barre de menus ou une r\xe9f\xe9rence de barre de menus obtenue via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/get-menu-bar-reference",children:"Get menu bar reference"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Lorsqu'aucune r\xe9f\xe9rence de menu n\u2019est rattach\xe9e \xe0 une ligne, une cha\xeene vide est retourn\xe9e dans l\u2019\xe9l\xe9ment de tableau correspondant."}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez conna\xeetre le contenu de la barre de menus du process courant :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabTitresMenu;0)\n\xa0ARRAY TEXT(tabRefsMenu;0)\n\xa0RefBarreMenu:=Get menu bar reference(Frontmost process)\n\xa0GET MENU ITEMS(RefBarreMenu;tabTitresMenu;tabRefsMenu)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);