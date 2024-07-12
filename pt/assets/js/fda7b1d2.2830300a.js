/*! For license information please see fda7b1d2.2830300a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35792],{394449:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=o(474848),n=o(28453);const t={id:"security",title:"P\xe1gina seguran\xe7a"},i=void 0,r={id:"settings/security",title:"P\xe1gina seguran\xe7a",description:"This page contains options related to data access and protection for your desktop applications.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/settings/security.md",sourceDirName:"settings",slug:"/settings/security",permalink:"/docs/pt/settings/security",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"security",title:"P\xe1gina seguran\xe7a"},sidebar:"docs",previous:{title:"P\xe1gina PHP",permalink:"/docs/pt/settings/php"},next:{title:"P\xe1gina de compatibilidade",permalink:"/docs/pt/settings/compatibility"}},d={},c=[{value:"Acesso aos dados / Acesso de usu\xe1rios remotos",id:"acesso-aos-dados--acesso-de-usu\xe1rios-remotos",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"This page contains options related to data access and protection for your desktop applications."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota"}),": para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,a.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"gu\xeda de seguridad de 4D"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"acesso-aos-dados--acesso-de-usu\xe1rios-remotos",children:"Acesso aos dados / Acesso de usu\xe1rios remotos"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"These settings do not apply to project databases opened in single-user mode."}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Acceso Dise\xf1o y al Explorador de ejecuci\xf3n"}),": da al grupo especificado la capacidad de entrar al modo Dise\xf1o de la base y mostrar el Explorador de ejecuci\xf3n."]}),"\n",(0,a.jsx)(s.p,{children:"Note que:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["La definici\xf3n de un grupo de acceso en el entorno Dise\xf1o tambi\xe9n permite desactivar la opci\xf3n ",(0,a.jsx)(s.strong,{children:"Crear una tabla"})," de la caja de di\xe1logo de importaci\xf3n de datos. Para m\xe1s informaci\xf3n sobre esta caja de di\xe1logo, consulte ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html",children:"Importar los datos desde los archivos"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html",children:"Users and groups"})," chapter."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Usuario por defecto"}),": cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. J\xe1 n\xe3o \xe9 necess\xe1rio introduzir um nome de usu\xe1rio. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly.\nThis option simplifies access to the database while maintaining a complete data control system."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password."}),"\n",(0,a.jsxs)(s.li,{children:["If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,a.jsx)(s.strong,{children:"Note:"}),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. Para ello, presione la tecla ',(0,a.jsx)(s.strong,{children:"May\xfas"})," mientras abre la base de datos o se conecta a ella."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Mostrar lista de usuarios en la caja de di\xe1logo Contrase\xf1a"}),': si se marca esta opci\xf3n, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contrase\xf1a en la caja de di\xe1logo de identificaci\xf3n de usuario. Se essa op\xe7\xe3o n\xe3o estiver marcada, os usu\xe1rios dever\xe3o digitar o nome e a senha. Para obtener m\xe1s informaci\xf3n sobre las dos versiones de la caja de di\xe1logo de contrase\xf1a, consulte la secci\xf3n "Acceso a las bases protegidas" en [Presentaci\xf3n del control de acceso](',(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Ordenar la lista de los usuarios en orden alfab\xe9tico"})," (s\xf3lo disponible si est\xe1 marcada la opci\xf3n anterior): cuando esta opci\xf3n est\xe1 seleccionada, la lista de los usuarios de la caja de di\xe1logo de introducci\xf3n de contrase\xf1a se ordena por orden alfab\xe9tic"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Los usuarios pueden cambiar su contrase\xf1a"}),": cuando esta opci\xf3n est\xe1 marcada, aparece un bot\xf3n ",(0,a.jsx)(s.strong,{children:"Cambiar"}),' en la caja de di\xe1logo Identificaci\xf3n del usuario. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Ensuring system maintenance"}),"). Si lo desea, puede ocultar el bot\xf3n ",(0,a.jsx)(s.strong,{children:"Cambiar"})," para que los usuarios no puedan modificar sus contrase\xf1as. Para o fazer, basta desmarcar esta op\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"op\xe7\xf5es",children:"Op\xe7\xf5es"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Filtering of commands and project methods in the formula editor and 4D Write Pro documents"}),":\nFor security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html",children:"Formula editor"})," in Application mode or added to mutlistyle areas or 4D Write Pro documents using the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html",children:"ST INSERT EXPRESSION"})," command: only certain 4D functions and project methods that have been explicitly declared using the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," command can be used. You can completely or partially remove this filtering using the following options."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Activado para todos"})," (opci\xf3n por defecto): el acceso a los comandos, funciones y m\xe9todos proyecto est\xe1 restringido para todos los usuarios, incluidos el Dise\xf1ador y el Administrador."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Desactivado para el Dise\xf1ador y el Administrador"}),": esta opci\xf3n concede acceso completo a los comandos 4D y a los m\xe9todos s\xf3lo al Dise\xf1ador y al Administrador. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html",children:"CHANGE CURRENT USER"})," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.\n",(0,a.jsx)(s.strong,{children:"Nota:"})," si se ha activado el acceso completo mediante la opci\xf3n anterior, esta opci\xf3n no tendr\xe1 ning\xfan efecto."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Desactivado para todos"}),": esta opci\xf3n desactiva el control en las f\xf3rmulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones).\n",(0,a.jsx)(s.strong,{children:"Nota:"})," esta opci\xf3n tiene prioridad sobre el comando ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"}),". Quando est\xe1 selecionado, este comando n\xe3o faz nada."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Autorizar las propiedades usuario"}),": debe marcar esta opci\xf3n para poder mostrar cajas de di\xe1logo separadas para las propiedades usuario. Cuando esta opci\xf3n est\xe1 marcada, hay disponibles hasta tres cuadros de di\xe1logo: ",(0,a.jsx)(s.strong,{children:"Propiedades estructura"}),", ",(0,a.jsx)(s.strong,{children:"Propiedades usuario"}),", y ",(0,a.jsx)(s.strong,{children:"Propiedades usuario para archivo de datos"}),". Para m\xe1s informaci\xf3n, consulte ",(0,a.jsx)(s.a,{href:"/docs/pt/settings/overview#user-settings",children:"Propiedades usuario"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:'Execute "On Host Database Event" method of the components'}),": The ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html",children:"On Host Database Event database method"})," facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. Para o efeito, \xe9 necess\xe1rio marcar esta op\xe7\xe3o. Por padr\xe3o, n\xe3o est\xe1 marcada."]}),"\n",(0,a.jsx)(s.p,{children:"Quando esta op\xe7\xe3o est\xe1 seleccionada:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"os componentes 4D s\xe3o carregados,"}),"\n",(0,a.jsxs)(s.li,{children:["cada m\xe9todo base ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html",children:"On Host Database Event"})," del componente (si lo hay) es llamado por la base local,"]}),"\n",(0,a.jsx)(s.li,{children:"o c\xf3digo do m\xe9todo \xe9 executado."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Quando n\xe3o \xe9 verificado:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"4D components are loaded but they have to manage their initialization and backup phases themselves."}),"\n",(0,a.jsx)(s.li,{children:"the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)"}),"\n",(0,a.jsx)(s.li,{children:"the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation)."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,s,o)=>{var a=o(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,o){var a,t={},c=null,l=null;for(a in void 0!==o&&(c=""+o),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,a)&&!d.hasOwnProperty(a)&&(t[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===t[a]&&(t[a]=s[a]);return{$$typeof:n,type:e,key:c,ref:l,props:t,_owner:r.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},474848:(e,s,o)=>{e.exports=o(221020)},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>r});var a=o(296540);const n={},t=a.createContext(n);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);