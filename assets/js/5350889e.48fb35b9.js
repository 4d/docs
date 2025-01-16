"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69803"],{933665:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-window-rect","title":"GET WINDOW RECT","description":"GET WINDOW RECT ( left ; top ; right ; bottom {; window} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-window-rect.md","sourceDirName":"commands-legacy","slug":"/commands/get-window-rect","permalink":"/docs/commands/get-window-rect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-window-rect.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-window-rect","title":"GET WINDOW RECT","slug":"/commands/get-window-rect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Frontmost window","permalink":"/docs/commands/frontmost-window"},"next":{"title":"Get window title","permalink":"/docs/commands/get-window-title"}}'),s=t("785893"),d=t("250065");let o={id:"get-window-rect",title:"GET WINDOW RECT",slug:"/commands/get-window-rect",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," ( ",(0,s.jsx)(n.em,{children:"left"})," ; ",(0,s.jsx)(n.em,{children:"top"})," ; ",(0,s.jsx)(n.em,{children:"right"})," ; ",(0,s.jsx)(n.em,{children:"bottom"})," {; ",(0,s.jsx)(n.em,{children:"window"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"left"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Left coordinate of window's contents area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"top"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Top coordinate of window's contents area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"right"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Right coordinate of window's contents area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bottom"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Bottom coordinate of window's contents area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"window"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Window reference number, or Frontmost window of current process, if omitted or MDI window if -1 (Windows)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," command returns the coordinates of the window whose reference number is passed in ",(0,s.jsx)(n.em,{children:"window"}),". If the window does not exist, the variable parameters are left unchanged."]}),"\n",(0,s.jsxs)(n.p,{children:["If you omit the ",(0,s.jsx)(n.em,{children:"window"})," parameter, ",(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," applies to the frontmost window for the current process."]}),"\n",(0,s.jsx)(n.p,{children:"The coordinates are expressed relative to the top left corner of the contents area of the application window (Windows MDI mode) or to the main screen (macOS and Windows SDI mode). The coordinates return the rectangle corresponding to the contents area of the window (excluding title bars and borders)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Under Windows, if you pass -1 in ",(0,s.jsx)(n.em,{children:"window"}),", ",(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," returns the coordinates of the application window (MDI window). These coordinates correspond to the contents area of the window (excluding menu bars and borders). In this case in SDI mode, ",(0,s.jsx)(n.strong,{children:"GET WINDOW RECT"})," returns (0;0;0;0) as coordinates."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["See example for the ",(0,s.jsx)(n.a,{href:"/docs/commands/window-list",children:"WINDOW LIST"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"443"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);