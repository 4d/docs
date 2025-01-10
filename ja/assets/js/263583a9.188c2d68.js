"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8191"],{237996:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/delete-record","title":"DELETE RECORD","description":"DELETE RECORD {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-record.md","sourceDirName":"commands-legacy","slug":"/commands/delete-record","permalink":"/docs/ja/commands/delete-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-record","title":"DELETE RECORD","slug":"/commands/delete-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE RECORD","permalink":"/docs/ja/commands/create-record"},"next":{"title":"DISPLAY RECORD","permalink":"/docs/ja/commands/display-record"}}'),r=d("785893"),t=d("250065");let l={id:"delete-record",title:"DELETE RECORD",slug:"/commands/delete-record",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DELETE RECORD"})," {( ",(0,r.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["DELETE RECORD\u306F\u3001",(0,r.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30B9\u306B",(0,r.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001DELETE RECORD\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30D5\u30A9\u30FC\u30E0\u4E2D\u3067\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u4EE3\u308F\u308A\u306B\u30EC\u30B3\u30FC\u30C9\u524A\u9664\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u6301\u3064\u30DC\u30BF\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["DELETE RECORD\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u524D\u306B\u3001\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u30E1\u30E2\u30EA\u4E0A\u304B\u3089\u30A2\u30F3\u30ED\u30FC\u30C9\u306B\u3055\u308C\u3066\u3044\u308B\u5834\u5408 (\u4F8B\u3048\u3070",(0,r.jsx)(n.a,{href:"/docs/ja/commands/unload-record",children:"UNLOAD RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u7B49)\u3001\u524A\u9664\u5B9F\u884C\u5F8C\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u7A7A\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["DELETE RECORD\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u304C ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/read-only",children:"READ ONLY"})," \u30E2\u30FC\u30C9\u3067\u3042\u308B\u5834\u5408\u306B\u306F\u3001\u524A\u9664\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u306B\u95A2\u308F\u3089\u305A\u3001\u4F55\u3082\u3057\u307E\u305B\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30EC\u30B3\u30FC\u30C9\u306E\u524A\u9664\u306F\u3001\u4E00\u5EA6\u5B9F\u884C\u3059\u308B\u3068\u5143\u306B\u623B\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093(\u305F\u3060\u3057\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u4E2D\u306B\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u3092\u9664\u304D\u307E\u3059\u3002\u8A73\u7D30\u306F",(0,r.jsx)(n.em,{children:"\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30EC\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u308B\u3068\u3001\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306F\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u304C\u4F5C\u6210\u3055\u308C\u308B\u969B\u306B\u518D\u5229\u7528\u3055\u308C\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3059\u308B\u3053\u3068\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u3092\u30EC\u30B3\u30FC\u30C9\u306E\u8B58\u5225\u306B\u4F7F\u7528\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F1\u4EF6\u306E[employee]\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u3002\u307E\u305A\u30E6\u30FC\u30B6\u306B\u3069\u306Eemployee\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3059\u308B\u306E\u304B\u3092\u5C0B\u306D\u3001[employee]\u30EC\u30B3\u30FC\u30C9\u3092\u691C\u7D22\u3057\u3001\u898B\u3064\u304B\u3063\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vFind:=Request("Employee ID to delete:")\xa0// \u5F93\u696D\u54E1ID\u3092\u8981\u6C42\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Employee];[Employee]ID =vFind)\xa0// \u5F93\u696D\u54E1\u3092\u691C\u7D22\n\xa0\xa0\xa0\xa0DELETE RECORD([Employee])\xa0// \u5F93\u696D\u54E1\u3092\u524A\u9664\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/locked",children:"Locked"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"\u30C8\u30EA\u30AC"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"58"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"}),(0,r.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return l}});var s=d(667294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);