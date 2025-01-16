"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81467"],{610377:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>r,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands/create-entity-selection","title":"Create entity selection","description":"*Create entity selection ( dsTable Object } ) : 4D.EntitySelection","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/create-entity-selection.md","sourceDirName":"commands","slug":"/commands/create-entity-selection","permalink":"/docs/ja/20-R7/commands/create-entity-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fcreate-entity-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-entity-selection","title":"Create entity selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE DATA FILE","permalink":"/docs/ja/20-R7/commands/create-data-file"},"next":{"title":"Data file","permalink":"/docs/ja/20-R7/commands/data-file"}}'),i=t("785893"),d=t("250065");let c={id:"create-entity-selection",title:"Create entity selection",displayed_sidebar:"docs"},l=void 0,r={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["*",(0,i.jsx)(n.strong,{children:"Create entity selection"})," ( ",(0,i.jsx)(n.em,{children:"dsTable"})," : Table { ; ",(0,i.jsx)(n.em,{children:"settings"})," : Object } ) : 4D.EntitySelection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dsTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5143\u3068\u306A\u308B\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u5C5E\u3059\u308B 4D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C6\u30FC\u30D6\u30EB"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"settings"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u30D3\u30EB\u30C9\u30AA\u30D7\u30B7\u30E7\u30F3: context"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,i.jsx)(n.td,{children:"4D.EntitySelection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"\u6307\u5B9A\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Create entity selection"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,i.jsx)(n.em,{children:"dsTable"})," \u3067\u6307\u5B9A\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/ORDA/entities#shareable-or-alterable-entity-selections",children:"\u8FFD\u52A0\u53EF\u80FD\u306A"}),"\u65B0\u898F\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u304F\u30B7\u30E7\u30F3\u3092\u3001\u540C\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u57FA\u3065\u3044\u3066\u30D3\u30EB\u30C9\u3057\u3066\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30BD\u30FC\u30C8\u3055\u308C\u305F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u5834\u5408\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/ORDA/dsmapping#%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E9%A0%86%E5%88%97%E3%81%82%E3%82%8A%E9%A0%86%E5%88%97%E3%81%AA%E3%81%97",children:"\u9806\u5217\u306E\u3042\u308B"})," \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059 (\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E\u4E26\u3073\u9806\u304C\u53D7\u3051\u7D99\u304C\u308C\u307E\u3059)\u3002 \u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u9806\u5217\u306E\u306A\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u9806\u5217\u306E\u306A\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u9806\u5217\u306E\u306A\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u9806\u5217\u306E\u306A\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002 \u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u30BD\u30FC\u30C8\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u9806\u5217\u306E\u306A\u3044\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/ds",children:(0,i.jsx)(n.code,{children:"ds"})})," \u306B\u304A\u3044\u3066 ",(0,i.jsx)(n.em,{children:"dsTable"})," \u304C\u516C\u958B\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002 \u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u5834\u5408\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002 \u30EA\u30E2\u30FC\u30C8\u30C7\u30FC\u30BF\u30B9\u30C8\u30A2\u306E\u5834\u5408\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4EFB\u610F\u306E ",(0,i.jsx)(n.em,{children:"settings"})," \u306B\u306F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u305B\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"context"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u9069\u7528\u3055\u308C\u3066\u3044\u308B ",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/ORDA/client-server-optimization",children:"\u6700\u9069\u5316\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8"})," \u306E\u30E9\u30D9\u30EB\u3002"]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"var $employees : cs.EmployeeSelection\nALL RECORDS([Employee])\n$employees:=Create entity selection([Employee])\n// $employees \u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u306F\u3001\n// Employee \u30C7\u30FC\u30BF\u30AF\u30E9\u30B9\u306E\u5168\u30A8\u30F3\u30C6\u30A3\u30C6\u30A3\u3078\u306E\u53C2\u7167\u304C\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/use-entity-selection",children:"USE ENTITY SELECTION"}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/API/DataClassClass#newselection",children:(0,i.jsx)(n.code,{children:"dataClass.newSelection()"})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"1512"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5"}),(0,i.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var s=t(667294);let i={},d=s.createContext(i);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);