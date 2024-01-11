"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35238],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),u=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,A=c["".concat(d,".").concat(m)]||c[m]||p[m]||s;return n?o.createElement(A,a(a({ref:t},l),{},{components:n})):o.createElement(A,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},525765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});n(667294);var o=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},i=void 0,d={unversionedId:"REST/authUsers",id:"version-20-R4/REST/authUsers",title:"Usu\xe1rios e sess\xf5es",description:"Os pedidos REST podem beneficiar das sess\xf5es usu\xe1rio Web, fornecendo funcionalidades adicionais, como o tratamento de v\xe1rios pedidos, a partilha de dados entre os processos do cliente Web e os privil\xe9gios do usu\xe1rio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/pt/REST/authUsers",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},sidebar:"docs",previous:{title:"Configura\xe7\xe3o do servidor",permalink:"/docs/pt/REST/configuration"},next:{title:"Obter informa\xe7\xe3o do servidor",permalink:"/docs/pt/REST/genInfo"}},u={},l=[{value:"Autentica\xe7\xe3o de usu\xe1rios",id:"autentica\xe7\xe3o-de-usu\xe1rios",level:2},{value:"Abertura de sess\xf5es",id:"abertura-de-sess\xf5es",level:2},{value:"Modo preventivo",id:"modo-preventivo",level:2},{value:"Exemplo",id:"exemplo",level:2}],p={toc:l};function c(e){var{components:t}=e,a=s(e,["components"]);return(0,o.kt)("wrapper",r({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Os pedidos REST podem beneficiar das ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/sessions"}),"sess\xf5es usu\xe1rio Web"),", fornecendo funcionalidades adicionais, como o tratamento de v\xe1rios pedidos, a partilha de dados entre os processos do cliente Web e os privil\xe9gios do usu\xe1rio."),(0,o.kt)("p",null,"Como primeiro passo para abrir uma sess\xe3o REST no servidor 4D, o usu\xe1rio que envia a solicitude deve estar autenticado."),(0,o.kt)("h2",r({},{id:"autentica\xe7\xe3o-de-usu\xe1rios"}),"Autentica\xe7\xe3o de usu\xe1rios"),(0,o.kt)("p",null,"Pode iniciar a sess\xe3o de um usu\xe1rio em sua aplica\xe7\xe3o passando o nome e a senhar de usu\xe1rio em  ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/directory#directorylogin"}),(0,o.kt)("inlineCode",{parentName:"a"},"$directory/login")),". Este pedido chama o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," (se existir), onde pode verificar as credenciais do usu\xe1rio (ver exemplo abaixo)."),(0,o.kt)("h2",r({},{id:"abertura-de-sess\xf5es"}),"Abertura de sess\xf5es"),(0,o.kt)("p",null,"Quando ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/sessions#enabling-sessions"}),"sess\xf5es escal\xe1veis est\xe3o activadas")," (recomendado), se o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," devolver ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", \xe9 automaticamente aberta uma sess\xe3o usuario, que pode ser tratada atrav\xe9s do objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," e da ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/SessionClass"}),"API Session"),". Os pedidos REST subsequentes reutilizar\xe3o o mesmo cookie de sess\xe3o."),(0,o.kt)("p",null,"Se o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," n\xe3o tiver sido definido, \xe9 aberta uma sess\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"guest"),"."),(0,o.kt)("h2",r({},{id:"modo-preventivo"}),"Modo preventivo"),(0,o.kt)("p",null,"On 4D Server, REST requests are automatically handled through preemptive processes, ",(0,o.kt)("strong",{parentName:"p"},"even in interpreted mode"),". You need to make sure that your code is ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/preemptiveWeb#writing-thread-safe-web-server-code"}),"compliant with a preemptive execution"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To debug interpreted web code on the server machine, make sure the debugger is ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/Debugging/debugging-remote"}),"attached to the server")," or ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/Debugging/debugging-remote#attaching-the-debugger-to-a-remote-4d-client"}),"to a remote machine"),". With this configuration, all processes switch to cooperative mode and the web server code can be debugged.")),(0,o.kt)("p",null,"With 4D single-user, interpreted code is always run in cooperative mode."),(0,o.kt)("h2",r({},{id:"exemplo"}),"Exemplo"),(0,o.kt)("p",null,"Neste exemplo, o usu\xe1rio introduz o seu e-mail e palavra-passe numa p\xe1gina html que solicita ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/directory#directorylogin"}),(0,o.kt)("inlineCode",{parentName:"a"},"$directory/login"))," num POST (recomenda-se a utiliza\xe7\xe3o de uma liga\xe7\xe3o HTTPS para enviar a p\xe1gina html). O m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \xe9 chamado para validar as credenciais e definir a sess\xe3o."),(0,o.kt)("p",null,"A p\xe1gina de in\xedcio de sess\xe3o em HTML:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:n(556843).Z,width:"268",height:"85"})),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n <FORM name="myForm"> Email: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/> Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()"> Login\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n')),(0,o.kt)("p",null,"Quando a p\xe1gina de in\xedcio de sess\xe3o \xe9 enviada para o servidor, o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," \xe9 chamado:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'    //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs. SalesPersonsEntity\n\n$Accepted:=False\n\n //A \'/rest\' URL has been called with headers username-4D and password-4D If ($userId#"")\n    $sales:=ds. SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if End if \n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Assim que tiver sido chamado e devolvido ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", o m\xe9todo base ",(0,o.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," deixa de ser chamado na sess\xe3o.")),(0,o.kt)("p",null,"O m\xe9todo projeto ",(0,o.kt)("inlineCode",{parentName:"p"},"fillSession")," inicializa a sess\xe3o usu\xe1rio, por exemplo:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'#DECLARE($sales : cs. SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname Session.setPrivileges($info) Use (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if End use\n')))}c.isMDXComponent=!0},556843:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAABVCAYAAAC8etoYAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAABa1JREFUeF7tnTty6zYUQLk+NdxG3gZcquUS7EKVGzYuU6l8KVSn02RSpFPpJSD4kgBISpApQQR5zsydkYgPab13jy9gk65+//5L/PHrlwAAuAXCAIBkEAYAJNMJ459//yMIgrgaVBgAkAzCAIBkEAYAJIMwACAZhAEAySAMAEgGYQBAMggDAJLZjDDe3t4IoshYEpsQxtI+dIB7WNL/X4QBsHAQRmYQBpRMgcK4iLauRFVNR91ebN9HY87tz39pa1HVrWxJA2FAyZRbYZwaKYdGnOzbjksr6mZw9CloWShJIQzYCOsTRmaoMGBLrEsYsrpoMxsEYcCWWJcw5LFwNXISjd3T6JYPVS30FoQeb/Y8gjFqSWOPD5cbZj6//0AYdvzUPgrCgJIpXBheYtvok9kktztuEtjbMLUdw4SPNjVt8puu/XxXhXEDhAEls6oKQyWvn8wuyf3v9qeml4XCVB4jeyGjFUhChXEDhAElsyphqIog3MP4gTDckkT3iQWBMGDbrEsYDtlmkvpeYdwSBMKAbbM+YegKIRTAvcLo+ttlSSwMf75BhXIDhAElU6Awbv+mp7+ccMdUkmtZuGOyKjjpZHfHTNIHfRpZqdjXdfvnYD4jC3fMSoOfksCKKbfCKBSEASWDMDKDMKBkEEZmEAaUDMLIDMKAkkEYmUEYUDII4wWoD50gSowlsRlhPJOxf2SCKCHuBWHM5CcfOsBSuPf/L8KYCcKAkkEYmUEYUDJPEsaVXw337wpbA/rXzO0DfxJAGFAyz60w4pvP7I1iq5GGu80eYcBGyCsMiblxLD3BFg8VBmyI7MJwd4+uZmWCMGBDvLzCCG8/H3uOhTwu7XJpmz4pu6WAnFu+blSDW+7Y/n0f2y8Y584f77X412rbmrbr4yTXX7Oc5xQJw56DW+dhjeQVhktq9/QrnVyxPLzkdv30OD/J3evoYTnRfKZvLKHWXk/c5uShzu9eWyn0w6OvSfZr6uic10EYUDIZhOESz8bEo/L6h+J4wpDvh0sXm8yja5oJCXTnlO/dA0VjmSmCc46dxxwLDgUyuw3CgJLJW2GMEOxpRP3DJ2t5swQiCufX83mVSXMyVYgeLoXgfBFUMx1+xTIijDGJDaqa6yAMKJnXCiNun+jf7RkEmSqxCRyM8RL4JJcfKo+1eOTYfjkisdIJp/TkMlphREsgBcKADZFBGFeSKWo3FYVNfpWIXrJqaej3KpFjQfiSMYleN03/5wzseerg7xtYIXhjg+pkVBjuGuNrDo9dA2FAyTxJGC4Z+wi+K3eY79iuTyOT3LyWyfd3K5raVhY6XGLLufVGozcuzGmT+IFE/MrBJ7rOWBbueDAwbGtk1RJUGLbqGf96EQaUzXMrDBiAMKBkEEZmEAaUDMLIDMKAkkEYmUEYUDIIIzMIA0oGYbwA9aETRIlxL3cJ4/PzU3x8fIyeeKmhrlddNwDMJ1kYKum+vr7E9/d3caGuG2kAzCdZGO/v76PJWEqo6weAeSQLQ5X3Y4lYSqjrB4B5IAwASOaBwjiKfVWJ/XGsbU6cxWFXid3hPNKWHggDYD4IAwCSKUAYjwmEATCfrMI4H3b9Lea7gzj77cd937bfe3P5FYZ9Ldt3rm+1F0d/nolAGADzyScMLQSX3Cbxq/3RtodjnVimhDE9z3QgDID5ZBPGcR8lti+QQCYq/LmGwvD3MwbzTgTCAJhPJmEME92XhK4ogiUKwgBYIlQYAJBMkXsYCAPgNTxcGN1POlx4S43Un5LsDgcqDIAF8kBhPDKUfHbicB5r+1kgDID5LEMY54PYeXsYphLx9zTmB8IAmM9iKgy9tHDLlQdXFyoQBsB8koXB8zAAIFkYPHELAJKFoVBJxzM9AbbLXcIAgG2DMAAgGYQBAMkgDABIBmEAQDIIAwCSQRgAkAzCAIBkEAYAJIMwACARIf4HVeqaPWxiQxgAAAAASUVORK5CYII="}}]);