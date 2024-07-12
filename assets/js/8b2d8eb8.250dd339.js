/*! For license information please see 8b2d8eb8.250dd339.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95480],{347091:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(474848),r=t(28453);const o={id:"webServer",slug:"overview",title:"Web Server"},i=void 0,a={id:"WebServer/webServer",title:"Web Server",description:"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.",source:"@site/versioned_docs/version-20-R6/WebServer/webServer.md",sourceDirName:"WebServer",slug:"/WebServer/overview",permalink:"/docs/WebServer/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"webServer",slug:"overview",title:"Web Server"},sidebar:"docs",previous:{title:"Web Applications",permalink:"/docs/category/web-applications"},next:{title:"Configuration",permalink:"/docs/WebServer/webServerConfig"}},d={},l=[{value:"Easy Monitoring",id:"easy-monitoring",level:2},{value:"Ready-to-use",id:"ready-to-use",level:2},{value:"Security",id:"security",level:2},{value:"User Sessions",id:"user-sessions",level:2},{value:"Gateway to REST Requests",id:"gateway-to-rest-requests",level:2},{value:"Extended settings",id:"extended-settings",level:2},{value:"Templates and URLs",id:"templates-and-urls",level:2},{value:"Dedicated Database Methods",id:"dedicated-database-methods",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases."}),"\n",(0,n.jsx)(s.h2,{id:"easy-monitoring",children:"Easy Monitoring"}),"\n",(0,n.jsx)(s.p,{children:"You can start or stop publication of the web application at any time. To do so, you just need to select a menu command or execute a single line of code."}),"\n",(0,n.jsxs)(s.p,{children:["Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through ",(0,n.jsx)(s.a,{href:"/docs/WebServer/webServerAdmin#administration-urls",children:"special URLs"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"ready-to-use",children:"Ready-to-use"}),"\n",(0,n.jsx)(s.p,{children:"The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability."}),"\n",(0,n.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,n.jsx)(s.p,{children:"Data security is present at every stage of the 4D web server implementations. Security levels are scalable and default settings usually select the most secure options. The 4D web server security is based upon the following elements:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Extended support of the ",(0,n.jsx)(s.a,{href:"/docs/Admin/tls",children:(0,n.jsx)(s.strong,{children:"TLS Protocol (HTTPS)"})}),","]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Authentication"}),": flexible and customizable ",(0,n.jsx)(s.a,{href:"/docs/WebServer/authentication",children:"authentication features"})," based upon built-it settings as well as fallback database methods (",(0,n.jsx)(s.a,{href:"/docs/WebServer/authentication#on-web-authentication",children:(0,n.jsx)(s.code,{children:"On Web Authentication"})})," for the web server and ",(0,n.jsx)(s.a,{href:"/docs/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,n.jsx)(s.code,{children:"On REST Authentication"})})," for the REST server),"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Control of exposed contents"}),": only elements that you expose explicitely can be available from direct web or REST requests. You must declare:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/WebServer/templates#allowing-project-methods",children:"Project methods"})," exposed through HTTP requests"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"ORDA functions"})," exposed through REST requests"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/REST/configuration#exposing-tables-and-fields",children:"Tables and fields"})," that you don't want to be available to REST requests."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Sandboxing"})," through the definition of a ",(0,n.jsx)(s.a,{href:"/docs/WebServer/webServerConfig#root-folder",children:"HTML Root"})," folder by default,"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Control of server resource usage"})," (e.g. ",(0,n.jsx)(s.a,{href:"/docs/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"maximum concurrent web processes"})," option)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["For a general overview of 4D's security features, see the ",(0,n.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"user-sessions",children:"User Sessions"}),"\n",(0,n.jsxs)(s.p,{children:["The 4D web server includes complete automatic features for easily managing ",(0,n.jsx)(s.a,{href:"/docs/WebServer/sessions",children:"web sessions"})," (user sessions) based on cookies."]}),"\n",(0,n.jsx)(s.h2,{id:"gateway-to-rest-requests",children:"Gateway to REST Requests"}),"\n",(0,n.jsx)(s.p,{children:"The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data."}),"\n",(0,n.jsxs)(s.p,{children:["REST requests are detailed in the ",(0,n.jsx)(s.a,{href:"/docs/REST/gettingStarted",children:"REST server"})," section."]}),"\n",(0,n.jsx)(s.h2,{id:"extended-settings",children:"Extended settings"}),"\n",(0,n.jsxs)(s.p,{children:["The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the ",(0,n.jsx)(s.code,{children:"webServer"})," object properties or the ",(0,n.jsx)(s.code,{children:"WEB SET OPTION"})," command."]}),"\n",(0,n.jsx)(s.h2,{id:"templates-and-urls",children:"Templates and URLs"}),"\n",(0,n.jsx)(s.p,{children:"The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Template pages contain ",(0,n.jsx)(s.a,{href:"/docs/WebServer/templates",children:"special tags"})," that initiate web server processing at the time when they are sent to browsers."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/WebServer/httpRequests",children:"specific URLs"})," enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"dedicated-database-methods",children:"Dedicated Database Methods"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,n.jsx)(s.code,{children:"On Web Connection"}),", as well as ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,s,t)=>{var n=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var n,o={},l=null,c=null;for(n in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,n)&&!d.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:r,type:e,key:l,ref:c,props:o,_owner:a.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var n=t(296540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);