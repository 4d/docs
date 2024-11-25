"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8382"],{773375:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>o,assets:()=>l,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/delete-menu-item","title":"DELETE MENU ITEM","description":"DELETE MENU ITEM ( menu ; ligneMenu {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/delete-menu-item","permalink":"/docs/fr/commands/delete-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-menu-item","title":"DELETE MENU ITEM","slug":"/commands/delete-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create menu","permalink":"/docs/fr/commands/create-menu"},"next":{"title":"DISABLE MENU ITEM","permalink":"/docs/fr/commands/disable-menu-item"}}'),t=r("785893"),d=r("250065");let i={id:"delete-menu-item",title:"DELETE MENU ITEM",slug:"/commands/delete-menu-item",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DELETE MENU ITEM"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"ligneMenu"})," {; ",(0,t.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de menu ou R\xe9f\xe9rence de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ligneMenu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de process"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"DELETE MENU ITEM"})," supprime la ligne de menu dont vous avez pass\xe9 le num\xe9ro ou la r\xe9f\xe9rence de menu et le num\xe9ro de ligne dans ",(0,t.jsx)(n.em,{children:"menu"})," et ",(0,t.jsx)(n.em,{children:"ligneMenu"}),". Vous pouvez passer -1 dans ",(0,t.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si la ligne de menu d\xe9sign\xe9e par ",(0,t.jsx)(n.em,{children:"menu"})," et ",(0,t.jsx)(n.em,{children:"ligneMenu"})," est elle-m\xeame un menu g\xe9r\xe9 par r\xe9f\xe9rence et cr\xe9\xe9 par exemple \xe0 l\u2019aide la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-menu",children:"Create menu"}),", ",(0,t.jsx)(n.strong,{children:"DELETE MENU ITEM"})," supprimera uniquement l\u2019instance de ",(0,t.jsx)(n.em,{children:"ligneMenu"})," dans ",(0,t.jsx)(n.em,{children:"menu"}),". Le sous-menu r\xe9f\xe9renc\xe9 par ",(0,t.jsx)(n.em,{children:"ligneMenu"})," continuera d\u2019exister en m\xe9moire. Vous devez utiliser la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/release-menu",children:"RELEASE MENU"})," afin de supprimer d\xe9finitevement un menu g\xe9r\xe9 par r\xe9f\xe9rence.",(0,t.jsx)(n.br,{}),"\nCette commande fonctionne \xe9galement avec une barre de menus cr\xe9\xe9e avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/create-menu",children:"Create menu"})," et install\xe9e avec la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-menu-bar",children:"SET MENU BAR"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"}),", ",(0,t.jsx)(n.strong,{children:"DELETE MENU ITEM"})," s'applique \xe0 la barre de menus du process courant. Sinon, ",(0,t.jsx)(n.strong,{children:"DELETE MENU ITEM"})," s'applique \xe0 la barre de menus du process dont vous avez pass\xe9 le num\xe9ro dans ",(0,t.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,t.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour soigner l'ergonomie de votre interface, ne laissez pas accessible un menu ne comportant aucune ligne."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/append-menu-item",children:"APPEND MENU ITEM"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/insert-menu-item",children:"INSERT MENU ITEM"})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);