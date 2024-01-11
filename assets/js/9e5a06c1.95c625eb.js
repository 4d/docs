"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85030],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(667294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),h=s,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},989235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});r(667294);var n=r(603905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const i={id:"overview",title:"Access Control overview"},o=void 0,c={unversionedId:"Users/overview",id:"version-20-R3/Users/overview",title:"Access Control overview",description:"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications.",source:"@site/versioned_docs/version-20-R3/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/20-R3/Users/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"overview",title:"Access Control overview"},sidebar:"docs",previous:{title:"Access Rights",permalink:"/docs/20-R3/category/access-rights"},next:{title:"Managing 4D users and groups",permalink:"/docs/20-R3/Users/editing"}},l={},p=[{value:"Access control in multi-user applications",id:"access-control-in-multi-user-applications",level:2},{value:"Access control in single-user applications",id:"access-control-in-single-user-applications",level:2},{value:"User identification",id:"user-identification",level:3},{value:"Protecting access",id:"protecting-access",level:3},{value:"Privileges",id:"privileges",level:4},{value:"Encrypting data",id:"encrypting-data",level:4}],u={toc:p};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",s({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. It is also essential to provide security for sensitive data, even in single-user applications. "),(0,n.kt)("p",null,"4D access control strategy depends on your deployment configuration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"in multi-user applications, you can rely on 4D users and groups,"),(0,n.kt)("li",{parentName:"ul"},"in single-user applications, user access is controlled through the system session, using commands such as ",(0,n.kt)("a",s({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Current system user")),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For an overview of 4D's security features, see the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide"),".")),(0,n.kt)("h2",s({},{id:"access-control-in-multi-user-applications"}),"Access control in multi-user applications"),(0,n.kt)("p",null,"Multi-user applications are deployed with 4D Server. They include client-server, Web, or REST applications. "),(0,n.kt)("p",null,"In multi-user applications, access control is done through ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/20-R3/Users/editing"}),"4D users and groups"),". You create users, assign passwords, create access groups that have different levels of privileges in the application. "),(0,n.kt)("p",null,"You initiate the 4D password access control system with 4D Server by ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/20-R3/Users/editing#designer-and-administrator"}),"assigning a password to the Designer user"),". Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/20-R3/Users/editing"}),"set up users and groups")," (when the application opens, no ID is required). Any part of the application can be opened."),(0,n.kt)("p",null,"When a password is assigned to the Designer, all the access privileges take effect. In order to connect to the application or to a ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/20-R3/Users/editing#assigning-group-access"}),"server with protected access"),", remote users must enter a login/password."),(0,n.kt)("p",null,"To disable the password access system, you just need to remove the Designer password. "),(0,n.kt)("h2",s({},{id:"access-control-in-single-user-applications"}),"Access control in single-user applications"),(0,n.kt)("p",null,"Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume License. In single-user applications all users opening the application are ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/20-R3/Users/editing#designer-and-administrator"}),"Designers"),', they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon ',(0,n.kt)("strong",{parentName:"p"},"user sessions"),"."),(0,n.kt)("h3",s({},{id:"user-identification"}),"User identification"),(0,n.kt)("p",null,"To identify the current user in a 4D single-user application, you can rely on the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Current system user"))," command, which returns the user who opened the system session. Thus user authentication is delegated to the OS level."),(0,n.kt)("p",null,"You can then allow or deny access within your application by using code such as:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),"If(Current system user = $user) //you can store users in a database table\n    // give access to some features\nEnd if\n")),(0,n.kt)("p",null,'If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the ',(0,n.kt)("a",s({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"SET USER ALIAS"))," command, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-4d"}),"SET USER ALIAS(Current system user)\n")),(0,n.kt)("h3",s({},{id:"protecting-access"}),"Protecting access"),(0,n.kt)("h4",s({},{id:"privileges"}),"Privileges"),(0,n.kt)("p",null,"On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level. "),(0,n.kt)("h4",s({},{id:"encrypting-data"}),"Encrypting data"),(0,n.kt)("p",null,"If you want to protect access to the application data, we recommend to ",(0,n.kt)("a",s({parentName:"p"},{href:"/docs/20-R3/MSC/encrypt"}),"encrypt data")," and provide the encryption key to the authorized user(s)."))}d.isMDXComponent=!0}}]);