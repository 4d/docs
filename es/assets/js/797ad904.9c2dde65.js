"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68404"],{936046:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"API/TCPConnectionClass","title":"TCPConnection","description":"The TCPConnection class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/API/TCPConnectionClass.md","sourceDirName":"API","slug":"/API/TCPConnectionClass","permalink":"/docs/es/API/TCPConnectionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTCPConnectionClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"TCPConnectionClass","title":"TCPConnection"},"sidebar":"docs","previous":{"title":"SystemWorker","permalink":"/docs/es/API/SystemWorkerClass"},"next":{"title":"TCPEvent","permalink":"/docs/es/API/TCPEventClass"}}'),r=s("785893"),c=s("250065");let t={id:"TCPConnectionClass",title:"TCPConnection"},o=void 0,d={},l=[{value:"Ejemplos",id:"ejemplos",level:3},{value:"Synchronous Example",id:"synchronous-example",level:4},{value:"Ejemplo asincr\xf3nico",id:"ejemplo-asincr\xf3nico",level:4},{value:"Usage example",id:"usage-example",level:5},{value:"Objeto TCPConnection",id:"objeto-tcpconnection",level:3},{value:"4D.TCPConnection.new()",id:"4dtcpconnectionnew",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Par\xe1metro <em>options</em>",id:"par\xe1metro-options",level:4},{value:"Funci\xf3n callback (retrollamada)",id:"funci\xf3n-callback-retrollamada",level:4},{value:"TCPEvent object",id:"tcpevent-object",level:4},{value:".closed",id:"closed",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".errors",id:"errors",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".noDelay",id:"nodelay",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".send()",id:"send",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".shutdown()",id:"shutdown",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".wait()",id:"wait",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4}];function a(n){let e={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"TCPConnection"})," class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks."]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"TCPConnection"})," class is available from the ",(0,r.jsx)(e.code,{children:"4D"})," class store. Puede crear una conexi\xf3n TCP utilizando la funci\xf3n ",(0,r.jsx)(e.a,{href:"#4dtcpconnectionnew",children:"4D.TCPConnection.new()"})," que devuelve un ",(0,r.jsx)(e.a,{href:"#tcpconnection-object",children:"TCPConnection object"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["All ",(0,r.jsx)(e.code,{children:"TCPConnection"})," class functions are thread-safe."]}),"\n",(0,r.jsxs)(e.p,{children:["Thanks to the standard 4D object ",(0,r.jsx)(e.em,{children:"refcounting"}),", a TCPConnection is automatically released when it is no longer referenced. Consequently, the associated resources, are properly cleaned up without requiring explicit closure."]}),"\n",(0,r.jsxs)(e.p,{children:['TCPConnection objects are released when no more references to them exist in memory. This typically occurs, for example, at the end of a method execution for local variables. If you want to "force" the closure of a connection at any moment, ',(0,r.jsxs)(e.a,{href:"/docs/es/Concepts/object#resources",children:[(0,r.jsx)(e.strong,{children:"nullify"})," its references by setting them to ",(0,r.jsx)(e.strong,{children:"Null"})]}),"."]}),"\n",(0,r.jsxs)(e.details,{children:[(0,r.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Lanzamiento"}),(0,r.jsx)(e.th,{children:"Modificaciones"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"20 R8"}),(0,r.jsx)(e.td,{children:"Clase a\xf1adida"})]})})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,r.jsx)(e.p,{children:"The following examples demonstrate how to use the 4D.TCPConnection and 4D.TCPEvent classes to manage a TCP client connection, handle events, send data, and properly close the connection. Both synchronous and asynchronous examples are provided."}),"\n",(0,r.jsx)(e.h4,{id:"synchronous-example",children:"Synchronous Example"}),"\n",(0,r.jsx)(e.p,{children:"This example shows how to establish a connection, send data, and shut it down using a simple object for configuration:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'var $domain : Text := "127.0.0.1"\nvar $port : Integer := 10000\nvar $options : Object := New object() // Configuration object\nvar $tcpClient : 4D.TCPConnection\nvar $message : Text := "test message"\n\n// Open a connection\n$tcpClient := 4D.TCPConnection.new($domain; $port; $options)\n\n// Send data\nvar $blobData : Blob\nTEXT TO BLOB($message; $blobData; UTF8 text without length)\n$tcpClient.send($blobData)\n\n// Shutdown\n$tcpClient.shutdown()\n$tcpClient.wait(0)\n\n'})}),"\n",(0,r.jsx)(e.h4,{id:"ejemplo-asincr\xf3nico",children:"Ejemplo asincr\xf3nico"}),"\n",(0,r.jsx)(e.p,{children:"This example defines a class that handles the connection lifecycle and events, showcasing how to work asynchronously:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'// Class definition: cs.MyAsyncTCPConnection\n\nClass constructor($url : Text; $port : Integer)\n    This.connection := Null\n    This.url := $url\n    This.port := $port\n\n// Connect to one of the servers launched inside workers\nFunction connect()\n    This.connection := 4D.TCPConnection.new(This.url; This.port; This)\n\n// Disconnect from the server\nFunction disconnect()\n    This.connection.shutdown()\n    This.connection := Null\n\n// Send data to the server\nFunction getInfo()\n    var $blob : Blob\n    TEXT TO BLOB("Information"; $blob)\n    This.connection.send($blob)\n\n// Callback called when the connection is successfully established\nFunction onConnection($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT("Connection established")\n\n// Callback called when the connection is properly closed\nFunction onShutdown($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT("Connection closed")\n\n// Callback called when receiving data from the server\nFunction onData($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT(BLOB to text($event.data; UTF8 text without length))\n\n	//Warning: There\'s no guarantee you\'ll receive all the data you need in a single network packet.\n	\n// Callback called when the connection is closed unexpectedly\nFunction onError($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n    ALERT("Connection error")\n\n// Callback called after onShutdown/onError just before the TCPConnection object is released\nFunction onTerminate($connection : 4D.TCPConnection; $event : 4D.TCPEvent)\n	ALERT("Connection terminated")\n\n\n'})}),"\n",(0,r.jsx)(e.h5,{id:"usage-example",children:"Usage example"}),"\n",(0,r.jsx)(e.p,{children:"Create a new method named AsyncTCP, to initialize and manage the TCP connection:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'var $myObject : cs.MyAsyncTCPConnection\n$myObject := cs.MyAsyncTCPConnection.new("myURL"; 10000)\n$myObject.connect()\n$myObject.getInfo()\n$myObject.disconnect()\n\n'})}),"\n",(0,r.jsx)(e.p,{children:"Call the AsyncTCP method in a worker:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'CALL WORKER("new process"; "Async_TCP")\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"objeto-tcpconnection",children:"Objeto TCPConnection"}),"\n",(0,r.jsx)(e.p,{children:"A TCPConnection object is a non-sharable object."}),"\n",(0,r.jsx)(e.p,{children:"TCPConnection objects provide the following properties and functions:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsx)(e.tr,{children:(0,r.jsx)(e.th,{})})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#closed",children:[(0,r.jsx)(e.strong,{children:"closed"})," : Boolean"]}),(0,r.jsx)(e.br,{}),"whether the connection is closed"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#errors",children:[(0,r.jsx)(e.strong,{children:"errors"})," : Collection"]}),(0,r.jsx)(e.br,{}),"a collection of error objects associated with the connection"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#nodelay",children:[(0,r.jsx)(e.strong,{children:"noDelay"})," : Boolean"]}),(0,r.jsx)(e.br,{}),"whether Nagle's algorithm is disabled (",(0,r.jsx)(e.code,{children:"true"}),") or enabled (",(0,r.jsx)(e.code,{children:"false"}),")"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#send",children:[(0,r.jsx)(e.strong,{children:".send"}),"( ",(0,r.jsx)(e.em,{children:"data"})," : Blob )"]}),(0,r.jsx)(e.br,{}),"sends data to the server"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#shutdown",children:[(0,r.jsx)(e.strong,{children:".shutdown"}),"()"]}),(0,r.jsx)(e.br,{}),"cierra el canal ",(0,r.jsx)(e.em,{children:"write"})," de la conexi\xf3n (cliente a servidor)"]})}),(0,r.jsx)(e.tr,{children:(0,r.jsxs)(e.td,{children:[(0,r.jsxs)(e.a,{href:"#wait",children:[(0,r.jsx)(e.strong,{children:".wait"}),"( { ",(0,r.jsx)(e.em,{children:"timeout"})," : Real } )"]}),(0,r.jsx)(e.br,{}),"espera hasta que se cierre la conexi\xf3n TCP o se alcance el ",(0,r.jsx)(e.code,{children:"timeout"})," especificado"]})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"4dtcpconnectionnew",children:"4D.TCPConnection.new()"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"4D.TCPConnection.new"}),"( ",(0,r.jsx)(e.em,{children:"serverAddress"})," : Text ; ",(0,r.jsx)(e.em,{children:"serverPort"})," : Number ; ",(0,r.jsx)(e.em,{children:"options"})," : Object  ) : 4D.TCPConnection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe1metros"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"serverAddress"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"->"}),(0,r.jsx)(e.td,{children:"Domain name or IP address of the server"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"serverPort"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"->"}),(0,r.jsx)(e.td,{children:"Port number of the server"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"options"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"->"}),(0,r.jsxs)(e.td,{children:["Configuration ",(0,r.jsx)(e.a,{href:"#options-parameter",children:"options"})," for the connection"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Resultado"}),(0,r.jsx)(e.td,{children:"TCPConnection"}),(0,r.jsx)(e.td,{children:"<-"}),(0,r.jsx)(e.td,{children:"New TCPConnection object"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["La funci\xf3n ",(0,r.jsx)(e.code,{children:"4D.TCPConnection.new()"})," crea una nueva conexi\xf3n TCP a la ",(0,r.jsx)(e.em,{children:"serverAddress"})," y ",(0,r.jsx)(e.em,{children:"serverPort"})," especificados, usando las ",(0,r.jsx)(e.em,{children:"opciones"})," definidas, y devuelve un objeto ",(0,r.jsx)(e.code,{children:"4D.HTTPRequest"}),"."]}),"\n",(0,r.jsxs)(e.h4,{id:"par\xe1metro-options",children:["Par\xe1metro ",(0,r.jsx)(e.em,{children:"options"})]}),"\n",(0,r.jsxs)(e.p,{children:["En el par\xe1metro ",(0,r.jsx)(e.em,{children:"options"}),", pase un objeto que puede contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Propiedad"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"}),(0,r.jsx)(e.th,{children:"Por defecto"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"onConnection"}),(0,r.jsx)(e.td,{children:"Formula"}),(0,r.jsx)(e.td,{children:"Callback triggered when the connection is established."}),(0,r.jsx)(e.td,{children:"Indefinido"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"onData"}),(0,r.jsx)(e.td,{children:"Formula"}),(0,r.jsx)(e.td,{children:"Callback triggered when data is received"}),(0,r.jsx)(e.td,{children:"Indefinido"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"onShutdown"}),(0,r.jsx)(e.td,{children:"Formula"}),(0,r.jsx)(e.td,{children:"Callback triggered when the connection is properly closed"}),(0,r.jsx)(e.td,{children:"Indefinido"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"onError"}),(0,r.jsx)(e.td,{children:"Formula"}),(0,r.jsx)(e.td,{children:"Callback triggered in case of an error"}),(0,r.jsx)(e.td,{children:"Indefinido"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"onTerminate"}),(0,r.jsx)(e.td,{children:"Formula"}),(0,r.jsx)(e.td,{children:"Callback triggered just before the TCPConnection is released"}),(0,r.jsx)(e.td,{children:"Indefinido"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"noDelay"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.strong,{children:"Read-only"})," Disables Nagle's algorithm if ",(0,r.jsx)(e.code,{children:"true"})]}),(0,r.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"funci\xf3n-callback-retrollamada",children:"Funci\xf3n callback (retrollamada)"}),"\n",(0,r.jsx)(e.p,{children:"All callback functions receive two parameters:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe1metros"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"$connection"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)(e.a,{href:"#tcpconnection-object",children:["objeto ",(0,r.jsx)(e.code,{children:"TCPConnection"})]})}),(0,r.jsx)(e.td,{children:"The current TCP connection instance."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"$event"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)(e.a,{href:"#tcpevent-object",children:["objeto ",(0,r.jsx)(e.code,{children:"TCPEvent"})]})}),(0,r.jsx)(e.td,{children:"Contains information about the event."})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Sequence of Callback Calls:"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"onConnection"})," is triggered when the connection is established."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"onData"})," is triggered each time data is received."]}),"\n",(0,r.jsxs)(e.li,{children:["Either ",(0,r.jsx)(e.code,{children:"onShutdown"})," or ",(0,r.jsx)(e.code,{children:"onError"})," is triggered:\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"onShutdown"})," is triggered when the connection is properly closed."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"onError"})," is triggered if an error occurs."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"onTerminate"})," is always triggered just before the TCPConnection is released (connection is closed or an error occured)."]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"tcpevent-object",children:"TCPEvent object"}),"\n",(0,r.jsxs)(e.p,{children:["Un objeto ",(0,r.jsx)(e.a,{href:"/docs/es/API/TCPEventClass",children:(0,r.jsx)(e.code,{children:"TCPEvent"})})," es devuelto cuando se llama una ",(0,r.jsx)(e.a,{href:"#callback-functions",children:"funci\xf3n de retrollamada"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"closed",children:".closed"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"closed"})," : Boolean"]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:".closed"})," property contains whether the connection is closed. Returns ",(0,r.jsx)(e.code,{children:"true"})," if the connection is closed, either due to an error, a call to ",(0,r.jsx)(e.code,{children:"shutdown()"}),", or closure by the server."]}),"\n",(0,r.jsx)(e.h2,{id:"errors",children:".errors"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"errors"})," : Collection"]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:".errors"})," property contains a collection of error objects associated with the connection. Each error object includes the error code, a description, and the signature of the component that caused the error."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Propiedad"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"errors"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{children:"Pila de error 4D en caso de error"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[].errCode"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"C\xf3digo de error 4D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[].message"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"Descripci\xf3n del error 4D"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"[].componentSignature"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"Firma del componente interno que ha devuelto el error"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"nodelay",children:".noDelay"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"noDelay"})," : Boolean"]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:".noDelay"})," property contains whether Nagle's algorithm is disabled (",(0,r.jsx)(e.code,{children:"true"}),") or enabled (",(0,r.jsx)(e.code,{children:"false"}),"). Esta propiedad es de ",(0,r.jsx)(e.strong,{children:"solo lectura"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:".send"}),"( ",(0,r.jsx)(e.em,{children:"data"})," : Blob )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe1metros"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"data"}),(0,r.jsx)(e.td,{children:"Blob"}),(0,r.jsx)(e.td,{children:"->"}),(0,r.jsx)(e.td,{children:"Data to be sent"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"send()"})," function sends data to the server. If the connection is not established yet, the data is sent once the connection is established."]}),"\n",(0,r.jsx)(e.h2,{id:"shutdown",children:".shutdown()"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:".shutdown"}),"()"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe1metros"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{style:{textAlign:"center"}}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{children:"No requiere ning\xfan par\xe1metro"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["La funci\xf3n ",(0,r.jsx)(e.code,{children:"shutdown()"}),"cierra el canal ",(0,r.jsx)(e.em,{children:"write"})," de la conexi\xf3n (cliente a servidor) mientras se mantiene abierto el canal ",(0,r.jsx)(e.em,{children:"read"})," (servidor al flujo del cliente) permiti\xe9ndole continuar recibiendo datos hasta que la conexi\xf3n sea completamente cerrada por el servidor o se produzca un error."]}),"\n",(0,r.jsx)(e.h2,{id:"wait",children:".wait()"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:".wait"}),"( { ",(0,r.jsx)(e.em,{children:"timeout"})," : Real } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Par\xe1metros"}),(0,r.jsx)(e.th,{children:"Tipo"}),(0,r.jsx)(e.th,{style:{textAlign:"center"}}),(0,r.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"timeout"}),(0,r.jsx)(e.td,{children:"Real"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(e.td,{children:"Maximum wait time in seconds"})]})})]}),"\n",(0,r.jsx)(e.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(e.p,{children:["La funci\xf3n ",(0,r.jsx)(e.code,{children:"wait()"})," espera hasta que se cierre la conexi\xf3n TCP o se alcance el ",(0,r.jsx)(e.code,{children:"timeout"})," especificado"]}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:["During the ",(0,r.jsx)(e.code,{children:".wait()"})," execution, callback functions are executed, whether they originate from other ",(0,r.jsx)(e.code,{children:"SystemWorker"})," instances. Puede salir de un ",(0,r.jsx)(e.code,{children:".wait()"})," llamando a ",(0,r.jsx)(e.a,{href:"#shutdown",children:(0,r.jsx)(e.code,{children:"shutdown()"})})," desde una retrollamada."]})})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return t}});var i=s(667294);let r={},c=i.createContext(r);function t(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);