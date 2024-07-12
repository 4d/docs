/*! For license information please see 73c441c9.05cd5190.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34173],{423486:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(474848),i=n(28453);const r={id:"authUsers",title:"Users and sessions"},o=void 0,a={id:"REST/authUsers",title:"Users and sessions",description:"When scalable sessions are enabled (recommended), REST requests can create and use web user sessions, providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.",source:"@site/versioned_docs/version-20-R5/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/20-R5/REST/authUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"authUsers",title:"Users and sessions"},sidebar:"docs",previous:{title:"Server Configuration",permalink:"/docs/20-R5/REST/configuration"},next:{title:"Getting Server Information",permalink:"/docs/20-R5/REST/genInfo"}},l={},d=[{value:"User login modes",id:"user-login-modes",level:2},{value:"Default mode",id:"default-mode",level:3},{value:"Force login mode",id:"force-login-mode",level:3},{value:"Descriptive REST requests",id:"descriptive-rest-requests",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:4},{value:"Using <code>On REST Authentication</code>",id:"using-on-rest-authentication",level:2},{value:"Example",id:"example-1",level:3}];function c(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.a,{href:"/docs/20-R5/WebServer/sessions#enabling-sessions",children:"scalable sessions are enabled"})," (recommended), REST requests can create and use ",(0,t.jsx)(s.a,{href:"/docs/20-R5/WebServer/sessions",children:"web user sessions"}),", providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges."]}),"\n",(0,t.jsxs)(s.p,{children:["When a web user session is opened, you can handle it through the ",(0,t.jsx)(s.code,{children:"Session"})," object and the ",(0,t.jsx)(s.a,{href:"/docs/20-R5/API/SessionClass",children:"Session API"}),". Subsequent REST requests reuse the same session cookie."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["On 4D Server, opening a REST session might require that a free 4D client license is available, depending on the ",(0,t.jsx)(s.a,{href:"#user-login-modes",children:"user login mode"}),".",(0,t.jsx)(s.br,{})]}),"\n",(0,t.jsx)(s.li,{children:"On 4D single-user, you can open up to three REST sessions for testing purposes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"user-login-modes",children:"User login modes"}),"\n",(0,t.jsx)(s.p,{children:'The user login mode allows you to control how REST requests acquire 4D Client licenses. You can choose between two user login modes: "default", or "force login".'}),"\n",(0,t.jsxs)(s.p,{children:["You set the user login mode through the ",(0,t.jsx)(s.code,{children:"forceLogin"})," property in the ",(0,t.jsxs)(s.a,{href:"/docs/20-R5/ORDA/privileges#rolesjson-file",children:[(0,t.jsx)(s.code,{children:"roles.json"})," file"]}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["the ",(0,t.jsx)(s.strong,{children:"default mode"}),' is used if the "forceLogin" property is missing or set to "false",']}),"\n",(0,t.jsxs)(s.li,{children:["the ",(0,t.jsx)(s.strong,{children:"force login"}),' mode is used if the "forceLogin" property is set to "true".']}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"If you modify this property, the server must be restarted to take the change into account."})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["In Qodly Studio for 4D, the mode can be set using the ",(0,t.jsxs)(s.a,{href:"/docs/20-R5/WebServer/qodly-studio#force-login",children:[(0,t.jsx)(s.strong,{children:"Force login"})," option"]})," in the Privileges panel."]})}),"\n",(0,t.jsx)(s.h3,{id:"default-mode",children:"Default mode"}),"\n",(0,t.jsxs)(s.p,{children:["In the default mode, any REST request is processed in a web user session that automatically consumes a license (the web user session is created if it does not already exist). You can use this simple mode if you don't need to control how many licenses are retained on the server.\nWhen the default mode is enabled, you can authenticate users through the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method (see below)."]}),"\n",(0,t.jsx)(s.h3,{id:"force-login-mode",children:"Force login mode"}),"\n",(0,t.jsxs)(s.p,{children:['In "force login" mode, license usage is disconnected from web user sessions. A license is required only when the ',(0,t.jsx)(s.a,{href:"/docs/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," is executed, allowing you to control the number of used licenses."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"#descriptive-rest-requests",children:"Descriptive REST requests"}),' are always processed by the server, even if no web user session using a license is opened. In this case, they are processed through "guest" sessions.']}),"\n",(0,t.jsxs)(s.p,{children:["All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the ",(0,t.jsx)(s.a,{href:"/docs/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," function for the session. Executing this function triggers the 4D license consumption."]}),"\n",(0,t.jsx)(s.p,{children:"This mode allows you to implement the following login sequence:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'At the first REST call (for a webform call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than descriptive requests, no license consumption.'}),"\n",(0,t.jsxs)(s.li,{children:["You call your exposed ",(0,t.jsx)(s.a,{href:"/docs/20-R5/ORDA/ordaClasses#datastore-class",children:"datastore class function"})," named ",(0,t.jsx)(s.a,{href:"#function-authentify",children:(0,t.jsx)(s.code,{children:"authentify()"})})," (created beforehand), in which you check the user credentials and call ",(0,t.jsx)(s.a,{href:"/docs/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," with appropriate privileges."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"/rest/$catalog/authentify"})," request is sent to the server along with user credentials. This step only requires a basic login form that do not access data; it can be a Qodly form (called via the ",(0,t.jsx)(s.code,{children:"/rest/$getWebForm"})," request)."]}),"\n",(0,t.jsx)(s.li,{children:"If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:n(682338).A+"",width:"1344",height:"756"})}),"\n",(0,t.jsx)(s.h3,{id:"descriptive-rest-requests",children:"Descriptive REST requests"}),"\n",(0,t.jsx)(s.p,{children:'Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). These requests are:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/20-R5/REST/catalog",children:(0,t.jsx)(s.code,{children:"/rest/$catalog"})})," requests (e.g. ",(0,t.jsx)(s.code,{children:"/rest/$catalog/$all"}),") - access to available dataclasses"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/rest/$catalog/authentify"})," - the datastore function used to login the user"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/rest/$getWebForm"})," - the rendering of a Qodly form"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:n(232927).A+"",width:"1171",height:"302"})}),"\n",(0,t.jsx)(s.h3,{id:"function-authentify",children:(0,t.jsx)(s.code,{children:"Function authentify"})}),"\n",(0,t.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"exposed Function authentify({params : type}) {-> result : type}\n\t// code\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"authentify()"})," function must be implemented in the ",(0,t.jsx)(s.a,{href:"/docs/20-R5/ORDA/ordaClasses#datastore-class",children:"DataStore class"})," of the project and must be called through a REST request."]}),"\n",(0,t.jsx)(s.p,{children:'This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.'}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"authentify()"})," function can always be executed by a REST guest session, whatever the ",(0,t.jsxs)(s.a,{href:"/docs/20-R5/ORDA/privileges#rolesjson-file",children:[(0,t.jsx)(s.code,{children:"roles.json"})," file"]})," configuration."]})}),"\n",(0,t.jsxs)(s.p,{children:["The function can receive any authentication or contextual information as ",(0,t.jsx)(s.a,{href:"/docs/20-R5/REST/classFunctions#parameters",children:"parameter(s)"})," and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request."]}),"\n",(0,t.jsx)(s.p,{children:"This function should contain two parts:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"some code to identify and authenticate the REST request sender,"}),"\n",(0,t.jsxs)(s.li,{children:["if the authentication is successful, a call to ",(0,t.jsx)(s.a,{href:"/docs/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})})," that assigns appropriate privileges to the session."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If the function does not call ",(0,t.jsx)(s.a,{href:"/docs/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"Session.setPrivileges()"})}),", no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected."]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["You only want to know users to open a web session on the server. You created the following ",(0,t.jsx)(s.code,{children:"authentify()"})," function in the datastore class:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) //the user is known\n\tIf (Verify password hash($credentials.password; $user.password))\n\t\tSession.setPrivileges("vip")\n\tElse\n\n\t\treturn "Wrong password"\n\tEnd if\nElse\n        return "Wrong user"\nEnd if\n'})}),"\n",(0,t.jsxs)(s.p,{children:["To call the ",(0,t.jsx)(s.code,{children:"authentify()"})," function:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"POST"})," ",(0,t.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/authentify"})]}),"\n",(0,t.jsx)(s.p,{children:"Body of the request:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'[{"name":"Henry",\n"password":"123"}]\n'})}),"\n",(0,t.jsxs)(s.h2,{id:"using-on-rest-authentication",children:["Using ",(0,t.jsx)(s.code,{children:"On REST Authentication"})]}),"\n",(0,t.jsxs)(s.p,{children:['In default login mode (i.e. the "force login" mode is disabled), you can log in a user to your application by calling ',(0,t.jsx)(s.a,{href:"/docs/20-R5/REST/directory#directorylogin",children:(0,t.jsx)(s.code,{children:"$directory/login"})})," in a POST request including the user's name and password in the header. This request calls the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method (if it exists), where you can check the user's credentials (see example below)."]}),"\n",(0,t.jsxs)(s.p,{children:["If the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method has not been defined, a ",(0,t.jsx)(s.code,{children:"guest"})," session is opened."]}),"\n",(0,t.jsx)(s.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(s.p,{children:["In this example, the user enters their email and password in an html page that requests ",(0,t.jsx)(s.a,{href:"/docs/20-R5/REST/directory#directorylogin",children:(0,t.jsx)(s.code,{children:"$directory/login"})})," in a POST (it is recommended to use an HTTPS connection to send the html page). The ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is called to validate the credentials and to set the session."]}),"\n",(0,t.jsx)(s.p,{children:"The HTML login page:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:n(437846).A+"",width:"268",height:"85"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n\t<FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml";\n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["When the login page is sent to the server, the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is called:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\t//On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n\t//A \'/rest\' URL has been called with headers username-4D and password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if\n    End if\nEnd if\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["As soon as it has been called and returned ",(0,t.jsx)(s.code,{children:"True"}),", the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is no longer called in the session."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"fillSession"})," project method initializes the user session, for example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if\nEnd use\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var t=n(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,r={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)o.call(s,t)&&!l.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:i,type:e,key:d,ref:c,props:r,_owner:a.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},232927:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},682338:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/force-login-2-9e72b31a808ebc57f1a0996395cdfb2b.jpeg"},437846:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(296540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);