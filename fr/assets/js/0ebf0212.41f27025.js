/*! For license information please see 0ebf0212.41f27025.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78857],{365525:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(474848),t=n(28453);const i={id:"clientServer",title:"Gestion Client/Serveur"},o=void 0,l={id:"Desktop/clientServer",title:"Gestion Client/Serveur",description:"Les applications 4D Desktop peuvent \xeatre utilis\xe9es dans une configuration Client/Serveur, en tant qu'applications client/serveur fusionn\xe9es ou en tant que projets distants.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Desktop/clientServer.md",sourceDirName:"Desktop",slug:"/Desktop/clientServer",permalink:"/docs/fr/19/Desktop/clientServer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"clientServer",title:"Gestion Client/Serveur"},sidebar:"docs",previous:{title:"$version",permalink:"/docs/fr/19/REST/version"},next:{title:"A propos des formulaires 4D",permalink:"/docs/fr/19/FormEditor/forms"}},c={},a=[{value:"Ouvrir une application client/serveur fusionn\xe9e",id:"Ouvrir-une-application-clientserveur-fusionn\xe9e",level:2},{value:"Ouvrir un projet distant",id:"Ouvrir-un-projet-distant",level:2},{value:"Mettre \xe0 jour des fichiers de projet sur le serveur",id:"Mettre-\xe0-jour-des-fichiers-de-projet-sur-le-serveur",level:3},{value:"Mettre \xe0 jour des fichiers de projet sur les machines distantes",id:"Mettre-\xe0-jour-des-fichiers-de-projet-sur-les-machines-distantes",level:3},{value:"Utiliser 4D et 4D Server sur la m\xeame machine",id:"Utiliser-4D-et-4D-Server-sur-la-m\xeame-machine",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Les applications 4D Desktop peuvent \xeatre utilis\xe9es dans une configuration Client/Serveur, en tant qu'applications client/serveur fusionn\xe9es ou en tant que projets distants."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"merged client/server applications"})," are generated by the ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Desktop/building#clientserver-page",children:"Build Application manager"}),". Elles sont utilis\xe9es pour les d\xe9ploiements d'applications."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"remote projects"})," are ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Project/architecture",children:".4DProject"})," files opened by 4D Server and accessed with 4D in remote mode. The server sends a .4dz version of the project (",(0,s.jsx)(r.a,{href:"/docs/fr/19/Desktop/building#build-compiled-structure",children:"compressed format"}),") to the remote 4D, thus structure files are read-only. Cette configuration est g\xe9n\xe9ralement utilis\xe9e pour les tests d'application."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(697).A+"",width:"581",height:"249"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Connecting to a remote projet from the ",(0,s.jsx)(r.strong,{children:"same machine as 4D Server"})," allows modifying the project files. This ",(0,s.jsx)(r.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"specific feature"})," allows to develop a client/server application in the same context as the deployment context."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"Ouvrir-une-application-clientserveur-fusionn\xe9e",children:"Ouvrir une application client/serveur fusionn\xe9e"}),"\n",(0,s.jsx)(r.p,{children:"Une application client/serveur fusionn\xe9e est personnalis\xe9e et son d\xe9marrage est simplifi\xe9 :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Pour lancer la partie serveur, l\u2019utilisateur double-clique simplement sur l\u2019application serveur : il n\u2019est pas n\xe9cessaire de s\xe9lectionner le fichier projet. il n\u2019est pas n\xe9cessaire de s\xe9lectionner le fichier projet."}),"\n",(0,s.jsx)(r.li,{children:"Pour lancer la partie cliente, l\u2019utilisateur double-clique simplement sur l\u2019application cliente, qui se connecte directement \xe0 l\u2019application serveur : il n\u2019est pas n\xe9cessaire de choisir un serveur dans une bo\xeete de dialogue de connexion."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["These principles are detailed in the ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Desktop/building#what-is-a-clientserver-application",children:"Build Application"})," page."]}),"\n",(0,s.jsx)(r.h2,{id:"Ouvrir-un-projet-distant",children:"Ouvrir un projet distant"}),"\n",(0,s.jsxs)(r.p,{children:["La premi\xe8re fois que vous vous connectez \xe0 un projet 4D Server via un 4D distant, vous utiliserez g\xe9n\xe9ralement la bo\xeete de dialogue de connexion standard. Thereafter, you will be able to connect directly using the ",(0,s.jsx)(r.strong,{children:"Open Recent Projects"})," menu or a 4DLink shortcut file."]}),"\n",(0,s.jsx)(r.p,{children:"Pour vous connecter \xe0 distance \xe0 un projet 4D Server :"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Select ",(0,s.jsx)(r.strong,{children:"Connect to 4D Server"})," in the Welcome Wizard dialog, OR Select ",(0,s.jsx)(r.strong,{children:"Open/Remote Project..."})," from the ",(0,s.jsx)(r.strong,{children:"File"})," menu or the ",(0,s.jsx)(r.strong,{children:"Open"})," toolbar button."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["La bo\xeete de dialogue de connexion \xe0 4D Server appara\xeet. Cette bo\xeete de dialogue comporte trois onglets : ",(0,s.jsx)(r.strong,{children:"R\xe9cent"}),", ",(0,s.jsx)(r.strong,{children:"Disponible"})," et ",(0,s.jsx)(r.strong,{children:"Personnalis\xe9"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Si 4D Server est connect\xe9 au m\xeame r\xe9seau que le 4D distant, s\xe9lectionnez ",(0,s.jsx)(r.strong,{children:"Disponible"}),". 4D Server inclut un syst\xe8me de diffusion TCP/IP int\xe9gr\xe9 qui, par d\xe9faut, publie le nom des projets 4D Server disponibles sur le r\xe9seau. La liste est tri\xe9e par ordre d'apparition et est mise \xe0 jour dynamiquement."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(820707).A+"",width:"522",height:"482"})}),"\n",(0,s.jsxs)(r.p,{children:["Pour vous connecter \xe0 un serveur de la liste, double-cliquez sur son nom ou s\xe9lectionnez-le et cliquez sur le bouton ",(0,s.jsx)(r.strong,{children:"OK"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Un accent circonflexe (^) est plac\xe9 avant le nom des projets publi\xe9s avec l'option de chiffrement activ\xe9e."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Si le projet publi\xe9 n'est pas affich\xe9 dans la liste ",(0,s.jsx)(r.strong,{children:"Disponible"}),", s\xe9lectionnez ",(0,s.jsx)(r.strong,{children:"Personnalis\xe9"}),". La page Personnalis\xe9 vous permet de vous connecter \xe0 un serveur publi\xe9 sur le r\xe9seau en utilisant son adresse r\xe9seau et en lui attribuant un nom personnalis\xe9."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(768857).A+"",width:"522",height:"482"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Nom du projet"})," : d\xe9finit le nom local du projet 4D Server. Ce nom sera utilis\xe9 dans la page ",(0,s.jsx)(r.strong,{children:"R\xe9cent"})," pour faire r\xe9f\xe9rence au projet."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Adresse r\xe9seau"})," : L'adresse IP de la machine sur laquelle le 4D Server a \xe9t\xe9 lanc\xe9. Si deux serveurs sont ex\xe9cut\xe9s simultan\xe9ment sur la m\xeame machine, l'adresse IP doit \xeatre suivie de deux points et d'un num\xe9ro de port, par exemple : ",(0,s.jsx)(r.code,{children:"192.168.92.104:19814"}),". Par d\xe9faut, le port de publication d'un 4D Server est 19813. Ce num\xe9ro peut \xeatre modifi\xe9 dans les param\xe8tres du projet."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Une fois que cette page attribue un serveur, cliquez sur le bouton ",(0,s.jsx)(r.strong,{children:"OK"})," pour vous connecter au serveur."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Si le projet est publi\xe9 avec l'option de chiffrement activ\xe9e, vous devez ajouter un accent circonflexe (^) avant le nom, sinon la connexion sera refus\xe9e. Pour plus d'informations, reportez-vous \xe0 la section Chiffrement des connexions client/serveur."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Une fois la connexion au serveur \xe9tablie, le projet distant sera r\xe9pertori\xe9 dans l'onglet ",(0,s.jsx)(r.strong,{children:"R\xe9cent"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"Mettre-\xe0-jour-des-fichiers-de-projet-sur-le-serveur",children:"Mettre \xe0 jour des fichiers de projet sur le serveur"}),"\n",(0,s.jsxs)(r.p,{children:["4D Server automatically creates and sends the remote machines a ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Desktop/building#build-compiled-structure",children:".4dz version"})," of the ",(0,s.jsx)(r.em,{children:".4DProject"})," project file (not compressed) in interpreted mode."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Une version .4dz mise \xe0 jour du projet est automatiquement produite lorsque cela est n\xe9cessaire, c'est-\xe0-dire lorsque le projet a \xe9t\xe9 modifi\xe9 et recharg\xe9 par 4D Server. Le projet est recharg\xe9 :\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"automatiquement, lorsque la fen\xeatre de l'application 4D Server arrive \xe0 l'avant de l'OS ou lorsque l'application 4D sur la m\xeame machine enregistre une modification (voir ci-dessous)."}),"\n",(0,s.jsxs)(r.li,{children:["lorsque la commande ",(0,s.jsx)(r.code,{children:"RELOAD PROJECT"})," est ex\xe9cut\xe9e. L'appel de cette commande est n\xe9cessaire lorsque, par exemple, vous avez extrait une nouvelle version du projet depuis la plateforme de contr\xf4le de version."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"Mettre-\xe0-jour-des-fichiers-de-projet-sur-les-machines-distantes",children:"Mettre \xe0 jour des fichiers de projet sur les machines distantes"}),"\n",(0,s.jsx)(r.p,{children:"Lorsqu'une version .4dz mise \xe0 jour du projet a \xe9t\xe9 produite sur 4D Server, les machines 4D distantes connect\xe9es doivent se d\xe9connecter et se reconnecter \xe0 4D Server afin de b\xe9n\xe9ficier de la version mise \xe0 jour."}),"\n",(0,s.jsx)(r.h2,{id:"Utiliser-4D-et-4D-Server-sur-la-m\xeame-machine",children:"Utiliser 4D et 4D Server sur la m\xeame machine"}),"\n",(0,s.jsx)(r.p,{children:"Lorsque 4D se connecte \xe0 un 4D Server sur la m\xeame machine, l'application se comporte comme 4D en mode monoposte et l'environnement de d\xe9veloppement permet d'\xe9diter les fichiers du projet. Cette fonctionnalit\xe9 vous permet de d\xe9velopper une application client/serveur dans le m\xeame contexte que le contexte de d\xe9ploiement."}),"\n",(0,s.jsxs)(r.p,{children:["A chaque fois que 4D effectue une action ",(0,s.jsx)(r.strong,{children:"Enregistrer tout"})," depuis l'environnement de d\xe9veloppement (explicitement depuis le menu ",(0,s.jsx)(r.strong,{children:"Fichier"})," ou implicitement en passant en mode application par exemple), 4D Server recharge de mani\xe8re synchrone les fichiers du projet. 4D attend que 4D Server termine le rechargement des fichiers du projet avant de continuer."]}),"\n",(0,s.jsxs)(r.p,{children:["Veillez cependant aux diff\xe9rences de comportement suivantes, compar\xe9es \xe0 ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Project/architecture",children:"l'architecture projet standard"})," :"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Au lieu de cela, il s'agit d'un dossier d\xe9di\xe9, nomm\xe9 \"userPreferences\", stock\xe9 dans le dossier syst\xe8me du projet (c'est-\xe0-dire au m\xeame emplacement que lors de l'ouverture d'un projet .4dz)."}),"\n",(0,s.jsx)(r.li,{children:'le dossier utilis\xe9 par 4D pour les donn\xe9es d\xe9riv\xe9es n\'est pas le dossier "DerivedData" du dossier projet. Il s\'agit plut\xf4t d\'un dossier d\xe9di\xe9 nomm\xe9 "DerivedDataRemote" situ\xe9 dans le dossier syst\xe8me du projet.'}),"\n",(0,s.jsx)(r.li,{children:"le fichier catalog.4DCatalog n'est pas \xe9dit\xe9 par 4D mais par 4D Server. Les informations du catalogue sont synchronis\xe9es \xe0 l'aide des requ\xeates client/serveur"}),"\n",(0,s.jsx)(r.li,{children:"le fichier directory.json n'est pas \xe9dit\xe9 par 4D mais par 4D Server. Les informations du r\xe9pertoire sont synchronis\xe9es \xe0 l'aide des requ\xeates client/serveur"}),"\n",(0,s.jsx)(r.li,{children:"4D utilise ses propres composants internes et plug-ins au lieu de ceux de 4D Server."}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Il n'est pas recommand\xe9 d'installer des plug-ins ou des composants au niveau de l'application 4D ou 4D Server."}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var s,i={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:a,ref:d,props:i,_owner:l.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},697:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},820707:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},768857:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/serverConnect2-9dc60df13672f8189273aec3efcab19d.png"},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var s=n(296540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);