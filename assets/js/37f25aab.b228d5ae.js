"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81490],{4321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(474848),o=t(28453);const s={id:"client-server",title:"Client-server page"},r=void 0,a={id:"settings/client-server",title:"Client-server page",description:"The Client-server pages group together parameters related to the use of the database in client-server mode. Naturally, these settings are only taken into account when the database is used in remote mode.",source:"@site/versioned_docs/version-20-R6/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/settings/client-server",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"client-server",title:"Client-server page"},sidebar:"docs",previous:{title:"Backup page",permalink:"/docs/settings/backup"},next:{title:"Web page",permalink:"/docs/settings/web"}},l={},c=[{value:"Network options page",id:"network-options-page",level:2},{value:"Network",id:"network",level:3},{value:"Publish database at startup",id:"publish-database-at-startup",level:4},{value:"Publication name",id:"publication-name",level:4},{value:"Port Number",id:"port-number",level:4},{value:"4D Server and port numbers",id:"4d-server-and-port-numbers",level:4},{value:"Authentication of user with domain server",id:"authentication-of-user-with-domain-server",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Network Layer",id:"network-layer",level:4},{value:"Client-Server Connections Timeout",id:"client-server-connections-timeout",level:4},{value:"Client-Server Communication",id:"client-server-communication",level:3},{value:"Register Clients at Startup For Execute On Client",id:"register-clients-at-startup-for-execute-on-client",level:4},{value:"Encrypt Client-Server Communications",id:"encrypt-client-server-communications",level:4},{value:"Update Resources folder during a session",id:"update-resources-folder-during-a-session",level:4},{value:"IP configuration page",id:"ip-configuration-page",level:2},{value:"Allow-Deny Configuration Table",id:"allow-deny-configuration-table",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Client-server pages group together parameters related to the use of the database in client-server mode. Naturally, these settings are only taken into account when the database is used in remote mode."}),"\n",(0,i.jsx)(n.h2,{id:"network-options-page",children:"Network options page"}),"\n",(0,i.jsx)(n.h3,{id:"network",children:"Network"}),"\n",(0,i.jsx)(n.h4,{id:"publish-database-at-startup",children:"Publish database at startup"}),"\n",(0,i.jsx)(n.p,{children:"This option lets you indicate whether or not the 4D Server database will appear in the list of published databases."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When this option is checked (default), the database is made public and appears in the list of published databases (",(0,i.jsx)(n.strong,{children:"Available"})," tab)."]}),"\n",(0,i.jsxs)(n.li,{children:["When the option is not checked, the database is not made public and it does not appear in the list of published databases. To connect, users must manually enter the address of the database on the ",(0,i.jsx)(n.strong,{children:"Custom"})," tab of the connection dialog box."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you modify this parameter, you must restart the server database in order for it to be taken into account."})}),"\n",(0,i.jsx)(n.h4,{id:"publication-name",children:"Publication name"}),"\n",(0,i.jsxs)(n.p,{children:["This option lets you change the publication name of a 4D Server database, ",(0,i.jsx)(n.em,{children:"i.e."}),", the name displayed on the dynamic ",(0,i.jsx)(n.strong,{children:"Available"})," tab of the connection dialog box (see the ",(0,i.jsx)(n.a,{href:"../Desktop/clientServer/md#opening-a-remote-project",children:"Opening a remote project"})," paragraph). By default, 4D Server uses the name of the project file. You can enter any custom name you want."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This parameter is not taken into account in custom client-server applications. In theory, the client application connects directly to the server application, without passing by the connection dialog box. However, in the event of an error, this dialog box can appear; in this case, the publication name of the server application is the name of the compiled project."})}),"\n",(0,i.jsx)(n.h4,{id:"port-number",children:"Port Number"}),"\n",(0,i.jsx)(n.p,{children:"This option lets you change the TCP port number on which 4D Server publishes the database. This information is stored in the project and on each client machine. By default, the TCP port number used by 4D Server and 4D in remote mode is 19813."}),"\n",(0,i.jsx)(n.p,{children:"Customizing this value is necessary when you want to use several 4D applications on the same machine; in this case, you must specify a different port number for each application.\nWhen you modify this value from 4D Server or 4D, it is automatically passed on to all the 4D machines connected to the database."}),"\n",(0,i.jsxs)(n.p,{children:["To update any other client machines that are not connected, you just need to enter the new port number (preceded by a colon) after the IP address of the server machine on the ",(0,i.jsx)(n.strong,{children:"Custom"})," tab of the connection dialog box at the time of the next connection. For example, if the new port number is 19888:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(662799).A+"",width:"466",height:"488"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Only databases published on the same port as the one set in 4D client are visible on the TCP/IP dynamic publication page."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"4d-server-and-port-numbers",children:"4D Server and port numbers"}),"\n",(0,i.jsx)(n.p,{children:"4D Server uses several TCP ports for communications between internal servers and clients:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SQL Server"}),': 19812 by default (can be modified via the "SQL/Configuration" page of the Preferences).']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Server"}),': 19813 by default (can be modified via the "Client-Server/Configuration" page of the Preferences, see above).']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DB4D Server"})," (database server): 19814 by default. This port number cannot be modified directly but it always consists of the application server port number + 1.",(0,i.jsx)(n.br,{}),"\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.",(0,i.jsx)(n.br,{}),"\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/Debugging/debugging-remote",children:(0,i.jsx)(n.strong,{children:"Remote Debugger"})}),": 19815 by default. This port number cannot be modified directly but it always consists of the application server port number + 2."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"authentication-of-user-with-domain-server",children:"Authentication of user with domain server"}),"\n",(0,i.jsxs)(n.p,{children:["This option allows you to implement SSO (",(0,i.jsx)(n.em,{children:"Single Sign On"}),") capabilities in your 4D Server database on Windows. When you check this option, 4D transparently connects to the Active directory of the Windows domain server and gets the available authentication tokens. This option is described in the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,i.jsx)(n.h4,{id:"service-principal-name",children:"Service Principal Name"}),"\n",(0,i.jsxs)(n.p,{children:["When Single Sign On (SSO) is enabled (see above), you must fill in this field if you want to use Kerberos as your authentication protocol. This option is described in the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,i.jsx)(n.h4,{id:"network-layer",children:"Network Layer"}),"\n",(0,i.jsxs)(n.p,{children:["This drop-down box contains 3 network layer options to choose between: ",(0,i.jsx)(n.strong,{children:"legacy"}),", ",(0,i.jsx)(n.strong,{children:"ServerNet"})," and ",(0,i.jsx)(n.strong,{children:"QUIC"})," (only in project mode), which are used to handle communications between 4D Server and remote 4D machines (clients)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Legacy"}),': This former "legacy" network layer is still supported in order to ensure compatibility for databases created prior to v15. This network layer can also be enabled by programming using the ',(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ServerNet"})," (by default): Enables the ServerNet network layer on the server (available since 4D v15)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QUIC"})," (available only in project mode): Enables the QUIC network layer on the server."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Selecting this option overrides the Use legacy network layer option in case it has been set using the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"})," command."]}),"\n",(0,i.jsxs)(n.li,{children:["You can know if a 4D application is running with a QUIC network layer using the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/help/command/page1599.html",children:"Get application info"})," command."]}),"\n",(0,i.jsx)(n.li,{children:"Since QUIC uses the UDP protocol, make sure UDP is allowed in your network security settings."}),"\n",(0,i.jsx)(n.li,{children:"QUIC automatically connects to the port 19813 for both application server and DB4D server."}),"\n",(0,i.jsxs)(n.li,{children:["When the QUIC layer option is selected:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A beta message and an alert icon are displayed near the selector."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#Client-Server-Connections-Timeout",children:"Client-server Connections Timeout settings"})," are hidden"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"#Encrypt-Client-Server-Communications",children:"Encrypt Client-Server communication checkbox"})," is hidden (QUIC communications are always in TLS, whatever your secured mode is.)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compatibility"}),": You need to deploy your client/server applications with 4D v20 or higher before switching to the QUIC network layer."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In case of a modification, you need to restart the application for the change to be taken into account. Any client applications that were logged must also be restarted to be able to connect with the new network layer."})}),"\n",(0,i.jsx)(n.h4,{id:"client-server-connections-timeout",children:"Client-Server Connections Timeout"}),"\n",(0,i.jsx)(n.p,{children:"This device is used to set the timeout (period of inactivity beyond which the connection is closed) between 4D Server and the client machines connecting to it. The Unlimited option removes the timeout. When this option is selected, client activity control is eliminated."}),"\n",(0,i.jsx)(n.p,{children:"When a timeout is selected, the server will close the connection of a client if it does not receive any requests from the latter during the specified time limit."}),"\n",(0,i.jsx)(n.h3,{id:"client-server-communication",children:"Client-Server Communication"}),"\n",(0,i.jsx)(n.h4,{id:"register-clients-at-startup-for-execute-on-client",children:"Register Clients at Startup For Execute On Client"}),"\n",(0,i.jsxs)(n.p,{children:["When this option is checked, all the 4D remote machines connecting to the database can execute methods remotely. This mechanism is detailed in the section ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html",children:"Stored procedures on client machines"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"encrypt-client-server-communications",children:"Encrypt Client-Server Communications"}),"\n",(0,i.jsxs)(n.p,{children:["This option lets you activate the secured mode for communications between the server machine and the 4D remote machines. This option is detailed in the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html",children:"Encrypting Client/Server Connections"})," section."]}),"\n",(0,i.jsx)(n.h4,{id:"update-resources-folder-during-a-session",children:"Update Resources folder during a session"}),"\n",(0,i.jsxs)(n.p,{children:["This setting can be used to globally set the updating mode for the local instance of the ",(0,i.jsx)(n.strong,{children:"Resources"})," folder on the connected 4D machines when the ",(0,i.jsx)(n.strong,{children:"Resources"})," folder of the database is modified during the session (the ",(0,i.jsx)(n.strong,{children:"Resources"})," folder is automatically synchronized on the remote machine each time a session is opened). Three settings are available:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Never"}),": The local ",(0,i.jsx)(n.strong,{children:"Resources"})," folder is not updated during the session. The notification sent by the server is ignored. The local ",(0,i.jsx)(n.strong,{children:"Resources"})," folder may be updated manually using the ",(0,i.jsx)(n.strong,{children:"Update Local Resources"})," action menu command (see ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html",children:"Using the Resources explorer"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Always"}),": The synchronization of the local ",(0,i.jsx)(n.strong,{children:"Resources"})," folder is automatically carried out during the session whenever notification is sent by the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ask"}),": When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local ",(0,i.jsx)(n.strong,{children:"Resources"})," folder.",(0,i.jsx)(n.br,{}),"\nThe ",(0,i.jsx)(n.strong,{children:"Resources"})," folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Automatic or manual mechanisms can be used to notify each client when the contents of this folder have been modified. For more information, please refer to the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html",children:"Managing the Resources folder"})," section."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ip-configuration-page",children:"IP configuration page"}),"\n",(0,i.jsx)(n.h3,{id:"allow-deny-configuration-table",children:"Allow-Deny Configuration Table"}),"\n",(0,i.jsx)(n.p,{children:"This table allows you to set access control rules for the database depending on 4D remote machine IP addresses. This option allows reinforcing security, for example, for strategic applications."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This configuration table does not control Web connections."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The behavior of the configuration table is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['The "Allow-Deny" column allows selecting the type of rule to apply (Allow or Deny) using a pop-up menu. To add a rule, click on the Add button. A new row appears in the table. The ',(0,i.jsx)(n.strong,{children:"Delete"})," button lets you remove the current row."]}),"\n",(0,i.jsx)(n.li,{children:'The "IP Address" column allows setting the IP address(es) concerned by the rule. To specify an address, click in the column and enter the address in the following form: 123.45.67.89 (IPv4 format) or 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6 format). You can use an * (asterisk) character to specify "starts with" type addresses. For example, 192.168.* indicates all addresses starting with 192.168.'}),"\n",(0,i.jsx)(n.li,{children:"The application of rules is based on the display order of the table. If two rules are contradictory, priority is given to the rule located highest in the table. You can re-order rows by modifying the current sort (click the header of the column to alternate the direction of the sort). You can also move rows using drag and drop."}),"\n",(0,i.jsxs)(n.li,{children:["For security reasons, only addresses that actually match a rule will be allowed to connect. In other words, if the table only contains one or more Deny rules, all addresses will be refused because none will match at least one rule. If you want to deny only certain addresses (and allow others), add an Allow * rule at the end of the table. For example:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deny 192.168.* (deny all addresses beginning with 192.168)"}),"\n",(0,i.jsx)(n.li,{children:"Allow * (but allow all other addresses)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By default, no connection restrictions are applied by 4D Server: the first row of the table contains the Allow label and the * (all addresses) character."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},662799:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(296540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);