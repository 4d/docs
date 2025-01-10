"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43298"],{658462:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/blob-to-real","title":"BLOB to real","description":"BLOB to real ( BLOB ; realFormat {; offset} ) : Real","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-real.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-real","permalink":"/docs/ja/commands/blob-to-real","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-real.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-real","title":"BLOB to real","slug":"/commands/blob-to-real","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to longint","permalink":"/docs/ja/commands/blob-to-longint"},"next":{"title":"BLOB to text","permalink":"/docs/ja/commands/blob-to-text"}}'),s=t("785893"),d=t("250065");let l={id:"blob-to-real",title:"BLOB to real",slug:"/commands/blob-to-real",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"BLOB to real"})," ( ",(0,s.jsx)(e.em,{children:"BLOB"})," ; ",(0,s.jsx)(e.em,{children:"realFormat"})," {; ",(0,s.jsx)(e.em,{children:"offset"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Blob"}),(0,s.jsx)(e.td,{children:"Blob"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u5B9F\u6570\u5024\u3092\u53D6\u308A\u51FA\u3059BLOB"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"realFormat"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"0 Native real format 1 Extended real format 2  Macintosh Double real format 3  Windows Double real format"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"offset"}),(0,s.jsx)(e.td,{children:"Variable"}),(0,s.jsx)(e.td,{children:"\u2194"}),(0,s.jsx)(e.td,{children:"BLOB\u4E2D\u306E\u30AA\u30D5\u30BB\u30C3\u30C8 (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u8AAD\u307F\u8FBC\u307F\u5F8C\u3001\u65B0\u3057\u3044\u30AA\u30D5\u30BB\u30C3\u30C8"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"\u5B9F\u6570\u5024"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:["BLOB to real \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(e.em,{children:"blob"})," BLOB\u304B\u3089\u5B9F\u6570\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u3001\u305D\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"realFormat"}),"\u5F15\u6570\u306F\u3001\u8AAD\u307F\u8FBC\u3080\u5B9F\u6570\u5024\u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u30D0\u30A4\u30C8\u30AA\u30FC\u30C0\u30FC\u3092\u6307\u5B9A\u3057\u307E\u3059\u30024D\u304C\u63D0\u4F9B\u3059\u308B\u4EE5\u4E0B\u306E\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u306E\u3046\u3061\u3001\u3044\u305A\u308C\u304B\u3092\u6E21\u3057\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{children:"\u5024"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Extended real format"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Macintosh double real format"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Native real format"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PC double real format"}),(0,s.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(e.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u72EC\u7ACB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"})}),"\n",(0,s.jsx)(e.p,{children:"Macintosh\u3068PC\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u9593\u3067BLOB\u3092\u4EA4\u63DB\u3059\u308B\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u969B\u306E\u5B9F\u6570\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u30D0\u30A4\u30C8\u30B9\u30EF\u30C3\u30D7\u306E\u7BA1\u7406\u306F\u958B\u767A\u8005\u306B\u4EFB\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"offset"}),"\u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5B9F\u6570\u306E\u5024\u306FBLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\uFF08\u30BC\u30ED\u304B\u3089\u958B\u59CB\uFF09\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,s.jsx)(e.em,{children:"offset"}),"\u3092\u6307\u5B9A\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001BLOB\u306E\u6700\u521D\u306E8\u307E\u305F\u306F10\u30D0\u30A4\u30C8\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," 0\u304B\u3089BLOB\u30B5\u30A4\u30BA-8\u307E\u305F\u306F-10\u306E\u7BC4\u56F2\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u5024\uFF08\u30D0\u30A4\u30C8\u5358\u4F4D\uFF09\u3092\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u7BC4\u56F2\u306E\u5024\u3092\u6E21\u3055\u306A\u3044\u3068\u3001\u30A8\u30E9\u30FC-111\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u547C\u3073\u51FA\u3057\u5F8C\u3001",(0,s.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u306F\u3001\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u30D0\u30A4\u30C8\u6570\u5206\u3060\u3051\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u540C\u3058",(0,s.jsx)(e.em,{children:"offset"}),"\u5909\u6570\u3092\u5225\u306EBLOB\u8AAD\u307F\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u306B\u3082\u4F7F\u7528\u3057\u3001\u5225\u306E\u5024\u3092BLOB\u304B\u3089\u8AAD\u307F\u3060\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306FBLOB\u304B\u3089\u3001\u30AA\u30D5\u30BB\u30C3\u30C80x200\u304B\u3089\u958B\u59CB\u3057\u3066\u5B9F\u6570\u5024\u309220\u500B\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"\xa0$vlOffset:=0x200\n\xa0For($viLoop;0;19)\n\xa0\xa0\xa0\xa0$vrValue:=BLOB to real(vxSomeBlob;PC byte ordering;$vlOffset)\n\xa0\xa0// Do something with $vrValue\n\xa0End for\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/blob-to-text",children:"BLOB to text"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"553"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);