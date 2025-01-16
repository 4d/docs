"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9930"],{318887:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"ServerWindow/remote-admin","title":"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406","description":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u3067 4D Server \u7BA1\u7406\u306E\u753B\u9762\u3092\u958B\u304F\u3068\u3001\u30EA\u30E2\u30FC\u30C8\u304B\u3089 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ServerWindow/remote-admin.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/remote-admin","permalink":"/docs/ja/ServerWindow/remote-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"remote-admin","title":"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406"},"sidebar":"docs","previous":{"title":"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/ServerWindow/real-time-monitor"},"next":{"title":"Web Administration","permalink":"/docs/ja/category/web-administration"}}'),i=r("785893"),o=r("250065");let s={id:"remote-admin",title:"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406"},d=void 0,c={},l=[{value:"\u30EA\u30E2\u30FC\u30C8\u306E 4D \u30DE\u30B7\u30F3\u3067\u7BA1\u7406\u753B\u9762\u3092\u958B\u304F",id:"\u30EA\u30E2\u30FC\u30C8\u306E-4d-\u30DE\u30B7\u30F3\u3067\u7BA1\u7406\u753B\u9762\u3092\u958B\u304F",level:2},{value:"\u30EA\u30E2\u30FC\u30C8 4D \u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406\u306E\u7279\u5FB4",id:"\u30EA\u30E2\u30FC\u30C8-4d-\u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406\u306E\u7279\u5FB4",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u3067 4D Server \u7BA1\u7406\u306E\u753B\u9762\u3092\u958B\u304F\u3068\u3001\u30EA\u30E2\u30FC\u30C8\u304B\u3089 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30EA\u30E2\u30FC\u30C8\u306E-4d-\u30DE\u30B7\u30F3\u3067\u7BA1\u7406\u753B\u9762\u3092\u958B\u304F",children:"\u30EA\u30E2\u30FC\u30C8\u306E 4D \u30DE\u30B7\u30F3\u3067\u7BA1\u7406\u753B\u9762\u3092\u958B\u304F"}),"\n",(0,i.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u753B\u9762\u3092\u958B\u304F\u306B\u306F\u3001\u30C7\u30B6\u30A4\u30CA\u30FC\u307E\u305F\u306F\u7BA1\u7406\u8005\u3068\u3057\u3066\u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u63A5\u7D9A\u3057\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u305D\u3046\u3067\u306A\u3044\u5834\u5408\u3001\u7BA1\u7406\u753B\u9762\u3092\u958B\u3053\u3046\u3068\u3059\u308B\u3068\u3001\u6A29\u9650\u30A8\u30E9\u30FC (-9991) \u304C\u767A\u751F\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u753B\u9762\u306B\u306F\u3001\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u65B9\u6CD5\u3067\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30D8\u30EB\u30D7"})," \u30E1\u30CB\u30E5\u30FC\u304B\u3089 ",(0,i.jsx)(n.strong,{children:"\u7BA1\u7406\u753B\u9762"})," \u30B3\u30DE\u30F3\u30C9\u3092\u9078\u629E\u3059\u308B\u304B\u30014D\u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u5BFE\u5FDC\u3059\u308B\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPEN ADMINISTRATION WINDOW"})," \u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3059\u308B\u3068\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/ServerWindow/monitor",children:"\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u753B\u9762"})," \u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30EA\u30E2\u30FC\u30C8-4d-\u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406\u306E\u7279\u5FB4",children:"\u30EA\u30E2\u30FC\u30C8 4D \u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406\u306E\u7279\u5FB4"}),"\n",(0,i.jsx)(n.p,{children:"\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u753B\u9762\u3092\u8868\u793A\u3057\u3066\u3044\u308B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306F\u3001\u5229\u7528\u53EF\u80FD\u306A\u60C5\u5831\u3059\u3079\u3066\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5/\u505C\u6B62\u3084\u30D7\u30ED\u30BB\u30B9\u306E\u64CD\u4F5C\u3092\u304A\u3053\u306A\u3048\u307E\u3059\u3002 \u3057\u304B\u3057\u306A\u304C\u3089\u3001\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u753B\u9762\u304C\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u4E00\u5B9A\u306E\u5236\u9650\u3068\u7279\u6709\u306E\u6A5F\u80FD\u306B\u7559\u610F\u304C\u5FC5\u8981\u3067\u3059:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/ServerWindow/processes",children:"\u30D7\u30ED\u30BB\u30B9\u30DA\u30FC\u30B8"})," \u3067\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u30D7\u30ED\u30BB\u30B9\u3092\u30C7\u30D0\u30C3\u30B0\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093 (\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306B\u30C7\u30D0\u30C3\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u308B\u305F\u3081)\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/ServerWindow/maintenance",children:"\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30DA\u30FC\u30B8"})," \u3067\u306F\u3001\u3059\u3079\u3066\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u5207\u65AD\u3057\u3001\u30B5\u30FC\u30D0\u30FC\u3092\u518D\u8D77\u52D5\u3059\u308B\u30A2\u30AF\u30B7\u30E7\u30F3 (\u30C7\u30FC\u30BF\u5727\u7E2E\u304A\u3088\u3073\u30B5\u30FC\u30D0\u30FC\u518D\u8D77\u52D5) \u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u64CD\u4F5C\u3092\u5B9F\u884C\u3057\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306F\u3001\u518D\u8D77\u52D5\u6642\u306B\u81EA\u52D5\u7684\u306B\u518D\u63A5\u7D9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/ServerWindow/maintenance",children:"\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30DA\u30FC\u30B8"})," \u3067\u306F\u3001\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u64CD\u4F5C\u306E\u5B9F\u884C\u5F8C\u3001",(0,i.jsx)(n.strong,{children:"\u30EC\u30DD\u30FC\u30C8\u306E\u8868\u793A"})," \u30DC\u30BF\u30F3\u304C ",(0,i.jsx)(n.strong,{children:"\u30EC\u30DD\u30FC\u30C8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"})," \u3068\u3044\u3046\u540D\u524D\u306B\u5909\u66F4\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306E\u30ED\u30FC\u30AB\u30EB\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3055\u308C\u3066\u304B\u3089\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(667294);let i={},o=t.createContext(i);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);