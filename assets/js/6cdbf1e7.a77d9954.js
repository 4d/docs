"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65163],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=c(n),m=r,u=k["".concat(p,".").concat(m)]||k[m]||d[m]||l;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},666329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"WebSocketClass",title:"WebSocket"},i=void 0,p={unversionedId:"API/WebSocketClass",id:"version-20-R2/API/WebSocketClass",title:"WebSocket",description:"History",source:"@site/versioned_docs/version-20-R2/API/WebSocketClass.md",sourceDirName:"API",slug:"/API/WebSocketClass",permalink:"/docs/20-R2/API/WebSocketClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"WebSocketClass",title:"WebSocket"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/20-R2/API/WebServerClass"},next:{title:"WebSocketConnection",permalink:"/docs/20-R2/API/WebSocketConnectionClass"}},c={},s=[{value:"Example",id:"example",level:3},{value:"WebSocket object",id:"websocket-object",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"<em>connectionHandler</em> parameter",id:"connectionhandler-parameter",level:3},{value:"Example",id:"example-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"Description",id:"description",level:4},{value:".handler",id:"handler",level:2},{value:"Description",id:"description-1",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"description-2",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-3",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"description-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"description-5",level:4},{value:".url",id:"url",level:2},{value:"Description",id:"description-6",level:4}],d={toc:s};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Version"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"v20 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocket")," class allows you to open a WebSocket client connection with a server, send and receive data, and close the connection."),(0,a.kt)("p",null,"WebSocket client connections are useful, for example, to receive financial data in real time or send and receive messages from a chat."),(0,a.kt)("h3",r({},{id:"example"}),"Example"),(0,a.kt)("p",null,"In this example, we create a very basic WebSocket client."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},"WSConnectionHandler")," user class containing callback function(s) used to handle WebSocket event callbacks:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// WSConnectionHandler class\n\nClass constructor\n    \nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("Connection closed")\n')),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Connect to the WebSocket server from a 4D form by instantiating a 4D.WebSocket:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n")),(0,a.kt)("ol",r({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"To send messages to the WebSocket server from the 4D form, you can write:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'Form.webSocket.send("Hello world")\n\n')),(0,a.kt)("h3",r({},{id:"websocket-object"}),"WebSocket object"),(0,a.kt)("p",null,"WebSocket objects provide the following properties and functions:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#dataType"}),(0,a.kt)("strong",{parentName:"a"},".dataType")," : Text"),"\xa0","\xa0","\xa0","\xa0","the type of the response body content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#handler"}),(0,a.kt)("strong",{parentName:"a"},".handler")," : Object"),"\xa0","\xa0","\xa0","\xa0","the accessor that gets the ",(0,a.kt)("inlineCode",{parentName:"td"},"connectionHandler")," object used to initiate the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#id"}),(0,a.kt)("strong",{parentName:"a"},".id")," : Longint"),"\xa0","\xa0","\xa0","\xa0","the unique identifier of the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#send"}),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Object )"),"\xa0","\xa0","\xa0","\xa0","sends ",(0,a.kt)("em",{parentName:"td"},"message")," to the WebSocket server in the defined data type (Text, Blob, or Object)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#status"}),(0,a.kt)("strong",{parentName:"a"},".status")," : Text"),"\xa0","\xa0","\xa0","\xa0",'the current connection status (can be "Connecting", "Closing", "Closed", or "Connected")')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#terminate"}),(0,a.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"a"},"code")," : Integer { ; ",(0,a.kt)("em",{parentName:"a"},"reason")," : Text } } )"),"\xa0","\xa0","\xa0","\xa0","closes the WebSocket connection, along with optional ",(0,a.kt)("em",{parentName:"td"},"code")," and ",(0,a.kt)("em",{parentName:"td"},"reason")," parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#url"}),(0,a.kt)("strong",{parentName:"a"},".url")," : Text"),"\xa0","\xa0","\xa0","\xa0")))),(0,a.kt)("h2",r({},{id:"4dwebsocketnew"}),"4D.WebSocket.new()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4D.WebSocket.new"),"( ",(0,a.kt)("em",{parentName:"p"},"url")," : Text { ; ",(0,a.kt)("em",{parentName:"p"},"connectionHandler")," : Object } ) : 4D.WebSocket"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"url"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"URL to which to connect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#connectionHandler-parameter"}),"connectionHandler")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object declaring WebSocket callbacks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.WebSocket"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"New ",(0,a.kt)("a",r({parentName:"td"},{href:"#websocket-object"}),"WebSocket object"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebSocket.new()")," function creates and returns a new ",(0,a.kt)("a",r({parentName:"p"},{href:"#websocket-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"4D.WebSocket")," object")," connected to the WebSocket server at the address you passed in ",(0,a.kt)("em",{parentName:"p"},"url"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebSocket")," object provides an API for creating and managing a WebSocket connection to a server, as well as sending and receiving data to and from the server."),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"url"),", pass the URL to which the WebSocket server will respond. The following URL patterns can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ws://host[:port]path[?query]")," for standard connections"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wss://host[:port]path[?query]")," for TLS secured connections")),(0,a.kt)("p",null,"If the connection is not possible, a ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," object is returned and an error is generated (that you can intercept using a method installed with ",(0,a.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),"). "),(0,a.kt)("h3",r({},{id:"connectionhandler-parameter"}),(0,a.kt)("em",{parentName:"h3"},"connectionHandler")," parameter"),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"connectionHandler"),", you can pass an object containing callback functions to be called according to connection events, and data type to handle. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Callbacks are automatically called in the context of the form or worker that initiates the connection. "),(0,a.kt)("li",{parentName:"ul"},"The WebSocket will be valid as long as the form or worker is not closed.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onMessage"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/20-R2/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback function for WebSocket data. Called each time the WebSocket has received data. The callback receives the following parameters:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket object"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): always "message"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.data")," (text, blob, or object, see ",(0,a.kt)("inlineCode",{parentName:"td"},"dataType"),"): Received data")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onError"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/20-R2/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback function for execution errors. The callback receives the following parameters:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket object"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): always "error"'),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.errors"),": collection of 4D errors stack in case of execution error.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"[].errCode")," (number): 4D error code"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"[].message")," (text): Description of the 4D error"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"[].componentSignature")," (text): Signature of the internal component which returned the error")))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onTerminate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/20-R2/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback function when the WebSocket is terminated. The callback receives the following parameters:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket object"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.code")," (number, read-only): unsigned short containing the close code sent by the server."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.reason")," (text, read-only): Reason why the server closed the connection. This is specific to the particular server and sub-protocol."),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.wasClean")," (boolean, read-only): Indicates whether or not the connection was cleanly closed.")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"onOpen"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"/docs/20-R2/API/FunctionClass"}),"Function")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Callback function when the websocket is open. The callback receives the following parameters:",(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$1"),": WebSocket object"),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): always "open"')))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"dataType"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'Type of the data received or sent. Available values: "text" (default), "blob", "object". "text" = utf-8')))),(0,a.kt)("p",null,"Here is the sequence of callback calls:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onOpen")," is executed once"),(0,a.kt)("li",{parentName:"ol"},"Zero or several ",(0,a.kt)("inlineCode",{parentName:"li"},"onMessage")," are executed"),(0,a.kt)("li",{parentName:"ol"},"Zero or one ",(0,a.kt)("inlineCode",{parentName:"li"},"onError")," is executed (stops the processing)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"onTerminate")," is always executed")),(0,a.kt)("h4",r({},{id:"example-1"}),"Example"),(0,a.kt)("h2",r({},{id:"datatype"}),".dataType"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".dataType")," : Text"),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".dataType"),' property contains the type of the response body content. It can be "text", "blob", or "object".'),(0,a.kt)("p",null,"This property is read-only."),(0,a.kt)("h2",r({},{id:"handler"}),".handler"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".handler")," : Object"),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".handler")," property contains the accessor that gets the ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionHandler")," object used to initiate the connection."),(0,a.kt)("p",null,"This property is read-only."),(0,a.kt)("h2",r({},{id:"id"}),".id"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".id")," : Longint"),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".id")," property contains the unique identifier of the connection."),(0,a.kt)("p",null,"This property is read-only."),(0,a.kt)("h2",r({},{id:"send"}),".send()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Object )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text, Blob, Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Message to be sent")))),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".send()")," function sends ",(0,a.kt)("em",{parentName:"p"},"message")," to the WebSocket server in the defined data type (Text, Blob, or Object). "),(0,a.kt)("p",null,"The following contents are sent depending on the ",(0,a.kt)("em",{parentName:"p"},"message")," type:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Content"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text in UTF-8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Binary data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text in JSON UTF-8 (same result as with ",(0,a.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"JSON Stringify")),")")))),(0,a.kt)("h2",r({},{id:"status"}),".status"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".status")," : Text"),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".status"),' property contains the current connection status (can be "Connecting", "Closing", "Closed", or "Connected").'),(0,a.kt)("p",null,"This property is read-only."),(0,a.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"p"},"code")," : Integer { ; ",(0,a.kt)("em",{parentName:"p"},"reason")," : Text } } )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Status code explaining why the connection is being closed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"reason"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"The reason why the connection is closing")))),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".terminate()")," function closes the WebSocket connection, along with optional ",(0,a.kt)("em",{parentName:"p"},"code")," and ",(0,a.kt)("em",{parentName:"p"},"reason")," parameters."),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"code"),", you can pass a status code explaining why the connection is being closed (see also ",(0,a.kt)("a",r({parentName:"p"},{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5"}),"WebSocket Connection Close Code in the RFC6455"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed."),(0,a.kt)("li",{parentName:"ul"},"If specified, the value of this code parameter overrides the automatic setting. The value must be an integer. Either 1000, or a custom code in the range 3000-4999. If you specify a ",(0,a.kt)("em",{parentName:"li"},"code")," value, you should also specify a ",(0,a.kt)("em",{parentName:"li"},"reason")," value.")),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"reason"),", you can pass a string describing why the connection is being closed. "),(0,a.kt)("h2",r({},{id:"url"}),".url"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".url")," : Text"),(0,a.kt)("h4",r({},{id:"description-6"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".url")," property contains the URL to which the WebSocket has connected. It is the URL you passed to the ",(0,a.kt)("a",r({parentName:"p"},{href:"#4dwebsocketnew"}),(0,a.kt)("inlineCode",{parentName:"a"},"new()"))," function."),(0,a.kt)("p",null,"This property is read-only."))}k.isMDXComponent=!0}}]);