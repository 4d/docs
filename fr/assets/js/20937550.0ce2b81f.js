"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37951"],{473161:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/get-menu-item-modifiers","title":"Get menu item modifiers","description":"Get menu item modifiers ( menu ; ligneMenu {; process} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-modifiers.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-modifiers","permalink":"/docs/fr/20-R8/commands/get-menu-item-modifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-modifiers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-modifiers","title":"Get menu item modifiers","slug":"/commands/get-menu-item-modifiers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item method","permalink":"/docs/fr/20-R8/commands/get-menu-item-method"},"next":{"title":"Get menu item parameter","permalink":"/docs/fr/20-R8/commands/get-menu-item-parameter"}}'),r=s("785893"),t=s("250065");let d={id:"get-menu-item-modifiers",title:"Get menu item modifiers",slug:"/commands/get-menu-item-modifiers",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function m(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item modifiers"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"ligneMenu"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de menu ouNum\xe9ro de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ligneMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e au menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Touche(s) de modification associ\xe9e(s) \xe0 la ligne de menu"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Get menu item modifiers"})," retourne le ou les modificateur(s) additionnel(s) associ\xe9(s) au raccourci standard de la ligne de menu d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"menu"})," et ",(0,r.jsx)(n.em,{children:"ligneMenu"}),".",(0,r.jsx)(n.br,{}),"\nLe raccourci standard est compos\xe9 de la touche ",(0,r.jsx)(n.strong,{children:"Commande"})," (macOS) ou ",(0,r.jsx)(n.strong,{children:"Ctrl"})," (Windows) et d\u2019une touche personnalis\xe9e. Le raccourci standard est g\xe9r\xe9 via les commandes ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})," et ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-menu-item-key",children:"Get menu item key"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Les modificateurs additionnels sont la touche ",(0,r.jsx)(n.strong,{children:"Majuscule"})," et la touche ",(0,r.jsx)(n.strong,{children:"Option"})," (macOS) / ",(0,r.jsx)(n.strong,{children:"Alt"})," (Windows). Ces modificateurs ne sont utilisables que si un raccourci standard a \xe9t\xe9 d\xe9fini au pr\xe9alable."]}),"\n",(0,r.jsx)(n.p,{children:"La valeur num\xe9rique retourn\xe9e par la commande correspond au code de la ou des touche(s) de modification additionnelles. Les codes des touches sont les suivants :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Majuscule"})," = 512"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Option"})," (macOS) ou ",(0,r.jsx)(n.strong,{children:"Alt"})," (Windows) = 2048",(0,r.jsx)(n.br,{}),"\nSi les deux touches sont utilis\xe9es, leur valeur est cumul\xe9e."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Vous pouvez \xe9valuer la valeur retourn\xe9e \xe0 l\u2019aide des constantes Shift key mask et Option key mask du th\xe8me \u201C",(0,r.jsx)(n.em,{children:"Ev\xe9nements (Modifiers)"}),"\u201D."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la ligne de menu n\u2019a pas de touche de modification associ\xe9e, la commande retourne 0.",(0,r.jsx)(n.br,{}),"\nVous pouvez passer -1 dans ",(0,r.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au menu."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"menu"})," un identifiant unique de menu (",(0,r.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),") ou un num\xe9ro de menu.",(0,r.jsx)(n.br,{}),"\nSi vous passez un identifiant unique, le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9 s\u2019il est pass\xe9.",(0,r.jsx)(n.br,{}),"\nSi vous passez un num\xe9ro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez d\xe9signer un autre process, passez son num\xe9ro dans le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-menu-item-key",children:"Get menu item key"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/get-menu-item-key",children:"Get menu item key"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"980"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var i=s(667294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);