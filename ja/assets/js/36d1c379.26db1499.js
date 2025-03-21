"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8086"],{858687:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/svg-get-attribute","title":"SVG GET ATTRIBUTE","description":"SVG GET ATTRIBUTE ( { ;} pictureObject ; element_ID ; attribName ; attribValue* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/svg-get-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/svg-get-attribute","permalink":"/docs/ja/commands/svg-get-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsvg-get-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"svg-get-attribute","title":"SVG GET ATTRIBUTE","slug":"/commands/svg-get-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SVG Find element IDs by rect","permalink":"/docs/ja/commands/svg-find-element-ids-by-rect"},"next":{"title":"SVG SET ATTRIBUTE","permalink":"/docs/ja/commands/svg-set-attribute"}}'),r=t("785893"),d=t("250065");let i={id:"svg-get-attribute",title:"SVG GET ATTRIBUTE",slug:"/commands/svg-get-attribute",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SVG GET ATTRIBUTE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"pictureObject"})," ; element_ID ; ",(0,r.jsx)(n.em,{children:"attribName"})," ; ",(0,r.jsx)(n.em,{children:"attribValue"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["\u6307\u5B9A\u6642: pictureObject\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57) ",(0,r.jsx)(n.br,{}),"\u7701\u7565\u6642: pictureObject\u306F\u5909\u6570"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pictureObject"}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F ",(0,r.jsx)(n.br,{}),"\u5909\u6570 (* \u7701\u7565\u6642)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"element_ID"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u5C5E\u6027\u5024\u3092\u53D6\u5F97\u3059\u308B\u8981\u7D20\u306EID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u53D6\u5F97\u3059\u308B\u5C5E\u6027"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"attribValue"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u73FE\u5728\u306E\u5C5E\u6027\u5024"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SVG GET ATTRIBUTE"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306FSVG\u30D4\u30AF\u30C1\u30E3\u306E",(0,r.jsx)(n.em,{children:"attribName"}),"\u5C5E\u6027\u306E\u73FE\u5728\u5024\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001",(0,r.jsx)(n.em,{children:"pictureObject"}),"\u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57) \u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30A2\u30BF\u30C3\u30C1\u3055\u308C\u305F\u63CF\u753B\u30A4\u30E1\u30FC\u30B8\u306E\u5C5E\u6027\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u5024\u306F\u4F8B\u3048\u3070",(0,r.jsx)(n.a,{href:"/docs/ja/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"}),"\u3067\u5909\u66F4\u3055\u308C\u3066\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u3068\u3001",(0,r.jsx)(n.em,{children:"pictureObject"}),"\u5F15\u6570\u306F\u5909\u6570\u3067\u3059\u3002\u5F93\u3063\u3066\u6587\u5B57\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167 (\u5909\u6570\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F) \u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6700\u521D\u306B\u63CF\u753B\u3055\u308C\u305F\u30A4\u30E1\u30FC\u30B8\u306E\u5C5E\u6027\u5024\u3092\u8FD4\u3057\u307E\u3059 (\u5909\u6570\u306E\u30C7\u30FC\u30BF\u30FC\u30BD\u30FC\u30B9\u306B\u5BFE\u5FDC)\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u539F\u5247\u306F\u65E2\u5B58\u306E",(0,r.jsx)(n.a,{href:"/docs/ja/commands/svg-find-element-id-by-coordinates",children:"SVG Find element ID by coordinates"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u9069\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"element_ID"}),' \u5F15\u6570\u306F\u5C5E\u6027\u5024\u3092\u53D6\u5F97\u3057\u305F\u3044\u8981\u7D20\u306EID ("id"\u307E\u305F\u306F"xml:id"\u5C5E\u6027) \u3092\u8A2D\u5B9A\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002']}),"\n",(0,r.jsxs)(n.p,{children:["SVG\u5C5E\u6027\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4EE5\u4E0B\u306F\u4E88\u7D04\u6E08\u307F\u307E\u305F\u306F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3059\u308B4D\u306E\u5C5E\u6027\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5C5E\u6027"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u30A2\u30AF\u30BB\u30B9"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u30B3\u30E1\u30F3\u30C8"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D-text"}),(0,r.jsx)(n.td,{children:"\u8AAD\u307F/\u66F8\u304D"}),(0,r.jsx)(n.td,{children:"\u30C6\u30AD\u30B9\u30C8\u30CE\u30FC\u30C9\u306E\u5185\u5BB9\u3092\u7F6E\u304D\u63DB\u3048/\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002'text'\u3001'tspan'\u3001\u304A\u3088\u3073'textArea'\u8981\u7D20\u3067\u5229\u7528\u3067\u304D\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D-bringToFront"}),(0,r.jsx)(n.td,{children:"\u8AAD\u307F\u8FBC\u307F"}),(0,r.jsxs)(n.td,{children:["'true'\u306E\u5834\u5408\u3001\u30CE\u30FC\u30C9\u3092\u5144\u5F1F\u30CE\u30FC\u30C9\u306E\u524D\u9762\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u306E\u307F\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D-isOfClass-{IDENT [[S|COMMA] IDENT]*}"}),(0,r.jsx)(n.td,{children:"\u8AAD\u307F\u8FBC\u307F"}),(0,r.jsx)(n.td,{children:"\u30CE\u30FC\u30C9\u306E\u7D99\u627F\u30AF\u30E9\u30B9\u5C5E\u6027\u304C\u3059\u3079\u3066\u306E\u30AF\u30E9\u30B9\u540D\u3092\u542B\u3080\u5834\u5408\u306B'true'\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070'false'\u3092\u8FD4\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\"4D-isOfClass-land\"\u306B\u5BFE\u3057\u3066\u30CE\u30FC\u30C9\u306E\u7D99\u627F\u3055\u308C\u305F\u30AF\u30E9\u30B9\u304C\"land department01\" \u306E\u5834\u5408\u3001true\u3092\u8FD4\u3057\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4D-enableD2D"}),(0,r.jsx)(n.td,{children:"\u8AAD\u307F/\u66F8\u304D"}),(0,r.jsxs)(n.td,{children:["'false'\u306E\u5834\u5408\u3001SVG\u63CF\u753B\u30A8\u30F3\u30B8\u30F3\u306EDirect2D\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002\u5B9F\u969BSVG\u30D5\u30A3\u30EB\u30BF\u30FC\u306FDirect2D\u3067\u306F\u63CF\u753B\u3055\u308C\u305A\u3001GDI/GDIPlus\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308C\u3070\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304CDirect2D\u30E2\u30FC\u30C9\u3067\u3042\u3063\u3066\u3082SVG\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30D4\u30AF\u30C1\u30E3\u30FC\u304C",(0,r.jsx)(n.em,{children:"pictureObject"}),"\u306B\u30ED\u30FC\u30C9\u6E08\u307F\u3067\u3042\u308B\u5834\u5408\u306E\u307F\u52B9\u679C\u304C\u3042\u308B\u70B9\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30A8\u30F3\u30B8\u30F3\u306B\u30B0\u30ED\u30FC\u30D0\u30EB\u306B\u8A2D\u5B9A\u3055\u308C\u308B\u305F\u3081\u3001\u30BB\u30C3\u30B7\u30E7\u30F3\u6BCE\u306B\u4E00\u56DE\u8A2D\u5B9A\u3059\u308C\u3070\u5341\u5206\u3067\u3059 (\u4F8B\u3048\u3070\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u958B\u59CB\u6642\u306B\u30C6\u30AD\u30B9\u30C8\u5909\u6570\u304B\u3089\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u305F\u5C0F\u3055\u306ASVG\u306E\u3088\u3046\u306A\u30B1\u30FC\u30B9)\u3002"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/svg-set-attribute",children:"SVG SET ATTRIBUTE"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1056"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);