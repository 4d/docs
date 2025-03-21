"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12175"],{183242:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/list-item-parent","title":"List item parent","description":"List item parent ( { ;} list ; itemRef |  ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/list-item-parent.md","sourceDirName":"commands-legacy","slug":"/commands/list-item-parent","permalink":"/docs/20-R7/commands/list-item-parent","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-item-parent.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"list-item-parent","title":"List item parent","slug":"/commands/list-item-parent","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is a list","permalink":"/docs/20-R7/commands/is-a-list"},"next":{"title":"List item position","permalink":"/docs/20-R7/commands/list-item-position"}}'),i=n("785893"),r=n("250065");let l={id:"list-item-parent",title:"List item parent",slug:"/commands/list-item-parent",displayed_sidebar:"docs"},d=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function m(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"List item parent"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; itemRef | * ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number  (if * omitted), or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef | *"}),(0,i.jsx)(t.td,{children:"Operator, Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Item reference number or 0 for the last item added to the list or * for the current item in the list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Item reference number of parent item or 0 if none"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"List item parent"})," command returns the item reference number of a parent item."]}),"\n",(0,i.jsxs)(t.p,{children:["Pass the reference number or object name of the list in ",(0,i.jsx)(t.em,{children:"list"})," ."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second ",(0,i.jsx)(t.em,{children:"*"})," is passed), the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the object name of the list and the form contains several lists matching this name, the ",(0,i.jsx)(t.strong,{children:"List item parent"})," command will be applied to the first object whose name corresponds."]}),"\n",(0,i.jsxs)(t.p,{children:["You pass the item reference number of an item in the list or 0 or yet again *, in ",(0,i.jsx)(t.em,{children:"itemRef"}),". If you pass 0, the command applies to the last item added to the list. If you pass *, the command applies to the current item of the list. If several items have been selected manually, the current item is the last one selected."]}),"\n",(0,i.jsx)(t.p,{children:"In return, if the corresponding item exists in the list and if this item is in a sublist (and therefore has a parent item), you obtain the item reference number of the parent item."}),"\n",(0,i.jsxs)(t.p,{children:["If there is no item with the item reference number you passed, or if you have passed * and no item is selected, or if the item has no parent, ",(0,i.jsx)(t.strong,{children:"List item parent"})," returns 0 (zero)."]}),"\n",(0,i.jsxs)(t.p,{children:["If you work with item reference numbers, be sure to build a list in which the items have unique reference numbers; otherwise you will not be able to distinguish the items. For more information, see the description of the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/append-to-list",children:"APPEND TO LIST"})," command."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Given the list named ",(0,i.jsx)(t.em,{children:"hList"})," shown here in the Application environment:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(25050).Z+"",width:"163",height:"152"})}),"\n",(0,i.jsx)(t.p,{children:"The item reference numbers are set as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Item"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Item Reference Number"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"a"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"100"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"a - 1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"101"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"a - 2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"102"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"b"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"b - 1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"201"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"b - 2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"202"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"b - 3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"203"})})]})]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In the following code, if the item \u201Cb - 3\u201D is selected, the variable ",(0,i.jsx)(t.em,{children:"$vlParentItemRef"})," gets 200, the item reference number of the item \u201Cb\u201D:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0$vlItemPos:=Selected list items(hList)\n\xa0GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText)\n\xa0$vlParentItemRef:=List item parent(hList;$vlItemRef)\xa0// $vlParentItemRef gets 200\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If the item \u201Ca - 1\u201D is selected, the variable ",(0,i.jsx)(t.em,{children:"$vlParentItemRef"})," gets 100, the item reference number of the item \u201Ca\u201D."]}),"\n",(0,i.jsxs)(t.li,{children:["If the item \u201Ca\u201D or \u201Cb\u201D is selected, the variable ",(0,i.jsx)(t.em,{children:"$vlParentItemRef"})," gets 0, because these items have no parent item."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/get-list-item",children:"GET LIST ITEM"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/list-item-position",children:"List item position"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item",children:"SET LIST ITEM"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"633"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},25050:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var s=n(667294);let i={},r=s.createContext(i);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);