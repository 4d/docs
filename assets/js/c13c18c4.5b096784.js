"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82227"],{625943:function(s,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>h,contentTitle:()=>o});var n=JSON.parse('{"id":"commands/theme/Processes_theme","title":"Processes","description":"||","source":"@site/versioned_docs/version-20-R7/commands/theme/Processes.md","sourceDirName":"commands/theme","slug":"/commands/theme/Processes","permalink":"/docs/20-R7/commands/theme/Processes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Ftheme%2FProcesses.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"Processes_theme","title":"Processes","slug":"/commands/theme/Processes"},"sidebar":"docs","previous":{"title":"SHOW PROCESS","permalink":"/docs/20-R7/commands/show-process"},"next":{"title":"ABORT PROCESS BY ID","permalink":"/docs/20-R7/commands/abort-process-by-id"}}'),c=r("785893"),d=r("250065");let t={id:"Processes_theme",title:"Processes",slug:"/commands/theme/Processes"},o=void 0,i={},h=[];function l(s){let e={a:"a",br:"br",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...s.components};return(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsx)(e.tr,{children:(0,c.jsx)(e.th,{})})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/abort-process-by-id",children:[(0,c.jsx)(e.strong,{children:"ABORT PROCESS BY ID"})," ( ",(0,c.jsx)(e.em,{children:"uniqueID"})," )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/count-tasks",children:[(0,c.jsx)(e.strong,{children:"Count tasks"}),"  : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/count-user-processes",children:[(0,c.jsx)(e.strong,{children:"Count user processes"}),"  : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/count-users",children:[(0,c.jsx)(e.strong,{children:"Count users"}),"  : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/current-process",children:[(0,c.jsx)(e.strong,{children:"Current process"}),"  : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/current-process-name",children:[(0,c.jsx)(e.strong,{children:"Current process name"}),"  : Text"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/delay-process",children:[(0,c.jsx)(e.strong,{children:"DELAY PROCESS"})," ( ",(0,c.jsx)(e.em,{children:"process"})," ; ",(0,c.jsx)(e.em,{children:"duration"})," )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/execute-on-client",children:[(0,c.jsx)(e.strong,{children:"EXECUTE ON CLIENT"})," ( ",(0,c.jsx)(e.em,{children:"clientName"})," ; ",(0,c.jsx)(e.em,{children:"methodName"})," {; ",(0,c.jsx)(e.em,{children:"param"}),"}{; ",(0,c.jsx)(e.em,{children:"param2"})," ; ... ; ",(0,c.jsx)(e.em,{children:"paramN"}),"} )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/execute-on-server",children:[(0,c.jsx)(e.strong,{children:"Execute on server"})," ( ",(0,c.jsx)(e.em,{children:"procedure"})," ; ",(0,c.jsx)(e.em,{children:"stack"})," {; ",(0,c.jsx)(e.em,{children:"name"})," {; ",(0,c.jsx)(e.em,{children:"param"})," {; ",(0,c.jsx)(e.em,{children:"param2"})," ; ... ; ",(0,c.jsx)(e.em,{children:"paramN"}),"}}}{; *} ) : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/get-registered-clients",children:[(0,c.jsx)(e.strong,{children:"GET REGISTERED CLIENTS"})," ( ",(0,c.jsx)(e.em,{children:"clientList"})," ; ",(0,c.jsx)(e.em,{children:"methods"})," )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/new-process",children:[(0,c.jsx)(e.strong,{children:"New process"})," ( ",(0,c.jsx)(e.em,{children:"method"})," ; ",(0,c.jsx)(e.em,{children:"stack"})," {; ",(0,c.jsx)(e.em,{children:"name"})," {; ",(0,c.jsx)(e.em,{children:"param"})," {; ",(0,c.jsx)(e.em,{children:"param2"})," ; ... ; ",(0,c.jsx)(e.em,{children:"paramN"}),"}}}{; *} ) : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/pause-process",children:[(0,c.jsx)(e.strong,{children:"PAUSE PROCESS"})," ( ",(0,c.jsx)(e.em,{children:"process"})," )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/process-aborted",children:[(0,c.jsx)(e.strong,{children:"Process aborted"}),"  : Boolean"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/process-activity",children:[(0,c.jsx)(e.strong,{children:"Process activity"})," () : Object",(0,c.jsx)(e.br,{}),(0,c.jsx)(e.strong,{children:"Process activity"})," ( ",(0,c.jsx)(e.em,{children:"options"})," ) : Object",(0,c.jsx)(e.br,{}),(0,c.jsx)(e.strong,{children:"Process activity"})," ( ",(0,c.jsx)(e.em,{children:"sessionID"})," ) : Object",(0,c.jsx)(e.br,{}),(0,c.jsx)(e.strong,{children:"Process activity"})," ( ",(0,c.jsx)(e.em,{children:"sessionID"})," ; ",(0,c.jsx)(e.em,{children:"options"})," ) : Object"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/process-info",children:[(0,c.jsx)(e.strong,{children:"Process info"})," ( ",(0,c.jsx)(e.em,{children:"processNumber"})," : Integer ) : Object"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/process-number",children:[(0,c.jsx)(e.strong,{children:"Process number"})," ( ",(0,c.jsx)(e.em,{children:"name"})," {; *} ) : Integer",(0,c.jsx)(e.br,{}),(0,c.jsx)(e.strong,{children:"Process number"})," ( ",(0,c.jsx)(e.em,{children:"id"})," {; *} ) : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/process-state",children:[(0,c.jsx)(e.strong,{children:"Process state"})," ( ",(0,c.jsx)(e.em,{children:"process"})," ) : Integer"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/register-client",children:[(0,c.jsx)(e.strong,{children:"REGISTER CLIENT"})," ( ",(0,c.jsx)(e.em,{children:"clientName"})," {; ",(0,c.jsx)(e.em,{children:"period"}),"}{; *} )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/resume-process",children:[(0,c.jsx)(e.strong,{children:"RESUME PROCESS"})," ( ",(0,c.jsx)(e.em,{children:"process"})," )"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/session",children:[(0,c.jsx)(e.strong,{children:"Session"})," : 4D.Session"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/session-info",children:[(0,c.jsx)(e.strong,{children:"Session info"})," ( ",(0,c.jsx)(e.em,{children:"sessionId"})," : Integer ) : Object"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsxs)(e.a,{href:"/docs/20-R7/commands/session-storage",children:[(0,c.jsx)(e.strong,{children:"Session storage"})," ( ",(0,c.jsx)(e.em,{children:"id"})," ) : Object"]}),(0,c.jsx)(e.br,{})]})}),(0,c.jsx)(e.tr,{children:(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.a,{href:"/docs/20-R7/commands/unregister-client",children:(0,c.jsx)(e.strong,{children:"UNREGISTER CLIENT"})}),(0,c.jsx)(e.br,{})]})})]})]})}function x(s={}){let{wrapper:e}={...(0,d.a)(),...s.components};return e?(0,c.jsx)(e,{...s,children:(0,c.jsx)(l,{...s})}):l(s)}},250065:function(s,e,r){r.d(e,{Z:function(){return o},a:function(){return t}});var n=r(667294);let c={},d=n.createContext(c);function t(s){let e=n.useContext(d);return n.useMemo(function(){return"function"==typeof s?s(e):{...e,...s}},[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(c):s.components||c:t(s.components),n.createElement(d.Provider,{value:e},s.children)}}}]);