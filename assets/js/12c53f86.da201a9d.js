"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82749"],{72780:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/adjust-blobs-cache-priority","title":"ADJUST BLOBS CACHE PRIORITY","description":"ADJUST BLOBS CACHE PRIORITY ( aTable ; priority )","source":"@site/versioned_docs/version-20-R7/commands-legacy/adjust-blobs-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/adjust-blobs-cache-priority","permalink":"/docs/commands/adjust-blobs-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-blobs-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"adjust-blobs-cache-priority","title":"ADJUST BLOBS CACHE PRIORITY","slug":"/commands/adjust-blobs-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cache Management","permalink":"/docs/category/cache-management"},"next":{"title":"ADJUST INDEX CACHE PRIORITY","permalink":"/docs/commands/adjust-index-cache-priority"}}'),s=t("785893"),i=t("250065");let d={id:"adjust-blobs-cache-priority",title:"ADJUST BLOBS CACHE PRIORITY",slug:"/commands/adjust-blobs-cache-priority",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Expert mode",id:"expert-mode",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ADJUST BLOBS CACHE PRIORITY"})," ( ",(0,s.jsx)(n.em,{children:"aTable"})," ; ",(0,s.jsx)(n.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:'Table whose "blobs" data priority value has to be adjusted'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"priority"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Cache priority value for BLOBs in the table"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"expert-mode",children:"Expert mode"}),"\n",(0,s.jsx)(n.p,{children:"This command is reserved for specific needs. It must be used with care since it can affect database performance."}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ADJUST BLOBS CACHE PRIORITY"})," command modifies the ",(0,s.jsx)(n.em,{children:"priority"}),' of the "blobs" data related to ',(0,s.jsx)(n.em,{children:"aTable"})," in cache for the current process. A call to this command replaces any priority previously adjusted through the same command in the same process. This command adjusts the priority for a temporary need, for example during a query or an import."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command only works in local mode (4D Server and 4D); it cannot be used in 4D remote mode."]}),"\n",(0,s.jsxs)(n.p,{children:['"Blobs" data field types include BLOB, text, picture, and object. This command handles priority for such data when they are stored in the data file only. Priority for fields of scalar type (such as date, number, or string types) is adjusted by the ',(0,s.jsx)(n.a,{href:"/docs/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:['Pass one of the following constants from the "',(0,s.jsx)(n.em,{children:"Cache Management"}),'" theme in the ',(0,s.jsx)(n.em,{children:"priority"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority normal"}),(0,s.jsx)(n.td,{children:"Sets the cache priority to its default value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority high"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very high"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to temporarily change the cache priority for the [Docs] table text fields stored in the data file when executing a sequential search:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)\n\xa0QUERY([Docs];[Docs]Author#"A@")\xa0// sequential search on a non indexed field\n\xa0\xa0//... run several other queries or sorts on the same table\n\xa0\xa0// when finished, set back to normal cache priority\n\xa0ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/get-adjusted-blobs-cache-priority",children:"Get adjusted blobs cache priority"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1431"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);