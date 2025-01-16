"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2170"],{739361:function(n,e,i){i.r(e),i.d(e,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>t,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"API/Transporter","title":"Clase Transporter","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/API/Transporter.md","sourceDirName":"API","slug":"/API/Transporter","permalink":"/docs/es/20-R7/API/Transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTransporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"Transporter","title":"Clase Transporter"}}'),d=i("785893"),r=i("250065");let c={id:"Transporter",title:"Clase Transporter"},l=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:".acceptUnsecureConnection",id:"acceptunsecureconnection",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".authenticationMode",id:"authenticationmode",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".authenticationMode",id:"authenticationmode-1",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".authenticationMode",id:"authenticationmode-2",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".bodyCharset",id:"bodycharset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".connectionTimeOut",id:"connectiontimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:".headerCharset",id:"headercharset",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:".host",id:"host",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4},{value:".logFile",id:"logfile",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-9",level:4},{value:".port",id:"port",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-10",level:4},{value:".sendTimeOut",id:"sendtimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-11",level:4},{value:".user",id:"user",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-12",level:4},{value:".checkConnection()",id:"checkconnection",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-13",level:4},{value:"Objeto devuelto",id:"objeto-devuelto",level:4}];function h(n){let e={a:"a",code:"code",details:"details",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(e.h2,{id:"acceptunsecureconnection",children:".acceptUnsecureConnection"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".acceptUnsecureConnection"})," contiene ",(0,d.jsx)(e.strong,{children:"True"})," si se autoriza a 4D establecer una conexi\xf3n no cifrada cuando la conexi\xf3n cifrada no es posible."]}),"\n",(0,d.jsxs)(e.p,{children:["Contiene ",(0,d.jsx)(e.strong,{children:"False"})," si no se permiten las conexiones no cifradas, en cuyo caso se devuelve un error cuando no es posible la conexi\xf3n cifrada."]}),"\n",(0,d.jsx)(e.p,{children:"Los puertos seguros disponibles son:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"SMTP"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"465: SMTPS"}),"\n",(0,d.jsx)(e.li,{children:"587 o 25: SMTP con actualizaci\xf3n STARTTLS si lo soporta el servidor."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"IMAP"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"143: Puerto IMAP no encriptado"}),"\n",(0,d.jsx)(e.li,{children:"993: IMAP con actualizaci\xf3n STARTTLS si lo soporta el servidor"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"POP3"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"110: Puerto POP3 no encriptado"}),"\n",(0,d.jsx)(e.li,{children:"995: POP3 con actualizaci\xf3n STARTTLS si lo soporta el servidor."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"authenticationmode",children:".authenticationMode"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,d.jsx)(e.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,d.jsx)(e.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Valor"}),(0,d.jsx)(e.th,{children:"Constantes"}),(0,d.jsx)(e.th,{children:"Comentario"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"CRAM-MD5"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"IMAP authentication CRAM MD5"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"LOGIN"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"IMAP authentication login"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"OAUTH2"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"IMAP authentication OAUTH2"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"PLAIN"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"IMAP authentication plain"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"authenticationmode-1",children:".authenticationMode"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,d.jsx)(e.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,d.jsx)(e.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Valor"}),(0,d.jsx)(e.th,{children:"Constantes"}),(0,d.jsx)(e.th,{children:"Comentario"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"APOP"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"POP3 authentication APOP"})}),(0,d.jsx)(e.td,{children:"Authentication using APOP protocol (POP3 only)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"CRAM-MD5"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"POP3 authentication CRAM MD5"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"LOGIN"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"POP3 authentication login"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"OAUTH2"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"POP3 authentication OAUTH2"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"PLAIN"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"POP3 authentication plain"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"authenticationmode-2",children:".authenticationMode"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".authenticationMode"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".authenticationMode"})," contiene el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo."]}),"\n",(0,d.jsx)(e.p,{children:"Por defecto, se utiliza el modo m\xe1s seguro soportado por el servidor."}),"\n",(0,d.jsx)(e.p,{children:"Los valores posibles son:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Valor"}),(0,d.jsx)(e.th,{children:"Constantes"}),(0,d.jsx)(e.th,{children:"Comentario"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"CRAM-MD5"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"SMTP authentication CRAM MD5"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo CRAM-MD5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"LOGIN"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"SMTP authentication login"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo LOGIN"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"OAUTH2"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"SMTP authentication OAUTH2"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo OAuth2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"PLAIN"}),(0,d.jsx)(e.td,{children:(0,d.jsx)(e.code,{children:"SMTP authentication plain"})}),(0,d.jsx)(e.td,{children:"Autenticaci\xf3n utilizando el protocolo PLAIN"})]})]})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"bodycharset",children:".bodyCharset"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"18"}),(0,d.jsx)(e.td,{children:"Soporte de UTF8 base64"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R5"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".bodyCharset"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".bodyCharset"})," contiene  el conjunto de caracteres y la codificaci\xf3n utilizados para la parte del cuerpo del correo electr\xf3nico."]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"Valores posibles:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Valor"}),(0,d.jsx)(e.th,{children:"Comentario"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode ISO2022JP"}),(0,d.jsx)(e.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,d.jsx)(e.td,{children:(0,d.jsxs)(e.ul,{children:[(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"headerCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable"]})]})})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode ISO88591"}),(0,d.jsx)(e.td,{children:"ISO-8859-1"}),(0,d.jsx)(e.td,{children:(0,d.jsxs)(e.ul,{children:[(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode UTF8"}),(0,d.jsx)(e.td,{children:"US-ASCII_UTF8_QP"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"headerCharset"})," & ",(0,d.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (",(0,d.jsx)(e.strong,{children:"valor por defecto"}),")"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode UTF8 in base64"}),(0,d.jsx)(e.td,{children:"US-ASCII_UTF8_B64"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"headerCharset"})," & ",(0,d.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"connectiontimeout",children:".connectionTimeOut"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R5"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".connectionTimeOut"})," : Integer"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".connectionTimeOut"})," contiene el tiempo m\xe1ximo de espera (en segundos) permitido para establecer una conexi\xf3n con el servidor. Por defecto, si la propiedad no se ha definido en el objeto servidor (utilizado para crear el objeto transportador con ",(0,d.jsx)(e.code,{children:"SMTP New transporter"}),", ",(0,d.jsx)(e.code,{children:"POP3 New transporter"}),", o ",(0,d.jsx)(e.code,{children:"IMAP New transporter"}),"), el valor es 30."]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"headercharset",children:".headerCharset"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R5"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".headerCharset"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".headerCharset"})," contiene  el conjunto de caracteres y la codificaci\xf3n utilizados para el encabezado del correo electr\xf3nico. El encabezado incluye las siguientes partes del correo electr\xf3nico:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"asunto,"}),"\n",(0,d.jsx)(e.li,{children:"attachment filename(s),"}),"\n",(0,d.jsx)(e.li,{children:"email name."}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"Valores posibles:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Valor"}),(0,d.jsx)(e.th,{children:"Comentario"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode ISO2022JP"}),(0,d.jsx)(e.td,{children:"US-ASCII_ISO-2022-JP_UTF8_QP"}),(0,d.jsx)(e.td,{children:(0,d.jsxs)(e.ul,{children:[(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"headerCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) &Quoted-printable si es posible, de lo contrario UTF-8 & Quoted-printable"]}),(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, Japanese (ISO-2022-JP) & 7-bit si es posible, de lo contrario UTF-8 & Quoted-printable"]})]})})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode ISO88591"}),(0,d.jsx)(e.td,{children:"ISO-8859-1"}),(0,d.jsx)(e.td,{children:(0,d.jsxs)(e.ul,{children:[(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"headerCharset"}),": ISO-8859-1 & Quoted-printable"]}),(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.em,{children:"bodyCharset"}),": ISO-8859-1 & 8-bit"]})]})})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode UTF8"}),(0,d.jsx)(e.td,{children:"US-ASCII_UTF8_QP"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"headerCharset"})," & ",(0,d.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, en caso contrario UTF-8 & Quoted-printable (valor por defecto)"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mail mode UTF8 in base64"}),(0,d.jsx)(e.td,{children:"US-ASCII_UTF8_B64"}),(0,d.jsxs)(e.td,{children:[(0,d.jsx)(e.em,{children:"headerCharset"})," & ",(0,d.jsx)(e.em,{children:"bodyCharset"}),": US-ASCII si es posible, de lo contrario UTF-8 & base64"]})]})]})]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"host",children:".host"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R5"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".host"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-8",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".host"})," contiene el nombre o la direcci\xf3n IP del servidor local. Se utiliza para las transacciones de correo (SMTP, POP3, IMAP)."]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"logfile",children:".logFile"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R5"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".logFile"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-9",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".logFile"})," contiene la ruta del archivo de registro extendido definido (si existe) para la conexi\xf3n de correo. Puede ser relativo (a la carpeta actual Logs) o absoluto."]}),"\n",(0,d.jsxs)(e.p,{children:["A diferencia de los archivos log habituales (activados mediante el comando ",(0,d.jsx)(e.code,{children:"SET DATABASE PARAMETER"}),"), los archivos log extendidos almacenan el contenido MIME de todos los correos enviados y no tienen l\xedmite de tama\xf1o. Para m\xe1s informaci\xf3n sobre los archivos de registro extendidos, consulte:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"SMTP connections"})," - ",(0,d.jsx)(e.a,{href:"/docs/es/20-R7/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"POP3 connections"})," - ",(0,d.jsx)(e.a,{href:"/docs/es/20-R7/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"IMAP connections"})," - ",(0,d.jsx)(e.a,{href:"/docs/es/20-R7/Debugging/debugLogFiles#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"port",children:".port"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".port"})," : Integer"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-10",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".port"})," contiene  el n\xfamero de puerto utilizado para las transacciones de correo. Por defecto, si la propiedad ",(0,d.jsx)(e.em,{children:"port"})," no se ha definido en el objeto ",(0,d.jsx)(e.em,{children:"server"})," (utilizado para crear el objeto transportador con ",(0,d.jsx)(e.code,{children:"SMTP New transporter"}),", ",(0,d.jsx)(e.code,{children:"POP3 New transporter"}),", ",(0,d.jsx)(e.code,{children:"IMAP New transporter"}),"), el puerto utilizado es:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"SMTP"})," - 587"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"POP3"})," - 995"]}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.strong,{children:"IMAP"})," - 993"]}),"\n"]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"sendtimeout",children:".sendTimeOut"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".sendTimeOut"})," : Integer"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-11",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".sendTimeOut"})," contiene  el tiempo m\xe1ximo de espera (en segundos) de una llamada a ",(0,d.jsx)(e.code,{children:".send( )"})," antes de que se produzca un timeout. Por defecto, si no se ha definido la propiedad ",(0,d.jsx)(e.code,{children:".sendTimeOut"})," en el objeto ",(0,d.jsx)(e.code,{children:"server"}),", se utiliza el valor 100."]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"user",children:".user"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".user"})," : Text"]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-12",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La propiedad ",(0,d.jsx)(e.code,{children:".user"})," contiene  el nombre de usuario utilizado para la autenticaci\xf3n en el servidor de correo."]}),"\n",(0,d.jsx)(e.hr,{}),"\n",(0,d.jsx)(e.h2,{id:"checkconnection",children:".checkConnection()"}),"\n",(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"17 R4"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:".checkConnection()"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Par\xe1metros"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{style:{textAlign:"center"}}),(0,d.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Result"}),(0,d.jsx)(e.td,{children:"Object"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"<-"}),(0,d.jsx)(e.td,{children:"Estado de la conexi\xf3n del objeto transportador"})]})})]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n-13",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["La funci\xf3n ",(0,d.jsx)(e.code,{children:".checkConnection()"}),"  comprueba la conexi\xf3n utilizando la informaci\xf3n almacenada en el objeto transporter, recrea la conexi\xf3n si es necesario y devuelve el estado. Esta funci\xf3n permite verificar que los valores proporcionados por el usuario son v\xe1lidos y coherentes."]}),"\n",(0,d.jsx)(e.h4,{id:"objeto-devuelto",children:"Objeto devuelto"}),"\n",(0,d.jsx)(e.p,{children:"La funci\xf3n env\xeda una solicitud al servidor de correo y devuelve un objeto que describe el estado del correo. Este objeto puede contener las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Propiedad"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"success"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"boolean"}),(0,d.jsx)(e.td,{children:"True si la verificaci\xf3n es exitosa, False en caso contrario"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"status"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"number"}),(0,d.jsx)(e.td,{children:"(s\xf3lo SMTP) C\xf3digo de estado devuelto por el servidor de correo (0 en caso de un problema no relacionado con el procesamiento del correo)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"statusText"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"text"}),(0,d.jsx)(e.td,{children:"Mensaje de estado devuelto por el servidor de correo, o \xfaltimo error devuelto en la pila de errores de 4D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"errors"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"collection"}),(0,d.jsx)(e.td,{children:"Pila de errores 4D (no se devuelve si se recibe una respuesta del servidor de correo)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"[ ].errCode"}),(0,d.jsx)(e.td,{children:"number"}),(0,d.jsx)(e.td,{children:"C\xf3digo de error 4D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"[ ].message"}),(0,d.jsx)(e.td,{children:"text"}),(0,d.jsx)(e.td,{children:"Descripci\xf3n del error 4D"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"[ ].componentSignature"}),(0,d.jsx)(e.td,{children:"text"}),(0,d.jsx)(e.td,{children:"Firma del componente interno que ha devuelto el error"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return c}});var s=i(667294);let d={},r=s.createContext(d);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);