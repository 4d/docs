"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90016"],{119195:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"ORDA/overview","title":"ORDA\u3068\u306F\u4F55\u304B","description":"ORDA \u3068\u306F \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30FB\u30EA\u30EC\u30FC\u30B7\u30E7\u30CA\u30EB\u30FB\u30C7\u30FC\u30BF\u30A2\u30AF\u30BB\u30B9 (Object Relational Data Access) \u306E\u610F\u5473\u3067\u3059\u3002 \u3053\u308C\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4ECB\u3057\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E2\u30C7\u30EB\u3068\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u9769\u65B0\u7684\u306A\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/ORDA/overview.md","sourceDirName":"ORDA","slug":"/ORDA/overview","permalink":"/docs/ja/19/ORDA/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"overview","title":"ORDA\u3068\u306F\u4F55\u304B"},"sidebar":"docs","previous":{"title":"\u30D1\u30B9\u540D","permalink":"/docs/ja/19/Concepts/paths"},"next":{"title":"\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8","permalink":"/docs/ja/19/ORDA/dsmapping"}}'),t=s("785893"),i=s("250065");let o={id:"overview",title:"ORDA\u3068\u306F\u4F55\u304B"},c=void 0,d={},a=[{value:"ORDA\u3092\u4F7F\u3046\u7406\u7531",id:"orda\u3092\u4F7F\u3046\u7406\u7531",level:2},{value:"ORDA\u306E\u4F7F\u3044\u65B9",id:"orda\u306E\u4F7F\u3044\u65B9",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["ORDA \u3068\u306F ",(0,t.jsx)(n.strong,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30FB\u30EA\u30EC\u30FC\u30B7\u30E7\u30CA\u30EB\u30FB\u30C7\u30FC\u30BF\u30A2\u30AF\u30BB\u30B9 (Object Relational Data Access)"})," \u306E\u610F\u5473\u3067\u3059\u3002 \u3053\u308C\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4ECB\u3057\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30E2\u30C7\u30EB\u3068\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u9769\u65B0\u7684\u306A\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u6982\u5FF5\u306B\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/glossary#%E3%83%AC%E3%82%A4%E3%82%B8%E3%83%BC%E3%83%AD%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0",children:"\u30EC\u30A4\u30B8\u30FC\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0"})," \u3068\u5408\u308F\u305B\u3066\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u6697\u793A\u7684\u306B\u7E54\u308A\u8FBC\u307E\u308C\u3066\u304A\u308A\u3001\u30C7\u30D9\u30ED\u30C3\u30D1\u30FC\u306F\u3042\u308A\u304C\u3061\u306A\u30C7\u30FC\u30BF\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u8EE2\u9001\u306E\u7169\u308F\u3057\u3055\u304B\u3089\u89E3\u653E\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["ORDA \u3067\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/dsmapping#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B9%E3%83%88%E3%82%A2",children:"\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2"})," \u3068\u547C\u3070\u308C\u308B\u62BD\u8C61\u5316\u30EC\u30A4\u30E4\u30FC\u3092\u901A\u3057\u3066\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u3068\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E2\u30C7\u30EB\u3068\u30C7\u30FC\u30BF\u3078\u306E\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u30AF\u30E9\u30B9\u3092\u4ECB\u3057\u305F\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u63D0\u4F9B\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30C6\u30FC\u30D6\u30EB\u306F ",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/dsmapping#%E3%83%87%E3%83%BC%E3%82%BF%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30DE\u30C3\u30D7\u3055\u308C\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E ",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/dsmapping#%E5%B1%9E%E6%80%A7",children:"\u5C5E\u6027"}),"\u3067\u3001\u30EC\u30B3\u30FC\u30C9\u306F ",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/dsmapping#entity",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3"})," \u304A\u3088\u3073 ",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/dsmapping#%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})," \u3092\u4ECB\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"orda\u3092\u4F7F\u3046\u7406\u7531",children:"ORDA\u3092\u4F7F\u3046\u7406\u7531"}),"\n",(0,t.jsx)(n.p,{children:"\u30C6\u30FC\u30D6\u30EB\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u30EC\u30B3\u30FC\u30C9\u3068\u3057\u3066\u60C5\u5831\u3092\u8868\u793A\u3059\u308B\u4EE3\u308F\u308A\u306B\u3001ORDA \u3067\u306F\u3001\u3088\u308A\u6B63\u78BA\u306B\u73FE\u5B9F\u4E16\u754C\u306E\u6982\u5FF5\u306B\u30C7\u30FC\u30BF\u3092\u30DE\u30C3\u30D7\u3059\u308B\u3001\u5225\u306E\u30A2\u30D7\u30ED\u30FC\u30C1\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u52B9\u7387\u306B\u5F71\u97FF\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u30EA\u30EC\u30FC\u30B7\u30E7\u30CA\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u975E\u6B63\u898F\u5316\u3059\u308B\u80FD\u529B\u3092\u60F3\u50CF\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002 \u30EA\u30EC\u30FC\u30B7\u30E7\u30CA\u30EB\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u5B8C\u5168\u306B\u7406\u89E3\u3059\u308B\u5FC5\u8981\u304C\u306A\u304F\u3001\u5358\u7D14\u304B\u3064\u5206\u304B\u308A\u3084\u3059\u304F\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3067\u304D\u308B\u3088\u3046\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u306E\u3059\u3079\u3066\u306E\u30D3\u30B8\u30CD\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u3092\u60F3\u50CF\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.p,{children:"ORDA \u306E\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u3067\u306F\u3001\u5358\u4E00\u306E\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3060\u3051\u3067\u65E7\u6765\u306E\u30EA\u30EC\u30FC\u30B7\u30E7\u30CA\u30EB\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u3092\u69CB\u6210\u3057\u3066\u3044\u305F\u8981\u7D20\u306E\u3059\u3079\u3066\u3092\u53D6\u308A\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u308B\u3046\u3048\u306B\u3001\u30EA\u30EC\u30FC\u30C8\u3055\u308C\u305F\u89AA\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u5024\u3084\u3001\u30EA\u30EC\u30FC\u30C8\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3078\u306E\u76F4\u63A5\u53C2\u7167\u3082\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:'\u30AF\u30A8\u30EA\u306F\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u547C\u3070\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30EA\u30B9\u30C8\u3092\u8FD4\u3057\u3001\u3053\u308C\u306F SQL \u306E\u30AF\u30A8\u30EA\u306E\u884C\u30BB\u30C3\u30C8\u306E\u5F79\u5272\u3092\u679C\u305F\u3057\u307E\u3059\u3002 \u9055\u3044\u306F\u3001\u5404\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306F\u81EA\u8EAB\u304C\u3069\u3053\u306B\u6240\u5C5E\u3059\u308B\u304B\u3092 "\u77E5\u3063\u3066\u3044\u308B" \u3046\u3048\u3001\u4ED6\u306E\u3059\u3079\u3066\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3068\u306E\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092 "\u7406\u89E3\u3057\u3066\u3044\u308B" \u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002 \u3053\u308C\u306F\u3064\u307E\u308A\u3001\u30AF\u30A8\u30EA\u5185\u306B\u304A\u3044\u3066\u69D8\u3005\u306A\u60C5\u5831\u306E\u65AD\u7247\u3092\u3069\u306E\u3088\u3046\u306B\u30EA\u30EC\u30FC\u30C8\u3055\u305B\u305F\u3089\u3044\u3044\u304B\u3001\u3042\u308B\u3044\u306F\u3001\u5909\u66F4\u3055\u308C\u305F\u5024\u3092\u30EA\u30EC\u30FC\u30B7\u30E7\u30CA\u30EB\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u66F8\u304D\u8FBC\u3080\u969B\u306B\u3069\u306E\u3088\u3046\u306B\u305D\u308C\u3092\u66F4\u65B0\u3057\u305F\u3089\u3044\u3044\u304B\u3092\u3001\u30C7\u30D9\u30ED\u30C3\u30D1\u30FC\u306F\u8AAC\u660E\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002'}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u308C\u306B\u52A0\u3048\u3066\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3042\u308B\u3044\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306A\u3069\u306E ORDA \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3084\u5909\u6570\u306A\u3069\u306E\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9 (UI) \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u7C21\u5358\u306B\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 ",(0,t.jsx)(n.code,{children:"This"})," \u3084 ",(0,t.jsx)(n.code,{children:"Form"})," \u30B3\u30DE\u30F3\u30C9\u3068\u3044\u3063\u305F\u5F37\u529B\u306A\u6A5F\u80FD\u3068\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u3044\u305F\u3001\u30E2\u30C0\u30F3\u3067\u30E2\u30B8\u30E5\u30E9\u30FC\u306A\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u30D3\u30EB\u30C9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"orda\u306E\u4F7F\u3044\u65B9",children:"ORDA\u306E\u4F7F\u3044\u65B9"}),"\n",(0,t.jsxs)(n.p,{children:["\u539F\u5247\u3068\u3057\u3066\u3001ORDA \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u3092\u6271\u3044\u307E\u3059\u3002 ORDA \u3067\u306F\u3001\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u81EA\u8EAB\u3092\u542B\u3081\u3059\u3079\u3066\u306E\u4E3B\u8981\u306A\u6982\u5FF5\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u901A\u3057\u3066\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002 \u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306F\u81EA\u52D5\u7684\u306B ",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/dsmapping",children:"4D \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u30DE\u30C3\u30D4\u30F3\u30B0\u3055\u308C\u307E\u3059"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"ORDA \u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F 4D \u306E\u6A19\u6E96\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u540C\u69D8\u306B\u6271\u3048\u307E\u3059\u304C\u3001\u3069\u308C\u3060\u3051\u3067\u306A\u304F\u7279\u5B9A\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304A\u3088\u3073\u30E1\u30BD\u30C3\u30C9\u306E\u6069\u6075\u3092\u81EA\u52D5\u7684\u306B\u4EAB\u53D7\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["ORDA \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F 4D \u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u5FC5\u8981\u306A\u3068\u304D\u306B\u4F5C\u6210\u30FB\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3055\u308C\u307E\u3059 (\u5225\u9014\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093)\u3002 \u307E\u305F\u3001ORDA \u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/19/ORDA/ordaClasses",children:"\u30AB\u30B9\u30BF\u30E0\u95A2\u6570\u304C\u8FFD\u52A0\u53EF\u80FD\u306A\u30AF\u30E9\u30B9"})," \u3068\u3082\u95A2\u9023\u3065\u3051\u3089\u308C\u307E\u3059\u3002"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);