"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59461"],{662301:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","description":"DOM SET XML ATTRIBUTE ( elementRef ; attrName ; attrValue {; attrName2 ; attrValue2 ; ... ; attrNameN ; attrValueN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-set-xml-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-attribute","permalink":"/docs/ja/commands/dom-set-xml-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-attribute.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-set-xml-attribute","title":"DOM SET XML ATTRIBUTE","slug":"/commands/dom-set-xml-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM REMOVE XML ELEMENT","permalink":"/docs/ja/commands/dom-remove-xml-element"},"next":{"title":"DOM SET XML DECLARATION","permalink":"/docs/ja/commands/dom-set-xml-declaration"}}'),r=t("785893"),d=t("250065");let l={id:"dom-set-xml-attribute",title:"DOM SET XML ATTRIBUTE",slug:"/commands/dom-set-xml-attribute",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM SET XML ATTRIBUTE"})," ( ",(0,r.jsx)(n.em,{children:"elementRef"})," ; ",(0,r.jsx)(n.em,{children:"attrName"})," ; ",(0,r.jsx)(n.em,{children:"attrValue"})," {; ",(0,r.jsx)(n.em,{children:"attrName2"})," ; ",(0,r.jsx)(n.em,{children:"attrValue2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"attrNameN"})," ; ",(0,r.jsx)(n.em,{children:"attrValueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elementRef"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"XML\u8981\u7D20\u53C2\u7167"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attrName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u8A2D\u5B9A\u3059\u308B\u5C5E\u6027"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attrValue"}),(0,r.jsx)(n.td,{children:"Text, Boolean, Integer, Real, Time, Date"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u65B0\u3057\u3044\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["DOM SET XML ATTRIBUTE \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,r.jsx)(n.em,{children:"elementRef"})," \u306B\u6E21\u3057\u305FXML\u8981\u7D20\u306B1\u3064\u4EE5\u4E0A\u306E\u5C5E\u6027\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u5B9A\u7FA9\u3055\u308C\u305F\u305D\u308C\u305E\u308C\u306E\u5C5E\u6027\u306B\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"attrName"})," \u3068 ",(0,r.jsx)(n.em,{children:"attrValue"}),"\u5F15\u6570\u306B\u305D\u308C\u305E\u308C\u8A2D\u5B9A\u3059\u308B\u5C5E\u6027\u3068\u305D\u306E\u5024\u3092 (\u5909\u6570\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u307E\u305F\u306F\u30EA\u30C6\u30E9\u30EB\u5024\u306E\u5F62\u5F0F\u3067) \u6E21\u3057\u307E\u3059\u3002\u5FC5\u8981\u306A\u3060\u3051\u5C5E\u6027/\u5024\u306E\u30DA\u30A2\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"attrValue"})," \u5F15\u6570\u306F\u30C6\u30AD\u30B9\u30C8\u3042\u308B\u3044\u306F (\u30D6\u30FC\u30EB\u3001\u6574\u6570\u3001\u5B9F\u6570\u3001\u65E5\u4ED8\u307E\u305F\u306F\u6642\u9593\u306A\u3069) \u4ED6\u306E\u30BF\u30A4\u30D7\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u4EE5\u5916\u306E\u5024\u3092\u6E21\u3057\u305F\u5834\u5408\u30014D\u306F\u4EE5\u4E0B\u306E\u539F\u5247\u306B\u57FA\u3065\u304D\u30C6\u30AD\u30B9\u30C8\u306B\u5909\u63DB\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u578B"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5909\u63DB\u3055\u308C\u305F\u5024\u306E\u4F8B"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30D6\u30FC\u30EB"}),(0,r.jsx)(n.td,{children:'"true" \u307E\u305F\u306F "false"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6574\u6570"}),(0,r.jsx)(n.td,{children:'"123456"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5B9F\u6570"}),(0,r.jsx)(n.td,{children:'"12.34" (\u5C0F\u6570\u70B9\u306F\u5E38\u306B ".")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u65E5\u4ED8"}),(0,r.jsx)(n.td,{children:'"2006-12-04T00:00:00Z" (RFC 3339 \u6A19\u6E96)'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6642\u9593"}),(0,r.jsx)(n.td,{children:'"5233" (\u79D2\u6570)'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306EXML\u30BD\u30FC\u30B9\u304C\u3042\u308B\u3068\u304D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrName:="Font"\n\xa0vAttrVal:="Verdana"\n\xa0DOM SET XML ATTRIBUTE(vElemRef;vAttrName;vAttrVal)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title Font=Verdana>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-get-xml-attribute-by-index",children:"DOM GET XML ATTRIBUTE BY INDEX"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-get-xml-attribute-by-name",children:"DOM GET XML ATTRIBUTE BY NAME"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/dom-remove-xml-attribute",children:"DOM REMOVE XML ATTRIBUTE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"866"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);