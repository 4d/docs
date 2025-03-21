"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85135"],{526113:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"API/HTTPAgentClass","title":"HTTPAgent","description":"HTTPAgent \u30AF\u30E9\u30B9\u306F\u3001HTTPRequest \u30AF\u30E9\u30B9 \u3092\u4F7F\u3063\u305F\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u306E\u6C38\u7D9A\u6027\u3068\u518D\u5229\u7528\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306EHTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 \u3092\u64CD\u4F5C\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/API/HTTPAgentClass.md","sourceDirName":"API","slug":"/API/HTTPAgentClass","permalink":"/docs/ja/20-R7/API/HTTPAgentClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FHTTPAgentClass.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"HTTPAgentClass","title":"HTTPAgent"},"sidebar":"docs","previous":{"title":"Function","permalink":"/docs/ja/20-R7/API/FunctionClass"},"next":{"title":"HTTPRequest","permalink":"/docs/ja/20-R7/API/HTTPRequestClass"}}'),d=t("785893"),r=t("250065");let i={id:"HTTPAgentClass",title:"HTTPAgent"},l=void 0,c={},h=[{value:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"httpagent-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:"4D.HTTPAgent.new()",id:"4dhttpagentnew",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"<code>options</code> \u5F15\u6570",id:"options-\u5F15\u6570",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:".params",id:"params",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:".requestsCount",id:"requestscount",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:".freeSocketsCount",id:"freesocketscount",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-3",level:4}];function o(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"HTTPAgent"})," \u30AF\u30E9\u30B9\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/HTTPRequestClass",children:"HTTPRequest \u30AF\u30E9\u30B9"})," \u3092\u4F7F\u3063\u305F\u30B5\u30FC\u30D0\u30FC\u63A5\u7D9A\u306E\u6C38\u7D9A\u6027\u3068\u518D\u5229\u7528\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306E",(0,d.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,d.jsx)(n.code,{children:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})})," \u3092\u64CD\u4F5C\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"HTTPAgent"})," \u30AF\u30E9\u30B9\u306F\u3001",(0,d.jsx)(n.code,{children:"4D"})," \u30AF\u30E9\u30B9\u30B9\u30C8\u30A2\u306B\u3066\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002 ",(0,d.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,d.jsx)(n.code,{children:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})})," \u306F\u3001",(0,d.jsx)(n.a,{href:"#4dhttpagentnew",children:"4D.HTTPAgent.new()"})," \u95A2\u6570\u3067\u65B0\u898F\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u306A\u3044\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u6301\u3064\u30B0\u30ED\u30FC\u30D0\u30EB\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002 \u30C7\u30D5\u30A9\u30EB\u30C8\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306F\u3001\u57FA\u672C\u7684\u306A\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9\u306B\u9069\u3057\u305F\u6700\u3082\u30B7\u30F3\u30D7\u30EB\u306A HTTP\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3067\u3059\u3002 \u63A5\u7D9A\u306E\u8A2D\u5B9A (keep-alive\u8A2D\u5B9A\u3001\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3001TLS/SSL\u8A2D\u5B9A\u306A\u3069) \u306B\u3064\u3044\u3066\u3001HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u6BCE\u3067\u306F\u306A\u304F\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30EC\u30D9\u30EB\u3067\u3001\u3088\u308A\u7D30\u304B\u3044\u5236\u5FA1\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306B\u3001\u30AB\u30B9\u30BF\u30E0\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u4F7F\u7528\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,d.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20 R6"}),(0,d.jsx)(n.td,{children:"\u30AF\u30E9\u30B9\u3092\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"httpagent-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5171\u6709\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3084\u95A2\u6570\u3092\u63D0\u4F9B\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{})})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsx)(n.tr,{children:(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.a,{href:"#options",children:[(0,d.jsx)(n.strong,{children:"options"})," : Object"]}),(0,d.jsx)(n.br,{}),"the current used options of the HTTPAgent"]})}),(0,d.jsx)(n.tr,{children:(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.a,{href:"#requestscount",children:[(0,d.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),(0,d.jsx)(n.br,{}),"HTTPAgent \u306B\u3088\u3063\u3066\u73FE\u5728\u7BA1\u7406\u3055\u308C\u3066\u3044\u308B\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6570"]})}),(0,d.jsx)(n.tr,{children:(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.a,{href:"#freesocketscount",children:[(0,d.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),(0,d.jsx)(n.br,{}),"HTTPAgent \u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F ",(0,d.jsx)(n.code,{children:"maxSockets"})," \u306B\u5BFE\u3059\u308B\u7A7A\u304D\u30BD\u30B1\u30C3\u30C8\u6570"]})})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsx)(n.p,{children:"HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5171\u6709\u53EF\u80FD\u306A\u305F\u3081\u3001 \u30B7\u30F3\u30B0\u30EB\u30C8\u30F3\u30AF\u30E9\u30B9\u306B\u8FFD\u52A0\u3059\u308C\u3070\u3001\u540C\u3058\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u3059\u3079\u3066\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3064\u3044\u3066\u540C\u3058\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"})}),"\n",(0,d.jsx)(n.h2,{id:"4dhttpagentnew",children:"4D.HTTPAgent.new()"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"4D.HTTPAgent.new"}),"( { ",(0,d.jsx)(n.em,{children:"options"})," : Object } ) : 4D.HTTPAgent"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{style:{textAlign:"center"}}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"options"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,d.jsx)(n.td,{children:"HTTPAgent \u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AA\u30D7\u30B7\u30E7\u30F3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"4D.HTTPAgent"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,d.jsx)(n.td,{children:"\u65B0\u898F HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"4D.HTTPAgent.new()"})," \u95A2\u6570\u306F\u3001",(0,d.jsx)(n.em,{children:"options"})," \u5F15\u6570\u3067\u5B9A\u7FA9\u3055\u308C\u308B\u8A2D\u5B9A\u3067\u5171\u6709\u53EF\u80FD\u306A HTTPAgent \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001",(0,d.jsx)(n.code,{children:"4D.HTTPAgent"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD4\u3055\u308C\u305F ",(0,d.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,d.jsx)(n.code,{children:"HTTPAgent\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})})," \u306F\u3001HTTP\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u63A5\u7D9A\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u306E\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.h4,{id:"options-\u5F15\u6570",children:[(0,d.jsx)(n.code,{children:"options"})," \u5F15\u6570"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"options"})," \u306B\u6E21\u3059\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u4EFB\u610F\u3067\u3059):"]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["HTTPAgent \u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/HTTPRequestClass#4dhttprequestnew",children:"HTTPRequest \u306E\u30AA\u30D7\u30B7\u30E7\u30F3"})," \u3068\u7D71\u5408\u3055\u308C\u307E\u3059 (HTTPRequest \u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u512A\u5148\u3055\u308C\u307E\u3059)\u3002\u7279\u5B9A\u306E\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8"}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"keepAlive"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"true"}),(0,d.jsx)(n.td,{children:"\u5F53\u8A72\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306B\u3064\u3044\u3066 keep-alive \u3092\u6709\u52B9\u306B\u3057\u307E\u3059"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxSockets"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"65535"}),(0,d.jsx)(n.td,{children:"\u30B5\u30FC\u30D0\u30FC\u3042\u305F\u308A\u306E\u6700\u5927\u30BD\u30B1\u30C3\u30C8\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxTotalSockets"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"65535"}),(0,d.jsx)(n.td,{children:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u6700\u5927\u30BD\u30B1\u30C3\u30C8\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"timeout"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"undefined"}),(0,d.jsx)(n.td,{children:"\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u672A\u4F7F\u7528\u306E\u30BD\u30B1\u30C3\u30C8\u304C\u9589\u3058\u3089\u308C\u308B\u307E\u3067\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"certificatesFolder"}),(0,d.jsx)(n.td,{children:"Folder"}),(0,d.jsxs)(n.td,{children:["undefined (\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53C2\u7167)"]}),(0,d.jsx)(n.td,{children:"\u5F53\u8A72\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u4F7F\u7528\u3059\u308B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u8A3C\u660E\u66F8\u30D5\u30A9\u30EB\u30C0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minTLSVersion"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsxs)(n.td,{children:["undefined (\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53C2\u7167)"]}),(0,d.jsx)(n.td,{children:"\u5F53\u8A72\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u8A2D\u5B9A\u3059\u308B TLS \u306E\u6700\u5C0F\u30D0\u30FC\u30B8\u30E7\u30F3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"protocol"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsxs)(n.td,{children:["undefined (\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53C2\u7167)"]}),(0,d.jsx)(n.td,{children:"\u5F53\u8A72\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u4F7F\u3063\u305F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u4F7F\u7528\u3055\u308C\u308B\u30D7\u30ED\u30C8\u30B3\u30EB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"validateTLSCertificate"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsxs)(n.td,{children:["undefined (\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53C2\u7167)"]}),(0,d.jsx)(n.td,{children:"\u5F53\u8A72\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u305F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u3064\u3044\u3066\u3001TLS \u8A3C\u660E\u66F8\u306E\u691C\u8A3C\u3092\u304A\u3053\u306A\u3046\u304B"})]})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"\u540C\u3058\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3092\u4F7F\u3063\u3066\u8907\u6570\u306E\u30B5\u30FC\u30D0\u30FC\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u305D\u306E\u5834\u5408\u5404\u30B5\u30FC\u30D0\u30FC\u306F\u3001\u540C\u3058\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3057\u305F\u72EC\u81EA\u306E\u63A5\u7D9A\u30D7\u30FC\u30EB\u3092\u6301\u3061\u307E\u3059\u3002"})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"HTTPAgent \u306E\u4F5C\u6210:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.maxSockets:=5 // \u30B5\u30FC\u30D0\u30FC\u6BCE\u306E\u6700\u5927\u30BD\u30B1\u30C3\u30C8\u6570\n$options.maxTotalSockets:=10 // \u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u306E\u6700\u5927\u30BD\u30B1\u30C3\u30C8\u6570\n$options.validateTLSCertificate:=True // \u30B5\u30FC\u30D0\u30FC\u306E\u8A3C\u660E\u66F8\u3092\u691C\u8A3C\u3057\u307E\u3059\n\nvar $myAgent:=4D.HTTPAgent.new($options)\n\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4EFB\u610F\u306E\u90FD\u5E02\u306E\u73FE\u5730\u6642\u9593\u3092\u78BA\u8A8D\u3059\u308B\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $options:={}\n$options.method:="GET"\n$options.agent:=$myAgent\nvar $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) \n\n'})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"HTTPRequest \u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u306A\u3044\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u6301\u3064\u30B0\u30ED\u30FC\u30D0\u30EB\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"})}),"\n",(0,d.jsx)(n.h2,{id:"params",children:".params"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"options"})," : Object"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:".params"})," property object contains the current used options of the HTTPAgent."]}),"\n",(0,d.jsx)(n.h2,{id:"requestscount",children:".requestsCount"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".requestsCount"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001HTTPAgent \u306B\u3088\u3063\u3066\u73FE\u5728\u7BA1\u7406\u3055\u308C\u3066\u3044\u308B\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6570\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"freesocketscount",children:".freeSocketsCount"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-3",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".freeSocketsCount"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001HTTPAgent \u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F ",(0,d.jsx)(n.code,{children:"maxSockets"})," \u306B\u5BFE\u3059\u308B\u7A7A\u304D\u30BD\u30B1\u30C3\u30C8\u6570\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);