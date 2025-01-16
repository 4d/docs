"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19403"],{733088:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"ServerWindow/http-server","title":"HTTP Server Page","description":"The HTTP Server page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server.","source":"@site/versioned_docs/version-20-R8/ServerWindow/http-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/http-server","permalink":"/docs/ServerWindow/http-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-server","title":"HTTP Server Page"},"sidebar":"docs","previous":{"title":"SQL Server Page","permalink":"/docs/ServerWindow/sql-server"},"next":{"title":"Real Time Monitor Page","permalink":"/docs/ServerWindow/real-time-monitor"}}'),s=r("785893"),o=r("250065");let i={id:"http-server",title:"HTTP Server Page"},a=void 0,c={},l=[{value:"Start/Stop HTTP Server",id:"startstop-http-server",level:2},{value:"Web Information",id:"web-information",level:2},{value:"SOAP Information",id:"soap-information",level:2},{value:"HTTP Server Configuration",id:"http-server-configuration",level:2}];function h(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"HTTP Server"})," page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(960881).Z+"",width:"1036",height:"701"})}),"\n",(0,s.jsx)(t.p,{children:"The upper part of the page provides information about the current status of the HTTP server of 4D Server."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"State"}),": Started or Stopped"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Starting time"}),": Date and time the HTTP server was last launched."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Uptime"}),": Time elapsed since last startup of the HTTP server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total HTTP hits"}),": Number of (low level) HTTP hits received by the HTTP server since it was started."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"startstop-http-server",children:"Start/Stop HTTP Server"}),"\n",(0,s.jsx)(t.p,{children:"This button toggles and can be used to control the activation of the 4D Server HTTP server."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['When the HTTP server state is "Started," the button is titled ',(0,s.jsx)(t.strong,{children:"Stop HTTP Server"}),". If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests."]}),"\n",(0,s.jsxs)(t.li,{children:['When the HTTP server state is "Stopped," the button is titled ',(0,s.jsx)(t.strong,{children:"Start HTTP Server"}),". If you click on this button, the 4D Server HTTP server is immediately started; Web, REST, and SOAP requests are accepted."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"You must have a suitable license in order to be able to start the HTTP server."}),"\n",(0,s.jsx)(t.p,{children:"The HTTP server can also be launched automatically on application startup (Settings) or by programming."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"web-information",children:"Web Information"}),"\n",(0,s.jsx)(t.p,{children:"This area provides specific information about the Web server of 4D Server."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Web requests"}),": Accepted or Rejected. This information indicates whether the Web server is activated. Since the Web server is directly linked to the HTTP server, Web requests are accepted when the HTTP server is started and rejected when it is stopped."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Maximum connections"}),": Maximum number of Web connections allowed. This value depends on the license installed on the server machine."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"soap-information",children:"SOAP Information"}),"\n",(0,s.jsx)(t.p,{children:"This area provides specific information about the SOAP server of 4D Server and includes a control button."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"SOAP requests"}),": Accepted or Rejected. This information indicates whether the SOAP server is activated. In order for SOAP requests to be accepted, the HTTP server must be started and the SOAP server must explicitly accept the requests (see the Accept/Reject button)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Maximum connections"}),": Maximum number of SOAP connections allowed. This value depends on the license installed on the server machine."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept/Reject SOAP requests"})," button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the ",(0,s.jsx)(t.strong,{children:"Allow Web Services Requests"}),' option on the "Web Services" page of the Settings (and vice versa). You can also use the ',(0,s.jsx)(t.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1636.html",children:(0,s.jsx)(t.code,{children:"SOAP REJECT NEW REQUESTS"})})," command to refuse new SOAP requests, however this does not modify the value of the ",(0,s.jsx)(t.strong,{children:"Allow Web Services Requests"})," option."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you click on the ",(0,s.jsx)(t.strong,{children:"Accept SOAP requests"})," button and the HTTP server is stopped, 4D automatically starts it."]}),"\n",(0,s.jsx)(t.h2,{id:"http-server-configuration",children:"HTTP Server Configuration"}),"\n",(0,s.jsx)(t.p,{children:"This area provides information about the configuration parameters and operation of the HTTP server:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Auto-launched at startup"}),": parameter set via the Settings."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"HTTP Server processes (used/total)"}),": number of HTTP processes created on the server (current number of processes / total of all processes created)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cache memory"}),": size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the ",(0,s.jsx)(t.strong,{children:"Clear Cache"})," button to empty the current cache."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Listening to IP"}),", ",(0,s.jsx)(t.strong,{children:"HTTP Port"})," (80 by default), ",(0,s.jsx)(t.strong,{children:"TLS enabled"})," for HTTP connections (does not concern 4D nor SQL connections) and ",(0,s.jsx)(t.strong,{children:"HTTPS Port"})," used: current ",(0,s.jsx)(t.a,{href:"/docs/WebServer/webServerConfig",children:"configuration parameters"})," of the HTTP server, specified through the Settings or by programming."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Log file information"}),": name, format and date of the next automatic log backup of the HTTP server (logweb.txt file)."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},960881:function(e,t,r){r.d(t,{Z:function(){return n}});let n=r.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var n=r(667294);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);