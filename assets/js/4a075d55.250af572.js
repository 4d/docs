"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15359"],{112723:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>x,assets:()=>l,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"commands-legacy/monitored-activity","title":"Monitored activity","description":"Monitored activity  : Collection","source":"@site/versioned_docs/version-20-R7/commands-legacy/monitored-activity.md","sourceDirName":"commands-legacy","slug":"/commands/monitored-activity","permalink":"/docs/commands/monitored-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmonitored-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"monitored-activity","title":"Monitored activity","slug":"/commands/monitored-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MOBILE APP REFRESH SESSIONS","permalink":"/docs/commands/mobile-app-refresh-sessions"},"next":{"title":"OPEN URL","permalink":"/docs/commands/open-url"}}'),s=t("785893"),r=t("250065");let d={id:"monitored-activity",title:"Monitored activity",slug:"/commands/monitored-activity",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"activityKind = Activity language (1)",id:"activitykind--activity-language-1",level:5},{value:"Additional properties",id:"additional-properties",level:6},{value:"activityKind = Activity network (2)",id:"activitykind--activity-network-2",level:5},{value:"activityKind = Activity operations (4)",id:"activitykind--activity-operations-4",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(n){let e={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Monitored activity"}),"  : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Parameter"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Function result"}),(0,s.jsx)(e.td,{children:"Collection"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Collection of monitored activities"})]})})]}),"\n",(0,s.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," command returns a collection of objects describing operations recorded according to the specifications set by the ",(0,s.jsx)(e.a,{href:"/docs/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"})," command. It can be called and executed on 4D remote, 4D Server, and 4D standalone applications (if ",(0,s.jsx)(e.em,{children:"source"})," isn't from network activity)."]}),"\n",(0,s.jsx)(e.p,{children:"The objects in the returned collection have the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Property"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"activityKind"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsxs)(e.td,{children:["The type of recorded activity:",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{}),"                        ",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Constant"}),(0,s.jsx)(e.td,{children:"Value"}),(0,s.jsx)(e.td,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Activity language"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Language execution operations"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Activity network"}),(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"Network request operations"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Activity operations"}),(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"4D data operations"})]})]})]})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"activityDuration"}),(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsx)(e.td,{children:"The duration of the activity expressed in seconds"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"activityData"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsxs)(e.td,{children:["Object(s) containing specific properties depending on the type of recorded activity (",(0,s.jsx)(e.em,{children:"activityKind"}),"). In some circumstances, several objects can be returned for the same operation. In this case, the objects will have the same UUID. The additional properties in these objects are described in the sections below."]})]})]})]}),"\n",(0,s.jsx)(e.h5,{id:"activitykind--activity-language-1",children:"activityKind = Activity language (1)"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," The ",(0,s.jsx)(e.em,{children:"activityData"})," object uses the information defined by the ",(0,s.jsx)(e.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command for the ",(0,s.jsx)(e.em,{children:"4DDebugLog.txt (standard)"})," (if any), otherwise it uses a default mode. Starting log recording during execution of the ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," command will thus impact the returned results."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"activityData"})," object:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Property"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sequenceNumber"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Unique and sequential operation number in the logging session."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"elapsedTime"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Elapsed time since the debug log was started (expressed in milliseconds)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"processID"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Process ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uniqueProcessID"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Unique process ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"stackLevel"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Stack level"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"duration"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Length of time for operation (expressed in microseconds)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"kind"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["The kind of operation logged. Possible values:",(0,s.jsx)(e.br,{}),' "command" "method" "Message" "pluginMessage" "pluginCommand" "pluginCallback" "pluginEvent" "task" "member"']})]})]})]}),"\n",(0,s.jsx)(e.h6,{id:"additional-properties",children:"Additional properties"}),"\n",(0,s.jsxs)(e.p,{children:["The following additional properties are returned in the ",(0,s.jsx)(e.em,{children:"activityData"})," object according to the ",(0,s.jsx)(e.em,{children:"kind"})," of operation:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Property"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Kind"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"commandName"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"command"}),(0,s.jsx)(e.td,{children:"Command name"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"commandNumber"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"command"}),(0,s.jsx)(e.td,{children:"Command number"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"connectionUUID"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"task"}),(0,s.jsx)(e.td,{children:"Client machine UUID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"formEvent"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"command"}),(0,s.jsx)(e.td,{children:"Name of the form event"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"formMethod"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"command"}),(0,s.jsx)(e.td,{children:"Form method"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"functionName"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"member"}),(0,s.jsx)(e.td,{children:"Name of the ORDA member method"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"memberMethod"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"command"}),(0,s.jsx)(e.td,{children:"Localized string of the member method for 4D's object call"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"method"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"command"}),(0,s.jsx)(e.td,{children:"Localized names of 4D commands and functions"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"parameters"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["command",(0,s.jsx)(e.br,{}),"member",(0,s.jsx)(e.br,{}),"message",(0,s.jsx)(e.br,{}),"method",(0,s.jsx)(e.br,{}),"pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent",(0,s.jsx)(e.br,{}),"task"]}),(0,s.jsx)(e.td,{children:"Parameters passed in the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginCommandName"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent"]}),(0,s.jsx)(e.td,{children:"Name of the plug-in command"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginCommandNumber"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsxs)(e.td,{children:["pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent",(0,s.jsx)(e.br,{}),"pluginMessage"]}),(0,s.jsx)(e.td,{children:"Number of the plug-in command"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginExternalCall"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"pluginCallback"}),(0,s.jsx)(e.td,{children:"Plug-in SDK entry point call"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginMessageName"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"pluginMessage"}),(0,s.jsx)(e.td,{children:"Possible values: PackMsgServerDeInit PackMsgServerDisposeData PackMsgServerWriteData PackMsgServerReadData PackMsgServerKillClient PackMsgServerNewClient PackMsgServerInit PackMsgProcessDeInit PackMsgProcessInit PackMsgClientDeInit PackMsgClientInit"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pluginName"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["pluginCallback",(0,s.jsx)(e.br,{}),"pluginCommand",(0,s.jsx)(e.br,{}),"pluginEvent",(0,s.jsx)(e.br,{}),"pluginMessage"]}),(0,s.jsx)(e.td,{children:"Name of the plug-in"})]})]})]}),"\n",(0,s.jsx)(e.h5,{id:"activitykind--activity-network-2",children:"activityKind = Activity network (2)"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["If the debug logs have been stopped on the 4D Server ",(0,s.jsx)(e.a,{href:"/docs/commands/graph-settings",children:"GRAPH SETTINGS"}),", ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," will return nothing. If the logs are restarted on the server or via the ",(0,s.jsx)(e.a,{href:"/docs/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"})," command with Activity network, ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," will resume returning network activity information."]}),"\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.em,{children:"activityData"})," object uses the information defined by the ",(0,s.jsx)(e.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command for the ",(0,s.jsx)(e.em,{children:"4DRequestsLog.txt"})," (if any), otherwise it uses a default mode. Starting log recording during execution of the ",(0,s.jsx)(e.strong,{children:"Monitored activity"})," command will thus impact the returned results."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"activityData"})," object:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Property"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"sequenceNumber"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Unique and sequential operation number in the logging session"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"time"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:'Date and time in ISO 8601 format ("YYYY-MM-DDTHH:MM:SS.sss")'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"systemID"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"System ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"component"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["Component signature (",(0,s.jsx)(e.em,{children:"e.g."}),", 4SQLS or dbmg)"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"processInfoIndex"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsxs)(e.td,{children:['Corresponds to the "index" field in ',(0,s.jsx)(e.em,{children:"4DRequestsLog_ProcessInfo.txt"})," log, and permits linking a request to a process"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"request"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsxs)(e.td,{children:["Request ID for c/s messages, SQL requests, or ",(0,s.jsx)(e.a,{href:"/docs/commands/log-event",children:"LOG EVENT"})," messages"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"bytesIn"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Number of bytes received"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"bytesOut"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Number of bytes sent"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"execDuration"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsxs)(e.td,{children:["Depending on where generated:server_duration . ",(0,s.jsx)(e.br,{}),"OR,exec_duration when generated on the server --Time taken in microseconds for the server to process the request."]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"writeDuration"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Time taken in microseconds for sending the:Request (when run on the client).Response (when run on the server)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"serverDuration"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Time in microseconds for the client/server communication"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"taskKind"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Preemptive or cooperative (respectively 'p' or 'c')"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"rtt"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Time estimate in microseconds for the client to send the request and the server to acknowledge it. Only measured when using the ServerNet network layer, returns 0 when used with the legacy network layer.For Windows versions prior to Windows 10 or Windows Server 2016, the call will return 0."})]})]})]}),"\n",(0,s.jsx)(e.h5,{id:"activitykind--activity-operations-4",children:"activityKind = Activity operations (4)"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," The ",(0,s.jsx)(e.em,{children:"activityData"})," object is similar to the one returned by the ",(0,s.jsx)(e.a,{href:"/docs/commands/activity-snapshot",children:"ACTIVITY SNAPSHOT"})," command, except that it only thresholded and finished operations are returned."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"activityData"})," object:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Property"})}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"message"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Description of the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maxValue"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Maximum number of iterations for the operation (value=-1 for non-iterative operations)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"remote"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"boolean"}),(0,s.jsx)(e.td,{children:"Client / server operation. Possible values: true, false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uuid"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"UUID of the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"taskId"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Internal 4D identifier for the originating process"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"startTime"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:'Start time of the operation in ISO 8601 format ("YYYY-MM-DDTHH:MM:SS.sss")'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"duration"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Total time (expressed in milliseconds) of operation execution"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"title"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Additional information about the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"extraInfo"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"object"}),(0,s.jsxs)(e.td,{children:["Additional SQL information (if any):",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{})," extraInfo.SQL_Query (text): The SQL query extraInfo.SQL_User (text): User authenticated on SQL server"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dbContextInfo"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"object"}),(0,s.jsx)(e.td,{children:"Context information of the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"host_name"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Name of the host that launched the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user_name"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Name of 4D user whose session launched the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"task_name"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Name of the process that launched the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"task_id"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"ID of the process that launched the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"client_uid"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"(c/s operations only) UUID of the client machine that launched the database operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"is_remote_context"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"(c/s operations only) Indicates if operation was launced by the server via a stored procedure (value=0) or by a client (value=1)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user4d_id"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"ID of the 4D user on the client machine"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"user4d_alias"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["Alias set for the 4D user. See ",(0,s.jsx)(e.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"client_version"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsxs)(e.td,{children:["Encoded string value that expresses the version number of the 4D environment returned by the ",(0,s.jsx)(e.a,{href:"/docs/commands/application-version",children:"Application version"})," command"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dbOperationDetails"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"object"}),(0,s.jsx)(e.td,{children:"Information about operation calls to the database engine"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"table"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Name of the table in the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"field"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Name of the table field in the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"queryPlan"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Query plan for the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"operationType"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Type of operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"sortParameters"}),(0,s.jsx)(e.td,{children:"collection"}),(0,s.jsx)(e.td,{children:"Sort criteria"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"subOperations"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"collection"}),(0,s.jsx)(e.td,{children:"collection of activytData objects containing information about subordinate operations within the current operation."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].message"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Label of operations"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].maxValue"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Maximum number of iterations for the operation (value=-1 for non-iterative operations)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].remote"}),(0,s.jsx)(e.td,{children:"boolean"}),(0,s.jsx)(e.td,{children:"Client / server operation (0=true, 1=false)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].uuid"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"UUID of the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].taskId"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Internal 4D identifier for the originating process"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].startTime"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:'Start time of the operation in ISO 8601 format ("YYYY-MM-DDTHH:MM:SS.sss")'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].duration"}),(0,s.jsx)(e.td,{children:"longint"}),(0,s.jsx)(e.td,{children:"Total time (expressed in milliseconds) of operation execution"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].title"}),(0,s.jsx)(e.td,{children:"text"}),(0,s.jsx)(e.td,{children:"Additional information about the operation"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"[ ].extraInfo"}),(0,s.jsx)(e.td,{children:"object"}),(0,s.jsxs)(e.td,{children:["Additional SQL information (if any):",(0,s.jsx)(e.br,{}),(0,s.jsx)(e.br,{})," [ ].extraInfo.SQL_Query (text): The SQL query [ ].extraInfo.SQL_User (text): User authenticated on SQL server"]})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(e.p,{children:["See example for ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"/docs/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"})})]}),"\n",(0,s.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/commands/start-monitoring-activity",children:"START MONITORING ACTIVITY"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,s.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Command number"}),(0,s.jsx)(e.td,{children:"1713"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Thread safe"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return d}});var i=t(667294);let s={},r=i.createContext(s);function d(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);