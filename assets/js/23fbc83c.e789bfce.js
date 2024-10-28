"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81365],{857943:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(474848),r=n(28453);const i={id:"web-get-option",title:"WEB GET OPTION",slug:"/commands/web-get-option",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/web-get-option",title:"WEB GET OPTION",description:"WEB GET OPTION ( selector ; value )",source:"@site/versioned_docs/version-20-R7/commands-legacy/web-get-option.md",sourceDirName:"commands-legacy",slug:"/commands/web-get-option",permalink:"/docs/commands/web-get-option",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-get-option",title:"WEB GET OPTION",slug:"/commands/web-get-option",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB GET HTTP HEADER",permalink:"/docs/commands/web-get-http-header"},next:{title:"WEB Get server info",permalink:"/docs/commands/web-get-server-info"}},l={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WEB GET OPTION"})," ( ",(0,t.jsx)(s.em,{children:"selector"})," ; ",(0,t.jsx)(s.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"selector"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Code of option to modify"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"value"}),(0,t.jsx)(s.td,{children:"Integer, Text, Collection"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Value of option"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"WEB GET OPTION"})," command gets the current value of an option for the 4D Web server operation."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"selector"})," parameter indicates which Web option to get. In this parameter, you pass one of the constants available in the ",(0,t.jsx)(s.em,{children:"Web Server"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web character set"}),(0,t.jsx)(s.td,{children:"17"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Character set that the 4D Web Server (with 4D in local mode and 4D Server) should use to communicate with browsers connecting to the database. The default value actually depends on the language of the operating system. This parameter is set in the Database settings. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": The possible values depend on the operating mode of the database relating to the character set. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.em,{children:"Unicode"})," ",(0,t.jsx)(s.em,{children:"Mode"}),": When the application is operating in Unicode mode, the values to pass for this parameter are character set identifiers (",(0,t.jsx)(s.em,{children:"MIBEnum"})," longint or ",(0,t.jsx)(s.em,{children:"Name"})," string, identifiers defined by IANA, see the following address: ",(0,t.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"}),"). Here is the list of identifiers corresponding to the character sets supported by the 4D Web server:",(0,t.jsx)(s.br,{})," 4=ISO-8859-1",(0,t.jsx)(s.br,{}),"12=ISO-8859-9",(0,t.jsx)(s.br,{})," 13=ISO-8859-10",(0,t.jsx)(s.br,{})," 17=Shift-JIS",(0,t.jsx)(s.br,{}),"2024=Windows-31J",(0,t.jsx)(s.br,{})," 2026=Big5",(0,t.jsx)(s.br,{})," 38=euc-kr",(0,t.jsx)(s.br,{})," 106=UTF-8",(0,t.jsx)(s.br,{})," 2250=Windows-1250",(0,t.jsx)(s.br,{})," 2251=Windows-1251",(0,t.jsx)(s.br,{}),"2253=Windows-1253",(0,t.jsx)(s.br,{})," 2255=Windows-1255",(0,t.jsx)(s.br,{})," 2256=Windows-1256",(0,t.jsx)(s.em,{children:"ASCII compatibility mode"}),":",(0,t.jsx)(s.br,{}),"Western European",(0,t.jsx)(s.br,{}),"1: Japanese",(0,t.jsx)(s.br,{}),"2: Chinese",(0,t.jsx)(s.br,{}),"3: Korean",(0,t.jsx)(s.br,{}),"4: User-defined",(0,t.jsx)(s.br,{}),"5: Reserved",(0,t.jsx)(s.br,{}),"6: Central European",(0,t.jsx)(s.br,{}),"7: Cyrillic",(0,t.jsx)(s.br,{}),"8: Arabic",(0,t.jsx)(s.br,{}),"9: Greek",(0,t.jsx)(s.br,{}),"10: Hebrew",(0,t.jsx)(s.br,{}),"11: Turkish",(0,t.jsx)(s.br,{}),"12: Baltic"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web Client IP address to listen"}),(0,t.jsx)(s.td,{children:"23"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D remote machine",(0,t.jsx)(s.br,{})," ",(0,t.jsx)(s.strong,{children:"Possible values"}),": See Web IP address to listen",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Used to specify this parameter for a remote 4D used as Web Server (applied to the remote web server only)."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web CORS enabled"}),(0,t.jsx)(s.td,{children:"92"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope:"})," Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," CORS (",(0,t.jsx)(s.em,{children:"Cross-origin resource sharing"}),") service status for the Web server. If enabled, XHR (e.g. REST) calls from Web pages outside the domain can be allowed in your application. (",(0,t.jsx)(s.strong,{children:"Note:"}),' A list of addresses and methods allowed to use the CORS service must also be defined, see Web CORS settings). When the CORS service is disabled, CORS requests are ignored. When the CORS service is enabled and a non-allowed domain or method sends a cross site request, it is rejected with a "403 - forbidden" error response. ',(0,t.jsx)(s.strong,{children:"Possible values:"})," 0 (disabled, default) or 1 (enabled)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web CORS settings"}),(0,t.jsx)(s.td,{children:"93"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope:"})," Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," List of allowed host(s) and method(s) for the CORS service.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values:"})," Collection of CORS objects with the following properties:                   ",(0,t.jsx)(s.table,{children:(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Property"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Type"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Description"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[ ].host"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.em,{children:"Mandatory"})," -- If host is not present or empty, the object is ignored."]}),(0,t.jsx)(s.br,{}),"Domain name or IP address from where external pages are allowed to send data requests to the Server via CORS. Multiple domain attributes can be added to create a white list. Several syntaxes are supported:",(0,t.jsx)(s.br,{}),"192.168.5.17:8081",(0,t.jsx)(s.br,{}),"192.168.5.17",(0,t.jsx)(s.br,{}),"192.168.*",(0,t.jsx)(s.br,{}),"192.168.*:8081",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.a,{href:"http://192.168.5.17:8081",children:"http://192.168.5.17:8081"}),(0,t.jsx)(s.br,{}),"http://*.myDomain.com",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.a,{href:"http://myProject.myDomain.com",children:"http://myProject.myDomain.com"}),(0,t.jsx)(s.br,{}),"*.myDomain.com",(0,t.jsx)(s.br,{}),"myProject.myDomain.com",(0,t.jsx)(s.br,{}),"*"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"[ ].methods"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsxs)(s.td,{children:["Accepted HTTP method(s) for the corresponding CORS ",(0,t.jsx)(s.em,{children:"host"}),'. Separate each method with a ";" (e.g.: "post;get")',(0,t.jsx)(s.br,{}),"If ",(0,t.jsx)(s.em,{children:"methods"})," is empty, null, or undefined: all methods are enabled."]})]})]})})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web debug log"}),(0,t.jsx)(s.td,{children:"84"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope:"})," Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Note:"})," If the HTTP server is restarted, a new log file is used",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"}),' Allows you to get or set the status of the HTTP request log file of the 4D Web server. When enabled, this file, named "',(0,t.jsxs)(s.strong,{children:["HTTPDebugLog_",(0,t.jsx)(s.em,{children:"nn"}),".txt"]}),'", is stored in the "Logs" folder of the application (',(0,t.jsx)(s.em,{children:"nn"})," is the file number). It is useful for debugging issues related to the Web server. It records each request and each response in raw mode. Whole requests, including headers, are logged; optionally, body parts can be logged as well. For more information on the HTTPDebugLog files, please refer to the ",(0,t.jsx)(s.em,{children:"Description of log files"})," section.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Values"}),': One of the constants prefixed with "wdl" (refer to the descriptions of these constants in this theme).',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 0 (not enabled)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HSTS enabled"}),(0,t.jsx)(s.td,{children:"86"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server. ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": HTTP Strict Transport Security (HSTS) status. HSTS allows the 4D Web server to declare that browsers should only interact with it via secure HTTPS connections. Once activated, the 4D Web server will automatically add HSTS-related information to all response headers. Browsers will record the HSTS information the first time they receive a response from the 4D Web server, then any future HTTP requests will automatically be transformed into HTTPS requests. The length of time this information is stored by the browser is specified with the Web HSTS max age selector. ",(0,t.jsx)(s.br,{})," HSTS requires that HTTPS is enabled on the server. HTTP must also be enabled to allow client initial connections.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 (disabled, default) or 1 (enabled)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Note:"})," The 4D Web server must be restarted for this setting to be applied."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HSTS max age"}),(0,t.jsx)(s.td,{children:"87"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Specifies the maximum length of time (in seconds) that HSTS is active for each new client connection. This information is stored on the client side for the specified duration.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": Longint (seconds) ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 63072000 (2 years)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.br,{}),(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.em,{children:"Warning:"})," Once HSTS is enabled, client connections will continue to use this mechanism for the specified duration. When you are testing your applications, it is recommended to set a short duration to be able to switch between secured and non-secured connection modes if necessary."]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP compression level"}),(0,t.jsx)(s.td,{children:"50"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Compression level for all compressed HTTP exchanges for the 4D HTTP server (client requests or server replies, Web and Web Service). This selector lets you optimize exchanges by either privileging speed of execution (less compression) or the amount of compression (less speed). The choice of a value depends on the size and type of data exchanged. Pass 1 to 9 in the ",(0,t.jsx)(s.em,{children:"value"})," parameter where 1 is the fastest compression and 9 the highest. You can also pass -1 to get a compromise between speed and rate of compression. By default, the compression level is 1 (faster compression).",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 1 to 9 (1 = faster, 9 = more compressed) or -1 = best compromise."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP compression threshold"}),(0,t.jsx)(s.td,{children:"51"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local HTTP server**",(0,t.jsx)(s.br,{}),"** ",(0,t.jsx)(s.strong,{children:"Description"}),": In the framework of optimized HTTP exchanges, size threshold for requests below which exchanges should not be compressed. This setting is useful in order to avoid losing machine time by compressing small exchanges. ",(0,t.jsx)(s.br,{}),"Possible values: Any Longint type value. Pass the size expressed in bytes in ",(0,t.jsx)(s.em,{children:"vaue"}),". By default, the compression threshold is set to 1024 bytes"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP enabled"}),(0,t.jsx)(s.td,{children:"88"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Status for communication over HTTP.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 (disabled) or 1 (enabled)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTP TRACE"}),(0,t.jsx)(s.td,{children:"85"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Allows you to disable or enable the HTTP TRACE method in the 4D Web server. For security reasons, starting with 4D v15 R2, by default the 4D Web server rejects HTTP TRACE requests with an error 405 (see HTTP TRACE disabled). If necessary, you can enable the HTTP TRACE method for the session by passing this constant with value 1. When this option is enabled, the 4D Web server replies to HTTP TRACE requests with the request line, header, and body.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 (disabled) or 1 (enabled)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 0 (disabled)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTPS enabled"}),(0,t.jsx)(s.td,{children:"89"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Status for communication over HTTPS.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 (disabled) or 1 (enabled)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web HTTPS port ID"}),(0,t.jsx)(s.td,{children:"39"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server**",(0,t.jsx)(s.br,{}),"** ",(0,t.jsx)(s.strong,{children:"Description"}),": TCP port number used by the Web server of 4D in local mode and of 4D Server for secure connections via TLS (HTTPS protocol). The HTTPS port number is set on the \u201cWeb/Configuration\u201d page of the Database settings dialog box.",(0,t.jsx)(s.br,{})," By default, the value is 443 (standard value). You can use the constants of the ",(0,t.jsx)(s.em,{children:"TCP Port Numbers"})," theme for the ",(0,t.jsx)(s.em,{children:"value"})," parameter.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 to 65535"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web inactive process timeout"}),(0,t.jsx)(s.td,{children:"78"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Compatibility:"}),' This selector is ignored when the Web scalable session mode or "No sessions" mode is enabled. ',(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.br,{}),"Scope"]}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," Modifies the life duration of the inactive processes associated with sessions. At the end of the timeout, the process is killed on the server, the ",(0,t.jsx)(s.em,{children:"On Web Legacy Close Session database method"})," is called, then the session context is destroyed.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": Longint (minutes)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 480 minutes (pass 0 to restore the default value)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web inactive session timeout"}),(0,t.jsx)(s.td,{children:"72"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Compatibility:"})," This selector is ignored when the Web scalable session mode is enabled.",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.br,{})})," ",(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Modifies the life duration of inactive sessions (duration set in cookie). At the end of this period, the session cookie expires and is no longer sent by the HTTP client.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": Longint (minutes)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 480 minutes (pass 0 to restore the default value)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web IP address to listen"}),(0,t.jsx)(s.td,{children:"16"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": IP address on which the 4D Web server will receive HTTP requests with 4D in local mode and 4D Server. By default, no specific address is defined. This parameter can be set in the Database settings. This selector is useful for 4D Web Servers compiled and merged with 4D Desktop (in which there is no access to the Design mode). ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),': IP address string. Both IPv6 string formats (e.g. "2001:0db8:0000:0000:0000:ff00:0042:8329") and IPv4 string formats (e.g. "123.45.67.89") are supported.',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Note:"})," By compatibility, deprecated IPv4 addresses expressed as hexadecimal longints are still supported."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web legacy session"}),(0,t.jsx)(s.td,{children:"70"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," Enables or disables the legacy session management mode (described in the ",(0,t.jsx)(s.em,{children:"Web Sessions Management (Legacy)"})," section). Note that this mode also enables the mechanism for reusing temporary contexts in remote mode. For more information about this mechanism, refer to the description of this option in the ",(0,t.jsx)(s.em,{children:"Web Server Settings"})," section.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 1 (enable mode) or 0 (disable mode). ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"See also"}),": Web scalable session selector."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web log recording"}),(0,t.jsx)(s.td,{children:"29"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Starts or stops the recording of Web requests received by the Web server of 4D in local mode or 4D Server. By default, the value is 0 (requests not recorded).",(0,t.jsx)(s.br,{}),' The log of Web requests is stored as a text file named "logweb.txt" that is automatically placed in the Logs folder of the database, next to the structure file. The format of this file is determined by the value that you pass. For more information about Web log file formats, please refer to the ',(0,t.jsx)(s.em,{children:"Information about the Web Site"})," section.",(0,t.jsx)(s.br,{}),' This file can also be activated on the "Web/Log" page of the Database settings. ',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 = Do not record (default), 1 = Record in CLF format, 2 = Record in DLF format, 3 = Record in ELF format, 4 = Record in WLF format.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Warning"}),": Formats 3 and 4 are custom formats whose contents must be set beforehand in the Database settings. If you use one of these formats without any of its fields having been selected on this page, the log file will not be generated."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web max concurrent processes"}),(0,t.jsx)(s.td,{children:"18"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Compatibility:"})," This selector is ignored when the Web scalable session mode is enabled.",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.br,{})})," ",(0,t.jsx)(s.strong,{children:"Scope"}),": 4D local, 4D Server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Strictly upper limit of concurrent Web processes of any type supported by the 4D Web Server with 4D in local mode and 4D Server. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests.",(0,t.jsx)(s.br,{}),"This parameter can prevent the 4D Web Server from saturation, which can occur when an exceedingly large number of concurrent requests are sent, or when too many context creations are requested. This parameter can also be set in the Database settings.",(0,t.jsx)(s.br,{}),"In theory, the maximum number of Web processes is the result of the following formula: Available memory/Web process stack size. Another solution is to view the information on Web processes displayed in the Runtime Explorer: the current number of Web processes and the maximum number reached since the Web server boot are indicated.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": Any value between 10 and 32 000. The default value is 100."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web max sessions"}),(0,t.jsx)(s.td,{children:"71"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Limits the number of simultaneous sessions. When you reach the limit set, the oldest session is closed (and ",(0,t.jsx)(s.em,{children:"On Web Legacy Close Session database method"})," is called) if the Web server needs to create a new one.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": Longint. The number of simultaneous sessions cannot exceed the total number of Web processes (Web Max Concurrent Processes option, 100 by default)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 100 (pass 0 to restore the default value)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web maximum requests size"}),(0,t.jsx)(s.td,{children:"27"}),(0,t.jsxs)(s.td,{children:["Scope: 4D local, 4D Server**",(0,t.jsx)(s.br,{}),"** ",(0,t.jsx)(s.strong,{children:"Description"}),": Maximum size (in bytes) of incoming HTTP requests (POST) that the Web server is authorized to process. By default, the value is 2 000 000, i.e. a little less than 2 MB. Passing the maximum value (2 147 483 647) means that, in practice, no limit is set.",(0,t.jsx)(s.br,{}),"This limit is used to avoid Web server saturation due to incoming requests that are too large. When a request reaches this limit, the 4D Web server refuses it.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 500 000 to 2 147 483 647."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web port ID"}),(0,t.jsx)(s.td,{children:"15"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": 4D in local mode and 4D Server.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"}),'  Sets or gets the number of the TCP port used by the 4D Web server with 4D in local mode and 4D Server. By default, the value is 80. The TCP port number is set on the "Web/Configuration" page of the Database Settings dialog box. You can use one of the constants in the ',(0,t.jsx)(s.em,{children:"TCP Port Numbers"})," theme for the ",(0,t.jsx)(s.em,{children:"value"})," parameter. This selector is useful within the framework of 4D Web servers that are compiled and merged using 4D Desktop (no access to the Design environment).",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values:"})," For more information about the TCP port number, refer to the ",(0,t.jsx)(s.em,{children:"Web Server Settings"})," section.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value:"})," 80"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web scalable session"}),(0,t.jsx)(s.td,{children:"90"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," Enables or disables the scalable session management mode (described in ",(0,t.jsx)(s.em,{children:"the User sessions page"})," on ",(0,t.jsx)(s.em,{children:"developer.4d.com"}),")",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 1 (enable mode) or 0 (disable mode). If the value is modified, the web server must be restarted so that the change is taken into account.",(0,t.jsx)(s.br,{}),"When this mode is enabled, the following options are ignored: Web inactive process timeout, Web max concurrent processes, Web session cookie name, and Web inactive session timeout."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session cookie domain"}),(0,t.jsx)(s.td,{children:"81"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope:"})," local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"}),' Sets or gets the value of the "domain" field of the session cookie. This selector (as well as selector 82) is useful for controlling the scope of the session cookies: If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values:"})," Text"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session cookie name"}),(0,t.jsx)(s.td,{children:"73"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Compatibility"}),": This selector is ignored when the Web scalable session mode is enabled.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"})," Sets the name of the cookie used for saving the legacy session ID.",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values:"})," Text ",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value:"}),' "4DSID_',(0,t.jsx)(s.em,{children:"AppName"}),'" (pass an empty string to restore the default value)']})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session cookie path"}),(0,t.jsx)(s.td,{children:"82"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope:"})," local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description:"}),' Sets or gets the value of the "path" field of the session cookie. This selector (as well as selector 81) is useful for controlling the scope of the session cookies: If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.',(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values:"})," Text"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Web session enable IP address validation"}),(0,t.jsx)(s.td,{children:"83"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Scope"}),": Local Web server",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Description"}),": Enables or disables IP address validation for session cookies. For security reasons, by default the 4D Web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between Wifi and 3G/4G networks, their IP address will change. In this case, you must pass 0 in this option to allow clients to be able to continue using their Web sessions even when the IP addresses change. Note that this setting lowers the security level of your application. ",(0,t.jsx)(s.br,{}),"When it is modified, this setting is effective immediately (you do not need to restart the HTTP server).",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Possible values"}),": 0 (disabled) or 1 (enabled)",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Default value"}),": 1 (IP addresses are checked)"]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["When you use the Web debug log ",(0,t.jsx)(s.em,{children:"selector"}),", you can receive one of the following constants in the ",(0,t.jsx)(s.em,{children:"value"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl disable web log"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"Web HTTP debug log is disabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable with all body parts"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"Web HTTP debug log is enabled with body parts in response and request"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable with request body"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"Web HTTP debug log is enabled with body part in request only"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable with response body"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"Web HTTP debug log is enabled with body part in response only"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"wdl enable without body"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"Web HTTP debug log is enabled without body parts (body size is provided in this case)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/commands/web-set-option",children:"WEB SET OPTION"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(296540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);