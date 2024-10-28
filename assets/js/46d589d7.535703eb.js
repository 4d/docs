"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36630],{839840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var s=n(474848),r=n(28453);const c={id:"sql-get-current-data-source",title:"SQL Get current data source",slug:"/commands/sql-get-current-data-source",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/sql-get-current-data-source",title:"SQL Get current data source",description:"SQL Get current data source  -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/sql-get-current-data-source.md",sourceDirName:"commands-legacy",slug:"/commands/sql-get-current-data-source",permalink:"/docs/commands/sql-get-current-data-source",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-current-data-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-get-current-data-source",title:"SQL Get current data source",slug:"/commands/sql-get-current-data-source",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SQL EXPORT SELECTION",permalink:"/docs/commands/sql-export-selection"},next:{title:"SQL GET DATA SOURCE LIST",permalink:"/docs/commands/sql-get-data-source-list"}},a={},i=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SQL Get current data source"}),"  -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Name of current data source being used"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The SQL Get current data source command returns the name of the current data source of the application. The current data source receives the SQL queries executed within ",(0,s.jsx)(t.strong,{children:"Begin SQL/End SQL"})," structures."]}),"\n",(0,s.jsxs)(t.p,{children:['When the current data source is the local 4D database, the command returns the string \u201c;DB4D_SQL_LOCAL;\u201d, which corresponds to the value of the SQL_INTERNAL constant ("',(0,s.jsx)(t.em,{children:"SQL"}),'" theme).']}),"\n",(0,s.jsx)(t.p,{children:"This command lets you check the current data source, generally before executing an SQL query."}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/begin-sql",children:"Begin SQL"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/end-sql",children:"End SQL"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/sql-get-data-source-list",children:"SQL GET DATA SOURCE LIST"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/sql-login",children:"SQL LOGIN"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/sql-logout",children:"SQL LOGOUT"})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(296540);const r={},c=s.createContext(r);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);