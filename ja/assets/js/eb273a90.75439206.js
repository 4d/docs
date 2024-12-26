"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41207"],{802760:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>i,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/sax-add-xml-element-value","title":"SAX ADD XML ELEMENT VALUE","description":"SAX ADD XML ELEMENT VALUE ( document ; data {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-element-value.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-element-value","permalink":"/docs/ja/commands/sax-add-xml-element-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-element-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-element-value","title":"SAX ADD XML ELEMENT VALUE","slug":"/commands/sax-add-xml-element-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML DOCTYPE","permalink":"/docs/ja/commands/sax-add-xml-doctype"},"next":{"title":"SAX CLOSE XML ELEMENT","permalink":"/docs/ja/commands/sax-close-xml-element"}}'),t=d("785893"),l=d("250065");let r={id:"sax-add-xml-element-value",title:"SAX ADD XML ELEMENT VALUE",slug:"/commands/sax-add-xml-element-value",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," ( ",(0,t.jsx)(n.em,{children:"document"})," ; ",(0,t.jsx)(n.em,{children:"data"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u958B\u3044\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"data"}),(0,t.jsx)(n.td,{children:"Text, Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u633F\u5165\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u5909\u6570"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u6307\u5B9A\u6642: \u7279\u5225\u6587\u5B57\u3092\u30A8\u30F3\u30B3\u30FC\u30C9 \u7701\u7565\u6642: \u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u306A\u3044"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"document"})," \u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B",(0,t.jsx)(n.em,{children:"data"})," \u3092\u5909\u63DB\u305B\u305A\u306B\u76F4\u63A5\u8FFD\u52A0\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F8B\u3048\u3070\u96FB\u5B50\u30E1\u30FC\u30EB\u306E\u30DC\u30C7\u30A3\u306B\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u3092\u633F\u5165\u3059\u308B\u306E\u3068\u540C\u7B49\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"data"})," \u306B\u306F\u3001\u76F4\u63A5\u6587\u5B57\u5217\u3092\u3001\u307E\u305F\u306F4D\u5909\u6570\u3092\u6E21\u305B\u307E\u3059\u3002\u5909\u6570\u306E\u5185\u5BB9\u306FXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u633F\u5165\u3055\u308C\u308B\u524D\u306B\u30C6\u30AD\u30B9\u30C8\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"data"})," \u304C",(0,t.jsx)(n.em,{children:"undefined"})," \u306B\u8A55\u4FA1\u3055\u308C\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u30014D \u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"data"})," \u306E\u5185\u5BB9\u3092\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u305F\u3044\u5834\u5408",(0,t.jsx)(n.a,{href:"/docs/ja/commands/base64-encode",children:"BASE64 ENCODE"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3082\u3061\u308D\u3093BLOB \u3092",(0,t.jsx)(n.em,{children:"data"})," \u306B\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/xml-set-options",children:"XML SET OPTIONS"}),"\u30B3\u30DE\u30F3\u30C9\u306EXML String encoding \u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3092XML Raw data \u6E21\u3059\u3053\u3068\u3067\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u3092\u7121\u52B9\u306B\u3057\u306A\u3044\u9650\u308A\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B3\u30DE\u30F3\u30C9\u306F",(0,t.jsx)(n.em,{children:"data"})," \u5F15\u6570\u306B\u542B\u307E\u308C\u308B\u7279\u5225\u6587\u5B57 (< > \u201D \u2019...) \u3092\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u307E\u3059\u3002\u4F8B:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0XML SET OPTIONS($docRef;XML string encoding;XML raw data)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u8A2D\u5B9A\u3092\u884C\u3063\u305F\u3042\u3068\u3001",(0,t.jsx)(n.strong,{children:"SAX ADD XML ELEMENT VALUE"})," \u3092\u547C\u3073\u51FA\u3057\u305F\u3068\u304D\u6587\u5B57\u306E\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u5F37\u5236\u3057\u305F\u3044\u5834\u5408\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u306E***\u5F15\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u8981\u7D20\u304C\u958B\u304B\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u4F8B\u984C\u306F\u958B\u304B\u308C\u305FXML\u8981\u7D20\u306B",(0,t.jsx)(n.em,{children:"whitepaper.pdf"}),"\u30D5\u30A1\u30A4\u30EB\u3092\u633F\u5165\u3057\u307E\u3059:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vBMyBLOB : Blob\n\xa0DOCUMENT TO BLOB("c:\\\\whitepaper.pdf";vBMyBLOB)\n\xa0SAX ADD XML ELEMENT VALUE($DocRef;vBMyBLOB)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/sax-get-xml-element-value",children:"SAX GET XML ELEMENT VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"855"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return r}});var s=d(667294);let t={},l=s.createContext(t);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);