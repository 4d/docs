"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22923"],{426045:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>r,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/shift-down","title":"Shift down","description":"Shift down  : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/shift-down.md","sourceDirName":"commands-legacy","slug":"/commands/shift-down","permalink":"/docs/ja/commands/shift-down","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshift-down.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"shift-down","title":"Shift down","slug":"/commands/shift-down","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TABLE TITLES","permalink":"/docs/ja/commands/set-table-titles"},"next":{"title":"SHOW MENU BAR","permalink":"/docs/ja/commands/show-menu-bar"}}'),d=s("785893"),o=s("250065");let i={id:"shift-down",title:"Shift down",slug:"/commands/shift-down",displayed_sidebar:"docs"},c=void 0,r={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Shift down"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"Shift \u30AD\u30FC\u306E\u30B9\u30C6\u30FC\u30BF\u30B9"})]})})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["Shift down \u30B3\u30DE\u30F3\u30C9\u306FShift \u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u3044\u308B\u3068",(0,d.jsx)(e.a,{href:"/docs/ja/commands/true",title:"True",children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(e.p,{children:["\u30DC\u30BF\u30F3 ",(0,d.jsx)(e.em,{children:"bAnyButton"})," \u306B\u5BFE\u3059\u308B\u4EE5\u4E0B\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u969B\u306B\u3069\u306E\u30E2\u30C7\u30A3\u30D5\u30A1\u30A4\u30A2\u304C\u62BC\u3055\u308C\u3066\u3044\u308B\u304B\u306B\u3088\u3063\u3066\u7570\u306A\u308B\u52D5\u4F5C\u3092\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0\xa0// bAnyButton \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n\xa0Case of\n\xa0\xa0//\u3053\u306E\u307B\u304B\u306E\u8907\u6570\u306E\u30AD\u30FC\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u3053\u3053\u3067\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Shift down&Windows Ctrl down)\n\xa0\xa0// Shift \u304A\u3088\u3073 Windows Ctrl (\u307E\u305F\u306F Macintosh command) \u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u305F\u5834\u5408\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO ACTION1\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Shift down)\n\xa0\xa0//Shift \u30AD\u30FC\u3060\u3051\u304C\u62BC\u3055\u308C\u3066\u305F\u5834\u5408\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO ACTION2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Windows Ctrl down)\n\xa0\xa0//Windows Ctrl (\u307E\u305F\u306F Macintosh command) \u30AD\u30FC\u3060\u3051\u304C\u62BC\u3055\u308C\u305F\u5834\u5408\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO ACTION3\n\xa0\xa0// ...\n\xa0\xa0//\u3053\u306E\u307B\u304B\u306E\u500B\u3005\u306E\u30AD\u30FC\u3092\u3053\u3053\u3067\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/ja/commands/caps-lock-down",children:"Caps lock down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/macintosh-command-down",children:"Macintosh command down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/macintosh-control-down",children:"Macintosh control down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/macintosh-option-down",children:"Macintosh option down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/windows-alt-down",children:"Windows Alt down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/ja/commands/windows-ctrl-down",children:"Windows Ctrl down"})]}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"543"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let d={},o=t.createContext(d);function i(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);