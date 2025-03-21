"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20120"],{820208:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/base64-encode","title":"BASE64 ENCODE","description":"BASE64 ENCODE ( BLOB {; encoded}{; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/base64-encode.md","sourceDirName":"commands-legacy","slug":"/commands/base64-encode","permalink":"/docs/ja/commands/base64-encode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbase64-encode.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"base64-encode","title":"BASE64 ENCODE","slug":"/commands/base64-encode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BASE64 DECODE","permalink":"/docs/ja/commands/base64-decode"},"next":{"title":"Choose","permalink":"/docs/ja/commands/choose"}}'),t=s("785893"),c=s("250065");let r={id:"base64-encode",title:"BASE64 ENCODE",slug:"/commands/base64-encode",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BASE64 ENCODE"})," ( ",(0,t.jsx)(n.em,{children:"BLOB"})," {; ",(0,t.jsx)(n.em,{children:"encoded"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Base 64\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30B3\u30FC\u30C9\u5316\u3059\u308BBLOB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Base 64\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30B3\u30FC\u30C9\u5316\u3057\u305FBLOB"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encoded"}),(0,t.jsx)(n.td,{children:"Blob, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u305F\u5024"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Base64URL \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u30A8\u30F3\u30B3\u30FC\u30C9\u3059\u308B"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BASE64 ENCODE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"toEncode"})," \u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBlob\u5024\u3092\u3001Base64 \u307E\u305F\u306FBase64URL \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Bse64 \u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306F\u30018-bit \u306E\u30B3\u30FC\u30C9\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u7DE8\u96C6\u3057\u3001\u30C7\u30FC\u30BF\u304C7\u3064\u4EE5\u4E0A\u306E\u6709\u52B9\u306A\u30D3\u30C3\u30C8\u3092\u6301\u305F\u306A\u3044\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u3053\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306F\u3001\u4F8B\u3048\u3070XML \u3092\u4F7F\u7528\u3057\u3066\u3044\u308BBlob \u3092\u6271\u3046\u969B\u306A\u3069\u306B\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002Base64URL \u306FURL \u3084\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u305F\u3081\u306E\u7279\u5B9A\u306E\u51E6\u7406\u306E\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u4EE3\u66FF\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u65B9\u6CD5\u3067\u3059(",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc4648#section-5",children:"rfc4648"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"toEncode"})," \u5F15\u6570\u306B\u306F\u3001\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBlob \u5024\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u30C6\u30AD\u30B9\u30C8\u5024\u3092\u6E21\u3059\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C6\u30AD\u30B9\u30C8\u3092UTF-8 \u3067\u8868\u73FE\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u63DB\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"encoded"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u3053\u3053\u306B\u306F",(0,t.jsx)(n.em,{children:"toEncode"})," \u5F15\u6570\u306E\u4E2D\u8EAB\u3092\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBlob \u306B\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u305F\u3082\u306E\u3092\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u5F8C\u306B\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001toEncode \u5F15\u6570\u81EA\u8EAB\u306F\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u306F\u4F55\u3082\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"encoded"})," \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.em,{children:"toEncode"})," \u5F15\u6570\u3092\u76F4\u63A5\u5909\u63DB\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3001 ",(0,t.jsx)(n.em,{children:"*"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306FBase64 \u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 ",(0,t.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306FBase64URL \u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/base64-decode",children:"BASE64 DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/generate-digest",children:"Generate digest"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/xml-decode",children:"XML DECODE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"XML DOM\u30B3\u30DE\u30F3\u30C9\u306E\u6982\u8981"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"895"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var d=s(667294);let t={},c=d.createContext(t);function r(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);