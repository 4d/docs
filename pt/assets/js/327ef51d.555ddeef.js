"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16327"],{585877:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>d});var s=JSON.parse('{"id":"commands/pop3-new-transporter","title":"POP3 New transporter","description":"POP3 New transporter( server 4D.POP3Transporter","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/pop3-new-transporter.md","sourceDirName":"commands","slug":"/commands/pop3-new-transporter","permalink":"/docs/pt/commands/pop3-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fpop3-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pop3-new-transporter","title":"POP3 New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MAIL New attachment","permalink":"/docs/pt/commands/mail-new-attachment"},"next":{"title":"SMTP New transporter","permalink":"/docs/pt/commands/smtp-new-transporter"}}'),t=n("785893"),o=n("250065");let d={id:"pop3-new-transporter",title:"POP3 New transporter",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Resultados",id:"resultados",level:4},{value:"Exemplo",id:"exemplo",level:4}];function l(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"POP3 New transporter"}),"( ",(0,t.jsx)(r.em,{children:"server"})," : Object ) : 4D.POP3Transporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"server"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Informa\xe7\xe3o de servidor de correio"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"4D.POP3Transporter"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/pt/API/POP3TransporterClass#pop3-transporter-object",children:"POP3 transporter object"})})]})]})]}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Release"}),(0,t.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"18 R2"}),(0,t.jsx)(r.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"POP3 New transporter"})," command configures a new POP3 connectionaccording to the ",(0,t.jsx)(r.em,{children:"server"})," parameter and returns a new ",(0,t.jsx)(r.a,{href:"/docs/pt/API/POP3TransporterClass#pop3-transporter-object",children:"POP3 transporter"})," object. O objeto transporter retornado vai geralmente ser usado para receber emails."]}),"\n",(0,t.jsx)(r.p,{children:"No par\xe2metro server, passe um objeto contendo as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.em,{children:"server"})}),(0,t.jsx)(r.th,{children:"Valor padr\xe3o (se omitido)"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(r.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(r.br,{}),(0,t.jsx)(r.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection"]}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(r.br,{}),".",(0,t.jsx)(r.strong,{children:"accessTokenOAuth2"}),": Objeto",(0,t.jsx)(r.br,{}),"Cadeia ou objeto token que representa as credenciais de autoriza\xe7\xe3o OAuth2. Usado somente com OAUTH2 ",(0,t.jsx)(r.code,{children:"authenticationMode"}),". Se ",(0,t.jsx)(r.code,{children:"accessTokenOAuth2"})," for usado, mas ",(0,t.jsx)(r.code,{children:"authenticationMode"})," for omitido, o protocolo OAuth 2 ser\xe1 usado (se permitido pelo servidor). Not returned in ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/pt/API/POP3TransporterClass#smtptransporterobject",children:"SMTP transporter"})})," object."]}),(0,t.jsx)(r.td,{children:"nenhum"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#authenticationmode",children:[(0,t.jsx)(r.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(r.br,{}),"the authentication mode used to open the session on the mail server"]}),(0,t.jsx)(r.td,{children:"o modo de autentica\xe7\xe3o mais seguro dispon\xedvel no servidor \xe9 usado"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#connectiontimeout",children:[(0,t.jsx)(r.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(r.br,{}),"the maximum wait time (in seconds) allowed to establish a connection to the server"]}),(0,t.jsx)(r.td,{children:"30"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#host",children:[(0,t.jsx)(r.strong,{children:".host"})," : Text"]}),(0,t.jsx)(r.br,{}),"the name or the IP address of the host server"]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"mandatory"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#logfile",children:[(0,t.jsx)(r.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(r.br,{}),"the path of the extended log file defined (if any) for the mail connection"]}),(0,t.jsx)(r.td,{children:"nenhum"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.strong,{children:".password"})," : Text",(0,t.jsx)(r.br,{}),"Senha do usu\xe1rio para autentica\xe7\xe3o no servidor. Not returned in ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.a,{href:"/docs/pt/API/POP3TransporterClass#smtptransporterobject",children:"SMTP transporter"})})," object."]}),(0,t.jsx)(r.td,{children:"nenhum"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#port",children:[(0,t.jsx)(r.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(r.br,{})," the port number used for mail transactions"]}),(0,t.jsx)(r.td,{children:"995"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.a,{href:"/docs/pt/API/POP3TransporterClass#user",children:[(0,t.jsx)(r.strong,{children:".user"})," : Text"]}),(0,t.jsx)(r.br,{})," the user name used for authentication on the mail server"]}),(0,t.jsx)(r.td,{children:"nenhum"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"resultados",children:"Resultados"}),"\n",(0,t.jsxs)(r.p,{children:["The function returns a ",(0,t.jsx)(r.a,{href:"/docs/pt/API/POP3TransporterClass#pop3-transporter-object",children:(0,t.jsx)(r.strong,{children:"POP3 transporter object"})}),". Todas as propriedades retornadas s\xe3o ",(0,t.jsx)(r.strong,{children:"apenas leitura"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"A conex\xe3o POP3 \xe9 fechada automaticamente quando o objeto transportador for destru\xeddo."}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' var $server : Object\n $server:=New object\n $server.host:="pop.gmail.com" //Obrigat\xf3rio\n $server.port:=995\n $server.user:="4d@gmail.com"\n $server.password:="XXXXXXXX"\n $server.logFile:="LogTest.txt" //hist\xf3rico para salvar na pasta Logs\n\n var $transporter : 4D.POP3Transporter\n $transporter:=POP3 New transporter($server)\n\n $status:=$transporter.checkConnection()\n If(Not($status.success))\n    ALERT("An error occurred receiving the mail: "+$status.statusText)\n End if\n'})})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);