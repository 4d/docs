"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90734"],{685132:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/svg-find-element-ids-by-rect","title":"SVG Find element IDs by rect","description":"SVG Find element IDs by rect ( { ;} pictureObject ; x ; y ; width ; height ; arrIDs* ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-find-element-ids-by-rect.md","sourceDirName":"commands-legacy","slug":"/commands/svg-find-element-ids-by-rect","permalink":"/docs/ja/commands/svg-find-element-ids-by-rect","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-find-element-ids-by-rect.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-find-element-ids-by-rect","title":"SVG Find element IDs by rect","slug":"/commands/svg-find-element-ids-by-rect","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG Find element ID by coordinates","permalink":"/docs/ja/commands/svg-find-element-id-by-coordinates"},"next":{"title":"SVG GET ATTRIBUTE","permalink":"/docs/ja/commands/svg-get-attribute"}}'),d=t("785893"),r=t("250065");let i={id:"svg-find-element-ids-by-rect",title:"SVG Find element IDs by rect",slug:"/commands/svg-find-element-ids-by-rect",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SVG Find element IDs by rect"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"pictureObject"})," ; ",(0,d.jsx)(n.em,{children:"x"})," ; ",(0,d.jsx)(n.em,{children:"y"})," ; ",(0,d.jsx)(n.em,{children:"width"})," ; ",(0,d.jsx)(n.em,{children:"height"})," ; ",(0,d.jsx)(n.em,{children:"arrIDs"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["\u6307\u5B9A\u6642: pictureObject\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57) ",(0,d.jsx)(n.br,{}),"\u7701\u7565\u6642: pictureObject\u306F\u5909\u6570"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"pictureObject"}),(0,d.jsx)(n.td,{children:"Picture"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"x"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u9078\u629E\u9818\u57DF\u306E\u5DE6\u4E0A\u306E\u6A2A\u5EA7\u6A19"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"y"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u9078\u629E\u9818\u57DF\u306E\u5DE6\u4E0A\u306E\u7E26\u5EA7\u6A19"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"width"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u9078\u629E\u9818\u57DF\u306E\u5E45"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"height"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u9078\u629E\u9818\u57DF\u306E\u9AD8\u3055"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"arrIDs"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u56DB\u89D2\u304C\u9078\u629E\u9818\u57DF\u306B\u4EA4\u5DEE\u3059\u308B\u8981\u7D20\u306EID"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = \u6700\u4F4E1\u3064\u306E\u8981\u7D20\u304C\u898B\u3064\u304B\u3063\u305F"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:['SVG Find element IDs by rect \u30B3\u30DE\u30F3\u30C9\u306F\u3001 \u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u56DB\u89D2\u304C\u9078\u629E\u9818\u57DF\u306B\u4EA4\u5DEE\u3059\u308BXML\u8981\u7D20\u306EID ("id"\u307E\u305F\u306F"xml:id"\u5C5E\u6027) \u3092\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u6587\u5B57\u914D\u5217\u306E',(0,d.jsx)(n.em,{children:"arrIDs"}),"\u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002\u9078\u629E\u9818\u57DF\u306F",(0,d.jsx)(n.em,{children:"x"}),"\u304A\u3088\u3073",(0,d.jsx)(n.em,{children:"y"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6700\u4F4E1\u3064\u306E\u8981\u7D20\u304C\u898B\u3064\u304B\u308B\u3068\u3001\u8A00\u3044\u63DB\u3048\u308C\u3070",(0,d.jsx)(n.em,{children:"arrIDs"}),"\u914D\u5217\u304C\u7A7A\u3067\u306A\u3051\u308C\u3070\u3001\u30B3\u30DE\u30F3\u30C9\u306FTrue\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070False\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u7279\u306B\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u306A\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,d.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001",(0,d.jsx)(n.em,{children:"pictureObject"}),"\u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u3068\u3001",(0,d.jsx)(n.em,{children:"pictureObject"}),"\u5F15\u6570\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u306E\u53C2\u7167 (\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F) \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u3084\u5909\u6570\u3067\u4F5C\u696D\u3092\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306B\u5BFE\u5FDC\u3059\u308B\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u30D4\u30AF\u30C1\u30E3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u4F5C\u696D\u3092\u884C\u3063\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30D4\u30AF\u30C1\u30E3\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u30D4\u30AF\u30C1\u30E3\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/commands/svg-set-attribute",title:"SVG SET ATTRIBUTE",children:"SVG SET ATTRIBUTE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u5909\u66F4\u3055\u308C\u3066\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3057\u3001\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u4FDD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"x"}),"\u3068",(0,d.jsx)(n.em,{children:"y"}),"\u5F15\u6570\u306B\u6E21\u3055\u308C\u308B\u5EA7\u6A19\u306F\u30D4\u30AF\u30C1\u30E3\u306E\u5DE6\u4E0A\u5EA7\u6A19 (0, 0) \u304B\u3089\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u8868\u73FE\u3055\u308C\u307E\u3059\u3002MouseX\u3068MouseY\u304B\u3089\u8FD4\u3055\u308C\u308B\u5024\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5909\u6570\u306FOn Clicked\u3001On Double Clicked\u3084On Mouse Enter\u3068On Mouse Move\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3067\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"}),' \u30D4\u30AF\u30C1\u30E3\u306E\u5EA7\u6A19\u30B7\u30B9\u30C6\u30E0\u4E2D[x;y]\u306F\u3001"\u7E70\u308A\u8FD4\u3057"\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u9664\u304D\u3001\u30D4\u30AF\u30C1\u30E3\u8868\u793A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u304B\u304B\u308F\u3089\u305A\u5E38\u306B\u540C\u3058\u5834\u6240\u3092\u30DD\u30A4\u30F3\u30C8\u3057\u307E\u3059\u3002']}),"\n",(0,d.jsx)(n.p,{children:"\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u56DB\u89D2\u304C\u9078\u629E\u9818\u57DF\u306B\u91CD\u306A\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u304C\u3001\u305F\u3068\u3048\u4ED6\u306E\u8981\u7D20\u306E\u4E0B\u306B\u306A\u3063\u3066\u3044\u3066\u3082\u3001\u5BFE\u8C61\u3068\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/commands/svg-find-element-id-by-coordinates",children:"SVG Find element ID by coordinates"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1109"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);