"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16596"],{830548:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/distinct-attribute-values","title":"DISTINCT ATTRIBUTE VALUES","description":"DISTINCT ATTRIBUTE VALUES ( objectField ; path ; valuesArray )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/distinct-attribute-values.md","sourceDirName":"commands-legacy","slug":"/commands/distinct-attribute-values","permalink":"/docs/ja/commands/distinct-attribute-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdistinct-attribute-values.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"distinct-attribute-values","title":"DISTINCT ATTRIBUTE VALUES","slug":"/commands/distinct-attribute-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISTINCT ATTRIBUTE PATHS","permalink":"/docs/ja/commands/distinct-attribute-paths"},"next":{"title":"DISTINCT VALUES","permalink":"/docs/ja/commands/distinct-values"}}'),d=s("785893"),r=s("250065");let i={id:"distinct-attribute-values",title:"DISTINCT ATTRIBUTE VALUES",slug:"/commands/distinct-attribute-values",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:".length \u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528",id:"length-\u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528",level:5},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function j(n){let e={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," ( ",(0,d.jsx)(e.em,{children:"objectField"})," ; ",(0,d.jsx)(e.em,{children:"path"})," ; ",(0,d.jsx)(e.em,{children:"valuesArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"objectField"}),(0,d.jsx)(e.td,{children:"Field"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u91CD\u8907\u3057\u306A\u3044\u5C5E\u6027\u5024\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u305F\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"path"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u91CD\u8907\u3057\u306A\u3044\u5024\u3092\u53D6\u5F97\u3057\u305F\u3044\u5C5E\u6027\u3078\u306E\u30D1\u30B9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"valuesArray"}),(0,d.jsx)(e.td,{children:"Text array, Integer array, Boolean array, Date array, Time array"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"\u5C5E\u6027\u30D1\u30B9\u5185\u306E\u91CD\u8907\u3057\u306A\u3044\u5024"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u30C6\u30FC\u30DE:"})," \u914D\u5217"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"DISTINCT ATTRIBUTE VALUES"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u6240\u5C5E\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u306E\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(e.em,{children:"objectField"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u30D5\u30A3\u30FC\u30EB\u30C9\u5185\u306E\u3001",(0,d.jsx)(e.em,{children:"path"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3057\u305F\u5C5E\u6027\u304B\u3089\u53D6\u5F97\u3057\u305F\u91CD\u8907\u3057\u306A\u3044(\u56FA\u6709\u306E)\u5024\u3092\u542B\u3080\u914D\u5217",(0,d.jsx)(e.em,{children:"valuesArray"}),"\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002",(0,d.jsx)(e.em,{children:"objectField"}),"\u5F15\u6570\u3067\u6307\u5B9A\u3059\u308B\u30D5\u30A3\u30FC\u30EB\u30C9\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u578B\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3064\u304D\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u3082\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306A\u3057\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"path"}),' \u5F15\u6570\u306B\u306F\u3001\u6709\u52B9\u306A\u5C5E\u6027\u3078\u306E\u30D1\u30B9\u3092\u6E21\u3057\u307E\u3059\u3002\u30CD\u30B9\u30C8\u3055\u308C\u305F\u5C5E\u6027\u3078\u306E\u30D1\u30B9\u3092\u5B9A\u7FA9\u3059\u308B\u306B\u306F\u6A19\u6E96\u306E\u30C9\u30C3\u30C8\u8868\u8A18\u3092\u4F7F\u7528\u3057\u3066\u4E0B\u3055\u3044\u3002\u4F8B\u3048\u3070\u3001"company.address.number"\u306E\u3088\u3046\u306B\u3067\u3059\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u540D\u306F\u5927\u6587\u5B57\u3068\u5C0F\u6587\u5B57\u3092\u533A\u5225\u3059\u308B\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002']}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"valuesArray"}),"\u5F15\u6570\u306B\u6E21\u3059\u914D\u5217\u306F\u3001",(0,d.jsx)(e.em,{children:"path"}),'\u5F15 \u6570\u3067\u6307\u5B9A\u3057\u305F\u5C5E\u6027\u3068\u540C\u3058\u578B\u3067\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3068\u3044\u3046\u70B9\u306B\u6CE8\u610F\u3057\u3066\u4E0B\u3055\u3044\u3002\u5024\u306F\u30B9\u30AB\u30E9\u30FC\u5024\u3067\u3042\u308B\u3001\u4EE5\u4E0B\u306E\u914D\u5217\u578B\u306E\u307F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u3059: \u30C6\u30AD\u30B9\u30C8\u3001\u6570\u5B57\u3001\u30D6\u30FC\u30EB\u3001\u65E5\u4ED8\u3001\u6642\u9593(\u30DD\u30A4\u30F3\u30BF\u30FC\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001Blob\u3001\u753B\u50CF\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u305B\u3093)\u3002 \u5168\u3066\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5C5E\u6027\u306E\u5024\u304C\u540C\u3058\u578B\u3067\u3042\u308B\u3068\u3044\u3046\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044\u3002\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306F\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u5C5E\u6027\u306B\u304A\u3044\u3066\u3001\u4E00\u3064\u306E\u30EC\u30B3\u30FC\u30C9\u306B"Monday"\u3001\u5225\u306E\u30EC\u30B3\u30FC\u30C9\u306B10125\u304C\u5165\u3063\u3066\u3044\u305F\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3059\u3002']}),"\n",(0,d.jsx)(e.p,{children:"\u547C\u3073\u51FA\u3057\u5F8C\u306B\u3001\u914D\u5217\u306E\u30B5\u30A4\u30BA\u306F\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u5185\u3067\u898B\u3064\u304B\u3063\u305F\u56FA\u6709\u306E\u5024\u306E\u6570\u3068\u540C\u3058\u306B\u306A\u308A\u307E\u3059\u3002\u30B3\u30DE\u30F3\u30C9\u306F\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u307E\u305F\u306F\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3057\u307E\u305B\u3093\u3002"}),"\n",(0,d.jsx)(e.h5,{id:"length-\u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528",children:".length \u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u4F7F\u7528"}),"\n",(0,d.jsxs)(e.p,{children:['\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u306F"length"\u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u914D\u5217\u578B\u306E\u5168\u3066\u306E\u5C5E\u6027\u306B\u5BFE\u3057\u3066\u81EA\u52D5\u7684\u306B\u4F7F\u7528\u53EF\u80FD\u3067\u3001\u914D\u5217\u306E\u30B5\u30A4\u30BA\u3001\u3064\u307E\u308A\u683C\u7D0D\u3055\u308C\u308B\u8981\u7D20\u306E\u6570\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u30AF\u30A8\u30EA\u3067\u4F7F\u7528\u3055\u308C\u308B\u4E8B\u3092\u60F3\u5B9A\u3057\u3066\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059(',(0,d.jsx)(e.strong,{children:"QUERY BY ATTRIBUTE"}),(0,d.jsx)(e.a,{href:"/docs/ja/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002\u307E\u305F",(0,d.jsx)(e.strong,{children:"DISTINCT ATTRIBUTE VALUES"}),"\u30B3\u30DE\u30F3\u30C9\u306B\u5BFE\u3057\u3066\u4F7F\u7528\u3059\u308B\u4E8B\u3067\u3001\u5C5E\u6027\u306E\u7570\u306A\u308B\u914D\u5217\u30B5\u30A4\u30BA\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u3001[Customer]full_Data \u3068\u3044\u3046\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u304C\u3042\u308A\u3001\u30EC\u30B3\u30FC\u30C9\u304C15\u3042\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{src:s(268201).Z+"",width:"892",height:"416"})}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3057\u305F\u5834\u5408:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:'\xa0ARRAY LONGINT(aLAges;0)\n\xa0ARRAY LONGINT(aLAgesChild;0)\n\xa0ARRAY LONGINT(aLChildNum;0)\n\xa0ALL RECORDS([Customer])\n\xa0\xa0//"age"\u5C5E\u6027\u306E\u91CD\u8907\u3057\u306A\u3044\u5024\u3092\u53D6\u5F97\n\xa0DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)\n\xa0\xa0//"Children"\u914D\u5217\u306E"age"\u5C5E\u6027\u306E\u91CD\u8907\u3057\u306A\u3044\u5024\u3092\u53D6\u5F97\n\xa0DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children[].age";aLAgesChild)\n\xa0\xa0//length\u4EEE\u60F3\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3057\u3066\u5B50\u4F9B\u306E\u91CD\u8907\u3057\u306A\u3044\u5024\u3092\u53D6\u5F97\n\xa0DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children.length";aLChildNum)\n'})}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"aLAges"})," \u914D\u5217\u306B\u306F\u4EE5\u4E0B\u306E\u8981\u7D20\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u8981\u7D20"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u5024"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"33"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"35"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:"36"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:"40"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"5"}),(0,d.jsx)(e.td,{children:"42"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"6"}),(0,d.jsx)(e.td,{children:"44"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{children:"52"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"54"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"9"}),(0,d.jsx)(e.td,{children:"60"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"aLAgesChild"})," \u914D\u5217\u306B\u306F\u4EE5\u4E0B\u306E\u8981\u7D20\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u8981\u7D20"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u5024"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"4"}),(0,d.jsx)(e.td,{children:"5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"5"}),(0,d.jsx)(e.td,{children:"6"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"6"}),(0,d.jsx)(e.td,{children:"10"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{children:"12"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"8"}),(0,d.jsx)(e.td,{children:"14"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"9"}),(0,d.jsx)(e.td,{children:"15"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"10"}),(0,d.jsx)(e.td,{children:"16"})]})]})]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.em,{children:"aLChildNum"})," \u914D\u5217\u306B\u306F\u4EE5\u4E0B\u306E\u8981\u7D20\u304C\u683C\u7D0D\u3055\u308C\u307E\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u8981\u7D20"})}),(0,d.jsx)(e.th,{children:(0,d.jsx)(e.strong,{children:"\u5024"})})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"2"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"3"}),(0,d.jsx)(e.td,{children:"3"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/commands/distinct-attribute-paths",children:"DISTINCT ATTRIBUTE PATHS"})})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(j,{...n})}):j(n)}},268201:function(n,e,s){s.d(e,{Z:function(){return t}});let t=s.p+"assets/images/pict2994114.en-68a05af42526ae8a3e86ce9c6c663112.png"},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);