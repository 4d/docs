"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94318"],{614348:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>h,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/web-send-blob","title":"WEB SEND BLOB","description":"WEB SEND BLOB ( BLOB ; type )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-send-blob.md","sourceDirName":"commands-legacy","slug":"/commands/web-send-blob","permalink":"/docs/ja/commands/web-send-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-send-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-send-blob","title":"WEB SEND BLOB","slug":"/commands/web-send-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/ja/commands/web-legacy-get-session-expiration"},"next":{"title":"WEB SEND FILE","permalink":"/docs/ja/commands/web-send-file"}}'),t=s("785893"),i=s("250065");let r={id:"web-send-blob",title:"WEB SEND BLOB",slug:"/commands/web-send-blob",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(n){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"WEB SEND BLOB"})," ( ",(0,t.jsx)(e.em,{children:"BLOB"})," ; ",(0,t.jsx)(e.em,{children:"type"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Blob"}),(0,t.jsx)(e.td,{children:"Blob"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30D6\u30E9\u30A6\u30B6\u3078\u9001\u308BBLOB"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"type"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"BLOB\u306E\u30C7\u30FC\u30BF\u30BF\u30A4\u30D7"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"WEB SEND BLOB"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066 ",(0,t.jsx)(e.em,{children:"blob"})," \u3092\u30D6\u30E9\u30A6\u30B6\u3078\u9001\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["BLOB\u306B\u542B\u307E\u308C\u308B\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30D7\u306F ",(0,t.jsx)(e.em,{children:"type"})," \u306B\u3088\u3063\u3066\u793A\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306F\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u306B\u306A\u308A\u307E\u3059:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"Type"})," = ",(0,t.jsx)(e.strong,{children:"\u7A7A\u306E\u6587\u5B57\u5217"}),' (""): \u3053\u306E\u5834\u5408\u3001BLOB\u306B\u305D\u308C\u4EE5\u4E0A\u306E\u60C5\u5831\u3092\u4F9B\u7D66\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30D6\u30E9\u30A6\u30B6\u304CBLOB\u306E\u5185\u5BB9\u3092\u89E3\u91C8\u3057\u3088\u3046\u3068\u3057\u307E\u3059\u3002']}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"Type"})," = ",(0,t.jsx)(e.strong,{children:"\u30D5\u30A1\u30A4\u30EB\u62E1\u5F35\u5B50"}),' (\u4F8B: ".HTM"\u3001".GIF"\u3001".JPEG" \u306A\u3069): \u3053\u306E\u5834\u5408\u3001BLOB\u306B\u542B\u307E\u308C\u308B\u30C7\u30FC\u30BF\u306EMIME\u30BF\u30A4\u30D7\u3092\u62E1\u5F35\u5B50\u3092\u4F7F\u3063\u3066\u6307\u5B9A\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001BLOB\u306F\u305D\u306E\u62E1\u5F35\u5B50\u306B\u5FDC\u3058\u3066\u89E3\u91C8\u3055\u308C\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30D6\u30E9\u30A6\u30B6 \u304C\u6B63\u78BA\u306B\u89E3\u91C8\u3067\u304D\u308B\u3088\u3046\u306B\u3001\u62E1\u5F35\u5B50\u306F\u6A19\u6E96\u306A\u3082\u306E\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002']}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"type"})," = ",(0,t.jsx)(e.strong,{children:"Mime/Type"})," (\u4F8B: \u201Ctext/html\u201D\u3001\u201Cimage/tiff\u201D \u306A\u3069):\u3053\u306E\u5834\u5408\u3001BLOB\u306B\u542B\u307E\u308C\u308B\u30C7\u30FC\u30BF\u306EMIME\u30BF\u30A4\u30D7\u3092\u76F4\u63A5\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u306F\u3088\u308A\u591A\u304F\u306E\u81EA\u7531\u5EA6\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u6A19\u6E96\u30BF\u30A4\u30D7\u306B\u52A0\u3048\u3001 \u30A4\u30F3\u30C8\u30E9\u30CD\u30C3\u30C8\u7D4C\u7531\u3067\u56FA\u6709\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9001\u308B\u305F\u3081\u306B\u30AB\u30B9\u30BF\u30E0MIME\u30BF\u30A4\u30D7\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u30D6\u30E9\u30A6\u30B6\u3092 \u8A2D\u5B9A\u3059\u308B\u3060\u3051\u3067\u3059\u3002\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u304C\u3001\u9001\u3089\u308C\u305F\u30BF\u30A4\u30D7\u3092\u8A8D\u8B58\u3057\u305F\u308A\u3001\u9069\u5207\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u3044\u305F\u308A\u3057\u307E\u3059\u3002 ",(0,t.jsx)(e.em,{children:"type"})," is\u306B\u6E21\u3059\u5024\u306F\u3001\u3053\u306E\u5834\u5408\u3001\u201Capplication/x-[TypeName]\u201D\u3068\u306A\u308A\u307E\u3059\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u3001\u3053\u306E\u30BF\u30A4\u30D7\u3092\u53C2\u7167\u3057\u3001\u305D\u308C\u3092 \u201C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u8D77\u52D5\u201D \u52D5\u4F5C\u306B\u95A2\u9023\u4ED8\u3051\u307E\u3059\u3002\u305D\u306E\u305F\u3081",(0,t.jsx)(e.strong,{children:"WEB SEND BLOB"}),"\u30B3\u30DE\u30F3\u30C9 \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u30BF\u30A4\u30D7\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9001\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u3001\u30A4\u30F3\u30C8\u30E9\u30CD\u30C3\u30C8\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306F\u95A2\u9023\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u81EA\u52D5\u7684\u306B\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"\u6CE8:"})," MIME\u578B\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u95A2\u3057\u3066\u306F\u3001\u3053\u3061\u3089\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044: ",(0,t.jsx)(e.a,{href:"http://www.iana.org/assignments/media-types",children:"http://www.iana.org/assignments/media-types"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u6700\u3082\u4E00\u822C\u7684\u306AMIME\u30BF\u30A4\u30D7\u306E\u30EA\u30B9\u30C8\u3067\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u62E1\u5F35\u5B50"}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Mime/Type"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".htm"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".html"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".shtml"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".shtm"}),(0,t.jsx)(e.td,{children:"text/html"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".css"}),(0,t.jsx)(e.td,{children:"text/css"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".pdf"}),(0,t.jsx)(e.td,{children:"application/pdf"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".rtf"}),(0,t.jsx)(e.td,{children:"application/rtf"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".ps"}),(0,t.jsx)(e.td,{children:"application/postscript"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".eps"}),(0,t.jsx)(e.td,{children:"application/postscript"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".hqx"}),(0,t.jsx)(e.td,{children:"application/mac-binhex40"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".js"}),(0,t.jsx)(e.td,{children:"application/javascript"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".json"}),(0,t.jsx)(e.td,{children:"application/json"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".txt"}),(0,t.jsx)(e.td,{children:"text/plain"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".text"}),(0,t.jsx)(e.td,{children:"text/plain"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".gif"}),(0,t.jsx)(e.td,{children:"image/gif"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jpg"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jpeg"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jpe"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".jfif"}),(0,t.jsx)(e.td,{children:"image/jpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".pic"}),(0,t.jsx)(e.td,{children:"image/pict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".pict"}),(0,t.jsx)(e.td,{children:"image/pict"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".tif"}),(0,t.jsx)(e.td,{children:"image/tiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".tiff"}),(0,t.jsx)(e.td,{children:"image/tiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".mpeg"}),(0,t.jsx)(e.td,{children:"video/mpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".mpg"}),(0,t.jsx)(e.td,{children:"video/mpeg"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".mov"}),(0,t.jsx)(e.td,{children:"video/quicktime"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".moov"}),(0,t.jsx)(e.td,{children:"video/quicktime"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".aif"}),(0,t.jsx)(e.td,{children:"audio/aiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".aiff"}),(0,t.jsx)(e.td,{children:"audio/aiff"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".wav"}),(0,t.jsx)(e.td,{children:"audio/wav"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".ram"}),(0,t.jsx)(e.td,{children:"audio/x-pn-realaudio"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".sit"}),(0,t.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".bin"}),(0,t.jsx)(e.td,{children:"application/x-stuffit"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".xml"}),(0,t.jsx)(e.td,{children:"application/xml"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".z"}),(0,t.jsx)(e.td,{children:"application/x-zip"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".zip"}),(0,t.jsx)(e.td,{children:"application/x-zip"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".gz"}),(0,t.jsx)(e.td,{children:"application/x-gzip"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:".tar"}),(0,t.jsx)(e.td,{children:"application/x-tar"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"}),' 4D HTTP\u30B5\u30FC\u30D0\u30FC\u3067\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308BMIME\u30BF\u30A4\u30D7\u306F\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4EE5\u4E0B\u306E\u30D5\u30A9\u30EB\u30C0\u306E\u4E2D\u306B\u3042\u308B\u3001 "MimeTypes.xml" \u306E\u4E2D\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059: ',(0,t.jsx)(e.em,{children:"[Contents]\\Native components\\HTTPServer.bundle\\Contents\\Resources"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["\u30DA\u30FC\u30B8\u5185\u306E4D \u5909\u6570\u3084 ",(0,t.jsx)(e.em,{children:"4DSCRIPT"})," \u578B\u30BF\u30B0\u3078\u306E\u53C2\u7167\u306F\u5E38\u306B\u89E3\u6790\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"\u306E\u30EB\u30FC\u30C1\u30F3\u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/ja/commands/web-send-file",children:"WEB SEND FILE"})}),"\n",(0,t.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"654"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return r}});var d=s(667294);let t={},i=d.createContext(t);function r(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);