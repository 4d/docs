"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45306"],{486408:function(n,e,d){d.r(e),d.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/resolve-pointer","title":"RESOLVE POINTER","description":"RESOLVE POINTER ( pointer ; varName ; tableNum ; fieldNum )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/resolve-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/resolve-pointer","permalink":"/docs/ja/commands/resolve-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresolve-pointer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"resolve-pointer","title":"RESOLVE POINTER","slug":"/commands/resolve-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Null","permalink":"/docs/ja/commands/null"},"next":{"title":"Self","permalink":"/docs/ja/commands/self"}}'),r=d("785893"),l=d("250065");let i={id:"resolve-pointer",title:"RESOLVE POINTER",slug:"/commands/resolve-pointer",displayed_sidebar:"docs"},t=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"RESOLVE POINTER"})," ( ",(0,r.jsx)(e.em,{children:"pointer"})," ; ",(0,r.jsx)(e.em,{children:"varName"})," ; ",(0,r.jsx)(e.em,{children:"tableNum"})," ; ",(0,r.jsx)(e.em,{children:"fieldNum"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"pointer"}),(0,r.jsx)(e.td,{children:"Pointer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u53C2\u7167\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u53D6\u5F97\u3059\u308B\u30DD\u30A4\u30F3\u30BF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"varName"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u53C2\u7167\u3055\u308C\u305F\u5909\u6570\u306E\u540D\u524D\u307E\u305F\u306F\u7A7A\u306E\u6587\u5B57\u5217"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tableNum"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u53C2\u7167\u3055\u308C\u305F\u30C6\u30FC\u30D6\u30EB\u307E\u305F\u306F\u914D\u5217\u8981\u7D20\u306E\u756A\u53F7 \u307E\u305F\u306F 0 \u3042\u308B\u3044\u306F -1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"fieldNum"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u53C2\u7167\u3055\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u756A\u53F7 \u307E\u305F\u306F 0 \u3042\u308B\u3044\u306F -1"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["RESOLVE POINTER \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(e.em,{children:"pointer"}),"\u5F0F\u306B\u3088\u3063\u3066\u53C2\u7167\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u3001\u5F15\u6570",(0,r.jsx)(e.em,{children:"varName"}),"\u3001",(0,r.jsx)(e.em,{children:"tableNum"}),"\u3001",(0,r.jsx)(e.em,{children:"fieldNum"}),"\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u53C2\u7167\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u7A2E\u985E\u306B\u3088\u3063\u3066\u3001RESOLVE POINTER\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5024\u3092\u8FD4\u3057\u307E\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u53C2\u7167\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"varName"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"tableNum"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"fieldNum"})}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u306A\u3057 (NIL\u30DD\u30A4\u30F3\u30BF)"}),(0,r.jsx)(e.td,{children:'"" (\u7A7A\u306E\u6587\u5B57\u5217)'}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u5909\u6570"}),(0,r.jsx)(e.td,{children:"\u5909\u6570\u540D"}),(0,r.jsx)(e.td,{children:"-1"}),(0,r.jsx)(e.td,{children:"-1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u914D\u5217"}),(0,r.jsx)(e.td,{children:"\u914D\u5217\u540D"}),(0,r.jsx)(e.td,{children:"-1"}),(0,r.jsx)(e.td,{children:"-1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u914D\u5217\u8981\u7D20"}),(0,r.jsx)(e.td,{children:"\u914D\u5217\u540D"}),(0,r.jsx)(e.td,{children:"\u8981\u7D20\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"-1"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"2\u6B21\u5143\u914D\u5217\u8981\u7D20"}),(0,r.jsx)(e.td,{children:"2\u6B21\u5143\u914D\u5217\u306E\u540D\u524D"}),(0,r.jsx)(e.td,{children:"\u8981\u7D20\u306E\u884C\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"\u8981\u7D20\u306E\u5217\u756A\u53F7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB"}),(0,r.jsx)(e.td,{children:'"" (\u7A7A\u306E\u6587\u5B57\u5217)'}),(0,r.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"0"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9"}),(0,r.jsx)(e.td,{children:'"" (\u7A7A\u306E\u6587\u5B57\u5217)'}),(0,r.jsx)(e.td,{children:"\u30C6\u30FC\u30D6\u30EB\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u756A\u53F7"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"pointer"}),"\u306B\u6E21\u3059\u5024\u304C\u30DD\u30A4\u30F3\u30BF\u5F0F\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"RESOLVE POINTER \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306E\u30DD\u30A4\u30F3\u30BF\u306B\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002\u4F55\u6545\u306A\u3089\u3001\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u306F\u3001\u540C\u3058\u540D\u524D\u3067\u7570\u306A\u308B\u5834\u6240\u3067\u5B9A\u7FA9\u3067\u304D\u308B\u305F\u3081\u3001\u76EE\u7684\u306E\u30ED\u30FC\u30AB\u30EB\u5909\u6570\u3092\u7279\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u3044\u304B\u3089\u3067\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.p,{children:"\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u3001v1, v2... v100\u3068\u3044\u3046\u540D\u524D\u3067\u5165\u529B\u53EF\u80FD\u306A\u5909\u6570100\u500B\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u5B9F\u884C\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u624B\u9806\u3092\u5B9F\u884C\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.p,{children:"a. \u5165\u529B\u53EF\u80FD\u306A\u5909\u6570\u30921\u3064\u4F5C\u6210\u3057\u3001v\u3068\u540D\u4ED8\u3051\u308B\u3002"}),"\n",(0,r.jsx)(e.p,{children:"b. \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A\u3059\u308B\u3002"}),"\n",(0,r.jsx)(e.p,{children:"c. \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4F5C\u6210\u3059\u308B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0DoSomething(Self)\xa0// DoSomething \u306F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\n"})}),"\n",(0,r.jsx)(e.p,{children:"d. \u3053\u306E\u6642\u70B9\u3067\u3001\u5FC5\u8981\u306A\u56DE\u6570\u3060\u3051\u5909\u6570\u3092\u8907\u88FD\u3059\u308B\u3053\u3068\u3082\u3001\u30D5\u30A9\u30FC\u30E0\u30A8\u30C7\u30A3\u30BF\u306E\u300C\u30B0\u30EA\u30C3\u30C9\u3067\u5909\u6570\u4F5C\u6210\u300D\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u3002"}),"\n",(0,r.jsx)(e.p,{children:"e. DoSomething\u30E1\u30BD\u30C3\u30C9\u5185\u3067\u3001\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u5909\u6570\u306E\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u77E5\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3059\u308B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:"\xa0RESOLVE POINTER($1;$vsVarName;$vlTableNum;$vlFieldNum)\n\xa0$vlVarNum:=Num(Substring($vsVarName;2))\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u65B9\u6CD5\u3067\u30D5\u30A9\u30FC\u30E0\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001100\u500B\u306E\u5909\u6570\u306E\u305F\u3081\u306E\u30E1\u30BD\u30C3\u30C9\u3092\u4E00\u5EA6\u66F8\u304F\u3060\u3051\u3067\u6E08\u3080\u3053\u3068\u306B\u6CE8\u76EE\u3057\u3066\u304F\u3060\u3055\u3044\u3002DoSomething (1), DoSomething (2)...,DoSomething (100)\u3092\u4F5C\u6210\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.p,{children:"\u30C7\u30D0\u30C3\u30B0\u306E\u305F\u3081\u306B\u3001\u30E1\u30BD\u30C3\u30C9\u3078\u306E2\u756A\u76EE\u306E\u5F15\u6570 ($2) \u304C\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u3057\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30E1\u30BD\u30C3\u30C9\u306E\u6700\u521D\u3067\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0If(<>DebugOn)\n\xa0\xa0\xa0\xa0RESOLVE POINTER($2;$vsVarName;$vlTableNum;$vlFieldNum)\n\xa0\xa0\xa0\xa0If(Not(($vlTableNum>0)\xa0&\xa0($vlFieldNum=-1)\xa0&\xa0($vsVarName="")))\n\xa0\xa0// \u8B66\u544A: \u30DD\u30A4\u30F3\u30BF\u306F\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u53C2\u7167\u3067\u306F\u306A\u3044\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\xa0// ...\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsx)(e.p,{children:"DRAG AND DROP PROPERTIES \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u3092\u53C2\u7167."}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,r.jsx)(e.p,{children:"\u4EE5\u4E0B\u306B\u4E8C\u6B21\u5143\u914D\u5217\u306E\u4F8B\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY TEXT(atCities;100;50)\n\xa0var $city : Pointer\n\xa0atCities{1}{2}:="Rome"\n\xa0atCities{1}{5}:="Paris"\n\xa0atCities{2}{6}:="New York"\n\xa0\xa0// ...\u4ED6\u306E\u5024\n\xa0$city:=->atCities{1}{5}\n\xa0RESOLVE POINTER($city;$var;$rowNum;$colNum)\n\xa0\xa0//$var="atCities"\n\xa0\xa0//$rowNum="1"\n\xa0\xa0//$colNum="5"\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/field",children:"Field"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/get-pointer",children:"Get pointer"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/is-a-variable",children:"Is a variable"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/is-nil-pointer",children:"Is nil pointer"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/table",children:"Table"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"394"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return t},a:function(){return i}});var s=d(667294);let r={},l=s.createContext(r);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);