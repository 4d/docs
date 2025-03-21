"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24147"],{3148:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-menu-item-style","title":"Get menu item style","description":"Get menu item style ( menu ; ligneMenu {; process} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-style.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-style","permalink":"/docs/fr/20-R7/commands/get-menu-item-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-style","title":"Get menu item style","slug":"/commands/get-menu-item-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MENU ITEM PROPERTY","permalink":"/docs/fr/20-R7/commands/get-menu-item-property"},"next":{"title":"GET MENU ITEMS","permalink":"/docs/fr/20-R7/commands/get-menu-items"}}'),r=s("785893"),d=s("250065");let i={id:"get-menu-item-style",title:"Get menu item style",slug:"/commands/get-menu-item-style",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item style"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"ligneMenu"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de menu ou R\xe9f\xe9rence de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ligneMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Style courant de la ligne de menu"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Get menu item style"})," retourne le style de police de la ligne de menu dont vous avez pass\xe9 le num\xe9ro ou la r\xe9f\xe9rence de menu et le num\xe9ro de ligne dans ",(0,r.jsx)(n.em,{children:"menu"})," et ",(0,r.jsx)(n.em,{children:"ligneMenu"}),". Vous pouvez passer -1 dans ",(0,r.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"}),", ",(0,r.jsx)(n.strong,{children:"Get menu item style"})," s'applique \xe0 la barre de menus du process courant. Sinon, ",(0,r.jsx)(n.strong,{children:"Get menu item style"})," s'applique \xe0 la barre de menus du process dont vous avez pass\xe9 le num\xe9ro dans ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,r.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,r.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item style"})," retourne une combinaison (une ou une somme) des constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"Styles de caract\xe8res"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Si, par exemple, vous voulez tester si une ligne de menu est affich\xe9e en gras, vous \xe9crivez :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If((Get menu item style($vlMenu;$vlItem)&Bold)#0)\n\xa0\xa0//...\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-menu-item-style",children:"SET MENU ITEM STYLE"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"426"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);