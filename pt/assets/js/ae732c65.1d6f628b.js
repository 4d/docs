/*! For license information please see ae732c65.1d6f628b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92609],{463806:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(474848),n=t(28453);const i={id:"security",title:"P\xe1gina seguran\xe7a"},a=void 0,r={id:"settings/security",title:"P\xe1gina seguran\xe7a",description:"This page contains options related to data access and protection for your desktop applications.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/settings/security.md",sourceDirName:"settings",slug:"/settings/security",permalink:"/docs/pt/20/settings/security",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"security",title:"P\xe1gina seguran\xe7a"},sidebar:"docs",previous:{title:"P\xe1gina PHP",permalink:"/docs/pt/20/settings/php"},next:{title:"P\xe1gina de compatibilidade",permalink:"/docs/pt/20/settings/compatibility"}},d={},c=[{value:"Acesso aos dados / Acesso de usu\xe1rios remotos",id:"Acesso-aos-dados--Acesso-de-usu\xe1rios-remotos",level:2},{value:"Op\xe7\xf5es",id:"Op\xe7\xf5es",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"This page contains options related to data access and protection for your desktop applications."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Note"}),": Para uma vis\xe3o geral dos recursos de seguran\xe7a de 4D, consulte o ",(0,o.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"guia de seguran\xe7a 4D"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"Acesso-aos-dados--Acesso-de-usu\xe1rios-remotos",children:"Acesso aos dados / Acesso de usu\xe1rios remotos"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"These settings do not apply to project databases opened in single-user mode."}),"\n"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Design and Runtime Explorer Access"}),": Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer."]}),"\n",(0,o.jsx)(s.p,{children:"Note que:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Setting an access group in the Design environment also lets you deactivate the ",(0,o.jsx)(s.strong,{children:"Create table"})," option in the data import dialog box. For more information about this dialog box, refer to ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html",children:"Importing data from files"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group. For more information about users and user groups, refer to the ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html",children:"Users and groups"})," chapter."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Default User"}),": When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. J\xe1 n\xe3o \xe9 necess\xe1rio introduzir um nome de usu\xe1rio. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly. This option simplifies access to the database while maintaining a complete data control system."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password."}),"\n",(0,o.jsxs)(s.li,{children:["If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,o.jsx)(s.strong,{children:"Note:"}),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the ',(0,o.jsx)(s.strong,{children:"Shift"})," key while opening the database or connecting to it."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Display User List in Password Dialog Box"}),': If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. Se essa op\xe7\xe3o n\xe3o estiver marcada, os usu\xe1rios dever\xe3o digitar o nome e a senha. Para obter mais informa\xe7\xf5es sobre as duas vers\xf5es da caixa de di\xe1logo de senha, consulte a se\xe7\xe3o "Vis\xe3o geral do controle de acesso" em ',(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Vis\xe3o geral do controle de acesso"}),"."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"User List in Alphabetical Order"})," (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Users can change their password"}),": When this option is checked, a ",(0,o.jsx)(s.strong,{children:"Change"}),' button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Ensuring system maintenance"}),"). If desired, you can hide the ",(0,o.jsx)(s.strong,{children:"Change"})," button so that users cannot modify their passwords. Para o fazer, basta desmarcar esta op\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"Op\xe7\xf5es",children:"Op\xe7\xf5es"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Filtering of commands and project methods in the formula editor and 4D Write Pro documents"}),": For security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html",children:"Formula editor"})," in Application mode or added to mutlistyle areas or 4D Write Pro documents using the ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html",children:"ST INSERT EXPRESSION"})," command: only certain 4D functions and project methods that have been explicitly declared using the ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," command can be used. You can completely or partially remove this filtering using the following options."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Enabled for all"})," (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Disable for the Designer and the Administrator"}),": This option grants full access to 4D commands and to methods only for the Designer and Administrator. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html",children:"CHANGE CURRENT USER"})," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed. ",(0,o.jsx)(s.strong,{children:"Note:"})," If full access has been enabled using the previous option, this option will have no effect."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Disabled for all"}),": This option disables control within formulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones). ",(0,o.jsx)(s.strong,{children:"Nota:"})," essa op\xe7\xe3o tem prioridade sobre o comando ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET PERMITIDO DE METES"}),". Quando est\xe1 selecionado, este comando n\xe3o faz nada."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Enable User Settings"}),": You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: ",(0,o.jsx)(s.strong,{children:"Structure Settings"}),", ",(0,o.jsx)(s.strong,{children:"User Settings"}),", and ",(0,o.jsx)(s.strong,{children:"User Settings for Data File"}),". For more information, refer to ",(0,o.jsx)(s.a,{href:"/docs/pt/20/settings/overview#user-settings",children:"User settings"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:'Execute "On Host Database Event" method of the components'}),": The ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html",children:"On Host Database Event database method"})," facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. Para o efeito, \xe9 necess\xe1rio marcar esta op\xe7\xe3o. Por padr\xe3o, n\xe3o est\xe1 marcada."]}),"\n",(0,o.jsx)(s.p,{children:"Quando esta op\xe7\xe3o est\xe1 seleccionada:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"os componentes 4D s\xe3o carregados,"}),"\n",(0,o.jsxs)(s.li,{children:["each ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html",children:"On Host Database Event database method"})," of the component (if any) is called by the host database,"]}),"\n",(0,o.jsx)(s.li,{children:"o c\xf3digo do m\xe9todo \xe9 executado."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Quando n\xe3o \xe9 verificado:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"4D components are loaded but they have to manage their initialization and backup phases themselves."}),"\n",(0,o.jsx)(s.li,{children:"the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)"}),"\n",(0,o.jsx)(s.li,{children:"the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation)."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,s,t)=>{var o=t(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var o,i={},c=null,l=null;for(o in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)a.call(s,o)&&!d.hasOwnProperty(o)&&(i[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:c,ref:l,props:i,_owner:r.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var o=t(296540);const n={},i=o.createContext(n);function a(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);