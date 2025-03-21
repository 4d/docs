"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92897"],{192102:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"WebServer/webServerObject","title":"Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8","description":"4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30E1\u30A4\u30F3 (\u30DB\u30B9\u30C8) \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304A\u3088\u3073\u3001\u30DB\u30B9\u30C8\u3055\u308C\u305F\u5404\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3057\u3066\u76E3\u8996\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/WebServer/webServerObject.md","sourceDirName":"WebServer","slug":"/WebServer/webServerObject","permalink":"/docs/ja/20-R7/WebServer/webServerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"webServerObject","title":"Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"},"sidebar":"docs","previous":{"title":"\u7BA1\u7406","permalink":"/docs/ja/20-R7/WebServer/webServerAdmin"},"next":{"title":"Web \u958B\u767A","permalink":"/docs/ja/20-R7/WebServer/gettingStarted"}}'),d=r("785893"),c=r("250065");let l={id:"webServerObject",title:"Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"},i=void 0,t={},h=[{value:"Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316",id:"web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316",level:2},{value:"Web\u30B5\u30FC\u30D0\u30FC\u95A2\u6570",id:"web\u30B5\u30FC\u30D0\u30FC\u95A2\u6570",level:2},{value:"Web\u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30D1\u30C6\u30A3",id:"web\u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30D1\u30C6\u30A3",level:2},{value:"4D Web\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7",id:"4d-web\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7",level:2}];function j(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"4D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30E1\u30A4\u30F3 (\u30DB\u30B9\u30C8) \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304A\u3088\u3073\u3001\u30DB\u30B9\u30C8\u3055\u308C\u305F\u5404\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3057\u3066\u76E3\u8996\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u305F\u3068\u3048\u3070\u3001\u30E1\u30A4\u30F3\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B 2\u3064\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u6700\u5927 3\u3064\u306E\u72EC\u7ACB\u3057\u305F Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3057\u3066\u76E3\u8996\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E Web\u30B5\u30FC\u30D0\u30FC\u30921\u3064"}),"\n",(0,d.jsx)(n.li,{children:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8#1 \u306E Web\u30B5\u30FC\u30D0\u30FC\u30921\u3064"}),"\n",(0,d.jsx)(n.li,{children:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8#2 \u306E Web\u30B5\u30FC\u30D0\u30FC\u30921\u3064"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"1\u3064\u306E 4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u63A5\u7D9A\u3067\u304D\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u6570\u3001\u3064\u307E\u308A Web\u30B5\u30FC\u30D0\u30FC\u306E\u6570\u306B\u306F\u3001\u30E1\u30E2\u30EA\u4EE5\u5916\u306E\u5236\u9650\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30E1\u30A4\u30F3\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E Web\u30B5\u30FC\u30D0\u30FC\u3092\u542B\u3080\u3001\u5404 4D Web\u30B5\u30FC\u30D0\u30FC\u306F\u3001",(0,d.jsx)(n.code,{children:"4D.WebServer"})," \u30AF\u30E9\u30B9\u306E ",(0,d.jsx)(n.strong,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})," \u3068\u3057\u3066\u516C\u958B\u3055\u308C\u307E\u3059\u3002 \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3055\u308C\u305F Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass",children:"\u591A\u6570\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3084\u95A2\u6570"})," \u3092\u4F7F\u7528\u3057\u3066\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306F\u4EFB\u610F\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u64CD\u4F5C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["4D\u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u5F93\u6765\u306E ",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.ja.html",children:"WEB\u30B3\u30DE\u30F3\u30C9"})," \u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u305D\u306E\u5BFE\u8C61\u3068\u306A\u308B Web\u30B5\u30FC\u30D0\u30FC\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093 (\u5F8C\u8FF0\u53C2\u7167)\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5404 Web\u30B5\u30FC\u30D0\u30FC (\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8) \u306F\u3001\u500B\u5225\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u4EE5\u4E0B\u304C\u542B\u307E\u308C\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"On Web Authentication"})," \u304A\u3088\u3073 ",(0,d.jsx)(n.code,{children:"On Web Connection"})," \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057"]}),"\n",(0,d.jsx)(n.li,{children:"4D\u30BF\u30B0\u306E\u51E6\u7406\u3068\u30E1\u30BD\u30C3\u30C9\u306E\u547C\u3073\u51FA\u3057"}),"\n",(0,d.jsx)(n.li,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u3084 TLS\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u7BA1\u7406"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u308C\u306B\u3088\u308A\u3001\u72EC\u81EA\u306E Web\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u5099\u3048\u305F\u72EC\u7ACB\u3057\u305F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3084\u6A5F\u80FD\u3092\u958B\u767A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316",children:"Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316"}),"\n",(0,d.jsx)(n.p,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 (\u30C7\u30D5\u30A9\u30EB\u30C8Web\u30B5\u30FC\u30D0\u30FC) \u306E Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u30014D \u8D77\u52D5\u6642\u306B\u81EA\u52D5\u7684\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u65B0\u898F\u4F5C\u6210\u3057\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u6B21\u306E\u3088\u3046\u306B\u66F8\u3044\u305F\u5834\u5408:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"$nbSrv:=WEB Server list.length   \n//$nbSrv \u306E\u5024\u306F 1\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-server",children:(0,d.jsx)(n.code,{children:"WEB Server"})})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"	// 4D.WebServer \u30AF\u30E9\u30B9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5909\u6570\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\nvar webServer : 4D.WebServer \n	// \u30AB\u30EC\u30F3\u30C8\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304B\u3089 Web\u30B5\u30FC\u30D0\u30FC\u3092\u547C\u3073\u51FA\u3057\u307E\u3059\nwebServer:=WEB Server  \n\n	// \u4EE5\u4E0B\u3068\u540C\u3058\u3067\u3059\nwebServer:=WEB Server(Web server database)\n\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306B:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E Web\u30B5\u30FC\u30D0\u30FC\u3092\u547C\u3073\u51FA\u3059\u5834\u5408\u3084"}),"\n",(0,d.jsx)(n.li,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F\u30B5\u30FC\u30D0\u30FC (\u3069\u306E\u30B5\u30FC\u30D0\u30FC\u3067\u3082) \u3092\u547C\u3073\u51FA\u3059\u5834\u5408"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u3092\u4F7F\u3046\u3053\u3068\u3082\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"var webServer : 4D.WebServer \n    // \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u30DB\u30B9\u30C8\u306E Web\u30B5\u30FC\u30D0\u30FC\u3092\u547C\u3073\u51FA\u3059  \nwebServer:=WEB Server(Web server host database)  \n    // \u30BF\u30FC\u30B2\u30C3\u30C8\u306E Web\u30B5\u30FC\u30D0\u30FC\u3092\u547C\u3073\u51FA\u3059\nwebServer:=WEB Server(Web server receiving request)  \n\n"})}),"\n",(0,d.jsx)(n.h2,{id:"web\u30B5\u30FC\u30D0\u30FC\u95A2\u6570",children:"Web\u30B5\u30FC\u30D0\u30FC\u95A2\u6570"}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.a,{href:"API/WebServerClass.md../commands/web-server.md-object",children:"web server class object"})," contains the following functions:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u95A2\u6570"}),(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#start",children:(0,d.jsx)(n.code,{children:"start()"})})}),(0,d.jsx)(n.td,{children:"settings (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)"}),(0,d.jsx)(n.td,{children:"status (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)"}),(0,d.jsx)(n.td,{children:"Web\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3057\u307E\u3059"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#start",children:(0,d.jsx)(n.code,{children:"stop()"})})}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"-"}),(0,d.jsx)(n.td,{children:"Web\u30B5\u30FC\u30D0\u30FC\u3092\u505C\u6B62\u3057\u307E\u3059"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u30FB\u505C\u6B62\u3059\u308B\u306B\u306F\u3001Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#start",children:(0,d.jsx)(n.code,{children:"start()"})})," \u304A\u3088\u3073 ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#stop",children:(0,d.jsx)(n.code,{children:"stop()"})})," \u95A2\u6570\u3092\u547C\u3073\u51FA\u3059\u3060\u3051\u3067\u3059\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"var $status : Object\n    // \u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8A2D\u5B9A\u3067 Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3059\u308B\u5834\u5408\n$status:=webServer.start()\n    // \u30AB\u30B9\u30BF\u30E0\u8A2D\u5B9A\u3067 Web\u30B5\u30FC\u30D0\u30FC\u3092\u958B\u59CB\u3059\u308B\u5834\u5408  \n    // $settings \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001Wev\u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u307E\u3059\nwebServer.start($settings)\n\n    // Web\u30B5\u30FC\u30D0\u30FC\u3092\u505C\u6B62\u3057\u307E\u3059\n$status:=webServer.stop()\n\n"})}),"\n",(0,d.jsx)(n.h2,{id:"web\u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30D1\u30C6\u30A3",children:"Web\u30B5\u30FC\u30D0\u30FC\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n",(0,d.jsxs)(n.p,{children:["A web server object contains ",(0,d.jsx)(n.a,{href:"API/WebServerClass.md../commands/web-server.md-object",children:"various properties"})," which configure the web server."]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u308C\u3089\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5B9A\u7FA9\u3057\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#start",children:(0,d.jsx)(n.code,{children:".start()"})})," \u95A2\u6570\u306E ",(0,d.jsx)(n.code,{children:"settings"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u4F7F\u7528\u3057\u3066\u5B9A\u7FA9\u3057\u307E\u3059 (\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u9664\u304F\u3001\u5F8C\u8FF0\u53C2\u7167)\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4E0A\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001",(0,d.jsx)(n.code,{children:"WEB SET OPTION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9A\u7FA9\u3057\u307E\u3059 (\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u307F)\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u4E0A\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8A2D\u5B9A\u3067\u5B9A\u7FA9\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Web\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F Web\u30B5\u30FC\u30D0\u30FC\u306E\u6B21\u56DE\u8D77\u52D5\u6642\u306B\u4F7F\u7528\u3055\u308C\u308B\u5024\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["Web\u30B5\u30FC\u30D0\u30FC\u304C\u8D77\u52D5\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u306F Web\u30B5\u30FC\u30D0\u30FC\u3067\u4F7F\u7528\u3055\u308C\u308B\u5B9F\u969B\u306E\u5024\u304C\u542B\u307E\u308C\u307E\u3059 (\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u5B9A\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#start",children:(0,d.jsx)(n.code,{children:".start()"})})," \u95A2\u6570\u306E ",(0,d.jsx)(n.code,{children:"settings"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u3088\u3063\u3066\u4E0A\u66F8\u304D\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059)\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"isRunning"}),"\u3001",(0,d.jsx)(n.em,{children:"name"}),"\u3001",(0,d.jsx)(n.em,{children:"openSSLVersion"}),"\u3001",(0,d.jsx)(n.em,{children:"perfectForwardSecrecy"})," \u306F\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/API/WebServerClass#start",children:(0,d.jsx)(n.code,{children:"start()"})}),"\u95A2\u6570\u306E ",(0,d.jsx)(n.code,{children:"settings"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3067\u4E8B\u524D\u306B\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"4d-web\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7",children:"4D Web\u30B3\u30DE\u30F3\u30C9\u306E\u30B9\u30B3\u30FC\u30D7"}),"\n",(0,d.jsxs)(n.p,{children:["4D\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u306F\u3001Web\u30B5\u30FC\u30D0\u30FC\u306E\u5236\u5FA1\u306B\u4F7F\u7528\u3067\u304D\u308B ",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.ja.html",children:"\u3044\u304F\u3064\u304B\u306E\u30B3\u30DE\u30F3\u30C9"})," \u304C\u3042\u308A\u307E\u3059\u3002 \u305F\u3060\u3057\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306F 1\u3064\u306E (\u30C7\u30D5\u30A9\u30EB\u30C8) Web\u30B5\u30FC\u30D0\u30FC\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u3092 Web\u30B5\u30FC\u30D0\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u3001\u305D\u306E\u30B9\u30B3\u30FC\u30D7\u304C\u9069\u5207\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u30B3\u30DE\u30F3\u30C9"}),(0,d.jsx)(n.th,{children:"\u30B9\u30B3\u30FC\u30D7"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"SET DATABASE PARAMETER"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB CLOSE SESSION"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET BODY PART"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Get body part count"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Get Current Session ID"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET HTTP BODY"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET HTTP HEADER"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET OPTION"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Get server info"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET SESSION EXPIRATION"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Get session process count"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET STATISTICS"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB GET VARIABLES"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Is secured connection"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Is server running"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SEND BLOB"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SEND FILE"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SEND HTTP REDIRECT"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SEND RAW DATA"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SEND TEXT"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SET HOME PAGE"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SET HTTP HEADER"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SET OPTION"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB SET ROOT FOLDER"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB START SERVER"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB STOP SERVER"})}),(0,d.jsx)(n.td,{children:"\u30DB\u30B9\u30C8\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3 Web\u30B5\u30FC\u30D0\u30FC"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"WEB Validate digest"})}),(0,d.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u53D7\u3051\u53D6\u3063\u305F Web\u30B5\u30FC\u30D0\u30FC"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let d={},c=s.createContext(d);function l(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);