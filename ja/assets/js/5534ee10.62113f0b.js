"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31299"],{378559:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var l=JSON.parse('{"id":"commands-legacy/log-file","title":"Log File","description":"Log File  : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-file.md","sourceDirName":"commands-legacy","slug":"/commands/log-file","permalink":"/docs/ja/commands/log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-file","title":"Log File","slug":"/commands/log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTEGRATE MIRROR LOG FILE","permalink":"/docs/ja/commands/integrate-mirror-log-file"},"next":{"title":"LOG FILE TO JSON","permalink":"/docs/ja/commands/log-file-to-json"}}'),s=t("785893"),i=t("250065");let o={id:"log-file",title:"Log File",slug:"/commands/log-file",displayed_sidebar:"docs"},r=void 0,d={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log File"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u30ED\u30F3\u30B0\u540D"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log File"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u958B\u3044\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306E\u30ED\u30F3\u30B0\u540D\uFF08\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u542B\u3080\u30D5\u30A1\u30A4\u30EB\u306E\u5B8C\u5168\u30D1\u30B9\u540D\uFF09\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u7A7A\u306E\u6587\u5B57\u5217\u3092\u8FD4\u3057\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F1\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306B\u8FD4\u3055\u308C\u308B\u30D1\u30B9\u540D\u306F\u30AB\u30EC\u30F3\u30C8\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u8868\u8A18\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8B66\u544A:"})," 4D Client \u30DE\u30B7\u30F3\u304B\u3089\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408\u3001\u30ED\u30F3\u30B0\u540D\u3067\u306F\u306A\u304F\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u307F\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u306A\u3057\u3067\u904B\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u30701\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5B9F\u884C\u4E2D\u4F55\u3089\u304B\u306E\u7406\u7531\u3067\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u5229\u7528\u4E0D\u80FD\u306B\u306A\u3063\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC1274\u304C\u751F\u6210\u3055\u308C\u30014D Server\u306F\u30C7\u30FC\u30BF\u306E\u66F8\u304D\u8FBC\u307F\u3092\u4E00\u5207\u8A31\u53EF\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u30ED\u30B0\u30D5\u30A1\u30A4\u30EB\u304C\u5229\u7528\u53EF\u80FD\u306B\u306A\u3063\u305F\u306E\u3061\u3001\u30D5\u30EB\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u884C\u308F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/ja/commands/select-log-file",children:"SELECT LOG FILE"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var l=t(667294);let s={},i=l.createContext(s);function o(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);