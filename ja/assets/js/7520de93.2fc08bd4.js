/*! For license information please see 7520de93.2fc08bd4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75560],{300319:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>B,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>t});var d=l(474848),c=l(28453);const o={id:"blob",title:"BLOB"},B=void 0,r={id:"Concepts/blob",title:"BLOB",description:"BLOB (Binary Large OBject) \u30d5\u30a3\u30fc\u30eb\u30c9\u30fb\u5909\u6570\u30fb\u5f0f\u3068\u306f\u3001\u9023\u7d9a\u3057\u305f\u53ef\u5909\u9577\u30d0\u30a4\u30c8\u3067\u3042\u308a\u3001\u5404\u30d0\u30a4\u30c8\u3092\u500b\u3005\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u53ef\u80fd\u306a 1\u3064\u306e\u307e\u3068\u307e\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u53d6\u308a\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/ja/20-R5/Concepts/blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981",permalink:"/docs/ja/20-R5/Concepts/data-types"},next:{title:"\u30d6\u30fc\u30eb",permalink:"/docs/ja/20-R5/Concepts/boolean"}},s={},t=[{value:"BLOB \u306e\u7a2e\u985e",id:"blob-\u306e\u7a2e\u985e",level:2},{value:"\u5909\u6570\u304c\u30b9\u30ab\u30e9\u30fcBLOB \u3068 <code>4D.Blob</code> \u306e\u3069\u3061\u3089\u3092\u683c\u7d0d\u3057\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d",id:"\u5909\u6570\u304c\u30b9\u30ab\u30e9\u30fcblob-\u3068-4dblob-\u306e\u3069\u3061\u3089\u3092\u683c\u7d0d\u3057\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d",level:2},{value:"BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059",id:"blob-\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059",level:2},{value:"BLOB \u304a\u3088\u3073 BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e 4D\u30b3\u30de\u30f3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057",id:"blob-\u304a\u3088\u3073-blob\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e-4d\u30b3\u30de\u30f3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057",level:3},{value:"BLOB \u304a\u3088\u3073 BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e1\u30bd\u30c3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057",id:"blob-\u304a\u3088\u3073-blob\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e1\u30bd\u30c3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057",level:3},{value:"\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4f7f\u3063\u305f\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u53c2\u7167\u6e21\u3057",id:"\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4f7f\u3063\u305f\u30b9\u30ab\u30e9\u30fcblob-\u306e\u53c2\u7167\u6e21\u3057",level:3},{value:"BLOB\u5909\u6570\u306e\u4ee3\u5165",id:"blob\u5909\u6570\u306e\u4ee3\u5165",level:2},{value:"BLOB \u306e\u81ea\u52d5\u5909\u63db",id:"blob-\u306e\u81ea\u52d5\u5909\u63db",level:2},{value:"\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u5909\u66f4",id:"\u30b9\u30ab\u30e9\u30fcblob-\u306e\u5909\u66f4",level:2},{value:"BLOB\u5185\u30d0\u30a4\u30c8\u3078\u306e\u500b\u5225\u30a2\u30af\u30bb\u30b9",id:"blob\u5185\u30d0\u30a4\u30c8\u3078\u306e\u500b\u5225\u30a2\u30af\u30bb\u30b9",level:2},{value:"\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"\u30b9\u30ab\u30e9\u30fcblob-\u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",level:4},{value:"<code>4D.Blob</code> \u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",id:"4dblob-\u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",level:4}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"BLOB (Binary Large OBject) \u30d5\u30a3\u30fc\u30eb\u30c9\u30fb\u5909\u6570\u30fb\u5f0f\u3068\u306f\u3001\u9023\u7d9a\u3057\u305f\u53ef\u5909\u9577\u30d0\u30a4\u30c8\u3067\u3042\u308a\u3001\u5404\u30d0\u30a4\u30c8\u3092\u500b\u3005\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u53ef\u80fd\u306a 1\u3064\u306e\u307e\u3068\u307e\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u53d6\u308a\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"BLOB \u306f\u5168\u4f53\u304c\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 BLOB\u5909\u6570\u306f\u30e1\u30e2\u30ea\u5185\u306b\u3060\u3051\u4fdd\u6301\u3055\u308c\u3001\u5b58\u5728\u3057\u307e\u3059\u3002 BLOB\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u30ec\u30b3\u30fc\u30c9\u306e\u4ed6\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u540c\u69d8\u306b\u3001\u30c7\u30a3\u30b9\u30af\u304b\u3089\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3067\u304d\u308b\u4ed6\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u30bf\u30a4\u30d7 (\u30d4\u30af\u30c1\u30e3\u30fc\u306a\u3069) \u3068\u540c\u69d8\u306b\u3001\u30ec\u30b3\u30fc\u30c9\u3092\u66f4\u65b0\u3057\u3066\u3082 BLOB\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30e1\u30e2\u30ea\u306b\u8907\u88fd\u3055\u308c\u307e\u305b\u3093\u3002 \u3057\u305f\u304c\u3063\u3066\u3001",(0,d.jsx)(n.code,{children:"Old"})," \u304a\u3088\u3073 ",(0,d.jsx)(n.code,{children:"Modified"})," \u30b3\u30de\u30f3\u30c9\u3092 BLOB\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528\u3057\u3066\u3082\u3001\u8fd4\u3055\u308c\u308b\u7d50\u679c\u306f\u610f\u5473\u3092\u6301\u3061\u307e\u305b\u3093\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"blob-\u306e\u7a2e\u985e",children:"BLOB \u306e\u7a2e\u985e"}),"\n",(0,d.jsx)(n.p,{children:"4D\u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u306f\u3001BLOB \u3092\u6271\u3046\u65b9\u6cd5\u304c 2\u3064\u3042\u308a\u307e\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u30b9\u30ab\u30e9\u30fc\u5024\u3068\u3057\u3066"}),": BLOB \u306f BLOB\u5909\u6570\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u683c\u7d0d\u3055\u308c\u3001\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:["\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (",(0,d.jsx)(n.code,{children:"4D.Blob"}),")"]})," \u3068\u3057\u3066: ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306f BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002 \u30aa\u30ea\u30b8\u30ca\u30eb\u306e BLOB \u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306a\u304f\u3001BLOB\u305d\u306e\u3082\u306e\u3001\u307e\u305f\u306f\u305d\u306e\u4e00\u90e8\u3092 ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306b\u683c\u7d0d\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u65b9\u6cd5\u3092 ",(0,d.jsx)(n.a,{href:"https://ja.wikipedia.org/wiki/%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%8C%96",children:"\u30dc\u30af\u30b7\u30f3\u30b0"})," \u3068\u547c\u3073\u307e\u3059\u3002 ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R5/API/BlobClass",children:"Blob\u30af\u30e9\u30b9"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5404 BLOB\u30bf\u30a4\u30d7\u306b\u306f\u3001\u305d\u308c\u305e\u308c\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002 \u6b21\u306e\u8868\u3092\u53c2\u8003\u306b\u3057\u3066\u3001\u3069\u3061\u3089\u304c\u30cb\u30fc\u30ba\u306b\u5408\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Blob"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"4D.Blob"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u5909\u66f4\u53ef\u80fd"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u25ef"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\xd7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5185\u3067\u5171\u6709\u53ef\u80fd"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\xd7"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u25ef"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u53c2\u7167\u6e21\u3057*"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\xd7"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u25ef"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30d0\u30a4\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"*"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u6700\u5927\u30b5\u30a4\u30ba"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"2GB"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"\u30e1\u30e2\u30ea"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u53c2\u7167\u3067\u6e21\u3055\u308c\u308b BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306f\u7570\u306a\u308a\u3001\u30b9\u30ab\u30e9\u30fcBLOB \u306f\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3055\u308c\u308b\u3068\u30e1\u30e2\u30ea\u5185\u3067\u8907\u88fd\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u53c2\u7167\u306b\u3088\u3063\u3066\u6e21\u3055\u308c\u308b BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (",(0,d.jsx)(n.code,{children:"4D.Blob"}),") \u3092\u4f7f\u7528\u3059\u308b\u65b9\u304c\u52b9\u7387\u7684\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30014D \u306f\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u6700\u5927\u30b5\u30a4\u30ba\u3092 2GB \u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001OS\u3084\u7a7a\u304d\u5bb9\u91cf\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u5236\u9650\u30b5\u30a4\u30ba\u304c\u5c0f\u3055\u304f\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"BLOB \u306b\u6f14\u7b97\u5b50\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u5909\u6570\u304c\u30b9\u30ab\u30e9\u30fcblob-\u3068-4dblob-\u306e\u3069\u3061\u3089\u3092\u683c\u7d0d\u3057\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d",children:["\u5909\u6570\u304c\u30b9\u30ab\u30e9\u30fcBLOB \u3068 ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306e\u3069\u3061\u3089\u3092\u683c\u7d0d\u3057\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5024\u304c BLOB\u578b\u307e\u305f\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u578b\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page1509.html",children:"Value type"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u7279\u5b9a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (",(0,d.jsx)(n.code,{children:"4D.Blob"}),") \u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page1731.html",children:"OB instance of"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"var $myBlob: Blob\nvar $myBlobObject: 4D.Blob\n$myBlobObject:=4D.Blob.new()\n\n$type:= Value type($myblobObject) // 38 (\u30aa\u30d6\u30b8\u30a7\u30af\u30c8)\n$is4DBlob:= OB Instance of($myblobObject; 4D.Blob)  // true\n"})}),"\n",(0,d.jsx)(n.h2,{id:"blob-\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059",children:"BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059"}),"\n",(0,d.jsx)(n.p,{children:"\u30b9\u30ab\u30e9\u30fcBLOB \u3084 BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30014D\u30b3\u30de\u30f3\u30c9\u307e\u305f\u306f 4D\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"blob-\u304a\u3088\u3073-blob\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e-4d\u30b3\u30de\u30f3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057",children:"BLOB \u304a\u3088\u3073 BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e 4D\u30b3\u30de\u30f3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057"}),"\n",(0,d.jsxs)(n.p,{children:["BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u53d7\u3051\u53d6\u308b 4D\u30b3\u30de\u30f3\u30c9\u306b\u306f\u3001\u30b9\u30ab\u30e9\u30fcBLOB \u307e\u305f\u306f ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text( $myBlob ; UTF8 text without length )\n'})}),"\n",(0,d.jsxs)(n.p,{children:["4D\u30b3\u30de\u30f3\u30c9\u306e\u4e2d\u306b\u306f\u3001\u5143\u306e BLOB \u3092\u5909\u66f4\u3059\u308b\u3082\u306e\u304c\u3042\u308a\u3001\u3053\u308c\u3089\u306f ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u30bf\u30a4\u30d7\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page560.html",children:"DELETE FROM BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page559.html",children:"INSERT IN BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page548.html",children:"INTEGER TO BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page550.html",children:"LONGINT TO BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page552.html",children:"REAL TO BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page606.html",children:"SET BLOB SIZE"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page554.html",children:"TEXT TO BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page532.html",children:"VARIABLE TO BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page556.html",children:"LIST TO BLOB"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page782.html",children:"SOAP DECLARATION"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page777.html",children:"WEB SERVICE SET PARAMETER"})}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"blob-\u304a\u3088\u3073-blob\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e1\u30bd\u30c3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057",children:"BLOB \u304a\u3088\u3073 BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30e1\u30bd\u30c3\u30c9\u3078\u306e\u53d7\u3051\u6e21\u3057"}),"\n",(0,d.jsxs)(n.p,{children:["BLOB \u3084 BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (",(0,d.jsx)(n.code,{children:"4D.Blob"}),") \u306f\u3001\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u53c2\u7167\u3067\u6e21\u3055\u308c\u308b BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306f\u7570\u306a\u308a\u3001\u30b9\u30ab\u30e9\u30fcBLOB \u306f\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3055\u308c\u308b\u3068\u30e1\u30e2\u30ea\u5185\u3067\u8907\u88fd\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4f7f\u3063\u305f\u30b9\u30ab\u30e9\u30fcblob-\u306e\u53c2\u7167\u6e21\u3057",children:"\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4f7f\u3063\u305f\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u53c2\u7167\u6e21\u3057"}),"\n",(0,d.jsx)(n.p,{children:"\u30b9\u30ab\u30e9\u30fcBLOB \u3092\u30e1\u30e2\u30ea\u4e0a\u306b\u8907\u88fd\u3059\u308b\u3053\u3068\u306a\u304f\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3059\u306b\u306f\u3001\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u306f BLOB\u5909\u6570\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u5b9a\u7fa9\u3057\u3001\u305d\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u4f8b\u984c:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"// BLOB\u578b\u306e\u5909\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059\nvar $myBlobVar: Blob\n// 4D\u30b3\u30de\u30f3\u30c9\u306b\u5f15\u6570\u3068\u3057\u3066 BLOB \u3092\u6e21\u3057\u307e\u3059\n SET BLOB SIZE($myBlobVar;1024*1024)\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"// \u5916\u90e8\u30eb\u30fc\u30c1\u30f3\u306b BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\n $errCode:=Do Something With This blob($myBlobVar)\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"// BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3057\u3001\u623b\u308a\u5024\u3092 BLOB \u3067\u53d7\u3051\u53d6\u308a\u307e\u3059\n var $retrieveBlob: Blob\n retrieveBlob:=Fill_Blob($myBlobVar)\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"// BLOB \u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3057\u307e\u3059\nCOMPUTE BLOB(->$myBlobVar)\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u306b\u3042\u305f\u3063\u3066\u306e\u6ce8\u610f"}),': BLOB \u5f15\u6570\u306f \u201c&O\u201d (\u6570\u5b57\u306e "0" \u3067\u306f\u306a\u304f\u3001\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u306e "O") \u3068\u3057\u3066\u5ba3\u8a00\u3057\u307e\u3059\u3002']}),"\n",(0,d.jsx)(n.h2,{id:"blob\u5909\u6570\u306e\u4ee3\u5165",children:"BLOB\u5909\u6570\u306e\u4ee3\u5165"}),"\n",(0,d.jsx)(n.p,{children:"BLOB\u5909\u6570\u306f\u76f8\u4e92\u306b\u4ee3\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u4f8b\u984c:"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"// BLOB\u578b\u306e\u5909\u6570\u3092\u4e8c\u3064\u5ba3\u8a00\u3057\u307e\u3059\n var $vBlobA; $vBlobB : Blob\n// \u4e00\u3064\u76ee\u306e BLOB \u306b10K \u306e\u30b5\u30a4\u30ba\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\n SET BLOB SIZE($vBlobA;10*1024)\n// \u4e00\u3064\u76ee\u306e BLOB \u3092\u4e8c\u3064\u76ee\u306e BLOB \u306b\u4ee3\u5165\u3057\u307e\u3059\n $vBlobB:=$vBlobA\n"})}),"\n",(0,d.jsx)(n.h2,{id:"blob-\u306e\u81ea\u52d5\u5909\u63db",children:"BLOB \u306e\u81ea\u52d5\u5909\u63db"}),"\n",(0,d.jsx)(n.p,{children:"\u30b9\u30ab\u30e9\u30fcBLOB \u304c BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b (\u307e\u305f\u306f\u305d\u306e\u9006) \u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3068\u30014D\u306f\u305d\u308c\u3089\u3092\u81ea\u52d5\u7684\u306b\u5909\u63db\u3057\u307e\u3059\u3002 \u4f8b:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'// BLOB\u578b\u306e\u5909\u6570\u3068\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5909\u6570\u3092\u4f5c\u6210\u3057\u307e\u3059\nvar $myBlob: Blob\nvar $myObject : Object\n\n// $myObject \u306e "blob" \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u306b BLOB\u5909\u6570\u3092\u4ee3\u5165\u3057\u307e\u3059\n$myObject:=New object("blob"; $myBlob)\n\n// $myBlob \u306b\u683c\u7d0d\u3055\u308c\u308b BLOB \u306f\u81ea\u52d5\u7684\u306b 4D.Blob \u306b\u5909\u63db\u3055\u308c\u307e\u3059\n$type:= OB Instance of($myObject.blob; 4D.Blob)  // true\n\n// 4D.Blob \u304b\u3089 \u30b9\u30ab\u30e9\u30fcBLOB \u3078\u306e\u5909\u63db\n$myBlob:= $myObject.blob\n$type:=\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"4D.Blob"})," \u3092\u30b9\u30ab\u30e9\u30fcBLOB \u306b\u5909\u63db\u3059\u308b\u969b\u306b\u3001",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306e\u30b5\u30a4\u30ba\u304c\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u6700\u5927\u30b5\u30a4\u30ba\u3092\u8d85\u3048\u308b\u5834\u5408\u3001\u7d50\u679c\u306e\u30b9\u30ab\u30e9\u30fcBLOB \u306f\u7a7a\u306b\u306a\u308a\u307e\u3059\u3002\n\u305f\u3068\u3048\u3070\u3001\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u6700\u5927\u30b5\u30a4\u30ba\u304c 2GB \u306e\u5834\u5408\u30012.5GB \u306e ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u3092\u30b9\u30ab\u30e9\u30fcBLOB \u306b\u5909\u63db\u3059\u308b\u3068\u3001\u7a7a\u306e BLOB \u304c\u5f97\u3089\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30b9\u30ab\u30e9\u30fcblob-\u306e\u5909\u66f4",children:"\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u5909\u66f4"}),"\n",(0,d.jsx)(n.p,{children:"BLOB\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u306f\u7570\u306a\u308a\u3001\u30b9\u30ab\u30e9\u30fcBLOB \u306f\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u4f8b:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"var $myBlob : Blob\nSET BLOB SIZE ($myBlob ; 16*1024)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"blob\u5185\u30d0\u30a4\u30c8\u3078\u306e\u500b\u5225\u30a2\u30af\u30bb\u30b9",children:"BLOB\u5185\u30d0\u30a4\u30c8\u3078\u306e\u500b\u5225\u30a2\u30af\u30bb\u30b9"}),"\n",(0,d.jsx)(n.h4,{id:"\u30b9\u30ab\u30e9\u30fcblob-\u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",children:"\u30b9\u30ab\u30e9\u30fcBLOB \u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9"}),"\n",(0,d.jsxs)(n.p,{children:["\u4e2d\u30ab\u30c3\u30b3 ",(0,d.jsx)(n.code,{children:"{}"})," \u3092\u4f7f\u7528\u3057\u3001BLOB \u306e\u5404\u30d0\u30a4\u30c8\u3092\u500b\u5225\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 BLOB \u5185\u3067\u306f\u3001\u5404\u30d0\u30a4\u30c8\u306b 0 \u304b\u3089 N-1 \u306e\u756a\u53f7\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u3059\u3002 N \u306f BLOB \u306e\u30b5\u30a4\u30ba\u3067\u3059:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"  // BLOB\u578b\u5909\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059\n var $vBlob : Blob\n  // BLOB \u306e\u30b5\u30a4\u30ba\u3092 256\u30d0\u30a4\u30c8\u306b\u8a2d\u5b9a\u3057\u307e\u3059\n SET BLOB SIZE($vBlob;256)\n  // \u6b21\u306e\u30eb\u30fc\u30d7\u306f\u3001BLOB \u306e\u5404\u30d0\u30a4\u30c8\u3092\u30bc\u30ed\u306b\u521d\u671f\u5316\u3057\u307e\u3059\n For(vByte;0;BLOB size($vBlob)-1)\n    $vBlob{vByte}:=0\n End for\n"})}),"\n",(0,d.jsx)(n.p,{children:"BLOB \u306e\u5404\u30d0\u30a4\u30c8\u306f\u3059\u3079\u3066\u500b\u5225\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u3067\u304d\u308b\u305f\u3081\u3001BLOB\u5909\u6570\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u306f\u4f55\u3067\u3082\u683c\u7d0d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,d.jsxs)(n.h4,{id:"4dblob-\u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9",children:[(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306e\u30d0\u30a4\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5927\u30ab\u30c3\u30b3 ",(0,d.jsx)(n.code,{children:"[]"})," \u3092\u4f7f\u7528\u3057\u3001",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306e\u5404\u30d0\u30a4\u30c8\u3092\u500b\u5225\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $myBlob: 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$myText:= BLOB to text ( $myBlob ; UTF8 text without length )\n$byte:=$myBlob[5]\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306f\u5909\u66f4\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u3053\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067 ",(0,d.jsx)(n.code,{children:"4D.Blob"})," \u306e\u30d0\u30a4\u30c8\u3092\u8aad\u3080\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304c\u3001\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},221020:(e,n,l)=>{var d=l(296540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,l){var d,o={},t=null,i=null;for(d in void 0!==l&&(t=""+l),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(i=n.ref),n)B.call(n,d)&&!s.hasOwnProperty(d)&&(o[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===o[d]&&(o[d]=n[d]);return{$$typeof:c,type:e,key:t,ref:i,props:o,_owner:r.current}}n.Fragment=o,n.jsx=t,n.jsxs=t},474848:(e,n,l)=>{e.exports=l(221020)},28453:(e,n,l)=>{l.d(n,{R:()=>B,x:()=>r});var d=l(296540);const c={},o=d.createContext(c);function B(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:B(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);