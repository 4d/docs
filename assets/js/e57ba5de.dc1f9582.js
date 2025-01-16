"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23152"],{282088:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands/imap-new-transporter","title":"IMAP New transporter","description":"History","source":"@site/versioned_docs/version-20-R8/commands/imap-new-transporter.md","sourceDirName":"commands","slug":"/commands/imap-new-transporter","permalink":"/docs/commands/imap-new-transporter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fimap-new-transporter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"imap-new-transporter","title":"IMAP New transporter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Mail","permalink":"/docs/category/mail"},"next":{"title":"MAIL Convert from MIME","permalink":"/docs/commands/mail-convert-from-mime"}}'),t=r("785893"),i=r("250065");let o={id:"imap-new-transporter",title:"IMAP New transporter",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Result",id:"result",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMAP New transporter"}),"( ",(0,t.jsx)(n.em,{children:"server"})," : Object ) : 4D.IMAPTransporter"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"server"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,t.jsx)(n.td,{children:"Mail server information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.IMAPTransporter"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter object"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IMAP New transporter"})," command configures a new IMAP connection according to the ",(0,t.jsx)(n.em,{children:"server"})," parameter and returns a new ",(0,t.jsx)(n.em,{children:"transporter"})," object. The returned transporter object will then usually be used to receive emails."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"server"})," parameter, pass an object containing the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.em,{children:"server"})}),(0,t.jsx)(n.th,{children:"Default value (if omitted)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#acceptunsecureconnection",children:[(0,t.jsx)(n.strong,{children:".acceptUnsecureConnection"})," : Boolean"]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"True"})," if 4D is allowed to establish an unencrypted connection"]}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Text",(0,t.jsx)(n.br,{}),".",(0,t.jsx)(n.strong,{children:"accessTokenOAuth2"}),": Object",(0,t.jsx)(n.br,{}),"Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 ",(0,t.jsx)(n.code,{children:"authenticationMode"}),". If ",(0,t.jsx)(n.code,{children:"accessTokenOAuth2"})," is used but ",(0,t.jsx)(n.code,{children:"authenticationMode"})," is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#imap-transporter-object",children:"IMAP transporter"})})," object."]}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#authenticationmode",children:[(0,t.jsx)(n.strong,{children:".authenticationMode"})," : Text"]}),(0,t.jsx)(n.br,{}),"the authentication mode used to open the session on the mail server"]}),(0,t.jsx)(n.td,{children:"the most secure authentication mode supported by the server is used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#checkconnectiondelay",children:[(0,t.jsx)(n.strong,{children:".checkConnectionDelay"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the maximum time (in seconds) allowed prior to checking the connection to the server"]}),(0,t.jsx)(n.td,{children:"300"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#connectiontimeout",children:[(0,t.jsx)(n.strong,{children:".connectionTimeOut"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the maximum wait time (in seconds) allowed to establish a connection to the server"]}),(0,t.jsx)(n.td,{children:"30"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#host",children:[(0,t.jsx)(n.strong,{children:".host"})," : Text"]}),(0,t.jsx)(n.br,{}),"the name or the IP address of the host server"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"mandatory"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#logfile",children:[(0,t.jsx)(n.strong,{children:".logFile"})," : Text"]}),(0,t.jsx)(n.br,{}),"the path of the extended log file defined (if any) for the mail connection"]}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[".",(0,t.jsx)(n.strong,{children:"password"})," : Text",(0,t.jsx)(n.br,{}),"User password for authentication on the server. Not returned in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"#imap-transporter-object",children:"IMAP transporter"})})," object."]}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#port",children:[(0,t.jsx)(n.strong,{children:".port"})," : Integer"]}),(0,t.jsx)(n.br,{})," the port number used for mail transactions"]}),(0,t.jsx)(n.td,{children:"993"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"/docs/API/IMAPTransporterClass#user",children:[(0,t.jsx)(n.strong,{children:".user"})," : Text"]}),(0,t.jsx)(n.br,{})," the user name used for authentication on the mail server"]}),(0,t.jsx)(n.td,{children:"none"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning"}),": Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"result",children:"Result"}),"\n",(0,t.jsxs)(n.p,{children:["The function returns an ",(0,t.jsx)(n.a,{href:"/docs/API/IMAPTransporterClass#imap-transporter-object",children:(0,t.jsx)(n.strong,{children:"IMAP transporter object"})}),". All returned properties are ",(0,t.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The IMAP connection is automatically closed when the transporter object is destroyed."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$server:=New object\n$server.host:="imap.gmail.com" //Mandatory\n$server.port:=993\n$server.user:="4d@gmail.com"\n$server.password:="XXXXXXXX"\n$server.logFile:="LogTest.txt" //log to save in the Logs folder\n\nvar $transporter : 4D.IMAPTransporter\n $transporter:=IMAP New transporter($server)\n\n$status:=$transporter.checkConnection()\nIf(Not($status.success))\n   ALERT("An error occurred: "+$status.statusText)\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1723"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let t={},i=s.createContext(t);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);