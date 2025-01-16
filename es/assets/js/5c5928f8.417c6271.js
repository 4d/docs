"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45398"],{488733:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"WebServer/webServerObject","title":"Objeto servidor web","description":"Un proyecto 4D puede iniciar y monitorear un servidor web para la aplicaci\xf3n principal (host) as\xed como para cada componente alojado.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WebServer/webServerObject.md","sourceDirName":"WebServer","slug":"/WebServer/webServerObject","permalink":"/docs/es/20-R7/WebServer/webServerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"webServerObject","title":"Objeto servidor web"},"sidebar":"docs","previous":{"title":"Administraci\xf3n","permalink":"/docs/es/20-R7/WebServer/webServerAdmin"},"next":{"title":"Desarrollo web","permalink":"/docs/es/20-R7/WebServer/gettingStarted"}}'),s=r("785893"),d=r("250065");let c={id:"webServerObject",title:"Objeto servidor web"},l=void 0,o={},a=[{value:"Instanciar un objeto servidor web",id:"instanciar-un-objeto-servidor-web",level:2},{value:"Funciones del servidor web",id:"funciones-del-servidor-web",level:2},{value:"Propiedades del servidor web",id:"propiedades-del-servidor-web",level:2},{value:"Alcance de los comandos 4D Web",id:"alcance-de-los-comandos-4d-web",level:2}];function t(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Un proyecto 4D puede iniciar y monitorear un servidor web para la aplicaci\xf3n principal (host) as\xed como para cada componente alojado."}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, si ha instalado dos componentes en su aplicaci\xf3n principal, puede iniciar y supervisar hasta tres servidores web independientes desde su aplicaci\xf3n:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"un servidor web para la aplicaci\xf3n local,"}),"\n",(0,s.jsx)(n.li,{children:"un servidor web para el componente #1,"}),"\n",(0,s.jsx)(n.li,{children:"un servidor web para el componente #2."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Aparte de la memoria, no hay l\xedmite en el n\xfamero de componentes y por lo tanto, de servidores web, que se pueden adjuntar a un solo proyecto de aplicaci\xf3n 4D."}),"\n",(0,s.jsxs)(n.p,{children:["Cada servidor web 4D, incluido el servidor web de la aplicaci\xf3n principal, se expone como un ",(0,s.jsx)(n.strong,{children:"objeto"})," de la clase ",(0,s.jsx)(n.code,{children:"4D.WebServer"}),". Una vez instanciado, un objeto servidor web puede ser manejado desde la aplicaci\xf3n actual o desde cualquier componente utilizando un ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass",children:"gran n\xfamero de propiedades y funciones"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Los ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"comandos WEB"})," heredados del lenguaje 4D son soportados, pero no se puede seleccionar el servidor web al que se aplican (ver m\xe1s abajo)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cada servidor web (aplicaci\xf3n local o componente) puede ser utilizado en su propio contexto independiente, incluyendo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["las llamadas a los m\xe9todos base ",(0,s.jsx)(n.code,{children:"On Web Authentication"})," y ",(0,s.jsx)(n.code,{children:"On Web Connection"})]}),"\n",(0,s.jsx)(n.li,{children:"el procesamiento de las etiquetas 4D y las llamadas de m\xe9todos,"}),"\n",(0,s.jsx)(n.li,{children:"sesiones web y gesti\xf3n del protocolo TLS."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Esto le permite desarrollar componentes independientes y funcionalidades que vienen con sus propias interfaces web."}),"\n",(0,s.jsx)(n.h2,{id:"instanciar-un-objeto-servidor-web",children:"Instanciar un objeto servidor web"}),"\n",(0,s.jsx)(n.p,{children:"El objeto servidor web de la aplicaci\xf3n local (servidor web por defecto) es cargado autom\xe1ticamente por 4D en al inicio. Por lo tanto, si escribe en un proyecto reci\xe9n creado:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$nbSrv:=WEB Server list.length   \n//el valor de $nbSrv es 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To instantiate a web server object, call the ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-server",children:(0,s.jsx)(n.code,{children:"WEB Server"})})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//crear una variable objeto de la clase 4D.WebServer\nvar webServer : 4D.WebServer \n	//llamar al servidor web desde el contexto actual\nwebServer:=WEB Server  \n\n	//equivalente a\nwebServer:=WEB Server(Web server database)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Si la aplicaci\xf3n utiliza componentes y quiere llamar a:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"el servidor web de la aplicaci\xf3n local a partir de un componente o"}),"\n",(0,s.jsx)(n.li,{children:"el servidor que ha recibido la solicitud (sin importar el servidor),"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"tambi\xe9n se puede utilizar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var webServer : 4D.WebServer \n	//llamar al servidor web local desde un componente  \nwebServer:=WEB Server(Web server host database)  \n	//llamar al servidor web objetivo\nwebServer:=WEB Server(Web server receiving request)  \n"})}),"\n",(0,s.jsx)(n.h2,{id:"funciones-del-servidor-web",children:"Funciones del servidor web"}),"\n",(0,s.jsxs)(n.p,{children:["Un ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#web-server-object",children:"objeto de clase Web srver"})," contiene las siguientes funciones:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Funciones"}),(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Valor devuelto"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"start()"})})}),(0,s.jsx)(n.td,{children:"settings (objet)"}),(0,s.jsx)(n.td,{children:"status (objeto)"}),(0,s.jsx)(n.td,{children:"Iniciar el servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"stop()"})})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Detener el servidor Web"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Para iniciar y detener un servidor web, basta con llamar a las funciones ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"start()"})})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#stop",children:(0,s.jsx)(n.code,{children:"stop()"})})," del objeto servidor web:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $status : Object\n  	//para iniciar un servidor web con los par\xe1metros por defecto\n$status:=webServer.start()\n	//para iniciar el servidor web con los par\xe1metros personalizados  \n	//$settings object contains web server properties\nwebServer.start($settings)\n\n	//para detener el servidor web\n$status:=webServer.stop()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades-del-servidor-web",children:"Propiedades del servidor web"}),"\n",(0,s.jsxs)(n.p,{children:["Un objeto servidor web contiene ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#web-server-object",children:"varias propiedades"})," que configuran el servidor web."]}),"\n",(0,s.jsx)(n.p,{children:"Estas propiedades son definidas:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["utilizando el par\xe1metro ",(0,s.jsx)(n.code,{children:"settings"})," de la funci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:".start()"})})," (excepto para las propiedades de s\xf3lo lectura, ver m\xe1s abajo),"]}),"\n",(0,s.jsxs)(n.li,{children:["si no se utiliza, utilizando el comando ",(0,s.jsx)(n.code,{children:"WEB SET OPTION"})," (s\xf3lo aplicaciones locales),"]}),"\n",(0,s.jsx)(n.li,{children:"si no se utiliza, en los par\xe1metros de la aplicaci\xf3n local o del componente."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si el servidor web no se inicia, las propiedades contienen los valores que se utilizar\xe1n en el pr\xf3ximo inicio del servidor web."}),"\n",(0,s.jsxs)(n.li,{children:["Si se inicia el servidor web, las propiedades contienen los valores reales utilizados por el servidor web (la configuraci\xf3n predeterminada podr\xeda haber sido anulada por el par\xe1metro ",(0,s.jsx)(n.code,{children:"settings"})," de la funci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:".start()"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"isRunning"}),", ",(0,s.jsx)(n.em,{children:"name"}),", ",(0,s.jsx)(n.em,{children:"openSSLVersion"}),", y ",(0,s.jsx)(n.em,{children:"perfectForwardSecrecy"})," son propiedades de s\xf3lo lectura que no pueden predefinirse en el par\xe1metro del objeto ",(0,s.jsx)(n.code,{children:"settings"})," para la funci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"start()"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"alcance-de-los-comandos-4d-web",children:"Alcance de los comandos 4D Web"}),"\n",(0,s.jsxs)(n.p,{children:["El lenguaje 4D contiene ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html",children:"varios comandos"})," permitiendo controlar el servido Web. Sin embargo, estos comandos est\xe1n dise\xf1ados para trabajar con un \xfanico servidor web (por defecto). Cuando utilice estos comandos en el contexto de los objetos servidor web, aseg\xfarese de que su alcance es el adecuado."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Comando"}),(0,s.jsx)(n.th,{children:"Alcance"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB CLOSE SESSION"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET BODY PART"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get body part count"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get Current Session ID"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET OPTION"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get server info"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET SESSION EXPIRATION"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get session process count"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET STATISTICS"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Is secured connection"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Is server running"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND BLOB"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND FILE"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND HTTP REDIRECT"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND RAW DATA"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND TEXT"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET HOME PAGE"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET HTTP HEADER"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET OPTION"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET ROOT FOLDER"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB START SERVER"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB STOP SERVER"})}),(0,s.jsx)(n.td,{children:"Aplicaci\xf3n local del servidor web"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Validate digest"})}),(0,s.jsx)(n.td,{children:"Servidor web que ha recibido la petici\xf3n"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var i=r(667294);let s={},d=i.createContext(s);function c(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);