"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42948"],{70021:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>t,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"REST/authUsers","title":"Usuarios y sesiones","description":"Las peticiones REST pueden beneficiarse de sesiones de usuario web, ofreciendo funcionalidades extra como la gesti\xf3n de m\xfaltiples peticiones, la posibilidad de compartir datos entre los procesos del cliente web y los privilegios del usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/authUsers.md","sourceDirName":"REST","slug":"/REST/authUsers","permalink":"/docs/es/20/REST/authUsers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"authUsers","title":"Usuarios y sesiones"},"sidebar":"docs","previous":{"title":"Configuraci\xf3n del servidor","permalink":"/docs/es/20/REST/configuration"},"next":{"title":"Obtener informaci\xf3n del servidor","permalink":"/docs/es/20/REST/genInfo"}}'),o=n("785893"),a=n("250065");let r={id:"authUsers",title:"Usuarios y sesiones"},t=void 0,d={},l=[{value:"Autenticaci\xf3n de los usuarios",id:"autenticaci\xf3n-de-los-usuarios",level:2},{value:"Apertura de las sesiones",id:"apertura-de-las-sesiones",level:2},{value:"Modo apropiativo",id:"modo-apropiativo",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Las peticiones REST pueden beneficiarse de ",(0,o.jsx)(s.a,{href:"/docs/es/20/WebServer/sessions",children:"sesiones de usuario web"}),", ofreciendo funcionalidades extra como la gesti\xf3n de m\xfaltiples peticiones, la posibilidad de compartir datos entre los procesos del cliente web y los privilegios del usuario."]}),"\n",(0,o.jsx)(s.p,{children:"Como primer paso para abrir una sesi\xf3n REST en el servidor 4D, el usuario que env\xeda la solicitud debe estar autenticado."}),"\n",(0,o.jsx)(s.h2,{id:"autenticaci\xf3n-de-los-usuarios",children:"Autenticaci\xf3n de los usuarios"}),"\n",(0,o.jsxs)(s.p,{children:["Usted inicia la sesi\xf3n de un usuario en su aplicaci\xf3n llamando a ",(0,o.jsx)(s.a,{href:"/docs/es/20/REST/directory#directorylogin",children:(0,o.jsx)(s.code,{children:"$directory/login"})})," en una petici\xf3n POST incluyendo el nombre y la contrase\xf1a del usuario en el encabezado. Esta petici\xf3n llama al m\xe9todo base ",(0,o.jsx)(s.code,{children:"On REST Authentication"})," (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo)."]}),"\n",(0,o.jsx)(s.h2,{id:"apertura-de-las-sesiones",children:"Apertura de las sesiones"}),"\n",(0,o.jsxs)(s.p,{children:["Cuando las ",(0,o.jsx)(s.a,{href:"/docs/es/20/WebServer/sessions#enabling-sessions",children:"sesiones escalables se activan"})," (recomendado), si el m\xe9todo base ",(0,o.jsx)(s.code,{children:"On REST Authentication"})," devuelve ",(0,o.jsx)(s.code,{children:"true"}),", se abre autom\xe1ticamente una sesi\xf3n de usuario y se puede manejar a trav\xe9s del objeto ",(0,o.jsx)(s.code,{children:"Session"})," y la ",(0,o.jsx)(s.a,{href:"/docs/es/20/API/SessionClass",children:"API Session"}),". Las siguientes peticiones REST reutilizar\xe1n la misma cookie de sesi\xf3n."]}),"\n",(0,o.jsxs)(s.p,{children:["Si no se ha definido el m\xe9todo base ",(0,o.jsx)(s.code,{children:"On REST Authentication"}),", se abre una sesi\xf3n ",(0,o.jsx)(s.code,{children:"guest"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"modo-apropiativo",children:"Modo apropiativo"}),"\n",(0,o.jsxs)(s.p,{children:["En 4D Server, las peticiones REST se gestionan autom\xe1ticamente a trav\xe9s de procesos apropiativos, ",(0,o.jsx)(s.strong,{children:"incluso en modo interpretado"}),". Debe asegurarse de que su c\xf3digo es ",(0,o.jsx)(s.a,{href:"/docs/es/20/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compatible con una ejecuci\xf3n apropiativa"}),"."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Para depurar el c\xf3digo web interpretado en la m\xe1quina del servidor, aseg\xfarese de que el depurador est\xe1 ",(0,o.jsx)(s.a,{href:"/docs/es/20/Debugging/debugging-remote",children:"adjuntado al servidor"})," o ",(0,o.jsx)(s.a,{href:"/docs/es/20/Debugging/debugging-remote#attaching-the-debugger-to-a-remote-4d-client",children:"a una m\xe1quina remota"}),". Los procesos web pasan entonces al modo cooperativo y se puede depurar el c\xf3digo del servidor web."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Con 4D monopuesto, el c\xf3digo interpretado siempre se ejecuta en modo cooperativo."}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(s.p,{children:["En este ejemplo, el usuario introduce su correo electr\xf3nico y contrase\xf1a en una p\xe1gina html que solicita ",(0,o.jsx)(s.a,{href:"/docs/es/20/REST/directory#directorylogin",children:(0,o.jsx)(s.code,{children:"$directory/login"})})," en un POST (se recomienda utilizar una conexi\xf3n HTTPS para enviar la p\xe1gina html). Se llama al m\xe9todo base ",(0,o.jsx)(s.code,{children:"On REST Authentication"})," para validar las credenciales y establecer la sesi\xf3n."]}),"\n",(0,o.jsx)(s.p,{children:"P\xe1gina de inicio de sesi\xf3n HTML:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"alt-text",src:n(327418).Z+"",width:"268",height:"85"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-html",children:'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n    <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //direcci\xf3n del servidor rest\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Cuando la p\xe1gina de inicio de sesi\xf3n se env\xeda al servidor, se llama al m\xe9todo base ",(0,o.jsx)(s.code,{children:"On REST Authentication"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'    //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n    //Una URL \'/rest\' ha sido llamada con los encabezados username-4D y password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n'})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Tan pronto como se ha llamado y devuelto ",(0,o.jsx)(s.code,{children:"True"}),", el m\xe9todo base ",(0,o.jsx)(s.code,{children:"On REST Authentication"})," deja de llamarse en la sesi\xf3n."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["El m\xe9todo proyecto ",(0,o.jsx)(s.code,{children:"fillSession"})," inicializa la sesi\xf3n usuario, por ejemplo:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n'})})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},327418:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return r}});var i=n(667294);let o={},a=i.createContext(o);function r(e){let s=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);