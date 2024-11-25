"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1682"],{629976:function(n,e,i){i.r(e),i.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>t});var s=JSON.parse('{"id":"Concepts/plug-ins","title":"\u30D7\u30E9\u30B0\u30A4\u30F3","description":"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u3092\u9032\u3081\u3066\u3044\u304F\u3068\u3001\u6700\u521D\u306F\u6C17\u4ED8\u304B\u306A\u304B\u3063\u305F\u6570\u591A\u304F\u306E\u6A5F\u80FD\u3092\u767A\u898B\u3059\u308B\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u305D\u308C\u3060\u3051\u3067\u306A\u304F\u3001\u30D7\u30E9\u30B0\u30A4\u30F3 \u30924D\u958B\u767A\u74B0\u5883\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u6A19\u6E96\u306E4D\u306E\u6A5F\u80FD\u3092\u9AD8\u3081\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/plug-ins.md","sourceDirName":"Concepts","slug":"/Concepts/plug-ins","permalink":"/docs/ja/18/Concepts/plug-ins","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"plug-ins","title":"\u30D7\u30E9\u30B0\u30A4\u30F3"},"sidebar":"docs","previous":{"title":"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8","permalink":"/docs/ja/18/Concepts/components"},"next":{"title":"\u8B58\u5225\u5B50\u306E\u547D\u540D\u898F\u5247","permalink":"/docs/ja/18/Concepts/identifiers"}}'),l=i("785893"),r=i("250065");let t={id:"plug-ins",title:"\u30D7\u30E9\u30B0\u30A4\u30F3"},c=void 0,d={},o=[{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5FC5\u8981\u6027",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5FC5\u8981\u6027",level:2},{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B",level:2},{value:"\u91CD\u8981\u306A\u6CE8\u8A18",id:"\u91CD\u8981\u306A\u6CE8\u8A18",level:3},{value:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F5C\u308A\u65B9",id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F5C\u308A\u65B9",level:2},{value:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u624B\u9806",id:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u624B\u9806",level:2}];function u(n){let e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A\u3092\u9032\u3081\u3066\u3044\u304F\u3068\u3001\u6700\u521D\u306F\u6C17\u4ED8\u304B\u306A\u304B\u3063\u305F\u6570\u591A\u304F\u306E\u6A5F\u80FD\u3092\u767A\u898B\u3059\u308B\u3053\u3068\u3067\u3057\u3087\u3046\u3002 \u305D\u308C\u3060\u3051\u3067\u306A\u304F\u3001",(0,l.jsx)(e.strong,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3"})," \u30924D\u958B\u767A\u74B0\u5883\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u6A19\u6E96\u306E4D\u306E\u6A5F\u80FD\u3092\u9AD8\u3081\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5FC5\u8981\u6027",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5FC5\u8981\u6027"}),"\n",(0,l.jsx)(e.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u30EC\u30B3\u30FC\u30C9\u306E\u64CD\u4F5C\u3001\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u5B9F\u88C5\u306E\u305F\u3081\u30014D \u306F\u6570\u767E\u306E\u30D3\u30EB\u30C8\u30A4\u30F3\u30B3\u30DE\u30F3\u30C9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u304C\u3001\u3055\u3089\u306B\u7279\u6B8A\u306A\u6A5F\u80FD (\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u4F9D\u5B58\u306E\u3082\u306E\u306A\u3069) \u304C\u5FC5\u8981\u306B\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001Windows\u4E0A\u306EODBC \u3001macOS\u4E0A\u306E\u30A2\u30C3\u30D7\u30EB\u30B5\u30FC\u30D3\u30B9\u3001\u7279\u6B8A\u306A\u7D71\u8A08\u6A5F\u80FD\u3001\u30BD\u30FC\u30B7\u30E3\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30ED\u30B0\u30A4\u30F3\u3001\u6C7A\u6E08\u7528\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u4ECB\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u30A2\u30AF\u30BB\u30B9\u3001\u7279\u6B8A\u306A\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3001\u72EC\u81EA\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u69CB\u9020\u306A\u3069\u3067\u3059\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u3053\u308C\u3089\u306E\u6A5F\u80FD\u3092\u3059\u3079\u3066\u3001macOS \u3068 Windows \u306E\u4E21\u65B9\u3067 4D \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3057\u3088\u3046\u3068\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u6570\u306F\u6570\u5343\u306B\u81A8\u308C\u4E0A\u304C\u308B\u3068\u540C\u6642\u306B\u3001\u307B\u3068\u3093\u3069\u306E\u30E6\u30FC\u30B6\u30FC\u306F\u305D\u308C\u3089\u306E\u8FFD\u52A0\u6A5F\u80FD\u3092\u5FC5\u8981\u3068\u3057\u306A\u3044\u3067\u3057\u3087\u3046\u3002 \u307E\u305F\u3001\u305D\u306E\u3088\u3046\u306A\u4E07\u80FD\u30C4\u30FC\u30EB\u3092\u4F5C\u308A\u4E0A\u3052\u305F\u3068\u3057\u3066\u3082\u3001\u305D\u306E\u7D50\u679C\u3068\u3057\u3066 4D \u74B0\u5883\u306F\u8907\u96D1\u5316\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u30014D \u306E\u5B66\u7FD2\u304C\u56F0\u96E3\u306B\u306A\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u6210\u679C\u304C\u5F97\u3089\u308C\u308B\u307E\u3067\u6642\u9593\u3092\u8981\u3059\u308B\u3088\u3046\u306B\u306A\u308B\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,l.jsx)(e.p,{children:"4D \u74B0\u5883\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u6027\u306B\u3088\u308A\u3001\u57FA\u790E\u7684\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210\u306F\u3082\u3061\u308D\u3093\u306E\u3053\u3068\u3001\u975E\u5E38\u306B\u8907\u96D1\u306A\u30B7\u30B9\u30C6\u30E0\u306E\u958B\u767A\u3082\u53EF\u80FD\u3067\u3059\u3002 4D \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u30FC\u306B\u3088\u3063\u3066\u30014D \u74B0\u5883\u306F\u3042\u3089\u3086\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u30E6\u30FC\u30B6\u30FC\u306B\u5BFE\u3057\u3066\u958B\u304B\u308C\u3066\u3044\u307E\u3059\u3002 4D \u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u3088\u3063\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3084\u30E6\u30FC\u30B6\u30FC\u306E\u751F\u7523\u6027\u3092\u98DB\u8E8D\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u4F55\u304B"}),"\n",(0,l.jsx)(e.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306F\u30014D \u8D77\u52D5\u6642\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u3053\u3068\u3067\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u30014D \u306B\u6A5F\u80FD\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u901A\u5E38\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306F:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"4D \u304C\u3067\u304D\u306A\u3044\u3053\u3068\u3092\u51E6\u7406\u3057\u307E\u3059 (\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u7279\u6709\u306E\u6280\u8853\u306A\u3069)"}),"\n",(0,l.jsx)(e.li,{children:"4D \u3060\u3051\u3067\u306F\u96E3\u3057\u3044\u3053\u3068\u3092\u5B9F\u73FE\u3057\u307E\u3059"}),"\n",(0,l.jsx)(e.li,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u30DD\u30A4\u30F3\u30C8\u306E\u5F62\u3067\u306E\u307F\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u306F\u901A\u5E38\u8907\u6570\u306E\u30EB\u30FC\u30C1\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u5916\u90E8\u30A8\u30EA\u30A2\u3092\u64CD\u4F5C\u3067\u304D\u3001\u5916\u90E8\u30D7\u30ED\u30BB\u30B9\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u30EB\u30FC\u30C1\u30F3"})," \u3068\u306F\u3001\u30CD\u30A4\u30C6\u30A3\u30D6\u8A00\u8A9E (\u901A\u5E38\u306F C \u3042\u308B\u3044\u306F C++) \u3067\u66F8\u304B\u308C\u305F\u30EB\u30FC\u30C1\u30F3\u3067\u3001\u306A\u3093\u3089\u304B\u306E\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5916\u90E8\u30A8\u30EA\u30A2"})," \u3068\u306F\u30D5\u30A9\u30FC\u30E0\u306E\u4E00\u90E8\u3067\u3001\u3042\u3089\u3086\u308B\u3082\u306E\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u30E6\u30FC\u30B6\u30FC\u64CD\u4F5C\u3092\u53D7\u3051\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5916\u90E8\u30D7\u30ED\u30BB\u30B9"})," \u3068\u306F\u3001\u901A\u5E38\u306F\u30EB\u30FC\u30D7\u5F62\u5F0F\u3067\u5358\u72EC\u5B9F\u884C\u3055\u308C\u308B\u30D7\u30ED\u30BB\u30B9\u306E\u3053\u3068\u3067\u3059\u3002 \u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30FC\u30C9\u306F\u3059\u3079\u3066\u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u5C5E\u3057\u3066\u304A\u308A\u30014D \u306F\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u30A4\u30D9\u30F3\u30C8\u3092\u9001\u53D7\u4FE1\u3059\u308B\u3060\u3051\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u91CD\u8981\u306A\u6CE8\u8A18",children:"\u91CD\u8981\u306A\u6CE8\u8A18"}),"\n",(0,l.jsxs)(e.p,{children:["\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u3001\u5C0F\u3055\u306A\u51E6\u7406\u3092\u304A\u3053\u306A\u3046\u4E00\u3064\u306E\u30EB\u30FC\u30C1\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3060\u3051\u306E\u3001\u3068\u3066\u3082\u7C21\u5358\u306A\u3082\u306E\u3067\u3042\u308A\u3048\u307E\u3059\u3002\u307E\u305F\u3001\u767E\u4EE5\u4E0A\u306E\u30EB\u30FC\u30C1\u30F3\u3068\u30A8\u30EA\u30A2\u3092\u6271\u3046\u3088\u3046\u306A\u3001\u975E\u5E38\u306B\u8907\u96D1\u306A\u3082\u306E\u3067\u3082\u3042\u308A\u3048\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u6A5F\u80FD\u306B\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u958B\u767A\u306B\u3042\u305F\u3063\u3066\u306F\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u3042\u304F\u307E\u3067\u5F93\u305F\u308B\u30B3\u30FC\u30C9\u3067\u3042\u308B\u3053\u3068\u306B\u7559\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F 4D \u5185\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u72EC\u7ACB\u3057\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u306A\u304F\u30014D \u306E\u4E00\u90E8\u3067\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u3001\u4ED6\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3084 4D \u81EA\u8EAB\u3068 CPU \u6642\u9593\u3068\u30E1\u30E2\u30EA\u3092\u5171\u6709\u3057\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30B3\u30FC\u30C9\u306F\u3001\u5FC5\u8981\u306A\u30EA\u30BD\u30FC\u30B9\u3060\u3051\u3092\u4F7F\u7528\u3059\u308B\u63A7\u3048\u3081\u306A\u30B3\u30FC\u30C9\u3067\u3042\u308B\u3079\u304D\u3067\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u975E\u5E38\u306B\u9577\u3044\u30EB\u30FC\u30D7\u51E6\u7406\u306B\u304A\u3044\u3066\u306F (\u305D\u306E\u91CD\u8981\u6027\u304C\u7D76\u5BFE\u7684\u306A\u512A\u5148\u6A29\u3092\u8981\u6C42\u3057\u306A\u3044\u304B\u304E\u308A)\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306F ",(0,l.jsx)(e.code,{children:"PA_Yield()"})," \u3092\u547C\u3073\u51FA\u3057\u3066\u30014D \u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u30FC\u306B\u3082\u51E6\u7406\u6642\u9593\u3092\u5272\u308A\u5F53\u3066\u308B\u3079\u304D\u3067\u3059\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F5C\u308A\u65B9",children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u4F5C\u308A\u65B9"}),"\n",(0,l.jsxs)(e.p,{children:["4D \u306F GitHub \u4E0A\u306B\u30014D Plugin API \u3068 the 4D Plugin Wizard \u3092\u542B\u3093\u3060\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E ",(0,l.jsx)(e.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:(0,l.jsx)(e.strong,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3 SDK"})})," (\u82F1\u8A9E) \u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,l.jsx)(e.strong,{children:"4D Plugin API"})})," \u306F C \u3067\u66F8\u304B\u308C\u3066\u304A\u308A\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u958B\u767A\u3092\u52A9\u3051\u308B\u305F\u3081\u306E\u6A5F\u80FD\u3092400\u4EE5\u4E0A\u8FFD\u52A0\u3057\u307E\u3059\u3002 4D Plug-in API \u306E\u6A5F\u80FD\u306F\u30014D \u3068\u30D7\u30E9\u30B0\u30A4\u30F3\u9593\u306E\u901A\u4FE1\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,l.jsx)(e.strong,{children:"4D Plugin Wizard"})})," \u306F\u30014D \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u958B\u767A\u3092\u7C21\u7565\u5316\u3059\u308B\u305F\u3081\u306B\u4E0D\u53EF\u6B20\u306A\u30C4\u30FC\u30EB\u3067\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30ED\u30FC\u30C9\u3084\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u306E\u901A\u4FE1\u306B 4D \u304C\u5FC5\u8981\u3068\u3059\u308B\u30B3\u30FC\u30C9\u304C\u30C4\u30FC\u30EB\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u3053\u3068\u3067\u3001\u30C7\u30D9\u30ED\u30C3\u30D1\u30FC\u306F\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u6839\u5E79\u3092\u306A\u3059\u30B3\u30FC\u30C9\u306B\u96C6\u4E2D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u624B\u9806",children:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306E\u624B\u9806"}),"\n",(0,l.jsx)(e.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u3084\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F 4D\u74B0\u5883\u306E\u9069\u5207\u306A\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u30B3\u30D4\u30FC\u3059\u308B\u3053\u3068\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["Windows \u304A\u3088\u3073 macOS\u7528\u306E 4D\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u3001\u201CPluginName.bundle\u201D \u30D5\u30A9\u30EB\u30C0\u30FC (macOS\u3067\u306F\u30D1\u30C3\u30B1\u30FC\u30B8\u3068\u547C\u3070\u308C\u307E\u3059) \u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u5185\u90E8\u69CB\u9020\u306B\u3088\u308A\u30014D Server\u74B0\u5883\u306B\u304A\u3044\u3066\u3001\u63A5\u7D9A\u3059\u308B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306EOS\u306B\u5FDC\u3058\u305F\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u30ED\u30FC\u30C9/\u914D\u4FE1\u3055\u308C\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u306B\u306F\u3001\u3053\u306E \u201CPluginName.bundle\u201D \u30D5\u30A9\u30EB\u30C0\u30FC (\u30D1\u30C3\u30B1\u30FC\u30B8) \u3092",(0,l.jsx)(e.strong,{children:"Plugins"})," \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"Plugins \u30D5\u30A9\u30EB\u30C0\u30FC\u306F 2\u3064\u306E\u7570\u306A\u308B\u5834\u6240\u306B\u914D\u7F6E\u3067\u304D\u307E\u3059:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["4D\u5B9F\u884C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30EC\u30D9\u30EB:\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Windows: .exe\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64"}),"\n",(0,l.jsxs)(e.li,{children:["macOS: \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D1\u30C3\u30B1\u30FC\u30B8\u5185\u306E Contents\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u76F4\u4E0B\u3002",(0,l.jsx)(e.br,{}),"\n\u3053\u306E\u5834\u5408\u3001\u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u958B\u304B\u308C\u308B\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64: \u3053\u306E\u5834\u5408\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u5F53\u8A72\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5834\u6240\u306E\u9078\u629E\u306F\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u3069\u306E\u3088\u3046\u306B\u4F7F\u7528\u3059\u308B\u304B\u306B\u3088\u3063\u3066\u6C7A\u5B9A\u3057\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u540C\u3058\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u4E21\u65B9\u306E\u5834\u6240\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u30014D\u306F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u3082\u306E\u306E\u307F\u3092\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002 \u30B3\u30F3\u30D1\u30A4\u30EB\u3055\u308C\u30014D Volume Desktop \u304C\u30DE\u30FC\u30B8\u3055\u308C\u305F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u540C\u3058\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u8907\u6570\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u306F 4D \u8D77\u52D5\u6642\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308B\u306E\u3067\u3001\u3053\u308C\u3089\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u969B\u306B\u306F 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7D42\u4E86\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u7D42\u4E86\u3057\u305F\u3089 4D \u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304D\u307E\u3059\u3002 \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5229\u7528\u306B\u7279\u5225\u306A\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981\u306A\u5834\u5408\u3001\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u304C\u3001\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u307E\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return t}});var s=i(667294);let l={},r=s.createContext(l);function t(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);