"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33163"],{137532:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-list-properties","title":"GET LIST PROPERTIES","description":"GET LIST PROPERTIES ( list ; appearance {; icon {; lineHeight {; doubleClick {; multiSelections {; editable}}}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-list-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-properties","permalink":"/docs/commands/get-list-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-properties","title":"GET LIST PROPERTIES","slug":"/commands/get-list-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PROPERTIES","permalink":"/docs/commands/get-list-item-properties"},"next":{"title":"INSERT IN LIST","permalink":"/docs/commands/insert-in-list"}}'),i=t("785893"),r=t("250065");let l={id:"get-list-properties",title:"GET LIST PROPERTIES",slug:"/commands/get-list-properties",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET LIST PROPERTIES"})," ( ",(0,i.jsx)(n.em,{children:"list"})," ; ",(0,i.jsx)(n.em,{children:"appearance"})," {; ",(0,i.jsx)(n.em,{children:"icon"})," {; ",(0,i.jsx)(n.em,{children:"lineHeight"})," {; ",(0,i.jsx)(n.em,{children:"doubleClick"})," {; ",(0,i.jsx)(n.em,{children:"multiSelections"})," {; ",(0,i.jsx)(n.em,{children:"editable"}),"}}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"List reference number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"appearance"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Graphical style of the list 1 = Hierarchical list a la Macintosh 2 = Hierarchical list a la Windows"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icon"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"*** Deprecated, always 0 ***"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lineHeight"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Minimal line height expressed in pixels"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"doubleClick"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Expand/Collapse sublist on double-click? 0 = Yes, 1= No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"multiSelections"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Multiple selections: 0 = No, 1 = Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"editable"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"List editable by user: 0 = No, 1 = Yes"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"GET LIST PROPERTIES"})," command returns information about the list whose reference number you pass in ",(0,i.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"appearance"})," parameter returns the graphical style of the list."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"icon"})," parameter returns the resource IDs of the node icons displayed in the list."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"lineHeight"})," parameter returns the minimal line height."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"doubleClick"})," is set to 1, double-clicking on a parent list item does not provoke its child list to expand or to collapse. If ",(0,i.jsx)(n.em,{children:"doubleClick"})," is set to 0, this behavior is active (defaut value)."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"multiSelections"})," parameter is set to 0, multiple selections of items (manually or by programming) are not possible in the list. If it is set to 1, multiple selections are allowed."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.em,{children:"editable"})," parameter is set to 1, the list is editable when it is displayed as a choice list in a record. If it is set to 0, the list is not editable."]}),"\n",(0,i.jsxs)(n.p,{children:["These properties can be set using the ",(0,i.jsx)(n.a,{href:"/docs/commands/set-list-properties",children:"SET LIST PROPERTIES"})," command and/or in the Design environment List Editor, if the list was created there or saved using the ",(0,i.jsx)(n.a,{href:"/docs/commands/save-list",children:"SAVE LIST"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["For a complete description of the appearance, node icons, minimal line height and double-click management of a list, see the ",(0,i.jsx)(n.a,{href:"/docs/commands/set-list-properties",children:"SET LIST PROPERTIES"})," command."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/set-list-properties",children:"SET LIST PROPERTIES"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"632"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);