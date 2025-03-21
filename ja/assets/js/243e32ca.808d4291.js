"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28728"],{666854:function(e,s,n){n.r(s),n.d(s,{default:()=>o,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/sum-squares","title":"Sum squares","description":"Sum squares ( series ) : Real","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sum-squares.md","sourceDirName":"commands-legacy","slug":"/commands/sum-squares","permalink":"/docs/ja/commands/sum-squares","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsum-squares.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sum-squares","title":"Sum squares","slug":"/commands/sum-squares","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sum","permalink":"/docs/ja/commands/sum"},"next":{"title":"Variance","permalink":"/docs/ja/commands/variance"}}'),d=n("785893"),a=n("250065");let i={id:"sum-squares",title:"Sum squares",slug:"/commands/sum-squares",displayed_sidebar:"docs"},t=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Sum squares"})," ( ",(0,d.jsx)(s.em,{children:"series"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u5F15\u6570"}),(0,d.jsx)(s.th,{children:"\u578B"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"series"}),(0,d.jsx)(s.td,{children:"Field, Array"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"\u5E73\u65B9\u548C\u3092\u6C42\u3081\u308B\u30C7\u30FC\u30BF"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(s.td,{children:"Real"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"series\u306E\u5E73\u65B9\u548C"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Sum squares"}),"\u306F\u3001",(0,d.jsx)(s.em,{children:"series"}),"\u306E\u5E73\u65B9\u548C\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.em,{children:"series"}),"\u304C\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u30D5\u30A3\uFF0D\u30EB\u30C9\u306E\u5834\u5408\u3001\u6A19\u6E96\u504F\u5DEE\u3092\u6C42\u3081\u308B\u305F\u3081\u306B\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["(\u4E00\u6B21\u5143\u307E\u305F\u306F\u4E8C\u6B21\u5143\u306E) \u914D\u5217\u3092 ",(0,d.jsx)(s.em,{children:"series"})," \u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u914D\u5217\u306F\u6574\u6570\u3001\u500D\u9577\u6574\u6570\u3001\u307E\u305F\u306F\u5B9F\u6570\u578B\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsxs)(s.p,{children:["\u4EE5\u4E0B\u306E\u4F8B\u306F\u5909\u6570",(0,d.jsx)(s.em,{children:"vSquares"}),"\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306F",(0,d.jsx)(s.em,{children:"vSquares"}),"\u306B\u4E00\u9023\u306E\u30C7\u30FC\u30BF\u306E\u5E73\u65B9\u548C\u3092\u4EE3\u5165\u3057\u307E\u3059\u3002",(0,d.jsx)(s.em,{children:"vSquares"}),"\u5909\u6570\u306F\u30EC\u30DD\u30FC\u30C8\u306E\u6700\u5F8C\u306E\u30D6\u30EC\u30FC\u30AF\u3067\u5370\u5237\u3055\u308C\u307E\u3059:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0vSquares:=Sum squares([Table1]DataSeries)\n"})}),"\n",(0,d.jsx)(s.p,{children:"\u4EE5\u4E0B\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u30D6\u30EC\u30FC\u30AF\u51E6\u7406\u3092\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3057\u3066\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u5370\u5237\u3059\u308B\u305F\u3081\u306B\u547C\u3073\u51FA\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Table1])\n\xa0ORDER BY([Table1];[Table1]DataSeries;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Table1]DataSeries)\n\xa0OUTPUT FORM([Table1];"PrintForm")\n\xa0PRINT SELECTION([Table1])\n'})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u6CE8:"})," ",(0,d.jsx)(s.a,{href:"/docs/ja/commands/break-level",children:"BREAK LEVEL"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5F15\u6570\u306F\u3001\u5370\u5237\u3059\u308B\u30EC\u30DD\u30FC\u30C8\u306E\u30D6\u30EC\u30FC\u30AF\u6570\u3068\u540C\u3058\u6570\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30D6\u30EC\u30FC\u30AF\u51E6\u7406\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F",(0,d.jsx)(s.em,{children:"\u5370\u5237"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(s.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(s.p,{children:"\u3053\u306E\u4F8B\u984C\u3067\u306F\u914D\u5217\u306B\u683C\u7D0D\u3055\u308C\u305F\u4E00\u9023\u306E\u5024\u306E\u5E73\u65B9\u548C\u3092\u53D6\u5F97\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vSumSquares:=Sum squares($ArrGrades)\n"})}),"\n",(0,d.jsx)(s.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/ja/commands/average",children:"Average"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/std-deviation",children:"Std deviation"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/sum",children:"Sum"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/ja/commands/variance",children:"Variance"})]}),"\n",(0,d.jsx)(s.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(s.td,{children:"28"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return i}});var r=n(667294);let d={},a=r.createContext(d);function i(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);