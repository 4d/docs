"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84473"],{53143:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-get-body-part","title":"WEB GET BODY PART","description":"WEB GET BODY PART ( part ; contents ; name ; mimeType ; fileName )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-body-part.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-body-part","permalink":"/docs/ja/commands/web-get-body-part","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-body-part.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-body-part","title":"WEB GET BODY PART","slug":"/commands/web-get-body-part","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Server","permalink":"/docs/ja/category/web-server"},"next":{"title":"WEB Get body part count","permalink":"/docs/ja/commands/web-get-body-part-count"}}'),s=t("785893"),d=t("250065");let i={id:"web-get-body-part",title:"WEB GET BODY PART",slug:"/commands/web-get-body-part",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB GET BODY PART"})," ( ",(0,s.jsx)(n.em,{children:"part"})," ; ",(0,s.jsx)(n.em,{children:"contents"})," ; ",(0,s.jsx)(n.em,{children:"name"})," ; ",(0,s.jsx)(n.em,{children:"mimeType"})," ; ",(0,s.jsx)(n.em,{children:"fileName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"part"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30D1\u30FC\u30C8\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contents"}),(0,s.jsx)(n.td,{children:"Blob, Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D1\u30FC\u30C8\u3092\u53D7\u3051\u53D6\u308B\u5909\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"input\u8981\u7D20\u306Ename\u5C5E\u6027\u5024"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mimeType"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u306EMIME\u30BF\u30A4\u30D7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u9001\u4FE1\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB GET BODY PART"}),"\u30B3\u30DE\u30F3\u30C9\u306FWeb\u30D7\u30ED\u30BB\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u4F7F\u7528\u3055\u308C\u3001\u30DE\u30EB\u30C1\u30D1\u30FC\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30DC\u30C7\u30A3\u90E8\u3092\u89E3\u6790\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u89E3\u6790\u5BFE\u8C61\u306E\u30D1\u30FC\u30C8\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u7DCF\u30D1\u30FC\u30C8\u6570\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-body-part-count",children:"WEB Get body part count"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"contents"})," \u5F15\u6570\u306B\u306F\u30D1\u30FC\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u53D6\u5F97\u3059\u308B\u30D1\u30FC\u30C8\u304C\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u5408\u3001BLOB\u578B\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002Web\u30D5\u30A9\u30FC\u30E0\u304B\u3089\u9001\u4FE1\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u30C7\u30FC\u30BF\u306E\u5834\u5408\u3001\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"name"})," \u5F15\u6570\u306B\u306F\u30D5\u30A9\u30FC\u30E0\u306Einput \u8981\u7D20\u306Ename\u5C5E\u6027\u5024\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"mimeType"})," \u3068 ",(0,s.jsx)(n.em,{children:"fileName"})," \u5F15\u6570\u306B\u306F\u3001\u9001\u4FE1\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306EMIME\u30BF\u30A4\u30D7\u3068\u540D\u524D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(n.em,{children:"fileName"})," \u306F\u30D5\u30A9\u30FC\u30E0\u8981\u7D20 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.input,{type:"file"})})," \u3092\u4F7F\u7528\u3057\u3066\u30D5\u30A1\u30A4\u30EB\u304C\u9001\u4FE1\u3055\u308C\u305F\u5834\u5408\u306E\u307F\u5024\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"mimeType"})," \u3068 ",(0,s.jsx)(n.em,{children:"fileName"})," \u306F\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3059\u304C\u3001\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F\u30DA\u30A2\u3067\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," \u30DE\u30EB\u30C1\u30D1\u30FC\u30C8\u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-variables",children:"WEB GET VARIABLES"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u53D6\u5F97\u3067\u304D\u308B\u540D\u524D\u914D\u5217\u306B\u306F\u30D5\u30A9\u30FC\u30E0\u306E\u3059\u3079\u3066\u306E\u30D1\u30FC\u30C8\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u9806\u756A\u306F",(0,s.jsx)(n.strong,{children:"WEB GET BODY PART"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u3058\u3067\u3059\u3002\u30D5\u30A9\u30FC\u30E0\u4E2D\u306E\u30D1\u30FC\u30C8\u306E\u4F4D\u7F6E\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8B66\u544A:"})," ",(0,s.jsx)(n.em,{children:"mimeType"})," \u3068 ",(0,s.jsx)(n.em,{children:"fileName"})," \u5F15\u6570\u306B\u8FD4\u3055\u308C\u308B\u60C5\u5831\u306F\u3001Web\u30B5\u30FC\u30D0\u30FC\u306B\u9001\u4FE1\u3055\u308C\u305FHTTP\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u57FA\u3065\u304F\u3082\u306E\u3067\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u306F\u691C\u8A3C\u3055\u308C\u307E\u305B\u3093\u3002\u305D\u308C\u3089\u306E\u60C5\u5831\u304C\u6B63\u5F53\u3067\u3042\u308B\u304B\u3069\u3046\u304B\u306E\u691C\u8A3C\u306F\u958B\u767A\u8005\u304C\u884C\u308F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306FWeb\u30D5\u30A9\u30FC\u30E0\u304B\u3089HTTP\u30B5\u30FC\u30D0\u30FC\u306B\u753B\u50CF\u3092\u4F55\u679A\u304B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3001\u305D\u308C\u3089\u3092\u8FD4\u3055\u308C\u305FWeb\u30DA\u30FC\u30B8\u4E0A\u306B\u8868\u793A\u3057\u307E\u3059\u3002Web\u30D5\u30A9\u30FC\u30E0\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8868\u793A\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(476745).Z+"",width:"339",height:"220"})}),"\n",(0,s.jsx)(n.p,{children:"HTML\u30BD\u30FC\u30B9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-HTML",children:'<body>\n\xa0\xa0\xa0 \xa0\xa0\xa0 <form enctype="multipart/form-data" action="/4DACTION/GetFile/" method="post">\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u9078\u629E: <br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB1: <input name="file1" type="file"><br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB2: <input name="file2" type="file"><br>\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 <input type="submit">\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \n\xa0\xa0\xa0 \xa0\xa0\xa0 </form> \xa0\xa0\xa0 \n\xa0\xa0\xa0 \xa0\xa0\xa0 <hr/>\n\xa0\xa0\xa0 \x3c!--4DSCRIPT/galleryInit--\x3e\n\xa0\xa0\xa0 \x3c!--4DLOOP aFileNames--\x3e\n\xa0\xa0\xa0 \xa0\xa0\xa0 <img src="/photos/\x3c!--4DTEXT aFileNames{aFileNames}--\x3e"/>\n\xa0\xa0\xa0 \x3c!--4DENDLOOP--\x3e\n</body>\n'})}),"\n",(0,s.jsx)(n.p,{children:"2\u3064\u306E4D\u30E1\u30BD\u30C3\u30C9\u304C\u30DA\u30FC\u30B8\u304B\u3089\u547C\u3070\u308C\u3066\u3044\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30DA\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u969B\u30014DSCRIP\u30BF\u30B0\u3067\u547C\u3073\u51FA\u3055\u308C\u308B galleryInit \u3002\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u30FC\u5185\u306B\u5B58\u5728\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u540D\u306E\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u30D6\u30E9\u30A6\u30B6\u30FC\u304B\u3089\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B GetFile \u30E1\u30BD\u30C3\u30C9\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"galleryInit\u306E\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vDestinationFolder : Text\n\xa0ARRAY TEXT(aFileNames;0)\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\xa0//"WebFolder/photos" \u30D5\u30A9\u30EB\u30C0\u30FC\n\xa0DOCUMENT LIST($vDestinationFolder;aFileNames)\n'})}),"\n",(0,s.jsx)(n.p,{children:"GetFile\u306E\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPartName;$vPartMimeType;$vPartFileName;$vDestinationFolder : Text\n\xa0var $vPartContentBlob : Blob\n\xa0var $i : Integer\n\xa0$vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator\n\xa0For($i;1;WEB Get body part count)\xa0// \u30D1\u30FC\u30C8\u306E\u6570\u3060\u3051\u7E70\u308A\u8FD4\u3059\n\xa0\xa0\xa0\xa0WEB GET BODY PART($i;$vPartContentBlob;$vPartName;$vPartMimeType;$vPartFileName)\n\xa0\xa0\xa0\xa0If($vPartFileName#"")\n\xa0\xa0// \u3053\u3053\u3067\u30D5\u30A1\u30A4\u30EB\u306E\u5185\u5BB9\u3092\u691C\u8A3C\u3059\u3079\u304D\u3067\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vDestinationFolder+$vPartFileName;$vPartContentBlob)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0WEB SEND HTTP REDIRECT("/")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-body-part-count",children:"WEB Get body part count"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-http-body",children:"WEB GET HTTP BODY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-get-variables",children:"WEB GET VARIABLES"})]}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1212"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},476745:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict864606.en-17ebbbe3dcca5ab1d8f6940e6b6ed427.png"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);