"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19829"],{621932:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","description":"SAX GET XML DOCUMENT VALUES ( document ; encoding ; version ; standalone )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-get-xml-document-values.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-document-values","permalink":"/docs/ja/20-R7/commands/sax-get-xml-document-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-document-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","slug":"/commands/sax-get-xml-document-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML COMMENT","permalink":"/docs/ja/20-R7/commands/sax-get-xml-comment"},"next":{"title":"SAX GET XML ELEMENT","permalink":"/docs/ja/20-R7/commands/sax-get-xml-element"}}'),d=s("785893"),l=s("250065");let c={id:"sax-get-xml-document-values",title:"SAX GET XML DOCUMENT VALUES",slug:"/commands/sax-get-xml-document-values",displayed_sidebar:"docs"},r=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SAX GET XML DOCUMENT VALUES"})," ( ",(0,d.jsx)(e.em,{children:"document"})," ; ",(0,d.jsx)(e.em,{children:"encoding"})," ; ",(0,d.jsx)(e.em,{children:"version"})," ; ",(0,d.jsx)(e.em,{children:"standalone"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"document"}),(0,d.jsx)(e.td,{children:"Time"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u958B\u3044\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"encoding"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"XML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u6587\u5B57\u30BB\u30C3\u30C8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"version"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"XML\u30D0\u30FC\u30B8\u30E7\u30F3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"standalone"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"True = \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3, \u305D\u3046\u306A\u3044\u5834\u5408 False"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["SAX GET XML DOCUMENT VALUES \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"document"})," \u5F15\u6570\u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306EXML\u30D8\u30C3\u30C0\u304B\u3089\u57FA\u672C\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:['\u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u30BF\u30A4\u30D7\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u3001\u305D\u3057\u3066"\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3" \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u305D\u308C\u305E\u308C',(0,d.jsx)(e.em,{children:"encoding"}),"\u3001",(0,d.jsx)(e.em,{children:"version"}),"\u3001\u305D\u3057\u3066",(0,d.jsx)(e.em,{children:"standalone"}),"\u5F15\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FXML Start Document\u30A4\u30D9\u30F3\u30C8\u5185\u3067\u4F7F\u7528\u3055\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002SAX\u30A4\u30D9\u30F3\u30C8\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/sax-get-xml-node",title:"SAX Get XML node",children:"SAX Get XML node"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/sax-get-xml-node",children:"SAX Get XML node"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/sax-set-xml-declaration",children:"SAX SET XML DECLARATION"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"873"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK\u3001error"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return c}});var t=s(667294);let d={},l=t.createContext(d);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);