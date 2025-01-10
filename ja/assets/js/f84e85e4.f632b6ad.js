"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87732"],{859712:function(n,e,s){s.r(e),s.d(e,{default:()=>o,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/json-stringify","title":"JSON Stringify","description":"JSON Stringify ( value {; *} ) : Text","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-stringify.md","sourceDirName":"commands-legacy","slug":"/commands/json-stringify","permalink":"/docs/ja/commands/json-stringify","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-stringify.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-stringify","title":"JSON Stringify","slug":"/commands/json-stringify","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Resolve pointers","permalink":"/docs/ja/commands/json-resolve-pointers"},"next":{"title":"JSON Stringify array","permalink":"/docs/ja/commands/json-stringify-array"}}'),r=s("785893"),t=s("250065");let l={id:"json-stringify",title:"JSON Stringify",slug:"/commands/json-stringify",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u4F8B\u984C 5",id:"\u4F8B\u984C-5",level:4},{value:"\u4F8B\u984C 6",id:"\u4F8B\u984C-6",level:4},{value:"\u4F8B\u984C 7",id:"\u4F8B\u984C-7",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function j(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"JSON Stringify"})," ( ",(0,r.jsx)(e.em,{children:"value"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"value"}),(0,r.jsx)(e.td,{children:"Object, any"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"JSON\u6587\u5B57\u5217\u306B\u5909\u63DB\u3057\u305F\u3044\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"*"}),(0,r.jsx)(e.td,{children:"\u6F14\u7B97\u5B50"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u6574\u5F62\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3055\u308C\u305FJSON\u30C6\u30AD\u30B9\u30C8\u3092\u542B\u3080\u6587\u5B57\u5217"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"JSON Stringify"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001 ",(0,r.jsx)(e.em,{children:"value"})," \u5F15\u6570\u3092\u3001JSON\u6587\u5B57\u5217\u3078\u3068\u5909\u63DB\u3057\u307E\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"})," \u30B3\u30DE\u30F3\u30C9\u3068\u9006\u306E\u6319\u52D5\u3092\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3057\u305F\u3044\u30C7\u30FC\u30BF\u3092",(0,r.jsx)(e.em,{children:"value"})," \u306B\u6E21\u3057\u307E\u3059\u3002\u30B9\u30AB\u30E9\u30FC\u5024(\u6587\u5B57\u5217\u3001\u6570\u5B57\u3001\u65E5\u4ED8\u307E\u305F\u306F\u6642\u9593)\u307E\u305F\u306F4D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3042\u308B\u3044\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"}),' 4D\u65E5\u4ED8\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306B\u3088\u3063\u3066\u3001"yyyy-mm-dd" \u3042\u308B\u3044\u306F "YYYY-MM-DDThh:mm:sssZ" \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u5909\u63DB\u3055\u308C\u307E\u3059(',(0,r.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),'\u5185\u306B\u3042\u308B"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002']}),"\n",(0,r.jsxs)(e.p,{children:["\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3042\u308B\u3044\u306F\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u6E21\u3059\u5834\u5408\u3001\u5168\u3066\u306E\u578B\u306E\u5024\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059( ",(0,r.jsx)(e.em,{children:"JSON \u30C7\u30FC\u30BF\u578B"})," \u306E\u7AE0\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u304C\u3001\u4EE5\u4E0B\u306EJSON\u306E\u898F\u5247\u306B\u5247\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6587\u5B57\u5217\u306E\u5024\u306F\u5F15\u7528\u7B26\u3067\u56F2\u308F\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u30E6\u30CB\u30B3\u30FC\u30C9\u6587\u5B57\u306F\u5168\u3066\u4F7F\u7528\u3067\u304D\u307E\u3059\u304C\u3001\u7279\u6B8A\u6587\u5B57\u306F\u30D1\u30C3\u30AF\u30B9\u30E9\u30C3\u30B7\u30E5\u3067\u30A8\u30B9\u30B1\u30FC\u30D7\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u6570\u5B57\u306F \xb110.421e\xb110\u306E\u7BC4\u56F2\u5185\u306B\u304A\u3055\u307E\u3063\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"}),"\n",(0,r.jsx)(e.li,{children:'\u30D6\u30FC\u30EB\u578B:"true"\u307E\u305F\u306F"false"\u306E\u6587\u5B57\u5217'}),"\n",(0,r.jsx)(e.li,{children:'\u65E5\u4ED8:"yyyy-mm-dd" \u3042\u308B\u3044\u306F "\\"YYYY-MM-DDTHH:mm:ssZ"\\" \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u578B\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306B\u3088\u308B(\u4E0A\u8A18\u53C2\u7167)\u3002'}),"\n",(0,r.jsxs)(e.li,{children:["\u6642\u9593:\u5B9F\u6570\u578B(\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u79D2\u6570)",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.strong,{children:"\u6CE8:"})]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'\u30D4\u30AF\u30C1\u30E3\u30FC\u5C5E\u6027\u306F\u6B21\u306E\u6587\u5B57\u5217\u3078\u3068\u5909\u63DB\u3055\u308C\u307E\u3059: "[object Picture]"'}),"\n",(0,r.jsx)(e.li,{children:"\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5909\u6570\u3001\u914D\u5217\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306F\u3001\u6587\u5B57\u5217\u5316\u3057\u305F\u3068\u304D\u306B\u8A55\u4FA1\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4EFB\u610F\u306E*** \u6F14\u7B97\u5B50\u3092\u6E21\u3059\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u623B\u308A\u5024\u306E\u6587\u5B57\u5217\u306B\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u6587\u5B57\u3092\u542B\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308AJSON\u30C7\u30FC\u30BF\u306E\u8868\u793A\u304C\u6539\u5584\u3055\u308C\u307E\u3059(\u3044\u308F\u3086\u308B\u6574\u5F62\u30D5\u30A9\u30FC\u30DE\u30C6\u30A3\u30F3\u30B0\u3067\u3059)\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.p,{children:"\u30B9\u30AB\u30E9\u30FC\u5024\u306E\u5909\u63DB:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$vc:=JSON Stringify("Eureka!")\xa0// "Eureka!"\n\xa0$vel:=JSON Stringify(120)\xa0// "120"\n\xa0\n\xa0$vh:=JSON Stringify(?20:00:00?)\xa0// \u771F\u591C\u4E2D\u304B\u3089"72000" \u79D2\u304C\u7D4C\u904E\n\xa0SET DATABASE PARAMETER(Times inside objects;Times in milliseconds)\n\xa0$vhms:=JSON Stringify(?20:00:00?)\xa0// \u771F\u591C\u4E2D\u304B\u3089"72000000" \u30DF\u30EA\u79D2\u304C\u7D4C\u904E\n\xa0\n\xa0$vd:=JSON Stringify(!28/08/2013!)\xa0// "2013-08-27T22:00:00.000Z" (\u30D1\u30EA\u6642\u9593)\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0$vdd:=JSON Stringify(!28/08/2013!)\xa0// "2013-08-28T00:00:00.000Z"\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(e.p,{children:"\u7279\u6B8A\u6587\u5B57\u3092\u542B\u3080\u6587\u5B57\u5217\u306E\u5909\u63DB:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0$s:=JSON Stringify("{\\"name\\":\\"john\\"}")\n\xa0\xa0// $s="{\\\\"name\\\\":\\\\"john\\\\"}"\n\xa0$p:=JSON Parse($s)\n\xa0\xa0// $p={"name":"john"}\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsxs)(e.p,{children:["4D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3001",(0,r.jsx)(e.em,{children:"*"})," \u6F14\u7B97\u5B50\u3042\u308A\u3068\u306A\u3057\u3067\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u3057\u305F\u5834\u5408\u306E\u4F8B:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $MyContact : Text\n\xa0var $MyPContact : Text\n\xa0var $Contact;$Children : Object\n\xa0OB SET($Contact;"lastname";"Monroe";"firstname";"Alan")\n\xa0OB SET($Children;"firstname";"Jim";"age";"12")\n\xa0OB SET($Contact;"children";$Children)\n\xa0$MyContact:=JSON Stringify($Contact)\n\xa0$MyPContact:=JSON Stringify($Contact;*)\n\xa0\xa0//$MyContact= {"lastname":"Monroe","firstname":"Alan","children":{"firstname":"John","age":"12"}}\n\xa0\xa0//$MyPContact= {\\n\\t"lastname": "Monroe",\\n\\t"firstname": "Alan",\\n\\t"children": {\\n\\t\\t"firstname": "John",\\n\\t\\t"age": "12"\\n\\t}\\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306E\u30D5\u30A9\u30FC\u30DE\u30C6\u30A3\u30F3\u30B0\u3092\u4F7F\u3063\u305F\u5834\u5408\u306E\u5229\u70B9\u306FJSON\u304CWeb\u30A8\u30EA\u30A2\u306B\u8868\u793A\u3055\u308C\u308C\u3070\u4E00\u76EE\u77AD\u7136\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6A19\u6E96\u30D5\u30A9\u30FC\u30DE\u30C6\u30A3\u30F3\u30B0:",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.img,{src:s(656391).Z+"",width:"424",height:"30"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u6574\u5F62\u30D5\u30A9\u30FC\u30DE\u30C6\u30A3\u30F3\u30B0:",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.img,{src:s(769987).Z+"",width:"234",height:"123"})]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,r.jsx)(e.p,{children:"\u5909\u6570\u3078\u306E\u30DD\u30A4\u30F3\u30BF\u30FC\u306E\u4F7F\u7528\u4F8B:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $MyTestVar : Object\n\xa0var $name ;$jsonstring  : Text\n\xa0OB SET($MyTestVar;"name";->$name)\xa0// object definition\n\xa0\xa0// $MyTestVar= {"name":"->$name"}\n\xa0\n\xa0$jsonstring :=JSON Stringify($MyTestVar)\n\xa0\xa0// $jsonstring ="{"name":""}"\n\xa0\xa0//...\n\xa0\n\xa0$name:="Smith"\n\xa0$jsonstring :=JSON Stringify($MyTestVar)\n\xa0\xa0//$jsonstring = "{"name" : "Smith"}"\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-5",children:"\u4F8B\u984C 5"}),"\n",(0,r.jsx)(e.p,{children:"4D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $varjsonTextserialized : Text\n\xa0var $Contact : Object\n\xa0OB SET($Contact;"firstname";"Alan")\n\xa0OB SET($Contact;"lastname";"Monroe")\n\xa0OB SET($Contact;"age";40)\n\xa0OB SET($Contact;"phone";"[555-0100,555-0120]")\n\xa0\n\xa0$varjsonTextserialized:=JSON Stringify($Contact)\n\xa0\n\xa0\xa0// $varjsonTextserialized = "{"lastname":"Monroe","phone":"[555-0100,\n\xa0\xa0// 555-0120]","age":40,"firstname":"Alan"}"\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-6",children:"\u4F8B\u984C 6"}),"\n",(0,r.jsx)(e.p,{children:"\u65E5\u4ED8\u5024(\u30D1\u30EA\u6642\u9593)\u3092\u542B\u3093\u3067\u3044\u308B4D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u306E\u4F8B\u3092\u8003\u3048\u307E\u3059\u3002\u7D50\u679C\u306E\u6587\u5B57\u5217\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306B\u3088\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $varjsonTextserialized : Text\n\xa0var $Contact : Object\n\xa0OB SET($Contact;"name";"Smith";"birthday";!22/10/1975!)\n\xa0$varjsonTextserialized:=JSON Stringify($Contact)\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408:'}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'"name":"Smith","birthday":"1975-10-21T22:00:00.000Z"  \n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408:'}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'"name":"Smith","birthday":"1975-10-22"  \n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u8A2D\u5B9A\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,r.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-7",children:"\u4F8B\u984C 7"}),"\n",(0,r.jsx)(e.p,{children:"\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3(\u30D1\u30EA\u6642\u9593)\u306E\u5909\u63DB\u306E\u4F8B\u3092\u8003\u3048\u307E\u3059\u3002\u7D50\u679C\u306E\u6587\u5B57\u5217\u306F\u30AB\u30EC\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u8A2D\u5B9A\u306B\u3088\u308A\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0var $myTxtCol : Text\n\xa0$myCol:=New collection(33;"mike";!28/08/2017!;False)\n\xa0$myTxtCol:=JSON Stringify($myCol)\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408:'}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'$myTxtCol="[33,"mike","2017-08-27T22:00:00.000Z",false]"  \n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u30AA\u30D7\u30B7\u30E7\u30F3\u304C\u30C1\u30A7\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u5834\u5408:'}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'$myTxtCol="[33,"mike","2017-08-28",false]"  \n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(e.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-parse",children:"JSON Parse"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/json-stringify-array",children:"JSON Stringify array"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1217"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},769987:function(n,e,s){s.d(e,{Z:function(){return i}});let i="data:image/png;base64,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"},656391:function(n,e,s){s.d(e,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return l}});var i=s(667294);let r={},t=i.createContext(r);function l(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);