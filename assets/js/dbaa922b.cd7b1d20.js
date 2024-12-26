"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19370"],{306568:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>i,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/process-aborted","title":"Process aborted","description":"Process aborted  : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/process-aborted.md","sourceDirName":"commands-legacy","slug":"/commands/process-aborted","permalink":"/docs/commands/process-aborted","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-aborted.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-aborted","title":"Process aborted","slug":"/commands/process-aborted","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PAUSE PROCESS","permalink":"/docs/commands/pause-process"},"next":{"title":"Process activity","permalink":"/docs/commands/process-activity"}}'),o=t("785893"),r=t("250065");let d={id:"process-aborted",title:"Process aborted",slug:"/commands/process-aborted",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let s={a:"a",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Process aborted"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Parameter"}),(0,o.jsx)(s.th,{children:"Type"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Function result"}),(0,o.jsx)(s.td,{children:"Boolean"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"True = the process is about to be aborted, False = the process is not about to be aborted"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.strong,{children:"Process aborted"})," command returns ",(0,o.jsx)(s.strong,{children:"True"})," if the process in which it is called is about to be interrupted unexpectedly, which means that the execution of the command was unable to reach its \u201Cnormal\u201D completion."]}),"\n",(0,o.jsxs)(s.p,{children:['This status will happen very rarely. Processes are usually stopped before the code can be notified the "process aborted" condition. This condition might only happen in compiled loops not executing any 4D command. For more infomation about how 4D handles the closure of processes, please refer to the ',(0,o.jsx)(s.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})," page."]}),"\n",(0,o.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})}),"\n",(0,o.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Command number"}),(0,o.jsx)(s.td,{children:"672"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread safe"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return c},a:function(){return d}});var n=t(667294);let o={},r=n.createContext(o);function d(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);