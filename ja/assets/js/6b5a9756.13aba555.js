"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16110"],{753017:function(s,n,e){e.r(n),e.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/count-tasks","title":"Count tasks","description":"Count tasks  : Integer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/count-tasks.md","sourceDirName":"commands-legacy","slug":"/commands/count-tasks","permalink":"/docs/ja/commands/count-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-tasks.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"count-tasks","title":"Count tasks","slug":"/commands/count-tasks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ABORT PROCESS BY ID","permalink":"/docs/ja/commands/abort-process-by-id"},"next":{"title":"Count user processes","permalink":"/docs/ja/commands/count-user-processes"}}'),r=e("785893"),c=e("250065");let d={id:"count-tasks",title:"Count tasks",slug:"/commands/count-tasks",displayed_sidebar:"docs"},o=void 0,a={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function l(s){let n={a:"a",br:"br",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Count tasks"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u958B\u3044\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u306E (\u30AB\u30FC\u30CD\u30EB\u30D7\u30ED\u30BB\u30B9\u3092\u542B\u3080)"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Count tasks"})," \u306F4D\u30B9\u30BF\u30F3\u30C9\u30A2\u30ED\u30F3\u30014D\u30EA\u30E2\u30FC\u30C8\u3001\u3042\u308B\u3044\u306F4D Server(\u30B9\u30C8\u30A2\u30C9\u30D7\u30ED\u30B7\u30FC\u30B8\u30E3\u30FC)\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u304A\u3051\u308B\u3001\u751F\u304D\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u306E\u756A\u53F7\u306E\u6700\u3082\u9AD8\u3044\u3082\u306E\u3092\u8FD4\u3057\u307E\u3059\u3002\u30D7\u30ED\u30BB\u30B9\u306F\u4F5C\u6210\u3055\u308C\u305F\u9806\u756A\u306B\u756A\u53F7\u304C\u632F\u3089\u308C\u307E\u3059\u3002\u30BB\u30C3\u30B7\u30E7\u30F3\u4E2D\u306B\u30A2\u30DC\u30FC\u30C8\u3055\u308C\u305F\u30D7\u30ED\u30BB\u30B9\u304C\u306A\u3044\u9650\u308A\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u958B\u304B\u308C\u3066\u3044\u308B\u30D7\u30ED\u30BB\u30B9\u306E\u7DCF\u6570\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u6570\u306B\u306F\u30014D\u304C\u81EA\u52D5\u7684\u306B\u7BA1\u7406\u3059\u308B\u3082\u306E\u3082\u542B\u3081\u3066\u3059\u3079\u3066\u306E\u30D7\u30ED\u30BB\u30B9\u304C\u542B\u307E\u308C\u307E\u3059\u3002\u3053\u306E\u4E2D\u306B\u306F\u30E1\u30A4\u30F3\u30D7\u30ED\u30BB\u30B9\u3001\u30C7\u30B6\u30A4\u30F3\u30D7\u30ED\u30BB\u30B9\u3001\u30AD\u30E3\u30C3\u30B7\u30E5\u30DE\u30CD\u30FC\u30B8\u30E3\u30D7\u30ED\u30BB\u30B9\u3001\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D7\u30ED\u30BB\u30B9\u3001\u304A\u3088\u3073Web\u30B5\u30FC\u30D0\u30D7\u30ED\u30BB\u30B9\u304C\u542B\u307E\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/process-state",title:"Process state",children:"Process state"}),"\u3068\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/count-user-processes",children:"Count user processes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/count-users",children:"Count users"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/process-info",children:"Process info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/process-state",children:"Process state"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"335"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(s={}){let{wrapper:n}={...(0,c.a)(),...s.components};return n?(0,r.jsx)(n,{...s,children:(0,r.jsx)(l,{...s})}):l(s)}},250065:function(s,n,e){e.d(n,{Z:function(){return o},a:function(){return d}});var t=e(667294);let r={},c=t.createContext(r);function d(s){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof s?s(n):{...n,...s}},[n,s])}function o(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:d(s.components),t.createElement(c.Provider,{value:n},s.children)}}}]);