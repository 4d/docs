"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81915"],{28029:function(n,e,t){t.r(e),t.d(e,{default:()=>j,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","description":"LISTBOX GET PRINT INFORMATION ( { ;} object ; selector ; info* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-print-information.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-print-information","permalink":"/docs/ja/20-R8/commands/listbox-get-print-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-print-information.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","slug":"/commands/listbox-get-print-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET OBJECTS","permalink":"/docs/ja/20-R8/commands/listbox-get-objects"},"next":{"title":"LISTBOX Get property","permalink":"/docs/ja/20-R8/commands/listbox-get-property"}}'),r=t("785893"),i=t("250065");let d={id:"listbox-get-print-information",title:"LISTBOX GET PRINT INFORMATION",slug:"/commands/listbox-get-print-information",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"LISTBOX GET PRINT INFORMATION"})," ( {* ;} ",(0,r.jsx)(e.em,{children:"object"})," ; ",(0,r.jsx)(e.em,{children:"selector"})," ; ",(0,r.jsx)(e.em,{children:"info"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"*"}),(0,r.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsxs)(e.td,{children:["\u6307\u5B9A\u6642\u3001object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217)",(0,r.jsx)(e.br,{}),"\u7701\u7565\u6642\u3001object\u306F\u5909\u6570"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"object"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsxs)(e.td,{children:["\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642) \u307E\u305F\u306F ",(0,r.jsx)(e.br,{}),"\u5909\u6570 (* \u7701\u7565\u6642)"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"selector"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u53D6\u5F97\u3059\u308B\u60C5\u5831"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"info"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u73FE\u5728\u306E\u5024"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:["LISTBOX GET PRINT INFORMATION \u30B3\u30DE\u30F3\u30C9\u306F ",(0,r.jsx)(e.em,{children:"object"}),"\u3068***\u3067\u6307\u5B9A\u3057\u305F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5370\u5237\u306B\u95A2\u9023\u3059\u308B\u73FE\u5728\u306E\u60C5\u5831\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5185\u5BB9\u306E\u5370\u5237\u3092\u5236\u5FA1\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(e.em,{children:"object"}),"\u5F15\u6570\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u3067\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3055\u306A\u3044\u5834\u5408",(0,r.jsx)(e.em,{children:"object"}),"\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u5909\u6570\u53C2\u7167\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/print-object",title:"Print object",children:"Print object"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u3088\u308B\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5370\u5237\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u547C\u3070\u308C\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u5916\u3067\u306F\u3001\u610F\u5473\u306E\u3042\u308B\u5024\u3092\u8FD4\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"selector"}),"\u306B\u77E5\u308A\u305F\u3044\u60C5\u5831\u3092\u793A\u3059\u5024\u3092\u6E21\u3057\u3001",(0,r.jsx)(e.em,{children:"info"}),"\u306B\u306F\u6570\u5024\u307E\u305F\u306F\u30D6\u30FC\u30EB\u5909\u6570\u3092\u6E21\u3057\u307E\u3059\u3002",(0,r.jsx)(e.em,{children:"selector"}),'\u306B\u306F"',(0,r.jsx)(e.em,{children:"List Box"}),'"\u30C6\u30FC\u30DE\u306E\u4EE5\u4E0B\u306E\u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{children:"\u5024"}),(0,r.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"lk last printed row number"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"info"}),"\u306B\u5370\u5237\u3055\u308C\u305F\u6700\u5F8C\u306E\u884C\u756A\u53F7\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u6B21\u306B\u5370\u5237\u3055\u308C\u308B\u884C\u306E\u756A\u53F7\u304C\u5206\u304B\u308A\u307E\u3059\u3002",(0,r.jsx)(e.br,{}),"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u975E\u8868\u793A\u884C\u304C\u5B58\u5728\u3057\u305F\u308A",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"}),"\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u3066\u3044\u305F\u308A\u3059\u308B\u3068\u3001\u8FD4\u3055\u308C\u308B\u5024\u306F\u5B9F\u969B\u306B\u5370\u5237\u3055\u308C\u305F\u884C\u6570\u3088\u308A\u3082\u3001\u5927\u304D\u304F\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u884C\u756A\u53F71, 18\u305D\u3057\u306620\u304C\u5370\u5237\u3055\u308C\u308B\u3068\u3001",(0,r.jsx)(e.em,{children:"info"}),"\u306B\u306F20\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"lk printed height"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"3"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.em,{children:"info"}),"\u306B\u5B9F\u969B\u306B\u5370\u5237\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9AD8\u3055\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u8FD4\u3057\u307E\u3059 (\u30D8\u30C3\u30C0\u30FC\u3084\u7DDA\u7B49\u3092\u542B\u3080)\u3002\u5370\u5237\u3059\u308B\u884C\u6570\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u9AD8\u3055\u306B\u6E80\u305F\u306A\u3044\u5834\u5408\u3001\u9AD8\u3055\u306F\u81EA\u52D5\u3067\u6E1B\u3089\u3055\u308C\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"lk printed rows"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsxs)(e.td,{children:["\u3055\u3044\u3054\u306E",(0,r.jsx)(e.a,{href:"/docs/ja/20-R8/commands/print-object",title:"Print object",children:"Print object"}),"\u6700\u5F8C\u306E\u30B3\u30DE\u30F3\u30C9\u547C\u3073\u51FA\u3057\u6642\u306B\u5B9F\u969B\u306B\u5370\u5237\u3055\u308C\u305F\u884C\u6570\u3092",(0,r.jsx)(e.em,{children:"info"}),"\u306B\u8FD4\u3057\u307E\u3059\u3002\u3053\u306E\u6570\u5024\u306B\u306F\u968E\u5C64\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5834\u5408\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30D6\u30EC\u30FC\u30AF\u884C\u3082\u542B\u307E\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B20\u884C\u3042\u308A\u3001\u5947\u6570\u884C\u304C\u96A0\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001",(0,r.jsx)(e.em,{children:"info"}),"\u306F10\u306B\u306A\u308A\u307E\u3059\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"lk printing is over"}),(0,r.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,r.jsx)(e.td,{children:"2"}),(0,r.jsxs)(e.td,{children:["\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u6700\u5F8C\u306E (\u8868\u793A) \u884C\u304C\u5370\u5237\u3055\u308C\u305F\u304B\u3069\u3046\u304B\u3092\u793A\u3059\u30D6\u30FC\u30EB\u5024\u3092",(0,r.jsx)(e.em,{children:"info"}),"\u306B\u8FD4\u3057\u307E\u3059\u3002True = \u884C\u306F\u5370\u5237\u3055\u308C\u305F; \u305D\u3046\u3067\u306A\u3051\u308C\u3070False\u3002"]})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5370\u5237\u306B\u95A2\u3059\u308B\u539F\u5247\u306B\u3064\u3044\u3066\u306F",(0,r.jsx)(e.em,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5370\u5237"}),"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.p,{children:"\u3059\u3079\u3066\u306E\u884C\u304C\u5370\u5237\u3055\u308C\u308B\u307E\u3067\u5370\u5237\u3092\u884C\u3046:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("SalesForm")\n\xa0\n\xa0$Over:=False\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"mylistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($Over)\n\xa0\n\xa0CLOSE PRINTING JOB\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.p,{children:"\u7279\u5B9A\u306E\u884C\u304C\u96A0\u3055\u308C\u3066\u3044\u3066\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3092\u6700\u4F4E500\u884C\u5370\u5237\u3059\u308B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$GlobalPrinted:=0\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"mylistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)\n\xa0\xa0\xa0\xa0$GlobalPrinted:=$GlobalPrinted+$Printed\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($GlobalPrinted>=500)\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1110"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function j(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);