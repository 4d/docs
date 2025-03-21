"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55977"],{836919:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/application-info","title":"Application info","description":"Application info : Object","source":"@site/versioned_docs/version-20-R7/commands-legacy/application-info.md","sourceDirName":"commands-legacy","slug":"/commands/application-info","permalink":"/docs/20-R7/commands/application-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapplication-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"application-info","title":"Application info","slug":"/commands/application-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Application file","permalink":"/docs/20-R7/commands/application-file"},"next":{"title":"Application type","permalink":"/docs/20-R7/commands/application-type"}}'),s=t("785893"),i=t("250065");let o={id:"application-info",title:"Application info",slug:"/commands/application-info",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Application info"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Information about the active application activity"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Application info"})," command returns an object providing detailed information about the active application's activity and network configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["The command can be executed on applications running in both standalone and client/server environments. The information returned depends on where ",(0,s.jsx)(n.strong,{children:"Application info"})," is executed. For example, if executed from a remote 4D, the information applies only to the remote workstation. If the command is called in a method that is executed on the server, the information returned applies to the the server."]}),"\n",(0,s.jsx)(n.p,{children:"The returned object contains the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Example"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cpuUsage(*)"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Percentage of processor used by 4D. Note, for Macs, the number displayed is for 1 core and represents an average for the processor."}),(0,s.jsx)(n.td,{children:"10.03"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"headless"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True if the application is running in headless mode. Possible values: true, false. For more information, see ",(0,s.jsx)(n.em,{children:"Command Line Interface"}),"."]}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IPAddressesAllowDeny"}),(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsxs)(n.td,{children:["4D Server only. Returns a collection of IP addresses that are allowed or denied in the database's settings. For more information, see ",(0,s.jsx)(n.em,{children:"IP configuration"}),"."]}),(0,s.jsx)(n.td,{children:'[{"mode": "allow", "ip": "192.168.*"},{...}]'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].mode"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'Property describing whether the IP address is allowed or not. Possible values: "allow" or "deny"'}),(0,s.jsx)(n.td,{children:'"allow"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].ip"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"IP address"}),(0,s.jsx)(n.td,{children:'"192.167.1.2"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IPAddressesToListen"}),(0,s.jsx)(n.td,{children:"collection"}),(0,s.jsxs)(n.td,{children:["4D Server only. Returns the IP addresses that 4D Server listens for. For more information, see ",(0,s.jsx)(n.em,{children:"IP configuration"}),"."]}),(0,s.jsx)(n.td,{children:'["192.168.18.12","192.168.18.10"]'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"launchedAsService"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True if application launched as a service. Possible values: true, false. For more information, see ",(0,s.jsx)(n.em,{children:"Registering a Database as a Service"}),"."]}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"networkInputThroughput(*)"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["The data rate (bytes/seconds) for network input of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see ",(0,s.jsx)(n.em,{children:"Monitor Page"}),"."]}),(0,s.jsx)(n.td,{children:"37311495"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"networkOutputThroughput(*)"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["The data rate (bytes/seconds) for network output of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see ",(0,s.jsx)(n.em,{children:"Monitor Page"}),"."]}),(0,s.jsx)(n.td,{children:"88058023"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"newConnectionsAllowed"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"4D Server only. True if new connections allowed. Possible values: true, false. For more information, see ."}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pid"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"ID of the 4D application instance process (provided by the OS) -- allows identifying each running 4D instance, for example from an external script"}),(0,s.jsx)(n.td,{children:"16600"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"portID"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["4D Server: port for active listening, 4D remote: port for remote connections. Not returned in standalone environment. Minimum: 1. For more information, see ",(0,s.jsx)(n.em,{children:"Port Number"}),"."]}),(0,s.jsx)(n.td,{children:"19814"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"remoteDebuggerSessionID"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Session ID of the remote application to which the server debugger is attached. This ID is also returned by ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/process-activity",children:"Process activity"}),"."]}),(0,s.jsx)(n.td,{children:'"A838A40BJN3NJKH..."'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SDIMode"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True if the application is running in SDI mode on Windows (useless on macOS). Possible values: true, false. For more information, see ",(0,s.jsx)(n.a,{href:"https://developer.4d.com/docs/Menus/sdi",children:"SDI mode"})," on ",(0,s.jsx)(n.em,{children:"developer.4d.com"})]}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TLSEnabled"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True if TLS enabled for client/server communications. Not returned in standalone environment. Possible values: true, false. For more information, see ",(0,s.jsx)(n.em,{children:"TLS Protocol and Client/Server Connections"}),"."]}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uptime"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Time elapsed (in seconds) since local 4D database was opened. For remote connections, returns the time elapsed since the connection was made."}),(0,s.jsx)(n.td,{children:"143"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"useLegacyNetworkLayer"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True if legacy network layer used for the application server. Not returned in standalone environment. Possible values: true, false. For more information, see ",(0,s.jsx)(n.em,{children:"Activating or deactivating the legacy network layer"}),"."]}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"useQUICNetworkLayer"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True if QUIC network layer used for the application server and db4d server (",(0,s.jsx)(n.em,{children:"beta"})," in 4D v20, see ",(0,s.jsx)(n.em,{children:"Compatibility page"}),"). Not returned in standalone environment. Possible values: true, false. For more information, see ",(0,s.jsx)(n.a,{href:"https://blog.4d.com/quic-network/",children:"this blog post"}),"."]}),(0,s.jsx)(n.td,{children:"false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"volumeShadowCopyStatus"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["Returns the status of the Volume Shadow Copy Service. Windows only. For more information, see ",(0,s.jsx)(n.em,{children:"Using Volume Shadow Copy Service on Windows"}),".  Possible values:                            ",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Constant"}),(0,s.jsx)(n.td,{children:"Value"}),(0,s.jsx)(n.td,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vss available"}),(0,s.jsx)(n.td,{children:"available"}),(0,s.jsx)(n.td,{children:"The service is available."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vss error"}),(0,s.jsx)(n.td,{children:"error"}),(0,s.jsx)(n.td,{children:"The service experienced an error."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vss not available"}),(0,s.jsx)(n.td,{children:"notAvailable"}),(0,s.jsx)(n.td,{children:"The service is unavailable."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vss update required"}),(0,s.jsx)(n.td,{children:"updateRequired"}),(0,s.jsx)(n.td,{children:"The service needs to be updated."})]})]})]})]}),(0,s.jsx)(n.td,{children:'"available"'})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) On Windows, you need to get this counter previously initialized, for example by a call to the ",(0,s.jsx)(n.strong,{children:"Application info"})," command in the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-startup-database-method",children:"On Startup database method"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following code returns an object containing information about the running application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $appInfo : Object\n $appInfo:=Application info\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the code is executed from a standalone environment, the object contains (for example):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "launchedAsService": false,\n  "volumeShadowCopyStatus": "notAvailable",\n  "cpuUsage": 10.035875,\n  "uptime": 469,\n  "headless": false,\n  "pid": 16500,\n  "networkInputThroughput": 377263157,\n  "networkOutputThroughput": 12345242236\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If the code is executed from a 4D remote client, the object contains (for example):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "launchedAsService": false,\n  "volumeShadowCopyStatus": "notAvailable",\n  "cpuUsage": 10.035875,\n  "portID": 19814,\n  "TLSEnabled": false,\n  "uptime": 143,\n  "headless": false,\n  "pid": 1550,\n  "useLegacyNetworkLayer": true,\n  "networkInputThroughput": 268047058,\n  "networkOutputThroughput": 12207686274\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If the code is executed on 4D Server, the object contains (for example):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "launchedAsService": false,\n  "volumeShadowCopyStatus": "notAvailable",\n  "cpuUsage": 10.016125,\n  "portID": 19814,\n  "TLSEnabled": false,\n  "uptime": 192,\n  "headless": false,\n  "pid": 9560,\n  "useLegacyNetworkLayer": true,\n  "useQUICNetworkLayer": false,\n  "newConnectionsAllowed": true,\n  "IPAddressesToListen": [\n    "192.168.18.8",\n    "192.168.18.7"\n  ],\n  "IPAddressesAllowDeny": [\n    {\n      "mode": "allow",\n      "ip": "192.168.*"\n    },\n    {\n      "mode": "deny",\n      "ip": "192.167.15.3"\n    },\n    {\n      "mode": "allow",\n      "ip": "192.167.1.2"\n    }\n  ],\n  "networkInputThroughput": 149014925,\n  "networkOutputThroughput": 80238805\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/execute-on-server",children:"Execute on server"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/get-database-parameter",children:"Get database parameter"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/system-info",children:"System info"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/reject-new-remote-connections",children:"REJECT NEW REMOTE CONNECTIONS"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1599"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);