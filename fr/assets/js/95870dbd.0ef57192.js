"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80856],{662783:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=s(474848),r=s(28453);const t={id:"Transporter",title:"Transporter Class"},d=void 0,l={id:"API/Transporter",title:"Transporter Class",description:"Description",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/Transporter.md",sourceDirName:"API",slug:"/API/Transporter",permalink:"/docs/fr/19/API/Transporter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTransporter.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"Transporter",title:"Transporter Class"}},c={},h=[{value:"Description",id:"description",level:2},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Description",id:"description-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Description",id:"description-2",level:4},{value:".authenticationMode",id:"authenticationmode-1",level:2},{value:"Description",id:"description-3",level:4},{value:".authenticationMode",id:"authenticationmode-2",level:2},{value:"Description",id:"description-4",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Description",id:"description-5",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Description",id:"description-6",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Description",id:"description-7",level:4},{value:".host",id:"host",level:2},{value:"Description",id:"description-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Description",id:"description-9",level:4},{value:".port",id:"port",level:2},{value:"Description",id:"description-10",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Description",id:"description-11",level:4},{value:".user",id:"user",level:2},{value:"Description",id:"description-12",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Description",id:"description-13",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:4}];function o(e){const n={a:"a",code:"code",details:"details",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h2,{id:"acceptunsecureconnection",children:".acceptUnsecureConnection"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".acceptUnsecureConnection"})," contient ",(0,i.jsx)(n.strong,{children:"True"})," si 4D est autoris\xe9 \xe0 \xe9tablir une connexion non chiffr\xe9e lorsqu'une connexion chiffr\xe9e n'est pas possible."]}),"\n",(0,i.jsxs)(n.p,{children:["Elle contient ",(0,i.jsx)(n.strong,{children:"False"})," si les connexions non chiffr\xe9es ne sont pas autoris\xe9es, auquel cas une erreur est retourn\xe9e lorsque la connexion chiffr\xe9e n'est pas possible."]}),"\n",(0,i.jsx)(n.p,{children:"Ports s\xe9curis\xe9s disponibles :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SMTP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"465: SMTPS"}),"\n",(0,i.jsx)(n.li,{children:"587 ou 25 : SMTP avec mise \xe0 niveau STARTTLS si le serveur le prend en charge."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"IMAP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"143 : Port IMAP non chiffr\xe9"}),"\n",(0,i.jsx)(n.li,{children:"993 : IMAP avec mise \xe0 niveau STARTTLS si le serveur le prend en charge"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"POP3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"110 : Port POP3 non chiffr\xe9"}),"\n",(0,i.jsx)(n.li,{children:"995 : POP3 avec mise \xe0 niveau STARTTLS si le serveur le prend en charge."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"authenticationmode",children:".authenticationMode"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".authenticationMode"})," contient le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie."]}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut, le mode le plus s\xe9curis\xe9 pris en charge par le serveur est utilis\xe9."}),"\n",(0,i.jsx)(n.p,{children:"Valeurs possibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Constantes"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CRAM-MD5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IMAP authentication CRAM MD5"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole CRAM-MD5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LOGIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IMAP authentication login"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole LOGIN"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OAUTH2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IMAP authentication OAUTH2"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole OAuth2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PLAIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IMAP authentication plain"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole PLAIN"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"authenticationmode-1",children:".authenticationMode"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".authenticationMode"})," contient le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie."]}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut, le mode le plus s\xe9curis\xe9 pris en charge par le serveur est utilis\xe9."}),"\n",(0,i.jsx)(n.p,{children:"Valeurs possibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Constantes"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"APOP"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POP3 authentication APOP"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole APOP (POP3 uniquement)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CRAM-MD5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POP3 authentication CRAM-MD5"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole CRAM-MD5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LOGIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POP3 authentication login"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole LOGIN"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OAUTH2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POP3 authentication OAUTH2"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole OAuth2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PLAIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POP3 authentication plain"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole PLAIN"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"authenticationmode-2",children:".authenticationMode"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".authenticationMode"})," contient le mode d'authentification utilis\xe9 pour ouvrir la session sur le serveur de messagerie."]}),"\n",(0,i.jsx)(n.p,{children:"Par d\xe9faut, le mode le plus s\xe9curis\xe9 pris en charge par le serveur est utilis\xe9."}),"\n",(0,i.jsx)(n.p,{children:"Valeurs possibles :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Constantes"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CRAM-MD5"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication CRAM MD5"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole CRAM-MD5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LOGIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication login"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole LOGIN"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OAUTH2"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication OAUTH2"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole OAuth2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PLAIN"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SMTP authentication plain"})}),(0,i.jsx)(n.td,{children:"Authentification \xe0 l'aide du protocole PLAIN"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"bodycharset",children:".bodyCharset"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Prise en charge de UTF8 base64"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".bodyCharset"})," contient   le jeu de caract\xe8res et l'encodage utilis\xe9s pour le corps de l'email."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valeurs possibles :"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,i.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," : US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, japonais (ISO-2022-JP) et 7 bits si possible, sinon UTF-8 et Quoted-printable"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO88591"}),(0,i.jsx)(n.td,{children:"ISO-8859-1"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," : ISO-8859-1 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"})," : ISO-8859-1 et 8 bits"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," & ",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & Quoted-printable (",(0,i.jsx)(n.strong,{children:"valeur par d\xe9faut"}),")"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," &",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & base64"]})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"connectiontimeout",children:".connectionTimeOut"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".connectionTimeOut"})," contient le temps d'attente maximal (en secondes) autoris\xe9 pour \xe9tablir une connexion avec le serveur. Par d\xe9faut, si la propri\xe9t\xe9 n'a pas \xe9t\xe9 d\xe9finie dans l'objet server (utilis\xe9 pour cr\xe9er l'objet transporteur avec ",(0,i.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,i.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,i.jsx)(n.code,{children:"IMAP New transporter"}),"), la valeur utilis\xe9e est 30."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"headercharset",children:".headerCharset"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".headerCharset"})," contient  le jeu de caract\xe8res et l'encodage utilis\xe9s pour l'en-t\xeate de l'email. L'en-t\xeate comprend les \xe9l\xe9ments suivants de l'e-mail :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"subject,"}),"\n",(0,i.jsx)(n.li,{children:"attachment filename(s),"}),"\n",(0,i.jsx)(n.li,{children:"email name."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valeurs possibles :"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Commentaire"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,i.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," : US-ASCII si possible, japonais (ISO-2022-JP) & Quoted-printable si possible, sinon UTF-8 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, japonais (ISO-2022-JP) et 7 bits si possible, sinon UTF-8 et Quoted-printable"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode ISO88591"}),(0,i.jsx)(n.td,{children:"ISO-8859-1"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," : ISO-8859-1 & Quoted-printable"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"bodyCharset"})," : ISO-8859-1 et 8 bits"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," & ",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & Quoted-printable (valeur par d\xe9faut)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,i.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"headerCharset"})," &",(0,i.jsx)(n.em,{children:"bodyCharset"})," : US-ASCII si possible, sinon UTF-8 & base64"]})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"host",children:".host"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".host"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".host"})," contient le nom ou l'adresse IP du serveur h\xf4te. Utilis\xe9e pour les \xe9changes de courrier (SMTP, POP3, IMAP)."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"logfile",children:".logFile"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R5"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".logFile"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".logFile"})," contient le chemin complet du fichier d'historique qui a \xe9t\xe9 d\xe9fini (le cas \xe9ch\xe9ant) pour la connexion. Le chemin peut \xeatre relatif (au dossier Logs courant) ou absolu."]}),"\n",(0,i.jsxs)(n.p,{children:["Contrairement aux fichiers log habituels (activ\xe9s via la commande ",(0,i.jsx)(n.code,{children:"SET DATABASE PARAMETER"}),"), les fichiers log \xe9tendus stockent le contenu MIME de tous les emails envoy\xe9s et n'ont pas de limite de taille. Pour plus d'informations sur les fichiers log \xe9tendus, reportez-vous \xe0 :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connexions SMTP"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/Admin/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connexions POP3"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/Admin/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connexions IMAP"})," - ",(0,i.jsx)(n.a,{href:"/docs/fr/19/Admin/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"port",children:".port"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".port"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-10",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".port"})," contient  le num\xe9ro de port utilis\xe9 pour les transactions d'emails. Par d\xe9faut, si la propri\xe9t\xe9 ",(0,i.jsx)(n.em,{children:"port"})," n'a pas \xe9t\xe9 d\xe9finie dans l'objet ",(0,i.jsx)(n.em,{children:"server"})," (utilis\xe9 pour cr\xe9er l'objet transporteur avec ",(0,i.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,i.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,i.jsx)(n.code,{children:"IMAP New transporter"}),"), le port utilis\xe9 est :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SMTP"})," - 587"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"POP3"})," - 995"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"sendtimeout",children:".sendTimeOut"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-11",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".sendTimeOut"})," contient  le temps d'attente maximum (en secondes) d'un appel \xe0 ",(0,i.jsx)(n.code,{children:".send()"})," avant le timeout (l'expiration du d\xe9lai). Par d\xe9faut, si la propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".sendTimeOut"})," n'a pas \xe9t\xe9 d\xe9finie dans l'objet ",(0,i.jsx)(n.code,{children:"server"}),", la valeur 100 est utilis\xe9e."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"user",children:".user"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".user"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-12",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,i.jsx)(n.code,{children:".user"})," contient  le nom d'utilisateur employ\xe9 pour l'authentification sur le serveur de messagerie."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"checkconnection",children:".checkConnection()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Modifications"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R\xe9sultat"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Statut de la connexion de l'objet transporteur"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"description-13",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:".checkConnection()"}),"  v\xe9rifie la connexion \xe0 l'aide des informations stock\xe9es dans l'objet transporteurrecr\xe9e la connexion si n\xe9cessaire, et renvoie son statut. Cette fonction vous permet de v\xe9rifier que les valeurs fournies par l'utilisateur sont valides et coh\xe9rentes."]}),"\n",(0,i.jsx)(n.h4,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,i.jsx)(n.p,{children:"La fonction envoie une requ\xeate au serveur de mail et retourne un objet d\xe9crivant le statut. Cet objet peut avoir les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Vrai si la v\xe9rification a \xe9t\xe9 effectu\xe9e avec succ\xe8s, sinon Faux"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"(SMTP uniquement) Code du statut retourn\xe9 par le serveur de messagerie (0 en cas de probl\xe8me non li\xe9 au traitement du mail)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statusText"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Message du statut retourn\xe9 par le serveur de messagerie, ou derni\xe8re erreur retourn\xe9e dans la pile d'erreurs 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"errors"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"collection"}),(0,i.jsx)(n.td,{children:"Pile d'erreurs 4D (non retourn\xe9e si une r\xe9ponse du serveur de messagerie est re\xe7ue)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[ ].errCode"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"Code d'erreur 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[ ].message"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Description de l'erreur 4D"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[ ].componentSignature"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Signature du composant interne qui a retourn\xe9 l'erreur"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(296540);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);