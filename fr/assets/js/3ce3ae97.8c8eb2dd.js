"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47231],{185953:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=n(474848),r=n(28453);const l={id:"SessionClass",title:"Session"},t=void 0,d={id:"API/SessionClass",title:"Session",description:"Les objets Session sont retourn\xe9s par la commande Session lorsque les sessions extensibles sont activ\xe9es dans votre projet. L'objet Session est automatiquement cr\xe9\xe9 et maintenu par le serveur web 4D pour contr\xf4ler la session d'un client web (par exemple, un navigateur). Cet objet fournit au d\xe9veloppeur web une interface avec la session de l'utilisateur, permettant de g\xe9rer les privil\xe8ges, de stocker des donn\xe9es contextuelles, de partager des informations entre les process et de lancer des processus pr\xe9emptifs li\xe9s \xe0 la session.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/docs/fr/20/API/SessionClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/docs/fr/20/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/docs/fr/20/API/SignalClass"}},c={},o=[{value:"Sommaire",id:"sommaire",level:3},{value:"Session",id:"session",level:2},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Description",id:"description-1",level:4},{value:"Exemple",id:"exemple-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Description",id:"description-2",level:4},{value:"Exemple",id:"exemple-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Description",id:"description-3",level:4},{value:"Exemple",id:"exemple-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Description",id:"description-4",level:4},{value:"Exemple",id:"exemple-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Description",id:"description-5",level:4},{value:"Exemple",id:"exemple-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Description",id:"description-6",level:4},{value:"Exemple",id:"exemple-6",level:4},{value:".storage",id:"storage",level:2},{value:"Description",id:"description-7",level:4},{value:"Exemple",id:"exemple-7",level:4},{value:".userName",id:"username",level:2},{value:"Description",id:"description-8",level:4}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Les objets Session sont retourn\xe9s par la commande ",(0,i.jsx)(s.a,{href:"#session",children:(0,i.jsx)(s.code,{children:"Session"})})," lorsque ",(0,i.jsx)(s.a,{href:"/docs/fr/20/WebServer/sessions#enabling-sessions",children:"les sessions extensibles sont activ\xe9es dans votre projet"}),". L'objet Session est automatiquement cr\xe9\xe9 et maintenu par le serveur web 4D pour contr\xf4ler la session d'un client web (par exemple, un navigateur). Cet objet fournit au d\xe9veloppeur web une interface avec la session de l'utilisateur, permettant de g\xe9rer les privil\xe8ges, de stocker des donn\xe9es contextuelles, de partager des informations entre les process et de lancer des processus pr\xe9emptifs li\xe9s \xe0 la session."]}),"\n",(0,i.jsxs)(s.p,{children:["Pour des informations d\xe9taill\xe9es sur l'impl\xe9mentation de la session, veuillez consulter la section ",(0,i.jsx)(s.a,{href:"/docs/fr/20/WebServer/sessions",children:"Sessions du serveur web"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsx)(s.tr,{children:(0,i.jsx)(s.th,{})})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"#clearprivileges",children:(0,i.jsx)(s.strong,{children:".clearPrivileges()"})}),"\xa0\xa0\xa0\xa0supprime tous les privil\xe8ges associ\xe9s \xe0 la session"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#expirationdate",children:[(0,i.jsx)(s.strong,{children:".expirationDate"})," : Text"]}),"\xa0\xa0\xa0\xa0la date et l'heure d'expiration du cookie de session"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#hasprivilege",children:[(0,i.jsx)(s.strong,{children:".hasPrivilege"}),"( ",(0,i.jsx)(s.em,{children:"privilege"})," : Text ) : Boolean"]}),"\xa0\xa0\xa0\xa0renvoie Vrai si le privil\xe8ge est associ\xe9 \xe0 la session, et Faux sinon"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#idletimeout",children:[(0,i.jsx)(s.strong,{children:".idleTimeout"})," : Integer"]}),"\xa0\xa0\xa0\xa0le d\xe9lai maximal d'inactivit\xe9 de session (en minutes), au-del\xe0 duquel la session est automatiquement ferm\xe9e par 4D"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#isguest",children:[(0,i.jsx)(s.strong,{children:".isGuest()"})," : Boolean"]}),"\xa0\xa0\xa0\xa0retourne True si la session est une session invit\xe9 (c'est-\xe0-dire qu'elle n'a pas de privil\xe8ges)"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#setprivileges",children:[(0,i.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(s.em,{children:"privilege"})," : Text )",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(s.em,{children:"privileges"})," : Collection )",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(s.em,{children:"settings"})," : Object )"]}),"\xa0\xa0\xa0\xa0associe \xe0 la session le(s) privil\xe8ge(s) et/ou le(s) r\xf4le(s) d\xe9fini(s) dans le param\xe8tre"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#storage",children:[(0,i.jsx)(s.strong,{children:".storage"})," : Object"]}),"\xa0\xa0\xa0\xa0un objet partag\xe9 qui peut \xeatre utilis\xe9 pour stocker des informations disponibles pour toutes les requ\xeates du client web"]})}),(0,i.jsx)(s.tr,{children:(0,i.jsxs)(s.td,{children:[(0,i.jsxs)(s.a,{href:"#username",children:[(0,i.jsx)(s.strong,{children:".userName"})," : Text"]}),"\xa0\xa0\xa0\xa0le nom d'utilisateur associ\xe9 \xe0 la session"]})})]})]}),"\n",(0,i.jsx)(s.h2,{id:"session",children:"Session"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tres"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"center"}}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"4D.Session"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(s.td,{children:"Objet session"})]})})]}),"\n",(0,i.jsx)(s.p,{children:"|"}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.code,{children:"Session"})," renvoie l'objet ",(0,i.jsx)(s.code,{children:"Session"})," correspondant \xe0 la session web utilisateur extensible courante."]}),"\n",(0,i.jsxs)(s.p,{children:["Cette commande fonctionne uniquement lorsque les ",(0,i.jsx)(s.a,{href:"/docs/fr/20/WebServer/sessions#enabling-sessions",children:"sessions extensibles sont activ\xe9es"}),". Elle retourne ",(0,i.jsx)(s.em,{children:"Null"})," lorsque ces sessions sont inactives ou lorsque les anciennes sessions sont utilis\xe9es."]}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque les sessions extensibles sont activ\xe9es, l'objet ",(0,i.jsx)(s.code,{children:"Session"})," est disponible depuis n'importe quel process web dans les contextes suivants :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["M\xe9thodes base ",(0,i.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,i.jsx)(s.code,{children:"On Web Connection"}),", et ",(0,i.jsx)(s.code,{children:"On REST Authentication"}),","]}),"\n",(0,i.jsxs)(s.li,{children:["M\xe9thodes base ",(0,i.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,i.jsx)(s.code,{children:"On Mobile App Authentication"})})," et ",(0,i.jsx)(s.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,i.jsx)(s.code,{children:"On Mobile App Action"})})," pour les requ\xeates mobiles,"]}),"\n",(0,i.jsxs)(s.li,{children:["Les ",(0,i.jsx)(s.a,{href:"/docs/fr/20/ORDA/ordaClasses",children:"fonctions Data Model Class"})," ORDA appel\xe9es par des requ\xeates REST,"]}),"\n",(0,i.jsx)(s.li,{children:"code trait\xe9 par les balises 4D dans les pages semi-dynamiques (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"}),"\n",(0,i.jsx)(s.li,{children:'les m\xe9thodes projet avec l\'attribut "Available through 4D tags and URLs (4DACTION...)" et appel\xe9es via les urls 4DACTION/.'}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(s.p,{children:["Vous avez d\xe9fini la m\xe9thode ",(0,i.jsx)(s.code,{children:"action_Session"})," ayant l'attribut \"Disponible via Balises HTML et URLs 4D\". Vous appelez la m\xe9thode en saisissant l'URL suivant dans votre navigateur :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'  //m\xe9thode action_Session\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //appel de la fonction hasPrivilege\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n'})}),"\n",(0,i.jsx)(s.h2,{id:"clearprivileges",children:".clearPrivileges()"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:".clearPrivileges()"})}),"\n",(0,i.jsx)(s.p,{children:"| Param\xe8tres | Type |  | Description                                            |\n| ---------- | ---- |::| ------------------------------------------------------ |\n|            |      |  | Ne requiert aucun param\xe8tre|"}),"\n",(0,i.jsx)(s.p,{children:"|"}),"\n",(0,i.jsx)(s.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La fonction ",(0,i.jsx)(s.code,{children:".clearPrivileges()"})," supprime tous les privil\xe8ges associ\xe9s \xe0 la session. En r\xe9sultat, la session devient automatiquement une session Guest."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-1",children:"Exemple"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"//Invalider une session\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest est mis \xe0 True\n"})}),"\n",(0,i.jsx)(s.h2,{id:"expirationdate",children:".expirationDate"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".expirationDate"})," : Text"]}),"\n",(0,i.jsx)(s.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".expirationDate"})," contient la date et l'heure d'expiration du cookie de session. La valeur est exprim\xe9e sous forme de texte au format ISO 8601 : ",(0,i.jsx)(s.code,{children:"YYYY-MM-DDTHH:MM:SS.mmmZ"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,i.jsx)(s.strong,{children:"lecture seule"}),". Elle est automatiquement recalcul\xe9e si la valeur de la propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"#idletimeout",children:(0,i.jsx)(s.code,{children:".idleTimeout"})})," est modifi\xe9e."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-2",children:"Exemple"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'var $expiration : Text\n$expiration:=Session.expirationDate //ex : "2021-11-05T17:10:42Z"\n'})}),"\n",(0,i.jsx)(s.h2,{id:"hasprivilege",children:".hasPrivilege()"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".hasPrivilege"}),"( ",(0,i.jsx)(s.em,{children:"privilege"})," : Text ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tres"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"center"}}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privilege"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(s.td,{children:"Nom du privil\xe8ge \xe0 v\xe9rifier"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsxs)(s.td,{children:["Vrai si la session dispose du ",(0,i.jsx)(s.em,{children:"privilege"}),", sinon Faux"]})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"|"}),"\n",(0,i.jsx)(s.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La fonction ",(0,i.jsx)(s.code,{children:".hasPrivilege()"})," renvoie Vrai si le privil\xe8ge est associ\xe9 \xe0 la session, et Faux sinon."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-3",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:'Vous voulez v\xe9rifier si le privil\xe8ge "WebAdmin" est associ\xe9 \xe0 la session :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n    //Acc\xe8s accord\xe9, ne rien faire\nElse\n    //Afficher une page d\'authentification\n\nEnd if\n'})}),"\n",(0,i.jsx)(s.h2,{id:"idletimeout",children:".idleTimeout"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".idleTimeout"})," : Integer"]}),"\n",(0,i.jsx)(s.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".idleTimeout"})," contient le d\xe9lai maximal d'inactivit\xe9 de session (en minutes), au-del\xe0 duquel la session est automatiquement ferm\xe9e par 4D."]}),"\n",(0,i.jsx)(s.p,{children:"Si cette propri\xe9t\xe9 n'est pas d\xe9finie, sa valeur par d\xe9faut est 60 (1h)."}),"\n",(0,i.jsxs)(s.p,{children:["Lorsque cette propri\xe9t\xe9 est modifi\xe9e, la propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"#expirationdate",children:(0,i.jsx)(s.code,{children:".expirationDate"})})," est mise \xe0 jour en cons\xe9quence."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"La valeur ne peut pas \xeatre < 60 ; si une valeur inf\xe9rieure est d\xe9finie, le timeout est \xe9lev\xe9 \xe0 60."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,i.jsx)(s.strong,{children:"lecture-\xe9criture"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-4",children:"Exemple"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"If (Session.isGuest())\n        // Une session Guest se ferme apr\xe8s 60 minutes d'inactivit\xe9.\n    Session.idleTimeout:=60\nElse\n        //Les autres sessions se ferment apr\xe8s 120 minutes d'inactivit\xe9.\n    Session.idleTimeout:=120\nEnd if\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"isguest",children:".isGuest()"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".isGuest()"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tres"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"center"}}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(s.td,{children:"Vrai s'il s'agit d'une session Guest, sinon Faux"})]})})]}),"\n",(0,i.jsx)(s.p,{children:"|"}),"\n",(0,i.jsx)(s.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La fonction ",(0,i.jsx)(s.code,{children:".isGuest()"})," retourne True si la session est une session invit\xe9 (c'est-\xe0-dire qu'elle n'a pas de privil\xe8ges)."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-5",children:"Exemple"}),"\n",(0,i.jsxs)(s.p,{children:["Dans la m\xe9thode base ",(0,i.jsx)(s.code,{children:"On Web Connection"})," :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"If (Session.isGuest())\n    //Faire quelque chose pour l'utilisateur invit\xe9\nEnd if\n"})}),"\n",(0,i.jsx)(s.h2,{id:"setprivileges",children:".setPrivileges()"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"19 R8"}),(0,i.jsx)(s.td,{children:'Prise en charge de la propri\xe9t\xe9 "roles" dans settings'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(s.em,{children:"privilege"})," : Text )",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(s.em,{children:"privileges"})," : Collection )",(0,i.jsx)(s.br,{}),(0,i.jsx)(s.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(s.em,{children:"settings"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tres"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"center"}}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privilege"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(s.td,{children:"Nom de privil\xe8ge"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privileges"}),(0,i.jsx)(s.td,{children:"Collection"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(s.td,{children:"Collection de noms de privil\xe8ges"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"settings"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(s.td,{children:'Objet contenant une propri\xe9t\xe9 "privileges" (texte ou collection)'})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"|"}),"\n",(0,i.jsx)(s.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La fonction ",(0,i.jsx)(s.code,{children:".setPrivileges()"})," associe \xe0 la session le(s) privil\xe8ge(s) et/ou le(s) r\xf4le(s) d\xe9fini(s) dans le param\xe8tre."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"privilege"}),", passez une cha\xeene contenant un nom de privil\xe8ge (ou plusieurs noms de privil\xe8ges s\xe9par\xe9s par des virgules)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"privileges"}),", passez une collection de cha\xeenes contenant des noms de privil\xe8ges."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"settings"}),", passez un objet contenant les propri\xe9t\xe9s suivantes :"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privileges"}),(0,i.jsx)(s.td,{children:"Text ou Collection"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.li,{children:"Cha\xeene contenant un nom de privil\xe8ge, ou"}),(0,i.jsx)(s.li,{children:"Collection de cha\xeenes contenant des noms de privil\xe8ges"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"roles"}),(0,i.jsx)(s.td,{children:"Text ou Collection"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.li,{children:"Cha\xeene contenant un nom de r\xf4le, ou"}),(0,i.jsx)(s.li,{children:"Collection de cha\xeenes contenant des noms de roles"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"userName"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"Nom d'utilisateur \xe0 associer \xe0 la session (optionnel)"})]})]})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Les privil\xe8ges et les r\xf4les sont d\xe9finis dans le fichier ",(0,i.jsx)(s.a,{href:"/docs/fr/20/ORDA/privileges#rolesjson-file",children:(0,i.jsx)(s.code,{children:"roles.json"})})," du projet. Pour plus d'informations, veuillez vous reporter \xe0 la section ",(0,i.jsx)(s.a,{href:"/docs/fr/20/ORDA/privileges",children:(0,i.jsx)(s.strong,{children:"Privileges"})})," ."]})}),"\n",(0,i.jsxs)(s.p,{children:["Si la propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:"privileges"})," ou ",(0,i.jsx)(s.code,{children:"roles"})," contient un nom qui n'est pas d\xe9clar\xe9 dans le fichier ",(0,i.jsx)(s.a,{href:"/docs/fr/20/ORDA/privileges#rolesjson-file",children:(0,i.jsx)(s.code,{children:"roles.json"})})," , elle est ignor\xe9e."]}),"\n",(0,i.jsxs)(s.p,{children:["Par d\xe9faut lorsqu'aucun privil\xe8ge ou r\xf4le n'est associ\xe9 \xe0 la session, la session est une ",(0,i.jsx)(s.a,{href:"#isguest",children:"session Guest"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"#username",children:(0,i.jsx)(s.code,{children:"userName"})})," est accessible au niveau de l'objet session (lecture seulement)."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-6",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"Dans une m\xe9thode d'authentification personnalis\xe9e, vous assignez le privil\xe8ge \"WebAdmin\" \xe0 l'utilisateur :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"var $userOK : Boolean\n\n... //Authentifier l'utilisateur\n\nIf ($userOK) //L'utilisateur a \xe9t\xe9 approuv\xe9\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection(\"WebAdmin\")\n  Session.setPrivileges($info)\nEnd if\n\n"})}),"\n",(0,i.jsx)(s.h2,{id:"storage",children:".storage"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".storage"})," : Object"]}),"\n",(0,i.jsx)(s.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".storage"})," contient un objet partag\xe9 qui peut \xeatre utilis\xe9 pour stocker des informations disponibles pour toutes les requ\xeates du client web."]}),"\n",(0,i.jsxs)(s.p,{children:["Lorsqu'un objet ",(0,i.jsx)(s.code,{children:"Session"})," est cr\xe9\xe9, la propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".storage"})," est vide. Puisqu'il s'agit d'un objet partag\xe9, cette propri\xe9t\xe9 sera disponible dans l'objet ",(0,i.jsx)(s.code,{children:"Storage"})," du serveur."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Tout comme l'objet ",(0,i.jsx)(s.code,{children:"Storage"})," du serveur, la propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".storage"})," est toujours \"single\" : l'ajout d'un objet partag\xe9 ou d'une collection partag\xe9e \xe0 ",(0,i.jsx)(s.code,{children:".storage"})," ne cr\xe9e pas de groupe partag\xe9."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est elle-m\xeame en ",(0,i.jsx)(s.strong,{children:"lecture seulement"})," mais elle retourne un objet en lecture-\xe9criture."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple-7",children:"Exemple"}),"\n",(0,i.jsxs)(s.p,{children:["Vous voulez stocker l'adresse IP du client dans la propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".storage"}),". Vous pouvez \xe9crire dans la m\xe9thode base ",(0,i.jsx)(s.code,{children:"On Web Authentication"})," :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n\n'})}),"\n",(0,i.jsx)(s.h2,{id:"username",children:".userName"}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Release"}),(0,i.jsx)(s.th,{children:"Modifications"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"18 R6"}),(0,i.jsx)(s.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:".userName"})," : Text"]}),"\n",(0,i.jsx)(s.h4,{id:"description-8",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:".userName"})," contient le nom d'utilisateur associ\xe9 \xe0 la session. Vous pouvez vous en servir pour identifier l'utilisateur dans votre code."]}),"\n",(0,i.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est une cha\xeene vide par d\xe9faut. Elle peut \xeatre d\xe9finie via la propri\xe9t\xe9 ",(0,i.jsx)(s.code,{children:"privileges"})," de la fonction ",(0,i.jsx)(s.a,{href:"#setprivileges",children:(0,i.jsx)(s.code,{children:"setPrivileges()"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Cette propri\xe9t\xe9 est en ",(0,i.jsx)(s.strong,{children:"lecture seule"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>d});var i=n(296540);const r={},l=i.createContext(r);function t(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);