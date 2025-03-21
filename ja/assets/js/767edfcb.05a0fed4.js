"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22496"],{631618:function(n,e,t){t.r(e),t.d(e,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"Concepts/boolean","title":"Boolean","description":"\u30D6\u30FC\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u5F0F\u306F\u3001true\uFF08\u771F\uFF09\u307E\u305F\u306Ffalse\uFF08\u507D\uFF09\u306E\u3044\u305A\u308C\u304B\u306B\u306A\u308A\u307E\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/Concepts/dt_boolean.md","sourceDirName":"Concepts","slug":"/Concepts/boolean","permalink":"/docs/ja/Concepts/boolean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"boolean","title":"Boolean"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/ja/Concepts/blob"},"next":{"title":"Collection","permalink":"/docs/ja/Concepts/collection"}}'),r=t("785893"),d=t("250065");let l={id:"boolean",title:"Boolean"},c=void 0,i={},o=[{value:"\u30D6\u30FC\u30EB\u95A2\u6570",id:"\u30D6\u30FC\u30EB\u95A2\u6570",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:3},{value:"\u8AD6\u7406\u6F14\u7B97\u5B50",id:"\u8AD6\u7406\u6F14\u7B97\u5B50",level:2}];function h(n){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u30D6\u30FC\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u5F0F\u306F\u3001true\uFF08\u771F\uFF09\u307E\u305F\u306Ffalse\uFF08\u507D\uFF09\u306E\u3044\u305A\u308C\u304B\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u30D6\u30FC\u30EB\u95A2\u6570",children:"\u30D6\u30FC\u30EB\u95A2\u6570"}),"\n",(0,r.jsxs)(e.p,{children:["4D\u306B\u306F\u30D6\u30FC\u30EB\u6F14\u7B97\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u306E\u3067\u304D\u308B\u3001\u30D6\u30FC\u30EB\u95A2\u6570\u304C\u3042\u308A\u307E\u3059: ",(0,r.jsx)(e.code,{children:"True"}),", ",(0,r.jsx)(e.code,{children:"False"}),", ",(0,r.jsx)(e.code,{children:"Not"}),"\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002 \u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u3001\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u30DC\u30BF\u30F3\u306E\u5024\u306B\u57FA\u3065\u3044\u3066\u3001\u30D6\u30FC\u30EB\u5909\u6570\u306B\u5024\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 myButton \u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3089 myBoolean \u306B true \u3092\u3001\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070 false \u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 \u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u308B\u3068\u30DC\u30BF\u30F3\u5909\u6570\u306E\u5024\u306F1\u306B\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" If(myButton=1) // \u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3089\n    myBoolean:=True // myBoolean \u3092 true \u306B\u8A2D\u5B9A\n Else // \u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\n    myBoolean:=False // myBoolean \u3092 false \u306B\u8A2D\u5B9A\n End if\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4E0A\u306E\u30B3\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u4E00\u884C\u3067\u66F8\u304F\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u8AD6\u7406\u6F14\u7B97\u5B50",children:"\u8AD6\u7406\u6F14\u7B97\u5B50"}),"\n",(0,r.jsx)(e.p,{children:"4D\u306F\u3001\u30D6\u30FC\u30EB\u5F0F\u306B\u5BFE\u3057\u3066\u6A5F\u80FD\u3059\u308B\u6B21\u306E\u8AD6\u7406\u6F14\u7B97\u5B50\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059: \u8AD6\u7406\u7A4D (AND) \u3068\u8AD6\u7406\u548C (OR)\u3002 \u8AD6\u7406\u7A4D (AND) \u306F\u4E21\u65B9\u306E\u5F0F\u304C true \u3067\u3042\u308B\u5834\u5408\u306B true \u3092\u8FD4\u3057\u307E\u3059\u3002 \u8AD6\u7406\u548C (OR) \u306F\u5C11\u306A\u304F\u3068\u3082\u4E00\u65B9\u306E\u5F0F\u304C true \u306E\u6642\u306B true \u3092\u8FD4\u3057\u307E\u3059\u3002 \u6B21\u306E\u8868\u306B\u3001\u8AD6\u7406\u6F14\u7B97\u5B50\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6F14\u7B97"}),(0,r.jsx)(e.th,{children:"\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9"}),(0,r.jsx)(e.th,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.th,{children:"\u5F0F"}),(0,r.jsx)(e.th,{children:"\u5024"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AND"}),(0,r.jsx)(e.td,{children:"Boolean & Boolean"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:'("A" = "A") & (15 # 3)'}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") & (15 # 3)'}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") & (15 = 3)'}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"OR"}),(0,r.jsx)(e.td,{children:"Boolean  | Boolean"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:'("A" = "A") | (15 # 3)'}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") |  (15 # 3)'}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:'("A" = "B") |  (15 = 3)'}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u8AD6\u7406\u6F14\u7B97\u5B50 (AND) \u306E\u771F\u507D\u8868\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Expr1"}),(0,r.jsx)(e.th,{children:"Expr2"}),(0,r.jsx)(e.th,{children:"Expr1 & Expr2"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"false"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u8AD6\u7406\u6F14\u7B97\u5B50 (OR) \u306E\u771F\u507D\u8868\u3092\u793A\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Expr1"}),(0,r.jsx)(e.th,{children:"Expr2"}),(0,r.jsx)(e.th,{children:"Expr1 | Expr2"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"true"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"}),(0,r.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Tip:"})," \u5F0F1\u3068\u5F0F2\u306E\u6392\u4ED6\u7684\u7D50\u5408\u5B50\u6F14\u7B97\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3001\u6B21\u306E\u8A55\u4FA1\u5F0F\u3092\u4F7F\u7528\u3057\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["4D\u30E9\u30F3\u30B2\u30FC\u30B8\u306F\u30D6\u30FC\u30EB\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/operators#%E7%9F%AD%E7%B5%A1%E6%BC%94%E7%AE%97%E5%AD%90",children:"\u77ED\u7D61\u6F14\u7B97\u5B50"})," (",(0,r.jsx)(e.code,{children:"&&"})," \u3068 ",(0,r.jsx)(e.code,{children:"||"}),") \u304A\u3088\u3073 ",(0,r.jsx)(e.a,{href:"/docs/ja/Concepts/operators#truthy-%E3%81%A8-falsy",children:"Truthy (\u771F\u7684) \u3068 Falsy (\u507D\u7684)"})," \u306E\u6982\u5FF5\u3082\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u3059\u3002"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);