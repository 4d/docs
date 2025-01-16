"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83008"],{834794:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/pop3-new-transporter","title":"POP3 New transporter","description":"POP3 New transporter( server 4D.POP3Transporter","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/pop3-new-transporter.md","sourceDirName":"commands","slug":"/commands/pop3-new-transporter","permalink":"/docs/fr/20-R7/commands/pop3-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fpop3-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pop3-new-transporter","title":"POP3 New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAIL New attachment","permalink":"/docs/fr/20-R7/commands/mail-new-attachment"},"next":{"title":"SMTP New transporter","permalink":"/docs/fr/20-R7/commands/smtp-new-transporter"}}'),t=n("785893"),o=n("250065");let i={id:"pop3-new-transporter",title:"POP3 New transporter",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"R\xe9sultat",id:"r\xe9sultat",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"POP3 New transporter"}),"( ",(0,t.jsx)(r.em,{children:"server"})," : Object ) : 4D.POP3Transporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tres"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"server"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Informations sur le serveur IMAP"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"R\xe9sultat"}),(0,t.jsx)(r.td,{children:"4D.POP3Transporter"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:"Object POP3 transporter"})})]})]})]}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Release"}),(0,t.jsx)(r.th,{children:"Modifications"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"18 R2"}),(0,t.jsx)(r.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.code,{children:"POP3 New transporter"}),"  configure une nouvelle connexion POP3en fonction du param\xe8tre ",(0,t.jsx)(r.em,{children:"server"})," et retourne un nouvel objet ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:"POP3 transporter"}),". L'objet transporteur retourn\xe9 sera alors utilis\xe9 pour la r\xe9ception d'emails."]}),"\n",(0,t.jsxs)(r.p,{children:["Dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"server"}),", passez un objet contenant les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.em,{children:"server"})}),(0,t.jsx)(r.th,{children:"Valeur par d\xe9faut (si omise)"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.strong,{children:"True"})," si 4D est autoris\xe9 \xe0 \xe9tablir une connexion non chiffr\xe9e"]}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"})," : Text",(0,t.jsx)(r.br,{}),".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"})," : Object",(0,t.jsx)(r.br,{}),"Cha\xeene ou objet token repr\xe9sentant les informations d'autorisation OAuth2. Utilis\xe9 uniquement avec OAUTH2 ",(0,t.jsx)(r.code,{children:"authenticationMode"}),". Si ",(0,t.jsx)(r.code,{children:"accessTokenOAuth2"})," est utilis\xe9 mais que ",(0,t.jsx)(r.code,{children:"authenticationMode"})," est omis, le protocole OAuth 2 est utilis\xe9 (si le serveur l'autorise). Non retourn\xe9 dans l'objet ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#smtptransporterobject",children:"SMTP transporter"})}),"."]}),(0,t.jsx)(r.td,{children:"aucun"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#authenticationmode",children:[(0,t.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(r.br,{})," le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie"]}),(0,t.jsx)(r.td,{children:"le mode d'authentification le plus s\xfbr pris en charge par le serveur est utilis\xe9"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#connectiontimeout",children:[(0,t.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{}),"le temps d'attente maximum (en secondes) autoris\xe9 pour \xe9tablir une connexion avec le serveur"]}),(0,t.jsx)(r.td,{children:"30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#host",children:[(0,t.jsx)(r.strong,{children:".host"})," : Text"]}),(0,t.jsx)(r.br,{}),"le nom ou l'adresse IP du serveur h\xf4te"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"obligatoire"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#logfile",children:[(0,t.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(r.br,{}),"le chemin du fichier journal \xe9tendu d\xe9fini (le cas \xe9ch\xe9ant) pour la connexion de messagerie"]}),(0,t.jsx)(r.td,{children:"aucun"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.strong,{children:"password"})," : Text",(0,t.jsx)(r.br,{}),"Mot de passe utilisateur pour l'authentification sur le serveur. Non retourn\xe9 dans l'objet ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#smtptransporterobject",children:"SMTP transporter"})}),"."]}),(0,t.jsx)(r.td,{children:"aucun"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#port",children:[(0,t.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(r.br,{}),"le num\xe9ro de port utilis\xe9 pour les transactions de courrier"]}),(0,t.jsx)(r.td,{children:"995"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#user",children:[(0,t.jsx)(r.strong,{children:".user"})," : Text"]}),(0,t.jsx)(r.br,{}),"le nom d'utilisateur utilis\xe9 pour l'authentification sur le serveur de messagerie"]}),(0,t.jsx)(r.td,{children:"aucun"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"r\xe9sultat",children:"R\xe9sultat"}),"\n",(0,t.jsxs)(r.p,{children:["La fonction retourne un ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:(0,t.jsx)(r.strong,{children:"objet POP3 transporter"})}),". Toutes les propri\xe9t\xe9s retourn\xe9es sont en ",(0,t.jsx)(r.strong,{children:"lecture seule"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"La connexion POP3 est automatiquement ferm\xe9e lorsque l'objet transporteur est d\xe9truit."}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' var $server : Object\n $server:=New object\n $server.host:="pop.gmail.com" //Obligatoire\n $server.port:=995\n $server.user:="4d@gmail.com"\n $server.password:="XXXXXXXX"\n $server.logFile:="LogTest.txt" //log \xe0 enregistrer dans le dossier Logs\n\n var $transporter : 4D.POP3Transporter\n $transporter:=POP3 New transporter($server)\n\n $status:=$transporter.checkConnection()\n If(Not($status.success))\n    ALERT("An error occurred receiving the mail: "+$status.statusText)\n End if\n'})}),"\n",(0,t.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(r.td,{children:"1697"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return i}});var s=n(667294);let t={},o=s.createContext(t);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);