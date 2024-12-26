"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71125"],{242950:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>h,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/on-server-shutdown-database-method","title":"On Server Shutdown database method","description":"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-shutdown-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-shutdown-database-method","permalink":"/docs/ja/commands/on-server-shutdown-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-shutdown-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-shutdown-database-method","title":"On Server Shutdown database method","slug":"/commands/on-server-shutdown-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Open Connection database method","permalink":"/docs/ja/commands/on-server-open-connection-database-method"},"next":{"title":"On Server Startup database method","permalink":"/docs/ja/commands/on-server-startup-database-method"}}'),s=r("785893"),d=r("250065");let o={id:"on-server-shutdown-database-method",title:"On Server Shutdown database method",slug:"/commands/on-server-shutdown-database-method",displayed_sidebar:"docs"},a=void 0,c={},h=[];function i(e){let n={a:"a",br:"br",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:""}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C4D Server\u4E0A\u3067\u9589\u3058\u3089\u308C\u308B\u3068\u304D\u306B\u3001\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u4E0A\u3067\u4E00\u5EA6\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u30024D Server\u4EE5\u5916\u306E4D \u74B0\u5883\u3067\u306F",(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u304C\u8D77\u52D5\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30B5\u30FC\u30D0\u4E0A\u306E\u30AB\u30EC\u30F3\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u9589\u3058\u308B\u306B\u306F\u3001\u30B5\u30FC\u30D0\u4E0A\u3067",(0,s.jsx)(n.strong,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u9589\u3058\u308B..."})," \u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u307E\u305F",(0,s.jsx)(n.strong,{children:"4D Server\u3092\u7D42\u4E86"})," \u30E1\u30CB\u30E5\u30FC\u30B3\u30DE\u30F3\u30C9\u3092\u9078\u629E\u3057\u305F\u308A\u3001\u30B5\u30FC\u30D0\u4E0A\u3067\u5B9F\u884C\u3055\u308C\u308B\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u5185\u3067",(0,s.jsx)(n.a,{href:"/docs/ja/commands/quit-4d",title:"QUIT 4D",children:"QUIT 4D"})," \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u7D42\u4E86\u304C\u958B\u59CB\u3055\u308C\u308B\u3068\u30014D \u306F\u6B21\u306E\u52D5\u4F5C\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u304C\u306A\u3044\u5834\u5408\u30014D Server \u306F\u5B9F\u884C\u4E2D\u306E\u5404\u30D7\u30ED\u30BB\u30B9\u3092\u533A\u5225\u306A\u304F1 \u3064\u305A\u3064\u30A2\u30DC\u30FC\u30C8\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u304C\u3042\u308B\u5834\u5408\u30014D Server \u306F\u65B0\u3057\u304F\u4F5C\u6210\u3055\u308C\u305F\u30ED\u30FC\u30AB\u30EB\u30D7\u30ED\u30BB\u30B9\u5185\u3067\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u3001\u30D7\u30ED\u30BB\u30B9\u9593\u901A\u4FE1\u3092\u4ECB\u3057\u3066\u3001\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3001\u5B9F\u884C\u3092\u505C\u6B62\u3059\u308B\u3088\u3046\u901A\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u7D50\u5C40\u306F\u30014D Server \u304C\u7D42\u4E86\u3059\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044",(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3067\u306F\u3001\u7247\u4ED8\u3051\u305F\u308A\u3001\u30AF\u30ED\u30FC\u30BA\u3059\u308B\u64CD\u4F5C\u3092\u3059\u3079\u3066\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u7D42\u4E86\u3092\u62D2\u5426\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u3044\u305A\u308C\u304B\u306E\u6642\u70B9\u3067\u7D42\u4E86\u3059\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u6B21\u306E\u4E8B\u67C4\u3092\u884C\u3046\u306E\u306B\u6700\u9069\u3067\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u958B\u304B\u308C\u305F\u6642\u306B\u81EA\u52D5\u7684\u306B\u8D77\u52D5\u3055\u308C\u305F\u30B9\u30C8\u30A2\u30FC\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u3092\u505C\u6B62\u3059\u308B"}),"\n",(0,s.jsxs)(n.li,{children:["\u6B21\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u59CB\u3081\u306B",(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3067\u518D\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u3001\u521D\u671F\u8A2D\u5B9A\u3084\u5404\u7A2E\u8A2D\u5B9A\u3092\uFF08\u30C7\u30A3\u30B9\u30AF\u4E0A\u306B\u30ED\u30FC\u30AB\u30EB\u306B\uFF09\u4FDD\u5B58\u3059\u308B"]}),"\n",(0,s.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u7D42\u4E86\u3059\u308B\u305F\u3073\u306B\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3055\u305B\u305F\u3044\u305D\u306E\u4ED6\u306E\u52D5\u4F5C\u3092\u5B9F\u884C\u3059\u308B"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8B66\u544A:"})," ",(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3092\u4F7F\u7528\u3057\u3066\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u3092\u30AF\u30ED\u30FC\u30BA\u3059\u308B\u5834\u5408\u3001\u30B5\u30FC\u30D0\u306F (\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u3067\u306F\u306A\u304F)",(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u7D42\u4E86\u3059\u308B\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u6642\u70B9\u3067\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u304C\u8D77\u52D5\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u305D\u308C\u3089\u306F\u30AD\u30EB\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n\u3053\u306E\u305F\u3081\u3001\u30B5\u30FC\u30D0\u306B\u3088\u308A\u30AD\u30EB\u3055\u308C\u308B\u524D\u306B\u3001\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u304C\u5B8C\u5168\u306B\u5B9F\u884C\u3055\u308C\u305F\u3053\u3068\u3092\u78BA\u8A8D\u3057\u305F\u3044\u5834\u5408\u3001",(0,s.jsx)(n.strong,{children:"On Server Shutdown\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u306B\u5BFE\u3057\u5B9F\u884C\u3092\u7D42\u4E86\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3053\u3068\u3092\u901A\u77E5\u3057\u3066 (\u4F8B\u3048\u3070\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3092\u4F7F\u7528)\u3001\u305D\u3057\u3066\u7D42\u4E86\u3092\u5F85\u3064\u3088\u3046\u306B\u3059\u308B\u3079\u304D\u3067\u3059 (x\u79D2\u306E\u30EB\u30FC\u30D7\u3084\u4ED6\u306E\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3092\u4F7F\u7528)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30EA\u30E2\u30FC\u30C8\u306E4D\u304C\u30B5\u30FC\u30D0\u3078\u306E\u63A5\u7D9A\u3092\u505C\u6B62\u3059\u308B\u6642\u306B\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u81EA\u52D5\u7684\u306B\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3055\u305B\u305F\u3044\u5834\u5408\u306B\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/semaphore",children:"Semaphore"}),"\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let s={},d=t.createContext(s);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);