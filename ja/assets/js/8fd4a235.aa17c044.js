"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5272"],{150337:function(n,s,e){e.r(s),e.d(s,{metadata:()=>i,contentTitle:()=>c,default:()=>o,assets:()=>l,toc:()=>a,frontMatter:()=>d});var i=JSON.parse('{"id":"commands-legacy/compare-strings","title":"Compare strings","description":"Compare strings ( aString ; bString {; options} ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/compare-strings.md","sourceDirName":"commands-legacy","slug":"/commands/compare-strings","permalink":"/docs/ja/commands/compare-strings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompare-strings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compare-strings","title":"Compare strings","slug":"/commands/compare-strings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Character code","permalink":"/docs/ja/commands/character-code"},"next":{"title":"CONVERT FROM TEXT","permalink":"/docs/ja/commands/convert-from-text"}}'),r=e("785893"),t=e("250065");let d={id:"compare-strings",title:"Compare strings",slug:"/commands/compare-strings",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function h(n){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Compare strings"})," ( ",(0,r.jsx)(s.em,{children:"aString"})," ; ",(0,r.jsx)(s.em,{children:"bString"})," {; ",(0,r.jsx)(s.em,{children:"options"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u5F15\u6570"}),(0,r.jsx)(s.th,{children:"\u578B"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aString"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"\u6BD4\u8F03\u3059\u308B\u6587\u5B57\u5217"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bString"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"\u6BD4\u8F03\u3059\u308B\u6587\u5B57\u5217"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"options"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"\u6BD4\u8F03\u30EB\u30FC\u30EB"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"\u6587\u5B57\u5217\u6BD4\u8F03\u306E\u7D50\u679C"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Compare strings"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(s.em,{children:"aString"})," \u5F15\u6570\u306E\u6587\u5B57\u5217\u304C",(0,r.jsx)(s.em,{children:"bString"})," \u5F15\u6570\u306E\u6587\u5B57\u5217\u6BD4\u8F03\u3057\u3066\u4F4E\u3044/\u7B49\u3057\u3044/\u9AD8\u3044\u3068\u8A55\u4FA1\u3055\u308C\u308B\u304B\u306B\u3088\u3063\u3066\u8CA0\u306E\u5024/\u30BC\u30ED/\u6B63\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"aString"})," \u5F15\u6570\u306B\u306Ftext \u578B\u306E\u5024\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"bString"})," \u5F15\u6570\u306B\u306F\u3001",(0,r.jsx)(s.em,{children:"aString"})," \u5F15\u6570\u3068\u6BD4\u8F03\u3059\u308Btext \u578B\u306E\u5024\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001",(0,r.jsx)(s.strong,{children:"Compare strings"}),' \u30B3\u30DE\u30F3\u30C9\u306F"<" (\u672A\u6E80) \u6F14\u7B97\u5B50\u304C\u4F7F\u7528\u3055\u308C\u305F\u306E\u3068\u540C\u3058\u3088\u3046\u306B\u632F\u821E\u3044\u307E\u3059(',(0,r.jsx)(s.em,{children:"String operators"})," \u3092\u53C2\u7167)\u3002\u3053\u306E\u632F\u308B\u821E\u3044\u306F",(0,r.jsx)(s.em,{children:"options"})," \u5F15\u6570\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u5909\u66F4\u53EF\u80FD\u3067\u3059\u3002",(0,r.jsx)(s.em,{children:"Strings"})," \u30C6\u30FC\u30DE\u5185\u306E\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u3065\u308C\u304B\u4E00\u3064\u307E\u305F\u306F\u7D44\u307F\u5408\u308F\u305B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(s.th,{children:"\u5024"}),(0,r.jsx)(s.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sk case insensitive"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsxs)(s.td,{children:['\u6587\u5B57\u5217\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u8A00\u8A9E\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u6BD4\u8F03\u3055\u308C\u3001\u5927\u6587\u5B57/\u5C0F\u6587\u5B57\u306E\u5DEE\u7570\u306F\u8003\u616E\u3055\u308C\u307E\u305B\u3093\u3002\u305F\u3060\u3057\u30A2\u30AF\u30BB\u30F3\u30C8\u8A18\u53F7\u306F\u8003\u616E\u3055\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F8B\u3048\u3070\u3001"A" \u3068"a" \u306F\u540C\u3058\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u304C\u3001"a" \u306F"\xe0" \u3068\u306F\u9055\u3046\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u30014D\u306E\u6587\u5B57\u5217\u6BD4\u8F03\u306F\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u307E\u305B\u3093\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3068\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u3067\u3059: sk char codes \u307E\u305F\u306F sk diacritic insensitive sk whole word (',(0,r.jsx)(s.a,{href:"/docs/ja/commands/position",children:"Position"})," \u30B3\u30DE\u30F3\u30C9\u306E\u307F) \u3053\u306E\u5B9A\u6570\u306F\u3001\u6697\u793A\u7684\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059(\u53EF\u8AAD\u6027\u5411\u4E0A\u306E\u305F\u3081\u306B\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059): sk kana insensitive sk width insensitive sk strict"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sk char codes"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:'\u6587\u5B57\u5217\u306F\u6587\u5B57\u30B3\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u6BD4\u8F03\u3055\u308C\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u8A00\u8A9E\u8A2D\u5B9A\u306F\u6BD4\u8F03\u306E\u969B\u306B\u306F\u8003\u616E\u3055\u308C\u307E\u305B\u3093\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3068\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u3067\u3059: sk case insensitive \u3053\u308C\u306F"a-z" \u307E\u305F\u306F "A-Z" \u306E\u30EC\u30F3\u30B8\u306E\u307F\u4F7F\u7528\u53EF\u80FD\u3067\u3059(\u4F8B: Alpha = alpha\u3001\u3057\u304B\u3057 Alpha # \xe2lph\xe0)'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sk diacritic insensitive"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsxs)(s.td,{children:['\u6587\u5B57\u5217\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u8A00\u8A9E\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u6BD4\u8F03\u3055\u308C\u307E\u3059\u304C\u3001\u6587\u5B57\u306E\u30A2\u30AF\u30BB\u30F3\u30C8\u8A18\u53F7(\u30A2\u30AF\u30BB\u30F3\u30C8\u3084\u8A18\u53F7\u306A\u3069)\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001"a" \u306F"\xe0" \u3068\u540C\u3058\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3068\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u3067\u3059: sk case insensitive sk whole word (',(0,r.jsx)(s.a,{href:"/docs/ja/commands/position",children:"Position"})," \u30B3\u30DE\u30F3\u30C9\u306E\u307F) \u3053\u306E\u5B9A\u6570\u306F\u3001\u6697\u793A\u7684\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059(\u53EF\u8AAD\u6027\u5411\u4E0A\u306E\u305F\u3081\u306B\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059): sk kana insensitive sk width insensitive sk strict"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sk kana insensitive"}),(0,r.jsx)(s.td,{children:"8"}),(0,r.jsxs)(s.td,{children:['\u65E5\u672C\u8A9E\u306E\u307F\u3002\u3072\u3089\u304C\u306A\u6587\u5B57\u3068\u30AB\u30BF\u30AB\u30CA\u6587\u5B57\u306E\u533A\u5225\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3057\u307E\u3059\u3002\u610F\u5473\u5408\u3044\u3092\u8003\u3048\u308B\u5834\u5408\u306B\u306F\u3001\u4E00\u822C\u7684\u306B\u306F\u3072\u3089\u304C\u306A\u3068\u30AB\u30BF\u30AB\u30CA\u306E\u5DEE\u7570\u306F\u5927\u304D\u3044\u3082\u306E\u3067\u3059\u304C\u3001\u3088\u308A\u591A\u304F\u306E\u7D50\u679C\u3092\u691C\u7D22\u3067\u898B\u3064\u3051\u308B\u305F\u3081\u306B\u30014D \u3067\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3053\u306E\u5DEE\u7570\u3092\u7121\u8996\u3059\u308B\u3088\u3046\u306B(kana insensitive \u306B)\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001"\u3042" \u306F"\u30A2" \u3068\u540C\u3058\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002sk strict \u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3072\u3089\u304C\u306A\u3068\u30AB\u30BF\u30AB\u30CA\u3092\u533A\u5225\u3059\u308B\u6BD4\u8F03\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002sk kana insensitive \u3092\u4F7F\u7528\u3059\u308B\u3068\u3072\u3089\u304C\u306A\u3068\u30AB\u30BF\u30AB\u30CA\u3092\u540C\u4E00\u8996\u3059\u308B\u3088\u3046\u306B\u30EB\u30FC\u30EB\u3092\u4E00\u90E8\u7DE9\u548C\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 ',(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.br,{}),"\u6CE8:"]})," \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u30C7\u30FC\u30BF\u8A00\u8A9E\u304C\u65E5\u672C\u8A9E\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5168\u3066\u306E\u8A00\u8A9E\u306B\u5BFE\u3057\u3066\u306F\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u7121\u8996\u3055\u308C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/commands/compare-strings",children:"Compare strings"})," \u306Fsk strict \u304C\u6307\u5B9A\u3055\u308C\u305F\u6642\u3068\u540C\u3058\u3088\u3046\u306B\u632F\u308B\u821E\u3044\u307E\u3059\u3002\u8A00\u3044\u63DB\u3048\u308B\u3068\u3001\u65E5\u672C\u8A9E\u4EE5\u5916\u306E\u8A00\u8A9E\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u3001\u6587\u5B57\u5217\u306E\u6BD4\u8F03\u306F\u3072\u3089\u304C\u306A\u3068\u30AB\u30BF\u30AB\u30CA\u3092\u533A\u5225\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059(\u3064\u307E\u308A\u672C\u6765\u306E\u60F3\u5B9A\u3068\u306F\u9006\u306E\u52B9\u679C\u304C\u51FA\u307E\u3059)\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3068\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u3067\u3059: sk case insensitive sk diacritic insensitive \u3053\u306E\u5B9A\u6570\u306F\u3001\u6697\u793A\u7684\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059(\u53EF\u8AAD\u6027\u5411\u4E0A\u306E\u305F\u3081\u306B\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059): sk width insensitive sk strict"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sk strict"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"\u6587\u5B57\u5217\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u8A00\u8A9E\u8A2D\u5B9A\u306E\u57FA\u3065\u3044\u3066\u5B8C\u5168\u4E00\u81F4\u3059\u308B\u304B\u3069\u3046\u304B\u306B\u5FDC\u3058\u3066\u6BD4\u8F03\u3055\u308C\u307E\u3059\u3002\u591A\u304F\u306E\u5834\u5408\u3001\u5927\u6587\u5B57/\u5C0F\u6587\u5B57\u3001\u30A2\u30AF\u30BB\u30F3\u30C8\u8A18\u53F7\u306E\u6709\u7121\u306F\u6BD4\u8F03\u306E\u969B\u306B\u8003\u616E\u3055\u308C\u307E\u3059(\u9055\u3046\u6587\u5B57\u3068\u307F\u306A\u3055\u308C\u307E\u3059)\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3068\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u3067\u3059: sk case insensitive sk diacritic insensitive sk kana insensitive \u3053\u306E\u5B9A\u6570\u306F\u3001\u6697\u793A\u7684\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059(\u53EF\u8AAD\u6027\u5411\u4E0A\u306E\u305F\u3081\u306B\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059): sk width insensitive"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sk width insensitive"}),(0,r.jsx)(s.td,{children:"16"}),(0,r.jsxs)(s.td,{children:["\u65E5\u672C\u8A9E\u306E\u307F\u3002",(0,r.jsx)(s.a,{href:"http://www.unicode.org/reports/tr11/",children:"Unicode Standard Annex #11"}),' \u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308BUnicode \u6A19\u6E96\u306E\u300C\u6771\u30A2\u30B8\u30A2\u306E\u6587\u5B57\u5E45\u300D\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u610F\u5473\u5408\u3044\u3092\u8003\u3048\u308B\u5834\u5408\u306B\u306F\u3001\u6587\u5B57\u306E"\u5168\u89D2"\u3068"\u534A\u89D2"(\u3042\u308B\u3044\u306F"\u72ED\u3044"\u3068"\u5E83\u3044")\u306E\u5DEE\u7570\u306F\u4E00\u822C\u7684\u306B\u306F\u3042\u307E\u308A\u5927\u304D\u304F\u306A\u304F\u3001\u305D\u306E\u305F\u30814D \u3067\u3082\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3053\u306E\u30E2\u30FC\u30C9\u304C\u63A1\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001"\u30A2" \u306F"\uFF71" \u3068\u540C\u3058\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002 **',(0,r.jsx)(s.strong,{children:"\u6CE8:"})," \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u30C7\u30FC\u30BF\u8A00\u8A9E\u304C\u65E5\u672C\u8A9E\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u4ED6\u306E\u5168\u3066\u306E\u8A00\u8A9E\u306B\u5BFE\u3057\u3066\u306F\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u7121\u8996\u3055\u308C\u3001",(0,r.jsx)(s.a,{href:"/docs/ja/commands/compare-strings",children:"Compare strings"})," \u306Fsk strict \u304C\u6307\u5B9A\u3055\u308C\u305F\u6642\u3068\u540C\u3058\u3088\u3046\u306B\u632F\u308B\u821E\u3044\u307E\u3059\u3002\u8A00\u3044\u63DB\u3048\u308B\u3068\u3001\u65E5\u672C\u8A9E\u4EE5\u5916\u306E\u8A00\u8A9E\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3057\u305F\u5834\u5408\u3001\u6587\u5B57\u5217\u306E\u6BD4\u8F03\u306F\u5168\u89D2\u3068\u534A\u89D2\u3092\u533A\u5225\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059(\u3064\u307E\u308A\u672C\u6765\u306E\u60F3\u5B9A\u3068\u306F\u9006\u306E\u52B9\u679C\u304C\u51FA\u307E\u3059)\u3002 \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F ",(0,r.jsx)(s.a,{href:"/docs/ja/commands/position",children:"Position"})," \u30B3\u30DE\u30F3\u30C9\u3067\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002Unicode \u306EWidth Insensitive \u30B3\u30EC\u30FC\u30B7\u30E7\u30F3\u306F\u975E\u5BFE\u79F0\u7684\u3067\u3042\u308A\u3001\u4F4D\u7F6E\u3084\u9577\u3055\u3067\u691C\u7D22\u3092\u884C\u3046\u306E\u306F\u4E0D\u53EF\u80FD\u3060\u304B\u3089\u3067\u3059\u3002 \u3053\u308C\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u3068\u7D44\u307F\u5408\u308F\u305B\u53EF\u80FD\u3067\u3059: sk case insensitive sk diacritic insensitive sk kana insensitive \u3053\u306E\u5B9A\u6570\u306F\u3001\u6697\u793A\u7684\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059(\u53EF\u8AAD\u6027\u5411\u4E0A\u306E\u305F\u3081\u306B\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059): sk strict"]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\u30C7\u30FC\u30BF\u8A00\u8A9E\u306E\u5B9A\u7FA9\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(s.em,{children:"\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"}),"\u306E \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u8B66\u544A:"})," ",(0,r.jsx)(s.strong,{children:"Compare strings"})," \u3067\u306F@ \u306E\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u6587\u5B57\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001",(0,r.jsx)(s.em,{children:"aString"})," \u307E\u305F\u306F ",(0,r.jsx)(s.em,{children:"bString"}),' \u5F15\u6570*"abc@"* \u306B\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F*"abc@"* \u3068\u3044\u3046\u6587\u5B57\u5217\u3092\u8A55\u4FA1\u3057\u3001"abc" \u3068\u3044\u3046\u6587\u5B57\u5217\u3068\u305D\u308C\u306B\u7D9A\u304F\u4F55\u3089\u304B\u306E\u6587\u5B57\u3001\u3068\u3044\u3046\u89E3\u91C8\u306F\u3057\u307E\u305B\u3093\u3002']}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8FD4\u3055\u308C\u308B\u5024"})}),"\n",(0,r.jsx)(s.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306Elongint \u578B\u306E\u5024\u306E\u3044\u305A\u308C\u304B\u3092\u8FD4\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsxs)(s.strong,{children:["\u5024 ",(0,r.jsx)(s.br,{})]})}),(0,r.jsx)(s.th,{children:(0,r.jsxs)(s.strong,{children:["\u8A73\u7D30 ",(0,r.jsx)(s.br,{})]})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"-1"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"aString"})," \u306F",(0,r.jsx)(s.em,{children:"bString"})," \u306E\u524D\u3067\u3042\u308B(",(0,r.jsx)(s.em,{children:"aString"})," \u306E\u65B9\u304C\u4F4E\u3044)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"aString"})," \u306F",(0,r.jsx)(s.em,{children:"bString"})," \u3068\u7B49\u3057\u3044"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:"aString"})," \u306F",(0,r.jsx)(s.em,{children:"bString"})," \u306E\u5F8C\u3067\u3042\u308B(",(0,r.jsx)(s.em,{children:"aString"})," \u306E\u65B9\u304C\u9AD8\u3044)"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(s.p,{children:"\u4EE5\u4E0B\u306E\u6587\u5B57\u5217\u3092\u6BD4\u8F03\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0$string1:="alpha Bravo charlie Delta Echo Fox-Trot"\n\xa0$string2:="Alpha Bravo Charlie Delta Echo Fox-Trot"\n\xa0\n\xa0\xa0// \u6587\u5B57\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u6587\u5B57\u5217\u3092\u6BD4\u8F03\u3059\u308B\n\xa0$result:=Compare strings($string1;$string2;sk char codes)\n\xa0\xa0// $result = 1\n\xa0\n\xa0\xa0// \u6587\u5B57\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u6587\u5B57\u5217\u3092\u6BD4\u8F03\u3059\u308B\u304C\u3001\u5927\u6587\u5B57/\u5C0F\u6587\u5B57\u306E\u9055\u3044\u306F\u7121\u8996\u3059\u308B\n\xa0$result:=Compare strings($string1;$string2;sk char codes+sk case insensitive)\n\xa0\xa0// $result = 0\n'})}),"\n",(0,r.jsx)(s.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsxs)(s.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F",(0,r.jsx)(s.strong,{children:"\u30C7\u30FC\u30BF\u8A00\u8A9E\u304C\u65E5\u672C\u8A9E\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8"}),"\u306B\u304A\u3051\u308B\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u7279\u5B9A\u306E\u632F\u308B\u821E\u3044\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u3066\u3044\u307E\u3059:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// \u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u3072\u3089\u304C\u306A\u3068\u30AB\u30BF\u30AB\u30CA\u3092\u533A\u5225\u3057\u306A\u3044(kana insensitive)\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F")\xa0// \u540C\u3058\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F";sk strict)\xa0// \u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u30A4\u30ED\u30CF";"\u3044\u308D\u306F";sk kana insensitive)\xa0// \u540C\u3058\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// \u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57("\u3064"\u3068"\u3063"\u306A\u3069)\u3092\u533A\u5225\u3057\u306A\u3044(case insensitive)\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D")\xa0// \u540C\u3058\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D";sk strict)\xa0// \u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u3055\u3064\u304D";"\u3055\u3063\u304D";sk case insensitive)\xa0// \u540C\u3058\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0// \u30C7\u30FC\u30BF\u8A00\u8A9E\u304C\u65E5\u672C\u8A9E\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u8A18\u53F7(\u6FC1\u70B9\u306A\u3069)\u306E\u6709\u7121\u3092\u533A\u5225\u3059\u308B(diacritic sensitive)\u3001\u3053\u308C\u306F\u4ED6\u306E\u8A00\u8A9E\u8A2D\u5B9A\u3068\u7570\u306A\u308B\n\xa0$result:=Compare strings("ete";"\xe9t\xe9")\xa0// \u30C7\u30FC\u30BF\u8A00\u8A9E\u304C\u65E5\u672C\u8A9E\u4EE5\u5916\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u540C\u3058\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("ete";"\xe9t\xe9")\xa0// \u30C7\u30FC\u30BF\u8A00\u8A9E\u304C\u65E5\u672C\u8A9E\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044")\xa0// \u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044";sk strict)\xa0// \u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u3046\u304C\u3044";"\u3046\u304B\u3044";sk diacritic insensitive)\xa0// \u540C\u3058\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u6CE8:"}),' "\u30C6\u30AD\u30B9\u30C8\u691C\u7D22\u7528\u306E\u6587\u5B57\u5217\u6BD4\u8F03\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3(\u53C2\u7167)\u306F',(0,r.jsx)(s.strong,{children:"Compare strings"}),' \u30B3\u30DE\u30F3\u30C9\u306B\u5F71\u97FF\u304C\u3042\u308A\u307E\u3059\u3002\u5177\u4F53\u7684\u306B\u306F\u3001"\u30AB\u30BF\u30AB\u30CA-\u3072\u3089\u304C\u306A\u306E\u9577\u97F3\u8A18\u53F7"\u306E\u89E3\u91C8\u306E\u4ED5\u65B9\u304C\u7570\u306A\u308A\u307E\u3059\u3002\u307E\u305F\u3053\u306E\u8A2D\u5B9A\u306F"\u309D"\u307E\u305F\u306F"\u309E"\u306A\u3069\u306E\u65E5\u672C\u8A9E\u306E\u7E70\u308A\u8FD4\u3057\u8A18\u53F7(\u8E0A\u308A\u5B57)\u306B\u3082\u5F71\u97FF\u304C\u3042\u308A\u307E\u3059\u3002\u4F8B:']}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0$result:=Compare strings("\u3044\u3059\u305A";"\u3044\u3059\u309E")\xa0// \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u540C\u3058\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u3044\u3059\u305A";"\u3044\u3059\u309E")\xa0// \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u30E9\u30FC\u30E1\u30F3";"\uFF97\uFF71\uFF92\uFF9D")\xa0// \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u7121\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u540C\u3058\u3068\u307F\u306A\u3055\u308C\u308B\n\xa0$result:=Compare strings("\u30E9\u30FC\u30E1\u30F3";"\uFF97\uFF71\uFF92\uFF9D")\xa0// \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u7570\u306A\u308B\u3068\u307F\u306A\u3055\u308C\u308B\n'})}),"\n",(0,r.jsx)(s.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/ja/commands/position",children:"Position"})})]})}function o(n={}){let{wrapper:s}={...(0,t.a)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,s,e){e.d(s,{Z:function(){return c},a:function(){return d}});var i=e(667294);let r={},t=i.createContext(r);function d(n){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(s):{...s,...n}},[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(t.Provider,{value:s},n.children)}}}]);