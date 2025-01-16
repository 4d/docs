"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87133"],{233382:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands/smtp-new-transporter","title":"SMTP New transporter","description":"SMTP New transporter( server 4D.SMTPTransporter","source":"@site/versioned_docs/version-20-R7/commands/smtp-new-transporter.md","sourceDirName":"commands","slug":"/commands/smtp-new-transporter","permalink":"/docs/20-R7/commands/smtp-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsmtp-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"smtp-new-transporter","title":"SMTP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POP3 New transporter","permalink":"/docs/20-R7/commands/pop3-new-transporter"},"next":{"title":"Math","permalink":"/docs/20-R7/category/math"}}'),t=r("785893"),d=r("250065");let o={id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Result",id:"result",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SMTP New transporter"}),"( ",(0,t.jsx)(n.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mail server information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"4D.SMTPTransporter"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})})]})]})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"New logFile property"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R5"}),(0,t.jsx)(n.td,{children:"New bodyCharset and headerCharset properties"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"17 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SMTP New transporter"})," command configures a new SMTP connection according to the ",(0,t.jsx)(n.em,{children:"server"})," parameter and returns a new ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})," object. The returned transporter object will then usually be used to send emails."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This command does not open any connection to the SMTP server. The SMTP connection is actually opened when the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#send",children:(0,t.jsx)(n.code,{children:".send()"})})," function is executed."]}),"\n",(0,t.jsx)(n.p,{children:"The SMTP connection is automatically closed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["when the transporter object is destroyed if the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#keepalive",children:(0,t.jsx)(n.code,{children:"keepAlive"})})," property is true (default),"]}),"\n",(0,t.jsxs)(n.li,{children:["after each  ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#send",children:(0,t.jsx)(n.code,{children:".send()"})})," function execution if the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#keepalive",children:(0,t.jsx)(n.code,{children:"keepAlive"})})," property is set to false."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"server"})," parameter, pass an object containing the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"server"})}),(0,t.jsx)(n.th,{children:"Default value (if omitted)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection"]}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(n.br,{}),".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Object",(0,t.jsx)(n.br,{}),"Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 ",(0,t.jsx)(n.code,{children:"authenticationMode"}),". If ",(0,t.jsx)(n.code,{children:"accessTokenOAuth2"})," is used but ",(0,t.jsx)(n.code,{children:"authenticationMode"})," is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#authenticationmode",children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(n.br,{}),"the authentication mode used to open the session on the mail server"]}),(0,t.jsx)(n.td,{children:"the most secure authentication mode supported by the server is used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#bodycharset",children:[(0,t.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),(0,t.jsx)(n.br,{}),"  the charset and encoding used for the body part of the email"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#connectiontimeout",children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the maximum wait time (in seconds) allowed to establish a connection to the server"]}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#headercharset",children:[(0,t.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),(0,t.jsx)(n.br,{})," the charset and encoding used for the email header"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#host",children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),(0,t.jsx)(n.br,{}),"the name or the IP address of the host server"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"mandatory"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#keepalive",children:[(0,t.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," if the SMTP connection must be kept alive until the ",(0,t.jsx)(n.code,{children:"transporter"})," object is destroyed"]}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#logfile",children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(n.br,{}),"the path of the extended log file defined (if any) for the mail connection"]}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"password"})," : Text",(0,t.jsx)(n.br,{}),"User password for authentication on the server. Not returned in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#port",children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(n.br,{})," the port number used for mail transactions"]}),(0,t.jsx)(n.td,{children:"587"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#sendtimeout",children:[(0,t.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{})," the maximum wait time (in seconds) of a call to ",(0,t.jsx)(n.code,{children:".send( )"})," before a timeout occurs"]}),(0,t.jsx)(n.td,{children:"100"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#user",children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),(0,t.jsx)(n.br,{})," the user name used for authentication on the mail server"]}),(0,t.jsx)(n.td,{children:"none"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"result",children:"Result"}),"\n",(0,t.jsxs)(n.p,{children:["The function returns a ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:(0,t.jsx)(n.strong,{children:"SMTP transporter object"})}),". All returned properties are ",(0,t.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $server:=New object\n $server.host:="smtp.gmail.com" //Mandatory\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder\n\n var $transporter : 4D.SMTPTransporter\n $transporter:=SMTP New transporter($server)\n\n $email:=New object\n $email.subject:="my first mail "\n $email.from:="4d@gmail.com"\n $email.to:="4d@4d.com;test@4d.com"\n $email.textBody:="Hello World"\n $email.htmlBody:="<h1>Hello World</h1><h4>\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'</h4>\\\n <p>There are many variations of passages of Lorem Ipsum available."\\\n +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"\n\n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("An error occurred sending the mail: "+$status.message)\n End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1608"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);