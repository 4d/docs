"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91144"],{876258:function(e,n,i){i.r(n),i.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"Admin/webAdmin","title":"WebAdmin","description":"WebAdmin \u3068\u306F\u30014D \u304A\u3088\u3073 4D Server \u306B\u4F7F\u7528\u3055\u308C\u308B\u7D44\u307F\u8FBC\u307F\u306E Web\u30B5\u30FC\u30D0\u30FC\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u540D\u79F0\u3067\u3001\u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC \u306A\u3069\u306E\u7BA1\u7406\u6A5F\u80FD\u3078\u306E\u5B89\u5168\u306A Web\u30A2\u30AF\u30BB\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u30D6\u30E9\u30A6\u30B6\u30FC\u3084\u3001\u4EFB\u610F\u306E Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u3001\u30ED\u30FC\u30AB\u30EB\u307E\u305F\u306F\u30EA\u30E2\u30FC\u30C8\u3067\u3053\u306E Web\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3057\u3001\u95A2\u9023\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20/Admin/webAdmin.md","sourceDirName":"Admin","slug":"/Admin/webAdmin","permalink":"/docs/ja/20/Admin/webAdmin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"webAdmin","title":"WebAdmin"},"sidebar":"docs","previous":{"title":"Web Administration","permalink":"/docs/ja/20/category/web-administration"},"next":{"title":"\u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC","permalink":"/docs/ja/20/Admin/dataExplorer"}}'),d=i("785893"),r=i("250065");let l={id:"webAdmin",title:"WebAdmin"},c=void 0,t={},h=[{value:"WebAdmin Web\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5",id:"webadmin-web\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5",level:2},{value:"\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7",id:"\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7",level:3},{value:"\u958B\u59CB\u3068\u505C\u6B62",id:"\u958B\u59CB\u3068\u505C\u6B62",level:3},{value:"WebAdmin \u8A2D\u5B9A",id:"webadmin-\u8A2D\u5B9A",level:2},{value:"\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9",id:"\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9",level:3},{value:"Web\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7",id:"web\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7",level:4},{value:"\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u3067HTTP\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B",id:"\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u3067http\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B",level:4},{value:"HTTP \u30DD\u30FC\u30C8",id:"http-\u30DD\u30FC\u30C8",level:4},{value:"HTTPS\u3092\u53D7\u3051\u5165\u308C\u308B",id:"https\u3092\u53D7\u3051\u5165\u308C\u308B",level:4},{value:"HTTPS \u30DD\u30FC\u30C8",id:"https-\u30DD\u30FC\u30C8",level:4},{value:"\u8A8D\u8A3C\u30D5\u30A9\u30EB\u30C0\u30D1\u30B9",id:"\u8A8D\u8A3C\u30D5\u30A9\u30EB\u30C0\u30D1\u30B9",level:4},{value:"\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u30E2\u30FC\u30C9",id:"\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u30E2\u30FC\u30C9",level:4},{value:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC",id:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC",level:4},{value:"WebAdmin \u306E\u30D8\u30C3\u30C9\u30EC\u30B9\u8A2D\u5B9A",id:"webadmin-\u306E\u30D8\u30C3\u30C9\u30EC\u30B9\u8A2D\u5B9A",level:2},{value:"\u8A8D\u8A3C\u3068\u30BB\u30C3\u30B7\u30E7\u30F3",id:"\u8A8D\u8A3C\u3068\u30BB\u30C3\u30B7\u30E7\u30F3",level:2}];function x(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebAdmin"})," \u3068\u306F\u30014D \u304A\u3088\u3073 4D Server \u306B\u4F7F\u7528\u3055\u308C\u308B\u7D44\u307F\u8FBC\u307F\u306E Web\u30B5\u30FC\u30D0\u30FC\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u540D\u79F0\u3067\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20/Admin/dataExplorer",children:"\u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC"})," \u306A\u3069\u306E\u7BA1\u7406\u6A5F\u80FD\u3078\u306E\u5B89\u5168\u306A Web\u30A2\u30AF\u30BB\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 \u30D6\u30E9\u30A6\u30B6\u30FC\u3084\u3001\u4EFB\u610F\u306E Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u3001\u30ED\u30FC\u30AB\u30EB\u307E\u305F\u306F\u30EA\u30E2\u30FC\u30C8\u3067\u3053\u306E Web\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3057\u3001\u95A2\u9023\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:'WebAdmin \u5185\u90E8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\u3001"WebAdmin" \u6A29\u9650\u3092\u6301\u3064\u30E6\u30FC\u30B6\u30FC\u306E\u8A8D\u8A3C\u3092\u51E6\u7406\u3057\u3001\u7BA1\u7406\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u958B\u3044\u3066\u5C02\u7528\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002'}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u6A5F\u80FD\u306F\u3001\u30D8\u30C3\u30C9\u30EC\u30B9\u3067\u52D5\u4F5C\u3059\u308B 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3082\u3001\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u6301\u3064 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"webadmin-web\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5",children:"WebAdmin Web\u30B5\u30FC\u30D0\u30FC\u306E\u8D77\u52D5"}),"\n",(0,d.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u306F\u958B\u59CB\u3057\u307E\u305B\u3093\u3002 \u8D77\u52D5\u6642\u306B\u958B\u59CB\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3059\u308B\u304B\u3001(\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u4ED8\u304D\u306E\u5834\u5408\u306F) \u30E1\u30CB\u30E5\u30FC\u304B\u3089\u624B\u52D5\u3067\u958B\u59CB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7",children:"\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u306F\u30014D \u307E\u305F\u306F 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5\u6642 (\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u524D) \u306B\u958B\u59CB\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u6301\u3064 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001",(0,d.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB \uFF1E Web\u7BA1\u7406 \uFF1E \u8A2D\u5B9A..."})," \u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:i(868330).Z+"",width:"470",height:"294"})}),"\n",(0,d.jsxs)(n.p,{children:["Web\u7BA1\u7406\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3067\u3001",(0,d.jsx)(n.strong,{children:"Web\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:i(730438).Z+"",width:"702",height:"205"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u30D8\u30C3\u30C9\u30EC\u30B9\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u304B\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u4EE5\u4E0B\u306E ",(0,d.jsx)(n.em,{children:"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"})," \u306E\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"open ~/Desktop/4D.app --webadmin-auto-start true\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u304C\u4F7F\u7528\u3059\u308B TCP\u30DD\u30FC\u30C8 (\u8A2D\u5B9A\u306B\u3088\u308A\u3001",(0,d.jsx)(n.a,{href:"#https-port",children:"HTTPS"})," \u307E\u305F\u306F ",(0,d.jsx)(n.a,{href:"#http-port",children:"HTTP"}),") \u304C\u958B\u59CB\u6642\u306B\u7A7A\u3044\u3066\u3044\u306A\u3044\u5834\u5408\u30014D \u306F\u6B21\u306E 20\u500B\u306E\u30DD\u30FC\u30C8\u3092\u9806\u306B\u8A66\u3057\u3001\u5229\u7528\u3067\u304D\u308B\u6700\u521D\u306E\u30DD\u30FC\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u5229\u7528\u53EF\u80FD\u306A\u30DD\u30FC\u30C8\u304C\u306A\u3044\u5834\u5408\u3001Web\u30B5\u30FC\u30D0\u30FC\u306F\u958B\u59CB\u305B\u305A\u3001\u30A8\u30E9\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u304B\u3001(\u30D8\u30C3\u30C9\u30EC\u30B9\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5834\u5408\u306F) \u30B3\u30F3\u30BD\u30FC\u30EB\u306E\u30ED\u30B0\u306B\u8A18\u9332\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u958B\u59CB\u3068\u505C\u6B62",children:"\u958B\u59CB\u3068\u505C\u6B62"}),"\n",(0,d.jsxs)(n.p,{children:["\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u6301\u3064 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E ",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u306F\u3044\u3064\u3067\u3082\u958B\u59CB\u307E\u305F\u306F\u505C\u6B62\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB \uFF1E Web\u7BA1\u7406 \uFF1E Web\u30B5\u30FC\u30D0\u30FC\u958B\u59CB"})," \u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:i(498800).Z+"",width:"473",height:"354"})}),"\n",(0,d.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306F ",(0,d.jsx)(n.strong,{children:"Web\u30B5\u30FC\u30D0\u30FC\u505C\u6B62"})," \u306B\u306A\u308A\u307E\u3059\u3002",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u3092\u505C\u6B62\u3059\u308B\u306B\u306F\u3001\u3053\u308C\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"webadmin-\u8A2D\u5B9A",children:"WebAdmin \u8A2D\u5B9A"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"#access-key",children:(0,d.jsx)(n.strong,{children:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"})})," \u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.code,{children:"WebAdmin"})," \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8A2D\u5B9A\u306F\u5FC5\u9808\u3067\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001URL\u7D4C\u7531\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u8A31\u53EF\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebAdmin"})," \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8A2D\u5B9A\u306F\u3001",(0,d.jsx)(n.a,{href:"#settings-dialog-box",children:"Web\u7BA1\u7406\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9"})," (\u5F8C\u8FF0\u53C2\u7167) \u3067\u304A\u3053\u306A\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u30D8\u30C3\u30C9\u30EC\u30B94D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u3001",(0,d.jsxs)(n.a,{href:"#webadmin-headless-configuration",children:[(0,d.jsx)(n.em,{children:"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"})," \u306E\u5F15\u6570"]})," \u3092\u4F7F\u7528\u3057\u3066\u57FA\u672C\u7684\u306A\u8A2D\u5B9A\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002 \u9AD8\u5EA6\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F\u3001\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9",children:"\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9"}),"\n",(0,d.jsxs)(n.p,{children:["Web\u7BA1\u7406\u306E\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u958B\u304F\u306B\u306F\u3001",(0,d.jsx)(n.strong,{children:"\u30D5\u30A1\u30A4\u30EB \uFF1E Web \u7BA1\u7406 \uFF1E \u8A2D\u5B9A..."})," \u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:i(868330).Z+"",width:"470",height:"294"})}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306E\u3088\u3046\u306A\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:i(110565).Z+"",width:"702",height:"462"})}),"\n",(0,d.jsx)(n.h4,{id:"web\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7",children:"Web\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u81EA\u52D5\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7"}),"\n",(0,d.jsxs)(n.p,{children:["4D \u307E\u305F\u306F 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u8D77\u52D5\u6642\u306B ",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u3092\u81EA\u52D5\u7684\u306B\u958B\u59CB\u3055\u305B\u308B\u306B\u306F\u3001\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059 (",(0,d.jsx)(n.a,{href:"#%E8%87%AA%E5%8B%95%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A2%E3%83%83%E3%83%97",children:"\u524D\u8FF0\u53C2\u7167"}),")\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u3067http\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B",children:"\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u3067HTTP\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3068\u540C\u3058\u30DE\u30B7\u30F3\u4E0A\u3067 HTTP \u3092\u4ECB\u3057\u3066 ",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6CE8:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u4EE5\u5916\u306B\u3088\u308B HTTP\u63A5\u7D9A\u306F\u53D7\u3051\u4ED8\u3051\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u3066\u3082\u3001",(0,d.jsx)(n.a,{href:"#https%E3%82%92%E5%8F%97%E3%81%91%E5%85%A5%E3%82%8C%E3%82%8B",children:"HTTPS\u3092\u53D7\u3051\u5165\u308C\u308B"})," \u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u3066\u3001TLS \u306E\u8A2D\u5B9A\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u306E\u63A5\u7D9A\u306F HTTPS \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"http-\u30DD\u30FC\u30C8",children:"HTTP \u30DD\u30FC\u30C8"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u30ED\u30FC\u30AB\u30EB\u30DB\u30B9\u30C8\u3067HTTP\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u306A\u5834\u5408\u3001",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u3078\u306E HTTP\u63A5\u7D9A\u306B\u4F7F\u7528\u3059\u308B\u30DD\u30FC\u30C8\u756A\u53F7\u3067\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F 7080 \u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"https\u3092\u53D7\u3051\u5165\u308C\u308B",children:"HTTPS\u3092\u53D7\u3051\u5165\u308C\u308B"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u306B HTTPS \u3092\u4ECB\u3057\u3066\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"https-\u30DD\u30FC\u30C8",children:"HTTPS \u30DD\u30FC\u30C8"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"HTTPS\u3092\u53D7\u3051\u5165\u308C\u308B"})," \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u6709\u52B9\u306A\u5834\u5408\u3001",(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u3078\u306E HTTPS\u63A5\u7D9A\u306B\u4F7F\u7528\u3059\u308B\u30DD\u30FC\u30C8\u756A\u53F7\u3067\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F 7443 \u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8A8D\u8A3C\u30D5\u30A9\u30EB\u30C0\u30D1\u30B9",children:"\u8A8D\u8A3C\u30D5\u30A9\u30EB\u30C0\u30D1\u30B9"}),"\n",(0,d.jsx)(n.p,{children:"TLS\u8A3C\u660E\u66F8\u30D5\u30A1\u30A4\u30EB\u304C\u7F6E\u304B\u308C\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u30D1\u30B9\u3067\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u8A8D\u8A3C\u30D5\u30A9\u30EB\u30C0\u30D1\u30B9\u306F\u7A7A\u3067\u30014D \u307E\u305F\u306F 4D Server \u306F 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u7D44\u307F\u8FBC\u307E\u308C\u305F\u8A3C\u660E\u66F8\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u307E\u3059 (\u30AB\u30B9\u30BF\u30E0\u8A3C\u660E\u66F8\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u96A3\u306B\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059)\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u30E2\u30FC\u30C9",children:"\u30C7\u30D0\u30C3\u30B0\u30ED\u30B0\u30E2\u30FC\u30C9"}),"\n",(0,d.jsxs)(n.p,{children:['HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB (\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E "Logs" \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B HTTPDebugLog_',(0,d.jsx)(n.em,{children:"nn"}),".txt (nn \u306F\u30D5\u30A1\u30A4\u30EB\u756A\u53F7)) \u306E\u72B6\u614B\u3084\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u6B21\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u304B\u3089\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7121\u52B9\u5316"})," (\u30C7\u30D5\u30A9\u30EB\u30C8)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"body\u30D1\u30FC\u30C4\u3092\u5168\u3066"})," - \u30EC\u30B9\u30DD\u30F3\u30B9\u304A\u3088\u3073\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30DC\u30C7\u30A3\u30D1\u30FC\u30C4\u3092\u542B\u3081\u308B\u5F62\u3067\u6709\u52B9\u5316\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"body\u30D1\u30FC\u30C4\u3092\u542B\u3081\u306A\u3044"})," - \u30DC\u30C7\u30A3\u30D1\u30FC\u30C4\u3092\u542B\u3081\u306A\u3044\u5F62\u3067\u6709\u52B9\u5316 (\u30DC\u30C7\u30A3\u30B6\u30A4\u30BA\u306F\u63D0\u4F9B\u3055\u308C\u307E\u3059)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u306Ebody"})," - \u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30DC\u30C7\u30A3\u30D1\u30FC\u30C4\u306E\u307F\u3092\u542B\u3081\u308B\u5F62\u3067\u6709\u52B9\u5316\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9\u306Ebody"})," - \u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u30DC\u30C7\u30A3\u30D1\u30FC\u30C4\u306E\u307F\u3092\u542B\u3081\u308B\u5F62\u3067\u6709\u52B9\u5316\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC",children:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebAdmin"})," Web\u30B5\u30FC\u30D0\u30FC\u3078\u306E URL\u7D4C\u7531\u30A2\u30AF\u30BB\u30B9\u306E\u30ED\u30C3\u30AF\u3092\u89E3\u9664\u3059\u308B\u306B\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306E\u5B9A\u7FA9\u306F\u5FC5\u9808\u3067\u3059 (4D\u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308B\u30A2\u30AF\u30BB\u30B9\u306B\u306F\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093)\u3002 \u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20/Admin/dataExplorer",children:"\u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC\u30DA\u30FC\u30B8"})," \u306A\u3069\u306E Web\u7BA1\u7406\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B Web\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F7F\u3063\u3066 URL\u3092\u4ECB\u3057\u305F\u63A5\u7D9A\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u63A5\u7D9A\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3042\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8\u304C\u8FD4\u3055\u308C\u307E\u3059:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"alt-text",src:i(289073).Z+"",width:"193",height:"126"})}),"\n",(0,d.jsx)(n.p,{children:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u306B\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u30ED\u30B0\u30A4\u30F3\u3068\u306F\u95A2\u4FC2\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65B0\u3057\u3044\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.strong,{children:"\u5B9A\u7FA9"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306E\u6587\u5B57\u5217\u3092\u5165\u529B\u3057\u3066 ",(0,d.jsx)(n.strong,{children:"OK"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002 \u3059\u308B\u3068\u3001\u30DC\u30BF\u30F3\u30E9\u30D9\u30EB\u304C ",(0,d.jsx)(n.strong,{children:"\u7DE8\u96C6"})," \u306B\u5909\u308F\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u3092\u7DE8\u96C6\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.strong,{children:"\u7DE8\u96C6"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B\u65B0\u3057\u3044\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306E\u6587\u5B57\u5217\u3092\u5165\u529B\u3057\u3066 ",(0,d.jsx)(n.strong,{children:"OK"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u65B0\u3057\u3044\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.strong,{children:"\u7DE8\u96C6"})," \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u6B04\u3092\u7A7A\u306B\u3057\u3066 ",(0,d.jsx)(n.strong,{children:"OK"})," \u3092\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"webadmin-\u306E\u30D8\u30C3\u30C9\u30EC\u30B9\u8A2D\u5B9A",children:"WebAdmin \u306E\u30D8\u30C3\u30C9\u30EC\u30B9\u8A2D\u5B9A"}),"\n",(0,d.jsxs)(n.p,{children:["\u3059\u3079\u3066\u306E ",(0,d.jsx)(n.a,{href:"#webadmin-%E8%A8%AD%E5%AE%9A",children:"WebAdmin \u8A2D\u5B9A"})," \u306F\u3001",(0,d.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002 4D \u304A\u3088\u3073 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u6BCE\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E ",(0,d.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u304C 1\u3064\u5B58\u5728\u3057\u3001\u540C\u3058\u30DB\u30B9\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u8907\u6570\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u904B\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["4D \u304A\u3088\u3073 4D Server \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u30D8\u30C3\u30C9\u30EC\u30B9\u3067\u5B9F\u884C\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E ",(0,d.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u3092\u8A2D\u5B9A\u3057\u3066\u4F7F\u7528\u3059\u308B\u304B\u3001\u30AB\u30B9\u30BF\u30E0\u306E ",(0,d.jsx)(n.code,{children:".4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u6301\u3064 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(n.a,{href:"#%E8%A8%AD%E5%AE%9A%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9",children:"WebAdmin\u8A2D\u5B9A\u30C0\u30A4\u30A2\u30ED\u30B0"})," \u3092\u4F7F\u7528\u3057\u3001\u305D\u306E\u5F8C\u30D8\u30C3\u30C9\u30EC\u30B9\u3067\u5B9F\u884C\u3057\u307E\u3059\u3002 \u3053\u306E\u3068\u304D\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E ",(0,d.jsx)(n.code,{children:"WebAdmin.4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u307E\u305F\u3001\u30AB\u30B9\u30BF\u30E0\u306E ",(0,d.jsx)(n.code,{children:".4DSettings"})," \u30D5\u30A1\u30A4\u30EB (xml\u5F62\u5F0F) \u3092\u8A2D\u5B9A\u3057\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u4EE3\u308F\u308A\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u6A5F\u80FD\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u305F\u3081\u306B\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20/Admin/cli",children:"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u30FB\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"})," \u3067\u306F\u3044\u304F\u3064\u304B\u306E\u5C02\u7528\u306E\u5F15\u6570\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".4DSettings"})," \u30D5\u30A1\u30A4\u30EB\u306B\u304A\u3044\u3066\u3001\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u306F\u5E73\u6587\u3067\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u8A8D\u8A3C\u3068\u30BB\u30C3\u30B7\u30E7\u30F3",children:"\u8A8D\u8A3C\u3068\u30BB\u30C3\u30B7\u30E7\u30F3"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u4E8B\u524D\u306B\u672C\u4EBA\u78BA\u8A8D\u305B\u305A\u306B URL\u7D4C\u7531\u3067 Web\u7BA1\u7406\u30DA\u30FC\u30B8\u306B\u30A2\u30AF\u30BB\u30B9\u3057\u305F\u5834\u5408\u3001\u8A8D\u8A3C\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 \u30E6\u30FC\u30B6\u30FC\u306F\u3001\u8A8D\u8A3C\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306B ",(0,d.jsx)(n.a,{href:"#%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%82%AD%E3%83%BC",children:"\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC"})," \u3092\u5165\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 ",(0,d.jsx)(n.code,{children:"WebAdmin"})," \u8A2D\u5B9A\u3067\u30A2\u30AF\u30BB\u30B9\u30AD\u30FC\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u306F\u3001URL\u7D4C\u7531\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["4D \u307E\u305F\u306F 4D Server \u306E\u30E1\u30CB\u30E5\u30FC\u9805\u76EE (",(0,d.jsx)(n.strong,{children:"\u30EC\u30B3\u30FC\u30C9 \uFF1E \u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC"})," \u307E\u305F\u306F ",(0,d.jsx)(n.strong,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6 \uFF1E \u30C7\u30FC\u30BF\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u30FC"})," (4D Server) \u306A\u3069) \u304B\u3089 Web\u7BA1\u7406\u30DA\u30FC\u30B8\u306B\u76F4\u63A5\u30A2\u30AF\u30BB\u30B9\u3057\u305F\u5834\u5408\u3001\u30A2\u30AF\u30BB\u30B9\u306F\u8A8D\u8A3C\u306A\u3057\u3067\u8A31\u53EF\u3055\u308C\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u81EA\u52D5\u7684\u306B\u8A8D\u8A3C\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:['\u30A2\u30AF\u30BB\u30B9\u304C\u8A31\u53EF\u3055\u308C\u308B\u3068\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u4E0A\u306B "WebAdmin" \u6A29\u9650\u3092\u6301\u3064 Web',(0,d.jsx)(n.a,{href:"/docs/ja/20/WebServer/sessions",children:"\u30BB\u30C3\u30B7\u30E7\u30F3"}),' \u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30AB\u30EC\u30F3\u30C8\u30BB\u30C3\u30B7\u30E7\u30F3\u304C "WebAdmin" \u6A29\u9650\u3092\u6301\u3063\u3066\u3044\u308B\u9650\u308A\u3001',(0,d.jsx)(n.code,{children:"WebAdmin"})," \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\u8981\u6C42\u3055\u308C\u305F\u30DA\u30FC\u30B8\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},289073:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},868330:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},498800:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},730438:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},110565:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var s=i(667294);let d={},r=s.createContext(d);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);