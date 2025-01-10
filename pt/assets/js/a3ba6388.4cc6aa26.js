"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77289"],{395505:function(e,s,o){o.r(s),o.d(s,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"WebServer/webServer","title":"Servidor Web","description":"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/WebServer/webServer.md","sourceDirName":"WebServer","slug":"/WebServer/overview","permalink":"/docs/pt/20/WebServer/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"webServer","slug":"overview","title":"Servidor Web"},"sidebar":"docs","previous":{"title":"Web Applications","permalink":"/docs/pt/20/category/web-applications"},"next":{"title":"Configura\xe7\xe3o","permalink":"/docs/pt/20/WebServer/webServerConfig"}}'),n=o("785893"),t=o("250065");let a={id:"webServer",slug:"overview",title:"Servidor Web"},i=void 0,d={},l=[{value:"Monitoriza\xe7\xe3o f\xe1cil",id:"monitoriza\xe7\xe3o-f\xe1cil",level:2},{value:"Pronto a usar",id:"pronto-a-usar",level:2},{value:"Seguran\xe7a",id:"seguran\xe7a",level:2},{value:"Sess\xf5es Usu\xe1rio",id:"sess\xf5es-usu\xe1rio",level:2},{value:"Ponto de acesso para solicita\xe7\xf5es REST",id:"ponto-de-acesso-para-solicita\xe7\xf5es-rest",level:2},{value:"Extens\xe3o dos par\xe2metros",id:"extens\xe3o-dos-par\xe2metros",level:2},{value:"Modelos e URLs",id:"modelos-e-urls",level:2},{value:"M\xe9todos banco de dados dedicados",id:"m\xe9todos-banco-de-dados-dedicados",level:2}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases."}),"\n",(0,n.jsx)(s.h2,{id:"monitoriza\xe7\xe3o-f\xe1cil",children:"Monitoriza\xe7\xe3o f\xe1cil"}),"\n",(0,n.jsx)(s.p,{children:"Voc\xea pode iniciar ou parar a publica\xe7\xe3o da aplica\xe7\xe3o web a qualquer momento. To do so, you just need to select a menu command or execute a single line of code."}),"\n",(0,n.jsxs)(s.p,{children:["Monitorar o servidor 4D \xe9 f\xe1cil e pode ser feito usando a janela de administra\xe7\xe3o do Servidor 4D ou atrav\xe9s de ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerAdmin#administration-urls",children:"URLs especiais"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"pronto-a-usar",children:"Pronto a usar"}),"\n",(0,n.jsx)(s.p,{children:"The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability."}),"\n",(0,n.jsx)(s.h2,{id:"seguran\xe7a",children:"Seguran\xe7a"}),"\n",(0,n.jsx)(s.p,{children:"A seguran\xe7a dos dados est\xe1 presente em todos os est\xe1gios das implementa\xe7\xf5es do servidor web 4D. Security levels are scalable and default settings usually select the most secure options. A seguran\xe7a do servidor web 4D \xe9 baseada nos seguintes elementos:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Extended support of the ",(0,n.jsx)(s.a,{href:"/docs/pt/20/Admin/tls",children:(0,n.jsx)(s.strong,{children:"TLS Protocol (HTTPS)"})}),","]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Autentica\xe7\xe3o"}),": recursos de autentica\xe7\xe3o ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/authentication",children:"flex\xedveis e personaliz\xe1veis"})," com base em configura\xe7\xf5es built-it bem como m\xe9todos de banco de dados (",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/authentication#on-web-authentication",children:(0,n.jsx)(s.code,{children:"On Web Authentication"})})," para o servidor web e ",(0,n.jsx)(s.a,{href:"/docs/pt/20/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,n.jsx)(s.code,{children:"On REST Authentication"})})," para o servidor REST),"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Control of exposed contents"}),": only elements that you expose explicitely can be available from direct web or REST requests. \xc9 necess\xe1rio declarar:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/templates#allowing-project-methods",children:"M\xe9todos projeto"})," expostos por meio de solicita\xe7\xf5es HTTP"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/20/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"ORDA functions"})," exposed through REST requests"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/20/REST/configuration#exposing-tables-and-fields",children:"Tables and fields"})," that you don't want to be available to REST requests."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Sandboxing"})," atrav\xe9s da defini\xe7\xe3o de uma pasta ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#root-folder",children:"HTML raiz"})," por padr\xe3o"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Controle do uso de recursos do servidor"})," (por exemplo, op\xe7\xe3o de ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"processos da Web simult\xe2neos m\xe1ximos"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Para uma vis\xe3o geral das fun\xe7\xf5es de seguran\xe7a de 4D, consulte o ",(0,n.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"Guia de seguran\xe7a de 4D"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"sess\xf5es-usu\xe1rio",children:"Sess\xf5es Usu\xe1rio"}),"\n",(0,n.jsxs)(s.p,{children:["The 4D web server includes complete automatic features for easily managing ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"web sessions"})," (user sessions) based on cookies."]}),"\n",(0,n.jsx)(s.h2,{id:"ponto-de-acesso-para-solicita\xe7\xf5es-rest",children:"Ponto de acesso para solicita\xe7\xf5es REST"}),"\n",(0,n.jsx)(s.p,{children:"The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data."}),"\n",(0,n.jsxs)(s.p,{children:["REST requests are detailed in the ",(0,n.jsx)(s.a,{href:"/docs/pt/20/REST/gettingStarted",children:"REST server"})," section."]}),"\n",(0,n.jsx)(s.h2,{id:"extens\xe3o-dos-par\xe2metros",children:"Extens\xe3o dos par\xe2metros"}),"\n",(0,n.jsxs)(s.p,{children:["The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the ",(0,n.jsx)(s.code,{children:"webServer"})," object properties or the ",(0,n.jsx)(s.code,{children:"WEB SET OPTION"})," command."]}),"\n",(0,n.jsx)(s.h2,{id:"modelos-e-urls",children:"Modelos e URLs"}),"\n",(0,n.jsx)(s.p,{children:"The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Template pages contain ",(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/templates",children:"special tags"})," that initiate web server processing at the time when they are sent to browsers."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/20/WebServer/httpRequests",children:"URLs espec\xedficos"})," permitem que 4D seja chamado para executar qualquer a\xe7\xe3o; esses URLs tamb\xe9m podem ser usados como a\xe7\xf5es de formul\xe1rio para acionar o processamento quando o usu\xe1rio publica formul\xe1rios HTML."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"m\xe9todos-banco-de-dados-dedicados",children:"M\xe9todos banco de dados dedicados"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,n.jsx)(s.code,{children:"On Web Connection"}),", as well as ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request."]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return a}});var r=o(667294);let n={},t=r.createContext(n);function a(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);