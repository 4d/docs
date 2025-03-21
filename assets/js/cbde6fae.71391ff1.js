"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74685"],{996031:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/find-window","title":"Find window","description":"Find window ( left ; top {; windowPart} ) : WinRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/find-window.md","sourceDirName":"commands-legacy","slug":"/commands/find-window","permalink":"/docs/20-R7/commands/find-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"find-window","title":"Find window","slug":"/commands/find-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ERASE WINDOW","permalink":"/docs/20-R7/commands/erase-window"},"next":{"title":"Frontmost window","permalink":"/docs/20-R7/commands/frontmost-window"}}'),i=t("785893"),s=t("250065");let r={id:"find-window",title:"Find window",slug:"/commands/find-window",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Find window"})," ( ",(0,i.jsx)(e.em,{children:"left"})," ; ",(0,i.jsx)(e.em,{children:"top"})," {; ",(0,i.jsx)(e.em,{children:"windowPart"}),"} ) : WinRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Parameter"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"left"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Global left coordinate"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"top"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2192"}),(0,i.jsx)(e.td,{children:"Global top coordinate"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"windowPart"}),(0,i.jsx)(e.td,{children:"Integer"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:'3 if window is "touched", 0 otherwise'})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Function result"}),(0,i.jsx)(e.td,{children:"WinRef"}),(0,i.jsx)(e.td,{children:"\u2190"}),(0,i.jsx)(e.td,{children:"Window reference number"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Find window"})," command returns (if any) the reference number of the first window \u201Ctouched\u201D by the point whose coordinates passed in ",(0,i.jsx)(e.em,{children:"left"})," and ",(0,i.jsx)(e.em,{children:"top"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"The coordinates must be expressed relative to the top left corner of the contents area of the application window (Windows) or to the main screen (Macintosh)."}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.em,{children:"windowPart"})," parameter returns 3 if the window is touched, and 0 otherwise. (",(0,i.jsx)(e.strong,{children:"Compatibility note:"})," Starting with 4D v14, the constants of the ",(0,i.jsx)(e.em,{children:"Find Window"})," theme are obsolete)."]}),"\n",(0,i.jsx)(e.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/20-R7/commands/frontmost-window",children:"Frontmost window"}),(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.a,{href:"/docs/20-R7/commands/next-window",children:"Next window"})]}),"\n",(0,i.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Command number"}),(0,i.jsx)(e.td,{children:"449"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Thread safe"}),(0,i.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var d=t(667294);let i={},s=d.createContext(i);function r(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);