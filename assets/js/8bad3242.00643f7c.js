"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67063],{489630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>i,toc:()=>c});var s=t(474848),r=t(28453);const m={id:"get-menu-item-method",title:"Get menu item method",slug:"/commands/get-menu-item-method",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/get-menu-item-method",title:"Get menu item method",description:"Get menu item method ( menu ; menuItem {; process} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-menu-item-method.md",sourceDirName:"commands-legacy",slug:"/commands/get-menu-item-method",permalink:"/docs/commands/get-menu-item-method",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-menu-item-method",title:"Get menu item method",slug:"/commands/get-menu-item-method",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get menu item mark",permalink:"/docs/commands/get-menu-item-mark"},next:{title:"Get menu item modifiers",permalink:"/docs/commands/get-menu-item-modifiers"}},o={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu item method"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuItem"})," {; ",(0,s.jsx)(n.em,{children:"process"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuItem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of menu item or -1 for the last item added to the menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Process number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Method name"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The Get menu item method command returns the name of the 4D project method associated with the menu item designated by the ",(0,s.jsx)(n.em,{children:"menu"})," and ",(0,s.jsx)(n.em,{children:"menuItem"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass -1 in ",(0,s.jsx)(n.em,{children:"menuItem"})," in order to specify the last item added to ",(0,s.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"menu"}),", you can pass a menu reference (",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") or a menu number. If you pass a menu reference, the ",(0,s.jsx)(n.em,{children:"process"})," parameter is unnecessary and will be ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional ",(0,s.jsx)(n.em,{children:"process"})," parameter."]}),"\n",(0,s.jsx)(n.p,{children:"The command returns the name of the 4D method as a character string (expression). If no method is associated with a menu item, the command returns an empty string."}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var s=t(296540);const r={},m=s.createContext(r);function d(e){const n=s.useContext(m);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(m.Provider,{value:n},e.children)}}}]);