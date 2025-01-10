"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87097"],{396625:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/generate-digest","title":"Generate digest","description":"Generate digest ( param ; algorithm {; *} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-digest.md","sourceDirName":"commands-legacy","slug":"/commands/generate-digest","permalink":"/docs/ja/commands/generate-digest","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-digest.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-digest","title":"Generate digest","slug":"/commands/generate-digest","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Choose","permalink":"/docs/ja/commands/choose"},"next":{"title":"Generate password hash","permalink":"/docs/ja/commands/generate-password-hash"}}'),t=s("785893"),r=s("250065");let i={id:"generate-digest",title:"Generate digest",slug:"/commands/generate-digest",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Generate digest"})," ( ",(0,t.jsx)(n.em,{children:"param"})," ; ",(0,t.jsx)(n.em,{children:"algorithm"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"param"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Digest\u30AD\u30FC\u3092\u53D6\u5F97\u3059\u308BBLOB\u3084\u30C6\u30AD\u30B9\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"algorithm"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30AD\u30FC\u306E\u751F\u6210\u306B\u4F7F\u7528\u3059\u308B\u30A2\u30EB\u30B4\u30EA\u30BA\u30E00= MD5\u30011 = SHA1\u3001 2=4D\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u3092Base64URL \u3067\u30A8\u30F3\u30B3\u30FC\u30C9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Digest\u30AD\u30FC\u306E\u5024"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Generate digest"}),"\u30B3\u30DE\u30F3\u30C9\u306FBLOB\u3084\u30C6\u30AD\u30B9\u30C8\u306EDigest\u30AD\u30FC\u3092\u6307\u5B9A\u3057\u305F\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3067\u751F\u6210\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002",(0,t.jsx)(n.strong,{children:"Generate digest"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u30AD\u30FC\u3092\u6587\u5B57\u5217\u3068\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"algorithm"})," \u5F15\u6570\u3067\u4F7F\u7528\u3059\u308B\u30CF\u30C3\u30B7\u30E5\u95A2\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"Digest Type"}),"\u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{children:"\u5024"}),(0,t.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_o_4D REST digest"}),(0,t.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"*** \u5EC3\u6B62\u4E88\u5B9A\u306E\u5B9A\u6570 ***"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MD5 digest"}),(0,t.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"MD5\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u300232\u30D3\u30C3\u30C8\u306E16\u9032\u6570\u306E\u6587\u5B57\u5217\u3068\u3057\u3066\u8FD4\u3055\u308C\u305F\u3001\u9023\u7D9A\u3057\u305F128\u30D3\u30C3\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA1 digest"}),(0,t.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"SHA-1\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u300240\u30D3\u30C3\u30C8\u306E16\u9032\u6570\u306E\u6587\u5B57\u5217\u3068\u3057\u3066\u8FD4\u3055\u308C\u305F\u3001\u9023\u7D9A\u3057\u305F160\u30D3\u30C3\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA256 digest"}),(0,t.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"(SHA-2 family) SHA-256\u306F\u300164\u30D3\u30C3\u30C8\u306E16\u9032\u6570\u306E\u6587\u5B57\u5217\u3068\u3057\u3066\u8FD4\u3055\u308C\u305F\u3001\u9023\u7D9A\u3057\u305F256\u30D3\u30C3\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SHA512 digest"}),(0,t.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"(SHA-2 family) SHA-512\u306F\u3001128\u30D3\u30C3\u30C8\u306E16\u9032\u6570\u306E\u6587\u5B57\u5217\u3068\u3057\u3066\u8FD4\u3055\u308C\u305F\u3001\u9023\u7D9A\u3057\u305F512\u30D3\u30C3\u30C8"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u7BA1\u7406\u306BMD5 \u304A\u3088\u3073 SHA \u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u305F\u3081\u306B\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})," \u304A\u3088\u3073 ",(0,t.jsx)(n.a,{href:"/docs/ja/commands/verify-password-hash",children:"Verify password hash"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001 ",(0,t.jsx)(n.em,{children:"*"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u300116\u9032\u6570\u3067\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u305F\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u30AD\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u30AD\u30FC\u3092Base64URL\u3067\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u305F\u3044\u5834\u5408\u3001 ",(0,t.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u540C\u3058\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u8FD4\u3055\u308C\u308B\u5024\u306F\u3001\u5168\u3066\u306E\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306B\u304A\u3044\u3066\u540C\u3058\u3067\u3059(macOS/Win)\u3002\u3053\u306E\u8A08\u7B97\u306F\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092UTF-8\u3067\u8868\u73FE\u3057\u305F\u3082\u306E\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"}),' \u30B3\u30DE\u30F3\u30C9\u3092\u7A7A\u306E\u30C6\u30AD\u30B9\u30C8\u3084BLOB\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC\u306F\u8FD4\u3055\u308C\u305A\u3001\u6587\u5B57\u5217\u306E\u5024\u304C\u8FD4\u3055\u308C\u307E\u3059(\u4F8B\u3048\u3070MD5 \u306B\u5BFE\u3057\u3066\u306F"d41d8cd98f00b204e9800998ecf8427e"\u304C\u8FD4\u3055\u308C\u307E\u3059)']}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306FMD5 \u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3057\u3066\u4E8C\u3064\u306E\u753B\u50CF\u3092\u6BD4\u8F03\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict1;$vPict2 : Picture\n\xa0var $FirstBlob;$SecondBlob : Blob\n\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo1.png")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo2.png")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict1;$FirstBlob;".png")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict2;$SecondBlob;".png")\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_1:=Generate digest($FirstBlob;MD5 digest)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_2:=Generate digest($SecondBlob;MD5 digest)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($MD5_1#$MD5_2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\u4E8C\u3064\u306E\u753B\u50CF\u306F\u7570\u306A\u308B\u3082\u306E\u3067\u3059")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\u4E8C\u3064\u306E\u753B\u50CF\u306F\u5B8C\u5168\u306B\u540C\u4E00\u306E\u3082\u306E\u3067\u3059")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u30C0\u30A4\u30B8\u30A7\u30B9\u30C8\u30AD\u30FC\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)\n\xa0\xa0// $key1\u306F"e4d909c290d0fb1ca068ffaddf22cbd0"\n\xa0$key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)\n\xa0\xa0// $key2\u306F"408d94384216f890ff7a0c3528e8bed1e0b01621"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/base64-decode",children:"BASE64 DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/base64-encode",children:"BASE64 ENCODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/web-validate-digest",children:"WEB Validate digest"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"\u6697\u53F7\u5316\u30D7\u30ED\u30C8\u30B3\u30EB"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"1147"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var d=s(667294);let t={},r=d.createContext(t);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);