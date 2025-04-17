"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88919"],{371449:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/sax-add-processing-instruction","title":"SAX ADD PROCESSING INSTRUCTION","description":"SAX ADD PROCESSING INSTRUCTION ( document ; statement )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-add-processing-instruction.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-processing-instruction","permalink":"/docs/ja/20-R8/commands/sax-add-processing-instruction","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-processing-instruction.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-add-processing-instruction","title":"SAX ADD PROCESSING INSTRUCTION","slug":"/commands/sax-add-processing-instruction","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"XML SAX","permalink":"/docs/ja/20-R8/commands/theme/XML-SAX"},"next":{"title":"SAX ADD XML CDATA","permalink":"/docs/ja/20-R8/commands/sax-add-xml-cdata"}}'),d=s("785893"),r=s("250065");let c={id:"sax-add-processing-instruction",title:"SAX ADD PROCESSING INSTRUCTION",slug:"/commands/sax-add-processing-instruction",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"SAX ADD PROCESSING INSTRUCTION"})," ( ",(0,d.jsx)(e.em,{children:"document"})," ; ",(0,d.jsx)(e.em,{children:"statement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"document"}),(0,d.jsx)(e.td,{children:"Time"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u958B\u304B\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"statement"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u633F\u5165\u3059\u308B\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["SAX ADD PROCESSING INSTRUCTION\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"document"}),"\u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306BXML\u51E6\u7406\u547D\u4EE4",(0,d.jsx)(e.em,{children:"statement"}),"\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u51E6\u7406\u547D\u4EE4\u3092\u4F7F\u7528\u3057\u3066\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30D7\u3084\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u8FFD\u52A0\u306E\u30D1\u30E9\u30E1\u30BF\u3092\u6307\u5B9A\u3057\u3001\u89E3\u6790\u3067\u304D\u306A\u3044\u5916\u90E8\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3092\u51E6\u7406\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306FXML\u306B\u5F93\u3063\u3066\u30C7\u30FC\u30BF\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3092\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u81EA\u8EAB\u306F\u89E3\u6790\u3055\u308C\u305A\u3001\u305D\u308C\u304C\u6709\u52B9\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u306E\u306F\u958B\u767A\u8005\u306E\u8CAC\u4EFB\u3067\u3059\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306B\u304A\u3044\u3066:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0vtInstruct:="xml-stylesheet type="+Char(Quotes)+"text/xsl"+Char(Quotes)+\n\xa0"href="+Char(Quotes)+"style.xsl"+Char(Quotes)\n\xa0SAX ADD PROCESSING INSTRUCTION($DocRef;vtInstruct)\n'})}),"\n",(0,d.jsx)(e.p,{children:"\u4E0A\u8A18\u306E\u30B3\u30FC\u30C9\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u4EE5\u4E0B\u306E\u884C\u3092\u66F8\u304D\u8FBC\u307F\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-XML",children:'<?xml-stylesheet type="text/xsl" href="style.xsl"?>\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/sax-get-xml-processing-instruction",children:"SAX GET XML PROCESSING INSTRUCTION"})}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"857"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return c}});var t=s(667294);let d={},r=t.createContext(d);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);