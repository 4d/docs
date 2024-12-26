"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85553"],{672067:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-user-list","title":"GET USER LIST","description":"GET USER LIST ( userNames ; userNumbers )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-user-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-list","permalink":"/docs/ja/commands/get-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-user-list","title":"GET USER LIST","slug":"/commands/get-user-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get plugin access","permalink":"/docs/ja/commands/get-plugin-access"},"next":{"title":"GET USER PROPERTIES","permalink":"/docs/ja/commands/get-user-properties"}}'),t=n("785893"),d=n("250065");let i={id:"get-user-list",title:"GET USER LIST",slug:"/commands/get-user-list",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET USER LIST"})," ( ",(0,t.jsx)(s.em,{children:"userNames"})," ; ",(0,t.jsx)(s.em,{children:"userNumbers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u5F15\u6570"}),(0,t.jsx)(s.th,{children:"\u578B"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userNames"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u8868\u793A\u3055\u308C\u308B\u30E6\u30FC\u30B6\u30FC\u540D"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userNumbers"}),(0,t.jsx)(s.td,{children:"Integer array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"\u5BFE\u5FDC\u3059\u308B\u30E6\u30CB\u30FC\u30AF\u306A\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(s.p,{children:["GET USER LIST \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30A8\u30C7\u30A3\u30BF\u30FC\u306B\u8868\u793A\u3055\u308C\u308B\u30E6\u30FC\u30B6\u30FC\u540D\u3068\u30E6\u30CB\u30FC\u30AF\u306A\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7\u3092\u914D\u5217 ",(0,t.jsx)(s.em,{children:"userNames"})," \u3068 ",(0,t.jsx)(s.em,{children:"userNumbers"})," \u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u914D\u5217 ",(0,t.jsx)(s.em,{children:"userNames"})," \u306B\u306F\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u8868\u793A\u3055\u308C\u308B\u30E6\u30FC\u30B6\u30FC\u540D\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u3001\u7121\u52B9\u3068\u306A\u3063\u305F\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u6301\u3064\u30E6\u30FC\u30B6\u30FC\u3082\u542B\u307E\u308C\u307E\u3059 (\u30D1\u30B9\u30EF\u30FC\u30C9\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u306F\u30E6\u30FC\u30B6\u30FC\u540D\u304C\u7DD1\u8272\u3067\u8868\u793A\u3055\u308C\u307E\u3059) \u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u6CE8:"})," \u524A\u9664\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u3092\u691C\u51FA\u3059\u308B\u306B\u306F\u3001",(0,t.jsx)(s.a,{href:"/docs/ja/commands/is-user-deleted",children:"Is user deleted"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u914D\u5217 ",(0,t.jsx)(s.em,{children:"userNames"})," \u3068\u540C\u671F\u3055\u308C\u3066\u3044\u308B\u914D\u5217 ",(0,t.jsx)(s.em,{children:"userNumbers"})," \u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30E6\u30CB\u30FC\u30AF\u306A\u30E6\u30FC\u30B6\u30FCID\u756A\u53F7\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u95A2\u3059\u308B\u6CE8\u8A18:"})," \u30B0\u30EB\u30FC\u30D7\u304A\u3088\u3073\u30E6\u30FC\u30B6\u30FC\u306EID\u756A\u53F7\u306F\u3001\u305D\u306E\u4F5C\u6210\u8005 (\u30C7\u30B6\u30A4\u30CA\u30FC\u3001\u7BA1\u7406\u8005\u3001\u304A\u3088\u3073\u95A2\u9023\u3057\u305F\u30B0\u30EB\u30FC\u30D7\u30AA\u30FC\u30CA\u30FC) \u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F ",(0,t.jsx)(s.em,{children:"\u30E6\u30FC\u30B6\u30FC\u3068\u30B0\u30EB\u30FC\u30D7 ID \u306E\u7BC4\u56F2"})," \u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(s.h4,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsx)(s.p,{children:"\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3059\u305F\u3081\u306E\u7279\u5B9A\u306E\u30A2\u30AF\u30BB\u30B9\u6A29\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u3084\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30B7\u30B9\u30C6\u30E0\u304C\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u3088\u3063\u3066\u65E2\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u6A29\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002ON ERR CALL \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,t.jsx)(s.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/ja/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/ja/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/ja/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(s.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(s.td,{children:"609"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var r=n(667294);let t={},d=r.createContext(t);function i(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);