"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["514"],{734470:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/export-structure","title":"EXPORT STRUCTURE","description":"EXPORT STRUCTURE ( exportedStructure {; format} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/export-structure.md","sourceDirName":"commands-legacy","slug":"/commands/export-structure","permalink":"/docs/ja/commands/export-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-structure.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"export-structure","title":"EXPORT STRUCTURE","slug":"/commands/export-structure","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE INDEX","permalink":"/docs/ja/commands/delete-index"},"next":{"title":"Field","permalink":"/docs/ja/commands/field"}}'),s=t("785893"),d=t("250065");let c={id:"export-structure",title:"EXPORT STRUCTURE",slug:"/commands/export-structure",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EXPORT STRUCTURE"})," ( ",(0,s.jsx)(n.em,{children:"exportedStructure"})," {; ",(0,s.jsx)(n.em,{children:"format"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exportedStructure"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"4D \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u66F8\u304D\u51FA\u3057\u305FXML\u5B9A\u7FA9\u30D5\u30A1\u30A4\u30EB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Export format: xml format (default) or html format"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"EXPORT STRUCTURE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092",(0,s.jsx)(n.em,{children:"exportedStructure"})," \u3078\u3068\u66F8\u304D\u51FA\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"exportedStructure \u5F15\u6570\u306B\u306F\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092\u683C\u7D0D\u3057\u305F\u3044\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002\u66F8\u304D\u51FA\u3055\u308C\u305F\u5B9A\u7FA9\u306B\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u542B\u307E\u308C\u308B\u4ED6\u3001\u305D\u308C\u3089\u306E\u5C5E\u6027\u3084\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u306E\u5B8C\u5168\u306A\u5B9A\u7FA9\u306B\u5FC5\u8981\u306A\u4ED6\u306E\u7279\u6027\u306A\u3069\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u975E\u8868\u793A\u8981\u7D20\u306F\u305D\u308C\u306B\u5BFE\u5FDC\u3059\u308B\u5C5E\u6027\u3068\u3068\u3082\u306B\u66F8\u304D\u51FA\u3055\u308C\u307E\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u524A\u9664\u3055\u308C\u305F\u8981\u7D20\u306F\u66F8\u304D\u51FA\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"format"})," \u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092XML \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u51FA\u3057\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u6307\u5B9A\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(n.em,{children:"format"})," \u5F15\u6570\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u4E00\u3064\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(n.th,{children:"\u5024"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"html format"}),(0,s.jsx)(n.td,{children:"html"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"xml format"}),(0,s.jsx)(n.td,{children:"xml"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.strong,{children:"\u66F8\u304D\u51FA\u3057 > \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092XML \u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u51FA\u3057"})," ",(0,s.jsx)(n.strong,{children:"... \u307E\u305F\u306F"})," ",(0,s.jsx)(n.strong,{children:"\u66F8\u304D\u51FA\u3057 > \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092"})," ",(0,s.jsx)(n.strong,{children:"HTML \u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u51FA\u3057..."})," \u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306E\u3092\u9078\u629E\u3057\u305F\u6642\u3068\u540C\u3058XML \u307E\u305F\u306FHTML \u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059(",(0,s.jsx)(n.em,{children:"\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u306E\u66F8\u304D\u51FA\u3057\u3068\u8AAD\u307F\u8FBC\u307F"}),"\u53C2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"xml \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),': 4D \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u306E\u5185\u90E8\u7684\u306A"\u6587\u6CD5" \u306F\u3001DTD \u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306FXML \u30D5\u30A1\u30A4\u30EB\u306E\u691C\u8A3C\u306B\u3082\u4F7F\u7528\u3055\u308C\u307E\u3059\u30024D \u304C\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u306F\u30014D \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u96A3\u306B\u3042\u308B',(0,s.jsx)(n.strong,{children:"DTD"})," \u30D5\u30A9\u30EB\u30C0\u5185\u306B\u307E\u3068\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u306B\u4F7F\u7528\u3055\u308C\u308B\u306E\u306F\u3001",(0,s.jsx)(n.strong,{children:"base_core.dtd"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.strong,{children:"common.dtd"})," \u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u8EAB\u3068\u3001\u305D\u308C\u306B\u542B\u307E\u308C\u308B\u30B3\u30E1\u30F3\u30C8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002",(0,s.jsx)(n.br,{}),"\nXML \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u51FA\u3055\u308C\u305F\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u306F\u4ED6\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059(",(0,s.jsx)(n.a,{href:"/docs/ja/commands/import-structure",children:"IMPORT STRUCTURE"})," \u53C2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"html \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),": \u30B3\u30DE\u30F3\u30C9\u306FHTML \u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u3001\u3053\u306E\u30B3\u30FC\u30C9\u306B\u306F\u30D4\u30AF\u30C1\u30E3\u30FC\u3084css \u306A\u3069\u3001HTML \u306E\u63CF\u753B\u306B\u5FC5\u8981\u306A\u5916\u90E8\u8981\u7D20\u3092\u683C\u7D0D\u3057\u305F\u30D5\u30A9\u30EB\u30C0\u3078\u306E\u53C2\u7167\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30B3\u30FC\u30C9\u3092\u3001\u30D6\u30E9\u30A6\u30B6\u3067\u8868\u793A\u3059\u308B\u305F\u3081\u306EHTML \u30DA\u30FC\u30B8\u3068\u3057\u3066\u4FDD\u5B58\u3057\u305F\u3044\u5834\u5408\u3001",(0,s.jsx)(n.strong,{children:"\u66F8\u304D\u51FA\u3057 > \u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u5B9A\u7FA9\u3092"})," ",(0,s.jsx)(n.strong,{children:"HTML \u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u51FA\u3057..."})," \u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u3067\u4F5C\u6210\u3055\u308C\u308B\u30D5\u30A9\u30EB\u30C0\u3092\u518D\u5229\u7528\u3059\u308B\u304B\u3001\u307E\u305F\u306F\u72EC\u81EA\u306Eresources \u30D5\u30A9\u30EB\u30C0\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,s.jsx)(n.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u306B\u66F8\u304D\u51FA\u3059\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vTStruc : Text\n\xa0EXPORT STRUCTURE($vTStruc)\n\xa0TEXT TO DOCUMENT("myStructure.xml";$vTStruc)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,s.jsx)(n.p,{children:"\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u3092html \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u66F8\u304D\u51FA\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vHtml : Text\n\xa0EXPORT STRUCTURE($vHtml;html format)\n\xa0File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/commands/import-structure",children:"IMPORT STRUCTURE"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1311"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var r=t(667294);let s={},d=r.createContext(s);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);