"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76623"],{11817:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/erase-window","title":"ERASE WINDOW","description":"ERASE WINDOW {( window )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/erase-window.md","sourceDirName":"commands-legacy","slug":"/commands/erase-window","permalink":"/docs/20-R8/commands/erase-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ferase-window.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"erase-window","title":"ERASE WINDOW","slug":"/commands/erase-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DRAG WINDOW","permalink":"/docs/20-R8/commands/drag-window"},"next":{"title":"Find window","permalink":"/docs/20-R8/commands/find-window"}}'),r=s("785893"),o=s("250065");let d={id:"erase-window",title:"ERASE WINDOW",slug:"/commands/erase-window",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ERASE WINDOW"})," {( ",(0,r.jsx)(n.em,{children:"window"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"window"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Window reference number, or Frontmost window of current process, if omitted"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"ERASE WINDOW"})," command clears the contents of the window whose reference number is passed in ",(0,r.jsx)(n.em,{children:"window"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"window"})," parameter, ",(0,r.jsx)(n.strong,{children:"ERASE WINDOW"})," clears the contents of the frontmost window for the current process."]}),"\n",(0,r.jsxs)(n.p,{children:["Usually, you will use ",(0,r.jsx)(n.strong,{children:"ERASE WINDOW"})," in combination with ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/message",children:"MESSAGE"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/goto-xy",children:"GOTO XY"}),". In this case, ",(0,r.jsx)(n.strong,{children:"ERASE WINDOW"})," clears the contents of the window and moves the cursor to the upper-left corner of the window, the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/goto-xy",children:"GOTO XY"}),"(0; 0) position."]}),"\n",(0,r.jsxs)(n.p,{children:["Do not confuse ",(0,r.jsx)(n.strong,{children:"ERASE WINDOW"}),", which clears the contents of a window, with ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/close-window",children:"CLOSE WINDOW"}),", which removes the window from the screen."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/goto-xy",children:"GOTO XY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/message",children:"MESSAGE"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"160"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let r={},o=t.createContext(r);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);