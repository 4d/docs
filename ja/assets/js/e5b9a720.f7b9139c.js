"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24261"],{49493:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"ViewPro/commands/vp-convert-to-picture","title":"VP Convert to picture","description":"VP Convert to picture ( vpObject Object} ) : Picture","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-convert-to-picture.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-convert-to-picture","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-convert-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-to-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-convert-to-picture","title":"VP Convert to picture"},"sidebar":"docs","previous":{"title":"VP Convert from 4D View","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-convert-from-4d-view"},"next":{"title":"VP Copy to object","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-copy-to-object"}}'),o=r("785893"),c=r("250065");let i={id:"vp-convert-to-picture",title:"VP Convert to picture"},s=void 0,d={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u623B\u308A\u5024",id:"\u623B\u308A\u5024",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function j(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Convert to picture"})," ( ",(0,o.jsx)(n.em,{children:"vpObject"})," : Object {; ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object} ) : Picture"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u5F15\u6570"}),(0,o.jsx)(n.th,{children:"\u578B"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpObject"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"\u5909\u63DB\u3059\u308B\u30A8\u30EA\u30A2\u3092\u683C\u7D0D\u3057\u305F 4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,o.jsx)(n.td,{children:"Picture"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"\u30A8\u30EA\u30A2\u306E SVG\u30D4\u30AF\u30C1\u30E3\u30FC"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"VP Convert to picture"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,o.jsx)(n.em,{children:"vpObject"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F 4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 (\u3042\u308B\u3044\u306F ",(0,o.jsx)(n.em,{children:"vpObject"})," \u5185\u306B\u3042\u308B\u3001",(0,o.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30EC\u30F3\u30B8) \u3092\u3001SVG\u30D4\u30AF\u30C1\u30E3\u30FC\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u6709\u7528\u3067\u3059:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"4D View Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092 4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306A\u3069\u3001\u4ED6\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u57CB\u3081\u8FBC\u307F\u305F\u3044\u5834\u5408"}),"\n",(0,o.jsx)(n.li,{children:"4D View Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u30014D View Pro \u30A8\u30EA\u30A2\u306B\u8AAD\u307F\u8FBC\u307E\u305A\u306B\u5370\u5237\u3057\u305F\u3044\u5834\u5408"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"vpObject"})," \u5F15\u6570\u306B\u306F\u3001\u5909\u63DB\u3057\u305F\u3044 4D View Pro \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4E8B\u524D\u306B ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," \u30B3\u30DE\u30F3\u30C9\u3067\u89E3\u6790\u3059\u308B\u304B\u3001\u307E\u305F\u306F ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u4FDD\u5B58\u3057\u3066\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4E8B\u524D\u306B ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," \u30B3\u30DE\u30F3\u30C9\u3067\u89E3\u6790\u3059\u308B\u304B\u3001\u307E\u305F\u306F ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u4FDD\u5B58\u3057\u3066\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4E8B\u524D\u306B ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," \u30B3\u30DE\u30F3\u30C9\u3067\u89E3\u6790\u3059\u308B\u304B\u3001\u307E\u305F\u306F ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u4FDD\u5B58\u3057\u3066\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4E8B\u524D\u306B ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," \u30B3\u30DE\u30F3\u30C9\u3067\u89E3\u6790\u3059\u308B\u304B\u3001\u307E\u305F\u306F ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u4FDD\u5B58\u3057\u3066\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u4E8B\u524D\u306B ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})," \u30B3\u30DE\u30F3\u30C9\u3067\u89E3\u6790\u3059\u308B\u304B\u3001\u307E\u305F\u306F ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u4FDD\u5B58\u3057\u3066\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["4D View Pro \u30A8\u30EA\u30A2\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u5F0F\u3084\u66F8\u5F0F (",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30BB\u30EB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})," \u53C2\u7167) \u304C\u6B63\u5E38\u306B\u66F8\u304D\u51FA\u3055\u308C\u308B\u3088\u3046\u3001\u5C11\u306A\u304F\u3068\u3082\u305D\u308C\u3089\u304C\u4E00\u5EA6\u306F\u8A55\u4FA1\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u304C SVG\u5909\u63DB\u30D7\u30ED\u30BB\u30B9\u306B\u306F\u5FC5\u8981\u3067\u3059\u3002 \u4E8B\u524D\u306B\u8A55\u4FA1\u3055\u308C\u3066\u3044\u306A\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u5909\u63DB\u3057\u305F\u5834\u5408\u3001\u5F0F\u3084\u66F8\u5F0F\u304C\u4E88\u671F\u305B\u306C\u5F62\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4E8B\u524D\u306B\u8A55\u4FA1\u3055\u308C\u3066\u3044\u306A\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u5909\u63DB\u3057\u305F\u5834\u5408\u3001\u5F0F\u3084\u66F8\u5F0F\u304C\u4E88\u671F\u305B\u306C\u5F62\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4E8B\u524D\u306B\u8A55\u4FA1\u3055\u308C\u3066\u3044\u306A\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u5909\u63DB\u3057\u305F\u5834\u5408\u3001\u5F0F\u3084\u66F8\u5F0F\u304C\u4E88\u671F\u305B\u306C\u5F62\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4E8B\u524D\u306B\u8A55\u4FA1\u3055\u308C\u3066\u3044\u306A\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u5909\u63DB\u3057\u305F\u5834\u5408\u3001\u5F0F\u3084\u66F8\u5F0F\u304C\u4E88\u671F\u305B\u306C\u5F62\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002 \u4E8B\u524D\u306B\u8A55\u4FA1\u3055\u308C\u3066\u3044\u306A\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u5909\u63DB\u3057\u305F\u5834\u5408\u3001\u5F0F\u3084\u66F8\u5F0F\u304C\u4E88\u671F\u305B\u306C\u5F62\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u5909\u63DB\u3059\u308B\u30BB\u30EB\u306E\u30EC\u30F3\u30B8\u3092\u6E21\u3057\u307E\u3059\u3002 \u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u5168\u4F53\u304C\u5909\u63DB\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u5168\u4F53\u304C\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u66F8\u5F0F (\u4E0A\u306E\u6CE8\u8A18\u53C2\u7167)\u3001\u30D8\u30C3\u30C0\u30FC\u306E\u8868\u793A\u72B6\u614B\u3001\u30AB\u30E9\u30E0\u3068\u884C\u306A\u3069\u3092\u542B\u3081\u305F\u8868\u793A\u5C5E\u6027\u306B\u6E96\u3058\u3066\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30B3\u30F3\u30C6\u30F3\u30C4\u306F\u5909\u63DB\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u8981\u7D20\u306E\u5909\u63DB\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u30C6\u30AD\u30B9\u30C8: \u30B9\u30BF\u30A4\u30EB / \u30D5\u30A9\u30F3\u30C8 / \u30B5\u30A4\u30BA / \u6587\u5B57\u63C3\u3048 / \u5411\u304D / \u56DE\u8EE2 / \u66F8\u5F0F"}),"\n",(0,o.jsx)(n.li,{children:"\u30BB\u30EB\u306E\u80CC\u666F: \u30AB\u30E9\u30FC / \u753B\u50CF"}),"\n",(0,o.jsx)(n.li,{children:"\u30BB\u30EB\u306E\u7F6B\u7DDA: \u592A\u3055 / \u30AB\u30E9\u30FC / \u30B9\u30BF\u30A4\u30EB"}),"\n",(0,o.jsx)(n.li,{children:"\u30BB\u30EB\u306E\u7D50\u5408"}),"\n",(0,o.jsx)(n.li,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC"}),"\n",(0,o.jsx)(n.li,{children:"\u884C\u9AD8\u3055"}),"\n",(0,o.jsx)(n.li,{children:"\u30AB\u30E9\u30E0\u5E45"}),"\n",(0,o.jsxs)(n.li,{children:["\u975E\u8868\u793A\u306E\u30AB\u30E9\u30E0 / \u884C\n> \u67A0\u7DDA\u306E\u8868\u793A\u72B6\u614B\u306F ",(0,o.jsx)(n.a,{href:"#vp-set-print-info",children:"VP SET PRINT INFO"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5C5E\u6027\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u67A0\u7DDA\u306E\u8868\u793A\u72B6\u614B\u306F ",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})," \u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5C5E\u6027\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"\u623B\u308A\u5024",children:"\u623B\u308A\u5024"}),"\n",(0,o.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306F SVG\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,o.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,o.jsx)(n.p,{children:"4D View Pro \u30A8\u30EA\u30A2\u3092 SVG \u306B\u5909\u63DB\u3057\u3001\u7D50\u679C\u3092\u30D7\u30EC\u30D3\u30E5\u30FC\u3059\u308B\u305F\u3081\u30D4\u30AF\u30C1\u30E3\u30FC\u5909\u6570\u306B\u623B\u308A\u5024\u3092\u4EE3\u5165\u3057\u307E\u3059:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($vpAreaObj)\nC_PICTURE($vPict)\n$vpAreaObj:=VP Export to object("ViewProArea")\n$vPict:=VP Convert to picture($vpAreaObj) // \u30A8\u30EA\u30A2\u5168\u4F53\u3092\u66F8\u304D\u51FA\u3057\u307E\u3059\n'})}),"\n",(0,o.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-export-to-object",children:"VP Export to object"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var t=r(667294);let o={},c=t.createContext(o);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);