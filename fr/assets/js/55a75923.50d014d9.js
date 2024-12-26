"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79309"],{155597:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-set-help-tip","title":"OBJECT SET HELP TIP","description":"OBJECT SET HELP TIP ( { ;} objet ; messageAide* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-help-tip.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-help-tip","permalink":"/docs/fr/commands/object-set-help-tip","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-help-tip.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-help-tip","title":"OBJECT SET HELP TIP","slug":"/commands/object-set-help-tip","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FORMAT","permalink":"/docs/fr/commands/object-set-format"},"next":{"title":"OBJECT SET HORIZONTAL ALIGNMENT","permalink":"/docs/fr/commands/object-set-horizontal-alignment"}}'),i=n("785893"),r=n("250065");let d={id:"object-set-help-tip",title:"OBJECT SET HELP TIP",slug:"/commands/object-set-help-tip",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"OBJECT SET HELP TIP"})," ( {* ;} ",(0,i.jsx)(s.em,{children:"objet"})," ; ",(0,i.jsx)(s.em,{children:"messageAide"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"*"}),(0,i.jsx)(s.td,{children:"Op\xe9rateur"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsxs)(s.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(s.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"objet"}),(0,i.jsx)(s.td,{children:"any"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsxs)(s.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(s.br,{}),"Variable (si * est omis)"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"messageAide"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Contenu du message d\u2019aide"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"OBJECT SET HELP TIP"})," permet de d\xe9finir ou de modifier dynamiquement le message d\u2019aide associ\xe9 \xe0 l\u2019objet ou aux objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,i.jsx)(s.em,{children:"objet"})," et ",(0,i.jsx)(s.em,{children:"*"})," pour le process courant."]}),"\n",(0,i.jsxs)(s.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(s.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(s.em,{children:"objet"})," est un nom d\u2019objet de formulaire (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(s.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,i.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"messageAide"}),' une cha\xeene de caract\xe8res contenant le message \xe0 afficher. Si vous passez une cha\xeene vide "", l\'infobulle est supprim\xe9e.']}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque le formulaire est ex\xe9cut\xe9, les messages d'aide apparaissent sous forme d'infobulle \xe0 chaque fois que le curseur de la souris survole le champ ou l'objet. Le d\xe9lai d'affichage et la dur\xe9e maximum d'affichage des messages d'aide peuvent \xeatre contr\xf4l\xe9s en utilisant les s\xe9lecteurs Tips delay et Tips duration de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Note : Vous pouvez utiliser cette commande avec une list box afin d'associer des infobulles aux lignes et cellules de la list box. Par exemple, un objet list box peut comporter une infobulle diff\xe9rente par ligne. Ce cas n\xe9cessite de d\xe9terminer au pr\xe9alable la position du curseur \xe0 l'aide de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/listbox-get-cell-position",children:"LISTBOX GET CELL POSITION"}),". Ce principe est pr\xe9sent\xe9 dans un exemple ci-dessous."]}),"\n",(0,i.jsxs)(s.p,{children:["Lorsqu'un message d'aide est d\xe9j\xe0 affich\xe9, l'utilisation de la commande ",(0,i.jsx)(s.strong,{children:"OBJECT SET HELP TIP"})," le ferme, ouvre un nouveau message d'aide \xe0 l'endroit o\xf9 se trouve la souris et red\xe9marre le compteur Tips duration, permettant une gestion dynamique des messages d'aide."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Les messages d'aide peuvent \xe9galement \xeatre d\xe9finis via l'\xe9diteur de formulaires (voir ",(0,i.jsx)(s.em,{children:"Contr\xf4les et aides \xe0 la saisie"}),") et l'\xe9diteur de structure (voir ",(0,i.jsx)(s.em,{children:"Propri\xe9t\xe9s des champs"}),") en mode D\xe9veloppement."]}),"\n",(0,i.jsxs)(s.li,{children:["Les messages d'aide peuvent \xeatre globalement d\xe9sactiv\xe9s pour l'application en utilisant le s\xe9lecteur Tips enabled de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(s.p,{children:"Dans ce formulaire, un message d'aide est affich\xe9 et change dynamiquement lorsque la souris survole des zones diff\xe9rentes du bouton-image :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(299007).Z+"",width:"244",height:"186"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode objet du bouton-image nomm\xe9 "myFlag"\n\xa0\n\xa0var $x;$y;oldX;oldY : Real\n\xa0var $left;$right;$top;$bottom : Real\n\xa0var $b : Integer\n\xa0var $tip : Text\n\xa0var oldTip : Text\n\xa0var $doRefresh : Boolean\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldTip:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Message aide activation;1)\xa0//Pour \xeatre s\xfbr que les messages d\'aide sont activ\xe9s\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Message aide d\xe9lai;0)\xa0// Le message est affich\xe9 d\xe8s que la souris s\'arr\xeate\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Message aide dur\xe9e;60*10)\xa0// Affichage de 10 secondes\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Move)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOUSE POSITION($x;$y;$b)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"myFlag";$left;$top;$right;$bottom)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$x:=$x-$left\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$y:=$y-$top\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\xa0//chaque zone du drapeau fait 76 pixels\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($x<76)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$tip:="Couleur verte"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($x<152)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$tip:="Couleur blanche"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0sinon\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$tip:="Couleur rouge"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$doRefresh:=($tip#oldtip)\xa0//Vrai si le message d\'aide est diff\xe9rent\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not($doRefresh))\xa0//contenus identiques\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$doRefresh:=((Abs($x-oldX)>30)|(Abs($y-oldY)>30))\xa0//Vrai si le curseur a boug\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($doRefresh)\xa0//Affiche un autre message\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET HELP TIP(*;"myFlag";$tip)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldX:=$x\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldY:=$y\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0oldTip:=$tip\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,i.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(s.p,{children:'Vous avez d\xe9fini une list box "liste de commandes" et vous souhaitez proposer des infobulles affichant la description de chaque \xe9l\xe9ment de la liste. La description se trouve dans la table [Documentation].'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0var $mouseX;$mouseY;$mouseZ : Real\n\xa0var $col;$row : Integer\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Enter)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips delay;1)\xa0// l'infobulle doit s'afficher rapidement\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Move)\n\xa0\xa0//#1 : trouver quelle ligne est survol\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOUSE POSITION($mouseX;$mouseY;$mouseZ)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;\"Commands List\";$mouseX;$mouseY;$col;$row)\n\xa0\n\xa0\xa0//#2 : d\xe9finir l'infobulle \xe0 afficher\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($row#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Documentation];$row)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET HELP TIP(*;\"Commands List\";[Documentation]Description)\xa0// la description compl\xe8te sera utilis\xe9e comme message d'aide lorsque (si) la souris est immobile\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Mouse Leave)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DATABASE PARAMETER(Tips delay;3)\xa0//Retour d\xe9lai normal\n\xa0\n\xa0End case\n"})}),"\n",(0,i.jsx)(s.p,{children:"R\xe9sultat :"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(504233).Z+"",width:"798",height:"301"})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/object-get-help-tip",children:"OBJECT Get help tip"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,i.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"1181"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},299007:function(e,s,n){n.d(s,{Z:function(){return t}});let t="data:image/png;base64,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"},504233:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/pict3529022.en-d220f22ac9cb14ab7204172fa22b252b.png"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return d}});var t=n(667294);let i={},r=t.createContext(i);function d(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);