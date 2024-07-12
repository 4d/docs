/*! For license information please see e633f5e3.08cd34c0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52427],{357134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(474848),o=r(28453);const s={id:"allowProject",title:"M\xe9thodes projet"},i=void 0,c={id:"WebServer/allowProject",title:"M\xe9thodes projet",description:"The 4D tags such as 4DEVAL, 4DTEXT, 4DHTML... as well as the /4DACTION URL allow you to trigger the execution of any project method of a 4D project published on the Web. Par exemple, la requ\xeate http://www.server.com/4DACTION/login entra\xeene l'ex\xe9cution de la m\xe9thode projet **login**, si elle existe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/fr/20-R5/WebServer/allowProject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"allowProject",title:"M\xe9thodes projet"},sidebar:"docs",previous:{title:"Traitement des requ\xeates HTTP",permalink:"/docs/fr/20-R5/WebServer/httpRequests"},next:{title:"Pages d'erreur HTTP personnalis\xe9es",permalink:"/docs/fr/20-R5/WebServer/errorPages"}},l={},d=[];function a(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The 4D tags such as ",(0,n.jsx)(t.code,{children:"4DEVAL"}),", ",(0,n.jsx)(t.code,{children:"4DTEXT"}),", ",(0,n.jsx)(t.code,{children:"4DHTML"}),"... as well as the ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/WebServer/httpRequests#/4daction",children:(0,n.jsx)(t.code,{children:"/4DACTION URL"})})," allow you to trigger the execution of any project method of a 4D project published on the Web. Par exemple, la requ\xeate ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," entra\xeene l'ex\xe9cution de la m\xe9thode projet ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"login"})}),", si elle existe."]}),"\n",(0,n.jsx)(t.p,{children:"Ce m\xe9canisme pr\xe9sente donc un risque de s\xe9curit\xe9 pour l'application, notamment si un internaute d\xe9clenche intentionnellement (ou non) une m\xe9thode non destin\xe9e \xe0 \xeatre ex\xe9cut\xe9e via le web. Vous pouvez \xe9viter ce risque comme suit :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Filter the methods called via the URLS using the ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/WebServer/authentication#on-web-authentication",children:(0,n.jsx)(t.code,{children:"On Web Authentication"})})," database method. Inconv\xe9nients : si la base de donn\xe9es comprend un grand nombre de m\xe9thodes, ce syst\xe8me peut \xeatre difficile \xe0 g\xe9rer."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Utilisez l'option ",(0,n.jsx)(t.strong,{children:"Available through 4D tags and URLs (4DACTION...)"})," de la bo\xeete de dialogue Propri\xe9t\xe9s de la m\xe9thode :"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(829953).A+"",width:"577",height:"575"})}),"\n",(0,n.jsxs)(t.p,{children:["This option is used to individually designate each project method that can be called using the ",(0,n.jsx)(t.code,{children:"4DACTION"})," special URL, or the ",(0,n.jsx)(t.code,{children:"4DTEXT"}),", ",(0,n.jsx)(t.code,{children:"4DHTML"}),", ",(0,n.jsx)(t.code,{children:"4DEVAL"}),", ",(0,n.jsx)(t.code,{children:"4DSCRIPT"}),", ",(0,n.jsx)(t.code,{children:"4DIF"}),", ",(0,n.jsx)(t.code,{children:"4DELSEIF"})," or ",(0,n.jsx)(t.code,{children:"4DLOOP"})," tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.)."]}),"\n",(0,n.jsxs)(t.p,{children:["This option is unchecked by default. Methods that can be executed through ",(0,n.jsx)(t.code,{children:"4DACTION"})," or specific tags must be specifically indicated."]}),"\n",(0,n.jsx)(t.p,{children:"In the Explorer, Project methods with this property are given a specific icon:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(798617).A+"",width:"54",height:"48"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,a=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},798617:(e,t,r)=>{r.d(t,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},829953:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);