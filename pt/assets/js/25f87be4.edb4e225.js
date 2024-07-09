/*! For license information please see 25f87be4.edb4e225.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62558],{76032:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=o(474848),n=o(28453);const t={id:"processes",title:"Processos e Workers"},a=void 0,c={id:"Develop/processes",title:"Processos e Workers",description:"Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. Essas opera\xe7\xf5es s\xe3o chamadas processos. Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Develop/processes.md",sourceDirName:"Develop",slug:"/Develop/processes",permalink:"/docs/pt/20-R4/Develop/processes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Develop%2Fprocesses.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"processes",title:"Processos e Workers"},sidebar:"docs",previous:{title:"ZIPFolder",permalink:"/docs/pt/20-R4/API/ZipFolderClass"},next:{title:"Processos preemptivos",permalink:"/docs/pt/20-R4/Develop/preemptive-processes"}},i={},d=[{value:"Criar e limpar processos",id:"Criar-e-limpar-processos",level:2},{value:"Elementos de um processo",id:"Elementos-de-um-processo",level:2},{value:"Elementos da linguagem",id:"Elementos-da-linguagem",level:3},{value:"Elementos da interface",id:"Elementos-da-interface",level:3},{value:"Processos globais e locais",id:"Processos-globais-e-locais",level:2},{value:"4D Server",id:"4D-Server",level:3},{value:"Processos Worker",id:"Processos-Worker",level:2},{value:"Usando workers",id:"Usando-workers",level:3},{value:"Identifica\xe7\xe3o dos processos Worker",id:"Identifica\xe7\xe3o-dos-processos-Worker",level:3},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. Essas opera\xe7\xf5es s\xe3o chamadas ",(0,r.jsx)(s.strong,{children:"processos"}),". Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task."]}),"\n",(0,r.jsxs)(s.p,{children:["If you write thread-safe code, you can create ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R4/Develop/preemptive-processes",children:(0,r.jsx)(s.strong,{children:"preemptive processes"})})," that will be able to take advantage of multi-core computers in your compiled applications, for faster execution."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["The 4D application creates processes for its own needs, for example the Main process to manage the display windows of the user interface, the Design process to manages the windows and editors of the Design environment (note that both are ",(0,r.jsx)(s.a,{href:"#worker-processes",children:"worker processes"}),"), the Web Server process, the Cache Manager process, the Indexing process, or the On Event Manager process."]})}),"\n",(0,r.jsx)(s.h2,{id:"Criar-e-limpar-processos",children:"Criar e limpar processos"}),"\n",(0,r.jsx)(s.p,{children:"Existem v\xe1rias maneiras de criar um processo:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Execute a method in the Design environment after checking the ",(0,r.jsx)(s.strong,{children:"New Process"}),' check box in the "Execute Method" dialog box. The method chosen in the Execute Method dialog box is the process method.']}),"\n",(0,r.jsxs)(s.li,{children:["Use o comando [",(0,r.jsx)(s.code,{children:"New process"}),"] (",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page317.html",children:"https://doc.4d.com/4dv20/help/command/en/page317.html"}),"). The method passed as a parameter to the ",(0,r.jsx)(s.code,{children:"New process"})," command is the process method."]}),"\n",(0,r.jsxs)(s.li,{children:["Use o comando [",(0,r.jsx)(s.code,{children:"Execute on server"}),"] (",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page373.html",children:"https://doc.4d.com/4dv20/help/command/en/page373.html"}),") para criar um procedimento armazenado no servidor. O m\xe9todo passado como par\xe2metro do comando \xe9 o m\xe9todo processo."]}),"\n",(0,r.jsxs)(s.li,{children:["Use o comando [",(0,r.jsx)(s.code,{children:"CALL WORKER"}),"] (",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:"https://doc.4d.com/4dv20/help/command/en/page1389.html"}),"). Se o processo worker ainda n\xe3o existir, ser\xe1 criado."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["In Desktop applications, processes can be run by choosing menu commands. In the ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R4/Menus/creating",children:"Menu Bar editor"}),", select the menu command and click the ",(0,r.jsx)(s.strong,{children:"Start a New Process"})," check box. O m\xe9todo associado ao comando do menu \xe9 o m\xe9todo de processo."]})}),"\n",(0,r.jsx)(s.p,{children:"A process can be cleared under the following conditions (the first two conditions are automatic):"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Quando o m\xe9todo processo termina de ser executado"}),"\n",(0,r.jsx)(s.li,{children:"Quando o usu\xe1rio sai da aplica\xe7\xe3o"}),"\n",(0,r.jsxs)(s.li,{children:["If you stop the process procedurally or use the ",(0,r.jsx)(s.strong,{children:"Abort"})," button in the Debugger or in the Runtime Explorer"]}),"\n",(0,r.jsxs)(s.li,{children:["If you call the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,r.jsx)(s.code,{children:"KILL WORKER"})})," command (to delete a worker process only)."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Um processo pode criar outro processo. Processes are not organized hierarchically\u2014all processes are equal, regardless of the process from which they have been created. Once the \u201cparent\u201d process creates a \u201cchild\u201d process, the child process will continue regardless of whether or not the parent process is still executing."}),"\n",(0,r.jsx)(s.h2,{id:"Elementos-de-um-processo",children:"Elementos de um processo"}),"\n",(0,r.jsx)(s.p,{children:"Each process contains specific elements that it can handle independently from other processes."}),"\n",(0,r.jsx)(s.h3,{id:"Elementos-da-linguagem",children:"Elementos da linguagem"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Variables: Every process has its own ",(0,r.jsx)(s.a,{href:"../Concepts/variables#process-variables",children:"process variables"}),". Process variables are recognized only within the domain of their native process."]}),"\n",(0,r.jsxs)(s.li,{children:["Conjuntos de processo: cada processo tem seus pr\xf3prios conjuntos de processos. ",(0,r.jsx)(s.code,{children:"LockedSet"})," \xe9 um conjunto de processos. Os conjuntos processo s\xe3o apagados assim que o m\xe9todo processo termina."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../Concepts/error-handling#installing-an-error-handling-method",children:"Error-handling method"}),": Each process can have its own error-handling method."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"../Debugging/debugger#calling-the-debugger",children:"Debugger window"}),": Each process can have its own Debugger window."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"Elementos-da-interface",children:"Elementos da interface"}),"\n",(0,r.jsxs)(s.p,{children:["Interface elements are used in ",(0,r.jsx)(s.a,{href:"../category/desktop-applications",children:"Desktop applications"}),". Eles consistem nos seguintes:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/20-R4/Menus/creating",children:"Barra de menus"}),": cada processo pode ter sua pr\xf3pria barra de menu atual. The menu bar of the frontmost process is the current menu bar for the application."]}),"\n",(0,r.jsx)(s.li,{children:"One or more windows: Each process can have more than one window open simultaneously. Por outro lado, alguns processos n\xe3o t\xeam nenhuma janela."}),"\n",(0,r.jsx)(s.li,{children:"One active (frontmost) window: Even though a process can have several windows open simultaneously, each process has only one active window. To have more than one active window, you must start more than one process."}),"\n",(0,r.jsx)(s.li,{children:"Input and Output forms: Default input and output forms can be set procedurally for each table in each process."}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Processes do not include menu bars by default which means that the standard ",(0,r.jsx)(s.strong,{children:"Edit"})," menu shortcuts (in particular, cut/copy/paste) are not available in process windows. When you call dialog boxes or 4D editors (form editor, query editor, Request, etc.) from a process, if you want for the user to be able to benefit from keyboard shortcuts like copy/paste, you need to make sure that the equivalent of an ",(0,r.jsx)(s.strong,{children:"Edit"})," menu is installed in the process."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/20-R4/Develop/preemptive-processes",children:"Preemptive processes"})," and processes that are executed on the server (stored procedures) must not contain elements of the interface."]}),"\n"]})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Each process also has a separate current selection and current record per table. Para obter mais informa\xe7\xf5es sobre esses conceitos, consulte [doc.4d.com] (",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html",children:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html"}),")."]})}),"\n",(0,r.jsx)(s.h2,{id:"Processos-globais-e-locais",children:"Processos globais e locais"}),"\n",(0,r.jsx)(s.p,{children:"Os processos podem ser globais ou locais em seu escopo. Por padr\xe3o, todos os processos s\xe3o globais."}),"\n",(0,r.jsx)(s.p,{children:"Global processes can perform any operation, including accessing and manipulating data. Geralmente, voc\xea desejar\xe1 usar processos globais. Local processes should be used only for operations that do not access data. For example, you can use a local process to run an event-handling method or to control interface elements such as floating windows."}),"\n",(0,r.jsx)(s.p,{children:"Voc\xea especifica que um processo tem escopo local atrav\xe9s de seu nome. O nome do processo local deve come\xe7ar com um sinal de d\xf3lar ($)."}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"If you attempt to access data from a local process, you access it though the Main process (process #1), risking conflicts with operations performed within that process."})}),"\n",(0,r.jsx)(s.h3,{id:"4D-Server",children:"4D Server"}),"\n",(0,r.jsxs)(s.p,{children:["Using local processes on the remote side for operations that do not require data access reserves more processing time for server-intensive tasks. When you create a process local to client (using ",(0,r.jsx)(s.code,{children:"New process"})," for example), it only exists on the remote side."]}),"\n",(0,r.jsx)(s.p,{children:'When you create a global process on the client, a "twin" process is created on the server, thus consuming server resources, to handle data access and database context. However, for optimization reason, the twin process is created only if necessary, i.e. the first time the global process needs to access data.'}),"\n",(0,r.jsx)(s.h2,{id:"Processos-Worker",children:"Processos Worker"}),"\n",(0,r.jsx)(s.p,{children:"Using a Worker process is a simple and powerful way to exchange information between processes. This feature is based upon an asynchronous messaging system that allows processes and forms to be called and asked to execute methods with parameters in their own context."}),"\n",(0,r.jsxs)(s.p,{children:['A worker can be "hired" by any process (using the ',(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,r.jsx)(s.code,{children:"CALL WORKER"})})," command) to execute project methods with parameters in their own context, thus allowing access to shared information."]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["In Desktop applications, a project method can also be executed with parameters in the context of any form using the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1391.html",children:(0,r.jsx)(s.code,{children:"CALL FORM"})})," command."]})}),"\n",(0,r.jsx)(s.p,{children:"This functionality addresses the following needs regarding 4D interprocess communication:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Since they are supported by both cooperative and preemptive processes, they are the perfect solution for interprocess communication in ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R4/Develop/preemptive-processes",children:"preemptive processes"})," (",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705",children:"interprocess variables are deprecated"})," and not allowed in preemptive processes)."]}),"\n",(0,r.jsx)(s.li,{children:"They provide a simple alternative to semaphores, which can be cumbersome to set and complex to use"}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Although they have been designed mainly for interprocess communication in the context of preemptive processes, ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," and ",(0,r.jsx)(s.code,{children:"CALL FORM"})," can be used with cooperative processes."]})}),"\n",(0,r.jsx)(s.h3,{id:"Usando-workers",children:"Usando workers"}),"\n",(0,r.jsx)(s.p,{children:"Um worker \xe9 usado para solicitar a um processo que execute m\xe9todos projeto. Um worker consiste de:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["a unique name (",(0,r.jsx)(s.em,{children:"warning: the name is case sensitive"}),"), also used to name its associated process"]}),"\n",(0,r.jsx)(s.li,{children:"um processo associado, que pode ou n\xe3o existir em um determinado momento"}),"\n",(0,r.jsx)(s.li,{children:"uma caixa de mensagem"}),"\n",(0,r.jsx)(s.li,{children:"um m\xe9todo de inicializa\xe7\xe3o (opcional)"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["You ask a worker to execute a project method by calling the ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," command. The worker and its message box are created at first use; its associated process is also automatically launched at first use. If the worker process dies thereafter, the message box remains open and any new message in the box will start a new worker process."]}),"\n",(0,r.jsx)(s.p,{children:"A anima\xe7\xe3o a seguir ilustra esta sequ\xeancia:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:o(172675).A+"",width:"1128",height:"684"})}),"\n",(0,r.jsxs)(s.p,{children:["Unlike a process created with the ",(0,r.jsx)(s.code,{children:"New process"})," command, a worker process ",(0,r.jsx)(s.strong,{children:"remains alive after the execution of the process method ends"}),". This means that all method executions for the same worker will be run in the same process, which maintains all process state information (process variables, current record and current selection, etc.). Consequently, methods executed successively will access and thus share the same information, allowing communication between processes. A caixa de mensagens do worker lida com chamadas sucessivas de forma ass\xedncrona."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CALL WORKER"})," encapsulates both the method name and command arguments in a message that is posted in the worker's message box. The worker process is then started, if it does not already exist, and asked to execute the message. This means that ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," will usually return before the method is actually executed (processing is asynchronous). Por esse motivo, ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," n\xe3o retorna nenhum valor. If you need a worker to send information back to the process which called it (callback), you need to use ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," again to pass the information needed to the caller. \xc9 claro que, nesse caso, o pr\xf3prio chamador deve ser um worker."]}),"\n",(0,r.jsxs)(s.p,{children:["It is not possible to use ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," to execute a method in a process created by the ",(0,r.jsx)(s.code,{children:"New process"})," command. Only worker processes have a message box and can thus be called by ",(0,r.jsx)(s.code,{children:"CALL WORKER"}),". Note that a process created by ",(0,r.jsx)(s.code,{children:"New process"})," can call a worker, but cannot be called back."]}),"\n",(0,r.jsxs)(s.p,{children:["Worker processes can be created on 4D Server through stored procedures: for example, you can use the ",(0,r.jsx)(s.code,{children:"Execute on server"})," command to execute a method that calls the ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["A worker process is closed by a call to the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,r.jsx)(s.code,{children:"KILL WORKER"})})," command, which empties the worker's message box and asks the associated process to stop processing messages and to terminate its current execution as soon as the current task is finished."]}),"\n",(0,r.jsxs)(s.p,{children:["The startup method of a worker is the method used to create the worker (at first use). If ",(0,r.jsx)(s.code,{children:"CALL WORKER"})," is called with an empty ",(0,r.jsx)(s.em,{children:"method"})," parameter, then the startup method is automatically reused as method to execute."]}),"\n",(0,r.jsxs)(s.p,{children:["The main process created by 4D when opening a database for user and application modes is a worker process and can be called using ",(0,r.jsx)(s.code,{children:"CALL WORKER"}),". Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling ",(0,r.jsx)(s.code,{children:"CALL WORKER"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Identifica\xe7\xe3o-dos-processos-Worker",children:"Identifica\xe7\xe3o dos processos Worker"}),"\n",(0,r.jsxs)(s.p,{children:["All worker processes, except the main process, have the process type ",(0,r.jsx)(s.code,{children:"Worker process"})," (5) returned by the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page336.html",children:(0,r.jsx)(s.code,{children:"PROCESS PROPERTIES"})})," command."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"../ServerWindow/processes#process-type",children:"Specific icons"})," identify worker processes."]}),"\n",(0,r.jsx)(s.h3,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:["Para obter mais informa\xe7\xf5es, consulte ",(0,r.jsx)(s.a,{href:"https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/",children:"este post"})," sobre como usar os workers."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,o)=>{var r=o(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,o){var r,t={},d=null,l=null;for(r in void 0!==o&&(d=""+o),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)a.call(s,r)&&!i.hasOwnProperty(r)&&(t[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===t[r]&&(t[r]=s[r]);return{$$typeof:n,type:e,key:d,ref:l,props:t,_owner:c.current}}s.Fragment=t,s.jsx=d,s.jsxs=d},474848:(e,s,o)=>{e.exports=o(221020)},172675:(e,s,o)=>{o.d(s,{A:()=>r});const r=o.p+"assets/images/WorkerAnimation-1bf9fb3826432ab21e7c2bec57036409.gif"},28453:(e,s,o)=>{o.d(s,{R:()=>a,x:()=>c});var r=o(296540);const n={},t=r.createContext(n);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);