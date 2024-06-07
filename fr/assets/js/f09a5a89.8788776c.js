"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92149],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},567451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"privileges",title:"Privileges"},s=void 0,o={unversionedId:"ORDA/privileges",id:"version-20-R4/ORDA/privileges",title:"Privileges",description:"La protection des donn\xe9es tout en permettant un acc\xe8s rapide et facile aux utilisateurs autoris\xe9s est un d\xe9fi majeur pour les applications Web. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/fr/20-R4/ORDA/privileges",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"privileges",title:"Privileges"},sidebar:"docs",previous:{title:"Using a remote datastore",permalink:"/docs/fr/20-R4/ORDA/datastores"},next:{title:"Glossary",permalink:"/docs/fr/20-R4/ORDA/glossary"}},p={},u=[{value:"Vue d\u2019ensemble",id:"vue-densemble",level:2},{value:"Resources",id:"resources",level:2},{value:"Actions de permission",id:"actions-de-permission",level:2},{value:"Privil\xe8ges et R\xf4les",id:"privil\xe8ges-et-r\xf4les",level:2},{value:"Exemple",id:"exemple",level:3},{value:"<code>roles.json</code>",id:"rolesjson",level:2},{value:"<code>Roles_Errors.json</code>",id:"roles_errorsjson",level:3},{value:"Initialisation des privil\xe8ges pour le d\xe9ploiement",id:"initialisation-des-privil\xe8ges-pour-le-d\xe9ploiement",level:2}],d={toc:u};function m(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La protection des donn\xe9es tout en permettant un acc\xe8s rapide et facile aux utilisateurs autoris\xe9s est un d\xe9fi majeur pour les applications Web. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."),(0,a.kt)("h2",r({},{id:"vue-densemble"}),"Vue d\u2019ensemble"),(0,a.kt)("p",null,"L'architecture de s\xe9curit\xe9 ORDA est bas\xe9e sur les concepts de privil\xe8ges, d'actions de permission (lecture, cr\xe9ation, etc.) et de ressources."),(0,a.kt)("p",null,"When users get logged, their session is automatically loaded with associated privilege(s). Les privil\xe8ges sont assign\xe9s \xe0 la session en utilisant la fonction ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R4/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},"session.setPrivileges()")),"."),(0,a.kt)("p",null,"Chaque requ\xeate utilisateur envoy\xe9e au sein de la session est \xe9valu\xe9e par rapport aux privil\xe8ges d\xe9finis dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," du projet."),(0,a.kt)("p",null,"Si un utilisateur tente d'ex\xe9cuter une action et ne dispose pas des droits d'acc\xe8s appropri\xe9s, une erreur de privil\xe8ge est g\xe9n\xe9r\xe9e ou, en cas de permission de lecture manquante sur les attributs, ils ne sont pas envoy\xe9s."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"schema",src:n(55723).Z,width:"960",height:"540"})),(0,a.kt)("h2",r({},{id:"resources"}),"Resources"),(0,a.kt)("p",null,"Vous pouvez assigner des actions de permission sp\xe9cifiques aux ressources expos\xe9es suivantes dans votre projet :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le datastore"),(0,a.kt)("li",{parentName:"ul"},"une dataclass"),(0,a.kt)("li",{parentName:"ul"},"un attribut (y compris calcul\xe9 et alias)"),(0,a.kt)("li",{parentName:"ul"},"une fonction de classe du mod\xe8le de donn\xe9es")),(0,a.kt)("p",null,"Une action de permission d\xe9finie \xe0 un certain niveau est h\xe9rit\xe9e par d\xe9faut aux niveaux inf\xe9rieurs, mais plusieurs niveaux de permissions peuvent \xeatre d\xe9finis :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une action de permission d\xe9finie au niveau du datastore est automatiquement assign\xe9e \xe0 toutes les dataclass."),(0,a.kt)("li",{parentName:"ul"},"Une action de permission d\xe9finie au niveau dataclass remplace le param\xe9trage du datastore (le cas \xe9ch\xe9ant). Par d\xe9faut, tous les attributs de la dataclass h\xe9ritent des permissions de la dataclass."),(0,a.kt)("li",{parentName:"ul"},'Contrairement aux permissions des dataclass, une action de permission d\xe9finie au niveau de l\'attribut ne remplace pas la permission de la dataclass parente, mais y est ajout\xe9e. Par exemple, si vous avez attribu\xe9 le privil\xe8ge "g\xe9n\xe9ral" \xe0 une dataclass et le privil\xe8ge "d\xe9tail" \xe0 un attribut de la dataclass, les deux privil\xe8ges, "g\xe9n\xe9ral" et "d\xe9tail", doivent \xeatre d\xe9finis dans la session afin d\'acc\xe9der \xe0 l\'attribut.')),(0,a.kt)("h2",r({},{id:"actions-de-permission"}),"Actions de permission"),(0,a.kt)("p",null,"Les actions disponibles sont li\xe9es \xe0 la ressource cible."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Actions"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"datastore"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"dataclass"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"attribut"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"fonction du mod\xe8le de donn\xe9es"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"create")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cr\xe9er une entit\xe9 dans n'importe quelle dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cr\xe9er une entit\xe9 dans cette dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cr\xe9er une entit\xe9 avec une valeur diff\xe9rente de la valeur par d\xe9faut autoris\xe9e pour cet attribut (ignor\xe9 pour les attributs alias)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"read")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Lire les attributs de n'importe quelle dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Lire les attributs de cette dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Lire ce contenu d'attribut"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"update")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre \xe0 jour les attributs dans n'importe quelle dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre \xe0 jour les attributs de cette dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mettre \xe0 jour le contenu de cet attribut (ignor\xe9 pour les attributs alias)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"drop")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Supprimer des donn\xe9es dans n'importe quelle dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Supprimer des donn\xe9es dans cette dataclass."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Supprimer une valeur non nulle pour cet attribut (sauf pour les attributs alias et calcul\xe9s)."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"execute")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ex\xe9cuter n'importe quelle fonction du projet (datastore, dataclass, entity selection, entity)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ex\xe9cuter n'importe quelle fonction de dataclass. Les fonctions de dataclass, d'entit\xe9 et d'entity selection sont consid\xe9r\xe9es comme des fonctions de dataclass"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Ex\xe9cuter cette fonction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"describe")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Toutes les dataclass sont disponibles dans l'API /rest/$catalog"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cette dataclass est disponible dans l'API /rest/$catalog"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cet attribut est disponible dans l'API /rest/$catalog."),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cette fonction de dataclass est disponible dans l'API /rest/$catalog")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"promote")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"n/a"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Associe un privil\xe8ge donn\xe9 lors de l'ex\xe9cution de la fonction. Le privil\xe8ge est temporairement ajout\xe9 \xe0 la session et supprim\xe9 \xe0 la fin de l'ex\xe9cution de la fonction. Par mesure de s\xe9curit\xe9, seul le process ex\xe9cutant la fonction re\xe7oit le privil\xe8ge, et non toute la session.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un alias peut \xeatre lu d\xe8s que les privil\xe8ges de session permettent l'acc\xe8s \xe0 l'alias lui-m\xeame, m\xeame si les privil\xe8ges de session ne permettent pas l'acc\xe8s aux attributs r\xe9solvant l'alias."),(0,a.kt)("li",{parentName:"ul"},"Il est possible d'acc\xe9der \xe0 un attribut calcul\xe9 m\xeame s'il n'y a pas de permissions sur les attributs sur lesquels il est construit."),(0,a.kt)("li",{parentName:"ul"},"Valeurs par d\xe9faut : dans l'impl\xe9mentation actuelle, seul ",(0,a.kt)("em",{parentName:"li"},"Null")," est disponible en tant que valeur par d\xe9faut.")),(0,a.kt)("p",null,"Le param\xe9trage des permissions n\xe9cessite d'\xeatre coh\xe9rent, en particulier :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les permissions ",(0,a.kt)("strong",{parentName:"li"},"update")," et ",(0,a.kt)("strong",{parentName:"li"},"drop")," ont \xe9galement besoin d'une permission ",(0,a.kt)("strong",{parentName:"li"},"read")," (mais ",(0,a.kt)("strong",{parentName:"li"},"create")," n'en a pas besoin)"),(0,a.kt)("li",{parentName:"ul"},"La permission ",(0,a.kt)("strong",{parentName:"li"},"promote")," a \xe9galement besoin de la permission ",(0,a.kt)("strong",{parentName:"li"},"describe"),".")),(0,a.kt)("h2",r({},{id:"privil\xe8ges-et-r\xf4les"}),"Privil\xe8ges et R\xf4les"),(0,a.kt)("p",null,"Un ",(0,a.kt)("strong",{parentName:"p"},"privil\xe8ge")," est la capacit\xe9 technique d'ex\xe9cuter des ",(0,a.kt)("strong",{parentName:"p"},"actions")," sur des ",(0,a.kt)("strong",{parentName:"p"},"ressources"),", tandis qu'un ",(0,a.kt)("strong",{parentName:"p"},"r\xf4le"),' est un privil\xe8ge public destin\xe9 \xe0 \xeatre utilis\xe9 par un administrateur. Fondamentalement, un r\xf4le rassemble plusieurs privil\xe8ges pour d\xe9finir un profil utilisateur m\xe9tier. Par exemple, "manageInvoices" pourrait \xeatre un privil\xe8ge tandis que "secr\xe9taire" pourrait \xeatre un r\xf4le (qui inclut "manageInvoices" et d\'autres privil\xe8ges).'),(0,a.kt)("p",null,'Un privil\xe8ge ou un r\xf4le peut \xeatre associ\xe9 \xe0 plusieurs combinaisons "action + ressource". Plusieurs privil\xe8ges peuvent \xeatre associ\xe9s \xe0 une action. Un privil\xe8ge peut inclure d\'autres privil\xe8ges.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous ",(0,a.kt)("strong",{parentName:"p"},"cr\xe9ez")," des privil\xe8ges et/ou des r\xf4les dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," (voir ci-dessous). Vous ",(0,a.kt)("strong",{parentName:"p"},"configurez")," leur port\xe9e en les assignant aux actions de permission appliqu\xe9es aux ressources.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vous ",(0,a.kt)("strong",{parentName:"p"},"autorisez")," les privil\xe8ges et/ou les r\xf4les pour chaque session utilisateur \xe0 l'aide de la fonction ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R4/API/SessionClass#setprivileges"}),(0,a.kt)("inlineCode",{parentName:"a"},".setPrivileges()"))," de la classe ",(0,a.kt)("inlineCode",{parentName:"p"},"Session"),"."))),(0,a.kt)("h3",r({},{id:"exemple"}),"Exemple"),(0,a.kt)("p",null,"Pour permettre un r\xf4le dans une session :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n')),(0,a.kt)("h2",r({},{id:"rolesjson"}),(0,a.kt)("inlineCode",{parentName:"h2"},"roles.json")),(0,a.kt)("p",null,"Le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," d\xe9crit l'ensemble des param\xe8tres de s\xe9curit\xe9 du projet."),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Dans un contexte autre que ",(0,a.kt)("em",{parentName:"p"},"Qodly")," (cloud), vous devez cr\xe9er ce fichier \xe0 l'emplacement suivant : ",(0,a.kt)("inlineCode",{parentName:"p"},"<project folder>/Project/Sources/"),". Voir la section ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R4/Project/architecture#sources"}),"Architecture"),".")),(0,a.kt)("p",null,"La syntaxe du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," est la suivante:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Nom de propri\xe9t\xe9"),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Obligatoire"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection d'objets ",(0,a.kt)("inlineCode",{parentName:"td"},"privilege")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges d\xe9finis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].privilege"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom de privil\xe8ge")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].includes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de noms de privil\xe8ges inclus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"roles"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection d'objets ",(0,a.kt)("inlineCode",{parentName:"td"},"role")),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de r\xf4les d\xe9finis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].role"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom de r\xf4le")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].privileges"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de noms de privil\xe8ges inclus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"permissions"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste d'actions autoris\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"allowed"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection d'objets ",(0,a.kt)("inlineCode",{parentName:"td"},"permission")),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de permissions autoris\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].applyTo"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nom de ",(0,a.kt)("a",r({parentName:"td"},{href:"#resources"}),"ressource")," cible")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].type"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"X"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Type de ","[","ressource","]",'(#resources) : "datastore", "dataclass", "attribute", "method"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].read"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].create"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].update"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].drop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].describe"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].execute"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"[","].promote"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Collection de cha\xeenes"),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Liste de privil\xe8ges")))),(0,a.kt)("admonition",r({},{title:"Rappel",type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Le nom de privil\xe8ge \"WebAdmin\" est r\xe9serv\xe9 \xe0 l'application. Il est d\xe9conseill\xe9 d'utiliser ce nom pour les privil\xe8ges personnalis\xe9s."),(0,a.kt)("li",{parentName:"ul"},"Les noms ",(0,a.kt)("inlineCode",{parentName:"li"},"privileges")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"roles")," sont insensibles \xe0 la casse."))),(0,a.kt)("h3",r({},{id:"roles_errorsjson"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Roles_Errors.json")),(0,a.kt)("p",null,"Le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," est analys\xe9 par 4D au d\xe9marrage. Vous devez red\xe9marrer l'application pour que les modifications dans ce fichier soient prises en compte."),(0,a.kt)("p",null,"En cas d'erreur(s) lors de l'analyse du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json"),", 4D charge le projet mais d\xe9sactive la protection globale d'acc\xe8s - cela permet au d\xe9veloppeur d'acc\xe9der aux fichiers et de corriger l'erreur. An error file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," is generated in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R4/Project/architecture#logs"}),(0,a.kt)("inlineCode",{parentName:"a"},"Logs")," folder of the project")," and describes the error line(s). This file is automatically deleted when the ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," file no longer contains error(s)."),(0,a.kt)("p",null,"It is recommended to check at startup if a ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles_Errors.json")," file exists in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/20-R4/Project/architecture#logs"}),"Logs folder"),", which means that there was a parsing error and that accesses will not limited. Vous pouvez \xe9crire par exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',title:'"/Sources/DatabaseMethods/onStartup.4dm"'}),'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if\n QUIT 4D\nEnd if \n')),(0,a.kt)("h2",r({},{id:"initialisation-des-privil\xe8ges-pour-le-d\xe9ploiement"}),"Initialisation des privil\xe8ges pour le d\xe9ploiement"),(0,a.kt)("p",null,"Par d\xe9faut, si aucun param\xe8tre sp\xe9cifique n'est d\xe9fini dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json"),", les acc\xe8s ne sont pas limit\xe9s. Cette configuration vous permet de d\xe9velopper l'application sans avoir \xe0 vous soucier des acc\xe8s."),(0,a.kt)("p",null,"Cependant, lorsque l'application est sur le point d'\xeatre d\xe9ploy\xe9e, une bonne pratique consiste \xe0 verrouiller tous les privil\xe8ges, puis \xe0 configurer le fichier pour n'ouvrir que les parties contr\xf4l\xe9es aux sessions autoris\xe9es. Pour verrouiller tous les privil\xe8ges sur toutes les ressources, mettez le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"roles.json")," suivant dans votre dossier de projet (il inclut des exemples de m\xe9thodes) :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json",metastring:'title="/Project/Sources/roles.json"',title:'"/Project/Sources/roles.json"'}),'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n')))}m.isMDXComponent=!0},55723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"}}]);