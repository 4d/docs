"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21277"],{332432:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>i,metadata:()=>o,assets:()=>l,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"WebServer/allowProject","title":"Allowing project methods","description":"The 4D tags such as 4DEVAL, 4DTEXT, 4DHTML... as well as the /4DACTION URL allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request http://www.server.com/4DACTION/login causes the execution of the login project method, if it exists.","source":"@site/versioned_docs/version-20/WebServer/allowProject.md","sourceDirName":"WebServer","slug":"/WebServer/allowProject","permalink":"/docs/20/WebServer/allowProject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"allowProject","title":"Allowing project methods"},"sidebar":"docs","previous":{"title":"Processing HTTP requests","permalink":"/docs/20/WebServer/httpRequests"},"next":{"title":"Custom HTTP Error Pages","permalink":"/docs/20/WebServer/errorPages"}}'),r=n("785893"),s=n("250065");let i={id:"allowProject",title:"Allowing project methods"},c=void 0,l={},d=[];function h(e){let t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The 4D tags such as ",(0,r.jsx)(t.code,{children:"4DEVAL"}),", ",(0,r.jsx)(t.code,{children:"4DTEXT"}),", ",(0,r.jsx)(t.code,{children:"4DHTML"}),"... as well as the ",(0,r.jsx)(t.a,{href:"/docs/20/WebServer/httpRequests#/4daction",children:(0,r.jsx)(t.code,{children:"/4DACTION URL"})})," allow you to trigger the execution of any project method of a 4D project published on the Web. For example, the request ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," causes the execution of the ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"login"})})," project method, if it exists."]}),"\n",(0,r.jsx)(t.p,{children:"This mechanism therefore presents a security risk for the application, in particular if an Internet user intentionally (or unintentionally) triggers a method not intended for execution via the web. You can avoid this risk in the following ways:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Filter the methods called via the URLS using the ",(0,r.jsx)(t.a,{href:"/docs/20/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(t.code,{children:"On Web Authentication"})})," database method. Drawbacks: If the database includes a great number of methods, this system may be difficult to manage."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.strong,{children:"Available through 4D tags and URLs (4DACTION...)"})," option found in the Method properties dialog box:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(174340).Z+"",width:"577",height:"575"})}),"\n",(0,r.jsxs)(t.p,{children:["This option is used to individually designate each project method that can be called using the ",(0,r.jsx)(t.code,{children:"4DACTION"})," special URL, or the ",(0,r.jsx)(t.code,{children:"4DTEXT"}),", ",(0,r.jsx)(t.code,{children:"4DHTML"}),", ",(0,r.jsx)(t.code,{children:"4DEVAL"}),", ",(0,r.jsx)(t.code,{children:"4DSCRIPT"}),", ",(0,r.jsx)(t.code,{children:"4DIF"}),", ",(0,r.jsx)(t.code,{children:"4DELSEIF"})," or ",(0,r.jsx)(t.code,{children:"4DLOOP"})," tags. When it is not checked, the project method concerned cannot be directly executed through an HTTP request. Conversely, it can be executed using other types of calls (formulas, other methods, etc.)."]}),"\n",(0,r.jsxs)(t.p,{children:["This option is unchecked by default. Methods that can be executed through ",(0,r.jsx)(t.code,{children:"4DACTION"})," or specific tags must be specifically indicated."]}),"\n",(0,r.jsx)(t.p,{children:"In the Explorer, Project methods with this property are given a specific icon:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(453091).Z+"",width:"54",height:"48"})})]})}function a(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},453091:function(e,t,n){n.d(t,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},174340:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var o=n(667294);let r={},s=o.createContext(r);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);