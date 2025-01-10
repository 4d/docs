"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69693"],{783551:function(e,n,r){r.r(n),r.d(n,{default:()=>T,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"ServerWindow/http-server","title":"HTTP\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","description":"HTTP\u30B5\u30FC\u30D0\u30FC \u30DA\u30FC\u30B8\u306B\u306F\u30014D Server \u306E Web\u30B5\u30FC\u30D0\u30FC\u3084 SOAP\u30B5\u30FC\u30D0\u30FC\u306B\u95A2\u3059\u308B\u60C5\u5831\u304C\u96C6\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002 Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001HTML\u30DA\u30FC\u30B8\u3084\u30D4\u30AF\u30C1\u30E3\u30FC\u306A\u3069\u306E Web\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u516C\u958B\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002 SOAP\u30B5\u30FC\u30D0\u30FC\u306F Web\u30B5\u30FC\u30D3\u30B9\u306E\u516C\u958B\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002 \u3053\u308C\u3089 2\u3064\u306E\u30B5\u30FC\u30D0\u30FC\u306F\u30014D Server \u306E\u5185\u90E8\u7684\u306A HTTP\u30B5\u30FC\u30D0\u30FC\u306B\u4F9D\u5B58\u3057\u3066\u3044\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/ServerWindow/http-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/http-server","permalink":"/docs/ja/20/ServerWindow/http-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"http-server","title":"HTTP\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},"sidebar":"docs","previous":{"title":"SQL\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/20/ServerWindow/sql-server"},"next":{"title":"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30E2\u30CB\u30BF\u30FC\u30DA\u30FC\u30B8","permalink":"/docs/ja/20/ServerWindow/real-time-monitor"}}'),i=r("785893"),t=r("250065");let l={id:"http-server",title:"HTTP\u30B5\u30FC\u30D0\u30FC\u30DA\u30FC\u30B8"},d=void 0,c={},o=[{value:"HTTP\u30B5\u30FC\u30D0\u30FC\u958B\u59CB/\u505C\u6B62",id:"http\u30B5\u30FC\u30D0\u30FC\u958B\u59CB\u505C\u6B62",level:2},{value:"Web\u60C5\u5831",id:"web\u60C5\u5831",level:2},{value:"SOAP\u60C5\u5831",id:"soap\u60C5\u5831",level:2},{value:"HTTP\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A",id:"http\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HTTP\u30B5\u30FC\u30D0\u30FC"})," \u30DA\u30FC\u30B8\u306B\u306F\u30014D Server \u306E Web\u30B5\u30FC\u30D0\u30FC\u3084 SOAP\u30B5\u30FC\u30D0\u30FC\u306B\u95A2\u3059\u308B\u60C5\u5831\u304C\u96C6\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002 Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001HTML\u30DA\u30FC\u30B8\u3084\u30D4\u30AF\u30C1\u30E3\u30FC\u306A\u3069\u306E Web\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u516C\u958B\u3092\u53EF\u80FD\u306B\u3057\u307E\u3059\u3002 SOAP\u30B5\u30FC\u30D0\u30FC\u306F Web\u30B5\u30FC\u30D3\u30B9\u306E\u516C\u958B\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002 \u3053\u308C\u3089 2\u3064\u306E\u30B5\u30FC\u30D0\u30FC\u306F\u30014D Server \u306E\u5185\u90E8\u7684\u306A HTTP\u30B5\u30FC\u30D0\u30FC\u306B\u4F9D\u5B58\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(554671).Z+"",width:"1036",height:"701"})}),"\n",(0,i.jsx)(n.p,{children:"\u30DA\u30FC\u30B8\u306E\u4E0A\u90E8\u306B\u306F\u30014D Server \u306E HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u73FE\u5728\u306E\u72B6\u6CC1\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u72B6\u6CC1"}),": \u958B\u59CB\u307E\u305F\u306F\u505C\u6B62"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u958B\u59CB\u6642\u523B"}),": HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5\u65E5\u3068\u6642\u523B\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u52D5\u4F5C\u6642\u9593"}),": HTTP\u30B5\u30FC\u30D0\u30FC\u304C\u6700\u5F8C\u306B\u958B\u59CB\u3055\u308C\u3066\u304B\u3089\u306E\u7D4C\u904E\u6642\u9593\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7DCFHTTP\u30D2\u30C3\u30C8\u6570"}),": HTTP\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u304B\u3089\u3001\u30B5\u30FC\u30D0\u30FC\u304C\u53D7\u4FE1\u3057\u305F\u30ED\u30FC\u30EC\u30D9\u30EB\u306E HTTP\u30D2\u30C3\u30C8\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"http\u30B5\u30FC\u30D0\u30FC\u958B\u59CB\u505C\u6B62",children:"HTTP\u30B5\u30FC\u30D0\u30FC\u958B\u59CB/\u505C\u6B62"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30DC\u30BF\u30F3\u306F\u5207\u308A\u66FF\u3048\u8868\u793A\u3055\u308C\u30014D Server HTTP\u30B5\u30FC\u30D0\u30FC\u3092\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u304C "\u958B\u59CB" \u306E\u5834\u5408\u3001\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30C8\u30EB\u306F ',(0,i.jsx)(n.strong,{children:"HTTP\u30B5\u30FC\u30D0\u30FC\u505C\u6B62"})," \u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D Server HTTP\u30B5\u30FC\u30D0\u30FC\u306F\u5373\u5EA7\u306B\u505C\u6B62\u3057\u3001Web\u30B5\u30FC\u30D0\u30FC\u3001REST\u30B5\u30FC\u30D0\u30FC\u3001\u304A\u3088\u3073 SOAP\u30B5\u30FC\u30D0\u30FC\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u4ED8\u3051\u306A\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:['HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u72B6\u614B\u304C "\u505C\u6B62" \u306E\u5834\u5408\u3001\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30C8\u30EB\u306F ',(0,i.jsx)(n.strong,{children:"HTTP\u30B5\u30FC\u30D0\u30FC\u958B\u59CB"})," \u306B\u306A\u308A\u307E\u3059\u3002 \u3053\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D Server HTTP\u30B5\u30FC\u30D0\u30FC\u306F\u5373\u5EA7\u306B\u958B\u59CB\u3057\u3001Web\u3001REST\u3001\u304A\u3088\u3073 SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"HTTP\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3059\u308B\u306B\u306F\u9069\u5207\u306A\u30E9\u30A4\u30BB\u30F3\u30B9\u304C\u5FC5\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u8A2D\u5B9A\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u8D77\u52D5\u3068\u540C\u6642\u306B\u3001\u307E\u305F\u306F\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u4F7F\u7528\u3057\u3066\u5FC5\u8981\u306A\u6642\u306B\u3001HTTP\u30B5\u30FC\u30D0\u30FC\u3092\u81EA\u52D5\u3067\u958B\u59CB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"web\u60C5\u5831",children:"Web\u60C5\u5831"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u30014D Server \u306E Web\u30B5\u30FC\u30D0\u30FC\u306B\u95A2\u3059\u308B\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web \u30EA\u30AF\u30A8\u30B9\u30C8"}),": \u53D7\u3051\u5165\u308C\u3001\u307E\u305F\u306F\u62D2\u5426\u3002 \u3053\u306E\u60C5\u5831\u306F Web\u30B5\u30FC\u30D0\u30FC\u304C\u6709\u52B9\u304B\u3069\u3046\u304B\u3092\u793A\u3057\u307E\u3059\u3002 Web\u30B5\u30FC\u30D0\u30FC\u306F\u76F4\u63A5 HTTP\u30B5\u30FC\u30D0\u30FC\u306B\u30EA\u30F3\u30AF\u3057\u3066\u3044\u308B\u305F\u3081\u3001HTTP\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u308C\u3070 Web\u30EA\u30AF\u30A8\u30B9\u30C8\u306F\u53D7\u4FE1\u3055\u308C\u3001\u505C\u6B62\u3055\u308C\u3066\u3044\u308C\u3070\u62D2\u5426\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6700\u5927\u63A5\u7D9A\u6570"}),": \u8A31\u53EF\u3055\u308C\u308B Web\u63A5\u7D9A\u306E\u6700\u5927\u6570\u3002 \u3053\u306E\u5024\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u3088\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"soap\u60C5\u5831",children:"SOAP\u60C5\u5831"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u30014D Server \u306E SOAP\u30B5\u30FC\u30D0\u30FC\u306B\u95A2\u3059\u308B\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u3001\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30DC\u30BF\u30F3\u3082\u4E00\u3064\u542B\u307E\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SOAP \u30EA\u30AF\u30A8\u30B9\u30C8"}),": \u53D7\u3051\u5165\u308C\u3001\u307E\u305F\u306F\u62D2\u5426\u3002 \u3053\u306E\u60C5\u5831\u306F SOAP\u30B5\u30FC\u30D0\u30FC\u304C\u6709\u52B9\u304B\u3069\u3046\u304B\u3092\u793A\u3057\u307E\u3059\u3002 SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u5165\u308C\u308B\u305F\u3081\u306B\u306F\u3001HTTP\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3001\u304B\u3064 SOAP\u30B5\u30FC\u30D0\u30FC\u304C\u660E\u793A\u7684\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u5165\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093 (\u30DC\u30BF\u30F3\u306E\u8AAC\u660E\u53C2\u7167)\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6700\u5927\u63A5\u7D9A\u6570"}),": \u8A31\u53EF\u3055\u308C\u308B SOAP\u63A5\u7D9A\u306E\u6700\u5927\u6570\u3002 \u3053\u306E\u5024\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u30E9\u30A4\u30BB\u30F3\u30B9\u306B\u3088\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u5165\u308C\u308B/\u53D7\u3051\u5165\u308C\u306A\u3044"}),' \u30DC\u30BF\u30F3: \u3053\u306E\u30DC\u30BF\u30F3\u306F\u5207\u308A\u66FF\u3048\u8868\u793A\u3055\u308C\u30014D Server SOAP\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3053\u306E\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u306E "Web\u30B5\u30FC\u30D3\u30B9" \u30DA\u30FC\u30B8\u306E ',(0,i.jsx)(n.strong,{children:"Web\u30B5\u30FC\u30D3\u30B9\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8A31\u53EF\u3059\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u5909\u66F4\u3055\u308C\u307E\u3059\u3002 \u307E\u305F\u3001",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page1636.html",children:(0,i.jsx)(n.code,{children:"SOAP REJECT NEW REQUESTS"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u65B0\u898F\u306E SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u62D2\u5426\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u304C\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F ",(0,i.jsx)(n.strong,{children:"Web\u30B5\u30FC\u30D3\u30B9\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8A31\u53EF\u3059\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5024\u3092\u5909\u66F4\u3057\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["HTTP\u30B5\u30FC\u30D0\u30FC\u505C\u6B62\u4E2D\u306B ",(0,i.jsx)(n.strong,{children:"SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u53D7\u3051\u5165\u308C\u308B"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30014D \u306F\u81EA\u52D5\u3067 HTTP\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"http\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A",children:"HTTP\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306E\u30A8\u30EA\u30A2\u306B\u306F\u3001HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u8A2D\u5B9A\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3084\u52D5\u4F5C\u306B\u95A2\u3059\u308B\u60C5\u5831\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u958B\u59CB\u6642\u306B\u81EA\u52D5\u8D77\u52D5"}),": \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"HTTP \u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30BB\u30B9 (\u4F7F\u7528/\u7DCF\u8A08)"}),": \u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u4F5C\u6210\u3055\u308C\u305FHTTP\u30D7\u30ED\u30BB\u30B9\u6570 (\u73FE\u5728\u306E\u30D7\u30ED\u30BB\u30B9\u6570 / \u4F5C\u6210\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u7DCF\u6570)\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA"}),": HTTP\u30B5\u30FC\u30D0\u30FC\u30AD\u30E3\u30C3\u30B7\u30E5\u30E1\u30E2\u30EA\u306E\u30B5\u30A4\u30BA ( \u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u5B9F\u969B\u306B\u4F7F\u7528\u3057\u3066\u3044\u308B\u30B5\u30A4\u30BA / \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u3067\u7406\u8AD6\u7684\u306B\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u6700\u5927\u30B5\u30A4\u30BA)\u3002 ",(0,i.jsx)(n.strong,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u30AF\u30EA\u30A2"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3092\u7A7A\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5F85\u53D7IP"}),"\u3001",(0,i.jsx)(n.strong,{children:"HTTP\u30DD\u30FC\u30C8"})," (\u30C7\u30D5\u30A9\u30EB\u30C8\u306F 80)\u3001HTTP\u63A5\u7D9A\u7528\u306E ",(0,i.jsx)(n.strong,{children:"TSL\u6709\u52B9"})," (4D \u3068 SQL\u63A5\u7D9A\u306F\u5225\u8A2D\u5B9A)\u3001\u304A\u3088\u3073 ",(0,i.jsx)(n.strong,{children:"HTTPS\u30DD\u30FC\u30C8"}),": \u3053\u308C\u3089\u306F\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u8A2D\u5B9A\u307E\u305F\u306F\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306B\u3088\u308A\u8A2D\u5B9A\u3055\u308C\u305F\u3001HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u73FE\u5728\u306E ",(0,i.jsx)(n.a,{href:"/docs/ja/20/WebServer/webServerConfig",children:"\u8A2D\u5B9A\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC"})," \u3092\u8868\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u60C5\u5831"}),": \u540D\u79F0\u3001\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3001\u304A\u3088\u3073 HTTP\u30B5\u30FC\u30D0\u30FC\u306E\u6B21\u56DE\u306E\u81EA\u52D5\u30ED\u30B0\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u65E5\u4ED8 (logweb.txt \u30D5\u30A1\u30A4\u30EB)\u3002"]}),"\n"]})]})}function T(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},554671:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);