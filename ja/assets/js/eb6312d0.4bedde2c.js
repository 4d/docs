"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61743"],{221193:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-date-time-value","title":"VP SET DATE TIME VALUE","description":"VP SET DATE TIME VALUE ( rangeObj Date ; timeValue Text } )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-date-time-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-date-time-value","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-date-time-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-date-time-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-date-time-value","title":"VP SET DATE TIME VALUE"},"sidebar":"docs","previous":{"title":"VP SET DATA CONTEXT","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-data-context"},"next":{"title":"VP SET DATE VALUE","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-set-date-value"}}'),s=t("785893"),d=t("250065");let i={id:"vp-set-date-time-value",title:"VP SET DATE TIME VALUE"},l=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET DATE TIME VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"dateValue"})," : Date ; ",(0,s.jsx)(n.em,{children:"timeValue"})," : Time {; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dateValue"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u8A2D\u5B9A\u3059\u308B\u65E5\u4ED8\u5024"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeValue"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u8A2D\u5B9A\u3059\u308B\u6642\u9593\u5024"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u5024\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP SET DATE TIME VALUE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30EB\u30EC\u30F3\u30B8\u306B\u65E5\u4ED8\u30FB\u6642\u9593\u5024\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u5024\u3092\u5272\u308A\u5F53\u3066\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8 (\u305F\u3068\u3048\u3070 ",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," \u3042\u308B\u3044\u306F ",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})})," \u3067\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30F3\u30B8) \u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u8907\u6570\u306E\u30BB\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u5024\u306F\u305D\u308C\u305E\u308C\u306E\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u7E70\u308A\u8FD4\u3057\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"dateValue"})," \u5F15\u6570\u306B\u3001",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306E\u30EC\u30F3\u30B8\u306B\u5272\u308A\u5F53\u3066\u305F\u3044\u65E5\u4ED8\u5024\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"timeValue"})," \u5F15\u6570\u306B\u3001",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306E\u30EC\u30F3\u30B8\u306B\u5272\u308A\u5F53\u3066\u305F\u3044\u6642\u9593\u5024 (\u79D2\u5358\u4F4D) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"formatPattern"})," \u5F15\u6570\u306F\u3001",(0,s.jsx)(n.em,{children:"dateValue"})," \u304A\u3088\u3073 ",(0,s.jsx)(n.em,{children:"timeValue"})," \u5F15\u6570\u306B\u5BFE\u3059\u308B\u30D1\u30BF\u30FC\u30F3\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u30D1\u30BF\u30FC\u30F3\u304A\u3088\u3073\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u6587\u5B57\u306B\u95A2\u3057\u3066\u306E\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/configuring#%E6%97%A5%E4%BB%98%E3%81%A8%E6%99%82%E9%96%93%E3%81%AE%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u65E5\u4ED8\u3068\u6642\u9593\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// \u30BB\u30EB\u306E\u5024\u3092\u30AB\u30EC\u30F3\u30C8\u306E\u65E5\u4ED8\u3068\u6642\u9593\u306B\u8A2D\u5B9A\n\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)\n\n// \u30BB\u30EB\u306E\u5024\u3092 12\u670818\u65E5\u306B\u8A2D\u5B9A\nVP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"4D View Pro \u30BB\u30EB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-date-value",children:"VP SET DATE VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-time-value",children:"VP SET TIME VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);