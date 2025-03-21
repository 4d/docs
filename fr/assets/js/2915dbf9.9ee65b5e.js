"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29037"],{380722:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-property","title":"GET MENU ITEM PROPERTY","description":"GET MENU ITEM PROPERTY ( menu ; ligneMenu ; propri\xe9t\xe9 ; valeur {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-property.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-property","permalink":"/docs/fr/20-R7/commands/get-menu-item-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-property","title":"GET MENU ITEM PROPERTY","slug":"/commands/get-menu-item-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item parameter","permalink":"/docs/fr/20-R7/commands/get-menu-item-parameter"},"next":{"title":"Get menu item style","permalink":"/docs/fr/20-R7/commands/get-menu-item-style"}}'),t=r("785893"),i=r("250065");let d={id:"get-menu-item-property",title:"GET MENU ITEM PROPERTY",slug:"/commands/get-menu-item-property",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET MENU ITEM PROPERTY"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"ligneMenu"})," ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," {; ",(0,t.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de menu ou Num\xe9ro de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ligneMenu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e au menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type de propri\xe9t\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeur de la propri\xe9t\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de process"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"GET MENU ITEM PROPERTY"})," retourne dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"})," la valeur courante de la propri\xe9t\xe9 de la ligne de menu d\xe9sign\xe9e par les param\xe8tres ",(0,t.jsx)(n.em,{children:"menu"})," et ",(0,t.jsx)(n.em,{children:"ligneMenu"}),".",(0,t.jsx)(n.br,{}),"\nVous pouvez passer -1 dans ",(0,t.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au menu."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"menu"})," un identifiant unique de menu (",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),") ou un num\xe9ro de menu. Si vous passez un identifiant unique, le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9 s\u2019il est pass\xe9. Si vous passez un num\xe9ro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez d\xe9signer un autre process, passez son num\xe9ro dans le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," la propri\xe9t\xe9 dont vous souhaitez obtenir la valeur. Vous pouvez utiliser l\u2019une des constantes du th\xe8me \u201C",(0,t.jsx)(n.em,{children:"Propri\xe9t\xe9s des lignes de menu"}),"\u201D ou une cha\xeene correspondant \xe0 une propri\xe9t\xe9 personnalis\xe9e. Pour plus d\u2019informations sur les propri\xe9t\xe9s des menus et leurs valeurs, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," Par d\xe9faut, si la variable ",(0,t.jsx)(n.em,{children:"valeur"})," n'est pas typ\xe9e explicitement ou est d\xe9clar\xe9e de type texte, la commande retournera un nom d'",(0,t.jsx)(n.em,{children:"Action standard"}),". Si vous souhaitez obtenir une valeur num\xe9rique comme d\xe9fini dans le th\xe8me de constantes (obsol\xe8te) ",(0,t.jsx)(n.em,{children:"Valeurs pour Actions standard associ\xe9e"}),", vous devez d\xe9clarer la variable ",(0,t.jsx)(n.em,{children:"valeur"})," de type entier long."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"972"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);