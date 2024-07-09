/*! For license information please see 51608e3d.f718a2df.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26347],{740994:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=o(474848),n=o(28453);const i={id:"overview",title:"Presentaci\xf3n del control de acceso"},r=void 0,c={id:"Users/overview",title:"Presentaci\xf3n del control de acceso",description:"Si diferentes personas utilizan una aplicaci\xf3n, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades seg\xfan de los usuarios conectados. Tambi\xe9n es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/es/20/Users/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"Presentaci\xf3n del control de acceso"},sidebar:"docs",previous:{title:"Access Rights",permalink:"/docs/es/20/category/access-rights"},next:{title:"Gesti\xf3n de usuarios y grupos 4D",permalink:"/docs/es/20/Users/editing"}},l={},d=[{value:"Control de acceso en las aplicaciones multiusuario",id:"Control-de-acceso-en-las-aplicaciones-multiusuario",level:2},{value:"Control de acceso en las aplicaciones monopuesto",id:"Control-de-acceso-en-las-aplicaciones-monopuesto",level:2},{value:"Identificaci\xf3n del usuario",id:"Identificaci\xf3n-del-usuario",level:3},{value:"Protecci\xf3n del acceso",id:"Protecci\xf3n-del-acceso",level:3},{value:"Privilegios",id:"Privilegios",level:4},{value:"Cifrado de datos",id:"Cifrado-de-datos",level:4}];function t(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Si diferentes personas utilizan una aplicaci\xf3n, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades seg\xfan de los usuarios conectados. Tambi\xe9n es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto."}),"\n",(0,a.jsx)(s.p,{children:"La estrategia de control de acceso 4D depende de la configuraci\xf3n de su despliegue:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"en las aplicaciones multiusuario, puede confiar en los usuarios y grupos 4D,"}),"\n",(0,a.jsxs)(s.li,{children:["en las aplicaciones monopuesto, el acceso de los usuarios se controla a trav\xe9s de la sesi\xf3n del sistema, mediante comandos como ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html",children:(0,a.jsx)(s.code,{children:"Current system user"})}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Consulte la documentaci\xf3n ",(0,a.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"Gu\xeda de seguridad de 4D"})," para una visi\xf3n de conjunto de las funciones de seguridad de 4D."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"Control-de-acceso-en-las-aplicaciones-multiusuario",children:"Control de acceso en las aplicaciones multiusuario"}),"\n",(0,a.jsx)(s.p,{children:"Las aplicaciones multiusuario se despliegan con 4D Server. Incluyen aplicaciones cliente-servidor, web o REST."}),"\n",(0,a.jsxs)(s.p,{children:["En las aplicaciones multiusuario, el control de acceso se realiza a trav\xe9s de ",(0,a.jsx)(s.a,{href:"/docs/es/20/Users/editing",children:"usuarios y grupos 4D"}),". Puede crear usuarios, asignar contrase\xf1as, crear grupos de acceso con diferentes niveles de privilegios en la aplicaci\xf3n."]}),"\n",(0,a.jsxs)(s.p,{children:["Inicie el sistema de control de acceso por contrase\xf1a 4D con 4D Server, ",(0,a.jsx)(s.a,{href:"/docs/es/20/Users/editing#designer-and-administrator",children:" asignando una contrase\xf1a al usuario Dise\xf1ador"}),". Hasta que no le asigne una contrase\xf1a al Dise\xf1ador, todos los accesos a la aplicaci\xf3n se hacen con los derechos de acceso del Dise\xf1ador, incluso si ha ",(0,a.jsx)(s.a,{href:"/docs/es/20/Users/editing",children:"configurado usuarios y grupos"})," (cuando se abre la aplicaci\xf3n, no se requiere ninguna identificaci\xf3n). Se puede abrir cualquier parte de la aplicaci\xf3n."]}),"\n",(0,a.jsxs)(s.p,{children:["Cuando se asigna una contrase\xf1a al Dise\xf1ador, todos los privilegios de acceso entran en vigor. Para conectarse a la aplicaci\xf3n o a un ",(0,a.jsx)(s.a,{href:"/docs/es/20/Users/editing#assigning-group-access",children:"servidor con acceso protegido"}),", los usuarios remotos deben introducir un nombre de usuario/contrase\xf1a."]}),"\n",(0,a.jsx)(s.p,{children:"Para desactivar el sistema de acceso por contrase\xf1a, basta con eliminar la contrase\xf1a del Dise\xf1ador."}),"\n",(0,a.jsx)(s.h2,{id:"Control-de-acceso-en-las-aplicaciones-monopuesto",children:"Control de acceso en las aplicaciones monopuesto"}),"\n",(0,a.jsxs)(s.p,{children:["Las aplicaciones monopuesto son aplicaciones de escritorio, desplegadas con 4D o fusionadas con 4D Volume License. En las aplicaciones monopuesto todos los usuarios que abren la aplicaci\xf3n son los ",(0,a.jsx)(s.a,{href:"/docs/es/20/Users/editing#designer-and-administrator",children:"Dise\xf1adores"}),', tienen todos los privilegios y su nombre es "Dise\xf1ador". El control de acceso no se basa en los usuarios y los grupos de 4D, sino en las ',(0,a.jsx)(s.strong,{children:"sesiones usuario"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"Identificaci\xf3n-del-usuario",children:"Identificaci\xf3n del usuario"}),"\n",(0,a.jsxs)(s.p,{children:["Para identificar el usuario actual en una aplicaci\xf3n 4D monopuesto, puede confiar en el comando ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html",children:(0,a.jsx)(s.code,{children:"Current system user"})}),", que devuelve el usuario que abri\xf3 la sesi\xf3n sistema. Por lo tanto, la autenticaci\xf3n de los usuarios se delega al sistema operativo."]}),"\n",(0,a.jsx)(s.p,{children:"A continuaci\xf3n, puede permitir o denegar el acceso dentro de su aplicaci\xf3n utilizando un c\xf3digo como:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"If(Current system user = $user) //vous pouvez stocker les utilisateurs dans une table de base de donn\xe9es\n    // dar acceso a algunas funcionalidades\nEnf if\n"})}),"\n",(0,a.jsxs)(s.p,{children:['Si desea utilizar el nombre de usuario del sistema en 4D en lugar de "Dise\xf1ador" (por ejemplo en los archivos de registro), puede llamar al comando ',(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html",children:(0,a.jsx)(s.code,{children:"SET USER ALIAS"})}),", por ejemplo:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"SET USER ALIAS(Current system user)\n"})}),"\n",(0,a.jsx)(s.h3,{id:"Protecci\xf3n-del-acceso",children:"Protecci\xf3n del acceso"}),"\n",(0,a.jsx)(s.h4,{id:"Privilegios",children:"Privilegios"}),"\n",(0,a.jsx)(s.p,{children:"En una m\xe1quina compartida por varios usuarios, puede instalar la aplicaci\xf3n 4D en una carpeta y dar privilegios de acceso usuario apropiados a la carpeta a nivel del sistema operativo."}),"\n",(0,a.jsx)(s.h4,{id:"Cifrado-de-datos",children:"Cifrado de datos"}),"\n",(0,a.jsxs)(s.p,{children:["Si desea proteger el acceso a los datos de la aplicaci\xf3n, se recomienda ",(0,a.jsx)(s.a,{href:"/docs/es/20/MSC/encrypt",children:"encriptar los datos"})," y proveer la clave de encriptaci\xf3n al usuario o usuarios autorizados."]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},221020:(e,s,o)=>{var a=o(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,o){var a,i={},d=null,t=null;for(a in void 0!==o&&(d=""+o),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(t=s.ref),s)r.call(s,a)&&!l.hasOwnProperty(a)&&(i[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:d,ref:t,props:i,_owner:c.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},474848:(e,s,o)=>{e.exports=o(221020)},28453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>c});var a=o(296540);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);