"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85179],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},517485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"webAdmin",title:"WebAdmin"},o=void 0,l={unversionedId:"Admin/webAdmin",id:"version-20-R3/Admin/webAdmin",title:"WebAdmin",description:"4D et 4D Server ont un composant int\xe9gr\xe9 appel\xe9 WebAdmin qui permet de lancer un serveur web qui fournit un acc\xe8s s\xe9curis\xe9 \xe0 des outils de gestion de donn\xe9es, tel que l'Explorateur de donn\xe9es Web. Ce serveur est accessible en local ou \xe0 distance, depuis un navigateur ou une application web, et permet d'acc\xe9der \xe0 l'application 4D associ\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R3/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/fr/Admin/webAdmin",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/fr/category/web-administration"},next:{title:"Explorateur de donn\xe9es",permalink:"/docs/fr/Admin/dataExplorer"}},u={},c=[{value:"D\xe9marrer le WebAdmin web server",id:"d\xe9marrer-le-webadmin-web-server",level:2},{value:"Lancement au d\xe9marrage",id:"lancement-au-d\xe9marrage",level:3},{value:"D\xe9marrage et arr\xeat",id:"d\xe9marrage-et-arr\xeat",level:3},{value:"Propri\xe9t\xe9s WebAdmin",id:"propri\xe9t\xe9s-webadmin",level:2},{value:"Fen\xeatre de configuration",id:"fen\xeatre-de-configuration",level:3},{value:"Lancer le serveur WebAdmin au d\xe9marrage",id:"lancer-le-serveur-webadmin-au-d\xe9marrage",level:4},{value:"Connexions HTTP sur localhost accept\xe9es",id:"connexions-http-sur-localhost-accept\xe9es",level:4},{value:"Port HTTP",id:"port-http",level:4},{value:"HTTPS Accept\xe9",id:"https-accept\xe9",level:4},{value:"Port HTTPS",id:"port-https",level:4},{value:"Chemin du dossier de certificat",id:"chemin-du-dossier-de-certificat",level:4},{value:"Mode du debug log",id:"mode-du-debug-log",level:4},{value:"Cl\xe9 d&#39;acc\xe8s",id:"cl\xe9-dacc\xe8s",level:4},{value:"Activer l&#39;acc\xe8s \xe0 Qodly Studio",id:"activer-lacc\xe8s-\xe0-qodly-studio",level:4},{value:"Configuration de WebAdmin sans interface",id:"configuration-de-webadmin-sans-interface",level:2},{value:"Authentification et Session",id:"authentification-et-session",level:2}],d={toc:c};function p(e){var{components:t}=e,s=i(e,["components"]);return(0,a.kt)("wrapper",r({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D et 4D Server ont un composant int\xe9gr\xe9 appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," qui permet de lancer un serveur web qui fournit un acc\xe8s s\xe9curis\xe9 \xe0 des outils de gestion de donn\xe9es, tel que l'",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Admin/dataExplorer"}),"Explorateur de donn\xe9es Web"),". Ce serveur est accessible en local ou \xe0 distance, depuis un navigateur ou une application web, et permet d'acc\xe9der \xe0 l'application 4D associ\xe9e."),(0,a.kt)("p",null,"Le WebAdmin g\xe8re l'authentification des utilisateurs via des privil\xe8ges \"WebAdmin\", leur permettant d'ouvrir des sessions en tant qu'administrateurs et d'acc\xe9der \xe0 des interfaces d\xe9di\xe9es."),(0,a.kt)("p",null,"Cette fonctionnalit\xe9 est disponible pour les applications 4D avec ou sans interfaces."),(0,a.kt)("h2",r({},{id:"d\xe9marrer-le-webadmin-web-server"}),"D\xe9marrer le WebAdmin web server"),(0,a.kt)("p",null,"Par d\xe9faut, le serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," ne d\xe9marre pas automatiquement. Il faut configurer son lancement automatique au d\xe9marrage, ou (dans les versions avec une interface) le lancer manuellement via un menu."),(0,a.kt)("h3",r({},{id:"lancement-au-d\xe9marrage"}),"Lancement au d\xe9marrage"),(0,a.kt)("p",null,"Vous pouvez configurer le server web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," pour qu'il se lance au d\xe9marrage de 4D ou 4D Server (avant l'ouverture d'un projet)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si vous utilisez une application 4D avec une interface, s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"li"},"Fichier > Administration Web > Propri\xe9t\xe9s..."),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(461234).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"Cochez l'option ",(0,a.kt)("strong",{parentName:"p"},"Lancer le serveur WebAdmin au d\xe9marrage")," dans la bo\xeete de dialogue des param\xe8tres :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(940016).Z,width:"702",height:"205"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Que vous utilisiez une application 4D avec ou sans interface, vous pouvez activer le lancement automatique au d\xe9marrage en utilisant l'argument suivant dans ",(0,a.kt)("em",{parentName:"li"},"L'interface de ligne de commande")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si le port TCP utilis\xe9 par le serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," (",(0,a.kt)("a",r({parentName:"p"},{href:"#https-port"}),"HTTPS")," ou ",(0,a.kt)("a",r({parentName:"p"},{href:"#http-port"}),"HTTP")," selon les param\xe8tres) n'est pas disponible au d\xe9marrage, 4D essaiera avec les 20 ports suivants et utilisera le premier disponible. Si aucun port n'est disponible, le serveur web ne se lance pas et un message d'erreur s'affiche. Pour les applications sans interface, il appara\xeet dans la console.")),(0,a.kt)("h3",r({},{id:"d\xe9marrage-et-arr\xeat"}),"D\xe9marrage et arr\xeat"),(0,a.kt)("p",null,"Si vous utilisez une application 4D avec une interface, vous pouvez d\xe9marrer ou arr\xeater le serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," de votre projet \xe0 tout moment :"),(0,a.kt)("p",null,"S\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},"Fichier> Administration web > D\xe9marrer le serveur"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(138294).Z,width:"473",height:"354"})),(0,a.kt)("p",null,"Le menu affiche ",(0,a.kt)("strong",{parentName:"p"},"Arr\xeater le Server")," une fois le serveur lanc\xe9. S\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},"Arr\xeater le Server")," pour arr\xeater le serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin"),"."),(0,a.kt)("h2",r({},{id:"propri\xe9t\xe9s-webadmin"}),"Propri\xe9t\xe9s WebAdmin"),(0,a.kt)("p",null,"La configuration du composant ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," est obligatoire, en particulier pour d\xe9finir la ",(0,a.kt)("a",r({parentName:"p"},{href:"#access-key"}),(0,a.kt)("strong",{parentName:"a"},"cl\xe9 d'acc\xe8s")),". Par d\xe9faut, quand la cl\xe9 d'acc\xe8s n'est pas configur\xe9e, les connexions via url ne sont pas autoris\xe9es."),(0,a.kt)("p",null,"Vous pouvez configurer le composant ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," dans la ",(0,a.kt)("a",r({parentName:"p"},{href:"#settings-dialog-box"}),"fen\xeatre de configuration"),"(voir ci-dessous)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez une application 4D sans interface, vous pouvez utiliser des ",(0,a.kt)("a",r({parentName:"p"},{href:"#webadmin-headless-configuration"}),"arguments de ",(0,a.kt)("em",{parentName:"a"},"l'interface de ligne de commande"))," pour d\xe9finir des param\xe8tres de base. La d\xe9finition de param\xe8tres avanc\xe9s se fait via le fichier de param\xe8tres.")),(0,a.kt)("h3",r({},{id:"fen\xeatre-de-configuration"}),"Fen\xeatre de configuration"),(0,a.kt)("p",null,"Pour ouvrir la fen\xeatre de configuration des param\xe8tres d'administration web, s\xe9lectionnez ",(0,a.kt)("strong",{parentName:"p"},"Fichier > Administration web > Propri\xe9t\xe9s..."),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(461234).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"La fen\xeatre suivante s'affiche :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(376537).Z,width:"702",height:"462"})),(0,a.kt)("h4",r({},{id:"lancer-le-serveur-webadmin-au-d\xe9marrage"}),"Lancer le serveur WebAdmin au d\xe9marrage"),(0,a.kt)("p",null,"Cochez cette option pour lancer le serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," automatiquement au d\xe9marrage de 4D ou 4D Server (voir ",(0,a.kt)("a",r({parentName:"p"},{href:"#launching-at-startup"}),"ci-dessus"),"). Cette option n'est pas coch\xe9e par d\xe9faut."),(0,a.kt)("h4",r({},{id:"connexions-http-sur-localhost-accept\xe9es"}),"Connexions HTTP sur localhost accept\xe9es"),(0,a.kt)("p",null,"Quand cette option est coch\xe9e, il est possible de se connecter au serveur ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," via HTTP sur la m\xeame machine que l'application 4D. Cette option est activ\xe9e par d\xe9faut."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les connections HTTP autres que sur localhost ne sont jamais accept\xe9es."),(0,a.kt)("li",{parentName:"ul"},"M\xeame si cette option est activ\xe9e, quand ",(0,a.kt)("a",r({parentName:"li"},{href:"#accept-https"}),"HTTPS Accept\xe9")," est activ\xe9 et que la configuration TLS est valide, les connections sur localhost se font via HTTPS.")),(0,a.kt)("h4",r({},{id:"port-http"}),"Port HTTP"),(0,a.kt)("p",null,"Num\xe9ro de port utilis\xe9 pour les connexions au serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," via HTTP quand ",(0,a.kt)("strong",{parentName:"p"},"Connexions HTTP sur localhost accept\xe9es")," est activ\xe9. La valeur par d\xe9faut est 7080."),(0,a.kt)("h4",r({},{id:"https-accept\xe9"}),"HTTPS Accept\xe9"),(0,a.kt)("p",null,"Lorsque cette option est activ\xe9, vous pourrez vous connecter au serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," via HTTPS. Cette option est activ\xe9e par d\xe9faut."),(0,a.kt)("h4",r({},{id:"port-https"}),"Port HTTPS"),(0,a.kt)("p",null,"Num\xe9ro de port utilis\xe9 pour les connexions au serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," via HTTPS quand ",(0,a.kt)("strong",{parentName:"p"},"HTTPS accept\xe9")," est activ\xe9. La valeur par d\xe9faut est 7443."),(0,a.kt)("h4",r({},{id:"chemin-du-dossier-de-certificat"}),"Chemin du dossier de certificat"),(0,a.kt)("p",null,"Chemin du dossier qui contient les fichiers de certificat TLS. Par d\xe9faut, le chemin du dossier de certificat est vide, et 4D ou 4D server utilise les fichiers de certificat contenus dans l'application 4D (les certificats personnalis\xe9s doivent \xeatre stock\xe9s au niveau du dossier de projet)."),(0,a.kt)("h4",r({},{id:"mode-du-debug-log"}),"Mode du debug log"),(0,a.kt)("p",null,"Statut ou format du fichier de logs des requ\xeates HTTP (HTTPDebugLog_",(0,a.kt)("em",{parentName:"p"},"nn"),'.txt, stock\xe9 dans le dossier "Logs" de l\'application. --',(0,a.kt)("em",{parentName:"p"},"nn")," repr\xe9sente le num\xe9ro du fichier). Les options suivantes sont disponibles :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"D\xe9sactiv\xe9")," (valeur par d\xe9faut)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Avec tous les body")," - activ\xe9 avec toutes les parts des body des requ\xeates et r\xe9ponses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sans les body")," - activ\xe9 sans les parts des body (la taille du body est indiqu\xe9e)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Avec les body des requ\xeates")," - activ\xe9 avec les parts des body uniquement dans les requ\xeates"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Avec la r\xe9ponse corps")," - activ\xe9 avec les parts des body uniquement dans les r\xe9ponses")),(0,a.kt)("h4",r({},{id:"cl\xe9-dacc\xe8s"}),"Cl\xe9 d'acc\xe8s"),(0,a.kt)("p",null,"La configuration d'une cl\xe9 d'acc\xe8s est obligatoire pour d\xe9bloquer l'acc\xe8s au serveur web ",(0,a.kt)("inlineCode",{parentName:"p"},"webAdmin")," via des URL (l'acc\xe8s via les menus ne requiert pas de cl\xe9 d'acc\xe8s). Lorsque aucune cl\xe9 d'acc\xe8s n'est d\xe9finie, il n'est pas possible pour les clients web d'acc\xe9der aux interfaces d'administration web telles que l'",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Admin/dataExplorer"}),"Explorateur de donn\xe9es")," via des URL. En cas de requ\xeate de connexion, une page d'erreur est retourn\xe9e:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(946520).Z,width:"193",height:"126"})),(0,a.kt)("p",null,"Une cl\xe9 d'acc\xe8s est similaire \xe0 un mot de passe, mais sans login associ\xe9."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pour d\xe9finir une nouvelle cl\xe9 d'acc\xe8s, cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"li"},"D\xe9finir"),", entrez une cha\xeene de caract\xe8res et cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"OK"),". Une fois fait, le label du bouton devient ",(0,a.kt)("strong",{parentName:"li"},"Modifier"),"."),(0,a.kt)("li",{parentName:"ul"},"Pour modifier la cl\xe9 d'acc\xe8s, cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Modifier"),", entrez la nouvelle cl\xe9 d'acc\xe8s et cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"OK"),"."),(0,a.kt)("li",{parentName:"ul"},"Pour supprimer la cl\xe9 d'acc\xe8s, cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"Modifier"),", laissez le champ d'entr\xe9e vide et cliquez sur ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("h4",r({},{id:"activer-lacc\xe8s-\xe0-qodly-studio"}),"Activer l'acc\xe8s \xe0 Qodly Studio"),(0,a.kt)("admonition",r({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Cette option n'appara\xeet que si la licence Qodly Studio est activ\xe9e.")),(0,a.kt)("p",null,"Cette option permet l'acc\xe8s utilisateur \xe0 ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/WebServer/qodly-studio"}),"Qodly Studio")," au niveau de l'application 4D. Notez que vous devez \xe9galement ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/settings/web#enable-access-to-qodly-studio"}),"activer l'acc\xe8s au niveau de chaque projet"),"."),(0,a.kt)("h2",r({},{id:"configuration-de-webadmin-sans-interface"}),"Configuration de WebAdmin sans interface"),(0,a.kt)("p",null,"Pour g\xe9rer le contenu du fichier, vous pouvez utiliser la ",(0,a.kt)("a",r({parentName:"p"},{href:"#settings-dialog-box"}),"fen\xeatre de param\xe8tres WebAdmin")," de l'application 4D avec une interface, et la lancer sans interface ensuite. Par d\xe9faut, il existe un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," par application 4D et 4D Server."),(0,a.kt)("p",null,"Dans le cas d'une application 4D ou 4D Server sans interface, vous pouvez configurer et utiliser le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," par d\xe9faut, ou d\xe9signer un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," personnalis\xe9."),(0,a.kt)("p",null,"Pour g\xe9rer le contenu du fichier, vous pouvez utiliser la ",(0,a.kt)("a",r({parentName:"p"},{href:"#settings-dialog-box"}),"fen\xeatre de param\xe8tres WebAdmin")," de l'application 4D avec une interface, et la lancer sans interface ensuite. Par d\xe9faut, il existe un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," par application 4D et 4D Server."),(0,a.kt)("p",null,"Vous pouvez aussi d\xe9finir un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings"),". (format XML) et l'utiliser \xe0 la place du fichier par d\xe9faut. Plusieurs arguments d\xe9di\xe9s sont disponibles dans ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/Admin/cli"}),"l'interface de ligne de commande")," pour prendre en charge cette fonctionnalit\xe9."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cette cl\xe9 d'acc\xe8s n'est pas stock\xe9e de fa\xe7on transparente dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings"),".")),(0,a.kt)("p",null,"Voici un exemple :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n')),(0,a.kt)("h2",r({},{id:"authentification-et-session"}),"Authentification et Session"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorsqu'on acc\xe8de \xe0 une page de gestion web en entrant une URL et sans identification pr\xe9alable, une authentification est n\xe9cessaire. L'utilisateur doit entrer la ",(0,a.kt)("a",r({parentName:"p"},{href:"#access-key"}),"cl\xe9 d'acc\xe8s")," dans une fen\xeatre d'authentification. Si aucune cl\xe9 d'acc\xe8s n'a \xe9t\xe9 d\xe9finie dans les propri\xe9t\xe9s ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", aucun acc\xe8s via URL n'est possible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Qand une page d'administration web est ouverte directement depuis un menu 4D ou 4D Server, tel que ",(0,a.kt)("strong",{parentName:"p"},"Enregistrements> Data Explorer"),"ou",(0,a.kt)("strong",{parentName:"p"},"Fen\xeatre> Explorateur de donn\xe9es"),"(4D Server), l'acc\xe8s est autoris\xe9 sans authentification."))),(0,a.kt)("p",null,"Une fois l'acc\xe8s autoris\xe9, une ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/fr/WebServer/sessions"}),"session web"),' est cr\xe9\xe9e avec les privil\xe8ges "WebAdmin" sur l\'application 4D. Tant que la session courante a le privil\xe8ge "WebAdmin", le composant ',(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," sert les pages demand\xe9es dans les requ\xeates."))}p.isMDXComponent=!0},946520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},461234:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},138294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},940016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},376537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"}}]);