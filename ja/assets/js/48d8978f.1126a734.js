"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95607"],{516790:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/delete-user","title":"DELETE USER","description":"DELETE USER ( userID )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/delete-user.md","sourceDirName":"commands-legacy","slug":"/commands/delete-user","permalink":"/docs/ja/commands/delete-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-user.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-user","title":"DELETE USER","slug":"/commands/delete-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current user","permalink":"/docs/ja/commands/current-user"},"next":{"title":"EDIT ACCESS","permalink":"/docs/ja/commands/edit-access"}}'),t=s("785893"),d=s("250065");let c={id:"delete-user",title:"DELETE USER",slug:"/commands/delete-user",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DELETE USER"})," ( ",(0,t.jsx)(n.em,{children:"userID"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"userID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u30E6\u30FC\u30B6\u306EID\u756A\u53F7"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["DELETE USER \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"userID"})," \u306B\u6E21\u3057\u305F\u30E6\u30CB\u30FC\u30AF\u306A\u30E6\u30FC\u30B6ID\u756A\u53F7\u3092\u6301\u3064\u30E6\u30FC\u30B6\u3092\u524A\u9664\u3057\u307E\u3059\u3002 \u3053\u306E\u5834\u5408\u3001\u5FC5\u305A",(0,t.jsx)(n.a,{href:"/docs/ja/commands/get-user-list",title:"GET USER LIST",children:"GET USER LIST"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u305F\u6709\u52B9\u306A\u30E6\u30FC\u30B6ID\u756A\u53F7\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30E6\u30FC\u30B6\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3084\u65E2\u306B\u524A\u9664\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9 -9979\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"Designer\u3068Administrator\u306E\u307F\u304C\u30E6\u30FC\u30B6\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002Administrator\u306FDesigner\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30E6\u30FC\u30B6\u3092\u524A\u9664\u3059\u308B\u3053\u306F\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u524A\u9664\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u540D\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/commands/edit-access",title:"EDIT ACCESS",children:"EDIT ACCESS"}),"\u30B3\u30DE\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u8868\u793A\u3055\u308C\u308B\u30E6\u30FC\u30B6\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u524A\u9664\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u306E\u756A\u53F7\u306F\u3001\u65B0\u3057\u3044\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u4F5C\u6210\u3055\u308C\u308B\u969B\u306B\u518D\u5272\u308A\u5F53\u3066\u3055\u308C\u308B\u3053\u3068\u304C\u3042\u308B\u3053\u3068\u306B\u7559\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u3084\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30B7\u30B9\u30C6\u30E0\u304C\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u65E2\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u6A29\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002ON ERR CALL \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/is-user-deleted",children:"Is user deleted"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"615"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var r=s(667294);let t={},d=r.createContext(t);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);