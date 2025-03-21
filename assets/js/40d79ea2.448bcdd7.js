"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93814"],{271429:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/set-index-cache-priority","title":"SET INDEX CACHE PRIORITY","description":"SET INDEX CACHE PRIORITY ( aField ; priority )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-index-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-index-cache-priority","permalink":"/docs/commands/set-index-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-index-cache-priority.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-index-cache-priority","title":"SET INDEX CACHE PRIORITY","slug":"/commands/set-index-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CACHE SIZE","permalink":"/docs/commands/set-cache-size"},"next":{"title":"SET TABLE CACHE PRIORITY","permalink":"/docs/commands/set-table-cache-priority"}}'),s=t("785893"),i=t("250065");let d={id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Expert mode",id:"expert-mode",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," ( ",(0,s.jsx)(n.em,{children:"aField"})," ; ",(0,s.jsx)(n.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field whose index(es) priority value has to be set for the session"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"priority"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Cache priority value for the field index(es)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"expert-mode",children:"Expert mode"}),"\n",(0,s.jsx)(n.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," command sets a specific ",(0,s.jsx)(n.em,{children:"priority"})," to the index(es) related to the ",(0,s.jsx)(n.em,{children:"aField"})," in cache for all processes in the current session. This command should be called in the ",(0,s.jsx)(n.strong,{children:"On Startup"})," or ",(0,s.jsx)(n.strong,{children:"On Server Startup"})," database method."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,s.jsxs)(n.p,{children:["This command handles priority for all indexes related to the ",(0,s.jsx)(n.em,{children:"aField"}),", including keyword indexes (composite indexes priority cannot be customized)."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"priority"}),' parameter, pass one of the following constants from the "',(0,s.jsx)(n.em,{children:"Cache Management"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority normal"}),(0,s.jsx)(n.td,{children:"Sets the cache priority to its default value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority high"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very high"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In the , you want to set a high priority for the [Customer]LastName field indexes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1401"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);