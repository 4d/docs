"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92776"],{882939:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/append-to-array","title":"APPEND TO ARRAY","description":"APPEND TO ARRAY ( array ; value )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/append-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/append-to-array","permalink":"/docs/ja/commands/append-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-to-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"append-to-array","title":"APPEND TO ARRAY","slug":"/commands/append-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"\u914D\u5217","permalink":"/docs/ja/commands/theme/Arrays"},"next":{"title":"ARRAY BLOB","permalink":"/docs/ja/commands/array-blob"}}'),d=r("785893"),a=r("250065");let t={id:"append-to-array",title:"APPEND TO ARRAY",slug:"/commands/append-to-array",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"APPEND TO ARRAY"})," ( ",(0,d.jsx)(n.em,{children:"array"})," ; ",(0,d.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"array"}),(0,d.jsx)(n.td,{children:"Array"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u8981\u7D20\u3092\u8FFD\u52A0\u3059\u308B\u914D\u5217"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"value"}),(0,d.jsx)(n.td,{children:"Expression"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u8FFD\u52A0\u3059\u308B\u5024"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["APPEND TO ARRAY \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"array"}),"\u306E\u6700\u5F8C\u306B\u65B0\u898F\u8981\u7D20\u3092\u8FFD\u52A0\u3057\u3001\u305D\u306E\u8981\u7D20\u306B",(0,d.jsx)(n.em,{children:"value"}),"\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9\u3067\u306F\u3001",(0,d.jsx)(n.em,{children:"array"}),"\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(n.em,{children:"value"}),"\u306E\u578B\u306B\u5BFE\u5FDC\u3059\u308B\u914D\u5217\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3042\u3089\u3086\u308B\u30BF\u30A4\u30D7\u306E\u914D\u5217\uFF08\u6587\u5B57\u5217\u3001\u6570\u5024\u3001\u30D6\u30FC\u30EB\u3001\u65E5\u4ED8\u3001\u30DD\u30A4\u30F3\u30BF\u3001\u30D4\u30AF\u30C1\u30E3\uFF09\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"value"}),"\u306E\u30BF\u30A4\u30D7\u306F\u914D\u5217\u306E\u30BF\u30A4\u30D7\u3068\u4E00\u81F4\u3057\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u4E00\u81F4\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC54\u201C\u5F15\u6570\u306E\u30BF\u30A4\u30D7\u304C\u9055\u3044\u307E\u3059\u201D\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u6B21\u306E\u5024\u306F\u53D7\u3051\u5165\u308C\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6587\u5B57\u5217\u914D\u5217\uFF08\u30C6\u30AD\u30B9\u30C8\u307E\u305F\u306F\u6587\u5B57\u5217\uFF09\u306F\u30C6\u30AD\u30B9\u30C8\u3084\u6587\u5B57\u5217\u30BF\u30A4\u30D7\u306E",(0,d.jsx)(n.em,{children:"value"}),"\u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6570\u5024\u914D\u5217\uFF08\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\uFF09\u306F\u3001\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\u3001\u307E\u305F\u306F\u6642\u9593\u30BF\u30A4\u30D7\u306E",(0,d.jsx)(n.em,{children:"value"}),"\u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u306F:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0INSERT IN ARRAY($myarray;Size of array($myarray)+1)\n\xa0$myarray{Size of array($myarray)}:=$myvalue\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30FC\u30C9\u306B\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0APPEND TO ARRAY($myarray;$myvalue)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/insert-in-array",children:"INSERT IN ARRAY"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"911"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return t}});var s=r(667294);let d={},a=s.createContext(d);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);