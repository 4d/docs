"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66886"],{513234:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-section","title":"WP Get section","description":"WP Get section ( targetObj ) | (wpDoc ; sectionIndex ) -> \u623B\u308A\u5024","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-get-section.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-section","permalink":"/docs/ja/WritePro/commands/wp-get-section","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-section.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-section","title":"WP Get section","slug":"/WritePro/commands/wp-get-section","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get position","permalink":"/docs/ja/WritePro/commands/wp-get-position"},"next":{"title":"WP Get sections","permalink":"/docs/ja/WritePro/commands/wp-get-sections"}}'),i=t("785893"),r=t("250065");let c={id:"wp-get-section",title:"WP Get section",slug:"/WritePro/commands/wp-get-section",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Get section"})," ( ",(0,i.jsx)(n.em,{children:"targetObj"})," ) | (",(0,i.jsx)(n.em,{children:"wpDoc"})," ; ",(0,i.jsx)(n.em,{children:"sectionIndex"})," ) -> \u623B\u308A\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"targetObj"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u306E\u53C2\u7167"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpDoc"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sectionIndex"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"4D Write Pro \u30BB\u30AF\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Get section"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306E\u30EC\u30F3\u30B8\u3068\u4EA4\u5DEE\u3059\u308B\u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u8981\u7D20\u3001\u3042\u308B\u3044\u306F",(0,i.jsx)(n.em,{children:"wpDoc"})," \u5F15\u6570\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u3067",(0,i.jsx)(n.em,{children:"sectionIndex"})," \u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7B2C1\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9(",(0,i.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570)\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u3068\u4EA4\u5DEE\u3059\u308B\u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,i.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306B\u306F\u4EE5\u4E0B\u306E\u3082\u306E\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,i.jsxs)(n.li,{children:["\u8981\u7D20(\u8868 / \u884C / \u6BB5\u843D / \u672C\u6587 / \u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9 / \u30D8\u30C3\u30C0\u30FC / \u30D5\u30C3\u30BF\u30FC )\u3002\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3\u3042\u308B\u3044\u306F\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u6E21\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093(\u305D\u306E\u5834\u5408\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059)\u3002",(0,i.jsx)(n.br,{}),"\n\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u304C\u30D8\u30C3\u30C0\u30FC\u307E\u305F\u306F\u30D5\u30C3\u30BF\u30FC\u306B\u6240\u5C5E\u3059\u308B\u5834\u5408\u3001",(0,i.jsx)(n.strong,{children:"WP Get section"})," \u306F\u30D8\u30C3\u30C0\u30FC\u3042\u308B\u3044\u306F\u30D5\u30C3\u30BF\u30FC\u304C\u4ED8\u5C5E\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u304C\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3067\u3042\u308B\u304B\u3001\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u6240\u5C5E\u3057\u3066\u3044\u308B\u5834\u5408\u3001",(0,i.jsx)(n.strong,{children:"WP Get section"})," \u306F\u5E38\u306B\u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059(\u305F\u3060\u3057\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304C\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3092\u9664\u304F\u3001\u305D\u306E\u5834\u5408\u306F\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u8FD4\u3055\u308C\u307E\u3059)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7B2C2\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9(",(0,i.jsx)(n.em,{children:"wpDoc"})," \u5F15\u6570)\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,i.jsx)(n.em,{children:"sectionIndex"})," \u5F15\u6570\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u5BFE\u5FDC\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059(",(0,i.jsx)(n.em,{children:"sectionIndex"})," \u306F1\u4EE5\u4E0A\u306E\u5024\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093)\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"sectionIndex"})," \u6307\u5B9A\u3057\u305F\u5F15\u6570\u306B\u5BFE\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u672A\u5B9A\u7FA9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8FD4\u3057\u307E\u3059(\u30A8\u30E9\u30FC\u306F\u8FD4\u3055\u308C\u307E\u305B\u3093)\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8:"})," \u30BB\u30AF\u30B7\u30E7\u30F3\u3042\u308B\u306F\u30EC\u30F3\u30B8\u304B\u3089\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0var $section : Object\n\xa0\xa0// \u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u53C2\u7167\u3092\u53D6\u5F97\n\xa0$section:=WP Get section(wpDoc;1)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-sections",children:"WP Get sections"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-subsection",children:"WP Get subsection"})]})]})}function j(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);