"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12969],{421580:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(474848),n=i(28453);const r={id:"settings",title:"Par\xe1metros de la copia de seguridad"},d=void 0,o={id:"Backup/settings",title:"Par\xe1metros de la copia de seguridad",description:"Los par\xe1metros de copia de seguridad se definen a trav\xe9s de tres p\xe1ginas en el cuadro de di\xe1logo de los par\xe1metros. Puede definir:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Backup/settings.md",sourceDirName:"Backup",slug:"/Backup/settings",permalink:"/docs/es/20/Backup/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fsettings.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"settings",title:"Par\xe1metros de la copia de seguridad"},sidebar:"docs",previous:{title:"Copia de seguridad",permalink:"/docs/es/20/Backup/backup"},next:{title:"Archivo de historial (.journal)",permalink:"/docs/es/20/Backup/log"}},c={},l=[{value:"Backups peri\xf3dicos",id:"backups-peri\xf3dicos",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Contenido",id:"contenido",level:3},{value:"Carpeta de destino del archivo de copia de seguridad",id:"carpeta-de-destino-del-archivo-de-copia-de-seguridad",level:3},{value:"Gesti\xf3n del archivo de historial",id:"gesti\xf3n-del-archivo-de-historial",level:3},{value:"Copia de seguridad y restituci\xf3n",id:"copia-de-seguridad-y-restituci\xf3n",level:2},{value:"Par\xe1metros generales",id:"par\xe1metros-generales",level:3},{value:"Archivo",id:"archivo",level:3},{value:"Restauraci\xf3n autom\xe1tica e integraci\xf3n de registros",id:"restauraci\xf3n-autom\xe1tica-e-integraci\xf3n-de-registros",level:3},{value:"Restaurar la \xfaltima copia de seguridad si la base de datos est\xe1 da\xf1ada",id:"restaurar-la-\xfaltima-copia-de-seguridad-si-la-base-de-datos-est\xe1-da\xf1ada",level:4},{value:"Integrar los \xfaltimos registros si la base de datos est\xe1 incompleta",id:"integrar-los-\xfaltimos-registros-si-la-base-de-datos-est\xe1-incompleta",level:4}];function t(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Los par\xe1metros de copia de seguridad se definen a trav\xe9s de tres p\xe1ginas en el ",(0,s.jsx)(a.a,{href:"/docs/es/20/settings/overview",children:"cuadro de di\xe1logo de los par\xe1metros"}),". Puede definir:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"la periodicidad de las copias de seguridad autom\xe1ticas"}),"\n",(0,s.jsx)(a.li,{children:"los archivos a incluir en cada copia de seguridad"}),"\n",(0,s.jsx)(a.li,{children:"las funcionalidades avanzadas permiten ejecutar tareas autom\xe1ticas"}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Las propiedades definidas en esta caja de di\xe1logo se escriben en el archivo ",(0,s.jsx)(a.em,{children:"Backup.4DSettings"}),", guardado en la carpeta ",(0,s.jsx)(a.a,{href:"/docs/es/20/Project/architecture#settings-folder",children:"Settings"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"backups-peri\xf3dicos",children:"Backups peri\xf3dicos"}),"\n",(0,s.jsx)(a.p,{children:"Puede automatizar la copia de seguridad de las aplicaciones abiertas con 4D o 4D Server (incluso cuando no hay m\xe1quinas cliente conectadas). Esto implica definir una frecuencia de copia de seguridad (en horas, d\xedas, semanas o meses); para cada sesi\xf3n, 4D inicia autom\xe1ticamente una copia de seguridad utilizando la configuraci\xf3n de copia de seguridad actual."}),"\n",(0,s.jsxs)(a.p,{children:["Si esta aplicaci\xf3n no se inici\xf3 en el momento te\xf3rico de la copia de seguridad, la pr\xf3xima vez que se inicie 4D, considerar\xe1 que la copia de seguridad ha fallado y proceder\xe1 seg\xfan lo establecido en las Propiedades (consulte ",(0,s.jsx)(a.a,{href:"/docs/es/20/Backup/backup#handling-backup-issues",children:"Manejo de problemas de la copia de seguridad"}),")."]}),"\n",(0,s.jsxs)(a.p,{children:["Los par\xe1metros de copia de seguridad peri\xf3dicos se definen en la p\xe1gina ",(0,s.jsx)(a.strong,{children:"Backup/Periodicidad"})," de las Propiedades:"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(580074).A+"",width:"862",height:"293"})}),"\n",(0,s.jsxs)(a.p,{children:["Las opciones que se encuentran en esta pesta\xf1a le permiten establecer y configurar las copias de seguridad peri\xf3dicas autom\xe1ticas de la aplicaci\xf3n. Puede elegir una configuraci\xf3n r\xe1pida est\xe1ndar o puede personalizarla completamente. Aparecen varias opciones en funci\xf3n de la elecci\xf3n realizada en el men\xfa ",(0,s.jsx)(a.strong,{children:"Copia de seguridad autom\xe1tica"}),":"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Nunca"}),": la funci\xf3n de copia de seguridad programada est\xe1 inactiva."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cada hora"}),": programa una copia de seguridad autom\xe1tica cada hora, a partir de la hora siguiente."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cada d\xeda"}),": programa una copia de seguridad autom\xe1tica cada d\xeda. A continuaci\xf3n, puede introducir la hora a la que debe comenzar la copia de seguridad."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Todas las semanas"}),": programa una copia de seguridad autom\xe1tica cada semana. Dos \xe1reas de entrada adicionales le permiten indicar el d\xeda y la hora en que debe comenzar la copia de seguridad."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Todos los meses"}),": programa una copia de seguridad autom\xe1tica cada mes. Dos \xe1reas de entrada adicionales le permiten indicar el d\xeda del mes y la hora en que debe comenzar la copia de seguridad."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Personalizado"}),': sirve para configurar las copias de seguridad autom\xe1ticas "a medida". Al seleccionar esta opci\xf3n, aparecen varias \xe1reas de entrada adicionales:\n',(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cada X hora(s)"}),": permite programar las copias de seguridad con una base horaria. Puede introducir un valor entre 1 y 24."]}),"\n"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cada X d\xeda(s) a las x"}),": permite programar las copias de seguridad con una base diaria. Por ejemplo, introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opci\xf3n est\xe1 marcada, debe introducir la hora a la que debe comenzar la copia de seguridad."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cada X semana(s) a las x"}),": permite programar las copias de seguridad con una base semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. Cuando esta opci\xf3n est\xe1 marcada, debe introducir el d\xeda(s) de la semana y la hora que debe comenzar la copia de seguridad. Si lo desea, puede seleccionar varios d\xedas de la semana. Por ejemplo, puede utilizar esta opci\xf3n para definir dos copias de seguridad semanales: una el mi\xe9rcoles y otra el viernes."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cada X mes(es), X d\xeda a x"}),": Permite programar copias de seguridad de forma mensual. Introduzca 1 si desea realizar una copia de seguridad mensual. Cuando esta opci\xf3n est\xe1 marcada, debe indicar el d\xeda de cada mes y la hora a la cual debe comenzar la copia de seguridad."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Los cambios de la hora est\xe1ndar a la hora de verano podr\xedan afectar temporalmente al programador autom\xe1tico y activar la siguiente copia de seguridad con un cambio de hora de una hora. Esto ocurre s\xf3lo una vez y las siguientes copias de seguridad se ejecutan a la hora prevista."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"configuraci\xf3n",children:"Configuraci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"La p\xe1gina Copia de seguridad/Configuraci\xf3n de las Propiedades permite designar los archivos de copia de seguridad y su ubicaci\xf3n, as\xed como la del archivo de historial. Estos par\xe1metros son espec\xedficos de cada aplicaci\xf3n abierta por 4D o 4D Server."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(430835).A+"",width:"862",height:"659"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"4D Server:"})," estos par\xe1metros s\xf3lo se pueden configurar desde la m\xe1quina 4D Server."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"contenido",children:"Contenido"}),"\n",(0,s.jsx)(a.p,{children:"Esta \xe1rea le permite determinar qu\xe9 archivos y/o carpetas deben copiarse durante la siguiente copia de seguridad."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Datos"}),": archivo de datos de la aplicaci\xf3n. Cuando esta opci\xf3n est\xe1 marcada, los siguientes elementos se copian autom\xe1ticamente al mismo tiempo que los datos:\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"el archivo de historial actual de la aplicaci\xf3n (si existe),"}),"\n",(0,s.jsxs)(a.li,{children:["la carpeta ",(0,s.jsx)(a.code,{children:"Settings"})," completa situada ",(0,s.jsx)(a.a,{href:"/docs/es/20/Project/architecture#settings-folder",children:"junto al archivo de datos"})," (si existe), es decir, ",(0,s.jsx)(a.em,{children:"los par\xe1metros usuario para los datos"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Estructura"}),": carpetas y archivos proyecto de la aplicaci\xf3n. En el caso de proyectos compilados, esta opci\xf3n permite hacer una copia de seguridad del archivo .4dz. Cuando esta opci\xf3n est\xe1 marcada, se hace una copia de seguridad autom\xe1tica de la carpeta completa ",(0,s.jsx)(a.code,{children:"Settings"})," situada ",(0,s.jsx)(a.a,{href:"/docs/es/20/Project/architecture#settings-folder-1",children:"en el mismo nivel que la carpeta Project "}),", es decir, los ",(0,s.jsx)(a.em,{children:"par\xe1metros usuario"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Archivo de estructura usuario (s\xf3lo para bases binaria)"}),": ",(0,s.jsx)(a.em,{children:"funcionalidad obsoleta"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Adjuntos"}),': esta \xe1rea permite especificar un conjunto de archivos y/o carpetas que se respaldar\xe1n al mismo tiempo que la aplicaci\xf3n. Estos archivos pueden ser de cualquier tipo (documentos o plantillas de plug-ins, etiquetas, informes, im\xe1genes, etc.). Puede definir archivos individuales o carpetas cuyo contenido se respaldar\xe1 completamente. Cada elemento adjunto aparece con su ruta de acceso completa en el \xe1rea "Adjuntos ".\n',(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Eliminar"}),": retira el archivo seleccionado de la lista de archivos adjuntos."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"A\xf1adir carpeta..."}),": muestra una caja de di\xe1logo que permite seleccionar una carpeta para a\xf1adirla a la copia de seguridad. En el caso de una restituci\xf3n, la carpeta se recuperar\xe1 con su estructura interna. Puede seleccionar toda carpeta o volumen conectado a la m\xe1quina, a excepci\xf3n de la carpeta que contiene los archivos de la aplicaci\xf3n."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"A\xf1adir archivo..."}),": muestra una caja de di\xe1logo que permite seleccionar un archivo para a\xf1adirlo a la copia de seguridad."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"carpeta-de-destino-del-archivo-de-copia-de-seguridad",children:"Carpeta de destino del archivo de copia de seguridad"}),"\n",(0,s.jsx)(a.p,{children:"Esta \xe1rea le permite visualizar y cambiar la ubicaci\xf3n en la que se almacenar\xe1n los archivos de copia de seguridad, as\xed como los archivos de copia de seguridad del archivo historial (si procede)."}),"\n",(0,s.jsx)(a.p,{children:"Para ver la ubicaci\xf3n de los archivos, haga clic en el \xe1rea para que aparezca su ruta de acceso en un men\xfa emergente."}),"\n",(0,s.jsxs)(a.p,{children:["Para modificar la ubicaci\xf3n donde se almacenan estos archivos, haga clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"..."}),'. Aparece una caja de di\xe1logo de selecci\xf3n, que permite seleccionar la carpeta o el disco donde se colocar\xe1n las copias de seguridad. Las \xe1reas "Espacio utilizado" y "Espacio libre" se actualizan autom\xe1ticamente e indican el espacio restante en el disco de la carpeta seleccionada.']}),"\n",(0,s.jsx)(a.h3,{id:"gesti\xf3n-del-archivo-de-historial",children:"Gesti\xf3n del archivo de historial"}),"\n",(0,s.jsxs)(a.p,{children:["La opci\xf3n ",(0,s.jsx)(a.strong,{children:"Utilizar el archivo de historial"}),", cuando est\xe1 marcada, indica que la aplicaci\xf3n utiliza un archivo de historial. Su ruta de acceso se especifica debajo de la opci\xf3n. Cuando esta opci\xf3n est\xe1 marcada, no es posible abrir la aplicaci\xf3n sin un archivo de historial."]}),"\n",(0,s.jsxs)(a.p,{children:["Por defecto, todo proyecto creado con 4D utiliza un archivo de historial (opci\xf3n ",(0,s.jsx)(a.strong,{children:"Utilizar archivo de historial"}),"seleccionada en la ",(0,s.jsx)(a.strong,{children:"p\xe1gina General"})," de las ",(0,s.jsx)(a.strong,{children:"Preferencias"}),"). El archivo de historial se llama ",(0,s.jsx)(a.em,{children:"data.journal"})," y se coloca en la carpeta Data."]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"La activaci\xf3n de un nuevo archivo de historial requiere una copia de seguridad previa de los datos de la aplicaci\xf3n. Al marcar esta opci\xf3n, un mensaje de advertencia le informa de que es necesario realizar una copia de seguridad. La creaci\xf3n del archivo de historial se pospone y se crear\xe1 realmente s\xf3lo despu\xe9s de la siguiente copia de seguridad de la aplicaci\xf3n."}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"copia-de-seguridad-y-restituci\xf3n",children:"Copia de seguridad y restituci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"La modificaci\xf3n de las opciones de copia de seguridad y restauraci\xf3n es opcional. Sus valores por defecto corresponden a un uso est\xe1ndar de la funci\xf3n."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:i(247228).A+"",width:"862",height:"644"})}),"\n",(0,s.jsx)(a.h3,{id:"par\xe1metros-generales",children:"Par\xe1metros generales"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Conservar \xfanicamente los \xfaltimos X archivos de copia de seguridad"}),": este par\xe1metro activa y configura el mecanismo utilizado para eliminar los archivos de copia de seguridad m\xe1s antiguos, lo que evita el riesgo de saturar la unidad de disco. Esta funcionalidad opera de la siguiente manera: una vez finalizado el backup actual, 4D elimina el archivo m\xe1s antiguo si se encuentra en la misma ubicaci\xf3n que el archivo del que se est\xe1 haciendo el backup y tiene el mismo nombre (puede solicitar que el archivo m\xe1s antiguo se elimine antes del backup para ahorrar espacio). Si, por ejemplo, el n\xfamero de conjuntos se define en 3, las tres primeras copias de seguridad crean los archivos MyBase-0001, MyBase-0002 y MyBase-0003 respectivamente. Durante la cuarta copia de seguridad, se crea el archivo MyBase-0004 y se elimina MyBase-0001. Por defecto, el mecanismo de eliminaci\xf3n de conjuntos est\xe1 activado y 4D guarda 3 conjuntos de copia de seguridad. Para desactivar el mecanismo, basta con deseleccionar la opci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Este par\xe1metro se refiere tanto a las copias de seguridad de la aplicaci\xf3n como de los archivos del historial."}),"\n"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Copia de seguridad s\xf3lo si el archivo de datos ha sido modificado"}),": cuando se marca esta opci\xf3n, 4D inicia las copias de seguridad programadas s\xf3lo si se han a\xf1adido, modificado o eliminado datos desde la \xfaltima copia de seguridad. De lo contrario, la copia de seguridad programada se cancela y se pospone hasta la siguiente copia de seguridad programada. No se genera ning\xfan error; sin embargo, el diario de copias de seguridad se\xf1ala que la copia de seguridad se ha pospuesto. Esta opci\xf3n tambi\xe9n permite ahorrar tiempo de m\xe1quina para la copia de seguridad de las aplicaciones utilizadas principalmente para su visualizaci\xf3n. Tenga en cuenta que al activar esta opci\xf3n no se tienen en cuenta las modificaciones realizadas en los archivos de estructura o en los archivos adjuntos."]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Este par\xe1metro se refiere tanto a las copias de seguridad de la aplicaci\xf3n como de los archivos del historial."}),"\n"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Eliminar el archivo de copia de seguridad m\xe1s antiguo antes/despu\xe9s de la copia de seguridad"}),': esta opci\xf3n s\xf3lo se utiliza si la opci\xf3n "Conservar s\xf3lo los \xfaltimos X archivos de copia de seguridad" est\xe1 marcada. Especifica si 4D debe comenzar borrando el archivo m\xe1s antiguo antes de iniciar la copia de seguridad (',(0,s.jsx)(a.strong,{children:"antes"})," opci\xf3n) o si el borrado debe tener lugar una vez finalizada la copia de seguridad (opci\xf3n ",(0,s.jsx)(a.strong,{children:"despu\xe9s"}),"). Para que este mecanismo funcione, el archivo m\xe1s antiguo no debe haber sido renombrado o movido."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Si falla la copia de seguridad"}),": esta opci\xf3n permite configurar el mecanismo utilizado para gestionar las copias de seguridad fallidas (copia de seguridad imposible). Cuando no se puede realizar una copia de seguridad, 4D le permite realizar un nuevo intento."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Reintentar en la siguiente fecha y hora programada"}),": esta opci\xf3n s\xf3lo tiene sentido cuando se trabaja con copias de seguridad autom\xe1ticas programadas. Equivale a anular la copia de seguridad fallida. Se genera un error."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Reintentar despu\xe9s de X segundo(s), minuto(s) u hora(s)"}),": cuando se marca esta opci\xf3n, se ejecuta un nuevo intento de copia de seguridad despu\xe9s del periodo de espera. Este mecanismo permite anticipar ciertas circunstancias que pueden bloquear la copia de seguridad. Puede establecer un periodo de espera en segundos, minutos u horas utilizando el men\xfa correspondiente. Si el nuevo intento tambi\xe9n falla, se genera un error y se anota el fallo en el \xe1rea de estado de la \xfaltima copia de seguridad y en el archivo del diario de copias de seguridad."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Cancelar la operaci\xf3n despu\xe9s de X intentos"}),': este par\xe1metro se utiliza para definir el n\xfamero m\xe1ximo de intentos de copia de seguridad fallidos. Si la copia de seguridad no se ha realizado con \xe9xito una vez alcanzado el n\xfamero m\xe1ximo de intentos establecido, se cancela y se genera el error 1401 ("Se ha alcanzado el n\xfamero m\xe1ximo de intentos de copia de seguridad; la copia de seguridad autom\xe1tica est\xe1 temporalmente desactivada"). En este caso, no se intentar\xe1 realizar una nueva copia de seguridad autom\xe1tica mientras no se haya reiniciado la aplicaci\xf3n o se haya realizado con \xe9xito una copia de seguridad manual. Este par\xe1metro es \xfatil para evitar un caso en el que un problema prolongado (que requiera la intervenci\xf3n humana) que impidiera la realizaci\xf3n de una copia de seguridad hubiera llevado a la aplicaci\xf3n a intentar repetidamente la copia de seguridad en detrimento de su rendimiento general. Por defecto, este par\xe1metro no est\xe1 seleccionado.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"4D considera que una copia de seguridad ha fallado si la aplicaci\xf3n no se ha iniciado en el momento en que se ha programado la realizaci\xf3n de la copia de seguridad autom\xe1tica."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"archivo",children:"Archivo"}),"\n",(0,s.jsx)(a.p,{children:"Estas opciones se aplican a los archivos de copia de seguridad principales y a los archivos de copia de seguridad del historial."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Segment Size (Mb)"})," 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Este funcionamiento permite, por ejemplo, almacenar una copia de seguridad en varios discos diferentes (DVD, dispositivos usb, etc.). Durante la restauraci\xf3n, 4D fusionar\xe1 autom\xe1ticamente los segmentos. Cada segmento se llama MyApplication[xxxx-yyyy].4BK, donde xxxx es el n\xfamero de copia de seguridad e yyyy es el n\xfamero de segmento. Por ejemplo, los tres segmentos de la copia de seguridad de la base MyApplication se llaman MyApplication[0006-0001].4BK, MyApplication[0006-0002].4BK y MyApplication[0006-0003].4BK. El men\xfa ",(0,s.jsx)(a.strong,{children:"Tama\xf1o del segmento"})," es un combo box que permite establecer el tama\xf1o en MB de cada segmento de la copia de seguridad. Puede elegir uno de los tama\xf1os preestablecidos o introducir un tama\xf1o espec\xedfico entre 0 y 2048. Si se pasa 0, no se produce ninguna segmentaci\xf3n (esto equivale a pasar ",(0,s.jsx)(a.strong,{children:"Ninguna"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Compression Rate"})," By default, 4D compresses backups to help save disk space. Sin embargo, la fase de compresi\xf3n de archivos puede ralentizar notablemente las copias de seguridad cuando se trata de grandes vol\xfamenes de datos. La opci\xf3n ",(0,s.jsx)(a.strong,{children:"Tasa de compresi\xf3n"})," permite ajustar la compresi\xf3n de los archivos:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Ninguna:"})," no se aplica ninguna compresi\xf3n de archivos. La copia de seguridad es m\xe1s r\xe1pida, pero los archivos son considerablemente m\xe1s grandes."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"R\xe1pido"})," (por defecto): esta opci\xf3n es un compromiso entre la velocidad de la copia de seguridad y el tama\xf1o del archivo."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Compactado"}),": la tasa de compresi\xf3n m\xe1xima se aplica a los archivos. Los ficheros de archivos ocupan el menor espacio posible en el disco, pero la copia de seguridad se ralentiza notablemente."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Tasa de entrelazamiento y tasa de redundancia"})," 4D genera archivos utilizando algoritmos espec\xedficos que se basan en mecanismos de optimizaci\xf3n (entrelazamiento) y seguridad (redundancia). Puedes configurar estos mecanismos en funci\xf3n de sus necesidades. Los men\xfas asociados a estas opciones contienen \xedndices de ",(0,s.jsx)(a.strong,{children:"Bajo"}),", ",(0,s.jsx)(a.strong,{children:"Medio"}),", ",(0,s.jsx)(a.strong,{children:"Alto"})," y ",(0,s.jsx)(a.strong,{children:"Ninguno"})," (por defecto)."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Tasa de entrelazamiento"}),": el entrelazamiento consiste en almacenar los datos en sectores no adyacentes para limitar los riesgos en caso de da\xf1o de los sectores. Cuanto mayor sea la tasa, mayor ser\xe1 la seguridad; sin embargo, el procesamiento de datos utilizar\xe1 m\xe1s memoria."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Tasa de redundancia"}),": la redundancia permite asegurar los datos presentes en un fichero repitiendo varias veces la misma informaci\xf3n. Cuanto mayor sea la tasa de redundancia, mayor ser\xe1 la seguridad de los archivos; sin embargo, el almacenamiento ser\xe1 m\xe1s lento y el tama\xf1o de los archivos aumentar\xe1 en consecuencia."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"restauraci\xf3n-autom\xe1tica-e-integraci\xf3n-de-registros",children:"Restauraci\xf3n autom\xe1tica e integraci\xf3n de registros"}),"\n",(0,s.jsx)(a.h4,{id:"restaurar-la-\xfaltima-copia-de-seguridad-si-la-base-de-datos-est\xe1-da\xf1ada",children:"Restaurar la \xfaltima copia de seguridad si la base de datos est\xe1 da\xf1ada"}),"\n",(0,s.jsx)(a.p,{children:"When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. No se requiere ninguna intervenci\xf3n por parte del usuario; sin embargo, la operaci\xf3n se registra en el diario de copias de seguridad."}),"\n",(0,s.jsx)(a.h4,{id:"integrar-los-\xfaltimos-registros-si-la-base-de-datos-est\xe1-incompleta",children:"Integrar los \xfaltimos registros si la base de datos est\xe1 incompleta"}),"\n",(0,s.jsx)(a.p,{children:"Cuando se marca esta opci\xf3n, el programa integra autom\xe1ticamente el archivo de registro actual si contiene operaciones que no est\xe1n presentes en el archivo de datos. Si existe una secuencia v\xe1lida de archivos .journal en el mismo repositorio, el programa integra de antemano todos los archivos .journal necesarios desde el m\xe1s antiguo hasta el m\xe1s actual. Esta situaci\xf3n se produce, por ejemplo, si se produce un corte de corriente cuando hay operaciones en la cach\xe9 de datos que a\xfan no se han escrito en el disco, o despu\xe9s de que se haya detectado una anomal\xeda al abrir el archivo de datos y se haya producido una restauraci\xf3n."}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Esta funcionalidad implica que el programa analiza todos los archivos de registro de la carpeta de archivos de registro actual al iniciarse. Por lo tanto, por razones de rendimiento, aseg\xfarese de que no hay archivos de registro in\xfatiles almacenados en la carpeta."})}),"\n",(0,s.jsx)(a.p,{children:"El usuario no ve ninguna caja de di\xe1logo; la operaci\xf3n es completamente autom\xe1tica. El objetivo es facilitar al m\xe1ximo su uso. La operaci\xf3n se registra en el diario de copias de seguridad."}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"En el caso de una restauraci\xf3n autom\xe1tica, s\xf3lo se restauran los siguientes elementos: - archivo .4DD - archivo .4DIndx - archivo .4DSyncData - archivo .4DSyncHeader - Carpeta de datos externa"}),"\n",(0,s.jsxs)(a.p,{children:["Si desea obtener los archivos adjuntos o los archivos del proyecto, debe realizar una ",(0,s.jsx)(a.a,{href:"/docs/es/20/Backup/restore#manually-restoring-a-backup-standard-dialog",children:"restauraci\xf3n manual"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:["Si el ",(0,s.jsx)(a.a,{href:"/docs/es/20/MSC/encrypt",children:"archivo de datos est\xe1 encriptado"}),", aseg\xfarese de que ",(0,s.jsx)(a.a,{href:"../MSC/encrypt#saving-the-encryption-key",children:"ha guardado la llave de encriptaci\xf3n de datos"})," en un archivo ",(0,s.jsx)(a.code,{children:".4DKeyChain"})," almacenado en el primer nivel de la unidad, para que 4D pueda acceder a \xe9l si se activa la funci\xf3n de restauraci\xf3n autom\xe1tica. De lo contrario, se devolver\xe1 un error durante la secuencia de restauraci\xf3n."]})})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},580074:(e,a,i)=>{i.d(a,{A:()=>s});const s=i.p+"assets/images/backup02-e31f4a2c8017e49094f31304dbdec2a9.png"},430835:(e,a,i)=>{i.d(a,{A:()=>s});const s=i.p+"assets/images/backup03-49b5b70c7c84c962daad433a29bbc583.png"},247228:(e,a,i)=>{i.d(a,{A:()=>s});const s=i.p+"assets/images/backup04-5934a7d8b0c0514cdd2804ba485708a2.png"},28453:(e,a,i)=>{i.d(a,{R:()=>d,x:()=>o});var s=i(296540);const n={},r=s.createContext(n);function d(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);