"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79480"],{456750:function(n,e,r){r.r(e),r.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/match-regex","title":"Match regex","description":"Match regex ( pattern ; aString ; start {; posfound ; lengthfound}{; *} ) -> \u623B\u308A\u5024","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/match-regex.md","sourceDirName":"commands-legacy","slug":"/commands/match-regex","permalink":"/docs/ja/commands/match-regex","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmatch-regex.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"match-regex","title":"Match regex","slug":"/commands/match-regex","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Lowercase","permalink":"/docs/ja/commands/lowercase"},"next":{"title":"Num","permalink":"/docs/ja/commands/num"}}'),d=r("785893"),s=r("250065");let i={id:"match-regex",title:"Match regex",slug:"/commands/match-regex",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Match regex"})," ( ",(0,d.jsx)(e.em,{children:"pattern"})," ; ",(0,d.jsx)(e.em,{children:"aString"})," ; ",(0,d.jsx)(e.em,{children:"start"})," {; pos_found ; length_found}{; *} ) -> \u623B\u308A\u5024\xa0",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.strong,{children:"Match regex"})," ( ",(0,d.jsx)(e.em,{children:"pattern"})," ; ",(0,d.jsx)(e.em,{children:"aString"})," ) -> \u623B\u308A\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"pattern"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u901A\u5E38\u306E\u5F0F"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"aString"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u691C\u7D22\u304C\u5B9F\u884C\u3055\u308C\u308B\u6587\u5B57\u5217"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"start"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"aString\u3067\u691C\u7D22\u304C\u958B\u59CB\u3059\u308B\u4F4D\u7F6E"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"pos_found"}),(0,d.jsx)(e.td,{children:"Integer array, Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30AA\u30AB\u30EC\u30F3\u30B9\u306E\u4F4D\u7F6E"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"length_found"}),(0,d.jsx)(e.td,{children:"Integer array, Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30AA\u30AB\u30EC\u30F3\u30B9\u306E\u9577\u3055"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6E21\u3055\u308C\u305F\u5834\u5408\u3001\u793A\u3055\u308C\u305F\u4F4D\u7F6E\u3067\u691C\u7D22\u3059\u308B\u306E\u307F"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"True = \u691C\u7D22\u304C\u30AA\u30AB\u30EC\u30F3\u30B9\u3092\u767A\u898B\u3057\u305F\u5834\u5408 \u305D\u306E\u4ED6\u306E\u5834\u5408\u306FFalse"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Match regex ( pattern ; aString ) -> \u623B\u308A\u5024"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5F15\u6570"}),(0,d.jsx)(e.td,{children:"\u578B"}),(0,d.jsx)(e.td,{children:"\u8AAC\u660E"}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"pattern"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u901A\u5E38\u306E\u5F0F(\u5B8C\u5168\u306B\u4E00\u81F4)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"aString"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u691C\u7D22\u304C\u884C\u308F\u308C\u308B\u6587\u5B57\u5217"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"True = \u691C\u7D22\u3067\u30AA\u30AB\u30EC\u30F3\u30B9\u304C\u898B\u3064\u304B\u3063\u305F; \u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306FFalse"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(e.p,{children:'Match regex\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001 "\u6B63\u898F\u8868\u73FE" \u3068\u547C\u3070\u308C\u308B\u30E1\u30BF\u8A00\u8A9E\u3067\u5408\u6210\u3055\u308C\u305F\u898F\u5247\u306E\u30BB\u30C3\u30C8\u3068\u6587\u5B57\u5217\u304C\u4E00\u81F4\u3057\u3066\u3044\u308B\u304B\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002'}),"\n",(0,d.jsxs)(e.p,{children:["\u6B63\u898F\u8868\u73FE\u3092\u6E21\u3057\u3066\u3001",(0,d.jsx)(e.em,{children:"pattern"}),"\u3067\u691C\u7D22\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u7279\u6B8A\u6587\u5B57\u3092\u7528\u3044\u3066\u3001\u6587\u5B57\u5217\u3092\u8AAC\u660E\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u306E\u30BB\u30C3\u30C8\u304B\u3089\u6210\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"aString"}),"\u306B\u6B63\u898F\u8868\u73FE\u3067\u691C\u7D22\u3059\u308B\u6587\u5B57\u5217\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"start"}),"\u3067\u306F\u3001",(0,d.jsx)(e.em,{children:"aString"}),"\u4E2D\u3067\u691C\u7D22\u3092\u958B\u59CB\u3059\u308B\u4F4D\u7F6E\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"pos_found"}),"\u3068",(0,d.jsx)(e.em,{children:"length_found"}),"\u304C\u5909\u6570\u3067\u3042\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9 \u306F\u4F4D\u7F6E\u3068\u30AA\u30AB\u30EC\u30F3\u30B9\u306E\u9577\u3055\u3092\u3053\u308C\u3089\u306E\u5909\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002\u914D\u5217\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F4D\u7F6E\u3068\u30AA\u30AB\u30EC\u30F3\u30B9\u306E\u9577\u3055\u3092\u914D\u5217\u306E\u8981\u7D200\u306B\u3001\u6B63\u898F\u8868\u73FE\u306B\u3088\u3063\u3066\u30AD\u30E3\u30D7\u30C1\u30E3\u3055\u308C\u305F\u30B0\u30EB\u30FC\u30D7\u306E\u4F4D\u7F6E\u3068\u9577\u3055\u3092\u7D9A\u304F\u8981\u7D20\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u4EFB\u610F\u306E*** \u5F15\u6570 \u304C\u6E21\u3055\u308C\u308B\u3068\u3001\u691C\u7D22\u306F",(0,d.jsx)(e.em,{children:"start"}),"\u3067\u6307\u5B9A\u3057\u305F\u4F4D\u7F6E\u304B\u3089\u5B9F\u884C\u3055\u308C\u3001\u30D1\u30BF\u30FC\u30F3\u306B\u30DE\u30C3\u30C1\u3057\u306A\u3044\u5834\u5408\u3067\u3082\u305D\u308C\u4EE5\u964D\u3092\u691C\u7D22\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u691C\u7D22\u304C\u30AA\u30AB\u30EC\u30F3\u30B9\u3092\u767A\u898B\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u6B63\u898F\u8868\u73FE\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001\u4EE5\u4E0B\u306E\u60C5\u5831\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044:",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"http://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE",children:"http://ja.wikipedia.org/wiki/\u6B63\u898F\u8868\u73FE"})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"pattern"}),"\u5F15\u6570\u306B\u6E21\u3059\u6B63\u898F\u8868\u73FE\u306E\u69CB\u6587\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001\u6B21\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044:",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:(0,d.jsx)(e.a,{href:"https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions",children:"https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions"})})]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(e.p,{children:["\u5B8C\u5168\u306B\u5BFE\u7B49\u306A\u3082\u306E\u3092\u691C\u7D22\u3059\u308B(\u5358\u7D14\u306A\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9):",(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"vfound:=Match regex(pattern;mytext)"})]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Employees];Match regex(".*smith.*";[Employees]name))\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsxs)(e.p,{children:["\u4F4D\u7F6E\u3092\u7528\u3044\u3066\u30C6\u30AD\u30B9\u30C8\u3067\u691C\u7D22\u3059\u308B",(0,d.jsx)(e.br,{}),"\nvfound:=Match regex( pattern;mytext; start; pos_found; length_found)",(0,d.jsx)(e.br,{}),"\n\u3059\u3079\u3066\u306E$1\u30BF\u30B0\u3092\u8868\u793A\u3059\u308B\u4F8B:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0vStart:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0vfound:=Match regex("<.*>";$1;vStart;pos_found;length_found)\n\xa0\xa0\xa0\xa0If(vfound)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(Substring($1;pos_found;length_found))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vStart:=pos_found+length_found\n\xa0\xa0\xa0\xa0End if\n\xa0Until(Not(vfound))\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsxs)(e.p,{children:["\u62EC\u5F27\u3092\u4F7F\u7528\u3057\u305F\u30B0\u30EB\u30FC\u30D7\u30AD\u30E3\u30D7\u30C1\u30E3\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u7528\u3044\u3066\u691C\u7D22\u3059\u308B\u3002\u6B63\u898F\u8868\u73FE\u3067\u306F ( ) \u3092\u4F7F\u7528\u3057\u3066\u30B0\u30EB\u30FC\u30D7\u3092\u5B9A\u7FA9\u3059\u308B\u3002",(0,d.jsx)(e.br,{}),"\nvfound:=Match regex( pattern;mytext; start; pos_found_array; length_found_array)"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY LONGINT(pos_found_array;0)\n\xa0ARRAY LONGINT(length_found_array;0)\n\xa0vfound:=Match regex("(.*)stuff(.*)";$1;1;pos_found_array;length_found_array)\n\xa0If(vfound)\n\xa0\xa0\xa0\xa0$group1:=Substring($1;pos_found_array{1};length_found_array{1})\n\xa0\xa0\xa0\xa0$group2:=Substring($1;pos_found_array{2};length_found_array{2})\n\xa0End if\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsxs)(e.p,{children:["\u793A\u3055\u308C\u3066\u3044\u308B\u4F4D\u7F6E\u306E\u30D1\u30BF\u30FC\u30F3\u306E\u985E\u4F3C\u3092\u5236\u9650\u3057\u306A\u304C\u3089\u691C\u7D22\u3059\u308B",(0,d.jsx)(e.br,{}),"\n\u4EE5\u524D\u306E2\u3064\u306E\u69CB\u6587\u306E\u3046\u3061\uFF11\u3064\u306E\u6700\u5F8C\u306B\u30B9\u30BF\u30FC\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found)\n\xa0\xa0//True \u3092\u8FD4\u3059\n\xa0vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found;*)\n\xa0\xa0//returns False \u3092\u8FD4\u3059\n\xa0vfound:=Match regex("a.b";"---a-b---";4;$pos_found;$length_found;*)\n\xa0\xa0//returns True \u3092\u8FD4\u3059\n'})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8"}),": \u8FD4\u3055\u308C\u305F\u4F4D\u7F6E\u3068\u9577\u3055\u306FUnicode\u30E2\u30FC\u30C9\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u304C7\u30D3\u30C3\u30C8ASCII\u30BF\u30A4\u30D7\u306E\u5834\u5408\u306E\u307F\u305D\u306E\u610F\u5473\u3092\u6301\u3061\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,d.jsxs)(e.p,{children:["\u30A8\u30E9\u30FC\u306E\u30A4\u30D9\u30F3\u30C8\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u304C\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u3001\u3053\u308C\u3092\u691C\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1019"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"error"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var t=r(667294);let d={},s=t.createContext(d);function i(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);