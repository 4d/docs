"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88554"],{453955:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/window-list","title":"WINDOW LIST","description":"WINDOW LIST ( windows {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/window-list.md","sourceDirName":"commands-legacy","slug":"/commands/window-list","permalink":"/docs/ja/20-R7/commands/window-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"window-list","title":"WINDOW LIST","slug":"/commands/window-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Window kind","permalink":"/docs/ja/20-R7/commands/window-kind"},"next":{"title":"Window process","permalink":"/docs/ja/20-R7/commands/window-process"}}'),l=d("785893"),t=d("250065");let i={id:"window-list",title:"WINDOW LIST",slug:"/commands/window-list",displayed_sidebar:"docs"},r=void 0,o={},c=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"WINDOW LIST"})," ( ",(0,l.jsx)(e.em,{children:"windows"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"windows"}),(0,l.jsx)(e.td,{children:"Array"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30A6\u30A3\u30F3\u30C9\u30A6\u53C2\u7167\u756A\u53F7\u306E\u914D\u5217"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"*"}),(0,l.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u6307\u5B9A\u6642, \u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u3082\u542B\u3081\u308B \u7701\u7565\u6642, \u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u542B\u3081\u306A\u3044"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:["WINDOW LIST \u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217 ",(0,l.jsx)(e.em,{children:"windows"}),' \u3092\u751F\u6210\u3057\u3001\u5B9F\u884C\u4E2D\u306E\u3059\u3079\u3066\u306E (\u30AB\u30FC\u30CD\u30EB\u304A\u3088\u3073\u30E6\u30FC\u30B6) \u30D7\u30ED\u30BB\u30B9\u3067\u958B\u304B\u308C\u3066\u3044\u308B\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u53C2\u7167\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002"\u53EF\u8996\u72B6\u614B"\u306E\u30A6\u30A3\u30F3\u30C9\u30A6(\u975E\u8868\u793A\u306B\u306A\u3063\u3066\u3044\u306A\u3044\u30A6\u30A3\u30F3\u30C9\u30A6)\u306E\u307F\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,l.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408\u3001\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u30A6\u30A3\u30F3\u30C9\u30A6\u306F\u542B\u3081\u3089\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,l.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001(\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u3068\u30C0\u30A4\u30A2\u30EA\u30B0\u30DC\u30C3\u30AF\u30B9\u3092\u9664\u304F) \u3059\u3079\u3066\u306E\u958B\u304B\u308C\u3066\u3044\u308B\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u30BF\u30A4\u30EB\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:"\xa0\xa0// TILE WINDOWS project method\n\xa0\n\xa0WINDOW LIST($alWnd)\n\xa0$vlLeft:=10\n\xa0$vlTop:=80\xa0// \u30C4\u30FC\u30EB\u30D0\u30FC\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u78BA\u4FDD\n\xa0For($vlWnd;1;Size of array($alWnd))\n\xa0\xa0\xa0\xa0If(Window kind($alWnd{$vlWnd})#Modal dialog)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWR:=$vlLeft+($vlWR-$vlWL)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWB:=$vlTop+($vlWB-$vlWT)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWL:=$vlLeft\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWT:=$vlTop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlLeft:=$vlLeft+10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlTop:=$vlTop+25\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Note:"})," \u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306B\u30E1\u30A4\u30F3\u30A6\u30A3\u30F3\u30C9\u30A6 (Windows) \u3084\u30B9\u30AF\u30EA\u30FC\u30F3 (Mac OS) \u306E\u30C6\u30B9\u30C8\u3092\u7D44\u307F\u8FBC\u3080\u3068\u3088\u308A\u6D17\u7DF4\u3055\u308C\u305F\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"/docs/ja/20-R7/commands/window-kind",children:"Window kind"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/20-R7/commands/window-process",children:"Window process"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"442"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return r},a:function(){return i}});var s=d(667294);let l={},t=s.createContext(l);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);