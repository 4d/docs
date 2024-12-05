"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2345"],{846780:function(n,d,e){e.r(d),e.d(d,{metadata:()=>s,contentTitle:()=>l,default:()=>x,assets:()=>i,toc:()=>h,frontMatter:()=>t});var s=JSON.parse('{"id":"Concepts/data-types","title":"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u6982\u8981","description":"4D \u306B\u304A\u3044\u3066\u30C7\u30FC\u30BF\u306F\u3001\u4E3B\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9\u3068 4D \u30E9\u30F3\u30B2\u30FC\u30B8\u3068\u3044\u30462\u3064\u306E\u5834\u6240\u3067\u3001\u305D\u306E\u30BF\u30A4\u30D7\u306B\u5FDC\u3058\u3066\u6271\u308F\u308C\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/data-types.md","sourceDirName":"Concepts","slug":"/Concepts/data-types","permalink":"/docs/ja/18/Concepts/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"data-types","title":"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u6982\u8981"},"sidebar":"docs","previous":{"title":"\u6982\u8981","permalink":"/docs/ja/18/Concepts/quick-tour"},"next":{"title":"BLOB","permalink":"/docs/ja/18/Concepts/blob"}}'),r=e("785893"),c=e("250065");let t={id:"data-types",title:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u6982\u8981"},l=void 0,i={},h=[{value:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024",id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024",level:2},{value:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u5909\u63DB",id:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u5909\u63DB",level:2}];function j(n){let d={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:"4D \u306B\u304A\u3044\u3066\u30C7\u30FC\u30BF\u306F\u3001\u4E3B\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9\u3068 4D \u30E9\u30F3\u30B2\u30FC\u30B8\u3068\u3044\u30462\u3064\u306E\u5834\u6240\u3067\u3001\u305D\u306E\u30BF\u30A4\u30D7\u306B\u5FDC\u3058\u3066\u6271\u308F\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(d.p,{children:"\u3053\u306E2\u3064\u306F\u304A\u304A\u3088\u305D\u540C\u3058\u3082\u306E\u3067\u3059\u304C\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30EC\u30D9\u30EB\u3067\u63D0\u4F9B\u3055\u308C\u3066\u3044\u308B\u3044\u304F\u3064\u304B\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306F\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u304A\u3044\u3066\u306F\u76F4\u63A5\u5229\u7528\u53EF\u80FD\u3067\u306F\u306A\u304F\u3001\u81EA\u52D5\u7684\u306B\u9069\u5B9C\u5909\u63DB\u3055\u308C\u307E\u3059\u3002 \u540C\u69D8\u306B\u3001\u3044\u304F\u3064\u304B\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306F\u30E9\u30F3\u30B2\u30FC\u30B8\u3067\u3057\u304B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002 \u5404\u5834\u6240\u3067\u5229\u7528\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3068\u3001\u30E9\u30F3\u30B2\u30FC\u30B8\u3067\u306E\u5BA3\u8A00\u306E\u4ED5\u65B9\u306E\u4E00\u89A7\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7"}),(0,r.jsx)(d.th,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"}),(0,r.jsx)(d.th,{children:"\u30E9\u30F3\u30B2\u30FC\u30B8"}),(0,r.jsx)(d.th,{children:"\u5909\u6570\u5BA3\u8A00"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/string",children:"\u6587\u5B57\u5217"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u30C6\u30AD\u30B9\u30C8\u306B\u5909\u63DB"}),(0,r.jsx)(d.td,{children:"-"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/string",children:"\u30C6\u30AD\u30B9\u30C8"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_TEXT"}),", ",(0,r.jsx)(d.code,{children:"ARRAY TEXT"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/date",children:"Date"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_DATE"}),", ",(0,r.jsx)(d.code,{children:"ARRAY DATE"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/time",children:"Time"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_TIME"}),", ",(0,r.jsx)(d.code,{children:"ARRAY TIME"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/boolean",children:"\u30D6\u30FC\u30EB"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_BOOLEAN"}),", ",(0,r.jsx)(d.code,{children:"ARRAY BOOLEAN"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"\u6574\u6570"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u500D\u9577\u6574\u6570\u306B\u5909\u63DB"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"ARRAY INTEGER"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"Longint"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_LONGINT"}),", ",(0,r.jsx)(d.code,{children:"ARRAY LONGINT"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"64\u30D3\u30C3\u30C8\u6574\u6570"})}),(0,r.jsx)(d.td,{children:"\u25EF (SQL)"}),(0,r.jsx)(d.td,{children:"\u5B9F\u6570\u306B\u5909\u63DB"}),(0,r.jsx)(d.td,{children:"-"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"\u5B9F\u6570"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_REAL"}),", ",(0,r.jsx)(d.code,{children:"ARRAY REAL"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/null-undefined",children:"\u672A\u5B9A\u7FA9"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"-"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/null-undefined",children:"Null"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"-"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/pointer",children:"\u30DD\u30A4\u30F3\u30BF\u30FC"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_POINTER"}),", ",(0,r.jsx)(d.code,{children:"ARRAY POINTER"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/picture",children:"\u30D4\u30AF\u30C1\u30E3\u30FC"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_PICTURE"}),", ",(0,r.jsx)(d.code,{children:"ARRAY PICTURE"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/blob",children:"BLOB"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_BLOB"}),", ",(0,r.jsx)(d.code,{children:"ARRAY BLOB"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/object",children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"C_OBJECT"}),", ",(0,r.jsx)(d.code,{children:"ARRAY OBJECT"})]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/collection",children:"Collection"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"C_COLLECTION"})})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/variant",children:"\u30D0\u30EA\u30A2\u30F3\u30C8"}),"(2)"]}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"\u25EF"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,r.jsxs)(d.p,{children:["(1) ORDA \u3067\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 (\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3) \u3092\u4ECB\u3057\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u6271\u3046\u305F\u3081\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u304A\u3044\u3066\u5229\u7528\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u307F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,r.jsx)(d.a,{href:"/docs/ja/18/Concepts/object",children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["(2) \u30D0\u30EA\u30A2\u30F3\u30C8\u306F\u5B9F\u969B\u306E\u3068\u3053\u308D ",(0,r.jsx)(d.em,{children:"\u30C7\u30FC\u30BF"})," \u30BF\u30A4\u30D7\u3067\u306F\u306A\u304F\u3001\u3042\u3089\u3086\u308B\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u5024\u3092\u683C\u7D0D\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B ",(0,r.jsx)(d.em,{children:"\u5909\u6570"})," \u30BF\u30A4\u30D7\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(d.h2,{id:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024",children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"}),"\n",(0,r.jsx)(d.p,{children:"\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u6307\u793A\u5B50\u306B\u3088\u3063\u3066\u5909\u6570\u306E\u578B\u304C\u6C7A\u307E\u308B\u3068\u304D\u3001\u5909\u6570\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5024\u3092\u53D7\u3051\u53D6\u308A\u3001\u5272\u308A\u5F53\u3066\u304C\u3055\u308C\u306A\u3044\u9650\u308A\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u9593\u306F\u305D\u306E\u5024\u3092\u4FDD\u3061\u7D9A\u3051\u307E\u3059\u3002"}),"\n",(0,r.jsx)(d.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5024\u306F\u3001\u5909\u6570\u306E\u578B\u3068\u30AB\u30C6\u30B4\u30EA\u3001\u305D\u306E\u5B9F\u884C\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8 (\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u304B\u30B3\u30F3\u30D1\u30A4\u30EB\u304B) \u306B\u52A0\u3048\u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E\u30B3\u30F3\u30D1\u30A4\u30E9\u30FC\u30DA\u30FC\u30B8\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30B3\u30F3\u30D1\u30A4\u30EB\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u6C7A\u307E\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:'\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u304A\u3088\u3073\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306F\u5E38\u306B "\u30BC\u30ED\u306B\u3059\u308B" \u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u578B\u306B\u3088\u3063\u3066\u3001"0"\u3001\u7A7A\u306E\u6587\u5B57\u5217\u3001\u7A7A\u306EBlob\u3001Nil\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u7A7A\u306E\u65E5\u4ED8 (00-00-00)\u3001\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002'}),"\n",(0,r.jsxs)(d.li,{children:["\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u4EE5\u4E0B\u306E\u69D8\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059:\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:"\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9: \u30BC\u30ED\u306B\u3059\u308B"}),"\n",(0,r.jsxs)(d.li,{children:["\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E",(0,r.jsx)(d.strong,{children:"\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u521D\u671F\u5316\u30AA\u30D7\u30B7\u30E7\u30F3"}),"\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059:\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:'"\u30BC\u30ED\u306B\u3059\u308B" \u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u30BC\u30ED\u306B\u306A\u308A\u307E\u3059\u3002'}),"\n",(0,r.jsx)(d.li,{children:'"\u30E9\u30F3\u30C0\u30E0\u5024\u306B\u3059\u308B" \u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u6570\u5024\u3068\u6642\u9593\u306B\u3064\u3044\u3066\u306F0x72677267\u3001\u30D6\u30FC\u30EB\u306B\u3064\u3044\u3066\u306F\u5E38\u306B true\u3001\u4ED6\u306E\u3082\u306E\u306B\u3064\u3044\u3066\u306F "\u30BC\u30ED\u306B\u3059\u308B" \u306E\u5834\u5408\u3068\u540C\u3058\u3067\u3059\u3002'}),"\n",(0,r.jsxs)(d.li,{children:['"\u306A\u3057" \u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u5909\u6570\u306F\u521D\u671F\u5316\u3055\u308C\u305A\u3001\u30E1\u30E2\u30EA\u306B\u3042\u308B\u5024\u304C\u63A1\u7528\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u306F\u3001\u5225\u306E\u5909\u6570\u306B\u4EE5\u524D\u4F7F\u308F\u308C\u305F\u5024\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002 ',(0,r.jsx)(d.strong,{children:"\u6CE8:"}),' 4D \u3067\u306F "\u30BC\u30ED\u306B\u3059\u308B" \u306E\u8A2D\u5B9A\u3092\u63A8\u5968\u3057\u3066\u3044\u307E\u3059\u3002']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(d.p,{children:"\u4EE5\u4E0B\u306E\u8868\u306F\u3053\u308C\u3089\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5024\u3092\u3042\u3089\u308F\u3057\u305F\u3082\u306E\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"\u578B"}),(0,r.jsx)(d.th,{children:'\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570 / \u30D7\u30ED\u30BB\u30B9\u5909\u6570 / \u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u30E2\u30FC\u30C9\u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570 / \u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067 "\u30BC\u30ED\u306B\u3059\u308B" \u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570'}),(0,r.jsx)(d.th,{children:'\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067 "\u30E9\u30F3\u30C0\u30E0\u5024\u306B\u3059\u308B" \u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570'}),(0,r.jsx)(d.th,{children:'\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067 "\u306A\u3057" \u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570'})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30D6\u30FC\u30EB"}),(0,r.jsx)(d.td,{children:"false"}),(0,r.jsx)(d.td,{children:"true"}),(0,r.jsx)(d.td,{children:"true (\u5834\u5408\u306B\u3088\u308B)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Date"}),(0,r.jsx)(d.td,{children:"00-00-00"}),(0,r.jsx)(d.td,{children:"00-00-00"}),(0,r.jsx)(d.td,{children:"00-00-00"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Integer"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"1919382119"}),(0,r.jsx)(d.td,{children:"909540880 (\u5834\u5408\u306B\u3088\u308B)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Time"}),(0,r.jsx)(d.td,{children:"00:00:00"}),(0,r.jsx)(d.td,{children:"533161:41:59"}),(0,r.jsx)(d.td,{children:"249345:34:24 (\u5834\u5408\u306B\u3088\u308B)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC"}),(0,r.jsx)(d.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30B5\u30A4\u30BA=0"}),(0,r.jsx)(d.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30B5\u30A4\u30BA=0"}),(0,r.jsx)(d.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30B5\u30A4\u30BA=0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u5B9F\u6570"}),(0,r.jsx)(d.td,{children:"0"}),(0,r.jsx)(d.td,{children:"1.250753659382e+243"}),(0,r.jsx)(d.td,{children:"1.972748538022e-217 (\u5834\u5408\u306B\u3088\u308B)"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC"}),(0,r.jsx)(d.td,{children:"Nil=true"}),(0,r.jsx)(d.td,{children:"Nil=true"}),(0,r.jsx)(d.td,{children:"Nil=true"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30C6\u30AD\u30B9\u30C8"}),(0,r.jsx)(d.td,{children:'""'}),(0,r.jsx)(d.td,{children:'""'}),(0,r.jsx)(d.td,{children:'""'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"BLOB"}),(0,r.jsx)(d.td,{children:"BLOB \u30B5\u30A4\u30BA=0"}),(0,r.jsx)(d.td,{children:"BLOB \u30B5\u30A4\u30BA=0"}),(0,r.jsx)(d.td,{children:"BLOB \u30B5\u30A4\u30BA=0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,r.jsx)(d.td,{children:"null"}),(0,r.jsx)(d.td,{children:"null"}),(0,r.jsx)(d.td,{children:"null"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,r.jsx)(d.td,{children:"null"}),(0,r.jsx)(d.td,{children:"null"}),(0,r.jsx)(d.td,{children:"null"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Variant"}),(0,r.jsx)(d.td,{children:"undefined"}),(0,r.jsx)(d.td,{children:"undefined"}),(0,r.jsx)(d.td,{children:"undefined"})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u5909\u63DB",children:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306E\u5909\u63DB"}),"\n",(0,r.jsx)(d.p,{children:'4D \u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u306F\u3001\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u9593\u306E\u5909\u63DB\u3092\u304A\u3053\u306A\u3046\u6F14\u7B97\u5B50\u3084\u30B3\u30DE\u30F3\u30C9\u304C\u3042\u308A\u307E\u3059\u3002 4D \u30E9\u30F3\u30B2\u30FC\u30B8\u306F\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002 \u305F\u3068\u3048\u3070\u3001"abc"+0.5+!12/25/96!-?00:30:45?\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u3053\u308C\u306F\u3001\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9 (\u69CB\u6587) \u30A8\u30E9\u30FC\u306B\u306A\u308A\u307E\u3059\u3002'}),"\n",(0,r.jsx)(d.p,{children:"\u6B21\u306E\u8868\u306F\u3001\u57FA\u672C\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3001\u5909\u63DB\u3067\u304D\u308B\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3001\u305D\u308C\u3092\u5B9F\u884C\u3059\u308B\u969B\u306B\u4F7F\u7528\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u793A\u3057\u3066\u3044\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7"}),(0,r.jsx)(d.th,{children:"\u6587\u5B57\u5217\u306B\u5909\u63DB"}),(0,r.jsx)(d.th,{children:"\u6570\u5024\u306B\u5909\u63DB"}),(0,r.jsx)(d.th,{children:"\u65E5\u4ED8\u306B\u5909\u63DB"}),(0,r.jsx)(d.th,{children:"\u6642\u9593\u306B\u5909\u63DB"}),(0,r.jsx)(d.th,{children:"\u30D6\u30FC\u30EB\u306B\u5909\u63DB"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u6587\u5B57\u5217 (1)"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Num"}),(0,r.jsx)(d.td,{children:"Date"}),(0,r.jsx)(d.td,{children:"Time"}),(0,r.jsx)(d.td,{children:"Bool"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u6570\u5024 (2)"}),(0,r.jsx)(d.td,{children:"Text"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Bool"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Date"}),(0,r.jsx)(d.td,{children:"Text"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Bool"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"Time"}),(0,r.jsx)(d.td,{children:"Text"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Bool"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"\u30D6\u30FC\u30EB"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{children:"Num"}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsxs)(d.p,{children:["(1) JSON\u5F62\u5F0F\u306E\u6587\u5B57\u5217\u306F ",(0,r.jsx)(d.code,{children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30B9\u30AB\u30E9\u30FC\u30C7\u30FC\u30BF\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001\u3042\u308B\u3044\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u5909\u63DB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(d.p,{children:"(2) \u6642\u9593\u306F\u6570\u5024\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"\u6CE8:"})," \u3053\u306E\u8868\u306B\u793A\u3059\u30C7\u30FC\u30BF\u5909\u63DB\u306E\u4ED6\u306B\u3001\u6F14\u7B97\u5B50\u3068\u4ED6\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u7D44\u307F\u5408\u305B\u308B\u3053\u3068\u3067\u3001\u3088\u308A\u6D17\u7DF4\u3055\u308C\u305F\u30C7\u30FC\u30BF\u5909\u63DB\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]})]})}function x(n={}){let{wrapper:d}={...(0,c.a)(),...n.components};return d?(0,r.jsx)(d,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},250065:function(n,d,e){e.d(d,{Z:function(){return l},a:function(){return t}});var s=e(667294);let r={},c=s.createContext(r);function t(n){let d=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(d):{...d,...n}},[d,n])}function l(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(c.Provider,{value:d},n.children)}}}]);