"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8642"],{565890:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/array-blob","title":"ARRAY BLOB","description":"ARRAY BLOB ( arrayName ; size {; size2} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/array-blob.md","sourceDirName":"commands-legacy","slug":"/commands/array-blob","permalink":"/docs/ja/commands/array-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"array-blob","title":"ARRAY BLOB","slug":"/commands/array-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND TO ARRAY","permalink":"/docs/ja/commands/append-to-array"},"next":{"title":"ARRAY BOOLEAN","permalink":"/docs/ja/commands/array-boolean"}}'),d=s("785893"),l=s("250065");let i={id:"array-blob",title:"ARRAY BLOB",slug:"/commands/array-blob",displayed_sidebar:"docs"},t=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ARRAY BLOB"})," ( ",(0,d.jsx)(n.em,{children:"arrayName"})," ; ",(0,d.jsx)(n.em,{children:"size"})," {; ",(0,d.jsx)(n.em,{children:"size2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"arrayName"}),(0,d.jsx)(n.td,{children:"Array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u914D\u5217\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"size"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u914D\u5217\u306E\u8981\u7D20\u306E\u6570\u3001\u3082\u3057\u304F\u306Fsize2\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306F\u914D\u5217\u306E\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"size2"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"2\u6B21\u5143\u914D\u5217\u306E\u8981\u7D20\u306E\u6570"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ARRAY BLOB"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30E1\u30E2\u30EA\u4E0A\u306BBLOB\u578B\u306E\u8981\u7D20\u306E\u914D\u5217\u3092\u4F5C\u6210\u30FB\u30EA\u30B5\u30A4\u30BA\u3057\u307E\u3059\u3002\u5F15\u6570\u306B\u306F\u914D\u5217\u306E\u540D\u524D\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"size"})," \u5F15\u6570\u306B\u306F\u3001\u914D\u5217\u306E\u8981\u7D20\u306E\u6570\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"size2"})," \u5F15\u6570\u306F\u4EFB\u610F\u306E\u5F15\u6570\u3067\u3059\u3002\u6307\u5B9A\u6642\u306B\u306F\u30B3\u30DE\u30F3\u30C9\u306F2\u6B21\u5143\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001 ",(0,d.jsx)(n.em,{children:"size"})," \u5F15\u6570\u306F\u305D\u308C\u305E\u308C\u306E\u914D\u5217\u306E\u884C\u306E\u6570\u3092\u6307\u5B9A\u3057\u3001 ",(0,d.jsx)(n.em,{children:"size2"})," \u5F15\u6570\u306F\u305D\u308C\u305E\u308C\u306E\u914D\u5217\u306E\u5217\u306E\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u30022\u6B21\u5143\u914D\u5217\u5185\u306E\u305D\u308C\u305E\u308C\u306E\u884C\u306F\u3001\u8981\u7D20\u3068\u3057\u3066\u3082\u914D\u5217\u3068\u3057\u3066\u3082\u6271\u3046\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002\u3053\u308C\u306F\u3064\u307E\u308A\u3001\u914D\u5217\u306E1\u6B21\u5143\u76EE\u3092\u6271\u3046\u3068\u304D\u306F\u3001\u3053\u306E\u30C6\u30FC\u30DE\u5185\u306E\u4ED6\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u30662\u6B21\u5143\u914D\u5217\u306E\u4E2D\u306B\u914D\u5217\u5168\u4F53\u3092\u633F\u5165\u3057\u305F\u308A\u524A\u9664\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ARRAY BLOB"})," \u30B3\u30DE\u30F3\u30C9\u3092\u65E2\u5B58\u306E\u914D\u5217\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3053\u3068\u306B\u6C17\u3092\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u30B5\u30A4\u30BA\u3092\u62E1\u5927\u3059\u308B\u5834\u5408\u3001\u65E2\u5B58\u306E\u8981\u7D20\u306F\u4F55\u3082\u5909\u66F4\u3055\u308C\u305A\u3001\u65B0\u3057\u304F\u8FFD\u52A0\u3055\u308C\u305F\u8981\u7D20\u306F\u7A7A\u306EBLOB\u3067\u521D\u671F\u5316\u3055\u308C\u307E\u3059(",(0,d.jsx)(n.a,{href:"/docs/ja/commands/blob-size",children:"BLOB size"}),"= 0)"]}),"\n",(0,d.jsx)(n.li,{children:'\u30B5\u30A4\u30BA\u3092\u7E2E\u5C0F\u3059\u308B\u5834\u5408\u306F\u3001 "\u5E95"\u306B\u3042\u308B\u8981\u7D20\u304B\u3089\u524A\u9664\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002'}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306FBLOB\u578B\u306E\u8981\u7D20\u3092100\u500B\u542B\u3093\u3060\u30D7\u30ED\u30BB\u30B9\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BLOB(arrBlob;100)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F50\u500B\u306EBLOB\u578B\u306E\u8981\u7D20\u3092\u542B\u3093\u3060\u884C\u3092100\u884C\u6301\u3063\u305F\u30ED\u30FC\u30AB\u30EB\u306A\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BLOB($arrBlob;100;50)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F50\u500B\u306EBLOB\u578B\u306E\u8981\u7D20\u3092\u542B\u3093\u3060\u884C\u3092100\u884C\u6301\u3063\u305F\u30ED\u30FC\u30AB\u30EB\u306A\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002$vByteValue \u5909\u6570\u306B\u306F\u3001\u305D\u306EBLOB\u914D\u5217\u306E5\u884C\u76EE\u30FB7\u5217\u76EE\u306E\u300110\u30D0\u30A4\u30C8\u76EE\u306EBLOB\u304C\u6E21\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0C_INTEGER($vByteValue)\n\xa0ARRAY BLOB($arrValues;100;50)\n\xa0...\n\xa0$vByteValue:=$arrValues{5}{7}{9}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"\u914D\u5217\u3092\u4F5C\u6210\u3059\u308B"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1222"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return i}});var r=s(667294);let d={},l=r.createContext(d);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);