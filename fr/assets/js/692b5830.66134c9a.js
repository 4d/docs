/*! For license information please see 692b5830.66134c9a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22446],{881800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=s(474848),t=s(28453);const i={id:"WebSocketConnectionClass",title:"WebSocketConnection"},c=void 0,d={id:"API/WebSocketConnectionClass",title:"WebSocketConnection",description:"Historique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/API/WebSocketConnectionClass.md",sourceDirName:"API",slug:"/API/WebSocketConnectionClass",permalink:"/docs/fr/20/API/WebSocketConnectionClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"WebSocketConnectionClass",title:"WebSocketConnection"},sidebar:"docs",previous:{title:"WebServer",permalink:"/docs/fr/20/API/WebServerClass"},next:{title:"WebSocketServer",permalink:"/docs/fr/20/API/WebSocketServerClass"}},l={},o=[{value:"Objet WebSocketConnection",id:"Objet-WebSocketConnection",level:3},{value:".handler",id:"handler",level:2},{value:"Description",id:"Description",level:4},{value:".id",id:"id",level:2},{value:"Description",id:"Description-1",level:4},{value:".send()",id:"send",level:2},{value:"Description",id:"Description-2",level:4},{value:".status",id:"status",level:2},{value:"Description",id:"Description-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"Description",id:"Description-4",level:4},{value:".wss",id:"wss",level:2},{value:"Description",id:"Description-5",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["L'API de la classe ",(0,r.jsx)(n.code,{children:"WebSocketConnection"})," vous permet de g\xe9rer les connexions WebSocket, une fois qu'elles ont \xe9t\xe9 \xe9tablies \xe0 l'aide de la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Pour une vue d'ensemble et quelques exemples de la mise en \u0153uvre du serveur WebSocket dans 4D, veuillez vous r\xe9f\xe9rer \xe0 la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"Objet-WebSocketConnection",children:"Objet WebSocketConnection"}),"\n",(0,r.jsxs)(n.p,{children:["Un objet ",(0,r.jsx)(n.code,{children:"WebSocketConnection"})," est automatiquement cr\xe9\xe9 lorsque la fonction de callback ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass#wsshandler-parameter",children:(0,r.jsx)(n.code,{children:"WSHandler.onConnection"})})," de l'objet ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass#4dwebsocketservernew",children:"WebSocketServer"})," renvoie un objet ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass#connectionhandler-object",children:(0,r.jsx)(n.code,{children:"connectionHandler"})})," ."]}),"\n",(0,r.jsx)(n.p,{children:"Les objets WebSocketConnection offrent les propri\xe9t\xe9s et fonctions suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#handler",children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),"\xa0\xa0\xa0\xa0l'accesseur qui obtient l'objet ",(0,r.jsx)(n.code,{children:"connectionHandler"})," utilis\xe9 pour initier la connexion"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#id",children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),"\xa0\xa0\xa0\xa0l'identifiant unique de la connexion"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send()",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\xa0\xa0\xa0\xa0envoie un *message * au client"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#status",children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),'\xa0\xa0\xa0\xa0l\'\xe9tat de la connexion (peut \xeatre "Closing", "Closed" ou "Connected")']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#terminate()",children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer ; ",(0,r.jsx)(n.em,{children:"message"})," : Text } )"]}),"\xa0\xa0\xa0\xa0force la fermeture de la connexion"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#wss",children:[(0,r.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\xa0\xa0\xa0\xa0l'objet parent ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass#4dwebsocketservernew",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})})," de la connexion"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,r.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".handler"})," contient l'accesseur qui obtient l'objet ",(0,r.jsx)(n.code,{children:"connectionHandler"})," utilis\xe9 pour initier la connexion."]}),"\n",(0,r.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".id"})," contient l'identifiant unique de la connexion."]}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text / Blob / Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Le message \xe0 envoyer"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"Description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".send()"})," envoie un *message * au client."]}),"\n",(0,r.jsx)(n.p,{children:"Les contenus suivants sont envoy\xe9s en fonction du type de *message * :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Contenu"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Texte en UTF-8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Donn\xe9es binaires"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["Texte en JSON UTF-8 (m\xeame r\xe9sultat qu'avec ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1217.html",children:(0,r.jsx)(n.code,{children:"JSON Stringify"})}),")"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-3",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".status"}),' contient l\'\xe9tat de la connexion (peut \xeatre "Closing", "Closed" ou "Connected").']}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."}),"\n",(0,r.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer ; ",(0,r.jsx)(n.em,{children:"message"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Code d'erreur envoy\xe9 au client (doit \xeatre > 3000, sinon le message n'est pas envoy\xe9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Message d'erreur envoy\xe9 au client"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"Description-4",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".terminate()"})," force la fermeture de la connexion."]}),"\n",(0,r.jsx)(n.p,{children:"Un *code * et un *message * peuvent \xeatre envoy\xe9s au client pendant la fermeture pour indiquer la raison de la r\xe9siliation."}),"\n",(0,r.jsx)(n.h2,{id:"wss",children:".wss"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\n",(0,r.jsx)(n.h4,{id:"Description-5",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".wss"})," contient l'objet parent ",(0,r.jsx)(n.a,{href:"/docs/fr/20/API/WebSocketServerClass#4dwebsocketservernew",children:(0,r.jsx)(n.code,{children:"WebSocketServer"})})," de la connexion."]}),"\n",(0,r.jsx)(n.p,{children:"Cette propri\xe9t\xe9 est en lecture seule."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,i={},o=null,h=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:o,ref:h,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var r=s(296540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);