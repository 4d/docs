"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21283"],{536712:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/dynamic-pop-up-menu","title":"Dynamic pop up menu","description":"Dynamic pop up menu ( menu {; parD\xe9faut {; coordX ; coordY}} )  : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dynamic-pop-up-menu.md","sourceDirName":"commands-legacy","slug":"/commands/dynamic-pop-up-menu","permalink":"/docs/fr/commands/dynamic-pop-up-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdynamic-pop-up-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dynamic-pop-up-menu","title":"Dynamic pop up menu","slug":"/commands/dynamic-pop-up-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISABLE MENU ITEM","permalink":"/docs/fr/commands/disable-menu-item"},"next":{"title":"ENABLE MENU ITEM","permalink":"/docs/fr/commands/enable-menu-item"}}'),r=t("785893"),s=t("250065");let i={id:"dynamic-pop-up-menu",title:"Dynamic pop up menu",slug:"/commands/dynamic-pop-up-menu",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dynamic pop up menu"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," {; ",(0,r.jsx)(n.em,{children:"parD\xe9faut"})," {; ",(0,r.jsx)(n.em,{children:"coordX"})," ; ",(0,r.jsx)(n.em,{children:"coordY"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parD\xe9faut"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Param\xe8tre de l'\xe9l\xe9ment s\xe9lectionn\xe9 par d\xe9faut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"coordX"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Coordonn\xe9e X du coin sup\xe9rieur gauche"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"coordY"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Coordonn\xe9e Y du coin sup\xe9rieur gauche"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Param\xe8tre de l'\xe9l\xe9ment de menu s\xe9lectionn\xe9"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"Dynamic pop up menu"})," fait appara\xeetre un pop up menu hi\xe9rarchique \xe0 l\u2019emplacement courant de la souris ou \xe0 l\u2019emplacement d\xe9fini par les param\xe8tres facultatifs ",(0,r.jsx)(n.em,{children:"coordX"})," et ",(0,r.jsx)(n.em,{children:"coordY"}),".",(0,r.jsx)(n.br,{}),"\nLe menu hi\xe9rarchique utilis\xe9 doit avoir \xe9t\xe9 cr\xe9\xe9 \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-menu",children:"Create menu"}),". La r\xe9f\xe9rence retourn\xe9e par ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/create-menu",children:"Create menu"})," doit \xeatre pass\xe9e dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," La commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/pop-up-menu",children:"Pop up menu"})," (th\xe8me \u201CInterface utilisateur\u201D) permet de cr\xe9er des pop up menus bas\xe9s sur du texte."]}),"\n",(0,r.jsx)(n.p,{children:"Conform\xe9ment aux r\xe8gles standard d\u2019interface, cette commande doit g\xe9n\xe9ralement \xeatre appel\xe9e en r\xe9ponse \xe0 un clic droit, ou lorsque le bouton reste enfonc\xe9 un certain laps de temps (menu contextuel par exemple)."}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"parD\xe9faut"})," vous permet de d\xe9finir un \xe9l\xe9ment du pop up menu s\xe9lectionn\xe9 par d\xe9faut lorsque celui-ci appara\xeet. Passez dans ce param\xe8tre la cha\xeene personnalis\xe9e associ\xe9e \xe0 l\u2019\xe9l\xe9ment de menu. Cette cha\xeene doit avoir \xe9t\xe9 pr\xe9alablement d\xe9finie \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"}),". Si vous ne passez pas ce param\xe8tre, le premier \xe9l\xe9ment du menu sera s\xe9lectionn\xe9 par d\xe9faut."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Seul une ligne de menu de premier niveau peut \xeatre s\xe9lectionn\xe9e par d\xe9faut."]}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres facultatifs ",(0,r.jsx)(n.em,{children:"coordX"})," et ",(0,r.jsx)(n.em,{children:"coordY"})," permettent de d\xe9signer l\u2019emplacement du pop up menu \xe0 afficher. Passez respectivement dans ",(0,r.jsx)(n.em,{children:"coordX"})," et ",(0,r.jsx)(n.em,{children:"coordY"})," les coordonn\xe9es horizontale et verticale du coin sup\xe9rieur gauche du menu. Ces coordonn\xe9es doivent \xeatre exprim\xe9es en pixels dans le syst\xe8me de coordonn\xe9es local au formulaire courant. Ces deux param\xe8tres doivent \xeatre pass\xe9s ensemble ; si un seul est pass\xe9, il est ignor\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous souhaitez afficher un pop up associ\xe9 \xe0 un bouton 3D, il suffit de ne pas passer les param\xe8tres facultatifs ",(0,r.jsx)(n.em,{children:"coordX"})," et ",(0,r.jsx)(n.em,{children:"coordY"}),'. Dans ce cas, 4D calcule automatiquement l\u2019emplacement du menu par rapport au bouton en fonction des normes d\u2019interface de la plate-forme courante (le bouton 3D doit disposer de la propri\xe9t\xe9 "Avec pop-up menu/Li\xe9" ou "Avec pop-up menu/S\xe9par\xe9").']}),"\n",(0,r.jsxs)(n.p,{children:["Si une ligne de menu a \xe9t\xe9 s\xe9lectionn\xe9e, la commande retourne sa cha\xeene de caract\xe8res personnalis\xe9e associ\xe9e (telle que d\xe9finie \xe0 l\u2019aide de la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"}),"). Sinon, la commande retourne une cha\xeene vide."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"A partir de 4D v16 R3"})," : si une action standard est associ\xe9e \xe0 une ligne de menu, elle est prise en compte par la commande ",(0,r.jsx)(n.strong,{children:"Dynamic pop up menu"})," \xe0 diff\xe9rents niveaux :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si une action standard n'est pas activ\xe9e (c'est-\xe0-dire ne peut pas \xeatre appel\xe9e) dans le contexte du pop-up menu, le libell\xe9 est automatiquement cach\xe9. Vous pouvez savoir si une action est disponible en utilisant la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/action-info",children:"Action info"}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Les propri\xe9t\xe9s li\xe9es \xe0 une action associ\xe9e sont automatiquement "checked", "unchecked" ou "mixed" selon la s\xe9lection.'}),"\n",(0,r.jsx)(n.li,{children:"Si le titre de l'action de la ligne de menu a \xe9t\xe9 d\xe9fini en utilisant la constante ak standard action title, le nom localis\xe9 est affich\xe9 dans le menu."}),"\n",(0,r.jsx)(n.li,{children:"Lorsque la ligne de menu est s\xe9lectionn\xe9e, l'action standard associ\xe9e est appel\xe9e (l'ex\xe9cution est asynchrone)."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Ce code permet de cr\xe9er un pop up menu dynamique hi\xe9rarchique, construit sur les actions standard :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $refMainContextMenu;$refMenuEdit : Text\n\xa0$refMainContextMenu:=Cr\xe9er menu\n\xa0APPEND MENU ITEM($refMainContextMenu;"-")\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associ\xe9e;ak select all)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associ\xe9e;ak clear)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associ\xe9e;ak copy)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associ\xe9e;ak cut)\n\xa0APPEND MENU ITEM($refMainContextMenu;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMainContextMenu;-1;Action standard associ\xe9e;ak paste)\n\xa0APPEND MENU ITEM($refMainContextMenu;"-")\n\xa0\xa0\xa0//Sous-menu Edition\n\xa0$refMenuEdit:=Cr\xe9er menu\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associ\xe9e;ak font bold)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caract\xe8re("B"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associ\xe9e;ak font italic)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caract\xe8re("I"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associ\xe9e;ak font linethrough)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caract\xe8re("L"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associ\xe9e;ak font underline)\n\xa0SET MENU ITEM SHORTCUT($refMenuEdit;-1;Code de caract\xe8re("U"))\n\xa0APPEND MENU ITEM($refMenuEdit;ak standard action title)\n\xa0SET MENU ITEM PROPERTY($refMenuEdit;-1;Action standard associ\xe9e;ak font show dialog)\n\xa0APPEND MENU ITEM($refMainContextMenu;"Edition";$refMenuEdit)\n\xa0\n\xa0paramRef:=Dynamic pop up menu($refMainContextMenu)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-menu-item-parameter",children:"Get menu item parameter"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-selected-menu-item-parameter",children:"Get selected menu item parameter"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/pop-up-menu",children:"Pop up menu"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var a=t(667294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);