"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63751"],{239519:function(e,n,d){d.r(n),d.d(n,{default:()=>x,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/dom-export-to-file","title":"DOM EXPORT TO FILE","description":"DOM EXPORT TO FILE ( elementRef ; filePath )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-export-to-file.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-file","permalink":"/docs/ja/commands/dom-export-to-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-export-to-file","title":"DOM EXPORT TO FILE","slug":"/commands/dom-export-to-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Create XML Ref","permalink":"/docs/ja/commands/dom-create-xml-ref"},"next":{"title":"DOM EXPORT TO VAR","permalink":"/docs/ja/commands/dom-export-to-var"}}'),s=d("785893"),l=d("250065");let r={id:"dom-export-to-file",title:"DOM EXPORT TO FILE",slug:"/commands/dom-export-to-file",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18",id:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18",level:5},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM EXPORT TO FILE"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"filePath"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30EB\u30FC\u30C8XML\u8981\u7D20\u53C2\u7167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D5\u30EB\u30D1\u30B9"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsx)(n.p,{children:"DOM EXPORT TO FILE \u30B3\u30DE\u30F3\u30C9\u306F\u3001XML\u30C4\u30EA\u30FC\u3092\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D5\u30A1\u30A4\u30EB\u306B\u683C\u7D0D\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u66F8\u304D\u51FA\u3059XML\u306E\u30EB\u30FC\u30C8\u8981\u7D20\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"filePath"}),"\u306B\u306F\u4F7F\u7528\u3059\u308B\u3001\u307E\u305F\u306F\u4F5C\u6210\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306E\u30D5\u30EB\u30D1\u30B9\u3092\u6E21\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u307F (\u30A2\u30AF\u30BB\u30B9\u30D1\u30B9\u306A\u3057) \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u968E\u5C64\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u691C\u7D22\u3057\u3001\u307E\u305F\u306F\u4F5C\u6210\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u7A7A\u306E\u6587\u5B57\u5217 (",(0,s.jsx)(n.em,{children:'""'}),") \u3092\u6E21\u3059\u3068\u3001\u6A19\u6E96\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u30FB\u958B\u304F\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h5,{id:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18",children:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18"}),"\n",(0,s.jsx)(n.p,{children:"XML\u306B\u304A\u3044\u3066\u3001\u6539\u884C\u306F\u305D\u308C\u304CXML\u8981\u7D20\u306E\u5185\u5074\u3042\u308B\u3044\u306F\u9593\u3044\u305A\u308C\u306B\u3042\u308B\u304B\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u5927\u304D\u306A\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3002\u5185\u90E8\u7684\u306BXML\u306F\u6A19\u6E96\u306ELF\u6587\u5B57\u3092\u884C\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8AAD\u307F\u8FBC\u307F\u3084\u66F8\u304D\u51FA\u3057\u51E6\u7406\u306E\u9593\u3001\u884C\u533A\u5207\u308A\u6587\u5B57\u306F\u5909\u63DB\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u8AAD\u307F\u8FBC\u307F\u6642\u3001XML\u30D1\u30FC\u30B5\u30FC\u306FCRLF\u6587\u5B57 (Windows\u306E\u6A19\u6E96\u6539\u884C) \u3092LF\u6587\u5B57\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002\u66F8\u304D\u51FA\u3057\u6642\u3001LF\u6587\u5B57\u306FmacOS\u3067\u306FCR\u6587\u5B57\u306B\u3001Windows\u3067\u306FCRLF\u6587\u5B57\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:['\u6539\u884C\u3092\u4FDD\u6301\u3057\u305F\u3044\u5834\u5408\u3001\u305D\u306E\u90E8\u5206\u3092XML CDATA\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u542B\u3081\u307E\u3059\u3002\u305D\u3046\u3059\u308B\u3053\u3068\u306B\u3088\u308AXML\u30D1\u30FC\u30B5\u30FC\u306F\u305D\u306E\u90E8\u5206\u3092\u89E3\u6790\u5BFE\u8C61\u3068\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002CRLF\u6587\u5B57\u306E\u4EE3\u308F\u308A\u306B"',(0,s.jsx)(n.br,{}),'"\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306F\u660E\u793A\u7684\u306A\u6539\u884C\u6587\u5B57\u3067\u3001\u30D1\u30FC\u30B5\u30FC\u306B\u3088\u308B\u89E3\u6790\u306F\u884C\u308F\u308C\u307E\u305B\u3093\u3002']}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(n.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u984C\u3067\u306FXML\u30C4\u30EA\u30FC",(0,s.jsx)(n.em,{children:"vElemRef"}),"\u3092\u30D5\u30A1\u30A4\u30EBMyDoc.xml\u306B\u683C\u7D0D\u3057\u307E\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOM EXPORT TO FILE(vElemRef;"C:\\\\folder\\MyDoc.xml")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u306F\u4EE5\u4E0B\u306E\u5834\u5408\u306B\u751F\u6210\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30EB\u30FC\u30C8\u8981\u7D20\u53C2\u7167\u304C\u7121\u52B9\u306E\u5834\u5408\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u30A2\u30AF\u30BB\u30B9\u30D1\u30B9\u304C\u7121\u52B9\u306E\u5834\u5408\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u30DC\u30EA\u30E5\u30FC\u30E0\u304C\u30A8\u30E9\u30FC\u3092\u8FD4\u3059\u5834\u5408 (\u7A7A\u304D\u5BB9\u91CF\u304C\u306A\u3044\u5834\u5408\u306A\u3069)\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"862"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return i},a:function(){return r}});var t=d(667294);let s={},l=t.createContext(s);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);