"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39012"],{143374:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-menu-bar-reference","title":"Get menu bar reference","description":"Get menu bar reference {( process )} : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-menu-bar-reference.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-bar-reference","permalink":"/docs/20-R8/commands/get-menu-bar-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-bar-reference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-bar-reference","title":"Get menu bar reference","slug":"/commands/get-menu-bar-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENABLE MENU ITEM","permalink":"/docs/20-R8/commands/enable-menu-item"},"next":{"title":"Get menu item","permalink":"/docs/20-R8/commands/get-menu-item"}}'),s=r("785893"),c=r("250065");let a={id:"get-menu-bar-reference",title:"Get menu bar reference",slug:"/commands/get-menu-bar-reference",displayed_sidebar:"docs"},d=void 0,o={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu bar reference"})," {( ",(0,s.jsx)(n.em,{children:"process"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference number of process"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Menu bar ID"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Get menu bar reference"})," command returns the ID of the current menu bar or the menu bar of a specific process."]}),"\n",(0,s.jsxs)(n.p,{children:["If the menu bar was created by the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/create-menu",children:"Create menu"})," command, this ID corresponds to the reference ID of the menu created. Otherwise, the command returns a specific internal ID(*). In all cases, this ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," ID may be used to reference the menu bar by all the other commands of the theme."]}),"\n",(0,s.jsxs)(n.p,{children:["(*)This specific ID is temporary and becomes invalid as soon as another menu bar is called with ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-menu-bar",children:"SET MENU BAR"}),". If you want to keep the reference of a menu created in the menu editor, you need to copy it in memory using ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/create-menu",children:"Create menu"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vEditorRef:=Get menu bar reference(Frontmost process)\xa0//menu from the menu bar editor\n\xa0$vMenuRef:=Create menu($vEditorRef)\xa0//copy the menu in memory\n\xa0SET MENU BAR(2)\xa0//install another menu bar\n\xa0...\xa0// execute code\n\xa0SET MENU BAR($vMenuRef)\xa0//back to the initial menu bar\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"process"})," parameter can be used to designate the process where you want to get the current menu bar ID. If you omit this parameter, the command returns the menu bar ID of the current process."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the example of the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/get-menu-items",children:"GET MENU ITEMS"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-menu-bar",children:"SET MENU BAR"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"979"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},c=t.createContext(s);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);