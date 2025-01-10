"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92696"],{854773:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"Events/onBeforeDataEntry","title":"On Before Data Entry","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                             | \u5B9A\u7FA9                          |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Events/onBeforeDataEntry.md","sourceDirName":"Events","slug":"/Events/onBeforeDataEntry","permalink":"/docs/ja/20-R6/Events/onBeforeDataEntry","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeDataEntry.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onBeforeDataEntry","title":"On Before Data Entry"},"sidebar":"docs","previous":{"title":"On Alternative Click","permalink":"/docs/ja/20-R6/Events/onAlternativeClick"},"next":{"title":"On Before Keystroke","permalink":"/docs/ja/20-R6/Events/onBeforeKeystroke"}}'),s=n("785893"),o=n("250065");let i={id:"onBeforeDataEntry",title:"On Before Data Entry"},a=void 0,l={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u30B3\u30FC\u30C9"}),(0,s.jsx)(t.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,s.jsx)(t.th,{children:"\u5B9A\u7FA9"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"41"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/listboxOverview",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"})," - ",(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/listboxOverview#%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%88%97",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217"})]}),(0,s.jsx)(t.td,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30BB\u30EB\u304C\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u5909\u66F4\u3055\u308C\u3088\u3046\u3068\u3057\u3066\u3044\u308B"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsx)(t.p,{children:"\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u4E2D\u306E\u30BB\u30EB\u304C\u7DE8\u96C6\u3055\u308C\u308B\u76F4\u524D\u306B\u751F\u6210\u3055\u308C\u307E\u3059 (\u5165\u529B\u30AB\u30FC\u30BD\u30EB\u304C\u8868\u793A\u3055\u308C\u308B\u524D)\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u4F7F\u7528\u3057\u3066\u3001\u305F\u3068\u3048\u3070\u8868\u793A\u4E2D\u3068\u7DE8\u96C6\u4E2D\u3067\u7570\u306A\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u30AB\u30FC\u30BD\u30EB\u304C\u30BB\u30EB\u306B\u5165\u308B\u3068\u3001\u305D\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u307E\u305F\u306F\u5217\u306E\u30E1\u30BD\u30C3\u30C9\u3067 ",(0,s.jsx)(t.code,{children:"On Before Data Entry"})," \u30A4\u30D9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001$0 \u306B -1 \u3092\u8A2D\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u30BB\u30EB\u306F\u5165\u529B\u4E0D\u53EF\u3068\u3057\u3066\u6271\u308F\u308C\u307E\u3059\u3002 ",(0,s.jsx)(t.strong,{children:"Tab"})," \u3084 ",(0,s.jsx)(t.strong,{children:"Shift+Tab"})," \u304C\u62BC\u3055\u308C\u305F\u5F8C\u306B\u30A4\u30D9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u30D5\u30A9\u30FC\u30AB\u30B9\u306F\u305D\u308C\u305E\u308C\u6B21\u3042\u308B\u3044\u306F\u524D\u306E\u30BB\u30EB\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(t.li,{children:"$0 \u304C -1 \u3067\u306A\u3051\u308C\u3070 (\u30C7\u30D5\u30A9\u30EB\u30C8\u306F 0)\u3001\u5217\u306F\u5165\u529B\u53EF\u3067\u3042\u308A\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u79FB\u884C\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ja/20-R6/FormObjects/listboxOverview#%E5%85%A5%E5%8A%9B%E3%81%AE%E7%AE%A1%E7%90%86",children:"\u5165\u529B\u306E\u7BA1\u7406"})," \u306E\u7AE0\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);