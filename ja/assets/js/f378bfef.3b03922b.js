"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2656"],{340323:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-timer","title":"SET TIMER","description":"SET TIMER ( tickCount )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-timer.md","sourceDirName":"commands-legacy","slug":"/commands/set-timer","permalink":"/docs/ja/commands/set-timer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-timer","title":"SET TIMER","slug":"/commands/set-timer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Right click","permalink":"/docs/ja/commands/right-click"},"next":{"title":"Forms","permalink":"/docs/ja/category/forms"}}'),r=t("785893"),d=t("250065");let i={id:"set-timer",title:"SET TIMER",slug:"/commands/set-timer",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMER"})," ( ",(0,r.jsx)(n.em,{children:"tickCount"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tickCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tickcount \u307E\u305F\u306F -1=\u3059\u3050\u306B\u5B9F\u884C\u3059\u308B"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMER"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001On Timer\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u6709\u52B9\u306B\u3057\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067On Timer\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u9593\u306E\u9593\u9694Tick\u6570\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/form-event-code",children:"Form event code"})," \u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u30D5\u30A9\u30FC\u30E0\u3092\u8868\u793A\u3057\u3066\u3044\u306A\u3044\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u547C\u3073\u51FA\u3057\u3066\u3082\u3001\u52B9\u679C\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.strong,{children:"SET TIMER"})," \u30B3\u30DE\u30F3\u30C9\u304C\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8 (\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9) \u3067\u547C\u3073\u51FA\u3055\u308C\u308B\u3068\u3001On Timer \u30A4\u30D9\u30F3\u30C8\u306F\u89AA\u30D5\u30A9\u30FC\u30E0\u30EC\u30D9\u30EB\u3067\u306F\u306A\u304F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3067\u751F\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tickCount"})," \u5F15\u6570\u306B-1\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306FOn Timer \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3092\u5373\u5EA7\u306B\u6709\u52B9\u306B\u3057\u307E\u3059\u3002\u8A00\u3044\u63DB\u3048\u308C\u3070\u30014D\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u30A4\u30D9\u30F3\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u306B\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3092\u6E21\u3057\u6B21\u7B2C\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u7279\u306B\u3053\u308C\u306F\u3001\u51E6\u7406\u306E\u958B\u59CB\u524D\u306B\u30D5\u30A9\u30FC\u30E0\u304C\u5B8C\u5168\u306B\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["On Timer\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306E\u751F\u6210\u3092\u53D6\u308A\u6D88\u3059\u306B\u306F\u3001",(0,r.jsx)(n.em,{children:"tickCount"}),"\u306B0\u3092\u30BB\u30C3\u30C8\u3057\u305F",(0,r.jsx)(n.strong,{children:"SET TIMER"})," \u3092\u3082\u3046\u4E00\u5EA6\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:"\u30D5\u30A9\u30FC\u30E0\u304C\u753B\u9762\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u6642\u306B\u3001\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u304C3\u79D2\u6BCE\u306B\u8B66\u544A\u97F3\u3092\u9CF4\u3089\u3059\u3088\u3046\u306B\u3057\u305F\u3044\u3068\u4EEE\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u4E0B\u8A18\u306E\u3088\u3046\u306B\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0SET TIMER(60*3)\n\xa0End if\n\xa0\n\xa0If(Form event code=On Timer)\n\xa0\xa0\xa0\xa0BEEP\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/redraw",children:"REDRAW"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"645"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);