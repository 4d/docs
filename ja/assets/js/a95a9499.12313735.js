"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35358"],{803395:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-delete-columns","title":"WP TABLE DELETE COLUMNS","description":"WP TABLE DELETE COLUMNS ( targetObj ) | ( tableRef ; colNumber {; numColumns} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-delete-columns.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-delete-columns","permalink":"/docs/ja/WritePro/commands/wp-table-delete-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-delete-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-delete-columns","title":"WP TABLE DELETE COLUMNS","slug":"/WritePro/commands/wp-table-delete-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table append row","permalink":"/docs/ja/WritePro/commands/wp-table-append-row"},"next":{"title":"WP TABLE DELETE ROWS","permalink":"/docs/ja/WritePro/commands/wp-table-delete-rows"}}'),l=t("785893"),s=t("250065");let d={id:"wp-table-delete-columns",title:"WP TABLE DELETE COLUMNS",slug:"/WritePro/commands/wp-table-delete-columns",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," ( ",(0,l.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,l.jsx)(n.em,{children:"tableRef"})," ; ",(0,l.jsx)(n.em,{children:"colNumber"})," {; ",(0,l.jsx)(n.em,{children:"numColumns"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"targetObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u307E\u305F\u306F4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tableRef"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u8868\u306E\u53C2\u7167"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"colNumber"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30AB\u30E9\u30E0\u306E\u756A\u53F7"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numColumns"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u30AB\u30E9\u30E0\u306E\u6570(\u30C7\u30D5\u30A9\u30EB\u30C8\u5024=1)"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"WP TABLE DELETE COLUMNS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30014D Write Pro \u306E\u8868\u304B\u3089\u4E00\u3064\u307E\u305F\u306F\u8907\u6570\u306E\u30AB\u30E9\u30E0\u3092\u524A\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E8C\u3064\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6700\u521D\u306E\u5F15\u6570\u3068\u3057\u3066targetObj \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u542B\u307E\u308C\u308B\u5168\u3066\u306E\u30AB\u30E9\u30E0\u3092\u524A\u9664\u3057\u307E\u3059\u3002",(0,l.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306B\u6E21\u305B\u308B\u3082\u306E\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,l.jsx)(n.li,{children:"\u8981\u7D20(\u884C/\u6BB5\u843D/\u672C\u6587/\u30D8\u30C3\u30C0\u30FC/\u30D5\u30C3\u30BF\u30FC/\u30A4\u30F3\u30E9\u30A4\u30F3\u30D4\u30AF\u30C1\u30E3\u30FC/\u30BB\u30AF\u30B7\u30E7\u30F3/\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3)"}),"\n",(0,l.jsxs)(n.li,{children:["4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8",(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u304C\u8907\u6570\u306E\u8868\u3068\u4EA4\u5DEE\u3059\u308B\u5834\u5408\u3001\u5168\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u89E6\u308C\u308B\u30AB\u30E9\u30E0\u306F\u524A\u9664\u3055\u308C\u307E\u3059\u3002",(0,l.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u304C\u8868\u3068\u4EA4\u5DEE\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093(\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093)\u3002",(0,l.jsx)(n.br,{}),"\n\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306F\u3001",(0,l.jsx)(n.em,{children:"numColumns"})," \u5F15\u6570\u306F(\u6E21\u3055\u308C\u305F\u5834\u5408)\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"tableRef"})," \u304A\u3088\u3073 ",(0,l.jsx)(n.em,{children:"colNumber"})," \u5F15\u6570\u306E\u4E21\u65B9\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u3001\u6307\u5B9A\u3055\u308C\u305F\u30AB\u30E9\u30E0\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304B\u3089\u30AB\u30E9\u30E0\u3092\u524A\u9664\u3057\u307E\u3059\u3002",(0,l.jsx)(n.br,{}),"\n\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u306F\u3001\u4EFB\u610F\u306E",(0,l.jsx)(n.em,{children:"numColumns"})," \u5F15\u6570\u3092\u6E21\u3059\u3068",(0,l.jsx)(n.em,{children:"tableRef"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u8868\u304B\u3089\u524A\u9664\u3059\u308B\u30AB\u30E9\u30E0\u306E\u6570\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30671\u30AB\u30E9\u30E0\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5168\u3066\u306E\u30AB\u30E9\u30E0\u3092\u8868\u304B\u3089\u524A\u9664\u3057\u305F\u5834\u5408\u3001\u8868\u5168\u4F53\u304C\u524A\u9664\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"Invoice"})," \u306E\u8868\u304B\u3089\u30AB\u30E9\u30E0\u3092\u4E00\u3064\u524A\u9664\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var $table : Object\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0// "Invoice" \u306E\u8868\u3092\u53D6\u5F97\n\xa0\n\xa0WP TABLE DELETE COLUMNS($table;2;1)\xa0//2\u3064\u3081\u306E\u30AB\u30E9\u30E0\u3092\u524A\u9664\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6B63\u3057\u3044\u4F4D\u7F6E\u306E\u30AB\u30E9\u30E0\u304C\u524A\u9664\u3055\u308C\u307E\u3059:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(918889).Z+"",width:"637",height:"340"})}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-table-delete-rows",children:"WP TABLE DELETE ROWS"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},918889:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4680318.en-a7679717d9892311e032589745bc010d.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let l={},s=r.createContext(l);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);