"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18473"],{708759:function(e,s,i){i.r(s),i.d(s,{default:()=>u,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"REST/authUsers","title":"Usuarios y sesiones","description":"Sesiones","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/authUsers.md","sourceDirName":"REST","slug":"/REST/authUsers","permalink":"/docs/es/20-R7/REST/authUsers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"authUsers","title":"Usuarios y sesiones"},"sidebar":"docs","previous":{"title":"Configuraci\xf3n del servidor","permalink":"/docs/es/20-R7/REST/configuration"},"next":{"title":"Obtener informaci\xf3n del servidor","permalink":"/docs/es/20-R7/REST/genInfo"}}'),a=i("785893"),o=i("250065");let r={id:"authUsers",title:"Usuarios y sesiones"},d=void 0,c={},l=[{value:"Sesiones",id:"sesiones",level:2},{value:"Forzar el modo de inicio de sesi\xf3n",id:"forzar-el-modo-de-inicio-de-sesi\xf3n",level:2},{value:"Peticiones REST descriptivas",id:"peticiones-rest-descriptivas",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:2},{value:"Sintaxis",id:"sintaxis",level:3},{value:"Ejemplo",id:"ejemplo",level:3}];function t(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"sesiones",children:"Sesiones"}),"\n",(0,a.jsxs)(s.p,{children:["Cuando las ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/WebServer/sessions#enabling-web-sessions",children:"sesiones escalables est\xe1n activadas"})," (recomendadas), las peticiones REST pueden crear y usar ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/WebServer/sessions",children:"sesiones usuario web"}),", ofreciendo funcionalidades adicionales como la gesti\xf3n de m\xfaltiples peticiones, el intercambio de datos entre procesos web clientes y el control de los privilegios usuario."]}),"\n",(0,a.jsxs)(s.p,{children:["Cuando se abre una sesi\xf3n de usuario web, puede manejarla a trav\xe9s del objeto ",(0,a.jsx)(s.code,{children:"Session"})," y la ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass",children:"Session API"}),". Las siguientes peticiones REST reutilizan la misma cookie de sesi\xf3n."]}),"\n",(0,a.jsx)(s.p,{children:"Una sesi\xf3n se abre despu\xe9s de que el usuario haya iniciado sesi\xf3n correctamente (ver m\xe1s abajo)."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["En 4D Server, para abrir una sesi\xf3n REST es necesario disponer de una licencia gratuita cliente 4D.",(0,a.jsx)(s.br,{})]}),"\n",(0,a.jsx)(s.li,{children:"En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"forzar-el-modo-de-inicio-de-sesi\xf3n",children:"Forzar el modo de inicio de sesi\xf3n"}),"\n",(0,a.jsx)(s.admonition,{title:"Compatibilidad",type:"note",children:(0,a.jsxs)(s.p,{children:["El modo de inicio de sesi\xf3n heredado basado en el m\xe9todo base ",(0,a.jsx)(s.code,{children:"On REST Authentication"})," est\xe1 ",(0,a.jsx)(s.strong,{children:"obsoleto"})," a partir de 4D 20 R6. Ahora se recomienda ",(0,a.jsxs)(s.a,{href:"/docs/es/20-R7/ORDA/privileges#rolesjson-file",children:["utilizar el ",(0,a.jsx)(s.strong,{children:"modo Force login"})]})," (activado autom\xe1ticamente en nuevos proyectos) e implementar la funci\xf3n ",(0,a.jsx)(s.a,{href:"#function-authentify",children:(0,a.jsx)(s.code,{children:"ds.authentify()"})}),". En proyectos convertidos, ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/settings/web#activate-rest-authentication-through-dsauthentify-function",children:"un bot\xf3n en la caja de di\xe1logo de Par\xe1metros"})," le ayudar\xe1 a actualizar su configuraci\xf3n. En Qodly Studio for 4D, el modo se puede definir utilizando la opci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/WebServer/qodly-studio#force-login",children:(0,a.jsx)(s.strong,{children:"Forzar inicio de sesi\xf3n"})})," en el panel de Privilegios."]})}),"\n",(0,a.jsx)(s.p,{children:"La secuencia de inicio de sesi\xf3n del usuario es la siguiente:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:['En la primera llamada REST (para una llamada a p\xe1gina Qodly, por ejemplo), se crea una sesi\xf3n usuario web "invitado". No tiene privilegios, no tiene derechos para ejecutar solicitudes que no sean ',(0,a.jsx)(s.a,{href:"#descriptive-rest-requests",children:"peticiones REST descriptivas"}),", no tiene consumo de licencia.",(0,a.jsx)(s.br,{}),"\nLas solicitudes REST descriptivas siempre son procesadas por el servidor, aunque no se abra ninguna sesi\xf3n de usuario web que utilice una licencia.",(0,a.jsx)(s.br,{}),"\nLas solicitudes REST descriptivas siempre son procesadas por el servidor, aunque no se abra ninguna sesi\xf3n de usuario web que utilice una licencia.",(0,a.jsx)(s.br,{}),'\nLas solicitudes REST descriptivas siempre son procesadas por el servidor, aunque no se abra ninguna sesi\xf3n de usuario web que utilice una licencia. En este caso, son procesados a trav\xe9s de sesiones "invitado".']}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Usted llama a su ",(0,a.jsxs)(s.a,{href:"#function-authentify",children:["funci\xf3n ",(0,a.jsx)(s.code,{children:"authentify()"})]})," (creada previamente), en la que revisa las credenciales de usuario y llama a ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass#setprivileges",children:(0,a.jsx)(s.code,{children:"Session.setPrivileges()"})})," con los privilegios apropiados. ",(0,a.jsx)(s.code,{children:"authentify()"})," debe ser una ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/ordaClasses#datastore-class",children:"funci\xf3n datastore class"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["La petici\xf3n ",(0,a.jsx)(s.code,{children:"/rest/$catalog/authentify"})," se env\xeda al servidor junto con las credenciales del usuario. Este paso s\xf3lo requiere un formulario de inicio de sesi\xf3n b\xe1sico que no tenga acceso a datos; puede ser una [p\xe1gina Qodly](. /WebServer/qodly-studio.md) (llamada a trav\xe9s de la solicitud ",(0,a.jsx)(s.code,{children:"/rest/$getWebForm"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Si el usuario se autentica correctamente, se consume una licencia 4D en el servidor y se aceptan todas las peticiones REST."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"alt-text",src:i(288371).Z+"",width:"1344",height:"756"})}),"\n",(0,a.jsxs)(s.p,{children:["En la fase de inicio de sesi\xf3n del usuario, el uso de la licencia est\xe1 desconectado de las sesiones de usuario web. S\xf3lo se requiere una licencia cuando se ejecuta el comando ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass#setprivileges",children:(0,a.jsx)(s.code,{children:"Session.setPrivileges()"})}),", lo que permite controlar el n\xfamero de licencias utilizadas."]}),"\n",(0,a.jsx)(s.p,{children:"Todas las dem\xe1s peticiones REST (manejando datos o ejecutando una funci\xf3n) s\xf3lo ser\xe1n procesadas si son ejecutadas dentro de una sesi\xf3n web con privilegios apropiados, de lo contrario devuelven un error. Sintaxis Sintaxis Sintaxis Sintaxis Sintaxis Sintaxis Sintaxis Sintaxis Ejecutar esta funci\xf3n activa el consumo de la licencia 4D."}),"\n",(0,a.jsx)(s.h3,{id:"peticiones-rest-descriptivas",children:"Peticiones REST descriptivas"}),"\n",(0,a.jsx)(s.p,{children:'Las peticiones REST descriptivas pueden procesarse en sesiones de usuario web que no requieren licencias (sesiones "invitado"). Estas peticiones son:'}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["peticiones ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/REST/catalog",children:(0,a.jsx)(s.code,{children:"/rest/$catalog"})})," (por ejemplo, ",(0,a.jsx)(s.code,{children:"/rest/$catalog/$all"}),") - acceso a las dataclasse disponibles"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"/rest/$catalog/authentify"})," - la funci\xf3n del almac\xe9n de datos utilizada para iniciar sesi\xf3n del usuario"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"/rest/$getWebForm"})," - la renderizaci\xf3n de una p\xe1gina Qodly"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"alt-text",src:i(809533).Z+"",width:"1171",height:"302"})}),"\n",(0,a.jsx)(s.h2,{id:"function-authentify",children:(0,a.jsx)(s.code,{children:"Function authentify"})}),"\n",(0,a.jsx)(s.h3,{id:"sintaxis",children:"Sintaxis"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"exposed Function authentify({params : type}) {-> result : type}\n	// c\xf3digo\n"})}),"\n",(0,a.jsxs)(s.p,{children:["La funci\xf3n ",(0,a.jsx)(s.code,{children:"authentify()"})," debe estar implementada en la ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/ordaClasses#datastore-class",children:"clase DataStore"})," del proyecto y debe ser llamada a trav\xe9s de una petici\xf3n REST."]}),"\n",(0,a.jsx)(s.p,{children:'Esta funci\xf3n es el \xfanico punto de entrada disponible desde las sesiones guest REST cuando el modo "force login" est\xe1 activado: cualquier otra llamada de funci\xf3n o de acceso a datos es rechazada hasta que la sesi\xf3n adquiera los privilegios adecuados.'}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["La funci\xf3n ",(0,a.jsx)(s.code,{children:"authentify()"})," siempre puede ser ejecutada por una sesi\xf3n de invitado de REST, independientemente de la configuraci\xf3n del archivo ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/privileges#rolesjson-file",children:(0,a.jsx)(s.code,{children:"roles.json"})}),"."]})}),"\n",(0,a.jsxs)(s.p,{children:["La funci\xf3n puede recibir cualquier informaci\xf3n de autenticaci\xf3n o contextual como ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/REST/classFunctions#parameters",children:"par\xe1metro(s)"})," y puede devolver cualquier valor. Dado que esta funci\xf3n s\xf3lo puede ser llamada desde una petici\xf3n REST, los par\xe1metros deben ser pasados a trav\xe9s del cuerpo de la petici\xf3n POST."]}),"\n",(0,a.jsx)(s.p,{children:"Esta funci\xf3n debe contener dos partes:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"alg\xfan c\xf3digo para identificar y autenticar al remitente de la petici\xf3n REST,"}),"\n",(0,a.jsxs)(s.li,{children:["si la autenticaci\xf3n tiene \xe9xito, una llamada a ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass#setprivileges",children:(0,a.jsx)(s.code,{children:"Session.setPrivileges()"})})," que asigna los privilegios apropiados a la sesi\xf3n."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Si la funci\xf3n no llama a ",(0,a.jsx)(s.a,{href:"/docs/es/20-R7/API/SessionClass#setprivileges",children:(0,a.jsx)(s.code,{children:"Session.setPrivileges()"})}),", no se asignan privilegios, no se consume ninguna licencia y las solicitudes REST no descriptivas posteriores son rechazadas."]}),"\n",(0,a.jsx)(s.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(s.p,{children:["S\xf3lo quiere conocer a los usuarios para abrir una sesi\xf3n web en el servidor. Ha creado la siguiente funci\xf3n ",(0,a.jsx)(s.code,{children:"authentify()"})," en la clase datastore:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) //el usuario es conocido\n	If (Verify password hash($credentials.password; $user.password))\n		Session.setPrivileges("vip")\n	Else\n\n		return "Wrong password"\n	End if\nElse\n        return "Wrong user"\nEnd if\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Para llamar a la funci\xf3n ",(0,a.jsx)(s.code,{children:"authentify()"}),":"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/authentify"})]}),"\n",(0,a.jsx)(s.p,{children:"Cuerpo de la petici\xf3n:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'[{"name":"Henry",\n"password":"123"}]\n'})})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},809533:function(e,s,i){i.d(s,{Z:function(){return n}});let n=i.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},288371:function(e,s,i){i.d(s,{Z:function(){return n}});let n=i.p+"assets/images/force-login-2-c615d4581880aa201c1e7abd591f6146.jpeg"},250065:function(e,s,i){i.d(s,{Z:function(){return d},a:function(){return r}});var n=i(667294);let a={},o=n.createContext(a);function r(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);