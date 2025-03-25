"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86778"],{425406:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"API/SMTPTransporterClass","title":"SMTPTransporter","description":"La classe SMTPTransporter vous permet de configurer des connexions SMTP et d\'envoyer des emails par le biais d\'objets SMTP transporter.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/API/SMTPTransporterClass.md","sourceDirName":"API","slug":"/API/SMTPTransporterClass","permalink":"/docs/fr/20-R7/API/SMTPTransporterClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSMTPTransporterClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"SMTPTransporterClass","title":"SMTPTransporter"},"sidebar":"docs","previous":{"title":"Signal","permalink":"/docs/fr/20-R7/API/SignalClass"},"next":{"title":"SystemWorker","permalink":"/docs/fr/20-R7/API/SystemWorkerClass"}}'),i=s("785893"),t=s("250065");let d={id:"SMTPTransporterClass",title:"SMTPTransporter"},l=void 0,c={},o=[{value:"Objet SMTP Transporter",id:"objet-smtp-transporter",level:3},{value:"4D.SMTPTransporter.new()",id:"4dsmtptransporternew",level:2},{value:"Description",id:"description",level:4},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Description",id:"description-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Description",id:"description-2",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Description",id:"description-3",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Description",id:"description-4",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:4},{value:"Exemple",id:"exemple",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Description",id:"description-5",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Description",id:"description-6",level:4},{value:".host",id:"host",level:2},{value:"Description",id:"description-7",level:4},{value:".keepAlive",id:"keepalive",level:2},{value:"Description",id:"description-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Description",id:"description-9",level:4},{value:".port",id:"port",level:2},{value:"Description",id:"description-10",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-11",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9-1",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Description",id:"description-12",level:4},{value:".user",id:"user",level:2},{value:"Description",id:"description-13",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La classe ",(0,i.jsx)(n.code,{children:"SMTPTransporter"})," vous permet de configurer des connexions SMTP et d'envoyer des emails par le biais d'objets ",(0,i.jsx)(n.em,{children:"SMTP transporter"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"objet-smtp-transporter",children:"Objet SMTP Transporter"}),"\n",(0,i.jsxs)(n.p,{children:["Les objets SMTP Transporter sont instanci\xe9s avec la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/smtp-new-transporter",children:(0,i.jsx)(n.code,{children:"SMTP New transporter"})}),". Leurs propri\xe9t\xe9s et fonctions sont les suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#acceptunsecureconnection",children:[(0,i.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"True"})," si 4D est autoris\xe9 \xe0 \xe9tablir une connexion non chiffr\xe9e"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#authenticationmode",children:[(0,i.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,i.jsx)(n.br,{})," le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#bodycharset",children:[(0,i.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),(0,i.jsx)(n.br,{})," le charset et l'encodage utilis\xe9s pour la partie body de l'email"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#checkconnection",children:[(0,i.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),(0,i.jsx)(n.br,{}),"v\xe9rifie la connexion en utilisant les informations stock\xe9es dans l'objet transporteur"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#connectiontimeout",children:[(0,i.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,i.jsx)(n.br,{}),"le temps d'attente maximum (en secondes) autoris\xe9 pour \xe9tablir une connexion avec le serveur"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#headercharset",children:[(0,i.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),(0,i.jsx)(n.br,{}),"le jeu de caract\xe8res et l'encodage utilis\xe9s pour l'en-t\xeate de l'e-mail"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#host",children:[(0,i.jsx)(n.strong,{children:".host"})," : Text"]}),(0,i.jsx)(n.br,{}),"le nom ou l'adresse IP du serveur h\xf4te"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#keepalive",children:[(0,i.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"True"})," si la connexion SMTP doit rester active jusqu'\xe0 la destruction de l'objet ",(0,i.jsx)(n.code,{children:"transporter"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#logfile",children:[(0,i.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,i.jsx)(n.br,{}),"le chemin du fichier journal \xe9tendu d\xe9fini (le cas \xe9ch\xe9ant) pour la connexion de messagerie"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#port",children:[(0,i.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,i.jsx)(n.br,{}),"le num\xe9ro de port utilis\xe9 pour les transactions de courrier"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#send",children:[(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"mail"})," : Object ) : Object"]}),(0,i.jsx)(n.br,{}),"envoie l'objet ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/API/EmailObjectClass#objet-email",children:(0,i.jsx)(n.em,{children:"mail"})})," vers le serveur SMTP d\xe9fini dans l'objet ",(0,i.jsx)(n.code,{children:"transporter"})," et retourne un objet statut"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#sendtimeout",children:[(0,i.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),(0,i.jsx)(n.br,{}),"le temps d'attente maximum (en secondes) d'un appel \xe0 ",(0,i.jsx)(n.code,{children:".send()"})," avant le timeout"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#user",children:[(0,i.jsx)(n.strong,{children:".user"})," : Text"]}),(0,i.jsx)(n.br,{}),"le nom d'utilisateur utilis\xe9 pour l'authentification sur le serveur de messagerie"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"4dsmtptransporternew",children:"4D.SMTPTransporter.new()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.SMTPTransporter.new"}),"( ",(0,i.jsx)(n.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"server"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Informations sur le serveur de messagerie"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"4D.SMTPTransporter"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#objet-smtp-transporter",children:"Objet SMTP Transporter"})})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:"4D.SMTPTransporter.new()"})," cr\xe9e et retourne un nouvel objet de type ",(0,i.jsx)(n.code,{children:"4D.SMTPTransporter"}),". Elle est identique \xe0 la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/smtp-new-transporter",children:(0,i.jsx)(n.code,{children:"SMTP New transporter"})})," (raccourci)."]}),"\n",(0,i.jsx)(n.h2,{id:"acceptunsecureconnection",children:".acceptUnsecureConnection"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".acceptUnsecureConnection"})," contient ",(0,i.jsx)(n.strong,{children:"True"})," si 4D est autoris\xe9 \xe0 \xe9tablir une connexion non chiffr\xe9e lorsqu'une connexion chiffr\xe9e n'est pas possible."]}),"\n",(0,i.jsxs)(n.p,{children:["Elle contient ",(0,i.jsx)(n.strong,{children:"False"})," si les connexions non chiffr\xe9es ne sont pas autoris\xe9es, auquel cas une erreur est retourn\xe9e lorsque la connexion chiffr\xe9e n'est pas possible."]}),"\n",(0,i.jsx)(n.p,{children:"Ports s\xe9curis\xe9s disponibles :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SMTP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"465: SMTPS"}),"\n",(0,i.jsx)(n.li,{children:"587 ou 25 : SMTP avec mise \xe0 niveau STARTTLS si le serveur le prend en charge."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"IMAP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"143 : Port IMAP non chiffr\xe9"}),"\n",(0,i.jsx)(n.li,{children:"993 : IMAP avec mise \xe0 niveau STARTTLS si le serveur le prend en charge"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"POP3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"110 : Port POP3 non chiffr\xe9"}),"\n",(0,i.jsx)(n.li,{children:"995 : POP3 avec mise \xe0 niveau STARTTLS si le serveur le prend en charge."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"authenticationmode",children:".authenticationMode"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".authenticationMode"})," contient le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie."]}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut, le mode le plus s\xe9curis\xe9 pris en charge par le serveur est utilis\xe9."}),"\n",(0,i.jsx)(n.p,{children:"Valeurs possibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Constantes"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CRAM-MD5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication CRAM MD5"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole CRAM-MD5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LOGIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication login"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole LOGIN"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OAUTH2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication OAUTH2"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole OAuth2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PLAIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication plain"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole PLAIN"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"bodycharset",children:".bodyCharset"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Prise en charge de UTF8 base64"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".bodyCharset"})," contient  le charset et l'encodage utilis\xe9s pour la partie body de l'email."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valeurs possibles :"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,i.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"}),": US-ASCII si possible, Japanese (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si possible, Japanese (ISO-2022-JP) & 7-bit si possible, sinon UTF-8 & Quoted-printable"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO88591"}),(0,i.jsx)(n.td,{children:"ISO-8859-1"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," : ISO-8859-1 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," & ",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & Quoted-printable (",(0,i.jsx)(n.strong,{children:"valeur par d\xe9faut"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," &",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & base64"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"checkconnection",children:".checkConnection()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Statut de la connexion de l'objet transporteur"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:".checkConnection()"})," v\xe9rifie la connexion en utilisant les informations stock\xe9es dans l'objet transporteur, recr\xe9e la connexion si n\xe9cessaire et renvoie le statut. Cette fonction vous permet de v\xe9rifier que les valeurs fournies par l'utilisateur sont valides et coh\xe9rentes."]}),"\n",(0,i.jsx)(n.h4,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,i.jsx)(n.p,{children:"La fonction envoie une requ\xeate au serveur de mail et retourne un objet d\xe9crivant le statut. Cet objet peut avoir les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Vrai si la v\xe9rification a \xe9t\xe9 effectu\xe9e avec succ\xe8s, sinon Faux"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"(SMTP uniquement) Code du statut retourn\xe9 par le serveur de messagerie (0 en cas de probl\xe8me non li\xe9 au traitement du mail)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Message du statut retourn\xe9 par le serveur de messagerie, ou derni\xe8re erreur retourn\xe9e dans la pile d'erreurs 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"errors"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"collection"}),(0,i.jsx)(n.td,{children:"Pile d'erreurs 4D (non retourn\xe9e si une r\xe9ponse du serveur de messagerie est re\xe7ue)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[ ].errCode"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Code d'erreur 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[ ].message"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Description de l'erreur 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[ ].componentSignature"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Signature du composant interne qui a retourn\xe9 l'erreur"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Pour une description des codes de statut SMTP, veuillez vous reporter \xe0 ",(0,i.jsx)(n.a,{href:"https://www.usps.org/info/smtp_status.html",children:"cette page"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $pw : Text\n var $options : Object\n var $transporter : 4D.SMTPTransporter\n $options:=New object\n\n $pw:=Request("Please enter your password:")\n $options.host:="smtp.gmail.com"\n\n $options.user:="test@gmail.com"\n $options.password:=$pw\n\n $transporter:=SMTP New transporter($options)\n\n $status:=$transporter.checkConnection()\n If($status.success=True)\n    ALERT("SMTP connection check successful!")\n Else\n    ALERT("Error # "+String($status.status)+", "+$status.statusText)\n End if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"connectiontimeout",children:".connectionTimeOut"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".connectionTimeOut"})," contient le temps d'attente maximum (en secondes) autoris\xe9 pour \xe9tablir une connexion avec le serveur. Par d\xe9faut, si la propri\xe9t\xe9 n'a pas \xe9t\xe9 d\xe9finie dans l'objet server (utilis\xe9 pour cr\xe9er l'objet transporteur avec ",(0,i.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,i.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,i.jsx)(n.code,{children:"IMAP New transporter"}),"), la valeur utilis\xe9e est 30."]}),"\n",(0,i.jsx)(n.h2,{id:"headercharset",children:".headerCharset"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".headerCharset"})," contient le jeu de caract\xe8res et l'encodage utilis\xe9s pour l'en-t\xeate de l'e-mail. L'en-t\xeate comprend les \xe9l\xe9ments suivants de l'e-mail :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"subject,"}),"\n",(0,i.jsx)(n.li,{children:"attachment filename(s),"}),"\n",(0,i.jsx)(n.li,{children:"email name."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valeurs possibles :"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,i.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"}),": US-ASCII si possible, Japanese (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si possible, Japanese (ISO-2022-JP) & 7-bit si possible, sinon UTF-8 & Quoted-printable"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO88591"}),(0,i.jsx)(n.td,{children:"ISO-8859-1"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," : ISO-8859-1 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," & ",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & Quoted-printable (valeur par d\xe9faut)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," &",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & base64"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"host",children:".host"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".host"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".host"})," contient le nom ou l'adresse IP du serveur h\xf4te. Utilis\xe9e pour les \xe9changes de courrier (SMTP, POP3, IMAP)."]}),"\n",(0,i.jsx)(n.h2,{id:"keepalive",children:".keepAlive"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),"\n",(0,i.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".keepAlive"})," contient ",(0,i.jsx)(n.strong,{children:"True"})," si la connexion SMTP doit rester active jusqu'\xe0 la destruction de l'objet ",(0,i.jsx)(n.code,{children:"transporter"}),", et ",(0,i.jsx)(n.strong,{children:"False"})," sinon. Par d\xe9faut, si la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:"keepAlive"})," n'a pas \xe9t\xe9 d\xe9finie dans l'objet ",(0,i.jsx)(n.code,{children:"server"})," (qui permet de cr\xe9er l'objet ",(0,i.jsx)(n.code,{children:"transporter"})," via la commande ",(0,i.jsx)(n.code,{children:"SMTP New transporter"}),"), elle est mise \xe0 ",(0,i.jsx)(n.strong,{children:"True"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"La connexion SMTP est automatiquement ferm\xe9e :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["lorsque l'objet ",(0,i.jsx)(n.code,{children:"transporter"})," est d\xe9truit si la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".keepAlive"})," est mise \xe0 vrai,"]}),"\n",(0,i.jsxs)(n.li,{children:["apr\xe8s chaque fonction ",(0,i.jsx)(n.code,{children:".send( )"})," ex\xe9cut\xe9e si la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".keepAlive"})," est mise \xe0 faux."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"logfile",children:".logFile"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".logFile"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".logFile"})," contient le chemin du fichier journal \xe9tendu d\xe9fini (le cas \xe9ch\xe9ant) pour la connexion de messagerie. Le chemin peut \xeatre relatif (au dossier Logs courant) ou absolu."]}),"\n",(0,i.jsxs)(n.p,{children:["Contrairement aux fichiers log habituels (activ\xe9s via la commande ",(0,i.jsx)(n.code,{children:"SET DATABASE PARAMETER"}),"), les fichiers log \xe9tendus stockent le contenu MIME de tous les emails envoy\xe9s et n'ont pas de limite de taille. Pour plus d'informations sur les fichiers log \xe9tendus, reportez-vous \xe0 :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connexions SMTP"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connexions POP3"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connexions IMAP"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"port",children:".port"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".port"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-10",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".port"})," contient le num\xe9ro de port utilis\xe9 pour les transactions de courrier. Par d\xe9faut, si la propri\xe9t\xe9 ",(0,i.jsx)(n.em,{children:"port"})," n'a pas \xe9t\xe9 d\xe9finie dans l'objet ",(0,i.jsx)(n.em,{children:"server"})," (utilis\xe9 pour cr\xe9er l'objet transporteur avec ",(0,i.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,i.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,i.jsx)(n.code,{children:"IMAP New transporter"}),"), le port utilis\xe9 est :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SMTP"})," - 587"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"POP3"})," - 995"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Prise en charge des contenus Mime"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"mail"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/API/EmailObjectClass#email-object",children:"Email"})," \xe0 envoyer"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Statut SMTP"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description-11",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:".send()"})," envoie l'objet ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/API/EmailObjectClass#objet-email",children:(0,i.jsx)(n.em,{children:"mail"})})," vers le serveur SMTP d\xe9fini dans l'objet ",(0,i.jsx)(n.code,{children:"transporter"})," et retourne un objet statut."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["L'objet ",(0,i.jsx)(n.code,{children:"transporter"})," doit avoir d\xe9j\xe0 \xe9t\xe9 cr\xe9\xe9 \xe0 l'aide de la commande ",(0,i.jsx)(n.code,{children:"SMTP New transporter"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La fonction \xe9tablit la connexion SMTP si cette derni\xe8re n'est pas d\xe9j\xe0 active. Si la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".keepAlive"})," de l'objet ",(0,i.jsx)(n.code,{children:"transporter"})," est \xe0 ",(0,i.jsx)(n.strong,{children:"false"}),", la connexion SMTP est automatiquement ferm\xe9e apr\xe8s l'ex\xe9cution de la commande ",(0,i.jsx)(n.code,{children:".send()"}),". Pour plus d'informations, veuillez vous r\xe9f\xe9rer \xe0 la description de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/smtp-new-transporter",children:(0,i.jsx)(n.code,{children:"SMTP New transporter"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.em,{children:"mail"}),", passez un ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/API/EmailObjectClass#objet-email",children:(0,i.jsx)(n.code,{children:"objet Email"})})," valide \xe0 envoyer. Les propri\xe9t\xe9s origine (la provenance de l'Email) et destination (un ou plusieurs destinataires) de l'Email doivent \xeatre incluses, les autres propri\xe9t\xe9s sont optionnelles."]}),"\n",(0,i.jsx)(n.h4,{id:"objet-retourn\xe9-1",children:"Objet retourn\xe9"}),"\n",(0,i.jsx)(n.p,{children:'La fonction retourne un objet d\xe9crivant le statut SMTP de l"op\xe9ration. Cet objet peut avoir les propri\xe9t\xe9s suivantes :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Vrai si l'envoi a \xe9t\xe9 effectu\xe9 avec succ\xe8s, sinon Faux"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Code du statut retourn\xe9 par le serveur SMTP (0 si probl\xe8me non li\xe9 au traitement de l'email)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Message de statut retourn\xe9 par le serveur SMTP"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["En cas de probl\xe8me non li\xe9 au traitement SMTP (par exemple une propri\xe9t\xe9 obligatoire qui est manquante dans l'objet mail), 4D g\xe9n\xe8re une erreur que vous pouvez intercepter \xe0 l'aide d'une m\xe9thode install\xe9e via la commande ",(0,i.jsx)(n.code,{children:"ON ERR CALL"}),". Utilisez la commande ",(0,i.jsx)(n.code,{children:"Last errors"})," pour obtenir des informations sur l'erreur."]}),"\n",(0,i.jsx)(n.p,{children:"Dans ce cas, l'objet erreur qui en r\xe9sulte contient les valeurs suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Valeur"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{children:'"Failed to send email"'})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"sendtimeout",children:".sendTimeOut"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-12",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".sendTimeOut"})," contient le temps d'attente maximum (en secondes) d'un appel \xe0 ",(0,i.jsx)(n.code,{children:".send()"})," avant le timeout. Par d\xe9faut, si la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".sendTimeOut"})," n'a pas \xe9t\xe9 d\xe9finie dans l'objet ",(0,i.jsx)(n.code,{children:"server"}),", la valeur 100 est utilis\xe9e."]}),"\n",(0,i.jsx)(n.h2,{id:"user",children:".user"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".user"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-13",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".user"})," contient le nom d'utilisateur utilis\xe9 pour l'authentification sur le serveur de messagerie."]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);