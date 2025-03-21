"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16069"],{803452:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-menu-bar","title":"SET MENU BAR","description":"SET MENU BAR ( barre {; process}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-bar.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-bar","permalink":"/docs/fr/20-R7/commands/set-menu-bar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-bar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-bar","title":"SET MENU BAR","slug":"/commands/set-menu-bar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET HELP MENU","permalink":"/docs/fr/20-R7/commands/set-help-menu"},"next":{"title":"SET MENU ITEM","permalink":"/docs/fr/20-R7/commands/set-menu-item"}}'),t=r("785893"),a=r("250065");let i={id:"set-menu-bar",title:"SET MENU BAR",slug:"/commands/set-menu-bar",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU BAR"})," ( ",(0,t.jsx)(n.em,{children:"barre"})," {; ",(0,t.jsx)(n.em,{children:"process"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"barre"}),(0,t.jsx)(n.td,{children:"Integer, Text, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro ou nom de la barre de menus ou R\xe9f\xe9rence de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence du process"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conserver l'\xe9tat de la barre de menus"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SET MENU BAR"})," remplace la barre de menus courante par la barre de menus ",(0,t.jsx)(n.em,{children:"barre"}),", pour le process en cours uniquement. Vous pouvez passer dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"barre"})," soit le num\xe9ro soit le nom de la nouvelle barre. Vous pouvez \xe9galement passer une r\xe9f\xe9rence unique de menu (type ",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),", cha\xeene de 16 caract\xe8res). Lorsque vous travaillez avec des r\xe9f\xe9rences, les menus peuvent \xeatre utilis\xe9s comme barres de menus et inversement (cf. section ",(0,t.jsx)(n.em,{children:"Gestion des menus"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Le nom d\u2019une barre de menus peut contenir jusqu\u2019\xe0 31 caract\xe8res et doit \xeatre unique."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"process"}),", c'est la barre de menus du process sp\xe9cifi\xe9 qui sera remplac\xe9e par la ",(0,t.jsx)(n.em,{children:"barre"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,t.jsx)(n.em,{children:"barre"}),", le param\xe8tre ",(0,t.jsx)(n.em,{children:"process"})," est inutile et sera ignor\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel * vous permet de conserver l'\xe9tat de la barre de menus. Si ce param\xe8tre est omis, ",(0,t.jsx)(n.strong,{children:"SET MENU BAR"})," r\xe9initialise la barre de menus lors de l'ex\xe9cution de la commande.",(0,t.jsx)(n.br,{}),"\nImaginez, par exemple, que l'instruction ",(0,t.jsx)(n.strong,{children:"SET MENU BAR"}),"(1) soit ex\xe9cut\xe9e. Ensuite, plusieurs commandes de menu sont d\xe9sactiv\xe9es \xe0 l'aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/disable-menu-item",children:"DISABLE MENU ITEM"}),".",(0,t.jsx)(n.br,{}),"\nSi ",(0,t.jsx)(n.strong,{children:"SET MENU BAR"}),"(1) est ex\xe9cut\xe9e une seconde fois, soit \xe0 partir du m\xeame process, soit \xe0 partir d'un autre process, toutes les commandes de menu retournent \xe0 leur \xe9tat d'activation initial.",(0,t.jsx)(n.br,{}),"\nSi ",(0,t.jsx)(n.strong,{children:"SET MENU BAR"}),"(1;*) est ex\xe9cut\xe9e, la barre de menus conservera son \xe9tat pr\xe9c\xe9dent, les commandes de menu qui \xe9taient inactiv\xe9es le resteront."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous passez un param\xe8tre ",(0,t.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"})," dans ",(0,t.jsx)(n.em,{children:"barre"}),", le param\xe8tre ",(0,t.jsx)(n.em,{children:"*"})," est inutile et sera ignor\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Lorsqu'un utilisateur arrive en mode Application, la premi\xe8re barre de menus s'affiche (Barre n\xb0 1). Vous pouvez changer cette barre de menus par d\xe9faut en sp\xe9cifiant la barre que vous voulez dans la , ou dans la m\xe9thode de d\xe9marrage associ\xe9e \xe0 un utilisateur."}),"\n",(0,t.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant remplace la barre de menus courante par la barre de menus n\xb0 3 et initialise l'\xe9tat des commandes des menus :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU BAR(3)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant remplace la barre de menus courante par la barre de menus nomm\xe9e \u201CBarreForm1\u201D et conserve l'\xe9tat des commandes des menus : celles qui \xe9taient pr\xe9c\xe9demment inactiv\xe9es appara\xeetront inactiv\xe9es :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SET MENU BAR("BarreForm1";*)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant remplace la barre de menus courante par la barre de menus n\xb0 3 pendant que des enregistrements sont en cours de modification. Une fois les enregistrements modifi\xe9s, la barre de menus n\xb0 2 est r\xe9affich\xe9e. L'\xe9tat des commandes de ce menu est conserv\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU BAR(3)\xa0// D\xe9finir la barre de menus n\xb0 3 pour le formulaire suivant\n\xa0ALL RECORDS([Clients])\n\xa0MODIFY SELECTION([Clients])\xa0// Afficher la s\xe9lection\n\xa0SET MENU BAR(2;*)\xa0// Apr\xe8s modification, retour \xe0 la barre de menus n\xb0 2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"Dans cet exemple complet, nous allons cr\xe9er par programmation une barre comportant les menus Fichier et Edition suivants :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(382155).Z+"",width:"624",height:"197"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode de cr\xe9ation menu Fichier\n\xa0var FileMenu : Text\xa0// FileMenu contiendra la r\xe9f\xe9rence du menu Fichier\n\xa0FileMenu:=Create menu\n\xa0INSERT MENU ITEM(FileMenu;-1;Get indexed string(131;29)+" Ma Base de Donn\xe9es(")\n\xa0SET MENU ITEM MARK(FileMenu;1;Char(18))\n\xa0INSERT MENU ITEM(FileMenu;-1;"(-")\n\xa0INSERT MENU ITEM(FileMenu;-1;"Quitter le mode Test Application/Y")\n\xa0SET MENU ITEM PROPERTY(FileMenu;3;Associated standard action;ak return to design mode)\n\xa0INSERT MENU ITEM(FileMenu;-1;"(-")\n\xa0INSERT MENU ITEM(FileMenu;-1;"Pr\xe9f\xe9rences")\n\xa0SET MENU ITEM PROPERTY(FileMenu;5;Associated standard action;ak database settings)\xa0//Param\xe8tres\n\xa0INSERT MENU ITEM(FileMenu;-1;"(-")\n\xa0INSERT MENU ITEM(FileMenu;-1;Get indexed string(131;30))\n\xa0SET MENU ITEM PROPERTY(FileMenu;7;Associated standard action;ak quit)\xa0//Quitter\n\xa0SET MENU ITEM SHORTCUT(FileMenu;7;Character code("Q"))\n\xa0\n\xa0\xa0//M\xe9thode de cr\xe9ation menu Chercher et Remplacer\n\xa0var FindAndReplaceMenu : Text\xa0//FindAndReplaceMenu contiendra la r\xe9f\xe9rence du menu Chercher remplacer\n\xa0FindAndReplaceMenu:=Create menu\n\xa0APPEND MENU ITEM(FindAndReplaceMenu;"Chercher;Chercher Suivant;Chercher Pr\xe9c\xe9dent;(-;Remplacer;Remplacer suivant;Remplacer pr\xe9c\xe9dent")\n\xa0SET MENU ITEM SHORTCUT(FindAndReplaceMenu;1;Character code("F"))\n\xa0SET MENU ITEM SHORTCUT(FindAndReplaceMenu;5;Character code("R"))\n\xa0SET MENU ITEM METHOD(FindAndReplaceMenu;1;"MaMethodechercher")\n\xa0\n\xa0\xa0//M\xe9thode de cr\xe9ation menu Edition\n\xa0var EditMenu : Text\xa0//EditMenu contiendra la r\xe9f\xe9rence du menu Edition\n\xa0EditMenu:=Create menu\n\xa0APPEND MENU ITEM(EditMenu;"Couper;Copier;Coller")\n\xa0SET MENU ITEM SHORTCUT(EditMenu;1;Character code("X"))\n\xa0SET MENU ITEM PROPERTY(EditMenu;1;Associated standard action;ak cut)\n\xa0SET MENU ITEM SHORTCUT(EditMenu;2;Character code("C"))\n\xa0SET MENU ITEM PROPERTY(EditMenu;2;Associated standard action;ak copy)\n\xa0SET MENU ITEM SHORTCUT(EditMenu;3;Character code("V"))\n\xa0SET MENU ITEM PROPERTY(EditMenu;3;Associated standard action;ak paste)\n\xa0INSERT MENU ITEM(EditMenu;-1;"(-")\n\xa0INSERT MENU ITEM(EditMenu;-1;"Chercher et Remplacer";FindAndReplaceMenu)\xa0// ligne qui aura le sous menu\n\xa0\n\xa0main_Bar:=Create menu\xa0// Cree la barre constitu\xe9e des autres menus\n\xa0INSERT MENU ITEM(main_Bar;-1;Get indexed string(79;1);FileMenu)\n\xa0APPEND MENU ITEM(main_Bar;"Edition";EditMenu)\n\xa0\n\xa0SET MENU BAR(main_Bar)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Gestion des menus"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"67"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},382155:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},a=s.createContext(t);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);