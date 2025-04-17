"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60660"],{574614:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-picture-metadata","title":"SET PICTURE METADATA","description":"SET PICTURE METADATA ( picture ; metaName ; metaContents {; metaName2 ; metaContents2 ; ... ; metaNameN ; metaContentsN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-metadata","permalink":"/docs/ja/commands/set-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-metadata.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-picture-metadata","title":"SET PICTURE METADATA","slug":"/commands/set-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE FILE NAME","permalink":"/docs/ja/commands/set-picture-file-name"},"next":{"title":"SET PICTURE TO LIBRARY","permalink":"/docs/ja/commands/set-picture-to-library"}}'),r=t("785893"),d=t("250065");let i={id:"set-picture-metadata",title:"SET PICTURE METADATA",slug:"/commands/set-picture-metadata",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u6CE8",id:"\u6CE8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET PICTURE METADATA"})," ( ",(0,r.jsx)(n.em,{children:"picture"})," ; ",(0,r.jsx)(n.em,{children:"metaName"})," ; ",(0,r.jsx)(n.em,{children:"metaContents"})," {; ",(0,r.jsx)(n.em,{children:"metaName2"})," ; ",(0,r.jsx)(n.em,{children:"metaContents2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"metaNameN"})," ; ",(0,r.jsx)(n.em,{children:"metaContentsN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"picture"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u8A2D\u5B9A\u3059\u308B\u30D4\u30AF\u30C1\u30E3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u8A2D\u5B9A\u3059\u308B\u30D6\u30ED\u30C3\u30AF\u306E\u540D\u524D\u307E\u305F\u306F\u30D1\u30B9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metaContents"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u5185\u5BB9"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"SET PICTURE METADATA \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001picture (4D\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570) \u5185\u306E\u30E1\u30BF\u30C7\u30FC\u30BF (\u307E\u305F\u306F\u30E1\u30BF\u30BF\u30B0) \u306E\u5185\u5BB9\u3092\u66F8\u304D\u8FBC\u3093\u3060\u308A\u66F4\u65B0\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u30D4\u30AF\u30C1\u30E3\u306B\u633F\u5165\u3055\u308C\u305F\u8FFD\u52A0\u306E\u60C5\u5831\u3067\u3059\u30024D\u3067\u306F4\u30BF\u30A4\u30D7\u306E\u6A19\u6E96\u30E1\u30BF\u30C7\u30FC\u30BFEXIF, GPS, IPTC \u305D\u3057\u3066 TIFF\u3092\u51E6\u7406\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u308C\u3089\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u306B\u3064\u3044\u3066\u306F\u4EE5\u4E0B\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3067\u304D\u307E\u3059: ",(0,r.jsx)(n.a,{href:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf",children:"http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf"})," (IPTC) \u304A\u3088\u3073 ",(0,r.jsx)(n.a,{href:"http://exif.org/Exif2-2.PDF",children:"http://exif.org/Exif2-2.PDF"})," (TIFF, EXIF, GPS)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"metaName"}),"\u5F15\u6570\u306B\u306F\u8A2D\u5B9A\u3084\u66F4\u65B0\u3092\u884C\u3046\u30E1\u30BF\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3059\u308B\u6587\u5B57\u5217\u3092\u6E21\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u65B0\u3057\u3044",(0,r.jsx)(n.em,{children:"Picture Metadata Names"}),'\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3002\u3053\u306E\u30C6\u30FC\u30DE\u306B\u306F4D\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3059\u3079\u3066\u306E\u30BF\u30B0\u304C\u30B0\u30EB\u30FC\u30D7\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u305D\u308C\u305E\u308C\u306E\u5B9A\u6570\u306F\u30BF\u30B0\u30D1\u30B9\u3092\u542B\u3093\u3067\u3044\u307E\u3059 (\u4F8B "TIFF/DateTime")\u3002']}),"\n",(0,r.jsx)(n.li,{children:'\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u5B8C\u5168\u306A\u30D6\u30ED\u30C3\u30AF\u540D ("TIFF", "EXIF", "GPS" \u3042\u308B\u3044\u306F "IPTC")\u3002'}),"\n",(0,r.jsx)(n.li,{children:'\u7A7A\u306E\u6587\u5B57\u5217 ("")\u3002'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"metaContents"})," \u5F15\u6570\u306B\u306F\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u65B0\u3057\u3044\u5024\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"metaName"}),"\u306B\u30BF\u30B0\u30D1\u30B9\u5B9A\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u8A2D\u5B9A\u3059\u308B\u5024\u3092\u76F4\u63A5\u3001\u307E\u305F\u306F\u65B0\u3057\u3044",(0,r.jsx)(n.em,{children:"Picture Metadata Values"}),"\u30C6\u30FC\u30DE\u306E\u9069\u5207\u306A\u5B9A\u6570\u3092\u3001",(0,r.jsx)(n.em,{children:"metaContents"}),'\u5F15 \u6570\u306B\u6E21\u305B\u307E\u3059\u3002\u5024\u306F\u6307\u5B9A\u3055\u308C\u305F\u30E1\u30BF\u30C7\u30FC\u30BF\u306B\u5FDC\u3058\u3066\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\u3001\u65E5\u4ED8\u3001\u6642\u9593\u30BF\u30A4\u30D7\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u30E1\u30BF\u30C7\u30FC\u30BF\u304C\u4E00\u3064\u4EE5\u4E0A\u306E\u5024\u3092\u542B\u3080\u5834\u5408\u3001\u914D\u5217\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u304D\u306FXML (XMP\u6A19\u6E96) \u3067\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u7A7A\u306E\u6587\u5B57\u5217 ("") \u3092\u6E21\u3059\u3068\u65E2\u5B58\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u304C\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002',(0,r.jsx)(n.em,{children:"metaName"})," \u5F15\u6570\u304C\u672A\u5B9A\u7FA9\u3067\u3042\u3063\u305F\u5834\u5408\u3001\u7A7A\u306E\u6587\u5B57\u5217\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"metaName"}),"\u306B\u30D6\u30ED\u30C3\u30AF\u540D\u304B\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3068\u304D\u306F\u3001",(0,r.jsx)(n.em,{children:"metaContents"}),"\u5F15\u6570\u306B\u306F\u8A2D\u5B9A\u3059\u308B\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u542B\u3080XML DOM\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002\u7A7A\u306E\u6587\u5B57\u5217\u306E\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u304C\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Windows\u3067\u306F\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u6642\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u3068\u3001",(0,r.jsx)(n.em,{children:"OK"})," \u5909\u6570\u304C0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002Mac OS\u3067\u306F\u6280\u8853\u7684\u306A\u7406\u7531\u3067\u3001\u30E1\u30BF\u30C7\u30FC\u30BF\u66F8\u304D\u8FBC\u307F\u30A8\u30E9\u30FC\u3092\u691C\u77E5\u3067\u304D\u307E\u305B\u3093\u3002\u305D\u306E\u305F\u3081\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FMac OS\u3067\u306F",(0,r.jsx)(n.em,{children:"OK"})," \u5909\u6570\u3092\u66F4\u65B0\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u7279\u5B9A\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u30EA\u30FC\u30C9\u30AA\u30F3\u30EA\u30FC\u3067\u3042\u308A\u3001SET PICTURE METADATA \u3067\u306F\u66F8\u304D\u8FBC\u3080\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u4F8B\u3048\u3070\u3001TIFF XResolution/TIFF YResolution\u3001EXIF Color Space\u3001EXIF Pixel X Dimension/EXIF Pixel Y Dimension\u306A\u3069\u306F\u4FEE\u6B63\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6CE8:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7279\u5B9A\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8 (\u7279\u306BJPEG\u3068TIFF) \u3060\u3051\u304C\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u9006\u306BGIF\u3084BMP\u306A\u3069\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u53D7\u3051\u5165\u308C\u307E\u305B\u3093\u3002\u30E1\u30BF\u30C7\u30FC\u30BF\u4ED8\u304D\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u3001\u305D\u308C\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u306A\u3044\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3059\u308B\u3068\u3001\u60C5\u5831\u306F\u5931\u308F\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"macOS 10.7 (Lion)\u3067\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u30A8\u30F3\u30B3\u30FC\u30C9\u30FB\u30C7\u30B3\u30FC\u30C9\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u30CD\u30A4\u30C6\u30A3\u30D6\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u5185\u306E\u30D0\u30B0\u306B\u3088\u3063\u3066\u3001GPS\u5EA7\u6A19\u304C\u4E0D\u6B63\u78BA\u306B\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001OS\u3092OS X 10.8 (Mountain Lion)\u307E\u305F\u306F 10.9 (Maverick)\u306B\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3059\u308B\u3053\u3068\u304C\u5F37\u304F\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:'\u914D\u5217\u3092\u4F7F\u7528\u3057\u3066"Keywords"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u5024\u3092\u8907\u6570\u8A2D\u5B9A\u3057\u307E\u3059:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrTkeywords;2)\n\xa0$arrTkeywords{1}:="France"\n\xa0$arrTkeywords{2}:="Europe"\n\xa0SET PICTURE METADATA(vPicture;IPTC keywords;$arrTkeywords)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"DOM\u53C2\u7167\u3092\u4F7F\u7528\u3057\u3066GPS\u30D6\u30ED\u30C3\u30AF\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $domMetas : Text\n\xa0$domMetas:=DOM Parse XML source("metas.xml")\n\xa0var $gpsRef : Text\n\xa0$gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SET PICTURE METADATA(vImage;"GPS";$refGPS)\n\xa0\xa0//\u3053\u3053\u3067 $gpsRef \u306FGPS\u8981\u7D20\u3092\u6307\u3057\u3066\u3044\u307E\u3059\n\xa0\xa0\xa0\xa0...\n\xa0End if\n\xa0DOM CLOSE XML($domMetas)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,r.jsx)(n.p,{children:"\u3059\u3079\u3066\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u304CDOM\u8981\u7D20\u53C2\u7167\u3067\u51E6\u7406\u3055\u308C\u308B\u3068\u304D\u3001\u30BF\u30B0\u306F\u540D\u524D\u304C\u30D6\u30ED\u30C3\u30AF\u540D (TIFF, IPTC\u7B49)\u3067\u3042\u308B\u8981\u7D20\u306B\u4ED8\u52A0\u3055\u308C\u308B\u5C5E\u6027\u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u307E\u3059 (\u53C2\u7167\u3055\u308C\u305F\u8981\u7D20\u306E\u5B50)\u3002\u7279\u5B9A\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u30D6\u30ED\u30C3\u30AF\u304C\u64CD\u4F5C\u3055\u308C\u308B\u3068\u3001\u30D6\u30ED\u30C3\u30AF\u30BF\u30B0\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308A\u53C2\u7167\u3055\u308C\u308B\u8981\u7D20\u306B\u76F4\u63A5\u3001\u5C5E\u6027\u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/get-picture-metadata",children:"GET PICTURE METADATA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Picture Metadata Names"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Picture Metadata Values"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1121"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);