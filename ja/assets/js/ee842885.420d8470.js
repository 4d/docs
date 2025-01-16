"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80464"],{307163:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-group-properties","title":"GET GROUP PROPERTIES","description":"GET GROUP PROPERTIES ( groupID ; name ; owner {; members} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-group-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-properties","permalink":"/docs/ja/20-R7/commands/get-group-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-group-properties","title":"GET GROUP PROPERTIES","slug":"/commands/get-group-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET GROUP LIST","permalink":"/docs/ja/20-R7/commands/get-group-list"},"next":{"title":"Get plugin access","permalink":"/docs/ja/20-R7/commands/get-plugin-access"}}'),t=r("785893"),d=r("250065");let i={id:"get-group-properties",title:"GET GROUP PROPERTIES",slug:"/commands/get-group-properties",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET GROUP PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"groupID"})," ; ",(0,t.jsx)(n.em,{children:"name"})," ; ",(0,t.jsx)(n.em,{children:"owner"})," {; ",(0,t.jsx)(n.em,{children:"members"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30E6\u30CB\u30FC\u30AF\u306A\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30B0\u30EB\u30FC\u30D7\u306E\u540D\u524D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"owner"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30B0\u30EB\u30FC\u30D7\u30AA\u30FC\u30CA\u30FC\u306E\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7 (\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"members"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30B0\u30EB\u30FC\u30D7\u30E1\u30F3\u30D0\u30FC"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["GET GROUP PROPERTIES \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"groupID"})," \u306B\u6E21\u3057\u305F\u30E6\u30CB\u30FC\u30AF\u306A\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7\u3092\u6301\u3064\u30B0\u30EB\u30FC\u30D7\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-group-list",children:"GET GROUP LIST"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u6709\u52B9\u306A\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7\u3092\u5FC5\u305A\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u52B9\u306A\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7\u3092\u6E21\u3055\u306A\u304B\u3063\u305F\u5834\u5408\u3001GET GROUP PROPERTIES \u306F\u7A7A\u306E\u5F15\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u547C\u3073\u51FA\u3057\u5F8C\u3001\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"name"})," \u306B\u30B0\u30EB\u30FC\u30D7\u540D\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["(\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F) \u30B0\u30EB\u30FC\u30D7\u306E\u30AA\u30FC\u30CA\u30FC\u306F\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"owner"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u5834\u5408\u306F\u5E38\u306B0\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"members"})," \u3092\u6E21\u3059\u3068\u3001\u30B0\u30EB\u30FC\u30D7\u306B\u5C5E\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u3068\u30B0\u30EB\u30FC\u30D7\u306E\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u95A2\u3059\u308B\u6CE8\u8A18:"})," \u30B0\u30EB\u30FC\u30D7\u304A\u3088\u3073\u30E6\u30FC\u30B6\u30FCID\u306E\u5024\u306F\u3001\u305D\u306E\u4F5C\u6210\u8005\u306B\u4F9D\u5B58\u3057\u307E\u3059 (\u30C7\u30B6\u30A4\u30CA\u30FC\u3001\u7BA1\u7406\u8005\u3001\u307E\u305F\u306F\u95A2\u9023\u3057\u305F\u30B0\u30EB\u30FC\u30D7\u30AA\u30FC\u30CA\u30FC)\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,t.jsx)(n.em,{children:"\u30E6\u30FC\u30B6\u30FC\u3068\u30B0\u30EB\u30FC\u30D7 ID \u306E\u7BC4\u56F2"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u3084\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30B7\u30B9\u30C6\u30E0\u304C\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u65E2\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u6A29\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"613"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);