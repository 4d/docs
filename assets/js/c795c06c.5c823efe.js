"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48447"],{739722:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/wa-get-last-filtered-url","title":"WA Get last filtered URL","description":"WA Get last filtered URL ( { ;} object* ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-get-last-filtered-url.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-last-filtered-url","permalink":"/docs/20-R7/commands/wa-get-last-filtered-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-last-filtered-url.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-last-filtered-url","title":"WA Get last filtered URL","slug":"/commands/wa-get-last-filtered-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA GET EXTERNAL LINKS FILTERS","permalink":"/docs/20-R7/commands/wa-get-external-links-filters"},"next":{"title":"WA GET LAST URL ERROR","permalink":"/docs/20-R7/commands/wa-get-last-url-error"}}'),r=n("785893"),l=n("250065");let i={id:"wa-get-last-filtered-url",title:"WA Get last filtered URL",slug:"/commands/wa-get-last-filtered-url",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WA Get last filtered URL"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Last filtered URL"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WA Get last filtered URL"})," command returns the last URL that was filtered in the Web area designated by the ",(0,r.jsx)(t.em,{children:"*"})," and ",(0,r.jsx)(t.em,{children:"object"})," parameters."]}),"\n",(0,r.jsx)(t.p,{children:"The URL may have been filtered for one of the following reasons:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The URL was denied because of a filter (",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})," command),"]}),"\n",(0,r.jsxs)(t.li,{children:["The link is open in the default browser (",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"})," command),"]}),"\n",(0,r.jsx)(t.li,{children:"The URL attempts to open a pop-up window."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"It is advisable to call this command in the context of the On URL Filtering, On Open External Link and On Window Opening Denied form events in order to find out the URL that was filtered."}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/wa-get-url-filters",children:"WA GET URL FILTERS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/wa-set-external-links-filters",children:"WA SET EXTERNAL LINKS FILTERS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1035"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var s=n(667294);let r={},l=s.createContext(r);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);