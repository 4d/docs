"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94477"],{321128:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/on-server-open-connection-database-method","title":"On Server Open Connection database method","description":"$1, $2, $3 -> On Server Open Connection database method -> $0","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-server-open-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-open-connection-database-method","permalink":"/docs/20-R7/commands/on-server-open-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-open-connection-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-open-connection-database-method","title":"On Server Open Connection database method","slug":"/commands/on-server-open-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Close Connection database method","permalink":"/docs/20-R7/commands/on-server-close-connection-database-method"},"next":{"title":"On Server Shutdown database method","permalink":"/docs/20-R7/commands/on-server-shutdown-database-method"}}'),o=t("785893"),s=t("250065");let a={id:"on-server-open-connection-database-method",title:"On Server Open Connection database method",slug:"/commands/on-server-open-connection-database-method",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"When is the On Server Open Connection Database Method Called?",id:"when-is-the-on-server-open-connection-database-method-called",level:4},{value:"How is the On Server Open Connection Database Method Called?",id:"how-is-the-on-server-open-connection-database-method-called",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"$1, $2, $3 -> On Server Open Connection database method -> $0"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$1"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"User ID number used internally by 4D Server to identify users"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$2"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Connection ID number used internally by 4D Server to identify a connection"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$3"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Obsolete: Always returns 0 (but must be declared)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$0"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"0 or omitted = connection accepted; other value = connection refused"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"when-is-the-on-server-open-connection-database-method-called",children:"When is the On Server Open Connection Database Method Called?"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," is called once on the Server machine each time a connection process is started by a 4D remote workstation. The ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," is NOT invoked by any 4D environment other than 4D Server."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," is called each time:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"a remote 4D connects (because the Application process starts)"}),"\n",(0,o.jsx)(n.li,{children:"a remote 4D opens the Design environment (because the Design process starts)"}),"\n",(0,o.jsxs)(n.li,{children:['a remote 4D starts a global process (whose name does not begin with "$") which requires the creation of a cooperative process on the server ',(0,o.jsx)(n.strong,{children:"(*)"}),". This process can be created using the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/new-process",children:"New process"})," command, a menu command or using the Execute Method dialog box."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In each case with a remote 4D, several processes are started\u2014One on the client machine and one or two others (as needed) on the server machine. On the client machine, the process executes code and send requests to 4D Server. On the server machine, the ",(0,o.jsx)(n.strong,{children:"4D Client Process"})," (preemptive process) maintains the database environment for the client process (i.e., current selections and locking of records for user processes) and replies to requests sent by the process running on the client machine. The ",(0,o.jsx)(n.strong,{children:"4D Client Database process"})," (cooperative process) is in charge of monitoring the corresponding 4D Client process."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"(*)"})," Beginning with 4D v13, for optimization purposes, the server processes (a preemptive process for access to the database engine and a cooperative process for access to the language) are only created when necessary when executing client-side code. For example, here are the details of a 4D code sequence running in a new client process:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// global process begins without a new process on the server, like a local process.\n\xa0CREATE RECORD([Table_1])\n\xa0[Table_1])field1_1:="Hello world"\n\xa0SAVE RECORD([Table_1])\xa0// creation here of preemptive process on server\n\xa0$serverTime:=Current time(*)\xa0// creation here of cooperative process on server\n\xa0\xa0// call to On Server Open Connection\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Important"}),": Web connections and SQL connections do not invoke the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"}),". When a Web browser connects to 4D Server, the ",(0,o.jsx)(n.em,{children:"On Web Authentication Database Method"})," (if any) and/or the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/on-web-connection-database-method",children:"On Web Connection database method"})," are invoked. When 4D Server receives an SQL query, the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/on-sql-authentication-database-method",children:"On SQL Authentication database method"})," (if one exists) is called. For more information, see the description of this database method in the 4D Language Reference manual."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Important"}),": When a Stored Procedure is started, the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," is NOT invoked. ",(0,o.jsx)(n.em,{children:"Stored Procedures"})," are server processes, not 4D Client processes. They execute code on the Server machine, but do not reply to requests exchanged by a 4D client (or other clients) and 4D Server."]}),"\n",(0,o.jsx)(n.h4,{id:"how-is-the-on-server-open-connection-database-method-called",children:"How is the On Server Open Connection Database Method Called?"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," is executed on the 4D Server machine within the 4D Client process that provoked the call to the method."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if a remote 4D connects to a 4D Server interpreted database, the user process, the Design process and the client registration process (by default) for that client are started. The On Server Open Connection database method is therefore executed three times in a row\u2014the first time within the Application process, the second time within the client registration process, and the third time within the Design process. If the three process are respectively the sixth, seventh and eighth process to be started on the Server machine, and if you call ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/current-process",children:"Current process"})," from within the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"}),", the first time ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/current-process",children:"Current process"})," returns 6, the second time 7 and the third time 8."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," executes on the Server machine. It executes within the 4D Client process running on the Server machine, independent of the process running on the client side. In addition, at the moment when the method is invoked, the 4D Client process has not yet been named (",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/process-info",children:"Process info"})," will not at this point return the name of the 4D Client process)."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," has no access to the process variable table of the process running on the Client side. This table resides on the Client machine, not on the Server machine."]}),"\n",(0,o.jsxs)(n.p,{children:["When the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," accesses a process variable, it works with a private and dynamically created process variable table for the 4D Client process."]}),"\n",(0,o.jsxs)(n.p,{children:["4D Server passes three Long Integer parameters to the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," and expects a Long Integer result. The method must therefore be explicitly declared with three Long Integer parameters as well as a Long Integer function result:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var $0;$1;$2;$3 : Integer\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you do not return a value in ",(0,o.jsx)(n.em,{children:"$0"}),", thereby leaving the variable undefined or initialized to zero, 4D Server assumes that the database method accepts the connection. If you do not accept the connection, you return a non-null value in ",(0,o.jsx)(n.em,{children:"$0"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This table details the information provided by the three parameters passed to the database method:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Parameter"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Description"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$1"}),(0,o.jsx)(n.td,{children:"User ID number used internally by 4D Server to identify users"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$2"}),(0,o.jsx)(n.td,{children:"Connection ID number used internally by 4D Server to identify a connection"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"$3"}),(0,o.jsx)(n.td,{children:"Obsolete: Always returns 0 but must be declared"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["These ID numbers are not directly usable as sources of information to be passed as, for example, parameters to a 4D command. However, they provide a way to uniquely identify a 4D Client process between the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," and the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"}),". At any moment of a 4D Server session, the combination of these values is unique. By storing this information in an interprocess array or a table, the two database methods can exchange information. In the example at the end of this section, the two database methods use this information to store the date and time of the beginning and end of a connection in the same record of a table."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsxs)(n.p,{children:["The following example shows how to maintain a log of the connections to the database using the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," and the ",(0,o.jsx)(n.strong,{children:"On Server Close Connection Database Method"}),". The ",(0,o.jsx)(n.em,{children:"[Server Log]"})," table (shown below) is used to keep track of the connection processes:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(323018).Z+"",width:"148",height:"239"})}),"\n",(0,o.jsxs)(n.p,{children:["The information stored in this table is managed by the ",(0,o.jsx)(n.strong,{children:"On Server Open Connection database method"})," and the ",(0,o.jsx)(n.strong,{children:"On Server Close Connection Database Method"})," listed here:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// On Server Open Connection Database Method\n\xa0var $0;$1;$2;$3 : Integer\n\xa0\xa0// Create a [Server Log] record\n\xa0CREATE RECORD([Server Log])\n\xa0[Server Log]Log ID:=Sequence number([Server Log])\n\xa0\xa0// Save the Log Date and Time\n\xa0[Server Log]Log Date:=Current date\n\xa0[Server Log]Log Time:=Current time\n\xa0\xa0// Save the connection information\n\xa0[Server Log]User ID:=$1\n\xa0[Server Log]Connection ID:=$2\n\xa0SAVE RECORD([Server Log])\n\xa0\xa0// Returns no error so that the connection can continue\n\xa0$0:=0\n\xa0\n\xa0\xa0// On Server Close Connection Database Method\n\xa0var $1;$2;$3 : Integer\n\xa0\xa0// Retrieve the [Server Log] record\n\xa0QUERY([Server Log];[Server Log]User ID=$1;*)\n\xa0QUERY([Server Log];\xa0&\xa0;[Server Log]Connection ID=$2;*)\n\xa0QUERY([Server Log];\xa0&\xa0;[Server Log]Process ID=0)\n\xa0\xa0// Save the Exit date and time\n\xa0[Server Log]Exit Date:=Current date\n\xa0[Server Log]Exit Time:=Current time\n\xa0\xa0// Save the process information\n\xa0[Server Log]Process ID:=Current process\n\xa0PROCESS PROPERTIES([Server Log]Process ID;$vsProcName;$vlProcState;$vlProcTime)\n\xa0[Server Log]Process Name:=$vsProcName\n\xa0SAVE RECORD([Server Log])\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here are some entries in the [Server Log] showing several remote connections:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(671553).Z+"",width:"802",height:"502"})}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"The following example prevents any new connection from 2 to 4 A.M."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// On Server Open Connection Database Method\n\xa0var $0;$1;$2;$3 : Integer\n\xa0\n\xa0If((?02:00:00?<=Current time)&(Current time\n"})}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"16001"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},323018:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},671553:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict69174.en-2fc0c880c73989faead4f4d21f6c134c.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let o={},s=r.createContext(o);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);