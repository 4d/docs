"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58723"],{528696:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/query-selection-with-array","title":"QUERY SELECTION WITH ARRAY","description":"QUERY SELECTION WITH ARRAY ( targetField ; array )","source":"@site/versioned_docs/version-20-R7/commands-legacy/query-selection-with-array.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection-with-array","permalink":"/docs/20-R7/commands/query-selection-with-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection-with-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-selection-with-array","title":"QUERY SELECTION WITH ARRAY","slug":"/commands/query-selection-with-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION BY FORMULA","permalink":"/docs/20-R7/commands/query-selection-by-formula"},"next":{"title":"QUERY WITH ARRAY","permalink":"/docs/20-R7/commands/query-with-array"}}'),s=r("785893"),i=r("250065");let d={id:"query-selection-with-array",title:"QUERY SELECTION WITH ARRAY",slug:"/commands/query-selection-with-array",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION WITH ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"targetField"})," ; ",(0,s.jsx)(n.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field used to compare the values"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of searched values"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QUERY SELECTION WITH ARRAY"})," command searches the table of the field passed as first parameter for the records where the value of ",(0,s.jsx)(n.em,{children:"targetField"})," is equal to at least one of the values of the elements in the ",(0,s.jsx)(n.em,{children:"array"}),". The records found will become the new current selection."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION WITH ARRAY"})," functions in the same way as ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/query-with-array",children:"QUERY WITH ARRAY"}),". The difference between these two commands is the scope of the search:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/query-with-array",children:"QUERY WITH ARRAY"})," searches all the records of the table containing ",(0,s.jsx)(n.em,{children:"targetField"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION WITH ARRAY"})," only searches the records of the current selection of the table containing ",(0,s.jsx)(n.em,{children:"targetField"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, please refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/query-with-array",children:"QUERY WITH ARRAY"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1050"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current selection"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);