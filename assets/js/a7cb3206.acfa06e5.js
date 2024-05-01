"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61777],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},927981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"maintenance",title:"Maintenance Page"},s=void 0,c={unversionedId:"ServerWindow/maintenance",id:"version-20-R5/ServerWindow/maintenance",title:"Maintenance Page",description:"The Maintenance page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:",source:"@site/versioned_docs/version-20-R5/ServerWindow/maintenance.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/maintenance",permalink:"/docs/ServerWindow/maintenance",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fmaintenance.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"maintenance",title:"Maintenance Page"},sidebar:"docs",previous:{title:"Processes Page",permalink:"/docs/ServerWindow/processes"},next:{title:"Application Server Page",permalink:"/docs/ServerWindow/application-server"}},l={},p=[{value:"Last verification/compacting",id:"last-verificationcompacting",level:2},{value:"Verify Records and Indexes",id:"verify-records-and-indexes",level:3},{value:"Compact Data...",id:"compact-data",level:3},{value:"Uptime",id:"uptime",level:2},{value:"Restart server...",id:"restart-server",level:3},{value:"Last backup",id:"last-backup",level:2},{value:"Request and Debug logs",id:"request-and-debug-logs",level:2},{value:"Start/Stop Request and Debug Logs",id:"startstop-request-and-debug-logs",level:3},{value:"View Report",id:"view-report",level:3},{value:"Load logs configuration file",id:"load-logs-configuration-file",level:3},{value:"Pause logging",id:"pause-logging",level:3}],u={toc:p};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Maintenance")," page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(674286).Z,width:"1036",height:"699"})),(0,n.kt)("h2",r({},{id:"last-verificationcompacting"}),"Last verification/compacting"),(0,n.kt)("p",null,"These areas indicate the date, time and status of the last ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/MSC/verify"}),"data verification")," and ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/MSC/compact"}),"compacting operation")," carried out on the database."),(0,n.kt)("h3",r({},{id:"verify-records-and-indexes"}),"Verify Records and Indexes"),(0,n.kt)("p",null,"This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation."),(0,n.kt)("p",null,"All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/MSC/overview"}),"Maintenance and Security Center")," (MSC)."),(0,n.kt)("p",null,"After verification, a report file is generated in XML format on the server in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Project/architecture#logs"}),"maintenance Logs")," folder. The ",(0,n.kt)("strong",{parentName:"p"},"View Report")," button (named ",(0,n.kt)("strong",{parentName:"p"},"Download Report")," if the operation was carried out from a remote machine) lets you display the file in your browser."),(0,n.kt)("h3",r({},{id:"compact-data"}),"Compact Data..."),(0,n.kt)("p",null,"Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(278270).Z,width:"502",height:"356"})),(0,n.kt)("p",null,"After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/MSC/overview"}),"MSC"),"."),(0,n.kt)("p",null,"Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.")),(0,n.kt)("p",null,"After verification, a report file is generated in XML format on the server in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Project/architecture#logs"}),"maintenance Logs")," folder. The ",(0,n.kt)("strong",{parentName:"p"},"View Report")," button (named ",(0,n.kt)("strong",{parentName:"p"},"Download Report")," if the operation was carried out from a remote machine) lets you display the file in your browser."),(0,n.kt)("h2",r({},{id:"uptime"}),"Uptime"),(0,n.kt)("p",null,"This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes)."),(0,n.kt)("h3",r({},{id:"restart-server"}),"Restart server..."),(0,n.kt)("p",null,"This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After validation, 4D Server automatically closes and reopens the project. The 4D users can then be reconnected."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.")),(0,n.kt)("h2",r({},{id:"last-backup"}),"Last backup"),(0,n.kt)("p",null,"This area indicates the date and time of the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/MSC/backup"}),"last backup")," of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the ",(0,n.kt)("strong",{parentName:"p"},"Scheduler")," page of the structure settings."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Last backup"),": date and time of last backup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Next backup"),": date and time of next scheduled backup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Needed space"),": estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Available space"),": space available on the backup volume.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Start backup")," button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Settings..."),' button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.'),(0,n.kt)("h2",r({},{id:"request-and-debug-logs"}),"Request and Debug logs"),(0,n.kt)("p",null,"This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation."),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Debugging/debugLogFiles"}),(0,n.kt)("strong",{parentName:"a"},"Description of log files"))," section for details on log files."),(0,n.kt)("h3",r({},{id:"startstop-request-and-debug-logs"}),"Start/Stop Request and Debug Logs"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Start Request and Debug Logs")," button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This button only logs operations that are executed on the server.")),(0,n.kt)("p",null,"When the logs have been activated, the button title changes to ",(0,n.kt)("strong",{parentName:"p"},"Stop Request and Debug Logs"),', so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.'),(0,n.kt)("h3",r({},{id:"view-report"}),"View Report"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"View Report")," button (named ",(0,n.kt)("strong",{parentName:"p"},"Download report")," if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file."),(0,n.kt)("h3",r({},{id:"load-logs-configuration-file"}),"Load logs configuration file"),(0,n.kt)("p",null,"This button allows you to load a special server ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/Debugging/debugLogFiles#using-a-log-configuration-file"}),"log configuration file")," (",(0,n.kt)("inlineCode",{parentName:"p"},".json")," file). Such a file can be provided by 4D technical services to monitor and study specific cases."),(0,n.kt)("h3",r({},{id:"pause-logging"}),"Pause logging"),(0,n.kt)("p",null,"This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks."),(0,n.kt)("p",null,"When the logs have been paused, the button title changes to ",(0,n.kt)("strong",{parentName:"p"},"Resume logging"),", so that you can resume the logging operations."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can pause and resume logging using the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," command.")))}d.isMDXComponent=!0},674286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/server-maintenance-4bfb79992706819bcbe044fbc28cfeea.png"},278270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/server-shut-f9f06d837e57804645a3ab89d77b810f.png"}}]);