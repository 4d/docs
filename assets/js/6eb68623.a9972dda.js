/*! For license information please see 6eb68623.a9972dda.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41023],{952149:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=s(474848),r=s(28453);const c={id:"WebSocketConnectionClass",title:"WebSocketConnection"},i=void 0,d={id:"API/WebSocketConnectionClass",title:"WebSocketConnection",description:"The WebSocketConnection class API allows you to handle WebSocket connections, once established using the WebSocketServer class.",source:"@site/versioned_docs/version-20-R5/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/20-R5/API/WebSocketConnectionClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebSocket",permalink:"/docs/20-R5/API/WebSocketClass"},next:{title:"WebSocketServer",permalink:"/docs/20-R5/API/WebSocketServerClass"}},o={},l=[{value:"WebSocketConnection object",id:"websocketconnection-object",level:3},{value:".handler",id:"handler",level:2},{value:"Description",id:"description",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-1",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-2",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"description-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"description-4",level:4},{value:".wss",id:"wss",level:2},{value:"Description",id:"description-5",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WebSocketConnection"})," class API allows you to handle WebSocket connections, once established using the ",(0,t.jsxs)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass",children:[(0,t.jsx)(n.code,{children:"WebSocketServer"})," class"]}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For an overview and some examples of the WebSocket server implementation in 4D, please refer to the ",(0,t.jsxs)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass",children:[(0,t.jsx)(n.code,{children:"WebSocketServer"})," class"]}),"."]})}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"websocketconnection-object",children:"WebSocketConnection object"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"WebSocketConnection"})," object is automatically created when the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass#wsshandler-parameter",children:(0,t.jsx)(n.code,{children:"WSHandler.onConnection"})})," callback function of the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass#4dwebsocketservernew",children:"WebSocketServer object"})," returns a ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass#connectionhandler-object",children:(0,t.jsx)(n.code,{children:"connectionHandler"})})," object."]}),"\n",(0,t.jsx)(n.p,{children:"WebSocketConnection objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#handler",children:[(0,t.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,t.jsx)(n.br,{}),"the accessor that gets the ",(0,t.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#id",children:[(0,t.jsx)(n.strong,{children:".id"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the unique identifier of the connection"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#send()",children:[(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Blob )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Object )"]}),(0,t.jsx)(n.br,{}),"sends a ",(0,t.jsx)(n.em,{children:"message"})," to the client"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#status",children:[(0,t.jsx)(n.strong,{children:".status"})," : Text"]}),(0,t.jsx)(n.br,{}),'the connection status (can be "Closing", "Closed" or  "Connected")']})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#terminate()",children:[(0,t.jsx)(n.strong,{children:".terminate"}),"( { ",(0,t.jsx)(n.em,{children:"code"})," : Integer ; ",(0,t.jsx)(n.em,{children:"message"})," : Text } )"]}),(0,t.jsx)(n.br,{}),"forces the connection to close"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#wss",children:[(0,t.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),(0,t.jsx)(n.br,{}),"the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass#4dwebsocketservernew",children:(0,t.jsx)(n.code,{children:"WebSocketServer"})})," parent object of the connection"]})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".handler"})," property contains the accessor that gets the ",(0,t.jsx)(n.code,{children:"connectionHandler"})," object used to initiate the connection."]}),"\n",(0,t.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".id"})," property contains the unique identifier of the connection."]}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,t.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Blob )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:".send"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text / Blob / Object"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"The message to send"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".send()"})," function sends a ",(0,t.jsx)(n.em,{children:"message"})," to the client."]}),"\n",(0,t.jsxs)(n.p,{children:["The following contents are sent depending on the ",(0,t.jsx)(n.em,{children:"message"})," type:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Content"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Text in UTF-8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Binary data"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsxs)(n.td,{children:["Text in JSON UTF-8 (same result as with ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html",children:(0,t.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,t.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".status"}),' property contains the connection status (can be "Closing", "Closed" or  "Connected").']}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."}),"\n",(0,t.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".terminate"}),"( { ",(0,t.jsx)(n.em,{children:"code"})," : Integer ; ",(0,t.jsx)(n.em,{children:"message"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"}}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Error code sent to the client (must be > 3000, otherwise the message is not sent)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,t.jsx)(n.td,{children:"Error message sent to the client"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".terminate()"})," function forces the connection to close."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"code"})," and ",(0,t.jsx)(n.em,{children:"message"})," can be sent to the client during the closure to indicate the reason of the termination."]}),"\n",(0,t.jsx)(n.h2,{id:"wss",children:".wss"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\n",(0,t.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".wss"})," property contains the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/API/WebSocketServerClass#4dwebsocketservernew",children:(0,t.jsx)(n.code,{children:"WebSocketServer"})})," parent object of the connection."]}),"\n",(0,t.jsx)(n.p,{children:"This property is read-only."})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var t,c={},l=null,h=null;for(t in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,t)&&!o.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:l,ref:h,props:c,_owner:d.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);