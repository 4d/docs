"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40326"],{911227:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>j,contentTitle:()=>l});var t=JSON.parse('{"id":"MSC/restore","title":"\u5FA9\u5143\u30DA\u30FC\u30B8","description":"\u624B\u52D5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u5FA9\u5143\u3059\u308B","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/MSC/restore.md","sourceDirName":"MSC","slug":"/MSC/restore","permalink":"/docs/ja/18/MSC/restore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"restore","title":"\u5FA9\u5143\u30DA\u30FC\u30B8","sidebar_label":"\u5FA9\u5143\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u30DA\u30FC\u30B8","permalink":"/docs/ja/18/MSC/rollback"},"next":{"title":"\u4FEE\u5FA9\u30DA\u30FC\u30B8","permalink":"/docs/ja/18/MSC/repair"}}'),r=s("785893"),d=s("250065");let i={id:"restore",title:"\u5FA9\u5143\u30DA\u30FC\u30B8",sidebar_label:"\u5FA9\u5143\u30DA\u30FC\u30B8"},l=void 0,c={},j=[{value:"\u624B\u52D5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u5FA9\u5143\u3059\u308B",id:"\u624B\u52D5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u5FA9\u5143\u3059\u308B",level:2},{value:"\u8907\u6570\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u9023\u7D9A\u3057\u3066\u7D71\u5408\u3059\u308B",id:"\u8907\u6570\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u9023\u7D9A\u3057\u3066\u7D71\u5408\u3059\u308B",level:2},{value:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FA9\u5143",id:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FA9\u5143",level:2}];function x(n){let e={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u624B\u52D5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u5FA9\u5143\u3059\u308B",children:"\u624B\u52D5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304B\u3089\u5FA9\u5143\u3059\u308B"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5FA9\u5143"}),"\u30DA\u30FC\u30B8\u304B\u3089\u3001\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u624B\u52D5\u3067\u5FA9\u5143\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30DA\u30FC\u30B8\u3067\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FA9\u5143\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u3044\u304F\u3064\u304B\u63D0\u4F9B\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(882319).Z+"",width:"882",height:"666"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"4D \u306E\u81EA\u52D5\u5FA9\u5143\u6A5F\u80FD\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5FA9\u5143\u5F8C\u306B\u5834\u5408\u306B\u5FDC\u3058\u3066\u30C7\u30FC\u30BF\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u7D71\u5408\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u5DE6\u5074\u306B\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65E2\u5B58\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"\u30D6\u30E9\u30A6\u30BA..."})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u4ED6\u306E\u5834\u6240\u306B\u3042\u308B\u30A2\u30FC\u30AB\u30A4\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u9078\u629E\u3057\u305F\u30A2\u30FC\u30AB\u30A4\u30D6\u306F\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30EA\u30B9\u30C8\u304B\u3089\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u53F3\u5074\u306B\u306F\u305D\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306B\u3064\u3044\u3066\u306E\u8AAC\u660E\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D1\u30B9"}),": \u9078\u629E\u3055\u308C\u305F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u306E\u5B8C\u5168\u30D1\u30B9\u540D\u3002 ",(0,r.jsx)(e.strong,{children:"\u8868\u793A"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u65E5\u4ED8\u3068\u6642\u523B"}),": \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u65E5\u4ED8\u3068\u6642\u523B"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5185\u5BB9"}),": \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u3002 \u5404\u9805\u76EE\u306E\u53F3\u5074\u306B\u306F\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u304C\u3042\u308A\u3001\u5FA9\u5143\u3092\u304A\u3053\u306A\u3046\u304B\u3069\u3046\u304B\u3001\u30D5\u30A1\u30A4\u30EB\u3054\u3068\u306B\u9078\u629E\u3067\u304D\u307E\u3059\u3002 ",(0,r.jsx)(e.strong,{children:"\u3059\u3079\u3066\u3092\u9078\u629E\u3059\u308B"})," \u3084 ",(0,r.jsx)(e.strong,{children:"\u3059\u3079\u3066\u306E\u9078\u629E\u3092\u306F\u305A\u3059"})," \u30DC\u30BF\u30F3\u3092\u5229\u7528\u3057\u3066\u3001\u5FA9\u5143\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u8A2D\u5B9A\u3092\u304A\u3053\u306A\u3046\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5FA9\u5143\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u4FDD\u5B58\u5148\u30D5\u30A9\u30EB\u30C0\u30FC"}),": \u5FA9\u5143\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u304C\u914D\u7F6E\u3055\u308C\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067 4D \u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3068\u540C\u968E\u5C64\u306B\u30A2\u30FC\u30AB\u30A4\u30D6\u540D (\u62E1\u5F35\u5B50\u306A\u3057) \u306E\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u4F5C\u6210\u3057\u3001\u305D\u3053\u306B\u30D5\u30A1\u30A4\u30EB\u3092\u5FA9\u5143\u3057\u307E\u3059\u3002 \u3053\u306E\u5834\u6240\u3092\u5909\u66F4\u3059\u308B\u306B\u306F ",(0,r.jsx)(e.strong,{children:"[...]"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5FA9\u5143\u30D5\u30A1\u30A4\u30EB\u306E\u914D\u7F6E\u5834\u6240\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5FA9\u5143"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u9078\u629E\u3057\u305F\u9805\u76EE\u306E\u5FA9\u5143\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8907\u6570\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u9023\u7D9A\u3057\u3066\u7D71\u5408\u3059\u308B",children:"\u8907\u6570\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u9023\u7D9A\u3057\u3066\u7D71\u5408\u3059\u308B"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5FA9\u5143\u5F8C\u306B\u3072\u3068\u3064\u4EE5\u4E0A\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u7D71\u5408"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u8907\u6570\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u30014\u3064\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306B\u5BFE\u5FDC\u3059\u308B 4\u3064\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u30A2\u30FC\u30AB\u30A4\u30D6\u304C\u3042\u308B\u5834\u5408\u3001\u6700\u521D\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u5FA9\u5143\u3057\u3066\u3001\u30ED\u30B0\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u4E00\u3064\u305A\u3064\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002 \u3053\u308C\u306B\u3088\u308A\u3001\u305F\u3068\u3048\u3070\u6700\u65B0\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u3092\u5931\u3063\u305F\u5834\u5408\u3067\u3082\u3001\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u5FA9\u65E7\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3068\u30014D\u306F\u5FA9\u5143\u5F8C\u306B\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u7D71\u5408\u3059\u308B\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002 \u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u306F\u3001\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u307E\u3067\u7D71\u5408\u306E\u90FD\u5EA6\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FA9\u5143",children:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5FA9\u5143"}),"\n",(0,r.jsx)(e.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3068\u8907\u6570\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB (.4BK) \u3084\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB (.4BL) \u306E\u9593\u3067\u3001\u30C7\u30FC\u30BF\u6697\u53F7\u5316\u30AD\u30FC (\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA) \u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002 \u5408\u81F4\u3057\u305F\u6697\u53F7\u5316\u30AD\u30FC\u306F\u5E38\u306B\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u5FA9\u5143\u3057\u3001\u30AB\u30EC\u30F3\u30C8\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u7D71\u5408\u3057\u305F\u3044\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u53E4\u3044\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u3092\u4F7F\u7528\u3057\u3066\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u5FA9\u5143\u3057\u305F\u5834\u5408\u3001\u305D\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA\u306F\u6B21\u56DE\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u6642\u306B\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u6697\u53F7\u5316\u306E\u3042\u3068\u3001\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u969B\u306B\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u5B9F\u884C\u3055\u308C\u65B0\u3057\u3044\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u305F\u3081\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB (.4BK) \u3092\u7279\u5B9A\u306E\u30AD\u30FC\u3067\u5FA9\u53F7\u5316\u3057\u305F\u5F8C\u3001\u7570\u306A\u308B\u30AD\u30FC\u3067\u6697\u53F7\u5316\u3055\u308C\u305F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB (.4BL) \u3092\u305D\u308C\u306B\u7D71\u5408\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u8868\u306F\u3001\u8907\u6570\u306E\u30AD\u30FC\u3092\u4F7F\u7528\u3057\u305F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7/\u5FA9\u5143\u64CD\u4F5C\u306B\u304A\u3051\u308B\u904E\u7A0B\u306E\u4E00\u4F8B\u3092\u307E\u3068\u3081\u305F\u3082\u306E\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,r.jsx)(e.th,{children:"\u751F\u6210\u3055\u308C\u308B\u30D5\u30A1\u30A4\u30EB"}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u65B0\u898F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u4F5C\u6210"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u65B0\u898F\u30C7\u30FC\u30BF\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F71\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),(0,r.jsx)(e.td,{children:"0000.4BL \u304A\u3088\u3073 0001.4BK"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F72\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),(0,r.jsx)(e.td,{children:"0001.4BL \u304A\u3088\u3073 0002.4BK"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F73\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Key1\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6697\u53F7\u5316"}),(0,r.jsx)(e.td,{children:"0003.4BK \u30D5\u30A1\u30A4\u30EB (Key1\u3067\u6697\u53F7\u5316)"}),(0,r.jsx)(e.td,{children:'\u6697\u53F7\u5316\u3092\u3059\u308B\u3068 (\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3082\u542B\u3081) \u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS" \u3068\u3044\u3046\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u969B\u3001\u65B0\u3057\u3044\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u3001\u3053\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u6709\u52B9\u5316\u3059\u308B\u305F\u3081\u306B\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u304C\u304A\u3053\u306A\u308F\u308C\u307E\u3059\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F74\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),(0,r.jsx)(e.td,{children:"0003.4BL \u304A\u3088\u3073 0004.4BK \u30D5\u30A1\u30A4\u30EB (Key1\u3067\u6697\u53F7\u5316)"}),(0,r.jsx)(e.td,{children:"0003.4BK \u3092\u5FA9\u5143\u3057\u30010003.4BL \u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F75\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),(0,r.jsx)(e.td,{children:"0004.4BL \u304A\u3088\u3073 0005.4BK \u30D5\u30A1\u30A4\u30EB (Key1\u3067\u6697\u53F7\u5316)"}),(0,r.jsx)(e.td,{children:"0003.4BK \u3092\u5FA9\u5143\u3057\u30010003.4BL + 0004.4BL \u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002 \u307E\u305F\u30010004.4BK \u3092\u5FA9\u5143\u3057\u30010004.4BL \u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F76\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Key2\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u6697\u53F7\u5316"}),(0,r.jsx)(e.td,{children:"0006.4BK \u30D5\u30A1\u30A4\u30EB (Key2\u3067\u6697\u53F7\u5316)"}),(0,r.jsx)(e.td,{children:'\u6697\u53F7\u5316\u3092\u3059\u308B\u3068 (\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3082\u542B\u3081) \u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS" \u3068\u3044\u3046\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 \u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u969B\u3001\u65B0\u3057\u3044\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u4F5C\u6210\u3055\u308C\u3001\u3053\u306E\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u6709\u52B9\u5316\u3059\u308B\u305F\u3081\u306B\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u304C\u304A\u3053\u306A\u308F\u308C\u307E\u3059\u3002'})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F77\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),(0,r.jsx)(e.td,{children:"0006.4BL \u304A\u3088\u3073 0007.4BK \u30D5\u30A1\u30A4\u30EB (Key2\u3067\u6697\u53F7\u5316)"}),(0,r.jsx)(e.td,{children:"0006.4BK \u3092\u5FA9\u5143\u3057\u30010006.4BL \u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u3092\u8FFD\u52A0 (\u30EC\u30B3\u30FC\u30C9\u756A\u53F78\u756A)"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),(0,r.jsx)(e.td,{children:"0007.4BL \u304A\u3088\u3073 0008.4BK \u30D5\u30A1\u30A4\u30EB (Key2\u3067\u6697\u53F7\u5316)"}),(0,r.jsx)(e.td,{children:"0006.4BK \u3092\u5FA9\u5143\u3057\u30010006.4BL + 0007.4BL \u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002 \u307E\u305F\u30010007.4BK \u3092\u5FA9\u5143\u3057\u30010007.4BL \u3092\u7D71\u5408\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002"})]})]})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u5FA9\u5143\u3057\u3001\u4E00\u3064\u4EE5\u4E0A\u306E .4BL \u30D5\u30A1\u30A4\u30EB\u3092\u7D71\u5408\u3059\u308B\u5834\u5408\u3001\u5FA9\u5143\u3055\u308C\u305F .4BK \u30D5\u30A1\u30A4\u30EB\u304A\u3088\u3073 .4BL \u30D5\u30A1\u30A4\u30EB\u306F\u540C\u3058\u6697\u53F7\u5316\u30AD\u30FC\u3092\u6301\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u7D71\u5408\u30D7\u30ED\u30BB\u30B9\u306E\u9593\u3001.4BL \u30D5\u30A1\u30A4\u30EB\u304C\u7D71\u5408\u3055\u308C\u308B\u969B\u306B\u6709\u52B9\u306A\u6697\u53F7\u5316\u30AD\u30FC\u304C 4D\u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u9023\u7D9A\u3057\u305F\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30AD\u30FC\u3092\u540C\u3058\u5916\u90E8\u30C7\u30D0\u30A4\u30B9\u306B\u4FDD\u5B58\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u5FA9\u5143\u3068\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u7D71\u5408\u3092\u304A\u3053\u306A\u3046\u3068\u3001\u30C7\u30D0\u30A4\u30B9\u304C\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308C\u3070\u5408\u81F4\u3059\u308B\u30AD\u30FC\u306E\u691C\u7D22\u304C\u81EA\u52D5\u7684\u306B\u304A\u3053\u306A\u308F\u308C\u307E\u3059\u3002"}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},882319:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(n){let e=t.useContext(d);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);