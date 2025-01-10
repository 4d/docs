"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86914"],{489388:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"Events/onVpReady","title":"On VP Ready","description":"| \u30B3\u30FC\u30C9 | \u547C\u3073\u51FA\u3057\u5143                                                  | \u5B9A\u7FA9                       |","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Events/onVpReady.md","sourceDirName":"Events","slug":"/Events/onVpReady","permalink":"/docs/ja/20-R6/Events/onVpReady","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpReady.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onVpReady","title":"On VP Ready"},"sidebar":"docs","previous":{"title":"On VP Range Changed","permalink":"/docs/ja/20-R6/Events/onVpRangeChanged"},"next":{"title":"On Window Opening Denied","permalink":"/docs/ja/20-R6/Events/onWindowOpeningDenied"}}'),d=t("785893"),r=t("250065");let s={id:"onVpReady",title:"On VP Ready"},i=void 0,a={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u30B3\u30FC\u30C9"}),(0,d.jsx)(n.th,{children:"\u547C\u3073\u51FA\u3057\u5143"}),(0,d.jsx)(n.th,{children:"\u5B9A\u7FA9"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"9"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R6/FormObjects/viewProAreaOverview",children:"4D View Pro \u30A8\u30EA\u30A2"})}),(0,d.jsx)(n.td,{children:"4D View Pro \u30A8\u30EA\u30A2\u306E\u30ED\u30FC\u30C9\u304C\u5B8C\u4E86\u3057\u305F"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u30014D View Pro \u30A8\u30EA\u30A2\u306E\u30ED\u30FC\u30C9\u304C\u7D42\u308F\u3063\u305F\u6642\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30A8\u30EA\u30A2\u306E\u521D\u671F\u5316\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u969B\u306B\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 4D View Pro \u30A8\u30EA\u30A2\u3092\u521D\u671F\u5316\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9 (\u5024\u306E\u8AAD\u307F\u8FBC\u307F\u306A\u3069) \u306F\u5F53\u8A72\u30A8\u30EA\u30A2\u306E ",(0,d.jsx)(n.code,{children:"On VP Ready"})," \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u5185\u306B\u66F8\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306F\u3001\u30A8\u30EA\u30A2\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u5B8C\u4E86\u3057\u305F\u3068\u304D\u306B\u4E00\u56DE\u751F\u6210\u3055\u308C\u307E\u3059\u3002 \u540C\u30A4\u30D9\u30F3\u30C8\u306E\u5229\u7528\u306B\u3088\u3063\u3066\u3001\u6709\u52B9\u306A\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5185\u3067\u30B3\u30FC\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u5B9F\u306B\u3067\u304D\u307E\u3059\u3002 ",(0,d.jsx)(n.code,{children:"On VP Ready"})," \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u304C\u751F\u6210\u3055\u308C\u308B\u524D\u306B 4D View Pro \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3057\u307E\u3046\u3068\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["4D View Pro \u30A8\u30EA\u30A2\u306F\u975E\u540C\u671F\u7684\u306B 4D\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u6A19\u6E96\u306E ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R6/Events/onLoad",children:"On load"})," \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306F 4D View Pro \u30A8\u30EA\u30A2\u306E\u8AAD\u307F\u8FBC\u307F\u5B8C\u4E86\u3092\u4FDD\u8A3C\u305B\u305A\u30014D View Pro \u306E\u521D\u671F\u5316\u30B3\u30FC\u30C9\u306B\u5229\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 ",(0,d.jsx)(n.code,{children:"On VP Ready"})," \u306F\u5E38\u306B ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R6/Events/onLoad",children:"On load"})," \u306E\u5F8C\u306B\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var o=t(667294);let d={},r=o.createContext(d);function s(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);