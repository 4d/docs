"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9887"],{535117:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/object-set-scrollbar","title":"OBJECT SET SCROLLBAR","description":"OBJECT SET SCROLLBAR ( { ;} object ; horizontal ; vertical* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-scrollbar","permalink":"/docs/ja/20-R8/commands/object-set-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-scrollbar.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-scrollbar","title":"OBJECT SET SCROLLBAR","slug":"/commands/object-set-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET SCROLL POSITION","permalink":"/docs/ja/20-R8/commands/object-set-scroll-position"},"next":{"title":"OBJECT SET SHORTCUT","permalink":"/docs/ja/20-R8/commands/object-set-shortcut"}}'),t=s("785893"),d=s("250065");let c={id:"object-set-scrollbar",title:"OBJECT SET SCROLLBAR",slug:"/commands/object-set-scrollbar",displayed_sidebar:"docs"},l=void 0,i={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"OBJECT SET SCROLLBAR"})," ( {* ;} ",(0,t.jsx)(e.em,{children:"object"})," ; ",(0,t.jsx)(e.em,{children:"horizontal"})," ; ",(0,t.jsx)(e.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u6642, Object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, Object\u306F\u5909\u6570"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"object"}),(0,t.jsx)(e.td,{children:"any"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642), \u307E\u305F\u306F \u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"horizontal"}),(0,t.jsx)(e.td,{children:"Boolean, Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"True = \u8868\u793A, False = \u975E\u8868\u793A"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"vertical"}),(0,t.jsx)(e.td,{children:"Boolean, Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"True = \u8868\u793A, False = \u975E\u8868\u793A"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["OBJECT SET SCROLLBAR\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570",(0,t.jsx)(e.em,{children:"object"})," \u3068 ",(0,t.jsx)(e.em,{children:"*"})," \u3067\u6307\u5B9A\u3057\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6C34\u5E73/\u5782\u76F4\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u306E\u8868\u793A/\u975E\u8868\u793A\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,t.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,t.jsx)(e.em,{children:"object"}),"\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3067\u3059 (\u6587\u5B57\u5217) \u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,t.jsx)(e.em,{children:"object"}),"\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F ",(0,t.jsx)(e.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"horizontal"})," \u3068 ",(0,t.jsx)(e.em,{children:"vertical"})," \u5F15\u6570\u306B\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u3079\u304D\u304B\u3069\u3046\u304B\u3092\u6307\u5B9A\u3059\u308B\u5024\u3092\u6E21\u3057\u307E\u3059\u3002\u6E21\u305B\u308B\u5024\u306F\u30D6\u30FC\u30EB\u5024(True=\u8868\u793A\u3001False=\u975E\u8868\u793A)\u3001\u307E\u305F\u306F\u6570\u5024(0=\u975E\u8868\u793A\u30011=\u8868\u793A\u30012=\u81EA\u52D5\u30E2\u30FC\u30C9)\u3067\u3059\u3002\u6570\u5024\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u5FC5\u8981\u306A\u3068\u304D\u306E\u307F\u8868\u793A\u3055\u308C\u308B\u81EA\u52D5\u30E2\u30FC\u30C9\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u8868\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u53D7\u3051\u4ED8\u3051\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E ",(0,t.jsx)(e.em,{children:"horizontal"})," \u3068 ",(0,t.jsx)(e.em,{children:"vertical"})," \u5F15\u6570\u306B\u5BFE\u3057\u3066\u6E21\u3059\u3053\u3068\u306E\u3067\u304D\u308B\u5024\u306E\u4E00\u89A7\u3067\u3059(\u81EA\u52D5\u30E2\u30FC\u30C9\u306F\u3001\u4E00\u90E8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u4F7F\u7528\u3067\u304D\u306A\u3044\u3082\u306E\u3082\u3042\u308A\u307E\u3059):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u975E\u8868\u793A"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u8868\u793A"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u81EA\u52D5\u30E2\u30FC\u30C9"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30C6\u30AD\u30B9\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"}),(0,t.jsx)(e.td,{children:"False \u307E\u305F\u306F 0"}),(0,t.jsx)(e.td,{children:"True \u307E\u305F\u306F 1"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.em,{children:"\u4F7F\u7528\u4E0D\u53EF"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30D4\u30AF\u30C1\u30E3\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"}),(0,t.jsx)(e.td,{children:"False \u307E\u305F\u306F 0"}),(0,t.jsx)(e.td,{children:"True \u307E\u305F\u306F 1"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"}),(0,t.jsx)(e.td,{children:"False \u307E\u305F\u306F 0"}),(0,t.jsx)(e.td,{children:"True \u307E\u305F\u306F 1"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u968E\u5C64\u30EA\u30B9\u30C8"}),(0,t.jsx)(e.td,{children:"False \u307E\u305F\u306F 0"}),(0,t.jsx)(e.td,{children:"True \u307E\u305F\u306F 1"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0"}),(0,t.jsx)(e.td,{children:"False \u307E\u305F\u306F 0"}),(0,t.jsx)(e.td,{children:"True \u307E\u305F\u306F 1"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.em,{children:"\u4F7F\u7528\u4E0D\u53EF"})})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u306F\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u81EA\u52D5\u30E2\u30FC\u30C9\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,t.jsx)(e.em,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC"})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/object-get-scrollbar",children:"OBJECT GET SCROLLBAR"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/20-R8/commands/object-set-visible",children:"OBJECT SET VISIBLE"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"843"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(j,{...n})}):j(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return c}});var r=s(667294);let t={},d=r.createContext(t);function c(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);