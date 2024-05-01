"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57384],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},469782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"WebSocketConnectionClass",title:"WebSocketConnection"},i=void 0,p={unversionedId:"API/WebSocketConnectionClass",id:"version-20/API/WebSocketConnectionClass",title:"WebSocketConnection",description:"Hist\xf3rico",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/pt/20/API/WebSocketConnectionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/pt/20/API/WebServerClass"},next:{title:"WebSocketServer",permalink:"/docs/pt/20/API/WebSocketServerClass"}},s={},d=[{value:"Objecto WebSocketConnection",id:"objecto-websocketconnection",level:3},{value:".handler",id:"handler",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".id",id:"id",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".send()",id:"send",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".status",id:"status",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:".wss",id:"wss",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4}],m={toc:d};function c(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"20"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,"A API da classe ",(0,n.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," permite-lhe tratar as liga\xe7\xf5es WebSocket, uma vez estabelecidas utilizando a classe ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/WebSocketServerClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebSocketServer")),"."),(0,n.kt)("admonition",r({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Para uma vis\xe3o geral e alguns exemplos da implementa\xe7\xe3o do servidor WebSocket em 4D, consulte a classe ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/WebSocketServerClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebSocketServer")),".")),(0,n.kt)("h3",r({},{id:"objecto-websocketconnection"}),"Objecto WebSocketConnection"),(0,n.kt)("p",null,"Um objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"WebSocketConnection")," \xe9 automaticamente criado quando a fun\xe7\xe3o de retorno de chamada ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/WebSocketServerClass#wsshandler-parameter"}),(0,n.kt)("inlineCode",{parentName:"a"},"WSHandler.onConnection"))," do objecto ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/WebSocketServerClass#4dwebsocketservernew"}),"WebSocketServer")," devolve um objecto ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/WebSocketServerClass#connectionhandler-object"}),(0,n.kt)("inlineCode",{parentName:"a"},"connectionHandler")),"."),(0,n.kt)("p",null,"Os objectos Httprequest fornecem as seguintes propriedades e fun\xe7\xf5es:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#handler"}),(0,n.kt)("strong",{parentName:"a"},".handler")," : Objecto"),"\xa0","\xa0","\xa0","\xa0","o acessor que obt\xe9m o objecto ",(0,n.kt)("inlineCode",{parentName:"td"},"connectionHandler")," utilizado para iniciar a liga\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#id"}),(0,n.kt)("strong",{parentName:"a"},".id")," : Integer"),"\xa0","\xa0","\xa0","\xa0","o identificador \xfanico da liga\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#send()"}),(0,n.kt)("strong",{parentName:"a"},".send"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".send"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Blob )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".send"),"( ",(0,n.kt)("em",{parentName:"a"},"message")," : Object )"),"\xa0","\xa0","\xa0","\xa0","envia uma ",(0,n.kt)("em",{parentName:"td"},"mensagem")," ao cliente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#status"}),(0,n.kt)("strong",{parentName:"a"},".status")," : Text"),"\xa0","\xa0","\xa0","\xa0",'o estado da liga\xe7\xe3o (pode ser "Closing", "Closed" ou "Connected")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#terminate()"}),(0,n.kt)("strong",{parentName:"a"},".terminate"),"( { ",(0,n.kt)("em",{parentName:"a"},"code")," : Integer ; ",(0,n.kt)("em",{parentName:"a"},"message")," : Text } )"),"\xa0","\xa0","\xa0","\xa0","for\xe7a o encerramento da liga\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#wss"}),(0,n.kt)("strong",{parentName:"a"},".wss")," : 4D.WebSocketServer"),"\xa0","\xa0","\xa0","\xa0","o ",(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/20/API/WebSocketServerClass#4dwebsocketservernew"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebSocketServer"))," objecto pai da liga\xe7\xe3o")))),(0,n.kt)("h2",r({},{id:"handler"}),".handler"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".handler")," : Objecto"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".handler")," property contains o acessor que obt\xe9m o objecto ",(0,n.kt)("inlineCode",{parentName:"p"},"connectionHandler")," utilizado para iniciar a liga\xe7\xe3o."),(0,n.kt)("h2",r({},{id:"id"}),".id"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".id")," : Integer"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".id")," cont\xe9m o identificador \xfanico da liga\xe7\xe3o."),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."),(0,n.kt)("h2",r({},{id:"send"}),".send()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".send"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".send"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Blob )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".send"),"( ",(0,n.kt)("em",{parentName:"p"},"message")," : Object )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text / Blob / Object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A mensagem a enviar")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".send()")," envia uma ",(0,n.kt)("em",{parentName:"p"},"mensagem")," ao cliente."),(0,n.kt)("p",null,"Os conte\xfados seguintes s\xe3o enviados em fun\xe7\xe3o do tipo de ",(0,n.kt)("em",{parentName:"p"},"mensagem"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Conte\xfado"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Texto em UTF-8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blob"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Dados bin\xe1rios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Texto em JSON UTF-8 (o mesmo resultado que com ",(0,n.kt)("a",r({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"JSON Stringify")),")")))),(0,n.kt)("h2",r({},{id:"status"}),".status"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".status")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".status"),' cont\xe9m o estado da liga\xe7\xe3o (pode ser "Closing", "Closed" ou "Connected").'),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."),(0,n.kt)("h2",r({},{id:"terminate"}),".terminate()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".terminate"),"( { ",(0,n.kt)("em",{parentName:"p"},"code")," : Integer ; ",(0,n.kt)("em",{parentName:"p"},"message")," : Text } )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"code"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"C\xf3digo de erro enviado ao cliente (deve ser > 3000, caso contr\xe1rio a mensagem n\xe3o \xe9 enviada)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mensagem de erro enviada ao cliente")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".terminate()")," for\xe7a o encerramento da liga\xe7\xe3o."),(0,n.kt)("p",null,"Um ",(0,n.kt)("em",{parentName:"p"},"code")," e uma ",(0,n.kt)("em",{parentName:"p"},"message")," podem ser enviados ao cliente durante o encerramento para indicar o motivo da rescis\xe3o."),(0,n.kt)("h2",r({},{id:"wss"}),".wss"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".wss")," : 4D.WebSocketServer"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-5"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".wss")," cont\xe9m o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20/API/WebSocketServerClass#4dwebsocketservernew"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebSocketServer"))," objecto pai da liga\xe7\xe3o."),(0,n.kt)("p",null,"Esta propriedade \xe9 s\xf3 de leitura."))}c.isMDXComponent=!0}}]);