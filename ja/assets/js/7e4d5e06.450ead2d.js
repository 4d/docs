"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8132"],{286074:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"API/WebSocketConnectionClass","title":"WebSocketConnection","description":"WebSocketConnection \u30AF\u30E9\u30B9 API \u306F\u3001WebSocketServer \u30AF\u30E9\u30B9 \u3092\u4F7F\u3063\u3066\u78BA\u7ACB\u3055\u308C\u305F WebSocket \u63A5\u7D9A\u3092\u7BA1\u7406\u3059\u308B\u306E\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/API/WebSocketConnectionClass.md","sourceDirName":"API","slug":"/API/WebSocketConnectionClass","permalink":"/docs/ja/API/WebSocketConnectionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketConnectionClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"WebSocketConnectionClass","title":"WebSocketConnection"},"sidebar":"docs","previous":{"title":"WebSocket","permalink":"/docs/ja/API/WebSocketClass"},"next":{"title":"WebSocketServer","permalink":"/docs/ja/API/WebSocketServerClass"}}'),d=s("785893"),t=s("250065");let c={id:"WebSocketConnectionClass",title:"WebSocketConnection"},l=void 0,i={},h=[{value:"WebSocketConnection \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"websocketconnection-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:".handler",id:"handler",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:".id",id:"id",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:".send()",id:"send",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:".status",id:"status",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-3",level:4},{value:".terminate()",id:"terminate",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-4",level:4},{value:".wss",id:"wss",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-5",level:4}];function o(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebSocketConnection"})," \u30AF\u30E9\u30B9 API \u306F\u3001",(0,d.jsxs)(n.a,{href:"/docs/ja/API/WebSocketServerClass",children:[(0,d.jsx)(n.code,{children:"WebSocketServer"})," \u30AF\u30E9\u30B9"]})," \u3092\u4F7F\u3063\u3066\u78BA\u7ACB\u3055\u308C\u305F WebSocket \u63A5\u7D9A\u3092\u7BA1\u7406\u3059\u308B\u306E\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.p,{children:["4D \u306B\u304A\u3051\u308B WebSocket\u30B5\u30FC\u30D0\u30FC\u306E\u5B9F\u88C5\u306E\u6982\u8981\u3068\u3044\u304F\u3064\u304B\u306E\u4F8B\u984C\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsxs)(n.a,{href:"/docs/ja/API/WebSocketServerClass",children:[(0,d.jsx)(n.code,{children:"WebSocketServer"})," \u30AF\u30E9\u30B9"]})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]})}),"\n",(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,d.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"websocketconnection-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"WebSocketConnection \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WebSocketConnection"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/API/WebSocketServerClass#4dwebsocketservernew",children:"WebSocketServer \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/API/WebSocketServerClass#wsshandler-%E5%BC%95%E6%95%B0",children:(0,d.jsx)(n.code,{children:"WSHandler.onConnection"})})," \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u304C ",(0,d.jsx)(n.a,{href:"/docs/ja/API/WebSocketServerClass#connectionhandler-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,d.jsx)(n.code,{children:"connectionHandler"})})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3059\u3068\u81EA\u52D5\u7684\u306B\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"WebSocketConnection \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u95A2\u6570\u3092\u63D0\u4F9B\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsx)(n.tr,{children:(0,d.jsx)(n.th,{})})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsx)(n.tr,{children:(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.a,{href:"#handler",children:[(0,d.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,d.jsx)(n.br,{}),"\u63A5\u7D9A\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u305F ",(0,d.jsx)(n.code,{children:"connectionHandler"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30A2\u30AF\u30BB\u30B5\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,d.jsx)(n.tr,{children:(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.a,{href:"#id",children:[(0,d.jsx)(n.strong,{children:".id"})," : Integer"]}),(0,d.jsx)(n.br,{}),"\u63A5\u7D9A\u306E\u4E00\u610F\u306A\u8B58\u5225\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,d.jsx)(n.tr,{children:(0,d.jsxs)(n.td,{children:[(0,d.jsxs)(n.a,{href:"#send",children:[(0,d.jsx)(n.strong,{children:".send"}),"( ",(0,d.jsx)(n.em,{children:"message"})," : Text )",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:".send"}),"( ",(0,d.jsx)(n.em,{children:"message"})," : Blob )",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:".send"}),"( ",(0,d.jsx)(n.em,{children:"message"})," : Object )"]}),(0,d.jsx)(n.br,{}),"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B ",(0,d.jsx)(n.em,{children:"message"})," \u3092\u9001\u4FE1\u3057\u307E\u3059\u3002"]})})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"})," \u306E\u578B\u306B\u3088\u3063\u3066\u3001\u4EE5\u4E0B\u306E\u5185\u5BB9\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"UTF-8 \u306E\u30C6\u30AD\u30B9\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BLOB"}),(0,d.jsx)(n.td,{children:"\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsxs)(n.td,{children:["JSON UTF-8 \u306E\u30C6\u30AD\u30B9\u30C8 (",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/ja/page1217.html",children:(0,d.jsx)(n.code,{children:"JSON Stringify"})})," \u3068\u540C\u3058\u7D50\u679C)\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"            |\n"})}),"\n",(0,d.jsxs)(n.p,{children:["| ",(0,d.jsxs)(n.a,{href:"#status",children:[(0,d.jsx)(n.strong,{children:".status"})," : Text"]}),(0,d.jsx)(n.br,{}),'\u63A5\u7D9A\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u683C\u7D0D\u3057\u307E\u3059 ("Closing"\u3001"Closed"\u3001"Connected" \u306E\u3044\u305A\u308C\u304B)              |\n| ',(0,d.jsxs)(n.a,{href:"#terminate",children:[(0,d.jsx)(n.strong,{children:".terminate"}),"( { ",(0,d.jsx)(n.em,{children:"code"})," : Integer ; ",(0,d.jsx)(n.em,{children:"message"})," : Text } )"]}),(0,d.jsx)(n.br,{}),"\u63A5\u7D9A\u3092\u5F37\u5236\u7D42\u4E86\u3057\u307E\u3059 |\n| ",(0,d.jsxs)(n.a,{href:"#wss",children:[(0,d.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),(0,d.jsx)(n.br,{}),"\u63A5\u7D9A\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/API/WebSocketServerClass#4dwebsocketservernew",children:(0,d.jsx)(n.code,{children:"WebSocketServer"})})," \u89AA\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u683C\u7D0D\u3057\u307E\u3059                       |"]}),"\n",(0,d.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".handler"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u63A5\u7D9A\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u305F ",(0,d.jsx)(n.code,{children:"connectionHandler"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30A2\u30AF\u30BB\u30B5\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".id"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u63A5\u7D9A\u306E\u4E00\u610F\u306A\u8B58\u5225\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:".send"}),"( ",(0,d.jsx)(n.em,{children:"message"})," : Text )",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:".send"}),"( ",(0,d.jsx)(n.em,{children:"message"})," : Blob )",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:".send"}),"( ",(0,d.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{style:{textAlign:"center"}}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"message"}),(0,d.jsx)(n.td,{children:"Text / Blob / Object"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,d.jsx)(n.td,{children:"\u9001\u4FE1\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".send()"})," \u95A2\u6570\u306F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B ",(0,d.jsx)(n.em,{children:"message"})," \u3092\u9001\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"})," \u306E\u578B\u306B\u3088\u3063\u3066\u3001\u4EE5\u4E0B\u306E\u5185\u5BB9\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"UTF-8 \u306E\u30C6\u30AD\u30B9\u30C8"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BLOB"}),(0,d.jsx)(n.td,{children:"\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsxs)(n.td,{children:["JSON UTF-8 \u306E\u30C6\u30AD\u30B9\u30C8 (",(0,d.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/ja/page1217.html",children:(0,d.jsx)(n.code,{children:"JSON Stringify"})})," \u3068\u540C\u3058\u7D50\u679C)\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-3",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".status"}),' \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u63A5\u7D9A\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u683C\u7D0D\u3057\u307E\u3059 ("Closing"\u3001"Closed"\u3001"Connected" \u306E\u3044\u305A\u308C\u304B)\u3002']}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:".terminate"}),"( { ",(0,d.jsx)(n.em,{children:"code"})," : Integer ; ",(0,d.jsx)(n.em,{children:"message"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{style:{textAlign:"center"}}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"code"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,d.jsx)(n.td,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3055\u308C\u308B\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9 ( > 3000 \u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"message"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,d.jsx)(n.td,{children:"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3055\u308C\u308B\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-4",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".terminate()"})," \u95A2\u6570\u306F\u3001\u63A5\u7D9A\u3092\u5F37\u5236\u7D42\u4E86\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7D42\u4E86\u6642\u306B\u3001",(0,d.jsx)(n.em,{children:"code"})," \u3068 ",(0,d.jsx)(n.em,{children:"message"})," \u3092\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3057\u3001\u7D42\u4E86\u306E\u7406\u7531\u3092\u793A\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"wss",children:".wss"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:".wss"})," : 4D.WebSocketServer"]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E-5",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:".wss"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u63A5\u7D9A\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/API/WebSocketServerClass#4dwebsocketservernew",children:(0,d.jsx)(n.code,{children:"WebSocketServer"})})," \u89AA\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"})]})}function j(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);