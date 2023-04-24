"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=l,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const o={id:"cli",title:"Interfaz de l\xednea de comando"},i=void 0,d={unversionedId:"Admin/cli",id:"version-20/Admin/cli",title:"Interfaz de l\xednea de comando",description:"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and tool4d) using command lines. M\xe1s concretamente, esta funcionalidad le permite:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Admin/cli.md",sourceDirName:"Admin",slug:"/Admin/cli",permalink:"/docs/es/Admin/cli",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"cli",title:"Interfaz de l\xednea de comando"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/docs/es/Admin/dataExplorer"},next:{title:"Protocolo TLS (HTTPS)",permalink:"/docs/es/Admin/tls"}},s={},p=[{value:"Informaci\xf3n b\xe1sica",id:"informaci\xf3n-b\xe1sica",level:2},{value:"Lanzar una aplicaci\xf3n 4D",id:"lanzar-una-aplicaci\xf3n-4d",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Using tool4d",id:"using-tool4d",level:3},{value:"Disabled 4D features",id:"disabled-4d-features",level:3},{value:"4D Server in utility mode",id:"4d-server-in-utility-mode",level:2}],m={toc:p};function c(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",l({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and ",(0,n.kt)("a",l({parentName:"p"},{href:"#tool4d"}),"tool4d"),") using command lines. M\xe1s concretamente, esta funcionalidad le permite:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lanzar una base de datos de forma remota, lo que puede ser especialmente \xfatil para administrar los servidores web."),(0,n.kt)("li",{parentName:"ul"},"ejecutar pruebas autom\xe1ticas para sus aplicaciones.")),(0,n.kt)("h2",l({},{id:"informaci\xf3n-b\xe1sica"}),"Informaci\xf3n b\xe1sica"),(0,n.kt)("p",null,"Puede ejecutar l\xedneas de comando para las aplicaciones 4D utilizando el terminal macOS o la consola Windows."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"En macOS, debe utilizar el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"open"),"."),(0,n.kt)("li",{parentName:"ul"},"En Windows, puede pasar los argumentos directamente.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"En macOS, se pueden pasar los argumentos directamente yendo a la carpeta donde se encuentra la aplicaci\xf3n dentro del paquete (Contents/MacOS), lo que permite direccionar el flujo stderr. Por ejemplo, si el paquete 4D se encuentra en la carpeta ",(0,n.kt)("inlineCode",{parentName:"p"},"MyFolder"),", debe escribir la l\xednea de comandos de la siguiente manera: ",(0,n.kt)("inlineCode",{parentName:"p"},"/MyFolder/4D.app/Contents/MacOS/4D"),". Sin embargo, le recomendamos que utilice el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," siempre que no necesite acceder al flujo stderr.")),(0,n.kt)("h2",l({},{id:"lanzar-una-aplicaci\xf3n-4d"}),"Lanzar una aplicaci\xf3n 4D"),(0,n.kt)("p",null,"Here is a description of command lines and arguments supported to launch 4D applications."),(0,n.kt)("p",null,"Sintaxis:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] \n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  \n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  \n[--utility] [--skip-onstartup] [--startup-method <methodName string>] \n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Argumento","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Valor"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"applicationPath")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Path of 4D, 4D Server, merged application, or tool4d"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Launches the application.",(0,n.kt)("br",null),"If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--version")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Muestra la versi\xf3n de la aplicaci\xf3n y sale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--help")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Muestra el mensaje de ayuda y sale. Argumentos alternativos: -?, -h")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--project")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"projectPath ","|"," packagePath ","|"," 4dlinkPath"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Archivo de proyecto a abrir con el archivo de datos actual. No aparece ninguna caja de di\xe1logo.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--data")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataPath"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Archivo de datos a abrir con el archivo de proyecto designado. If not specified, the last opened data file is used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--opening-mode")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"interpreted ","|"," compiled"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Base de datos de peticiones a abrir en modo interpretado o compilado. No se lanza ning\xfan error si el modo solicitado no est\xe1 disponible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--create-data")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'Crea autom\xe1ticamente un nuevo archivo de datos si no se encuentra un archivo de datos v\xe1lido. No aparece ninguna caja de di\xe1logo. 4D utiliza el nombre del archivo pasado en el argumento "--data" si lo hay (genera un error si ya existe un archivo con el mismo nombre).')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--user-param")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Cadena usuario personalizada"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"A string that will be available within the application through the ",(0,n.kt)("a",l({parentName:"td"},{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Get database parameter")),' command (the string must not start with a "-" character, which is reserved).')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--headless")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Lanza 4D, 4D Server o la aplicaci\xf3n fusionada sin interfaz (modo headless). En este modo:",(0,n.kt)("li",null," El modo Dise\xf1o no est\xe1 disponible, la base de datos se inicia en modo Aplicaci\xf3n"),(0,n.kt)("li",null," No se muestra ninguna barra de herramientas, barra de men\xfas, ventana MDI o pantalla de inicio"),(0,n.kt)("li",null,"No aparece ning\xfan icono en el dock o en la barra de tareas"),(0,n.kt)("li",null,'La base de datos abierta no est\xe1 registrada en el men\xfa "Bases de datos recientes"'),(0,n.kt)("li",null,"El registro de diagn\xf3stico se lanza autom\xe1ticamente ( ver ",(0,n.kt)("a",l({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"SET DATABASE PARAMETER"),", selector 79)"),(0,n.kt)("li",null,"Cada llamada a un cuadro de di\xe1logo es interceptada y se proporciona una respuesta autom\xe1tica (por ejemplo, OK para el comando ",(0,n.kt)("a",l({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page41.html"}),"ALERT"),", Abort para un di\xe1logo de error...). Todos los comandos interceptados(*) se registran en el registro de diagn\xf3stico."),(0,n.kt)("br",null),"Para las necesidades de mantenimiento, puede enviar cualquier texto a los flujos de salida est\xe1ndar utilizando la funci\xf3n ",(0,n.kt)("a",l({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page667.html"}),"LOG EVENT"),". Tenga en cuenta que las aplicaciones 4D sin interfaz s\xf3lo pueden cerrarse mediante una llamada a ",(0,n.kt)("a",l({parentName:"td"},{href:"https://doc.4d.com/4dv19/help/command/en/page291.html"}),"QUIT 4D")," o utilizando el administrador de tareas del sistema operativo.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--dataless")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Launches 4D, 4D Server, merged application or tool4d in dataless mode. El modo sin datos es \xfatil cuando 4D ejecuta tareas sin necesidad de datos (compilaci\xf3n de proyectos, por ejemplo). En este modo: ",(0,n.kt)("li",null,"No se abre ning\xfan archivo que contenga datos, incluso si se especifica en la l\xednea de comandos o en el archivo ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", o cuando se utilizan los comandos ",(0,n.kt)("inlineCode",{parentName:"td"},"CREATE DATA FILE")," y ",(0,n.kt)("inlineCode",{parentName:"td"},"OPEN DATA FILE"),"."),(0,n.kt)("li",null,"Los comandos que manipulan datos generar\xe1n un error. Por ejemplo, ",(0,n.kt)("inlineCode",{parentName:"td"},"CREATE RECORD"),' lanza "no hay tabla a la que aplicar el comando".'),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Nota"),":",(0,n.kt)("li",null,"Si se pasa en la l\xednea de comandos, el modo sin datos se aplica a todas las bases de datos abiertas en 4D, mientras no se cierre la aplicaci\xf3n."),(0,n.kt)("li",null,"Si se pasa utilizando el archivo ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", el modo sin datos s\xf3lo se aplica a la base de datos especificada en el archivo ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),". Para m\xe1s informaci\xf3n sobre los archivos ",(0,n.kt)("inlineCode",{parentName:"td"},".4DLink"),", ver ",(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/GettingStarted/creating#project-opening-shortcuts"}),"Atajos para abrir proyectos"),"."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-file")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Ruta del archivo"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Path of the custom WebAdmin ",(0,n.kt)("inlineCode",{parentName:"td"},".4DSettings")," file for the ",(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/Admin/webAdmin"}),"WebAdmin web server"),". Not available with ",(0,n.kt)("a",l({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-access-key")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Access key for the ",(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/Admin/webAdmin"}),"WebAdmin web server"),". Not available with ",(0,n.kt)("a",l({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-auto-start")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Status of the automatic startup for the ",(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/Admin/webAdmin"}),"WebAdmin web server"),". Not available with ",(0,n.kt)("a",l({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Almacena la llave de acceso y los par\xe1metros de inicio autom\xe1tico en el archivo de par\xe1metros actual (es decir, el archivo ",(0,n.kt)("a",l({parentName:"td"},{href:"/docs/es/Admin/webAdmin#webadmin-settings"}),(0,n.kt)("inlineCode",{parentName:"a"},"WebAdmin.4DSettings"))," por defecto o un archivo personalizado designado por el par\xe1metro ",(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-settings-path"),"). Use the ",(0,n.kt)("inlineCode",{parentName:"td"},"--webadmin-store-settings")," argument to save these settings if necessary. Not available with ",(0,n.kt)("a",l({parentName:"td"},{href:"#tool4d"}),"tool4d"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--utility")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Only available with 4D Server. Launches ",(0,n.kt)("a",l({parentName:"td"},{href:"#4d-server-in-utility-mode"}),"4D Server in utility mode"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--skip-onstartup")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'Launches the project without executing any "automatic" methods, including the ',(0,n.kt)("inlineCode",{parentName:"td"},"On Startup")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"On Exit")," database methods")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"--startup-method")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Project method name (string)"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Project method to execute immediately after the ",(0,n.kt)("inlineCode",{parentName:"td"},"On Startup")," database method (if not skipped with ",(0,n.kt)("inlineCode",{parentName:"td"},"--skip-onstartup"),").")))),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/Debugging/debugLogFiles#4ddiagnosticlogtxt"}),"Diagnostic log file")," (licence alert, conversion dialog, database selection, data file selection). En este caso, se lanza un mensaje de error tanto en el flujo stderr como en el registro de eventos sistema, y luego la aplicaci\xf3n se cierra."),(0,n.kt)("h3",l({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'La carpeta actual del usuario se alcanza utilizando el comando "~ " en macOS y el comando "%HOMEPATH%" en Windows.')),(0,n.kt)("p",null,"Lance una aplicaci\xf3n 4D almacenada en el escritorio:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n')),(0,n.kt)("p",null,"Abra un paquete en macOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"--args ~/Documents/myDB.4dbase\n")),(0,n.kt)("p",null,"Abra un archivo de proyecto:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"--args ~/Documents/myProj/Project/myProj.4DProject\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n")),(0,n.kt)("p",null,"Abra un archivo de proyecto y un archivo de datos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\no:\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n")),(0,n.kt)("p",null,"Abra un archivo .4DLink:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"~/Desktop/MyDatabase.4DLink\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n")),(0,n.kt)("p",null,"Lance la aplicaci\xf3n en modo compilado y cree un archivo de datos si no est\xe1 disponible:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n")),(0,n.kt)("p",null,"Lance la aplicaci\xf3n con un archivo proyecto y un archivo de datos y pase una cadena como par\xe1metro de usuario:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n')),(0,n.kt)("p",null,"Apertura sin interfaz (modo headless):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"macOS:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Windows:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n")),(0,n.kt)("h2",l({},{id:"tool4d"}),"tool4d"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"tool4d")," is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI."),(0,n.kt)("p",null,"tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization."),(0,n.kt)("p",null,"tool4d is a perfect tool if you want to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"implement a CI/CD chain for your 4D application,"),(0,n.kt)("li",{parentName:"ul"},"use a light 4D executable to run 4D scripts, for example to execute automatic unit tests.")),(0,n.kt)("h3",l({},{id:"using-tool4d"}),"Using tool4d"),(0,n.kt)("p",null,"You can get tool4d from the 4D ",(0,n.kt)("a",l({parentName:"p"},{href:"https://product-download.4d.com/"}),"Product download page"),"."),(0,n.kt)("p",null,"You use tool4d by executing a ",(0,n.kt)("a",l({parentName:"p"},{href:"#launch-a-4d-application"}),"command line")," with a standard 4D project. You can use all arguments described in the above table, except --",(0,n.kt)("inlineCode",{parentName:"p"},"webadmin")," since this component is ",(0,n.kt)("a",l({parentName:"p"},{href:"#disabled-4d-features"}),"disabled in tool4d"),". With tool4d, the following specific sequence is launched:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"tool4d executes the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Startup"),' database method (and all "automatic" methods such as ',(0,n.kt)("a",l({parentName:"li"},{href:"/docs/es/Users/editing#user-properties"}),"user method"),"), except if the ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," argument is passed."),(0,n.kt)("li",{parentName:"ol"},"tool4d executes the method designated by the ",(0,n.kt)("inlineCode",{parentName:"li"},"--startup-method")," argument, if any."),(0,n.kt)("li",{parentName:"ol"},"tool4d executes the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Exit")," database method, except if the ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," argument is passed."),(0,n.kt)("li",{parentName:"ol"},"tool4d quits.")),(0,n.kt)("p",null,"On Windows, tool4d is a console application so that the ",(0,n.kt)("inlineCode",{parentName:"p"},"stdout")," stream is displayed in the terminal (cmd, powershell...)."),(0,n.kt)("admonition",l({},{title:"Notes",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"tool4d is always executed headless (the ",(0,n.kt)("inlineCode",{parentName:"li"},"headless")," command line option is useless)."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",l({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page494.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Application type")),' command returns the value 6 ("tool4d") when called from the tool4d application.'),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",l({parentName:"li"},{href:"/docs/es/Debugging/debugLogFiles#4ddiagnosticlogtxt"}),"diagnostic log file"),' is prefixed with "4DDiagnosticLogTool".'))),(0,n.kt)("h3",l({},{id:"disabled-4d-features"}),"Disabled 4D features"),(0,n.kt)("p",null,"Keep in mind that tool4d runs automatically in ",(0,n.kt)("strong",{parentName:"p"},"headless mode")," (see ",(0,n.kt)("inlineCode",{parentName:"p"},"--headless")," in ",(0,n.kt)("a",l({parentName:"p"},{href:"#launch-a-4d-application"}),"this table"),"), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"application server, Web server, SQL server,"),(0,n.kt)("li",{parentName:"ul"},"backup scheduler,"),(0,n.kt)("li",{parentName:"ul"},"ODBC and SQL pass-through,"),(0,n.kt)("li",{parentName:"ul"},"all components such as 4D View Pro, 4D SVG, 4D NetKit...,"),(0,n.kt)("li",{parentName:"ul"},"hunspell spell checker,"),(0,n.kt)("li",{parentName:"ul"},"japanese spellchecker (",(0,n.kt)("em",{parentName:"li"},"mecab")," library),"),(0,n.kt)("li",{parentName:"ul"},"WebAdmin"),(0,n.kt)("li",{parentName:"ul"},"CEF,"),(0,n.kt)("li",{parentName:"ul"},"PHP,"),(0,n.kt)("li",{parentName:"ul"},"remote debugger (local debugger, ",(0,n.kt)("inlineCode",{parentName:"li"},"TRACE")," command and breakpoints are ignored in headless applications).")),(0,n.kt)("h2",l({},{id:"4d-server-in-utility-mode"}),"4D Server in utility mode"),(0,n.kt)("p",null,"You can launch a 4D Server instance in a utility mode (headless) by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--utility")," CLI option. In this case, the following workflow is triggered:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"4D Server executes the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Startup"),' database method (and all "automatic" methods such as ',(0,n.kt)("a",l({parentName:"li"},{href:"/docs/es/Users/editing#user-properties"}),"user method"),"), except if the ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," parameter is passed."),(0,n.kt)("li",{parentName:"ol"},"4D Server executes the method designated by the ",(0,n.kt)("inlineCode",{parentName:"li"},"--startup-method"),", if any."),(0,n.kt)("li",{parentName:"ol"},"4D Server executes the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Exit")," database method, except if the ",(0,n.kt)("inlineCode",{parentName:"li"},"--skip-onstartup")," parameter is passed."),(0,n.kt)("li",{parentName:"ol"},"4D Server quits.")),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"Unlike tool4d, 4D Server in utility mode has all its features enabled. However, the application server and all other servers are not started."),(0,n.kt)("p",null,":::"),(0,n.kt)("admonition",l({},{title:"See also",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"See ",(0,n.kt)("a",l({parentName:"p"},{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/"}),"this blog post")," for examples of how to use tool4d and 4D Server in utility mode.")))}c.isMDXComponent=!0}}]);