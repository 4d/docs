"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14878"],{945856:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/wa-get-external-links-filters","title":"WA GET EXTERNAL LINKS FILTERS","description":"WA GET EXTERNAL LINKS FILTERS ( { ;} object ; filtersArr ; allowDenyArr* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/wa-get-external-links-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-external-links-filters","permalink":"/docs/commands/wa-get-external-links-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-external-links-filters.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-external-links-filters","title":"WA GET EXTERNAL LINKS FILTERS","slug":"/commands/wa-get-external-links-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get current URL","permalink":"/docs/commands/wa-get-current-url"},"next":{"title":"WA Get last filtered URL","permalink":"/docs/commands/wa-get-last-filtered-url"}}'),s=t("785893"),i=t("250065");let l={id:"wa-get-external-links-filters",title:"WA GET EXTERNAL LINKS FILTERS",slug:"/commands/wa-get-external-links-filters",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA GET EXTERNAL LINKS FILTERS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"filtersArr"})," ; ",(0,s.jsx)(n.em,{children:"allowDenyArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filtersArr"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Filters array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"allowDenyArr"}),(0,s.jsx)(n.td,{children:"Boolean array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Allow-deny array"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WA GET EXTERNAL LINKS FILTERS"})," command returns, in the ",(0,s.jsx)(n.em,{children:"filtersArr"})," and ",(0,s.jsx)(n.em,{children:"allowDenyArr"})," arrays, the external link filters of the Web area designated by the ",(0,s.jsx)(n.em,{children:"*"})," and ",(0,s.jsx)(n.em,{children:"object"})," parameters. If no filter is active, the arrays are returned empty."]}),"\n",(0,s.jsxs)(n.p,{children:["The filters are installed by the ",(0,s.jsx)(n.a,{href:"/docs/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"})," command. If the arrays are reinitialized during the session, the ",(0,s.jsx)(n.strong,{children:"WA GET EXTERNAL LINKS FILTERS"})," command can be used to find out the current settings."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1033"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);