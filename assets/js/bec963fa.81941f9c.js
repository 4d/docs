"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60124"],{477609:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/count-tasks","title":"Count tasks","description":"Count tasks  : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/count-tasks.md","sourceDirName":"commands-legacy","slug":"/commands/count-tasks","permalink":"/docs/20-R8/commands/count-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-tasks.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"count-tasks","title":"Count tasks","slug":"/commands/count-tasks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ABORT PROCESS BY ID","permalink":"/docs/20-R8/commands/abort-process-by-id"},"next":{"title":"Count user processes","permalink":"/docs/20-R8/commands/count-user-processes"}}'),r=n("785893"),o=n("250065");let c={id:"count-tasks",title:"Count tasks",slug:"/commands/count-tasks",displayed_sidebar:"docs"},d=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let s={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Count tasks"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Function result"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Number of open processes (including kernel processes)"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Count tasks"})," returns the highest alive process number in the 4D single-user, 4D remote, or 4D Server (stored procedures) version. Processes are numbered in the order in which they are created. When still no process has been aborted during the session, then this command returns the total number of open processes."]}),"\n",(0,r.jsx)(s.p,{children:"This number takes into account all processes, even those that are automatically managed by 4D. These include the Main process, Design process, Cache Manager process, Indexing process, and Web Server process."}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(s.p,{children:["See the example for ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/process-state",children:"Process state"})," and for the ",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/semaphore",children:"Semaphore"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/count-user-processes",children:"Count user processes"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/count-users",children:"Count users"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/process-info",children:"Process info"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/process-state",children:"Process state"})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"335"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return c}});var t=n(667294);let r={},o=t.createContext(r);function c(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);