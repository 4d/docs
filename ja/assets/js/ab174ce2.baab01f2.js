"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60865"],{921222:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>o,assets:()=>l,toc:()=>a,frontMatter:()=>c});var t=JSON.parse('{"id":"commands-legacy/ob-set","title":"OB SET","description":"OB SET ( object ; property ; value {; property2 ; value2 ; ... ; propertyN ; valueN} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-set.md","sourceDirName":"commands-legacy","slug":"/commands/ob-set","permalink":"/docs/ja/commands/ob-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-set","title":"OB SET","slug":"/commands/ob-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB REMOVE","permalink":"/docs/ja/commands/ob-remove"},"next":{"title":"OB SET ARRAY","permalink":"/docs/ja/commands/ob-set-array"}}'),r=s("785893"),i=s("250065");let c={id:"ob-set",title:"OB SET",slug:"/commands/ob-set",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:4},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:4},{value:"\u4F8B\u984C 7",id:"\u4F8B\u984C-7",level:4},{value:"\u4F8B\u984C 8",id:"\u4F8B\u984C-8",level:4},{value:"\u4F8B\u984C 9",id:"\u4F8B\u984C-9",level:4},{value:"\u4F8B\u984C 10",id:"\u4F8B\u984C-10",level:4},{value:"\u4F8B\u984C 11",id:"\u4F8B\u984C-11",level:4},{value:"\u4F8B\u984C 12",id:"\u4F8B\u984C-12",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB SET"})," ( ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"property"})," ; ",(0,r.jsx)(n.em,{children:"value"})," {; ",(0,r.jsx)(n.em,{children:"property2"})," ; ",(0,r.jsx)(n.em,{children:"value2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"propertyN"})," ; ",(0,r.jsx)(n.em,{children:"valueN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Object, Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u69CB\u9020\u5316\u3055\u308C\u305F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"property"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u8A2D\u5B9A\u3057\u305F\u3044\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u540D\u524D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u65B0\u3057\u3044\u5024"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OB SET"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,r.jsx)(n.em,{children:"object"})," \u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30E9\u30F3\u30B2\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E2D\u306B\u3001\u4E00\u3064\u4EE5\u4E0A\u306E ",(0,r.jsx)(n.em,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"/",(0,r.jsx)(n.em,{children:"\u5024"})," \u306E\u30DA\u30A2\u3092\u4F5C\u6210\u3082\u3057\u304F\u306F\u5909\u66F4\u3057\u307E\u3059\u3002\u3067\u6307\u5B9A\u3059\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3001 ",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4F5C\u6210\u3055\u308C\u3066\u3044\u308B\u3001\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"property"})," \u5F15\u6570\u306B\u306F\u3001\u4F5C\u6210\u307E\u305F\u306F\u4FEE\u6B63\u3057\u305F\u3044\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u30E9\u30D9\u30EB(\u540D\u524D)\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044\u3002",(0,r.jsx)(n.em,{children:"object"})," \u5185\u306B\u6307\u5B9A\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u5024\u306F\u6307\u5B9A\u3057\u305F\u5024\u3067\u4E0A\u66F8\u304D\u3055\u308C\u307E\u3059\u3002\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u65B0\u305F\u306B\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"property"})," \u5F15\u6570\u3067\u306F\u3001\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u306F\u533A\u5225\u3055\u308C\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"value"})," \u5F15\u6570\u306B\u306F\u3001\u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u8A2D\u5B9A\u3057\u305F\u3044\u5024\u3092\u6E21\u3057\u3066\u4E0B\u3055\u3044\u3002\u6E21\u305B\u308B\u5024\u3068\u3057\u3066\u306F\u8907\u6570\u306E\u578B\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u6E21\u3059\u969B\u306B\u306F\u4EE5\u4E0B\u306E\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u305D\u308C\u306F\u305D\u306E\u307E\u307E\u306E\u5F62\u3067\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u5024\u3092\u89E3\u6C7A\u3059\u308B\u305F\u3081\u306B\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/json-stringify",children:"JSON Stringify"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u65E5\u4ED8\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u65E5\u4ED8\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u65E5\u4ED8\u578B\u3042\u308B\u3044\u306FISO\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(n.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),'\u5185\u306E"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002']}),"\n",(0,r.jsxs)(n.li,{children:["\u6642\u9593\u3092\u6E21\u3057\u305F\u5834\u5408\u3001",(0,r.jsx)(n.em,{children:"object"})," \u5185\u306B\u79D2\u6570(\u5B9F\u6570)\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u30E9\u30F3\u30B2\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3057\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u53C2\u7167\u3092\u4F7F\u7528\u3057\u3001\u5B9F\u969B\u306B\u30B3\u30D4\u30FC\u3092\u4F5C\u6210\u3059\u308B\u308F\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u305F\u3081\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u307E\u305F\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u7DE8\u96C6\u3057\u305F\u5834\u5408\u3001\u540C\u53C2\u7167\u306E\u4F7F\u7528\u5148\u3059\u3079\u3066\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["4D v16 R4 \u4EE5\u964D\u3001\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059 (",(0,r.jsx)(n.em,{children:"\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u308B\u30CD\u30A4\u30C6\u30A3\u30D6\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})," \u53C2\u7167)\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u30C6\u30AD\u30B9\u30C8\u578B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"FirstName";"John";"LastName";"Smith")\n\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u3001\u30D6\u30FC\u30EB\u578B\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"LastName";"smith";"age";42;"client";True)\n\xa0\xa0// $Object = {"LastName":"smith","age":42,"client":true}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsx)(n.p,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4FEE\u6B63\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n\xa0OB SET($Object ;"FirstName";"Paul")\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith"}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,r.jsx)(n.p,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"John","LastName":"Smith"}\n\xa0OB SET($Object ;"department";"Accounting")\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,r.jsx)(n.p,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u540D\u524D\u3092\u5909\u66F4\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0OB SET($Object ;"LastName";"James";"age";35)\n\xa0\xa0// $Object = {"LastName":"James","age":35}\n\xa0OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))\n\xa0\xa0// $Object = {"FirstName":""James","nom":"James","age":35}\n\xa0OB REMOVE($Object ;"LastName")\n\xa0\xa0// $Object = {"FirstName":""James","age":35}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,r.jsx)(n.p,{children:"\u30DD\u30A4\u30F3\u30BF\u30FC\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"Smith"}\n\xa0var $LastName : Text\n\xa0OB SET($Object ;"LastName";->$LastName)\n\xa0\xa0// $Object = {"FirstName":"Paul","LastName":"->$LastName"}\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0// $JsonString="{"FirstName":"Paul","LastName":""}\n\xa0$LastName:="Wesson"\n\xa0$JsonString:=JSON Stringify($Object)\n\xa0\xa0// $JsonString="{"FirstName":"Paul","LastName":"Wesson"}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-7",children:"\u4F8B\u984C 7"}),"\n",(0,r.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_smith : Object\n\xa0OB SET($ref_smith ;"name";"Smith")\n\xa0var $ref_emp : Object\n\xa0OB SET($ref_emp ;"employee";$ref_smith)\n\xa0$Json_string :=JSON Stringify($ref_emp)\n\xa0\xa0// $ref_emp = {"employee":{"name":"Smith"}} (object)\n\xa0\xa0// $Json_string = "{"employee":{"name":"Smith"}}" (string)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5024\u3092\u30D7\u30ED\u30B0\u30E9\u30E0\u5B9F\u884C\u4E2D\u306B\u5909\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref_smith ;"name";"Smyth")\n\xa0\xa0// $ref_smith = {"employee":{"name":"Smyth"}}\n\xa0$string:=JSON Stringify($ref_emp)\n\xa0\xa0// $string = "{"employee":{"name":"Smyth"}}"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-8",children:"\u4F8B\u984C 8"}),"\n",(0,r.jsx)(n.p,{children:"[Rect]Desc \u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u3068\u3057\u3066\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u308B\u3068\u304D\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE RECORD([Rect])\n\xa0[Rect]Name:="Blue square"\n\xa0OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")\n\xa0SAVE RECORD([Rect])\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-9",children:"\u4F8B\u984C 9"}),"\n",(0,r.jsxs)(n.p,{children:["4D\u65E5\u4ED8\u3092\u3001\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u60C5\u5831\u3092\u542B\u307E\u306A\u3044\u6587\u5B57\u5217\u306B\u5909\u63DB\u3057\u3066JSON\u306B\u30C7\u30FC\u30BF\u3092\u66F8\u304D\u51FA\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059\u3002\u5909\u63DB\u304C\u8D77\u304D\u308B\u306E\u306F\u65E5\u4ED8\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u4FDD\u5B58\u3055\u308C\u305F\u3068\u304D\u306A\u306E\u3067\u3001 ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/ob-set",children:"OB SET"}),"\u30B3\u30DE\u30F3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u524D\u306B ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$vDateSetting:=Get database parameter(Dates inside objects)\xa0//\u30AB\u30EC\u30F3\u30C8\u306E\u8A2D\u5B9A\u3092\u4FDD\u5B58\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0OB SET($o ;"myDate";Current date)\xa0// JSON \u3078\u306E\u5909\u63DB\n\xa0$json:=JSON Stringify($o)\n\xa0SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-10",children:"\u4F8B\u984C 10"}),"\n",(0,r.jsx)(n.p,{children:"4D Write Pro\u30A8\u30EA\u30A2\u3092\u542B\u3080\u30D5\u30A9\u30FC\u30E0\u30E1\u30BD\u30C3\u30C9\u5185\u306B\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u304F\u4E8B\u304C\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Validate)\xa0//v17 \u4EE5\u524D\u3067\u306FForm event \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30AB\u30B9\u30BF\u30E0\u5C5E\u6027\u3092\u8AAD\u307F\u51FA\u3059\u4E8B\u3082\u3067\u304D\u307E\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-11",children:"\u4F8B\u984C 11"}),"\n",(0,r.jsx)(n.p,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u30D7\u30ED\u30D1\u30C6\u30A3\u5024\u306B\u8A2D\u5B9A\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $person : Object\n\xa0var $myCol : Collection\n\xa0\n\xa0$person:=OB New\n\xa0$myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)\n\xa0OB SET($person;"Name";"Jones";"Children";$myCol)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-12",children:"\u4F8B\u984C 12"}),"\n",(0,r.jsx)(n.p,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u30D4\u30AF\u30C1\u30E3\u30FC\u3092\u4FDD\u5B58\u3059\u308B\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0READ PICTURE FILE("photo.jpg";$vPict)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0OB SET([Emp]Children;"photo";$vPict)\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/ob-get",children:"OB Get"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/ob-remove",children:"OB REMOVE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/ob-set-array",children:"OB SET ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/ob-set-null",children:"OB SET NULL"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"1220"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var t=s(667294);let r={},i=t.createContext(r);function c(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);