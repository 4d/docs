"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49759"],{451114:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>m,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-method","title":"Get menu item method","description":"Get menu item method ( menu ; ligneMenu {; process} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-method","permalink":"/docs/fr/20-R8/commands/get-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-method","title":"Get menu item method","slug":"/commands/get-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item mark","permalink":"/docs/fr/20-R8/commands/get-menu-item-mark"},"next":{"title":"Get menu item modifiers","permalink":"/docs/fr/20-R8/commands/get-menu-item-modifiers"}}'),r=t("785893"),d=t("250065");let i={id:"get-menu-item-method",title:"Get menu item method",slug:"/commands/get-menu-item-method",displayed_sidebar:"docs"},o=void 0,m={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item method"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"ligneMenu"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de menu ou Num\xe9ro de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ligneMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e au menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom de la m\xe9thode"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Get menu item method"})," retourne le nom de la m\xe9thode projet 4D associ\xe9e \xe0 la ligne de menu d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"menu"})," et ",(0,r.jsx)(n.em,{children:"ligneMenu"}),".",(0,r.jsx)(n.br,{}),"\nVous pouvez passer -1 dans ",(0,r.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au menu."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"menu"})," un identifiant unique de menu (",(0,r.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),") ou un num\xe9ro de menu. Si vous passez un identifiant unique, le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9 s\u2019il est pass\xe9. Si vous passez un num\xe9ro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez d\xe9signer un autre process, passez son num\xe9ro dans le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"La commande retourne le nom de la m\xe9thode 4D sous la forme d\u2019une cha\xeene de caract\xe8res (expression). Si aucune m\xe9thode n\u2019est associ\xe9e \xe0 la ligne de menu, la commande retourne une cha\xeene vide."}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"981"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);