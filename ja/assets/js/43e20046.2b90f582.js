"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43815"],{828958:function(e,n,r){r.r(n),r.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-value","title":"VP SET VALUE","description":"VP SET VALUE ( rangeObj Object )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-value","permalink":"/docs/ja/ViewPro/commands/vp-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-value.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-value","title":"VP SET VALUE"},"sidebar":"docs","previous":{"title":"VP SET TIME VALUE","permalink":"/docs/ja/ViewPro/commands/vp-set-time-value"},"next":{"title":"VP SET VALUES","permalink":"/docs/ja/ViewPro/commands/vp-set-values"}}'),t=r("785893"),l=r("250065");let d={id:"vp-set-value",title:"VP SET VALUE"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET VALUE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"valueObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valueObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\u30BB\u30EB\u306E\u5024\u3068\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u30AA\u30D7\u30B7\u30E7\u30F3"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VP SET VALUE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30EB\u30EC\u30F3\u30B8\u306B\u5024\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u6C4E\u7528\u7684\u306A\u30B3\u30FC\u30C9\u3067 ",(0,t.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u306B\u69D8\u3005\u306A\u578B\u306E\u5024\u3068\u305D\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u306B\u5BFE\u3057\u3066 ",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-text-value",children:(0,t.jsx)(n.code,{children:"VP SET TEXT VALUE"})})," \u3084 ",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-num-value",children:(0,t.jsx)(n.code,{children:"VP SET NUM VALUE"})})," \u306A\u3069\u306E\u4ED6\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u8A2D\u5B9A\u3059\u308B\u5024\u306E\u578B\u304C\u9650\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u5024\u3092\u5272\u308A\u5F53\u3066\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8 (\u305F\u3068\u3048\u3070 ",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})})," \u3042\u308B\u3044\u306F ",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-column",children:(0,t.jsx)(n.code,{children:"VP Column"})})," \u3067\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30F3\u30B8) \u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,t.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u8907\u6570\u306E\u30BB\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u5024\u306F\u305D\u308C\u305E\u308C\u306E\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u7E70\u308A\u8FD4\u3057\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"valueObj"})," \u5F15\u6570\u306F\u3001",(0,t.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u306B\u5BFE\u3057\u3066\u5272\u308A\u5F53\u3066\u305F\u3044\u5024\u3068",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})," \u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u683C\u7D0D\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002 \u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u306B\u5BFE\u3057\u3066\u5272\u308A\u5F53\u3066\u308B\u5024 (\u6642\u9593\u578B\u3092\u9664\u304F)\u3002 \u30BB\u30EB\u306E\u4E2D\u8EAB\u3092\u6D88\u53BB\u3059\u308B\u305F\u3081\u306B\u306F Null \u3092\u6E21\u3057\u307E\u3059\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"rangeObj"})," \u306E\u30EC\u30F3\u30B8\u306B\u5BFE\u3057\u3066\u5272\u308A\u5F53\u3066\u308B\u6642\u9593 (\u79D2\u5358\u4F4D)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"format"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsxs)(n.td,{children:["\u5024\u3084\u65E5\u6642\u306B\u5BFE\u3059\u308B\u30D1\u30BF\u30FC\u30F3 \u5024\u3084\u65E5\u6642\u306B\u5BFE\u3059\u308B\u30D1\u30BF\u30FC\u30F3 \u30D1\u30BF\u30FC\u30F3\u304A\u3088\u3073\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u6587\u5B57\u306B\u95A2\u3057\u3066\u306E\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30BB\u30EB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// \u30BB\u30EB\u306E\u5024\u3092 False \u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))\n \n// \u30BB\u30EB\u306E\u5024\u3092 2 \u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))\n \n// \u30BB\u30EB\u306E\u5024\u3092 $125,571.35 \u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))\n \n// \u30BB\u30EB\u306E\u5024\u3092 Hello World!\nVP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))\n \n// \u30BB\u30EB\u306E\u5024\u3092\u73FE\u5728\u306E\u65E5\u4ED8\u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))\n \n// \u30BB\u30EB\u306E\u5024\u3092\u73FE\u5728\u306E\u6642\u9593\u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))\n \n// \u30BB\u30EB\u306E\u5024\u3092\u7279\u5B9A\u306E\u65E5\u4ED8\u3068\u6642\u9593\u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))\n \n// \u30BB\u30EB\u306E\u4E2D\u8EAB\u3092\u6D88\u53BB\u3057\u307E\u3059\nVP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30BB\u30EB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-get-value",children:"VP Get values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-value",children:"VP SET VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-boolean-value",children:"VP SET BOOLEAN VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-field",children:"VP SET FIELD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-num-value",children:"VP SET NUM VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-text-value",children:"VP SET TEXT VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"})]})]})}function j(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let t={},l=s.createContext(t);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);