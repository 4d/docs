"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46788],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},254618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(667294);var o=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"client-server",title:"Client-server page"},s=void 0,l={unversionedId:"settings/client-server",id:"version-20/settings/client-server",title:"Client-server page",description:"The Client-server pages group together parameters related to the use of the database in client-server mode. Naturally, these settings are only taken into account when the database is used in remote mode.",source:"@site/versioned_docs/version-20/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/20/settings/client-server",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"client-server",title:"Client-server page"},sidebar:"docs",previous:{title:"Backup page",permalink:"/docs/20/settings/backup"},next:{title:"Web page",permalink:"/docs/20/settings/web"}},c={},u=[{value:"Network options page",id:"network-options-page",level:2},{value:"Network",id:"network",level:3},{value:"Publish database at startup",id:"publish-database-at-startup",level:4},{value:"Publication name",id:"publication-name",level:4},{value:"Port Number",id:"port-number",level:4},{value:"4D Server and port numbers",id:"4d-server-and-port-numbers",level:4},{value:"Authentication of user with domain server",id:"authentication-of-user-with-domain-server",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Client-Server Connections Timeout",id:"client-server-connections-timeout",level:4},{value:"Client-Server Communication",id:"client-server-communication",level:3},{value:"Register Clients at Startup For Execute On Client",id:"register-clients-at-startup-for-execute-on-client",level:4},{value:"Encrypt Client-Server Communications",id:"encrypt-client-server-communications",level:4},{value:"Update Resources folder during a session",id:"update-resources-folder-during-a-session",level:4},{value:"IP configuration page",id:"ip-configuration-page",level:2},{value:"Allow-Deny Configuration Table",id:"allow-deny-configuration-table",level:3}],d={toc:u};function p(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Client-server pages group together parameters related to the use of the database in client-server mode. Naturally, these settings are only taken into account when the database is used in remote mode."),(0,o.kt)("h2",r({},{id:"network-options-page"}),"Network options page"),(0,o.kt)("h3",r({},{id:"network"}),"Network"),(0,o.kt)("h4",r({},{id:"publish-database-at-startup"}),"Publish database at startup"),(0,o.kt)("p",null,"This option lets you indicate whether or not the 4D Server database will appear in the list of published databases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When this option is checked (default), the database is made public and appears in the list of published databases (",(0,o.kt)("strong",{parentName:"li"},"Available")," tab)."),(0,o.kt)("li",{parentName:"ul"},"When the option is not checked, the database is not made public and it does not appear in the list of published databases. To connect, users must manually enter the address of the database on the ",(0,o.kt)("strong",{parentName:"li"},"Custom")," tab of the connection dialog box.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you modify this parameter, you must restart the server database in order for it to be taken into account.")),(0,o.kt)("h4",r({},{id:"publication-name"}),"Publication name"),(0,o.kt)("p",null,"This option lets you change the publication name of a 4D Server database, ",(0,o.kt)("em",{parentName:"p"},"i.e."),", the name displayed on the dynamic ",(0,o.kt)("strong",{parentName:"p"},"Available")," tab of the connection dialog box (see the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.en.html"}),"Connecting to a 4D Server Database")," section). By default, 4D Server uses the name of the project file. You can enter any custom name you want."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This parameter is not taken into account in custom client-server applications. In theory, the client application connects directly to the server application, without passing by the connection dialog box. However, in the event of an error, this dialog box can appear; in this case, the publication name of the server application is the name of the compiled project.")),(0,o.kt)("h4",r({},{id:"port-number"}),"Port Number"),(0,o.kt)("p",null,"This option lets you change the TCP port number on which 4D Server publishes the database. This information is stored in the project and on each client machine. By default, the TCP port number used by 4D Server and 4D in remote mode is 19813."),(0,o.kt)("p",null,"Customizing this value is necessary when you want to use several 4D applications on the same machine; in this case, you must specify a different port number for each application.\nWhen you modify this value from 4D Server or 4D, it is automatically passed on to all the 4D machines connected to the database. "),(0,o.kt)("p",null,"To update any other client machines that are not connected, you just need to enter the new port number (preceded by a colon) after the IP address of the server machine on the ",(0,o.kt)("strong",{parentName:"p"},"Custom")," tab of the connection dialog box at the time of the next connection. For example, if the new port number is 19888:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(369894).Z,width:"466",height:"488"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only databases published on the same port as the one set in 4D client are visible on the TCP/IP dynamic publication page.")),(0,o.kt)("h4",r({},{id:"4d-server-and-port-numbers"}),"4D Server and port numbers"),(0,o.kt)("p",null,"4D Server uses three TCP ports for communications between internal servers and clients:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SQL Server"),': 19812 by default (can be modified via the "SQL/Configuration" page of the Preferences).'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Server"),': 19813 by default (can be modified via the "Client-Server/Configuration" page of the Preferences, see above).'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DB4D Server")," (database server): 19814 by default . This port number cannot be modified directly but it always consists of the application server port number + 1.\\\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.\\\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly.")),(0,o.kt)("h4",r({},{id:"authentication-of-user-with-domain-server"}),"Authentication of user with domain server"),(0,o.kt)("p",null,"This option allows you to implement SSO (",(0,o.kt)("em",{parentName:"p"},"Single Sign On"),") capabilities in your 4D Server database on Windows. When you check this option, 4D transparently connects to the Active directory of the Windows domain server and gets the available authentication tokens. This option is described in the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) on Windows")," section."),(0,o.kt)("h4",r({},{id:"service-principal-name"}),"Service Principal Name"),(0,o.kt)("p",null,"When Single Sign On (SSO) is enabled (see above), you must fill in this field if you want to use Kerberos as your authentication protocol. This option is described in the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) on Windows")," section."),(0,o.kt)("h4",r({},{id:"client-server-connections-timeout"}),"Client-Server Connections Timeout"),(0,o.kt)("p",null,"This device is used to set the timeout (period of inactivity beyond which the connection is closed) between 4D Server and the client machines connecting to it. The Unlimited option removes the timeout. When this option is selected, client activity control is eliminated."),(0,o.kt)("p",null,"When a timeout is selected, the server will close the connection of a client if it does not receive any requests from the latter during the specified time limit."),(0,o.kt)("h3",r({},{id:"client-server-communication"}),"Client-Server Communication"),(0,o.kt)("h4",r({},{id:"register-clients-at-startup-for-execute-on-client"}),"Register Clients at Startup For Execute On Client"),(0,o.kt)("p",null,"When this option is checked, all the 4D remote machines connecting to the database can execute methods remotely. This mechanism is detailed in the section ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html"}),"Stored procedures on client machines"),"."),(0,o.kt)("h4",r({},{id:"encrypt-client-server-communications"}),"Encrypt Client-Server Communications"),(0,o.kt)("p",null,"This option lets you activate the secured mode for communications between the server machine and the 4D remote machines. This option is detailed in the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html"}),"Encrypting Client/Server Connections")," section."),(0,o.kt)("h4",r({},{id:"update-resources-folder-during-a-session"}),"Update Resources folder during a session"),(0,o.kt)("p",null,"This setting can be used to globally set the updating mode for the local instance of the ",(0,o.kt)("strong",{parentName:"p"},"Resources")," folder on the connected 4D machines when the ",(0,o.kt)("strong",{parentName:"p"},"Resources")," folder of the database is modified during the session (the ",(0,o.kt)("strong",{parentName:"p"},"Resources")," folder is automatically synchronized on the remote machine each time a session is opened). Three settings are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Never"),": The local ",(0,o.kt)("strong",{parentName:"li"},"Resources")," folder is not updated during the session. The notification sent by the server is ignored. The local ",(0,o.kt)("strong",{parentName:"li"},"Resources")," folder may be updated manually using the ",(0,o.kt)("strong",{parentName:"li"},"Update Local Resources")," action menu command (see ",(0,o.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html"}),"Using the Resources explorer"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Always"),": The synchronization of the local ",(0,o.kt)("strong",{parentName:"li"},"Resources")," folder is automatically carried out during the session whenever notification is sent by the server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ask"),": When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local ",(0,o.kt)("strong",{parentName:"li"},"Resources")," folder.\\\nThe ",(0,o.kt)("strong",{parentName:"li"},"Resources")," folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Automatic or manual mechanisms can be used to notify each client when the contents of this folder have been modified. For more information, please refer to the ",(0,o.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html"}),"Managing the Resources folder")," section.")),(0,o.kt)("h2",r({},{id:"ip-configuration-page"}),"IP configuration page"),(0,o.kt)("h3",r({},{id:"allow-deny-configuration-table"}),"Allow-Deny Configuration Table"),(0,o.kt)("p",null,"This table allows you to set access control rules for the database depending on 4D remote machine IP addresses. This option allows reinforcing security, for example, for strategic applications."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This configuration table does not control Web connections.")),(0,o.kt)("p",null,"The behavior of the configuration table is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The "Allow-Deny" column allows selecting the type of rule to apply (Allow or Deny) using a pop-up menu. To add a rule, click on the Add button. A new row appears in the table. The ',(0,o.kt)("strong",{parentName:"li"},"Delete")," button lets you remove the current row."),(0,o.kt)("li",{parentName:"ul"},'The "IP Address" column allows setting the IP address(es) concerned by the rule. To specify an address, click in the column and enter the address in the following form: 123.45.67.89 (IPv4 format) or 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (IPv6 format). You can use an ',(0,o.kt)("em",{parentName:"li"},' (asterisk) character to specify "starts with" type addresses. For example, 192.168.')," indicates all addresses starting with 192.168."),(0,o.kt)("li",{parentName:"ul"},"The application of rules is based on the display order of the table. If two rules are contradictory, priority is given to the rule located highest in the table. You can re-order rows by modifying the current sort (click the header of the column to alternate the direction of the sort). You can also move rows using drag and drop."),(0,o.kt)("li",{parentName:"ul"},"For security reasons, only addresses that actually match a rule will be allowed to connect. In other words, if the table only contains one or more Deny rules, all addresses will be refused because none will match at least one rule. If you want to deny only certain addresses (and allow others), add an Allow * rule at the end of the table. For example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Deny 192.168.* (deny all addresses beginning with 192.168)"),(0,o.kt)("li",{parentName:"ul"},"Allow * (but allow all other addresses)\n")))),(0,o.kt)("p",null,"By default, no connection restrictions are applied by 4D Server: the first row of the table contains the Allow label and the * (all addresses) character."))}p.isMDXComponent=!0},369894:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"}}]);