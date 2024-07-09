/*! For license information please see 1c9de402.1b242e94.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3761],{426650:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=r(474848),i=r(28453);const o={id:"real-time-monitor",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8"},t=void 0,d={id:"ServerWindow/real-time-monitor",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8",description:'\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u305f\u3001"\u9577\u3044" \u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30e2\u30cb\u30bf\u30fc\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u306f\u3001\u305f\u3068\u3048\u3070\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u30af\u30a8\u30ea\u3084\u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u306e\u5b9f\u884c\u306a\u3069\u3067\u3059:',source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/real-time-monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/real-time-monitor",permalink:"/docs/ja/ServerWindow/real-time-monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Freal-time-monitor.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"real-time-monitor",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8"},sidebar:"docs",previous:{title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8",permalink:"/docs/ja/ServerWindow/http-server"},next:{title:"\u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u304b\u3089\u306e\u7ba1\u7406",permalink:"/docs/ja/ServerWindow/remote-admin"}},l={},c=[{value:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30e2\u30fc\u30c9",id:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30e2\u30fc\u30c9",level:2},{value:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30dc\u30bf\u30f3",id:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30dc\u30bf\u30f3",level:2},{value:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u4f4e5\u79d2\u9593\u8868\u793a\u3059\u308b",id:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u4f4e5\u79d2\u9593\u8868\u793a\u3059\u308b",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:'\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u305f\u3001"\u9577\u3044" \u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u72b6\u614b\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u30e2\u30cb\u30bf\u30fc\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u306f\u3001\u305f\u3068\u3048\u3070\u30b7\u30fc\u30b1\u30f3\u30b7\u30e3\u30eb\u30af\u30a8\u30ea\u3084\u30d5\u30a9\u30fc\u30df\u30e5\u30e9\u306e\u5b9f\u884c\u306a\u3069\u3067\u3059:'}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(991272).A+"",width:"700",height:"472"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u306e\u7ba1\u7406\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u3042\u308a\u307e\u3059\u304c\u3001\u30ea\u30e2\u30fc\u30c8\u306e 4D\u30de\u30b7\u30f3\u304b\u3089\u3082\u898b\u3089\u308c\u307e\u3059\u3002 \u30ea\u30e2\u30fc\u30c8\u30de\u30b7\u30f3\u306e\u5834\u5408\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u64cd\u4f5c\u306e\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30c7\u30fc\u30bf\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u9577\u3044\u51e6\u7406\u306f\u3001\u305d\u308c\u305e\u308c\u306b\u884c\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002 \u64cd\u4f5c\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u3053\u306e\u884c\u306f\u6d88\u3048\u307e\u3059 (",(0,s.jsx)(e.strong,{children:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u4f4e5\u79d2\u9593\u8868\u793a\u3059\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001\u77ed\u3044\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u3082 5\u79d2\u9593\u8868\u793a\u3057\u305f\u307e\u307e\u306b\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u884c\u306b\u3064\u3044\u3066\u3001\u4ee5\u4e0b\u306e\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u958b\u59cb\u6642\u523b"}),': \u64cd\u4f5c\u306e\u958b\u59cb\u6642\u523b\u304c\u3001"dd/mm/yyyy - hh:mm:ss" \u3068\u3044\u3046\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u7d4c\u904e\u6642\u9593"})," (\u79d2): \u9032\u884c\u4e2d\u306e\u64cd\u4f5c\u306e\u7d4c\u904e\u6642\u9593\u304c\u79d2\u5358\u4f4d\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u60c5\u5831"}),": \u64cd\u4f5c\u306e\u8aac\u660e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u8a73\u7d30"}),": \u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u3001\u9078\u629e\u3057\u305f\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30bf\u30a4\u30d7\u306b\u5fdc\u3058\u3066\u3001\u305d\u306e\u8a73\u7d30\u306a\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u5177\u4f53\u7684\u306b\u306f\u4ee5\u4e0b\u306e\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059:\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4f5c\u6210\u3055\u308c\u305f\u5834\u6240"}),': \u305d\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u7d50\u679c\u304b (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u4e0a\u3067\u4f5c\u6210)\u3001\u30b9\u30c8\u30a2\u30c9\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u2015\u307e\u305f\u306f "\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u5b9f\u884c" \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u305f\u7d50\u679c\u304b (\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u4f5c\u6210) \u3092\u8868\u793a\u3057\u307e\u3059\u3002']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u8a73\u7d30"}),": \u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u3068\u3001(\u30af\u30a8\u30ea\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u306f) \u30af\u30a8\u30ea\u30d7\u30e9\u30f3\u3092\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30b5\u30d6\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3"})," (\u3042\u308c\u3070): \u9078\u629e\u3057\u305f\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u5f93\u5c5e\u3059\u308b\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u8868\u793a\u3057\u307e\u3059 (\u4f8b:\u89aa\u30ec\u30b3\u30fc\u30c9\u306e\u524d\u306b\u30ea\u30ec\u30fc\u30c8\u30ec\u30b3\u30fc\u30c9\u3092\u524a\u9664\u3059\u308b)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30d7\u30ed\u30bb\u30b9\u8a73\u7d30"}),": \u30c6\u30fc\u30d6\u30eb\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30d7\u30ed\u30bb\u30b9\u3084\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u95a2\u3059\u308b\u8ffd\u52a0\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8\u306f\u3001",(0,s.jsx)(e.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page1277.html",children:(0,s.jsx)(e.code,{children:"GET ACTIVITY SNAPSHOT"})})," \u30b3\u30de\u30f3\u30c9\u3092\u5185\u90e8\u7684\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30da\u30fc\u30b8\u306f\u8868\u793a\u5f8c\u3059\u3050\u306b\u30a2\u30af\u30c6\u30a3\u30d6\u306b\u306a\u308a\u3001\u6052\u4e45\u7684\u306b\u66f4\u65b0\u3055\u308c\u7d9a\u3051\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u3053\u306e\u51e6\u7406\u306b\u3088\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u3092\u6975\u7aef\u306b\u9045\u304f\u3055\u305b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u4ee5\u4e0b\u306e\u65b9\u6cd5\u3092\u7528\u3044\u3066\u66f4\u65b0\u3092\u4e00\u6642\u7684\u306b\u505c\u6b62\u3055\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u505c\u6b62"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b"]}),"\n",(0,s.jsx)(e.li,{children:"\u30ea\u30b9\u30c8\u306e\u4e2d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b"}),"\n",(0,s.jsx)(e.li,{children:"\u30b9\u30da\u30fc\u30b9\u30d0\u30fc\u3092\u62bc\u3059"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u30da\u30fc\u30b8\u3092\u505c\u6b62\u3055\u305b\u308b\u3068\u4e00\u6642\u505c\u6b62\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u3001\u30dc\u30bf\u30f3\u306e\u8868\u793a\u304c ",(0,s.jsx)(e.strong,{children:"\u518d\u958b"})," \u306b\u5909\u308f\u308a\u307e\u3059\u3002\n\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u505c\u6b62\u64cd\u4f5c\u3068\u540c\u3058\u64cd\u4f5c\u3092\u3059\u308b\u3053\u3068\u3067\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3092\u518d\u958b\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30e2\u30fc\u30c9",children:"\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30e2\u30fc\u30c9"}),"\n",(0,s.jsx)(e.p,{children:"\u5fc5\u8981\u3067\u3042\u308c\u3070\u3001RTM\u30da\u30fc\u30b8\u306f\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3054\u3068\u306b\u8ffd\u52a0\u306e\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30e2\u30fc\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(e.strong,{children:"Shift"}),'\u30ad\u30fc\u3092\u62bc\u3057\u306a\u304c\u3089\u3001\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u3044\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u3059\u3079\u3066\u306e\u95b2\u89a7\u53ef\u80fd\u306a\u60c5\u5831\u304c\u3001\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306a\u3057\u3067 "\u30d7\u30ed\u30bb\u30b9\u8a73\u7d30" \u30a8\u30ea\u30a2\u306b\u8868\u793a\u3055\u308c\u307e\u3059(',(0,s.jsx)(e.code,{children:"GET ACTIVITY SNAPSHOT"})," \u30b3\u30de\u30f3\u30c9\u3067\u8fd4\u3055\u308c\u308b\u3082\u306e\u3068\u540c\u3058\u3067\u3059)\u3002 \u8868\u793a\u3055\u308c\u308b\u60c5\u5831\u306f\u3001\u9078\u629e\u3057\u305f\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6a19\u6e96\u30e2\u30fc\u30c9\u3067\u8868\u793a\u3055\u308c\u308b\u60c5\u5831\u306e\u4f8b\u3067\u3059:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(857985).A+"",width:"998",height:"293"})}),"\n",(0,s.jsxs)(e.p,{children:["\u30a2\u30c9\u30d0\u30f3\u30b9\u30c9\u30e2\u30fc\u30c9 (\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092 ",(0,s.jsx)(e.strong,{children:"Shift+\u30af\u30ea\u30c3\u30af"}),") \u3067\u306f\u3001\u3055\u3089\u306a\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(216906).A+"",width:"999",height:"288"})}),"\n",(0,s.jsx)(e.h2,{id:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30dc\u30bf\u30f3",children:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30dc\u30bf\u30f3"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u30b3\u30d4\u30fc"})," \u30dc\u30bf\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001RTM\u30d1\u30cd\u30eb\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5168\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u3001\u305d\u308c\u306b\u95a2\u9023\u3059\u308b\u8a73\u7d30 (\u30d7\u30ed\u30bb\u30b9\u3068\u30b5\u30d6\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u60c5\u5831) \u304c\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u3078\u3068\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(745073).A+"",width:"140",height:"40"})}),"\n",(0,s.jsx)(e.h2,{id:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u4f4e5\u79d2\u9593\u8868\u793a\u3059\u308b",children:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u4f4e5\u79d2\u9593\u8868\u793a\u3059\u308b"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u4f4e5\u79d2\u9593\u8868\u793a\u3059\u308b"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3068\u3001\u8868\u793a\u3055\u308c\u305f\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306f\u3069\u308c\u3082 (\u5b9f\u884c\u304c\u7d42\u4e86\u3057\u305f\u5f8c\u3082) \u6700\u4f4e5\u79d2\u9593\u306f\u8868\u793a\u3055\u308c\u305f\u307e\u307e\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u9069\u7528\u3055\u308c\u305f\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u30ea\u30b9\u30c8\u4e2d\u306b\u7070\u8272\u3067\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u6a5f\u80fd\u306f\u3001\u3068\u3066\u3082\u65e9\u304f\u7d42\u308f\u3063\u3066\u3057\u307e\u3046\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u305f\u3044\u5834\u5408\u306b\u6709\u52b9\u3067\u3059\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},221020:(n,e,r)=>{var s=r(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,r){var s,o={},c=null,h=null;for(s in void 0!==r&&(c=""+r),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(h=e.ref),e)t.call(e,s)&&!l.hasOwnProperty(s)&&(o[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps)void 0===o[s]&&(o[s]=e[s]);return{$$typeof:i,type:n,key:c,ref:h,props:o,_owner:d.current}}e.Fragment=o,e.jsx=c,e.jsxs=c},474848:(n,e,r)=>{n.exports=r(221020)},857985:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},216906:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},991272:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},745073:(n,e,r)=>{r.d(e,{A:()=>s});const s="data:image/png;base64,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"},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>d});var s=r(296540);const i={},o=s.createContext(i);function t(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);