"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26155"],{745537:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-query-limit","title":"SET QUERY LIMIT","description":"SET QUERY LIMIT ( limit )","source":"@site/versioned_docs/version-20-R9/commands-legacy/set-query-limit.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-limit","permalink":"/docs/commands/set-query-limit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-limit.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-query-limit","title":"SET QUERY LIMIT","slug":"/commands/set-query-limit","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY DESTINATION","permalink":"/docs/commands/set-query-destination"},"next":{"title":"Quick Report","permalink":"/docs/commands/theme/Quick-Report"}}'),t=s("785893"),i=s("250065");let l={id:"set-query-limit",title:"SET QUERY LIMIT",slug:"/commands/set-query-limit",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"})," ( ",(0,t.jsx)(n.em,{children:"limit"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"limit"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Number of records, or 0 for no limit"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"})," allows you to tell 4D to stop any subsequent query for the current process as soon as at least the number of records you pass in ",(0,t.jsx)(n.em,{children:"limit"})," has been found."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you pass ",(0,t.jsx)(n.em,{children:"limit"})," equal to 1, any subsequent query will stop browsing an index or the data file as soon as one record that matches the query conditions has been found."]}),"\n",(0,t.jsxs)(n.p,{children:["To restore queries with no limit, call ",(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"})," again with ",(0,t.jsx)(n.em,{children:"limit"})," equal to 0."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," ",(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"})," affects all the subsequent queries made within the current process. REMEMBER to always counterbalance a call to ",(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"}),"(limit) (where ",(0,t.jsx)(n.em,{children:"limit>0"}),") with a call to ",(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"}),"(0) in order to restore queries with no limit."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"})," changes the behavior of the query commands:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["On the other hand, ",(0,t.jsx)(n.strong,{children:"SET QUERY LIMIT"})," does not affect the other commands that may change the current selection of a table, such as ",(0,t.jsx)(n.a,{href:"/docs/commands/all-records",children:"ALL RECORDS"}),", ",(0,t.jsx)(n.a,{href:"/docs/commands/relate-many",children:"RELATE MANY"}),", and so on."]}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"To perform a query corresponding to the request \u201C...give me any ten customers whose gross sales are greater than $1 M...\u201D, you would write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET QUERY LIMIT(10)\n\xa0QUERY([Customers];[Customers]Gross sales>1000000)\n\xa0SET QUERY LIMIT(0)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["See the second example for the ",(0,t.jsx)(n.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/get-query-limit",children:"Get query limit"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query-by-sql",children:"QUERY BY SQL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query-selection",children:"QUERY SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"395"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);