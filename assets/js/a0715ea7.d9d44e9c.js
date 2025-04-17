"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70414"],{557408:function(e,s,t){t.r(s),t.d(s,{default:()=>l,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"settings/security","title":"Security page","description":"This page contains options related to data access and protection for your desktop applications.","source":"@site/versioned_docs/version-20-R8/settings/security.md","sourceDirName":"settings","slug":"/settings/security","permalink":"/docs/20-R8/settings/security","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"security","title":"Security page"},"sidebar":"docs","previous":{"title":"PHP page","permalink":"/docs/20-R8/settings/php"},"next":{"title":"Compatibility page","permalink":"/docs/20-R8/settings/compatibility"}}'),o=t("785893"),i=t("250065");let r={id:"security",title:"Security page"},a=void 0,c={},d=[{value:"Data Access / Remote Users Access",id:"data-access--remote-users-access",level:2},{value:"Options",id:"options",level:2}];function h(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"This page contains options related to data access and protection for your desktop applications."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Note"}),": For a general overview of 4D's security features, see the ",(0,o.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"4D Security guide"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"data-access--remote-users-access",children:"Data Access / Remote Users Access"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"These settings do not apply to project databases opened in single-user mode."}),"\n"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Design and Runtime Explorer Access"}),": Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer."]}),"\n",(0,o.jsx)(s.p,{children:"Note that:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Setting an access group in the Design environment also lets you deactivate the ",(0,o.jsx)(s.strong,{children:"Create table"})," option in the data import dialog box. For more information about this dialog box, refer to ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Importing-data-from-files.300-6750325.en.html",children:"Importing data from files"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the ",(0,o.jsx)(s.a,{href:"/docs/20-R8/Users/editing",children:"Users and groups"})," chapter."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Default User"}),": When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. It is no longer necessary to enter a user name. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly.\nThis option simplifies access to the database while maintaining a complete data control system."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password."}),"\n",(0,o.jsxs)(s.li,{children:["If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,o.jsx)(s.strong,{children:"Note:"}),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the ',(0,o.jsx)(s.strong,{children:"Shift"})," key while opening the database or connecting to it."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Display User List in Password Dialog Box"}),': If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. If it is not checked, users must enter both their name and password. For more information about the two versions of the password dialog box, see the section "Access system overview" in ',(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Access-system-overview.300-6750353.en.html",children:"Access system overview"}),"."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"User List in Alphabetical Order"})," (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Users can change their password"}),": When this option is checked, a ",(0,o.jsx)(s.strong,{children:"Change"}),' button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Ensuring-system-maintenance.300-6750352.en.html",children:"Ensuring system maintenance"}),"). If desired, you can hide the ",(0,o.jsx)(s.strong,{children:"Change"})," button so that users cannot modify their passwords. To do so, just uncheck this option."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents"}),":\nFor security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Formula-editor.200-6750079.en.html",children:"Formula editor"})," in Application mode or added to multistyle areas (using ",(0,o.jsx)(s.a,{href:"/docs/20-R8/commands/st-insert-expression",children:(0,o.jsx)(s.code,{children:"ST INSERT EXPRESSION"})}),"), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the ",(0,o.jsx)(s.a,{href:"/docs/20-R8/commands/set-allowed-methods",children:(0,o.jsx)(s.code,{children:"SET ALLOWED METHODS"})})," command can be used. You can completely or partially remove this filtering using the following options."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Enabled for all"})," (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Disable for the Designer and the Administrator"}),": This option grants full access to 4D commands and to methods only for the Designer and Administrator. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the ",(0,o.jsx)(s.a,{href:"/docs/20-R8/commands/change-current-user",children:(0,o.jsx)(s.code,{children:"CHANGE CURRENT USER"})})," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.\n",(0,o.jsx)(s.strong,{children:"Note:"})," If full access has been enabled using the previous option, this option will have no effect."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Disabled for all"}),": This option disables control within formulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones).\n",(0,o.jsx)(s.strong,{children:"Note:"})," This option takes priority over the ",(0,o.jsx)(s.a,{href:"/docs/20-R8/commands/set-allowed-methods",children:(0,o.jsx)(s.code,{children:"SET ALLOWED METHODS"})})," command. When it is checked, this command does nothing."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Enable User Settings"}),": You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: ",(0,o.jsx)(s.strong,{children:"Structure Settings"}),", ",(0,o.jsx)(s.strong,{children:"User Settings"}),", and ",(0,o.jsx)(s.strong,{children:"User Settings for Data File"}),". For more information, refer to ",(0,o.jsx)(s.a,{href:"/docs/20-R8/Desktop/user-settings",children:"User settings"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:'Execute "On Host Database Event" method of the components'}),": The ",(0,o.jsx)(s.a,{href:"/docs/20-R8/commands/on-host-database-event-database-method",children:"On Host Database Event database method"})," facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. To do this, you must check this option. By default, it is not checked."]}),"\n",(0,o.jsx)(s.p,{children:"When this option is checked:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"4D components are loaded,"}),"\n",(0,o.jsxs)(s.li,{children:["each ",(0,o.jsx)(s.a,{href:"/docs/20-R8/commands/on-host-database-event-database-method",children:"On Host Database Event database method"})," of the component (if any) is called by the host database,"]}),"\n",(0,o.jsx)(s.li,{children:"the code of the method is executed."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"When it is not checked:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"4D components are loaded but they have to manage their initialization and backup phases themselves."}),"\n",(0,o.jsx)(s.li,{children:"the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)"}),"\n",(0,o.jsx)(s.li,{children:"the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation)."}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return r}});var n=t(667294);let o={},i=n.createContext(o);function r(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);