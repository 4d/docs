"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34020"],{666365:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/reduce-selection","title":"REDUCE SELECTION","description":"REDUCE SELECTION ( {aTable ;} number )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/reduce-selection.md","sourceDirName":"commands-legacy","slug":"/commands/reduce-selection","permalink":"/docs/ja/20-R7/commands/reduce-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freduce-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"reduce-selection","title":"REDUCE SELECTION","slug":"/commands/reduce-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records in selection","permalink":"/docs/ja/20-R7/commands/records-in-selection"},"next":{"title":"SCAN INDEX","permalink":"/docs/ja/20-R7/commands/scan-index"}}'),l=s("785893"),t=s("250065");let d={id:"reduce-selection",title:"REDUCE SELECTION",slug:"/commands/reduce-selection",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"REDUCE SELECTION"})," ( {",(0,l.jsx)(n.em,{children:"aTable"})," ;} ",(0,l.jsx)(n.em,{children:"number"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"aTable"}),(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u6570\u3092\u6E1B\u3089\u3059\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"number"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u9078\u629E\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u6570"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:["REDUCE SELECTION\u306F\u3001",(0,l.jsx)(n.em,{children:"aTable"}),"\u306E\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,l.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5148\u982D\u304B\u3089",(0,l.jsx)(n.em,{children:"number"}),"\u500B\u306E\u30EC\u30B3\u30FC\u30C9\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8FD4\u3057\u307E\u3059\u3002REDUCE SELECTION\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E",(0,l.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E",(0,l.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3057\u3001\u65B0\u3057\u3044\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5148\u982D\u30EC\u30B3\u30FC\u30C9\u3092\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306B\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note:"})," \u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8REDUCE SELECTION(aTable;0)\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001",(0,l.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304A\u3088\u3073\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u306F\u306A\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u6700\u521D\u306B\u300120\u3092\u8D85\u3048\u308B\u56FD\u306E\u8CA9\u58F2\u5E97\u3092\u5BFE\u8C61\u306B\u3057\u305F\u30B3\u30F3\u30C6\u30B9\u30C8\u306E\u6B63\u78BA\u306A\u7D71\u8A08\u3092\u691C\u7D22\u3057\u307E\u3059\u3002\u56FD\u3054\u3068\u306B$50,000\u4EE5\u4E0A\u306E\u88FD\u54C1\u58F2\u4E0A\u3092\u8A18\u9332\u3057\u305F\u4E0A\u4F4D3\u5E97\u3068\u3001\u5168\u4E16\u754C\u3067\u4E0A\u4F4D100\u5E97\u306B\u542B\u307E\u308C\u308B\u8CA9\u58F2\u5E97\u306B\u5BFE\u3057\u3001\u8CDE\u304C\u9001\u3089\u308C\u307E\u3059\u3002\u307B\u3093\u306E\u6570\u884C\u306E\u30B3\u30FC\u30C9\u3067\u3001\u3053\u306E\u8907\u96D1\u306A\u51E6\u7406\u304C\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u691C\u7D22\u3092\u5229\u7528\u3057\u3066\u5B9F\u884C\u3055\u308C\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE EMPTY SET([Dealers];"Winners")\xa0// \u7A7A\u306E\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\n\xa0SCAN INDEX([Dealers]Sales amount;100;<)\xa0// \u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u6700\u5F8C\u304B\u3089\u30B9\u30AD\u30E3\u30F3\n\xa0CREATE SET([Dealers];"100 best Dealers")\xa0// \u9078\u629E\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u30BB\u30C3\u30C8\u306B\u683C\u7D0D\n\xa0For($Country;1;Records in table([Countries]))\xa0// \u56FD\u3054\u3068\u306B\n\xa0\xa0// \u3053\u306E\u56FD\u306E\u8CA9\u58F2\u5E97\u3092\u691C\u7D22\n\xa0\xa0\xa0\xa0QUERY([Dealers];[Dealers]Country=[Countries]Name;*)\xa0// ...$50,000\u4EE5\u4E0A\u58F2\u3063\u305F\u8CA9\u58F2\u5E97\n\xa0\xa0\xa0\xa0QUERY([Dealers];&;[Dealers]Sales amount>=50000)\n\xa0\xa0\xa0\xa0CREATE SET([Dealers];"WinnerDealers")\xa0// \u30BB\u30C3\u30C8\u306B\u683C\u7D0D\n\xa0\xa0// \u4E0A\u4F4D100\u4F4D\u4EE5\u5185\u306E\u30BB\u30C3\u30C8\u306B\u7D50\u5408\n\xa0\xa0\xa0\xa0INTERSECTION("WinnerDealers";"100 best Dealers";"WinnerDealers")\n\xa0\xa0\xa0\xa0USE SET("WinnerDealers")\xa0// \u56FD\u3054\u3068\u306E\u4E0A\u4F4D\u6210\u7E3E\u8005\n\xa0\xa0// \u964D\u9806\u3067\u4E26\u3073\u66FF\u3048\n\xa0\xa0\xa0\xa0ORDER BY([Dealers];[Dealers]Sales amount;<)\n\xa0\xa0\xa0\xa0REDUCE SELECTION([Dealers];3)\xa0// 3\u4F4D\u307E\u3067\u3092\u9078\u629E\n\xa0\xa0\xa0\xa0CREATE SET([Dealers];"WinnerDealers")\xa0// \u305D\u306E\u56FD\u306E\u52DD\u8005\n\xa0\xa0// \u5168\u4E16\u754C\u306E\u52DD\u8005\u30EA\u30B9\u30C8\u306B\u52A0\u3048\u308B\n\xa0\xa0\xa0\xa0UNION("WinnerDealers";"TheWinners";"TheWinners")\n\xa0End for\n\xa0CLEAR SET("100 best Dealers")\xa0// \u3053\u306E\u30BB\u30C3\u30C8\u306F\u3082\u3046\u5FC5\u8981\u306A\u3044\n\xa0CLEAR SET("WinnerDealers")\xa0// \u3053\u306E\u30BB\u30C3\u30C8\u3082\u5FC5\u8981\u306A\u3044\n\xa0USE SET("The Winners")\xa0// \u3053\u308C\u304C\u52DD\u8005\n\xa0CLEAR SET("The Winners")\xa0// \u3053\u306E\u30BB\u30C3\u30C8\u306F\u3082\u3046\u5FC5\u8981\u306A\u3044\n\xa0OUTPUT FORM([Dealers];"Prize letter")\xa0// \u5370\u5237\u30D5\u30A9\u30FC\u30E0\u3092\u9078\u629E\n\xa0PRINT SELECTION([Dealers])\xa0// \u624B\u7D19\u3092\u5370\u5237\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/order-by",children:"ORDER BY"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/query",children:"QUERY"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/20-R7/commands/scan-index",children:"SCAN INDEX"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"\u30BB\u30C3\u30C8"})]}),"\n",(0,l.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"351"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,l.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let l={},t=r.createContext(l);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);