"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26347],{740994:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=a(474848),i=a(28453);const n={id:"overview",title:"Presentaci\xf3n del control de acceso"},c=void 0,r={id:"Users/overview",title:"Presentaci\xf3n del control de acceso",description:"Si diferentes personas utilizan una aplicaci\xf3n, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades seg\xfan de los usuarios conectados. Tambi\xe9n es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/es/20/Users/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"Presentaci\xf3n del control de acceso"},sidebar:"docs",previous:{title:"Access Rights",permalink:"/docs/es/20/category/access-rights"},next:{title:"Gesti\xf3n de usuarios y grupos 4D",permalink:"/docs/es/20/Users/editing"}},l={},d=[{value:"Control de acceso en las aplicaciones multiusuario",id:"control-de-acceso-en-las-aplicaciones-multiusuario",level:2},{value:"Control de acceso en las aplicaciones monopuesto",id:"control-de-acceso-en-las-aplicaciones-monopuesto",level:2},{value:"Identificaci\xf3n del usuario",id:"identificaci\xf3n-del-usuario",level:3},{value:"Protecci\xf3n del acceso",id:"protecci\xf3n-del-acceso",level:3},{value:"Privilegios",id:"privilegios",level:4},{value:"Cifrado de datos",id:"cifrado-de-datos",level:4}];function t(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Si diferentes personas utilizan una aplicaci\xf3n, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades seg\xfan de los usuarios conectados. Tambi\xe9n es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto."}),"\n",(0,o.jsx)(s.p,{children:"La estrategia de control de acceso 4D depende de la configuraci\xf3n de su despliegue:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"en las aplicaciones multiusuario, puede confiar en los usuarios y grupos 4D,"}),"\n",(0,o.jsxs)(s.li,{children:["en las aplicaciones monopuesto, el acceso de los usuarios se controla a trav\xe9s de la sesi\xf3n del sistema, mediante comandos como ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html",children:(0,o.jsx)(s.code,{children:"Current system user"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["Consulte la documentaci\xf3n ",(0,o.jsx)(s.a,{href:"https://blog.4d.com/4d-security-guide/",children:"Gu\xeda de seguridad de 4D"})," para una visi\xf3n de conjunto de las funciones de seguridad de 4D."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"control-de-acceso-en-las-aplicaciones-multiusuario",children:"Control de acceso en las aplicaciones multiusuario"}),"\n",(0,o.jsx)(s.p,{children:"Las aplicaciones multiusuario se despliegan con 4D Server. Incluyen aplicaciones cliente-servidor, web o REST."}),"\n",(0,o.jsxs)(s.p,{children:["En las aplicaciones multiusuario, el control de acceso se realiza a trav\xe9s de ",(0,o.jsx)(s.a,{href:"/docs/es/20/Users/editing",children:"usuarios y grupos 4D"}),". Puede crear usuarios, asignar contrase\xf1as, crear grupos de acceso con diferentes niveles de privilegios en la aplicaci\xf3n."]}),"\n",(0,o.jsxs)(s.p,{children:["Inicie el sistema de control de acceso por contrase\xf1a 4D con 4D Server, ",(0,o.jsx)(s.a,{href:"/docs/es/20/Users/editing#designer-and-administrator",children:" asignando una contrase\xf1a al usuario Dise\xf1ador"}),". Hasta que no le asigne una contrase\xf1a al Dise\xf1ador, todos los accesos a la aplicaci\xf3n se hacen con los derechos de acceso del Dise\xf1ador, incluso si ha ",(0,o.jsx)(s.a,{href:"/docs/es/20/Users/editing",children:"configurado usuarios y grupos"})," (cuando se abre la aplicaci\xf3n, no se requiere ninguna identificaci\xf3n). Se puede abrir cualquier parte de la aplicaci\xf3n."]}),"\n",(0,o.jsxs)(s.p,{children:["Cuando se asigna una contrase\xf1a al Dise\xf1ador, todos los privilegios de acceso entran en vigor. Para conectarse a la aplicaci\xf3n o a un ",(0,o.jsx)(s.a,{href:"/docs/es/20/Users/editing#assigning-group-access",children:"servidor con acceso protegido"}),", los usuarios remotos deben introducir un nombre de usuario/contrase\xf1a."]}),"\n",(0,o.jsx)(s.p,{children:"Para desactivar el sistema de acceso por contrase\xf1a, basta con eliminar la contrase\xf1a del Dise\xf1ador."}),"\n",(0,o.jsx)(s.h2,{id:"control-de-acceso-en-las-aplicaciones-monopuesto",children:"Control de acceso en las aplicaciones monopuesto"}),"\n",(0,o.jsxs)(s.p,{children:["Las aplicaciones monopuesto son aplicaciones de escritorio, desplegadas con 4D o fusionadas con 4D Volume License. En las aplicaciones monopuesto todos los usuarios que abren la aplicaci\xf3n son los ",(0,o.jsx)(s.a,{href:"/docs/es/20/Users/editing#designer-and-administrator",children:"Dise\xf1adores"}),', tienen todos los privilegios y su nombre es "Dise\xf1ador". El control de acceso no se basa en los usuarios y los grupos de 4D, sino en las ',(0,o.jsx)(s.strong,{children:"sesiones usuario"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"identificaci\xf3n-del-usuario",children:"Identificaci\xf3n del usuario"}),"\n",(0,o.jsxs)(s.p,{children:["Para identificar el usuario actual en una aplicaci\xf3n 4D monopuesto, puede confiar en el comando ",(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html",children:(0,o.jsx)(s.code,{children:"Current system user"})}),", que devuelve el usuario que abri\xf3 la sesi\xf3n sistema. Por lo tanto, la autenticaci\xf3n de los usuarios se delega al sistema operativo."]}),"\n",(0,o.jsx)(s.p,{children:"A continuaci\xf3n, puede permitir o denegar el acceso dentro de su aplicaci\xf3n utilizando un c\xf3digo como:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"If(Current system user = $user) //vous pouvez stocker les utilisateurs dans une table de base de donn\xe9es\n    // dar acceso a algunas funcionalidades\nEnf if\n"})}),"\n",(0,o.jsxs)(s.p,{children:['Si desea utilizar el nombre de usuario del sistema en 4D en lugar de "Dise\xf1ador" (por ejemplo en los archivos de registro), puede llamar al comando ',(0,o.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html",children:(0,o.jsx)(s.code,{children:"SET USER ALIAS"})}),", por ejemplo:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"SET USER ALIAS(Current system user)\n"})}),"\n",(0,o.jsx)(s.h3,{id:"protecci\xf3n-del-acceso",children:"Protecci\xf3n del acceso"}),"\n",(0,o.jsx)(s.h4,{id:"privilegios",children:"Privilegios"}),"\n",(0,o.jsx)(s.p,{children:"En una m\xe1quina compartida por varios usuarios, puede instalar la aplicaci\xf3n 4D en una carpeta y dar privilegios de acceso usuario apropiados a la carpeta a nivel del sistema operativo."}),"\n",(0,o.jsx)(s.h4,{id:"cifrado-de-datos",children:"Cifrado de datos"}),"\n",(0,o.jsxs)(s.p,{children:["Si desea proteger el acceso a los datos de la aplicaci\xf3n, se recomienda ",(0,o.jsx)(s.a,{href:"/docs/es/20/MSC/encrypt",children:"encriptar los datos"})," y proveer la clave de encriptaci\xf3n al usuario o usuarios autorizados."]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>r});var o=a(296540);const i={},n=o.createContext(i);function c(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);