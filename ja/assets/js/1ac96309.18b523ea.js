"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23786"],{643528:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"API/TCPConnectionClass","title":"TCPConnection","description":"The TCPConnection class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks.","source":"@site/versioned_docs/version-20-R8/API/TCPConnectionClass.md","sourceDirName":"API","slug":"/API/TCPConnectionClass","permalink":"/docs/ja/API/TCPConnectionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTCPConnectionClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"TCPConnectionClass","title":"TCPConnection"},"sidebar":"docs","previous":{"title":"SystemWorker","permalink":"/docs/ja/API/SystemWorkerClass"},"next":{"title":"TCPEvent","permalink":"/docs/ja/API/TCPEventClass"}}'),i=t("785893"),r=t("250065");let c={id:"TCPConnectionClass",title:"TCPConnection"},o=void 0,d={},l=[{value:"Examples",id:"examples",level:3},{value:"Synchronous Example",id:"synchronous-example",level:4},{value:"Asynchronous Example",id:"asynchronous-example",level:4},{value:"Usage example",id:"usage-example",level:5},{value:"TCPConnection Object",id:"tcpconnection-object",level:3},{value:"4D.TCPConnection.new()",id:"4dtcpconnectionnew",level:2},{value:"Description",id:"description",level:4},{value:"<code>options</code> parameter",id:"options-parameter",level:4},{value:"Callback functions",id:"callback-functions",level:4},{value:"TCPEvent object",id:"tcpevent-object",level:4},{value:".closed",id:"closed",level:2},{value:"Description",id:"description-1",level:4},{value:".errors",id:"errors",level:2},{value:"Description",id:"description-2",level:4},{value:".noDelay",id:"nodelay",level:2},{value:"Description",id:"description-3",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"description-4",level:4},{value:".shutdown()",id:"shutdown",level:2},{value:"Description",id:"description-5",level:4},{value:".wait()",id:"wait",level:2},{value:"Description",id:"description-6",level:4}];function h(n){let e={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"TCPConnection"})," class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks."]}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"TCPConnection"})," class is available from the ",(0,i.jsx)(e.code,{children:"4D"})," class store. You can create a TCP connection using the ",(0,i.jsx)(e.a,{href:"#4dtcpconnectionnew",children:"4D.TCPConnection.new()"})," function, which returns a ",(0,i.jsx)(e.a,{href:"#tcpconnection-object",children:"TCPConnection object"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["All ",(0,i.jsx)(e.code,{children:"TCPConnection"})," class functions are thread-safe."]}),"\n",(0,i.jsxs)(e.p,{children:["Thanks to the standard 4D object ",(0,i.jsx)(e.em,{children:"refcounting"}),", a TCPConnection is automatically released when it is no longer referenced. Consequently, the associated resources, are properly cleaned up without requiring explicit closure."]}),"\n",(0,i.jsxs)(e.p,{children:['TCPConnection objects are released when no more references to them exist in memory. This typically occurs, for example, at the end of a method execution for local variables. If you want to "force" the closure of a connection at any moment, ',(0,i.jsxs)(e.a,{href:"../Concepts/dt_object.md#resources",children:[(0,i.jsx)(e.strong,{children:"nullify"})," its references by setting them to ",(0,i.jsx)(e.strong,{children:"Null"})]}),"."]}),"\n",(0,i.jsxs)(e.details,{children:[(0,i.jsx)(e.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Release"}),(0,i.jsx)(e.th,{children:"Changes"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"20 R8"}),(0,i.jsx)(e.td,{children:"Class added"})]})})]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.p,{children:"The following examples demonstrate how to use the 4D.TCPConnection and 4D.TCPEvent classes to manage a TCP client connection, handle events, send data, and properly close the connection. Both synchronous and asynchronous examples are provided."}),"\n",(0,i.jsx)(e.h4,{id:"synchronous-example",children:"Synchronous Example"}),"\n",(0,i.jsx)(e.p,{children:"This example shows how to establish a connection, send data, and shut it down using a simple object for configuration:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'var $domain : Text := "127.0.0.1"\nvar $port : Integer := 10000\nvar $options : Object := New object() // Configuration object\nvar $tcpClient : 4D.TCPConnection\nvar $message : Text := "test message"\n\n// Open a connection\n$tcpClient := 4D.TCPConnection.new($domain; $port; $options)\n\n// Send data\nvar $blobData : Blob\nTEXT TO BLOB($message; $blobData; UTF8 text without length)\n$tcpClient.send($blobData)\n\n// Shutdown\n$tcpClient.shutdown()\n$tcpClient.wait(0)\n\n'})}),"\n",(0,i.jsx)(e.h4,{id:"asynchronous-example",children:"Asynchronous Example"}),"\n",(0,i.jsx)(e.p,{children:"This example defines a class that handles the connection lifecycle and events, showcasing how to work asynchronously:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'// Class definition: cs.MyAsyncTCPConnection\n\nClass constructor($url : Text; $port : Integer)\n    This.connection := Null\n    This.url := $url\n    This.port := $port\n\n// Connect to one of the servers launched inside workers\nFunction connect()\n    This.connection := 4D.TCPConnection.new(This.url; This.port; This)\n\n// Disconnect from the server\nFunction disconnect()\n    This.connection.shutdown()\n    This.connection := Null\n\n// Send data to the server\nFunction getInfo()\n    var $blob : Blob\n    TEXT TO BLOB("Information"; $blob)\n    This.connection.send($blob)\n\n// Callback called when the connection is successfully established\nFunction onConnection($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT("Connection established")\n\n// Callback called when the connection is properly closed\nFunction onShutdown($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT("Connection closed")\n\n// Callback called when receiving data from the server\nFunction onData($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT(BLOB to text($event.data; UTF8 text without length))\n\n	//Warning: There\'s no guarantee you\'ll receive all the data you need in a single network packet.\n	\n// Callback called when the connection is closed unexpectedly\nFunction onError($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT("Connection error")\n\n// Callback called after onShutdown/onError just before the TCPConnection object is released\nFunction onTerminate($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n	ALERT("Connection terminated")\n\n\n'})}),"\n",(0,i.jsx)(e.h5,{id:"usage-example",children:"Usage example"}),"\n",(0,i.jsx)(e.p,{children:"Create a new method named AsyncTCP, to initialize and manage the TCP connection:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'var $myObject : cs.MyAsyncTCPConnection\n$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)\n$myObject.connect()\n$myObject.getInfo()\n$myObject.disconnect()\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"Call the AsyncTCP method in a worker:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-4d",children:'CALL WORKER("new process"; "Async_TCP")\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"tcpconnection-object",children:"TCPConnection Object"}),"\n",(0,i.jsx)(e.p,{children:"A TCPConnection object is a non-sharable object."}),"\n",(0,i.jsx)(e.p,{children:"TCPConnection objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsx)(e.tr,{children:(0,i.jsx)(e.th,{})})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.a,{href:"#closed"}),(0,i.jsx)(e.br,{})]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#errors",children:[(0,i.jsx)(e.strong,{children:"errors"})," : Collection"]}),(0,i.jsx)(e.br,{}),"a collection of error objects associated with the connection"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#noDelay",children:[(0,i.jsx)(e.strong,{children:"noDelay"})," : Boolean"]}),(0,i.jsx)(e.br,{}),"whether Nagle's algorithm is disabled (",(0,i.jsx)(e.code,{children:"true"}),") or enabled (",(0,i.jsx)(e.code,{children:"false"}),")"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#send",children:[(0,i.jsx)(e.strong,{children:".send"}),"( ",(0,i.jsx)(e.em,{children:"data"})," : Blob )"]}),(0,i.jsx)(e.br,{}),"sends data to the server"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#shutdown",children:[(0,i.jsx)(e.strong,{children:".shutdown"}),"()"]}),(0,i.jsx)(e.br,{}),"closes the ",(0,i.jsx)(e.em,{children:"write"})," channel of the connection (client to server stream)"]})}),(0,i.jsx)(e.tr,{children:(0,i.jsxs)(e.td,{children:[(0,i.jsxs)(e.a,{href:"#wait",children:[(0,i.jsx)(e.strong,{children:".wait"}),"( { ",(0,i.jsx)(e.em,{children:"timeout"})," : Real } )"]}),(0,i.jsx)(e.br,{}),"waits until  the TCP connection is closed or the specified ",(0,i.jsx)(e.code,{children:"timeout"})," is reached"]})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"4dtcpconnectionnew",children:"4D.TCPConnection.new()"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"4D.TCPConnection.new"}),"( ",(0,i.jsx)(e.em,{children:"serverAddress"})," : Text ; ",(0,i.jsx)(e.em,{children:"serverPort"})," : Number ; ",(0,i.jsx)(e.em,{children:"options"})," : Object  ) : 4D.TCPConnection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"serverAddress"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"Domain name or IP address of the server"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"serverPort"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"Port number of the server"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"options"}),(0,i.jsx)(e.td,{children:"Object"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsxs)(e.td,{children:["Configuration ",(0,i.jsx)(e.a,{href:"#options-parameter",children:"options"})," for the connection"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Result"}),(0,i.jsx)(e.td,{children:"TCPConnection"}),(0,i.jsx)(e.td,{children:"<-"}),(0,i.jsx)(e.td,{children:"New TCPConnection object"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"4D.TCPConnection.new()"})," function creates a new TCP connection to the specified ",(0,i.jsx)(e.em,{children:"serverAddress"})," and ",(0,i.jsx)(e.em,{children:"serverPort"}),", using the defined ",(0,i.jsx)(e.em,{children:"options"}),", and returns a ",(0,i.jsx)(e.code,{children:"4D.HTTPRequest"})," object."]}),"\n",(0,i.jsxs)(e.h4,{id:"options-parameter",children:[(0,i.jsx)(e.code,{children:"options"})," parameter"]}),"\n",(0,i.jsxs)(e.p,{children:["In the ",(0,i.jsx)(e.em,{children:"options"})," parameter, pass an object that can contain the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Property"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"}),(0,i.jsx)(e.th,{children:"Default"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"onConnection"}),(0,i.jsx)(e.td,{children:"Formula"}),(0,i.jsx)(e.td,{children:"Callback triggered when the connection is established."}),(0,i.jsx)(e.td,{children:"Undefined"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"onData"}),(0,i.jsx)(e.td,{children:"Formula"}),(0,i.jsx)(e.td,{children:"Callback triggered when data is received"}),(0,i.jsx)(e.td,{children:"Undefined"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"onShutdown"}),(0,i.jsx)(e.td,{children:"Formula"}),(0,i.jsx)(e.td,{children:"Callback triggered when the connection is properly closed"}),(0,i.jsx)(e.td,{children:"Undefined"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"onError"}),(0,i.jsx)(e.td,{children:"Formula"}),(0,i.jsx)(e.td,{children:"Callback triggered in case of an error"}),(0,i.jsx)(e.td,{children:"Undefined"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"onTerminate"}),(0,i.jsx)(e.td,{children:"Formula"}),(0,i.jsx)(e.td,{children:"Callback triggered just before the TCPConnection is released"}),(0,i.jsx)(e.td,{children:"Undefined"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"noDelay"}),(0,i.jsx)(e.td,{children:"Boolean"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"Read-only"})," Disables Nagle's algorithm if ",(0,i.jsx)(e.code,{children:"true"})]}),(0,i.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,i.jsx)(e.h4,{id:"callback-functions",children:"Callback functions"}),"\n",(0,i.jsx)(e.p,{children:"All callback functions receive two parameters:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"$connection"}),(0,i.jsx)(e.td,{children:(0,i.jsxs)(e.a,{href:"#tcpconnection-object",children:[(0,i.jsx)(e.code,{children:"TCPConnection"})," object"]})}),(0,i.jsx)(e.td,{children:"The current TCP connection instance."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"$event"}),(0,i.jsx)(e.td,{children:(0,i.jsxs)(e.a,{href:"#tcpevent-object",children:[(0,i.jsx)(e.code,{children:"TCPEvent"})," object"]})}),(0,i.jsx)(e.td,{children:"Contains information about the event."})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Sequence of Callback Calls:"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onConnection"})," is triggered when the connection is established."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onData"})," is triggered each time data is received."]}),"\n",(0,i.jsxs)(e.li,{children:["Either ",(0,i.jsx)(e.code,{children:"onShutdown"})," or ",(0,i.jsx)(e.code,{children:"onError"})," is triggered:\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onShutdown"})," is triggered when the connection is properly closed."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onError"})," is triggered if an error occurs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"onTerminate"})," is always triggered just before the TCPConnection is released (connection is closed or an error occured)."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"tcpevent-object",children:"TCPEvent object"}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.a,{href:"/docs/ja/API/TCPEventClass",children:(0,i.jsx)(e.code,{children:"TCPEvent"})})," object is returned when a ",(0,i.jsx)(e.a,{href:"#callback-functions",children:"callback function"})," is called."]}),"\n",(0,i.jsx)(e.h2,{id:"closed",children:".closed"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"closed"})," : Boolean"]}),"\n",(0,i.jsx)(e.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:".closed"})," property contains whether the connection is closed. Returns ",(0,i.jsx)(e.code,{children:"true"})," if the connection is closed, either due to an error, a call to ",(0,i.jsx)(e.code,{children:"shutdown()"}),", or closure by the server."]}),"\n",(0,i.jsx)(e.h2,{id:"errors",children:".errors"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"errors"})," : Collection"]}),"\n",(0,i.jsx)(e.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:".errors"})," property contains a collection of error objects associated with the connection. Each error object includes the error code, a description, and the signature of the component that caused the error."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Property"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"errors"}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"Collection"}),(0,i.jsx)(e.td,{children:"4D error stack in case of error"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"[].errCode"}),(0,i.jsx)(e.td,{children:"Number"}),(0,i.jsx)(e.td,{children:"4D error code"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"[].message"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"Description of the 4D error"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{children:"[].componentSignature"}),(0,i.jsx)(e.td,{children:"Text"}),(0,i.jsx)(e.td,{children:"Signature of the internal component which returned the error"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"nodelay",children:".noDelay"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"noDelay"})," : Boolean"]}),"\n",(0,i.jsx)(e.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:".noDelay"})," property contains whether Nagle's algorithm is disabled (",(0,i.jsx)(e.code,{children:"true"}),") or enabled (",(0,i.jsx)(e.code,{children:"false"}),"). This property is ",(0,i.jsx)(e.strong,{children:"read-only"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"send",children:".send()"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".send"}),"( ",(0,i.jsx)(e.em,{children:"data"})," : Blob )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"data"}),(0,i.jsx)(e.td,{children:"Blob"}),(0,i.jsx)(e.td,{children:"->"}),(0,i.jsx)(e.td,{children:"Data to be sent"})]})})]}),"\n",(0,i.jsx)(e.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"send()"})," function sends data to the server. If the connection is not established yet, the data is sent once the connection is established."]}),"\n",(0,i.jsx)(e.h2,{id:"shutdown",children:".shutdown()"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".shutdown"}),"()"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"center"}}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{}),(0,i.jsx)(e.td,{style:{textAlign:"center"}}),(0,i.jsx)(e.td,{children:"Does not require any parameters"})]})})]}),"\n",(0,i.jsx)(e.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"shutdown()"})," function closes the ",(0,i.jsx)(e.em,{children:"write"})," channel of the connection (client to server stream) while keeping the ",(0,i.jsx)(e.em,{children:"read"})," channel (server to client stream) open, allowing you to continue receiving data until the connection is fully closed by the server or an error occurs."]}),"\n",(0,i.jsx)(e.h2,{id:"wait",children:".wait()"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:".wait"}),"( { ",(0,i.jsx)(e.em,{children:"timeout"})," : Real } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"center"}}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"timeout"}),(0,i.jsx)(e.td,{children:"Real"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(e.td,{children:"Maximum wait time in seconds"})]})})]}),"\n",(0,i.jsx)(e.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"wait()"})," function waits until  the TCP connection is closed or the specified ",(0,i.jsx)(e.code,{children:"timeout"})," is reached"]}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.mdxadmonitiontitle,{}),(0,i.jsxs)(e.p,{children:["During the ",(0,i.jsx)(e.code,{children:".wait()"})," execution, callback functions are executed, whether they originate from other ",(0,i.jsx)(e.code,{children:"SystemWorker"})," instances. You can exit from a ",(0,i.jsx)(e.code,{children:".wait()"})," by calling ",(0,i.jsx)(e.a,{href:"#shutdown",children:(0,i.jsx)(e.code,{children:"shutdown()"})})," from a callback."]})]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);