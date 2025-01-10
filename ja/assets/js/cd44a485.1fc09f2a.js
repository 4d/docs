"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53862"],{108798:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>t,contentTitle:()=>c});var s=JSON.parse('{"id":"Concepts/error-handling","title":"\u30A8\u30E9\u30FC\u51E6\u7406","description":"\u30A8\u30E9\u30FC\u51E6\u7406\u3068\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u306E\u3042\u308B\u30A8\u30E9\u30FC\u306B\u5099\u3048\u3001\u5BFE\u51E6\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30E9\u30F3\u30BF\u30A4\u30E0\u306B\u304A\u3051\u308B\u30A8\u30E9\u30FC\u306E\u30AD\u30E3\u30C3\u30C1\u3084\u5831\u544A\u3001\u307E\u305F\u305D\u308C\u3089\u306E\u6761\u4EF6\u3092\u691C\u8A3C\u3059\u308B\u305F\u3081\u30014D\u306F\u5305\u62EC\u7684\u306A\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Concepts/error-handling.md","sourceDirName":"Concepts","slug":"/Concepts/error-handling","permalink":"/docs/ja/19/Concepts/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"error-handling","title":"\u30A8\u30E9\u30FC\u51E6\u7406"},"sidebar":"docs","previous":{"title":"\u5909\u63DB\u30BF\u30B0","permalink":"/docs/ja/19/Tags/tags"},"next":{"title":"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u3068\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u30E2\u30FC\u30C9","permalink":"/docs/ja/19/Concepts/interpreted-compiled"}}'),l=r("785893"),d=r("250065");let i={id:"error-handling",title:"\u30A8\u30E9\u30FC\u51E6\u7406"},c=void 0,o={},t=[{value:"\u30A8\u30E9\u30FC/\u30B9\u30C6\u30FC\u30BF\u30B9",id:"\u30A8\u30E9\u30FC\u30B9\u30C6\u30FC\u30BF\u30B9",level:2},{value:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5",id:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5",level:2},{value:"\u30B9\u30B3\u30FC\u30D7\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",id:"\u30B9\u30B3\u30FC\u30D7\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:3},{value:"\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u30A8\u30E9\u30FC\u51E6\u7406",id:"\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u30A8\u30E9\u30FC\u51E6\u7406",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u7A7A\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9",id:"\u7A7A\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9",level:3}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u3068\u306F\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5185\u3067\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u306E\u3042\u308B\u30A8\u30E9\u30FC\u306B\u5099\u3048\u3001\u5BFE\u51E6\u3059\u308B\u3053\u3068\u3067\u3059\u3002 \u30E9\u30F3\u30BF\u30A4\u30E0\u306B\u304A\u3051\u308B\u30A8\u30E9\u30FC\u306E\u30AD\u30E3\u30C3\u30C1\u3084\u5831\u544A\u3001\u307E\u305F\u305D\u308C\u3089\u306E\u6761\u4EF6\u3092\u691C\u8A3C\u3059\u308B\u305F\u3081\u30014D\u306F\u5305\u62EC\u7684\u306A\u30B5\u30DD\u30FC\u30C8\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u306F\u6B21\u306E2\u3064\u306E\u8981\u671B\u306B\u5FDC\u3048\u307E\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u958B\u767A\u30D5\u30A7\u30FC\u30BA\u306B\u304A\u3044\u3066\u3001\u554F\u984C\u3068\u306A\u308A\u3046\u308B\u30B3\u30FC\u30C9\u306E\u30A8\u30E9\u30FC\u3084\u30D0\u30B0\u3092\u767A\u898B\u3057\u3066\u4FEE\u6B63\u3057\u305F\u3044\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u904B\u7528\u30D5\u30A7\u30FC\u30BA\u306B\u304A\u3044\u3066\u3001\u4E88\u671F\u3057\u306A\u3044\u30A8\u30E9\u30FC\u3092\u691C\u77E5\u3057\u3066\u56DE\u5FA9\u3057\u305F\u3044\u3002\u3068\u304F\u306B\u3001\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0 (\u30C7\u30A3\u30B9\u30AF\u304C\u4E00\u676F\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u306A\u3044\u3001\u306A\u3069) \u3092\u72EC\u81EA\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u7F6E\u63DB\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u308B\u30B3\u30FC\u30C9\u306E\u305F\u3081\u30014D Server \u306B\u306F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3057\u3066\u304A\u304F\u3053\u3068\u304C\u5F37\u304F\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306B\u304A\u3044\u3066\u4E88\u671F\u305B\u306C\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u3092\u9632\u304E\u3001\u30A8\u30E9\u30FC\u306E\u8ABF\u67FB\u306B\u5FC5\u8981\u306A\u30ED\u30B0\u3092\u5C02\u7528\u30D5\u30A1\u30A4\u30EB\u306B\u3068\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u30B9\u30C6\u30FC\u30BF\u30B9",children:"\u30A8\u30E9\u30FC/\u30B9\u30C6\u30FC\u30BF\u30B9"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"entity.save()"})," \u3084 ",(0,l.jsx)(n.code,{children:"transporter.send()"})," \u306A\u3069\u3001\u304A\u304A\u304F\u306E 4D \u30AF\u30E9\u30B9\u95A2\u6570\u306F ",(0,l.jsx)(n.em,{children:"status"}),' \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002 \u30E9\u30F3\u30BF\u30A4\u30E0\u306B\u304A\u3044\u3066 "\u60F3\u5B9A\u3055\u308C\u308B"\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u5B9F\u884C\u3092\u505C\u6B62\u3055\u305B\u306A\u3044\u30A8\u30E9\u30FC (\u7121\u52B9\u306A\u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306A\u3069) \u304C\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30A8\u30E9\u30FC\u3078\u306E\u5BFE\u5FDC\u306F\u3001\u901A\u5E38\u306E\u30B3\u30FC\u30C9\u306B\u3088\u3063\u3066\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,l.jsx)(n.p,{children:'\u30C7\u30A3\u30B9\u30AF\u66F8\u304D\u8FBC\u307F\u30A8\u30E9\u30FC\u3084\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u554F\u984C\u306A\u3069\u306E\u30A4\u30EC\u30AE\u30E5\u30E9\u30FC\u306A\u4E2D\u65AD\u306F "\u60F3\u5B9A\u3055\u308C\u306A\u3044" \u30A8\u30E9\u30FC\u3067\u3059\u3002 \u3053\u308C\u3089\u306E\u30A8\u30E9\u30FC\u306F\u4F8B\u5916\u3092\u767A\u751F\u3055\u305B\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u4ECB\u3057\u3066\u5BFE\u5FDC\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002'}),"\n",(0,l.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5",children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u88C5"}),"\n",(0,l.jsxs)(n.p,{children:["4D \u306B\u304A\u3044\u3066\u306F\u3001\u30A8\u30E9\u30FC\u5C02\u7528\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3042\u308B ",(0,l.jsx)(n.strong,{children:"\u30A8\u30E9\u30FC\u51E6\u7406"})," (\u307E\u305F\u306F ",(0,l.jsx)(n.strong,{children:"\u30A8\u30E9\u30FC\u30AD\u30E3\u30C3\u30C1"}),") \u30E1\u30BD\u30C3\u30C9\u5185\u3067\u3059\u3079\u3066\u306E\u30A8\u30E9\u30FC\u3092\u30AD\u30E3\u30C3\u30C1\u3057\u3001\u51E6\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u5B9F\u88C5 (\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB) \u3055\u308C\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u304B\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u304B\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u767A\u751F\u3059\u308B\u3059\u3079\u3066\u306E\u30A8\u30E9\u30FC\u306E\u969B\u306B\u81EA\u52D5\u3067\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092 ",(0,l.jsx)(n.em,{children:"\u5B9F\u88C5"})," \u3059\u308B\u306B\u306F\u3001",(0,l.jsx)(n.code,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u30B3\u30FC\u30EB\u3057\u3001\u30B3\u30DE\u30F3\u30C9\u306B\u5F53\u8A72\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\u3002 \u4F8B:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("IO_ERRORS") // \u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3057\u307E\u3059\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u30A8\u30E9\u30FC\u306E\u691C\u77E5\u3092\u4E2D\u6B62\u3059\u308B\u306B\u306F\u3001\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u3066\u518D\u5EA6 ",(0,l.jsx)(n.code,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u30B3\u30FC\u30EB\u3057\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("") // \u30A8\u30E9\u30FC\u306E\u691C\u77E5\u3092\u4E2D\u6B62\u3057\u307E\u3059\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Method called on error"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,l.jsx)(n.code,{children:"ON ERR CALL"})," \u306B\u3088\u3063\u3066\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u6C4E\u7528\u7684\u306A\u30B3\u30FC\u30C9\u3067\u3068\u304F\u306B\u6709\u7528\u3067\u3059\u3002\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u4E00\u6642\u7684\u306B\u5909\u66F4\u3057\u3001\u5F8C\u3067\u5FA9\u5143\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  // \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\n $ref:=Open document("MyDocument")\n  // \u524D\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306B\u623B\u3057\u307E\u3059\n ON ERR CALL($methCurrent)\n\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u30B9\u30B3\u30FC\u30D7\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",children:"\u30B9\u30B3\u30FC\u30D7\u3068\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"}),"\n",(0,l.jsx)(n.p,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3044\u3066\u4E00\u3064\u306E\u30A8\u30E9\u30FC\u30AD\u30E3\u30C3\u30C1\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u3046\u3084\u308A\u65B9\u3082\u3042\u308C\u3070\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30E2\u30B8\u30E5\u30FC\u30EB\u3054\u3068\u306B\u9055\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u5B9A\u7FA9\u3059\u308B\u65B9\u6CD5\u3082\u3042\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u4E00\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3064\u304D\u5B9F\u88C5\u3067\u304D\u308B\u306E\u306F\u4E00\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u307F\u3067\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u5B9F\u88C5\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u5B9F\u884C\u4E2D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3057\u304B\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002 \u3064\u307E\u308A\u3001",(0,l.jsx)(n.strong,{children:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"})," \u306B\u3088\u3063\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u3066\u3082\u3001\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3044\u3066 ",(0,l.jsx)(n.code,{children:"ON ERR CALL"})," \u3067\u5B9F\u88C5\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306F\u53CD\u5FDC\u3057\u307E\u305B\u3093\u3057\u3001\u9006\u3082\u307E\u305F\u7136\u308A\u3067\u3059\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u30A8\u30E9\u30FC\u51E6\u7406",children:"\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u30A8\u30E9\u30FC\u51E6\u7406"}),"\n",(0,l.jsx)(n.p,{children:"\u72EC\u81EA\u306B\u4F5C\u6210\u3057\u3066\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306F\u3001\u30A8\u30E9\u30FC\u3092\u8ABF\u67FB\u3059\u308B\u305F\u3081\u306E\u60C5\u5831\u304C\u3044\u304F\u3064\u304B\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C02\u7528\u306E\u30B7\u30B9\u30C6\u30E0\u5909\u6570:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Error"})," (\u500D\u9577\u6574\u6570): \u30A8\u30E9\u30FC\u30B3\u30FC\u30C9"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Error method"})," (\u30C6\u30AD\u30B9\u30C8): \u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u79F0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Error line"})," (\u500D\u9577\u6574\u6570): \u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u884C\u756A\u53F7"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Error formula"})," (\u30C6\u30AD\u30B9\u30C8): \u30A8\u30E9\u30FC\u306E\u5143\u3068\u306A\u3063\u305F 4D \u30B3\u30FC\u30C9\u306E\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9 (\u30C6\u30AD\u30B9\u30C8)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:["4D \u306F\u3001\u3044\u304F\u3064\u304B\u306E ",(0,l.jsx)(n.a,{href:"/docs/ja/19/Concepts/variables#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%A4%89%E6%95%B0",children:(0,l.jsx)(n.strong,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570"})})," \u3068\u547C\u3070\u308C\u308B\u5C02\u7528\u306E\u5909\u6570\u3092\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3057\u3066\u3044\u307E\u3059\u3002 :::"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"GET LAST ERROR STACK"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u73FE\u5728\u306E\u30A8\u30E9\u30FC\u30B9\u30BF\u30C3\u30AF\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Get call chain"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u5185\u306B\u304A\u3051\u308B\u3001\u30E1\u30BD\u30C3\u30C9\u547C\u3073\u51FA\u3057\u30C1\u30A7\u30FC\u30F3\u306E\u5404\u30B9\u30C6\u30C3\u30D7\u3092\u8A73\u7D30\u306B\u8AAC\u660E\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),(0,l.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),(0,l.jsx)(n.p,{children:"\u7C21\u5358\u306A\u30A8\u30E9\u30FC\u51E6\u7406\u30B7\u30B9\u30C6\u30E0\u306E\u4F8B\u3067\u3059:"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'// \u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\n ON ERR CALL("errorMethod")\n //... \u30B3\u30FC\u30C9\u306E\u5B9F\u884C\n ON ERR CALL("") // \u30A8\u30E9\u30FC\u306E\u691C\u77E5\u3092\u4E2D\u6B62\u3057\u307E\u3059\n'})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'// errorMethod \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n If(Error#1006) // \u3053\u308C\u306F\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u308B\u5272\u308A\u8FBC\u307F\u3067\u306F\u3042\u308A\u307E\u305B\u3093\n    ALERT("\u30A8\u30E9\u30FC "+String(Error)+" \u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002 \u554F\u984C\u3068\u306A\u3063\u305F\u30B3\u30FC\u30C9\u306F\u3053\u3061\u3089\u3067\u3059: \\""+Error formula+"\\"")\n End if\n'})}),(0,l.jsx)(n.h3,{id:"\u7A7A\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9",children:"\u7A7A\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9"}),(0,l.jsxs)(n.p,{children:["\u6A19\u6E96\u306E\u30A8\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3055\u305B\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u306B\u306F\u3001\u7A7A\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u88C5\u3059\u308B\u3060\u3051\u3067\u5B9F\u73FE\u3067\u304D\u307E\u3059\u3002 ",(0,l.jsx)(n.code,{children:"Error"})," \u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u4EE5\u5916\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u3082\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") // emptyMethod \u306F\u7A7A\u306E\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3059\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002")\nEnd if\nON ERR CALL("")\n'})})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let l={},d=s.createContext(l);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);