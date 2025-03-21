"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25787"],{709753:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands/pop3-new-transporter","title":"POP3 New transporter","description":"POP3 New transporter( server 4D.POP3Transporter","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/pop3-new-transporter.md","sourceDirName":"commands","slug":"/commands/pop3-new-transporter","permalink":"/docs/es/20-R7/commands/pop3-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fpop3-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pop3-new-transporter","title":"POP3 New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAIL New attachment","permalink":"/docs/es/20-R7/commands/mail-new-attachment"},"next":{"title":"SMTP New transporter","permalink":"/docs/es/20-R7/commands/smtp-new-transporter"}}'),t=n("785893"),o=n("250065");let d={id:"pop3-new-transporter",title:"POP3 New transporter",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Resultado",id:"resultado",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"POP3 New transporter"}),"( ",(0,t.jsx)(r.em,{children:"server"})," : Object ) : 4D.POP3Transporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe1metros"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"server"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Informaci\xf3n del servidor de correo"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"4D.POP3Transporter"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:"Objeto transporter POP3"})})]})]})]}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Lanzamiento"}),(0,t.jsx)(r.th,{children:"Modificaciones"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"18 R2"}),(0,t.jsx)(r.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(r.p,{children:["El comando ",(0,t.jsx)(r.code,{children:"POP3 New transporter"})," configura una nueva conexi\xf3n POP3 en funci\xf3n del par\xe1metro ",(0,t.jsx)(r.em,{children:"server"})," y devuelve un nuevo objeto ",(0,t.jsx)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:"transporter POP3"}),". El objeto transportador devuelto se utilizar\xe1 normalmente para recibir correos electr\xf3nicos."]}),"\n",(0,t.jsxs)(r.p,{children:["En el par\xe1metro ",(0,t.jsx)(r.em,{children:"server"}),", pase un objeto que contenga las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.em,{children:"server"})}),(0,t.jsx)(r.th,{children:"Valor por defecto (si se omite)"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.strong,{children:"True"})," si se autoriza a 4D establecer una conexi\xf3n no cifrada"]}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(r.br,{}),".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Object",(0,t.jsx)(r.br,{}),"Cadena u objeto token que representa las credenciales de autorizaci\xf3n OAuth2. Utilizado s\xf3lo con OAUTH2 ",(0,t.jsx)(r.code,{children:"authationMode"}),". Si se utiliza ",(0,t.jsx)(r.code,{children:"accessTokenOAuth2"})," pero se omite ",(0,t.jsx)(r.code,{children:"authenticationMode"}),", se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:"POP3 transporter"})}),"."]}),(0,t.jsx)(r.td,{children:"ninguno"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#authenticationmode",children:[(0,t.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(r.br,{}),"el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo"]}),(0,t.jsx)(r.td,{children:"se utiliza el modo de autenticaci\xf3n m\xe1s seguro soportado por el servidor"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#connectiontimeout",children:[(0,t.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{}),"el tiempo m\xe1ximo de espera (en segundos) permitido para establecer una conexi\xf3n con el servidor"]}),(0,t.jsx)(r.td,{children:"30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#host",children:[(0,t.jsx)(r.strong,{children:".host"})," : Text"]}),(0,t.jsx)(r.br,{}),"el nombre o la direcci\xf3n IP del servidor local"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"obligatorio"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#logfile",children:[(0,t.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(r.br,{}),"la ruta del archivo de registro extendido definido (si existe) para la conexi\xf3n de correo"]}),(0,t.jsx)(r.td,{children:"ninguno"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.strong,{children:".password"})," : Text",(0,t.jsx)(r.br,{}),"contrase\xf1a de usuario para la autenticaci\xf3n en el servidor. No se devuelve en el objeto ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:"POP3 transporter"})}),"."]}),(0,t.jsx)(r.td,{children:"ninguno"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#port",children:[(0,t.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(r.br,{})," el n\xfamero de puerto utilizado para las transacciones de correo"]}),(0,t.jsx)(r.td,{children:"995"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#user",children:[(0,t.jsx)(r.strong,{children:".user"})," : Text"]}),(0,t.jsx)(r.br,{})," el nombre de usuario utilizado para la autenticaci\xf3n en el servidor de correo"]}),(0,t.jsx)(r.td,{children:"ninguno"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"resultado",children:"Resultado"}),"\n",(0,t.jsxs)(r.p,{children:["La funci\xf3n devuelve un ",(0,t.jsx)(r.a,{href:"/docs/es/20-R7/API/POP3TransporterClass#pop3-transporter-object",children:(0,t.jsx)(r.strong,{children:"objeto POP3 transporter"})}),". Todas las propiedades devueltas son de s\xf3lo lectura**."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"La conexi\xf3n POP3 se cierra autom\xe1ticamente cuando se destruye el objeto transportador."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' var $server : Object\n $server:=New object\n $server.host:="pop.gmail.com" //Obligatorio\n $server.port:=995\n $server.user:="4d@gmail.com"\n $server.password:="XXXXXXXX"\n $server.logFile:="LogTest.txt" //log a registrar en la carpeta Logs\n\n var $transporter : 4D.POP3Transporter\n $transporter:=POP3 New transporter($server)\n\n $status:=$transporter.checkConnection()\n If(Not($status.success))\n    ALERT("An error occurred receiving the mail: "+$status.statusText)\n End if\n'})}),"\n",(0,t.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero de comando"}),(0,t.jsx)(r.td,{children:"1697"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Hilo seguro"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);