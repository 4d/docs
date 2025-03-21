"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31095"],{329321:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>a,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/dom-get-xml-attribute-by-index","title":"DOM GET XML ATTRIBUTE BY INDEX","description":"DOM GET XML ATTRIBUTE BY INDEX ( elementRef ; attribIndex ; attribName ; attribValue )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-get-xml-attribute-by-index.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-xml-attribute-by-index","permalink":"/docs/ja/commands/dom-get-xml-attribute-by-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-xml-attribute-by-index.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-get-xml-attribute-by-index","title":"DOM GET XML ATTRIBUTE BY INDEX","slug":"/commands/dom-get-xml-attribute-by-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get root XML element","permalink":"/docs/ja/commands/dom-get-root-xml-element"},"next":{"title":"DOM GET XML ATTRIBUTE BY NAME","permalink":"/docs/ja/commands/dom-get-xml-attribute-by-name"}}'),r=t("785893"),s=t("250065");let i={id:"dom-get-xml-attribute-by-index",title:"DOM GET XML ATTRIBUTE BY INDEX",slug:"/commands/dom-get-xml-attribute-by-index",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY INDEX"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," ; ",(0,r.jsx)(n.em,{children:"attribIndex"})," ; ",(0,r.jsx)(n.em,{children:"attribName"})," ; ",(0,r.jsx)(n.em,{children:"attribValue"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"XML\u8981\u7D20\u53C2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribIndex"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u5C5E\u6027\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribName"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u5C5E\u6027\u540D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribValue"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM GET XML ATTRIBUTE BY INDEX"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5C5E\u6027\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F7F\u7528\u3057\u3066\u3001\u5C5E\u6027\u540D\u3068\u5024\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u306B\u306FXML\u8981\u7D20\u53C2\u7167\u3092\u3001",(0,r.jsx)(n.em,{children:"attribIndex"}),"\u306B\u306F\u540D\u524D\u3092\u77E5\u308A\u305F\u3044\u8981\u7D20\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u540D\u524D\u304C",(0,r.jsx)(n.em,{children:"attribName"})," \u5F15\u6570\u306B\u3001\u5024\u304C",(0,r.jsx)(n.em,{children:"attribValue"})," \u5F15\u6570\u306B\u8FD4\u3055\u308C\u307E\u3059\u30024D\u306F\u53D6\u5F97\u3057\u305F\u5024\u3092\u5F15\u6570\u3068\u3057\u3066\u6E21\u3057\u305F\u5909\u6570\u3068\u540C\u3058\u578B\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u5909\u6570\u306E\u578B\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u5024\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30C6\u30AD\u30B9\u30C8\u578B\u3067\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u914D\u5217\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7\u306FXML\u30D5\u30A1\u30A4\u30EB\u4E2D\u306B\u8868\u793A\u3055\u308C\u308B\u5C5E\u6027\u306E\u9806\u756A\u901A\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002XML\u4E2D\u3001\u5C5E\u6027\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306Fname\u306E\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u9806\u306B\u4E26\u3073\u304B\u3048\u3089\u308C\u305F\u5C5E\u6027\u306E\u4F4D\u7F6E\u3092\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u70B9\u306B\u3064\u3044\u3066\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-count-xml-attributes",children:"DOM Count XML attributes"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"attribIndex"})," \u306B\u6E21\u3055\u308C\u305F\u5024\u304CXML\u8981\u7D20\u306B\u5B9A\u7FA9\u3055\u308C\u305F\u5C5E\u6027\u6570\u3088\u308A\u591A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-count-xml-attributes",title:"DOM Count XML attributes",children:"DOM Count XML attributes"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u30680\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"729"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var d=t(667294);let r={},s=d.createContext(r);function i(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);