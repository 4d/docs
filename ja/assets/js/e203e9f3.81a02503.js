"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37927"],{266831:function(e,n,t){t.r(n),t.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>l});var d=JSON.parse('{"id":"commands-legacy/dom-export-to-var","title":"DOM EXPORT TO VAR","description":"DOM EXPORT TO VAR ( elementRef ; vXmlVar )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-export-to-var.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-var","permalink":"/docs/ja/commands/dom-export-to-var","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-var.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-export-to-var","title":"DOM EXPORT TO VAR","slug":"/commands/dom-export-to-var","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM EXPORT TO FILE","permalink":"/docs/ja/commands/dom-export-to-file"},"next":{"title":"DOM Find XML element","permalink":"/docs/ja/commands/dom-find-xml-element"}}'),r=t("785893"),s=t("250065");let l={id:"dom-export-to-var",title:"DOM EXPORT TO VAR",slug:"/commands/dom-export-to-var",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18",id:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18",level:5},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM EXPORT TO VAR"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," ; ",(0,r.jsx)(n.em,{children:"vXmlVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30EB\u30FC\u30C8XML\u8981\u7D20\u53C2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vXmlVar"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"XML\u30C4\u30EA\u30FC\u3092\u53D7\u3051\u53D6\u308B\u5909\u6570"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"DOM EXPORT TO VAR \u30B3\u30DE\u30F3\u30C9\u306F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBLOB\u5909\u6570\u306BXML\u30C4\u30EA\u30FC\u3092\u683C\u7D0D\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"elementRef"}),"\u306B\u306F\u66F8\u304D\u51FA\u3059XML\u306E\u30EB\u30FC\u30C8\u8981\u7D20\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"vXmlVar"}),"\u306B\u306FXML\u30C4\u30EA\u30FC\u3092\u53D7\u3051\u53D6\u308B\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5909\u6570\u306F\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBLOB\u30BF\u30A4\u30D7\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u6B21\u306B\u4F55\u3092\u884C\u3046\u304B\u3001\u3042\u308B\u3044\u306F\u30C4\u30EA\u30FC\u306E\u30B5\u30A4\u30BA\u306B\u5F93\u3063\u3066\u30BF\u30A4\u30D7\u3092\u6C7A\u5B9A\u3067\u304D\u307E\u3059(\u975EUnicode\u30E2\u30FC\u30C9\u306E\u5834\u5408\u3001\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u5909\u6570\u306F32K\u306B\u5236\u9650\u3055\u308C\u307E\u3059\u3002Unicode\u30E2\u30FC\u30C9\u306E\u5834\u5408\u306F2GB\u3067\u3059) \u3002"]}),"\n",(0,r.jsxs)(n.p,{children:['\u975EUnicode\u30E2\u30FC\u30C9\u306E\u3068\u304D\u3001XML\u30C4\u30EA\u30FC\u3092\u683C\u7D0D\u3059\u308B\u305F\u3081\u306B\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30C4\u30EA\u30FC\u306F\u30AB\u30EC\u30F3\u30C8\u306EMac\u6587\u5B57\u30BB\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u30A8\u30F3\u30B3\u30FC\u30C9\u3055\u308C\u307E\u3059 (\u4F8B\u3048\u3070\u307B\u3068\u3093\u3069\u306EWestern\u30B7\u30B9\u30C6\u30E0\u3067\u306FMac Roman)\u3002\u3064\u307E\u308A\u8FD4\u3055\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306F\u5143\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0 (encoding="xxx") \u3092\u5931\u3044\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001',(0,r.jsx)(n.em,{children:"vVarXml"})," \u5909\u6570\u306F\u30B3\u30FC\u30C9\u3092\u898B\u305F\u308A\u4FDD\u5B58\u3057\u305F\u308A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u304C\u3001(\u4F8B\u3048\u3070",(0,r.jsx)(n.a,{href:"/docs/ja/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u66F8\u304D\u51FA\u3057\u305F\u5834\u5408)\u3001\u6709\u52B9\u306AXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3068\u306F\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Unicode\u30E2\u30FC\u30C9\u306E\u5834\u5408\u3001\u5143\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u304C\u5909\u6570\u5185\u3067\u4FDD\u6301\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h5,{id:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18",children:"\u884C\u672B\u6587\u5B57\u306E\u51E6\u7406\u306B\u95A2\u3059\u308B\u6CE8\u8A18"}),"\n",(0,r.jsx)(n.p,{children:"XML\u306B\u304A\u3044\u3066\u3001\u6539\u884C\u306F\u305D\u308C\u304CXML\u8981\u7D20\u306E\u5185\u5074\u3042\u308B\u3044\u306F\u9593\u3044\u305A\u308C\u306B\u3042\u308B\u304B\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u5927\u304D\u306A\u610F\u5473\u3092\u6301\u3061\u307E\u305B\u3093\u3002\u5185\u90E8\u7684\u306BXML\u306F\u6A19\u6E96\u306ELF\u6587\u5B57\u3092\u884C\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8AAD\u307F\u8FBC\u307F\u3084\u66F8\u304D\u51FA\u3057\u51E6\u7406\u306E\u9593\u3001\u884C\u533A\u5207\u308A\u6587\u5B57\u306F\u5909\u63DB\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u8AAD\u307F\u8FBC\u307F\u6642\u3001XML\u30D1\u30FC\u30B5\u30FC\u306FCRLF\u6587\u5B57 (Windows\u306E\u6A19\u6E96\u6539\u884C) \u3092LF\u6587\u5B57\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002\u66F8\u304D\u51FA\u3057\u6642\u3001LF\u6587\u5B57\u306FmacOS\u3067\u306FCR\u6587\u5B57\u306B\u3001Windows\u3067\u306FCRLF\u6587\u5B57\u306B\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:['\u6539\u884C\u3092\u4FDD\u6301\u3057\u305F\u3044\u5834\u5408\u3001\u305D\u306E\u90E8\u5206\u3092XML CDATA\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u542B\u3081\u307E\u3059\u3002\u305D\u3046\u3059\u308B\u3053\u3068\u306B\u3088\u308AXML\u30D1\u30FC\u30B5\u30FC\u306F\u305D\u306E\u90E8\u5206\u3092\u89E3\u6790\u5BFE\u8C61\u3068\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002CRLF\u6587\u5B57\u306E\u4EE3\u308F\u308A\u306B"',(0,r.jsx)(n.br,{}),'"\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306F\u660E\u793A\u7684\u306A\u6539\u884C\u6587\u5B57\u3067\u3001\u30D1\u30FC\u30B5\u30FC\u306B\u3088\u308B\u89E3\u6790\u306F\u884C\u308F\u308C\u307E\u305B\u3093\u3002']}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u4F8B\u984C\u3067\u306FXML\u30C4\u30EA\u30FC",(0,r.jsx)(n.em,{children:"vElemRef"}),"\u3092\u5909\u6570\u306B\u683C\u7D0D\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vtMyText : Text\n\xa0DOM EXPORT TO VAR(vElemRef;vtMyText)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059 (\u8981\u7D20\u53C2\u7167\u304C\u7121\u52B9\u306A\u5834\u5408\u306A\u3069)\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-export-to-file",children:"DOM EXPORT TO FILE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"863"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var d=t(667294);let r={},s=d.createContext(r);function l(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);