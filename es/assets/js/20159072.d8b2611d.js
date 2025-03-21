"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58750"],{316695:function(e,s,a){a.r(s),a.d(s,{default:()=>p,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"REST/configuration","title":"Configuraci\xf3n del servidor","description":"Utilizando peticiones HTTP est\xe1ndar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su aplicaci\xf3n, es decir, para recuperar informaci\xf3n sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicaci\xf3n web, y mucho m\xe1s.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/es/20-R7/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"configuration","title":"Configuraci\xf3n del servidor"},"sidebar":"docs","previous":{"title":"Comencemos","permalink":"/docs/es/20-R7/REST/gettingStarted"},"next":{"title":"Usuarios y sesiones","permalink":"/docs/es/20-R7/REST/authUsers"}}'),n=a("785893"),i=a("250065");let r={id:"configuration",title:"Configuraci\xf3n del servidor"},t=void 0,c={},l=[{value:"Iniciar el servidor REST",id:"iniciar-el-servidor-rest",level:2},{value:"Controlando el acceso REST",id:"controlando-el-acceso-rest",level:2},{value:"Exponer tablas y campos",id:"exponer-tablas-y-campos",level:2},{value:"Exponer las tablas",id:"exponer-las-tablas",level:3},{value:"Exponer los campos",id:"exponer-los-campos",level:3},{value:"Modo apropiativo",id:"modo-apropiativo",level:2}];function d(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Utilizando peticiones HTTP est\xe1ndar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su aplicaci\xf3n, ",(0,n.jsx)(s.em,{children:"es decir"}),", para recuperar informaci\xf3n sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicaci\xf3n web, y mucho m\xe1s."]}),"\n",(0,n.jsx)(s.p,{children:"Para comenzar a utilizar las funcionalidades REST, es necesario iniciar y configurar el servidor 4D REST."}),"\n",(0,n.jsx)(s.h2,{id:"iniciar-el-servidor-rest",children:"Iniciar el servidor REST"}),"\n",(0,n.jsxs)(s.p,{children:["Por razones de seguridad, por defecto, 4D no responde a las peticiones REST. Si desea iniciar el servidor REST, debe marcar la opci\xf3n ",(0,n.jsx)(s.strong,{children:"Exponer como servidor REST"})," en la p\xe1gina ",(0,n.jsx)(s.strong,{children:"Web"})," > ",(0,n.jsx)(s.strong,{children:"Web Features"})," de la configuraci\xf3n de la estructura para que se procesen las peticiones REST."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt-text",src:a(537714).Z+"",width:"855",height:"381"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Los servicios REST utilizan el servidor HTTP 4D, por lo que debe asegurarse de que el servidor web 4D est\xe1 iniciado."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'El mensaje de advertencia "Atenci\xf3n, verifique los privilegios de acceso" aparece cuando se marca esta opci\xf3n para llamar la atenci\xf3n sobre el hecho de que cuando se activan los servicios REST, por defecto el acceso a los objetos de la base de datos es gratuito mientras no se hayan configurado los accesos REST.'}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Debe reiniciar la aplicaci\xf3n 4D para que los cambios surtan efecto."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"controlando-el-acceso-rest",children:"Controlando el acceso REST"}),"\n",(0,n.jsx)(s.p,{children:"Por defecto, los accesos REST est\xe1n abiertos a todos los usuarios, lo que obviamente no es recomendable por razones de seguridad, y tambi\xe9n para controlar el uso de las licencias de los clientes."}),"\n",(0,n.jsxs)(s.p,{children:["A partir de 4D 20 R6, los accesos REST se configuran activando el modo ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/REST/authUsers#force-login-mode",children:(0,n.jsx)(s.strong,{children:"force login"})})," y creando una funci\xf3n de clase datastore ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/REST/authUsers#function-authentify",children:(0,n.jsx)(s.code,{children:"authentify()"})})," para autenticar usuarios y asignar privilegios a su sesi\xf3n web."]}),"\n",(0,n.jsx)(s.admonition,{title:"Compatibilidad",type:"note",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Access"})," area in the Settings dialog box is only available in converted projects for compatibility. Consulte ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/settings/web#access",children:"Acceso"})," para obtener m\xe1s informaci\xf3n."]})}),"\n",(0,n.jsx)(s.h2,{id:"exponer-tablas-y-campos",children:"Exponer tablas y campos"}),"\n",(0,n.jsxs)(s.p,{children:["Una vez activados los servicios REST en la aplicaci\xf3n 4D, por defecto una sesi\xf3n REST puede acceder a todas las tablas y campos de la base de datos 4D a trav\xe9s de la ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/ORDA/dsmapping#datastore",children:"interfaz del datastore"}),". As\xed, puede utilizar sus datos. Por ejemplo, si su base de datos contiene una tabla [Employee], es posible escribir:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,n.jsx)(s.p,{children:"Esta petici\xf3n devolver\xe1 todos los empleados cuyo campo de salario sea superior a 10000."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'Las tablas y/o campos 4D que tienen el atributo "Invisible" tambi\xe9n se exponen en REST por defecto.'}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Si desea personalizar los objetos del datastore accesibles a trav\xe9s de REST, debe desactivar la exposici\xf3n de cada tabla y/o campo que desee ocultar. Cuando una petici\xf3n REST intenta acceder a un recurso no autorizado, 4D devuelve un error."}),"\n",(0,n.jsx)(s.h3,{id:"exponer-las-tablas",children:"Exponer las tablas"}),"\n",(0,n.jsx)(s.p,{children:"Por defecto, todas las tablas se exponen en REST."}),"\n",(0,n.jsx)(s.p,{children:"Por razones de seguridad, es posible que desee exponer s\xf3lo ciertas tablas de su almac\xe9n de datos a las llamadas REST. Por ejemplo, si ha creado una tabla [Users] que almacena los nombres de usuario y las contrase\xf1as, ser\xeda mejor no exponerla."}),"\n",(0,n.jsx)(s.p,{children:"Para eliminar la exposici\xf3n REST de una tabla:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Visualice el inspector de tablas en el editor de estructuras y seleccione la tabla que desea modificar."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Desmarque la opci\xf3n ",(0,n.jsx)(s.strong,{children:"Exponer como recurso REST"}),":\n",(0,n.jsx)(s.img,{alt:"alt-text",src:a(316834).Z+"",width:"279",height:"330"}),"\nHaga esto para cada tabla cuya exposici\xf3n deba modificarse."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exponer-los-campos",children:"Exponer los campos"}),"\n",(0,n.jsx)(s.p,{children:"Por defecto, todos los campos de una base 4D se exponen en REST."}),"\n",(0,n.jsx)(s.p,{children:"Es posible que no quiera exponer ciertos campos de sus tablas a REST. Por ejemplo, es posible que no quiera exponer el campo [Employees]Salary."}),"\n",(0,n.jsx)(s.p,{children:"Para eliminar la exposici\xf3n REST de un campo:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Visualice el inspector de campo en el editor de estructuras y seleccione el campo a modificar."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Desmarque la opci\xf3n ",(0,n.jsx)(s.strong,{children:"Exponer como recurso REST"})," para el campo.\n",(0,n.jsx)(s.img,{alt:"alt-text",src:a(185961).Z+"",width:"279",height:"271"}),"\nRepeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Para que un campo sea accesible a trav\xe9s de REST, la tabla padre tambi\xe9n debe serlo. Si la tabla padre no est\xe1 expuesta, ninguno de sus campos lo estar\xe1, independientemente de su estado."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"modo-apropiativo",children:"Modo apropiativo"}),"\n",(0,n.jsxs)(s.p,{children:["En 4D Server, las peticiones REST se gestionan autom\xe1ticamente a trav\xe9s de procesos apropiativos, ",(0,n.jsx)(s.strong,{children:"incluso en modo interpretado"}),". Debe asegurarse de que su c\xf3digo es ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/WebServer/preemptiveWeb#writing-thread-safe-web-server-code",children:"compatible con una ejecuci\xf3n apropiativa"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["To debug interpreted web code on the server machine, make sure the debugger is ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/Debugging/debugging-remote",children:"attached to the server"})," or ",(0,n.jsx)(s.a,{href:"/docs/es/20-R7/Debugging/debugging-remote",children:"to a remote machine"}),". Los procesos web pasan entonces al modo cooperativo y se puede depurar el c\xf3digo del servidor web."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Con 4D monopuesto, el c\xf3digo interpretado siempre se ejecuta en modo cooperativo."})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},537714:function(e,s,a){a.d(s,{Z:function(){return o}});let o=a.p+"assets/images/Settings-934d69d2618fdc41073c2f25c38ea3a6.png"},185961:function(e,s,a){a.d(s,{Z:function(){return o}});let o=a.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},316834:function(e,s,a){a.d(s,{Z:function(){return o}});let o=a.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,s,a){a.d(s,{Z:function(){return t},a:function(){return r}});var o=a(667294);let n={},i=o.createContext(n);function r(e){let s=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);