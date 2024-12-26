"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50297"],{943921:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/milliseconds","title":"Milliseconds","description":"Milliseconds  : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/milliseconds.md","sourceDirName":"commands-legacy","slug":"/commands/milliseconds","permalink":"/docs/commands/milliseconds","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmilliseconds.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"milliseconds","title":"Milliseconds","slug":"/commands/milliseconds","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Day of","permalink":"/docs/commands/day-of"},"next":{"title":"Month of","permalink":"/docs/commands/month-of"}}'),i=s("785893"),o=s("250065");let r={id:"milliseconds",title:"Milliseconds",slug:"/commands/milliseconds",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Milliseconds"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Number of milliseconds elasped since the machine was started"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Milliseconds returns the number of milliseconds (1000th of a second) elapsed since the machine was started."}),"\n",(0,i.jsx)(n.p,{children:"The returned value is a signed longint, up to 2^31 (around 2 billion milliseconds or 24 days). When the machine has been running for more than 24 days, the number becomes negative."}),"\n",(0,i.jsx)(n.p,{children:"The purpose of the command is to measure short periods of time with a high precision. A 24-day range is more than large enough for comparisons, but you need to be careful. When comparing values, always work with the difference between two values. Never compare the values directly since one could be negative and the other positive."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following code waits up to 5 seconds for a locked record to become unlocked or it ends:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0If(Locked([Table_1]))\n\xa0\xa0\xa0\xa0$starttime:=Milliseconds\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;15)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LOAD RECORD([Table_1])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$waittime:=Milliseconds-$starttime\n\xa0\xa0\xa0\xa0Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000))\xa0//wait 5 seconds max\n\xa0End if\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Always compare the difference between two calls of ",(0,i.jsx)(n.strong,{children:"Milliseconds"})," as shown above, never compare directly, ",(0,i.jsx)(n.em,{children:"e.g."}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0(Milliseconds>($starttime+5000))\xa0//never do it like this, as one could be positive, one negative\n"})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/current-time",children:"Current time"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/tickcount",children:"Tickcount"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/timestamp",children:"Timestamp"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"459"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var t=s(667294);let i={},o=t.createContext(i);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);