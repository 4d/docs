"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3734"],{283360:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/delete-selection","title":"DELETE SELECTION","description":"DELETE SELECTION {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-selection.md","sourceDirName":"commands-legacy","slug":"/commands/delete-selection","permalink":"/docs/ja/20-R7/commands/delete-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-selection","title":"DELETE SELECTION","slug":"/commands/delete-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE SELECTION FROM ARRAY","permalink":"/docs/ja/20-R7/commands/create-selection-from-array"},"next":{"title":"DISPLAY SELECTION","permalink":"/docs/ja/20-R7/commands/display-selection"}}'),d=s("785893"),l=s("250065");let r={id:"delete-selection",title:"DELETE SELECTION",slug:"/commands/delete-selection",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE SELECTION"})," {( ",(0,d.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE SELECTION"}),"\u306F\u3001",(0,d.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u7A7A\u306E\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"DELETE SELECTION"}),"\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30EC\u30B3\u30FC\u30C9\u304C\u524A\u9664\u3055\u308C\u305F\u5F8C\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306F\u7A7A\u306B\u306A\u308A\u307E\u3059\u3002\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u51E6\u7406\u4E2D\u306B\u524A\u9664\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306F\u3001\u30C8\u30E9\u30F3\u30B6\u30AF\u30B7\u30E7\u30F3\u51E6\u7406\u304C\u5B9F\u884C\u307E\u305F\u306F\u53D6\u308A\u6D88\u3055\u308C\u308B\u307E\u3067\u3001\u4ED6\u306E\u30E6\u30FC\u30B6\u3084\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3066\u30ED\u30C3\u30AF\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u30EC\u30B3\u30FC\u30C9\u306E\u524A\u9664\u306F\u3001\u6052\u4E45\u7684\u306A\u64CD\u4F5C\u3067\u3059\u3002\u524A\u9664\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u5143\u306B\u623B\u3059\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30C6\u30FC\u30D6\u30EB\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u30FC\u306E\u300C\u30EC\u30B3\u30FC\u30C9\u3092\u5B8C\u5168\u306B\u524A\u9664\u300D\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u9078\u629E\u3092\u89E3\u9664\u3059\u308B\u3068\u3001",(0,d.jsx)(n.strong,{children:"DELETE SELECTION"}),"\u4F7F\u7528\u6642\u306E\u30EC\u30B3\u30FC\u30C9\u524A\u9664\u51E6\u7406\u3092\u9AD8\u901F\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (4D\u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9\u30DE\u30CB\u30E5\u30A2\u30EB\u306E",(0,d.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u5B8C\u5168\u306B\u524A\u9664"}),"\u53C2\u7167)\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F[People]\u30C6\u30FC\u30D6\u30EB\u306E\u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u30E6\u30FC\u30B6\u306F\u3053\u306E\u4E2D\u304B\u3089\u524A\u9664\u3057\u305F\u3044\u3082\u306E\u3092\u9078\u629E\u3057\u307E\u3059\u3002\u3053\u306E\u4F8B\u306B\u306F2\u3064\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u3042\u308A\u307E\u3059\u3002\u7B2C1\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u7B2C2\u306F\u524A\u9664\u30DC\u30BF\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002\u4EE5\u4E0B\u306F\u3001\u7B2C1\u306E\u30E1\u30BD\u30C3\u30C9\u3067\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([People])\xa0// \u5168\u30EC\u30B3\u30FC\u30C9\u3092\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\n\xa0FORM SET OUTPUT([People];"Listing")\xa0// \u30EC\u30B3\u30FC\u30C9\u3092\u4E00\u89A7\u3059\u308B\u30D5\u30A9\u30FC\u30E0\u3092\u8A2D\u5B9A\n\xa0DISPLAY SELECTION([People])\xa0// \u5168\u30EC\u30B3\u30FC\u30C9\u3092\u8868\u793A\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u6B21\u306B\u793A\u3059\u306E\u306F\u524A\u9664\u30DC\u30BF\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002\u3053\u306E\u30DC\u30BF\u30F3\u306F\u51FA\u529B\u30D5\u30A9\u30FC\u30E0\u306E\u30D5\u30C3\u30BF\u30A8\u30EA\u30A2\u306B\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u306F\u3001\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\u3059\u308B\u305F\u3081\u306B\u3001\u30E6\u30FC\u30B6\u304C\u9078\u629E\u3057\u305F\u30EC\u30B3\u30FC\u30C9 (UserSet) \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30E6\u30FC\u30B6\u304C\u30EC\u30B3\u30FC\u30C9\u30921\u4EF6\u3082\u9078\u629E\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001DELETE SELECTION\u306F\u4F55\u3082\u884C\u308F\u306A\u3044\u3068\u3044\u3046\u70B9\u306B\u6CE8\u76EE\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// \u672C\u5F53\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3059\u308B\u304B\u78BA\u8A8D\u3059\u308B\n\xa0CONFIRM("You selected "+String(Records in set("UserSet"))+" people to delete."\n\xa0+Char(13)+"Click OK to Delete them.")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0USE SET("UserSet")\xa0// \u30E6\u30FC\u30B6\u304C\u9078\u629E\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\n\xa0\xa0\xa0\xa0DELETE SELECTION([People])\xa0// \u30EC\u30B3\u30FC\u30C9\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u524A\u9664\n\xa0End if\n\xa0ALL RECORDS([People])\xa0// \u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u9078\u629E\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE SELECTION"}),'\u306E\u5B9F\u884C\u4E2D\u306B\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u898B\u3064\u304B\u308B\u3068\u3001\u305D\u306E\u30EC\u30B3\u30FC\u30C9\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306F\u3059\u3079\u3066"',(0,d.jsx)(n.strong,{children:"LockedSet"}),'"\u3068\u3044\u3046\u30BB\u30C3\u30C8\u306B\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002',(0,d.jsx)(n.strong,{children:"DELETE SELECTION"}),'\u306E\u5B9F\u884C\u5F8C\u3001"',(0,d.jsx)(n.strong,{children:"LockedSet"}),'"\u3092\u8ABF\u3079\u3066\u3001\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u5B58\u5728\u3057\u3066\u3044\u305F\u304B\u3069\u3046\u304B\u3092\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6B21\u306F\u30EB\u30FC\u30D7\u3092\u4F7F\u7528\u3057\u3066\u3059\u3079\u3066\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u524A\u9664\u3057\u307E\u3059:']}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0Repeat\xa0// \u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u3042\u308B\u9650\u308A\u7E70\u308A\u8FD4\u3059\n\xa0\xa0\xa0\xa0DELETE SELECTION([ThisTable])\n\xa0\xa0\xa0\xa0$lockedRecords:=Records in set("LockedSet")\n\xa0\xa0\xa0\xa0If($lockedRecords#0)\xa0// \u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u3042\u308C\u3070\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0USE SET("LockedSet")\xa0// \u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u306E\u307F\u3092\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3059\u308B\n\xa0\xa0\xa0\xa0End if\n\xa0Until($lockedRecords=0)\xa0// \u30ED\u30C3\u30AF\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u306A\u304F\u306A\u308B\u307E\u3067\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/display-selection",children:"DISPLAY SELECTION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/modify-selection",children:"MODIFY SELECTION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/truncate-table",children:"TRUNCATE TABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30BB\u30C3\u30C8"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u30ED\u30C3\u30AF"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"66"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,d.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let d={},l=t.createContext(d);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);