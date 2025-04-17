"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58955"],{274443:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/apply-to-selection","title":"APPLY TO SELECTION","description":"APPLY TO SELECTION ( aTable ; statement )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/apply-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/apply-to-selection","permalink":"/docs/ja/commands/apply-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapply-to-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"apply-to-selection","title":"APPLY TO SELECTION","slug":"/commands/apply-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ALL RECORDS","permalink":"/docs/ja/commands/all-records"},"next":{"title":"Before selection","permalink":"/docs/ja/commands/before-selection"}}'),l=s("785893"),d=s("250065");let r={id:"apply-to-selection",title:"APPLY TO SELECTION",slug:"/commands/apply-to-selection",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"APPLY TO SELECTION"})," ( ",(0,l.jsx)(n.em,{children:"aTable"})," ; ",(0,l.jsx)(n.em,{children:"statement"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"aTable"}),(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3092\u9069\u7528\u3059\u308B\u30C6\u30FC\u30D6\u30EB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"statement"}),(0,l.jsx)(n.td,{children:"Expression"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"1\u884C\u306E\u30B3\u30FC\u30C9\u3067\u8A18\u8FF0\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"APPLY TO SELECTION"})," \u306F\u3001",(0,l.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u5BFE\u3057\u3066",(0,l.jsx)(n.em,{children:"statement"}),"\u3092\u9069\u7528\u3057\u307E\u3059\u3002\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u81EA\u52D5\u3067\u3042\u308C\u3070\u3001",(0,l.jsx)(n.em,{children:"statement"}),"\u306F\u30EA\u30EC\u30FC\u30C8\u5148\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u542B\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u5F15\u6570($1...$n) \u306F",(0,l.jsx)(n.em,{children:"statement"})," \u5F15\u6570\u3067\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"APPLY TO SELECTION"})," \u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u60C5\u5831 (\u4F8B\u3048\u3070\u5408\u8A08\u7B49) \u3092\u6C42\u3081\u308B\u305F\u3081\u3001\u3042\u308B\u3044\u306F\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u4E2D\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u4FEE\u6B63\u3059\u308B\u305F\u3081 (\u4F8B\u3048\u3070\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u982D\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u5909\u3048\u308B\u7B49) \u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u51E6\u7406\u304C\u53D6\u308A\u6D88\u3055\u308C\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u5909\u66F4\u306F\u7121\u52B9\u3068\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"4D Server:"})," ",(0,l.jsx)(n.em,{children:"statement"}),"\u306B\u6E21\u3055\u308C\u308B\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30FC\u30D0\u3067\u306F\u5B9F\u884C\u3055\u308C\u307E\u305B\u3093\u3002\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5404\u30EC\u30B3\u30FC\u30C9\u306F\u4FEE\u6B63\u306E\u305F\u3081\u30ED\u30FC\u30AB\u30EB\u306E\u30EF\u30FC\u30AF\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u306B\u9001\u308A\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"APPLY TO SELECTION"})," \u3092\u5B9F\u884C\u3057\u3066\u3044\u308B\u9593\u3001\u51E6\u7406\u306E\u9032\u6357\u3092\u8868\u3059\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002",(0,l.jsx)(n.strong,{children:"APPLY TO SELECTION"})," \u3092\u547C\u3073\u51FA\u3059\u524D\u306B\u3001",(0,l.jsx)(n.a,{href:"/docs/ja/commands/messages-off",children:"MESSAGES OFF"})," \u3092\u4F7F\u7528\u3057\u3066\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u306E\u8868\u793A\u3092\u53D6\u308A\u6D88\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u304C\u8868\u793A\u3055\u308C\u308B\u3068\u3001\u30E6\u30FC\u30B6\u306F\u51E6\u7406\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u30C6\u30FC\u30D6\u30EB [Employees] \u4E2D\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u5927\u6587\u5B57\u306B\u5909\u66F4\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,l.jsx)(n.p,{children:"APPLY TO SELECTION\u5B9F\u884C\u4E2D\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u4FEE\u6B63\u3057\u3066\u3001\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u66F4\u65B0\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306FLockedSet\u3068\u547C\u3070\u308C\u308B\u30BB\u30C3\u30C8\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002APPLY TO SELECTION\u5B9F\u884C\u5F8C\u3001LockedSet\u3092\u30C6\u30B9\u30C8\u3057\u3066\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u306A\u304B\u3063\u305F\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30EB\u30FC\u30D7\u306F\u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u66F4\u65B0\u3055\u308C\u308B\u307E\u3067\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0Repeat\n\xa0\xa0\xa0\xa0APPLY TO SELECTION([Employees];[Employees]Last Name:=Uppercase([Employees]Last Name))\n\xa0\xa0\xa0\xa0USE SET("LockedSet")\xa0// \u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u307F\u3092\u9078\u629E\n\xa0Until(Records in set("LockedSet")=0)\xa0// \u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u306A\u304F\u306A\u308C\u3070\u7D42\u4E86\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Employees])\n\xa0APPLY TO SELECTION([Employees];M_Cap)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,l.jsx)(n.p,{children:"\u30E6\u30FC\u30B6\u304C\u9032\u6357\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u306E\u505C\u6B62\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306B0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30701\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/commands/edit-formula",children:"EDIT FORMULA"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.em,{children:"\u30BB\u30C3\u30C8"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(n.td,{children:"70"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},d=t.createContext(l);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);