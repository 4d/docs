"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4806"],{739530:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>d,assets:()=>l,toc:()=>h,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","description":"GET HIGHLIGHTED RECORDS ( {aTable ;} setName )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-highlighted-records.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlighted-records","permalink":"/docs/ja/commands/get-highlighted-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlighted-records.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-highlighted-records","title":"GET HIGHLIGHTED RECORDS","slug":"/commands/get-highlighted-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FIRST RECORD","permalink":"/docs/ja/commands/first-record"},"next":{"title":"GOTO SELECTED RECORD","permalink":"/docs/ja/commands/goto-selected-record"}}'),t=s("785893"),r=s("250065");let i={id:"get-highlighted-records",title:"GET HIGHLIGHTED RECORDS",slug:"/commands/get-highlighted-records",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET HIGHLIGHTED RECORDS"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;} ",(0,t.jsx)(n.em,{children:"setName"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u3060\u3059\u30C6\u30FC\u30D6\u30EB \u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30C6\u30FC\u30D6\u30EB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"setName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u683C\u7D0D\u3059\u308B\u30BB\u30C3\u30C8"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["GET HIGHLIGHTED RECORDS \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"aTable"}),"\u4E2D\u3067 (\u4F8B: \u30EA\u30B9\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u30E6\u30FC\u30B6\u306B\u3088\u308A\u9078\u629E\u3055\u308C\u3066) \u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092",(0,t.jsx)(n.em,{children:"setName"}),"\u3067\u6307\u5B9A\u3057\u305F\u30BB\u30C3\u30C8\u306B\u683C\u7D0D\u3057\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"aTable"}),"\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30C6\u30FC\u30D6\u30EB\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u307E\u305F\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"})," / ",(0,t.jsx)(n.a,{href:"/docs/ja/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3044\u308B\u6642\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D\u304C\u81EA\u52D5\u3067\u7BA1\u7406\u3059\u308B",(0,t.jsx)(n.strong,{children:"UserSet"}),"\u3092\u4F7F\u7528\u3057\u305F\u547C\u3073\u51FA\u3057\u3068\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3057\u304B\u3057\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u306F\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u305B\u305F\u30C6\u30FC\u30D6\u30EB\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u306E\u3067\u3001GET HIGHLIGHTED RECORDS\u3092\u4F7F\u7528\u3059\u308C\u3070\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u7BA1\u7406\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u7570\u306A\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6271\u3046\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002",(0,t.jsx)(n.strong,{children:"UserSet"}),"\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u306E\u7BC0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["GET HIGHLIGHTED RECORDS\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u4EE5\u5916\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u3082\u547C\u3073\u51FA\u305B\u307E\u3059\u304C\u3001\u305D\u306E\u5834\u5408\u306F\u7A7A\u306E\u30BB\u30C3\u30C8\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"setName"}),"\u3067\u6307\u5B9A\u3059\u308B\u30BB\u30C3\u30C8\u306F\u3001\u30ED\u30FC\u30AB\u30EB/\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3001\u30D7\u30ED\u30BB\u30B9\u3001\u307E\u305F\u306F\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u306E\u3044\u305A\u308C\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," \u7D44\u307F\u8FBC\u3093\u3060\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u9078\u629E\u30E2\u30FC\u30C9\u306B",(0,t.jsx)(n.strong,{children:"\u8907\u6570"}),"\u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001GET HIGHLIGHTED RECORDS\u306F\u7A7A\u306E\u30BB\u30C3\u30C8\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u9078\u629E\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u884C\u3092\u77E5\u308B\u306B\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/commands/selected-record-number",title:"Selected record number",children:"Selected record number"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u6B21\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30C6\u30FC\u30D6\u30EB ([CDs]) \u306E\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306B\u304A\u3044\u3066\u3001\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u30EC\u30B3\u30FC\u30C9\u306E\u6570\u3092\u793A\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0GET HIGHLIGHTED RECORDS([CDs];"$highlight")\n\xa0ALERT(String(Records in set("$highlight"))+" selected records.")\n\xa0CLEAR SET("$highlight")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304D\u5B9F\u884C\u3055\u308C\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/commands/highlight-records",children:"HIGHLIGHT RECORDS"})}),"\n",(0,t.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"902"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var d=s(667294);let t={},r=d.createContext(t);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);