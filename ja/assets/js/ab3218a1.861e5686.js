"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76277"],{191415:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-get-http-header","title":"WEB GET HTTP HEADER","description":"WEB GET HTTP HEADER ( header )WEB GET HTTP HEADER ( fieldArray ; valueArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/web-get-http-header.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-http-header","permalink":"/docs/ja/commands/web-get-http-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-http-header.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-get-http-header","title":"WEB GET HTTP HEADER","slug":"/commands/web-get-http-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET HTTP BODY","permalink":"/docs/ja/commands/web-get-http-body"},"next":{"title":"WEB GET OPTION","permalink":"/docs/ja/commands/web-get-option"}}'),t=s("785893"),d=s("250065");let l={id:"web-get-http-header",title:"WEB GET HTTP HEADER",slug:"/commands/web-get-http-header",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ( ",(0,t.jsx)(n.em,{children:"header"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ( ",(0,t.jsx)(n.em,{children:"fieldArray"})," ; ",(0,t.jsx)(n.em,{children:"valueArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"header|fieldArray"}),(0,t.jsx)(n.td,{children:"\u30C6\u30AD\u30B9\u30C8, \u30C6\u30AD\u30B9\u30C8\u914D\u5217"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8HTTP\u30D8\u30C3\u30C0\u307E\u305F\u306FHTTP\u30D8\u30C3\u30C0\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valueArray"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"HTTP\u30D8\u30C3\u30C0\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001 \u73FE\u5728\u51E6\u7406\u3055\u308C\u3066\u3044\u308B\u30EA\u30AF\u30A8\u30B9\u30C8\u306EHTTP\u30D8\u30C3\u30C0\u30FC\u3092\u542B\u30802\u3064\u306E\u914D\u5217\u3001\u307E\u305F\u306F\u6587\u5B57\u5217\u306E\u3044\u305A\u308C\u304B\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FWeb\u30D7\u30ED\u30BB\u30B9\u3067\u5B9F\u884C\u3055\u308C\u308B\u3059\u3079\u3066\u306E\u30E1\u30BD\u30C3\u30C9 ( '/4DACTION'...\u306B\u3088\u3063\u3066\u547C\u3073\u51FA\u3055\u308C\u308B\u30E1\u30BD\u30C3\u30C9\u3001",(0,t.jsx)(n.em,{children:"On Web Authentication\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u307E\u305F\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/commands/qr-set-destination",children:"QR SET DESTINATION"}),") \u5185\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"1\u756A\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9:"})," ",(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ",(0,t.jsx)(n.strong,{children:"(header)"}),(0,t.jsx)(n.br,{}),"\n\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u6B21\u306E\u7D50\u679C (\u4F8B) \u304C\u5909\u6570 ",(0,t.jsx)(n.em,{children:"header"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),'\n"GET /page.html HTTP/1.0[CRLF]User-Agent: browser[CRLF]Cookie: C=HELLO"']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Windows \u3068 Mac OS\u4E0A\u3067\u3001\u5404\u30D8\u30C3\u30C0\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306FCR+LF (\u30AD\u30E3\u30EA\u30C3\u30B8\u30EA\u30BF\u30FC\u30F3+\u30E9\u30A4\u30F3\u30D5\u30A3\u30FC\u30C9) \u30B7\u30FC\u30B1\u30F3\u30B9\u306B\u3088\u3063\u3066\u533A\u5207\u3089\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"2\u756A\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9:"})," ",(0,t.jsx)(n.strong,{children:"WEB GET HTTP HEADER"})," ",(0,t.jsx)(n.strong,{children:"(fieldArray; valueArray)"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u6B21\u306E\u7D50\u679C\u304C",(0,t.jsx)(n.em,{children:"fieldArray"})," \u3068 ",(0,t.jsx)(n.em,{children:"valueArray"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:'fieldArray{1} = "X-METHOD"'}),(0,t.jsx)(n.th,{children:'valueArray{1} = "GET" *'})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'fieldArray{2} = "X-URL"'}),(0,t.jsx)(n.td,{children:'valueArray{2} = "/page.html" *'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'fieldArray{3} = "X-VERSION"'}),(0,t.jsx)(n.td,{children:'valueArray{3} = "HTTP/1.0" *'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'fieldArray{4} = "User-Agent"'}),(0,t.jsx)(n.td,{children:'valueArray{4} = "browser"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:'fieldArray{5} = "Cookie"'}),(0,t.jsx)(n.td,{children:'valueArray{5} = "C=HELLO"'})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"* \u6700\u521D\u306E3\u3064\u306E\u30A2\u30A4\u30C6\u30E0\u306FHTTP\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u6700\u521D\u306E\u884C\u306E\u4E00\u90E8\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"HTTP\u6A19\u6E96\u306B\u6E96\u62E0\u3059\u308B\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u5E38\u306B\u82F1\u8A9E\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u3044\u304F\u3064\u304B\u306EHTTP\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u4EE5\u4E0B\u306E\u30EA\u30B9\u30C8\u306B\u793A\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Accept"}),": \u30D6\u30E9\u30A6\u30B6\u30FC\u304C\u8A31\u53EF\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Accept-Language"}),": \u30D6\u30E9\u30A6\u30B6\u30FC\u304C\u4F7F\u7528\u3059\u308B\u30E9\u30F3\u30B2\u30FC\u30B8\u3002\u30D6\u30E9\u30A6\u30B6\u30FC\u4E0A\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30E9\u30F3\u30B2\u30FC\u30B8\u3067Web\u30DA\u30FC\u30B8\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cookie"}),": cookies\u30EA\u30B9\u30C8"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"From"}),": \u30D6\u30E9\u30A6\u30B6\u30FC\u30E6\u30FC\u30B6\u30FCemail\u30A2\u30C9\u30EC\u30B9"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Host"}),": \u30B5\u30FC\u30D0\u30FC\u540D\u307E\u305F\u306F\u30A2\u30C9\u30EC\u30B9 (\u4F8B\u3048\u3070\u3001URL\u304C",(0,t.jsx)(n.a,{href:"http://mywebserver/mypage.html%E3%81%A8%E3%81%99%E3%82%8B%E3%81%A8%E3%80%81**Host**%E3%81%AFmywebserver%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99",children:"http://mywebserver/mypage.html\u3068\u3059\u308B\u3068\u3001**Host**\u306Fmywebserver\u3068\u306A\u308A\u307E\u3059"}),") \u3002\u540C\u3058IP\u30A2\u30C9\u30EC\u30B9\u3092\u793A\u3059\u8907\u6570\u306E\u540D\u524D\u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u30D0\u30FC\u30C1\u30E3\u30EB\u30DB\u30B9\u30C6\u30A3\u30F3\u30B0) \u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Referer"}),": \u305D\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u767A\u884C\u3057\u305F\u5143\u306EURL (\u4F8B\u3048\u3070\u3001",(0,t.jsx)(n.a,{href:"http://mywebserver/mypage1.html)%E3%80%82%E3%81%A4%E3%81%BE%E3%82%8A%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%83%BC%E3%81%AE**%E6%88%BB%E3%82%8B**%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%97%E3%81%9F%E9%9A%9B%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%82%8B%E3%83%9A%E3%83%BC%E3%82%B8%E3%80%82",children:"http://mywebserver/mypage1.html)\u3002\u3064\u307E\u308A\u30D6\u30E9\u30A6\u30B6\u30FC\u306E**\u623B\u308B**\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u969B\u306B\u8868\u793A\u3055\u308C\u308B\u30DA\u30FC\u30B8\u3002"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User-Agent"}),": \u30D6\u30E9\u30A6\u30B6\u30FC\u307E\u305F\u306F\u30D7\u30ED\u30AD\u30B7\u306E\u540D\u524D\u3068\u30D0\u30FC\u30B8\u30E7\u30F3\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u4EFB\u610F\u306EHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u30D8\u30C3\u30C0\u30FC\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// GetHTTPField\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0\xa0// GetHTTPField (Text) -> Text\n\xa0\xa0// GetHTTPField (HTTP header name) -> HTTP\u30D8\u30C3\u30C0\u30FC\u30B3\u30F3\u30C6\u30F3\u30C4\n\xa0\n\xa0var $0;$1 : Text\n\xa0var $vlItem : Integer\n\xa0ARRAY TEXT($names;0)\n\xa0ARRAY TEXT($values;0)\n\xa0$0:=""\n\xa0WEB GET HTTP HEADER($names;$values)\n\xa0$vlItem:=Find in array($names;$1)\n\xa0If($vlItem>0)\n\xa0\xa0\xa0\xa0$0:=$values{$vlItem}\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u8A18\u8FF0\u3057\u305F\u3089\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u547C\u3073\u51FA\u3057\u3092\u884C\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Cookie\u30D8\u30C3\u30C0\u30FC\u30B3\u30F3\u30C6\u30F3\u30C4\n\xa0$cookie:=GetHTTPField("Cookie")\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u30D6\u30E9\u30A6\u30B6\u30FC\u4E0A\u3067\u8A2D\u5B9A\u3055\u308C\u305F\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u5FDC\u3058\u3066\u3001\u7570\u306A\u308B\u30DA\u30FC\u30B8\u3092\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (\u4F8B\u3048\u3070\u3001On Web Connection \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9 \u306B\u304A\u3044\u3066) \u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$language:=GetHTTPField("Accept-Language")\n\xa0Case of\n\xa0\xa0\xa0\xa0:($language="@ja@")\xa0// \u65E5\u672C\u8A9E (ISO 639\u30EA\u30B9\u30C8\u3092\u53C2\u7167)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("index_ja.html")\n\xa0\xa0\xa0\xa0:($language="@sp@")\xa0// \u30B9\u30DA\u30A4\u30F3\u8A9E (ISO 639\u30EA\u30B9\u30C8\u3092\u53C2\u7167)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("index_es.html")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("index.html")\n\xa0End case\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"}),' Web\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u8907\u6570\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30E9\u30F3\u30B2\u30FC\u30B8\u306F"Accept-Language" \u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u30EA\u30B9\u30C8\u306B\u3055\u308C\u3001 ";" \u3067\u533A\u5207\u3089\u308C\u3066\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u6587\u5B57\u5217\u5185\u3067\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u4F4D\u7F6E\u306B\u5FDC\u3058\u3066\u3001\u305D\u306E\u512A\u5148\u9806\u4F4D\u304C\u5B9A\u7FA9\u3055\u308C\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u6587\u5B57\u5217\u5185\u3067\u306E\u30E9\u30F3\u30B2\u30FC\u30B8\u306E\u4F4D\u7F6E\u3092\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002']}),"\n",(0,t.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306F\u4EEE\u60F3\u30DB\u30B9\u30C8\u306E\u4F8B\u3067\u3059 (\u4F8B\u3048\u3070",(0,t.jsx)(n.a,{href:"/docs/ja/commands/qr-set-destination",children:"QR SET DESTINATION"}),'\u306B\u304A\u3044\u3066) \u3002\u6B21\u306E\u540D\u524D"home_site.com"\u3001"home_site1.com" \u3068 "home_site2.com" \u306F\u540C\u3058IP\u30A2\u30C9\u30EC\u30B9\u3001\u4F8B\u3048\u3070192.1.2.3\u3092\u6307\u3057\u3066\u3044\u308B\u3002']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$host:=GetHTTPField("Host")\n\xa0Case of\n\xa0\xa0\xa0\xa0:($host="www.site1.com")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("home_site1.com")\n\xa0\xa0\xa0\xa0:($host="www.site2.com")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("home_site2.com")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WEB SEND FILE("home_site.com")\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/web-set-http-header",children:"WEB SET HTTP HEADER"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"697"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);