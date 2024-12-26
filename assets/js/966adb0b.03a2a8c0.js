"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73718"],{4215:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/set-blobs-cache-priority","title":"SET BLOBS CACHE PRIORITY","description":"SET BLOBS CACHE PRIORITY ( aTable ; priority )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-blobs-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-blobs-cache-priority","permalink":"/docs/commands/set-blobs-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-blobs-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-blobs-cache-priority","title":"SET BLOBS CACHE PRIORITY","slug":"/commands/set-blobs-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MEMORY STATISTICS","permalink":"/docs/commands/memory-statistics"},"next":{"title":"SET CACHE SIZE","permalink":"/docs/commands/set-cache-size"}}'),r=t("785893"),i=t("250065");let d={id:"set-blobs-cache-priority",title:"SET BLOBS CACHE PRIORITY",slug:"/commands/set-blobs-cache-priority",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Expert mode",id:"expert-mode",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET BLOBS CACHE PRIORITY"})," ( ",(0,r.jsx)(n.em,{children:"aTable"})," ; ",(0,r.jsx)(n.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Table whose "blobs" data priority value has to be set for the session'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"priority"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cache priority value for BLOBs in the table"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"expert-mode",children:"Expert mode"}),"\n",(0,r.jsx)(n.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SET BLOBS CACHE PRIORITY"})," command sets a specific ",(0,r.jsx)(n.em,{children:"priority"}),' to the "blobs" data related to ',(0,r.jsx)(n.em,{children:"aTable"})," in cache for all processes in the current session. This command should be called in the ",(0,r.jsx)(n.strong,{children:"On Startup"})," or ",(0,r.jsx)(n.strong,{children:"On Server Startup"})," database method."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,r.jsx)(n.p,{children:'"Blobs" data field types include BLOB, text, picture, and object. This command handles priority for such data when they are stored in the data file only.'}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"priority"}),' parameter, pass one of the following constants from the "',(0,r.jsx)(n.em,{children:"Cache Management"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority normal"}),(0,r.jsx)(n.td,{children:"Sets the cache priority to its default value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority high"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very high"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'In the , you want to set a high priority for the [Customer] table "blobs" data:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOBS CACHE PRIORITY([Customer];Cache priority very high)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/adjust-blobs-cache-priority",children:"ADJUST BLOBS CACHE PRIORITY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/get-adjusted-blobs-cache-priority",children:"Get adjusted blobs cache priority"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1425"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);