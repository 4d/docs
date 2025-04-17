"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37293"],{994368:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/stop-sql-server","title":"STOP SQL SERVER","description":"STOP SQL SERVER","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/stop-sql-server.md","sourceDirName":"commands-legacy","slug":"/commands/stop-sql-server","permalink":"/docs/ja/commands/stop-sql-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstop-sql-server.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"stop-sql-server","title":"STOP SQL SERVER","slug":"/commands/stop-sql-server","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"START SQL SERVER","permalink":"/docs/ja/commands/start-sql-server"},"next":{"title":"SVG","permalink":"/docs/ja/commands/theme/SVG"}}'),r=s("785893"),d=s("250065");let l={id:"stop-sql-server",title:"STOP SQL SERVER",slug:"/commands/stop-sql-server",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"STOP SQL SERVER"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsx)(n.p,{children:"STOP SQL SERVER\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5B9F\u884C\u6E08\u307F4D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u7D71\u5408SQL\u30B5\u30FC\u30D0\u3092\u505C\u6B62\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"SQL\u30B5\u30FC\u30D0\u304C\u8D77\u52D5\u3057\u3066\u3044\u305F\u5834\u5408\u3001\u3059\u3079\u3066\u306ESQL\u63A5\u7D9A\u304C\u4E2D\u65AD\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u4EE5\u964D\u3001\u30B5\u30FC\u30D0\u306F\u5916\u90E8SQL\u30AF\u30A8\u30EA\u3092\u53D7\u3051\u5165\u308C\u307E\u305B\u3093\u3002SQL\u30B5\u30FC\u30D0\u304C\u8D77\u52D5\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D\u306E\u5185\u90E8SQL\u30AB\u30FC\u30CD\u30EB\u306E\u6A5F\u80FD\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002\u5185\u90E8\u30AF\u30A8\u30EA\u306E\u969B\u3001SQL\u30AB\u30FC\u30CD\u30EB\u306F\u3044\u3064\u3067\u3082\u5229\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ja/commands/start-sql-server",children:"START SQL SERVER"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"963"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);