"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53966"],{261686:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/memory-statistics","title":"MEMORY STATISTICS","description":"MEMORY STATISTICS ( infoType ; arrNames ; arrValues ; arrCount )","source":"@site/versioned_docs/version-20-R8/commands-legacy/memory-statistics.md","sourceDirName":"commands-legacy","slug":"/commands/memory-statistics","permalink":"/docs/commands/memory-statistics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmemory-statistics.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"memory-statistics","title":"MEMORY STATISTICS","slug":"/commands/memory-statistics","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get cache size","permalink":"/docs/commands/get-cache-size"},"next":{"title":"SET BLOBS CACHE PRIORITY","permalink":"/docs/commands/set-blobs-cache-priority"}}'),r=t("785893"),i=t("250065");let a={id:"memory-statistics",title:"MEMORY STATISTICS",slug:"/commands/memory-statistics",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MEMORY STATISTICS"})," ( ",(0,r.jsx)(n.em,{children:"infoType"})," ; ",(0,r.jsx)(n.em,{children:"arrNames"})," ; ",(0,r.jsx)(n.em,{children:"arrValues"})," ; ",(0,r.jsx)(n.em,{children:"arrCount"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"infoType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of requested info (always 1)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrNames"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Information titles"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrValues"}),(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Information values"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrCount"}),(0,r.jsx)(n.td,{children:"Real array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Number of objects concerned (if available)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"MEMORY STATISTICS"})," command recovers information related to the use of the data cache by 4D. This information can be used to analyze the functioning of the application."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"infoType"})," parameter specifies the type of requested information. In current 4D versions, there is only one supported type (",(0,r.jsx)(n.em,{children:"infoType"}),"=1)"]}),"\n",(0,r.jsxs)(n.p,{children:["After the command has been executed, the statistics are provided in the ",(0,r.jsx)(n.em,{children:"arrNames"}),", ",(0,r.jsx)(n.em,{children:"arrValues"})," and ",(0,r.jsx)(n.em,{children:"arrCount"})," arrays. This information is also available via the Runtime Explorer: size of physical, virtual, free and used memory, stack memory and free stack memory, etc. For more information about advanced interpretation of this data, please contact your local Technical Service department."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/cache-info",children:"Cache info"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1118"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);