"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14143"],{184734:function(n,e,s){s.r(e),s.d(e,{metadata:()=>d,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>r});var d=JSON.parse('{"id":"commands-legacy/get-field-relation","title":"GET FIELD RELATION","description":"GET FIELD RELATION ( manyField ; one ; many {; *} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-relation","permalink":"/docs/ja/commands/get-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-relation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-relation","title":"GET FIELD RELATION","slug":"/commands/get-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET AUTOMATIC RELATIONS","permalink":"/docs/ja/commands/get-automatic-relations"},"next":{"title":"OLD RELATED MANY","permalink":"/docs/ja/commands/old-related-many"}}'),t=s("785893"),i=s("250065");let r={id:"get-field-relation",title:"GET FIELD RELATION",slug:"/commands/get-field-relation",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"GET FIELD RELATION"})," ( ",(0,t.jsx)(e.em,{children:"manyField"})," ; ",(0,t.jsx)(e.em,{children:"one"})," ; ",(0,t.jsx)(e.em,{children:"many"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5F15\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"manyField"}),(0,t.jsx)(e.td,{children:"Field"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u30EA\u30EC\u30FC\u30C8\u958B\u59CB\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"one"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"n\u5BFE1\u30EA\u30EC\u30FC\u30C8\u306E\u72B6\u614B"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"many"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"1\u5BFEn\u30EA\u30EC\u30FC\u30C8\u306E\u72B6\u614B"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"\u6307\u5B9A\u6642: one\u3068many\u306B\u306F\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3 \u306E\u73FE\u5728\u306E\u72B6\u614B\u304C\u8FD4\u308B (\u5024\u306F2\u307E\u305F\u306F3\u306E\u307F) \u7701\u7565\u6642 (\u30C7\u30D5\u30A9\u30EB\u30C8): \u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C \u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u3001one\u3068many\u306B1\u304C\u8FD4\u3055\u308C\u308B"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(e.p,{children:["GET FIELD RELATION\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u3001",(0,t.jsx)(e.em,{children:"manyField"}),"\u304B\u3089\u958B\u59CB\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u306E\u81EA\u52D5/\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u8ABF\u3079\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u8A2D\u5B9A\u3057\u305F\u81EA\u52D5\u30EA\u30EC\u30FC\u30C8\u3092\u306F\u3058\u3081\u3068\u3057\u3066\u3001\u3042\u3089\u3086\u308B\u30EA\u30EC\u30FC\u30C8\u3092\u8ABF\u3079\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.em,{children:"manyField"}),"\u306B\u306F\u3001\u72B6\u614B\u3092\u8ABF\u3079\u3088\u3046\u3068\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u958B\u59CB\u3059\u308Bn\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u6E21\u3057\u307E\u3059\u3002\u30D5\u30A3\u30FC\u30EB\u30C9",(0,t.jsx)(e.em,{children:"manyField"}),"\u304B\u3089\u958B\u59CB\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u5F15\u6570",(0,t.jsx)(e.em,{children:"one"}),"\u3068",(0,t.jsx)(e.em,{children:"many"}),"\u306B\u306F0\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u3066\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059 (\u5F8C\u8FF0)\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001\u5F15\u6570",(0,t.jsx)(e.em,{children:"one"}),"\u306B\u306F\u3001\u6307\u5B9A\u3057\u305Fn\u5BFE1\u30EA\u30EC\u30FC\u30C8\u304C\u81EA\u52D5\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u793A\u3059\u5024\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059:",(0,t.jsx)(e.br,{}),"\n0 = ",(0,t.jsx)(e.em,{children:"manyField"}),"\u304B\u3089\u59CB\u307E\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC16 (\u201C\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\u30EA\u30EC\u30FC\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u201D) \u304C\u751F\u6210\u3055\u308C\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n1 = \u6307\u5B9A\u3055\u308C\u305Fn\u5BFE1\u30EA\u30EC\u30FC\u30C8\u306E\u81EA\u52D5/\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u306F\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30EA\u30EC\u30FC\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u5185\u306E",(0,t.jsx)(e.strong,{children:"\u81EA\u52D51\u5BFE1\u30EA\u30EC\u30FC\u30C8"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3088\u308A\u8A2D\u5B9A\u3055\u308C\u305F\u3082\u306E\u3067\u3059 (\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u308A\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044)\u3002",(0,t.jsx)(e.br,{}),"\n2 = \u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306En\u5BFE1\u306E\u30EA\u30EC\u30FC\u30C8\u306F\u30DE\u30CB\u30E5\u30A2\u30EB\u3067\u3059\u3002",(0,t.jsx)(e.br,{}),"\n3 = \u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306En\u5BFE1\u306E\u30EA\u30EC\u30FC\u30C8\u306F\u81EA\u52D5\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u5F8C\u3001\u5F15\u6570",(0,t.jsx)(e.em,{children:"many"}),"\u306B\u306F\u3001\u6307\u5B9A\u3057\u305F1\u5BFEn\u30EA\u30EC\u30FC\u30C8\u304C\u81EA\u52D5\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B\u3092\u793A\u3059\u5024\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059:",(0,t.jsx)(e.br,{}),"\n0 = ",(0,t.jsx)(e.em,{children:"manyField"}),"\u304B\u3089\u59CB\u307E\u308B\u30EA\u30EC\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30A8\u30E9\u30FC16 (\u201C\u3053\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\u30EA\u30EC\u30FC\u30C8\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u201D) \u304C\u751F\u6210\u3055\u308C\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F0\u304C\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002",(0,t.jsx)(e.br,{}),"\n1 = \u6307\u5B9A\u3055\u308C\u305F1\u5BFEn\u30EA\u30EC\u30FC\u30C8\u306E\u81EA\u52D5/\u30DE\u30CB\u30E5\u30A2\u30EB\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u306F\u3001\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u306E\u30EA\u30EC\u30FC\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3\u5185\u306E",(0,t.jsx)(e.strong,{children:"\u81EA\u52D51\u5BFEn\u30EA\u30EC\u30FC\u30C8"}),"\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3088\u308A\u8A2D\u5B9A\u3055\u308C\u305F\u3082\u306E\u3067\u3059 (\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3088\u308A\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044)\u3002",(0,t.jsx)(e.br,{}),"\n2 = \u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306E1\u5BFEn\u306E\u30EA\u30EC\u30FC\u30C8\u306F\u30DE\u30CB\u30E5\u30A2\u30EB\u3067\u3059\u3002",(0,t.jsx)(e.br,{}),"\n3 = \u305D\u306E\u30D7\u30ED\u30BB\u30B9\u306E1\u5BFEn\u306E\u30EA\u30EC\u30FC\u30C8\u306F\u81EA\u52D5\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"one"}),"\u304A\u3088\u3073",(0,t.jsx)(e.em,{children:"many"}),"\u5F15\u6570\u306B\u8FD4\u3055\u308C\u305F\u5024\u306F\u3001\u201C\u201D \u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3068\u6BD4\u8F03\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5B9A\u6570"}),(0,t.jsx)(e.th,{children:"\u578B"}),(0,t.jsx)(e.th,{children:"\u5024"}),(0,t.jsx)(e.th,{children:"\u30B3\u30E1\u30F3\u30C8"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Automatic"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3001\u30EA\u30EC\u30FC\u30C8\u3092\u81EA\u52D5\u306B\u8A2D\u5B9A\u3059\u308B\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Manual"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"2"}),(0,t.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306B\u5BFE\u3057\u3001\u30EA\u30EC\u30FC\u30C8\u3092\u30DE\u30CB\u30E5\u30A2\u30EB\u306B\u8A2D\u5B9A\u3059\u308B\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"No relation"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"0"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Structure configuration"}),(0,t.jsx)(e.td,{children:"\u500D\u9577\u6574\u6570"}),(0,t.jsx)(e.td,{children:"1"}),(0,t.jsx)(e.td,{children:"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u30A6\u30A4\u30F3\u30C9\u30A6\u3067\u6307\u5B9A\u3055\u308C\u305F\u30EA\u30EC\u30FC\u30C8\u306E\u8A2D\u5B9A\u3092\u4F7F\u7528\u3059\u308B\u3002"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570 ",(0,t.jsx)(e.em,{children:"*"})," \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u30D7\u30ED\u30B0\u30E9\u30E0\u304B\u3089\u4FEE\u6B63\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3067\u3082\u3001\u30EA\u30EC\u30FC\u30C8\u306E\u30AB\u30EC\u30F3\u30C8\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u201C\u5F37\u5236\u7684\u306B\u201D\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u8A00\u3044\u63DB\u3048\u308C\u3070\u5F15\u6570 ",(0,t.jsx)(e.em,{children:"*"})," \u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u5F15\u6570",(0,t.jsx)(e.em,{children:"one"}),"\u304A\u3088\u3073",(0,t.jsx)(e.em,{children:"many"}),"\u306B\u306F\u50242\u307E\u305F\u306F3\u3060\u3051\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B9\u30C8\u30E9\u30AF\u30C1\u30E3\u304C\u3042\u308A\u307E\u3059:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:s(193784).Z+"",width:"365",height:"256"})}),"\n",(0,t.jsx)(e.p,{children:"[Employees]Company\u30D5\u30A3\u30FC\u30EB\u30C9\u304B\u3089[Companies]Name\u30D5\u30A3\u30FC\u30EB\u30C9\u3078\u30EA\u30F3\u30AF\u3059\u308B\u30EA\u30EC\u30FC\u30C8\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u6B21\u306E\u901A\u308A\u3067\u3059:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:s(1353).Z+"",width:"269",height:"650"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6B21\u306E\u30B3\u30FC\u30C9\u306FGET FIELD RELATION\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/commands/get-automatic-relations",title:"GET AUTOMATIC RELATIONS",children:"GET AUTOMATIC RELATIONS"}),"\u3001",(0,t.jsx)(e.a,{href:"/docs/ja/commands/set-field-relation",title:"SET FIELD RELATION",children:"SET FIELD RELATION"}),"\u3001\u304A\u3088\u3073",(0,t.jsx)(e.a,{href:"/docs/ja/commands/set-automatic-relations",title:"SET AUTOMATIC RELATIONS",children:"SET AUTOMATIC RELATIONS"}),"\u306B\u3088\u308A\u63D0\u4F9B\u3055\u308C\u308B\u3055\u307E\u3056\u307E\u306A\u6A5F\u80FD\u3068\u3068\u3082\u306B\u3001\u305D\u306E\u52B9\u679C\u3092\u793A\u3057\u307E\u3059:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0GET AUTOMATIC RELATIONS(one;many)\xa0//False, False\u3092\u8FD4\u3059\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//1,1\u3092\u8FD4\u3059\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//3,2\u3092\u8FD4\u3059\n\xa0\n\xa0SET FIELD RELATION([Employees]Company;2;0)\xa0//n\u5BFE1\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u30DE\u30CB\u30E5\u30A2\u30EB\u306B\u5909\u66F4\n\xa0\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//2,1\u3092\u8FD4\u3059\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//2, 2\u3092\u8FD4\u3059\n\xa0\n\xa0SET FIELD RELATION([Employees]Company;1;0)\xa0//\u30C7\u30B6\u30A4\u30F3\u30E2\u30FC\u30C9\u3067\u8A2D\u5B9A\u3055\u308C\u305F\n\xa0\xa0//n\u5BFE1\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u306B\u623B\u3059\n\xa0\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//1,1\u3092\u8FD4\u3059\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//3,2\u3092\u8FD4\u3059\n\xa0\n\xa0SET AUTOMATIC RELATIONS(True;True)\xa0//\u3059\u3079\u3066\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u3059\u3079\u3066\u306E\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u81EA\u52D5\u306B\u8A2D\u5B9A\n\xa0\n\xa0GET AUTOMATIC RELATIONS(one;many)\xa0//True, True\u3092\u8FD4\u3059\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//1,1\u3092\u8FD4\u3059\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//3,3\u3092\u8FD4\u3059\n"})}),"\n",(0,t.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/ja/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/ja/commands/set-field-relation",children:"SET FIELD RELATION"})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},193784:function(n,e,s){s.d(e,{Z:function(){return d}});let d=s.p+"assets/images/pict31607.en-1360d05d6566c3b5cd0b5eda86448a8b.png"},1353:function(n,e,s){s.d(e,{Z:function(){return d}});let d=s.p+"assets/images/pict31608.en-5f4ef41e11c8cc0ea518a455bfee8781.png"},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return r}});var d=s(667294);let t={},i=d.createContext(t);function r(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);