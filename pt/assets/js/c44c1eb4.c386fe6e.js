"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99098"],{885053:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands/imap-new-transporter","title":"IMAP New transporter","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/imap-new-transporter.md","sourceDirName":"commands","slug":"/commands/imap-new-transporter","permalink":"/docs/pt/commands/imap-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fimap-new-transporter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"imap-new-transporter","title":"IMAP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Mail","permalink":"/docs/pt/category/mail"},"next":{"title":"MAIL Convert from MIME","permalink":"/docs/pt/commands/mail-convert-from-mime"}}'),t=r("785893"),o=r("250065");let d={id:"imap-new-transporter",title:"IMAP New transporter",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Resultados",id:"resultados",level:4},{value:"Exemplo",id:"exemplo",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMAP New transporter"}),"( ",(0,t.jsx)(n.em,{children:"server"})," : Object ) : 4D.IMAPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,t.jsx)(n.td,{children:"Informa\xe7\xe3o de servidor de correio"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultados"}),(0,t.jsx)(n.td,{children:"4D.IMAPTransporter"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter object"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.code,{children:"IMAP New transporter"})," configura uma nova conex\xe3o IMAP de acordo com o par\xe2metro ",(0,t.jsx)(n.em,{children:"server"})," e retorna um novo objeto ",(0,t.jsx)(n.em,{children:"transporter"}),". O objeto transporter retornado vai geralmente ser usado para receber emails."]}),"\n",(0,t.jsx)(n.p,{children:"No par\xe2metro server, passe um objeto contendo as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"server"})}),(0,t.jsx)(n.th,{children:"Valor padr\xe3o (se omitido)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection"]}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(n.br,{}),".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Objeto",(0,t.jsx)(n.br,{}),"Cadeia ou objeto token que representa as credenciais de autoriza\xe7\xe3o OAuth2. Usado somente com OAUTH2 ",(0,t.jsx)(n.code,{children:"authenticationMode"}),". Se ",(0,t.jsx)(n.code,{children:"accessTokenOAuth2"})," for usado, mas ",(0,t.jsx)(n.code,{children:"authenticationMode"})," for omitido, o protocolo OAuth 2 ser\xe1 usado (se permitido pelo servidor). N\xe3o retornado no objeto ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"})}),"."]}),(0,t.jsx)(n.td,{children:"nenhum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#authenticationmode",children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(n.br,{}),"the authentication mode used to open the session on the mail server"]}),(0,t.jsx)(n.td,{children:"o modo de autentica\xe7\xe3o mais seguro dispon\xedvel no servidor \xe9 usado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#checkconnectiondelay",children:[(0,t.jsx)(n.strong,{children:".checkConnectionDelay"})," : Integer"]}),(0,t.jsx)(n.br,{}),"o tempo m\xe1ximo (em segundos) permitido antes de verificar a conex\xe3o com o servidor"]}),(0,t.jsx)(n.td,{children:"300"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#connectiontimeout",children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the maximum wait time (in seconds) allowed to establish a connection to the server"]}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#host",children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),(0,t.jsx)(n.br,{}),"the name or the IP address of the host server"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"mandatory"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#logfile",children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(n.br,{}),"the path of the extended log file defined (if any) for the mail connection"]}),(0,t.jsx)(n.td,{children:"nenhum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"senha"})," : Texto",(0,t.jsx)(n.br,{}),"Senha do usu\xe1rio para autentica\xe7\xe3o no servidor. N\xe3o retornado no objeto ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"#imap-transporter-object",children:"IMAP transporter"})}),"."]}),(0,t.jsx)(n.td,{children:"nenhum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#port",children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(n.br,{})," the port number used for mail transactions"]}),(0,t.jsx)(n.td,{children:"993"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#user",children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),(0,t.jsx)(n.br,{})," the user name used for authentication on the mail server"]}),(0,t.jsx)(n.td,{children:"nenhum"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Aviso"}),": certifique-se de que o tempo limite definido seja menor que o tempo limite do servidor, caso contr\xe1rio, o tempo limite do cliente ser\xe1 in\xfatil."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"resultados",children:"Resultados"}),"\n",(0,t.jsxs)(n.p,{children:["A fun\xe7\xe3o retorna um ",(0,t.jsx)(n.a,{href:"/docs/pt/API/IMAPTransporterClass#imap-transportter-object",children:(0,t.jsx)(n.strong,{children:"objeto IMAP transporter"})}),". Todas as propriedades retornadas s\xe3o ",(0,t.jsx)(n.strong,{children:"apenas leitura"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A liga\xe7\xe3o IMAP \xe9 automaticamente fechada quando o objecto transportador \xe9 destru\xeddo."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$server:=New object\n$server.host:="imap.gmail.com" //Obrigat\xf3rio\n$server.port:=993\n$server.user:="4d@gmail.com"\n$server.password:="XXXXXXXX"\n$server.logFile:="LogTest.txt" //log para salvar na pasta Logs\n\nvar $transporter : 4D.IMAPTransporter\n $transporter:=IMAP New transporter($server)\n\n$status:=$transporter.checkConnection()\nIf(Not($status.success))\n   ALERT("An error occurred: "+$status.statusText)\nEnd if\n'})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let t={},o=s.createContext(t);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);