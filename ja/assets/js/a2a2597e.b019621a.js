"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55607"],{371620:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"Concepts/plug-ins","title":"\u30D7\u30E9\u30B0\u30A4\u30F3","description":"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u3092\u9032\u3081\u3066\u3044\u304F\u3068\u3001\u6700\u521D\u306F\u6C17\u4ED8\u304B\u306A\u304B\u3063\u305F\u6570\u591A\u304F\u306E\u6A5F\u80FD\u3092\u767A\u898B\u3059\u308B\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u305D\u308C\u3060\u3051\u3067\u306A\u304F\u3001\u30D7\u30E9\u30B0\u30A4\u30F3 \u30924D\u958B\u767A\u74B0\u5883\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u6A19\u6E96\u306E4D\u306E\u6A5F\u80FD\u3092\u9AD8\u3081\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Concepts/plug-ins.md","sourceDirName":"Concepts","slug":"/Concepts/plug-ins","permalink":"/docs/ja/20-R6/Concepts/plug-ins","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"plug-ins","title":"\u30D7\u30E9\u30B0\u30A4\u30F3"},"sidebar":"docs","previous":{"title":"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8","permalink":"/docs/ja/20-R6/Concepts/components"},"next":{"title":"\u8B58\u5225\u5B50\u306E\u547D\u540D\u898F\u5247","permalink":"/docs/ja/20-R6/Concepts/identifiers"}}'),i=t("785893"),r=t("250065");let o={id:"plug-ins",title:"\u30D7\u30E9\u30B0\u30A4\u30F3"},c=void 0,l={},d=[{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B",level:2},{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u898B\u3064\u3051\u65B9",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u898B\u3064\u3051\u65B9",level:2},{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2},{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F7F\u3044\u65B9",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F7F\u3044\u65B9",level:2}];function u(e){let n={a:"a",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u3092\u9032\u3081\u3066\u3044\u304F\u3068\u3001\u6700\u521D\u306F\u6C17\u4ED8\u304B\u306A\u304B\u3063\u305F\u6570\u591A\u304F\u306E\u6A5F\u80FD\u3092\u767A\u898B\u3059\u308B\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u305D\u308C\u3060\u3051\u3067\u306A\u304F\u3001",(0,i.jsx)(n.strong,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3"})," \u30924D\u958B\u767A\u74B0\u5883\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u6A19\u6E96\u306E4D\u306E\u6A5F\u80FD\u3092\u9AD8\u3081\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B"}),"\n",(0,i.jsx)(n.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u3001C \u3084 C++ \u306A\u3069\u306E\u8A00\u8A9E\u3067\u66F8\u304B\u308C\u305F\u30014D \u8D77\u52D5\u6642\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u3053\u3068\u3067\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u30014D \u306B\u6A5F\u80FD\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u306F\u901A\u5E38\u8907\u6570\u306E\u30EB\u30FC\u30C1\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u5916\u90E8\u30A8\u30EA\u30A2\u3092\u64CD\u4F5C\u3067\u304D\u3001\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u898B\u3064\u3051\u65B9",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u898B\u3064\u3051\u65B9"}),"\n",(0,i.jsxs)(n.p,{children:["4D\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u3088\u3063\u3066\u591A\u6570\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u4F5C\u6210\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u516C\u958B\u3055\u308C\u305F\u30D7\u30E9\u30B0\u30A4\u30F3\u306F ",(0,i.jsx)(n.a,{href:"https://github.com/search?q=4d-plugin&type=Repositories",children:"GitHub"})," \u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Extensions/develop-plug-ins",children:"\u72EC\u81EA\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u958B\u767A"})," \u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,i.jsxs)(n.p,{children:["4D\u74B0\u5883\u306B\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u306B\u306F\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u30D5\u30A1\u30A4\u30EB\u3092 ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R6/Project/architecture#plugins",children:"Project\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u540C\u3058\u968E\u5C64"})," \u306E ",(0,i.jsx)(n.strong,{children:"Plugins"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306F 4D \u8D77\u52D5\u6642\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308B\u306E\u3067\u3001\u3053\u308C\u3089\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u969B\u306B\u306F 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5229\u7528\u306B\u7279\u5225\u306A\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981\u306A\u5834\u5408\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u304C\u3001\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u307E\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F7F\u3044\u65B9",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F7F\u3044\u65B9"}),"\n",(0,i.jsxs)(n.p,{children:["\u30D7\u30E9\u30B0\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9\u306F\u30014D\u958B\u767A\u306B\u304A\u3044\u3066\u901A\u5E38\u306E 4D\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u69D8\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u306E ",(0,i.jsx)(n.strong,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3"})," \u30DA\u30FC\u30B8\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);