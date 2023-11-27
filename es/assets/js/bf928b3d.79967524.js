"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90872],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,A=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return t?a.createElement(A,r(r({ref:n},u),{},{components:t})):a.createElement(A,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<s;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});t(67294);var a=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const r={id:"authUsers",title:"Usuarios y sesiones"},i=void 0,l={unversionedId:"REST/authUsers",id:"version-20-R2/REST/authUsers",title:"Usuarios y sesiones",description:"Las peticiones REST pueden beneficiarse de sesiones de usuario web, ofreciendo funcionalidades extra como la gesti\xf3n de m\xfaltiples peticiones, la posibilidad de compartir datos entre los procesos del cliente web y los privilegios del usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/es/20-R2/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"authUsers",title:"Usuarios y sesiones"},sidebar:"docs",previous:{title:"Configuraci\xf3n del servidor",permalink:"/docs/es/20-R2/REST/configuration"},next:{title:"Obtener informaci\xf3n del servidor",permalink:"/docs/es/20-R2/REST/genInfo"}},d={},u=[{value:"Autenticaci\xf3n de los usuarios",id:"autenticaci\xf3n-de-los-usuarios",level:2},{value:"Apertura de las sesiones",id:"apertura-de-las-sesiones",level:2},{value:"Modo apropiativo",id:"modo-apropiativo",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:u};function p(e){var{components:n}=e,r=s(e,["components"]);return(0,a.kt)("wrapper",o({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Las peticiones REST pueden beneficiarse de ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/WebServer/sessions"}),"sesiones de usuario web"),", ofreciendo funcionalidades extra como la gesti\xf3n de m\xfaltiples peticiones, la posibilidad de compartir datos entre los procesos del cliente web y los privilegios del usuario."),(0,a.kt)("p",null,"Como primer paso para abrir una sesi\xf3n REST en el servidor 4D, el usuario que env\xeda la solicitud debe estar autenticado."),(0,a.kt)("h2",o({},{id:"autenticaci\xf3n-de-los-usuarios"}),"Autenticaci\xf3n de los usuarios"),(0,a.kt)("p",null,"Usted inicia la sesi\xf3n de un usuario en su aplicaci\xf3n llamando a ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/REST/directory#directorylogin"}),(0,a.kt)("inlineCode",{parentName:"a"},"$directory/login"))," en una petici\xf3n POST incluyendo el nombre y la contrase\xf1a del usuario en el encabezado. Esta petici\xf3n llama al m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," (si existe), donde se pueden comprobar las credenciales del usuario (ver ejemplo abajo)."),(0,a.kt)("h2",o({},{id:"apertura-de-las-sesiones"}),"Apertura de las sesiones"),(0,a.kt)("p",null,"Cuando las ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/WebServer/sessions#enabling-sessions"}),"sesiones escalables se activan")," (recomendado), si el m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," devuelve ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", se abre autom\xe1ticamente una sesi\xf3n de usuario y se puede manejar a trav\xe9s del objeto ",(0,a.kt)("inlineCode",{parentName:"p"},"Session")," y la ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass"}),"API Session"),". Las siguientes peticiones REST reutilizar\xe1n la misma cookie de sesi\xf3n."),(0,a.kt)("p",null,"Si no se ha definido el m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),", se abre una sesi\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"guest"),"."),(0,a.kt)("h2",o({},{id:"modo-apropiativo"}),"Modo apropiativo"),(0,a.kt)("p",null,"En 4D Server, las peticiones REST se gestionan autom\xe1ticamente a trav\xe9s de procesos apropiativos, ",(0,a.kt)("strong",{parentName:"p"},"incluso en modo interpretado"),". Debe asegurarse de que su c\xf3digo es ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/WebServer/preemptiveWeb#writing-thread-safe-web-server-code"}),"compatible con una ejecuci\xf3n apropiativa"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Para depurar el c\xf3digo web interpretado en la m\xe1quina del servidor, aseg\xfarese de que el depurador est\xe1 ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/Debugging/debugging-remote"}),"adjuntado al servidor")," o ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/Debugging/debugging-remote#attaching-the-debugger-to-a-remote-4d-client"}),"a una m\xe1quina remota"),". Los procesos web pasan entonces al modo cooperativo y se puede depurar el c\xf3digo del servidor web.")),(0,a.kt)("p",null,"Con 4D monopuesto, el c\xf3digo interpretado siempre se ejecuta en modo cooperativo."),(0,a.kt)("h2",o({},{id:"ejemplo"}),"Ejemplo"),(0,a.kt)("p",null,"En este ejemplo, el usuario introduce su correo electr\xf3nico y contrase\xf1a en una p\xe1gina html que solicita ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/20-R2/REST/directory#directorylogin"}),(0,a.kt)("inlineCode",{parentName:"a"},"$directory/login"))," en un POST (se recomienda utilizar una conexi\xf3n HTTPS para enviar la p\xe1gina html). Se llama al m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," para validar las credenciales y establecer la sesi\xf3n."),(0,a.kt)("p",null,"P\xe1gina de inicio de sesi\xf3n HTML:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:t(6074).Z,width:"268",height:"85"})),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n    <FORM name="myForm">\nEmail: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\nPassword: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()">\nLogin\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //direcci\xf3n del servidor rest\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,a.kt)("p",null,"Cuando la p\xe1gina de inicio de sesi\xf3n se env\xeda al servidor, se llama al m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'    //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs.SalesPersonsEntity\n\n$Accepted:=False\n\n    //Una URL \'/rest\' ha sido llamada con los encabezados username-4D y password-4D\nIf ($userId#"")\n    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if \nEnd if \n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tan pronto como se ha llamado y devuelto ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),", el m\xe9todo base ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," deja de llamarse en la sesi\xf3n.")),(0,a.kt)("p",null,"El m\xe9todo proyecto ",(0,a.kt)("inlineCode",{parentName:"p"},"fillSession")," inicializa la sesi\xf3n usuario, por ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs.SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname\n\nSession.setPrivileges($info)\n\nUse (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if \nEnd use\n')))}p.isMDXComponent=!0},6074:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);