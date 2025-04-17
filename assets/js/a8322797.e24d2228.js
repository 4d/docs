"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87336"],{321448:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/adjust-table-cache-priority","title":"ADJUST TABLE CACHE PRIORITY","description":"ADJUST TABLE CACHE PRIORITY ( aTable ; priority )","source":"@site/versioned_docs/version-20-R9/commands-legacy/adjust-table-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/adjust-table-cache-priority","permalink":"/docs/commands/adjust-table-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-table-cache-priority.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"adjust-table-cache-priority","title":"ADJUST TABLE CACHE PRIORITY","slug":"/commands/adjust-table-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADJUST INDEX CACHE PRIORITY","permalink":"/docs/commands/adjust-index-cache-priority"},"next":{"title":"Cache info","permalink":"/docs/commands/cache-info"}}'),s=t("785893"),i=t("250065");let d={id:"adjust-table-cache-priority",title:"ADJUST TABLE CACHE PRIORITY",slug:"/commands/adjust-table-cache-priority",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Expert mode",id:"expert-mode",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ADJUST TABLE CACHE PRIORITY"})," ( ",(0,s.jsx)(n.em,{children:"aTable"})," ; ",(0,s.jsx)(n.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table whose scalar data priority value has to be adjusted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"priority"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Cache priority value for the table"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"expert-mode",children:"Expert mode"}),"\n",(0,s.jsx)(n.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ADJUST TABLE CACHE PRIORITY"})," command modifies the ",(0,s.jsx)(n.em,{children:"priority"})," value of the data related to ",(0,s.jsx)(n.em,{children:"aTable"})," in cache for the current process. A call to this command replaces any priority value previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example during a query or an import."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,s.jsxs)(n.p,{children:["This command handles priority for data in scalar fields only (date, number, or string types). Priority for fields of binary type (Blobs, texts, pictures, and objects) is handled by the ",(0,s.jsx)(n.a,{href:"/docs/commands/adjust-blobs-cache-priority",children:"ADJUST BLOBS CACHE PRIORITY"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"priority"}),' parameter, pass one of the following constants from the "',(0,s.jsx)(n.em,{children:"Cache Management"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority normal"}),(0,s.jsx)(n.td,{children:"Sets the cache priority to its default value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority high"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very high"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to temporarily change the cache priority for the [Docs] scalar fields:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)\n\xa0\xa0// ... do some specific operation\n\xa0ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-table-cache-priority",children:"SET TABLE CACHE PRIORITY"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1429"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);