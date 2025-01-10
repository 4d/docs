"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63714"],{734966:function(e,a,i){i.r(a),i.d(a,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>t});var r=JSON.parse('{"id":"ServerWindow/maintenance","title":"P\xe1gina Manuten\xe7\xe3o","description":"La p\xe1gina Mantenimiento de la ventana de administraci\xf3n de 4D Server ofrece informaci\xf3n relativa al funcionamiento actual de la aplicaci\xf3n. Ele tamb\xe9m fornece acesso \xe0s fun\xe7\xf5es b\xe1sicas de manuten\xe7\xe3o:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ServerWindow/maintenance.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/maintenance","permalink":"/docs/pt/ServerWindow/maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmaintenance.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"maintenance","title":"P\xe1gina Manuten\xe7\xe3o"},"sidebar":"docs","previous":{"title":"P\xe1gina Processos","permalink":"/docs/pt/ServerWindow/processes"},"next":{"title":"P\xe1gina Servidor de aplica\xe7\xf5es","permalink":"/docs/pt/ServerWindow/application-server"}}'),n=i("785893"),o=i("250065");let s={id:"maintenance",title:"P\xe1gina Manuten\xe7\xe3o"},t=void 0,c={},d=[{value:"\xdaltima verifica\xe7\xe3o/compacta\xe7\xe3o",id:"\xfaltima-verifica\xe7\xe3ocompacta\xe7\xe3o",level:2},{value:"Verificar registos e \xedndices",id:"verificar-registos-e-\xedndices",level:3},{value:"Compactar dados...",id:"compactar-dados",level:3},{value:"Tempo de funcionamento",id:"tempo-de-funcionamento",level:2},{value:"Reiniciar o servidor...",id:"reiniciar-o-servidor",level:3},{value:"\xdaltima c\xf3pia de seguran\xe7a",id:"\xfaltima-c\xf3pia-de-seguran\xe7a",level:2},{value:"Hist\xf3rico de solicita\xe7\xf5es e depura\xe7\xe3o",id:"hist\xf3rico-de-solicita\xe7\xf5es-e-depura\xe7\xe3o",level:2},{value:"Start/Stop Request and Debug Logs",id:"startstop-request-and-debug-logs",level:3},{value:"Ver relat\xf3rio",id:"ver-relat\xf3rio",level:3},{value:"Carregar ficheiro de configura\xe7\xe3o dos registos",id:"carregar-ficheiro-de-configura\xe7\xe3o-dos-registos",level:3},{value:"Pausar no registo",id:"pausar-no-registo",level:3}];function l(e){let a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["La p\xe1gina ",(0,n.jsx)(a.strong,{children:"Mantenimiento"})," de la ventana de administraci\xf3n de 4D Server ofrece informaci\xf3n relativa al funcionamiento actual de la aplicaci\xf3n. Ele tamb\xe9m fornece acesso \xe0s fun\xe7\xf5es b\xe1sicas de manuten\xe7\xe3o:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(802900).Z+"",width:"1036",height:"699"})}),"\n",(0,n.jsx)(a.h2,{id:"\xfaltima-verifica\xe7\xe3ocompacta\xe7\xe3o",children:"\xdaltima verifica\xe7\xe3o/compacta\xe7\xe3o"}),"\n",(0,n.jsxs)(a.p,{children:["Estas \xe1reas indican la fecha, la hora y el estado de la \xfaltima ",(0,n.jsx)(a.a,{href:"/docs/pt/MSC/verify",children:"verificaci\xf3n de datos"})," y ",(0,n.jsx)(a.a,{href:"/docs/pt/MSC/compact",children:"operaci\xf3n de compactaci\xf3n"})," efectuadas en la base."]}),"\n",(0,n.jsx)(a.h3,{id:"verificar-registos-e-\xedndices",children:"Verificar registos e \xedndices"}),"\n",(0,n.jsx)(a.p,{children:"This button can be used to launch the verification operation directly, without interrupting the server. Observe que o servidor pode ficar visivelmente mais lento durante a opera\xe7\xe3o."}),"\n",(0,n.jsxs)(a.p,{children:["Todos os registros e todos os \xedndices do banco de dados s\xe3o verificados. Si desea poder orientar la verificaci\xf3n o disponer de opciones adicionales, deber\xe1 utilizar el ",(0,n.jsx)(a.a,{href:"/docs/pt/MSC/overview",children:"Centro de mantenimiento y seguridad"})," (CSM)."]}),"\n",(0,n.jsxs)(a.p,{children:["Tras la verificaci\xf3n, se genera un archivo de informe en formato XML en el servidor, en la carpeta ",(0,n.jsx)(a.a,{href:"/docs/pt/Project/architecture#logs",children:"maintenance Logs"}),". El bot\xf3n ",(0,n.jsx)(a.strong,{children:"Ver informe"})," (llamado ",(0,n.jsx)(a.strong,{children:"Descargar informe"})," si la operaci\xf3n se ha realizado desde una m\xe1quina remota) le permite visualizar el archivo en su navegador."]}),"\n",(0,n.jsx)(a.h3,{id:"compactar-dados",children:"Compactar dados..."}),"\n",(0,n.jsx)(a.p,{children:"Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(497006).Z+"",width:"502",height:"356"})}),"\n",(0,n.jsxs)(a.p,{children:["After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. Si desea disponer de opciones adicionales, deber\xe1 utilizar el ",(0,n.jsx)(a.a,{href:"/docs/pt/MSC/overview",children:"Centro de seguridad y de mantenimiento (CSM)"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Once the compacting is finished, 4D Server automatically restarts the application. Os usu\xe1rios 4D podem ent\xe3o ser reconectados."}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Tras la verificaci\xf3n, se genera un archivo de informe en formato XML en el servidor, en la carpeta ",(0,n.jsx)(a.a,{href:"/docs/pt/Project/architecture#logs",children:"maintenance Logs"}),". El bot\xf3n ",(0,n.jsx)(a.strong,{children:"Ver informe"})," (llamado ",(0,n.jsx)(a.strong,{children:"Descargar informe"})," si la operaci\xf3n se ha realizado desde una m\xe1quina remota) le permite visualizar el archivo en su navegador."]}),"\n",(0,n.jsx)(a.h2,{id:"tempo-de-funcionamento",children:"Tempo de funcionamento"}),"\n",(0,n.jsx)(a.p,{children:"This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes)."}),"\n",(0,n.jsx)(a.h3,{id:"reiniciar-o-servidor",children:"Reiniciar o servidor..."}),"\n",(0,n.jsx)(a.p,{children:"Este bot\xe3o pode ser usado para fechar e reiniciar imediatamente o projeto. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. Ap\xf3s a valida\xe7\xe3o, 4D Server fecha e reabre automaticamente o projeto. Os usu\xe1rios 4D podem ent\xe3o ser reconectados."}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"\xfaltima-c\xf3pia-de-seguran\xe7a",children:"\xdaltima c\xf3pia de seguran\xe7a"}),"\n",(0,n.jsxs)(a.p,{children:["Esta \xe1rea indica la fecha y la hora de la ",(0,n.jsx)(a.a,{href:"/docs/pt/MSC/backup",children:"\xfaltima copia de seguridad"})," de la base y ofrece informaci\xf3n sobre la pr\xf3xima copia de seguridad autom\xe1tica programada (si la hay). Las copias de seguridad autom\xe1ticas se configuran en la p\xe1gina ",(0,n.jsx)(a.strong,{children:"Periodicidad"})," de las propiedades de estructura."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"\xdaltima copia de seguridad"}),": fecha y hora de la \xfaltima copia de seguridad."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Pr\xf3xima copia de seguridad"}),": fecha y hora de la pr\xf3xima copia de seguridad programada."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Espacio necesario"}),": espacio estimado necesario para la copia de seguridad. The actual size of the backup file may vary according to the settings (compression, etc.) e de acordo com as varia\xe7\xf5es do arquivo de dados."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Espacio disponible"}),": espacio disponible en el volumen de copia de seguridad."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["El bot\xf3n ",(0,n.jsx)(a.strong,{children:"Iniciar copia de seguridad"})," permite realizar una copia de seguridad inmediata de la base utilizando los par\xe1metros de copia de seguridad actuales (archivos de copia de seguridad, ubicaci\xf3n de los archivos, opciones, etc.). Puede ver estos par\xe1metros haciendo clic en el bot\xf3n ",(0,n.jsx)(a.strong,{children:"Propiedades..."}),'. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.']}),"\n",(0,n.jsx)(a.h2,{id:"hist\xf3rico-de-solicita\xe7\xf5es-e-depura\xe7\xe3o",children:"Hist\xf3rico de solicita\xe7\xf5es e depura\xe7\xe3o"}),"\n",(0,n.jsx)(a.p,{children:"This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation."}),"\n",(0,n.jsxs)(a.p,{children:["Consulte a se\xe7\xe3o ",(0,n.jsx)(a.a,{href:"/docs/pt/Debugging/debugLogFiles",children:(0,n.jsx)(a.strong,{children:"Descri\xe7\xe3o dos arquivos de log"})})," para obter detalhes sobre os arquivos de log."]}),"\n",(0,n.jsx)(a.h3,{id:"startstop-request-and-debug-logs",children:"Start/Stop Request and Debug Logs"}),"\n",(0,n.jsxs)(a.p,{children:["El bot\xf3n ",(0,n.jsx)(a.strong,{children:"Iniciar los registros de peticiones y de depuraci\xf3n"})," inicia los archivos de registro. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application."]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Este bot\xe3o registra apenas opera\xe7\xf5es executadas no servidor."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Una vez activados los registros, el t\xedtulo del bot\xf3n cambia a ",(0,n.jsx)(a.strong,{children:"Detener los registros de peticiones y depurar"}),', para que pueda detener el registro de peticiones en cualquier momento. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.']}),"\n",(0,n.jsx)(a.h3,{id:"ver-relat\xf3rio",children:"Ver relat\xf3rio"}),"\n",(0,n.jsxs)(a.p,{children:["El bot\xf3n ",(0,n.jsx)(a.strong,{children:"Ver informe"})," (llamado ",(0,n.jsx)(a.strong,{children:"Descargar el informe"})," si la operaci\xf3n se ha realizado desde un cliente de escritorio remoto) permite abrir una ventana sistema en la que se muestra el archivo de registro de peticiones."]}),"\n",(0,n.jsx)(a.h3,{id:"carregar-ficheiro-de-configura\xe7\xe3o-dos-registos",children:"Carregar ficheiro de configura\xe7\xe3o dos registos"}),"\n",(0,n.jsxs)(a.p,{children:["Este bot\xf3n le permite cargar un ",(0,n.jsx)(a.a,{href:"/docs/pt/Debugging/debugLogFiles#using-a-log-configuration-file",children:"archivo de configuraci\xf3n de log"}),"(archivo",(0,n.jsx)(a.code,{children:".json"}),") para un servidor espec\xedfico. Such a file can be provided by 4D technical services to monitor and study specific cases."]}),"\n",(0,n.jsx)(a.h3,{id:"pausar-no-registo",children:"Pausar no registo"}),"\n",(0,n.jsx)(a.p,{children:"This button suspends all currently logging operations started on the server. Esta funcionalidade pode ser \xfatil para aligeirar temporariamente as tarefas do servidor."}),"\n",(0,n.jsxs)(a.p,{children:["Cuando los registros se han puesto en pausa, el t\xedtulo del bot\xf3n cambia a ",(0,n.jsx)(a.strong,{children:"Reanudar registro"}),", para que pueda reanudar las operaciones de registro."]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Puede pausar y reanudar el registro utilizando el comando ",(0,n.jsx)(a.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},802900:function(e,a,i){i.d(a,{Z:function(){return r}});let r=i.p+"assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png"},497006:function(e,a,i){i.d(a,{Z:function(){return r}});let r=i.p+"assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png"},250065:function(e,a,i){i.d(a,{Z:function(){return t},a:function(){return s}});var r=i(667294);let n={},o=r.createContext(n);function s(e){let a=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);