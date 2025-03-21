"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31223"],{675660:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>l,metadata:()=>d,assets:()=>t,toc:()=>h,contentTitle:()=>i});var d=JSON.parse('{"id":"API/WebSocketClass","title":"WebSocket","description":"WebSocket \u30AF\u30E9\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30B5\u30FC\u30D0\u30FC\u3068\u306E WebSocket \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u3092\u958B\u3044\u3066\u3001\u30C7\u30FC\u30BF\u3092\u9001\u53D7\u4FE1\u3057\u3001\u63A5\u7D9A\u3092\u9589\u3058\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/API/WebSocketClass.md","sourceDirName":"API","slug":"/API/WebSocketClass","permalink":"/docs/ja/API/WebSocketClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebSocketClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"WebSocketClass","title":"WebSocket"},"sidebar":"docs","previous":{"title":"WebServer","permalink":"/docs/ja/API/WebServerClass"},"next":{"title":"WebSocketConnection","permalink":"/docs/ja/API/WebSocketConnectionClass"}}'),r=s("785893"),c=s("250065");let l={id:"WebSocketClass",title:"WebSocket"},i=void 0,t={},h=[{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3},{value:"WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",id:"websocket-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",level:3},{value:"4D.WebSocket.new()",id:"4dwebsocketnew",level:2},{value:"<em>connectionHandler</em> \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC",id:"connectionhandler-\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC",level:3},{value:"\u4F8B\u984C",id:"\u4F8B\u984C-1",level:4},{value:".dataType",id:"datatype",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:".handler",id:"handler",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-1",level:4},{value:".id",id:"id",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-2",level:4},{value:".send()",id:"send",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-3",level:4},{value:".status",id:"status",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-4",level:4},{value:".terminate()",id:"terminate",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-5",level:4},{value:".url",id:"url",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E-6",level:4}];function x(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WebSocket"})," \u30AF\u30E9\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30B5\u30FC\u30D0\u30FC\u3068\u306E WebSocket \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u3092\u958B\u3044\u3066\u3001\u30C7\u30FC\u30BF\u3092\u9001\u53D7\u4FE1\u3057\u3001\u63A5\u7D9A\u3092\u9589\u3058\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"WebSocket\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u63A5\u7D9A\u306F\u3001\u305F\u3068\u3048\u3070\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u8CA1\u52D9\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u3057\u305F\u308A\u3001\u30C1\u30E3\u30C3\u30C8\u3067\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u53D7\u4FE1\u3057\u305F\u308A\u3059\u308B\u306E\u306B\u4FBF\u5229\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u3001\u57FA\u672C\u7684\u306A WebSocket\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["WebSocket \u30A4\u30D9\u30F3\u30C8\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3092\u542B\u3080 ",(0,r.jsx)(n.code,{children:"WSConnectionHandler"})," \u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u3092\u4F5C\u6210\u3057\u307E\u3059:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler \u30AF\u30E9\u30B9\n\nClass constructor\n\nFunction onMessage($ws : 4D.WebSocket; $event : Object)\n   ALERT($event.data)\n\nFunction onTerminate($ws : 4D.WebSocket; $event : Object)\n   ALERT("\u63A5\u7D9A\u3092\u7D42\u4E86\u3057\u307E\u3057\u305F")\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"4D.WebSocket \u3092\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u5316\u3057\u3066\u30014D\u30D5\u30A9\u30FC\u30E0\u304B\u3089 WebSocket\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3057\u307E\u3059:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"Form.webSocket:=4D.WebSocket.new($wssUrl; cs.WSConnectionHandler.new())\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"4D\u30D5\u30A9\u30FC\u30E0\u304B\u3089 WebSocket\u30B5\u30FC\u30D0\u30FC\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u307E\u3059:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Form.webSocket.send("Hello world")\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"websocket-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8",children:"WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"WebSocket\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3068\u6A5F\u80FD\u3092\u63D0\u4F9B\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#datatype",children:[(0,r.jsx)(n.strong,{children:".dataType"})," : Text"]}),(0,r.jsx)(n.br,{}),"\u30EC\u30B9\u30DD\u30F3\u30B9\u672C\u6587\u306E\u30C7\u30FC\u30BF\u578B\u3067\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#handler",children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),(0,r.jsx)(n.br,{}),"\u63A5\u7D9A\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u305F ",(0,r.jsx)(n.code,{children:"connectionHandler"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30A2\u30AF\u30BB\u30B5\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#id",children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),(0,r.jsx)(n.br,{}),"\u63A5\u7D9A\u306E\u4E00\u610F\u306A\u8B58\u5225\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#send",children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),(0,r.jsx)(n.br,{}),"\u5B9A\u7FA9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u578B (Text\u3001Blob\u3001\u307E\u305F\u306F Object) \u3067\u3001WebSocket \u30B5\u30FC\u30D0\u30FC\u306B ",(0,r.jsx)(n.em,{children:"message"})," \u3092\u9001\u4FE1\u3057\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#status",children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),(0,r.jsx)(n.br,{}),'\u73FE\u5728\u306E\u63A5\u7D9A\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u683C\u7D0D\u3057\u307E\u3059 ("Connecting"\u3001"Closing"\u3001"Closed"\u3001"Connected" \u306E\u3044\u305A\u308C\u304B)']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#terminate",children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"reason"})," : Text } } )"]}),(0,r.jsx)(n.br,{}),"\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"code"})," \u304A\u3088\u3073 ",(0,r.jsx)(n.em,{children:"reason"})," \u5F15\u6570\u3068\u3068\u3082\u306B\u3001WebSocket \u63A5\u7D9A\u3092\u9589\u3058\u307E\u3059"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#url",children:[(0,r.jsx)(n.strong,{children:".url"})," : Text"]}),(0,r.jsx)(n.br,{}),"WebSocket \u304C\u63A5\u7D9A\u3057\u305F URL \u3092\u683C\u7D0D\u3057\u307E\u3059"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4dwebsocketnew",children:"4D.WebSocket.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R3"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"connectionHandler"})," \u3067 ",(0,r.jsx)(n.code,{children:"headers"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30B5\u30DD\u30FC\u30C8"]})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.WebSocket.new"}),"( ",(0,r.jsx)(n.em,{children:"url"})," : Text { ; ",(0,r.jsx)(n.em,{children:"connectionHandler"})," : Object } ) : 4D.WebSocket"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"url"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"\u63A5\u7D9A\u5148\u306E URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#connectionhandler-parameter",children:"connectionHandler"})}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"WebSocket\u7528\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3092\u5BA3\u8A00\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"4D.WebSocket"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["\u65B0\u3057\u3044 ",(0,r.jsx)(n.a,{href:"#websocket-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"4D.WebSocket.new()"})," \u95A2\u6570\u306F\u3001",(0,r.jsx)(n.em,{children:"url"})," \u3067\u6307\u5B9A\u3057\u305F\u30A2\u30C9\u30EC\u30B9\u306E WebSocket\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3055\u308C\u305F\u65B0\u3057\u3044 ",(0,r.jsxs)(n.a,{href:"#websocket-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:[(0,r.jsx)(n.code,{children:"4D.WebSocket"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"]})," \u3092\u4F5C\u6210\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002 ",(0,r.jsx)(n.code,{children:"4D.WebSocket"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u3068\u306E WebSocket\u63A5\u7D9A\u306E\u4F5C\u6210\u3068\u7BA1\u7406\u3001\u304A\u3088\u3073\u30C7\u30FC\u30BF\u306E\u9001\u53D7\u4FE1\u306E\u305F\u3081\u306E API \u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"url"}),"\u306B\u306F\u3001WebSocket\u30B5\u30FC\u30D0\u30FC\u304C\u5FDC\u7B54\u3059\u308B URL \u3092\u6E21\u3057\u307E\u3059\u3002 \u4EE5\u4E0B\u306E URL\u30D1\u30BF\u30FC\u30F3\u304C\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6A19\u6E96\u63A5\u7D9A\u7528: ",(0,r.jsx)(n.code,{children:"ws://host[:port]path[?query]"})]}),"\n",(0,r.jsxs)(n.li,{children:["TLS\u30BB\u30AD\u30E5\u30A2\u63A5\u7D9A\u7528: ",(0,r.jsx)(n.code,{children:"wss://host[:port]path[?query]"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u7D9A\u3067\u304D\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.code,{children:"null"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u8FD4\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059 (\u3053\u306E\u30A8\u30E9\u30FC\u306F ",(0,r.jsx)(n.code,{children:"ON ERR CALL"})," \u3067\u5B9F\u88C5\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u30A4\u30F3\u30BF\u30FC\u30BB\u30D7\u30C8\u3067\u304D\u307E\u3059)\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"connectionhandler-\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC",children:[(0,r.jsx)(n.em,{children:"connectionHandler"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"connectionHandler"})," \u306B\u306F\u3001\u63A5\u7D9A\u30A4\u30D9\u30F3\u30C8\u306B\u5FDC\u3058\u3066\u547C\u3073\u51FA\u3055\u308C\u308B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306E\u307B\u304B\u3001\u51E6\u7406\u3059\u308B\u30C7\u30FC\u30BF\u578B\u3084\u30D8\u30C3\u30C0\u30FC\u3092\u542B\u3080\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306F\u3001\u63A5\u7D9A\u3092\u958B\u59CB\u3057\u305F\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30EF\u30FC\u30AB\u30FC\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u81EA\u52D5\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30EF\u30FC\u30AB\u30FC\u304C\u9589\u3058\u3089\u308C\u3066\u3044\u306A\u3044\u9650\u308A\u3001WebSocket \u306F\u6709\u52B9\u3067\u3059\u3002"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onMessage"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/ja/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["WebSocket \u30C7\u30FC\u30BF\u7528\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3002 WebSocket \u304C\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u3059\u308B\u305F\u3073\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002 \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306F\u4EE5\u4E0B\u306E\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (text): \u5E38\u306B "message"']}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.data"})," (text, BLOB, \u307E\u305F\u306F object\u3002",(0,r.jsx)(n.code,{children:"dataType"})," \u53C2\u7167): \u53D7\u4FE1\u30C7\u30FC\u30BF"]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onError"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/ja/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["\u5B9F\u884C\u30A8\u30E9\u30FC\u7528\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3002 \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306F\u4EE5\u4E0B\u306E\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (text): \u5E38\u306B "error"']}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.errors"}),": \u5B9F\u884C\u30A8\u30E9\u30FC\u306E\u5834\u5408\u30014D\u30A8\u30E9\u30FC\u30B9\u30BF\u30C3\u30AF\u306E\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3002",(0,r.jsxs)(n.ul,{children:[(0,r.jsx)(n.li,{children:"[].errCode (number): 4D\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9"}),(0,r.jsx)(n.li,{children:"[].message (text): 4D\u30A8\u30E9\u30FC\u306E\u8AAC\u660E"}),(0,r.jsx)(n.li,{children:"[].componentSignature (text) - \u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u305F\u5185\u90E8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u7F72\u540D"})]})]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onTerminate"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/ja/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["WebSocket \u304C\u7D42\u4E86\u3057\u305F\u6642\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3002 \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306F\u4EE5\u4E0B\u306E\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsxs)(n.ul,{children:[(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.code"})," (number\u3001\u8AAD\u307F\u53D6\u308A\u5C02\u7528): \u7B26\u53F7\u306A\u3057\u77ED\u6574\u6570\u578B\u3067\u3001\u30B5\u30FC\u30D0\u30FC\u304B\u3089\u9001\u3089\u308C\u305F\u30AF\u30ED\u30FC\u30BA\u30B3\u30FC\u30C9\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.reason"})," (text\u3001\u8AAD\u307F\u53D6\u308A\u5C02\u7528): \u30B5\u30FC\u30D0\u30FC\u304C\u63A5\u7D9A\u3092\u5207\u65AD\u3057\u305F\u7406\u7531\u3002 \u3053\u308C\u306F\u3001\u5BFE\u8C61\u306E\u30B5\u30FC\u30D0\u30FC\u3068\u30B5\u30D6\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u56FA\u6709\u306E\u3082\u306E\u3067\u3059\u3002"]})]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onOpen"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/ja/API/FunctionClass",children:"Function"})}),(0,r.jsxs)(n.td,{children:["WebSocket \u304C\u958B\u59CB\u3057\u305F\u6642\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3002 \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u306F\u4EE5\u4E0B\u306E\u5F15\u6570\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059:",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$1"}),": WebSocket \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"]}),(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2"}),": Object"]}),(0,r.jsx)(n.ul,{children:(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$2.type"}),' (text): \u5E38\u306B "open"']})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataType"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:'\u53D7\u4FE1\u307E\u305F\u306F\u9001\u4FE1\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306E\u578B\u3002 \u53EF\u80FD\u306A\u5024: "text" (\u30C7\u30D5\u30A9\u30EB\u30C8), "blob", "object"\u3002 "text" = utf-8'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headers"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["WebSocket \u306E\u30D8\u30C3\u30C0\u30FC\u3002",(0,r.jsxs)(n.li,{children:["\u6A19\u6E96\u7684\u306A key \u5272\u308A\u5F53\u3066\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9:",(0,r.jsx)(n.code,{children:" headers.*key*:=*value*"})," (\u540C\u3058 key \u3092\u8907\u6570\u6307\u5B9A\u3059\u308B\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"value"})," \u306B\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059)"]}),(0,r.jsxs)(n.li,{children:["Cookie\u5272\u308A\u5F53\u3066\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9 (\u7279\u5B9A\u306E\u5834\u5408): ",(0,r.jsx)(n.code,{children:'headers.Cookie:="*name*=*value* {; *name2*=*value2*{; ... } }"'})]})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306F\u3001\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u547C\u3073\u51FA\u3057\u306E\u6D41\u308C\u3067\u3059:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onOpen"})," \u306F 1\u56DE\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onMessage"})," \u304C 0\u56DE\u4EE5\u4E0A\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onError"})," \u304C 0\u56DE\u307E\u305F\u306F 1\u56DE\u5B9F\u884C\u3055\u308C\u307E\u3059 (\u51E6\u7406\u3092\u505C\u6B62\u3057\u307E\u3059)\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTerminate"})," \u306F\u5E38\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"WSConnectionHandler"})," \u30E6\u30FC\u30B6\u30FC\u30AF\u30E9\u30B9\u3067\u30D8\u30C3\u30C0\u30FC\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// WSConnectionHandler \u30AF\u30E9\u30B9\n\nClass constructor($myToken:Text)\n\n// \u30B5\u30FC\u30D0\u30FC\u306B\u9001\u4FE1\u3059\u308B\u30D8\u30C3\u30C0\u30FC\u3092\u4F5C\u6210\u3057\u307E\u3059\nThis.headers:=New object("x-authorization";$myToken)\n// 2\u3064\u306E Cookie \u3092\u8A2D\u5B9A\u3057\u307E\u3059\nThis.headers.Cookie:="yummy_cookie=choco; tasty_cookie=strawberry"\n...\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"datatype",children:".dataType"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".dataType"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".dataType"}),' \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u30EC\u30B9\u30DD\u30F3\u30B9\u672C\u6587\u306E\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002 "text"\u3001"blob"\u3001"object" \u306E\u3044\u305A\u308C\u304B\u3067\u3059\u3002']}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:".handler"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".handler"})," : Object"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-1",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".handler"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u63A5\u7D9A\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u4F7F\u7528\u3055\u308C\u305F ",(0,r.jsx)(n.code,{children:"connectionHandler"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30A2\u30AF\u30BB\u30B5\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"id",children:".id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".id"})," : Integer"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-2",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".id"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u63A5\u7D9A\u306E\u4E00\u610F\u306A\u8B58\u5225\u5B50\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"send",children:".send()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Blob )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".send"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text, Blob, Object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"\u9001\u4FE1\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-3",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".send()"})," \u95A2\u6570\u306F\u3001\u5B9A\u7FA9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u578B (Text\u3001Blob\u3001\u307E\u305F\u306F Object) \u3067\u3001WebSocket \u30B5\u30FC\u30D0\u30FC\u306B ",(0,r.jsx)(n.em,{children:"message"})," \u3092\u9001\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u30E1\u30C3\u30BB\u30FC\u30B8"})," \u306E\u578B\u306B\u3088\u3063\u3066\u3001\u4EE5\u4E0B\u306E\u5185\u5BB9\u304C\u9001\u4FE1\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"UTF-8 \u306E\u30C6\u30AD\u30B9\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BLOB"}),(0,r.jsx)(n.td,{children:"\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsxs)(n.td,{children:["JSON UTF-8 \u306E\u30C6\u30AD\u30B9\u30C8 (",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page1217.html",children:(0,r.jsx)(n.code,{children:"JSON Stringify"})})," \u3068\u540C\u3058\u7D50\u679C)\u3002"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"status",children:".status"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".status"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-4",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".status"}),' \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001\u73FE\u5728\u306E\u63A5\u7D9A\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u683C\u7D0D\u3057\u307E\u3059 ("Connecting"\u3001"Closing"\u3001"Closed"\u3001"Connected" \u306E\u3044\u305A\u308C\u304B)\u3002']}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"terminate",children:".terminate()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".terminate"}),"( { ",(0,r.jsx)(n.em,{children:"code"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"reason"})," : Text } } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"\u63A5\u7D9A\u304C\u5207\u65AD\u3055\u308C\u308B\u7406\u7531\u3092\u793A\u3059\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"reason"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"\u63A5\u7D9A\u304C\u5207\u65AD\u3055\u308C\u308B\u7406\u7531\u3092\u8AAC\u660E\u3059\u308B\u30C6\u30AD\u30B9\u30C8"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-5",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".terminate()"})," \u95A2\u6570\u306F\u3001\u4EFB\u610F\u306E ",(0,r.jsx)(n.em,{children:"code"})," \u304A\u3088\u3073 ",(0,r.jsx)(n.em,{children:"reason"})," \u5F15\u6570\u3068\u3068\u3082\u306B\u3001WebSocket \u63A5\u7D9A\u3092\u9589\u3058\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"code"})," \u306B\u306F\u3001\u63A5\u7D9A\u3092\u9589\u3058\u308B\u7406\u7531\u3092\u8AAC\u660E\u3059\u308B\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (",(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5",children:"RFC6455 \u306E WebSocket Connection Close Code"})," \u3082\u53C2\u7167\u304F\u3060\u3055\u3044):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6307\u5B9A\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u63A5\u7D9A\u306E\u30AF\u30ED\u30FC\u30BA\u30B3\u30FC\u30C9\u306F\u81EA\u52D5\u7684\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059: \u901A\u5E38\u7D42\u4E86\u306E\u5834\u5408\u306F 1000\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306F\u3001\u63A5\u7D9A\u304C\u5207\u65AD\u3055\u308C\u305F\u5B9F\u969B\u306E\u7406\u7531\u3092\u793A\u3059 1001\u301C1015 \u306E\u6A19\u6E96\u5024\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6307\u5B9A\u3055\u308C\u305F\u5834\u5408\u3001\u3053\u306E code \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306E\u5024\u306F\u81EA\u52D5\u8A2D\u5B9A\u306E\u5024\u3092\u30AA\u30FC\u30D0\u30FC\u30E9\u30A4\u30C9\u3057\u307E\u3059\u3002 \u5024\u306F\u6574\u6570\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002 1000\u3001\u307E\u305F\u306F 3000-4999 \u306E\u7BC4\u56F2\u306E\u30AB\u30B9\u30BF\u30E0\u30B3\u30FC\u30C9\u304C\u5229\u7528\u3067\u304D\u307E\u3059\u3002 ",(0,r.jsx)(n.em,{children:"code"})," \u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u306F\u3001",(0,r.jsx)(n.em,{children:"reason"})," \u306E\u5024\u3082\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"reason"})," \u306B\u306F\u3001\u63A5\u7D9A\u3092\u9589\u3058\u308B\u7406\u7531\u3092\u8AAC\u660E\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"url",children:".url"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".url"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E-6",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".url"})," \u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u3001WebSocket \u304C\u63A5\u7D9A\u3057\u305F URL \u3092\u683C\u7D0D\u3057\u307E\u3059\u3002 \u3053\u308C\u306F\u3001",(0,r.jsx)(n.a,{href:"#4dwebsocketnew",children:(0,r.jsx)(n.code,{children:"new()"})})," \u95A2\u6570\u306B\u6E21\u3057\u305F URL \u3068\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F \u8AAD\u307F\u53D6\u308A\u5C02\u7528 \u3067\u3059\u3002"})]})}function j(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var d=s(667294);let r={},c=d.createContext(r);function l(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);