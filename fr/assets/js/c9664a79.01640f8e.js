"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56366"],{417107:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"WebServer/sessions","title":"Sessions utilisateur","description":"Le serveur Web de 4D offre des fonctions int\xe9gr\xe9es pour la gestion des sessions utilisateur. La cr\xe9ation et le maintien de sessions web vous permettent de contr\xf4ler et d\'am\xe9liorer l\'exp\xe9rience de l\'utilisateur sur votre application web. Lorsque les sessions web sont activ\xe9es, les clients web peuvent r\xe9utiliser le m\xeame contexte de serveur d\'une requ\xeate \xe0 une autre.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/WebServer/sessions.md","sourceDirName":"WebServer","slug":"/WebServer/sessions","permalink":"/docs/fr/20/WebServer/sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fsessions.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"sessions","title":"Sessions utilisateur"},"sidebar":"docs","previous":{"title":"Authentification","permalink":"/docs/fr/20/WebServer/authentication"},"next":{"title":"Utiliser des process web pr\xe9emptifs","permalink":"/docs/fr/20/WebServer/preemptiveWeb"}}'),r=n("785893"),t=n("250065");let o={id:"sessions",title:"Sessions utilisateur"},l=void 0,a={},d=[{value:"Activation des sessions",id:"activation-des-sessions",level:2},{value:"Impl\xe9mentation des sessions",id:"impl\xe9mentation-des-sessions",level:2},{value:"Partage d&#39;informations",id:"partage-dinformations",level:2},{value:"Dur\xe9e de vie des sessions",id:"dur\xe9e-de-vie-des-sessions",level:2},{value:"Privil\xe8ges",id:"privil\xe8ges",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Le serveur Web de 4D offre des fonctions int\xe9gr\xe9es pour la gestion des ",(0,r.jsx)(s.strong,{children:"sessions utilisateur"}),". La cr\xe9ation et le maintien de sessions web vous permettent de contr\xf4ler et d'am\xe9liorer l'exp\xe9rience de l'utilisateur sur votre application web. Lorsque les sessions web sont activ\xe9es, les clients web peuvent r\xe9utiliser le m\xeame contexte de serveur d'une requ\xeate \xe0 une autre."]}),"\n",(0,r.jsx)(s.p,{children:"Les sessions utilisateur du serveur web permettent de :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["g\xe9rer simultan\xe9ment plusieurs requ\xeates depuis le m\xeame client web via un nombre illimit\xe9 de process pr\xe9emptifs (les sessions web sont ",(0,r.jsx)(s.strong,{children:"\xe9volutives"}),"),"]}),"\n",(0,r.jsx)(s.li,{children:"partager des donn\xe9es entre les process d'un client web,"}),"\n",(0,r.jsx)(s.li,{children:"associer des privil\xe8ges aux sessions d'utilisateurs,"}),"\n",(0,r.jsxs)(s.li,{children:["g\xe9rer l'acc\xe8s via un objet ",(0,r.jsx)(s.code,{children:"Session"})," et l'",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass",children:"API Session"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," l'impl\xe9mentation actuelle n'est que la premi\xe8re \xe9tape d'une fonctionnalit\xe9 compl\xe8te \xe0 venir qui permet aux d\xe9veloppeurs de g\xe9rer les autorisations utilisateur hi\xe9rarchiques via des sessions dans l'ensemble de l'application Web."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"activation-des-sessions",children:"Activation des sessions"}),"\n",(0,r.jsx)(s.p,{children:"La gestion de session peut \xeatre activ\xe9e et d\xe9sactiv\xe9e sur votre serveur Web 4D. Il y a diff\xe9rentes fa\xe7ons d'activer la gestion de session :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Utiliser l'option ",(0,r.jsx)(s.strong,{children:"Sessions \xe9volutives"}),' de la page "Web/Options (I)" des Propri\xe9t\xe9s (param\xe8tre permanent) : ',(0,r.jsx)(s.img,{alt:"alt-text",src:n(661581).Z+"",width:"821",height:"361"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Cette option est s\xe9lectionn\xe9e par d\xe9faut dans les nouveaux projets. Elle peut cependant \xeatre d\xe9sactiv\xe9e en s\xe9lectionnant l'option ",(0,r.jsx)(s.strong,{children:"Pas de sessions"}),", auquel cas les fonctionnalit\xe9s de session web sont d\xe9sactiv\xe9es (aucun objet ",(0,r.jsx)(s.code,{children:"Session"})," n'est disponible)."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Utiliser la propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/WebServerClass#scalablesession",children:(0,r.jsx)(s.code,{children:".scalableSession"})})," de l'objet Web Server (pour passer le param\xe8tre ",(0,r.jsx)(s.em,{children:"settings"})," de la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/WebServerClass#start",children:(0,r.jsx)(s.code,{children:".start()"})}),"). Dans ce cas, ce param\xe8tre remplace l'option d\xe9finie dans la bo\xeete de dialogue Propri\xe9t\xe9s pour l'objet Web Server (il n'est pas stock\xe9 sur disque)."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.code,{children:"WEB SET OPTION"})," peut \xe9galement d\xe9finir le mode de session pour le serveur Web principal."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Dans tous les cas, ce param\xe8tre est local \xe0 la machine ; il peut donc \xeatre diff\xe9rent sur le serveur Web 4D Server et les serveurs Web des machines 4D distantes."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Compatibilit\xe9"})," : Une option ",(0,r.jsx)(s.strong,{children:"Anciennes sessions"})," est disponible dans les projets cr\xe9\xe9s avec une version 4D ant\xe9rieure \xe0 4D v18 R6 (pour plus d'informations, veuillez consulter le site [",(0,r.jsx)(s.a,{href:"https://doc.4d.com%5C",children:"https://doc.4d.com\\"}),"](",(0,r.jsx)(s.a,{href:"https://doc.4d.com",children:"https://doc.4d.com"}),")."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"impl\xe9mentation-des-sessions",children:"Impl\xe9mentation des sessions"}),"\n",(0,r.jsxs)(s.p,{children:['Lorsque [les sessions sont activ\xe9es](#activation-des-sessions), des m\xe9canismes automatiques sont mis en place, bas\xe9s sur un cookie priv\xe9 d\xe9fini par 4D lui-m\xeame : "4DSID_',(0,r.jsx)(s.em,{children:"NomApp"}),'", o\xf9 ',(0,r.jsx)(s.em,{children:"NomApp"})," est le nom du projet d'application. Ce cookie r\xe9f\xe9rence la session web courante pour l'application."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Le nom du cookie peut \xeatre obtenu \xe0 l'aide de la propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/WebServerClass#sessioncookiename",children:(0,r.jsx)(s.code,{children:".sessionCookieName"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['Dans chaque requ\xeate de client web, le serveur Web v\xe9rifie la pr\xe9sence et la valeur du cookie priv\xe9 "4DSID_',(0,r.jsx)(s.em,{children:"AppName"}),'".']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Si le cookie a une valeur, 4D recherche la session qui a cr\xe9\xe9 ce cookie parmi les sessions existantes ; si cette session est trouv\xe9e, elle est r\xe9utilis\xe9e pour l'appel."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Si la requ\xeate du client ne correspond pas \xe0 une session d\xe9j\xe0 ouverte :"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['une nouvelle session avec un cookie priv\xe9 "4DSID_',(0,r.jsx)(s.em,{children:"AppName"}),'" est cr\xe9\xe9e sur le serveur web']}),"\n",(0,r.jsxs)(s.li,{children:["un nouvel objet ",(0,r.jsx)(s.code,{children:"Session"})," Guest est cr\xe9\xe9 et est d\xe9di\xe9 \xe0 la session web \xe9volutive."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["L'objet ",(0,r.jsx)(s.code,{children:"Session"})," courant est alors accessible via la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#session",children:(0,r.jsx)(s.code,{children:"Session"})})," dans le code de n'importe quel processus Web."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:n(863617).Z+"",width:"642",height:"442"})}),"\n",(0,r.jsxs)(s.p,{children:["Les process Web ne se terminent g\xe9n\xe9ralement pas, ils sont recycl\xe9s dans un pool pour des raisons d'optimisation. Lorsqu'un process termine l'ex\xe9cution d'une requ\xeate, il est replac\xe9 dans le pool et rendu disponible pour la requ\xeate suivante. Puisqu'un process web peut \xeatre r\xe9utilis\xe9 par n'importe quelle session, les ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Concepts/variables#process-variables",children:"variables process"})," doivent \xeatre effac\xe9es par votre code \xe0 la fin de son ex\xe9cution (en utilisant ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv18/help/command/en/page89.html",children:(0,r.jsx)(s.code,{children:"CLEAR VARIABLE"})})," par exemple). Ce nettoyage est n\xe9cessaire pour toute information li\xe9e au process, comme une r\xe9f\xe9rence \xe0 un fichier ouvert. C'est la raison pour laquelle ",(0,r.jsx)(s.strong,{children:"il est recommand\xe9"})," d'utiliser l'objet ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass",children:"Session"})," lorsque vous souhaitez conserver les informations relatives \xe0 la session."]}),"\n",(0,r.jsx)(s.h2,{id:"partage-dinformations",children:"Partage d'informations"}),"\n",(0,r.jsxs)(s.p,{children:["Chaque objet ",(0,r.jsx)(s.code,{children:"Session"})," fournit une propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#storage",children:(0,r.jsx)(s.code,{children:".storage"})})," qui est un ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Concepts/shared",children:"objet partag\xe9"}),". Cette propri\xe9t\xe9 vous permet de partager des informations entre tous les process g\xe9r\xe9s par la session."]}),"\n",(0,r.jsx)(s.h2,{id:"dur\xe9e-de-vie-des-sessions",children:"Dur\xe9e de vie des sessions"}),"\n",(0,r.jsx)(s.p,{children:"Une session web \xe9volutive est ferm\xe9e lorsque:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"le serveur web est arr\xeat\xe9,"}),"\n",(0,r.jsx)(s.li,{children:"le d\xe9lai d'attente du cookie de session a \xe9t\xe9 atteint."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"La dur\xe9e de vie d'un cookie inactif est de 60 minutes par d\xe9faut, ce qui signifie que le serveur Web fermera automatiquement les sessions inactives apr\xe8s 60 minutes."}),"\n",(0,r.jsxs)(s.p,{children:["Ce timeout peut \xeatre d\xe9fini \xe0 l'aide de la propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#idletimeout",children:(0,r.jsx)(s.code,{children:".idleTimeout"})})," de l'objet ",(0,r.jsx)(s.code,{children:"Session"})," (le timeout ne peut pas \xeatre inf\xe9rieur \xe0 60 minutes)."]}),"\n",(0,r.jsxs)(s.p,{children:["Lorsqu'une session Web \xe9volutive est ferm\xe9e, si la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#session",children:(0,r.jsx)(s.code,{children:"Session"})})," est appel\xe9e par la suite :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["l'objet ",(0,r.jsx)(s.code,{children:"Session"})," ne contient pas de privil\xe8ges (c'est une session Guest)"]}),"\n",(0,r.jsxs)(s.li,{children:["la propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#storage",children:(0,r.jsx)(s.code,{children:".storage"})})," est vide"]}),"\n",(0,r.jsx)(s.li,{children:"un nouveau cookie de session est associ\xe9 \xe0 la session"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"privil\xe8ges",children:"Privil\xe8ges"}),"\n",(0,r.jsx)(s.p,{children:"Des privil\xe8ges peuvent \xeatre associ\xe9s aux sessions. Sur le serveur web, vous pouvez fournir un acc\xe8s sp\xe9cifique ou des fonctionnalit\xe9s en fonction des privil\xe8ges de la session."}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez attribuer des privil\xe8ges \xe0 l'aide de la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#setprivileges",children:(0,r.jsx)(s.code,{children:".setPrivileges()"})}),". Dans votre code, vous pouvez v\xe9rifier les privil\xe8ges de la session pour autoriser ou refuser l'acc\xe8s \xe0 l'aide de la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#hasprivilege",children:(0,r.jsx)(s.code,{children:".hasPrivilege()"})}),". Par d\xe9faut, les nouvelles sessions n'ont aucun privil\xe8ge : ce sont des sessions ",(0,r.jsx)(s.strong,{children:"invit\xe9"})," (la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/SessionClass#isguest",children:(0,r.jsx)(s.code,{children:".isGuest()"})})," retourne true)."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:'Dans l\'impl\xe9mentation actuelle, seul le privil\xe8ge "WebAdmin" est disponible.'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Voici un exemple :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n    //Acc\xe8s accord\xe9, ne rien faire\nElse\n    //Afficher une page d\'authentification\nEnd if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Dans une application CRM, chaque commercial g\xe8re son propre portefeuille de clients. Le datastore contient au moins deux dataclass li\xe9es : Customers et SalesPersons (un commercial a plusieurs clients)."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:n(209282).Z+"",width:"450",height:"225"})}),"\n",(0,r.jsx)(s.p,{children:"Nous voulons qu'un(e) commercial(e) s'authentifie, ouvre une session sur le serveur web et que les 3 meilleurs clients soient charg\xe9s dans la session."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Nous ex\xe9cutons cette URL pour ouvrir une session :"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"http://localhost:8044/authenticate.shtml\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Dans un environnement de production, il est n\xe9cessaire d'utiliser une ",(0,r.jsx)(s.a,{href:"/docs/fr/20/API/WebServerClass#httpsenabled",children:"connexion HTTPS"})," pour \xe9viter la circulation d'informations non chiffr\xe9es sur le r\xe9seau."]}),"\n"]}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:["La page ",(0,r.jsx)(s.code,{children:"authenticate.shtml"})," est un formulaire contenant des champs de saisie ",(0,r.jsx)(s.em,{children:"userId"})," et ",(0,r.jsx)(s.em,{children:"password"})," et envoie une action POST 4DACTION :"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<body bgcolor="#ffffff">\n<FORM ACTION="/4DACTION/authenticate" METHOD=POST>\n    UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n    Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">\n</FORM>\n</body>\n</html>\n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"alt-text",src:n(613414).Z+"",width:"523",height:"158"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["La m\xe9thode projet d'authentification recherche la personne ",(0,r.jsx)(s.em,{children:"userID"})," et valide le mot de passe par rapport \xe0 la valeur de hachage d\xe9j\xe0 stock\xe9e dans la table ",(0,r.jsx)(s.em,{children:"SalesPersons"})," :"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'var $indexUserId; $indexPassword; $userId : Integer\nvar $password : Text\nvar $userTop3; $sales; $info : Object\n\n\nARRAY TEXT($anames; 0)\nARRAY TEXT($avalues; 0)\n\nWEB GET VARIABLES($anames; $avalues)\n\n$indexUserId:=Find in array($anames; "userId")\n$userId:=Num($avalues{$indexUserId})\n\n$indexPassword:=Find in array($anames; "password")\n$password:=$avalues{$indexPassword}\n\n$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()\n\nIf ($sales#Null)\n    If (Verify password hash($password; $sales.password))\n        $info:=New object()\n        $info.userName:=$sales.firstname+" "+$sales.lastname\n        Session.setPrivileges($info)\n        Use (Session.storage)\n            If (Session.storage.myTop3=Null)\n                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n                Session.storage.myTop3:=$userTop3\n            End if\n        End use\n        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")\n    Else\n        WEB SEND TEXT("This password is wrong")\n    End if\nElse\n    WEB SEND TEXT("This userId is unknown")\nEnd if\n'})})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},613414:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},209282:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/exampleSession-6ea5390dae0da375f51de68193ef570e.png"},863617:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/schemaSession-a7c86d4948895f03c24611177cd54f7c.png"},661581:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/settingsSession-0d1b28de173a572d3a47fcf327e29b28.png"},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var i=n(667294);let r={},t=i.createContext(r);function o(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);