"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81969"],{873219:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-get-pointer","title":"OBJECT Get pointer","description":"OBJECT Get pointer {( selector {; objectName {; subformName}})} : Pointer","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-pointer","permalink":"/docs/ja/20-R7/commands/object-get-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-pointer","title":"OBJECT Get pointer","slug":"/commands/object-get-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get placeholder","permalink":"/docs/ja/20-R7/commands/object-get-placeholder"},"next":{"title":"OBJECT GET PRINT VARIABLE FRAME","permalink":"/docs/ja/20-R7/commands/object-get-print-variable-frame"}}'),s=t("785893"),c=t("250065");let d={id:"object-get-pointer",title:"OBJECT Get pointer",slug:"/commands/object-get-pointer",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function j(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get pointer"})," {( ",(0,s.jsx)(n.em,{children:"selector"})," {; ",(0,s.jsx)(n.em,{children:"objectName"})," {; ",(0,s.jsx)(n.em,{children:"subformName"}),"}})} : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30AB\u30C6\u30B4\u30EA"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subformName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get pointer"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001",(0,s.jsx)(n.em,{children:"selector"}),"\u5F15\u6570\u306E\u5024\u306B\u57FA\u3065\u304D\u3001\u7570\u306A\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u306B\u306F*Form Objects (Access)*\u30C6\u30FC\u30DE\u306E\u5B9A\u6570\u3092\u6E21\u3057\u307E\u3059:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Object current (",(0,s.jsx)(n.em,{children:"selector"}),"\u7701\u7565\u6642\u306E\u30C7\u30D5\u30A9\u30EB\u30C8): \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u3092\u6E21\u3059\u304B",(0,s.jsx)(n.em,{children:"selector"}),"\u5F15\u6570\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 (\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8) \u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u308C\u306F\u4EE5\u524D\u306E",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/self",children:"Self"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u307E\u3063\u305F\u304F\u540C\u3058\u52D5\u4F5C\u3067\u3059\u3002",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/self",children:"Self"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u4E92\u63DB\u6027\u306E\u76EE\u7684\u3067\u306E\u307F\u4FDD\u6301\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["Object with focus: \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002\u6B8B\u308A2\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570\u306F\u6E21\u3055\u308C\u3066\u3082\u7121\u8996\u3055\u308C\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"\u6CE8"})," ",(0,s.jsx)(n.strong,{children:":"})," \u3053\u308C\u306F\u5B8C\u5168\u306B",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/focus-object",children:"Focus object"}),"\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u3058\u52D5\u4F5C\u3067\u3059\u3002",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/focus-object",children:"Focus object"}),"\u30B3\u30DE\u30F3\u30C9\u306F4D v12\u3067\u5EC3\u6B62\u4E88\u5B9A\u3068\u306A\u308A\u307E\u3057\u305F\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"Object subform container: \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u3092\u6E21\u3059\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30B3\u30F3\u30C6\u30CA\u306B\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002\u6B8B\u308A2\u3064\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570\u306F\u6E21\u3055\u308C\u3066\u3082\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3053\u306E\u30BB\u30EC\u30AF\u30BF\u306F\u3001\u30B3\u30F3\u30C6\u30CA\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u305F\u5909\u6570\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u305F\u3081\u306B\u3001\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u308B\u30D5\u30A9\u30FC\u30E0\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3067\u306E\u307F\u5229\u7528\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["Object named: \u3053\u306E\u30BB\u30EC\u30AF\u30BF\u3092\u6E21\u3059\u5834\u5408\u30012\u756A\u76EE\u306E",(0,s.jsx)(n.em,{children:"objectName"}),"\u5F15\u6570\u3082\u6E21\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u3053\u306E\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u540D\u524D\u3092\u6301\u3064\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"\u6CE8"})," ",(0,s.jsx)(n.strong,{children:":"})," ",(0,s.jsx)(n.em,{children:"objectName"}),' \u304C\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306B\u5BFE\u5FDC\u3057\u3001"\u4E00\u89A7\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30BD\u30FC\u30B9\u30C6\u30FC\u30D6\u30EB\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308C\u3070\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u306E\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u3046\u3067\u306A\u3051\u308C\u3070Nil\u3092\u8FD4\u3057\u307E\u3059\u3002']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u4F7F\u7528\u3055\u308C\u305F\u6642\u3001Object current \u3042\u308B\u3044\u306F Object with focus \u30BB\u30EC\u30AF\u30BF\u30FC\u3092\u7528\u3044\u305F",(0,s.jsx)(n.strong,{children:"OBJECT Get pointer"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u5FDC\u3058\u3066\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3001\u30AB\u30E9\u30E0\u3001\u30D8\u30C3\u30C0\u30FC\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,s.jsx)(n.em,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u7BA1\u7406"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,s.jsx)(n.em,{children:"subformName"}),"\u5F15\u6570\u3092\u4F7F\u7528\u3057\u3066\u30AB\u30EC\u30F3\u30C8\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8 (\u3059\u306A\u308F\u3061\u89AA\u30D5\u30A9\u30FC\u30E0) \u306B\u5C5E\u3055\u306A\u3044",(0,s.jsx)(n.em,{children:"objectName"}),"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u4F7F\u7528\u53EF\u80FD\u306B\u3059\u308B\u306B\u306F\u3001Object named \u30BB\u30EC\u30AF\u30BF\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"subformName"}),"\u5F15\u6570\u304C\u6E21\u3055\u308C\u308B\u3068\u3001",(0,s.jsx)(n.strong,{children:"OBJECT Get pointer"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u307E\u305A\u30AB\u30EC\u30F3\u30C8\u30D5\u30A9\u30FC\u30E0\u5185\u3067",(0,s.jsx)(n.em,{children:"subformName"}),"\u3068\u3044\u3046\u540D\u79F0\u306E\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3092\u63A2\u3057\u3001\u305D\u3057\u3066\u305D\u306E\u4E2D\u3067",(0,s.jsx)(n.em,{children:"objectName"}),"\u3068\u3044\u3046\u540D\u79F0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u63A2\u3057\u307E\u3059\u3002\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u898B\u3064\u304B\u308B\u3068\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(n.p,{children:['\u540C\u3058\u89AA\u30D5\u30A9\u30FC\u30E0\u4E0A\u3067\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u3068\u3057\u30662\u56DE\u4F7F\u7528\u3055\u308C\u308B"SF"\u30D5\u30A9\u30FC\u30E0\u304C\u3042\u308A\u307E\u3059\u3002\u30B5\u30D6\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F\u305D\u308C\u305E\u308C"SF1"\u3068"SF2"\u3068\u3044\u3046\u540D\u524D\u304C\u4E0E\u3048\u3089\u308C\u307E\u3059\u3002"SF"\u30D5\u30A9\u30FC\u30E0\u306B\u306F',(0,s.jsx)(n.em,{children:"CurrentValue"}),'\u3068\u3044\u3046\u540D\u79F0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308A\u307E\u3059\u3002\u89AA\u30D5\u30A9\u30FC\u30E0\u306E\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u306E"On Load"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u3067\u3001SF1\u306E',(0,s.jsx)(n.em,{children:"CurrentValue"}),'\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092"January"\u306B\u3001SF2\u306E\u305D\u308C\u3092"February"\u306B\u521D\u671F\u5316\u3057\u307E\u3059:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Ptr : Pointer\n\xa0$Ptr:=OBJECT Get pointer(Object named;"CurrentValue";"SF1")\n\xa0$Ptr->:="January"\n\xa0$Ptr:=OBJECT Get pointer(Object named;"CurrentValue";"SF2")\n\xa0$Ptr->:="February"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/focus-object",children:"Focus object"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Form Objects (Access)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/object-get-name",children:"OBJECT Get name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/object-get-subform-container-value",children:"OBJECT Get subform container value"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/20-R7/commands/self",children:"Self"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(\u30D5\u30A9\u30FC\u30E0)"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"1124"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let s={},c=r.createContext(s);function d(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);