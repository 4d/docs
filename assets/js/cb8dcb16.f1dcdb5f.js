"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9850],{965649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=t(474848),r=t(28453);const d={id:"last-query-plan",title:"Last query plan",slug:"/commands/last-query-plan",displayed_sidebar:"docs"},i=void 0,a={id:"commands-legacy/last-query-plan",title:"Last query plan",description:"Last query plan ( descFormat ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/last-query-plan.md",sourceDirName:"commands-legacy",slug:"/commands/last-query-plan",permalink:"/docs/commands/last-query-plan",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-query-plan.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"last-query-plan",title:"Last query plan",slug:"/commands/last-query-plan",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Last query path",permalink:"/docs/commands/last-query-path"},next:{title:"ORDER BY",permalink:"/docs/commands/order-by"}},o={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Last query plan"})," ( ",(0,s.jsx)(n.em,{children:"descFormat"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"descFormat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Description format (Text or XML)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Description of last executed query plan"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Last query plan"})," command returns the detailed internal description of the query plan for the last query carried out on the data. For more information about query descriptions, please refer to the documentation of the ",(0,s.jsx)(n.a,{href:"/docs/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["This description is returned in Text or XML format depending on the value passed in the ",(0,s.jsx)(n.em,{children:"descFormat"})," parameter. You can pass one of the following constants, found in the \u201c",(0,s.jsx)(n.em,{children:"Queries"}),"\u201d theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description in text format"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description in XML format"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["This command returns a significant value if the ",(0,s.jsx)(n.a,{href:"/docs/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"})," command has been executed during the session."]}),"\n",(0,s.jsxs)(n.p,{children:["The description of the last query plan can be compared to the description of the actual path of the last query (obtained using the ",(0,s.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"})," command) for optimization purposes."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/describe-query-execution",children:"DESCRIBE QUERY EXECUTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/last-query-path",children:"Last query path"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);