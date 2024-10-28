"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62674],{183559:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=s(474848),r=s(28453);const d={id:"get-menu-item-style",title:"Get menu item style",slug:"/commands/get-menu-item-style",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/get-menu-item-style",title:"Get menu item style",description:"Get menu item style ( menu ; ligneMenu {; process} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-style.md",sourceDirName:"commands-legacy",slug:"/commands/get-menu-item-style",permalink:"/docs/fr/commands/get-menu-item-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-menu-item-style",title:"Get menu item style",slug:"/commands/get-menu-item-style",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET MENU ITEM PROPERTY",permalink:"/docs/fr/commands/get-menu-item-property"},next:{title:"GET MENU ITEMS",permalink:"/docs/fr/commands/get-menu-items"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get menu item style"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"ligneMenu"})," {; ",(0,t.jsx)(n.em,{children:"process"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de menu ou R\xe9f\xe9rence de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ligneMenu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de process"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Style courant de la ligne de menu"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Get menu item style"})," retourne le style de police de la ligne de menu dont vous avez pass\xe9 le num\xe9ro ou la r\xe9f\xe9rence de menu et le num\xe9ro de ligne dans ",(0,t.jsx)(n.em,{children:"menu"})," et ",(0,t.jsx)(n.em,{children:"ligneMenu"}),". Vous pouvez passer -1 dans ",(0,t.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"}),", ",(0,t.jsx)(n.strong,{children:"Get menu item style"})," s'applique \xe0 la barre de menus du process courant. Sinon, ",(0,t.jsx)(n.strong,{children:"Get menu item style"})," s'applique \xe0 la barre de menus du process dont vous avez pass\xe9 le num\xe9ro dans ",(0,t.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,t.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Get menu item style"})," retourne une combinaison (une ou une somme) des constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Styles de caract\xe8res"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bold"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Italic"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plain"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Underline"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Si, par exemple, vous voulez tester si une ligne de menu est affich\xe9e en gras, vous \xe9crivez :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If((Get menu item style($vlMenu;$vlItem)&Bold)#0)\n\xa0\xa0//...\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-style",children:"SET MENU ITEM STYLE"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(296540);const r={},d=t.createContext(r);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);