"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78277"],{442904:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/enable-menu-item","title":"ENABLE MENU ITEM","description":"ENABLE MENU ITEM ( menu ; menuItem {; process} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/enable-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/enable-menu-item","permalink":"/docs/commands/enable-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fenable-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"enable-menu-item","title":"ENABLE MENU ITEM","slug":"/commands/enable-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Dynamic pop up menu","permalink":"/docs/commands/dynamic-pop-up-menu"},"next":{"title":"Get menu bar reference","permalink":"/docs/commands/get-menu-bar-reference"}}'),t=s("785893"),d=s("250065");let i={id:"enable-menu-item",title:"ENABLE MENU ITEM",slug:"/commands/enable-menu-item",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function m(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ENABLE MENU ITEM"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"menuItem"})," {; ",(0,t.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Menu number or Menu reference"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuItem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Menu item number or -1 for the last item added"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"process"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Proces reference number"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"ENABLE MENU ITEM"})," command enables the menu item whose menu number or reference is passed in ",(0,t.jsx)(n.em,{children:"menu"})," and whose item number is passed in ",(0,t.jsx)(n.em,{children:"menuItem"}),". You can pass -1 in ",(0,t.jsx)(n.em,{children:"menuItem"})," in order to designate the last item added to the ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:"menuItem"})," parameter designates a hierarchical submenu, all the items of this menu and any submenus are enabled. This command also works with a menu bar created using the ",(0,t.jsx)(n.a,{href:"/docs/commands/create-menu",children:"Create menu"})," command and installed with the ",(0,t.jsx)(n.a,{href:"/docs/commands/set-menu-bar",children:"SET MENU BAR"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["If you omit the ",(0,t.jsx)(n.em,{children:"process"})," parameter, ",(0,t.jsx)(n.strong,{children:"ENABLE MENU ITEM"})," applies to the menu bar for the current process. Otherwise, ",(0,t.jsx)(n.strong,{children:"ENABLE MENU ITEM"})," applies to the menu bar for the process whose reference number is passed in ",(0,t.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If you pass a ",(0,t.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," in ",(0,t.jsx)(n.em,{children:"menu"}),", the ",(0,t.jsx)(n.em,{children:"process"})," parameter serves no purpose and will be ignored."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tip:"})," To enable/disable all items of a menu at once, pass 0 (zero) in ",(0,t.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/commands/disable-menu-item",children:"DISABLE MENU ITEM"})}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"149"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Forbidden on the server"}),(0,t.jsx)(n.td,{})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);