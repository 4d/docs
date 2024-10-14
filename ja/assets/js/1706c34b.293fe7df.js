"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60121],{547598:(n,e,B)=>{B.r(e),B.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>i});var o=B(474848),l=B(28453);const t={id:"blob",title:"BLOB"},s=void 0,r={id:"Concepts/blob",title:"BLOB",description:"- BLOB (Binary Large OBjects) \u30d5\u30a3\u30fc\u30eb\u30c9\u30fb\u5909\u6570\u30fb\u5f0f\u3068\u306f\u3001\u9023\u7d9a\u3057\u305f\u53ef\u5909\u9577\u30d0\u30a4\u30c8\u3067\u3042\u308a\u3001\u5404\u30d0\u30a4\u30c8\u3092\u500b\u3005\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u53ef\u80fd\u306a 1\u3064\u306e\u307e\u3068\u307e\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u53d6\u308a\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b BLOB \u306e\u30b5\u30a4\u30ba\u306f\u7a7a (\u9577\u3055\u304cNULL) \u304b\u3089\u3001\u6700\u5927 2,147,483,647 \u30d0\u30a4\u30c8 (2GB) \u307e\u3067\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-18/Concepts/dt_blob.md",sourceDirName:"Concepts",slug:"/Concepts/blob",permalink:"/docs/ja/18/Concepts/blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"blob",title:"BLOB"},sidebar:"docs",previous:{title:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u306e\u6982\u8981",permalink:"/docs/ja/18/Concepts/data-types"},next:{title:"\u30d6\u30fc\u30eb",permalink:"/docs/ja/18/Concepts/boolean"}},c={},i=[{value:"\u5f15\u6570\u6e21\u3057\u3001\u30dd\u30a4\u30f3\u30bf\u30fc\u3001\u304a\u3088\u3073\u623b\u308a\u5024",id:"\u5f15\u6570\u6e21\u3057\u30dd\u30a4\u30f3\u30bf\u30fc\u304a\u3088\u3073\u623b\u308a\u5024",level:2},{value:"\u4ee3\u5165",id:"\u4ee3\u5165",level:2},{value:"BLOB \u306e\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a",id:"blob-\u306e\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"BLOB (Binary Large OBjects) \u30d5\u30a3\u30fc\u30eb\u30c9\u30fb\u5909\u6570\u30fb\u5f0f\u3068\u306f\u3001\u9023\u7d9a\u3057\u305f\u53ef\u5909\u9577\u30d0\u30a4\u30c8\u3067\u3042\u308a\u3001\u5404\u30d0\u30a4\u30c8\u3092\u500b\u3005\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u53ef\u80fd\u306a 1\u3064\u306e\u307e\u3068\u307e\u3063\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u53d6\u308a\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b BLOB \u306e\u30b5\u30a4\u30ba\u306f\u7a7a (\u9577\u3055\u304cNULL) \u304b\u3089\u3001\u6700\u5927 2,147,483,647 \u30d0\u30a4\u30c8 (2GB) \u307e\u3067\u3067\u3059\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30014D \u306f BLOB \u306e\u6700\u5927\u30b5\u30a4\u30ba\u3092 2GB \u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001OS \u3084\u7a7a\u304d\u5bb9\u91cf\u306b\u3088\u3063\u3066\u306f\u3001\u3053\u306e\u5236\u9650\u30b5\u30a4\u30ba\u304c\u5c0f\u3055\u304f\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"BLOB \u306f\u5168\u4f53\u304c\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002 BLOB \u5909\u6570\u306f\u30e1\u30e2\u30ea\u5185\u306b\u3060\u3051\u4fdd\u6301\u3055\u308c\u3001\u5b58\u5728\u3057\u307e\u3059\u3002 BLOB \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u30ec\u30b3\u30fc\u30c9\u306e\u4ed6\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u540c\u69d8\u306b\u3001\u30c7\u30a3\u30b9\u30af\u304b\u3089\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(e.li,{children:["\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3067\u304d\u308b\u4ed6\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u30bf\u30a4\u30d7 (\u30d4\u30af\u30c1\u30e3\u30fc\u306a\u3069) \u3068\u540c\u69d8\u306b\u3001\u30ec\u30b3\u30fc\u30c9\u3092\u66f4\u65b0\u3057\u3066\u3082BLOB\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30e1\u30e2\u30ea\u306b\u8907\u88fd\u3055\u308c\u307e\u305b\u3093\u3002 \u3057\u305f\u304c\u3063\u3066\u3001",(0,o.jsx)(e.code,{children:"Old"})," \u304a\u3088\u3073 ",(0,o.jsx)(e.code,{children:"Modified"})," \u30b3\u30de\u30f3\u30c9\u3092BLOB\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528\u3057\u3066\u3082\u3001\u8fd4\u3055\u308c\u308b\u7d50\u679c\u306f\u610f\u5473\u3092\u6301\u3061\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5f15\u6570\u6e21\u3057\u30dd\u30a4\u30f3\u30bf\u30fc\u304a\u3088\u3073\u623b\u308a\u5024",children:"\u5f15\u6570\u6e21\u3057\u3001\u30dd\u30a4\u30f3\u30bf\u30fc\u3001\u304a\u3088\u3073\u623b\u308a\u5024"}),"\n",(0,o.jsx)(e.p,{children:"4D \u306e BLOB \u306f\u30014D \u30b3\u30de\u30f3\u30c9\u307e\u305f\u306f 4D \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u307e\u305f\u3001BLOB \u306f\u30e6\u30fc\u30b6\u30fc\u30e1\u30bd\u30c3\u30c9\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306b\u6e21\u3057\u305f\u308a\u3001\u95a2\u6570\u306e\u623b\u308a\u5024\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001BLOB \u3092\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3059\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f BLOB \u3078\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u5b9a\u7fa9\u3057\u3001\u305d\u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.p,{children:"**\u4f8b: **"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-4d",children:"  // BLOB \u30bf\u30a4\u30d7\u306e\u5909\u6570\u3092\u5b9a\u7fa9\u3057\u307e\u3059\n C_BLOB(anyBlobVar)\n\n// 4D\u30b3\u30de\u30f3\u30c9\u306b\u5f15\u6570\u3068\u3057\u3066 BLOB \u3092\u6e21\u3057\u307e\u3059\n SET BLOB SIZE(anyBlobVar;1024*1024)\n\n// \u30d7\u30e9\u30b0\u30a4\u30f3\u306b BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\n $errCode:=Do Something With This BLOB(anyBlobVar)\n\n// BLOB \u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u3001\u623b\u308a\u5024\u3092BLOB\u3067\u53d7\u3051\u53d6\u308a\u307e\u3059\n C_BLOB(retrieveBlob)\n retrieveBlob:=Fill_Blob(anyBlobVar)\n\n// BLOB \u306e\u30dd\u30a4\u30f3\u30bf\u30fc\u3092\u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3057\u307e\u3059\n COMPUTE BLOB(->anyBlobVar)\n"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u958b\u767a\u306b\u3042\u305f\u3063\u3066\u306e\u6ce8\u610f:"}),' BLOB \u5f15\u6570\u306f \u201c&O\u201d (\u6570\u5b57\u306e0\u3067\u306f\u306a\u304f\u3001\u30a2\u30eb\u30d5\u30a1\u30d9\u30c3\u30c8\u306e"O") \u3068\u3057\u3066\u5ba3\u8a00\u3057\u307e\u3059\u3002']}),"\n",(0,o.jsx)(e.h2,{id:"\u4ee3\u5165",children:"\u4ee3\u5165"}),"\n",(0,o.jsx)(e.p,{children:"BLOB \u306f\u76f8\u4e92\u306b\u4ee3\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.p,{children:"**\u4f8b: **"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-4d",children:"  // BLOB \u578b\u306e\u5909\u6570\u3092\u4e8c\u3064\u5ba3\u8a00\u3057\u307e\u3059\n C_BLOB(vBlobA;vBlobB)\n// \u4e00\u3064\u76ee\u306e BLOB \u306b10K \u306e\u30b5\u30a4\u30ba\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\n SET BLOB SIZE(vBlobA;10*1024)\n// \u4e00\u3064\u76ee\u306e BLOB \u3092\u4e8c\u3064\u76ee\u306e BLOB \u306b\u4ee3\u5165\u3057\u307e\u3059\n vBlobB:=vBlobA\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u305f\u3060\u3057\u3001BLOB \u306b\u6f14\u7b97\u5b50\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"blob-\u306e\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a",children:"BLOB \u306e\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a"}),"\n",(0,o.jsx)(e.p,{children:"\u4e2d\u30ab\u30c3\u30b3 {...} \u3092\u4f7f\u7528\u3057\u3001BLOB \u306e\u5404\u30d0\u30a4\u30c8\u3092\u500b\u5225\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 BLOB \u5185\u3067\u306f\u3001\u5404\u30d0\u30a4\u30c8\u306b 0 \u304b\u3089 N-1 \u306e\u756a\u53f7\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u3059\u3002N \u306f BLOB \u306e\u30b5\u30a4\u30ba\u3067\u3059\u3002 \u4f8b:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-4d",children:"  // BLOB \u3092\u5b9a\u7fa9\u3057\u307e\u3059\n C_BLOB(vBlob)\n// BLOB \u306e\u30b5\u30a4\u30ba\u3092 256\u30d0\u30a4\u30c8\u306b\u8a2d\u5b9a\u3057\u307e\u3059\n SET BLOB SIZE(vBlob;256)\n// \u6b21\u306e\u30eb\u30fc\u30d7\u306f\u3001BLOB \u306e 256\u30d0\u30a4\u30c8\u3092\u30bc\u30ed\u306b\u521d\u671f\u5316\u3057\u307e\u3059\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n"})}),"\n",(0,o.jsx)(e.p,{children:"BLOB \u306e\u5404\u30d0\u30a4\u30c8\u306f\u3059\u3079\u3066\u500b\u5225\u306b\u30a2\u30c9\u30ec\u30b9\u6307\u5b9a\u3067\u304d\u308b\u305f\u3081\u3001BLOB \u30d5\u30a3\u30fc\u30eb\u30c9\u307e\u305f\u306f\u5909\u6570\u306b\u306f\u5b9f\u969b\u306e\u3068\u3053\u308d\u4f55\u3067\u3082\u683c\u7d0d\u3067\u304d\u307e\u3059\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,B)=>{B.d(e,{R:()=>s,x:()=>r});var o=B(296540);const l={},t=o.createContext(l);function s(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);