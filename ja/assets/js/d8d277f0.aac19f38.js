"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32608"],{230437:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/delete-from-list","title":"DELETE FROM LIST","description":"DELETE FROM LIST ( { ;} list ; itemRef |  {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-from-list.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-list","permalink":"/docs/ja/20-R8/commands/delete-from-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-from-list","title":"DELETE FROM LIST","slug":"/commands/delete-from-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count list items","permalink":"/docs/ja/20-R8/commands/count-list-items"},"next":{"title":"Find in list","permalink":"/docs/ja/20-R8/commands/find-in-list"}}'),d=s("785893"),i=s("250065");let l={id:"delete-from-list",title:"DELETE FROM LIST",slug:"/commands/delete-from-list",displayed_sidebar:"docs"},r=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FROM LIST"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"list"})," ; itemRef | * {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u3057\u305F\u5834\u5408, list\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u3057\u305F\u5834\u5408, list\u306F\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"list"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7 (* \u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408), \u307E\u305F\u306F \u30EA\u30B9\u30C8\u30BF\u30A4\u30D7\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u3092\u6E21\u3057\u305F\u5834\u5408)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"itemRef | *"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570, \u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u9805\u76EE\u53C2\u7167\u756A\u53F7, \u307E\u305F\u306F 0 \u306F\u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE \u307E\u305F\u306F * \u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30EA\u30B9\u30C8\u9805\u76EE"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u6307\u5B9A\u3057\u305F\u5834\u5408, \u30B5\u30D6\u30EA\u30B9\u30C8\u304C\u3042\u308C\u3070\u305D\u308C\u3082\u30E1\u30E2\u30EA\u304B\u3089\u6D88\u53BB \u7701\u7565\u3057\u305F\u5834\u5408, \u30B5\u30D6\u30EA\u30B9\u30C8\u304C\u3042\u3063\u3066\u3082\u305D\u308C\u3092\u6D88\u53BB\u3057\u306A\u3044"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["DELETE FROM LIST \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"list"}),"\u306B\u6307\u5B9A\u3057\u305F\u53C2\u7167\u756A\u53F7\u307E\u305F\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6301\u3064\u30EA\u30B9\u30C8\u304B\u3089\u3001",(0,d.jsx)(n.em,{children:"itemRef"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["1\u756A\u76EE\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570 ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001",(0,d.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306F\u30D5\u30A9\u30FC\u30E0\u4E2D\u306E\u30EA\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"list"})," \u5F15\u6570\u306B\u306F\u968E\u5C64\u30EA\u30B9\u30C8\u53C2\u7167 (",(0,d.jsx)(n.a,{href:"#",title:"\u968E\u5C64\u30EA\u30B9\u30C8\u3078\u306E\u53C2\u7167",children:"ListRef"}),") \u3092\u6E21\u3057\u307E\u3059\u3002\u968E\u5C64\u30EA\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30921\u3064\u3057\u304B\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3084\u30012\u756A\u76EE\u306E ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u7701\u7565\u3057\u3066\u968E\u5C64\u30EA\u30B9\u30C8\u69CB\u9020\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u5834\u5408\u306F\u3001\u4E21\u65B9\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u4ED6\u65B9\u30011\u3064\u306E\u968E\u5C64\u30EA\u30B9\u30C8\u3092\u8907\u6570\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u5834\u5408\u3084\u30012\u756A\u76EE\u306E ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3057\u3066\u30AB\u30EC\u30F3\u30C8\u306E\u9805\u76EE\u3092\u51E6\u7406\u5BFE\u8C61\u3068\u3059\u308B\u5834\u5408\u306F\u3001\u305D\u308C\u305E\u308C\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u500B\u5225\u306B\u30AB\u30EC\u30F3\u30C8\u9805\u76EE\u3092\u6301\u3064\u305F\u3081\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u57FA\u3065\u304F\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"itemRef"}),"\u306B ",(0,d.jsx)(n.em,{children:"*"})," \u3092\u6E21\u3059\u3068\u3001\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE\u3092\u30EA\u30B9\u30C8\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B0\u3092\u6E21\u3059\u3068\u30EA\u30B9\u30C8\u306B\u6700\u5F8C\u306B\u8FFD\u52A0\u3055\u308C\u305F\u9805\u76EE\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u307E\u305F\u524A\u9664\u3059\u308B\u9805\u76EE\u306E\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3055\u308C\u305F\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u9805\u76EE\u304C\u898B\u3064\u304B\u3089\u306A\u3051\u308C\u3070\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u9805\u76EE\u53C2\u7167\u756A\u53F7\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u3001\u305D\u308C\u305E\u308C\u306E\u9805\u76EE\u306B\u30E6\u30CB\u30FC\u30AF\u306A\u53C2\u7167\u756A\u53F7\u3092\u6301\u3064\u30EA\u30B9\u30C8\u3092\u30D3\u30EB\u30C9\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u9805\u76EE\u3092\u8B58\u5225\u3067\u304D\u307E\u305B\u3093\u3002\u8A73\u7D30\u306F",(0,d.jsx)(n.em,{children:"\u968E\u5C64\u30EA\u30B9\u30C8\u306E\u7BA1\u7406"}),"\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3069\u306E\u9805\u76EE\u3092\u524A\u9664\u3059\u308B\u304B\u306B\u95A2\u308F\u3089\u305A\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u3066\u30014D\u304C\u30B5\u30D6\u30EA\u30B9\u30C8\u3082\u524A\u9664\u3059\u308B\u3088\u3046\u306B\u6307\u793A\u3059\u3079\u304D\u3067\u3059\u3002",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001\u30B5\u30D6\u30EA\u30B9\u30C8\u306E\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7\u3092\u4E8B\u524D\u306B\u53D6\u5F97\u3057\u307E\u3059\u3002\u5F8C\u3067",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3053\u306E\u30EA\u30B9\u30C8\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F\u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u9805\u76EE\u3092",(0,d.jsx)(n.em,{children:"hList"}),"\u30EA\u30B9\u30C8\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002\u9805\u76EE\u306B\u30B5\u30D6\u30EA\u30B9\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u308C\u3070\u3001\u305D\u306E\u30B5\u30D6\u30EA\u30B9\u30C8\u304A\u3088\u3073\u3055\u3089\u306B\u305D\u306E\u30B5\u30D6\u30EA\u30B9\u30C8\u3082\u524A\u9664\u3055\u308C\u307E\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0DELETE FROM LIST(hList;*;*)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/clear-list",children:"CLEAR LIST"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/get-list-item",children:"GET LIST ITEM"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"624"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let d={},i=t.createContext(d);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);