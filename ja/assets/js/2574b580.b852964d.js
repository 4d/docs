"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83629"],{661288:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/on-startup-database-method","title":"On Startup database method","description":"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/on-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-startup-database-method","permalink":"/docs/ja/commands/on-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-startup-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-startup-database-method","title":"On Startup database method","slug":"/commands/on-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On SQL Authentication database method","permalink":"/docs/ja/commands/on-sql-authentication-database-method"},"next":{"title":"On System Event database method","permalink":"/docs/ja/commands/on-system-event-database-method"}}'),d=t("785893"),a=t("250065");let r={id:"on-startup-database-method",title:"On Startup database method",slug:"/commands/on-startup-database-method",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function c(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(e.table,{children:(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,d.jsx)(e.th,{})]})})}),"\n",(0,d.jsx)(e.h2,{id:""}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F\u30681\u5EA6\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E4D\u74B0\u5883\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u306E4D"}),"\n",(0,d.jsx)(e.li,{children:"\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E4D (4D Server\u304B\u3089\u63A5\u7D9A\u3092\u8A31\u53EF\u3055\u308C\u305F\u5F8C\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5074\u3067)"}),"\n",(0,d.jsx)(e.li,{children:"\u30B3\u30F3\u30D1\u30A4\u30EB\u3057\u30014D VolumeDesktop\u3092\u7D44\u307F\u8FBC\u3093\u30604D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note"}),": ",(0,d.jsx)(e.strong,{children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u30014D Server\u3067\u306F\u8D77\u52D5\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u30014D\u306B\u3088\u3063\u3066\u81EA\u52D5\u7684\u306B\u8D77\u52D5\u3055\u308C\u307E\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3068\u306F\u7570\u306A\u308A\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u304B\u3089\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3057\u304B\u3057\u30E1\u30BD\u30C3\u30C9\u30A8\u30C7\u30A3\u30BF\u304B\u3089\u5B9F\u884C\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u51E6\u7406\u3092\u5B9F\u884C\u3059\u308B\u306E\u306B\u6700\u9069\u3067\u3059:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u4F5C\u696D\u30BB\u30C3\u30B7\u30E7\u30F3\u5168\u4F53\u3067\u4F7F\u7528\u3059\u308B\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u3092\u521D\u671F\u5316\u3059\u308B\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u3044\u305F\u6642\u306B\u30D7\u30ED\u30BB\u30B9\u3092\u81EA\u52D5\u7684\u306B\u958B\u59CB\u3059\u308B\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u4EE5\u524D\u306E\u4F5C\u696D\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u4FDD\u5B58\u3055\u308C\u305F\u74B0\u5883\u8A2D\u5B9A\u3084\u521D\u671F\u8A2D\u5B9A\u3092\u30ED\u30FC\u30C9\u3059\u308B\u3002"}),"\n",(0,d.jsxs)(e.li,{children:["(\u30B7\u30B9\u30C6\u30E0\u30EA\u30BD\u30FC\u30B9\u304C\u306A\u3044\u7B49) \u6761\u4EF6\u304C\u4E00\u81F4\u3057\u306A\u3044\u5834\u5408\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/quit-4d",children:"QUIT 4D"}),"\u3092\u660E\u793A\u7684\u306B\u547C\u3073\u51FA\u3057\u3066\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u958B\u59CB\u3092\u62D2\u5426\u3059\u308B\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u958B\u304F\u5EA6\u306B\u81EA\u52D5\u7684\u306B\u5B9F\u884C\u3057\u305F\u3044\u4ED6\u306E\u52D5\u4F5C\u3092\u5B9F\u884C\u3059\u308B\u3002\n\u3057\u304B\u3057\u306A\u304C\u3089",(0,d.jsx)(e.strong,{children:"On Startup\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),"\u304B\u3089\u5370\u5237\u30B8\u30E7\u30D6\u3092\u8D77\u52D5\u3059\u308B\u3053\u3068\u306F\u63A8\u5968\u3057\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/semaphore",children:"Semaphore"}),"\u306E\u4F8B\u984C\u3092\u53C2\u7167"]}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/on-exit-database-method",children:"On Exit\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/quit-4d",children:"QUIT 4D"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.em,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30E1\u30BD\u30C3\u30C9"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"905263"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var s=t(667294);let d={},a=s.createContext(d);function r(n){let e=s.useContext(a);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);