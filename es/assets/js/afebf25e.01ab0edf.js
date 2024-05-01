"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59047],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},922507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"WebSocketConnectionClass",title:"WebSocketConnection"},i=void 0,p={unversionedId:"API/WebSocketConnectionClass",id:"version-20-R4/API/WebSocketConnectionClass",title:"WebSocketConnection",description:"La API de la clase WebSocketConnection permite gestionar conexiones WebSocket, una vez definidas mediante la clase WebSocketServer.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/es/20-R4/API/WebSocketConnectionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebSocket",permalink:"/docs/es/20-R4/API/WebSocketClass"},next:{title:"WebSocketServer",permalink:"/docs/es/20-R4/API/WebSocketServerClass"}},s={},c=[{value:"Objeto WebSocketConnection",id:"objeto-websocketconnection",level:3},{value:".handler",id:"handler",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".id",id:"id",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".send()",id:"send",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".status",id:"status",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".wss",id:"wss",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4}],d={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"La API de la clase ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," permite gestionar conexiones WebSocket, una vez definidas mediante la clase ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R4/API/WebSocketServerClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")),"."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Para obtener una visi\xf3n general y algunos ejemplos de la implementaci\xf3n del servidor WebSocket en 4D, consulte la clase ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R4/API/WebSocketServerClass"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Hist\xf3rico"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"20"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,a.kt)("h3",r({},{id:"objeto-websocketconnection"}),"Objeto WebSocketConnection"),(0,a.kt)("p",null,"Un objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," se crea autom\xe1ticamente cuando la funci\xf3n de retrollamada ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R4/API/WebSocketServerClass#wsshandler-parameter"}),(0,a.kt)("inlineCode",{parentName:"a"},"WSHandler.onConnection"))," del objeto ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R4/API/WebSocketServerClass#4dwebsocketservernew"}),"WebSocketServer")," devuelve un objeto ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R4/API/WebSocketServerClass#connectionhandler-object"}),(0,a.kt)("inlineCode",{parentName:"a"},"connectionHandler")),"."),(0,a.kt)("p",null,"Los objetos WebSocketConnection ofrecen las siguientes propiedades y funciones:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#handler"}),(0,a.kt)("strong",{parentName:"a"},".handler")," : Object"),"\xa0","\xa0","\xa0","\xa0","el accesor que obtiene el objeto ",(0,a.kt)("inlineCode",{parentName:"td"},"connectionHandler")," utilizado para iniciar la conexi\xf3n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#id"}),(0,a.kt)("strong",{parentName:"a"},".id")," : Integer"),"\xa0","\xa0","\xa0","\xa0","el identificador \xfanico de la conexi\xf3n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#send()"}),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"a"},".send"),"( ",(0,a.kt)("em",{parentName:"a"},"message")," : Object )"),"\xa0","\xa0","\xa0","\xa0","env\xeda un ",(0,a.kt)("em",{parentName:"td"},"mensaje ")," al cliente")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#status"}),(0,a.kt)("strong",{parentName:"a"},".status")," : Text"),"\xa0","\xa0","\xa0","\xa0",'el estado de la conexi\xf3n (puede ser "Closing", "Closed" o  "Connected")')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#terminate()"}),(0,a.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"a"},"code")," : Integer ; ",(0,a.kt)("em",{parentName:"a"},"message")," : Text } )"),"\xa0","\xa0","\xa0","\xa0","fuerza el cierre de la conexi\xf3n")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#wss"}),(0,a.kt)("strong",{parentName:"a"},".wss")," : 4D.WebSocketServer"),"\xa0","\xa0","\xa0","\xa0","el objeto padre de la conexi\xf3n ",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/es/20-R4/API/WebSocketServerClass#4dwebsocketservernew"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")))))),(0,a.kt)("h2",r({},{id:"handler"}),".handler"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".handler")," : Object"),(0,a.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,a.kt)("p",null,"La propiedad ",(0,a.kt)("inlineCode",{parentName:"p"},".handler")," contiene el accesor que obtiene el objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionHandler")," utilizado para iniciar la conexi\xf3n."),(0,a.kt)("h2",r({},{id:"id"}),".id"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".id")," : Integer"),(0,a.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,a.kt)("p",null,"La propiedad ",(0,a.kt)("inlineCode",{parentName:"p"},".id")," contiene el identificador \xfanico de la conexi\xf3n."),(0,a.kt)("p",null,"Esta propiedad es de s\xf3lo lectura."),(0,a.kt)("h2",r({},{id:"send"}),".send()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Text )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Blob )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},".send"),"( ",(0,a.kt)("em",{parentName:"p"},"message")," : Object )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text / Blob / Object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"El mensaje a enviar")))),(0,a.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,a.kt)("p",null,"La funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},".send()")," env\xeda un ",(0,a.kt)("em",{parentName:"p"},"mensaje ")," al cliente."),(0,a.kt)("p",null,"Los siguientes contenidos se env\xedan en funci\xf3n del tipo de ",(0,a.kt)("em",{parentName:"p"},"mensaje"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Contenido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Texto en UTF-8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Datos binarios")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Texto en JSON UTF-8 (mismo resultado que con ",(0,a.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"JSON Stringify")),")")))),(0,a.kt)("h2",r({},{id:"status"}),".status"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".status")," : Text"),(0,a.kt)("h4",r({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,a.kt)("p",null,"La propiedad ",(0,a.kt)("inlineCode",{parentName:"p"},".status"),' contiene el estado de la conexi\xf3n (puede ser "Closing", "Closed" o  "Connected").'),(0,a.kt)("p",null,"Esta propiedad es de s\xf3lo lectura."),(0,a.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,a.kt)("em",{parentName:"p"},"code")," : Integer ; ",(0,a.kt)("em",{parentName:"p"},"message")," : Text } )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"C\xf3digo de error enviado al cliente (debe ser > 3000, de lo contrario el mensaje no se env\xeda)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mensaje de error enviado al cliente")))),(0,a.kt)("h4",r({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,a.kt)("p",null,"La funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},".terminate()")," fuerza el cierre de la conexi\xf3n."),(0,a.kt)("p",null,"Un ",(0,a.kt)("em",{parentName:"p"},"code")," y un ",(0,a.kt)("em",{parentName:"p"},"message")," pueden ser enviados al cliente durante el cierre para indicar la raz\xf3n de la terminaci\xf3n."),(0,a.kt)("h2",r({},{id:"wss"}),".wss"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".wss")," : 4D.WebSocketServer"),(0,a.kt)("h4",r({},{id:"descripci\xf3n-5"}),"Descripci\xf3n"),(0,a.kt)("p",null,"La propiedad ",(0,a.kt)("inlineCode",{parentName:"p"},".wss")," contiene el objeto padre de la conexi\xf3n ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/es/20-R4/API/WebSocketServerClass#4dwebsocketservernew"}),(0,a.kt)("inlineCode",{parentName:"a"},"WebSocketServer")),"."),(0,a.kt)("p",null,"Esta propiedad es de s\xf3lo lectura."))}m.isMDXComponent=!0}}]);