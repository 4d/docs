"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60739"],{409989:function(n,e,t){t.r(e),t.d(e,{default:()=>u,frontMatter:()=>d,metadata:()=>c,assets:()=>r,toc:()=>o,contentTitle:()=>i});var c=JSON.parse('{"id":"commands-legacy/contextual-click","title":"Contextual click","description":"Contextual click  : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/contextual-click.md","sourceDirName":"commands-legacy","slug":"/commands/contextual-click","permalink":"/docs/ja/commands/contextual-click","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcontextual-click.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"contextual-click","title":"Contextual click","slug":"/commands/contextual-click","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Clickcount","permalink":"/docs/ja/commands/clickcount"},"next":{"title":"Deactivated","permalink":"/docs/ja/commands/deactivated"}}'),l=t("785893"),s=t("250065");let d={id:"contextual-click",title:"Contextual click",slug:"/commands/contextual-click",displayed_sidebar:"docs"},i=void 0,r={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Contextual click"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,l.jsx)(e.td,{children:"Boolean"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30AF\u30EA\u30C3\u30AF\u3092\u691C\u77E5\u3057\u305F\u5834\u5408True\u3001 \u305D\u3046\u3067\u306A\u3051\u308C\u3070False"})]})})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:["Contextual click \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30AF\u30EA\u30C3\u30AF\u304C\u884C\u308F\u308C\u305F\u5834\u5408\u306B",(0,l.jsx)(e.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Windows\u3068Mac OS\u306B\u304A\u3044\u3066\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30AF\u30EA\u30C3\u30AF\u306F\u30DE\u30A6\u30B9\u306E\u53F3\u30DC\u30BF\u30F3\u3092\u4F7F\u7528\u3057\u3066\u884C\u3044\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["Mac OS\u306B\u304A\u3044\u3066\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30AF\u30EA\u30C3\u30AF\u306F\u3001",(0,l.jsx)(e.strong,{children:"Control+\u30AF\u30EA\u30C3\u30AF"}),"\u3067\u3082\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306FOn clicked\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u4F7F\u7528\u3057\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u3001\u3053\u306E\u30A4\u30D9\u30F3\u30C8\u304C\u30D5\u30A9\u30FC\u30E0\u3084\u7279\u5B9A\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u9069\u5207\u306B\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(e.p,{children:"\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u30B9\u30AF\u30ED\u30FC\u30EB\u30A8\u30EA\u30A2\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u7528\u3059\u308B\u3068\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u3092\u7528\u3044\u3066\u914D\u5217\u8981\u7D20\u306E\u5024\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:'\xa0If(Contextual click)\n\xa0\xa0\xa0\xa0If(Pop up menu("True;False")=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0myArray{myArray}:="True"\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0myArray{myArray}:="False"\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"/docs/ja/commands/form-event-code",children:"Form event code"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/commands/right-click",children:"Right click"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"713"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return d}});var c=t(667294);let l={},s=c.createContext(l);function d(n){let e=c.useContext(s);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);