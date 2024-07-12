/*! For license information please see 03395208.bb79e34b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98713],{305840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>t});var s=i(474848),r=i(28453);const d={id:"debugLogFiles",title:"Descripci\xf3n de los archivos hist\xf3ricos"},l=void 0,o={id:"Admin/debugLogFiles",title:"Descripci\xf3n de los archivos hist\xf3ricos",description:"Las aplicaciones 4D pueden generar varios archivos de historial que son \xfatiles para depurar u optimizar su ejecuci\xf3n. Los historiales suelen iniciarse o detenerse utilizando selectores de los comandos SET DATABASE PARAMETER o WEB SET OPTION y se almacenan en la carpeta Logs folder del proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Admin/debugLogFiles.md",sourceDirName:"Admin",slug:"/Admin/debugLogFiles",permalink:"/docs/es/19/Admin/debugLogFiles",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FdebugLogFiles.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"debugLogFiles",title:"Descripci\xf3n de los archivos hist\xf3ricos"},sidebar:"docs",previous:{title:"Interfaz de l\xednea de\n          comando",permalink:"/docs/es/19/Admin/cli"},next:{title:"Generalidades",permalink:"/docs/es/19/Users/overview"}},c={},t=[{value:"4DRequestsLog.txt",id:"4drequestslogtxt",level:2},{value:"Encabezados",id:"encabezados",level:4},{value:"Contenido",id:"contenido",level:4},{value:"4DRequestsLog_ProcessInfo.txt",id:"4drequestslog_processinfotxt",level:2},{value:"Encabezados",id:"encabezados-1",level:4},{value:"Contenido",id:"contenido-1",level:4},{value:"HTTPDebugLog.txt",id:"httpdebuglogtxt",level:2},{value:"4DDebugLog.txt (est\xe1ndar)",id:"4ddebuglogtxt-est\xe1ndar",level:2},{value:"4DDebugLog.txt (tabular)",id:"4ddebuglogtxt-tabular",level:2},{value:"4DDiagnosticLog.txt",id:"4ddiagnosticlogtxt",level:2},{value:"4DSMTPLog.txt, 4DPOP3Log.txt y 4DIMAPLog.txt",id:"4dsmtplogtxt-4dpop3logtxt-y-4dimaplogtxt",level:2},{value:"Contenido",id:"contenido-2",level:4},{value:"Peticiones cliente ORDA",id:"peticiones-cliente-orda",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Las aplicaciones 4D pueden generar varios archivos de historial que son \xfatiles para depurar u optimizar su ejecuci\xf3n. Los historiales suelen iniciarse o detenerse utilizando selectores de los comandos ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"})," o ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1210.html",children:"WEB SET OPTION"})," y se almacenan en la carpeta ",(0,s.jsx)(n.a,{href:"/docs/es/19/Project/architecture#logs",children:"Logs folder"})," del proyecto."]}),"\n",(0,s.jsx)(n.p,{children:"La informaci\xf3n hist\xf3rica debe ser analizada para detectar y solucionar los problemas. Esta secci\xf3n ofrece una descripci\xf3n completa de los siguientes archivos de registro:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#4drequestslogtxt",children:"4DRequestsLog.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"l#4drequestslog_processinfotxt",children:"4DRequestsLog_ProcessInfo.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#httpdebuglogtxt",children:"HTTPDebugLog.txt"})}),"\n",(0,s.jsxs)(n.li,{children:["4DDebugLog.txt (",(0,s.jsx)(n.a,{href:"#4ddebuglogtxt-standard",children:"standard"})," & ",(0,s.jsx)(n.a,{href:"#4ddebuglogtxt-tabular",children:"tabular"}),")"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#4ddiagnosticlogtxt",children:"4DDiagnosticLog.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#orda-client-requests",children:"Archivo de historial de peticiones ORDA clientes"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Nota: cuando un archivo de historial puede generarse tanto en 4D Server como en el cliente remoto, se a\xf1ade la palabra "Server" al nombre del archivo de historial del lado del servidor, por ejemplo "4DRequestsLogServer.txt"'}),"\n",(0,s.jsx)(n.p,{children:"Los archivos de historial comparten algunos campos para que pueda establecer una cronolog\xeda y hacer conexiones entre las entradas mientras depura:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sequence_number"}),": este n\xfamero es \xfanico en todos los registros de depuraci\xf3n y se incrementa para cada nueva entrada cualquiera que sea el archivo de historial, para que pueda conocer la secuencia exacta de las operaciones."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"connection_uuid"}),": para cada proceso 4D creado en un cliente 4D que se conecte a un servidor, este UUID de conexi\xf3n se registra tanto del lado del servidor como del cliente. Permite identificar f\xe1cilmente el cliente remoto que lanz\xf3 cada proceso."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4drequestslogtxt",children:"4DRequestsLog.txt"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo de historial registra las solicitudes est\xe1ndar llevadas a cabo por la m\xe1quina 4D Server o la m\xe1quina remota 4D que ejecut\xf3 el comando (excluyendo las solicitudes web)."}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"en el servidor:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(4D Server log recording;1)\n//del lado del servidor\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"en un cliente:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Client Log Recording;1)\n//del lado remoto\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Esta instrucci\xf3n tambi\xe9n inicia el archivo de historial ",(0,s.jsx)(n.a,{href:"#4drequestslog_processinfotxt",children:"4DRequestsLog_ProcessInfo.txt"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"encabezados",children:"Encabezados"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo comienza con los siguientes encabezados:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Log Session Identifier (Identificador de sesi\xf3n de historial)"}),"\n",(0,s.jsx)(n.li,{children:"Nombre del servidor que aloja la aplicaci\xf3n"}),"\n",(0,s.jsx)(n.li,{children:"Nombre de usuario: nombre de usuario en el sistema operativo que ejecut\xf3 la aplicaci\xf3n 4D en el servidor."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"contenido",children:"Contenido"}),"\n",(0,s.jsx)(n.p,{children:"Para cada petici\xf3n, se registran los siguientes campos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nombre del campo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sequence_number"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"systemid"}),(0,s.jsx)(n.td,{children:"ID del sistema"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"component"}),(0,s.jsx)(n.td,{children:'Firma del componente (por ejemplo, "4SQLS" o "dbmg")'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process_info_"}),(0,s.jsx)(n.td,{children:'corresponde al campo "index" en el archivo de historial 4DRequestsLog_ProcessInfo.txt, y permite vincular una petici\xf3n a un proceso.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"request"}),(0,s.jsxs)(n.td,{children:["ID de petici\xf3n en modo remoto cadena de mensajes para las peticiones SQL o mensajes ",(0,s.jsx)(n.code,{children:"LOG EVENT"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bytes_in"}),(0,s.jsx)(n.td,{children:"N\xfamero de bytes recibidos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bytes_out"}),(0,s.jsx)(n.td,{children:"N\xfamero de bytes enviados"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"server_duration | exec_duration"}),(0,s.jsxs)(n.td,{children:["Depende de d\xf3nde se genere el registro:",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"server_duration"})," cuando se genera en el cliente --Tiempo que tarda el servidor en procesar la petici\xf3n y devolver una respuesta en microsegundos. B a F en la imagen de abajo, O"]}),(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"exec_duration"})," cuando se genera en el servidor --Tiempo en microsegundos que tarda el servidor en procesar la petici\xf3n. B a E en la imagen de abajo."]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write_duration"}),(0,s.jsxs)(n.td,{children:["Tiempo de env\xedo en microsegundos:",(0,s.jsx)(n.li,{children:"La petici\xf3n (cuando se ejecuta en el cliente). A a B en la imagen de abajo."}),(0,s.jsx)(n.li,{children:"Respuesta (cuando se ejecuta en el servidor). E a F en la imagen de abajo."})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"task_kind"}),(0,s.jsx)(n.td,{children:'Apropiativo o cooperativo (respectivamente "p" o "c")'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rtt"}),(0,s.jsxs)(n.td,{children:["Tiempo estimado en microsegundos para que el cliente env\xede la solicitud y el servidor la acuse de recibo. De la A a la D y de la E a la H en la imagen de abajo.",(0,s.jsx)(n.li,{children:"S\xf3lo se mide cuando se utiliza la capa de red ServerNet, devuelve 0 cuando se utiliza con la capa de red heredada."}),(0,s.jsx)(n.li,{children:"Para las versiones de Windows anteriores a Windows 10 o Windows Server 2016, la llamada devolver\xe1 0."})]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Flujo de solicitudes:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(479182).A+"",width:"535",height:"378"})}),"\n",(0,s.jsx)(n.h2,{id:"4drequestslog_processinfotxt",children:"4DRequestsLog_ProcessInfo.txt"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo de historial registra la informaci\xf3n de cada proceso creado en la m\xe1quina 4D Server o en la m\xe1quina remota 4D que ejecut\xf3 el comando (excluyendo las solicitudes web)."}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"en el servidor:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"en un cliente:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Client Log Recording;1) //del lado remoto\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Esta instrucci\xf3n tambi\xe9n inicia el archivo de historial ",(0,s.jsx)(n.a,{href:"#4drequestslogtxt",children:"4DRequestsLog.txt"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"encabezados-1",children:"Encabezados"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo comienza con los siguientes encabezados:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Log Session Identifier (Identificador de sesi\xf3n de historial)"}),"\n",(0,s.jsx)(n.li,{children:"Nombre del servidor que aloja la aplicaci\xf3n"}),"\n",(0,s.jsx)(n.li,{children:"Nombre de usuario: nombre de usuario en el sistema operativo que ejecut\xf3 la aplicaci\xf3n 4D en el servidor."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"contenido-1",children:"Contenido"}),"\n",(0,s.jsx)(n.p,{children:"Para cada proceso, se registran los siguientes campos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nombre del campo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sequence_number"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Fecha y hora utilizando el formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm\""})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process_info_index"}),(0,s.jsx)(n.td,{children:"N\xfamero de proceso \xfanico y secuencial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CDB4DBaseContext"}),(0,s.jsx)(n.td,{children:"UUID del contexto de base del componente DB4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"systemid"}),(0,s.jsx)(n.td,{children:"ID del sistema"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"server_process_id"}),(0,s.jsx)(n.td,{children:"ID del proceso en el servidor"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"remote_process_id"}),(0,s.jsx)(n.td,{children:"ID del proceso en el cliente"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process_name"}),(0,s.jsx)(n.td,{children:"Nombre del proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cID"}),(0,s.jsx)(n.td,{children:"Identificador de la conexi\xf3n 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uID"}),(0,s.jsx)(n.td,{children:"Identificador del cliente 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IP Client"}),(0,s.jsx)(n.td,{children:"Direcci\xf3n IPv4/IPv6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"host_name"}),(0,s.jsx)(n.td,{children:"Nombre de host del cliente"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"user_name"}),(0,s.jsx)(n.td,{children:"Nombre de conexi\xf3n usuario en el cliente"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"connection_uuid"}),(0,s.jsx)(n.td,{children:"Identificador UUID de proceso de conexi\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"server_process_unique_id"}),(0,s.jsx)(n.td,{children:"ID \xfanico del proceso en el servidor"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"httpdebuglogtxt",children:"HTTPDebugLog.txt"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo de historial registra cada petici\xf3n HTTP y cada respuesta en modo bruto (raw). Se registran las solicitudes completas, incluidos los encabezados; opcionalmente, tambi\xe9n se pueden registrar las partes del cuerpo."}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"WEB SET OPTION(Web debug log;wdl enable without body)  \n//otros valores est\xe1n disponibles\n"})}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes campos se registran tanto para la solicitud como para la respuesta:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nombre del campo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SocketID"}),(0,s.jsx)(n.td,{children:"ID del socket utilizado para la comunicaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PeerIP"}),(0,s.jsx)(n.td,{children:"Direcci\xf3n IPv4 del host (cliente)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PeerPort"}),(0,s.jsx)(n.td,{children:"Puerto utilizado por host (cliente)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TimeStamp"}),(0,s.jsx)(n.td,{children:"Timestamp en milisegundos (desde el inicio del sistema)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ConnectionID"}),(0,s.jsx)(n.td,{children:"Conexi\xf3n UUID (UUID del VTCPSocket utilizado para la comunicaci\xf3n)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SequenceNumber"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"4ddebuglogtxt-est\xe1ndar",children:"4DDebugLog.txt (est\xe1ndar)"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo de historial registra cada evento que se produce a nivel de programaci\xf3n 4D. El modo est\xe1ndar ofrece una visi\xf3n b\xe1sica de los eventos."}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Debug Log Recording;2)  \n//est\xe1ndar, todos los procesos\n\nSET DATABASE PARAMETER(Current process debug log recording;2)  \n//est\xe1ndar, s\xf3lo el proceso actual\n"})}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes campos se registran para cada evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Columna #"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"ID proceso (p=xx) e ID \xfanico proceso (puid=xx)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Nivel de stack"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Puede ser Nombre del comando/Nombre del m\xe9todo/Mensaje/Informaci\xf3n de inicio y parada de la tarea/Nombre, evento o callback plugin / UUID conexi\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"Tiempo de la operaci\xf3n de conexi\xf3n en milisegundos"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"4ddebuglogtxt-tabular",children:"4DDebugLog.txt (tabular)"}),"\n",(0,s.jsx)(n.p,{children:"Este archivo de historial registra cada evento que se produce a nivel de programaci\xf3n 4D en un formato compacto y con tabulaciones que incluye informaci\xf3n adicional (en comparaci\xf3n con el formato est\xe1ndar)."}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Debug Log Recording;2+4)  \n//formato tabular extendido, todos los procesos\n\nSET DATABASE PARAMETER(Current process debug log recording;2+4)  \n//extendido, s\xf3lo el proceso actual\n"})}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes campos se registran para cada evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Columna #"}),(0,s.jsx)(n.th,{children:"Nombre del campo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"sequence_number"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"ProcessID"}),(0,s.jsx)(n.td,{children:"ID del Proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"unique_processID"}),(0,s.jsx)(n.td,{children:"ID \xfanico del proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"stack_level"}),(0,s.jsx)(n.td,{children:"Nivel de stack"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"operation_type"}),(0,s.jsxs)(n.td,{children:["Tipo de operaci\xf3n hist\xf3rico. Este valor puede ser un valor absoluto:",(0,s.jsxs)(n.ol,{children:[(0,s.jsx)(n.li,{children:"Comando"}),(0,s.jsx)(n.li,{children:"M\xe9todo (m\xe9todo de proyecto, m\xe9todo base, etc.)"}),(0,s.jsxs)(n.li,{children:["Mensaje (enviado por el comando ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"})," \xfanicamente)"]}),(0,s.jsx)(n.li,{children:"PluginMessage"}),(0,s.jsx)(n.li,{children:"PluginEvent"}),(0,s.jsx)(n.li,{children:"PluginCommand"}),(0,s.jsx)(n.li,{children:"PluginCallback"}),(0,s.jsx)(n.li,{children:"Tarea"}),(0,s.jsx)(n.li,{children:"M\xe9todo miembro (m\xe9todo adjunto a una colecci\xf3n o a un objeto)"})]}),"Al cerrar un nivel de profundidad, las columnas ",(0,s.jsx)(n.code,{children:"operation_type"}),", ",(0,s.jsx)(n.code,{children:"operation"})," y ",(0,s.jsx)(n.code,{children:"operation_parameters"})," tienen el mismo valor que el nivel de pila de apertura registrado en la columna ",(0,s.jsx)(n.code,{children:"stack_opening_sequence_number"}),". Por ejemplo:",(0,s.jsxs)(n.ol,{children:[(0,s.jsx)(n.li,{children:"121  15:16:50:777  5  8  1  2 CallMethod Parameters 0"}),(0,s.jsx)(n.li,{children:"122  15:16:50:777  5  8  2  1 283  0"}),(0,s.jsx)(n.li,{children:"123  15:16:50:777  5  8  2  1 283  0 122 3"}),(0,s.jsx)(n.li,{children:"124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61"})]}),"La primera y la segunda l\xednea abren el nivel de la pila, la tercera y la cuarta lo cierran. Los valores de las columnas 6, 7 y 8 se repiten en la l\xednea del nivel de pila de cierre. La columna 10 contiene los n\xfameros de secuencia de apertura del nivel de pila, es decir, 122 para la tercera l\xednea y 121 para la cuarta."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"operation"}),(0,s.jsxs)(n.td,{children:["Puede representar (seg\xfan el tipo de operaci\xf3n):",(0,s.jsx)(n.li,{children:"un ID de comando de lenguaje (cuando tipo=1)"}),(0,s.jsx)(n.li,{children:"un nombre de m\xe9todo (cuando tipo=2)"}),(0,s.jsx)(n.li,{children:"una combinaci\xf3n de pluginIndex;pluginCommand (cuando tipo=4, 5, 6 o 7). Puede contener algo como '3;2'"}),(0,s.jsx)(n.li,{children:"una UUID task connection (cuando tipo = 8)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"operation_parameters"}),(0,s.jsx)(n.td,{children:"Par\xe1metros pasados a comandos, m\xe9todos o plugins"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"9"}),(0,s.jsx)(n.td,{children:"form_event"}),(0,s.jsx)(n.td,{children:"Evento formulario si lo hay; vac\xedo en otros casos (supongamos que la columna se utiliza cuando se ejecuta el c\xf3digo en un m\xe9todo formulario o en un m\xe9todo objeto)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"stack_opening_sequence_number"}),(0,s.jsx)(n.td,{children:"S\xf3lo para los niveles de pila de cierre: n\xfamero de secuencia del nivel de pila de apertura correspondiente"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{children:"stack_level_execution_time"}),(0,s.jsx)(n.td,{children:"S\xf3lo cuando se cierra el nivel de la pila: el tiempo transcurrido en microsegundos de la acci\xf3n registrada actualmente (ver la d\xe9cima columna en las l\xedneas 123 y 124 del registro anterior)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"4ddiagnosticlogtxt",children:"4DDiagnosticLog.txt"}),"\n",(0,s.jsxs)(n.p,{children:["Este archivo de historial registra muchos eventos relacionados con el funcionamiento interno de la aplicaci\xf3n y es legible para las personas. Puede incluir informaci\xf3n personalizada en este archivo utilizando el comando ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" SET DATABASE PARAMETER(Diagnostic log recording;1) //iniciar registro\n"})}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes campos se registran para cada evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nombre del campo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sequenceNumber"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timestamp"}),(0,s.jsx)(n.td,{children:"Fecha y hora en el formato ISO 8601: (YYYY-MM-DDThh:mm:ss.mmm)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"loggerID"}),(0,s.jsx)(n.td,{children:"Opcional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"componentSignature"}),(0,s.jsx)(n.td,{children:"Opcional - firma del componente interno"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"messageLevel"}),(0,s.jsx)(n.td,{children:"Informaci\xf3n, avisos, errores"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"message"}),(0,s.jsx)(n.td,{children:"Descripci\xf3n de la entrada del historial"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Dependiendo del evento, se pueden incluir otros campos en el registro, como la tarea, socket, etc."}),"\n",(0,s.jsx)(n.h2,{id:"4dsmtplogtxt-4dpop3logtxt-y-4dimaplogtxt",children:"4DSMTPLog.txt, 4DPOP3Log.txt y 4DIMAPLog.txt"}),"\n",(0,s.jsx)(n.p,{children:"Estos archivos de registro registran cada intercambio entre la aplicaci\xf3n 4D y el servidor de correo (SMTP, POP3, IMAP) que ha sido iniciado por los siguientes comandos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SMTP - ",(0,s.jsx)(n.a,{href:"/docs/es/19/API/SMTPTransporterClass#smtp-new-transporter",children:"SMTP New transporter"})]}),"\n",(0,s.jsxs)(n.li,{children:["POP3 - ",(0,s.jsx)(n.a,{href:"/docs/es/19/API/POP3TransporterClass#pop3-new-transporter",children:"POP3 New transporter"})]}),"\n",(0,s.jsxs)(n.li,{children:["IMAP  - ",(0,s.jsx)(n.a,{href:"/docs/es/19/API/IMAPTransporterClass#imap-new-transporter",children:"IMAP New transporter"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Los archivos de historial pueden producirse en dos versiones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["una versi\xf3n normal:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"archivos llamados 4DSMTPLog.txt, 4DPOP3Log.txt, o 4DIMAPLog.txt"}),"\n",(0,s.jsx)(n.li,{children:"sin adjuntos"}),"\n",(0,s.jsx)(n.li,{children:"utiliza un reciclaje autom\xe1tico de archivos circulares cada 10 MB"}),"\n",(0,s.jsx)(n.li,{children:"destinado a la depuraci\xf3n habitual"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Para iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(SMTP Log;1) //iniciar log SMTP\nSET DATABASE PARAMETER(POP3 Log;1) //iniciar log POP3 \nSET DATABASE PARAMETER(IMAP Log;1) //iniciar log IMAP\n"})}),"\n",(0,s.jsxs)(n.p,{children:["4D Server: clic en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Iniciar los historiales de peticiones y de depuraci\xf3n"})," en la p\xe1gina ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html",children:"Mantenimiento"})," ode la ventana de administraci\xf3n de 4D Server."]}),"\n",(0,s.jsxs)(n.p,{children:["Esta ruta al historial es devuelta por el comando ",(0,s.jsx)(n.code,{children:"Get 4D file"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["una versi\xf3n extendida:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"attachment(s) included no automatic recycling"}),"\n",(0,s.jsx)(n.li,{children:"nombre personalizado"}),"\n",(0,s.jsx)(n.li,{children:"reservado con fines espec\xedficos"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Para iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$server:=New object\n...\n//SMTP\n$server.logFile:="MySMTPAuthLog.txt"\n$transporter:=SMTP New transporter($server)\n\n// POP3\n$server.logFile:="MyPOP3AuthLog.txt"\n$transporter:=POP3 New transporter($server)\n\n//IMAP\n$server.logFile:="MyIMAPAuthLog.txt"\n$transporter:=IMAP New transporter($server)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"contenido-2",children:"Contenido"}),"\n",(0,s.jsx)(n.p,{children:"Para cada petici\xf3n, se registran los siguientes campos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Columna #"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Fecha y hora en el formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"ID Proceso 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"ID \xfanico del proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.ul,{children:[(0,s.jsx)(n.li,{children:"Informaci\xf3n de inicio de sesi\xf3n SMTP, POP3 o IMAP, incluyendo el nombre del servidor, el n\xfamero de puerto TCP utilizado para conectarse al servidor SMTP, POP3 o IMAP y el estado de TLS, o"}),(0,s.jsx)(n.li,{children:'datos intercambiados entre el servidor y el cliente, empezando por "S <" (datos recibidos del servidor SMTP,POP3 o IMAP) o "C >" (datos enviados por el cliente SMTP,POP3 o IMAP): lista de modos de autenticaci\xf3n enviada por el servidor y modo de autenticaci\xf3n seleccionado, cualquier error notificado por el servidor SMTP,POP3 o IMAP, informaci\xf3n del encabezado del correo enviado (s\xf3lo versi\xf3n est\xe1ndar) y si el correo se guarda en el servidor, o'}),(0,s.jsx)(n.li,{children:"Informaci\xf3n de cierre de sesi\xf3n SMTP, POP3 o IMAP."})]})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"peticiones-cliente-orda",children:"Peticiones cliente ORDA"}),"\n",(0,s.jsx)(n.p,{children:"Este diario registra cada petici\xf3n de ORDA enviada desde una m\xe1quina remota. Puede dirigir la informaci\xf3n de registro a la memoria o a un archivo en el disco. El nombre y la ubicaci\xf3n de este archivo de registro son de su elecci\xf3n."}),"\n",(0,s.jsx)(n.p,{children:"Como iniciar este historial:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//a ejecutar en una m\xe1quina remota\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//tambi\xe9n puede enviarse a la memoria\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si desea utilizar el n\xfamero de secuencia \xfanico en el registro de peticiones de ORDA, debe activarlo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//a ejecutar en una m\xe1quina remota\n\nSET DATABASE PARAMETER(Client Log Recording;1)  \n//para activar el n\xfamero de secuencia del historial\n\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//tambi\xe9n puede enviarse a la memoria\n\nSET DATABASE PARAMETER(Client Log Recording;0)  \n//desactiva el n\xfamero de secuencia\n'})}),"\n",(0,s.jsx)(n.p,{children:"Los siguientes campos se registran para cada petici\xf3n:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nombre del campo"}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{children:"Ejemplo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sequenceNumber"}),(0,s.jsx)(n.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"}),(0,s.jsx)(n.td,{children:"104"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"url"}),(0,s.jsx)(n.td,{children:"URL de la petici\xf3n ORDA efectuada por el cliente"}),(0,s.jsx)(n.td,{children:'"rest/Persons(30001)"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startTime"}),(0,s.jsx)(n.td,{children:"Fecha y hora de inicio en formato ISO 8601"}),(0,s.jsx)(n.td,{children:'"2019-05-28T08:25:12.346Z"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"endTime"}),(0,s.jsx)(n.td,{children:"Fecha y hora final en formato ISO 8601"}),(0,s.jsx)(n.td,{children:'"2019-05-28T08:25:12.371Z"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"duration"}),(0,s.jsx)(n.td,{children:"Duraci\xf3n del procesamiento cliente (ms)"}),(0,s.jsx)(n.td,{children:"25"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"response"}),(0,s.jsx)(n.td,{children:"Objeto respuesta del servidor"}),(0,s.jsx)(n.td,{children:'{"status":200,"body":{"__entityModel":"Persons",[...]'})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,i)=>{var s=i(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,i){var s,d={},t=null,a=null;for(s in void 0!==i&&(t=""+i),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,s)&&!c.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:r,type:e,key:t,ref:a,props:d,_owner:o.current}}n.Fragment=d,n.jsx=t,n.jsxs=t},474848:(e,n,i)=>{e.exports=i(221020)},479182:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/logRequestFlow-4d1667b5e86f1ae2bb483f71b5ee3414.PNG"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(296540);const r={},d=s.createContext(r);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);