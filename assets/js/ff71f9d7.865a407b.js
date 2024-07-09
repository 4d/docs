/*! For license information please see ff71f9d7.865a407b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73451],{830578:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var n=o(474848),r=o(28453);const t={id:"processes",title:"Processes and Workers"},a=void 0,c={id:"Develop/processes",title:"Processes and Workers",description:"Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. These operations are called processes. Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task.",source:"@site/versioned_docs/version-20-R5/Develop/processes.md",sourceDirName:"Develop",slug:"/Develop/processes",permalink:"/docs/Develop/processes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Develop%2Fprocesses.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"processes",title:"Processes and Workers"},sidebar:"docs",previous:{title:"ZIPFolder",permalink:"/docs/API/ZipFolderClass"},next:{title:"Preemptive Processes",permalink:"/docs/Develop/preemptive-processes"}},i={},l=[{value:"Creating and clearing processes",id:"Creating-and-clearing-processes",level:2},{value:"Elements of a process",id:"Elements-of-a-process",level:2},{value:"Language elements",id:"Language-elements",level:3},{value:"Interface elements",id:"Interface-elements",level:3},{value:"Global and local processes",id:"Global-and-local-processes",level:2},{value:"4D Server",id:"4D-Server",level:3},{value:"Worker processes",id:"Worker-processes",level:2},{value:"Using workers",id:"Using-workers",level:3},{value:"Identifying Worker processes",id:"Identifying-Worker-processes",level:3},{value:"See also",id:"See-also",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Multi-tasking in 4D is the ability to have multiple operations that are executed simultaneously. These operations are called ",(0,n.jsx)(s.strong,{children:"processes"}),". Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct database task."]}),"\n",(0,n.jsxs)(s.p,{children:["If you write thread-safe code, you can create ",(0,n.jsx)(s.a,{href:"/docs/Develop/preemptive-processes",children:(0,n.jsx)(s.strong,{children:"preemptive processes"})})," that will be able to take advantage of multi-core computers in your compiled applications, for faster execution."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The 4D application creates processes for its own needs, for example the Main process to manage the display windows of the user interface, the Design process to manages the windows and editors of the Design environment (note that both are ",(0,n.jsx)(s.a,{href:"#worker-processes",children:"worker processes"}),"), the Web Server process, the Cache Manager process, the Indexing process, or the On Event Manager process."]})}),"\n",(0,n.jsx)(s.h2,{id:"Creating-and-clearing-processes",children:"Creating and clearing processes"}),"\n",(0,n.jsx)(s.p,{children:"There are several ways to create a new process:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Execute a method in the Design environment after checking the ",(0,n.jsx)(s.strong,{children:"New Process"}),' check box in the "Execute Method" dialog box. The method chosen in the Execute Method dialog box is the process method.']}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page317.html",children:(0,n.jsx)(s.code,{children:"New process"})})," command. The method passed as a parameter to the ",(0,n.jsx)(s.code,{children:"New process"})," command is the process method."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page373.html",children:(0,n.jsx)(s.code,{children:"Execute on server"})})," command in order to create a stored procedure on the server. The method passed as a parameter of the command is the process method."]}),"\n",(0,n.jsxs)(s.li,{children:["Use the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,n.jsx)(s.code,{children:"CALL WORKER"})})," command. If the worker process does not already exist, it is created."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["In Desktop applications, processes can be run by choosing menu commands. In the ",(0,n.jsx)(s.a,{href:"/docs/Menus/creating",children:"Menu Bar editor"}),", select the menu command and click the ",(0,n.jsx)(s.strong,{children:"Start a New Process"})," check box. The method associated with the menu command is the process method."]})}),"\n",(0,n.jsx)(s.p,{children:"A process can be cleared under the following conditions (the first two conditions are automatic):"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"When the process method finishes executing"}),"\n",(0,n.jsx)(s.li,{children:"When the user quits from the application"}),"\n",(0,n.jsxs)(s.li,{children:["If you stop the process procedurally or use the ",(0,n.jsx)(s.strong,{children:"Abort"})," button in the Debugger or in the Runtime Explorer"]}),"\n",(0,n.jsxs)(s.li,{children:["If you call the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,n.jsx)(s.code,{children:"KILL WORKER"})})," command (to delete a worker process only)."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"A process can create another process. Processes are not organized hierarchically\u2014all processes are equal, regardless of the process from which they have been created. Once the \u201cparent\u201d process creates a \u201cchild\u201d process, the child process will continue regardless of whether or not the parent process is still executing."}),"\n",(0,n.jsx)(s.h2,{id:"Elements-of-a-process",children:"Elements of a process"}),"\n",(0,n.jsx)(s.p,{children:"Each process contains specific elements that it can handle independently from other processes."}),"\n",(0,n.jsx)(s.h3,{id:"Language-elements",children:"Language elements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Variables: Every process has its own ",(0,n.jsx)(s.a,{href:"../Concepts/variables#process-variables",children:"process variables"}),". Process variables are recognized only within the domain of their native process."]}),"\n",(0,n.jsxs)(s.li,{children:["Process sets: Each process has its own process sets. ",(0,n.jsx)(s.code,{children:"LockedSet"})," is a process set. Process sets are cleared as soon as the process method ends."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"../Concepts/error-handling#installing-an-error-handling-method",children:"Error-handling method"}),": Each process can have its own error-handling method."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"../Debugging/debugger#calling-the-debugger",children:"Debugger window"}),": Each process can have its own Debugger window."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"Interface-elements",children:"Interface elements"}),"\n",(0,n.jsxs)(s.p,{children:["Interface elements are used in ",(0,n.jsx)(s.a,{href:"../category/desktop-applications",children:"Desktop applications"}),". They consist of the following:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/Menus/creating",children:"Menu bar"}),": Each process can have its own current menu bar. The menu bar of the frontmost process is the current menu bar for the application."]}),"\n",(0,n.jsx)(s.li,{children:"One or more windows: Each process can have more than one window open simultaneously. On the other hand, some processes have no windows at all."}),"\n",(0,n.jsx)(s.li,{children:"One active (frontmost) window: Even though a process can have several windows open simultaneously, each process has only one active window. To have more than one active window, you must start more than one process."}),"\n",(0,n.jsx)(s.li,{children:"Input and Output forms: Default input and output forms can be set procedurally for each table in each process."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Processes do not include menu bars by default which means that the standard ",(0,n.jsx)(s.strong,{children:"Edit"})," menu shortcuts (in particular, cut/copy/paste) are not available in process windows. When you call dialog boxes or 4D editors (form editor, query editor, Request, etc.) from a process, if you want for the user to be able to benefit from keyboard shortcuts like copy/paste, you need to make sure that the equivalent of an ",(0,n.jsx)(s.strong,{children:"Edit"})," menu is installed in the process."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/Develop/preemptive-processes",children:"Preemptive processes"})," and processes that are executed on the server (stored procedures) must not contain elements of the interface."]}),"\n"]})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.mdxadmonitiontitle,{}),(0,n.jsxs)(s.p,{children:["Each process also has a separate current selection and current record per table. For more information about these concepts, please refer to ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html",children:"doc.4d.com"}),"."]})]}),"\n",(0,n.jsx)(s.h2,{id:"Global-and-local-processes",children:"Global and local processes"}),"\n",(0,n.jsx)(s.p,{children:"Processes can be either global or local in scope. By default, all processes are global."}),"\n",(0,n.jsx)(s.p,{children:"Global processes can perform any operation, including accessing and manipulating data. In most cases, you will want to use global processes. Local processes should be used only for operations that do not access data. For example, you can use a local process to run an event-handling method or to control interface elements such as floating windows."}),"\n",(0,n.jsx)(s.p,{children:"You specify that a process is local in scope through its name. The name of local process must start with a dollar sign ($)."}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"If you attempt to access data from a local process, you access it though the Main process (process #1), risking conflicts with operations performed within that process."})}),"\n",(0,n.jsx)(s.h3,{id:"4D-Server",children:"4D Server"}),"\n",(0,n.jsxs)(s.p,{children:["Using local processes on the remote side for operations that do not require data access reserves more processing time for server-intensive tasks. When you create a process local to client (using ",(0,n.jsx)(s.code,{children:"New process"})," for example), it only exists on the remote side."]}),"\n",(0,n.jsx)(s.p,{children:'When you create a global process on the client, a "twin" process is created on the server, thus consuming server resources, to handle data access and database context. However, for optimization reason, the twin process is created only if necessary, i.e. the first time the global process needs to access data.'}),"\n",(0,n.jsx)(s.h2,{id:"Worker-processes",children:"Worker processes"}),"\n",(0,n.jsx)(s.p,{children:"Using a Worker process is a simple and powerful way to exchange information between processes. This feature is based upon an asynchronous messaging system that allows processes and forms to be called and asked to execute methods with parameters in their own context."}),"\n",(0,n.jsxs)(s.p,{children:['A worker can be "hired" by any process (using the ',(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,n.jsx)(s.code,{children:"CALL WORKER"})})," command) to execute project methods with parameters in their own context, thus allowing access to shared information."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["In Desktop applications, a project method can also be executed with parameters in the context of any form using the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1391.html",children:(0,n.jsx)(s.code,{children:"CALL FORM"})})," command."]})}),"\n",(0,n.jsx)(s.p,{children:"This functionality addresses the following needs regarding 4D interprocess communication:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Since they are supported by both cooperative and preemptive processes, they are the perfect solution for interprocess communication in ",(0,n.jsx)(s.a,{href:"/docs/Develop/preemptive-processes",children:"preemptive processes"})," (",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705",children:"interprocess variables are deprecated"})," and not allowed in preemptive processes)."]}),"\n",(0,n.jsx)(s.li,{children:"They provide a simple alternative to semaphores, which can be cumbersome to set and complex to use"}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["Although they have been designed mainly for interprocess communication in the context of preemptive processes, ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," and ",(0,n.jsx)(s.code,{children:"CALL FORM"})," can be used with cooperative processes."]})}),"\n",(0,n.jsx)(s.h3,{id:"Using-workers",children:"Using workers"}),"\n",(0,n.jsx)(s.p,{children:"A worker is used to ask a process to execute project methods. A worker consists of:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["a unique name (",(0,n.jsx)(s.em,{children:"warning: the name is case sensitive"}),"), also used to name its associated process"]}),"\n",(0,n.jsx)(s.li,{children:"an associated process, that may or may not exist at a given moment"}),"\n",(0,n.jsx)(s.li,{children:"a message box"}),"\n",(0,n.jsx)(s.li,{children:"a startup method (optional)"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You ask a worker to execute a project method by calling the ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," command. The worker and its message box are created at first use; its associated process is also automatically launched at first use. If the worker process dies thereafter, the message box remains open and any new message in the box will start a new worker process."]}),"\n",(0,n.jsx)(s.p,{children:"The following animation illustrates this sequence:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:o(857757).A+"",width:"1128",height:"684"})}),"\n",(0,n.jsxs)(s.p,{children:["Unlike a process created with the ",(0,n.jsx)(s.code,{children:"New process"})," command, a worker process ",(0,n.jsx)(s.strong,{children:"remains alive after the execution of the process method ends"}),". This means that all method executions for the same worker will be run in the same process, which maintains all process state information (process variables, current record and current selection, etc.). Consequently, methods executed successively will access and thus share the same information, allowing communication between processes. The worker's message box handles successive calls asynchronously."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CALL WORKER"})," encapsulates both the method name and command arguments in a message that is posted in the worker's message box. The worker process is then started, if it does not already exist, and asked to execute the message. This means that ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," will usually return before the method is actually executed (processing is asynchronous). For this reason, ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," does not return any value. If you need a worker to send information back to the process which called it (callback), you need to use ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," again to pass the information needed to the caller. Of course, in this case, the caller itself must be a worker."]}),"\n",(0,n.jsxs)(s.p,{children:["It is not possible to use ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," to execute a method in a process created by the ",(0,n.jsx)(s.code,{children:"New process"})," command. Only worker processes have a message box and can thus be called by ",(0,n.jsx)(s.code,{children:"CALL WORKER"}),". Note that a process created by ",(0,n.jsx)(s.code,{children:"New process"})," can call a worker, but cannot be called back."]}),"\n",(0,n.jsxs)(s.p,{children:["Worker processes can be created on 4D Server through stored procedures: for example, you can use the ",(0,n.jsx)(s.code,{children:"Execute on server"})," command to execute a method that calls the ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," command."]}),"\n",(0,n.jsxs)(s.p,{children:["A worker process is closed by a call to the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,n.jsx)(s.code,{children:"KILL WORKER"})})," command, which empties the worker's message box and asks the associated process to stop processing messages and to terminate its current execution as soon as the current task is finished."]}),"\n",(0,n.jsxs)(s.p,{children:["The startup method of a worker is the method used to create the worker (at first use). If ",(0,n.jsx)(s.code,{children:"CALL WORKER"})," is called with an empty ",(0,n.jsx)(s.em,{children:"method"})," parameter, then the startup method is automatically reused as method to execute."]}),"\n",(0,n.jsxs)(s.p,{children:["The main process created by 4D when opening a database for user and application modes is a worker process and can be called using ",(0,n.jsx)(s.code,{children:"CALL WORKER"}),". Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling ",(0,n.jsx)(s.code,{children:"CALL WORKER"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"Identifying-Worker-processes",children:"Identifying Worker processes"}),"\n",(0,n.jsxs)(s.p,{children:["All worker processes, except the main process, have the process type ",(0,n.jsx)(s.code,{children:"Worker process"})," (5) returned by the ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page336.html",children:(0,n.jsx)(s.code,{children:"PROCESS PROPERTIES"})})," command."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../ServerWindow/processes#process-type",children:"Specific icons"})," identify worker processes."]}),"\n",(0,n.jsx)(s.h3,{id:"See-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:["For more information, please see ",(0,n.jsx)(s.a,{href:"https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/",children:"this blog post"})," about how to use workers."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,s,o)=>{var n=o(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,o){var n,t={},l=null,d=null;for(n in void 0!==o&&(l=""+o),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,n)&&!i.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:r,type:e,key:l,ref:d,props:t,_owner:c.current}}s.Fragment=t,s.jsx=l,s.jsxs=l},474848:(e,s,o)=>{e.exports=o(221020)},857757:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/WorkerAnimation-1bf9fb3826432ab21e7c2bec57036409.gif"},28453:(e,s,o)=>{o.d(s,{R:()=>a,x:()=>c});var n=o(296540);const r={},t=n.createContext(r);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);