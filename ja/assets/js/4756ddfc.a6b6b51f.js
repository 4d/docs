"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11334"],{274965:function(e,s,n){n.r(s),n.d(s,{default:()=>x,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/set-user-properties","title":"Set user properties","description":"Set user properties ( userID ; name ; startup ; password ; nbLogin ; lastLogin {; memberships {; groupOwner}} ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-user-properties","permalink":"/docs/ja/commands/set-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-user-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-user-properties","title":"Set user properties","slug":"/commands/set-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET USER ALIAS","permalink":"/docs/ja/commands/set-user-alias"},"next":{"title":"User in group","permalink":"/docs/ja/commands/user-in-group"}}'),d=n("785893"),t=n("250065");let i={id:"set-user-properties",title:"Set user properties",slug:"/commands/set-user-properties",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Set user properties"})," ( ",(0,d.jsx)(s.em,{children:"userID"})," ; ",(0,d.jsx)(s.em,{children:"name"})," ; ",(0,d.jsx)(s.em,{children:"startup"})," ; ",(0,d.jsx)(s.em,{children:"password"})," ; ",(0,d.jsx)(s.em,{children:"nbLogin"})," ; ",(0,d.jsx)(s.em,{children:"lastLogin"})," {; ",(0,d.jsx)(s.em,{children:"memberships"})," {; ",(0,d.jsx)(s.em,{children:"groupOwner"}),"}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u5F15\u6570"}),(0,d.jsx)(s.th,{children:"\u578B"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"userID"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsxs)(s.td,{children:["\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7\u3001",(0,d.jsx)(s.br,{}),"\u307E\u305F\u306F -1= \u30C7\u30B6\u30A4\u30CA\u30FC\u306B\u95A2\u9023\u3057\u305F\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u306E\u8FFD\u52A0 -2= \u7BA1\u7406\u8005\u306B\u95A2\u9023\u3057\u305F\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u306E\u8FFD\u52A0"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"\u8FFD\u52A0\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8 (\u3042\u308C\u3070) \u306E\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7"}),(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"name"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u306E\u540D\u524D"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"startup"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u30E1\u30BD\u30C3\u30C9\u306E\u540D\u524D"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"password"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u65B0\u3057\u3044 (\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044) \u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u307E\u305F\u306F * \u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u4EE5\u524D\u306E\u307E\u307E"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"nbLogin"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3078\u30ED\u30B0\u30A4\u30F3\u3057\u305F\u56DE\u6570 (\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"lastLogin"}),(0,d.jsx)(s.td,{children:"Date"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u6700\u5F8C\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u305F\u65E5\u4ED8 (\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"memberships"}),(0,d.jsx)(s.td,{children:"Integer array"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u30E6\u30FC\u30B6\u30FC\u304C\u5C5E\u3059\u308B\u30B0\u30EB\u30FC\u30D7\u306EID\u756A\u53F7"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"groupOwner"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u30E6\u30FC\u30B6\u30FC\u30B0\u30EB\u30FC\u30D7\u30AA\u30FC\u30CA\u30FC\u306E\u53C2\u7167\u756A\u53F7 (\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u306E\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(s.p,{children:"Set user properties \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570 userID \u306B\u6E21\u3057\u305F\u30E6\u30CB\u30FC\u30AF\u306A\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7\u3092\u6301\u3064\u65E2\u5B58\u306E\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u30FB\u66F4\u65B0\u3059\u308B\u304B\u3001\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u30C7\u30B6\u30A4\u30CA\u30FC\u3042\u308B\u3044\u306F\u7BA1\u7406\u8005\u306B\u95A2\u9023\u3059\u308B\u65B0\u898F\u30E6\u30FC\u30B6\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(s.p,{children:["\u65E2\u5B58\u306E\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306F\u3001",(0,d.jsx)(s.a,{href:"/docs/ja/commands/get-user-list",children:"GET USER LIST"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u6709\u52B9\u306A\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3084\u524A\u9664\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9 -9979\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(s.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"})," \u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u5B9F\u88C5\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u691C\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u3001\u3042\u3089\u304B\u3058\u3081 ",(0,d.jsx)(s.a,{href:"/docs/ja/commands/is-user-deleted",children:"Is user deleted"})," \u3067\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u691C\u8A3C\u3057\u3066\u304B\u3089\u3001Set user properties \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u65B9\u6CD5\u3082\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.p,{children:"\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F userID \u306B -1 \u3092\u53D7\u3051\u6E21\u3057\u307E\u3059 (\u5F8C\u8FF0\u306E\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u95A2\u3059\u308B\u6CE8\u8A18\u3082\u53C2\u7167\u304F\u3060\u3055\u3044)\u3002"}),"\n",(0,d.jsxs)(s.p,{children:["\u30E6\u30FC\u30B6\u30FC\u306E\u8FFD\u52A0\u30FB\u66F4\u65B0\u306B\u6210\u529F\u3057\u305F\u5834\u5408\u3001\u305D\u306E\u30E6\u30FC\u30B6\u30FC\u306E\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7\u304C ",(0,d.jsx)(s.em,{children:"userID"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.p,{children:"-1\u3001-2 \u307E\u305F\u306F\u6709\u52B9\u306A\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7\u304C\u6E21\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u3001Set user properties \u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(s.p,{children:["\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"name"}),"\u3001",(0,d.jsxs)(s.em,{children:["startup\u3001",(0,d.jsx)(s.a,{href:"#",title:"\u65B0\u3057\u3044 (\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044) \u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u307E\u305F\u306F  \u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u4EE5\u524D\u306E\u307E\u307E",children:"password"}),"\u3001"]})," ",(0,d.jsx)(s.em,{children:"nbLogin"})," \u3068 ",(0,d.jsx)(s.em,{children:"lastLogin"})," \u306B\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u65B0\u3057\u3044\u540D\u524D\u3001\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u30E1\u30BD\u30C3\u30C9\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u3001\u30ED\u30B0\u30A4\u30F3\u3057\u305F\u56DE\u6570\u3068\u6700\u5F8C\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u305F\u65E5\u4ED8\u3092\u6E21\u3057\u307E\u3059\u3002\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"password"})," \u306B\u306F\u6697\u53F7\u5316\u3055\u308C\u3066\u3044\u306A\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u6E21\u3057\u307E\u3059\u3002\u3059\u308B\u3068\u30014D\u306F\u305D\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u6697\u53F7\u5316\u3057\u3066\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002",(0,d.jsx)(s.br,{}),"\n\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"name"})," \u306B\u6E21\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u306E\u65B0\u3057\u3044\u540D\u524D\u304C\u30E6\u30CB\u30FC\u30AF\u3067\u306A\u3044 (\u540C\u3058\u540D\u524D\u3092\u6301\u3064\u30E6\u30FC\u30B6\u30FC\u304C\u65E2\u306B\u5B58\u5728\u3057\u3066\u3044\u308B) \u5834\u5408 \u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u308F\u305A\u3001\u30A8\u30E9\u30FC\u30B3\u30FC\u30C9-9979\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(s.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u7528\u3044\u3066\u5B9F\u88C5\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u691C\u77E5\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(s.em,{children:"nbLogin"})," \u304A\u3088\u3073 ",(0,d.jsx)(s.em,{children:"lastLogin"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306E\u307F\u4F7F\u7528\u3055\u308C\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u304A\u3044\u3066\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u30E6\u30FC\u30B6\u30FC\u306E\u3059\u3079\u3066\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3057\u305F\u3044\u308F\u3051\u3067\u306F\u306A\u3044\u5834\u5408 (\u30E1\u30F3\u30D0\u30FC\u30B7\u30C3\u30D7\u4EE5\u5916\u3001\u5F8C\u8FF0\u53C2\u7167) \u3001\u5909\u66F4\u3057\u305F\u304F\u306A\u3044\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u95A2\u3057\u3066\u306F\u3001\u3042\u3089\u304B\u3058\u3081 ",(0,d.jsx)(s.a,{href:"/docs/ja/commands/get-user-properties",children:"GET USER PROPERTIES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u53D6\u5F97\u3057\u305F\u5024\u3092\u53D7\u3051\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u3001\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"password"})," \u306E\u5024\u3068\u3057\u3066\u3001* \u8A18\u53F7\u3092\u6E21\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u7528\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u4ED6\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"memberships"})," \u304C\u6E21\u3055\u308C\u306A\u3044\u5834\u5408\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u30E1\u30F3\u30D0\u30FC\u30B7\u30C3\u30D7\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u969B\u306B\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"memberships"})," \u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u305D\u306E\u30E6\u30FC\u30B6\u30FC\u306F\u3069\u306E\u30B0\u30EB\u30FC\u30D7\u306B\u3082\u5C5E\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"memberships"})," \u3092\u6E21\u3059\u3068\u3001\u305D\u306E\u30E6\u30FC\u30B6\u30FC\u306E\u3059\u3079\u3066\u306E\u30E1\u30F3\u30D0\u30FC\u30B7\u30C3\u30D7\u3092\u4E0A\u66F8\u304D\u3057\u307E\u3059\u3002\u547C\u3073\u51FA\u3059\u524D\u306B\u3001\u305D\u306E\u30E6\u30FC\u30B6\u30FC\u304C\u5C5E\u3059\u308B\u30B0\u30EB\u30FC\u30D7\u306E\u30E6\u30CB\u30FC\u30AF\u306AID\u756A\u53F7\u3092\u914D\u5217 ",(0,d.jsx)(s.em,{children:"memberships"})," \u306B\u5272\u308A\u5F53\u3066\u3066\u304A\u304B\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["(\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u307F) \u4EFB\u610F\u306E\u5F15\u6570 ",(0,d.jsx)(s.em,{children:"groupOwner"}),' \u3092\u6E21\u3059\u3068\u3001\u30E6\u30FC\u30B6\u30FC\u30B0\u30EB\u30FC\u30D7 "\u30AA\u30FC\u30CA\u30FC" \u306EID\u756A\u53F7\u3001\u3064\u307E\u308A\u3001\u3053\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u4F5C\u6210\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AA\u30FC\u30CA\u30FC\u30B0\u30EB\u30FC\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30E6\u30FC\u30B6\u30FC\u306E\u3059\u3079\u3066\u306E\u30E1\u30F3\u30D0\u30FC\u30B7\u30C3\u30D7\u3092\u7121\u52B9\u306B\u3059\u308B\u306B\u306F\u3001\u7A7A\u306E\u914D\u5217 ',(0,d.jsx)(s.em,{children:"memberships"})," \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u95A2\u3059\u308B\u6CE8\u8A18:"})," \u30B0\u30EB\u30FC\u30D7\u304A\u3088\u3073\u30E6\u30FC\u30B6\u30FCID\u306E\u5024\u306F\u3001\u305D\u306E\u4F5C\u6210\u8005\u306B\u4F9D\u5B58\u3057\u307E\u3059 (\u30C7\u30B6\u30A4\u30CA\u30FC\u3001\u7BA1\u7406\u8005\u3001\u307E\u305F\u306F\u95A2\u9023\u3057\u305F\u30B0\u30EB\u30FC\u30D7\u30AA\u30FC\u30CA\u30FC)\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,d.jsx)(s.em,{children:"\u30E6\u30FC\u30B6\u30FC\u3068\u30B0\u30EB\u30FC\u30D7 ID \u306E\u7BC4\u56F2"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002\u30C7\u30B6\u30A4\u30CA\u30FC\u306B\u95A2\u9023\u3057\u305F\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u5F15\u6570 userID \u306B -1\u3092\u6E21\u3057\u307E\u3059\u3002\u7BA1\u7406\u8005\u306B\u95A2\u9023\u3057\u305F\u65B0\u898F\u30E6\u30FC\u30B6\u30FC\u3092\u8FFD\u52A0\u3059\u308B\u306B\u306F\u3001\u5F15\u6570 userID \u306B -2\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,d.jsxs)(s.p,{children:["\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u3084\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30B7\u30B9\u30C6\u30E0\u304C\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u65E2\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u6A29\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(s.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/ja/commands/delete-user",children:"DELETE USER"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/get-group-list",children:"GET GROUP LIST"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/get-user-list",children:"GET USER LIST"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/is-user-deleted",children:"Is user deleted"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/validate-password",children:"Validate password"})]}),"\n",(0,d.jsx)(s.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(s.td,{children:"612"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return i}});var r=n(667294);let d={},t=r.createContext(d);function i(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);