"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12825"],{295880:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/get-menu-item-icon","title":"GET MENU ITEM ICON","description":"GET MENU ITEM ICON ( menu ; ligneMenu ; refIc\xf4ne {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-icon","permalink":"/docs/fr/commands/get-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-icon","title":"GET MENU ITEM ICON","slug":"/commands/get-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item","permalink":"/docs/fr/commands/get-menu-item"},"next":{"title":"Get menu item key","permalink":"/docs/fr/commands/get-menu-item-key"}}'),r=s("785893"),t=s("250065");let d={id:"get-menu-item-icon",title:"GET MENU ITEM ICON",slug:"/commands/get-menu-item-icon",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",chemin:"chemin",em:"em",h4:"h4",li:"li",nom:"nom",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET MENU ITEM ICON"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"ligneMenu"})," ; ",(0,r.jsx)(n.em,{children:"refIc\xf4ne"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de menu ou Num\xe9ro de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ligneMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e au menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refIc\xf4ne"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nom ou num\xe9ro de l\u2019image associ\xe9e \xe0 la ligne de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de process"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"GET MENU ITEM ICON"})," retourne dans la variable ",(0,r.jsx)(n.em,{children:"refIc\xf4ne"})," la r\xe9f\xe9rence de l\u2019ic\xf4ne \xe9ventuellement associ\xe9e \xe0 la ligne de menu d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"menu"})," et ",(0,r.jsx)(n.em,{children:"ligneMenu"}),". Cette r\xe9f\xe9rence est le chemin d'acc\xe8s ou le num\xe9ro de l\u2019image."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer -1 dans ",(0,r.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au menu."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"menu"})," un identifiant unique de menu (",(0,r.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),") ou un num\xe9ro de menu. Si vous passez un identifiant unique, le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9 s\u2019il est pass\xe9. Si vous passez un num\xe9ro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez d\xe9signer un autre process, passez son num\xe9ro dans le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si l'ic\xf4ne a \xe9t\xe9 d\xe9finie \xe0 l'aide d'un fichier image, la commande retourne dans ",(0,r.jsx)(n.em,{children:"refIc\xf4ne"})," le chemin d'acc\xe8s via la syntaxe ",(0,r.jsxs)(n.strong,{children:["path:",(0,r.jsx)(n.chemin,{filesystem:""})]}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Si l'ic\xf4ne a \xe9t\xe9 d\xe9finie \xe0 l'aide d'une image issue de la biblioth\xe8que (base de donn\xe9es binaires uniquement), la commande retourne soit le num\xe9ro soit le nom de l'image, en fonction du type de variable pass\xe9 dans ce param\xe8tre. La syntaxe suivante est utilis\xe9e pour un nom : ",(0,r.jsxs)(n.strong,{children:["pictlib:",(0,r.jsx)(n.nom,{children:"."})]}),(0,r.jsx)(n.br,{}),"\nSi vous n\u2019attribuez pas de type sp\xe9cifique \xe0 la variable ",(0,r.jsx)(n.em,{children:"refIc\xf4ne"}),", par d\xe9faut le nom de l\u2019image est retourn\xe9 (type texte)."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Si aucune ic\xf4ne n\u2019est associ\xe9e \xe0 la ligne, la commande retourne une valeur vide."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-icon",children:"SET MENU ITEM ICON"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"983"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var i=s(667294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);