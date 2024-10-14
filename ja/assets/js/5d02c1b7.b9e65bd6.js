"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93027],{897462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=t(474848),d=t(28453);const r={id:"HTTPAgentClass",title:"HTTPAgent"},i=void 0,l={id:"API/HTTPAgentClass",title:"HTTPAgent",description:"HTTPAgent \u30af\u30e9\u30b9\u306f\u3001HTTPRequest \u30af\u30e9\u30b9 \u3092\u4f7f\u3063\u305f\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306e\u6c38\u7d9a\u6027\u3068\u518d\u5229\u7528\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306eHTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u3092\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/API/HTTPAgentClass.md",sourceDirName:"API",slug:"/API/HTTPAgentClass",permalink:"/docs/ja/API/HTTPAgentClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FHTTPAgentClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"HTTPAgentClass",title:"HTTPAgent"},sidebar:"docs",previous:{title:"Function",permalink:"/docs/ja/API/FunctionClass"},next:{title:"HTTPRequest",permalink:"/docs/ja/API/HTTPRequestClass"}},c={},h=[{value:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"httpagent-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3},{value:"4D.HTTPAgent.new()",id:"4dhttpagentnew",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"<code>options</code> \u5f15\u6570",id:"options-\u5f15\u6570",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:".options",id:"options",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".requestsCount",id:"requestscount",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:".freeSocketsCount",id:"freesocketscount",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTPAgent"})," \u30af\u30e9\u30b9\u306f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/API/HTTPRequestClass",children:"HTTPRequest \u30af\u30e9\u30b9"})," \u3092\u4f7f\u3063\u305f\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306e\u6c38\u7d9a\u6027\u3068\u518d\u5229\u7528\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e",(0,s.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,s.jsx)(n.code,{children:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})})," \u3092\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTPAgent"})," \u30af\u30e9\u30b9\u306f\u3001",(0,s.jsx)(n.code,{children:"4D"})," \u30af\u30e9\u30b9\u30b9\u30c8\u30a2\u306b\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002 ",(0,s.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,s.jsx)(n.code,{children:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})})," \u306f\u3001",(0,s.jsx)(n.a,{href:"#4dhttpagentnew",children:"4D.HTTPAgent.new()"})," \u95a2\u6570\u3067\u65b0\u898f\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u6301\u3064\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u57fa\u672c\u7684\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u9069\u3057\u305f\u6700\u3082\u30b7\u30f3\u30d7\u30eb\u306a HTTP\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3067\u3059\u3002 \u63a5\u7d9a\u306e\u8a2d\u5b9a (keep-alive\u8a2d\u5b9a\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3001TLS/SSL\u8a2d\u5b9a\u306a\u3069) \u306b\u3064\u3044\u3066\u3001HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u3067\u306f\u306a\u304f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ec\u30d9\u30eb\u3067\u3001\u3088\u308a\u7d30\u304b\u3044\u5236\u5fa1\u3092\u304a\u3053\u306a\u3046\u305f\u3081\u306b\u3001\u30ab\u30b9\u30bf\u30e0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u4f7f\u7528\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"\u5c65\u6b74"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30ea\u30ea\u30fc\u30b9"}),(0,s.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20 R6"}),(0,s.jsx)(n.td,{children:"\u30af\u30e9\u30b9\u3092\u8ffd\u52a0"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"httpagent-\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",children:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u5171\u6709\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u6b21\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3084\u95a2\u6570\u3092\u63d0\u4f9b\u3057\u307e\u3059:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#options",children:[(0,s.jsx)(n.strong,{children:"options"})," : Object"]}),(0,s.jsx)(n.br,{}),"HTTPAgent \u304c\u73fe\u5728\u4f7f\u7528\u3057\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#requestsCount",children:[(0,s.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),(0,s.jsx)(n.br,{}),"HTTPAgent \u306b\u3088\u3063\u3066\u73fe\u5728\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6570"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#freeSocketsCount",children:[(0,s.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),(0,s.jsx)(n.br,{}),"HTTPAgent \u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f ",(0,s.jsx)(n.code,{children:"maxSockets"})," \u306b\u5bfe\u3059\u308b\u7a7a\u304d\u30bd\u30b1\u30c3\u30c8\u6570"]})})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u5171\u6709\u53ef\u80fd\u306a\u305f\u3081\u3001 \u30b7\u30f3\u30b0\u30eb\u30c8\u30f3\u30af\u30e9\u30b9\u306b\u8ffd\u52a0\u3059\u308c\u3070\u3001\u540c\u3058\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u3059\u3079\u3066\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3064\u3044\u3066\u540c\u3058\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"4dhttpagentnew",children:"4D.HTTPAgent.new()"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D.HTTPAgent.new"}),"( { ",(0,s.jsx)(n.em,{children:"options"})," : Object } ) : 4D.HTTPAgent"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"HTTPAgent \u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30aa\u30d7\u30b7\u30e7\u30f3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u623b\u308a\u5024"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"4D.HTTPAgent"})}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"\u65b0\u898f HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"4D.HTTPAgent.new()"})," \u95a2\u6570\u306f\u3001",(0,s.jsx)(n.em,{children:"options"})," \u5f15\u6570\u3067\u5b9a\u7fa9\u3055\u308c\u308b\u8a2d\u5b9a\u3067\u5171\u6709\u53ef\u80fd\u306a HTTPAgent \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001",(0,s.jsx)(n.code,{children:"4D.HTTPAgent"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u3055\u308c\u305f ",(0,s.jsx)(n.a,{href:"#httpagent-%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:(0,s.jsx)(n.code,{children:"HTTPAgent\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})})," \u306f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u63a5\u7d9a\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u306e\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"options-\u5f15\u6570",children:[(0,s.jsx)(n.code,{children:"options"})," \u5f15\u6570"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"options"})," \u306b\u6e21\u3059\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u6b21\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u4efb\u610f\u3067\u3059):"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["HTTPAgent \u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/API/HTTPRequestClass#4dhttprequestnew",children:"HTTPRequest \u306e\u30aa\u30d7\u30b7\u30e7\u30f3"})," \u3068\u7d71\u5408\u3055\u308c\u307e\u3059 (HTTPRequest \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u512a\u5148\u3055\u308c\u307e\u3059)\u3002\u7279\u5b9a\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"keepAlive"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"\u5f53\u8a72\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306b\u3064\u3044\u3066 keep-alive \u3092\u6709\u52b9\u306b\u3057\u307e\u3059"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxSockets"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"65535"}),(0,s.jsx)(n.td,{children:"\u30b5\u30fc\u30d0\u30fc\u3042\u305f\u308a\u306e\u6700\u5927\u30bd\u30b1\u30c3\u30c8\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxTotalSockets"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"65535"}),(0,s.jsx)(n.td,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u6700\u5927\u30bd\u30b1\u30c3\u30c8\u6570"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"undefined"}),(0,s.jsx)(n.td,{children:"\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u672a\u4f7f\u7528\u306e\u30bd\u30b1\u30c3\u30c8\u304c\u9589\u3058\u3089\u308c\u308b\u307e\u3067\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"certificatesFolder"}),(0,s.jsx)(n.td,{children:"Folder"}),(0,s.jsxs)(n.td,{children:["undefined (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53c2\u7167)"]}),(0,s.jsx)(n.td,{children:"\u5f53\u8a72\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u30d5\u30a9\u30eb\u30c0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minTLSVersion"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["undefined (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53c2\u7167)"]}),(0,s.jsx)(n.td,{children:"\u5f53\u8a72\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8a2d\u5b9a\u3059\u308b TLS \u306e\u6700\u5c0f\u30d0\u30fc\u30b8\u30e7\u30f3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"protocol"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsxs)(n.td,{children:["undefined (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53c2\u7167)"]}),(0,s.jsx)(n.td,{children:"\u5f53\u8a72\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u3063\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u4f7f\u7528\u3055\u308c\u308b\u30d7\u30ed\u30c8\u30b3\u30eb"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"validateTLSCertificate"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["undefined (\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/API/HTTPRequestClass#options-%E5%BC%95%E6%95%B0",children:"HTTPRequest.new()"})," \u53c2\u7167)"]}),(0,s.jsx)(n.td,{children:"\u5f53\u8a72\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3064\u3044\u3066\u3001TLS \u8a3c\u660e\u66f8\u306e\u691c\u8a3c\u3092\u304a\u3053\u306a\u3046\u304b"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u540c\u3058\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u8907\u6570\u306e\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305d\u306e\u5834\u5408\u5404\u30b5\u30fc\u30d0\u30fc\u306f\u3001\u540c\u3058\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u305f\u72ec\u81ea\u306e\u63a5\u7d9a\u30d7\u30fc\u30eb\u3092\u6301\u3061\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.p,{children:"HTTPAgent \u306e\u4f5c\u6210:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $options:={}\n$options.maxSockets:=5 // \u30b5\u30fc\u30d0\u30fc\u6bce\u306e\u6700\u5927\u30bd\u30b1\u30c3\u30c8\u6570\n$options.maxTotalSockets:=10 // \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u6700\u5927\u30bd\u30b1\u30c3\u30c8\u6570\n$options.validateTLSCertificate:=True // \u30b5\u30fc\u30d0\u30fc\u306e\u8a3c\u660e\u66f8\u3092\u691c\u8a3c\u3057\u307e\u3059\n\nvar $myAgent:=4D.HTTPAgent.new($options)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4efb\u610f\u306e\u90fd\u5e02\u306e\u73fe\u5730\u6642\u9593\u3092\u78ba\u8a8d\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $options:={}\n$options.method:="GET"\n$options.agent:=$myAgent\nvar $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) \n\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"HTTPRequest \u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u6301\u3064\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:".options"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"options"})," : Object"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e-1",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".options"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001HTTPAgent \u304c\u73fe\u5728\u4f7f\u7528\u3057\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"requestscount",children:".requestsCount"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"requestsCount"})," : Integer"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e-2",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".requestsCount"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001HTTPAgent \u306b\u3088\u3063\u3066\u73fe\u5728\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6570\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"freesocketscount",children:".freeSocketsCount"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"freeSocketsCount"})," : Integer"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e-3",children:"\u8aac\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".freeSocketsCount"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001HTTPAgent \u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f ",(0,s.jsx)(n.code,{children:"maxSockets"})," \u306b\u5bfe\u3059\u308b\u7a7a\u304d\u30bd\u30b1\u30c3\u30c8\u6570\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(296540);const d={},r=s.createContext(d);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);