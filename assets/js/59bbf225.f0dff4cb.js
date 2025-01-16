"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60888"],{729729:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"REST/authUsers","title":"Users and sessions","description":"Sessions","source":"@site/versioned_docs/version-20-R8/REST/authUsers.md","sourceDirName":"REST","slug":"/REST/authUsers","permalink":"/docs/REST/authUsers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"authUsers","title":"Users and sessions"},"sidebar":"docs","previous":{"title":"Server Configuration","permalink":"/docs/REST/configuration"},"next":{"title":"Getting Server Information","permalink":"/docs/REST/genInfo"}}'),t=n("785893"),r=n("250065");let o={id:"authUsers",title:"Users and sessions"},c=void 0,a={},l=[{value:"Sessions",id:"sessions",level:2},{value:"Force login mode",id:"force-login-mode",level:2},{value:"Descriptive REST requests",id:"descriptive-rest-requests",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example",level:3}];function d(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"sessions",children:"Sessions"}),"\n",(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.a,{href:"/docs/WebServer/sessions#enabling-sessions",children:"scalable sessions are enabled"})," (recommended), REST requests can create and use ",(0,t.jsx)(s.a,{href:"/docs/WebServer/sessions",children:"web user sessions"}),", providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges."]}),"\n",(0,t.jsxs)(s.p,{children:["When a web user session is opened, you can handle it through the ",(0,t.jsx)(s.code,{children:"Session"})," object and the ",(0,t.jsx)(s.a,{href:"/docs/API/SessionClass",children:"Session API"}),". Subsequent REST requests reuse the same session cookie."]}),"\n",(0,t.jsx)(s.p,{children:"A session is opened after the user was successfully logged (see below)."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["On 4D Server, opening a REST session requires that a free 4D client license is available.",(0,t.jsx)(s.br,{})]}),"\n",(0,t.jsx)(s.li,{children:"On 4D single-user, you can open up to three REST sessions for testing purposes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"force-login-mode",children:"Force login mode"}),"\n",(0,t.jsx)(s.admonition,{title:"Compatibility",type:"note",children:(0,t.jsxs)(s.p,{children:["The legacy login mode based upon the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is ",(0,t.jsx)(s.strong,{children:"deprecated"})," as of 4D 20 R6. It is now recommended to ",(0,t.jsxs)(s.a,{href:"/docs/ORDA/privileges#rolesjson-file",children:["use the ",(0,t.jsx)(s.strong,{children:"force login mode"})]})," (automatically enabled in new projects) and to implement the ",(0,t.jsxs)(s.a,{href:"#dsauthentify",children:[(0,t.jsx)(s.code,{children:"ds.authentify()"})," function"]}),". In converted projects, ",(0,t.jsx)(s.a,{href:"/docs/settings/web#activate-rest-authentication-through-dsauthentify-function",children:"a button in the Settings dialog box"})," will help you upgrade your configuration. In Qodly Studio for 4D, the mode can be set using the ",(0,t.jsxs)(s.a,{href:"/docs/WebServer/qodly-studio#force-login",children:[(0,t.jsx)(s.strong,{children:"Force login"})," option"]})," in the Privileges panel."]})}),"\n",(0,t.jsx)(s.p,{children:"The user login sequence is the following:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:['At the first REST call (for a Qodly page call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than ',(0,t.jsx)(s.a,{href:"#descriptive-rest-requests",children:"descriptive REST requests"}),", no license consumption.",(0,t.jsx)(s.br,{}),'\nDescriptive REST requests are always processed by the server, even if no web user session using a license is opened. In this case, they are processed through "guest" sessions.']}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["You call your ",(0,t.jsxs)(s.a,{href:"#authentify",children:[(0,t.jsx)(s.code,{children:"authentify()"})," function"]})," (created beforehand), in which you check the user credentials and call ",(0,t.jsx)(s.a,{href:"/docs/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," with appropriate privileges. ",(0,t.jsx)(s.code,{children:"authentify()"})," must be an exposed ",(0,t.jsx)(s.a,{href:"/docs/ORDA/ordaClasses#datastore-class",children:"datastore class function"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"/rest/$catalog/authentify"})," request is sent to the server along with user credentials. This step only requires a basic login form that do not access data; it can be a ",(0,t.jsx)(s.a,{href:"/docs/WebServer/qodly-studio",children:"Qodly page"})," (called via the ",(0,t.jsx)(s.code,{children:"/rest/$getWebForm"})," request)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:n(277797).Z+"",width:"1344",height:"756"})}),"\n",(0,t.jsxs)(s.p,{children:["In the user login phase, license usage is disconnected from web user sessions. A license is required only when the ",(0,t.jsx)(s.a,{href:"/docs/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," is executed, allowing you to control the number of used licenses."]}),"\n",(0,t.jsxs)(s.p,{children:["All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the ",(0,t.jsx)(s.a,{href:"/docs/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," function for the session. Executing this function triggers the 4D license consumption."]}),"\n",(0,t.jsx)(s.h3,{id:"descriptive-rest-requests",children:"Descriptive REST requests"}),"\n",(0,t.jsx)(s.p,{children:'Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). These requests are:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/REST/catalog",children:(0,t.jsx)(s.code,{children:"/rest/$catalog"})})," requests (e.g. ",(0,t.jsx)(s.code,{children:"/rest/$catalog/$all"}),") - access to available dataclasses"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/rest/$catalog/authentify"})," - the datastore function used to login the user"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/rest/$getWebForm"})," - the rendering of a Qodly page"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:n(848701).Z+"",width:"1171",height:"302"})}),"\n",(0,t.jsx)(s.h2,{id:"function-authentify",children:(0,t.jsx)(s.code,{children:"Function authentify"})}),"\n",(0,t.jsx)(s.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"exposed Function authentify({params : type}) {-> result : type}\n	// code\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"authentify()"})," function must be implemented in the ",(0,t.jsx)(s.a,{href:"/docs/ORDA/ordaClasses#datastore-class",children:"DataStore class"})," of the project and must be called through a REST request."]}),"\n",(0,t.jsx)(s.p,{children:'This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.'}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"authentify()"})," function can always be executed by a REST guest session, whatever the ",(0,t.jsxs)(s.a,{href:"/docs/ORDA/privileges#rolesjson-file",children:[(0,t.jsx)(s.code,{children:"roles.json"})," file"]})," configuration."]})}),"\n",(0,t.jsxs)(s.p,{children:["The function can receive any authentication or contextual information as ",(0,t.jsx)(s.a,{href:"/docs/REST/classFunctions#parameters",children:"parameter(s)"})," and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request."]}),"\n",(0,t.jsx)(s.p,{children:"This function should contain two parts:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"some code to identify and authenticate the REST request sender,"}),"\n",(0,t.jsxs)(s.li,{children:["if the authentication is successful, a call to ",(0,t.jsx)(s.a,{href:"/docs/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," that assigns appropriate privileges to the session."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If the function does not call ",(0,t.jsx)(s.a,{href:"/docs/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})}),", no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected."]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["You only want to know users to open a web session on the server. You created the following ",(0,t.jsx)(s.code,{children:"authentify()"})," function in the datastore class:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) //the user is known\n	If (Verify password hash($credentials.password; $user.password))\n		Session.setPrivileges("vip")\n	Else\n\n		return "Wrong password"\n	End if\nElse\n        return "Wrong user"\nEnd if\n'})}),"\n",(0,t.jsxs)(s.p,{children:["To call the ",(0,t.jsx)(s.code,{children:"authentify()"})," function:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"POST"})," ",(0,t.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/authentify"})]}),"\n",(0,t.jsx)(s.p,{children:"Body of the request:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'[{"name":"Henry",\n"password":"123"}]\n'})})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},848701:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},277797:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/force-login-2-c615d4581880aa201c1e7abd591f6146.jpeg"},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var i=n(667294);let t={},r=i.createContext(t);function o(e){let s=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);