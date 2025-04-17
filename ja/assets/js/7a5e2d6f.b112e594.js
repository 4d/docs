"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71870"],{373376:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/start-sql-server","title":"START SQL SERVER","description":"START SQL SERVER","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/start-sql-server.md","sourceDirName":"commands-legacy","slug":"/commands/start-sql-server","permalink":"/docs/ja/20-R8/commands/start-sql-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstart-sql-server.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"start-sql-server","title":"START SQL SERVER","slug":"/commands/start-sql-server","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL SET PARAMETER","permalink":"/docs/ja/20-R8/commands/sql-set-parameter"},"next":{"title":"STOP SQL SERVER","permalink":"/docs/ja/20-R8/commands/stop-sql-server"}}'),r=s("785893"),d=s("250065");let l={id:"start-sql-server",title:"START SQL SERVER",slug:"/commands/start-sql-server",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"START SQL SERVER"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"START SQL SERVER\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u5B9F\u884C\u4E2D\u306E4D\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u3001\u7D71\u5408\u3055\u308C\u305FSQL\u30B5\u30FC\u30D0\u3092\u8D77\u52D5\u3055\u305B\u307E\u3059\u3002\u8D77\u52D5\u3059\u308B\u3068\u3001SQL\u30B5\u30FC\u30D0\u306F\u5916\u90E8SQL\u30AF\u30A8\u30EA\u306B\u5FDC\u7B54\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D\u306E\u5185\u90E8SQL\u30AB\u30FC\u30CD\u30EB\u306E\u6A5F\u80FD\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002\u5185\u90E8\u30AF\u30A8\u30EA\u306E\u969B\u3001SQL\u30AB\u30FC\u30CD\u30EB\u306F\u3044\u3064\u3067\u3082\u5229\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(n.p,{children:"SQL\u30B5\u30FC\u30D0\u304C\u6B63\u3057\u304F\u8D77\u52D5\u3055\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/20-R8/commands/stop-sql-server",children:"STOP SQL SERVER"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"962"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);