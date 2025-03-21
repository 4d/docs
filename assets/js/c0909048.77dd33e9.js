"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22232"],{135317:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"settings/web","title":"Web page","description":"Using the tabs on the Web page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see Web server. For more information about 4D Web services, refer to the Publication and use of Web Services chapter.","source":"@site/versioned_docs/version-20/settings/web.md","sourceDirName":"settings","slug":"/settings/web","permalink":"/docs/20/settings/web","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fweb.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"web","title":"Web page"},"sidebar":"docs","previous":{"title":"Client-server page","permalink":"/docs/20/settings/client-server"},"next":{"title":"SQL page","permalink":"/docs/20/settings/sql"}}'),r=n("785893"),i=n("250065");let o={id:"web",title:"Web page"},a=void 0,c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Publishing Information",id:"publishing-information",level:3},{value:"Launch Web Server at Startup",id:"launch-web-server-at-startup",level:4},{value:"Enable HTTP",id:"enable-http",level:4},{value:"HTTP Port",id:"http-port",level:4},{value:"IP Address",id:"ip-address",level:4},{value:"Enable HTTPS",id:"enable-https",level:4},{value:"HTTPS Port",id:"https-port",level:4},{value:"Allow database access through 4DSYNC URLs",id:"allow-database-access-through-4dsync-urls",level:4},{value:"Paths",id:"paths",level:3},{value:"Default HTML Root",id:"default-html-root",level:4},{value:"Default Home Page",id:"default-home-page",level:4},{value:"Options (I)",id:"options-i",level:2},{value:"Cache",id:"cache",level:3},{value:"Use the 4D Web cache",id:"use-the-4d-web-cache",level:4},{value:"Pages Cache Size",id:"pages-cache-size",level:4},{value:"Clear Cache",id:"clear-cache",level:4},{value:"Web Process",id:"web-process",level:3},{value:"Scalable sessions (multi-process sessions)",id:"scalable-sessions-multi-process-sessions",level:4},{value:"No sessions",id:"no-sessions",level:4},{value:"Legacy sessions (single process sessions)",id:"legacy-sessions-single-process-sessions",level:4},{value:"Maximum Concurrent Web Processes",id:"maximum-concurrent-web-processes",level:4},{value:"Reuse Temporary Contexts",id:"reuse-temporary-contexts",level:4},{value:"Use preemptive processes",id:"use-preemptive-processes",level:4},{value:"Inactive Process Timeout",id:"inactive-process-timeout",level:4},{value:"Web Passwords",id:"web-passwords",level:3},{value:"Options (II)",id:"options-ii",level:2},{value:"Text Conversion",id:"text-conversion",level:3},{value:"Send Extended Characters Directly",id:"send-extended-characters-directly",level:4},{value:"Standard Set",id:"standard-set",level:4},{value:"Keep-Alive Connections",id:"keep-alive-connections",level:3},{value:"CORS Settings",id:"cors-settings",level:3},{value:"Enable CORS",id:"enable-cors",level:4},{value:"Domain names/HTTP methods allowed",id:"domain-nameshttp-methods-allowed",level:4},{value:"Log (type)",id:"log-type",level:2},{value:"Log Format",id:"log-format",level:3},{value:"Log (backup)",id:"log-backup",level:2},{value:"Web Services",id:"web-services",level:2},{value:"Server Side",id:"server-side",level:3},{value:"Client Side",id:"client-side",level:3},{value:"Web Features",id:"web-features",level:2},{value:"Publishing",id:"publishing",level:3},{value:"Expose as REST server",id:"expose-as-rest-server",level:4},{value:"Access",id:"access",level:3},{value:"Web Studio",id:"web-studio",level:3},{value:"Enable access to the web studio",id:"enable-access-to-the-web-studio",level:4}];function l(e){let s={a:"a",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Using the tabs on the ",(0,r.jsx)(s.strong,{children:"Web"})," page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/overview",children:"Web server"}),". For more information about 4D Web services, refer to the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html",children:"Publication and use of Web Services"})," chapter."]}),"\n",(0,r.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(s.h3,{id:"publishing-information",children:"Publishing Information"}),"\n",(0,r.jsx)(s.h4,{id:"launch-web-server-at-startup",children:"Launch Web Server at Startup"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerAdmin#starting-the-4d-web-server",children:"Web server administration"})," section."]}),"\n",(0,r.jsx)(s.h4,{id:"enable-http",children:"Enable HTTP"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether or not the Web server will accept non-secure connections. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#enable-http",children:"Enable HTTP"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"http-port",children:"HTTP Port"}),"\n",(0,r.jsxs)(s.p,{children:["Listening IP (TCP) port number for HTTP. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#http-port",children:"HTTP Port"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"ip-address",children:"IP Address"}),"\n",(0,r.jsxs)(s.p,{children:["IP address on which the 4D web server will receive HTTP requests (4D local and 4D Server). See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#ip-address-to-listen",children:"IP Address to listen"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"enable-https",children:"Enable HTTPS"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether or not the Web server will accept secure connections. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#enable-https",children:"Enable HTTPS"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"https-port",children:"HTTPS Port"}),"\n",(0,r.jsxs)(s.p,{children:["Allows you to modify the TCP/IP port number used by the Web server for secured HTTP connections over TLS (HTTPS protocol). See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#https-port",children:"HTTPS Port"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"allow-database-access-through-4dsync-urls",children:"Allow database access through 4DSYNC URLs"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Compatibility Note"}),": This option is ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#deprecated-settings",children:"deprecated"}),". For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests."]}),"\n",(0,r.jsx)(s.h3,{id:"paths",children:"Paths"}),"\n",(0,r.jsx)(s.h4,{id:"default-html-root",children:"Default HTML Root"}),"\n",(0,r.jsxs)(s.p,{children:["Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#root-folder",children:"Root Folder"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"default-home-page",children:"Default Home Page"}),"\n",(0,r.jsxs)(s.p,{children:["Designate a default home page for the Web server. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#default-home-page",children:"Default Home page"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"options-i",children:"Options (I)"}),"\n",(0,r.jsx)(s.h3,{id:"cache",children:"Cache"}),"\n",(0,r.jsx)(s.h4,{id:"use-the-4d-web-cache",children:"Use the 4D Web cache"}),"\n",(0,r.jsxs)(s.p,{children:["Enables the web page cache. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#cache",children:"Cache"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"pages-cache-size",children:"Pages Cache Size"}),"\n",(0,r.jsxs)(s.p,{children:["Sets the cache size. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#cache",children:"Cache"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"clear-cache",children:"Clear Cache"}),"\n",(0,r.jsxs)(s.p,{children:["At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).\nTo do so, you just have to click on the ",(0,r.jsx)(s.strong,{children:"Clear Cache"})," button. The cache is then immediately cleared."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["You can also use the special URL ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerAdmin#4dcacheclear",children:"/4DCACHECLEAR"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"web-process",children:"Web Process"}),"\n",(0,r.jsx)(s.p,{children:"This area allows you to configure how the web server will handle user sessions and their associated processes."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Legacy sessions"})," option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"scalable-sessions-multi-process-sessions",children:"Scalable sessions (multi-process sessions)"}),"\n",(0,r.jsxs)(s.p,{children:["When you select this option (recommended), a user session is managed through a ",(0,r.jsx)(s.strong,{children:"Session"})," object. See the ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/sessions#enabling-sessions",children:"User sessions page"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"no-sessions",children:"No sessions"}),"\n",(0,r.jsxs)(s.p,{children:["When this option is selected, the web server does not provide any specific support for ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/sessions",children:"user sessions"}),". Successive requests from web clients are always independent and no context is maintained on the server."]}),"\n",(0,r.jsx)(s.p,{children:"In this mode, you can configure additional web server setttings:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#maximum-concurrent-web-processes",children:"Maximum Concurrent Web Processes"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#reuse-temporary-contexts",children:"Reuse Temporary Contexts (4D in remote mode)"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#use-preemptive-processes",children:"Use preemptive processes"})}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"legacy-sessions-single-process-sessions",children:"Legacy sessions (single process sessions)"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Compatibility Note:"})," This option is only available in databases/projects created with a 4D version prior to 4D v18 R6."]}),"\n",(0,r.jsxs)(s.p,{children:["This option enables the handling of legacy user sessions by the 4D HTTP server. This mechanism is described in the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html",children:"Web Sessions Management (Legacy)"})," section. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#keep-session",children:"Keep Session"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["When selected, the ",(0,r.jsx)(s.a,{href:"#reuse-temporary-contexts",children:"Reuse Temporary Contexts (4D in remote mode)"})," option is automatically checked (and locked)."]}),"\n",(0,r.jsx)(s.h4,{id:"maximum-concurrent-web-processes",children:"Maximum Concurrent Web Processes"}),"\n",(0,r.jsxs)(s.p,{children:["Not available with ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/sessions",children:"scalable sessions"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Strictly high limit of concurrent web processes. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"Maximum Concurrent Web Processes"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"reuse-temporary-contexts",children:"Reuse Temporary Contexts"}),"\n",(0,r.jsxs)(s.p,{children:["Not available with ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/sessions",children:"scalable sessions"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Allows you to optimize the operation of the 4D Web server in remote mode. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#reuse-temporary-contexts-in-remote-mode",children:"Reuse temporary contexts in remote mode)"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"use-preemptive-processes",children:"Use preemptive processes"}),"\n",(0,r.jsxs)(s.p,{children:["Not available with ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/sessions",children:"scalable sessions"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Enables preemptive web processes in your compiled applications. When ",(0,r.jsx)(s.strong,{children:"Use preemptive processes"})," is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/preemptiveWeb",children:"Using preemptive Web processes"}),"."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#use-preemptive-processes",children:"Enabling the preemptive mode for the web server"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"inactive-process-timeout",children:"Inactive Process Timeout"}),"\n",(0,r.jsxs)(s.p,{children:["Not available with ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/sessions",children:"scalable sessions"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Allows you to set the maximum timeout before closing for inactive Web processes on the server. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#inactive-process-timeout",children:"Inactive Process Timeout"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"web-passwords",children:"Web Passwords"}),"\n",(0,r.jsx)(s.p,{children:"Set the authentication system that you want to apply to your Web server. Three options are proposed:"}),"\n",(0,r.jsx)(s.p,{children:"Custom (default)\nPasswords with BASIC protocol\nPasswords with DIGEST protocol"}),"\n",(0,r.jsxs)(s.p,{children:["Using ",(0,r.jsx)(s.strong,{children:"Custom"})," authentication is recommended. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/authentication",children:(0,r.jsx)(s.strong,{children:"Authentication"})})," chapter in the ",(0,r.jsx)(s.em,{children:"Web Development"})," documentation."]}),"\n",(0,r.jsx)(s.h2,{id:"options-ii",children:"Options (II)"}),"\n",(0,r.jsx)(s.h3,{id:"text-conversion",children:"Text Conversion"}),"\n",(0,r.jsx)(s.h4,{id:"send-extended-characters-directly",children:"Send Extended Characters Directly"}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#deprecated-settings",children:"Deprecated Settings"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"standard-set",children:"Standard Set"}),"\n",(0,r.jsxs)(s.p,{children:["Define the set of characters to be used by the 4D Web server. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#character-set",children:"Character Set"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"keep-alive-connections",children:"Keep-Alive Connections"}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#keep-alive-connections",children:"Deprecated Settings"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"cors-settings",children:"CORS Settings"}),"\n",(0,r.jsx)(s.h4,{id:"enable-cors",children:"Enable CORS"}),"\n",(0,r.jsxs)(s.p,{children:["Enables Cross-origin resource sharing (CORS) service. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#enable-cors-service",children:"Enable CORS Service"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"domain-nameshttp-methods-allowed",children:"Domain names/HTTP methods allowed"}),"\n",(0,r.jsxs)(s.p,{children:["List of allowed hosts and methods for the CORS service. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#cors-settings",children:"CORS Settings"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"log-type",children:"Log (type)"}),"\n",(0,r.jsx)(s.h3,{id:"log-format",children:"Log Format"}),"\n",(0,r.jsxs)(s.p,{children:["Starts or stops the recording of requests received by the 4D web server in the ",(0,r.jsx)(s.em,{children:"logweb.txt"})," file and sets its format. See ",(0,r.jsx)(s.a,{href:"/docs/20/WebServer/webServerConfig#log-recording",children:"Log Recording"}),"."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["The activation and deactivation of the log file of requests can also be carried out by programming using the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1210.html",children:"WEB SET OPTION"})," command."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The log format menu provides the following options:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"No Log File"}),": When this option is selected, 4D will not generate a log file of requests."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"CLF (Common Log Format)"}),": When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:",(0,r.jsx)(s.br,{}),'\nhost rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length',(0,r.jsx)(s.br,{}),"\nEach field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10)."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"host: IP address of the client (ex. 192.100.100.10)"}),"\n",(0,r.jsx)(s.li,{children:"rfc931: information not generated by 4D, it's always - (a minus sign)"}),"\n",(0,r.jsx)(s.li,{children:"user: user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore)."}),"\n",(0,r.jsx)(s.li,{children:"DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"The date and time are local to the server."}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"request: request sent by the client (ex. GET /index.htm HTTP/1.0)"}),"\n",(0,r.jsx)(s.li,{children:"state: reply given by the server."}),"\n",(0,r.jsx)(s.li,{children:"length: size of the data returned (except the HTTP header) or 0."}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds.\nThe possible values of state are as follows:\n200: OK\n204: No contents\n302: Redirection\n304: Not modified\n400: Incorrect request\n401: Authentication required\n404: Not found\n500: Internal error\nThe CLF format cannot be customized."]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"DLF (Combined Log Format)"}),": When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Referer: Contains the URL of the page pointing to the requested document."}),"\n",(0,r.jsx)(s.li,{children:"User-agent: Contains the name and version of the browser or software of the client at the origin of the request."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"The DLF format cannot be customized."}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ELF (Extended Log Format)"}),": When this option is selected, the request log is generated in ELF format. The ELF format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WLF (WebStar Log Format)"}),": When this option is selected, the request log is generated in WLF format. WLF format was developed specifically for the 4D WebSTAR server. It is similar to the ELF format, with only a few additional fields. Like the ELF format, it can be customized."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Configuring the fields"}),'\nWhen you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, use the arrow buttons or simply drag and drop the desired fields into the "Selected Tokens" area.']}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"}),": You cannot select the same field twice."]}),"\n",(0,r.jsx)(s.p,{children:"The following table lists the fields available for each format (in alphabetical order) and describes its contents:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"ELF"}),(0,r.jsx)(s.th,{children:"WLF"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BYTES_RECEIVED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Number of bytes received by the server"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BYTES_SENT"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Number of bytes sent by the server to the client"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C_DNS"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"IP address of the DNS (ELF: field identical to the C_IP field)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C_IP"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"IP address of the client (for example 192.100.100.10)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CONNECTION_ID"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Connection ID number"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(COOKIE)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Information about cookies contained in the HTTP request"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(HOST)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Host field of the HTTP request"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(REFERER)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"URL of the page pointing to the requested document"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(USER_AGENT)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Information about the software and operating system of the client"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_SIP"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"IP address of the server"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_URI"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"URI on which the request is made"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_URI_QUERY"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Request query parameters"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_URI_STEM"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Part of request without query parameters"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DATE"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"DD: day, MMM: 3-letter abbreviation for month (Jan, Feb, etc.), YYYY: year"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"METHOD"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"HTTP method used for the request sent to the server"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PATH_ARGS"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:'CGI parameters: string located after the "$" character'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"STATUS"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Reply provided by the server"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TIME"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"HH: hour, MM: minutes, SS: seconds"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TRANSFER_TIME"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Time requested by server to generate the reply"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"USER"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"User name if authenticated; otherwise - (minus sign)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"If the user name contains spaces, they are replaced by _ (underlines)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"URL"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"URL requested by the client"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Dates and times are given in GMT."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"log-backup",children:"Log (backup)"}),"\n",(0,r.jsx)(s.p,{children:"Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"No Backup"}),": The scheduled backup function is deactivated."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X hour(s)"}),": This option is used to program backups on an hourly basis. You can enter a value between 1 and 24 ."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"starting at"}),": Used to set the time at which the first back up will begin."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X day(s) at X"}),": This option is used to program backups on a daily basis. Enter 1 if you want to perform a daily backup. When this option is checked, you must indicate the time when the backup must be started."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X week(s), day at X"}),": This option is used to program backups on a weekly basis. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started. You can select several days of the week if desired. For example, you can use this option to set two weekly backups: one on Wednesdays and one on Fridays."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X month(s), Xth day at X"}),": This option is used to program backups on a monthly basis. Enter 1 if you want to perform a monthly backup. When this option is checked, you must indicate the day of the month and the time when the backup must be started."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X MB"}),": This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"web-services",children:"Web Services"}),"\n",(0,r.jsx)(s.p,{children:"You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side)."}),"\n",(0,r.jsxs)(s.p,{children:["For more information about the support of Web Services in 4D, refer to the ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html",children:"Publication and use of Web Services"})," chapter."]}),"\n",(0,r.jsx)(s.h3,{id:"server-side",children:"Server Side"}),"\n",(0,r.jsx)(s.p,{children:'This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.'}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Allow Web Services Requests"}),": This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the ",(0,r.jsx)(s.em,{children:"Published in WSDL"})," attribute. When this option is checked, 4D creates the WSDL file."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Web Service Name"}),': This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. By default, 4D uses the name A_WebService.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Web Services Namespace"}),": This area is used to change the namespace of the Web Services published by 4D. Each Web Service published on the Internet must be unique. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Typically, the namespace begins with the URL of the company (",(0,r.jsx)(s.a,{href:"http://mycompany.com/mynamespace",children:"http://mycompany.com/mynamespace"}),"). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. By default, 4D uses the following namespace: ",(0,r.jsx)(s.a,{href:"http://www.4d.com/namespace/default",children:"http://www.4d.com/namespace/default"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters)."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"client-side",children:"Client Side"}),"\n",(0,r.jsx)(s.p,{children:'This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.'}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Wizard Method Prefix"}),': This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. By default, 4D uses the prefix "proxy_".']}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"web-features",children:"Web Features"}),"\n",(0,r.jsx)(s.p,{children:"This page contains the options used to enable and control advanced Web features such as the REST server."}),"\n",(0,r.jsx)(s.h3,{id:"publishing",children:"Publishing"}),"\n",(0,r.jsx)(s.h4,{id:"expose-as-rest-server",children:"Expose as REST server"}),"\n",(0,r.jsxs)(s.p,{children:["Starts and stops the REST Server. See ",(0,r.jsx)(s.a,{href:"/docs/20/REST/configuration",children:"REST Server Configuration"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"access",children:"Access"}),"\n",(0,r.jsxs)(s.p,{children:["This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See ",(0,r.jsx)(s.a,{href:"/docs/20/REST/configuration#configuring-rest-access",children:"Configuring REST access"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"web-studio",children:"Web Studio"}),"\n",(0,r.jsx)(s.h4,{id:"enable-access-to-the-web-studio",children:"Enable access to the web studio"}),"\n",(0,r.jsx)(s.p,{children:"Enables general access to the web studio. You still need to configure it at every project level."})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var t=n(667294);let r={},i=t.createContext(r);function o(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);