"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40283],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},709757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"httpRequests",title:"Procesamiento de peticiones HTTP"},i=void 0,s={unversionedId:"WebServer/httpRequests",id:"version-20-R5/WebServer/httpRequests",title:"Procesamiento de peticiones HTTP",description:"El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/WebServer/httpRequests.md",sourceDirName:"WebServer",slug:"/WebServer/httpRequests",permalink:"/docs/es/WebServer/httpRequests",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FhttpRequests.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"httpRequests",title:"Procesamiento de peticiones HTTP"},sidebar:"docs",previous:{title:"P\xe1ginas de plantillas",permalink:"/docs/es/WebServer/templates"},next:{title:"Permitir m\xe9todos proyecto",permalink:"/docs/es/WebServer/allowProject"}},d={},p=[{value:"On Web Connection",id:"on-web-connection",level:2},{value:"Llamadas a m\xe9todos base",id:"llamadas-a-m\xe9todos-base",level:3},{value:"Sintaxis",id:"sintaxis",level:3},{value:"$1 - Datos adicionales de la URL",id:"1---datos-adicionales-de-la-url",level:3},{value:"$2 - Encabezado y cuerpo de la petici\xf3n HTTP",id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http",level:3},{value:"$3 - Direcci\xf3n IP del cliente web",id:"3---direcci\xf3n-ip-del-cliente-web",level:3},{value:"$4 - Direcci\xf3n IP del servidor",id:"4---direcci\xf3n-ip-del-servidor",level:3},{value:"$5 y $6 - Nombre de usuario y contrase\xf1a",id:"5-y-6---nombre-de-usuario-y-contrase\xf1a",level:3},{value:"/4DACTION",id:"4daction",level:2},{value:"Ejemplo",id:"ejemplo",level:4},{value:"4DACCI\xd3N para publicar formularios",id:"4dacci\xf3n-para-publicar-formularios",level:3},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:"Obtener valores de las peticiones HTTP",id:"obtener-valores-de-las-peticiones-http",level:2},{value:"Otros comandos del servidor web",id:"otros-comandos-del-servidor-web",level:2},{value:"M\xe9todo proyecto COMPILER_WEB",id:"m\xe9todo-proyecto-compiler_web",level:2}],m={toc:p};function c(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection")," database method, a router for your web application,"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"/4DACTION")," URL to call server-side code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," para obtener valores de objetos HTML enviados al servidor"),(0,n.kt)("li",{parentName:"ul"},"otros comandos como ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP BODY"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP HEADER"),", o ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET BODY PART")," permiten personalizar el procesamiento de la petici\xf3n, incluyendo las cookies."),(0,n.kt)("li",{parentName:"ul"},"el m\xe9todo proyecto ",(0,n.kt)("em",{parentName:"li"},"COMPILER_WEB"),", para declarar sus variables.")),(0,n.kt)("h2",r({},{id:"on-web-connection"}),"On Web Connection"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method can be used as the entry point for the 4D Web server."),(0,n.kt)("h3",r({},{id:"llamadas-a-m\xe9todos-base"}),"Llamadas a m\xe9todos base"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection")," database method is automatically called when the server reveives any URL that is not a path to an existing page on the server. Se llama al m\xe9todo de la base de datos con la URL."),(0,n.kt)("p",null,'For example, the URL "',(0,n.kt)("em",{parentName:"p"},"a/b/c"),'" will call the database method, but "',(0,n.kt)("em",{parentName:"p"},"a/b/c.html"),'" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the ',(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#root-folder"}),"WebFolder"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The request should have previously been accepted by the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))," database method (if it exists) and the web server must be launched.")),(0,n.kt)("h3",r({},{id:"sintaxis"}),"Sintaxis"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Web Connection"),"( ",(0,n.kt)("em",{parentName:"p"},"$1")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$2")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$3")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$4")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$5")," : Text ; ",(0,n.kt)("em",{parentName:"p"},"$6")," : Text )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$1"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Encabezados HTTP + cuerpo HTTP (hasta un l\xedmite de 32 kb)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$3"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IP del cliente web (navegador)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Direcci\xf3n IP del servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$5"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre de usuario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"$6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Contrase\xf1a")))),(0,n.kt)("p",null,"Debe declarar estos par\xe1metros de la siguiente manera:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//On Web Connection database method\n \n C_TEXT($1;$2;$3;$4;$5;$6)\n \n//Code for the method\n")),(0,n.kt)("p",null,"Alternatively, you can use the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/parameters#named-parameters"}),"named parameters")," syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"// On Web Connection database method\n#DECLARE ($url : Text; $header : Text; \\\n  $BrowserIP : Text; $ServerIP : Text; \\\n  $user : Text; $password : Text)\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Calling a 4D command that displays an interface element (",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", etc.) is not allowed and ends the method processing.")),(0,n.kt)("h3",r({},{id:"1---datos-adicionales-de-la-url"}),"$1 - Datos adicionales de la URL"),(0,n.kt)("p",null,"El primer par\xe1metro ($1) es la URL introducida por los usuarios en el \xe1rea de direcciones de su navegador web, sin la direcci\xf3n local."),(0,n.kt)("p",null,"Utilicemos como ejemplo una conexi\xf3n de intranet. Supongamos que la direcci\xf3n IP de su m\xe1quina 4D Web Server es 123.4.567.89. La siguiente tabla muestra los valores de $1 en funci\xf3n de la URL introducida en el navegador web:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"URL introducida en el navegador web"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor del par\xe1metro $1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.4.567.89"}),"http://123.4.567.89")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89/Customers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"http://123.4.567.89/Customers/Add"}),"http://123.4.567.89/Customers/Add")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Customers/Add")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"123.4.567.89/Do_This/If_OK/Do_That"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"/Do_This/If_OK/Do_That")))),(0,n.kt)("p",null,'Tenga en cuenta que es libre de utilizar este par\xe1metro a su conveniencia. 4D simplemente ignora el valor pasado m\xe1s all\xe1 de la parte del host de la URL. For example, you can establish a convention where the value "',(0,n.kt)("em",{parentName:"p"},"/Customers/Add"),'" means \u201cgo directly to add a new record in the ',(0,n.kt)("inlineCode",{parentName:"p"},"[Customers]")," table.\u201d Al proporcionar a los usuarios de la web una lista de posibles valores y/o marcadores por defecto, puede dar accesos directos a diferentes partes de su aplicaci\xf3n. De este modo, los usuarios de la web pueden acceder r\xe1pidamente a los recursos de su sitio web sin tener que recorrer toda la ruta de navegaci\xf3n cada vez que realicen una nueva conexi\xf3n."),(0,n.kt)("h3",r({},{id:"2---encabezado-y-cuerpo-de-la-petici\xf3n-http"}),"$2 - Encabezado y cuerpo de la petici\xf3n HTTP"),(0,n.kt)("p",null,"El segundo par\xe1metro ($2) es el encabezado y el cuerpo de la petici\xf3n HTTP enviada por el navegador web. Note that this information is passed to your ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),' database method "as is". Su contenido variar\xe1 en funci\xf3n de la naturaleza del navegador web que intenta la conexi\xf3n.'),(0,n.kt)("p",null,"Si su aplicaci\xf3n utiliza esta informaci\xf3n, deber\xe1 analizar el encabezado y el cuerpo. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP HEADER")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET HTTP BODY")," commands."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Por razones de rendimiento, el tama\xf1o de los datos que pasan por el par\xe1metro $2 no debe superar los 32 KB. M\xe1s all\xe1 de este tama\xf1o, son truncados por el servidor HTTP de 4D.")),(0,n.kt)("h3",r({},{id:"3---direcci\xf3n-ip-del-cliente-web"}),"$3 - Direcci\xf3n IP del cliente web"),(0,n.kt)("p",null,"El par\xe1metro $3 recibe la direcci\xf3n IP de la m\xe1quina del navegador. Esta informaci\xf3n puede permitirle distinguir entre las conexiones a la intranet y a Internet."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D devuelve las direcciones IPv4 en un formato h\xedbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la direcci\xf3n IPv4 192.168.2.34. For more information, refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/WebServer/webServerConfig#about-ipv6-support"}),"IPv6 Support")," section.")),(0,n.kt)("h3",r({},{id:"4---direcci\xf3n-ip-del-servidor"}),"$4 - Direcci\xf3n IP del servidor"),(0,n.kt)("p",null,"El par\xe1metro $4 recibe la direcci\xf3n IP solicitada por el servidor web 4D. 4D permite el multi-homing, que permite utilizar m\xe1quinas con m\xe1s de una direcci\xf3n IP. For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"webServerConfig.html#ip-address-to-listen"}),"Configuration page"),"."),(0,n.kt)("h3",r({},{id:"5-y-6---nombre-de-usuario-y-contrase\xf1a"}),"$5 y $6 - Nombre de usuario y contrase\xf1a"),(0,n.kt)("p",null,"The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/WebServer/authentication"}),"authentication page"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si el nombre de usuario enviado por el navegador existe en 4D, el par\xe1metro $6 (la contrase\xf1a del usuario) no se devuelve por razones de seguridad.")),(0,n.kt)("h2",r({},{id:"4daction"}),"/4DACTION"),(0,n.kt)("p",null,"*","*","/4DACTION/","*","*",(0,n.kt)("em",{parentName:"p"},"MethodName"),(0,n.kt)("br",null),"\n","*","*","/4DACTION/","*","*",(0,n.kt)("em",{parentName:"p"},"MethodName/Param")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"MethodName"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del m\xe9todo de proyecto 4D a ejecutar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Param"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe1metro texto a pasar al m\xe9todo proyecto")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Usage:")," URL or Form action."),(0,n.kt)("p",null,"This URL allows you to call the ",(0,n.kt)("em",{parentName:"p"},"MethodName")," 4D project method with an optional ",(0,n.kt)("em",{parentName:"p"},"Param")," text parameter. The method will receive this parameter in ",(0,n.kt)("em",{parentName:"p"},"$1"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The 4D project method must have been ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/es/WebServer/allowProject"}),"allowed for web requests"),": the \u201cAvailable through 4D tags and URLs (4DACTION...)\u201d attribute value must have been checked in the properties of the method. Si no se comprueba el atributo, se rechaza la solicitud web."),(0,n.kt)("li",{parentName:"ul"},"When 4D receives a ",(0,n.kt)("inlineCode",{parentName:"li"},"/4DACTION/MethodName/Param")," request, the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication")," database method (if it exists) is called.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION/")," can be associated with a URL in a static Web page:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<A HREF="/4DACTION/MyMethod/hello">Do Something</A>\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"MyMethod"),' project method should generally return a "reply" (sending of an HTML page using ',(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND TEXT"),", etc.). Aseg\xfarese de que el tratamiento sea lo m\xe1s breve posible para no bloquear el navegador."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A method called by ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION")," must not call interface elements (",(0,n.kt)("inlineCode",{parentName:"p"},"DIALOG"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ALERT"),", etc.).")),(0,n.kt)("h4",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"This example describes the association of the ",(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION")," URL with an HTML picture object in order to dynamically display a picture in the page. Inserta las siguientes instrucciones en una p\xe1gina HTML est\xe1tica:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<IMG SRC="/4DACTION/getPhoto/smith">\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"getPhoto")," method is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'C_TEXT($1) // Este par\xe1metro debe declararse siempre\nvar $path : Text\nvar $PictVar : Picture\nvar $BlobVar : Blob\n\n //busca la imagen en la carpeta Im\xe1genes dentro de la carpeta Resources \n$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"\n\nREAD PICTURE FILE($path;$PictVar) //pone la imagen en la variable imagen\nPICTURE TO BLOB($PictVar;$BLOB;".png") //convierte la imagen en formato ".png". WEB SEND BLOB($BLOB;"image/png")\n')),(0,n.kt)("h3",r({},{id:"4dacci\xf3n-para-publicar-formularios"}),"4DACCI\xd3N para publicar formularios"),(0,n.kt)("p",null,'El servidor web de 4D tambi\xe9n le permite utilizar formularios "publicados", que son p\xe1ginas HTML est\xe1ticas que env\xedan datos al servidor web y recuperar f\xe1cilmente todos los valores. Se les debe asociar el tipo POST y la acci\xf3n del formulario debe empezar imperativamente por /4DACTION/MethodName.'),(0,n.kt)("p",null,"Un formulario puede ser enviado a trav\xe9s de dos m\xe9todos (ambos pueden ser utilizados con 4D):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"POST, normalmente utilizado para enviar datos al servidor web,"),(0,n.kt)("li",{parentName:"ul"},"GET, normalmente utilizado para solicitar datos del servidor web.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the Web server receives a posted form, it calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method (if it exists).")),(0,n.kt)("p",null,"In the called method, you must call the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command in order to ",(0,n.kt)("a",r({parentName:"p"},{href:"#getting-values-from-the-requests"}),"retrieve the names and values")," of all the fields included in an HTML page submitted to the server."),(0,n.kt)("p",null,"Ejemplo para definir la acci\xf3n de un formulario:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<FORM ACTION="/4DACTION/MethodName" METHOD=POST>\n')),(0,n.kt)("h4",r({},{id:"ejemplo-1"}),"Ejemplo"),(0,n.kt)("p",null,'En una aplicaci\xf3n web, nos gustar\xeda que los navegadores pudieran buscar entre los registros mediante una p\xe1gina HTML est\xe1tica. Esta p\xe1gina se llama "search.htm". La aplicaci\xf3n contiene otras p\xe1ginas est\xe1ticas que permiten, por ejemplo, mostrar el resultado de la b\xfasqueda ("results.htm"). The POST type has been associated to the page, as well as the ',(0,n.kt)("inlineCode",{parentName:"p"},"/4DACTION/SEARCH")," action."),(0,n.kt)("p",null,"Aqu\xed est\xe1 el c\xf3digo HTML que corresponde a esta p\xe1gina:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<form action="/4daction/processForm" method=POST>\n<input type=text name=vName value=""><br/>\n<input type=checkbox name=vExact value="Word">Whole word<br/>\n<input type=submit name=OK value="Search">\n</FORM>\n')),(0,n.kt)("p",null,'During data entry, type \u201cABCD\u201d in the data entry area, check the "Whole word" option and validate it by clicking the ',(0,n.kt)("strong",{parentName:"p"},"Search")," button. En la solicitud enviada al servidor web:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'vName="ABCD"\nvExact="Word"\nOK="Search"\n')),(0,n.kt)("p",null,"4D calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication")," database method (if it exists), then the ",(0,n.kt)("inlineCode",{parentName:"p"},"processForm")," project method is called, which is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' C_TEXT($1) //mandatory for compiled mode\n C_LONGINT($vName)\n C_TEXT(vName;vLIST)\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrVals;0)\n WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form\n $vName:=Find in array($arrNames;"vName")\n vName:=$arrVals{$vName}\n If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked\n    vName:=vName+"@"\n End if\n QUERY([Jockeys];[Jockeys]Name=vName)\n FIRST RECORD([Jockeys])\n While(Not(End selection([Jockeys])))\n    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"\n    NEXT RECORD([Jockeys])\n End while\n WEB SEND FILE("results.htm") //Send the list to the results.htm form\n  //which contains a reference to the variable vLIST,\n  //for example \x3c!--4DHTML vLIST--\x3e\n  //...\nEnd if\n')),(0,n.kt)("h2",r({},{id:"obtener-valores-de-las-peticiones-http"}),"Obtener valores de las peticiones HTTP"),(0,n.kt)("p",null,"El servidor web de 4D le permite recuperar datos enviados a trav\xe9s de peticiones POST o GET, utilizando formularios web o URLs."),(0,n.kt)("p",null,"Cuando el servidor web recibe una petici\xf3n con datos en el encabezado o en la URL, 4D puede recuperar los valores de cualquier objeto HTML que contenga. This principle can be implemented in the case of a Web form, sent for example using ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND FILE")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND BLOB"),", where the user enters or modifies values, then clicks on the validation button."),(0,n.kt)("p",null,"In this case, 4D can retrieve the values of the HTML objects found in the request using the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command. The ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command retrieves the values as text."),(0,n.kt)("p",null,"Considere el siguiente c\xf3digo fuente de la p\xe1gina HTML:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<html>\n<head>\n  <title>Welcome</title>\n  <script language="JavaScript">\x3c!--\nfunction GetBrowserInformation(formObj){\nformObj.vtNav_appName.value = navigator.appName\nformObj.vtNav_appVersion.value = navigator.appVersion\nformObj.vtNav_appCodeName.value = navigator.appCodeName\nformObj.vtNav_userAgent.value = navigator.userAgent\nreturn true\n}\nfunction LogOn(formObj){\nif(formObj.vtUserName.value!=""){\nreturn true\n} else {\nalert("Enter your name, then try again.")\nreturn false\n}\n}\n//--\x3e<\/script>\n</head>\n<body>\n<form action="/4DACTION/WWW_STD_FORM_POST" method="post"\n name="frmWelcome"\n onsubmit="return GetBrowserInformation(frmWelcome)">\n  <h1>Welcome to Spiders United</h1>\n  <p><b>Please enter your name:</b>\n  <input name="vtUserName" value="" size="30" type="text"></p>\n  <p> \n<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> \n<input name="vsbRegister" value="Register" type="submit">\n<input name="vsbInformation" value="Information" type="submit"></p>\n<p> \n<input name="vtNav_appName" value="" type="hidden"> \n<input name="vtNav_appVersion" value="" type="hidden"> \n<input name="vtNav_appCodeName" value="" type="hidden">\n<input name="vtNav_userAgent" value="" type="hidden"></p>\n</form>\n</body>\n</html>\n')),(0,n.kt)("p",null,"Cuando 4D env\xeda la p\xe1gina a un navegador web, tiene el siguiente aspecto:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(146155).Z,width:"446",height:"156"})),(0,n.kt)("p",null,"Las principales caracter\xedsticas de esta p\xe1gina son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It includes three ",(0,n.kt)("strong",{parentName:"li"},"Submit")," buttons: ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbLogOn"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbRegister")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"vsbInformation"),"."),(0,n.kt)("li",{parentName:"ul"},"When you click ",(0,n.kt)("strong",{parentName:"li"},"Log On"),", the submission of the form is first processed by the JavaScript function ",(0,n.kt)("inlineCode",{parentName:"li"},"LogOn"),". Si no se introduce ning\xfan nombre, el formulario ni siquiera se env\xeda a 4D, y se muestra una alerta de JavaScript."),(0,n.kt)("li",{parentName:"ul"},"The form has a POST 4D method as well as a Submit script (",(0,n.kt)("em",{parentName:"li"},"GetBrowserInformation"),") that copies the browser properties to the four hidden objects whose names starts with ",(0,n.kt)("em",{parentName:"li"},"vtNav_App"),".\nIt also includes the ",(0,n.kt)("inlineCode",{parentName:"li"},"vtUserName")," object.")),(0,n.kt)("p",null,"Let\u2019s examine the 4D method ",(0,n.kt)("inlineCode",{parentName:"p"},"WWW_STD_FORM_POST")," that is called when the user clicks on one of the buttons on the HTML form."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'  // Retrieval of value of variables\n ARRAY TEXT($arrNames;0)\n ARRAY TEXT($arrValues;0)\n WEB GET VARIABLES($arrNames;$arrValues)\n C_LONGINT($user)\n \n Case of\n \n  // The Log On button was clicked\n    :(Find in array($arrNames;"vsbLogOn")#-1)\n       $user :=Find in array($arrNames;"vtUserName")\n       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})\n       $0:=(Records in selection([WWW Users])>0)\n       If($0)\n          WWW POST EVENT("Log On";WWW Log information)\n  // The WWW POST EVENT method saves the information in a database table\n       Else\n \n          $0:=WWW Register\n  // The WWW Register method lets a new Web user register\n       End if\n \n  // The Register button was clicked\n    :(Find in array($arrNames;"vsbRegister")#-1)\n       $0:=WWW Register\n \n  // The Information button was clicked\n    :(Find in array($arrNames;"vsbInformation")#-1)\n       WEB SEND FILE("userinfos.html")\n End case\n')),(0,n.kt)("p",null,"Las funcionalidades de este m\xe9todo son:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The values of the variables ",(0,n.kt)("em",{parentName:"li"},"vtNav_appName"),", ",(0,n.kt)("em",{parentName:"li"},"vtNav_appVersion"),", ",(0,n.kt)("em",{parentName:"li"},"vtNav_appCodeName"),", and ",(0,n.kt)("em",{parentName:"li"},"vtNav_userAgent")," (bound to the HTML objects having the same names) are retrieved using the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," command from HTML objects created by the ",(0,n.kt)("em",{parentName:"li"},"GetBrowserInformation")," JavaScript script."),(0,n.kt)("li",{parentName:"ul"},"Out of the ",(0,n.kt)("em",{parentName:"li"},"vsbLogOn"),", ",(0,n.kt)("em",{parentName:"li"},"vsbRegister")," and ",(0,n.kt)("em",{parentName:"li"},"vsbInformation")," variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET VARIABLES")," command. Cuando el env\xedo se realiza mediante uno de estos botones, el navegador devuelve a 4D el valor del bot\xf3n presionado. Esto le indica qu\xe9 bot\xf3n se ha presionado.")),(0,n.kt)("p",null,"Tenga en cuenta que con HTML, todos los objetos son objetos de texto. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," command, and not the position of the element in the array as in 4D. ",(0,n.kt)("inlineCode",{parentName:"p"},"WEB GET VARIABLES")," always returns values of the Text type."),(0,n.kt)("h2",r({},{id:"otros-comandos-del-servidor-web"}),"Otros comandos del servidor web"),(0,n.kt)("p",null,"El servidor web de 4D ofrece varios comandos web de bajo nivel que le permiten desarrollar un procesamiento personalizado de las solicitudes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP BODY")," command returns the body as raw text, allowing any parsing you may need"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET HTTP HEADER")," command return the headers of the request. It is useful to handle custom cookies, for example (along with the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB SET HTTP HEADER")," command)."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB GET BODY PART")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WEB Get body part count")," commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.")),(0,n.kt)("p",null,"Estos comandos se resumen en el siguiente gr\xe1fico:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(804577).Z,width:"676",height:"374"})),(0,n.kt)("p",null,'El servidor web de 4D ahora soporta archivos cargados con codificaci\xf3n chunked desde cualquier cliente web. La codificaci\xf3n de transferencia en trozos es un mecanismo de transferencia de datos especificado en HTTP/1.1. Permite transferir datos en una serie de "trozos" (partes) sin conocer el tama\xf1o final de los datos. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using ',(0,n.kt)("inlineCode",{parentName:"p"},"WEB SEND RAW DATA"),")."),(0,n.kt)("h2",r({},{id:"m\xe9todo-proyecto-compiler_web"}),"M\xe9todo proyecto COMPILER_WEB"),(0,n.kt)("p",null,"El m\xe9todo COMPILER\\WEB, si existe, es llamado sistem\xe1ticamente cuando el servidor HTTP recibe una petici\xf3n din\xe1mica y llama al motor 4D. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in ",(0,n.kt)("a",r({parentName:"p"},{href:"#on-web-connection"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Connection")),". Este m\xe9todo est\xe1 destinado a contener directivas de digitaci\xf3n y/o inicializaci\xf3n de variables utilizadas durante los intercambios web. Es utilizado por el compilador cuando se compila la aplicaci\xf3n. El m\xe9todo COMPILER\\WEB es com\xfan a todos los formularios web. Por defecto, el m\xe9todo COMPILER_WEB no existe. Debe crearlo expl\xedcitamente."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Tambi\xe9n se llama al m\xe9todo proyecto COMPILER_WEB, si existe, para cada solicitud SOAP aceptada.")))}c.isMDXComponent=!0},804577:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/httpCommands-f0f40e81d3278591838e7c262365beb9.png"},146155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spiders-0e4915c8e3496e1dd10f0b15a4319274.png"}}]);