"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75123],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?s.createElement(f,i(i({ref:t},d),{},{components:n})):s.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},909643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});n(667294);var s=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"authUsers",title:"Sessions et utilisateurs"},o=void 0,l={unversionedId:"REST/authUsers",id:"version-19/REST/authUsers",title:"Sessions et utilisateurs",description:"REST requests can benefit from web user sessions, providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/fr/19/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"authUsers",title:"Sessions et utilisateurs"},sidebar:"docs",previous:{title:"Configuration du serveur",permalink:"/docs/fr/19/REST/configuration"},next:{title:"Obtenir des informations du serveur",permalink:"/docs/fr/19/REST/genInfo"}},u={},d=[{value:"Authentification des utilisateurs",id:"authentification-des-utilisateurs",level:2},{value:"Ouverture des sessions",id:"ouverture-des-sessions",level:2},{value:"Mode pr\xe9emptif",id:"mode-pr\xe9emptif",level:2},{value:"Exemple",id:"exemple",level:2}],p={toc:d};function c(e){var{components:t}=e,i=a(e,["components"]);return(0,s.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"REST requests can benefit from ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/WebServer/sessions"}),"web user sessions"),", providing extra features such as multiple requests handling, data sharing between the web client processes, and user privileges."),(0,s.kt)("p",null,"La premi\xe8re \xe9tape \xe0 suivre pour ouvrir une session REST sur le serveur 4D, consiste \xe0 authentifier l'utilisateur qui envoie la requ\xeate."),(0,s.kt)("h2",r({},{id:"authentification-des-utilisateurs"}),"Authentification des utilisateurs"),(0,s.kt)("p",null,"You log in a user to your application by calling ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST request including the user's name and password in the header. This request calls the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method (if it exists), where you can check the user's credentials (see example below)."),(0,s.kt)("h2",r({},{id:"ouverture-des-sessions"}),"Ouverture des sessions"),(0,s.kt)("p",null,"Lorsque les ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/WebServer/sessions#enabling-sessions"}),"sessions \xe9volutives sont activ\xe9es")," (recommand\xe9), si la m\xe9thode base ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," retourne ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", une session utilisateur est alors automatiquement ouverte et vous pouvez la g\xe9rer via l'objet ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," et ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/API/SessionClass"}),"l'API Session"),". Subsequent REST requests will reuse the same session cookie."),(0,s.kt)("p",null,"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method has not been defined, a ",(0,s.kt)("inlineCode",{parentName:"p"},"guest")," session is opened."),(0,s.kt)("h2",r({},{id:"mode-pr\xe9emptif"}),"Mode pr\xe9emptif"),(0,s.kt)("p",null,"On 4D Server, REST requests are automatically handled through preemptive processes, ",(0,s.kt)("strong",{parentName:"p"},"even in interpreted mode"),". You need to make sure that your code is ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/WebServer/preemptiveWeb#writing-thread-safe-web-server-code"}),"compliant with a preemptive execution"),"."),(0,s.kt)("p",null,"Avec 4D monoposte, le code interpr\xe9t\xe9 s'ex\xe9cute toujours en mode coop\xe9ratif."),(0,s.kt)("h2",r({},{id:"exemple"}),"Exemple"),(0,s.kt)("p",null,"In this example, the user enters their email and password in an html page that requests ",(0,s.kt)("a",r({parentName:"p"},{href:"/docs/fr/19/REST/directory#directorylogin"}),(0,s.kt)("inlineCode",{parentName:"a"},"$directory/login"))," in a POST (it is recommended to use an HTTPS connection to send the html page). The ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called to validate the credentials and to set the session."),(0,s.kt)("p",null,"The HTML login page:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:n(448743).Z,width:"268",height:"85"})),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,s.kt)("p",null,"When the login page is sent to the server, the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is called:"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n //A \'/rest\' URL has been called with headers username-4D and password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"As soon as it has been called and returned ",(0,s.kt)("inlineCode",{parentName:"p"},"True"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database method is no longer called in the session.")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"fillSession")," project method initializes the user session, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n')))}c.isMDXComponent=!0},448743:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"}}]);