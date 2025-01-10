"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44733"],{159670:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/create-set","title":"CREATE SET","description":"CREATE SET ( {aTable ;} set )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-set.md","sourceDirName":"commands-legacy","slug":"/commands/create-set","permalink":"/docs/ja/commands/create-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-set","title":"CREATE SET","slug":"/commands/create-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE EMPTY SET","permalink":"/docs/ja/commands/create-empty-set"},"next":{"title":"CREATE SET FROM ARRAY","permalink":"/docs/ja/commands/create-set-from-array"}}'),r=t("785893"),d=t("250065");let c={id:"create-set",title:"CREATE SET",slug:"/commands/create-set",displayed_sidebar:"docs"},l=void 0,a={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE SET"})," ( {",(0,r.jsx)(n.em,{children:"aTable"})," ;} ",(0,r.jsx)(n.em,{children:"set"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"set"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u65B0\u898F\u306B\u4F5C\u6210\u3059\u308B\u30BB\u30C3\u30C8\u306E\u540D\u524D"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["CREATE SET\u306F\u3001",(0,r.jsx)(n.em,{children:"aTable"}),"\u306B\u5BFE\u3057\u3066\u65B0\u3057\u3044\u30BB\u30C3\u30C8",(0,r.jsx)(n.em,{children:"set"}),"\u3092\u4F5C\u6210\u3057\u3001",(0,r.jsx)(n.em,{children:"set"}),"\u306B\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5185\u5BB9\u3092\u7F6E\u304D\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u30DD\u30A4\u30F3\u30BF\u306F",(0,r.jsx)(n.em,{children:"set"}),"\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.em,{children:"set"}),"\u306B\u5BFE\u3057\u3066",(0,r.jsx)(n.a,{href:"/docs/ja/commands/use-set",title:"USE SET",children:"USE SET"}),"\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3068\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u5FA9\u5143\u3055\u308C\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u30BB\u30C3\u30C8\u306B\u5BFE\u3057\u3066\u30BD\u30FC\u30C8\u9806\u5E8F\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002",(0,r.jsx)(n.em,{children:"set"}),"\u304C\u4F7F\u7528\u3055\u308C\u308B\u3068\u304D\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u9806\u5E8F\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u65E2\u306B\u540C\u3058\u540D\u524D\u306E\u30BB\u30C3\u30C8\u304C\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u30BB\u30C3\u30C8\u3092\u6D88\u53BB\u3057\u65B0\u3057\u3044\u30BB\u30C3\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u306F\u691C\u7D22\u3092\u884C\u3063\u305F\u5F8C\u3067\u65B0\u3057\u3044\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\u3057\u3001\u305D\u308C\u3092\u30C7\u30A3\u30B9\u30AF\u306B\u4FDD\u5B58\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([People])\xa0// \u30E6\u30FC\u30B6\u304C\u691C\u7D22\u3092\u884C\u3046\n\xa0CREATE SET([People];"SearchSet")\xa0// \u65B0\u3057\u304F\u30BB\u30C3\u30C8\u3092\u4F5C\u6210\n\xa0SAVE SET("SearchSet";"MySearch")\xa0// \u30C7\u30A3\u30B9\u30AF\u306B\u30BB\u30C3\u30C8\u3092\u4FDD\u5B58\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/clear-set",children:"CLEAR SET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/create-empty-set",children:"CREATE EMPTY SET"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"116"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let r={},d=s.createContext(r);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);