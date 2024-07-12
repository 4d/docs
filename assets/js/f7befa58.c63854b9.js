/*! For license information please see f7befa58.c63854b9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46265],{983877:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var t=s(474848),r=s(28453);const c={id:"WebSocketClass",title:"WebSocket"},i=void 0,d={id:"API/WebSocketClass",title:"WebSocket",description:"The WebSocket class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection.",source:"@site/versioned_docs/version-20-R5/API/WebSocketClass.md",sourceDirName:"API",slug:"/API/WebSocketClass",permalink:"/docs/20-R5/API/WebSocketClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebSocketClass",title:"WebSocket"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/20-R5/API/WebServerClass"},next:{title:"WebSocketConnection",permalink:"/docs/20-R5/API/WebSocketConnectionClass"}},l={},o=[{value:"Example",id:"example",level:3},{value:"WebSocket object",id:"websocket-object",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"<em>connectionHandler</em> parameter",id:"connectionhandler-parameter",level:3},{value:"Example",id:"example-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"Description",id:"description",level:4},{value:".handler",id:"handler",level:2},{value:"Description",id:"description-1",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-2",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-3",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"description-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"description-5",level:4},{value:".url",id:"url",level:2},{value:"Description",id:"description-6",level:4}];function h(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WebSocket"})," class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection."]}),"\n",(0,t.jsx)(n.p,{children:"WebSocket client connections are useful, for example, to receive financial data in real time or send and receive messages from a chat."}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R2"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we create a very basic WebSocket client."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create the ",(0,t.jsx)(n.code,{children:"WSConnectionHandler"})," user class containing callback function(s) used to handle WebSocket event callbacks:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler class\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("Connection closed")\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Connect to the WebSocket server from a 4D form by instantiating a 4D.WebSocket:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"To send messages to the WebSocket server from the 4D form, you can write:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'Form.webSocket.send("Hello world")\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"websocket-object",children:"WebSocket object"}),"\n",(0,t.jsx)(n.p,{children:"WebSocket objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#dataType",children:[(0,t.jsx)(n.strong,{children:".dataType"})," : Text"]}),(0,t.jsx)(n.br,{}),"the type of the response body content"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#handler",children:[(0,t.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,t.jsx)(n.br,{}),"the accessor that gets the ",(0,t.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#id",children:[(0,t.jsx)(n.strong,{children:".id"})," : Longint"]}),(0,t.jsx)(n.br,{}),"the unique identifier of the connection"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#send",children:[(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Blob )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Object )"]}),(0,t.jsx)(n.br,{}),"sends ",(0,t.jsx)(n.em,{children:"message"})," to the WebSocket server in the defined data type (Text, Blob, or Object)"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#status",children:[(0,t.jsx)(n.strong,{children:".status"})," : Text"]}),(0,t.jsx)(n.br,{}),'the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")']})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#terminate",children:[(0,t.jsx)(n.strong,{children:".terminate"}),"( { ",(0,t.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,t.jsx)(n.em,{children:"reason"})," : Text } } )"]}),(0,t.jsx)(n.br,{}),"closes the WebSocket connection, along with optional ",(0,t.jsx)(n.em,{children:"code"})," and ",(0,t.jsx)(n.em,{children:"reason"})," parameters"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#url",children:[(0,t.jsx)(n.strong,{children:".url"})," : Text"]}),(0,t.jsx)(n.br,{}),"the URL to which the WebSocket has connected"]})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"4dwebsocketnew",children:"4D.WebSocket.new()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R3"}),(0,t.jsxs)(n.td,{children:["Support of ",(0,t.jsx)(n.code,{children:"headers"})," property in ",(0,t.jsx)(n.em,{children:"connectionHandler"})]})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D.WebSocket.new"}),"( ",(0,t.jsx)(n.em,{children:"url"})," : Text { ; ",(0,t.jsx)(n.em,{children:"connectionHandler"})," : Object } ) : 4D.WebSocket"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"URL to which to connect"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#connectionHandler-parameter",children:"connectionHandler"})}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Object declaring WebSocket callbacks"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.WebSocket"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,t.jsxs)(n.td,{children:["New ",(0,t.jsx)(n.a,{href:"#websocket-object",children:"WebSocket object"})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"4D.WebSocket.new()"})," function creates and returns a new ",(0,t.jsxs)(n.a,{href:"#websocket-object",children:[(0,t.jsx)(n.code,{children:"4D.WebSocket"})," object"]})," connected to the WebSocket server at the address you passed in ",(0,t.jsx)(n.em,{children:"url"}),". The ",(0,t.jsx)(n.code,{children:"4D.WebSocket"})," object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"url"}),", pass the URL to which the WebSocket server will respond. The following URL patterns can be used:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ws://host[:port]path[?query]"})," for standard connections"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"wss://host[:port]path[?query]"})," for TLS secured connections"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the connection is not possible, a ",(0,t.jsx)(n.code,{children:"null"})," object is returned and an error is generated (that you can intercept using a method installed with ",(0,t.jsx)(n.code,{children:"ON ERR CALL"}),")."]}),"\n",(0,t.jsxs)(n.h3,{id:"connectionhandler-parameter",children:[(0,t.jsx)(n.em,{children:"connectionHandler"})," parameter"]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"connectionHandler"}),", you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Callbacks are automatically called in the context of the form or worker that initiates the connection."}),"\n",(0,t.jsx)(n.li,{children:"The WebSocket will be valid as long as the form or worker is not closed."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onMessage"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20-R5/API/FunctionClass",children:"Function"})}),(0,t.jsxs)(n.td,{children:["Callback function for WebSocket data. Called each time the WebSocket has received data. The callback receives the following parameters:",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2"}),": Object"]}),(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.type"}),' (text): always "message"']}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.data"})," (text, blob, or object, see ",(0,t.jsx)(n.code,{children:"dataType"}),"): Received data"]})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onError"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20-R5/API/FunctionClass",children:"Function"})}),(0,t.jsxs)(n.td,{children:["Callback function for execution errors. The callback receives the following parameters:",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2"}),": Object"]}),(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.type"}),' (text): always "error"']}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.errors"}),": collection of 4D errors stack in case of execution error.",(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[].errCode"})," (number): 4D error code"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[].message"})," (text): Description of the 4D error"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[].componentSignature"})," (text): Signature of the internal component which returned the error"]})]})]})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onTerminate"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20-R5/API/FunctionClass",children:"Function"})}),(0,t.jsxs)(n.td,{children:["Callback function when the WebSocket is terminated. The callback receives the following parameters:",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2"}),": Object"]}),(0,t.jsxs)(n.ul,{children:[(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.code"})," (number, read-only): unsigned short containing the close code sent by the server."]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.reason"})," (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol."]})]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onOpen"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20-R5/API/FunctionClass",children:"Function"})}),(0,t.jsxs)(n.td,{children:["Callback function when the websocket is open. The callback receives the following parameters:",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$1"}),": WebSocket object"]}),(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2"}),": Object"]}),(0,t.jsx)(n.ul,{children:(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$2.type"}),' (text): always "open"']})})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dataType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:'Type of the data received or sent. Available values: "text" (default), "blob", "object". "text" = utf-8'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"headers"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsxs)(n.td,{children:["Headers of the WebSocket.",(0,t.jsxs)(n.li,{children:["Syntax for standard key assignment: ",(0,t.jsx)(n.code,{children:"headers.*key*:=*value*"})," (",(0,t.jsx)(n.em,{children:"value"})," can be a Collection if the same key appears multiple times)"]}),(0,t.jsxs)(n.li,{children:["Syntax for Cookie assignment (particular case): ",(0,t.jsx)(n.code,{children:'headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"'})]})]})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Here is the sequence of callback calls:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onOpen"})," is executed once"]}),"\n",(0,t.jsxs)(n.li,{children:["Zero or several ",(0,t.jsx)(n.code,{children:"onMessage"})," are executed"]}),"\n",(0,t.jsxs)(n.li,{children:["Zero or one ",(0,t.jsx)(n.code,{children:"onError"})," is executed (stops the processing)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onTerminate"})," is always executed"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["You want to set headers in the ",(0,t.jsx)(n.code,{children:"WSConnectionHandler"})," user class:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler class\n\nClass constructor($myToken:Text)\n\n// Creation of the headers sent to the server\nThis.headers:=New object("x-authorization";$myToken)\n// We define two cookies\nThis.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"\n...\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"datatype",children:".dataType"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".dataType"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".dataType"}),' property contains the type of the response body content. It can be "text", "blob", or "object".']}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,t.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".handler"})," property contains the accessor that gets the ",(0,t.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection."]}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,t.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".id"})," : Longint"]}),"\n",(0,t.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".id"})," property contains the unique identifier of the connection."]}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,t.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Blob )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text, Blob, Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Message to be sent"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".send()"})," function sends ",(0,t.jsx)(n.em,{children:"message"})," to the WebSocket server in the defined data type (Text, Blob, or Object)."]}),"\n",(0,t.jsxs)(n.p,{children:["The following contents are sent depending on the ",(0,t.jsx)(n.em,{children:"message"})," type:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Content"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Text in UTF-8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Binary data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsxs)(n.td,{children:["Text in JSON UTF-8 (same result as with ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1217.html",children:(0,t.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".status"}),' property contains the current connection status (can be "Connecting", "Closing", "Closed", or "Connected").']}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,t.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".terminate"}),"( { ",(0,t.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,t.jsx)(n.em,{children:"reason"})," : Text } } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Status code explaining why the connection is being closed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"reason"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"The reason why the connection is closing"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".terminate()"})," function closes the WebSocket connection, along with optional ",(0,t.jsx)(n.em,{children:"code"})," and ",(0,t.jsx)(n.em,{children:"reason"})," parameters."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"code"}),", you can pass a status code explaining why the connection is being closed (see also ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5",children:"WebSocket Connection Close Code in the RFC6455"}),"):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed."}),"\n",(0,t.jsxs)(n.li,{children:["If specified, the value of this code parameter overrides the automatic setting. The value must be an integer. Either 1000, or a custom code in the range 3000-4999. If you specify a ",(0,t.jsx)(n.em,{children:"code"})," value, you should also specify a ",(0,t.jsx)(n.em,{children:"reason"})," value."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"reason"}),", you can pass a string describing why the connection is being closed."]}),"\n",(0,t.jsx)(n.h2,{id:"url",children:".url"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".url"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".url"})," property contains the URL to which the WebSocket has connected. It is the URL you passed to the ",(0,t.jsx)(n.a,{href:"#4dwebsocketnew",children:(0,t.jsx)(n.code,{children:"new()"})})," function."]}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var t,c={},o=null,h=null;for(t in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:o,ref:h,props:c,_owner:d.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);