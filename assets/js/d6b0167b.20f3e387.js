"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53788"],{746040:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/table-fragmentation","title":"Table fragmentation","description":"Table fragmentation ( aTable ) : Real","source":"@site/versioned_docs/version-20-R7/commands-legacy/table-fragmentation.md","sourceDirName":"commands-legacy","slug":"/commands/table-fragmentation","permalink":"/docs/commands/table-fragmentation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable-fragmentation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"table-fragmentation","title":"Table fragmentation","slug":"/commands/table-fragmentation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Structure file","permalink":"/docs/commands/structure-file"},"next":{"title":"USE ENTITY SELECTION","permalink":"/docs/commands/use-entity-selection"}}'),r=t("785893"),s=t("250065");let i={id:"table-fragmentation",title:"Table fragmentation",slug:"/commands/table-fragmentation",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table fragmentation"})," ( ",(0,r.jsx)(n.em,{children:"aTable"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table for which to get the fragmentation rate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Percentage of fragmentation"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The Table fragmentation command returns the percentage of logical fragmentation for the records of the table designated by the ",(0,r.jsx)(n.em,{children:"aTable"})," parameter."]}),"\n",(0,r.jsx)(n.p,{children:"The rate of logical fragmentation of the records indicates whether the records are stored in an ordered manner in the data file. If the fragmentation becomes too high, this can considerably slow down sorts and sequential searches on the table. A fragmentation percentage of 0 corresponds to no fragmentation. Beyond a rate of 20%, it may be useful to compact the data file."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This maintenance method lets you request the compacting of the data file in the case where there is considerable fragmentation in at least one table of the database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ToBeCompacted:=False\n\xa0For($i ;1;Last table number)\n\xa0\xa0\xa0\xa0If(Is table number valid($i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Table fragmentation(Table($i)->)>20)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ToBeCompacted:=True\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0If(ToBeCompacted)\n\xa0\xa0// Places a marker requesting compacting\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/compact-data-file",children:"Compact data file"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1127"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(667294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);