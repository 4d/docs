"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12801"],{371214:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-current-printer","title":"Get current printer","description":"Get current printer  : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-current-printer.md","sourceDirName":"commands-legacy","slug":"/commands/get-current-printer","permalink":"/docs/ja/commands/get-current-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-current-printer.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-current-printer","title":"Get current printer","slug":"/commands/get-current-printer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLOSE PRINTING JOB","permalink":"/docs/ja/commands/close-printing-job"},"next":{"title":"Get print marker","permalink":"/docs/ja/commands/get-print-marker"}}'),s=r("785893"),c=r("250065");let d={id:"get-current-printer",title:"Get current printer",slug:"/commands/get-current-printer",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(e){let n={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get current printer"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30EA\u30F3\u30BF\u30FC\u540D"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get current printer"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5B9A\u7FA9\u3055\u308C\u305F\u30AB\u30EC\u30F3\u30C8\u30D7\u30EA\u30F3\u30BF\u30FC\u540D\u3092\u8FD4\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u30674D\u306E\u8D77\u52D5\u6642\u306B\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u30D7\u30EA\u30F3\u30BF\u30FC\u304C\u30AB\u30EC\u30F3\u30C8\u30D7\u30EA\u30F3\u30BF\u30FC\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30D7\u30EA\u30F3\u30C8\u30B5\u30FC\u30D0\u30FC (\u30B9\u30D7\u30FC\u30E9\u30FC) \u3092\u4F7F\u7528\u3057\u3066\u30AB\u30EC\u30F3\u30C8\u30D7\u30EA\u30F3\u30BF\u30FC\u3092\u7BA1\u7406\u3057\u3066\u3044\u308B\u5834\u5408\u3001\u5B8C\u5168\u306A\u30A2\u30AF\u30BB\u30B9\u30D1\u30B9 (Windows) \u307E\u305F\u306F\u30B9\u30D7\u30FC\u30E9\u30FC\u306E\u540D\u524D (macOS) \u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528\u3067\u304D\u308B\u30D7\u30EA\u30F3\u30BF\u30FC\u306E\u4E00\u89A7\u304A\u3088\u3073\u8FFD\u52A0\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/printers-list",children:"PRINTERS LIST"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30D7\u30EA\u30F3\u30BF\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/set-current-printer",children:"SET CURRENT PRINTER"}),"\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," ",(0,s.jsx)(n.a,{href:"/docs/ja/commands/set-current-printer",children:"SET CURRENT PRINTER"})," \u3067 Generic PDF driver \u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3057\u3066\u3044\u308B\u5834\u5408\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/get-current-printer",children:"Get current printer"}),' \u30B3\u30DE\u30F3\u30C9\u306E\u623B\u308A\u5024\u306F "_4d_pdf_printer" \u307E\u305F\u306F\u5B9F\u969B\u306E PDF \u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u540D\u79F0\u3067\u3059\u3002']}),"\n",(0,s.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u30D7\u30EA\u30F3\u30BF\u30FC\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/printers-list",children:"PRINTERS LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/set-current-printer",children:"SET CURRENT PRINTER"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"788"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},c=t.createContext(s);function d(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);