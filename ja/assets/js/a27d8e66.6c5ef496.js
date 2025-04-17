"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28477"],{831807:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/abort","title":"ABORT","description":"ABORT","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/abort.md","sourceDirName":"commands-legacy","slug":"/commands/abort","permalink":"/docs/ja/commands/abort","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"abort","title":"ABORT","slug":"/commands/abort","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"\u5272\u308A\u8FBC\u307F","permalink":"/docs/ja/commands/theme/Interruptions"},"next":{"title":"ASSERT","permalink":"/docs/ja/commands/assert"}}'),r=t("785893"),d=t("250065");let l={id:"abort",title:"ABORT",slug:"/commands/abort",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"ABORT"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(e.table,{children:(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,r.jsx)(e.th,{})]})})}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["ABORT \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u3068\uFF08\u4F8B\u3048\u3070\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u30A8\u30E9\u30FC\uFF09\u30014D\u306F\u6A19\u6E96\u306E\u30A8\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u3001\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u304C\u4E2D\u65AD\u3055\u308C\u307E\u3059\u3002\u5B9F\u884C\u3057\u3066\u3044\u308B\u30B3\u30FC\u30C9\u306B\u3088\u308A\u3001\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3001\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\uFF08\u3042\u308B\u3044\u306F\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304B\u3089\u30B3\u30FC\u30EB\u3055\u308C\u305F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\uFF09\u306E\u5834\u5408\u3001\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30FC\u30E0\u306B\u5236\u5FA1\u304C\u623B\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u547C\u3073\u51FA\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5834\u5408\u3001\u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\u307E\u305F\u306F\u73FE\u5728\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30D5\u30A9\u30FC\u30E0\u306B\u5236\u5FA1\u304C\u623B\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30D7\u30ED\u30BB\u30B9\u306E\u30DE\u30B9\u30BF\u30FC\u30E1\u30BD\u30C3\u30C9\u306E\u5834\u5408\u3001\u30D7\u30ED\u30BB\u30B9\u306F\u7D42\u4E86\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u3001\u307E\u305F\u306F\u66F8\u304D\u51FA\u3057\u51E6\u7406\u306B\u3088\u308A\u76F4\u63A5\u7684\u3042\u308B\u3044\u306F\u9593\u63A5\u7684\u306B\u547C\u3073\u51FA\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u5834\u5408\u3001\u51E6\u7406\u306F\u4E2D\u6B62\u3055\u308C\u307E\u3059\u3002\u9806\u6B21\u30AF\u30A8\u30EA\u3084\u4E26\u3073\u66FF\u3048\u51E6\u7406\u306B\u95A2\u3057\u3066\u3082\u540C\u69D8\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u305D\u306E\u4ED6"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30A8\u30E9\u30FC\u3092\u691C\u77E5\u3059\u308B\u5834\u5408\u30014D\u306F\u6A19\u6E96\u306E\u30A8\u30E9\u30FC\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u306E\u8868\u793A\u3082\u30B3\u30FC\u30C9\u306E\u5B9F\u884C\u306E\u4E2D\u65AD\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u3053\u306E\u4EE3\u308A\u306B\u30014D\u306F\u30A8\u30E9\u30FC\u51E6\u7406\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3001\u30A8\u30E9\u30FC\u3092\u767A\u751F\u3057\u305F\u30E1\u30BD\u30C3\u30C9\u306E\u6B21\u306E\u30B3\u30FC\u30C9\u884C\u304B\u3089\u5B9F\u884C\u3092\u518D\u958B\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u51E6\u7406\u3067\u304D\u308B\u30A8\u30E9\u30FC\u3082\u3042\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u30A4\u30F3\u30DD\u30FC\u30C8\u51E6\u7406\u4E2D\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A8\u30F3\u30B8\u30F3\u304B\u3089\u306E\u91CD\u8907\u5024\u30A8\u30E9\u30FC\u3092\u691C\u51FA\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u30A8\u30E9\u30FC\u3092\u201C\u30AB\u30D0\u30FC\u201D\u3057\u3066\u3001\u30A4\u30F3\u30DD\u30FC\u30C8\u51E6\u7406\u3092\u7D9A\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057\u3001\u5BFE\u51E6\u3067\u304D\u306A\u3044\u30A8\u30E9\u30FC\u3084\u201C\u30AB\u30D0\u30FC\u201D\u3057\u3066\u306F\u3044\u3051\u306A\u3044\u30A8\u30E9\u30FC\u3082\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30A8\u30E9\u30FC\u51E6\u7406\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u304B\u3089ABORT\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u5B9F\u884C\u3092\u4E2D\u6B62\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,r.jsx)(e.p,{children:"ABORT \u30B3\u30DE\u30F3\u30C9\u306F\u30A8\u30E9\u30FC\u51E6\u7406\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u304C\u30014D\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u306F\u5B9F\u884C\u3092\u4E2D\u65AD\u3059\u308B\u305F\u3081\u306B\u4ED6\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9 \u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u30E1\u30F3\u30D0\u30FC\u3082\u5B58\u5728\u3057\u307E\u3059\u3002\u3053\u308C\u304C\u52D5\u4F5C\u3059\u308B\u3068\u3044\u3046\u306E\u306F\u5358\u306B\u526F\u6B21\u7684\u306A\u52B9\u679C\u306B\u904E\u304E\u307E\u305B\u3093\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u4EE5\u5916\u306E\u30E1 \u30BD\u30C3\u30C9\u5185\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u304A\u52E7\u3081\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"156"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);