"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15824"],{885039:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/scan-index","title":"SCAN INDEX","description":"SCAN INDEX ( aField ; number {; > or <} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/scan-index.md","sourceDirName":"commands-legacy","slug":"/commands/scan-index","permalink":"/docs/commands/scan-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscan-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"scan-index","title":"SCAN INDEX","slug":"/commands/scan-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDUCE SELECTION","permalink":"/docs/commands/reduce-selection"},"next":{"title":"Selected record number","permalink":"/docs/commands/selected-record-number"}}'),t=s("785893"),d=s("250065");let i={id:"scan-index",title:"SCAN INDEX",slug:"/commands/scan-index",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," ( ",(0,t.jsx)(n.em,{children:"aField"})," ; ",(0,t.jsx)(n.em,{children:"number"})," {; > or <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Indexed field on which to scan index"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Number of records to return"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> or <"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"> from beginning of index < from end of index"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," returns a selection of ",(0,t.jsx)(n.em,{children:"number"})," records from the table containing the ",(0,t.jsx)(n.em,{children:"aField"})," field. If you pass <, ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," returns the ",(0,t.jsx)(n.em,{children:"number"})," of records from the end of the index (high values). If you pass >, ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," returns the ",(0,t.jsx)(n.em,{children:"number"})," of records from the beginning of the index (low values). This command is very efficient because it uses the index to perform the operation."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The selection obtained is not sorted."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," only works on indexed fields. This command changes the current selection of the table for the current process and loads the first record of the selection as the current record."]}),"\n",(0,t.jsxs)(n.p,{children:["If you specify more records than exist in the table, ",(0,t.jsx)(n.strong,{children:"SCAN INDEX"})," will return all the records."]}),"\n",(0,t.jsx)(n.h5,{id:""}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command does not support Object type fields."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following example mails letters to 50 of the worst customers and then to 50 of the best customers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SCAN INDEX([Customers]TotalDue;50;<)\xa0// Get the 50 worst customers\n\xa0ORDER BY([Customers]Zipcode;>)\xa0// Sort by Zip codes\n\xa0FORM SET OUTPUT([Customers];"ThreateningMail")\n\xa0PRINT SELECTION([Customers])\xa0// Print the letters\n\xa0SCAN INDEX([Customers]TotalDue;50;>)\xa0// Get the 50 best customers\n\xa0ORDER BY([Customers]Zipcode;>)\xa0// Sort by Zip codes\n\xa0FORM SET OUTPUT([Customers];"Thanks Letter")\n\xa0PRINT SELECTION([Customers])\xa0// Print the letters\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/reduce-selection",children:"REDUCE SELECTION"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"350"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Changes current record"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Changes current selection"}),(0,t.jsx)(n.td,{})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);