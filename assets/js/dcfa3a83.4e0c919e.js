"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48494"],{396230:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>a,metadata:()=>o,assets:()=>h,toc:()=>i,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/on-server-shutdown-database-method","title":"On Server Shutdown database method","description":"On Server Shutdown database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-server-shutdown-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-shutdown-database-method","permalink":"/docs/commands/on-server-shutdown-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-shutdown-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-shutdown-database-method","title":"On Server Shutdown database method","slug":"/commands/on-server-shutdown-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Open Connection database method","permalink":"/docs/commands/on-server-open-connection-database-method"},"next":{"title":"On Server Startup database method","permalink":"/docs/commands/on-server-startup-database-method"}}'),s=n("785893"),r=n("250065");let a={id:"on-server-shutdown-database-method",title:"On Server Shutdown database method",slug:"/commands/on-server-shutdown-database-method",displayed_sidebar:"docs"},d=void 0,h={},i=[];function c(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"On Server Shutdown database method"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Does not require any parameters"}),(0,s.jsx)(t.th,{})]})})}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsx)(t.p,{children:"The On Server Shutdown database method is called once on the server machine when the current database is closed on 4D Server. The On Server Shutdown database method is NOT invoked by any 4D environment other than 4D Server."}),"\n",(0,s.jsxs)(t.p,{children:["To close the current database on the server, you can select the ",(0,s.jsx)(t.strong,{children:"Close Database..."}),"  menu command on the server. You can also choose the ",(0,s.jsx)(t.strong,{children:"Quit"})," command or call the ",(0,s.jsx)(t.a,{href:"/docs/commands/quit-4d",children:"QUIT 4D"})," command within a stored procedure executed on the server."]}),"\n",(0,s.jsx)(t.p,{children:"When the exit from the database is initiated, 4D performs the following actions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If there is no On Server Shutdown database method, 4D Server aborts each running process one by one, without distinction."}),"\n",(0,s.jsx)(t.li,{children:"If there is an On Server Shutdown database method, 4D Server starts executing this method within a newly created local process. You can therefore use this database method to inform other processes, via interprocess communication, that they must stop executing. Note that 4D Server will eventually quit \u2014 the On Server Shutdown database method can perform all the cleanup or closing operations you want, but it cannot refuse the quit, and will at some point end."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The On Server Shutdown database method is the perfect place to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Stop store procedures automatically started when the database was opened."}),"\n",(0,s.jsxs)(t.li,{children:["Save (locally, on disk) Preferences or Settings to be reused at the beginning of the next session in the ",(0,s.jsx)(t.em,{children:"On Server Startup Database Method"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Perform any other actions that you want to be done automatically each time a database is exited."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Warning:"})," If you use the On Server Shutdown database method to close stored procedures, keep in mind that the server quits once the On Server Shutdown database method (and not the stored procedures) is executed. If some stored procedures are still running at this point, they will be killed.",(0,s.jsx)(t.br,{}),"\nConsequently, if you want to make sure that the stored procedures are fully executed before being killed by the server, the On Server Shutdown database method should indicate to the stored procedures that they must end their execution (for example, using an interprocess variable) and should allow them to close (through a x seconds loop or another interprocess variable)."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want code to be executed automatically on a client machine when a remote 4D stops connecting to the server, use the ",(0,s.jsx)(t.a,{href:"/docs/commands/semaphore",children:"Semaphore"}),"."]})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var o=n(667294);let s={},r=o.createContext(s);function a(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);