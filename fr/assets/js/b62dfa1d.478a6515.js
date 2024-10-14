"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86049],{287883:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(474848),r=s(28453);const i={id:"authentication",title:"Authentification"},d=void 0,a={id:"WebServer/authentication",title:"Authentification",description:"L'authentification est n\xe9cessaire lorsque vous souhaitez fournir des droits d'acc\xe8s sp\xe9cifiques aux utilisateurs Web. L'authentification d\xe9signe la mani\xe8re dont les informations concernant les r\xe9f\xe9rences de l'utilisateur (g\xe9n\xe9ralement le nom et le mot de passe) sont collect\xe9es et trait\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/WebServer/authentication.md",sourceDirName:"WebServer",slug:"/WebServer/authentication",permalink:"/docs/fr/WebServer/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fauthentication.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"authentication",title:"Authentification"},sidebar:"docs",previous:{title:"Pages d'erreur HTTP personnalis\xe9es",permalink:"/docs/fr/WebServer/errorPages"},next:{title:"Sessions Web",permalink:"/docs/fr/WebServer/sessions"}},l={},o=[{value:"Modes d\u2019authentification",id:"modes-dauthentification",level:2},{value:"Vue d\u2019ensemble",id:"vue-densemble",level:3},{value:"Authentification personnalis\xe9e (par d\xe9faut)",id:"authentification-personnalis\xe9e-par-d\xe9faut",level:3},{value:"Protocole BASIC",id:"protocole-basic",level:3},{value:"Mots de passe protocole DIGEST",id:"mots-de-passe-protocole-digest",level:3},{value:"On Web Authentication",id:"on-web-authentication",level:2},{value:"Appels des m\xe9thodes base",id:"appels-des-m\xe9thodes-base",level:3},{value:"Syntaxe",id:"syntaxe",level:3},{value:"$1 - URL",id:"1---url",level:4},{value:"$2 - En-t\xeate (header) et corps (body) de la requ\xeate HTTP",id:"2---en-t\xeate-header-et-corps-body-de-la-requ\xeate-http",level:4},{value:"$3 - Adresse IP du client Web",id:"3---adresse-ip-du-client-web",level:4},{value:"$4 - Adresse IP du serveur",id:"4---adresse-ip-du-serveur",level:4},{value:"$5 et $6 - Nom d&#39;utilisateur et mot de passe",id:"5-et-6---nom-dutilisateur-et-mot-de-passe",level:4},{value:"Param\xe8tre $0",id:"param\xe8tre-0",level:4},{value:"Exemple",id:"exemple",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"L'authentification est n\xe9cessaire lorsque vous souhaitez fournir des droits d'acc\xe8s sp\xe9cifiques aux utilisateurs Web. L'authentification d\xe9signe la mani\xe8re dont les informations concernant les r\xe9f\xe9rences de l'utilisateur (g\xe9n\xe9ralement le nom et le mot de passe) sont collect\xe9es et trait\xe9es."}),"\n",(0,t.jsx)(n.h2,{id:"modes-dauthentification",children:"Modes d\u2019authentification"}),"\n",(0,t.jsxs)(n.p,{children:["Le serveur web 4D propose trois modes d'authentification que vous pouvez s\xe9lectionner sur la page ",(0,t.jsx)(n.strong,{children:"Web"}),"/",(0,t.jsx)(n.strong,{children:"Options (I)"})," de la fen\xeatre des Propri\xe9t\xe9s :"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(266736).A+"",width:"790",height:"176"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Il est recommand\xe9 d'utiliser une authentification ",(0,t.jsx)(n.strong,{children:"personnalis\xe9e"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,t.jsx)(n.p,{children:"Le sch\xe9ma suivant r\xe9sume le syst\xe8me d'acc\xe8s au serveur web 4D :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(886887).A+"",width:"680",height:"498"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Les requ\xeates qui commencent par ",(0,t.jsx)(n.code,{children:"rest/"})," sont g\xe9r\xe9es directement par le ",(0,t.jsx)(n.a,{href:"/docs/fr/REST/configuration",children:"serveur REST"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"authentification-personnalis\xe9e-par-d\xe9faut",children:"Authentification personnalis\xe9e (par d\xe9faut)"}),"\n",(0,t.jsxs)(n.p,{children:["Dans ce mode, c'est au d\xe9veloppeur de d\xe9finir comment authentifier les utilisateurs. 4D \xe9value uniquement les requ\xeates HTTP ",(0,t.jsx)(n.a,{href:"#method-calls",children:"qui n\xe9cessitent une authentification"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Ce mode d'authentification est le plus flexible car il permet de :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"soit d\xe9l\xe9guer l'authentification de l'utilisateur \xe0 une application tierce (par exemple, un r\xe9seau social, un SSO);"}),"\n",(0,t.jsxs)(n.li,{children:["ou alors, fournir une interface \xe0 l'utilisateur (par exemple, un formulaire web) pour qu'il puisse cr\xe9er son compte dans votre base de donn\xe9es clients ; ensuite, vous pouvez authentifier les utilisateurs avec n'importe quel algorithme personnalis\xe9 (voir ",(0,t.jsx)(n.a,{href:"/docs/fr/WebServer/sessions#example",children:"cet exemple"}),' du chapitre "Sessions utilisateurs"). L\'important est de ne jamais stocker le mot de passe en clair, en utilisant du code tel que :']}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"//... user account creation\nds.webUser.password:=Generate password hash($password)  \nds.webUser.save()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Voir \xe9galement ",(0,t.jsx)(n.a,{href:"/docs/fr/WebServer/gettingStarted#authenticating-users",children:"cet exemple"}),' du chapitre "Prise en main".']}),"\n",(0,t.jsxs)(n.p,{children:["Si aucune authentification personnalis\xe9e n'est fournie, 4D appelle la m\xe9thode base ",(0,t.jsx)(n.a,{href:"#on-web-authentication",children:(0,t.jsx)(n.code,{children:"On Web Authentication"})})," (si elle existe). En plus de $1 et $2, seules les adresses IP du navigateur et du serveur ($3 et $4) sont fournies, le nom d'utilisateur et le mot de passe ($5 et $6) sont vides. La m\xe9thode doit retourner ",(0,t.jsx)(n.strong,{children:"True"})," dans $0 si l'utilisateur est authentifi\xe9 avec succ\xe8s. Ensuite, la ressource qui fait l'objet de la requ\xeate est fournie. Si l'authentification \xe9choue, ",(0,t.jsx)(n.strong,{children:"False"})," est retourn\xe9 dans $0."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Si la m\xe9thode de base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," n'existe pas, les connexions sont automatiquement accept\xe9es (mode test)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"protocole-basic",children:"Protocole BASIC"}),"\n",(0,t.jsx)(n.p,{children:"Lorsqu'un utilisateur se connecte au serveur, une bo\xeete de dialogue standard appara\xeet sur son navigateur afin qu'il saisisse son nom d'utilisateur et son mot de passe."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Le nom et le mot de passe saisis par l'utilisateur sont envoy\xe9s en clair dans l'en-t\xeate de la requ\xeate HTTP. Ce mode requiert g\xe9n\xe9ralement le protocole HTTPS pour assurer la confidentialit\xe9."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Les valeurs saisies sont ensuite \xe9valu\xe9es :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si l'option ",(0,t.jsx)(n.strong,{children:"Inclure les mots de passe 4D"})," est coch\xe9e, les informations d'identification des utilisateurs seront d'abord \xe9valu\xe9es par rapport \xe0 la ",(0,t.jsx)(n.a,{href:"/docs/fr/Users/overview",children:"table interne des utilisateurs 4D"}),".\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si le nom d'utilisateur envoy\xe9 par le navigateur existe dans la table des utilisateurs 4D et que le mot de passe est correct, la connexion est accept\xe9e. Si le mot de passe est incorrect, la connexion est refus\xe9e."}),"\n",(0,t.jsxs)(n.li,{children:["Si le nom d'utilisateur n'existe pas dans la table des utilisateurs 4D, la m\xe9thode base ",(0,t.jsx)(n.a,{href:"#on-web-authentication",children:(0,t.jsx)(n.code,{children:"On Web Authentication"})})," est appel\xe9e. Si la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," n'existe pas, les connexions sont rejet\xe9es."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Si l'option ",(0,t.jsx)(n.strong,{children:"Inclure les mots de passe 4D"})," n'est pas coch\xe9e, les informations d'identification des utilisateurs sont envoy\xe9es \xe0 la m\xe9thode base ",(0,t.jsx)(n.a,{href:"#on-web-authentication",children:(0,t.jsx)(n.code,{children:"On Web Authentication"})})," avec les autres param\xe8tres de connexion (adresse et port IP, URL...) afin que vous puissiez les traiter. Si la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," n'existe pas, les connexions sont rejet\xe9es."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Avec le serveur Web du client 4D, gardez \xe0 l'esprit que tous les sites publi\xe9s par les machines 4D Client partageront la m\xeame table d'utilisateurs. La validation des utilisateurs/mots de passe est effectu\xe9e par l'application 4D Server."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"mots-de-passe-protocole-digest",children:"Mots de passe protocole DIGEST"}),"\n",(0,t.jsx)(n.p,{children:'Ce mode offre un niveau de s\xe9curit\xe9 plus \xe9lev\xe9 car les informations d\'authentification sont trait\xe9es par un processus \xe0 sens unique appel\xe9 "hashing" qui rend leur contenu impossible \xe0 d\xe9chiffrer.'}),"\n",(0,t.jsxs)(n.p,{children:["Comme en mode BASIC, l'utilisateur doit saisir son nom et mot de passe lors de la connexion. La m\xe9thode base ",(0,t.jsx)(n.a,{href:"#on-web-authentication",children:(0,t.jsx)(n.code,{children:"On Web Authentication"})})," est ensuite appel\xe9e. Lorsque le mode DIGEST est activ\xe9, le param\xe8tre $6 (mot de passe) est toujours retourn\xe9 vide. En effet, lors de l'utilisation de ce mode, ces informations ne passent pas par le r\xe9seau en texte clair (non chiffr\xe9). Il est donc imp\xe9ratif dans ce cas d'\xe9valuer les demandes de connexion \xe0 l'aide de la commande ",(0,t.jsx)(n.code,{children:"WEB Validate digest"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Vous devez red\xe9marrer le serveur web pour que les modifications apport\xe9es \xe0 ces param\xe8tres soient prises en compte."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"on-web-authentication",children:"On Web Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," est charg\xe9e de g\xe9rer l'acc\xe8s au moteur du serveur web. Elle est appel\xe9e par 4D ou 4D Server lorsqu'une requ\xeate HTTP dynamique est re\xe7ue."]}),"\n",(0,t.jsx)(n.h3,{id:"appels-des-m\xe9thodes-base",children:"Appels des m\xe9thodes base"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," est automatiquement appel\xe9e lorsqu'une requ\xeate ou un traitement n\xe9cessite l'ex\xe9cution de code 4D (\xe0 l'exception des appels REST). Elle est \xe9galement appel\xe9e lorsque le serveur web re\xe7oit une URL statique invalide (par exemple, si la page statique demand\xe9e n'existe pas)."]}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," est donc appel\xe9e :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"lorsque le serveur web re\xe7oit une URL demandant une ressource qui n'existe pas"}),"\n",(0,t.jsxs)(n.li,{children:["lorsque le serveur web re\xe7oit une URL commen\xe7ant par ",(0,t.jsx)(n.code,{children:"4DACTION/"}),", ",(0,t.jsx)(n.code,{children:"4DCGI/"}),"..."]}),"\n",(0,t.jsxs)(n.li,{children:["lorsque le serveur web re\xe7oit une URL d'acc\xe8s root et aucune page d'accueil n'a \xe9t\xe9 d\xe9finie dans les Param\xe8tres ou \xe0 l'aide de la commande ",(0,t.jsx)(n.code,{children:"WEB SET HOME PAGE"})]}),"\n",(0,t.jsxs)(n.li,{children:["lorsque le serveur web traite une balise ex\xe9cutant du code (par exemple ",(0,t.jsx)(n.code,{children:"4DSCRIPT"}),") dans une page semi-dynamique."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," n'est PAS appel\xe9e :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"lorsque le serveur web re\xe7oit une URL demandant une page statique valide."}),"\n",(0,t.jsxs)(n.li,{children:["lorsque le serveur web re\xe7oit une URL commen\xe7ant par ",(0,t.jsx)(n.code,{children:"rest/"})," et que le serveur REST est lanc\xe9 (dans ce cas, l'authentification est g\xe9r\xe9e via la m\xe9thode base ",(0,t.jsx)(n.a,{href:"/docs/fr/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,t.jsx)(n.code,{children:"On REST Authentication"})})," ou les ",(0,t.jsx)(n.a,{href:"/docs/fr/REST/configuration#using-the-structure-settings",children:"param\xe8tres de structure"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"syntaxe",children:"Syntaxe"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"On Web Authentication"}),"( ",(0,t.jsx)(n.em,{children:"$1"})," : Text ; ",(0,t.jsx)(n.em,{children:"$2"})," : Text ; ",(0,t.jsx)(n.em,{children:"$3"})," : Text ; ",(0,t.jsx)(n.em,{children:"$4"})," : Text ; ",(0,t.jsx)(n.em,{children:"$5"})," : Text ; ",(0,t.jsx)(n.em,{children:"$6"})," : Text ) -> $0 : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$1"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Variable URL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$2"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"En-t\xeates HTTP + Corps HTTP (jusqu'\xe0 une limite de 32 ko)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$3"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Adresse IP du client web (navigateur)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$4"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Adresse IP du serveur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$5"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Nom d'utilisateur"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$6"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Mot de passe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$0"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"True = demande accept\xe9e, False = demande rejet\xe9e"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Vous devez d\xe9clarer ces param\xe8tres de la mani\xe8re suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"//On Web Authentication \n \n C_TEXT($1;$2;$3;$4;$5;$6)\n C_BOOLEAN($0)\n \n//Code de la m\xe9thode base\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternativement, vous pouvez utiliser la syntaxe des ",(0,t.jsx)(n.a,{href:"/docs/fr/Concepts/parameters#named-parameters",children:"param\xe8tres nomm\xe9s"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"// On Web Authentication\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text) \\\n  -> $RequestAccepted : Boolean\n\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Tous les param\xe8tres de la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," ne sont pas n\xe9cessairement remplis. Les informations re\xe7ues par la m\xe9thode base d\xe9pendent du ",(0,t.jsx)(n.a,{href:"#mode-d-authentification",children:"mode d'authentification"})," s\xe9lectionn\xe9."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"1---url",children:"$1 - URL"}),"\n",(0,t.jsxs)(n.p,{children:["Le premier param\xe8tre (",(0,t.jsx)(n.code,{children:"$1"}),") est l'URL re\xe7ue par le serveur, de laquelle l'adresse de l'h\xf4te a \xe9t\xe9 enlev\xe9e."]}),"\n",(0,t.jsx)(n.p,{children:"Prenons l'exemple d'une connexion Intranet. Supposons que l'adresse IP de votre machine serveur Web 4D est 123.45.67.89. Le tableau suivant montre les valeurs de $1 en fonction de l'URL saisie dans le navigateur Web :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"URL entr\xe9e dans le navigateur web"}),(0,t.jsx)(n.th,{children:"Valeur du param\xe8tre $1"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"123.45.67.89"}),(0,t.jsx)(n.td,{children:"/"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://123.45.67.89",children:"http://123.45.67.89"})}),(0,t.jsx)(n.td,{children:"/"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"123.45.67.89/Customers"}),(0,t.jsx)(n.td,{children:"/Customers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://123.45.67.89/Customers/Add",children:"http://123.45.67.89/Customers/Add"})}),(0,t.jsx)(n.td,{children:"/Customers/Add"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"123.45.67.89/Do_This/If_OK/Do_That"}),(0,t.jsx)(n.td,{children:"/Do_This/If_OK/Do_That"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"2---en-t\xeate-header-et-corps-body-de-la-requ\xeate-http",children:"$2 - En-t\xeate (header) et corps (body) de la requ\xeate HTTP"}),"\n",(0,t.jsxs)(n.p,{children:["Le deuxi\xe8me param\xe8tre (",(0,t.jsx)(n.code,{children:"$2"}),") est l'en-t\xeate et le corps de la requ\xeate HTTP envoy\xe9e par le navigateur web. Notez que ces informations sont transmises telles quelles \xe0 votre m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"}),". Son contenu variera en fonction de la nature du navigateur web qui tente la connexion."]}),"\n",(0,t.jsxs)(n.p,{children:["Si votre application utilise ces informations, il vous appartient d'analyser l'en-t\xeate et le corps. Vous pouvez utiliser les commandes ",(0,t.jsx)(n.code,{children:"WEB GET HTTP HEADER"})," et ",(0,t.jsx)(n.code,{children:"WEB GET HTTP BODY"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Pour des raisons de performance, la taille des donn\xe9es passant par le param\xe8tre $2 ne doit pas d\xe9passer 32 Ko. Au-del\xe0 de cette taille, ils sont tronqu\xe9s par le serveur HTTP 4D."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"3---adresse-ip-du-client-web",children:"$3 - Adresse IP du client Web"}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.code,{children:"$3"})," re\xe7oit l'adresse IP de la machine du navigateur. Cette information peut vous permettre de distinguer entre les connexions intranet et internet."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["4D renvoie les adresses IPv4 dans un format hybride IPv6/IPv4 \xe9crit avec un pr\xe9fixe de 96 bits, par exemple ::ffff:192.168.2.34 pour l'adresse IPv4 192.168.2.34. Pour plus d'informations, consultez la section ",(0,t.jsx)(n.a,{href:"/docs/fr/WebServer/webServerConfig#about-ipv6-support",children:"Support IPv6"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"4---adresse-ip-du-serveur",children:"$4 - Adresse IP du serveur"}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.code,{children:"$4"})," re\xe7oit l'adresse IP utilis\xe9e pour appeler le serveur web. 4D permet le multi-homing, ce qui vous permet d'exploiter des machines avec plus d'une adresse IP. Pour plus d'informations, veuillez consulter la ",(0,t.jsx)(n.a,{href:"/docs/fr/WebServer/webServerConfig#ip-address-to-listen",children:"Page Configuration"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"5-et-6---nom-dutilisateur-et-mot-de-passe",children:"$5 et $6 - Nom d'utilisateur et mot de passe"}),"\n",(0,t.jsxs)(n.p,{children:["Les param\xe8tres ",(0,t.jsx)(n.code,{children:"$5"})," et ",(0,t.jsx)(n.code,{children:"$6"})," re\xe7oivent le nom d'utilisateur et le mot de passe saisis par l'utilisateur dans la bo\xeete de dialogue d'identification standard affich\xe9e par le navigateur. Cette bo\xeete de dialogue appara\xeet pour chaque connexion, si l'authentification ",(0,t.jsx)(n.a,{href:"#basic-protocol",children:"basique"})," ou ",(0,t.jsx)(n.a,{href:"#digest-protocol",children:"digest"})," est s\xe9lectionn\xe9e."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Si le nom d'utilisateur envoy\xe9 par le navigateur existe dans 4D, le param\xe8tre $6 (le mot de passe de l'utilisateur) n'est pas renvoy\xe9 pour des raisons de s\xe9curit\xe9."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"param\xe8tre-0",children:"Param\xe8tre $0"}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," retourne un bool\xe9en dans $0 :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Si $0 est True, la connexion est accept\xe9e."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Si $0 est False, la connexion est refus\xe9e."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Connection"})," est seulement ex\xe9cut\xe9e si la connexion a \xe9t\xe9 accept\xe9e par ",(0,t.jsx)(n.code,{children:"On Web Authentication"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ATTENTION"}),(0,t.jsx)(n.br,{}),"Si aucune valeur n'est d\xe9finie pour $0 ou si $0 n'est pas d\xe9fini dans la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"}),", la connexion est consid\xe9r\xe9e comme accept\xe9e et la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Connection"})," est ex\xe9cut\xe9e."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["N'appelez pas d'\xe9l\xe9ments d'interface dans la m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," (",(0,t.jsx)(n.code,{children:"ALERT"}),", ",(0,t.jsx)(n.code,{children:"DIALOG"}),", etc.) car sinon son ex\xe9cution sera interrompue et la connexion refus\xe9e. La m\xeame chose se produira s'il y a une erreur lors de son traitement."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Exemple de m\xe9thode base ",(0,t.jsx)(n.code,{children:"On Web Authentication"})," en mode ",(0,t.jsx)(n.a,{href:"#digest-protocol",children:"DIGEST"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' // On Web Authentication\n #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \\\n \t$user : Text; $pw : Text) -> $valid : Boolean\n  \n var $found : cs.WebUserSelection\n $valid:=False\n\n $found:=ds.WebUser.query("User === :1";$user)\n If($found.length=1) //User est trouv\xe9\n \t$valid:=WEB Validate digest($user;[WebUser]password)\n Else\n    $valid:=False // User n\'existe pas\n End if\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},266736:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,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"},886887:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/serverAccess-b28091b35f6bc6b3f5605b27e8333135.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);