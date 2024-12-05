"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23507"],{797483:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"Admin/cli","title":"Interfaz de l\xednea de\\n          comando","description":"Puede utilizar el Terminal de macOS o la consola de Windows para manejar sus aplicaciones 4D (4D, 4D Server, aplicaci\xf3n fusionada y tool4d) utilizando l\xedneas de comando. M\xe1s concretamente,","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Admin/cli.md","sourceDirName":"Admin","slug":"/Admin/cli","permalink":"/docs/es/20-R6/Admin/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"cli","title":"Interfaz de l\xednea de\\n          comando"},"sidebar":"docs","previous":{"title":"Explorador de datos","permalink":"/docs/es/20-R6/Admin/dataExplorer"},"next":{"title":"TLS Protocol","permalink":"/docs/es/20-R6/Admin/tls"}}'),i=a("785893"),d=a("250065");let o={id:"cli",title:"Interfaz de l\xednea de\n          comando"},l=void 0,r={},c=[{value:"Informaci\xf3n b\xe1sica",id:"informaci\xf3n-b\xe1sica",level:2},{value:"Lanzar una\naplicaci\xf3n 4D",id:"lanzar-unaaplicaci\xf3n-4d",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Uso de tool4d",id:"uso-de-tool4d",level:3},{value:"Funcionalidades 4D desactivadas",id:"funcionalidades-4d-desactivadas",level:3},{value:"4D Server en modo utilitario",id:"4d-server-en-modo-utilitario",level:2}];function t(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Puede utilizar el Terminal de macOS o la consola de Windows para manejar sus aplicaciones 4D (4D, 4D Server, aplicaci\xf3n fusionada y ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),") utilizando l\xedneas de comando. M\xe1s concretamente,\nesta funcionalidad le permite:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lanzar una base de\ndatos de forma remota, lo que puede ser especialmente \xfatil para administrar los servidores\nweb."}),"\n",(0,i.jsx)(n.li,{children:"ejecutar pruebas\nautom\xe1ticas para sus aplicaciones."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"informaci\xf3n-b\xe1sica",children:"Informaci\xf3n b\xe1sica"}),"\n",(0,i.jsx)(n.p,{children:"Puede ejecutar\nl\xedneas de comando para las aplicaciones 4D utilizando el terminal macOS o la consola\nWindows."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En macOS, debe utilizar el comando ",(0,i.jsx)(n.code,{children:"open"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"En Windows, puede\npasar los argumentos directamente."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["En macOS, se pueden\npasar los argumentos directamente yendo a la carpeta donde se encuentra la aplicaci\xf3n\ndentro del paquete (Contents/MacOS), lo que permite direccionar el flujo stderr. Por ejemplo, si el paquete 4D se encuentra en la carpeta ",(0,i.jsx)(n.code,{children:"MyFolder"}),", debe escribir la l\xednea de comandos de la siguiente manera: ",(0,i.jsx)(n.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),". Sin embargo, recomendamos que utilice el comando ",(0,i.jsx)(n.code,{children:"open"})," siempre que no necesite acceder al stream stderr."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lanzar-unaaplicaci\xf3n-4d",children:"Lanzar una\naplicaci\xf3n 4D"}),"\n",(0,i.jsx)(n.p,{children:"A continuaci\xf3n se describen las l\xedneas de comando y los\nargumentos soportados para lanzar aplicaciones 4D."}),"\n",(0,i.jsx)(n.p,{children:"Sintaxis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  \n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  \n[--utility] [--skip-onstartup] [--startup-method <methodName string>]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Argumento"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"applicationPath"})}),(0,i.jsx)(n.td,{children:"Ruta de 4D, 4D Server, aplicaci\xf3n fusionada o tool4d"}),(0,i.jsxs)(n.td,{children:["Lanza la aplicaci\xf3n.",(0,i.jsx)(n.br,{}),'Si no es sin interfaz: id\xe9ntico a\nhacer doble clic en la aplicaci\xf3n; cuando se llama sin argumento de archivo de estructura,\nla aplicaci\xf3n se ejecuta y aparece la caja de di\xe1logo "seleccionar base de\ndatos".']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--version"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Muestra la versi\xf3n de la aplicaci\xf3n y sale"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--help"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Muestra el mensaje de ayuda y sale. Argumentos\nalternativos: -?, -h"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--project"})}),(0,i.jsx)(n.td,{children:"projectPath\n| packagePath | 4dlinkPath"}),(0,i.jsx)(n.td,{children:"Archivo de proyecto\na abrir con el archivo de datos actual. No aparece ninguna\ncaja de di\xe1logo."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--data"})}),(0,i.jsx)(n.td,{children:"dataPath"}),(0,i.jsx)(n.td,{children:"Archivo de datos a\nabrir con el archivo de proyecto designado. Si no se especifica, se utiliza el \xfaltimo archivo de datos\nabierto."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--opening-mode"})}),(0,i.jsx)(n.td,{children:"interpreted\n| compiled"}),(0,i.jsx)(n.td,{children:"Base de datos de\npeticiones a abrir en modo interpretado o compilado. No se lanza ning\xfan\nerror si el modo solicitado no est\xe1 disponible."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--create-data"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:'Crea autom\xe1ticamente\nun nuevo archivo de datos si no se encuentra un archivo de datos v\xe1lido. No aparece ninguna\ncaja de di\xe1logo. 4D utiliza el nombre\ndel archivo pasado en el argumento "--data" si lo hay (genera un error si ya\nexiste un archivo con el mismo nombre).'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--user-param"})}),(0,i.jsx)(n.td,{children:"Cadena usuario\npersonalizada"}),(0,i.jsxs)(n.td,{children:["Una cadena que estar\xe1 disponible en la aplicaci\xf3n a trav\xe9s del comando ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html",children:(0,i.jsx)(n.code,{children:"Get database parameter"})}),' (la cadena no debe comenzar por un car\xe1cter "-", que est\xe1 reservado).']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--headless"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Lanza 4D, 4D Server o la aplicaci\xf3n fusionada sin interfaz (modo headless). En este modo:",(0,i.jsx)(n.li,{children:" El modo Dise\xf1o no est\xe1 disponible, la base de datos se inicia en modo Aplicaci\xf3n"}),(0,i.jsx)(n.li,{children:" No se muestra la barra de herramientas, la barra de men\xfa, la ventana MDI ni la pantalla de presentaci\xf3n"}),(0,i.jsx)(n.li,{children:"No se muestra ning\xfan icono en el dock o la barra de tareas"}),(0,i.jsx)(n.li,{children:'La base de datos abierta no se registra en el men\xfa "Bases de datos recientes"'}),(0,i.jsxs)(n.li,{children:["Se inicia autom\xe1ticamente el registro de diagn\xf3stico (ver ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),", selector 79)"]}),(0,i.jsxs)(n.li,{children:["Se intercepta cada llamada a una caja de di\xe1logo y se suministra una respuesta autom\xe1tica (por ejemplo, OK para el comando ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page41.html",children:"ALERT"}),", Abort para un di\xe1logo de error...). Todos los comandos interceptados(*) se registran en el historial de diagn\xf3stico."]}),(0,i.jsx)(n.br,{}),"Para las necesidades de mantenimiento, puede enviar cualquier texto a los flujos de salida est\xe1ndar utilizando el comando ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"}),". Tenga en cuenta que las aplicaciones 4D sin interfaz s\xf3lo pueden cerrarse mediante una llamada a ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page291.html",children:"QUIT 4D"})," o utilizando el administrador de tareas del sistema operativo."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--dataless"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Lanza 4D, 4D Server, la aplicaci\xf3n fusionada o tool4d en modo sin datos. El modo sin datos es \xfatil cuando 4D ejecuta tareas sin necesidad de datos (compilaci\xf3n de proyectos, por ejemplo). En este modo: ",(0,i.jsxs)(n.li,{children:["No se abre ning\xfan archivo que contenga datos, aunque se especifique en la l\xednea de comandos o en el archivo ",(0,i.jsx)(n.code,{children:".4DLink"}),", o cuando se utilicen los comandos ",(0,i.jsx)(n.code,{children:"CREATE DATA FILE"})," y ",(0,i.jsx)(n.code,{children:"OPEN DATA FILE"}),"."]}),(0,i.jsxs)(n.li,{children:["Los comandos que manipulen datos generar\xe1n un error. Por ejemplo, ",(0,i.jsx)(n.code,{children:"CREATE RECORD"})," muestra el mensaje \u201Cno hay tabla a la cual aplicar el comando\u201D."]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Nota"}),":",(0,i.jsx)(n.li,{children:"si se pasa en la l\xednea de comandos, el modo dataless se aplica a todas las bases de datos abiertas en 4D, siempre y cuando la aplicaci\xf3n no se cierre."}),(0,i.jsxs)(n.li,{children:["Si se pasa utilizando el archivo ",(0,i.jsx)(n.code,{children:".4DLink"}),", el modo dataless solo se aplica a la base de datos especificada en el archivo ",(0,i.jsx)(n.code,{children:".4DLink"}),". Para m\xe1s informaci\xf3n sobre los archivos ",(0,i.jsx)(n.code,{children:".4DLink"}),", ver ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/GettingStarted/creating#project-opening-shortcuts",children:"Atajos para abrir proyectos"}),"."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-settings-file"})}),(0,i.jsx)(n.td,{children:"Ruta del archivo"}),(0,i.jsxs)(n.td,{children:["Ruta del archivo ",(0,i.jsx)(n.code,{children:".4DSettings"})," personalizado para el ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Admin/webAdmin",children:"servidor web WebAdmin"}),". No disponible con ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-access-key"})}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Llave de acceso para el ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Admin/webAdmin",children:"servidor web WebAdmin"}),". No disponible con ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-auto-start"})}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsxs)(n.td,{children:["Estado del lanzamiento autom\xe1tico del ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Admin/webAdmin",children:"servidor web WebAdmin"}),". No disponible con ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-store-settings"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Almacena la llave de acceso y los par\xe1metros de inicio autom\xe1tico en el archivo de par\xe1metros actualmente utilizado (es decir, el archivo ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Admin/webAdmin#webadmin-settings",children:(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})})," por defecto o un archivo personalizado designado con el par\xe1metro ",(0,i.jsx)(n.code,{children:"--webadmin-settings-path"}),"). Utilice el argumento ",(0,i.jsx)(n.code,{children:"--webadmin-store-settings"})," para guardar esta configuraci\xf3n si es necesario. No disponible con ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--utility"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"S\xf3lo disponible con 4D Server. S\xf3lo disponible con 4D Server."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--skip-onstartup"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:['Lanza el proyecto sin ejecutar ning\xfan m\xe9todo "autom\xe1tico", incluyendo los m\xe9todos base ',(0,i.jsx)(n.code,{children:"On Startup"})," y ",(0,i.jsx)(n.code,{children:"On Exit"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--startup-method"})}),(0,i.jsx)(n.td,{children:"Nombre del m\xe9todo proyecto (cadena)"}),(0,i.jsxs)(n.td,{children:["M\xe9todo de proyecto a ejecutar inmediatamente despu\xe9s del m\xe9todo base ",(0,i.jsx)(n.code,{children:"On Startup"})," (si no se omite con ",(0,i.jsx)(n.code,{children:"--skip-onstartup"}),")."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) Algunos di\xe1logos se muestran antes de abrir la base de datos, por lo que es imposible escribir en el ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"archivo de registro de diagn\xf3stico"})," (alerta de licencia, di\xe1logo de conversi\xf3n, selecci\xf3n de bases de datos, selecci\xf3n de archivos de datos). En este caso, se\nlanza un mensaje de error tanto en el flujo stderr como en el registro de eventos sistema,\ny luego la aplicaci\xf3n se cierra."]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'La carpeta actual\ndel usuario se alcanza utilizando el comando "~ " en macOS y el comando\n"%HOMEPATH%" en Windows.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lance una aplicaci\xf3n 4D almacenada en el escritorio:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'open ~/Desktop/4D.app\n          open "~/Desktop/4D Server.app"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n          %HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Abra un paquete en macOS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,i.jsx)(n.p,{children:"Abra un archivo de proyecto:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myProj/Project/myProj.4DProject\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,i.jsx)(n.p,{children:"Abra un archivo de proyecto y un archivo de datos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject\n          --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n          --data %HOMEPATH%\\Documents\\data\\myData.4DD\n          o:\n          /project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data\n          %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,i.jsx)(n.p,{children:"Abra un archivo .4DLink:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,i.jsx)(n.p,{children:"Lance la aplicaci\xf3n en modo compilado y cree un archivo de datos\nsi no est\xe1 disponible:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled\n          --create-data true\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode\n          compiled --create-data true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Lance la aplicaci\xf3n con un archivo proyecto y un archivo de datos\ny pase una cadena como par\xe1metro de usuario:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject\n          --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n          --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Apertura sin interfaz (modo headless):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n          --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tool4d",children:"tool4d"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"tool4d"})," es una aplicaci\xf3n gratuita, ligera y aut\xf3noma que le permite abrir un proyecto 4D en modo sin interfaz y ejecutar c\xf3digo 4D utilizando la l\xecnea de comando (CLI)."]}),"\n",(0,i.jsx)(n.p,{children:"tool4d est\xe1 disponible en Windows y macOS y siempre est\xe1 asociado\na una versi\xf3n 4D (misma versi\xf3n y n\xfamero de compilaci\xf3n). S\xf3lo est\xe1 disponible en ingl\xe9s."}),"\n",(0,i.jsx)(n.p,{children:"tool4d es una herramienta perfecta si desea:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"implementar una cadena CI/CD para su aplicaci\xf3n 4D,"}),"\n",(0,i.jsx)(n.li,{children:"utilizar un ejecutable 4D ligero para ejecutar scripts 4D, por\nejemplo para ejecutar pruebas unitarias autom\xe1ticas."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"uso-de-tool4d",children:"Uso de tool4d"}),"\n",(0,i.jsxs)(n.p,{children:["Puedes obtener tool4d de la ",(0,i.jsx)(n.a,{href:"https://product-download.4d.com/",children:"P\xe1gina de descarga de productos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Se utiliza tool4d ejecutando una ",(0,i.jsx)(n.a,{href:"#launch-a-4d-application",children:"l\xednea de comandos"})," con un proyecto 4D est\xe1ndar. Puede utilizar todos los argumentos descritos en la tabla anterior, excepto --",(0,i.jsx)(n.code,{children:"webadmin"})," ya que este componente est\xe1 ",(0,i.jsx)(n.a,{href:"#disabled-4d-features",children:"desactivado en tool4d"}),". Con tool4d, se lanza la siguiente secuencia espec\xedfica:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["La herramienta 4D ejecuta el m\xe9todo base ",(0,i.jsx)(n.code,{children:"On Startup"}),' (y todos los m\xe9todos "autom\xe1ticos" como el ',(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Users/editing#propiedades-del-usuario",children:"m\xe9todo usuario"}),"), excepto si se pasa el argumento ",(0,i.jsx)(n.code,{children:"--skip-onstartup"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["tool4d ejecuta el m\xe9todo designado por el argumento ",(0,i.jsx)(n.code,{children:"--startup-method"}),", si existe."]}),"\n",(0,i.jsxs)(n.li,{children:["tool4d ejecuta el m\xe9todo base ",(0,i.jsx)(n.code,{children:"On Exit"}),", excepto si se pasa el argumento ",(0,i.jsx)(n.code,{children:"--skip-onstartup"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"tool4d cierra."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["En Windows, tool4d es una aplicaci\xf3n de consola, de modo que el stream ",(0,i.jsx)(n.code,{children:"stdout"})," se muestra en el terminal (cmd, powershell...)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notas",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["tool4d siempre se ejecuta sin interfaz (la opci\xf3n de l\xednea de comandos ",(0,i.jsx)(n.code,{children:"headless"})," es in\xfatil)."]}),"\n",(0,i.jsxs)(n.li,{children:["El comando ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page494.html",children:(0,i.jsx)(n.code,{children:"Application type"})}),' devuelve el valor 6 ("tool4d") cuando se llama desde la aplicaci\xf3n tool4d.']}),"\n",(0,i.jsxs)(n.li,{children:["el ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"archivo de registro de diagn\xf3stico"}),' tiene el prefijo "4DDiagnosticLogTool".']}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"funcionalidades-4d-desactivadas",children:"Funcionalidades 4D desactivadas"}),"\n",(0,i.jsxs)(n.p,{children:["Tenga en cuenta que tool4d se ejecuta autom\xe1ticamente en ",(0,i.jsx)(n.strong,{children:"modo sin interfaz"})," (ver ",(0,i.jsx)(n.code,{children:"--headless"})," en ",(0,i.jsx)(n.a,{href:"#launch-a-4d-application",children:"esta tabla"}),"), y no da acceso al IDE 4D ni a ninguno de sus servidores. En concreto, se desactivan las siguientes funcionalidades:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"servidor de aplicaciones, servidor web, servidor SQL,"}),"\n",(0,i.jsx)(n.li,{children:"programador de copias de seguridad,"}),"\n",(0,i.jsx)(n.li,{children:"ODBC y SQL pass-through,"}),"\n",(0,i.jsx)(n.li,{children:"todos los componentes como 4D View Pro, 4D SVG, 4D NetKit...,"}),"\n",(0,i.jsx)(n.li,{children:"corrector ortogr\xe1fico hunspell,"}),"\n",(0,i.jsxs)(n.li,{children:["corrector ortogr\xe1fico japon\xe9s (librer\xeda ",(0,i.jsx)(n.em,{children:"mecab"}),"),"]}),"\n",(0,i.jsx)(n.li,{children:"WebAdmin"}),"\n",(0,i.jsx)(n.li,{children:"CEF,"}),"\n",(0,i.jsx)(n.li,{children:"PHP,"}),"\n",(0,i.jsxs)(n.li,{children:["depurador remoto (depurador local, el comando ",(0,i.jsx)(n.code,{children:"TRACE"})," y los puntos de interrupci\xf3n se ignoran en las aplicaciones sin interfaz)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-server-en-modo-utilitario",children:"4D Server en modo utilitario"}),"\n",(0,i.jsxs)(n.p,{children:["Puede lanzar una instancia 4D Server en modo utilitario (sin interfaz) utilizando la opci\xf3n CLI ",(0,i.jsx)(n.code,{children:"--utility"}),". En este caso, se activa el siguiente flujo de trabajo:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["4D Server ejecuta el m\xe9todo base ",(0,i.jsx)(n.code,{children:"On Startup"}),' (y todos los m\xe9todos "autom\xe1ticos" como el ',(0,i.jsx)(n.a,{href:"/docs/es/20-R6/Users/editing#user-properties",children:"m\xe9todo usuario"}),"), excepto si se pasa el par\xe1metro ",(0,i.jsx)(n.code,{children:"--skip-onstartup"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Server ejecuta el m\xe9todo designado por el ",(0,i.jsx)(n.code,{children:"--startup-method"}),", si existe."]}),"\n",(0,i.jsxs)(n.li,{children:["El servidor 4D ejecuta el m\xe9todo base ",(0,i.jsx)(n.code,{children:"On Exit"}),", excepto si se pasa el par\xe1metro ",(0,i.jsx)(n.code,{children:"--skip-onstartup"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"4D Server se cierra."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"A diferencia de tool4d, 4D Server en modo utilitario tiene todas\nsus funcionalidades activadas. Sin embargo, el servidor de aplicaciones y el resto de servidores\nno se inician."})}),"\n",(0,i.jsx)(n.admonition,{title:"Ver tambi\xe9n",type:"tip",children:(0,i.jsxs)(n.p,{children:["Ver ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/",children:"esta publicaci\xf3n de blog"})," para ejemplos de c\xf3mo utilizar tool4d y 4D Server en modo utilitario."]})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return o}});var s=a(667294);let i={},d=s.createContext(i);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);