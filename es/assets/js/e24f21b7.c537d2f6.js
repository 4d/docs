"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74093"],{17399:function(e,a,s){s.r(a),s.d(a,{default:()=>u,frontMatter:()=>r,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"REST/configuration","title":"Configuraci\xf3n del servidor","description":"Utilizando peticiones HTTP est\xe1ndar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su base, es decir, recuperar informaci\xf3n sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicaci\xf3n web, y mucho m\xe1s.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/configuration.md","sourceDirName":"REST","slug":"/REST/configuration","permalink":"/docs/es/18/REST/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"configuration","title":"Configuraci\xf3n del servidor"},"sidebar":"docs","previous":{"title":"Comencemos","permalink":"/docs/es/18/REST/gettingStarted"},"next":{"title":"Usuarios y sesiones","permalink":"/docs/es/18/REST/authUsers"}}'),i=s("785893"),o=s("250065");let r={id:"configuration",title:"Configuraci\xf3n del servidor"},t=void 0,l={},c=[{value:"Iniciar el servidor REST",id:"iniciar-el-servidor-rest",level:2},{value:"Configuraci\xf3n del acceso REST",id:"configuraci\xf3n-del-acceso-rest",level:2},{value:"Utilizaci\xf3n de los par\xe1metros de la base",id:"utilizaci\xf3n-de-los-par\xe1metros-de-la-base",level:3},{value:"M\xe9todo base On REST Authentication",id:"m\xe9todo-base-on-rest-authentication",level:3},{value:"Exponer tablas y campos",id:"exponer-tablas-y-campos",level:2},{value:"Exponer las tablas",id:"exponer-las-tablas",level:3},{value:"Exponer los campos",id:"exponer-los-campos",level:3}];function d(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Utilizando peticiones HTTP est\xe1ndar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su base, *es decir, *recuperar informaci\xf3n sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicaci\xf3n web, y mucho m\xe1s."}),"\n",(0,i.jsx)(a.p,{children:"Para comenzar a utilizar las funcionalidades REST, es necesario iniciar y configurar el servidor 4D REST."}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["En 4D Server, para abrir una sesi\xf3n REST es necesario disponer de una licencia cliente 4D gratuita.",(0,i.jsx)(a.br,{})]}),"\n",(0,i.jsxs)(a.li,{children:["En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas. Es necesario gestionar la ",(0,i.jsx)(a.a,{href:"/docs/es/18/REST/authUsers#session-cookie",children:"cookie de sesi\xf3n"})," para utilizar la misma sesi\xf3n para la aplicaci\xf3n solicitante."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"iniciar-el-servidor-rest",children:"Iniciar el servidor REST"}),"\n",(0,i.jsxs)(a.p,{children:["Por razones de seguridad, por defecto, 4D no responde a las peticiones REST. Si desea iniciar el servidor REST, debe marcar la opci\xf3n ",(0,i.jsx)(a.strong,{children:"Exponer como servidor REST"}),' en la p\xe1gina "Recurso web/REST" de la configuraci\xf3n de la base para que se procesen las solicitudes REST.']}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"alt-text",src:s(79880).Z+"",width:"862",height:"377"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Los servicios REST utilizan el servidor HTTP 4D, por lo que debe asegurarse de que el servidor web 4D est\xe1 iniciado."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:'El mensaje de advertencia "Atenci\xf3n, verifique los privilegios de acceso" aparece cuando se marca esta opci\xf3n para llamar la atenci\xf3n sobre el hecho de que cuando se activan los servicios REST, por defecto el acceso a los objetos de la base de datos es gratuito mientras no se hayan configurado los accesos REST.'}),"\n",(0,i.jsx)(a.h2,{id:"configuraci\xf3n-del-acceso-rest",children:"Configuraci\xf3n del acceso REST"}),"\n",(0,i.jsx)(a.p,{children:"Por defecto, los accesos REST est\xe1n abiertos a todos los usuarios, lo que obviamente no es recomendable por razones de seguridad, y tambi\xe9n para controlar el uso de las licencias de los clientes."}),"\n",(0,i.jsx)(a.p,{children:"Puede configurar los accesos REST de una de las siguientes maneras:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["asignar un grupo de usuarios en ",(0,i.jsx)(a.strong,{children:"Lectura/Escritura"}),' a los servicios REST en la p\xe1gina "Web/REST" de la Configuraci\xf3n de la base;']}),"\n",(0,i.jsxs)(a.li,{children:["escribiendo un m\xe9todo base ",(0,i.jsx)(a.code,{children:"On REST Authentication"})," para interceptar y manejar cada petici\xf3n REST inicial."]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["No se pueden utilizar ambas funciones simult\xe1neamente. Una vez que se ha definido un m\xe9todo base ",(0,i.jsx)(a.code,{children:"On REST Authentication"}),', 4D delega totalmente el control de las peticiones REST en \xe9l: se ignora cualquier ajuste realizado mediante el men\xfa " Lectura/Escritura" en la p\xe1gina de recursos Web/REST de la Configuraci\xf3n de la base de datos.']}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"utilizaci\xf3n-de-los-par\xe1metros-de-la-base",children:"Utilizaci\xf3n de los par\xe1metros de la base"}),"\n",(0,i.jsxs)(a.p,{children:["El men\xfa ",(0,i.jsx)(a.strong,{children:"Lectura/Escritura"}),' de la p\xe1gina "Web/REST" de los par\xe1metros de la base especifica un grupo de usuarios 4D que est\xe1 autorizado a establecer el enlace con la base de datos 4D utilizando las peticiones REST.']}),"\n",(0,i.jsxs)(a.p,{children:["Por defecto, el men\xfa muestra ",(0,i.jsx)(a.code,{children:"<Anyone>"}),", lo que significa que los accesos REST est\xe1n abiertos a todos los usuarios. Una vez que haya especificado un grupo, s\xf3lo una cuenta de usuario de 4D que pertenezca a este grupo podr\xe1 ser utilizada para ",(0,i.jsx)(a.a,{href:"/docs/es/18/REST/authUsers",children:"acceder a 4D mediante una petici\xf3n REST"}),". Si se utiliza una cuenta que no pertenece a este grupo, 4D devuelve un error de autenticaci\xf3n al remitente de la petici\xf3n."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Para que esta configuraci\xf3n tenga efecto, el m\xe9todo base",(0,i.jsx)(a.code,{children:"On REST Authentication"})," no debe estar definido. Si existe, 4D ignora los par\xe1metros de acceso definidos en las propiedades de la base."]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"m\xe9todo-base-on-rest-authentication",children:"M\xe9todo base On REST Authentication"}),"\n",(0,i.jsxs)(a.p,{children:["El m\xe9todo base ",(0,i.jsx)(a.code,{children:"On REST Authentication"})," le ofrece una forma personalizada de controlar la apertura de sesiones REST en 4D. Este m\xe9todo base se llama autom\xe1ticamente cuando se abre una nueva sesi\xf3n a trav\xe9s de una solicitud REST. Cuando se recibe una ",(0,i.jsx)(a.a,{href:"/docs/es/18/REST/authUsers",children:"solicitud para abrir una sesi\xf3n REST"}),", los identificadores de conexi\xf3n se ofrecen en el encabezado de la solicitud. Se llama al m\xe9todo base ",(0,i.jsx)(a.code,{children:"On REST Authentication"})," para poder evaluar estos identificadores. Puede utilizar la lista de usuarios de la base 4D o puede utilizar su propia tabla de identificadores. Para obtener m\xe1s informaci\xf3n, consulte la ",(0,i.jsx)(a.a,{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html",children:"documentaci\xf3n"})," del m\xe9todo base ",(0,i.jsx)(a.code,{children:"On REST Authentication"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"exponer-tablas-y-campos",children:"Exponer tablas y campos"}),"\n",(0,i.jsx)(a.p,{children:"Una vez que los servicios REST sean activados en la base 4D, por defecto una sesi\xf3n REST puede acceder a todas las tablas y los campos del datastore, y as\xed utilizar sus datos. Por ejemplo, si su base de datos contiene una tabla [Employee], es posible escribir:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,i.jsx)(a.p,{children:"Esta petici\xf3n devolver\xe1 todos los empleados cuyo campo de salario sea superior a 10000."}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:'Las tablas y/o campos 4D que tienen el atributo "Invisible" tambi\xe9n se exponen en REST por defecto.'}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Si desea personalizar los objetos del datastore accesibles a trav\xe9s de REST, debe desactivar la exposici\xf3n de cada tabla y/o campo que desee ocultar. Cuando una petici\xf3n REST intenta acceder a un recurso no autorizado, 4D devuelve un error."}),"\n",(0,i.jsx)(a.h3,{id:"exponer-las-tablas",children:"Exponer las tablas"}),"\n",(0,i.jsx)(a.p,{children:"Por defecto, todas las tablas se exponen en REST."}),"\n",(0,i.jsx)(a.p,{children:"Por razones de seguridad, es posible que desee exponer s\xf3lo ciertas tablas de su almac\xe9n de datos a las llamadas REST. Por ejemplo, si ha creado una tabla [Users] que almacena los nombres de usuario y las contrase\xf1as, ser\xeda mejor no exponerla."}),"\n",(0,i.jsx)(a.p,{children:"Para eliminar la exposici\xf3n REST de una tabla:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Visualice el inspector de tablas en el editor de estructuras y seleccione la tabla que desea modificar."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Uncheck the ",(0,i.jsx)(a.strong,{children:"Expose as REST resource"})," option: ",(0,i.jsx)(a.img,{alt:"alt-text",src:s(206931).Z+"",width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"exponer-los-campos",children:"Exponer los campos"}),"\n",(0,i.jsx)(a.p,{children:"Por defecto, todos los campos de una base 4D se exponen en REST."}),"\n",(0,i.jsx)(a.p,{children:"Es posible que no quiera exponer ciertos campos de sus tablas a REST. Por ejemplo, es posible que no quiera exponer el campo [Employees]Salary."}),"\n",(0,i.jsx)(a.p,{children:"Para eliminar la exposici\xf3n REST de un campo:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Visualice el inspector de campo en el editor de estructuras y seleccione el campo a modificar."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Desmarque la opci\xf3n ",(0,i.jsx)(a.strong,{children:"Exponer como recurso REST"})," para el campo. ",(0,i.jsx)(a.img,{alt:"alt-text",src:s(326044).Z+"",width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Para que un campo sea accesible a trav\xe9s de REST, la tabla padre tambi\xe9n debe serlo. Si la tabla padre no est\xe1 expuesta, ninguno de sus campos lo estar\xe1, independientemente de su estado."}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79880:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},326044:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},206931:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},250065:function(e,a,s){s.d(a,{Z:function(){return t},a:function(){return r}});var n=s(667294);let i={},o=n.createContext(i);function r(e){let a=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);