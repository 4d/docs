"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53204"],{272561:function(e,i,a){a.r(i),a.d(i,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>t,contentTitle:()=>c});var r=JSON.parse('{"id":"ServerWindow/maintenance","title":"P\xe1gina Mantenimiento","description":"La p\xe1gina Mantenimiento de la ventana de administraci\xf3n de 4D Server ofrece informaci\xf3n relativa al funcionamiento actual de la aplicaci\xf3n. Tambi\xe9n ofrece acceso a las funciones b\xe1sicas de mantenimiento:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ServerWindow/maintenance.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/maintenance","permalink":"/docs/es/ServerWindow/maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmaintenance.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"maintenance","title":"P\xe1gina Mantenimiento"},"sidebar":"docs","previous":{"title":"P\xe1gina Procesos","permalink":"/docs/es/ServerWindow/processes"},"next":{"title":"P\xe1gina Servidor de aplicaci\xf3n","permalink":"/docs/es/ServerWindow/application-server"}}'),n=a("785893"),s=a("250065");let o={id:"maintenance",title:"P\xe1gina Mantenimiento"},c=void 0,d={},t=[{value:"\xdaltima verificaci\xf3n/compactaci\xf3n",id:"\xfaltima-verificaci\xf3ncompactaci\xf3n",level:2},{value:"Verificar registros e \xedndices",id:"verificar-registros-e-\xedndices",level:3},{value:"Compactar los datos...",id:"compactar-los-datos",level:3},{value:"Tiempo de funcionamiento",id:"tiempo-de-funcionamiento",level:2},{value:"Reiniciar el servidor...",id:"reiniciar-el-servidor",level:3},{value:"\xdaltima copia de seguridad",id:"\xfaltima-copia-de-seguridad",level:2},{value:"Historial de peticiones y depuraci\xf3n",id:"historial-de-peticiones-y-depuraci\xf3n",level:2},{value:"Iniciar/Detener Solicitud y Depurar Registros",id:"iniciardetener-solicitud-y-depurar-registros",level:3},{value:"Ver el informe",id:"ver-el-informe",level:3},{value:"Cargar archivo de configuraci\xf3n de logs",id:"cargar-archivo-de-configuraci\xf3n-de-logs",level:3},{value:"Detener el registro",id:"detener-el-registro",level:3}];function l(e){let i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["La p\xe1gina ",(0,n.jsx)(i.strong,{children:"Mantenimiento"})," de la ventana de administraci\xf3n de 4D Server ofrece informaci\xf3n relativa al funcionamiento actual de la aplicaci\xf3n. Tambi\xe9n ofrece acceso a las funciones b\xe1sicas de mantenimiento:"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:a(304518).Z+"",width:"1036",height:"699"})}),"\n",(0,n.jsx)(i.h2,{id:"\xfaltima-verificaci\xf3ncompactaci\xf3n",children:"\xdaltima verificaci\xf3n/compactaci\xf3n"}),"\n",(0,n.jsxs)(i.p,{children:["Estas \xe1reas indican la fecha, la hora y el estado de la \xfaltima ",(0,n.jsx)(i.a,{href:"/docs/es/MSC/verify",children:"verificaci\xf3n de datos"})," y ",(0,n.jsx)(i.a,{href:"/docs/es/MSC/compact",children:"operaci\xf3n de compactaci\xf3n"})," efectuadas en la base."]}),"\n",(0,n.jsx)(i.h3,{id:"verificar-registros-e-\xedndices",children:"Verificar registros e \xedndices"}),"\n",(0,n.jsx)(i.p,{children:"Este bot\xf3n permite lanzar directamente la operaci\xf3n de verificaci\xf3n, sin interrumpir el servidor. Tenga en cuenta que el servidor puede ralentizarse notablemente durante la operaci\xf3n."}),"\n",(0,n.jsxs)(i.p,{children:["Se verifican todos los registros y todos los \xedndices de la base de datos. Si desea poder orientar la verificaci\xf3n o disponer de opciones adicionales, deber\xe1 utilizar el ",(0,n.jsx)(i.a,{href:"/docs/es/MSC/overview",children:"Centro de mantenimiento y seguridad"})," (CSM)."]}),"\n",(0,n.jsxs)(i.p,{children:["Tras la verificaci\xf3n, se genera un archivo de informe en formato XML en el servidor, en la carpeta ",(0,n.jsx)(i.a,{href:"/docs/es/Project/architecture#logs",children:"maintenance Logs"}),". El bot\xf3n ",(0,n.jsx)(i.strong,{children:"Ver informe"})," (llamado ",(0,n.jsx)(i.strong,{children:"Descargar informe"})," si la operaci\xf3n se ha realizado desde una m\xe1quina remota) le permite visualizar el archivo en su navegador."]}),"\n",(0,n.jsx)(i.h3,{id:"compactar-los-datos",children:"Compactar los datos..."}),"\n",(0,n.jsx)(i.p,{children:"Este bot\xf3n puede utilizarse para lanzar directamente una operaci\xf3n de compactaci\xf3n de datos. Esta operaci\xf3n requiere detener el servidor: al hacer clic en este bot\xf3n, aparece la caja de di\xe1logo de cierre de 4D Server para que pueda elegir c\xf3mo interrumpir la operaci\xf3n:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:a(455736).Z+"",width:"502",height:"356"})}),"\n",(0,n.jsxs)(i.p,{children:["Tras la interrupci\xf3n efectiva del servicio de la aplicaci\xf3n, 4D Server efect\xfaa una operaci\xf3n est\xe1ndar de compactaci\xf3n de los datos de la base. Si desea disponer de opciones adicionales, deber\xe1 utilizar el ",(0,n.jsx)(i.a,{href:"/docs/es/MSC/overview",children:"Centro de seguridad y de mantenimiento (CSM)"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Una vez finalizada la compactaci\xf3n, 4D Server relanza autom\xe1ticamente la aplicaci\xf3n. A continuaci\xf3n, los usuarios de 4D pueden volver a conectarse."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Si la solicitud de compactaci\xf3n se realiz\xf3 desde una m\xe1quina remota 4D, esta m\xe1quina es reconectada autom\xe1ticamente por 4D Server."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Tras la verificaci\xf3n, se genera un archivo de informe en formato XML en el servidor, en la carpeta ",(0,n.jsx)(i.a,{href:"/docs/es/Project/architecture#logs",children:"maintenance Logs"}),". El bot\xf3n ",(0,n.jsx)(i.strong,{children:"Ver informe"})," (llamado ",(0,n.jsx)(i.strong,{children:"Descargar informe"})," si la operaci\xf3n se ha realizado desde una m\xe1quina remota) le permite visualizar el archivo en su navegador."]}),"\n",(0,n.jsx)(i.h2,{id:"tiempo-de-funcionamiento",children:"Tiempo de funcionamiento"}),"\n",(0,n.jsx)(i.p,{children:"Esta \xe1rea indica la duraci\xf3n de la ejecuci\xf3n de la aplicaci\xf3n 4D Server desde la \xfaltima vez que se inici\xf3 (d\xedas, horas y minutos)."}),"\n",(0,n.jsx)(i.h3,{id:"reiniciar-el-servidor",children:"Reiniciar el servidor..."}),"\n",(0,n.jsx)(i.p,{children:"Este bot\xf3n permite cerrar inmediatamente el proyecto y reiniciarlo. Cuando presione este bot\xf3n, aparecer\xe1 la caja de di\xe1logo de cierre de 4D Server para que pueda elegir c\xf3mo interrumpir la operaci\xf3n. Tras la validaci\xf3n, 4D Server cierra autom\xe1ticamente el proyecto y lo vuelve a abrir. A continuaci\xf3n, los usuarios de 4D pueden volver a conectarse."}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Si la solicitud de reinicio se realiz\xf3 desde una m\xe1quina 4D remota, esta m\xe1quina es reconectada autom\xe1ticamente por 4D Server."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"\xfaltima-copia-de-seguridad",children:"\xdaltima copia de seguridad"}),"\n",(0,n.jsxs)(i.p,{children:["Esta \xe1rea indica la fecha y la hora de la ",(0,n.jsx)(i.a,{href:"/docs/es/MSC/backup",children:"\xfaltima copia de seguridad"})," de la base y ofrece informaci\xf3n sobre la pr\xf3xima copia de seguridad autom\xe1tica programada (si la hay). Las copias de seguridad autom\xe1ticas se configuran en la p\xe1gina ",(0,n.jsx)(i.strong,{children:"Periodicidad"})," de las propiedades de estructura."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"\xdaltima copia de seguridad"}),": fecha y hora de la \xfaltima copia de seguridad."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Pr\xf3xima copia de seguridad"}),": fecha y hora de la pr\xf3xima copia de seguridad programada."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Espacio necesario"}),": espacio estimado necesario para la copia de seguridad. El tama\xf1o real del archivo de copia de seguridad puede variar en funci\xf3n de la configuraci\xf3n (compresi\xf3n, etc.) y de acuerdo a las variaciones del archivo de datos."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Espacio disponible"}),": espacio disponible en el volumen de copia de seguridad."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["El bot\xf3n ",(0,n.jsx)(i.strong,{children:"Iniciar copia de seguridad"})," permite realizar una copia de seguridad inmediata de la base utilizando los par\xe1metros de copia de seguridad actuales (archivos de copia de seguridad, ubicaci\xf3n de los archivos, opciones, etc.). Puede ver estos par\xe1metros haciendo clic en el bot\xf3n ",(0,n.jsx)(i.strong,{children:"Propiedades..."}),'. Durante una copia de seguridad en el servidor, los equipos cliente quedan "bloqueados" (pero no desconectados) y no es posible que se conecten nuevos clientes.']}),"\n",(0,n.jsx)(i.h2,{id:"historial-de-peticiones-y-depuraci\xf3n",children:"Historial de peticiones y depuraci\xf3n"}),"\n",(0,n.jsx)(i.p,{children:"Esta \xe1rea indica la duraci\xf3n de registro de los archivos de historial (cuando se activan) y le permite controlar su activaci\xf3n."}),"\n",(0,n.jsxs)(i.p,{children:["Consulte la secci\xf3n ",(0,n.jsx)(i.a,{href:"/docs/es/Debugging/debugLogFiles",children:(0,n.jsx)(i.strong,{children:"Descripci\xf3n de los archivos de historial"})})," para obtener m\xe1s informaci\xf3n sobre los archivos de historial."]}),"\n",(0,n.jsx)(i.h3,{id:"iniciardetener-solicitud-y-depurar-registros",children:"Iniciar/Detener Solicitud y Depurar Registros"}),"\n",(0,n.jsxs)(i.p,{children:["El bot\xf3n ",(0,n.jsx)(i.strong,{children:"Iniciar los registros de peticiones y de depuraci\xf3n"})," inicia los archivos de registro. Dado que esto puede deteriorar notablemente el rendimiento del servidor, debe reservarse para la fase de desarrollo de la aplicaci\xf3n."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Este bot\xf3n s\xf3lo registra las operaciones que se ejecutan en el servidor."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Una vez activados los registros, el t\xedtulo del bot\xf3n cambia a ",(0,n.jsx)(i.strong,{children:"Detener los registros de peticiones y depurar"}),', para que pueda detener el registro de peticiones en cualquier momento. Preste atenci\xf3n al hecho de que reiniciar el registro despu\xe9s de detenerlo "borra" el archivo anterior.']}),"\n",(0,n.jsx)(i.h3,{id:"ver-el-informe",children:"Ver el informe"}),"\n",(0,n.jsxs)(i.p,{children:["El bot\xf3n ",(0,n.jsx)(i.strong,{children:"Ver informe"})," (llamado ",(0,n.jsx)(i.strong,{children:"Descargar el informe"})," si la operaci\xf3n se ha realizado desde un cliente de escritorio remoto) permite abrir una ventana sistema en la que se muestra el archivo de registro de peticiones."]}),"\n",(0,n.jsx)(i.h3,{id:"cargar-archivo-de-configuraci\xf3n-de-logs",children:"Cargar archivo de configuraci\xf3n de logs"}),"\n",(0,n.jsxs)(i.p,{children:["Este bot\xf3n le permite cargar un ",(0,n.jsx)(i.a,{href:"/docs/es/Debugging/debugLogFiles#using-a-log-configuration-file",children:"archivo de configuraci\xf3n de log"}),"(archivo",(0,n.jsx)(i.code,{children:".json"}),") para un servidor espec\xedfico. Este archivo puede ser facilitado por los servicios t\xe9cnicos de 4D para el seguimiento y estudio de casos concretos."]}),"\n",(0,n.jsx)(i.h3,{id:"detener-el-registro",children:"Detener el registro"}),"\n",(0,n.jsx)(i.p,{children:"Este bot\xf3n suspende todas las operaciones de registro iniciadas en el servidor. Esta funcionalidad puede ser \xfatil para aligerar temporalmente las tareas del servidor."}),"\n",(0,n.jsxs)(i.p,{children:["Cuando los registros se han puesto en pausa, el t\xedtulo del bot\xf3n cambia a ",(0,n.jsx)(i.strong,{children:"Reanudar registro"}),", para que pueda reanudar las operaciones de registro."]}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsxs)(i.p,{children:["Puede pausar y reanudar el registro utilizando el comando ",(0,n.jsx)(i.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},304518:function(e,i,a){a.d(i,{Z:function(){return r}});let r=a.p+"assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png"},455736:function(e,i,a){a.d(i,{Z:function(){return r}});let r=a.p+"assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png"},250065:function(e,i,a){a.d(i,{Z:function(){return c},a:function(){return o}});var r=a(667294);let n={},s=r.createContext(n);function o(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);