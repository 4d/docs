"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96940"],{483515:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>m});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-modifiers","title":"Get menu item modifiers","description":"Get menu item modifiers ( menu ; menuItem {; process} ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-menu-item-modifiers.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-modifiers","permalink":"/docs/20-R7/commands/get-menu-item-modifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-modifiers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-modifiers","title":"Get menu item modifiers","slug":"/commands/get-menu-item-modifiers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item method","permalink":"/docs/20-R7/commands/get-menu-item-method"},"next":{"title":"Get menu item parameter","permalink":"/docs/20-R7/commands/get-menu-item-parameter"}}'),r=t("785893"),i=t("250065");let d={id:"get-menu-item-modifiers",title:"Get menu item modifiers",slug:"/commands/get-menu-item-modifiers",displayed_sidebar:"docs"},m=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item modifiers"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of menu item or -1 for the last item added to the menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Modification key(s) associated with menu item"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Get menu item modifiers"})," command returns any additional modifier(s) associated with the standard shortcut of the menu item designated by the ",(0,r.jsx)(n.em,{children:"menu"})," and ",(0,r.jsx)(n.em,{children:"menuItem"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["The standard shortcut is composed of the Command (Mac OS) or Ctrl (Windows) key plus a custom key. The standard shortcut is managed using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})," and ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-menu-item-key",children:"Get menu item key"})," commands."]}),"\n",(0,r.jsx)(n.p,{children:"The additional modifiers are the Shift key and the Option (Mac OS) /Alt (Windows) key. These modifiers can only be used when a standard shortcut has been specified beforehand."}),"\n",(0,r.jsx)(n.p,{children:"The number value returned by the command corresponds to the codeof the additional modifier key(s). The key codes are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Shift"}),"= 512"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Option"})," (Mac OS) or ",(0,r.jsx)(n.strong,{children:"Alt"})," (Windows) = 2048",(0,r.jsx)(n.br,{}),"\nIf both keys are used, their values are combined."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," You can evaluate the value returned using the Shift key mask and Option key mask constants of the \u201C",(0,r.jsx)(n.em,{children:"Events (Modifiers)"}),"\u201D theme."]}),"\n",(0,r.jsx)(n.p,{children:"If the menu item does not have an associated modifier key, the command returns 0."}),"\n",(0,r.jsxs)(n.p,{children:["You can pass -1 in ",(0,r.jsx)(n.em,{children:"menuItem"})," in order to specify the last item added to ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"menu"}),", you can pass a menu reference (",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") or a menu number."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass a menu reference, the ",(0,r.jsx)(n.em,{children:"process"})," parameter serves no purpose and will be ignored if it is passed."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional ",(0,r.jsx)(n.em,{children:"process"})," parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the example of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-menu-item-key",children:"Get menu item key"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/get-menu-item-key",children:"Get menu item key"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"980"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);