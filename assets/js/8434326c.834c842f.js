"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88282"],{381577:function(e,s,n){n.r(s),n.d(s,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/hide-process","title":"HIDE PROCESS","description":"HIDE PROCESS ( process )","source":"@site/versioned_docs/version-20-R7/commands-legacy/hide-process.md","sourceDirName":"commands-legacy","slug":"/commands/hide-process","permalink":"/docs/20-R7/commands/hide-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhide-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"hide-process","title":"HIDE PROCESS","slug":"/commands/hide-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Frontmost process","permalink":"/docs/20-R7/commands/frontmost-process"},"next":{"title":"SHOW PROCESS","permalink":"/docs/20-R7/commands/show-process"}}'),t=n("785893"),d=n("250065");let o={id:"hide-process",title:"HIDE PROCESS",slug:"/commands/hide-process",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"HIDE PROCESS"})," ( ",(0,t.jsx)(s.em,{children:"process"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Process number or process to be hidden"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"HIDE PROCESS"})," hides all windows that belong to ",(0,t.jsx)(s.em,{children:"process"}),". All interface elements of ",(0,t.jsx)(s.em,{children:"process"})," are hidden until the next ",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/show-process",children:"SHOW PROCESS"}),". The menu bar of the process is also hidden. This means that opening a window while the process is hidden does not make the screen redraw or display. If the process is already hidden, the command has no effect."]}),"\n",(0,t.jsxs)(s.p,{children:["The only exception to this rule is the Debugger window. If the Debugger window is displayed when ",(0,t.jsx)(s.em,{children:"process"})," is a hidden process, ",(0,t.jsx)(s.em,{children:"process"})," is displayed and becomes the frontmost process."]}),"\n",(0,t.jsxs)(s.p,{children:["If you do not want a ",(0,t.jsx)(s.em,{children:"process"})," to be displayed when it is created, ",(0,t.jsx)(s.strong,{children:"HIDE PROCESS"})," should be the first command in the process method. The Main Process and Cache Manager processes cannot be hidden using this command."]}),"\n",(0,t.jsx)(s.p,{children:"Even though a process may be hidden, the process is still executing."}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"The following example hides all the windows belonging to the current process:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0HIDE PROCESS(Current process)\n"})}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/process-state",children:"Process state"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/show-process",children:"SHOW PROCESS"})]}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"324"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var r=n(667294);let t={},d=r.createContext(t);function o(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);