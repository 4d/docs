"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19462"],{358988:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>c,assets:()=>l,toc:()=>h,contentTitle:()=>i});var c=JSON.parse('{"id":"commands-legacy/web-service-call","title":"WEB SERVICE CALL","description":"WEB SERVICE CALL ( accessURL ; soapAction ; methodName ; nameSpace {; complexType {; *}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-call.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-call","permalink":"/docs/ja/20-R7/commands/web-service-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-call","title":"WEB SERVICE CALL","slug":"/commands/web-service-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE AUTHENTICATE","permalink":"/docs/ja/20-R7/commands/web-service-authenticate"},"next":{"title":"WEB SERVICE Get info","permalink":"/docs/ja/20-R7/commands/web-service-get-info"}}'),r=s("785893"),t=s("250065");let d={id:"web-service-call",title:"WEB SERVICE CALL",slug:"/commands/web-service-call",displayed_sidebar:"docs"},i=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"RPC\u30E2\u30FC\u30C9\u3001\u30B7\u30F3\u30D7\u30EBinput\u3068output",id:"rpc\u30E2\u30FC\u30C9\u30B7\u30F3\u30D7\u30EBinput\u3068output",level:3},{value:"RPC\u30E2\u30FC\u30C9\u3001\u8907\u5408input\u3068\u30B7\u30F3\u30D7\u30EBoutput",id:"rpc\u30E2\u30FC\u30C9\u8907\u5408input\u3068\u30B7\u30F3\u30D7\u30EBoutput",level:3},{value:"RPC\u30E2\u30FC\u30C9\u3001\u30B7\u30F3\u30D7\u30EBinput\u3068\u8907\u5408output",id:"rpc\u30E2\u30FC\u30C9\u30B7\u30F3\u30D7\u30EBinput\u3068\u8907\u5408output",level:3},{value:"RPC\u30E2\u30FC\u30C9\u3001\u8907\u5408input\u3068output",id:"rpc\u30E2\u30FC\u30C9\u8907\u5408input\u3068output",level:3},{value:"DOC\u30E2\u30FC\u30C9",id:"doc\u30E2\u30FC\u30C9",level:3},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function E(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SERVICE CALL"})," ( ",(0,r.jsx)(n.em,{children:"accessURL"})," ; ",(0,r.jsx)(n.em,{children:"soapAction"})," ; ",(0,r.jsx)(n.em,{children:"methodName"})," ; ",(0,r.jsx)(n.em,{children:"nameSpace"})," {; ",(0,r.jsx)(n.em,{children:"complexType"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessURL"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Web\u30B5\u30FC\u30D3\u30B9\u3078\u306E\u30A2\u30AF\u30BB\u30B9URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"soapAction"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"SOAPAction\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nameSpace"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u540D\u524D\u7A7A\u9593"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"complexType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u8907\u5408\u30BF\u30A4\u30D7\u306E\u8A2D\u5B9A (\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30B7\u30F3\u30D7\u30EB\u30BF\u30A4\u30D7)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u63A5\u7D9A\u3092\u7D42\u4E86\u3057\u306A\u3044"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB SERVICE CALL"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001HTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u308B\u3053\u3068\u3067Web\u30B5\u30FC\u30D3\u30B9\u3092\u547C\u3073\u51FA\u3059\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u306F\u3001\u4E8B\u524D\u306B",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3057\u305FSOAP\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E00\u9023\u306E",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"\u30B3\u30DE\u30F3\u30C9\u547C\u3073\u51FA\u3057\u306F\u3001\u65B0\u3057\u3044\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",(0,r.jsx)(n.strong,{children:"WEB SERVICE CALL"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u306F\u307E\u305F\u3001\u4EE5\u524D\u306B\u547C\u3073\u51FA\u3057\u305FWeb\u30B5\u30FC\u30D3\u30B9\u306E\u7D50\u679C\u3092\u6D88\u53BB\u3057\u3001\u65B0\u3057\u3044\u7D50\u679C\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"accessURL"})," \u306B\u306F\u3001Web\u30B5\u30FC\u30D3\u30B9\u3078\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u5B8C\u5168\u306AURL\u3092\u6E21\u3057\u307E\u3059 (\u3053\u306EURL\u3092Web\u30B5\u30FC\u30D3\u30B9\u3092\u8AAC\u660E\u3059\u308BWSDL\u30D5\u30A1\u30A4\u30EB\u306EURL\u3068\u6DF7\u540C\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044) \u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["****\u4FDD\u8B77\u30E2\u30FC\u30C9\u3067\u306E\u30A2\u30AF\u30BB\u30B9(SSL)**: SSL\u3092\u7528\u3044\u3066\u3001\u4FDD\u8B77\u30E2\u30FC\u30C9\u3067Web\u30B5\u30FC\u30D3\u30B9\u3092\u4F7F\u7528\u3057\u305F\u3044\u5834\u5408\u3001",(0,r.jsx)(n.a,{href:"http://%E3%81%AE%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%A8%E3%81%97%E3%81%A6URL%E3%81%AE%E5%89%8D%E3%81%ABhttps://%E3%82%92%E6%B8%A1%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E3%81%93%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%AB%E3%82%88%E3%82%8A%E3%80%81%E4%BF%9D%E8%AD%B7%E3%83%A2%E3%83%BC%E3%83%89%E3%81%A7%E3%81%AE%E8%87%AA%E5%8B%95%E6%8E%A5%E7%B6%9A%E3%81%8C%E5%8F%AF%E8%83%BD%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%E3%81%AA%E3%81%8A%E3%80%81%E3%81%93%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%AF%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E8%AA%8D%E8%A8%BC%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99(",children:"http://\u306E\u4EE3\u308F\u308A\u3068\u3057\u3066URL\u306E\u524D\u306Bhttps://\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u3001\u4FDD\u8B77\u30E2\u30FC\u30C9\u3067\u306E\u81EA\u52D5\u63A5\u7D9A\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002\u306A\u304A\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30FC\u30D0\u30FC\u8A8D\u8A3C\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059("})," ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"}),' \u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002\u3053\u306E\u8A8D\u8A3C\u304C\u6709\u52B9\u3067\u306A\u3044(\u5931\u52B9\u3057\u3066\u3044\u308B\u304B\u7121\u52B9\u3067\u3042\u308B)\u5834\u5408\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC901 "Invalid server certificate" \u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F ',(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/on-err-call",children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u306B\u5B9F\u88C5\u3055\u308C\u305F\u30A8\u30E9\u30FC\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u308A\u5272\u308A\u8FBC\u307F\u53EF\u80FD\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"soapAction"}),' \u306B\u306F\u3001\u30EA\u30AF\u30A8\u30B9\u30C8\u306ESOAPAction\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u4E00\u822C\u7684\u306B"ServiceName#MethodName"\u5024\u3092\u542B\u307F\u307E\u3059\u3002']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"methodName"})," \u306B\u306F\u3001 (Web\u30B5\u30FC\u30D3\u30B9\u306B\u5C5E\u3059\u308B) \u5B9F\u884C\u3057\u305F\u3044\u30EA\u30E2\u30FC\u30C8\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"namespace"})," \u306B\u306F\u3001SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u4F7F\u7528\u3059\u308BXML\u540D\u524D\u7A7A\u9593\u3092\u6E21\u3057\u307E\u3059\u3002XML\u540D\u524D\u7A7A\u9593\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u30014D\u306EDesign Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"complexType"})," \u306F\u3001(",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"\u3068",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F) \u9001\u4FE1\u304A\u3088\u3073\u53D7\u4FE1\u3059\u308BWeb\u30B5\u30FC\u30D3\u30B9\u5F15\u6570\u306E\u8A2D\u5B9A\u3092\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"complexType"})," \u306E\u5024\u306F\u3001Web\u30B5\u30FC\u30D3\u30B9\u306E\u516C\u958B\u30E2\u30FC\u30C9 (DOC \u307E\u305F\u306F RPC\u30014D\u306EDesign Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044) \u3068\u305D\u306E\u5F15\u6570\u306B\u3088\u308A\u7570\u306A\u308A\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"complexType"})," \u306B\u306F*Web Services (Client)*\u30C6\u30FC\u30DE\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E1\u3064\u3092\u5FC5\u305A\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5024"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web Service dynamic"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web Service manual"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web Service manual in"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Web Service manual out"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:'\u305D\u308C\u305E\u308C\u306E\u5B9A\u6570\u306F\u3001Web\u30B5\u30FC\u30D3\u30B9"\u8A2D\u5B9A"\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002\u8A2D\u5B9A\u306F\u516C\u958B\u30E2\u30FC\u30C9 (RPC/DOC) \u3068\u5F15\u6570\u306E\u30BF\u30A4\u30D7 (\u5165\u51FA\u529B\u3001\u30B7\u30F3\u30D7\u30EB\u307E\u305F\u306F\u8907\u5408) \u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u8868\u3057\u307E\u3059\u3002'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u5F15\u6570 \u201Cinput\u201D \u307E\u305F\u306F \u201Coutput\u201D \u306E\u7279\u5FB4\u306F\u3001\u30D7\u30ED\u30AD\u30B7\u30E1\u30BD\u30C3\u30C9/Web\u30B5\u30FC\u30D3\u30B9\u306E\u8996\u70B9\u304B\u3089\u8A55\u4FA1\u3055\u308C\u308B\u3068\u3044\u3046\u3053\u3068\u3092\u899A\u3048\u3066\u304A\u3044\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5F15\u6570 \u201Cinput\u201D \u306F\u30D7\u30ED\u30AD\u30B7\u30E1\u30BD\u30C3\u30C9\u306B\u3001\u305D\u3057\u3066Web\u30B5\u30FC\u30D3\u30B9\u3078\u6E21\u3055\u308C\u308B\u5024\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5F15\u6570 \u201Coutput\u201D \u306F\u3001Web\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u3001\u305D\u3057\u3066\u30D7\u30ED\u30AD\u30B7\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u8FD4\u3055\u308C\u307E\u3059 (\u4E00\u822C\u7684\u306B$0\u7D4C\u7531) \u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u80FD\u3068\u306A\u308B\u8A2D\u5B9A\u3068\u5BFE\u5FDC\u3059\u308B\u5B9A\u6570\u306E\u3059\u3079\u3066\u3092\u4EE5\u4E0B\u306E\u30EA\u30B9\u30C8\u306B\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Input\u5F15\u6570"})}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Output\u5F15\u6570"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u30B7\u30F3\u30D7\u30EB"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u8907\u5408"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u30B7\u30F3\u30D7\u30EB"})}),(0,r.jsx)(n.td,{children:"Web Service Dynamic"}),(0,r.jsx)(n.td,{children:"Web Service Manual In"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"(RPC\u30E2\u30FC\u30C9)"}),(0,r.jsx)(n.td,{children:"(RPC\u30E2\u30FC\u30C9)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u8907\u5408"})}),(0,r.jsx)(n.td,{children:"Web Service Manual Out"}),(0,r.jsx)(n.td,{children:"Web Service Manual"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"(RPC\u30E2\u30FC\u30C9)"}),(0,r.jsx)(n.td,{children:"(RPC\u307E\u305F\u306FDOC\u30E2\u30FC\u30C9)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528\u3059\u308B\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u3001\u3053\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u5185\u5BB9\u3092\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3059\u308B\u304B\u306F\u958B\u767A\u8005\u306B\u4EFB\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u305D\u306E\u305F\u3081\u3001\u4EE5\u4E0B\u3067\u8AAC\u660E\u3059\u308B5\u3064\u306E\u8A2D\u5B9A\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u5834\u5408\u306B\u304A\u3044\u3066\u30014D\u306FWeb\u30B5\u30FC\u30D3\u30B9\u3078\u9001\u3089\u308C\u308BSOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3084\u305D\u306E\u30A8\u30F3\u30D9\u30ED\u30FC\u30D6\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u8907\u5408XML\u30BF\u30A4\u30D7\u3067\u3042\u308B\u306B\u3082\u95A2\u308F\u3089\u305A\u30014D\u306F\u30B7\u30F3\u30D7\u30EB\u30BF\u30A4\u30D7\u3068\u3057\u3066\u30C7\u30FC\u30BF\u306E\u914D\u5217\u3092\u51E6\u7406\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"rpc\u30E2\u30FC\u30C9\u30B7\u30F3\u30D7\u30EBinput\u3068output",children:"RPC\u30E2\u30FC\u30C9\u3001\u30B7\u30F3\u30D7\u30EBinput\u3068output"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u3082\u4F7F\u3044\u3084\u3059\u3044\u306E\u306F\u3053\u306E\u8A2D\u5B9A\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"complexType"})," \u306B\u306F\u5B9A\u6570 Web Service Dynamic \u304C\u542B\u307E\u308C\u308B\u304B\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u9001\u3089\u308C\u305F\u5F15\u6570\u3068\u53D7\u3051\u53D6\u3063\u305F\u5FDC\u7B54\u306F\u3001\u524D\u51E6\u7406\u3055\u308C\u308B\u3053\u3068\u306A\u304F\u76F4\u63A5\u7684\u306B\u51E6\u7406\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"rpc\u30E2\u30FC\u30C9\u8907\u5408input\u3068\u30B7\u30F3\u30D7\u30EBoutput",children:"RPC\u30E2\u30FC\u30C9\u3001\u8907\u5408input\u3068\u30B7\u30F3\u30D7\u30EBoutput"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u5834\u5408\u3001\u5F15\u6570 ",(0,r.jsx)(n.em,{children:"complexType"})," \u306B\u306F\u5B9A\u6570 Web Service Manual In \u304C\u542B\u307E\u308C\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u3067\u306FWeb\u30B5\u30FC\u30D3\u30B9\u306B\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066BLOB\u306E\u5F62\u3067XML\u30BD\u30FC\u30B9\u306E\u8981\u7D20\u3092\u5FC5\u305A \u201C\u624B\u52D5\u3067\u201D \u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u521D\u306EBLOB\u3092\u6709\u52B9\u306AXML\u8981\u7D20\u3068\u3057\u3066\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3059\u308B\u304B\u3057\u306A\u3044\u304B\u3092\u6C7A\u5B9A\u3059\u308B\u306E\u306F\u3001\u30E6\u30FC\u30B6\u6B21\u7B2C\u3067\u3059\u3002\u6700\u521D\u306E\u8981\u7D20\u3068\u3057\u3066\u3001\u3053\u306EBLOB\u306B\u306F\u3001\u6700\u7D42\u30EA\u30AF\u30A8\u30B9\u30C8\u306E  \u8981\u7D20\u306E\u6700\u521D\u306B\u73FE\u308C\u308B \u201Cchild\u201D \u8981\u7D20\u304C\u542B\u307E\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Blob\n\xa0var $0 : Boolean\n\xa0WEB SERVICE SET PARAMETER("MyXMLBlob";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual in)\n\xa0WEB SERVICE GET RESULT($0;"MyOutputVar";*)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rpc\u30E2\u30FC\u30C9\u30B7\u30F3\u30D7\u30EBinput\u3068\u8907\u5408output",children:"RPC\u30E2\u30FC\u30C9\u3001\u30B7\u30F3\u30D7\u30EBinput\u3068\u8907\u5408output"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u5834\u5408\u3001\u5F15\u6570",(0,r.jsx)(n.em,{children:"complexType"}),"\u306B\u306F\u3001\u5B9A\u6570Web Service Manual Out\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u305D\u308C\u305E\u308C\u306E\u5F15\u6570output\u306FBLOB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308BXML\u8981\u7D20\u306E\u5F62\u3067Web\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),"\u30B3\u30DE\u30F3\u30C9. \u3092\u4F7F\u7528\u3057\u3066\u3053\u306E\u5F15\u6570\u3092\u53D6\u308A\u51FA\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u53D7\u3051\u53D6\u3063\u305FBLOB\u306E\u5185\u5BB9\u30924D\u306E XML\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u89E3\u6790\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Boolean\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MyInputVar";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual out)\n\xa0\n\xa0WEB SERVICE GET RESULT($0;"MyXMLOutput";*)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"rpc\u30E2\u30FC\u30C9\u8907\u5408input\u3068output",children:"RPC\u30E2\u30FC\u30C9\u3001\u8907\u5408input\u3068output"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"complexType"})," \u5F15\u6570\u306B\u306FWeb Service Manual\u5B9A\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u305D\u308C\u305E\u308C\u306Einput\u3068output\u5F15\u6570\u306F\u3001\u5148\u306B\u8AAC\u660E\u3057\u305F2\u3064\u306E\u8A2D\u5B9A\u306B\u5F93\u3044\u3001XML\u8981\u7D20\u306E\u5F62\u3067BLOB\u306B\u683C\u7D0D\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002 \u4F8B\u984C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0WEB SERVICE SET PARAMETER("MyXMLInputBlob";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual)\n\xa0WEB SERVICE GET RESULT($0;"MyXMLOutput";*)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"doc\u30E2\u30FC\u30C9",children:"DOC\u30E2\u30FC\u30C9"}),"\n",(0,r.jsxs)(n.p,{children:["DOC Web\u30B5\u30FC\u30D3\u30B9\u306E\u30D7\u30ED\u30AF\u30B7\u547C\u3073\u51FA\u3057\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u8907\u5408\u578BINPUT OUTPUT\u5F15\u6570\u3092\u4F7F\u7528\u3059\u308BRPC Web\u30B5\u30FC\u30D3\u30B9\u306E\u30D7\u30ED\u30AF\u30B7\u547C\u3073\u51FA\u3057\u30E1\u30BD\u30C3\u30C9\u3068\u540C\u69D8\u3067\u3059\u3002",(0,r.jsx)(n.br,{}),"\n\u3053\u308C\u30892\u3064\u306E\u8A2D\u5B9A\u306E\u552F\u4E00\u306E\u9055\u3044\u306F\u3001\u9001\u53D7\u4FE1\u3059\u308BBLOB\u5F15\u6570\u306EXML\u306E\u5185\u5BB9\u30EC\u30D9\u30EB\u306B\u3042\u308A\u307E\u3059\u30024D\u304B\u3089\u898B\u308B\u3068\u3001SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u69CB\u7BC9\u3068\u9001\u4FE1\u306F\u540C\u3058\u3082\u306E\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0SET WEB SERVICE PARAMETER("MyXMLInput";$1)\n\xa0WEB SERVICE CALL("http://my.domain.com/my_service";"MySoapAction";"TheMethod";"http://my.namespace.com/";Web Service manual)\n\xa0WEB SERVICE GET RESULT($0;"MyXMLOutput";*)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," DOC Web\u30B5\u30FC\u30D3\u30B9\u306E\u5834\u5408\u3001\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u308B\u6587\u5B57\u5217\u306E\u5024 (\u4E0A\u8A18\u306E\u201CMyXMLInput\u201D \u3068 \u201CMyXMLOutput\u201D) \u306F\u91CD\u8981\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6E21\u3059\u3053\u3068\u3055\u3048\u3067\u304D\u307E\u3059\u3002\u5B9F\u969B\u3001\u3053\u308C\u3089\u306E\u5024\u306FXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u542B\u3080SOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u306F\u4F7F\u7528\u3055\u308C\u307E\u305B\u3093\u3002\u306B\u3082\u304B\u304B \u308F\u3089\u305A\u3053\u308C\u3089\u306E\u5F15\u6570\u306F\u5FC5\u9808\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"DOC\u30E2\u30FC\u30C9 (\u307E\u305F\u306F\u8907\u5408\u30BF\u30A4\u30D7\u306ERPC\u30E2\u30FC\u30C9) \u3067\u516C\u958B\u3055\u308C\u305FWeb\u30B5\u30FC\u30D3\u30B9\u3092\u4F7F\u7528\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306B\u5F93\u3046\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Web\u30B5\u30FC\u30D3\u30B9\u30A6\u30A3\u30B6\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30D7\u30ED\u30AF\u30B7\u30E1\u30BD\u30C3\u30C9\u3092\u751F\u6210\u3059\u308B\u3002",(0,r.jsx)(n.br,{}),"\n\u30D7\u30ED\u30AF\u30B7\u30E1\u30BD\u30C3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059: ",(0,r.jsx)(n.em,{children:"$XMLresultBlob:=$DOCproxy_Method($XMLparamBlob)"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u30AA\u30F3\u30E9\u30A4\u30F3\u30C6\u30B9\u30C8\u306B\u3088\u308A\u3001Web\u30B5\u30FC\u30D3\u30B9\u306B\u9001\u4FE1\u3059\u308BSOAP\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u5185\u5BB9\u306B\u3064\u3044\u3066\u7FD2\u719F\u3059\u308B (\u4F8B\u3048\u3070*",(0,r.jsx)(n.a,{href:"http://soapclient.com/soaptest.html*)%E3%80%82%E3%81%93%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E3%83%84%E3%83%BC%E3%83%AB%E3%81%AF%E3%80%81Web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AEWSDL%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8D%E3%80%81HTML%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E4%BD%BF%E7%94%A8%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82",children:"http://soapclient.com/soaptest.html*)\u3002\u3053\u306E\u30BF\u30A4\u30D7\u306E\u30C4\u30FC\u30EB\u306F\u3001Web\u30B5\u30FC\u30D3\u30B9\u306EWSDL\u306B\u57FA\u3065\u304D\u3001HTML\u30C6\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"})]}),"\n",(0,r.jsx)(n.li,{children:"\u751F\u6210\u3055\u308C\u305FXML\u306E**\u306E\u7B2C\u4E00\u5B50\u8981\u7D20\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5B9F\u969B\u306E\u5F15\u6570\u5024\u3092XML\u30B3\u30FC\u30C9\u306B\u7F6E\u304F\u3053\u3068\u3092\u53EF\u80FD\u306B\u3059\u308B\u30E1\u30BD\u30C3\u30C9\u3092\u8A18\u8FF0\u3059\u308B\u3002\u3053\u306E\u30B3\u30FC\u30C9\u306F*$XMLparamBlob* BLOB\u306B\u7F6E\u304B\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30EC\u30B9\u30DD\u30F3\u30B9\u3092\u89E3\u6790\u3059\u308B\u306B\u306F\u3001\u30AA\u30F3\u30E9\u30A4\u30C6\u30B9\u30C8\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u8FD4\u3055\u308C\u308B\u8981\u7D20\u3092\u5B9A\u7FA9\u3057\u305FWSDL\u3092\u53C2\u7167\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u547C\u3073\u51FA\u3057\u3092\u6700\u9069\u5316\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u305D\u306E\u5B9F\u884C\u5F8C\u306B\u3001\u51E6\u7406\u306B\u3088\u308A\u4F7F\u7528\u3055\u308C\u308B\u63A5\u7D9A\u3092\u9589\u3058\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u6B21\u306E",(0,r.jsx)(n.strong,{children:"WEB SERVICE CALL"}),"\u306F * \u5F15\u6570\u304C\u6E21\u3055\u308C\u3066\u3044\u308C\u3070\u540C\u3058\u63A5\u7D9A\u3092\u518D\u5229\u7528\u3057\u307E\u3059\u3002\u63A5\u7D9A\u3092\u9589\u3058\u308B\u306B\u306F\u3001",(0,r.jsx)(n.strong,{children:"WEB SERVICE CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3092 * \u5F15\u6570\u306A\u3057\u3067\u547C\u3073\u51FA\u3057\u307E\u3059\u3002\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306B\u3088\u308A\u3001\u540C\u3058\u30B5\u30FC\u30D0\u4E0A\u306E\u8907\u6570\u306E\u7570\u306A\u308BWeb\u30B5\u30FC\u30D3\u30B9\u3092\u9023\u7D9A\u3057\u3066\u547C\u3073\u51FA\u3059\u3088\u3046\u306A\u51E6\u7406\u304C\u9AD8\u901F\u5316\u3055\u308C\u307E\u3059\u3002\u7279\u306BWAN\u74B0 \u5883 (\u4F8B\u3048\u3070\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u7D4C\u7531) \u306E\u5834\u5408\u306B\u9855\u8457\u3067\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306FWeb\u30B5\u30FC\u30D0\u306E\u201Ckeep-alive\u201D\u8A2D\u5B9A\u306B\u57FA\u3065\u304D\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u3067\u306F\u901A\u5E38\u63A5\u7D9A\u3054\u3068\u306E\u6700\u5927\u30EA\u30AF\u30A8\u30B9\u30C8\u6570\u3092\u8A2D\u5B9A\u3057\u3001\u30EA\u30AF\u30A8\u30B9 \u30C8\u3092\u62D2\u5426\u3059\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002\u4E00\u9023\u306E",(0,r.jsx)(n.strong,{children:"WEB SERVICE CALL"}),"\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3053\u306E\u6700\u5927\u6570\u306E\u5236\u9650\u306B\u9054\u3057\u305F\u5834\u5408\u3001\u307E\u305F\u306Fkeep-alive\u63A5\u7D9A\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u30014D\u306F\u65B0\u3057\u3044\u63A5\u7D9A\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u6B63\u3057\u304F\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3055\u308C\u3001Web\u30B5\u30FC\u30D3\u30B9\u304C\u305D\u308C\u3092\u53D7\u3051\u5165\u308C\u308B\u3068\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"778"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var c=s(667294);let r={},t=c.createContext(r);function d(e){let n=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);