"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27400"],{202195:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-time-value","title":"VP SET TIME VALUE","description":"VP SET TIME VALUE ( rangeObj Text { ; formatPattern : Text }  )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-time-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-time-value","permalink":"/docs/ja/ViewPro/commands/vp-set-time-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-time-value.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-time-value","title":"VP SET TIME VALUE"},"sidebar":"docs","previous":{"title":"VP SET TEXT VALUE","permalink":"/docs/ja/ViewPro/commands/vp-set-text-value"},"next":{"title":"VP SET VALUE","permalink":"/docs/ja/ViewPro/commands/vp-set-value"}}'),s=t("785893"),i=t("250065");let d={id:"vp-set-time-value",title:"VP SET TIME VALUE"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET TIME VALUE"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(n.em,{children:"timeValue"})," : Text { ; ",(0,s.jsx)(n.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30EC\u30F3\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeValue"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u8A2D\u5B9A\u3059\u308B\u6642\u9593\u5024"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formatPattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u5024\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP SET TIME VALUE"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u6307\u5B9A\u3055\u308C\u305F\u30BB\u30EB\u30EC\u30F3\u30B8\u306B\u6642\u9593\u5024\u3092\u5272\u308A\u5F53\u3066\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"rangeObj"})," \u306B\u306F\u3001\u5024\u3092\u5272\u308A\u5F53\u3066\u305F\u3044\u30BB\u30EB\u306E\u30EC\u30F3\u30B8 (\u305F\u3068\u3048\u3070 ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-cell",children:(0,s.jsx)(n.code,{children:"VP Cell"})})," \u3042\u308B\u3044\u306F ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-column",children:(0,s.jsx)(n.code,{children:"VP Column"})})," \u3067\u4F5C\u6210\u3055\u308C\u305F\u30EC\u30F3\u30B8) \u3092\u6E21\u3057\u307E\u3059\u3002 ",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306B\u8907\u6570\u306E\u30BB\u30EB\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u3001\u6307\u5B9A\u3055\u308C\u305F\u5024\u306F\u305D\u308C\u305E\u308C\u306E\u30BB\u30EB\u306B\u5BFE\u3057\u3066\u7E70\u308A\u8FD4\u3057\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"timeValue"})," \u5F15\u6570\u306B\u306F\u3001",(0,s.jsx)(n.em,{children:"rangeObj"})," \u5F15\u6570\u306E\u30EC\u30F3\u30B8\u306B\u5272\u308A\u5F53\u3066\u308B\u6642\u9593 (\u79D2\u5358\u4F4D) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,s.jsx)(n.em,{children:"formatPattern"})," \u5F15\u6570\u306F\u3001",(0,s.jsx)(n.em,{children:"timeValue"})," \u306B\u5BFE\u3059\u308B ",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30D1\u30BF\u30FC\u30F3"})," \u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// \u30BB\u30EB\u306E\u5024\u3092\u73FE\u5728\u306E\u6642\u9593\u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)\n\n// \u30BB\u30EB\u306E\u5024\u3092\u3001\u6307\u5B9A\u3055\u308C\u305F\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u7279\u5B9A\u306E\u6642\u9593\u306B\u8A2D\u5B9A\u3057\u307E\u3059\nVP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/configuring#%E3%82%BB%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88",children:"\u30BB\u30EB\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-date-time-value",children:"VP SET DATE TIME VALUE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);