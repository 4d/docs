"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47012"],{40083:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/save-record","title":"SAVE RECORD","description":"SAVE RECORD {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/save-record.md","sourceDirName":"commands-legacy","slug":"/commands/save-record","permalink":"/docs/ja/commands/save-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"save-record","title":"SAVE RECORD","slug":"/commands/save-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records in table","permalink":"/docs/ja/commands/records-in-table"},"next":{"title":"Sequence number","permalink":"/docs/ja/commands/sequence-number"}}'),d=s("785893"),c=s("250065");let l={id:"save-record",title:"SAVE RECORD",slug:"/commands/save-record",displayed_sidebar:"docs"},t=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAVE RECORD"})," {( ",(0,d.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["SAVE RECORD \u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E",(0,d.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001SAVE RECORD \u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"SAVE RECORD \u306F\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u30B3\u30FC\u30C9\u3092\u4F7F\u3063\u3066\u65B0\u3057\u304F\u4F5C\u6210\u307E\u305F\u306F\u4FEE\u6B63\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30E0\u3067\u30E6\u30FC\u30B6\u304C\u4FEE\u6B63\u3057\u78BA\u5B9A\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u306F\u3001SAVE RECORD \u3067\u4FDD\u5B58\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30E6\u30FC\u30B6\u306B\u3088\u3063\u3066\u30D5\u30A9\u30FC\u30E0\u4E2D\u3067\u4FEE\u6B63\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001SAVE RECORD \u3067\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30EC\u30B3\u30FC\u30C9\u4E2D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u30C7\u30FC\u30BF\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3067 SAVE RECORD  \u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3082\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u306A\u306B\u3082\u884C\u3044\u307E\u305B\u3093 (\u30C8\u30EA\u30AC\u306F\u547C\u3073\u51FA\u3055\u308C\u307E\u305B\u3093)\u3002"}),"\n",(0,d.jsx)(n.p,{children:"SAVE RECORD \u304C\u5FC5\u8981\u3068\u3055\u308C\u308B\u5834\u5408\u3092\u6B21\u306B\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/create-record",children:"CREATE RECORD"})," \u3084 ",(0,d.jsx)(n.a,{href:"/docs/ja/commands/duplicate-record",children:"DUPLICATE RECORD"}),"\u3067\u4F5C\u6210\u3057\u305F\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/receive-record",children:"RECEIVE RECORD"}),"\u3067\u53D6\u5F97\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408"]}),"\n",(0,d.jsx)(n.li,{children:"\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u3063\u3066\u4FEE\u6B63\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408"}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"_o_ADD SUBRECORD"}),"\u3001",(0,d.jsx)(n.em,{children:"_o_CREATE SUBRECORD"}),"\u3001",(0,d.jsx)(n.em,{children:"_o_MODIFY SUBRECORD"})," \u306B\u3088\u3063\u3066\u4F5C\u6210\u307E\u305F\u306F\u4FEE\u6B63\u3057\u305F\u30B5\u30D6\u30EC\u30B3\u30FC\u30C9\u3092\u542B\u3080\u30EC\u30B3\u30FC\u30C9\u4FDD\u5B58\u3059\u308B\u5834\u5408"]}),"\n",(0,d.jsx)(n.li,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B\u3088\u3046\u306A\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u3001\u30C7\u30FC\u30BF\u5165\u529B\u9014\u4E2D\u3067\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408"}),"\n",(0,d.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u5165\u529B\u9014\u4E2D\u3067\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u53D7\u3051\u5165\u308C\u3089\u308C\u305F\u30D5\u30A9\u30FC\u30E0\u306EOn Validate\u30A4\u30D9\u30F3\u30C8\u3067SAVE RECORD \u3092\u5B9F\u884C\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002\u3082\u3057\u3001\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001\u30EC\u30B3\u30FC\u30C9\u304C2\u56DE\u4FDD\u5B58\u3055\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," \u7DE8\u96C6\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u542B\u3080\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408\u3001\u4E00\u822C\u7684\u306B\u306F",(0,d.jsx)(n.strong,{children:"SAVE RECORD"})," \u3092\u547C\u3073\u51FA\u3059\u524D\u306B4D\u306B\u305D\u308C\u3092\u660E\u793A\u7684\u306B\u901A\u77E5\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u4FDD\u5B58"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u3089\u30EC\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u8FBC\u3080\u30E1\u30BD\u30C3\u30C9\u306E\u4E00\u90E8\u3067\u3059\u3002\u3053\u306E\u30B3\u30FC\u30C9\u306F\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\u3057\u3001\u3053\u306E\u5F8C\u53D7\u4FE1\u304C\u6B63\u5E38\u306B\u884C\u308F\u308C\u308B\u3068\u3001\u30EC\u30B3\u30FC\u30C9\u3092\u4FDD\u5B58\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0RECEIVE RECORD([Customers])\xa0// \u30C7\u30A3\u30B9\u30AF\u304B\u3089\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u4FE1\n\xa0If(OK=1)\xa0// \u30EC\u30B3\u30FC\u30C9\u3092\u6B63\u3057\u304F\u53D7\u4FE1\u3057\u305F\u3089\u2026\n\xa0\xa0\xa0\xa0SAVE RECORD([Customers])\xa0// \u4FDD\u5B58\u3059\u308B\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/create-record",children:"CREATE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/locked",children:"Locked"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30C8\u30EA\u30AC"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"53"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let d={},c=r.createContext(d);function l(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);