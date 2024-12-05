"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90324"],{904968:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"REST/authUsers","title":"Usu\xe1rios e sess\xf5es","description":"Sess\xf5es","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/REST/authUsers.md","sourceDirName":"REST","slug":"/REST/authUsers","permalink":"/docs/pt/REST/authUsers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"authUsers","title":"Usu\xe1rios e sess\xf5es"},"sidebar":"docs","previous":{"title":"Configura\xe7\xe3o do servidor","permalink":"/docs/pt/REST/configuration"},"next":{"title":"Obter informa\xe7\xe3o do servidor","permalink":"/docs/pt/REST/genInfo"}}'),o=n("785893"),t=n("250065");let r={id:"authUsers",title:"Usu\xe1rios e sess\xf5es"},a=void 0,c={},l=[{value:"Sess\xf5es",id:"sess\xf5es",level:2},{value:"Force login mode",id:"force-login-mode",level:2},{value:"Solicita\xe7\xf5es REST descritivas",id:"solicita\xe7\xf5es-rest-descritivas",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:2},{value:"Sintaxe",id:"sintaxe",level:3},{value:"Exemplo",id:"exemplo",level:3}];function d(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"sess\xf5es",children:"Sess\xf5es"}),"\n",(0,o.jsxs)(s.p,{children:["Quando ",(0,o.jsx)(s.a,{href:"/docs/pt/WebServer/sessions#enabling-sessions",children:"sess\xf5es escalon\xe1veis est\xe3o ativadas"})," (recomendado), as solicita\xe7\xf5es REST podem criar e usar ",(0,o.jsx)(s.a,{href:"/docs/pt/WebServer/sessions",children:"sess\xf5es de usu\xe1rio Web"}),", fornecendo recursos adicionais, como manipula\xe7\xe3o de v\xe1rias solicita\xe7\xf5es, compartilhamento de dados entre processos de clientes da Web e controle de privil\xe9gios de usu\xe1rio."]}),"\n",(0,o.jsxs)(s.p,{children:["Cuando se abre una sesi\xf3n de usuario web, puede manejarla a trav\xe9s del objeto ",(0,o.jsx)(s.code,{children:"Session"})," y la ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass",children:"Session API"}),". Subsequent REST requests reuse the same session cookie."]}),"\n",(0,o.jsx)(s.p,{children:"Uma sess\xe3o \xe9 aberta depois que o usu\xe1rio \xe9 autenticado com sucesso (veja abaixo)."}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["On 4D Server, opening a REST session requires that a free 4D client license is available.",(0,o.jsx)(s.br,{})]}),"\n",(0,o.jsx)(s.li,{children:"Em 4D single-user, pode abrir at\xe9 tr\xeas sess\xf5es REST para fins de teste."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"force-login-mode",children:"Force login mode"}),"\n",(0,o.jsx)(s.admonition,{title:"Compatibidade",type:"note",children:(0,o.jsxs)(s.p,{children:["O modo de login legado baseado no m\xe9todo de banco de dados ",(0,o.jsx)(s.code,{children:"On REST Authentication"})," \xe9 ",(0,o.jsx)(s.strong,{children:"obsoleto"})," a partir de 4D 20 R6. It is now recommended to ",(0,o.jsxs)(s.a,{href:"/docs/pt/ORDA/privileges#rolesjson-file",children:["use the ",(0,o.jsx)(s.strong,{children:"force login mode"})]})," (automatically enabled in new projects) and to implement the ",(0,o.jsxs)(s.a,{href:"#dsauthentify",children:[(0,o.jsx)(s.code,{children:"ds.authentify()"})," function"]}),". Em projetos convertidos, ",(0,o.jsx)(s.a,{href:"/docs/pt/settings/web#activate-rest-authentication-through-dsauthentify-function",children:"um bot\xe3o na caixa de di\xe1logo Configura\xe7\xf5es"})," o ajudar\xe1 a atualizar sua configura\xe7\xe3o. No Qodly Studio para 4D, o modo pode ser definido usando a op\xe7\xe3o ",(0,o.jsx)(s.a,{href:"/docs/pt/WebServer/qodly-studio#force-login",children:(0,o.jsx)(s.strong,{children:"For\xe7ar login"})})," no painel de Privil\xe9gios."]})}),"\n",(0,o.jsx)(s.p,{children:"A sequ\xeancia de login do usu\xe1rio \xe9 a seguinte:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:['At the first REST call (for a Qodly page call for example), a "guest" web user session is created. It has no privileges, no rights to execute requests other than ',(0,o.jsx)(s.a,{href:"#descriptive-rest-requests",children:"descriptive REST requests"}),", no license consumption.",(0,o.jsx)(s.br,{}),'\nDescriptive REST requests are always processed by the server, even if no web user session using a license is opened. In this case, they are processed through "guest" sessions.']}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["You call your ",(0,o.jsxs)(s.a,{href:"#authentify",children:[(0,o.jsx)(s.code,{children:"authentify()"})," function"]})," (created beforehand), in which you check the user credentials and call ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,o.jsx)(s.code,{children:"Session.setPrivileges()"})})," with appropriate privileges. ",(0,o.jsx)(s.code,{children:"authentify()"})," must be an exposed ",(0,o.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#datastore-class",children:"datastore class function"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["La petici\xf3n ",(0,o.jsx)(s.code,{children:"/rest/$catalog/authentify"})," se env\xeda al servidor junto con las credenciales del usuario. This step only requires a basic login form that do not access data; it can be a ",(0,o.jsx)(s.a,{href:"/docs/pt/WebServer/qodly-studio",children:"Qodly page"})," (called via the ",(0,o.jsx)(s.code,{children:"/rest/$getWebForm"})," request)."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"If the user is successfully authentified, a 4D license is consumed on the server and all REST requests are accepted."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"alt-text",src:n(997212).Z+"",width:"1344",height:"756"})}),"\n",(0,o.jsxs)(s.p,{children:["In the user login phase, license usage is disconnected from web user sessions. A license is required only when the ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,o.jsx)(s.code,{children:"Session.setPrivileges()"})})," is executed, allowing you to control the number of used licenses."]}),"\n",(0,o.jsxs)(s.p,{children:["All other REST requests (handling data or executing a function) will only be processed if they are executed within a web session with appropriate privileges, otherwise they return an error. To assign privileges to a web session, you need to execute the ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,o.jsx)(s.code,{children:"Session.setPrivileges()"})})," function for the session. A execu\xe7\xe3o dessa fun\xe7\xe3o aciona o consumo da licen\xe7a 4D."]}),"\n",(0,o.jsx)(s.h3,{id:"solicita\xe7\xf5es-rest-descritivas",children:"Solicita\xe7\xf5es REST descritivas"}),"\n",(0,o.jsx)(s.p,{children:'Descriptive REST requests can be processed in web user sessions that do not require licenses ("guest" sessions). Essas solicita\xe7\xf5es s\xe3o:'}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Solicita\xe7\xf5es ",(0,o.jsx)(s.a,{href:"/docs/pt/REST/catalog",children:(0,o.jsx)(s.code,{children:"/rest/$catalog"})})," (por exemplo, ",(0,o.jsx)(s.code,{children:"/rest/$catalog/$all"}),") - acesso \xe0s dataclasses dispon\xedveis"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"/rest/$catalog/authentify"})," - la funci\xf3n del almac\xe9n de datos utilizada para iniciar sesi\xf3n del usuario"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"/rest/$getWebForm"})," - Renderiza\xe7\xe3o de uma p\xe1gina Qodly"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"alt-text",src:n(111532).Z+"",width:"1171",height:"302"})}),"\n",(0,o.jsx)(s.h2,{id:"function-authentify",children:(0,o.jsx)(s.code,{children:"Function authentify"})}),"\n",(0,o.jsx)(s.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"exposed Function authentify({params : type}) {-> result : type}\n	// code\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"authentify()"})," function must be implemented in the ",(0,o.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#datastore-class",children:"DataStore class"})," of the project and must be called through a REST request."]}),"\n",(0,o.jsx)(s.p,{children:'This function is the only available entry point from REST guest sessions when the "force login" mode is enabled: any other function call or data access is rejected until the session acquires appropriate privileges.'}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"authentify()"})," function can always be executed by a REST guest session, whatever the ",(0,o.jsxs)(s.a,{href:"/docs/pt/ORDA/privileges#rolesjson-file",children:[(0,o.jsx)(s.code,{children:"roles.json"})," file"]})," configuration."]})}),"\n",(0,o.jsxs)(s.p,{children:["A fun\xe7\xe3o pode receber qualquer autentica\xe7\xe3o ou informa\xe7\xe3o contextual como ",(0,o.jsx)(s.a,{href:"/docs/pt/REST/classFunctions#parameters",children:"par\xe2metro(s)"})," e pode retornar qualquer valor. Since this function can only be called from a REST request, parameters must be passed through the body of the POST request."]}),"\n",(0,o.jsx)(s.p,{children:"Esta fun\xe7\xe3o deve conter duas partes:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"some code to identify and authenticate the REST request sender,"}),"\n",(0,o.jsxs)(s.li,{children:["if the authentication is successful, a call to ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,o.jsx)(s.code,{children:"Session.setPrivileges()"})})," that assigns appropriate privileges to the session."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["If the function does not call ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#setprivileges",children:(0,o.jsx)(s.code,{children:"Session.setPrivileges()"})}),", no privileges are assigned, no license is consumed and subsequent non-descriptive REST requests are rejected."]}),"\n",(0,o.jsx)(s.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(s.p,{children:["You only want to know users to open a web session on the server. Ha creado la siguiente funci\xf3n ",(0,o.jsx)(s.code,{children:"authentify()"})," en la clase datastore:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) //the user is known\n	If (Verify password hash($credentials.password; $user.password))\n		Session.setPrivileges("vip")\n	Else\n\n		return "Wrong password"\n	End if\nElse\n        return "Wrong user"\nEnd if\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Para llamar a la funci\xf3n ",(0,o.jsx)(s.code,{children:"authentify()"}),":"]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"POST"})," ",(0,o.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/authentify"})]}),"\n",(0,o.jsx)(s.p,{children:"Corpo do pedido:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'[{"name":"Henry",\n"password":"123"}]\n'})})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},111532:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},997212:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/force-login-2-c615d4581880aa201c1e7abd591f6146.jpeg"},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return r}});var i=n(667294);let o={},t=i.createContext(o);function r(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);