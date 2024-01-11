"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45221],{603905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>c});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,f=d["".concat(l,".").concat(c)]||d[c]||p[c]||o;return t?n.createElement(f,s(s({ref:r},m),{},{components:t})):n.createElement(f,s({ref:r},m))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},816403:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});t(667294);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={id:"subformOverview",title:"Sous-formulaire"},i=void 0,l={unversionedId:"FormObjects/subformOverview",id:"version-19/FormObjects/subformOverview",title:"Sous-formulaire",description:"Un sous-formulaire est un formulaire inclus dans un autre formulaire.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/subform_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/subformOverview",permalink:"/docs/fr/19/FormObjects/subformOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fsubform_overview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"subformOverview",title:"Sous-formulaire"},sidebar:"docs",previous:{title:"Stepper",permalink:"/docs/fr/19/FormObjects/stepper"},next:{title:"Onglets",permalink:"/docs/fr/19/FormObjects/tabControl"}},u={},m=[{value:"Terminologie",id:"terminologie",level:2},{value:"Sous-formulaires en liste",id:"sous-formulaires-en-liste",level:2},{value:"Sous-formulaires en page",id:"sous-formulaires-en-page",level:2},{value:"Gestion de la variable li\xe9e",id:"gestion-de-la-variable-li\xe9e",level:3},{value:"Mise \xe0 jour du contenu du sous-formulaire",id:"mise-\xe0-jour-du-contenu-du-sous-formulaire",level:4},{value:"Mise \xe0 jour du contenu du formulaire parent",id:"mise-\xe0-jour-du-contenu-du-formulaire-parent",level:4},{value:"Utiliser l&#39;objet associ\xe9 au sous-formulaire",id:"utiliser-lobjet-associ\xe9-au-sous-formulaire",level:3},{value:"Programmation inter-formulaires avanc\xe9e",id:"programmation-inter-formulaires-avanc\xe9e",level:3},{value:"Commandes Object get pointer et Object get name",id:"commandes-object-get-pointer-et-object-get-name",level:4},{value:"Commande CALL SUBFORM CONTAINER",id:"commande-call-subform-container",level:4},{value:"Commande EXECUTE METHOD IN SUBFORM",id:"commande-execute-method-in-subform",level:4},{value:"Commande GOTO OBJECT",id:"commande-goto-object",level:4},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}],p={toc:m};function d(e){var{components:r}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Un sous-formulaire est un formulaire inclus dans un autre formulaire."),(0,n.kt)("h2",a({},{id:"terminologie"}),"Terminologie"),(0,n.kt)("p",null,"Afin de bien d\xe9finir les notions mises en oeuvre avec les sous-formulaires, voici quelques d\xe9finitions relatives aux termes employ\xe9s :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sous-formulaire")," : formulaire destin\xe9 \xe0 \xeatre inclus dans un autre formulaire, lui-m\xeame nomm\xe9 formulaire parent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Formulaire parent")," : formulaire contenant un ou plusieurs sous-formulaire(s)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conteneur de sous-formulaire")," : objet inclus dans le formulaire parent, contenant une instance du sous-formulaire."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Instance de sous-formulaire")," : la repr\xe9sentation d\u2019un sous-formulaire dans un formulaire parent. Cette notion est importante car il est possible d\u2019afficher plusieurs instances d\u2019un m\xeame sous-formulaire dans un formulaire parent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Formulaire liste \xe9cran")," : instance de sous-formulaire en liste."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Formulaire d\xe9taill\xe9")," : formulaire de saisie en page associ\xe9 au sous-formulaire en liste et accessible via un double-clic dans la liste.")),(0,n.kt)("h2",a({},{id:"sous-formulaires-en-liste"}),"Sous-formulaires en liste"),(0,n.kt)("p",null,"Un sous-formulaire en liste vous permet de saisir, visualiser et modifier des donn\xe9es dans d\u2019autres tables. Les sous-formulaires en liste sont g\xe9n\xe9ralement utilis\xe9s avec les bases de donn\xe9es utilisant des liens de type 1 vers N. Un sous-formulaire en liste affiche les enregistrements de la table N li\xe9e par un lien automatique de type 1 vers N. Vous pouvez disposer de plusieurs sous-formulaires provenant de diff\xe9rentes tables dans le m\xeame formulaire. En revanche, il n\u2019est pas possible de placer deux sous-formulaires appartenant \xe0 la m\xeame table dans une m\xeame page de formulaire."),(0,n.kt)("p",null,"Par exemple, une base de gestion de contacts peut utiliser une instance de sous-formulaire en liste pour afficher tous les contacts d\u2019une soci\xe9t\xe9. Bien que les contacts apparaissent dans l\u2019\xe9cran g\xe9n\xe9ral, l\u2019information est en fait stock\xe9e dans la table li\xe9e. A l\u2019aide d\u2019un lien 1 vers N, la conception de cette base de donn\xe9es rend facile le stockage d\u2019un nombre illimit\xe9 de contacts pour chacune des soci\xe9t\xe9s. Avec des liens automatiques, vous pouvez permettre la saisie de donn\xe9es dans la table li\xe9e sans programmation."),(0,n.kt)("p",null,"Bien que les sous-formulaires en liste soient g\xe9n\xe9ralement associ\xe9s aux tables N, une instance de sous-formulaire peut afficher des enregistrements de toute autre table de la base de donn\xe9es."),(0,n.kt)("p",null,"Vous pouvez \xe9galement permettre \xe0 l\u2019utilisateur de saisir des donn\xe9es dans le formulaire liste. Suivant la configuration du sous-formulaire, l\u2019utilisateur pourra afficher le formulaire d\xe9taill\xe9 en double-cliquant sur un sous-enregistrement ou en utilisant les commandes d\u2019ajout et de modification des sous-enregistrements."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D propose trois actions standard, permettant de r\xe9pondre aux besoins \xe9l\xe9mentaires de gestion des sous-enregistrements : ",(0,n.kt)("inlineCode",{parentName:"p"},"Modifier sous-enregistrement"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Supprimer sous-enregistrement")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"Ajouter sous-enregistrement"),". Lorsque le formulaire comporte plusieurs instances de sous-formulaires, l\u2019action s\u2019applique au sous-formulaire ayant le focus.")),(0,n.kt)("h2",a({},{id:"sous-formulaires-en-page"}),"Sous-formulaires en page"),(0,n.kt)("p",null,"Les sous-formulaires en mode page peuvent afficher des donn\xe9es relatives \xe0 l'enregistrement courant ou toute valeur pertinente en fonction du contexte (variables, images, etc.). Il peuvent \xe9galement, et c'est l\xe0 leur int\xe9r\xeat majeur, comporter des fonctionnalit\xe9s avanc\xe9es et interagir avec le formulaire parent (widgets). Les sous-formulaires en page b\xe9n\xe9ficient de propri\xe9t\xe9s et d'\xe9v\xe9nements sp\xe9cifiques, et peuvent \xeatre enti\xe8rement contr\xf4l\xe9s par programmation."),(0,n.kt)("p",null,"Le sous-formulaire en page utilise le formulaire entr\xe9e d\xe9sign\xe9 par la propri\xe9t\xe9 ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#detail-form"}),"Formulaire d\xe9taill\xe9"),". A la diff\xe9rence d\u2019un sous-formulaire en mode liste, le formulaire utilis\xe9 peut provenir de la m\xeame table que le formulaire parent. Il est \xe9galement possible d\u2019utiliser un formulaire projet. En ex\xe9cution, un sous-formulaire en mode page dispose des caract\xe9ristiques d\u2019affichage standard d\u2019un formulaire entr\xe9e."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Les widgets 4D sont des objets compos\xe9s pr\xe9d\xe9finis. Pour plus de d\xe9tails sur les widgets, consultez le manuel ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html"}),"4D Widgets"),".")),(0,n.kt)("h3",a({},{id:"gestion-de-la-variable-li\xe9e"}),"Gestion de la variable li\xe9e"),(0,n.kt)("p",null,"La ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"variable")," li\xe9e au sous-formulaire permet de relier les deux contextes (formulaire et sous-formulaire) pour mettre au point des interfaces sophistiqu\xe9es. Imaginons par exemple un sous-formulaire repr\xe9sentant une pendule dynamique, ins\xe9r\xe9 dans un formulaire parent contenant une variable saisissable de type heure :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(706461).Z,width:"812",height:"167"})),(0,n.kt)("p",null,"Les deux objets (variable heure et conteneur du sous-formulaire) ",(0,n.kt)("em",{parentName:"p"},"ont le m\xeame nom de variable"),". Dans ce cas, \xe0 l\u2019ouverture du formulaire parent, les deux valeurs sont automatiquement synchronis\xe9es par 4D. Si la valeur de la variable est d\xe9finie \xe0 plusieurs emplacements, la valeur utilis\xe9e sera celle qui aura \xe9t\xe9 charg\xe9e en dernier lieu. It applies the following loading order: 1-Object methods of subform 2-Form method of subform 3-Object methods of parent form 4-Form method of parent form"),(0,n.kt)("p",null,"A l\u2019ex\xe9cution du formulaire parent, la synchronisation des variables doit \xeatre effectu\xe9e par le d\xe9veloppeur \xe0 l\u2019aide des \xe9v\xe9nements formulaires ad\xe9quats. Deux types d\u2019interactions peuvent se produire : du formulaire vers le sous-formulaire et inversement."),(0,n.kt)("h4",a({},{id:"mise-\xe0-jour-du-contenu-du-sous-formulaire"}),"Mise \xe0 jour du contenu du sous-formulaire"),(0,n.kt)("p",null,"Sc\xe9nario 1 : La valeur de la variable du formulaire parent est modifi\xe9e et cette modification doit \xeatre r\xe9percut\xe9e dans le sous-formulaire. Dans notre exemple, l\u2019heure de Heureparis passe \xe0 12:15:00, soit parce que l\u2019utilisateur l\u2019a saisie, soit parce qu\u2019elle est mise \xe0 jour dynamiquement (via la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Current time")," par exemple)."),(0,n.kt)("p",null,"Dans ce cas, vous devez utiliser l'\xe9v\xe9nement formulaire Sur modif variable li\xe9e. Cet \xe9v\xe9nement doit \xeatre coch\xe9 dans les propri\xe9t\xe9s du sous-formulaire, il sera g\xe9n\xe9r\xe9 dans la m\xe9thode formulaire du sous-formulaire."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(127885).Z,width:"859",height:"331"})),(0,n.kt)("p",null,"L\u2019\xe9v\xe9nement formulaire ",(0,n.kt)("inlineCode",{parentName:"p"},"Sur modif variable li\xe9e")," est g\xe9n\xe9r\xe9 :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"d\xe8s qu\u2019une valeur est affect\xe9e \xe0 la variable du formulaire parent, m\xeame si la m\xeame valeur est r\xe9affect\xe9e,"),(0,n.kt)("li",{parentName:"ul"},"si le sous-formulaire appartient \xe0 la page formulaire courante ou \xe0 la page 0.")),(0,n.kt)("p",null,"A noter que, comme dans l\u2019exemple ci-dessus, il est pr\xe9f\xe9rable d\u2019utiliser la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT Get pointer")," qui retourne un pointeur vers le conteneur de sous-formulaire plut\xf4t que sa variable car il est possible d\u2019ins\xe9rer plusieurs sous-formulaires dans un m\xeame formulaire parent (par exemple, une fen\xeatre affichant des fuseaux horaires contiendrait plusieurs pendules). Dans ce cas, seul un pointeur permet de conna\xeetre le conteneur de sous-formulaire \xe0 l\u2019origine de l\u2019\xe9v\xe9nement."),(0,n.kt)("h4",a({},{id:"mise-\xe0-jour-du-contenu-du-formulaire-parent"}),"Mise \xe0 jour du contenu du formulaire parent"),(0,n.kt)("p",null,'Sc\xe9nario 2 : Le contenu du sous-formulaire est modifi\xe9 et cette modification doit \xeatre r\xe9percut\xe9e dans le formulaire parent. Dans notre exemple, imaginons que l\u2019interface du sous-formulaire permette \xe0 l\u2019utilisateur de d\xe9placer "manuellement" les aiguilles.'),(0,n.kt)("p",null,"Dans ce cas, vous devez affecter la valeur de l\u2019objet \xe0 la variable du conteneur du sous-formulaire parent depuis le sous-formulaire. Comme dans l\u2019exemple pr\xe9c\xe9dent, il est conseill\xe9 d\u2019utiliser pour cela la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT Get pointer")," avec le s\xe9lecteur ",(0,n.kt)("inlineCode",{parentName:"p"},"Objet conteneur sous formulaire")," qui retourne un pointeur vers le conteneur du sous-formulaire."),(0,n.kt)("p",null,"Cette affectation g\xe9n\xe8re l\u2019\xe9v\xe9nement formulaire ",(0,n.kt)("inlineCode",{parentName:"p"},"Sur donn\xe9es modifi\xe9es")," dans la m\xe9thode de l\u2019objet conteneur du sous-formulaire parent, ce qui vous permet d\u2019effectuer tout type d\u2019action. L\u2019\xe9v\xe9nement doit \xeatre coch\xe9 dans les propri\xe9t\xe9s du conteneur de sous-formulaire."),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(454790).Z,width:"996",height:"452"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Si vous d\xe9placez "manuellement" les aiguilles, cela g\xe9n\xe8re \xe9galement l\u2019\xe9v\xe9nement formulaire ',(0,n.kt)("inlineCode",{parentName:"p"},"Sur donn\xe9es modifi\xe9es")," de l'\xe9v\xe9nement formulaire dans la m\xe9thode objet de la variable ",(0,n.kt)("em",{parentName:"p"},"clockValue")," du sous-formulaire.")),(0,n.kt)("h3",a({},{id:"utiliser-lobjet-associ\xe9-au-sous-formulaire"}),"Utiliser l'objet associ\xe9 au sous-formulaire"),(0,n.kt)("p",null,"4D associe automatiquement un objet de langage (",(0,n.kt)("inlineCode",{parentName:"p"},"C_OBJECT"),") \xe0 chaque sous-formulaire. Le contenu de cet objet peut \xeatre lu et/ou modifi\xe9 depuis le contexte du sous-formulaire, ce qui vous permet de partager des valeurs dans un contexte local."),(0,n.kt)("p",null,"L'objet peut \xeatre cr\xe9\xe9 automatiquement ou \xeatre la variable du conteneur parent, si elle a \xe9t\xe9 explicitement nomm\xe9e et typ\xe9e Objet (voir ci-dessus). Dans tous les cas, l'objet est retourn\xe9 par la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"Form"),", qui peut \xeatre appel\xe9e directement dans le sous-formulaire (l'usage d'un pointeur est inutile). Comme les objets sont toujours pass\xe9s par r\xe9f\xe9rence, si l'utilisateur modifie une valeur de propri\xe9t\xe9 dans le sous-formulaire, elle sera automatiquement mise \xe0 jour dans l'objet lui-m\xeame."),(0,n.kt)("p",null,"Par exemple, dans votre sous-formulaire, les libell\xe9s des champs sont stock\xe9s dans l'objet associ\xe9 afin de vous permettre d'afficher diff\xe9rentes langues :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(530377).Z,width:"515",height:"280"})),(0,n.kt)("p",null,"Vous pouvez modifier les libell\xe9s depuis le sous-formulaire en affectant des valeurs \xe0 l'objet ",(0,n.kt)("em",{parentName:"p"},"InvoiceAddress")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' C_OBJECT($lang)\n $lang:=New object\n If(<>lang="fr")\n    $lang.CompanyName:="Soci\xe9t\xe9 :"\n    $lang.LastName:="Nom :"\n Else\n    $lang.CompanyName:="Company:"\n    $lang.LastName:="Name:"\n End if\n InvoiceAddress.Label:=$lang\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(97110).Z,width:"510",height:"89"})),(0,n.kt)("h3",a({},{id:"programmation-inter-formulaires-avanc\xe9e"}),"Programmation inter-formulaires avanc\xe9e"),(0,n.kt)("p",null,'La communication entre le formulaire parent et les instances des sous-formulaires peut n\xe9cessiter d\u2019aller au-del\xe0 de l\u2019\xe9change d\u2019une valeur via la variable associ\xe9e. En effet, vous pouvez souhaiter mettre \xe0 jour des variables dans les sous-formulaires en fonction d\u2019actions effectu\xe9es dans le formulaire parent et inversement. Si l\u2019on reprend l\u2019exemple du sous-formulaire de type "pendule dynamique", on peut souhaiter d\xe9finir une ou plusieurs heures d\u2019alerte par pendule.'),(0,n.kt)("p",null,"Pour r\xe9pondre \xe0 ces besoins, 4D propose les m\xe9canismes suivants :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Utilisation du param\xe8tre "sous-formulaire" avec la commande ',(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT Get name")," afin de d\xe9signer l\u2019objet sous-formulaire et commande ",(0,n.kt)("inlineCode",{parentName:"li"},"OBJECT Get pointer"),"."),(0,n.kt)("li",{parentName:"ul"},"Appel de l\u2019objet conteneur depuis le sous-formulaire via la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"CALL SUBFORM CONTAINER"),","),(0,n.kt)("li",{parentName:"ul"},"Ex\xe9cution d\u2019une m\xe9thode dans le contexte du sous-formulaire via la commande ",(0,n.kt)("inlineCode",{parentName:"li"},"EXECUTE METHOD IN SUBFORM"),".")),(0,n.kt)("h4",a({},{id:"commandes-object-get-pointer-et-object-get-name"}),"Commandes Object get pointer et Object get name"),(0,n.kt)("p",null,"Outre le s\xe9lecteur ",(0,n.kt)("inlineCode",{parentName:"p"},"Objet conteneur sous formulaire"),", la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT Get pointer")," admet un param\xe8tre permettant de pr\xe9ciser dans quel sous-formulaire chercher l\u2019objet dont le nom est pass\xe9 en deuxi\xe8me param\xe8tre. Cette syntaxe n\u2019est utilisable que lorsque le s\xe9lecteur Objet nomm\xe9 est pass\xe9."),(0,n.kt)("p",null,"Par exemple, l\u2019instruction suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")\n')),(0,n.kt)("p",null,'... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. Cette syntaxe permet d\u2019acc\xe9der depuis le formulaire parent \xe0 tout objet se trouvant dans un sous-formulaire. A noter \xe9galement la commande ',(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT Get name")," qui permet de r\xe9cup\xe9rer le nom de l\u2019objet ayant le focus."),(0,n.kt)("h4",a({},{id:"commande-call-subform-container"}),"Commande CALL SUBFORM CONTAINER"),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"CALL SUBFORM CONTAINER")," permet \xe0 une instance de sous-formulaire d\u2019envoyer un \xe9v\xe9nement \xe0 l\u2019objet conteneur du sous-formulaire, qui peut alors le traiter dans le contexte du formulaire parent. L\u2019\xe9v\xe9nement est re\xe7u dans la m\xe9thode de l\u2019objet conteneur. Il peut s\u2019agir \xe0 l\u2019origine de tout \xe9v\xe9nement d\xe9tect\xe9 par le sous-formulaire (clic, glisser-d\xe9poser, etc.)."),(0,n.kt)("p",null,"Le code de l\u2019\xe9v\xe9nement est libre (par exemple, 20000 ou -100). Vous pouvez soit utiliser un code correspondant \xe0 un \xe9v\xe9nement existant (par exemple, 3 pour ",(0,n.kt)("inlineCode",{parentName:"p"},"Sur validation"),'), soit utiliser un code personnalis\xe9. Dans le premier cas, seuls les \xe9v\xe9nements pr\xe9sents dans la liste des \xe9v\xe9nements "cochables" des conteneurs de sous-formulaire peuvent \xeatre utilis\xe9s (cf. Liste des propri\xe9t\xe9s). Dans le second cas, le code ne doit correspondre \xe0 aucun \xe9v\xe9nement formulaire existant. Il est conseill\xe9 d\u2019utiliser une valeur n\xe9gative pour avoir l\u2019assurance que 4D n\u2019utilisera pas ce code dans les versions futures.'),(0,n.kt)("p",null,"Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"CALL SUBFORM CONTAINER"),"."),(0,n.kt)("h4",a({},{id:"commande-execute-method-in-subform"}),"Commande EXECUTE METHOD IN SUBFORM"),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD IN SUBFORM")," permet \xe0 un formulaire ou \xe0 l\u2019un de ses objets de demander l\u2019ex\xe9cution d\u2019une m\xe9thode dans le contexte de l\u2019instance du sous-formulaire, ce qui lui donne acc\xe8s aux variables, objets, etc., du sous-formulaire. Cette m\xe9thode peut en outre recevoir des param\xe8tres."),(0,n.kt)("p",null,"Ce m\xe9canisme est illustr\xe9 dans le sch\xe9ma suivant :"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(533429).Z,width:"1022",height:"267"})),(0,n.kt)("p",null,"Pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE METHOD IN SUBFORM"),"."),(0,n.kt)("h4",a({},{id:"commande-goto-object"}),"Commande GOTO OBJECT"),(0,n.kt)("p",null,"La commande ",(0,n.kt)("inlineCode",{parentName:"p"},"GOTO OBJECT")," peut rechercher l\u2019objet de destination dans le formulaire parent m\xeame si elle ex\xe9cut\xe9e depuis un sous-formulaire."),(0,n.kt)("h2",a({},{id:"propri\xe9t\xe9s-prises-en-charge"}),"Propri\xe9t\xe9s prises en charge"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Border Line Style")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Bottom")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#css-class"}),"Class")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#detail-form"}),"Detail Form")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#double-click-on-empty-row"}),"Double click on empty row")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#double-click-on-row"}),"Double click on row")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#enterable-in-list"}),"Enterable in list")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type"}),"Expression Type")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable"}),"Focusable")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Height")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesAppearance#hide-focus-rectangle"}),"Hide focus rectangle")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesAppearance#horizontal-scroll-bar"}),"Horizontal Scroll Bar")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Horizontal Sizing")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Left")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#list-form"}),"List Form")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesAction#method"}),"Method")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#object-name"}),"Object Name")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesPrint#print-frame"}),"Print Frame")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Right")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#selection-mode"}),"Selection mode")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesSubform#source"}),"Source")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Top")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#type"}),"Type")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable or Expression")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesAppearance#vertical-scroll-bar"}),"Vertical Scroll Bar")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Vertical Sizing")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility"}),"Visibility")," - ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Width")))}d.isMDXComponent=!0},706461:(e,r,t)=>{t.d(r,{Z:()=>n});const n="data:image/png;base64,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"},127885:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/subforms2-fdeb5168781c7d5cf99dcc2d54f75423.png"},454790:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/subforms3-a568914b035307adb69e854c3ec8c659.png"},530377:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/subforms4-27522593ad517729524997a4bd563b97.png"},97110:(e,r,t)=>{t.d(r,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAABZCAIAAABQY9GQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAASjSURBVHhe7dxbjts2GIDRrMsL8iK6Cu+j6FMBb8aLmfImkvIl9TRyFfs/B0ZGokhKedDnIAHy4wuAYKQfIJyW/j//+tvHx8fH57M/NfjJSH89AOAjST9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONIPEI70A4Qj/QDhSD9AONLPO/kDomrvwEakn3ey+QsAb0H6CU36iUn6CU36iUn6eY3z8cdwPLfRJ5SFh9OlnWZ1r59v8sycO+YX4HI6LDdePf36YeATSD8vkCM6Onw+/kr6y17zBmXCesebOU+bXoD5xum4P8Kd+8G7k362V8u/zR+WL+fzeptS4nWKb+Y8r78A6ZmPp9PhTvrr70f7+SjSzwvUPN/WfxlPxqX6RVHkwTKnXZ0u1aFpgyX/N3OGeasH2guQw3/Ov7bZaeW8Lt9D+/kk0s9L3AlyzXYpaL2aD+vRnNnR63I0970cT9ssZzdzmrHVQ+UFSCvLrOVnWTmvy1vPG8O7k35eqNa45neV7CXT9eeqzr3XdcGsLF7t82DO89ILMII/jtK+80ONC/AZpJ/XWiK/TvYy2q8OZV4Kbb10W9x5n0dznpdegOtvj7zdOv35Nt/8SoHfm/SzvcvpuHRzivPS9D6aa3ob7z6tXurNPZ/qpLG2n9zMaaY7PrJ6AdJubfac/ryL8PNhpJ/ttSA3U3tLi6sxOs3Og3OvVxutWpzVHt+fU8xbPfA4/d3PN4C3JP2EtvkLAG9B+glN+olJ+glN+olJ+glN+olJ+glN+olJ+gktvQAQU3sHNiL9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOFIP0A40s87af99LcTT3oGNSD/vZPMXAN6C9BOa9BOT9BOa9BOT9LO3y+nwIzue28D5uDp9qfIC1Bs2h9OlXYPPJf3sbUl/j+4e6e/BLzd/4b3ne8FupJ+99fQvyd01/fV5Xndz6ee3IP3srab/cDzmH7m5q/TXk6Ils80/LF8YbWV2Veyy9uehvZP+0f55vB+Xg3P7uhrLbr7A2sxTe/4yM40srh4V/l/Sz95ayk+XcpB+1kDmNo6jNisf9vm9t1ejXVm+Hrr2n9K/bJonjsGy5HqwjY7rfR/Yk/SztynaNZbH/GsuZTmdk1pO+sFqaZ387ao+SH/fso/349XkdJIfJD9He8ykDT6xHPYi/ext7nc9LlI9UybrwZiWTvrBemmZ/O2q3kl/3rTecx7vx/PgMnUsydKMcvKvy2E30s/e5n4vZ0muZ+rk+kth6exz6b8zdO0m/XnNUvG8fTvOw+M+bfa4Pq1aDc7b9uV9EHYj/ext7neWM5pMzW2m4G6e/u7ODln+W6h+n/EPy+0hk/ooWd8hz7w9bluOlbAD6Se0778Ac9DhXUk/oUk/MUk/oUk/MUk/oW3+AsBbkH5Ck35ikn5CSy8AxNTegY1IP0A40g8QjvQDhCP9AOFIP0A40g8QjvQDhCP9AOGMzn99/QMN4RZfkNPjLQAAAABJRU5ErkJggg=="},533429:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/subforms6-2b2d3b3837144e434b9af3266faa6a82.png"}}]);