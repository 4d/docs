"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37004"],{141165:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/string-list-to-array","title":"STRING LIST TO ARRAY","description":"STRING LIST TO ARRAY ( resID ; strings {; resFile} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/string-list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/string-list-to-array","permalink":"/docs/ja/commands/string-list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstring-list-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"string-list-to-array","title":"STRING LIST TO ARRAY","slug":"/commands/string-list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOURCE TYPE LIST","permalink":"/docs/ja/commands/resource-type-list"},"next":{"title":"SQL","permalink":"/docs/ja/commands/theme/SQL"}}'),t=s("785893"),i=s("250065");let d={id:"string-list-to-array",title:"STRING LIST TO ARRAY",slug:"/commands/string-list-to-array",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"XLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u306E\u4E92\u63DB\u6027",id:"xliff\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u306E\u4E92\u63DB\u6027",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"STRING LIST TO ARRAY"})," ( ",(0,t.jsx)(e.em,{children:"resID"})," ; ",(0,t.jsx)(e.em,{children:"strings"})," {; ",(0,t.jsx)(e.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"resID"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30EA\u30BD\u30FC\u30B9ID\u756A\u53F7\u3001\u307E\u305F\u306F 'group'\u8981\u7D20\u306E'id'\u5C5E\u6027 (XLIFF)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"strings"}),(0,t.jsx)(e.td,{children:"Text array"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"STR#\u30EA\u30BD\u30FC\u30B9\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u6587\u5B57\u5217\u3001\u307E\u305F\u306F 'group'\u8981\u7D20\u304B\u3089\u53D6\u308A\u51FA\u3057\u305F\u6587\u5B57\u5217 (XLIFF)"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"resFile"}),(0,t.jsx)(e.td,{children:"Time"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001\u958B\u304B\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306EXLIFF\u30D5\u30A1\u30A4\u30EB \u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"STRING LIST TO ARRAY"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u8981\u7D20\u304B\u3089\u69CB\u7BC9\u3055\u308C\u308B",(0,t.jsx)(e.em,{children:"strings"}),"\u914D\u5217\u3092\u751F\u6210\u3057\u307E\u3059:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u30B9\u30C8\u30EA\u30F3\u30B0\u30EA\u30B9\u30C8 (\u201CSTR#\u201D) \u30EA\u30BD\u30FC\u30B9\u306B\u683C\u7D0D\u3055\u308C\u305F\u3001ID\u304C",(0,t.jsx)(e.em,{children:"resID"}),"\u306E\u6587\u5B57\u5217\u3001\u307E\u305F\u306F"]}),"\n",(0,t.jsxs)(e.li,{children:["\u958B\u304B\u308C\u305FXLIFF\u30D5\u30A1\u30A4\u30EB\u4E2D\u3001'group'\u8981\u7D20\u306E'id'\u5C5E\u6027\u304C",(0,t.jsx)(e.em,{children:"resID"}),'\u3067\u3042\u308B\u6587\u5B57\u5217 (\u5F8C\u8FF0\u306E"XLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u306E\u4E92\u63DB\u6027"\u3092\u53C2\u7167)\u3002']}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u30EA\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408",(0,t.jsx)(e.em,{children:"strings"}),"\u914D\u5217\u306F\u305D\u306E\u307E\u307E\u5909\u66F4\u3055\u308C\u305A\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"resFile"}),"\u306B\u6709\u52B9\u306A\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3059\u3068\u3001\u305D\u306E\u30EA\u30BD\u30FC\u30B9\u306F\u305D\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u306E\u307F\u691C\u7D22\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(e.em,{children:"resFile"}),"\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u3001\u30EA\u30BD\u30FC\u30B9\u30C1\u30A7\u30FC\u30F3\u5185\u3067\u6700\u521D\u306B\u898B\u3064\u304B\u3063\u305F\u30EA\u30BD\u30FC\u30B9\u306E\u30AA\u30AB\u30EC\u30F3\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"STRING LIST TO ARRAY"}),"\u3092\u547C\u3073\u51FA\u3059\u524D\u306B\u3001\u914D\u5217",(0,t.jsx)(e.em,{children:"strings"}),"\u3092\u6587\u5B57\u5217\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3068\u3057\u3066\u5BA3\u8A00\u3067\u304D\u307E\u3059\u3002\u914D\u5217\u3092\u4E8B\u524D\u306B\u5B9A\u7FA9\u3057\u306A\u3044\u5834\u5408\u3001\u30C6\u30AD\u30B9\u30C8\u914D\u5217\u3068\u3057\u3066\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u6CE8:"})," \u30B9\u30C8\u30EA\u30F3\u30B0\u30EA\u30B9\u30C8\u30EA\u30BD\u30FC\u30B9\u306E\u5404\u30B9\u30C8\u30EA\u30F3\u30B0\u306F\u3001\u6700\u5927255\u6587\u5B57\u3092\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Tip:"})," \u30B9\u30C8\u30EA\u30F3\u30B0\u30EA\u30B9\u30C8\u306E\u7DCF\u30B5\u30A4\u30BA\u309232K\u306B\u3001\u307E\u305F1\u30EA\u30BD\u30FC\u30B9\u3042\u305F\u308A\u6570\u767E\u6587\u5B57\u5217\u306B\u5236\u9650\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"xliff\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u306E\u4E92\u63DB\u6027",children:"XLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u306E\u4E92\u63DB\u6027"}),"\n",(0,t.jsxs)(e.p,{children:["4D v11\u3088\u308A\u3001",(0,t.jsx)(e.strong,{children:"STRING LIST TO ARRAY"}),"\u30B3\u30DE\u30F3\u30C9\u306FXLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u4E92\u63DB\u304C\u3042\u308A\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u307E\u305A",(0,t.jsx)(e.em,{children:"resID"}),"\u3068",(0,t.jsx)(e.em,{children:"strID"}),"\u306B\u5BFE\u5FDC\u3059\u308B\u30EA\u30BD\u30FC\u30B9\u3092\u3059\u3079\u3066\u306E\u958B\u304B\u308C\u305FXLIFF\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u63A2\u3057\u307E\u3059 (",(0,t.jsx)(e.em,{children:"resFile"})," \u5F15\u6570\u304C\u7701\u7565\u3055\u308C\u3066\u3044\u308C\u3070)\u3002\u3053\u306E\u5834\u5408\u3001",(0,t.jsx)(e.em,{children:"resID"}),"\u306F",(0,t.jsx)(e.strong,{children:"group"}),"\u8981\u7D20\u306E",(0,t.jsx)(e.strong,{children:"id"}),"\u5C5E\u6027\u3092\u8868\u3057\u3001",(0,t.jsx)(e.em,{children:"strID"}),"\u306F",(0,t.jsx)(e.strong,{children:"trans-unit"}),"\u8981\u7D20\u306E",(0,t.jsx)(e.strong,{children:"id"}),"\u5C5E\u6027\u3092\u8868\u3057\u307E\u3059\u3002\u5024\u304C\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u304D\u7D9A\u304D\u958B\u304B\u308C\u305F\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u3092\u691C\u7D22\u3057\u307E\u3059\u30024D\u306B\u304A\u3051\u308BXLIFF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F4D Design Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(e.p,{children:"\u30EA\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u308B\u3068OK\u5909\u6570\u306B1\u304C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/get-string-resource",children:"Get string resource"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/get-text-resource",children:"Get text resource"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(e.td,{children:"511"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(e.td,{children:"\u2717"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(e.td,{children:"OK"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);