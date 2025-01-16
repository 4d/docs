"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22128"],{605046:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"API/SMTPTransporterClass","title":"SMTPTransporter","description":"The SMTPTransporter class allows you to configure SMTP connections and send emails through SMTP transporter objects.","source":"@site/versioned_docs/version-20-R8/API/SMTPTransporterClass.md","sourceDirName":"API","slug":"/API/SMTPTransporterClass","permalink":"/docs/API/SMTPTransporterClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSMTPTransporterClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"SMTPTransporterClass","title":"SMTPTransporter"},"sidebar":"docs","previous":{"title":"Signal","permalink":"/docs/API/SignalClass"},"next":{"title":"SystemWorker","permalink":"/docs/API/SystemWorkerClass"}}'),t=s("785893"),i=s("250065");let d={id:"SMTPTransporterClass",title:"SMTPTransporter"},c=void 0,l={},h=[{value:"SMTP Transporter object",id:"smtp-transporter-object",level:3},{value:"4D.SMTPTransporter.new()",id:"4dsmtptransporternew",level:2},{value:"Description",id:"description",level:4},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Description",id:"description-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Description",id:"description-2",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Description",id:"description-3",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Description",id:"description-4",level:4},{value:"Returned object",id:"returned-object",level:4},{value:"Example",id:"example",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Description",id:"description-5",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Description",id:"description-6",level:4},{value:".host",id:"host",level:2},{value:"Description",id:"description-7",level:4},{value:".keepAlive",id:"keepalive",level:2},{value:"Description",id:"description-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Description",id:"description-9",level:4},{value:".port",id:"port",level:2},{value:"Description",id:"description-10",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-11",level:4},{value:"Returned object",id:"returned-object-1",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Description",id:"description-12",level:4},{value:".user",id:"user",level:2},{value:"Description",id:"description-13",level:4}];function o(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SMTPTransporter"})," class allows you to configure SMTP connections and send emails through ",(0,t.jsx)(n.em,{children:"SMTP transporter"})," objects."]}),"\n",(0,t.jsx)(n.h3,{id:"smtp-transporter-object",children:"SMTP Transporter object"}),"\n",(0,t.jsxs)(n.p,{children:["SMTP Transporter objects are instantiated with the ",(0,t.jsx)(n.a,{href:"/docs/commands/smtp-new-transporter",children:(0,t.jsx)(n.code,{children:"SMTP New transporter"})})," command. They provide the following properties and functions:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#acceptunsecureconnection",children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#authenticationmode",children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(n.br,{}),"the authentication mode used to open the session on the mail server"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#bodycharset",children:[(0,t.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),(0,t.jsx)(n.br,{}),"  the charset and encoding used for the body part of the email"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#checkconnection",children:[(0,t.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),(0,t.jsx)(n.br,{})," checks the connection using information stored in the transporter object"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#connectiontimeout",children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the maximum wait time (in seconds) allowed to establish a connection to the server"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#headercharset",children:[(0,t.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),(0,t.jsx)(n.br,{})," the charset and encoding used for the email header"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#host",children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),(0,t.jsx)(n.br,{}),"the name or the IP address of the host server"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#keepalive",children:[(0,t.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," if the SMTP connection must be kept alive until the ",(0,t.jsx)(n.code,{children:"transporter"})," object is destroyed"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#logfile",children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(n.br,{}),"the path of the extended log file defined (if any) for the mail connection"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#port",children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(n.br,{})," the port number used for mail transactions"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#send",children:[(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"mail"})," : Object ) : Object"]}),(0,t.jsx)(n.br,{}),"sends the ",(0,t.jsxs)(n.a,{href:"/docs/API/EmailObjectClass#email-object",children:[(0,t.jsx)(n.em,{children:"mail"})," object"]})," to the SMTP server defined in the ",(0,t.jsx)(n.code,{children:"transporter"})," object and returns a status object"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#sendtimeout",children:[(0,t.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{})," the maximum wait time (in seconds) of a call to ",(0,t.jsx)(n.code,{children:".send( )"})," before a timeout occurs"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#user",children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),(0,t.jsx)(n.br,{})," the user name used for authentication on the mail server"]})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"4dsmtptransporternew",children:"4D.SMTPTransporter.new()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D.SMTPTransporter.new"}),"( ",(0,t.jsx)(n.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Mail server information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.SMTPTransporter"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#smtp-transporter-object",children:"SMTP transporter object"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"4D.SMTPTransporter.new()"})," function creates and returns a new object of the ",(0,t.jsx)(n.code,{children:"4D.SMTPTransporter"})," type. It is identical to the ",(0,t.jsx)(n.a,{href:"/docs/commands/smtp-new-transporter",children:(0,t.jsx)(n.code,{children:"SMTP New transporter"})})," command (shortcut)."]}),"\n",(0,t.jsx)(n.h2,{id:"acceptunsecureconnection",children:".acceptUnsecureConnection"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".acceptUnsecureConnection"})," property contains ",(0,t.jsx)(n.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible."]}),"\n",(0,t.jsxs)(n.p,{children:["It contains ",(0,t.jsx)(n.strong,{children:"False"})," if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible."]}),"\n",(0,t.jsx)(n.p,{children:"Available secured ports are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"SMTP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"465: SMTPS"}),"\n",(0,t.jsx)(n.li,{children:"587 or 25: SMTP with STARTTLS upgrade if supported by the server."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"IMAP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"143: IMAP non-encrypted port"}),"\n",(0,t.jsx)(n.li,{children:"993: IMAP with STARTTLS upgrade if supported by the server"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POP3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"110: POP3 non-encrypted port"}),"\n",(0,t.jsx)(n.li,{children:"995: POP3 with STARTTLS upgrade if supported by the server."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"authenticationmode",children:".authenticationMode"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".authenticationMode"})," property contains the authentication mode used to open the session on the mail server."]}),"\n",(0,t.jsx)(n.p,{children:"By default, the most secured mode supported by the server is used."}),"\n",(0,t.jsx)(n.p,{children:"Possible values are:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Constants"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CRAM-MD5"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SMTP authentication CRAM MD5"})}),(0,t.jsx)(n.td,{children:"Authentication using CRAM-MD5 protocol"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LOGIN"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SMTP authentication login"})}),(0,t.jsx)(n.td,{children:"Authentication using LOGIN protocol"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OAUTH2"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SMTP authentication OAUTH2"})}),(0,t.jsx)(n.td,{children:"Authentication using OAuth2 protocol"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PLAIN"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SMTP authentication plain"})}),(0,t.jsx)(n.td,{children:"Authentication using PLAIN protocol"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"bodycharset",children:".bodyCharset"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"Support for UTF8 base64"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".bodyCharset"})," property contains   the charset and encoding used for the body part of the email."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Possible values:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,t.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"headerCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable"]})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode ISO88591"}),(0,t.jsx)(n.td,{children:"ISO-8859-1"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode UTF8"}),(0,t.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"headerCharset"})," & ",(0,t.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII if possible, otherwise UTF-8 & Quoted-printable (",(0,t.jsx)(n.strong,{children:"default value"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,t.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"headerCharset"})," & ",(0,t.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII if possible, otherwise UTF-8 & base64"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"checkconnection",children:".checkConnection()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"Status of the transporter object connection"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".checkConnection()"})," function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent."]}),"\n",(0,t.jsx)(n.h4,{id:"returned-object",children:"Returned object"}),"\n",(0,t.jsx)(n.p,{children:"The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"True if the check is successful, False otherwise"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"(SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Status message returned by the mail server, or last error returned in the 4D error stack"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"collection"}),(0,t.jsx)(n.td,{children:"4D error stack (not returned if a mail server response is received)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"[ ].errCode"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"4D error code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"[ ].message"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Description of the 4D error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"[ ].componentSignature"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Signature of the internal component which returned the error"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For information about SMTP status codes, please refer to ",(0,t.jsx)(n.a,{href:"https://www.usps.org/info/smtp_status.html",children:"this page"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $pw : Text\n var $options : Object\n var $transporter : 4D.SMTPTransporter\n $options:=New object\n\n $pw:=Request("Please enter your password:")\n $options.host:="smtp.gmail.com"\n\n $options.user:="test@gmail.com"\n $options.password:=$pw\n\n $transporter:=SMTP New transporter($options)\n\n $status:=$transporter.checkConnection()\n If($status.success=True)\n    ALERT("SMTP connection check successful!")\n Else\n    ALERT("Error # "+String($status.status)+", "+$status.statusText)\n End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"connectiontimeout",children:".connectionTimeOut"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,t.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".connectionTimeOut"})," property contains the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with ",(0,t.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,t.jsx)(n.code,{children:"POP3 New transporter"}),", or ",(0,t.jsx)(n.code,{children:"IMAP New transporter"}),"), the value is 30."]}),"\n",(0,t.jsx)(n.h2,{id:"headercharset",children:".headerCharset"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".headerCharset"})," property contains  the charset and encoding used for the email header. The header includes the following parts of the email:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"subject,"}),"\n",(0,t.jsx)(n.li,{children:"attachment filename(s),"}),"\n",(0,t.jsx)(n.li,{children:"email name."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Possible values:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,t.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"headerCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable"]})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode ISO88591"}),(0,t.jsx)(n.td,{children:"ISO-8859-1"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode UTF8"}),(0,t.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"headerCharset"})," & ",(0,t.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,t.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"headerCharset"})," & ",(0,t.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII if possible, otherwise UTF-8 & base64"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"host",children:".host"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".host"})," property contains the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP)."]}),"\n",(0,t.jsx)(n.h2,{id:"keepalive",children:".keepAlive"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),"\n",(0,t.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".keepAlive"})," property contains ",(0,t.jsx)(n.strong,{children:"True"})," if the SMTP connection must be kept alive until the ",(0,t.jsx)(n.code,{children:"transporter"})," object is destroyed, and ",(0,t.jsx)(n.strong,{children:"False"})," otherwise. By default, if the ",(0,t.jsx)(n.code,{children:"keepAlive"})," property has not been set in the ",(0,t.jsx)(n.code,{children:"server"})," object (used to create the ",(0,t.jsx)(n.code,{children:"transporter"})," object with ",(0,t.jsx)(n.code,{children:"SMTP New transporter"}),"), it is ",(0,t.jsx)(n.strong,{children:"True"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The SMTP connection is automatically closed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["when the ",(0,t.jsx)(n.code,{children:"transporter"})," object is destroyed if the ",(0,t.jsx)(n.code,{children:".keepAlive"})," property is true,"]}),"\n",(0,t.jsxs)(n.li,{children:["after each ",(0,t.jsx)(n.code,{children:".send( )"})," function execution if the ",(0,t.jsx)(n.code,{children:".keepAlive"})," property is set to false."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"logfile",children:".logFile"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".logFile"})," property contains the path of the extended log file defined (if any) for the mail connection. It can be relative (to the current Logs folder) or absolute."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike regular log files (enabled via the ",(0,t.jsx)(n.code,{children:"SET DATABASE PARAMETER"})," command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SMTP connections"})," - ",(0,t.jsx)(n.a,{href:"/docs/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POP3 connections"})," - ",(0,t.jsx)(n.a,{href:"/docs/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IMAP connections"})," - ",(0,t.jsx)(n.a,{href:"/docs/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"port",children:".port"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),"\n",(0,t.jsx)(n.h4,{id:"description-10",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".port"})," property contains  the port number used for mail transactions. By default, if the ",(0,t.jsx)(n.em,{children:"port"})," property has not been set in the ",(0,t.jsx)(n.em,{children:"server"})," object (used to create the transporter object with ",(0,t.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,t.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,t.jsx)(n.code,{children:"IMAP New transporter"}),"), the port used is:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SMTP"})," - 587"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"POP3"})," - 995"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"Support of mime contents"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"mail"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mail"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/API/EmailObjectClass#email-object",children:"Email"})," to send"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsx)(n.td,{children:"SMTP status"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description-11",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".send()"})," function sends the ",(0,t.jsxs)(n.a,{href:"/docs/API/EmailObjectClass#email-object",children:[(0,t.jsx)(n.em,{children:"mail"})," object"]})," to the SMTP server defined in the ",(0,t.jsx)(n.code,{children:"transporter"})," object and returns a status object."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"transporter"})," object must have already been created using the ",(0,t.jsx)(n.code,{children:"SMTP New transporter"})," command."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The method creates the SMTP connection if it is not already alive. If the ",(0,t.jsx)(n.code,{children:".keepAlive"})," property of the ",(0,t.jsx)(n.code,{children:"transporter"})," object is ",(0,t.jsx)(n.strong,{children:"false"}),", the SMTP connection is automatically closed after the execution of ",(0,t.jsx)(n.code,{children:".send()"}),", otherwise it stays alive until the ",(0,t.jsx)(n.code,{children:"transporter"})," object is destroyed. For more information, please refer to the ",(0,t.jsx)(n.a,{href:"#smtp-new-transporter",children:(0,t.jsx)(n.code,{children:"SMTP New transporter"})})," command description."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"mail"}),", pass a valid ",(0,t.jsxs)(n.a,{href:"/docs/API/EmailObjectClass#email-object",children:[(0,t.jsx)(n.code,{children:"Email"})," object"]})," to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional."]}),"\n",(0,t.jsx)(n.h4,{id:"returned-object-1",children:"Returned object"}),"\n",(0,t.jsx)(n.p,{children:"The function returns an object describing the SMTP status of the operation. This object can contain the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"True if the send is successful, False otherwise"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Status code returned by the SMTP server (0 in case of an issue unrelated to the mail processing)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Status message returned by the SMTP server"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), 4D generates an error that you can intercept using a method installed by the ",(0,t.jsx)(n.code,{children:"ON ERR CALL"})," command. Use the ",(0,t.jsx)(n.code,{children:"Last errors"})," command for information about the error."]}),"\n",(0,t.jsx)(n.p,{children:"In this case, the resulting status object contains the following values:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statusText"}),(0,t.jsx)(n.td,{children:'"Failed to send email"'})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"sendtimeout",children:".sendTimeOut"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,t.jsx)(n.h4,{id:"description-12",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".sendTimeOut"})," property contains  the maximum wait time (in seconds) of a call to ",(0,t.jsx)(n.code,{children:".send( )"})," before a timeout occurs. By default, if the ",(0,t.jsx)(n.code,{children:".sendTimeOut"})," property has not been set in the ",(0,t.jsx)(n.code,{children:"server"})," object, the value 100 is used."]}),"\n",(0,t.jsx)(n.h2,{id:"user",children:".user"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-13",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".user"})," property contains  the user name used for authentication on the mail server."]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);