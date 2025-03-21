"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44699"],{730424:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>m});var s=JSON.parse('{"id":"commands-legacy/set-menu-item-method","title":"SET MENU ITEM METHOD","description":"SET MENU ITEM METHOD ( menu ; menuItem ; methodName {; process} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-method","permalink":"/docs/20-R7/commands/set-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-method","title":"SET MENU ITEM METHOD","slug":"/commands/set-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM MARK","permalink":"/docs/20-R7/commands/set-menu-item-mark"},"next":{"title":"SET MENU ITEM PARAMETER","permalink":"/docs/20-R7/commands/set-menu-item-parameter"}}'),r=t("785893"),d=t("250065");let i={id:"set-menu-item-method",title:"SET MENU ITEM METHOD",slug:"/commands/set-menu-item-method",displayed_sidebar:"docs"},m=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET MENU ITEM METHOD"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," ; ",(0,r.jsx)(n.em,{children:"methodName"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of menu item or -1 for the last item added to the menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Method name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process number"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SET MENU ITEM METHOD"})," command modifies the 4D project method associated with the menu item designated by the ",(0,r.jsx)(n.em,{children:"menu"})," and ",(0,r.jsx)(n.em,{children:"menuItem"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["You can pass -1 in ",(0,r.jsx)(n.em,{children:"menuItem"})," in order to specify the last item added to ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"menu"}),", you can pass a menu reference (",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") or a menu number. If you pass a menu reference, the command will apply to all the instances of the menu in all the processes. In this case, the ",(0,r.jsx)(n.em,{children:"process"})," parameter is ignored if it is passed. If you pass a menu number, the command will be applied to the corresponding menu in the main menu bar of the current process. If you want to designate another process, pass its number in the optional ",(0,r.jsx)(n.em,{children:"process"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"method"}),", pass the name of the 4D method as a character string (expression)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the menu item corresponds to the title of a hierarchical sub-menu, the method will not be called when the menu item is selected."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the example of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-bar",children:"SET MENU BAR"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-menu-item-method",children:"Get menu item method"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"982"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);