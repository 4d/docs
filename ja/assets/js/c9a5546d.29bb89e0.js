"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68327"],{628982:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>l,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"MSC/rollback","title":"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u30DA\u30FC\u30B8","description":"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3055\u308C\u305F\u64CD\u4F5C\u3092\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u3059\u308B\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306F\u3001\u8907\u6570\u30EC\u30D9\u30EB\u306B\u9069\u7528\u3055\u308C\u305F\u53D6\u308A\u6D88\u3057\u6A5F\u80FD\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306F\u3068\u304F\u306B\u3001\u9593\u9055\u3063\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u305F\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/MSC/rollback.md","sourceDirName":"MSC","slug":"/MSC/rollback","permalink":"/docs/ja/20-R6/MSC/rollback","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frollback.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"rollback","title":"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u30DA\u30FC\u30B8","sidebar_label":"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"\u5727\u7E2E\u30DA\u30FC\u30B8","permalink":"/docs/ja/20-R6/MSC/compact"},"next":{"title":"\u5FA9\u5143\u30DA\u30FC\u30B8","permalink":"/docs/ja/20-R6/MSC/restore"}}'),r=t("785893"),o=t("250065");let c={id:"rollback",title:"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u30DA\u30FC\u30B8",sidebar_label:"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u30DA\u30FC\u30B8"},i=void 0,l={},a=[];function d(e){let n={a:"a",blockquote:"blockquote",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3055\u308C\u305F\u64CD\u4F5C\u3092\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u3059\u308B\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306F\u3001\u8907\u6570\u30EC\u30D9\u30EB\u306B\u9069\u7528\u3055\u308C\u305F\u53D6\u308A\u6D88\u3057\u6A5F\u80FD\u306B\u4F3C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306F\u3068\u304F\u306B\u3001\u9593\u9055\u3063\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u305F\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u6A5F\u80FD\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u6709\u52B9\u306A\u3068\u304D\u306B\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(328462).Z+"",width:"882",height:"666"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u6697\u53F7\u5316\u3055\u308C\u3066\u304A\u308A\u3001\u958B\u304B\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u6709\u52B9\u306A\u30C7\u30FC\u30BF\u30AD\u30FC\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u6697\u53F7\u5316\u3055\u308C\u305F\u5024\u306F ",(0,r.jsx)(n.strong,{children:"\u5024"})," \u30AB\u30E9\u30E0\u306B\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002\u305D\u306E\u3088\u3046\u306A\u72B6\u6CC1\u3067 ",(0,r.jsx)(n.strong,{children:"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30AD\u30FC\u3092\u8981\u6C42\u3059\u308B\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u64CD\u4F5C\u30EA\u30B9\u30C8\u306E\u5185\u5BB9\u3068\u52D5\u4F5C\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R6/MSC/analysis",children:"\u30ED\u30B0\u89E3\u6790"})," \u30DA\u30FC\u30B8\u306E\u3082\u306E\u3068\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u64CD\u4F5C\u306E\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u304A\u3053\u306A\u3046\u306B\u306F\u3001\u305D\u308C\u4EE5\u964D\u306E\u5168\u64CD\u4F5C\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u884C\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u9078\u629E\u3055\u308C\u305F\u884C\u304C\u4FDD\u6301\u3055\u308C\u308B\u6700\u5F8C\u306E\u64CD\u4F5C\u306B\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u524A\u9664\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u305F\u3044\u5834\u5408\u3001\u305D\u306E\u524A\u9664\u64CD\u4F5C\u306E\u3072\u3068\u3064\u524D\u306E\u884C\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u3059\u308B\u3068\u3001\u524A\u9664\u64CD\u4F5C\u3068\u305D\u308C\u4EE5\u964D\u306E\u51E6\u7406\u304C\u3059\u3079\u3066\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(62310).Z+"",width:"1008",height:"366"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6B21\u306B\u3001",(0,r.jsx)(n.strong,{children:"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 4D\u306F\u51E6\u7406\u3092\u7D9A\u884C\u3057\u3066\u3082\u3088\u3044\u304B\u3001\u78BA\u8A8D\u3057\u3066\u304D\u307E\u3059\u3002 ",(0,r.jsx)(n.strong,{children:"OK"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30C7\u30FC\u30BF\u306F\u9078\u629E\u3055\u308C\u305F\u884C\u306E\u72B6\u614B\u306B\u623B\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u5FA9\u65E7\u3057\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u304A\u3053\u306A\u3046\u5834\u5408\u306B\u306F\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0B\u90E8\u306B\u3042\u308B\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u9069\u7528\u3059\u308B\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u30A2\u30FC\u30AB\u30A4\u30D6\u306B\u5BFE\u5FDC\u3059\u308B\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u306F\u6B21\u306E\u3088\u3046\u306B\u52D5\u4F5C\u3057\u307E\u3059: \u30E6\u30FC\u30B6\u30FC\u304C ",(0,r.jsx)(n.strong,{children:"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D\u306F\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u9589\u3058\u3001\u6700\u65B0\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C7\u30FC\u30BF\u306E\u5FA9\u5143\u3092\u304A\u3053\u306A\u3044\u307E\u3059\u3002 \u5FA9\u5143\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u958B\u304B\u308C\u30014D\u306F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u4E2D\u3067\u9078\u629E\u3055\u308C\u305F\u64CD\u4F5C\u307E\u3067\u3092\u7D71\u5408\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u307E\u3060\u4FDD\u5B58\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u30014D\u306F\u7A7A\u306E\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u3044\u307E\u3059\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},328462:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},62310:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},o=s.createContext(r);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);