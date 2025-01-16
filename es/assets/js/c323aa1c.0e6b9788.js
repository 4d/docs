"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31988"],{100825:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/imap-new-transporter","title":"IMAP New transporter","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/imap-new-transporter.md","sourceDirName":"commands","slug":"/commands/imap-new-transporter","permalink":"/docs/es/20-R7/commands/imap-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fimap-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"imap-new-transporter","title":"IMAP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Mail","permalink":"/docs/es/20-R7/category/mail"},"next":{"title":"MAIL Convert from MIME","permalink":"/docs/es/20-R7/commands/mail-convert-from-mime"}}'),t=r("785893"),o=r("250065");let i={id:"imap-new-transporter",title:"IMAP New transporter",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Result",id:"result",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMAP New transporter"}),"( ",(0,t.jsx)(n.em,{children:"server"})," : Object ) : 4D.IMAPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,t.jsx)(n.td,{children:"Informaci\xf3n del servidor de correo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.IMAPTransporter"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter object"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"IMAP New transporter"})," configura una nueva conexi\xf3n IMAP seg\xfan el par\xe1metro ",(0,t.jsx)(n.em,{children:"server"})," y devuelve un nuevo objeto ",(0,t.jsx)(n.em,{children:"transporter"}),". El objeto transportador devuelto se utilizar\xe1 normalmente para recibir correos electr\xf3nicos."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"server"}),", pase un objeto que contenga las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"server"})}),(0,t.jsx)(n.th,{children:"Valor por defecto (si se omite)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," si se autoriza a 4D establecer una conexi\xf3n no cifrada"]}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(n.br,{}),".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Object",(0,t.jsx)(n.br,{}),"Cadena u objeto token que representa las credenciales de autorizaci\xf3n OAuth2. Utilizado s\xf3lo con OAUTH2 ",(0,t.jsx)(n.code,{children:"authationMode"}),". Si se utiliza ",(0,t.jsx)(n.code,{children:"accessTokenOAuth2"})," pero se omite ",(0,t.jsx)(n.code,{children:"authenticationMode"}),", se utiliza el protocolo OAuth 2 (si el servidor lo permite). No se devuelve en el objeto ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"})}),"."]}),(0,t.jsx)(n.td,{children:"ninguno"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#authenticationmode",children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(n.br,{}),"el modo de autenticaci\xf3n utilizado para abrir la sesi\xf3n en el servidor de correo"]}),(0,t.jsx)(n.td,{children:"se utiliza el modo de autenticaci\xf3n m\xe1s seguro soportado por el servidor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#checkconnectiondelay",children:[(0,t.jsx)(n.strong,{children:".checkConnectionDelay"})," : Integer"]}),(0,t.jsx)(n.br,{}),"el tiempo m\xe1ximo (en segundos) permitido antes de verificar la conexi\xf3n con el servidor"]}),(0,t.jsx)(n.td,{children:"300"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#connectiontimeout",children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{}),"el tiempo m\xe1ximo de espera (en segundos) permitido para establecer una conexi\xf3n con el servidor"]}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#host",children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),(0,t.jsx)(n.br,{}),"el nombre o la direcci\xf3n IP del servidor local"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"obligatorio"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#logfile",children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(n.br,{}),"la ruta del archivo de registro extendido definido (si existe) para la conexi\xf3n de correo"]}),(0,t.jsx)(n.td,{children:"ninguno"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"password"})," : Text",(0,t.jsx)(n.br,{}),"contrase\xf1a de usuario para la autenticaci\xf3n en el servidor. No se devuelve en el objeto ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"#imap-transporter-object",children:"IMAP transporter"})}),"."]}),(0,t.jsx)(n.td,{children:"ninguno"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#port",children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(n.br,{})," el n\xfamero de puerto utilizado para las transacciones de correo"]}),(0,t.jsx)(n.td,{children:"993"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#user",children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),(0,t.jsx)(n.br,{})," el nombre de usuario utilizado para la autenticaci\xf3n en el servidor de correo"]}),(0,t.jsx)(n.td,{children:"ninguno"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Atenci\xf3n"}),": aseg\xfarese de que el tiempo de espera definido sea menor que el tiempo de espera del servidor, de lo contrario el tiempo de espera del cliente ser\xe1 in\xfatil."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"result",children:"Result"}),"\n",(0,t.jsxs)(n.p,{children:["La funci\xf3n devuelve un ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/API/IMAPTransporterClass#imap-transporter-object",children:(0,t.jsx)(n.strong,{children:"objeto IMAP transporter"})}),". Todas las propiedades devueltas son de s\xf3lo lectura**."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"La conexi\xf3n IMAP se cierra autom\xe1ticamente cuando se destruye el objeto transportador."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$server:=New object\n$server.host:="imap.gmail.com" //Obligatorio\n$server.port:=993\n$server.user:="4d@gmail.com"\n$server.password:="XXXXXXXX"\n$server.logFile:="LogTest.txt" //log a guardar en la carpeta Logs\n\nvar $transporter : 4D.IMAPTransporter\n $transporter:=IMAP New transporter($server)\n\n$status:=$transporter.checkConnection()\nIf(Not($status.success))\n   ALERT("An error occurred: "+$status.statusText)\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1723"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);