"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25248"],{396784:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/abort-process-by-id","title":"ABORT PROCESS BY ID","description":"ABORT PROCESS BY ID ( uniqueID )","source":"@site/versioned_docs/version-20-R7/commands-legacy/abort-process-by-id.md","sourceDirName":"commands-legacy","slug":"/commands/abort-process-by-id","permalink":"/docs/commands/abort-process-by-id","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort-process-by-id.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"abort-process-by-id","title":"ABORT PROCESS BY ID","slug":"/commands/abort-process-by-id","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Processes","permalink":"/docs/category/processes"},"next":{"title":"Count tasks","permalink":"/docs/commands/count-tasks"}}'),r=n("785893"),o=n("250065");let i={id:"abort-process-by-id",title:"ABORT PROCESS BY ID",slug:"/commands/abort-process-by-id",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let s={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," ( ",(0,r.jsx)(s.em,{children:"uniqueID"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"uniqueID"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Unique process ID"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," command stops a specific process on the 4D Server."]}),"\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.em,{children:"uniqueID"})," parameter, pass the unique ID of the process running on the server that you want to stop. You can retrieve the process ID with the ",(0,r.jsx)(s.a,{href:"/docs/commands/process-activity",children:"Process activity"})," or the ",(0,r.jsx)(s.a,{href:"/docs/commands/process-info",children:"Process info"})," commands."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Notes"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, ",(0,r.jsx)(s.strong,{children:"ABORT PROCESS BY ID"})," does nothing."]}),"\n",(0,r.jsxs)(s.li,{children:["This command can only be used with the ",(0,r.jsx)(s.em,{children:"ServerNet"})," network layer. See   ",(0,r.jsx)(s.em,{children:"New ServerNet Network Layer (compatibility)"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"This command should only be used for searching errors or administration purposes, not as a regular procedure."}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"You want to stop the selected process of the processes collection displayed in a list box:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//variable =curItemPosition\n\xa0\n\xa0\xa0// Retrieve the list of process on the server and display in the list box\n\xa0$activity:=Get process activity(Processes only).processes\n\xa0...\n\xa0\xa0// The selected process is stopped on the server\n\xa0ABORT PROCESS BY ID($activity[curItemPosition].ID)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/commands/pause-process",children:"PAUSE PROCESS"})})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return i}});var t=n(667294);let r={},o=t.createContext(r);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);