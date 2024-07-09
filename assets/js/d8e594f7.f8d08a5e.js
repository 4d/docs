/*! For license information please see d8e594f7.f8d08a5e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1695],{495250:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(474848),o=s(28453);const i={id:"security",title:"Security page"},r=void 0,a={id:"settings/security",title:"Security page",description:"This page contains options related to data access and protection for your desktop applications.",source:"@site/versioned_docs/version-20-R4/settings/security.md",sourceDirName:"settings",slug:"/settings/security",permalink:"/docs/20-R4/settings/security",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"security",title:"Security page"},sidebar:"docs",previous:{title:"PHP page",permalink:"/docs/20-R4/settings/php"},next:{title:"Compatibility page",permalink:"/docs/20-R4/settings/compatibility"}},c={},d=[{value:"Data Access / Remote Users Access",id:"Data-Access--Remote-Users-Access",level:2},{value:"Options",id:"Options",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This page contains options related to data access and protection for your desktop applications."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": For a general overview of 4D's security features, see the ",(0,n.jsx)(t.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"Data-Access--Remote-Users-Access",children:"Data Access / Remote Users Access"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"These settings do not apply to project databases opened in single-user mode."}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Design and Runtime Explorer Access"}),": Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer."]}),"\n",(0,n.jsx)(t.p,{children:"Note that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Setting an access group in the Design environment also lets you deactivate the ",(0,n.jsx)(t.strong,{children:"Create table"})," option in the data import dialog box. For more information about this dialog box, refer to ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html",children:"Importing data from files"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html",children:"Users and groups"})," chapter."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Default User"}),": When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. It is no longer necessary to enter a user name. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly.\nThis option simplifies access to the database while maintaining a complete data control system."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password."}),"\n",(0,n.jsxs)(t.li,{children:["If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,n.jsx)(t.strong,{children:"Note:"}),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the ',(0,n.jsx)(t.strong,{children:"Shift"})," key while opening the database or connecting to it."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Display User List in Password Dialog Box"}),': If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. If it is not checked, users must enter both their name and password. For more information about the two versions of the password dialog box, see the section "Access system overview" in ',(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Access system overview"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User List in Alphabetical Order"})," (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Users can change their password"}),": When this option is checked, a ",(0,n.jsx)(t.strong,{children:"Change"}),' button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Ensuring system maintenance"}),"). If desired, you can hide the ",(0,n.jsx)(t.strong,{children:"Change"})," button so that users cannot modify their passwords. To do so, just uncheck this option."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"Options",children:"Options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Filtering of commands and project methods in the formula editor and 4D Write Pro documents"}),":\nFor security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html",children:"Formula editor"})," in Application mode or added to mutlistyle areas or 4D Write Pro documents using the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html",children:"ST INSERT EXPRESSION"})," command: only certain 4D functions and project methods that have been explicitly declared using the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," command can be used. You can completely or partially remove this filtering using the following options."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enabled for all"})," (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Disable for the Designer and the Administrator"}),": This option grants full access to 4D commands and to methods only for the Designer and Administrator. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html",children:"CHANGE CURRENT USER"})," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.\n",(0,n.jsx)(t.strong,{children:"Note:"})," If full access has been enabled using the previous option, this option will have no effect."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Disabled for all"}),": This option disables control within formulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones).\n",(0,n.jsx)(t.strong,{children:"Note:"})," This option takes priority over the ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," command. When it is checked, this command does nothing."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Enable User Settings"}),": You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: ",(0,n.jsx)(t.strong,{children:"Structure Settings"}),", ",(0,n.jsx)(t.strong,{children:"User Settings"}),", and ",(0,n.jsx)(t.strong,{children:"User Settings for Data File"}),". For more information, refer to ",(0,n.jsx)(t.a,{href:"/docs/20-R4/settings/overview#user-settings",children:"User settings"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:'Execute "On Host Database Event" method of the components'}),": The ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html",children:"On Host Database Event database method"})," facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. To do this, you must check this option. By default, it is not checked."]}),"\n",(0,n.jsx)(t.p,{children:"When this option is checked:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"4D components are loaded,"}),"\n",(0,n.jsxs)(t.li,{children:["each ",(0,n.jsx)(t.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html",children:"On Host Database Event database method"})," of the component (if any) is called by the host database,"]}),"\n",(0,n.jsx)(t.li,{children:"the code of the method is executed."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When it is not checked:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"4D components are loaded but they have to manage their initialization and backup phases themselves."}),"\n",(0,n.jsx)(t.li,{children:"the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)"}),"\n",(0,n.jsx)(t.li,{children:"the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation)."}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},221020:(e,t,s)=>{var n=s(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,i={},d=null,h=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)r.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:h,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(296540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);