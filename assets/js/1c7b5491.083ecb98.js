"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37895"],{269910:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-list-item-parameter","title":"GET LIST ITEM PARAMETER","description":"GET LIST ITEM PARAMETER ( { ;} list ; itemRef |  ; selector ; value )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-list-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-parameter","permalink":"/docs/20-R7/commands/get-list-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item-parameter","title":"GET LIST ITEM PARAMETER","slug":"/commands/get-list-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM ICON","permalink":"/docs/20-R7/commands/get-list-item-icon"},"next":{"title":"GET LIST ITEM PARAMETER ARRAYS","permalink":"/docs/20-R7/commands/get-list-item-parameter-arrays"}}'),r=n("785893"),i=n("250065");let a={id:"get-list-item-parameter",title:"GET LIST ITEM PARAMETER",slug:"/commands/get-list-item-parameter",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET LIST ITEM PARAMETER"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"list"})," ; itemRef | * ; ",(0,r.jsx)(t.em,{children:"selector"})," ; ",(0,r.jsx)(t.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"list"}),(0,r.jsx)(t.td,{children:"Integer, Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"List reference number (if * omitted) or Name of list type object (if * passed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"itemRef | *"}),(0,r.jsx)(t.td,{children:"Integer, Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Item reference number or 0 for the last item appended to the list or * for the current list item"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"selector"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Parameter constant"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"Text, Boolean, Real"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Current value of parameter"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"GET LIST ITEM PARAMETER"})," command is used to find out the current ",(0,r.jsx)(t.em,{children:"value"})," of the ",(0,r.jsx)(t.em,{children:"selector"})," parameter for the ",(0,r.jsx)(t.em,{children:"itemRef"})," item of the hierarchical list whose reference or object name is passed in the ",(0,r.jsx)(t.em,{children:"list"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:["If you pass the first optional ",(0,r.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,r.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,r.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,r.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second*** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and the second ",(0,r.jsx)(t.em,{children:"*"})," is passed, the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If you use the @ character in the object name of the list and the form contains several lists that match this name, the ",(0,r.jsx)(t.strong,{children:"GET LIST ITEM PARAMETER"})," command will be applied to the first object whose name corresponds."]}),"\n",(0,r.jsxs)(t.p,{children:["You can pass a reference number in ",(0,r.jsx)(t.em,{children:"itemRef"}),". If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in ",(0,r.jsx)(t.em,{children:"itemRef"})," to indicate the last item added to the list (using ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/append-to-list",children:"APPEND TO LIST"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Lastly, you can pass ",(0,r.jsx)(t.em,{children:"*"})," in ",(0,r.jsx)(t.em,{children:"itemRef"}),": in this case, the command is applied to the current item of the list. If several items are selected manually, the current item is the last one that was selected. If no item is selected, the command does nothing."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"selector"}),", you can pass the Additional text or Associated standard action constants (found in the \u201C",(0,r.jsx)(t.em,{children:"Hierarchical Lists"}),"\u201D theme) or any custom value. For more information about the ",(0,r.jsx)(t.em,{children:"selector"})," and ",(0,r.jsx)(t.em,{children:"value"})," parameters, please refer to the description of the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})," command."]}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Hierarchical Lists"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"985"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let r={},i=s.createContext(r);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);