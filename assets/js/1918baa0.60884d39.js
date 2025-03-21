"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90950"],{915076:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/last-query-plan","title":"Last query plan","description":"Last query plan ( descFormat ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/last-query-plan.md","sourceDirName":"commands-legacy","slug":"/commands/last-query-plan","permalink":"/docs/commands/last-query-plan","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-query-plan.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"last-query-plan","title":"Last query plan","slug":"/commands/last-query-plan","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Last query path","permalink":"/docs/commands/last-query-path"},"next":{"title":"ORDER BY","permalink":"/docs/commands/order-by"}}'),r=t("785893"),d=t("250065");let i={id:"last-query-plan",title:"Last query plan",slug:"/commands/last-query-plan",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Last query plan"})," ( ",(0,r.jsx)(n.em,{children:"descFormat"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"descFormat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Description format (Text or XML)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Description of last executed query plan"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Last query plan"})," command returns the detailed internal description of the query plan for the last query carried out on the data. For more information about query descriptions, please refer to the documentation of the ",(0,r.jsx)(n.a,{href:"/docs/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["This description is returned in Text or XML format depending on the value passed in the ",(0,r.jsx)(n.em,{children:"descFormat"})," parameter. You can pass one of the following constants, found in the \u201C",(0,r.jsx)(n.em,{children:"Queries"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description in text format"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description in XML format"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This command returns a significant value if the ",(0,r.jsx)(n.a,{href:"/docs/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"})," command has been executed during the session."]}),"\n",(0,r.jsxs)(n.p,{children:["The description of the last query plan can be compared to the description of the actual path of the last query (obtained using the ",(0,r.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"})," command) for optimization purposes."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1046"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);