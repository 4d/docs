/*! For license information please see 713f458a.b5a1c2f4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92572],{293897:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(474848),o=n(28453);const r={id:"authUsers",title:"Usuarios y sesiones"},t=void 0,a={id:"REST/authUsers",title:"Usuarios y sesiones",description:"When scalable sessions are enabled (recommended), REST requests can create and use web user sessions, providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/es/REST/authUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"authUsers",title:"Usuarios y sesiones"},sidebar:"docs",previous:{title:"Configuraci\xf3n del servidor",permalink:"/docs/es/REST/configuration"},next:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/REST/genInfo"}},d={},l=[{value:"Modos de inicio de sesi\xf3n de usuario",id:"Modos-de-inicio-de-sesi\xf3n-de-usuario",level:2},{value:"Modo por defecto",id:"Modo-por-defecto",level:3},{value:"Forzar el modo de inicio de sesi\xf3n",id:"Forzar-el-modo-de-inicio-de-sesi\xf3n",level:3},{value:"Peticiones REST descriptivas",id:"Peticiones-REST-descriptivas",level:3},{value:"<code>Function authentify</code>",id:"Function-authentify",level:3},{value:"Sintaxis",id:"Sintaxis",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Usando <code>On REST Authentication</code>",id:"Usando-On-REST-Authentication",level:2},{value:"Ejemplo",id:"Ejemplo-1",level:3}];function c(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.a,{href:"/docs/es/WebServer/sessions#enabling-sessions",children:"scalable sessions are enabled"})," (recommended), REST requests can create and use ",(0,i.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"web user sessions"}),", providing extra features such as multiple requests handling, data sharing between web client processes, and control of user privileges."]}),"\n",(0,i.jsxs)(s.p,{children:["Cuando se abre una sesi\xf3n de usuario web, puede manejarla a trav\xe9s del objeto ",(0,i.jsx)(s.code,{children:"Session"})," y la ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass",children:"Session API"}),". Las siguientes peticiones REST reutilizan la misma cookie de sesi\xf3n."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["On 4D Server, opening a REST session might require that a free 4D client license is available, depending on the ",(0,i.jsx)(s.a,{href:"#user-login-modes",children:"user login mode"}),".",(0,i.jsx)(s.br,{})]}),"\n",(0,i.jsx)(s.li,{children:"En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"Modos-de-inicio-de-sesi\xf3n-de-usuario",children:"Modos de inicio de sesi\xf3n de usuario"}),"\n",(0,i.jsx)(s.p,{children:'El modo de inicio de sesi\xf3n del usuario le permite controlar c\xf3mo las peticiones REST adquieren licencias 4D Client. Puedes elegir entre dos modos de inicio de sesi\xf3n de usuario: "predeterminado" o "inicio de sesi\xf3n forzado".'}),"\n",(0,i.jsxs)(s.p,{children:["You set the user login mode through the ",(0,i.jsx)(s.code,{children:"forceLogin"})," property in the ",(0,i.jsxs)(s.a,{href:"/docs/es/ORDA/privileges#rolesjson-file",children:[(0,i.jsx)(s.code,{children:"roles.json"})," file"]}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["the ",(0,i.jsx)(s.strong,{children:"default mode"}),' is used if the "forceLogin" property is missing or set to "false",']}),"\n",(0,i.jsxs)(s.li,{children:["el modo ",(0,i.jsx)(s.strong,{children:"force login"}),' se utiliza si la propiedad "forceLogin" es "true".']}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsx)(s.p,{children:"If you modify this property, the server must be restarted to take the change into account."})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["In Qodly Studio for 4D, the mode can be set using the ",(0,i.jsxs)(s.a,{href:"/docs/es/WebServer/qodly-studio#force-login",children:[(0,i.jsx)(s.strong,{children:"Force login"})," option"]})," in the Privileges panel."]})}),"\n",(0,i.jsx)(s.h3,{id:"Modo-por-defecto",children:"Modo por defecto"}),"\n",(0,i.jsxs)(s.p,{children:["In the default mode, any REST request is processed in a web user session that automatically consumes a license (the web user session is created if it does not already exist). Puede utilizar este modo simple si no necesita controlar cu\xe1ntas licencias se conservan en el servidor.\nWhen the default mode is enabled, you can authenticate users through the ",(0,i.jsx)(s.code,{children:"On REST Authentication"})," database method (see below)."]}),"\n",(0,i.jsx)(s.h3,{id:"Forzar-el-modo-de-inicio-de-sesi\xf3n",children:"Forzar el modo de inicio de sesi\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:['En el modo "inicio de sesi\xf3n forzada", el uso de la licencia est\xe1 desconectado de las sesiones de usuario web. A license is required only when the ',(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," is executed, allowing you to control the number of used licenses."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"#descriptive-rest-requests",children:"Descriptive REST requests"}),' are always processed by the server, even if no web user session using a license is opened. En este caso, son procesados a trav\xe9s de sesiones "invitado".']}),"\n",(0,i.jsxs)(s.p,{children:["All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," function for the session. Ejecutar esta funci\xf3n activa el consumo de la licencia 4D."]}),"\n",(0,i.jsx)(s.p,{children:"Este modo le permite implementar la siguiente secuencia de acceso:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:'At the first REST call (for a webform call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than descriptive requests, no license consumption.'}),"\n",(0,i.jsxs)(s.li,{children:["You call your exposed ",(0,i.jsx)(s.a,{href:"/docs/es/ORDA/ordaClasses#datastore-class",children:"datastore class function"})," named ",(0,i.jsx)(s.a,{href:"#function-authentify",children:(0,i.jsx)(s.code,{children:"authentify()"})})," (created beforehand), in which you check the user credentials and call ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," with appropriate privileges."]}),"\n",(0,i.jsxs)(s.li,{children:["La petici\xf3n ",(0,i.jsx)(s.code,{children:"/rest/$catalog/authentify"})," se env\xeda al servidor junto con las credenciales del usuario. Este paso s\xf3lo requiere un formulario de acceso b\xe1sico que no acceda a datos; puede ser un formulario Qodly (llamado a trav\xe9s de la petici\xf3n ",(0,i.jsx)(s.code,{children:"/rest/$getWebForm"}),")."]}),"\n",(0,i.jsx)(s.li,{children:"If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(19801).A+"",width:"1344",height:"756"})}),"\n",(0,i.jsx)(s.h3,{id:"Peticiones-REST-descriptivas",children:"Peticiones REST descriptivas"}),"\n",(0,i.jsx)(s.p,{children:'Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). Estas peticiones son:'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/es/REST/catalog",children:(0,i.jsx)(s.code,{children:"/rest/$catalog"})})," requests (e.g. ",(0,i.jsx)(s.code,{children:"/rest/$catalog/$all"}),") - access to available dataclasses"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/rest/$catalog/authentify"})," - la funci\xf3n del almac\xe9n de datos utilizada para iniciar sesi\xf3n del usuario"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/rest/$getWebForm"})," - la renderizaci\xf3n de un formulario Qodly"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(341656).A+"",width:"1171",height:"302"})}),"\n",(0,i.jsx)(s.h3,{id:"Function-authentify",children:(0,i.jsx)(s.code,{children:"Function authentify"})}),"\n",(0,i.jsx)(s.h4,{id:"Sintaxis",children:"Sintaxis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"exposed Function authentify({params : type}) {-> result : type}\n\t// code\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"authentify()"})," function must be implemented in the ",(0,i.jsx)(s.a,{href:"/docs/es/ORDA/ordaClasses#datastore-class",children:"DataStore class"})," of the project and must be called through a REST request."]}),"\n",(0,i.jsx)(s.p,{children:'This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.'}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"authentify()"})," function can always be executed by a REST guest session, whatever the ",(0,i.jsxs)(s.a,{href:"/docs/es/ORDA/privileges#rolesjson-file",children:[(0,i.jsx)(s.code,{children:"roles.json"})," file"]})," configuration."]})}),"\n",(0,i.jsxs)(s.p,{children:["The function can receive any authentication or contextual information as ",(0,i.jsx)(s.a,{href:"/docs/es/REST/classFunctions#parameters",children:"parameter(s)"})," and can return any value. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request."]}),"\n",(0,i.jsx)(s.p,{children:"Esta funci\xf3n debe contener dos partes:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"alg\xfan c\xf3digo para identificar y autenticar al remitente de la petici\xf3n REST,"}),"\n",(0,i.jsxs)(s.li,{children:["if the authentication is successful, a call to ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," that assigns appropriate privileges to the session."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If the function does not call ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})}),", no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected."]}),"\n",(0,i.jsx)(s.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,i.jsxs)(s.p,{children:["S\xf3lo quiere conocer a los usuarios para abrir una sesi\xf3n web en el servidor. Ha creado la siguiente funci\xf3n ",(0,i.jsx)(s.code,{children:"authentify()"})," en la clase datastore:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) //the user is known\n\tIf (Verify password hash($credentials.password; $user.password))\n\t\tSession.setPrivileges("vip")\n\tElse\n\n\t\treturn "Wrong password"\n\tEnd if\nElse\n        return "Wrong user"\nEnd if\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Para llamar a la funci\xf3n ",(0,i.jsx)(s.code,{children:"authentify()"}),":"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"POST"})," ",(0,i.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/authentify"})]}),"\n",(0,i.jsx)(s.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'[{"name":"Henry",\n"password":"123"}]\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"Usando-On-REST-Authentication",children:["Usando ",(0,i.jsx)(s.code,{children:"On REST Authentication"})]}),"\n",(0,i.jsxs)(s.p,{children:['In default login mode (i.e. the "force login" mode is disabled), you can log in a user to your application by calling ',(0,i.jsx)(s.a,{href:"/docs/es/REST/directory#directorylogin",children:(0,i.jsx)(s.code,{children:"$directory/login"})})," in a POST request including the user's name and password in the header. Esta petici\xf3n llama al m\xe9todo base ",(0,i.jsx)(s.code,{children:"On REST Authentication"})," (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo)."]}),"\n",(0,i.jsxs)(s.p,{children:["Si no se ha definido el m\xe9todo base ",(0,i.jsx)(s.code,{children:"On REST Authentication"}),", se abre una sesi\xf3n ",(0,i.jsx)(s.code,{children:"guest"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"Ejemplo-1",children:"Ejemplo"}),"\n",(0,i.jsxs)(s.p,{children:["In this example, the user enters their email and password in an html page that requests ",(0,i.jsx)(s.a,{href:"/docs/es/REST/directory#directorylogin",children:(0,i.jsx)(s.code,{children:"$directory/login"})})," in a POST (it is recommended to use an HTTPS connection to send the html page). Se llama al m\xe9todo base ",(0,i.jsx)(s.code,{children:"On REST Authentication"})," para validar las credenciales y establecer la sesi\xf3n."]}),"\n",(0,i.jsx)(s.p,{children:"P\xe1gina de inicio de sesi\xf3n HTML:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(883927).A+"",width:"268",height:"85"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n\t<FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml";\n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Cuando la p\xe1gina de inicio de sesi\xf3n se env\xeda al servidor, se llama al m\xe9todo base ",(0,i.jsx)(s.code,{children:"On REST Authentication"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\t//On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n\t//A \'/rest\' URL has been called with headers username-4D and password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if\n    End if\nEnd if\n'})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Tan pronto como se ha llamado y devuelto ",(0,i.jsx)(s.code,{children:"True"}),", el m\xe9todo base ",(0,i.jsx)(s.code,{children:"On REST Authentication"})," deja de llamarse en la sesi\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["El m\xe9todo proyecto ",(0,i.jsx)(s.code,{children:"fillSession"})," inicializa la sesi\xf3n usuario, por ejemplo:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if\nEnd use\n'})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var i=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var i,r={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,i)&&!d.hasOwnProperty(i)&&(r[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:o,type:e,key:l,ref:c,props:r,_owner:a.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},341656:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},19801:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/force-login-2-9e72b31a808ebc57f1a0996395cdfb2b.jpeg"},883927:(e,s,n)=>{n.d(s,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var i=n(296540);const o={},r=i.createContext(o);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);