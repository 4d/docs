"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32015],{761009:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var o=s(474848),t=s(28453);const d={id:"mouse-position",title:"MOUSE POSITION",slug:"/commands/mouse-position",displayed_sidebar:"docs"},r=void 0,i={id:"commands-legacy/mouse-position",title:"MOUSE POSITION",description:"MOUSE POSITION ( mouseX ; mouseY ; mouseButton {; *} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/mouse-position.md",sourceDirName:"commands-legacy",slug:"/commands/mouse-position",permalink:"/docs/commands/mouse-position",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmouse-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"mouse-position",title:"MOUSE POSITION",slug:"/commands/mouse-position",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Macintosh option down",permalink:"/docs/commands/macintosh-option-down"},next:{title:"PLAY",permalink:"/docs/commands/play"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MOUSE POSITION"})," ( ",(0,o.jsx)(n.em,{children:"mouseX"})," ; ",(0,o.jsx)(n.em,{children:"mouseY"})," ; ",(0,o.jsx)(n.em,{children:"mouseButton"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"mouseX"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Horizontal coordinate of mouse"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"mouseY"}),(0,o.jsx)(n.td,{children:"Real"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Vertical coordinate of mouse"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"mouseButton"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Mouse button state: 0 = Button up 1 = Button down 2 = Right button down 3 = Both buttons down"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operator"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"If specified, global coordinate system is usedIf omitted, local coordinate system is used"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"The MOUSE POSITION command returns the current state of the mouse."}),"\n",(0,o.jsxs)(n.p,{children:["The horizontal and vertical coordinates are returned in ",(0,o.jsx)(n.em,{children:"mouseX"})," and ",(0,o.jsx)(n.em,{children:"mouseY"}),". If you pass the ",(0,o.jsx)(n.em,{children:"*"})," parameter, the coordinates are expressed relative to the main screen (macOS and Windows SDI mode) or to the application window (Windows MDI mode). If you omit the ",(0,o.jsx)(n.em,{children:"*"})," parameter, they are expressed relative to the current form window (if any) of the current process."]}),"\n",(0,o.jsxs)(n.p,{children:["The parameter ",(0,o.jsx)(n.em,{children:"mouseButton"})," returns the state of the buttons, as listed previously."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," The values 2 and 3 can be returned under Mac OS X starting with version 10.2.5 only."]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["See the example for the ",(0,o.jsx)(n.a,{href:"/docs/commands/pop-up-menu",children:"Pop up menu"})," command."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/caps-lock-down",children:"Caps lock down"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/macintosh-command-down",children:"Macintosh command down"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/macintosh-control-down",children:"Macintosh control down"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/macintosh-option-down",children:"Macintosh option down"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/on-event-call",children:"ON EVENT CALL"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/shift-down",children:"Shift down"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/windows-alt-down",children:"Windows Alt down"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/windows-ctrl-down",children:"Windows Ctrl down"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var o=s(296540);const t={},d=o.createContext(t);function r(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);