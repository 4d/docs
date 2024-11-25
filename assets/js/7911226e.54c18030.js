"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32796"],{156428:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/sql-login","title":"SQL LOGIN","description":"SQL LOGIN {( dataEntry ; userName ; password ; * )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/sql-login.md","sourceDirName":"commands-legacy","slug":"/commands/sql-login","permalink":"/docs/commands/sql-login","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-login.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-login","title":"SQL LOGIN","slug":"/commands/sql-login","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL LOAD RECORD","permalink":"/docs/commands/sql-load-record"},"next":{"title":"SQL LOGOUT","permalink":"/docs/commands/sql-logout"}}'),a=t("785893"),i=t("250065");let r={id:"sql-login",title:"SQL LOGIN",slug:"/commands/sql-login",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Example 7",id:"example-7",level:4},{value:"Example 8",id:"example-8",level:4},{value:"Example 9",id:"example-9",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",ipaddress:"ipaddress",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",tcpport:"tcpport",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SQL LOGIN"})," {( ",(0,a.jsx)(n.em,{children:"dataEntry"})," ; ",(0,a.jsx)(n.em,{children:"userName"})," ; ",(0,a.jsx)(n.em,{children:"password"})," ; * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"dataEntry"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:'Publication name of 4D database or IP address of remote database or Name of the data source entry in the ODBC Manager or "" to display the selection dialog box'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"userName"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name of the user registered in the data source"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"password"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Password of the user registered in the data source"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operator"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Applied to Begin SQL/End SQL If omitted: do not apply (local database); if passed: apply"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"SQL LOGIN"})," command allows you to connect to an SQL data source specified in the ",(0,a.jsx)(n.em,{children:"dataEntry"})," parameter. It designates the target of the SQL queries executed subsequently in the current process:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["via the ",(0,a.jsx)(n.a,{href:"/docs/commands/sql-execute",children:"SQL EXECUTE"})," command,"]}),"\n",(0,a.jsxs)(n.li,{children:["via code placed within the Begin SQL / End SQL tags (if the ",(0,a.jsx)(n.em,{children:"*"})," parameter is passed)."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The SQL data source can either be:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"an external 4D Server database that you access directly,"}),"\n",(0,a.jsx)(n.li,{children:"an external ODBC source,"}),"\n",(0,a.jsx)(n.li,{children:"the local 4D database (internal database)."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.em,{children:"dataEntry"}),", you can pass one of the following values: an IP address, a 4D database publication name, an ODBC data source name, an empty string or the SQL_INTERNAL constant."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"IP address"}),(0,a.jsx)(n.br,{}),"\nSyntax: ",(0,a.jsxs)(n.strong,{children:["IP:",(0,a.jsxs)(n.ipaddress,{children:["{:",(0,a.jsx)(n.tcpport,{children:"}"})]})]}),(0,a.jsx)(n.br,{}),'\nIn this case, the command opens a direct connection with the 4D Server database executed on the machine with the IP address specified. On the "target" machine, the SQL server must be started. If you pass a TCP port number, it must have been specified as the publication port of the SQL server in the "target" database. If you do not pass a TCP port number, the default port will be used (19812). The TCP port number of the SQL server can be modified on the "SQL" page of the Database Settings. Refer to examples 4 and 5.',(0,a.jsx)(n.br,{}),'\nIf you have enabled TLS for the "target" SQL server (option available in the Database Settings), you must add the ":ssl" keyword to the end of the IP address and TCP port number (mandatory in that case) in order for the server to be able to handle the request correctly (see example 6).']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"4D database publication name"}),(0,a.jsx)(n.br,{}),"\nSyntax: ",(0,a.jsx)(n.strong,{children:"4D:<Publication_Name>"}),(0,a.jsx)(n.br,{}),'\nIn this case, the command opens a direct connection with the 4D Server database whose publication name on the network corresponds to the name specified. The network publication name of a database is set on the "Client-Server" page of the Database Settings.',(0,a.jsx)(n.br,{}),"\nRefer to example 4.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Note:"})," The TCP port number of the target 4D SQL server (that publishes the 4D database) and the TCP port number of the SQL server of the 4D application that opens the connection must be the same."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"valid ODBC data source name"}),(0,a.jsx)(n.br,{}),"\nSyntax: ",(0,a.jsx)(n.strong,{children:"ODBC:<My_DSN> or <My_DSN>"}),(0,a.jsx)(n.br,{}),"\nIn this case, the ",(0,a.jsx)(n.em,{children:"dataEntry"})," parameter contains the name of the data source as it has been set in the ODBC driver manager.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"Notes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['For compatibility with previous versions of 4D, it is possible to omit the "ODBC:" prefix. However, for better code readability, it is recommended to use this prefix.',(0,a.jsx)(n.br,{}),"\nRefer to example 2."]}),"\n",(0,a.jsx)(n.li,{children:'Under Windows, the data source name is case sensitive. For example, if the data source was defined as "4D_v16", passing the value "4D_V16" will fail.'}),"\n",(0,a.jsx)(n.li,{children:'Under Windows and Mac, the "ODBC:" prefix must be entered using uppercase letters. If you pass "odbc:", the connection will fail.'}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"empty string"}),(0,a.jsx)(n.br,{}),"\nSyntax: ",(0,a.jsx)(n.em,{children:'""'}),(0,a.jsx)(n.br,{}),"\nIn this case, the command displays the connection dialog box so that the data source to be connected to can be entered manually:"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(103552).Z+"",width:"479",height:"306"})}),"\n",(0,a.jsx)(n.p,{children:"This dialog box includes several pages. The TCP/IP page includes the following elements:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Target Name: This menu is built using two lists:",(0,a.jsx)(n.br,{}),'\n* The list of databases that have been opened recently in direct connection. The mechanism for updating this list is the same as that of the 4D application, except that the folder containing the .4DLink files is named "Favorites SQL vXX" instead of "Favorites vXX".',(0,a.jsx)(n.br,{}),"\n* The list of 4D Server applications whose SQL server is started and whose TCP port for SQL connections is the same as that of the source application. This list is dynamically updated on each new call to the ",(0,a.jsx)(n.strong,{children:"SQL LOGIN"})," command without the ",(0,a.jsx)(n.em,{children:"dataEntry"}),' parameter. If the "^" character is placed before a database name, this indicates that the connection has been made in secured mode via SSL.']}),"\n",(0,a.jsx)(n.li,{children:"Network Address: This area displays the address and possibly the TCP port of the database selected in the Target Name menu. You can also enter an IP address in this area and then click on the Connection button in order to connect to the corresponding 4D Server database. You can also specify the TCP port by entering a colon (:) followed by the port number after the address. For example: 192.168.93.105:19855"}),"\n",(0,a.jsx)(n.li,{children:"User Name and Password: These areas can be used to enter the con-nection identifiers."}),"\n",(0,a.jsx)(n.li,{children:"The User DSN and System DSN pages display, respectively, the list of user and system ODBC data sources specified in the ODBC driver of the machine. These pages can be used to select a data source and enter the identifiers in order to open a connection with an external ODBC data source."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["If the connection is established, the OK system variable is set to 1. Otherwise, it is set to 0 and an error is generated. This error can be intercepted via an error-handling method installed by the ",(0,a.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"SQL_INTERNAL constant"}),(0,a.jsx)(n.br,{}),"\nSyntax: SQL_INTERNAL",(0,a.jsx)(n.br,{}),"\nIn this case, the command redirects subsequent SQL queries to the internal 4D database."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning:"})," The prefixes used in the ",(0,a.jsx)(n.em,{children:"dataEntry"})," parameter (IP, ODBC, 4D) must be written in uppercase."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"userName"})," contains the name of the user authorized to connect to the external data source. For example, with Oracle\xae, the user name can be \u201CScott\u201D."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"password"})," contains the password of the user authorized to connect to the external data source. For example, with Oracle\xae, the password can be \u201Ctiger\u201D."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," In the case of a direct connection, if you pass empty strings in the ",(0,a.jsx)(n.em,{children:"userName"})," and ",(0,a.jsx)(n.em,{children:"password"})," parameters, the connection will only be accepted if 4D passwords are not activated in the target database. Otherwise, the connection will be refused."]}),"\n",(0,a.jsxs)(n.p,{children:["The optional ",(0,a.jsx)(n.em,{children:"*"})," parameter can be used to change the target of the SQL code executed within the Begin SQL/End SQL tags. If you do not pass this parameter, the code placed within the Begin SQL/End SQL tags will still be sent to the internal SQL engine of 4D, without taking the configuration specified by the ",(0,a.jsx)(n.strong,{children:"SQL LOGIN"})," command into account. If you do pass this parameter, the SQL code executed within the Begin SQL/End SQL tags will be sent to the source specified in the ",(0,a.jsx)(n.em,{children:"dataEntry"})," parameter."]}),"\n",(0,a.jsxs)(n.p,{children:["To close the current connection and free the memory, simply execute the ",(0,a.jsx)(n.a,{href:"/docs/commands/sql-logout",children:"SQL LOGOUT"})," command. All the SQL queries are then sent to the internal 4D SQL database.",(0,a.jsx)(n.br,{}),"\nIf you call ",(0,a.jsx)(n.strong,{children:"SQL LOGIN"})," again without having explicitly closed the current connection, it will be closed automatically."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," In the case where an external connection attempt via ",(0,a.jsx)(n.strong,{children:"SQL LOGIN"})," fails, the internal 4D database automatically becomes the current data source."]}),"\n",(0,a.jsx)(n.p,{children:"These parameters are optional; if no parameters are passed, the command will bring up the ODBC Login dialog box that allows you to select the external data source."}),"\n",(0,a.jsx)(n.p,{children:"The scope of this command is per process; in other words, if you want to execute two distinct connections, you must create two processes and execute each connection in each process."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning:"})," It is not possible to open an ODBC connection in the contexts described below. These configurations lead to blocking of the application:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"connection via ODBC from the running application to itself"}),"\n",(0,a.jsx)(n.li,{children:"connection via ODBC from a 4D application to 4D Server when a standard client/server connection is already open between these two applications."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"This statement will bring up the ODBC Manager dialog box:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0SQL LOGIN\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsxs)(n.p,{children:['Opening of a connection via the ODBC protocol with the "MyOracle" external data source. SQL queries executed via the ',(0,a.jsx)(n.a,{href:"/docs/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," command and queries included within the ",(0,a.jsx)(n.a,{href:"/docs/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,a.jsx)(n.a,{href:"/docs/commands/end-sql",title:"End SQL",children:"End SQL"})," tags will be redirected to this connection:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("ODBC:MyOracle";"Scott";"tiger";*)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsx)(n.p,{children:"Open a connection with the 4D internal SQL kernel:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0SQL LOGIN(SQL_INTERNAL;$user;$password)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,a.jsxs)(n.p,{children:["Opening of a direct connection with the 4D Server application executed on the machine having the IP address 192.168.45.34 and replying on the default TCP port. The SQL queries executed via the ",(0,a.jsx)(n.a,{href:"/docs/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," command will be redirected to this connection; the queries included within the ",(0,a.jsx)(n.a,{href:"/docs/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,a.jsx)(n.a,{href:"/docs/commands/end-sql",title:"End SQL",children:"End SQL"})," tags will not be redirected."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34";"John";"azerty")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,a.jsxs)(n.p,{children:["Opening of a direct connection with the 4D Server application executed on the machine having the IP address 192.168.45.34 and replying on TCP port 20150. The SQL queries executed via the ",(0,a.jsx)(n.a,{href:"/docs/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," command and the queries included within the ",(0,a.jsx)(n.a,{href:"/docs/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,a.jsx)(n.a,{href:"/docs/commands/end-sql",title:"End SQL",children:"End SQL"})," tags will be redirected to this connection."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34:20150";"John";"azerty";*)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,a.jsx)(n.p,{children:"Opening of a direct connection in TLS with the 4D Server application running on the machine with the IP address 192.168.45.34 and responding on the default TCP port. You must have enabled TLS for the SQL server on the 4D Server application:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:192.168.45.34:19812:ssl";"Admin";"sd156")\xa0// Note the ":ssl" after of the IP address and TCP port\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-7",children:"Example 7"}),"\n",(0,a.jsxs)(n.p,{children:["Opening of a direct connection with the 4D Server application executed on the machine having the IPv6 address 2a01:e35:2e41:c960:dc39:3eb0:f29b:3747 and replying on the TCP port 20150. The SQL queries executed via the ",(0,a.jsx)(n.a,{href:"/docs/commands/sql-execute",children:"SQL EXECUTE"})," command will be redirected to this connection; the queries included within the ",(0,a.jsx)(n.a,{href:"/docs/commands/begin-sql",children:"Begin SQL"}),"/",(0,a.jsx)(n.a,{href:"/docs/commands/end-sql",children:"End SQL"})," tags will not be redirected."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("IP:[2a01:e35:2e41:c960:dc39:3eb0:f29b:3747]:20150";"John";"qwerty")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-8",children:"Example 8"}),"\n",(0,a.jsxs)(n.p,{children:['Opening of a direct connection with the 4D Server application which publishes, on the local network, a database whose publication name is "Accounts_DB." The TCP port used for the SQL server of both databases (set on the SQL page of the Database Settings) must be the same (19812 by default). The SQL queries executed via the ',(0,a.jsx)(n.a,{href:"/docs/commands/sql-execute",title:"SQL EXECUTE",children:"SQL EXECUTE"})," command will be redirected to this connection; the queries included within the ",(0,a.jsx)(n.a,{href:"/docs/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,a.jsx)(n.a,{href:"/docs/commands/end-sql",title:"End SQL",children:"End SQL"})," tags will not be redirected."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0SQL LOGIN("4D:Accounts_DB";"John";"azerty")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-9",children:"Example 9"}),"\n",(0,a.jsx)(n.p,{children:"This example illustrates the connection possibilities provided by the SQL LOGIN command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(aNames;0)\n\xa0ARRAY LONGINT(aAges;0)\n\xa0SQL LOGIN("ODBC:MyORACLE";"Marc";"azerty")\n\xa0If(OK=1)\n\xa0\xa0//The following query will be redirected to the external ORACLE database\n\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT Name, Age FROM PERSONS";aNames;aAges)\n\xa0\xa0//The following query will be sent to the local 4D database\n\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Name, Age\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNames, :aAges;\n\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0//The following SQL LOGIN command closes the current connection\n\xa0\xa0//with the external ORACLE database and opens a new connection\n\xa0\xa0//with an external MySQL database\n\xa0\xa0\xa0\xa0SQL LOGIN("ODBC:MySQL";"Jean";"qwerty";*)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0//The following query will be redirected to the external MySQL database\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT Name, Age FROM PERSONS";aNames;aAges)\n\xa0\xa0//The following query will also be redirected to the external MySQL database\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Name, Age\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNames, :aAges;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL LOGOUT\n\xa0\xa0//The following query will be sent to the local 4D database\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Begin SQL\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECT Name, Age\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM PERSONS\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0INTO :aNames, :aAges;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End SQL\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,a.jsx)(n.p,{children:"If the connection is successful, the system variable OK is set to 1; otherwise, it is set to 0."}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/begin-sql",children:"Begin SQL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/end-sql",children:"End SQL"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/sql-logout",children:"SQL LOGOUT"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},103552:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict33536.en-69205111676f19044aa2ab738bc9df2a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);