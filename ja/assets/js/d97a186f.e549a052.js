"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67869"],{286374:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/min","title":"Min","description":"Min ( series {; attributePath} ) : any","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/min.md","sourceDirName":"commands-legacy","slug":"/commands/min","permalink":"/docs/ja/commands/min","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmin.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"min","title":"Min","slug":"/commands/min","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Max","permalink":"/docs/ja/commands/max"},"next":{"title":"Std deviation","permalink":"/docs/ja/commands/std-deviation"}}'),d=s("785893"),i=s("250065");let l={id:"min",title:"Min",slug:"/commands/min",displayed_sidebar:"docs"},t=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:2},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Min"})," ( ",(0,d.jsx)(e.em,{children:"series"})," {; ",(0,d.jsx)(e.em,{children:"attributePath"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"series"}),(0,d.jsx)(e.td,{children:"Field, Array"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6700\u5C0F\u5024\u3092\u6C42\u3081\u308B\u30C7\u30FC\u30BF"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"attributePath"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u6700\u5C0F\u5024\u3092\u53D6\u5F97\u3057\u305F\u3044\u5C5E\u6027\u306E\u30D1\u30B9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(e.td,{children:"Number, Date"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"series\u4E2D\u306E\u6700\u5C0F\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Min"}),"\u306F\u3001",(0,d.jsx)(e.em,{children:"series"}),"\u4E2D\u306E\u6700\u5C0F\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"series"}),"\u304C\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A3\uFF0D\u30EB\u30C9\u306E\u5834\u5408\u306B\u306F\u3001\u6700\u5C0F\u5024\u3092\u6C42\u3081\u308B\u305F\u3081\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"series"}),"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u304C\u7A7A\u306E\u5834\u5408\u3001",(0,d.jsx)(e.strong,{children:"Min"}),"\u306F0\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"series"}),"\u306B (1\u307E\u305F\u306F2\u6B21\u5143\u306E) \u914D\u5217\u3092\u6E21\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u914D\u5217\u306F\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u5B9F\u6570\u578B\u3001\u307E\u305F\u306F\u65E5\u4ED8\u578B\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"series"}),"\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u3042\u308B\u5834\u5408\u306B\u306E\u307F\u3001\u30C6\u30AD\u30B9\u30C8\u578B\u3067\u3042\u308B\u4EFB\u610F\u306E",(0,d.jsx)(e.em,{children:"attributePath"}),'\u5F15 \u6570\u3092\u53D7\u3051\u5165\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u8A08\u7B97\u3057\u305F\u3044\u5C5E\u6027\u306E\u30D1\u30B9\u3092\u5B9A\u7FA9\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002\u30CD\u30B9\u30C8\u3055\u308C\u305F\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u306F\u6A19\u6E96\u306E\u30C9\u30C3\u30C8\u8868\u8A18 (\u4F8B:"company.address.number")\u3092\u4F7F\u7528\u3057\u3066\u4E0B\u3055\u3044\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5C5E\u6027\u540D\u306F\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3059\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002\u6570\u5024\u578B\u306E\u5C5E\u6027\u306E\u307F\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002',(0,d.jsx)(e.br,{}),"\n\u5C5E\u6027\u306E\u30D1\u30B9\u5185\u306E\u5024\u306B\u6570\u5024\u578B\u3067\u306A\u3044\u3082\u306E\u304C\u3042\u3063\u305F\u5834\u5408\u3001\u305D\u308C\u3089\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30E6\u30FC\u30B6\u304C\u9032\u6357\u30B5\u30FC\u30E2\u30E1\u30FC\u30BF\u306E",(0,d.jsx)(e.strong,{children:"\u505C\u6B62"}),"\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u306A\u3069\u3057\u3066\u51E6\u7406\u304C\u4E2D\u65AD\u3055\u308C\u308B\u3068\u3001OK\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(e.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u3001\u51FA\u529B\u30D5\u30A9\u30FC\u30E0\u306EB0\u30D6\u30EC\u30FC\u30AF\u30A8\u30EA\u30A2\u306B\u3042\u308B\u5909\u6570",(0,d.jsx)(e.em,{children:"vMin"}),"\u306B\u5024\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002\u5909\u6570\u306F\u30EC\u30DD\u30FC\u30C8\u306E\u6700\u5F8C\u306B\u5370\u5237\u3055\u308C\u307E\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F\u5909\u6570\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u6700\u5C0F\u5024\u3092\u4EE3\u5165\u3057\u3001\u30EC\u30DD\u30FC\u30C8\u306E\u6700\u5F8C\u306E\u30D6\u30EC\u30FC\u30AF\u3067\u5370\u5237\u3055\u308C\u307E\u3059:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0vMin:=Min([Employees]Salary)\n"})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"}),' \u5909\u6570\u306B\u5BFE\u3057\u3066"On printing break" \u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044\u3002']}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30D6\u30EC\u30FC\u30AF\u51E6\u7406\u3092\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3057\u3066\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u5370\u5237\u3059\u308B\u305F\u3081\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0ALL RECORDS([Employees])\n\xa0ORDER BY([Employees];[Employees]Company;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Employees]Salary)\n\xa0FORM SET OUTPUT([Employees];"PrintForm")\n\xa0PRINT SELECTION([Employees])\n'})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(e.a,{href:"/docs/ja/commands/break-level",children:"BREAK LEVEL"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5F15\u6570\u306F\u3001\u5370\u5237\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u306E\u30D6\u30EC\u30FC\u30AF\u6570\u3068\u540C\u3058\u6570\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30D6\u30EC\u30FC\u30AF\u51E6\u7406\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,d.jsx)(e.em,{children:"\u5370\u5237"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u5F93\u696D\u54E1\u306E\u6700\u4F4E\u58F2\u4E0A\u9AD8\u3092\u691C\u7D22\u3057\u3001\u8B66\u544A\u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u7D50\u679C\u3092\u8868\u793A\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0ALERT("Minimum sale = "+String(Min([Employees]Sales)))\n'})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(e.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u914D\u5217\u4E2D\u3067\u6700\u3082\u5C0F\u3055\u3044\u5024\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!11/07/01!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vMin:=Min($ArrGrades)\n"})}),"\n",(0,d.jsx)(e.h2,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5C5E\u6027\u3092\u8A08\u7B97\u3059\u308B\u4F8B\u984C\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsx)(e.a,{href:"/docs/ja/commands/average",children:"Average"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u8A73\u7D30\u306E\u4F8B\u984C3\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/max",children:"Max"})}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(e.td,{children:"OK"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return l}});var r=s(667294);let d={},i=r.createContext(d);function l(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);