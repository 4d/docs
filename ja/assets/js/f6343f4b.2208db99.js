"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11943"],{410786:function(n,t,e){e.r(t),e.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>x,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/blob-to-text","title":"BLOB to text","description":"BLOB to text ( BLOB ; textFormat {; offset {; textLength}} )  : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-text","permalink":"/docs/ja/commands/blob-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-text","title":"BLOB to text","slug":"/commands/blob-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to real","permalink":"/docs/ja/commands/blob-to-real"},"next":{"title":"BLOB TO VARIABLE","permalink":"/docs/ja/commands/blob-to-variable"}}'),d=e("785893"),r=e("250065");let l={id:"blob-to-text",title:"BLOB to text",slug:"/commands/blob-to-text",displayed_sidebar:"docs"},c=void 0,i={},x=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"BLOB to text"})," ( ",(0,d.jsx)(t.em,{children:"BLOB"})," ; ",(0,d.jsx)(t.em,{children:"textFormat"})," {; ",(0,d.jsx)(t.em,{children:"offset"})," {; ",(0,d.jsx)(t.em,{children:"textLength"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u5F15\u6570"}),(0,d.jsx)(t.th,{children:"\u578B"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Blob"}),(0,d.jsx)(t.td,{children:"Blob"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u308A\u51FA\u3059BLOB"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textFormat"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u6587\u5B57\u30BB\u30C3\u30C8"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"offset"}),(0,d.jsx)(t.td,{children:"Variable"}),(0,d.jsx)(t.td,{children:"\u2194"}),(0,d.jsx)(t.td,{children:"BLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8 (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u8AAD\u307F\u8FBC\u307F\u5F8C\u306E\u65B0\u3057\u3044\u30AA\u30D5\u30BB\u30C3\u30C8"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"textLength"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"\u8AAD\u307F\u8FBC\u3080\u6587\u5B57\u6570"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(t.td,{children:"Text"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"\u53D6\u308A\u51FA\u3057\u305F\u30C6\u30AD\u30B9\u30C8"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(t.p,{children:["BLOB to text \u30B3\u30DE\u30F3\u30C9\u306FBLOB ",(0,d.jsx)(t.em,{children:"blob"}),"\u304B\u3089\u30C6\u30AD\u30B9\u30C8\u3092\u8AAD\u307F\u3060\u3057\u3066\u3001\u8FD4\u3057\u307E\u3059\u3002\u5F15\u6570\u306F\u3001\u8AAD\u307F\u8FBC\u3080\u30C6\u30AD\u30B9\u30C8\u5024\u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u30024D\u30D0\u30FC\u30B8\u30E7\u30F311\u4EE5\u964D\u3067\u4F5C\u6210\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u30014D\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u51E6\u7406\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u3067Unicode (UTF-8) \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u4E92\u63DB\u6027\u3092\u4FDD\u3064\u305F\u3081\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3001\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306E4D\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u305FMac Roman\u6587\u5B57\u30BB\u30C3\u30C8\u3078\u306E\u5909\u63DB\u3092\u5F37\u5236\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u6587\u5B57\u30BB\u30C3\u30C8\u306F",(0,d.jsx)(t.em,{children:"textFormat"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u884C\u3046\u306B\u306F\u3001",(0,d.jsx)(t.em,{children:"BLOB"})," \u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3046\u3061\u3044\u305A\u308C\u304B\u3092",(0,d.jsx)(t.em,{children:"textFormat"})," \u5F15\u6570\u306B\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(t.th,{children:"\u578B"}),(0,d.jsx)(t.th,{children:"\u5024"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Mac C string"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"0"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Mac Pascal string"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Mac text with length"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"2"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Mac text without length"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"3"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"UTF8 C string"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"UTF8 text with length"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"5"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"UTF8 text without length"}),(0,d.jsx)(t.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"\u201CUTF8\u201D\u304B\u3089\u59CB\u307E\u308B\u5B9A\u6570\u306F\u3001Unicode\u30E2\u30FC\u30C9\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(t.li,{children:"\u201CMac\u201D\u304B\u3089\u59CB\u307E\u308B\u5B9A\u6570\u306F\u300132 KB\u307E\u3067\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u6271\u3048\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(t.li,{children:["UTF-8\u4EE5\u5916\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(t.a,{href:"/docs/ja/commands/convert-to-text",title:"Convert to text",children:"Convert to text"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(t.p,{children:["\u3053\u308C\u3089\u306E\u5B9A\u6570\u3068\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,d.jsx)(t.a,{href:"/docs/ja/commands/text-to-blob",title:"TEXT TO BLOB",children:"TEXT TO BLOB"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"\u8B66\u544A:"})," \u8AAD\u307F\u8FBC\u3080\u6587\u5B57\u6570\u306F",(0,d.jsx)(t.em,{children:"textFormat"})," \u5F15\u6570\u306B\u3088\u308A\u6C7A\u5B9A\u3055\u308C\u307E\u3059\u3002\u305F\u3060\u3057Mac Text without length\u3068UTF8 Text without length\u306F\u9664\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5834\u5408\u3001\u5F15\u6570 ",(0,d.jsx)(t.em,{children:"textLength"}),"\u3067\u8AAD\u307F\u8FBC\u3080\u6587\u5B57\u6570\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u4ED6\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u306F\u3001",(0,d.jsx)(t.em,{children:"textLength"}),"\u306F\u7121\u8996\u3055\u308C\u3001\u7701\u7565\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(t.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(t.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6E21\u3059\u3068\u3001\u30C6\u30AD\u30B9\u30C8\u5024\u306F0\u304B\u3089\u59CB\u307E\u308B\u30AA\u30D5\u30BB\u30C3\u30C8\u4F4D\u7F6E\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002",(0,d.jsx)(t.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6307\u5B9A\u3057\u306A\u3044\u3068\u3001BLOB\u306E\u5148\u982D\u304B\u3089",(0,d.jsx)(t.em,{children:"textFormat"}),"\u306B\u6E21\u3057\u305F\u5024\u306B\u57FA\u3065\u304D\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002\u6587\u5B57\u9577\u304C\u6307\u5B9A\u3055\u308C\u306A\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u8AAD\u307F\u8FBC\u3080\u969B\u306B\u306F\u3001",(0,d.jsx)(t.em,{children:"offset"}),"\u5909\u6570\u5F15\u6570\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Note:"})," \u30AA\u30D5\u30BB\u30C3\u30C8\u5024\u3068\u3057\u3066\u30010 (\u30BC\u30ED) \u304B\u3089BLOB\u30B5\u30A4\u30BA-\u30C6\u30AD\u30B9\u30C8\u30B5\u30A4\u30BA\u306E\u9593\u306E\u6570\u5024\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u623B\u308A\u5024\u306F\u4E88\u671F\u3067\u304D\u306A\u3044\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(t.p,{children:["\u547C\u3073\u51FA\u3057\u5F8C\u3001",(0,d.jsx)(t.em,{children:"offset"}),"\u5909\u6570\u306F\u3001\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u30D0\u30A4\u30C8\u6570\u5206\u3060\u3051\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u540C\u3058",(0,d.jsx)(t.em,{children:"offset"}),"\u5909\u6570\u3092\u5225\u306EBLOB\u8AAD\u307F\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u4F7F\u7528\u3057\u3001\u5225\u306E\u5024\u3092BLOB\u304B\u3089\u8AAD\u307F\u3060\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(t.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/ja/commands/blob-to-integer",children:"BLOB to integer"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/blob-to-longint",children:"BLOB to longint"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/blob-to-real",children:"BLOB to real"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/convert-to-text",children:"Convert to text"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/real-to-blob",children:"REAL TO BLOB"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/ja/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,d.jsx)(t.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(t.td,{children:"555"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,d.jsx)(t,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return c},a:function(){return l}});var s=e(667294);let d={},r=s.createContext(d);function l(n){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);