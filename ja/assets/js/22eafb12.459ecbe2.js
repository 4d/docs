"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87968"],{855695:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"WritePro/commands/wp-delete-section","title":"WP DELETE SECTION","description":"WP DELETE SECTION ( section ) WP DELETE SECTION ( wpDoc ; indexNumber {; count} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands/wp-delete-section.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-delete-section","permalink":"/docs/ja/WritePro/commands/wp-delete-section","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-delete-section.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-delete-section","title":"WP DELETE SECTION","slug":"/WritePro/commands/wp-delete-section","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP DELETE PICTURE","permalink":"/docs/ja/WritePro/commands/wp-delete-picture"},"next":{"title":"WP DELETE STYLE SHEET","permalink":"/docs/ja/WritePro/commands/wp-delete-style-sheet"}}'),r=t("785893"),d=t("250065");let c={id:"wp-delete-section",title:"WP DELETE SECTION",slug:"/WritePro/commands/wp-delete-section",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP DELETE SECTION"})," ( ",(0,r.jsx)(n.em,{children:"section"})," )",(0,r.jsx)(n.br,{})," ",(0,r.jsx)(n.strong,{children:"WP DELETE SECTION"})," ( ",(0,r.jsx)(n.em,{children:"wpDoc"})," ; ",(0,r.jsx)(n.em,{children:"indexNumber"})," {; ",(0,r.jsx)(n.em,{children:"count"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"section"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Write Pro \u30BB\u30AF\u30B7\u30E7\u30F3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"wpDoc"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"indexNumber"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u30BB\u30AF\u30B7\u30E7\u30F3\u306E\u6570"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP DELETE SECTION"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,r.jsx)(n.em,{children:"section"})," \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u6E21\u3055\u308C\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3059\u308B\u304B\u3001\u307E\u305F\u306F",(0,r.jsx)(n.em,{children:"indexNumber"})," \u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u6301\u3064\u30BB\u30AF\u30B7\u30E7\u30F3\u304B\u3089",(0,r.jsx)(n.em,{children:"count"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u6570\u3060\u30511\u3064\u4EE5\u4E0A\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3057\u307E\u3059\u3002 \u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u308B\u3068\u3001\u30D8\u30C3\u30C0\u30FC\u3001\u30D5\u30C3\u30BF\u30FC\u3001\u672C\u6587\u306E\u4E00\u90E8\u3001\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u305F\u753B\u50CF\u3001\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3001\u7D42\u4E86\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF(\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF\u307E\u305F\u306F\u7D99\u7D9A\u7684\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF\u304B\u306B\u95A2\u308F\u3089\u305A)\u306A\u3069\u3001\u305D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u305F\u3082\u306E\u3082\u524A\u9664\u3055\u308C\u307E\u3059\u3002 \u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u308B\u3068\u3001\u30D8\u30C3\u30C0\u30FC\u3001\u30D5\u30C3\u30BF\u30FC\u3001\u672C\u6587\u306E\u4E00\u90E8\u3001\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u305F\u753B\u50CF\u3001\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3001\u7D42\u4E86\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF(\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF\u307E\u305F\u306F\u7D99\u7D9A\u7684\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF\u304B\u306B\u95A2\u308F\u3089\u305A)\u306A\u3069\u3001\u305D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u305F\u3082\u306E\u3082\u524A\u9664\u3055\u308C\u307E\u3059\u3002 \u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u308B\u3068\u3001\u30D8\u30C3\u30C0\u30FC\u3001\u30D5\u30C3\u30BF\u30FC\u3001\u672C\u6587\u306E\u4E00\u90E8\u3001\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u305F\u753B\u50CF\u3001\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3001\u7D42\u4E86\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF(\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF\u307E\u305F\u306F\u7D99\u7D9A\u7684\u306A\u30BB\u30AF\u30B7\u30E7\u30F3\u30D6\u30EC\u30FC\u30AF\u304B\u306B\u95A2\u308F\u3089\u305A)\u306A\u3069\u3001\u305D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u305F\u3082\u306E\u3082\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP DELETE SECTION"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5168\u3066\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3057\u3088\u3046\u3068\u3057\u305F\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u30BB\u30AF\u30B7\u30E7\u30F3\u304C1\u3064\u3057\u304B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u3088\u3046\u306A\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP DELETE SECTION"})," \u306F\u3001\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3068\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u5C5E\u6027\u3092\u518D\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3057\u3001\u5909\u66F4\u5F8C\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3078\u3068\u5408\u81F4\u3059\u308B\u3088\u3046\u306B\u30A2\u30F3\u30AB\u30FC\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002  \u4F8B\u3048\u3070\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u56DB\u3064\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u3042\u308A\u30012\u756A\u76EE\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u305F\u5834\u5408\u3001\u30BB\u30AF\u30B7\u30E7\u30F33\u30684\u306F\u305D\u308C\u305E\u308C\u30BB\u30AF\u30B7\u30E7\u30F32\u30683\u3068\u306A\u308A\u3001\u5B9F\u884C\u524D\u306B\u306F\u30BB\u30AF\u30B7\u30E7\u30F33\u30684\u306B\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u3066\u3044\u305F\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304A\u3088\u3073\u30D4\u30AF\u30C1\u30E3\u30FC\u306F\u30BB\u30AF\u30B7\u30E7\u30F32\u30683\u306B\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u307E\u3059\u3002 \u4F8B\u3048\u3070\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u56DB\u3064\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u3042\u308A\u30012\u756A\u76EE\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u305F\u5834\u5408\u3001\u30BB\u30AF\u30B7\u30E7\u30F33\u30684\u306F\u305D\u308C\u305E\u308C\u30BB\u30AF\u30B7\u30E7\u30F32\u30683\u3068\u306A\u308A\u3001\u5B9F\u884C\u524D\u306B\u306F\u30BB\u30AF\u30B7\u30E7\u30F33\u30684\u306B\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u3066\u3044\u305F\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304A\u3088\u3073\u30D4\u30AF\u30C1\u30E3\u30FC\u306F\u30BB\u30AF\u30B7\u30E7\u30F32\u30683\u306B\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u753B\u50CF\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304C\u30DA\u30FC\u30B8(\u4F8B:20\u30DA\u30FC\u30B8\u76EE)\u3078\u3068\u30A2\u30F3\u30AB\u30FC\u3055\u308C\u3066\u3044\u3066\u3001\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u524A\u9664\u3055\u308C\u305F\u5F8C\u306B\u305D\u306E\u30DA\u30FC\u30B8\u304C\u6B8B\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u753B\u50CF(\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306B\u6B8B\u308A\u7D9A\u3051\u3001\u5F8C\u306B20\u30DA\u30FC\u30B8\u76EE\u304C\u307E\u305F\u3042\u3089\u308F\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u305D\u306E20\u30DA\u30FC\u30B8\u76EE\u306B\u753B\u50CF(\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9)\u304C\u518D\u5EA6\u767A\u751F\u3057\u307E\u3059\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u6700\u521D\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\nwpDoc:=WP Import document("test.wp")\n// \u30BB\u30AF\u30B7\u30E7\u30F31\u306E\u307F\u3092\u524A\u9664\u3059\u308B(\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306B\u30BB\u30AF\u30B7\u30E7\u30F3\u304C1\u3064\u3057\u304B\u306A\u3044\u5834\u5408\u3092\u9664\u304D\u30A8\u30E9\u30FC\u306F\u767A\u751F\u3057\u306A\u3044)\nWP DELETE SECTION(wpDoc ; 1) \n'})}),"\n",(0,r.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306E\u30BB\u30AF\u30B7\u30E7\u30F35\u3092\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\nwpDoc:=WP Import document("test.wp")\n// \u30BB\u30AF\u30B7\u30E7\u30F3 5\u306E\u307F\u3092\u524A\u9664\u3057\u307E\u3059\nWP DELETE SECTION(wpDoc ; 5)\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u5185\u306E\u30BB\u30AF\u30B7\u30E7\u30F35\u30016\u30017\u3092\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' \nwpDoc:=WP Import document("test.wp")\nWP DELETE SECTION(wpDoc ; 5 ; 3 )\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u30BB\u30AF\u30B7\u30E7\u30F35\u4EE5\u964D\u306E\u5168\u3066\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' \nwpDoc:=WP Import document("test.wp")\n// \u30BB\u30AF\u30B7\u30E7\u30F35 \u4EE5\u964D\u306E\u5168\u3066\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3059\u308B(\u30BB\u30AF\u30B7\u30E7\u30F35 \u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3092\u9664\u304D\u3001\u30A8\u30E9\u30FC\u306F\u767A\u751F\u3057\u306A\u3044)\nWP DELETE SECTION(wpDoc ; 5 ; MAXLONG )\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u30BB\u30AF\u30B7\u30E7\u30F35\u3092\u53D6\u5F97\u3057\u3066\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' \nwpDoc:=WP Import document("test.wp")\n// \u30BB\u30AF\u30B7\u30E7\u30F35 \u3092\u53D6\u5F97\n$section:=WP Get section(wpDoc, 5)\n// $section \u3092\u524A\u9664\nWP DELETE SECTION($section)\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-get-section",children:"WP Get section"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let r={},d=s.createContext(r);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);