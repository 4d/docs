"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62851"],{665662:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>h,default:()=>x,assets:()=>l,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-get-auto-row-height","title":"LISTBOX Get auto row height","description":"LISTBOX Get auto row height ( { ;} object ; selector {; unit*} )  : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-auto-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-auto-row-height","permalink":"/docs/ja/commands/listbox-get-auto-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-auto-row-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-auto-row-height","title":"LISTBOX Get auto row height","slug":"/commands/listbox-get-auto-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/ja/commands/listbox-get-arrays"},"next":{"title":"LISTBOX GET CELL COORDINATES","permalink":"/docs/ja/commands/listbox-get-cell-coordinates"}}'),r=t("785893"),d=t("250065");let i={id:"listbox-get-auto-row-height",title:"LISTBOX Get auto row height",slug:"/commands/listbox-get-auto-row-height",displayed_sidebar:"docs"},h=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX Get auto row height"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"selector"})," {; ",(0,r.jsx)(n.em,{children:"unit"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u6307\u5B9A\u6642, Object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, Object\u306F\u5909\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642), \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u53D6\u5F97\u3059\u308B\u9AD8\u3055\u306E\u5024:lk row min height \u3042\u308B\u3044\u306F lk row max height"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unit"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u884C\u306E\u9AD8\u3055\u306E\u6700\u5C0F\u5024\u3001\u3042\u308B\u3044\u306F\u6700\u5927\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u9078\u629E\u3055\u308C\u305F\u884C\u306E\u9AD8\u3055\u306E\u5024"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX Get auto row height"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u304A\u3088\u3073 ",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u884C\u306E\u9AD8\u3055\u306E\u30AB\u30EC\u30F3\u3068\u306E\u6700\u5C0F\u5024\u3042\u308B\u3044\u306F\u6700\u5927\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u884C\u306E\u9AD8\u3055\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u6700\u5C0F\u5024\u3042\u308B\u3044\u306F\u6700\u5927\u5024\u306F\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u30EA\u30B9\u30C8\u3092\u4F7F\u7528(",(0,r.jsx)(n.em,{children:"\u81EA\u52D5\u884C\u9AD8"})," \u53C2\u7167)\u3057\u3066\u3001\u3042\u308B\u3044\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066",(0,r.jsx)(n.a,{href:"/docs/ja/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u8A2D\u5B9A\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8"}),': \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u578B"\u304A\u3088\u3073"\u914D\u5217\u578B"\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u304A\u3044\u3066\u306E\u307F\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002']}),"\n",(0,r.jsxs)(n.p,{children:["\u4EFB\u610F\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(n.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"object"})," \u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3067\u3059 (\u6587\u5B57\u5217) \u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,r.jsx)(n.em,{children:"object"})," \u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,r.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"})," \u306E\u7BC0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"selector"})," \u5F15\u6570\u306B\u306F\u3001\u53D6\u5F97\u3059\u308B\u5024\u306E\u578B\u3092\u6E21\u3057\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"List Box"})," \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3069\u308C\u304B\u4E00\u3064\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5024"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row max height"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"33"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row min height"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5024\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u8FD4\u3057\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"unit"})," \u5F15\u6570\u306B",(0,r.jsx)(n.em,{children:"List Box"})," \u30C6\u30FC\u30DE\u5185\u306B\u3042\u308B\u3001\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3069\u308C\u304B\u4E00\u3064\u3092\u6E21\u3059\u3053\u3068\u3067\u3001\u4F7F\u7528\u3059\u308B\u5358\u4F4D\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{children:"\u5024"}),(0,r.jsx)(n.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk lines"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u9AD8\u3055\u3092\u884C\u6570\u3067\u6307\u5B9A\u30024D\u306F\u30D5\u30A9\u30F3\u30C8\u8A2D\u5B9A\u306B\u5FDC\u3058\u3066\u9AD8\u3055\u3092\u8A08\u7B97\u3057\u307E\u3059\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk pixels"}),(0,r.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u9AD8\u3055\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A (\u30C7\u30D5\u30A9\u30EB\u30C8)\u3002"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u884C\u306E\u3001\u6700\u5927\u306E\u9AD8\u3055\u304C\u4F55\u884C\u3067\u3042\u308B\u306E\u304B\u3092\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vhMaxInteger\n\xa0vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/listbox-get-row-height",children:"LISTBOX Get row height"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/listbox-get-rows-height",children:"LISTBOX Get rows height"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return h},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);