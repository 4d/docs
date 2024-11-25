"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29080"],{399230:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/wa-get-url-filters","title":"WA GET URL FILTERS","description":"WA GET URL FILTERS ( { ;} object ; filtersArr ; allowDenyArr* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/wa-get-url-filters.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-url-filters","permalink":"/docs/ja/commands/wa-get-url-filters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-url-filters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-get-url-filters","title":"WA GET URL FILTERS","slug":"/commands/wa-get-url-filters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA GET PREFERENCE","permalink":"/docs/ja/commands/wa-get-preference"},"next":{"title":"WA GET URL HISTORY","permalink":"/docs/ja/commands/wa-get-url-history"}}'),s=t("785893"),l=t("250065");let d={id:"wa-get-url-filters",title:"WA GET URL FILTERS",slug:"/commands/wa-get-url-filters",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA GET URL FILTERS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"filtersArr"})," ; ",(0,s.jsx)(n.em,{children:"allowDenyArr"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u6F14\u7B97\u5B50"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u6307\u5B9A\u6642, object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, object\u306F\u5909\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"filtersArr"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30D5\u30A3\u30EB\u30BF\u914D\u5217"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"allowDenyArr"}),(0,s.jsx)(n.td,{children:"Boolean array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u8A31\u53EF-\u62D2\u5426\u914D\u5217"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30D7\u30EA\u30A8\u30F3\u30D7\u30C6\u30A3\u30D6\u306A\u30B3\u30FC\u30C9\u306B\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["WA GET URL FILTERS \u30B3\u30DE\u30F3\u30C9\u306F",(0,s.jsx)(n.em,{children:"filtersArr"})," \u3068 ",(0,s.jsx)(n.em,{children:"allowDenyArr"}),"\u914D\u5217\u306B\u3001",(0,s.jsx)(n.em,{children:"*"})," \u3068 ",(0,s.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305FWeb\u30A8\u30EA\u30A2\u3067\u6709\u52B9\u306A\u30D5\u30A3\u30EB\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002\u30D5\u30A3\u30EB\u30BF\u304C\u6709\u52B9\u3067\u306A\u3044\u5834\u5408\u3001\u7A7A\u306E\u914D\u5217\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30D5\u30A3\u30EB\u30BF\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/wa-set-url-filters",title:"WA SET URL FILTERS",children:"WA SET URL FILTERS"})," \u30B3\u30DE\u30F3\u30C9\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u914D\u5217\u304C\u6700\u521D\u671F\u5316\u3055\u308C\u3066\u3082\u3001WA GET URL FILTERS \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308C\u3070\u73FE\u5728\u306E\u8A2D\u5B9A\u5024\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/wa-get-external-links-filters",children:"WA GET EXTERNAL LINKS FILTERS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/wa-set-url-filters",children:"WA SET URL FILTERS"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},l=r.createContext(s);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);