"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49090"],{212380:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/adjust-index-cache-priority","title":"ADJUST INDEX CACHE PRIORITY","description":"ADJUST INDEX CACHE PRIORITY ( aField ; priority )","source":"@site/versioned_docs/version-20-R9/commands-legacy/adjust-index-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/adjust-index-cache-priority","permalink":"/docs/commands/adjust-index-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-index-cache-priority.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"adjust-index-cache-priority","title":"ADJUST INDEX CACHE PRIORITY","slug":"/commands/adjust-index-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADJUST BLOBS CACHE PRIORITY","permalink":"/docs/commands/adjust-blobs-cache-priority"},"next":{"title":"ADJUST TABLE CACHE PRIORITY","permalink":"/docs/commands/adjust-table-cache-priority"}}'),i=r("785893"),s=r("250065");let d={id:"adjust-index-cache-priority",title:"ADJUST INDEX CACHE PRIORITY",slug:"/commands/adjust-index-cache-priority",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Expert mode",id:"expert-mode",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ADJUST INDEX CACHE PRIORITY"})," ( ",(0,i.jsx)(n.em,{children:"aField"})," ; ",(0,i.jsx)(n.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aField"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field whose index(es) priority value has to be adjusted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"priority"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Cache priority value for the field index(es)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"expert-mode",children:"Expert mode"}),"\n",(0,i.jsx)(n.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"ADJUST INDEX CACHE PRIORITY"})," command modifies the ",(0,i.jsx)(n.em,{children:"priority"})," value of the index(es) related to the ",(0,i.jsx)(n.em,{children:"aField"})," in cache for the current process. A call to this command replaces any priority value previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example when executing an import or a query."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,i.jsxs)(n.p,{children:["This command handles priority for all indexes related to the ",(0,i.jsx)(n.em,{children:"aField"}),", including keyword indexes. However, it does not change composite indexes priority."]}),"\n",(0,i.jsxs)(n.p,{children:['Pass one of the following constants from the "',(0,i.jsx)(n.em,{children:"Cache Management"}),'" theme in the ',(0,i.jsx)(n.em,{children:"priority"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority low"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority very low"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority normal"}),(0,i.jsx)(n.td,{children:"Sets the cache priority to its default value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority high"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority very high"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to temporarily change the cache priority for the [Docs]Comments field index(es):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)\n\xa0QUERY([Docs];[Docs]Comments%"Extra")\xa0// search on an indexed field\n\xa0\xa0//... run several other queries or sorts on the same table\n\xa0\xa0// when finished, set back to normal cache priority\n\xa0ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/set-index-cache-priority",children:"SET INDEX CACHE PRIORITY"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1430"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);