"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29691"],{501589:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>u,frontMatter:()=>t});var n=JSON.parse('{"id":"FormObjects/subformOverview","title":"Sous-formulaire","description":"Un sous-formulaire est un formulaire inclus dans un autre formulaire.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/subform_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/subformOverview","permalink":"/docs/fr/19/FormObjects/subformOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fsubform_overview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"subformOverview","title":"Sous-formulaire"},"sidebar":"docs","previous":{"title":"Stepper","permalink":"/docs/fr/19/FormObjects/stepper"},"next":{"title":"Onglets","permalink":"/docs/fr/19/FormObjects/tabControl"}}'),o=s("785893"),i=s("250065");let t={id:"subformOverview",title:"Sous-formulaire"},a=void 0,l={},u=[{value:"Terminologie",id:"terminologie",level:2},{value:"Sous-formulaires en liste",id:"sous-formulaires-en-liste",level:2},{value:"Sous-formulaires en page",id:"sous-formulaires-en-page",level:2},{value:"Gestion de la variable li\xe9e",id:"gestion-de-la-variable-li\xe9e",level:3},{value:"Mise \xe0 jour du contenu du sous-formulaire",id:"mise-\xe0-jour-du-contenu-du-sous-formulaire",level:4},{value:"Mise \xe0 jour du contenu du formulaire parent",id:"mise-\xe0-jour-du-contenu-du-formulaire-parent",level:4},{value:"Utiliser l&#39;objet associ\xe9 au sous-formulaire",id:"utiliser-lobjet-associ\xe9-au-sous-formulaire",level:3},{value:"Programmation inter-formulaires avanc\xe9e",id:"programmation-inter-formulaires-avanc\xe9e",level:3},{value:"Commandes Object get pointer et Object get name",id:"commandes-object-get-pointer-et-object-get-name",level:4},{value:"Commande CALL SUBFORM CONTAINER",id:"commande-call-subform-container",level:4},{value:"Commande EXECUTE METHOD IN SUBFORM",id:"commande-execute-method-in-subform",level:4},{value:"Commande GOTO OBJECT",id:"commande-goto-object",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function d(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Un sous-formulaire est un formulaire inclus dans un autre formulaire."}),"\n",(0,o.jsx)(r.h2,{id:"terminologie",children:"Terminologie"}),"\n",(0,o.jsx)(r.p,{children:"Afin de bien d\xe9finir les notions mises en oeuvre avec les sous-formulaires, voici quelques d\xe9finitions relatives aux termes employ\xe9s :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Sous-formulaire"})," : formulaire destin\xe9 \xe0 \xeatre inclus dans un autre formulaire, lui-m\xeame nomm\xe9 formulaire parent."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Formulaire parent"})," : formulaire contenant un ou plusieurs sous-formulaire(s)."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Conteneur de sous-formulaire"})," : objet inclus dans le formulaire parent, contenant une instance du sous-formulaire."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Instance de sous-formulaire"})," : la repr\xe9sentation d\u2019un sous-formulaire dans un formulaire parent. Cette notion est importante car il est possible d\u2019afficher plusieurs instances d\u2019un m\xeame sous-formulaire dans un formulaire parent."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Formulaire liste \xe9cran"})," : instance de sous-formulaire en liste."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Formulaire d\xe9taill\xe9"})," : formulaire de saisie en page associ\xe9 au sous-formulaire en liste et accessible via un double-clic dans la liste."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"sous-formulaires-en-liste",children:"Sous-formulaires en liste"}),"\n",(0,o.jsx)(r.p,{children:"Un sous-formulaire en liste vous permet de saisir, visualiser et modifier des donn\xe9es dans d\u2019autres tables. Les sous-formulaires en liste sont g\xe9n\xe9ralement utilis\xe9s avec les bases de donn\xe9es utilisant des liens de type 1 vers N. Un sous-formulaire en liste affiche les enregistrements de la table N li\xe9e par un lien automatique de type 1 vers N. Vous pouvez disposer de plusieurs sous-formulaires provenant de diff\xe9rentes tables dans le m\xeame formulaire. En revanche, il n\u2019est pas possible de placer deux sous-formulaires appartenant \xe0 la m\xeame table dans une m\xeame page de formulaire."}),"\n",(0,o.jsx)(r.p,{children:"Par exemple, une base de gestion de contacts peut utiliser une instance de sous-formulaire en liste pour afficher tous les contacts d\u2019une soci\xe9t\xe9. Bien que les contacts apparaissent dans l\u2019\xe9cran g\xe9n\xe9ral, l\u2019information est en fait stock\xe9e dans la table li\xe9e. A l\u2019aide d\u2019un lien 1 vers N, la conception de cette base de donn\xe9es rend facile le stockage d\u2019un nombre illimit\xe9 de contacts pour chacune des soci\xe9t\xe9s. Avec des liens automatiques, vous pouvez permettre la saisie de donn\xe9es dans la table li\xe9e sans programmation."}),"\n",(0,o.jsx)(r.p,{children:"Bien que les sous-formulaires en liste soient g\xe9n\xe9ralement associ\xe9s aux tables N, une instance de sous-formulaire peut afficher des enregistrements de toute autre table de la base de donn\xe9es."}),"\n",(0,o.jsx)(r.p,{children:"Vous pouvez \xe9galement permettre \xe0 l\u2019utilisateur de saisir des donn\xe9es dans le formulaire liste. Suivant la configuration du sous-formulaire, l\u2019utilisateur pourra afficher le formulaire d\xe9taill\xe9 en double-cliquant sur un sous-enregistrement ou en utilisant les commandes d\u2019ajout et de modification des sous-enregistrements."}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["4D propose trois actions standard, permettant de r\xe9pondre aux besoins \xe9l\xe9mentaires de gestion des sous-enregistrements : ",(0,o.jsx)(r.code,{children:"Modifier sous-enregistrement"}),", ",(0,o.jsx)(r.code,{children:"Supprimer sous-enregistrement"})," et ",(0,o.jsx)(r.code,{children:"Ajouter sous-enregistrement"}),". Lorsque le formulaire comporte plusieurs instances de sous-formulaires, l\u2019action s\u2019applique au sous-formulaire ayant le focus."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"sous-formulaires-en-page",children:"Sous-formulaires en page"}),"\n",(0,o.jsx)(r.p,{children:"Les sous-formulaires en mode page peuvent afficher des donn\xe9es relatives \xe0 l'enregistrement courant ou toute valeur pertinente en fonction du contexte (variables, images, etc.). Il peuvent \xe9galement, et c'est l\xe0 leur int\xe9r\xeat majeur, comporter des fonctionnalit\xe9s avanc\xe9es et interagir avec le formulaire parent (widgets). Les sous-formulaires en page b\xe9n\xe9ficient de propri\xe9t\xe9s et d'\xe9v\xe9nements sp\xe9cifiques, et peuvent \xeatre enti\xe8rement contr\xf4l\xe9s par programmation."}),"\n",(0,o.jsxs)(r.p,{children:["Le sous-formulaire en page utilise le formulaire entr\xe9e d\xe9sign\xe9 par la propri\xe9t\xe9 ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#detail-form",children:"Formulaire d\xe9taill\xe9"}),". A la diff\xe9rence d\u2019un sous-formulaire en mode liste, le formulaire utilis\xe9 peut provenir de la m\xeame table que le formulaire parent. Il est \xe9galement possible d\u2019utiliser un formulaire projet. En ex\xe9cution, un sous-formulaire en mode page dispose des caract\xe9ristiques d\u2019affichage standard d\u2019un formulaire entr\xe9e."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Les widgets 4D sont des objets compos\xe9s pr\xe9d\xe9finis. Pour plus de d\xe9tails sur les widgets, consultez le manuel ",(0,o.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html",children:"4D Widgets"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"gestion-de-la-variable-li\xe9e",children:"Gestion de la variable li\xe9e"}),"\n",(0,o.jsxs)(r.p,{children:["La ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," li\xe9e au sous-formulaire permet de relier les deux contextes (formulaire et sous-formulaire) pour mettre au point des interfaces sophistiqu\xe9es. Imaginons par exemple un sous-formulaire repr\xe9sentant une pendule dynamique, ins\xe9r\xe9 dans un formulaire parent contenant une variable saisissable de type heure :"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(662110).Z+"",width:"812",height:"167"})}),"\n",(0,o.jsxs)(r.p,{children:["Les deux objets (variable heure et conteneur du sous-formulaire) ",(0,o.jsx)(r.em,{children:"ont le m\xeame nom de variable"}),". Dans ce cas, \xe0 l\u2019ouverture du formulaire parent, les deux valeurs sont automatiquement synchronis\xe9es par 4D. Si la valeur de la variable est d\xe9finie \xe0 plusieurs emplacements, la valeur utilis\xe9e sera celle qui aura \xe9t\xe9 charg\xe9e en dernier lieu. It applies the following loading order: 1-Object methods of subform 2-Form method of subform 3-Object methods of parent form 4-Form method of parent form"]}),"\n",(0,o.jsx)(r.p,{children:"A l\u2019ex\xe9cution du formulaire parent, la synchronisation des variables doit \xeatre effectu\xe9e par le d\xe9veloppeur \xe0 l\u2019aide des \xe9v\xe9nements formulaires ad\xe9quats. Deux types d\u2019interactions peuvent se produire : du formulaire vers le sous-formulaire et inversement."}),"\n",(0,o.jsx)(r.h4,{id:"mise-\xe0-jour-du-contenu-du-sous-formulaire",children:"Mise \xe0 jour du contenu du sous-formulaire"}),"\n",(0,o.jsxs)(r.p,{children:["Sc\xe9nario 1 : La valeur de la variable du formulaire parent est modifi\xe9e et cette modification doit \xeatre r\xe9percut\xe9e dans le sous-formulaire. Dans notre exemple, l\u2019heure de Heureparis passe \xe0 12:15:00, soit parce que l\u2019utilisateur l\u2019a saisie, soit parce qu\u2019elle est mise \xe0 jour dynamiquement (via la commande ",(0,o.jsx)(r.code,{children:"Current time"})," par exemple)."]}),"\n",(0,o.jsx)(r.p,{children:"Dans ce cas, vous devez utiliser l'\xe9v\xe9nement formulaire Sur modif variable li\xe9e. Cet \xe9v\xe9nement doit \xeatre coch\xe9 dans les propri\xe9t\xe9s du sous-formulaire, il sera g\xe9n\xe9r\xe9 dans la m\xe9thode formulaire du sous-formulaire."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(154771).Z+"",width:"859",height:"331"})}),"\n",(0,o.jsxs)(r.p,{children:["L\u2019\xe9v\xe9nement formulaire ",(0,o.jsx)(r.code,{children:"Sur modif variable li\xe9e"})," est g\xe9n\xe9r\xe9 :"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"d\xe8s qu\u2019une valeur est affect\xe9e \xe0 la variable du formulaire parent, m\xeame si la m\xeame valeur est r\xe9affect\xe9e,"}),"\n",(0,o.jsx)(r.li,{children:"si le sous-formulaire appartient \xe0 la page formulaire courante ou \xe0 la page 0."}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["A noter que, comme dans l\u2019exemple ci-dessus, il est pr\xe9f\xe9rable d\u2019utiliser la commande ",(0,o.jsx)(r.code,{children:"OBJECT Get pointer"})," qui retourne un pointeur vers le conteneur de sous-formulaire plut\xf4t que sa variable car il est possible d\u2019ins\xe9rer plusieurs sous-formulaires dans un m\xeame formulaire parent (par exemple, une fen\xeatre affichant des fuseaux horaires contiendrait plusieurs pendules). Dans ce cas, seul un pointeur permet de conna\xeetre le conteneur de sous-formulaire \xe0 l\u2019origine de l\u2019\xe9v\xe9nement."]}),"\n",(0,o.jsx)(r.h4,{id:"mise-\xe0-jour-du-contenu-du-formulaire-parent",children:"Mise \xe0 jour du contenu du formulaire parent"}),"\n",(0,o.jsx)(r.p,{children:'Sc\xe9nario 2 : Le contenu du sous-formulaire est modifi\xe9 et cette modification doit \xeatre r\xe9percut\xe9e dans le formulaire parent. Dans notre exemple, imaginons que l\u2019interface du sous-formulaire permette \xe0 l\u2019utilisateur de d\xe9placer "manuellement" les aiguilles.'}),"\n",(0,o.jsxs)(r.p,{children:["Dans ce cas, vous devez affecter la valeur de l\u2019objet \xe0 la variable du conteneur du sous-formulaire parent depuis le sous-formulaire. Comme dans l\u2019exemple pr\xe9c\xe9dent, il est conseill\xe9 d\u2019utiliser pour cela la commande ",(0,o.jsx)(r.code,{children:"OBJECT Get pointer"})," avec le s\xe9lecteur ",(0,o.jsx)(r.code,{children:"Objet conteneur sous formulaire"})," qui retourne un pointeur vers le conteneur du sous-formulaire."]}),"\n",(0,o.jsxs)(r.p,{children:["Cette affectation g\xe9n\xe8re l\u2019\xe9v\xe9nement formulaire ",(0,o.jsx)(r.code,{children:"Sur donn\xe9es modifi\xe9es"})," dans la m\xe9thode de l\u2019objet conteneur du sous-formulaire parent, ce qui vous permet d\u2019effectuer tout type d\u2019action. L\u2019\xe9v\xe9nement doit \xeatre coch\xe9 dans les propri\xe9t\xe9s du conteneur de sous-formulaire."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(567780).Z+"",width:"996",height:"452"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:['Si vous d\xe9placez "manuellement" les aiguilles, cela g\xe9n\xe8re \xe9galement l\u2019\xe9v\xe9nement formulaire ',(0,o.jsx)(r.code,{children:"Sur donn\xe9es modifi\xe9es"})," de l'\xe9v\xe9nement formulaire dans la m\xe9thode objet de la variable ",(0,o.jsx)(r.em,{children:"clockValue"})," du sous-formulaire."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"utiliser-lobjet-associ\xe9-au-sous-formulaire",children:"Utiliser l'objet associ\xe9 au sous-formulaire"}),"\n",(0,o.jsxs)(r.p,{children:["4D associe automatiquement un objet de langage (",(0,o.jsx)(r.code,{children:"C_OBJECT"}),") \xe0 chaque sous-formulaire. Le contenu de cet objet peut \xeatre lu et/ou modifi\xe9 depuis le contexte du sous-formulaire, ce qui vous permet de partager des valeurs dans un contexte local."]}),"\n",(0,o.jsxs)(r.p,{children:["L'objet peut \xeatre cr\xe9\xe9 automatiquement ou \xeatre la variable du conteneur parent, si elle a \xe9t\xe9 explicitement nomm\xe9e et typ\xe9e Objet (voir ci-dessus). Dans tous les cas, l'objet est retourn\xe9 par la commande ",(0,o.jsx)(r.code,{children:"Form"}),", qui peut \xeatre appel\xe9e directement dans le sous-formulaire (l'usage d'un pointeur est inutile). Comme les objets sont toujours pass\xe9s par r\xe9f\xe9rence, si l'utilisateur modifie une valeur de propri\xe9t\xe9 dans le sous-formulaire, elle sera automatiquement mise \xe0 jour dans l'objet lui-m\xeame."]}),"\n",(0,o.jsx)(r.p,{children:"Par exemple, dans votre sous-formulaire, les libell\xe9s des champs sont stock\xe9s dans l'objet associ\xe9 afin de vous permettre d'afficher diff\xe9rentes langues :"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(872475).Z+"",width:"515",height:"280"})}),"\n",(0,o.jsxs)(r.p,{children:["Vous pouvez modifier les libell\xe9s depuis le sous-formulaire en affectant des valeurs \xe0 l'objet ",(0,o.jsx)(r.em,{children:"InvoiceAddress"})," :"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:' C_OBJECT($lang)\n $lang:=New object\n If(<>lang="fr")\n    $lang.CompanyName:="Soci\xe9t\xe9 :"\n    $lang.LastName:="Nom :"\n Else\n    $lang.CompanyName:="Company:"\n    $lang.LastName:="Name:"\n End if\n InvoiceAddress.Label:=$lang\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(588189).Z+"",width:"510",height:"89"})}),"\n",(0,o.jsx)(r.h3,{id:"programmation-inter-formulaires-avanc\xe9e",children:"Programmation inter-formulaires avanc\xe9e"}),"\n",(0,o.jsx)(r.p,{children:'La communication entre le formulaire parent et les instances des sous-formulaires peut n\xe9cessiter d\u2019aller au-del\xe0 de l\u2019\xe9change d\u2019une valeur via la variable associ\xe9e. En effet, vous pouvez souhaiter mettre \xe0 jour des variables dans les sous-formulaires en fonction d\u2019actions effectu\xe9es dans le formulaire parent et inversement. Si l\u2019on reprend l\u2019exemple du sous-formulaire de type "pendule dynamique", on peut souhaiter d\xe9finir une ou plusieurs heures d\u2019alerte par pendule.'}),"\n",(0,o.jsx)(r.p,{children:"Pour r\xe9pondre \xe0 ces besoins, 4D propose les m\xe9canismes suivants :"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:['Utilisation du param\xe8tre "sous-formulaire" avec la commande ',(0,o.jsx)(r.code,{children:"OBJECT Get name"})," afin de d\xe9signer l\u2019objet sous-formulaire et commande ",(0,o.jsx)(r.code,{children:"OBJECT Get pointer"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Appel de l\u2019objet conteneur depuis le sous-formulaire via la commande ",(0,o.jsx)(r.code,{children:"CALL SUBFORM CONTAINER"}),","]}),"\n",(0,o.jsxs)(r.li,{children:["Ex\xe9cution d\u2019une m\xe9thode dans le contexte du sous-formulaire via la commande ",(0,o.jsx)(r.code,{children:"EXECUTE METHOD IN SUBFORM"}),"."]}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"commandes-object-get-pointer-et-object-get-name",children:"Commandes Object get pointer et Object get name"}),"\n",(0,o.jsxs)(r.p,{children:["Outre le s\xe9lecteur ",(0,o.jsx)(r.code,{children:"Objet conteneur sous formulaire"}),", la commande ",(0,o.jsx)(r.code,{children:"OBJECT Get pointer"})," admet un param\xe8tre permettant de pr\xe9ciser dans quel sous-formulaire chercher l\u2019objet dont le nom est pass\xe9 en deuxi\xe8me param\xe8tre. Cette syntaxe n\u2019est utilisable que lorsque le s\xe9lecteur Objet nomm\xe9 est pass\xe9."]}),"\n",(0,o.jsx)(r.p,{children:"Par exemple, l\u2019instruction suivante :"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:' $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")\n'})}),"\n",(0,o.jsxs)(r.p,{children:['... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. Cette syntaxe permet d\u2019acc\xe9der depuis le formulaire parent \xe0 tout objet se trouvant dans un sous-formulaire. A noter \xe9galement la commande ',(0,o.jsx)(r.code,{children:"OBJECT Get name"})," qui permet de r\xe9cup\xe9rer le nom de l\u2019objet ayant le focus."]}),"\n",(0,o.jsx)(r.h4,{id:"commande-call-subform-container",children:"Commande CALL SUBFORM CONTAINER"}),"\n",(0,o.jsxs)(r.p,{children:["La commande ",(0,o.jsx)(r.code,{children:"CALL SUBFORM CONTAINER"})," permet \xe0 une instance de sous-formulaire d\u2019envoyer un \xe9v\xe9nement \xe0 l\u2019objet conteneur du sous-formulaire, qui peut alors le traiter dans le contexte du formulaire parent. L\u2019\xe9v\xe9nement est re\xe7u dans la m\xe9thode de l\u2019objet conteneur. Il peut s\u2019agir \xe0 l\u2019origine de tout \xe9v\xe9nement d\xe9tect\xe9 par le sous-formulaire (clic, glisser-d\xe9poser, etc.)."]}),"\n",(0,o.jsxs)(r.p,{children:["Le code de l\u2019\xe9v\xe9nement est libre (par exemple, 20000 ou -100). Vous pouvez soit utiliser un code correspondant \xe0 un \xe9v\xe9nement existant (par exemple, 3 pour ",(0,o.jsx)(r.code,{children:"Sur validation"}),'), soit utiliser un code personnalis\xe9. Dans le premier cas, seuls les \xe9v\xe9nements pr\xe9sents dans la liste des \xe9v\xe9nements "cochables" des conteneurs de sous-formulaire peuvent \xeatre utilis\xe9s (cf. Liste des propri\xe9t\xe9s). Dans le second cas, le code ne doit correspondre \xe0 aucun \xe9v\xe9nement formulaire existant. Il est conseill\xe9 d\u2019utiliser une valeur n\xe9gative pour avoir l\u2019assurance que 4D n\u2019utilisera pas ce code dans les versions futures.']}),"\n",(0,o.jsxs)(r.p,{children:["Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,o.jsx)(r.code,{children:"CALL SUBFORM CONTAINER"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"commande-execute-method-in-subform",children:"Commande EXECUTE METHOD IN SUBFORM"}),"\n",(0,o.jsxs)(r.p,{children:["La commande ",(0,o.jsx)(r.code,{children:"EXECUTE METHOD IN SUBFORM"})," permet \xe0 un formulaire ou \xe0 l\u2019un de ses objets de demander l\u2019ex\xe9cution d\u2019une m\xe9thode dans le contexte de l\u2019instance du sous-formulaire, ce qui lui donne acc\xe8s aux variables, objets, etc., du sous-formulaire. Cette m\xe9thode peut en outre recevoir des param\xe8tres."]}),"\n",(0,o.jsx)(r.p,{children:"Ce m\xe9canisme est illustr\xe9 dans le sch\xe9ma suivant :"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(451742).Z+"",width:"1022",height:"267"})}),"\n",(0,o.jsxs)(r.p,{children:["Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,o.jsx)(r.code,{children:"EXECUTE METHOD IN SUBFORM"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"commande-goto-object",children:"Commande GOTO OBJECT"}),"\n",(0,o.jsxs)(r.p,{children:["La commande ",(0,o.jsx)(r.code,{children:"GOTO OBJECT"})," peut rechercher l\u2019objet de destination dans le formulaire parent m\xeame si elle ex\xe9cut\xe9e depuis un sous-formulaire."]}),"\n",(0,o.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#detail-form",children:"Detail Form"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#double-click-on-empty-row",children:"Double click on empty row"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#double-click-on-row",children:"Double click on row"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#enterable-in-list",children:"Enterable in list"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type",children:"Expression Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#list-form",children:"List Form"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesAction#method",children:"Method"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#selection-mode",children:"Selection mode"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesSubform#source",children:"Source"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},662110:function(e,r,s){s.d(r,{Z:function(){return n}});let n="data:image/png;base64,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"},154771:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/subforms2-fdeb5168781c7d5cf99dcc2d54f75423.png"},567780:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/subforms3-a568914b035307adb69e854c3ec8c659.png"},872475:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/subforms4-27522593ad517729524997a4bd563b97.png"},588189:function(e,r,s){s.d(r,{Z:function(){return n}});let n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAABZCAIAAABQY9GQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAASjSURBVHhe7dxbjts2GIDRrMsL8iK6Cu+j6FMBb8aLmfImkvIl9TRyFfs/B0ZGokhKedDnIAHy4wuAYKQfIJyW/j//+tvHx8fH57M/NfjJSH89AOAjST9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONLPO/kDomrvwEakn3ey+QsAb0H6CU36iUn6CU36iUn6eY3z8cdwPLfRJ5SFh9OlnWZ1r59v8sycO+YX4HI6LDdePf36YeATSD8vkCM6Onw+/kr6y17zBmXCesebOU+bXoD5xum4P8Kd+8G7k362V8u/zR+WL+fzeptS4nWKb+Y8r78A6ZmPp9PhTvrr70f7+SjSzwvUPN/WfxlPxqX6RVHkwTKnXZ0u1aFpgyX/N3OGeasH2guQw3/Ov7bZaeW8Lt9D+/kk0s9L3AlyzXYpaL2aD+vRnNnR63I0970cT9ssZzdzmrHVQ+UFSCvLrOVnWTmvy1vPG8O7k35eqNa45neV7CXT9eeqzr3XdcGsLF7t82DO89ILMII/jtK+80ONC/AZpJ/XWiK/TvYy2q8OZV4Kbb10W9x5n0dznpdegOtvj7zdOv35Nt/8SoHfm/SzvcvpuHRzivPS9D6aa3ob7z6tXurNPZ/qpLG2n9zMaaY7PrJ6AdJubfac/ryL8PNhpJ/ttSA3U3tLi6sxOs3Og3OvVxutWpzVHt+fU8xbPfA4/d3PN4C3JP2EtvkLAG9B+glN+olJ+glN+olJ+glN+olJ+glN+olJ+gktvQAQU3sHNiL9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40s87af99LcTT3oGNSD/vZPMXAN6C9BOa9BOT9BOa9BOT9LO3y+nwIzue28D5uDp9qfIC1Bs2h9OlXYPPJf3sbUl/j+4e6e/BLzd/4b3ne8FupJ+99fQvyd01/fV5Xndz6ee3IP3srab/cDzmH7m5q/TXk6Ils80/LF8YbWV2Veyy9uehvZP+0f55vB+Xg3P7uhrLbr7A2sxTe/4yM40srh4V/l/Sz95ayk+XcpB+1kDmNo6jNisf9vm9t1ejXVm+Hrr2n9K/bJonjsGy5HqwjY7rfR/Yk/SztynaNZbH/GsuZTmdk1pO+sFqaZ387ao+SH/fso/349XkdJIfJD9He8ykDT6xHPYi/ext7nc9LlI9UybrwZiWTvrBemmZ/O2q3kl/3rTecx7vx/PgMnUsydKMcvKvy2E30s/e5n4vZ0muZ+rk+kth6exz6b8zdO0m/XnNUvG8fTvOw+M+bfa4Pq1aDc7b9uV9EHYj/ext7neWM5pMzW2m4G6e/u7ODln+W6h+n/EPy+0hk/ooWd8hz7w9bluOlbAD6Se0778Ac9DhXUk/oUk/MUk/oUk/MUk/oW3+AsBbkH5Ck35ikn5CSy8AxNTegY1IP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOGMzn99/QMN4RZfkNPjLQAAAABJRU5ErkJggg=="},451742:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/subforms6-2b2d3b3837144e434b9af3266faa6a82.png"},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return t}});var n=s(667294);let o={},i=n.createContext(o);function t(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);