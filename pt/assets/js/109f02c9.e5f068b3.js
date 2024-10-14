"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25975],{123339:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=n(474848),i=n(28453);const r={id:"privileges",title:"Privil\xe9gios"},o=void 0,d={id:"ORDA/privileges",title:"Privil\xe9gios",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/pt/20-R5/ORDA/privileges",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"privileges",title:"Privil\xe9gios"},sidebar:"docs",previous:{title:"Datastores remotos",permalink:"/docs/pt/20-R5/ORDA/datastores"},next:{title:"Otimiza\xe7\xe3o cliente/servidor",permalink:"/docs/pt/20-R5/ORDA/client-server-optimization"}},a={},l=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Resources",id:"resources",level:2},{value:"Ac\xe7\xf5es de autoriza\xe7\xe3o",id:"ac\xe7\xf5es-de-autoriza\xe7\xe3o",level:2},{value:"Privil\xe9gios e roles",id:"privil\xe9gios-e-roles",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"archivo <code>roles.json</code>",id:"archivo-rolesjson",level:2},{value:"Archivo <code>Roles_Errors.json</code>",id:"archivo-roles_errorsjson",level:3},{value:"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o",id:"inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."}),"\n",(0,t.jsx)(s.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,t.jsx)(s.p,{children:"The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources."}),"\n",(0,t.jsxs)(s.p,{children:["When web users or REST users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:"session.setPrivileges()"})})," function."]}),"\n",(0,t.jsxs)(s.p,{children:["Cada solicitud de usuario enviada dentro de la sesi\xf3n se eval\xfaa en funci\xf3n de los privilegios definidos en el archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," del proyecto."]}),"\n",(0,t.jsx)(s.p,{children:"If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"schema",src:n(297720).A+"",width:"960",height:"540"})}),"\n",(0,t.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsx)(s.p,{children:"You can assign specific permission actions to the following resources in your project:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"o armazenamento de dados"}),"\n",(0,t.jsx)(s.li,{children:"uma classe de dados"}),"\n",(0,t.jsx)(s.li,{children:"um atributo (inclusive calculado e aliases)"}),"\n",(0,t.jsx)(s.li,{children:"uma fun\xe7\xe3o de classe de modelo de dados"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized."}),"\n",(0,t.jsx)(s.p,{children:"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A permission action defined at the datastore level is automatically assigned to all dataclasses."}),"\n",(0,t.jsx)(s.li,{children:"Uma a\xe7\xe3o de permiss\xe3o definida ao n\xedvel da classe de dados substitui a defini\xe7\xe3o do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s)."}),"\n",(0,t.jsx)(s.li,{children:'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.'}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["As permiss\xf5es controlam o acesso aos objetos do datastore. Si desea filtrar los datos le\xeddos seg\xfan alg\xfan criterio, puede considerar ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/ORDA/entities#restricting-entity-selections",children:"restringir las selecciones de entidades"})," que puede ser m\xe1s apropiado en este caso."]})}),"\n",(0,t.jsx)(s.h2,{id:"ac\xe7\xf5es-de-autoriza\xe7\xe3o",children:"Ac\xe7\xf5es de autoriza\xe7\xe3o"}),"\n",(0,t.jsx)(s.p,{children:"As a\xe7\xf5es dispon\xedveis est\xe3o relacionadas com o recurso alvo."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Ac\xe7\xf5es"}),(0,t.jsx)(s.th,{children:"armaz\xe9m de dados"}),(0,t.jsx)(s.th,{children:"dataclass"}),(0,t.jsx)(s.th,{children:"atributo"}),(0,t.jsx)(s.th,{children:"fun\xe7\xe3o de modelo de dados"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"create"})}),(0,t.jsx)(s.td,{children:"Criar entidade em qualquer classe de dados"}),(0,t.jsx)(s.td,{children:"Criar entidade nesta classe de dados"}),(0,t.jsx)(s.td,{children:"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."}),(0,t.jsx)(s.td,{children:"n/a"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"read"})}),(0,t.jsx)(s.td,{children:"Ler atributos em qualquer dataclass"}),(0,t.jsx)(s.td,{children:"Ler atributos nesta classe de dados"}),(0,t.jsx)(s.td,{children:"Leia o conte\xfado desse atributo"}),(0,t.jsx)(s.td,{children:"n/a"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"update"})}),(0,t.jsx)(s.td,{children:"Atualizar atributos em qualquer classe de dados."}),(0,t.jsx)(s.td,{children:"Atualiza os atributos nesta classe de dados."}),(0,t.jsx)(s.td,{children:"Atualiza o conte\xfado deste atributo (ignorado para atributos alias)."}),(0,t.jsx)(s.td,{children:"n/a"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"drop"})}),(0,t.jsx)(s.td,{children:"Eliminar dados em qualquer classe de dados."}),(0,t.jsx)(s.td,{children:"Eliminar dados nesta classe de dados."}),(0,t.jsx)(s.td,{children:"Delete a not null value for this attribute (except for alias and computed attribute)."}),(0,t.jsx)(s.td,{children:"n/a"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"execute"})}),(0,t.jsxs)(s.td,{children:["Execute any function on the project (datastore (except ",(0,t.jsx)(s.code,{children:"authentify()"}),", see Notes below), dataclass, entity selection, entity)"]}),(0,t.jsx)(s.td,{children:"Executa qualquer fun\xe7\xe3o na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"}),(0,t.jsx)(s.td,{children:"n/a"}),(0,t.jsx)(s.td,{children:"Executar esta fun\xe7\xe3o"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"describe"})}),(0,t.jsx)(s.td,{children:"Todas as classes de dados est\xe3o dispon\xedveis na /rest/$catalog API"}),(0,t.jsx)(s.td,{children:"Esta dataclass est\xe1 dispon\xedvel na API /rest/$catalog"}),(0,t.jsx)(s.td,{children:"Esse atributo est\xe1 dispon\xedvel na API /rest/$catalog."}),(0,t.jsx)(s.td,{children:"Esta fun\xe7\xe3o de classe de dados est\xe1 dispon\xedvel na API /rest/$catalog"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"promote"})}),(0,t.jsx)(s.td,{children:"n/a"}),(0,t.jsx)(s.td,{children:"n/a"}),(0,t.jsx)(s.td,{children:"n/a"}),(0,t.jsx)(s.td,{children:"Associa um determinado privil\xe9gio durante a execu\xe7\xe3o da fun\xe7\xe3o. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session."})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias."}),"\n",(0,t.jsx)(s.li,{children:"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."}),"\n",(0,t.jsxs)(s.li,{children:["Valores por defecto: en la implementaci\xf3n actual, solo ",(0,t.jsx)(s.em,{children:"Null"})," est\xe1 disponible como valor por defecto."]}),"\n",(0,t.jsxs)(s.li,{children:["No REST ",(0,t.jsx)(s.a,{href:"../REST/authUsers.md/#force-login-mode",children:"modo de login"}),", a ",(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/REST/authUsers#function-authentify",children:["fun\xe7\xe3o ",(0,t.jsx)(s.code,{children:"authentify()"})]})," \xe9 sempre execut\xe1vel por usu\xe1rios convidados, independentemente da configura\xe7\xe3o das permiss\xf5es."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"A defini\xe7\xe3o das permiss\xf5es deve ser coerente, nomeadamente:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["los permisos ",(0,t.jsx)(s.strong,{children:"update"})," y ",(0,t.jsx)(s.strong,{children:"drop"})," tambi\xe9n necesitan el permiso ",(0,t.jsx)(s.strong,{children:"read"})," (pero ",(0,t.jsx)(s.strong,{children:"create"})," no lo necesita)"]}),"\n",(0,t.jsxs)(s.li,{children:["el permiso ",(0,t.jsx)(s.strong,{children:"promote"})," tambi\xe9n necesita el permiso ",(0,t.jsx)(s.strong,{children:"describe"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"privil\xe9gios-e-roles",children:"Privil\xe9gios e roles"}),"\n",(0,t.jsxs)(s.p,{children:["Un **privilegio ** es la capacidad t\xe9cnica de ejecutar **acciones ** en **recursos **, mientras que un ",(0,t.jsx)(s.strong,{children:"rol"}),' es un privilegio publicado para ser utilizado por un administrador. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).']}),"\n",(0,t.jsx)(s.p,{children:'A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados v\xe1rios privil\xe9gios a uma a\xe7\xe3o. Um privil\xe9gio pode incluir outros privil\xe9gios.'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Usted ",(0,t.jsx)(s.strong,{children:"crea"})," privilegios y/o roles en el archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," (ver abajo). ",(0,t.jsx)(s.strong,{children:"Configura"})," su alcance asign\xe1ndolos a acci\xf3n(es) de permiso aplicadas a recurso(s)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Voc\xea ",(0,t.jsx)(s.strong,{children:"permite"})," privil\xe9gios e/ou fun\xe7\xf5es para cada sess\xe3o usu\xe1rio usando a fun\xe7\xe3o ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/API/SessionClass#setprivileges",children:(0,t.jsx)(s.code,{children:".setPrivileges()"})})," da classe ",(0,t.jsx)(s.code,{children:"Session"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(s.p,{children:"Para permitir uma fun\xe7\xe3o em uma sess\xe3o:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs.UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,t.jsxs)(s.h2,{id:"archivo-rolesjson",children:["archivo ",(0,t.jsx)(s.code,{children:"roles.json"})]}),"\n",(0,t.jsxs)(s.p,{children:["El archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," describe todos los par\xe1metros de seguridad del proyecto."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["En un contexto que no sea ",(0,t.jsx)(s.em,{children:"Qodly"})," (nube), debe crear este archivo en la siguiente ubicaci\xf3n: ",(0,t.jsx)(s.code,{children:"<project folder>/Project/Sources/"}),". Ver la secci\xf3n ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/Project/architecture#sources",children:"Arquitectura"}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["La sintaxis del archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," es la siguiente:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Nome da propriedade"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{children:"Obrigat\xf3rio"}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"privileges"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,t.jsx)(s.code,{children:"privilege"})]}),(0,t.jsx)(s.td,{children:"X"}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios definidos"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].privilege"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Nome do privil\xe9gio"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].includes"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de nomes de privil\xe9gios inclu\xeddos"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"roles"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,t.jsx)(s.code,{children:"role"})]}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de roles definidos"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].role"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Nome da role"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].privileges"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de nomes de privil\xe9gios inclu\xeddos"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"permissions"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"X"}),(0,t.jsx)(s.td,{children:"Lista de ac\xe7\xf5es permitidas"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"allowed"}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["Colecci\xf3n de objetos ",(0,t.jsx)(s.code,{children:"permission"})]}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de permiss\xf5es permitidas"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].applyTo"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"X"}),(0,t.jsxs)(s.td,{children:["Targeted ",(0,t.jsx)(s.a,{href:"#resources",children:"resource"})," name"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].type"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"X"}),(0,t.jsxs)(s.td,{children:["tipo de ",(0,t.jsx)(s.a,{href:"#resources",children:"Recurso"}),': "datastore", "dataclass", "attribute", "method"']})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].read"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].create"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].update"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].drop"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].describe"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].execute"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"[].promote"}),(0,t.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"forceLogin"}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"Par\xe2metros"}),(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:["True para habilitar el ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/REST/authUsers#force-login-mode",children:'modo "forceLogin"'})]})]})]})]}),"\n",(0,t.jsx)(s.admonition,{title:"Lembrete",type:"caution",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'O nome do privil\xe9gio "WebAdmin" est\xe1 reservado \xe0 aplica\xe7\xe3o. N\xe3o se recomenda a utiliza\xe7\xe3o deste nome para privil\xe9gios personalizados.'}),"\n",(0,t.jsxs)(s.li,{children:["los nombres de ",(0,t.jsx)(s.code,{children:"privileges"})," y ",(0,t.jsx)(s.code,{children:"roles"})," son insensibles a may\xfasculas y min\xfasculas."]}),"\n"]})}),"\n",(0,t.jsxs)(s.h3,{id:"archivo-roles_errorsjson",children:["Archivo ",(0,t.jsx)(s.code,{children:"Roles_Errors.json"})]}),"\n",(0,t.jsxs)(s.p,{children:["El archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," es analizado por 4D al inicio. You need to restart the application if you want modifications in this file to be taken into account."]}),"\n",(0,t.jsxs)(s.p,{children:["En caso de error(es) al analizar el archivo ",(0,t.jsx)(s.code,{children:"roles.json"}),", 4D carga el proyecto pero desactiva la protecci\xf3n de acceso global - esto permite al desarrollador acceder a los archivos y solucionar el error. An error file named ",(0,t.jsx)(s.code,{children:"Roles_Errors.json"})," is generated in the ",(0,t.jsxs)(s.a,{href:"/docs/pt/20-R5/Project/architecture#logs",children:[(0,t.jsx)(s.code,{children:"Logs"})," folder of the project"]})," and describes the error line(s). Este archivo se elimina autom\xe1ticamente cuando el archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," deja de contener errores."]}),"\n",(0,t.jsxs)(s.p,{children:["Se recomienda comprobar al inicio si existe un archivo ",(0,t.jsx)(s.code,{children:"Roles_Errors.json"})," en la carpeta ",(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/Project/architecture#logs",children:"Logs"}),", lo que significa que se ha producido un error de an\xe1lisis y que los accesos no estar\xe1n limitados. Pode escrever, por exemplo:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if\n'})}),"\n",(0,t.jsx)(s.h2,{id:"inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o",children:"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["Por defecto, si no se definen par\xe1metros espec\xedficos en el archivo ",(0,t.jsx)(s.code,{children:"roles.json"}),", los accesos no est\xe1n limitados. This configuration allows you to develop the application without having to worry about accesses."]}),"\n",(0,t.jsxs)(s.p,{children:["However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. Para bloquear todos los privilegios en todos los recursos, coloque el siguiente archivo ",(0,t.jsx)(s.code,{children:"roles.json"})," en la carpeta de su proyecto (incluye ejemplos de m\xe9todos):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'{\n\t"privileges": [\n\t\t{\n\t\t\t"privilege": "none",\n\t\t\t"includes": []\n\t\t}\n\t],\n\n\t"roles": [],\n\n\t"permissions": {\n\t\t"allowed": [{\n\t\t\t"applyTo": "ds",\n\t\t\t"type": "datastore",\n\t\t\t"read": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"create": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"update": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"drop": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"execute": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"describe": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"promote": [\n\t\t\t\t"none"\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.loginAs",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.hasPrivilege",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.clearPrivileges",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.isGuest",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.getPrivileges",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.setAllPrivileges",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t"guest"\n\t\t\t]\n\t}\n\n\t\t]\n\t}\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},297720:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(296540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);