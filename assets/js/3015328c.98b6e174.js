"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95287"],{379091:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/quit-4d","title":"QUIT 4D","description":"QUIT 4D {( time )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/quit-4d.md","sourceDirName":"commands-legacy","slug":"/commands/quit-4d","permalink":"/docs/commands/quit-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquit-4d.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"quit-4d","title":"QUIT 4D","slug":"/commands/quit-4d","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLUGIN LIST","permalink":"/docs/commands/plugin-list"},"next":{"title":"REJECT NEW REMOTE CONNECTIONS","permalink":"/docs/commands/reject-new-remote-connections"}}'),i=n("785893"),r=n("250065");let o={id:"quit-4d",title:"QUIT 4D",slug:"/commands/quit-4d",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"With 4D local mode and remote mode",id:"with-4d-local-mode-and-remote-mode",level:5},{value:"With 4D Server (Stored procedure)",id:"with-4d-server-stored-procedure",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"QUIT 4D"})," {( ",(0,i.jsx)(t.em,{children:"time"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"time"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Time (sec) before quitting the server"})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"The QUIT 4D command exits the current 4D application and returns to the Desktop."}),"\n",(0,i.jsx)(t.p,{children:"The command processing is different whether it is executed on 4D (local or remote mode) or on 4D Server."}),"\n",(0,i.jsx)(t.h5,{id:"with-4d-local-mode-and-remote-mode",children:"With 4D local mode and remote mode"}),"\n",(0,i.jsx)(t.p,{children:"After you call QUIT 4D, the current process stops its execution, then 4D acts as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If there is an ",(0,i.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"}),", 4D starts executing this method within a newly created local process. For example, you can use this database method to inform other processes, via interprocess communication, that they must close (data entry) or stop the execution of operations started by the ",(0,i.jsx)(t.a,{href:"/docs/commands/on-startup-database-method",children:"On Startup database method"})," (connection from 4D to another database server). Note that 4D will eventually quit; the ",(0,i.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})," can perform all the cleanup or closing operations you wish, but cannot refuse the quit and will at some point end."]}),"\n",(0,i.jsxs)(t.li,{children:["If there is no ",(0,i.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"}),", 4D aborts each running process one by one, without distinction."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If the user is performing data entry, the records will be cancelled and not saved."}),"\n",(0,i.jsx)(t.p,{children:"If you want to let the user save data entry modifications made in the current open windows, you can use interprocess communication to signal all the other user processes that the database is going to be exited. To do so, you can adopt two strategies:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Perform these operations from within the current process before calling QUIT 4D"}),"\n",(0,i.jsxs)(t.li,{children:["Handle these operations from within the ",(0,i.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A third strategy is also possible. Before calling QUIT 4D, you check whether a window will need validation; if that is the case, you ask the user to validate or cancel these windows and then to choose Quit again. However, from a user interface standpoint, the first two strategies are preferable."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," The ",(0,i.jsx)(t.em,{children:"time"})," parameter cannot be used with 4D in local or remote mode."]}),"\n",(0,i.jsx)(t.h5,{id:"with-4d-server-stored-procedure",children:"With 4D Server (Stored procedure)"}),"\n",(0,i.jsxs)(t.p,{children:["The QUIT 4D command can be executed on the server machine, in a stored procedure. In this case, it accepts the ",(0,i.jsx)(t.em,{children:"time"})," optional parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"time"})," parameter allows setting a timeout to the 4D Server before the application actually quits, allowing client machines the time to disconnect. You must pass a value in seconds in ",(0,i.jsx)(t.em,{children:"time"}),". This parameter is only taken into consideration during an execution on the server machine. With 4D in local or remote mode, it is ignored."]}),"\n",(0,i.jsxs)(t.p,{children:["If you do not pass a parameter for ",(0,i.jsx)(t.em,{children:"time"}),", 4D Server will wait until all client machines are disconnected before quitting."]}),"\n",(0,i.jsx)(t.p,{children:"Unlike 4D, the processing of QUIT 4D by 4D Server is asynchronous: the method where the command is called is not interrupted after is has been executed."}),"\n",(0,i.jsxs)(t.p,{children:["If there is an ",(0,i.jsx)(t.em,{children:"On Server Shutdown Database Method"}),", it is executed after the delay set by the ",(0,i.jsx)(t.em,{children:"time"})," parameter, or after all clients have disconnected, depending on your parameters."]}),"\n",(0,i.jsx)(t.p,{children:"The action of the QUIT 4D command used in a stored procedure is the same as the one for the Quit command of the 4D Server File menu: it causes a dialog box to appear on each client machine indicating that the server is about to quit."}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"The project method listed here is associated with the Quit or Exit menu item in the File menu."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// M_FILE_QUIT Project Method\n\xa0\n\xa0CONFIRM("Are you sure that you want to quit?")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"291"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(667294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);