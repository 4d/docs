"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63393"],{328672:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/get-list-item-icon","title":"GET LIST ITEM ICON","description":"GET LIST ITEM ICON ( { ;} list ; itemRef |  ; icon )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-list-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-icon","permalink":"/docs/20-R7/commands/get-list-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item-icon","title":"GET LIST ITEM ICON","slug":"/commands/get-list-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get list item font","permalink":"/docs/20-R7/commands/get-list-item-font"},"next":{"title":"GET LIST ITEM PARAMETER","permalink":"/docs/20-R7/commands/get-list-item-parameter"}}'),i=n("785893"),r=n("250065");let c={id:"get-list-item-icon",title:"GET LIST ITEM ICON",slug:"/commands/get-list-item-icon",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GET LIST ITEM ICON"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; itemRef | * ; ",(0,i.jsx)(t.em,{children:"icon"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted) or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef | *"}),(0,i.jsx)(t.td,{children:"Operator, Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Item reference number or 0 for the last item added to the list or * for the current item of the list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"icon"}),(0,i.jsx)(t.td,{children:"Picture"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Icon associated with item"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM ICON"})," command returns, in ",(0,i.jsx)(t.em,{children:"icon"}),", the icon associated with the item whose reference number is passed in ",(0,i.jsx)(t.em,{children:"itemRef"})," in the list whose reference number or object name is passed in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second ",(0,i.jsx)(t.em,{children:"*"})," is passed), the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the object name of the list and the form contains several lists that match this name, the ",(0,i.jsx)(t.strong,{children:"GET LIST ITEM ICON"})," command will be applied to the first object whose name corresponds."]}),"\n",(0,i.jsxs)(t.p,{children:["You can pass a reference number in ",(0,i.jsx)(t.em,{children:"itemRef"}),". If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in ",(0,i.jsx)(t.em,{children:"itemRef"})," to indicate the last item added to the list (using ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/append-to-list",children:"APPEND TO LIST"}),").",(0,i.jsx)(t.br,{}),"\nLastly, you can pass ",(0,i.jsx)(t.em,{children:"*"})," in ",(0,i.jsx)(t.em,{children:"itemRef:"})," in this case, the command will apply to the current item of the list. If several items are selected manually, the current item is the one that was selected last. If no item is selected, the command does nothing."]}),"\n",(0,i.jsxs)(t.p,{children:["Pass a picture variable in ",(0,i.jsx)(t.em,{children:"icon"}),". After the command is executed, it will contain the icon associated with the item, regardless of the source of the icon (static picture, resource or picture expression)."]}),"\n",(0,i.jsx)(t.p,{children:"If no icon is associated with the item, the icon variable is returned empty."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," When the icon associated with an item has been defined via a static reference (resource references or pictures from the picture library), it is possible to find out its number using the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"})," command*.*"]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item-icon",children:"SET LIST ITEM ICON"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"951"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return c}});var s=n(667294);let i={},r=s.createContext(i);function c(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);