"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48751],{603905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>A});var s=n(667294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,s,i=function(e,a){if(null==e)return{};var n,s,i={},t=Object.keys(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),d=function(e){var a=s.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=d(e.components);return s.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),A=i,m=u["".concat(l,".").concat(A)]||u[A]||p[A]||t;return n?s.createElement(m,o(o({ref:a},c),{},{components:n})):s.createElement(m,o({ref:a},c))}));function A(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,o=new Array(t);o[0]=u;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<t;d++)o[d]=n[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10382:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(667294);var s=n(603905);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},i.apply(this,arguments)}function t(e,a){if(null==e)return{};var n,s,i=function(e,a){if(null==e)return{};var n,s,i={},t=Object.keys(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"sessions",title:"Sesiones usuario"},r=void 0,l={unversionedId:"WebServer/sessions",id:"version-20-R2/WebServer/sessions",title:"Sesiones usuario",description:"El servidor web de 4D ofrece funciones integradas para la gesti\xf3n de sesiones de usuario. La creaci\xf3n y el mantenimiento de sesiones de usuario le permiten controlar y mejorar la experiencia del usuario en su aplicaci\xf3n web. Cuando se activan las sesiones de usuario, los clientes web pueden reutilizar el mismo contexto de servidor de una solicitud a otra.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/WebServer/sessions.md",sourceDirName:"WebServer",slug:"/WebServer/sessions",permalink:"/docs/es/20-R2/WebServer/sessions",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fsessions.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"sessions",title:"Sesiones usuario"},sidebar:"docs",previous:{title:"Autenticaci\xf3n",permalink:"/docs/es/20-R2/WebServer/authentication"},next:{title:"Uso de procesos web apropiativos",permalink:"/docs/es/20-R2/WebServer/preemptiveWeb"}},d={},c=[{value:"Activaci\xf3n de sesiones",id:"activaci\xf3n-de-sesiones",level:2},{value:"Implementaci\xf3n de la sesi\xf3n",id:"implementaci\xf3n-de-la-sesi\xf3n",level:2},{value:"Compartir informaci\xf3n",id:"compartir-informaci\xf3n",level:2},{value:"Fecha de caducidad de la sesi\xf3n",id:"fecha-de-caducidad-de-la-sesi\xf3n",level:2},{value:"Privilegios",id:"privilegios",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],p={toc:c};function u(e){var{components:a}=e,o=t(e,["components"]);return(0,s.kt)("wrapper",i({},p,o,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"El servidor web de 4D ofrece funciones integradas para la gesti\xf3n de ",(0,s.kt)("strong",{parentName:"p"},"sesiones de usuario"),". La creaci\xf3n y el mantenimiento de sesiones de usuario le permiten controlar y mejorar la experiencia del usuario en su aplicaci\xf3n web. Cuando se activan las sesiones de usuario, los clientes web pueden reutilizar el mismo contexto de servidor de una solicitud a otra."),(0,s.kt)("p",null,"Las sesiones de usuario del servidor web permiten:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"manejar m\xfaltiples peticiones simult\xe1neamente desde el mismo cliente web a trav\xe9s de un n\xfamero ilimitado de procesos apropiativos (las sesiones del servidor web son ",(0,s.kt)("strong",{parentName:"li"},"escalables"),"),"),(0,s.kt)("li",{parentName:"ul"},"compartir datos entre los procesos de un cliente web,"),(0,s.kt)("li",{parentName:"ul"},"asociar privilegios a las sesiones de usuario,"),(0,s.kt)("li",{parentName:"ul"},"gestionan el acceso a trav\xe9s de un objeto ",(0,s.kt)("inlineCode",{parentName:"li"},"Session")," y de la ",(0,s.kt)("a",i({parentName:"li"},{href:"/docs/es/20-R2/API/SessionClass"}),"Session API"),".")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Nota:")," la implementaci\xf3n actual es s\xf3lo el primer paso de una pr\xf3xima funcionalidad completa que permitir\xe1 a los desarrolladores gestionar los permisos jer\xe1rquicos de los usuarios a trav\xe9s de las sesiones en toda la aplicaci\xf3n web.")),(0,s.kt)("h2",i({},{id:"activaci\xf3n-de-sesiones"}),"Activaci\xf3n de sesiones"),(0,s.kt)("p",null,"La funcionalidad de gesti\xf3n de sesiones puede ser activada y desactivada en su servidor web 4D. Hay diferentes maneras de habilitar la gesti\xf3n de la sesi\xf3n:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Utilizando la opci\xf3n ",(0,s.kt)("strong",{parentName:"li"},"Sesiones escalables"),' en la p\xe1gina "Web/Opciones (I)" de la Configuraci\xf3n (configuraci\xf3n permanente): ',(0,s.kt)("img",{alt:"alt-text",src:n(693557).Z,width:"821",height:"361"}))),(0,s.kt)("p",null,"Esta opci\xf3n est\xe1 seleccionada por defecto en los nuevos proyectos. Sin embargo, se puede desactivar seleccionando la opci\xf3n ",(0,s.kt)("strong",{parentName:"p"},"Sin sesiones"),", en cuyo caso las funcionalidades de la sesi\xf3n web se desactivan (no hay ning\xfan objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," disponible)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Utilizando la propiedad ",(0,s.kt)("a",i({parentName:"li"},{href:"/docs/es/20-R2/API/WebServerClass#scalablesession"}),(0,s.kt)("inlineCode",{parentName:"a"},".scalableSession"))," del objeto Web Server (para pasar el par\xe1metro ",(0,s.kt)("em",{parentName:"li"},"settings")," de la funci\xf3n ",(0,s.kt)("a",i({parentName:"li"},{href:"/docs/es/20-R2/API/WebServerClass#start"}),(0,s.kt)("inlineCode",{parentName:"a"},".start()")),"). En este caso, esta configuraci\xf3n anula la opci\xf3n definida en la caja de di\xe1logo Configuraci\xf3n del objeto Servidor Web (no se almacena en el disco).")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"El comando ",(0,s.kt)("inlineCode",{parentName:"p"},"WEB SET OPTION")," tambi\xe9n puede establecer el modo de sesi\xf3n para el servidor web principal.")),(0,s.kt)("p",null,"En cualquier caso, la configuraci\xf3n es local para la m\xe1quina; por lo que puede ser diferente en el servidor web de 4D Server y en los servidores web de las m\xe1quinas 4D remotas."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Compatibilidad"),": una opci\xf3n ",(0,s.kt)("strong",{parentName:"p"},"Sesiones legacy")," est\xe1 disponible en proyectos creados con una versi\xf3n de 4D anterior a 4D v18 R6 (para m\xe1s informaci\xf3n, consulte el sitio web ",(0,s.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com"}),"doc.4d.com"),").")),(0,s.kt)("h2",i({},{id:"implementaci\xf3n-de-la-sesi\xf3n"}),"Implementaci\xf3n de la sesi\xf3n"),(0,s.kt)("p",null,"Cuando ",(0,s.kt)("a",i({parentName:"p"},{href:"#enabling-sessions"}),"se habilitan las sesiones"),', se implementan mecanismos autom\xe1ticos, basados en una cookie privada establecida por el propio 4D: "4DSID_',(0,s.kt)("em",{parentName:"p"},"AppName"),'", donde ',(0,s.kt)("em",{parentName:"p"},"AppName")," es el nombre del proyecto de la aplicaci\xf3n. Esta cookie hace referencia a la sesi\xf3n web actual de la aplicaci\xf3n."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"El nombre de la cookie puede obtenerse utilizando la propiedad ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/WebServerClass#sessioncookiename"}),(0,s.kt)("inlineCode",{parentName:"a"},".sessionCookieName")),".")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'En cada petici\xf3n del cliente web, el servidor web comprueba la presencia y el valor de la cookie privada "4DSID_',(0,s.kt)("em",{parentName:"p"},"AppName"),'".')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Si la cookie tiene un valor, 4D busca la sesi\xf3n que cre\xf3 esta cookie entre las sesiones existentes; si se encuentra esta sesi\xf3n, se reutiliza para la llamada.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Si la solicitud del cliente no corresponde a una sesi\xf3n ya abierta:"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'se crea una nueva sesi\xf3n con una cookie privada "4DSID_',(0,s.kt)("em",{parentName:"li"},"AppName"),'" en el servidor web'),(0,s.kt)("li",{parentName:"ul"},"se crea un nuevo objeto Guest ",(0,s.kt)("inlineCode",{parentName:"li"},"Session")," dedicado a la sesi\xf3n web escalable.")),(0,s.kt)("p",null,"El objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," actual puede entonces ser accedido a trav\xe9s del comando ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#session"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session"))," en el c\xf3digo de cualquier proceso web."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:n(880946).Z,width:"642",height:"442"})),(0,s.kt)("p",null,"Los procesos web no suelen terminar, sino que se reciclan en un fondo com\xfan para ser m\xe1s eficientes. Cuando un proceso termina de ejecutar una petici\xf3n, se devuelve al pool y queda disponible para la siguiente petici\xf3n. Dado que un proceso web puede ser reutilizado por cualquier sesi\xf3n, ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/Concepts/variables#process-variables"}),"las variables de proceso")," deben ser borradas por su c\xf3digo al final de su ejecuci\xf3n (utilizando ",(0,s.kt)("a",i({parentName:"p"},{href:"https://doc.4d.com/4dv18/help/command/en/page89.html"}),(0,s.kt)("inlineCode",{parentName:"a"},"CLEAR VARIABLE"))," por ejemplo). Esta limpieza es necesaria para cualquier informaci\xf3n relacionada con el proceso, como una referencia a un archivo abierto. Esta es la raz\xf3n por la que ",(0,s.kt)("strong",{parentName:"p"},"se recomienda")," utilizar el objeto ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass"}),"Sesi\xf3n")," cuando se quiera guardar informaci\xf3n relacionada con la sesi\xf3n."),(0,s.kt)("h2",i({},{id:"compartir-informaci\xf3n"}),"Compartir informaci\xf3n"),(0,s.kt)("p",null,"Cada objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," ofrece una propiedad ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#storage"}),(0,s.kt)("inlineCode",{parentName:"a"},".storage"))," que es un ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/Concepts/shared"}),"objeto compartido"),". Esta propiedad permite compartir informaci\xf3n entre todos los procesos manejados por la sesi\xf3n."),(0,s.kt)("h2",i({},{id:"fecha-de-caducidad-de-la-sesi\xf3n"}),"Fecha de caducidad de la sesi\xf3n"),(0,s.kt)("p",null,"Una sesi\xf3n web escalable se cierra cuando:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"el servidor web est\xe1 detenido,"),(0,s.kt)("li",{parentName:"ul"},"se ha alcanzado el tiempo de espera de la cookie de sesi\xf3n.")),(0,s.kt)("p",null,"La vida \xfatil de una cookie inactiva es de 60 minutos por defecto, lo que significa que el servidor web cerrar\xe1 autom\xe1ticamente las sesiones inactivas despu\xe9s de 60 minutos."),(0,s.kt)("p",null,"Este tiempo de espera se puede establecer utilizando la propiedad ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#idletimeout"}),(0,s.kt)("inlineCode",{parentName:"a"},".idleTimeout"))," del objeto ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," (el tiempo de espera no puede ser inferior a 60 minutos)."),(0,s.kt)("p",null,"Cuando se cierra una sesi\xf3n web escalable, si despu\xe9s se llama al comando ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#session"}),(0,s.kt)("inlineCode",{parentName:"a"},"Session")),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"el objeto ",(0,s.kt)("inlineCode",{parentName:"li"},"Session")," no contiene privilegios (es una sesi\xf3n de invitado)"),(0,s.kt)("li",{parentName:"ul"},"la propi\xe9dad ",(0,s.kt)("a",i({parentName:"li"},{href:"/docs/es/20-R2/API/SessionClass#storage"}),(0,s.kt)("inlineCode",{parentName:"a"},".storage"))," est\xe1 vac\xeda"),(0,s.kt)("li",{parentName:"ul"},"se asocia una nueva cookie de sesi\xf3n a la sesi\xf3n")),(0,s.kt)("h2",i({},{id:"privilegios"}),"Privilegios"),(0,s.kt)("p",null,"Los privilegios pueden asociarse a las sesiones. En el servidor web, puede proporcionar un acceso o unas funcionalidades espec\xedficas en funci\xf3n de los privilegios de la sesi\xf3n."),(0,s.kt)("p",null,"Puede asignar privilegios utilizando la funci\xf3n ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#setprivileges"}),(0,s.kt)("inlineCode",{parentName:"a"},".setPrivileges()")),". En su c\xf3digo, puede comprobar los privilegios de la sesi\xf3n para permitir o denegar el acceso utilizando la funci\xf3n ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#hasprivilege"}),(0,s.kt)("inlineCode",{parentName:"a"},".hasPrivilege()")),". Por defecto, las nuevas sesiones no tienen ning\xfan privilegio: son sesiones ",(0,s.kt)("strong",{parentName:"p"},"invitados")," (la funci\xf3n ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/SessionClass#isguest"}),(0,s.kt)("inlineCode",{parentName:"a"},".isGuest()"))," devuelve true)."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'En la implementaci\xf3n actual (v18 R6), s\xf3lo est\xe1 disponible el privilegio "WebAdmin".')),(0,s.kt)("p",null,"Ejemplo:"),(0,s.kt)("pre",null,(0,s.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'If (Session.hasPrivilege("WebAdmin"))\n    //El acceso est\xe1 concedido, no haga nada\nElse\n    //Mostrar una p\xe1gina de autenticaci\xf3n\nEnd if\n')),(0,s.kt)("h2",i({},{id:"ejemplo"}),"Ejemplo"),(0,s.kt)("p",null,"En una aplicaci\xf3n CRM, cada vendedor gestiona su propia cartera de clientes. El almac\xe9n de datos contiene al menos dos clases de datos vinculadas: Customers y SalesPersons (un vendedor tiene varios clientes)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:n(536705).Z,width:"450",height:"225"})),(0,s.kt)("p",null,"Queremos que un vendedor se autentique, abra una sesi\xf3n en el servidor web y que se carguen los 3 primeros clientes en la sesi\xf3n."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Ejecutamos esta URL para abrir una sesi\xf3n:")),(0,s.kt)("pre",null,(0,s.kt)("code",i({parentName:"pre"},{}),"http://localhost:8044/authenticate.shtml\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"En un entorno de producci\xf3n, es necesario utilizar una conexi\xf3n ",(0,s.kt)("a",i({parentName:"p"},{href:"/docs/es/20-R2/API/WebServerClass#httpsenabled"}),"HTTPS")," para evitar que cualquier informaci\xf3n no cifrada circule por la red.")),(0,s.kt)("ol",i({},{start:2}),(0,s.kt)("li",{parentName:"ol"},"La p\xe1gina ",(0,s.kt)("inlineCode",{parentName:"li"},"authenticate.shtml")," es un formulario que contiene los campos de entrada ",(0,s.kt)("em",{parentName:"li"},"userId")," y ",(0,s.kt)("em",{parentName:"li"},"password")," y env\xeda una acci\xf3n 4DACTION POST:")),(0,s.kt)("pre",null,(0,s.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<body bgcolor="#ffffff">\n<FORM ACTION="/4DACTION/authenticate" METHOD=POST>\n    UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n    Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">\n</FORM>\n</body>\n</html>\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt-text",src:n(833578).Z,width:"523",height:"158"})),(0,s.kt)("ol",i({},{start:3}),(0,s.kt)("li",{parentName:"ol"},"El m\xe9todo authenticate project busca la persona ",(0,s.kt)("em",{parentName:"li"},"userID")," y valida la contrase\xf1a contra el valor hash ya almacenado en la tabla ",(0,s.kt)("em",{parentName:"li"},"SalesPersons"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",i({parentName:"pre"},{className:"language-4d"}),'var $indexUserId; $indexPassword; $userId : Integer\nvar $password : Text\nvar $userTop3; $sales; $info : Object\n\n\nARRAY TEXT($anames; 0)\nARRAY TEXT($avalues; 0)\n\nWEB GET VARIABLES($anames; $avalues)\n\n$indexUserId:=Find in array($anames; "userId")\n$userId:=Num($avalues{$indexUserId})\n\n$indexPassword:=Find in array($anames; "password")\n$password:=$avalues{$indexPassword}\n\n$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()\n\nIf ($sales#Null)\n    If (Verify password hash($password; $sales.password))\n        $info:=New object()\n        $info.userName:=$sales.firstname+" "+$sales.lastname\n        Session.setPrivileges($info)\n        Use (Session.storage)\n            If (Session.storage.myTop3=Null)\n                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n                Session.storage.myTop3:=$userTop3\n            End if\n        End use\n        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")\n    Else\n        WEB SEND TEXT("This password is wrong")\n    End if\nElse\n    WEB SEND TEXT("This userId is unknown")\nEnd if\n')))}u.isMDXComponent=!0},833578:(e,a,n)=>{n.d(a,{Z:()=>s});const s="data:image/png;base64,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"},536705:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/exampleSession-6ea5390dae0da375f51de68193ef570e.png"},880946:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/schemaSession-a7c86d4948895f03c24611177cd54f7c.png"},693557:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/settingsSession-0d1b28de173a572d3a47fcf327e29b28.png"}}]);