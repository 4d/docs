"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72064"],{974150:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/adjust-table-cache-priority","title":"ADJUST TABLE CACHE PRIORITY","description":"ADJUST TABLE CACHE PRIORITY ( aTable ; priority )","source":"@site/versioned_docs/version-20-R7/commands-legacy/adjust-table-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/adjust-table-cache-priority","permalink":"/docs/commands/adjust-table-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-table-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"adjust-table-cache-priority","title":"ADJUST TABLE CACHE PRIORITY","slug":"/commands/adjust-table-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADJUST INDEX CACHE PRIORITY","permalink":"/docs/commands/adjust-index-cache-priority"},"next":{"title":"Cache info","permalink":"/docs/commands/cache-info"}}'),s=n("785893"),i=n("250065");let a={id:"adjust-table-cache-priority",title:"ADJUST TABLE CACHE PRIORITY",slug:"/commands/adjust-table-cache-priority",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Expert mode",id:"expert-mode",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ADJUST TABLE CACHE PRIORITY"})," ( ",(0,s.jsx)(t.em,{children:"aTable"})," ; ",(0,s.jsx)(t.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aTable"}),(0,s.jsx)(t.td,{children:"Table"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Table whose scalar data priority value has to be adjusted"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"priority"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Cache priority value for the table"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"expert-mode",children:"Expert mode"}),"\n",(0,s.jsx)(t.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"ADJUST TABLE CACHE PRIORITY"})," command modifies the ",(0,s.jsx)(t.em,{children:"priority"})," value of the data related to ",(0,s.jsx)(t.em,{children:"aTable"})," in cache for the current process. A call to this command replaces any priority value previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example during a query or an import."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,s.jsxs)(t.p,{children:["This command handles priority for data in scalar fields only (date, number, or string types). Priority for fields of binary type (Blobs, texts, pictures, and objects) is handled by the ",(0,s.jsx)(t.a,{href:"/docs/commands/adjust-blobs-cache-priority",children:"ADJUST BLOBS CACHE PRIORITY"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.em,{children:"priority"}),' parameter, pass one of the following constants from the "',(0,s.jsx)(t.em,{children:"Cache Management"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache priority low"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache priority very low"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache priority normal"}),(0,s.jsx)(t.td,{children:"Sets the cache priority to its default value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache priority high"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cache priority very high"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to temporarily change the cache priority for the [Docs] scalar fields:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)\n\xa0\xa0// ... do some specific operation\n\xa0ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)\n"})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/set-table-cache-priority",children:"SET TABLE CACHE PRIORITY"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return a}});var r=n(667294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);