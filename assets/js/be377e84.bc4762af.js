/*! For license information please see be377e84.bc4762af.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54494],{165090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(474848),i=n(28453);const r={id:"privileges",title:"Privileges"},l=void 0,d={id:"ORDA/privileges",title:"Privileges",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).",source:"@site/versioned_docs/version-20/ORDA/privileges.md",sourceDirName:"ORDA",slug:"/ORDA/privileges",permalink:"/docs/20/ORDA/privileges",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fprivileges.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"privileges",title:"Privileges"},sidebar:"docs",previous:{title:"Using a remote datastore",permalink:"/docs/20/ORDA/datastores"},next:{title:"Glossary",permalink:"/docs/20/ORDA/glossary"}},o={},a=[{value:"Overview",id:"overview",level:2},{value:"Resources",id:"resources",level:2},{value:"Permission actions",id:"permission-actions",level:2},{value:"Privileges and Roles",id:"privileges-and-roles",level:2},{value:"Example",id:"example",level:3},{value:"<code>roles.json</code> file",id:"rolesjson-file",level:2},{value:"<code>Roles_Errors.json</code> file",id:"roles_errorsjson-file",level:3},{value:"Initializing privileges for deployment",id:"initializing-privileges-for-deployment",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.)."}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources."}),"\n",(0,s.jsxs)(t.p,{children:["When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the ",(0,s.jsx)(t.a,{href:"/docs/20/API/SessionClass#setprivileges",children:(0,s.jsx)(t.code,{children:"session.setPrivileges()"})})," function."]}),"\n",(0,s.jsxs)(t.p,{children:["Every user request sent within the session is evaluated against privileges defined in the project's ",(0,s.jsx)(t.code,{children:"roles.json"})," file."]}),"\n",(0,s.jsx)(t.p,{children:"If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"schema",src:n(125995).A+"",width:"960",height:"540"})}),"\n",(0,s.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(t.p,{children:"You can assign specific permission actions to the following exposed resources in your project:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"the datastore"}),"\n",(0,s.jsx)(t.li,{children:"a dataclass"}),"\n",(0,s.jsx)(t.li,{children:"an attribute (including computed and alias)"}),"\n",(0,s.jsx)(t.li,{children:"a data model class function"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A permission action defined at the datastore level is automatically assigned to all dataclasses."}),"\n",(0,s.jsx)(t.li,{children:"A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s)."}),"\n",(0,s.jsx)(t.li,{children:'Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.'}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"permission-actions",children:"Permission actions"}),"\n",(0,s.jsx)(t.p,{children:"Available actions are related to target resource."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Actions"}),(0,s.jsx)(t.th,{children:"datastore"}),(0,s.jsx)(t.th,{children:"dataclass"}),(0,s.jsx)(t.th,{children:"attribute"}),(0,s.jsx)(t.th,{children:"data model function"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"create"})}),(0,s.jsx)(t.td,{children:"Create entity in any dataclass"}),(0,s.jsx)(t.td,{children:"Create entity in this dataclass"}),(0,s.jsx)(t.td,{children:"Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes)."}),(0,s.jsx)(t.td,{children:"n/a"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"read"})}),(0,s.jsx)(t.td,{children:"Read attributes in any dataclass"}),(0,s.jsx)(t.td,{children:"Read attributes in this dataclass"}),(0,s.jsx)(t.td,{children:"Read this attribute content"}),(0,s.jsx)(t.td,{children:"n/a"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"update"})}),(0,s.jsx)(t.td,{children:"Update attributes in any dataclass."}),(0,s.jsx)(t.td,{children:"Update attributes in this dataclass."}),(0,s.jsx)(t.td,{children:"Update this attribute content (ignored for alias attributes)."}),(0,s.jsx)(t.td,{children:"n/a"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"drop"})}),(0,s.jsx)(t.td,{children:"Delete data in any dataclass."}),(0,s.jsx)(t.td,{children:"Delete data in this dataclass."}),(0,s.jsx)(t.td,{children:"Delete a not null value for this attribute (except for alias and computed attribute)."}),(0,s.jsx)(t.td,{children:"n/a"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"execute"})}),(0,s.jsx)(t.td,{children:"Execute any function on the project (datastore, dataclass, entity selection, entity)"}),(0,s.jsx)(t.td,{children:"Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions"}),(0,s.jsx)(t.td,{children:"n/a"}),(0,s.jsx)(t.td,{children:"Execute this function"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"describe"})}),(0,s.jsx)(t.td,{children:"All the dataclasses are available in the /rest/$catalog API"}),(0,s.jsx)(t.td,{children:"This dataclass is available in the /rest/$catalog API"}),(0,s.jsx)(t.td,{children:"This attribute is available in the /rest/$catalog API."}),(0,s.jsx)(t.td,{children:"This dataclass function is available in the /rest/$catalog API"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"promote"})}),(0,s.jsx)(t.td,{children:"n/a"}),(0,s.jsx)(t.td,{children:"n/a"}),(0,s.jsx)(t.td,{children:"n/a"}),(0,s.jsx)(t.td,{children:"Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias."}),"\n",(0,s.jsx)(t.li,{children:"A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built."}),"\n",(0,s.jsxs)(t.li,{children:["Default values: in the current implementation, only ",(0,s.jsx)(t.em,{children:"Null"})," is available as default value."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Setting permissions requires to be consistent, in particular:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"update"})," and ",(0,s.jsx)(t.strong,{children:"drop"})," permissions also need ",(0,s.jsx)(t.strong,{children:"read"})," permission (but ",(0,s.jsx)(t.strong,{children:"create"})," does not need it)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"promote"})," permission also need ",(0,s.jsx)(t.strong,{children:"describe"})," permission."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"privileges-and-roles",children:"Privileges and Roles"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"privilege"})," is the technical ability to run ",(0,s.jsx)(t.strong,{children:"actions"})," on ",(0,s.jsx)(t.strong,{children:"resources"}),", while a ",(0,s.jsx)(t.strong,{children:"role"}),' is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).']}),"\n",(0,s.jsx)(t.p,{children:'A privilege or a role can be associated to several "action + resource" combinations. Several privileges can be associated to an action. A privilege can include other privileges.'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You ",(0,s.jsx)(t.strong,{children:"create"})," privileges and/or roles in the ",(0,s.jsx)(t.code,{children:"roles.json"})," file (see below). You ",(0,s.jsx)(t.strong,{children:"configure"})," their scope by assigning them to permission action(s) applied to resource(s)."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You ",(0,s.jsx)(t.strong,{children:"allow"})," privileges and/or roles to every user session using the ",(0,s.jsx)(t.a,{href:"/docs/20/API/SessionClass#setprivileges",children:(0,s.jsx)(t.code,{children:".setPrivileges()"})})," function of the ",(0,s.jsx)(t.code,{children:"Session"})," class."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"To allow a role in a session:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\nexposed Function authenticate($identifier : Text; $password : Text)->$result : Text\n    \n    var $user : cs.UsersEntity\n    \n    Session.clearPrivileges()\n    \n    $result:="Your are authenticated as Guest"\n    \n    $user:=ds.Users.query("identifier = :1"; $identifier).first()\n    \n    If ($user#Null)\n        If (Verify password hash($password; $user.password))\n            Session.setPrivileges(New object("roles"; $user.role))\n            $result:="Your are authenticated as "+$user.role\n        End if\n    End if\n\n\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"rolesjson-file",children:[(0,s.jsx)(t.code,{children:"roles.json"})," file"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"roles.json"})," file describes the whole security settings for the project."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["In a context other than ",(0,s.jsx)(t.em,{children:"Qodly"})," (cloud), you have to create this file at the following location: ",(0,s.jsx)(t.code,{children:"<project folder>/Project/Sources/"}),". See ",(0,s.jsx)(t.a,{href:"/docs/20/Project/architecture#sources",children:"Architecture"})," section."]})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"roles.json"})," file syntax is the following:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property name"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Mandatory"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"privileges"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Collection of ",(0,s.jsx)(t.code,{children:"privilege"})," objects"]}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"List of defined privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].privilege"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Privilege name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].includes"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of included privilege names"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"roles"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Collection of ",(0,s.jsx)(t.code,{children:"role"})," objects"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of defined roles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].role"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Role name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].privileges"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of included privilege names"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"permissions"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsx)(t.td,{children:"List of allowed actions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"allowed"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Collection of ",(0,s.jsx)(t.code,{children:"permission"})," objects"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of allowed permissions"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].applyTo"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsxs)(t.td,{children:["Targeted ",(0,s.jsx)(t.a,{href:"#resources",children:"resource"})," name"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].type"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"X"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"#resources",children:"Resource"}),' type: "datastore", "dataclass", "attribute", "method"']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].read"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].create"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].update"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].drop"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].describe"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].execute"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[].promote"}),(0,s.jsx)(t.td,{children:"Collection of strings"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"List of privileges"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{title:"Reminder",type:"caution",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.'}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"privileges"})," and ",(0,s.jsx)(t.code,{children:"roles"})," names are case insensitive."]}),"\n"]})}),"\n",(0,s.jsxs)(t.h3,{id:"roles_errorsjson-file",children:[(0,s.jsx)(t.code,{children:"Roles_Errors.json"})," file"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"roles.json"})," file is parsed by 4D at startup. You need to restart the application if you want modifications in this file to be taken into account."]}),"\n",(0,s.jsxs)(t.p,{children:["In case of error(s) when parsing the ",(0,s.jsx)(t.code,{children:"roles.json"})," file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named ",(0,s.jsx)(t.code,{children:"Roles_Errors.json"})," is generated in the ",(0,s.jsxs)(t.a,{href:"/docs/20/Project/architecture#logs",children:[(0,s.jsx)(t.code,{children:"Logs"})," folder of the project"]})," and describes the error line(s). This file is automatically deleted when the ",(0,s.jsx)(t.code,{children:"roles.json"})," file no longer contains error(s)."]}),"\n",(0,s.jsxs)(t.p,{children:["It is recommended to check at startup if a ",(0,s.jsx)(t.code,{children:"Roles_Errors.json"})," file exists in the ",(0,s.jsx)(t.a,{href:"/docs/20/Project/architecture#logs",children:"Logs folder"}),", which means that there was a parsing error and that accesses will not limited. You can write for example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",metastring:'title="/Sources/DatabaseMethods/onStartup.4dm"',children:'If (Not(File("/LOGS/"+"Roles_Errors.json").exists))\n\u2026\nElse // you can prevent the project to open\n ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")\n QUIT 4D\nEnd if \n'})}),"\n",(0,s.jsx)(t.h2,{id:"initializing-privileges-for-deployment",children:"Initializing privileges for deployment"}),"\n",(0,s.jsxs)(t.p,{children:["By default, if no specific parameters are defined in the ",(0,s.jsx)(t.code,{children:"roles.json"})," file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses."]}),"\n",(0,s.jsxs)(t.p,{children:["However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following ",(0,s.jsx)(t.code,{children:"roles.json"})," file in your project folder (it includes examples of methods):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="/Project/Sources/roles.json"',children:'{\n\t"privileges": [\n\t\t{\n\t\t\t"privilege": "none",\n\t\t\t"includes": []\n\t\t}\n\t],\n\n\t"roles": [],\n\n\t"permissions": {\n\t\t"allowed": [{\n\t\t\t"applyTo": "ds",\n\t\t\t"type": "datastore",\n\t\t\t"read": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"create": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"update": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"drop": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"execute": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"describe": [\n\t\t\t\t"none"\n\t\t\t],\n\t\t\t"promote": [\n\t\t\t\t"none"\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.loginAs",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.hasPrivilege",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.clearPrivileges",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.isGuest",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.getPrivileges",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t\t"guest"\n\t\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"applyTo": "ds.setAllPrivileges",\n\t\t\t"type": "method",\n\t\t\t"execute": [\n\t\t\t\t"guest"\n\t\t\t]\n\t}\n\n\t\t]\n\t}\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var s=n(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,r={},a=null,c=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:a,ref:c,props:r,_owner:d.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},125995:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/privileges-schema-d5a0ecd16f6a60f344dbb09d12f2e271.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(296540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);