"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38685"],{83096:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>u,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/menu-selected","title":"Menu selected","description":"Menu selected {( sousMenu )} : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/menu-selected.md","sourceDirName":"commands-legacy","slug":"/commands/menu-selected","permalink":"/docs/fr/commands/menu-selected","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmenu-selected.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"menu-selected","title":"Menu selected","slug":"/commands/menu-selected","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT MENU ITEM","permalink":"/docs/fr/commands/insert-menu-item"},"next":{"title":"RELEASE MENU","permalink":"/docs/fr/commands/release-menu"}}'),r=s("785893"),d=s("250065");let c={id:"menu-selected",title:"Menu selected",slug:"/commands/menu-selected",displayed_sidebar:"docs"},i=void 0,l={},u=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," {( ",(0,r.jsx)(n.em,{children:"sousMenu"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sousMenu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence du menu contenant la ligne s\xe9lectionn\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Commande de menu s\xe9lectionn\xe9e : Mot machine haut = n\xb0 de menu, Mot machine bas = n\xb0 de commande de menu"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," ne s'utilise que lorsqu'un formulaire est affich\xe9. Cette fonction d\xe9tecte la commande de menu choisie dans un menu et, dans le cas d'un sous-menu hi\xe9rarchique, retourne la r\xe9f\xe9rence du sous-menu."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Astuce :"})," A chaque fois que cela est possible, utilisez des m\xe9thodes associ\xe9es \xe0 des commandes de menus dans une barre associ\xe9e (avec un num\xe9ro de barre n\xe9gatif) plut\xf4t que d'appeler ",(0,r.jsx)(n.strong,{children:"Menu selected"}),". Les barres de menus associ\xe9es sont plus faciles \xe0 g\xe9rer, puisqu'il n'est pas n\xe9cessaire de tester leur s\xe9lection."]}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Menu selected"})," permet de travailler avec des sous-menus hi\xe9rarchiques. En cas de s\xe9lection d\u2019une ligne d\u2019un menu hi\xe9rarchique au-del\xe0 du premier niveau, la commande retourne dans le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"sousMenu"})," la r\xe9f\xe9rence (type RefMenu, cha\xeene de 16 caract\xe8res) du sous-menu auquel appartient la ligne s\xe9lectionn\xe9e. Si la commande du menu ne contient pas de sous-menu hi\xe9rarchique, ce param\xe8tre re\xe7oit une cha\xeene vide."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," retourne le num\xe9ro syst\xe8me du menu s\xe9lectionn\xe9 sous forme d'Entier long. Pour obtenir le num\xe9ro du menu, divisez ",(0,r.jsx)(n.strong,{children:"Menu selected"})," par 65536 et convertissez le r\xe9sultat en Entier. Pour obtenir le num\xe9ro de la commande de menu, calculez le modulo de ",(0,r.jsx)(n.strong,{children:"Menu selected"})," avec le coefficient 65536. Utilisez les formules suivantes pour calculer le num\xe9ro du menu et de la commande de menu :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=Menu selected\\ 65536\n\xa0Ligne de menu:=Menu selected% 65536\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez \xe9galement extraire ces valeurs \xe0 l'aide des ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),", comme dans l'exemple suivant :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=(Menu selected\xa0&\xa00xFFFF0000)>>16\n\xa0Ligne de menu:=Menu selected\xa0&\xa00xFFFF\n"})}),"\n",(0,r.jsx)(n.p,{children:"Menu choisi retourne 0 si aucune commande de menu n'est s\xe9lectionn\xe9e."}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["La m\xe9thode formulaire suivante utilise la fonction ",(0,r.jsx)(n.strong,{children:"Menu selected"}),' pour fournir les arguments "menu" et "ligne de menu" \xe0 ',(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(16;$refMenuIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $ref;$NumMenu;$NumMenuItem : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$ref:=Menu selected($refMenuIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$NumMenu:=$ref\\65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$NumMenuItem:=$ref%65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET MENU ITEM MARK($refMenuIncludingItem;$NumMenuItem;Char(18))\n\xa0End case\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," L\u2019\xe9v\xe9nement On Menu Selected n\u2019est pas activ\xe9 si aucune ligne n'est s\xe9lectionn\xe9e, ",(0,r.jsx)(n.em,{children:"$refmenuincludingItem"})," est toujours renseign\xe9 et ",(0,r.jsx)(n.em,{children:"$NumMenu"})," vaut 0 si le menu n\u2019est pas un des menus de la barre."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Gestion des menus"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"152"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,r.jsx)(n.td,{})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);