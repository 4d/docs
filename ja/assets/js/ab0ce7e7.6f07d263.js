/*! For license information please see ab0ce7e7.6f07d263.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79629],{112317:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=d(474848),s=d(28453);const t={id:"data-collect",title:"Data Collection"},i=void 0,l={id:"Admin/data-collect",title:"Data Collection",description:"4D\u88fd\u54c1\u3092\u6539\u5584\u3057\u7d9a\u3051\u308b\u305f\u3081\u306b\u3001\u5b9f\u884c\u4e2d\u306e 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f7f\u7528\u72b6\u6cc1\u30c7\u30fc\u30bf\u3092\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3057\u307e\u3059\u3002 \u53ce\u96c6\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306f\u5b8c\u5168\u306b\u533f\u540d\u3067\u3001\u30c7\u30fc\u30bf\u53ce\u96c6\u304c\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R4/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/ja/20-R4/Admin/data-collect",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"data-collect",title:"Data Collection"},sidebar:"docs",previous:{title:"\u5fa9\u5143",permalink:"/docs/ja/20-R4/Backup/restore"},next:{title:"\u62e1\u5f35\u6a5f\u80fd",permalink:"/docs/ja/20-R4/Extensions/overview"}},c={},h=[{value:"\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:2},{value:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u8d77\u52d5\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u8d77\u52d5\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"Web\u30b5\u30fc\u30d0\u30fc\u8d77\u52d5\u6642\u3001\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"Web\u30b5\u30fc\u30d0\u30fc\u8d77\u52d5\u6642\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"\u4e00\u5b9a\u6642\u9593\u3054\u3068\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"\u4e00\u5b9a\u6642\u9593\u3054\u3068\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u7d42\u4e86\u6642\u3001\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u7d42\u4e86\u6642\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"PHP execute \u306e\u547c\u3073\u51fa\u3057\u6bce\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"PHP-execute-\u306e\u547c\u3073\u51fa\u3057\u6bce\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",level:3},{value:"\u4fdd\u5b58\u5148\u3068\u9001\u4fe1\u5148",id:"\u4fdd\u5b58\u5148\u3068\u9001\u4fe1\u5148",level:2},{value:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u81ea\u52d5\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b",id:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u81ea\u52d5\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b",level:2}];function x(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"4D\u88fd\u54c1\u3092\u6539\u5584\u3057\u7d9a\u3051\u308b\u305f\u3081\u306b\u3001\u5b9f\u884c\u4e2d\u306e 4D Server \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f7f\u7528\u72b6\u6cc1\u30c7\u30fc\u30bf\u3092\u81ea\u52d5\u7684\u306b\u53ce\u96c6\u3057\u307e\u3059\u3002 \u53ce\u96c6\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306f\u5b8c\u5168\u306b\u533f\u540d\u3067\u3001\u30c7\u30fc\u30bf\u53ce\u96c6\u304c\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306f\u4ee5\u4e0b\u3092\u8aac\u660e\u3057\u307e\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u3069\u306e\u3088\u3046\u306a\u60c5\u5831\u304c\u53ce\u96c6\u3055\u308c\u308b\u304b"}),"\n",(0,r.jsx)(e.li,{children:"\u3069\u3053\u306b\u60c5\u5831\u304c\u4fdd\u5b58\u3055\u308c\u3001\u3044\u3064 4D\u306b\u9001\u4fe1\u3055\u308c\u308b\u304b"}),"\n",(0,r.jsx)(e.li,{children:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u81ea\u52d5\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u30a4\u30d9\u30f3\u30c8\u4e2d\u306b\u30c7\u30fc\u30bf\u304c\u53ce\u96c6\u3055\u308c\u307e\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u958b\u304b\u308c\u308b"}),"\n",(0,r.jsx)(e.li,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u9589\u3058\u3089\u308c\u308b"}),"\n",(0,r.jsx)(e.li,{children:"Web\u30b5\u30fc\u30d0\u30fc\u304c\u8d77\u52d5\u3055\u308c\u308b"}),"\n",(0,r.jsx)(e.li,{children:"php\u5b9f\u884c"}),"\n",(0,r.jsx)(e.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u63a5\u7d9a\u3055\u308c\u308b"}),"\n",(0,r.jsx)(e.li,{children:"\u53ce\u96c6\u30c7\u30fc\u30bf\u304c\u9001\u4fe1\u3055\u308c\u308b"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u307e\u305f\u3001\u4e00\u90e8\u306e\u30c7\u30fc\u30bf\u306f\u4e00\u5b9a\u6642\u9593\u3054\u3068\u306b\u53ce\u96c6\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u8d77\u52d5\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u8d77\u52d5\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CPU"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306e\u540d\u524d\u3001\u7a2e\u985e\u3001\u304a\u3088\u3073\u901f\u5ea6"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"numberOfCores"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30b3\u30a2\u306e\u5408\u8a08\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"memory"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30de\u30b7\u30f3\u4e0a\u3067\u5229\u7528\u53ef\u80fd\u306a\u30e1\u30e2\u30ea\u5bb9\u91cf (\u30d0\u30a4\u30c8\u5358\u4f4d)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"system"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"OS \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30d3\u30eb\u30c9\u756a\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"headless"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30d8\u30c3\u30c9\u30ec\u30b9\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"version"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9\u756a\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"buildNumber"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u756a\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"license"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u88fd\u54c1\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u540d\u79f0\u3068\u8aac\u660e"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"isRosetta"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"macOS \u306e Rosetta \u3067 4D \u304c\u30a8\u30df\u30e5\u30ec\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f True\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f False (\u30a8\u30df\u30e5\u30ec\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u3001\u307e\u305f\u306f Windows \u306e\u5834\u5408)\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"uniqueID"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"4D Server \u306e\u56fa\u6709ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"id"}),(0,r.jsx)(e.td,{children:"Text (\u30cf\u30c3\u30b7\u30e5\u6587\u5b57\u5217)"}),(0,r.jsxs)(e.td,{children:["\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u4e00\u610f\u306e id (",(0,r.jsx)(e.em,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u540d\u306e\u591a\u9805\u5f0f\u30ed\u30fc\u30ea\u30f3\u30b0\u30cf\u30c3\u30b7\u30e5"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dataFileSize"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba (\u30d0\u30a4\u30c8\u5358\u4f4d)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"indexesSize"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u30b5\u30a4\u30ba (\u30d0\u30a4\u30c8\u5358\u4f4d)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cacheSize"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u30b5\u30a4\u30ba (\u30d0\u30a4\u30c8\u5358\u4f4d)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"usingLegacyNetworkLayer"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d0\u30fc\u306b\u65e7\u5f0f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ec\u30a4\u30e4\u30fc\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"usingQUICNetworkLayer"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c QUIC\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ec\u30a4\u30e4\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f True"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"encryptedConnections"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u304c\u6697\u53f7\u5316\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f True"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"encrypted"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u304c\u6697\u53f7\u5316\u3055\u308c\u3066\u3044\u308c\u3070 true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"compiled"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u306e\u5834\u5408\u306f true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"isEngined"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b 4D Volume Desltop \u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u306f true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"projectMode"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5834\u5408\u306f true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"mobile"}),(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{children:"\u30e2\u30d0\u30a4\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u95a2\u3059\u308b\u60c5\u5831"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"Web\u30b5\u30fc\u30d0\u30fc\u8d77\u52d5\u6642\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"Web\u30b5\u30fc\u30d0\u30fc\u8d77\u52d5\u6642\u3001\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"webServer"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:'Web\u30b5\u30fc\u30d0\u30fc\u304c\u8d77\u52d5\u4e2d\u3001\u307e\u305f\u306f\u8d77\u52d5\u6e08\u307f\u306e\u5834\u5408\u306f "started":true'})]})})]}),"\n",(0,r.jsx)(e.h3,{id:"\u4e00\u5b9a\u6642\u9593\u3054\u3068\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"\u4e00\u5b9a\u6642\u9593\u3054\u3068\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"maximumNumberOfWebProcesses"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u6700\u5927\u540c\u6642Web\u30d7\u30ed\u30bb\u30b9\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"maximumUsedPhysicalMemory"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u6700\u5927\u4f7f\u7528\u3057\u305f\u7269\u7406\u30e1\u30e2\u30ea"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"maximumUsedVirtualMemory"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u6700\u5927\u4f7f\u7528\u3057\u305f\u4eee\u60f3\u30e1\u30e2\u30ea"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"uptime"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30ed\u30fc\u30ab\u30eb4D\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u958b\u304b\u308c\u3066\u304b\u3089\u306e\u7d4c\u904e\u6642\u9593 (\u79d2\u5358\u4f4d)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cacheReadBytes"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304b\u3089\u8aad\u307f\u51fa\u3057\u305f\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cacheMissBytes"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cacheReadCount"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u8aad\u307f\u51fa\u3057\u56de\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"cacheMissCount"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u30df\u30b9\u56de\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dataSegment1.diskReadBytes"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u8aad\u307f\u53d6\u3063\u305f\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dataSegment1.diskWriteBytes"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304d\u8fbc\u3093\u3060\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dataSegment1.diskReadCount"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u306e\u8aad\u307f\u53d6\u308a\u56de\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"dataSegment1.diskWriteCount"}),(0,r.jsx)(e.td,{children:"Object"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u66f8\u304d\u8fbc\u307f\u56de\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"indexSegment.diskReadBytes"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u8aad\u307f\u53d6\u3063\u305f\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"indexSegment.diskWriteBytes"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304d\u8fbc\u3093\u3060\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"indexSegment.diskReadCount"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u306e\u8aad\u307f\u53d6\u308a\u56de\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"indexSegment.diskWriteCount"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u66f8\u304d\u8fbc\u307f\u56de\u6570"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u7d42\u4e86\u6642\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u7d42\u4e86\u6642\u3001\u53ce\u96c6\u30c7\u30fc\u30bf\u306e\u9001\u4fe1\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"webserverHits"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u53ce\u96c6\u4e2d\u306e Web\u30b5\u30fc\u30d0\u30fc\u306e\u30d2\u30c3\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"restHits"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u53ce\u96c6\u4e2d\u306e REST\u30b5\u30fc\u30d0\u30fc\u306e\u30d2\u30c3\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"webserverBytesIn"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u53ce\u96c6\u4e2d\u306b Web\u30b5\u30fc\u30d0\u30fc\u304c\u53d7\u4fe1\u3057\u305f\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"webserverBytesOut"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30c7\u30fc\u30bf\u53ce\u96c6\u4e2d\u306b Web\u30b5\u30fc\u30d0\u30fc\u304c\u9001\u4fe1\u3057\u305f\u30d0\u30a4\u30c8\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"qodly.webforms"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"Qodly Web\u30d5\u30a9\u30fc\u30e0\u306e\u6570"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"PHP-execute-\u306e\u547c\u3073\u51fa\u3057\u6bce\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"PHP execute \u306e\u547c\u3073\u51fa\u3057\u6bce\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"phpCall"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"PHP execute"})," \u306e\u547c\u3073\u51fa\u3057\u56de\u6570"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"externalPHP"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsxs)(e.td,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c ",(0,r.jsx)(e.code,{children:"PHP execute"})," \u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u72ec\u81ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e php \u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306f True\u3002"]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u6642\u306b\u53ce\u96c6\u3055\u308c\u308b\u60c5\u5831"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u30c7\u30fc\u30bf"}),(0,r.jsx)(e.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(e.th,{children:"\u6ce8\u8a18"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"maximum4DClientConnections"}),(0,r.jsx)(e.td,{children:"Number"}),(0,r.jsx)(e.td,{children:"\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u6700\u5927\u63a5\u7d9a\u6570"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"connectionSystems"}),(0,r.jsx)(e.td,{children:"Collection"}),(0,r.jsx)(e.td,{children:"\u30d3\u30eb\u30c9\u756a\u53f7 (\u62ec\u5f27\u5185) \u306a\u3057\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8OS\u3068\u3001\u305d\u308c\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u6570"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4fdd\u5b58\u5148\u3068\u9001\u4fe1\u5148",children:"\u4fdd\u5b58\u5148\u3068\u9001\u4fe1\u5148"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ce\u96c6\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306f\u30014D Server \u306e\u7d42\u4e86\u6642\u306b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u6bce\u306b\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb (JSON\u5f62\u5f0f) \u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002 \u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001",(0,r.jsx)(e.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page485.html",children:"Active 4D Folder"})," \u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Windows: ",(0,r.jsx)(e.code,{children:"Users\\[userName]\\AppData\\Roaming\\4D Server"})]}),"\n",(0,r.jsxs)(e.li,{children:["macOS: ",(0,r.jsx)(e.code,{children:"/Users/[userName]/Library/ApplicationSupport/4D Server"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u9031\u306b\u4e00\u5ea6\u3001\u30d5\u30a1\u30a4\u30eb\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7d4c\u7531\u3067\u81ea\u52d5\u7684\u306b 4D \u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002 \u305d\u306e\u5f8c\u3001\u30d5\u30a1\u30a4\u30eb\u306f Active 4D Folder \u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:d(433450).A+"",width:"1261",height:"398"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f55\u3089\u304b\u306e\u7406\u7531\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u9001\u4fe1\u3067\u304d\u306a\u304b\u3063\u305f\u5834\u5408\u3067\u3082\u3001\u30d5\u30a1\u30a4\u30eb\u306f\u524a\u9664\u3055\u308c\u30014D Server \u306b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u8868\u793a\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u6b21\u306e\u30b5\u30fc\u30d0\u30fc\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059: ",(0,r.jsx)(e.code,{children:"https://dcollector.4d.com"})," (ip: 195.68.52.83)\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u81ea\u52d5\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b",children:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u81ea\u52d5\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/20-R4/Desktop/building#%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%9A%E3%83%BC%E3%82%B8",children:"\u30d3\u30eb\u30c9\u3055\u308c\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," \u3067\u3001\u81ea\u52d5\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u7121\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d3\u30eb\u30c9\u306b\u4f7f\u7528\u3059\u308b ",(0,r.jsx)(e.code,{children:"buildApp.4DSettings"})," \u30d5\u30a1\u30a4\u30eb\u5185\u306e ",(0,r.jsx)(e.a,{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.ja.html",children:(0,r.jsx)(e.code,{children:"ServerDataCollection"})})," \u30ad\u30fc\u306b\u5024 ",(0,r.jsx)(e.strong,{children:"False"})," \u3092\u6e21\u3057\u307e\u3059\u3002"]})]})}function j(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},221020:(n,e,d)=>{var r=d(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(n,e,d){var r,t={},h=null,x=null;for(r in void 0!==d&&(h=""+d),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(x=e.ref),e)i.call(e,r)&&!c.hasOwnProperty(r)&&(t[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===t[r]&&(t[r]=e[r]);return{$$typeof:s,type:n,key:h,ref:x,props:t,_owner:l.current}}e.Fragment=t,e.jsx=h,e.jsxs=h},474848:(n,e,d)=>{n.exports=d(221020)},433450:(n,e,d)=>{d.d(e,{A:()=>r});const r=d.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"},28453:(n,e,d)=>{d.d(e,{R:()=>i,x:()=>l});var r=d(296540);const s={},t=r.createContext(s);function i(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);