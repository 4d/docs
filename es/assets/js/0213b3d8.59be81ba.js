"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30638:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={id:"SessionClass",title:"Session"},o=void 0,s={unversionedId:"API/SessionClass",id:"version-19-R8/API/SessionClass",title:"Session",description:"Los objetos Session son devueltos por el comando Session cuando se habilitan las sesiones escalables en su proyecto. El objeto Session es creado y mantenido autom\xe1ticamente por el servidor web 4D para controlar la sesi\xf3n de un cliente web (por ejemplo, un navegador). Este objeto proporciona al desarrollador web una interfaz para la sesi\xf3n de usuario, permitiendo gestionar privilegios, almacenar datos contextuales, compartir informaci\xf3n entre procesos y lanzar procesos preventivos relacionados con la sesi\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/docs/es/19-R8/API/SessionClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/docs/es/19-R8/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/docs/es/19-R8/API/SignalClass"}},p={},d=[{value:"Resumen",id:"resumen",level:3},{value:"Session",id:"session",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:".clearPrivileges()",id:"clearprivileges",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:".expirationDate",id:"expirationdate",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:"Ejemplo",id:"ejemplo-2",level:4},{value:".hasPrivilege()",id:"hasprivilege",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:"Ejemplo",id:"ejemplo-3",level:4},{value:".idleTimeout",id:"idletimeout",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:"Ejemplo",id:"ejemplo-4",level:4},{value:".isGuest()",id:"isguest",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:"Ejemplo",id:"ejemplo-5",level:4},{value:".setPrivileges()",id:"setprivileges",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:"Ejemplo",id:"ejemplo-6",level:4},{value:".storage",id:"storage",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4},{value:"Ejemplo",id:"ejemplo-7",level:4},{value:".userName",id:"username",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-8",level:4}],m={toc:d};function u(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",l({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Los objetos Session son devueltos por el comando ",(0,n.kt)("a",l({parentName:"p"},{href:"#session"}),(0,n.kt)("inlineCode",{parentName:"a"},"Session"))," cuando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/WebServer/sessions#enabling-sessions"}),"se habilitan las sesiones escalables en su proyecto"),". El objeto Session es creado y mantenido autom\xe1ticamente por el servidor web 4D para controlar la sesi\xf3n de un cliente web (por ejemplo, un navegador). Este objeto proporciona al desarrollador web una interfaz para la sesi\xf3n de usuario, permitiendo gestionar privilegios, almacenar datos contextuales, compartir informaci\xf3n entre procesos y lanzar procesos preventivos relacionados con la sesi\xf3n."),(0,n.kt)("p",null,"Para obtener informaci\xf3n detallada sobre la implementaci\xf3n de la sesi\xf3n, consulte la secci\xf3n ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/WebServer/sessions"}),"Sesiones del servidor web"),"."),(0,n.kt)("h3",l({},{id:"resumen"}),"Resumen"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#clearprivileges"}),(0,n.kt)("strong",{parentName:"a"},".clearPrivileges()")),"\xa0","\xa0","\xa0","\xa0","elimina todos los privilegios asociados a la sesi\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#expirationdate"}),(0,n.kt)("strong",{parentName:"a"},".expirationDate")," : Text"),"\xa0","\xa0","\xa0","\xa0","la fecha y la hora de expiraci\xf3n de la cookie de sesi\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#hasprivilege"}),(0,n.kt)("strong",{parentName:"a"},".hasPrivilege"),"( ",(0,n.kt)("em",{parentName:"a"},"privilege")," : Text ) : Boolean"),"\xa0","\xa0","\xa0","\xa0","devuelve True si el privilegio est\xe1 asociado a la sesi\xf3n, y False en caso contrario")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#idletimeout"}),(0,n.kt)("strong",{parentName:"a"},".idleTimeout")," : Integer"),"\xa0","\xa0","\xa0","\xa0","el tiempo de inactividad de la sesi\xf3n (en minutos), despu\xe9s del cual la sesi\xf3n es cerrada autom\xe1ticamente por 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#isguest"}),(0,n.kt)("strong",{parentName:"a"},".isGuest()")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","devuelve True si la sesi\xf3n es una sesi\xf3n de invitado (es decir, no tiene privilegios)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#setprivileges"}),(0,n.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"a"},"privilege")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"a"},"privileges")," : Collection )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"a"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"a"},"settings")," : Object )"),"\xa0","\xa0","\xa0","\xa0","asocia a la sesi\xf3n los privilegios y/o roles definidos en el par\xe1metro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#storage"}),(0,n.kt)("strong",{parentName:"a"},".storage")," : Object"),"\xa0","\xa0","\xa0","\xa0","un objeto compartido que puede utilizarse para almacenar la informaci\xf3n disponible para todas las peticiones del cliente web")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"#username"}),(0,n.kt)("strong",{parentName:"a"},".userName")," : Text"),"\xa0","\xa0","\xa0","\xa0","el nombre de usuario asociado a la sesi\xf3n")))),(0,n.kt)("h2",l({},{id:"session"}),"Session"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Session")," : 4D.Session"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"})),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"4D.Session"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Objeto Session")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",l({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," devuelve el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," correspondiente a la sesi\xf3n web usuario extensible actual."),(0,n.kt)("p",null,"Este comando s\xf3lo funciona cuando ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/WebServer/sessions#enabling-sessions"}),"est\xe1n activadas las sesiones escalables"),". Devuelve ",(0,n.kt)("em",{parentName:"p"},"Null")," cuando las sesiones est\xe1n deshabilitadas o cuando se utilizan sesiones heredadas."),(0,n.kt)("p",null,"Cuando se habilitan las sesiones escalables, el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Session")," est\xe1 disponible desde cualquier proceso web en los siguientes contextos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"M\xe9todos base ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Authentication"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"On Web Connection"),", y ",(0,n.kt)("inlineCode",{parentName:"li"},"On REST Authentication"),","),(0,n.kt)("li",{parentName:"ul"},"M\xe9todos base ",(0,n.kt)("a",l({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," y ",(0,n.kt)("a",l({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile App Action"))," para las peticiones m\xf3viles,"),(0,n.kt)("li",{parentName:"ul"},"Las ",(0,n.kt)("a",l({parentName:"li"},{href:"/docs/es/19-R8/ORDA/ordaClasses"}),"funciones Data Model Class")," ORDA llamadas por las peticiones REST,"),(0,n.kt)("li",{parentName:"ul"},"c\xf3digo procesado a trav\xe9s de las etiquetas 4D en las p\xe1ginas semidin\xe1micas (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)"),(0,n.kt)("li",{parentName:"ul"},'los m\xe9todos proyecto con el atributo "Available through 4D tags and URLs (4DACTION...)" y llamados a trav\xe9s de 4DACTION/ urls.')),(0,n.kt)("h4",l({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"Ha definido el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"action_Session"),' con el atributo "Available through 4D tags and URLs". Se llama al m\xe9todo introduciendo la siguiente URL en el navegador:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"IP:port/4DACTION/action_Session\n")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'  //m\xe9todo action_Session\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) //llamada de la funci\xf3n hasPrivilege\n          WEB SEND TEXT("4DACTION --\x3e Session is WebAdmin")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e Session is not WebAdmin")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e Sesion is null")\n End case\n')),(0,n.kt)("h2",l({},{id:"clearprivileges"}),".clearPrivileges()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".clearPrivileges()")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"})),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"No requiere ning\xfan par\xe1metro")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".clearPrivileges()")," elimina todos los privilegios asociados a la sesi\xf3n. Como resultado, la sesi\xf3n se convierte autom\xe1ticamente en una sesi\xf3n de invitado."),(0,n.kt)("h4",l({},{id:"ejemplo-1"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"//Invalidar una sesi\xf3n\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest es True\n")),(0,n.kt)("h2",l({},{id:"expirationdate"}),".expirationDate"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".expirationDate")," : Text"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".expirationDate")," contiene la fecha y la hora de expiraci\xf3n de la cookie de sesi\xf3n. ."),(0,n.kt)("p",null,"Esta propiedad es ",(0,n.kt)("strong",{parentName:"p"},"de s\xf3lo lectura"),". Se vuelve a calcular autom\xe1ticamente si se modifica el valor de la propiedad ",(0,n.kt)("a",l({parentName:"p"},{href:"#idletimeout"}),(0,n.kt)("inlineCode",{parentName:"a"},".idleTimeout")),"."),(0,n.kt)("h4",l({},{id:"ejemplo-2"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $expiration : Text\n$expiration:=Session.expirationDate //eg "2021-11-05T17:10:42Z"\n')),(0,n.kt)("h2",l({},{id:"hasprivilege"}),".hasPrivilege()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".hasPrivilege"),"( ",(0,n.kt)("em",{parentName:"p"},"privilege")," : Text ) : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"})),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"privilege"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre del privilegio a verificar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la sesi\xf3n tiene ",(0,n.kt)("em",{parentName:"td"},"privilege"),", False en caso contrario")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".hasPrivilege()")," devuelve True si el privilegio est\xe1 asociado a la sesi\xf3n, y False en caso contrario."),(0,n.kt)("h4",l({},{id:"ejemplo-3"}),"Ejemplo"),(0,n.kt)("p",null,'Quiere comprobar si el privilegio "WebAdmin" est\xe1 asociado a la sesi\xf3n:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'If (Session.hasPrivilege("WebAdmin"))\n    //El acceso est\xe1 concedido, no haga nada\nElse\n    //Mostrar una p\xe1gina de autenticaci\xf3n\n\nEnd if\n')),(0,n.kt)("h2",l({},{id:"idletimeout"}),".idleTimeout"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".idleTimeout")," : Integer"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".idleTimeout")," contiene el tiempo de inactividad de la sesi\xf3n (en minutos), despu\xe9s del cual la sesi\xf3n es cerrada autom\xe1ticamente por 4D."),(0,n.kt)("p",null,"Si no se define esta propiedad, el valor por defecto es 60 (1h)."),(0,n.kt)("p",null,"Cuando se define esta propiedad, la propiedad ",(0,n.kt)("a",l({parentName:"p"},{href:"#expirationdate"}),(0,n.kt)("inlineCode",{parentName:"a"},".expirationDate"))," se actualiza en consecuencia."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El valor no puede ser inferior a 60: si se define un valor inferior, el tiempo de espera se eleva hasta 60.")),(0,n.kt)("p",null,"Esta propiedad es ",(0,n.kt)("strong",{parentName:"p"},"de s\xf3lo escritura"),"."),(0,n.kt)("h4",l({},{id:"ejemplo-4"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n        // Una sesi\xf3n de invitado se cerrar\xe1 tras 60 minutos de inactividad\n    Session.idleTimeout:=60\nElse\n        // Las dem\xe1s sesiones se cerrar\xe1n tras 120 minutos de inactividad\n    Session.idleTimeout:=120\nEnd if\n\n")),(0,n.kt)("h2",l({},{id:"isguest"}),".isGuest()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".isGuest()")," : Boolean"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"})),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la sesi\xf3n es una sesi\xf3n Guest, False en caso contrario")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-5"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".isGuest()")," devuelve True si la sesi\xf3n es una sesi\xf3n de invitado (es decir, no tiene privilegios)."),(0,n.kt)("h4",l({},{id:"ejemplo-5"}),"Ejemplo"),(0,n.kt)("p",null,"En el m\xe9todo base ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),"If (Session.isGuest())\n    //Hacer algo para el usuario invitado\nEnd if\n")),(0,n.kt)("h2",l({},{id:"setprivileges"}),".setPrivileges()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v19 R8"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'Compatibilidad con la propiedad "roles" en Settings')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"p"},"privilege")," : Text )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"p"},"privileges")," : Collection )",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},".setPrivileges"),"( ",(0,n.kt)("em",{parentName:"p"},"settings")," : Object )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"})),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"privilege"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre del privilegio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Colecci\xf3n de nombres de privilegios")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"settings"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'Objeto con una propiedad "privilegios" (cadena o colecci\xf3n)')))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-6"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".setPrivileges()")," asocia a la sesi\xf3n los privilegios y/o roles definidos en el par\xe1metro."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"En el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"privilege"),", pase una cadena que contenga un nombre de privilegio (o varios nombres de privilegio separados por comas).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"En el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"privileges"),", pase una colecci\xf3n de cadenas que contengan nombres de privilegios.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"En el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"settings"),", pase un objeto que contenga las siguientes propiedades:"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Propiedad"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"privileges"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text o Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"Cadena que contiene un nombre de privilegio, o"),(0,n.kt)("li",null,"Colecci\xf3n de cadenas que contienen nombres de privilegios"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text o Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("li",null,"Cadena que contiene un nombre de rol, o"),(0,n.kt)("li",null,"Colecci\xf3n de cadenas que contienen nombres de roles"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"userName"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre de usuario para asociar a la sesi\xf3n (opcional)")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"Los privilegios y los roles se definen en el archivo ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/ORDA/privileges#rolesjson-file"}),(0,n.kt)("inlineCode",{parentName:"a"},"roles.json"))," del proyecto. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/ORDA/privileges"}),(0,n.kt)("strong",{parentName:"a"},"Privilegios")),"."),(0,n.kt)("p",null,":::"),(0,n.kt)("p",null,"Si la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"privileges")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"roles")," contiene un nombre que no est\xe1 declarado en el archivo ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/19-R8/ORDA/privileges#rolesjson-file"}),(0,n.kt)("inlineCode",{parentName:"a"},"roles.json")),", se ignora."),(0,n.kt)("p",null,"Por defecto, cuando no hay ning\xfan privilegio o rol asociado a la sesi\xf3n, la sesi\xf3n es una ",(0,n.kt)("a",l({parentName:"p"},{href:"#isguest"}),"sesi\xf3n invitado"),"."),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("a",l({parentName:"p"},{href:"#username"}),(0,n.kt)("inlineCode",{parentName:"a"},"userName"))," est\xe1 disponible a nivel de objeto de sesi\xf3n (s\xf3lo lectura)."),(0,n.kt)("h4",l({},{id:"ejemplo-6"}),"Ejemplo"),(0,n.kt)("p",null,'En un m\xe9todo de autenticaci\xf3n personalizado, se establece el privilegio "WebAdmin" para el usuario:'),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'var $userOK : Boolean\n\n... //Autenticar al usuario\n\nIf ($userOK) //El usuario ha sido aprobado\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n')),(0,n.kt)("h2",l({},{id:"storage"}),".storage"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".storage")," : Object"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-7"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".storage")," contiene un objeto compartido que puede utilizarse para almacenar la informaci\xf3n disponible para todas las peticiones del cliente web."),(0,n.kt)("p",null,"Cuando se crea un objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Session"),", la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".storage")," est\xe1 vac\xeda. Al ser un objeto compartido, esta propiedad estar\xe1 disponible en el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," del servidor."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Al igual que el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," del servidor, la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".storage"),' es siempre "\xfanica": a\xf1adir un objeto compartido o una colecci\xf3n compartida a ',(0,n.kt)("inlineCode",{parentName:"p"},".storage")," no crea un grupo compartido.")),(0,n.kt)("p",null,"Esta propiedad es ",(0,n.kt)("strong",{parentName:"p"},"s\xf3lo lectura")," en s\xed misma pero devuelve un objeto de lectura-escritura."),(0,n.kt)("h4",l({},{id:"ejemplo-7"}),"Ejemplo"),(0,n.kt)("p",null,"Se desea almacenar la IP del cliente en la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".storage"),". Puede escribir en el m\xe9todo de base de datos ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'If (Session.storage.clientIP=Null) //first access\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use\nEnd if\n\n')),(0,n.kt)("h2",l({},{id:"username"}),".userName"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"v18 R6"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".userName")," : Text"),(0,n.kt)("h4",l({},{id:"descripci\xf3n-8"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".userName")," contiene el nombre de usuario asociado a la sesi\xf3n. Puede utilizarlo para identificar al usuario dentro de su c\xf3digo."),(0,n.kt)("p",null,"Esta propiedad es una cadena vac\xeda por defecto. Se puede establecer mediante la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"privileges")," de la funci\xf3n ",(0,n.kt)("a",l({parentName:"p"},{href:"#setprivileges"}),(0,n.kt)("inlineCode",{parentName:"a"},"setPrivileges()")),"."),(0,n.kt)("p",null,"Esta propiedad es",(0,n.kt)("strong",{parentName:"p"},"de s\xf3lo lectura"),"."))}u.isMDXComponent=!0}}]);