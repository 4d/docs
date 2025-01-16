"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72875"],{768136:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/query-with-array","title":"QUERY WITH ARRAY","description":"QUERY WITH ARRAY ( targetField ; array )","source":"@site/versioned_docs/version-20-R8/commands-legacy/query-with-array.md","sourceDirName":"commands-legacy","slug":"/commands/query-with-array","permalink":"/docs/commands/query-with-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-with-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"query-with-array","title":"QUERY WITH ARRAY","slug":"/commands/query-with-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION WITH ARRAY","permalink":"/docs/commands/query-selection-with-array"},"next":{"title":"SET QUERY AND LOCK","permalink":"/docs/commands/set-query-and-lock"}}'),s=r("785893"),i=r("250065");let d={id:"query-with-array",title:"QUERY WITH ARRAY",slug:"/commands/query-with-array",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY WITH ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"targetField"})," ; ",(0,s.jsx)(n.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field used to compare the values"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of the searched values"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The QUERY WITH ARRAY command searches all the records for which the value of ",(0,s.jsx)(n.em,{children:"targetField"})," is equal, at least, to one of the values of the elements in ",(0,s.jsx)(n.em,{children:"array"}),". The records found will become the new current selection."]}),"\n",(0,s.jsx)(n.p,{children:"This command allows you to quickly and simply build a search on multiple values."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This command cannot be used with fields of the Picture or BLOB type."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"targetField"})," and ",(0,s.jsx)(n.em,{children:"array"})," must be of the same data type. Exception: you can use a Longint array with a field of the Time type."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following example allows you to retrieve the records of both French and American clients:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(searchArray;2)\n\xa0SearchArray{1}:="FR"\n\xa0SearchArray{2}:="US"\n\xa0QUERY WITH ARRAY([Clients]Country;SearchArray)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"644"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current selection"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);