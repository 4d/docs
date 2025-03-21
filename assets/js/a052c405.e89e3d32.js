"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61220"],{209950:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>m,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/insert-menu-item","title":"INSERT MENU ITEM","description":"INSERT MENU ITEM ( menu ; afterItem ; itemText {; subMenu {; process}}{; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/insert-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/insert-menu-item","permalink":"/docs/20-R7/commands/insert-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"insert-menu-item","title":"INSERT MENU ITEM","slug":"/commands/insert-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get selected menu item parameter","permalink":"/docs/20-R7/commands/get-selected-menu-item-parameter"},"next":{"title":"Menu selected","permalink":"/docs/20-R7/commands/menu-selected"}}'),r=s("785893"),i=s("250065");let d={id:"insert-menu-item",title:"INSERT MENU ITEM",slug:"/commands/insert-menu-item",displayed_sidebar:"docs"},c=void 0,a={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INSERT MENU ITEM"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"afterItem"})," ; ",(0,r.jsx)(n.em,{children:"itemText"})," {; ",(0,r.jsx)(n.em,{children:"subMenu"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu number or Menu reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"afterItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu item number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"itemText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Text for the menu item to be inserted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subMenu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of submenu associated with item"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process reference number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If passed: consider metacharacters as standard characters"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"INSERT MENU ITEM"})," command inserts new menu items into the menu whose number or reference is passed in ",(0,r.jsx)(n.em,{children:"menu"})," after the existing menu item whose number is passed in ",(0,r.jsx)(n.em,{children:"afterItem"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"process"})," parameter, ",(0,r.jsx)(n.strong,{children:"INSERT MENU ITEM"})," applies to the menu bar for the current process. Otherwise, the command applies to the menu bar for the process whose reference number is passed in ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you pass a ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," in ",(0,r.jsx)(n.em,{children:"menu"}),", the ",(0,r.jsx)(n.em,{children:"process"})," parameter serves no purpose and will be ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not pass the ",(0,r.jsx)(n.em,{children:"*"})," parameter, ",(0,r.jsx)(n.strong,{children:"INSERT MENU ITEM"})," allows to you insert one or several menu items in one call."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"INSERT MENU ITEM"})," works like ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/append-menu-item",children:"APPEND MENU ITEM"}),", except that it enables you to insert items anywhere in the menu, while ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/append-menu-item",children:"APPEND MENU ITEM"})," always adds them at the end of the menu."]}),"\n",(0,r.jsxs)(n.p,{children:["See the description of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/append-menu-item",children:"APPEND MENU ITEM"})," command for details about the item definition passed in ",(0,r.jsx)(n.em,{children:"itemText"})," and about the action of the ",(0,r.jsx)(n.em,{children:"*"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ak standard action title constant is supported in the ",(0,r.jsx)(n.em,{children:"itemText"})," parameter (4D v16 R3 and higher)."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"subMenu"})," parameter can be used to indicate a menu as the added item and thus position a hierarchical submenu. You must pass a menu reference (MenuRef type string) specifying a menu created, for example, using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/create-menu",children:"Create menu"})," command. If the command adds more than one menu item, the submenu is associated with the first item."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," The new items do not have any associated methods or actions. These must be associated with the items using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," or ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})," commands, or the items can also be managed from within a form method using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/menu-selected",children:"Menu selected"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example creates a menu consisting of two commands to which it assigns a method:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0menuRef:=Create menu\n\xa0APPEND MENU ITEM(menuRef;"Characters")\n\xa0SET MENU ITEM METHOD(menuRef;1;"CharMgmtDial")\n\xa0INSERT MENU ITEM(menuRef;1;"Paragraphs")\n\xa0SET MENU ITEM METHOD(menuRef;2;"ParaMgmtDial")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/append-menu-item",children:"APPEND MENU ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"412"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Forbidden on the server"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);