"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42919],{96612:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var s=r(474848),t=r(28453);const d={id:"export-structure-file",title:"Export structure file",slug:"/commands/export-structure-file",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/export-structure-file",title:"Export structure file",description:"Export structure file ( rutaCarpeta {; opciones} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-structure-file.md",sourceDirName:"commands-legacy",slug:"/commands/export-structure-file",permalink:"/docs/es/commands/export-structure-file",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-structure-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"export-structure-file",title:"Export structure file",slug:"/commands/export-structure-file",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ds",permalink:"/docs/es/commands/ds"},next:{title:"Get 4D file",permalink:"/docs/es/commands/get-4d-file"}},l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Resultado",id:"resultado",level:5},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Export structure file"})," ( ",(0,s.jsx)(n.em,{children:"rutaCarpeta"})," {; ",(0,s.jsx)(n.em,{children:"opciones"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rutaCarpeta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Ruta de la carpeta de destino para archivos de proyecto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"opciones"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Opciones de exportar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Estado de validaci\xf3n y mensajes (si los hay)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"Export structure file"})," divide la estructura actual de la base 4D en un conjunto de archivos de texto o archivos de imagen nativos y los almacena en la ",(0,s.jsx)(n.em,{children:"rutaCarpeta"})," especificada. Por defecto, se exporta la totalidad de la estructura de la base (m\xe9todos, formularios, cat\xe1logo, etc.). Puede filtrar los contenidos a exportar utilizando el par\xe1metro ",(0,s.jsx)(n.em,{children:"opciones"})," (ver abajo)."]}),"\n",(0,s.jsxs)(n.p,{children:["Este comando le permite almacenar archivos de estructura de base de datos en un repositorio de control de fuente (es decir, ",(0,s.jsx)(n.em,{children:"Git, Perforce"}),", etc.). Los cambios sucesivos o los cambios de varias fuentes se pueden comparar utilizando herramientas de control de fuente est\xe1ndar."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando solo se puede utilizar en los siguientes contextos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4D en modo local o 4D Server (se devuelve un error si se llama desde 4D en modo remoto),"}),"\n",(0,s.jsx)(n.li,{children:"Base de datos interpretada (el comando no hace nada si se llama desde una base de datos .4DC)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Tenga en cuenta tambi\xe9n que cuando se llama desde un componente, el comando siempre exporta la estructura de la base local."}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rutaCarpeta"}),", pase la ruta del sistema de la carpeta donde se deben guardar los archivos de exportaci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"opciones"})," le permite personalizar el proceso de conversi\xf3n. El objeto ",(0,s.jsx)(n.em,{children:"opciones"})," puede contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo de valor"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"withLog"}),(0,s.jsx)(n.td,{children:"booleano o cadena"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.table,{children:(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:'true o "always": crea un archivo de registro de conversi\xf3n en la carpeta de Registros de destino.'})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:'"ifNotEmpty": cree un archivo de registro de conversi\xf3n solo si contiene algunos mensajes'})}),(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.td,{children:"false u omitido (predeterminado): no crea un archivo de registro de conversi\xf3n"})})]})})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"makeProject"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:'true para generar un archivo.4DProject en la carpeta "Project"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filter"}),(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"Contenidos para exportar. Si se omite (por defecto), todo se exporta"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"projectMethods"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar m\xe9todos proyecto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"databaseMethods"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar m\xe9todos base"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"triggerMethods"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar m\xe9todos trigger"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"forms"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar formularios"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pageFormat"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:'true para incluir el formato de p\xe1gina de formulario como propiedad "pageFormat" de cada archvio json'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catalog"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar definiciones de tabla y campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"folders"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar las definiciones de las carpetas del Explorador"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"settings"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar configuraciones de estructura"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menus"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar men\xfas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tips"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar tips"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lists"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar listas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filters"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar filtros"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pictures"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar im\xe1genes desde la librer\xeda de im\xe1genes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resources"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar la carpeta de Recursos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"trash"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar m\xe9todos y formularios en la papelera (*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"windowPositions"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar posiciones de ventana"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodPreferences"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar las preferencias del editor de m\xe9todos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"buildSettings"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar el archivo buildApp.xml"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dataPath"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para copiar la \xfaltima ruta de archivo de datos en el archivo de preferencias del usuario del proyecto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"directory"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar usuarios y grupos 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"styleSheets"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar hojas de estilo como CSS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"documentation"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"true para exportar comentarios del Explorador en archivos markdown"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'(*) El filtro "trash" es \xfatil solo si tambi\xe9n se seleccionan los filtros "projectMethods" o "forms".'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Atenci\xf3n"}),": cuando se pasa el par\xe1metro ",(0,s.jsx)(n.em,{children:"opciones"}),' y se usa el objeto "filtro", debe declarar expl\xedcitamente cada propiedad para exportar con el valor ',(0,s.jsx)(n.strong,{children:"true"}),". Cuando se pasa este objeto, 4D asume que todas las propiedades est\xe1n en ",(0,s.jsx)(n.strong,{children:"false"})," por defecto."]}),"\n",(0,s.jsx)(n.h5,{id:"resultado",children:"Resultado"}),"\n",(0,s.jsx)(n.p,{children:"El comando devuelve un objeto que ofrece el estado final de la exportaci\xf3n, as\xed como tambi\xe9n informaci\xf3n sobre problemas encontrados o errores, si los hay. Se devuelven las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Nombre de la propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo de valor"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"success"}),(0,s.jsx)(n.td,{children:"booleano"}),(0,s.jsx)(n.td,{children:"True si la operaci\xf3n de exportaci\xf3n fue exitosa, de lo contrario false."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"messages"}),(0,s.jsx)(n.td,{children:"colecci\xf3n"}),(0,s.jsx)(n.td,{children:"Colecci\xf3n de objetos que describen problemas encontrados durante la operaci\xf3n de exportaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].severity"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:'Nivel de emisi\xf3n. Valores posibles: "info", "error". S\xf3lo el nivel de "error" establece la propiedad "\xe9xito" en false.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].message"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:'Descripci\xf3n del problema o error, por ejemplo, "No compatible con el tipo de objeto"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].errors"}),(0,s.jsx)(n.td,{children:"coleccion"}),(0,s.jsx)(n.td,{children:"Pila de errores (si existe)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," los objetos de emisi\xf3n pueden incluir propiedades adicionales seg\xfan el contexto."]}),"\n",(0,s.jsx)(n.p,{children:"Los posibles errores incluyen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"elementos duplicados"}),"\n",(0,s.jsx)(n.li,{children:"errores de gesti\xf3n de archivos (el archivo ya existe, archivo bloqueado, disco lleno, etc.)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:'Desea exportar el archivo de estructura de la base en una carpeta "Export" con la configuraci\xf3n predeterminada:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $result : Object\n\xa0$result:=Export structure file("Export")\n\xa0If($result.success=True)\n\xa0\xa0\xa0\xa0ALERT("Export successful")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Error during export")\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Desea exportar solo los m\xe9todos proyecto y base, y un archivo de registro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $option;$result : Object\n\xa0$option:=New object("filter";New object)\n\xa0$option.filter.projectMethods:=True\n\xa0$option.filter.databaseMethods:=True\n\xa0$option.withLog:="always"\n\xa0$result:=Export structure file("exportWithLog";$option)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/form-convert-to-dynamic",children:"FORM Convert to dynamic"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(296540);const t={},d=s.createContext(t);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);