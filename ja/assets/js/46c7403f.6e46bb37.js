"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87691"],{85198:function(e,r,n){n.r(r),n.d(r,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-resource-properties","title":"Get resource properties","description":"Get resource properties ( resType ; resID {; resFile} ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-resource-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource-properties","permalink":"/docs/ja/20-R7/commands/get-resource-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-resource-properties","title":"Get resource properties","slug":"/commands/get-resource-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get resource name","permalink":"/docs/ja/20-R7/commands/get-resource-name"},"next":{"title":"Get string resource","permalink":"/docs/ja/20-R7/commands/get-string-resource"}}'),t=n("785893"),d=n("250065");let i={id:"get-resource-properties",title:"Get resource properties",slug:"/commands/get-resource-properties",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let r={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get resource properties"})," ( ",(0,t.jsx)(r.em,{children:"resType"})," ; ",(0,t.jsx)(r.em,{children:"resID"})," {; ",(0,t.jsx)(r.em,{children:"resFile"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5F15\u6570"}),(0,t.jsx)(r.th,{children:"\u578B"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resType"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"4\u6587\u5B57\u306E\u30EA\u30BD\u30FC\u30B9\u30BF\u30A4\u30D7"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resID"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"\u30EA\u30BD\u30FC\u30B9ID\u756A\u53F7"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resFile"}),(0,t.jsx)(r.td,{children:"Time"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001\u958B\u304B\u308C\u3066\u3044\u308B\u5168\u3066\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u623B\u308A\u5024"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"\u30EA\u30BD\u30FC\u30B9\u306E\u5C5E\u6027"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get resource properties"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(r.em,{children:"resType"}),"\u306B\u6E21\u3055\u308C\u308B\u30BF\u30A4\u30D7\u304B\u3064",(0,t.jsx)(r.em,{children:"resID"}),"\u306B\u6E21\u3055\u308C\u308BID\u3092\u6301\u3064\u30EA\u30BD\u30FC\u30B9\u306E\u5C5E\u6027\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"resFile"}),"\u306B\u6709\u52B9\u306A\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3059\u3068\u3001\u30EA\u30BD\u30FC\u30B9\u306F\u305D\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u306E\u307F\u691C\u7D22\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(r.em,{children:"resFile"}),"\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u3001\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u691C\u7D22\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u30EA\u30BD\u30FC\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001",(0,t.jsx)(r.strong,{children:"Get resource properties"}),"\u306F0\u3092\u8FD4\u3057\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Get resource properties"}),"\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u6570\u5024\u306F\u3001\u30D3\u30C3\u30C8\u304C\u7279\u5225\u306E\u610F\u5473\u3092\u6301\u3063\u3066\u3044\u308B\u30D3\u30C3\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u5024\u3068\u3057\u3066\u7406\u89E3\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(r.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/ja/20-R7/commands/get-resource-name",title:"Get resource name",children:"Get resource name"}),"\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,t.jsx)(r.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(r.p,{children:"\u30EA\u30BD\u30FC\u30B9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408OK\u5909\u6570\u306F0\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30701\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(r.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(r.td,{children:"515"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(r.td,{children:"\u2717"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(r.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var s=n(667294);let t={},d=s.createContext(t);function i(e){let r=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);