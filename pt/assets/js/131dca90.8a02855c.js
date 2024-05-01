"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40408],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(v,i(i({ref:t},p),{},{components:r})):o.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},431626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(667294);var o=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"http-server",title:"P\xe1gina Servidor HTTP"},s=void 0,l={unversionedId:"ServerWindow/http-server",id:"version-20-R5/ServerWindow/http-server",title:"P\xe1gina Servidor HTTP",description:"The HTTP Server page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publica\xe7\xe3o de servi\xe7os Web. Esses servidores dependem do servidor HTTP interno de 4D Server.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/http-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/http-server",permalink:"/docs/pt/ServerWindow/http-server",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"http-server",title:"P\xe1gina Servidor HTTP"},sidebar:"docs",previous:{title:"P\xe1gina servidor SQL",permalink:"/docs/pt/ServerWindow/sql-server"},next:{title:"P\xe1gina do monitor em tempo real",permalink:"/docs/pt/ServerWindow/real-time-monitor"}},c={},p=[{value:"Iniciar/parar o servidor HTTP",id:"iniciarparar-o-servidor-http",level:2},{value:"Informa\xe7\xe3o Web",id:"informa\xe7\xe3o-web",level:2},{value:"Informa\xe7\xe3o SOAP",id:"informa\xe7\xe3o-soap",level:2},{value:"Configura\xe7\xe3o servidor HTTP",id:"configura\xe7\xe3o-servidor-http",level:2}],d={toc:p};function u(e){var{components:t}=e,i=n(e,["components"]);return(0,o.kt)("wrapper",a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"HTTP Server")," page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. O servidor SOAP gere a publica\xe7\xe3o de servi\xe7os Web. Esses servidores dependem do servidor HTTP interno de 4D Server."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(183581).Z,width:"1036",height:"701"})),(0,o.kt)("p",null,"A parte superior da p\xe1gina fornece informa\xe7\xf5es sobre o estado atual do servidor HTTP do 4D Server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"State"),": Started or Stopped"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Starting time"),": Date and time the HTTP server was last launched."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Uptime"),": Time elapsed since last startup of the HTTP server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total HTTP hits"),": Number of (low level) HTTP hits received by the HTTP server since it was started.")),(0,o.kt)("h2",a({},{id:"iniciarparar-o-servidor-http"}),"Iniciar/parar o servidor HTTP"),(0,o.kt)("p",null,"Esse bot\xe3o alterna e pode ser usado para controlar a ativa\xe7\xe3o do servidor HTTP do 4D Server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'When the HTTP server state is "Started," the button is titled ',(0,o.kt)("strong",{parentName:"li"},"Stop HTTP Server"),". If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests."),(0,o.kt)("li",{parentName:"ul"},'When the HTTP server state is "Stopped," the button is titled ',(0,o.kt)("strong",{parentName:"li"},"Start HTTP Server"),". Se voc\xea clicar nesse bot\xe3o, o servidor HTTP de 4D Server ser\xe1 iniciado imediatamente; solicita\xe7\xf5es Web, REST e SOAP ser\xe3o aceitas.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Voc\xea deve ter uma licen\xe7a adequada para poder iniciar o servidor HTTP."),(0,o.kt)("p",{parentName:"blockquote"},"The HTTP server can also be launched automatically on application startup (Settings) or by programming.")),(0,o.kt)("h2",a({},{id:"informa\xe7\xe3o-web"}),"Informa\xe7\xe3o Web"),(0,o.kt)("p",null,"Esta \xe1rea fornece informa\xe7\xf5es espec\xedficas sobre o servidor Web de 4D Server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Web requests"),": Accepted or Rejected. Esta informa\xe7\xe3o indica se o servidor Web est\xe1 ativado. Como o servidor da Web est\xe1 diretamente vinculado ao servidor HTTP, as solicita\xe7\xf5es Web s\xe3o aceitas quando o servidor HTTP \xe9 iniciado e rejeitadas quando ele \xe9 interrompido."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum connections"),": Maximum number of Web connections allowed. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor.")),(0,o.kt)("h2",a({},{id:"informa\xe7\xe3o-soap"}),"Informa\xe7\xe3o SOAP"),(0,o.kt)("p",null,"This area provides specific information about the SOAP server of 4D Server and includes a control button."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SOAP requests"),": Accepted or Rejected. Esta informa\xe7\xe3o indica se o servidor SOAP est\xe1 ativado. Para que as solicita\xe7\xf5es SOAP sejam aceitas, o servidor HTTP deve ser iniciado e o servidor SOAP deve aceitar explicitamente as solicita\xe7\xf5es (consulte o bot\xe3o Aceitar/Rejeitar)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum connections"),": Maximum number of SOAP connections allowed. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accept/Reject SOAP requests")," button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the ",(0,o.kt)("strong",{parentName:"li"},"Allow Web Services Requests"),' option on the "Web Services" page of the Settings (and vice versa). You can also use the ',(0,o.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1636.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"SOAP REJECT NEW REQUESTS"))," command to refuse new SOAP requests, however this does not modify the value of the ",(0,o.kt)("strong",{parentName:"li"},"Allow Web Services Requests")," option.")),(0,o.kt)("p",null,"If you click on the ",(0,o.kt)("strong",{parentName:"p"},"Accept SOAP requests")," button and the HTTP server is stopped, 4D automatically starts it."),(0,o.kt)("h2",a({},{id:"configura\xe7\xe3o-servidor-http"}),"Configura\xe7\xe3o servidor HTTP"),(0,o.kt)("p",null,"This area provides information about the configuration parameters and operation of the HTTP server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auto-launched at startup"),": parameter set via the Settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTTP Server processes (used/total)"),": number of HTTP processes created on the server (current number of processes / total of all processes created)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cache memory"),": size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the ",(0,o.kt)("strong",{parentName:"li"},"Clear Cache")," button to empty the current cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Listening to IP"),", ",(0,o.kt)("strong",{parentName:"li"},"HTTP Port")," (80 by default), ",(0,o.kt)("strong",{parentName:"li"},"TLS enabled")," for HTTP connections (does not concern 4D nor SQL connections) and ",(0,o.kt)("strong",{parentName:"li"},"HTTPS Port")," used: current ",(0,o.kt)("a",a({parentName:"li"},{href:"/docs/pt/WebServer/webServerConfig"}),"configuration parameters")," of the HTTP server, specified through the Settings or by programming."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Log file information"),": name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).")))}u.isMDXComponent=!0},183581:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"}}]);