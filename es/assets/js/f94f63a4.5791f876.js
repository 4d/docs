"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81017"],{370045:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>t,contentTitle:()=>c});var r=JSON.parse('{"id":"Project/architecture","title":"Arquitectura de un proyecto","description":"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta ra\xedz del proyecto (carpeta paquete). Por ejemplo:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Project/architecture.md","sourceDirName":"Project","slug":"/Project/architecture","permalink":"/docs/es/20/Project/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"architecture","title":"Arquitectura de un proyecto"},"sidebar":"docs","previous":{"title":"Gesti\xf3n del proyecto","permalink":"/docs/es/20/Project/overview"},"next":{"title":"Documentar un proyecto","permalink":"/docs/es/20/Project/documentation"}}'),d=s("785893"),i=s("250065");let o={id:"architecture",title:"Arquitectura de un proyecto"},c=void 0,a={},t=[{value:"Carpeta <code>Project</code>",id:"carpeta-project",level:2},{value:"archivo <code>&lt;applicationName&gt;.4DProject</code>",id:"archivo-applicationname4dproject",level:3},{value:"<code>Sources</code>",id:"sources",level:3},{value:"<code>DatabaseMethods</code>",id:"databasemethods",level:4},{value:"<code>M\xe9todos</code>",id:"m\xe9todos",level:4},{value:"<code>Clases</code>",id:"clases",level:4},{value:"<code>Formularios</code>",id:"formularios",level:4},{value:"<code>TableForms</code>",id:"tableforms",level:4},{value:"<code>Triggers</code>",id:"triggers",level:4},{value:"<code>Trash</code>",id:"trash",level:3},{value:"<code>DerivedData</code>",id:"deriveddata",level:3},{value:"<code>Libraries</code>",id:"libraries",level:2},{value:"<code>Resources</code>",id:"resources",level:2},{value:"<code>Datos</code>",id:"datos",level:2},{value:"<code>Settings</code> (datos del usuario)",id:"settings-datos-del-usuario",level:3},{value:"<code>Logs</code>",id:"logs",level:3},{value:"<code>Settings</code> (usuario)",id:"settings-usuario",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userpreferencesusername",level:2},{value:"<code>Componentes</code>",id:"componentes",level:2},{value:"<code>Plugins</code>",id:"plugins",level:2},{value:"<code>Documentation</code>",id:"documentation",level:2},{value:"<code>WebFolder</code>",id:"webfolder",level:2},{value:"Archivo <code>.gitignore</code> (opcional)",id:"archivo-gitignore-opcional",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta ra\xedz del proyecto (carpeta paquete). Por ejemplo:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["MyPackage (",(0,d.jsx)(n.em,{children:"carpeta ra\xedz del proyecto"}),")\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Componentes"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Datos"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Logs"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Propiedades"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Documentation"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Plugins"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Project"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Sources"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Trash"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Resources"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Propiedades"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"userPreferences.jSmith"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"WebFolder"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:['Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversi\xf3n de bases en proyectos" en ',(0,d.jsx)(n.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"carpeta-project",children:["Carpeta ",(0,d.jsx)(n.code,{children:"Project"})]}),"\n",(0,d.jsx)(n.p,{children:"La carpeta Project suele contener la siguiente jerarqu\xeda:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["archivo ",(0,d.jsx)(n.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Sources"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Clases"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"DatabaseMethods"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"M\xe9todos"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Formularios"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"TableForms"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Triggers"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Trash"})," (si hay)"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"archivo-applicationname4dproject",children:["archivo ",(0,d.jsx)(n.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,d.jsx)(n.p,{children:"El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"4D"}),"\n",(0,d.jsxs)(n.li,{children:["4D Server (s\xf3lo lectura, ver ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/clientServer#opening-a-remote-project",children:"Abrir un proyecto remoto"}),")"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"En los proyectos 4D, el desarrollo se realiza con 4D y el desarrollo multiusuarios se gestiona a trav\xe9s de las herramientas de control de versi\xf3n. 4D Server puede abrir archivos .4DProject para realizar pruebas."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Este archivo texto tambi\xe9n puede contener llaves de configuraci\xf3n, en particular ",(0,d.jsx)(n.a,{href:"/docs/es/20/Preferences/general#excluding-tokens-in-existing-projects",children:(0,d.jsx)(n.code,{children:'"tokenizedText": false'})}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"sources",children:(0,d.jsx)(n.code,{children:"Sources"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"catalog.4DCatalog"}),(0,d.jsx)(n.td,{children:"Definiciones de tablas y campos"}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"folders.json"}),(0,d.jsx)(n.td,{children:"Definiciones de carpetas del Explorador"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menus.json"}),(0,d.jsx)(n.td,{children:"Definiciones de los men\xfas"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"settings.4DSettings"}),(0,d.jsxs)(n.td,{children:["Propiedades de la base ",(0,d.jsx)(n.em,{children:"Structure"}),". No se tienen en cuenta si se definen ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.a,{href:"#settings-user",children:"par\xe1metros de usuario"})})," o ",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.a,{href:"#settings-user-data",children:"par\xe1metros de usuario para datos"})})," (ver tambi\xe9n ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),". ",(0,d.jsx)(n.strong,{children:"Atenci\xf3n"}),": en las aplicaciones compiladas, la configuraci\xf3n de la estructura se almacena en el archivo .4dz (de s\xf3lo lectura). Para las necesidades de despliegue, es necesario ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/user-settings#enabling-user-settings",children:"habilitar"})," y utilizar ",(0,d.jsx)(n.em,{children:"par\xe1metros usuario"})," o ",(0,d.jsx)(n.em,{children:"par\xe1metros usuario para datos"})," para definir par\xe1metros personalizados."]}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tips.json"}),(0,d.jsx)(n.td,{children:"Mensajes de ayuda definidos"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lists.json"}),(0,d.jsx)(n.td,{children:"Listas definidas"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"filters.json"}),(0,d.jsx)(n.td,{children:"Filtros definidos"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"styleSheets.css"}),(0,d.jsx)(n.td,{children:"Hojas de estilo CSS"}),(0,d.jsx)(n.td,{children:"CSS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"styleSheets_mac.css"}),(0,d.jsx)(n.td,{children:"Hojas de estilo css de Mac (a partir de una base binaria convertida)"}),(0,d.jsx)(n.td,{children:"CSS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"styleSheets_windows.css"}),(0,d.jsx)(n.td,{children:"Hojas de estilo css en Windows (a partir de una base binaria convertida)"}),(0,d.jsx)(n.td,{children:"CSS"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"databasemethods",children:(0,d.jsx)(n.code,{children:"DatabaseMethods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"databaseMethodName"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todos base definidos en el proyecto. Un archivo por m\xe9todo base"}),(0,d.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"m\xe9todos",children:(0,d.jsx)(n.code,{children:"M\xe9todos"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"methodName"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todos proyecto definidos en el proyecto. Un archivo por m\xe9todo"}),(0,d.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"clases",children:(0,d.jsx)(n.code,{children:"Clases"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"className"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todo de definici\xf3n de clases usuario, que permite instanciar objetos espec\xedficos. Un archivo por clase, el nombre del archivo es el nombre de la clase"}),(0,d.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"formularios",children:(0,d.jsx)(n.code,{children:"Formularios"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,d.jsx)(n.td,{children:"Descripci\xf3n del formulario proyecto"}),(0,d.jsx)(n.td,{children:"json"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todo formulario proyecto"}),(0,d.jsx)(n.td,{children:"text"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"formName"}),"/Images/",(0,d.jsx)(n.em,{children:"pictureName"})]}),(0,d.jsx)(n.td,{children:"Imagen est\xe1tica del formulario proyecto"}),(0,d.jsx)(n.td,{children:"picture"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,d.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todos objeto. Un archivo por m\xe9todo objeto"}),(0,d.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"tableforms",children:(0,d.jsx)(n.code,{children:"TableForms"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Input/",(0,d.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,d.jsx)(n.td,{children:"Descripci\xf3n del formulario de entrada de la tabla (n es el n\xfamero de tabla)"}),(0,d.jsx)(n.td,{children:"json"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Input/",(0,d.jsx)(n.em,{children:"formName"}),"/Images/",(0,d.jsx)(n.em,{children:"pictureName"})]}),(0,d.jsx)(n.td,{children:"Im\xe1genes est\xe1ticas del formulario de entrada de la tabla"}),(0,d.jsx)(n.td,{children:"picture"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Input/",(0,d.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todo del formulario de entrada de la tabla"}),(0,d.jsx)(n.td,{children:"text"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Input/",(0,d.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,d.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todos objeto del formulario de entrada. Un archivo por m\xe9todo objeto"}),(0,d.jsx)(n.td,{children:"text"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Output/",(0,d.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,d.jsx)(n.td,{children:"Descripci\xf3n del formulario de salida de la tabla (n es el n\xfamero de tabla)"}),(0,d.jsx)(n.td,{children:"json"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Output/",(0,d.jsx)(n.em,{children:"formName"}),"/Images/",(0,d.jsx)(n.em,{children:"pictureName"})]}),(0,d.jsx)(n.td,{children:"Im\xe1genes est\xe1ticas del formulario de salida de la tabla"}),(0,d.jsx)(n.td,{children:"picture"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Output/",(0,d.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todo del formulario de salida de la tabla"}),(0,d.jsx)(n.td,{children:"text"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"n"}),"/Output/",(0,d.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,d.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todos objeto del formulario de salida. Un archivo por m\xe9todo objeto"}),(0,d.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"triggers",children:(0,d.jsx)(n.code,{children:"Triggers"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["table_",(0,d.jsx)(n.em,{children:"n"}),".4dm"]}),(0,d.jsx)(n.td,{children:"M\xe9todos trigger definidos en el proyecto. Un archivo de activaci\xf3n por tabla (n es el n\xfamero de tabla)"}),(0,d.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versi\xf3n."]}),"\n",(0,d.jsx)(n.h3,{id:"trash",children:(0,d.jsx)(n.code,{children:"Trash"})}),"\n",(0,d.jsx)(n.p,{children:"La carpeta Trash contiene los m\xe9todos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"M\xe9todos"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"Formularios"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"TableForms"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:['Dentro de estas carpetas, los nombres de los elementos eliminados van entre par\xe9ntesis, por ejemplo "(myMethod).4dm". La organizaci\xf3n de las carpetas es id\xe9ntica a la carpeta ',(0,d.jsx)(n.a,{href:"#sources",children:"Sources"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"deriveddata",children:(0,d.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,d.jsx)(n.p,{children:"La carpeta DerivedData contiene datos en cach\xe9 utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea autom\xe1ticamente cuando es necesario. Puede ignorar esta carpeta."}),"\n",(0,d.jsx)(n.h2,{id:"libraries",children:(0,d.jsx)(n.code,{children:"Libraries"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Esta carpeta se utiliza s\xf3lo en macOS."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["La carpeta Librairies contiene el archivo resultante de una compilaci\xf3n con el ",(0,d.jsx)(n.a,{href:"/docs/es/20/Project/compiler#silicon-compiler",children:"compilador Silicon"})," en macOS."]}),"\n",(0,d.jsx)(n.h2,{id:"resources",children:(0,d.jsx)(n.code,{children:"Resources"})}),"\n",(0,d.jsxs)(n.p,{children:["La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados del proyecto. En esta carpeta puede colocar todos los archivos necesarios para la traducci\xf3n o personalizaci\xf3n de la interfaz de la aplicaci\xf3n (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos autom\xe1ticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e im\xe1genes est\xe1ticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el ",(0,d.jsx)(n.em,{children:"manual 4D Server"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"item"})}),(0,d.jsx)(n.td,{children:"Archivos y carpetas de recursos del proyecto"}),(0,d.jsx)(n.td,{children:"varios"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["Images/Library/",(0,d.jsx)(n.em,{children:"item"})]}),(0,d.jsx)(n.td,{children:"Im\xe1genes de la librer\xeda de im\xe1genes como archivos separados(*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se a\xf1ade un n\xfamero al nombre."}),(0,d.jsx)(n.td,{children:"picture"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"(*) s\xf3lo si el proyecto fue exportado desde una base binaria .4db."}),"\n",(0,d.jsx)(n.h2,{id:"datos",children:(0,d.jsx)(n.code,{children:"Datos"})}),"\n",(0,d.jsx)(n.p,{children:"La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data.4dd(*)"}),(0,d.jsxs)(n.td,{children:["Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicaci\xf3n abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicaci\xf3n de este archivo, aparecer\xe1 la caja de di\xe1logo ",(0,d.jsx)(n.em,{children:"Abrir un archivo de datos"})," para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo"]}),(0,d.jsx)(n.td,{children:"binary"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data.journal"}),(0,d.jsx)(n.td,{children:"Se crea s\xf3lo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operaci\xf3n sobre los datos provoca dos acciones simult\xe1neas: la primera sobre los datos (la instrucci\xf3n se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripci\xf3n de la operaci\xf3n). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos s\xf3lo puede trabajar con un \xfanico archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos."}),(0,d.jsx)(n.td,{children:"binary"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data.match"}),(0,d.jsx)(n.td,{children:"(interno) UUID correspondiente al n\xfamero de la tabla"}),(0,d.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar."}),"\n",(0,d.jsxs)(n.h3,{id:"settings-datos-del-usuario",children:[(0,d.jsx)(n.code,{children:"Settings"})," (datos del usuario)"]}),"\n",(0,d.jsxs)(n.p,{children:["Esta carpeta contiene los ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/user-settings#user-settings-for-data-file",children:(0,d.jsx)(n.strong,{children:"par\xe1metros usuario para los datos"})})," utilizados para la administraci\xf3n de la aplicaci\xf3n."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Estos par\xe1metros tienen prioridad sobre los ",(0,d.jsx)(n.a,{href:"#settings-user",children:"par\xe1metros de usuario"})," y los ",(0,d.jsx)(n.a,{href:"#sources",children:"par\xe1metros de estructura"}),". Ver tambi\xe9n ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"directory.json"}),(0,d.jsx)(n.td,{children:"Descripci\xf3n de los grupos y usuarios de 4D y sus derechos de acceso cuando la aplicaci\xf3n se lanza con este archivo de datos."}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup.4DSettings"}),(0,d.jsxs)(n.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,d.jsx)(n.a,{href:"/docs/es/20/Backup/settings",children:"opciones de copia de seguridad"})," cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,d.jsx)(n.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"settings.4DSettings"}),(0,d.jsx)(n.td,{children:"Propiedades de la base personalizadas para este archivo de datos."}),(0,d.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"logs",children:(0,d.jsx)(n.code,{children:"Logs"})}),"\n",(0,d.jsx)(n.p,{children:"La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"conversi\xf3n de base de datos,"}),"\n",(0,d.jsx)(n.li,{children:"peticiones del servidor web,"}),"\n",(0,d.jsxs)(n.li,{children:["registro de actividades de backup/restituci\xf3n (",(0,d.jsx)(n.em,{children:"Backup Journal[xxx].txt"}),", ver ",(0,d.jsx)(n.a,{href:"/docs/es/20/Backup/backup#backup-journal",children:"Historial de backup"}),")"]}),"\n",(0,d.jsx)(n.li,{children:"depuraci\xf3n de comandos,"}),"\n",(0,d.jsx)(n.li,{children:"Peticiones 4D Server (generadas en en los equipos cliente y en el servidor)."}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Una carpeta Logs adicional est\xe1 disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver el comando ",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page485.html",children:"Get 4D folder"}),") para los archivos de registro de mantenimiento y en los casos en que la carpeta de datos es de s\xf3lo lectura."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"settings-usuario",children:[(0,d.jsx)(n.code,{children:"Settings"})," (usuario)"]}),"\n",(0,d.jsxs)(n.p,{children:["Esta carpeta contiene los ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/user-settings#user-settings",children:(0,d.jsx)(n.strong,{children:"par\xe1metros usuario"})})," utilizados para la administraci\xf3n de la aplicaci\xf3n."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Estos par\xe1metros tienen prioridad sobre el archivo de ",(0,d.jsx)(n.a,{href:"#sources",children:"par\xe1metros de estructura"}),". Sin embargo, si existen ",(0,d.jsx)(n.a,{href:"#settings-user-data",children:"par\xe1metros de usuario para los datos"}),", tienen prioridad sobre los par\xe1metros de usuario. Ver tambi\xe9n ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"directory.json"}),(0,d.jsx)(n.td,{children:"Descripci\xf3n de los grupos y usuarios de 4D para la aplicacion, as\xed como sus derechos de acceso"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Backup.4DSettings"}),(0,d.jsxs)(n.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,d.jsx)(n.a,{href:"/docs/es/20/Backup/settings",children:"opciones de copia de seguridad"}),") cuando se lanza cada copia de seguridad. Este archivo tambi\xe9n puede utilizarse para leer o definir opciones adicionales, como la cantidad de informaci\xf3n almacenada en el ",(0,d.jsx)(n.em,{children:"diario de backup"}),". Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,d.jsx)(n.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BuildApp.4DSettings"}),(0,d.jsxs)(n.td,{children:["Archivo de par\xe1metros de generaci\xf3n, creado autom\xe1ticamente cuando se utiliza la caja de di\xe1logo del generador de aplicaciones o del comando ",(0,d.jsx)(n.code,{children:"BUILD APPLICATION"})]}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"settings.4DSettings"}),(0,d.jsx)(n.td,{children:"Par\xe1metros personalizados para este proyecto (todos los archivos de datos)"}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logConfig.json"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20/Debugging/debugLogFiles#using-a-log-configuration-file",children:"Archivo de configuraci\xf3n de historial"})," personalizado"]}),(0,d.jsx)(n.td,{children:"json"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"userpreferencesusername",children:(0,d.jsx)(n.code,{children:"userPreferences.<userName>"})}),"\n",(0,d.jsx)(n.p,{children:"Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Contenido"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{children:"Formato"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"methodPreferences.json"}),(0,d.jsx)(n.td,{children:"Preferencias del editor de c\xf3digo del usuario actual"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"methodWindowPositions.json"}),(0,d.jsx)(n.td,{children:"Posici\xf3n de la ventana de usuario actual para los m\xe9todos"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"formWindowPositions.json"}),(0,d.jsx)(n.td,{children:"Posici\xf3n de la ventana de usuario actual para los formularios"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"workspace.json"}),(0,d.jsx)(n.td,{children:"Lista de ventanas abiertas; en macOS, orden de las ventanas de la pesta\xf1a"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"debuggerCatches.json"}),(0,d.jsx)(n.td,{children:"Llamadas a los comandos"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"recentTables.json"}),(0,d.jsx)(n.td,{children:"Lista ordenada de tablas"}),(0,d.jsx)(n.td,{children:"JSON"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"preferences.4DPreferences"}),(0,d.jsx)(n.td,{children:"Ruta de datos actual y posiciones de la ventana principal"}),(0,d.jsx)(n.td,{children:"XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CompilerIntermediateFiles"}),(0,d.jsx)(n.td,{children:"Archivos intermedios resultantes de la compilaci\xf3n Apple Silicon"}),(0,d.jsx)(n.td,{children:"Folder"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"componentes",children:(0,d.jsx)(n.code,{children:"Componentes"})}),"\n",(0,d.jsx)(n.p,{children:"Esta carpeta contiene los componentes que deben estar disponibles en el proyecto aplicaci\xf3n. Debe almacenarse en el mismo nivel que la carpeta Project."}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - para el despliegue: ",(0,d.jsx)(n.a,{href:"/docs/es/20/Desktop/building#build-component",children:"cree el componente"})," y coloque el archivo .4dz resultante en una carpeta .4dbase en la carpeta Components de la aplicaci\xf3n local."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"plugins",children:(0,d.jsx)(n.code,{children:"Plugins"})}),"\n",(0,d.jsx)(n.p,{children:"Esta carpeta contiene los plug-ins que deben estar disponibles en el proyecto aplicaci\xf3n. Debe almacenarse en el mismo nivel que la carpeta Project."}),"\n",(0,d.jsx)(n.h2,{id:"documentation",children:(0,d.jsx)(n.code,{children:"Documentation"})}),"\n",(0,d.jsx)(n.p,{children:"Esta carpeta contiene todos los archivos de documentaci\xf3n (.md) creados para los elementos del proyecto como clases, m\xe9todos o formularios. Los archivos de documentaci\xf3n se gestionan y se muestran en el Explorador 4D."}),"\n",(0,d.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,d.jsx)(n.a,{href:"/docs/es/20/Project/documentation",children:"Documentar un proyecto"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"webfolder",children:(0,d.jsx)(n.code,{children:"WebFolder"})}),"\n",(0,d.jsx)(n.p,{children:"Define la carpeta ra\xedz por defecto del servidor web 4D para las p\xe1ginas, las im\xe1genes, etc. Se crea autom\xe1ticamente cuando se lanza el servidor web por primera vez."}),"\n",(0,d.jsxs)(n.h2,{id:"archivo-gitignore-opcional",children:["Archivo ",(0,d.jsx)(n.code,{children:".gitignore"})," (opcional)"]}),"\n",(0,d.jsxs)(n.p,{children:["Archivo que especifica los archivos que ser\xe1n ignorados por git. Puede incluir un archivo gitignore en sus proyectos utilizando la opci\xf3n ",(0,d.jsx)(n.strong,{children:"Crear un archivo .gitignore"})," en la p\xe1gina ",(0,d.jsx)(n.strong,{children:"General"})," de las preferencias. Para configurar el contenido de ese archivo, ver ",(0,d.jsxs)(n.a,{href:"/docs/es/20/Preferences/general#create-gitignore-file",children:["Crear un archivo ",(0,d.jsx)(n.code,{children:".gitignore"})]}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(667294);let d={},i=r.createContext(d);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);