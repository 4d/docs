"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37656"],{361388:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/open-form-window","title":"Open form window","description":"Open form window ( {laTable ;} nomForm {; type {; posH {; posV {; *}}}} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/open-form-window.md","sourceDirName":"commands-legacy","slug":"/commands/open-form-window","permalink":"/docs/fr/commands/open-form-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-form-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-form-window","title":"Open form window","slug":"/commands/open-form-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Next window","permalink":"/docs/fr/commands/next-window"},"next":{"title":"Open window","permalink":"/docs/fr/commands/open-window"}}'),t=r("785893"),i=r("250065");let d={id:"open-form-window",title:"Open form window",slug:"/commands/open-form-window",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Open form window"})," ( {",(0,t.jsx)(n.em,{children:"laTable"})," ;} ",(0,t.jsx)(n.em,{children:"nomForm"})," {; ",(0,t.jsx)(n.em,{children:"type"})," {; ",(0,t.jsx)(n.em,{children:"posH"})," {; ",(0,t.jsx)(n.em,{children:"posV"})," {; *}}}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table du formulaire ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomForm"}),(0,t.jsx)(n.td,{children:"Text, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom du formulaire table ou projet (cha\xeene), ouChemin POSIX (cha\xeene) d'un fichier .json d\xe9crivant le formulaire, ouObjet d\xe9crivant le formulaire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Type de la fen\xeatre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posH"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position horizontale de la fen\xeatre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posV"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position verticale de la fen\xeatre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Conserver la position et la taille pr\xe9c\xe9dentes de la fen\xeatre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"Open form window"})," cr\xe9e une nouvelle fen\xeatre utilisant les propri\xe9t\xe9s de taille et de redimensionnement du formulaire ",(0,t.jsx)(n.em,{children:"nomForm"}),", pass\xe9 en param\xe8tre."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Utilisez la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-get-properties",children:"FORM GET PROPERTIES"})," pour conna\xeetre les propri\xe9t\xe9s du formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomForm"}),", vous pouvez passer :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"le nom d'un formulaire (formulaire projet ou formulaire table) \xe0 utiliser,"}),"\n",(0,t.jsxs)(n.li,{children:["le chemin (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire \xe0 utiliser (voir ",(0,t.jsx)(n.em,{children:"Chemin d'acc\xe8s du formulaire"}),"),"]}),"\n",(0,t.jsx)(n.li,{children:"un objet contenant la description du formulaire \xe0 utiliser."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A noter que le formulaire ",(0,t.jsx)(n.em,{children:"nomForm"})," n\u2019est pas affich\xe9 dans la fen\xeatre cr\xe9\xe9e. Il vous appartient, si vous le souhaitez, d\u2019afficher le formulaire (par exemple \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"type"}),' vous permet de sp\xe9cifier un type de fen\xeatre. Ce param\xe8tre doit contenir une des constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Creer fenetre formulaire"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Controller form window"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"133056"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Form has full screen mode Mac"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"65536"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Form has no menu bar"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2048"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modal form dialog box"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Movable form dialog box"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Movable form dialog box no title"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"524293"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Palette form window"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1984"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plain form window"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Plain form window no title"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"524296"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pop up form window"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"32"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sheet form window"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"33"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Toolbar form window"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"35"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Les types de fen\xeatres utilisables avec ",(0,t.jsx)(n.strong,{children:"Open form window"})," sont d\xe9taill\xe9s dans la section ",(0,t.jsx)(n.em,{children:"Types de fen\xeatres"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les constantes Form has full screen mode Mac et Form has no menu bar doivent \xeatre ajout\xe9es \xe0 l'une des autres constantes de type."]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,t.jsx)(n.em,{children:"type"})," n\u2019est pas pass\xe9, la fen\xeatre cr\xe9\xe9e est de type Plain form window."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Case de fermeture"}),"\nLes fen\xeatres de type Movable form dialog box, Plain form window et Palette form window comportent une case de fermeture. Aucune m\xe9thode n\u2019est associ\xe9e \xe0 cette case de fermeture : un clic sur la case de fermeture provoquera simplement l\u2019annulation du formulaire, sauf si l\u2019\xe9v\xe9nement On Close Box est activ\xe9 pour le formulaire, auquel cas le code associ\xe9 \xe0 cet \xe9v\xe9nement sera ex\xe9cut\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Contr\xf4le de taille"}),(0,t.jsx)(n.br,{}),'\nSi les propri\xe9t\xe9s "Taille de la fen\xeatre" du formulaire ',(0,t.jsx)(n.em,{children:"nomForm"})," ne sont pas fixes, la fen\xeatre cr\xe9\xe9e peut \xeatre redimensionn\xe9e par l'utilisateur. Une case de zoom peut \xe9galement \xeatre disponible, suivant le type de la fen\xeatre. Si la propri\xe9t\xe9 ",(0,t.jsx)(n.strong,{children:"Largeur fixe"})," et/ou ",(0,t.jsx)(n.strong,{children:"Hauteur fixe"})," est coch\xe9e dans les propri\xe9t\xe9s du formulaire, la taille de la fen\xeatre ne pourra pas \xeatre modifi\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Certains attributs de la fen\xeatre cr\xe9\xe9e (case de contr\xf4le de taille, case de fermeture...) d\xe9pendent des sp\xe9cifications d'interface du syst\xe8me d'exploitation pour le ",(0,t.jsx)(n.em,{children:"type"})," choisi. Il est donc possible d'obtenir des r\xe9sultats diff\xe9rents en fonction de la plate-forme."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"posH"}),' vous permet de d\xe9finir l\u2019emplacement horizontal de la fen\xeatre. Vous pouvez passer une coordonn\xe9e fixe exprim\xe9e en pixels ou l\u2019une des constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Creer fenetre formulaire"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Horizontally centered"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"65536"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On the left"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"131072"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On the right"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"196608"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"posV"}),' vous permet de d\xe9finir l\u2019emplacement vertical de la fen\xeatre. Vous pouvez passer une coordonn\xe9e fixe exprim\xe9e en pixels, ou l\u2019une des constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Creer fenetre formulaire"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"At the bottom"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"393216"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"At the top"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"327680"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vertically centered"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"262144"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Ces param\xe8tres sont exprim\xe9s relativement au coin sup\xe9rieur gauche de la zone de contenu de la fen\xeatre de l'application (Windows en mode MDI) ou de l'\xe9cran principal (macOS et Windows en mode SDI). Ils tiennent compte de la pr\xe9sence de la barre d\u2019outils et de la barre de menus."}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", la position et la taille courantes de la fen\xeatre sont m\xe9moris\xe9es au moment o\xf9 elle est referm\xe9e. Lorsque la fen\xeatre est r\xe9ouverte par la suite, elle conserve sa position et sa taille pr\xe9c\xe9dentes. Dans ce cas, les param\xe8tres ",(0,t.jsx)(n.em,{children:"posV"})," et ",(0,t.jsx)(n.em,{children:"posH"})," ne sont utilis\xe9s que pour la premi\xe8re ouverture de la fen\xeatre."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L\u2019instruction suivante ouvre une fen\xeatre standard avec case de fermeture automatiquement ajust\xe9e \xe0 la taille du formulaire \u201CEntr\xe9e\u201D. La taille de fen\xeatre du formulaire n'est pas fixe, la fen\xeatre comporte donc \xe9galement une case de contr\xf4le de taille et une case de zoom :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$refFen:=Open form window([Table1];"Entr\xe9e")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:'L\u2019instruction suivante ouvre, en haut et \xe0 gauche de l\u2019\xe9cran, une palette flottante bas\xe9e sur un formulaire projet nomm\xe9 "Outils". Cette palette conservera sa pr\xe9c\xe9dente position \xe0 chaque nouvelle ouverture :'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$refFen:=Open form window("Outils";Palette form window;On the left;At the top;*)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsx)(n.p,{children:"Ce code doit \xeatre appel\xe9 alors qu'une fen\xeatre document est affich\xe9e, par exemple depuis un bouton de formulaire sous macOS :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$maFen\xeatre:=Open form window("sheet form";Form fen\xeatre feuille)\n\xa0\xa0// A cet instant la fen\xeatre est cr\xe9\xe9e mais reste invisible\n\xa0DIALOG([Table];"formDial")\n\xa0\xa0//l\'\xe9v\xe9nement Sur chargement est g\xe9n\xe9r\xe9 puis la fen\xeatre feuille est affich\xe9e, elle "descend"\n\xa0\xa0//du dessous de la barre de titre\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant utilise le chemin d'un fichier .json d\xe9crivant un formulaire permettant d'afficher les enregistrements d'une liste d'employ\xe9s :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)\n\xa0ALL RECORDS([Personnel])\n\xa0Open form window("/RESOURCES/OutputPersonnel.json";*)\n'})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(222528).Z+"",width:"301",height:"363"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/open-window",children:"Open window"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Types de fen\xeatres"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Types de fen\xeatres (compatibilit\xe9)"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"675"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},222528:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3687439.en-25c836074f1a1e9fbeb7da790404af71.png"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);