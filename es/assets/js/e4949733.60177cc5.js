/*! For license information please see e4949733.60177cc5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54289],{377892:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=o(474848),n=o(28453);const i={id:"security",title:"P\xe1gina seguridad"},r=void 0,t={id:"settings/security",title:"P\xe1gina seguridad",description:"Esta p\xe1gina contiene opciones relacionadas con la protecci\xf3n del acceso y de los datos de sus aplicaciones de escritorio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/settings/security.md",sourceDirName:"settings",slug:"/settings/security",permalink:"/docs/es/settings/security",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"security",title:"P\xe1gina seguridad"},sidebar:"docs",previous:{title:"P\xe1gin PHP",permalink:"/docs/es/settings/php"},next:{title:"P\xe1gina de compatibilidad",permalink:"/docs/es/settings/compatibility"}},d={},c=[{value:"Acceso a datos / Acceso de usuarios remotos",id:"Acceso-a-datos--Acceso-de-usuarios-remotos",level:2},{value:"Opciones",id:"Opciones",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Esta p\xe1gina contiene opciones relacionadas con la protecci\xf3n del acceso y de los datos de sus aplicaciones de escritorio."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota"}),": para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,a.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"gu\xeda de seguridad de 4D"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"Acceso-a-datos--Acceso-de-usuarios-remotos",children:"Acceso a datos / Acceso de usuarios remotos"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Estos par\xe1metros no se aplican a las bases proyecto abiertas en modo monopuesto."}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Acceso Dise\xf1o y al Explorador de ejecuci\xf3n"}),": da al grupo especificado la capacidad de entrar al modo Dise\xf1o de la base y mostrar el Explorador de ejecuci\xf3n."]}),"\n",(0,a.jsx)(s.p,{children:"Note que:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["La definici\xf3n de un grupo de acceso en el entorno Dise\xf1o tambi\xe9n permite desactivar la opci\xf3n ",(0,a.jsx)(s.strong,{children:"Crear una tabla"})," de la caja de di\xe1logo de importaci\xf3n de datos. Para m\xe1s informaci\xf3n sobre esta caja de di\xe1logo, consulte ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html",children:"Importar los datos desde los archivos"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html",children:"Users and groups"})," chapter."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Usuario por defecto"}),": cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. Ya no es necesario ingresar un nombre de usuario. Adem\xe1s, si no ha asociado una contrase\xf1a al usuario por defecto, la caja de di\xe1logo Contrase\xf1a ya no aparece y la base se abre directamente.\nEsta opci\xf3n simplifica el acceso a la base de datos a la vez que mantiene un sistema completo de control de datos."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Si ha asociado una contrase\xf1a al usuario predeterminado, al abrir la base aparece una caja de di\xe1logo en el que los usuarios deben introducir una contrase\xf1a."}),"\n",(0,a.jsxs)(s.li,{children:["If you haven't associated a password with the Default User, the User Identification dialog box will not appear.",(0,a.jsx)(s.strong,{children:"Note:"}),' You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. Para ello, presione la tecla ',(0,a.jsx)(s.strong,{children:"May\xfas"})," mientras abre la base de datos o se conecta a ella."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Mostrar lista de usuarios en la caja de di\xe1logo Contrase\xf1a"}),': si se marca esta opci\xf3n, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contrase\xf1a en la caja de di\xe1logo de identificaci\xf3n de usuario. Si no est\xe1 marcada, los usuarios deben introducir tanto su nombre como su contrase\xf1a. Para obtener m\xe1s informaci\xf3n sobre las dos versiones de la caja de di\xe1logo de contrase\xf1a, consulte la secci\xf3n "Acceso a las bases protegidas" en [Presentaci\xf3n del control de acceso](',(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Ordenar la lista de los usuarios en orden alfab\xe9tico"})," (s\xf3lo disponible si est\xe1 marcada la opci\xf3n anterior): cuando esta opci\xf3n est\xe1 seleccionada, la lista de los usuarios de la caja de di\xe1logo de introducci\xf3n de contrase\xf1a se ordena por orden alfab\xe9tic"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Los usuarios pueden cambiar su contrase\xf1a"}),": cuando esta opci\xf3n est\xe1 marcada, aparece un bot\xf3n ",(0,a.jsx)(s.strong,{children:"Cambiar"}),' en la caja de di\xe1logo Identificaci\xf3n del usuario. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in ',(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Ensuring system maintenance"}),"). Si lo desea, puede ocultar el bot\xf3n ",(0,a.jsx)(s.strong,{children:"Cambiar"})," para que los usuarios no puedan modificar sus contrase\xf1as. Para ello, desmarque esta opci\xf3n."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"Opciones",children:"Opciones"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Filtering of commands and project methods in the formula editor and 4D Write Pro documents"}),":\nFor security reasons, by default 4D restricts access to the commands, functions and project methods in the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html",children:"Formula editor"})," in Application mode or added to mutlistyle areas or 4D Write Pro documents using the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html",children:"ST INSERT EXPRESSION"})," command: only certain 4D functions and project methods that have been explicitly declared using the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," command can be used. Puede eliminar total o parcialmente este filtrado mediante las siguientes opciones."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Activado para todos"})," (opci\xf3n por defecto): el acceso a los comandos, funciones y m\xe9todos proyecto est\xe1 restringido para todos los usuarios, incluidos el Dise\xf1ador y el Administrador."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Desactivado para el Dise\xf1ador y el Administrador"}),": esta opci\xf3n concede acceso completo a los comandos 4D y a los m\xe9todos s\xf3lo al Dise\xf1ador y al Administrador. Permite definir un modo de acceso ilimitado a los comandos y m\xe9todos sin perder el control de las operaciones efectuadas. Durante la fase de desarrollo, este modo puede utilizarse para probar libremente todas las f\xf3rmulas, informes, etc. Durante el funcionamiento, puede utilizarse para definir soluciones seguras que permitan el acceso temporal a comandos y m\xe9todos. This consists in changing the user (via the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html",children:"CHANGE CURRENT USER"})," command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.\n",(0,a.jsx)(s.strong,{children:"Nota:"})," si se ha activado el acceso completo mediante la opci\xf3n anterior, esta opci\xf3n no tendr\xe1 ning\xfan efecto."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Desactivado para todos"}),": esta opci\xf3n desactiva el control en las f\xf3rmulas. Cuando esta opci\xf3n est\xe1 marcada, los usuarios tienen acceso a todos los comandos 4D, plug-ins y m\xe9todos proyecto (excepto los invisibles).\n",(0,a.jsx)(s.strong,{children:"Nota:"})," esta opci\xf3n tiene prioridad sobre el comando ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"}),". Cuando se selecciona, este comando no hace nada."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Autorizar las propiedades usuario"}),": debe marcar esta opci\xf3n para poder mostrar cajas de di\xe1logo separadas para las propiedades usuario. Cuando esta opci\xf3n est\xe1 marcada, hay disponibles hasta tres cuadros de di\xe1logo: ",(0,a.jsx)(s.strong,{children:"Propiedades estructura"}),", ",(0,a.jsx)(s.strong,{children:"Propiedades usuario"}),", y ",(0,a.jsx)(s.strong,{children:"Propiedades usuario para archivo de datos"}),". Para m\xe1s informaci\xf3n, consulte ",(0,a.jsx)(s.a,{href:"/docs/es/settings/overview#user-settings",children:"Propiedades usuario"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:'Execute "On Host Database Event" method of the components'}),": The ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html",children:"On Host Database Event database method"})," facilitates the initialization and backup phases for 4D components. Por razones de seguridad, debe autorizar expl\xedcitamente la ejecuci\xf3n de este m\xe9todo en cada base de datos local. Para hacer esto, debe marcar esta opci\xf3n. Por defecto, no est\xe1 marcado."]}),"\n",(0,a.jsx)(s.p,{children:"Cuando esta opci\xf3n est\xe1 seleccionada:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"los componentes 4D est\xe1n cargados,"}),"\n",(0,a.jsxs)(s.li,{children:["cada m\xe9todo base ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html",children:"On Host Database Event"})," del componente (si lo hay) es llamado por la base local,"]}),"\n",(0,a.jsx)(s.li,{children:"se ejecuta el c\xf3digo del m\xe9todo."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Cuando no est\xe1 marcada:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Los componentes 4D se cargan, pero tienen que gestionar ellos mismos sus fases de inicializaci\xf3n y copia de seguridad."}),"\n",(0,a.jsx)(s.li,{children:"el desarrollador del componente tiene que publicar los m\xe9todos del componente que deben ser llamados por la base de datos anfitriona durante estas fases (inicio y cierre)"}),"\n",(0,a.jsx)(s.li,{children:"el desarrollador de la base local debe llamar a los m\xe9todos apropiados del componente en el momento adecuado (debe estar contemplado en la documentaci\xf3n del componente)."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,s,o)=>{var a=o(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,o){var a,i={},c=null,l=null;for(a in void 0!==o&&(c=""+o),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)r.call(s,a)&&!d.hasOwnProperty(a)&&(i[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:c,ref:l,props:i,_owner:t.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},474848:(e,s,o)=>{e.exports=o(221020)},28453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>t});var a=o(296540);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);