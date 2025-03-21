"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58082"],{973297:function(n,e,B){B.r(e),B.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>i,contentTitle:()=>s});var o=JSON.parse('{"id":"Concepts/blob","title":"BLOB","description":"BLOB (Binary Large OBjects) \u30D5\u30A3\u30FC\u30EB\u30C9\u30FB\u5909\u6570\u30FB\u5F0F\u3068\u306F\u3001\u9023\u7D9A\u3057\u305F\u53EF\u5909\u9577\u30D0\u30A4\u30C8\u3067\u3042\u308A\u3001\u5404\u30D0\u30A4\u30C8\u3092\u500B\u3005\u306B\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306A 1\u3064\u306E\u307E\u3068\u307E\u3063\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u53D6\u308A\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B BLOB \u306E\u30B5\u30A4\u30BA\u306F\u7A7A (\u9577\u3055\u304CNULL) \u304B\u3089\u3001\u6700\u5927 2,147,483,647 \u30D0\u30A4\u30C8 (2GB) \u307E\u3067\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Concepts/dt_blob.md","sourceDirName":"Concepts","slug":"/Concepts/blob","permalink":"/docs/ja/19/Concepts/blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"blob","title":"BLOB"},"sidebar":"docs","previous":{"title":"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u6982\u8981","permalink":"/docs/ja/19/Concepts/data-types"},"next":{"title":"Boolean","permalink":"/docs/ja/19/Concepts/boolean"}}'),t=B("785893"),l=B("250065");let r={id:"blob",title:"BLOB"},s=void 0,c={},i=[{value:"\u5F15\u6570\u6E21\u3057\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u304A\u3088\u3073\u623B\u308A\u5024",id:"\u5F15\u6570\u6E21\u3057\u30DD\u30A4\u30F3\u30BF\u30FC\u304A\u3088\u3073\u623B\u308A\u5024",level:2},{value:"\u4EE3\u5165",id:"\u4EE3\u5165",level:2},{value:"BLOB \u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A",id:"blob-\u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A",level:2}];function d(n){let e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"BLOB (Binary Large OBjects) \u30D5\u30A3\u30FC\u30EB\u30C9\u30FB\u5909\u6570\u30FB\u5F0F\u3068\u306F\u3001\u9023\u7D9A\u3057\u305F\u53EF\u5909\u9577\u30D0\u30A4\u30C8\u3067\u3042\u308A\u3001\u5404\u30D0\u30A4\u30C8\u3092\u500B\u3005\u306B\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u53EF\u80FD\u306A 1\u3064\u306E\u307E\u3068\u307E\u3063\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u53D6\u308A\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B BLOB \u306E\u30B5\u30A4\u30BA\u306F\u7A7A (\u9577\u3055\u304CNULL) \u304B\u3089\u3001\u6700\u5927 2,147,483,647 \u30D0\u30A4\u30C8 (2GB) \u307E\u3067\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30014D \u306F BLOB \u306E\u6700\u5927\u30B5\u30A4\u30BA\u3092 2GB \u306B\u8A2D\u5B9A\u3057\u3066\u3044\u307E\u3059\u304C\u3001OS \u3084\u7A7A\u304D\u5BB9\u91CF\u306B\u3088\u3063\u3066\u306F\u3001\u3053\u306E\u5236\u9650\u30B5\u30A4\u30BA\u304C\u5C0F\u3055\u304F\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"BLOB \u306F\u5168\u4F53\u304C\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002 BLOB \u5909\u6570\u306F\u30E1\u30E2\u30EA\u5185\u306B\u3060\u3051\u4FDD\u6301\u3055\u308C\u3001\u5B58\u5728\u3057\u307E\u3059\u3002 BLOB \u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u306E\u4ED6\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u540C\u69D8\u306B\u3001\u30C7\u30A3\u30B9\u30AF\u304B\u3089\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5927\u91CF\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u6301\u3067\u304D\u308B\u4ED6\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7 (\u30D4\u30AF\u30C1\u30E3\u30FC\u306A\u3069) \u3068\u540C\u69D8\u306B\u3001\u30EC\u30B3\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u3066\u3082BLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u30E1\u30E2\u30EA\u306B\u8907\u88FD\u3055\u308C\u307E\u305B\u3093\u3002 \u3057\u305F\u304C\u3063\u3066\u3001",(0,t.jsx)(e.code,{children:"Old"})," \u304A\u3088\u3073 ",(0,t.jsx)(e.code,{children:"Modified"})," \u30B3\u30DE\u30F3\u30C9\u3092BLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u9069\u7528\u3057\u3066\u3082\u3001\u8FD4\u3055\u308C\u308B\u7D50\u679C\u306F\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u5F15\u6570\u6E21\u3057\u30DD\u30A4\u30F3\u30BF\u30FC\u304A\u3088\u3073\u623B\u308A\u5024",children:"\u5F15\u6570\u6E21\u3057\u3001\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u304A\u3088\u3073\u623B\u308A\u5024"}),"\n",(0,t.jsx)(e.p,{children:"4D \u306E BLOB \u306F\u30014D \u30B3\u30DE\u30F3\u30C9\u307E\u305F\u306F 4D \u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u5F15\u6570\u3068\u3057\u3066\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001BLOB \u306F\u30E6\u30FC\u30B6\u30FC\u30E1\u30BD\u30C3\u30C9\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u6E21\u3057\u305F\u308A\u3001\u95A2\u6570\u306E\u623B\u308A\u5024\u306B\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3057\u3066\u3001BLOB \u3092\u30E1\u30BD\u30C3\u30C9\u306B\u6E21\u3059\u3053\u3068\u3082\u51FA\u6765\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u306F BLOB \u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u5B9A\u7FA9\u3057\u3001\u305D\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.p,{children:"**\u4F8B: **"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"  // BLOB \u30BF\u30A4\u30D7\u306E\u5909\u6570\u3092\u5B9A\u7FA9\u3057\u307E\u3059\n C_BLOB(anyBlobVar)\n\n// 4D\u30B3\u30DE\u30F3\u30C9\u306B\u5F15\u6570\u3068\u3057\u3066 BLOB \u3092\u6E21\u3057\u307E\u3059\n SET BLOB SIZE(anyBlobVar;1024*1024)\n\n// \u30D7\u30E9\u30B0\u30A4\u30F3\u306B BLOB \u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u307E\u3059\n $errCode:=Do Something With This BLOB(anyBlobVar)\n\n// BLOB \u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u3001\u623B\u308A\u5024\u3092BLOB\u3067\u53D7\u3051\u53D6\u308A\u307E\u3059\n C_BLOB(retrieveBlob)\n retrieveBlob:=Fill_Blob(anyBlobVar)\n\n// BLOB \u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u30E1\u30BD\u30C3\u30C9\u306B\u6E21\u3057\u307E\u3059\n COMPUTE BLOB(->anyBlobVar)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u30D7\u30E9\u30B0\u30A4\u30F3\u958B\u767A\u306B\u3042\u305F\u3063\u3066\u306E\u6CE8\u610F:"}),' BLOB \u5F15\u6570\u306F \u201C&O\u201D (\u6570\u5B57\u306E0\u3067\u306F\u306A\u304F\u3001\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306E"O") \u3068\u3057\u3066\u5BA3\u8A00\u3057\u307E\u3059\u3002']}),"\n",(0,t.jsx)(e.h2,{id:"\u4EE3\u5165",children:"\u4EE3\u5165"}),"\n",(0,t.jsx)(e.p,{children:"BLOB \u306F\u76F8\u4E92\u306B\u4EE3\u5165\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.p,{children:"**\u4F8B: **"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"  // BLOB \u578B\u306E\u5909\u6570\u3092\u4E8C\u3064\u5BA3\u8A00\u3057\u307E\u3059\n C_BLOB(vBlobA;vBlobB)\n// \u4E00\u3064\u76EE\u306E BLOB \u306B10K \u306E\u30B5\u30A4\u30BA\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\n SET BLOB SIZE(vBlobA;10*1024)\n// \u4E00\u3064\u76EE\u306E BLOB \u3092\u4E8C\u3064\u76EE\u306E BLOB \u306B\u4EE3\u5165\u3057\u307E\u3059\n vBlobB:=vBlobA\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u305F\u3060\u3057\u3001BLOB \u306B\u6F14\u7B97\u5B50\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"blob-\u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A",children:"BLOB \u306E\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A"}),"\n",(0,t.jsx)(e.p,{children:"\u4E2D\u30AB\u30C3\u30B3 {...} \u3092\u4F7F\u7528\u3057\u3001BLOB \u306E\u5404\u30D0\u30A4\u30C8\u3092\u500B\u5225\u306B\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 BLOB \u5185\u3067\u306F\u3001\u5404\u30D0\u30A4\u30C8\u306B 0 \u304B\u3089 N-1 \u306E\u756A\u53F7\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u307E\u3059\u3002N \u306F BLOB \u306E\u30B5\u30A4\u30BA\u3067\u3059\u3002 \u4F8B:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"  // BLOB \u3092\u5B9A\u7FA9\u3057\u307E\u3059\n C_BLOB(vBlob)\n// BLOB \u306E\u30B5\u30A4\u30BA\u3092 256\u30D0\u30A4\u30C8\u306B\u8A2D\u5B9A\u3057\u307E\u3059\n SET BLOB SIZE(vBlob;256)\n// \u6B21\u306E\u30EB\u30FC\u30D7\u306F\u3001BLOB \u306E 256\u30D0\u30A4\u30C8\u3092\u30BC\u30ED\u306B\u521D\u671F\u5316\u3057\u307E\u3059\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n"})}),"\n",(0,t.jsx)(e.p,{children:"BLOB \u306E\u5404\u30D0\u30A4\u30C8\u306F\u3059\u3079\u3066\u500B\u5225\u306B\u30A2\u30C9\u30EC\u30B9\u6307\u5B9A\u3067\u304D\u308B\u305F\u3081\u3001BLOB \u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306B\u306F\u5B9F\u969B\u306E\u3068\u3053\u308D\u4F55\u3067\u3082\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002"})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,B){B.d(e,{Z:function(){return s},a:function(){return r}});var o=B(667294);let t={},l=o.createContext(t);function r(n){let e=o.useContext(l);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);