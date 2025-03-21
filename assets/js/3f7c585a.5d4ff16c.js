"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85385"],{759645:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/start-monitoring-activity","title":"START MONITORING ACTIVITY","description":"START MONITORING ACTIVITY ( duration {; source} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/start-monitoring-activity.md","sourceDirName":"commands-legacy","slug":"/commands/start-monitoring-activity","permalink":"/docs/commands/start-monitoring-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-monitoring-activity.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"start-monitoring-activity","title":"START MONITORING ACTIVITY","slug":"/commands/start-monitoring-activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MACRO PARAMETER","permalink":"/docs/commands/set-macro-parameter"},"next":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/commands/stop-monitoring-activity"}}'),r=t("785893"),s=t("250065");let o={id:"start-monitoring-activity",title:"START MONITORING ACTIVITY",slug:"/commands/start-monitoring-activity",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"START MONITORING ACTIVITY"})," ( ",(0,r.jsx)(e.em,{children:"duration"})," {; ",(0,r.jsx)(e.em,{children:"source"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Parameter"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"duration"}),(0,r.jsx)(e.td,{children:"Real"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Length of time (in seconds) before logging begins"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"source"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"Origin of an operation"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"START MONITORING ACTIVITY"})," command records operations exceeding a specified ",(0,r.jsx)(e.em,{children:"duration"})," in memory. It can be called and executed on 4D remote, 4D Server, and 4D standalone applications (if ",(0,r.jsx)(e.em,{children:"source"})," isn't from network activity). Recorded activity can be retrieved using the ",(0,r.jsx)(e.a,{href:"/docs/commands/monitored-activity",children:"Monitored activity"})," command. Call ",(0,r.jsx)(e.a,{href:"/docs/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})," when you want to stop tracking activity."]}),"\n",(0,r.jsxs)(e.p,{children:["In the ",(0,r.jsx)(e.em,{children:"duration"})," parameter, pass a number defining a length of time before loggin begins (in seconds, can be expressed as a decimal) for an operation's execution. Once an operation's execution exceeds the ",(0,r.jsx)(e.em,{children:"duration"}),", the operation will be recorded in memory."]}),"\n",(0,r.jsxs)(e.p,{children:["The optional ",(0,r.jsx)(e.em,{children:"source"})," parameter defines the kind of activity to monitor. Possible values:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Constant"}),(0,r.jsx)(e.th,{children:"Value"}),(0,r.jsx)(e.th,{children:"Comment"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity all"}),(0,r.jsx)(e.td,{children:"-1"}),(0,r.jsx)(e.td,{children:"Activity from all sources (default value)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity language"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Language execution operations"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity network"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsx)(e.td,{children:"Network request operations"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Activity operations"}),(0,r.jsx)(e.td,{children:"4"}),(0,r.jsx)(e.td,{children:"4D data operations"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note"}),": If the debug logs have been stopped on the 4D Server ",(0,r.jsx)(e.a,{href:"/docs/ServerWindow/overview",children:"Administration window"}),", ",(0,r.jsx)(e.strong,{children:"START MONITORING ACTIVITY"})," with Activity network will restart the logs."]}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.p,{children:"You want to start/stop monitoring and review 4D data and debug activities lasting longer than a millisecond:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $activities : Collection\n\xa0\n\xa0START MONITORING ACTIVITY(0.001;Activity operations+Activity language)\n\xa0\n\xa0$coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")\n\xa0\n\xa0\xa0//return all operations over 1 millisecond\xa0from the 4D data activity and the debug log\n\xa0$activities:=Monitored activity\n\xa0\n\xa0$text:=JSON Stringify($activities.orderBy("startTime");*)\n\xa0TEXT TO DOCUMENT("result.txt";$text)\n\xa0\n\xa0\xa0//end monitoring for 4D data activity and from the debug log\n\xa0STOP MONITORING ACTIVITY()\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"result.txt:"})}),"\n",(0,r.jsxs)(e.p,{children:["[",(0,r.jsx)(e.br,{}),"\n{",(0,r.jsx)(e.br,{}),'\n"activityKind": 4,',(0,r.jsx)(e.br,{}),'\n"activityDuration": 0.005,',(0,r.jsx)(e.br,{}),'\n"activityData": {',(0,r.jsx)(e.br,{}),'\n"message": "Exporting selection of entities in Persons as a collection: 400 of 401 entities",',(0,r.jsx)(e.br,{}),'\n"maxValue": 401,',(0,r.jsx)(e.br,{}),'\n"currentValue": 400,',(0,r.jsx)(e.br,{}),'\n"interruptible": true,',(0,r.jsx)(e.br,{}),'\n"remote": false,',(0,r.jsx)(e.br,{}),'\n"uuid": "4ED341FCF8BF40649C9A827EF794A688",',(0,r.jsx)(e.br,{}),'\n"taskId": -5,',(0,r.jsx)(e.br,{}),'\n"startTime": "2020-02-28 13:20:00:010",',(0,r.jsx)(e.br,{}),'\n"duration": 5,',(0,r.jsx)(e.br,{}),'\n"title": "Entities To Collection"',(0,r.jsx)(e.br,{}),"\n}",(0,r.jsx)(e.br,{}),"\n},",(0,r.jsx)(e.br,{}),"\n{",(0,r.jsx)(e.br,{}),'\n"activityKind": 1,',(0,r.jsx)(e.br,{}),'\n"activityDuration": 0.005,',(0,r.jsx)(e.br,{}),'\n"activityData": {',(0,r.jsx)(e.br,{}),'\n"sequenceNumber": 2514,',(0,r.jsx)(e.br,{}),'\n"elapsedTime": 5,',(0,r.jsx)(e.br,{}),'\n"processID": 7,',(0,r.jsx)(e.br,{}),'\n"uniqueProcessID": 14,',(0,r.jsx)(e.br,{}),'\n"stackLevel": 0,',(0,r.jsx)(e.br,{}),'\n"duration": 5056,',(0,r.jsx)(e.br,{}),'\n"kind": "Member",',(0,r.jsx)(e.br,{}),'\n"parameters": "firstname, lastname, address.*",',(0,r.jsx)(e.br,{}),'\n"functionName": "toCollection"',(0,r.jsx)(e.br,{}),"\n}",(0,r.jsx)(e.br,{}),"\n}",(0,r.jsx)(e.br,{}),"\n]"]}),"\n",(0,r.jsx)(e.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/commands/monitored-activity",children:"Monitored activity"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/commands/stop-monitoring-activity",children:"STOP MONITORING ACTIVITY"})]}),"\n",(0,r.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Command number"}),(0,r.jsx)(e.td,{children:"1712"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Thread safe"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return o}});var i=t(667294);let r={},s=i.createContext(r);function o(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);