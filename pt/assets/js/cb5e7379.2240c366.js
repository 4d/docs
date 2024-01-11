"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72197],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||o;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},592044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>s});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"WebSocketClass",title:"WebSocket"},i=void 0,d={unversionedId:"API/WebSocketClass",id:"version-20-R4/API/WebSocketClass",title:"WebSocket",description:"Hist\xf3rico",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/API/WebSocketClass.md",sourceDirName:"API",slug:"/API/WebSocketClass",permalink:"/docs/pt/API/WebSocketClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"WebSocketClass",title:"WebSocket"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/pt/API/WebServerClass"},next:{title:"WebSocketConnection",permalink:"/docs/pt/API/WebSocketConnectionClass"}},p={},s=[{value:"Exemplo",id:"exemplo",level:3},{value:"Objeto WebSocket",id:"objeto-websocket",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"Par\xe2metro <em>connectionHandler</em>",id:"par\xe2metro-connectionhandler",level:3},{value:"Exemplo",id:"exemplo-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".handler",id:"handler",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".id",id:"id",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".send()",id:"send",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4},{value:".url",id:"url",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-6",level:4}],m={toc:s};function c(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v20 R2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,"A classe ",(0,n.kt)("inlineCode",{parentName:"p"},"WebSocket")," permite-lhe abrir uma liga\xe7\xe3o de cliente WebSocket com um servidor, enviar e receber dados e fechar a liga\xe7\xe3o."),(0,n.kt)("p",null,"As liga\xe7\xf5es cliente WebSocket s\xe3o \xfateis, por exemplo, para receber dados financeiros em tempo real ou enviar e receber mensagens de um chat."),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Neste exemplo, criamos um cliente WebSocket muito b\xe1sico."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Criar a classe usu\xe1rio ",(0,n.kt)("inlineCode",{parentName:"li"},"WSConnectionHandler")," que cont\xe9m as fun\xe7\xf5es de retorno de chamada utilizadas para tratar os retornos de chamada de eventos WebSocket:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// WSConnectionHandler class\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("Connection closed")\n')),(0,n.kt)("ol",r({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Conecte-se ao servidor WebSocket a partir de um formul\xe1rio 4D instanciando um 4D.WebSocket:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n")),(0,n.kt)("ol",r({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Para enviar mensagens para o servidor WebSocket a partir do formul\xe1rio 4D, pode escrever:")),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'Form.webSocket.send("Hello world")\n\n')),(0,n.kt)("h3",r({},{id:"objeto-websocket"}),"Objeto WebSocket"),(0,n.kt)("p",null,"Os objetos WebSocket fornecem as seguintes propriedades e fun\xe7\xf5es:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#dataType"}),(0,n.kt)("strong",{parentName:"a"},".dataType")," : Text"),"\xa0","\xa0","\xa0","\xa0","o tipo de conte\xfado do corpo da resposta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#handler"}),(0,n.kt)("strong",{parentName:"a"},".handler")," : Objecto"),"\xa0","\xa0","\xa0","\xa0","o acessor que obt\xe9m o objecto ",(0,n.kt)("inlineCode",{parentName:"td"},"connectionHandler")," utilizado para iniciar a liga\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#id"}),(0,n.kt)("strong",{parentName:"a"},".id")," : Longint"),"\xa0","\xa0","\xa0","\xa0","o identificador \xfanico da liga\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#send"}),(0,n.kt)("strong",{parentName:"a"},".send"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".send"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Blob )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".send"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Object )"),"\xa0","\xa0","\xa0","\xa0","envia ",(0,n.kt)("em",{parentName:"td"},"message")," para o servidor WebSocket no tipo de dados definido (Text, Blob ou Object)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#status"}),(0,n.kt)("strong",{parentName:"a"},".status")," : Text"),"\xa0","\xa0","\xa0","\xa0",'o estado atual da liga\xe7\xe3o (pode ser "Connecting", "Closing", "Closed" ou "Connected")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#terminate"}),(0,n.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,n.kt)("em",{parentName:"a"},"code")," : Integer { ; ",(0,n.kt)("em",{parentName:"a"},"reason")," : Text } } )"),"\xa0","\xa0","\xa0","\xa0","fecha a liga\xe7\xe3o WebSocket, juntamente com os par\xe2metros opcionais ",(0,n.kt)("em",{parentName:"td"},"code")," e ",(0,n.kt)("em",{parentName:"td"},"reason"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#url"}),(0,n.kt)("strong",{parentName:"a"},".url")," : Text"),"\xa0","\xa0","\xa0","\xa0","o URL ao qual o WebSocket se ligou")))),(0,n.kt)("h2",r({},{id:"4dwebsocketnew"}),"4D.WebSocket.new()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v20 R3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Suporte da propriedade ",(0,n.kt)("inlineCode",{parentName:"td"},"headers")," em ",(0,n.kt)("em",{parentName:"td"},"connectionHandler")))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4D.WebSocket.new"),"( ",(0,n.kt)("em",{parentName:"p"},"url")," : Text { ; ",(0,n.kt)("em",{parentName:"p"},"connectionHandler")," : Object } ) : 4D.WebSocket"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"url"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL a que se deve ligar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#connectionHandler-parameter"}),"connectionHandler")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto que declara as chamadas de retorno WebSocket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.WebSocket"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Novo ",(0,n.kt)("a",r({parentName:"td"},{href:"#websocket-object"}),"objeto WebSocket"))))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.WebSocket.new()")," cria e devolve um novo objeto ",(0,n.kt)("a",r({parentName:"p"},{href:"#websocket-object"}),(0,n.kt)("inlineCode",{parentName:"a"},"4D.WebSocket"))," ligado ao servidor WebSocket no endere\xe7o que passou em ",(0,n.kt)("em",{parentName:"p"},"url"),". O objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.WebSocket")," fornece uma API para criar e gerir uma liga\xe7\xe3o WebSocket a um servidor, bem como para enviar e receber dados de e para o servidor."),(0,n.kt)("p",null,"Em ",(0,n.kt)("em",{parentName:"p"},"url"),", passe o URL ao qual o servidor WebSocket responder\xe1. Podem ser utilizados os seguintes padr\xf5es de URL:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ws://host[:port]path[?query]")," para liga\xe7\xf5es padr\xe3o"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wss://host[:port]path[?query]")," para liga\xe7\xf5es protegidas por TLS")),(0,n.kt)("p",null,"Se a liga\xe7\xe3o n\xe3o for poss\xedvel, \xe9 devolvido um objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," sendo gerado um erro (que pode ser intersetado atrav\xe9s de um m\xe9todo instalado com ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL"),")."),(0,n.kt)("h3",r({},{id:"par\xe2metro-connectionhandler"}),"Par\xe2metro ",(0,n.kt)("em",{parentName:"h3"},"connectionHandler")),(0,n.kt)("p",null,"In ",(0,n.kt)("em",{parentName:"p"},"connectionHandler"),", you can pass an object containing callback functions to be called according to connection events, as well as data type and headers to handle."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As chamadas de retorno s\xe3o chamadas automaticamente no contexto do formul\xe1rio ou do worker que inicia a liga\xe7\xe3o."),(0,n.kt)("li",{parentName:"ul"},"The WebSocket will be valid as long as the form or worker is not closed.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onMessage"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fun\xe7\xe3o de retorno de chamada para dados WebSocket. Chamado sempre que o WebSocket tiver recebido dados. A chamada de retorno recebe os seguintes par\xe2metros:",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$1"),": Objeto WebSocket"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): sempre "message"'),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.data")," (texto, blob, ou objeto, ver ",(0,n.kt)("inlineCode",{parentName:"td"},"dataType"),"): Dados recebidos")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onError"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fun\xe7\xe3o de retorno de chamada para erros de execu\xe7\xe3o. A chamada de retorno recebe os seguintes par\xe2metros:",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$1"),": Objeto WebSocket"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.type"),' (text): sempre "error"'),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.errors"),": cole\xe7\xe3o de pilha de erros 4D em caso de erro de execu\xe7\xe3o.",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"[].errCode")," (number): C\xf3digo de erro 4D"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"[].message")," (text): Descri\xe7\xe3o do erro 4D"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"[].componentSignature")," (text): Assinatura do componente interno que retornou o erro")))))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onTerminate"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fun\xe7\xe3o de retorno de chamada quando o WebSocket \xe9 terminado. A chamada de retorno recebe os seguintes par\xe2metros:",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$1"),": Objeto WebSocket"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.code")," (number, s\xf3 de leitura): curto sem sinal que cont\xe9m o c\xf3digo de fecho enviado pelo servidor."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.reason")," (text, s\xf3 de leitura): Motivo pelo qual o servidor fechou a conex\xe3o. Isto \xe9 espec\xedfico do servidor e do subprotocolo em causa."),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.wasClean")," (boolean, somente leitura): indica se a conex\xe3o foi ou n\xe3o fechada de forma limpa.")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"onOpen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/API/FunctionClass"}),"Function")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Fun\xe7\xe3o de retorno de chamada quando o websocket est\xe1 aberto. A chamada de retorno recebe os seguintes par\xe2metros:",(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$1"),": Objeto WebSocket"),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2"),": Object"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"$2.type"),' (texto): sempre "open"')))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"dataType"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'Tipo de dados recebidos ou enviados. Valores dispon\xedveis: "text" (padr\xe3o), "blob", "object". "text" = utf-8')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"headers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Cabe\xe7alhos do WebSocket.",(0,n.kt)("li",null,"Syntax for standard key assignment: ",(0,n.kt)("inlineCode",{parentName:"td"},"headers.*key*:=*value*")," (",(0,n.kt)("em",{parentName:"td"},"value")," can be a Collection if the same key appears multiple times)"),(0,n.kt)("li",null,"Syntax for Cookie assignment (particular case): ",(0,n.kt)("inlineCode",{parentName:"td"},'headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"')))))),(0,n.kt)("p",null,"Aqui est\xe1 a sequ\xeancia de chamadas de retorno:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"onOpen")," \xe9 executado uma vez"),(0,n.kt)("li",{parentName:"ol"},"S\xe3o executados zero ou v\xe1rios ",(0,n.kt)("inlineCode",{parentName:"li"},"onMessage")),(0,n.kt)("li",{parentName:"ol"},"Zero ou um ",(0,n.kt)("inlineCode",{parentName:"li"},"onError")," \xe9 executado (p\xe1ra o processamento)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"onTerminate")," \xe9 sempre executado")),(0,n.kt)("h4",r({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("p",null,"You want to set headers in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WSConnectionHandler")," user class:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'// WSConnectionHandler class\n\nClass constructor($myToken:Text)\n\n// Creation of the headers sent to the server\nThis.headers:=New object("x-authorization";$myToken)\n// We define two cookies\nThis.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"\n...\n\n')),(0,n.kt)("h2",r({},{id:"datatype"}),".dataType"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".dataType")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".dataType"),' cont\xe9m o tipo de conte\xfado do corpo da resposta. Pode ser "text", "blob" ou "object".'),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."),(0,n.kt)("h2",r({},{id:"handler"}),".handler"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".handler")," : Objecto"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".handler")," property contains o acessor que obt\xe9m o objecto ",(0,n.kt)("inlineCode",{parentName:"p"},"connectionHandler")," utilizado para iniciar a liga\xe7\xe3o."),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."),(0,n.kt)("h2",r({},{id:"id"}),".id"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".id")," : Longint"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".id")," cont\xe9m o identificador \xfanico da liga\xe7\xe3o."),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."),(0,n.kt)("h2",r({},{id:"send"}),".send()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".send"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".send"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Blob )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".send"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Object )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text, Blob, Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mensagem a enviar")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".send()")," envia ",(0,n.kt)("em",{parentName:"p"},"message")," para o servidor WebSocket no tipo de dados definido (Text, Blob ou Object)."),(0,n.kt)("p",null,"Os conte\xfados seguintes s\xe3o enviados em fun\xe7\xe3o do tipo de ",(0,n.kt)("em",{parentName:"p"},"mensagem"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Conte\xfado"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Texto em UTF-8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dados bin\xe1rios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text in JSON UTF-8 (same result as with ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv20/help/command/en/page1217.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"JSON Stringify")),")")))),(0,n.kt)("h2",r({},{id:"status"}),".status"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".status")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".status"),' cont\xe9m o estado atual da liga\xe7\xe3o (pode ser "Connecting", "Closing", "Closed" ou "Connected").'),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."),(0,n.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,n.kt)("em",{parentName:"p"},"code")," : Integer { ; ",(0,n.kt)("em",{parentName:"p"},"reason")," : Text } } )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"C\xf3digo de estado que explica porque \xe9 que a liga\xe7\xe3o est\xe1 a ser encerrada")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"reason"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"O motivo pelo qual a liga\xe7\xe3o est\xe1 a fechar")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-5"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".terminate()")," fecha a liga\xe7\xe3o WebSocket, juntamente com os par\xe2metros opcionais ",(0,n.kt)("em",{parentName:"p"},"code")," e ",(0,n.kt)("em",{parentName:"p"},"reason"),"."),(0,n.kt)("p",null,"In ",(0,n.kt)("em",{parentName:"p"},"code"),", you can pass a status code explaining why the connection is being closed (see also ",(0,n.kt)("a",r({parentName:"p"},{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5"}),"WebSocket Connection Close Code in the RFC6455"),"):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If unspecified, a close code for the connection is automatically set to 1000 for a normal closure, or otherwise to another standard value in the range 1001-1015 that indicates the actual reason the connection was closed."),(0,n.kt)("li",{parentName:"ul"},"Se especificado, o valor desse par\xe2metro de c\xf3digo substitui a configura\xe7\xe3o autom\xe1tica. O valor deve ser um n\xfamero inteiro. Ou 1000, ou um c\xf3digo personalizado no intervalo 3000-4999. If you specify a ",(0,n.kt)("em",{parentName:"li"},"code")," value, you should also specify a ",(0,n.kt)("em",{parentName:"li"},"reason")," value.")),(0,n.kt)("p",null,"In ",(0,n.kt)("em",{parentName:"p"},"reason"),", you can pass a string describing why the connection is being closed. "),(0,n.kt)("h2",r({},{id:"url"}),".url"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".url")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-6"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".url")," cont\xe9m o URL ao qual o WebSocket se ligou. \xc9 o URL que passou para a fun\xe7\xe3o ",(0,n.kt)("a",r({parentName:"p"},{href:"#4dwebsocketnew"}),(0,n.kt)("inlineCode",{parentName:"a"},"new()")),"."),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."))}c.isMDXComponent=!0}}]);