"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47493"],{31049:function(A,e,n){n.r(e),n.d(e,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>s,toc:()=>j,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/object-get-coordinates","title":"OBJECT GET COORDINATES","description":"OBJECT GET COORDINATES ( { ;} object ; left ; top ; right ; bottom* )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-coordinates.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-coordinates","permalink":"/docs/ja/20-R7/commands/object-get-coordinates","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-coordinates.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-coordinates","title":"OBJECT GET COORDINATES","slug":"/commands/object-get-coordinates","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get context menu","permalink":"/docs/ja/20-R7/commands/object-get-context-menu"},"next":{"title":"OBJECT Get corner radius","permalink":"/docs/ja/20-R7/commands/object-get-corner-radius"}}'),l=n("785893"),i=n("250065");let r={id:"object-get-coordinates",title:"OBJECT GET COORDINATES",slug:"/commands/object-get-coordinates",displayed_sidebar:"docs"},d=void 0,s={},j=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:2},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function c(A){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...A.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"OBJECT GET COORDINATES"})," ( {* ;} ",(0,l.jsx)(e.em,{children:"object"})," ; ",(0,l.jsx)(e.em,{children:"left"})," ; ",(0,l.jsx)(e.em,{children:"top"})," ; ",(0,l.jsx)(e.em,{children:"right"})," ; ",(0,l.jsx)(e.em,{children:"bottom"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5F15\u6570"}),(0,l.jsx)(e.th,{children:"\u578B"}),(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"*"}),(0,l.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u6307\u5B9A\u6642, Object\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (\u6587\u5B57\u5217) \u7701\u7565\u6642, Object\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"object"}),(0,l.jsx)(e.td,{children:"any"}),(0,l.jsx)(e.td,{children:"\u2192"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D (* \u6307\u5B9A\u6642), \u307E\u305F\u306F \u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570 (* \u7701\u7565\u6642)"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"left"}),(0,l.jsx)(e.td,{children:"Integer"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5DE6\u5EA7\u6A19"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"top"}),(0,l.jsx)(e.td,{children:"Integer"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E0A\u5EA7\u6A19"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"right"}),(0,l.jsx)(e.td,{children:"Integer"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u53F3\u5EA7\u6A19"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"bottom"}),(0,l.jsx)(e.td,{children:"Integer"}),(0,l.jsx)(e.td,{children:"\u2190"}),(0,l.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E0B\u5EA7\u6A19"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(e.p,{children:["OBJECT GET COORDINATES \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u5F15\u6570 ",(0,l.jsx)(e.em,{children:"*"})," \u304A\u3088\u3073",(0,l.jsx)(e.em,{children:"object"}),"\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u305F\u3001\u73FE\u5728\u306E\u30D5\u30A9\u30FC\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E",(0,l.jsx)(e.em,{children:"left"}),", ",(0,l.jsx)(e.em,{children:"top"}),", ",(0,l.jsx)(e.em,{children:"right"})," \u304A\u3088\u3073 ",(0,l.jsx)(e.em,{children:"bottom"}),"\u306E\u5EA7\u6A19 (\u30DD\u30A4\u30F3\u30C8) \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,l.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001",(0,l.jsx)(e.em,{children:"object"}),"\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3067\u3059 (\u6587\u5B57\u5217) \u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E * \u5F15\u6570\u3092\u7701\u7565\u3059\u308B\u3068\u3001",(0,l.jsx)(e.em,{children:"object"}),"\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u3067\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u6587\u5B57\u5217\u3067\u306F\u306A\u304F\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u53C2\u7167 (\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570\u306E\u307F) \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.em,{children:"object"})," \u306B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3092\u6E21\u3057\u3001\u305D\u3053\u3067\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u6587\u5B57 (\u201C@\u201D) \u3092\u4F7F\u7528\u3057\u30661\u3064\u4EE5\u4E0A\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u3001\u8FD4\u3055\u308C\u308B\u5EA7\u6A19\u306F\u95A2\u9023\u3059\u308B\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u69CB\u6210\u3055\u308C\u308B\u56DB\u89D2\u306E\u5EA7\u6A19\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Note:"}),' \u30D0\u30FC\u30B8\u30E7\u30F36.5\u304B\u3089\u306F\u3001\u6587\u5B57\u5217\u306B\u542B\u307E\u308C\u308B\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u6587\u5B57\uFF08@\uFF09\u306E\u53D6\u308A\u6271\u3044\u65B9\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3001"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D7\u30ED\u30D1\u30C6\u30A3"\u30B3\u30DE\u30F3\u30C9\u306B\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u30024D Design Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002']}),"\n",(0,l.jsx)(e.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3084\u30B3\u30DE\u30F3\u30C9\u304C\u30D5\u30A9\u30FC\u30E0\u5185\u3067\u547C\u3073\u51FA\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u5EA7\u6A19(0;0;0;0)\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u306F\u3001",(0,l.jsx)(e.strong,{children:"OBJECT GET COORDINATES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u89AA\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5EA7\u6A19\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u7279\u5B9A\u306E\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30D1\u30FC\u30C4\u3001\u3064\u307E\u308A\u30AB\u30E9\u30E0\u3001\u30D8\u30C3\u30C0\u30FC\u3001\u30D5\u30C3\u30BF\u30FC\u306A\u3069\u306E\u5EA7\u6A19\u3082\u8FD4\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002v14 R5\u4EE5\u524D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306E4D\u306B\u304A\u3044\u3066\u306F\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305F\u30A8\u30EA\u30A2\u306B\u95A2\u4FC2\u306A\u304F\u3001\u5E38\u306B\u89AA\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5EA7\u6A19\u306E\u307F\u3092\u8FD4\u3057\u3066\u304D\u307E\u3057\u305F\u3002\u4ECA\u5F8C\u306F\u3001",(0,l.jsx)(e.em,{children:"object"})," \u5F15\u6570\u3067\u53C2\u7167\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30D8\u30C3\u30C0\u30FC\u3001\u30AB\u30E9\u30E0\u3001\u30D5\u30C3\u30BF\u30FC\u306A\u3069\u306E\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308B\u5834\u5408\u306B\u306F\u3001\u8FD4\u3055\u308C\u308B\u5EA7\u6A19\u306F\u305D\u308C\u3089\u306E\u6307\u5B9A\u3055\u308C\u305F\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5EA7\u6A19\u3068\u306A\u308A\u307E\u3059\u3002\u3053\u306E\u65B0\u6A5F\u80FD\u3092\u4F7F\u7528\u3057\u3066\u4F8B\u3048\u3070\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30D8\u30C3\u30C0\u30FC\u306B\u30DE\u30A6\u30B9\u30AA\u30FC\u30D0\u30FC\u3057\u305F\u3068\u304D\u306B\u5C0F\u3055\u306A\u30A2\u30A4\u30B3\u30F3\u3092\u8868\u793A\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u305D\u308C\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u3001\u3068\u3044\u3046\u3088\u3046\u306A\u4E8B\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002",(0,l.jsx)(e.br,{}),"\n\u7D71\u4E00\u6027\u306E\u305F\u3081\u306B\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u306B\u306F\u3001\u4F7F\u7528\u3055\u308C\u308B\u53C2\u7167\u30D5\u30EC\u30FC\u30E0\u306F\u540C\u3058\u306B\u306A\u308A\u307E\u3059\u3002\u3064\u307E\u308A\u539F\u70B9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u542B\u3080\u30D5\u30A9\u30FC\u30E0\u306E\u5DE6\u4E0A\u7AEF\u306E\u89D2\u306B\u306A\u308A\u307E\u3059\u3002\u30EA\u30B9\u30C8\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001\u8FD4\u3055\u308C\u308B\u5EA7\u6A19\u306F\u7406\u8AD6\u5024\u306B\u306A\u308A\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u304C\u8D77\u3053\u308B\u307E\u3067\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\u72B6\u614B\u3092\u8003\u616E\u3059\u308B\u3068\u3044\u3046\u4E8B\u3067\u3059(\u89AA\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5EA7\u6A19\u306B\u3088\u308B\u30AB\u30C3\u30C6\u30A3\u30F3\u30B0\u306F\u7D99\u7D9A\u3055\u308C\u308B\u3068\u3044\u3046\u4E8B\u3067\u3059)\u3002\u7D50\u679C\u3068\u3057\u3066\u3001\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u305D\u306E\u5EA7\u6A19\u306B\u304A\u3044\u3066(\u4E00\u90E8\u307E\u305F\u306F\u5168\u4F53\u304C)\u975E\u8868\u793A\u306B\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u3082\u3042\u308A\u3001\u307E\u305F\u305D\u308C\u3089\u306E\u5EA7\u6A19\u306F\u30D5\u30A9\u30FC\u30E0\u306E\u9650\u754C\u306E\u5916\u5074(\u3042\u308B\u3044\u306F\u8CA0\u306E\u5024)\u306B\u306A\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u304B\u3069\u3046\u304B(\u305D\u3057\u3066\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3042\u308C\u3070\u3069\u306E\u90E8\u5206\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u306E\u304B)\u3092\u8ABF\u3079\u305F\u3044\u5834\u5408\u3001\u8FD4\u3055\u308C\u305F\u5EA7\u6A19\u3068\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5EA7\u6A19\u3092\u6BD4\u8F03\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u969B\u3001\u4EE5\u4E0B\u306E\u30EB\u30FC\u30EB\u304C\u9069\u7528\u3055\u308C\u307E\u3059:"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5168\u3066\u306E\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001\u89AA\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5EA7\u6A19(\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306B\u5BFE\u3057\u3066",(0,l.jsx)(e.strong,{children:"OBJECT GET COORDINATES"})," \u3092\u4F7F\u7528\u3057\u3066\u8FD4\u3055\u308C\u305F\u5024)\u306B\u57FA\u3065\u3044\u3066\u30AF\u30EA\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(e.li,{children:"\u30D8\u30C3\u30C0\u30FC\u3068\u30D5\u30C3\u30BF\u30FC\u30B5\u30D6\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u30AB\u30E9\u30E0\u306E\u4E2D\u8EAB\u306E\u4E0A\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30AB\u30E9\u30E0\u306E\u5EA7\u6A19\u304C\u30D8\u30C3\u30C0\u30FC\u3068\u30D5\u30C3\u30BF\u30FC\u306E\u7DDA\u306E\u5EA7\u6A19\u3068\u4EA4\u5DEE\u3057\u305F\u5834\u5408\u3001\u30AB\u30E9\u30E0\u306F\u305D\u306E\u4EA4\u70B9\u3067\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30AB\u30E9\u30E0\u306E\u8981\u7D20\u306F\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306A\u30AB\u30E9\u30E0\u306E\u8981\u7D20\u306E\u4E0A\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306A\u30AB\u30E9\u30E0\u5185\u306E\u8981\u7D20\u306E\u5EA7\u6A19\u304C\u30ED\u30C3\u30AF\u3055\u308C\u305F\u30AB\u30E9\u30E0\u306E\u8981\u7D20\u306E\u5EA7\u6A19\u3068\u4EA4\u5DEE\u3057\u305F\u5834\u5408\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u53EF\u80FD\u306A\u30AB\u30E9\u30E0\u306E\u8981\u7D20\u306F\u305D\u306E\u4EA4\u70B9\u3067\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4F8B\u3048\u3070\u3001\u4EE5\u4E0B\u306E\u753B\u50CF\u306E\u3088\u3046\u306B\u3001\u5EA7\u6A19\u304C\u8D64\u3044\u9577\u65B9\u5F62\u3067\u7E01\u3069\u3089\u308C\u305F",(0,l.jsx)(e.em,{children:"Capital"})," \u30AB\u30E9\u30E0\u306E\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:n(802403).Z+"",width:"668",height:"279"})}),"\n",(0,l.jsxs)(e.p,{children:["1\u679A\u76EE\u306E\u753B\u50CF\u306E\u3088\u3046\u306B\u3001\u30AB\u30E9\u30E0\u306F\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3088\u308A\u5927\u304D\u3044\u306E\u3067\u3001\u305D\u306E\u5EA7\u6A19\u306F\u30D5\u30C3\u30BF\u30FC\u3092\u542B\u3081\u3066\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u4E0B\u9650\u3092\u8D8A\u3048\u3066\u3044\u307E\u3059\u30022\u679A\u76EE\u306E\u753B\u50CF\u3067\u306F\u3001\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306F\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u304A\u308A\u3001\u30AB\u30E9\u30E0\u306F\u30D8\u30C3\u30C0\u30FC\u30A8\u30EA\u30A2\u3068",(0,l.jsx)(e.em,{children:"Language"}),' \u30AB\u30E9\u30E0\u306E"\u4E0B"\u3078\u3068\u79FB\u52D5\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u306E\u5834\u5408\u306B\u304A\u3044\u3066\u3082\u3001\u5B9F\u969B\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u90E8\u5206(\u7DD1\u306E\u90E8\u5206)\u3092\u8A08\u7B97\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u8D64\u306E\u9818\u57DF\u306E\u90E8\u5206\u3092\u5DEE\u3057\u5F15\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002']}),"\n",(0,l.jsx)(e.h2,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,l.jsx)(e.p,{children:'"button"\u3067\u59CB\u307E\u308B\u3059\u3079\u3066\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u3088\u3063\u3066\u5F62\u6210\u3055\u308C\u308B\u9577\u65B9\u5F62\u306E\u5EA7\u6A19\u3092\u5F97\u305F\u3044\u5834\u5408\u3092\u4EEE\u5B9A\u3057\u307E\u3059:'}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:'\xa0OBJECT GET COORDINATES(*;"button@";vLeft;vTop;vRight;vBottom)\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,l.jsx)(e.p,{children:"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u305F\u3081\u306B\u3001\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30EA\u30A2\u3092\u8D64\u3044\u56DB\u89D2\u3067\u56F2\u3044\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:n(628013).Z+"",width:"677",height:"313"})}),"\n",(0,l.jsx)(e.p,{children:"\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u306B\u304A\u3044\u3066\u3001\u4EE5\u4E0B\u306E\u69D8\u306B\u8A18\u8FF0\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-4d",children:'\xa0OBJECT SET VISIBLE(*;"rectangleInfo";False)\xa0//\u8D64\u3044\u56DB\u89D2\u3092\u521D\u671F\u5316\n\xa0$ptr:=OBJECT Get pointer(Object current)\n\xa0OBJECT GET COORDINATES($ptr->;$x1;$y1;$x2;$y2)\n\xa0OBJECT SET VISIBLE(*;"RedRect";True)\n\xa0OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)\n\xa0\n\xa0OBJECT GET COORDINATES(*;"LB1";$lbx1;$lby1;$lbx2;$lby2)\n\xa0If($lby1>$y1)|($lby2<$y2)\xa0// \u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u30A8\u30EA\u30A2\u304C\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5916\u5074\u306B\u3042\u308B\u5834\u5408\u3001\n\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"Alert";True)\xa0//\u8B66\u544A\u3092\u8868\u793A\u3057\u307E\u3059\n\xa0Else\n\xa0\xa0\xa0\xa0OBJECT SET VISIBLE(*;"Alert";False)\n\xa0End if\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u30E1\u30BD\u30C3\u30C9\u306F\u5EA7\u6A19\u306E\u7406\u8AD6\u5024\u3092\u8FD4\u3057\u307E\u3059\u3002\u30EA\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u304C\u30EA\u30B5\u30A4\u30BA\u3055\u308C\u305F\u5834\u5408\u3001\u3069\u306E\u90E8\u5206\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u306E\u304B\u3092\u8ABF\u3079\u308B\u305F\u3081\u306B\u30AF\u30EA\u30C3\u30D4\u30F3\u30B0\u3092\u518D\u8A08\u7B97\u304C\u5FC5\u8981\u306B\u306A\u308B\u5834\u5408\u3082\u3042\u308A\u307E\u3059:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:n(381044).Z+"",width:"562",height:"267"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"/docs/ja/20-R7/commands/convert-coordinates",children:"CONVERT COORDINATES"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/20-R7/commands/listbox-get-cell-coordinates",children:"LISTBOX GET CELL COORDINATES"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/20-R7/commands/object-move",children:"OBJECT MOVE"}),(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"/docs/ja/20-R7/commands/object-set-coordinates",children:"OBJECT SET COORDINATES"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{}),(0,l.jsx)(e.th,{})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,l.jsx)(e.td,{children:"663"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,l.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function o(A={}){let{wrapper:e}={...(0,i.a)(),...A.components};return e?(0,l.jsx)(e,{...A,children:(0,l.jsx)(c,{...A})}):c(A)}},628013:function(A,e,n){n.d(e,{Z:function(){return t}});let t="data:image/png;base64,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"},381044:function(A,e,n){n.d(e,{Z:function(){return t}});let t="data:image/png;base64,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+UwD2GQISw3TADYRMmqwHTt2dHR03OpaXi09FmdqLGn/OnZtXyIsWUQjzt2PyKjhLixjHX4TDwAghFoCAAihlgAAQqglAIAQagkAIIRaAgAIoZYAAEKoJQCAEGoJACCEWgIACKGWAABCqCUAgBBqCQAghFoCAAihlgAAQqglAIAQagkAIIRaagJMqQncPvajZuFNmv5v//IPpjcDS/hudYGw1BANEKyQ4zimtwFLmwqFKgud5CWGaIBgcREPACCEWgIACKGWAABCqCUAgBBqCQAghFoCAAihlgAAQqglAIAQagkAIIRaAgAIoZYAAEKoJQCAEGoJACCEWgIACKGWAABCqCUAgBBqCQAghFoCAAihlgAAQqglAIAQagkAIIRaAgAIoZYAAEKoJQCAEGoJACCEWgIACKGWAABCqCUAgBBqCQAghFoCAAihlgAAQqglAIAQagkAIIRaAgAIoZYAAEKoJQCAEGoJACCEWgIACKGWAABCqCUAgBBqCQAghFoCAAihlgAAQqglAIAQagkAIIRaAgAIoZYAAEKoJQCAEGoJACCEWgIACKGWAABCqCUAgBBqCQAghFoCAAihlgAAQqglAIAQagkAIIRaAgAIoZYAAEJWmd4A3JqpUMj0JgDACuJsCQAghFoCAAgJOY5jehsAALiKsyUAgJD/A4Lc9IipHO6xAAAAAElFTkSuQmCC"},802403:function(A,e,n){n.d(e,{Z:function(){return t}});let t=n.p+"assets/images/pict1752174.en-1303c8476b79199897d33fc9f1dc31d8.png"},250065:function(A,e,n){n.d(e,{Z:function(){return d},a:function(){return r}});var t=n(667294);let l={},i=t.createContext(l);function r(A){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof A?A(e):{...e,...A}},[e,A])}function d(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(l):A.components||l:r(A.components),t.createElement(i.Provider,{value:e},A.children)}}}]);