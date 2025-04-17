"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54328"],{493308:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>m,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/count-menu-items","title":"Count menu items","description":"Count menu items ( menu {; process} ) : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/count-menu-items.md","sourceDirName":"commands-legacy","slug":"/commands/count-menu-items","permalink":"/docs/commands/count-menu-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-menu-items.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"count-menu-items","title":"Count menu items","slug":"/commands/count-menu-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND MENU ITEM","permalink":"/docs/commands/append-menu-item"},"next":{"title":"Count menus","permalink":"/docs/commands/count-menus"}}'),r=s("785893"),i=s("250065");let d={id:"count-menu-items",title:"Count menu items",slug:"/commands/count-menu-items",displayed_sidebar:"docs"},c=void 0,o={},m=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Count menu items"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu number or Menu reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process reference number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Number of menu items in the menu"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Count menu items"})," command returns the number of menu items present in the menu whose number or reference is passed in ",(0,r.jsx)(n.em,{children:"menu."})]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"process"})," parameter, ",(0,r.jsx)(n.strong,{children:"Count menu items"})," applies to the menu bar for the current process. Otherwise, ",(0,r.jsx)(n.strong,{children:"Count menu items"})," applies to the menu bar for the process whose reference number is passed in ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you pass a ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," parameter in ",(0,r.jsx)(n.em,{children:"menu"}),", the ",(0,r.jsx)(n.em,{children:"process"})," parameter serves no purpose and will be ignored."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/count-menus",children:"Count menus"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"405"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Forbidden on the server"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);