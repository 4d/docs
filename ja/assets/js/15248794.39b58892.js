"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37596"],{993439:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-insert-rows","title":"WP Table insert rows","description":"WP Table insert rows ( targetObj | {tableRef ; rowNumber} {; numRows} )  -> \u623B\u308A\u5024","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-insert-rows.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-insert-rows","permalink":"/docs/ja/WritePro/commands/wp-table-insert-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-insert-rows.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-insert-rows","title":"WP Table insert rows","slug":"/WritePro/commands/wp-table-insert-rows","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table insert columns","permalink":"/docs/ja/WritePro/commands/wp-table-insert-columns"},"next":{"title":"WP TABLE MERGE CELLS","permalink":"/docs/ja/WritePro/commands/wp-table-merge-cells"}}'),s=r("785893"),l=r("250065");let i={id:"wp-table-insert-rows",title:"WP Table insert rows",slug:"/WritePro/commands/wp-table-insert-rows",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Table insert rows"})," ( targetObj | {",(0,s.jsx)(n.em,{children:"tableRef"})," ; ",(0,s.jsx)(n.em,{children:"rowNumber"}),"} {; ",(0,s.jsx)(n.em,{children:"numRows"}),"} )  -> \u623B\u308A\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u307E\u305F\u306F4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableRef"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u8868\u53C2\u7167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowNumber"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u884C\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numRows"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u633F\u5165\u3059\u308B\u884C\u306E\u6570(\u30C7\u30D5\u30A9\u30EB\u30C8\u5024=1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u8868\u306E\u884C\u306E\u30EC\u30F3\u30B8"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Table insert rows"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30014D Write Pro \u306E\u8868\u306B\u4E00\u3064\u307E\u305F\u306F\u8907\u6570\u306E\u884C\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4E8C\u3064\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6700\u521D\u306E\u5F15\u6570\u3068\u3057\u3066targetObj \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u542B\u307E\u308C\u308B\u6700\u521D\u306E\u8868\u306B\u884C\u3092\u633F\u5165\u3057\u307E\u3059\u3002",(0,s.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306B\u6E21\u305B\u308B\u3082\u306E\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,s.jsx)(n.li,{children:"\u8981\u7D20(\u884C/\u6BB5\u843D/\u672C\u6587/\u30D8\u30C3\u30C0\u30FC/\u30D5\u30C3\u30BF\u30FC/\u30A4\u30F3\u30E9\u30A4\u30F3\u30D4\u30AF\u30C1\u30E3\u30FC/\u30BB\u30AF\u30B7\u30E7\u30F3/\u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3)"}),"\n",(0,s.jsx)(n.li,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"}),"\n"]}),"\n",(0,s.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u304C\u8868\u307E\u305F\u306F\u884C\u304C\u633F\u5165\u53EF\u80FD\u306A\u30C6\u30AD\u30B9\u30C8\u30EC\u30F3\u30B8\u3068\u4EA4\u5DEE\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u305B\u305A\u3001Null \u3092\u8FD4\u3057\u307E\u3059(\u30A8\u30E9\u30FC\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tableRef"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.em,{children:"rowNumber"})," \u5F15\u6570\u306E\u4E21\u65B9\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u6307\u5B9A\u3055\u308C\u305F\u8868\u306E\u3001\u6307\u5B9A\u3055\u308C\u305F\u884C\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u884C\u3092\u633F\u5165\u3057\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\nrowNumber \u5F15\u6570\u306E\u756A\u53F7\u304C\u306E\u8868\u5185\u306B\u3042\u308B\u884C\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001\u884C\u306F\u8868\u306B\u633F\u5165\u3067\u306F\u306A\u304F\u8FFD\u52A0\u3055\u308C\u308B\u5F62\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EFB\u610F\u306E",(0,s.jsx)(n.em,{children:"numRows"})," \u5F15\u6570\u306F",(0,s.jsx)(n.em,{children:"targetObj"})," \u307E\u305F\u306F ",(0,s.jsx)(n.em,{children:"tableRef"})," \u306B\u633F\u5165\u3055\u308C\u308B\u884C\u306E\u6570\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30671\u884C\u304C\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u623B\u308A\u5024"})}),"\n",(0,s.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u633F\u5165\u3055\u308C\u305F\u884C\u3092\u8868\u3059\u884C\u30EC\u30F3\u30B8\u3092\u8FD4\u3059\u304B\u3001\u3042\u308B\u3044\u306F\u4F55\u3082\u633F\u5165\u3055\u308C\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306FNull \u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Invoice"})," \u306E\u8868\u306E\u7D42\u308F\u308A\u306B\u884C\u3092\u4E8C\u3064\u8FFD\u52A0\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $row : Object\n\xa0var $table;$row : Object\n\xa0var $rowNum : Integer\n\xa0\n\xa0$table:=WP Get element by ID(WParea;"Invoice")\xa0//"Invoice" \u306E\u8868\u3092\u53D6\u5F97\n\xa0\n\xa0If($table#Null)\n\xa0\xa0\xa0\xa0$rowNum:=$table.rowCount+1\xa0// \u6700\u5F8C\u306E\u884C\u306B1\u3092\u52A0\u3048\u305F\u6570\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u884C\u3092\u8FFD\u52A0\u3059\u308B\n\xa0\xa0\xa0\xa0$row:=WP Table insert rows($table;$rowNum;2)\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6B63\u3057\u3044\u4F4D\u7F6E\u306B\u884C\u304C\u4E8C\u3064\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u307E\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(793133).Z+"",width:"826",height:"434"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-table-insert-columns",children:"WP Table insert columns"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},793133:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict4680266.en-262689e127dc7b61f151a8b638b6c043.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);