"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75059],{950152:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=n(474848),i=n(28453);const t={id:"EmailObjectClass",title:"Email"},d=void 0,l={id:"API/EmailObjectClass",title:"Email",description:"La cr\xe9ation, l'envoi et la r\xe9ception d'emails dans 4D s'effectuent par l'interm\xe9diaire des objets Email.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/API/EmailObjectClass.md",sourceDirName:"API",slug:"/API/EmailObjectClass",permalink:"/docs/fr/API/EmailObjectClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FEmailObjectClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"EmailObjectClass",title:"Email"},sidebar:"docs",previous:{title:"DataStore",permalink:"/docs/fr/API/DataStoreClass"},next:{title:"Entity",permalink:"/docs/fr/API/EntityClass"}},c={},o=[{value:"Objet Email",id:"objet-email",level:3},{value:"Adresses Email",id:"adresses-email",level:3},{value:"Text",id:"text",level:4},{value:"Object",id:"object",level:4},{value:"Collection",id:"collection",level:4},{value:"Traitement du body",id:"traitement-du-body",level:3},{value:"Exemple d&#39;objets bodyStructure et bodyValues",id:"exemple-dobjets-bodystructure-et-bodyvalues",level:4},{value:".attachments",id:"attachments",level:2},{value:"Description",id:"description",level:4},{value:".bcc",id:"bcc",level:2},{value:"Description",id:"description-1",level:4},{value:".bodyStructure",id:"bodystructure",level:2},{value:"Description",id:"description-2",level:4},{value:".bodyValues",id:"bodyvalues",level:2},{value:"Description",id:"description-3",level:4},{value:".cc",id:"cc",level:2},{value:"Description",id:"description-4",level:4},{value:".comments",id:"comments",level:2},{value:"Description",id:"description-5",level:4},{value:".from",id:"from",level:2},{value:"Description",id:"description-6",level:4},{value:".headers",id:"headers",level:2},{value:"Description",id:"description-7",level:4},{value:".htmlBody",id:"htmlbody",level:2},{value:"Description",id:"description-8",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-9",level:4},{value:".inReplyTo",id:"inreplyto",level:2},{value:"Description",id:"description-10",level:4},{value:".keywords",id:"keywords",level:2},{value:"Description",id:"description-11",level:4},{value:"Exemple",id:"exemple",level:4},{value:".messageId",id:"messageid",level:2},{value:"Description",id:"description-12",level:4},{value:".receivedAt",id:"receivedat",level:2},{value:"Description",id:"description-13",level:4},{value:".references",id:"references",level:2},{value:"Description",id:"description-14",level:4},{value:".replyTo",id:"replyto",level:2},{value:"Description",id:"description-15",level:4},{value:".sendAt",id:"sendat",level:2},{value:"Description",id:"description-16",level:4},{value:".sender",id:"sender",level:2},{value:"Description",id:"description-17",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-18",level:4},{value:".subject",id:"subject",level:2},{value:"Description",id:"description-19",level:4},{value:".textBody",id:"textbody",level:2},{value:"Description",id:"description-20",level:4},{value:".to",id:"to",level:2},{value:"Description",id:"description-21",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["La cr\xe9ation, l'envoi et la r\xe9ception d'emails dans 4D s'effectuent par l'interm\xe9diaire des objets ",(0,r.jsx)(s.code,{children:"Email"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Des objets ",(0,r.jsx)(s.code,{children:"Email"})," sont cr\xe9\xe9s lorsque vous recevez des emails via une fonction de classe ",(0,r.jsx)(s.em,{children:"transporter"})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["IMAP - fonctions ",(0,r.jsx)(s.a,{href:"/docs/fr/API/IMAPTransporterClass#getmail",children:(0,r.jsx)(s.code,{children:".getMail()"})})," and ",(0,r.jsx)(s.a,{href:"/docs/fr/API/IMAPTransporterClass#getmails",children:(0,r.jsx)(s.code,{children:".getMails()"})})," pour obtenir des emails \xe0 partir d'un serveur IMAP"]}),"\n",(0,r.jsxs)(s.li,{children:["POP3 - fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/API/POP3TransporterClass#getmail",children:(0,r.jsx)(s.code,{children:".getMail()"})})," pour obtenir un email \xe0 partir d'un serveur POP3."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Vous pouvez \xe9galement cr\xe9er un nouvel objet vide ",(0,r.jsx)(s.code,{children:"Email"})," et le remplir avec les propri\xe9t\xe9s de l'objet ",(0,r.jsx)(s.a,{href:"#email-object",children:"Email"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Vous envoyez des objets ",(0,r.jsx)(s.code,{children:"Email"})," \xe0 l'aide de la fonction SMTP ",(0,r.jsx)(s.a,{href:"/docs/fr/API/SMTPTransporterClass#send",children:(0,r.jsx)(s.code,{children:"send()"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/mail-convert-from-mime",children:(0,r.jsx)(s.code,{children:"MAIL Convert from MIME"})})," and ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/mail-convert-to-mime",children:(0,r.jsx)(s.code,{children:"MAIL Convert to MIME"})})," commands can be used to convert ",(0,r.jsx)(s.code,{children:"Email"})," objects to and from MIME contents."]}),"\n",(0,r.jsx)(s.h3,{id:"objet-email",children:"Objet Email"}),"\n",(0,r.jsx)(s.p,{children:"Les objets Email exposent les propri\xe9t\xe9s suivantes :"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Le format des objets Email de 4D suit la ",(0,r.jsx)(s.a,{href:"https://jmap.io/spec-mail.html",children:"sp\xe9cification JMAP"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#attachments",children:[(0,r.jsx)(s.strong,{children:".attachments"})," : Collection"]}),(0,r.jsx)(s.br,{}),"collection d'objet(s) ",(0,r.jsx)(s.code,{children:"4D.MailAttachment"})]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#bcc",children:[(0,r.jsx)(s.strong,{children:".bcc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Collection"]}),(0,r.jsx)(s.br,{}),"les ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"adresses"})," des destinataires cach\xe9s en Copie Carbone Invisible de l'email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#bodystructure",children:[(0,r.jsx)(s.strong,{children:".bodyStructure"})," : Object"]}),(0,r.jsx)(s.br,{}),"objet ",(0,r.jsx)(s.em,{children:"EmailBodyPart"}),", c'est-\xe0-dire la structure MIME compl\xe8te du body du message (facultatif)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#bodyvalues",children:[(0,r.jsx)(s.strong,{children:".bodyValues"})," : Object"]}),(0,r.jsx)(s.br,{}),"objet ",(0,r.jsx)(s.em,{children:"EmailBodyValue"}),", contenant un objet pour chaque <partID> de ",(0,r.jsx)(s.code,{children:"bodyStructure"})," (facultatif)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#cc",children:[(0,r.jsx)(s.strong,{children:".cc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Collection"]}),(0,r.jsx)(s.br,{}),"les adresse(s) email suppl\xe9mentaire(s) des destinataires en Copie Carbone (CC) de l'email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#comments",children:[(0,r.jsx)(s.strong,{children:".comments"})," : Text"]}),(0,r.jsx)(s.br,{}),"header de commentaires suppl\xe9mentaires"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#from",children:[(0,r.jsx)(s.strong,{children:".from"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Collection"]}),(0,r.jsx)(s.br,{}),(0,r.jsx)(s.a,{href:"#email-addresses",children:"l'adresse ou les adresse(s) d'origine"})," de l'email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#headers",children:[(0,r.jsx)(s.strong,{children:".headers"})," : Collection"]}),(0,r.jsx)(s.br,{}),"d'objets ",(0,r.jsx)(s.code,{children:"EmailHeader"}),", dans l'ordre o\xf9 ils apparaissent dans le message"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#htmlbody",children:[(0,r.jsx)(s.strong,{children:".htmlBody"})," : Text"]}),(0,r.jsx)(s.br,{}),"repr\xe9sentation HTML du message \xe9lectronique (jeu de caract\xe8res par d\xe9faut : UTF-8) (optionnel, SMTP uniquement)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#id",children:[(0,r.jsx)(s.strong,{children:".id"})," : Text"]}),(0,r.jsx)(s.br,{}),"ID unique du serveur IMAP"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#inreplyto",children:[(0,r.jsx)(s.strong,{children:".inReplyTo"})," : Text"]}),(0,r.jsx)(s.br,{}),"identifiant(s) du ou des messages originaux auquel/auxquels le message courant est une r\xe9ponse"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#keywords",children:[(0,r.jsx)(s.strong,{children:".keywords"})," : Object"]}),(0,r.jsx)(s.br,{}),"ensemble de mots-cl\xe9s sous forme d'objet, o\xf9 chaque nom de propri\xe9t\xe9 est un mot-cl\xe9 et chaque valeur est mise \xe0 true"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#messageid",children:[(0,r.jsx)(s.strong,{children:".messageId"})," : Text"]}),(0,r.jsx)(s.br,{}),'header d\'identification du message ("message-id")']})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#receivedat",children:[(0,r.jsx)(s.strong,{children:".receivedAt"})," : Text"]}),(0,r.jsx)(s.br,{}),"de l'arriv\xe9e de l'email sur le serveur IMAP au format ISO 8601 UTC (ex : 2020-09-13T16:11:53Z)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#references",children:[(0,r.jsx)(s.strong,{children:".references"})," : Collection"]}),(0,r.jsx)(s.br,{}),"collection de tous les num\xe9ros d'identification des messages de la cha\xeene de r\xe9ponse pr\xe9c\xe9dente"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#replyto",children:[(0,r.jsx)(s.strong,{children:".replyTo"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Collection"]}),(0,r.jsx)(s.br,{}),(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," pour les r\xe9ponses"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#sendat",children:[(0,r.jsx)(s.strong,{children:".sendAt"})," : Text"]}),(0,r.jsx)(s.br,{}),"horodatage de l'email au format ISO 8601 UTC"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#sender",children:[(0,r.jsx)(s.strong,{children:".sender"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Collection"]}),(0,r.jsx)(s.br,{}),(0,r.jsx)(s.a,{href:"#email-addresses",children:"l'adresse ou les adresses"})," source de l'email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#size",children:[(0,r.jsx)(s.strong,{children:".size"})," : Integer"]}),(0,r.jsx)(s.br,{}),"taille (exprim\xe9e en octets) de l'objet Email renvoy\xe9 par le serveur IMAP"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#subject",children:[(0,r.jsx)(s.strong,{children:".subject"})," : Text"]}),(0,r.jsx)(s.br,{}),"description du sujet"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#textbody",children:[(0,r.jsx)(s.strong,{children:".textBody"})," : Text"]}),(0,r.jsx)(s.br,{}),"repr\xe9sentation en texte brut du message \xe9lectronique (jeu de caract\xe8res par d\xe9faut : UTF-8) (optionnel, SMTP uniquement)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#to",children:[(0,r.jsx)(s.strong,{children:".to"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Collection"]}),(0,r.jsx)(s.br,{}),"la ou les ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"adresse(s)"})," des destinataires principaux de l'email"]})})]})]}),"\n",(0,r.jsx)(s.h3,{id:"adresses-email",children:"Adresses Email"}),"\n",(0,r.jsxs)(s.p,{children:["Toutes les propri\xe9t\xe9s qui contiennent des adresses email (",(0,r.jsx)(s.a,{href:"#from",children:(0,r.jsx)(s.code,{children:"from"})}),", ",(0,r.jsx)(s.a,{href:"#cc",children:(0,r.jsx)(s.code,{children:"cc"})}),", ",(0,r.jsx)(s.a,{href:"#bcc",children:(0,r.jsx)(s.code,{children:"bcc"})}),", ",(0,r.jsx)(s.a,{href:"#to",children:(0,r.jsx)(s.code,{children:"to"})}),", ",(0,r.jsx)(s.a,{href:"#sender",children:(0,r.jsx)(s.code,{children:"sender"})}),", ",(0,r.jsx)(s.a,{href:"#replyto",children:(0,r.jsx)(s.code,{children:"replyTo"})}),") acceptent des valeurs de type texte, objet ou collection."]}),"\n",(0,r.jsx)(s.h4,{id:"text",children:"Text"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['une adresse uniquement : "',(0,r.jsx)(s.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,r.jsxs)(s.li,{children:["un seul nom d'affichage+courriel : \"Somebody",(0,r.jsx)(s.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,r.jsxs)(s.li,{children:['plusieurs courriels : "Somebody ',(0,r.jsx)(s.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),",",(0,r.jsx)(s.a,{href:"mailto:me@home.org",children:"me@home.org"}),'"']}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"object",children:"Object"}),"\n",(0,r.jsx)(s.p,{children:"Un objet avec deux propri\xe9t\xe9s :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Nom \xe0 afficher (peut \xeatre null)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"email"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Adresse email"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"collection",children:"Collection"}),"\n",(0,r.jsx)(s.p,{children:"Une collection d'objets adresse."}),"\n",(0,r.jsx)(s.h3,{id:"traitement-du-body",children:"Traitement du body"}),"\n",(0,r.jsxs)(s.p,{children:["Les propri\xe9t\xe9s ",(0,r.jsx)(s.a,{href:"#textbody",children:(0,r.jsx)(s.code,{children:"textBody"})})," et ",(0,r.jsx)(s.a,{href:"#htmlbody",children:(0,r.jsx)(s.code,{children:"htmlBody"})})," sont utilis\xe9es uniquement par la fonction ",(0,r.jsx)(s.a,{href:"/docs/fr/API/SMTPTransporterClass#send",children:"SMTP.send()"})," pour permettre d'envoyer des emails simples. Lorsque les deux propri\xe9t\xe9s sont remplies, le type MIME content-type multipart/alternative est utilis\xe9. Le client email doit alors reconna\xeetre la partie multipart/alternative et afficher la partie texte ou html n\xe9cessaire."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"#bodystructure",children:(0,r.jsx)(s.code,{children:"bodyStructure"})})," et ",(0,r.jsx)(s.a,{href:"#bodyvalues",children:(0,r.jsx)(s.code,{children:"bodyValues"})})," sont utilis\xe9es pour ",(0,r.jsx)(s.a,{href:"/docs/fr/API/SMTPTransporterClass",children:"SMTP"})," lorsque l'objet ",(0,r.jsx)(s.a,{href:"/docs/fr/API/EmailObjectClass",children:"Email"})," est construit \xe0 partir d'un document MIME, par exemple lorsqu'il est g\xe9n\xe9r\xe9 par la commande ",(0,r.jsx)(s.code,{children:"MAIL Convert from MIME"}),". Dans ce cas, les deux propri\xe9t\xe9s ",(0,r.jsx)(s.code,{children:"bodyStructure"})," et ",(0,r.jsx)(s.code,{children:"bodyValues"})," doivent \xeatre pass\xe9es ensemble, et il est d\xe9conseill\xe9 d'utiliser ",(0,r.jsx)(s.code,{children:"textBody"})," et ",(0,r.jsx)(s.code,{children:"htmlBody"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple-dobjets-bodystructure-et-bodyvalues",children:"Exemple d'objets bodyStructure et bodyValues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"bodyStructure": {\n  "type": "multipart/mixed",\n  "subParts": [\n    {\n      "partId": "p0001",\n      "type": "text/plain"\n    },\n    {\n      "partId": "p0002",\n      "type": "text/html"\n    }\n  ]\n},\n"bodyValues": {\n  "p0001": {\n    "value": "I have the most brilliant plan. Let me tell you all about it."\n  },\n  "p0002": {\n    "value": "<!DOCTYPE html><html><head><title></title><style type=\\"text/css\\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"attachments",children:".attachments"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".attachments"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".attachments"})," contient une collection d'objet(s) ",(0,r.jsx)(s.code,{children:"4D.MailAttachment"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Les objets de type pi\xe8ce jointe sont d\xe9finis par la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/API/MailAttachmentClass#mail-new-attachment",children:(0,r.jsx)(s.code,{children:"MAIL New attachment"})}),". Les objets Attachment ont des ",(0,r.jsx)(s.a,{href:"/docs/fr/API/MailAttachmentClass",children:"propri\xe9t\xe9s et fonctions"})," sp\xe9cifiques."]}),"\n",(0,r.jsx)(s.h2,{id:"bcc",children:".bcc"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".bcc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".bcc"})," contient les ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"adresses"})," des destinataires cach\xe9s en Copie Carbone Invisible de l'email."]}),"\n",(0,r.jsx)(s.h2,{id:"bodystructure",children:".bodyStructure"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".bodyStructure"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".bodyStructure"})," contient l'objet ",(0,r.jsx)(s.em,{children:"EmailBodyPart"}),", c'est-\xe0-dire la structure MIME compl\xe8te du body du message (facultatif). Voir section ",(0,r.jsx)(s.a,{href:"#traitement-du-body",children:"Traitement du body"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["L'objet ",(0,r.jsx)(s.code,{children:".bodyStructure"})," contient les propri\xe9t\xe9 suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeur"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"partID"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Identifie la partie de mani\xe8re unique dans l'email"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"(obligatoire) Valeur du champ d'en-t\xeate Content-Type de la partie"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"charset"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Valeur du param\xe8tre charset du champ d'en-t\xeate Content-Type"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"encoding"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["Si ",(0,r.jsx)(s.code,{children:"isEncodingProblem=true"}),", la valeur de Content-Transfer-Encoding est ajout\xe9e (par d\xe9faut ind\xe9fini)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"disposition"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Valeur du champ d'en-t\xeate Content-Disposition de la partie"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"language"}),(0,r.jsx)(s.td,{children:"Collection de textes"}),(0,r.jsxs)(s.td,{children:["Liste de balises de langage, telles que d\xe9finies dans la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc3282",children:"RFC3282"}),", dans le champ d'en-t\xeate Content-Language de la partie, le cas \xe9ch\xe9ant."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"location"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["URI, tel que d\xe9fini dans la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc2557",children:"RFC2557"}),", dans le champ d'en-t\xeate Content-Location de la partie, le cas \xe9ch\xe9ant."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"subParts"}),(0,r.jsx)(s.td,{children:"Collection d'objets"}),(0,r.jsxs)(s.td,{children:["Parties du corps de chaque enfant (collection d'objets ",(0,r.jsx)(s.em,{children:"EmailBodyPart"}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"headers"}),(0,r.jsx)(s.td,{children:"Collection d'objets"}),(0,r.jsxs)(s.td,{children:["Liste de tous les champs d'en-t\xeate de la partie, dans leur ordre d'apparition de l'email (collection d'objets ",(0,r.jsx)(s.em,{children:"EmailHeader"})," voir propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"#headers-",children:"headers"}),")"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"bodyvalues",children:".bodyValues"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".bodyValues"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".bodyValues"})," contient l'objet ",(0,r.jsx)(s.em,{children:"EmailBodyValue"}),", contenant un objet pour chaque <partID> de ",(0,r.jsx)(s.code,{children:"bodyStructure"})," (facultatif). Voir section ",(0,r.jsx)(s.a,{href:"#traitement-du-body",children:"Traitement du body"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["L'objet ",(0,r.jsx)(s.code,{children:".bodyValues"})," contient les propri\xe9t\xe9 suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeur"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"partID"}),".value"]}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:"Valeur de la partie body"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"partID"}),".isEncodingProblem"]}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Vrai si des sections malform\xe9es sont identifi\xe9es durant le d\xe9codage du charset, si le charset est inconnu, ou si le content transfer-encoding est inconnu. Faux par d\xe9faut"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"cc",children:".cc"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".cc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".cc"})," contient les adresse(s) email suppl\xe9mentaire(s) des destinataires en Copie Carbone (CC) de l'email."]}),"\n",(0,r.jsx)(s.h2,{id:"comments",children:".comments"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".comments"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".comments"})," contient un header de commentaires suppl\xe9mentaires."]}),"\n",(0,r.jsx)(s.p,{children:"Les commentaires n'apparaissent que dans la zone d'en-t\xeate du message (le body du message reste inchang\xe9)."}),"\n",(0,r.jsxs)(s.p,{children:["Pour les exigences propres au formatage, veuillez consulter la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"from",children:".from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".from"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-6",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".from"})," contient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"l'adresse ou les adresse(s) d'origine"})," de l'email."]}),"\n",(0,r.jsxs)(s.p,{children:["Chaque email envoy\xe9 comporte \xe0 la fois les adresses du ",(0,r.jsx)(s.a,{href:"#sender",children:"sender"})," et du ",(0,r.jsx)(s.strong,{children:"from"})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"le domaine sender correspond \xe0 ce que le serveur de r\xe9ception d'email obtient \xe0 l'ouverture de la session,"}),"\n",(0,r.jsx)(s.li,{children:"l'adresse from correspond \xe0 ce que le(s) destinataire(s) visualise(nt)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Pour mieux livrer l'email, il est recommand\xe9 d'utiliser les m\xeames adresses pour from et sender."}),"\n",(0,r.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".headers"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-7",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".headers"})," contient une collection d'objets ",(0,r.jsx)(s.code,{children:"EmailHeader"}),", dans l'ordre o\xf9 ils apparaissent dans le message. Cette propri\xe9t\xe9 permet aux utilisateurs d'ajouter des en-t\xeates extended (enregistr\xe9s) ou des en-t\xeates user-defined (non enregistr\xe9s, commen\xe7ant par \"X\")."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Si une propri\xe9t\xe9 d'objet ",(0,r.jsx)(s.code,{children:"EmailHeader"}),' d\xe9finit un en-t\xeate tel que "from" ou "cc" qui est d\xe9j\xe0 d\xe9fini comme propri\xe9t\xe9 au niveau du mail, la propri\xe9t\xe9 ',(0,r.jsx)(s.code,{children:"EmailHeader"})," est ignor\xe9e."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Chaque objet de la collection de headers peut contenir les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeur"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[].name"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["(obligatoire) Nom du champ en-t\xeate, tel que d\xe9fini dans la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),". S'il est null ou ind\xe9fini, le champ en-t\xeate n'est pas ajout\xe9 \xe0 l'en-t\xeate MIME."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[].value"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["Valeur du champ d'en-t\xeate telle que d\xe9finie dans la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"htmlbody",children:".htmlBody"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".htmlBody"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-8",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".htmlBody"})," contient la repr\xe9sentation HTML du message \xe9lectronique (jeu de caract\xe8res par d\xe9faut : UTF-8) (optionnel, SMTP uniquement). Voir section ",(0,r.jsx)(s.a,{href:"#traitement-du-body",children:"Traitement du body"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".id"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-9",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/API/IMAPTransporterClass",children:"IMAP transporter"})," uniquement."]}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".id"})," contient l'ID unique du serveur IMAP."]}),"\n",(0,r.jsx)(s.h2,{id:"inreplyto",children:".inReplyTo"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".inReplyTo"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-10",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".inReplyTo"})," contient le ou les identifiant(s) du ou des messages originaux auquel/auxquels le message courant est une r\xe9ponse."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour les exigences propres au formatage, veuillez consulter la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"keywords",children:".keywords"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".keywords"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"description-11",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".keywords"})," contient un ensemble de mots-cl\xe9s sous forme d'objet, o\xf9 chaque nom de propri\xe9t\xe9 est un mot-cl\xe9 et chaque valeur est mise \xe0 true."]}),"\n",(0,r.jsxs)(s.p,{children:['Cette propri\xe9t\xe9 est l\'en-t\xeate "keywords" (voir la ',(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc4021",children:"RFC#4021"}),")."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeur"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:".<keyword>"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Mot-cl\xe9 \xe0 d\xe9finir \xe0 d\xe9finir (la valeur doit \xeatre mise \xe0 vrai)"})]})})]}),"\n",(0,r.jsx)(s.p,{children:"Mots-cl\xe9s r\xe9serv\xe9s :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"$draft - Indique qu'un message est un brouillon"}),"\n",(0,r.jsx)(s.li,{children:"$seen - Indique qu'un message a \xe9t\xe9 lu"}),"\n",(0,r.jsx)(s.li,{children:"$flagged - Indique qu'un message n\xe9cessite une attention particuli\xe8re (ex : Urgent)"}),"\n",(0,r.jsx)(s.li,{children:"$answered - Indique qu'un message a re\xe7u une r\xe9ponse"}),"\n",(0,r.jsx)(s.li,{children:"$deleted - Indique un message \xe0 supprimer"}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:' $mail.keywords["$flagged"]:=True\n $mail.keywords["4d"]:=True\n'})}),"\n",(0,r.jsx)(s.h2,{id:"messageid",children:".messageId"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".messageId"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-12",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".messageId"}),' contient un header d\'identification du message ("message-id").']}),"\n",(0,r.jsxs)(s.p,{children:['Cet en-t\xeate est g\xe9n\xe9ralement "desChiffresOuDesLettres@nomdededomaine", par exemple "',(0,r.jsx)(s.a,{href:"mailto:abcdef.123456@4d.com",children:"abcdef.123456@4d.com"}),"\". Cet identifiant unique est notamment utilis\xe9 sur les forums ou les listes de diffusion publiques. En g\xe9n\xe9ral, les serveurs de messagerie ajoutent automatiquement cet en-t\xeate aux messages qu'ils envoient."]}),"\n",(0,r.jsx)(s.h2,{id:"receivedat",children:".receivedAt"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".receivedAt"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-13",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/API/IMAPTransporterClass",children:"IMAP transporter"})," uniquement."]}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".receivedAt"})," contient l'horodatage de l'arriv\xe9e de l'email sur le serveur IMAP au format ISO 8601 UTC (ex : 2020-09-13T16:11:53Z)."]}),"\n",(0,r.jsx)(s.h2,{id:"references",children:".references"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".references"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-14",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".references"})," contient la collection de tous les num\xe9ros d'identification des messages de la cha\xeene de r\xe9ponse pr\xe9c\xe9dente."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour les exigences propres au formatage, veuillez consulter la ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"replyto",children:".replyTo"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".replyTo"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-15",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".replyTo"})," contient les ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," pour les r\xe9ponses."]}),"\n",(0,r.jsx)(s.h2,{id:"sendat",children:".sendAt"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".sendAt"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-16",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".sendAt"})," contient l'horodatage de l'email au format ISO 8601 UTC."]}),"\n",(0,r.jsx)(s.h2,{id:"sender",children:".sender"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".sender"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-17",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".sender"})," contient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"l'adresse ou les adresses"})," source de l'email."]}),"\n",(0,r.jsxs)(s.p,{children:["Chaque email envoy\xe9 comporte \xe0 la fois les adresses du ",(0,r.jsx)(s.strong,{children:"sender"})," et du ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"#from",children:"from"})})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"le domaine sender correspond \xe0 ce que le serveur de r\xe9ception d'email obtient \xe0 l'ouverture de la session,"}),"\n",(0,r.jsx)(s.li,{children:"l'adresse from correspond \xe0 ce que le(s) destinataire(s) visualise(nt)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Pour mieux livrer l'email, il est recommand\xe9 d'utiliser les m\xeames adresses pour from et sender."}),"\n",(0,r.jsx)(s.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".size"})," : Integer"]}),"\n",(0,r.jsx)(s.h4,{id:"description-18",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/API/IMAPTransporterClass",children:"IMAP transporter"})," uniquement."]}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".size"})," contient la taille (exprim\xe9e en octets) de l'objet Email renvoy\xe9 par le serveur IMAP."]}),"\n",(0,r.jsx)(s.h2,{id:"subject",children:".subject"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".subject"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-19",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".subject"})," contient la description du sujet."]}),"\n",(0,r.jsx)(s.h2,{id:"textbody",children:".textBody"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".textBody"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"description-20",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".textBody"})," contient la repr\xe9sentation en texte brut du message \xe9lectronique (jeu de caract\xe8res par d\xe9faut : UTF-8) (optionnel, SMTP uniquement). Voir section ",(0,r.jsx)(s.a,{href:"#traitement-du-body",children:"Traitement du body"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"to",children:".to"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".to"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"description-21",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(s.code,{children:".to"})," contient la ou les ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"adresse(s)"})," des destinataires principaux de l'email."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var r=n(296540);const i={},t=r.createContext(i);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);