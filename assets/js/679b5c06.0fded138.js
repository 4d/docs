"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11567"],{924723:function(e,t,n){n.r(t),n.d(t,{default:()=>A,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/sort-list","title":"SORT LIST","description":"SORT LIST ( list {; > or <} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sort-list.md","sourceDirName":"commands-legacy","slug":"/commands/sort-list","permalink":"/docs/20-R7/commands/sort-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsort-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sort-list","title":"SORT LIST","slug":"/commands/sort-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST PROPERTIES","permalink":"/docs/20-R7/commands/set-list-properties"},"next":{"title":"Import and Export","permalink":"/docs/20-R7/category/import-and-export"}}'),i=n("785893"),r=n("250065");let d={id:"sort-list",title:"SORT LIST",slug:"/commands/sort-list",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SORT LIST"})," ( ",(0,i.jsx)(t.em,{children:"list"})," {; > or <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List reference number"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"> or <"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Sorting order: > to sort in ascending order, or < to sort in descending order"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"SORT LIST"})," command sorts the list whose reference number is passed in ",(0,i.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To sort in ascending order, pass ",(0,i.jsx)(t.em,{children:">"}),". To sort in descending order, pass <. If you omit the sorting order parameter, ",(0,i.jsx)(t.strong,{children:"SORT LIST"})," sorts in ascending order by default."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SORT LIST"})," sorts all levels of the list; it first sorts the items of the list, then it sorts the items in each sublist (if any), and so on, through all the levels of the list. This is why you will usually apply ",(0,i.jsx)(t.strong,{children:"SORT LIST"})," to a list in a form. Sorting a sublist is of little interest because the order will be changed by a call to a higher level."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SORT LIST"})," does not change the current list item nor the current expanded/collapsed state of the list and sublists. However, because the current item can be moved by the sorting operation, ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/selected-list-items",children:"Selected list items"})," may return a different position before and after the sort."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Given the list named ",(0,i.jsx)(t.em,{children:"hList,"})," shown here in the Application environment:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(296518).Z+"",width:"163",height:"167"})}),"\n",(0,i.jsx)(t.p,{children:"After the execution of this code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Sort the list and it sublists in ascending order\n\xa0SORT LIST(hList;>)\n"})}),"\n",(0,i.jsx)(t.p,{children:"The list looks like:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(876314).Z+"",width:"163",height:"167"})}),"\n",(0,i.jsx)(t.p,{children:"After the execution of this code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Sort the list and it sublists in descending order\n\xa0SORT LIST(hList;<)\n"})}),"\n",(0,i.jsx)(t.p,{children:"The list looks like:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(857640).Z+"",width:"163",height:"167"})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/selected-list-items",children:"Selected list items"})}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"391"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},296518:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},876314:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},857640:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);