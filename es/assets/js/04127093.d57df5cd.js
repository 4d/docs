"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28498"],{601340:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"ORDA/privileges","title":"Privilegios","description":"Proteger los datos a la vez que se permite un acceso r\xe1pido y sencillo a los usuarios autorizados es un reto importante para las aplicaciones web. La arquitectura de seguridad ORDA se implementa en el coraz\xf3n de su almac\xe9n de datos y le permite definir privilegios espec\xedficos a todas las sesiones usuario REST o web para los distintos recursos de su proyecto (datastore, dataclasses, funciones, etc.).","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ORDA/privileges.md","sourceDirName":"ORDA","slug":"/ORDA/privileges","permalink":"/docs/es/ORDA/privileges","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"privileges","title":"Privilegios"},"sidebar":"docs","previous":{"title":"Bases de datos remotas","permalink":"/docs/es/ORDA/datastores"},"next":{"title":"Optimizaci\xf3n cliente/servidor","permalink":"/docs/es/ORDA/client-server-optimization"}}'),r=s("785893"),o=s("250065");let d={id:"privileges",title:"Privilegios"},a=void 0,l={},c=[{value:"Generalidades",id:"generalidades",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3},{value:"Resources",id:"resources",level:2},{value:"Acciones de autorizaci\xf3n",id:"acciones-de-autorizaci\xf3n",level:2},{value:"Privilegios y roles",id:"privilegios-y-roles",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"archivo <code>roles.json</code>",id:"archivo-rolesjson",level:2},{value:"Archivo por defecto",id:"archivo-por-defecto",level:3},{value:"Sintaxis",id:"sintaxis",level:3},{value:"Archivo <code>Roles_Errors.json</code>",id:"archivo-roles_errorsjson",level:3},{value:"Ejemplo de configuraci\xf3n de privilegios",id:"ejemplo-de-configuraci\xf3n-de-privilegios",level:2}];function t(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Proteger los datos a la vez que se permite un acceso r\xe1pido y sencillo a los usuarios autorizados es un reto importante para las aplicaciones web. La arquitectura de seguridad ORDA se implementa en el coraz\xf3n de su almac\xe9n de datos y le permite definir privilegios espec\xedficos a todas las sesiones usuario REST o web para los distintos recursos de su proyecto (datastore, dataclasses, funciones, etc.)."}),"\n",(0,r.jsx)(n.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,r.jsx)(n.p,{children:"La arquitectura de seguridad ORDA se basa en los conceptos de privilegios, acciones de permiso (read, create, etc.) y recursos."}),"\n",(0,r.jsxs)(n.p,{children:["Cuando los usuarios web o REST se registran, su sesi\xf3n se carga autom\xe1ticamente con los privilegios asociados. Los privilegios se asignan a la sesi\xf3n mediante la funci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,r.jsx)(n.code,{children:"session.setPrivileges()"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cada solicitud de usuario enviada dentro de la sesi\xf3n se eval\xfaa en funci\xf3n de los privilegios definidos en el archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," del proyecto."]}),"\n",(0,r.jsx)(n.p,{children:"Si un usuario intenta ejecutar una acci\xf3n y no tiene los derechos de acceso adecuados, se genera un error de privilegio o, en el caso de que falte el permiso de Lectura en los atributos, no se env\xedan."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"schema",src:s(593303).Z+"",width:"960",height:"540"})}),"\n",(0,r.jsx)(n.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:["Para una descripci\xf3n detallada de toda la arquitectura de permisos, por favor lea el blog ",(0,r.jsx)(n.a,{href:"https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/",children:(0,r.jsx)(n.strong,{children:"Filtrar acceso a sus datos con un sistema completo de permisos"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(n.p,{children:"Puede asignar acciones de permiso espec\xedficas a los siguientes recursos en su proyecto:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"el almac\xe9n de datos"}),"\n",(0,r.jsx)(n.li,{children:"una clase de datos"}),"\n",(0,r.jsx)(n.li,{children:"un atributo (incluidos los calculados y los alias)"}),"\n",(0,r.jsx)(n.li,{children:"una funci\xf3n de clase de modelo de datos"}),"\n",(0,r.jsxs)(n.li,{children:["una funci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/REST/singleton",children:"singleton"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Cada vez que se accede a un recurso dentro de una sesi\xf3n (sin importar la forma en que se acceda), 4D verifica que la sesi\xf3n tenga los permisos apropiados y rechaza el acceso si no est\xe1 autorizado."}),"\n",(0,r.jsx)(n.p,{children:"Una acci\xf3n de permiso definida en un nivel determinado se hereda por defecto en los niveles inferiores, pero se pueden establecer varios permisos:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Una acci\xf3n de permiso definida a nivel de almac\xe9n de datos se asigna autom\xe1ticamente a todas las clases de datos."}),"\n",(0,r.jsx)(n.li,{children:"Una acci\xf3n de permiso definida a nivel de clase de datos anula la configuraci\xf3n del almac\xe9n de datos (si existe). Por defecto, todos los atributos de la clase de datos heredan de los permisos de la clase de datos."}),"\n",(0,r.jsx)(n.li,{children:'A diferencia de los permisos de clase de datos, una acci\xf3n de permiso definida a nivel de atributo no anula los permisos de clase de datos padre, sino que se a\xf1ade a ellos. Por ejemplo, si asign\xf3 el privilegio "general" a una clase de datos y el privilegio "detail" a un atributo de la clase de datos, tanto el privilegio "general" como el privilegio "detail" deben definirse en la sesi\xf3n para acceder al atributo.'}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Los permisos controlan el acceso a los objetos o funciones del almac\xe9n de datos. Si desea filtrar los datos le\xeddos seg\xfan alg\xfan criterio, puede considerar ",(0,r.jsx)(n.a,{href:"/docs/es/ORDA/entities#restricting-entity-selections",children:"restringir las selecciones de entidades"})," que puede ser m\xe1s apropiado en este caso."]})}),"\n",(0,r.jsx)(n.h2,{id:"acciones-de-autorizaci\xf3n",children:"Acciones de autorizaci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Las acciones disponibles est\xe1n relacionadas con el recurso de destino."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Acciones"}),(0,r.jsx)(n.th,{children:"Almac\xe9n de datos"}),(0,r.jsx)(n.th,{children:"dataclass"}),(0,r.jsx)(n.th,{children:"atributo"}),(0,r.jsx)(n.th,{children:"funci\xf3n del modelo de datos o funci\xf3n singleton"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"create"})}),(0,r.jsx)(n.td,{children:"Crear entidad en cualquier clase de datos"}),(0,r.jsx)(n.td,{children:"Crear entidad en esta clase de datos"}),(0,r.jsx)(n.td,{children:"Crea una entidad con un valor diferente del valor por defecto permitido para este atributo (ignorado para atributos alias)."}),(0,r.jsx)(n.td,{children:"n/a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"read"})}),(0,r.jsx)(n.td,{children:"Leer atributos en cualquier dataclass"}),(0,r.jsx)(n.td,{children:"Leer atributos en esta clase de datos"}),(0,r.jsx)(n.td,{children:"Lea el contenido de este atributo"}),(0,r.jsx)(n.td,{children:"n/a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"update"})}),(0,r.jsx)(n.td,{children:"Actualizar atributos en cualquier clase de datos."}),(0,r.jsx)(n.td,{children:"Actualiza los atributos de esta clase de datos."}),(0,r.jsx)(n.td,{children:"Actualiza el contenido de este atributo (ignorado para atributos alias)."}),(0,r.jsx)(n.td,{children:"n/a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"drop"})}),(0,r.jsx)(n.td,{children:"Borrar datos en cualquier clase de datos."}),(0,r.jsx)(n.td,{children:"Borrar los datos de esta clase de datos."}),(0,r.jsx)(n.td,{children:"Eliminar un valor no nulo para este atributo (excepto para alias y atributo calculado)."}),(0,r.jsx)(n.td,{children:"n/a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"execute"})}),(0,r.jsx)(n.td,{children:"Ejecutar toda funci\xf3n en el proyecto (almac\xe9n de datos, clase de datos, selecci\xf3n de entidades, entidad)"}),(0,r.jsx)(n.td,{children:"Ejecuta cualquier funci\xf3n en la clase de datos. Las funciones dataclass, las funciones entidad y las funciones selecci\xf3n de entidades se tratan como funciones dataclass"}),(0,r.jsx)(n.td,{children:"n/a"}),(0,r.jsx)(n.td,{children:"Ejecutar esta funci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"promote"})}),(0,r.jsx)(n.td,{children:"n/a"}),(0,r.jsx)(n.td,{children:"n/a"}),(0,r.jsx)(n.td,{children:"n/a"}),(0,r.jsx)(n.td,{children:"Asocia un privilegio determinado durante la ejecuci\xf3n de la funci\xf3n. El privilegio se a\xf1ade temporalmente a la sesi\xf3n y se elimina al final de la ejecuci\xf3n de la funci\xf3n. Por seguridad, s\xf3lo se a\xf1ade el privilegio al proceso que ejecuta la funci\xf3n, no a toda la sesi\xf3n."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Un alias puede leerse tan pronto como los privilegios de sesi\xf3n permitan el acceso al propio alias, aunque los privilegios de sesi\xf3n no permitan el acceso a los atributos que resuelven el alias."}),"\n",(0,r.jsx)(n.li,{children:"Se puede acceder a un atributo calculado aunque no haya permisos en los atributos sobre los que se crea."}),"\n",(0,r.jsxs)(n.li,{children:["Puede asignar una acci\xf3n de permiso a una clase singleton (tipo ",(0,r.jsx)(n.code,{children:"singleton"}),"), en cuyo caso se aplicar\xe1 a todas sus funciones expuestas, o a una funci\xf3n singleton (tipo ",(0,r.jsx)(n.code,{children:"singletonMethod"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Valores por defecto: en la implementaci\xf3n actual, solo ",(0,r.jsx)(n.em,{children:"Null"})," est\xe1 disponible como valor por defecto."]}),"\n",(0,r.jsxs)(n.li,{children:["In REST ",(0,r.jsx)(n.a,{href:"/docs/es/REST/authUsers#force-login-mode",children:"force login mode"}),", the ",(0,r.jsxs)(n.a,{href:"/docs/es/REST/authUsers#function-authentify",children:[(0,r.jsx)(n.code,{children:"authentify()"})," function"]})," is always executable by guest users, whatever the permissions configuration."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Setting permissions requires to be consistent, in particular ",(0,r.jsx)(n.strong,{children:"update"})," and ",(0,r.jsx)(n.strong,{children:"drop"})," permissions also need ",(0,r.jsx)(n.strong,{children:"read"})," permission (but ",(0,r.jsx)(n.strong,{children:"create"})," does not need it)."]}),"\n",(0,r.jsx)(n.h2,{id:"privilegios-y-roles",children:"Privilegios y roles"}),"\n",(0,r.jsxs)(n.p,{children:["Un **privilegio ** es la capacidad t\xe9cnica de ejecutar **acciones ** en **recursos **, mientras que un ",(0,r.jsx)(n.strong,{children:"rol"}),' es un privilegio publicado para ser utilizado por un administrador. B\xe1sicamente, un rol re\xfane varios privilegios para definir un perfil de usuario empresarial. Por ejemplo, "manageInvoices" podr\xeda ser un privilegio mientras que "secretary" podr\xeda ser un rol (que incluye "manageInvoices" y otros privilegios).']}),"\n",(0,r.jsx)(n.p,{children:'Un privilegio o un rol pueden asociarse a varias combinaciones "acci\xf3n + recurso". Se pueden asociar varios privilegios a una acci\xf3n. Un privilegio puede incluir otros privilegios.'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Usted ",(0,r.jsx)(n.strong,{children:"crea"})," privilegios y/o roles en el archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," (ver abajo). ",(0,r.jsx)(n.strong,{children:"Configura"})," su alcance asign\xe1ndolos a acci\xf3n(es) de permiso aplicadas a recurso(s)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Usted ",(0,r.jsx)(n.strong,{children:"autoriza"})," los privilegios y/o roles para cada sesi\xf3n usuario usando la funci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/API/SessionClass#setprivileges",children:(0,r.jsx)(n.code,{children:".setPrivileges()"})})," de la clase ",(0,r.jsx)(n.code,{children:"Session"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para permitir un rol en una sesi\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Est\xe1 autentificado como Invitado"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Est\xe1 autentificado como "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"archivo-rolesjson",children:["archivo ",(0,r.jsx)(n.code,{children:"roles.json"})]}),"\n",(0,r.jsxs)(n.p,{children:["El archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," describe todos los par\xe1metros de seguridad del proyecto."]}),"\n",(0,r.jsx)(n.h3,{id:"archivo-por-defecto",children:"Archivo por defecto"}),"\n",(0,r.jsxs)(n.p,{children:["Al crear un proyecto, se crea un archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," por defecto en la siguiente ubicaci\xf3n: ",(0,r.jsx)(n.code,{children:"<project folder>/Project/Sources/"})," (ver la secci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/Project/architecture#sources",children:"Architecture"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"El archivo por defecto tiene el siguiente contenido:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'\n{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [\n            {\n                "applyTo": "ds",\n                "type": "datastore",\n                "read": ["none"],\n                "create": ["none"],\n                "update": ["none"],\n                "drop": ["none"],\n                "execute": ["none"],\n                "promote": ["none"]                \n            }\n        ]\n    },\n\n    "forceLogin": true\n\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:['Para un nivel de seguridad m\xe1s alto, el privilegio "none" se asigna a todos los permisos en el datastore, por lo tanto el acceso de datos en todo el objeto ',(0,r.jsx)(n.code,{children:"ds"})," est\xe1 deshabilitado por defecto. Se recomienda no modificar ni utilizar este privilegio de bloqueo, sino agregar permisos espec\xedficos a cada recurso que desee poner a disposici\xf3n desde solicitudes web o REST (",(0,r.jsx)(n.a,{href:"#example-of-privilege-configuration",children:"ver ejemplo a continuaci\xf3n"}),")."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Cuando no se definen par\xe1metros espec\xedficos en el archivo ",(0,r.jsx)(n.code,{children:"roles.json"}),", los accesos no son limitados. Esta configuraci\xf3n le permite desarrollar la aplicaci\xf3n sin tener que preocuparse por los accesos, pero no se recomienda en entornos de producci\xf3n."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilidad",type:"note",children:(0,r.jsxs)(n.p,{children:["En versiones anteriores, el archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," no fue creado por defecto. A partir de 4D 20 R6, al abrir un proyecto existente que no contiene un archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," o los par\xe1metros ",(0,r.jsx)(n.code,{children:'"forceLogin": true'}),", el bot\xf3n ",(0,r.jsx)(n.strong,{children:"Activar la autenticaci\xf3n REST mediante la funci\xf3n ds.authentify()"})," est\xe1 disponible en la p\xe1gina ",(0,r.jsxs)(n.a,{href:"/docs/es/settings/web#access",children:[(0,r.jsx)(n.strong,{children:"Funcionalidades web"})," de la caja de di\xe1logo Par\xe1metros"]}),". Este bot\xf3n actualiza autom\xe1ticamente su configuraci\xf3n de seguridad (es posible que tenga que modificar su c\xf3digo, ",(0,r.jsx)(n.a,{href:"https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/",children:"ver esta publicaci\xf3n del blog"}),")."]})}),"\n",(0,r.jsx)(n.admonition,{title:"Qodly Studio",type:"note",children:(0,r.jsxs)(n.p,{children:["En Qodly Studio for 4D, el modo se puede definir utilizando la opci\xf3n ",(0,r.jsx)(n.a,{href:"/docs/es/WebServer/qodly-studio#force-login",children:(0,r.jsx)(n.strong,{children:"Forzar inicio de sesi\xf3n"})})," en el panel de Privilegios."]})}),"\n",(0,r.jsx)(n.h3,{id:"sintaxis",children:"Sintaxis"}),"\n",(0,r.jsxs)(n.p,{children:["La sintaxis del archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," es la siguiente:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre de propiedad"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Obligatorio"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"privileges"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Colecci\xf3n de objetos ",(0,r.jsx)(n.code,{children:"privilege"})]}),(0,r.jsx)(n.td,{children:"X"}),(0,r.jsx)(n.td,{children:"Lista de privilegios definidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].privilege"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Nombre del privilegio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].includes"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de nombres de privilegios incluidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"roles"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Colecci\xf3n de objetos ",(0,r.jsx)(n.code,{children:"role"})]}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de roles definidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].role"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Nombre del rol"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].privileges"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de nombres de privilegios incluidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"permissions"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"X"}),(0,r.jsx)(n.td,{children:"Lista de acciones permitidas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"allowed"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Colecci\xf3n de objetos ",(0,r.jsx)(n.code,{children:"permission"})]}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de permisos permitidos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].applyTo"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"X"}),(0,r.jsxs)(n.td,{children:["Targeted ",(0,r.jsx)(n.a,{href:"#resources",children:"resource"})," name"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].type"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"X"}),(0,r.jsxs)(n.td,{children:["Tipo de ",(0,r.jsx)(n.a,{href:"#resources",children:"recurso"}),': "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton"']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].read"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de privilegios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].create"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de privilegios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].update"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de privilegios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].drop"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de privilegios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].execute"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de privilegios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[].promote"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de cadenas"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Lista de privilegios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"forceLogin"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["True para habilitar el ",(0,r.jsx)(n.a,{href:"/docs/es/REST/authUsers#force-login-mode",children:'modo "forceLogin"'})]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Recordatorio",type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'El nombre de privilegio "WebAdmin" est\xe1 reservado a la aplicaci\xf3n. No se recomienda utilizar este nombre para los privilegios personalizados.'}),"\n",(0,r.jsxs)(n.li,{children:["los nombres de ",(0,r.jsx)(n.code,{children:"privileges"})," y ",(0,r.jsx)(n.code,{children:"roles"})," son insensibles a may\xfasculas y min\xfasculas."]}),"\n"]})}),"\n",(0,r.jsxs)(n.h3,{id:"archivo-roles_errorsjson",children:["Archivo ",(0,r.jsx)(n.code,{children:"Roles_Errors.json"})]}),"\n",(0,r.jsxs)(n.p,{children:["El archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," es analizado por 4D al inicio. Debe reiniciar la aplicaci\xf3n si desea que se tengan en cuenta las modificaciones en este archivo."]}),"\n",(0,r.jsxs)(n.p,{children:["En caso de error(es) al analizar el archivo ",(0,r.jsx)(n.code,{children:"roles.json"}),", 4D carga el proyecto pero desactiva la protecci\xf3n de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. Se genera un archivo de error llamado ",(0,r.jsx)(n.code,{children:"Roles_Errors.json"})," en la ",(0,r.jsx)(n.a,{href:"/docs/es/Project/architecture#logs",children:(0,r.jsx)(n.code,{children:"carpeta Logs del proyecto"})})," y describe la(s) l\xednea(s) de error. Este archivo se elimina autom\xe1ticamente cuando el archivo ",(0,r.jsx)(n.code,{children:"roles.json"})," deja de contener errores."]}),"\n",(0,r.jsxs)(n.p,{children:["Se recomienda comprobar al inicio si existe un archivo ",(0,r.jsx)(n.code,{children:"Roles_Errors.json"})," en la carpeta ",(0,r.jsx)(n.a,{href:"/docs/es/Project/architecture#logs",children:"Logs"}),", lo que significa que se ha producido un error de an\xe1lisis y que los accesos no estar\xe1n limitados. Puede escribir, por ejemplo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // puede evitar que el proyecto abra\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-de-configuraci\xf3n-de-privilegios",children:"Ejemplo de configuraci\xf3n de privilegios"}),"\n",(0,r.jsxs)(n.p,{children:['La buena pr\xe1ctica es mantener todos los datos bloqueados por defecto gracias al privilegio "none" y configurar el archivo ',(0,r.jsx)(n.code,{children:"roles.json"})," para abrir s\xf3lo las partes controladas a las sesiones autorizadas. Por ejemplo, para permitir algunos accesos a sesiones invitadas:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'\n{\n  "privileges": [\n    {\n      "privilege": "none",\n      "includes": []\n    }\n  ],\n  "roles": [],\n  "permissions": {\n    "allowed": [\n      {\n        "applyTo": "ds",\n        "type": "datastore",\n        "read": [\n          "none"\n        ],\n        "create": [\n          "none"\n        ],\n        "update": [\n          "none"\n        ],\n        "drop": [\n          "none"\n        ],\n        "execute": [\n          "none"\n        ],\n        "promote": [\n          "none"\n        ]\n      },\n      {\n        "applyTo": "ds.loginAs",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.hasPrivilege",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.clearPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.isGuest",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.getPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "ds.setAllPrivileges",\n        "type": "method",\n        "execute": [\n          "guest"\n        ]\n      },\n      {\n        "applyTo": "mySingletonClass.createID",\n        "type": "singletonMethod",\n        "execute": [\n          "guest"\n        ]\n      }\n    ]\n  },\n  "forceLogin": true\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},593303:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var i=s(667294);let r={},o=i.createContext(r);function d(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);