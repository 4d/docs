"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6812"],{35198:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/append-menu-item","title":"APPEND MENU ITEM","description":"APPEND MENU ITEM ( menu ; itemText {; subMenu {; process {; *}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/append-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/append-menu-item","permalink":"/docs/commands/append-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-menu-item.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"append-menu-item","title":"APPEND MENU ITEM","slug":"/commands/append-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Menus","permalink":"/docs/category/menus"},"next":{"title":"Count menu items","permalink":"/docs/commands/count-menu-items"}}'),r=t("785893"),i=t("250065");let a={id:"append-menu-item",title:"APPEND MENU ITEM",slug:"/commands/append-menu-item",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",previous:"previous",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"APPEND MENU ITEM"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"itemText"})," {; ",(0,r.jsx)(n.em,{children:"subMenu"})," {; ",(0,r.jsx)(n.em,{children:"process"})," {; *}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu number or Menu reference"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"itemText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Text for the new menu items"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subMenu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of submenu associated with item"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Process reference number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If passed: consider metacharacters as standard characters"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"APPEND MENU ITEM"})," command appends new menu items to the menu whose number or reference is passed in ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"process"})," parameter, ",(0,r.jsx)(n.strong,{children:"APPEND MENU ITEM"})," applies to the menu bar for the current process. Otherwise, ",(0,r.jsx)(n.strong,{children:"APPEND MENU ITEM"})," applies to the menu bar for the process whose reference number is passed in ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you pass a ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," in ",(0,r.jsx)(n.em,{children:"menu"}),", the ",(0,r.jsx)(n.em,{children:"process"})," parameter serves no purporse and will be ignored."]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not pass the ",(0,r.jsx)(n.em,{children:"*"})," parameter, ",(0,r.jsx)(n.strong,{children:"APPEND MENU ITEM"})," allows you to append one or several menu items in one call."]}),"\n",(0,r.jsxs)(n.p,{children:["You define the items to be appended with the parameter ",(0,r.jsx)(n.em,{children:"itemText"})," as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Separate each item from the next one with a semi-colon (",(0,r.jsx)(n.em,{children:";"}),"). For example,",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:'"ItemText1;ItemText2;ItemText3".'})]}),"\n",(0,r.jsxs)(n.li,{children:["To disable an item: Place an opening parenthesis (",(0,r.jsx)(n.em,{children:"("}),") in the item text."]}),"\n",(0,r.jsx)(n.li,{children:'To specify a separation line: Pass "-" or "(-" as item text.'}),"\n",(0,r.jsxs)(n.li,{children:["To specify a font style for a line: In the item text, place a less than sign (",(0,r.jsx)(n.em,{children:"<"}),") followed by one of these characters:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"<B"}),(0,r.jsx)(n.th,{children:"Bold"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"<I"}),(0,r.jsx)(n.td,{children:"Italic"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"<U"}),(0,r.jsx)(n.td,{children:"Underline"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To add a check mark to an item: In the item text, place an exclamation mark (",(0,r.jsx)(n.em,{children:"!"}),") followed by the character you want as a check mark. On Macintosh, the character is displayed; on Windows, a check mark is displayed no matter what character you passed."]}),"\n",(0,r.jsx)(n.li,{children:"To add an icon to an item: In the item text, place a circumflex accent (^) followed by a character whose code plus 208 is the resource ID of a Mac OS-based icon resource."}),"\n",(0,r.jsxs)(n.li,{children:["To add a shortcut to an item: In the item text, place a slash (",(0,r.jsx)(n.em,{children:"/"}),") followed by the shortcut character for the item."]}),"\n",(0,r.jsxs)(n.li,{children:["(",(0,r.jsx)(n.strong,{children:"Starting with 4D v16 R3"}),") If the item is associated with a standard action, pass the ak standard action title constant in ",(0,r.jsx)(n.em,{children:"itemText"}),' to automatically use the localized action name and context information (if any), for example "Undo ',(0,r.jsx)(n.previous,{action:"",children:'".'})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Use menus that have a reasonable number of items. For example, if you want to display more than 50 items, consider using a scrollable area in a form instead of a menu."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the ",(0,r.jsx)(n.em,{children:"*"}),' parameter, the "special" characters (',(0,r.jsx)(n.em,{children:"; ( !"}),'...) included in the item text will be considered as standard characters and not as metacharacters. This means that you can create menu items like "',(0,r.jsx)(n.strong,{children:"Copy (special)..."}),'" or "',(0,r.jsx)(n.strong,{children:"Find/Replace..."}),'". Note that when the ',(0,r.jsx)(n.em,{children:"*"}),' parameter is passed, you cannot create several items in a single call since the ";" character is considered as a standard character.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.a,{href:"/docs/commands/get-menu-items",children:"GET MENU ITEMS"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/get-menu-item",children:"Get menu item"})," commands will or will not return any metacharacters in the text of a menu item depending on how it was created: if it was created with the ",(0,r.jsx)(n.em,{children:"*"})," option, metacharacters will be returned as standard characters."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"subMenu"})," parameter can be used to indicate a menu as the added item and thus position a hierarchical submenu. You must pass a menu reference (",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," type string) specifying a menu created, for example, using the ",(0,r.jsx)(n.a,{href:"/docs/commands/create-menu",children:"Create menu"})," command. If the command adds more than one menu item, the submenu is associated with the first item."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," The new items do not have any associated methods or actions. These must be associated with the items using the ",(0,r.jsx)(n.a,{href:"/docs/commands/set-menu-item-property",children:"SET MENU ITEM PROPERTY"})," or ",(0,r.jsx)(n.a,{href:"/docs/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})," commands, or the items can also be managed from within a form method using the ",(0,r.jsx)(n.a,{href:"/docs/commands/menu-selected",children:"Menu selected"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example appends the names of the available fonts to the Font menu, which in this example is the sixth menu of the current menu bar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// In the On Startup database method\n\xa0\xa0// The font list is loaded and menu item text is built\n\xa0FONT LIST(\u25CAasAvailableFont)\n\xa0\u25CAatFontMenuItems:=""\n\xa0For($vlFont;1;Size of array(\u25CAasAvailableFont))\n\xa0\xa0\xa0\xa0\u25CAatFontMenuItems:=\u25CAatFontMenuItems+";"+\u25CAasAvailableFont{$vlFont}\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then, in any form or project method, you can write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0APPEND MENU ITEM(6;\u25CAatFontMenuItems)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/delete-menu-item",children:"DELETE MENU ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/insert-menu-item",children:"INSERT MENU ITEM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/set-menu-item-parameter",children:"SET MENU ITEM PARAMETER"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"411"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Forbidden on the server"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);