"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26776"],{856595:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>o,toc:()=>r,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/web-legacy-close-session","title":"WEB LEGACY CLOSE SESSION","description":"WEB LEGACY CLOSE SESSION ( sessionID )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-legacy-close-session.md","sourceDirName":"commands-legacy","slug":"/commands/web-legacy-close-session","permalink":"/docs/ja/20-R8/commands/web-legacy-close-session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-legacy-close-session.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-legacy-close-session","title":"WEB LEGACY CLOSE SESSION","slug":"/commands/web-legacy-close-session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Is server running","permalink":"/docs/ja/20-R8/commands/web-is-server-running"},"next":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/ja/20-R8/commands/web-legacy-get-session-expiration"}}'),l=s("785893"),t=s("250065");let c={id:"web-legacy-close-session",title:"WEB LEGACY CLOSE SESSION",slug:"/commands/web-legacy-close-session",displayed_sidebar:"docs"},d=void 0,o={},r=[{value:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:2},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WEB LEGACY CLOSE SESSION"})," ( ",(0,l.jsx)(n.em,{children:"sessionID"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"sessionID"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30BB\u30C3\u30B7\u30E7\u30F3UUID"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30014D v18 R6 \u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304B\u3089\u5909\u63DB\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD\u306A",(0,l.jsx)(n.strong,{children:"\u65E7\u5F0FWeb \u30BB\u30C3\u30B7\u30E7\u30F3"}),"\u3067\u306E\u307F\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002\u3053\u308C\u306F",(0,l.jsx)(n.strong,{children:"\u30B9\u30B1\u30FC\u30E9\u30D6\u30EBWeb \u30BB\u30C3\u30B7\u30E7\u30F3"}),"\u30E2\u30FC\u30C9(4D v18 R6\u4EE5\u964D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u306E\u63A8\u5968)\u304C\u6709\u52B9\u5316\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,l.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WEB LEGACY CLOSE SESSION"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(n.em,{children:"sessionID"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3055\u308C\u305F\u65E2\u5B58\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u7834\u68C4\u3057\u307E\u3059\u3002\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u306A\u306B\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"Web\u30D7\u30ED\u30BB\u30B9\u3084\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u304B\u3089\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3068:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30D6\u30E9\u30A6\u30B6\u30FC\u306B\u9001\u4FE1\u3055\u308C\u308Bcookie\u306E\u6709\u52B9\u671F\u9650\u304C0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u958B\u767A\u8005\u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u60C5\u5831\u3092\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306B",(0,l.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-web-legacy-close-session-database-method",children:"On Web Legacy Close Session database method"}),"\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3084\u5909\u6570\u306A\u3069\u306E\u30D7\u30ED\u30BB\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6D88\u53BB\u3055\u308C\u3001\u30EC\u30B3\u30FC\u30C9\u306E\u30ED\u30C3\u30AF\u304C\u89E3\u9664\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u5B9F\u884C\u5F8C\u3001Web\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304C\u5F53\u8A72cookie\u3092\u4F7F\u7528\u3057\u30664D Web\u30B5\u30FC\u30D0\u30FC\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3068\u3001\u65B0\u3057\u3044\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u958B\u59CB\u3055\u308C\u65B0\u3057\u3044cookie\u304C\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6CE8:"})," 4D Mobile\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u3001",(0,l.jsx)(n.strong,{children:"WEB LEGACY CLOSE SESSION"}),"\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(n.em,{children:"sessionID"}),"\u5F15\u6570\u306B\u6E21\u3057\u305FID\u306E4D Mobile\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u9589\u3058\u307E\u3059\u30024D Mobile\u30BB\u30C3\u30B7\u30E7\u30F3\u306F\u8907\u6570\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u7BA1\u7406\u3067\u304D\u308B\u305F\u3081\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u95A2\u9023\u3057\u305F\u5168\u3066\u306EWeb\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3092\u7D42\u4E86\u3092\u8981\u6C42\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-web-legacy-close-session-database-method",children:"On Web Legacy Close Session database method"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"Web\u30BB\u30C3\u30B7\u30E7\u30F3\u7BA1\u7406(\u65E7\u5F0F)"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"1208"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var i=s(667294);let l={},t=i.createContext(l);function c(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);