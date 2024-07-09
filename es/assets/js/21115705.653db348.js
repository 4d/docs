/*! For license information please see 21115705.653db348.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94847],{699931:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var r=s(474848),d=s(28453);const i={id:"architecture",title:"Arquitectura de un proyecto"},o=void 0,c={id:"Project/architecture",title:"Arquitectura de un proyecto",description:"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta ra\xedz del proyecto (carpeta paquete). Por ejemplo:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/es/Project/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"architecture",title:"Arquitectura de un proyecto"},sidebar:"docs",previous:{title:"Generalidades",permalink:"/docs/es/Project/overview"},next:{title:"Settings",permalink:"/docs/es/settings/overview"}},a={},t=[{value:"Carpeta <code>Project</code>",id:"Carpeta-Project",level:2},{value:"archivo <code>&lt;applicationName&gt;.4DProject</code>",id:"archivo-applicationName4DProject",level:3},{value:"<code>Sources</code>",id:"Sources",level:3},{value:"<code>DatabaseMethods</code>",id:"DatabaseMethods",level:4},{value:"<code>M\xe9todos</code>",id:"M\xe9todos",level:4},{value:"<code>Clases</code>",id:"Clases",level:4},{value:"<code>Formularios</code>",id:"Formularios",level:4},{value:"<code>TableForms</code>",id:"TableForms",level:4},{value:"<code>Triggers</code>",id:"Triggers",level:4},{value:"<code>Trash</code>",id:"Trash",level:3},{value:"<code>DerivedData</code>",id:"DerivedData",level:3},{value:"<code>Libraries</code>",id:"Libraries",level:2},{value:"<code>Resources</code>",id:"Resources",level:2},{value:"<code>Data</code>",id:"Data",level:2},{value:"<code>Settings</code> (datos del usuario)",id:"Settings-datos-del-usuario",level:3},{value:"<code>Logs</code>",id:"Logs",level:3},{value:"<code>Settings</code> (usuario)",id:"Settings-usuario",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userPreferencesuserName",level:2},{value:"<code>Componentes</code>",id:"Componentes",level:2},{value:"<code>Plugins</code>",id:"Plugins",level:2},{value:"<code>Documentation</code>",id:"Documentation",level:2},{value:"<code>WebFolder</code>",id:"WebFolder",level:2},{value:"Archivo <code>.gitignore</code> (opcional)",id:"Archivo-gitignore-opcional",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una carpeta ra\xedz del proyecto (carpeta paquete). Por ejemplo:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MyPackage (",(0,r.jsx)(n.em,{children:"carpeta ra\xedz del proyecto"}),")\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Componentes"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Logs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Settings"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Plugins"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Project"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Sources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Trash"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Resources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Settings"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"userPreferences.jSmith"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"WebFolder"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:['Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversi\xf3n de bases en proyectos" en ',(0,r.jsx)(n.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"Carpeta-Project",children:["Carpeta ",(0,r.jsx)(n.code,{children:"Project"})]}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Project suele contener la siguiente jerarqu\xeda:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["archivo ",(0,r.jsx)(n.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Sources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Clases"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DatabaseMethods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"M\xe9todos"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Formularios"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"TableForms"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Triggers"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Trash"})," (si hay)"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"archivo-applicationName4DProject",children:["archivo ",(0,r.jsx)(n.code,{children:"<applicationName>.4DProject"})]}),"\n",(0,r.jsx)(n.p,{children:"El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"4D"}),"\n",(0,r.jsxs)(n.li,{children:["4D Server (s\xf3lo lectura, ver ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/clientServer#opening-a-remote-project",children:"Abrir un proyecto remoto"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"En los proyectos 4D, el desarrollo se realiza con 4D y el desarrollo multiusuarios se gestiona a trav\xe9s de las herramientas de control de versi\xf3n. 4D Server puede abrir archivos .4DProject para realizar pruebas."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This text file can also contain configuration keys, in particular ",(0,r.jsx)(n.a,{href:"/docs/es/Preferences/general#excluding-tokens-in-existing-projects",children:(0,r.jsx)(n.code,{children:'"tokenizedText": false'})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"Sources",children:(0,r.jsx)(n.code,{children:"Sources"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"catalog.4DCatalog"}),(0,r.jsx)(n.td,{children:"Definiciones de tablas y campos"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"catalog_editor.json"}),(0,r.jsxs)(n.td,{children:["Posiciones y colores personalizados de tablas, campos y enlaces en el editor de estructura. Depende de un ",(0,r.jsx)(n.a,{href:"/docs/es/settings/compatibility",children:"par\xe1metro de compatibilidad"})," en los proyectos convertidos"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"folders.json"}),(0,r.jsx)(n.td,{children:"Definiciones de carpetas del Explorador"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menus.json"}),(0,r.jsx)(n.td,{children:"Definiciones de los men\xfas"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsxs)(n.td,{children:["Propiedades de la base ",(0,r.jsx)(n.em,{children:"Structure"}),". No se tienen en cuenta si se definen ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"#settings-user",children:"par\xe1metros de usuario"})})," o ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"#settings-user-data",children:"par\xe1metros de usuario para datos"})})," (ver tambi\xe9n ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),". ",(0,r.jsx)(n.strong,{children:"Atenci\xf3n"}),": en las aplicaciones compiladas, la configuraci\xf3n de la estructura se almacena en el archivo .4dz (de s\xf3lo lectura). Para las necesidades de despliegue, es necesario ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/user-settings#enabling-user-settings",children:"habilitar"})," y utilizar ",(0,r.jsx)(n.em,{children:"par\xe1metros usuario"})," o ",(0,r.jsx)(n.em,{children:"par\xe1metros usuario para datos"})," para definir par\xe1metros personalizados."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tips.json"}),(0,r.jsx)(n.td,{children:"Mensajes de ayuda definidos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lists.json"}),(0,r.jsx)(n.td,{children:"Listas definidas"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filters.json"}),(0,r.jsx)(n.td,{children:"Filtros definidos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dependencies.json"}),(0,r.jsxs)(n.td,{children:["Names of ",(0,r.jsx)(n.a,{href:"/docs/es/Project/components",children:"components to load"})," in the project"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets.css"}),(0,r.jsx)(n.td,{children:"Hojas de estilo CSS"}),(0,r.jsx)(n.td,{children:"CSS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets_mac.css"}),(0,r.jsx)(n.td,{children:"Hojas de estilo css de Mac (a partir de una base binaria convertida)"}),(0,r.jsx)(n.td,{children:"CSS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets_windows.css"}),(0,r.jsx)(n.td,{children:"Hojas de estilo css en Windows (a partir de una base binaria convertida)"}),(0,r.jsx)(n.td,{children:"CSS"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"DatabaseMethods",children:(0,r.jsx)(n.code,{children:"DatabaseMethods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"databaseMethodName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos base definidos en el proyecto. Un archivo por m\xe9todo base"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"M\xe9todos",children:(0,r.jsx)(n.code,{children:"M\xe9todos"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"methodName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos proyecto definidos en el proyecto. Un archivo por m\xe9todo"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"Clases",children:(0,r.jsx)(n.code,{children:"Clases"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"className"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo de definici\xf3n de clases usuario, que permite instanciar objetos espec\xedficos. Un archivo por clase, el nombre del archivo es el nombre de la clase"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"Formularios",children:(0,r.jsx)(n.code,{children:"Formularios"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del formulario proyecto"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo formulario proyecto"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Imagen est\xe1tica del formulario proyecto"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos objeto. Un archivo por m\xe9todo objeto"}),(0,r.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"TableForms",children:(0,r.jsx)(n.code,{children:"TableForms"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del formulario de entrada de la tabla (n es el n\xfamero de tabla)"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Im\xe1genes est\xe1ticas del formulario de entrada de la tabla"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo del formulario de entrada de la tabla"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos objeto del formulario de entrada. Un archivo por m\xe9todo objeto"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del formulario de salida de la tabla (n es el n\xfamero de tabla)"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Im\xe1genes est\xe1ticas del formulario de salida de la tabla"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo del formulario de salida de la tabla"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos objeto del formulario de salida. Un archivo por m\xe9todo objeto"}),(0,r.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Triggers",children:(0,r.jsx)(n.code,{children:"Triggers"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"table__n_.4dm"}),(0,r.jsx)(n.td,{children:"M\xe9todos trigger definidos en el proyecto. Un archivo de activaci\xf3n por tabla (n es el n\xfamero de tabla)"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versi\xf3n."]}),"\n",(0,r.jsx)(n.h3,{id:"Trash",children:(0,r.jsx)(n.code,{children:"Trash"})}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Trash contiene los m\xe9todos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"M\xe9todos"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Formularios"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"TableForms"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Dentro de estas carpetas, los nombres de los elementos eliminados van entre par\xe9ntesis, por ejemplo "(myMethod).4dm". La organizaci\xf3n de las carpetas es id\xe9ntica a la carpeta ',(0,r.jsx)(n.a,{href:"#sources",children:"Sources"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"DerivedData",children:(0,r.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(n.p,{children:"La carpeta DerivedData contiene datos en cach\xe9 utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea autom\xe1ticamente cuando es necesario. Puede ignorar esta carpeta."}),"\n",(0,r.jsx)(n.h2,{id:"Libraries",children:(0,r.jsx)(n.code,{children:"Libraries"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Esta carpeta se utiliza s\xf3lo en macOS."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["La carpeta Librairies contiene el archivo resultante de una compilaci\xf3n con el ",(0,r.jsx)(n.a,{href:"/docs/es/Project/compiler#silicon-compiler",children:"compilador Silicon"})," en macOS."]}),"\n",(0,r.jsx)(n.h2,{id:"Resources",children:(0,r.jsx)(n.code,{children:"Resources"})}),"\n",(0,r.jsxs)(n.p,{children:["La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados del proyecto. En esta carpeta puede colocar todos los archivos necesarios para la traducci\xf3n o personalizaci\xf3n de la interfaz de la aplicaci\xf3n (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos autom\xe1ticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e im\xe1genes est\xe1ticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el ",(0,r.jsx)(n.em,{children:"manual 4D Server"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"elemento"})}),(0,r.jsx)(n.td,{children:"Archivos y carpetas de recursos del proyecto"}),(0,r.jsx)(n.td,{children:"varios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Images/Library/",(0,r.jsx)(n.em,{children:"item"})]}),(0,r.jsx)(n.td,{children:"Im\xe1genes de la librer\xeda de im\xe1genes como archivos separados(*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se a\xf1ade un n\xfamero al nombre."}),(0,r.jsx)(n.td,{children:"picture"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) s\xf3lo si el proyecto fue exportado desde una base binaria .4db."}),"\n",(0,r.jsx)(n.h2,{id:"Data",children:(0,r.jsx)(n.code,{children:"Data"})}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.4dd(*)"}),(0,r.jsxs)(n.td,{children:["Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicaci\xf3n abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicaci\xf3n de este archivo, aparecer\xe1 la caja de di\xe1logo ",(0,r.jsx)(n.em,{children:"Abrir un archivo de datos"})," para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo"]}),(0,r.jsx)(n.td,{children:"binary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.journal"}),(0,r.jsx)(n.td,{children:"Se crea s\xf3lo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operaci\xf3n sobre los datos provoca dos acciones simult\xe1neas: la primera sobre los datos (la instrucci\xf3n se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripci\xf3n de la operaci\xf3n). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos s\xf3lo puede trabajar con un \xfanico archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos."}),(0,r.jsx)(n.td,{children:"binary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.match"}),(0,r.jsx)(n.td,{children:"(interno) UUID correspondiente al n\xfamero de la tabla"}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar."}),"\n",(0,r.jsxs)(n.h3,{id:"Settings-datos-del-usuario",children:[(0,r.jsx)(n.code,{children:"Settings"})," (datos del usuario)"]}),"\n",(0,r.jsxs)(n.p,{children:["This folder contains ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/user-settings#user-settings-for-data-file",children:(0,r.jsx)(n.strong,{children:"user settings for data"})})," used for application administration."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Estos par\xe1metros tienen prioridad sobre los ",(0,r.jsx)(n.a,{href:"#settings-user",children:"par\xe1metros de usuario"})," y los ",(0,r.jsx)(n.a,{href:"#sources",children:"par\xe1metros de estructura"}),". Ver tambi\xe9n ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directory.json"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n de los grupos y usuarios de 4D y sus derechos de acceso cuando la aplicaci\xf3n se lanza con este archivo de datos."}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(n.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.jsx)(n.a,{href:"/docs/es/Backup/settings",children:"opciones de copia de seguridad"})," cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.jsx)(n.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsx)(n.td,{children:"Propiedades de la base personalizadas para este archivo de datos."}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"Logs",children:(0,r.jsx)(n.code,{children:"Logs"})}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"conversi\xf3n de base de datos,"}),"\n",(0,r.jsx)(n.li,{children:"peticiones del servidor web,"}),"\n",(0,r.jsxs)(n.li,{children:["registro de actividades de backup/restituci\xf3n (",(0,r.jsx)(n.em,{children:"Backup Journal[xxx].txt"}),", ver ",(0,r.jsx)(n.a,{href:"/docs/es/Backup/backup#backup-journal",children:"Historial de backup"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"depuraci\xf3n de comandos,"}),"\n",(0,r.jsx)(n.li,{children:"Peticiones 4D Server (generadas en en los equipos cliente y en el servidor)."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Una carpeta Logs adicional est\xe1 disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver el comando ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page485.html",children:"Get 4D folder"}),") para los archivos de registro de mantenimiento y e"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"Settings-usuario",children:[(0,r.jsx)(n.code,{children:"Settings"})," (usuario)"]}),"\n",(0,r.jsxs)(n.p,{children:["This folder contains ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/user-settings#user-settings",children:(0,r.jsx)(n.strong,{children:"user settings"})})," used for application administration."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Estos par\xe1metros tienen prioridad sobre el archivo de ",(0,r.jsx)(n.a,{href:"#sources",children:"par\xe1metros de estructura"}),". Sin embargo, si existen ",(0,r.jsx)(n.a,{href:"#settings-user-data",children:"par\xe1metros de usuario para los datos"}),", tienen prioridad sobre los par\xe1metros de usuario. Ver tambi\xe9n ",(0,r.jsx)(n.a,{href:"/docs/es/Desktop/user-settings#priority-of-settings",children:"Prioridad de los par\xe1metros"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directory.json"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n de los grupos y usuarios de 4D para la aplicacion, as\xed como sus derechos de acceso"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(n.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.jsx)(n.a,{href:"/docs/es/Backup/settings",children:"opciones de copia de seguridad"}),") cuando se lanza cada copia de seguridad. Este archivo tambi\xe9n puede utilizarse para leer o definir opciones adicionales, como la cantidad de informaci\xf3n almacenada en el ",(0,r.jsx)(n.em,{children:"diario de backup"}),". Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.jsx)(n.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(n.td,{children:["Archivo de par\xe1metros de generaci\xf3n, creado autom\xe1ticamente cuando se utiliza la caja de di\xe1logo del generador de aplicaciones o del comando ",(0,r.jsx)(n.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsx)(n.td,{children:"Par\xe1metros personalizados para este proyecto (todos los archivos de datos)"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"logConfig.json"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/es/Debugging/debugLogFiles#using-a-log-configuration-file",children:"Archivo de configuraci\xf3n de historial"})," personalizado"]}),(0,r.jsx)(n.td,{children:"json"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"userPreferencesuserName",children:(0,r.jsx)(n.code,{children:"userPreferences.<userName>"})}),"\n",(0,r.jsx)(n.p,{children:"Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodPreferences.json"}),(0,r.jsx)(n.td,{children:"Preferencias del editor de c\xf3digo del usuario actual"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodWindowPositions.json"}),(0,r.jsx)(n.td,{children:"Posici\xf3n de la ventana de usuario actual para los m\xe9todos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formWindowPositions.json"}),(0,r.jsx)(n.td,{children:"Posici\xf3n de la ventana de usuario actual para los formularios"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"workspace.json"}),(0,r.jsx)(n.td,{children:"Lista de ventanas abiertas; en macOS, orden de las ventanas de la pesta\xf1a"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"debuggerCatches.json"}),(0,r.jsx)(n.td,{children:"Llamadas a los comandos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recentTables.json"}),(0,r.jsx)(n.td,{children:"Lista ordenada de tablas"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"preferences.4DPreferences"}),(0,r.jsx)(n.td,{children:"Ruta de datos actual y posiciones de la ventana principal"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerIntermediateFiles"}),(0,r.jsx)(n.td,{children:"Archivos intermedios resultantes de la compilaci\xf3n Apple Silicon"}),(0,r.jsx)(n.td,{children:"Folder"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"Componentes",children:(0,r.jsx)(n.code,{children:"Componentes"})}),"\n",(0,r.jsx)(n.p,{children:"Folder containing components that are embedded in the project (must be stored at the same level as the Project folder). Estos componentes tienen prioridad sobre cualquier otra ubicaci\xf3n."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You can also use the ",(0,r.jsxs)(n.a,{href:"/docs/es/Project/components",children:[(0,r.jsx)(n.strong,{children:"dependencies.json"})," and (optionnally) ",(0,r.jsx)(n.strong,{children:"environment4d.json"})," files"]})," to declare components."]})}),"\n",(0,r.jsx)(n.h2,{id:"Plugins",children:(0,r.jsx)(n.code,{children:"Plugins"})}),"\n",(0,r.jsx)(n.p,{children:"Esta carpeta contiene los plug-ins que deben estar disponibles en el proyecto aplicaci\xf3n. Debe almacenarse en el mismo nivel que la carpeta Project."}),"\n",(0,r.jsx)(n.h2,{id:"Documentation",children:(0,r.jsx)(n.code,{children:"Documentation"})}),"\n",(0,r.jsx)(n.p,{children:"Esta carpeta contiene todos los archivos de documentaci\xf3n (.md) creados para los elementos del proyecto como clases, m\xe9todos o formularios. Los archivos de documentaci\xf3n se gestionan y se muestran en el Explorador 4D."}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(n.a,{href:"/docs/es/Project/documentation",children:"Documentar un proyecto"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"WebFolder",children:(0,r.jsx)(n.code,{children:"WebFolder"})}),"\n",(0,r.jsx)(n.p,{children:"Define la carpeta ra\xedz por defecto del servidor web 4D para las p\xe1ginas, las im\xe1genes, etc. Se crea autom\xe1ticamente cuando se lanza el servidor web por primera vez."}),"\n",(0,r.jsxs)(n.h2,{id:"Archivo-gitignore-opcional",children:["Archivo ",(0,r.jsx)(n.code,{children:".gitignore"})," (opcional)"]}),"\n",(0,r.jsxs)(n.p,{children:["Archivo que especifica los archivos que ser\xe1n ignorados por git. Puede incluir un archivo gitignore en sus proyectos utilizando la opci\xf3n ",(0,r.jsx)(n.strong,{children:"Crear un archivo .gitignore"})," en la p\xe1gina ",(0,r.jsx)(n.strong,{children:"General"})," de las preferencias. To configure the contents of that file, see ",(0,r.jsxs)(n.a,{href:"/docs/es/Preferences/general#create-gitignore-file",children:["Create ",(0,r.jsx)(n.code,{children:".gitignore"})," file"]}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var r=s(296540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,s){var r,i={},t=null,l=null;for(r in void 0!==s&&(t=""+s),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:d,type:e,key:t,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=t,n.jsxs=t},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(296540);const d={},i=r.createContext(d);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);