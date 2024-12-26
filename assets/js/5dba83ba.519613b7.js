"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42018"],{525208:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/clear-list","title":"CLEAR LIST","description":"CLEAR LIST ( list {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/clear-list.md","sourceDirName":"commands-legacy","slug":"/commands/clear-list","permalink":"/docs/commands/clear-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clear-list","title":"CLEAR LIST","slug":"/commands/clear-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND TO LIST","permalink":"/docs/commands/append-to-list"},"next":{"title":"Copy list","permalink":"/docs/commands/copy-list"}}'),l=s("785893"),i=s("250065");let r={id:"clear-list",title:"CLEAR LIST",slug:"/commands/clear-list",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"CLEAR LIST"})," ( ",(0,l.jsx)(n.em,{children:"list"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"list"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"List reference number"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operator"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"If specified, clear sublists from memory, if any. If omitted, sublists (if any) are not cleared."})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"CLEAR LIST"})," command deletes the hierarchical list whose list reference number you pass in ",(0,l.jsx)(n.em,{children:"list"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Usually you will pass the optional ",(0,l.jsx)(n.em,{children:"*"})," parameter, so all the sublists, if any, attached to items or subitems of the list will be deleted as well."]}),"\n",(0,l.jsxs)(n.p,{children:["You do not need to clear a list attached to a form object via the Property List window. 4D loads and clears the list for you. On the other hand, each time you load, copy, extract from a BLOB, or create a list programmatically, call ",(0,l.jsx)(n.strong,{children:"CLEAR LIST"})," when you are through with the list."]}),"\n",(0,l.jsx)(n.p,{children:"To clear a sublist attached to an item (on any level) of another list currently displayed in a form, proceed as follows:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Call ",(0,l.jsx)(n.a,{href:"/docs/commands/get-list-item",children:"GET LIST ITEM"})," on the parent item to get the list reference of the sublist."]}),"\n",(0,l.jsxs)(n.li,{children:["Call ",(0,l.jsx)(n.a,{href:"/docs/commands/set-list-item",children:"SET LIST ITEM"})," on the parent item to detach the sublist from the list item before clearing it."]}),"\n",(0,l.jsxs)(n.li,{children:["Call ",(0,l.jsx)(n.strong,{children:"CLEAR LIST"})," to clear the sublist whose reference number you obtained with ",(0,l.jsx)(n.a,{href:"/docs/commands/get-list-item",children:"GET LIST ITEM"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsxs)(n.p,{children:["Within a clean-up routine that clears all objects and data that you no longer need (i.e., when a window is closed and a form unloaded), you may end up clearing a hierarchical list that may have already been cleared, depending on the user actions within the form. Use ",(0,l.jsx)(n.a,{href:"/docs/commands/is-a-list",children:"Is a list"})," to clear the list only if necessary:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Extract of clean-up routine\n\xa0If(Is a list(hlList))\n\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0End if\n"})}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsxs)(n.p,{children:["See example for the ",(0,l.jsx)(n.a,{href:"/docs/commands/load-list",children:"Load list"})," command."]}),"\n",(0,l.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,l.jsxs)(n.p,{children:["See example for the ",(0,l.jsx)(n.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"})," command."]}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/load-list",children:"Load list"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/commands/new-list",children:"New list"})]}),"\n",(0,l.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"377"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);