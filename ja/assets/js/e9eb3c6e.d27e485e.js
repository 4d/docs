"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35434"],{304523:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"Events/onAfterSort","title":"On After Sort","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                                                             | \u5B9A\u7FA9                      |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/Events/onAfterSort.md","sourceDirName":"Events","slug":"/Events/onAfterSort","permalink":"/docs/ja/20-R7/Events/onAfterSort","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterSort.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onAfterSort","title":"On After Sort"},"sidebar":"docs","previous":{"title":"On After Keystroke","permalink":"/docs/ja/20-R7/Events/onAfterKeystroke"},"next":{"title":"On Alternative Click","permalink":"/docs/ja/20-R7/Events/onAlternativeClick"}}'),o=n("785893"),s=n("250065");let i={id:"onAfterSort",title:"On After Sort"},c=void 0,d={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"\u30B3\u30FC\u30C9"}),(0,o.jsx)(t.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,o.jsx)(t.th,{children:"\u5B9A\u7FA9"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"30"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/ja/20-R7/FormObjects/listboxOverview",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"})," - ",(0,o.jsx)(t.a,{href:"/docs/ja/20-R7/FormObjects/listboxOverview#%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E5%88%97",children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217"})]}),(0,o.jsx)(t.td,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u5217\u5185\u3067\u6A19\u6E96\u306E\u30BD\u30FC\u30C8\u304C\u304A\u3053\u306A\u308F\u308C\u305F"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,o.jsxs)(t.p,{children:["\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u6A19\u6E96\u306E\u4E26\u3079\u66FF\u3048\u304C\u304A\u3053\u306A\u308F\u308C\u305F\u76F4\u5F8C\u306B\u751F\u6210\u3055\u308C\u307E\u3059 (\u305F\u3060\u3057 ",(0,o.jsx)(t.a,{href:"/docs/ja/20-R7/Events/onHeaderClick",children:(0,o.jsx)(t.code,{children:"On Header Click"})})," \u30A4\u30D9\u30F3\u30C8\u3067 $0 \u306B -1 \u304C\u8FD4\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u751F\u6210\u3055\u308C\u307E\u305B\u3093)\u3002 \u3053\u306E\u30E1\u30AB\u30CB\u30BA\u30E0\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u304A\u3053\u306A\u308F\u308C\u305F\u76F4\u8FD1\u306E\u4E26\u3079\u66FF\u3048\u306E\u65B9\u5411\u3092\u4FDD\u5B58\u3059\u308B\u306E\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30A4\u30D9\u30F3\u30C8\u5185\u3067 ",(0,o.jsx)(t.code,{children:"Self"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4E26\u3079\u66FF\u3048\u3089\u308C\u305F\u30AB\u30E9\u30E0\u30D8\u30C3\u30C0\u30FC\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(667294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);