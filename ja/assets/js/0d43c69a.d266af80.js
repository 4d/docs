"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51313"],{456430:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/delay-process","title":"DELAY PROCESS","description":"DELAY PROCESS ( process ; duration )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delay-process.md","sourceDirName":"commands-legacy","slug":"/commands/delay-process","permalink":"/docs/ja/commands/delay-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelay-process.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delay-process","title":"DELAY PROCESS","slug":"/commands/delay-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current process name","permalink":"/docs/ja/commands/current-process-name"},"next":{"title":"EXECUTE ON CLIENT","permalink":"/docs/ja/commands/execute-on-client"}}'),d=s("785893"),t=s("250065");let c={id:"delay-process",title:"DELAY PROCESS",slug:"/commands/delay-process",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELAY PROCESS"})," ( ",(0,d.jsx)(n.em,{children:"process"})," ; ",(0,d.jsx)(n.em,{children:"duration"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"process"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D7\u30ED\u30BB\u30B9\u756A\u53F7"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"duration"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u9045\u5EF6\u6642\u9593 (tick)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["DELAY PROCESS\u306F\u3001",(0,d.jsx)(n.em,{children:"process"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u306E\u5B9F\u884C\u3092\u6307\u5B9A\u3057\u305Ftick\u6570 (1tick\uFF1D1/60\u79D2) \u3060\u3051\u9045\u3089\u305B\u307E\u3059\u3002\u3053\u306E\u9593\u3001\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306F\u51E6\u7406\u6642\u9593\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3002\u30D7\u30ED\u30BB\u30B9\u306E\u5B9F\u884C\u3092\u9045\u5EF6\u3057\u3066\u3082\u3001\u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306F\u30E1\u30E2\u30EA\u5185\u306B\u6B8B\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D7\u30ED\u30BB\u30B9\u306E\u9045\u308C\u30921tick\u4EE5\u4E0B\u306E\u6642\u9593\u3067\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001",(0,d.jsx)(n.em,{children:"duration"})," \u306B0.5\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30D7\u30ED\u30BB\u30B9\u306F1/2tick \u3060\u3051\u3001\u3064\u307E\u308A1/120\u79D2\u3060\u3051\u9045\u5EF6\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u30D7\u30ED\u30BB\u30B9\u304C\u65E2\u306B\u9045\u5EF6\u72B6\u614B\u306E\u5834\u5408\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u305D\u308C\u3092\u518D\u5EA6\u9045\u5EF6\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"duration"}),"\u306F\u6B8B\u6642\u9593\u306B\u52A0\u7B97\u3055\u308C\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u305D\u308C\u306B\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u3053\u308C\u4EE5\u4E0A\u9045\u5EF6\u3055\u305B\u305F\u304F\u306A\u3051\u308C\u3070\u30BC\u30ED (0) \u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30D7\u30ED\u30BB\u30B9\u304C\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DE\u30B7\u30F3\u304B\u3089\u3001\u30B5\u30FC\u30D0\u30DE\u30B7\u30F3\u3067\u52D5\u4F5C\u3059\u308B\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3 (",(0,d.jsx)(n.em,{children:"process"}),"<0) \u306B\u5BFE\u3057\u3066\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u30ED\u30C3\u30AF"})," \u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"process-number.md",title:"Process number",children:"Process number"}),"\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/hide-process",children:"HIDE PROCESS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/pause-process",children:"PAUSE PROCESS"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"323"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var r=s(667294);let d={},t=r.createContext(d);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);