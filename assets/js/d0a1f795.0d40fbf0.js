"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51057"],{893493:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/wa-set-external-links-filters","title":"WA SET EXTERNAL LINKS FILTERS","description":"WA SET EXTERNAL LINKS FILTERS ( { ;} object ; filtersArr ; allowDenyArr* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-set-external-links-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-set-external-links-filters","permalink":"/docs/commands/wa-set-external-links-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-set-external-links-filters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-set-external-links-filters","title":"WA SET EXTERNAL LINKS FILTERS","slug":"/commands/wa-set-external-links-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Run offscreen area","permalink":"/docs/commands/wa-run-offscreen-area"},"next":{"title":"WA SET PAGE CONTENT","permalink":"/docs/commands/wa-set-page-content"}}'),r=s("785893"),l=s("250065");let i={id:"wa-set-external-links-filters",title:"WA SET EXTERNAL LINKS FILTERS",slug:"/commands/wa-set-external-links-filters",displayed_sidebar:"docs"},a=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"filtersArr"})," ; ",(0,r.jsx)(n.em,{children:"allowDenyArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filtersArr"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Filters array"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"allowDenyArr"}),(0,r.jsx)(n.td,{children:"Boolean array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Allow-deny array"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," command sets up one or more external link filters for the Web area designated by the ",(0,r.jsx)(n.em,{children:"*"})," and ",(0,r.jsx)(n.em,{children:"object"})," parameters. External link filters determine whether a URL associated with the current page via a link must be opened in the Web area or in the default Web browser of the machine."]}),"\n",(0,r.jsxs)(n.p,{children:["When the user clicks on a link in the current page, 4D consults the list of external link filters in order to check whether the URL requested must be opened in the browser of the machine. If so, the page corresponding to the URL is displayed in the Web browser and the On Open External Link form event is generated. Otherwise (default operation), the page corresponding to the URL is displayed in the Web area. The evaluation of the URL is based on the contents of the ",(0,r.jsx)(n.em,{children:"filtersArr"})," and ",(0,r.jsx)(n.em,{children:"allowDenyArr"})," arrays."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"filtersArr"})," and ",(0,r.jsx)(n.em,{children:"allowDenyArr"})," arrays must be synchronized."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Each element of the ",(0,r.jsx)(n.em,{children:"filtersArr"})," array must contain a URL to be filtered. You can use the ",(0,r.jsx)(n.em,{children:"*"})," as a wildcard to replace one or more characters."]}),"\n",(0,r.jsxs)(n.li,{children:["Each corresponding element in the ",(0,r.jsx)(n.em,{children:"allowDenyArr"})," array must contain a Boolean indicating whether the URL must be opened in the Web area (",(0,r.jsx)(n.a,{href:"/docs/commands/true",title:"True",children:"True"}),") or in the Web browser (",(0,r.jsx)(n.a,{href:"/docs/commands/false",title:"False",children:"False"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If there is a contradiction at the configuration level (the same URL is both allowed and denied), the last setting is the one taken into account."}),"\n",(0,r.jsxs)(n.p,{children:['To disable URL filtering, call the command and pass empty arrays or pass, respectively, the values "',(0,r.jsx)(n.em,{children:"*"}),'" and ',(0,r.jsx)(n.a,{href:"/docs/commands/true",title:"True",children:"True"})," in the last elements of the ",(0,r.jsx)(n.em,{children:"filtersArr"})," and ",(0,r.jsx)(n.em,{children:"allowDenyArr"})," arrays."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important:"})," The filtering established by the ",(0,r.jsx)(n.a,{href:"/docs/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})," command is taken into account before that of the ",(0,r.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," command. This means that if a URL is denied because of a ",(0,r.jsx)(n.a,{href:"/docs/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})," command filter, it cannot be opened in the browser even if it is explicitly specified by the ",(0,r.jsx)(n.strong,{children:"WA SET EXTERNAL LINKS FILTERS"})," command (see example 2)."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"This example causes sites to be opened in external browsers:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY STRING(0;$filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0\n\xa0APPEND TO ARRAY($filters;"*www.google.*")\xa0//Select "google"\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0\xa0//False: this link will be opened in an external browser\n\xa0APPEND TO ARRAY($filters;"*www.apple.*")\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0\xa0//False: this link will be opened in an external browser\n\xa0WA SET EXTERNAL LINKS FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"This example combines the filtering of both sites and external links:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY STRING(0;$filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*www.google.*")\xa0//Select "google"\n\xa0APPEND TO ARRAY($AllowDeny;False)\xa0//Deny this link\n\xa0WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)\n\xa0\n\xa0ARRAY STRING(0;$filters;0)\n\xa0ARRAY BOOLEAN($AllowDeny;0)\n\xa0APPEND TO ARRAY($filters;"*www.google.*")\xa0//Select "google"\n\xa0APPEND TO ARRAY($AllowDeny;False)\n\xa0\xa0//False: this link should be opened in an external browser but this setting\n\xa0\xa0//has no effect because the link will be blocked by the URL filtering.\n\xa0WA SET EXTERNAL LINKS FILTERS(MyWArea;$filters;$AllowDeny)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);