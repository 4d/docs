"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71181"],{272091:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/relate-one","title":"RELATE ONE","description":"RELATE ONE ( manyTable | Field {; choiceField} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/relate-one.md","sourceDirName":"commands-legacy","slug":"/commands/relate-one","permalink":"/docs/ja/20-R7/commands/relate-one","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-one","title":"RELATE ONE","slug":"/commands/relate-one","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE MANY SELECTION","permalink":"/docs/ja/20-R7/commands/relate-many-selection"},"next":{"title":"RELATE ONE SELECTION","permalink":"/docs/ja/20-R7/commands/relate-one-selection"}}'),i=s("785893"),t=s("250065");let r={id:"relate-one",title:"RELATE ONE",slug:"/commands/relate-one",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RELATE ONE"})," ( manyTable | Field {; ",(0,i.jsx)(n.em,{children:"choiceField"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5F15\u6570"}),(0,i.jsx)(n.th,{children:"\u578B"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"manyTable | Field"}),(0,i.jsx)(n.td,{children:"\u30C6\u30FC\u30D6\u30EB, \u30D5\u30A3\u30FC\u30EB\u30C9"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\u3059\u3079\u3066\u306E\u81EA\u52D5\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F1\u30C6\u30FC\u30D6\u30EB\u3078\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u5F15\u304B\u308C\u305F\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"choiceField"}),(0,i.jsx)(n.td,{children:"Field"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"1\u30C6\u30FC\u30D6\u30EB\u306E\u9078\u629E\u30D5\u30A3\u30FC\u30EB\u30C9"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"RELATE ONE"})," \u306B\u306F2\u3064\u306E\u5F62\u5F0F\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4E00\u756A\u76EE\u306E\u5F62\u5F0F\u3001",(0,i.jsx)(n.strong,{children:"RELATE ONE"})," **(manyTable)**\u306F\u3001\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E",(0,i.jsx)(n.em,{children:"manyTable"}),"\u306B\u5BFE\u3057\u3059\u3079\u3066\u306E\u81EA\u52D5n\u5BFE1\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u3064\u307E\u308A\u3001",(0,i.jsx)(n.em,{children:"manyTable"}),"\u306E\u81EA\u52D5n\u5BFE1\u30EA\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6301\u3064\u30D5\u30A3\u30FC\u30EB\u30C9\u3054\u3068\u306B\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u30EA\u30EC\u30FC\u30C8\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u30EA\u30EC\u30FC\u30C8\u3057\u305F\u30EC\u30B3\u30FC\u30C9\u3092\u9078\u629E\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u30D7\u30ED\u30BB\u30B9\u306B\u304A\u3044\u3066\u3001\u30EA\u30EC\u30FC\u30C8\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4E8C\u756A\u76EE\u5F62\u5F0F",(0,i.jsx)(n.strong,{children:"RELATE ONE"})," **(manyField{;choiceField})**\u306F\u3001",(0,i.jsx)(n.em,{children:"manyField"}),"\u306B\u95A2\u9023\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u691C\u7D22\u3057\u307E\u3059\u3002\u81EA\u52D5\u30EA\u30EC\u30FC\u30C8\u3067\u3042\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30EC\u30B3\u30FC\u30C9\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u3001",(0,i.jsx)(n.strong,{children:"RELATE ONE"})," \u306F\u30EA\u30EC\u30FC\u30C8\u5148\u30EC\u30B3\u30FC\u30C9\u3092\u30E1\u30E2\u30EA\u306B\u30ED\u30FC\u30C9\u3057\u3001\u3053\u308C\u3092\u305D\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304A\u3088\u3073\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4EFB\u610F\u306E\u5F15\u6570\u306E",(0,i.jsx)(n.em,{children:"choiceField"}),"\u306F\u3001\u30EA\u30EC\u30FC\u30C8\u5148\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,i.jsx)(n.em,{children:"choiceField"}),"\u306F\u6587\u5B57\u3001\u30C6\u30AD\u30B9\u30C8\u3001\u6570\u5024\u3001\u65E5\u4ED8\u3001\u6642\u9593\u3001\u307E\u305F\u306F\u30D6\uFF0D\u30EB\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u5177\u4F53\u7684\u306B\u306F\u3001\u30D4\u30AF\u30C1\u30E3\u307E\u305F\u306FBLOB \u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"choiceField"}),"\u304C\u6307\u5B9A\u3055\u308C\u3001\u30EA\u30EC\u30FC\u30C8\u5148\u30C6\u30FC\u30D6\u30EB\u3067\u8907\u6570\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u767A\u898B\u3057\u305F\u5834\u5408\u3001",(0,i.jsx)(n.strong,{children:"RELATE ONE"})," \u306F",(0,i.jsx)(n.em,{children:"manyField"}),"\u306E\u5185\u5BB9\u3068\u4E00\u81F4\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u3092\u30EA\u30B9\u30C8\u306B\u8868\u793A\u3057\u307E\u3059\u3002\u3053\u306E\u9078\u629E\u30EA\u30B9\u30C8\u306F\u3001\u5DE6\u306E\u6B04\u306B\u30EA\u30EC\u30FC\u30C8\u5148\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u3092\u3001\u53F3\u306E\u6B04\u306B",(0,i.jsx)(n.em,{children:"choiceField"}),"\u306E\u5185\u5BB9\u3092\u8868\u793A\u3057\u307E\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"manyField"}),"\u306E\u5185\u5BB9\u304C\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u8A18\u53F7 (@) \u3067\u7D42\u4E86\u3059\u308B\u5834\u5408\u3001\u8907\u6570\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u898B\u3064\u304B\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u4E00\u81F4\u3059\u308B\u30EC\u30B3\u30FC\u30C9\u304C1\u4EF6\u3057\u304B\u306A\u3051\u308C\u3070\u3001\u30EA\u30B9\u30C8\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u753B\u50CF\u306B\u306F\u3001\u30EC\u30B3\u30FC\u30C9\u304C\u5165\u529B\u4E2D\u3067\u3001\u9078\u629E\u30EA\u30B9\u30C8\u304C\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(66637).Z+"",width:"887",height:"528"})}),"\n",(0,i.jsx)(n.p,{children:"\u9078\u629E\u30EA\u30B9\u30C8\u3092\u8868\u793A\u3055\u305B\u308B\u306B\u306F\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3057\u305F:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Personnel]Company;[Companies]Region)\n"})}),"\n",(0,i.jsx)(n.p,{children:'\u3053\u3053\u3067\u306F\u30E6\u30FC\u30B6\u30FC\u306F\u3001LLC\u3067\u540D\u524D\u304C\u59CB\u307E\u308B\u4F1A\u793E\u3092\u63A2\u3059\u305F\u3081\u306B"LLC@"\u3068\u5165\u529B\u3057\u3001\u307E\u305F\u305D\u306E\u5834\u6240\u306B\u3064\u3044\u3066\u3082\u8ABF\u3079\u3066\u3044\u307E\u3059\u3002'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"choiceField"}),"\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u306E\u30EA\u30EC\u30FC\u30C8\u3092\u8A2D\u5B9A\u3059\u308B\u6642\u70B9\u3067\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u9078\u629E\u3092\u6307\u5B9A\u3059\u308B\u306E\u3068\u540C\u3058\u3053\u3068\u3067\u3059\u3002\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u9078\u629E\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u30014D Design Reference\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:""}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u3053\u306B ",(0,i.jsx)(n.em,{children:"[Invoice]"})," \u30C6\u30FC\u30D6\u30EB\u3068*[Customers]* \u30C6\u30FC\u30D6\u30EB\u304C\uFF12\u3064\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u30EA\u30EC\u30FC\u30C8\u306B\u3088\u308A\u95A2\u9023\u3065\u3051\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u3072\u3068\u3064\u306F ",(0,i.jsx)(n.em,{children:"[Invoice]Bill to"})," \u304B\u3089*[Customers]Number* \u3078\u3001\u3082\u3046\u3072\u3068\u3064\u306F*[Invoice]Ship to* \u304B\u3089*[Customers]Number* \u306B\u30EA\u30EC\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(775490).Z+"",width:"313",height:"232"})}),"\n",(0,i.jsx)(n.p,{children:'\u4EE5\u4E0B\u306F\u3001[Invoice] \u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A9\u30FC\u30E0\u304C"Bill to"\u3068 "Send to"\u306E\u60C5\u5831\u3092\u8868\u793A\u3057\u3066\u3044\u308B\u69D8\u5B50\u3067\u3059:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(743171).Z+"",width:"682",height:"460"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E21\u65B9\u306E\u30EA\u30EC\u30FC\u30C8\u5148\u306F\u540C\u3058[Customers]\u30C6\u30FC\u30D6\u30EB\u306B\u306A\u3063\u3066\u304A\u308A\u3001\u540C\u6642\u306B\u8ACB\u6C42\u5148\u3068\u767A\u9001\u5148\u306E\u60C5\u5831\u3092\u5F97\u308B\u3053\u3068\u306F\u51FA\u6765\u307E\u305B\u3093\u3002\u30D5\u30A9\u30FC\u30E0\u306B\u4E21\u65B9\u306E\u4F4F\u6240\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306B\u306F\u3001\u5909\u6570\u3068RELATE ONE\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 \u3082\u3057\u3001[Customers]\u30D5\u30A3\u30FC\u30EB\u30C9\u3092\u8868\u793A\u306B\u4F7F\u7528\u3057\u305F\u306A\u3089\u3001\u4E00\u65B9\u306E\u30EA\u30EC\u30FC\u30C8\u304B\u3089\u5F97\u3089\u308C\u305F\u30C7\u30FC\u30BF\u3057\u304B\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0B\u306F[Invoice]Bill to\u3068[Invoice]Ship to\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9\u3067\u3059\u3002\u3053\u308C\u3089\u306F\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u308B\u3068\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"[Invoice]Bill to"})," \u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Invoice]Bill to)\n\xa0vAddress1:=[Customers]Address\n\xa0vCity1:=[Customers]City\n\xa0vState1:=[Customers]State\n\xa0vZIP1:=[Customers]ZIP\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"[Invoice]Ship to"})," \u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30E1\u30BD\u30C3\u30C9:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0RELATE ONE([Invoice]Ship to)\n\xa0vAddress2:=[Customers]Address\n\xa0vCity2:=[Customers]City\n\xa0vState2:=[Customers]State\n\xa0vZIP2:=[Customers]ZIP\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,i.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u6B63\u3057\u304F\u5B9F\u884C\u3055\u308C\u30EA\u30EC\u30FC\u3068\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u30ED\u30FC\u30C9\u3055\u308C\u308B\u3068\u3001OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30E6\u30FC\u30B6\u304C(\u30EA\u30EC\u30FC\u30C8\u3055\u308C\u305F\u30EC\u30B3\u30FC\u30C9\u304C\u66F4\u65B0\u3055\u308C\u305F\u3068\u304D\u306B\u8868\u793A\u3055\u308C\u308B) \u30EC\u30B3\u30FC\u30C9\u9078\u629E\u30C0\u30A4\u30A2\u30ED\u30B0\u30DC\u30C3\u30AF\u30B9\u3067",(0,i.jsx)(n.strong,{children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),"\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u3001OK\u5909\u6570\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/old-related-one",children:"OLD RELATED ONE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/ja/20-R7/commands/relate-many",children:"RELATE MANY"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,i.jsx)(n.td,{children:"42"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,i.jsx)(n.td,{children:"OK"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,i.jsx)(n.td,{})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},66637:function(e,n,s){s.d(n,{Z:function(){return d}});let d=s.p+"assets/images/pict2287719.en-6e09cc9b4743086722961e64980d580b.png"},775490:function(e,n,s){s.d(n,{Z:function(){return d}});let d=s.p+"assets/images/pict2287721.en-495f83a4d066dd485334d9285e0e856d.png"},743171:function(e,n,s){s.d(n,{Z:function(){return d}});let d=s.p+"assets/images/pict2287723.en-67f2b7a642ceea2256f7896cbcd6065e.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var d=s(667294);let i={},t=d.createContext(i);function r(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);