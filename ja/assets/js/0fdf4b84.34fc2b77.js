"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84832"],{480951:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/on-server-startup-database-method","title":"On Server Startup database method","description":"On Server Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-server-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-startup-database-method","permalink":"/docs/ja/20-R8/commands/on-server-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-startup-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-server-startup-database-method","title":"On Server Startup database method","slug":"/commands/on-server-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Shutdown database method","permalink":"/docs/ja/20-R8/commands/on-server-shutdown-database-method"},"next":{"title":"On SQL Authentication database method","permalink":"/docs/ja/20-R8/commands/on-sql-authentication-database-method"}}'),s=n("785893"),a=n("250065");let d={id:"on-server-startup-database-method",title:"On Server Startup database method",slug:"/commands/on-server-startup-database-method",displayed_sidebar:"docs"},o=void 0,i={},c=[];function l(e){let t={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"On Server Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,s.jsx)(t.th,{})]})})}),"\n",(0,s.jsx)(t.h2,{id:""}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"On Server Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u30014D Server \u3067\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F\u3068\u3001\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u4E0A\u3067\u4E00\u5EA6\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u30024D Server \u4EE5\u5916\u306E4D\u74B0\u5883\u3067",(0,s.jsx)(t.strong,{children:"On Server Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u304C\u8D77\u52D5\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"On Server Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u6B21\u306E\u4E8B\u67C4\u3092\u884C\u3046\u306E\u306B\u6700\u9069\u3067\u3059:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"4D Server \u30BB\u30C3\u30B7\u30E7\u30F3\u5168\u4F53\u3092\u901A\u3057\u3066\u4F7F\u7528\u3059\u308B\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3092\u521D\u671F\u5316\u3059\u308B"}),"\n",(0,s.jsxs)(t.li,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u958B\u304B\u308C\u308B\u6642\u306B\u81EA\u52D5\u3067",(0,s.jsx)(t.em,{children:"\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3"}),"\u3092\u958B\u59CB\u3059\u308B"]}),"\n",(0,s.jsx)(t.li,{children:"\u524D\u306E4D Server\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u4FDD\u5B58\u3055\u308C\u305F\u521D\u671F\u8A2D\u5B9A\u3084\u5404\u7A2E\u8A2D\u5B9A\u3092\u30ED\u30FC\u30C9\u3059\u308B"}),"\n",(0,s.jsxs)(t.li,{children:["\u660E\u793A\u7684\u306B",(0,s.jsx)(t.a,{href:"/docs/ja/20-R8/commands/quit-4d",title:"QUIT 4D",children:"QUIT 4D"}),"\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u306B\u3088\u3063\u3066\u3001(\u30B7\u30B9\u30C6\u30E0\u30EA\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u7B49) \u6761\u4EF6\u304C\u6E80\u305F\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u3051\u306A\u3044\u3088\u3046\u306B\u3059\u308B"]}),"\n",(0,s.jsx)(t.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u958B\u304B\u308C\u308B\u305F\u3073\u306B\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3055\u305B\u305F\u3044\u305D\u306E\u4ED6\u306E\u52D5\u4F5C\u3092\u5B9F\u884C\u3059\u308B"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u30EA\u30E2\u30FC\u30C84D\u304C\u30B5\u30FC\u30D0\u306B\u63A5\u7D9A\u3059\u308B\u6642\u306B\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u4E0A\u3067\u81EA\u52D5\u7684\u306B\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F",(0,s.jsx)(t.a,{href:"/docs/ja/20-R8/commands/on-startup-database-method",children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," On Server Startup \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u306F\u30A2\u30C8\u30DF\u30C3\u30AF\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306E\u5B9F\u884C\u304C\u7D42\u4E86\u3059\u308B\u307E\u3067\u3001\u30EA\u30E2\u30FC\u30C84D\u306F\u63A5\u7D9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002"]})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var r=n(667294);let s={},a=r.createContext(s);function d(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);