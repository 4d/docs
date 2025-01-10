"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62880"],{653561:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>t,contentTitle:()=>l});var r=JSON.parse('{"id":"API/WebSocketClass","title":"WebSocket","description":"La clase WebSocket permite abrir una conexi\xf3n de cliente WebSocket con un servidor, enviar y recibir datos y cerrar la conexi\xf3n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/API/WebSocketClass.md","sourceDirName":"API","slug":"/API/WebSocketClass","permalink":"/docs/es/20-R6/API/WebSocketClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"WebSocketClass","title":"WebSocket"},"sidebar":"docs","previous":{"title":"WebServer","permalink":"/docs/es/20-R6/API/WebServerClass"},"next":{"title":"WebSocketConnection","permalink":"/docs/es/20-R6/API/WebSocketConnectionClass"}}'),i=s("785893"),c=s("250065");let d={id:"WebSocketClass",title:"WebSocket"},l=void 0,o={},t=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"Objeto WebSocket",id:"objeto-websocket",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"Par\xe1metro <em>connectionHandler</em>",id:"par\xe1metro-connectionhandler",level:3},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".handler",id:"handler",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".id",id:"id",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".send()",id:"send",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".status",id:"status",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:".url",id:"url",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La clase ",(0,i.jsx)(n.code,{children:"WebSocket"})," permite abrir una conexi\xf3n de cliente WebSocket con un servidor, enviar y recibir datos y cerrar la conexi\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"Las conexiones cliente WebSocket son \xfatiles, por ejemplo, para recibir datos financieros en tiempo real o enviar y recibir mensajes de un chat."}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R2"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"En este ejemplo, creamos un cliente WebSocket muy b\xe1sico."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Cree la clase usuario ",(0,i.jsx)(n.code,{children:"WSConnectionHandler"})," que contiene la(s) funci\xf3n(es) de retrollamada utilizada(s) para gestionar las retrollamadas evento WebSocket:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler class\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("Connection closed")\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Con\xe9cte al servidor WebSocket desde un formulario 4D instanciando un 4D.WebSocket:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Para enviar mensajes al servidor WebSocket desde el formulario 4D, puede escribir:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'Form.webSocket.send("Hello world")\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"objeto-websocket",children:"Objeto WebSocket"}),"\n",(0,i.jsx)(n.p,{children:"Los objetos WebSocket ofrecen las siguientes propiedades y funciones:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#dataType",children:[(0,i.jsx)(n.strong,{children:".dataType"})," : Text"]}),(0,i.jsx)(n.br,{}),"el tipo de contenido del cuerpo de la respuesta"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#handler",children:[(0,i.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,i.jsx)(n.br,{}),"el accessor que obtiene el objeto ",(0,i.jsx)(n.code,{children:"connectionHandler"})," utilizado para iniciar la conexi\xf3n"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#id",children:[(0,i.jsx)(n.strong,{children:".id"})," : Longint"]}),(0,i.jsx)(n.br,{}),"el identificador \xfanico de la conexi\xf3n"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#send",children:[(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Blob )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Object )"]}),(0,i.jsx)(n.br,{}),"env\xeda ",(0,i.jsx)(n.em,{children:"message"})," al servidor WebSocket en el tipo de datos definido (Texto, Blob u Objeto)"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#status",children:[(0,i.jsx)(n.strong,{children:".status"})," : Text"]}),(0,i.jsx)(n.br,{}),'el estado actual de la conexi\xf3n (puede ser "Connecting", "Closing", "Closed", o "Connected")']})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#terminate",children:[(0,i.jsx)(n.strong,{children:".terminate"}),"( { ",(0,i.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,i.jsx)(n.em,{children:"reason"})," : Text } } )"]}),(0,i.jsx)(n.br,{}),"cierra la conexi\xf3n WebSocket, junto con los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"code"})," y ",(0,i.jsx)(n.em,{children:"reason"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#url",children:[(0,i.jsx)(n.strong,{children:".url"})," : Text"]}),(0,i.jsx)(n.br,{}),"la URL a la que se ha conectado el WebSocket"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"4dwebsocketnew",children:"4D.WebSocket.new()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R3"}),(0,i.jsxs)(n.td,{children:["Soporte de la propiedad ",(0,i.jsx)(n.code,{children:"headers"})," en ",(0,i.jsx)(n.em,{children:"connectionHandler"})]})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.WebSocket.new"}),"( ",(0,i.jsx)(n.em,{children:"url"})," : Text { ; ",(0,i.jsx)(n.em,{children:"connectionHandler"})," : Object } ) : 4D.WebSocket"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"url"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"URL a la que conectarse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#connectionHandler-parameter",children:"connectionHandler"})}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Objeto que declara las retrollamadas WebSocket"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"4D.WebSocket"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsxs)(n.td,{children:["Nuevo ",(0,i.jsx)(n.a,{href:"#websocket-object",children:"objeto WebSocket"})]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:"4D.WebSocket.new()"})," crea y devuelve un nuevo ",(0,i.jsxs)(n.a,{href:"#websocket-object",children:["objeto ",(0,i.jsx)(n.code,{children:"4D.WebSocket"})]})," conectado al servidor WebSocket en la direcci\xf3n especificada en ",(0,i.jsx)(n.em,{children:"url"}),". El objeto ",(0,i.jsx)(n.code,{children:"4D.WebSocket"})," ofrece una API para crear y gestionar una conexi\xf3n WebSocket a un servidor, as\xed como para enviar y recibir datos hacia y desde el servidor."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"url"}),", pase la URL a la que responder\xe1 el servidor WebSocket. Se pueden utilizar los siguientes patrones de URL:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ws://host[:port]path[?query]"})," para conexiones est\xe1ndar"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wss://host[:port]path[?query]"})," para conexiones seguras TLS"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si la conexi\xf3n no es posible, se devuelve un objeto ",(0,i.jsx)(n.code,{children:"null"})," y se genera un error (que puede interceptar utilizando un m\xe9todo instalado con ",(0,i.jsx)(n.code,{children:"ON ERR CALL"}),")."]}),"\n",(0,i.jsxs)(n.h3,{id:"par\xe1metro-connectionhandler",children:["Par\xe1metro ",(0,i.jsx)(n.em,{children:"connectionHandler"})]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"connectionHandler"}),", puede pasar un objeto que contenga funciones de retrollamada a ser llamadas seg\xfan los eventos de conexi\xf3n, as\xed como el tipo de datos y encabezados a manejar."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Las retrollamadas se llaman autom\xe1ticamente en el contexto del formulario o worker que inicia la conexi\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"El WebSocket ser\xe1 v\xe1lido siempre y cuando el formulario o trabajador no est\xe9 cerrado."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onMessage"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R6/API/FunctionClass",children:"Function"})}),(0,i.jsxs)(n.td,{children:["Funci\xf3n de retrollamada para datos WebSocket. Llamada cada vez que el WebSocket ha recibido datos. La retrollamada recibe los siguientes par\xe1metros",(0,i.jsxs)(n.li,{children:[":",(0,i.jsx)(n.code,{children:"$1"}),": objeto WebSocket",(0,i.jsx)(n.code,{children:"$2"})]}),(0,i.jsx)(n.li,{children:": objeto"}),(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.type"}),' (texto): siempre "message"']}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.data"})," (texto, blob u objeto, ver ",(0,i.jsx)(n.code,{children:"dataType"}),"): datos recibidos"]})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onError"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R6/API/FunctionClass",children:"Function"})}),(0,i.jsxs)(n.td,{children:["Funci\xf3n de retrollamada para errores de ejecuci\xf3n. La retrollamada recibe los siguientes par\xe1metros",(0,i.jsxs)(n.li,{children:[":",(0,i.jsx)(n.code,{children:"$1"}),": objeto WebSocket",(0,i.jsx)(n.code,{children:"$2"})]}),(0,i.jsx)(n.li,{children:": objeto"}),(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.type"}),' (texto): siempre "error"']}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.errors"}),": colecci\xf3n de pilas de errores 4D en caso de error de ejecuci\xf3n.",(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[].errCode"})," (n\xfamero): c\xf3digo de error 4D"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[].message"})," (texto): descripci\xf3n del error 4D"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[].componentSignature"})," (texto): firma del componente interno que ha devuelto el error"]})]})]})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onTerminate"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R6/API/FunctionClass",children:"Function"})}),(0,i.jsxs)(n.td,{children:["Funci\xf3n de retrollamada cuando el WebSocket se termina. La retrollamada recibe los siguientes par\xe1metros: ",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$1"}),": objeto WebSocket"]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2"}),": objeto"]}),(0,i.jsxs)(n.ul,{children:[(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.code"})," (n\xfamero, solo lectura): unsigned short contiene el c\xf3digo de cierre enviado por el servidor."]}),(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.reason"})," (texto, solo lectura): raz\xf3n por la cual el servidor cerr\xf3 la conexi\xf3n. Esto es espec\xedfico al servidor y al subprotocolo particular."]})]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onOpen"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R6/API/FunctionClass",children:"Function"})}),(0,i.jsxs)(n.td,{children:["Funci\xf3n de retrollamada cuando el webSocket est\xe1 abierto. La retrollamada recibe los siguientes par\xe1metros",(0,i.jsxs)(n.li,{children:[":",(0,i.jsx)(n.code,{children:"$1"}),": objeto WebSocket"]}),(0,i.jsxs)(n.li,{children:[":",(0,i.jsx)(n.code,{children:"$2"})," objeto"]}),(0,i.jsx)(n.ul,{children:(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$2.type"}),' (texto): siempre "open"']})})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dataType"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:'Tipo de datos recibidos o enviados. Valores disponibles: "text" (por defecto), "blob", "object". "text" = utf-8'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"headers"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsxs)(n.td,{children:["Encabezados del WebSocket.",(0,i.jsxs)(n.li,{children:["Sintaxis para la asignaci\xf3n de llave est\xe1ndar: ",(0,i.jsx)(n.code,{children:"headers.*llave*:=*value*"})," (",(0,i.jsx)(n.em,{children:"value"})," puede ser una Colecci\xf3n si la misma llave aparece varias veces)"]}),(0,i.jsxs)(n.li,{children:["Sintaxis para asignaci\xf3n de Cookie (caso particular): ",(0,i.jsx)(n.code,{children:'headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"'})]})]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Esta es la secuencia de llamadas de retorno:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onOpen"})," se ejecuta una vez"]}),"\n",(0,i.jsxs)(n.li,{children:["Cero o varios ",(0,i.jsx)(n.code,{children:"onMessage"})," son ejecutados"]}),"\n",(0,i.jsxs)(n.li,{children:["Cero o un ",(0,i.jsx)(n.code,{children:"onError"})," es ejecutado (detiene el procesamiento)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onTerminate"})," se ejecuta siempre una vez"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,i.jsxs)(n.p,{children:["Quiere definir los encabezados en la clase usuario ",(0,i.jsx)(n.code,{children:"WSConnectionHandler"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'// Clase WSConnectionHandler\n\nClass constructor($myToken:Text)\n\n// Creaci\xf3n de los encabezados enviados al servidor\nThis.headers:=New object("x-authorization";$myToken)\n// Definimos dos cookies\nThis.headers.Cookie:="yummy_cookie=choco; tasty_cookie=fresa"\n...\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"datatype",children:".dataType"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".dataType"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".dataType"}),' contiene el tipo de contenido del cuerpo de la respuesta. Puede ser "text", "blob" u "object".']}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."}),"\n",(0,i.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".handler"})," contiene el accessor que obtiene el objeto ",(0,i.jsx)(n.code,{children:"connectionHandler"})," utilizado para iniciar la conexi\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."}),"\n",(0,i.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".id"})," : Longint"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".id"})," contiene el identificador \xfanico de la conexi\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."}),"\n",(0,i.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Blob )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text, Blob, Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Mensaje a enviar"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".send()"})," env\xeda ",(0,i.jsx)(n.em,{children:"message"})," al servidor WebSocket en el tipo de datos definido (Texto, Blob u Objeto)."]}),"\n",(0,i.jsxs)(n.p,{children:["Los siguientes contenidos se env\xedan en funci\xf3n del tipo de ",(0,i.jsx)(n.em,{children:"message"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Contenido"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Texto en UTF-8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"Datos binarios"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsxs)(n.td,{children:["Texto en JSON UTF-8 (mismo resultado que con ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1217.html",children:(0,i.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".status"}),' contiene el estado actual de la conexi\xf3n (puede ser "Connecting", "Closing", "Closed", o "Connected").']}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."}),"\n",(0,i.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".terminate"}),"( { ",(0,i.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,i.jsx)(n.em,{children:"reason"})," : Text } } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"code"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"C\xf3digo de estado que explica por qu\xe9 se cierra la conexi\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"reason"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"La raz\xf3n por la que se cierra la conexi\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".terminate()"})," cierra la conexi\xf3n WebSocket, junto con los par\xe1metros opcionales ",(0,i.jsx)(n.em,{children:"code"})," y ",(0,i.jsx)(n.em,{children:"reason"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"code"}),", puede pasar un c\xf3digo de estado que explique por qu\xe9 se est\xe1 cerrando la conexi\xf3n (ver tambi\xe9n ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5",children:"WebSocket Connection Close Code in the RFC6455"}),"):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si no se especifica, el c\xf3digo de cierre de la conexi\xf3n se establece autom\xe1ticamente en 1000 para un cierre normal o, en caso contrario, en otro valor est\xe1ndar del rango 1001-1015 que indique la raz\xf3n real por la que se cerr\xf3 la conexi\xf3n."}),"\n",(0,i.jsxs)(n.li,{children:["Si se especifica, el valor de este par\xe1metro de c\xf3digo anula el ajuste autom\xe1tico. El valor debe ser un n\xfamero entero. O 1000, o un c\xf3digo personalizado en el rango 3000-4999. Si especifica un valor ",(0,i.jsx)(n.em,{children:"code"}),", tambi\xe9n debe especificar un valor ",(0,i.jsx)(n.em,{children:"reason"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"reason"}),", puede pasar una cadena que describa por qu\xe9 se est\xe1 cerrando la conexi\xf3n."]}),"\n",(0,i.jsx)(n.h2,{id:"url",children:".url"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".url"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".url"})," contiene la URL a la que se ha conectado el WebSocket. Es la URL que ha pasado a la funci\xf3n ",(0,i.jsx)(n.a,{href:"#4dwebsocketnew",children:(0,i.jsx)(n.code,{children:"new()"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let i={},c=r.createContext(i);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);