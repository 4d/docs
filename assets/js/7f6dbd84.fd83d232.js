/*! For license information please see 7f6dbd84.fd83d232.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65304],{976925:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=n(474848),o=n(28453);const t={id:"sessions",title:"Web sessions"},r=void 0,a={id:"WebServer/sessions",title:"Web sessions",description:"The 4D web server provides built-in features for managing web sessions. Creating and maintaining web sessions allows you to control and improve the user experience on your web application. When web sessions are enabled, web clients can reuse the same server context from one request to another.",source:"@site/versioned_docs/version-20-R6/WebServer/sessions.md",sourceDirName:"WebServer",slug:"/WebServer/sessions",permalink:"/docs/WebServer/sessions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fsessions.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"sessions",title:"Web sessions"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/WebServer/authentication"},next:{title:"Using preemptive web processes",permalink:"/docs/WebServer/preemptiveWeb"}},l={},d=[{value:"Usages",id:"usages",level:2},{value:"Enabling web sessions",id:"enabling-web-sessions",level:2},{value:"Session implementation",id:"session-implementation",level:2},{value:"Storing and sharing session information",id:"storing-and-sharing-session-information",level:2},{value:"Session lifetime",id:"session-lifetime",level:2},{value:"Privileges",id:"privileges",level:2},{value:"Example",id:"example",level:2},{value:"See also (blog post)",id:"see-also-blog-post",level:2}];function c(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The 4D web server provides built-in features for managing ",(0,i.jsx)(s.strong,{children:"web sessions"}),". Creating and maintaining web sessions allows you to control and improve the user experience on your web application. When web sessions are enabled, web clients can reuse the same server context from one request to another."]}),"\n",(0,i.jsx)(s.p,{children:"Web sessions allow to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["handle multiple requests simultaneously from the same web client through an unlimited number of preemptive processes (web sessions are ",(0,i.jsx)(s.strong,{children:"scalable"}),"),"]}),"\n",(0,i.jsxs)(s.li,{children:["manage session through a ",(0,i.jsx)(s.code,{children:"Session"})," object and the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass",children:"Session API"}),","]}),"\n",(0,i.jsxs)(s.li,{children:["store and share data between processes of a web client using the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#storage",children:".storage"})," of the session,"]}),"\n",(0,i.jsx)(s.li,{children:"associate privileges to the user running the session."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"usages",children:"Usages"}),"\n",(0,i.jsx)(s.p,{children:"Web sessions are used for:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/WebServer/gettingStarted",children:"Web applications"})," sending http requests,"]}),"\n",(0,i.jsxs)(s.li,{children:["calls to the ",(0,i.jsx)(s.a,{href:"/docs/REST/authUsers",children:"REST API"}),", which are used by ",(0,i.jsx)(s.a,{href:"/docs/ORDA/datastores",children:"remote datastores"})," and ",(0,i.jsx)(s.a,{href:"/docs/WebServer/qodly-studio",children:"Qodly forms"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"enabling-web-sessions",children:"Enabling web sessions"}),"\n",(0,i.jsx)(s.p,{children:"The session management feature can be enabled and disabled on your 4D web server. There are different ways to enable session management:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Using the ",(0,i.jsx)(s.strong,{children:"Scalable sessions"}),' option on the "Web/Options (I)" page of the Settings (permanent setting):\n',(0,i.jsx)(s.img,{alt:"alt-text",src:n(130492).A+"",width:"821",height:"361"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["This option is selected by default in new projects. It can however be disabled by selecting the ",(0,i.jsx)(s.strong,{children:"No sessions"})," option, in which case the web session features are disabled (no ",(0,i.jsx)(s.code,{children:"Session"})," object is available)."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Using the ",(0,i.jsx)(s.a,{href:"/docs/API/WebServerClass#scalablesession",children:(0,i.jsx)(s.code,{children:".scalableSession"})})," property of the Web Server object (to pass in the ",(0,i.jsx)(s.em,{children:"settings"})," parameter of the ",(0,i.jsx)(s.a,{href:"/docs/API/WebServerClass#start",children:(0,i.jsx)(s.code,{children:".start()"})})," function). In this case, this setting overrides the option defined in the Settings dialog box for the Web Server object (it is not stored on disk)."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"WEB SET OPTION"})," command can also set the session mode for the main Web server."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"In any cases, the setting is local to the machine; so it can be different on the 4D Server Web server and the Web servers of remote 4D machines."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Compatibility"}),": A ",(0,i.jsx)(s.strong,{children:"Legacy sessions"})," option is available in projects created with a 4D version prior to 4D v18 R6 (for more information, please refer to the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com",children:"doc.4d.com"})," web site)."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"session-implementation",children:"Session implementation"}),"\n",(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.a,{href:"#enabling-sessions",children:"sessions are enabled"}),', automatic mechanisms are implemented, based upon a private cookie set by 4D itself: "4DSID_',(0,i.jsx)(s.em,{children:"AppName"}),'", where ',(0,i.jsx)(s.em,{children:"AppName"})," is the name of the application project. This cookie references the current web session for the application."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["The cookie name can be get using the ",(0,i.jsx)(s.a,{href:"/docs/API/WebServerClass#sessioncookiename",children:(0,i.jsx)(s.code,{children:".sessionCookieName"})})," property."]})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:['In each web client request, the Web server checks for the presence and the value of the private "4DSID_',(0,i.jsx)(s.em,{children:"AppName"}),'" cookie.']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If the cookie has a value, 4D looks for the session that created this cookie among the existing sessions; if this session is found, it is reused for the call."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If the client request does not correspond to an already opened session:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:['a new session with a private "4DSID_',(0,i.jsx)(s.em,{children:"AppName"}),'" cookie is created on the web server']}),"\n",(0,i.jsxs)(s.li,{children:["a new Guest ",(0,i.jsx)(s.code,{children:"Session"})," object is created and is dedicated to the scalable web session."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Creating a web session for a REST request may require that a licence is available, see ",(0,i.jsx)(s.a,{href:"/docs/REST/authUsers",children:"this page"}),"."]})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Session"})," object of the current session can then be accessed through the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#session",children:(0,i.jsx)(s.code,{children:"Session"})})," command in the code of any web processes."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(610658).A+"",width:"642",height:"442"})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Web processes usually do not end, they are recycled in a pool for efficiency. When a process finishes executing a request, it is put back in the pool and made available for the next request. Since a web process can be reused by any session, ",(0,i.jsx)(s.a,{href:"/docs/Concepts/variables#process-variables",children:"process variables"})," must be cleared by your code at the end of its execution (using ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,i.jsx)(s.code,{children:"CLEAR VARIABLE"})})," for example). This cleanup is necessary for any process related information, such as a reference to an opened file. This is the reason why ",(0,i.jsx)(s.strong,{children:"it is recommended"})," to use the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass",children:"Session"})," object when you want to keep session related information."]})}),"\n",(0,i.jsx)(s.h2,{id:"storing-and-sharing-session-information",children:"Storing and sharing session information"}),"\n",(0,i.jsxs)(s.p,{children:["Each ",(0,i.jsx)(s.code,{children:"Session"})," object provides a ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#storage",children:(0,i.jsx)(s.code,{children:".storage"})})," property which is a ",(0,i.jsx)(s.a,{href:"/docs/Concepts/shared",children:"shared object"}),". This property allows you to share information between all processes handled by the session."]}),"\n",(0,i.jsx)(s.h2,{id:"session-lifetime",children:"Session lifetime"}),"\n",(0,i.jsx)(s.p,{children:"A scalable web session is closed when:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"the web server is stopped,"}),"\n",(0,i.jsx)(s.li,{children:"the timeout of the session cookie has been reached."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The lifespan of an inactive cookie is 60 minutes by default, which means that the web server will automatically close inactive sessions after 60 minutes."}),"\n",(0,i.jsxs)(s.p,{children:["This timeout can be set using the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#idletimeout",children:(0,i.jsx)(s.code,{children:".idleTimeout"})})," property of the ",(0,i.jsx)(s.code,{children:"Session"})," object (the timeout cannot be less than 60 minutes) or the ",(0,i.jsx)(s.em,{children:"connectionInfo"})," parameter of the ",(0,i.jsx)(s.a,{href:"/docs/API/DataStoreClass#open-datastore",children:(0,i.jsx)(s.code,{children:"Open datastore"})})," command."]}),"\n",(0,i.jsxs)(s.p,{children:["When a web session is closed, if the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#session",children:(0,i.jsx)(s.code,{children:"Session"})})," command is called afterwards:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["the ",(0,i.jsx)(s.code,{children:"Session"})," object does not contain privileges (it is a Guest session)"]}),"\n",(0,i.jsxs)(s.li,{children:["the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#storage",children:(0,i.jsx)(s.code,{children:".storage"})})," property is empty"]}),"\n",(0,i.jsx)(s.li,{children:"a new session cookie is associated to the session"}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["You can close a session from a Qodly form using the ",(0,i.jsx)(s.a,{href:"/docs/WebServer/qodly-studio#logout",children:(0,i.jsx)(s.strong,{children:"logout"})})," feature."]})}),"\n",(0,i.jsx)(s.h2,{id:"privileges",children:"Privileges"}),"\n",(0,i.jsx)(s.p,{children:"Privileges can be associated to web user sessions. On the web server, you can provide specific access or features depending on the privileges of the session."}),"\n",(0,i.jsxs)(s.p,{children:["You assign privileges using the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:".setPrivileges()"})})," function. In your code, you can check the session's privileges to allow or deny access using the ",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#hasprivilege",children:(0,i.jsx)(s.code,{children:".hasPrivilege()"})})," function. By default, new sessions do not have any privilege: they are ",(0,i.jsx)(s.strong,{children:"Guest"})," sessions (",(0,i.jsx)(s.a,{href:"/docs/API/SessionClass#isguest",children:(0,i.jsx)(s.code,{children:".isGuest()"})})," function returns true)."]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n\t//Access is granted, do nothing\nElse\n\t//Display an authentication page\nEnd if\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Privileges are implemented at the heart of the ORDA architecture to provide developers with a powerful technology for controlling access to the datastore and dataclas functions. For more information, please refer to the ",(0,i.jsx)(s.a,{href:"/docs/ORDA/privileges",children:(0,i.jsx)(s.strong,{children:"Privileges"})})," page of the ORDA chapter."]})}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.p,{children:"In a CRM application, each salesperson manages their own client portfolio. The datastore contains at least two linked dataclasses: Customers and SalesPersons (a salesperson has several customers)."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(490039).A+"",width:"450",height:"225"})}),"\n",(0,i.jsx)(s.p,{children:"We want a salesperson to authenticate, open a session on the web server, and have the top 3 customers be loaded in the session."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"We run this URL to open a session:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"http://localhost:8044/authenticate.shtml\n"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["In a production environment, it it necessary to use a ",(0,i.jsx)(s.a,{href:"/docs/API/WebServerClass#httpsenabled",children:"HTTPS connection"})," to avoid any uncrypted information to circulate on the network."]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"authenticate.shtml"})," page is a form containing ",(0,i.jsx)(s.em,{children:"userId"})," et ",(0,i.jsx)(s.em,{children:"password"})," input fields and sending a 4DACTION POST action:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<body bgcolor="#ffffff">\n<FORM ACTION="/4DACTION/authenticate" METHOD=POST>\n\tUserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n\tPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">\n</FORM>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(937458).A+"",width:"523",height:"158"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:["The authenticate project method looks for the ",(0,i.jsx)(s.em,{children:"userID"})," person and validates the password against the hashed value already stored in the ",(0,i.jsx)(s.em,{children:"SalesPersons"})," table:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'var $indexUserId; $indexPassword; $userId : Integer\nvar $password : Text\nvar $userTop3; $sales; $info : Object\n\n\nARRAY TEXT($anames; 0)\nARRAY TEXT($avalues; 0)\n\nWEB GET VARIABLES($anames; $avalues)\n\n$indexUserId:=Find in array($anames; "userId")\n$userId:=Num($avalues{$indexUserId})\n\n$indexPassword:=Find in array($anames; "password")\n$password:=$avalues{$indexPassword}\n\n$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()\n\nIf ($sales#Null)\n    If (Verify password hash($password; $sales.password))\n        $info:=New object()\n        $info.userName:=$sales.firstname+" "+$sales.lastname\n        Session.setPrivileges($info)\n        Use (Session.storage)\n            If (Session.storage.myTop3=Null)\n                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n\n                Session.storage.myTop3:=$userTop3\n            End if\n        End use\n        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")\n    Else\n        WEB SEND TEXT("This password is wrong")\n    End if\nElse\n    WEB SEND TEXT("This userId is unknown")\nEnd if\n'})}),"\n",(0,i.jsx)(s.h2,{id:"see-also-blog-post",children:"See also (blog post)"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://blog.4d.com/scalable-sessions-for-advanced-web-applications/",children:"Scalable sessions for advanced web applications"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var i=n(296540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var i,t={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)r.call(s,i)&&!l.hasOwnProperty(i)&&(t[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===t[i]&&(t[i]=s[i]);return{$$typeof:o,type:e,key:d,ref:c,props:t,_owner:a.current}}s.Fragment=t,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},937458:(e,s,n)=>{n.d(s,{A:()=>i});const i="data:image/png;base64,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"},490039:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/exampleSession-6ea5390dae0da375f51de68193ef570e.png"},610658:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/schemaSession-a7c86d4948895f03c24611177cd54f7c.png"},130492:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/settingsSession-0d1b28de173a572d3a47fcf327e29b28.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var i=n(296540);const o={},t=i.createContext(o);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);