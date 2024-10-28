"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71242],{177993:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(474848),t=n(28453);const i={id:"set-query-limit",title:"SET QUERY LIMIT",slug:"/commands/set-query-limit",displayed_sidebar:"docs"},o=void 0,l={id:"commands-legacy/set-query-limit",title:"SET QUERY LIMIT",description:"SET QUERY LIMIT ( limit )",source:"@site/versioned_docs/version-20-R7/commands-legacy/set-query-limit.md",sourceDirName:"commands-legacy",slug:"/commands/set-query-limit",permalink:"/docs/commands/set-query-limit",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-limit.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-query-limit",title:"SET QUERY LIMIT",slug:"/commands/set-query-limit",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET QUERY DESTINATION",permalink:"/docs/commands/set-query-destination"},next:{title:"QR BLOB TO REPORT",permalink:"/docs/commands/qr-blob-to-report"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"})," ( ",(0,r.jsx)(s.em,{children:"limit"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"limit"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Number of records, or 0 for no limit"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"})," allows you to tell 4D to stop any subsequent query for the current process as soon as at least the number of records you pass in ",(0,r.jsx)(s.em,{children:"limit"})," has been found."]}),"\n",(0,r.jsxs)(s.p,{children:["For example, if you pass ",(0,r.jsx)(s.em,{children:"limit"})," equal to 1, any subsequent query will stop browsing an index or the data file as soon as one record that matches the query conditions has been found."]}),"\n",(0,r.jsxs)(s.p,{children:["To restore queries with no limit, call ",(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"})," again with ",(0,r.jsx)(s.em,{children:"limit"})," equal to 0."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Warning:"})," ",(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"})," affects all the subsequent queries made within the current process. REMEMBER to always counterbalance a call to ",(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"}),"(limit) (where ",(0,r.jsx)(s.em,{children:"limit>0"}),") with a call to ",(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"}),"(0) in order to restore queries with no limit."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"})," changes the behavior of the query commands:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query",children:"QUERY"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-selection",children:"QUERY SELECTION"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-by-example",children:"QUERY BY EXAMPLE"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-by-sql",children:"QUERY BY SQL"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-with-array",children:"QUERY WITH ARRAY"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["On the other hand, ",(0,r.jsx)(s.strong,{children:"SET QUERY LIMIT"})," does not affect the other commands that may change the current selection of a table, such as ",(0,r.jsx)(s.a,{href:"/docs/commands/all-records",children:"ALL RECORDS"}),", ",(0,r.jsx)(s.a,{href:"/docs/commands/relate-many",children:"RELATE MANY"}),", and so on."]}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(s.p,{children:"To perform a query corresponding to the request \u201c...give me any ten customers whose gross sales are greater than $1 M...\u201d, you would write:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0SET QUERY LIMIT(10)\n\xa0QUERY([Customers];[Customers]Gross sales>1000000)\n\xa0SET QUERY LIMIT(0)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(s.p,{children:["See the second example for the ",(0,r.jsx)(s.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})," command."]}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/commands/get-query-limit",children:"Get query limit"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query",children:"QUERY"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query-by-sql",children:"QUERY BY SQL"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query-selection",children:"QUERY SELECTION"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/commands/set-query-destination",children:"SET QUERY DESTINATION"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var r=n(296540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);