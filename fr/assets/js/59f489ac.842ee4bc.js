"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85101"],{561224:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-menu-item-mark","title":"SET MENU ITEM MARK","description":"SET MENU ITEM MARK ( menu ; ligneMenu ; marque {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-mark","permalink":"/docs/fr/commands/set-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-mark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-mark","title":"SET MENU ITEM MARK","slug":"/commands/set-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM ICON","permalink":"/docs/fr/commands/set-menu-item-icon"},"next":{"title":"SET MENU ITEM METHOD","permalink":"/docs/fr/commands/set-menu-item-method"}}'),t=s("785893"),d=s("250065");let i={id:"set-menu-item-mark",title:"SET MENU ITEM MARK",slug:"/commands/set-menu-item-mark",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function m(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU ITEM MARK"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"ligneMenu"})," ; ",(0,t.jsx)(n.em,{children:"marque"})," {; ",(0,t.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de menu ou R\xe9f\xe9rence de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ligneMenu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"marque"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouvelle marque de ligne de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET MENU ITEM MARK"}),' remplace la marque (ou "coche") de la ligne de menu dont vous avez pass\xe9 le num\xe9ro ou la r\xe9f\xe9rence de menu et le num\xe9ro de ligne dans ',(0,t.jsx)(n.em,{children:"menu"})," et ",(0,t.jsx)(n.em,{children:"ligneMenu"})," par le premier caract\xe8re de la cha\xeene que vous avez pass\xe9e dans ",(0,t.jsx)(n.em,{children:"marque"})," (sous Mac OS) ou par la coche standard (sous Windows). Vous pouvez passer -1 dans ",(0,t.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"}),", ",(0,t.jsx)(n.strong,{children:"SET MENU ITEM MARK"})," s'applique \xe0 la barre de menus du process courant. Sinon, ",(0,t.jsx)(n.strong,{children:"SET MENU ITEM MARK"})," s'applique \xe0 la barre de menus du process dont vous avez pass\xe9 le num\xe9ro dans ",(0,t.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,t.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez une cha\xeene vide dans ",(0,t.jsx)(n.em,{children:"marque"}),", vous supprimez toute marque de la ligne de menu.",(0,t.jsx)(n.br,{}),"\nSinon :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sous Mac OS, le premier caract\xe8re de la cha\xeene devient la marque de la ligne de menu (g\xe9n\xe9ralement, le ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/char",children:"Char"}),"(18), qui est la coche standard de Mac OS, est utilis\xe9)."]}),"\n",(0,t.jsx)(n.li,{children:"Sous Windows, la marque standard de Windows est associ\xe9e au menu."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-menu-item-mark",children:"Get menu item mark"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-menu-item-mark",children:"Get menu item mark"})})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);