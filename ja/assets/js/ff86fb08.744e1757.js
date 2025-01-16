"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80898"],{764468:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/pause-process","title":"PAUSE PROCESS","description":"PAUSE PROCESS ( process )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/pause-process.md","sourceDirName":"commands-legacy","slug":"/commands/pause-process","permalink":"/docs/ja/commands/pause-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpause-process.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"pause-process","title":"PAUSE PROCESS","slug":"/commands/pause-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New process","permalink":"/docs/ja/commands/new-process"},"next":{"title":"Process aborted","permalink":"/docs/ja/commands/process-aborted"}}'),c=n("785893"),d=n("250065");let t={id:"pause-process",title:"PAUSE PROCESS",slug:"/commands/pause-process",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"PAUSE PROCESS"})," ( ",(0,c.jsx)(s.em,{children:"process"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u5F15\u6570"}),(0,c.jsx)(s.th,{children:"\u578B"}),(0,c.jsx)(s.th,{}),(0,c.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,c.jsx)(s.tbody,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"process"}),(0,c.jsx)(s.td,{children:"Integer"}),(0,c.jsx)(s.td,{children:"\u2192"}),(0,c.jsx)(s.td,{children:"\u30D7\u30ED\u30BB\u30B9\u756A\u53F7"})]})})]}),"\n",(0,c.jsx)(s.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,c.jsxs)(s.p,{children:["PAUSE PROCESS\u306F\u3001",(0,c.jsx)(s.a,{href:"/docs/ja/commands/resume-process",title:"RESUME PROCESS",children:"RESUME PROCESS"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u518D\u958B\u3055\u308C\u308B\u307E\u3067",(0,c.jsx)(s.em,{children:"process"}),"\u306E\u5B9F\u884C\u3092\u505C\u6B62\u3057\u307E\u3059\u3002\u3053\u306E\u9593",(0,c.jsx)(s.em,{children:"process"}),"\u306F\u30DE\u30B7\u30F3\u306E\u51E6\u7406\u6642\u9593\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3002\u30D7\u30ED\u30BB\u30B9\u306F\u505C\u6B62\u3055\u308C\u3066\u3082\u30E1\u30E2\u30EA\u5185\u306B\u6B8B\u308A\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"process"}),"\u304C\u65E2\u306B\u505C\u6B62\u3057\u3066\u3044\u305F\u5834\u5408\u306F\u3001PAUSE PROCESS\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002\u30D7\u30ED\u30BB\u30B9\u304C",(0,c.jsx)(s.a,{href:"/docs/ja/commands/delay-process",title:"DELAY PROCESS",children:"DELAY PROCESS"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u9045\u5EF6\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3082\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306F\u505C\u6B62\u3055\u308C\u307E\u3059\u3002",(0,c.jsx)(s.a,{href:"/docs/ja/commands/resume-process",title:"RESUME PROCESS",children:"RESUME PROCESS"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5373\u5EA7\u306B\u30D7\u30ED\u30BB\u30B9\u3092\u518D\u958B\u3057\u307E\u3059\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u30D7\u30ED\u30BB\u30B9\u306E\u5B9F\u884C\u3092\u505C\u6B62\u3057\u3066\u3044\u308B\u9593\u306F\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5165\u529B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u306B\u306F\u3001\u30E6\u30FC\u30B6\u306E\u6DF7\u4E71\u3092\u907F\u3051\u308B\u305F\u3081\u306B\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002",(0,c.jsx)(s.em,{children:"process"}),"\u304C\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"\u8B66\u544A:"})," PAUSE PROCESS\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u3042\u306A\u305F\u304C\u958B\u59CB\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u5185\u3060\u3051\u3067\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002PAUSE PROCESS\u30B3\u30DE\u30F3\u30C9\u306F\u30E1\u30A4\u30F3\u30D7\u30ED\u30BB\u30B9\u306B\u4F55\u3082\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"Note:"})," \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u3001\u30B5\u30FC\u30D0\u30FC\u30DE\u30B7\u30F3\u3067\u52D5\u4F5C\u3059\u308B\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3 (",(0,c.jsx)(s.em,{children:"process"}),"<0) \u306B\u5BFE\u3057\u3066\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"]}),"\n",(0,c.jsx)(s.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/docs/ja/commands/abort-process-by-id",children:"ABORT PROCESS BY ID"}),(0,c.jsx)(s.br,{}),"\n",(0,c.jsx)(s.a,{href:"/docs/ja/commands/delay-process",children:"DELAY PROCESS"}),(0,c.jsx)(s.br,{}),"\n",(0,c.jsx)(s.a,{href:"/docs/ja/commands/hide-process",children:"HIDE PROCESS"}),(0,c.jsx)(s.br,{}),"\n",(0,c.jsx)(s.a,{href:"/docs/ja/commands/resume-process",children:"RESUME PROCESS"})]}),"\n",(0,c.jsx)(s.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{}),(0,c.jsx)(s.th,{})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,c.jsx)(s.td,{children:"319"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,c.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return t}});var r=n(667294);let c={},d=r.createContext(c);function t(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);