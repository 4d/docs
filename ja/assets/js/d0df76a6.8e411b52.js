"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58009"],{838480:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/flush-cache","title":"FLUSH CACHE","description":"FLUSH CACHE {( size )}FLUSH CACHE {( * )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/flush-cache.md","sourceDirName":"commands-legacy","slug":"/commands/flush-cache","permalink":"/docs/ja/20-R7/commands/flush-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fflush-cache.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"flush-cache","title":"FLUSH CACHE","slug":"/commands/flush-cache","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cache info","permalink":"/docs/ja/20-R7/commands/cache-info"},"next":{"title":"Get adjusted blobs cache priority","permalink":"/docs/ja/20-R7/commands/get-adjusted-blobs-cache-priority"}}'),c=s("785893"),d=s("250065");let r={id:"flush-cache",title:"FLUSH CACHE",slug:"/commands/flush-cache",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"FLUSH CACHE"})," {( size )}",(0,c.jsx)(n.br,{}),(0,c.jsx)(n.strong,{children:"FLUSH CACHE"})," {( * )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"size | *"}),(0,c.jsx)(n.td,{children:"\u5B9F\u6570, \u6F14\u7B97\u5B50"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u89E3\u653E\u3059\u308B\u30AD\u30E3\u30C3\u30B7\u30E5\u30B5\u30A4\u30BA(\u30D0\u30A4\u30C8\u5358\u4F4D)\u3001* \u6307\u5B9A\u6642\u306F\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA\u3092\u5B8C\u5168\u306B\u7A7A\u306B\u3059\u308B"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsx)(n.p,{children:"FLUSH CACHE \u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u5373\u5EA7\u306B\u30C7\u30FC\u30BF\u30D0\u30C3\u30D5\u30A1\u306E\u5185\u5BB9\u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3078\u306E\u3059\u3079\u3066\u306E\u5909\u66F4\u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA\u306F\u305D\u306E\u307E\u307E\u306E\u72B6\u614B\u3067\u6B8B\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u305D\u306E\u5F8C\u306E\u8AAD\u307F\u51FA\u3057\u30A2\u30AF\u30BB\u30B9\u306B\u304A\u3044\u3066\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u30C7\u30FC\u30BF\u306F\u5F15\u304D\u7D9A\u304D\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u3001\u305D\u306E\u4E2D\u8EAB\u3092\u5909\u66F4\u3059\u308B\u5F15\u6570\u3092\u6E21\u3059\u4E8B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA\u5168\u4F53\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.em,{children:"size"})," \u5024\u3092\u6E21\u3059\u3068\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u4FDD\u5B58\u3057\u305F\u306E\u3061\u3001\u6307\u5B9A\u3057\u305F\u5024\u306E\u30D0\u30A4\u30C8\u6570\u3060\u3051\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u89E3\u653E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3078\u306E\u5F15\u6570\u306E\u53D7\u3051\u6E21\u3057\u306F\u30C6\u30B9\u30C8\u76EE\u7684\u3067\u7528\u610F\u3055\u308C\u3066\u3044\u308B\u3082\u306E\u3067\u3059\u3002\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001\u904B\u7528\u74B0\u5883\u3067\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u306F\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u306E\u5909\u66F4\u5185\u5BB9\u306F 4D\u306B\u3088\u3063\u3066\u5B9A\u671F\u7684\u306B\u4FDD\u5B58\u3055\u308C\u308B\u305F\u3081\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u901A\u5E38\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002\u4E00\u822C\u7684\u306B\u306F\u3001\u74B0\u5883\u8A2D\u5B9A\u306E ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/settings/database",children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30DA\u30FC\u30B8"})," \u306B\u3042\u308B\u3001",(0,c.jsx)(n.strong,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58: X\u79D2(\u5206)\u6BCE"}),"\u30AA\u30D7\u30B7\u30E7\u30F3 (\u4FDD\u5B58\u306E\u983B\u5EA6\u3092\u6307\u5B9A) \u3092\u4F7F\u7528\u3057\u3066\u3001\u30D0\u30C3\u30D5\u30A1\u306E\u30D5\u30E9\u30C3\u30B7\u30E5\u9593\u9694\u3092\u6307\u5B9A\u3057\u307E\u3059 (\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306E20\u79D2\u304C\u8A2D\u5B9A\u3068\u3057\u3066\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059)\u3002\u307E\u305FCache flush periodicity \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092 ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," \u3042\u308B\u3044\u306F ",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-database-parameter",children:"Get database parameter"})," \u30B3\u30DE\u30F3\u30C9\u3067\u8A2D\u5B9A\u30FB\u53D6\u5F97\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-database-parameter",children:"Get database parameter"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(n.td,{children:"297"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let c={},d=t.createContext(c);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);