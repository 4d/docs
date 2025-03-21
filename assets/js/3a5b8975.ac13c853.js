"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70906"],{212457:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/break-level","title":"BREAK LEVEL","description":"BREAK LEVEL ( level {; pageBreak} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/break-level.md","sourceDirName":"commands-legacy","slug":"/commands/break-level","permalink":"/docs/commands/break-level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbreak-level.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"break-level","title":"BREAK LEVEL","slug":"/commands/break-level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to print settings","permalink":"/docs/commands/blob-to-print-settings"},"next":{"title":"CLOSE PRINTING JOB","permalink":"/docs/commands/close-printing-job"}}'),t=r("785893"),l=r("250065");let a={id:"break-level",title:"BREAK LEVEL",slug:"/commands/break-level",displayed_sidebar:"docs"},o=void 0,d={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," ( ",(0,t.jsx)(n.em,{children:"level"})," {; ",(0,t.jsx)(n.em,{children:"pageBreak"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"level"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Number of break levels"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pageBreak"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Break level for which to do a page break"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," specifies the number of break levels in a report performed using ",(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You ",(0,t.jsx)(n.strong,{children:"must"})," execute ",(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"})," before every report for which you want to do break processing. These commands activate break processing for a report. See the explanation for the ",(0,t.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"level"})," parameter indicates the deepest level for which you want to perform break processing. You must have sorted the records with at least that many levels. If you have sorted more levels, those levels will be printed as sorted, but will not be processed for breaks."]}),"\n",(0,t.jsxs)(n.p,{children:["Each break level that is generated will print the corresponding Break areas and Header areas in the form. There should be at least as many Break areas in the form as the number you pass in ",(0,t.jsx)(n.em,{children:"level"}),". If there are more Break areas, they will be ignored and will not be printed."]}),"\n",(0,t.jsxs)(n.p,{children:["The second, optional, argument, ",(0,t.jsx)(n.em,{children:"pageBreak"}),", is used to cause page breaks during printing."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["The following example prints a report with two break levels. The selection is sorted on four levels, but the ",(0,t.jsx)(n.strong,{children:"BREAK LEVEL"})," command specifies to break on only two levels. One field is accumulated with the ",(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ORDER BY([Emp]Dept;>;[Emp]Title;>;[Emp]Last;>;[Emp]First;>)\xa0// Sort on four levels\n\xa0BREAK LEVEL(2)\xa0// Turn on break processing to 2 levels (Dept and Title)\n\xa0ACCUMULATE([Emp]Salary)\xa0// Accumulate the salaries\n\xa0FORM SET OUTPUT([Emp];"Dept salary")\xa0// Select the report form\n\xa0PRINT SELECTION([Emp])\xa0// Print the report\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/order-by",children:"ORDER BY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/subtotal",children:"Subtotal"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"302"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var s=r(667294);let t={},l=s.createContext(t);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);