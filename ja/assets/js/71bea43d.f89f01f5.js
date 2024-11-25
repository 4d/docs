"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97226"],{485284:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>l});var r=JSON.parse('{"id":"REST/manData","title":"\u30C7\u30FC\u30BF\u64CD\u4F5C","description":"REST \u306B\u3088\u3063\u3066\u3001\u3059\u3079\u3066\u306E \u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3001\u5C5E\u6027\u3001\u305D\u3057\u3066 \u95A2\u6570 \u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3001\u5C5E\u6027\u3001\u304A\u3088\u3073\u95A2\u6570\u540D\u306B\u3064\u3044\u3066\u306F\u3001\u6587\u5B57\u306E\u5927\u5C0F\u304C\u533A\u5225\u3055\u308C\u307E\u3059\u3002\u30AF\u30A8\u30EA\u306E\u30C7\u30FC\u30BF\u306B\u3064\u3044\u3066\u306F\u3001\u6587\u5B57\u306E\u5927\u5C0F\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/REST/manData.md","sourceDirName":"REST","slug":"/REST/manData","permalink":"/docs/ja/REST/manData","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"manData","title":"\u30C7\u30FC\u30BF\u64CD\u4F5C"},"sidebar":"docs","previous":{"title":"\u30B5\u30FC\u30D0\u30FC\u60C5\u5831\u306E\u53D6\u5F97","permalink":"/docs/ja/REST/genInfo"},"next":{"title":"\u30AF\u30E9\u30B9\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057","permalink":"/docs/ja/REST/classFunctions"}}'),d=s("785893"),t=s("250065");let l={id:"manData",title:"\u30C7\u30FC\u30BF\u64CD\u4F5C"},i=void 0,c={},a=[{value:"\u30C7\u30FC\u30BF\u306E\u30AF\u30A8\u30EA",id:"\u30C7\u30FC\u30BF\u306E\u30AF\u30A8\u30EA",level:2},{value:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u8FFD\u52A0\u30FB\u7DE8\u96C6\u30FB\u524A\u9664",id:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u8FFD\u52A0\u7DE8\u96C6\u524A\u9664",level:2},{value:"\u30C7\u30FC\u30BF\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",id:"\u30C7\u30FC\u30BF\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",level:2},{value:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F5C\u6210\u3068\u7BA1\u7406",id:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F5C\u6210\u3068\u7BA1\u7406",level:2},{value:"\u30C7\u30FC\u30BF\u306E\u8A08\u7B97",id:"\u30C7\u30FC\u30BF\u306E\u8A08\u7B97",level:2},{value:"\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057",id:"\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057",level:2},{value:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027\u306E\u9078\u629E",id:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027\u306E\u9078\u629E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3},{value:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u4F8B",id:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u4F8B",level:4},{value:"\u7279\u5B9A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u4F8B",id:"\u7279\u5B9A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u4F8B",level:4},{value:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F8B",id:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F8B",level:4},{value:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A",id:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A",level:2},{value:"BLOB\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58",id:"blob\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58",level:2},{value:"1\u4EF6\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u53D6\u5F97",id:"1\u4EF6\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u53D6\u5F97",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["REST \u306B\u3088\u3063\u3066\u3001\u3059\u3079\u3066\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/configuration#%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%84%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%81%AE%E5%85%AC%E9%96%8B",children:"\u516C\u958B\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3001\u5C5E\u6027"}),"\u3001\u305D\u3057\u3066 ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/classFunctions",children:"\u95A2\u6570"})," \u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u3001\u5C5E\u6027\u3001\u304A\u3088\u3073\u95A2\u6570\u540D\u306B\u3064\u3044\u3066\u306F\u3001\u6587\u5B57\u306E\u5927\u5C0F\u304C\u533A\u5225\u3055\u308C\u307E\u3059\u3002\u30AF\u30A8\u30EA\u306E\u30C7\u30FC\u30BF\u306B\u3064\u3044\u3066\u306F\u3001\u6587\u5B57\u306E\u5927\u5C0F\u306F\u533A\u5225\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30C7\u30FC\u30BF\u306E\u30AF\u30A8\u30EA",children:"\u30C7\u30FC\u30BF\u306E\u30AF\u30A8\u30EA"}),"\n",(0,d.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u3092\u76F4\u63A5\u30AF\u30A8\u30EA\u3059\u308B\u306B\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/filter",children:(0,d.jsx)(n.code,{children:"$filter"})}),' \u95A2\u6570\u3092\u4F7F\u3044\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001"Smith" \u3068\u3044\u3046\u540D\u524D\u306E\u4EBA\u3092\u691C\u7D22\u3059\u308B\u306B\u306F:']}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,d.jsx)(n.h2,{id:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u8FFD\u52A0\u7DE8\u96C6\u524A\u9664",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u8FFD\u52A0\u30FB\u7DE8\u96C6\u30FB\u524A\u9664"}),"\n",(0,d.jsx)(n.p,{children:"REST API \u3092\u4F7F\u3063\u3066\u30014D\u5185\u3068\u540C\u7B49\u306E\u30C7\u30FC\u30BF\u64CD\u4F5C\u3092\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u8FFD\u52A0\u30FB\u7DE8\u96C6\u3059\u308B\u306B\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/method#methodupdate",children:(0,d.jsx)(n.code,{children:"$method=update"})})," \u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 1\u3064\u4EE5\u4E0A\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u524A\u9664\u3059\u308B\u306B\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/method#methoddelete",children:(0,d.jsx)(n.code,{children:"$method=delete"})})," \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})," \u3067\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u3044\u3061\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u53D6\u5F97\u3059\u308B\u4EE5\u5916\u306B\u3082\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3059 ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/classFunctions#%E9%96%A2%E6%95%B0%E3%81%AE%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%97",children:"\u30AF\u30E9\u30B9\u95A2\u6570"})," \u3092\u7528\u610F\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u623B\u308A\u5024\u3068\u3057\u3066\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3059\u524D\u306B\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/REST/orderby",children:(0,d.jsx)(n.code,{children:"$orderby"})})," \u3092\u4F7F\u3063\u3066\u4E00\u3064\u4EE5\u4E0A\u306E\u5C5E\u6027 (\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u5C5E\u6027\u3082\u53EF) \u3092\u57FA\u6E96\u306B\u4E26\u3079\u66FF\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30C7\u30FC\u30BF\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",children:"\u30C7\u30FC\u30BF\u306E\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3"}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u30CA\u30D3\u30B2\u30FC\u30C8\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u306F\u3001\u30AF\u30A8\u30EA\u3084\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u6B21\u306E REST\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059: ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/skip",children:(0,d.jsx)(n.code,{children:"$skip"})})," (\u958B\u59CB\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u6307\u5B9A)\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/REST/top_$limit",children:(0,d.jsx)(n.code,{children:"$top/$limit"})})," (\u8FD4\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u6570\u306E\u6307\u5B9A)\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F5C\u6210\u3068\u7BA1\u7406",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F5C\u6210\u3068\u7BA1\u7406"}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3068\u306F\u3001",(0,d.jsx)(n.em,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})," \u3068\u540C\u7B49\u306E\u610F\u5473\u3067\u3001REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3088\u3063\u3066\u53D6\u5F97\u3055\u308C\u30014D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u4FDD\u5B58\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u3053\u3068\u3067\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u540C\u3058\u7D50\u679C\u3092\u5F97\u308B\u305F\u3081\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u7E70\u308A\u8FD4\u3057\u30AF\u30A8\u30EA\u3059\u308B\u3053\u3068\u304C\u907F\u3051\u3089\u308C\u307E\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u30AF\u30A8\u30EA\u3059\u308B\u3088\u308A\u3082\u901F\u3044\u305F\u3081\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u901F\u5EA6\u306E\u5411\u4E0A\u306B\u3082\u3064\u306A\u304C\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001REST\u30EA\u30AF\u30A8\u30B9\u30C8\u5185\u3067 ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/method#methodentityset",children:(0,d.jsx)(n.code,{children:"$method=entityset"})})," \u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u305F\u5834\u5408\u3084\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u524A\u9664\u3055\u308C\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u3078\u306E\u5B89\u5168\u5BFE\u7B56\u3068\u3057\u3066\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/REST/filter",children:(0,d.jsx)(n.code,{children:"$filter"})})," \u3084 ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/orderby",children:(0,d.jsx)(n.code,{children:"$orderby"})})," \u3092\u547C\u3073\u51FA\u3059\u969B\u306B ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/savedfilter",children:(0,d.jsx)(n.code,{children:"$savedfilter"})})," \u304A\u3088\u3073 ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/savedorderby",children:(0,d.jsx)(n.code,{children:"$savedorderby"})})," \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u4EE5\u524D\u3068\u540C\u3058 ID \u3067\u518D\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})," \u3092\u4F7F\u3044\u307E\u3059\u3002\u4F8B:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,d.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306F 2\u6642\u9593\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/REST/timeout",children:(0,d.jsx)(n.code,{children:"$timeout"})})," \u306B\u65B0\u3057\u3044\u5024\u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u305F\u3073\u306B\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u307E\u305F\u306F\u6307\u5B9A\u5024\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["4D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u306B\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/method#methodrelease",children:(0,d.jsx)(n.code,{children:"$method=release"})})," \u3092\u4F7F\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u5185\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u5C5E\u6027\u5024\u3092\u7DE8\u96C6\u3059\u308B\u3068\u3001\u305D\u308C\u3089\u306E\u5024\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u751F\u6210\u306B\u4F7F\u7528\u3057\u305F\u30AF\u30A8\u30EA\u6761\u4EF6\u306B\u5408\u81F4\u3059\u308B\u5024\u304B\u3089\u5408\u81F4\u3057\u306A\u3044\u5024\u306B\u5909\u66F4\u3057\u305F\u3068\u3057\u3066\u3082\u3001\u305D\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u524A\u9664\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304B\u3089\u3082\u524A\u9664\u3055\u308C\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u53C2\u7167\u306F ",(0,d.jsx)(n.em,{children:"undefined"})," \u306E\u5024\u3067\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u6B8B\u308A\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u8981\u7D20\u6570\u3068\u3057\u3066\u5F15\u304D\u7D9A\u304D\u542B\u307E\u308C\u307E\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306B\u5BFE\u3057\u3066",(0,d.jsx)(n.a,{href:"/docs/ja/REST/clean",children:(0,d.jsx)(n.code,{children:"$clean"})})," \u3092\u547C\u3073\u51FA\u3059\u3068\u3001",(0,d.jsx)(n.em,{children:"undefined"})," \u306A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u53C2\u7167\u304C\u542B\u307E\u308C\u306A\u3044\u3001\u6700\u65B0\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u65B0\u898F\u306B\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"4D Server \u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u6D88\u3048\u3066\u3044\u305F\u5834\u5408\u300110\u5206\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3067\u518D\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u304C\u6D88\u3048\u3066\u3044\u305F\u5834\u5408\u3001\u518D\u4F5C\u6210\u3055\u308C\u308B\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u5185\u5BB9\u306F\u66F4\u65B0\u3055\u308C\u305F\u3082\u306E\u3067\u3059 (\u65B0\u3057\u304F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u305F\u308A\u3001\u5B58\u5728\u3057\u3066\u3044\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u304C\u524A\u9664\u3055\u308C\u3066\u3044\u305F\u308A\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u3048\u307E\u3059)\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/REST/entityset#entitysetentitysetidoperatorothercollection",children:(0,d.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})})," \u3092\u4F7F\u3063\u3066\u3001\u4E8B\u524D\u306B\u4F5C\u6210\u3057\u305F 2\u3064\u306E\u30BB\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u7D71\u5408\u3067\u304D\u307E\u3059\u3002 \u4E21\u30BB\u30C3\u30C8\u306E\u5185\u5BB9\u3092\u7D71\u5408\u3059\u308B (\u96C6\u5408\u306E\u548C) \u307B\u304B\u3001\u5171\u901A\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u307F\u3092\u8FD4\u3057\u305F\u308A (\u96C6\u5408\u306E\u7A4D) \u3001\u5171\u901A\u3067\u306A\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u307F\u3092\u8FD4\u3057\u305F\u308A (\u96C6\u5408\u306E\u5BFE\u79F0\u5DEE) \u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u5834\u5408m\u65B0\u898F\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002REST\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6700\u5F8C\u306B ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/method#methodentityset",children:(0,d.jsx)(n.code,{children:"$method=entityset"})})," \u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u65B0\u898F\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30C7\u30FC\u30BF\u306E\u8A08\u7B97",children:"\u30C7\u30FC\u30BF\u306E\u8A08\u7B97"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/REST/compute",children:(0,d.jsx)(n.code,{children:"$compute"})})," \u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u4EFB\u610F\u306E\u5C5E\u6027\u306B\u3064\u3044\u3066\u3001",(0,d.jsx)(n.strong,{children:"average"}),"\u3084 ",(0,d.jsx)(n.strong,{children:"count"}),"\u3001",(0,d.jsx)(n.strong,{children:"min"}),"\u3001",(0,d.jsx)(n.strong,{children:"max"}),"\u3001",(0,d.jsx)(n.strong,{children:"sum"})," \u3068\u3044\u3063\u305F\u8A08\u7B97\u304C\u304A\u3053\u306A\u3048\u307E\u3059\u3002 $all \u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u4F7F\u3048\u3070\u3001\u5168\u7A2E\u306E\u5024\u3092\u8A08\u7B97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u305F\u3068\u3048\u3070\u3001\u4E00\u756A\u9AD8\u3044\u7D66\u4E0E\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"/rest/Employee/salary/?$compute=max"})}),"\n",(0,d.jsx)(n.p,{children:"\u5168\u7A2E\u306E\u5024\u3092\u8A08\u7B97\u3057\u3066 JSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u8FD4\u3059\u306B\u306F:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057",children:"\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u30AF\u30E9\u30B9\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057"}),"\n",(0,d.jsxs)(n.p,{children:["POST\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u4F7F\u3063\u3066\u3001ORDA\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/classFunctions",children:"\u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u95A2\u6570"})," \u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u3001\u30BF\u30FC\u30B2\u30C3\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u516C\u958BAPI \u3092\u6D3B\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001City DataClass\u30AF\u30E9\u30B9\u306B ",(0,d.jsx)(n.code,{children:"getCity()"})," \u95A2\u6570\u3092\u5B9A\u7FA9\u3057\u305F\u5834\u5408\u3001\u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,d.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u30DC\u30C7\u30A3\u306B\u542B\u3081\u307E\u3059: ",(0,d.jsx)(n.code,{children:'["Paris"]'})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"REST\u30B5\u30FC\u30D3\u30B9\u3068\u3057\u3066\u516C\u958B\u3055\u308C\u305F 4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3078\u306E\u547C\u3073\u51FA\u3057\u306F\u5F15\u304D\u7D9A\u304D\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5EC3\u6B62\u4E88\u5B9A\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027\u306E\u9078\u629E",children:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027\u306E\u9078\u629E"}),"\n",(0,d.jsxs)(n.p,{children:["REST\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u3069\u306E\u5C5E\u6027\u3092\u542B\u3081\u3066\u8FD4\u3057\u3066\u3082\u3089\u3046\u304B\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001\u521D\u671F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u5C5E\u6027\u306E\u30D1\u30B9\u3092\u8FFD\u52A0\u3057\u307E\u3059 (",(0,d.jsx)(n.em,{children:"\u4F8B"}),": ",(0,d.jsx)(n.code,{children:"Company(1)/name,revenues/"}),")\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u6B21\u306E\u65B9\u6CD5\u3067\u9069\u7528\u3067\u304D\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Object"}),(0,d.jsx)(n.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,d.jsx)(n.th,{children:"\u4F8B\u984C"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9"}),(0,d.jsx)(n.td,{children:"{dataClass}/{att1,att2...}"}),(0,d.jsx)(n.td,{children:"/People/firstName,lastName"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,d.jsx)(n.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,d.jsx)(n.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u7279\u5B9A\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3"}),(0,d.jsx)(n.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,d.jsx)(n.td,{children:"/People(1)/firstName,lastName"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,d.jsx)(n.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,d.jsx)(n.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,d.jsx)(n.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5C5E\u6027\u540D\u306F\u30B3\u30F3\u30DE\u533A\u5207\u308A\u3067\u6E21\u3057\u307E\u3059 (",(0,d.jsx)(n.em,{children:"\u4F8B"}),": ",(0,d.jsx)(n.code,{children:"/Employee/firstName,lastName,salary"}),")\u3002 \u30B9\u30C8\u30EC\u30FC\u30B8\u5C5E\u6027\u304A\u3088\u3073\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u5C5E\u6027\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u53D6\u5F97\u3059\u308B\u969B\u306B\u3001\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u542B\u3081\u308B\u5C5E\u6027\u3092\u6307\u5B9A\u3059\u308B\u4F8B\u3092\u3044\u304F\u3064\u304B\u7D39\u4ECB\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u65B9\u6CD5\u306F\u6B21\u3092\u5BFE\u8C61\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9 (\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u5168\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u307E\u305F\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3)"}),"\n",(0,d.jsx)(n.li,{children:"\u7279\u5B9A\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3"}),"\n",(0,d.jsx)(n.li,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u4F8B",children:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u4F8B"}),"\n",(0,d.jsxs)(n.p,{children:["\u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u3001People \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9 (\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u5168\u4F53\u307E\u305F\u306F ",(0,d.jsx)(n.code,{children:"$filter"})," \u306E\u5B9A\u7FA9\u306B\u5FDC\u3058\u305F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3) \u304B\u3089\u540D\u5B57 (firstName) \u3068\u540D\u524D (lastName) \u5C5E\u6027\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u7D50\u679C"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u7D50\u679C"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u7279\u5B9A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u4F8B",children:"\u7279\u5B9A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u4F8B"}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u3001People \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u7279\u5B9A\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306B\u3064\u3044\u3066\u3001\u540D\u5B57 (firstName) \u3068\u540D\u524D (lastName) \u5C5E\u6027\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u7D50\u679C"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u7D50\u679C"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F8B",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F8B"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"#%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%E3%82%BB%E3%83%83%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E7%AE%A1%E7%90%86",children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u4F5C\u6210"})," \u5F8C\u306B\u3001\u3069\u306E\u5C5E\u6027\u3092\u8FD4\u3059\u304B\u3092\u6307\u5B9A\u3057\u3066\u3001\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30C3\u30C8\u306E\u60C5\u5831\u3092\u30D5\u30A3\u30EB\u30BF\u30FC\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"})}),"\n",(0,d.jsx)(n.h2,{id:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A",children:"\u753B\u50CF\u5C5E\u6027\u306E\u8868\u793A"}),"\n",(0,d.jsx)(n.p,{children:"\u753B\u50CF\u5C5E\u6027\u306E\u5168\u4F53\u50CF\u3092\u8868\u793A\u3055\u305B\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,d.jsxs)(n.p,{children:["\u753B\u50CF\u5F62\u5F0F\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/imageformat",children:(0,d.jsx)(n.code,{children:"$imageformat"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/REST/version",children:(0,d.jsx)(n.code,{children:"$version"})})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"blob\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58",children:"BLOB\u5C5E\u6027\u306E\u30C7\u30A3\u30B9\u30AF\u4FDD\u5B58"}),"\n",(0,d.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B BLOB \u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,d.jsx)(n.h2,{id:"1\u4EF6\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u53D6\u5F97",children:"1\u4EF6\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u306E\u53D6\u5F97"}),"\n",(0,d.jsxs)(n.p,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092 1\u4EF6\u306E\u307F\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u306B\u306F ",(0,d.jsx)(n.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,d.jsx)(n.code,{children:"\\{dataClass\\}:\\{attribute\\}(value)"})})," \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u5229\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u306F\u3001\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u4E3B\u30AD\u30FC\u306B\u57FA\u3065\u304B\u306A\u3044\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u691C\u7D22\u3092\u3057\u305F\u3044\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002 \u305F\u3068\u3048\u3070:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let d={},t=r.createContext(d);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);