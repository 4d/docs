"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8447"],{318552:function(n,e,l){l.r(e),l.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"Concepts/arrays","title":"\u914D\u5217","description":"\u914D\u5217 \u3068\u306F\u3001\u540C\u3058\u30BF\u30A4\u30D7\u306E \u5909\u6570 \u3092\u756A\u53F7\u4ED8\u304D\u3067\u4E26\u3079\u305F\u3082\u306E\u3067\u3059\u3002 \u5404\u5909\u6570\u306F\u3001\u914D\u5217\u306E \u8981\u7D20 \u3068\u3044\u3044\u307E\u3059\u3002 \u914D\u5217\u306E\u30B5\u30A4\u30BA\u3068\u306F\u3001\u914D\u5217\u304C\u6301\u3064\u8981\u7D20\u306E\u6570\u3092\u6307\u3057\u307E\u3059\u3002\u914D\u5217\u306F\u4F5C\u6210\u6642\u306B\u30B5\u30A4\u30BA\u304C\u4E0E\u3048\u3089\u308C\u3001\u8981\u7D20\u306E\u8FFD\u52A0\u30FB\u633F\u5165\u30FB\u524A\u9664\u306B\u3088\u3063\u3066\u3001\u307E\u305F\u306F\u4F5C\u6210\u6642\u306B\u4F7F\u7528\u3057\u305F\u30B3\u30DE\u30F3\u30C9\u306E\u518D\u4F7F\u7528\u306B\u3088\u3063\u3066\u3001\u4F55\u5EA6\u3067\u3082\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u914D\u5217\u8981\u7D20\u306B\u306F\u30011 \u304B\u3089 N \u306E\u756A\u53F7\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059 (N \u306F\u914D\u5217\u306E\u30B5\u30A4\u30BA)\u3002 \u914D\u5217\u306F\u5FC5\u305A\u3001\u7279\u5225\u306A \u8981\u7D20\u30BC\u30ED \u3092\u6301\u3061\u307E\u3059\u3002 \u914D\u5217\u306F 4D \u306E\u5909\u6570\u3067\u3059\u3002 \u4ED6\u306E\u5909\u6570\u3068\u540C\u69D8\u3001\u914D\u5217\u306B\u3082\u30B9\u30B3\u30FC\u30D7\u304C\u3042\u308A\u30014D \u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u898F\u5247\u306B\u5F93\u3044\u307E\u3059\u304C\u3001\u4ED6\u3068\u7570\u306A\u308B\u3068\u3053\u308D\u304C\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/Concepts/arrays.md","sourceDirName":"Concepts","slug":"/Concepts/arrays","permalink":"/docs/ja/20-R8/Concepts/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Farrays.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"arrays","title":"\u914D\u5217"},"sidebar":"docs","previous":{"title":"\u5909\u6570","permalink":"/docs/ja/20-R8/Concepts/variables"},"next":{"title":"\u30E1\u30BD\u30C3\u30C9","permalink":"/docs/ja/20-R8/Concepts/methods"}}'),r=l("785893"),d=l("250065");let i={id:"arrays",title:"\u914D\u5217"},t=void 0,a={},c=[{value:"\u914D\u5217\u306E\u4F5C\u6210",id:"\u914D\u5217\u306E\u4F5C\u6210",level:2},{value:"\u914D\u5217\u8981\u7D20\u3078\u306E\u5024\u306E\u4EE3\u5165",id:"\u914D\u5217\u8981\u7D20\u3078\u306E\u5024\u306E\u4EE3\u5165",level:2},{value:"\u914D\u5217\u3078\u306E\u914D\u5217\u306E\u4EE3\u5165",id:"\u914D\u5217\u3078\u306E\u914D\u5217\u306E\u4EE3\u5165",level:3},{value:"\u914D\u5217\u306E\u8981\u7D20\u30BC\u30ED",id:"\u914D\u5217\u306E\u8981\u7D20\u30BC\u30ED",level:2},{value:"\u4E8C\u6B21\u5143\u914D\u5217",id:"\u4E8C\u6B21\u5143\u914D\u5217",level:2},{value:"\u914D\u5217\u3068\u30E1\u30E2\u30EA",id:"\u914D\u5217\u3068\u30E1\u30E2\u30EA",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u914D\u5217"})," \u3068\u306F\u3001\u540C\u3058\u30BF\u30A4\u30D7\u306E ",(0,r.jsx)(e.strong,{children:"\u5909\u6570"})," \u3092\u756A\u53F7\u4ED8\u304D\u3067\u4E26\u3079\u305F\u3082\u306E\u3067\u3059\u3002 \u5404\u5909\u6570\u306F\u3001\u914D\u5217\u306E ",(0,r.jsx)(e.strong,{children:"\u8981\u7D20"})," \u3068\u3044\u3044\u307E\u3059\u3002 \u914D\u5217\u306E\u30B5\u30A4\u30BA\u3068\u306F\u3001\u914D\u5217\u304C\u6301\u3064\u8981\u7D20\u306E\u6570\u3092\u6307\u3057\u307E\u3059\u3002\u914D\u5217\u306F\u4F5C\u6210\u6642\u306B\u30B5\u30A4\u30BA\u304C\u4E0E\u3048\u3089\u308C\u3001\u8981\u7D20\u306E\u8FFD\u52A0\u30FB\u633F\u5165\u30FB\u524A\u9664\u306B\u3088\u3063\u3066\u3001\u307E\u305F\u306F\u4F5C\u6210\u6642\u306B\u4F7F\u7528\u3057\u305F\u30B3\u30DE\u30F3\u30C9\u306E\u518D\u4F7F\u7528\u306B\u3088\u3063\u3066\u3001\u4F55\u5EA6\u3067\u3082\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u914D\u5217\u8981\u7D20\u306B\u306F\u30011 \u304B\u3089 N \u306E\u756A\u53F7\u304C\u4ED8\u3051\u3089\u308C\u307E\u3059 (N \u306F\u914D\u5217\u306E\u30B5\u30A4\u30BA)\u3002 \u914D\u5217\u306F\u5FC5\u305A\u3001\u7279\u5225\u306A ",(0,r.jsx)(e.a,{href:"#%E9%85%8D%E5%88%97%E3%81%AE%E8%A6%81%E7%B4%A0%E3%82%BC%E3%83%AD",children:"\u8981\u7D20\u30BC\u30ED"})," \u3092\u6301\u3061\u307E\u3059\u3002 \u914D\u5217\u306F 4D \u306E\u5909\u6570\u3067\u3059\u3002 \u4ED6\u306E\u5909\u6570\u3068\u540C\u69D8\u3001\u914D\u5217\u306B\u3082\u30B9\u30B3\u30FC\u30D7\u304C\u3042\u308A\u30014D \u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u898F\u5247\u306B\u5F93\u3044\u307E\u3059\u304C\u3001\u4ED6\u3068\u7570\u306A\u308B\u3068\u3053\u308D\u304C\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u306B\u304A\u3044\u3066\u3001",(0,r.jsx)(e.strong,{children:"\u914D\u5217"})," \u3088\u308A ",(0,r.jsx)(e.strong,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})," \u306E\u5229\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002 \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u914D\u5217\u3088\u308A\u67D4\u8EDF\u306A\u3060\u3051\u3067\u306A\u304F\u3001\u305F\u304F\u3055\u3093\u306E\u5C02\u7528\u30E1\u30BD\u30C3\u30C9\u3092\u6301\u3061\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/Concepts/collection",children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(e.h2,{id:"\u914D\u5217\u306E\u4F5C\u6210",children:"\u914D\u5217\u306E\u4F5C\u6210"}),"\n",(0,r.jsxs)(e.p,{children:['\u914D\u5217\u306F\u3001"\u914D\u5217" \u30C6\u30FC\u30DE\u306E\u914D\u5217\u5BA3\u8A00\u30B3\u30DE\u30F3\u30C9\u306E\u3044\u305A\u308C\u304B\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3057\u307E\u3059\u3002 \u914D\u5217\u5BA3\u8A00\u30B3\u30DE\u30F3\u30C9\u306F\u30011\u6B21\u5143\u307E\u305F\u306F 2\u6B21\u5143\u306E\u914D\u5217\u306E\u4F5C\u6210\u3084\u30B5\u30A4\u30BA\u5909\u66F4\u3092\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 2\u6B21\u5143\u914D\u5217\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ',(0,r.jsx)(e.a,{href:"#%E4%BA%8C%E6%AC%A1%E5%85%83%E9%85%8D%E5%88%97",children:"\u4E8C\u6B21\u5143\u914D\u5217"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u300110\u500B\u306E\u8981\u7D20\u304B\u3089\u306A\u308B\u6574\u6570\u914D\u5217\u3092\u4F5C\u6210 (\u5BA3\u8A00) \u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" ARRAY INTEGER(aiAnArray;10)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u3001\u3055\u304D\u307B\u3069\u4F5C\u6210\u3057\u305F\u914D\u5217\u309220\u8981\u7D20\u306B\u30B5\u30A4\u30BA\u5909\u66F4\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;20)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u30B3\u30FC\u30C9\u306F\u3001\u3053\u306E\u914D\u5217\u3092\u8981\u7D20\u306A\u3057\u306B\u30B5\u30A4\u30BA\u5909\u66F4\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"ARRAY INTEGER(aiAnArray;0)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u914D\u5217\u8981\u7D20\u3078\u306E\u5024\u306E\u4EE3\u5165",children:"\u914D\u5217\u8981\u7D20\u3078\u306E\u5024\u306E\u4EE3\u5165"}),"\n",(0,r.jsx)(e.p,{children:"\u914D\u5217\u4E2D\u306E\u8981\u7D20\u306F\u4E2D\u30AB\u30C3\u30B3 ({\u2026}) \u3092\u4F7F\u7528\u3057\u3066\u53C2\u7167\u3057\u307E\u3059\u3002 \u4E2D\u30AB\u30C3\u30B3\u306E\u4E2D\u306B\u306F\u6570\u5B57\u3092\u5165\u308C\u3066\u7279\u5B9A\u306E\u8981\u7D20\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u6570\u5B57\u3092\u8981\u7D20\u756A\u53F7\u3068\u3044\u3044\u307E\u3059\u3002 \u6B21\u306E\u30B3\u30FC\u30C9\u306F\u30015\u3064\u306E\u540D\u524D\u3092 atNames \u3068\u3044\u3046\u914D\u5217\u306B\u5165\u308C\u3001\u305D\u308C\u3089\u3092\u8B66\u544A\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' ARRAY TEXT(atNames;5)\n atNames{1}:="Richard"\n atNames{2}:="Sarah"\n atNames{3}:="Sam"\n atNames{4}:="Jane"\n atNames{5}:="John"\n For($vlElem;1;5)\n    ALERT("\u8981\u7D20\u756A\u53F7 #"+String($vlElem)+" \u306E\u5024\u306F "+atNames{$vlElem}+" \u3067\u3059\u3002 ")\n End for\n'})}),"\n",(0,r.jsxs)(e.p,{children:["atNames{$vlElem} \u3068\u3044\u3046\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u306B\u6CE8\u76EE\u3057\u3066\u304F\u3060\u3055\u3044\u3002 atNames{3} \u306E\u3088\u3046\u306B\u6570\u5024\u30EA\u30C6\u30E9\u30EB\u3092\u4F7F\u3046\u3060\u3051\u3067\u306A\u304F\u3001\u6570\u5024\u5909\u6570\u306B\u3088\u3063\u3066\u914D\u5217\u306E\u8981\u7D20\u756A\u53F7\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30EB\u30FC\u30D7\u69CB\u9020\u306B\u3088\u308B\u53CD\u5FA9\u3092\u4F7F\u7528\u3059\u308B\u3068 (",(0,r.jsx)(e.code,{children:"For...End for"}),", ",(0,r.jsx)(e.code,{children:"Repeat...Until"})," \u307E\u305F\u306F ",(0,r.jsx)(e.code,{children:"While...End while"}),")\u3001\u77ED\u3044\u30B3\u30FC\u30C9\u3067\u914D\u5217\u306E\u5168\u8981\u7D20\u3001\u307E\u305F\u306F\u4E00\u90E8\u306E\u8981\u7D20\u3092\u5BFE\u8C61\u3068\u3057\u305F\u51E6\u7406\u3092\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u91CD\u8981:"})," \u4EE3\u5165\u6F14\u7B97\u5B50 (:=) \u3068\u6BD4\u8F03\u6F14\u7B97\u5B50 (=) \u3068\u3092\u6DF7\u540C\u3057\u306A\u3044\u3088\u3046\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002 \u4EE3\u5165\u3068\u6BD4\u8F03\u306F\u3001\u307E\u3063\u305F\u304F\u7570\u306A\u3063\u305F\u6027\u8CEA\u306E\u51E6\u7406\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u914D\u5217\u3078\u306E\u914D\u5217\u306E\u4EE3\u5165",children:"\u914D\u5217\u3078\u306E\u914D\u5217\u306E\u4EE3\u5165"}),"\n",(0,r.jsxs)(e.p,{children:["\u6587\u5B57\u5217\u3084\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3068\u9055\u3063\u3066\u3001\u914D\u5217\u306B\u914D\u5217\u3092\u4EE3\u5165\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u914D\u5217\u3092\u305D\u3063\u304F\u308A\u305D\u306E\u307E\u307E\u5225\u306E\u914D\u5217\u306B\u30B3\u30D4\u30FC\u3059\u308B\u306B\u306F ",(0,r.jsx)(e.code,{children:"COPY ARRAY"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u914D\u5217\u306E\u8981\u7D20\u30BC\u30ED",children:"\u914D\u5217\u306E\u8981\u7D20\u30BC\u30ED"}),"\n",(0,r.jsx)(e.p,{children:"\u914D\u5217\u306F\u5FC5\u305A\u3001\u8981\u7D20\u30BC\u30ED\u3092\u6301\u3061\u307E\u3059\u3002 \u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30EA\u30B9\u30C8\u306A\u3069\u306E\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u914D\u5217\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u8981\u7D20\u30BC\u30ED\u304C\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u30E9\u30F3\u30B2\u30FC\u30B8\u3067\u306E\u5229\u7528\u306B\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093 (*)\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4F8B\u3068\u3057\u3066\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u6307\u5B9A\u305B\u305A\u306B\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u521D\u671F\u5316\u3057\u305F\u3044\u3068\u3057\u307E\u3059\u3002 \u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u914D\u5217\u306E\u8981\u7D20\u30BC\u30ED\u304C\u5229\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'  // atName \u914D\u5217\u3068\u7D10\u3065\u3044\u3066\u3044\u308B\u30B3\u30F3\u30DC\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30EA\u30B9\u30C8\u306E \n  // \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059\n Case of\n    :(Form event code=On Load)\n  // \u8981\u7D20\u30BC\u30ED\u3092\u542B\u3081\n  // \u914D\u5217\u3092\u521D\u671F\u5316\u3057\u307E\u3059\n        ARRAY TEXT(atName;5)\n        atName{0}:=\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"\n        atName{1}:="Text1"\n        atName{2}:="Text2"\n        atName{3}:="Text3"\n        atName{4}:="Text4"\n        atName{5}:="Text5"\n    // \u914D\u5217\u306E\u9078\u629E\u8981\u7D20\u3092\u8981\u7D20\u30BC\u30ED\u306B\u8A2D\u5B9A\u3057\u307E\u3059\n        atName:=0\n End case\n'})}),"\n",(0,r.jsx)(e.p,{children:"(*) \u3072\u3068\u3064\u3060\u3051\u4F8B\u5916\u304C\u3042\u308A\u307E\u3059\u3002\u914D\u5217\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u306F\u3001\u7DE8\u96C6\u4E2D\u306E\u5143\u306E\u5024\u3092\u4FDD\u6301\u3059\u308B\u305F\u3081\u3001\u5185\u90E8\u7684\u306B\u914D\u5217\u306E\u8981\u7D20\u30BC\u30ED\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u7279\u5225\u306A\u30B1\u30FC\u30B9\u3067\u306F\u3001\u958B\u767A\u8005\u306F 0\u756A\u76EE\u306E\u8981\u7D20\u3092\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4E8C\u6B21\u5143\u914D\u5217",children:"\u4E8C\u6B21\u5143\u914D\u5217"}),"\n",(0,r.jsx)(e.p,{children:"\u914D\u5217\u5BA3\u8A00\u30B3\u30DE\u30F3\u30C9\u306F\u305D\u308C\u305E\u308C\u30011\u6B21\u5143\u304A\u3088\u3073 2\u6B21\u5143\u306E\u914D\u5217\u3092\u4F5C\u6210\u3001\u307E\u305F\u306F\u30B5\u30A4\u30BA\u5909\u66F4\u304C\u3067\u304D\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" ARRAY TEXT(atTopics;100;50) // 100\u884C\u3068 50\u5217\u304B\u3089\u306A\u308B\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\n"})}),"\n",(0,r.jsx)(e.p,{children:"2\u6B21\u5143\u914D\u5217\u306F\u3001\u672C\u8CEA\u7684\u306B\u306F\u30E9\u30F3\u30B2\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308A\u3001\u8868\u793A\u3084\u5370\u5237\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4E0A\u306E\u30B3\u30FC\u30C9\u3067\u4F5C\u6210\u3057\u305F atTopics \u914D\u5217\u306B\u3064\u3044\u3066\u3001\u6B21\u306E\u3053\u3068\u304C\u8A00\u3048\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"atTopics \u306F\u30012\u6B21\u5143\u914D\u5217\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"atTopics{8}{5} \u306F\u3001 8\u884C5\u5217\u76EE\u306E\u8981\u7D20\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"atTopics{20} \u306F 20\u884C\u76EE\u3092\u6307\u3057\u3001\u305D\u308C\u81EA\u4F53\u304C 1\u6B21\u5143\u306E\u914D\u5217\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Size of array(atTopics)"})," \u306F\u3001\u884C\u6570\u306E 100\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"Size of array(atTopics{17})"})," \u306F\u300117\u884C\u76EE\u306E\u5217\u6570\u3067\u3042\u308B50\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5404\u30C6\u30FC\u30D6\u30EB\u306E\u5404\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u304C 2\u6B21\u5143\u914D\u5217\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:' C_LONGINT($vlLastTable;$vlLastField)\n C_LONGINT($vlFieldNumber)\n  // \u30C6\u30FC\u30D6\u30EB\u3068\u540C\u3058\u6570\u306E\u7A7A\u884C (\u3064\u307E\u308A\u3001\u5217\u306A\u3057) \u3092\u6301\u3064\u914D\u5217\u4F5C\u6210\u3057\u307E\u3059\n $vlLastTable:=Last table number\n ARRAY POINTER(<>apFields;$vlLastTable;0) // X\u884C 0\u5217\u306E 2D\u914D\u5217\n  // \u30C6\u30FC\u30D6\u30EB\u6BCE\u306B\n For($vlTable;1;$vlLastTable)\n    If(Is table number valid($vlTable))\n       $vlLastField:=Last field number($vlTable)\n  // \u5168\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\n       $vlColumnNumber:=0\n       For($vlField;1;$vlLastField)\n          If(Is field number valid($vlTable;$vlField))\n             $vlColumnNumber:=$vlColumnNumber+1\n  // \u5F53\u8A72\u30C6\u30FC\u30D6\u30EB\u306E\u884C\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u5217\u3092\u633F\u5165\u3057\u3066\u3044\u304D\u307E\u3059\n             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)\n  // \u4F5C\u6210\u3057\u305F "\u30BB\u30EB" \u306B\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\n             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)\n          End if\n       End for\n    End if\n End for\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u3088\u3046\u306B\u521D\u671F\u5316\u3055\u308C\u305F 2\u6B21\u5143\u914D\u5217\u3092\u4F7F\u3063\u3066\u3001\u4EE5\u4E0B\u306E\u65B9\u6CD5\u3067\u7279\u5B9A\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u6301\u3064\u5168\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"  // \u73FE\u5728\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u53D6\u5F97\u3057\u307E\u3059:\n COPY ARRAY(\u25CAapFields{Table(Current form table)};$apTheFieldsIamWorkingOn)\n  // \u30D6\u30FC\u30EB\u3068\u65E5\u4ED8\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u521D\u671F\u5316\u3057\u307E\u3059\n For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))\n    Case of\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date\n       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)\n          $apTheFieldsIamWorkingOn{$vlElem}->:=True\n    End case\n End for\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u4F8B\u3067\u308F\u304B\u308B\u3088\u3046\u306B\u30012\u6B21\u5143\u914D\u5217\u306E\u884C\u306E\u5217\u6570\u306F\u305D\u308C\u305E\u308C\u304C\u540C\u3058\u30B5\u30A4\u30BA\u3067\u3082\u7570\u306A\u308B\u30B5\u30A4\u30BA\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u914D\u5217\u3068\u30E1\u30E2\u30EA",children:"\u914D\u5217\u3068\u30E1\u30E2\u30EA"}),"\n",(0,r.jsx)(e.p,{children:"\u30C6\u30FC\u30D6\u30EB\u3084\u30EC\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u683C\u7D0D\u3059\u308B\u30C7\u30FC\u30BF\u3068\u7570\u306A\u308A\u3001\u914D\u5217\u306F\u5E38\u306B\u5168\u4F53\u304C\u30E1\u30E2\u30EA\u306B\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u305F\u3068\u3048\u3070\u3001\u7C73\u56FD\u5185\u306E\u90F5\u4FBF\u756A\u53F7\u304C\u3059\u3079\u3066 [Zip Codes] \u30C6\u30FC\u30D6\u30EB\u306B\u5165\u529B\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u7D04100,000\u4EF6\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u306A\u308A\u307E\u3059\u3002 \u52A0\u3048\u3066\u3001\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u90F5\u4FBF\u756A\u53F7\u306E\u307B\u304B\u306B\u3001\u5BFE\u5FDC\u3059\u308B\u5E02\u30FB\u90E1\u30FB\u5DDE\u3068\u3044\u3046\u8907\u6570\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u3042\u308B\u3068\u3057\u307E\u3059\u3002 \u30AB\u30EA\u30D5\u30A9\u30EB\u30CB\u30A2\u306E\u90F5\u4FBF\u756A\u53F7\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u30014D \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u306F [Zip Codes] \u30C6\u30FC\u30D6\u30EB\u304B\u3089\u8A72\u5F53\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u3066\u3001\u5FC5\u8981\u306A\u5834\u5408\u306B\u306E\u307F\u5404\u30EC\u30B3\u30FC\u30C9\u3092\u30ED\u30FC\u30C9\u3057\u307E\u3059 (\u305F\u3068\u3048\u3070\u8868\u793A\u3084\u5370\u5237\u6642)\u3002 \u3064\u307E\u308A\u30014D\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u306B\u3088\u3063\u3066\u30C7\u30A3\u30B9\u30AF\u304B\u3089\u30E1\u30E2\u30EA\u306B\u90E8\u5206\u7684\u306B\u30ED\u30FC\u30C9\u3055\u308C\u305F (\u30D5\u30A3\u30FC\u30EB\u30C9\u3054\u3068\u306B\u540C\u3058\u30BF\u30A4\u30D7\u306E) \u9806\u5E8F\u3065\u3051\u3089\u308C\u305F\u4E00\u9023\u306E\u5024\u3067\u4F5C\u696D\u3059\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u540C\u3058\u3053\u3068\u3092\u914D\u5217\u3067\u5B9F\u884C\u3059\u308B\u306E\u306F\u3001\u6B21\u306E\u7406\u7531\u3067\u7981\u6B62\u3059\u3079\u304D\u3067\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"4\u3064\u306E\u60C5\u5831\u30BF\u30A4\u30D7 (\u90F5\u4FBF\u756A\u53F7\u3001\u5E02\u3001\u90E1\u3001\u5DDE) \u3092\u7DAD\u6301\u3059\u308B\u305F\u3081\u306B\u306F\u30014\u3064\u306E\u5927\u304D\u306A\u914D\u5217\u3092\u30E1\u30E2\u30EA\u5185\u3067\u7DAD\u6301\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u914D\u5217\u306F\u3001\u5E38\u306B\u5168\u4F53\u304C\u30E1\u30E2\u30EA\u5185\u306B\u7DAD\u6301\u3055\u308C\u308B\u305F\u3081\u3001\u5E38\u6642\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3067\u3082\u3001\u4F5C\u696D\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u9593\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u3092\u30E1\u30E2\u30EA\u306B\u7F6E\u3044\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u914D\u5217\u5168\u4F53\u304C\u5E38\u306B\u30E1\u30E2\u30EA\u5185\u306B\u7DAD\u6301\u3055\u308C\u308B\u3053\u3068\u304B\u3089\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u958B\u59CB\u3055\u308C\u308B\u305F\u3073\u306B 4\u3064\u306E\u914D\u5217\u3092\u30C7\u30A3\u30B9\u30AF\u304B\u3089\u30ED\u30FC\u30C9\u3057\u3066\u3001\u7D42\u4E86\u6642\u306B\u306F\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u5F53\u8A72\u30C7\u30FC\u30BF\u304C\u4F5C\u696D\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u4F7F\u7528\u30FB\u5909\u66F4\u3055\u308C\u306A\u3044\u5834\u5408\u3082\u3053\u308C\u3092\u7701\u7565\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7D50\u8AD6:"})," \u914D\u5217\u306F\u3001\u307B\u3069\u3088\u3044\u91CF\u306E\u30C7\u30FC\u30BF\u3092\u77ED\u6642\u9593\u7DAD\u6301\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002 \u4ED6\u65B9\u3001\u914D\u5217\u306F\u30E1\u30E2\u30EA\u5185\u306B\u7F6E\u304B\u308C\u308B\u305F\u3081\u3001\u6271\u3044\u3084\u3059\u304F\u9AD8\u901F\u64CD\u4F5C\u304C\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u3057\u304B\u3057\u3001\u72B6\u6CC1\u306B\u3088\u3063\u3066\u306F\u4F55\u767E\u3001\u4F55\u5343\u3068\u3044\u3046\u8981\u7D20\u3092\u6301\u3063\u305F\u914D\u5217\u3067\u4F5C\u696D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u6B21\u306E\u8868\u306B\u3001\u5404\u914D\u5217\u30BF\u30A4\u30D7\u304C\u30E1\u30E2\u30EA\u4E0A\u306B\u5360\u3081\u308B\u30D0\u30A4\u30C8\u6570\u3092\u6C42\u3081\u308B\u305F\u3081\u306E\u8A08\u7B97\u5F0F\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u914D\u5217\u30BF\u30A4\u30D7"}),(0,r.jsx)(e.th,{children:"\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u306E\u8A08\u7B97\u5F0F (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BLOB"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 12 + \u5168BLOB\u8981\u7D20\u306E\u5408\u8A08\u30B5\u30A4\u30BA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"(31+\u8981\u7D20\u6570) \\ 8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Long Integer"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 8 + \u5168\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5408\u8A08\u30B5\u30A4\u30BA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Picture"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 8 + \u5168\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u5408\u8A08\u30B5\u30A4\u30BA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Pointer"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 8 + \u5168\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u5408\u8A08\u30B5\u30A4\u30BA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Real"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 20 + (\u5168\u30C6\u30AD\u30B9\u30C8\u306E\u5408\u8A08\u30B5\u30A4\u30BA) * 2"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Time"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 4"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2\u6B21\u5143"}),(0,r.jsx)(e.td,{children:"(1+\u8981\u7D20\u6570) * 16 + \u914D\u5217\u30B5\u30A4\u30BA\u306E\u5408\u8A08"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6CE8:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30E1\u30E2\u30EA\u4E2D\u306E\u30C6\u30AD\u30B9\u30C8\u30B5\u30A4\u30BA\u306F\u4EE5\u4E0B\u306E\u5F0F\u3067\u8A08\u7B97\u3055\u308C\u307E\u3059: ((Length + 1) * 2)"}),"\n",(0,r.jsx)(e.li,{children:"\u9078\u629E\u3057\u305F\u8981\u7D20\u3084\u8981\u7D20\u6570\u3001\u914D\u5217\u81EA\u4F53\u306E\u60C5\u5831\u3092\u4FDD\u6301\u3059\u308B\u305F\u3081\u3001\u3055\u3089\u306B\u6570\u30D0\u30A4\u30C8\u3092\u8981\u3057\u307E\u3059\u3002"}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return t},a:function(){return i}});var s=l(667294);let r={},d=s.createContext(r);function i(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);