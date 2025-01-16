"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42295"],{193013:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>m,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-menu-item-mark","title":"Get menu item mark","description":"Get menu item mark ( menu ; menuItem {; process} ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-mark","permalink":"/docs/commands/get-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-mark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-mark","title":"Get menu item mark","slug":"/commands/get-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item key","permalink":"/docs/commands/get-menu-item-key"},"next":{"title":"Get menu item method","permalink":"/docs/commands/get-menu-item-method"}}'),s=t("785893"),i=t("250065");let m={id:"get-menu-item-mark",title:"Get menu item mark",slug:"/commands/get-menu-item-mark",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu item mark"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuItem"})," {; ",(0,s.jsx)(n.em,{children:"process"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Menu number or Menu reference"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuItem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Menu item number or -1 for last item added"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"process"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Process reference number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Current menu item mark"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Get menu item mark"})," command returns the check mark of the menu item whose number or reference is passed in ",(0,s.jsx)(n.em,{children:"menu"})," and whose item number is passed in ",(0,s.jsx)(n.em,{children:"menuItem"}),". You can pass -1 in ",(0,s.jsx)(n.em,{children:"menuItem"})," in order to indicate the last item added to ",(0,s.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you omit the ",(0,s.jsx)(n.em,{children:"process"})," parameter, ",(0,s.jsx)(n.strong,{children:"Get menu item mark"})," applies to the menu bar for the current process. Otherwise, ",(0,s.jsx)(n.strong,{children:"Get menu item mark"})," applies to the menu bar for the process whose reference number is passed in ",(0,s.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you pass a ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," in ",(0,s.jsx)(n.em,{children:"menu"}),", the ",(0,s.jsx)(n.em,{children:"process"})," parameter serves no purpose and will be ignored."]}),"\n",(0,s.jsxs)(n.p,{children:["If the menu item has no mark or if the ",(0,s.jsx)(n.em,{children:"menuItem"})," parameter specifies a hierarchical submenu, ",(0,s.jsx)(n.strong,{children:"Get menu item mark"})," returns an empty string."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," See discussion of check marks on Macintosh and Windows in the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following example toggles the check mark of a menu item:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"428"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Forbidden on the server"}),(0,s.jsx)(n.td,{})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return m}});var r=t(667294);let s={},i=r.createContext(s);function m(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:m(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);