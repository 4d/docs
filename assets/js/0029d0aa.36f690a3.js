"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99812"],{790698:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-list-item","title":"GET LIST ITEM","description":"GET LIST ITEM ( { ;} list ; itemPos |  ; itemRef ; itemText {; sublist ; expanded} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-list-item.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item","permalink":"/docs/20-R7/commands/get-list-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item","title":"GET LIST ITEM","slug":"/commands/get-list-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Find in list","permalink":"/docs/20-R7/commands/find-in-list"},"next":{"title":"Get list item font","permalink":"/docs/20-R7/commands/get-list-item-font"}}'),i=s("785893"),r=s("250065");let l={id:"get-list-item",title:"GET LIST ITEM",slug:"/commands/get-list-item",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GET LIST ITEM"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; itemPos | * ; ",(0,i.jsx)(t.em,{children:"itemRef"})," ; ",(0,i.jsx)(t.em,{children:"itemText"})," {; ",(0,i.jsx)(t.em,{children:"sublist"})," ; ",(0,i.jsx)(t.em,{children:"expanded"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted), or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemPos | *"}),(0,i.jsx)(t.td,{children:"Operator, Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Position of item in expanded/collapsed list(s) or * for the current item in the list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Item reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemText"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Text of the list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sublist"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Sublist list reference number (if any)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expanded"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"If a sublist is attached: TRUE = sublist is currently expanded FALSE = sublist is currently collapsed"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM"})," command returns information about the item specified by ",(0,i.jsx)(t.em,{children:"itemPos"})," of the list whose reference number or object name is passed in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference integer. If you only use a single representation of the list, you can use either syntax. Conversely, if you use several representations of the same list, the syntax based on the object name is required since each representation can have its own expanded/collapsed configuration and its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the name of the list object and the form contains several lists that match with this name, the ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM"})," command will only apply to the first object whose name corresponds."]}),"\n",(0,i.jsxs)(t.p,{children:["The position must be expressed relatively, using the current expanded/collapsed state of the list and its sublist. You pass a position value between 1 and the value returned by ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/count-list-items",children:"Count list items"}),". If you pass a value outside this range, ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM"}),' returns empty values (0, "", etc.).']}),"\n",(0,i.jsx)(t.p,{children:"After the call, you retrieve:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The item reference number of the item in ",(0,i.jsx)(t.em,{children:"itemRef"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The text of the item in ",(0,i.jsx)(t.em,{children:"itemText"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you passed the optional parameters ",(0,i.jsx)(t.em,{children:"sublist"})," and ",(0,i.jsx)(t.em,{children:"expanded"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"subList"})," returns the list reference number of the sublist attached to the item. If the item has no sublist, ",(0,i.jsx)(t.em,{children:"subList"})," returns zero (0)."]}),"\n",(0,i.jsxs)(t.li,{children:["If the item has a sublist, ",(0,i.jsx)(t.em,{children:"expanded"})," returns TRUE if the sublist is currently expanded, and FALSE if it is collapsed."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"hList"})," is a list whose items have unique reference numbers. The following code programmatically toggles the expanded/collapsed state of the sublist, if any, attached to the current selected item:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\n\xa0If($vlItemPos>0)\n\xa0\xa0\xa0\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpanded)\n\xa0\xa0\xa0\xa0If(Is a list($hSublist))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;Not($vbExpanded))\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(t.p,{children:["Refer to the example of the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/append-to-list",children:"APPEND TO LIST"})," command."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/list-item-parent",children:"List item parent"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/list-item-position",children:"List item position"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/selected-list-items",children:"Selected list items"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"378"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return l}});var n=s(667294);let i={},r=n.createContext(i);function l(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);