"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29690"],{400095:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/pop-up-menu","title":"Pop up menu","description":"Pop up menu ( contents {; default {; xCoord ; yCoord}} )  : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/pop-up-menu.md","sourceDirName":"commands-legacy","slug":"/commands/pop-up-menu","permalink":"/docs/commands/pop-up-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpop-up-menu.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"pop-up-menu","title":"Pop up menu","slug":"/commands/pop-up-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLAY","permalink":"/docs/commands/play"},"next":{"title":"POST CLICK","permalink":"/docs/commands/post-click"}}'),i=t("785893"),r=t("250065");let o={id:"pop-up-menu",title:"Pop up menu",slug:"/commands/pop-up-menu",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pop up menu"})," ( ",(0,i.jsx)(n.em,{children:"contents"})," {; ",(0,i.jsx)(n.em,{children:"default"})," {; ",(0,i.jsx)(n.em,{children:"xCoord"})," ; ",(0,i.jsx)(n.em,{children:"yCoord"}),"}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"contents"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Menu text definition"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"default"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Number of menu item selected by default"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"xCoord"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"X coordinate of upper left corner"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"yCoord"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Y coordinate of upper left corner"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Selected menu item number"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Pop up menu"})," command displays a pop-up menu at the current location of the mouse."]}),"\n",(0,i.jsx)(n.p,{children:"In order to follow user interface rules, you usually call this command in response to a mouse click and if the mouse button is still down."}),"\n",(0,i.jsxs)(n.p,{children:["You define the items of the pop-up menu with the parameter ",(0,i.jsx)(n.em,{children:"contents"})," as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Separate each item from the next one with a semi-colon (",(0,i.jsx)(n.em,{children:";"}),"). For example, ",(0,i.jsx)(n.em,{children:'"ItemText1;ItemText2;ItemText3".'})]}),"\n",(0,i.jsxs)(n.li,{children:["To disable an item, place an opening parenthesis (",(0,i.jsx)(n.em,{children:"("}),") in the item text."]}),"\n",(0,i.jsx)(n.li,{children:'To specify a separation line, pass "-" or "(-" as item text.'}),"\n",(0,i.jsxs)(n.li,{children:["To specify a font style for a line, place in the item text a less than sign (",(0,i.jsx)(n.em,{children:"<"}),") followed by one of these characters:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"<B"}),(0,i.jsx)(n.th,{children:"Bold"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"<I"}),(0,i.jsx)(n.td,{children:"Italic"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"<U"}),(0,i.jsx)(n.td,{children:"Underline"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"<O"}),(0,i.jsx)(n.td,{children:"Outline (Macintosh only)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"<S"}),(0,i.jsx)(n.td,{children:"Shadow (Macintosh only)"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To add a check mark to an item, place in the item text an exclamation mark (",(0,i.jsx)(n.em,{children:"!"}),") followed by the character you want as a check mark.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On Macintosh, the character is displayed directly. To display the standard check mark whatever the system version or language, use the following statement: Char(18)."}),"\n",(0,i.jsx)(n.li,{children:"On Windows, a check mark is displayed, no matter what character you passed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"To add an icon to an item, place in the item text a circumflex accent (^) followed by a character whose code plus 208 is the resource ID of a Mac OS-based icon resource."}),"\n",(0,i.jsxs)(n.li,{children:["To add a shortcut to an item, place in the item text a slash (",(0,i.jsx)(n.em,{children:"/"}),") followed by the shortcut character for the item. Note that this last option is purely informative; no shortcut will activate the pop-up menu. However, you may want to include a shortcut if the pop-up menu item has an equivalent in the main menu bar of your application."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," It is possible to disable the mechanism for interpreting special characters (!, /, etc.) in a pop up menu item in order, for example, to have these characters included in the wording. To do this, simply have the item definition in the ",(0,i.jsx)(n.em,{children:"contents"})," parameter begin with the Char(1) statement (e.g. ",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.em,{children:"Char"}),'(1)+"1/4 pt"']}),' to define a "1/4 pt" item).']}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"default"})," parameter specifies the default menu item selected when the pop-up menu is displayed. Pass a value between 1 and the number of menu items. If you omit this parameter, the command selects the first menu item as the default."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"xCoord"})," and ",(0,i.jsx)(n.em,{children:"yCoord"})," parameters designate the location of the pop-up menu to be displayed. In ",(0,i.jsx)(n.em,{children:"xCoord"})," and ",(0,i.jsx)(n.em,{children:"yCoord"}),", pass respectively the horizontal and vertical coordinates of the upper left corner of the menu. These coordinates must be expressed in pixels in the local coordinate system of the current form. These two parameters must be passed together; if only one is passed, it will be ignored."]}),"\n",(0,i.jsxs)(n.p,{children:["If you use the ",(0,i.jsx)(n.em,{children:"xCoord"})," and ",(0,i.jsx)(n.em,{children:"yCoord"})," parameters, the ",(0,i.jsx)(n.em,{children:"default"})," parameter is ignored. In this case, the mouse is not necessarily located at the level of the pop-up menu."]}),"\n",(0,i.jsx)(n.p,{children:"These parameters are particularly useful for managing 3D buttons with an associated pop-up menu."}),"\n",(0,i.jsx)(n.p,{children:"If you select a menu item, the command returns its number; otherwise, it returns zero (0)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Use pop-up menus that have a reasonable number of items. If you want to display more than 50 items, you might think about a using scrollable area in a form instead of a pop-up menu."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The project method MY SPEED MENU pulls down a navigation speed menu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// MY SPEED MENU project method\n\xa0MOUSE POSITION($vlMouseX;$vlMouseY;$vlButton)\n\xa0If(Macintosh control down|($vlButton=2))\n   $vtItems:="About this database...<I;(-;!-Other Options;(-"\n   For($vlTable;1;Get last table number)\n      If(Is table number valid($vlTable))\n         $vtItems:=$vtItems+";"+Table name($vlTable)\n      End if\n   End for\n   $vlUserChoice:=Pop up menu($vtItems)\n   Case of\n      :($vlUserChoice=1)\n  // Display Information\n      :($vlUserChoice=2)\n  // Display options\n   Else\n         If($vlUserChoice>0)\n  // Go to table whose number is $vlUserChoice-4\n         End if\n   End case\n End if\n'})}),"\n",(0,i.jsx)(n.p,{children:"This project method can be called from:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The method of a form object that reacts to a mouse click without waiting for the mouse button to be released (i.e., an invisible button)"}),"\n",(0,i.jsx)(n.li,{children:"A process that \u201Cspies\u201D events and communicate with the other processes"}),"\n",(0,i.jsxs)(n.li,{children:["An event-handling method installed using ",(0,i.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the last two cases, the click does not need to occur in any form object. This is one of the advantages of the ",(0,i.jsx)(n.strong,{children:"Pop up menu"})," command. Generally, you use form objects to display pop-up menus. Using ",(0,i.jsx)(n.strong,{children:"Pop up menu"}),", you can display the menu anywhere."]}),"\n",(0,i.jsx)(n.p,{children:"The pop-up menu is displayed on Windows by pressing the right mouse button; it is displayed on Macintosh by pressing Control-Click. Note, however, that the method does not actually check whether or not there was a mouse click; the caller method tests that."}),"\n",(0,i.jsx)(n.p,{children:"The following is the pop-up menu as it appears on Windows (left) and Macintosh (right). Note the standard check mark for the Windows version."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(44446).Z+"",width:"450",height:"155"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/mouse-position",children:"MOUSE POSITION"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"542"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},44446:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict36394.en-ee74214a9708b5aa49412a10c758263c.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);