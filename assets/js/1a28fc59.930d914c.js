"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23905"],{957234:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/on-exit-database-method","title":"On Exit database method","description":"On Exit database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-exit-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-exit-database-method","permalink":"/docs/20-R7/commands/on-exit-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-exit-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-exit-database-method","title":"On Exit database method","slug":"/commands/on-exit-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Drop database method","permalink":"/docs/20-R7/commands/on-drop-database-method"},"next":{"title":"On Host Database Event database method","permalink":"/docs/20-R7/commands/on-host-database-event-database-method"}}'),o=n("785893"),a=n("250065");let r={id:"on-exit-database-method",title:"On Exit database method",slug:"/commands/on-exit-database-method",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Note",id:"note",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"On Exit database method"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(t.table,{children:(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Does not require any parameters"}),(0,o.jsx)(t.th,{})]})})}),"\n",(0,o.jsx)(t.h4,{id:""}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is called once when you quit a database."]}),"\n",(0,o.jsx)(t.p,{children:"This method is used in the following 4D environments:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"4D in local mode"}),"\n",(0,o.jsx)(t.li,{children:"4D in remote mode"}),"\n",(0,o.jsx)(t.li,{children:"4D application compiled and merged with 4D VolumeDesktop"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note"}),": The ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is NOT invoked by 4D Server. You should use ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/on-server-shutdown-database-method",children:"On Server Shutdown database method"})," in this context."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is automatically invoked by 4D; unlike project methods, you cannot call this database method yourself by programming. You can however execute it from the Method editor. You can also use subroutines."]}),"\n",(0,o.jsx)(t.p,{children:"A database can be exited if any of the following occur:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The user selects the menu command ",(0,o.jsx)(t.strong,{children:"Quit"})," from the Design Environment ",(0,o.jsx)(t.strong,{children:"File"})," menu or from the Application environment (Quit standard action)"]}),"\n",(0,o.jsxs)(t.li,{children:["A call to the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/quit-4d",children:"QUIT 4D"})," command is issued"]}),"\n",(0,o.jsxs)(t.li,{children:["A 4D Plug-in issues a call to the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/quit-4d",children:"QUIT 4D"})," entry point"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"No matter how the exit from the database was initiated, 4D performs the following actions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If there is no ",(0,o.jsx)(t.strong,{children:"On Exit database method"}),", 4D aborts each running process one by one, without distinction. If the user is performing data entry, the records will be cancelled and not saved."]}),"\n",(0,o.jsxs)(t.li,{children:["If there is an ",(0,o.jsx)(t.strong,{children:"On Exit database method"}),", 4D starts executing this method within a newly created local process. Note that 4D will eventually quit\u2014the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," can perform all the cleanup or closing operations you want, but it cannot refuse the quit, and will at some point end."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"When 4D is about to quit, the program:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"asks running processes to abort their execution as soon as possible (taken into account only in processes executing 4D code)"}),"\n",(0,o.jsx)(t.li,{children:"sets their \u2018process aborted\u2019 flag"}),"\n",(0,o.jsxs)(t.li,{children:["awakes processes that have been delayed by ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/delay-process",children:"DELAY PROCESS"})," or other means."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["4D continues iterating processes while any process is still alive, for a maximum duration of 13 seconds. To respond to a quit action, we recommend to set a flag (such as an entry in the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/storage",children:"Storage"})," object) in the On Exit database method or in your custom quit method. It could make sense to loop in that method (max 10 seconds) to give time to your running processes to respond and quit themselves properly. It is not recommended to wait longer than 10 seconds, to avoid that 4D kills the process or the operating system kills the whole application."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is the perfect place to:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Save (locally, on disk) Preferences or Settings to be reused at the beginning of the next session in the"}),"\n",(0,o.jsx)(t.li,{children:"Perform any other actions that you want to be done automatically each time a database is exited"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," Don\u2019t forget that the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is a local/client process, so it cannot access the data file. Thus, if the ",(0,o.jsx)(t.strong,{children:"On Exit database method"}),' performs a query or a sort, a 4D Client that is about to quit will "freeze" and actually will not quit. If you need to access data when a client quits the application, create a new global process from within the ',(0,o.jsx)(t.strong,{children:"On Exit database method"}),", which will be able to access the data file. In this case, be sure that the new process will terminate correctly before the end of the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," execution (by using ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/storage",children:"Storage"})," or a shared object, for example)."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," In a client/server environment, the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," behaves differently depending on whether the user quits manually (through the ",(0,o.jsx)(t.strong,{children:"Quit"})," menu command or a call to the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/quit-4d",children:"QUIT 4D"})," command) or 4D Server is shutdown, which forces all clients to quit.",(0,o.jsx)(t.br,{}),"\nWhen 4D Server shuts down and provides a cutoff time (",(0,o.jsx)(t.em,{children:"e.g."})," 10 minutes), each connected client displays a warning message and if the user quits during the given time frame, the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is executed normally. However, in other cases (",(0,o.jsx)(t.em,{children:"e.g."})," the user does not respond in time, the server requests to quit immediately, or the client is manually disconnected by the Administrator), the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," is executed at the same time that the connection to the server is closed. As a result, the code in the ",(0,o.jsx)(t.strong,{children:"On Exit database method"})," can't launch another local or server process, and can't wait for other processes to be cancelled (nor can these processes continue to access the server). If it tries to do so, a network error is generated (such as 10001 or 10002) since the connection to the server is already closed."]}),"\n",(0,o.jsx)(t.h4,{id:"note",children:"Note"}),"\n",(0,o.jsxs)(t.p,{children:["The following example shows a typical case where you launch one or more background processes doing regular jobs, running endless, in the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"})," (or in the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/on-server-startup-database-method",children:"On Server Startup database method"}),"). A flag in the application's ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/storage",children:"Storage"})," object is used to tell them to finish \u2013 and to check if they have finished."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"})]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.global:=New shared object("ExitNow";False)\n\xa0End use\n\xa0$p:=New process("Serverjob";0;"Background job#1")\n\xa0$p1:=New process("Check_Invoices";0;"Background job#2")\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Here is an example of such a background method:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// do regular background jobs on the server\n\xa0While(Not(Bool(Storage.global.ExitNow)))\n\xa0\xa0// run accounting jobs, calculate data, etc\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;60*60)\xa0//sleep for one minute, then repeat loop\n\xa0End while\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"On Exit database method"}),":"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0Use(Storage.global)\n\xa0\xa0\xa0\xa0Storage.global.ExitNow:=True\xa0//ask all background workers to quit\n\xa0End use\n\xa0\n\xa0$time:=Current time\n\xa0$finished:=False\n\xa0While((($time+10)>(Current time+0))&(Not($finished)))&NBSP;\xa0// max 10 seconds\n\xa0\xa0\xa0\xa0$list:=Get process activity(Processes only)\xa0// get list of all processes\n\xa0\xa0\xa0\xa0$sublist:=$list.processes.query(\"name='Background job@' and state >=0\")\xa0//is there still a background job running?\n\xa0\xa0\xa0\xa0$finished:=($sublist.length=0)\n\xa0\xa0\xa0\xa0If($sublist.length>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For each($job;$sublist)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RESUME PROCESS($job.number)\xa0//make sure all processes are awake\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for each\n\xa0\xa0\xa0\xa0End if\n\xa0End while\n"})}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/20-R7/commands/quit-4d",children:"QUIT 4D"})]}),"\n",(0,o.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Command number"}),(0,o.jsx)(t.td,{children:"905252"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread safe"}),(0,o.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var s=n(667294);let o={},a=s.createContext(o);function r(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);