/*! For license information please see eee65d65.c53d92cf.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10488],{131324:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=n(474848),t=n(28453);const r={id:"privileges",title:"Privileges"},d=void 0,o={id:"ORDA/privileges",title:"Privileges",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/pt/20-R4/ORDA/privileges",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"privileges",title:"Privileges"},sidebar:"docs",previous:{title:"Using a remote datastore",permalink:"/docs/pt/20-R4/ORDA/datastores"},next:{title:"Glossary",permalink:"/docs/pt/20-R4/ORDA/glossary"}},l={},a=[{value:"Vis\xe3o Geral",id:"Vis\xe3o-Geral",level:2},{value:"Resources",id:"Resources",level:2},{value:"Ac\xe7\xf5es de autoriza\xe7\xe3o",id:"Ac\xe7\xf5es-de-autoriza\xe7\xe3o",level:2},{value:"Privil\xe9gios e roles",id:"Privil\xe9gios-e-roles",level:2},{value:"Exemplo",id:"Exemplo",level:3},{value:"ficheiro <code>roles.json</code>",id:"ficheiro-rolesjson",level:2},{value:"ficheiro <code>Roles_Errors.json</code>",id:"ficheiro-Roles_Errorsjson",level:3},{value:"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o",id:"Inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."}),"\n",(0,i.jsx)(s.h2,{id:"Vis\xe3o-Geral",children:"Vis\xe3o Geral"}),"\n",(0,i.jsx)(s.p,{children:"The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources."}),"\n",(0,i.jsxs)(s.p,{children:["When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R4/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"session.setPrivileges()"})})," function."]}),"\n",(0,i.jsxs)(s.p,{children:["Every user request sent within the session is evaluated against privileges defined in the project's ",(0,i.jsx)(s.code,{children:"roles.json"})," file."]}),"\n",(0,i.jsx)(s.p,{children:"If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"esquema",src:n(614095).A+"",width:"960",height:"540"})}),"\n",(0,i.jsx)(s.h2,{id:"Resources",children:"Resources"}),"\n",(0,i.jsx)(s.p,{children:"You can assign specific permission actions to the following exposed resources in your project:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"o armazenamento de dados"}),"\n",(0,i.jsx)(s.li,{children:"uma classe de dados"}),"\n",(0,i.jsx)(s.li,{children:"um atributo (inclusive calculado e aliases)"}),"\n",(0,i.jsx)(s.li,{children:"uma fun\xe7\xe3o de classe de modelo de dados"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"A permission action defined at the datastore level is automatically assigned to all dataclasses."}),"\n",(0,i.jsx)(s.li,{children:"Uma a\xe7\xe3o de permiss\xe3o definida ao n\xedvel da classe de dados substitui a defini\xe7\xe3o do armazenamento de dados (se existir). By default, all attributes of the dataclass inherit from the dataclass permission(s)."}),"\n",(0,i.jsx)(s.li,{children:'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.'}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"Ac\xe7\xf5es-de-autoriza\xe7\xe3o",children:"Ac\xe7\xf5es de autoriza\xe7\xe3o"}),"\n",(0,i.jsx)(s.p,{children:"As a\xe7\xf5es dispon\xedveis est\xe3o relacionadas com o recurso alvo."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Ac\xe7\xf5es"}),(0,i.jsx)(s.th,{children:"armaz\xe9m de dados"}),(0,i.jsx)(s.th,{children:"dataclass"}),(0,i.jsx)(s.th,{children:"atributo"}),(0,i.jsx)(s.th,{children:"fun\xe7\xe3o de modelo de dados"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"create"})}),(0,i.jsx)(s.td,{children:"Criar entidade em qualquer classe de dados"}),(0,i.jsx)(s.td,{children:"Criar entidade nesta classe de dados"}),(0,i.jsx)(s.td,{children:"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"read"})}),(0,i.jsx)(s.td,{children:"Ler atributos em qualquer dataclass"}),(0,i.jsx)(s.td,{children:"Ler atributos nesta classe de dados"}),(0,i.jsx)(s.td,{children:"Leia o conte\xfado desse atributo"}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"update"})}),(0,i.jsx)(s.td,{children:"Atualizar atributos em qualquer classe de dados."}),(0,i.jsx)(s.td,{children:"Atualiza os atributos nesta classe de dados."}),(0,i.jsx)(s.td,{children:"Atualiza o conte\xfado deste atributo (ignorado para atributos alias)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"drop"})}),(0,i.jsx)(s.td,{children:"Eliminar dados em qualquer classe de dados."}),(0,i.jsx)(s.td,{children:"Eliminar dados nesta classe de dados."}),(0,i.jsx)(s.td,{children:"Delete a not null value for this attribute (except for alias and computed attribute)."}),(0,i.jsx)(s.td,{children:"n/a"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"execute"})}),(0,i.jsx)(s.td,{children:"Execute any function on the project (datastore, dataclass, entity selection, entity)"}),(0,i.jsx)(s.td,{children:"Executa qualquer fun\xe7\xe3o na classe de dados. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"Executar esta fun\xe7\xe3o"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"describe"})}),(0,i.jsx)(s.td,{children:"Todas as classes de dados est\xe3o dispon\xedveis na /rest/$catalog API"}),(0,i.jsx)(s.td,{children:"Esta dataclass est\xe1 dispon\xedvel na API /rest/$catalog"}),(0,i.jsx)(s.td,{children:"Esse atributo est\xe1 dispon\xedvel na API /rest/$catalog."}),(0,i.jsx)(s.td,{children:"Esta fun\xe7\xe3o de classe de dados est\xe1 dispon\xedvel na API /rest/$catalog"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"promote"})}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"n/a"}),(0,i.jsx)(s.td,{children:"Associa um determinado privil\xe9gio durante a execu\xe7\xe3o da fun\xe7\xe3o. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session."})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias."}),"\n",(0,i.jsx)(s.li,{children:"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."}),"\n",(0,i.jsxs)(s.li,{children:["Default values: in the current implementation, only ",(0,i.jsx)(s.em,{children:"Null"})," is available as default value."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"A defini\xe7\xe3o das permiss\xf5es deve ser coerente, nomeadamente:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"update"})," and ",(0,i.jsx)(s.strong,{children:"drop"})," permissions also need ",(0,i.jsx)(s.strong,{children:"read"})," permission (but ",(0,i.jsx)(s.strong,{children:"create"})," does not need it)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"promote"})," permission also need ",(0,i.jsx)(s.strong,{children:"describe"})," permission."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"Privil\xe9gios-e-roles",children:"Privil\xe9gios e roles"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"privilege"})," is the technical ability to run ",(0,i.jsx)(s.strong,{children:"actions"})," on ",(0,i.jsx)(s.strong,{children:"resources"}),", while a ",(0,i.jsx)(s.strong,{children:"role"}),' is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).']}),"\n",(0,i.jsx)(s.p,{children:'A privilege or a role can be associated to several "action + resource" combinations. Podem ser associados v\xe1rios privil\xe9gios a uma a\xe7\xe3o. Um privil\xe9gio pode incluir outros privil\xe9gios.'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["You ",(0,i.jsx)(s.strong,{children:"create"})," privileges and/or roles in the ",(0,i.jsx)(s.code,{children:"roles.json"})," file (see below). You ",(0,i.jsx)(s.strong,{children:"configure"})," their scope by assigning them to permission action(s) applied to resource(s)."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["You ",(0,i.jsx)(s.strong,{children:"allow"})," privileges and/or roles to every user session using the ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R4/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:".setPrivileges()"})})," function of the ",(0,i.jsx)(s.code,{children:"Session"})," class."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"Exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(s.p,{children:"Para permitir uma fun\xe7\xe3o em uma sess\xe3o:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n\n    var $user : cs. UsersEntity\n\n    Session.clearPrivileges()\n\n    $result:="Your are authenticated as Guest"\n\n    $user:=ds. Users.query("identifier = :1"; $identifier).first()\n\n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,i.jsxs)(s.h2,{id:"ficheiro-rolesjson",children:["ficheiro ",(0,i.jsx)(s.code,{children:"roles.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"roles.json"})," file describes the whole security settings for the project."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["In a context other than ",(0,i.jsx)(s.em,{children:"Qodly"})," (cloud), you have to create this file at the following location: ",(0,i.jsx)(s.code,{children:"<project folder>/Project/Sources/"}),". Ver a se\xe7\xe3o ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R4/Project/architecture#sources",children:"Arquitetura"}),"."]})}),"\n",(0,i.jsxs)(s.p,{children:["A sintaxe do ficheiro ",(0,i.jsx)(s.code,{children:"roles.json"})," \xe9 a seguinte:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Nome da propriedade"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{children:"Obrigat\xf3rio"}),(0,i.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"privileges"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Cole\xe7\xe3o de objectos ",(0,i.jsx)(s.code,{children:"privilege"})]}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios definidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].privilege"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Nome do privil\xe9gio"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].includes"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de nomes de privil\xe9gios inclu\xeddos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"roles"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Cole\xe7\xe3o de objetos ",(0,i.jsx)(s.code,{children:"role"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de roles definidos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].role"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Nome da role"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].privileges"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de nomes de privil\xe9gios inclu\xeddos"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"permissions"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsx)(s.td,{children:"Lista de ac\xe7\xf5es permitidas"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"allowed"}),(0,i.jsx)(s.td,{}),(0,i.jsxs)(s.td,{children:["Cole\xe7\xe3o de objectos ",(0,i.jsx)(s.code,{children:"permission"})]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de permiss\xf5es permitidas"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].applyTo"}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsxs)(s.td,{children:["Targeted ",(0,i.jsx)(s.a,{href:"#resources",children:"resource"})," name"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].type"}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"X"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"#resources",children:"Resource"}),' type: "datastore", "dataclass", "attribute", "method"']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].read"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].create"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].update"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].drop"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].describe"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].execute"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"[].promote"}),(0,i.jsx)(s.td,{children:"Cole\xe7\xe3o de strings"}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Lista de privil\xe9gios"})]})]})]}),"\n",(0,i.jsx)(s.admonition,{title:"Lembrete",type:"caution",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'O nome do privil\xe9gio "WebAdmin" est\xe1 reservado \xe0 aplica\xe7\xe3o. N\xe3o se recomenda a utiliza\xe7\xe3o deste nome para privil\xe9gios personalizados.'}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"privileges"})," and ",(0,i.jsx)(s.code,{children:"roles"})," names are case insensitive."]}),"\n"]})}),"\n",(0,i.jsxs)(s.h3,{id:"ficheiro-Roles_Errorsjson",children:["ficheiro ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})]}),"\n",(0,i.jsxs)(s.p,{children:["O arquivo ",(0,i.jsx)(s.code,{children:"roles.json"})," \xe9 analisado por 4D na inicializa\xe7\xe3o. You need to restart the application if you want modifications in this file to be taken into account."]}),"\n",(0,i.jsxs)(s.p,{children:["In case of error(s) when parsing the ",(0,i.jsx)(s.code,{children:"roles.json"})," file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})," is generated in the ",(0,i.jsxs)(s.a,{href:"/docs/pt/20-R4/Project/architecture#logs",children:[(0,i.jsx)(s.code,{children:"Logs"})," folder of the project"]})," and describes the error line(s). This file is automatically deleted when the ",(0,i.jsx)(s.code,{children:"roles.json"})," file no longer contains error(s)."]}),"\n",(0,i.jsxs)(s.p,{children:["It is recommended to check at startup if a ",(0,i.jsx)(s.code,{children:"Roles_Errors.json"})," file exists in the ",(0,i.jsx)(s.a,{href:"/docs/pt/20-R4/Project/architecture#logs",children:"Logs folder"}),", which means that there was a parsing error and that accesses will not limited. Pode escrever, por exemplo:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\n End if \n'})}),"\n",(0,i.jsx)(s.h2,{id:"Inicializa\xe7\xe3o-de-privil\xe9gios-para-implanta\xe7\xe3o",children:"Inicializa\xe7\xe3o de privil\xe9gios para implanta\xe7\xe3o"}),"\n",(0,i.jsxs)(s.p,{children:["By default, if no specific parameters are defined in the ",(0,i.jsx)(s.code,{children:"roles.json"})," file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses."]}),"\n",(0,i.jsxs)(s.p,{children:["However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following ",(0,i.jsx)(s.code,{children:"roles.json"})," file in your project folder (it includes examples of methods):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'{\n    "privileges": [\n        {\n            "privilege": "none",\n            "includes": []\n        }\n    ],\n\n    "roles": [],\n\n    "permissions": {\n        "allowed": [{\n            "applyTo": "ds",\n            "type": "datastore",\n            "read": [\n                "none"\n            ],\n            "create": [\n                "none"\n            ],\n            "update": [\n                "none"\n            ],\n            "drop": [\n                "none"\n            ],\n            "execute": [\n                "none"\n            ],\n            "describe": [\n                "none"\n            ],\n            "promote": [\n                "none"\n            ]\n        },\n        {\n            "applyTo": "ds.loginAs",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.hasPrivilege",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.clearPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.isGuest",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.getPrivileges",\n            "type": "method",\n            "execute": [\n                    "guest"\n                ]\n        },\n        {\n            "applyTo": "ds.setAllPrivileges",\n            "type": "method",\n            "execute": [\n                "guest"\n            ]\n    }\n\n        ]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var i=n(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var i,r={},a=null,c=null;for(i in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(c=s.ref),s)d.call(s,i)&&!l.hasOwnProperty(i)&&(r[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:t,type:e,key:a,ref:c,props:r,_owner:o.current}}s.Fragment=r,s.jsx=a,s.jsxs=a},474848:(e,s,n)=>{e.exports=n(221020)},614095:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var i=n(296540);const t={},r=i.createContext(t);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);