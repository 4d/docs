"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17541"],{823595:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-icon","title":"GET MENU ITEM ICON","description":"GET MENU ITEM ICON ( menu ; menuItem ; iconRef {; process} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-icon","permalink":"/docs/20-R7/commands/get-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-icon","title":"GET MENU ITEM ICON","slug":"/commands/get-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item","permalink":"/docs/20-R7/commands/get-menu-item"},"next":{"title":"Get menu item key","permalink":"/docs/20-R7/commands/get-menu-item-key"}}'),i=t("785893"),r=t("250065");let c={id:"get-menu-item-icon",title:"GET MENU ITEM ICON",slug:"/commands/get-menu-item-icon",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function m(e){let n={a:"a",br:"br",em:"em",filesystem:"filesystem",h4:"h4",li:"li",name:"name",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET MENU ITEM ICON"})," ( ",(0,i.jsx)(n.em,{children:"menu"})," ; ",(0,i.jsx)(n.em,{children:"menuItem"})," ; ",(0,i.jsx)(n.em,{children:"iconRef"})," {; ",(0,i.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"menu"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"menuItem"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Number of menu item or -1 for the last item added to the menu"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"iconRef"}),(0,i.jsx)(n.td,{children:"Text, Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Name or number of picture associated with menu item"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"process"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Process number"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The GET MENU ITEM ICON command returns, in the ",(0,i.jsx)(n.em,{children:"iconRef"})," variable, the reference of any icon that is associated with the menu item designated by the ",(0,i.jsx)(n.em,{children:"menu"})," and ",(0,i.jsx)(n.em,{children:"menuItem"})," parameters. This reference is the pathname or number of the picture."]}),"\n",(0,i.jsxs)(n.p,{children:["You can pass -1 in ",(0,i.jsx)(n.em,{children:"menuItem"})," in order to specify the last item added to ",(0,i.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"menu"}),", you can pass a menu reference (",(0,i.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") or a menu number. If you pass a menu reference, the ",(0,i.jsx)(n.em,{children:"process"})," parameter is unnecessary and will be ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional ",(0,i.jsx)(n.em,{children:"process"})," parameter."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the icon has been specified using a picture file, the command returns in ",(0,i.jsx)(n.em,{children:"iconRef"})," the pathname using the ",(0,i.jsxs)(n.strong,{children:["path:",(0,i.jsx)(n.filesystem,{path:""})]})," pattern."]}),"\n",(0,i.jsxs)(n.li,{children:["If the icon has been specified using a library picture (binary databases only), the command returns either the number or the name of the picture, depending on the type of variable passed in this parameter. The following pattern is used for a name: ",(0,i.jsxs)(n.strong,{children:["pictlib:",(0,i.jsx)(n.name,{})]}),".",(0,i.jsx)(n.br,{}),"\nIf you do not attribute a specific type to the ",(0,i.jsx)(n.em,{children:"iconRef"})," variable, by default, the name of the picture is returned (text type)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If no icon is associated with the menu item, the command returns a blank value."}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/commands/set-menu-item-icon",children:"SET MENU ITEM ICON"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"983"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);