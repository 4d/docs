"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68012"],{572271:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>A,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-merge-cells","title":"WP TABLE MERGE CELLS","description":"WP TABLE MERGE CELLS ( targetObj ) | ( tableRef ; startColumn ; startRow {; columnCount{; rowCount}} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-table-merge-cells.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-merge-cells","permalink":"/docs/ja/WritePro/commands/wp-table-merge-cells","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-merge-cells.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-table-merge-cells","title":"WP TABLE MERGE CELLS","slug":"/WritePro/commands/wp-table-merge-cells","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Table insert rows","permalink":"/docs/ja/WritePro/commands/wp-table-insert-rows"},"next":{"title":"WP Table range","permalink":"/docs/ja/WritePro/commands/wp-table-range"}}'),s=t("785893"),d=t("250065");let l={id:"wp-table-merge-cells",title:"WP TABLE MERGE CELLS",slug:"/WritePro/commands/wp-table-merge-cells",displayed_sidebar:"docs"},c=void 0,A={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) | ( ",(0,s.jsx)(n.em,{children:"tableRef"})," ; ",(0,s.jsx)(n.em,{children:"startColumn"})," ; ",(0,s.jsx)(n.em,{children:"startRow"})," {; ",(0,s.jsx)(n.em,{children:"columnCount"}),"{; ",(0,s.jsx)(n.em,{children:"rowCount"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u307E\u305F\u306F4D Write Pro\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableRef"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u8868\u306E\u53C2\u7167"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startColumn"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6700\u521D\u306E\u30BB\u30EB\u5217\u306E\u4F4D\u7F6E"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startRow"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6700\u521D\u306E\u30BB\u30EB\u884C\u306E\u4F4D\u7F6E"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u7D50\u5408\u3059\u308B\u5217\u306E\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rowCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u7D50\u5408\u3059\u308B\u884C\u306E\u6570"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"targetObj"})," \u307E\u305F\u306F(",(0,s.jsx)(n.em,{children:"startColumn"}),"\u3001",(0,s.jsx)(n.em,{children:"startRow"}),"\u3001",(0,s.jsx)(n.em,{children:"columnCount"}),"\u3001\u304A\u3088\u3073 ",(0,s.jsx)(n.em,{children:"rowCount"})," \u306B\u3088\u3063\u3066\u5B9A\u7FA9\u3055\u308C\u308B)",(0,s.jsx)(n.em,{children:"tableRef"})," \u5185\u306E\u30BB\u30EB\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u7D50\u5408\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u3044\u3065\u308C\u304B\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"targetObj:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,s.jsx)(n.li,{children:"\u8981\u7D20(\u8868 / \u884C / \u672C\u6587 / \u6BB5\u843D / \u30A2\u30F3\u30AB\u30FC\u3055\u308C\u305F\u753B\u50CF / \u30D8\u30C3\u30C0\u30FC / \u30D5\u30C3\u30BF\u30FC / \u30BB\u30AF\u30B7\u30E7\u30F3 / \u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3)"}),"\n",(0,s.jsx)(n.li,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u304C\u3001\u30BB\u30EB\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u542B\u3080\u8868\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u30EC\u30F3\u30B8\u3068\u4EA4\u5DEE\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"targetObj"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30BF\u30FC\u30B2\u30C3\u30C8\u304C\u3001\u5358\u4E00\u306E\u30BB\u30EB\u306E\u307F\u3068\u4EA4\u5DEE\u3059\u308B\u5834\u5408\u3001",(0,s.jsx)(n.strong,{children:"WP TABLE MERGE CELLS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u307E\u305F\u306F"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["startColumn \u5F15\u6570\u304A\u3088\u3073 ",(0,s.jsx)(n.em,{children:"startRow"})," \u5F15\u6570 - \u7D50\u5408\u3059\u308B\u6700\u521D\u306E\u30BB\u30EB\u306E\u5DE6\u4E0A\u306E\u5EA7\u6A19\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"columnCount \u5F15\u6570\u304A\u3088\u3073 rowCount \u5F15\u6570(\u4EFB\u610F) - \u305D\u308C\u305E\u308C\u7D50\u5408\u3057\u305F\u3044\u5217\u304A\u3088\u3073\u884C\u306E\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"rowCount \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u30011 \u3092\u6E21\u3057\u305F\u306E\u3068\u540C\u7B49\u306E\u6271\u3044\u306B\u306A\u308A\u307E\u3059(1\u304C\u30C7\u30D5\u30A9\u30EB\u30C8\u5024)\u3002columnCount \u5F15\u6570\u304A\u3088\u3073 rowCount \u5F15\u6570\u306E\u4E21\u65B9\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u3001\u3053\u308C\u306F\u5358\u4E00\u306E\u30BB\u30EB\u3092\u6307\u5B9A\u3059\u308B\u306E\u3068\u540C\u7B49\u306B\u306A\u308A\u307E\u3059\u306E\u3067\u3001\u4F55\u3082\u8D77\u3053\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["If startColumn \u5F15\u6570\u3068 ColumnCount \u5F15\u6570\u306E\u548C\u3001\u307E\u305F\u306F ",(0,s.jsx)(n.em,{children:"startRow"})," \u5F15\u6570\u3068 rowCount \u5F15\u6570\u306E\u548C\u304C ",(0,s.jsx)(n.em,{children:"tableRef"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u8868\u306E\u5217/\u884C\u6570\u3092\u8D85\u3048\u308B\u5834\u5408\u3001\u307E\u305F\u306FstartColumn \u5F15\u6570\u307E\u305F\u306F ",(0,s.jsx)(n.em,{children:"startRow"})," \u5F15\u6570\u304C ",(0,s.jsx)(n.em,{children:"tableRef"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u8868\u306E\u5217/\u884C\u6570\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001\u8FD4\u3055\u308C\u308B\u30EC\u30F3\u30B8\u306B\u306F\u6700\u5927\u9650\u5927\u304D\u3044\u5217/\u884C\u6570\u3092\u683C\u7D0D\u3057\u305F\u30EC\u30F3\u30B8\u304C\u8FD4\u3055\u308C\u307E\u3059\u306E\u3067\u3001\u3053\u308C\u306F\u3064\u307E\u308A\u8868\u5168\u4F53\u304C\u4E00\u3064\u306E\u5DE8\u5927\u306A\u30BB\u30EB\u3078\u3068\u7D50\u5408\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:"\u8907\u6570\u306E\u30BB\u30EB\u306E\u30EC\u30F3\u30B8\u3092\u6307\u5B9A\u3057\u3066\u4E00\u3064\u306B\u7D50\u5408\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0WP TABLE MERGE CELLS($table;3;2;2;4)\n\xa0\xa0//\u307E\u305F\u306F\n\xa0$cells:=WP Table get cells($table;3;2;2;4)\n\xa0WP TABLE MERGE CELLS($cells)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5B9F\u884C\u3057\u305F\u7D50\u679C:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(544995).Z+"",width:"599",height:"100"})}),"\n",(0,s.jsx)(n.p,{children:"\u5143\u306E\u30BB\u30EB\u306B\u3042\u3063\u305F\u65E2\u5B58\u306E\u30C7\u30FC\u30BF\u306F\u3001\u7D50\u5408\u3057\u305F\u30BB\u30EB\u5185\u306B\u9023\u7D50\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001",(0,s.jsx)(n.em,{children:"\u30BB\u30EB\u306E\u7D50\u5408\u3068\u7D50\u5408\u89E3\u9664"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/WritePro/commands/wp-table-split-cells",children:"WP TABLE SPLIT CELLS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"\u8868\u306E\u7BA1\u7406"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},544995:function(e,n,t){t.d(n,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlcAAABkCAYAAACrShWuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowNjoyMCAwNjozNDoxNXY95RgAABF9SURBVHhe7d37b1V1usfxp9ArCBShIpdSoOUm0FIKKorACBEVmXOiycyJJwJGjYkmZoiJ/iI/nT/A+ckEIeEi/jTanDEzCZdw0dJSbiL3i0ARFZSLcim3tsjZn+93re5u965YXWe3uN+vZNlhbSeYp9+11metvffzZN2OMQAAAESiW/ATAAAAESBcAQAARIhwBQAAECHCFQAAQIQIVwAAABEiXAEAAESIcAUAABAhwhUAAECECFcAAAARIlwBAABEKGH8za1bt6yxsdF++umnYA+ysrKse/furibUJU51yc7OdmuGusSF60V1YbJUXLdu3Sw/P9/y8vKCPemj30NTUxPrtA39PrSxThOpJqKaUJe48BpITeK0VnJyclrXzM+1hqurV6/arl27bPfu3VZUVORehNnNmzftxx9/tN69e1uPHj2Cvbhx44b98MMP1q9fv065YHZV169ft3Pnztl9993nwgQ8rRfV4/nnnw/2pM/Bgwft/Pnz7iSo8AtzYVPBSsduexeHTHTt2jV306iLJmvFU6i6cuWKu/6pLvC0VgYOHGilpaVWUFAQ7I1rDVe6UNbU1LiT4OTJk0mogQsXLrjQOWbMGCspKaEugbNnz9qOHTtsypQpLkjAO3PmjNXW1trjjz/ugifrxTt9+rTt37/fXn31VXcXnE7Lly93F0zdNKb77+6qvv32W/vmm2/cea1Pnz7BXmzfvt369u3rzvW5ubnB3symIL5582arqKiwAQMGBHtx5MgRd8M4b968lHVpDVcKEVu3brVevXrZjBkz3IvwF8tPP/3ULayxY8cGe6GT88aNG2369OnuRATvq6++sjVr1rgDbtCgQcFenDx50q2XBQsWpD3gfPDBB+6GcdSoUYSrwOHDh23Pnj3uXH///fcHe1FdXe2eRuh8zzsVnh64rFixwp544gkbMWJEsBfbtm2zo0eP2uzZs92a+bnW58F6BKqNO+1kqgmf10ikmlCX1KhL16LzWktLC7+TNsLPWmlDnOqhtUJd4qhH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"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);