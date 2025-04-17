"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37361"],{914531:function(n,e,s){s.r(e),s.d(e,{default:()=>a,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/post-click","title":"POST CLICK","description":"POST CLICK ( mouseX ; mouseY {; process} {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/post-click.md","sourceDirName":"commands-legacy","slug":"/commands/post-click","permalink":"/docs/ja/commands/post-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpost-click.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"post-click","title":"POST CLICK","slug":"/commands/post-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pop up menu","permalink":"/docs/ja/commands/pop-up-menu"},"next":{"title":"POST EVENT","permalink":"/docs/ja/commands/post-event"}}'),d=s("785893"),c=s("250065");let r={id:"post-click",title:"POST CLICK",slug:"/commands/post-click",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"POST CLICK"})," ( ",(0,d.jsx)(e.em,{children:"mouseX"})," ; ",(0,d.jsx)(e.em,{children:"mouseY"})," {; ",(0,d.jsx)(e.em,{children:"process"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mouseX"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6C34\u5E73\u5EA7\u6A19"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"mouseY"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u5782\u76F4\u5EA7\u6A19"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"process"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u9001\u4FE1\u5148\u306E\u30D7\u30ED\u30BB\u30B9\u53C2\u7167\u756A\u53F7\u3001 \u7701\u7565\u307E\u305F\u306F0\u306E\u5834\u5408\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A4\u30D9\u30F3\u30C8\u30AD\u30E5\u30FC"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"*"}),(0,d.jsx)(e.td,{children:"Operator"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6307\u5B9A\u3055\u308C\u305F\u5834\u5408\u306F\u30B0\u30ED\u30FC\u30D0\u30EB\u306A\u5EA7\u6A19\u30B7\u30B9\u30C6\u30E0\u304C\u4F7F\u7528\u3055\u308C\u308B \u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u30ED\u30FC\u30AB\u30EB\u306A\u5EA7\u6A19\u30B7\u30B9\u30C6\u30E0\u304C\u4F7F\u7528\u3055\u308C\u308B"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsx)(e.p,{children:"POST CLICK \u30B3\u30DE\u30F3\u30C9\u306F\u30DE\u30A6\u30B9\u30AF\u30EA\u30C3\u30AF\u3092\u30B7\u30DF\u30E5\u30EC\u30FC\u30C8\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u30E6\u30FC\u30B6\u304C\u5B9F\u969B\u306B\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5834\u5408\u3068\u540C\u69D8\u306E\u7D50\u679C\u3092\u751F\u3058\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(e.p,{children:["\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"mouseX"})," \u3068 ",(0,d.jsx)(e.em,{children:"mouseY"})," \u306B\u306F\u3001\u30AF\u30EA\u30C3\u30AF\u306E\u6C34\u5E73\u5EA7\u6A19\u3068\u5782\u76F4\u5EA7\u6A19\u3092\u6E21\u3057\u307E\u3059\u3002\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u3053\u308C\u3089\u306E\u5EA7\u6A19\u306F\u753B\u9762\u306B\u306B\u5BFE\u3057\u3066\u76F8\u5BFE\u7684\u306B\u8868\u3055\u308C\u307E\u3059\u3002\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"*"})," \u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,d.jsx)(e.em,{children:"process"})," \u306B\u6E21\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u756A\u53F7\u3092\u6301\u3064\u30D7\u30ED\u30BB\u30B9\u306E\u6700\u524D\u9762\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5BFE\u3057\u3066\u76F8\u5BFE\u7684\u306B\u8868\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5F15\u6570 ",(0,d.jsx)(e.em,{children:"process"})," \u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AF\u30EA\u30C3\u30AF\u306F ",(0,d.jsx)(e.em,{children:"process"})," \u306B\u6E21\u3057\u305F\u30D7\u30ED\u30BB\u30B9\u756A\u53F7\u3092\u6301\u3064\u30D7\u30ED\u30BB\u30B9\u3078\u9001\u3089\u308C\u307E\u3059\u30020 (\u30BC\u30ED) \u3092\u6E21\u3057\u305F\u308A\u3053\u306E\u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001\u30AF\u30EA\u30C3\u30AF\u306F\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30EC\u30D9\u30EB\u306B\u9001\u3089\u308C\u307E\u3059\u3002\u305D\u3057\u3066\u30014D\u30B9\u30B1\u30B8\u30E5\u30FC\u30E9\u30FC\u304C\u305D\u308C\u3092\u9069\u5207\u306A\u30D7\u30ED\u30BB\u30B9\u306B\u30C7\u30A3\u30B9\u30D1\u30C3\u30C1\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/post-event",children:"POST EVENT"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/post-key",children:"POST KEY"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"466"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var t=s(667294);let d={},c=t.createContext(d);function r(n){let e=t.useContext(c);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);