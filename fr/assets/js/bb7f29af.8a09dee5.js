"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46644"],{184462:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/on-event-call","title":"ON EVENT CALL","description":"ON EVENT CALL ( m\xe9thodeEv\xe9n {; nomProcess} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-event-call.md","sourceDirName":"commands-legacy","slug":"/commands/on-event-call","permalink":"/docs/fr/20-R7/commands/on-event-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-event-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-event-call","title":"ON EVENT CALL","slug":"/commands/on-event-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ON ERR CALL","permalink":"/docs/fr/20-R7/commands/on-err-call"},"next":{"title":"SET ASSERT ENABLED","permalink":"/docs/fr/20-R7/commands/set-assert-enabled"}}'),t=s("785893"),o=s("250065");let i={id:"on-event-call",title:"ON EVENT CALL",slug:"/commands/on-event-call",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ON EVENT CALL"})," ( ",(0,t.jsx)(n.em,{children:"m\xe9thodeEv\xe9n"})," {; ",(0,t.jsx)(n.em,{children:"nomProcess"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"m\xe9thodeEv\xe9n"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"M\xe9thode d'\xe9v\xe9nement \xe0 appeler ou Cha\xeene vide pour arr\xeater l'interception des \xe9v\xe9nements"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomProcess"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de process"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ON EVENT CALL"})," installe la m\xe9thode dont le nom est pass\xe9 dans ",(0,t.jsx)(n.em,{children:"m\xe9thodeEv\xe9n"})," comme m\xe9thode de gestion des \xe9v\xe9nements."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conseil :"})," Cette commande n\xe9cessite un niveau de connaissances avanc\xe9 en programmation. G\xe9n\xe9ralement, vous n'avez pas besoin d'appeler ",(0,t.jsx)(n.strong,{children:"ON EVENT CALL"})," pour traiter les \xe9v\xe9nements. Lorsque vous utilisez des formulaires, 4D g\xe8re pour vous les \xe9v\xe9nements et les retourne aux formulaires et objets appropri\xe9s."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Astuce :"})," Les commandes telles que ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/mouse-position",children:"MOUSE POSITION"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/shift-down",children:"Shift down"}),", etc., permettent de r\xe9cup\xe9rer des informations sur les \xe9v\xe9nements. Ces commandes, dans une certaine mesure, peuvent \xeatre appel\xe9es depuis les m\xe9thodes objet pour traiter les informations dont vous avez besoin. Elles peuvent ainsi vous \xe9pargner l'\xe9criture d'un algorithme bas\xe9 sur une structure du type ",(0,t.jsx)(n.strong,{children:"ON EVENT CALL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La port\xe9e de cette commande est la session de travail. Par d\xe9faut, la m\xe9thode est ex\xe9cut\xe9e dans un process local s\xe9par\xe9. Vous ne pouvez avoir qu'une m\xe9thode de gestion d'\xe9v\xe9nement \xe0 la fois. Pour d\xe9sinstaller une m\xe9thode de gestion d'\xe9v\xe9nement, appelez de nouveau ",(0,t.jsx)(n.strong,{children:"ON EVENT CALL"})," et passez une cha\xeene vide dans ",(0,t.jsx)(n.em,{children:"m\xe9thodeEv\xe9n"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Comme la m\xe9thode de gestion d'\xe9v\xe9nement tourne dans process s\xe9par\xe9, ",(0,t.jsx)(n.em,{children:"m\xe9thodeEv\xe9n"})," est toujours active, m\xeame si aucune m\xe9thode 4D n'est en cours d'ex\xe9cution. Apr\xe8s l'installation, 4D appelle la m\xe9thode ",(0,t.jsx)(n.em,{children:"m\xe9thodeEv\xe9n"})," d\xe8s qu'un \xe9v\xe9nement survient. Un \xe9v\xe9nement peut \xeatre un clic souris ou la frappe d'une touche."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"nomProcess"})," permet de donner un nom au process cr\xe9\xe9 par ",(0,t.jsx)(n.strong,{children:"ON EVENT CALL"}),". Si ",(0,t.jsx)(n.em,{children:"nomProcess"})," commence par le symbole dollar (",(0,t.jsx)(n.em,{children:"$"}),"), ",(0,t.jsx)(n.em,{children:"nomProcess"})," est un process local, ce dont vous aurez g\xe9n\xe9ralement besoin. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomProcess"}),", 4D cr\xe9e par d\xe9faut un process local nomm\xe9 ",(0,t.jsx)(n.em,{children:"$Gestionnaire d'\xe9v\xe9nement"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ATTENTION :"})," Soyez prudent lors de l'\xe9criture d'une m\xe9thode de gestion d'\xe9v\xe9nement. N'appelez pas de commande g\xe9n\xe9rant un \xe9v\xe9nement, sinon vous risquez de ne plus pouvoir sortir de la m\xe9thode. La combinaison de touches ",(0,t.jsx)(n.strong,{children:"Ctrl"}),"+",(0,t.jsx)(n.strong,{children:"Maj"}),"+",(0,t.jsx)(n.strong,{children:"Retour Arri\xe8re"})," (sous Windows) ou ",(0,t.jsx)(n.strong,{children:"Commande"}),"+",(0,t.jsx)(n.strong,{children:"Maj"}),"+",(0,t.jsx)(n.strong,{children:"Control"}),"+",(0,t.jsx)(n.strong,{children:"Retour Arri\xe8re"})," (sous Mac) permet de tuer le process d'\xe9v\xe9nement. Cette combinaison vous permet de sortir d'une m\xe9thode de gestion d'\xe9v\xe9nement devenue incontr\xf4lable."]}),"\n",(0,t.jsx)(n.p,{children:"Dans la m\xe9thode de gestion d'\xe9v\xe9nement, vous pouvez lire les variables syst\xe8me suivantes : MouseDown, KeyCode, Modifiers, MouseX, MouseY et MouseProc. Notez que ces variables sont des variables process. Leur port\xe9e est donc le process de gestion d'\xe9v\xe9nements. Copiez-les dans des variables interprocess si vous souhaitez que leurs valeurs soient disponibles dans un autre process."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La variable syst\xe8me MouseDown contient 1 s'il y a eu un clic souris, 0 sinon."}),"\n",(0,t.jsxs)(n.li,{children:["La variable syst\xe8me KeyCode contient le code du caract\xe8re tap\xe9 au clavier, ou le code d'une touche de fonction. R\xe9f\xe9rez-vous aux sections ",(0,t.jsx)(n.em,{children:"Codes Unicode"})," and ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/export-text",children:"EXPORT TEXT"})," qui listent les codes de caract\xe8res utilis\xe9s par 4D, ainsi qu'\xe0 la section ",(0,t.jsx)(n.em,{children:"Codes des touches de fonction"}),". 4D fournit des constantes pr\xe9d\xe9finies pour les principaux codes ASCII et touches de fonctions. Vous pouvez les visualiser \xe0 l'aide la fen\xeatre de l'Explorateur, dans les th\xe8mes correspondants."]}),"\n",(0,t.jsxs)(n.li,{children:["La variable syst\xe8me Modifiers permet de savoir si une touche de modification (",(0,t.jsx)(n.em,{children:"modifier"}),") \xe9tait enfonc\xe9e au moment o\xf9 l'\xe9v\xe9nement s'est produit. Les touches suivantes peuvent \xeatre d\xe9tect\xe9es :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Plate-forme"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Modifiers"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Windows"}),(0,t.jsx)(n.td,{children:"Maj, Verrouillage des majuscules, Alt, Ctrl"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Macintosh"}),(0,t.jsx)(n.td,{children:"Maj, Verrouillage des majuscules, Alt (ou Option), Ctrl, Commande"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Isol\xe9ment, les touches ",(0,t.jsx)(n.em,{children:"modifiers"})," ne g\xe9n\xe8rent pas d'\xe9v\xe9nement. Pour cela, une autre touche ou le bouton de la souris doit \xe9galement \xeatre enfonc\xe9(e). La variable Modifiers, de type Entier long, contient un champ de bits. 4D fournit des constantes d\xe9signant la position ou le masque des bits pour chaque touche de modification. Lorsque, par exemple, vous voulez d\xe9tecter si la touche Majuscule \xe9tait enfonc\xe9e pour l'\xe9v\xe9nement, vous pouvez \xe9crire indiff\xe9remment :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(Modifiers?? Bit touche majuscule)\xa0//Si la touche Majuscule \xe9tait enfonc\xe9e  \n"})}),"\n",(0,t.jsx)(n.p,{children:"ou :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If((Modifiers&Shift key mask)#0)\xa0//Si la touche Majuscule \xe9tait enfonc\xe9e  \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Les constantes \xe0 utiliser en fonction du ",(0,t.jsx)(n.em,{children:"modifier"})," \xe0 tester et de la plate-forme sont les suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Ev\xe9nements (Modifiers)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Modifier"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Constante"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Majuscule"}),(0,t.jsx)(n.td,{children:"Bit touche majuscule / Masque touche majuscule"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Verr. majuscule"}),(0,t.jsx)(n.td,{children:"Bit touche verrouillage maj / Masque touche verrouillage maj"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Alt (aussi appel\xe9e Option sous macOS)"}),(0,t.jsx)(n.td,{children:"Bit touche option / Masque touche option"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ctrl sous Windows"}),(0,t.jsx)(n.td,{children:"Bit touche commande / Masque touche commande"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Ctrl sous macOS"}),(0,t.jsx)(n.td,{children:"Bit touche contr\xf4le / Masque touche contr\xf4le"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Commande sous macOS"}),(0,t.jsx)(n.td,{children:"Bit touche commande / Masque touche commande"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Clic droit"}),(0,t.jsx)(n.td,{children:"Bit touche contr\xf4le / Masque touche contr\xf4le"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les variables syst\xe8mes MouseX et MouseY contiennent les coordonn\xe9es horizontale et verticale du clic souris, exprim\xe9es dans le syst\xe8me de coordonn\xe9es locales de la fen\xeatre dans laquelle le clic s'est produit. L'angle sup\xe9rieur gauche de la fen\xeatre a les coordonn\xe9es 0,0. Ces variables n'ont de signification que lorsqu'un clic souris a eu lieu."}),"\n",(0,t.jsx)(n.li,{children:"La variable syst\xe8me MouseProc contient le num\xe9ro de r\xe9f\xe9rence du process dans lequel le clic souris s'est produit."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Les variables syst\xe8me MouseDown, KeyCode, Modifiers, MouseX, MouseY et MouseProc ne contiennent des valeurs significatives que dans une m\xe9thode de gestion d'\xe9v\xe9nement install\xe9e par ",(0,t.jsx)(n.strong,{children:"ON EVENT CALL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant annule l'impression si l'utilisateur appuie sur les touches ",(0,t.jsx)(n.strong,{children:"Ctrl"}),"+",(0,t.jsx)(n.strong,{children:"."})," (",(0,t.jsx)(n.strong,{children:"Commande+."})," sous Mac OS). En premier lieu, la m\xe9thode de gestion des \xe9v\xe9nements est install\xe9e. Ensuite, un message s'affiche, indiquant que l'impression a \xe9t\xe9 annul\xe9e. Si la variable interprocess ",(0,t.jsx)(n.em,{children:"\u25CAvbOnStoppe"})," est \xe9gale \xe0 Vrai dans la m\xe9thode de gestion d'\xe9v\xe9nement, une bo\xeete de dialogue d'alerte s'affiche pour indiquer \xe0 l'utilisateur le nombre d'enregistrements qui viennent de s'imprimer. Enfin, la m\xe9thode de gestion d'\xe9v\xe9nement est d\xe9sinstall\xe9e :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0PAGE SETUP\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\u25CAvbOnStoppe:=False\n\xa0\xa0\xa0\xa0ON EVENT CALL("GESTION EVENEMENTS")\n\xa0\xa0\xa0\xa0ALL RECORDS([Personnes])\n\xa0\xa0\xa0\xa0MESSAGE("Pour interrompre l\'impression, appuyez sur Ctrl+point.")\n\xa0\xa0\xa0\xa0$NbEnregistrements:=Records in selection([Personnes])\n\xa0\xa0\xa0\xa0For($Enrg;1;$NbEnregistrements)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(\u25CAvbOnStoppe)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("L\'impression a \xe9t\xe9 annul\xe9e \xe0 l\'enregistrement "+String($Enrg)+" sur "+Chaine($NbEnregistrements))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Enrg:=$NbEnregistrements+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([Personnes];"Etat")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0ON EVENT CALL("")\xa0// D\xe9sinstallation de la m\xe9thode d\'appel sur \xe9v\xe9nement\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode de gestion d'\xe9v\xe9nement teste si la combinaison de touches ",(0,t.jsx)(n.strong,{children:"Ctrl"}),"+",(0,t.jsx)(n.strong,{children:"."})," (",(0,t.jsx)(n.strong,{children:"Commande"}),"+",(0,t.jsx)(n.strong,{children:"."}),") a \xe9t\xe9 employ\xe9e et met la variable interprocess ",(0,t.jsx)(n.em,{children:"\u25CAvbOnStoppe"})," \xe0 Vrai :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet GESTION EVENEMENTS\n\xa0If((Modifiers?? Bit touche commande)\xa0&\xa0(KeyCode=Period))\n\xa0\xa0\xa0\xa0CONFIRM(\"Voulez-vous vraiment annuler l'impression ?\")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u25CAvbOnStoppe:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER EVENT\xa0// N'oubliez pas cet appel sinon 4D traitera aussi cet \xe9v\xe9nement\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notez que ",(0,t.jsx)(n.strong,{children:"ON EVENT CALL"})," est utilis\xe9 dans cet exemple car un \xe9tat sp\xe9cial est imprim\xe9 \xe0 l'aide des commandes ",(0,t.jsx)(n.em,{children:"_o_PAGE SETUP"}),", ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-form",children:"Print form"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/page-break",children:"PAGE BREAK"})," dans une structure de type ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/array-to-list",children:"ARRAY TO LIST"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous imprimez un \xe9tat \xe0 l'aide la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"}),", vous n'avez pas besoin de g\xe9rer les \xe9v\xe9nements permettant \xe0 l'utilisateur d'interrompre l'impression, ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-selection",children:"PRINT SELECTION"})," le fait pour vous."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/filter-event",children:"FILTER EVENT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/mouse-position",children:"MOUSE POSITION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/method-called-on-event",children:"Method called on event"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/shift-down",children:"Shift down"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"190"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Interdite sur le serveur"}),(0,t.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},o=r.createContext(t);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);