"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28161"],{741803:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/reduce-restore-window","title":"REDUCE RESTORE WINDOW","description":"REDUCE RESTORE WINDOW ( window )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/reduce-restore-window.md","sourceDirName":"commands-legacy","slug":"/commands/reduce-restore-window","permalink":"/docs/ja/commands/reduce-restore-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freduce-restore-window.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"reduce-restore-window","title":"REDUCE RESTORE WINDOW","slug":"/commands/reduce-restore-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDRAW WINDOW","permalink":"/docs/ja/commands/redraw-window"},"next":{"title":"RESIZE FORM WINDOW","permalink":"/docs/ja/commands/resize-form-window"}}'),r=d("785893"),t=d("250065");let i={id:"reduce-restore-window",title:"REDUCE RESTORE WINDOW",slug:"/commands/reduce-restore-window",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REDUCE RESTORE WINDOW"})," ( ",(0,r.jsx)(n.em,{children:"window"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"window"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u53C2\u7167\u756A\u53F7"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REDUCE RESTORE WINDOW"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"window"})," \u5F15\u6570\u306B\u53C2\u7167\u3092\u6E21\u3057\u305F\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u3001Windows\u306E\u30BF\u30B9\u30AF\u30D0\u30FC\u307E\u305F\u306FmacOS \u306EDock\u3078\u53CE\u7D0D\u3001\u307E\u305F\u306F\u305D\u3053\u304B\u3089\u5C55\u958B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u72B6\u614B\u3092\u5207\u308A\u66FF\u3048\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u30BF\u30B9\u30AF\u30D0\u30FC\u307E\u305F\u306FDock\u3078\u3068\u53CE\u7D0D\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u53CE\u7D0D\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u4EE5\u524D\u306E\u72B6\u614B\u3078\u3068\u5FA9\u5143\u3057\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6CE8\u610F:"})," macOS \u3067\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u52D5\u4F5C\u306F\u975E\u540C\u671F\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/is-window-reduced",children:"Is window reduced"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/maximize-window",children:"MAXIMIZE WINDOW"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/minimize-window",children:"MINIMIZE WINDOW"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1829"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return i}});var s=d(667294);let r={},t=s.createContext(r);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);