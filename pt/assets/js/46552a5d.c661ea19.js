"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7522"],{94934:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>t,contentTitle:()=>c});var n=JSON.parse('{"id":"API/EmailObjectClass","title":"Email","description":"Creating, sending or receiving emails in 4D is done by handling an Email object.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/API/EmailObjectClass.md","sourceDirName":"API","slug":"/API/EmailObjectClass","permalink":"/docs/pt/API/EmailObjectClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FEmailObjectClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"EmailObjectClass","title":"Email"},"sidebar":"docs","previous":{"title":"DataStore","permalink":"/docs/pt/API/DataStoreClass"},"next":{"title":"Entity","permalink":"/docs/pt/API/EntityClass"}}'),d=s("785893"),o=s("250065");let i={id:"EmailObjectClass",title:"Email"},c=void 0,l={},t=[{value:"Objeto Email",id:"objeto-email",level:3},{value:"Endere\xe7os de Email",id:"endere\xe7os-de-email",level:3},{value:"Text",id:"text",level:4},{value:"Object",id:"object",level:4},{value:"Collection",id:"collection",level:4},{value:"Gest\xe3o do corpo do correio eletr\xf4nico",id:"gest\xe3o-do-corpo-do-correio-eletr\xf4nico",level:3},{value:"Exemplo de objetos bodyStructure e bodyValues",id:"exemplo-de-objetos-bodystructure-e-bodyvalues",level:4},{value:".attachments",id:"attachments",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".bcc",id:"bcc",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".bodyStructure",id:"bodystructure",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".bodyValues",id:"bodyvalues",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".cc",id:"cc",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".comments",id:"comments",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".from",id:"from",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4},{value:".headers",id:"headers",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-7",level:4},{value:".htmlBody",id:"htmlbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-8",level:4},{value:".id",id:"id",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-9",level:4},{value:".inReplyTo",id:"inreplyto",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-10",level:4},{value:".keywords",id:"keywords",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-11",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:".messageId",id:"messageid",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-12",level:4},{value:".receivedAt",id:"receivedat",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-13",level:4},{value:".references",id:"references",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-14",level:4},{value:".replyTo",id:"replyto",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-15",level:4},{value:".sendAt",id:"sendat",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-16",level:4},{value:".sender",id:"sender",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-17",level:4},{value:".size",id:"size",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-18",level:4},{value:".subject",id:"subject",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-19",level:4},{value:".textBody",id:"textbody",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-20",level:4},{value:".to",id:"to",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-21",level:4}];function a(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:["Creating, sending or receiving emails in 4D is done by handling an ",(0,d.jsx)(r.code,{children:"Email"})," object."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Email"})," objects are created when receiving mails through a ",(0,d.jsx)(r.em,{children:"transporter"})," class function:"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["IMAP - fun\xe7\xf5es ",(0,d.jsx)(r.a,{href:"/docs/pt/API/IMAPTransporterClass#getmail",children:(0,d.jsx)(r.code,{children:".getMail()"})})," e ",(0,d.jsx)(r.a,{href:"/docs/pt/API/IMAPTransporterClass#getmails",children:(0,d.jsx)(r.code,{children:".getMails()"})})," para obter e-mails de um servidor IMAP"]}),"\n",(0,d.jsxs)(r.li,{children:["POP3 - Fun\xe7\xe3o ",(0,d.jsx)(r.a,{href:"/docs/pt/API/POP3TransporterClass#getmail",children:(0,d.jsx)(r.code,{children:".getMail()"})})," para obter um e-mail de um servidor POP3."]}),"\n"]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:["Voc\xea tamb\xe9m pode criar um novo objeto ",(0,d.jsx)(r.code,{children:"Email"})," em branco e preench\xea-lo com ",(0,d.jsx)(r.a,{href:"#email-object",children:"propriedades do objeto Email"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Voc\xea envia objetos ",(0,d.jsx)(r.code,{children:"Email"})," usando a fun\xe7\xe3o SMTP ",(0,d.jsx)(r.a,{href:"/docs/pt/API/SMTPTransporterClass#send",children:(0,d.jsx)(r.code,{children:".send()"})}),"."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/commands/mail-convert-from-mime",children:(0,d.jsx)(r.code,{children:"MAIL Convert from MIME"})})," and ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/mail-convert-to-mime",children:(0,d.jsx)(r.code,{children:"MAIL Convert to MIME"})})," commands can be used to convert ",(0,d.jsx)(r.code,{children:"Email"})," objects to and from MIME contents."]}),"\n",(0,d.jsx)(r.h3,{id:"objeto-email",children:"Objeto Email"}),"\n",(0,d.jsx)(r.p,{children:"Objetos de e-mail fornecem as seguintes propriedades:"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:["4D segue a ",(0,d.jsx)(r.a,{href:"https://jmap.io/spec-mail.html",children:"especifica\xe7\xe3o JMAP"})," para formatar o objeto Email."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsx)(r.tr,{children:(0,d.jsx)(r.th,{})})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#attachments",children:[(0,d.jsx)(r.strong,{children:".attachments"})," : Collection"]}),(0,d.jsx)(r.br,{}),"cole\xe7\xe3o de objeto(s) ",(0,d.jsx)(r.code,{children:"4D.MailAttachment"})]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#bcc",children:[(0,d.jsx)(r.strong,{children:".bcc"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".bcc"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".bcc"})," : Collection"]}),(0,d.jsx)(r.br,{}),"Blind Carbon Copy (BCC) ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"dire\xe7\xf5es"})," do e-mail"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#bodystructure",children:[(0,d.jsx)(r.strong,{children:".bodyStructure"})," : Object"]}),(0,d.jsx)(r.br,{}),(0,d.jsx)(r.em,{children:"EmailBodyPart"}),", ou seja, a estrutura MIME completa do corpo da mensagem (opcional)"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#bodyvalues",children:[(0,d.jsx)(r.strong,{children:".bodyValues"})," : Object"]}),(0,d.jsx)(r.br,{}),(0,d.jsx)(r.em,{children:"EmailBodyValue"}),", que cont\xe9m um objeto para cada <partID> de ",(0,d.jsx)(r.code,{children:"bodyStructure"})," (opcional)"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#cc",children:[(0,d.jsx)(r.strong,{children:".cc"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".cc"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".cc"})," : Collection"]}),(0,d.jsx)(r.br,{}),(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7o(s)"})," e-mail adicionais em C\xf3pia de Carbon (CC) do e-mail"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#comments",children:[(0,d.jsx)(r.strong,{children:".comments"})," : Text"]}),(0,d.jsx)(r.br,{})," cabe\xe7alho de coment\xe1rios adicional"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#from",children:[(0,d.jsx)(r.strong,{children:".from"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".from"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".from"})," : Collection"]}),(0,d.jsx)(r.br,{}),(0,d.jsx)(r.a,{href:"#email-addresses",children:"a(s) endere\xe7o(es)"})," de origem do e-mail"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#headers",children:[(0,d.jsx)(r.strong,{children:".headers"})," : Collection"]}),(0,d.jsx)(r.br,{}),"de objetos ",(0,d.jsx)(r.code,{children:"EmailHeader"}),", na ordem em que aparecem na mensagem"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#comments",children:[(0,d.jsx)(r.strong,{children:".comments"})," : Text"]}),(0,d.jsx)(r.br,{})," cabe\xe7alho de coment\xe1rios adicional"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#id",children:[(0,d.jsx)(r.strong,{children:".id"})," : Text"]}),(0,d.jsx)(r.br,{})," ID exclusivo do servidor IMAP"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#inreplyto",children:[(0,d.jsx)(r.strong,{children:".inReplyTo"})," : Text"]}),(0,d.jsx)(r.br,{}),"identificador(es) de mensagem da(s) mensagem(ns) original(is) \xe0(s) qual(is) a mensagem atual \xe9 uma resposta"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#keywords",children:[(0,d.jsx)(r.strong,{children:".keywords"})," : Object"]}),(0,d.jsx)(r.br,{}),"conjunto de palavras-chave como um objeto, em que cada nome de propriedade \xe9 uma palavra-chave e cada valor \xe9 true"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#messageid",children:[(0,d.jsx)(r.strong,{children:".messageId"})," : Text"]}),(0,d.jsx)(r.br,{}),'cabe\xe7alho de identificador de mensagem ("message-id")']})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#receivedat",children:[(0,d.jsx)(r.strong,{children:".receivedAt"})," : Text"]}),(0,d.jsx)(r.br,{}),"carimbo de data/hora da chegada do e-mail no servidor IMAP no formato ISO 8601 UTC (por exemplo: 2020-09-13T16:11:53Z)"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#references",children:[(0,d.jsx)(r.strong,{children:".references"})," : Collection"]}),(0,d.jsx)(r.br,{}),"cole\xe7\xe3o de todos os IDs de mensagens na cadeia de resposta anterior"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#replyto",children:[(0,d.jsx)(r.strong,{children:".replyTo"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".replyTo"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".replyTo"})," : Collection"]}),(0,d.jsx)(r.br,{}),(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7os"})," para respostas"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#sendat",children:[(0,d.jsx)(r.strong,{children:".sendAt"})," : Text"]}),(0,d.jsx)(r.br,{})," Carimbo de e-mail no formato UTC ISO 8601"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#sender",children:[(0,d.jsx)(r.strong,{children:".sender"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".sender"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".sender"})," : Collection"]}),(0,d.jsx)(r.br,{})," ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7os"})," fonte do e-mail"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#size",children:[(0,d.jsx)(r.strong,{children:".size"})," : Integer"]}),(0,d.jsx)(r.br,{}),"(expresso em bytes) do objeto Email retornado pelo servidor IMAP"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#subject",children:[(0,d.jsx)(r.strong,{children:".subject"})," : Text"]}),(0,d.jsx)(r.br,{}),"descri\xe7\xe3o do t\xf3pico"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#textbody",children:[(0,d.jsx)(r.strong,{children:".textBody"})," : Text"]}),(0,d.jsx)(r.br,{}),"representa\xe7\xe3o em texto simples da mensagem de e-mail (conjunto de caracteres padr\xe3o \xe9 UTF-8) (opcional, somente SMTP)"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsxs)(r.a,{href:"#to",children:[(0,d.jsx)(r.strong,{children:".to"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".to"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".to"})," : Collection"]}),(0,d.jsx)(r.br,{})," os ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7os"})," dos destinat\xe1rios prim\xe1rios de e-mail"]})})]})]}),"\n",(0,d.jsx)(r.h3,{id:"endere\xe7os-de-email",children:"Endere\xe7os de Email"}),"\n",(0,d.jsxs)(r.p,{children:["Todas as propriedades que cont\xeam endere\xe7os de e-mail (",(0,d.jsx)(r.a,{href:"#from",children:(0,d.jsx)(r.code,{children:"from"})}),", ",(0,d.jsx)(r.a,{href:"#cc",children:(0,d.jsx)(r.code,{children:"cc"})}),", ",(0,d.jsx)(r.a,{href:"#bcc",children:(0,d.jsx)(r.code,{children:"bcc"})}),", ",(0,d.jsx)(r.a,{href:"#to",children:(0,d.jsx)(r.code,{children:"to"})}),", ",(0,d.jsx)(r.a,{href:"#sender",children:(0,d.jsx)(r.code,{children:"sender"})}),", ",(0,d.jsx)(r.a,{href:"#replyto",children:(0,d.jsx)(r.code,{children:"replyTo"})}),") aceitam um valor de tipo texto, objeto ou cole\xe7\xe3o."]}),"\n",(0,d.jsx)(r.h4,{id:"text",children:"Text"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:['e-mail \xfanico: "',(0,d.jsx)(r.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,d.jsxs)(r.li,{children:['single display name+email: "Somebody ',(0,d.jsx)(r.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,d.jsxs)(r.li,{children:['v\xe1rios e-mails: "Somebody ',(0,d.jsx)(r.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),",",(0,d.jsx)(r.a,{href:"mailto:me@home.org",children:"me@home.org"}),'"']}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"object",children:"Object"}),"\n",(0,d.jsx)(r.p,{children:"Um objeto com duas propriedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Propriedade"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"name"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"Nome de exibi\xe7\xe3o (pode ser nulo)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"email"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"Endere\xe7o de Email"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"collection",children:"Collection"}),"\n",(0,d.jsx)(r.p,{children:"Uma cole\xe7\xe3o de objetos de endere\xe7o."}),"\n",(0,d.jsx)(r.h3,{id:"gest\xe3o-do-corpo-do-correio-eletr\xf4nico",children:"Gest\xe3o do corpo do correio eletr\xf4nico"}),"\n",(0,d.jsxs)(r.p,{children:["As propriedades ",(0,d.jsx)(r.a,{href:"#textbody",children:(0,d.jsx)(r.code,{children:"textBody"})})," e ",(0,d.jsx)(r.a,{href:"#htmlbody",children:(0,d.jsx)(r.code,{children:"htmlBody"})})," s\xe3o usadas somente com a fun\xe7\xe3o ",(0,d.jsx)(r.a,{href:"/docs/pt/API/SMTPTransporterClass#send",children:"SMTP.send()"})," para permitir o envio de e-mails simples. Quando ambas as propriedades s\xe3o preenchidas, o tipo de conte\xfado MIME multiparte/alternativo \xe9 utilizada. O cliente de email deve reconhecer a parte multiparte/alternativa e exibir a parte do texto ou html conforme necess\xe1rio."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"#bodystructure",children:(0,d.jsx)(r.code,{children:"bodyStructure"})})," e ",(0,d.jsx)(r.a,{href:"#bodyvalues",children:(0,d.jsx)(r.code,{children:"bodyValues"})})," s\xe3o usados para ",(0,d.jsx)(r.a,{href:"/docs/pt/API/SMTPTransporterClass",children:"SMTP"})," quando o ",(0,d.jsx)(r.a,{href:"#email-object",children:"objeto Email"})," \xe9 criado a partir de um documento MIME, por exemplo, quando gerado pelo comando ",(0,d.jsx)(r.code,{children:"MAIL Convert from MIME"}),". In this case, both ",(0,d.jsx)(r.code,{children:"bodyStructure"})," and ",(0,d.jsx)(r.code,{children:"bodyValues"})," properties must be passed together, and it is not recommended to use ",(0,d.jsx)(r.code,{children:"textBody"})," and ",(0,d.jsx)(r.code,{children:"htmlBody"}),"."]}),"\n",(0,d.jsx)(r.h4,{id:"exemplo-de-objetos-bodystructure-e-bodyvalues",children:"Exemplo de objetos bodyStructure e bodyValues"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'"bodyStructure": {\n  "type": "multipart/mixed",\n  "subParts": [\n    {\n      "partId": "p0001",\n      "type": "text/plain"\n    },\n    {\n      "partId": "p0002",\n      "type": "text/html"\n    }\n  ]\n},\n"bodyValues": {\n  "p0001": {\n    "value": "I have the most brilliant plan. Let me tell you all about it."\n  },\n  "p0002": {\n    "value": "<!DOCTYPE html><html><head><title></title><style type=\\"text/css\\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"\n  }\n}\n'})}),"\n",(0,d.jsx)(r.h2,{id:"attachments",children:".attachments"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".attachments"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".attachments"})," cont\xe9m uma cole\xe7\xe3o de objeto(s) ",(0,d.jsx)(r.code,{children:"4D.MailAttachment"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["Os objetos de anexo s\xe3o definidos por meio do comando ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/mail-new-attachment",children:(0,d.jsx)(r.code,{children:"MAIL New attachment"})}),". Os objetos anexo t\xeam ",(0,d.jsx)(r.a,{href:"/docs/pt/API/MailAttachmentClass",children:"propriedades e fun\xe7\xf5es"})," espec\xedficas."]}),"\n",(0,d.jsx)(r.h2,{id:"bcc",children:".bcc"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".bcc"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".bcc"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".bcc"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".bcc"})," cont\xe9m o destinat\xe1rio oculto do e-mail Blind Carbon Copy (BCC) ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"dire\xe7\xf5es"})," do e-mail."]}),"\n",(0,d.jsx)(r.h2,{id:"bodystructure",children:".bodyStructure"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".bodyStructure"})," : Object"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".bodyStructure"})," cont\xe9m o objeto ",(0,d.jsx)(r.em,{children:"EmailBodyPart"}),", ou seja, a estrutura MIME completa do corpo da mensagem (opcional). Consulte a se\xe7\xe3o ",(0,d.jsx)(r.a,{href:"#handling-body-part",children:"Gerenciamento do corpo"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["O objeto ",(0,d.jsx)(r.code,{children:".bodyStructure"})," cont\xe9m as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Propriedade"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{children:"Valor"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"partID"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"Identifica a parte de maneira \xfanica dentro do email"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"(obrigat\xf3rio) Valor do campo de cabe\xe7alho Content-Type da parte"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"charset"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"Valor do par\xe2metro charset do campo de cabe\xe7alho Content-Type"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"encoding"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsxs)(r.td,{children:["If ",(0,d.jsx)(r.code,{children:"isEncodingProblem=true"}),", the Content-Transfer-Encoding value is added (by default undefined)"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"disposition"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"Valor do campo de cabe\xe7alho Conte\xfado - Disposi\xe7\xe3o da parte"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"L\xednguagem"}),(0,d.jsx)(r.td,{children:"Cole\xe7\xe3o de textos"}),(0,d.jsxs)(r.td,{children:["List of language tags, as defined in ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc3282",children:"RFC3282"}),", in the Content-Language header field of the part, if present."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"location"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsxs)(r.td,{children:["URI, as defined in ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc2557",children:"RFC2557"}),", in the Content-Location header field of the part, if present."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"subParts"}),(0,d.jsx)(r.td,{children:"Uma cole\xe7\xe3o de objetos"}),(0,d.jsxs)(r.td,{children:["Partes do corpo de cada filho (cole\xe7\xe3o de objetos ",(0,d.jsx)(r.em,{children:"EmailBodyPart"}),")"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"headers"}),(0,d.jsx)(r.td,{children:"Uma cole\xe7\xe3o de objetos"}),(0,d.jsxs)(r.td,{children:["Lista de todos os campos de cabe\xe7alho da parte, na ordem em que eles aparecem na mensagem (cole\xe7\xe3o de objetos ",(0,d.jsx)(r.em,{children:"EmailHeader"}),", ver propriedade ",(0,d.jsx)(r.a,{href:"#headers",children:"headers"}),")"]})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"bodyvalues",children:".bodyValues"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".bodyValues"})," : Object"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".bodyValues"})," cont\xe9m o objeto ",(0,d.jsx)(r.em,{children:"EmailBodyValue"}),", que cont\xe9m um objeto para cada <partID> de ",(0,d.jsx)(r.code,{children:"bodyStructure"})," (opcional). Consulte a se\xe7\xe3o ",(0,d.jsx)(r.a,{href:"#handling-body-part",children:"Gerenciamento do corpo"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["O objeto ",(0,d.jsx)(r.code,{children:".bodyValues"})," cont\xe9m as seguintes propriedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Propriedade"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{children:"Valor"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.em,{children:"partID"}),".value"]}),(0,d.jsx)(r.td,{children:"text"}),(0,d.jsx)(r.td,{children:"Valor da parte do corpo"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.em,{children:"partID"}),".isEncodingProblem"]}),(0,d.jsx)(r.td,{children:"boolean"}),(0,d.jsx)(r.td,{children:"Verdadeiro se se\xe7\xf5es malformadas forem encontradas durante a decodifica\xe7\xe3o do conjunto de charset, ou charset desconhecido, ou codifica\xe7\xe3o de conte\xfado desconhecido. Padr\xe3o \xe9 falso"})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"cc",children:".cc"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".cc"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".cc"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".cc"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".cc"})," cont\xe9m os ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7o(s)"})," e-mail adicionais em C\xf3pia de Carbon (CC) do e-mail."]}),"\n",(0,d.jsx)(r.h2,{id:"comments",children:".comments"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".comments"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".comments"})," cont\xe9m um  cabe\xe7alho de coment\xe1rios adicional."]}),"\n",(0,d.jsx)(r.p,{children:"Os coment\xe1rios s\xf3 aparecem na se\xe7\xe3o de cabe\xe7alho da mensagem (mantendo o corpo da mensagem intocado)."}),"\n",(0,d.jsxs)(r.p,{children:["Para requisitos espec\xedficos de formata\xe7\xe3o, consulte a ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"from",children:".from"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".from"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".from"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".from"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".from"})," cont\xe9m o ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"a(s) endere\xe7o(es)"})," de origem do e-mail."]}),"\n",(0,d.jsxs)(r.p,{children:["Cada e-mail que voc\xea envia tem os endere\xe7os ",(0,d.jsx)(r.a,{href:"#sender",children:"sender"})," e ",(0,d.jsx)(r.strong,{children:"from"}),":"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"o dom\xednio do remetente \xe9 o que o servidor de e-mail de recebimento recebe ao abrir a sess\xe3o,"}),"\n",(0,d.jsx)(r.li,{children:"o endere\xe7o a partir \xe9 o que o(s) destinat\xe1rio(s) ver\xe1(s)."}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Para uma melhor capacidade de entrega, \xe9 recomendado usar o mesmo endere\xe7o de e para o remetente."}),"\n",(0,d.jsx)(r.h2,{id:"headers",children:".headers"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".headers"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-7",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".headers"})," cont\xe9m uma cole\xe7\xe3o de objetos ",(0,d.jsx)(r.code,{children:"EmailHeader"}),', na ordem em que aparecem na mensagem. Esta propriedade permite que usu\xe1rios adicionem cabe\xe7alhos estendidos (registrados) ou definidos pelo usu\xe1rio (n\xe3o registrados, come\xe7ando com cabe\xe7alhos "X").']}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:["If an ",(0,d.jsx)(r.code,{children:"EmailHeader"}),' object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the ',(0,d.jsx)(r.code,{children:"EmailHeader"})," property is ignored."]}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Cada objeto da cole\xe7\xe3o de cabe\xe7alhos pode conter as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Propriedade"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{children:"Valor"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"[].name"}),(0,d.jsx)(r.td,{children:"text"}),(0,d.jsxs)(r.td,{children:["(obrigat\xf3rio) Nome do campo cabe\xe7alho, conforme definido na ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),". Caso seja nulo ou indefinido, o campo cabe\xe7alho n\xe3o ser\xe1 adicionado ao cabe\xe7alho MIME."]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"[].value"}),(0,d.jsx)(r.td,{children:"text"}),(0,d.jsxs)(r.td,{children:["Valores do campo de cabe\xe7alho conforme definido em ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"})]})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"htmlbody",children:".htmlBody"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".htmlBody"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-8",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".htmlBody"})," cont\xe9m a representa\xe7\xe3o HTML da mensagem de e-mail (o conjunto de caracteres padr\xe3o \xe9 UTF-8) (opcional, somente SMTP). Consulte a se\xe7\xe3o ",(0,d.jsx)(r.a,{href:"#handling-body-part",children:"Gerenciamento do corpo"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"id",children:".id"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".id"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-9",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/API/IMAPTransporterClass",children:"IMAP transporter"})," unicamente."]}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".id"})," cont\xe9m o  ID exclusivo do servidor IMAP."]}),"\n",(0,d.jsx)(r.h2,{id:"inreplyto",children:".inReplyTo"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".inReplyTo"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-10",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".inReplyTo"})," cont\xe9m o(s) identificador(es) de mensagem da(s) mensagem(ns) original(is) \xe0(s) qual(is) a mensagem atual \xe9 uma resposta."]}),"\n",(0,d.jsxs)(r.p,{children:["Para requisitos espec\xedficos de formata\xe7\xe3o, consulte a ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"keywords",children:".keywords"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".keywords"})," : Object"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-11",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".keywords"})," cont\xe9m um conjunto de palavras-chave como um objeto, em que cada nome de propriedade \xe9 uma palavra-chave e cada valor \xe9 true."]}),"\n",(0,d.jsxs)(r.p,{children:['Essa propriedade \xe9 o cabe\xe7alho "keywords" (consulte ',(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc4021",children:"RFC#4021"}),")."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Propriedade"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{children:"Valor"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:".<keyword>"}),(0,d.jsx)(r.td,{children:"boolean"}),(0,d.jsx)(r.td,{children:"Palavra-chave a definir (valor deve ser verdadeiro)"})]})})]}),"\n",(0,d.jsx)(r.p,{children:"Palavra-chave reservada."}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"$draft - Indica que uma mensagem \xe9 um rascunho"}),"\n",(0,d.jsx)(r.li,{children:"$seen - Indica uma mensagem que foi lida"}),"\n",(0,d.jsx)(r.li,{children:"$flagged - Indica uma mensagem que requer aten\xe7\xe3o especial (por exemplo, Urgent)"}),"\n",(0,d.jsx)(r.li,{children:"$answered - Indica uma mensagem que foi respondida"}),"\n",(0,d.jsx)(r.li,{children:"$deleted - Indica uma mensagem para deletar"}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{children:' $mail.keywords["$flagged"]:=True\n $mail.keywords["4d"]:=True\n'})}),"\n",(0,d.jsx)(r.h2,{id:"messageid",children:".messageId"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".messageId"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-12",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".messageId"}),' cont\xe9m um cabe\xe7alho de identificador de mensagem ("message-id").']}),"\n",(0,d.jsxs)(r.p,{children:['Este cabe\xe7alho geralmente \xe9 "lettersOrNumbers@domainname", por exemplo, "',(0,d.jsx)(r.a,{href:"mailto:abcdef.123456@4d.com",children:"abcdef.123456@4d.com"}),'". Este ID exclusivo \xe9 usado em particular em f\xf3runs ou listas p\xfablicas de e-mail. Em geral, os servidores de email adicionam automaticamente este cabe\xe7alho \xe0s mensagens que enviam.']}),"\n",(0,d.jsx)(r.h2,{id:"receivedat",children:".receivedAt"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".receivedAt"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-13",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/API/IMAPTransporterClass",children:"IMAP transporter"})," unicamente."]}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".receivedAt"})," cont\xe9m o carimbo de data/hora da chegada do e-mail no servidor IMAP no formato ISO 8601 UTC (por exemplo: 2020-09-13T16:11:53Z)."]}),"\n",(0,d.jsx)(r.h2,{id:"references",children:".references"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".references"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-14",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".references"})," cont\xe9m a cole\xe7\xe3o de todos os IDs de mensagens na cadeia de resposta anterior."]}),"\n",(0,d.jsxs)(r.p,{children:["Para requisitos espec\xedficos de formata\xe7\xe3o, consulte a ",(0,d.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"replyto",children:".replyTo"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".replyTo"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".replyTo"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".replyTo"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-15",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".replyTo"})," cont\xe9m os ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7os"})," para respostas."]}),"\n",(0,d.jsx)(r.h2,{id:"sendat",children:".sendAt"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".sendAt"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-16",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".sendAt"})," cont\xe9m o  Carimbo de e-mail no formato UTC ISO 8601."]}),"\n",(0,d.jsx)(r.h2,{id:"sender",children:".sender"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".sender"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".sender"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".sender"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-17",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".sender"})," cont\xe9m os  ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7os"})," fonte do e-mail."]}),"\n",(0,d.jsxs)(r.p,{children:["Cada e-mail que voc\xea envia tem os endere\xe7os ",(0,d.jsx)(r.strong,{children:"sender"})," e ",(0,d.jsx)(r.strong,{children:(0,d.jsx)(r.a,{href:"#from",children:"from"})}),":"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"o dom\xednio do remetente \xe9 o que o servidor de e-mail de recebimento recebe ao abrir a sess\xe3o,"}),"\n",(0,d.jsx)(r.li,{children:"o endere\xe7o a partir \xe9 o que o(s) destinat\xe1rio(s) ver\xe1(s)."}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Para uma melhor capacidade de entrega, \xe9 recomendado usar o mesmo endere\xe7o de e para o remetente."}),"\n",(0,d.jsx)(r.h2,{id:"size",children:".size"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".size"})," : Integer"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-18",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/API/IMAPTransporterClass",children:"IMAP transporter"})," unicamente."]}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".size"})," cont\xe9m o tamanho (expresso em bytes) do objeto Email retornado pelo servidor IMAP."]}),"\n",(0,d.jsx)(r.h2,{id:"subject",children:".subject"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".subject"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-19",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".subject"})," cont\xe9m a descri\xe7\xe3o do t\xf3pico."]}),"\n",(0,d.jsx)(r.h2,{id:"textbody",children:".textBody"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".textBody"})," : Text"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-20",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".textBody"})," cont\xe9m a representa\xe7\xe3o em texto simples da mensagem de e-mail (conjunto de caracteres padr\xe3o \xe9 UTF-8) (opcional, somente SMTP). Consulte a se\xe7\xe3o ",(0,d.jsx)(r.a,{href:"#handling-body-part",children:"Gerenciamento do corpo"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"to",children:".to"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:".to"})," : Text",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".to"})," : Object",(0,d.jsx)(r.br,{}),(0,d.jsx)(r.strong,{children:".to"})," : Collection"]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o-21",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["A propriedade ",(0,d.jsx)(r.code,{children:".to"})," cont\xe9m  os ",(0,d.jsx)(r.a,{href:"#email-addresses",children:"endere\xe7os"})," dos destinat\xe1rios prim\xe1rios de e-mail."]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return i}});var n=s(667294);let d={},o=n.createContext(d);function i(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);