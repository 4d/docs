/*! For license information please see 69ab180c.d55904e8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47509],{426144:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=n(474848),s=n(28453);const c={id:"webServerObject",title:"Web Server object"},d=void 0,i={id:"WebServer/webServerObject",title:"Web Server object",description:"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.",source:"@site/versioned_docs/version-20-R6/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/WebServer/webServerObject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"webServerObject",title:"Web Server object"},sidebar:"docs",previous:{title:"Administration",permalink:"/docs/WebServer/webServerAdmin"},next:{title:"Web Development",permalink:"/docs/WebServer/gettingStarted"}},o={},l=[{value:"Instantiating a web server object",id:"instantiating-a-web-server-object",level:2},{value:"Web server functions",id:"web-server-functions",level:2},{value:"Web server properties",id:"web-server-properties",level:2},{value:"Scope of the 4D Web commands",id:"scope-of-the-4d-web-commands",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component."}),"\n",(0,t.jsx)(r.p,{children:"For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"one web server for the host application,"}),"\n",(0,t.jsx)(r.li,{children:"one web server for the component #1,"}),"\n",(0,t.jsx)(r.li,{children:"one web server for the component #2."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project."}),"\n",(0,t.jsxs)(r.p,{children:["Each 4D web server, including the main application's web server, is exposed as a specific ",(0,t.jsx)(r.strong,{children:"object"})," of the ",(0,t.jsx)(r.code,{children:"4D.WebServer"})," class. Once instantiated, a web server object can be handled from the current application or from any component using a ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass",children:"large number of properties and functions"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The legacy ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"WEB commands"})," of the 4D language are supported but cannot select the web server to which they apply (see below)."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Each web server (host application or component) can be used in its own separate context, including:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"On Web Authentication"})," and ",(0,t.jsx)(r.code,{children:"On Web Connection"})," database method calls"]}),"\n",(0,t.jsx)(r.li,{children:"4D tags processing and method calls,"}),"\n",(0,t.jsx)(r.li,{children:"web sessions and TLS protocol management."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This allows you to develop independant components and features that come with their own web interfaces."}),"\n",(0,t.jsx)(r.h2,{id:"instantiating-a-web-server-object",children:"Instantiating a web server object"}),"\n",(0,t.jsx)(r.p,{children:"The web server object of the host application (default web server) is automatically loaded by 4D at startup. Thus, if you write in a newly created project:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"$nbSrv:=WEB Server list.length   \n//$nbSrv value is 1\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To instantiate a web server object, call the ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#web-server",children:(0,t.jsx)(r.code,{children:"WEB Server"})})," command:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\t//create an object variable of the 4D.WebServer class\nvar webServer : 4D.WebServer \n\t//call the web server from the current context\nwebServer:=WEB Server  \n\n\t//equivalent to\nwebServer:=WEB Server(Web server database)\n"})}),"\n",(0,t.jsx)(r.p,{children:"If the application uses components and you want to call:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"the host application's web server from a component or"}),"\n",(0,t.jsx)(r.li,{children:"the server that received the request (whatever the server),"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"you can also use:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"var webServer : 4D.WebServer \n\t//call the host web server from a component  \nwebServer:=WEB Server(Web server host database)  \n\t//call the target web server\nwebServer:=WEB Server(Web server receiving request)  \n"})}),"\n",(0,t.jsx)(r.h2,{id:"web-server-functions",children:"Web server functions"}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#web-server-object",children:"web server class object"})," contains the following functions:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Functions"}),(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Return value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#start",children:(0,t.jsx)(r.code,{children:"start()"})})}),(0,t.jsx)(r.td,{children:"settings (object)"}),(0,t.jsx)(r.td,{children:"status (object)"}),(0,t.jsx)(r.td,{children:"Starts the web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#start",children:(0,t.jsx)(r.code,{children:"stop()"})})}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"Stops the web server"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["To start and stop a web server, just call the ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#start",children:(0,t.jsx)(r.code,{children:"start()"})})," and ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#stop",children:(0,t.jsx)(r.code,{children:"stop()"})})," functions of the web server object:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"var $status : Object\n  \t//to start a web server with default settings\n$status:=webServer.start()\n\t//to start the web server with custom settings  \n\t//$settings object contains web server properties\nwebServer.start($settings)\n\n\t//to stop the web server\n$status:=webServer.stop()\n"})}),"\n",(0,t.jsx)(r.h2,{id:"web-server-properties",children:"Web server properties"}),"\n",(0,t.jsxs)(r.p,{children:["A web server object contains ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#web-server-object",children:"various properties"})," which configure the web server."]}),"\n",(0,t.jsx)(r.p,{children:"These properties are defined:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["using the ",(0,t.jsx)(r.code,{children:"settings"})," parameter of the ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#start",children:(0,t.jsx)(r.code,{children:".start()"})})," function (except for read-only properties, see below),"]}),"\n",(0,t.jsxs)(r.li,{children:["if not used, using the ",(0,t.jsx)(r.code,{children:"WEB SET OPTION"})," command (host applications only),"]}),"\n",(0,t.jsx)(r.li,{children:"if not used, in the settings of the host application or the component."}),"\n"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"If the web server is not started, the properties contain the values that will be used at the next web server startup."}),"\n",(0,t.jsxs)(r.li,{children:["If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the ",(0,t.jsx)(r.code,{children:"settings"})," parameter of the ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#start",children:(0,t.jsx)(r.code,{children:".start()"})})," function."]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"isRunning"}),", ",(0,t.jsx)(r.em,{children:"name"}),", ",(0,t.jsx)(r.em,{children:"openSSLVersion"}),", and ",(0,t.jsx)(r.em,{children:"perfectForwardSecrecy"})," are read-only properties that cannot be predefined in the ",(0,t.jsx)(r.code,{children:"settings"})," object parameter for the ",(0,t.jsx)(r.a,{href:"/docs/API/WebServerClass#start",children:(0,t.jsx)(r.code,{children:"start()"})})," function."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"scope-of-the-4d-web-commands",children:"Scope of the 4D Web commands"}),"\n",(0,t.jsxs)(r.p,{children:["The 4D Language contains ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"several commands"})," that can be used to control the web server. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Command"}),(0,t.jsx)(r.th,{children:"Scope"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"SET DATABASE PARAMETER"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB CLOSE SESSION"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET BODY PART"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Get body part count"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Get Current Session ID"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET HTTP BODY"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET HTTP HEADER"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET OPTION"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Get server info"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET SESSION EXPIRATION"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Get session process count"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET STATISTICS"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB GET VARIABLES"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Is secured connection"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Is server running"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SEND BLOB"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SEND FILE"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SEND HTTP REDIRECT"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SEND RAW DATA"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SEND TEXT"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SET HOME PAGE"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SET HTTP HEADER"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SET OPTION"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB SET ROOT FOLDER"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB START SERVER"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB STOP SERVER"})}),(0,t.jsx)(r.td,{children:"Host application web server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"WEB Validate digest"})}),(0,t.jsx)(r.td,{children:"Web server that received the request"})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,c={},l=null,h=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,t)&&!o.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:h,props:c,_owner:i.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var t=n(296540);const s={},c=t.createContext(s);function d(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);