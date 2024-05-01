"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99980],{603905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(667294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(h,o(o({ref:a},d),{},{components:t})):n.createElement(h,o({ref:a},d))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},280383:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});t(667294);var n=t(603905);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={id:"backup",slug:"backup",title:"Copia de seguridad"},s=void 0,c={unversionedId:"Backup/backup",id:"version-20-R5/Backup/backup",title:"Copia de seguridad",description:"Una copia de seguridad puede iniciarse de tres maneras:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Backup/backup.md",sourceDirName:"Backup",slug:"/Backup/backup",permalink:"/docs/es/Backup/backup",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"backup",slug:"backup",title:"Copia de seguridad"},sidebar:"docs",previous:{title:"Copia de seguridad y restauraci\xf3n",permalink:"/docs/es/Backup/overview"},next:{title:"Par\xe1metros de la copia de seguridad",permalink:"/docs/es/Backup/settings"}},l={},d=[{value:"Copia de seguridad manual",id:"copia-de-seguridad-manual",level:2},{value:"Backup autom\xe1tico peri\xf3dico",id:"backup-autom\xe1tico-peri\xf3dico",level:2},{value:"Comando BACKUP",id:"comando-backup",level:2},{value:"C\xf3mo funciona la copia de seguridad",id:"c\xf3mo-funciona-la-copia-de-seguridad",level:2},{value:"Acceso a la aplicaci\xf3n durante la copia de seguridad",id:"acceso-a-la-aplicaci\xf3n-durante-la-copia-de-seguridad",level:3},{value:"Gesti\xf3n de los problemas de las copias de seguridad",id:"gesti\xf3n-de-los-problemas-de-las-copias-de-seguridad",level:3},{value:"Historial de copias de seguridad (Backup Journal)",id:"historial-de-copias-de-seguridad-backup-journal",level:2},{value:"Gesti\xf3n del tama\xf1o del historial de copias de seguridad",id:"gesti\xf3n-del-tama\xf1o-del-historial-de-copias-de-seguridad",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}],u={toc:d};function p(e){var{components:a}=e,o=r(e,["components"]);return(0,n.kt)("wrapper",i({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Una copia de seguridad puede iniciarse de tres maneras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Manually, using the ",(0,n.kt)("strong",{parentName:"li"},"Backup...")," item of the 4D ",(0,n.kt)("strong",{parentName:"li"},"File")," menu or the ",(0,n.kt)("strong",{parentName:"li"},"Backup")," button of the ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/MSC/backup"}),"Maintenance and Security Center"),"."),(0,n.kt)("li",{parentName:"ul"},"Autom\xe1ticamente, utilizando el programador que se puede definir en las Propiedades,"),(0,n.kt)("li",{parentName:"ul"},"Programmatically, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"BACKUP")," command.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"4D Server: A backup can be started manually from a remote machine using a method that calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"BACKUP")," command. El comando se ejecutar\xe1, en todos los casos, en el servidor.")),(0,n.kt)("h2",i({},{id:"copia-de-seguridad-manual"}),"Copia de seguridad manual"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Backup...")," command in the 4D ",(0,n.kt)("strong",{parentName:"li"},"File")," menu.\nThe backup window appears:\n",(0,n.kt)("img",{src:t(564265).Z,width:"564",height:"192"}),'\nYou can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. This location is set on the ',(0,n.kt)("strong",{parentName:"li"},"Backup/Configuration")," page of the Database Settings.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can also open the ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/MSC/overview"}),"Maintenance and Security Center")," of 4D and display the ",(0,n.kt)("a",i({parentName:"li"},{href:"/docs/es/MSC/backup"}),"Backup page"),".")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Database properties...")," button causes the Backup/Configuration page of the Structure Settings to be displayed."),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Backup")," to start the backup using current parameters.")),(0,n.kt)("h2",i({},{id:"backup-autom\xe1tico-peri\xf3dico"}),"Backup autom\xe1tico peri\xf3dico"),(0,n.kt)("p",null,"Las copias de seguridad programadas se inician autom\xe1ticamente. They are configured in the ",(0,n.kt)("strong",{parentName:"p"},"Backup/Scheduler")," page of the ",(0,n.kt)("strong",{parentName:"p"},"Settings"),"."),(0,n.kt)("p",null,"Las copias de seguridad se realizan autom\xe1ticamente a las horas definidas en esta p\xe1gina sin ning\xfan tipo de intervenci\xf3n del usuario. For more information on using this dialog box, refer to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/Backup/settings#scheduler"}),"Scheduler in backup settings"),"."),(0,n.kt)("h2",i({},{id:"comando-backup"}),"Comando BACKUP"),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"BACKUP")," 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"On Backup Startup")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"On Backup Shutdown")," database methods for handling the backup process (see the ",(0,n.kt)("em",{parentName:"p"},"4D Language Reference")," manual)."),(0,n.kt)("h2",i({},{id:"c\xf3mo-funciona-la-copia-de-seguridad"}),"C\xf3mo funciona la copia de seguridad"),(0,n.kt)("p",null,"Una vez iniciada la copia de seguridad, 4D muestra una caja de di\xe1logo con un term\xf3metro que indica el progreso de la copia de seguridad:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(140802).Z,width:"408",height:"168"})),(0,n.kt)("p",null,"This thermometer is also displayed on the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/MSC/backup"}),"Backup page of the MSC")," if you have used this dialog box."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Stop")," button lets the user interrupt the backup at any time (refer to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/Backup/backup#handling-backup-issues"}),"Handling backup issues")," below)."),(0,n.kt)("p",null,"The status of the last backup (successful or failed) is stored in the Last Backup Information area of the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/MSC/backup"}),"Backup page in the MSC")," or in the ",(0,n.kt)("strong",{parentName:"p"},"Maintenance page")," of 4D Server. It is also recorded in the database ",(0,n.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,n.kt)("h3",i({},{id:"acceso-a-la-aplicaci\xf3n-durante-la-copia-de-seguridad"}),"Acceso a la aplicaci\xf3n durante la copia de seguridad"),(0,n.kt)("p",null,"4D bloquea los procesos relacionados con los tipos de archivos incluidos en la copia de seguridad: si s\xf3lo se hace una copia de seguridad de los archivos del proyecto, no se podr\xe1 acceder a la estructura pero s\xed a los datos. Durante una copia de seguridad, el acceso a la aplicaci\xf3n est\xe1 restringido por 4D en funci\xf3n del contexto."),(0,n.kt)("p",null,"Por el contrario, si s\xf3lo se hace una copia de seguridad del archivo de datos, se sigue permitiendo el acceso a la estructura. En este caso, las posibilidades de acceso a la aplicaci\xf3n son las siguientes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Con 4D versi\xf3n monopuesto, la aplicaci\xf3n est\xe1 bloqueada tanto para lectura como para escritura; todos los procesos est\xe1n congelados. No se puede realizar ninguna acci\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Con 4D Server, la aplicaci\xb4n s\xf3lo est\xe1 bloqueada en escritura; las m\xe1quinas cliente pueden ver los datos. Si una m\xe1quina cliente env\xeda una petici\xf3n de adici\xf3n, eliminaci\xf3n o cambio al servidor, aparece una ventana que pide al usuario que espere hasta el final de la copia de seguridad. Una vez guardada la aplicaci\xf3n, la ventana desaparece y se realiza la acci\xf3n. To cancel the request in process and not wait for the end of the backup, simply click the ",(0,n.kt)("strong",{parentName:"li"},"Cancel operation")," button. Sin embargo, si la acci\xf3n que espera ser ejecutada proviene de un m\xe9todo lanzado antes de la copia de seguridad, no debe cancelarla porque s\xf3lo se cancelan las operaciones que quedan por realizar. Adem\xe1s, un m\xe9todo parcialmente ejecutado puede causar inconsistencias l\xf3gicas en los datos.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the action waiting to be executed comes from a method and the user clicks the ",(0,n.kt)("strong",{parentName:"p"},"Cancel operation")," button, 4D Server returns error -9976 (This command cannot be executed because the database backup is in progress).")),(0,n.kt)("h3",i({},{id:"gesti\xf3n-de-los-problemas-de-las-copias-de-seguridad"}),"Gesti\xf3n de los problemas de las copias de seguridad"),(0,n.kt)("p",null,"Puede ocurrir que una copia de seguridad no se ejecute correctamente. Puede haber varias causas de fallo en la copia de seguridad: interrupci\xf3n del usuario, archivo adjunto no encontrado, problemas en el disco de destino, transacci\xf3n incompleta, etc. 4D procesa la incidencia seg\xfan la causa."),(0,n.kt)("p",null,"In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/es/MSC/backup"}),"Backup page in the MSC")," or in the ",(0,n.kt)("strong",{parentName:"p"},"Maintenance page")," of 4D Server, as well as in the ",(0,n.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User interruption"),": The ",(0,n.kt)("strong",{parentName:"li"},"Stop")," button in the progress dialog box allows users to interrupt the backup at any time. En este caso, la copia de elementos se detiene y se genera el error 1406. You can intercept this error in the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown")," database method."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attached file not found"),": When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Backup impossible")," (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.):\nIf this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the ",(0,n.kt)("strong",{parentName:"li"},"Backup/Backup & Restore")," page of the Settings.\nSi el segundo intento falla, se muestra una caja de di\xe1logo de alerta del sistema y se genera un error. You can intercept this error in the ",(0,n.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown")," database method.")),(0,n.kt)("h2",i({},{id:"historial-de-copias-de-seguridad-backup-journal"}),"Historial de copias de seguridad (Backup Journal)"),(0,n.kt)("p",null,"Para facilitar el seguimiento y la verificaci\xf3n de las copias de seguridad, el m\xf3dulo de copia de seguridad escribe un resumen de cada operaci\xf3n realizada en un archivo especial, que es similar a un diario de actividades. Al igual que un manual de a bordo, todas las operaciones de la base de datos (copias de seguridad, restauraciones, integraciones de archivos de registro) se registran en este archivo, tanto si se han programado como si se han realizado manualmente. La fecha y la hora en que se produjeron estas operaciones tambi\xe9n se anotan en el diario."),(0,n.kt)("p",null,'El historial de copia de seguridad se llama "Backup Journal',"[001]",'.txt" y se coloca en la carpeta "Logs" del proyecto. El historial de copias de seguridad puede abrirse con cualquier editor de texto.'),(0,n.kt)("h4",i({},{id:"gesti\xf3n-del-tama\xf1o-del-historial-de-copias-de-seguridad"}),"Gesti\xf3n del tama\xf1o del historial de copias de seguridad"),(0,n.kt)("p",null,"En determinadas estrategias de copia de seguridad (por ejemplo, en el caso de que se realicen copias de seguridad de numerosos archivos adjuntos), el historial de copias de seguridad puede alcanzar r\xe1pidamente un gran tama\xf1o. Se pueden utilizar dos mecanismos para controlar este tama\xf1o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automatic backup"),": Before each backup, the application examines the size of the current backup journal file. Si es superior a 10 MB, se archiva el archivo actual y se crea un nuevo archivo con el n\xfamero ","[xxx]",' incrementado, por ejemplo "Backup Journal',"[002]",".txt\u201d. Una vez alcanzado el n\xfamero de archivo 999, la numeraci\xf3n vuelve a empezar por el 1 y los archivos existentes ser\xe1n sustituidos."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Possibility of reducing the amount of information recorded"),": To do this, simply modify the value of the ",(0,n.kt)("inlineCode",{parentName:"li"},"VerboseMode")," key in the ",(0,n.kt)("em",{parentName:"li"},"Backup.4DSettings")," file of the project. Por defecto, esta llave est\xe1 definida como True. Si cambia el valor de esta llave a False, s\xf3lo se almacenar\xe1 en el diario de copias de seguridad la informaci\xf3n principal: fecha y hora de inicio de la operaci\xf3n y los errores encontrados. The XML keys concerning backup configuration are described in the ",(0,n.kt)("em",{parentName:"li"},"4D XML Keys Backup")," manual.")),(0,n.kt)("h2",i({},{id:"backuphistoryjson"}),"backupHistory.json"),(0,n.kt)("p",null,"All information regarding the latest backup and restore operations are stored in the application's ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json"),' file. Registra la ruta de cada archivo guardado (incluidos los adjuntos), as\xed como el n\xfamero, la fecha, la hora, la duraci\xf3n y el estado de cada operaci\xf3n. Para limitar el tama\xf1o del archivo, el n\xfamero de operaciones registradas es el mismo que el n\xfamero de copias de seguridad disponibles ("Conservar s\xf3lo los \xfaltimos X archivos de copia de seguridad") definido en las propiedades de la copia de seguridad.'),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json")," file is created in the current backup destination folder. Puede obtener la ruta real de este archivo utilizando la siguiente declaraci\xf3n:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-4d"}),"$backupHistory:=Get 4D file(Backup history file)\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING"),"\\\nDeleting or moving the ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json")," file will cause the next backup number to be reset.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"backupHistory.json")," file is formatted to be used by the 4D application. Si lo que busca es un informe legible en las operaciones de copia de seguridad, quiz\xe1 le resulte m\xe1s preciso el diario de copias de seguridad.")))}p.isMDXComponent=!0},564265:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"},140802:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);