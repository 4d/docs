"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88433"],{476625:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/display-selection","title":"DISPLAY SELECTION","description":"DISPLAY SELECTION ( {; modeS\xe9lection}{; saisieListe}{; }{; } )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/display-selection.md","sourceDirName":"commands-legacy","slug":"/commands/display-selection","permalink":"/docs/fr/commands/display-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"display-selection","title":"DISPLAY SELECTION","slug":"/commands/display-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE SELECTION","permalink":"/docs/fr/commands/delete-selection"},"next":{"title":"Displayed line number","permalink":"/docs/fr/commands/displayed-line-number"}}'),t=n("785893"),i=n("250065");let l={id:"display-selection",title:"DISPLAY SELECTION",slug:"/commands/display-selection",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," ( {",(0,t.jsx)(s.em,{children:"laTable"}),"}{; ",(0,t.jsx)(s.em,{children:"modeS\xe9lection"}),"}{; ",(0,t.jsx)(s.em,{children:"saisieListe"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"laTable"}),(0,t.jsx)(s.td,{children:"Table"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Table \xe0 laquelle appartient la s\xe9lection ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"modeS\xe9lection"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Mode de s\xe9lection"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"saisieListe"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Autoriser saisie en liste"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operator"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Utiliser le formulaire sortie en cas de s\xe9lection d'un seul enregistrement et masquer les barres de d\xe9filement dans le formulaire entr\xe9e"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operator"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Afficher les barres de d\xe9filement dans le formulaire entr\xe9e (= annuler le second effet du premier param\xe8tre *)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," affiche, pour le process en cours, la s\xe9lection courante de ",(0,t.jsx)(s.em,{children:"laTable"})," dans le formulaire sortie courant. Les enregistrements sont affich\xe9s sous la forme d'une liste que l'on peut faire d\xe9filer, semblable \xe0 celle du mode D\xe9veloppement. Lorsque l'utilisateur double-clique sur un enregistrement, par d\xe9faut celui-ci s'affiche dans le formulaire entr\xe9e courant. La liste est plac\xe9e dans la fen\xeatre de premier plan."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous souhaitez afficher une s\xe9lection et pouvoir \xe9galement modifier un enregistrement dans le formulaire entr\xe9e courant une fois que vous avez double-cliqu\xe9 dessus (comme vous le faites dans la fen\xeatre du mode D\xe9veloppement) ou via le mode \u201CSaisie en liste\u201D, utilisez ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})," au lieu de ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"}),". Toutes les explications suivantes s'appliquent \xe0 ces deux commandes, hormis la possibilit\xe9 de modifier des enregistrements."]}),"\n",(0,t.jsxs)(s.p,{children:["Apr\xe8s qu'un ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," ait \xe9t\xe9 ex\xe9cut\xe9, il n'y a plus d'enregistrement courant. Vous devez utiliser une commande telle que ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/first-record",children:"FIRST RECORD"})," ou ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/last-record",children:"LAST RECORD"})," pour en r\xe9cup\xe9rer un."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"modeS\xe9lection"})," vous permet de d\xe9finir les possibilit\xe9s de s\xe9lection d\u2019enregistrements dans la liste \xe0 l'aide de la souris. Vous pouvez passer dans ce param\xe8tre une des constantes suivantes du th\xe8me \u201C",(0,t.jsx)(s.em,{children:"Param\xe8tres de formulaire"}),"\u201D :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constante"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Valeur"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Multiple selection"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsxs)(s.td,{children:["L\u2019utilisateur peut s\xe9lectionner plusieurs enregistrements. Pour s\xe9lectionner des enregistrements contigus, il suffit de cliquer sur le premier enregistrement \xe0 s\xe9lectionner puis d'appuyer sur la touche ",(0,t.jsx)(s.strong,{children:"Majuscule"})," avant de cliquer sur le dernier. Pour s\xe9lectionner des enregistrements non adjacents, il suffit de cliquer sur chaque enregistrement en maintenant enfonc\xe9e la touche ",(0,t.jsx)(s.strong,{children:"Ctrl"})," (sous Windows) ou ",(0,t.jsx)(s.strong,{children:"Commande"})," (sous Mac OS)."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"No selection"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"Il n'est pas possible de s\xe9lectionner un enregistrement dans la liste"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Single selection"}),(0,t.jsx)(s.td,{children:"Entier long"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"Seule la s\xe9lection d\u2019un enregistrement \xe0 la fois est autoris\xe9e"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"modeS\xe9lection"}),", par d\xe9faut le mode \u201CS\xe9lection multiple\u201D est utilis\xe9."]}),"\n",(0,t.jsxs)(s.p,{children:["Le param\xe8tre ",(0,t.jsx)(s.em,{children:"saisieListe"})," vous permet d\u2019autoriser le mode \u201CSaisie en liste\u201D dans la liste affich\xe9e. Ce mode permet \xe0 l'utilisateur de s\xe9lectionner et de modifier directement les valeurs des enregistrements dans le formulaire sortie. Passez Vrai pour autoriser ce mode ou Faux pour ne pas l\u2019autoriser. Par d\xe9faut, si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"saisieListe"}),", le mode \u201CSaisie en liste\u201D n\u2019est pas autoris\xe9.",(0,t.jsx)(s.br,{}),"\nA noter qu'avec la commande ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"}),", ce param\xe8tre permet uniquement la s\xe9lection de valeurs dans la liste et non leur modification. En effet, la commande ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," charge les enregistrements de la s\xe9lection courante en Lecture seulement dans le process en cours. Seule la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})," permet effectivement la saisie de valeurs."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," La commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/object-set-enterable",children:"OBJECT SET ENTERABLE"})," permet d\u2019activer ou de d\xe9sactiver le mode Saisie en liste \xe0 la vol\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque la s\xe9lection ne contient qu'un enregistrement, et que le premier param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"})," n'est pas pass\xe9, l'enregistrement s'affichera directement dans le formulaire entr\xe9e. Si le premier param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"})," est sp\xe9cifi\xe9, l'enregistrement unique sera affich\xe9 dans le formulaire sortie. Si le premier param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"})," est sp\xe9cifi\xe9 et que l'utilisateur affiche l'enregistrement dans le formulaire entr\xe9e en double-cliquant dessus, les barres de d\xe9filement du formulaire seront masqu\xe9es. Pour annuler ce second effet du premier param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"}),", passez le second param\xe8tre optionnel ",(0,t.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez placer des boutons personnalis\xe9s dans la zone d'en-t\xeate ou de pied de page du formulaire sortie pour terminer l'ex\xe9cution de la commande ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"}),". Vous pouvez utiliser des boutons automatiques ",(0,t.jsx)(s.strong,{children:"Valider"})," ou ",(0,t.jsx)(s.strong,{children:"Annuler"})," permettant de sortir de la liste ou utiliser une m\xe9thode objet qui appelle les commandes ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/accept",children:"ACCEPT"})," ou ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/cancel",children:"CANCEL"}),". Lorsqu\u2019un formulaire sortie appel\xe9 par la commande ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," est d\xe9pourvu de boutons, seule la touche ",(0,t.jsx)(s.strong,{children:"Echap"})," (Windows) ou ",(0,t.jsx)(s.strong,{children:"Esc"})," (Mac OS) permet de quitter la liste."]}),"\n",(0,t.jsxs)(s.p,{children:["Pendant et apr\xe8s l'ex\xe9cution d'un ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"}),", les enregistrements s\xe9lectionn\xe9s par l'utilisateur sont conserv\xe9s dans un ensemble syst\xe8me nomm\xe9 UserSet. Apr\xe8s l'ex\xe9cution de la commande, l'ensemble UserSet est accessible pendant un ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," aux m\xe9thodes objet de boutons, aux m\xe9thodes appel\xe9es par des commandes de menu, ainsi que pour la m\xe9thode projet qui avait appel\xe9 ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(s.p,{children:["L'exemple suivant s\xe9lectionne tous les enregistrements de la table [Personnes]. La commande ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," est alors utilis\xe9e pour afficher les enregistrements et permettre \xe0 l'utilisateur de d\xe9signer ceux qu'il souhaite imprimer. Enfin, les enregistrements s\xe9lectionn\xe9s sont r\xe9cup\xe9r\xe9s \xe0 l'aide de la commande ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/use-set",children:"USE SET"})," et imprim\xe9s avec ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"})," :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Personnes])\xa0// S\xe9lection de tous les enregistrements\n\xa0DISPLAY SELECTION([Personnes];*)\xa0// Affichage des enregistrements\n\xa0USE SET("UserSet")\xa0// Use uniquement les enregistrements s\xe9lectionn\xe9s par l\'utilisateur\n\xa0PRINT SELECTION([Personnes])\xa0// Imprimer les enregistrements s\xe9lectionn\xe9s\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(s.p,{children:["Reportez-vous \xe0 l'exemple n\xb06 de la commande ",(0,t.jsx)(s.a,{href:"form-event-code.md",children:"Form event code"})," ; il indique tous les tests que vous pourrez avoir besoin d'effectuer pour surveiller la totalit\xe9 des \xe9v\xe9nements intervenant pendant l'ex\xe9cution de la commande ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsxs)(s.p,{children:["Pour reproduire, par exemple, les fonctionnalit\xe9s apport\xe9es par le menu ",(0,t.jsx)(s.strong,{children:"Enregistrements"})," du mode D\xe9veloppement lorsque vous utilisez ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"})," ou ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," en mode Application, proc\xe9dez de la mani\xe8re suivante :"]}),"\n",(0,t.jsxs)(s.p,{children:["I. Dans le mode D\xe9veloppement, cr\xe9ez une barre de menus comportant les menus qui vous int\xe9ressent (par exemple Tout montrer, Recherche et Trier).",(0,t.jsx)(s.br,{}),"\nII. Associez cette barre de menus (\xe0 l'aide du menu \u201CBarre de menus associ\xe9e\u201D dans la bo\xeete de dialogue des propri\xe9t\xe9s du formulaire) au formulaire sortie utilis\xe9 avec les commandes ",(0,t.jsx)(s.strong,{children:"DISPLAY SELECTION"})," ou ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),".",(0,t.jsx)(s.br,{}),"\nIII. Associez les m\xe9thodes projet suivantes \xe0 vos commandes de menu :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M_TOUT_MONTRER (associ\xe9e \xe0 la commande de menu Tout montrer)\n\xa0$vpCourTable:=Current form table\n\xa0ALL RECORDS($vpCourTable->)\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0// M_Recherche (associ\xe9e \xe0 la commande de menu Recherche)\n\xa0$vpCourTable:=Current form table\n\xa0QUERY($vpCourTable->)\n\xa0\n\xa0\xa0// M_TRIER (associ\xe9e \xe0 la commande de menu Trier)\n\xa0$vpCourTable:=Current form table\n\xa0ORDER BY($vpCourTable->)\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez aussi utiliser d'autres commandes telles que ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,t.jsx)(s.a,{href:"/docs/fr/commands/qr-report",children:"QR REPORT"}),', etc., afin de reproduire les commandes de menu "standard" \xe0 chaque fois que vous affichez ou modifiez une s\xe9lection en mode Application. Gr\xe2ce \xe0 la commande ',(0,t.jsx)(s.a,{href:"/docs/fr/commands/current-form-table",children:"Current form table"}),", ces m\xe9thodes sont g\xe9n\xe9riques et les barres de menus auxquelles elles sont associ\xe9es peuvent \xeatre rattach\xe9es \xe0 tout formulaire de sortie ou \xe0 toute table."]}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"form-event-code.md",children:"Form event code"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.em,{children:"Pr\xe9sentation des ensembles"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"59"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(s.td,{})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let t={},i=r.createContext(t);function l(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);