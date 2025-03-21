"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4889"],{551786:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-4d-folder","title":"Get 4D folder","description":"Get 4D folder {( carpeta {; opciones} {; *})} : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-4d-folder.md","sourceDirName":"commands-legacy","slug":"/commands/get-4d-folder","permalink":"/docs/es/commands/get-4d-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-4d-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-4d-folder","title":"Get 4D folder","slug":"/commands/get-4d-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get 4D file","permalink":"/docs/es/commands/get-4d-file"},"next":{"title":"Get database localization","permalink":"/docs/es/commands/get-database-localization"}}'),r=n("785893"),l=n("250065");let i={id:"get-4d-folder",title:"Get 4D folder",slug:"/commands/get-4d-folder",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Carpeta 4D activa",id:"carpeta-4d-activa",level:3},{value:"Carpeta Licencias",id:"carpeta-licencias",level:3},{value:"Carpeta de datos",id:"carpeta-de-datos",level:3},{value:"Carpeta base 4D Client",id:"carpeta-base-4d-client",level:3},{value:"Carpeta base (Database Folder)",id:"carpeta-base-database-folder",level:3},{value:"Carpeta base sintaxis Unix (Database Folder Unix Syntax)",id:"carpeta-base-sintaxis-unix-database-folder-unix-syntax",level:3},{value:"Carpeta Resources actual",id:"carpeta-resources-actual",level:3},{value:"Carpeta Logs",id:"carpeta-logs",level:3},{value:"Carpeta ra\xedz HTML",id:"carpeta-ra\xedz-html",level:3},{value:"MobileApps Folder",id:"mobileapps-folder",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Get 4D folder"})," {( ",(0,r.jsx)(a.em,{children:"carpeta"})," {; ",(0,r.jsx)(a.em,{children:"opciones"}),"} {; *})} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"carpeta"}),(0,r.jsx)(a.td,{children:"Integer"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Tipo de carpeta (si se omite = carpeta activa 4D)"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"opciones"}),(0,r.jsx)(a.td,{children:"Object"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Configuraci\xf3n de la ruta de la carpeta de la base 4D Client"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"*"}),(0,r.jsx)(a.td,{children:"Operador"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Devuelve la carpeta de la base local"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Resultado"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsx)(a.td,{children:"\u2190"}),(0,r.jsx)(a.td,{children:"Ruta de acceso a la carpeta designada"})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["El comando ",(0,r.jsx)(a.strong,{children:"Get 4D folder"})," devuelve la ruta de acceso a la carpeta 4D activa de la aplicaci\xf3n actual o de la carpeta del entorno 4D especificada por los par\xe1metros ",(0,r.jsx)(a.em,{children:"opciones"})," y ",(0,r.jsx)(a.em,{children:"carpeta"}),", si se pasa. Este comando le permite obtener la ruta de acceso actual a las carpetas utilizadas por la aplicaci\xf3n 4D. Utilizando este comando, asegura que su c\xf3digo funcionar\xe1 correctamente en todas las plataformas que se ejecuten en un sistema localizado."]}),"\n",(0,r.jsxs)(a.p,{children:["En ",(0,r.jsx)(a.em,{children:"carpeta"}),', puede pasar una de las siguientes constantes, ubicadas en el tema "',(0,r.jsx)(a.em,{children:"Entorno 4D"}),'" (a continuaci\xf3n encontrar\xe1 una descripci\xf3n de cada carpeta):']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Constante"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{children:"Valor"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"4D Client database folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"3"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Active 4D Folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"0"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Current resources folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"6"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Data folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"9"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Database folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"4"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Database folder Unix syntax"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"5"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"HTML Root folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"8"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Licenses folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"1"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Logs folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"7"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"MobileApps folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"10"})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro ",(0,r.jsx)(a.em,{children:"opciones"})," permite personalizar la ruta de la carpeta de recursos locales. S\xf3lo se tiene en cuenta cuando se utiliza la constante 4D Client database folder (ver abajo)."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota"}),": si el comando ",(0,r.jsx)(a.strong,{children:"Get 4D folder"})," es llamado desde un 4D remoto, la ruta devuelta es la de la m\xe1quina remota, no la de 4D Server."]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-4d-activa",children:"Carpeta 4D activa"}),"\n",(0,r.jsx)(a.p,{children:"Las aplicaciones del entorno 4D utilizan una carpeta especifica para almacenar la siguiente informaci\xf3n:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Archivos de preferencias utilizados por las aplicaciones 4D"}),"\n",(0,r.jsx)(a.li,{children:"Archivo Shortcuts.xml (atajos de teclado personalizados)"}),"\n",(0,r.jsx)(a.li,{children:"Carpeta Macros v2 (macro comandos del editor de m\xe9todos)"}),"\n",(0,r.jsx)(a.li,{children:"Carpeta Favorites v1x, por ejemplo Favorites v13 (rutas de acceso de las bases locales y remotas que se hayan abierto)"}),"\n",(0,r.jsx)(a.li,{children:"Carpeta Logs para registros de mantenimiento y cuando los datos son de solo lectura"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"La carpeta 4D activa es creada por defecto en la siguiente ubicaci\xf3n:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En Windows: ",(0,r.jsx)(a.em,{children:"{Disk}:\\Users\\{userName}\\AppData\\Roaming\\{applicationName}"})]}),"\n",(0,r.jsxs)(a.li,{children:["En macOS: ",(0,r.jsx)(a.em,{children:"{Disk}:Users:{userName}:Library:Application Support:{applicationName}"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-licencias",children:"Carpeta Licencias"}),"\n",(0,r.jsx)(a.p,{children:"Carpeta que contiene los archivos de licencia del equipo."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," en el caso de una aplicaci\xf3n fusionada con 4D Volume Desktop, la carpeta de licencias est\xe1 inclu\xedda en el paquete de la aplicaci\xf3n."]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-de-datos",children:"Carpeta de datos"}),"\n",(0,r.jsx)(a.p,{children:"Ruta de la carpeta que contiene el archivo de datos actual. La ruta de acceso se expresa utilizando la sintaxis est\xe1ndar de la plataforma actual."}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-base-4d-client",children:"Carpeta base 4D Client"}),"\n",(0,r.jsx)(a.p,{children:"Ruta de la carpeta 4D creada en m\xe1quinas remotas 4D para guardar archivos y carpetas relacionados con la base (recursos, plug-ins, carpeta Resources, etc.). El comando puede devolver:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["la ruta para la aplicaci\xf3n actual cuando se llama en una m\xe1quina remota y se omite el par\xe1metro ",(0,r.jsx)(a.em,{children:"opciones"}),","]}),"\n",(0,r.jsxs)(a.li,{children:["la ruta para toda aplicaci\xf3n cuando se utiliza el par\xe1metro ",(0,r.jsx)(a.em,{children:"opciones"})," (en cuyo caso ",(0,r.jsx)(a.strong,{children:"Get 4D folder"})," puede llamarse en cualquier m\xe1quina)."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Por defecto, la ruta es:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["En Windows: {*",(0,r.jsx)(a.em,{children:"Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName_IP_Port_key}"}),(0,r.jsx)(a.br,{}),"\nej.: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp_192_168_2_134_19813_157"]}),"\n",(0,r.jsxs)(a.li,{children:["En macOS: ",(0,r.jsx)(a.em,{children:"{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName_IP_Port_key}."}),(0,r.jsx)(a.br,{}),"\nej.:Users:John Doe:Library:Caches:myApp Client:myApp_192_168_2_134_19813_933"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Se utilizan carpetas diferentes si se ejecutan simult\xe1neamente varias instancias de la aplicaci\xf3n cliente en el mismo equipo."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," en Windows, en los proyectos cliente fusionados, la ubicaci\xf3n de esta carpeta se modifica si se utiliza la llave BuildApp ",(0,r.jsx)(a.em,{children:"ShareLocalResourcesOnWindowsClient"})," ."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsxs)(a.strong,{children:["Uso de la carpeta base 4D Client con el par\xe1metro ",(0,r.jsx)(a.em,{children:"opciones"})]})}),"\n",(0,r.jsxs)(a.p,{children:["Puede utilizar el par\xe1metro ",(0,r.jsx)(a.em,{children:"opciones"})," si desea calcular cualquier ruta de carpeta local de base 4D. En este caso, la ruta se construye a partir de la informaci\xf3n que usted suministra en el objeto ",(0,r.jsx)(a.em,{children:"opciones"})," y el comando puede ser utilizado de una aplicaci\xf3n 4D, 4D Server, o remota. Gracias a esta funcionalidad, puede precalcular las rutas de sus carpetas de recursos, por ejemplo para precargar contenidos."]}),"\n",(0,r.jsxs)(a.p,{children:["Puede pasar las siguientes propiedades en el objeto ",(0,r.jsx)(a.em,{children:"opciones"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Propiedad"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Tipo"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Descripci\xf3n"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"remoteAppPath"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsx)(a.td,{children:"Opcional - Ruta del sistema ejecutable de la aplicaci\xf3n remota. Por defecto es la ruta ejecutable de la aplicaci\xf3n actual."})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"buildApplicationName"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsxs)(a.td,{children:["Opcional: nombre de la aplicaci\xf3n (igual que el valor de la llave xml BuildApp ",(0,r.jsx)(a.em,{children:"BuildApplicationName"})," ). Por defecto es el nombre de la aplicaci\xf3n actual."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"structureName"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsxs)(a.td,{children:["Obligatorio excepto si est\xe1 definido el atributo ",(0,r.jsx)(a.em,{children:"clientServerSystemFolderName"})," - Nombre de la estructura."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"ipAddress"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsxs)(a.td,{children:["Obligatorio excepto si se define el atributo ",(0,r.jsx)(a.em,{children:"clientServerSystemFolderName"})," - Direcci\xf3n IP del servidor (igual que el valor de la llave xml BuildApp ",(0,r.jsx)(a.em,{children:"IPAddress"})," )."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"portNumber"}),(0,r.jsx)(a.td,{children:"Number"}),(0,r.jsxs)(a.td,{children:["Obligatorio excepto si se define el atributo ",(0,r.jsx)(a.em,{children:"clientServerSystemFolderName"})," - Puerto de publicaci\xf3n del servidor (el mismo que el valor de la llave xml BuildApp ",(0,r.jsx)(a.em,{children:"PortNumber"})," )."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"clientServerSystemFolderName"}),(0,r.jsx)(a.td,{children:"Text"}),(0,r.jsxs)(a.td,{children:["Opcional - Opcional - Nombre personalizado de la carpeta final de recursos locales (igual que el valor de la llave xml BuildApp ",(0,r.jsx)(a.em,{children:"ClientServerSystemFolderName"}),"  BuildApp)."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"shareLocalResourcesOnWindowsClient"}),(0,r.jsx)(a.td,{children:"Boolean"}),(0,r.jsxs)(a.td,{children:["Opcional - Carpeta de recursos locales compartidos (igual que el valor de la llave xml BuildApp ",(0,r.jsx)(a.em,{children:"ShareLocalResourcesOnWindowsClient"})," )."]})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," la ruta devuelta se expresa utilizando la sintaxis del sistema de la m\xe1quina que ejecuta el comando."]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-base-database-folder",children:"Carpeta base (Database Folder)"}),"\n",(0,r.jsx)(a.p,{children:"Carpeta que contiene el archivo de estructura de la base. La ruta de acceso se expresa utilizando la sintaxis est\xe1ndar de la plataforma actual."}),"\n",(0,r.jsxs)(a.p,{children:["Con la aplicaci\xf3n 4D Client, esta constante es estrictamente equivalente a la constante anterior ",(0,r.jsx)(a.em,{children:"4D Client Database Folder"}),": el comando devuelve la ruta de acceso de la carpeta creada localmente."]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-base-sintaxis-unix-database-folder-unix-syntax",children:"Carpeta base sintaxis Unix (Database Folder Unix Syntax)"}),"\n",(0,r.jsxs)(a.p,{children:["Carpeta que contiene el archivo de estructura de la base. Esta constante designa la misma carpeta que la anterior pero la ruta de acceso que devuelve se expresa utilizando sintaxis Unix (Posix), de tipo/Usuarios/... Esta sintaxis se usa principalmente cuando utiliza el comando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/launch-external-process",children:"LAUNCH EXTERNAL PROCESS"})," bajo macOS."]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-resources-actual",children:"Carpeta Resources actual"}),"\n",(0,r.jsx)(a.p,{children:"Carpeta Resources de la base. Esta carpeta contiene los elementos adicionales (im\xe1genes, textos) utilizados por la interfaz de la base. Un componente puede tener su propia carpeta Resources."}),"\n",(0,r.jsx)(a.p,{children:"En modo cliente/servidor, esta carpeta permite organizar la transferencia de datos personalizados (im\xe1genes, archivos, subcarpetas...) entre el equipo servidor y los equipos clientes. El contenido de esta carpeta se actualiza autom\xe1ticamente cada vez que un equipo cliente se conecta. Todos los mecanismos de referenciaci\xf3n asociados a la carpeta Resources son soportados en modo cliente/servidor (carpeta .lproj, XLIFF, im\xe1genes...). Adicionalmente, 4D ofrece varias herramientas que pueden utilizarse para administrar y actualizar esta carpeta din\xe1micamente, particularmente un explorador de recursos."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"si la carpeta Resources no existe para la base, se crear\xe1 ejecutando el comando Get 4D folder con la constante Current resources folder."}),"\n",(0,r.jsxs)(a.li,{children:["En Windows, en los proyectos cliente fusionados, la ubicaci\xf3n de esta carpeta se modifica si se utiliza la llave BuildApp ",(0,r.jsx)(a.em,{children:"ShareLocalResourcesOnWindowsClient"})," ."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-logs",children:"Carpeta Logs"}),"\n",(0,r.jsx)(a.p,{children:"La carpeta Logs de la base, ubicada al mismo nivel del archivo de datos, centraliza los archivos de historial de la base actual:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"conversi\xf3n de la base,"}),"\n",(0,r.jsx)(a.li,{children:"peticiones al servidor web,"}),"\n",(0,r.jsx)(a.li,{children:"diario de actividades backup/restaurar,"}),"\n",(0,r.jsx)(a.li,{children:"depuraci\xf3n de los comandos,"}),"\n",(0,r.jsx)(a.li,{children:"peticiones 4D server (generadas en equipos cliente y en el servidor)."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Una carpeta Logs adicional, ubicada en la carpeta de preferencias del usuario del sistema (Active 4D Folder), se utiliza para los archivos de registro de mantenimiento (compactar, verificar, reparar). Se recomienda llamar a ",(0,r.jsx)(a.a,{href:"/docs/es/commands/get-4d-file",children:"Get 4D file"}),"(archivo de registro de compactaci\xf3n), por ejemplo, cuando desee acceder a dichos archivos de registro. Esta carpeta de registros tambi\xe9n se utiliza en los casos en que la carpeta de registros normales no se puede escribir."]}),"\n",(0,r.jsxs)(a.li,{children:["si la carpeta Logs no existe para la base, ejecutando el comando ",(0,r.jsx)(a.strong,{children:"Get 4D folder"})," con la constante Logs folder se provoca su creaci\xf3n."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"carpeta-ra\xedz-html",children:"Carpeta ra\xedz HTML"}),"\n",(0,r.jsxs)(a.p,{children:["Carpeta ra\xedz HTML actual de la base. La ruta de acceso devuelta se expresa con la sintaxis est\xe1ndar de la plataforma actual. La carpeta ra\xedz HTML es la carpeta en la cual el servidor web de 4D busca las p\xe1ginas y archivos web solicitados. Por defecto, se llama ",(0,r.jsx)(a.strong,{children:"WebFolder"})," y se encuentra junto al archivo de estructura. Su ubicaci\xf3n puede definirse en la p\xe1gina Web/Configuraci\xf3n de las Preferencias o din\xe1micamente v\xeda el comando ",(0,r.jsx)(a.a,{href:"/docs/es/commands/web-set-root-folder",children:"WEB SET ROOT FOLDER"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," en Windows, en los proyectos cliente fusionados, la ubicaci\xf3n de esta carpeta se modifica si se utiliza la llave BuildApp ",(0,r.jsx)(a.em,{children:"ShareLocalResourcesOnWindowsClient"})," ."]}),"\n",(0,r.jsx)(a.h3,{id:"mobileapps-folder",children:"MobileApps Folder"}),"\n",(0,r.jsxs)(a.p,{children:["Carpeta que contiene todos los archivos de sesi\xf3n existentes (.json) utilizados por la aplicaci\xf3n 4D para hacer referencia a sesiones de usuarios de aplicaciones m\xf3viles (es decir, sesiones de 4D para aplicaciones iOS o 4D for Android). Los archivos de sesi\xf3n se agrupan en subcarpetas de aplicaciones y se crean autom\xe1ticamente. Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsx)(a.a,{href:"https://developer.4d.com/go-mobile/",children:"documentaci\xf3n go mobile "}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Esta carpeta se encuentra en el mismo nivel que el archivo de datos 4D actual."}),"\n",(0,r.jsx)(a.h3,{id:""}),"\n",(0,r.jsxs)(a.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(a.em,{children:"*"})," es \xfatil en el caso de una arquitectura que utiliza componentes: puede utilizarse para determinar la base de datos (local o componente) para la que se desea obtener el nombre de la ruta de la carpeta. Este par\xe1metro s\xf3lo es v\xe1lido para las carpetas Database folder, Database folder UNIX syntax y Current resources folder. Se ignora en todos los dem\xe1s casos."]}),"\n",(0,r.jsx)(a.p,{children:"Cuando se llama al comando desde un componente:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Si se pasa el par\xe1metro ",(0,r.jsx)(a.em,{children:"*"}),", el comando devuelve la ruta de la carpeta de la base de datos local,"]}),"\n",(0,r.jsxs)(a.li,{children:["Si no se pasa el par\xe1metro ",(0,r.jsx)(a.em,{children:"*"}),", el comando devuelve la ruta de la carpeta del componente.",(0,r.jsx)(a.br,{}),"\nLa carpeta de la base de datos (Database folder y Database folder UNIX syntax) devuelta difiere seg\xfan el tipo de arquitectura del componente:\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"En el caso de una carpeta/paquete .4dbase, el comando devuelve la ruta de la carpeta/paquete .4dbase,"}),"\n",(0,r.jsx)(a.li,{children:'En el caso de un archivo .4db o .4dc, el comando devuelve la ruta de la carpeta "Componentes",'}),"\n",(0,r.jsxs)(a.li,{children:["En el caso de un alias o un acceso directo, el comando devuelve el nombre de la ruta de la carpeta que contiene la base de datos matriz original. El resultado difiere seg\xfan el formato de esta base de datos (carpeta/paquete .4dbase o archivo .4db/.4dc), como se ha descrito anteriormente.",(0,r.jsx)(a.br,{}),"\nCuando se llama al comando desde la base de datos local, siempre devuelve el nombre de la ruta de la carpeta de la base de datos del host, independientemente de que se pase o no el par\xe1metro ",(0,r.jsx)(a.em,{children:"*"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(a.p,{children:["Durante el inicio de una base monousuario, usted quiere cargar (o crear) sus propios par\xe1metros en un archivo ubicado en la carpeta 4D. Para hacer esto, en el ",(0,r.jsx)(a.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"}),", puede escribir c\xf3digo similar a este:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0$vsPrefDocName:=Get 4D folder+"MyPrefs.prf"\xa0//Construir la ruta de acceso al archivo Preferencias\n\xa0\xa0// Verificar si el archivo existe\n\xa0If(Test path name($vsPrefDocName)#Is a document)\n\xa0\xa0\xa0\xa0$vtPrefDocRef:=Create document($vsPrefDocName.prf)\xa0//Si no, crearlo\n\xa0Else\n\xa0\xa0\xa0\xa0$vtPrefDocRef:=Open document($vsPrefDocName.prf)\xa0//Si s\xed, abrirlo\n\xa0End if\n\xa0If(OK=1)\n\xa0\xa0//Procesar el contenido del documento\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vtPrefDocRef)\n\xa0Else\n\xa0\xa0//Manejar el error\n\xa0End if\n'})}),"\n",(0,r.jsx)(a.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(a.p,{children:"Este ejemplo ilustra el uso de la constante Database Folder Unix Syntax bajo Mac OS para listar el contenido de la carpeta de la base:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0$posixpath:="\\""+Get 4D folder(Database folder Unix syntax)+"\\""\n\xa0$myfolder:="ls -l "+$posixpath\n\xa0$in:=""\n\xa0$out:=""\n\xa0$err:=""\n\xa0LAUNCH EXTERNAL PROCESS($myfolder;$in;$out;$err)\n'})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"}),' bajo Mac OS, es necesario colocar las rutas de acceso entre comillas cuando contienen los nombres de archivos o de carpetas con espacios. La secuencia de escape "\\" permite insertar el car\xe1cter comillas en la cadena. Tambi\xe9n puede utilizar la instrucci\xf3n Char(Double quote).']}),"\n",(0,r.jsx)(a.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsxs)(a.p,{children:["Si el par\xe1metro ",(0,r.jsx)(a.em,{children:"carpeta"})," no es v\xe1lido o si la ruta de acceso devuelta est\xe1 vac\xeda, la varible sistema OK toma el valor 0."]}),"\n",(0,r.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/component-list",children:"COMPONENT LIST"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/system-folder",children:"System folder"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/temporary-folder",children:"Temporary folder"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/test-path-name",children:"Test path name"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/web-set-root-folder",children:"WEB SET ROOT FOLDER"})]}),"\n",(0,r.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"485"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Modifica variables"}),(0,r.jsx)(a.td,{children:"OK"})]})]})]})]})}function p(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return d},a:function(){return i}});var s=n(667294);let r={},l=s.createContext(r);function i(e){let a=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);