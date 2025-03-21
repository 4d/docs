"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51976"],{263540:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>i,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/blob-to-document","title":"BLOB TO DOCUMENT","description":"BLOB TO DOCUMENT ( document ; BLOB )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-document.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-document","permalink":"/docs/ja/20-R7/commands/blob-to-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-document","title":"BLOB TO DOCUMENT","slug":"/commands/blob-to-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB size","permalink":"/docs/ja/20-R7/commands/blob-size"},"next":{"title":"BLOB to integer","permalink":"/docs/ja/20-R7/commands/blob-to-integer"}}'),s=d("785893"),c=d("250065");let l={id:"blob-to-document",title:"BLOB TO DOCUMENT",slug:"/commands/blob-to-document",displayed_sidebar:"docs"},r=void 0,o={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u30A8\u30E9\u30FC\u51E6\u7406",id:"\u30A8\u30E9\u30FC\u51E6\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"BLOB TO DOCUMENT"})," ( ",(0,s.jsx)(e.em,{children:"document"})," ; ",(0,s.jsx)(e.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5F15\u6570"}),(0,s.jsx)(e.th,{children:"\u578B"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"document"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Blob"}),(0,s.jsx)(e.td,{children:"Blob"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u65B0\u3057\u3044\u30B3\u30F3\u30C6\u30F3\u30C4"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(e.p,{children:["BLOB TO DOCUMENT \u306F\u3001",(0,s.jsx)(e.em,{children:"blob"}),"\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3057\u3066",(0,s.jsx)(e.em,{children:"document"}),"\u306E\u5185\u5BB9\u5168\u4F53\u3092\u4E0A\u66F8\u304D\u3057\u307E\u3059\u3002\u3092\u4F7F\u7528\u3057\u307E\u3059(\u4F8B\u984C\u3092\u53C2\u7167)\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u3059\u3070\u3084\u304F\u683C\u7D0D\u3001\u307E\u305F\u306F\u53D6\u5F97\u3067\u304D\u308B\u3088\u3046\u306A\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u3092\u8A18\u8FF0\u3059\u308B\u5834\u5408\u3092\u60F3\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3067\u3001 BLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306A\u30DC\u30BF\u30F3\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30DC\u30BF\u30F3\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E \u3088\u3046\u306B\u4F5C\u6210\u3057\u307E\u3059:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:'\xa0$vhDocRef:=Create document("")\xa0// \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u4F5C\u6210\u3059\u308B\n\xa0If(OK=1)\xa0// \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u4F5C\u6210\u3055\u308C\u305F\u3089\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// \u305D\u308C\u3092\u9589\u3058\u308B\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;[YourTable]YourBLOBField)\xa0// \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u66F8\u304D\u8FBC\u3080\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// \u30A8\u30E9\u30FC\u3092\u51E6\u7406\u3059\u308B\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsx)(e.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u6B63\u3057\u304F\u66F8\u304D\u3053\u307E\u308C\u305F\u3089OK\u5909\u6570\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u30A8\u30E9\u30FC\u51E6\u7406",children:"\u30A8\u30E9\u30FC\u51E6\u7406"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5B58\u5728\u3057\u306A\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3084\u3001\u65E2\u306B\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u3084\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u958B\u304B\u308C\u3066\u3044\u308B\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u66F8\u304D\u8FBC\u307F\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u3001\u5BFE\u5FDC\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u30DE\u30CD\u30FC\u30B8\u30E3\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u65B0\u3057\u3044\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u66F8\u304D\u8FBC\u3080\u305F\u3081\u306E\u30C7\u30A3\u30B9\u30AF\u5BB9\u91CF\u304C\u4E0D\u8DB3\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u66F8\u304D\u8FBC\u3080\u969B\u306B\u3001I\uFF0FO\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u3044\u305A\u308C\u306E\u5834\u5408\u3067\u3082\u3001",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u5272\u308A\u8FBC\u307F\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3059\u308C\u3070\u3001\u3053\u306E\u30A8\u30E9\u30FC\u3092\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/commands/create-document",children:"Create document"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/ja/20-R7/commands/open-document",children:"Open document"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(e.td,{children:"526"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(e.td,{children:"\u2713"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,s.jsx)(e.td,{children:"OK\u3001error"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return r},a:function(){return l}});var t=d(667294);let s={},c=t.createContext(s);function l(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);