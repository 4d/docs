/*! For license information please see 19030123.c37b1b99.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97726],{5871:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(474848),r=n(28453);const i={id:"authUsers",title:"Sessions et utilisateurs"},o=void 0,a={id:"REST/authUsers",title:"Sessions et utilisateurs",description:"REST requests can benefit from web user sessions, providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/fr/19/REST/authUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"authUsers",title:"Sessions et utilisateurs"},sidebar:"docs",previous:{title:"Configuration du serveur",permalink:"/docs/fr/19/REST/configuration"},next:{title:"Obtenir des informations du serveur",permalink:"/docs/fr/19/REST/genInfo"}},d={},l=[{value:"Authentification des utilisateurs",id:"Authentification-des-utilisateurs",level:2},{value:"Ouverture des sessions",id:"Ouverture-des-sessions",level:2},{value:"Mode pr\xe9emptif",id:"Mode-pr\xe9emptif",level:2},{value:"Exemple",id:"Exemple",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["REST requests can benefit from ",(0,t.jsx)(s.a,{href:"/docs/fr/19/WebServer/sessions",children:"web user sessions"}),", providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges."]}),"\n",(0,t.jsx)(s.p,{children:"La premi\xe8re \xe9tape \xe0 suivre pour ouvrir une session REST sur le serveur 4D, consiste \xe0 authentifier l'utilisateur qui envoie la requ\xeate."}),"\n",(0,t.jsx)(s.h2,{id:"Authentification-des-utilisateurs",children:"Authentification des utilisateurs"}),"\n",(0,t.jsxs)(s.p,{children:["You log in a user to your application by calling ",(0,t.jsx)(s.a,{href:"/docs/fr/19/REST/directory#directorylogin",children:(0,t.jsx)(s.code,{children:"$directory/login"})})," in a POST request including the user's name and password in the header. This request calls the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method (if it exists), where you can check the user's credentials (see example below)."]}),"\n",(0,t.jsx)(s.h2,{id:"Ouverture-des-sessions",children:"Ouverture des sessions"}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque les ",(0,t.jsx)(s.a,{href:"/docs/fr/19/WebServer/sessions#enabling-sessions",children:"sessions \xe9volutives sont activ\xe9es"})," (recommand\xe9), si la m\xe9thode base ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," retourne ",(0,t.jsx)(s.code,{children:"true"}),", une session utilisateur est alors automatiquement ouverte et vous pouvez la g\xe9rer via l'objet ",(0,t.jsx)(s.code,{children:"Session"})," et ",(0,t.jsx)(s.a,{href:"/docs/fr/19/API/SessionClass",children:"l'API Session"}),". Subsequent REST requests will reuse the same session cookie."]}),"\n",(0,t.jsxs)(s.p,{children:["If the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method has not been defined, a ",(0,t.jsx)(s.code,{children:"guest"})," session is opened."]}),"\n",(0,t.jsx)(s.h2,{id:"Mode-pr\xe9emptif",children:"Mode pr\xe9emptif"}),"\n",(0,t.jsxs)(s.p,{children:["On 4D Server, REST requests are automatically handled through preemptive processes, ",(0,t.jsx)(s.strong,{children:"even in interpreted mode"}),". You need to make sure that your code is ",(0,t.jsx)(s.a,{href:"/docs/fr/19/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compliant with a preemptive execution"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Avec 4D monoposte, le code interpr\xe9t\xe9 s'ex\xe9cute toujours en mode coop\xe9ratif."}),"\n",(0,t.jsx)(s.h2,{id:"Exemple",children:"Exemple"}),"\n",(0,t.jsxs)(s.p,{children:["In this example, the user enters their email and password in an html page that requests ",(0,t.jsx)(s.a,{href:"/docs/fr/19/REST/directory#directorylogin",children:(0,t.jsx)(s.code,{children:"$directory/login"})})," in a POST (it is recommended to use an HTTPS connection to send the html page). The ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is called to validate the credentials and to set the session."]}),"\n",(0,t.jsx)(s.p,{children:"The HTML login page:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:n(116339).A+"",width:"268",height:"85"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["When the login page is sent to the server, the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is called:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:' //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n //A \'/rest\' URL has been called with headers username-4D and password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["As soon as it has been called and returned ",(0,t.jsx)(s.code,{children:"True"}),", the ",(0,t.jsx)(s.code,{children:"On REST Authentication"})," database method is no longer called in the session."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"fillSession"})," project method initializes the user session, for example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,i={},l=null,c=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)o.call(s,t)&&!d.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:l,ref:c,props:i,_owner:a.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},116339:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(296540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);