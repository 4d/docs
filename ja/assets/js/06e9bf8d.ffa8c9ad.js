"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34610"],{861958:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/base64-decode","title":"BASE64 DECODE","description":"BASE64 DECODE ( encodedText {; decoded}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/base64-decode.md","sourceDirName":"commands-legacy","slug":"/commands/base64-decode","permalink":"/docs/ja/commands/base64-decode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbase64-decode.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"base64-decode","title":"BASE64 DECODE","slug":"/commands/base64-decode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACTIVITY SNAPSHOT","permalink":"/docs/ja/commands/activity-snapshot"},"next":{"title":"BASE64 ENCODE","permalink":"/docs/ja/commands/base64-encode"}}'),t=d("785893"),c=d("250065");let r={id:"base64-decode",title:"BASE64 DECODE",slug:"/commands/base64-decode",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BASE64 DECODE"})," ( ",(0,t.jsx)(n.em,{children:"encodedText"})," {; ",(0,t.jsx)(n.em,{children:"decoded"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodedText"}),(0,t.jsx)(n.td,{children:"Text, Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30C7\u30B3\u30FC\u30C9\u3059\u308B\u3001\u30A8\u30F3\u30B3\u30FC\u30C9\u6E08\u307F\u306E\u5024"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u305F\u5024(decoded \u5F15\u6570\u7701\u7565\u6642)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"decoded"}),(0,t.jsx)(n.td,{children:"Text, Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u305F\u5024"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30C7\u30B3\u30FC\u30C9\u306BBase64URL \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BASE64 DECODE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"toDecode"})," \u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u3001Base64 \u307E\u305F\u306F Base64URL \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBlob \u3092\u30C7\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002Base64 \u304A\u3088\u3073Base64URL \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/commands/base64-encode",children:"BASE64 ENCODE"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8A73\u7D30\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"toDecode"})," \u5F15\u6570\u306B\u306F\u3001\u30C7\u30B3\u30FC\u30C9\u3057\u305F\u3044\u3001Base64 \u307E\u305F\u306FBase64URL \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBlob\u5024\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"decoded"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.em,{children:"toDecode"})," \u5F15\u6570\u306E\u4E2D\u8EAB\u3092\u30C7\u30B3\u30FC\u30C9\u3057\u305F\u3082\u306E\u3092decoded \u5F15\u6570\u306B\u5165\u308C\u307E\u3059\u3002\u3053\u306E\u5834\u5408",(0,t.jsx)(n.em,{children:"toDecode"})," \u5F15\u6570\u306F\u4F55\u3082\u5909\u66F4\u3055\u308C\u305A\u305D\u306E\u307E\u307E\u306B\u3055\u308C\u307E\u3059\u3002\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.em,{children:"toDecode"})," \u5F15\u6570\u306E\u4E2D\u8EAB\u3092\u76F4\u63A5\u5909\u63DB\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u30B3\u30DE\u30F3\u30C9\u304C\u30C7\u30B3\u30FC\u30C9\u3057\u305F\u7D50\u679C\u3092\u53D7\u3051\u53D6\u308B\u305F\u3081\u306B\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u305D\u306E\u5909\u6570\u306B\u306F\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u305F\u30D0\u30A4\u30C8\u3092UTF-8\u3067\u89E3\u91C8\u3057\u305F\u7D50\u679C\u304C\u6E21\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001 ",(0,t.jsx)(n.em,{children:"*"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30B3\u30FC\u30C9\u306BBase64 \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 ",(0,t.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30B3\u30FC\u30C9\u306BBase64URL \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"toDecode"})," \u5F15\u6570\u306B\u7121\u52B9\u306ABase64 \u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u542B\u307E\u308C\u3066\u3044\u305F\u5834\u5408\u3001\u7A7A\u306E\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBlob \u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306FBLOB\u3092\u4F7F\u7528\u3057\u3066\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u8EE2\u9001\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $sourceBlob : Blob\n\xa0var $mypicture : Picture\n\xa0$mypicture:=[people]photo\n\xa0PICTURE TO BLOB($mypicture;$sourceBlob;".JPG")\n\xa0var $base64Text : Text\n\xa0BASE64 ENCODE($sourceBlob;$base64Text)\xa0//\u30C6\u30AD\u30B9\u30C8\u306B\u30A8\u30F3\u30B3\u30FC\u30C9\n\xa0\xa0// \u30D0\u30A4\u30CA\u30EA\u306F\u6587\u5B57\u5217\u3068\u3057\u3066$base64Text\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\n\xa0\n\xa0var $base64Text : Text\n\xa0var $targetBlob : Blob\n\xa0BASE64 DECODE($base64Text;$targetBlob)\xa0//\u30C6\u30AD\u30B9\u30C8\u3092\u30C7\u30B3\u30FC\u30C9\n\xa0\xa0// Base64\u306B\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u305F\u30D0\u30A4\u30CA\u30EA\u306F$blobTarget\u306B\u30C7\u30B3\u30FC\u30C9\u3055\u308C\u308B\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/base64-encode",children:"BASE64 ENCODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/generate-digest",children:"Generate digest"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/xml-decode",children:"XML DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"XML DOM\u30B3\u30DE\u30F3\u30C9\u306E\u6982\u8981"})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return r}});var s=d(667294);let t={},c=s.createContext(t);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);