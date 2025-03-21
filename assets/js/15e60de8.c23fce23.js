"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83133"],{599265:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/wa-get-url-filters","title":"WA GET URL FILTERS","description":"WA GET URL FILTERS ( { ;} object ; filtersArr ; allowDenyArr* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-get-url-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-url-filters","permalink":"/docs/20-R7/commands/wa-get-url-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-url-filters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-url-filters","title":"WA GET URL FILTERS","slug":"/commands/wa-get-url-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA GET PREFERENCE","permalink":"/docs/20-R7/commands/wa-get-preference"},"next":{"title":"WA GET URL HISTORY","permalink":"/docs/20-R7/commands/wa-get-url-history"}}'),s=r("785893"),i=r("250065");let d={id:"wa-get-url-filters",title:"WA GET URL FILTERS",slug:"/commands/wa-get-url-filters",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA GET URL FILTERS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"filtersArr"})," ; ",(0,s.jsx)(n.em,{children:"allowDenyArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filtersArr"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Filters array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"allowDenyArr"}),(0,s.jsx)(n.td,{children:"Boolean array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Allow-deny array"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WA GET URL FILTERS"})," command returns, in the ",(0,s.jsx)(n.em,{children:"filtersArr"})," and ",(0,s.jsx)(n.em,{children:"allowDenyArr"})," arrays, the filters that are active in the Web area designated by the ",(0,s.jsx)(n.em,{children:"*"})," and ",(0,s.jsx)(n.em,{children:"object"})," parameters. If no filter is active, the arrays are returned empty."]}),"\n",(0,s.jsxs)(n.p,{children:["The filters are installed by the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})," command. If the arrays are reinitialized during the session, the ",(0,s.jsx)(n.strong,{children:"WA GET URL FILTERS"})," command can be used to find out the current settings"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1031"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);