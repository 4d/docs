"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43927"],{441600:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/set-list-item-icon","title":"SET LIST ITEM ICON","description":"SET LIST ITEM ICON ( { ;} list ; itemRef\xa0|\xa0 ; icon )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-list-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-icon","permalink":"/docs/commands/set-list-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-list-item-icon","title":"SET LIST ITEM ICON","slug":"/commands/set-list-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM FONT","permalink":"/docs/commands/set-list-item-font"},"next":{"title":"SET LIST ITEM PARAMETER","permalink":"/docs/commands/set-list-item-parameter"}}'),i=n("785893"),r=n("250065");let c={id:"set-list-item-icon",title:"SET LIST ITEM ICON",slug:"/commands/set-list-item-icon",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SET LIST ITEM ICON"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; itemRef\xa0|\xa0* ; ",(0,i.jsx)(t.em,{children:"icon"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted) or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef\xa0|\xa0*"}),(0,i.jsx)(t.td,{children:"Integer, Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Item reference number or 0 for the last item added to the list or * for the current item of the list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"icon"}),(0,i.jsx)(t.td,{children:"Picture"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Icon to be associated with item"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"SET LIST ITEM ICON"})," command modifies the icon associated with the item specified by the ",(0,i.jsx)(t.em,{children:"itemRef"})," parameter of the list whose reference number or object name is passed in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," You can also modify the icon associated with an item using the ",(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})," command. However, this command only accepts static picture references (resource references or pictures from the picture library)."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second ",(0,i.jsx)(t.em,{children:"*"})," is passed), the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:["You can pass a reference number in ",(0,i.jsx)(t.em,{children:"itemRef"}),". If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in ",(0,i.jsx)(t.em,{children:"itemRef"})," to indicate the last item added to the list (using ",(0,i.jsx)(t.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Lastly, you can pass ",(0,i.jsx)(t.em,{children:"*"})," in ",(0,i.jsx)(t.em,{children:"itemRef"}),": in this case, the command is applied to the current item of the list. If several items are selected manually, the current item is the last one that was selected. If no item is selected, the command does nothing."]}),"\n",(0,i.jsxs)(t.p,{children:["Pass a valid 4D picture expression (field, variable, pointer, etc.) in the ",(0,i.jsx)(t.em,{children:"icon"})," parameter. The picture will be placed to the left of the item."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"We want to assign the same picture to two different items. The following code is optimized since the picture is only loaded into memory once:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0var $picture : Picture\n\xa0READ PICTURE FILE("myPict.png";$picture)\n\xa0SET LIST ITEM ICON(mylist;ref1;$picture)\n\xa0SET LIST ITEM ICON(mylist;ref2;$picture)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item-font",children:"SET LIST ITEM FONT"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"950"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return c}});var s=n(667294);let i={},r=s.createContext(i);function c(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);