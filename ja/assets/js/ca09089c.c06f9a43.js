"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33577"],{132472:function(n,e,r){r.r(e),r.d(e,{default:()=>a,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>c});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-insert-picture","title":"WP INSERT PICTURE","description":"WP INSERT PICTURE ( targetObj ; picture ; mode {; rangeUpdate} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-insert-picture.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-insert-picture","permalink":"/docs/ja/20-R7/WritePro/commands/wp-insert-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-insert-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-insert-picture","title":"WP INSERT PICTURE","slug":"/WritePro/commands/wp-insert-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP INSERT FORMULA","permalink":"/docs/ja/20-R7/WritePro/commands/wp-insert-formula"},"next":{"title":"WP Insert table","permalink":"/docs/ja/20-R7/WritePro/commands/wp-insert-table"}}'),d=r("785893"),s=r("250065");let i={id:"wp-insert-picture",title:"WP INSERT PICTURE",slug:"/WritePro/commands/wp-insert-picture",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function j(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"WP INSERT PICTURE"})," ( ",(0,d.jsx)(e.em,{children:"targetObj"})," ; ",(0,d.jsx)(e.em,{children:"picture"})," ; ",(0,d.jsx)(e.em,{children:"mode"})," {; ",(0,d.jsx)(e.em,{children:"rangeUpdate"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"targetObj"}),(0,d.jsx)(e.td,{children:"Object"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30EC\u30F3\u30B8\u307E\u305F\u306F\u8981\u7D20\u307E\u305F\u306F4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"picture"}),(0,d.jsx)(e.td,{children:"Picture"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3001\u3042\u308B\u3044\u306F\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mode"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u633F\u5165\u30E2\u30FC\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"rangeUpdate"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30EC\u30F3\u30B8\u66F4\u65B0\u30E2\u30FC\u30C9"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"WP INSERT PICTURE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u3057\u305F\u633F\u5165\u30E2\u30FC\u30C9 ",(0,d.jsx)(e.em,{children:"mode"})," \u306B\u5F93\u3063\u3066\u3001",(0,d.jsx)(e.em,{children:"picture"})," \u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u3092 ",(0,d.jsx)(e.em,{children:"targetObj"})," \u3067\u6307\u5B9A\u3057\u305F\u30EC\u30F3\u30B8\u306B\u633F\u5165\u3057\u307E\u3059\u3002\u30D4\u30AF\u30C1\u30E3\u30FC\u306F\u6587\u5B57\u3068\u3057\u3066 ",(0,d.jsx)(e.em,{children:"targetObj"})," \u306B\u633F\u5165\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"targetObj"})," \u306B\u306F\u4EE5\u4E0B\u306E\u3082\u306E\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u30EC\u30F3\u30B8"}),"\n",(0,d.jsx)(e.li,{children:"\u8981\u7D20(\u8868 / \u884C / \u6BB5\u843D / \u672C\u6587 / \u30D8\u30C3\u30C0\u30FC / \u30D5\u30C3\u30BF\u30FC / \u30A4\u30F3\u30E9\u30A4\u30F3\u753B\u50CF / \u30BB\u30AF\u30B7\u30E7\u30F3 / \u30B5\u30D6\u30BB\u30AF\u30B7\u30E7\u30F3)"}),"\n",(0,d.jsx)(e.li,{children:"4D Write Pro \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"picture"})," \u306B\u306F\u6B21\u306E\u3082\u306E\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"}),"\n",(0,d.jsxs)(e.li,{children:["\u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u30D1\u30B9 (\u30B7\u30B9\u30C6\u30E0\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3001\u6587\u5B57\u5217)",(0,d.jsx)(e.br,{}),"\n\u6587\u5B57\u5217\u3092\u53D7\u3051\u6E21\u3059\u5834\u5408\u306B\u306F\u3001\u30D5\u30EB\u30D1\u30B9\u540D\u307E\u305F\u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3092\u8D77\u70B9\u3068\u3057\u305F\u76F8\u5BFE\u30D1\u30B9\u540D\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u3068\u540C\u3058\u5834\u6240\u306B\u30D4\u30AF\u30C1\u30E3\u30FC\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u540D\u3060\u3051\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6E21\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u62E1\u5F35\u5B50\u3082\u6307\u793A\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30D4\u30AF\u30C1\u30E3\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306F4D\u304C\u30CD\u30A4\u30C6\u30A3\u30D6\u306B\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u3082\u306E\u3067\u3042\u308C\u3070\u3044\u305A\u308C\u306E\u5F62\u5F0F\u3067\u3082\u69CB\u3044\u307E\u305B\u3093 (",(0,d.jsx)(e.em,{children:"\u30D4\u30AF\u30C1\u30E3"})," \u53C2\u7167)\u3002",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),' \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u4F7F\u7528\u53EF\u80FD\u306A\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306B\u8907\u6570\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8 (\u30B3\u30FC\u30C7\u30C3\u30AF) \u304C\u542B\u307E\u308C\u3066\u3044\u308B\u3068\u30014D Write Pro \u306F\u8868\u793A\u7528\u306B\u3072\u3068\u3064\u3001\u305D\u3057\u3066 (\u7570\u306A\u308B\u5834\u5408\u306B\u306F) \u5370\u5237\u7528\u306B\u3072\u3068\u3064\u3001"\u6700\u9069\u306A" \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u81EA\u52D5\u7684\u306B\u9078\u629E\u3057\u3066\u4FDD\u5B58\u3057\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"mode"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u306E\u633F\u5165\u30E2\u30FC\u30C9\u3092\u6307\u5B9A\u3059\u308B\u5B9A\u6570\u3092\u53D7\u3051\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"wk append"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u7D42\u308F\u308A\u306B\u633F\u5165\u3059\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"wk prepend"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u59CB\u3081\u306B\u633F\u5165\u3059\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"wk replace"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u30BF\u30FC\u30B2\u30C3\u30C8\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u7F6E\u304D\u63DB\u3048\u308B"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"targetObj"})," \u5F15\u6570\u304C\u30EC\u30F3\u30B8\u3060\u3063\u305F\u5834\u5408\u3001\u4EFB\u610F\u306E ",(0,d.jsx)(e.em,{children:"rangeUpdate"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u3001\u633F\u5165\u3057\u305F\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u30EC\u30F3\u30B8\u306B\u542B\u3081\u308B\u304B\u5426\u304B\u3092\u6307\u5B9A\u3059\u308B\u5B9A\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"}),(0,d.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"wk exclude from range"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"\u66F4\u65B0\u3055\u308C\u305F\u30EC\u30F3\u30B8\u306B\u306F\u3001\u4EE5\u524D\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u307F\u3092\u542B\u3081\u308B"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"wk include in range"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"0"}),(0,d.jsx)(e.td,{children:"\u66F4\u65B0\u3055\u308C\u305F\u30EC\u30F3\u30B8\u306B\u633F\u5165\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u542B\u3081\u308B"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"rangeUpdate"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u633F\u5165\u3057\u305F\u30D4\u30AF\u30C1\u30E3\u30FC\u306F\u8FD4\u3055\u308C\u308B\u30EC\u30F3\u30B8\u306B\u542B\u3081\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"targetObj"})," \u5F15\u6570\u304C\u30EC\u30F3\u30B8\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"rangeUpdate"})," \u5F15\u6570\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u9078\u629E\u3057\u305F\u30D4\u30AF\u30C1\u30E3\u30FC\u304C\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u633F\u5165\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u8B66\u544A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Get selection([EXAMPLES]wpDoc)\n\xa0\n\xa0var $fail : Boolean\n\xa0$fail:=False\n\xa0\n\xa0\xa0// \u30E6\u30FC\u30B6\u30FC\u306B\u633F\u5165\u3059\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u9078\u629E\u3057\u3066\u3082\u3089\u3044\u307E\u3059\n\xa0$imgRef:=Open document("")\n\xa0\xa0// \u30E6\u30FC\u30B6\u30FC\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u306A\u304B\u3063\u305F\u5834\u5408\n\xa0If(OK=1)\n\xa0\xa0// \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u5F62\u5F0F\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u5408\n\xa0\xa0\xa0\xa0If(Is picture file(document))\n\xa0\xa0// \u30E6\u30FC\u30B6\u30FC\u304C\u9078\u629E\u3057\u305F\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u633F\u5165\u3057\u307E\u3059\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT PICTURE($wpRange;document;wk replace)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$fail:=True\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$fail:=True\n\xa0End if\n\xa0\xa0// \u633F\u5165\u306B\u5931\u6557\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u8B66\u544A\u3057\u307E\u3059\n\xa0If($fail)\n\xa0\xa0\xa0\xa0ALERT("Picture insertion failed")\n\xa0End if\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/WritePro/commands/wp-insert-document",children:"WP INSERT DOCUMENT"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/WritePro/commands/wp-picture-range",children:"WP Picture range"})]})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(j,{...n})}):j(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return c},a:function(){return i}});var t=r(667294);let d={},s=t.createContext(d);function i(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);