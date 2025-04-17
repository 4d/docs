"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91020"],{959124:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>h,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/get-picture-resource","title":"GET PICTURE RESOURCE","description":"GET PICTURE RESOURCE ( resID ; resData {; resFile} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-picture-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-resource","permalink":"/docs/ja/20-R8/commands/get-picture-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-resource.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-picture-resource","title":"GET PICTURE RESOURCE","slug":"/commands/get-picture-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get indexed string","permalink":"/docs/ja/20-R8/commands/get-indexed-string"},"next":{"title":"GET RESOURCE","permalink":"/docs/ja/20-R8/commands/get-resource"}}'),t=s("785893"),d=s("250065");let i={id:"get-picture-resource",title:"GET PICTURE RESOURCE",slug:"/commands/get-picture-resource",displayed_sidebar:"docs"},c=void 0,l={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u30A8\u30E9\u30FC\u7BA1\u7406",id:"\u30A8\u30E9\u30FC\u7BA1\u7406",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET PICTURE RESOURCE"})," ( ",(0,t.jsx)(n.em,{children:"resID"})," ; ",(0,t.jsx)(n.em,{children:"resData"})," {; ",(0,t.jsx)(n.em,{children:"resFile"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resID"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EA\u30BD\u30FC\u30B9ID\u756A\u53F7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resData"}),(0,t.jsx)(n.td,{children:"Field, Variable"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30D4\u30AF\u30C1\u30E3\u3092\u53D7\u3051\u53D6\u308B\u3001\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"PICT\u30EA\u30BD\u30FC\u30B9\u306E\u5185\u5BB9"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resFile"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3001\u307E\u305F\u306F \u7701\u7565\u6642\u3001\u958B\u304B\u308C\u3066\u3044\u308B\u5168\u3066\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["GET PICTURE RESOURCE \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"resID"}),'\u306EID\u3092\u6301\u3064\u30D4\u30AF\u30C1\u30E3 ("PICT") \u30EA\u30BD\u30FC\u30B9\u306B\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u30D4\u30AF\u30C1\u30E3\u3092',(0,t.jsx)(n.em,{children:"resData"}),"\u306E\u30D4\u30AF\u30C1\u30E3\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30EA\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u5834\u5408\u3001",(0,t.jsx)(n.em,{children:"resData"}),"\u306F\u5909\u308F\u3089\u305A\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B0\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"resFile"}),"\u306B\u6709\u52B9\u306A\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u53C2\u7167\u756A\u53F7\u3092\u6E21\u3059\u3068\u3001\u30EA\u30BD\u30FC\u30B9\u306F\u305D\u306E\u30EA\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u306E\u307F\u691C\u7D22\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.em,{children:"resFile"}),"\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u3001\u30EA\u30BD\u30FC\u30B9\u30C1\u30A7\u30FC\u30F3\u5185\u3067\u6700\u521D\u306B\u898B\u3064\u304B\u3063\u305F\u30EA\u30BD\u30FC\u30B9\u306E\u30AA\u30AB\u30EC\u30F3\u30B9\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," \u30D4\u30AF\u30C1\u30E3\u30EA\u30BD\u30FC\u30B9\u306F\u3001\u5C11\u306A\u304F\u3068\u3082\u6570\u30E1\u30AC\u30D0\u30A4\u30C8\u306E\u30B5\u30A4\u30BA\u306B\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/resource-list",title:"RESOURCE LIST",children:"RESOURCE LIST"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,t.jsx)(n.p,{children:"\u30EA\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u308B\u3068OK\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30A8\u30E9\u30FC\u7BA1\u7406",children:"\u30A8\u30E9\u30FC\u7BA1\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["\u30D4\u30AF\u30C1\u30E3\u3092\u30ED\u30FC\u30C9\u3059\u308B\u305F\u3081\u306E\u5341\u5206\u306A\u30E1\u30E2\u30EA\u304C\u306A\u3044\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u3067\u3053\u306E\u30A8\u30E9\u30FC\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"502"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,t.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);