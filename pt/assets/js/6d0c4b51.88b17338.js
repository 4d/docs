/*! For license information please see 6d0c4b51.88b17338.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67150],{419166:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var r=t(474848),s=t(28453);const n={id:"allowProject",title:"Permitir m\xe9todos projeto"},i=void 0,d={id:"WebServer/allowProject",title:"Permitir m\xe9todos projeto",description:"The 4D tags such as 4DEVAL, 4DTEXT, 4DHTML... as well as the /4DACTION URL allow you to trigger the execution of any project method of a 4D project published on the Web. Por ejemplo, la petici\xf3n http://www.server.com/4DACTION/login provoca la ejecuci\xf3n del m\xe9todo proyecto **login**, si existe.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/pt/20-R5/WebServer/allowProject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"allowProject",title:"Permitir m\xe9todos projeto"},sidebar:"docs",previous:{title:"Processamento de pedidos HTTP",permalink:"/docs/pt/20-R5/WebServer/httpRequests"},next:{title:"P\xe1ginas de erro HTTP personalizadas",permalink:"/docs/pt/20-R5/WebServer/errorPages"}},c={},a=[];function l(e){const o={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["The 4D tags such as ",(0,r.jsx)(o.code,{children:"4DEVAL"}),", ",(0,r.jsx)(o.code,{children:"4DTEXT"}),", ",(0,r.jsx)(o.code,{children:"4DHTML"}),"... as well as the ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R5/WebServer/httpRequests#/4daction",children:(0,r.jsx)(o.code,{children:"/4DACTION URL"})})," allow you to trigger the execution of any project method of a 4D project published on the Web. Por ejemplo, la petici\xf3n ",(0,r.jsx)(o.em,{children:(0,r.jsx)(o.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," provoca la ejecuci\xf3n del m\xe9todo proyecto ",(0,r.jsx)(o.em,{children:(0,r.jsx)(o.strong,{children:"login"})}),", si existe."]}),"\n",(0,r.jsx)(o.p,{children:"Este mecanismo representa, portanto, um risco de seguran\xe7a para a aplica\xe7\xe3o, em especial se um utilizador da Internet acionar intencionalmente (ou n\xe3o) um m\xe9todo n\xe3o destinado a ser executado atrav\xe9s da Web. Este risco pode ser evitado das seguintes formas:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Filter the methods called via the URLS using the ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R5/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(o.code,{children:"On Web Authentication"})})," database method. Desvantagens: Se a base de dados incluir um grande n\xfamero de m\xe9todos, este sistema pode ser dif\xedcil de gerir."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Utilice la opci\xf3n ",(0,r.jsx)(o.strong,{children:"Disponible a trav\xe9s de etiquetas 4D y URLs (4DACTION...)"})," que se encuentra en la caja de di\xe1logo de propiedades del m\xe9todo:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:t(785781).A+"",width:"577",height:"575"})}),"\n",(0,r.jsxs)(o.p,{children:["Esta opci\xf3n se utiliza para designar individualmente cada m\xe9todo del proyecto que puede ser llamado utilizando la URL especial ",(0,r.jsx)(o.code,{children:"4DACTION"}),", o las etiquetas ",(0,r.jsx)(o.code,{children:"4DTEXT"}),", ",(0,r.jsx)(o.code,{children:"4DHTML"}),", ",(0,r.jsx)(o.code,{children:"4DEVAL"}),", ",(0,r.jsx)(o.code,{children:"4DSCRIPT"}),", ",(0,r.jsx)(o.code,{children:"4DIF"}),", ",(0,r.jsx)(o.code,{children:"4DELSEIF"})," o ",(0,r.jsx)(o.code,{children:"4DLOOP"}),". Se n\xe3o estiver assinalado, o m\xe9todo de projeto em causa n\xe3o pode ser executado diretamente atrav\xe9s de um pedido HTTP. Por outro lado, pode ser executado atrav\xe9s de outros tipos de chamadas (f\xf3rmulas, outros m\xe9todos, etc.)."]}),"\n",(0,r.jsxs)(o.p,{children:["Esta op\xe7\xe3o n\xe3o est\xe1 selecionada por defeito. Los m\xe9todos que se pueden ejecutar a trav\xe9s de ",(0,r.jsx)(o.code,{children:"4DACTION"})," o de etiquetas espec\xedficas deben indicarse espec\xedficamente."]}),"\n",(0,r.jsx)(o.p,{children:"No Explorador, os m\xe9todos de projeto com esta propriedade recebem um \xedcone espec\xedfico:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:t(25901).A+"",width:"54",height:"48"})})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,o,t)=>{var r=t(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,t){var r,n={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(l=o.ref),o)i.call(o,r)&&!c.hasOwnProperty(r)&&(n[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===n[r]&&(n[r]=o[r]);return{$$typeof:s,type:e,key:a,ref:l,props:n,_owner:d.current}}o.Fragment=n,o.jsx=a,o.jsxs=a},474848:(e,o,t)=>{e.exports=t(221020)},25901:(e,o,t)=>{t.d(o,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},785781:(e,o,t)=>{t.d(o,{A:()=>r});const r=t.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>d});var r=t(296540);const s={},n=r.createContext(s);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);