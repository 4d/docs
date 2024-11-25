"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94228"],{268307:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>o,assets:()=>l,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/set-index-cache-priority","title":"SET INDEX CACHE PRIORITY","description":"SET INDEX CACHE PRIORITY ( aField ; priority )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-index-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-index-cache-priority","permalink":"/docs/ja/commands/set-index-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-index-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-index-cache-priority","title":"SET INDEX CACHE PRIORITY","slug":"/commands/set-index-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CACHE SIZE","permalink":"/docs/ja/commands/set-cache-size"},"next":{"title":"SET TABLE CACHE PRIORITY","permalink":"/docs/ja/commands/set-table-cache-priority"}}'),i=r("785893"),s=r("250065");let d={id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u4E0A\u7D1A\u8005\u5411\u3051",id:"\u4E0A\u7D1A\u8005\u5411\u3051",level:4},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," ( ",(0,i.jsx)(n.em,{children:"aField"})," ; ",(0,i.jsx)(n.em,{children:"priority"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aField"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field whose index(es) priority value has to be set for the session"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"priority"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Cache priority value for the field index(es)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u4E0A\u7D1A\u8005\u5411\u3051",children:"\u4E0A\u7D1A\u8005\u5411\u3051"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u7279\u5B9A\u306E\u7528\u9014\u306E\u305F\u3081\u306B\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u5F71\u97FF\u3059\u308B\u305F\u3081\u3001\u6CE8\u610F\u3057\u3066\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u304A\u3044\u3066\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u3067\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306B\u3042\u308B",(0,i.jsx)(n.em,{children:"aField"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u3059\u308B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3001",(0,i.jsx)(n.em,{children:"priority"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u7279\u5B9A\u306E\u512A\u5148\u5EA6\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5FC5\u305A",(0,i.jsx)(n.strong,{children:"On Startup"})," \u3042\u308B\u3044\u306F ",(0,i.jsx)(n.strong,{children:"On Server Startup"}),"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u547C\u3073\u51FA\u3055\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9(4D Server\u3042\u308B\u3044\u306F4D)\u306B\u304A\u3044\u3066\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u3002\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u3059\u308B\u3059\u3079\u3066\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9(\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u542B\u3080)\u306B\u5BFE\u3057\u512A\u5148\u5EA6\u3092\u7BA1\u7406\u3057\u307E\u3059(\u8907\u5408\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u512A\u5148\u5EA6\u306F\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093)\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"priority"}),' \u5F15\u6570\u306B\u306F\u3001"',(0,i.jsx)(n.em,{children:"Cache Management"}),'"\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3046\u3061\u306E\u3069\u308C\u304B\u4E00\u3064\u3092\u6E21\u3057\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,i.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority low"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority very low"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority normal"}),(0,i.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u512A\u5148\u5EA6\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306B\u8A2D\u5B9A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority high"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cache priority very high"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u306B\u304A\u3044\u3066\u3001[Customer]LastName\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066\u9AD8\u3044\u512A\u5148\u5EA6\u3092\u8A2D\u5B9A\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"})]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);