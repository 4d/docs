"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60140],{614008:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(474848),d=s(28453);const t={id:"WebSocketConnectionClass",title:"WebSocketConnection"},i=void 0,c={id:"API/WebSocketConnectionClass",title:"WebSocketConnection",description:"Hist\xf3rico",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/pt/20/API/WebSocketConnectionClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/pt/20/API/WebServerClass"},next:{title:"WebSocketServer",permalink:"/docs/pt/20/API/WebSocketServerClass"}},o={},l=[{value:"Objecto WebSocketConnection",id:"objecto-websocketconnection",level:3},{value:".handler",id:"handler",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".id",id:"id",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".send()",id:"send",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".wss",id:"wss",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A API da classe ",(0,r.jsx)(n.code,{children:"WebSocketConnection"})," permite-lhe tratar as liga\xe7\xf5es WebSocket, uma vez estabelecidas utilizando a classe ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Para uma vis\xe3o geral e alguns exemplos da implementa\xe7\xe3o do servidor WebSocket em 4D, consulte a classe ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"objecto-websocketconnection",children:"Objecto WebSocketConnection"}),"\n",(0,r.jsxs)(n.p,{children:["Um objeto ",(0,r.jsx)(n.code,{children:"WebSocketConnection"})," \xe9 automaticamente criado quando a fun\xe7\xe3o de retorno de chamada ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass#wsshandler-parameter",children:(0,r.jsx)(n.code,{children:"WSHandler.onConnection"})})," do objecto ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass#4dwebsocketservernew",children:"WebSocketServer"})," devolve um objecto ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass#connectionhandler-object",children:(0,r.jsx)(n.code,{children:"connectionHandler"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Os objectos Httprequest fornecem as seguintes propriedades e fun\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#handler",children:[(0,r.jsx)(n.strong,{children:".handler"})," : Objecto"]}),"\xa0\xa0\xa0\xa0o acessor que obt\xe9m o objecto ",(0,r.jsx)(n.code,{children:"connectionHandler"})," utilizado para iniciar a liga\xe7\xe3o"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#id",children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),"\xa0\xa0\xa0\xa0o identificador \xfanico da liga\xe7\xe3o"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send()",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\xa0\xa0\xa0\xa0envia uma ",(0,r.jsx)(n.em,{children:"mensagem"})," ao cliente"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#status",children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),'\xa0\xa0\xa0\xa0o estado da liga\xe7\xe3o (pode ser "Closing", "Closed" ou "Connected")']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#terminate()",children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer ; ",(0,r.jsx)(n.em,{children:"message"})," : Text } )"]}),"\xa0\xa0\xa0\xa0for\xe7a o encerramento da liga\xe7\xe3o"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#wss",children:[(0,r.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\xa0\xa0\xa0\xa0o ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass#4dwebsocketservernew",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})})," objecto pai da liga\xe7\xe3o"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".handler"})," : Objecto"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".handler"})," property contains o acessor que obt\xe9m o objecto ",(0,r.jsx)(n.code,{children:"connectionHandler"})," utilizado para iniciar a liga\xe7\xe3o."]}),"\n",(0,r.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".id"})," cont\xe9m o identificador \xfanico da liga\xe7\xe3o."]}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text / Blob / Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"A mensagem a enviar"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".send()"})," envia uma ",(0,r.jsx)(n.em,{children:"mensagem"})," ao cliente."]}),"\n",(0,r.jsxs)(n.p,{children:["Os conte\xfados seguintes s\xe3o enviados em fun\xe7\xe3o do tipo de ",(0,r.jsx)(n.em,{children:"mensagem"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Conte\xfado"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Texto em UTF-8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Dados bin\xe1rios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Texto em JSON UTF-8 (o mesmo resultado que com ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html",children:(0,r.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".status"}),' cont\xe9m o estado da liga\xe7\xe3o (pode ser "Closing", "Closed" ou "Connected").']}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."}),"\n",(0,r.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer ; ",(0,r.jsx)(n.em,{children:"message"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"C\xf3digo de erro enviado ao cliente (deve ser > 3000, caso contr\xe1rio a mensagem n\xe3o \xe9 enviada)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Mensagem de erro enviada ao cliente"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".terminate()"})," for\xe7a o encerramento da liga\xe7\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:["Um ",(0,r.jsx)(n.em,{children:"code"})," e uma ",(0,r.jsx)(n.em,{children:"message"})," podem ser enviados ao cliente durante o encerramento para indicar o motivo da rescis\xe3o."]}),"\n",(0,r.jsx)(n.h2,{id:"wss",children:".wss"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".wss"})," cont\xe9m o ",(0,r.jsx)(n.a,{href:"/docs/pt/20/API/WebSocketServerClass#4dwebsocketservernew",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})})," objecto pai da liga\xe7\xe3o."]}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(296540);const d={},t=r.createContext(d);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);