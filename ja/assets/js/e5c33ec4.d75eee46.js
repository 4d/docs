"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30545"],{327820:function(n,e,d){d.r(e),d.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>j,assets:()=>c,toc:()=>h,frontMatter:()=>i});var r=JSON.parse('{"id":"Admin/data-collect","title":"\u30C7\u30FC\u30BF\u53CE\u96C6","description":"4D\u88FD\u54C1\u3092\u6539\u5584\u3057\u7D9A\u3051\u308B\u305F\u3081\u306B\u3001\u5B9F\u884C\u4E2D\u306E 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F7F\u7528\u72B6\u6CC1\u30C7\u30FC\u30BF\u3092\u81EA\u52D5\u7684\u306B\u53CE\u96C6\u3057\u307E\u3059\u3002 \u53CE\u96C6\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306F\u5B8C\u5168\u306B\u533F\u540D\u3067\u3001\u30C7\u30FC\u30BF\u53CE\u96C6\u304C\u30E6\u30FC\u30B6\u30FC\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Admin/data-collect.md","sourceDirName":"Admin","slug":"/Admin/data-collect","permalink":"/docs/ja/Admin/data-collect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"data-collect","title":"\u30C7\u30FC\u30BF\u53CE\u96C6"},"sidebar":"docs","previous":{"title":"\u5FA9\u5143","permalink":"/docs/ja/Backup/restore"},"next":{"title":"\u62E1\u5F35\u6A5F\u80FD","permalink":"/docs/ja/Extensions/overview"}}'),s=d("785893"),t=d("250065");let i={id:"data-collect",title:"\u30C7\u30FC\u30BF\u53CE\u96C6"},l=void 0,c={},h=[{value:"\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:2},{value:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"Web\u30B5\u30FC\u30D0\u30FC\u8D77\u52D5\u6642\u3001\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"web\u30B5\u30FC\u30D0\u30FC\u8D77\u52D5\u6642\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"\u4E00\u5B9A\u6642\u9593\u3054\u3068\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"\u4E00\u5B9A\u6642\u9593\u3054\u3068\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u7D42\u4E86\u6642\u3001\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u7D42\u4E86\u6642\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"PHP execute \u306E\u547C\u3073\u51FA\u3057\u6BCE\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"php-execute-\u306E\u547C\u3073\u51FA\u3057\u6BCE\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",level:3},{value:"\u4FDD\u5B58\u5148\u3068\u9001\u4FE1\u5148",id:"\u4FDD\u5B58\u5148\u3068\u9001\u4FE1\u5148",level:2},{value:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u81EA\u52D5\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B",id:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u81EA\u52D5\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B",level:2}];function x(n){let e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"4D\u88FD\u54C1\u3092\u6539\u5584\u3057\u7D9A\u3051\u308B\u305F\u3081\u306B\u3001\u5B9F\u884C\u4E2D\u306E 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F7F\u7528\u72B6\u6CC1\u30C7\u30FC\u30BF\u3092\u81EA\u52D5\u7684\u306B\u53CE\u96C6\u3057\u307E\u3059\u3002 \u53CE\u96C6\u3055\u308C\u308B\u30C7\u30FC\u30BF\u306F\u5B8C\u5168\u306B\u533F\u540D\u3067\u3001\u30C7\u30FC\u30BF\u53CE\u96C6\u304C\u30E6\u30FC\u30B6\u30FC\u30A8\u30AF\u30B9\u30DA\u30EA\u30A8\u30F3\u30B9\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306E\u30DA\u30FC\u30B8\u306F\u4EE5\u4E0B\u3092\u8AAC\u660E\u3057\u307E\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u3069\u306E\u3088\u3046\u306A\u60C5\u5831\u304C\u53CE\u96C6\u3055\u308C\u308B\u304B"}),"\n",(0,s.jsx)(e.li,{children:"\u3069\u3053\u306B\u60C5\u5831\u304C\u4FDD\u5B58\u3055\u308C\u3001\u3044\u3064 4D\u306B\u9001\u4FE1\u3055\u308C\u308B\u304B"}),"\n",(0,s.jsx)(e.li,{children:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u81EA\u52D5\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B\u65B9\u6CD5\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30A4\u30D9\u30F3\u30C8\u4E2D\u306B\u30C7\u30FC\u30BF\u304C\u53CE\u96C6\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u958B\u304B\u308C\u308B"}),"\n",(0,s.jsx)(e.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u9589\u3058\u3089\u308C\u308B"}),"\n",(0,s.jsx)(e.li,{children:"Web\u30B5\u30FC\u30D0\u30FC\u304C\u8D77\u52D5\u3055\u308C\u308B"}),"\n",(0,s.jsx)(e.li,{children:"php\u5B9F\u884C"}),"\n",(0,s.jsx)(e.li,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u63A5\u7D9A\u3055\u308C\u308B"}),"\n",(0,s.jsx)(e.li,{children:"\u53CE\u96C6\u30C7\u30FC\u30BF\u304C\u9001\u4FE1\u3055\u308C\u308B"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u307E\u305F\u3001\u4E00\u90E8\u306E\u30C7\u30FC\u30BF\u306F\u4E00\u5B9A\u6642\u9593\u3054\u3068\u306B\u53CE\u96C6\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8D77\u52D5\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"CPU"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u30D7\u30ED\u30BB\u30C3\u30B5\u30FC\u306E\u540D\u524D\u3001\u7A2E\u985E\u3001\u304A\u3088\u3073\u901F\u5EA6"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"numberOfCores"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30B3\u30A2\u306E\u5408\u8A08\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"memory"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30DE\u30B7\u30F3\u4E0A\u3067\u5229\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u5BB9\u91CF (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"system"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"OS \u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3068\u30D3\u30EB\u30C9\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"headless"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30D8\u30C3\u30C9\u30EC\u30B9\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"version"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"buildNumber"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D3\u30EB\u30C9\u756A\u53F7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"license"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u88FD\u54C1\u30E9\u30A4\u30BB\u30F3\u30B9\u306E\u540D\u79F0\u3068\u8AAC\u660E"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"isRosetta"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"macOS \u306E Rosetta \u3067 4D \u304C\u30A8\u30DF\u30E5\u30EC\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F True\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F False (\u30A8\u30DF\u30E5\u30EC\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u3001\u307E\u305F\u306F Windows \u306E\u5834\u5408)\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uniqueID"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"4D Server \u306E\u56FA\u6709ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"id"}),(0,s.jsx)(e.td,{children:"Text (\u30CF\u30C3\u30B7\u30E5\u6587\u5B57\u5217)"}),(0,s.jsxs)(e.td,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u4E00\u610F\u306E id (",(0,s.jsx)(e.em,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u540D\u306E\u591A\u9805\u5F0F\u30ED\u30FC\u30EA\u30F3\u30B0\u30CF\u30C3\u30B7\u30E5"}),")"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataFileSize"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexesSize"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u30B5\u30A4\u30BA (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cacheSize"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30B5\u30A4\u30BA (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usingLegacyNetworkLayer"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306B\u65E7\u5F0F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"usingQUICNetworkLayer"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C QUIC\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30EC\u30A4\u30E4\u30FC\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"encryptedConnections"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u304C\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"encrypted"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304C\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u308C\u3070 true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"compiled"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u306E\u5834\u5408\u306F true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"isEngined"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B 4D Volume Desltop \u304C\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u306F true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"projectMode"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u306F true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"mobile"}),(0,s.jsx)(e.td,{children:"Collection"}),(0,s.jsx)(e.td,{children:"\u30E2\u30D0\u30A4\u30EB\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u3059\u308B\u60C5\u5831"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"web\u30B5\u30FC\u30D0\u30FC\u8D77\u52D5\u6642\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"Web\u30B5\u30FC\u30D0\u30FC\u8D77\u52D5\u6642\u3001\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"webServer"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:'Web\u30B5\u30FC\u30D0\u30FC\u304C\u8D77\u52D5\u4E2D\u3001\u307E\u305F\u306F\u8D77\u52D5\u6E08\u307F\u306E\u5834\u5408\u306F "started":true'})]})})]}),"\n",(0,s.jsx)(e.h3,{id:"\u4E00\u5B9A\u6642\u9593\u3054\u3068\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"\u4E00\u5B9A\u6642\u9593\u3054\u3068\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maximumNumberOfWebProcesses"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u6700\u5927\u540C\u6642Web\u30D7\u30ED\u30BB\u30B9\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maximumUsedPhysicalMemory"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u6700\u5927\u4F7F\u7528\u3057\u305F\u7269\u7406\u30E1\u30E2\u30EA"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maximumUsedVirtualMemory"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u6700\u5927\u4F7F\u7528\u3057\u305F\u4EEE\u60F3\u30E1\u30E2\u30EA"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"uptime"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30ED\u30FC\u30AB\u30EB4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u958B\u304B\u308C\u3066\u304B\u3089\u306E\u7D4C\u904E\u6642\u9593 (\u79D2\u5358\u4F4D)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cacheReadBytes"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u304B\u3089\u8AAD\u307F\u51FA\u3057\u305F\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cacheMissBytes"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u30DF\u30B9\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cacheReadCount"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u8AAD\u307F\u51FA\u3057\u56DE\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"cacheMissCount"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u30DF\u30B9\u56DE\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataSegment1.diskReadBytes"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8AAD\u307F\u53D6\u3063\u305F\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataSegment1.diskWriteBytes"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u8FBC\u3093\u3060\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataSegment1.diskReadCount"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u306E\u8AAD\u307F\u53D6\u308A\u56DE\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"dataSegment1.diskWriteCount"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u66F8\u304D\u8FBC\u307F\u56DE\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexSegment.diskReadBytes"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u8AAD\u307F\u53D6\u3063\u305F\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexSegment.diskWriteBytes"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u8FBC\u3093\u3060\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexSegment.diskReadCount"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u306E\u8AAD\u307F\u53D6\u308A\u56DE\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"indexSegment.diskWriteCount"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u66F8\u304D\u8FBC\u307F\u56DE\u6570"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u7D42\u4E86\u6642\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u7D42\u4E86\u6642\u3001\u53CE\u96C6\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"webserverHits"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u53CE\u96C6\u4E2D\u306E Web\u30B5\u30FC\u30D0\u30FC\u306E\u30D2\u30C3\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"restHits"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u53CE\u96C6\u4E2D\u306E REST\u30B5\u30FC\u30D0\u30FC\u306E\u30D2\u30C3\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"webserverBytesIn"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u53CE\u96C6\u4E2D\u306B Web\u30B5\u30FC\u30D0\u30FC\u304C\u53D7\u4FE1\u3057\u305F\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"webserverBytesOut"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u53CE\u96C6\u4E2D\u306B Web\u30B5\u30FC\u30D0\u30FC\u304C\u9001\u4FE1\u3057\u305F\u30D0\u30A4\u30C8\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"qodly.webforms"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"Qodly Web\u30D5\u30A9\u30FC\u30E0\u306E\u6570"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"php-execute-\u306E\u547C\u3073\u51FA\u3057\u6BCE\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"PHP execute \u306E\u547C\u3073\u51FA\u3057\u6BCE\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"phpCall"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"PHP execute"})," \u306E\u547C\u3073\u51FA\u3057\u56DE\u6570"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"externalPHP"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsxs)(e.td,{children:["\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C ",(0,s.jsx)(e.code,{children:"PHP execute"})," \u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u72EC\u81EA\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306E php \u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u306F True\u3002"]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831",children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u6642\u306B\u53CE\u96C6\u3055\u308C\u308B\u60C5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30C7\u30FC\u30BF"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u6CE8\u8A18"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maximum4DClientConnections"}),(0,s.jsx)(e.td,{children:"Number"}),(0,s.jsx)(e.td,{children:"\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u6700\u5927\u63A5\u7D9A\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"connectionSystems"}),(0,s.jsx)(e.td,{children:"Collection"}),(0,s.jsx)(e.td,{children:"\u30D3\u30EB\u30C9\u756A\u53F7 (\u62EC\u5F27\u5185) \u306A\u3057\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8OS\u3068\u3001\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u6570"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u4FDD\u5B58\u5148\u3068\u9001\u4FE1\u5148",children:"\u4FDD\u5B58\u5148\u3068\u9001\u4FE1\u5148"}),"\n",(0,s.jsxs)(e.p,{children:["\u53CE\u96C6\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306F\u30014D Server \u306E\u7D42\u4E86\u6642\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u6BCE\u306B\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB (JSON\u5F62\u5F0F) \u306B\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page485.html",children:"Active 4D Folder"})," \u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002 \u3064\u307E\u308A:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Windows: ",(0,s.jsx)(e.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D Server"})]}),"\n",(0,s.jsxs)(e.li,{children:["macOS: ",(0,s.jsx)(e.code,{children:"/Users/[userName]/Library/ApplicationSupport/4D Server"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9031\u306B\u4E00\u5EA6\u3001\u30D5\u30A1\u30A4\u30EB\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u7D4C\u7531\u3067\u81EA\u52D5\u7684\u306B 4D \u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002 \u305D\u306E\u5F8C\u3001\u30D5\u30A1\u30A4\u30EB\u306F Active 4D Folder \u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:d(786790).Z+"",width:"1261",height:"398"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u4F55\u3089\u304B\u306E\u7406\u7531\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u9001\u4FE1\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408\u3067\u3082\u3001\u30D5\u30A1\u30A4\u30EB\u306F\u524A\u9664\u3055\u308C\u30014D Server \u306B\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u6B21\u306E\u30B5\u30FC\u30D0\u30FC\u30A2\u30C9\u30EC\u30B9\u306B\u9001\u4FE1\u3055\u308C\u307E\u3059: ",(0,s.jsx)(e.code,{children:"https://dcollector.4d.com"})," (ip: 195.68.52.83)\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u81EA\u52D5\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B",children:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u81EA\u52D5\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/Desktop/building#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%9A%E3%83%BC%E3%82%B8",children:"\u30D3\u30EB\u30C9\u3055\u308C\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"})," \u3067\u3001\u81EA\u52D5\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30C7\u30FC\u30BF\u53CE\u96C6\u3092\u7121\u52B9\u306B\u3059\u308B\u306B\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30D3\u30EB\u30C9\u306B\u4F7F\u7528\u3059\u308B ",(0,s.jsx)(e.code,{children:"buildApp.4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u5185\u306E ",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.ja.html",children:(0,s.jsx)(e.code,{children:"ServerDataCollection"})})," \u30AD\u30FC\u306B\u5024 ",(0,s.jsx)(e.strong,{children:"False"})," \u3092\u6E21\u3057\u307E\u3059\u3002"]})]})}function j(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},786790:function(n,e,d){d.d(e,{Z:function(){return r}});let r=d.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return i}});var r=d(667294);let s={},t=r.createContext(s);function i(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);