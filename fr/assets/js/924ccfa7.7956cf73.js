"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57298"],{756379:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/imap-new-transporter","title":"IMAP New transporter","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/imap-new-transporter.md","sourceDirName":"commands","slug":"/commands/imap-new-transporter","permalink":"/docs/fr/commands/imap-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fimap-new-transporter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"imap-new-transporter","title":"IMAP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Mail","permalink":"/docs/fr/commands/theme/Mail"},"next":{"title":"MAIL Convert from MIME","permalink":"/docs/fr/commands/mail-convert-from-mime"}}'),t=r("785893"),i=r("250065");let o={id:"imap-new-transporter",title:"IMAP New transporter",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"R\xe9sultat",id:"r\xe9sultat",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMAP New transporter"}),"( ",(0,t.jsx)(n.em,{children:"server"})," : Object ) : 4D.IMAPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,t.jsx)(n.td,{children:"Informations sur le serveur de messagerie"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"4D.IMAPTransporter"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#imap-transporter-object",children:"Objet IMAP transporter"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"IMAP New transporter"}),"configure une nouvelle connexion IMAP en fonction du param\xe8tre ",(0,t.jsx)(n.em,{children:"server"})," et retourne un nouvel objet ",(0,t.jsx)(n.em,{children:"transporter"}),". L'objet transporteur retourn\xe9 sera alors utilis\xe9 pour la r\xe9ception d'emails."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"server"}),", passez un objet contenant les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"server"})}),(0,t.jsx)(n.th,{children:"Valeur par d\xe9faut (si omise)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," si 4D est autoris\xe9 \xe0 \xe9tablir une connexion non chiffr\xe9e"]}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"})," : Text",(0,t.jsx)(n.br,{}),".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"})," : Object",(0,t.jsx)(n.br,{}),"Cha\xeene ou objet token repr\xe9sentant les informations d'autorisation OAuth2. Utilis\xe9 uniquement avec OAUTH2 ",(0,t.jsx)(n.code,{children:"authenticationMode"}),". Si ",(0,t.jsx)(n.code,{children:"accessTokenOAuth2"})," est utilis\xe9 mais que ",(0,t.jsx)(n.code,{children:"authenticationMode"})," est omis, le protocole OAuth 2 est utilis\xe9 (si le serveur l'autorise). Non retourn\xe9 dans l'objet ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"})}),"."]}),(0,t.jsx)(n.td,{children:"aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#authenticationmode",children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(n.br,{})," le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie"]}),(0,t.jsx)(n.td,{children:"le mode d'authentification le plus s\xfbr pris en charge par le serveur est utilis\xe9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#checkconnectiondelay",children:[(0,t.jsx)(n.strong,{children:".checkConnectionDelay"})," : Integer"]}),(0,t.jsx)(n.br,{}),"la dur\xe9e maximale (en secondes) autoris\xe9e avant v\xe9rification de la connexion au serveur"]}),(0,t.jsx)(n.td,{children:"300"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#connectiontimeout",children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{}),"le temps d'attente maximum (en secondes) autoris\xe9 pour \xe9tablir une connexion avec le serveur"]}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#host",children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),(0,t.jsx)(n.br,{}),"le nom ou l'adresse IP du serveur h\xf4te"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"obligatoire"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#logfile",children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(n.br,{}),"le chemin du fichier journal \xe9tendu d\xe9fini (le cas \xe9ch\xe9ant) pour la connexion de messagerie"]}),(0,t.jsx)(n.td,{children:"aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"password"})," : Text",(0,t.jsx)(n.br,{}),"Mot de passe utilisateur pour l'authentification sur le serveur. Non retourn\xe9 dans l'objet ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"})}),"."]}),(0,t.jsx)(n.td,{children:"aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#port",children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(n.br,{}),"le num\xe9ro de port utilis\xe9 pour les transactions de courrier"]}),(0,t.jsx)(n.td,{children:"993"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#user",children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),(0,t.jsx)(n.br,{}),"le nom d'utilisateur utilis\xe9 pour l'authentification sur le serveur de messagerie"]}),(0,t.jsx)(n.td,{children:"aucun"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention"})," : Assurez-vous que le timeout d\xe9fini est inf\xe9rieur au timeout du serveur, sinon le timeout du client sera inutile."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction retourne un ",(0,t.jsx)(n.a,{href:"/docs/fr/API/IMAPTransporterClass#imap-transporter-object",children:(0,t.jsx)(n.strong,{children:"objet IMAP transporter"})}),". Toutes les propri\xe9t\xe9s retourn\xe9es sont en ",(0,t.jsx)(n.strong,{children:"lecture seule"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"La connexion IMAP est automatiquement ferm\xe9e lorsque l'objet transporteur est d\xe9truit."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$server:=New object\n$server.host:="imap.gmail.com" //Obligatoire\n$server.port:=993\n$server.user:="4d@gmail.com"\n$server.password:="XXXXXXXX"\n$server.logFile:="LogTest.txt" //log \xe0 sauvegarder dans le dossier Logs\n\nvar $transporter : 4D.IMAPTransporter\n $transporter:=IMAP New transporter($server)\n\n$status:=$transporter.checkConnection()\nIf(Not($status.success))\n   ALERT("An error occurred: "+$status.statusText)\nEnd if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1723"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let t={},i=s.createContext(t);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);