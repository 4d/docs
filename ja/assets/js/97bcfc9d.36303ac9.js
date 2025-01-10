"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6968"],{465743:function(n,e,r){r.r(e),r.d(e,{default:()=>j,frontMatter:()=>o,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"ServerWindow/real-time-monitor","title":"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u30DA\u30FC\u30B8","description":"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u305F\u3001\\"\u9577\u3044\\" \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u72B6\u614B\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30E2\u30CB\u30BF\u30FC\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3068\u306F\u3001\u305F\u3068\u3048\u3070\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u30AF\u30A8\u30EA\u3084\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u306A\u3069\u3067\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/ServerWindow/real-time-monitor.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/real-time-monitor","permalink":"/docs/ja/20/ServerWindow/real-time-monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Freal-time-monitor.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"real-time-monitor","title":"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"HTTP\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/20/ServerWindow/http-server"},"next":{"title":"\u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u306E\u7BA1\u7406","permalink":"/docs/ja/20/ServerWindow/remote-admin"}}'),s=r("785893"),t=r("250065");let o={id:"real-time-monitor",title:"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u30DA\u30FC\u30B8"},l=void 0,d={},c=[{value:"\u30A2\u30C9\u30D0\u30F3\u30B9\u30C9\u30E2\u30FC\u30C9",id:"\u30A2\u30C9\u30D0\u30F3\u30B9\u30C9\u30E2\u30FC\u30C9",level:2},{value:"\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u30DC\u30BF\u30F3",id:"\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u30DC\u30BF\u30F3",level:2},{value:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u4F4E5\u79D2\u9593\u8868\u793A\u3059\u308B",id:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u4F4E5\u79D2\u9593\u8868\u793A\u3059\u308B",level:2}];function h(n){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:'\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u5B9F\u884C\u3055\u308C\u305F\u3001"\u9577\u3044" \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u72B6\u614B\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30E2\u30CB\u30BF\u30FC\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3068\u306F\u3001\u305F\u3068\u3048\u3070\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u30AF\u30A8\u30EA\u3084\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u306E\u5B9F\u884C\u306A\u3069\u3067\u3059:'}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(428952).Z+"",width:"700",height:"472"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306E\u7BA1\u7406\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u3042\u308A\u307E\u3059\u304C\u3001\u30EA\u30E2\u30FC\u30C8\u306E 4D\u30DE\u30B7\u30F3\u304B\u3089\u3082\u898B\u3089\u308C\u307E\u3059\u3002 \u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u306E\u5834\u5408\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u64CD\u4F5C\u306E\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30FC\u30BF\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u9577\u3044\u51E6\u7406\u306F\u3001\u305D\u308C\u305E\u308C\u306B\u884C\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002 \u64CD\u4F5C\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u3053\u306E\u884C\u306F\u6D88\u3048\u307E\u3059 (",(0,s.jsx)(e.strong,{children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u4F4E5\u79D2\u9593\u8868\u793A\u3059\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u3001\u77ED\u3044\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u3082 5\u79D2\u9593\u8868\u793A\u3057\u305F\u307E\u307E\u306B\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u884C\u306B\u3064\u3044\u3066\u3001\u4EE5\u4E0B\u306E\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u958B\u59CB\u6642\u523B"}),': \u64CD\u4F5C\u306E\u958B\u59CB\u6642\u523B\u304C\u3001"dd/mm/yyyy - hh:mm:ss" \u3068\u3044\u3046\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7D4C\u904E\u6642\u9593"})," (\u79D2): \u9032\u884C\u4E2D\u306E\u64CD\u4F5C\u306E\u7D4C\u904E\u6642\u9593\u304C\u79D2\u5358\u4F4D\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u60C5\u5831"}),": \u64CD\u4F5C\u306E\u8AAC\u660E\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u8A73\u7D30"}),": \u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u3001\u9078\u629E\u3057\u305F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30D7\u306B\u5FDC\u3058\u3066\u3001\u305D\u306E\u8A73\u7D30\u306A\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u5177\u4F53\u7684\u306B\u306F\u4EE5\u4E0B\u306E\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059:\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4F5C\u6210\u3055\u308C\u305F\u5834\u6240"}),': \u305D\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u7D50\u679C\u304B (\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u4E0A\u3067\u4F5C\u6210)\u3001\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u2015\u307E\u305F\u306F "\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C" \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u305F\u7D50\u679C\u304B (\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u4F5C\u6210) \u3092\u8868\u793A\u3057\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u8A73\u7D30"}),": \u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u30BF\u30A4\u30D7\u3068\u3001(\u30AF\u30A8\u30EA\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066\u306F) \u30AF\u30A8\u30EA\u30D7\u30E9\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3"})," (\u3042\u308C\u3070): \u9078\u629E\u3057\u305F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u5F93\u5C5E\u3059\u308B\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3057\u307E\u3059 (\u4F8B:\u89AA\u30EC\u30B3\u30FC\u30C9\u306E\u524D\u306B\u30EA\u30EC\u30FC\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3059\u308B)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30D7\u30ED\u30BB\u30B9\u8A73\u7D30"}),": \u30C6\u30FC\u30D6\u30EB\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u30D7\u30ED\u30BB\u30B9\u3084\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u95A2\u3059\u308B\u8FFD\u52A0\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u30DA\u30FC\u30B8\u306F\u3001",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page1277.html",children:(0,s.jsx)(e.code,{children:"GET ACTIVITY SNAPSHOT"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u5185\u90E8\u7684\u306B\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u8868\u793A\u5F8C\u3059\u3050\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u306A\u308A\u3001\u6052\u4E45\u7684\u306B\u66F4\u65B0\u3055\u308C\u7D9A\u3051\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u3053\u306E\u51E6\u7406\u306B\u3088\u3063\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u3092\u6975\u7AEF\u306B\u9045\u304F\u3055\u305B\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4EE5\u4E0B\u306E\u65B9\u6CD5\u3092\u7528\u3044\u3066\u66F4\u65B0\u3092\u4E00\u6642\u7684\u306B\u505C\u6B62\u3055\u305B\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u505C\u6B62"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B"]}),"\n",(0,s.jsx)(e.li,{children:"\u30EA\u30B9\u30C8\u306E\u4E2D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B"}),"\n",(0,s.jsx)(e.li,{children:"\u30B9\u30DA\u30FC\u30B9\u30D0\u30FC\u3092\u62BC\u3059"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30DA\u30FC\u30B8\u3092\u505C\u6B62\u3055\u305B\u308B\u3068\u4E00\u6642\u505C\u6B62\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u3001\u30DC\u30BF\u30F3\u306E\u8868\u793A\u304C ",(0,s.jsx)(e.strong,{children:"\u518D\u958B"})," \u306B\u5909\u308F\u308A\u307E\u3059\u3002 \u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u505C\u6B62\u64CD\u4F5C\u3068\u540C\u3058\u64CD\u4F5C\u3092\u3059\u308B\u3053\u3068\u3067\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u3092\u518D\u958B\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30A2\u30C9\u30D0\u30F3\u30B9\u30C9\u30E2\u30FC\u30C9",children:"\u30A2\u30C9\u30D0\u30F3\u30B9\u30C9\u30E2\u30FC\u30C9"}),"\n",(0,s.jsx)(e.p,{children:"\u5FC5\u8981\u3067\u3042\u308C\u3070\u3001RTM\u30DA\u30FC\u30B8\u306F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3054\u3068\u306B\u8FFD\u52A0\u306E\u60C5\u5831\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u30A2\u30C9\u30D0\u30F3\u30B9\u30C9\u30E2\u30FC\u30C9\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(e.strong,{children:"Shift"}),'\u30AD\u30FC\u3092\u62BC\u3057\u306A\u304C\u3089\u3001\u60C5\u5831\u3092\u53D6\u5F97\u3057\u305F\u3044\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u3059\u3079\u3066\u306E\u95B2\u89A7\u53EF\u80FD\u306A\u60C5\u5831\u304C\u3001\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u306A\u3057\u3067 "\u30D7\u30ED\u30BB\u30B9\u8A73\u7D30" \u30A8\u30EA\u30A2\u306B\u8868\u793A\u3055\u308C\u307E\u3059(',(0,s.jsx)(e.code,{children:"GET ACTIVITY SNAPSHOT"})," \u30B3\u30DE\u30F3\u30C9\u3067\u8FD4\u3055\u308C\u308B\u3082\u306E\u3068\u540C\u3058\u3067\u3059)\u3002 \u8868\u793A\u3055\u308C\u308B\u60C5\u5831\u306F\u3001\u9078\u629E\u3057\u305F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6A19\u6E96\u30E2\u30FC\u30C9\u3067\u8868\u793A\u3055\u308C\u308B\u60C5\u5831\u306E\u4F8B\u3067\u3059:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(517347).Z+"",width:"998",height:"293"})}),"\n",(0,s.jsxs)(e.p,{children:["\u30A2\u30C9\u30D0\u30F3\u30B9\u30C9\u30E2\u30FC\u30C9 (\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092 ",(0,s.jsx)(e.strong,{children:"Shift+\u30AF\u30EA\u30C3\u30AF"}),") \u3067\u306F\u3001\u3055\u3089\u306A\u308B\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(643742).Z+"",width:"999",height:"288"})}),"\n",(0,s.jsx)(e.h2,{id:"\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u30DC\u30BF\u30F3",children:"\u30B9\u30CA\u30C3\u30D7\u30B7\u30E7\u30C3\u30C8\u30DC\u30BF\u30F3"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u30B3\u30D4\u30FC"})," \u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001RTM\u30D1\u30CD\u30EB\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5168\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3068\u3001\u305D\u308C\u306B\u95A2\u9023\u3059\u308B\u8A73\u7D30 (\u30D7\u30ED\u30BB\u30B9\u3068\u30B5\u30D6\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u60C5\u5831) \u304C\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3078\u3068\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(844823).Z+"",width:"140",height:"40"})}),"\n",(0,s.jsx)(e.h2,{id:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u4F4E5\u79D2\u9593\u8868\u793A\u3059\u308B",children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u4F4E5\u79D2\u9593\u8868\u793A\u3059\u308B"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6700\u4F4E5\u79D2\u9593\u8868\u793A\u3059\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u3068\u3001\u8868\u793A\u3055\u308C\u305F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u3069\u308C\u3082 (\u5B9F\u884C\u304C\u7D42\u4E86\u3057\u305F\u5F8C\u3082) \u6700\u4F4E5\u79D2\u9593\u306F\u8868\u793A\u3055\u308C\u305F\u307E\u307E\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9069\u7528\u3055\u308C\u305F\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u3001\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u30EA\u30B9\u30C8\u4E2D\u306B\u7070\u8272\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u306F\u3001\u3068\u3066\u3082\u65E9\u304F\u7D42\u308F\u3063\u3066\u3057\u307E\u3046\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u306B\u6709\u52B9\u3067\u3059\u3002"]})]})}function j(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},517347:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},643742:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},428952:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},844823:function(n,e,r){r.d(e,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAoCAIAAACjL4WRAAAHnElEQVR42u1b21MTVxjfJBsIVw06bIgU1ILYjsAYrKO0tR3aUCf4YMeXPhg7Yp8tcUZL+wcUlE6JnfGl01ItPnQ6nU5vMGrqaDs6TB2JmNRLaVXkErOA3MIlCZucnr1kkya7m80mYcHyy05ycvb7zne+77fnnG9PNoozZ84gMVDAVxyAeALLGXG8S7lvCkGDcc2hnCIgBf2Ul0VhGpLtW5S+It4lDZIziLIWCSIwPz8/Ozvr9/uT6/MKQtwJI5XuRXHJ12yGWp2bl5ednY2iKF2D0qKQmOnp6bm5OTkiJSOW9PISOZ4gFxNPny76/fn5+Wq1GtYoyX4CZNYzu7CwIEeYVsENOGA8Hg+goITLDxEgFonFQCAgd8dWEQakg4ArEEUKCokKBoOAGoogPCCTy+5ETfUpU+PqnVD3kjXDpZ9kasDjBIAkKVUqlGwexMY8OZsStZdohUhxbpfOfgKKKpQqAb6cOzrXXKLuLSUiXUy3f7FBFr6BopkhSQLsEVdf/DUkL50g6jNRvfhOKRJSlGyRHksonT9Im/EyVf5Xim+Znr/Oebb7wctXB3cEgEqqA8sOgLOYToNMdsdFj1gIMAQBT71ecnNJnHk2wU5xSnZ94jriQIAhkQLPDoCUA4g56BSc/c5lmRdvbrwhpvNvlP7x68BOuUO4QkHRQiYOIPL2iBcb17jKtMN8I8NLZD6c0o8vrIUr6rqsqU1rXNlqL30KqkRqwYXqn8nigWm9kDHD4U8PVlIl5/ljX9lT6TZs2oh/crLbld7opgx0didSmI8hIqi68njHteFqjz+HrczNWKjd4KgrvZGhIiIl/QE1bATyJESS3vTBQeT8sWN2qmwyIEhKWRKNZUQnk90xOR4/OBlaIDLPOvb1TzxHfQure3yaiw939k8UH6n+OUfNbAn+0L+nZ6Tyo9qzsCnbo5d4LWEYhruf0L0Z6eoaSa2/zMaKiLlDvGS6wG4DoWIY4sN39+tohnLU3l0bnJvXuhQIGJjR9wxv8/izH03pv7lrPFL9Ey2szx2vWDeoQRfjNGrvc5rNh0x9reFr2NDYXu+2jRqN5ByI29roU7DWzEyKnZYOOyPW6agyG7GwmN7UfJz8zkpB6Jg6tqkIKVqMabvyeLsxrCYPT0D8dBeLu+Ob7O4KWFiXNf1e9Y+63Am6/oX1AzuL7nzet390Tvvn2OZb+JbtWD+sry12wkNEw/YOixvGrN0YEVYEM+ouWSwdFDN7Dd1kNZSzhyg06e1UtDFjPdJmsbjIoFNE6/YaRzstrZFRDsmEmzI0Hg9JkYrNJndrhwUhKW9rXQ7TnVLyMLr5ZCtdeHvLVZYhGpC2AxVX6HJvSCwRuLpbLZY2W6G5vdFA1+C2C1Sg4ThDCnX0igajTIIZTozY11RUXd2XnJhOhyBuN15pbjZFLoEhGbYpva4QcfbZGcuM4jIAO8kpI1JyIUTpB4LKEc96WF+gmSovGIo1UKYd0uWMQQH3rHYxoOIzL4SRrnM2vLLawGxYhTrClItMzWbQ2QRxyobTZyPFimDgSZ9Gulqams4hhyCZhw2Auynqg+0T9exAlKTMYEdSYoMpAMhUDaFWo8gUjoVSAXIzyCycAGgQSWRnqKahgbnu9durMBx/wi1WhDHnSCm2Fqvarg+pOm73MrWurhbIJKbjSSldbhypqq6hbTbUV4UVZQe7JknZF1KriCzUN4nkTfly5xczs9W+KAF/AJ1cyEWo/T1UQSTQdK8bs1qtdNnR2dQFZ6YiLrELtvoTJ6xGBHc4cLYWx7F3rVaMViVDXdNoNVeF2uJpCuntOKX78ITVaiZbsJ1qoTjqve0wm6EBqNchM2mKlpYWgiBmZmZ8Pp+A3On6z6Jqvr1Xd31oGyy88+Ll3cV3os7CFavTWU9GqeivQ5UXo86+f+loGnypOXL6LffJj7uWwVKfEmg0mry8PBRFlZJT8F0b7qiUQYS8AXrVObo58tT9p6Xf399Dl2tj+FuFeMSk4AnSVJKP15XYbY92eImML/satq4fLNPCO0/wcEp/b7w0CJRQ5rWSvjLtsNyeygRpd8FcP8Sh7BiS8EBkw5YeXxD97XE11Lw7VgKPyD7COXB/xTXu/qflPv7mF0dX/i8jkb9ZhZDUjoMCAQe2/l5RMHh5wDA0g8FkAVaqlURx/tgbm25VFT6Q2+OVjTBJIpO7X/7eva+8h/PUtsIBeEx688bn86ld8BmtZkbgyVvYlNzurzAoBZ5CiYJwcLUaT3nBSHnBcEFWHIZuuCTsQfxPET3dCc94Fx/UsO8psS63+ysA4R0HuXuyiviQfp+0inQjOrtDEk+LU/VkXbqvDun95HyceGn9DN/MKuL+CSplRmXAEoc1tVAqyfWIzO4USoVKpYLvcndpFWHAkQMZgu/MdAdrMjWaYDDoFdxjjQ/wnw8+4/I5ntjTxwl3lF8h4TEJkEwK9BqE0usRJC2L+v+f1+sNBAJBANIVy5WToUiIbPI24fhBUZVGo1Gr1dRcR5HERg0OLZq9kEISNMX+e31puRFrLHEXFdyaUryLO++wMWM3WBV8jcTxjtPPBDZrgVQfxUE4QwN8SrzsSfq/RmLuxc41/wIT20Ibj1pENAAAAABJRU5ErkJggg=="},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return o}});var i=r(667294);let s={},t=i.createContext(s);function o(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);