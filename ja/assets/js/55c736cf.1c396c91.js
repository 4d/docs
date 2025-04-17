"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38018"],{738511:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>a,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/sax-set-xml-declaration","title":"SAX SET XML DECLARATION","description":"SAX SET XML DECLARATION ( document ; encoding {; standalone} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-set-xml-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/sax-set-xml-declaration","permalink":"/docs/ja/20-R8/commands/sax-set-xml-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-set-xml-declaration.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-set-xml-declaration","title":"SAX SET XML DECLARATION","slug":"/commands/sax-set-xml-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX OPEN XML ELEMENT ARRAYS","permalink":"/docs/ja/20-R8/commands/sax-open-xml-element-arrays"},"next":{"title":"XML","permalink":"/docs/ja/20-R8/commands/theme/XML"}}'),t=s("785893"),l=s("250065");let r={id:"sax-set-xml-declaration",title:"SAX SET XML DECLARATION",slug:"/commands/sax-set-xml-declaration",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," ( ",(0,t.jsx)(n.em,{children:"document"})," ; ",(0,t.jsx)(n.em,{children:"encoding"})," {; ",(0,t.jsx)(n.em,{children:"standalone"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u958B\u3044\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encoding"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"XML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u6587\u5B57\u30BB\u30C3\u30C8"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"standalone"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"True = \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3 False (\u30C7\u30D5\u30A9\u30EB\u30C8) = \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u3067\u306F\u306A\u3044"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX SET XML DECLARATION"})," \u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.em,{children:"document"})," \u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u3001\u5F15\u6570\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u4F7F\u7528\u3057\u3066\u521D\u671F\u5316\u3057\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u3001",(0,t.jsx)(n.em,{children:"standalone"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u5C5E\u6027\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"encoding"}),": \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u4F7F\u7528\u3055\u308C\u308B\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u306A\u3044\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306FUTF-8\u6587\u5B57\u30BB\u30C3\u30C8\u3067\u3059\u3002",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"\u6CE8:"})," 4D XML\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u6E21\u3057\u305F\u5834\u5408\u3001UTF-8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u4E00\u89A7\u306B\u3064\u3044\u3066\u306F",(0,t.jsx)(n.em,{children:"\u6587\u5B57\u30BB\u30C3\u30C8"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044(\u305F\u3060\u3057\u3001\u591A\u304F\u306E\u5834\u5408\u306B\u3064\u3044\u3066UTF-8\u304C\u63A8\u5968\u3055\u308C\u307E\u3059)\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"standalone"}),": \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u304B (",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/true",title:"True",children:"True"}),")\u3001\u3042\u308B\u3044\u306F\u4ED6\u306E\u30D5\u30A1\u30A4\u30EB\u3084\u5916\u90E8\u30EA\u30BD\u30FC\u30B9\u3092\u5FC5\u8981\u3068\u3059\u308B\u304B (",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/false",title:"False",children:"False"}),") \u3092\u793A\u3057\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u306A\u3044\u304B\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/false",title:"False",children:"False"}),"\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u4F55\u3082\u66F8\u304D\u8FBC\u3093\u3067\u3044\u306A\u3044\u72B6\u614B\u3067",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/xml-set-options",children:"XML SET OPTIONS"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30A4\u30F3\u30C7\u30F3\u30C8\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3054\u3068\u306B\u4E00\u56DE\u3001\u6700\u521D\u306EXML\u8A2D\u5B9A\u30B3\u30DE\u30F3\u30C9\u306E\u524D\u306B\u3001\u547C\u3073\u51FA\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0SAX SET XML DECLARATION($DocRef;"UTF-16";True)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u4EE5\u4E0B\u306E\u884C\u304C\u66F8\u304D\u8FBC\u307E\u308C\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-16" standalone="yes"?>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/sax-get-xml-document-values",children:"SAX GET XML DOCUMENT VALUES"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"858"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var d=s(667294);let t={},l=d.createContext(t);function r(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);