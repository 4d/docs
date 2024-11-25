"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45939"],{122908:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"ServerWindow/application-server","title":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","description":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8\u306B\u306F\u30014D Server \u304C\u516C\u958B\u3057\u3066\u3044\u308B\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u304C\u307E\u3068\u3081\u3089\u308C\u3066\u3044\u3066\u3001\u516C\u958B\u3092\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/ServerWindow/application-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/application-server","permalink":"/docs/ja/20-R6/ServerWindow/application-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fapplication-server.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"application-server","title":"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30DA\u30FC\u30B8","permalink":"/docs/ja/20-R6/ServerWindow/maintenance"},"next":{"title":"SQL\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/20-R6/ServerWindow/sql-server"}}'),s=r("785893"),l=r("250065");let t={id:"application-server",title:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},c=void 0,d={},o=[{value:"\u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF/\u62D2\u5426",id:"\u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF\u62D2\u5426",level:2},{value:"\u60C5\u5831",id:"\u60C5\u5831",level:2},{value:"\u8A2D\u5B9A",id:"\u8A2D\u5B9A",level:3},{value:"\u30E1\u30E2\u30EA",id:"\u30E1\u30E2\u30EA",level:3},{value:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u6570",id:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u6570",level:3}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8\u306B\u306F\u30014D Server \u304C\u516C\u958B\u3057\u3066\u3044\u308B\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u304C\u307E\u3068\u3081\u3089\u308C\u3066\u3044\u3066\u3001\u516C\u958B\u3092\u7BA1\u7406\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(319167).Z+"",width:"1036",height:"699"})}),"\n",(0,s.jsx)(n.p,{children:"\u30DA\u30FC\u30B8\u306E\u4E0A\u90E8\u306B\u306F\u30014D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u73FE\u5728\u306E\u72B6\u6CC1\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u72B6\u6CC1"}),": \u958B\u59CB\u307E\u305F\u306F\u505C\u6B62"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u958B\u59CB\u6642\u523B"}),": \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5\u65E5\u3068\u6642\u523B\u3002 \u3053\u308C\u306F\u30014D Server \u306B\u3088\u3063\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u958B\u304B\u308C\u305F\u65E5\u4ED8\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u52D5\u4F5C\u6642\u9593"}),": \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u30B5\u30FC\u30D0\u30FC\u306B\u3088\u3063\u3066\u6700\u5F8C\u306B\u958B\u304B\u308C\u3066\u304B\u3089\u306E\u7D4C\u904E\u6642\u9593\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF\u62D2\u5426",children:"\u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF/\u62D2\u5426"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30DC\u30BF\u30F3\u306F\u5207\u308A\u66FF\u3048\u8868\u793A\u3055\u308C\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u65B0\u3057\u3044\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u63A5\u7D9A\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u516C\u958B\u3055\u308C\u305F\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'\u30DC\u30BF\u30F3\u306E\u30E9\u30D9\u30EB\u306F "\u65B0\u898F\u63A5\u7D9A\u3092\u62D2\u5426" \u3067\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:"\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u8A31\u53EF\u3059\u308B\u9650\u308A\u3001\u65B0\u898F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u81EA\u7531\u306B\u63A5\u7D9A\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:'\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u306F\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u516C\u958B\u3055\u308C\u307E\u3059 ("\u8D77\u52D5\u6642\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u516C\u958B\u3059\u308B" \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408)\u3002'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u65B0\u898F\u63A5\u7D9A\u3092\u62D2\u5426"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'\u30DC\u30BF\u30F3\u306E\u30E9\u30D9\u30EB\u306F "\u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF" \u306B\u5909\u308F\u308A\u307E\u3059\u3002'}),"\n",(0,s.jsx)(n.li,{children:"\u65B0\u898F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u63A5\u7D9A\u4E0D\u53EF\u306B\u306A\u308A\u307E\u3059\u3002 \u63A5\u7D9A\u3057\u3088\u3046\u3068\u3057\u305F\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u306F\u4EE5\u4E0B\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(299068).Z+"",width:"671",height:"255"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u63A5\u7D9A\u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\u304C\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u3059\u3067\u306B\u63A5\u7D9A\u6E08\u307F\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u63A5\u7D9A\u89E3\u9664\u3055\u308C\u305A\u3001\u901A\u5E38\u901A\u308A\u306B\u64CD\u4F5C\u304C\u53EF\u80FD\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page1635.html",children:(0,s.jsx)(n.code,{children:"REJECT NEW REMOTE CONNECTIONS"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3082\u3001\u540C\u3058\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u65B0\u898F\u63A5\u7D9A\u3092\u8A31\u53EF"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u6A5F\u80FD\u306F\u305F\u3068\u3048\u3070\u3001\u30B5\u30FC\u30D0\u30FC\u958B\u59CB\u76F4\u5F8C\u306B\u7BA1\u7406\u8005\u304C\u69D8\u3005\u306A\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u64CD\u4F5C (\u691C\u8A3C\u3084\u5727\u7E2E\u306A\u3069)  \u3092\u304A\u3053\u306A\u3046\u3053\u3068\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002 \u7BA1\u7406\u8005\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u6A5F\u80FD\u306B\u3088\u308A\u4E00\u3064\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3060\u3051\u304C\u30C7\u30FC\u30BF\u3092\u66F4\u65B0\u3067\u304D\u308B\u3053\u3068\u3092\u78BA\u5B9F\u306B\u3067\u304D\u307E\u3059\u3002 \u307E\u305F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304C\u63A5\u7D9A\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3067\u304A\u3053\u306A\u308F\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u64CD\u4F5C\u306E\u6E96\u5099\u306E\u305F\u3081\u306B\u3001\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u60C5\u5831",children:"\u60C5\u5831"}),"\n",(0,s.jsx)(n.h3,{id:"\u8A2D\u5B9A",children:"\u8A2D\u5B9A"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u304C\u516C\u958B\u3059\u308B 4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u3064\u3044\u3066\u306E\u60C5\u5831 (\u30C7\u30FC\u30BF\u3084\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0\u3068\u5834\u6240\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0) \u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3084\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u5B8C\u5168\u306A\u30D1\u30B9\u540D\u3092\u8868\u793A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u30E2\u30FC\u30C9"})," \u6B04\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u73FE\u5728\u306E\u5B9F\u884C\u30E2\u30FC\u30C9 \u3001\u30B3\u30F3\u30D1\u30A4\u30EB\u6E08\u307F\u304B\u30A4\u30F3\u30BF\u30FC\u30D7\u30EA\u30BF\u30FC\u304B\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30A8\u30EA\u30A2\u306E\u4E0B\u90E8\u306B\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC (\u30B5\u30FC\u30D3\u30B9\u3068\u3057\u3066\u8D77\u52D5\u3001\u30DD\u30FC\u30C8\u3001IP \u30A2\u30C9\u30EC\u30B9) \u3084\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8/\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u7528\u306E TSL \u306E\u72B6\u614B (SQL \u3084 HTTP\u63A5\u7D9A\u306F\u5225\u8A2D\u5B9A) \u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u30E1\u30E2\u30EA",children:"\u30E1\u30E2\u30EA"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u3001",(0,s.jsx)(n.strong,{children:"\u7DCF\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA"})," (\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC) \u3068 ",(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA"})," (\u5FC5\u8981\u306B\u5FDC\u3058\u3066 4D Server \u304C\u52D5\u7684\u306B\u5272\u308A\u5F53\u3066) \u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u6570",children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6700\u9AD8"}),": \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D0\u30FC\u306B\u8A31\u53EF\u3055\u308C\u305F\u6700\u5927\u306E\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u540C\u6642\u63A5\u7D9A\u6570\u3092\u8868\u3057\u307E\u3059\u3002 \u3053\u306E\u5024\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u3088\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4F7F\u7528\u4E2D"}),": \u73FE\u5728\u4F7F\u7528\u4E2D\u306E\u5B9F\u969B\u306E\u63A5\u7D9A\u6570\u3092\u8868\u3057\u307E\u3059\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},319167:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/server-admin-application-page-2790afb1ca369f9c919e14a195be066d.png"},299068:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/server-error-5a94dad40acb679497621d693b40b05b.png"},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var i=r(667294);let s={},l=i.createContext(s);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);