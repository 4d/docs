"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12235"],{548847:function(n,e,t){t.r(e),t.d(e,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/blob-to-list","title":"BLOB to list","description":"BLOB to list ( BLOB {; offset} ) : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-list","permalink":"/docs/ja/commands/blob-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-list","title":"BLOB to list","slug":"/commands/blob-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to integer","permalink":"/docs/ja/commands/blob-to-integer"},"next":{"title":"BLOB to longint","permalink":"/docs/ja/commands/blob-to-longint"}}'),d=t("785893"),l=t("250065");let i={id:"blob-to-list",title:"BLOB to list",slug:"/commands/blob-to-list",displayed_sidebar:"docs"},r=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"BLOB to list"})," ( ",(0,d.jsx)(e.em,{children:"BLOB"})," {; ",(0,d.jsx)(e.em,{children:"offset"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u968E\u5C64\u30EA\u30B9\u30C8\u304C\u683C\u7D0D\u3055\u308C\u305FBLOB"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"offset"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2194"}),(0,d.jsx)(e.td,{children:"BLOB\u5185\u306E\u30AA\u30D5\u30BB\u30C3\u30C8 (\u30D0\u30A4\u30C8\u5358\u4F4D)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"\u8AAD\u307F\u8FBC\u307F\u5F8C\u306E\u65B0\u3057\u3044\u30AA\u30D5\u30BB\u30C3\u30C8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u65B0\u3057\u304F\u4F5C\u6210\u3055\u308C\u305F\u30EA\u30B9\u30C8\u53C2\u7167"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["BLOB to list \u30B3\u30DE\u30F3\u30C9\u306F",(0,d.jsx)(e.em,{children:"blob"}),"\u4E2D\u3001",(0,d.jsx)(e.em,{children:"offset"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D0\u30A4\u30C8\u30AA\u30D5\u30BB\u30C3\u30C8\uFF08\u30BC\u30ED\u304B\u3089\u958B\u59CB\uFF09\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066\u65B0\u3057\u3044\u968E\u5C64\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u3001\u3053\u306E\u30EA\u30B9\u30C8\u306E\u30EA\u30B9\u30C8\u53C2\u7167\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["BLOB\u30C7\u30FC\u30BF\u306F\u30B3\u30DE\u30F3\u30C9\u3068\u6574\u5408\u6027\u3092\u4FDD\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u901A\u5E38\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/list-to-blob",title:"LIST TO BLOB",children:"LIST TO BLOB"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u968E\u5C64\u30EA\u30B9\u30C8\u3092\u683C\u7D0D\u3057\u305FBLOB\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570",(0,d.jsx)(e.em,{children:"offset"}),"\u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u968E\u5C64\u30EA\u30B9\u30C8\u306FBLOB\u306E\u6700\u521D\u304B\u3089\u8AAD\u307F\u8FBC\u307E\u308C\u307E\u3059\u3002\u8907\u6570\u306E\u5909\u6570\u3084\u30EA\u30B9\u30C8\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u308BBLOB\u3092\u64CD\u4F5C\u3059\u308B\u5834\u5408\u306B\u306F\u3001",(0,d.jsx)(e.em,{children:"offset"}),"\u306B\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u683C\u7D0D\u3057\u305F\u6570\u5024\u578B\u5909\u6570\u3092\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u547C\u3073\u51FA\u3057\u306E\u524D\u306B\u3001\u3053\u306E\u6570\u5024\u578B\u5909\u6570\u3092\u9069\u5207\u306A\u30AA\u30D5\u30BB\u30C3\u30C8\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u547C\u3073\u51FA\u3057\u306E\u5F8C\u3067\u3001\u3053\u306E\u6570\u5024\u578B\u5909\u6570\u306FBLOB\u5185\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u6B21\u306E\u5909\u6570\u3078\u306E\u30AA\u30D5\u30BB\u30C3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u547C\u3073\u51FA\u3057\u5F8C\u3001\u968E\u5C64\u30EA\u30B9\u30C8\u304C\u6B63\u5E38\u306B\u4F5C\u6210\u3055\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u968E\u5C64\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u30E1\u30E2\u30EA\u304C\u306A\u3044\u7B49\u306E\u7406\u7531\u3067\u51E6\u7406\u304C\u5B9F\u884C\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.strong,{children:"\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u72EC\u7ACB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"})}),"\n",(0,d.jsxs)(e.p,{children:["BLOB to list\u3084",(0,d.jsx)(e.a,{href:"/docs/ja/commands/list-to-blob",title:"LIST TO BLOB",children:"LIST TO BLOB"}),"\u306F\u3001 BLOB\u306B\u683C\u7D0D\u3055\u308C\u305F\u30EA\u30B9\u30C8\u3092\u51E6\u7406\u3059\u308B\u305F\u3081\u306B4D\u306E\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u5229\u70B9\u3068\u3057\u3066\u3001\u3053\u308C\u3089\u4E8C\u3064\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u969B\u3001\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0 \u9593\u306E\u30D0\u30A4\u30C8\u30B9\u30EF\u30C3\u30D7\u3092\u6C17\u306B\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u8A00\u3044\u63DB\u3048\u308C\u3070\u3053\u308C\u3089\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066Windows\u3067\u4F5C\u6210\u3055\u308C\u305FBLOB\u3092Macintosh\u3067\u4F7F\u7528 \u3059\u308B\u3001\u3042\u308B\u3044\u306F\u305D\u306E\u9006\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u3067\u306F\u3001\u30C7\u30FC\u30BF\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u304C\u753B\u9762\u306B\u8868\u793A\u3055\u308C\u308B\u524D\u306B\u3001\u3053\u306E\u30D5\u30A9\u30FC\u30E0\u306E\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u304CBLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089\u30EA\u30B9\u30C8\u3092\u62BD\u51FA\u3057\u3001\u30C7\u30FC\u30BF\u5165\u529B\u304C\u691C\u8A3C\u3055\u308C\u308B\u3068\u3053\u306E\u30EA\u30B9\u30C8\u3092BLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u518D\u3073\u683C\u7D0D\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// [Things To Do];"Input" \u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=BLOB to list([Things To Do]Other Crazy Ideas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=New list\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(bValidate=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LIST TO BLOB(hList;[Things To Do]Other Crazy Ideas)\n\xa0\n\xa0End case\n'})}),"\n",(0,d.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(e.p,{children:"\u30EA\u30B9\u30C8\u304C\u6B63\u3057\u304F\u4F5C\u6210\u3055\u308C\u308B\u3068\u3001OK\u5909\u6570\u306B\u306F1\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/list-to-blob",children:"LIST TO BLOB"})}),"\n",(0,d.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"557"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},l=s.createContext(d);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);