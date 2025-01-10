"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48741"],{449331:function(n,e,c){c.r(e),c.d(e,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>A,contentTitle:()=>l});var s=JSON.parse('{"id":"Backup/backup","title":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7","description":"4D \u3067\u306F\u3001\u6B21\u306E 3\u3064\u306E\u65B9\u6CD5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u958B\u59CB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/Backup/backup.md","sourceDirName":"Backup","slug":"/Backup/backup","permalink":"/docs/ja/19/Backup/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"backup","slug":"backup","title":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"},"sidebar":"docs","previous":{"title":"\u6982\u8981","permalink":"/docs/ja/19/Backup/overview"},"next":{"title":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A","permalink":"/docs/ja/19/Backup/settings"}}'),r=c("785893"),i=c("250065");let d={id:"backup",slug:"backup",title:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"},l=void 0,t={},A=[{value:"\u624B\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",id:"\u624B\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",level:2},{value:"\u5B9A\u671F\u7684\u306A\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",id:"\u5B9A\u671F\u7684\u306A\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",level:2},{value:"BACKUP \u30B3\u30DE\u30F3\u30C9",id:"backup-\u30B3\u30DE\u30F3\u30C9",level:2},{value:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u306E\u7BA1\u7406",id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u306E\u7BA1\u7406",level:2},{value:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9",id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9",level:3},{value:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408",id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408",level:3},{value:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB",id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB",level:2},{value:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306E\u30B5\u30A4\u30BA\u7BA1\u7406",id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306E\u30B5\u30A4\u30BA\u7BA1\u7406",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}];function h(n){let e={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"4D \u3067\u306F\u3001\u6B21\u306E 3\u3064\u306E\u65B9\u6CD5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u958B\u59CB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u624B\u52D5\u306B\u3088\u308B\u65B9\u6CD5: 4D \u306E ",(0,r.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u304B\u3089 ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7..."})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u307E\u305F\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/19/MSC/backup",children:"Maintenance \uFF06 Security Center (MSC)"})," \u306E ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u81EA\u52D5\u7684\u306B\u884C\u3046\u65B9\u6CD5: \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u304B\u3089\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u30FC\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u308B\u65B9\u6CD5: ",(0,r.jsx)(e.code,{children:"BACKUP"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["4D Server: \u30EA\u30E2\u30FC\u30C8\u30DE\u30B7\u30F3\u304B\u3089 ",(0,r.jsx)(e.code,{children:"BACKUP"})," \u3092\u547C\u3073\u51FA\u3059\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u624B\u52D5\u3067\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u958B\u59CB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3044\u304B\u306A\u308B\u5834\u5408\u3067\u3082\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u624B\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",children:"\u624B\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["4D \u306E ",(0,r.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB"})," \u30E1\u30CB\u30E5\u30FC\u304B\u3089 ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7..."})," \u3092\u9078\u629E\u3057\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30A6\u30A4\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u307E\u3059: ",(0,r.jsx)(e.img,{src:c(794536).Z+"",width:"564",height:"192"}),' "\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u306E\u4FDD\u5B58\u5148" \u30A8\u30EA\u30A2\u306E\u96A3\u306E\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30E1\u30CB\u30E5\u30FC\u3092\u4F7F\u7528\u3057\u3066\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u306E\u4FDD\u5B58\u5834\u6240\u3092\u78BA\u8A8D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u6240\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306E ',(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7/\u8A2D\u5B9A"})," \u30DA\u30FC\u30B8\u306B\u3066\u3001\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["4D \u306E ",(0,r.jsx)(e.a,{href:"/docs/ja/19/MSC/overview",children:"Maintenance \uFF06 Security Center (MSC)"})," \u3092\u958B\u3044\u3066\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/19/MSC/backup",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30DA\u30FC\u30B8"})," \u304B\u3089\u64CD\u4F5C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D7\u30ED\u30D1\u30C6\u30A3..."})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7/\u8A2D\u5B9A\u30DA\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u73FE\u5728\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u7528\u3044\u3066\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5B9A\u671F\u7684\u306A\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",children:"\u5B9A\u671F\u7684\u306A\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),"\n",(0,r.jsxs)(e.p,{children:["\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306F\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u306B\u57FA\u3065\u3044\u3066\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u5468\u671F\u306F\u3001",(0,r.jsx)(e.strong,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A"})," \u306E ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7/\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u30FC"})," \u30DA\u30FC\u30B8\u306B\u3066\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30E6\u30FC\u30B6\u30FC\u304C\u4E00\u5207\u64CD\u4F5C\u3057\u306A\u304F\u3066\u3082\u3001\u3053\u306E\u30DA\u30FC\u30B8\u3067\u6307\u5B9A\u3055\u308C\u305F\u6642\u9593\u306B\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u81EA\u52D5\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/19/Backup/settings#%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A9%E3%83%BC",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u30FC"})," \u306E\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"backup-\u30B3\u30DE\u30F3\u30C9",children:"BACKUP \u30B3\u30DE\u30F3\u30C9"}),"\n",(0,r.jsxs)(e.p,{children:["\u4EFB\u610F\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u3066 ",(0,r.jsx)(e.code,{children:"BACKUP"})," 4D\u30E9\u30F3\u30B2\u30FC\u30B8\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u73FE\u5728\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u7528\u3044\u3066\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u958B\u59CB\u3057\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D7\u30ED\u30BB\u30B9\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u3001",(0,r.jsx)(e.code,{children:"On Backup Startup"})," \u304A\u3088\u3073 ",(0,r.jsx)(e.code,{children:"On Backup Shutdown"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u8A73\u7D30\u306F\u3001",(0,r.jsx)(e.em,{children:"4D\u30E9\u30F3\u30B2\u30FC\u30B8\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"})," \u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u306E\u7BA1\u7406",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u306E\u7BA1\u7406"}),"\n",(0,r.jsx)(e.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u958B\u59CB\u3059\u308B\u3068 4D\u306F\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u9032\u6357\u72B6\u6CC1\u3092\u77E5\u3089\u305B\u308B\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u30FC\u306E\u3042\u308B\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:c(53551).Z+"",width:"408",height:"168"})}),"\n",(0,r.jsxs)(e.p,{children:["MSC \u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u3053\u306E\u9032\u6357\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC\u306F ",(0,r.jsx)(e.a,{href:"/docs/ja/19/MSC/backup",children:"MSC \u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30DA\u30FC\u30B8"})," \u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4E2D\u6B62"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u3044\u3064\u3067\u3082\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u4E2D\u65AD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (",(0,r.jsx)(e.a,{href:"/docs/ja/19/Backup/backup#%E3%83%90%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E4%B8%AD%E3%81%AB%E5%95%8F%E9%A1%8C%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408"})," \u53C2\u7167)\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u7D50\u679C (\u6210\u529F\u307E\u305F\u306F\u4E0D\u6210\u529F) \u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/19/MSC/backup",children:"MSC \u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30DA\u30FC\u30B8"}),' \u306E "\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u60C5\u5831" \u30A8\u30EA\u30A2\u3001\u307E\u305F\u306F 4D Server \u306E ',(0,r.jsx)(e.strong,{children:"\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30DA\u30FC\u30B8"})," \u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB"})," (Backup Journal.txt) \u306B\u3082\u8A18\u9332\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9"}),"\n",(0,r.jsx)(e.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u5B9F\u884C\u4E2D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u30014D \u306B\u3088\u3063\u3066\u5236\u9650\u3055\u308C\u307E\u3059\u3002 4D \u306F\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306B\u542B\u307E\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7\u306B\u95A2\u9023\u3059\u308B\u30D7\u30ED\u30BB\u30EB\u306F\u3059\u3079\u3066\u30ED\u30C3\u30AF\u3057\u307E\u3059: \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A1\u30A4\u30EB\u3060\u3051\u304C\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306B\u306F\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u305B\u3093\u304C\u3001\u30C7\u30FC\u30BF\u306B\u306F\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u53CD\u5BFE\u306B\u3001\u30C7\u30FC\u30BF\u3060\u3051\u304C\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3042\u308C\u3070\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u8A31\u53EF\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u306B\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u53EF\u80FD\u304B\u3069\u3046\u304B\u3092\u6B21\u306B\u793A\u3057\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30B7\u30F3\u30B0\u30EB\u30E6\u30FC\u30B6\u30FC\u7248\u306E 4D \u306E\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u8AAD\u307F\u8FBC\u307F\u3001\u66F8\u304D\u8FBC\u307F\u3068\u3082\u306B\u30ED\u30C3\u30AF\u3055\u308C\u3001\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u505C\u6B62\u3057\u307E\u3059\u3002 \u5B9F\u884C\u3067\u304D\u308B\u30A2\u30AF\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["4D Server \u306E\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3078\u306E\u66F8\u304D\u8FBC\u307F\u3060\u3051\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u306F\u30C7\u30FC\u30BF\u3092\u7167\u4F1A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u30B5\u30FC\u30D0\u30FC\u3078\u8FFD\u52A0\u30FB\u524A\u9664\u30FB\u5909\u66F4\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u9001\u4FE1\u3055\u308C\u308B\u3068\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u7D42\u4E86\u307E\u3067\u5F85\u6A5F\u3059\u308B\u3088\u3046\u8981\u6C42\u3055\u308C\u307E\u3059\u3002 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u4FDD\u5B58\u3055\u308C\u308B\u3068\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u9589\u3058\u3089\u308C\u3001\u8981\u6C42\u3057\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u7D42\u4E86\u307E\u3067\u5F85\u6A5F\u305B\u305A\u306B\u3001\u51E6\u7406\u4E2D\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u306B\u306F\u3001",(0,r.jsx)(e.strong,{children:"\u51E6\u7406\u3092\u30AD\u30E3\u30F3\u30BB\u30EB"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u524D\u306B\u958B\u59CB\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u8981\u6C42\u3055\u308C\u305F\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u5B9F\u884C\u5F85\u6A5F\u4E2D\u3067\u3042\u308B\u5834\u5408\u3001\u3053\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u3079\u304D\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u5B9F\u884C\u3059\u3079\u304D\u6B8B\u308A\u306E\u51E6\u7406\u3060\u3051\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u3066\u3057\u307E\u3046\u305F\u3081\u3067\u3059\u3002 \u3057\u304B\u3082\u3001\u30E1\u30BD\u30C3\u30C9\u306E\u4E00\u90E8\u306F\u5B9F\u884C\u6E08\u307F\u306A\u306E\u3067\u3001\u30C7\u30FC\u30BF\u306B\u304A\u3044\u3066\u8AD6\u7406\u4E0A\u306E\u4E0D\u6574\u5408\u304C\u751F\u3058\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5B9F\u884C\u5F85\u6A5F\u4E2D\u306E\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u3001\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u8981\u6C42\u3055\u308C\u305F\u3082\u306E\u3067\u3042\u308B\u5834\u5408\u306B\u3001\u30E6\u30FC\u30B6\u30FC\u304C ",(0,r.jsx)(e.strong,{children:"\u51E6\u7406\u3092\u30AD\u30E3\u30F3\u30BB\u30EB"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D Server \u306F\u30A8\u30E9\u30FC -9976 (\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u9032\u884C\u4E2D\u306A\u306E\u3067\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5B9F\u884C\u3055\u308C\u307E\u305B\u3093) \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u5834\u5408"}),"\n",(0,r.jsx)(e.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u6B63\u5E38\u306B\u5B9F\u884C\u3055\u308C\u306A\u3044\u5834\u5408\u3082\u3042\u308A\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u304C\u4E0D\u6210\u529F\u306B\u7D42\u308F\u308B\u539F\u56E0\u3068\u3057\u3066\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u308B\u4E2D\u65AD\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u4FDD\u5B58\u5148\u30C7\u30A3\u30B9\u30AF\u306E\u30C8\u30E9\u30D6\u30EB\u3001\u4E0D\u5B8C\u5168\u306A\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u306A\u3069\u3001\u3044\u304F\u3064\u304B\u8003\u3048\u3089\u308C\u307E\u3059\u30024D \u306F\u539F\u56E0\u306B\u5FDC\u3058\u3066\u554F\u984C\u306B\u5BFE\u51E6\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u3059\u3079\u3066\u306E\u5834\u5408\u306B\u304A\u3044\u3066\u3001\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u30B9\u30C6\u30FC\u30BF\u30B9 (\u6210\u529F\u307E\u305F\u306F\u4E0D\u6210\u529F) \u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/19/MSC/backup",children:"MSC \u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30DA\u30FC\u30B8"}),' \u306E "\u524D\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u60C5\u5831" \u30A8\u30EA\u30A2\u30014D Server \u306E ',(0,r.jsx)(e.strong,{children:"\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30DA\u30FC\u30B8"}),"\u3001\u304A\u3088\u3073 ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB"})," (Backup Journal.txt) \u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u308B\u4E2D\u65AD"}),": \u9032\u6357\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E ",(0,r.jsx)(e.strong,{children:"\u4E2D\u6B62"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u3044\u3064\u3067\u3082\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u4E2D\u65AD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u5404\u9805\u76EE\u306E\u30B3\u30D4\u30FC\u304C\u4E2D\u6B62\u3055\u308C\u3066\u30A8\u30E9\u30FC 1406 \u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30A8\u30E9\u30FC\u306F ",(0,r.jsx)(e.code,{children:"On Backup Shutdown"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3067\u906E\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u3044"}),": \u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u30014D \u306F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u90E8\u5206\u7684\u306B\u5B9F\u884C\u3057 (\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u304A\u3088\u3073\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u306A\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7)\u3001\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4E0D\u53EF\u80FD"})," (\u30C7\u30A3\u30B9\u30AF\u30D5\u30EB\u3001\u30C7\u30A3\u30B9\u30AF\u306E\u66F8\u304D\u8FBC\u307F\u4FDD\u8B77\u3001\u30C7\u30A3\u30B9\u30AF\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u3001\u30C7\u30A3\u30B9\u30AF\u969C\u5BB3\u3001\u4E0D\u5B8C\u5168\u306A\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3001\u5B9A\u671F\u7684\u306A\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u6642\u306B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u8D77\u52D5\u3055\u308C\u3066\u3044\u306A\u3044\u3001\u306A\u3069): \u521D\u56DE\u306E\u30A8\u30E9\u30FC\u306E\u5834\u5408\u306B\u306F\u30014D \u306F\u3082\u3046\u4E00\u5EA6\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u5B9F\u884C\u3092\u8A66\u307F\u307E\u3059\u3002 \u3053\u306E 2\u56DE\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u9593\u306E\u5F85\u6A5F\u6642\u9593\u306F\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u306E ",(0,r.jsx)(e.strong,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7/\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\uFF06\u5FA9\u65E7"})," \u30DA\u30FC\u30B8\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 \u518D\u8A66\u884C\u306B\u3082\u5931\u6557\u3057\u305F\u5834\u5408\u3001\u30B7\u30B9\u30C6\u30E0\u306E\u8B66\u544A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u3053\u306E\u30A8\u30E9\u30FC\u306F ",(0,r.jsx)(e.code,{children:"On Backup Shutdown"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3067\u906E\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB"}),"\n",(0,r.jsx)(e.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u8FFD\u8DE1\u3084\u691C\u8A3C\u3092\u5BB9\u6613\u306B\u3059\u308B\u305F\u3081\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30E2\u30B8\u30E5\u30FC\u30EB\u306F\u5B9F\u884C\u3055\u308C\u305F\u5404\u51E6\u7406\u306E\u6982\u8981\u3092\u7279\u5225\u306A\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u8FBC\u307F\u307E\u3059\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u3044\u308F\u3086\u308B\u6D3B\u52D5\u8A18\u9332\u306E\u3088\u3046\u306A\u3082\u306E\u3067\u3059\u3002 \u51E6\u7406\u304C\u5B9A\u671F\u7684\u307E\u305F\u306F\u624B\u52D5\u306E\u3044\u305A\u308C\u3067\u304A\u3053\u306A\u308F\u308C\u3066\u3044\u3066\u3082\u3001\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u64CD\u4F5C (\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3001\u5FA9\u5143\u3001\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u7D71\u5408) \u304C\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u3001\u65E5\u8A8C\u306E\u3054\u3068\u304F\u8A18\u9332\u3055\u308C\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u305F\u65E5\u4ED8\u3068\u6642\u523B\u3082\u3053\u306E\u30B8\u30E3\u30FC\u30CA\u30EB\u306B\u8A18\u8FF0\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:'\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306B\u306F "Backup Journal[001].txt"\u3068\u3044\u3046\u540D\u524D\u304C\u4ED8\u3051\u3089\u308C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E "Logs" \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306F\u3001\u4EFB\u610F\u306E\u30C6\u30AD\u30B9\u30C8\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002'}),"\n",(0,r.jsx)(e.h4,{id:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306E\u30B5\u30A4\u30BA\u7BA1\u7406",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306E\u30B5\u30A4\u30BA\u7BA1\u7406"}),"\n",(0,r.jsx)(e.p,{children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u65B9\u6CD5\u306B\u3088\u3063\u3066\u306F\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306E\u30B5\u30A4\u30BA\u304C\u3059\u3050\u306B\u5927\u304D\u304F\u306A\u3063\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308A\u307E\u3059 (\u305F\u3068\u3048\u3070\u3001\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u304C\u4E00\u7DD2\u306B\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3055\u308C\u308B\u5834\u5408)\u3002 \u3053\u306E\u30B5\u30A4\u30BA\u3092\u7BA1\u7406\u3059\u308B\u306B\u306F\u30012\u3064\u306E\u65B9\u6CD5\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u81EA\u52D5\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7"}),': 4D \u306F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u30AB\u30EC\u30F3\u30C8\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002 10MB \u3088\u308A\u3082\u5927\u304D\u3044\u5834\u5408\u3001\u30AB\u30EC\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u306F\u30A2\u30FC\u30AB\u30A4\u30D6\u3055\u308C\u3001[xxx] \u306E\u756A\u53F7\u304C\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u305F\u65B0\u3057\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059 (\u4F8B: "Backup Journal[002].txt\u201D)\u3002 \u30D5\u30A1\u30A4\u30EB\u756A\u53F7\u304C 999 \u3092\u8D85\u3048\u308B\u3068\u3001\u30CA\u30F3\u30D0\u30EA\u30F3\u30B0\u306F 1 \u306B\u623B\u308A\u3001\u65E2\u5B58\u30D5\u30A1\u30A4\u30EB\u304C\u7F6E\u63DB\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u8A18\u9332\u3059\u308B\u60C5\u5831\u91CF\u3092\u524A\u6E1B\u3059\u308B"}),": \u3053\u306E\u305F\u3081\u306B\u306F\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E ",(0,r.jsx)(e.em,{children:"backup.4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u306E ",(0,r.jsx)(e.code,{children:"VerboseMode"})," \u30AD\u30FC\u306E\u5024\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001true \u306E\u5024\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u306E\u5024\u3092 false \u306B\u5909\u66F4\u3059\u308B\u3068\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306B\u306F\u4E3B\u8981\u306A\u60C5\u5831\u306E\u307F\u304C\u8A18\u9332\u3055\u308C\u307E\u3059 (\u30B9\u30BF\u30FC\u30C8\u6642\u306E\u65E5\u4ED8\u3068\u6642\u523B\u3001\u305D\u3057\u3066\u30A8\u30E9\u30FC\u306E\u6709\u7121)\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u306B\u4F7F\u308F\u308C\u308B XML\u30AD\u30FC\u306B\u3064\u3044\u3066\u306E\u8AAC\u660E\u306F ",(0,r.jsx)(e.a,{href:"https://doc.4d.com/4Dv18/4D/18/4D-XML-Keys-Backup.100-4673706.ja.html",children:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB"})," \u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"backuphistoryjson",children:"backupHistory.json"}),"\n",(0,r.jsxs)(e.p,{children:["\u6700\u65B0\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3068\u5FA9\u5143\u51E6\u7406\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u306F\u3059\u3079\u3066\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(e.strong,{children:"backupHistory.json"}),' \u30D5\u30A1\u30A4\u30EB\u306B\u8A18\u9332\u3055\u308C\u307E\u3059\u3002 \u8A18\u9332\u3055\u308C\u308B\u306E\u306F\u3001\u4FDD\u5B58\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB (\u6DFB\u4ED8\u542B\u3080) \u306E\u30D1\u30B9\u306E\u307B\u304B\u3001\u56DE\u6570\u3001\u65E5\u4ED8\u3001\u6642\u523B\u3001\u6240\u8981\u6642\u9593\u3001\u5404\u51E6\u7406\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u3059\u3002 \u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u3092\u5236\u9650\u3059\u308B\u305F\u3081\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\uFF06\u5FA9\u65E7\u30DA\u30FC\u30B8\u306E\u4E00\u822C\u8A2D\u5B9A\u306B\u3042\u308B "\u6700\u65B0\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u307F\u4FDD\u5B58 X \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB" \u306B\u6307\u5B9A\u3057\u305F\u6570\u3068\u540C\u3058\u5206\u3060\u3051\u3001\u51E6\u7406\u306E\u30ED\u30B0\u3092\u4FDD\u6301\u3057\u307E\u3059\u3002']}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"backupHistory.json"})," \u30D5\u30A1\u30A4\u30EB\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u4FDD\u5B58\u5148\u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u5B9F\u969B\u306E\u30D1\u30B9\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"$backupHistory:=Get 4D file(Backup history file)\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8B66\u544A"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.strong,{children:"backupHistory.json"})," \u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u307E\u305F\u306F\u79FB\u52D5\u3057\u305F\u5834\u5408\u3001\u6B21\u306E\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u756A\u53F7\u306F\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n",(0,r.jsx)(e.strong,{children:"backupHistory.json"})," \u30D5\u30A1\u30A4\u30EB\u306F 4D\u7528\u306B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u51E6\u7406\u306E\u30EC\u30DD\u30FC\u30C8\u3092\u76F4\u63A5\u8AAD\u3093\u3067\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30B8\u30E3\u30FC\u30CA\u30EB\u306E\u65B9\u304C\u9069\u5207\u3067\u3059\u3002"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},794536:function(n,e,c){c.d(e,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAADACAIAAACcdW5yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAA4wSURBVHhe7d0/biTHvQfwvYbP4JAAgxUghe8AzqhkYEBr2BIWDp1tyFRHUE44Va4LbPoCR+8G7wbvVXXXv+6uGc4MZ4a15OeDFbb61/Wnu8mu7460Nj/8DLxRf/3bL6tff//HL3d3d+k0DCyG0/8BwDCEEwDDEU4ADEc4ATAc4QTAcIQTAMMRTgAMRzgBMBzhBMBwhBMAw3k2nH7/9KH69HuqHiEM/Pjrf9IBABzvmHDKGfOfXz+eEE/CCYAznRJOp+WNcALgTKeEU2jmD06hmdSPUvGDVVMrA6e+sdRMtTj78dff01BpBkBwTDgV23+nVzImJtMyWuZT7b8KLJ3b9jT/vjkAeJdO+eTUhseUKZOp0mZQEgd+XKRNM1Vtt8V4sA1AAN6bU8KpRFCNotCazvbDaUqnWm6nKu3e/AC8b2d9ciq1UmlaWeq0Gp+yJ1RTubZkEwCzY8KpKOkTY2QqfPo0f3KKas8pYUoqTZ1rEs09PuWzsVuYJZVFEwBHhNO1lQwDgEQ4ATAc4QTAcF49nABgTTgBMBzhBMBwhBMAwxFOAAxHOAEwHOEEwHCEEwDDSeH0vwAwDOEEwHCEEwDDEU4ADEc4ATAc4QTAcIQTAMMRTgAMRzgBMBzhBMBwhBMAwxFOAAxHOAEwHOEEwHCEEwDDEU4ADEc4ATAc4QTAcIQTAMMRTgAMRzgBMJyLh9PT7kO1e0rVI4SB949f08ElnDXh18f7sy/jJWMBaFwjnPIGHTfr4+PpFcPpJUtf/LIBuGo4nbZxX3yXP37Clyx98csG4KrhFJr5g1NoJvWjVPxg1dTKwKlvLDVTLc7ePz6loZ1YyLPePz7W4aulFsfTcrPFolMjzDFpryNJnbPVBdcV0pL9CZsRABTXCKcib8tV2Yzj5r3cludTsb7YzVOX0p7m3zfHdHYePqVDGZK7Pe1iKxQWl9Z0qO04VeoWm6t7abv1x6YB9SJjcT1hOxqA7JqfnNrwmHbmyVRpMyiJA+8XadPu3KXdFuPBYpYw7eLkdDDFVBUGTJXa8fmFmnZoJvu7Le8uVDdB1LYBWLtmOJVNum7WodXZvidh4JROi119u5v35i/y9JPcs7NWFMudzy/dhbZTlZUOd4tCdf8qAHTc5JNTqZVK08pSp9X4tMeHairX1ioDJvFsSY/OkKXQZ6o3a9Z2r1hq9fL3jc1XVi+y17OtAZBdI5yKsu9OSRELu139aFN7Tpt32adXsTL32DX7fpwllZfRFOUhe/5CxDRmtXIZFI/i/GWhNLy2OzfSG9uuuJ2kabc1ALKLh9O12c4B3j7hBMBwhBMAw/nmwgmAt084ATAc4QTAcIQTAMMRTgAMRzgBMBzhBMBwhBMAwxFOAAxHOAEwHOEEwHCEEwDDEU4ADEc4ATAc4QTAcIQTN/a0iz+Q6+vj/fwz8p/Kz8wPXvCjuq70g75WV5vFH8N/weWu91PKTn3ae+4Xbk44cWPb7bJsktPWuXdXPLyDX2l/v81mfaWLD0592sKJUQgnbuzAdjl/Itm3LR7ewa+0v7/hcOo+beHEKIQTr2u1L9f9MpxI4nE9mk8vz86F+8enMDoqM266xfkPFjYd+qbl4iJT4zEt097Jeu8vI+oK5exytnrtTTHfWhhSJqjLHXnVi/mDfIWrMgxAOPG69myX1XKPXu+g7dm8W8c5Vj1zt/D7YvZmzvkzw7rDPmVgaOREiM3NtedCbjad6nWG4qqxKuZba5pTuyycR813sVfTMxJOjEs48bq222XdZ8NGPJkry54Hz4aDFACrbnE3bvpNh1UYs+qwV1muXXdxDZNyITk0chzM8unDs3WLTXt7F3u1w4Mwsj2EgQgnXtdyuyx7d93Eywba9Dx8tpzudEsHaQ+vHRZqh73Kcu26y3uZzAvX5ZcrhgHTweHZusWmvecuetrhJw2EWxNOvK7Vbps3y1KOG+jcanr2z+bTZc/tdEtCYTpuRi3lDvuUqUtj1c7iRLtd/fsFccV0UK6zDqylqePhJUq7dn3OavjmacMwhBOvK26RWbtBxm16qoWdPdVT17ihbs/G/TUcTNW852671dXWXaJQ23boi8uVdfNlt+1iWqCdrK7YG1guYLd7bommvbqLvcrsQZlnOSuMQTgBMBzhBMBwhBMAwxFOAAxHOAEwHOEEwHCEEwDDEU4ADEc4ATAc4QTAcIQTAMMRTgAMRzgBMBzhBMBwhBMAw4nh9Ne//ZKOAGAAwgmA4QgnAIYjnAAYjnACYDjCCYDhxHD6+z+EEwADieF0d3eXjgBgADGcwj/pCKKn3Yf7x6/p4AXCPNXuKVWPcJELCJMcXHO+uovc6GFfH+9vsQy8KcKJrTOyoTukKcYN+vh4OuMCtsIkB1YMZ0/Ky1Nd5Bbg/RJObJ2xsXaHtMWT5rzIzh4mORxOL1/igGvPD2+ccGKrs7GGUpI2/PhRKBfqyWUcNPOEZj61mSpoZwuHZeDUN5aaqRZn7x+f0tD1Fcez8wJTt8e06tQtVJI0qq7fXub9bhfKobBYKByX7u01Jelqs3SYO+5ZaHl5gHCio9lM1/Kp8HveXCfdIaFYLHpPypC4YS8Hz6difbGDpy6lPc2/b454dh49davN0monzAvVeWIx95hmqOVcb8ZloVT65dGLYn+hzeXBeyec2Go31mzaQifTqbi3tp16Q9piGx6dqTpb/P0ibdr5S7stxoPlLKXw3NjlBeRh3VH726GZzJVet9MWgncthtP333+fjiDabJF1Vw2teiqW0x/1u7tqW8xTbKeqlSIMnNKpltupSrs3fxXOzoXnxi6H5mHdUXva25t6plsUqgcXgncthtNPP/2UjiDabJGlELfXxam8GXd31aZYBnam2kyaO63Gp309VFO5ttrzWTg7V5ppantVzIPrPN1Re9qlVm+lOyQ0jl8I3rUYTp8/f05HEMU9tJg2y7iVTge7XQmjJG22qZCOZu08Zc/dTBWtpguH86mp89wsXXa7Zq+f/87CVG5XjsLZA7t/W6wX1Vxnd9S+duemwrkoXkIz5ISF4F0TTny7bOXwZgknvl3CCd4s4cS3SzjBmyWcABhODKfvvvsuHQHAAIQTAMMRTgAMRzgBMBzhBMBwhBMAw4nh9MMPP6QjABhADCf/OycAhiKcABiOcAJgOMIJgOHEcPLDBgEYSgwnP6YdgKHEcAr/pCMAGIBwAmA4wgmA4QgnAIYjnAAYjnACYDjCCYDhCCcAhiOcABiOcAJgOMIJgOEIJwCGE8PpT3/6mI4AYACX/+T0b15b+krANaXvtncg3fALfPjXf7+TX+mGL+Eq4fQ/vJ6LvEvwrHfypgunk36lG76Ey/9rPeH0uoQTtyGcjjdv3GnGN+oq4fRff/5zOroE4fS6hBO3IZyOJ5zOMH1y+viXdHQJwul1CSduQzgdTzid4Zb/zem3hw/V3Zc/UvlkYZ4XjB7EH1/urnMXwonbuFA4xTchufwLcYG94rXDabFtPvyWqke49T75rYdTeVjTE9/7pA8/1ls/9Mu5xZULJ27jAuE0BVPdBv748uWEzfcYF3jjBginfAvxcR0fT7feJ99MOB1+0Icf660f+uXc4sqFE7fx4nA6ba89ywXeuIHC6bTbufU++YbCqfnWDCeSeFyP5tPLs3Ph7stv8c9cQft1S1K36U9lBwtZd8JYfHjIf7CrY8vg/mVsVinzNOKZafg8aD1k74UeQzhxGy8Np/ht3v8GD+9Gks5PL8uXVG02kc2b0nv7avezDBROoZkf2OYRBaubLwOnvrHUTLU429vHTvc2wylbPq/1U2rP5qcY51j1zN3C74vZmzl/e1iO6U4Yi3XA4ru/duiNqoOm1mqe3KztzZBQWD6XkwgnbuMC4VTehr72HWniJrW2L//mVWor5xognIrtvlBucN/TiPU8rH0apT3Nv2+OU7yxcMqH0/OZlOfV9Dx4NhykR7/qFh900286rBZf5e6ETbH9+nY7lGJnlbZbr70dsrryEwknbuMC4dS8Vgvh5Ujm92Dfi7Mc/szbd6YBwinfQrzB3F49os7DjAPvFmnTPo3SbovxYM+X5HlvKJzK06yPNbQ2z+vw2XK60y0dhK/essNWb8L+NUThxLpD6dFZpe3Wa++5sFheZehxhBO38dJwOvStP5dDa35fjntxOvO1A880UDiVO9w+ov69T+lUy73H2J3/LG8mnOKDS0+hlOOT2Tyv/tl8ujzMTrckFKbjZtRab8I649zOV7vo0B21WmU1z7a9HZI0V156rhodwonbeHE4zd/7+c0K5r+tV76742u1/YbvnM7idJvKsnC6gcKp3HHnGXSfRiysxqenHaqpXFvt+TN86+FUtI8xPpKp9vCQP/SkrvFBbc/Gp13+ikF+lptudbV1l2jxJehOGIv1IuvYUuyO2q6ymCdd1Kq+GpI6BfOspee20SGcuI0LhFPQfvOnb+pcWr7y+Rt+1U7SC3jw7TvPAOFUlHvZPqJg9TTKvU+d52bp8vCQz8ZunX3sdN90OA2rfBVPct6oqxNO3MY3+Kaf47XD6douto8Jp2sQTnAy4XQ84XQG4RQIJziZcDqecDqDcHprhBO3IZyON3A4XYxw4hnCidsQTsebN+738Cvd8CVcJZx4XekrAdeUvtvegXTDL7Dawd/wr3TDl3D5cAKAFxJOAAxHOAEwHOEEwHCEEwDDEU4ADCeG0/39fToCgAHEcPr8+XM6AoABCCcAhiOcABiOcAJgOMIJgOEIJwCGI5wAGI5wAmA4wgmA4QgnAIYjnAAYjnACYDgxnPwfvwIwlBhO4Z90BAADSOE0Cx+hPmehnarX9OOPP/4Tri99wx0tfGemFvAqfv75/wE4sspXrRYB/gAAAABJRU5ErkJggg=="},53551:function(n,e,c){c.d(e,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(n,e,c){c.d(e,{Z:function(){return l},a:function(){return d}});var s=c(667294);let r={},i=s.createContext(r);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);