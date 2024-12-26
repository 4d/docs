"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32812"],{249192:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>i,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/accumulate","title":"ACCUMULATE","description":"ACCUMULATE ( data {; data2 ; ... ; dataN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/accumulate.md","sourceDirName":"commands-legacy","slug":"/commands/accumulate","permalink":"/docs/commands/accumulate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Faccumulate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"accumulate","title":"ACCUMULATE","slug":"/commands/accumulate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Printing","permalink":"/docs/category/printing"},"next":{"title":"BLOB to print settings","permalink":"/docs/commands/blob-to-print-settings"}}'),r=t("785893"),a=t("250065");let c={id:"accumulate",title:"ACCUMULATE",slug:"/commands/accumulate",displayed_sidebar:"docs"},o=void 0,d={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," ( ",(0,r.jsx)(n.em,{children:"data"})," {; ",(0,r.jsx)(n.em,{children:"data2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"dataN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Field, Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Numeric field or variable on which to accumulate"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," specifies the fields or variables to be accumulated during a form report performed using ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You ",(0,r.jsx)(n.strong,{children:"must"})," execute ",(0,r.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," and ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"}),"  before every report for which you want to do break processing. These commands activate break processing for a report. See the explanation for the ",(0,r.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," when you want to include subtotals for numeric fields or variables in a form report. ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," tells 4D to store subtotals for each of the Data arguments. The subtotals are accumulated for each break level specified with the ",(0,r.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.strong,{children:"ACCUMULATE"})," before printing the report with ",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})," function in the form method or an object method to return the subtotal of one of the ",(0,r.jsx)(n.em,{children:"data"})," arguments."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See the example for the ",(0,r.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"303"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(667294);let r={},a=s.createContext(r);function c(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);