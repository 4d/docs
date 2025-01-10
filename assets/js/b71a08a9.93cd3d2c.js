"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93998"],{770856:function(n,e,d){d.r(e),d.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/window-kind","title":"Window kind","description":"Window kind {( window )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/window-kind.md","sourceDirName":"commands-legacy","slug":"/commands/window-kind","permalink":"/docs/commands/window-kind","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-kind.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"window-kind","title":"Window kind","slug":"/commands/window-kind","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tool bar height","permalink":"/docs/commands/tool-bar-height"},"next":{"title":"WINDOW LIST","permalink":"/docs/commands/window-list"}}'),t=d("785893"),i=d("250065");let r={id:"window-kind",title:"Window kind",slug:"/commands/window-kind",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Window kind"})," {( ",(0,t.jsx)(e.em,{children:"window"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"window"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Window reference number, or Frontmost window of current process, if omitted"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Function result"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Type of window"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.strong,{children:"Window kind"})," command returns the 4D type of the window whose reference number is passed in ",(0,t.jsx)(e.em,{children:"window"}),". If the window does not exist, ",(0,t.jsx)(e.strong,{children:"Window kind"})," returns ",(0,t.jsx)(e.em,{children:"0"})," (zero)."]}),"\n",(0,t.jsxs)(e.p,{children:["Otherwise, ",(0,t.jsx)(e.strong,{children:"Window kind"})," may return one of the following predefined constants found in the ",(0,t.jsx)(e.em,{children:"Windows"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constant"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"External window"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Floating window"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"14"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Modal dialog"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"9"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Regular window"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"8"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["If you omit the ",(0,t.jsx)(e.em,{children:"window"})," parameter, ",(0,t.jsx)(e.strong,{children:"Window kind"})," returns the type of the frontmost window for the current process."]}),"\n",(0,t.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(e.p,{children:["See example for the ",(0,t.jsx)(e.a,{href:"/docs/commands/window-list",children:"WINDOW LIST"})," command."]}),"\n",(0,t.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/commands/get-window-title",children:"Get window title"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/commands/window-process",children:"Window process"})]}),"\n",(0,t.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Command number"}),(0,t.jsx)(e.td,{children:"445"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread safe"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return o},a:function(){return r}});var s=d(667294);let t={},i=s.createContext(t);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);