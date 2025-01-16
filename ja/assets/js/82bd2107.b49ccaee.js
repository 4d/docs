"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6676"],{315750:function(n,e,t){t.r(e),t.d(e,{default:()=>j,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/blob-to-longint","title":"BLOB to longint","description":"BLOB to longint ( BLOB ; byteOrder {; offset} ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-longint.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-longint","permalink":"/docs/ja/20-R7/commands/blob-to-longint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-longint.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-longint","title":"BLOB to longint","slug":"/commands/blob-to-longint","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to list","permalink":"/docs/ja/20-R7/commands/blob-to-list"},"next":{"title":"BLOB to real","permalink":"/docs/ja/20-R7/commands/blob-to-real"}}'),d=t("785893"),r=t("250065");let l={id:"blob-to-longint",title:"BLOB to longint",slug:"/commands/blob-to-longint",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"BLOB to longint"})," ( ",(0,d.jsx)(e.em,{children:"BLOB"})," ; ",(0,d.jsx)(e.em,{children:"byteOrder"})," {; ",(0,d.jsx)(e.em,{children:"offset"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570\u5024\u3092\u53D6\u308A\u51FA\u3059BLOB"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"byteOrder"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"offset"}),(0,d.jsx)(e.td,{children:"Variable"}),(0,d.jsx)(e.td,{children:"\u2194"}),(0,d.jsx)(e.td,{children:"BLOB\u4E2D\u306E\u30AA\u30D5\u30BB\u30C3\u30C8 (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"\u8AAD\u307F\u8FBC\u307F\u5F8C\u3001\u65B0\u3057\u3044\u30AA\u30D5\u30BB\u30C3\u30C8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"4\u30D0\u30A4\u30C8\u6574\u6570\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["BLOB to longint \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"blob"})," BLOB\u304B\u30894\u30D0\u30A4\u30C8\u306E\u6574\u6570\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u3001\u305D\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"byteOrder"}),"\u5F15\u6570\u306F\u3001\u8AAD\u307F\u8FBC\u30804\u30D0\u30A4\u30C8\u6574\u6570\u5024\u306E\u30D0\u30A4\u30C8\u30AA\u30FC\u30C0\u30FC\u3092\u6307\u5B9A\u3057\u307E\u3059\u30024D\u304C\u63D0\u4F9B\u3059\u308B\u4EE5\u4E0B\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u306E\u3046\u3061\u3001\u3044\u305A\u308C\u304B\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{children:"\u5024"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Macintosh byte ordering"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Native byte ordering"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"PC byte ordering"}),(0,d.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,d.jsx)(e.td,{children:"2"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u72EC\u7ACB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"})}),"\n",(0,d.jsx)(e.p,{children:"Macintosh\u3068PC\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u9593\u3067BLOB\u3092\u4EA4\u63DB\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u969B\u306E\u30D0\u30A4\u30C8\u30B9\u30EF\u30C3\u30D7\u306E\u7BA1\u7406\u306F\u958B\u767A\u8005\u306B\u4EFB\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"offset"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u30014\u30D0\u30A4\u30C8\u6574\u6570\u306E\u5024\u306FBLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\uFF08\u30BC\u30ED\u304B\u3089\u958B\u59CB\uFF09\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,d.jsx)(e.em,{children:"offset"}),"\u3092\u6307\u5B9A\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001BLOB\u306E\u6700\u521D\u306E4\u30D0\u30A4\u30C8\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Note"}),": 0\u304B\u3089BLOB\u30B5\u30A4\u30BA-4\u306E\u7BC4\u56F2\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u5024\uFF08\u30D0\u30A4\u30C8\u5358\u4F4D\uFF09\u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u7BC4\u56F2\u306E\u5024\u3092\u6E21\u3055\u306A\u3044\u3068\u3001\u30A8\u30E9\u30FC-111\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u547C\u3073\u51FA\u3057\u5F8C\u3001",(0,d.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u306F\u3001\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u30D0\u30A4\u30C8\u6570\u5206\u3060\u3051\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u540C\u3058",(0,d.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u3092\u5225\u306EBLOB\u8AAD\u307F\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u4F7F\u7528\u3057\u3001\u5225\u306E\u5024\u3092BLOB\u304B\u3089\u8AAD\u307F\u3060\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306FBLOB\u304B\u3089\u3001\u30AA\u30D5\u30BB\u30C3\u30C80x200\u304B\u3089\u958B\u59CB\u3057\u3066\u500D\u9577\u6574\u6570\u5024\u309220\u500B\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0$vlOffset:=0x200\n\xa0For($viLoop;0;19)\n\xa0\xa0\xa0\xa0$vlValue:=BLOB to longint(vxSomeBlob;PC byte ordering;$vlOffset)\n\xa0\xa0// Do something with $vlValue\n\xa0End for\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/blob-to-integer",children:"BLOB to integer"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/blob-to-real",children:"BLOB to real"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/blob-to-text",children:"BLOB to text"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/real-to-blob",children:"REAL TO BLOB"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/20-R7/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"551"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);