"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62334"],{843262:function(e,o,a){a.r(o),a.d(o,{default:()=>u,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>d});var s=JSON.parse('{"id":"settings/security","title":"P\xe1gina seguridad","description":"Esta p\xe1gina contiene opciones relacionadas con la protecci\xf3n del acceso y de los datos de sus aplicaciones de escritorio.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/settings/security.md","sourceDirName":"settings","slug":"/settings/security","permalink":"/docs/es/settings/security","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fsecurity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"security","title":"P\xe1gina seguridad"},"sidebar":"docs","previous":{"title":"P\xe1gin PHP","permalink":"/docs/es/settings/php"},"next":{"title":"P\xe1gina de compatibilidad","permalink":"/docs/es/settings/compatibility"}}'),n=a("785893"),i=a("250065");let r={id:"security",title:"P\xe1gina seguridad"},d=void 0,c={},t=[{value:"Acceso a datos / Acceso de usuarios remotos",id:"acceso-a-datos--acceso-de-usuarios-remotos",level:2},{value:"Opciones",id:"opciones",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Esta p\xe1gina contiene opciones relacionadas con la protecci\xf3n del acceso y de los datos de sus aplicaciones de escritorio."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,n.jsx)(o.a,{href:"https://blog.4d.com/4d-security-guide/",children:"gu\xeda de seguridad de 4D"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"acceso-a-datos--acceso-de-usuarios-remotos",children:"Acceso a datos / Acceso de usuarios remotos"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Estos par\xe1metros no se aplican a las bases proyecto abiertas en modo monopuesto."}),"\n"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Acceso Dise\xf1o y al Explorador de ejecuci\xf3n"}),": da al grupo especificado la capacidad de entrar al modo Dise\xf1o de la base y mostrar el Explorador de ejecuci\xf3n."]}),"\n",(0,n.jsx)(o.p,{children:"Note que:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["La definici\xf3n de un grupo de acceso en el entorno Dise\xf1o tambi\xe9n permite desactivar la opci\xf3n ",(0,n.jsx)(o.strong,{children:"Crear una tabla"})," de la caja de di\xe1logo de importaci\xf3n de datos. Para m\xe1s informaci\xf3n sobre esta caja de di\xe1logo, consulte ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html",children:"Importar los datos desde los archivos"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["El Dise\xf1ador y el Administrador siempre tienen acceso al entorno de dise\xf1o y al Explorador de ejecuci\xf3n, incluso si no son parte expl\xedcitamente del grupo de acceso espec\xedfico. Para m\xe1s informaci\xf3n sobre usuarios y grupos de usuarios, consulta el cap\xedtulo ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html",children:"Usuarios y grupos"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Usuario por defecto"}),": cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. Ya no es necesario ingresar un nombre de usuario. Adem\xe1s, si no ha asociado una contrase\xf1a al usuario por defecto, la caja de di\xe1logo Contrase\xf1a ya no aparece y la base se abre directamente.\nEsta opci\xf3n simplifica el acceso a la base de datos a la vez que mantiene un sistema completo de control de datos."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Si ha asociado una contrase\xf1a al usuario predeterminado, al abrir la base aparece una caja de di\xe1logo en el que los usuarios deben introducir una contrase\xf1a."}),"\n",(0,n.jsxs)(o.li,{children:["Si no ha asociado una contrase\xf1a al Usuario Predeterminado, la caja de di\xe1logo de Identificaci\xf3n de Usuario no aparecer\xe1.",(0,n.jsx)(o.strong,{children:"Nota:"}),' puede "forzar" la visualizaci\xf3n de la caja de di\xe1logo Identificaci\xf3n de usuario cuando el modo "Usuario por defecto" est\xe1 activo, por ejemplo para conectarse como Administrador o Dise\xf1ador. Para ello, presione la tecla ',(0,n.jsx)(o.strong,{children:"May\xfas"})," mientras abre la base de datos o se conecta a ella."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Mostrar lista de usuarios en la caja de di\xe1logo Contrase\xf1a"}),': si se marca esta opci\xf3n, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contrase\xf1a en la caja de di\xe1logo de identificaci\xf3n de usuario. Si no est\xe1 marcada, los usuarios deben introducir tanto su nombre como su contrase\xf1a. Para obtener m\xe1s informaci\xf3n sobre las dos versiones de la caja de di\xe1logo de contrase\xf1a, consulte la secci\xf3n "Acceso a las bases protegidas" en [Presentaci\xf3n del control de acceso](',(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html"})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Ordenar la lista de los usuarios en orden alfab\xe9tico"})," (s\xf3lo disponible si est\xe1 marcada la opci\xf3n anterior): cuando esta opci\xf3n est\xe1 seleccionada, la lista de los usuarios de la caja de di\xe1logo de introducci\xf3n de contrase\xf1a se ordena por orden alfab\xe9tic"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Los usuarios pueden cambiar su contrase\xf1a"}),": cuando esta opci\xf3n est\xe1 marcada, aparece un bot\xf3n ",(0,n.jsx)(o.strong,{children:"Cambiar"}),' en la caja de di\xe1logo Identificaci\xf3n del usuario. Este bot\xf3n permite al usuario acceder a una caja de di\xe1logo que puede utilizar para modificar su contrase\xf1a (para m\xe1s informaci\xf3n sobre esta caja de di\xe1logo, consulte "Modificaci\xf3n de la contrase\xf1a por el usuario" en ',(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html",children:"Garantizar el mantenimiento del sistema"}),"). Si lo desea, puede ocultar el bot\xf3n ",(0,n.jsx)(o.strong,{children:"Cambiar"})," para que los usuarios no puedan modificar sus contrase\xf1as. Para ello, desmarque esta opci\xf3n."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"opciones",children:"Opciones"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Filtrado de comandos y m\xe9todos proyecto en el editor de f\xf3rmulas y en los documentos 4D View Pro y 4D Write Pro"}),":\npor razones de seguridad, por defecto 4D restringe el acceso a los comandos, funciones y m\xe9todos proyecto en el ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html",children:"Editor de f\xf3rmulas"})," en el modo Aplicaci\xf3n o a\xf1adido a \xe1reas multiestilo (usando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1281.html",children:"ST INSERT EXPRESSION"}),"), Documentos 4D Write Pro y 4D View Pro: s\xf3lo ciertas funciones 4D y m\xe9todos proyecto que han sido declarados expl\xedcitamente utilizando el comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"})," puedes ser utilizados. Puede eliminar total o parcialmente este filtrado mediante las siguientes opciones."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Activado para todos"})," (opci\xf3n por defecto): el acceso a los comandos, funciones y m\xe9todos proyecto est\xe1 restringido para todos los usuarios, incluidos el Dise\xf1ador y el Administrador."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Desactivado para el Dise\xf1ador y el Administrador"}),": esta opci\xf3n concede acceso completo a los comandos 4D y a los m\xe9todos s\xf3lo al Dise\xf1ador y al Administrador. Permite definir un modo de acceso ilimitado a los comandos y m\xe9todos sin perder el control de las operaciones efectuadas. Durante la fase de desarrollo, este modo puede utilizarse para probar libremente todas las f\xf3rmulas, informes, etc. Durante el funcionamiento, puede utilizarse para definir soluciones seguras que permitan el acceso temporal a comandos y m\xe9todos. Esto consiste en cambiar el usuario (a trav\xe9s del comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page289.html",children:"CHANGE CURRENT USER"}),") antes de llamar a una caja de di\xe1logo o iniciar un proceso de impresi\xf3n que requiere acceso completo a los comandos, y luego volver al usuario original cuando se complete la operaci\xf3n espec\xedfica.\n",(0,n.jsx)(o.strong,{children:"Nota:"})," si se ha activado el acceso completo mediante la opci\xf3n anterior, esta opci\xf3n no tendr\xe1 ning\xfan efecto."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Desactivado para todos"}),": esta opci\xf3n desactiva el control en las f\xf3rmulas. Cuando esta opci\xf3n est\xe1 marcada, los usuarios tienen acceso a todos los comandos 4D, plug-ins y m\xe9todos proyecto (excepto los invisibles).\n",(0,n.jsx)(o.strong,{children:"Nota:"})," esta opci\xf3n tiene prioridad sobre el comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page805.html",children:"SET ALLOWED METHODS"}),". Cuando se selecciona, este comando no hace nada."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Autorizar las propiedades usuario"}),": debe marcar esta opci\xf3n para poder mostrar cajas de di\xe1logo separadas para las propiedades usuario. Cuando esta opci\xf3n est\xe1 marcada, hay disponibles hasta tres cuadros de di\xe1logo: ",(0,n.jsx)(o.strong,{children:"Propiedades estructura"}),", ",(0,n.jsx)(o.strong,{children:"Propiedades usuario"}),", y ",(0,n.jsx)(o.strong,{children:"Propiedades usuario para archivo de datos"}),". Para m\xe1s informaci\xf3n, consulte ",(0,n.jsx)(o.a,{href:"/docs/es/settings/overview#user-settings",children:"Propiedades usuario"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:'Ejecutar el m\xe9todo "On Host Database Event" de los componentes'}),": el ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html",children:"m\xe9todo base On Host Database Event"})," facilita las fases de inicializaci\xf3n y copia de seguridad de los componentes 4D. Por razones de seguridad, debe autorizar expl\xedcitamente la ejecuci\xf3n de este m\xe9todo en cada base de datos local. Para hacer esto, debe marcar esta opci\xf3n. Por defecto, no est\xe1 marcado."]}),"\n",(0,n.jsx)(o.p,{children:"Cuando esta opci\xf3n est\xe1 seleccionada:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"los componentes 4D est\xe1n cargados,"}),"\n",(0,n.jsxs)(o.li,{children:["cada m\xe9todo base ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html",children:"On Host Database Event"})," del componente (si lo hay) es llamado por la base local,"]}),"\n",(0,n.jsx)(o.li,{children:"se ejecuta el c\xf3digo del m\xe9todo."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Cuando no est\xe1 marcada:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Los componentes 4D se cargan, pero tienen que gestionar ellos mismos sus fases de inicializaci\xf3n y copia de seguridad."}),"\n",(0,n.jsx)(o.li,{children:"el desarrollador del componente tiene que publicar los m\xe9todos del componente que deben ser llamados por la base de datos anfitriona durante estas fases (inicio y cierre)"}),"\n",(0,n.jsx)(o.li,{children:"el desarrollador de la base local debe llamar a los m\xe9todos apropiados del componente en el momento adecuado (debe estar contemplado en la documentaci\xf3n del componente)."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return r}});var s=a(667294);let n={},i=s.createContext(n);function r(e){let o=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);