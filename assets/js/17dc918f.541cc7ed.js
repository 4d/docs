"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9175"],{895653:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"commands/process-number","title":"Process number","description":"Process number ( name {; } ) Integer","source":"@site/versioned_docs/version-20-R7/commands/process-number.md","sourceDirName":"commands","slug":"/commands/process-number","permalink":"/docs/commands/process-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-number","title":"Process number","slug":"/commands/process-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process info","permalink":"/docs/commands/process-info"},"next":{"title":"Process state","permalink":"/docs/commands/process-state"}}'),t=n("785893"),d=n("250065");let c={id:"process-number",title:"Process number",slug:"/commands/process-number",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Process number"})," ( ",(0,t.jsx)(s.em,{children:"name"})," {; *} ) : Integer",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Process number"})," ( ",(0,t.jsx)(s.em,{children:"id"})," {; *} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Name of process for which to retrieve the process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"ID of process for which to retrieve the process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operator"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Return the process number from the server"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Function result"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Process number"})]})]})]}),"\n",(0,t.jsxs)(s.details,{children:[(0,t.jsx)(s.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Release"}),(0,t.jsx)(s.th,{children:"Changes"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"20 R7"}),(0,t.jsx)(s.td,{children:"Support of id parameter"})]})})]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Process number"})," returns the number of the process whose ",(0,t.jsx)(s.em,{children:"name"})," or ",(0,t.jsx)(s.em,{children:"id"})," you pass in the first parameter. If no process is found, ",(0,t.jsx)(s.code,{children:"Process number"})," returns 0."]}),"\n",(0,t.jsxs)(s.p,{children:["The optional parameter * allows you to retrieve, from a remote 4D, the number of a process that is executed on the server. In this case, the returned value is negative. This option is especially useful when using the ",(0,t.jsx)(s.a,{href:"/docs/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),", ",(0,t.jsx)(s.a,{href:"/docs/commands/set-process-variable",children:"SET PROCESS VARIABLE"})," and ",(0,t.jsx)(s.a,{href:"/docs/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})," commands."]}),"\n",(0,t.jsx)(s.p,{children:"If the command is executed with the * parameter from a process on the server machine, the returned value is positive."}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/process-state",children:"Process state"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/set-process-variable",children:"SET PROCESS VARIABLE"})]}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"372"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return c}});var r=n(667294);let t={},d=r.createContext(t);function c(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);