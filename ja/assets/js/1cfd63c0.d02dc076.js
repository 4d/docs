/*! For license information please see 1cfd63c0.d02dc076.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46761],{637986:(n,d,e)=>{e.r(d),e.d(d,{assets:()=>i,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=e(474848),r=e(28453);const c={id:"data-types",title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981"},t=void 0,l={id:"Concepts/data-types",title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981",description:"4D \u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u306f\u3001\u4e3b\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u3068 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u3068\u3044\u30462\u3064\u306e\u5834\u6240\u3067\u3001\u305d\u306e\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u3066\u6271\u308f\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/ja/18/Concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"data-types",title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"\u6982\u8981",permalink:"/docs/ja/18/Concepts/quick-tour"},next:{title:"BLOB",permalink:"/docs/ja/18/Concepts/blob"}},i={},h=[{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",level:2},{value:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db",id:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db",level:2}];function j(n){const d={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"4D \u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u306f\u3001\u4e3b\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u3068 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u3068\u3044\u30462\u3064\u306e\u5834\u6240\u3067\u3001\u305d\u306e\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u3066\u6271\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u3053\u306e2\u3064\u306f\u304a\u304a\u3088\u305d\u540c\u3058\u3082\u306e\u3067\u3059\u304c\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ec\u30d9\u30eb\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u3044\u304f\u3064\u304b\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306f\u30e9\u30f3\u30b2\u30fc\u30b8\u306b\u304a\u3044\u3066\u306f\u76f4\u63a5\u5229\u7528\u53ef\u80fd\u3067\u306f\u306a\u304f\u3001\u81ea\u52d5\u7684\u306b\u9069\u5b9c\u5909\u63db\u3055\u308c\u307e\u3059\u3002 \u540c\u69d8\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306f\u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u3057\u304b\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002 \u5404\u5834\u6240\u3067\u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3068\u3001\u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u306e\u5ba3\u8a00\u306e\u4ed5\u65b9\u306e\u4e00\u89a7\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7"}),(0,s.jsx)(d.th,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"}),(0,s.jsx)(d.th,{children:"\u30e9\u30f3\u30b2\u30fc\u30b8"}),(0,s.jsx)(d.th,{children:"\u5909\u6570\u5ba3\u8a00"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/string",children:"\u6587\u5b57\u5217"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u30c6\u30ad\u30b9\u30c8\u306b\u5909\u63db"}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/string",children:"\u30c6\u30ad\u30b9\u30c8"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_TEXT"}),", ",(0,s.jsx)(d.code,{children:"ARRAY TEXT"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/date",children:"\u65e5\u4ed8"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_DATE"}),", ",(0,s.jsx)(d.code,{children:"ARRAY DATE"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/time",children:"\u6642\u9593"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_TIME"}),", ",(0,s.jsx)(d.code,{children:"ARRAY TIME"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/boolean",children:"\u30d6\u30fc\u30eb"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_BOOLEAN"}),", ",(0,s.jsx)(d.code,{children:"ARRAY BOOLEAN"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"\u6574\u6570"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u500d\u9577\u6574\u6570\u306b\u5909\u63db"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ARRAY INTEGER"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"\u500d\u9577\u6574\u6570"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_LONGINT"}),", ",(0,s.jsx)(d.code,{children:"ARRAY LONGINT"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"64\u30d3\u30c3\u30c8\u6574\u6570"})}),(0,s.jsx)(d.td,{children:"\u25ef (SQL)"}),(0,s.jsx)(d.td,{children:"\u5b9f\u6570\u306b\u5909\u63db"}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/number",children:"\u5b9f\u6570"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_REAL"}),", ",(0,s.jsx)(d.code,{children:"ARRAY REAL"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/null-undefined",children:"\u672a\u5b9a\u7fa9"})}),(0,s.jsx)(d.td,{children:"-"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/null-undefined",children:"Null"})}),(0,s.jsx)(d.td,{children:"-"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/pointer",children:"\u30dd\u30a4\u30f3\u30bf\u30fc"})}),(0,s.jsx)(d.td,{children:"-"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_POINTER"}),", ",(0,s.jsx)(d.code,{children:"ARRAY POINTER"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/picture",children:"\u30d4\u30af\u30c1\u30e3\u30fc"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_PICTURE"}),", ",(0,s.jsx)(d.code,{children:"ARRAY PICTURE"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/blob",children:"BLOB"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_BLOB"}),", ",(0,s.jsx)(d.code,{children:"ARRAY BLOB"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/object",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"C_OBJECT"}),", ",(0,s.jsx)(d.code,{children:"ARRAY OBJECT"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/collection",children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"})}),(0,s.jsx)(d.td,{children:"-"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"C_COLLECTION"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/variant",children:"\u30d0\u30ea\u30a2\u30f3\u30c8"}),"(2)"]}),(0,s.jsx)(d.td,{children:"-"}),(0,s.jsx)(d.td,{children:"\u25ef"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["(1) ORDA \u3067\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3) \u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6271\u3046\u305f\u3081\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3044\u3066\u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,s.jsx)(d.a,{href:"/docs/ja/18/Concepts/object",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u8aac\u660e\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:["(2) \u30d0\u30ea\u30a2\u30f3\u30c8\u306f\u5b9f\u969b\u306e\u3068\u3053\u308d ",(0,s.jsx)(d.em,{children:"\u30c7\u30fc\u30bf"})," \u30bf\u30a4\u30d7\u3067\u306f\u306a\u304f\u3001\u3042\u3089\u3086\u308b\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5024\u3092\u683c\u7d0d\u3059\u308b\u3053\u3068\u306e\u3067\u304d\u308b ",(0,s.jsx)(d.em,{children:"\u5909\u6570"})," \u30bf\u30a4\u30d7\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(d.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"}),"\n",(0,s.jsx)(d.p,{children:"\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u6307\u793a\u5b50\u306b\u3088\u3063\u3066\u5909\u6570\u306e\u578b\u304c\u6c7a\u307e\u308b\u3068\u304d\u3001\u5909\u6570\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5024\u3092\u53d7\u3051\u53d6\u308a\u3001\u5272\u308a\u5f53\u3066\u304c\u3055\u308c\u306a\u3044\u9650\u308a\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u9593\u306f\u305d\u306e\u5024\u3092\u4fdd\u3061\u7d9a\u3051\u307e\u3059\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5024\u306f\u3001\u5909\u6570\u306e\u578b\u3068\u30ab\u30c6\u30b4\u30ea\u3001\u305d\u306e\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 (\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u304b\u30b3\u30f3\u30d1\u30a4\u30eb\u304b) \u306b\u52a0\u3048\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u3067\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u8a2d\u5b9a\u306e\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u30da\u30fc\u30b8\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30b3\u30f3\u30d1\u30a4\u30eb\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u6c7a\u307e\u308a\u307e\u3059:"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:'\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u304a\u3088\u3073\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306f\u5e38\u306b "\u30bc\u30ed\u306b\u3059\u308b" \u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u578b\u306b\u3088\u3063\u3066\u3001"0"\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3001\u7a7a\u306eBlob\u3001Nil\u30dd\u30a4\u30f3\u30bf\u30fc\u3001\u7a7a\u306e\u65e5\u4ed8 (00-00-00)\u3001\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002'}),"\n",(0,s.jsxs)(d.li,{children:["\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059:\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30e2\u30fc\u30c9: \u30bc\u30ed\u306b\u3059\u308b"}),"\n",(0,s.jsxs)(d.li,{children:["\u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u306b\u304a\u3044\u3066\u306f\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u8a2d\u5b9a\u306e",(0,s.jsx)(d.strong,{children:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u521d\u671f\u5316\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059:\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:'"\u30bc\u30ed\u306b\u3059\u308b" \u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u30bc\u30ed\u306b\u306a\u308a\u307e\u3059\u3002'}),"\n",(0,s.jsx)(d.li,{children:'"\u30e9\u30f3\u30c0\u30e0\u5024\u306b\u3059\u308b" \u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u6570\u5024\u3068\u6642\u9593\u306b\u3064\u3044\u3066\u306f0x72677267\u3001\u30d6\u30fc\u30eb\u306b\u3064\u3044\u3066\u306f\u5e38\u306b true\u3001\u4ed6\u306e\u3082\u306e\u306b\u3064\u3044\u3066\u306f "\u30bc\u30ed\u306b\u3059\u308b" \u306e\u5834\u5408\u3068\u540c\u3058\u3067\u3059\u3002'}),"\n",(0,s.jsxs)(d.li,{children:['"\u306a\u3057" \u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u5909\u6570\u306f\u521d\u671f\u5316\u3055\u308c\u305a\u3001\u30e1\u30e2\u30ea\u306b\u3042\u308b\u5024\u304c\u63a1\u7528\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u306f\u3001\u5225\u306e\u5909\u6570\u306b\u4ee5\u524d\u4f7f\u308f\u308c\u305f\u5024\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 ',(0,s.jsx)(d.strong,{children:"\u6ce8:"}),' 4D \u3067\u306f "\u30bc\u30ed\u306b\u3059\u308b" \u306e\u8a2d\u5b9a\u3092\u63a8\u5968\u3057\u3066\u3044\u307e\u3059\u3002']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.p,{children:"\u4ee5\u4e0b\u306e\u8868\u306f\u3053\u308c\u3089\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5024\u3092\u3042\u3089\u308f\u3057\u305f\u3082\u306e\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u578b"}),(0,s.jsx)(d.th,{children:'\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570 / \u30d7\u30ed\u30bb\u30b9\u5909\u6570 / \u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u306e\u30ed\u30fc\u30ab\u30eb\u5909\u6570 / \u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u3067 "\u30bc\u30ed\u306b\u3059\u308b" \u306e\u30ed\u30fc\u30ab\u30eb\u5909\u6570'}),(0,s.jsx)(d.th,{children:'\u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u3067 "\u30e9\u30f3\u30c0\u30e0\u5024\u306b\u3059\u308b" \u306e\u30ed\u30fc\u30ab\u30eb\u5909\u6570'}),(0,s.jsx)(d.th,{children:'\u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u3067 "\u306a\u3057" \u306e\u30ed\u30fc\u30ab\u30eb\u5909\u6570'})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30d6\u30fc\u30eb"}),(0,s.jsx)(d.td,{children:"false"}),(0,s.jsx)(d.td,{children:"true"}),(0,s.jsx)(d.td,{children:"true (\u5834\u5408\u306b\u3088\u308b)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u65e5\u4ed8"}),(0,s.jsx)(d.td,{children:"00-00-00"}),(0,s.jsx)(d.td,{children:"00-00-00"}),(0,s.jsx)(d.td,{children:"00-00-00"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u500d\u9577\u6574\u6570"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"1919382119"}),(0,s.jsx)(d.td,{children:"909540880 (\u5834\u5408\u306b\u3088\u308b)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u6642\u9593"}),(0,s.jsx)(d.td,{children:"00:00:00"}),(0,s.jsx)(d.td,{children:"533161:41:59"}),(0,s.jsx)(d.td,{children:"249345:34:24 (\u5834\u5408\u306b\u3088\u308b)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc"}),(0,s.jsx)(d.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc\u30b5\u30a4\u30ba=0"}),(0,s.jsx)(d.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc\u30b5\u30a4\u30ba=0"}),(0,s.jsx)(d.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc\u30b5\u30a4\u30ba=0"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u5b9f\u6570"}),(0,s.jsx)(d.td,{children:"0"}),(0,s.jsx)(d.td,{children:"1.250753659382e+243"}),(0,s.jsx)(d.td,{children:"1.972748538022e-217 (\u5834\u5408\u306b\u3088\u308b)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30dd\u30a4\u30f3\u30bf\u30fc"}),(0,s.jsx)(d.td,{children:"Nil=true"}),(0,s.jsx)(d.td,{children:"Nil=true"}),(0,s.jsx)(d.td,{children:"Nil=true"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30c6\u30ad\u30b9\u30c8"}),(0,s.jsx)(d.td,{children:'""'}),(0,s.jsx)(d.td,{children:'""'}),(0,s.jsx)(d.td,{children:'""'})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"BLOB"}),(0,s.jsx)(d.td,{children:"BLOB \u30b5\u30a4\u30ba=0"}),(0,s.jsx)(d.td,{children:"BLOB \u30b5\u30a4\u30ba=0"}),(0,s.jsx)(d.td,{children:"BLOB \u30b5\u30a4\u30ba=0"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,s.jsx)(d.td,{children:"null"}),(0,s.jsx)(d.td,{children:"null"}),(0,s.jsx)(d.td,{children:"null"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"}),(0,s.jsx)(d.td,{children:"null"}),(0,s.jsx)(d.td,{children:"null"}),(0,s.jsx)(d.td,{children:"null"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30d0\u30ea\u30a2\u30f3\u30c8"}),(0,s.jsx)(d.td,{children:"undefined"}),(0,s.jsx)(d.td,{children:"undefined"}),(0,s.jsx)(d.td,{children:"undefined"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db",children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db"}),"\n",(0,s.jsx)(d.p,{children:'4D \u30e9\u30f3\u30b2\u30fc\u30b8\u306b\u306f\u3001\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u9593\u306e\u5909\u63db\u3092\u304a\u3053\u306a\u3046\u6f14\u7b97\u5b50\u3084\u30b3\u30de\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u306f\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001"abc"+0.5+!12/25/96!-?00:30:45?\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u3053\u308c\u306f\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9 (\u69cb\u6587) \u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u3002'}),"\n",(0,s.jsx)(d.p,{children:"\u6b21\u306e\u8868\u306f\u3001\u57fa\u672c\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3001\u5909\u63db\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3001\u305d\u308c\u3092\u5b9f\u884c\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u793a\u3057\u3066\u3044\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7"}),(0,s.jsx)(d.th,{children:"\u6587\u5b57\u5217\u306b\u5909\u63db"}),(0,s.jsx)(d.th,{children:"\u6570\u5024\u306b\u5909\u63db"}),(0,s.jsx)(d.th,{children:"\u65e5\u4ed8\u306b\u5909\u63db"}),(0,s.jsx)(d.th,{children:"\u6642\u9593\u306b\u5909\u63db"}),(0,s.jsx)(d.th,{children:"\u30d6\u30fc\u30eb\u306b\u5909\u63db"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u6587\u5b57\u5217 (1)"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Num"}),(0,s.jsx)(d.td,{children:"Date"}),(0,s.jsx)(d.td,{children:"Time"}),(0,s.jsx)(d.td,{children:"Bool"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u6570\u5024 (2)"}),(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Bool"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u65e5\u4ed8"}),(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Bool"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u6642\u9593"}),(0,s.jsx)(d.td,{children:"String"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Bool"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"\u30d6\u30fc\u30eb"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Num"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["(1) JSON\u5f62\u5f0f\u306e\u6587\u5b57\u5217\u306f ",(0,s.jsx)(d.code,{children:"JSON Parse"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u30b9\u30ab\u30e9\u30fc\u30c7\u30fc\u30bf\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001\u3042\u308b\u3044\u306f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(d.p,{children:"(2) \u6642\u9593\u306f\u6570\u5024\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.strong,{children:"\u6ce8:"})," \u3053\u306e\u8868\u306b\u793a\u3059\u30c7\u30fc\u30bf\u5909\u63db\u306e\u4ed6\u306b\u3001\u6f14\u7b97\u5b50\u3068\u4ed6\u306e\u30b3\u30de\u30f3\u30c9\u3092\u7d44\u307f\u5408\u305b\u308b\u3053\u3068\u3067\u3001\u3088\u308a\u6d17\u7df4\u3055\u308c\u305f\u30c7\u30fc\u30bf\u5909\u63db\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function x(n={}){const{wrapper:d}={...(0,r.R)(),...n.components};return d?(0,s.jsx)(d,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},221020:(n,d,e)=>{var s=e(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function h(n,d,e){var s,c={},h=null,j=null;for(s in void 0!==e&&(h=""+e),void 0!==d.key&&(h=""+d.key),void 0!==d.ref&&(j=d.ref),d)t.call(d,s)&&!i.hasOwnProperty(s)&&(c[s]=d[s]);if(n&&n.defaultProps)for(s in d=n.defaultProps)void 0===c[s]&&(c[s]=d[s]);return{$$typeof:r,type:n,key:h,ref:j,props:c,_owner:l.current}}d.Fragment=c,d.jsx=h,d.jsxs=h},474848:(n,d,e)=>{n.exports=e(221020)},28453:(n,d,e)=>{e.d(d,{R:()=>t,x:()=>l});var s=e(296540);const r={},c=s.createContext(r);function t(n){const d=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(d):{...d,...n}}),[d,n])}function l(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(c.Provider,{value:d},n.children)}}}]);