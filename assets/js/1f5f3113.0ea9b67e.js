"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15877"],{39226:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/post-click","title":"POST CLICK","description":"POST CLICK ( mouseX ; mouseY {; process} {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/post-click.md","sourceDirName":"commands-legacy","slug":"/commands/post-click","permalink":"/docs/20-R8/commands/post-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-click.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"post-click","title":"POST CLICK","slug":"/commands/post-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pop up menu","permalink":"/docs/20-R8/commands/pop-up-menu"},"next":{"title":"POST EVENT","permalink":"/docs/20-R8/commands/post-event"}}'),r=n("785893"),c=n("250065");let i={id:"post-click",title:"POST CLICK",slug:"/commands/post-click",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"POST CLICK"})," ( ",(0,r.jsx)(s.em,{children:"mouseX"})," ; ",(0,r.jsx)(s.em,{children:"mouseY"})," {; ",(0,r.jsx)(s.em,{children:"process"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mouseX"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Horizontal coordinate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"mouseY"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Vertical coordinate"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"process"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Destination process reference number, or Application event queue, if omitted, or 0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"If specified, global coordinate system is used If omitted, local coordinate system is used"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"The POST CLICK command simulates a mouse click. Its effect as if the user actually clicked the mouse button."}),"\n",(0,r.jsxs)(s.p,{children:["You pass the horizontal and vertical coordinates of the click in ",(0,r.jsx)(s.em,{children:"mouseX"})," and ",(0,r.jsx)(s.em,{children:"mouseY"}),". If you pass the ",(0,r.jsx)(s.em,{children:"*"})," parameter, you express these coordinates relative to the screen. If you omit the ",(0,r.jsx)(s.em,{children:"*"})," parameter, you express these coordinates relative to the frontmost window of the process whose process number you pass in ",(0,r.jsx)(s.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If you specify the ",(0,r.jsx)(s.em,{children:"process"})," parameter, the click is sent to the process whose process number you pass in ",(0,r.jsx)(s.em,{children:"process"}),". If you pass ",(0,r.jsx)(s.em,{children:"0"})," (zero) or if you omit the parameter, the click is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/post-event",children:"POST EVENT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/20-R8/commands/post-key",children:"POST KEY"})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"466"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var t=n(667294);let r={},c=t.createContext(r);function i(e){let s=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);