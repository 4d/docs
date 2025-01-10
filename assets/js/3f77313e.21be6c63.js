"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22488"],{102947:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"API/EmailObjectClass","title":"Email","description":"Creating, sending or receiving emails in 4D is done by handling an Email object.","source":"@site/versioned_docs/version-20-R7/API/EmailObjectClass.md","sourceDirName":"API","slug":"/API/EmailObjectClass","permalink":"/docs/API/EmailObjectClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FEmailObjectClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"EmailObjectClass","title":"Email"},"sidebar":"docs","previous":{"title":"DataStore","permalink":"/docs/API/DataStoreClass"},"next":{"title":"Entity","permalink":"/docs/API/EntityClass"}}'),i=s("785893"),t=s("250065");let d={id:"EmailObjectClass",title:"Email"},l=void 0,c={},o=[{value:"Email Object",id:"email-object",level:3},{value:"Email Addresses",id:"email-addresses",level:3},{value:"Text",id:"text",level:4},{value:"Object",id:"object",level:4},{value:"Collection",id:"collection",level:4},{value:"Handling body part",id:"handling-body-part",level:3},{value:"Example of bodyStructure and bodyValues objects",id:"example-of-bodystructure-and-bodyvalues-objects",level:4},{value:".attachments",id:"attachments",level:2},{value:"Description",id:"description",level:4},{value:".bcc",id:"bcc",level:2},{value:"Description",id:"description-1",level:4},{value:".bodyStructure",id:"bodystructure",level:2},{value:"Description",id:"description-2",level:4},{value:".bodyValues",id:"bodyvalues",level:2},{value:"Description",id:"description-3",level:4},{value:".cc",id:"cc",level:2},{value:"Description",id:"description-4",level:4},{value:".comments",id:"comments",level:2},{value:"Description",id:"description-5",level:4},{value:".from",id:"from",level:2},{value:"Description",id:"description-6",level:4},{value:".headers",id:"headers",level:2},{value:"Description",id:"description-7",level:4},{value:".htmlBody",id:"htmlbody",level:2},{value:"Description",id:"description-8",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-9",level:4},{value:".inReplyTo",id:"inreplyto",level:2},{value:"Description",id:"description-10",level:4},{value:".keywords",id:"keywords",level:2},{value:"Description",id:"description-11",level:4},{value:"Example",id:"example",level:4},{value:".messageId",id:"messageid",level:2},{value:"Description",id:"description-12",level:4},{value:".receivedAt",id:"receivedat",level:2},{value:"Description",id:"description-13",level:4},{value:".references",id:"references",level:2},{value:"Description",id:"description-14",level:4},{value:".replyTo",id:"replyto",level:2},{value:"Description",id:"description-15",level:4},{value:".sendAt",id:"sendat",level:2},{value:"Description",id:"description-16",level:4},{value:".sender",id:"sender",level:2},{value:"Description",id:"description-17",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-18",level:4},{value:".subject",id:"subject",level:2},{value:"Description",id:"description-19",level:4},{value:".textBody",id:"textbody",level:2},{value:"Description",id:"description-20",level:4},{value:".to",id:"to",level:2},{value:"Description",id:"description-21",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Creating, sending or receiving emails in 4D is done by handling an ",(0,i.jsx)(n.code,{children:"Email"})," object."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Email"})," objects are created when receiving mails through a ",(0,i.jsx)(n.em,{children:"transporter"})," class function:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["IMAP - ",(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#getmail",children:(0,i.jsx)(n.code,{children:".getMail()"})})," and ",(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#getmails",children:(0,i.jsx)(n.code,{children:".getMails()"})})," functions to get emails from an IMAP server"]}),"\n",(0,i.jsxs)(n.li,{children:["POP3 - ",(0,i.jsx)(n.a,{href:"/docs/API/POP3TransporterClass#getmail",children:(0,i.jsx)(n.code,{children:".getMail()"})})," function to get an email from a POP3 server."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You can also create a new, blank ",(0,i.jsx)(n.code,{children:"Email"})," object and then fill it with ",(0,i.jsx)(n.a,{href:"#email-object",children:"Email object properties"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You send ",(0,i.jsx)(n.code,{children:"Email"})," objects using the SMTP ",(0,i.jsx)(n.a,{href:"/docs/API/SMTPTransporterClass#send",children:(0,i.jsx)(n.code,{children:".send()"})})," function."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/mail-convert-from-mime",children:(0,i.jsx)(n.code,{children:"MAIL Convert from MIME"})})," and ",(0,i.jsx)(n.a,{href:"/docs/commands/mail-convert-to-mime",children:(0,i.jsx)(n.code,{children:"MAIL Convert to MIME"})})," commands can be used to convert ",(0,i.jsx)(n.code,{children:"Email"})," objects to and from MIME contents."]}),"\n",(0,i.jsx)(n.h3,{id:"email-object",children:"Email Object"}),"\n",(0,i.jsx)(n.p,{children:"Email objects provide the following properties:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["4D follows the ",(0,i.jsx)(n.a,{href:"https://jmap.io/spec-mail.html",children:"JMAP specification"})," to format the Email object."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#attachments",children:[(0,i.jsx)(n.strong,{children:".attachments"})," : Collection"]}),(0,i.jsx)(n.br,{}),"collection of ",(0,i.jsx)(n.code,{children:"4D.MailAttachment"})," object(s)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#bcc",children:[(0,i.jsx)(n.strong,{children:".bcc"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".bcc"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".bcc"})," : Collection"]}),(0,i.jsx)(n.br,{}),"Blind Carbon Copy (BCC) hidden email recipient ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#bodystructure",children:[(0,i.jsx)(n.strong,{children:".bodyStructure"})," : Object"]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"EmailBodyPart"})," object, i.e. the full MIME structure of the message body (optional)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#bodyvalues",children:[(0,i.jsx)(n.strong,{children:".bodyValues"})," : Object"]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"EmailBodyValue"})," object, containing an object for each <partID> of ",(0,i.jsx)(n.code,{children:"bodyStructure"})," (optional)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#cc",children:[(0,i.jsx)(n.strong,{children:".cc"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".cc"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".cc"})," : Collection"]}),(0,i.jsx)(n.br,{}),"Carbon Copy (CC) additional email recipient ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#comments",children:[(0,i.jsx)(n.strong,{children:".comments"})," : Text"]}),(0,i.jsx)(n.br,{}),"additional comments header"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#from",children:[(0,i.jsx)(n.strong,{children:".from"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".from"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".from"})," : Collection"]}),(0,i.jsx)(n.br,{}),"Originating ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"address(es)"})," of the email"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#headers",children:[(0,i.jsx)(n.strong,{children:".headers"})," : Collection"]}),(0,i.jsx)(n.br,{}),"collection of ",(0,i.jsx)(n.code,{children:"EmailHeader"})," objects, in the order they appear in the message"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#htmlbody",children:[(0,i.jsx)(n.strong,{children:".htmlBody"})," : Text"]}),(0,i.jsx)(n.br,{}),"HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#id",children:[(0,i.jsx)(n.strong,{children:".id"})," : Text"]}),(0,i.jsx)(n.br,{}),"unique ID from the IMAP server"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#inreplyto",children:[(0,i.jsx)(n.strong,{children:".inReplyTo"})," : Text"]}),(0,i.jsx)(n.br,{}),"message identifier(s) of the original message(s) to which the current message is a reply"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#keywords",children:[(0,i.jsx)(n.strong,{children:".keywords"})," : Object"]}),(0,i.jsx)(n.br,{}),"set of keywords as an object, where each property name is a keyword and each value is true"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#messageid",children:[(0,i.jsx)(n.strong,{children:".messageId"})," : Text"]}),(0,i.jsx)(n.br,{}),'message identifier header ("message-id")']})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#receivedat",children:[(0,i.jsx)(n.strong,{children:".receivedAt"})," : Text"]}),(0,i.jsx)(n.br,{}),"timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#references",children:[(0,i.jsx)(n.strong,{children:".references"})," : Collection"]}),(0,i.jsx)(n.br,{}),"Collection of all message-ids of messages in the preceding reply chain"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#replyto",children:[(0,i.jsx)(n.strong,{children:".replyTo"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".replyTo"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".replyTo"})," : Collection"]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," for responses"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#sendat",children:[(0,i.jsx)(n.strong,{children:".sendAt"})," : Text"]}),(0,i.jsx)(n.br,{}),"Email timestamp in ISO 8601 UTC format"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#sender",children:[(0,i.jsx)(n.strong,{children:".sender"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".sender"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".sender"})," : Collection"]}),(0,i.jsx)(n.br,{}),"email source ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#size",children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,i.jsx)(n.br,{}),"size (expressed in bytes) of the Email object returned by the IMAP server"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#subject",children:[(0,i.jsx)(n.strong,{children:".subject"})," : Text"]}),(0,i.jsx)(n.br,{}),"description of topic"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#textbody",children:[(0,i.jsx)(n.strong,{children:".textBody"})," : Text"]}),(0,i.jsx)(n.br,{}),"Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#to",children:[(0,i.jsx)(n.strong,{children:".to"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".to"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".to"})," : Collection"]}),(0,i.jsx)(n.br,{}),"primary recipient ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email"]})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"email-addresses",children:"Email Addresses"}),"\n",(0,i.jsxs)(n.p,{children:["All properties that contain email addresses (",(0,i.jsx)(n.a,{href:"#from",children:(0,i.jsx)(n.code,{children:"from"})}),", ",(0,i.jsx)(n.a,{href:"#cc",children:(0,i.jsx)(n.code,{children:"cc"})}),", ",(0,i.jsx)(n.a,{href:"#bcc",children:(0,i.jsx)(n.code,{children:"bcc"})}),", ",(0,i.jsx)(n.a,{href:"#to",children:(0,i.jsx)(n.code,{children:"to"})}),", ",(0,i.jsx)(n.a,{href:"#sender",children:(0,i.jsx)(n.code,{children:"sender"})}),", ",(0,i.jsx)(n.a,{href:"#replyto",children:(0,i.jsx)(n.code,{children:"replyTo"})}),") accept a value of text, object, or collection type."]}),"\n",(0,i.jsx)(n.h4,{id:"text",children:"Text"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['single email: "',(0,i.jsx)(n.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,i.jsxs)(n.li,{children:['single display name+email: "Somebody ',(0,i.jsx)(n.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),'"']}),"\n",(0,i.jsxs)(n.li,{children:['several emails: "Somebody ',(0,i.jsx)(n.a,{href:"mailto:somebody@domain.com",children:"somebody@domain.com"}),",",(0,i.jsx)(n.a,{href:"mailto:me@home.org",children:"me@home.org"}),'"']}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"object",children:"Object"}),"\n",(0,i.jsx)(n.p,{children:"An object with two properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Display name (can be null)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Email address"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"collection",children:"Collection"}),"\n",(0,i.jsx)(n.p,{children:"A collection of address objects."}),"\n",(0,i.jsx)(n.h3,{id:"handling-body-part",children:"Handling body part"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"#textbody",children:(0,i.jsx)(n.code,{children:"textBody"})})," and ",(0,i.jsx)(n.a,{href:"#htmlbody",children:(0,i.jsx)(n.code,{children:"htmlBody"})})," properties are only used with the ",(0,i.jsx)(n.a,{href:"/docs/API/SMTPTransporterClass#send",children:"SMTP.send()"})," function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the text part or html part as necessary."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#bodystructure",children:(0,i.jsx)(n.code,{children:"bodyStructure"})})," and ",(0,i.jsx)(n.a,{href:"#bodyvalues",children:(0,i.jsx)(n.code,{children:"bodyValues"})})," are used for ",(0,i.jsx)(n.a,{href:"/docs/API/SMTPTransporterClass",children:"SMTP"})," when the ",(0,i.jsx)(n.a,{href:"#email-object",children:"Email object"})," is built from a MIME document, e.g. when generated by the ",(0,i.jsx)(n.code,{children:"MAIL Convert from MIME"})," command. In this case, both ",(0,i.jsx)(n.code,{children:"bodyStructure"})," and ",(0,i.jsx)(n.code,{children:"bodyValues"})," properties must be passed together, and it is not recommended to use ",(0,i.jsx)(n.code,{children:"textBody"})," and ",(0,i.jsx)(n.code,{children:"htmlBody"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example-of-bodystructure-and-bodyvalues-objects",children:"Example of bodyStructure and bodyValues objects"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"bodyStructure": {\n  "type": "multipart/mixed",\n  "subParts": [\n    {\n      "partId": "p0001",\n      "type": "text/plain"\n    },\n    {\n      "partId": "p0002",\n      "type": "text/html"\n    }\n  ]\n},\n"bodyValues": {\n  "p0001": {\n    "value": "I have the most brilliant plan. Let me tell you all about it."\n  },\n  "p0002": {\n    "value": "<!DOCTYPE html><html><head><title></title><style type=\\"text/css\\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"attachments",children:".attachments"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".attachments"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".attachments"})," property contains a collection of ",(0,i.jsx)(n.code,{children:"4D.MailAttachment"})," object(s)."]}),"\n",(0,i.jsxs)(n.p,{children:["Attachment objects are defined through the ",(0,i.jsx)(n.a,{href:"/docs/API/MailAttachmentClass#mail-new-attachment",children:(0,i.jsx)(n.code,{children:"MAIL New attachment"})})," command. Attachment objects have specific ",(0,i.jsx)(n.a,{href:"/docs/API/MailAttachmentClass",children:"properties and functions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"bcc",children:".bcc"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".bcc"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".bcc"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".bcc"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".bcc"})," property contains the Blind Carbon Copy (BCC) hidden email recipient ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]}),"\n",(0,i.jsx)(n.h2,{id:"bodystructure",children:".bodyStructure"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".bodyStructure"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".bodyStructure"})," property contains the ",(0,i.jsx)(n.em,{children:"EmailBodyPart"})," object, i.e. the full MIME structure of the message body (optional). See ",(0,i.jsx)(n.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".bodyStructure"})," object contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"partID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Identifies the part uniquely within the email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"(mandatory) Value of the Content-Type header field of the part"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"charset"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Value of the charset parameter of the Content-Type header field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encoding"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["If ",(0,i.jsx)(n.code,{children:"isEncodingProblem=true"}),", the Content-Transfer-Encoding value is added (by default undefined)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disposition"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Value of the Content-Disposition header field of the part"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"language"}),(0,i.jsx)(n.td,{children:"Collection of texts"}),(0,i.jsxs)(n.td,{children:["List of language tags, as defined in ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3282",children:"RFC3282"}),", in the Content-Language header field of the part, if present."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"location"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["URI, as defined in ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc2557",children:"RFC2557"}),", in the Content-Location header field of the part, if present."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subParts"}),(0,i.jsx)(n.td,{children:"Collection of objects"}),(0,i.jsxs)(n.td,{children:["Body parts of each child (collection of ",(0,i.jsx)(n.em,{children:"EmailBodyPart"})," objects)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"headers"}),(0,i.jsx)(n.td,{children:"Collection of objects"}),(0,i.jsxs)(n.td,{children:["List of all header fields in the part, in the order they appear in the message (collection of ",(0,i.jsx)(n.em,{children:"EmailHeader"})," objects, see ",(0,i.jsx)(n.a,{href:"#headers-",children:"headers"})," property)"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"bodyvalues",children:".bodyValues"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".bodyValues"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".bodyValues"})," property contains the ",(0,i.jsx)(n.em,{children:"EmailBodyValue"})," object, containing an object for each <partID> of ",(0,i.jsx)(n.code,{children:"bodyStructure"})," (optional). See ",(0,i.jsx)(n.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".bodyValues"})," object contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"partID"}),".value"]}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Value of the body part"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"partID"}),".isEncodingProblem"]}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"cc",children:".cc"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".cc"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".cc"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".cc"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".cc"})," property contains the Carbon Copy (CC) additional email recipient ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]}),"\n",(0,i.jsx)(n.h2,{id:"comments",children:".comments"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".comments"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".comments"})," property contains an additional comments header."]}),"\n",(0,i.jsx)(n.p,{children:"Comments only appear within the header section of the message (keeping the message's body untouched)."}),"\n",(0,i.jsxs)(n.p,{children:["For specific formatting requirements, please consult the ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"from",children:".from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".from"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".from"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".from"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".from"})," property contains the Originating ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"address(es)"})," of the email."]}),"\n",(0,i.jsxs)(n.p,{children:["Each email you send out has both the ",(0,i.jsx)(n.a,{href:"#sender",children:"sender"})," and ",(0,i.jsx)(n.strong,{children:"from"})," addresses:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the sender domain is what the receiving email server gets when opening the session,"}),"\n",(0,i.jsx)(n.li,{children:"the from address is what the recipient(s) will see."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For better deliverability, it is recommended to use the same from and sender addresses."}),"\n",(0,i.jsx)(n.h2,{id:"headers",children:".headers"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".headers"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".headers"})," property contains a collection of ",(0,i.jsx)(n.code,{children:"EmailHeader"}),' objects, in the order they appear in the message. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If an ",(0,i.jsx)(n.code,{children:"EmailHeader"}),' object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the ',(0,i.jsx)(n.code,{children:"EmailHeader"})," property is ignored."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Every object of the headers collection can contain the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"[].name"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["(mandatory) Header field name as defined in ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),". If null or undefined, the header field is not added to the MIME header."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"[].value"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["Header field values as defined in ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"htmlbody",children:".htmlBody"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".htmlBody"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".htmlBody"})," property contains the HTML representation of the email message (default charset is UTF-8) (optional, SMTP only). See ",(0,i.jsx)(n.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".id"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass",children:"IMAP transporter"})," only."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".id"})," property contains the unique ID from the IMAP server."]}),"\n",(0,i.jsx)(n.h2,{id:"inreplyto",children:".inReplyTo"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".inReplyTo"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-10",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".inReplyTo"})," property contains the message identifier(s) of the original message(s) to which the current message is a reply."]}),"\n",(0,i.jsxs)(n.p,{children:["For specific formatting requirements, please consult the ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:".keywords"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".keywords"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"description-11",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".keywords"})," property contains a set of keywords as an object, where each property name is a keyword and each value is true."]}),"\n",(0,i.jsxs)(n.p,{children:['This property is the "keywords" header (see ',(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc4021",children:"RFC#4021"}),")."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:".<keyword>"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"Keyword to set (value must be true)"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"Reserved keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"$draft - Indicates a message is a draft"}),"\n",(0,i.jsx)(n.li,{children:"$seen - Indicates a message has been read"}),"\n",(0,i.jsx)(n.li,{children:"$flagged - Indicates a message needs special attention (e.g., Urgent)"}),"\n",(0,i.jsx)(n.li,{children:"$answered - Indicates a message has been replied to"}),"\n",(0,i.jsx)(n.li,{children:"$deleted - Indicates a message to delete"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:' $mail.keywords["$flagged"]:=True\n $mail.keywords["4d"]:=True\n'})}),"\n",(0,i.jsx)(n.h2,{id:"messageid",children:".messageId"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".messageId"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-12",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".messageId"}),' property contains a message identifier header ("message-id").']}),"\n",(0,i.jsxs)(n.p,{children:['This header is usually "lettersOrNumbers@domainname", e.g. "',(0,i.jsx)(n.a,{href:"mailto:abcdef.123456@4d.com",children:"abcdef.123456@4d.com"}),'". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.']}),"\n",(0,i.jsx)(n.h2,{id:"receivedat",children:".receivedAt"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".receivedAt"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-13",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass",children:"IMAP transporter"})," only."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".receivedAt"})," property contains the timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)."]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:".references"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".references"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-14",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".references"})," property contains the Collection of all message-ids of messages in the preceding reply chain."]}),"\n",(0,i.jsxs)(n.p,{children:["For specific formatting requirements, please consult the ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5322",children:"RFC#5322"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"replyto",children:".replyTo"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".replyTo"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".replyTo"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".replyTo"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-15",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".replyTo"})," property contains the ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," for responses."]}),"\n",(0,i.jsx)(n.h2,{id:"sendat",children:".sendAt"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".sendAt"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-16",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".sendAt"})," property contains the Email timestamp in ISO 8601 UTC format."]}),"\n",(0,i.jsx)(n.h2,{id:"sender",children:".sender"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".sender"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".sender"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".sender"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-17",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".sender"})," property contains the email source ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]}),"\n",(0,i.jsxs)(n.p,{children:["Each email you send out has both the ",(0,i.jsx)(n.strong,{children:"sender"})," and ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#from",children:"from"})})," addresses:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the sender domain is what the receiving email server gets when opening the session,"}),"\n",(0,i.jsx)(n.li,{children:"the from address is what the recipient(s) will see."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For better deliverability, it is recommended to use the same from and sender addresses."}),"\n",(0,i.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"description-18",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass",children:"IMAP transporter"})," only."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".size"})," property contains the size (expressed in bytes) of the Email object returned by the IMAP server."]}),"\n",(0,i.jsx)(n.h2,{id:"subject",children:".subject"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".subject"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-19",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".subject"})," property contains the description of topic."]}),"\n",(0,i.jsx)(n.h2,{id:"textbody",children:".textBody"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".textBody"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description-20",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".textBody"})," property contains the Plain text representation of the email message (default charset is UTF-8) (optional, SMTP only). See ",(0,i.jsx)(n.a,{href:"#handling-body-part",children:"Handling body part"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"to",children:".to"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".to"})," : Text",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".to"})," : Object",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".to"})," : Collection"]}),"\n",(0,i.jsx)(n.h4,{id:"description-21",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".to"})," property contains the primary recipient ",(0,i.jsx)(n.a,{href:"#email-addresses",children:"addresse(s)"})," of the email."]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);