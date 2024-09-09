/*! For license information please see e13c5718.d9dbd616.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21680],{220153:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>i,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=d(474848),r=d(28453);const c={id:"data-types",title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981"},t=void 0,l={id:"Concepts/data-types",title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981",description:"4D \u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u306f\u3001\u4e3b\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u3068 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u3068\u3044\u30462\u3064\u306e\u5834\u6240\u3067\u3001\u305d\u306e\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u3066\u6271\u308f\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/ja/20/Concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"data-types",title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981"},sidebar:"docs",previous:{title:"\u6f14\u7b97\u5b50",permalink:"/docs/ja/20/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/ja/20/Concepts/blob"}},i={},h=[{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u306e Null",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u306e-null",level:3},{value:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db",id:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db",level:2}];function j(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"4D \u306b\u304a\u3044\u3066\u30c7\u30fc\u30bf\u306f\u3001\u4e3b\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u3068 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u3068\u3044\u30462\u3064\u306e\u5834\u6240\u3067\u3001\u305d\u306e\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u3066\u6271\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e2\u3064\u306f\u304a\u304a\u3088\u305d\u540c\u3058\u3082\u306e\u3067\u3059\u304c\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ec\u30d9\u30eb\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u3044\u304f\u3064\u304b\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306f\u30e9\u30f3\u30b2\u30fc\u30b8\u306b\u304a\u3044\u3066\u306f\u76f4\u63a5\u5229\u7528\u53ef\u80fd\u3067\u306f\u306a\u304f\u3001\u81ea\u52d5\u7684\u306b\u9069\u5b9c\u5909\u63db\u3055\u308c\u307e\u3059\u3002 \u540c\u69d8\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306f\u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u3057\u304b\u5229\u7528\u3067\u304d\u307e\u305b\u3093\u3002 \u5404\u5834\u6240\u3067\u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3068\u3001\u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u306e\u5ba3\u8a00\u306e\u4ed5\u65b9\u306e\u4e00\u89a7\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7"}),(0,s.jsx)(e.th,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"}),(0,s.jsx)(e.th,{children:"\u30e9\u30f3\u30b2\u30fc\u30b8"}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.a,{href:"/docs/ja/20/Concepts/variables#var-%E3%82%AD%E3%83%BC%E3%83%AF%E3%83%BC%E3%83%89%E3%81%AB%E3%82%88%E3%82%8B%E5%AE%A3%E8%A8%80",children:[(0,s.jsx)(e.code,{children:"var"})," \u5ba3\u8a00"]})}),(0,s.jsx)(e.th,{children:(0,s.jsxs)(e.a,{href:"/docs/ja/20/Concepts/variables#c_-%E6%8C%87%E7%A4%BA%E5%AD%90%E3%81%AB%E3%82%88%E3%82%8B%E5%AE%A3%E8%A8%80",children:[(0,s.jsx)(e.code,{children:"C_"})," \u307e\u305f\u306f ",(0,s.jsx)(e.code,{children:"ARRAY"})," \u5ba3\u8a00"]})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/string",children:"\u6587\u5b57\u5217"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u30c6\u30ad\u30b9\u30c8\u306b\u5909\u63db"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/string",children:"\u30c6\u30ad\u30b9\u30c8"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Text"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_TEXT"}),", ",(0,s.jsx)(e.code,{children:"ARRAY TEXT"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/date",children:"\u65e5\u4ed8"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Date"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_DATE"}),", ",(0,s.jsx)(e.code,{children:"ARRAY DATE"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/time",children:"\u6642\u9593"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Time"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_TIME"}),", ",(0,s.jsx)(e.code,{children:"ARRAY TIME"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/boolean",children:"\u30d6\u30fc\u30eb"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Boolean"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_BOOLEAN"}),", ",(0,s.jsx)(e.code,{children:"ARRAY BOOLEAN"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/number",children:"\u6574\u6570"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570\u306b\u5909\u63db"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Integer"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ARRAY INTEGER"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/number",children:"\u500d\u9577\u6574\u6570"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Integer"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_LONGINT"}),", ",(0,s.jsx)(e.code,{children:"ARRAY LONGINT"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/number",children:"64\u30d3\u30c3\u30c8\u6574\u6570"})}),(0,s.jsx)(e.td,{children:"\u25ef (SQL)"}),(0,s.jsx)(e.td,{children:"\u5b9f\u6570\u306b\u5909\u63db"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/number",children:"\u5b9f\u6570"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Real"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_REAL"}),", ",(0,s.jsx)(e.code,{children:"ARRAY REAL"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/null-undefined",children:"\u672a\u5b9a\u7fa9"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/null-undefined",children:"Null"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/pointer",children:"\u30dd\u30a4\u30f3\u30bf\u30fc"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Pointer"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_POINTER"}),", ",(0,s.jsx)(e.code,{children:"ARRAY POINTER"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/picture",children:"\u30d4\u30af\u30c1\u30e3\u30fc"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Picture"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_PICTURE"}),", ",(0,s.jsx)(e.code,{children:"ARRAY PICTURE"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/blob",children:"BLOB"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"Blob"}),", ",(0,s.jsx)(e.code,{children:"4D.Blob"})]}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_BLOB"}),", ",(0,s.jsx)(e.code,{children:"ARRAY BLOB"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/object",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Object"})}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_OBJECT"}),", ",(0,s.jsx)(e.code,{children:"ARRAY OBJECT"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/collection",children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Collection"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"C_COLLECTION"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/variant",children:"\u30d0\u30ea\u30a2\u30f3\u30c8"}),"(2)"]}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"\u25ef"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Variant"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["(1) ORDA \u3067\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3) \u3092\u4ecb\u3057\u3066\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6271\u3046\u305f\u3081\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3044\u3066\u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/object",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u8aac\u660e\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["(2) \u30d0\u30ea\u30a2\u30f3\u30c8\u306f\u5b9f\u969b\u306e\u3068\u3053\u308d ",(0,s.jsx)(e.em,{children:"\u30c7\u30fc\u30bf"})," \u30bf\u30a4\u30d7\u3067\u306f\u306a\u304f\u3001\u3042\u3089\u3086\u308b\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5024\u3092\u683c\u7d0d\u3059\u308b\u3053\u3068\u306e\u3067\u304d\u308b ",(0,s.jsx)(e.em,{children:"\u5909\u6570"})," \u30bf\u30a4\u30d7\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/variables#%E5%A4%89%E6%95%B0%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u660e\u793a\u7684\u306a\u5ba3\u8a00"})," \u306b\u3088\u3063\u3066 ",(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/variables",children:"\u5909\u6570"})," \u307e\u305f\u306f ",(0,s.jsx)(e.a,{href:"/docs/ja/20/Concepts/parameters",children:"\u5f15\u6570"})," \u306e\u578b\u304c\u6c7a\u307e\u308b\u3068\u304d\u3001\u5909\u6570\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5024\u3092\u53d7\u3051\u53d6\u308a\u3001\u5272\u308a\u5f53\u3066\u304c\u3055\u308c\u306a\u3044\u9650\u308a\u30bb\u30c3\u30b7\u30e7\u30f3\u4e2d\u306f\u305d\u306e\u5024\u3092\u4fdd\u3061\u7d9a\u3051\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f\u5909\u6570\u306e\u578b\u306b\u4f9d\u5b58\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u578b"}),(0,s.jsx)(e.th,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30d6\u30fc\u30eb"}),(0,s.jsx)(e.td,{children:"false"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u65e5\u4ed8"}),(0,s.jsx)(e.td,{children:"00-00-00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u500d\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u6642\u9593"}),(0,s.jsx)(e.td,{children:"00:00:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc"}),(0,s.jsx)(e.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc\u30b5\u30a4\u30ba=0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5b9f\u6570"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30dd\u30a4\u30f3\u30bf\u30fc"}),(0,s.jsx)(e.td,{children:"Nil=true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30c6\u30ad\u30b9\u30c8"}),(0,s.jsx)(e.td,{children:'""'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"BLOB"}),(0,s.jsx)(e.td,{children:"BLOB \u30b5\u30a4\u30ba=0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),(0,s.jsx)(e.td,{children:"null"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"}),(0,s.jsx)(e.td,{children:"null"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30d0\u30ea\u30a2\u30f3\u30c8"}),(0,s.jsx)(e.td,{children:"undefined"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u306e-null",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u306e Null"}),"\n",(0,s.jsxs)(e.p,{children:["Object\u578b\u3001Collection\u578b\u3001Pointer\u578b\u3001Picture\u578b\u306e\u5909\u6570\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066 ",(0,s.jsx)(e.strong,{children:"null"})," \u3092\u6301\u3061\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u306f\u5ba3\u8a00\u5f8c\u3067\u5272\u308a\u5f53\u3066\u524d\u306e\u5834\u5408\u306b\u306f\u4e2d\u9593\u7684\u306a\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306f ",(0,s.jsx)(e.strong,{children:"null"})," \u5024\u306e ",(0,s.jsx)(e.em,{children:"\u3088\u3046\u306b\u632f\u308b\u821e\u3044\u307e\u3059"})," \u304c\u3001\u30b3\u30fc\u30c9\u304c\u305d\u308c\u3089\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3057\u305f\u3068\u304d\u306b\u767a\u751f\u3059\u308b\u30a8\u30e9\u30fc\u304c\u5c11\u306a\u304f\u306a\u308b\u306a\u3069\u3001\u591a\u5c11\u306e\u9055\u3044\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db",children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u5909\u63db"}),"\n",(0,s.jsx)(e.p,{children:'4D \u30e9\u30f3\u30b2\u30fc\u30b8\u306b\u306f\u3001\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u9593\u306e\u5909\u63db\u3092\u304a\u3053\u306a\u3046\u6f14\u7b97\u5b50\u3084\u30b3\u30de\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u306f\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001"abc"+0.5+!12/25/96!-?00:30:45?\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 \u3053\u308c\u306f\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9 (\u69cb\u6587) \u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u6b21\u306e\u8868\u306f\u3001\u57fa\u672c\u306e\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3001\u5909\u63db\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3001\u305d\u308c\u3092\u5b9f\u884c\u3059\u308b\u969b\u306b\u4f7f\u7528\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u793a\u3057\u3066\u3044\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7"}),(0,s.jsx)(e.th,{children:"\u6587\u5b57\u5217\u306b\u5909\u63db"}),(0,s.jsx)(e.th,{children:"\u6570\u5024\u306b\u5909\u63db"}),(0,s.jsx)(e.th,{children:"\u65e5\u4ed8\u306b\u5909\u63db"}),(0,s.jsx)(e.th,{children:"\u6642\u9593\u306b\u5909\u63db"}),(0,s.jsx)(e.th,{children:"\u30d6\u30fc\u30eb\u306b\u5909\u63db"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u6587\u5b57\u5217 (1)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Num"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Date"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Time"})}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Bool"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u6570\u5024 (2)"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Bool"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u65e5\u4ed8"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Bool"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u6642\u9593"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"String"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Bool"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30d6\u30fc\u30eb"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"Num"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["(1) JSON\u5f62\u5f0f\u306e\u6587\u5b57\u5217\u306f ",(0,s.jsx)(e.code,{children:"JSON Parse"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u30b9\u30ab\u30e9\u30fc\u30c7\u30fc\u30bf\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3001\u3042\u308b\u3044\u306f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"(2) \u6642\u9593\u306f\u6570\u5024\u3068\u3057\u3066\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6ce8:"})," \u3053\u306e\u8868\u306b\u793a\u3059\u30c7\u30fc\u30bf\u5909\u63db\u306e\u4ed6\u306b\u3001\u6f14\u7b97\u5b50\u3068\u4ed6\u306e\u30b3\u30de\u30f3\u30c9\u3092\u7d44\u307f\u5408\u305b\u308b\u3053\u3068\u3067\u3001\u3088\u308a\u6d17\u7df4\u3055\u308c\u305f\u30c7\u30fc\u30bf\u5909\u63db\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},221020:(n,e,d)=>{var s=d(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,d){var s,c={},h=null,j=null;for(s in void 0!==d&&(h=""+d),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(j=e.ref),e)t.call(e,s)&&!i.hasOwnProperty(s)&&(c[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===c[s]&&(c[s]=e[s]);return{$$typeof:r,type:n,key:h,ref:j,props:c,_owner:l.current}}e.Fragment=c,e.jsx=h,e.jsxs=h},474848:(n,e,d)=>{n.exports=d(221020)},28453:(n,e,d)=>{d.d(e,{R:()=>t,x:()=>l});var s=d(296540);const r={},c=s.createContext(r);function t(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);