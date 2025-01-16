"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83305"],{367855:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/json-parse","title":"JSON Parse","description":"JSON Parse ( jsonString {; type}{; *} ) : any","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-parse.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse","permalink":"/docs/ja/20-R7/commands/json-parse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-parse","title":"JSON Parse","slug":"/commands/json-parse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/ja/20-R7/category/json"},"next":{"title":"JSON PARSE ARRAY","permalink":"/docs/ja/20-R7/commands/json-parse-array"}}'),d=s("785893"),t=s("250065");let l={id:"json-parse",title:"JSON Parse",slug:"/commands/json-parse",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:4},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"JSON Parse"})," ( ",(0,d.jsx)(e.em,{children:"jsonString"})," {; ",(0,d.jsx)(e.em,{children:"type"}),"}{; *} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"jsonString"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u89E3\u6790\u3057\u305F\u3044JSON\u6587\u5B57\u5217"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"type"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u5024\u3092\u5909\u63DB\u3057\u305F\u3044\u578B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u8FD4\u3055\u308C\u305F\u5024\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001\u5404\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u884C\u306E\u4F4D\u7F6E\u3068\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u8FFD\u52A0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"any, Object"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"JSON\u6587\u5B57\u5217\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"JSON Parse"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001JSON\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u6587\u5B57\u5217\u306E\u4E2D\u8EAB\u3092\u89E3\u6790\u3057\u30014D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F \u306F\u5909\u6570\u3078\u3068\u4FDD\u5B58\u53EF\u80FD\u306A\u5024\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FJSON\u30C7\u30FC\u30BF\u3092\u30C7\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3057\u307E\u3059\u3002\u3064\u307E\u308A ",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/json-stringify",children:"JSON Stringify"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u9006\u306E\u6319\u52D5\u3092\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"jsonString"})," \u5F15\u6570\u306B\u306F\u3001\u89E3\u6790\u3092\u3057\u305F\u3044JSON\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u6587\u5B57\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u6587\u5B57\u5217\u304C\u6B63\u3057\u304F\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u3068\u3001\u89E3\u6790\u306F\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u306A\u306E\u3067\u3001",(0,d.jsx)(e.strong,{children:"JSON Parse"}),"\u3092\u3057\u3088\u3046\u3057\u3066JSON\u6587\u5B57\u5217\u3092\u8A55\u4FA1\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," \u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(e.strong,{children:"JSON Parse"}),"\u3092\u4F7F\u7528\u3059\u308B\u524D\u306B ",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/json-stringify",children:"JSON Stringify"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"type"})," \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u7D50\u679C\u3092\u4FDD\u5B58\u3059\u308B\u306E\u306B\u4F7F\u7528\u3059\u308B\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308C\u3070\u30014D\u306F\u81EA\u52D5\u7684\u306B\u3001\u53D6\u5F97\u3057\u305F\u5024\u3092\u305D\u306E\u578B\u3078\u3068\u5909\u63DB\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F4D\u306F\u578B\u3092\u63A8\u6E2C\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"type"})," \u5F15\u6570\u3092\u6E21\u3059\u4E8B\u306B\u3088\u3063\u3066\u5909\u63DB\u3059\u308B\u578B\u3092\u5F37\u5236\u7684\u306B\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u6E21\u3059\u5834\u5408\u306F\u3001 ",(0,d.jsx)(e.em,{children:"Field and Variable Types"}),"\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3069\u308C\u304B\u4E00\u3064\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is Boolean"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"6"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is collection"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"42"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is date"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is longint"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is object"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"38"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is real"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is text"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Is time"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"11"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:["**",(0,d.jsx)(e.strong,{children:"\u6CE8:"})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5B9F\u6570\u578B\u306E\u5024\u306F \xb110.421e\xb110\u306E\u7BC4\u56F2\u5185\u306B\u53CE\u307E\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u5024\u306E\u5834\u5408\u3001\u5168\u3066\u306E\u7279\u6B8A\u6587\u5B57\u306F\u5F15\u7528\u7B26\u3092\u542B\u3081\u30A8\u30B9\u30B1\u30FC\u30D7\u3055\u308C\u3066\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093(\u4F8B\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"}),"\n",(0,d.jsx)(e.li,{children:'JSON \u306E\u65E5\u4ED8\u306F\u5168\u3066 "\\"YYYY-MM-DDTHH:mm:ssZ\\""\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D\u306E\u65E5\u4ED8\u304CGMT\u3067\u306F\u306A\u304F\u30ED\u30FC\u30AB\u30EB\u6642\u523B\u3092\u542B\u3080\u3053\u3068\u3092\u8003\u616E\u3057\u307E\u3059\u3002'}),"\n",(0,d.jsxs)(e.li,{children:["Is date \u5B9A\u6570\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6587\u5B57\u5217\u304CGMT\u3067\u306F\u306A\u304F\u30ED\u30FC\u30AB\u30EB\u6642\u523B\u3092\u542B\u3093\u3067\u3044\u308B\u3068\u5224\u65AD\u3057\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," \u30B3\u30DE\u30F3\u30C9\u306EDates inside objects \u30BB\u30EC\u30AF\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:['4D v16 R6\u4EE5\u964D\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u4FDD\u5B58\u8A2D\u5B9A\u304C"\u65E5\u4ED8\u578B"\u3067\u3042\u308B\u3068\u304D\u3001"YYYY-MM-DD" \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306EJSON \u65E5\u4ED8\u6587\u5B57\u5217\u306F\u3001',(0,d.jsx)(e.strong,{children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u65E5\u4ED8\u5024\u3068\u3057\u3066\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),' \u5185\u306B\u3042\u308B"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002']}),"\n",(0,d.jsx)(e.li,{children:"\u6642\u9593\u578B\u306E\u5024\u306F\u6570\u5024\u578B\u304B\u3089\u6587\u5B57\u5217\u578B\u3078\u3068\u8FD4\u3059\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u89E3\u6790\u3055\u308C\u305F\u5024\u306F\u79D2\u6570\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u4EFB\u610F\u306E ",(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u3001",(0,d.jsx)(e.em,{children:"jsonString"})," \u5F15\u6570\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u3063\u305F\u5834\u5408\u3001\u8FD4\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u305D\u308C\u305E\u308C\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u30B5\u30D6\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u30D1\u30B9\u3001\u884C\u306E\u4F4D\u7F6E\u3001\u305D\u3057\u3066\u884C\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u8868\u3059*__symbols",(0,d.jsx)(e.em,{children:"\u3068\u3044\u3046\u540D\u524D\u306E\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u60C5\u5831\u306F\u30C7\u30D0\u30C3\u30B0\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u6709\u7528\u3067\u3059\u3002"}),"__symbols* \u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u69CB\u9020\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-json",children:"__symbols:{//\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u8A73\u7D30<br />\xa0\xa0 myAtt.mySubAtt...:{ //\u30D7\u30ED\u30D1\u30C6\u30A3\u30D1\u30B9<br />\xa0\xa0\xa0\xa0\xa0 line:10, //\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u884C\u756A\u53F7<br />\xa0\xa0\xa0\xa0\xa0 offset:35 //\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u3001\u884C\u306E\u5148\u982D\u304B\u3089\u306E\u30AA\u30D5\u30BB\u30C3\u30C8<br />\xa0\xa0\xa0\xa0\xa0 }<br />\xa0\xa0 }\n"})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," \u8FD4\u3055\u308C\u305F\u5024\u304C",(0,d.jsx)(e.em,{children:"type"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u578B\u3068\u7570\u306A\u308B\u5834\u5408\u3001 ",(0,d.jsx)(e.em,{children:"*"})," \u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(e.p,{children:"\u5358\u7D14\u306A\u5909\u63DB\u306E\u4F8B:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $r : Real\n\xa0$r:=JSON Parse("42.17")\xa0//$r = 42,17 (Real)\n\xa0\n\xa0var $el : Integer\n\xa0$el:=JSON Parse("120.13";Is longint)\xa0//$el=120\n\xa0\n\xa0var $t : Text\n\xa0$t:=JSON Parse("\\"Year 42\\"";Is text)\xa0// $t="Year 42" (text)\n\xa0\n\xa0var $o : Object\n\xa0$o:=JSON Parse("{\\"name\\":\\"john\\"}")\n\xa0\xa0// $o = {"name":"john"} (4D object)\n\xa0\n\xa0var $b : Boolean\n\xa0$b:=JSON Parse("{\\"manager\\":true}";Is Boolean)\xa0// $b=true\n\xa0\n\xa0var $h : Time\n\xa0$h:=JSON Parse("5120";Is time)\xa0//$h=01:25:20\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(e.p,{children:"\u65E5\u4ED8\u578B\u306E\u30C7\u30FC\u30BF\u306E\u5909\u63DB\u306E\u4F8B:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0$test:=JSON Parse("\\"1990-12-25T12:00:00Z\\"")\n\xa0\xa0// $test="1990-12-25T12:00:00Z"\n\xa0var $date;$date2;$date3 : Date\n\xa0$date:=JSON Parse("\\"2008-01-01T12:00:00Z\\"";Is date)\n\xa0\xa0//$date=01/01/08\n\xa0$date2:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date2=14/07/17 (Paris time zone)\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0$date3:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date3=13/07/17\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(e.p,{children:'\u30AB\u30EC\u30F3\u30C8\u306E\u65E5\u4ED8\u4FDD\u5B58\u8A2D\u5B9A\u304C"\u65E5\u4ED8\u578B"\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $json : Text\n\xa0var $birthday : Date\n\xa0\n\xa0$json:="{\\"name\\":\\"Marcus\\",\\"birthday\\":\\"2017-10-16\\"}"\n\xa0$o:=JSON Parse($json)\n\xa0$birthday:=$o.birthday\n\xa0\xa0//$birthday=16/10/17\n'})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u8A2D\u5B9A\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),'\u5185\u306B\u3042\u308B"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002']}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsxs)(e.p,{children:["\u3053\u3053\u3067\u306F ",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/json-stringify",children:"JSON Stringify"})," \u3068 ",(0,d.jsx)(e.strong,{children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F75\u7528\u4F8B\u3092\u7D39\u4ECB\u3057\u3066\u3044\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $JSONContact : Text\n\xa0var $Contact;$Contact2 : Object\n\xa0$Contact:=New object("name";"Monroe";"firstname";"Alan")\n\xa0\n\xa0\xa0// JSON Stringify: JSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304B\u3089JSON\u6587\u5B57\u5217\u3078\u306E\u5909\u63DB\n\xa0$JSONContact:=JSON Stringify($Contact)\n\xa0\n\xa0\xa0// JSON Parse: JSON\u6587\u5B57\u5217\u304B\u3089JSON\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u5909\u63DB\n\xa0$Contact2:=JSON Parse($JSONContact)\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,d.jsx)(e.p,{children:"JSON\u914D\u5217\u304B\u30894D\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0$myCol:=JSON Parse("[\\"Monday\\",10,\\"Tuesday\\",11,\\"Wednesday\\",12,false]")\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u6587\u5B57\u5217\u3092\u89E3\u6790\u3057\u3001\u305D\u308C\u305E\u308C\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u884C\u306E\u4F4D\u7F6E\u3068\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "alpha": 4552,\n\xa0\xa0\xa0 "beta": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 45,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delta": "text1" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 52,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "golf": "text2" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $obInfo : Object\n\xa0$obInfo=JSON Parse("json_string";Is object;*)\xa0//* \u5F15\u6570\u3092\u6E21\u3057\u3066\u8FD4\u3055\u308C\u305F$obinfo\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5185\u306B\n\xa0\xa0// __symbols \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u53D6\u5F97\u3059\u308B\n'})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"$obInfo"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u8EAB\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-json",children:"{alpha:4552,\nbeta:[{echo:45,delta:text1},{echo:52,golf:text2}],\n__symbols:{alpha:{line:2,offset:4},\nbeta:{line:3,offset:4},\nbeta[0].echo:{line:5,offset:12},\nbeta[0].delta:{line:6,offset:12},\nbeta[1].echo:{line:9,offset:12},\nbeta[1].golf:{line:10,offset:12}}}\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"Field and Variable Types"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/json-parse-array",children:"JSON PARSE ARRAY"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/json-stringify",children:"JSON Stringify"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/json-validate",children:"JSON Validate"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"1218"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var r=s(667294);let d={},t=r.createContext(d);function l(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);