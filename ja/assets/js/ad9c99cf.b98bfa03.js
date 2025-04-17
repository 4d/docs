"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93701"],{766685:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/get-group-list","title":"GET GROUP LIST","description":"GET GROUP LIST ( groupNames ; groupNumbers )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-group-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-group-list","permalink":"/docs/ja/20-R8/commands/get-group-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-group-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-group-list","title":"GET GROUP LIST","slug":"/commands/get-group-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get group access","permalink":"/docs/ja/20-R8/commands/get-group-access"},"next":{"title":"GET GROUP PROPERTIES","permalink":"/docs/ja/20-R8/commands/get-group-properties"}}'),t=s("785893"),d=s("250065");let i={id:"get-group-list",title:"GET GROUP LIST",slug:"/commands/get-group-list",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET GROUP LIST"})," ( ",(0,t.jsx)(n.em,{children:"groupNames"})," ; ",(0,t.jsx)(n.em,{children:"groupNumbers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupNames"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u8868\u793A\u3055\u308C\u308B\u30B0\u30EB\u30FC\u30D7\u540D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"groupNumbers"}),(0,t.jsx)(n.td,{children:"Integer array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u5BFE\u5FDC\u3059\u308B\u30E6\u30CB\u30FC\u30AF\u306A\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["GET GROUP LIST \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u8868\u793A\u3055\u308C\u308B\u30B0\u30EB\u30FC\u30D7\u540D\u3068\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7\u3092\u914D\u5217 ",(0,t.jsx)(n.em,{children:"groupNames"})," \u3068 ",(0,t.jsx)(n.em,{children:"groupNumbers"})," \u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u914D\u5217 ",(0,t.jsx)(n.em,{children:"groupNames"})," \u3068\u540C\u671F\u3055\u308C\u3066\u3044\u308B\u914D\u5217 ",(0,t.jsx)(n.em,{children:"groupNumbers"})," \u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30E6\u30CB\u30FC\u30AF\u306A\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u756A\u53F7\u306F\u4EE5\u4E0B\u306E\u5024\u304A\u3088\u3073\u7BC4\u56F2\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u3001\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7\u306F 15001 \u304B\u3089\u59CB\u307E\u308A\u3001\u8D77\u52D5\u6642\u306B\u52D5\u7684\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u3082\u306E\u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306F\u7DAD\u6301\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u3001\u30B0\u30EB\u30FC\u30D7ID\u756A\u53F7\u306F\u4FDD\u5B58\u3055\u308C\u3066\u304A\u308A\u3001\u30B0\u30EB\u30FC\u30D7\u4F5C\u6210\u8005\u306B\u5FDC\u3058\u305F\u7279\u5B9A\u306E\u7BC4\u56F2\u5185\u306B\u3042\u308A\u307E\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,t.jsx)(n.em,{children:"\u30E6\u30FC\u30B6\u30FC\u3068\u30B0\u30EB\u30FC\u30D7 ID \u306E\u7BC4\u56F2"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u3084\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30B7\u30B9\u30C6\u30E0\u304C\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u65E2\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u6A29\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002ON ERR CALL \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/get-group-properties",children:"GET GROUP PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-group-properties",children:"Set group properties"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"610"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);