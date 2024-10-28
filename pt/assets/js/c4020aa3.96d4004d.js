"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16417],{297912:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(474848),d=n(28453);const i={id:"EmailObjectClass",title:"Email"},t=void 0,o={id:"API/EmailObjectClass",title:"Email",description:"Creating, sending or receiving emails in 4D is done by handling an Email object.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/API/EmailObjectClass.md",sourceDirName:"API",slug:"/API/EmailObjectClass",permalink:"/docs/pt/API/EmailObjectClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FEmailObjectClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"EmailObjectClass",title:"Email"},sidebar:"docs",previous:{title:"DataStore",permalink:"/docs/pt/API/DataStoreClass"},next:{title:"Entity",permalink:"/docs/pt/API/EntityClass"}},l={},c=[{value:"Objeto Email",id:"objeto-email",level:3},{value:"Endere\xe7os de Email",id:"endere\xe7os-de-email",level:3},{value:"Text",id:"text",level:4},{value:"Object",id:"object",level:4},{value:"Collection",id:"collection",level:4},{value:"Gestt\xe3o do corpo do correio eletr\xf4nico",id:"gestt\xe3o-do-corpo-do-correio-eletr\xf4nico",level:3},{value:"Exemplo de objetos bodyStructure e bodyValues",id:"exemplo-de-objetos-bodystructure-e-bodyvalues",level:4},{value:".attachments",id:"attachments",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".bcc",id:"bcc",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".bodyStructure",id:"bodystructure",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".bodyValues",id:"bodyvalues",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".cc",id:"cc",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".comments",id:"comments",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".from",id:"from",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".headers",id:"headers",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".htmlBody",id:"htmlbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4},{value:".id",id:"id",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-9",level:4},{value:".inReplyTo",id:"inreplyto",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-10",level:4},{value:".keywords",id:"keywords",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-11",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:".messageId",id:"messageid",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-12",level:4},{value:".receivedAt",id:"receivedat",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-13",level:4},{value:".references",id:"references",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-14",level:4},{value:".replyTo",id:"replyto",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-15",level:4},{value:".sendAt",id:"sendat",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-16",level:4},{value:".sender",id:"sender",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-17",level:4},{value:".size",id:"size",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-18",level:4},{value:".subject",id:"subject",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-19",level:4},{value:".textBody",id:"textbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-20",level:4},{value:".to",id:"to",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-21",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Creating, sending or receiving emails in 4D is done by handling an ",(0,r.jsx)(s.code,{children:"Email"})," object."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Email"})," objects are created when receiving mails through a ",(0,r.jsx)(s.em,{children:"transporter"})," class function:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["IMAP - ",(0,r.jsx)(s.a,{href:"/docs/pt/API/IMAPTransporterClass#getmail",children:(0,r.jsx)(s.code,{children:".getMail()"})})," and ",(0,r.jsx)(s.a,{href:"/docs/pt/API/IMAPTransporterClass#getmails",children:(0,r.jsx)(s.code,{children:".getMails()"})})," functions to get emails from an IMAP server"]}),"\n",(0,r.jsxs)(s.li,{children:["POP3 - Fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"/docs/pt/API/POP3TransporterClass#getmail",children:(0,r.jsx)(s.code,{children:".getMail()"})})," para obter um e-mail de um servidor POP3."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["You can also create a new, blank ",(0,r.jsx)(s.code,{children:"Email"})," object and then fill it with ",(0,r.jsx)(s.a,{href:"#email-object",children:"Email object properties"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["You send ",(0,r.jsx)(s.code,{children:"Email"})," objects using the SMTP ",(0,r.jsx)(s.a,{href:"/docs/pt/API/SMTPTransporterClass#send",children:(0,r.jsx)(s.code,{children:".send()"})})," function."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/commands/mail-convert-from-mime",children:(0,r.jsx)(s.code,{children:"MAIL Convert from MIME"})})," and ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/mail-convert-to-mime",children:(0,r.jsx)(s.code,{children:"MAIL Convert to MIME"})})," commands can be used to convert ",(0,r.jsx)(s.code,{children:"Email"})," objects to and from MIME contents."]}),"\n",(0,r.jsx)(s.h3,{id:"objeto-email",children:"Objeto Email"}),"\n",(0,r.jsx)(s.p,{children:"Objetos de e-mail fornecem as seguintes propriedades:"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["4D follows the ",(0,r.jsx)(s.a,{href:"https://jmap.io/spec-mail.html",children:"JMAP specification"})," to format the Email object."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#attachments",children:[(0,r.jsx)(s.strong,{children:".attachments"})," : Collection"]}),(0,r.jsx)(s.br,{}),"collection of ",(0,r.jsx)(s.code,{children:"4D.MailAttachment"})," object(s)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#bcc",children:[(0,r.jsx)(s.strong,{children:".bcc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Collection"]}),(0,r.jsx)(s.br,{}),"Blind Carbon Copy (BCC) hidden email recipient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#bodystructure",children:[(0,r.jsx)(s.strong,{children:".bodyStructure"})," : Object"]}),(0,r.jsx)(s.br,{}),(0,r.jsx)(s.em,{children:"EmailBodyPart"})," object, i.e. the full MIME structure of the message body (optional)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#bodyvalues",children:[(0,r.jsx)(s.strong,{children:".bodyValues"})," : Object"]}),(0,r.jsx)(s.br,{}),(0,r.jsx)(s.em,{children:"EmailBodyValue"})," object, containing an object for each <partID> of ",(0,r.jsx)(s.code,{children:"bodyStructure"})," (optional)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#cc",children:[(0,r.jsx)(s.strong,{children:".cc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Collection"]}),(0,r.jsx)(s.br,{}),"Carbon Copy (CC) additional email recipient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#comments",children:[(0,r.jsx)(s.strong,{children:".comments"})," : Text"]}),(0,r.jsx)(s.br,{}),"additional comments header"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#from",children:[(0,r.jsx)(s.strong,{children:".from"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Collection"]}),(0,r.jsx)(s.br,{}),"Originating ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"address(es)"})," of the email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#headers",children:[(0,r.jsx)(s.strong,{children:".headers"})," : Collection"]}),(0,r.jsx)(s.br,{}),"collection of ",(0,r.jsx)(s.code,{children:"EmailHeader"})," objects, in the order they appear in the message"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#comments",children:[(0,r.jsx)(s.strong,{children:".comments"})," : Text"]}),(0,r.jsx)(s.br,{}),"additional comments header"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#id",children:[(0,r.jsx)(s.strong,{children:".id"})," : Text"]}),(0,r.jsx)(s.br,{}),"unique ID from the IMAP server"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#inreplyto",children:[(0,r.jsx)(s.strong,{children:".inReplyTo"})," : Text"]}),(0,r.jsx)(s.br,{}),"message identifier(s) of the original message(s) to which the current message is a reply"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#keywords",children:[(0,r.jsx)(s.strong,{children:".keywords"})," : Object"]}),(0,r.jsx)(s.br,{}),"set of keywords as an object, where each property name is a keyword and each value is true"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#messageid",children:[(0,r.jsx)(s.strong,{children:".messageId"})," : Text"]}),(0,r.jsx)(s.br,{}),'message identifier header ("message-id")']})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#receivedat",children:[(0,r.jsx)(s.strong,{children:".receivedAt"})," : Text"]}),(0,r.jsx)(s.br,{}),"timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#references",children:[(0,r.jsx)(s.strong,{children:".references"})," : Collection"]}),(0,r.jsx)(s.br,{}),"Collection of all message-ids of messages in the preceding reply chain"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#replyto",children:[(0,r.jsx)(s.strong,{children:".replyTo"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Collection"]}),(0,r.jsx)(s.br,{}),(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," for responses"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#sendat",children:[(0,r.jsx)(s.strong,{children:".sendAt"})," : Text"]}),(0,r.jsx)(s.br,{}),"Email timestamp in ISO 8601 UTC format"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#sender",children:[(0,r.jsx)(s.strong,{children:".sender"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Collection"]}),(0,r.jsx)(s.br,{}),"email source ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#size",children:[(0,r.jsx)(s.strong,{children:".size"})," : Integer"]}),(0,r.jsx)(s.br,{}),"size (expressed in bytes) of the Email object returned by the IMAP server"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#subject",children:[(0,r.jsx)(s.strong,{children:".subject"})," : Text"]}),(0,r.jsx)(s.br,{}),"description of topic"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#textbody",children:[(0,r.jsx)(s.strong,{children:".textBody"})," : Text"]}),(0,r.jsx)(s.br,{}),"Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)"]})}),(0,r.jsx)(s.tr,{children:(0,r.jsxs)(s.td,{children:[(0,r.jsxs)(s.a,{href:"#to",children:[(0,r.jsx)(s.strong,{children:".to"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Collection"]}),(0,r.jsx)(s.br,{}),"primary recipient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})})]})]}),"\n",(0,r.jsx)(s.h3,{id:"endere\xe7os-de-email",children:"Endere\xe7os de Email"}),"\n",(0,r.jsxs)(s.p,{children:["All properties that contain email addresses (",(0,r.jsx)(s.a,{href:"#from",children:(0,r.jsx)(s.code,{children:"from"})}),", ",(0,r.jsx)(s.a,{href:"#cc",children:(0,r.jsx)(s.code,{children:"cc"})}),", ",(0,r.jsx)(s.a,{href:"#bcc",children:(0,r.jsx)(s.code,{children:"bcc"})}),", ",(0,r.jsx)(s.a,{href:"#to",children:(0,r.jsx)(s.code,{children:"to"})}),", ",(0,r.jsx)(s.a,{href:"#sender",children:(0,r.jsx)(s.code,{children:"sender"})}),", ",(0,r.jsx)(s.a,{href:"#replyto",children:(0,r.jsx)(s.code,{children:"replyTo"})}),") accept a value of text, object, or collection type."]}),"\n",(0,r.jsx)(s.h4,{id:"text",children:"Text"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['e-mail \xfanico: "',(0,r.jsx)(s.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,r.jsxs)(s.li,{children:['single display name+email: "Somebody ',(0,r.jsx)(s.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,r.jsxs)(s.li,{children:['v\xe1rios e-mails: "Somebody ',(0,r.jsx)(s.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),",",(0,r.jsx)(s.a,{href:"mailto:me@home.org",children:"me@home.org"}),'"']}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"object",children:"Object"}),"\n",(0,r.jsx)(s.p,{children:"Um objeto com duas propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propriedade"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Nome de exibi\xe7\xe3o (pode ser nulo)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"email"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Endere\xe7o de Email"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"collection",children:"Collection"}),"\n",(0,r.jsx)(s.p,{children:"Uma cole\xe7\xe3o de objetos de endere\xe7o."}),"\n",(0,r.jsx)(s.h3,{id:"gestt\xe3o-do-corpo-do-correio-eletr\xf4nico",children:"Gestt\xe3o do corpo do correio eletr\xf4nico"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"#textbody",children:(0,r.jsx)(s.code,{children:"textBody"})})," and ",(0,r.jsx)(s.a,{href:"#htmlbody",children:(0,r.jsx)(s.code,{children:"htmlBody"})})," properties are only used with the ",(0,r.jsx)(s.a,{href:"/docs/pt/API/SMTPTransporterClass#send",children:"SMTP.send()"})," function to allow sending simple mails. Quando ambas as propriedades s\xe3o preenchidas, o tipo de conte\xfado MIME multiparte/alternativo \xe9 utilizada. O cliente de email deve reconhecer a parte multiparte/alternativa e exibir a parte do texto ou html conforme necess\xe1rio."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"#bodystructure",children:(0,r.jsx)(s.code,{children:"bodyStructure"})})," and ",(0,r.jsx)(s.a,{href:"#bodyvalues",children:(0,r.jsx)(s.code,{children:"bodyValues"})})," are used for ",(0,r.jsx)(s.a,{href:"/docs/pt/API/SMTPTransporterClass",children:"SMTP"})," when the ",(0,r.jsx)(s.a,{href:"#email-object",children:"Email object"})," is built from a MIME document, e.g. when generated by the ",(0,r.jsx)(s.code,{children:"MAIL Convert from MIME"})," command. In this case, both ",(0,r.jsx)(s.code,{children:"bodyStructure"})," and ",(0,r.jsx)(s.code,{children:"bodyValues"})," properties must be passed together, and it is not recommended to use ",(0,r.jsx)(s.code,{children:"textBody"})," and ",(0,r.jsx)(s.code,{children:"htmlBody"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-de-objetos-bodystructure-e-bodyvalues",children:"Exemplo de objetos bodyStructure e bodyValues"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'"bodyStructure": {\n  "type": "multipart/mixed",\n  "subParts": [\n    {\n      "partId": "p0001",\n      "type": "text/plain"\n    },\n    {\n      "partId": "p0002",\n      "type": "text/html"\n    }\n  ]\n},\n"bodyValues": {\n  "p0001": {\n    "value": "I have the most brilliant plan. Let me tell you all about it."\n  },\n  "p0002": {\n    "value": "<!DOCTYPE html><html><head><title></title><style type=\\"text/css\\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"attachments",children:".attachments"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".attachments"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".attachments"})," property contains a collection of ",(0,r.jsx)(s.code,{children:"4D.MailAttachment"})," object(s)."]}),"\n",(0,r.jsxs)(s.p,{children:["Attachment objects are defined through the ",(0,r.jsx)(s.a,{href:"/docs/pt/API/MailAttachmentClass#mail-new-attachment",children:(0,r.jsx)(s.code,{children:"MAIL New attachment"})})," command. Attachment objects have specific ",(0,r.jsx)(s.a,{href:"/docs/pt/API/MailAttachmentClass",children:"properties and functions"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"bcc",children:".bcc"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".bcc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".bcc"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".bcc"})," property contains the Blind Carbon Copy (BCC) hidden email recipient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]}),"\n",(0,r.jsx)(s.h2,{id:"bodystructure",children:".bodyStructure"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".bodyStructure"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".bodyStructure"})," property contains the ",(0,r.jsx)(s.em,{children:"EmailBodyPart"})," object, i.e. the full MIME structure of the message body (optional). See ",(0,r.jsx)(s.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,r.jsxs)(s.p,{children:["O objeto ",(0,r.jsx)(s.code,{children:".bodyStructure"})," cont\xe9m as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propriedade"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"partID"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Identifica a parte de maneira \xfanica dentro do email"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"(obrigat\xf3rio) Valor do campo de cabe\xe7alho Content-Type da parte"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"charset"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Valor do par\xe2metro charset do campo de cabe\xe7alho Content-Type"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"encoding"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["If ",(0,r.jsx)(s.code,{children:"isEncodingProblem=true"}),", the Content-Transfer-Encoding value is added (by default undefined)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"disposition"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"Valor do campo de cabe\xe7alho Conte\xfado - Disposi\xe7\xe3o da parte"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"L\xednguagem"}),(0,r.jsx)(s.td,{children:"Cole\xe7\xe3o de textos"}),(0,r.jsxs)(s.td,{children:["List of language tags, as defined in ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc3282",children:"RFC3282"}),", in the Content-Language header field of the part, if present."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"location"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsxs)(s.td,{children:["URI, as defined in ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc2557",children:"RFC2557"}),", in the Content-Location header field of the part, if present."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"subParts"}),(0,r.jsx)(s.td,{children:"Uma cole\xe7\xe3o de objetos"}),(0,r.jsxs)(s.td,{children:["Partes do corpo de cada filho (cole\xe7\xe3o de objetos ",(0,r.jsx)(s.em,{children:"EmailBodyPart"}),")"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"headers"}),(0,r.jsx)(s.td,{children:"Uma cole\xe7\xe3o de objetos"}),(0,r.jsxs)(s.td,{children:["List of all header fields in the part, in the order they appear in the message (collection of ",(0,r.jsx)(s.em,{children:"EmailHeader"})," objects, see ",(0,r.jsx)(s.a,{href:"#headers-",children:"headers"})," property)"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"bodyvalues",children:".bodyValues"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".bodyValues"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".bodyValues"})," property contains the ",(0,r.jsx)(s.em,{children:"EmailBodyValue"})," object, containing an object for each <partID> of ",(0,r.jsx)(s.code,{children:"bodyStructure"})," (optional). See ",(0,r.jsx)(s.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,r.jsxs)(s.p,{children:["O objeto ",(0,r.jsx)(s.code,{children:".bodyValues"})," cont\xe9m as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propriedade"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"partID"}),".value"]}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsx)(s.td,{children:"Valor da parte do corpo"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"partID"}),".isEncodingProblem"]}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Verdadeiro se se\xe7\xf5es malformadas forem encontradas durante a decodifica\xe7\xe3o do conjunto de charset, ou charset desconhecido, ou codifica\xe7\xe3o de conte\xfado desconhecido. Padr\xe3o \xe9 falso"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"cc",children:".cc"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".cc"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".cc"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".cc"})," property contains the Carbon Copy (CC) additional email recipient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]}),"\n",(0,r.jsx)(s.h2,{id:"comments",children:".comments"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".comments"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".comments"})," property contains an additional comments header."]}),"\n",(0,r.jsx)(s.p,{children:"Os coment\xe1rios s\xf3 aparecem na se\xe7\xe3o de cabe\xe7alho da mensagem (mantendo o corpo da mensagem intocado)."}),"\n",(0,r.jsxs)(s.p,{children:["For specific formatting requirements, please consult the ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"from",children:".from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".from"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".from"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".from"})," property contains the Originating ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"address(es)"})," of the email."]}),"\n",(0,r.jsxs)(s.p,{children:["Cada e-mail que voc\xea envia tem os endere\xe7os ",(0,r.jsx)(s.a,{href:"#sender",children:"sender"})," e ",(0,r.jsx)(s.strong,{children:"from"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"o dom\xednio do remetente \xe9 o que o servidor de e-mail de recebimento recebe ao abrir a sess\xe3o,"}),"\n",(0,r.jsx)(s.li,{children:"o endere\xe7o a partir \xe9 o que o(s) destinat\xe1rio(s) ver\xe1(s)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Para uma melhor capacidade de entrega, \xe9 recomendado usar o mesmo endere\xe7o de e para o remetente."}),"\n",(0,r.jsx)(s.h2,{id:"headers",children:".headers"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".headers"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".headers"})," property contains a collection of ",(0,r.jsx)(s.code,{children:"EmailHeader"}),' objects, in the order they appear in the message. Esta propriedade permite que usu\xe1rios adicionem cabe\xe7alhos estendidos (registrados) ou definidos pelo usu\xe1rio (n\xe3o registrados, come\xe7ando com cabe\xe7alhos "X").']}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["If an ",(0,r.jsx)(s.code,{children:"EmailHeader"}),' object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the ',(0,r.jsx)(s.code,{children:"EmailHeader"})," property is ignored."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Cada objeto da cole\xe7\xe3o de cabe\xe7alhos pode conter as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propriedade"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[].name"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["(mandatory) Header field name as defined in ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),". Caso seja nulo ou indefinido, o campo cabe\xe7alho n\xe3o ser\xe1 adicionado ao cabe\xe7alho MIME."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[].value"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["Header field values as defined in ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"htmlbody",children:".htmlBody"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".htmlBody"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".htmlBody"})," property contains the HTML representation of the email message (default charset is UTF-8) (optional, SMTP only). See ",(0,r.jsx)(s.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,r.jsx)(s.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".id"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-9",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/API/IMAPTransporterClass",children:"IMAP transporter"})," only."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".id"})," property contains the unique ID from the IMAP server."]}),"\n",(0,r.jsx)(s.h2,{id:"inreplyto",children:".inReplyTo"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".inReplyTo"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-10",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".inReplyTo"})," property contains the message identifier(s) of the original message(s) to which the current message is a reply."]}),"\n",(0,r.jsxs)(s.p,{children:["For specific formatting requirements, please consult the ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"keywords",children:".keywords"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".keywords"})," : Object"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-11",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".keywords"})," property contains a set of keywords as an object, where each property name is a keyword and each value is true."]}),"\n",(0,r.jsxs)(s.p,{children:['This property is the "keywords" header (see ',(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc4021",children:"RFC#4021"}),")."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propriedade"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Valor"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:".<keyword>"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Palavra-chave a definir (valor deve ser verdadeiro)"})]})})]}),"\n",(0,r.jsx)(s.p,{children:"Palavra-chave reservada."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"$draft - Indica que uma mensagem \xe9 um rascunho"}),"\n",(0,r.jsx)(s.li,{children:"$seen - Indica uma mensagem que foi lida"}),"\n",(0,r.jsx)(s.li,{children:"$flagged - Indica uma mensagem que requer aten\xe7\xe3o especial (por exemplo, Urgent)"}),"\n",(0,r.jsx)(s.li,{children:"$answered - Indica uma mensagem que foi respondida"}),"\n",(0,r.jsx)(s.li,{children:"$deleted - Indica uma mensagem para deletar"}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:' $mail.keywords["$flagged"]:=True\n $mail.keywords["4d"]:=True\n'})}),"\n",(0,r.jsx)(s.h2,{id:"messageid",children:".messageId"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".messageId"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-12",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".messageId"}),' property contains a message identifier header ("message-id").']}),"\n",(0,r.jsxs)(s.p,{children:['Este cabe\xe7alho geralmente \xe9 "lettersOrNumbers@domainname", por exemplo, "',(0,r.jsx)(s.a,{href:"mailto:abcdef.123456@4d.com",children:"abcdef.123456@4d.com"}),'". Este ID exclusivo \xe9 usado em particular em f\xf3runs ou listas p\xfablicas de e-mail. Em geral, os servidores de email adicionam automaticamente este cabe\xe7alho \xe0s mensagens que enviam.']}),"\n",(0,r.jsx)(s.h2,{id:"receivedat",children:".receivedAt"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".receivedAt"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-13",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/API/IMAPTransporterClass",children:"IMAP transporter"})," only."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".receivedAt"})," property contains the timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)."]}),"\n",(0,r.jsx)(s.h2,{id:"references",children:".references"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".references"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-14",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".references"})," property contains the Collection of all message-ids of messages in the preceding reply chain."]}),"\n",(0,r.jsxs)(s.p,{children:["For specific formatting requirements, please consult the ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"replyto",children:".replyTo"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".replyTo"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".replyTo"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-15",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".replyTo"})," property contains the ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," for responses."]}),"\n",(0,r.jsx)(s.h2,{id:"sendat",children:".sendAt"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".sendAt"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-16",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".sendAt"})," property contains the Email timestamp in ISO 8601 UTC format."]}),"\n",(0,r.jsx)(s.h2,{id:"sender",children:".sender"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".sender"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".sender"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-17",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".sender"})," property contains the email source ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]}),"\n",(0,r.jsxs)(s.p,{children:["Cada e-mail que voc\xea envia tem os endere\xe7os ",(0,r.jsx)(s.strong,{children:"sender"})," e ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"#from",children:"from"})}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"o dom\xednio do remetente \xe9 o que o servidor de e-mail de recebimento recebe ao abrir a sess\xe3o,"}),"\n",(0,r.jsx)(s.li,{children:"o endere\xe7o a partir \xe9 o que o(s) destinat\xe1rio(s) ver\xe1(s)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Para uma melhor capacidade de entrega, \xe9 recomendado usar o mesmo endere\xe7o de e para o remetente."}),"\n",(0,r.jsx)(s.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".size"})," : Integer"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-18",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/API/IMAPTransporterClass",children:"IMAP transporter"})," only."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".size"})," property contains the size (expressed in bytes) of the Email object returned by the IMAP server."]}),"\n",(0,r.jsx)(s.h2,{id:"subject",children:".subject"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".subject"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-19",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".subject"})," property contains the description of topic."]}),"\n",(0,r.jsx)(s.h2,{id:"textbody",children:".textBody"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".textBody"})," : Text"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-20",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".textBody"})," property contains the Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only). See ",(0,r.jsx)(s.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,r.jsx)(s.h2,{id:"to",children:".to"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:".to"})," : Text",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:".to"})," : Collection"]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o-21",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:".to"})," property contains the primary recipient ",(0,r.jsx)(s.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var r=n(296540);const d={},i=r.createContext(d);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);