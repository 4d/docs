"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2344"],{351835:function(n,e,d){d.r(e),d.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>i,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/sax-add-xml-cdata","title":"SAX ADD XML CDATA","description":"SAX ADD XML CDATA ( document ; data )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-add-xml-cdata.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-cdata","permalink":"/docs/ja/commands/sax-add-xml-cdata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-cdata.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-add-xml-cdata","title":"SAX ADD XML CDATA","slug":"/commands/sax-add-xml-cdata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD PROCESSING INSTRUCTION","permalink":"/docs/ja/commands/sax-add-processing-instruction"},"next":{"title":"SAX ADD XML COMMENT","permalink":"/docs/ja/commands/sax-add-xml-comment"}}'),s=d("785893"),a=d("250065");let c={id:"sax-add-xml-cdata",title:"SAX ADD XML CDATA",slug:"/commands/sax-add-xml-cdata",displayed_sidebar:"docs"},r=void 0,l={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function x(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"SAX ADD XML CDATA"})," ( ",(0,s.jsx)(e.em,{children:"document"})," ; ",(0,s.jsx)(e.em,{children:"data"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"document"}),(0,s.jsx)(e.td,{children:"Time"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u958B\u304B\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3078\u306E\u53C2\u7167"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"data"}),(0,s.jsx)(e.td,{children:"Blob, Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306ECDATA\u30BF\u30B0\u306E\u9593\u306B\u633F\u5165\u3059\u308B \u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBLOB"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:["SAX ADD XML CDATA \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(e.em,{children:"document"}),"\u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306FBLOB\u306E",(0,s.jsx)(e.em,{children:"data"}),"\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u3053\u306E",(0,s.jsx)(e.em,{children:"data"}),"\u306F\u81EA\u52D5\u3067*<![CDATA[* \u3068 *]]>*\u306E\u9593\u306B\u304A\u304B\u308C\u307E\u3059\u3002",(0,s.jsx)(e.br,{}),"\nCDATA\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u542B\u307E\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u306FXML\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u306B\u3088\u308A\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"data"}),"\u306E\u5185\u5BB9\u3092\u30A8\u30F3\u30B3\u30FC\u30C9\u3057\u305F\u3044\u5834\u5408\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/commands/base64-encode",children:"BASE64 ENCODE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u3082\u3061\u308D\u3093",(0,s.jsx)(e.em,{children:"data"}),"\u306B\u306FBLOB\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u52D5\u4F5C\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u8981\u7D20\u304C\u958B\u304B\u308C\u3066\u3044\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:"XML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u4EE5\u4E0B\u306E\u884C\u3092\u633F\u5165\u3057\u305F\u3044\u3068\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-XML",children:"function matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 1\n\xa0\xa0\xa0\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0return 0\n\xa0\xa0\xa0\xa0\xa0\xa0}\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308C\u3092\u884C\u3046\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"\xa0var vtMytext : Text\n\xa0...\xa0// place the text in the vtMytext variable here\n\xa0SAX ADD XML CDATA($DocRef;vtMytext)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7D50\u679C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-XML",children:"<![CDATA[\nfunction matchwo(a,b)\n{\nif (a < b && a < 0) then\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 1\n\xa0\xa0\xa0}\nelse\n\xa0\xa0\xa0{\n\xa0\xa0\xa0return 0\n\xa0\xa0\xa0}\n}\n]]>\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsx)(e.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u30680\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"/docs/ja/commands/sax-get-xml-cdata",children:"SAX GET XML CDATA"})}),"\n",(0,s.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"856"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2713"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(e.td,{children:"OK"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return r},a:function(){return c}});var t=d(667294);let s={},a=t.createContext(s);function c(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);