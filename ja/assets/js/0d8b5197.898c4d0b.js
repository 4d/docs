"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62175"],{37938:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"Debugging/basics","title":"\u30C7\u30D0\u30C3\u30AC\u30FC","description":"\u30A8\u30E9\u30FC\u306F\u65E5\u5E38\u7684\u306A\u3082\u306E\u3067\u3059\u3002 \u76F8\u5F53\u884C\u6570\u306E\u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u3044\u308B\u306E\u306B\u30011\u3064\u3082\u30A8\u30E9\u30FC\u304C\u51FA\u306A\u3044\u3068\u3044\u3046\u306E\u306F\u975E\u5E38\u306B\u307E\u308C\u3067\u3059\u3002 \u3080\u3057\u308D\u3001\u30A8\u30E9\u30FC\u306B\u5BFE\u5FDC\u30FB\u4FEE\u6B63\u3059\u308B\u3053\u3068\u306F\u666E\u901A\u306E\u3053\u3068\u306A\u306E\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Debugging/basics.md","sourceDirName":"Debugging","slug":"/Debugging/basics","permalink":"/docs/ja/20-R7/Debugging/basics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"basics","title":"\u30C7\u30D0\u30C3\u30AC\u30FC"},"sidebar":"docs","previous":{"title":"\u30B3\u30F3\u30D1\u30A4\u30EB","permalink":"/docs/ja/20-R7/Project/compiler"},"next":{"title":"\u30C7\u30D0\u30C3\u30AC\u30FC","permalink":"/docs/ja/20-R7/Debugging/debugger"}}'),r=i("785893"),t=i("250065");let l={id:"basics",title:"\u30C7\u30D0\u30C3\u30AC\u30FC"},c=void 0,d={},o=[{value:"\u30A8\u30E9\u30FC\u306E\u7A2E\u985E",id:"\u30A8\u30E9\u30FC\u306E\u7A2E\u985E",level:2},{value:"\u30BF\u30A4\u30D7\u30DF\u30B9",id:"\u30BF\u30A4\u30D7\u30DF\u30B9",level:3},{value:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC",id:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC",level:3},{value:"\u74B0\u5883\u30A8\u30E9\u30FC",id:"\u74B0\u5883\u30A8\u30E9\u30FC",level:3},{value:"\u8A2D\u8A08\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\u30A8\u30E9\u30FC",id:"\u8A2D\u8A08\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\u30A8\u30E9\u30FC",level:3},{value:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30E9\u30FC",id:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30E9\u30FC",level:3},{value:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",id:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",level:2},{value:"\u30C7\u30D0\u30C3\u30AC\u30FC",id:"\u30C7\u30D0\u30C3\u30AC\u30FC",level:2},{value:"\u30D6\u30EC\u30FC\u30AF",id:"\u30D6\u30EC\u30FC\u30AF",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u306F\u65E5\u5E38\u7684\u306A\u3082\u306E\u3067\u3059\u3002 \u76F8\u5F53\u884C\u6570\u306E\u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u3044\u308B\u306E\u306B\u30011\u3064\u3082\u30A8\u30E9\u30FC\u304C\u51FA\u306A\u3044\u3068\u3044\u3046\u306E\u306F\u975E\u5E38\u306B\u307E\u308C\u3067\u3059\u3002 \u3080\u3057\u308D\u3001\u30A8\u30E9\u30FC\u306B\u5BFE\u5FDC\u30FB\u4FEE\u6B63\u3059\u308B\u3053\u3068\u306F\u666E\u901A\u306E\u3053\u3068\u306A\u306E\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"4D \u306E\u958B\u767A\u74B0\u5883\u306B\u306F\u3001\u3042\u3089\u3086\u308B\u7A2E\u985E\u306E\u30A8\u30E9\u30FC\u306B\u5BFE\u5FDC\u3059\u308B\u305F\u3081\u306E\u30C7\u30D0\u30C3\u30B0\u30C4\u30FC\u30EB\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u306E\u7A2E\u985E",children:"\u30A8\u30E9\u30FC\u306E\u7A2E\u985E"}),"\n",(0,r.jsx)(n.h3,{id:"\u30BF\u30A4\u30D7\u30DF\u30B9",children:"\u30BF\u30A4\u30D7\u30DF\u30B9"}),"\n",(0,r.jsx)(n.p,{children:"\u30BF\u30A4\u30D7\u30DF\u30B9\u306F\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u3088\u3063\u3066\u691C\u51FA\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u8D64\u8272\u3067\u793A\u3055\u308C\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u4E0B\u90E8\u306B\u8FFD\u52A0\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306F\u30BF\u30A4\u30D7\u30DF\u30B9\u306E\u4F8B\u3067\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"break-point",src:i(324266).Z+"",width:"1824",height:"980"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u3088\u3046\u306A\u30BF\u30A4\u30D7\u30DF\u30B9\u306F\u901A\u5E38\u3001\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u306E\u539F\u56E0\u3068\u306A\u308A\u307E\u3059 (\u4E0A\u306E\u4F8B\u3067\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u540D\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059)\u3002 \u30B3\u30FC\u30C9\u306E\u8A72\u5F53\u884C\u306E\u7DE8\u96C6\u3092\u78BA\u5B9A\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC\u306E\u8AAC\u660E\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u3088\u3046\u306A\u5834\u5408\u30BF\u30A4\u30D7\u30DF\u30B9\u3092\u4FEE\u6B63\u3057\u3066 Enter\u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u518D\u5EA6\u30B3\u30FC\u30C9\u306E\u691C\u8A3C\u304C\u304A\u3053\u306A\u308F\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC",children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC"}),"\n",(0,r.jsxs)(n.p,{children:["\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u6642\u306B\u9650\u3063\u3066\u3001\u3068\u3089\u3048\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30A8\u30E9\u30FC\u304C\u3042\u308A\u307E\u3059\u3002 ",(0,r.jsx)(n.a,{href:"#%E3%82%B7%E3%83%B3%E3%82%BF%E3%83%83%E3%82%AF%E3%82%B9%E3%82%A8%E3%83%A9%E3%83%BC%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6",children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6"})," \u306F\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u969B\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u4F8B:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"syntax-error",src:i(950998).Z+"",width:"642",height:"552"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8A73\u7D30"})," \u30A8\u30EA\u30A2\u3092\u5C55\u958B\u3059\u308B\u3068\u3001\u6700\u65B0\u306E\u30A8\u30E9\u30FC\u3068\u756A\u53F7\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u74B0\u5883\u30A8\u30E9\u30FC",children:"\u74B0\u5883\u30A8\u30E9\u30FC"}),"\n",(0,r.jsxs)(n.p,{children:["\u6642\u306B\u3001BLOB \u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306E\u5341\u5206\u306A\u30E1\u30E2\u30EA\u304C\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3088\u3046\u3068\u3057\u305F\u6642\u306B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u308A\u65E2\u306B\u958B\u304B\u308C\u3066\u3044\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u3088\u3046\u306A\u30A8\u30E9\u30FC\u306F\u3001\u30B3\u30FC\u30C9\u3084\u305D\u306E\u66F8\u304D\u65B9\u3092\u76F4\u63A5\u306E\u539F\u56E0\u3068\u3057\u3066\u767A\u751F\u3059\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3001\u3053\u306E\u3088\u3046\u306A\u30A8\u30E9\u30FC\u306F ",(0,r.jsx)(n.code,{children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/Concepts/error-handling",children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9"})," \u3067\u7C21\u5358\u306B\u5BFE\u51E6\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8A2D\u8A08\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\u30A8\u30E9\u30FC",children:"\u8A2D\u8A08\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\u30A8\u30E9\u30FC"}),"\n",(0,r.jsxs)(n.p,{children:['\u4E00\u822C\u306B\u3001\u3053\u308C\u3089\u306F\u767A\u898B\u304C\u6700\u3082\u96E3\u3057\u3044\u30BF\u30A4\u30D7\u306E\u30A8\u30E9\u30FC\u3067\u3059\u3002 \u3053\u308C\u307E\u3067\u306B\u8AAC\u660E\u3057\u3066\u3044\u308B\u30A8\u30E9\u30FC\u306F\u3001\u30BF\u30A4\u30D7\u30DF\u30B9\u3092\u9664\u3044\u3066\u3001"\u8A2D\u8A08\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\u306E\u30A8\u30E9\u30FC" \u3068\u3044\u3046\u7BC4\u7587\u306B\u8A72\u5F53\u3057\u307E\u3059\u3002 \u3053\u308C\u3089\u3092\u691C\u77E5\u3059\u308B\u306B\u306F\u3001',(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/Debugging/debugger",children:"\u30C7\u30D0\u30C3\u30AC\u30FC"})," \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u4F8B:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u307E\u3060\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u5909\u6570\u3092\u7528\u3044\u3088\u3046\u3068\u3057\u305F\u305F\u3081\u3001",(0,r.jsx)(n.em,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC"})," \u304C\u767A\u751F\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u9593\u9055\u3063\u305F\u5F15\u6570\u3092\u53D7\u3051\u53D6\u3063\u305F\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u304C\u3001\u305D\u306E\u9593\u9055\u3063\u305F\u540D\u524D\u306B\u3088\u308A\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u958B\u3053\u3046\u3068\u3057\u305F\u305F\u3081\u3001",(0,r.jsx)(n.em,{children:"\u74B0\u5883\u30A8\u30E9\u30FC"})," \u304C\u767A\u751F\u3057\u3066\u3044\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8A2D\u8A08\u307E\u305F\u306F\u30ED\u30B8\u30C3\u30AF\u306E\u30A8\u30E9\u30FC\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306A\u5834\u5408\u3082\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SAVE RECORD"})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u969B\u306B\u3001\u5BFE\u8C61\u3068\u306A\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u6700\u521D\u306B\u30C6\u30B9\u30C8\u3057\u306A\u304B\u3063\u305F\u305F\u3081\u306B\u3001\u30EC\u30B3\u30FC\u30C9\u304C\u6B63\u3057\u304F\u66F4\u65B0\u3055\u308C\u306A\u3044\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570\u3092\u8FFD\u52A0\u3057\u305F\u72B6\u614B\u304C\u30C6\u30B9\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u30E1\u30BD\u30C3\u30C9\u304C\u60F3\u5B9A\u901A\u308A\u306B\u52D5\u4F5C\u3057\u306A\u3044\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5834\u5408\u306B\u3088\u3063\u3066\u554F\u984C\u306E\u539F\u56E0\u306F\u3001\u5B9F\u969B\u306B\u4E2D\u65AD\u304C\u767A\u751F\u3057\u3066\u3044\u308B\u30B3\u30FC\u30C9\u90E8\u5206\u3067\u306F\u306A\u304F\u3001\u5916\u90E8\u306B\u3042\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30E9\u30FC",children:"\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30E9\u30FC"}),"\n",(0,r.jsx)(n.p,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u3067\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u3067\u306F\u6C7A\u3057\u3066\u898B\u3089\u308C\u306A\u3044\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u6B21\u306B\u4F8B\u3092\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"runtime-error",src:i(477745).Z+"",width:"662",height:"472"})}),"\n",(0,r.jsx)(n.p,{children:"\u554F\u984C\u306E\u539F\u56E0\u3092\u8FC5\u901F\u306B\u767A\u898B\u3059\u308B\u306B\u306F\u3001\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D\u3068\u884C\u756A\u53F7\u3092\u8A18\u9332\u3057\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u7248\u3092\u518D\u3073\u958B\u3044\u3066\u3001\u30E1\u30BD\u30C3\u30C9\u306E\u8A72\u5F53\u884C\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6",children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6"}),"\n",(0,r.jsx)(n.p,{children:"\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u304C\u505C\u6B62\u3055\u308C\u308B\u3068\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u7406\u7531\u3067\u8D77\u3053\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4EE5\u964D\u306E\u30E1\u30BD\u30C3\u30C9\u5B9F\u884C\u3092\u59A8\u3052\u308B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u30E1\u30BD\u30C3\u30C9\u304C False \u306E\u8868\u660E\u3092\u751F\u6210\u3057\u305F (",(0,r.jsx)(n.code,{children:"ASSERT"})," \u30B3\u30DE\u30F3\u30C9\u53C2\u7167)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"syntax-error",src:i(950998).Z+"",width:"642",height:"552"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E0A\u90E8\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u306B\u306F\u3001\u30A8\u30E9\u30FC\u306E\u8AAC\u660E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u4E0B\u90E8\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u306B\u306F\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u6642\u306E\u5B9F\u884C\u884C\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u30A8\u30EA\u30A2\u306F\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u307E\u3059\u3002 \u8A73\u7D30\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30D7\u30ED\u30BB\u30B9\u306E\u30A8\u30E9\u30FC\u30B9\u30BF\u30C3\u30AF\u3092\u8868\u793A\u3059\u308B\u30A8\u30EA\u30A2\u3092\u5C55\u958B\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u306F\u3044\u304F\u3064\u304B\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7DE8\u96C6"}),": \u3059\u3079\u3066\u306E\u30E1\u30BD\u30C3\u30C9\u5B9F\u884C\u304C\u4E2D\u65AD\u3055\u308C\u307E\u3059\u3002 4D \u306F\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u308F\u308A\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u304C\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u8868\u793A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u3092\u4FEE\u6B63\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u539F\u56E0\u306B\u5FC3\u5F53\u305F\u308A\u304C\u3042\u308A\u3001\u3053\u308C\u4EE5\u4E0A\u8ABF\u67FB\u3057\u306A\u304F\u3066\u3082\u4FEE\u6B63\u3067\u304D\u308B\u5834\u5408\u306B\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30C8\u30EC\u30FC\u30B9"}),": \u30C8\u30EC\u30FC\u30B9/\u30C7\u30D0\u30C3\u30AC\u30FC\u30E2\u30FC\u30C9\u306B\u5165\u308A\u307E\u3059\u3002 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/Debugging/debugger",children:"\u30C7\u30D0\u30C3\u30AC\u30FC"})," \u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u8A72\u5F53\u884C\u306E\u4E00\u90E8\u304C\u672A\u5B9F\u884C\u306E\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(n.strong,{children:"\u30C8\u30EC\u30FC\u30B9"})," \u30DC\u30BF\u30F3\u3092\u6570\u56DE\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7D9A\u884C"}),": \u5B9F\u884C\u304C\u7D99\u7D9A\u3055\u308C\u307E\u3059\u3002 \u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u884C\u306F\u3001\u30A8\u30E9\u30FC\u306E\u4F4D\u7F6E\u306B\u3088\u3063\u3066\u306F\u4E00\u90E8\u306E\u307F\u5B9F\u884C\u6E08\u307F\u3067\u3042\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u614E\u91CD\u306B\u5B9F\u884C\u3092\u7D99\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044: \u30A8\u30E9\u30FC\u304C\u539F\u56E0\u3067\u3001\u30E1\u30BD\u30C3\u30C9\u306E\u6B8B\u308A\u90E8\u5206\u304C\u6B63\u5E38\u306B\u5B9F\u884C\u3067\u304D\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 ",(0,r.jsx)(n.code,{children:"SET WINDOW TITLE"})," \u306E\u3088\u3046\u306B\u3001\u30B3\u30FC\u30C9\u306E\u6B8B\u308A\u306E\u90E8\u5206\u306E\u5B9F\u884C\u3084\u30C6\u30B9\u30C8\u306E\u59A8\u3052\u306B\u306A\u3089\u306A\u3044\u5358\u7D14\u306A\u547C\u3073\u51FA\u3057\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u306E\u307F\u3001",(0,r.jsx)(n.strong,{children:"\u7D9A\u884C"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Tips: \u30EB\u30FC\u30D7\u4E2D\u306A\u3069\u3067\u7E70\u308A\u8FD4\u3057\u767A\u751F\u3059\u308B\u30A8\u30E9\u30FC\u306E\u5834\u5408\u306B\u306F\u3001",(0,r.jsx)(n.strong,{children:"\u7D9A\u884C"})," \u30DC\u30BF\u30F3\u3092 ",(0,r.jsx)(n.strong,{children:"\u7121\u8996"})," \u30DC\u30BF\u30F3\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 Hold down ",(0,r.jsx)(n.strong,{children:"Alt"})," (Windows) or ",(0,r.jsx)(n.strong,{children:"Option"})," (macOS) key and click the ",(0,r.jsx)(n.strong,{children:"Continue"})," button the first time it appears. The button label changes to ",(0,r.jsx)(n.strong,{children:"Ignore"})," if the dialog is called again for the same error."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Abort"}),": Stops method execution and returns to the state before the method started executing:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30A4\u30D9\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u307E\u305F\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u3053\u308C\u3089\u306F\u505C\u6B62\u3055\u308C\u3001\u30D5\u30A9\u30FC\u30E0\u306B\u623B\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30E1\u30BD\u30C3\u30C9\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u304B\u3089\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u3053\u306E\u30E2\u30FC\u30C9\u306B\u623B\u308A\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Copy"}),": Copies the debugging information into the clipboard. \u3053\u306E\u60C5\u5831\u306F\u30A8\u30E9\u30FC\u306E\u5185\u90E8\u74B0\u5883 (\u756A\u53F7\u3084\u5185\u90E8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49) \u3092\u8AAC\u660E\u3057\u307E\u3059\u3002 \u60C5\u5831\u306F\u30BF\u30D6\u533A\u5207\u308A\u5F62\u5F0F\u3067\u8A18\u8FF0\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Save..."}),": Saves the contents of the syntax error window and the call chain in a ",(0,r.jsx)(n.code,{children:".txt"})," file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30C7\u30D0\u30C3\u30AC\u30FC",children:"\u30C7\u30D0\u30C3\u30AC\u30FC"}),"\n",(0,r.jsxs)(n.p,{children:["A common beginner mistake in dealing with error detection is to click ",(0,r.jsx)(n.strong,{children:"Abort"})," in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. \u3053\u308C\u306F\u6B62\u3081\u3066\u304F\u3060\u3055\u3044\u3002 ",(0,r.jsx)(n.strong,{children:"\u30C7\u30D0\u30C3\u30AC\u30FC"})," \u3092\u5E38\u306B\u4F7F\u7528\u3059\u308C\u3070\u3001\u76F8\u5F53\u306E\u6642\u9593\u3068\u52B4\u529B\u3092\u7BC0\u6E1B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u4F7F\u3046\u3068\u3001\u30E1\u30BD\u30C3\u30C9\u3092\u30B9\u30C6\u30C3\u30D7\u3054\u3068\u306B\u3086\u3063\u304F\u308A\u3068\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D0\u30C3\u30AC\u30FC\u306F\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u7406\u7531\u3092\u77E5\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u60C5\u5831\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u60C5\u5831\u304C\u3042\u308C\u3070\u3001\u30A8\u30E9\u30FC\u306E\u4FEE\u6B63\u65B9\u6CD5\u306F\u308F\u304B\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:['\u30C7\u30D0\u30C3\u30AC\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3082\u3046 1\u3064\u306E\u7406\u7531\u306F\u3001\u30B3\u30FC\u30C9\u306E\u4F5C\u6210\u3067\u3059\u3002 \u3044\u3064\u3082\u4EE5\u4E0A\u306B\u8907\u96D1\u306A\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F5C\u6210\u3057\u3066\u3057\u307E\u3046\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u9054\u6210\u611F\u3053\u305D\u3042\u308A\u307E\u3059\u304C\u3001\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u304C\u6B63\u3057\u3044\u304B\u3069\u3046\u304B\u306F 100%\u78BA\u304B\u3068\u306F\u3044\u3048\u307E\u305B\u3093\u3002 Instead of running it "blind", you can use the ',(0,r.jsx)(n.code,{children:"TRACE"})," command at the beginning of your code, then execute it step by step to keep an eye on what happens."]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D6\u30EC\u30FC\u30AF",children:"\u30D6\u30EC\u30FC\u30AF"}),"\n",(0,r.jsx)(n.p,{children:'\u30C7\u30D0\u30C3\u30B0\u4F5C\u696D\u3067\u306F\u3001\u30B3\u30FC\u30C9\u306E\u4E00\u90E8\u306E\u30C8\u30EC\u30FC\u30B9\u3092\u7279\u5B9A\u306E\u884C\u307E\u3067\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 \u307E\u305F\u3001\u3042\u308B\u5F0F\u304C\u7279\u5B9A\u306E\u5024\u306B\u306A\u3063\u305F\u6642 (\u4F8B: "$myVar > 1000") \u3084\u3001\u7279\u5B9A\u306E 4D\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u305F\u3073\u306B\u30B3\u30FC\u30C9\u3092\u30C8\u30EC\u30FC\u30B9\u3057\u305F\u3044\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002'}),"\n",(0,r.jsxs)(n.p,{children:["These needs are covered by ",(0,r.jsx)(n.strong,{children:"breakpoints"})," and ",(0,r.jsx)(n.strong,{children:"command catching"})," features. \u3053\u308C\u3089\u306E\u6A5F\u80FD\u306F\u3001\u30B3\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u3001\u30C7\u30D0\u30C3\u30AC\u30FC\u3001\u30E9\u30F3\u30BF\u30A4\u30E0\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u304B\u3089\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},477745:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},950998:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},324266:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var s=i(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);