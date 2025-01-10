"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5056"],{842485:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"Concepts/variables","title":"\u5909\u6570","description":"4D \u306E\u30C7\u30FC\u30BF\u306F\u3001\u6839\u672C\u7684\u306B\u7570\u306A\u3063\u3066\u3044\u308B 2\u3064\u306E\u65B9\u6CD5\u3067\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002 \u30D5\u30A3\u30FC\u30EB\u30C9 \u306F\u30C7\u30A3\u30B9\u30AF\u306B\u6C38\u7D9A\u7684\u306B\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u306E\u306B\u5BFE\u3057\u3001\u5909\u6570 \u306F\u30E1\u30E2\u30EA\u4E0A\u306B\u4E00\u6642\u7684\u306B\u30C7\u30FC\u30BF\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/variables.md","sourceDirName":"Concepts","slug":"/Concepts/variables","permalink":"/docs/ja/18/Concepts/variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"variables","title":"\u5909\u6570"},"sidebar":"docs","previous":{"title":"\u30D0\u30EA\u30A2\u30F3\u30C8","permalink":"/docs/ja/18/Concepts/variant"},"next":{"title":"\u914D\u5217","permalink":"/docs/ja/18/Concepts/arrays"}}'),l=s("785893"),c=s("250065");let i={id:"variables",title:"\u5909\u6570"},d=void 0,t={},a=[{value:"\u5909\u6570\u306E\u4F5C\u6210",id:"\u5909\u6570\u306E\u4F5C\u6210",level:2},{value:"\u5909\u6570\u3078\u306E\u4EE3\u5165",id:"\u5909\u6570\u3078\u306E\u4EE3\u5165",level:2},{value:"\u30ED\u30FC\u30AB\u30EB\u3001\u30D7\u30ED\u30BB\u30B9\u3001\u304A\u3088\u3073\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570",id:"\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u304A\u3088\u3073\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570",level:2},{value:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570",id:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570",level:3},{value:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570",id:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570",level:3},{value:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570",id:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570",level:3}];function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["4D \u306E\u30C7\u30FC\u30BF\u306F\u3001\u6839\u672C\u7684\u306B\u7570\u306A\u3063\u3066\u3044\u308B 2\u3064\u306E\u65B9\u6CD5\u3067\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002 ",(0,l.jsx)(n.strong,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9"})," \u306F\u30C7\u30A3\u30B9\u30AF\u306B\u6C38\u7D9A\u7684\u306B\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u306E\u306B\u5BFE\u3057\u3001",(0,l.jsx)(n.strong,{children:"\u5909\u6570"})," \u306F\u30E1\u30E2\u30EA\u4E0A\u306B\u4E00\u6642\u7684\u306B\u30C7\u30FC\u30BF\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u4F5C\u6210\u3059\u308B\u969B\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u540D\u524D\u3068\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u540C\u69D8\u306B\u3001\u5909\u6570\u306B\u3082\u540D\u524D\u3068 ",(0,l.jsx)(n.a,{href:"/docs/ja/18/Concepts/data-types",children:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7"})," \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5909\u6570\u306F\u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u8981\u7D20\u3067\u3059\u3002\u753B\u9762\u4E0A\u306B\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u306E\u306A\u3044\u3001\u88CF\u65B9\u306B\u5FB9\u3057\u305F\u5909\u6570\u3092\u4F5C\u6210\u30FB\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3082\u3061\u308D\u3093\u3001\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u5909\u6570\u306E\u5024\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059 (\u30DD\u30A4\u30F3\u30BF\u30FC\u3084BLOB\u3092\u9664\u304F)\u3002\u307E\u305F\u3001\u5909\u6570\u306B\u5024\u3092\u5165\u529B\u3057\u305F\u308A\u3001\u5909\u6570\u306E\u5024\u3092\u30EC\u30DD\u30FC\u30C8\u306B\u5370\u5237\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002 \u3053\u306E\u3068\u304D\u3001\u5165\u529B\u53EF\u3084\u5165\u529B\u4E0D\u53EF\u306E\u5909\u6570\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u540C\u69D8\u306B\u632F\u821E\u3044\u3001\u63D0\u4F9B\u3055\u308C\u308B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3082\u985E\u4F3C\u3057\u3066\u3044\u307E\u3059\u3002 \u30D5\u30A9\u30FC\u30E0\u4E0A\u306E\u30DC\u30BF\u30F3\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30A8\u30EA\u30A2\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u30DC\u30BF\u30F3\u306A\u3069\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3082\u5909\u6570\u3092\u4F7F\u3063\u3066\u5236\u5FA1\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u307B\u304B\u3001\u4FDD\u5B58\u4E0D\u8981\u306A\u8A08\u7B97\u7D50\u679C\u3092\u8868\u793A\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5909\u6570\u306E\u4F5C\u6210",children:"\u5909\u6570\u306E\u4F5C\u6210"}),"\n",(0,l.jsx)(n.p,{children:'\u5909\u6570\u3092\u4F5C\u6210\u3059\u308B\u306B\u306F\u3001"\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC" \u307E\u305F\u306F "\u914D\u5217" \u30C6\u30FC\u30DE\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u5909\u6570\u3092\u5BA3\u8A00\u3057\u307E\u3059\u3002'}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u914D\u5217\u3068\u306F\u3001\u5909\u6570\u306E\u4E00\u7A2E\u3067\u3059\u3002 \u914D\u5217\u3068\u306F\u3001\u540C\u3058\u30BF\u30A4\u30D7\u306E\u5909\u6570\u3092\u756A\u53F7\u4ED8\u304D\u3067\u4E26\u3079\u305F\u3082\u306E\u3067\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,l.jsx)(n.a,{href:"/docs/ja/18/Concepts/arrays",children:"\u914D\u5217"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u305F\u3068\u3048\u3070\u3001\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3092\u5BA3\u8A00\u3059\u308B\u306B\u306F\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" C_TEXT(myText)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u65B9\u6CD5\u306F\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u304C\u3001\u5358\u7D14\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u5909\u6570\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u3088\u3046\u306B\u3001\u6B63\u5F0F\u306B\u305D\u308C\u3089\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u306F\u5FC5\u9808\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u305F\u3068\u3048\u3070\u3001\u4ECA\u65E5\u306E\u65E5\u4ED8\u306B30\u65E5\u3092\u52A0\u3048\u305F\u65E5\u4ED8\u3092\u4FDD\u6301\u3059\u308B\u5909\u6570\u304C\u5FC5\u8981\u306A\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" MyDate:=Current date+30 // MyDate\u3092\u4F5C\u6210\u3057\u3001\u305D\u3053\u306B30\u65E5\u5F8C\u306E\u65E5\u4ED8\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u3044\u3063\u305F\u3093\u4F5C\u6210\u3055\u308C\u305F\u5909\u6570\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u5FC5\u8981\u3068\u3055\u308C\u308B\u5834\u6240\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3092\u540C\u3058\u30BF\u30A4\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u683C\u7D0D\u3059\u308B\u306B\u306F\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u3044\u304F\u3064\u304B\u306E\u57FA\u672C\u7684\u306A\u5909\u6570\u5BA3\u8A00\u306E\u4F8B\u3067\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\n C_BLOB(vxMyBlob) // \u30D7\u30ED\u30BB\u30B9\u5909\u6570 vxMyBlob \u3092 BLOB\u578B\u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\n C_DATE($vdCurDate) // \u30ED\u30FC\u30AB\u30EB\u5909\u6570 $vdCurDate \u3092\u65E5\u4ED8\u578B\u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\n C_LONGINT(vg1;vg2;vg3) // 3\u3064\u306E\u30D7\u30ED\u30BB\u30B9\u5909\u6570 vg1, vg2, vg3 \u3092\u500D\u9577\u6574\u6570\u578B\u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\n C_OBJECT($vObj) // \u30ED\u30FC\u30AB\u30EB\u5909\u6570 $vObj \u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\n C_COLLECTION($vCol) // \u30ED\u30FC\u30AB\u30EB\u5909\u6570 $vCol \u3092\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u578B\u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\n ARRAY LONGINT(alAnArray;10) // \u30D7\u30ED\u30BB\u30B9\u5909\u6570 alAnArray \u3092 10\u500B\u306E\u500D\u9577\u6574\u6570\u578B\u8981\u7D20\u3092\u6301\u3064\u914D\u5217\u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5909\u6570\u3078\u306E\u4EE3\u5165",children:"\u5909\u6570\u3078\u306E\u4EE3\u5165"}),"\n",(0,l.jsxs)(n.p,{children:["\u5909\u6570\u3092\u5BFE\u8C61\u306B\u3001\u30C7\u30FC\u30BF\u3092\u683C\u7D0D\u3057\u305F\u308A\u3001\u683C\u7D0D\u3057\u305F\u30C7\u30FC\u30BF\u3092\u5225\u306E\u5BFE\u8C61\u306B\u30B3\u30D4\u30FC\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u5909\u6570\u306B\u30C7\u30FC\u30BF\u3092\u683C\u7D0D\u3059\u308B\u3053\u3068\u3092\u3001",(0,l.jsx)(n.strong,{children:"\u5909\u6570\u306B\u30C7\u30FC\u30BF\u3092\u4EE3\u5165\u3059\u308B"}),"\u3068\u8A00\u3044\u3001\u4EE3\u5165\u6F14\u7B97\u5B50 (:=) \u3092\u4F7F\u3063\u3066\u304A\u3053\u306A\u3044\u307E\u3059\u3002 \u4EE3\u5165\u6F14\u7B97\u5B50\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5BFE\u3057\u3066\u30C7\u30FC\u30BF\u3092\u4EE3\u5165\u3059\u308B\u5834\u5408\u306B\u3082\u4F7F\u3044\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4EE3\u5165\u6F14\u7B97\u5B50\u306F\u3001\u5909\u6570\u3092\u4F5C\u6210\u3057\u3001\u5909\u6570\u306B\u30C7\u30FC\u30BF\u3092\u4EE3\u5165\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002 \u4F5C\u6210\u3059\u308B\u5909\u6570\u540D\u3092\u4EE3\u5165\u6F14\u7B97\u5B50\u306E\u5DE6\u5074\u306B\u66F8\u304D\u307E\u3059\u3002 \u4F8B:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u306F\u5909\u6570 ",(0,l.jsx)(n.em,{children:"MyNumber"})," \u3092\u4F5C\u6210\u3057\u3001\u6570\u5024 3\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002 MyNumber \u304C\u65E2\u306B\u5B58\u5728\u3057\u3066\u3044\u308C\u3070\u3001\u305D\u3053\u306B\u6570\u5024 3\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u3082\u3061\u308D\u3093\u3001\u5909\u6570\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u308A\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u306A\u3051\u308C\u3070\u3001\u4FBF\u5229\u3068\u306F\u3044\u3048\u307E\u305B\u3093\u3002 \u518D\u5EA6\u4EE3\u5165\u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 [Products]Size \u3068\u3044\u3046\u30D5\u30A3\u30FC\u30EB\u30C9\u306B ",(0,l.jsx)(n.em,{children:"MyNumber"})," \u5909\u6570\u306E\u5024\u3092\u4EE3\u5165\u3059\u308B\u306B\u306F\u3001\u4EE3\u5165\u6F14\u7B97\u5B50\u306E\u53F3\u5074\u306B MyNumber \u3092\u66F8\u304D\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u308C\u3067\u3001",(0,l.jsx)(n.em,{children:"[Products]Size"})," \u306E\u5024\u306F3\u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u4F8B\u306F\u3068\u3066\u3082\u5358\u7D14\u3067\u3059\u304C\u3001\u3042\u308B\u5834\u6240\u304B\u3089\u5225\u306E\u5834\u6240\u3078\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u3088\u3063\u3066\u30C7\u30FC\u30BF\u3092\u8EE2\u9001\u3055\u305B\u308B\u57FA\u672C\u7684\u306A\u624B\u9806\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u914D\u5217\u8981\u7D20\u306B\u30C7\u30FC\u30BF\u3092\u4EE3\u5165\u3059\u308B\u306B\u306F\u4E2D\u30AB\u30C3\u30B3 ({...}) \u3092\u4F7F\u7528\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u304A\u3088\u3073\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570",children:"\u30ED\u30FC\u30AB\u30EB\u3001\u30D7\u30ED\u30BB\u30B9\u3001\u304A\u3088\u3073\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u30ED\u30FC\u30AB\u30EB"}),"\u3001",(0,l.jsx)(n.strong,{children:"\u30D7\u30ED\u30BB\u30B9"}),"\u3001\u304A\u3088\u3073 ",(0,l.jsx)(n.strong,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9"})," \u3068\u3044\u3046\u30013\u7A2E\u985E\u306E\u5909\u6570\u306E\u5909\u6570\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u5909\u6570\u306E\u9055\u3044\u306F\u4F7F\u7528\u3067\u304D\u308B\u30B9\u30B3\u30FC\u30D7\u306B\u3042\u308A\u307E\u3059\u3002\u307E\u305F\u3001\u305D\u308C\u3089\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3082\u7570\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570",children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u305D\u306E\u540D\u306E\u3068\u304A\u308A\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u30ED\u30FC\u30AB\u30EB\u3067\u3042\u308A\u3001\u5909\u6570\u304C\u4F5C\u6210\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u7BC4\u56F2\u5185\u3067\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3001\u305D\u306E\u4ED6\u306E\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u306F\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093\u3002 \u30E1\u30BD\u30C3\u30C9\u5185\u3067\u30ED\u30FC\u30AB\u30EB\u3067\u3042\u308B\u3068\u3044\u3046\u306E\u306F\u3001\u6B63\u5F0F\u306B\u306F\u300C\u30B9\u30B3\u30FC\u30D7\u304C\u30ED\u30FC\u30AB\u30EB\u3067\u3042\u308B\u300D\u3068\u3044\u3044\u307E\u3059\u3002 \u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u3001\u305D\u306E\u4F7F\u7528\u7BC4\u56F2\u3092\u30E1\u30BD\u30C3\u30C9\u5185\u306B\u9650\u5B9A\u3059\u308B\u305F\u3081\u306B\u7528\u3044\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u76EE\u7684\u306E\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4ED6\u306E\u5909\u6570\u540D\u3068\u306E\u91CD\u8907\u3092\u907F\u3051\u308B\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u3092\u4E00\u6642\u7684\u306B\u4F7F\u7528\u3059\u308B\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u6570\u3092\u6E1B\u3089\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306E\u540D\u524D\u306F\u5FC5\u305A\u30C9\u30EB\u8A18\u53F7 ($) \u3067\u59CB\u3081\u3001\u3053\u306E\u8A18\u53F7\u3092\u9664\u304F31\u6587\u5B57\u307E\u3067\u306E\u6587\u5B57\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u308C\u3088\u308A\u9577\u3044\u540D\u524D\u3092\u6307\u5B9A\u3059\u308B\u3068\u30014D \u306F\u4F59\u5206\u306E32\u6587\u5B57\u4EE5\u964D\u3092\u5207\u308A\u6368\u3066\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u591A\u304F\u306E\u30E1\u30BD\u30C3\u30C9\u3084\u5909\u6570\u3092\u6301\u3064\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u4F5C\u696D\u3059\u308B\u5834\u5408\u3001\u73FE\u5728\u4F5C\u696D\u3057\u3066\u3044\u308B\u30E1\u30BD\u30C3\u30C9\u306E\u7BC4\u56F2\u5185\u3067\u4E00\u6642\u7684\u306B\u5909\u6570\u304C\u5FC5\u8981\u3068\u306A\u308B\u5834\u5408\u304C\u3088\u304F\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u540C\u3058\u5909\u6570\u540D\u304C\u4ED6\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u3044\u304B\u3069\u3046\u304B\u3092\u6C17\u306B\u3059\u308B\u3053\u3068\u306A\u304F\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u3057\u3070\u3057\u3070\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u308B\u5C11\u91CF\u306E\u30C7\u30FC\u30BF\u5165\u529B\u3092\u5FC5\u8981\u3068\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 ",(0,l.jsx)(n.code,{children:"Request"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u3001\u3053\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u5165\u529B\u3092\u6C42\u3081\u308B\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u3001 \u30E6\u30FC\u30B6\u30FC\u304C\u30C7\u30FC\u30BF\u3092\u5165\u529B\u3059\u308B\u3068\u3001\u305D\u306E\u60C5\u5831\u3092\u623B\u308A\u5024\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 \u3053\u306E\u3088\u3046\u306A\u30C7\u30FC\u30BF\u306F\u901A\u5E38\u3001\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u9577\u6642\u9593\u7DAD\u6301\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002 \u3053\u308C\u306F\u3001\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u5178\u578B\u7684\u306A\u4F8B\u3068\u3044\u3048\u307E\u3059\u3002 \u6B21\u306B\u4F8B\u3092\u793A\u3057\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $vsID:=Request("ID \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306B ID \u3092\u5165\u529B\u3059\u308B\u3088\u3046\u306B\u8981\u6C42\u3057\u307E\u3059\u3002 \u30ED\u30FC\u30AB\u30EB\u5909\u6570 $vsID \u306B\u30EC\u30B9\u30DD\u30F3\u30B9\u304C\u4EE3\u5165\u3055\u308C\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u5165\u529B\u3057\u305F ID \u306B\u57FA\u3065\u3044\u305F\u691C\u7D22\u304C\u304A\u3053\u306A\u308F\u308C\u307E\u3059\u3002 \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u7D42\u4E86\u3057\u305F\u6642\u70B9\u3067\u3001$vsID \u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u30E1\u30E2\u30EA\u304B\u3089\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5909\u6570\u306F 1\u56DE\u306E\u307F\u3001\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u3057\u304B\u4F7F\u308F\u308C\u306A\u3044\u305F\u3081\u3001\u3053\u308C\u4EE5\u4E0A\u7DAD\u6301\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," \u30E1\u30BD\u30C3\u30C9\u306B\u6E21\u3055\u308C\u308B $1, $2...\u7B49\u306E\u5F15\u6570\u306F\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3067\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,l.jsx)(n.a,{href:"/docs/ja/18/Concepts/parameters",children:"\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570",children:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306F\u3001\u540C\u3058\u30D7\u30ED\u30BB\u30B9\u306E\u7BC4\u56F2\u5185\u306B\u9650\u308A\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002 \u3053\u306E\u5909\u6570\u306F\u30D7\u30ED\u30BB\u30B9\u30E1\u30BD\u30C3\u30C9\u3068\u3001\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u547C\u3073\u51FA\u3055\u308C\u305F\u4ED6\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306B\u306F\u540D\u524D\u306B\u4ED8\u3051\u308B\u63A5\u982D\u8F9E\u304C\u3042\u308A\u307E\u305B\u3093\u3002 \u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u540D\u524D\u306F\u3001\u6700\u592731\u6587\u5B57\u307E\u3067\u306E\u9577\u3055\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u3067\u306F\u3001\u5909\u6570\u306F\u52D5\u7684\u306B\u30E1\u30E2\u30EA\u4E0A\u306B\u4F5C\u6210\u30FB\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306B\u5BFE\u3057\u3066\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u306F\u3001\u4F5C\u6210\u3057\u305F\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9 (\u30E6\u30FC\u30B6\u30FC\u30D7\u30ED\u30BB\u30B9) \u3067\u540C\u3058\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u5B9A\u7FA9\u304C\u5171\u6709\u3055\u308C\u307E\u3059\u304C\u3001\u5909\u6570\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306F\u30D7\u30ED\u30BB\u30B9\u6BCE\u306B\u7570\u306A\u308B\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001\u30D7\u30ED\u30BB\u30B9P_1 \u3068\u30D7\u30ED\u30BB\u30B9P_2 \u306E\u4E21\u65B9\u306B\u304A\u3044\u3066\u30D7\u30ED\u30BB\u30B9\u5909\u6570 myVar \u304C\u5B58\u5728\u3057\u3066\u3044\u3066\u3082\u3001\u305D\u308C\u3089\u306F\u305D\u308C\u305E\u308C\u5225\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3067\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u30D0\u30FC\u30B8\u30E7\u30F36\u3088\u308A\u3001",(0,l.jsx)(n.code,{children:"GET PROCESS VARIABLE"})," \u3084 ",(0,l.jsx)(n.code,{children:"SET PROCESS VARIABLE"})," \u3092\u4F7F\u7528\u3057\u3066\u3001\u3042\u308B\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u5024\u3092\u53D6\u5F97\u3057\u305F\u308A\u3001\u8A2D\u5B9A\u3057\u305F\u308A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002 \u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u5229\u7528\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u72B6\u6CC1\u306B\u9650\u5B9A\u3059\u308B\u3053\u3068\u304C\u3001\u826F\u3044\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u4F5C\u6CD5\u3067\u3059:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30B3\u30FC\u30C9\u5185\u306E\u7279\u5B9A\u306E\u7B87\u6240\u306B\u304A\u3051\u308B\u30D7\u30ED\u30BB\u30B9\u9593\u901A\u4FE1"}),"\n",(0,l.jsx)(n.li,{children:"\u30D7\u30ED\u30BB\u30B9\u9593\u306E\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u51E6\u7406"}),"\n",(0,l.jsx)(n.li,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u306B\u304A\u3044\u3066\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u4E0A\u306E\u30D7\u30ED\u30BB\u30B9\u3068\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u4E0A\u306E\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC\u9593\u306E\u901A\u4FE1"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,l.jsx)(n.strong,{children:"\u30D7\u30ED\u30BB\u30B9"})," \u306E\u7AE0\u3068\u3001\u5404\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570",children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570"}),"\n",(0,l.jsx)(n.p,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u5168\u4F53\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u3059\u3079\u3066\u306E\u30B3\u30AA\u30DA\u30E9\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u3067\u5171\u6709\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306F\u4E3B\u3068\u3057\u3066\u30D7\u30ED\u30BB\u30B9\u9593\u3067\u60C5\u5831\u3092\u5171\u6709\u3059\u308B\u305F\u3081\u306B\u4F7F\u308F\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u306F\u4F7F\u7528\u3067\u304D\u306A\u3044\u3053\u3068\u3068\u3001\u30B3\u30FC\u30C9\u306E\u4FDD\u5B88\u7BA1\u7406\u3092\u7169\u96D1\u306B\u3059\u308B\u3053\u3068\u304B\u3089\u3001\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u4F7F\u7528\u306F\u63A8\u5968\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u540D\u524D\u306F\u3001\u5FC5\u305A\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u8A18\u53F7 (",(0,l.jsx)(n.code,{children:"<>"}),") \u3067\u59CB\u3081\u307E\u3059\u3002\u8A18\u53F7\u306E\u5F8C\u306B31\u30D0\u30A4\u30C8\u307E\u3067\u306E\u540D\u524D\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u3067\u306F\u3001\u5404\u30DE\u30B7\u30F3 (\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u3068\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3) \u3067\u540C\u3058\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u5B9A\u7FA9\u3092\u5171\u6709\u3057\u307E\u3059\u304C\u3001\u30DE\u30B7\u30F3\u3054\u3068\u306B\u5404\u5909\u6570\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304C\u5B58\u5728\u3057\u307E\u3059\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let l={},c=r.createContext(l);function i(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);