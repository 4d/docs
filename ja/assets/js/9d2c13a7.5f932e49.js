"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26813"],{943841:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-insert-table-columns","title":"VP INSERT TABLE COLUMNS","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-insert-table-columns.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-insert-table-columns","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-insert-table-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-table-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-insert-table-columns","title":"VP INSERT TABLE COLUMNS"},"sidebar":"docs","previous":{"title":"VP INSERT ROWS","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-insert-rows"},"next":{"title":"VP INSERT TABLE ROWS","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-insert-table-rows"}}'),r=s("785893"),d=s("250065");let i={id:"vp-insert-table-columns",title:"VP INSERT TABLE COLUMNS"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,r.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP INSERT TABLE COLUMNS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"column"})," : Integer {; ",(0,r.jsx)(n.em,{children:"count"})," : Integer {; ",(0,r.jsx)(n.em,{children:"insertAfter"})," : Integer {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Table name"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u5217\u306E\u633F\u5165\u5834\u6240\u3092\u6307\u5B9A\u3059\u308B\u8868\u7D44\u307F\u5185\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"count"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u633F\u5165\u3059\u308B\u5217\u306E\u6570 (>0)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"insertAfter"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"vk table insert before"})," \u307E\u305F\u306F ",(0,r.jsx)(n.code,{children:"vk table insert after"})]}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"VP INSERT TABLE COLUMNS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"tableName"})," \u3067\u6307\u5B9A\u3057\u305F\u8868\u7D44\u307F\u306E ",(0,r.jsx)(n.em,{children:"column"})," \u3067\u6307\u5B9A\u3057\u305F\u5217\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306B\u30011\u3064\u307E\u305F\u306F ",(0,r.jsx)(n.em,{children:"count"})," \u3067\u6307\u5B9A\u3057\u305F\u6570\u306E\u7A7A\u306E\u5217\u3092\u633F\u5165\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u5217\u3092\u633F\u5165\u3057\u305F\u5834\u5408\u3001\u901A\u5E38\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u305D\u306E\u5185\u5BB9\u3092\u7DE8\u96C6\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"insertAfter"})," \u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u4EE5\u4E0B\u306E\u5B9A\u6570\u306E\u3044\u305A\u308C\u304B\u3092\u6E21\u3059\u3053\u3068\u3067\u3001",(0,r.jsx)(n.em,{children:"column"})," \u306B\u6307\u5B9A\u3057\u305F\u5217\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u524D\u307E\u305F\u306F\u5F8C\u306B\u5217\u3092\u633F\u5165\u3059\u308B\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(n.th,{children:"\u5024"}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk table insert before"})}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"column"})," \u306E\u524D\u306B\u5217\u3092\u633F\u5165\u3057\u307E\u3059 (\u7701\u7565\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vk table insert after"})}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"column"})," \u306E\u5F8C\u306B\u5217\u3092\u633F\u5165\u3057\u307E\u3059"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B7\u30FC\u30C8\u5185\u3067\u306F\u306A\u304F\u3001",(0,r.jsx)(n.em,{children:"tableName"})," \u306E\u8868\u7D44\u307F\u306B\u5217\u3092\u633F\u5165\u3057\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30B7\u30FC\u30C8\u306E\u7DCF\u5217\u6570\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u5F71\u97FF\u3092\u53D7\u3051\u307E\u305B\u3093\u3002 \u8868\u7D44\u307F\u3088\u308A\u53F3\u5074\u306B\u30C7\u30FC\u30BF\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u633F\u5165\u3055\u308C\u305F\u5217\u306E\u6570\u306B\u5FDC\u3058\u3066\u81EA\u52D5\u7684\u306B\u53F3\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tableName"})," \u306E\u8868\u7D44\u307F\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u3042\u308B\u3044\u306F\u30B7\u30FC\u30C8\u306B\u5341\u5206\u306A\u30B9\u30DA\u30FC\u30B9\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u4F55\u3082\u8D77\u3053\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"})," \u304A\u3088\u3073 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})," \u306E\u4F8B\u984C\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})]})]})}function j(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);