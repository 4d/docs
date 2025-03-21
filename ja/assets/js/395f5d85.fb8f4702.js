"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9846"],{286490:function(n,d,s){s.r(d),s.d(d,{default:()=>j,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/convert-from-text","title":"CONVERT FROM TEXT","description":"CONVERT FROM TEXT ( 4Dtext ; charSet ; convertedBLOB )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-from-text.md","sourceDirName":"commands-legacy","slug":"/commands/convert-from-text","permalink":"/docs/ja/20-R7/commands/convert-from-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-from-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-from-text","title":"CONVERT FROM TEXT","slug":"/commands/convert-from-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Compare strings","permalink":"/docs/ja/20-R7/commands/compare-strings"},"next":{"title":"Convert to text","permalink":"/docs/ja/20-R7/commands/convert-to-text"}}'),e=s("785893"),t=s("250065");let c={id:"convert-from-text",title:"CONVERT FROM TEXT",slug:"/commands/convert-from-text",displayed_sidebar:"docs"},i=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function x(n){let d={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(d.p,{children:[(0,e.jsx)(d.strong,{children:"CONVERT FROM TEXT"})," ( ",(0,e.jsx)(d.em,{children:"4Dtext"})," ; ",(0,e.jsx)(d.em,{children:"charSet"})," ; ",(0,e.jsx)(d.em,{children:"convertedBLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,e.jsxs)(d.table,{children:[(0,e.jsx)(d.thead,{children:(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.th,{children:"\u5F15\u6570"}),(0,e.jsx)(d.th,{children:"\u578B"}),(0,e.jsx)(d.th,{}),(0,e.jsx)(d.th,{children:"\u8AAC\u660E"})]})}),(0,e.jsxs)(d.tbody,{children:[(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4Dtext"}),(0,e.jsx)(d.td,{children:"Text"}),(0,e.jsx)(d.td,{children:"\u2192"}),(0,e.jsx)(d.td,{children:"\u73FE\u5728\u306E4D\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"charSet"}),(0,e.jsx)(d.td,{children:"Text, Integer"}),(0,e.jsx)(d.td,{children:"\u2192"}),(0,e.jsx)(d.td,{children:"\u6587\u5B57\u30BB\u30C3\u30C8\u306E\u756A\u53F7\u307E\u305F\u306F\u540D\u524D"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"convertedBlob"}),(0,e.jsx)(d.td,{children:"Blob"}),(0,e.jsx)(d.td,{children:"\u2190"}),(0,e.jsx)(d.td,{children:"\u5909\u63DB\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u542B\u3080BLOB"})]})]})]}),"\n",(0,e.jsx)(d.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,e.jsx)(d.p,{children:"CONVERT FROM TEXT\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u73FE\u5728\u306E4D\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u3001\u4ED6\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u3078\u5909\u63DB\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u5909\u63DB\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u30014D\u304C\u4F7F\u7528\u3059\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8A18\u8FF0\u3055\u308C\u3066\u3044\u307E\u3059\u30024D\u306E\u30D0\u30FC\u30B8\u30E7\u30F311\u3067\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067Unicode \u6587\u5B57\u30BB\u30C3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,e.jsxs)(d.p,{children:[(0,e.jsx)(d.em,{children:"charSet"}),' \u306B\u306F\u5909\u63DB\u306B\u4F7F\u7528\u3059\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002\u30BB\u30C3\u30C8\u306E\u6A19\u6E96\u540D (\u4F8B\u3048\u3070\u3001"ISO-8859-1" \u3084 "UTF-8" ) \u3001\u307E\u305F\u306FMIBEnum\u8B58\u5225\u5B50\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,e.jsxs)(d.p,{children:["CONVERT FROM TEXT\u3068",(0,e.jsx)(d.a,{href:"/docs/ja/20-R7/commands/convert-to-text",title:"Convert to text",children:"Convert to text"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,e.jsxs)(d.table,{children:[(0,e.jsx)(d.thead,{children:(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.th,{children:(0,e.jsx)(d.strong,{children:"MIBEnum"})}),(0,e.jsx)(d.th,{children:"\u540D\u524D"})]})}),(0,e.jsxs)(d.tbody,{children:[(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1017"}),(0,e.jsx)(d.td,{children:"UTF-32"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1018"}),(0,e.jsx)(d.td,{children:"UTF-32BE"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1019"}),(0,e.jsx)(d.td,{children:"UTF-32LE"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1015"}),(0,e.jsx)(d.td,{children:"UTF-16"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1013"}),(0,e.jsx)(d.td,{children:"UTF-16BE"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1014"}),(0,e.jsx)(d.td,{children:"UTF-16LE"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"106"}),(0,e.jsx)(d.td,{children:"UTF-8"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1012"}),(0,e.jsx)(d.td,{children:"UTF-7"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"US-ASCII"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"ANSI_X3.4-1968"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"ANSI_X3.4-1986"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"ASCII"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"cp367"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"csASCII"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"IBM367"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"iso-ir-6"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"ISO_646.irv:1991"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"ISO646-US"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"3"}),(0,e.jsx)(d.td,{children:"us"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2011"}),(0,e.jsx)(d.td,{children:"IBM437"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2011"}),(0,e.jsx)(d.td,{children:"cp437"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2011"}),(0,e.jsx)(d.td,{children:"437"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2011"}),(0,e.jsx)(d.td,{children:"csPC8CodePage437"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"ebcdic-cp-us"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"cp037"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"csIBM037"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"ebcdic-cp-ca"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"ebcdic-cp-n"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"ebcdic-cp-wt"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2028"}),(0,e.jsx)(d.td,{children:"IBM037"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2027"}),(0,e.jsx)(d.td,{children:"MacRoman"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2027"}),(0,e.jsx)(d.td,{children:"x-mac-roman"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2027"}),(0,e.jsx)(d.td,{children:"mac"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2027"}),(0,e.jsx)(d.td,{children:"macintosh"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2027"}),(0,e.jsx)(d.td,{children:"csMacintosh"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2252"}),(0,e.jsx)(d.td,{children:"windows-1252"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1250"}),(0,e.jsx)(d.td,{children:"MacCE"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1250"}),(0,e.jsx)(d.td,{children:"x-mac-ce"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2250"}),(0,e.jsx)(d.td,{children:"windows-1250"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1251"}),(0,e.jsx)(d.td,{children:"x-mac-cyrillic"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2251"}),(0,e.jsx)(d.td,{children:"windows-1251"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1253"}),(0,e.jsx)(d.td,{children:"x-mac-greek"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2253"}),(0,e.jsx)(d.td,{children:"windows-1253"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1254"}),(0,e.jsx)(d.td,{children:"x-mac-turkish"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2254"}),(0,e.jsx)(d.td,{children:"windows-1254"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1256"}),(0,e.jsx)(d.td,{children:"x-mac-arabic"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2256"}),(0,e.jsx)(d.td,{children:"windows-1256"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1255"}),(0,e.jsx)(d.td,{children:"x-mac-hebrew"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2255"}),(0,e.jsx)(d.td,{children:"windows-1255"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"1257"}),(0,e.jsx)(d.td,{children:"x-mac-ce"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2257"}),(0,e.jsx)(d.td,{children:"windows-1257"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"17"}),(0,e.jsx)(d.td,{children:"Shift_JIS"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"17"}),(0,e.jsx)(d.td,{children:"csShiftJIS"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"17"}),(0,e.jsx)(d.td,{children:"MS_Kanji"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"17"}),(0,e.jsx)(d.td,{children:"Shift-JIS"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"39"}),(0,e.jsx)(d.td,{children:"ISO-2022-JP"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"39"}),(0,e.jsx)(d.td,{children:"csISO2022JP"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2024"}),(0,e.jsx)(d.td,{children:"Windows-31J"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2026"}),(0,e.jsx)(d.td,{children:"Big5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2026"}),(0,e.jsx)(d.td,{children:"csBig5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"38"}),(0,e.jsx)(d.td,{children:"EUC-KR"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"38"}),(0,e.jsx)(d.td,{children:"csEUCKR"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2084"}),(0,e.jsx)(d.td,{children:"KOI8-R"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2084"}),(0,e.jsx)(d.td,{children:"csKOI8R"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"ISO-8859-1"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"CP819"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"csISOLatin1"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"IBM819"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"iso-ir-100"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"ISO_8859-1"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"ISO_8859-1:1987"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"l1"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"4"}),(0,e.jsx)(d.td,{children:"latin1"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"ISO-8859-2"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"csISOLatin2"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"iso-ir-101"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"ISO_8859-2"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"ISO_8859-2:1987"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"l2"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"5"}),(0,e.jsx)(d.td,{children:"latin2"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"ISO-8859-3"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"csISOLatin3"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"ISO-8859-3:1988"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"iso-ir-109"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"ISO_8859-3"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"l3"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"6"}),(0,e.jsx)(d.td,{children:"latin3"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"ISO-8859-4"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"csISOLatin4"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"ISO-8859-4:1988"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"iso-ir-110"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"ISO_8859-4"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"l4"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"7"}),(0,e.jsx)(d.td,{children:"latin4"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"8"}),(0,e.jsx)(d.td,{children:"ISO-8859-5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"8"}),(0,e.jsx)(d.td,{children:"csISOLatinCyrillic"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"8"}),(0,e.jsx)(d.td,{children:"cyrillic"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"8"}),(0,e.jsx)(d.td,{children:"ISO-8859-5:1988"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"8"}),(0,e.jsx)(d.td,{children:"iso-ir-144"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"8"}),(0,e.jsx)(d.td,{children:"ISO_8859-5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"ISO-8859-6"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"arabic"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"ASMO-708"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"csISOLatinArabic"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"ECMA-114"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"ISO-8859-6:1987"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"iso-ir-127"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"9"}),(0,e.jsx)(d.td,{children:"ISO_8859-6"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"ISO-8859-7"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"csISOLatinGreek"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"ECMA-118"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"ELOT_928"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"greek"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"greek8"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"iso-ir-126"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"ISO_8859-7"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"10"}),(0,e.jsx)(d.td,{children:"ISO_8859-7:1987"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"11"}),(0,e.jsx)(d.td,{children:"ISO-8859-8"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"11"}),(0,e.jsx)(d.td,{children:"csISOLatinHebrew"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"11"}),(0,e.jsx)(d.td,{children:"hebrew"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"11"}),(0,e.jsx)(d.td,{children:"iso-ir-138"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"11"}),(0,e.jsx)(d.td,{children:"ISO_8859-8"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"11"}),(0,e.jsx)(d.td,{children:"ISO_8859-8:1988"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"ISO-8859-9"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"csISOLatin5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"iso-ir-148"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"ISO_8859-9"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"ISO_8859-9:1989"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"l5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"12"}),(0,e.jsx)(d.td,{children:"latin5"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"ISO-8859-10"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"csISOLatin6"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"iso-ir-157"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"ISO_8859-10"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"ISO_8859-10:1992"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"l6"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"13"}),(0,e.jsx)(d.td,{children:"latin6"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"109"}),(0,e.jsx)(d.td,{children:"ISO-8859-13"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"111"}),(0,e.jsx)(d.td,{children:"ISO-8859-15"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"111"}),(0,e.jsx)(d.td,{children:"Latin-9"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"113"}),(0,e.jsx)(d.td,{children:"GBK"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2025"}),(0,e.jsx)(d.td,{children:"GB2312"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2025"}),(0,e.jsx)(d.td,{children:"csGB2312"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2025"}),(0,e.jsx)(d.td,{children:"x-mac-chinesesimp"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"2025"}),(0,e.jsx)(d.td,{children:"x-mac-chinesesimp"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"57"}),(0,e.jsx)(d.td,{children:"GB_2312-80"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"57"}),(0,e.jsx)(d.td,{children:"csISO58GB231280"})]})]})]}),"\n",(0,e.jsxs)(d.p,{children:[(0,e.jsx)(d.strong,{children:"\u6CE8:"})," \u3044\u304F\u3064\u304B\u306E\u884C\u306F\u540C\u3058MIBEnum\u8B58\u5225\u5B50\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306F\u6587\u5B57\u30BB\u30C3\u30C8\u304C1\u3064\u4EE5\u4E0A\u306E\u540D\u524D (\u30A8\u30A4\u30EA\u30A2\u30B9) \u3092\u6301\u3064\u305F\u3081\u3067\u3059\u3002"]}),"\n",(0,e.jsxs)(d.p,{children:["\u6587\u5B57\u30BB\u30C3\u30C8\u306E\u540D\u524D\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001\u4EE5\u4E0B\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044:",(0,e.jsx)(d.br,{}),"\n",(0,e.jsx)(d.em,{children:(0,e.jsx)(d.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"})})]}),"\n",(0,e.jsxs)(d.p,{children:["\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5F8C\u3001",(0,e.jsx)(d.em,{children:"convertedBLOB"})," BLOB\u306B\u306F\u5909\u63DB\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306EBLOB\u306F\u3001",(0,e.jsx)(d.a,{href:"/docs/ja/20-R7/commands/convert-to-text",title:"Convert to text",children:"Convert to text"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,e.jsxs)(d.p,{children:[(0,e.jsx)(d.strong,{children:"\u6CE8:"})," IANA\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u7279\u5225\u306A\u6587\u5B57\u30BB\u30C3\u30C8 (1258=x-mac-japanese) \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306FWindows\u4E0A\u3067\u306F\u30B3\u30FC\u30C9\u30DA\u30FC\u30B810001\u306B\u3001Mac\u4E0A\u3067\u306FkTextEncodingMacJapanese\u306B\u30DE\u30C3 \u30D7\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,e.jsx)(d.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,e.jsx)(d.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,e.jsx)(d.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,e.jsx)(d.p,{children:(0,e.jsx)(d.a,{href:"/docs/ja/20-R7/commands/convert-to-text",children:"Convert to text"})}),"\n",(0,e.jsx)(d.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,e.jsxs)(d.table,{children:[(0,e.jsx)(d.thead,{children:(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.th,{}),(0,e.jsx)(d.th,{})]})}),(0,e.jsxs)(d.tbody,{children:[(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,e.jsx)(d.td,{children:"1011"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,e.jsx)(d.td,{children:"\u2713"})]}),(0,e.jsxs)(d.tr,{children:[(0,e.jsx)(d.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,e.jsx)(d.td,{children:"OK"})]})]})]})]})}function j(n={}){let{wrapper:d}={...(0,t.a)(),...n.components};return d?(0,e.jsx)(d,{...n,children:(0,e.jsx)(x,{...n})}):x(n)}},250065:function(n,d,s){s.d(d,{Z:function(){return i},a:function(){return c}});var r=s(667294);let e={},t=r.createContext(e);function c(n){let d=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(d):{...d,...n}},[d,n])}function i(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:c(n.components),r.createElement(t.Provider,{value:d},n.children)}}}]);