"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,b=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(b,i(i({ref:t},m),{},{components:a})):r.createElement(b,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},84296:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"preemptiveWeb",title:"Utilizar processos web preemptivos"},l=void 0,p={unversionedId:"WebServer/preemptiveWeb",id:"version-19/WebServer/preemptiveWeb",title:"Utilizar processos web preemptivos",description:"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/docs/pt/19/WebServer/preemptiveWeb",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"preemptiveWeb",title:"Utilizar processos web preemptivos"},sidebar:"docs",previous:{title:"Sess\xf5es usu\xe1rio",permalink:"/docs/pt/19/WebServer/sessions"},next:{title:"Come\xe7ando",permalink:"/docs/pt/19/REST/gettingStarted"}},s={},m=[{value:"Disponibilidade do modo preemptivo para os processos web",id:"disponibilidade-do-modo-preemptivo-para-os-processos-web",level:2},{value:"Writing thread-safe web server code",id:"writing-thread-safe-web-server-code",level:2},{value:"Thread-safety of 4D web code",id:"thread-safety-of-4d-web-code",level:2},{value:"Comandos 4D e m\xe9todos base",id:"comandos-4d-e-m\xe9todos-base",level:3},{value:"URLs do servidor Web",id:"urls-do-servidor-web",level:3},{value:"\xcdcone de processo web preemptivo",id:"\xedcone-de-processo-web-preemptivo",level:3}],d={toc:m};function c(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible."),(0,r.kt)("p",null,"For in-depth information on preemptive process in 4D, please refer to the ",(0,r.kt)("em",{parentName:"p"},"Preemptive 4D processes")," section in the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),(0,r.kt)("em",{parentName:"a"},"4D Language Reference")),"."),(0,r.kt)("h2",n({},{id:"disponibilidade-do-modo-preemptivo-para-os-processos-web"}),"Disponibilidade do modo preemptivo para os processos web"),(0,r.kt)("p",null,"The following table indicates whether the preemptive mode is used or is available, depending on the execution context:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"4D Server"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpreted, project (",(0,r.kt)("a",n({parentName:"th"},{href:"/docs/pt/19/Desktop/clientServer#using-4d-and-4d-server-on-the-same-machine"}),"client connected locally"),")"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpretado, projeto (nenhum cliente ligado localmente) ou bin\xe1rio"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Compilado"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preemptive"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preemptive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web Services"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Legacy REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"4D remoto/usu\xe1rio \xfanico"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interpretado"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Compilado"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"preemptive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Servidor Web Services"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Legacy REST"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"cooperativo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("em",{parentName:"td"},"par\xe2metro web"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REST Server: handles ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/REST/classFunctions"}),"ORDA data model class functions")),(0,r.kt)("li",{parentName:"ul"},"Web Server: handles ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/templates"}),"web templates"),", ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/httpRequests"}),"4DACTION and database methods")),(0,r.kt)("li",{parentName:"ul"},"Servidor de servi\xe7os Web: trata dos pedidos SOAP"),(0,r.kt)("li",{parentName:"ul"},"Legacy REST: direct requests to 4D methods (",(0,r.kt)("inlineCode",{parentName:"li"},"/rest/{table}/{methodName}"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"web setting"))," means that the preemptive mode depends on a setting value:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"when ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/sessions#enabling-sessions"}),(0,r.kt)("strong",{parentName:"a"},"Scalable sessions"))," option is selected, the ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/sessions#preemptive-mode"}),"preemptive mode is automatically used")," for web processes."),(0,r.kt)("li",{parentName:"ul"},"otherwise, the ",(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/webServerConfig#use-preemptive-processes"}),(0,r.kt)("strong",{parentName:"a"},"Use preemptive processes"))," option is taken into account."),(0,r.kt)("li",{parentName:"ul"},'regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see ',(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html"}),"Publishing a Web Service with 4D"),") or proxy client methods (see ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html"}),"Subscribing to a Web Service in 4D"),") and make sure they are confirmed thread-safe by the compiler.")))),(0,r.kt)("h2",n({},{id:"writing-thread-safe-web-server-code"}),"Writing thread-safe web server code"),(0,r.kt)("p",null,"All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the ",(0,r.kt)("strong",{parentName:"p"},"Use preemptive processes")," option is checked in the Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Todos os m\xe9todos bases relacionados com a Web:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/authentication#on-web-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/WebServer/httpRequests#on-web-connection"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Web Connection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"/docs/pt/19/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,r.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",n({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler_web"),' project method (regardless of its actual "Execution mode" property);')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basically any code processed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROCESS 4D TAGS")," command in the web context, for example through .shtml pages.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Any project method with the "Available through 4D tags and URLS (',(0,r.kt)("inlineCode",{parentName:"p"},"4DACTION"),', etc.)" attribute')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Triggers para as tabelas com o atributo "Expor como recurso REST"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",n({parentName:"p"},{href:"/docs/pt/19/REST/classFunctions"}),"ORDA data model class functions")," called via REST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Project methods with "REST Server" property checked (legacy REST calls)'))),(0,r.kt)("p",null,"For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the ",(0,r.kt)("em",{parentName:"p"},"Writing a thread-safe method")," paragraph in the ",(0,r.kt)("em",{parentName:"p"},"Processes")," chapter of the ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com"}),"4D Language Reference")," manual."),(0,r.kt)("h2",n({},{id:"thread-safety-of-4d-web-code"}),"Thread-safety of 4D web code"),(0,r.kt)("p",null,"Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode."),(0,r.kt)("h3",n({},{id:"comandos-4d-e-m\xe9todos-base"}),"Comandos 4D e m\xe9todos base"),(0,r.kt)("p",null,"All 4D web-related commands are thread-safe, ",(0,r.kt)("em",{parentName:"p"},"i.e."),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"todos os comandos do tema ",(0,r.kt)("em",{parentName:"li"},"Servidor Web"),","),(0,r.kt)("li",{parentName:"ul"},"todos os comandos do tema ",(0,r.kt)("em",{parentName:"li"},"Cliente HTTP"),".")),(0,r.kt)("p",null,"The web-related database methods are thread-safe and can be used in preemptive mode (see below): ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"...)."),(0,r.kt)("p",null,"Of course, the code executed by these methods must also be thread-safe."),(0,r.kt)("h3",n({},{id:"urls-do-servidor-web"}),"URLs do servidor Web"),(0,r.kt)("p",null,"The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4daction/")," (the called project method must also be thread-safe)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dcgi/")," (the called database methods must also be thread-safe)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dwebtest/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dblank/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dstats/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dhtmlstats/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dcacheclear/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"rest/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dimgfield/")," (generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," for web request on picture fields)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"4dimg/")," (generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," for web request on picture variables)")),(0,r.kt)("h3",n({},{id:"\xedcone-de-processo-web-preemptivo"}),"\xcdcone de processo web preemptivo"),(0,r.kt)("p",null,"Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipo de processo"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"\xcdcone"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"M\xe9todo web preventivo"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:a(42048).Z,width:"40",height:"32"}))))))}c.isMDXComponent=!0},42048:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);