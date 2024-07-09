/*! For license information please see 530f02d4.f7aae30e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51679],{908090:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=i(474848),r=i(28453);const d={id:"Transporter",title:"Transporter Class"},c=void 0,l={id:"API/Transporter",title:"Transporter Class",description:"Descripci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/API/Transporter.md",sourceDirName:"API",slug:"/API/Transporter",permalink:"/docs/es/20-R4/API/Transporter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTransporter.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"Transporter",title:"Transporter Class"}},t={},o=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:".acceptUnsecureConnection",id:"acceptUnsecureConnection",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-1",level:4},{value:".authenticationMode",id:"authenticationMode",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-2",level:4},{value:".authenticationMode",id:"authenticationMode-1",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-3",level:4},{value:".authenticationMode",id:"authenticationMode-2",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-4",level:4},{value:".bodyCharset",id:"bodyCharset",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-5",level:4},{value:".connectionTimeOut",id:"connectionTimeOut",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-6",level:4},{value:".headerCharset",id:"headerCharset",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-7",level:4},{value:".host",id:"host",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-8",level:4},{value:".logFile",id:"logFile",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-9",level:4},{value:".port",id:"port",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-10",level:4},{value:".sendTimeOut",id:"sendTimeOut",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-11",level:4},{value:".user",id:"user",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-12",level:4},{value:".checkConnection()",id:"checkConnection",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-13",level:4},{value:"Objeto devuelto",id:"Objeto-devuelto",level:4}];function h(n){const e={a:"a",code:"code",details:"details",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(e.h2,{id:"acceptUnsecureConnection",children:".acceptUnsecureConnection"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".acceptUnsecureConnection"}),": Boolean"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".acceptUnsecureConnection"})," contiene ",(0,s.jsx)(e.strong,{children:"True"})," si 4D est\xe1 autorizado a establecer una conexi\xf3n no cifrada cuando la conexi\xf3n encriptada no es posible."]}),"\n",(0,s.jsxs)(e.p,{children:["Contiene ",(0,s.jsx)(e.strong,{children:"False"})," si no se permiten las conexiones no cifradas, en cuyo caso se devuelve un error cuando no es posible la conexi\xf3n cifrada."]}),"\n",(0,s.jsx)(e.p,{children:"Los puertos seguros disponibles son:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"SMTP"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"465: SMTPS"}),"\n",(0,s.jsx)(e.li,{children:"587 o 25: SMTP con actualizaci\xf3n STARTTLS si lo soporta el servidor."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"IMAP"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"143: Puerto IMAP no encriptado"}),"\n",(0,s.jsx)(e.li,{children:"993: IMAP con actualizaci\xf3n STARTTLS si lo soporta el servidor"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"POP3"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"110: Puerto POP3 no encriptado"}),"\n",(0,s.jsx)(e.li,{children:"995: POP3 con actualizaci\xf3n STARTTLS si lo soporta el servidor."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"authenticationMode",children:".authenticationMode"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".authenticationMode"}),": Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,s.jsx)(e.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,s.jsx)(e.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Constantes"}),(0,s.jsx)(e.th,{children:"Comentario"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"CRAM-MD5"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IMAP authentication CRAM MD5"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LOGIN"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IMAP authentication login"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"OAUTH2"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IMAP authentication OAUTH2"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PLAIN"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"IMAP authentication plain"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"authenticationMode-1",children:".authenticationMode"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".authenticationMode"}),": Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,s.jsx)(e.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,s.jsx)(e.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Constantes"}),(0,s.jsx)(e.th,{children:"Comentario"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"APOP"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"POP3 authentication APOP"})}),(0,s.jsx)(e.td,{children:"Authentication using APOP protocol (POP3 only)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"CRAM-MD5"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"POP3 authentication CRAM MD5"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LOGIN"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"POP3 authentication login"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"OAUTH2"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"POP3 authentication OAUTH2"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PLAIN"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"POP3 authentication plain"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"authenticationMode-2",children:".authenticationMode"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".authenticationMode"}),": Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,s.jsx)(e.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,s.jsx)(e.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Constantes"}),(0,s.jsx)(e.th,{children:"Comentario"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"CRAM-MD5"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"SMTP authentication CRAM MD5"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LOGIN"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"SMTP authentication login"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"OAUTH2"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"SMTP authentication OAUTH2"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PLAIN"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"SMTP authentication plain"})}),(0,s.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"bodyCharset",children:".bodyCharset"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"18"}),(0,s.jsx)(e.td,{children:"Soporte de UTF8 base64"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R5"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".bodyCharset"})," contiene   el conjunto de caracteres y la codificaci\xf3n utilizados para la parte del cuerpo del correo electr\xf3nico."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Valores posibles:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Comentario"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode ISO2022JP"}),(0,s.jsx)(e.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)(e.ul,{children:[(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"headerCharset"}),": US-ASCII si es posible, japon\xe9s (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable"]})]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode ISO88591"}),(0,s.jsx)(e.td,{children:"ISO-8859-1"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)(e.ul,{children:[(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode UTF8"}),(0,s.jsx)(e.td,{children:"US-ASCII_UTF8_QP"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"headerCharset"})," & ",(0,s.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (",(0,s.jsx)(e.strong,{children:"valor por defecto"}),")"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode UTF8 in base64"}),(0,s.jsx)(e.td,{children:"US-ASCII_UTF8_B64"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"headerCharset"})," & ",(0,s.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"connectionTimeOut",children:".connectionTimeOut"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R5"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".connectionTimeOut"})," contiene el tiempo de espera m\xe1ximo (en segundos) autorizado para establecer una conexi\xf3n con el servidor. Por defecto, si la propiedad no se ha definido en el objeto servidor (utilizado para crear el objeto transportador con ",(0,s.jsx)(e.code,{children:"SMTP New transporter"}),", ",(0,s.jsx)(e.code,{children:"POP3 New transporter"}),", o ",(0,s.jsx)(e.code,{children:"IMAP New transporter"}),"), el valor es 30."]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"headerCharset",children:".headerCharset"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R5"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propri\xe9t\xe9 ",(0,s.jsx)(e.code,{children:".headerCharset"})," contient  el conjunto de caracteres y la codificaci\xf3n utilizados para el encabezado del correo electr\xf3nico. El encabezado incluye las siguientes partes del correo electr\xf3nico:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"asunto,"}),"\n",(0,s.jsx)(e.li,{children:"attachment filename(s),"}),"\n",(0,s.jsx)(e.li,{children:"email name."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Valores posibles:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Valor"}),(0,s.jsx)(e.th,{children:"Comentario"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode ISO2022JP"}),(0,s.jsx)(e.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)(e.ul,{children:[(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"headerCharset"}),": US-ASCII si es posible, japon\xe9s (ISO-2022-JP) & Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable"]})]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode ISO88591"}),(0,s.jsx)(e.td,{children:"ISO-8859-1"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)(e.ul,{children:[(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode UTF8"}),(0,s.jsx)(e.td,{children:"US-ASCII_UTF8_QP"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"headerCharset"})," & ",(0,s.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & Quoted-printable (valor por defecto)"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mail mode UTF8 in base64"}),(0,s.jsx)(e.td,{children:"US-ASCII_UTF8_B64"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.em,{children:"headerCharset"})," & ",(0,s.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"host",children:".host"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R5"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".host"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-8",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".host"})," contiene el nombre o la direcci\xf3n IP del servidor local. Se utiliza para las transacciones de correo (SMTP, POP3, IMAP)."]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"logFile",children:".logFile"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R5"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".logFile"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-9",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".logFile"})," contiene la ruta del archivo de historial extendido definido (si lo hay) para la conexi\xf3n de correo. Puede ser relativo (a la carpeta actual Logs) o absoluto."]}),"\n",(0,s.jsxs)(e.p,{children:["A diferencia de los archivos de registro cl\xe1sicos (habilitados mediante el comando ",(0,s.jsx)(e.code,{children:"SET DATABASE PARAMETER"}),"), los archivos de registro extendidos almacenan el contenido MIME de todos los correos enviados y no tienen ning\xfan l\xedmite de tama\xf1o. Para m\xe1s informaci\xf3n sobre los archivos de registro extendidos, consulte:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Conexiones SMTP"})," - ",(0,s.jsx)(e.a,{href:"/docs/es/20-R4/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,s.jsxs)(e.li,{children:["**Conexiones POP3 ** - ",(0,s.jsx)(e.a,{href:"/docs/es/20-R4/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Conexiones IMAP"})," - ",(0,s.jsx)(e.a,{href:"/docs/es/20-R4/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"port",children:".port"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".port"})," : Integer"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-10",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".port"})," contiene  el n\xfamero de puerto utilizado para las transacciones de correo. Por defecto, si la propiedad ",(0,s.jsx)(e.em,{children:"port"})," no se ha definido en el objeto ",(0,s.jsx)(e.em,{children:"server"})," (utilizado para crear el objeto transportador con ",(0,s.jsx)(e.code,{children:"SMTP New transporter"}),", ",(0,s.jsx)(e.code,{children:"POP3 New transporter"}),", ",(0,s.jsx)(e.code,{children:"IMAP New transporter"}),"), el puerto utilizado es:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SMTP"})," - 587"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"POP3"})," - 995"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"sendTimeOut",children:".sendTimeOut"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-11",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".sendTimeOut"})," contiene  el tiempo de espera m\xe1ximo (en segundos) de una llamada a ",(0,s.jsx)(e.code,{children:".send( )"})," antes de que se produzca un timeout. ."]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"user",children:".user"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".user"})," : Text"]}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-12",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La propiedad ",(0,s.jsx)(e.code,{children:".user"})," contiene  el nombre del usuario utilizado para la autenticaci\xf3n en el servidor de correo."]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"checkConnection",children:".checkConnection()"}),"\n",(0,s.jsxs)(e.details,{children:[(0,s.jsx)(e.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Lanzamiento"}),(0,s.jsx)(e.th,{children:"Modificaciones"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"17 R4"}),(0,s.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Par\xe1metros"}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{style:{textAlign:"center"}}),(0,s.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Result"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(e.td,{children:"Estado de la conexi\xf3n del objeto transportador"})]})})]}),"\n",(0,s.jsx)(e.p,{children:"|"}),"\n",(0,s.jsx)(e.h4,{id:"Descripci\xf3n-13",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["La funci\xf3n ",(0,s.jsx)(e.code,{children:".checkConnection()"}),"  verifica la conexi\xf3n utilizando la informaci\xf3n almacenada en el objeto transportador, recrea la conexi\xf3n si es necesario, y devuelve el estado. Esta funci\xf3n permite verificar que los valores proporcionados por el usuario son v\xe1lidos y coherentes."]}),"\n",(0,s.jsx)(e.h4,{id:"Objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,s.jsx)(e.p,{children:"La funci\xf3n env\xeda una solicitud al servidor de correo y devuelve un objeto que describe el estado del correo. Este objeto puede contener las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Propiedad"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"success"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"boolean"}),(0,s.jsx)(e.td,{children:"True si la verificaci\xf3n es exitosa, False en caso contrario"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"status"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"(s\xf3lo SMTP) C\xf3digo de estado devuelto por el servidor de correo (0 en caso de un problema no relacionado con el procesamiento del correo)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"statusText"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Mensaje de estado devuelto por el servidor de correo, o \xfaltimo error devuelto en la pila de errores de 4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"errors"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"collection"}),(0,s.jsx)(e.td,{children:"Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor de correo)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].errCode"}),(0,s.jsx)(e.td,{children:"number"}),(0,s.jsx)(e.td,{children:"C\xf3digo de error 4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].message"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Descripci\xf3n del error 4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].componentSignature"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Firma del componente interno que ha devuelto el error"})]})]})]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},221020:(n,e,i)=>{var s=i(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,i){var s,d={},o=null,h=null;for(s in void 0!==i&&(o=""+i),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(h=e.ref),e)c.call(e,s)&&!t.hasOwnProperty(s)&&(d[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===d[s]&&(d[s]=e[s]);return{$$typeof:r,type:n,key:o,ref:h,props:d,_owner:l.current}}e.Fragment=d,e.jsx=o,e.jsxs=o},474848:(n,e,i)=>{n.exports=i(221020)},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var s=i(296540);const r={},d=s.createContext(r);function c(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);