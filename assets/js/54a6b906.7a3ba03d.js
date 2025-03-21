"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13506"],{788160:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"API/WebSocketConnectionClass","title":"WebSocketConnection","description":"The WebSocketConnection class API allows you to handle WebSocket connections, once established using the WebSocketServer class.","source":"@site/versioned_docs/version-20-R7/API/WebSocketConnectionClass.md","sourceDirName":"API","slug":"/API/WebSocketConnectionClass","permalink":"/docs/20-R7/API/WebSocketConnectionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"WebSocketConnectionClass","title":"WebSocketConnection"},"sidebar":"docs","previous":{"title":"WebSocket","permalink":"/docs/20-R7/API/WebSocketClass"},"next":{"title":"WebSocketServer","permalink":"/docs/20-R7/API/WebSocketServerClass"}}'),r=s("785893"),c=s("250065");let i={id:"WebSocketConnectionClass",title:"WebSocketConnection"},d=void 0,o={},l=[{value:"WebSocketConnection object",id:"websocketconnection-object",level:3},{value:".handler",id:"handler",level:2},{value:"Description",id:"description",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-1",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-2",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"description-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"description-4",level:4},{value:".wss",id:"wss",level:2},{value:"Description",id:"description-5",level:4}];function h(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"WebSocketConnection"})," class API allows you to handle WebSocket connections, once established using the ",(0,r.jsxs)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass",children:[(0,r.jsx)(n.code,{children:"WebSocketServer"})," class"]}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For an overview and some examples of the WebSocket server implementation in 4D, please refer to the ",(0,r.jsxs)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass",children:[(0,r.jsx)(n.code,{children:"WebSocketServer"})," class"]}),"."]})}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"websocketconnection-object",children:"WebSocketConnection object"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"WebSocketConnection"})," object is automatically created when the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass#wsshandler-parameter",children:(0,r.jsx)(n.code,{children:"WSHandler.onConnection"})})," callback function of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass#4dwebsocketservernew",children:"WebSocketServer object"})," returns a ",(0,r.jsx)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass#connectionhandler-object",children:(0,r.jsx)(n.code,{children:"connectionHandler"})})," object."]}),"\n",(0,r.jsx)(n.p,{children:"WebSocketConnection objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#handler",children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,r.jsx)(n.br,{}),"the accessor that gets the ",(0,r.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#id",children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),(0,r.jsx)(n.br,{}),"the unique identifier of the connection"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),(0,r.jsx)(n.br,{}),"sends a ",(0,r.jsx)(n.em,{children:"message"})," to the client"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#status",children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),(0,r.jsx)(n.br,{}),'the connection status (can be "Closing", "Closed" or  "Connected")']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#terminate",children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer ; ",(0,r.jsx)(n.em,{children:"message"})," : Text } )"]}),(0,r.jsx)(n.br,{}),"forces the connection to close"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#wss",children:[(0,r.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),(0,r.jsx)(n.br,{}),"the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass#4dwebsocketservernew",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})})," parent object of the connection"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".handler"})," property contains the accessor that gets the ",(0,r.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection."]}),"\n",(0,r.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".id"})," property contains the unique identifier of the connection."]}),"\n",(0,r.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text / Blob / Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"The message to send"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".send()"})," function sends a ",(0,r.jsx)(n.em,{children:"message"})," to the client."]}),"\n",(0,r.jsxs)(n.p,{children:["The following contents are sent depending on the ",(0,r.jsx)(n.em,{children:"message"})," type:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Content"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Text in UTF-8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Binary data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Text in JSON UTF-8 (same result as with ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html",children:(0,r.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".status"}),' property contains the connection status (can be "Closing", "Closed" or  "Connected").']}),"\n",(0,r.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,r.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer ; ",(0,r.jsx)(n.em,{children:"message"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Error code sent to the client (must be > 3000, otherwise the message is not sent)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Error message sent to the client"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".terminate()"})," function forces the connection to close."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.em,{children:"code"})," and ",(0,r.jsx)(n.em,{children:"message"})," can be sent to the client during the closure to indicate the reason of the termination."]}),"\n",(0,r.jsx)(n.h2,{id:"wss",children:".wss"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\n",(0,r.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".wss"})," property contains the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/API/WebSocketServerClass#4dwebsocketservernew",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})})," parent object of the connection."]}),"\n",(0,r.jsx)(n.p,{children:"This property is read-only."})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let r={},c=t.createContext(r);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);