/*! For license information please see a575845b.070f9fc9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21212],{549697:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=o(474848),s=o(28453);const n={id:"allowProject",title:"Allowing project methods"},i=void 0,c={id:"WebServer/allowProject",title:"Allowing project methods",description:"The 4D tags such as 4DEVAL, 4DTEXT, 4DHTML... as well as the /4DACTION URL allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request http://www.server.com/4DACTION/login causes the execution of the login project method, if it exists.",source:"@site/versioned_docs/version-20-R5/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/WebServer/allowProject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"allowProject",title:"Allowing project methods"},sidebar:"docs",previous:{title:"Processing HTTP requests",permalink:"/docs/WebServer/httpRequests"},next:{title:"Custom HTTP Error Pages",permalink:"/docs/WebServer/errorPages"}},l={},d=[];function a(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The 4D tags such as ",(0,r.jsx)(t.code,{children:"4DEVAL"}),", ",(0,r.jsx)(t.code,{children:"4DTEXT"}),", ",(0,r.jsx)(t.code,{children:"4DHTML"}),"... as well as the ",(0,r.jsx)(t.a,{href:"/docs/WebServer/httpRequests#/4daction",children:(0,r.jsx)(t.code,{children:"/4DACTION URL"})})," allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," causes the execution of the ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"login"})})," project method, if it exists."]}),"\n",(0,r.jsx)(t.p,{children:"This mechanism therefore presents a security risk for the application, in particular if an Internet user intentionally (or unintentionally) triggers a method not intended for execution via the web. You can avoid this risk in the following ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Filter the methods called via the URLS using the ",(0,r.jsx)(t.a,{href:"/docs/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(t.code,{children:"On Web Authentication"})})," database method. Drawbacks: If the database includes a great number of methods, this system may be difficult to manage."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.strong,{children:"Available through 4D tags and URLs (4DACTION...)"})," option found in the Method properties dialog box:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:o(636648).A+"",width:"577",height:"575"})}),"\n",(0,r.jsxs)(t.p,{children:["This option is used to individually designate each project method that can be called using the ",(0,r.jsx)(t.code,{children:"4DACTION"})," special URL, or the ",(0,r.jsx)(t.code,{children:"4DTEXT"}),", ",(0,r.jsx)(t.code,{children:"4DHTML"}),", ",(0,r.jsx)(t.code,{children:"4DEVAL"}),", ",(0,r.jsx)(t.code,{children:"4DSCRIPT"}),", ",(0,r.jsx)(t.code,{children:"4DIF"}),", ",(0,r.jsx)(t.code,{children:"4DELSEIF"})," or ",(0,r.jsx)(t.code,{children:"4DLOOP"})," tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.)."]}),"\n",(0,r.jsxs)(t.p,{children:["This option is unchecked by default. Methods that can be executed through ",(0,r.jsx)(t.code,{children:"4DACTION"})," or specific tags must be specifically indicated."]}),"\n",(0,r.jsx)(t.p,{children:"In the Explorer, Project methods with this property are given a specific icon:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:o(253972).A+"",width:"54",height:"48"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,o)=>{var r=o(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,n={},d=null,a=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:a,props:n,_owner:c.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},474848:(e,t,o)=>{e.exports=o(221020)},253972:(e,t,o)=>{o.d(t,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},636648:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var r=o(296540);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);