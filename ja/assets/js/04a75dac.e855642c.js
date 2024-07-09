/*! For license information please see 04a75dac.e855642c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93956],{16570:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=s(474848),r=s(28453);const l={id:"SessionClass",title:"Session"},d=void 0,c={id:"API/SessionClass",title:"Session",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3044\u3066\u3001\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b \u5834\u5408\u3001Session \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066 Session \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002 Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 (\u30d6\u30e9\u30a6\u30b6\u30fc\u306a\u3069) \u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u5236\u5fa1\u3059\u308b\u305f\u3081\u30014D Web\u30b5\u30fc\u30d0\u30fc\u306f\u81ea\u52d5\u7684\u306b Session\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u30fb\u7ba1\u7406\u3057\u307e\u3059\u3002 \u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3078\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092 Web\u958b\u767a\u8005\u306b\u5bfe\u3057\u3066\u63d0\u4f9b\u3057\u3001\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u7ba1\u7406\u3084\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u3001\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u60c5\u5831\u5171\u6709\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u3057\u305f\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u306e\u958b\u59cb\u306a\u3069\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19/API/SessionClass.md",sourceDirName:"API",slug:"/API/SessionClass",permalink:"/docs/ja/19/API/SessionClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSessionClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"SessionClass",title:"Session"},sidebar:"docs",previous:{title:"POP3Transporter",permalink:"/docs/ja/19/API/POP3TransporterClass"},next:{title:"Signal",permalink:"/docs/ja/19/API/SignalClass"}},t={},h=[{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"Session",id:"Session",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:".clearPrivileges()",id:"clearPrivileges",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-1",level:4},{value:".expirationDate",id:"expirationDate",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-2",level:4},{value:".hasPrivilege()",id:"hasPrivilege",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-3",level:4},{value:".idleTimeout",id:"idleTimeout",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-4",level:4},{value:".isGuest()",id:"isGuest",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-5",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-5",level:4},{value:".setPrivileges()",id:"setPrivileges",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-6",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-6",level:4},{value:".storage",id:"storage",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-7",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-7",level:4},{value:".userName",id:"userName",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-8",level:4}];function x(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/19/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3044\u3066\u3001\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b"})," \u5834\u5408\u3001",(0,i.jsx)(n.a,{href:"#session",children:(0,i.jsx)(n.code,{children:"Session"})})," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066 Session \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002 Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 (\u30d6\u30e9\u30a6\u30b6\u30fc\u306a\u3069) \u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u5236\u5fa1\u3059\u308b\u305f\u3081\u30014D Web\u30b5\u30fc\u30d0\u30fc\u306f\u81ea\u52d5\u7684\u306b Session\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u30fb\u7ba1\u7406\u3057\u307e\u3059\u3002 \u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3078\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092 Web\u958b\u767a\u8005\u306b\u5bfe\u3057\u3066\u63d0\u4f9b\u3057\u3001\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u7ba1\u7406\u3084\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\u306e\u4fdd\u5b58\u3001\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u60c5\u5831\u5171\u6709\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u95a2\u9023\u3057\u305f\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u306e\u958b\u59cb\u306a\u3069\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"/docs/ja/19/WebServer/sessions",children:"Web\u30b5\u30fc\u30d0\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3"})," \u306e\u7ae0\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"#clearprivileges",children:(0,i.jsx)(n.strong,{children:".clearPrivileges()"})}),"\xa0\xa0\xa0\xa0\u5bfe\u8c61\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u7d10\u3065\u3044\u3066\u3044\u308b\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u3059\u3079\u3066\u524a\u9664\u3057\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#expirationdate",children:[(0,i.jsx)(n.strong,{children:".expirationDate"})," : Text"]}),"\xa0\xa0\xa0\xa0\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u306e\u6709\u52b9\u671f\u9650\u3092\u8fd4\u3057\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#hasprivilege",children:[(0,i.jsx)(n.strong,{children:".hasPrivilege"}),"( ",(0,i.jsx)(n.em,{children:"privilege"})," : Text ) : Boolean"]}),"\xa0\xa0\xa0\xa0\u5bfe\u8c61\u30bb\u30c3\u30b7\u30e7\u30f3\u306b privilege \u306e\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u7d10\u3065\u3044\u3066\u3044\u308c\u3070 true\u3001\u3067\u306a\u3051\u308c\u3070 false \u3092\u8fd4\u3057\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#idletimeout",children:[(0,i.jsx)(n.strong,{children:".idleTimeout"})," : Integer"]}),"\xa0\xa0\xa0\xa0\u5bfe\u8c61\u30bb\u30c3\u30b7\u30e7\u30f3\u304c 4D \u306b\u3088\u3063\u3066\u7d42\u4e86\u3055\u308c\u308b\u307e\u3067\u306e\u3001\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593 (\u5206\u5358\u4f4d) \u3092\u683c\u7d0d\u3057\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#isguest",children:[(0,i.jsx)(n.strong,{children:".isGuest()"})," : Boolean"]}),"\xa0\xa0\xa0\xa0\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u306a\u3044\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u5834\u5408\u306f true \u3092\u8fd4\u3057\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#setprivileges",children:[(0,i.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(n.em,{children:"privilege"})," : Text )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(n.em,{children:"privileges"})," : Collection )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(n.em,{children:"settings"})," : Object )"]}),"\xa0\xa0\xa0\xa0\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u305f\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u7d10\u3065\u3051\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#storage",children:[(0,i.jsx)(n.strong,{children:".storage"})," : Object"]}),"\xa0\xa0\xa0\xa0Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u3066\u304a\u3051\u308b\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u683c\u7d0d\u3057\u307e\u3059"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#username",children:[(0,i.jsx)(n.strong,{children:".userName"})," : Text"]}),"\xa0\xa0\xa0\xa0\u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u7d10\u3065\u3044\u305f\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u683c\u7d0d\u3057\u307e\u3059"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"Session",children:"Session"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session"})," : 4D.Session"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5f15\u6570"}),(0,i.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(n.td,{children:"4D.Session"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Session \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Session"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001 \u30ab\u30ec\u30f3\u30c8\u306e\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30e6\u30fc\u30b6\u30fcWeb\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u5bfe\u5fdc\u3059\u308b ",(0,i.jsx)(n.code,{children:"Session"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/ja/19/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b"})," \u5834\u5408\u306b\u306e\u307f\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u6a5f\u80fd\u3057\u307e\u3059\u3002 \u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u7121\u52b9\u306a\u5834\u5408\u3084\u3001\u65e7\u5f0f\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001",(0,i.jsx)(n.em,{children:"Null"})," \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"Session"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u6b21\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3051\u308b\u3001\u3042\u3089\u3086\u308b Web\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"On Web Authentication"}),"\u3001",(0,i.jsx)(n.code,{children:"On Web Connection"}),"\u3001\u304a\u3088\u3073 ",(0,i.jsx)(n.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"]}),"\n",(0,i.jsxs)(n.li,{children:["REST\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u547c\u3073\u51fa\u3055\u308c\u305f ORDA ",(0,i.jsx)(n.a,{href:"/docs/ja/19/ORDA/ordaClasses",children:"\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u30af\u30e9\u30b9\u95a2\u6570"})]}),"\n",(0,i.jsx)(n.li,{children:"\u30bb\u30df\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30da\u30fc\u30b8\u306b\u304a\u3044\u3066\u30014D\u30bf\u30b0 (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) \u3092\u4ecb\u3057\u3066\u51e6\u7406\u3055\u308c\u308b\u30b3\u30fc\u30c9"}),"\n",(0,i.jsx)(n.li,{children:'"\u516c\u958b\u30aa\u30d7\u30b7\u30e7\u30f3: 4D\u30bf\u30b0\u3068URL(4DACTION...)" \u3092\u6709\u52b9\u5316\u3055\u308c\u305f\u3046\u3048\u3067\u30014DACTION/ URL \u304b\u3089\u547c\u3073\u51fa\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,i.jsxs)(n.p,{children:['"\u516c\u958b\u30aa\u30d7\u30b7\u30e7\u30f3: 4D\u30bf\u30b0\u3068URL(4DACTION...)" \u3092\u6709\u52b9\u306b\u3057\u305f ',(0,i.jsx)(n.code,{children:"action_Session"})," \u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3057\u307e\u3057\u305f\u3002 \u30d6\u30e9\u30a6\u30b6\u30fc\u306b\u6b21\u306e URL \u3092\u5165\u529b\u3057\u3066\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"IP:port/4DACTION/action_Session\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'  //action_Session \u30e1\u30bd\u30c3\u30c9\n Case of\n    :(Session#Null)\n       If(Session.hasPrivilege("WebAdmin")) // hasPrivilege \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\n          WEB SEND TEXT("4DACTION --\x3e \u30bb\u30c3\u30b7\u30e7\u30f3\u306f WebAdmin \u3067\u3059")\n       Else\n          WEB SEND TEXT("4DACTION --\x3e \u30bb\u30c3\u30b7\u30e7\u30f3\u306f WebAdmin \u3067\u306f\u3042\u308a\u307e\u305b\u3093")\n       End if\n    Else\n       WEB SEND TEXT("4DACTION --\x3e \u30bb\u30c3\u30b7\u30e7\u30f3\u306f null \u3067\u3059")\n End case\n'})}),"\n",(0,i.jsx)(n.h2,{id:"clearPrivileges",children:".clearPrivileges()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:".clearPrivileges()"})}),"\n",(0,i.jsx)(n.p,{children:"| \u5f15\u6570 | \u30bf\u30a4\u30d7 |  | \u8aac\u660e         |\n| -- | --- |::| ---------- |\n|    |     |  | \u5f15\u6570\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093 |"}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-1",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".clearPrivileges()"})," \u95a2\u6570\u306f\u3001 \u5bfe\u8c61\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u7d10\u3065\u3044\u3066\u3044\u308b\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u3059\u3079\u3066\u524a\u9664\u3057\u307e\u3059\u3002 \u7d50\u679c\u7684\u306b\u3001\u5f53\u8a72\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u81ea\u52d5\u7684\u306b\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"// \u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u7121\u52b9\u306b\u3057\u307e\u3059\nvar $isGuest : Boolean  \n\nSession.clearPrivileges()\n$isGuest:=Session.isGuest() //$isGuest \u306f true\n"})}),"\n",(0,i.jsx)(n.h2,{id:"expirationDate",children:".expirationDate"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".expirationDate"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-2",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".expirationDate"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 \u30bb\u30c3\u30b7\u30e7\u30f3cookie \u306e\u6709\u52b9\u671f\u9650\u3092\u8fd4\u3057\u307e\u3059\u3002 \u5024\u306f ISO 8601\u6a19\u6e96\u306b\u5f93\u3063\u3066\u6587\u5b57\u5217\u3067\u8868\u73fe\u3055\u308c\u307e\u3059: ",(0,i.jsx)(n.code,{children:"YYYY-MM-DDTHH:MM:SS.mmmZ"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(n.strong,{children:"\u8aad\u307f\u53d6\u308a\u5c02\u7528"})," \u3067\u3059\u3002 ",(0,i.jsx)(n.a,{href:"#idletimeout",children:(0,i.jsx)(n.code,{children:".idleTimeout"})})," \u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3001\u6709\u52b9\u671f\u9650\u306f\u81ea\u52d5\u7684\u306b\u518d\u8a08\u7b97\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $expiration : Text\n$expiration:=Session.expirationDate // \u4f8b: "2021-11-05T17:10:42Z"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"hasPrivilege",children:".hasPrivilege()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".hasPrivilege"}),"( ",(0,i.jsx)(n.em,{children:"privilege"})," : Text ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5f15\u6570"}),(0,i.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privilege"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"\u78ba\u8a8d\u3059\u308b\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u540d\u79f0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsxs)(n.td,{children:["\u30bb\u30c3\u30b7\u30e7\u30f3\u304c ",(0,i.jsx)(n.em,{children:"privilege"})," \u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u6301\u3063\u3066\u3044\u308c\u3070 true\u3001\u305d\u308c\u4ee5\u5916\u306f false"]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-3",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".hasPrivilege()"})," \u95a2\u6570\u306f\u3001 \u5bfe\u8c61\u30bb\u30c3\u30b7\u30e7\u30f3\u306b privilege \u306e\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u7d10\u3065\u3044\u3066\u3044\u308c\u3070 true\u3001\u3067\u306a\u3051\u308c\u3070 false \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-3",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(n.p,{children:'"WebAdmin" \u30a2\u30af\u30bb\u30b9\u6a29\u304c\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u7d10\u3065\u3044\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'If (Session.hasPrivilege("WebAdmin"))\n // \u30a2\u30af\u30bb\u30b9\u6a29\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u4f55\u3082\u3057\u307e\u305b\u3093\nElse\n // \u8a8d\u8a3c\u30da\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\nEnd if\n'})}),"\n",(0,i.jsx)(n.h2,{id:"idleTimeout",children:".idleTimeout"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".idleTimeout"})," : Integer"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-4",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".idleTimeout"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 \u5bfe\u8c61\u30bb\u30c3\u30b7\u30e7\u30f3\u304c 4D \u306b\u3088\u3063\u3066\u7d42\u4e86\u3055\u308c\u308b\u307e\u3067\u306e\u3001\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593 (\u5206\u5358\u4f4d) \u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u672a\u8a2d\u5b9a\u6642\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f 60 (1\u6642\u9593) \u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u8a2d\u5b9a\u3055\u308c\u308b\u3068\u3001\u305d\u308c\u306b\u5fdc\u3058\u3066 ",(0,i.jsx)(n.a,{href:"#expirationdate",children:(0,i.jsx)(n.code,{children:".expirationDate"})})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3082\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"60 (\u5206) \u672a\u6e80\u306e\u5024\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093 (60 \u672a\u6e80\u306e\u5024\u3092\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306f 60 (\u5206) \u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059)\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(n.strong,{children:"\u8aad\u307f\u66f8\u304d\u53ef\u80fd"})," \u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-4",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"If (Session.isGuest())\n  // \u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u300160\u5206\u306e\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u6642\u9593\u7d4c\u904e\u5f8c\u306b\u7d42\u4e86\u3057\u307e\u3059\n Session.idleTimeout:=60\nElse\n  // \u305d\u306e\u4ed6\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u3001120\u5206\u306e\u975e\u30a2\u30af\u30c6\u30a3\u30d6\u6642\u9593\u7d4c\u904e\u5f8c\u306b\u7d42\u4e86\u3057\u307e\u3059\n Session.idleTimeout:=120\nEnd if\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"isGuest",children:".isGuest()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".isGuest()"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5f15\u6570"}),(0,i.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u5834\u5408\u306f true\u3001\u305d\u308c\u4ee5\u5916\u306f false"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-5",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".isGuest()"})," \u95a2\u6570\u306f\u3001 \u30a2\u30af\u30bb\u30b9\u6a29\u306e\u306a\u3044\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u5834\u5408\u306f true \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-5",children:"\u4f8b\u984c"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"On Web Connection"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u3066:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"If (Session.isGuest())\n // \u30b2\u30b9\u30c8\u30e6\u30fc\u30b6\u30fc\u7528\u306e\u51e6\u7406\nEnd if\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setPrivileges",children:".setPrivileges()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(n.em,{children:"privilege"})," : Text )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(n.em,{children:"privileges"})," : Collection )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:".setPrivileges"}),"( ",(0,i.jsx)(n.em,{children:"settings"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5f15\u6570"}),(0,i.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privilege"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u540d\u79f0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privileges"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u540d\u79f0\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"settings"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:'"privileges" \u30d7\u30ed\u30d1\u30c6\u30a3 (\u6587\u5b57\u5217\u307e\u305f\u306f\u30b3\u30ec\u30af\u30b7\u30e7\u30f3) \u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8'})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-6",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".setPrivileges()"})," \u95a2\u6570\u306f\u3001 \u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u305f\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u7d10\u3065\u3051\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"privilege"})," \u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u540d\u79f0\u3092\u6587\u5b57\u5217\u3068\u3057\u3066\u6e21\u3057\u307e\u3059 (\u8907\u6570\u306e\u5834\u5408\u306f\u30ab\u30f3\u30de\u533a\u5207\u308a)\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"privileges"})," \u306b\u306f\u3001\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u540d\u79f0\u3092\u6587\u5b57\u5217\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"settings"})," \u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3057\u307e\u3059:"]}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,i.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privileges"}),(0,i.jsx)(n.td,{children:"Text \u307e\u305f\u306f Collection"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.li,{children:"\u30a2\u30af\u30bb\u30b9\u6a29\u540d\u306e\u6587\u5b57\u5217"}),(0,i.jsx)(n.li,{children:"\u30a2\u30af\u30bb\u30b9\u6a29\u540d\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"(\u4efb\u610f) \u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u7d10\u3065\u3051\u308b\u30e6\u30fc\u30b6\u30fc\u540d"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7121\u52b9\u306a\u30a2\u30af\u30bb\u30b9\u6a29\u540d\u3092\u542b\u3080\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"privileges"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'\u73fe\u5728\u306e\u5b9f\u88c5\u3067\u306f\u3001"WebAdmin" \u30a2\u30af\u30bb\u30b9\u6a29\u306e\u307f\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u7d10\u3065\u3044\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u305d\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,i.jsx)(n.a,{href:"#isguest",children:"\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3"})," \u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#username",children:(0,i.jsx)(n.code,{children:"userName"})})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f Session \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30ec\u30d9\u30eb\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059 (\u8aad\u307f\u53d6\u308a\u5c02\u7528)\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-6",children:"\u4f8b\u984c"}),"\n",(0,i.jsx)(n.p,{children:'\u30ab\u30b9\u30bf\u30e0\u306a\u8a8d\u8a3c\u30e1\u30bd\u30c3\u30c9\u306b\u304a\u3044\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306b "WebAdmin" \u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3057\u307e\u3059:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $userOK : Boolean\n\n... // \u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\n\nIf ($userOK) // \u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u306b\u6210\u529f\u3057\u305f\u5834\u5408\n  var $info : Object\n  $info:=New object()\n  $info.privileges:=New collection("WebAdmin")\n  Session.setPrivileges($info)\nEnd if\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"storage",children:".storage"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".storage"})," : Object"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-7",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".storage"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u3066\u304a\u3051\u308b\u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Session"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u6642\u306b\u306f\u3001",(0,i.jsx)(n.code,{children:".storage"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u7a7a\u3067\u3059\u3002 \u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u305f\u3081\u3001\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e ",(0,i.jsx)(n.code,{children:"Storage"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3044\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u306e ",(0,i.jsx)(n.code,{children:"Storage"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u540c\u69d8\u306b\u3001",(0,i.jsx)(n.code,{children:".storage"}),' \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u5e38\u306b "single" \u3067\u5b58\u5728\u3057\u307e\u3059\u3002 \u5171\u6709\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084\u5171\u6709\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092 ',(0,i.jsx)(n.code,{children:".storage"})," \u306b\u8ffd\u52a0\u3057\u3066\u3082\u3001\u5171\u6709\u30b0\u30eb\u30fc\u30d7\u306f\u4f5c\u6210\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(n.strong,{children:"\u8aad\u307f\u53d6\u308a\u5c02\u7528"})," \u3067\u3059\u304c\u3001\u623b\u308a\u5024\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u8aad\u307f\u66f8\u304d\u53ef\u80fd\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4f8b\u984c-7",children:"\u4f8b\u984c"}),"\n",(0,i.jsxs)(n.p,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e IP \u3092 ",(0,i.jsx)(n.code,{children:".storage"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 ",(0,i.jsx)(n.code,{children:"On Web Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u3051\u307e\u3059:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'If (Session.storage.clientIP=Null) // \u6700\u521d\u306e\u30a2\u30af\u30bb\u30b9\n    Use (Session.storage)\n        Session.storage.clientIP:=New shared object("value"; $clientIP)\n    End use \nEnd if\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"userName",children:".userName"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,i.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R6"}),(0,i.jsx)(n.td,{children:"\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".userName"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8aac\u660e-8",children:"\u8aac\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".userName"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001 \u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u7d10\u3065\u3044\u305f\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30b3\u30fc\u30c9\u5185\u3067\u30e6\u30fc\u30b6\u30fc\u3092\u78ba\u8a8d\u3059\u308b\u306e\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u7a7a\u306e\u6587\u5b57\u5217\u3067\u3059\u3002 \u3053\u308c\u306f\u3001",(0,i.jsx)(n.a,{href:"#setprivileges",children:(0,i.jsx)(n.code,{children:"setPrivileges()"})})," \u95a2\u6570\u306e ",(0,i.jsx)(n.code,{children:"privileges"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3063\u3066\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f ",(0,i.jsx)(n.strong,{children:"\u8aad\u307f\u53d6\u308a\u5c02\u7528"})," \u3067\u3059\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},221020:(e,n,s)=>{var i=s(296540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var i,l={},h=null,x=null;for(i in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(x=n.ref),n)d.call(n,i)&&!t.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:r,type:e,key:h,ref:x,props:l,_owner:c.current}}n.Fragment=l,n.jsx=h,n.jsxs=h},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(296540);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);