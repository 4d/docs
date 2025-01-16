"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18020"],{814778:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/sql-get-data-source-list","title":"SQL GET DATA SOURCE LIST","description":"SQL GET DATA SOURCE LIST ( sourceType ; sourceNamesArr ; driversArr )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-get-data-source-list.md","sourceDirName":"commands-legacy","slug":"/commands/sql-get-data-source-list","permalink":"/docs/ja/20-R7/commands/sql-get-data-source-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-data-source-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-get-data-source-list","title":"SQL GET DATA SOURCE LIST","slug":"/commands/sql-get-data-source-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL Get current data source","permalink":"/docs/ja/20-R7/commands/sql-get-current-data-source"},"next":{"title":"SQL GET LAST ERROR","permalink":"/docs/ja/20-R7/commands/sql-get-last-error"}}'),d=s("785893"),t=s("250065");let c={id:"sql-get-data-source-list",title:"SQL GET DATA SOURCE LIST",slug:"/commands/sql-get-data-source-list",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL GET DATA SOURCE LIST"})," ( ",(0,d.jsx)(n.em,{children:"sourceType"})," ; ",(0,d.jsx)(n.em,{children:"sourceNamesArr"})," ; ",(0,d.jsx)(n.em,{children:"driversArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sourceType"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30BD\u30FC\u30B9\u30BF\u30A4\u30D7: \u30E6\u30FC\u30B6\u307E\u305F\u306F\u30B7\u30B9\u30C6\u30E0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sourceNamesArr"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u540D\u306E\u914D\u5217"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"driversArr"}),(0,d.jsx)(n.td,{children:"Text array"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30BD\u30FC\u30B9\u7528\u306E\u30C9\u30E9\u30A4\u30D0\u306E\u914D\u5217"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"GET DATA SOURCE LIST"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u30B7\u30B9\u30C6\u30E0\u306EODBC\u30DE\u30CD\u30FC\u30B8\u30E3\u3067\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B",(0,d.jsx)(n.em,{children:"sourceType"})," \u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306E\u30C9\u30E9\u30A4\u30D0\u3068\u540D\u524D\u3092",(0,d.jsx)(n.em,{children:"sourceNamesArr"}),"\u3068",(0,d.jsx)(n.em,{children:"driversArr"}),"\u306E\u914D\u5217\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["4D\u3067\u306F\u30E9\u30F3\u30B2\u30FC\u30B8\u306B\u3088\u308B\u5916\u90E8ODBC\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3078\u306E\u30C0\u30A4\u30EC\u30AF\u30C8\u63A5\u7D9A\u304C\u53EF\u80FD\u3067\u3059\u3002\u305D\u3057\u3066",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/end-sql",title:"End SQL",children:"End SQL"}),"\u30BF\u30B0\u69CB\u9020\u5185\u3067SQL\u30AF\u30A8\u30EA\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u6A5F\u80FD\u3057\u307E\u3059\u3002",(0,d.jsx)(n.em,{children:"GET DATA SOURCE LIST"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30DE\u30B7\u30FC\u30F3\u4E0A\u306B\u5B58\u5728\u3059\u308B\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306E\u30EA\u30B9\u30C8\u3092\u5F97\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sql-login",title:"SQL LOGIN",children:"SQL LOGIN"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u4F7F\u7528\u3059\u308B\u30BD\u30FC\u30B9\u3092\u6307\u5B9A\u3059\u308B\u305F\u3081\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/end-sql",title:"End SQL",children:"End SQL"}),"\u30BF\u30B0\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u3092\u4F7F\u7528\u3057\u3066\u30AB\u30EC\u30F3\u30C8\u30BD\u30FC\u30B9\u306BSQL\u30AF\u30A8\u30EA\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u30024D\u306E\u5185\u90E8\u30A8\u30F3\u30B8\u30F3\u3092\u518D\u5EA6\u4F7F\u7528\u3057\u3066\u30AF\u30A8\u30EA\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sql-logout",title:"SQL LOGOUT",children:"SQL LOGOUT"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3060\u3051\u3067\u3059\u3002\u30E1\u30BD\u30C3\u30C9\u30A8\u30C7\u30A3\u30BF\u306ESQL\u30B3\u30DE\u30F3\u30C9\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u30014D SQL Reference \u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"sourceType"}),'\u306B\u306F\u3001\u691C\u7D22\u3057\u305F\u3044\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u306E\u30BF\u30A4\u30D7\u3092\u6E21\u3057\u307E\u3059\u3002""\u30C6\u30FC\u30DE\u306B\u3042\u308B\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306E\u5B9A\u6570\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{children:"\u5024"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"System data source"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"User data source"}),(0,d.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A1\u30A4\u30EB\u578B\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u9664\u5916\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u8A72\u5F53\u3059\u308B\u5024\u3067",(0,d.jsx)(n.em,{children:"sourceNamesArr"}),"\u3068",(0,d.jsx)(n.em,{children:"driversArr"}),"\u914D\u5217\u306B\u66F8\u304D\u8FBC\u307F\u3001\u30B5\u30A4\u30BA\u3092\u8ABF\u7BC0\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ODBC\u7D4C\u7531\u3067\u5916\u90E84D\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3078\u63A5\u7D9A\u3057\u305F\u3044\u5834\u5408\u3001\u304A\u624B\u6301\u3061\u306E\u30DE\u30B7\u30FC\u30F3\u306B 4D\u306EODBC Driver\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u30014D ODBC Driver Installation\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306F\u30E6\u30FC\u30B6\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u4F7F\u7528\u3059\u308B\u4F8B\u3067\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrDSN;0)\n\xa0ARRAY TEXT(arrDSNDrivers;0)\n\xa0GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304C1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sql-get-current-data-source",children:"SQL Get current data source"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sql-login",children:"SQL LOGIN"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/sql-logout",children:"SQL LOGOUT"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"989"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);