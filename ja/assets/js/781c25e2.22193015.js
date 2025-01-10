"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70437"],{670044:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>h,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/trigger-properties","title":"TRIGGER PROPERTIES","description":"TRIGGER PROPERTIES ( triggerLevel ; dbEvent ; tableNum ; recordNum )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-properties.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-properties","permalink":"/docs/ja/commands/trigger-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trigger-properties","title":"TRIGGER PROPERTIES","slug":"/commands/trigger-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Trigger level","permalink":"/docs/ja/commands/trigger-level"},"next":{"title":"User Interface","permalink":"/docs/ja/category/user-interface"}}'),s=r("785893"),d=r("250065");let i={id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," ( ",(0,s.jsx)(n.em,{children:"triggerLevel"})," ; ",(0,s.jsx)(n.em,{children:"dbEvent"})," ; ",(0,s.jsx)(n.em,{children:"tableNum"})," ; ",(0,s.jsx)(n.em,{children:"recordNum"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"triggerLevel"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30C8\u30EA\u30AC\u5B9F\u884C\u30B5\u30A4\u30AF\u30EB\u30EC\u30D9\u30EB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dbEvent"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30D9\u30F3\u30C8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u5F71\u97FF\u3092\u53D7\u3051\u308B\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u5F71\u97FF\u3092\u53D7\u3051\u308B\u30EC\u30B3\u30FC\u30C9\u756A\u53F7"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,s.jsx)(n.em,{children:"triggerLevel"}),"\u306B\u6E21\u3059\u30C8\u30EA\u30AC\u30FC\u306E\u5B9F\u884C\u30EC\u30D9\u30EB\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002\u30C8\u30EA\u30AC\u30FC\u5B9F\u884C\u30EC\u30D9\u30EB\u306E\u30AB\u30B9\u30B1\u30FC\u30C9\u306B\u57FA\u3065\u3044\u3066\u7570\u306A\u308B\u52D5\u4F5C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001",(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"}),"\u3068",(0,s.jsx)(n.a,{href:"/docs/ja/commands/trigger-level",children:"Trigger level"}),"\u3092\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F",(0,s.jsx)(n.em,{children:"\u30C8\u30EA\u30AC"}),"\u306B\u3042\u308B\u30C8\u30EA\u30AC\u30FC\u306E\u30AB\u30B9\u30B1\u30FC\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5B58\u5728\u3057\u306A\u3044\u30C8\u30EA\u30AC\u30FC\u5B9F\u884C\u30EC\u30D9\u30EB\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u3059\u3079\u3066\u306E\u5F15\u6570\u306B0\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30C8\u30EA\u30AC\u30FC\u5B9F\u884C\u30EC\u30D9\u30EB\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E\u304C\u3001\u5F15\u6570 ",(0,s.jsx)(n.em,{children:"dbEvent"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(n.em,{children:"Trigger Events"}),"\u30C6\u30FC\u30DE\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5B9A\u7FA9\u6E08\u307F\u5B9A\u6570\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5B9A\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{children:"\u5024"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deleting Record Event"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving New Record Event"}),(0,s.jsx)(n.td,{children:"\u500D\u9577\u6574\u6570"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u30C8\u30EA\u30AC\u30FC\u5B9F\u884C\u30EC\u30D9\u30EB\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30D9\u30F3\u30C8\u306B\u95A2\u4FC2\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u306E\u30C6\u30FC\u30D6\u30EB\u756A\u53F7\u3068\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u304C\u3001\u5F15\u6570 ",(0,s.jsx)(n.em,{children:"tableNum"})," \u3068 ",(0,s.jsx)(n.em,{children:"recordNum"})," \u306B\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/trigger-event",children:"Trigger event"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/trigger-level",children:"Trigger level"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"\u30C8\u30EA\u30AC"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"\u30EC\u30B3\u30FC\u30C9\u756A\u53F7\u306B\u3064\u3044\u3066"})]}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"399"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);