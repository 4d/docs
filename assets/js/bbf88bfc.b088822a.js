"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5723"],{26217:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/activity-snapshot","title":"ACTIVITY SNAPSHOT","description":"ACTIVITY SNAPSHOT ( arrActivities {; } )ACTIVITY SNAPSHOT ( arrUUID ; arrStart ; arrDuration ; arrInfo {; arrDetails}{; } )","source":"@site/versioned_docs/version-20-R8/commands-legacy/activity-snapshot.md","sourceDirName":"commands-legacy","slug":"/commands/activity-snapshot","permalink":"/docs/20-R8/commands/activity-snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factivity-snapshot.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"activity-snapshot","title":"ACTIVITY SNAPSHOT","slug":"/commands/activity-snapshot","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tools","permalink":"/docs/20-R8/commands/theme/Tools"},"next":{"title":"BASE64 DECODE","permalink":"/docs/20-R8/commands/base64-decode"}}'),i=r("785893"),s=r("250065");let a={id:"activity-snapshot",title:"ACTIVITY SNAPSHOT",slug:"/commands/activity-snapshot",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"First syntax: ACTIVITY SNAPSHOT ( arrActivities {; *})",id:"first-syntax-activity-snapshot--arractivities--",level:3},{value:"Second syntax: ACTIVITY SNAPSHOT ( arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} {; *})",id:"second-syntax-activity-snapshot--arruuid--arrstart--arrduration--arrinfo-arrsubop--",level:3},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," ( ",(0,i.jsx)(n.em,{children:"arrActivities"})," {; *} )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," ( ",(0,i.jsx)(n.em,{children:"arrUUID"})," ; ",(0,i.jsx)(n.em,{children:"arrStart"})," ; ",(0,i.jsx)(n.em,{children:"arrDuration"})," ; ",(0,i.jsx)(n.em,{children:"arrInfo"})," {; ",(0,i.jsx)(n.em,{children:"arrDetails"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrActivities | arrUUID"}),(0,i.jsx)(n.td,{children:"Object array, Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsxs)(n.td,{children:["Complete description of operations (object array) or",(0,i.jsx)(n.br,{}),"Operation UUIDs (text array)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrStart"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Operation start times"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrDuration"}),(0,i.jsx)(n.td,{children:"Array integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Operation durations in milliseconds"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrInfo"}),(0,i.jsx)(n.td,{children:"Text array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Description"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"arrDetails"}),(0,i.jsx)(n.td,{children:"Object array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Details of context and sub-operations (if any)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If passed = Get server activity"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," command returns a single or several arrays describing operations in progress on the 4D data. These operations usually display a progress window."]}),"\n",(0,i.jsxs)(n.p,{children:["This command is used to get a snapshot of the ",(0,i.jsx)(n.em,{children:"x"})," operations that are most time-consuming and/or run most frequently, such as cache writing or the execution of formulas."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The information returned by the ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"}),' command is the same as that displayed on the "Real Time Monitor" (RTM) page of the 4D Server administration window (see ',(0,i.jsx)(n.em,{children:"4D Server Reference Guide"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," processes operations performed locally (with 4D single-user, 4D Server or 4D in remote mode). However, with 4D in remote mode, you can also get a snapshot of operations performed on the server: you just need to pass the asterisk (",(0,i.jsx)(n.em,{children:"*"}),") as the last parameter. In this case, the server data is recovered locally.",(0,i.jsx)(n.br,{}),"\nThe ",(0,i.jsx)(n.em,{children:"*"})," parameter is ignored when the command is executed on 4D Server or 4D single-user."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"ACTIVITY SNAPSHOT"})," command accepts two syntaxes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"syntax using only an object array."}),"\n",(0,i.jsx)(n.li,{children:"syntax using several arrays."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"first-syntax-activity-snapshot--arractivities--",children:"First syntax: ACTIVITY SNAPSHOT ( arrActivities {; *})"}),"\n",(0,i.jsxs)(n.p,{children:["With this syntax, all the operations are returned in a structured form in the 4D object array (",(0,i.jsx)(n.em,{children:"arrActivities"}),"). Each element of the array is an object built as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 "message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 "maxValue":12321,\xa0\xa0\xa0 \xa0\xa0\xa0 "currentValue":63212,\xa0\xa0\xa0 \xa0\xa0\xa0 "interruptible:0,\xa0\xa0\xa0 \xa0\xa0\xa0 "remote":0,\xa0\xa0\xa0 \xa0\xa0\xa0 "uuid":"deadbeef",\xa0\xa0\xa0 \xa0\xa0\xa0 "taskId":xxx,\xa0\xa0\xa0 \xa0\xa0\xa0 "startTime":"2014-03-20 13:37:00:123",\xa0\xa0\xa0 \xa0\xa0\xa0 "duration":92132,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbContextInfo":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_id": xxx,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user_name": Jean,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "host_name": HAL,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_name": "CreateIndexLocal",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_uid": "DE4DB33F33F"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user4d_id ": 1,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_version ": 123456\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbOperationDetails":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 table: "myTable"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 field: "Field_1"\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 "subOperations":[\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 {"message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ...}\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ]\xa0\xa0\xa0 },\xa0\xa0\xa0 {...}]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here is a description of each property returned:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"message"})," (text): label of operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"maxValue"})," (number): number of iterations set for the operation (-1 if non-iterative operation)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"currentValue"})," (number): current iteration"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"interruptible"})," (number): operation can be interrupted by user (0=true, 1=false)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"remote"})," (number): operation paired between client and server (0=true, 1=false)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"uuid"})," (text): UUID identifier of operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"taskId"})," (number): Internal identifier of the process at the origin of the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"startTime"}),' (text): start time of operation in the "yyyy:mm:dd hh:mm:ss:mls" format']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"duration"})," (number): duration of operation in milliseconds"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"dbContextInfo"})," (objet): information concerning operations handled by the database engine. Contains the following properties:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"host_name"})," (string): name of host that launched the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"user_name"})," (string): name of 4D user whose session launched the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"task_name"})," (string): name of process that launched the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"task_id"})," (num): ID number of process that launched the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"client_uid"})," (string): optional, uuid of client that launched the operation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"is_remote_context"})," (boolean, 0 or 1): optional, indicates whether the database operation was launched by a client (value 1) or by the server through a stored procedure (value 0)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"user4d_id"})," (num): ID number of the current 4D user on the client side"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"client_version"})," (string): four digits representing the version of the 4D engine of the application, as returned by the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/application-version",children:"Application version"})," command.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Note:"})," client_uid and is_remote_context are only available in client/server mode. client_uid is only returned when the database operation was started on a client machine."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"dbOperationDetails"})," (object): property returned only when the operation calls the database engine (this is the case, for instance, for queries and sorts). This is an object containing specific information related to the operation itself. The properties available depend on the type of database operation performed. More specifically, these properties include:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"table (string): name of table involved in the operation"}),"\n",(0,i.jsx)(n.li,{children:"field (string): name of field involved in the operation"}),"\n",(0,i.jsx)(n.li,{children:"queryPlan (string): query plan defined for the operation"}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"subOperations"})," (array): array of objects containing sub-operations of the current operation (if any). The structure of each sub-element is identical to the one in the main object. If the current operation does not have any sub-operations, then ",(0,i.jsx)(n.em,{children:"subOperations"})," is empty."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"second-syntax-activity-snapshot--arruuid--arrstart--arrduration--arrinfo-arrsubop--",children:"Second syntax: ACTIVITY SNAPSHOT ( arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} {; *})"}),"\n",(0,i.jsx)(n.p,{children:"With this syntax, all the operations are returned in several synchronized arrays (each operation causes an element to be added to all of the arrays). The following arrays are returned:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrUUID"}),": contains the UUIDs for each operation (corresponds to the ",(0,i.jsx)(n.em,{children:"uuid"})," property of the ",(0,i.jsx)(n.em,{children:"arrActivities"})," object in the previous syntax)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrStart"}),": contains the start times for each operation (corresponds to the ",(0,i.jsx)(n.em,{children:"startTime"})," property of the ",(0,i.jsx)(n.em,{children:"arrActivities"})," object)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrDuration"}),": contains the durations of each operation in milliseconds (corresponds to the ",(0,i.jsx)(n.em,{children:"duration"})," property of the ",(0,i.jsx)(n.em,{children:"arrActivities"})," object)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrInfo"})," : contains the labels describing each operation (corresponds to the ",(0,i.jsx)(n.em,{children:"message"})," property of the ",(0,i.jsx)(n.em,{children:"arrActivities"})," object)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"arrDetails"})," (optional): each element of this array is an object containing the following properties:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:'"dbContextInfo"'})," (object): see above"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:'"dbOperationDetails"'})," (object): see above"]}),"\n",(0,i.jsxs)(n.li,{children:['"subOperations". The value of this property is an object array containing all the sub-operations for the current operation. If the current operation does not have any sub-operations, the value of the ',(0,i.jsx)(n.em,{children:"subOperations"})," property is an empty array (corresponds to the ",(0,i.jsx)(n.em,{children:"subOperations"})," property of the ",(0,i.jsx)(n.em,{children:"arrActivities"})," object)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"This method, executed in a separate process on 4D or 4D Server, provides a snapshot of the operations that are underway:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrUUID;0)\n\xa0ARRAY TEXT(arrStart;0)\n\xa0ARRAY LONGINT(arrDuration;0)\n\xa0ARRAY TEXT(arrInfo;0)\n\xa0\n\xa0Repeat\n\xa0\xa0\xa0\xa0ACTIVITY SNAPSHOT(arrUUID;arrStart;arrDuration;arrInfo)\n\xa0\xa0\xa0\xa0If(Size of array(arrUUID)>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// calling of debugger\n\xa0\xa0\xa0\xa0End if\n\xa0Until(False)\xa0// Infinite loop\n"})}),"\n",(0,i.jsx)(n.p,{children:"You get arrays such as:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(737134).Z+"",width:"585",height:"705"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1277"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},737134:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict1213741.en-fb4452c45d68e10d51b10a4a335109a6.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(667294);let i={},s=t.createContext(i);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);