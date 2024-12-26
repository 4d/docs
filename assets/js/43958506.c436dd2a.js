"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70138"],{71136:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/records-in-selection","title":"Records in selection","description":"Records in selection {( aTable )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/records-in-selection.md","sourceDirName":"commands-legacy","slug":"/commands/records-in-selection","permalink":"/docs/commands/records-in-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frecords-in-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"records-in-selection","title":"Records in selection","slug":"/commands/records-in-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PREVIOUS RECORD","permalink":"/docs/commands/previous-record"},"next":{"title":"REDUCE SELECTION","permalink":"/docs/commands/reduce-selection"}}'),r=s("785893"),o=s("250065");let c={id:"records-in-selection",title:"Records in selection",slug:"/commands/records-in-selection",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Records in selection"})," {( ",(0,r.jsx)(n.em,{children:"aTable"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table for which to return number of selected records, or Default table, if omitted"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Records in selection of table"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Records in selection"})," returns the number of records in the current selection of ",(0,r.jsx)(n.em,{children:"aTable"}),". In contrast, ",(0,r.jsx)(n.a,{href:"/docs/commands/records-in-table",children:"Records in table"})," returns the total number of records in the table."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example shows a loop technique commonly used to move through all the records in a selection. The same action can also be accomplished with the ",(0,r.jsx)(n.a,{href:"/docs/commands/apply-to-selection",children:"APPLY TO SELECTION"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0FIRST RECORD([People])\xa0// Start at first record in the selection\n\xa0For($vlRecord;1;Records in selection([People]))\xa0// Loop once for each record\n\xa0\xa0\xa0\xa0Do Something\xa0// Do something with the record\n\xa0\xa0\xa0\xa0NEXT RECORD([People])\xa0// Move to the next record\n\xa0End for\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/records-in-table",children:"Records in table"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"76"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var t=s(667294);let r={},o=t.createContext(r);function c(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);