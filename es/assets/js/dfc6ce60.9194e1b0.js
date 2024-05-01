"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76332],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(b,s(s({ref:t},p),{},{components:r})):a.createElement(b,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},887631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(667294);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"webServer",slug:"overview",title:"Servidor Web"},i=void 0,l={unversionedId:"WebServer/webServer",id:"version-20-R5/WebServer/webServer",title:"Servidor Web",description:"4D en modo local y remoto y 4D Server incluyen un motor de servidor web (tambi\xe9n conocido como servidor http) que le permite dise\xf1ar y publicar poderosas aplicaciones web que pueden aprovechar al m\xe1ximo sus bases de datos 4D.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/WebServer/webServer.md",sourceDirName:"WebServer",slug:"/WebServer/overview",permalink:"/docs/es/WebServer/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServer.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"webServer",slug:"overview",title:"Servidor Web"},sidebar:"docs",previous:{title:"Web Applications",permalink:"/docs/es/category/web-applications"},next:{title:"Configuraci\xf3n",permalink:"/docs/es/WebServer/webServerConfig"}},c={},p=[{value:"F\xe1cil de supervisar",id:"f\xe1cil-de-supervisar",level:2},{value:"Listo para usar",id:"listo-para-usar",level:2},{value:"Seguridad",id:"seguridad",level:2},{value:"Sesiones usuario",id:"sesiones-usuario",level:2},{value:"Punto de acceso para las peticiones REST",id:"punto-de-acceso-para-las-peticiones-rest",level:2},{value:"Extensi\xf3n de los par\xe1metros",id:"extensi\xf3n-de-los-par\xe1metros",level:2},{value:"Plantillas y URLs",id:"plantillas-y-urls",level:2},{value:"M\xe9todos base dedicados",id:"m\xe9todos-base-dedicados",level:2}],d={toc:p};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D en modo local y remoto y 4D Server incluyen un motor de servidor web (tambi\xe9n conocido como servidor http) que le permite dise\xf1ar y publicar poderosas aplicaciones web que pueden aprovechar al m\xe1ximo sus bases de datos 4D."),(0,a.kt)("h2",n({},{id:"f\xe1cil-de-supervisar"}),"F\xe1cil de supervisar"),(0,a.kt)("p",null,"Puede iniciar o detener la publicaci\xf3n de la aplicaci\xf3n web en cualquier momento. Para ello, basta con seleccionar un comando del men\xfa o ejecutar una sola l\xednea de c\xf3digo."),(0,a.kt)("p",null,"Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/webServerAdmin#administration-urls"}),"special URLs"),"."),(0,a.kt)("h2",n({},{id:"listo-para-usar"}),"Listo para usar"),(0,a.kt)("p",null,"El servidor web 4D crea autom\xe1ticamente una carpeta ra\xedz y una p\xe1gina de inicio por defecto, disponibles inmediatamente."),(0,a.kt)("h2",n({},{id:"seguridad"}),"Seguridad"),(0,a.kt)("p",null,"La seguridad de los datos est\xe1 presente en todas las etapas de las implementaciones del servidor web 4D. Los niveles de seguridad son escalables y la configuraci\xf3n por defecto suele seleccionar las opciones m\xe1s seguras. La seguridad del servidor web 4D se basa en los elementos siguientes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Extended support of the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/Admin/tls"}),(0,a.kt)("strong",{parentName:"a"},"TLS Protocol (HTTPS)")),",")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Authentication"),": flexible and customizable ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/authentication"}),"authentication features")," based upon built-it settings as well as fallback database methods (",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/authentication#on-web-authentication"}),(0,a.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," for the web server and ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/configuration#using-the-on-rest-authentication-database-method"}),(0,a.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))," for the REST server),")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Control of exposed contents"),": only elements that you expose explicitely can be available from direct web or REST requests. Debe declarar:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/WebServer/templates#allowing-project-methods"}),"Project methods")," exposed through HTTP requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"ORDA functions")," exposed through REST requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",n({parentName:"li"},{href:"/docs/es/REST/configuration#exposing-tables-and-fields"}),"Tables and fields")," that you don't want to be available to REST requests."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sandboxing")," through the definition of a ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#root-folder"}),"HTML Root")," folder by default,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Control of server resource usage")," (e.g. ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#maximum-concurrent-web-processes"}),"maximum concurrent web processes")," option)."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For a general overview of 4D's security features, see the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),".")),(0,a.kt)("h2",n({},{id:"sesiones-usuario"}),"Sesiones usuario"),(0,a.kt)("p",null,"The 4D web server includes complete automatic features for easily managing ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/sessions"}),"web sessions")," (user sessions) based on cookies."),(0,a.kt)("h2",n({},{id:"punto-de-acceso-para-las-peticiones-rest"}),"Punto de acceso para las peticiones REST"),(0,a.kt)("p",null,"El servidor web 4D permite acceder a los datos almacenados en sus aplicaciones 4D a trav\xe9s de peticiones REST. Las peticiones REST ofrecen acceso directo a cualquier operaci\xf3n de la base de datos, como a\xf1adir, leer, editar, ordenar o buscar datos."),(0,a.kt)("p",null,"REST requests are detailed in the ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/REST/gettingStarted"}),"REST server")," section."),(0,a.kt)("h2",n({},{id:"extensi\xf3n-de-los-par\xe1metros"}),"Extensi\xf3n de los par\xe1metros"),(0,a.kt)("p",null,"The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the ",(0,a.kt)("inlineCode",{parentName:"p"},"webServer")," object properties or the ",(0,a.kt)("inlineCode",{parentName:"p"},"WEB SET OPTION")," command."),(0,a.kt)("h2",n({},{id:"plantillas-y-urls"}),"Plantillas y URLs"),(0,a.kt)("p",null,"El servidor web 4D soporta el acceso a los datos almacenados en sus aplicaciones 4D a trav\xe9s de p\xe1ginas de plantillas y URLs espec\xedficas."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Template pages contain ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/templates"}),"special tags")," that initiate web server processing at the time when they are sent to browsers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",n({parentName:"p"},{href:"/docs/es/WebServer/httpRequests"}),"specific URLs")," enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms."))),(0,a.kt)("h2",n({},{id:"m\xe9todos-base-dedicados"}),"M\xe9todos base dedicados"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"On REST Authentication")," database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request."))}u.isMDXComponent=!0}}]);