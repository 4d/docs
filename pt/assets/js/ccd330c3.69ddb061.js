"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48042"],{638875:function(e,s,o){o.r(s),o.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>t,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"WebServer/webServer","title":"Servidor Web","description":"4D no modo local, 4D em modo remoto e 4D Server incluem um mecanismo de servidor web (tamb\xe9m conhecido como servidor http) que permite a voc\xea projetar e publicar poderosas aplica\xe7\xf5es web que podem aproveitar ao m\xe1ximo seus bancos de dados 4D.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/WebServer/webServer.md","sourceDirName":"WebServer","slug":"/WebServer/overview","permalink":"/docs/pt/WebServer/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"webServer","slug":"overview","title":"Servidor Web"},"sidebar":"docs","previous":{"title":"Web Applications","permalink":"/docs/pt/category/web-applications"},"next":{"title":"Configura\xe7\xe3o","permalink":"/docs/pt/WebServer/webServerConfig"}}'),r=o("785893"),a=o("250065");let i={id:"webServer",slug:"overview",title:"Servidor Web"},d=void 0,t={},c=[{value:"Monitoriza\xe7\xe3o f\xe1cil",id:"monitoriza\xe7\xe3o-f\xe1cil",level:2},{value:"Pronto a usar",id:"pronto-a-usar",level:2},{value:"Seguran\xe7a",id:"seguran\xe7a",level:2},{value:"Sess\xf5es Usu\xe1rio",id:"sess\xf5es-usu\xe1rio",level:2},{value:"Ponto de acesso para solicita\xe7\xf5es REST",id:"ponto-de-acesso-para-solicita\xe7\xf5es-rest",level:2},{value:"Extens\xe3o dos par\xe2metros",id:"extens\xe3o-dos-par\xe2metros",level:2},{value:"Modelos e URLs",id:"modelos-e-urls",level:2},{value:"M\xe9todos banco de dados dedicados",id:"m\xe9todos-banco-de-dados-dedicados",level:2}];function l(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"4D no modo local, 4D em modo remoto e 4D Server incluem um mecanismo de servidor web (tamb\xe9m conhecido como servidor http) que permite a voc\xea projetar e publicar poderosas aplica\xe7\xf5es web que podem aproveitar ao m\xe1ximo seus bancos de dados 4D."}),"\n",(0,r.jsx)(s.h2,{id:"monitoriza\xe7\xe3o-f\xe1cil",children:"Monitoriza\xe7\xe3o f\xe1cil"}),"\n",(0,r.jsx)(s.p,{children:"Voc\xea pode iniciar ou parar a publica\xe7\xe3o da aplica\xe7\xe3o web a qualquer momento. Para fazer isso, voc\xea s\xf3 precisa selecionar um comando de menu ou executar uma \xfanica linha de c\xf3digo."}),"\n",(0,r.jsxs)(s.p,{children:["Monitorar o servidor 4D \xe9 f\xe1cil e pode ser feito usando a janela de administra\xe7\xe3o do Servidor 4D ou atrav\xe9s de ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/webServerAdmin#administration-urls",children:"URLs especiais"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"pronto-a-usar",children:"Pronto a usar"}),"\n",(0,r.jsx)(s.p,{children:"O servidor 4D cria automaticamente uma pasta raiz padr\xe3o e uma p\xe1gina inicial padr\xe3o para uma disponibilidade instant\xe2nea."}),"\n",(0,r.jsx)(s.h2,{id:"seguran\xe7a",children:"Seguran\xe7a"}),"\n",(0,r.jsx)(s.p,{children:"A seguran\xe7a dos dados est\xe1 presente em todos os est\xe1gios das implementa\xe7\xf5es do servidor web 4D. Os n\xedveis de seguran\xe7a s\xe3o escalon\xe1veis e as configura\xe7\xf5es padr\xe3o geralmente selecionam as op\xe7\xf5es mais seguras. A seguran\xe7a do servidor web 4D \xe9 baseada nos seguintes elementos:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Suporte estendido do ",(0,r.jsx)(s.a,{href:"/docs/pt/Admin/tls",children:(0,r.jsx)(s.strong,{children:"Protocolo TLS (HTTPS)"})}),","]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Authentication"}),": flexible and customizable ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/authentication",children:"authentication features"})," based upon built-it settings as well as fallback database methods (",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(s.code,{children:"On Web Authentication"})})," for the web server and ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," for the REST server),"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Control de los contenidos expuestos"}),": s\xf3lo los elementos que exponga expl\xedcitamente pueden estar disponibles desde peticiones web directaso peticiones REST. \xc9 necess\xe1rio declarar:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/templates#accessing-4d-methods-via-the-web",children:"Los m\xe9todos proyecto"})," expuestos a trav\xe9s de peticiones HTTP"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Las funciones ORDA"})," expuestas a trav\xe9s de peticiones REST"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/REST/configuration#exposing-tables-and-fields",children:"Tablas y campos"})," que no quiere que est\xe9n disponibles para las peticiones REST."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Sandboxing"})," mediante la definici\xf3n de una ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/webServerConfig#root-folder",children:"carpeta HTML ra\xedz"})," por defecto,"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Control del uso de los recursos del servidor"})," (por ejemplo, v\xeda la opci\xf3n ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"m\xe1ximo de procesos web concurrentes"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Para obter uma vis\xe3o geral das funcionalidades de seguran\xe7a do 4D, consulte o ",(0,r.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"guia de seguran\xe7a do 4D"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"sess\xf5es-usu\xe1rio",children:"Sess\xf5es Usu\xe1rio"}),"\n",(0,r.jsxs)(s.p,{children:["El servidor web 4D incluye completas funcionalidades autom\xe1ticas para gestionar f\xe1cilmente las ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/sessions",children:"sesiones web"})," (sesiones de usuario) basadas en cookies."]}),"\n",(0,r.jsx)(s.h2,{id:"ponto-de-acesso-para-solicita\xe7\xf5es-rest",children:"Ponto de acesso para solicita\xe7\xf5es REST"}),"\n",(0,r.jsx)(s.p,{children:"O servidor web 4D permite acessar os dados armazenados em suas aplica\xe7\xf5es 4D atrav\xe9s de solicita\xe7\xf5es REST. Solicita\xe7\xf5es REST fornecem acesso direto a qualquer opera\xe7\xe3o de banco de dados, como adicionar, ler, editar, ordenar ou pesquisar dados."}),"\n",(0,r.jsxs)(s.p,{children:["Las peticiones REST se detallan en la secci\xf3n ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/gettingStarted",children:"Servidor REST"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"extens\xe3o-dos-par\xe2metros",children:"Extens\xe3o dos par\xe2metros"}),"\n",(0,r.jsxs)(s.p,{children:["La configuraci\xf3n del servidor web 4D se define a trav\xe9s de un amplio conjunto de ajustes a nivel de aplicaci\xf3n que tambi\xe9n pueden personalizarse para la sesi\xf3n utilizando las propiedades del objeto ",(0,r.jsx)(s.code,{children:"webServer"})," o el comando ",(0,r.jsx)(s.code,{children:"WEB SET OPTION"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"modelos-e-urls",children:"Modelos e URLs"}),"\n",(0,r.jsx)(s.p,{children:"O servidor web 4D suporta acesso a dados armazenados em suas aplica\xe7\xf5es 4D atrav\xe9s de p\xe1ginas de modelos e URLs espec\xedficas."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Las p\xe1ginas de plantillas contienen ",(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/templates",children:"etiquetas especiales"})," que inician el procesamiento del servidor web en el momento en que se env\xedan a los navegadores."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/WebServer/httpRequests",children:"Las URLs espec\xedficas"})," permiten llamar a 4D para ejecutar cualquier acci\xf3n; estas URLs tambi\xe9n pueden utilizarse como acciones de formulario para activar el procesamiento cuando el usuario publica formularios HTML."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"m\xe9todos-banco-de-dados-dedicados",children:"M\xe9todos banco de dados dedicados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(s.code,{children:"On Web Connection"}),", as\xed como tambi\xe9n los m\xe9todos base",(0,r.jsx)(s.code,{children:"On REST Authentication"})," son los puntos de entrada de las peticiones en el servidor web; se pueden utilizar para evaluar y enrutar todo tipo de petici\xf3n."]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return d},a:function(){return i}});var n=o(667294);let r={},a=n.createContext(r);function i(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);