"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62692],{879156:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(474848),t=n(28453);const r={id:"overview",title:"Access Control overview"},o=void 0,c={id:"Users/overview",title:"Access Control overview",description:"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications.",source:"@site/versioned_docs/version-20-R6/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/Users/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"overview",title:"Access Control overview"},sidebar:"docs",previous:{title:"Access Rights",permalink:"/docs/category/access-rights"},next:{title:"Managing 4D users and groups",permalink:"/docs/Users/editing"}},a={},l=[{value:"Access control in multi-user applications",id:"access-control-in-multi-user-applications",level:2},{value:"Access control in single-user applications",id:"access-control-in-single-user-applications",level:2},{value:"User identification",id:"user-identification",level:3},{value:"Protecting access",id:"protecting-access",level:3},{value:"Privileges",id:"privileges",level:4},{value:"Encrypting data",id:"encrypting-data",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications."}),"\n",(0,i.jsx)(s.p,{children:"4D access control strategy depends on your deployment configuration:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"in multi-user applications, you can rely on 4D users and groups,"}),"\n",(0,i.jsxs)(s.li,{children:["in single-user applications, user access is controlled through the system session, using commands such as ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html",children:(0,i.jsx)(s.code,{children:"Current system user"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["For an overview of 4D's security features, see the ",(0,i.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"access-control-in-multi-user-applications",children:"Access control in multi-user applications"}),"\n",(0,i.jsx)(s.p,{children:"Multi-user applications are deployed with 4D Server. They include client-server, Web, or REST applications."}),"\n",(0,i.jsxs)(s.p,{children:["In multi-user applications, access control is done through ",(0,i.jsx)(s.a,{href:"/docs/Users/editing",children:"4D users and groups"}),". You create users, assign passwords, create access groups that have different levels of privileges in the application."]}),"\n",(0,i.jsxs)(s.p,{children:["You initiate the 4D password access control system with 4D Server by ",(0,i.jsx)(s.a,{href:"/docs/Users/editing#designer-and-administrator",children:"assigning a password to the Designer user"}),". Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have ",(0,i.jsx)(s.a,{href:"/docs/Users/editing",children:"set up users and groups"})," (when the application opens, no ID is required). Any part of the application can be opened."]}),"\n",(0,i.jsxs)(s.p,{children:["When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the application or to a ",(0,i.jsx)(s.a,{href:"/docs/Users/editing#assigning-group-access",children:"server with protected access"}),", remote users must enter a login/password."]}),"\n",(0,i.jsx)(s.p,{children:"To disable the password access system, you just need to remove the Designer password."}),"\n",(0,i.jsx)(s.h2,{id:"access-control-in-single-user-applications",children:"Access control in single-user applications"}),"\n",(0,i.jsxs)(s.p,{children:["Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume License. In single-user applications all users opening the application are ",(0,i.jsx)(s.a,{href:"/docs/Users/editing#designer-and-administrator",children:"Designers"}),', they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon ',(0,i.jsx)(s.strong,{children:"user sessions"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"user-identification",children:"User identification"}),"\n",(0,i.jsxs)(s.p,{children:["To identify the current user in a 4D single-user application, you can rely on the ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html",children:(0,i.jsx)(s.code,{children:"Current system user"})})," command, which returns the user who opened the system session. Thus user authentication is delegated to the OS level."]}),"\n",(0,i.jsx)(s.p,{children:"You can then allow or deny access within your application by using code such as:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"If(Current system user = $user) //you can store users in a database table\n\t// give access to some features\nEnd if\n"})}),"\n",(0,i.jsxs)(s.p,{children:['If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the ',(0,i.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html",children:(0,i.jsx)(s.code,{children:"SET USER ALIAS"})})," command, for example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"SET USER ALIAS(Current system user)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"protecting-access",children:"Protecting access"}),"\n",(0,i.jsx)(s.h4,{id:"privileges",children:"Privileges"}),"\n",(0,i.jsx)(s.p,{children:"On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level."}),"\n",(0,i.jsx)(s.h4,{id:"encrypting-data",children:"Encrypting data"}),"\n",(0,i.jsxs)(s.p,{children:["If you want to protect access to the application data, we recommend to ",(0,i.jsx)(s.a,{href:"/docs/MSC/encrypt",children:"encrypt data"})," and provide the encryption key to the authorized user(s)."]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(296540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);