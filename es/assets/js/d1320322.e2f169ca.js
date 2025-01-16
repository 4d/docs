"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99400"],{602706:function(n,e,d){d.r(e),d.d(e,{default:()=>x,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/monitored-activity","title":"Monitored activity","description":"Monitored activity  : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/monitored-activity.md","sourceDirName":"commands-legacy","slug":"/commands/monitored-activity","permalink":"/docs/es/20-R7/commands/monitored-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmonitored-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"monitored-activity","title":"Monitored activity","slug":"/commands/monitored-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOBILE APP REFRESH SESSIONS","permalink":"/docs/es/20-R7/commands/mobile-app-refresh-sessions"},"next":{"title":"OPEN URL","permalink":"/docs/es/20-R7/commands/open-url"}}'),s=d("785893"),r=d("250065");let t={id:"monitored-activity",title:"Monitored activity",slug:"/commands/monitored-activity",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"activityKind = Activity language (1)",id:"activitykind--activity-language-1",level:5},{value:"Propiedades adicionales",id:"propiedades-adicionales",level:6},{value:"activityKind = Activity network (2)",id:"activitykind--activity-network-2",level:5},{value:"activityKind = Activity operations (4)",id:"activitykind--activity-operations-4",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(n){let e={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Monitored activity"}),"  : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Par\xe1metro"}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Resultado"}),(0,s.jsx)(e.td,{children:"Collection"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Colecci\xf3n de actividades monitoreadas"})]})})]}),"\n",(0,s.jsx)(e.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["El comando ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," devuelve una colecci\xf3n de objetos que describen operaciones registradas de acuerdo con las especificaciones definidas por el comando ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"}),". Se puede llamar y ejecutar en 4D remoto, 4D Server y aplicaciones 4D aut\xf3nomas (si ",(0,s.jsx)(e.em,{children:"fuente"})," no proviene de la actividad de red)."]}),"\n",(0,s.jsx)(e.p,{children:"Los objetos en la colecci\xf3n devuelta tienen las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Propiedad"})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Tipo ",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Descripci\xf3n ",(0,s.jsx)(e.br,{})]})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"activityKind"}),(0,s.jsx)(e.td,{children:"Entero largo"}),(0,s.jsxs)(e.td,{children:["El tipo de actividad registrada:",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{}),"                        ",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Constante"}),(0,s.jsx)(e.td,{children:"Valor"}),(0,s.jsx)(e.td,{children:"Comentario"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Activity language"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Operaciones de ejecuci\xf3n del lenguaje"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Activity network"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"Operaciones de peticiones de red"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Activity operations"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"Operaciones de datos 4D"})]})]})]})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"activityDuration"}),(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsx)(e.td,{children:"La duraci\xf3n de la actividad expresada en segundos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"activityData"}),(0,s.jsx)(e.td,{children:"Objeto"}),(0,s.jsx)(e.td,{children:"Objeto(s) que contiene(n) propiedades espec\xedficas dependiendo del tipo de actividad registrada (activityKind). En algunas circunstancias, se pueden devolver varios objetos para la misma operaci\xf3n. En este caso, los objetos tendr\xe1n el mismo UUID. Las propiedades adicionales en estos objetos se describen en las secciones a continuaci\xf3n."})]})]})]}),"\n",(0,s.jsx)(e.h5,{id:"activitykind--activity-language-1",children:"activityKind = Activity language (1)"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Nota:"})," el objeto ",(0,s.jsx)(e.em,{children:"activityData"})," utiliza la informaci\xf3n definida por el comando ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," para ",(0,s.jsx)(e.em,{children:"4DDebugLog.txt (est\xe1ndar)"})," (si corresponde), de lo contrario, utiliza un modo predeterminado. Iniciar la grabaci\xf3n del historial durante la ejecuci\xf3n del comando ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," afectar\xe1 los resultados devueltos."]}),"\n",(0,s.jsxs)(e.p,{children:["objeto ",(0,s.jsx)(e.em,{children:"activityData"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.th,{children:[(0,s.jsx)(e.strong,{children:"P"})," ",(0,s.jsxs)(e.strong,{children:["ropiedad ",(0,s.jsx)(e.br,{})]})]}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Tipo ",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Descripci\xf3n ",(0,s.jsx)(e.br,{})]})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sequenceNumber"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"elapsedTime"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Tiempo transcurrido desde que se inici\xf3 el historial de depuraci\xf3n (expresado en milisegundos)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"processID"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"ID de proceso"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uniqueProcessID"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"ID de proceso \xfanico"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"stackLevel"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Nivel de pila"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"duration"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Duraci\xf3n de la operaci\xf3n (expresada en microsegundos)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"kind"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:'Tipo de operaci\xf3n registrada. Valores posibles: "command" "method" "Message" "pluginMessage" "pluginCommand" "pluginCallback" "pluginEvent" "task" "member"'})]})]})]}),"\n",(0,s.jsx)(e.h6,{id:"propiedades-adicionales",children:"Propiedades adicionales"}),"\n",(0,s.jsxs)(e.p,{children:["Las siguientes propiedades adicionales se devuelven en el objeto ",(0,s.jsx)(e.em,{children:"activityData"})," seg\xfan el tipo de operaci\xf3n:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Propiedad ",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Tipo ",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Tipo",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"commandName"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"Nombre del comando"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"commandNumber"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"N\xfamero del comando"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"connectionUUID"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"tarea"}),(0,s.jsx)(e.td,{children:"M\xe1quina cliente UUID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"formEvent"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"Nombre del evento de formulario"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"formMethod"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"M\xe9todo de formulario"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"functionName"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"miembro"}),(0,s.jsx)(e.td,{children:"Nombre del m\xe9todo del miembro ORDA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"memberMethod"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"Cadena localizada del m\xe9todo miembro para la llamada al objeto 4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"method"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"comando"}),(0,s.jsx)(e.td,{children:"Nombres localizados de comandos y funciones 4D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"parameters"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsxs)(e.td,{children:["comando",(0,s.jsx)(e.br,{}),"member",(0,s.jsx)(e.br,{}),"message",(0,s.jsx)(e.br,{}),"method",(0,s.jsx)(e.br,{}),"pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent",(0,s.jsx)(e.br,{}),"task"]}),(0,s.jsx)(e.td,{children:"Par\xe1metros pasados \u200B\u200Ben la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginCommandName"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsxs)(e.td,{children:["pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent"]}),(0,s.jsx)(e.td,{children:"Nombre del comando del plug-in"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginCommandNumber"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsxs)(e.td,{children:["pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent",(0,s.jsx)(e.br,{}),"pluginMessage"]}),(0,s.jsx)(e.td,{children:"N\xfamero del comando del plug-in"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginExternalCall"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"pluginCallback"}),(0,s.jsx)(e.td,{children:"Llamada de punto de entrada Plug-in SDK"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginMessageName"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"pluginMessage"}),(0,s.jsx)(e.td,{children:"Valores posibles: PackMsgServerDeInit PackMsgServerDisposeData PackMsgServerWriteData PackMsgServerReadData PackMsgServerKillClient PackMsgServerNewClient PackMsgServerInit PackMsgProcessDeInit PackMsgProcessInit PackMsgClientDeInit PackMsgClientInit"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginName"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsxs)(e.td,{children:["pluginCallback",(0,s.jsx)(e.br,{}),"pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent",(0,s.jsx)(e.br,{}),"pluginMessage"]}),(0,s.jsx)(e.td,{children:"Nombre del plug-in"})]})]})]}),"\n",(0,s.jsx)(e.h5,{id:"activitykind--activity-network-2",children:"activityKind = Activity network (2)"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["si los historiales de depuraci\xf3n se han detenido en el servidor 4D ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/graph-settings",children:"GRAPH SETTINGS"}),", ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," no devolver\xe1 nada. Si los historiales se reinician en el servidor o mediante el comando ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"})," con Activity network, ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," reanudar\xe1 la informaci\xf3n de actividad de red."]}),"\n",(0,s.jsxs)(e.li,{children:["el objeto ",(0,s.jsx)(e.em,{children:"activityData"})," utiliza la informaci\xf3n definida por el comando ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," para el ",(0,s.jsx)(e.em,{children:"4DRequestsLog.txt"})," (si corresponde), de lo contrario, utiliza un modo predeterminado . Iniciar la grabaci\xf3n del historial durante la ejecuci\xf3n del comando ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," impactar\xe1 los resultados devueltos."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["objeto ",(0,s.jsx)(e.em,{children:"activityData"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.th,{children:[(0,s.jsx)(e.strong,{children:"P"})," ",(0,s.jsxs)(e.strong,{children:["ropiedad ",(0,s.jsx)(e.br,{})]})]}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Tipo ",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Descripci\xf3n",(0,s.jsx)(e.br,{})]})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sequenceNumber"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"N\xfamero de operaci\xf3n \xfanico y secuencial en la sesi\xf3n de historial"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"time"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:'Fecha y hora en formato ISO 8601 ("AAAA-MM-DDTHH:MM:SS.sss")'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"systemID"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"ID del sistema"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"component"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Firma del componente (p. ej., 4SQLS o dbmg)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"processInfoIndex"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsxs)(e.td,{children:['Corresponde al campo "index" en historial ',(0,s.jsx)(e.em,{children:"4DRequestsLog_ProcessInfo.txt"}),", y permite vincular una solicitud a un proceso"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"request"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsxs)(e.td,{children:["ID de solicitud para mensajes c/s, peticiones SQL o mensajes ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/log-event",children:"LOG EVENT"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"bytesIn"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"N\xfamero de bytes recibidos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"bytesOut"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"N\xfamero de bytes enviados"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"execDuration"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsxs)(e.td,{children:["Dependiendo de d\xf3nde se genere:server_duration . ",(0,s.jsx)(e.br,{}),"OR,exec_duration cuando se genera en el servidor --tiempo que tarda en microsegundos para que el servidor procese la solicitud. ",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"writeDuration"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Tiempo empleado en microsegundos para enviar:Request (cuando se ejecuta en el cliente).Response (cuando se ejecuta en el servidor)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"serverDuration"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Tiempo en microsegundos para la comunicaci\xf3n cliente/servidor"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"taskKind"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Apropiativo o cooperativo (respectivamente 'p' o 'c')"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"rtt"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsxs)(e.td,{children:["Tiempo estimado en microsegundos para que el cliente env\xede la solicitud y el servidor la confirme. Solo se mide cuando se utiliza la capa de red ServerNet, devuelve 0 cuando se utiliza con la capa de red heredada.Para versiones de Windows anteriores a Windows 10 o Windows Server 2016, la llamada devolver\xe1 0.",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{})]})]})]})]}),"\n",(0,s.jsx)(e.h5,{id:"activitykind--activity-operations-4",children:"activityKind = Activity operations (4)"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Nota:"})," el objeto ",(0,s.jsx)(e.em,{children:"activityData"})," es similar al que devuelve el comando ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/activity-snapshot",children:"ACTIVITY SNAPSHOT"}),", excepto que solo se devuelven las operaciones de umbral y finalizadas."]}),"\n",(0,s.jsxs)(e.p,{children:["objeto ",(0,s.jsx)(e.em,{children:"activityData"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Propiedad"})}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Tipo ",(0,s.jsx)(e.br,{})]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.strong,{children:["Descripci\xf3n ",(0,s.jsx)(e.br,{})]})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"message"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Descripci\xf3n de la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maxValue"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"N\xfamero m\xe1ximo de iteraciones para la operaci\xf3n (valor=-1 para operaciones no iterativas)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"remote"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"booleano"}),(0,s.jsx)(e.td,{children:"Operaci\xf3n cliente/ servidor. Valores posibles: true, false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uuid"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"UUID de la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"taskId"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Identificador interno 4D para el proceso de origen"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"startTime"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:'Hora de inicio de la operaci\xf3n en formato ISO 8601 ("AAAA-MM-DDTHH:MM:SS.sss")'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"duration"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Tiempo total (expresado en milisegundos) de ejecuci\xf3n de la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"title"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Informaci\xf3n adicional sobre la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"extraInfo"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"objeto"}),(0,s.jsxs)(e.td,{children:["Informaci\xf3n SQL adicional (si la hay):",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{})," extraInfo.SQL_Query (text): la consulta SQL extraInfo.SQL_User (text): usuario autenticado en el servidor SQL"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dbContextInfo"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"objeto"}),(0,s.jsx)(e.td,{children:"Informaci\xf3n de contexto de la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"host_name"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Nombre del host que inici\xf3 la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user_name"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Nombre del usuario 4D cuya sesi\xf3n inici\xf3 la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"task_name"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Nombre del proceso que inici\xf3 la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"task_id"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"ID del proceso que inici\xf3 la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"client_uid"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"(solo operaciones c/s) UUID de la m\xe1quina cliente que inici\xf3 la operaci\xf3n de la base de datos"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"is_remote_context"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"(solo operaciones c/s) Indica si la operaci\xf3n fue lanzada por el servidor mediante un procedimiento almacenado (valor=0) o por un cliente (valor=1)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user4d_id"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"ID del usuario 4D en la m\xe1quina cliente"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user4d_alias"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsxs)(e.td,{children:["Alias \u200B\u200Bdefinido para el usuario 4D. Ver ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/set-user-alias",children:"SET USER ALIAS"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"client_version"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsxs)(e.td,{children:["Valor de cadena codificado que expresa el n\xfamero de versi\xf3n del entorno 4D devuelto por el comando ",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/application-version",children:"Application version"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dbOperationDetails"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"objeto"}),(0,s.jsx)(e.td,{children:"Informaci\xf3n sobre llamadas de operaci\xf3n al motor de la base"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"table"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Nombre de la tabla en la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"field"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Nombre del campo de tabla en la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"queryPlan"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Plan de consulta para la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"operationType"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Tipo de operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"sortParameters"}),(0,s.jsx)(e.td,{children:"colecci\xf3n"}),(0,s.jsx)(e.td,{children:"Criterio de ordenaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"subOperations"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"colecci\xf3n"}),(0,s.jsx)(e.td,{children:"colecci\xf3n de objetos activytData que contienen informaci\xf3n sobre operaciones subordinadas dentro de la operaci\xf3n actual."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].message"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Etiqueta de operaciones"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].maxValue"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"N\xfamero m\xe1ximo de iteraciones para la operaci\xf3n (valor = -1 para operaciones no iterativas)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].remote"}),(0,s.jsx)(e.td,{children:"booleano"}),(0,s.jsx)(e.td,{children:"Operaci\xf3n cliente / servidor (0=true, 1=false)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].uuid"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"UUID de la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].taskId"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Identificador 4D interno para el proceso de origen"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].startTime"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:'Hora de inicio de la operaci\xf3n en formato ISO 8601 ("AAAA-MM-DDTHH:MM:SS.sss")'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].duration"}),(0,s.jsx)(e.td,{children:"entero largo"}),(0,s.jsx)(e.td,{children:"Tiempo total (expresado en milisegundos) de ejecuci\xf3n de la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].title"}),(0,s.jsx)(e.td,{children:"texto"}),(0,s.jsx)(e.td,{children:"Informaci\xf3n adicional sobre la operaci\xf3n"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].extraInfo"}),(0,s.jsx)(e.td,{children:"objeto"}),(0,s.jsxs)(e.td,{children:["Informaci\xf3n SQL adicional (si la hay):",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{})," [ ].extraInfo.SQL_Query (text): la consulta SQL [ ].extraInfo.SQL_User (text): usuario autenticado en el servidor SQL"]})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(e.p,{children:["Ver el ejemplo de ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"})})]}),"\n",(0,s.jsx)(e.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/es/20-R7/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,s.jsx)(e.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"N\xfamero de comando"}),(0,s.jsx)(e.td,{children:"1713"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hilo seguro"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return c},a:function(){return t}});var i=d(667294);let s={},r=i.createContext(s);function t(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);