"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72128"],{438912:function(e,n,c){c.r(n),c.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/blob-to-picture","title":"BLOB TO PICTURE","description":"BLOB TO PICTURE ( pictureBlob ; picture {; codec} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-picture.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-picture","permalink":"/docs/ja/20-R7/commands/blob-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-picture","title":"BLOB TO PICTURE","slug":"/commands/blob-to-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"\u30D4\u30AF\u30C1\u30E3\u30FC","permalink":"/docs/ja/20-R7/commands/theme/Pictures"},"next":{"title":"COMBINE PICTURES","permalink":"/docs/ja/20-R7/commands/combine-pictures"}}'),d=c("785893"),t=c("250065");let r={id:"blob-to-picture",title:"BLOB TO PICTURE",slug:"/commands/blob-to-picture",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"BLOB TO PICTURE"})," ( ",(0,d.jsx)(n.em,{children:"pictureBlob"})," ; ",(0,d.jsx)(n.em,{children:"picture"})," {; ",(0,d.jsx)(n.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pictureBlob"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3\u3092\u683C\u7D0D\u3057\u305FBLOB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"picture"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"BLOB\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u30D4\u30AF\u30C1\u30E3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"codec"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3codec ID"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"BLOB TO PICTURE \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5143\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u95A2\u308F\u3089\u305A\u3001BLOB\u306B\u683C\u7D0D\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u30924D\u306E\u30D4\u30AF\u30C1\u30E3\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u633F\u5165\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/read-picture-file",children:"READ PICTURE FILE"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u69D8\u3067\u3059\u304C\u3001\u30D5\u30A1\u30A4\u30EB\u3067\u306F\u306A\u304FBLOB\u306B\u5BFE\u3057\u3066\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30CD\u30A4\u30C6\u30A3\u30D6\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067BLOB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u30D4\u30AF\u30C1\u30E3\u3092\u8868\u793A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30D4\u30AF\u30C1\u30E3\u306EBLOB\u3078\u306E\u30ED\u30FC\u30C9\u306F\u3001\u4F8B\u3048\u3070 ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/document-to-blob",children:"DOCUMENT TO BLOB"})," \u3042\u308B\u3044\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-to-blob",children:"PICTURE TO BLOB"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"pictureBlob"}),"\u5F15\u6570\u306B\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u3092\u7D0D\u3081\u305FBLOB\u30BF\u30A4\u30D7\u306E\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u30D4\u30AF\u30C1\u30E3\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F4D\u304C\u30CD\u30A4\u30C6\u30A3\u30D6\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3082\u306E\u3067\u3042\u308C\u3070\u3044\u305A\u308C\u306E\u5F62\u5F0F\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002 ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u4EFB\u610F\u306E",(0,d.jsx)(n.em,{children:"codec"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u30014D\u306F\u3053\u306E\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u5024\u3092\u4F7F\u7528\u3057\u3066BLOB\u3092\u30C7\u30B3\u30FC\u30C9\u3057\u307E\u3059 (\u3053\u306E3\u756A\u76EE\u306E\u5F15\u6570\u3092\u4F7F\u7528\u3057\u305F\u7279\u5225\u306A\u6A5F\u80FD\u306B\u3064\u3044\u3066\u306F\u5F8C\u8FF0\u306E\u8AAC\u660E\u3092\u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"picture"})," \u5F15\u6570\u306B\u306F\u30D4\u30AF\u30C1\u30E3\u3092\u8868\u793A\u3059\u308B4D\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u5185\u90E8\u7684\u306A\u30D4\u30AF\u30C1\u30E3\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F4D\u306E\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u3001BLOB\u304C\u6B63\u3057\u304F\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u308B\u3068\u3001",(0,d.jsx)(n.em,{children:"picture"})," \u5F15\u6570\u306B\u306F\u8868\u793A\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(n.em,{children:"codec"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001BLOB\u306E\u30C7\u30B3\u30FC\u30C9\u65B9\u6CD5\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"codec"}),"\u306B4D\u304C\u8A8D\u8B58\u3059\u308B (",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-codec-list",title:"PICTURE CODEC LIST",children:"PICTURE CODEC LIST"})," \u30B3\u30DE\u30F3\u30C9\u304B\u3089\u8FD4\u3055\u308C\u308B) codec\u3092\u6E21\u3059\u3068\u3001\u305D\u308C\u306FBLOB\u3068\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u306B\u8FD4\u3055\u308C\u308B\u30D4\u30AF\u30C1\u30E3\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"codec"}),"\u306B4D\u304C\u8A8D\u8B58\u3067\u304D\u306A\u3044codec\u3092\u6E21\u3059\u3068\u3001\u65B0\u3057\u3044codec\u304C\u52D5\u7684\u306B\u5F15\u6570\u306B\u6E21\u3057\u305FID\u3067\u8A18\u9332\u3055\u308C\u307E\u3059\u3002\u305D\u3057\u30664D\u306FBLOB\u3092\u30AB\u30D7\u30BB\u30EB\u5316\u3057\u305F\u30D4\u30AF\u30C1\u30E3\u3092\u8FD4\u3057\u3001OK\u5909\u6570\u306B1\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408BLOB\u3092\u53D6\u308A\u51FA\u3059\u306B\u306F\u3001\u540C\u3058\u30AB\u30B9\u30BF\u30E0ID\u3092\u4F7F\u7528\u3057\u3066",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-to-blob",title:"PICTURE TO BLOB",children:"PICTURE TO BLOB"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u7279\u5225\u306A\u30E1\u30AB\u30CB\u30BA\u30E0\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A2\u3064\u306E\u7279\u5B9A\u306E\u30CB\u30FC\u30BA\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059*:*"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30D4\u30AF\u30C1\u30E3\u3067\u306A\u3044BLOB\u3092\u30AB\u30D7\u30BB\u30EB\u5316\u3057\u3066\u30D4\u30AF\u30C1\u30E3\u306B\u683C\u7D0D\u3059\u308B"}),"\n",(0,d.jsx)(n.li,{children:"codec\u3092\u4F7F\u7528\u305B\u305A\u306B\u30D4\u30AF\u30C1\u30E3\u3092\u30ED\u30FC\u30C9\u3059\u308B"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053 \u308C\u3089\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306E\u5B9F\u88C5\u306F\u7279\u306B\u3001\u30D4\u30AF\u30C1\u30E3\u914D\u5217\u3092\u4F7F\u7528\u3057\u305FBLOB\u914D\u5217\u306E\u4F5C\u6210\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002\u914D\u5217\u306F\u5168\u4F53\u304C\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u308B\u305F\u3081\u3001\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306F\u6CE8\u610F \u3057\u3066\u4F7F\u7528\u3055\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u5927\u304D\u306A\u30B5\u30A4\u30BA\u306EBLOB\u3067\u4F5C\u696D\u3092\u884C\u3046\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u52D5\u4F5C\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),' \u30B3\u30DE\u30F3\u30C9\u3067\u4F5C\u6210\u3055\u308C\u305FBLOB\u306F\u81EA\u52D5\u3067\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002BLOB\u306F\u7F72\u540D\u3055\u308C\u308B\u305F\u3081\u3001\u30AB\u30D7\u30BB\u30EB\u5316\u3059\u308B\u305F\u3081\u306Bcodec\u3092\u6E21\u3059\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u53CD\u5BFE\u306E\u64CD\u4F5C\u306B\u306Fcodec ID\u3068\u3057\u3066".4DVarBlob"\u3092 ',(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-to-blob",children:"PICTURE TO BLOB"})," \u30B3\u30DE\u30F3\u30C9\u306B\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u5909\u63DB\u306B\u5931\u6557 (QuickTime\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u306A\u3044\u3001Blob\u306B\u8AAD\u307F\u53D6\u308A\u53EF\u80FD\u306A\u30D4\u30AF\u30C1\u30E3\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u306A\u3044\u3001codec\u5F15\u6570\u3092\u8A8D\u8B58\u3067\u304D\u305F\u304CBlob\u304C\u6709\u52B9\u3067\u306A\u3044\u306A\u3069) \u3057\u305F\u5834\u5408\u3001OK\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u30014D\u306E\u30D4\u30AF\u30C1\u30E3\u5909\u6570\u3084\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u7A7A\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/read-picture-file",children:"READ PICTURE FILE"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"682"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return i},a:function(){return r}});var s=c(667294);let d={},t=s.createContext(d);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);