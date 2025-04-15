"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4020"],{967417:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"ServerWindow/maintenance","title":"Maintenance Page","description":"The Maintenance page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:","source":"@site/versioned_docs/version-20-R8/ServerWindow/maintenance.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/maintenance","permalink":"/docs/ServerWindow/maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmaintenance.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"maintenance","title":"Maintenance Page"},"sidebar":"docs","previous":{"title":"Processes Page","permalink":"/docs/ServerWindow/processes"},"next":{"title":"Application Server Page","permalink":"/docs/ServerWindow/application-server"}}'),a=n("785893"),o=n("250065");let r={id:"maintenance",title:"Maintenance Page"},s=void 0,c={},d=[{value:"Last verification/compacting",id:"last-verificationcompacting",level:2},{value:"Verify Records and Indexes",id:"verify-records-and-indexes",level:3},{value:"Compact Data...",id:"compact-data",level:3},{value:"Uptime",id:"uptime",level:2},{value:"Restart server...",id:"restart-server",level:3},{value:"Last backup",id:"last-backup",level:2},{value:"Request and Debug logs",id:"request-and-debug-logs",level:2},{value:"Start/Stop Request and Debug Logs",id:"startstop-request-and-debug-logs",level:3},{value:"View Report",id:"view-report",level:3},{value:"Load logs configuration file",id:"load-logs-configuration-file",level:3},{value:"Pause logging",id:"pause-logging",level:3}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Maintenance"})," page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(248246).Z+"",width:"1036",height:"699"})}),"\n",(0,a.jsx)(t.h2,{id:"last-verificationcompacting",children:"Last verification/compacting"}),"\n",(0,a.jsxs)(t.p,{children:["These areas indicate the date, time and status of the last ",(0,a.jsx)(t.a,{href:"/docs/MSC/verify",children:"data verification"})," and ",(0,a.jsx)(t.a,{href:"/docs/MSC/compact",children:"compacting operation"})," carried out on the database."]}),"\n",(0,a.jsx)(t.h3,{id:"verify-records-and-indexes",children:"Verify Records and Indexes"}),"\n",(0,a.jsx)(t.p,{children:"This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation."}),"\n",(0,a.jsxs)(t.p,{children:["All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the ",(0,a.jsx)(t.a,{href:"/docs/MSC/overview",children:"Maintenance and Security Center"})," (MSC)."]}),"\n",(0,a.jsxs)(t.p,{children:["After verification, a report file is generated in XML format on the server in the ",(0,a.jsx)(t.a,{href:"/docs/Project/architecture#logs",children:"maintenance Logs"})," folder. The ",(0,a.jsx)(t.strong,{children:"View Report"})," button (named ",(0,a.jsx)(t.strong,{children:"Download Report"})," if the operation was carried out from a remote machine) lets you display the file in your browser."]}),"\n",(0,a.jsx)(t.h3,{id:"compact-data",children:"Compact Data..."}),"\n",(0,a.jsx)(t.p,{children:"Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(171944).Z+"",width:"502",height:"356"})}),"\n",(0,a.jsxs)(t.p,{children:["After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the ",(0,a.jsx)(t.a,{href:"/docs/MSC/overview",children:"MSC"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["After verification, a report file is generated in XML format on the server in the ",(0,a.jsx)(t.a,{href:"/docs/Project/architecture#logs",children:"maintenance Logs"})," folder. The ",(0,a.jsx)(t.strong,{children:"View Report"})," button (named ",(0,a.jsx)(t.strong,{children:"Download Report"})," if the operation was carried out from a remote machine) lets you display the file in your browser."]}),"\n",(0,a.jsx)(t.h2,{id:"uptime",children:"Uptime"}),"\n",(0,a.jsx)(t.p,{children:"This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes)."}),"\n",(0,a.jsx)(t.h3,{id:"restart-server",children:"Restart server..."}),"\n",(0,a.jsx)(t.p,{children:"This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After validation, 4D Server automatically closes and reopens the project. The 4D users can then be reconnected."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"last-backup",children:"Last backup"}),"\n",(0,a.jsxs)(t.p,{children:["This area indicates the date and time of the ",(0,a.jsx)(t.a,{href:"/docs/MSC/backup",children:"last backup"})," of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the ",(0,a.jsx)(t.strong,{children:"Scheduler"})," page of the structure settings."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Last backup"}),": date and time of last backup."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Next backup"}),": date and time of next scheduled backup."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Needed space"}),": estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Available space"}),": space available on the backup volume."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Start backup"})," button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the ",(0,a.jsx)(t.strong,{children:"Settings..."}),' button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.']}),"\n",(0,a.jsx)(t.h2,{id:"request-and-debug-logs",children:"Request and Debug logs"}),"\n",(0,a.jsx)(t.p,{children:"This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation."}),"\n",(0,a.jsxs)(t.p,{children:["Refer to the ",(0,a.jsx)(t.a,{href:"/docs/Debugging/debugLogFiles",children:(0,a.jsx)(t.strong,{children:"Description of log files"})})," section for details on log files."]}),"\n",(0,a.jsx)(t.h3,{id:"startstop-request-and-debug-logs",children:"Start/Stop Request and Debug Logs"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Start Request and Debug Logs"})," button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"This button only logs operations that are executed on the server."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["When the logs have been activated, the button title changes to ",(0,a.jsx)(t.strong,{children:"Stop Request and Debug Logs"}),', so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.']}),"\n",(0,a.jsx)(t.h3,{id:"view-report",children:"View Report"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"View Report"})," button (named ",(0,a.jsx)(t.strong,{children:"Download report"})," if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file."]}),"\n",(0,a.jsx)(t.h3,{id:"load-logs-configuration-file",children:"Load logs configuration file"}),"\n",(0,a.jsxs)(t.p,{children:["This button allows you to load a special server ",(0,a.jsx)(t.a,{href:"/docs/Debugging/debugLogFiles#using-a-log-configuration-file",children:"log configuration file"})," (",(0,a.jsx)(t.code,{children:".json"})," file). Such a file can be provided by 4D technical services to monitor and study specific cases."]}),"\n",(0,a.jsx)(t.h3,{id:"pause-logging",children:"Pause logging"}),"\n",(0,a.jsx)(t.p,{children:"This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks."}),"\n",(0,a.jsxs)(t.p,{children:["When the logs have been paused, the button title changes to ",(0,a.jsx)(t.strong,{children:"Resume logging"}),", so that you can resume the logging operations."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["You can pause and resume logging using the ",(0,a.jsx)(t.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},248246:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png"},171944:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png"},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var i=n(667294);let a={},o=i.createContext(a);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);