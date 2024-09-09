/*! For license information please see 898225d6.78cfba58.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72021],{636457:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=n(474848),r=n(28453);const d={id:"privileges",title:"Privilegios"},a=void 0,o={id:"ORDA/privileges",title:"Privilegios",description:"Proteger los datos a la vez que se permite un acceso r\xe1pido y sencillo a los usuarios autorizados es un reto importante para las aplicaciones web. La arquitectura de seguridad ORDA se implementa en el coraz\xf3n de su almac\xe9n de datos y le permite definir privilegios espec\xedficos a todas las sesiones de usuario para los distintos recursos de su proyecto (datastore, dataclasses, funciones, etc.).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/es/20/ORDA/privileges",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"privileges",title:"Privilegios"},sidebar:"docs",previous:{title:"Utilizar un almac\xe9n de datos remoto",permalink:"/docs/es/20/ORDA/datastores"},next:{title:"Glosario",permalink:"/docs/es/20/ORDA/glossary"}},l={},c=[{value:"Generalidades",id:"generalidades",level:2},{value:"Resources",id:"resources",level:2},{value:"Acciones de autorizaci\xf3n",id:"acciones-de-autorizaci\xf3n",level:2},{value:"Privilegios y roles",id:"privilegios-y-roles",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"archivo <code>roles.json</code>",id:"archivo-rolesjson",level:2},{value:"Archivo <code>Roles_Errors.json</code>",id:"archivo-roles_errorsjson",level:3},{value:"Inicializaci\xf3n de privilegios para el despliegue",id:"inicializaci\xf3n-de-privilegios-para-el-despliegue",level:2}];function t(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Proteger los datos a la vez que se permite un acceso r\xe1pido y sencillo a los usuarios autorizados es un reto importante para las aplicaciones web. La arquitectura de seguridad ORDA se implementa en el coraz\xf3n de su almac\xe9n de datos y le permite definir privilegios espec\xedficos a todas las sesiones de usuario para los distintos recursos de su proyecto (datastore, dataclasses, funciones, etc.)."}),"\n",(0,i.jsx)(s.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,i.jsx)(s.p,{children:"La arquitectura de seguridad ORDA se basa en los conceptos de privilegios, acciones de permiso (read, create, etc.) y recursos."}),"\n",(0,i.jsxs)(s.p,{children:["Cuando los usuarios se registran, su sesi\xf3n se carga autom\xe1ticamente con los privilegios asociados. Los privilegios se asignan a la sesi\xf3n utilizando la funci\xf3n ",(0,i.jsx)(s.a,{href:"/docs/es/20/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"session.setPrivileges()"})}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Cada solicitud de usuario enviada dentro de la sesi\xf3n se eval\xfaa en funci\xf3n de los privilegios definidos en el archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," del proyecto."]}),"\n",(0,i.jsx)(s.p,{children:"Si un usuario intenta ejecutar una acci\xf3n y no tiene los derechos de acceso adecuados, se genera un error de privilegio o, en el caso de que falte el permiso de Lectura en los atributos, no se env\xedan."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"esquema",src:n(479444).A+"",width:"960",height:"540"})}),"\n",(0,i.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(s.p,{children:"Puede asignar acciones de permiso espec\xedficas a los siguientes recursos en su proyecto:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"el almac\xe9n de datos"}),"\n",(0,i.jsx)(s.li,{children:"una clase de datos"}),"\n",(0,i.jsx)(s.li,{children:"un atributo (incluidos los calculados y los alias)"}),"\n",(0,i.jsx)(s.li,{children:"una funci\xf3n de clase de modelo de datos"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Cada vez que se accede a un recurso dentro de una sesi\xf3n (sin importar la forma en que se acceda), 4D verifica que la sesi\xf3n tenga los permisos apropiados y rechaza el acceso si no est\xe1 autorizado."}),"\n",(0,i.jsx)(s.p,{children:"Una acci\xf3n de permiso definida en un nivel determinado se hereda por defecto en los niveles inferiores, pero se pueden establecer varios permisos:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Una acci\xf3n de permiso definida a nivel de almac\xe9n de datos se asigna autom\xe1ticamente a todas las clases de datos."}),"\n",(0,i.jsx)(s.li,{children:"Una acci\xf3n de permiso definida a nivel de clase de datos anula la configuraci\xf3n del almac\xe9n de datos (si existe). Por defecto, todos los atributos de la clase de datos heredan de los permisos de la clase de datos."}),"\n",(0,i.jsx)(s.li,{children:'A diferencia de los permisos de clase de datos, una acci\xf3n de permiso definida a nivel de atributo no anula los permisos de clase de datos padre, sino que se a\xf1ade a ellos. Por ejemplo, si asign\xf3 el privilegio "general" a una clase de datos y el privilegio "detail" a un atributo de la clase de datos, tanto el privilegio "general" como el privilegio "detail" deben definirse en la sesi\xf3n para acceder al atributo.'}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"acciones-de-autorizaci\xf3n",children:"Acciones de autorizaci\xf3n"}),"\n",(0,i.jsx)(s.p,{children:"Las acciones disponibles est\xe1n relacionadas con el recurso de destino."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Acciones"}),(0,i.jsx)(s.th,{children:"Almac\xe9n de datos"}),(0,i.jsx)(s.th,{children:"dataclass"}),(0,i.jsx)(s.th,{children:"atributo"}),(0,i.jsx)(s.th,{children:"funci\xf3n de modelo de datos"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"create"})}),(0,i.jsx)(s.td,{children:"Crear entidad en cualquier clase de datos"}),(0,i.jsx)(s.td,{children:"Crear entidad en esta clase de datos"}),(0,i.jsx)(s.td,{children:"Crea una entidad con un valor diferente del valor por defecto permitido para este atributo (ignorado para atributos alias)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"read"})}),(0,i.jsx)(s.td,{children:"Leer atributos en cualquier dataclass"}),(0,i.jsx)(s.td,{children:"Leer atributos en esta clase de datos"}),(0,i.jsx)(s.td,{children:"Lea el contenido de este atributo"}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"update"})}),(0,i.jsx)(s.td,{children:"Actualizar atributos en cualquier clase de datos."}),(0,i.jsx)(s.td,{children:"Actualiza los atributos de esta clase de datos."}),(0,i.jsx)(s.td,{children:"Actualiza el contenido de este atributo (ignorado para atributos alias)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"drop"})}),(0,i.jsx)(s.td,{children:"Borrar datos en cualquier clase de datos."}),(0,i.jsx)(s.td,{children:"Borrar los datos de esta clase de datos."}),(0,i.jsx)(s.td,{children:"Eliminar un valor no nulo para este atributo (excepto para alias y atributo calculado)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"execute"})}),(0,i.jsx)(s.td,{children:"Ejecutar toda funci\xf3n en el proyecto (almac\xe9n de datos, clase de datos, selecci\xf3n de entidades, entidad)"}),(0,i.jsx)(s.td,{children:"Ejecuta cualquier funci\xf3n en la clase de datos. Las funciones dataclass, las funciones entidad y las funciones selecci\xf3n de entidades se tratan como funciones dataclass"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"Ejecutar esta funci\xf3n"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"describe"})}),(0,i.jsx)(s.td,{children:"Todas las clases de datos est\xe1n disponibles en /rest/$catalog API"}),(0,i.jsx)(s.td,{children:"Esta dataclass est\xe1 disponible en la /rest/$catalog API"}),(0,i.jsx)(s.td,{children:"Este atributo est\xe1 disponible en la API /rest/$catalog."}),(0,i.jsx)(s.td,{children:"Esta funci\xf3n dataclass est\xe1 disponible en la API /rest/$catalog"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"promote"})}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"Asocia un privilegio determinado durante la ejecuci\xf3n de la funci\xf3n. El privilegio se a\xf1ade temporalmente a la sesi\xf3n y se elimina al final de la ejecuci\xf3n de la funci\xf3n. Por seguridad, s\xf3lo se a\xf1ade el privilegio al proceso que ejecuta la funci\xf3n, no a toda la sesi\xf3n."})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Un alias puede leerse tan pronto como los privilegios de sesi\xf3n permitan el acceso al propio alias, aunque los privilegios de sesi\xf3n no permitan el acceso a los atributos que resuelven el alias."}),"\n",(0,i.jsx)(s.li,{children:"Se puede acceder a un atributo calculado aunque no haya permisos en los atributos sobre los que se crea."}),"\n",(0,i.jsxs)(s.li,{children:["Valores por defecto: en la implementaci\xf3n actual, solo ",(0,i.jsx)(s.em,{children:"Null"})," est\xe1 disponible como valor por defecto."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"La definici\xf3n de permisos requiere ser coherente, en particular:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["los permisos ",(0,i.jsx)(s.strong,{children:"update"})," y ",(0,i.jsx)(s.strong,{children:"drop"})," tambi\xe9n necesitan el permiso ",(0,i.jsx)(s.strong,{children:"read"})," (pero ",(0,i.jsx)(s.strong,{children:"create"})," no lo necesita)"]}),"\n",(0,i.jsxs)(s.li,{children:["el permiso ",(0,i.jsx)(s.strong,{children:"promote"})," tambi\xe9n necesita el permiso ",(0,i.jsx)(s.strong,{children:"describe"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"privilegios-y-roles",children:"Privilegios y roles"}),"\n",(0,i.jsxs)(s.p,{children:["Un **privilegio ** es la capacidad t\xe9cnica de ejecutar **acciones ** en **recursos **, mientras que un ",(0,i.jsx)(s.strong,{children:"rol"}),' es un privilegio publicado para ser utilizado por un administrador. B\xe1sicamente, un rol re\xfane varios privilegios para definir un perfil de usuario empresarial. Por ejemplo, "manageInvoices" podr\xeda ser un privilegio mientras que "secretary" podr\xeda ser un rol (que incluye "manageInvoices" y otros privilegios).']}),"\n",(0,i.jsx)(s.p,{children:'Un privilegio o un rol pueden asociarse a varias combinaciones "acci\xf3n + recurso". Se pueden asociar varios privilegios a una acci\xf3n. Un privilegio puede incluir otros privilegios.'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Usted ",(0,i.jsx)(s.strong,{children:"crea"})," privilegios y/o roles en el archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," (ver abajo). ",(0,i.jsx)(s.strong,{children:"Configura"})," su alcance asign\xe1ndolos a acci\xf3n(es) de permiso aplicadas a recurso(s)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Usted ",(0,i.jsx)(s.strong,{children:"permite"})," privilegios y/o roles a cada sesi\xf3n de usuario utilizando la funci\xf3n ",(0,i.jsx)(s.a,{href:"/docs/es/20/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:".setPrivileges()"})})," de la clase ",(0,i.jsx)(s.code,{children:"Session"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(s.p,{children:"Para permitir un rol en una sesi\xf3n:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Est\xe1 autentificado como Invitado"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Est\xe1 autentificado como "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"archivo-rolesjson",children:["archivo ",(0,i.jsx)(s.code,{children:"roles.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["El archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," describe todos los par\xe1metros de seguridad del proyecto."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["En un contexto que no sea ",(0,i.jsx)(s.em,{children:"Qodly"})," (nube), debe crear este archivo en la siguiente ubicaci\xf3n: ",(0,i.jsx)(s.code,{children:"<project folder>/Project/Sources/"}),". Ver la secci\xf3n ",(0,i.jsx)(s.a,{href:"/docs/es/20/Project/architecture#sources",children:"Arquitectura"}),"."]})}),"\n",(0,i.jsxs)(s.p,{children:["La sintaxis del archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," es la siguiente:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Nombre de propiedad"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{children:"Obligatorio"}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privileges"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,i.jsx)(s.code,{children:"privilege"})]}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsx)(s.td,{children:"Lista de privilegios definidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].privilege"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Nombre del privilegio"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].includes"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de nombres de privilegios incluidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"roles"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,i.jsx)(s.code,{children:"role"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de roles definidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].role"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Nombre del rol"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].privileges"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de nombres de privilegios incluidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"permissions"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsx)(s.td,{children:"Lista de acciones permitidas"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"allowed"}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,i.jsx)(s.code,{children:"permission"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de permisos permitidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].applyTo"}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsxs)(s.td,{children:["Targeted ",(0,i.jsx)(s.a,{href:"#resources",children:"resource"})," name"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].type"}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsxs)(s.td,{children:["tipo de ",(0,i.jsx)(s.a,{href:"#resources",children:"Recurso"}),': "datastore", "dataclass", "attribute", "method"']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].read"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].create"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].update"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].drop"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].describe"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].execute"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].promote"}),(0,i.jsx)(s.td,{children:"Colecci\xf3n de cadenas"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privilegios"})]})]})]}),"\n",(0,i.jsx)(s.admonition,{title:"Recordatorio",type:"caution",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'El nombre de privilegio "WebAdmin" est\xe1 reservado a la aplicaci\xf3n. No se recomienda utilizar este nombre para los privilegios personalizados.'}),"\n",(0,i.jsxs)(s.li,{children:["los nombres de ",(0,i.jsx)(s.code,{children:"privileges"})," y ",(0,i.jsx)(s.code,{children:"roles"})," son insensibles a may\xfasculas y min\xfasculas."]}),"\n"]})}),"\n",(0,i.jsxs)(s.h3,{id:"archivo-roles_errorsjson",children:["Archivo ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["El archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," es analizado por 4D al inicio. Debe reiniciar la aplicaci\xf3n si desea que se tengan en cuenta las modificaciones en este archivo."]}),"\n",(0,i.jsxs)(s.p,{children:["En caso de error(es) al analizar el archivo ",(0,i.jsx)(s.code,{children:"roles.json"}),", 4D carga el proyecto pero desactiva la protecci\xf3n de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. Se genera un archivo de error llamado ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})," en la carpeta ",(0,i.jsxs)(s.a,{href:"/docs/es/20/Project/architecture#logs",children:[(0,i.jsx)(s.code,{children:"Logs"})," del proyecto"]})," y describe la(s) l\xednea(s) de error. Este archivo se elimina autom\xe1ticamente cuando el archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," deja de contener errores."]}),"\n",(0,i.jsxs)(s.p,{children:["Se recomienda comprobar al inicio si existe un archivo ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})," en la carpeta ",(0,i.jsx)(s.a,{href:"/docs/es/20/Project/architecture#logs",children:"Logs"}),", lo que significa que se ha producido un error de an\xe1lisis y que los accesos no estar\xe1n limitados. Puede escribir, por ejemplo:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // puede evitar que el proyecto se abra\n ALERT("El archivo roles.json est\xe1 malformado o contiene inconsistencias, la aplicaci\xf3n se cerrar\xe1.")\n QUIT 4D\nEnd if \n'})}),"\n",(0,i.jsx)(s.h2,{id:"inicializaci\xf3n-de-privilegios-para-el-despliegue",children:"Inicializaci\xf3n de privilegios para el despliegue"}),"\n",(0,i.jsxs)(s.p,{children:["Por defecto, si no se definen par\xe1metros espec\xedficos en el archivo ",(0,i.jsx)(s.code,{children:"roles.json"}),", los accesos no est\xe1n limitados. Esta configuraci\xf3n le permite desarrollar la aplicaci\xf3n sin tener que preocuparse por los accesos."]}),"\n",(0,i.jsxs)(s.p,{children:["Sin embargo, cuando la aplicaci\xf3n est\xe1 a punto de desplegarse, una buena pr\xe1ctica es bloquear todos los privilegios y, a continuaci\xf3n, configurar el archivo para que s\xf3lo abra las partes controladas a las sesiones autorizadas. Para bloquear todos los privilegios en todos los recursos, coloque el siguiente archivo ",(0,i.jsx)(s.code,{children:"roles.json"})," en la carpeta de su proyecto (incluye ejemplos de m\xe9todos):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},221020:(e,s,n)=>{var i=n(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var i,d={},c=null,t=null;for(i in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(t=s.ref),s)a.call(s,i)&&!l.hasOwnProperty(i)&&(d[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===d[i]&&(d[i]=s[i]);return{$$typeof:r,type:e,key:c,ref:t,props:d,_owner:o.current}}s.Fragment=d,s.jsx=c,s.jsxs=c},474848:(e,s,n)=>{e.exports=n(221020)},479444:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var i=n(296540);const r={},d=i.createContext(r);function a(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);