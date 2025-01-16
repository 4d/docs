"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27524"],{857222:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands/form-event-code","title":"Form event code","description":"Form event code  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/form-event-code.md","sourceDirName":"commands","slug":"/commands/form-event-code","permalink":"/docs/fr/commands/form-event-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-event-code.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-event-code","title":"Form event code","slug":"/commands/form-event-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Event","permalink":"/docs/fr/commands/form-event"},"next":{"title":"In break","permalink":"/docs/fr/commands/in-break"}}'),s=r("785893"),l=r("250065");let i={id:"form-event-code",title:"Form event code",slug:"/commands/form-event-code",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Exemple 7",id:"exemple-7",level:4},{value:"Exemple 8",id:"exemple-8",level:4},{value:"Exemple 9",id:"exemple-9",level:4},{value:"Exemple 10",id:"exemple-10",level:4},{value:"Exemple 11",id:"exemple-11",level:4},{value:"Exemple 12",id:"exemple-12",level:4},{value:"Exemple 13",id:"exemple-13",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Form event code"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'\xe9v\xe9nement formulaire"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Form event code"})," retourne une valeur num\xe9rique qui identifie le type d'\xe9v\xe9nement formulaire qui vient de se produire. Habituellement, vous utiliserez ",(0,s.jsx)(n.strong,{children:"Form event code"})," dans une m\xe9thode formulaire ou une m\xe9thode objet."]}),"\n",(0,s.jsxs)(n.p,{children:["4D fournit des constantes pr\xe9d\xe9finies (plac\xe9es dans le th\xe8me ",(0,s.jsx)(n.em,{children:"Ev\xe9nements formulaire"}),") permettant de comparer les valeurs retourn\xe9es par la commande ",(0,s.jsx)(n.strong,{children:"Form event code"}),". Certains \xe9v\xe9nements sont g\xe9n\xe9riques (g\xe9n\xe9r\xe9s pour tout type d'objet), d'autres sont sp\xe9cifiques \xe0 un type d'objet particulier."]}),"\n",(0,s.jsxs)(n.p,{children:["Pour une description des \xe9v\xe9nements, veuillez vous r\xe9f\xe9rer \xe0 la section ",(0,s.jsx)(n.a,{href:"/docs/fr/Events/overview",children:(0,s.jsx)(n.strong,{children:"Ev\xe9nements formulaire"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Cet exemple montre l'utilisation de l'\xe9v\xe9nement On Validate pour assigner automatiquement (\xe0 un champ) la date de modification de l'enregistrement :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode formulaire\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Validate)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[aTable]Last Modified On:=Current date\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Dans l'exemple suivant, la gestion compl\xe8te d'un menu d\xe9roulant (initialisation, clics et rel\xe2chement de l'objet) est plac\xe9e dans la m\xe9thode de l'objet :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode objet du menu d\xe9roulant taTaille\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asBurgerSize;3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asBurgerSize{1}:="Small"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asBurgerSize{1}:="Medium"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asBurgerSize{1}:="Large"\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asBurgerSize#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Vous avez choisi la taille "+asBurgerSize{asBurgerSize}+".")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asBurgerSize)\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant est une m\xe9thode formulaire g\xe9n\xe9rique. Elle fait appara\xeetre chacun des \xe9v\xe9nements qui peuvent survenir lorsqu'un formulaire est utilis\xe9 comme formulaire sortie :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode d'un formulaire sortie\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0//La zone en-t\xeate va \xeatre imprim\xe9e ou affich\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0//Le code pour la premi\xe8re rupture d'en-t\xeate doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0//Le code pour la rupture d'en-t\xeate niveau 1 doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0//Le code pour la rupture d'en-t\xeate niveau 2 doit \xeatre plac\xe9 ici\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Detail)\n\xa0\xa0//Un enregistrement va \xeatre imprim\xe9\n\xa0\xa0//Le code pour chaque enregistrement doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Break)\n\xa0\xa0//Une rupture va \xeatre imprim\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0//Le code pour la rupture 0 doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0//Le code pour la rupture 1 doit \xeatre plac\xe9 ici\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0//Le code pour le dernier pied de page doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//Le code pour un pied de page doit \xeatre plac\xe9 ici\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,s.jsxs)(n.p,{children:["L'exemple suivant montre une m\xe9thode formulaire g\xe9n\xe9rique qui g\xe8re les \xe9v\xe9nements pouvant survenir dans un formulaire sortie quand il s'affiche \xe0 l'aide de la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/display-selection",children:"DISPLAY SELECTION"})," ou ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/modify-selection",children:"MODIFY SELECTION"}),". Dans un but informatif, elle affiche l'\xe9v\xe9nement dans la barre de titre de la fen\xeatre."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// Une m\xe9thode formulaire exemple\n Case of\n :(Form event code=On Load)\n $vaEv\xe9nement:="Le formulaire va \xeatre affich\xe9"\n :(Form event code=On Unload)\n $vaEv\xe9nement:="Le formulaire sortie vient de se fermer et va dispara\xeetre de l\'\xe9cran"\n :(Form event code=On Display Detail)\n $vaEv\xe9nement:="Affichage de l\'enregistrement n\xb0"+String(Numero dans selection([LaTable]))\n :(Form event code=On Menu Selected)\n $vaEv\xe9nement:="Une commande de menu a \xe9t\xe9 s\xe9lectionn\xe9e"\n :(Form event code=Sur ent\xeate)\n $vaEv\xe9nement:="L\'en-t\xeate va \xeatre imprim\xe9 ou affich\xe9"\n :(Form event code=On Clicked)\n $vaEv\xe9nement:="On a cliqu\xe9 sur un enregistrement"\n :(Form event code=On Double Clicked)\n $vaEv\xe9nement:="On a double-cliqu\xe9 sur un enregistrement"\n :(Form event code=On Open Detail)\n $vaEv\xe9nement:="On a double-cliqu\xe9 sur l\'enregistrement n\xb0"+String(Numero dans selection([LaTable]))\n :(Form event code=On Close Detail)\n $vaEv\xe9nement:="Retour au formulaire sortie"\n :(Form event code=On Activate)\n $vaEv\xe9nement:="La fen\xeatre du formulaire passe au premier plan"\n :(Form event code=On Deactivate)\n $vaEv\xe9nement:="La fen\xeatre du formulaire n\'est plus au premier plan"\n :(Form event code=On Menu Selected)\n $vaEv\xe9nement:="Une ligne de menu a \xe9t\xe9 s\xe9lectionn\xe9e"\n :(Form event code=On Outside Call)\n $vaEv\xe9nement:="Un appel ext\xe9rieur a \xe9t\xe9 re\xe7u"\n Else\n $vaEv\xe9nement:="Que se passe-t-il ? L\'\xe9v\xe9nement n\xb0"+String(Evenement formulaire)\n End case\n SET WINDOW TITLE($vaEv\xe9nement)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,s.jsxs)(n.p,{children:["Pour des exemples de gestion des \xe9v\xe9nements ",(0,s.jsx)(n.a,{href:"/docs/fr/Events/onBeforeKeystroke",children:(0,s.jsx)(n.code,{children:"On Before Keystroke"})})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/Events/onAfterKeystroke",children:(0,s.jsx)(n.code,{children:"On After Keystroke"})}),", voir les exemples des commandes ",(0,s.jsx)(n.a,{href:"../commandes-legacy/get-edited-text.md",children:"Get edited text"}),", ",(0,s.jsx)(n.a,{href:"../commandes-legacy/keystroke.md",children:"Keystroke"})," et ",(0,s.jsx)(n.a,{href:"../commandes-legacy/filter-keystroke.md",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,s.jsx)(n.p,{children:"Cet exemple montre comment traiter les clics et les doubles clics de la m\xeame mani\xe8re dans une zone de d\xe9filement :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode objet pour la zone de d\xe9filement asChoices\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asChoices;...)\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices:=0\n\xa0\xa0\xa0\xa0:((Form event code=On Clicked)|(Form event code=On Double Clicked))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#0)\n\xa0\xa0//On a cliqu\xe9 sur un \xe9l\xe9ment, faire quelque chose\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-7",children:"Exemple 7"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant montre comment traiter les clics et double-clics de mani\xe8re diff\xe9rente. Notez l'utilisation de l'\xe9l\xe9ment z\xe9ro pour conserver la valeur de l'\xe9l\xe9ment s\xe9lectionn\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode objet pour la zone de d\xe9filement asChoices\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asChoices;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices{0}:="0"\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#Num(asChoices))\n\xa0\xa0//On a cliqu\xe9 sur un \xe9l\xe9ment, faire quelque chose\n\xa0\xa0//...\n\xa0\xa0//Sauvegarder l\'\xe9l\xe9ment nouvellement s\xe9lectionn\xe9 pour la prochaine fois\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices{0}:=String(asChoices)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0asChoices:=Num(asChoices{0})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Double Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(asChoices#0)\n\xa0\xa0//On a double-cliqu\xe9 sur un \xe9l\xe9ment, faire autre chose\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-8",children:"Exemple 8"}),"\n",(0,s.jsxs)(n.p,{children:["L'exemple suivant montre comment maintenir une zone contenant du texte \xe0 partir d'une m\xe9thode formulaire \xe0 l'aide des \xe9v\xe9nements ",(0,s.jsx)(n.a,{href:"/docs/fr/Events/onGettingFocus",children:(0,s.jsx)(n.code,{children:"On Getting Focus"})})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/Events/onLosingFocus",children:(0,s.jsx)(n.code,{children:"On Losing Focus"})})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode formulaire [Contacts];"Data Entry"\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var vtStatusArea : Text\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:=""\n\xa0\xa0\xa0\xa0:(Form event code=On Getting Focus)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($vlTableNum#0)&($vlFieldNum#0))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldNum=1)\xa0//Last name field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:="Saisissez le nom du contact, il sera automatiquement mis en majuscules"\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlFieldNum=10)\xa0//Zip Code field\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:="Saisissez un code postal, il sera automatiquement v\xe9rifi\xe9 et valid\xe9"\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Losing Focus)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vtStatusArea:=""\n\xa0\xa0//...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-9",children:"Exemple 9"}),"\n",(0,s.jsx)(n.p,{children:"Cet exemple illustre comment vous pouvez r\xe9pondre \xe0 un \xe9v\xe9nement de fermeture de fen\xeatre \xe0 l'aide d'un formulaire utilis\xe9 pour la saisie de donn\xe9es d'enregistrement :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//M\xe9thode pour un formulaire entr\xe9e\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0:(Form event code=On Close Box)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Modified record($vpFormTable->))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Cet enregistrement a \xe9t\xe9 modifi\xe9. Voulez-vous sauvegarder les modifications ?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ACCEPT\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CANCEL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CANCEL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0//...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-10",children:"Exemple 10"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant montre comment mettre en majuscules un champ Texte ou Alphanum\xe9rique chaque fois que la valeur est modifi\xe9e :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode objet de [Contacts]First Name\n\xa0Case of\n\xa0\xa0//...\n\xa0\xa0\xa0\xa0:(Form event code=On Data Change)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))\n\xa0\xa0//...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-11",children:"Exemple 11"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant propose une mani\xe8re de g\xe9rer une action de suppression dans une liste hi\xe9rarchique :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0...\xa0//m\xe9thode objet de la liste hi\xe9rarchique\n:(Form event code=On Delete Action)\n\xa0ARRAY LONGINT($itemsArray;0)\n\xa0$Ref:=Selected list items(<>HL;$itemsArray;*)\n\xa0$n:=Size of array($itemsArray)\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($n=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Pas d\u2019\xe9l\xe9ment s\xe9lectionn\xe9")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OK:=0\n\xa0\xa0\xa0\xa0:($n=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Voulez-vous supprimer cet \xe9l\xe9ment ?")\n\xa0\xa0\xa0\xa0:($n>1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Voulez-vous supprimer ces \xe9l\xe9ments ?")\n\xa0End case\n\xa0\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM LIST(<>HL;$itemsArray{$i};*)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-12",children:"Exemple 12"}),"\n",(0,s.jsxs)(n.p,{children:["Dans cet exemple, l'\xe9v\xe9nement formulaire ",(0,s.jsx)(n.a,{href:"/docs/fr/Events/onScroll",children:(0,s.jsx)(n.code,{children:"On Scroll"})})," permet de synchroniser l'affichage de deux images dans un formulaire. Le code suivant est ajout\xe9 dans la m\xe9thode de l'objet \"satellite\" (champ ou variable image) :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Scroll)\n\xa0\xa0// on rel\xe8ve la position de l\'image de gauche\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)\n\xa0\xa0// on l\'applique \xe0 l\'image de droite\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)\n\xa0End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["R\xe9sultat : ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=YIRfsW1BmHE",children:"https://www.youtube.com/watch?v=YIRfsW1BmHE"})]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-13",children:"Exemple 13"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez dessiner un rectangle rouge autour de la cellule s\xe9lectionn\xe9e d'une list box, et vous voulez que le rectangle se d\xe9place si l'utilisateur fait d\xe9filer verticalement la list box. Dans la m\xe9thode objet de la list box, vous pouvez \xe9crire :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"RedRect";True)\xa0//initialiser rectangle rouge\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Scroll)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT GET COORDINATES(*;"LB1";$xlb1;$ylb1;$xlb2;$ylb2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$toAdd:=LISTBOX Get headers height(*;"LB1")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0//tenir compte de la hauteur de l\'ent\xeate pour ne pas que le rectangle empi\xe8te dessus\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($ylb1+$toAdd<$y1)&($ylb2>$y2)\xa0//si nous sommes dans la list box\n\xa0\xa0//pour simplifier, on ne tient compte que des en-t\xeates\n\xa0\xa0//mais il faudrait \xe9galement g\xe9rer le clipping horizontal\n\xa0\xa0//ainsi que les barres de d\xe9filement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"RedRect";True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"RedRect";False)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.p,{children:"En r\xe9sultat, le rectangle rouge suit bien le d\xe9filement de la list box :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(650992).Z+"",width:"1053",height:"253"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/Events/overview",children:"Form Events"}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/current-form-table",children:"Current form table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-event",children:"FORM Event"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/get-edited-text",children:"Get edited text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/keystroke",children:"Keystroke"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-timer",children:"SET TIMER"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"388"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"&cross;"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},650992:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict1900395.en-569763c683cf0898d7abbac68fb6d734.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);