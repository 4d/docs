"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59327],{700866:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(474848),d=s(28453);const r={id:"date",title:"Date",slug:"/commands/date",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/date",title:"Date",description:"Date ( expression ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/date.md",sourceDirName:"commands-legacy",slug:"/commands/date",permalink:"/docs/ja/commands/date",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"date",title:"Date",slug:"/commands/date",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Current time",permalink:"/docs/ja/commands/current-time"},next:{title:"Day number",permalink:"/docs/ja/commands/day-number"}},l={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c 1",id:"\u4f8b\u984c-1",level:4},{value:"\u4f8b\u984c 2",id:"\u4f8b\u984c-2",level:4},{value:"\u4f8b\u984c 3",id:"\u4f8b\u984c-3",level:4},{value:"\u4f8b\u984c 4",id:"\u4f8b\u984c-4",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Date"})," ( ",(0,t.jsx)(n.em,{children:"expression"})," ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5f15\u6570"}),(0,t.jsx)(n.th,{children:"\u578b"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expression"}),(0,t.jsx)(n.td,{children:"Text, Date"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u65e5\u4ed8\u3092\u8868\u3059\u6587\u5b57\u5217\u304b\u3001\u65e5\u4ed8\u578b\u306e\u5f0f"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u65e5\u4ed8"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Date"}),"\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,t.jsx)(n.em,{children:"expression"})," \u3092\u89e3\u91c8\u3057\u3001\u65e5\u4ed8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"expression"})," \u5f15\u6570\u306f\u3001ISO\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304b\u30b7\u30b9\u30c6\u30e0\u30ec\u30d9\u30eb\u3067\u8a2d\u5b9a\u3055\u308c\u308b\u5730\u57df\u8a2d\u5b9a\u306b\u5f93\u308f\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ISO\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"}),(0,t.jsx)(n.br,{}),'\n\u3053\u306e\u6587\u5b57\u5217\u306f"YYYY-MM-DDTHH:MM:SS"\u3068\u3044\u3046\u66f8\u5f0f\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070"2013-11-20T10:20:00"\u3068\u8868\u73fe\u3055\u308c\u3001\u5730\u57df\u8a2d\u5b9a\u3068\u95a2\u308f\u308a\u7121\u304f\u3001Date\u30b3\u30de\u30f3\u30c9\u306f\u5f15\u6570\u3068\u3057\u3066\u6e21\u3055\u308c\u305f',(0,t.jsx)(n.em,{children:"expression"}),' \u3092\u6b63\u3057\u304f\u8a55\u4fa1\u3057\u307e\u3059\u3002\u30d4\u30ea\u30aa\u30c9\u306e\u3042\u3068\u306e\u5c0f\u6570\u4ee5\u4e0b\u306e\u79d2\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059(\u4f8b:"2013-11-20T10:20:00.9854")',(0,t.jsx)(n.br,{}),"\n\u3082\u3057",(0,t.jsx)(n.em,{children:"expression"})," \u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c ISO\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u9069\u5408\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u5730\u57df\u8a2d\u5b9a\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u77ed\u3044\u5f62\u5f0f\u306e\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u3057\u3066\u8a55\u4fa1\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8 :"}),' 4D v14\u4ee5\u964d\u3001"YYYY-MM-DDTHH:MM:SS',(0,t.jsx)(n.strong,{children:"Z"}),'"\u306e\u66f8\u5f0f\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306fISO\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9\u306b\u6e96\u62e0\u3057\u3001\u307e\u305f\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u8868\u3059\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5730\u57df\u8a2d\u5b9a"})," ",(0,t.jsx)(n.em,{children:"expression"}),"\u304cISO\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u9069\u5408\u3057\u306a\u3044\u3068\u304d\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306e\u5730\u57df\u8a2d\u5b9a\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u77ed\u3044\u5f62\u5f0f\u306e\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u8a55\u4fa1\u306e\u305f\u3081\u306b\u4f7f\u3044\u307e\u3059\u3002",(0,t.jsx)(n.br,{}),"\n\u65e5\u672c\u8a9e\u74b0\u5883\u3067\u306f\u3001\u65e5\u4ed8\u306f\u901a\u5e38YY/MM/DD (\u5e74, \u6708, \u65e5) \u306e\u9806\u3067\u3059\u3002\u6708\u3068\u65e5\u306f1\u3042\u308b\u3044\u306f2\u6841\u306e\u6570\u5b57\u3067\u3059\u3002\u5e74\u306f2\u3042\u308b\u3044\u306f4\u6841\u306e\u6570\u5b57\u3067\u3059\u3002\u5e74\u304c2\u6841\u306e\u5834\u5408\u306f\u6570\u5024\u306b\u57fa\u3065\u3044\u3066\u300119\u307e\u305f\u306f20\u3092\u5e74\u306e\u5148\u982d\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u305d\u306e\u5883\u754c\u5024\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306730\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"30\u4ee5\u4e0a\u306e\u5834\u5408\u300120\u4e16\u7d00\u306e\u65e5\u4ed8\u3067\u3042\u308b\u3068\u5224\u5b9a\u3057\u3066\u3001\u5148\u982d\u306b19\u3092\u52a0\u3048\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"30\u672a\u6e80\u306e\u5834\u5408\u300121\u4e16\u7d00\u306e\u65e5\u4ed8\u3067\u3042\u308b\u3068\u5224\u5b9a\u3057\u3066\u3001\u5148\u982d\u306b20\u3092\u52a0\u3048\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/set-default-century",children:"SET DEFAULT CENTURY"}),"\u30b3\u30de\u30f3\u30c9\u3067\u5883\u754c\u5024\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u52b9\u306a\u65e5\u4ed8\u533a\u5207\u308a\u6587\u5b57\u306f\u3001 \u30b9\u30e9\u30c3\u30b7\u30e5 (/), \u30b9\u30da\u30fc\u30b9, \u30d4\u30ea\u30aa\u30c9 (.), \u30b3\u30f3\u30de (,) \u305d\u3057\u3066\u30c0\u30c3\u30b7\u30e5(-)\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['\u7121\u52b9\u306a\u65e5\u4ed8("94/13/35" \u3084 "94/aa/12" \u306a\u3069)\u3092 ',(0,t.jsx)(n.em,{children:"expression"})," \u306b\u6e21\u3057\u305f\u5834\u5408\u3001",(0,t.jsx)(n.strong,{children:"Date"})," \u306f\u7a7a\u306e\u65e5\u4ed8\u3092\u8fd4\u3057\u307e\u3059(00/00/00)\u3002",(0,t.jsx)(n.em,{children:"expression"})," \u306e\u5024\u304c\u6709\u52b9\u3067\u3042\u308b\u304b\u3092\u691c\u8a3c\u3059\u308b\u306e\u306f\u30c7\u30d9\u30ed\u30c3\u30d1\u306e\u8cac\u4efb\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"expression"})," \u5f15\u6570\u304c\u672a\u5b9a\u7fa9\u3078\u3068\u8a55\u4fa1\u3055\u308c\u308b\u5834\u5408\u3001",(0,t.jsx)(n.strong,{children:"Date"})," \u306f\u7a7a\u306e\u65e5\u4ed8(00/00/00)\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u5f0f\u306e\u7d50\u679c(\u4f8b:\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306a\u3069)\u304c\u3001\u305f\u3068\u3048\u672a\u5b9a\u7fa9\u3067\u3042\u3063\u3066\u3082\u65e5\u4ed8\u3068\u3057\u3066\u8fd4\u3055\u308c\u308b\u3053\u3068\u3092\u671f\u5f85\u3057\u305f\u3044\u5834\u5408\u306a\u3069\u306b\u6709\u52b9\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8:"})," 4D v16 R6\u4ee5\u964d\u3001\u65e5\u4ed8\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u306e\u4e2d\u306b\u65e5\u4ed8\u578b\u306e\u5024\u3068\u3057\u3066\u4fdd\u5b58\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u4ee5\u524d\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u306f\u3001\u6587\u5b57\u5217\u3068\u3057\u3066\u306e\u4fdd\u5b58\u306f\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f(\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.em,{children:"\u4e92\u63db\u6027\u30da\u30fc\u30b8"}),' \u306e"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u306fISO\u65e5\u4ed8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4ee3\u308f\u308a\u306b\u65e5\u4ed8\u578b\u3092\u4f7f\u7528\u3059\u308b"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)\u3002\u5c5e\u6027\u5185\u306e\u65e5\u4ed8\u304c\u6587\u5b57\u5217\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u304b\u65e5\u4ed8\u578b\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u8abf\u3079\u308b\u305f\u3081\u306b\u306f\u3001',(0,t.jsx)(n.a,{href:"/docs/ja/commands/value-type",children:"Value type"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059(\u6700\u5f8c\u306e\u4f8b\u984c\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u65e5\u4ed8\u578b\u306e\u5f0f"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"expression"})," \u5f15\u6570\u304c\u65e5\u4ed8\u578b\u3067\u3042\u308b\u5834\u5408\u3001",(0,t.jsx)(n.strong,{children:"Date"}),' \u306f\u5f15\u6570\u3068\u3057\u3066\u6e21\u3055\u308c\u305f\u65e5\u4ed8\u3092"\u305d\u306e\u307e\u307e"\u8fd4\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u30dd\u30a4\u30f3\u30bf\u30fc\u3084\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5c5e\u6027\u306a\u3069\u3092\u4f7f\u7528\u3057\u305f\u6c4e\u7528\u7684\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066\u7279\u306b\u6709\u7528\u3067\u3059\u3002']}),"\n",(0,t.jsx)(n.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c 1"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u984c\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u306b\u65e5\u4ed8\u306e\u5165\u529b\u3092\u8981\u6c42\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u304c\u5165\u529b\u3057\u305f\u6587\u5b57\u5217\u306f\u65e5\u4ed8\u306b\u5909\u63db\u3055\u308c\u3001reqDate\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0reqDate:=Date(Request("\u65e5\u4ed8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044:";String(Current date)))\n\xa0If(OK=1)\n\xa0\xa0// reqDate\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u305f\u65e5\u4ed8\u306b\u51e6\u7406\u3092\u884c\u3046\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c 2"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u984c\u3067\u306f\u69d8\u3005\u306a\u5834\u5408\u306e\u7d50\u679c\u3092\u793a\u3057\u3066\u3044\u307e\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vdDate:=Date("12/25/94")\xa0//US\u30b7\u30b9\u30c6\u30e0\u4e0a\u3067\u306f12/25/94 \u3092\u8fd4\u3059\n\xa0vdDate2:=Date("40/40/94")\xa0//00/00/00\n\xa0vdDate3:=Date("It was the 6/30, we were in 2016")\xa0//06/30/16\n\xa0var $vobj : Object\n\xa0$vobj:=New object("expDate";"2020-11-17T00:00:00.0000")\n\xa0vdDate4:=Date($vobj.expDate)\xa0//11/17/20\n\xa0vdDate5:=Date($vobj.creationDate)\xa0//00/00/00\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u4f8b\u984c-3",children:"\u4f8b\u984c 3"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u4f8b\u984c\u306fISO\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u57fa\u3065\u304d\u65e5\u4ed8\u306b\u5909\u63db\u3057\u307e\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$vtDateISO:="2013-06-05T20:00:00"\n\xa0$vDate:=Date($vtDateISO)\n\xa0\xa0//$vDate\u5909\u6570\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u4fc2\u306a\u304f2013\u5e746\u67085\u65e5\u3092\u8868\u3057\u307e\u3059\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u4f8b\u984c-4",children:"\u4f8b\u984c 4"}),"\n",(0,t.jsx)(n.p,{children:"\u30ab\u30ec\u30f3\u30c8\u306e\u5c5e\u6027\u65e5\u4ed8\u4fdd\u5b58\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u95a2\u4fc2\u306a\u304f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5c5e\u6027\u304b\u3089\u65e5\u4ed8\u3092\u53d6\u308a\u51fa\u3057\u305f\u3044\u5834\u5408\u3092\u8003\u3048\u307e\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(Value type($myObj.myDate)=Is date)\xa0//\u65e5\u4ed8\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u5909\u63db\u306e\u5fc5\u8981\u306a\u3057\n\xa0\xa0\xa0\xa0$vDate:=$myObj.myDate\n\xa0Else\xa0//\u6587\u5b57\u5217\u3068\u3057\u3066\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u5834\u5408\n\xa0\xa0\xa0\xa0$vDate:=Date($myObj.myDate)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/commands/bool",children:"Bool"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/commands/string",children:"String"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(296540);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);