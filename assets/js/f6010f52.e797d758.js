"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95993"],{936846:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/current-process-name","title":"Current process name","description":"Current process name  : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/current-process-name.md","sourceDirName":"commands-legacy","slug":"/commands/current-process-name","permalink":"/docs/commands/current-process-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-process-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-process-name","title":"Current process name","slug":"/commands/current-process-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current process","permalink":"/docs/commands/current-process"},"next":{"title":"DELAY PROCESS","permalink":"/docs/commands/delay-process"}}'),t=r("785893"),c=r("250065");let o={id:"current-process-name",title:"Current process name",slug:"/commands/current-process-name",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Current process name"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Name of current process"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Current process name"})," command returns the name of the process within which this command is called."]}),"\n",(0,t.jsxs)(n.p,{children:["This command is particularly useful in the context of worker processes (see the ",(0,t.jsx)(n.em,{children:"About workers"})," section). It can be used to identify the worker process to call when writing generic code."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to call a worker and pass the calling process name as parameter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CALL WORKER(1;"myMessage";Current process name;"Start:"+String(vMax))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"About workers"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/kill-worker",children:"KILL WORKER"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1392"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let t={},c=s.createContext(t);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);