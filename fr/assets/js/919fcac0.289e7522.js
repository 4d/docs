"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34049"],{8173:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-menu-item-shortcut","title":"SET MENU ITEM SHORTCUT","description":"SET MENU ITEM SHORTCUT ( menu ; ligneMenu ; touche ; modificateurs {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item-shortcut.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-shortcut","permalink":"/docs/fr/20-R7/commands/set-menu-item-shortcut","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-shortcut.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-shortcut","title":"SET MENU ITEM SHORTCUT","slug":"/commands/set-menu-item-shortcut","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM PROPERTY","permalink":"/docs/fr/20-R7/commands/set-menu-item-property"},"next":{"title":"SET MENU ITEM STYLE","permalink":"/docs/fr/20-R7/commands/set-menu-item-style"}}'),i=s("785893"),t=s("250065");let c={id:"set-menu-item-shortcut",title:"SET MENU ITEM SHORTCUT",slug:"/commands/set-menu-item-shortcut",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Compatibilit\xe9",id:"compatibilit\xe9",level:3},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET MENU ITEM SHORTCUT"})," ( ",(0,i.jsx)(n.em,{children:"menu"})," ; ",(0,i.jsx)(n.em,{children:"ligneMenu"})," ; ",(0,i.jsx)(n.em,{children:"touche"})," ; ",(0,i.jsx)(n.em,{children:"modificateurs"})," {; ",(0,i.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"menu"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro du menu ou R\xe9f\xe9rence de menu"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ligneMenu"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"touche"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Lettre du raccourci clavier ou code de caract\xe8re du raccourci clavier (ancienne syntaxe)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modificateurs"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Modificateur(s) \xe0 associer au raccourci (ignor\xe9 si un code de touche est pass\xe9)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"process"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"SET MENU ITEM SHORTCUT"})," remplace la touche du raccourci clavier associ\xe9 \xe0 la ligne de menu d\xe9sign\xe9e par ",(0,i.jsx)(n.em,{children:"menu"})," et ",(0,i.jsx)(n.em,{children:"ligneMenu"}),", par le caract\xe8re dont vous avez pass\xe9 le code de caract\xe8re ou le texte dans ",(0,i.jsx)(n.em,{children:"touche"}),". Vous pouvez passer -1 dans ",(0,i.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au ",(0,i.jsx)(n.em,{children:"menu"}),". La touche d\xe9finie sera combin\xe9e \xe0 la touche ",(0,i.jsx)(n.strong,{children:"Ctrl"})," (Windows) ou ",(0,i.jsx)(n.strong,{children:"Commande"})," (Macintosh) pour d\xe9finir le nouveau raccourci clavier."]}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"touche"})," la lettre d\xe9signant la touche de raccourci, par exemple \u201CU\u201D pour d\xe9finir le raccourci ",(0,i.jsx)(n.strong,{children:"Ctrl+U"})," (Windows) ou ",(0,i.jsx)(n.strong,{children:"Commande+U"})," (Mac OS)."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"modificateurs"})," vous permet d\u2019associer un ou plusieurs modificateur(s) additionnel(s) au raccourci standard. Vous pouvez ainsi d\xe9finir des raccourcis du type ",(0,i.jsx)(n.strong,{children:"Ctrl+Alt+Maj+Z"})," (Windows) ou ",(0,i.jsx)(n.strong,{children:"Cmd+Option+Maj+Z"})," (macOS). Vous pouvez passer dans ",(0,i.jsx)(n.em,{children:"modificateurs"})," les valeurs suivantes :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Command key mask"})," pour la touche ",(0,i.jsx)(n.strong,{children:"Commande"})," (Mac OS) ou ",(0,i.jsx)(n.strong,{children:"Ctrl"})," (Windows)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Shift key mask"})," pour la touche ",(0,i.jsx)(n.strong,{children:"Majuscule"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Option key mask"})," pour la touche ",(0,i.jsx)(n.strong,{children:"Option"})," (Mac OS) ou ",(0,i.jsx)(n.strong,{children:"Alt"})," (Windows)"]}),"\n",(0,i.jsx)(n.li,{children:"Pour associer plusieurs touches, cumulez leurs valeurs."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Passez 0 si vous ne souhaitez pas ajouter de modificateurs."}),"\n",(0,i.jsxs)(n.p,{children:["La touche ",(0,i.jsx)(n.strong,{children:"Ctrl"})," (Windows) ou ",(0,i.jsx)(n.strong,{children:"Commande"})," (Mac OS) est automatiquement ajout\xe9e par 4D au raccourci clavier, que vous l'ayez explicitement indiqu\xe9e ou non dans ",(0,i.jsx)(n.em,{children:"modificateurs"}),". Il n'est donc pas n\xe9cessaire d'ajouter la valeur 256 \xe0 ce param\xe8tre, sauf si cette touche est le seul modificateur, auquel cas vous devez passer la valeur 256 ou la constante correspondante dans ",(0,i.jsx)(n.em,{children:"modificateurs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Par compatibilit\xe9, la commande admet \xe9galement un code de caract\xe8re comme param\xe8tre ",(0,i.jsx)(n.em,{children:"touche"})," (ancienne syntaxe). Dans ce cas, le param\xe8tre ",(0,i.jsx)(n.em,{children:"modificateurs"})," n\u2019est pas pris en compte et il peut \xeatre omis. Le raccourci sera uniquement associ\xe9 au modificateur ",(0,i.jsx)(n.strong,{children:"Ctrl"})," (Windows) ou ",(0,i.jsx)(n.strong,{children:"Commande"})," (Mac OS)."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,i.jsx)(n.em,{children:"process"}),", ",(0,i.jsx)(n.strong,{children:"SET MENU ITEM SHORTCUT"})," est appliqu\xe9e \xe0 la barre de menus du process courant. Sinon, ",(0,i.jsx)(n.strong,{children:"SET MENU ITEM SHORTCUT"})," est appliqu\xe9e \xe0 la barre de menus du process dont la r\xe9f\xe9rence est pass\xe9e dans ",(0,i.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Si vous passez une r\xe9f\xe9rence de menu (16 caract\xe8res alphanum\xe9riques) dans ",(0,i.jsx)(n.em,{children:"menu"}),", le param\xe8tre ",(0,i.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez ",(0,i.jsx)(n.em,{children:"0"})," (z\xe9ro) dans ",(0,i.jsx)(n.em,{children:"touche"}),", l'\xe9quivalent clavier de la commande de menu est supprim\xe9."]}),"\n",(0,i.jsx)(n.h3,{id:"compatibilit\xe9",children:"Compatibilit\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Pour des raisons de compatibilit\xe9, la commande accepte \xe9galement un code de caract\xe8re dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"touche"})," (ancienne syntaxe). Dans ce cas, le raccourci inclut automatiquement la touche ",(0,i.jsx)(n.strong,{children:"Ctrl"})," (Windows) ou ",(0,i.jsx)(n.strong,{children:"Cmd"})," (macOS) et le param\xe8tre ",(0,i.jsx)(n.em,{children:"modificateurs"})," n'est pas pris en compte."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez 0 (z\xe9ro) dans ",(0,i.jsx)(n.em,{children:"touche"}),", les raccourcis spnt supprim\xe9s de l'\xe9l\xe9ment de menu."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"D\xe9finition du raccourci Ctrl+Maj+U (Windows) et Cmd+Maj+U (Mac OS) pour la ligne \u201CSoulign\xe9\u201D :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SET MENU ITEM(menuRef;1;"Soulign\xe9")\n\xa0SET MENU ITEM SHORTCUT(menuRef;1;"U";Shift key mask)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:'D\xe9finition du raccourci Ctrl+R (Windows) et Cmd+R (Mac OS) pour la ligne "Recommencer" :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0INSERT MENU ITEM(FileMenu;-1;"Recommencer")\n\xa0SET MENU ITEM SHORTCUT(FileMenu;-1;"R";Command key mask)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsx)(n.p,{children:'D\xe9finition du raccourci F4 pour l\'\xe9l\xe9ment de menu "Fermer" :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0INSERT MENU ITEM(FileMenu;-1;"Fermer")\n\xa0SET MENU ITEM SHORTCUT(FileMenu;-1;"[F4]";0)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-menu-item-key",children:"Get menu item key"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-menu-item-modifiers",children:"Get menu item modifiers"})]}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"423"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,i.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var r=s(667294);let i={},t=r.createContext(i);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);