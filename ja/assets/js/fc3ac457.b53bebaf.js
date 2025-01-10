"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50692"],{678428:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/date","title":"Date","description":"Date ( expression ) : Date","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/date.md","sourceDirName":"commands-legacy","slug":"/commands/date","permalink":"/docs/ja/commands/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"date","title":"Date","slug":"/commands/date","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current time","permalink":"/docs/ja/commands/current-time"},"next":{"title":"Day number","permalink":"/docs/ja/commands/day-number"}}'),d=s("785893"),r=s("250065");let l={id:"date",title:"Date",slug:"/commands/date",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u4F8B\u984C 4",id:"\u4F8B\u984C-4",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Date"})," ( ",(0,d.jsx)(n.em,{children:"expression"})," ) : Date"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"expression"}),(0,d.jsx)(n.td,{children:"Text, Date"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u65E5\u4ED8\u3092\u8868\u3059\u6587\u5B57\u5217\u304B\u3001\u65E5\u4ED8\u578B\u306E\u5F0F"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u65E5\u4ED8"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Date"}),"\u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"expression"})," \u3092\u89E3\u91C8\u3057\u3001\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059\u3002\u5F15\u6570\u306F\u3001ISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304B\u30B7\u30B9\u30C6\u30E0\u30EC\u30D9\u30EB\u3067\u8A2D\u5B9A\u3055\u308C\u308B\u5730\u57DF\u8A2D\u5B9A\u306B\u5F93\u308F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8"}),(0,d.jsx)(n.br,{}),'\n\u3053\u306E\u6587\u5B57\u5217\u306F"YYYY-MM-DDTHH:MM:SS"\u3068\u3044\u3046\u66F8\u5F0F\u3067\u69CB\u6210\u3055\u308C\u307E\u3059\u3002\u4F8B\u3048\u3070"2013-11-20T10:20:00"\u3068\u8868\u73FE\u3055\u308C\u3001\u5730\u57DF\u8A2D\u5B9A\u3068\u95A2\u308F\u308A\u7121\u304F\u3001Date\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305F',(0,d.jsx)(n.em,{children:"expression"}),' \u3092\u6B63\u3057\u304F\u8A55\u4FA1\u3057\u307E\u3059\u3002\u30D4\u30EA\u30AA\u30C9\u306E\u3042\u3068\u306E\u5C0F\u6570\u4EE5\u4E0B\u306E\u79D2\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u3059(\u4F8B:"2013-11-20T10:20:00.9854")',(0,d.jsx)(n.br,{}),"\n\u3082\u3057",(0,d.jsx)(n.em,{children:"expression"})," \u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u304C ISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u9069\u5408\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u5730\u57DF\u8A2D\u5B9A\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u77ED\u3044\u5F62\u5F0F\u306E\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3068\u3057\u3066\u8A55\u4FA1\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8 :"}),' 4D v14\u4EE5\u964D\u3001"YYYY-MM-DDTHH:MM:SS',(0,d.jsx)(n.strong,{children:"Z"}),'"\u306E\u66F8\u5F0F\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306FISO\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9\u306B\u6E96\u62E0\u3057\u3001\u307E\u305F\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3092\u8868\u3059\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002']}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u5730\u57DF\u8A2D\u5B9A"})," ",(0,d.jsx)(n.em,{children:"expression"}),"\u304CISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u9069\u5408\u3057\u306A\u3044\u3068\u304D\u3001\u30AA\u30DA\u30EC\u30FC\u30C6\u30A3\u30F3\u30B0\u30B7\u30B9\u30C6\u30E0\u306E\u5730\u57DF\u8A2D\u5B9A\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u77ED\u3044\u5F62\u5F0F\u306E\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3092\u8A55\u4FA1\u306E\u305F\u3081\u306B\u4F7F\u3044\u307E\u3059\u3002",(0,d.jsx)(n.br,{}),"\n\u65E5\u672C\u8A9E\u74B0\u5883\u3067\u306F\u3001\u65E5\u4ED8\u306F\u901A\u5E38YY/MM/DD (\u5E74, \u6708, \u65E5) \u306E\u9806\u3067\u3059\u3002\u6708\u3068\u65E5\u306F1\u3042\u308B\u3044\u306F2\u6841\u306E\u6570\u5B57\u3067\u3059\u3002\u5E74\u306F2\u3042\u308B\u3044\u306F4\u6841\u306E\u6570\u5B57\u3067\u3059\u3002\u5E74\u304C2\u6841\u306E\u5834\u5408\u306F\u6570\u5024\u306B\u57FA\u3065\u3044\u3066\u300119\u307E\u305F\u306F20\u3092\u5E74\u306E\u5148\u982D\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002\u305D\u306E\u5883\u754C\u5024\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306730\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"30\u4EE5\u4E0A\u306E\u5834\u5408\u300120\u4E16\u7D00\u306E\u65E5\u4ED8\u3067\u3042\u308B\u3068\u5224\u5B9A\u3057\u3066\u3001\u5148\u982D\u306B19\u3092\u52A0\u3048\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.li,{children:"30\u672A\u6E80\u306E\u5834\u5408\u300121\u4E16\u7D00\u306E\u65E5\u4ED8\u3067\u3042\u308B\u3068\u5224\u5B9A\u3057\u3066\u3001\u5148\u982D\u306B20\u3092\u52A0\u3048\u307E\u3059\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/set-default-century",children:"SET DEFAULT CENTURY"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u5883\u754C\u5024\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u6709\u52B9\u306A\u65E5\u4ED8\u533A\u5207\u308A\u6587\u5B57\u306F\u3001 \u30B9\u30E9\u30C3\u30B7\u30E5 (/), \u30B9\u30DA\u30FC\u30B9, \u30D4\u30EA\u30AA\u30C9 (.), \u30B3\u30F3\u30DE (,) \u305D\u3057\u3066\u30C0\u30C3\u30B7\u30E5(-)\u3067\u3059\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:['\u7121\u52B9\u306A\u65E5\u4ED8("94/13/35" \u3084 "94/aa/12" \u306A\u3069)\u3092 ',(0,d.jsx)(n.em,{children:"expression"})," \u306B\u6E21\u3057\u305F\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"Date"})," \u306F\u7A7A\u306E\u65E5\u4ED8\u3092\u8FD4\u3057\u307E\u3059(00/00/00)\u3002",(0,d.jsx)(n.em,{children:"expression"})," \u306E\u5024\u304C\u6709\u52B9\u3067\u3042\u308B\u304B\u3092\u691C\u8A3C\u3059\u308B\u306E\u306F\u30C7\u30D9\u30ED\u30C3\u30D1\u306E\u8CAC\u4EFB\u3067\u3059\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"expression"})," \u5F15\u6570\u304C\u672A\u5B9A\u7FA9\u3078\u3068\u8A55\u4FA1\u3055\u308C\u308B\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"Date"})," \u306F\u7A7A\u306E\u65E5\u4ED8(00/00/00)\u3092\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u5F0F\u306E\u7D50\u679C(\u4F8B:\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u306A\u3069)\u304C\u3001\u305F\u3068\u3048\u672A\u5B9A\u7FA9\u3067\u3042\u3063\u3066\u3082\u65E5\u4ED8\u3068\u3057\u3066\u8FD4\u3055\u308C\u308B\u3053\u3068\u3092\u671F\u5F85\u3057\u305F\u3044\u5834\u5408\u306A\u3069\u306B\u6709\u52B9\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6CE8:"})," 4D v16 R6\u4EE5\u964D\u3001\u65E5\u4ED8\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u306E\u4E2D\u306B\u65E5\u4ED8\u578B\u306E\u5024\u3068\u3057\u3066\u4FDD\u5B58\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u4EE5\u524D\u306E\u30EA\u30EA\u30FC\u30B9\u3067\u306F\u3001\u6587\u5B57\u5217\u3068\u3057\u3066\u306E\u4FDD\u5B58\u306F\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F(\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306A\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001",(0,d.jsx)(n.em,{children:"\u4E92\u63DB\u6027\u30DA\u30FC\u30B8"}),' \u306E"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3067\u306FISO\u65E5\u4ED8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u4EE3\u308F\u308A\u306B\u65E5\u4ED8\u578B\u3092\u4F7F\u7528\u3059\u308B"\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002\u5C5E\u6027\u5185\u306E\u65E5\u4ED8\u304C\u6587\u5B57\u5217\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u304B\u65E5\u4ED8\u578B\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u304B\u3092\u8ABF\u3079\u308B\u305F\u3081\u306B\u306F\u3001',(0,d.jsx)(n.a,{href:"/docs/ja/commands/value-type",children:"Value type"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(\u6700\u5F8C\u306E\u4F8B\u984C\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u65E5\u4ED8\u578B\u306E\u5F0F"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"expression"})," \u5F15\u6570\u304C\u65E5\u4ED8\u578B\u3067\u3042\u308B\u5834\u5408\u3001",(0,d.jsx)(n.strong,{children:"Date"}),' \u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305F\u65E5\u4ED8\u3092"\u305D\u306E\u307E\u307E"\u8FD4\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u30DD\u30A4\u30F3\u30BF\u30FC\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5C5E\u6027\u306A\u3069\u3092\u4F7F\u7528\u3057\u305F\u6C4E\u7528\u7684\u306A\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u304A\u3044\u3066\u7279\u306B\u6709\u7528\u3067\u3059\u3002']}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u4F7F\u7528\u3057\u3066\u3001\u30E6\u30FC\u30B6\u306B\u65E5\u4ED8\u306E\u5165\u529B\u3092\u8981\u6C42\u3057\u307E\u3059\u3002\u30E6\u30FC\u30B6\u304C\u5165\u529B\u3057\u305F\u6587\u5B57\u5217\u306F\u65E5\u4ED8\u306B\u5909\u63DB\u3055\u308C\u3001reqDate\u5909\u6570\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0reqDate:=Date(Request("\u65E5\u4ED8\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:";String(Current date)))\n\xa0If(OK=1)\n\xa0\xa0// reqDate\u5909\u6570\u306B\u683C\u7D0D\u3055\u308C\u305F\u65E5\u4ED8\u306B\u51E6\u7406\u3092\u884C\u3046\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u3067\u306F\u69D8\u3005\u306A\u5834\u5408\u306E\u7D50\u679C\u3092\u793A\u3057\u3066\u3044\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0vdDate:=Date("12/25/94")\xa0//US\u30B7\u30B9\u30C6\u30E0\u4E0A\u3067\u306F12/25/94 \u3092\u8FD4\u3059\n\xa0vdDate2:=Date("40/40/94")\xa0//00/00/00\n\xa0vdDate3:=Date("It was the 6/30, we were in 2016")\xa0//06/30/16\n\xa0var $vobj : Object\n\xa0$vobj:=New object("expDate";"2020-11-17T00:00:00.0000")\n\xa0vdDate4:=Date($vobj.expDate)\xa0//11/17/20\n\xa0vdDate5:=Date($vobj.creationDate)\xa0//00/00/00\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u984C\u306FISO\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306B\u57FA\u3065\u304D\u65E5\u4ED8\u306B\u5909\u63DB\u3057\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0$vtDateISO:="2013-06-05T20:00:00"\n\xa0$vDate:=Date($vtDateISO)\n\xa0\xa0//$vDate\u5909\u6570\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u306B\u95A2\u4FC2\u306A\u304F2013\u5E746\u67085\u65E5\u3092\u8868\u3057\u307E\u3059\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C-4",children:"\u4F8B\u984C 4"}),"\n",(0,d.jsx)(n.p,{children:"\u30AB\u30EC\u30F3\u30C8\u306E\u5C5E\u6027\u65E5\u4ED8\u4FDD\u5B58\u30AA\u30D7\u30B7\u30E7\u30F3\u306B\u95A2\u4FC2\u306A\u304F\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u5C5E\u6027\u304B\u3089\u65E5\u4ED8\u3092\u53D6\u308A\u51FA\u3057\u305F\u3044\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0If(Value type($myObj.myDate)=Is date)\xa0//\u65E5\u4ED8\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u5909\u63DB\u306E\u5FC5\u8981\u306A\u3057\n\xa0\xa0\xa0\xa0$vDate:=$myObj.myDate\n\xa0Else\xa0//\u6587\u5B57\u5217\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5834\u5408\n\xa0\xa0\xa0\xa0$vDate:=Date($myObj.myDate)\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/commands/bool",children:"Bool"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/commands/string",children:"String"})]}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"102"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let d={},r=t.createContext(d);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);