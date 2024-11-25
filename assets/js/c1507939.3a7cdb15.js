"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50142"],{607222:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>l,assets:()=>c,toc:()=>o,frontMatter:()=>m});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-key","title":"Get menu item key","description":"Get menu item key ( menu ; menuItem {; process} ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-menu-item-key.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-key","permalink":"/docs/commands/get-menu-item-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-key","title":"Get menu item key","slug":"/commands/get-menu-item-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MENU ITEM ICON","permalink":"/docs/commands/get-menu-item-icon"},"next":{"title":"Get menu item mark","permalink":"/docs/commands/get-menu-item-mark"}}'),r=t("785893"),i=t("250065");let m={id:"get-menu-item-key",title:"Get menu item key",slug:"/commands/get-menu-item-key",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item key"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu number or Menu reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu item number or -1 for the last item added"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process reference number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Character code of standard shortcut key associated with the menu item"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Get menu item key"})," command returns the code of the ",(0,r.jsx)(n.strong,{children:"Ctrl"})," (Windows) or ",(0,r.jsx)(n.strong,{children:"Command"})," (Macintosh) shortcut for the menu item whose menu number or reference is passed in ",(0,r.jsx)(n.em,{children:"menu"})," and whose item number is passed in ",(0,r.jsx)(n.em,{children:"menuItem"}),". You can pass -1 in ",(0,r.jsx)(n.em,{children:"menuItem"})," in order to indicate the last item added to ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"process"})," parameter, ",(0,r.jsx)(n.strong,{children:"Get menu item key"})," applies to the menu bar for the current process. Otherwise, ",(0,r.jsx)(n.strong,{children:"Get menu item key"})," applies to the menu bar for the process whose reference number is passed in ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you pass a ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," in ",(0,r.jsx)(n.em,{children:"menu"}),", the ",(0,r.jsx)(n.em,{children:"process"})," parameter serves no purpose and will be ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["If the menu item has no associated shortcut or if the ",(0,r.jsx)(n.em,{children:"menuItem"})," parameter designates a hierarchical submenu, ",(0,r.jsx)(n.strong,{children:"Get menu item key"})," returns ",(0,r.jsx)(n.em,{children:"0"})," (zero)."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"To obtain the shortcut associated with a menu item, it is useful to implement a programming structure of the following type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Get menu item key(mymenu;1)#0)\n\xa0\xa0\xa0\xa0$modifiers:=Get menu item modifiers(mymenu;1)\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($modifiers=Option key mask)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($modifiers=Shift key mask)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($modifiers=Option key mask+Shift key mask)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/get-menu-item-key",children:"Get menu item key"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return m}});var s=t(667294);let r={},i=s.createContext(r);function m(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:m(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);