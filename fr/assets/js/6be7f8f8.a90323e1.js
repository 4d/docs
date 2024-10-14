"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79299],{645113:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=s(474848),r=s(28453);const t={id:"webAdmin",title:"WebAdmin"},a=void 0,d={id:"Admin/webAdmin",title:"WebAdmin",description:"4D et 4D Server ont un composant int\xe9gr\xe9 appel\xe9 WebAdmin qui permet de lancer un serveur web qui fournit un acc\xe8s s\xe9curis\xe9 \xe0 des outils de gestion de donn\xe9es, tel que l'Explorateur de donn\xe9es Web. Ce serveur est accessible en local ou \xe0 distance, depuis un navigateur ou une application web, et permet d'acc\xe9der \xe0 l'application 4D associ\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/fr/20/Admin/webAdmin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/fr/20/category/web-administration"},next:{title:"Explorateur de donn\xe9es",permalink:"/docs/fr/20/Admin/dataExplorer"}},c={},l=[{value:"D\xe9marrer le serveur web WebAdmin",id:"d\xe9marrer-le-serveur-web-webadmin",level:2},{value:"Lancement au d\xe9marrage",id:"lancement-au-d\xe9marrage",level:3},{value:"D\xe9marrage et arr\xeat",id:"d\xe9marrage-et-arr\xeat",level:3},{value:"Propri\xe9t\xe9s WebAdmin",id:"propri\xe9t\xe9s-webadmin",level:2},{value:"Bo\xeete de dialogue des Propri\xe9t\xe9s",id:"bo\xeete-de-dialogue-des-propri\xe9t\xe9s",level:3},{value:"D\xe9marrage automatique de l&#39;admin du serveur web",id:"d\xe9marrage-automatique-de-ladmin-du-serveur-web",level:4},{value:"Connexions HTTP sur localhost accept\xe9es",id:"connexions-http-sur-localhost-accept\xe9es",level:4},{value:"Port HTTP",id:"port-http",level:4},{value:"HTTPS Accept\xe9",id:"https-accept\xe9",level:4},{value:"Port HTTPS",id:"port-https",level:4},{value:"Chemin du dossier de certificat",id:"chemin-du-dossier-de-certificat",level:4},{value:"Mode du debug log",id:"mode-du-debug-log",level:4},{value:"Cl\xe9 d&#39;acc\xe8s",id:"cl\xe9-dacc\xe8s",level:4},{value:"Configuration de WebAdmin sans interface",id:"configuration-de-webadmin-sans-interface",level:2},{value:"Authentification et Session",id:"authentification-et-session",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["4D et 4D Server ont un composant int\xe9gr\xe9 appel\xe9 ",(0,i.jsx)(n.code,{children:"WebAdmin"})," qui permet de lancer un serveur web qui fournit un acc\xe8s s\xe9curis\xe9 \xe0 des outils de gestion de donn\xe9es, tel que l'",(0,i.jsx)(n.a,{href:"/docs/fr/20/Admin/dataExplorer",children:"Explorateur de donn\xe9es Web"}),". Ce serveur est accessible en local ou \xe0 distance, depuis un navigateur ou une application web, et permet d'acc\xe9der \xe0 l'application 4D associ\xe9e."]}),"\n",(0,i.jsx)(n.p,{children:"Le WebAdmin g\xe8re l'authentification des utilisateurs via des privil\xe8ges \"WebAdmin\", leur permettant d'ouvrir des sessions en tant qu'administrateurs et d'acc\xe9der \xe0 des interfaces d\xe9di\xe9es."}),"\n",(0,i.jsx)(n.p,{children:"Cette fonctionnalit\xe9 est disponible pour les applications 4D avec ou sans interfaces."}),"\n",(0,i.jsx)(n.h2,{id:"d\xe9marrer-le-serveur-web-webadmin",children:"D\xe9marrer le serveur web WebAdmin"}),"\n",(0,i.jsxs)(n.p,{children:["Par d\xe9faut, le serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," ne d\xe9marre pas automatiquement. Il faut configurer son lancement automatique au d\xe9marrage, ou (dans les versions avec une interface) le lancer manuellement via un menu."]}),"\n",(0,i.jsx)(n.h3,{id:"lancement-au-d\xe9marrage",children:"Lancement au d\xe9marrage"}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez configurer le server web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," pour qu'il se lance au d\xe9marrage de 4D ou 4D Server (avant l'ouverture d'un projet)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si vous utilisez une application 4D avec une interface, s\xe9lectionnez ",(0,i.jsx)(n.strong,{children:"Fichier > Administration Web > Propri\xe9t\xe9s..."}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(785853).A+"",width:"470",height:"294"})}),"\n",(0,i.jsxs)(n.p,{children:["Cochez l'option ",(0,i.jsx)(n.strong,{children:"D\xe9marrage de l'admin du serveur web"})," dans la fen\xeatre des param\xe8tres :"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(681964).A+"",width:"702",height:"205"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Que vous utilisiez une application 4D avec ou sans interface, vous pouvez activer le lancement automatique au d\xe9marrage en utilisant l'argument suivant dans ",(0,i.jsx)(n.em,{children:"L'interface de ligne de commande"})," :"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"open ~/Desktop/4D.app --webadmin-auto-start true\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Si le port TCP utilis\xe9 par le serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," (",(0,i.jsx)(n.a,{href:"#https-port",children:"HTTPS"})," ou ",(0,i.jsx)(n.a,{href:"#http-port",children:"HTTP"})," selon les param\xe8tres) n'est pas disponible au d\xe9marrage, 4D essaiera avec les 20 ports suivants et utilisera le premier disponible. Si aucun port n'est disponible, le serveur web ne se lance pas et un message d'erreur s'affiche. Pour les applications sans interface, il appara\xeet dans la console."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"d\xe9marrage-et-arr\xeat",children:"D\xe9marrage et arr\xeat"}),"\n",(0,i.jsxs)(n.p,{children:["Si vous utilisez une application 4D avec une interface, vous pouvez d\xe9marrer ou arr\xeater le serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," de votre projet \xe0 tout moment :"]}),"\n",(0,i.jsxs)(n.p,{children:["S\xe9lectionnez ",(0,i.jsx)(n.strong,{children:"Fichier> Administration web > D\xe9marrer le serveur"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(202086).A+"",width:"473",height:"354"})}),"\n",(0,i.jsxs)(n.p,{children:["Le menu affiche ",(0,i.jsx)(n.strong,{children:"Arr\xeater le Server"})," une fois le serveur lanc\xe9. S\xe9lectionnez ",(0,i.jsx)(n.strong,{children:"Arr\xeater le Server"})," pour arr\xeater le serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"propri\xe9t\xe9s-webadmin",children:"Propri\xe9t\xe9s WebAdmin"}),"\n",(0,i.jsxs)(n.p,{children:["La configuration du composant ",(0,i.jsx)(n.code,{children:"WebAdmin"})," est obligatoire, en particulier pour d\xe9finir la ",(0,i.jsx)(n.a,{href:"#access-key",children:(0,i.jsx)(n.strong,{children:"cl\xe9 d'acc\xe8s"})}),". Par d\xe9faut, quand la cl\xe9 d'acc\xe8s n'est pas configur\xe9e, les connexions via url ne sont pas autoris\xe9es."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez configurer le composant ",(0,i.jsx)(n.code,{children:"WebAdmin"})," dans la ",(0,i.jsx)(n.a,{href:"#settings-dialog-box",children:"fen\xeatre de configuration"}),"(voir ci-dessous)."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Si vous utilisez une application 4D sans interface, vous pouvez utiliser des ",(0,i.jsxs)(n.a,{href:"#webadmin-headless-configuration",children:["arguments de ",(0,i.jsx)(n.em,{children:"l'interface de ligne de commande"})]})," pour d\xe9finir des param\xe8tres de base. La d\xe9finition de param\xe8tres avanc\xe9s se fait via le fichier de param\xe8tres."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bo\xeete-de-dialogue-des-propri\xe9t\xe9s",children:"Bo\xeete de dialogue des Propri\xe9t\xe9s"}),"\n",(0,i.jsxs)(n.p,{children:["Pour ouvrir la fen\xeatre de configuration des param\xe8tres d'administration web, s\xe9lectionnez ",(0,i.jsx)(n.strong,{children:"Fichier > Administration web > Propri\xe9t\xe9s..."}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(785853).A+"",width:"470",height:"294"})}),"\n",(0,i.jsx)(n.p,{children:"La fen\xeatre suivante s'affiche :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(147332).A+"",width:"702",height:"462"})}),"\n",(0,i.jsx)(n.h4,{id:"d\xe9marrage-automatique-de-ladmin-du-serveur-web",children:"D\xe9marrage automatique de l'admin du serveur web"}),"\n",(0,i.jsxs)(n.p,{children:["Cochez cette option pour lancer le serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," automatiquement au d\xe9marrage de 4D ou 4D Server (voir ",(0,i.jsx)(n.a,{href:"#launching-at-startup",children:"ci-dessus"}),"). Cette option n'est pas coch\xe9e par d\xe9faut."]}),"\n",(0,i.jsx)(n.h4,{id:"connexions-http-sur-localhost-accept\xe9es",children:"Connexions HTTP sur localhost accept\xe9es"}),"\n",(0,i.jsxs)(n.p,{children:["Quand cette option est coch\xe9e, il est possible de se connecter au serveur ",(0,i.jsx)(n.code,{children:"WebAdmin"})," via HTTP sur la m\xeame machine que l'application 4D. Cette option est activ\xe9e par d\xe9faut."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les connections HTTP autres que sur localhost ne sont jamais accept\xe9es."}),"\n",(0,i.jsxs)(n.li,{children:["M\xeame si cette option est activ\xe9e, quand ",(0,i.jsx)(n.a,{href:"#accept-https",children:"HTTPS Accept\xe9"})," est activ\xe9 et que la configuration TLS est valide, les connections sur localhost se font via HTTPS."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"port-http",children:"Port HTTP"}),"\n",(0,i.jsxs)(n.p,{children:["Num\xe9ro de port utilis\xe9 pour les connexions au serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," via HTTP quand ",(0,i.jsx)(n.strong,{children:"Connexions HTTP sur localhost accept\xe9es"})," est activ\xe9. La valeur par d\xe9faut est 7080."]}),"\n",(0,i.jsx)(n.h4,{id:"https-accept\xe9",children:"HTTPS Accept\xe9"}),"\n",(0,i.jsxs)(n.p,{children:["Lorsque cette option est activ\xe9, vous pourrez vous connecter au serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," via HTTPS. Cette option est activ\xe9e par d\xe9faut."]}),"\n",(0,i.jsx)(n.h4,{id:"port-https",children:"Port HTTPS"}),"\n",(0,i.jsxs)(n.p,{children:["Num\xe9ro de port utilis\xe9 pour les connexions au serveur web ",(0,i.jsx)(n.code,{children:"WebAdmin"})," via HTTPS quand ",(0,i.jsx)(n.strong,{children:"HTTPS accept\xe9"})," est activ\xe9. La valeur par d\xe9faut est 7443."]}),"\n",(0,i.jsx)(n.h4,{id:"chemin-du-dossier-de-certificat",children:"Chemin du dossier de certificat"}),"\n",(0,i.jsx)(n.p,{children:"Chemin du dossier qui contient les fichiers de certificat TLS. Par d\xe9faut, le chemin du dossier de certificat est vide, et 4D ou 4D server utilise les fichiers de certificat contenus dans l'application 4D (les certificats personnalis\xe9s doivent \xeatre stock\xe9s au niveau du dossier de projet)."}),"\n",(0,i.jsx)(n.h4,{id:"mode-du-debug-log",children:"Mode du debug log"}),"\n",(0,i.jsxs)(n.p,{children:["Statut ou format du fichier de logs des requ\xeates HTTP (HTTPDebugLog_",(0,i.jsx)(n.em,{children:"nn"}),'.txt, stock\xe9 dans le dossier "Logs" de l\'application. --',(0,i.jsx)(n.em,{children:"nn"})," repr\xe9sente le num\xe9ro du fichier). Les options suivantes sont disponibles :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"D\xe9sactiv\xe9"})," (valeur par d\xe9faut)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avec tous les body"})," - activ\xe9 avec toutes les parts des body des requ\xeates et r\xe9ponses"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sans les body"})," - activ\xe9 sans les parts des body (la taille du body est indiqu\xe9e)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avec les body des requ\xeates"})," - activ\xe9 avec les parts des body uniquement dans les requ\xeates"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avec la r\xe9ponse corps"})," - activ\xe9 avec les parts des body uniquement dans les r\xe9ponses"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"cl\xe9-dacc\xe8s",children:"Cl\xe9 d'acc\xe8s"}),"\n",(0,i.jsxs)(n.p,{children:["La configuration d'une cl\xe9 d'acc\xe8s est obligatoire pour d\xe9bloquer l'acc\xe8s au serveur web ",(0,i.jsx)(n.code,{children:"webAdmin"})," via des URL (l'acc\xe8s via les menus ne requiert pas de cl\xe9 d'acc\xe8s). Lorsque aucune cl\xe9 d'acc\xe8s n'est d\xe9finie, il n'est pas possible pour les clients web d'acc\xe9der aux interfaces d'administration web telles que l'",(0,i.jsx)(n.a,{href:"/docs/fr/20/Admin/dataExplorer",children:"Explorateur de donn\xe9es"})," via des URL. En cas de requ\xeate de connexion, une page d'erreur est retourn\xe9e:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt-text",src:s(392340).A+"",width:"193",height:"126"})}),"\n",(0,i.jsx)(n.p,{children:"Une cl\xe9 d'acc\xe8s est similaire \xe0 un mot de passe, mais sans login associ\xe9."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour d\xe9finir une nouvelle cl\xe9 d'acc\xe8s, cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"D\xe9finir"}),", entrez une cha\xeene de caract\xe8res et cliquez sur ",(0,i.jsx)(n.strong,{children:"OK"}),". Une fois fait, le label du bouton devient ",(0,i.jsx)(n.strong,{children:"Modifier"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Pour modifier la cl\xe9 d'acc\xe8s, cliquez sur ",(0,i.jsx)(n.strong,{children:"Modifier"}),", entrez la nouvelle cl\xe9 d'acc\xe8s et cliquez sur ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Pour supprimer la cl\xe9 d'acc\xe8s, cliquez sur ",(0,i.jsx)(n.strong,{children:"Modifier"}),", laissez le champ d'entr\xe9e vide et cliquez sur ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-de-webadmin-sans-interface",children:"Configuration de WebAdmin sans interface"}),"\n",(0,i.jsxs)(n.p,{children:["Pour g\xe9rer le contenu du fichier, vous pouvez utiliser la ",(0,i.jsx)(n.a,{href:"#settings-dialog-box",children:"fen\xeatre de param\xe8tres WebAdmin"})," de l'application 4D avec une interface, et la lancer sans interface ensuite. Par d\xe9faut, il existe un fichier ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})," par application 4D et 4D Server."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans le cas d'une application 4D ou 4D Server sans interface, vous pouvez configurer et utiliser le fichier ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})," par d\xe9faut, ou d\xe9signer un fichier ",(0,i.jsx)(n.code,{children:".4DSettings"})," personnalis\xe9."]}),"\n",(0,i.jsxs)(n.p,{children:["Pour g\xe9rer le contenu du fichier, vous pouvez utiliser la ",(0,i.jsx)(n.a,{href:"#settings-dialog-box",children:"fen\xeatre de param\xe8tres WebAdmin"})," de l'application 4D avec une interface, et la lancer sans interface ensuite. Par d\xe9faut, il existe un fichier ",(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})," par application 4D et 4D Server."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez aussi d\xe9finir un fichier ",(0,i.jsx)(n.code,{children:".4DSettings"}),". (format XML) et l'utiliser \xe0 la place du fichier par d\xe9faut. Plusieurs arguments d\xe9di\xe9s sont disponibles dans ",(0,i.jsx)(n.a,{href:"/docs/fr/20/Admin/cli",children:"l'interface de ligne de commande"})," pour prendre en charge cette fonctionnalit\xe9."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Cette cl\xe9 d'acc\xe8s n'est pas stock\xe9e de fa\xe7on transparente dans le fichier ",(0,i.jsx)(n.code,{children:".4DSettings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Voici un exemple :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"authentification-et-session",children:"Authentification et Session"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Lorsqu'on acc\xe8de \xe0 une page de gestion web en entrant une URL et sans identification pr\xe9alable, une authentification est n\xe9cessaire. L'utilisateur doit entrer la ",(0,i.jsx)(n.a,{href:"#access-key",children:"cl\xe9 d'acc\xe8s"})," dans une fen\xeatre d'authentification. Si aucune cl\xe9 d'acc\xe8s n'a \xe9t\xe9 d\xe9finie dans les propri\xe9t\xe9s ",(0,i.jsx)(n.code,{children:"WebAdmin"}),", aucun acc\xe8s via URL n'est possible."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Qand une page d'administration web est ouverte directement depuis un menu 4D ou 4D Server, tel que ",(0,i.jsx)(n.strong,{children:"Enregistrements> Data Explorer"}),"ou",(0,i.jsx)(n.strong,{children:"Fen\xeatre> Explorateur de donn\xe9es"}),"(4D Server), l'acc\xe8s est autoris\xe9 sans authentification."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Une fois l'acc\xe8s autoris\xe9, une ",(0,i.jsx)(n.a,{href:"/docs/fr/20/WebServer/sessions",children:"session web"}),' est cr\xe9\xe9e avec les privil\xe8ges "WebAdmin" sur l\'application 4D. Tant que la session courante a le privil\xe8ge "WebAdmin", le composant ',(0,i.jsx)(n.code,{children:"WebAdmin"})," sert les pages demand\xe9es dans les requ\xeates."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},392340:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},785853:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},202086:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},681964:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},147332:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var i=s(296540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);