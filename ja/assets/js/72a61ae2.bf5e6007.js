"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70096"],{62413:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>d,assets:()=>c,toc:()=>i,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/reload-external-data","title":"RELOAD EXTERNAL DATA","description":"RELOAD EXTERNAL DATA ( aField )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/reload-external-data.md","sourceDirName":"commands-legacy","slug":"/commands/reload-external-data","permalink":"/docs/ja/20-R8/commands/reload-external-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freload-external-data.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reload-external-data","title":"RELOAD EXTERNAL DATA","slug":"/commands/reload-external-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REGENERATE MISSING TABLE","permalink":"/docs/ja/20-R8/commands/regenerate-missing-table"},"next":{"title":"RESUME INDEXES","permalink":"/docs/ja/20-R8/commands/resume-indexes"}}'),s=t("785893"),r=t("250065");let a={id:"reload-external-data",title:"RELOAD EXTERNAL DATA",slug:"/commands/reload-external-data",displayed_sidebar:"docs"},l=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"})," ( ",(0,s.jsx)(n.em,{children:"aField"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aField"}),(0,s.jsx)(n.td,{children:"Text, Blob, Picture, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u304B\u3089\u30EA\u30ED\u30FC\u30C9\u3092\u884C\u3046\u30D5\u30A3\u30FC\u30EB\u30C9"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"}),"\u30B3\u30DE\u30F3\u30C9\u306FBLOB\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u3001\u304A\u3088\u3073\u30C6\u30AD\u30B9\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u5185\u5BB9\u3092\u30E1\u30E2\u30EA\u306B\u30EA\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u30C7\u30FC\u30BF\u304C\u30C7\u30A3\u30B9\u30AF\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u3001\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u3088\u3063\u3066\u30C7\u30A3\u30B9\u30AF\u30D5\u30A1\u30A4\u30EB\u304C\u66F4\u65B0\u3055\u308C\u305F\u3088\u3046\u306A \u5834\u5408\u306B\u4F7F\u7528\u3057\u307E\u3059 (\u5916\u90E8\u30B9\u30C8\u30EC\u30FC\u30B8\u30D5\u30A1\u30A4\u30EB\u306F\u5E38\u306B\u66F8\u304D\u8FBC\u307F\u53EF\u80FD\u3067\u3059)\u3002\u4F8B\u3048\u3070\u30D4\u30AF\u30C1\u30E3\u30FC\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u79F0\u3055\u308C\u308B\u30D4\u30AF\u30C1\u30E3\u30FC\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u30FC\u30A8\u30C7\u30A3\u30BF\u30FC\u3067\u66F4\u65B0\u3057\u4FDD\u5B58\u3059\u308B\u3053\u3068\u304C\u53EF \u80FD\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u304A\u3044\u3066\u3001\u30D5\u30A9\u30FC\u30E0\u4E0A\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u305D\u306E\u5185\u5BB9\u3092\u518D\u63CF\u753B\u3059\u308B\u305F\u3081\u306B",(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C7\u30FC\u30BF\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,s.jsx)(n.strong,{children:"RELOAD EXTERNAL DATA"}),"\u30B3 \u30DE\u30F3\u30C9\u306F4D\u30ED\u30FC\u30AB\u30EB\u30E2\u30FC\u30C9\u304A\u3088\u30734D Server\u4E0A\u3067\u306E\u307F\u52D5\u4F5C\u3057\u307E\u3059\u30024D\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u3067\u500B\u3005\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30EA\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u30024D\u30EA\u30E2\u30FC\u30C8\u30E2\u30FC\u30C9\u306E\u5834\u5408 (\u4F8B\u3048\u3070",(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/commands/load-record",children:"LOAD RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066) \u30EC\u30B3\u30FC\u30C9\u5168\u4F53\u3092\u30EA\u30ED\u30FC\u30C9\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-external-data-path",children:"SET EXTERNAL DATA PATH"})}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1135"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var d=t(667294);let s={},r=d.createContext(s);function a(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);