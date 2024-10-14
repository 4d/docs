"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70723],{65593:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=s(474848),c=s(28453);const t={id:"WebSocketClass",title:"WebSocket"},d=void 0,i={id:"API/WebSocketClass",title:"WebSocket",description:"The WebSocket class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/API/WebSocketClass.md",sourceDirName:"API",slug:"/API/WebSocketClass",permalink:"/docs/pt/API/WebSocketClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"WebSocketClass",title:"WebSocket"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/pt/API/WebServerClass"},next:{title:"WebSocketConnection",permalink:"/docs/pt/API/WebSocketConnectionClass"}},o={},l=[{value:"Exemplo",id:"exemplo",level:3},{value:"Objeto WebSocket",id:"objeto-websocket",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"Par\xe2metro <em>connectionHandler</em>",id:"par\xe2metro-connectionhandler",level:3},{value:"Exemplo",id:"exemplo-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".handler",id:"handler",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".id",id:"id",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".send()",id:"send",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".url",id:"url",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"WebSocket"})," class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection."]}),"\n",(0,r.jsx)(n.p,{children:"As liga\xe7\xf5es cliente WebSocket s\xe3o \xfateis, por exemplo, para receber dados financeiros em tempo real ou enviar e receber mensagens de um chat."}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Neste exemplo, criamos um cliente WebSocket muito b\xe1sico."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create the ",(0,r.jsx)(n.code,{children:"WSConnectionHandler"})," user class containing callback function(s) used to handle WebSocket event callbacks:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler class\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("Connection closed")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Conecte-se ao servidor WebSocket a partir de um formul\xe1rio 4D instanciando um 4D.WebSocket:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Para enviar mensagens para o servidor WebSocket a partir do formul\xe1rio 4D, pode escrever:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Form.webSocket.send("Hello world")\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"objeto-websocket",children:"Objeto WebSocket"}),"\n",(0,r.jsx)(n.p,{children:"Os objetos WebSocket fornecem as seguintes propriedades e fun\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#dataType",children:[(0,r.jsx)(n.strong,{children:".dataType"})," : Text"]}),(0,r.jsx)(n.br,{}),"the type of the response body content"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#handler",children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,r.jsx)(n.br,{}),"the accessor that gets the ",(0,r.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#id",children:[(0,r.jsx)(n.strong,{children:".id"})," : Longint"]}),(0,r.jsx)(n.br,{}),"the unique identifier of the connection"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),(0,r.jsx)(n.br,{}),"sends ",(0,r.jsx)(n.em,{children:"message"})," to the WebSocket server in the defined data type (Text, Blob, or Object)"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#status",children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),(0,r.jsx)(n.br,{}),'the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#terminate",children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"reason"})," : Text } } )"]}),(0,r.jsx)(n.br,{}),"closes the WebSocket connection, along with optional ",(0,r.jsx)(n.em,{children:"code"})," and ",(0,r.jsx)(n.em,{children:"reason"})," parameters"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#url",children:[(0,r.jsx)(n.strong,{children:".url"})," : Text"]}),(0,r.jsx)(n.br,{}),"the URL to which the WebSocket has connected"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4dwebsocketnew",children:"4D.WebSocket.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R3"}),(0,r.jsxs)(n.td,{children:["Suporte da propriedade ",(0,r.jsx)(n.code,{children:"headers"})," em ",(0,r.jsx)(n.em,{children:"connectionHandler"})]})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.WebSocket.new"}),"( ",(0,r.jsx)(n.em,{children:"url"})," : Text { ; ",(0,r.jsx)(n.em,{children:"connectionHandler"})," : Object } ) : 4D.WebSocket"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"URL a que se deve ligar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#connectionHandler-parameter",children:"connectionHandler"})}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Objeto que declara as chamadas de retorno WebSocket"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"4D.WebSocket"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["New ",(0,r.jsx)(n.a,{href:"#websocket-object",children:"WebSocket object"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"4D.WebSocket.new()"})," function creates and returns a new ",(0,r.jsxs)(n.a,{href:"#websocket-object",children:[(0,r.jsx)(n.code,{children:"4D.WebSocket"})," object"]})," connected to the WebSocket server at the address you passed in ",(0,r.jsx)(n.em,{children:"url"}),". The ",(0,r.jsx)(n.code,{children:"4D.WebSocket"})," object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"url"}),", passe o URL ao qual o servidor WebSocket responder\xe1. Podem ser utilizados os seguintes padr\xf5es de URL:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ws://host[:port]path[?query]"})," para liga\xe7\xf5es padr\xe3o"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"wss://host[:port]path[?query]"})," para conex\xf5es TLS seguras"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the connection is not possible, a ",(0,r.jsx)(n.code,{children:"null"})," object is returned and an error is generated (that you can intercept using a method installed with ",(0,r.jsx)(n.code,{children:"ON ERR CALL"}),")."]}),"\n",(0,r.jsxs)(n.h3,{id:"par\xe2metro-connectionhandler",children:["Par\xe2metro ",(0,r.jsx)(n.em,{children:"connectionHandler"})]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"connectionHandler"}),", you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"As chamadas de retorno s\xe3o chamadas automaticamente no contexto do formul\xe1rio ou do worker que inicia a liga\xe7\xe3o."}),"\n",(0,r.jsx)(n.li,{children:"O WebSocket ser\xe1 v\xe1lido enquanto o formul\xe1rio ou o worker n\xe3o for fechado."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onMessage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/pt/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fun\xe7\xe3o de retorno de chamada para dados WebSocket. Chamado sempre que o WebSocket tiver recebido dados. The callback receives the following parameters:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (text): always "message"']}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.data"})," (text, blob, or object, see ",(0,r.jsx)(n.code,{children:"dataType"}),"): Received data"]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onError"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/pt/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fun\xe7\xe3o de retorno de chamada para erros de execu\xe7\xe3o. The callback receives the following parameters:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (text): always "error"']}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.errors"}),": collection of 4D errors stack in case of execution error.",(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[].errCode"})," (number): 4D error code"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[].message"})," (text): Description of the 4D error"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[].componentSignature"})," (text): Signature of the internal component which returned the error"]})]})]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onTerminate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/pt/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fun\xe7\xe3o de retorno de chamada quando o WebSocket \xe9 terminado. The callback receives the following parameters:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.code"})," (number, read-only): unsigned short containing the close code sent by the server."]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.reason"})," (text, read-only): Reason why the server closed the connection. Isto \xe9 espec\xedfico do servidor e do subprotocolo em causa."]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onOpen"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/pt/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["Fun\xe7\xe3o de retorno de chamada quando o websocket est\xe1 aberto. The callback receives the following parameters:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsx)(n.ul,{children:(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (text): always "open"']})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataType"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'Tipo de dados recebidos ou enviados. Valores dispon\xedveis: "text" (padr\xe3o), "blob", "object". "text" = utf-8'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headers"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Headers of the WebSocket.",(0,r.jsxs)(n.li,{children:["Syntax for standard key assignment: ",(0,r.jsx)(n.code,{children:"headers.*key*:=*value*"})," (",(0,r.jsx)(n.em,{children:"value"})," can be a Collection if the same key appears multiple times)"]}),(0,r.jsxs)(n.li,{children:["Syntax for Cookie assignment (particular case): ",(0,r.jsx)(n.code,{children:'headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"'})]})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Aqui est\xe1 a sequ\xeancia de chamadas de retorno:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onOpen"})," \xe9 executado uma vez"]}),"\n",(0,r.jsxs)(n.li,{children:["S\xe3o executados zero ou v\xe1rios ",(0,r.jsx)(n.code,{children:"onMessage"})]}),"\n",(0,r.jsxs)(n.li,{children:["Zero ou um ",(0,r.jsx)(n.code,{children:"onError"})," \xe9 executado (p\xe1ra o processamento)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTerminate"})," \xe9 sempre executado uma vez"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["You want to set headers in the ",(0,r.jsx)(n.code,{children:"WSConnectionHandler"})," user class:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler class\n\nClass constructor($myToken:Text)\n\n// Creation of the headers sent to the server\nThis.headers:=New object("x-authorization";$myToken)\n// We define two cookies\nThis.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"\n...\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"datatype",children:".dataType"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".dataType"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".dataType"}),' property contains the type of the response body content. Pode ser "text", "blob" ou "object".']}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".handler"})," property contains the accessor that gets the ",(0,r.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection."]}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."}),"\n",(0,r.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".id"})," : Longint"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".id"})," property contains the unique identifier of the connection."]}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text, Blob, Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Mensagem a enviar"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".send()"})," function sends ",(0,r.jsx)(n.em,{children:"message"})," to the WebSocket server in the defined data type (Text, Blob, or Object)."]}),"\n",(0,r.jsxs)(n.p,{children:["Os conte\xfados seguintes s\xe3o enviados em fun\xe7\xe3o do tipo de ",(0,r.jsx)(n.em,{children:"message"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Conte\xfado"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Texto em UTF-8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Dados bin\xe1rios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Text in JSON UTF-8 (same result as with ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1217.html",children:(0,r.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".status"}),' property contains the current connection status (can be "Connecting", "Closing", "Closed", or "Connected").']}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."}),"\n",(0,r.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"reason"})," : Text } } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"C\xf3digo de estado que explica porque \xe9 que a liga\xe7\xe3o est\xe1 a ser encerrada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reason"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"O motivo pelo qual a liga\xe7\xe3o est\xe1 a fechar"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-5",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".terminate()"})," function closes the WebSocket connection, along with optional ",(0,r.jsx)(n.em,{children:"code"})," and ",(0,r.jsx)(n.em,{children:"reason"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"code"}),", you can pass a status code explaining why the connection is being closed (see also ",(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5",children:"WebSocket Connection Close Code in the RFC6455"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed."}),"\n",(0,r.jsxs)(n.li,{children:["Se especificado, o valor desse par\xe2metro de c\xf3digo substitui a configura\xe7\xe3o autom\xe1tica. O valor deve ser um n\xfamero inteiro. Ou 1000, ou um c\xf3digo personalizado no intervalo 3000-4999. Se voc\xea especificar um valor ",(0,r.jsx)(n.em,{children:"code"}),", tamb\xe9m dever\xe1 especificar um valor ",(0,r.jsx)(n.em,{children:"reason"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"reason"}),", you can pass a string describing why the connection is being closed."]}),"\n",(0,r.jsx)(n.h2,{id:"url",children:".url"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".url"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-6",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".url"})," property contains the URL to which the WebSocket has connected. \xc9 o URL que voc\xea passou para a fun\xe7\xe3o ",(0,r.jsx)(n.a,{href:"#4dwebsocketnew",children:(0,r.jsx)(n.code,{children:"new()"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Esta propriedade \xe9 s\xf3 de leitura."})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var r=s(296540);const c={},t=r.createContext(c);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);