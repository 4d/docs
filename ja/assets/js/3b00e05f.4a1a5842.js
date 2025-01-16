"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94843"],{520734:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-remove-table-rows","title":"VP REMOVE TABLE ROWS","description":"\u5C65\u6B74","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-remove-table-rows.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-table-rows","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-remove-table-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-remove-table-rows","title":"VP REMOVE TABLE ROWS"},"sidebar":"docs","previous":{"title":"VP REMOVE TABLE COLUMNS","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-remove-table-columns"},"next":{"title":"VP RESET SELECTION","permalink":"/docs/ja/20-R7/ViewPro/commands/vp-reset-selection"}}'),s=t("785893"),d=t("250065");let l={id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"\u5C65\u6B74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30EA\u30EA\u30FC\u30B9"}),(0,s.jsx)(n.th,{children:"\u5185\u5BB9"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R7"}),(0,s.jsx)(n.td,{children:"\u8FFD\u52A0"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP REMOVE TABLE ROWS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"row"})," : Integer {; ",(0,s.jsx)(n.em,{children:"count"})," : Integer {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro \u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Table name"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u884C\u306E\u524A\u9664\u306E\u958B\u59CB\u5834\u6240\u3092\u6307\u5B9A\u3059\u308B\u8868\u7D44\u307F\u5185\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u884C\u306E\u6570 (>0)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\u30B7\u30FC\u30C8\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9 (\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30AB\u30EC\u30F3\u30C8\u30B7\u30FC\u30C8)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VP REMOVE TABLE ROWS"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"tableName"})," \u3067\u6307\u5B9A\u3057\u305F\u8868\u7D44\u307F\u306E ",(0,s.jsx)(n.em,{children:"row"})," \u3067\u6307\u5B9A\u3057\u305F\u884C\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304B\u3089\u30011\u3064\u307E\u305F\u306F ",(0,s.jsx)(n.em,{children:"count"})," \u3067\u6307\u5B9A\u3057\u305F\u6570\u306E\u884C\u3092\u524A\u9664\u3057\u307E\u3059\u3002 \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5024\u3068\u30B9\u30BF\u30A4\u30EB\u3092\u524A\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B7\u30FC\u30C8\u3067\u306F\u306A\u304F\u3001",(0,s.jsx)(n.em,{children:"tableName"})," \u306E\u8868\u7D44\u307F\u304B\u3089\u884C\u3092\u524A\u9664\u3057\u307E\u3059\u3002 \u3057\u305F\u304C\u3063\u3066\u3001\u30B7\u30FC\u30C8\u306E\u7DCF\u884C\u6570\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u5F71\u97FF\u3092\u53D7\u3051\u307E\u305B\u3093\u3002 \u8868\u7D44\u307F\u3088\u308A\u4E0B\u5074\u306B\u30C7\u30FC\u30BF\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u524A\u9664\u3055\u308C\u305F\u884C\u306E\u6570\u306B\u5FDC\u3058\u3066\u81EA\u52D5\u7684\u306B\u4E0A\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"tableName"})," \u306E\u8868\u7D44\u307F\u304C ",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-set-data-context",children:"\u30C7\u30FC\u30BF\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8"})," \u306B\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u8981\u7D20\u3092\u524A\u9664\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"tableName"})," \u306E\u8868\u7D44\u307F\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u4F55\u3082\u8D77\u3053\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsx)(n.p,{children:'"dataTable" \u8868\u7D44\u307F\u306E 3\u884C\u76EE\u304B\u3089 2\u884C\u3092\u524A\u9664\u3057\u307E\u3059:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);