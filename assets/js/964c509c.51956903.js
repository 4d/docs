"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55418],{656771:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=r(474848),s=r(28453);const o={id:"form-get-current-page",title:"FORM Get current page",slug:"/commands/form-get-current-page",displayed_sidebar:"docs"},a=void 0,c={id:"commands-legacy/form-get-current-page",title:"FORM Get current page",description:"FORM Get current page {( * )} -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/form-get-current-page.md",sourceDirName:"commands-legacy",slug:"/commands/form-get-current-page",permalink:"/docs/commands/form-get-current-page",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-current-page.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"form-get-current-page",title:"FORM Get current page",slug:"/commands/form-get-current-page",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"FORM Get color scheme",permalink:"/docs/commands/form-get-color-scheme"},next:{title:"FORM GET ENTRY ORDER",permalink:"/docs/commands/form-get-entry-order"}},d={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM Get current page"})," {( * )} -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Returns number of current subform page"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Longint"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Number of currently displayed form page"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"FORM Get current page"})," command returns the number of the currently displayed form page or of the current form loaded by the ",(0,t.jsx)(n.a,{href:"/docs/commands/form-load",children:"FORM LOAD"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"*"})," parameter is useful when the command is called in the context of a page type subform containing several pages. In this case, when you pass this parameter, the command changes the page of the current subform (the one that called the command). By default, when the ",(0,t.jsx)(n.em,{children:"*"})," parameter is omitted, the command is always applied to the parent form."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"In a form, when you select a menu item from the menu bar or when the form receives a call from another process, you can perform different actions depending on the form page currently displayed. In this example, you write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// [myTable];"myForm" Form Method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlMenuNumber:=Menu selected>>16\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlItemNumber:=Menu selected\xa0&\xa00xFFFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlMenuNumber=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlItemNumber=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Do appropriate action for page 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Do appropriate action for page 2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlItemNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlMenuNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Outside Call)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Do appropriate reply for page 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Do appropriate reply for page 2\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/form-first-page",children:"FORM FIRST PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/form-goto-page",children:"FORM GOTO PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/form-last-page",children:"FORM LAST PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/form-next-page",children:"FORM NEXT PAGE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/form-previous-page",children:"FORM PREVIOUS PAGE"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(296540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);