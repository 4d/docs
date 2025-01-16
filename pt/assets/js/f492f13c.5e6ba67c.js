"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56733"],{236132:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands/smtp-new-transporter","title":"SMTP New transporter","description":"SMTP New transporter( server 4D.SMTPTransporter","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/smtp-new-transporter.md","sourceDirName":"commands","slug":"/commands/smtp-new-transporter","permalink":"/docs/pt/20-R7/commands/smtp-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsmtp-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"smtp-new-transporter","title":"SMTP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POP3 New transporter","permalink":"/docs/pt/20-R7/commands/pop3-new-transporter"},"next":{"title":"Math","permalink":"/docs/pt/20-R7/category/math"}}'),t=n("785893"),o=n("250065");let d={id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Resultados",id:"resultados",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"SMTP New transporter"}),"( ",(0,t.jsx)(r.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"server"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Informa\xe7\xe3o de servidor de correio"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"4D.SMTPTransporter"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"Objeto SMTP transporter"})})]})]})]}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Release"}),(0,t.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"18"}),(0,t.jsx)(r.td,{children:"Nova propriedade logFile"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"17 R5"}),(0,t.jsx)(r.td,{children:"Novas propriedades bodyCharset e headerCharset"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"17 R4"}),(0,t.jsx)(r.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"SMTP New transporter"})," command configures a new SMTP connection according to the ",(0,t.jsx)(r.em,{children:"server"})," parameter and returns a new ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})," object. O objecto transportador devolvido ser\xe1 ent\xe3o normalmente utilizado para enviar mensagens de correio electr\xf3nico."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Este comando n\xe3o abre qualquer liga\xe7\xe3o com o servidor SMTP. A conex\xe3o SMTP \xe9 realmente aberta quando a fun\xe7\xe3o ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#send",children:(0,t.jsx)(r.code,{children:".send()"})})," \xe9 executada."]}),"\n",(0,t.jsx)(r.p,{children:"A cole\xe7\xe3o SMTP \xe9 automaticamente fechada:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["when the transporter object is destroyed if the ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#keepalive",children:(0,t.jsx)(r.code,{children:"keepAlive"})})," property is true (default),"]}),"\n",(0,t.jsxs)(r.li,{children:["after each  ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#send",children:(0,t.jsx)(r.code,{children:".send()"})})," function execution if the ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#keepalive",children:(0,t.jsx)(r.code,{children:"keepAlive"})})," property is set to false."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"No par\xe2metro server, passe um objeto contendo as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.em,{children:"server"})}),(0,t.jsx)(r.th,{children:"Valor padr\xe3o (se omitido)"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection"]}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(r.br,{}),".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Objeto",(0,t.jsx)(r.br,{}),"Cadeia ou objeto token que representa as credenciais de autoriza\xe7\xe3o OAuth2. Usado somente com OAUTH2 ",(0,t.jsx)(r.code,{children:"authenticationMode"}),". Se ",(0,t.jsx)(r.code,{children:"accessTokenOAuth2"})," for usado, mas ",(0,t.jsx)(r.code,{children:"authenticationMode"})," for omitido, o protocolo OAuth 2 ser\xe1 usado (se permitido pelo servidor). N\xe3o retornado no objeto ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})}),"."]}),(0,t.jsx)(r.td,{children:"nenhum"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#authenticationmode",children:[(0,t.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(r.br,{}),"the authentication mode used to open the session on the mail server"]}),(0,t.jsx)(r.td,{children:"o modo de autentica\xe7\xe3o mais seguro dispon\xedvel no servidor \xe9 usado"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#bodycharset",children:[(0,t.jsx)(r.strong,{children:".bodyCharset"})," : Text"]}),(0,t.jsx)(r.br,{}),"  the charset and encoding used for the body part of the email"]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#connectiontimeout",children:[(0,t.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{}),"the maximum wait time (in seconds) allowed to establish a connection to the server"]}),(0,t.jsx)(r.td,{children:"30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#headercharset",children:[(0,t.jsx)(r.strong,{children:".headerCharset"})," : Text"]}),(0,t.jsx)(r.br,{})," the charset and encoding used for the email header"]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#host",children:[(0,t.jsx)(r.strong,{children:".host"})," : Text"]}),(0,t.jsx)(r.br,{}),"the name or the IP address of the host server"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"mandatory"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#keepalive",children:[(0,t.jsx)(r.strong,{children:".keepAlive"})," : Boolean"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.strong,{children:"True"})," if the SMTP connection must be kept alive until the ",(0,t.jsx)(r.code,{children:"transporter"})," object is destroyed"]}),(0,t.jsx)(r.td,{children:"True"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#logfile",children:[(0,t.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(r.br,{}),"the path of the extended log file defined (if any) for the mail connection"]}),(0,t.jsx)(r.td,{children:"nenhum"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.strong,{children:"password"})," : Text",(0,t.jsx)(r.br,{}),"Senha do usu\xe1rio para autentica\xe7\xe3o no servidor. N\xe3o retornado no objeto ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})}),"."]}),(0,t.jsx)(r.td,{children:"nenhum"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#port",children:[(0,t.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(r.br,{})," the port number used for mail transactions"]}),(0,t.jsx)(r.td,{children:"587"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#sendtimeout",children:[(0,t.jsx)(r.strong,{children:".sendTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{})," the maximum wait time (in seconds) of a call to ",(0,t.jsx)(r.code,{children:".send( )"})," before a timeout occurs"]}),(0,t.jsx)(r.td,{children:"100"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#user",children:[(0,t.jsx)(r.strong,{children:".user"})," : Text"]}),(0,t.jsx)(r.br,{})," the user name used for authentication on the mail server"]}),(0,t.jsx)(r.td,{children:"nenhum"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"resultados",children:"Resultados"}),"\n",(0,t.jsxs)(r.p,{children:["A fun\xe7\xe3o retorna um ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/API/SMTPTransporterClass#smtp-transporter-object",children:(0,t.jsx)(r.strong,{children:"objeto SMTP transporter"})}),". Todas as propriedades retornadas s\xe3o ",(0,t.jsx)(r.strong,{children:"apenas leitura"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' $server:=New object\n $server.host:="smtp.gmail.com" //Mandatory\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n $server.logFile:="LogTest.txt" //Extended log to save in the Logs folder\n\n var $transporter : 4D.SMTPTransporter\n $transporter:=SMTP New transporter($server)\n\n $email:=New object\n $email.subject:="my first mail "\n $email.from:="4d@gmail.com"\n $email.to:="4d@4d.com;test@4d.com"\n $email.textBody:="Hello World"\n $email.htmlBody:="<h1>Hello World</h1><h4>\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'</h4>\\\n <p>There are many variations of passages of Lorem Ipsum available."\\\n +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"\n\n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("An error occurred sending the mail: "+$status.message)\n End if\n'})}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"1608"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"&check;"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);