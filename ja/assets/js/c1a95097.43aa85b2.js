"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23894"],{268637:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-get-scrollbar","title":"OBJECT GET SCROLLBAR","description":"OBJECT GET SCROLLBAR ( { ;} object ; horizontal ; vertical* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-scrollbar.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scrollbar","permalink":"/docs/ja/commands/object-get-scrollbar","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scrollbar.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-scrollbar","title":"OBJECT GET SCROLLBAR","slug":"/commands/object-get-scrollbar","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SCROLL POSITION","permalink":"/docs/ja/commands/object-get-scroll-position"},"next":{"title":"OBJECT GET SHORTCUT","permalink":"/docs/ja/commands/object-get-shortcut"}}'),l=s("785893"),r=s("250065");let c={id:"object-get-scrollbar",title:"OBJECT GET SCROLLBAR",slug:"/commands/object-get-scrollbar",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(n){let e={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"OBJECT GET SCROLLBAR"})," ( {* ;} ",(0,l.jsx)(e.em,{children:"object"})," ; ",(0,l.jsx)(e.em,{children:"horizontal"})," ; ",(0,l.jsx)(e.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"*"}),(0,l.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u6307\u5B9A\u6642: object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57)\u3001\u7701\u7565\u6642: object\u306F\u5909\u6570\u307E\u305F\u306F\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"object"}),(0,l.jsx)(e.td,{children:"any"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"horizontal"}),(0,l.jsx)(e.td,{children:"Boolean, Integer"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"True=\u8868\u793A, False=\u975E\u8868\u793A"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"vertical"}),(0,l.jsx)(e.td,{children:"Boolean, Integer"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"True=\u8868\u793A, False=\u975E\u8868\u793A"})]})]})]}),"\n",(0,l.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:["OBJECT GET SCROLLBAR \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,l.jsx)(e.em,{children:"object"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30B0\u30EB\u30FC\u30D7\u306E\u7E26\u6A2A\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u306E\u8868\u793A/\u975E\u8868\u793A\u72B6\u614B\u3092\u77E5\u308B\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002."]}),"\n",(0,l.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3059\u3068\u3001",(0,l.jsx)(e.em,{children:"object\u5F15\u6570"}),"\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D(\u6587\u5B57)\u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u3068\u3001",(0,l.jsx)(e.em,{children:"object"}),"\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3078\u306E\u53C2\u7167(\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u307F)\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"horizontal"})," \u3068 ",(0,l.jsx)(e.em,{children:"vertical"})," \u5F15\u6570\u306B\u306F\u3001\u30D6\u30FC\u30EB\u578B\u307E\u305F\u306F\u500D\u8ABF\u6574\u6570\u578B\u306E\u5909\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u30D6\u30FC\u30EB\u578B\u306E\u5909\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u306E",(0,l.jsx)(e.strong,{children:"\u30AB\u30EC\u30F3\u30C8\u306E"}),"\u72B6\u614B\u3092\u53CD\u6620\u3057\u305F\u5024\u304C\u8FD4\u3063\u3066\u304D\u307E\u3059:\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u975E\u8868\u793A\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306F\u3001\u5F15\u6570\u306B\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u8868\u793A\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306F\u3001\u5F15\u6570\u306B\u306FTrue\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u81EA\u52D5\u30E2\u30FC\u30C9\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u306E\u8868\u793A\u72B6\u614B\u306B\u5FDC\u3058\u3066True\u307E\u305F\u306FFalse\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u500D\u8ABF\u6574\u6570\u578B\u306E\u5909\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u306B\u5B9A\u7FA9\u3055\u308C\u305F\u8868\u793A\u72B6\u614B\u3092\u53CD\u6620\u3057\u305F\u5024\u304C\u8FD4\u3063\u3066\u304D\u307E\u3059:\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u975E\u8868\u793A\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306F\u3001\u5F15\u6570\u306B\u306F0\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u8868\u793A\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306F\u3001\u5F15\u6570\u306B\u306F1\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u81EA\u52D5\u30E2\u30FC\u30C9\u306B\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u306B\u306F\u3001\u5F15\u6570\u306B\u306F2\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4EE5\u4E0B\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u30D4\u30AF\u30C1\u30E3\u307E\u305F\u306F\u30C6\u30AD\u30B9\u30C8\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u5909\u6570"}),"\n",(0,l.jsx)(e.li,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9"}),"\n",(0,l.jsx)(e.li,{children:"\u968E\u5C64\u30EA\u30B9\u30C8"}),"\n",(0,l.jsxs)(e.li,{children:["\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\n\u3088\u308A\u8A73\u7D30\u306A\u60C5\u5831\u306B\u95A2\u3057\u3066\u306F\u3001",(0,l.jsx)(e.a,{href:"/docs/ja/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8AAC\u660E\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"/docs/ja/commands/object-set-scrollbar",children:"OBJECT SET SCROLLBAR"})}),"\n",(0,l.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"1076"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return c}});var t=s(667294);let l={},r=t.createContext(l);function c(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);