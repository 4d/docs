"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26631"],{842848:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/post-event","title":"POST EVENT","description":"POST EVENT ( what ; message ; when ; mouseX ; mouseY ; modifiers {; process} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/post-event.md","sourceDirName":"commands-legacy","slug":"/commands/post-event","permalink":"/docs/commands/post-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"post-event","title":"POST EVENT","slug":"/commands/post-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"POST CLICK","permalink":"/docs/commands/post-click"},"next":{"title":"POST KEY","permalink":"/docs/commands/post-key"}}'),d=s("785893"),r=s("250065");let i={id:"post-event",title:"POST EVENT",slug:"/commands/post-event",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"POST EVENT"})," ( ",(0,d.jsx)(e.em,{children:"what"})," ; ",(0,d.jsx)(e.em,{children:"message"})," ; ",(0,d.jsx)(e.em,{children:"when"})," ; ",(0,d.jsx)(e.em,{children:"mouseX"})," ; ",(0,d.jsx)(e.em,{children:"mouseY"})," ; ",(0,d.jsx)(e.em,{children:"modifiers"})," {; ",(0,d.jsx)(e.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Parameter"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"what"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Type of event"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"message"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Event message"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"when"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Event time expressed in ticks"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mouseX"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Horizontal coordinate of mouse"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mouseY"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Vertical coordinate of mouse"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"modifiers"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Modifier keys state"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"process"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"Destination process reference number, or Application event queue, if omitted, or 0"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(e.p,{children:["The ",(0,d.jsx)(e.strong,{children:"POST EVENT"})," command simulates a keyboard or mouse event. Its effect is as if the user actually acted on the keyboard or the mouse."]}),"\n",(0,d.jsxs)(e.p,{children:["You pass one of the following values in ",(0,d.jsx)(e.em,{children:"what"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constant"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Value"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Auto key event"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Key down event"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Key up event"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse down event"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse up event"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"2"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["If the event is a mouse-related event, you pass ",(0,d.jsx)(e.em,{children:"0"})," (zero) in ",(0,d.jsx)(e.em,{children:"message"}),". If the event is a keyboard-related event, you pass the code of the simulated character in ",(0,d.jsx)(e.em,{children:"message"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["Usually, you pass the value returned by ",(0,d.jsx)(e.a,{href:"/docs/commands/tickcount",children:"Tickcount"})," in ",(0,d.jsx)(e.em,{children:"when"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["If the event is a mouse-related event, you pass the horizontal and vertical coordinates of the click in ",(0,d.jsx)(e.em,{children:"mouseX"})," and ",(0,d.jsx)(e.em,{children:"mouseY"}),"."]}),"\n",(0,d.jsxs)(e.p,{children:["In the parameter ",(0,d.jsx)(e.em,{children:"modifiers"}),", you pass one or a combination of the constants of the ",(0,d.jsx)(e.em,{children:"Events (Modifiers)"})," theme."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constant"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Value"}),(0,d.jsx)(e.th,{children:"Comment"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Activate window bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Activate window mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Caps lock key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{children:"Windows and OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Caps lock key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"1024"}),(0,d.jsx)(e.td,{children:"Windows and OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"Ctrl key under Windows, Command key under OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"256"}),(0,d.jsx)(e.td,{children:"Ctrl key under Windows, Command key under OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Control key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"12"}),(0,d.jsx)(e.td,{children:"Ctrl key under OS X, or right click under Windows and OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Control key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"4096"}),(0,d.jsx)(e.td,{children:"Ctrl key under OS X, or right click under Windows and OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse button bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Mouse button mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"128"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Option key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"11"}),(0,d.jsx)(e.td,{children:"Alt key (also called Option under OS X)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Option key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"2048"}),(0,d.jsx)(e.td,{children:"Alt key (also called Option under OS X)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right control key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"15"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right control key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"32768"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right option key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"14"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right option key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"16384"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right shift key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"13"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Right shift key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"8192"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Shift key bit"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"9"}),(0,d.jsx)(e.td,{children:"Windows and OS X"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Shift key mask"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"512"}),(0,d.jsx)(e.td,{children:"Windows and OS X"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"For example, to simulate the Shift key, pass Shift key bit."}),"\n",(0,d.jsxs)(e.p,{children:["If you specify the ",(0,d.jsx)(e.em,{children:"process"})," parameter, the event is sent to the process whose process number you pass in ",(0,d.jsx)(e.em,{children:"process"}),". If you pass ",(0,d.jsx)(e.em,{children:"0"})," (zero) or if you omit the parameter, the event is sent at the application level, and the 4D scheduler will dispatch it to the appropriate process."]}),"\n",(0,d.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/commands/post-click",children:"POST CLICK"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/commands/post-key",children:"POST KEY"})]}),"\n",(0,d.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command number"}),(0,d.jsx)(e.td,{children:"467"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread safe"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);