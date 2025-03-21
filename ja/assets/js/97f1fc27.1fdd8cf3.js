"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25924"],{127005:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>d,assets:()=>i,toc:()=>a,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/load-set","title":"LOAD SET","description":"LOAD SET ( {aTable ;} set ; document )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-set.md","sourceDirName":"commands-legacy","slug":"/commands/load-set","permalink":"/docs/ja/20-R7/commands/load-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-set","title":"LOAD SET","slug":"/commands/load-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is in set","permalink":"/docs/ja/20-R7/commands/is-in-set"},"next":{"title":"Records in set","permalink":"/docs/ja/20-R7/commands/records-in-set"}}'),t=s("785893"),c=s("250065");let l={id:"load-set",title:"LOAD SET",slug:"/commands/load-set",displayed_sidebar:"docs"},r=void 0,i={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LOAD SET"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;} ",(0,t.jsx)(n.em,{children:"set"})," ; ",(0,t.jsx)(n.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30BB\u30C3\u30C8\u306E\u5C5E\u3057\u3066\u3044\u308B\u30C6\u30FC\u30D6\u30EB\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"set"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u4F5C\u6210\u3059\u308B\u30BB\u30C3\u30C8\u306E\u540D\u524D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"document"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30BB\u30C3\u30C8\u3092\u4FDD\u5B58\u3057\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u540D\u524D"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["LOAD SET\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/save-set",title:"SAVE SET",children:"SAVE SET"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3057\u305F",(0,t.jsx)(n.em,{children:"document"}),"\u304B\u3089\u30BB\u30C3\u30C8\u3092\u30E1\u30E2\u30EA\u306B\u5FA9\u5143\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"document"}),"\u306B\u683C\u7D0D\u3055\u308C\u305F\u30BB\u30C3\u30C8\u306F\u3001",(0,t.jsx)(n.em,{children:"aTable"}),"\u304B\u3089\u4F5C\u6210\u3055\u308C\u3066\u306A\u3051\u308C\u3070\u3044\u3051\u307E\u305B\u3093\u3002\u30E1\u30E2\u30EA\u5185\u306B\u4F5C\u6210\u3055\u308C\u305F\u30BB\u30C3\u30C8\u306F\u65E2\u306B\u540C\u3058\u30BB\u30C3\u30C8\u304C\u5B58\u5728\u3059\u308B\u3068\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5F15\u6570 ",(0,t.jsx)(n.em,{children:"document"}),"\u306F\u3001\u30BB\u30C3\u30C8\u3092\u4FDD\u5B58\u3057\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3067\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u30BB\u30C3\u30C8\u3068\u540C\u3058\u540D\u524D\u3067\u3042\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002",(0,t.jsx)(n.em,{children:"document"}),'\u306B\u5BFE\u3057\u3066\u7A7A\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001 "\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F" \u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30E6\u30FC\u30B6\u306F\u3053\u3053\u3067\u5FA9\u5143\u3059\u308B\u30BB\u30C3\u30C8\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,t.jsx)(n.p,{children:"\u30BB\u30C3\u30C8\u306F\u3001\u305D\u306E\u30BB\u30C3\u30C8\u304C\u4F5C\u6210\u3055\u308C\u305F\u6642\u70B9\u306E\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u8868\u73FE\u3057\u3066\u3044\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002\u30BB\u30C3\u30C8\u306B\u5BFE\u5FDC\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304C\u66F4\u65B0\u3055\u308C\u308B\u3068\u3001\u30BB\u30C3\u30C8\u306F\u6B63\u78BA\u306A\u3082\u306E\u3067\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3059\u308B\u30BB\u30C3\u30C8\u306F\u3001\u983B\u7E41\u306B\u66F4\u65B0\u3055\u308C\u308B\u3053\u3068\u306E\u306A\u3044\u30EC\u30B3\u30FC\u30C9\u3067\u69CB\u6210\u3059\u308B\u3079\u304D\u3067\u3059\u3002\u30BB\u30C3\u30C8\u3092\u7121\u52B9\u306B\u3059\u308B\u64CD\u4F5C\u3068\u3057\u3066\u306F\u3001\u30BB\u30C3\u30C8\u306E\u30EC\u30B3\u30FC\u30C9\u306E\u4FEE\u6B63\u3001\u30BB\u30C3\u30C8\u306E\u30EC\u30B3\u30FC\u30C9\u306E\u524A\u9664\u3001\u30BB\u30C3\u30C8\u3092\u6C7A\u5B9A\u3057\u305F\u6761\u4EF6\u306E\u5909\u66F4\u7B49\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001LOAD SET\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u201CNY Acme\u201D\u306E\u30BB\u30C3\u30C8\u3092\u5FA9\u5143\u3057\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LOAD SET([Companies];"NY Acme";"NYAcmeSt")\xa0//\u30BB\u30C3\u30C8\u3082\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3057\u307E\u3059\n\xa0USE SET("NY Acme")\xa0//\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092NY Acme\u306E\u30BB\u30C3\u30C8\u306B\u5165\u308C\u66FF\u3048\u307E\u3059\n\xa0CLEAR SET("NY Acme")\xa0//\u30BB\u30C3\u30C8\u3092\u30E1\u30E2\u30EA\u304B\u3089\u6D88\u53BB\u3057\u307E\u3059\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(n.p,{children:'"\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F" \u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3067 "\u30AD\u30E3\u30F3\u30BB\u30EB" \u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5834\u5408\u3084\u30ED\u30FC\u30C9\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u305F\u5834\u5408\u306F\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306F1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002'}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/save-set",children:"SAVE SET"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"185"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var d=s(667294);let t={},c=d.createContext(t);function l(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);