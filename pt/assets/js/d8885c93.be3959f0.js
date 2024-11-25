"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66803"],{899471:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"WebServer/webServerObject","title":"Objeto Web Server","description":"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/WebServer/webServerObject.md","sourceDirName":"WebServer","slug":"/WebServer/webServerObject","permalink":"/docs/pt/20/WebServer/webServerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"webServerObject","title":"Objeto Web Server"},"sidebar":"docs","previous":{"title":"Administra\xe7\xe3o","permalink":"/docs/pt/20/WebServer/webServerAdmin"},"next":{"title":"Desenvolvimento Web","permalink":"/docs/pt/20/WebServer/gettingStarted"}}'),d=n("785893"),t=n("250065");let o={id:"webServerObject",title:"Objeto Web Server"},i=void 0,c={},l=[{value:"Instanciar um objeto servidor Web",id:"instanciar-um-objeto-servidor-web",level:2},{value:"Fun\xe7\xf5es do servidor Web",id:"fun\xe7\xf5es-do-servidor-web",level:2},{value:"Propriedades do servidor web",id:"propriedades-do-servidor-web",level:2},{value:"\xc2mbito dos comandos 4D Web",id:"\xe2mbito-dos-comandos-4d-web",level:2}];function a(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component."}),"\n",(0,d.jsx)(r.p,{children:"For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"um servidor web para a aplica\xe7\xe3o local,"}),"\n",(0,d.jsx)(r.li,{children:"um servidor Web para o componente #1,"}),"\n",(0,d.jsx)(r.li,{children:"um servidor Web para o componente #2."}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project."}),"\n",(0,d.jsxs)(r.p,{children:["Each 4D web server, including the main application's web server, is exposed as a specific ",(0,d.jsx)(r.strong,{children:"object"})," of the ",(0,d.jsx)(r.code,{children:"4D. WebServer"})," class. Once instantiated, a web server object can be handled from the current application or from any component using a ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass",children:"large number of properties and functions"}),"."]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:["Os ",(0,d.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"comandos WEB"})," herdados da linguagem 4D s\xe3o compat\xedveis, mas n\xe3o \xe9 poss\xedvel selecionar o servidor Web ao qual eles se aplicam (veja abaixo)."]}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"Each web server (host application or component) can be used in its own separate context, including:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"On Web Authentication"})," and ",(0,d.jsx)(r.code,{children:"On Web Connection"})," database method calls"]}),"\n",(0,d.jsx)(r.li,{children:"o processamento das etiquetas 4D e das chamadas de m\xe9todos,"}),"\n",(0,d.jsx)(r.li,{children:"sess\xf5es Web e gest\xe3o do protocolo TLS."}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"This allows you to develop independant components and features that come with their own web interfaces."}),"\n",(0,d.jsx)(r.h2,{id:"instanciar-um-objeto-servidor-web",children:"Instanciar um objeto servidor Web"}),"\n",(0,d.jsx)(r.p,{children:"The web server object of the host application (default web server) is automatically loaded by 4D at startup. Assim, se escrever num projeto rec\xe9m-criado:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:"$nbSrv:=WEB Server list.length   \n//$nbSrv valor \xe9 1\n"})}),"\n",(0,d.jsxs)(r.p,{children:["To instantiate a web server object, call the ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#web-server",children:(0,d.jsx)(r.code,{children:"WEB Server"})})," command:"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:"    //create an object variable of the 4D. WebServer class\nvar webServer : 4D. WebServer \n    //call the web server from the current context\nwebServer:=WEB Server  \n\n    //equivalent to\nwebServer:=WEB Server(Web server database)\n"})}),"\n",(0,d.jsx)(r.p,{children:"Se a aplica\xe7\xe3o utilizar componentes e o usu\xe1rio pretender chamar:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"o servidor Web da aplica\xe7\xe3o host a partir de um componente ou"}),"\n",(0,d.jsx)(r.li,{children:"o servidor que recebeu o pedido (qualquer que seja o servidor),"}),"\n"]}),"\n",(0,d.jsx)(r.p,{children:"tamb\xe9m pode ser utilizado:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:"var webServer : 4D. WebServer \n    //call the host web server from a component  \nwebServer:=WEB Server(Web server host database)  \n    //call the target web server\nwebServer:=WEB Server(Web server receiving request)  \n"})}),"\n",(0,d.jsx)(r.h2,{id:"fun\xe7\xf5es-do-servidor-web",children:"Fun\xe7\xf5es do servidor Web"}),"\n",(0,d.jsxs)(r.p,{children:["A ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#web-server-object",children:"web server class object"})," contains the following functions:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Fun\xe7\xf5es"}),(0,d.jsx)(r.th,{children:"Par\xe2metro"}),(0,d.jsx)(r.th,{children:"Valor retornado"}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#start",children:(0,d.jsx)(r.code,{children:"start()"})})}),(0,d.jsx)(r.td,{children:"settings (objet)"}),(0,d.jsx)(r.td,{children:"status (objecto)"}),(0,d.jsx)(r.td,{children:"Inicia o servidor web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#start",children:(0,d.jsx)(r.code,{children:"stop()"})})}),(0,d.jsx)(r.td,{children:"-"}),(0,d.jsx)(r.td,{children:"-"}),(0,d.jsx)(r.td,{children:"P\xe1ra o servidor Web"})]})]})]}),"\n",(0,d.jsxs)(r.p,{children:["To start and stop a web server, just call the ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#start",children:(0,d.jsx)(r.code,{children:"start()"})})," and ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#stop",children:(0,d.jsx)(r.code,{children:"stop()"})})," functions of the web server object:"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:"var $status : Object\n    //to start a web server with default settings\n$status:=webServer.start()\n    //to start the web server with custom settings  \n    //$settings object contains web server properties\nwebServer.start($settings)\n\n    //to stop the web server\n$status:=webServer.stop()\n"})}),"\n",(0,d.jsx)(r.h2,{id:"propriedades-do-servidor-web",children:"Propriedades do servidor web"}),"\n",(0,d.jsxs)(r.p,{children:["A web server object contains ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#web-server-object",children:"various properties"})," which configure the web server."]}),"\n",(0,d.jsx)(r.p,{children:"Estas propriedades s\xe3o definidas:"}),"\n",(0,d.jsxs)(r.ol,{children:["\n",(0,d.jsxs)(r.li,{children:["using the ",(0,d.jsx)(r.code,{children:"settings"})," parameter of the ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#start",children:(0,d.jsx)(r.code,{children:".start()"})})," function (except for read-only properties, see below),"]}),"\n",(0,d.jsxs)(r.li,{children:["if not used, using the ",(0,d.jsx)(r.code,{children:"WEB SET OPTION"})," command (host applications only),"]}),"\n",(0,d.jsx)(r.li,{children:"se n\xe3o for usado, nos par\xe2metros da aplica\xe7\xe3o host ou do componente."}),"\n"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"If the web server is not started, the properties contain the values that will be used at the next web server startup."}),"\n",(0,d.jsxs)(r.li,{children:["If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the ",(0,d.jsx)(r.code,{children:"settings"})," parameter of the ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#start",children:(0,d.jsx)(r.code,{children:".start()"})})," function."]}),"\n"]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:"isRunning"}),", ",(0,d.jsx)(r.em,{children:"name"}),", ",(0,d.jsx)(r.em,{children:"openSSLVersion"}),", and ",(0,d.jsx)(r.em,{children:"perfectForwardSecrecy"})," are read-only properties that cannot be predefined in the ",(0,d.jsx)(r.code,{children:"settings"})," object parameter for the ",(0,d.jsx)(r.a,{href:"/docs/pt/20/API/WebServerClass#start",children:(0,d.jsx)(r.code,{children:"start()"})})," function."]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"\xe2mbito-dos-comandos-4d-web",children:"\xc2mbito dos comandos 4D Web"}),"\n",(0,d.jsxs)(r.p,{children:["A linguagem 4D cont\xe9m ",(0,d.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"v\xe1rios comandos"})," que podem ser usados para controlar o servidor Web. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Comando"}),(0,d.jsx)(r.th,{children:"\xc2mbito"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"SET DATABASE PARAMETER"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB CLOSE SESSION"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET BODY PART"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Get body part count"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Get Current Session ID"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET HTTP BODY"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET HTTP HEADER"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET OPTION"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Get server info"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET SESSION EXPIRATION"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Get session process count"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET STATISTICS"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB GET VARIABLES"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Is secured connection"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Is server running"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SEND BLOB"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SEND FILE"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SEND HTTP REDIRECT"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SEND RAW DATA"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SEND TEXT"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SET HOME PAGE"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SET HTTP HEADER"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SET OPTION"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB SET ROOT FOLDER"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB START SERVER"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB STOP SERVER"})}),(0,d.jsx)(r.td,{children:"Aplica\xe7\xe3o local de servidor Web"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"WEB Validate digest"})}),(0,d.jsx)(r.td,{children:"Servidor Web que recebeu o pedido"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return o}});var s=n(667294);let d={},t=s.createContext(d);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);