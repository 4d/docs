"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28773"],{10601:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/query-by-example","title":"QUERY BY EXAMPLE","description":"QUERY BY EXAMPLE ( {;}{*} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/query-by-example.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-example","permalink":"/docs/commands/query-by-example","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-example.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-example","title":"QUERY BY EXAMPLE","slug":"/commands/query-by-example","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY BY ATTRIBUTE","permalink":"/docs/commands/query-by-attribute"},"next":{"title":"QUERY BY FORMULA","permalink":"/docs/commands/query-by-formula"}}'),r=n("785893"),i=n("250065");let a={id:"query-by-example",title:"QUERY BY EXAMPLE",slug:"/commands/query-by-example",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"QUERY BY EXAMPLE"})," ( {",(0,r.jsx)(t.em,{children:"aTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"aTable"}),(0,r.jsx)(t.td,{children:"Table"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Table for which to return a selection of records, or Default table, if omitted"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed, the scrolling bar will not be displayed"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"QUERY BY EXAMPLE"})," performs the same action as the Query by Example menu command in the Design environment. It displays the current input form as a query window. ",(0,r.jsx)(t.strong,{children:"QUERY BY EXAMPLE"})," queries ",(0,r.jsx)(t.em,{children:"aTable"})," for the data that the user enters into the query window. The form must contain the fields that you want the user to be able to query. The query is optimized; indexed fields are automatically used to optimize the query."]}),"\n",(0,r.jsx)(t.p,{children:"See the 4D Design Reference manual for information about using the Query by Example menu command in the Design environment."}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The method in this example displays the MyQuery form to the user. If the user accepts the form and performs the query (that is, if the OK system variable is set to 1), the records that meet the query criteria are displayed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0FORM SET INPUT([People];"MyQuery")\xa0// Switch to query form\n\xa0QUERY BY EXAMPLE([People])\xa0// Display form and perform query\n\xa0If(OK=1)\xa0// If the user performed the query\n\xa0\xa0\xa0\xa0DISPLAY SELECTION([People])\xa0// Display the records\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"If the user clicks the Accept button or presses the Enter key, the OK system variable is set to 1 and the query is performed. If the user clicks the Cancel button or presses the \u201Ccancel\u201D key combination, the OK system variable is set to 0 and the query is canceled."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/query",children:"QUERY"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var s=n(667294);let r={},i=s.createContext(r);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);