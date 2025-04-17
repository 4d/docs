"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96733"],{943122:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"commands/dialog","title":"DIALOG","description":"DIALOG ( {aTable ;} form {; formData}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/dialog.md","sourceDirName":"commands","slug":"/commands/dialog","permalink":"/docs/fr/20-R8/commands/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fdialog.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dialog","title":"DIALOG","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CANCEL","permalink":"/docs/fr/20-R8/commands/cancel"},"next":{"title":"Modified","permalink":"/docs/fr/20-R8/commands/modified"}}'),i=r("785893"),a=r("250065");let t={id:"dialog",title:"DIALOG",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Exemple 4",id:"exemple-4",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DIALOG"})," ( {",(0,i.jsx)(n.em,{children:"aTable"})," ;} ",(0,i.jsx)(n.em,{children:"form"})," {; ",(0,i.jsx)(n.em,{children:"formData"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table \xe0 laquelle appartient le formulaire; Si omis : Table par d\xe9faut ou utilisation d'un formulaire projet"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"form"}),(0,i.jsx)(n.td,{children:"Text, Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom du formulaire table ou projet \xe0 afficher, ou Chemin POSIX (cha\xeene) d'un fichier .json d\xe9crivant le formulaire, ou Objet d\xe9crivant le formulaire"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"formData"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Donn\xe9es \xe0 associer au formulaire"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Utiliser le m\xeame process"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"DIALOG"})," command presents the ",(0,i.jsx)(n.em,{children:"form"})," to the user, along with ",(0,i.jsx)(n.em,{children:"formData"})," parameter(s) (optional)."]}),"\n",(0,i.jsxs)(n.p,{children:["Cette commande permet de concevoir des interfaces utilisateur personnalis\xe9es et sophistiqu\xe9es, bas\xe9es sur des formulaires. Vous pouvez l'utiliser pour afficher des informations provenant de la base ou d'autres sources, ou proposer des fonctions de saisie des donn\xe9es. Contrairement \xe0 ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/add-record",children:"ADD RECORD"})," ou ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/modify-record",children:"MODIFY RECORD"}),", ",(0,i.jsx)(n.strong,{children:"DIALOG"})," vous donne un contr\xf4le total sur le formulaire, son contenu et les boutons de navigation et de validation."]}),"\n",(0,i.jsxs)(n.p,{children:["Cette commande est g\xe9n\xe9ralement appel\xe9e avec la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-form-window",children:"Open form window"})," pour afficher des formulaires complexes, comme le montre l'exemple suivant :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(615054).Z+"",width:"976",height:"679"})}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"DIALOG"})," peut \xe9galement \xeatre utilis\xe9e \xe0 la place de ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/alert",children:"ALERT"}),", ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/confirm",children:"CONFIRM"})," ou ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/request",children:"Request"})," lorsque les informations \xe0 afficher ou \xe0 recueillir sont plus complexes que celles que peuvent g\xe9rer ces trois commandes."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"form"}),", vous pouvez passer soit :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"le nom du formulaire (formulaire projet ou formulaire table) \xe0 utiliser."}),"\n",(0,i.jsx)(n.li,{children:"le chemin (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire \xe0 utiliser,"}),"\n",(0,i.jsx)(n.li,{children:"un objet contenant la description du formulaire \xe0 utiliser."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Optionnellement, vous pouvez passer un ou plusieurs param\xe8tre(s) au ",(0,i.jsx)(n.em,{children:"form"})," \xe0 l'aide d'un objet \"form data\" (donn\xe9es du formulaire). Toutes les propri\xe9t\xe9s de l'objet de donn\xe9es du formulaire seront alors disponibles dans le contexte du formulaire par le biais de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form",children:"Form"}),'. Par exemple, si vous utilisez un objet de donn\xe9es de formulaire contenant {"version" ; "12"}, vous pourrez obtenir ou d\xe9finir la valeur de la propri\xe9t\xe9 "version" dans le formulaire en appelant :']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' $v:=Form.version //"12"\n Form.version:=13\n'})}),"\n",(0,i.jsx)(n.p,{children:'Pour remplir l\'objet "form data", vous avez deux possibilit\xe9s :'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["utiliser le param\xe8tre ",(0,i.jsx)(n.em,{children:"formData"}),". L'utilisation d'une variable locale pour ",(0,i.jsx)(n.em,{children:"formData"})," vous permet de passer en toute s\xe9curit\xe9 des param\xe8tres \xe0 vos formulaires, quel que soit le contexte d'appel. En particulier, si le m\xeame formulaire est appel\xe9 \xe0 diff\xe9rents endroits dans le m\xeame process, vous pourrez toujours acc\xe9der \xe0 ses valeurs sp\xe9cifiques en appelant simplement ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form",children:"Form"}),".myProperty. De plus, les objets \xe9tant transmis par r\xe9f\xe9rence, si l'utilisateur modifie la valeur d'une propri\xe9t\xe9 dans le formulaire, celle-ci sera automatiquement sauvegard\xe9e dans l'objet lui-m\xeame."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/FormEditor/propertiesForm#form-class",children:"associer une classe utilisateur au formulaire"}),", auquel cas 4D instanciera automatiquement un objet de cette classe lorsque le formulaire sera charg\xe9. Les propri\xe9t\xe9s et les fonctions de l'objet seront automatiquement disponibles via l'objet renvoy\xe9 par ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form",children:"Form"}),". Vous pouvez \xe9crire par exemple ",(0,i.jsx)(n.code,{children:"Form.myFunction()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"formData"})," est prioritaire sur une classe de formulaire (l'objet classe n'est pas instanci\xe9 si un param\xe8tre ",(0,i.jsx)(n.em,{children:"formData"})," est pass\xe9)."]}),"\n",(0,i.jsxs)(n.li,{children:["Si vous ne passez pas le param\xe8tre ",(0,i.jsx)(n.em,{children:"formData"})," (ou si vous passez un objet non d\xe9fini) et qu'aucune classe d'utilisateur n'est associ\xe9e au formulaire, ",(0,i.jsx)(n.strong,{children:"DIALOG"})," cr\xe9e un nouvel objet vide li\xe9 au ",(0,i.jsx)(n.em,{children:"form"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["Le dialogue est referm\xe9 par l'utilisateur soit par une action \"accepter\" (d\xe9clench\xe9e par l'action standard ak accept, la touche Entr\xe9e, ou la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/accept",children:"ACCEPT"}),'), soit par une action "annuler" (d\xe9clench\xe9e par l\'action standard ak cancel, la touche Escape, ou la commande ',(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/cancel",children:"CANCEL"}),"). Une action d'acceptation mettra la variable syst\xe8me OK \xe0 1, tandis qu'une action d'annulation mettra OK \xe0 0."]}),"\n",(0,i.jsxs)(n.p,{children:["A noter que la validation n'\xe9quivaut pas \xe0 la sauvegarde : si le dialogue comprend des champs, vous devez appeler explicitement la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/save-record",children:"SAVE RECORD"})," pour sauvegarder toutes les donn\xe9es qui ont \xe9t\xe9 modifi\xe9es."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"*"}),", le formulaire est charg\xe9 et affich\xe9 dans la derni\xe8re fen\xeatre ouverte du process courant et la commande termine son ex\xe9cution en laissant le formulaire actif \xe0 l'\xe9cran.",(0,i.jsx)(n.br,{}),"\nSi vous passez le param\xe8tre facultatif ",(0,i.jsx)(n.em,{children:"*"}),", le formulaire est charg\xe9 et affich\xe9 dans la derni\xe8re fen\xeatre ouverte du process courant et la commande termine son ex\xe9cution en laissant le formulaire actif \xe0 l'\xe9cran.",(0,i.jsx)(n.br,{}),'\nCe formulaire r\xe9agit alors "normalement" aux actions de l\'utilisateur et est ferm\xe9 par une action standard ou lorsque le code 4D li\xe9 au formulaire (m\xe9thode objet ou m\xe9thode formulaire) appelle la commande ',(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/cancel",children:"CANCEL"})," ou ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/accept",children:"ACCEPT"}),". Si le process courant se termine, les formulaires cr\xe9\xe9s de cette mani\xe8re sont automatiquement ferm\xe9s de la m\xeame mani\xe8re que si une commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/cancel",children:"CANCEL"})," avait \xe9t\xe9 appel\xe9e. Ce mode d'ouverture est particuli\xe8rement utile pour afficher une palette flottante avec un document, sans avoir n\xe9cessairement besoin d'un autre process."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Vous pouvez combiner l'utilisation de la syntaxe ",(0,i.jsx)(n.strong,{children:"DIALOG"}),"(form;*) avec la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/call-form",children:"CALL FORM"})," pour \xe9tablir une communication entre les formulaires."]}),"\n",(0,i.jsxs)(n.li,{children:["Vous devez cr\xe9er une fen\xeatre avant d'appeler l'instruction ",(0,i.jsx)(n.strong,{children:"DIALOG"}),"(form;*). Il n'est pas possible d'utiliser la fen\xeatre de dialogue courante dans le process ni la fen\xeatre cr\xe9\xe9e par d\xe9faut pour chaque process. Sinon, l'erreur -9909 est g\xe9n\xe9r\xe9e."]}),"\n",(0,i.jsxs)(n.li,{children:["Lorsque le param\xe8tre ",(0,i.jsx)(n.em,{children:"*"})," est utilis\xe9, la fen\xeatre est ferm\xe9e automatiquement suite \xe0 une action standard ou un appel \xe0 la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/cancel",children:"CANCEL"})," ou ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/accept",children:"ACCEPT"}),". Vous n'avez pas \xe0 g\xe9rer la fermeture de la fen\xeatre elle-m\xeame."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsx)(n.p,{children:"L'exemple suivant permet de cr\xe9er une palette d'outils :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'  /Afficher la palette d\'outils\n $palette_window:=Open form window("tools";Palette form window)\n DIALOG("tools";*) //Rendre le contr\xf4le imm\xe9diatement\n  /Afficher la fen\xeatre du document principal\n $document_window:=Open form window("doc";Plain form window)\n DIALOG("doc")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsx)(n.p,{children:"Dans un formulaire affichant l'enregistrement d'une personne, un bouton ouvre un dialogue permettant de v\xe9rifier ou de modifier les noms et \xe2ges de ses enfants :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(177116).Z+"",width:"748",height:"423"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"}),' Le champ objet "enfants" est repr\xe9sent\xe9 uniquement dans cet exemple afin de faire appara\xeetre sa structure.']}),"\n",(0,i.jsxs)(n.p,{children:["Dans le formulaire de v\xe9rification, vous avez assign\xe9 des propri\xe9t\xe9s d'objet ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form",children:"Form"})," aux variables :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(274354).Z+"",width:"744",height:"275"})}),"\n",(0,i.jsx)(n.p,{children:'Voici le code du bouton "Check Children" :'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $win;$n;$i : Integer\n var $save : Boolean\n ARRAY OBJECT($children;0)\n OB GET ARRAY([Person]Children ; "children" ;$children) //obtient la collection d\'enfants\n $save:=False //initialise la variable de sauvegarde\n \n $n:=Size of array($children)\n If($n>0)\n    $win:=Open form window("Edit_Children";Movable form dialog box)\n    SET WINDOW TITLE("V\xe9rifier les enfants pour "+[Person]Name")\n    For($i;1 ;$n) //pour chaque enfant\n       DIALOG("Edit_Children" ;$children{$i}) //affiche la bo\xeete de dialogue remplie de valeurs\n       If(OK=1) //l\'utilisateur a cliqu\xe9 sur OK\n          $save:=True\n       End if\n    End for\n    If($save=True)\n       [Person]Children:=[Person]Children //forces object field update\n    End if\n    CLOSE WINDOW($win)\n Else\n    ALERT("No child to check.")\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"Le formulaire affiche des informations pour chaque enfant :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(804425).Z+"",width:"522",height:"268"})}),"\n",(0,i.jsx)(n.p,{children:"Si des valeurs sont modifi\xe9es et que l'utilisateur clique sur le bouton OK, le champ est mis \xe0 jour (bien entendu, l'enregistrement parent devra \xeatre sauvegard\xe9 par la suite)."}),"\n",(0,i.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsx)(n.p,{children:"L'exemple suivant utilise le chemin d'un fichier .json d\xe9crivant un formulaire permettant d'afficher les enregistrements d'une liste d'employ\xe9s :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)\n ALL RECORDS([Personnel])\n DIALOG("/RESOURCES/OutputPersonnel.json";*)\n'})}),"\n",(0,i.jsx)(n.p,{children:"R\xe9sultat :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(222528).Z+"",width:"301",height:"363"})}),"\n",(0,i.jsx)(n.h2,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,i.jsx)(n.p,{children:"L'exemple suivant cr\xe9e un objet \xe0 partir d'un fichier .json d\xe9crivant un formulaire et en modifie certaines propri\xe9t\xe9s :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $form : Object\n $form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))\n $form.windowTitle:="The Avengers"\n $form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"\n $form.pages[1].objects.myListBox.borderStyle:="double"\n Open form window($form;Plain form window)\n DIALOG($form;*)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Le formulaire est affich\xe9 avec la bordure, le logo et le titre modifi\xe9s :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(551491).Z+"",width:"379",height:"459"})}),"\n",(0,i.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsxs)(n.p,{children:["Apr\xe8s un appel \xe0 ",(0,i.jsx)(n.strong,{children:"DIALOG"}),", si le dialogue est accept\xe9, OK est mis \xe0 1 ; s'il est annul\xe9, OK est mis \xe0 0."]}),"\n",(0,i.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/accept",children:"ACCEPT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/add-record",children:"ADD RECORD"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/call-form",children:"CALL FORM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/cancel",children:"CANCEL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form",children:"Form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/commands/open-window",children:"Open window"})]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"40"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifie les variables"}),(0,i.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},804425:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},615054:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3541609.en-1872c62d67cf7b1512478e54d3e53352.png"},274354:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3541682.en-ab83dd431b22f336d46bb1e38b0e80aa.png"},177116:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3542015.en-70421813b1ccd4fa2f297bcd1aedfc54.png"},222528:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3687439.en-25c836074f1a1e9fbeb7da790404af71.png"},551491:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict3688356.en-9c5782b31277d5244713fc620ff3d496.png"},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let i={},a=s.createContext(i);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);