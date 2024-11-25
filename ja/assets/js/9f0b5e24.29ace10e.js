"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30161"],{716250:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>x,assets:()=>i,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"commands-legacy/convert-to-text","title":"Convert to text","description":"Convert to text ( BLOB ; charSet ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/convert-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/convert-to-text","permalink":"/docs/ja/commands/convert-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"convert-to-text","title":"Convert to text","slug":"/commands/convert-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CONVERT FROM TEXT","permalink":"/docs/ja/commands/convert-from-text"},"next":{"title":"Delete string","permalink":"/docs/ja/commands/delete-string"}}'),s=n("785893"),d=n("250065");let o={id:"convert-to-text",title:"Convert to text",slug:"/commands/convert-to-text",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Convert to text"})," ( ",(0,s.jsx)(t.em,{children:"BLOB"})," ; ",(0,s.jsx)(t.em,{children:"charSet"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u5F15\u6570"}),(0,s.jsx)(t.th,{children:"\u578B"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Blob"}),(0,s.jsx)(t.td,{children:"Blob"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u7279\u5B9A\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B \u30C6\u30AD\u30B9\u30C8\u3092\u542B\u3080BLOB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"charSet"}),(0,s.jsx)(t.td,{children:"Text, Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"BLOB\u6587\u5B57\u30BB\u30C3\u30C8\u306E\u756A\u53F7\u307E\u305F\u306F\u540D\u524D"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"4D\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8868\u73FE\u3055\u308C\u305FBLOB\u306E\u5185\u5BB9"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(t.p,{children:["Convert to text\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(t.em,{children:"blob"}),"\u5F15\u6570\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u63DB\u3057\u3066\u30014D\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u8A18\u8FF0\u3055\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u3067\u8FD4\u3057\u307E\u3059\u3002 4D\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067Unicode \u6587\u5B57\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"charSet"}),"\u306B\u306F\u5909\u63DB\u306B\u4F7F\u7528\u3055\u308C\u308B\u3001",(0,s.jsx)(t.em,{children:"blob"}),'\u306B\u542B\u307E\u308C\u3066\u3044\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002\u3082\u3057BLOB\u306B4D\u5185\u3067\u30B3\u30D4\u30FC\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306EBLOB\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u306FUTF-16\u3067\u3059\u3002\u6A19\u6E96\u540D\u3084\u30A8\u30A4\u30EA\u30A2\u30B9\u540D (\u4F8B\u3048\u3070"ISO-8859-1" \u3084 "UTF-8")\u3001\u307E\u305F\u306F\u305D\u306E\u8B58\u5225\u5B50 (\u500D\u9577\u6574\u6570) \u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u8A73\u7D30\u306F',(0,s.jsx)(t.a,{href:"/docs/ja/commands/convert-from-text",title:"CONVERT FROM TEXT",children:"CONVERT FROM TEXT"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["Convert to text\u306FByte Order Marks (BOM) \u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002\u6307\u5B9A\u3055\u308C\u305F\u6587\u5B57\u30BB\u30C3\u30C8\u304CUnicode\u30BF\u30A4\u30D7 (UTF-8, UTF-16\u307E\u305F\u306FUTF-32) \u3067\u3042\u308B\u3068\u304D\u30014D\u306F\u53D7\u4FE1\u3057\u305F\u6700\u521D\u306E\u30D0\u30A4\u30C8\u3067BOM\u306E\u8B58\u5225\u3092\u8A66\u307F\u307E\u3059\u3002BOM\u304C\u691C\u77E5\u3067\u304D\u308B\u3068\u3001BOM\u306F\u7D50\u679C\u304B\u3089\u53D6\u308A\u9664\u304B\u308C\u30014D\u306F",(0,s.jsx)(t.em,{children:"charSet"}),"\u3067\u306F\u306A\u304FBOM\u304C\u6307\u5B9A\u3057\u305F\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsx)(t.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/ja/commands/convert-from-text",children:"CONVERT FROM TEXT"})})]})}function x(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var r=n(667294);let s={},d=r.createContext(s);function o(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);