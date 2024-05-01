"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80158],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,b=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},85490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});r(667294);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"webServerObject",title:"Web Server object"},i=void 0,d={unversionedId:"WebServer/webServerObject",id:"version-20-R4/WebServer/webServerObject",title:"Web Server object",description:"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/pt/20-R4/WebServer/webServerObject",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"webServerObject",title:"Web Server object"},sidebar:"docs",previous:{title:"Administration",permalink:"/docs/pt/20-R4/WebServer/webServerAdmin"},next:{title:"Web Development",permalink:"/docs/pt/20-R4/WebServer/gettingStarted"}},p={},s=[{value:"Instanciar um objeto servidor Web",id:"instanciar-um-objeto-servidor-web",level:2},{value:"Fun\xe7\xf5es do servidor Web",id:"fun\xe7\xf5es-do-servidor-web",level:2},{value:"Propriedades do servidor web",id:"propriedades-do-servidor-web",level:2},{value:"\xc2mbito dos comandos 4D Web",id:"\xe2mbito-dos-comandos-4d-web",level:2}],m={toc:s};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A 4D project can start and monitor a web server for the main (host) application as well as each hosted component."),(0,a.kt)("p",null,"For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"um servidor web para a aplica\xe7\xe3o local,"),(0,a.kt)("li",{parentName:"ul"},"um servidor Web para o componente #1,"),(0,a.kt)("li",{parentName:"ul"},"um servidor Web para o componente #2.")),(0,a.kt)("p",null,"Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project."),(0,a.kt)("p",null,"Each 4D web server, including the main application's web server, is exposed as a specific ",(0,a.kt)("strong",{parentName:"p"},"object")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"4D. WebServer")," class. Once instantiated, a web server object can be handled from the current application or from any component using a ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass"}),"large number of properties and functions"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Os ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"comandos WEB")," herdados da linguagem 4D s\xe3o compat\xedveis, mas n\xe3o \xe9 poss\xedvel selecionar o servidor Web ao qual eles se aplicam (veja abaixo).")),(0,a.kt)("p",null,"Each web server (host application or component) can be used in its own separate context, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method calls"),(0,a.kt)("li",{parentName:"ul"},"o processamento das etiquetas 4D e das chamadas de m\xe9todos,"),(0,a.kt)("li",{parentName:"ul"},"sess\xf5es Web e gest\xe3o do protocolo TLS.")),(0,a.kt)("p",null,"This allows you to develop independant components and features that come with their own web interfaces."),(0,a.kt)("h2",n({},{id:"instanciar-um-objeto-servidor-web"}),"Instanciar um objeto servidor Web"),(0,a.kt)("p",null,"The web server object of the host application (default web server) is automatically loaded by 4D at startup. Assim, se escrever num projeto rec\xe9m-criado:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$nbSrv:=WEB Server list.length   \n//$nbSrv valor \xe9 1\n")),(0,a.kt)("p",null,"To instantiate a web server object, call the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass#web-server"}),(0,a.kt)("inlineCode",{parentName:"a"},"WEB Server"))," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"    //create an object variable of the 4D. WebServer class\nvar webServer : 4D. WebServer \n    //call the web server from the current context\nwebServer:=WEB Server  \n\n    //equivalent to\nwebServer:=WEB Server(Web server database)\n")),(0,a.kt)("p",null,"Se a aplica\xe7\xe3o utilizar componentes e o usu\xe1rio pretender chamar:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"o servidor Web da aplica\xe7\xe3o host a partir de um componente ou"),(0,a.kt)("li",{parentName:"ul"},"o servidor que recebeu o pedido (qualquer que seja o servidor),")),(0,a.kt)("p",null,"tamb\xe9m pode ser utilizado:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var webServer : 4D. WebServer \n    //call the host web server from a component  \nwebServer:=WEB Server(Web server host database)  \n    //call the target web server\nwebServer:=WEB Server(Web server receiving request)  \n")),(0,a.kt)("h2",n({},{id:"fun\xe7\xf5es-do-servidor-web"}),"Fun\xe7\xf5es do servidor Web"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass#web-server-object"}),"web server class object")," contains the following functions:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Fun\xe7\xf5es"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Valor retornado"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/pt/20-R4/API/WebServerClass#start"}),(0,a.kt)("inlineCode",{parentName:"a"},"start()"))),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"settings (objet)"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"status (objecto)"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Inicia o servidor web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/pt/20-R4/API/WebServerClass#start"}),(0,a.kt)("inlineCode",{parentName:"a"},"stop()"))),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"P\xe1ra o servidor Web")))),(0,a.kt)("p",null,"To start and stop a web server, just call the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass#start"}),(0,a.kt)("inlineCode",{parentName:"a"},"start()"))," and ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass#stop"}),(0,a.kt)("inlineCode",{parentName:"a"},"stop()"))," functions of the web server object:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"var $status : Object\n    //to start a web server with default settings\n$status:=webServer.start()\n    //to start the web server with custom settings  \n    //$settings object contains web server properties\nwebServer.start($settings)\n\n    //to stop the web server\n$status:=webServer.stop()\n")),(0,a.kt)("h2",n({},{id:"propriedades-do-servidor-web"}),"Propriedades do servidor web"),(0,a.kt)("p",null,"A web server object contains ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass#web-server-object"}),"various properties")," which configure the web server."),(0,a.kt)("p",null,"Estas propriedades s\xe3o definidas:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"using the ",(0,a.kt)("inlineCode",{parentName:"li"},"settings")," parameter of the ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/pt/20-R4/API/WebServerClass#start"}),(0,a.kt)("inlineCode",{parentName:"a"},".start()"))," function (except for read-only properties, see below),"),(0,a.kt)("li",{parentName:"ol"},"if not used, using the ",(0,a.kt)("inlineCode",{parentName:"li"},"WEB SET OPTION")," command (host applications only),"),(0,a.kt)("li",{parentName:"ol"},"se n\xe3o for usado, nos par\xe2metros da aplica\xe7\xe3o host ou do componente.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the web server is not started, the properties contain the values that will be used at the next web server startup."),(0,a.kt)("li",{parentName:"ul"},"If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the ",(0,a.kt)("inlineCode",{parentName:"li"},"settings")," parameter of the ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/pt/20-R4/API/WebServerClass#start"}),(0,a.kt)("inlineCode",{parentName:"a"},".start()"))," function.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"isRunning"),", ",(0,a.kt)("em",{parentName:"p"},"name"),", ",(0,a.kt)("em",{parentName:"p"},"openSSLVersion"),", and ",(0,a.kt)("em",{parentName:"p"},"perfectForwardSecrecy")," are read-only properties that cannot be predefined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," object parameter for the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/20-R4/API/WebServerClass#start"}),(0,a.kt)("inlineCode",{parentName:"a"},"start()"))," function.")),(0,a.kt)("h2",n({},{id:"\xe2mbito-dos-comandos-4d-web"}),"\xc2mbito dos comandos 4D Web"),(0,a.kt)("p",null,"A linguagem 4D cont\xe9m ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html"}),"v\xe1rios comandos")," que podem ser usados para controlar o servidor Web. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Comando"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\xc2mbito"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"SET DATABASE PARAMETER")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB CLOSE SESSION")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET BODY PART")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Get body part count")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Get Current Session ID")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP BODY")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET HTTP HEADER")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET OPTION")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Get server info")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET SESSION EXPIRATION")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Get session process count")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET STATISTICS")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB GET VARIABLES")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Is secured connection")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Is server running")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SEND BLOB")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SEND FILE")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SEND HTTP REDIRECT")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SEND RAW DATA")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SEND TEXT")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SET HOME PAGE")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SET HTTP HEADER")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SET OPTION")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB SET ROOT FOLDER")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB START SERVER")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB STOP SERVER")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aplica\xe7\xe3o local de servidor Web")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"WEB Validate digest")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web que recebeu o pedido")))))}u.isMDXComponent=!0}}]);