"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65225"],{423786:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>t,metadata:()=>d,assets:()=>l,toc:()=>a,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/add-record","title":"ADD RECORD","description":"ADD RECORD ( {;}{*} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/add-record.md","sourceDirName":"commands-legacy","slug":"/commands/add-record","permalink":"/docs/ja/commands/add-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"add-record","title":"ADD RECORD","slug":"/commands/add-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ACCEPT","permalink":"/docs/ja/commands/accept"},"next":{"title":"CANCEL","permalink":"/docs/ja/commands/cancel"}}'),r=s("785893"),c=s("250065");let t={id:"add-record",title:"ADD RECORD",slug:"/commands/add-record",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",level:4},{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ADD RECORD"})," ( {",(0,r.jsx)(e.em,{children:"aTable"}),"}{;}{*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"aTable"}),(0,r.jsx)(e.td,{children:"Table"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30C7\u30FC\u30BF\u5165\u529B\u306B\u4F7F\u7528\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u3057\u305F\u5834\u5408\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"*"}),(0,r.jsx)(e.td,{children:"Operator"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u96A0\u3059"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F",children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F4D \u306E\u521D\u671F\u306E\u30EA\u30EA\u30FC\u30B9\u306B\u5B9F\u88C5\u3055\u308C\u305F\u3082\u306E\u3067\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u3084\u57FA\u672C\u7684\u306A\u958B\u767A\u306B\u306F\u5F15\u304D\u7D9A\u304D\u6709\u7528\u3067\u3059\u3002\u3057\u304B\u3057\u306A\u304C\u3089\u3001\u30D3\u30EB\u30C9\u3055\u308C\u3001\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3055\u308C\u305F\u73FE\u4EE3\u7684\u306A\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u304A\u3044\u3066\u306F\u3001\u30C7\u30FC\u30BF\u30D5\u30ED\u30FC\u306B\u95A2\u3057\u3066\u3088\u308A\u9AD8\u5EA6\u306A\u6A5F\u80FD\u3068\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3092\u63D0\u4F9B\u3059\u308B"})," ",(0,r.jsxs)(e.em,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/dialog",children:"DIALOG"})," \u30B3\u30DE\u30F3\u30C9\u306B\u57FA\u3065\u3044\u305F\u4E00\u822C\u7684\u306A\u30D5\u30A9\u30FC\u30E0\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002"]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ADD RECORD"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30C6\u30FC\u30D6\u30EB",(0,r.jsx)(e.em,{children:"aTable"}),"\u307E\u305F\u306F",(0,r.jsx)(e.em,{children:"aTable"}),"\u304C\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB\u306B\u3001\u30E6\u30FC\u30B6\u304C\u65B0\u898F\u30EC\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ADD RECORD"})," \u306F\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u3092\u4F5C\u6210\u3001\u305D\u308C\u3092\u30AB\u30EC\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3068\u3057\u3001\u30AB\u30EC\u30F3\u30C8\u306E\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u3001\u30E6\u30FC\u30B6\u304C\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u3051\u5165\u308C\u308B\u3068\u3001\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u304C\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u306B\u3042\u308B\u552F\u4E00\u306E\u30EC\u30B3\u30FC\u30C9\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u56F3\u306F\u3001\u5178\u578B\u7684\u306A\u30C7\u30FC\u30BF\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(19775).Z+"",width:"642",height:"374"})}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306E\u30D5\u30A9\u30FC\u30E0\u306F\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u306E\u6700\u524D\u9762\u306E\u30A6\u30A4\u30F3\u30C9\u30A6\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30A6\u30A4\u30F3\u30C9\u30A6\u306B\u306F\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3068\u30B5\u30A4\u30BA\u30DC\u30C3\u30AF\u30B9\u304C\u3042\u308A\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u306E ",(0,r.jsx)(e.em,{children:"*"})," \u5F15\u6570\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u304C\u306A\u3044\u30A6\u30A4\u30F3\u30C9\u30A6\u3092\u63CF\u753B\u3055\u308C\u3001\u30D5\u30A9\u30FC\u30E0\u30A6\u30A3\u30F3\u30C9\u30A6\u306F\u7E2E\u5C0F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:s(19608).Z+"",width:"689",height:"414"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ADD RECORD"})," \u306F\u3001\u30E6\u30FC\u30B6\u304C\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u3051\u5165\u308C\u308B\u304B\u53D6\u308A\u6D88\u3059\u307E\u3067\u30D5\u30A9\u30FC\u30E0\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u30E6\uFF0D\u30B6\u304C\u8907\u6570\u306E\u30EC\u30B3\uFF0D\u30C9\u3092\u8FFD\u52A0\u3059\u308B\u5834\u5408\u306F\u3001\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u3054\u3068\u306B1\u56DE\u305A\u3064\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30E6\u30FC\u30B6\u304C\u4FDD\u5B58\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3001\u307E\u305F\u306Fenter\u30AD\u30FC\u3092\u62BC\u3059\u3001\u307E\u305F\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/accept",children:"ACCEPT"}),"\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30EC\u30B3\u30FC\u30C9\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u30E6\u30FC\u30B6\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3001\u307E\u305F\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u30AD\u30FC\u30B3\u30F3\u30D3\u30CD\u30FC\u30B7\u30E7\u30F3 (Windows\u3067\u306FCtrl-\u30D4\u30EA\u30AA\u30C9\u3001Mac OS\u3067\u306FCommand-\u30D4\u30EA\u30AA\u30C9) \u3092\u62BC\u3059\u3001\u307E\u305F\u306F",(0,r.jsx)(e.a,{href:"/docs/ja/commands/cancel",children:"CANCEL"})," \u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001\u30EC\u30B3\u30FC\u30C9\u306F\u4FDD\u5B58\u3055\u308C\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3067\u306F\u3001",(0,r.jsx)(e.em,{children:"aTable"})," \u306B\u6E21\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u304C\u8AAD\u307F\u66F8\u304D\u53EF\u80FD\u30E2\u30FC\u30C9\u3067\u3042\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30C6\u30FC\u30D6\u30EB\u304C\u8AAD\u307F\u8FBC\u307F\u306E\u307F\u30E2\u30FC\u30C9\u306E\u5834\u5408\u3067\u3082\u4F7F\u7528\u3059\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059(",(0,r.jsx)(e.em,{children:"\u30EC\u30B3\u30FC\u30C9\u306E\u30ED\u30C3\u30AF"}),"\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044)\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ADD RECORD"})," \u306E\u547C\u3073\u51FA\u3057\u5F8C\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B\u306F\u30EC\u30B3\u30FC\u30C9\u304C\u53D7\u3051\u5165\u308C\u3089\u308C\u308B\u30681\u304C\u3001\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u308B\u30680\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note:"})," \u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3001\u30EC\u30B3\u30FC\u30C9\u306F\u30E1\u30E2\u30EA\u4E0A\u306B\u6B8B\u3055\u308C\u305F\u307E\u307E\u3068\u306A\u308A\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u30DD\u30A4\u30F3\u30BF\u304C\u5909\u66F4\u3055\u308C\u308B\u524D\u306B",(0,r.jsx)(e.a,{href:"/docs/ja/commands/save-record",children:"SAVE RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308C\u3070\u3001\u30EC\u30B3\u30FC\u30C9\u306F\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(e.p,{children:"\u6B21\u306E\u4F8B\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u65B0\u3057\u3044\u30EC\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\u3059\u308B\u969B\u306B\u3088\u304F\u4F7F\u308F\u308C\u308B\u30EB\u30FC\u30D7\u3067\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Customers];"Std Input")\xa0// [Customers] \u30C6\u30FC\u30D6\u30EB\u306E\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3092\u8A2D\u5B9A\n\xa0REPEAT\xa0// \u30E6\u30FC\u30B6\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u307E\u3067\u30EB\u30FC\u30D7\n\xa0\xa0\xa0\xa0ADD RECORD([Customers];*)\xa0// [Customers] \u30C6\u30FC\u30D6\u30EB\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u8FFD\u52A0\n\xa0Until(OK=0)\xa0// \u30E6\u30FC\u30B6\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u307E\u3067\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsxs)(e.p,{children:["\u6B21\u306E\u4F8B\u306F\u3001\u9867\u5BA2\u30C7\u30FC\u30BF\u3092\u691C\u7D22\u3057\u3001\u305D\u306E\u691C\u7D22\u7D50\u679C\u306B\u3088\u308A\u30012\u3064\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u3046\u3061\u306E1\u3064\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u9867\u5BA2\u304C\u5168\u304F\u898B\u3064\u304B\u3089\u306A\u3044\u5834\u5408\u3001\u30E6\u30FC\u30B6\u306FADD RECORD\u30B3\u30DE\u30F3\u30C9\u3067\u65B0\u3057\u3044\u9867\u5BA2\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u5C11\u306A\u304F\u3068\u30821\u3064\u306E\u9867\u5BA2\u30EC\u30B3\u30FC\u30C9\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/modify-record",title:"MODIFY RECORD",children:"MODIFY RECORD"}),"\u306B\u3088\u308A\u6700\u521D\u306E\u30EC\u30B3\u30FC\u30C9\u304C\u8868\u793A\u3055\u308C\u3001\u3053\u306E\u30EC\u30B3\u30FC\u30C9\u3092\u4FEE\u6B63\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0READ WRITE([Customers])\n\xa0FORM SET INPUT([Customers];"Input")\xa0// \u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3092\u8A2D\u5B9A\n\xa0vlCustNum:=Num(Request("\u9867\u5BA2\u756A\u53F7\u3092\u5165\u529B:"))\xa0// \u9867\u5BA2\u756A\u53F7\u3092\u53D6\u5F97\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUERY([Customers];[Customers]CustNo=vlCustNum)\xa0// \u9867\u5BA2\u3092\u691C\u7D22\n\xa0\xa0\xa0\xa0If(Records in selection([Customers])=0)\xa0// \u9867\u5BA2\u304C\u898B\u3064\u304B\u3089\u306A\u3051\u308C\u3070\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ADD RECORD([Customers])\xa0// \u65B0\u898F\u306B\u9867\u5BA2\u3092\u8FFD\u52A0\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Locked([Customers])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MODIFY RECORD([Customers])\xa0// \u30EC\u30B3\u30FC\u30C9\u3092\u66F4\u65B0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0UNLOAD RECORD([Customers])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("\u30EC\u30B3\u30FC\u30C9\u306F\u73FE\u5728\u4F7F\u7528\u4E2D\u3067\u3059\u3002")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,r.jsx)(e.p,{children:"\u30EC\u30B3\u30FC\u30C9\u3092\u53D7\u3051\u5165\u308C\u308B\u3068OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304C1\u306B\u3001\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u30680\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002OK\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u306F\u30EC\u30B3\u30FC\u30C9\u304C\u53D7\u3051\u5165\u308C\u3089\u308C\u305F\u304B\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u305F\u5F8C\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/accept",children:"ACCEPT"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/cancel",children:"CANCEL"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/create-record",children:"CREATE RECORD"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/modify-record",children:"MODIFY RECORD"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/save-record",children:"SAVE RECORD"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"56"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2717"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,r.jsx)(e.td,{children:"OK"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u306E\u4F7F\u7528\u306F\u4E0D\u53EF"}),(0,r.jsx)(e.td,{})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},19775:function(n,e,s){s.d(e,{Z:function(){return d}});let d=s.p+"assets/images/pict2804768.en-90f1dbe0b38710d7f9696cee3162c305.png"},19608:function(n,e,s){s.d(e,{Z:function(){return d}});let d=s.p+"assets/images/pict2804770.en-5d1c5b3a4fa0cb23ab83527536f94b7e.png"},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return t}});var d=s(667294);let r={},c=d.createContext(r);function t(n){let e=d.useContext(c);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),d.createElement(c.Provider,{value:e},n.children)}}}]);