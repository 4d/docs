"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15214],{439743:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(474848),t=s(28453);const i={id:"disable-menu-item",title:"DISABLE MENU ITEM",slug:"/commands/disable-menu-item",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/disable-menu-item",title:"DISABLE MENU ITEM",description:"DISABLE MENU ITEM ( menu ; ligneMenu {; process} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/disable-menu-item.md",sourceDirName:"commands-legacy",slug:"/commands/disable-menu-item",permalink:"/docs/fr/commands/disable-menu-item",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisable-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"disable-menu-item",title:"DISABLE MENU ITEM",slug:"/commands/disable-menu-item",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DELETE MENU ITEM",permalink:"/docs/fr/commands/delete-menu-item"},next:{title:"Dynamic pop up menu",permalink:"/docs/fr/commands/dynamic-pop-up-menu"}},l={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"ligneMenu"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de menu ou R\xe9f\xe9rence de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ligneMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," d\xe9sactive la commande de menu dont vous avez pass\xe9 le num\xe9ro ou la r\xe9f\xe9rence de menu et le num\xe9ro de ligne dans ",(0,r.jsx)(n.em,{children:"menu"})," et ",(0,r.jsx)(n.em,{children:"ligneMenu"}),". Vous pouvez passer -1 dans ",(0,r.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,r.jsx)(n.em,{children:"ligneMenu"})," d\xe9signe un sous-menu hi\xe9rarchique, toutes les lignes de ce menu et de ses \xe9ventuels sous-menus sont inactiv\xe9es. Cette commande fonctionne \xe9galement avec une barre de menus cr\xe9\xe9e avec la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-menu",children:"Create menu"})," et install\xe9e avec la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-bar",children:"SET MENU BAR"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"}),", ",(0,r.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," s'applique \xe0 la barre de menus du process courant. Sinon, ",(0,r.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," s'applique \xe0 la barre de menus du process dont vous avez pass\xe9 le num\xe9ro dans ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,r.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,r.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Astuce :"})," Pour activer/inactiver toutes les lignes de menus en une fois, passez 0 (z\xe9ro) dans ",(0,r.jsx)(n.em,{children:"ligneMenu"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/enable-menu-item",children:"ENABLE MENU ITEM"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(296540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);