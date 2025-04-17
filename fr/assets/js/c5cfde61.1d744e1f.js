"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59969"],{811237:function(e,n,s){s.r(n),s.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/pop-up-menu","title":"Pop up menu","description":"Pop up menu ( contenu {; parD\xe9faut {; coordX ; coordY}} )  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/pop-up-menu.md","sourceDirName":"commands-legacy","slug":"/commands/pop-up-menu","permalink":"/docs/fr/commands/pop-up-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpop-up-menu.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"pop-up-menu","title":"Pop up menu","slug":"/commands/pop-up-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLAY","permalink":"/docs/fr/commands/play"},"next":{"title":"POST CLICK","permalink":"/docs/fr/commands/post-click"}}'),t=s("785893"),i=s("250065");let l={id:"pop-up-menu",title:"Pop up menu",slug:"/commands/pop-up-menu",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function u(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pop up menu"})," ( ",(0,t.jsx)(n.em,{children:"contenu"})," {; ",(0,t.jsx)(n.em,{children:"parD\xe9faut"})," {; ",(0,t.jsx)(n.em,{children:"coordX"})," ; ",(0,t.jsx)(n.em,{children:"coordY"}),"}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"contenu"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"D\xe9finition du texte du menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parD\xe9faut"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de l'\xe9l\xe9ment s\xe9lectionn\xe9 par d\xe9faut"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"coordX"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e X du coin sup\xe9rieur gauche"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"coordY"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Coordonn\xe9e Y du coin sup\xe9rieur gauche"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de l'\xe9l\xe9ment de menu s\xe9lectionn\xe9"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Pop up menu"})," fait appara\xeetre un pop up \xe0 l'emplacement courant du curseur de la souris ou \xe0 l'emplacement d\xe9fini par les param\xe8tres facultatifs ",(0,t.jsx)(n.em,{children:"coordX"})," et ",(0,t.jsx)(n.em,{children:"coordY"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Selon les r\xe8gles standard d'interface utilisateur, cette commande doit g\xe9n\xe9ralement \xeatre appel\xe9e en r\xe9ponse \xe0 un clic souris, et lorsque le bouton reste enfonc\xe9 un certain laps de temps."}),"\n",(0,t.jsxs)(n.p,{children:["Vous d\xe9finissez les \xe9l\xe9ments du pop up menu \xe0 l'aide du param\xe8tre ",(0,t.jsx)(n.em,{children:"contenu"}),", de la mani\xe8re suivante :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Chaque \xe9l\xe9ment est s\xe9par\xe9 des autres par un point-virgule (;), ",(0,t.jsx)(n.em,{children:'"El\xe9ment1;El\xe9ment2;El\xe9ment3"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:['Pour inactiver un \xe9l\xe9ment, placez une parenth\xe8se ouvrante "',(0,t.jsx)(n.em,{children:"("}),'" dans son libell\xe9.']}),"\n",(0,t.jsx)(n.li,{children:'Pour d\xe9finir une ligne de s\xe9paration, passez la valeur "-" ou "(-" en tant que libell\xe9.'}),"\n",(0,t.jsxs)(n.li,{children:["Pour d\xe9finir le style de caract\xe8res d'un \xe9l\xe9ment, placez dans son libell\xe9 le symbole inf\xe9rieur \xe0 \"",(0,t.jsx)(n.em,{children:"<"}),"\" suivi d'une lettre. Voici les diff\xe9rents codes :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"<B"}),(0,t.jsx)(n.th,{children:"Gras"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<I"}),(0,t.jsx)(n.td,{children:"Italique"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<U"}),(0,t.jsx)(n.td,{children:"Soulign\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<O"}),(0,t.jsx)(n.td,{children:"Contours (Mac OS seulement)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"<S"}),(0,t.jsx)(n.td,{children:"Relief (Mac OS seulement)"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Pour associer une coche \xe0 un \xe9l\xe9ment, ins\xe9rez dans son libell\xe9 un point d'exclamation \"",(0,t.jsx)(n.em,{children:"!"}),'" suivi du caract\xe8re que vous voulez utiliser comme coche.\n',(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Sous Mac OS, le caract\xe8re pass\xe9 est directement affich\xe9. Pour afficher la coche standard quelle que soit la version ou la langue du syst\xe8me, utilisez l'instruction ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/char",children:"Char"}),"(18)."]}),"\n",(0,t.jsx)(n.li,{children:"Sous Windows, une coche standard est affich\xe9e (quel que soit le caract\xe8re pass\xe9)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Pour associer une ic\xf4ne \xe0 un \xe9l\xe9ment, ins\xe9rez dans son libell\xe9 un accent circonflexe \"^\" suivi d'un caract\xe8re dont le code moins 48 plus 256 (ou plus 208) repr\xe9sente un num\xe9ro de ressource d'ic\xf4ne Mac OS."}),"\n",(0,t.jsxs)(n.li,{children:['Pour ajouter un raccourci clavier \xe0 un \xe9l\xe9ment, ins\xe9rez dans son libell\xe9 une barre oblique "',(0,t.jsx)(n.em,{children:"/"}),"\" suivie du caract\xe8re de raccourci. Notez que cette derni\xe8re option est uniquement informative (aucun raccourci clavier n'active le pop up menu), cependant vous pouvez indiquer un raccourci clavier si l'\xe9l\xe9ment du pop up menu dispose d'une commande \xe9quivalente dans la barre de menus principale de votre application."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Astuce : Il est possible de d\xe9sactiver le m\xe9canisme d'interpr\xe9tation des caract\xe8res sp\xe9ciaux (!, /, etc.) dans un \xe9l\xe9ment de pop up menu afin, par exemple, de faire figurer ces caract\xe8res dans les libell\xe9s. Pour cela, il suffit de faire d\xe9buter la d\xe9finition de l'\xe9l\xe9ment contenue dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"contenu"})," par l'instruction ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/char",children:"Char"}),"(1) (ex : ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.em,{children:"Caractere"}),'(1)+"1/4"']}),' pour d\xe9finir un \xe9l\xe9ment "1/4").']}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"parD\xe9faut"})," vous permet de d\xe9finir l'\xe9l\xe9ment du pop up menu s\xe9lectionn\xe9 par d\xe9faut lorsque celui-ci appara\xeet. Passez une valeur situ\xe9e entre 1 et le nombre d'\xe9l\xe9ments du menu. Si vous ne passez pas ce param\xe8tre, le premier \xe9l\xe9ment du menu sera s\xe9lectionn\xe9 par d\xe9faut. Si vous passez \xe9galement les param\xe8tres ",(0,t.jsx)(n.em,{children:"coordX"})," et ",(0,t.jsx)(n.em,{children:"coordY"})," (cf. ci-dessous), ce param\xe8tre est ignor\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Les param\xe8tres facultatifs ",(0,t.jsx)(n.em,{children:"coordX"})," et ",(0,t.jsx)(n.em,{children:"coordY"})," permettent de d\xe9signer l\u2019emplacement du pop up menu \xe0 afficher. Passez respectivement dans ",(0,t.jsx)(n.em,{children:"coordX"})," et ",(0,t.jsx)(n.em,{children:"coordY"})," les coordonn\xe9es horizontale et verticale du coin sup\xe9rieur gauche du menu. Ces coordonn\xe9es doivent \xeatre exprim\xe9es en pixels dans le syst\xe8me de coordonn\xe9es local au formulaire courant. Ces deux param\xe8tres doivent \xeatre pass\xe9s ensemble ; si un seul est pass\xe9, il est ignor\xe9.",(0,t.jsx)(n.br,{}),"\nSi vous utilisez les param\xe8tres ",(0,t.jsx)(n.em,{children:"coordX"})," et ",(0,t.jsx)(n.em,{children:"coordY"}),", le param\xe8tre ",(0,t.jsx)(n.em,{children:"parD\xe9faut"})," est ignor\xe9. Dans ce cas en effet, la souris ne se trouve pas n\xe9cessairement au niveau du pop up menu.",(0,t.jsx)(n.br,{}),"\nCes param\xe8tres sont utiles notamment pour la gestion des boutons 3D avec pop up menu associ\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Lorsqu'un \xe9l\xe9ment du pop up menu est s\xe9lectionn\xe9, la commande retourne son num\xe9ro, autrement elle retourne z\xe9ro."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Utilisez les pop up menus avec un nombre \"raisonnable\" d'\xe9l\xe9ments. Si, par exemple, vous voulez afficher plus de 50 \xe9l\xe9ments, envisagez plut\xf4t d'employer une zone de d\xe9filement dans un formulaire."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet MON RACCOURCI fait appara\xeetre un pop up menu de navigation :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet MON RACCOURCI\n MOUSE POSITION($vlMouseX;$vlMouseY;$vlBouton)\n If(Macintosh control down | ($vlBouton=2))\n    $vtItems:=\"A propos de cette base...<I;(-;!-Autres options;(-\"\n    For($vlTable;1;Get last table number)\n       If(Is table number valid($vlTable))\n          $vtItems:=$vtItems+\";\"+Table name($vlTable)\n       End if\n    End for\n    $vlChoixUtilisateur:=Pop up menu($vtItems)\n    Case of\n       :($vlChoixUtilisateur=1)\n  ` Afficher les informations\n       :($vlChoixUtilisateur=2)\n  ` Afficher les options\n       Else\n          If($vlChoixUtilisateur>0)\n  ` Aller \xe0 la table dont le num\xe9ro est $vlChoixUtilisateur-4\n          End if\n    End case\n End if\n\nCette m\xe9thode projet peut \xeatre appel\xe9e d'une des mani\xe8res suivantes :\n\n* depuis la m\xe9thode d'un objet r\xe9agissant \xe0 un clic souris, et n'attendant pas que le bouton soit rel\xe2ch\xe9 (par exemple un bouton invisible),\n* depuis un process qui \u201C\xe9pie\u201D les \xe9v\xe9nements et communique avec les autres process,\n* depuis une m\xe9thode de gestion d'\xe9v\xe9nements install\xe9e par la commande [ON ERR CALL](on-err-call.md).\n\nDans les deux derniers cas, il n'est pas n\xe9cessaire que le clic se produise dans un objet de formulaire. C'est l'un des avantages de la commande **Pop up menu**. G\xe9n\xe9ralement, les pop up menus sont affich\xe9s par l'interm\xe9diaire d'objets de formulaire. Avec **Pop up menu**, vous pouvez faire appara\xeetre un pop up menu n'importe o\xf9. \n\nLe pop up menu s'affiche sous Windows lorsque l'utilisateur appuie sur le **bouton droit** de la souris, et sous Mac OS lorsqu'il utilise la combinaison **Control+clic**. Notez cependant que la m\xe9thode ci-dessus ne teste pas le clic souris, c'est la m\xe9thode appelante qui en est charg\xe9e. \n\nVoici le pop up menu tel qu'il s'affiche sous Windows (\xe0 gauche) et sous Mac OS (\xe0 droite). Notez la coche standard de la version Windows :\n\n![](../assets/en/commands/pict36394.fr.png)\n\n## Voir aussi \n\n[Dynamic pop up menu](dynamic-pop-up-menu.md)  \n[MOUSE POSITION](mouse-position.md)  \n\n## Propri\xe9t\xe9s\n\n|  |  |\n| --- | --- |\n| Num\xe9ro de commande | 542 |\n| Thread safe | &cross; |\n\n\n"})})]})}function c(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);