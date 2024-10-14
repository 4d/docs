"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75531],{937935:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=o(474848),i=o(28453);const t={id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},r=void 0,d={id:"REST/authUsers",title:"Usu\xe1rios e sess\xf5es",description:"Os pedidos REST podem beneficiar das sess\xf5es usu\xe1rio Web, fornecendo funcionalidades adicionais, como o tratamento de v\xe1rios pedidos, a partilha de dados entre os processos do cliente Web e os privil\xe9gios do usu\xe1rio.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/pt/20/REST/authUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},sidebar:"docs",previous:{title:"Configura\xe7\xe3o do servidor",permalink:"/docs/pt/20/REST/configuration"},next:{title:"Obter informa\xe7\xe3o do servidor",permalink:"/docs/pt/20/REST/genInfo"}},a={},c=[{value:"Autentica\xe7\xe3o de usu\xe1rios",id:"autentica\xe7\xe3o-de-usu\xe1rios",level:2},{value:"Abertura de sess\xf5es",id:"abertura-de-sess\xf5es",level:2},{value:"Modo preventivo",id:"modo-preventivo",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Os pedidos REST podem beneficiar das ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"sess\xf5es usu\xe1rio Web"}),", fornecendo funcionalidades adicionais, como o tratamento de v\xe1rios pedidos, a partilha de dados entre os processos do cliente Web e os privil\xe9gios do usu\xe1rio."]}),"\n",(0,n.jsx)(s.p,{children:"Como primeiro passo para abrir uma sess\xe3o REST no servidor 4D, o usu\xe1rio que envia a solicitude deve estar autenticado."}),"\n",(0,n.jsx)(s.h2,{id:"autentica\xe7\xe3o-de-usu\xe1rios",children:"Autentica\xe7\xe3o de usu\xe1rios"}),"\n",(0,n.jsxs)(s.p,{children:["Pode iniciar a sess\xe3o de um usu\xe1rio em sua aplica\xe7\xe3o passando o nome e a senhar de usu\xe1rio em  ",(0,n.jsx)(s.a,{href:"/docs/pt/20/REST/directory#directorylogin",children:(0,n.jsx)(s.code,{children:"$directory/login"})}),". Este pedido chama o m\xe9todo base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," (se existir), onde pode verificar as credenciais do usu\xe1rio (ver exemplo abaixo)."]}),"\n",(0,n.jsx)(s.h2,{id:"abertura-de-sess\xf5es",children:"Abertura de sess\xf5es"}),"\n",(0,n.jsxs)(s.p,{children:["Quando ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions#enabling-sessions",children:"sess\xf5es escal\xe1veis est\xe3o activadas"})," (recomendado), se o m\xe9todo base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," devolver ",(0,n.jsx)(s.code,{children:"true"}),", \xe9 automaticamente aberta uma sess\xe3o usuario, que pode ser tratada atrav\xe9s do objeto ",(0,n.jsx)(s.code,{children:"Session"})," e da ",(0,n.jsx)(s.a,{href:"/docs/pt/20/API/SessionClass",children:"API Session"}),". Os pedidos REST subsequentes reutilizar\xe3o o mesmo cookie de sess\xe3o."]}),"\n",(0,n.jsxs)(s.p,{children:["Se o m\xe9todo base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," n\xe3o tiver sido definido, \xe9 aberta uma sess\xe3o ",(0,n.jsx)(s.code,{children:"guest"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"modo-preventivo",children:"Modo preventivo"}),"\n",(0,n.jsxs)(s.p,{children:["On 4D Server, REST requests are automatically handled through preemptive processes, ",(0,n.jsx)(s.strong,{children:"even in interpreted mode"}),". You need to make sure that your code is ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compliant with a preemptive execution"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["To debug interpreted web code on the server machine, make sure the debugger is ",(0,n.jsx)(s.a,{href:"/docs/pt/20/Debugging/debugging-remote",children:"attached to the server"})," or ",(0,n.jsx)(s.a,{href:"/docs/pt/20/Debugging/debugging-remote#attaching-the-debugger-to-a-remote-4d-client",children:"to a remote machine"}),". With this configuration, all processes switch to cooperative mode and the web server code can be debugged."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"With 4D single-user, interpreted code is always run in cooperative mode."}),"\n",(0,n.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(s.p,{children:["Neste exemplo, o usu\xe1rio introduz o seu e-mail e palavra-passe numa p\xe1gina html que solicita ",(0,n.jsx)(s.a,{href:"/docs/pt/20/REST/directory#directorylogin",children:(0,n.jsx)(s.code,{children:"$directory/login"})})," num POST (recomenda-se a utiliza\xe7\xe3o de uma liga\xe7\xe3o HTTPS para enviar a p\xe1gina html). O m\xe9todo base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," \xe9 chamado para validar as credenciais e definir a sess\xe3o."]}),"\n",(0,n.jsx)(s.p,{children:"A p\xe1gina de in\xedcio de sess\xe3o em HTML:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt-text",src:o(560867).A+"",width:"268",height:"85"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<html><body bgcolor="#ffffff">\n\n<div id="demo">\n <FORM name="myForm"> Email: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/> Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<button type="button" onclick="onClick()"> Login\n</button>\n<div id="authenticationFailed" style="visibility:hidden;">Authentication failed</div>\n</FORM>\n</div>\n\n<script>\nfunction sendData(data) {\n  var XHR = new XMLHttpRequest();\n\n  XHR.onreadystatechange = function() {\n    if (this.status == 200) {      \n      window.location = "authenticationOK.shtml"; \n      }\n      else {\n      document.getElementById("authenticationFailed").style.visibility = "visible";\n      }\n  };\n\n  XHR.open(\'POST\', \'http://127.0.0.1:8044/rest/$directory/login\'); //rest server address\n\n  XHR.setRequestHeader(\'username-4D\', data.userId);\n  XHR.setRequestHeader(\'password-4D\', data.password);\n  XHR.setRequestHeader(\'session-4D-length\', data.timeout);\n\n  XHR.send();\n};\nfunction onClick()\n{\nsendData({userId:document.forms[\'myForm\'].elements[\'userId\'].value , password:document.forms[\'myForm\'].elements[\'password\'].value , timeout:120})\n}\n<\/script></body></html>\n\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Quando a p\xe1gina de in\xedcio de sess\xe3o \xe9 enviada para o servidor, o m\xe9todo base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," \xe9 chamado:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'    //On REST Authentication\n\n#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean\nvar $sales : cs. SalesPersonsEntity\n\n$Accepted:=False\n\n //A \'/rest\' URL has been called with headers username-4D and password-4D If ($userId#"")\n    $sales:=ds. SalesPersons.query("email = :1"; $userId).first()\n    If ($sales#Null)\n        If (Verify password hash($password; $sales.password))\n            fillSession($sales)\n            $Accepted:=True\n        End if \n    End if End if \n'})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Assim que tiver sido chamado e devolvido ",(0,n.jsx)(s.code,{children:"True"}),", o m\xe9todo base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," deixa de ser chamado na sess\xe3o."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["O m\xe9todo projeto ",(0,n.jsx)(s.code,{children:"fillSession"})," inicializa a sess\xe3o usu\xe1rio, por exemplo:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'#DECLARE($sales : cs. SalesPersonsEntity)\nvar $info : Object\n\n$info:=New object()\n$info.userName:=$sales.firstname+" "+$sales.lastname Session.setPrivileges($info) Use (Session.storage)\n    If (Session.storage.myTop3=Null)\n        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n    End if End use\n'})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},560867:(e,s,o)=>{o.d(s,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>d});var n=o(296540);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);