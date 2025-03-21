"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34775"],{641581:function(e,n,d){d.r(n),d.d(n,{default:()=>x,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/delete-index","title":"DELETE INDEX","description":"DELETE INDEX ( fieldPtr\xa0|\xa0indexName {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-index.md","sourceDirName":"commands-legacy","slug":"/commands/delete-index","permalink":"/docs/ja/commands/delete-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-index.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-index","title":"DELETE INDEX","slug":"/commands/delete-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE INDEX","permalink":"/docs/ja/commands/create-index"},"next":{"title":"EXPORT STRUCTURE","permalink":"/docs/ja/commands/export-structure"}}'),t=d("785893"),i=d("250065");let r={id:"delete-index",title:"DELETE INDEX",slug:"/commands/delete-index",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DELETE INDEX"})," ( fieldPtr\xa0|\xa0indexName {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fieldPtr\xa0|\xa0indexName"}),(0,t.jsx)(n.td,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC, \u6587\u5B57"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u524A\u9664\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6307\u3059\u30DD\u30A4\u30F3\u30BF \u524A\u9664\u3055\u308C\u308B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u540D\u524D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u6E21\u3055\u308C\u308B\u3068 = \u975E\u540C\u671F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["DELETE INDEX\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u30891\u3064\u4EE5\u4E0A\u306E\u65E2\u5B58\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),"\n\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6307\u3059\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u307E\u305F\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u540D\u524D\u306E\u3069\u3061\u3089\u304B\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u30D5\u30A3\u30FC\u30EB\u30C9(",(0,t.jsx)(n.em,{children:"fieldPtr"}),") \u3092\u6307\u3059\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u6E21\u3059\u3068\u3001\u305D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u3059\u308B\u3059\u3079\u3066\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u307E\u305F\u306F\u6A19\u6E96\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002\u3057\u304B\u3057\u305D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C1\u3064\u4EE5\u4E0A\u306E\u8907\u5408\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u540D\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9(",(0,t.jsx)(n.em,{children:"indexName"}),") \u306E\u540D\u524D\u3092\u6E21\u3059\u3068\u3001\u6307\u5B9A\u3055\u308C\u305F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u307F\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u30AD\u30FC\u30EF\u30FC\u30C9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3001\u6A19\u6E96\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3001\u307E\u305F\u306F\u8907\u5408\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4EFB\u610F\u306E*** \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u975E\u540C\u671F\u30E2\u30FC\u30C9\u3067\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u524A\u9664\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u304B\u3089\u306E\u547C\u3073\u51FA\u3057\u5F8C\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u524A\u9664\u304C\u5B8C\u4E86\u3057\u3066\u3044\u308B\u304B\u3001\u5B8C\u4E86\u3057\u3066\u3044\u306A\u3044\u304B\u306B\u95A2\u308F\u3089\u305A\u5143\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u305D\u306E\u5B9F\u884C\u3092\u7D99\u7D9A\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"fieldPtr"}),"\u307E\u305F\u306F",(0,t.jsx)(n.em,{children:"indexName"}),"\u306B\u5BFE\u5FDC\u3059\u308B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u914D\u5E03\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001\u8AAD\u307F\u51FA\u3057\u5C02\u7528\u306E\u30D1\u30C3\u30B1\u30FC\u30B8\u30A2\u30D7\u30EA(",(0,t.jsx)(n.em,{children:"Program Files"})," \u30D5\u30A9\u30EB\u30C0\u5185\u306B\u307E\u305F\u306F.4dz \u30D5\u30A1\u30A4\u30EB\u5185\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B.4dc \u30D5\u30A1\u30A4\u30EB)\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u4E21\u65B9\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306E\u4F7F\u7528\u4F8B\u3092\u4EE5\u4E0B\u306B\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//LastName\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u3059\u308B\u3059\u3079\u3066\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u524A\u9664\n\xa0DELETE INDEX(->[Customers]LastName)\n\xa0\xa0//\u201CCityZip\u201D\u3068\u3044\u3046\u540D\u524D\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u524A\u9664\n\xa0DELETE INDEX("CityZip")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/create-index",children:"CREATE INDEX"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/pause-indexes",children:"PAUSE INDEXES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/set-index",children:"SET INDEX"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"967"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return r}});var s=d(667294);let t={},i=s.createContext(t);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);