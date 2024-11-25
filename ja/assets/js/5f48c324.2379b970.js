"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70498"],{419433:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/use-character-set","title":"USE CHARACTER SET","description":"USE CHARACTER SET ( map |  {; mapInOut*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/use-character-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-character-set","permalink":"/docs/ja/commands/use-character-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-character-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-character-set","title":"USE CHARACTER SET","slug":"/commands/use-character-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TIMEOUT","permalink":"/docs/ja/commands/set-timeout"},"next":{"title":"Compiler","permalink":"/docs/ja/category/compiler"}}'),c=s("785893"),d=s("250065");let t={id:"use-character-set",title:"USE CHARACTER SET",slug:"/commands/use-character-set",displayed_sidebar:"docs"},a=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"USE CHARACTER SET"})," ( map | * {; ",(0,c.jsx)(n.em,{children:"mapInOut"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5F15\u6570"}),(0,c.jsx)(n.th,{children:"\u578B"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"map | *"}),(0,c.jsx)(n.td,{children:"\u6587\u5B57, \u6F14\u7B97\u5B50"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"\u4F7F\u7528\u3059\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u540D (Unicode\u30E2\u30FC\u30C9), \u307E\u305F\u306F \u4F7F\u7528\u3059\u308BASCII\u30DE\u30C3\u30D7\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u540D (ASCII\u30E2\u30FC\u30C9), \u307E\u305F\u306F * \u306E\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6587\u5B57\u30BB\u30C3\u30C8/ASCII\u30DE\u30C3\u30D7\u306B\u30EA\u30BB\u30C3\u30C8"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"mapInOut"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"0 = \u51FA\u529B\u30DE\u30C3\u30D7 1 = \u5165\u529B\u30DE\u30C3\u30D7 \u7701\u7565\u3057\u305F\u5834\u5408\u3001\u51FA\u529B\u30DE\u30C3\u30D7"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"USE CHARACTER SET"}),"\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3068\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u307E\u305F\u306F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u9593\u306E\u30C7\u30FC\u30BF\u4EA4\u63DB\u306E\u969B\u30014D\u304C \u4F7F\u7528\u3059\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u6709\u52B9\u3067\u3059\u3002\u4EA4\u63DB\u64CD\u4F5C\u306B\u306F\u30C6\u30AD\u30B9\u30C8, DIF, \u305D\u3057\u3066 SYLK \u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F/\u66F8\u304D\u51FA\u3057\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u6587\u5B57\u30DE\u30C3\u30D7\u306F\u307E\u305F",(0,c.jsx)(n.a,{href:"/docs/ja/commands/send-packet",children:"SEND PACKET"}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",children:"RECEIVE PACKET"})," (\u30C6\u30AD\u30B9\u30C8\u578B\u30D1\u30B1\u30C3\u30C8) \u305D\u3057\u3066",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-buffer",children:"RECEIVE BUFFER"}),"\u306B\u3088\u308B\u30C7\u30FC\u30BF\u4EA4\u63DB\u306B\u3082\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(n.a,{href:"/docs/ja/commands/send-record",children:"SEND RECORD"}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-record",children:"RECEIVE RECORD"}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/send-packet",children:"SEND PACKET"}),", ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",children:"RECEIVE PACKET"})," (BLOB\u578B\u30D1\u30B1\u30C3\u30C8) \u305D\u3057\u3066 ",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-variable",children:"RECEIVE VARIABLE"})," \u306B\u3088\u308B\u30C7\u30FC\u30BF\u4EA4\u63DB\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"map"})," \u5F15\u6570\u306F\u4F7F\u7528\u3059\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u306E\u201CIANA\u201D\u540D\u3001\u307E\u305F\u306F\u305D\u306E\u30A8\u30A4\u30EA\u30A2\u30B9\u540D\u3068\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001\u201Ciso-8859-1\u201D\u3068\u201Cutf-8\u201D\u306F\u6709\u52B9 \u306A\u540D\u524D\u3067\u3042\u308A\u3001\u305D\u306E\u30A8\u30A4\u30EA\u30A2\u30B9\u201Clatin1\u201D\u3042\u308B\u3044\u306F\u201Cl1\u201D\u3082\u307E\u305F\u6709\u52B9\u3067\u3059\u3002\u3053\u308C\u3089\u306E\u540D\u524D\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001\u4EE5\u4E0B\u306E\u30B5\u30A4\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044:"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:(0,c.jsx)(n.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"})})}),"\n",(0,c.jsxs)(n.p,{children:["IANA\u540D\u306B\u95A2\u3059\u308B\u8AAC\u660E\u306F",(0,c.jsx)(n.a,{href:"/docs/ja/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"mapInOut"}),"\u304C0\u306E\u5834\u5408\u3001\u30DE\u30C3\u30D7\u306F\u66F8\u304D\u51FA\u3057\u306E\u305F\u3081\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(n.em,{children:"mapInOut"}),"\u304C1\u306E\u5834\u5408\u3001\u30DE\u30C3\u30D7\u306F\u8AAD\u307F\u8FBC\u307F\u306E\u305F\u3081\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(n.em,{children:"mapInOut"})," \u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u66F8\u304D\u51FA\u3057\u30DE\u30C3\u30D7\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"*"})," \u5F15\u6570\u304C\u6E21\u3055\u308C\u308B\u3068\u3001 (",(0,c.jsx)(n.em,{children:"mapInOut"}),"\u306E\u5024\u306B\u57FA\u3065\u304D\u3001\u8AAD\u307F\u8FBC\u307F\u307E\u305F\u306F\u66F8\u304D\u8FBC\u307F\u304C) \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u306B\u518D\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(n.br,{}),"\n4D\u304C\u4F7F\u7528\u3059\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u306FUTF-8\u3067\u3059\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C (Unicode\u30E2\u30FC\u30C9) \u3067\u306F\u3001UTF-16\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u30C6\u30AD\u30B9\u30C8\u306E\u66F8\u304D\u51FA\u3057\u306B\u4F7F\u7528\u3057\u3001\u305D\u306E\u5F8C\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u306B\u518D\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0USE CHARACTER SET("UTF-16LE";0)\xa0// UTF-16 \'\u30EA\u30C8\u30EB\u30A8\u30F3\u30C7\u30A3\u30A2\u30F3\' \u6587\u5B57\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\n\xa0EXPORT TEXT([MyTable];"MyText")\xa0// \u30DE\u30C3\u30D7\u3092\u901A\u3057\u3066\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u51FA\u3057\n\xa0USE CHARACTER SET(*;0)\xa0// \u30C7\u30D5\u30A9\u30EB\u30C8\u6587\u5B57\u30BB\u30C3\u30C8\u306B\u623B\u3059\n'})}),"\n",(0,c.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,c.jsx)(n.p,{children:"\u30DE\u30C3\u30D7\u304C\u6B63\u3057\u304F\u30ED\u30FC\u30C9\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"_o_Mac to Win"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.em,{children:"_o_Win to Mac"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/export-dif",children:"EXPORT DIF"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/export-sylk",children:"EXPORT SYLK"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/export-text",children:"EXPORT TEXT"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/import-dif",children:"IMPORT DIF"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/import-sylk",children:"IMPORT SYLK"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/import-text",children:"IMPORT TEXT"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/receive-packet",children:"RECEIVE PACKET"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ja/commands/send-packet",children:"SEND PACKET"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var r=s(667294);let c={},d=r.createContext(c);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);