"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77012],{327457:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=s(474848),t=s(28453);const o={id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},d=void 0,i={id:"commands/smtp-new-transporter",title:"SMTP New transporter",description:"SMTP New transporter( server 4D.SMTPTransporter",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/smtp-new-transporter.md",sourceDirName:"commands",slug:"/commands/smtp-new-transporter",permalink:"/docs/es/commands/smtp-new-transporter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsmtp-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"smtp-new-transporter",title:"SMTP New transporter",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"POP3 New transporter",permalink:"/docs/es/commands/pop3-new-transporter"},next:{title:"Abs",permalink:"/docs/es/commands/abs"}},c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Result",id:"result",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function l(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"SMTP New transporter"}),"( ",(0,n.jsx)(r.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe1metros"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"server"}),(0,n.jsx)(r.td,{children:"Object"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Informaci\xf3n del servidor de correo"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resultado"}),(0,n.jsx)(r.td,{children:"4D.SMTPTransporter"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})})]})]})]}),"\n",(0,n.jsxs)(r.details,{children:[(0,n.jsx)(r.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Lanzamiento"}),(0,n.jsx)(r.th,{children:"Modificaciones"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"18"}),(0,n.jsx)(r.td,{children:"Nueva propiedad logFile"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"17 R5"}),(0,n.jsx)(r.td,{children:"Nuevas propiedades bodyCharset y headerCharset"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"17 R4"}),(0,n.jsx)(r.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"SMTP New transporter"})," command configures a new SMTP connection according to the ",(0,n.jsx)(r.em,{children:"server"})," parameter and returns a new ",(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter object"})," object. El objeto transportador devuelto se utilizar\xe1 normalmente para el env\xedo de correos electr\xf3nicos."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Este comando no abre ninguna conexi\xf3n con el servidor SMTP. The SMTP connection is actually opened when the ",(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#send",children:(0,n.jsx)(r.code,{children:".send()"})})," function is executed."]}),"\n",(0,n.jsx)(r.p,{children:"La conexi\xf3n SMTP se cierra autom\xe1ticamente:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["when the transporter object is destroyed if the ",(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#keepalive",children:(0,n.jsx)(r.code,{children:"keepAlive"})})," property is true (default),"]}),"\n",(0,n.jsxs)(r.li,{children:["after each  ",(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#send",children:(0,n.jsx)(r.code,{children:".send()"})})," function execution if the ",(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#keepalive",children:(0,n.jsx)(r.code,{children:"keepAlive"})})," property is set to false."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["En el par\xe1metro ",(0,n.jsx)(r.em,{children:"server"}),", pase un objeto que contenga las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.em,{children:"server"})}),(0,n.jsx)(r.th,{children:"Valor por defecto (si se omite)"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#acceptunsecureconnection",children:[(0,n.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,n.jsx)(r.br,{}),(0,n.jsx)(r.strong,{children:"True"})," si se autoriza a 4D establecer una conexi\xf3n no cifrada"]}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[".",(0,n.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Text",(0,n.jsx)(r.br,{}),".",(0,n.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Object",(0,n.jsx)(r.br,{}),"Cadena u objeto token que representa las credenciales de autorizaci\xf3n OAuth2. Utilizado s\xf3lo con OAUTH2 ",(0,n.jsx)(r.code,{children:"authationMode"}),". Si se utiliza ",(0,n.jsx)(r.code,{children:"accessTokenOAuth2"})," pero se omite ",(0,n.jsx)(r.code,{children:"authenticationMode"}),", se utiliza el protocolo OAuth 2 (si el servidor lo permite). Not returned in ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,n.jsx)(r.td,{children:"ninguno"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#authenticationmode",children:[(0,n.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,n.jsx)(r.br,{}),"el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo"]}),(0,n.jsx)(r.td,{children:"se utiliza el modo de autenticaci\xf3n m\xe1s seguro soportado por el servidor"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#bodycharset",children:[(0,n.jsx)(r.strong,{children:".bodyCharset"})," : Text"]}),(0,n.jsx)(r.br,{})," el conjunto de caracteres y la codificaci\xf3n utilizados para la parte del cuerpo del correo electr\xf3nico"]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#connectiontimeout",children:[(0,n.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,n.jsx)(r.br,{}),"el tiempo m\xe1ximo de espera (en segundos) permitido para establecer una conexi\xf3n con el servidor"]}),(0,n.jsx)(r.td,{children:"30"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#headercharset",children:[(0,n.jsx)(r.strong,{children:".headerCharset"})," : Text"]}),(0,n.jsx)(r.br,{})," el conjunto de caracteres y la codificaci\xf3n utilizados para el encabezado del correo electr\xf3nico"]}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:"mail mode UTF8"})," (US-ASCII_UTF8_QP)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#host",children:[(0,n.jsx)(r.strong,{children:".host"})," : Text"]}),(0,n.jsx)(r.br,{}),"el nombre o la direcci\xf3n IP del servidor local"]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.em,{children:"obligatorio"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#keepalive",children:[(0,n.jsx)(r.strong,{children:".keepAlive"})," : Boolean"]}),(0,n.jsx)(r.br,{}),(0,n.jsx)(r.strong,{children:"True"})," si la conexi\xf3n SMTP debe permanecer activa hasta que el objeto ",(0,n.jsx)(r.code,{children:"transporter"})," sea destruido"]}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#logfile",children:[(0,n.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,n.jsx)(r.br,{}),"la ruta del archivo de registro extendido definido (si existe) para la conexi\xf3n de correo"]}),(0,n.jsx)(r.td,{children:"ninguno"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"password"})," : Text",(0,n.jsx)(r.br,{}),"contrase\xf1a de usuario para la autenticaci\xf3n en el servidor. Not returned in ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#smtp-transporter-object",children:"SMTP transporter"})})," object."]}),(0,n.jsx)(r.td,{children:"ninguno"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#port",children:[(0,n.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,n.jsx)(r.br,{})," el n\xfamero de puerto utilizado para las transacciones de correo"]}),(0,n.jsx)(r.td,{children:"587"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#sendtimeout",children:[(0,n.jsx)(r.strong,{children:".sendTimeOut"})," : Integer"]}),(0,n.jsx)(r.br,{})," el tiempo m\xe1ximo de espera (en segundos) de una llamada a ",(0,n.jsx)(r.code,{children:".send( )"})," antes de que se produzca un timeout"]}),(0,n.jsx)(r.td,{children:"100"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.a,{href:"/docs/es/API/SMTPTransporterClass#user",children:[(0,n.jsx)(r.strong,{children:".user"})," : Text"]}),(0,n.jsx)(r.br,{})," el nombre de usuario utilizado para la autenticaci\xf3n en el servidor de correo"]}),(0,n.jsx)(r.td,{children:"ninguno"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"result",children:"Result"}),"\n",(0,n.jsxs)(r.p,{children:["The function returns a ",(0,n.jsx)(r.a,{href:"/docs/es/API/SMTPTransporterClass#smtp-transporter-object",children:(0,n.jsx)(r.strong,{children:"SMTP transporter object"})}),". Todas las propiedades devueltas son de s\xf3lo lectura**."]}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:' $server:=New object\n $server.host:="smtp.gmail.com" //Obligatorio\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n $server.logFile:="LogTest.txt" //Log extendido a guardar en la carpeta Logs\n var $transporter : 4D.SMTPTransporter\n $transporter:=SMTP New transporter($server)\n\n $email:=New object\n $email.subject:="my first mail "\n $email.from:="4d@gmail.com"\n $email.to:="4d@4d.com;test@4d.com"\n $email.textBody:="Hello World"\n $email.htmlBody:="<h1>Hello World</h1><h4>\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'</h4>\\\n <p>There are many variations of passages of Lorem Ipsum available."\\\n +"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"\n\n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("An error occurred sending the mail: "+$status.message)\n End if\n'})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>i});var n=s(296540);const t={},o=n.createContext(t);function d(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);