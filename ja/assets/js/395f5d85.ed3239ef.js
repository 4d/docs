"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84128],{445358:(n,d,s)=>{s.r(d),s.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var r=s(474848),e=s(28453);const t={id:"convert-from-text",title:"CONVERT FROM TEXT",slug:"/commands/convert-from-text",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/convert-from-text",title:"CONVERT FROM TEXT",description:"CONVERT FROM TEXT ( 4Dtext ; charSet ; convertedBLOB )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-from-text.md",sourceDirName:"commands-legacy",slug:"/commands/convert-from-text",permalink:"/docs/ja/commands/convert-from-text",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-from-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"convert-from-text",title:"CONVERT FROM TEXT",slug:"/commands/convert-from-text",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Compare strings",permalink:"/docs/ja/commands/compare-strings"},next:{title:"Convert to text",permalink:"/docs/ja/commands/convert-to-text"}},l={},h=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function x(n){const d={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,e.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"CONVERT FROM TEXT"})," ( ",(0,r.jsx)(d.em,{children:"4Dtext"})," ; ",(0,r.jsx)(d.em,{children:"charSet"})," ; ",(0,r.jsx)(d.em,{children:"convertedBLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"\u5f15\u6570"}),(0,r.jsx)(d.th,{children:"\u578b"}),(0,r.jsx)(d.th,{}),(0,r.jsx)(d.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4Dtext"}),(0,r.jsx)(d.td,{children:"Text"}),(0,r.jsx)(d.td,{children:"\u2192"}),(0,r.jsx)(d.td,{children:"\u73fe\u5728\u306e4D\u306e\u6587\u5b57\u30bb\u30c3\u30c8\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u30c6\u30ad\u30b9\u30c8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"charSet"}),(0,r.jsx)(d.td,{children:"Text, Integer"}),(0,r.jsx)(d.td,{children:"\u2192"}),(0,r.jsx)(d.td,{children:"\u6587\u5b57\u30bb\u30c3\u30c8\u306e\u756a\u53f7\u307e\u305f\u306f\u540d\u524d"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"convertedBlob"}),(0,r.jsx)(d.td,{children:"Blob"}),(0,r.jsx)(d.td,{children:"\u2190"}),(0,r.jsx)(d.td,{children:"\u5909\u63db\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u3092\u542b\u3080BLOB"})]})]})]}),"\n",(0,r.jsx)(d.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(d.p,{children:"CONVERT FROM TEXT\u30b3\u30de\u30f3\u30c9\u306f\u3001\u73fe\u5728\u306e4D\u306e\u6587\u5b57\u30bb\u30c3\u30c8\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u4ed6\u306e\u6587\u5b57\u30bb\u30c3\u30c8\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u30c6\u30ad\u30b9\u30c8\u3078\u5909\u63db\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.em,{children:"4Dtext"})," \u5f15\u6570\u306b\u306f\u5909\u63db\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002\u3053\u306e\u30c6\u30ad\u30b9\u30c8\u306f\u30014D\u304c\u4f7f\u7528\u3059\u308b\u6587\u5b57\u30bb\u30c3\u30c8\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u307e\u3059\u30024D\u306e\u30d0\u30fc\u30b8\u30e7\u30f311\u3067\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067Unicode \u6587\u5b57\u30bb\u30c3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.em,{children:"charSet"}),' \u306b\u306f\u5909\u63db\u306b\u4f7f\u7528\u3059\u308b\u6587\u5b57\u30bb\u30c3\u30c8\u3092\u6e21\u3057\u307e\u3059\u3002\u30bb\u30c3\u30c8\u306e\u6a19\u6e96\u540d (\u4f8b\u3048\u3070\u3001"ISO-8859-1" \u3084 "UTF-8" ) \u3001\u307e\u305f\u306fMIBEnum\u8b58\u5225\u5b50\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002']}),"\n",(0,r.jsxs)(d.p,{children:["CONVERT FROM TEXT\u3068",(0,r.jsx)(d.a,{href:"/docs/ja/commands/convert-to-text",title:"Convert to text",children:"Convert to text"}),"\u30b3\u30de\u30f3\u30c9\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u6587\u5b57\u30bb\u30c3\u30c8\u306e\u30ea\u30b9\u30c8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:(0,r.jsx)(d.strong,{children:"MIBEnum"})}),(0,r.jsx)(d.th,{children:"\u540d\u524d"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1017"}),(0,r.jsx)(d.td,{children:"UTF-32"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1018"}),(0,r.jsx)(d.td,{children:"UTF-32BE"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1019"}),(0,r.jsx)(d.td,{children:"UTF-32LE"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1015"}),(0,r.jsx)(d.td,{children:"UTF-16"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1013"}),(0,r.jsx)(d.td,{children:"UTF-16BE"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1014"}),(0,r.jsx)(d.td,{children:"UTF-16LE"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"106"}),(0,r.jsx)(d.td,{children:"UTF-8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1012"}),(0,r.jsx)(d.td,{children:"UTF-7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"US-ASCII"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"ANSI_X3.4-1968"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"ANSI_X3.4-1986"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"ASCII"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"cp367"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"csASCII"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"IBM367"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"iso-ir-6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"ISO_646.irv:1991"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"ISO646-US"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"3"}),(0,r.jsx)(d.td,{children:"us"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2011"}),(0,r.jsx)(d.td,{children:"IBM437"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2011"}),(0,r.jsx)(d.td,{children:"cp437"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2011"}),(0,r.jsx)(d.td,{children:"437"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2011"}),(0,r.jsx)(d.td,{children:"csPC8CodePage437"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"ebcdic-cp-us"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"cp037"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"csIBM037"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"ebcdic-cp-ca"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"ebcdic-cp-n"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"ebcdic-cp-wt"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2028"}),(0,r.jsx)(d.td,{children:"IBM037"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2027"}),(0,r.jsx)(d.td,{children:"MacRoman"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2027"}),(0,r.jsx)(d.td,{children:"x-mac-roman"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2027"}),(0,r.jsx)(d.td,{children:"mac"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2027"}),(0,r.jsx)(d.td,{children:"macintosh"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2027"}),(0,r.jsx)(d.td,{children:"csMacintosh"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2252"}),(0,r.jsx)(d.td,{children:"windows-1252"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1250"}),(0,r.jsx)(d.td,{children:"MacCE"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1250"}),(0,r.jsx)(d.td,{children:"x-mac-ce"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2250"}),(0,r.jsx)(d.td,{children:"windows-1250"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1251"}),(0,r.jsx)(d.td,{children:"x-mac-cyrillic"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2251"}),(0,r.jsx)(d.td,{children:"windows-1251"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1253"}),(0,r.jsx)(d.td,{children:"x-mac-greek"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2253"}),(0,r.jsx)(d.td,{children:"windows-1253"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1254"}),(0,r.jsx)(d.td,{children:"x-mac-turkish"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2254"}),(0,r.jsx)(d.td,{children:"windows-1254"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1256"}),(0,r.jsx)(d.td,{children:"x-mac-arabic"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2256"}),(0,r.jsx)(d.td,{children:"windows-1256"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1255"}),(0,r.jsx)(d.td,{children:"x-mac-hebrew"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2255"}),(0,r.jsx)(d.td,{children:"windows-1255"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"1257"}),(0,r.jsx)(d.td,{children:"x-mac-ce"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2257"}),(0,r.jsx)(d.td,{children:"windows-1257"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"17"}),(0,r.jsx)(d.td,{children:"Shift_JIS"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"17"}),(0,r.jsx)(d.td,{children:"csShiftJIS"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"17"}),(0,r.jsx)(d.td,{children:"MS_Kanji"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"17"}),(0,r.jsx)(d.td,{children:"Shift-JIS"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"39"}),(0,r.jsx)(d.td,{children:"ISO-2022-JP"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"39"}),(0,r.jsx)(d.td,{children:"csISO2022JP"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2024"}),(0,r.jsx)(d.td,{children:"Windows-31J"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2026"}),(0,r.jsx)(d.td,{children:"Big5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2026"}),(0,r.jsx)(d.td,{children:"csBig5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"38"}),(0,r.jsx)(d.td,{children:"EUC-KR"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"38"}),(0,r.jsx)(d.td,{children:"csEUCKR"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2084"}),(0,r.jsx)(d.td,{children:"KOI8-R"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2084"}),(0,r.jsx)(d.td,{children:"csKOI8R"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"ISO-8859-1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"CP819"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"csISOLatin1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"IBM819"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"iso-ir-100"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"ISO_8859-1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"ISO_8859-1:1987"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"l1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:"latin1"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"ISO-8859-2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"csISOLatin2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"iso-ir-101"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"ISO_8859-2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"ISO_8859-2:1987"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"l2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"5"}),(0,r.jsx)(d.td,{children:"latin2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"ISO-8859-3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"csISOLatin3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"ISO-8859-3:1988"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"iso-ir-109"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"ISO_8859-3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"l3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"6"}),(0,r.jsx)(d.td,{children:"latin3"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"ISO-8859-4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"csISOLatin4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"ISO-8859-4:1988"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"iso-ir-110"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"ISO_8859-4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"l4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"7"}),(0,r.jsx)(d.td,{children:"latin4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"ISO-8859-5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"csISOLatinCyrillic"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"cyrillic"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"ISO-8859-5:1988"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"iso-ir-144"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:"ISO_8859-5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"ISO-8859-6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"arabic"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"ASMO-708"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"csISOLatinArabic"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"ECMA-114"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"ISO-8859-6:1987"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"iso-ir-127"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"9"}),(0,r.jsx)(d.td,{children:"ISO_8859-6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"ISO-8859-7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"csISOLatinGreek"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"ECMA-118"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"ELOT_928"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"greek"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"greek8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"iso-ir-126"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"ISO_8859-7"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"ISO_8859-7:1987"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"ISO-8859-8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"csISOLatinHebrew"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"hebrew"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"iso-ir-138"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"ISO_8859-8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"11"}),(0,r.jsx)(d.td,{children:"ISO_8859-8:1988"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"ISO-8859-9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"csISOLatin5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"iso-ir-148"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"ISO_8859-9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"ISO_8859-9:1989"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"l5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"12"}),(0,r.jsx)(d.td,{children:"latin5"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"ISO-8859-10"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"csISOLatin6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"iso-ir-157"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"ISO_8859-10"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"ISO_8859-10:1992"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"l6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"13"}),(0,r.jsx)(d.td,{children:"latin6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"109"}),(0,r.jsx)(d.td,{children:"ISO-8859-13"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"111"}),(0,r.jsx)(d.td,{children:"ISO-8859-15"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"111"}),(0,r.jsx)(d.td,{children:"Latin-9"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"113"}),(0,r.jsx)(d.td,{children:"GBK"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2025"}),(0,r.jsx)(d.td,{children:"GB2312"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2025"}),(0,r.jsx)(d.td,{children:"csGB2312"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2025"}),(0,r.jsx)(d.td,{children:"x-mac-chinesesimp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"2025"}),(0,r.jsx)(d.td,{children:"x-mac-chinesesimp"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"57"}),(0,r.jsx)(d.td,{children:"GB_2312-80"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"57"}),(0,r.jsx)(d.td,{children:"csISO58GB231280"})]})]})]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"\u6ce8:"})," \u3044\u304f\u3064\u304b\u306e\u884c\u306f\u540c\u3058MIBEnum\u8b58\u5225\u5b50\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u6587\u5b57\u30bb\u30c3\u30c8\u304c1\u3064\u4ee5\u4e0a\u306e\u540d\u524d (\u30a8\u30a4\u30ea\u30a2\u30b9) \u3092\u6301\u3064\u305f\u3081\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:["\u6587\u5b57\u30bb\u30c3\u30c8\u306e\u540d\u524d\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001\u4ee5\u4e0b\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044:",(0,r.jsx)(d.br,{}),"\n",(0,r.jsx)(d.em,{children:(0,r.jsx)(d.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"})})]}),"\n",(0,r.jsxs)(d.p,{children:["\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u5f8c\u3001",(0,r.jsx)(d.em,{children:"convertedBLOB"})," BLOB\u306b\u306f\u5909\u63db\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002\u3053\u306eBLOB\u306f\u3001",(0,r.jsx)(d.a,{href:"/docs/ja/commands/convert-to-text",title:"Convert to text",children:"Convert to text"}),"\u30b3\u30de\u30f3\u30c9\u3067\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"\u6ce8:"})," IANA\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u7279\u5225\u306a\u6587\u5b57\u30bb\u30c3\u30c8 (1258=x-mac-japanese) \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306fWindows\u4e0a\u3067\u306f\u30b3\u30fc\u30c9\u30da\u30fc\u30b810001\u306b\u3001Mac\u4e0a\u3067\u306fkTextEncodingMacJapanese\u306b\u30de\u30c3 \u30d7\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(d.h4,{id:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8",children:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570\u304a\u3088\u3073\u30bb\u30c3\u30c8"}),"\n",(0,r.jsx)(d.p,{children:"\u30b3\u30de\u30f3\u30c9\u304c\u6b63\u3057\u304f\u5b9f\u884c\u3055\u308c\u308b\u3068\u30b7\u30b9\u30c6\u30e0\u5909\u6570OK\u306b1\u304c\u8a2d\u5b9a\u3055\u308c\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u30700\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(d.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsx)(d.p,{children:(0,r.jsx)(d.a,{href:"/docs/ja/commands/convert-to-text",children:"Convert to text"})})]})}function j(n={}){const{wrapper:d}={...(0,e.R)(),...n.components};return d?(0,r.jsx)(d,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},28453:(n,d,s)=>{s.d(d,{R:()=>c,x:()=>i});var r=s(296540);const e={},t=r.createContext(e);function c(n){const d=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(d):{...d,...n}}),[d,n])}function i(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:c(n.components),r.createElement(t.Provider,{value:d},n.children)}}}]);