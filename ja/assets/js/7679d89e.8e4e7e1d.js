"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38894"],{48560:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-get-server-info","title":"WEB Get server info","description":"WEB Get server info {( withCache )} : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-server-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-server-info","permalink":"/docs/ja/20-R7/commands/web-get-server-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-server-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-server-info","title":"WEB Get server info","slug":"/commands/web-get-server-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET OPTION","permalink":"/docs/ja/20-R7/commands/web-get-option"},"next":{"title":"WEB GET STATISTICS","permalink":"/docs/ja/20-R7/commands/web-get-statistics"}}'),d=s("785893"),t=s("250065");let c={id:"web-get-server-info",title:"WEB Get server info",slug:"/commands/web-get-server-info",displayed_sidebar:"docs"},i=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"cache\u30D7\u30ED\u30D1\u30C6\u30A3",id:"cache\u30D7\u30ED\u30D1\u30C6\u30A3",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB Get server info"})," {( ",(0,d.jsx)(n.em,{children:"withCache"})," )} : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"withCache"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Web\u30AD\u30E3\u30C3\u30B7\u30E5\u8A73\u7D30\u3092\u8FD4\u3059\u305F\u3081\u306B\u306FTrue\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u306F\u30AD\u30E3\u30C3\u30B7\u30E5\u8A73\u7D30\u306F\u8FD4\u3055\u308C\u306A\u3044"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u5B9F\u884C\u4E2D\u306EWeb\u30B5\u30FC\u30D0\u30FC\u3068SOAP\u30B5\u30FC\u30D0\u30FC\u306E\u60C5\u5831"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WEB Get server info"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30014D Web \u30B5\u30FC\u30D0\u30FC\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u8A73\u7D30\u306A\u30E9\u30F3\u30BF\u30A4\u30E0\u60C5\u5831\u3092\u683C\u7D0D\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002\u8FD4\u3055\u308C\u305F\u60C5\u5831\u306B\u306FSOPA \u30B5\u30FC\u30D0\u30FC\u306E\u3082\u306E\u3082\u542B\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30E9\u30F3\u30BF\u30A4\u30E0\u306E\u60C5\u5831\u3001\u3064\u307E\u308AWeb \u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u969B\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-get-option",children:"WEB GET OPTION"})," \u30B3\u30DE\u30F3\u30C9\u3067\u8FD4\u3055\u308C\u305F\u3082\u306E\u3068\u306F\u7570\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u306A\u305C\u306A\u3089\u30B7\u30B9\u30C6\u30E0\u8A2D\u5B9A\u3084\u5229\u7528\u53EF\u80FD\u306A\u30EA\u30BD\u30FC\u30B9\u306B\u3088\u3063\u3066\u5909\u5316\u3059\u308B\u305F\u3081\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:['\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306F"cache"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002\u305D\u306E\u30B5\u30A4\u30BA\u304C\u5927\u304D\u304F\u306A\u308A\u3046\u308B\u305F\u3081\u3067\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4E2D\u8EAB\u3092\u77E5\u308A\u305F\u3044\u5834\u5408\u306B\u306F\u3001\u4EFB\u610F\u306E',(0,d.jsx)(n.em,{children:"withCache"})," \u5F15\u6570\u306BTrue\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8FD4\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u542B\u307E\u308C\u307E\u3059(\u30D7\u30ED\u30D1\u30C6\u30A3\u540D\u306F\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3057\u307E\u3059):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u540D"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5024\u306E\u578B"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8A73\u7D30"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"started"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"http\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u308C\u3070True\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u3070False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"uptime"}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsx)(n.td,{children:"http\u30B5\u30FC\u30D0\u30FC\u304C\u6700\u5F8C\u306B\u958B\u59CB\u3055\u308C\u3066\u304B\u3089\u306E\u7D4C\u904E\u6642\u9593"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"httpRequestCount"}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsx)(n.td,{children:"\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u304B\u3089\u306Ehttp\u30D2\u30C3\u30C8\u306E\u56DE\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"startMode"}),(0,d.jsx)(n.td,{children:"\u6587\u5B57\u5217"}),(0,d.jsx)(n.td,{children:'"\u958B\u59CB\u6642\u306BWeb\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB"\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308C\u3070"automatic"\u3001\u305D\u308C\u4EE5\u5916\u306F"manual"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SOAPServerStarted"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"SOAP\u30B5\u30FC\u30D0\u30FC\u304C\u958B\u59CB\u3055\u308C\u3066\u3044\u308C\u3070True\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u3070False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cache"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F"})," ",(0,d.jsx)(n.em,{children:"withCache"})," *",(0,d.jsxs)(n.em,{children:["\u5F15\u6570\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u5024\u304CTrue\u3067\u3042\u3063\u305F\u5834\u5408\u306E\u307F\u542B\u307E\u308C\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"Web \u30B5\u30FC\u30D0\u30FC\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u4E2D\u8EAB\u306E\u60C5\u5831\u3067\u3059(\u4EE5\u4E0B\u306E"}),"cache\u30D7\u30ED\u30D1\u30C6\u30A3"]})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"security"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,d.jsx)(n.td,{children:"\u69D8\u3005\u306A\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u72B6\u614B"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cipherSuite"}),(0,d.jsx)(n.td,{children:"\u6587\u5B57\u5217"}),(0,d.jsx)(n.td,{children:"4D\u304C\u5B89\u5168\u306A\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u4F7F\u7528\u3057\u3066\u3044\u308B\u6697\u53F7\u5316\u30EA\u30B9\u30C8(SSL cipher list \u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTPEnabled"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"HTTP \u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306FTrue"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTPSEnabled"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"HTTPS \u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306FTrue"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HSTSEnabled"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"HSTS \u304C\u30B5\u30FC\u30D0\u30FC\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306FTrue"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HSTSMaxAge"}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsx)(n.td,{children:"HSTS \u306E\u6700\u5927\u5E74\u6570(\u79D2\u5358\u4F4D)\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F2\u5E74(63,072,000 \u79D2)\u3067\u3059\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"minTLSVersion"}),(0,d.jsx)(n.td,{children:"\u6587\u5B57\u5217"}),(0,d.jsx)(n.td,{children:"\u63A5\u7D9A\u3092\u53D7\u3051\u5165\u308C\u308B\u6700\u4F4E\u9650\u306ETLS\u30D0\u30FC\u30B8\u30E7\u30F3(Min TLS version \u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"openSSLVersion"}),(0,d.jsx)(n.td,{children:"\u6587\u5B57\u5217"}),(0,d.jsx)(n.td,{children:"\u4F7F\u7528\u3055\u308C\u3066\u3044\u308BOpenSSL \u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30D0\u30FC\u30B8\u30E7\u30F3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"perfectForwardSecrecy"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"PFS\u304C\u30B5\u30FC\u30D0\u30FC\u3067\u5229\u7528\u53EF\u80FD\u3067\u3042\u308C\u3070True\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306FFalse"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"options"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,d.jsx)(n.td,{children:"\u69D8\u3005\u306A\u6A19\u6E96\u306EWeb\u30B5\u30FC\u30D0\u30FC\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u72B6\u614B"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CORSEnabled"}),(0,d.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,d.jsx)(n.td,{children:"CORS \u30B5\u30FC\u30D3\u30B9\u304C\u30B5\u30FC\u30D0\u30FC\u3067\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308C\u3070True\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306FFalse(\u30C7\u30D5\u30A9\u30EB\u30C8)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CORSSettings"}),(0,d.jsx)(n.td,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,d.jsx)(n.td,{children:"\u8A31\u53EF\u3055\u308C\u305F\u30DB\u30B9\u30C8\u3068\u30E1\u30BD\u30C3\u30C9\u306E\u4E00\u89A7\u3092\u5B9A\u7FA9\u3059\u308BCORS \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3(Web CORS settings \u306Eweb option\u3092\u53C2\u7167)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webCharacterSet"}),(0,d.jsx)(n.td,{children:"\u6587\u5B57\u5217"}),(0,d.jsx)(n.td,{children:"\u6587\u5B57\u30BB\u30C3\u30C8\u540D(Web character set Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webHTTPCompressionLevel"}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsx)(n.td,{children:"\u5727\u7E2EHTTP\u4EA4\u63DB\u3067\u306E\u5727\u7E2E\u30EC\u30D9\u30EB(Web HTTP compression level Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webHTTPCompressionThreshold"}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsx)(n.td,{children:"\u5727\u7E2E\u306E\u30B9\u30EC\u30C3\u30B7\u30E7\u30EB\u30C9(Web HTTP compression threshold Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webHTTPSPortID"}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsx)(n.td,{children:"Web \u30B5\u30FC\u30D0\u30FC\u306B\u3088\u3063\u3066\u5B89\u5168\u306A\u63A5\u7D9A\u306B\u4F7F\u7528\u3055\u308C\u308BTCP \u30DD\u30FC\u30C8\u756A\u53F7(Web HTTPS port ID Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"webInactiveProcessTimeout"})}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.strong,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb \u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u306F\u7279\u306B\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3001"})," **",(0,d.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002**\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u306A\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u30D7\u30ED\u30BB\u30B9\u306E\u4FDD\u6301\u6642\u9593(Web inactive session timeout Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"webInactiveSessionTimeout"})}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsxs)(n.td,{children:["****\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb \u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u306F\u7279\u306B\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3001 ",(0,d.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002**\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u306A\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4FDD\u6301\u6642\u9593(Web inactive session timeout Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webIPAddressToListen"}),(0,d.jsx)(n.td,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3"}),(0,d.jsx)(n.td,{children:'Web \u30B5\u30FC\u30D0\u30FC\u304Chttp \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u4ED8\u3051\u308B\u3001\u5B9A\u7FA9\u3055\u308C\u305F"\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"\u306B\u306A\u3063\u3066\u3044\u308BIP\u30A2\u30C9\u30EC\u30B9(Web IP address to listen Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.em,{children:"webMaxConcurrentProcesses"})}),(0,d.jsx)(n.td,{children:"\u6570\u5024"}),(0,d.jsxs)(n.td,{children:["****\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb \u30BB\u30C3\u30B7\u30E7\u30F3\u3067\u306F\u7279\u306B\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3001 ",(0,d.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002**\u540CWeb \u30D7\u30ED\u30BB\u30B9\u306E\u6700\u5927\u540C\u6642\u63A5\u7D9A\u6570(Web max concurrent processes Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"webPortID"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"Web \u30B5\u30FC\u30D0\u30FC\u304C\u4F7F\u7528\u3059\u308BTCP \u30DD\u30FC\u30C8\u756A\u53F7(Web port ID Web \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3057\u307E\u3059)"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"4D Server:"}),' \u30B3\u30DE\u30F3\u30C9\u306F\u30ED\u30FC\u30AB\u30EB\u306EWeb \u30B5\u30FC\u30D0\u30FC\u306B\u3064\u3044\u3066\u306E\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u30024D Server \u306EWeb \u30B5\u30FC\u30D0\u30FC\u3092\u30EA\u30E2\u30FC\u30C8\u304B\u3089\u30E2\u30CB\u30BF\u30FC\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u30E1\u30BD\u30C3\u30C9\u306E"\u30B5\u30FC\u30D0\u30FC\u3067\u5B9F\u884C"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9069\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002']}),"\n",(0,d.jsx)(n.h3,{id:"cache\u30D7\u30ED\u30D1\u30C6\u30A3",children:"cache\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"withCache"})," \u5F15\u6570\u306B",(0,d.jsx)(n.strong,{children:"true"}),' \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u4E2D\u8EAB\u3092\u683C\u7D0D\u3057\u305F"cache" \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u540D"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5024\u306E\u578B"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8A73\u7D30"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cacheUsage"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u4F7F\u7528\u7387"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numOfLoads"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u8AAD\u307F\u8FBC\u3093\u3060\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"currentSize"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u30B5\u30A4\u30BA"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxSize"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u306E\u6700\u5927\u30B5\u30A4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objectMaxSize"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306B\u8AAD\u307F\u8FBC\u307F\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6700\u5927\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"enabled"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"Web \u30B5\u30FC\u30D0\u30FC\u30AD\u30E3\u30C3\u30B7\u30E5\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306Ftrue"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nbCachedObjects"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"cachedObjects"}),(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"\u30AD\u30E3\u30C3\u30B7\u30E5\u5185\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3002\u305D\u308C\u305E\u308C\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u7570\u306A\u308B\u30D7\u30ED\u30D1\u30C6\u30A3(url\u3001mimeType\u3001expirationType\u3001lastModified\u3001\u7B49)\u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$webServerInfo:=WEB Get server info(True)\n"})}),"\n",(0,d.jsx)(n.p,{children:"... $webServerInfo \u306E\u4E2D\u8EAB\u306F\u3001\u4E00\u4F8B\u3068\u3057\u3066\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0 "started": true,\xa0\xa0 "uptime": 40,\xa0\xa0 "SOAPServerStarted": true,\xa0\xa0 "startMode": "manual",\xa0\xa0 "httpRequestCount": 0,\xa0\xa0 "options": {\xa0 \xa0 \xa0 "CORSEnabled": false,\xa0\xa0\xa0\xa0\xa0 "CORSSettings": null,\xa0 \xa0 \xa0 "webCharacterSet": "UTF-8",\xa0\xa0\xa0\xa0\xa0 "webHTTPCompressionLevel": 1,\xa0\xa0\xa0\xa0\xa0 "webHTTPCompressionThreshold": 1024,\xa0\xa0\xa0\xa0\xa0 "webHTTPSPortID": 443,\xa0\xa0\xa0\xa0\xa0 "webIPAddressToListen": ["192.168.xxx.xxx"],\xa0\xa0\xa0\xa0\xa0 "webInactiveProcessTimeout": 28800,\xa0\xa0\xa0\xa0\xa0 "webInactiveSessionTimeout": 28800,\xa0\xa0\xa0\xa0\xa0 "webMaxConcurrentProcesses": 100,\xa0\xa0\xa0\xa0\xa0 "webPortID": 80\xa0\xa0 },\xa0\xa0 "security": {\xa0\xa0\xa0\xa0\xa0 "HTTPEnabled": true,\xa0\xa0\xa0\xa0\xa0 "cipherSuite": "ECDHE-RSA-AES128-GCM-SHA256:...:CAMELLIA128-SHA",\xa0\xa0\xa0\xa0\xa0 "openSSLVersion": "OpenSSL 1.0.2h 3 May 2016",\xa0\xa0\xa0\xa0\xa0 "perfectForwardSecrecy": true,\xa0\xa0\xa0\xa0\xa0 "minTLSVersion": "1.2" \xa0\xa0 },\xa0\xa0\xa0 "cache": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "cacheUsage": 1,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "numOfLoads": 24,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "currentSize": 154219,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "maxSize": 10485760,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "objectMaxSize": 524288,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "enabled": true,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "nbCachedObjects": 23,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "cachedObjects": [\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {...},{...}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ]\xa0\xa0 }}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/license-info",children:"License info"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/process-activity",children:"Process activity"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/soap-reject-new-requests",children:"SOAP REJECT NEW REQUESTS"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1531"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);