/*! For license information please see ef6edfd2.9f3c4733.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45733],{598300:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var r=s(474848),a=s(28453);const d={id:"architecture",title:"Arquitectura de un proyecto 4D"},i=void 0,t={id:"Project/architecture",title:"Arquitectura de un proyecto 4D",description:"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una \xfanica carpeta padre de la base (carpeta paquete). Por ejemplo:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/Project/architecture.md",sourceDirName:"Project",slug:"/Project/architecture",permalink:"/docs/es/18/Project/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"architecture",title:"Arquitectura de un proyecto 4D"},sidebar:"docs",previous:{title:"Crear un proyecto 4D",permalink:"/docs/es/18/Project/creating"},next:{title:"Desarrollar un proyecto",permalink:"/docs/es/18/Project/developing"}},c={},o=[{value:"Carpeta Project",id:"carpeta-project",level:2},{value:"Archivo <em>nomBase</em>.4DProject",id:"archivo-nombase4dproject",level:3},{value:"Carpeta Sources",id:"carpeta-sources",level:3},{value:"Carpeta DatabaseMethods",id:"carpeta-databasemethods",level:4},{value:"Carpeta Methods",id:"carpeta-methods",level:4},{value:"Carpeta Classes",id:"carpeta-classes",level:4},{value:"Carpeta Forms",id:"carpeta-forms",level:4},{value:"Carpeta TableForms",id:"carpeta-tableforms",level:4},{value:"Carpeta Triggers",id:"carpeta-triggers",level:4},{value:"Carpeta Trash",id:"carpeta-trash",level:3},{value:"Carpeta DerivedData",id:"carpeta-deriveddata",level:3},{value:"Carpeta Resources",id:"carpeta-resources",level:2},{value:"Carpeta Data",id:"carpeta-data",level:2},{value:"Carpeta Settings",id:"carpeta-settings",level:3},{value:"Carpeta Logs",id:"carpeta-logs",level:3},{value:"Carpeta Settings",id:"carpeta-settings-1",level:2},{value:"Carpeta userPreferences.<em>userName</em>",id:"carpeta-userpreferencesusername",level:2},{value:"Carpeta Components",id:"carpeta-components",level:2},{value:"Carpeta Plugins",id:"carpeta-plugins",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Un proyecto 4D se compone de varias carpetas y archivos, almacenados dentro de una \xfanica carpeta padre de la base (carpeta paquete). Por ejemplo:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MyProject\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Componentes"}),"\n",(0,r.jsxs)(n.li,{children:["Datos\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Logs"}),"\n",(0,r.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Documentation"}),"\n",(0,r.jsx)(n.li,{children:"Plugins"}),"\n",(0,r.jsxs)(n.li,{children:["Project\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DerivedData"}),"\n",(0,r.jsx)(n.li,{children:"Sources"}),"\n",(0,r.jsx)(n.li,{children:"Trash"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Resources"}),"\n",(0,r.jsx)(n.li,{children:"Settings"}),"\n",(0,r.jsx)(n.li,{children:"userPreferences.username"}),"\n",(0,r.jsx)(n.li,{children:"WebFolder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:['Si su proyecto se ha convertido desde una base binaria, puede haber carpetas adicionales. Ver "Conversi\xf3n de bases en proyectos" en ',(0,r.jsx)(n.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"carpeta-project",children:"Carpeta Project"}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Project suele contener la siguiente jerarqu\xeda:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Archivo ",(0,r.jsx)(n.em,{children:"nomBase"}),".4DProject"]}),"\n",(0,r.jsxs)(n.li,{children:["Sources\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clases"}),"\n",(0,r.jsx)(n.li,{children:"DatabaseMethods"}),"\n",(0,r.jsx)(n.li,{children:"M\xe9todos"}),"\n",(0,r.jsx)(n.li,{children:"Formularios"}),"\n",(0,r.jsx)(n.li,{children:"TableForms"}),"\n",(0,r.jsx)(n.li,{children:"Triggers"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"DerivedData"}),"\n",(0,r.jsx)(n.li,{children:"Trash (si procede)"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"archivo-nombase4dproject",children:["Archivo ",(0,r.jsx)(n.em,{children:"nomBase"}),".4DProject"]}),"\n",(0,r.jsx)(n.p,{children:"El archivo de desarrollo de proyecto, utilizado para designar y lanzar el proyecto. Este archivo puede ser abierto por:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"4D Developer"}),"\n",(0,r.jsxs)(n.li,{children:["4D Server (s\xf3lo lectura, ver ",(0,r.jsx)(n.a,{href:"/docs/es/18/Project/developing",children:"Desarrollar un proyecto"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," en los proyectos 4D, el desarrollo se realiza con 4D Developer y el desarrollo multiusuarios se gestiona a trav\xe9s de las herramientas de control de versi\xf3n. 4D Server puede abrir archivos .4DProject para realizar pruebas."]}),"\n",(0,r.jsx)(n.h3,{id:"carpeta-sources",children:"Carpeta Sources"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"catalog.4DCatalog"}),(0,r.jsx)(n.td,{children:"Definiciones de tablas y campos"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"folders.json"}),(0,r.jsx)(n.td,{children:"Definiciones de carpetas del Explorador"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menus.json"}),(0,r.jsx)(n.td,{children:"Definiciones de los men\xfas"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsxs)(n.td,{children:["Propiedades de la base ",(0,r.jsx)(n.em,{children:"Structure"}),". No se tienen en cuenta si los ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"#settings-folder-1",children:"par\xe1metros usuario"})})," o los ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"#settings-folder",children:"par\xe1metros usuario de datos"})})," son definidos. ",(0,r.jsx)(n.strong,{children:"Atenci\xf3n"}),": en las aplicaciones compiladas, la configuraci\xf3n de la estructura se almacena en el archivo .4dz (de s\xf3lo lectura). Para las necesidades de despliegue, es necesario utilizar los ",(0,r.jsx)(n.em,{children:"par\xe1metros usuario"})," o los ",(0,r.jsx)(n.em,{children:"par\xe1metros usuario para los datos"})," para definir la configuraci\xf3n personalizada."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tips.json"}),(0,r.jsx)(n.td,{children:"Mensajes de ayuda definidos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lists.json"}),(0,r.jsx)(n.td,{children:"Listas definidas"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filters.json"}),(0,r.jsx)(n.td,{children:"Filtros definidos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets.css"}),(0,r.jsx)(n.td,{children:"Hojas de estilo CSS"}),(0,r.jsx)(n.td,{children:"CSS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets_mac.css"}),(0,r.jsx)(n.td,{children:"Hojas de estilo css de Mac (a partir de una base binaria convertida)"}),(0,r.jsx)(n.td,{children:"CSS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets_windows.css"}),(0,r.jsx)(n.td,{children:"Hojas de estilo css en Windows (a partir de una base binaria convertida)"}),(0,r.jsx)(n.td,{children:"CSS"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"carpeta-databasemethods",children:"Carpeta DatabaseMethods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"databaseMethodName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos base definidos en la base. Un archivo por m\xe9todo base"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"carpeta-methods",children:"Carpeta Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"methodName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos proyecto definidos en la base. Un archivo por m\xe9todo"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"carpeta-classes",children:"Carpeta Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"className"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo de definici\xf3n de clases usuario, que permite instanciar objetos espec\xedficos. Un archivo por clase, el nombre del archivo es el nombre de la clase"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"carpeta-forms",children:"Carpeta Forms"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del formulario proyecto"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo formulario proyecto"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Imagen est\xe1tica del formulario proyecto"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos objeto. Un archivo por m\xe9todo objeto"}),(0,r.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"carpeta-tableforms",children:"Carpeta TableForms"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del formulario de entrada de la tabla (n es el n\xfamero de tabla)"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Im\xe1genes est\xe1ticas del formulario de entrada de la tabla"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo del formulario de entrada de la tabla"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos objeto del formulario de entrada. Un archivo por m\xe9todo objeto"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Descripci\xf3n del formulario de salida de la tabla (n es el n\xfamero de tabla)"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Im\xe1genes est\xe1ticas del formulario de salida de la tabla"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todo del formulario de salida de la tabla"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos objeto del formulario de salida. Un archivo por m\xe9todo objeto"}),(0,r.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"carpeta-triggers",children:"Carpeta Triggers"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["table_",(0,r.jsx)(n.em,{children:"n"}),".4dm"]}),(0,r.jsx)(n.td,{children:"M\xe9todos trigger definidos en la base. Un archivo de activaci\xf3n por tabla (n es el n\xfamero de tabla)"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The .4dm file extension is a text-based file format, containing the code of a 4D method. Es compatible con las herramientas de control de versi\xf3n."]}),"\n",(0,r.jsx)(n.h3,{id:"carpeta-trash",children:"Carpeta Trash"}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Trash contiene los m\xe9todos y formularios que se han eliminado del proyecto (si los hay). Puede contener las siguientes carpetas:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"M\xe9todos"}),"\n",(0,r.jsx)(n.li,{children:"Formularios"}),"\n",(0,r.jsx)(n.li,{children:"TableForms"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Dentro de estas carpetas, los nombres de los elementos eliminados van entre par\xe9ntesis, por ejemplo "(myMethod).4dm". La organizaci\xf3n de las carpetas es id\xe9ntica a la carpeta ',(0,r.jsx)(n.a,{href:"#sources",children:"Sources"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"carpeta-deriveddata",children:"Carpeta DerivedData"}),"\n",(0,r.jsx)(n.p,{children:"La carpeta DerivedData contiene datos en cach\xe9 utilizados internamente por 4D para optimizar el procesamiento. Se crea o recrea autom\xe1ticamente cuando es necesario. Puede ignorar esta carpeta."}),"\n",(0,r.jsx)(n.h2,{id:"carpeta-resources",children:"Carpeta Resources"}),"\n",(0,r.jsxs)(n.p,{children:["La carpeta Resources contiene todos los archivos y carpetas de recursos personalizados de la base. En esta carpeta puede colocar todos los archivos necesarios para la traducci\xf3n o personalizaci\xf3n de la interfaz de la aplicaci\xf3n (archivos imagen, archivos texto, archivos XLIFF, etc.). 4D utiliza mecanismos autom\xe1ticos para trabajar con el contenido de esta carpeta, en particular para el manejo de archivos XLIFF e im\xe1genes est\xe1ticas. Para su uso en modo remoto, la carpeta Resources permite compartir archivos entre el equipo servidor y todos los equipos cliente. Ver el ",(0,r.jsx)(n.em,{children:"manual 4D Server"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"item"})}),(0,r.jsx)(n.td,{children:"Archivos y carpetas de recursos de la base"}),(0,r.jsx)(n.td,{children:"varios"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Images/Library/",(0,r.jsx)(n.em,{children:"item"})]}),(0,r.jsx)(n.td,{children:"Im\xe1genes de la librer\xeda de im\xe1genes como archivos separados(*). Los nombres de estos elementos se convierten en nombres de archivos. Si existe un duplicado, se a\xf1ade un n\xfamero al nombre."}),(0,r.jsx)(n.td,{children:"picture"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) s\xf3lo si el proyecto fue exportado desde una base binaria .4db."}),"\n",(0,r.jsx)(n.h2,{id:"carpeta-data",children:"Carpeta Data"}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Data contiene el archivo de datos y todos los archivos y carpetas relacionados con los datos."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.4dd(*)"}),(0,r.jsxs)(n.td,{children:["Archivo de datos que contiene los datos introducidos en los registros y todos los datos pertenecientes a los registros. Al abrir un proyecto 4D, la aplicaci\xf3n abre por defecto el archivo de datos actual. Si cambia el nombre o la ubicaci\xf3n de este archivo, aparecer\xe1 la caja de di\xe1logo ",(0,r.jsx)(n.em,{children:"Abrir un archivo de datos"})," para que pueda seleccionar el archivo de datos a utilizar o crear uno nuevo"]}),(0,r.jsx)(n.td,{children:"binary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.journal"}),(0,r.jsx)(n.td,{children:"Se crea s\xf3lo cuando la base de datos utiliza un archivo de registro. El archivo de registro se utiliza para garantizar la seguridad de los datos entre las copias de seguridad. Todas las operaciones realizadas sobre los datos se registran secuencialmente en este archivo. Por lo tanto, cada operaci\xf3n sobre los datos provoca dos acciones simult\xe1neas: la primera sobre los datos (la instrucci\xf3n se ejecuta normalmente) y la segunda en el archivo de registro (se registra una descripci\xf3n de la operaci\xf3n). El archivo de registro se construye de forma independiente, sin perturbar ni ralentizar el trabajo del usuario. Una base de datos s\xf3lo puede trabajar con un \xfanico archivo de registro a la vez. El archivo de historial registra operaciones como adiciones, modificaciones o eliminaciones de registros, transacciones, etc. Se genera por defecto cuando se crea una base de datos."}),(0,r.jsx)(n.td,{children:"binary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.match"}),(0,r.jsx)(n.td,{children:"(interno) UUID correspondiente al n\xfamero de la tabla"}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) Cuando el proyecto se crea a partir de una base de datos binaria .4db, el archivo de datos se deja intacto. Por lo tanto, se puede nombrar de otra manera y colocar en otro lugar."}),"\n",(0,r.jsx)(n.h3,{id:"carpeta-settings",children:"Carpeta Settings"}),"\n",(0,r.jsxs)(n.p,{children:["Esta carpeta contiene ",(0,r.jsx)(n.strong,{children:"archivos de configuraci\xf3n de datos"})," utilizados para la administraci\xf3n de la base de datos."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Estos par\xe1metros tienen prioridad sobre los ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#settings-folder-1",children:"archivos de propiedades usuario"})})," y los archivos de ",(0,r.jsx)(n.strong,{children:"propiedades estructura"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(n.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.jsx)(n.a,{href:"/docs/es/18/Backup/settings",children:"opciones de copia de seguridad"}),") cuando la base se lanza con este archivo de datos. Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.jsx)(n.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsx)(n.td,{children:"Propiedades personalizadas de la base para este archivo de datos"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directory.json"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n de los grupos y usuarios de 4D y sus derechos de acceso cuando la base se lanza con este archivo de datos."}),(0,r.jsx)(n.td,{children:"JSON"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"carpeta-logs",children:"Carpeta Logs"}),"\n",(0,r.jsx)(n.p,{children:"La carpeta Logs contiene todos los archivos de registro utilizados por el proyecto. Los archivos de registro incluyen, en particular:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"conversi\xf3n de base de datos,"}),"\n",(0,r.jsx)(n.li,{children:"peticiones del servidor web,"}),"\n",(0,r.jsxs)(n.li,{children:["registro de actividades de backup/restituci\xf3n (",(0,r.jsx)(n.em,{children:"Backup Journal[xxx].txt"}),", ver ",(0,r.jsx)(n.a,{href:"/docs/es/18/Backup/backup#backup-journal",children:"Historial de backup"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"depuraci\xf3n de comandos,"}),"\n",(0,r.jsx)(n.li,{children:"Peticiones 4D Server (generadas en en los equipos cliente y en el servidor)."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Una carpeta Logs adicional est\xe1 disponible en la carpeta de preferencias del usuario del sistema (carpeta 4D activa, ver ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html",children:"Obtener carpeta 4D"})," comando) para los archivos de registro de mantenimiento y en los casos en que la carpeta de datos es de s\xf3lo lectura."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"carpeta-settings-1",children:"Carpeta Settings"}),"\n",(0,r.jsxs)(n.p,{children:["Esta carpeta contiene ",(0,r.jsx)(n.strong,{children:"archivos de propiedades usuario"})," utilizados para la administraci\xf3n de la base de datos. Los archivos se a\xf1aden a la carpeta si es necesario."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Si existe un archivo de propiedades de datos ",(0,r.jsx)(n.a,{href:"#settings-folder",children:"en una carpeta de datos "}),", de la carpeta Datos, tiene prioridad sobre el archivo de propiedades del usuario."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directory.json"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n de los grupos y usuarios de 4D para la base de datos, as\xed como sus derechos de acceso"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(n.td,{children:["Archivo de par\xe1metros de generaci\xf3n, creado autom\xe1ticamente cuando se utiliza la caja de di\xe1logo del generador de aplicaciones o del comando ",(0,r.jsx)(n.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(n.td,{children:["Par\xe1metros de copia de seguridad de la base de datos, utilizados para definir las ",(0,r.jsx)(n.a,{href:"/docs/es/18/Backup/settings",children:"opciones de copia de seguridad"}),") cuando se lanza cada copia de seguridad. Este archivo tambi\xe9n puede utilizarse para leer o definir opciones adicionales, como la cantidad de informaci\xf3n almacenada en el ",(0,r.jsx)(n.em,{children:"diario de backup"}),". Las llaves relativas a la configuraci\xf3n de la copia de seguridad se describen en el manual ",(0,r.jsx)(n.em,{children:"Backup de las llaves XML 4D"}),"."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(n.td,{children:["Archivo de par\xe1metros de generaci\xf3n, creado autom\xe1ticamente cuando se utiliza la caja de di\xe1logo del generador de aplicaciones o del comando ",(0,r.jsx)(n.code,{children:"BUILD APPLICATION"})]}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"carpeta-userpreferencesusername",children:["Carpeta userPreferences.",(0,r.jsx)(n.em,{children:"userName"})]}),"\n",(0,r.jsx)(n.p,{children:"Esta carpeta contiene archivos que memorizan las configuraciones del usuario, por ejemplo, el punto de ruptura o las posiciones de las ventanas. Puede simplemente ignorar esta carpeta. Contiene, por ejemplo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contenido"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Formato"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodPreferences.json"}),(0,r.jsx)(n.td,{children:"Preferencias del editor de m\xe9todos del usuario actual"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodWindowPositions.json"}),(0,r.jsx)(n.td,{children:"Posici\xf3n de la ventana de usuario actual para los m\xe9todos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formWindowPositions.json"}),(0,r.jsx)(n.td,{children:"Posici\xf3n de la ventana de usuario actual para los formularios"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"workspace.json"}),(0,r.jsx)(n.td,{children:"Lista de ventanas abiertas; en macOS, orden de las ventanas de la pesta\xf1a"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"debuggerCatches.json"}),(0,r.jsx)(n.td,{children:"Llamadas a los comandos"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recentTables.json"}),(0,r.jsx)(n.td,{children:"Lista ordenada de tablas"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"preferences.4DPreferences"}),(0,r.jsx)(n.td,{children:"Ruta de datos actual y posiciones de la ventana principal"}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"carpeta-components",children:"Carpeta Components"}),"\n",(0,r.jsx)(n.p,{children:"Esta carpeta contiene los componentes que deben estar disponibles \xfanicamente en la base proyecto. Debe almacenarse en el mismo nivel que la carpeta Project."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Una base proyecto puede utilizarse como un componente:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"para el desarrollo: ponga un alias del archivo .4dproject en la carpeta Components de la base local."}),"\n",(0,r.jsxs)(n.li,{children:["para el despliegue: cree el componente (ver ",(0,r.jsx)(n.a,{href:"/docs/es/18/Project/building",children:"Crear un paquete proyecto"}),") y ponga el archivo .4dz resultante en una carpeta .4dbase en la carpeta Componentes de la base local."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"carpeta-plugins",children:"Carpeta Plugins"}),"\n",(0,r.jsx)(n.p,{children:"Esta carpeta contiene los plug-ins que estar\xe1n disponibles \xfanicamente en la base proyecto. Debe almacenarse en el mismo nivel que la carpeta Project."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var r=s(296540),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,d={},o=null,l=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:a,type:e,key:o,ref:l,props:d,_owner:t.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var r=s(296540);const a={},d=r.createContext(a);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);