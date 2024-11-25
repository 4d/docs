"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66596"],{411202:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/delay-process","title":"DELAY PROCESS","description":"DELAY PROCESS ( process ; duration )","source":"@site/versioned_docs/version-20-R7/commands-legacy/delay-process.md","sourceDirName":"commands-legacy","slug":"/commands/delay-process","permalink":"/docs/commands/delay-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelay-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delay-process","title":"DELAY PROCESS","slug":"/commands/delay-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current process name","permalink":"/docs/commands/current-process-name"},"next":{"title":"EXECUTE ON CLIENT","permalink":"/docs/commands/execute-on-client"}}'),t=n("785893"),o=n("250065");let d={id:"delay-process",title:"DELAY PROCESS",slug:"/commands/delay-process",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DELAY PROCESS"})," ( ",(0,t.jsx)(s.em,{children:"process"})," ; ",(0,t.jsx)(s.em,{children:"duration"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Process number"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"duration"}),(0,t.jsx)(s.td,{children:"Real"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Duration expressed in ticks"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["DELAY PROCESS delays the execution of a ",(0,t.jsx)(s.em,{children:"process"})," for a number of ticks (1 tick = 1/60th of a second). During this period, ",(0,t.jsx)(s.em,{children:"process"})," does not take any processing time. Even though the execution of a process may be delayed, it is still in memory."]}),"\n",(0,t.jsxs)(s.p,{children:["You can delay a process for less than one tick. For example, if you pass 0.5 in ",(0,t.jsx)(s.em,{children:"duration"}),", the process will be delayed for a 1/2 tick, i.e. 1/120th of a second."]}),"\n",(0,t.jsxs)(s.p,{children:["If the process is already delayed, this command delays it again. The ",(0,t.jsx)(s.em,{children:"duration"})," parameter is not added to the time remaining, but replaces it. Therefore pass zero (0) for ",(0,t.jsx)(s.em,{children:"duration"})," if you no longer want to delay a process."]}),"\n",(0,t.jsx)(s.p,{children:"If the process does not exist, the command does nothing."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," You cannot use this command to assign a stored procedure on the server machine from a client machine (",(0,t.jsx)(s.em,{children:"process"}),"<0)."]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(s.p,{children:["See example in ",(0,t.jsx)(s.em,{children:"Record Locking"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(s.p,{children:["See example for the command ",(0,t.jsx)(s.a,{href:"/docs/commands/process-number",children:"Process number"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/hide-process",children:"HIDE PROCESS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/pause-process",children:"PAUSE PROCESS"})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return d}});var r=n(667294);let t={},o=r.createContext(t);function d(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);