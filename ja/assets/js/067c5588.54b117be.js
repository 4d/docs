"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83378"],{4411:function(n,e,t){t.r(e),t.d(e,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-get-command-status","title":"QR Get command status","description":"QR Get command status ( area ; command {; value} ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-command-status.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-command-status","permalink":"/docs/ja/20-R7/commands/qr-get-command-status","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-command-status.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-command-status","title":"QR Get command status","slug":"/commands/qr-get-command-status","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET BORDERS","permalink":"/docs/ja/20-R7/commands/qr-get-borders"},"next":{"title":"QR GET DESTINATION","permalink":"/docs/ja/20-R7/commands/qr-get-destination"}}'),d=t("785893"),r=t("250065");let c={id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"QR Get command status"})," ( ",(0,d.jsx)(e.em,{children:"area"})," ; ",(0,d.jsx)(e.em,{children:"command"})," {; ",(0,d.jsx)(e.em,{children:"value"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"area"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30A8\u30EA\u30A2\u53C2\u7167"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"command"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"value"}),(0,d.jsx)(e.td,{children:"Integer, Text"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u9078\u629E\u3055\u308C\u305F\u30B5\u30D6\u30A2\u30A4\u30C6\u30E0\u306E\u5024"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u306E\u72B6\u614B"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["QR Get command status \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"command"}),"\u304C\u4F7F\u7528\u4E0D\u53EF\u3067\u3042\u308C\u30700\u3092\u3001\u4F7F\u7528\u53EF\u80FD\u3067\u3042\u308C\u30701\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"value"}),"\u306F\u3001\u9078\u629E\u3055\u308C\u305F\u30B5\u30D6\u30A2\u30A4\u30C6\u30E0\u304C\u3042\u308C\u3070\u3001\u305D\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u9078\u629E\u3055\u308C\u305F\u30B3\u30DE\u30F3\u30C9\u304C",(0,d.jsx)(e.strong,{children:"\u30D5\u30A9\u30F3\u30C8"}),"\u30E1\u30CB\u30E5\u30FC (1000) \u3067\u3042\u308A\u3001\u9078\u629E\u3055\u308C\u305F\u30D5\u30A9\u30F3\u30C8\u304C\u201CArial\u201D\u3067\u3042\u308B\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"value"}),"\u306B\u306F\u201CArial\u201D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u3001\u9078\u629E\u3055\u308C\u305F\u30B3\u30DE\u30F3\u30C9\u304C",(0,d.jsx)(e.strong,{children:"\u30AB\u30E9\u30FC"}),"\u30E1\u30CB\u30E5\u30FC (1002,\u30011003\u3001\u307E\u305F\u306F1004) \u3067\u3042\u308B\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"value"}),"\u306B\u306F\u30AB\u30E9\u30FC\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6B21\u306E2\u3064\u306E\u72B6\u6CC1\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u3042\u308B\u30B3\u30DE\u30F3\u30C9\u304C\u4F7F\u7528\u53EF\u3067\u3042\u308B\u304B\u4F7F\u7528\u4E0D\u53EF\u3067\u3042\u308B\u304B\u3092\u8ABF\u3079\u308B\u5358\u7D14\u306A\u5224\u5B9A\u6587\u3068\u3057\u3066\u3002"}),"\n",(0,d.jsxs)(e.li,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-on-command",title:"QR ON COMMAND",children:"QR ON COMMAND"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u306B\u304A\u3044\u3066\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u9078\u629E\u3055\u308C\u305F\u30B5\u30D6\u30A2\u30A4\u30C6\u30E0\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u3001",(0,d.jsx)(e.em,{children:"$1"}),"\u304C\u30A8\u30EA\u30A2\u306E\u53C2\u7167\u756A\u53F7\u3068\u306A\u308A\u3001",(0,d.jsx)(e.em,{children:"$2"}),"\u304C\u30B3\u30DE\u30F3\u30C9\u756A\u53F7\u3068\u306A\u308A\u307E\u3059\u3002\n",(0,d.jsx)(e.em,{children:"command"}),"\u306B\u306F\u306B\u306F\u5024\u307E\u305F\u306F\u5B9A\u6570\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"area"}),"\u756A\u53F7\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9850\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(e.br,{}),"\n\u7121\u52B9\u306A",(0,d.jsx)(e.em,{children:"command"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u756A\u53F7-9852\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"792"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"error"})]})]})]})]})}function m(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var s=t(667294);let d={},r=s.createContext(d);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);