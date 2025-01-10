"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38472"],{98587:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/menu-selected","title":"Menu selected","description":"Menu selected {( subMenu )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/menu-selected.md","sourceDirName":"commands-legacy","slug":"/commands/menu-selected","permalink":"/docs/commands/menu-selected","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmenu-selected.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"menu-selected","title":"Menu selected","slug":"/commands/menu-selected","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT MENU ITEM","permalink":"/docs/commands/insert-menu-item"},"next":{"title":"RELEASE MENU","permalink":"/docs/commands/release-menu"}}'),r=s("785893"),d=s("250065");let c={id:"menu-selected",title:"Menu selected",slug:"/commands/menu-selected",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," {( ",(0,r.jsx)(n.em,{children:"subMenu"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subMenu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Reference of menu containing item selected"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Menu command selected Menu number in high word Menu item number in low word"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," is used only when forms are displayed. It detects which menu command has been chosen from a menu and, in the case of a hierarchical submenu, returns the reference of the submenu."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," Whenever possible, use methods associated with menu commands in an associated menu bar (with a negative menu bar number) instead of using ",(0,r.jsx)(n.strong,{children:"Menu selected"}),". Associated menu bars are easier to manage, since it is not necessary to test for their selection."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Menu selected"})," command can be used to work with hierarchical submenus. When selecting a hierarchical menu item beyond the first level, the command returns, in the optional ",(0,r.jsx)(n.em,{children:"subMenu"})," parameter, the reference (MenuRef type, 16-character string) of the submenu to which the selected item belongs. If the menu command does not contain a hierarchical submenu, this parameter receives an empy string."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," returns the menu-selected number, a long integer. To find the menu number, divide ",(0,r.jsx)(n.strong,{children:"Menu selected"})," by 65,536 and convert the result to an integer. To find the menu command number, calculate the modulo of ",(0,r.jsx)(n.strong,{children:"Menu selected"})," with the modulus 65,536. Use the following formulas to calculate the menu number and menu command number:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=Menu selected\\ 65536\n\xa0menu command:=Menu selected% 65536\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also extract these values using the ",(0,r.jsx)(n.em,{children:"bitwise operators"})," as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=(Menu selected\xa0&\xa00xFFFF0000)>>16\n\xa0menu command:=Menu selected\xa0&\xa00xFFFF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If no menu commands are selected, ",(0,r.jsx)(n.strong,{children:"Menu selected"})," returns 0."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following form method uses ",(0,r.jsx)(n.strong,{children:"Menu selected"})," to supply the menu and menu item arguments to ",(0,r.jsx)(n.a,{href:"/docs/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(16;$refMenuIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $ref;$MenuNum;$MenuItemNum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$ref:=Menu selected($refMenuIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MenuNum:=$ref\\65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MenuItemNum:=$ref%65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET MENU ITEM MARK($refMenuIncludingItem;$MenuItemNum;Char(18))\n\xa0End case\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The On Menu Selected form event is not activated if no item is selected, ",(0,r.jsx)(n.em,{children:"$refMenuIncludingItem"})," is always given a value and ",(0,r.jsx)(n.em,{children:"$MenuNum"})," equals 0 if the menu is not one of the menus of the menu bar."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Managing Menus"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"152"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Forbidden on the server"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},d=t.createContext(r);function c(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);