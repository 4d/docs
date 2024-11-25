"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61634"],{694015:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"commands-legacy/get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","description":"GET FIELD ENTRY PROPERTIES ( fieldPtr|tableNum {; fieldNum}; list ; mandatory ; nonEnterable ; nonModifiable )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-entry-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-entry-properties","permalink":"/docs/ja/commands/get-field-entry-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-entry-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-entry-properties","title":"GET FIELD ENTRY PROPERTIES","slug":"/commands/get-field-entry-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get external data path","permalink":"/docs/ja/commands/get-external-data-path"},"next":{"title":"GET FIELD PROPERTIES","permalink":"/docs/ja/commands/get-field-properties"}}'),s=t("785893"),d=t("250065");let l={id:"get-field-entry-properties",title:"GET FIELD ENTRY PROPERTIES",slug:"/commands/get-field-entry-properties",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET FIELD ENTRY PROPERTIES"})," ( fieldPtr|tableNum {; ",(0,s.jsx)(n.em,{children:"fieldNum"}),"}; ",(0,s.jsx)(n.em,{children:"list"})," ; ",(0,s.jsx)(n.em,{children:"mandatory"})," ; ",(0,s.jsx)(n.em,{children:"nonEnterable"})," ; ",(0,s.jsx)(n.em,{children:"nonModifiable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPtr|tableNum"}),(0,s.jsx)(n.td,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC, \u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u30DD\u30A4\u30F3\u30BF\u3001\u307E\u305F\u306F\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u7B2C1\u5F15\u6570\u304C\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u306E\u5834\u5408\u3001 \u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"list"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u95A2\u9023\u3065\u3051\u3089\u308C\u305F\u9078\u629E\u30EA\u30B9\u30C8\u306E\u540D\u524D\u3001\u307E\u305F\u306F\u7A7A\u306E\u6587\u5B57\u5217"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mandatory"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = \u5FC5\u9808\u5165\u529B\u3001 False = \u4EFB\u610F"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nonEnterable"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = \u8868\u793A\u306E\u307F\u3001 False = \u5165\u529B\u53EF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nonModifiable"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = \u4FEE\u6B63\u4E0D\u53EF\u3001False = \u4FEE\u6B63\u53EF"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["GET FIELD ENTRY PROPERTIES\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"tableNum"}),"\u304A\u3088\u3073",(0,s.jsx)(n.em,{children:"fieldNum"}),"\u3001\u307E\u305F\u306F",(0,s.jsx)(n.em,{children:"fieldPtr"}),"\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30C7\u30FC\u30BF\u5165\u529B\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u5F15\u6570\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableNum"}),"\u304A\u3088\u3073",(0,s.jsx)(n.em,{children:"fieldNum"}),"\u306B\u5BFE\u3057\u3001\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7\u3092\u6307\u5B9A\u3001\u307E\u305F\u306F"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"fieldPtr"}),"\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u6307\u5B9A"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30A6\u30A4\u30F3\u30C9\u30A6\u30EC\u30D9\u30EB\u3067\u5B9A\u7FA9\u3057\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FD4\u3057\u307E\u3059\u3002\u540C\u69D8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30D5\u30A9\u30FC\u30E0\u30EC\u30D9\u30EB\u3067\u3082\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5F15\u6570",(0,s.jsx)(n.em,{children:"list"}),"\u306B\u306F\u3001\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u9078\u629E\u30EA\u30B9\u30C8\u540D\uFF08\u5B58\u5728\u3059\u308B\u5834\u5408\uFF09\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u30EA\u30B9\u30C8\u306F\u6B21\u306E\u30BF\u30A4\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF1A\u6587\u5B57\u5217\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u5B9F\u6570\u3001\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u65E5\u4ED8\u3001\u6642\u9593\u3001\u30D6\u30FC\u30EB\u3002",(0,s.jsx)(n.br,{}),'\n\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u95A2\u9023\u4ED8\u3051\u3089\u308C\u305F\u9078\u629E\u30EA\u30B9\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3084\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u304C\u9078\u629E\u30EA\u30B9\u30C8\u7528\u306E\u3082\u306E\u3067\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u6587\u5B57\u5217\uFF08""\uFF09\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,s.jsxs)(n.li,{children:["\u5F15\u6570",(0,s.jsx)(n.em,{children:"mandatory"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u5FC5\u9808\u5165\u529B\u3067\u3042\u308C\u3070True\u304C\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u5FC5\u9808\u5165\u529B\u5C5E\u6027\u306F\u3001BLOB\u3092\u9664\u304F\u3042\u3089\u3086\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5F15\u6570",(0,s.jsx)(n.em,{children:"nonEnterable"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u8868\u793A\u306E\u307F\u3067\u3042\u308C\u3070True\u304C\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u5165\u529B\u4E0D\u53EF\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u8AAD\u307F\u53D6\u308A\u306E\u307F\u3067\u3042\u308A\u3001\u30C7\u30FC\u30BF\u306E\u5165\u529B\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u8868\u793A\u306E\u307F\u5C5E\u6027\u306F\u3001BLOB\u3092\u9664\u304F\u3042\u3089\u3086\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5F15\u6570",(0,s.jsx)(n.em,{children:"nonModifiable"}),"\u306B\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u4FEE\u6B63\u4E0D\u53EF\u3067\u3042\u308C\u3070True\u304C\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u4FEE\u6B63\u4E0D\u53EF\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u306E\u5165\u529B\u306F\u4E00\u5EA6\u3057\u304B\u884C\u3048\u305A\u3001\u4EE5\u5F8C\u4FEE\u6B63\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u4FEE\u6B63\u4E0D\u53EF\u5C5E\u6027\u306F\u3001BLOB\u3092\u9664\u304F\u3042\u3089\u3086\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u30BF\u30A4\u30D7\u306B\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-table-properties",children:"GET TABLE PROPERTIES"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);