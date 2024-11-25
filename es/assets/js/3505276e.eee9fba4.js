"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70265"],{987136:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"Admin/cli","title":"Interfaz de l\xednea de\\n          comando","description":"Puede utilizar el terminal macOS o la consola Windows para manejar sus aplicaciones 4D (4D y 4D Server) utilizando l\xedneas de comando. M\xe1s concretamente, esta funcionalidad le permite:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Admin/cli.md","sourceDirName":"Admin","slug":"/Admin/cli","permalink":"/docs/es/19/Admin/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"cli","title":"Interfaz de l\xednea de\\n          comando"},"sidebar":"docs","previous":{"title":"Protocolo TLS (HTTPS)","permalink":"/docs/es/19/Admin/tls"},"next":{"title":"Descripci\xf3n de los archivos hist\xf3ricos","permalink":"/docs/es/19/Admin/debugLogFiles"}}'),i=a("785893"),d=a("250065");let r={id:"cli",title:"Interfaz de l\xednea de\n          comando"},c=void 0,o={},l=[{value:"Informaci\xf3n b\xe1sica",id:"informaci\xf3n-b\xe1sica",level:2},{value:"Lanzar una aplicaci\xf3n 4D",id:"lanzar-una-aplicaci\xf3n-4d",level:2},{value:"Ejemplos",id:"ejemplos",level:3}];function t(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Puede utilizar el terminal macOS o la consola Windows para manejar sus aplicaciones 4D (4D y 4D Server) utilizando l\xedneas de comando. M\xe1s concretamente, esta funcionalidad le permite:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lanzar una base de datos de forma remota, lo que puede ser especialmente \xfatil para administrar los servidores web."}),"\n",(0,i.jsx)(n.li,{children:"ejecutar pruebas autom\xe1ticas para sus aplicaciones."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"informaci\xf3n-b\xe1sica",children:"Informaci\xf3n b\xe1sica"}),"\n",(0,i.jsx)(n.p,{children:"Puede ejecutar l\xedneas de comando para las aplicaciones 4D utilizando el terminal macOS o la consola Windows."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En macOS, debe utilizar el comando ",(0,i.jsx)(n.code,{children:"open"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"En Windows, puede pasar los argumentos directamente."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["En macOS, se pueden pasar los argumentos directamente yendo a la carpeta donde se encuentra la aplicaci\xf3n dentro del paquete (Contents/MacOS), lo que permite direccionar el flujo stderr. Por ejemplo, si el paquete 4D se encuentra en la carpeta ",(0,i.jsx)(n.code,{children:"MyFolder"}),", debe escribir la l\xednea de comandos de la siguiente manera: ",(0,i.jsx)(n.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),". Sin embargo, le recomendamos que utilice el comando ",(0,i.jsx)(n.code,{children:"open"})," siempre que no necesite acceder al flujo stderr."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lanzar-una-aplicaci\xf3n-4d",children:"Lanzar una aplicaci\xf3n 4D"}),"\n",(0,i.jsx)(n.p,{children:"A continuaci\xf3n se describen las l\xedneas de comando y los argumentos soportados para lanzar aplicaciones 4D."}),"\n",(0,i.jsx)(n.p,{children:"Sintaxis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]\n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argumento"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"applicationPath"})}),(0,i.jsx)(n.td,{children:"Ruta de acceso a 4D, 4D Server o de la aplicaci\xf3n fusionada"}),(0,i.jsx)(n.td,{children:'Lance la aplicaci\xf3n. Es id\xe9ntico a hacer doble clic en la aplicaci\xf3n 4D. Cuando se llama sin argumento de archivo de estructura, la aplicaci\xf3n se ejecuta y aparece la caja de di\xe1logo "seleccionar la base de datos".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--version"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Muestra la versi\xf3n de la aplicaci\xf3n y sale"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--help"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Muestra el mensaje de ayuda y sale. Argumentos alternativos: -?, -h"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--project"})}),(0,i.jsx)(n.td,{children:"projectPath | packagePath | 4dlinkPath"}),(0,i.jsx)(n.td,{children:"Archivo de proyecto a abrir con el archivo de datos actual. No aparece ninguna caja de di\xe1logo."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--data"})}),(0,i.jsx)(n.td,{children:"dataPath"}),(0,i.jsx)(n.td,{children:"Archivo de datos a abrir con el archivo de proyecto designado. Si no se especifica, 4D utiliza el \xfaltimo archivo de datos abierto."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--opening-mode"})}),(0,i.jsx)(n.td,{children:"interpreted | compiled"}),(0,i.jsx)(n.td,{children:"Base de datos de peticiones a abrir en modo interpretado o compilado. No se lanza ning\xfan error si el modo solicitado no est\xe1 disponible."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--create-data"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:'Crea autom\xe1ticamente un nuevo archivo de datos si no se encuentra un archivo de datos v\xe1lido. No aparece ninguna caja de di\xe1logo. 4D utiliza el nombre del archivo pasado en el argumento "--data" si lo hay (genera un error si ya existe un archivo con el mismo nombre).'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--user-param"})}),(0,i.jsx)(n.td,{children:"Cadena usuario personalizada"}),(0,i.jsx)(n.td,{children:'Una cadena que estar\xe1 disponible en la aplicaci\xf3n 4D a trav\xe9s del comando Get database parameter (la cadena no debe comenzar por un caracter "-", que est\xe1 reservado).'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--headless"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Lanza 4D, 4D Server o la aplicaci\xf3n fusionada sin interfaz (modo headless). En este modo:",(0,i.jsx)(n.li,{children:" El modo Dise\xf1o no est\xe1 disponible, la base de datos se inicia en modo Aplicaci\xf3n"}),(0,i.jsx)(n.li,{children:" No se muestra ninguna barra de herramientas, barra de men\xfas, ventana MDI o pantalla de inicio"}),(0,i.jsx)(n.li,{children:"No aparece ning\xfan icono en el dock o en la barra de tareas"}),(0,i.jsx)(n.li,{children:'La base de datos abierta no est\xe1 registrada en el men\xfa "Bases de datos recientes"'}),(0,i.jsxs)(n.li,{children:["El registro de diagn\xf3stico se lanza autom\xe1ticamente ( ver ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),", selector 79)"]}),(0,i.jsxs)(n.li,{children:["Cada llamada a un cuadro de di\xe1logo es interceptada y se proporciona una respuesta autom\xe1tica (por ejemplo, OK para el comando ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page41.html",children:"ALERT"}),", Abort para un di\xe1logo de error...). Todos los comandos interceptados(*) se registran en el registro de diagn\xf3stico."]}),(0,i.jsx)(n.br,{}),"Para las necesidades de mantenimiento, puede enviar cualquier texto a los flujos de salida est\xe1ndar utilizando la funci\xf3n ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"}),". Tenga en cuenta que las aplicaciones 4D sin interfaz s\xf3lo pueden cerrarse mediante una llamada a ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page291.html",children:"QUIT 4D"})," o utilizando el administrador de tareas del sistema operativo."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--dataless"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Lanza 4D, 4D Server o la aplicaci\xf3n fusionada en modo sin datos. El modo sin datos es \xfatil cuando 4D ejecuta tareas sin necesidad de datos (compilaci\xf3n de proyectos, por ejemplo). En este modo: ",(0,i.jsxs)(n.li,{children:["No se abre ning\xfan archivo que contenga datos, incluso si se especifica en la l\xednea de comandos o en el archivo ",(0,i.jsx)(n.code,{children:".4DLink"}),", o cuando se utilizan los comandos ",(0,i.jsx)(n.code,{children:"CREATE DATA FILE"})," y ",(0,i.jsx)(n.code,{children:"OPEN DATA FILE"}),"."]}),(0,i.jsxs)(n.li,{children:["Los comandos que manipulan datos generar\xe1n un error. Por ejemplo, ",(0,i.jsx)(n.code,{children:"CREATE RECORD"}),' lanza "no hay tabla a la que aplicar el comando".']}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Nota"}),":",(0,i.jsx)(n.li,{children:"Si se pasa en la l\xednea de comandos, el modo sin datos se aplica a todas las bases de datos abiertas en 4D, mientras no se cierre la aplicaci\xf3n."}),(0,i.jsxs)(n.li,{children:["Si se pasa utilizando el archivo ",(0,i.jsx)(n.code,{children:".4DLink"}),", el modo sin datos s\xf3lo se aplica a la base de datos especificada en el archivo ",(0,i.jsx)(n.code,{children:".4DLink"}),". Para m\xe1s informaci\xf3n sobre los archivos ",(0,i.jsx)(n.code,{children:".4DLink"}),", ver ",(0,i.jsx)(n.a,{href:"/docs/es/19/Project/creating#project-opening-shortcuts",children:"Atajos para abrir proyectos"}),"."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"`"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --webadmin-settings-file`  | Ruta del archivo                                            | Ruta del archivo WebAdmin `.4DSettings` personalizado para el [servidor web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\n"})}),"\n",(0,i.jsxs)(n.p,{children:["| ",(0,i.jsx)(n.code,{children:"           --webadmin-access-key"}),"     | String                                                      | Llave de acceso al ",(0,i.jsx)(n.a,{href:"/docs/es/19/Admin/webAdmin",children:"servidor web WebAdmin"}),"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |\n| ",(0,i.jsx)(n.code,{children:"           --webadmin-auto-start"}),"     | Boolean                                                     | Estado del inicio autom\xe1tico del ",(0,i.jsx)(n.a,{href:"/docs/es/19/Admin/webAdmin",children:"servidor web WebAdmin"}),"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |\n| ",(0,i.jsx)(n.code,{children:"           --webadmin-store-settings"})," |                                                             | Almacena la llave de acceso y los par\xe1metros de inicio autom\xe1tico en el archivo de par\xe1metros actual (es decir, el archivo ",(0,i.jsx)(n.a,{href:"/docs/es/19/Admin/webAdmin#webadmin-settings",children:(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})})," por defecto o un archivo personalizado designado por el par\xe1metro ",(0,i.jsx)(n.code,{children:"--webadmin-settings-path"}),"). Utilice el argumento ",(0,i.jsx)(n.code,{children:"--webadmin-store-settings"})," para guardar estos par\xe1metros si es necesario                                                                                                                                                                                                                                                                                                          |"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/19/Admin/debugLogFiles#4ddiagnosticlogtxt",children:"Diagnostic log file"})," (licence alert, conversion dialog, database selection, data file selection). En este caso, se lanza un mensaje de error tanto en el flujo stderr como en el registro de eventos sistema, y luego la aplicaci\xf3n se cierra."]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'La carpeta actual del usuario se alcanza utilizando el comando "~ " en macOS y el comando "%HOMEPATH%" en Windows.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lance una aplicaci\xf3n 4D almacenada en el escritorio:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'open ~/Desktop/4D.app\n          open "~/Desktop/4D Server.app"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n          %HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Abra un paquete en macOS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,i.jsx)(n.p,{children:"Abra un archivo de proyecto:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myProj/Project/myProj.4DProject\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,i.jsx)(n.p,{children:"Abra un archivo de proyecto y un archivo de datos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject\n          --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n          --data %HOMEPATH%\\Documents\\data\\myData.4DD\n          o:\n          /project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data\n          %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,i.jsx)(n.p,{children:"Abra un archivo .4DLink:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,i.jsx)(n.p,{children:"Lance la aplicaci\xf3n en modo compilado y cree un archivo de datos si no est\xe1 disponible:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled\n          --create-data true\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode\n          compiled --create-data true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Lance la aplicaci\xf3n con un archivo proyecto y un archivo de datos y pase una cadena como par\xe1metro de usuario:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject\n          --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n          --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Apertura sin interfaz (modo headless):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject\n          --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n          --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return r}});var s=a(667294);let i={},d=s.createContext(i);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);