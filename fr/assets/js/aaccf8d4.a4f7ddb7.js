"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99594"],{700797:function(e,s,n){n.r(s),n.d(s,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"Desktop/clientServer","title":"Gestion Client/Serveur","description":"Les applications 4D Desktop peuvent \xeatre utilis\xe9es dans une configuration Client/Serveur, en tant qu\'applications client/serveur fusionn\xe9es ou en tant que projets distants.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Desktop/clientServer.md","sourceDirName":"Desktop","slug":"/Desktop/clientServer","permalink":"/docs/fr/Desktop/clientServer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clientServer","title":"Gestion Client/Serveur"},"sidebar":"docs","previous":{"title":"Desktop Applications","permalink":"/docs/fr/category/desktop-applications"},"next":{"title":"Access Rights","permalink":"/docs/fr/category/access-rights"}}'),i=n("785893"),t=n("250065");let o={id:"clientServer",title:"Gestion Client/Serveur"},l=void 0,c={},d=[{value:"Ouvrir une application client/serveur fusionn\xe9e",id:"ouvrir-une-application-clientserveur-fusionn\xe9e",level:2},{value:"Ouvrir un projet distant",id:"ouvrir-un-projet-distant",level:2},{value:"Mettre \xe0 jour des fichiers de projet sur le serveur",id:"mettre-\xe0-jour-des-fichiers-de-projet-sur-le-serveur",level:3},{value:"Mettre \xe0 jour des fichiers de projet sur les machines distantes",id:"mettre-\xe0-jour-des-fichiers-de-projet-sur-les-machines-distantes",level:3},{value:"Utiliser 4D et 4D Server sur la m\xeame machine",id:"utiliser-4d-et-4d-server-sur-la-m\xeame-machine",level:2},{value:"Sessions utilisateur distant",id:"sessions-utilisateur-distant",level:2},{value:"Utilisation",id:"utilisation",level:3},{value:"Disponibilit\xe9",id:"disponibilit\xe9",level:3},{value:"Voir aussi (blog post)",id:"voir-aussi-blog-post",level:3}];function u(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Les applications 4D Desktop peuvent \xeatre utilis\xe9es dans une configuration Client/Serveur, en tant qu'applications client/serveur fusionn\xe9es ou en tant que projets distants."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Les ",(0,i.jsx)(s.strong,{children:"applications client/serveur fusionn\xe9es"})," sont g\xe9n\xe9r\xe9es par le ",(0,i.jsx)(s.a,{href:"/docs/fr/Desktop/building#clientserver-page",children:"G\xe9n\xe9rateur d'application"}),". Elles sont utilis\xe9es pour les d\xe9ploiements d'applications."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Les ",(0,i.jsx)(s.strong,{children:"projets distants"})," sont des fichiers ",(0,i.jsx)(s.a,{href:"/docs/fr/Project/architecture",children:".4DProject"})," ouverts par 4D Server et accessibles avec 4D en mode distant. Le serveur envoie une version .4dz du projet (",(0,i.jsx)(s.a,{href:"/docs/fr/Desktop/building#build-compiled-structure",children:"format compress\xe9"}),") au 4D distant, donc les fichiers de structure sont en lecture seule. Cette configuration est g\xe9n\xe9ralement utilis\xe9e pour les tests d'application."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(607396).Z+"",width:"581",height:"249"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["La connexion \xe0 un projet distant \xe0 partir de ",(0,i.jsx)(s.strong,{children:"la m\xeame machine que 4D Server"})," permet de modifier les fichiers du projet. Cette ",(0,i.jsx)(s.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"fonctionnalit\xe9 sp\xe9cifique"})," permet de d\xe9velopper une application client/serveur dans le m\xeame contexte que le contexte de d\xe9ploiement."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"ouvrir-une-application-clientserveur-fusionn\xe9e",children:"Ouvrir une application client/serveur fusionn\xe9e"}),"\n",(0,i.jsx)(s.p,{children:"Une application client/serveur fusionn\xe9e est personnalis\xe9e et son d\xe9marrage est simplifi\xe9 :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Pour lancer la partie serveur, l\u2019utilisateur double-clique simplement sur l\u2019application serveur. Il n\u2019est pas n\xe9cessaire de s\xe9lectionner le fichier projet."}),"\n",(0,i.jsx)(s.li,{children:"Pour lancer la partie cliente, l\u2019utilisateur double-clique simplement sur l\u2019application cliente, qui se connecte directement \xe0 l\u2019application serveur."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Ces principes sont d\xe9taill\xe9s dans la page du ",(0,i.jsx)(s.a,{href:"/docs/fr/Desktop/building#what-is-a-clientserver-application",children:"G\xe9n\xe9rateur d'application"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"ouvrir-un-projet-distant",children:"Ouvrir un projet distant"}),"\n",(0,i.jsxs)(s.p,{children:["La premi\xe8re fois que vous vous connectez \xe0 un projet 4D Server via un 4D distant, vous utiliserez g\xe9n\xe9ralement la bo\xeete de dialogue de connexion standard. Par la suite, vous pourrez vous connecter directement en utilisant le menu ",(0,i.jsx)(s.strong,{children:"Ouvrir projets r\xe9cents"})," ou un fichier de raccourci 4DLink."]}),"\n",(0,i.jsx)(s.p,{children:"Pour vous connecter \xe0 distance \xe0 un projet 4D Server :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Effectuez l'une des op\xe9rations suivantes :\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,i.jsx)(s.strong,{children:"Se connecter \xe0 4D Server"})," dans la bo\xeete de dialogue de l'Assistant de bienvenue"]}),"\n",(0,i.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,i.jsx)(s.strong,{children:"Ouvrir > Projet distant..."})," \xe0 partir du menu ",(0,i.jsx)(s.strong,{children:"Fichier"})," ou du bouton ",(0,i.jsx)(s.strong,{children:"Ouvrir"})," de la barre d'outils."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["La bo\xeete de dialogue de connexion \xe0 4D Server appara\xeet. Cette bo\xeete de dialogue comporte trois onglets : ",(0,i.jsx)(s.strong,{children:"R\xe9cent"}),", ",(0,i.jsx)(s.strong,{children:"Disponible"})," et ",(0,i.jsx)(s.strong,{children:"Personnalis\xe9"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si 4D Server est connect\xe9 au m\xeame sous-r\xe9seau que le 4D distant, s\xe9lectionnez ",(0,i.jsx)(s.strong,{children:"Disponible"}),". 4D Server inclut un syst\xe8me de diffusion int\xe9gr\xe9 qui, par d\xe9faut, publie le nom des projets 4D Server disponibles sur le r\xe9seau. La liste est tri\xe9e par ordre d'apparition et est mise \xe0 jour dynamiquement."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(559448).Z+"",width:"522",height:"482"})}),"\n",(0,i.jsxs)(s.p,{children:["Pour vous connecter \xe0 un serveur de la liste, double-cliquez sur son nom ou s\xe9lectionnez-le et cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Si le projet publi\xe9 n'est pas affich\xe9 dans la liste ",(0,i.jsx)(s.strong,{children:"Disponible"}),", s\xe9lectionnez ",(0,i.jsx)(s.strong,{children:"Personnalis\xe9"}),". La page Personnalis\xe9 vous permet de vous connecter \xe0 un serveur publi\xe9 sur le r\xe9seau en utilisant son adresse r\xe9seau et en lui attribuant un nom personnalis\xe9."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(517953).Z+"",width:"522",height:"522"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Nom du projet"})," : d\xe9finit le nom local du projet 4D Server. Ce nom sera utilis\xe9 dans la page ",(0,i.jsx)(s.strong,{children:"R\xe9cent"})," pour faire r\xe9f\xe9rence au projet."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Adresse r\xe9seau"})," : L'adresse IP de la machine sur laquelle le 4D Server a \xe9t\xe9 lanc\xe9.\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Si deux serveurs sont ex\xe9cut\xe9s simultan\xe9ment sur la m\xeame machine, l'adresse IP doit \xeatre suivie de deux points et d'un num\xe9ro de port, par exemple : ",(0,i.jsx)(s.code,{children:"192.168.92.104:19814"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Par d\xe9faut, le port de publication d'un 4D Server est 19813. Ce num\xe9ro peut \xeatre modifi\xe9 dans les param\xe8tres du projet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["L'option ",(0,i.jsx)(s.strong,{children:"Activer le mode d\xe9veloppement"})," ouvre la connexion \xe0 distance dans un mode lecture/\xe9criture sp\xe9cial et n\xe9cessite d'acc\xe9der au dossier du projet depuis le 4D distant (option de compatibilit\xe9)."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Une fois que cette page attribue un serveur, cliquez sur le bouton ",(0,i.jsx)(s.strong,{children:"OK"})," pour vous connecter au serveur."]}),"\n",(0,i.jsxs)(s.p,{children:["Une fois la connexion au serveur \xe9tablie, le projet distant sera r\xe9pertori\xe9 dans l'onglet ",(0,i.jsx)(s.strong,{children:"R\xe9cent"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"mettre-\xe0-jour-des-fichiers-de-projet-sur-le-serveur",children:"Mettre \xe0 jour des fichiers de projet sur le serveur"}),"\n",(0,i.jsxs)(s.p,{children:["4D Server cr\xe9e et envoie automatiquement aux machines distantes une version ",(0,i.jsx)(s.a,{href:"/docs/fr/Desktop/building#build-compiled-structure",children:".4dz"})," du fichier de projet ",(0,i.jsx)(s.em,{children:".4DProject"})," (non compress\xe9) en mode interpr\xe9t\xe9."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Une version .4dz mise \xe0 jour du projet est automatiquement produite lorsque cela est n\xe9cessaire, c'est-\xe0-dire lorsque le projet a \xe9t\xe9 modifi\xe9 et recharg\xe9 par 4D Server. Le projet est recharg\xe9 :\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"automatiquement, lorsque la fen\xeatre de l'application 4D Server arrive \xe0 l'avant de l'OS ou lorsque l'application 4D sur la m\xeame machine enregistre une modification (voir ci-dessous)."}),"\n",(0,i.jsxs)(s.li,{children:["lorsque la commande ",(0,i.jsx)(s.code,{children:"RELOAD PROJECT"})," est ex\xe9cut\xe9e. L'appel de cette commande est n\xe9cessaire lorsque, par exemple, vous avez extrait une nouvelle version du projet depuis la plateforme de contr\xf4le de version."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"mettre-\xe0-jour-des-fichiers-de-projet-sur-les-machines-distantes",children:"Mettre \xe0 jour des fichiers de projet sur les machines distantes"}),"\n",(0,i.jsx)(s.p,{children:"Lorsqu'une version .4dz mise \xe0 jour du projet a \xe9t\xe9 produite sur 4D Server, les machines 4D distantes connect\xe9es doivent se d\xe9connecter et se reconnecter \xe0 4D Server afin de b\xe9n\xe9ficier de la version mise \xe0 jour."}),"\n",(0,i.jsx)(s.h2,{id:"utiliser-4d-et-4d-server-sur-la-m\xeame-machine",children:"Utiliser 4D et 4D Server sur la m\xeame machine"}),"\n",(0,i.jsx)(s.p,{children:"Lorsque 4D se connecte \xe0 un 4D Server sur la m\xeame machine, l'application se comporte comme 4D en mode monoposte et l'environnement de d\xe9veloppement permet d'\xe9diter les fichiers du projet. Cette fonctionnalit\xe9 vous permet de d\xe9velopper une application client/serveur dans le m\xeame contexte que le contexte de d\xe9ploiement."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Lorsque 4D se connecte \xe0 un serveur 4D sur la m\xeame machine, le ",(0,i.jsx)(s.strong,{children:"mode d\xe9veloppement"})," est automatiquement activ\xe9, quelle que soit l'",(0,i.jsx)(s.a,{href:"#ouverture-d-un-projet-%C3%A0-distance",children:"option d'ouverture"})," choisie."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["A chaque fois que 4D effectue une action ",(0,i.jsx)(s.strong,{children:"Enregistrer tout"})," depuis l'environnement de d\xe9veloppement (explicitement depuis le menu ",(0,i.jsx)(s.strong,{children:"Fichier"})," ou implicitement en passant en mode application par exemple), 4D Server recharge de mani\xe8re synchrone les fichiers du projet. 4D attend que 4D Server termine le rechargement des fichiers du projet avant de continuer."]}),"\n",(0,i.jsxs)(s.p,{children:["Veillez cependant aux diff\xe9rences de comportement suivantes, compar\xe9es \xe0 ",(0,i.jsx)(s.a,{href:"/docs/fr/Project/architecture",children:"l'architecture projet standard"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"le dossier userPreferences.{username} utilis\xe9 par 4D n'est pas le m\xeame que celui utilis\xe9 par 4D Server dans le dossier projet. Au lieu de cela, il s'agit d'un dossier d\xe9di\xe9, nomm\xe9 \"userPreferences\", stock\xe9 dans le dossier syst\xe8me du projet (c'est-\xe0-dire au m\xeame emplacement que lors de l'ouverture d'un projet .4dz)."}),"\n",(0,i.jsx)(s.li,{children:'le dossier utilis\xe9 par 4D pour les donn\xe9es d\xe9riv\xe9es n\'est pas le dossier "DerivedData" du dossier projet. Il s\'agit plut\xf4t d\'un dossier d\xe9di\xe9 nomm\xe9 "DerivedDataRemote" situ\xe9 dans le dossier syst\xe8me du projet.'}),"\n",(0,i.jsx)(s.li,{children:"le fichier catalog.4DCatalog n'est pas \xe9dit\xe9 par 4D mais par 4D Server. Les informations du catalogue sont synchronis\xe9es \xe0 l'aide des requ\xeates client/serveur"}),"\n",(0,i.jsx)(s.li,{children:"le fichier directory.json n'est pas \xe9dit\xe9 par 4D mais par 4D Server. Les informations du r\xe9pertoire sont synchronis\xe9es \xe0 l'aide des requ\xeates client/serveur"}),"\n",(0,i.jsx)(s.li,{children:"4D utilise ses propres composants internes et plug-ins au lieu de ceux de 4D Server."}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Il n'est pas recommand\xe9 d'installer des plug-ins ou des composants au niveau de l'application 4D ou 4D Server."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sessions-utilisateur-distant",children:"Sessions utilisateur distant"}),"\n",(0,i.jsxs)(s.p,{children:["On the server, the ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/session",children:(0,i.jsx)(s.code,{children:"Session"})})," command returns a ",(0,i.jsx)(s.code,{children:"session"})," object describing the current user session. Cet objet est g\xe9r\xe9 via les fonctions et les propri\xe9t\xe9s de la classe ",(0,i.jsx)(s.a,{href:"/docs/fr/API/SessionClass",children:(0,i.jsx)(s.code,{children:"Session"})}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"utilisation",children:"Utilisation"}),"\n",(0,i.jsxs)(s.p,{children:["L'objet ",(0,i.jsx)(s.code,{children:"session"})," vous permet d'obtenir des informations sur la session de l'utilisateur distant. Vous pouvez partager des donn\xe9es entre tous les processus de la session utilisateur en utilisant l'objet partag\xe9 ",(0,i.jsx)(s.a,{href:"/docs/fr/API/SessionClass#storage",children:(0,i.jsx)(s.code,{children:"session.storage"})}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Par exemple, vous pouvez lancer une proc\xe9dure d'authentification et de v\xe9rification de l'utilisateur lorsqu'un client se connecte au serveur, impliquant la saisie d'un code envoy\xe9 par e-mail ou SMS dans l'application. Ensuite, vous ajoutez les informations de l'utilisateur au storage de session, ce qui permet au serveur d'identifier l'utilisateur. De cette fa\xe7on, le serveur 4D peut acc\xe9der aux informations de l'utilisateur pour tous les process clients, permettant l'\xe9criture de code personnalis\xe9 en fonction du r\xf4le de l'utilisateur."}),"\n",(0,i.jsx)(s.h3,{id:"disponibilit\xe9",children:"Disponibilit\xe9"}),"\n",(0,i.jsxs)(s.p,{children:["L'objet ",(0,i.jsx)(s.code,{children:"session"})," de l'utilisateur distant est disponible depuis :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Les m\xe9thodes projet qui ont l'attribut ",(0,i.jsx)(s.a,{href:"/docs/fr/Project/code-overview#execute-on-server",children:"Ex\xe9cuter sur serveur"})," (elles sont ex\xe9cut\xe9es dans le process jumeau du process client),"]}),"\n",(0,i.jsx)(s.li,{children:"Les Triggers,"}),"\n",(0,i.jsxs)(s.li,{children:["ORDA ",(0,i.jsx)(s.a,{href:"/docs/fr/ORDA/ordaClasses",children:"data model functions"})," (except those declared with the ",(0,i.jsx)(s.a,{href:"/docs/fr/ORDA/ordaClasses#local-functions",children:(0,i.jsx)(s.code,{children:"local"})})," keyword,"]}),"\n",(0,i.jsxs)(s.li,{children:["Les m\xe9thodes base ",(0,i.jsx)(s.code,{children:"On Server Open Connection"})," et ",(0,i.jsx)(s.code,{children:"On Server Shutdown Connection"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Toutes les proc\xe9dures stock\xe9es sur le serveur partagent la m\xeame session utilisateur virtuelle. Pour plus d'informations, consultez ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html",children:"cette page sur doc.4d.com"}),"."]})}),"\n",(0,i.jsx)(s.h3,{id:"voir-aussi-blog-post",children:"Voir aussi (blog post)"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure",children:"Objet session distante 4D avec connexion Client/Serveur et proc\xe9dure stock\xe9e"}),"."]})]})}function a(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},517953:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/serverConnect2-2617f5a73a8b33f5ebfac1b36a006c1c.png"},607396:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},559448:function(e,s,n){n.d(s,{Z:function(){return r}});let r=n.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var r=n(667294);let i={},t=r.createContext(i);function o(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);