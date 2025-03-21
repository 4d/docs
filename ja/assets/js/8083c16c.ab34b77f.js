"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59724"],{590947:function(e,n,d){d.r(n),d.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","description":"SAX ADD XML DOCTYPE ( document ; docType )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-doctype.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-doctype","permalink":"/docs/ja/20-R7/commands/sax-add-xml-doctype","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-doctype.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","slug":"/commands/sax-add-xml-doctype","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML COMMENT","permalink":"/docs/ja/20-R7/commands/sax-add-xml-comment"},"next":{"title":"SAX ADD XML ELEMENT VALUE","permalink":"/docs/ja/20-R7/commands/sax-add-xml-element-value"}}'),t=d("785893"),c=d("250065");let l={id:"sax-add-xml-doctype",title:"SAX ADD XML DOCTYPE",slug:"/commands/sax-add-xml-doctype",displayed_sidebar:"docs"},r=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX ADD XML DOCTYPE"})," ( ",(0,t.jsx)(n.em,{children:"document"})," ; ",(0,t.jsx)(n.em,{children:"docType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u958B\u3044\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u53C2\u7167"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u8FFD\u52A0\u3059\u308BDocType"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["SAX ADD XML DOCTYPE \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"document"}),"\u3067\u53C2\u7167\u3055\u308C\u308BXML\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B",(0,t.jsx)(n.em,{children:"docType"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305FDocType\u6587\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"DocType\u6587\u306F\u66F8\u304B\u308C\u305FXML\u306E\u30BF\u30A4\u30D7\u3092\u793A\u3057\u3001\u4F7F\u7528\u3055\u308C\u308B Document Type Declaration (DTD) \u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002DocType\u6587\u306F\u901A\u5E38\u4EE5\u4E0B\u306E\u5F62\u5F0F\u3067\u3059:"}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vDocType:="SYSTEM Books \\"Book.DTD\\""\n\xa0SAX ADD XML DOCTYPE($DocRef;vDocType)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u4EE5\u4E0B\u306E\u884C\u3092\u66F8\u304D\u8FBC\u307F\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:'<<!DOCTYPE SYSTEM Books "Book.DTD">\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u30680\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3068\u3089\u3048\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sax-add-xml-comment",children:"SAX ADD XML COMMENT"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"851"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return l}});var s=d(667294);let t={},c=s.createContext(t);function l(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);