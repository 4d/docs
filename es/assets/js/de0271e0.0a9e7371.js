"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38055],{537983:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var r=s(474848),i=s(28453);const d={id:"SMTPTransporterClass",title:"SMTPTransporter"},c=void 0,t={id:"API/SMTPTransporterClass",title:"SMTPTransporter",description:"La clase SMTPTransporter permite configurar conexiones SMTP y enviar correos electr\xf3nicos a trav\xe9s de objetos SMTP transporter.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/API/SMTPTransporterClass.md",sourceDirName:"API",slug:"/API/SMTPTransporterClass",permalink:"/docs/es/API/SMTPTransporterClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSMTPTransporterClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"SMTPTransporterClass",title:"SMTPTransporter"},sidebar:"docs",previous:{title:"Signal",permalink:"/docs/es/API/SignalClass"},next:{title:"SystemWorker",permalink:"/docs/es/API/SystemWorkerClass"}},l={},o=[{value:"Objeto SMTP Transporter",id:"objeto-smtp-transporter",level:3},{value:"4D.SMTPTransporter.new()",id:"4dsmtptransporternew",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:".host",id:"host",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:".keepAlive",id:"keepalive",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-9",level:4},{value:".port",id:"port",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-10",level:4},{value:".send()",id:"send",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-11",level:4},{value:"Objeto devuelto",id:"objeto-devuelto-1",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-12",level:4},{value:".user",id:"user",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-13",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La clase ",(0,r.jsx)(n.code,{children:"SMTPTransporter"})," permite configurar conexiones SMTP y enviar correos electr\xf3nicos a trav\xe9s de objetos ",(0,r.jsx)(n.em,{children:"SMTP transporter"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"objeto-smtp-transporter",children:"Objeto SMTP Transporter"}),"\n",(0,r.jsxs)(n.p,{children:["SMTP Transporter objects are instantiated with the ",(0,r.jsx)(n.a,{href:"/docs/es/commands/smtp-new-transporter",children:(0,r.jsx)(n.code,{children:"SMTP New transporter"})})," command. Ofrecen las siguientes propiedades y funciones:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#acceptunsecureconnection",children:[(0,r.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"True"})," si se autoriza a 4D establecer una conexi\xf3n no cifrada"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#authenticationmode",children:[(0,r.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,r.jsx)(n.br,{}),"el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#bodycharset",children:[(0,r.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),(0,r.jsx)(n.br,{})," el conjunto de caracteres y la codificaci\xf3n utilizados para la parte del cuerpo del correo electr\xf3nico"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#checkconnection",children:[(0,r.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),(0,r.jsx)(n.br,{})," comprueba la conexi\xf3n utilizando la informaci\xf3n almacenada en el objeto transporter"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#connectiontimeout",children:[(0,r.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,r.jsx)(n.br,{}),"el tiempo m\xe1ximo de espera (en segundos) permitido para establecer una conexi\xf3n con el servidor"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#headercharset",children:[(0,r.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),(0,r.jsx)(n.br,{})," el conjunto de caracteres y la codificaci\xf3n utilizados para el encabezado del correo electr\xf3nico"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#host",children:[(0,r.jsx)(n.strong,{children:".host"})," : Text"]}),(0,r.jsx)(n.br,{}),"el nombre o la direcci\xf3n IP del servidor local"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#keepalive",children:[(0,r.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"True"})," si la conexi\xf3n SMTP debe permanecer activa hasta que el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," sea destruido"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#logfile",children:[(0,r.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,r.jsx)(n.br,{}),"la ruta del archivo de registro extendido definido (si existe) para la conexi\xf3n de correo"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#port",children:[(0,r.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,r.jsx)(n.br,{})," el n\xfamero de puerto utilizado para las transacciones de correo"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"mail"})," : Object ) : Object"]}),(0,r.jsx)(n.br,{}),"env\xeda el ",(0,r.jsx)(n.a,{href:"/docs/es/API/EmailObjectClass#email-object",children:(0,r.jsx)(n.em,{children:"objeto mail"})})," al servidor SMTP definido en el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," y devuelve un objeto estado"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#sendtimeout",children:[(0,r.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),(0,r.jsx)(n.br,{})," el tiempo m\xe1ximo de espera (en segundos) de una llamada a ",(0,r.jsx)(n.code,{children:".send( )"})," antes de que se produzca un timeout"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#user",children:[(0,r.jsx)(n.strong,{children:".user"})," : Text"]}),(0,r.jsx)(n.br,{})," el nombre de usuario utilizado para la autenticaci\xf3n en el servidor de correo"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4dsmtptransporternew",children:"4D.SMTPTransporter.new()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.SMTPTransporter.new"}),"( ",(0,r.jsx)(n.em,{children:"server"})," : Object ) : 4D.SMTPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"server"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Informaci\xf3n del servidor de correo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"4D.SMTPTransporter"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#objet-smtp-transporter",children:"Objeto SMTP Transporter"})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:"4D.SMTPTransporter.new()"})," crea y devuelve un nuevo objeto del tipo ",(0,r.jsx)(n.code,{children:"4D.SMTPTransporter"}),". It is identical to the ",(0,r.jsx)(n.a,{href:"/docs/es/commands/smtp-new-transporter",children:(0,r.jsx)(n.code,{children:"SMTP New transporter"})})," command (shortcut)."]}),"\n",(0,r.jsx)(n.h2,{id:"acceptunsecureconnection",children:".acceptUnsecureConnection"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".acceptUnsecureConnection"})," contiene ",(0,r.jsx)(n.strong,{children:"True"})," si se autoriza a 4D establecer una conexi\xf3n no cifrada cuando la conexi\xf3n cifrada no es posible."]}),"\n",(0,r.jsxs)(n.p,{children:["Contiene ",(0,r.jsx)(n.strong,{children:"False"})," si no se permiten las conexiones no cifradas, en cuyo caso se devuelve un error cuando no es posible la conexi\xf3n cifrada."]}),"\n",(0,r.jsx)(n.p,{children:"Los puertos seguros disponibles son:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SMTP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"465: SMTPS"}),"\n",(0,r.jsx)(n.li,{children:"587 o 25: SMTP con actualizaci\xf3n STARTTLS si lo soporta el servidor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"IMAP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"143: Puerto IMAP no encriptado"}),"\n",(0,r.jsx)(n.li,{children:"993: IMAP con actualizaci\xf3n STARTTLS si lo soporta el servidor"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"POP3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"110: Puerto POP3 no encriptado"}),"\n",(0,r.jsx)(n.li,{children:"995: POP3 con actualizaci\xf3n STARTTLS si lo soporta el servidor."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authenticationmode",children:".authenticationMode"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,r.jsx)(n.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,r.jsx)(n.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Constantes"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CRAM-MD5"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication CRAM MD5"})}),(0,r.jsx)(n.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LOGIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication login"})}),(0,r.jsx)(n.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OAUTH2"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication OAUTH2"})}),(0,r.jsx)(n.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAIN"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SMTP authentication plain"})}),(0,r.jsx)(n.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"bodycharset",children:".bodyCharset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18"}),(0,r.jsx)(n.td,{children:"Soporte de UTF8 base64"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".bodyCharset"})," contiene  el conjunto de caracteres y la codificaci\xf3n utilizados para la parte del cuerpo del correo electr\xf3nico."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valores posibles:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,r.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO88591"}),(0,r.jsx)(n.td,{children:"ISO-8859-1"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode UTF8"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (",(0,r.jsx)(n.strong,{children:"valor por defecto"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"checkconnection",children:".checkConnection()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Estado de la conexi\xf3n del objeto transportador"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".checkConnection()"}),"  comprueba la conexi\xf3n utilizando la informaci\xf3n almacenada en el objeto transporter, recrea la conexi\xf3n si es necesario y devuelve el estado. Esta funci\xf3n permite verificar que los valores proporcionados por el usuario son v\xe1lidos y coherentes."]}),"\n",(0,r.jsx)(n.h4,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,r.jsx)(n.p,{children:"La funci\xf3n env\xeda una solicitud al servidor de correo y devuelve un objeto que describe el estado del correo. Este objeto puede contener las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True si la verificaci\xf3n es exitosa, False en caso contrario"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"(s\xf3lo SMTP) C\xf3digo de estado devuelto por el servidor de correo (0 en caso de un problema no relacionado con el procesamiento del correo)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Mensaje de estado devuelto por el servidor de correo, o \xfaltimo error devuelto en la pila de errores de 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsx)(n.td,{children:"Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor de correo)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].errCode"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"C\xf3digo de error 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].message"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del error 4D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[ ].componentSignature"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Firma del componente interno que ha devuelto el error"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Para obtener informaci\xf3n sobre los c\xf3digos de estado SMTP, por favor consulte ",(0,r.jsx)(n.a,{href:"https://www.usps.org/info/smtp_status.html",children:"esta p\xe1gina"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $pw : Text\n var $options : Object\n var $transporter : 4D.SMTPTransporter\n $options:=New object\n\n $pw:=Request("Please enter your password:")\n $options.host:="smtp.gmail.com"\n\n $options.user:="test@gmail.com"\n $options.password:=$pw\n\n $transporter:=SMTP New transporter($options)\n\n $status:=$transporter.checkConnection()\n If($status.success=True)\n    ALERT("SMTP connection check successful!")\n Else\n    ALERT("Error # "+String($status.status)+", "+$status.statusText)\n End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"connectiontimeout",children:".connectionTimeOut"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".connectionTimeOut"})," contiene el tiempo m\xe1ximo de espera (en segundos) permitido para establecer una conexi\xf3n con el servidor. Por defecto, si la propiedad no se ha definido en el objeto servidor (utilizado para crear el objeto transportador con ",(0,r.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,r.jsx)(n.code,{children:"POP3 New transporter"}),", o ",(0,r.jsx)(n.code,{children:"IMAP New transporter"}),"), el valor es 30."]}),"\n",(0,r.jsx)(n.h2,{id:"headercharset",children:".headerCharset"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".headerCharset"})," contiene  el conjunto de caracteres y la codificaci\xf3n utilizados para el encabezado del correo electr\xf3nico. El encabezado incluye las siguientes partes del correo electr\xf3nico:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"asunto,"}),"\n",(0,r.jsx)(n.li,{children:"attachment filename(s),"}),"\n",(0,r.jsx)(n.li,{children:"email name."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valores posibles:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO2022JP"}),(0,r.jsx)(n.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode ISO88591"}),(0,r.jsx)(n.td,{children:"ISO-8859-1"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode UTF8"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_QP"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (valor por defecto)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail mode UTF8 in base64"}),(0,r.jsx)(n.td,{children:"US-ASCII_UTF8_B64"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"headerCharset"})," & ",(0,r.jsx)(n.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"host",children:".host"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".host"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".host"})," contiene el nombre o la direcci\xf3n IP del servidor local. Se utiliza para las transacciones de correo (SMTP, POP3, IMAP)."]}),"\n",(0,r.jsx)(n.h2,{id:"keepalive",children:".keepAlive"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".keepAlive"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-8",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".keepAlive"})," contiene ",(0,r.jsx)(n.strong,{children:"True"})," si la conexi\xf3n SMTP debe permanecer activa hasta que el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," sea destruido, y ",(0,r.jsx)(n.strong,{children:"False"})," en caso contrario. Por defecto, si la propiedad ",(0,r.jsx)(n.code,{children:"keepAlive"})," no se ha definido en el objeto ",(0,r.jsx)(n.code,{children:"server"})," (utilizado para crear el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," con ",(0,r.jsx)(n.code,{children:"SMTP New transporter"}),"), es ",(0,r.jsx)(n.strong,{children:"True"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"La conexi\xf3n SMTP se cierra autom\xe1ticamente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["cuando el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," es destruido si la propiedad ",(0,r.jsx)(n.code,{children:".keepAlive"})," es true,"]}),"\n",(0,r.jsxs)(n.li,{children:["despu\xe9s de cada funci\xf3n ",(0,r.jsx)(n.code,{children:".send( )"})," si la propiedad ",(0,r.jsx)(n.code,{children:".keepAlive"})," est\xe1 en false."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"logfile",children:".logFile"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".logFile"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-9",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".logFile"})," contiene la ruta del archivo de registro extendido definido (si existe) para la conexi\xf3n de correo. Puede ser relativo (a la carpeta actual Logs) o absoluto."]}),"\n",(0,r.jsxs)(n.p,{children:["A diferencia de los archivos log habituales (activados mediante el comando ",(0,r.jsx)(n.code,{children:"SET DATABASE PARAMETER"}),"), los archivos log extendidos almacenan el contenido MIME de todos los correos enviados y no tienen l\xedmite de tama\xf1o. Para m\xe1s informaci\xf3n sobre los archivos de registro extendidos, consulte:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SMTP connections"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"POP3 connections"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IMAP connections"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"port",children:".port"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".port"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-10",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".port"})," contiene  el n\xfamero de puerto utilizado para las transacciones de correo. Por defecto, si la propiedad ",(0,r.jsx)(n.em,{children:"port"})," no se ha definido en el objeto ",(0,r.jsx)(n.em,{children:"server"})," (utilizado para crear el objeto transportador con ",(0,r.jsx)(n.code,{children:"SMTP New transporter"}),", ",(0,r.jsx)(n.code,{children:"POP3 New transporter"}),", ",(0,r.jsx)(n.code,{children:"IMAP New transporter"}),"), el puerto utilizado es:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SMTP"})," - 587"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"POP3"})," - 995"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R5"}),(0,r.jsx)(n.td,{children:"Soporte de contenidos Mime"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"mail"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mail"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/es/API/EmailObjectClass#email-object",children:"Email"})," a enviar"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Estado SMTP"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-11",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".send()"})," env\xeda el ",(0,r.jsx)(n.a,{href:"/docs/es/API/EmailObjectClass#email-object",children:(0,r.jsx)(n.em,{children:"objeto mail"})})," al servidor SMTP definido en el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," y devuelve un objeto estado."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["El objeto ",(0,r.jsx)(n.code,{children:"transporter"})," debe haber sido creado con el comando ",(0,r.jsx)(n.code,{children:"SMTP New transporter"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo crea la conexi\xf3n SMTP si no est\xe1 ya activa. Si la propiedad ",(0,r.jsx)(n.code,{children:".keepAlive"})," del objeto ",(0,r.jsx)(n.code,{children:"transporter"})," es ",(0,r.jsx)(n.strong,{children:"false"}),", la conexi\xf3n SMTP se cierra autom\xe1ticamente despu\xe9s de la ejecuci\xf3n de ",(0,r.jsx)(n.code,{children:". end()"}),", de lo contrario permanece viva hasta que el objeto ",(0,r.jsx)(n.code,{children:"transporter"})," sea destruido. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"#smtp-new-transporter",children:(0,r.jsx)(n.code,{children:"SMTP New transporter"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"mail"}),", pase un ",(0,r.jsxs)(n.a,{href:"/docs/es/API/EmailObjectClass#email-object",children:["objeto ",(0,r.jsx)(n.code,{children:"Email"})]})," v\xe1lido para enviar. Las propiedades origen (de d\xf3nde viene el correo electr\xf3nico) y destino (uno o varios destinatarios) deben incluirse, el resto de propiedades son opcionales."]}),"\n",(0,r.jsx)(n.h4,{id:"objeto-devuelto-1",children:"Objeto devuelto"}),"\n",(0,r.jsx)(n.p,{children:"La funci\xf3n devuelve un objeto que describe el estado SMTP de la operaci\xf3n. Este objeto puede contener las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True si el env\xedo tiene \xe9xito, false en caso contrario"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"C\xf3digo de estado devuelto por el servidor SMTP (0 en caso de un problema no relacionado con el procesamiento del correo)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Mensaje de estado devuelto por el servidor SMTP"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["En caso de un problema no relacionado con el procesamiento SMTP (por ejemplo, si falta una propiedad obligatoria en el correo), 4D genera un error que puede interceptar utilizando un m\xe9todo instalado por el comando ",(0,r.jsx)(n.code,{children:"ON ERR CALL"}),". Use the ",(0,r.jsx)(n.code,{children:"Last errors"})," command for information about the error."]}),"\n",(0,r.jsx)(n.p,{children:"En este caso, el objeto estado resultante contiene los siguientes valores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"statusText"}),(0,r.jsx)(n.td,{children:'"Failed to send email"'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"sendtimeout",children:".sendTimeOut"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-12",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".sendTimeOut"})," contiene  el tiempo m\xe1ximo de espera (en segundos) de una llamada a ",(0,r.jsx)(n.code,{children:".send( )"})," antes de que se produzca un timeout. Por defecto, si no se ha definido la propiedad ",(0,r.jsx)(n.code,{children:".sendTimeOut"})," en el objeto ",(0,r.jsx)(n.code,{children:"server"}),", se utiliza el valor 100."]}),"\n",(0,r.jsx)(n.h2,{id:"user",children:".user"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".user"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-13",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".user"})," contiene  el nombre de usuario utilizado para la autenticaci\xf3n en el servidor de correo."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var r=s(296540);const i={},d=r.createContext(i);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);