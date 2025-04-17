"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31568"],{415447:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"WebServer/webServer","title":"Servidor Web","description":"4D en modo local y remoto y 4D Server incluyen un motor de servidor web (tambi\xe9n conocido como servidor http) que le permite dise\xf1ar y publicar poderosas aplicaciones web que pueden aprovechar al m\xe1ximo sus bases de datos 4D.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/WebServer/webServer.md","sourceDirName":"WebServer","slug":"/WebServer/overview","permalink":"/docs/es/WebServer/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"webServer","slug":"overview","title":"Servidor Web"},"sidebar":"docs","previous":{"title":"Web Applications","permalink":"/docs/es/category/web-applications"},"next":{"title":"Configuraci\xf3n","permalink":"/docs/es/WebServer/webServerConfig"}}'),r=n("785893"),a=n("250065");let o={id:"webServer",slug:"overview",title:"Servidor Web"},d=void 0,l={},c=[{value:"F\xe1cil de supervisar",id:"f\xe1cil-de-supervisar",level:2},{value:"Listo para usar",id:"listo-para-usar",level:2},{value:"Seguridad",id:"seguridad",level:2},{value:"Sesiones usuario",id:"sesiones-usuario",level:2},{value:"Punto de acceso para las peticiones REST",id:"punto-de-acceso-para-las-peticiones-rest",level:2},{value:"Extensi\xf3n de los par\xe1metros",id:"extensi\xf3n-de-los-par\xe1metros",level:2},{value:"Plantillas y URLs",id:"plantillas-y-urls",level:2},{value:"M\xe9todos base dedicados",id:"m\xe9todos-base-dedicados",level:2}];function t(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"4D en modo local y remoto y 4D Server incluyen un motor de servidor web (tambi\xe9n conocido como servidor http) que le permite dise\xf1ar y publicar poderosas aplicaciones web que pueden aprovechar al m\xe1ximo sus bases de datos 4D."}),"\n",(0,r.jsx)(s.h2,{id:"f\xe1cil-de-supervisar",children:"F\xe1cil de supervisar"}),"\n",(0,r.jsx)(s.p,{children:"Puede iniciar o detener la publicaci\xf3n de la aplicaci\xf3n web en cualquier momento. Para ello, basta con seleccionar un comando del men\xfa o ejecutar una sola l\xednea de c\xf3digo."}),"\n",(0,r.jsxs)(s.p,{children:["Supervisar el servidor web 4D es f\xe1cil y se puede hacer utilizando la ventana de administraci\xf3n de 4D Server o a trav\xe9s de ",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/webServerAdmin#administration-urls",children:" URLs especiales"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"listo-para-usar",children:"Listo para usar"}),"\n",(0,r.jsx)(s.p,{children:"El servidor web 4D crea autom\xe1ticamente una carpeta ra\xedz y una p\xe1gina de inicio por defecto, disponibles inmediatamente."}),"\n",(0,r.jsx)(s.h2,{id:"seguridad",children:"Seguridad"}),"\n",(0,r.jsx)(s.p,{children:"La seguridad de los datos est\xe1 presente en todas las etapas de las implementaciones del servidor web 4D. Los niveles de seguridad son escalables y la configuraci\xf3n por defecto suele seleccionar las opciones m\xe1s seguras. La seguridad del servidor web 4D se basa en los elementos siguientes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Soporte extendido del ",(0,r.jsx)(s.a,{href:"/docs/es/Admin/tls",children:(0,r.jsx)(s.strong,{children:"Protocolo TLS (HTTPS)"})}),","]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Autenticaci\xf3n"}),": flexible y personalizable ",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/authentication",children:"funcionalidades de autenticaci\xf3n"})," basado en configuraciones creadas as\xed como en m\xe9todos base de reserva (",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/authentication#on-web-authentication",children:(0,r.jsx)(s.code,{children:"On Web Authentication"})})," para el servidor web y ",(0,r.jsx)(s.code,{children:"On REST Authentication"})," para el servidor REST),"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Control de los contenidos expuestos"}),": s\xf3lo los elementos que exponga expl\xedcitamente pueden estar disponibles desde peticiones web directaso peticiones REST. Debe declarar:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/es/WebServer/templates#accessing-4d-methods-via-the-web",children:"Los m\xe9todos proyecto"})," expuestos a trav\xe9s de peticiones HTTP"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/es/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Las funciones ORDA"})," expuestas a trav\xe9s de peticiones REST"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/es/REST/configuration#exposing-tables-and-fields",children:"Tablas y campos"})," que no quiere que est\xe9n disponibles para las peticiones REST."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Sandboxing"})," mediante la definici\xf3n de una ",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/webServerConfig#root-folder",children:"carpeta HTML ra\xedz"})," por defecto,"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Control del uso de los recursos del servidor"})," (por ejemplo, v\xeda la opci\xf3n ",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"m\xe1ximo de procesos web concurrentes"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,r.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"Gu\xeda de seguridad de 4D"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"sesiones-usuario",children:"Sesiones usuario"}),"\n",(0,r.jsxs)(s.p,{children:["El servidor web 4D incluye completas funcionalidades autom\xe1ticas para gestionar f\xe1cilmente las ",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/sessions",children:"sesiones web"})," (sesiones de usuario) basadas en cookies."]}),"\n",(0,r.jsx)(s.h2,{id:"punto-de-acceso-para-las-peticiones-rest",children:"Punto de acceso para las peticiones REST"}),"\n",(0,r.jsx)(s.p,{children:"El servidor web 4D permite acceder a los datos almacenados en sus aplicaciones 4D a trav\xe9s de peticiones REST. Las peticiones REST ofrecen acceso directo a cualquier operaci\xf3n de la base de datos, como a\xf1adir, leer, editar, ordenar o buscar datos."}),"\n",(0,r.jsxs)(s.p,{children:["Las peticiones REST se detallan en la secci\xf3n ",(0,r.jsx)(s.a,{href:"/docs/es/REST/gettingStarted",children:"Servidor REST"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"extensi\xf3n-de-los-par\xe1metros",children:"Extensi\xf3n de los par\xe1metros"}),"\n",(0,r.jsxs)(s.p,{children:["La configuraci\xf3n del servidor web 4D se define a trav\xe9s de un amplio conjunto de ajustes a nivel de aplicaci\xf3n que tambi\xe9n pueden personalizarse para la sesi\xf3n utilizando las propiedades del objeto ",(0,r.jsx)(s.code,{children:"webServer"})," o el comando ",(0,r.jsx)(s.code,{children:"WEB SET OPTION"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"plantillas-y-urls",children:"Plantillas y URLs"}),"\n",(0,r.jsx)(s.p,{children:"El servidor web 4D soporta el acceso a los datos almacenados en sus aplicaciones 4D a trav\xe9s de p\xe1ginas de plantillas y URLs espec\xedficas."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Las p\xe1ginas de plantillas contienen ",(0,r.jsx)(s.a,{href:"/docs/es/WebServer/templates",children:"etiquetas especiales"})," que inician el procesamiento del servidor web en el momento en que se env\xedan a los navegadores."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/WebServer/httpRequests",children:"Las URLs espec\xedficas"})," permiten llamar a 4D para ejecutar cualquier acci\xf3n; estas URLs tambi\xe9n pueden utilizarse como acciones de formulario para activar el procesamiento cuando el usuario publica formularios HTML."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"m\xe9todos-base-dedicados",children:"M\xe9todos base dedicados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"On Web Authentication"}),", ",(0,r.jsx)(s.code,{children:"On Web Connection"}),", as\xed como tambi\xe9n los m\xe9todos base",(0,r.jsx)(s.code,{children:"On REST Authentication"})," son los puntos de entrada de las peticiones en el servidor web; se pueden utilizar para evaluar y enrutar todo tipo de petici\xf3n."]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var i=n(667294);let r={},a=i.createContext(r);function o(e){let s=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);