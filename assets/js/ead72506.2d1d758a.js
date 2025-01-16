"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67541"],{272793:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/delete-from-list","title":"DELETE FROM LIST","description":"DELETE FROM LIST ( { ;} list ; itemRef\xa0|\xa0 {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/delete-from-list.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-list","permalink":"/docs/commands/delete-from-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-from-list","title":"DELETE FROM LIST","slug":"/commands/delete-from-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count list items","permalink":"/docs/commands/count-list-items"},"next":{"title":"Find in list","permalink":"/docs/commands/find-in-list"}}'),i=s("785893"),r=s("250065");let d={id:"delete-from-list",title:"DELETE FROM LIST",slug:"/commands/delete-from-list",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"DELETE FROM LIST"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"list"})," ; itemRef\xa0|\xa0* {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, list is an object name (string) If omitted, list is a list reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number (if * omitted), or Name of list type object (if * passed)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"itemRef\xa0|\xa0*"}),(0,i.jsx)(t.td,{children:"Integer, Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Item reference number, or 0 for the last item added to the list or * for the currently selected list item"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, erases sublists (if any) from memory If omitted, sublists (if any) are not erased"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"DELETE FROM LIST"})," command deletes the item designated by the ",(0,i.jsx)(t.em,{children:"itemRef"})," parameter of the list whose reference number or object name is passed in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the first optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"list"})," parameter is a hierarchical list reference (",(0,i.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you only use a single representation of the list or work with structural items (the second ",(0,i.jsx)(t.em,{children:"*"})," is omitted), you can use either syntax. Conversely, if you use several representations of the same list and work with the current item (the second ",(0,i.jsx)(t.em,{children:"*"})," is passed), the syntax based on the object name is required since each representation can have its own current item."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass ",(0,i.jsx)(t.em,{children:"*"})," in ",(0,i.jsx)(t.em,{children:"itemRef"}),", you delete the currently selected item in the list. You can also pass 0 in this parameter in order to request the deletion of the last item added to the list."]}),"\n",(0,i.jsx)(t.p,{children:"Otherwise, you specify the item reference number of the item you want to delete. If there is no item with the item reference number you passed, the command does nothing."}),"\n",(0,i.jsxs)(t.p,{children:["If you work with item reference numbers, build a list in which the items have unique reference numbers, otherwise you will not be able to distinguish the items. For more information, see the description of the ",(0,i.jsx)(t.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["No matter which item you delete, you should specify the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter to let 4D automatically delete the sublist attached to the item, if any. If you do not specify the ",(0,i.jsx)(t.em,{children:"*"})," parameter, it is a good idea to have previously obtained the list reference number of the sublist (if any) attached to the item, so that you can delete it, if necessary, using the ",(0,i.jsx)(t.a,{href:"/docs/commands/clear-list",children:"CLEAR LIST"})," command."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["The following code deletes the currently selected item of the list ",(0,i.jsx)(t.em,{children:"hList"}),". If the item has an attached sublist, the sublist (as well as any sub-sublist) is deleted:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0DELETE FROM LIST(hList;*;*)\n"})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/clear-list",children:"CLEAR LIST"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/get-list-item",children:"GET LIST ITEM"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"624"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return d}});var n=s(667294);let i={},r=n.createContext(i);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);