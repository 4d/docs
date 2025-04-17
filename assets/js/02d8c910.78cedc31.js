"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12005"],{264865:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/release-menu","title":"RELEASE MENU","description":"RELEASE MENU ( menu )","source":"@site/versioned_docs/version-20-R8/commands-legacy/release-menu.md","sourceDirName":"commands-legacy","slug":"/commands/release-menu","permalink":"/docs/20-R8/commands/release-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelease-menu.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"release-menu","title":"RELEASE MENU","slug":"/commands/release-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menu selected","permalink":"/docs/20-R8/commands/menu-selected"},"next":{"title":"SET HELP MENU","permalink":"/docs/20-R8/commands/set-help-menu"}}'),r=s("785893"),i=s("250065");let o={id:"release-menu",title:"RELEASE MENU",slug:"/commands/release-menu",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function m(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELEASE MENU"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu reference"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"RELEASE MENU"})," command removes the menu whose ID is passed in ",(0,r.jsx)(n.em,{children:"menu"})," from memory. This menu must have been created by the menu ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/create-menu",children:"Create menu"})," command. The following rule applies: for each ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/create-menu",children:"Create menu"})," there must be a corresponding ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/release-menu",children:"RELEASE MENU"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The command removes every instance of the ",(0,r.jsx)(n.em,{children:"menu"})," menu from every menu bar and every process. If the menu belongs to a menu bar which is in use, it will continue to work but can no longer be modified. It will only be truly removed from the memory when the last menu bar where it appears is no longer in use."]}),"\n",(0,r.jsx)(n.p,{children:"This command can be used with menus that are used as menu bars."}),"\n",(0,r.jsxs)(n.p,{children:["Any sub-menus used by ",(0,r.jsx)(n.em,{children:"menu"})," are not removed if they were created directly using the ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/create-menu",children:"Create menu"})," command. In this case, you must remove them individually (see the rule mentioned above). However, if the submenus come from the duplication of an existing menu, do not call ",(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/release-menu",children:"RELEASE MENU"})," with them because 4D will erase them automatically."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example shows different ways to use this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0newMenu:=Create menu\n\xa0APPEND MENU ITEM(newMenu;"Test1")\n\xa0subMenu:=Create menu\n\xa0APPEND MENU ITEM(subMenu;"SubTest1")\n\xa0APPEND MENU ITEM(subMenu;"SubTest2")\xa0// Creation of items in submenu\n\xa0\n\xa0APPEND MENU ITEM(newMenu;"Test2";subMenu)\xa0// Attaching submenu to menu\n\xa0\n\xa0\xa0//At this point, the submenu is attached to the menu and if we will not need it later on, this is right place to remove it.\n\xa0\xa0//Removing it does not immediately delete subMenu since it is still used by newMenu. subMenu is only deleted when newMenu is.\n\xa0\xa0//Removing the submenu here lets you save memory\n\xa0RELEASE MENU(subMenu)\n\xa0\n\xa0$result1:=Dynamic pop up menu(newMenu)\xa0//Use of menu\n\xa0copyMenu:=Create menu(newMenu)\xa0// Creation of menu by copying newMenu (and thus copying subMenu as well)\n\xa0RELEASE MENU(newMenu)\xa0// We no longer need newMenu.\n\xa0\n\xa0$result2:=Dynamic pop up menu(copyMenu)\n\xa0RELEASE MENU(copyMenu)\n\xa0\xa0//You don\'t need to worry about deleting the submenus of copyMenu since it was not created directly using Create menu\n\xa0\xa0//The rule to follow is: each Create menu must have a corresponding RELEASE MENU\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R8/commands/create-menu",children:"Create menu"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"978"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);