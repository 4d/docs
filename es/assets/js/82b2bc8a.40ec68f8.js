"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15115"],{440502:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>t});var r=JSON.parse('{"id":"API/WebSocketConnectionClass","title":"WebSocketConnection","description":"Hist\xf3rico","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/API/WebSocketConnectionClass.md","sourceDirName":"API","slug":"/API/WebSocketConnectionClass","permalink":"/docs/es/20/API/WebSocketConnectionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"WebSocketConnectionClass","title":"WebSocketConnection"},"sidebar":"docs","previous":{"title":"WebServer","permalink":"/docs/es/20/API/WebServerClass"},"next":{"title":"WebSocketServer","permalink":"/docs/es/20/API/WebSocketServerClass"}}'),i=s("785893"),c=s("250065");let d={id:"WebSocketConnectionClass",title:"WebSocketConnection"},t=void 0,l={},o=[{value:"Objeto WebSocketConnection",id:"objeto-websocketconnection",level:3},{value:".handler",id:"handler",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".id",id:"id",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".send()",id:"send",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".status",id:"status",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".wss",id:"wss",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La API de la clase ",(0,i.jsx)(n.code,{children:"WebSocketConnection"})," permite gestionar conexiones WebSocket, una vez definidas mediante la clase ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass",children:(0,i.jsx)(n.code,{children:"WebSocketServer"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Para obtener una visi\xf3n general y algunos ejemplos de la implementaci\xf3n del servidor WebSocket en 4D, consulte la clase ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass",children:(0,i.jsx)(n.code,{children:"WebSocketServer"})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"objeto-websocketconnection",children:"Objeto WebSocketConnection"}),"\n",(0,i.jsxs)(n.p,{children:["Un objeto ",(0,i.jsx)(n.code,{children:"WebSocketConnection"})," se crea autom\xe1ticamente cuando la funci\xf3n de retrollamada ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass#wsshandler-parameter",children:(0,i.jsx)(n.code,{children:"WSHandler.onConnection"})})," del objeto ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass#4dwebsocketservernew",children:"WebSocketServer"})," devuelve un objeto ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass#connectionhandler-object",children:(0,i.jsx)(n.code,{children:"connectionHandler"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Los objetos WebSocketConnection ofrecen las siguientes propiedades y funciones:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#handler",children:[(0,i.jsx)(n.strong,{children:".handler"})," : Object"]}),"\xa0\xa0\xa0\xa0el accesor que obtiene el objeto ",(0,i.jsx)(n.code,{children:"connectionHandler"})," utilizado para iniciar la conexi\xf3n"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#id",children:[(0,i.jsx)(n.strong,{children:".id"})," : Integer"]}),"\xa0\xa0\xa0\xa0el identificador \xfanico de la conexi\xf3n"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#send",children:[(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Blob )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Object )"]}),"\xa0\xa0\xa0\xa0env\xeda un *mensaje * al cliente"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#status",children:[(0,i.jsx)(n.strong,{children:".status"})," : Text"]}),'\xa0\xa0\xa0\xa0el estado de la conexi\xf3n (puede ser "Closing", "Closed" o  "Connected")']})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#terminate",children:[(0,i.jsx)(n.strong,{children:".terminate"}),"( { ",(0,i.jsx)(n.em,{children:"code"})," : Integer ; ",(0,i.jsx)(n.em,{children:"message"})," : Text } )"]}),"\xa0\xa0\xa0\xa0fuerza el cierre de la conexi\xf3n"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#wss",children:[(0,i.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\xa0\xa0\xa0\xa0el objeto padre de la conexi\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass#4dwebsocketservernew",children:(0,i.jsx)(n.code,{children:"WebSocketServer"})})]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".handler"})," contiene el accesor que obtiene el objeto ",(0,i.jsx)(n.code,{children:"connectionHandler"})," utilizado para iniciar la conexi\xf3n."]}),"\n",(0,i.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".id"})," contiene el identificador \xfanico de la conexi\xf3n."]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."}),"\n",(0,i.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Blob )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".send"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text / Blob / Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"El mensaje a enviar"})]})})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".send()"})," env\xeda un *mensaje * al cliente."]}),"\n",(0,i.jsxs)(n.p,{children:["Los siguientes contenidos se env\xedan en funci\xf3n del tipo de ",(0,i.jsx)(n.em,{children:"mensaje"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Contenido"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Texto en UTF-8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Blob"}),(0,i.jsx)(n.td,{children:"Datos binarios"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsxs)(n.td,{children:["Texto en JSON UTF-8 (mismo resultado que con ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html",children:(0,i.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".status"}),' contiene el estado de la conexi\xf3n (puede ser "Closing", "Closed" o  "Connected").']}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."}),"\n",(0,i.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".terminate"}),"( { ",(0,i.jsx)(n.em,{children:"code"})," : Integer ; ",(0,i.jsx)(n.em,{children:"message"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"code"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"C\xf3digo de error enviado al cliente (debe ser > 3000, de lo contrario el mensaje no se env\xeda)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Mensaje de error enviado al cliente"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"|"}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".terminate()"})," fuerza el cierre de la conexi\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:["Un ",(0,i.jsx)(n.em,{children:"code"})," y un ",(0,i.jsx)(n.em,{children:"message"})," pueden ser enviados al cliente durante el cierre para indicar la raz\xf3n de la terminaci\xf3n."]}),"\n",(0,i.jsx)(n.h2,{id:"wss",children:".wss"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".wss"})," contiene el objeto padre de la conexi\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/20/API/WebSocketServerClass#4dwebsocketservernew",children:(0,i.jsx)(n.code,{children:"WebSocketServer"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Esta propiedad es de s\xf3lo lectura."})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var r=s(667294);let i={},c=r.createContext(i);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);