/*! For license information please see d46ff7b0.c0f04235.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42080],{75215:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=s(474848),n=s(28453);const a={id:"processes",title:"Procesos y Workers"},c=void 0,i={id:"Develop/processes",title:"Procesos y Workers",description:"Multitarea en 4D es la posibilidad de ejecutar simult\xe1neamente varias operaciones de bases de datos distintas. Estas operaciones son llamadas procesos. M\xfaltiples procesos equivalen a tener m\xfaltiples usuarios trabajando en el mismo ordenador, cada uno trabajando en su propia tarea. Esto significa principalmente que un m\xe9todo puede ser ejecutado como una tarea distinta de base de datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Develop/processes.md",sourceDirName:"Develop",slug:"/Develop/processes",permalink:"/docs/es/20-R5/Develop/processes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Develop%2Fprocesses.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"processes",title:"Procesos y Workers"},sidebar:"docs",previous:{title:"ZIPFolder",permalink:"/docs/es/20-R5/API/ZipFolderClass"},next:{title:"Procesos apropiativos",permalink:"/docs/es/20-R5/Develop/preemptive-processes"}},l={},d=[{value:"Crear y borrar procesos",id:"crear-y-borrar-procesos",level:2},{value:"Elementos de un proceso",id:"elementos-de-un-proceso",level:2},{value:"Elementos del lenguaje",id:"elementos-del-lenguaje",level:3},{value:"Elementos de la interfaz",id:"elementos-de-la-interfaz",level:3},{value:"Procesos globales y locales",id:"procesos-globales-y-locales",level:2},{value:"4D Server",id:"4d-server",level:3},{value:"Procesos worker",id:"procesos-worker",level:2},{value:"Utilizar workers",id:"utilizar-workers",level:3},{value:"Identificaci\xf3n de los procesos workers",id:"identificaci\xf3n-de-los-procesos-workers",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function t(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["Multitarea en 4D es la posibilidad de ejecutar simult\xe1neamente varias operaciones de bases de datos distintas. Estas operaciones son llamadas ",(0,r.jsx)(o.strong,{children:"procesos"}),". M\xfaltiples procesos equivalen a tener m\xfaltiples usuarios trabajando en el mismo ordenador, cada uno trabajando en su propia tarea. Esto significa principalmente que un m\xe9todo puede ser ejecutado como una tarea distinta de base de datos."]}),"\n",(0,r.jsxs)(o.p,{children:["Si escribe c\xf3digo hilo seguro, puede crear ",(0,r.jsx)(o.a,{href:"/docs/es/20-R5/Develop/preemptive-processes",children:(0,r.jsx)(o.strong,{children:"procesos apropiativos"})})," que podr\xe1n aprovechar los ordenadores multi n\xfacleo en sus aplicaciones compiladas, para una ejecuci\xf3n m\xe1s r\xe1pida."]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["La aplicaci\xf3n 4D crea procesos para sus propias necesidades, por ejemplo el proceso Principal para gestionar las ventanas de visualizaci\xf3n de la interfaz de usuario, el proceso de Dise\xf1o para gestionar las ventanas y editores del entorno de Dise\xf1o (note que ambos son ",(0,r.jsx)(o.a,{href:"#worker-processes",children:"procesos worker"}),"), el proceso Servidor Web, el proceso Gestor de Cach\xe9, el proceso de Indexaci\xf3n, o el proceso On Event Manager."]})}),"\n",(0,r.jsx)(o.h2,{id:"crear-y-borrar-procesos",children:"Crear y borrar procesos"}),"\n",(0,r.jsx)(o.p,{children:"Hay varias formas de crear un nuevo proceso:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:'Ejecute un m\xe9todo en el entorno Dise\xf1o despu\xe9s de seleccionar la casilla **Nuevo proceso ** en la caja de di\xe1logo "Ejecutar M\xe9todo". El m\xe9todo elegido en la caja de di\xe1logo Ejecutar m\xe9todo es el m\xe9todo proceso.'}),"\n",(0,r.jsxs)(o.li,{children:["Utilice el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page317.html",children:(0,r.jsx)(o.code,{children:"New process"})}),". El m\xe9todo pasado como un par\xe1metro al comando ",(0,r.jsx)(o.code,{children:"New process"})," es el m\xe9todo proceso."]}),"\n",(0,r.jsxs)(o.li,{children:["Utilice el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page373.html",children:(0,r.jsx)(o.code,{children:"Execute on server"})})," para crear un procedimiento almacenado en el servidor. El m\xe9todo pasado como par\xe1metro del comando es el m\xe9todo proceso."]}),"\n",(0,r.jsxs)(o.li,{children:["Utilice el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,r.jsx)(o.code,{children:"CALL WORKER"})}),". Si el proceso del worker no existe, se crea."]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["En las aplicaciones de escritorio, los procesos pueden ejecutarse seleccionando comandos de men\xfa. En el ",(0,r.jsx)(o.a,{href:"/docs/es/20-R5/Menus/creating",children:"Editor de Barra de men\xfa"}),", seleccione el comando de men\xfa y haga clic en la casilla de verificaci\xf3n ",(0,r.jsx)(o.strong,{children:"Iniciar un nuevo proceso"}),". El m\xe9todo asociado al comando de men\xfa es el m\xe9todo de proceso."]})}),"\n",(0,r.jsx)(o.p,{children:"Un proceso puede borrarse en las siguientes condiciones (las dos primeras son autom\xe1ticas):"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Cuando el m\xe9todo proceso termina de ejecutarse"}),"\n",(0,r.jsx)(o.li,{children:"Cuando el usuario sale de la aplicaci\xf3n"}),"\n",(0,r.jsxs)(o.li,{children:["Si detienes el proceso de forma formal o utiliza el bot\xf3n ",(0,r.jsx)(o.strong,{children:"Abortar"})," en el depurador o en el Explorador de Ejecuci\xf3n"]}),"\n",(0,r.jsxs)(o.li,{children:["Si llama al comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,r.jsx)(o.code,{children:"KILL WORKER"})})," (s\xf3lo para borrar un proceso worker)."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:'Un proceso puede crear otro proceso. Los procesos no est\xe1n organizados jer\xe1rquicamente: todos los procesos son iguales, independientemente del proceso a partir del cual se hayan creado. Una vez que el proceso "padre" crea un proceso "hijo", el proceso hijo continuar\xe1 independientemente de si el proceso padre sigue ejecut\xe1ndose o no.'}),"\n",(0,r.jsx)(o.h2,{id:"elementos-de-un-proceso",children:"Elementos de un proceso"}),"\n",(0,r.jsx)(o.p,{children:"Cada proceso contiene elementos espec\xedficos que puede manejar independientemente de otros procesos."}),"\n",(0,r.jsx)(o.h3,{id:"elementos-del-lenguaje",children:"Elementos del lenguaje"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Variables: cada proceso tiene sus propias ",(0,r.jsx)(o.a,{href:"../Concepts/variables#variables-de-proceso",children:"variables de proceso"}),". Las variables proceso solo se reconocen dentro del dominio de su proceso nativo."]}),"\n",(0,r.jsxs)(o.li,{children:["Conjuntos de proceso: cada proceso tiene sus propios conjuntos de proceso. ",(0,r.jsx)(o.code,{children:"LockedSet"})," es un conjunto de procesos. Los conjuntos proceso se borran en cuanto termina el m\xe9todo proceso."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"../Concepts/error-handling#installing-an-error-handling-method",children:"M\xe9todo de gesti\xf3n de errores"}),": cada proceso puede tener su propio m\xe9todo de gesti\xf3n de errores."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"../Debugging/debugger#calling-the-debugger",children:"Ventana del depurador"}),": cada proceso puede tener su propia ventana Depurador."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"elementos-de-la-interfaz",children:"Elementos de la interfaz"}),"\n",(0,r.jsxs)(o.p,{children:["Los elementos de interfaz se utilizan en ",(0,r.jsx)(o.a,{href:"../category/desktop-applications",children:"Aplicaciones de escritorio"}),". Consisten en lo siguiente:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/es/20-R5/Menus/creating",children:"Barra de men\xfas"}),": cada proceso puede tener su propia barra de men\xfas actual. La barra de men\xfas del proceso del primer plano es la barra de men\xfas actual de la aplicaci\xf3n."]}),"\n",(0,r.jsx)(o.li,{children:"Una o m\xe1s ventanas: cada proceso puede tener varias ventanas abiertas simult\xe1neamente. Por el contrario, algunos procesos no tienen ventanas."}),"\n",(0,r.jsx)(o.li,{children:"Una ventana activa (primer plano): aunque un proceso puede tener varias ventanas abiertas simult\xe1neamente, cada proceso tiene s\xf3lo una ventana activa. Para tener m\xe1s de una ventana activa, debe iniciar m\xe1s de un proceso."}),"\n",(0,r.jsx)(o.li,{children:"Formularios de entrada y salida: los formularios de entrada y salida predeterminados pueden definirse por procedimiento para cada tabla de cada proceso."}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Los procesos no incluyen barras de men\xfa por defecto, lo que significa que los atajos de men\xfa est\xe1ndar de ",(0,r.jsx)(o.strong,{children:"Edici\xf3n"})," (en particular, cortar/copiar/pegar) no est\xe1n disponibles en las ventanas de proceso. Cuando se llama a los di\xe1logos o a los editores 4D (editor de formularios, editor de b\xfasquedas, Request, etc.) desde un proceso, si desea que el usuario pueda beneficiarse de atajos de teclado como copiar/pegar, debe asegurarse de que el equivalente a un men\xfa ",(0,r.jsx)(o.strong,{children:"Edici\xf3n"})," est\xe9 instalado en el proceso."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/es/20-R5/Develop/preemptive-processes",children:"Procesos apropiativos"})," y los procesos que se ejecutan en el servidor (procedimientos almacenados) no deben contener elementos de la interfaz."]}),"\n"]})}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["Cada proceso tiene tambi\xe9n una selecci\xf3n actual y un registro actual por tabla. Para m\xe1s informaci\xf3n sobre estos conceptos, consulte ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html",children:"doc.4d.com"}),"."]})}),"\n",(0,r.jsx)(o.h2,{id:"procesos-globales-y-locales",children:"Procesos globales y locales"}),"\n",(0,r.jsx)(o.p,{children:"El alcance de los procesos puede ser local o global. Por defecto, todos los procesos son globales."}),"\n",(0,r.jsx)(o.p,{children:"Los procesos globales pueden realizar cualquier operaci\xf3n, incluido el acceso y la manipulaci\xf3n de datos. En la mayor\xeda de los casos, querr\xe1 utilizar procesos globales. Los procesos locales s\xf3lo deben utilizarse para operaciones que no accedan a datos. Por ejemplo, puede utilizar un proceso local para ejecutar un m\xe9todo de gesti\xf3n de eventos o para controlar elementos de la interfaz como ventanas flotantes."}),"\n",(0,r.jsx)(o.p,{children:"Especifica que un proceso es local en alcance a trav\xe9s de su nombre. El nombre del proceso local debe comenzar con un signo de d\xf3lar ($)."}),"\n",(0,r.jsx)(o.admonition,{type:"warning",children:(0,r.jsx)(o.p,{children:"Si intenta acceder a los datos desde un proceso local, accede a los datos por medio del proceso principal (proceso #1) y toma el riesgo de entrar en conflicto con las operaciones efectuadas en ese proceso."})}),"\n",(0,r.jsx)(o.h3,{id:"4d-server",children:"4D Server"}),"\n",(0,r.jsx)(o.p,{children:"El uso de procesos locales del lado del Cliente para operaciones que no requieran acceso a datos, reserva m\xe1s tiempo de procesamiento para tareas que requieren el servidor intensivamente. Cuando crea un proceso local para el cliente (utilizando por ejemplo New process), solo existe del lado del cliente."}),"\n",(0,r.jsx)(o.p,{children:'Cuando crea un proceso global, se crea un proceso "doble" en el servidor, que consume recursos del servidor, para manejar el acceso a los datos y el contexto de la base de datos. Sin embargo, por razones de optimizaci\xf3n, el proceso doble se crea solo si es necesario, es decir, la primera vez que el proceso global necesita acceder a los datos.'}),"\n",(0,r.jsx)(o.h2,{id:"procesos-worker",children:"Procesos worker"}),"\n",(0,r.jsx)(o.p,{children:"Un proceso Worker es una forma sencilla y poderosa de intercambiar informaci\xf3n entre procesos. Esta funcionalidad se basa en un sistema de mensajer\xeda as\xedncrono que permite a los procesos y formularios ser llamados y se les pide ejecutar m\xe9todos con par\xe1metros en su propio contexto."}),"\n",(0,r.jsxs)(o.p,{children:['Un worker puede ser "contratado" por cualquier proceso (utilizando el comando ',(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,r.jsx)(o.code,{children:"CALL WORKER"})}),") para ejecutar m\xe9todos de proyecto con par\xe1metros en su propio contexto, permitiendo as\xed el acceso a informaci\xf3n compartida."]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["En aplicaciones de escritorio, un m\xe9todo de proyecto tambi\xe9n puede ser ejecutado con par\xe1metros en el contexto de cualquier formulario utilizando el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1391.html",children:(0,r.jsx)(o.code,{children:"CALL FORM"})}),"."]})}),"\n",(0,r.jsx)(o.p,{children:"Esta funcionalidad responde a las siguientes necesidades en materia de comunicaci\xf3n entre procesos en 4D:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Ya que son compatibles con ambos procesos cooperativos y apropiativos, son la soluci\xf3n perfecta para la comunicaci\xf3n entre procesos en los ",(0,r.jsx)(o.a,{href:"/docs/es/20-R5/Develop/preemptive-processes",children:"procesos apropiativos"})," (",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705",children:"las variables interproceso son obsoletas"})," y no est\xe1n permitidas en los procesos apropiativos)."]}),"\n",(0,r.jsx)(o.li,{children:"Ofrecen una alternativa sencilla a los sem\xe1foros, que puede ser engorrosos de definir y dif\xedciles de usar"}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["Aunque se han dise\xf1ado principalmente para la comunicaci\xf3n entre procesos en el contexto de los procesos apropiativos, ",(0,r.jsx)(o.code,{children:"CALL WORKER"})," y",(0,r.jsx)(o.code,{children:"CALL FORM"})," se pueden utilizar con los procesos cooperativos."]})}),"\n",(0,r.jsx)(o.h3,{id:"utilizar-workers",children:"Utilizar workers"}),"\n",(0,r.jsx)(o.p,{children:"Un worker se utiliza para pedir a un proceso que ejecute m\xe9todos proyecto. Un worker consiste de:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["un nombre \xfanico (",(0,r.jsx)(o.em,{children:"atenci\xf3n: el nombre es sensible a may\xfasculas"}),"), tambi\xe9n utilizado para nombrar su proceso asociado"]}),"\n",(0,r.jsx)(o.li,{children:"un proceso asociado, que puede existir o no en un momento dado"}),"\n",(0,r.jsx)(o.li,{children:"un buz\xf3n de mensajes"}),"\n",(0,r.jsx)(o.li,{children:"un m\xe9todo de inicio (opcional)"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Se le pide a un worker ejecutar un m\xe9todo proyecto mediante una llamada al comando ",(0,r.jsx)(o.code,{children:"CALL WORKER"}),". El worker y su buz\xf3n de mensajes se crean en el primer uso; su proceso asociado tambi\xe9n se ejecuta autom\xe1ticamente en el primer uso. Si el proceso worker muere luego, el buz\xf3n de mensajes permanece abierto y cualquier nuevo mensaje en el buz\xf3n iniciar\xe1 un nuevo proceso worker."]}),"\n",(0,r.jsx)(o.p,{children:"La siguiente animaci\xf3n ilustra esta secuencia:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:s(444486).A+"",width:"1128",height:"684"})}),"\n",(0,r.jsxs)(o.p,{children:["A diferencia de un proceso creado con el comando ",(0,r.jsx)(o.code,{children:"New process"}),", un proceso worker ",(0,r.jsx)(o.strong,{children:"permanece vivo despu\xe9s de que termine la ejecuci\xf3n del m\xe9todo proceso"}),". Esto significa que todas las ejecuciones del m\xe9todo para el mismo worker se llevar\xe1n a cabo en el mismo proceso, que mantiene toda la informaci\xf3n de estado del proceso (variables de proceso, registro actual y selecci\xf3n actual...). En consecuencia, los m\xe9todos ejecutados sucesivamente tendr\xe1n acceso y de este modo compartir\xe1n la misma informaci\xf3n, lo que permite las comunicaciones entre procesos. El buz\xf3n de mensajes del worker maneja las llamadas sucesivas de forma as\xedncrona."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"CALL WORKER"})," encapsula tanto el nombre del m\xe9todo como los argumentos del comando en un mensaje que se publica en el buz\xf3n de mensajes del worker. El proceso worker se inicia a continuaci\xf3n, si no existe, y se pide ejecutar el mensaje. Esto significa que ",(0,r.jsx)(o.code,{children:"CALL WORKER"})," normalmente volver\xe1 antes de que el m\xe9todo se ejecute realmente (el procesamiento es as\xedncrono). Por esta raz\xf3n, ",(0,r.jsx)(o.code,{children:"CALL WORKER"})," no devuelve ning\xfan valor. Si necesita un worker para enviar informaci\xf3n al proceso que lo llam\xf3 (retrollamada), es necesario utilizar ",(0,r.jsx)(o.code,{children:"CALL WORKER"})," nuevamente para pasar al llamante la informaci\xf3n necesaria. Por supuesto, en este caso, el propio llamante debe ser un worker."]}),"\n",(0,r.jsxs)(o.p,{children:["No es posible utilizar ",(0,r.jsx)(o.code,{children:"CALL WORKER"})," para ejecutar un m\xe9todo en un proceso creado por el comando ",(0,r.jsx)(o.code,{children:"New process"}),". S\xf3lo los procesos worker tienen un buz\xf3n de mensajes y, por tanto, pueden ser llamados por ",(0,r.jsx)(o.code,{children:"CALL WORKER"}),". Tenga en cuenta que un proceso creado por ",(0,r.jsx)(o.code,{children:"New process"})," puede llamar a un worker, pero no puede llamarse de nuevo."]}),"\n",(0,r.jsxs)(o.p,{children:["Los procesos worker se pueden crear en 4D Server a trav\xe9s de procedimientos almacenados: por ejemplo, puede utilizar el comando ",(0,r.jsx)(o.code,{children:"Execute on server"})," para ejecutar un m\xe9todo que llama al comando ",(0,r.jsx)(o.code,{children:"CALL WORKER"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Un proceso worker se cierra mediante una llamada al comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,r.jsx)(o.code,{children:"KILL WORKER"})}),", que vac\xeda el buz\xf3n de mensajes del worker y pide al proceso asociado que deje de procesar mensajes y termine su ejecuci\xf3n actual en cuanto termine la tarea actual."]}),"\n",(0,r.jsxs)(o.p,{children:["El m\xe9todo de inicio de un worker es el m\xe9todo utilizado para crear el worker (primer uso). Si ",(0,r.jsx)(o.code,{children:"CALL WORKER"})," es llamado con un par\xe1metro ",(0,r.jsx)(o.em,{children:"method"})," vac\xedo, entonces el m\xe9todo de inicio se reutiliza autom\xe1ticamente como m\xe9todo para ejecutar."]}),"\n",(0,r.jsxs)(o.p,{children:["El proceso principal creado por 4D al abrir una base de datos para los modos usuario y aplicaci\xf3n es un proceso worker y puede ser llamado utilizando ",(0,r.jsx)(o.code,{children:"CALL WORKER"}),". Tenga en cuenta que el nombre del proceso principal puede variar dependiendo del idioma de localizaci\xf3n de 4D, pero siempre tiene el n\xfamero de proceso 1; como resultado, es m\xe1s conveniente designarlo por el n\xfamero de proceso en lugar del nombre de proceso cuando se llama a ",(0,r.jsx)(o.code,{children:"CALL WORKER"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"identificaci\xf3n-de-los-procesos-workers",children:"Identificaci\xf3n de los procesos workers"}),"\n",(0,r.jsxs)(o.p,{children:["Todos los procesos worker, excepto el proceso principal, tienen el tipo de proceso ",(0,r.jsx)(o.code,{children:"Worker process"})," (5) devuelto por el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page336.html",children:(0,r.jsx)(o.code,{children:"PROCESS PROPERTIES"})}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"../ServerWindow/processes#process-type",children:"Iconos espec\xedficos"})," identifican los procesos worker."]}),"\n",(0,r.jsx)(o.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,r.jsx)(o.a,{href:"https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/",children:"este art\xedculo de blog"})," sobre c\xf3mo utilizar los workers."]})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},221020:(e,o,s)=>{var r=s(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,s){var r,a={},d=null,t=null;for(r in void 0!==s&&(d=""+s),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(t=o.ref),o)c.call(o,r)&&!l.hasOwnProperty(r)&&(a[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return{$$typeof:n,type:e,key:d,ref:t,props:a,_owner:i.current}}o.Fragment=a,o.jsx=d,o.jsxs=d},474848:(e,o,s)=>{e.exports=s(221020)},444486:(e,o,s)=>{s.d(o,{A:()=>r});const r=s.p+"assets/images/WorkerAnimation-1bf9fb3826432ab21e7c2bec57036409.gif"},28453:(e,o,s)=>{s.d(o,{R:()=>c,x:()=>i});var r=s(296540);const n={},a=r.createContext(n);function c(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);