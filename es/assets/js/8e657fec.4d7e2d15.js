"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74813"],{215504:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"WebServer/sessions","title":"Sesiones web","description":"El servidor web de 4D ofrece funciones integradas para la gesti\xf3n de sesiones web. La creaci\xf3n y el mantenimiento de sesiones web le permiten controlar y mejorar la experiencia del usuario en su aplicaci\xf3n web. Cuando se activan las sesiones web, los clientes web pueden reutilizar el mismo contexto de servidor de una solicitud a otra.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/WebServer/sessions.md","sourceDirName":"WebServer","slug":"/WebServer/sessions","permalink":"/docs/es/20-R6/WebServer/sessions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fsessions.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"sessions","title":"Sesiones web"},"sidebar":"docs","previous":{"title":"Autenticaci\xf3n","permalink":"/docs/es/20-R6/WebServer/authentication"},"next":{"title":"Uso de procesos web apropiativos","permalink":"/docs/es/20-R6/WebServer/preemptiveWeb"}}'),a=n("785893"),o=n("250065");let r={id:"sessions",title:"Sesiones web"},d=void 0,l={},c=[{value:"Usos",id:"usos",level:2},{value:"Habilitando sesiones web",id:"habilitando-sesiones-web",level:2},{value:"Implementaci\xf3n de la sesi\xf3n",id:"implementaci\xf3n-de-la-sesi\xf3n",level:2},{value:"Almacenar y compartir informaci\xf3n de sesi\xf3n",id:"almacenar-y-compartir-informaci\xf3n-de-sesi\xf3n",level:2},{value:"Fecha de caducidad de la sesi\xf3n",id:"fecha-de-caducidad-de-la-sesi\xf3n",level:2},{value:"Privilegios",id:"privilegios",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n (entrada de blog)",id:"ver-tambi\xe9n-entrada-de-blog",level:2}];function t(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["El servidor web de 4D ofrece funciones integradas para la gesti\xf3n de ",(0,a.jsx)(s.strong,{children:"sesiones web"}),". La creaci\xf3n y el mantenimiento de sesiones web le permiten controlar y mejorar la experiencia del usuario en su aplicaci\xf3n web. Cuando se activan las sesiones web, los clientes web pueden reutilizar el mismo contexto de servidor de una solicitud a otra."]}),"\n",(0,a.jsx)(s.p,{children:"Las sesiones web permiten:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["manejar m\xfaltiples peticiones simult\xe1neamente desde el mismo cliente web a trav\xe9s de un n\xfamero ilimitado de procesos apropiativos (las sesiones web son ",(0,a.jsx)(s.strong,{children:"escalables"}),"),"]}),"\n",(0,a.jsxs)(s.li,{children:["gestionar la sesi\xf3n a trav\xe9s de un objeto ",(0,a.jsx)(s.code,{children:"Session"})," y la ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass",children:"Session API"}),","]}),"\n",(0,a.jsxs)(s.li,{children:["almacenar y compartir datos entre procesos de un cliente web utilizando el ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#storage",children:".storage"})," de la sesi\xf3n,"]}),"\n",(0,a.jsx)(s.li,{children:"asociar privilegios al usuario que ejecuta la sesi\xf3n."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"usos",children:"Usos"}),"\n",(0,a.jsx)(s.p,{children:"Las sesiones web se utilizan para:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/docs/es/20-R6/WebServer/gettingStarted",children:"Aplicaciones web"})," que env\xedan peticiones http,"]}),"\n",(0,a.jsxs)(s.li,{children:["llamadas a la ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/REST/authUsers",children:"REST API"}),", que utilizan ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/ORDA/datastores",children:"datastores remotos"})," y ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/WebServer/qodly-studio",children:"formularios Qodly"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"habilitando-sesiones-web",children:"Habilitando sesiones web"}),"\n",(0,a.jsx)(s.p,{children:"La funcionalidad de gesti\xf3n de sesiones puede ser activada y desactivada en su servidor web 4D. Hay diferentes maneras de habilitar la gesti\xf3n de la sesi\xf3n:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Utilizando la opci\xf3n de ",(0,a.jsx)(s.strong,{children:"sesiones escalables"}),' en la p\xe1gina "Web/Opciones (I)" de la Configuraci\xf3n (configuraci\xf3n permanente):\n',(0,a.jsx)(s.img,{alt:"alt-text",src:n(955858).Z+"",width:"821",height:"361"})]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Esta opci\xf3n est\xe1 seleccionada por defecto en los nuevos proyectos. Sin embargo, se puede desactivar seleccionando la opci\xf3n ",(0,a.jsx)(s.strong,{children:"Sin sesiones"}),", en cuyo caso las funcionalidades de la sesi\xf3n web se desactivan (no hay ning\xfan objeto ",(0,a.jsx)(s.code,{children:"Session"})," disponible)."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Usando la propiedad ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/WebServerClass#scalablesession",children:(0,a.jsx)(s.code,{children:".scalableSession"})})," del objeto Servidor Web (para pasar el par\xe1metro ",(0,a.jsx)(s.em,{children:"settings"})," de la funci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/WebServerClass#start",children:(0,a.jsx)(s.code,{children:".start()"})}),"). En este caso, esta configuraci\xf3n anula la opci\xf3n definida en la caja de di\xe1logo Configuraci\xf3n del objeto Servidor Web (no se almacena en el disco)."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["El comando ",(0,a.jsx)(s.code,{children:"WEB SET OPTION"})," tambi\xe9n puede establecer el modo de sesi\xf3n para el servidor web principal."]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"En cualquier caso, la configuraci\xf3n es local para la m\xe1quina; por lo que puede ser diferente en el servidor web de 4D Server y en los servidores web de las m\xe1quinas 4D remotas."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Compatibilidad"}),": una opci\xf3n ",(0,a.jsx)(s.strong,{children:"Sesiones legacy"})," est\xe1 disponible en proyectos creados con una versi\xf3n de 4D anterior a 4D v18 R6 (para m\xe1s informaci\xf3n, consulte el sitio web ",(0,a.jsx)(s.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),")."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"implementaci\xf3n-de-la-sesi\xf3n",children:"Implementaci\xf3n de la sesi\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["Cuando ",(0,a.jsx)(s.a,{href:"#enabling-sessions",children:"se habilitan las sesiones"}),', se implementan mecanismos autom\xe1ticos, basados en una cookie privada establecida por el propio 4D: "4DSID__AppName_", donde ',(0,a.jsx)(s.em,{children:"AppName"})," es el nombre del proyecto de la aplicaci\xf3n. Esta cookie hace referencia a la sesi\xf3n web actual de la aplicaci\xf3n."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["El nombre de la cookie se puede obtener utilizando la propiedad ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/WebServerClass#sessioncookiename",children:(0,a.jsx)(s.code,{children:".sessionCookieName"})}),"."]})}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:'En cada petici\xf3n del cliente web, el servidor web comprueba la presencia y el valor de la cookie privada "4DSID__AppName_".'}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Si la cookie tiene un valor, 4D busca la sesi\xf3n que cre\xf3 esta cookie entre las sesiones existentes; si se encuentra esta sesi\xf3n, se reutiliza para la llamada."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Si la solicitud del cliente no corresponde a una sesi\xf3n ya abierta:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:'se crea una nueva sesi\xf3n con una cookie privada "4DSID__AppName_" en el servidor web'}),"\n",(0,a.jsxs)(s.li,{children:["se crea un nuevo objeto Guest ",(0,a.jsx)(s.code,{children:"Session"})," dedicado a la sesi\xf3n web escalable."]}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["La creaci\xf3n de una sesi\xf3n web para una petici\xf3n REST puede requerir que una licencia est\xe9 disponible, consulte ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/REST/authUsers",children:"esta p\xe1gina"}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["Se puede acceder al objeto ",(0,a.jsx)(s.code,{children:"Session"})," de la sesi\xf3n actual a trav\xe9s del comando ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#session",children:(0,a.jsx)(s.code,{children:"Session"})})," en el c\xf3digo de todo proceso web."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"alt-text",src:n(509958).Z+"",width:"642",height:"442"})}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["Los procesos web no suelen terminar, sino que se reciclan en un fondo com\xfan para ser m\xe1s eficientes. Cuando un proceso termina de ejecutar una petici\xf3n, se devuelve al pool y queda disponible para la siguiente petici\xf3n. Dado que un proceso web puede ser reutilizado por cualquier sesi\xf3n, las ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/Concepts/variables#process-variables",children:"variables proceso"})," deben ser borradas por su c\xf3digo al final de su ejecuci\xf3n (utilizando ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page89.html",children:(0,a.jsx)(s.code,{children:"CLEAR VARIABLE"})})," por ejemplo). Esta limpieza es necesaria para cualquier informaci\xf3n relacionada con el proceso, como una referencia a un archivo abierto. Esta es la raz\xf3n por la que ",(0,a.jsx)(s.strong,{children:"se recomienda"})," utilizar el objeto ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass",children:"Sesi\xf3n"})," cuando se quiera guardar informaci\xf3n relacionada con la sesi\xf3n."]})}),"\n",(0,a.jsx)(s.h2,{id:"almacenar-y-compartir-informaci\xf3n-de-sesi\xf3n",children:"Almacenar y compartir informaci\xf3n de sesi\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["Cada objeto ",(0,a.jsx)(s.code,{children:"Session"})," proporciona una propiedad ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#storage",children:(0,a.jsx)(s.code,{children:".storage"})})," que es un ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/Concepts/shared",children:"objeto compartido"}),". Esta propiedad permite compartir informaci\xf3n entre todos los procesos manejados por la sesi\xf3n."]}),"\n",(0,a.jsx)(s.h2,{id:"fecha-de-caducidad-de-la-sesi\xf3n",children:"Fecha de caducidad de la sesi\xf3n"}),"\n",(0,a.jsx)(s.p,{children:"Una sesi\xf3n web escalable se cierra cuando:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"el servidor web est\xe1 detenido,"}),"\n",(0,a.jsx)(s.li,{children:"se ha alcanzado el tiempo de espera de la cookie de sesi\xf3n."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"La vida \xfatil de una cookie inactiva es de 60 minutos por defecto, lo que significa que el servidor web cerrar\xe1 autom\xe1ticamente las sesiones inactivas despu\xe9s de 60 minutos."}),"\n",(0,a.jsxs)(s.p,{children:["Este tiempo de espera puede establecerse utilizando la propiedad ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#idletimeout",children:(0,a.jsx)(s.code,{children:".idleTimeout"})})," del objeto ",(0,a.jsx)(s.code,{children:"Session"})," (el tiempo de espera no puede ser inferior a 60 minutos) o el par\xe1metro ",(0,a.jsx)(s.em,{children:"connectionInfo"})," del comando ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/DataStoreClass#open-datastore",children:(0,a.jsx)(s.code,{children:"Open datastore"})}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Cuando se cierra una sesi\xf3n web, si despu\xe9s se llama al comando ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#session",children:(0,a.jsx)(s.code,{children:"Session"})}),":"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["el objeto ",(0,a.jsx)(s.code,{children:"Session"})," no contiene privilegios (es una sesi\xf3n de invitado)"]}),"\n",(0,a.jsxs)(s.li,{children:["la propiedad ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#storage",children:(0,a.jsx)(s.code,{children:".storage"})})," est\xe1 vac\xeda"]}),"\n",(0,a.jsx)(s.li,{children:"se asocia una nueva cookie de sesi\xf3n a la sesi\xf3n"}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["Puede cerrar una sesi\xf3n desde un formulario Qodly utilizando la funci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/WebServer/qodly-studio#logout",children:(0,a.jsx)(s.strong,{children:"logout"})}),"."]})}),"\n",(0,a.jsx)(s.h2,{id:"privilegios",children:"Privilegios"}),"\n",(0,a.jsx)(s.p,{children:"Fecha de caducidad de la sesi\xf3n En el servidor web, puede proporcionar un acceso o unas funcionalidades espec\xedficas en funci\xf3n de los privilegios de la sesi\xf3n."}),"\n",(0,a.jsxs)(s.p,{children:["Puedes asignar privilegios utilizando la funci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#setprivileges",children:(0,a.jsx)(s.code,{children:".setPrivileges()"})}),". En su c\xf3digo, puede comprobar los privilegios de la sesi\xf3n para permitir o denegar el acceso utilizando la funci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#hasprivilege",children:(0,a.jsx)(s.code,{children:".hasPrivilege()"})}),". Por defecto, las sesiones nuevas no tienen ning\xfan privilegio: son sesiones ",(0,a.jsx)(s.strong,{children:"Invitadas"})," (la funci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/SessionClass#isguest",children:(0,a.jsx)(s.code,{children:".isGuest()"})})," devuelve true)."]}),"\n",(0,a.jsx)(s.p,{children:"Ejemplo:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n	//Acceso concedido, no hacer nada\nElse\n	//Mostrar una p\xe1gina de autenticaci\xf3n\nEnd if\n'})}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["Los privilegios se implementan en el coraz\xf3n de la arquitectura ORDA para proporcionar a los desarrolladores una tecnolog\xeda poderosa para controlar el acceso al almac\xe9n de datos y a las funciones de la clase de datos. Para m\xe1s informaci\xf3n, consulte la p\xe1gina ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/ORDA/privileges",children:(0,a.jsx)(s.strong,{children:"Privilegios"})})," del cap\xedtulo ORDA."]})}),"\n",(0,a.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(s.p,{children:"En una aplicaci\xf3n CRM, cada vendedor gestiona su propia cartera de clientes. El almac\xe9n de datos contiene al menos dos clases de datos vinculadas: Customers y SalesPersons (un vendedor tiene varios clientes)."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"alt-text",src:n(505465).Z+"",width:"450",height:"225"})}),"\n",(0,a.jsx)(s.p,{children:"Queremos que un vendedor se autentique, abra una sesi\xf3n en el servidor web y que se carguen los 3 primeros clientes en la sesi\xf3n."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Ejecutamos esta URL para abrir una sesi\xf3n:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"http://localhost:8044/authenticate.shtml\n"})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["En un entorno de producci\xf3n, es necesario utilizar una conexi\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R6/API/WebServerClass#httpsenabled",children:"HTTPS"})," para evitar que cualquier informaci\xf3n no cifrada circule por la red."]}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsxs)(s.li,{children:["La p\xe1gina ",(0,a.jsx)(s.code,{children:"authenticate.shtml"})," es un formulario que contiene los campos de entrada ",(0,a.jsx)(s.em,{children:"userId"})," y ",(0,a.jsx)(s.em,{children:"password"})," y env\xeda una acci\xf3n 4DACTION POST:"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<body bgcolor="#ffffff">\n<FORM ACTION="/4DACTION/authenticate" METHOD=POST>\n	UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>\n	Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>\n<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">\n</FORM>\n</body>\n</html>\n'})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"alt-text",src:n(909909).Z+"",width:"523",height:"158"})}),"\n",(0,a.jsxs)(s.ol,{start:"3",children:["\n",(0,a.jsxs)(s.li,{children:["El m\xe9todo authenticate project busca la persona ",(0,a.jsx)(s.em,{children:"userID"})," y valida la contrase\xf1a contra el valor hash ya almacenado en la tabla ",(0,a.jsx)(s.em,{children:"SalesPersons"}),":"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'var $indexUserId; $indexPassword; $userId : Integer\nvar $password : Text\nvar $userTop3; $sales; $info : Object\n\n\nARRAY TEXT($anames; 0)\nARRAY TEXT($avalues; 0)\n\nWEB GET VARIABLES($anames; $avalues)\n\n$indexUserId:=Find in array($anames; "userId")\n$userId:=Num($avalues{$indexUserId})\n\n$indexPassword:=Find in array($anames; "password")\n$password:=$avalues{$indexPassword}\n\n$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()\n\nIf ($sales#Null)\n    If (Verify password hash($password; $sales.password))\n        $info:=New object()\n        $info.userName:=$sales.firstname+" "+$sales.lastname\n        Session.setPrivileges($info)\n        Use (Session.storage)\n            If (Session.storage.myTop3=Null)\n                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)\n\n                Session.storage.myTop3:=$userTop3\n            End if\n        End use\n        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")\n    Else\n        WEB SEND TEXT("This password is wrong")\n    End if\nElse\n    WEB SEND TEXT("This userId is unknown")\nEnd if\n'})}),"\n",(0,a.jsx)(s.h2,{id:"ver-tambi\xe9n-entrada-de-blog",children:"Ver tambi\xe9n (entrada de blog)"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://blog.4d.com/scalable-sessions-for-advanced-web-applications/",children:"Sesiones escalables para aplicaciones web avanzadas"})})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},909909:function(e,s,n){n.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},505465:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/exampleSession-6ea5390dae0da375f51de68193ef570e.png"},509958:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/schemaSession-a7c86d4948895f03c24611177cd54f7c.png"},955858:function(e,s,n){n.d(s,{Z:function(){return i}});let i=n.p+"assets/images/settingsSession-0d1b28de173a572d3a47fcf327e29b28.png"},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var i=n(667294);let a={},o=i.createContext(a);function r(e){let s=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);