"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24235"],{994037:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/flush-cache","title":"FLUSH CACHE","description":"FLUSH CACHE {( size | * )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/flush-cache.md","sourceDirName":"commands-legacy","slug":"/commands/flush-cache","permalink":"/docs/commands/flush-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fflush-cache.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"flush-cache","title":"FLUSH CACHE","slug":"/commands/flush-cache","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cache info","permalink":"/docs/commands/cache-info"},"next":{"title":"Get adjusted blobs cache priority","permalink":"/docs/commands/get-adjusted-blobs-cache-priority"}}'),a=n("785893"),r=n("250065");let c={id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},d=void 0,o={},i=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"FLUSH CACHE"})," {( size | * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"size | *"}),(0,a.jsx)(s.td,{children:"Real, Operator"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"* to completely free cache memory, or number of bytes to free in cache"})]})})]}),"\n",(0,a.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(s.p,{children:"The FLUSH CACHE command immediately saves the data buffers to disk. All changes that have been made to the database are stored on disk."}),"\n",(0,a.jsx)(s.p,{children:"By default, the current cache memory is left untouched, which means that its data continues to be used for subsequent reading accesses. Optionally, you can pass a parameter to modify its contents:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["pass ",(0,a.jsx)(s.em,{children:"*"})," to save the cache and free up entire cache memory."]}),"\n",(0,a.jsxs)(s.li,{children:["pass a ",(0,a.jsx)(s.em,{children:"size"})," value to save the cache and free up only the ",(0,a.jsx)(s.em,{children:"size"})," number of bytes from the cache."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note:"})," Passing a parameter to this command is reserved for testing purposes. For performance reasons, it is not recommended to free up the cache in the production environment."]}),"\n",(0,a.jsxs)(s.p,{children:["In normal cases, you should not call this command, as 4D saves data modifications on a regular basis. The ",(0,a.jsx)(s.strong,{children:"Flush Cache every X Seconds (Minutes)"})," option on the ",(0,a.jsx)(s.a,{href:"/docs/settings/database#memory-page",children:"Database page"})," of the Database Settings, which specifies how often to save, is typically used to control cache flushing. We recommend using the default value of 20 seconds. Note also that the Cache flush periodicity parameter can be set and read using the ",(0,a.jsx)(s.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," and ",(0,a.jsx)(s.a,{href:"/docs/commands/get-database-parameter",children:"Get database parameter"})," commands."]}),"\n",(0,a.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/commands/get-database-parameter",children:"Get database parameter"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,a.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Command number"}),(0,a.jsx)(s.td,{children:"297"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread safe"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return c}});var t=n(667294);let a={},r=t.createContext(a);function c(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);