/*! For license information please see 6c3899f3.356cbb36.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88488],{352026:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(474848),t=s(28453);const i={id:"WebSocketClass",title:"WebSocket"},l=void 0,c={id:"API/WebSocketClass",title:"WebSocket",description:"La classe WebSocket permet d'ouvrir une connexion cliente WebSocket avec un serveur, d'envoyer et de recevoir des donn\xe9es et de fermer la connexion.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/API/WebSocketClass.md",sourceDirName:"API",slug:"/API/WebSocketClass",permalink:"/docs/fr/API/WebSocketClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebSocketClass",title:"WebSocket"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/fr/API/WebServerClass"},next:{title:"WebSocketConnection",permalink:"/docs/fr/API/WebSocketConnectionClass"}},d={},o=[{value:"Exemple",id:"Exemple",level:3},{value:"Objet WebSocket",id:"Objet-WebSocket",level:3},{value:"4D.WebSocket.new()",id:"4DWebSocketnew",level:2},{value:"Param\xe8tre <em>connectionHandler</em>",id:"Param\xe8tre-connectionHandler",level:3},{value:"Exemple",id:"Exemple-1",level:4},{value:".dataType",id:"dataType",level:2},{value:"Description",id:"Description",level:4},{value:".handler",id:"handler",level:2},{value:"Description",id:"Description-1",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"Description-2",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"Description-3",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"Description-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"Description-5",level:4},{value:".url",id:"url",level:2},{value:"Description",id:"Description-6",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La classe ",(0,r.jsx)(n.code,{children:"WebSocket"})," permet d'ouvrir une connexion cliente WebSocket avec un serveur, d'envoyer et de recevoir des donn\xe9es et de fermer la connexion."]}),"\n",(0,r.jsx)(n.p,{children:"Les connexions clientes WebSocket sont utiles, par exemple, pour recevoir des donn\xe9es financi\xe8res en temps r\xe9el ou pour envoyer et recevoir des messages \xe0 partir d'une messagerie instantan\xe9e."}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"Exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Dans cet exemple, nous cr\xe9ons un client WebSocket tr\xe8s basique."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Cr\xe9ez la classe utilisateur ",(0,r.jsx)(n.code,{children:"WSConnectionHandler"})," contenant la ou les fonction(s) de callback utilis\xe9e(s) pour g\xe9rer les callbacks d'\xe9v\xe9nements WebSocket :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler class\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("Connection closed")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Connexion au serveur WebSocket \xe0 partir d'un formulaire 4D en instanciant un 4D.WebSocket :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Pour envoyer des messages au serveur WebSocket \xe0 partir du formulaire 4D, vous pouvez \xe9crire :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Form.webSocket.send("Hello world")\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"Objet-WebSocket",children:"Objet WebSocket"}),"\n",(0,r.jsx)(n.p,{children:"Les objets WebSocket exposent les propri\xe9t\xe9s et fonctions suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#dataType",children:[(0,r.jsx)(n.strong,{children:".dataType"})," : Text"]}),(0,r.jsx)(n.br,{}),"le type de contenu du body de la r\xe9ponse"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#handler",children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,r.jsx)(n.br,{}),"l'accesseur qui r\xe9cup\xe8re l'objet ",(0,r.jsx)(n.code,{children:"connectionHandler"})," utilis\xe9 pour initier la connexion"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#id",children:[(0,r.jsx)(n.strong,{children:".id"})," : Longint"]}),(0,r.jsx)(n.br,{}),"l'identifiant unique de la connexion"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),(0,r.jsx)(n.br,{}),"envoie ",(0,r.jsx)(n.em,{children:"message"})," au serveur WebSocket dans le type de donn\xe9es d\xe9fini (Text, Blob ou Object)"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#status",children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),(0,r.jsx)(n.br,{}),'le statut courant de la connexion (peut \xeatre "Connecting", "Closing", "Closed" ou "Connected")']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#terminate",children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"reason"})," : Text } } )"]}),(0,r.jsx)(n.br,{}),"referme la connexion WebSocket, avec les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"code"})," et ",(0,r.jsx)(n.em,{children:"reason"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#url",children:[(0,r.jsx)(n.strong,{children:".url"})," : Text"]}),(0,r.jsx)(n.br,{}),"l'URL auquel le WebSocket s'est connect\xe9"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4DWebSocketnew",children:"4D.WebSocket.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R3"}),(0,r.jsxs)(n.td,{children:["Prise en charge de la propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:"headers"})," dans ",(0,r.jsx)(n.em,{children:"connectionHandler"})]})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.WebSocket.new"}),"( ",(0,r.jsx)(n.em,{children:"url"})," : Text { ; ",(0,r.jsx)(n.em,{children:"connectionHandler"})," : Object } ) : 4D.WebSocket"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"URL \xe0 laquelle se connecter"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#connectionHandler-parameter",children:"connectionHandler"})}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Objet d\xe9clarant les callbacks WebSocket"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"4D.WebSocket"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["Nouvel ",(0,r.jsx)(n.a,{href:"#websocket-object",children:"objet WebSocket"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:"4D.WebSocket.new()"})," cr\xe9e et renvoie un nouvel objet ",(0,r.jsx)(n.a,{href:"#websocket-object",children:(0,r.jsx)(n.code,{children:"4D.WebSocket"})})," connect\xe9 au serveur WebSocket \xe0 l'adresse que vous avez sp\xe9cifi\xe9e dans ",(0,r.jsx)(n.em,{children:"url"}),". L'objet ",(0,r.jsx)(n.code,{children:"4D.WebSocket"})," fournit une API pour la cr\xe9ation et la gestion d'une connexion WebSocket \xe0 un serveur, ainsi que pour l'envoi et la r\xe9ception de donn\xe9es vers et depuis le serveur."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"url"}),", indiquez l'URL \xe0 laquelle le serveur WebSocket r\xe9pondra. Les mod\xe8les d'URL suivants peuvent \xeatre utilis\xe9s :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ws://host[:port]path[?query]"})," pour les connexions standard"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"wss://host[:port]path[?query]"})," pour les connexions TLS s\xe9curis\xe9es"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si la connexion n'est pas possible, un objet ",(0,r.jsx)(n.code,{children:"null"})," est renvoy\xe9 et une erreur est g\xe9n\xe9r\xe9e (que vous pouvez intercepter \xe0 l'aide d'une m\xe9thode install\xe9e avec ",(0,r.jsx)(n.code,{children:"ON ERR CALL"}),")."]}),"\n",(0,r.jsxs)(n.h3,{id:"Param\xe8tre-connectionHandler",children:["Param\xe8tre ",(0,r.jsx)(n.em,{children:"connectionHandler"})]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"connectionHandler"}),", vous pouvez transmettre un objet contenant des fonctions de callback \xe0 appeler selon les \xe9v\xe9nements de connexion, ainsi que le type de donn\xe9es et les en-t\xeates \xe0 g\xe9rer."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les callbacks sont automatiquement appel\xe9es dans le contexte du formulaire ou du worker qui initie la connexion."}),"\n",(0,r.jsx)(n.li,{children:"La WebSocket reste valide tant que le formulaire ou le worker n'est pas ferm\xe9."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onMessage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fonction de callback pour les donn\xe9es WebSocket. Appel\xe9e \xe0 chaque fois que le WebSocket a re\xe7u des donn\xe9es. La callback re\xe7oit les param\xe8tres suivants :",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": objet WebSocket"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Objet"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (texte) : toujours "message"']}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.data"})," (texte, blob ou objet, voir ",(0,r.jsx)(n.code,{children:"dataType"}),") : Donn\xe9es re\xe7ues"]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onError"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fonction de callback pour les erreurs d'ex\xe9cution. La callback re\xe7oit les param\xe8tres suivants:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": objet WebSocket"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Objet"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (texte) : toujours "error"']}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.errors"}),": collection de piles d'erreurs 4D en cas d'erreur d'ex\xe9cution.",(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[].errCode"})," (nombre) : Code d'erreur 4D"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[].message"})," (texte) : Description de l'erreur 4D"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[].componentSignature"})," (texte) : Signature du composant interne qui a renvoy\xe9 l'erreur"]})]})]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onTerminate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fonction de callback lorsque la WebSocket est termin\xe9e. La callback re\xe7oit les param\xe8tres suivants : ",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": objet WebSocket"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Objet"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.code"})," (nombre, lecture seule) : unsigned short contenant le code de fermeture envoy\xe9 par le serveur."]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.reason"})," (texte, lecture seule) : Raison pour laquelle le serveur a ferm\xe9 la connexion. Elle est sp\xe9cifique au serveur et au sous-protocole particulier."]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onOpen"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fonction de callback lorsque la WebSocket est ouverte. La callback re\xe7oit les param\xe8tres suivants:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": objet WebSocket"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Objet"]}),(0,r.jsx)(n.ul,{children:(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (texte): toujours "open"']})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataType"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Type de donn\xe9es re\xe7ues ou envoy\xe9es. Valeurs disponibles : "text" (par d\xe9faut), "blob", "object". "text" = utf-8'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headers"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["En-t\xeates du WebSocket.",(0,r.jsxs)(n.li,{children:["Syntaxe pour l'assignation de cl\xe9 standard : ",(0,r.jsx)(n.code,{children:"headers.*cl\xe9*:=*valeur*"})," (",(0,r.jsx)(n.em,{children:"valeur"})," peut \xeatre une Collection si la m\xeame cl\xe9 appara\xeet plusieurs fois)"]}),(0,r.jsxs)(n.li,{children:["Syntaxe pour l'assignation de Cookie (cas particulier) : ",(0,r.jsx)(n.code,{children:'headers.Cookie:="*nom*=*valeur* {; *nom2*=*valeur2*{; ... } }"'})]})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Voici la s\xe9quence des appels de callbacks :"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onOpen"})," est ex\xe9cut\xe9 une fois"]}),"\n",(0,r.jsxs)(n.li,{children:["Z\xe9ro ou plusieurs ",(0,r.jsx)(n.code,{children:"onMessage"})," sont ex\xe9cut\xe9s"]}),"\n",(0,r.jsxs)(n.li,{children:["Z\xe9ro ou un ",(0,r.jsx)(n.code,{children:"onError"})," est ex\xe9cut\xe9 (stoppe le traitement)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTerminate"})," est toujours ex\xe9cut\xe9"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"Exemple-1",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["Vous souhaitez d\xe9finir des en-t\xeates dans la classe utilisateur ",(0,r.jsx)(n.code,{children:"WSConnectionHandler"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Classe WSConnectionHandler\n\nClass constructor($myToken:Text)\n\n// Cr\xe9ation des en-t\xeates envoy\xe9s au serveur\nThis.headers:=New object("x-authorization" ;$myToken)\n// Nous d\xe9finissons deux cookies\nThis.headers.Cookie:="yummy_cookie=choco ; tasty_cookie=strawberry"\n...\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"dataType",children:".dataType"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".dataType"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".dataType"}),' contient le type de contenu du body de la r\xe9ponse. Peut \xeatre "text", "blob" ou "object".']}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".handler"})," contient l'accesseur qui r\xe9cup\xe8re l'objet ",(0,r.jsx)(n.code,{children:"connectionHandler"})," utilis\xe9 pour initier la connexion."]}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."}),"\n",(0,r.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".id"})," : Longint"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".id"})," contient l'identifiant unique de la connexion."]}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text, Blob, Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Message \xe0 envoyer"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"Description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".send()"})," envoie ",(0,r.jsx)(n.em,{children:"message"})," au serveur WebSocket dans le type de donn\xe9es d\xe9fini (Text, Blob ou Object)."]}),"\n",(0,r.jsxs)(n.p,{children:["Les contenus suivants sont envoy\xe9s en fonction du type de ",(0,r.jsx)(n.em,{children:"message"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Contenu"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Texte en UTF-8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Donn\xe9es binaires"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Texte en JSON UTF-8 (m\xeame r\xe9sultat qu'avec ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1217.html",children:(0,r.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".status"}),' contient le statut courant de la connexion (peut \xeatre "Connecting", "Closing", "Closed" ou "Connected").']}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."}),"\n",(0,r.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"reason"})," : Text } } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Code de statut indiquant la cause de la fermeture de la connexion"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reason"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Cause de la fermeture de la connexion"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Description-5",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".terminate()"})," referme la connexion WebSocket, avec les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"code"})," et ",(0,r.jsx)(n.em,{children:"reason"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"code"}),", vous pouvez passer un code d'\xe9tat expliquant pourquoi la connexion est ferm\xe9e (voir aussi ",(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5",children:"WebSocket Connection Close Code in the RFC6455"}),") :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"S'il n'est pas sp\xe9cifi\xe9, le code de fermeture de la connexion est automatiquement fix\xe9 \xe0 1000 pour une fermeture normale, ou \xe0 une autre valeur standard dans la plage 1001-1015 qui indique la raison r\xe9elle de la fermeture de la connexion."}),"\n",(0,r.jsxs)(n.li,{children:["Si elle est sp\xe9cifi\xe9e, la valeur de ce param\xe8tre de code remplace le r\xe9glage automatique. La valeur doit \xeatre un nombre entier. Soit 1000, soit un code personnalis\xe9 compris entre 3000 et 4999. Si vous sp\xe9cifiez la valeur du *code * , vous devez \xe9galement sp\xe9cifier une ",(0,r.jsx)(n.em,{children:"reason"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"reason"}),", vous pouvez passer une cha\xeene de caract\xe8res d\xe9crivant la raison pour laquelle la connexion est ferm\xe9e."]}),"\n",(0,r.jsx)(n.h2,{id:"url",children:".url"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".url"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-6",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".url"})," contient l'URL auquel le WebSocket s'est connect\xe9. Il s'agit de l'URL que vous avez pass\xe9 \xe0 la fonction ",(0,r.jsx)(n.a,{href:"#4dwebsocketnew",children:(0,r.jsx)(n.code,{children:"new()"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,i={},o=null,a=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(296540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);