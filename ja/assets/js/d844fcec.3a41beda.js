/*! For license information please see d844fcec.3a41beda.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33414],{119551:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var s=r(474848),d=r(28453);const c={id:"webServerObject",title:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"},l=void 0,t={id:"WebServer/webServerObject",title:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",description:"4D\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30e1\u30a4\u30f3 (\u30db\u30b9\u30c8) \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304a\u3088\u3073\u3001\u30db\u30b9\u30c8\u3055\u308c\u305f\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e Web\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/WebServer/webServerObject.md",sourceDirName:"WebServer",slug:"/WebServer/webServerObject",permalink:"/docs/ja/WebServer/webServerObject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FwebServerObject.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"webServerObject",title:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"},sidebar:"docs",previous:{title:"\u7ba1\u7406",permalink:"/docs/ja/WebServer/webServerAdmin"},next:{title:"Web \u958b\u767a",permalink:"/docs/ja/WebServer/gettingStarted"}},i={},h=[{value:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316",id:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316",level:2},{value:"Web\u30b5\u30fc\u30d0\u30fc\u95a2\u6570",id:"Web\u30b5\u30fc\u30d0\u30fc\u95a2\u6570",level:2},{value:"Web\u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3",id:"Web\u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3",level:2},{value:"4D Web\u30b3\u30de\u30f3\u30c9\u306e\u30b9\u30b3\u30fc\u30d7",id:"4D-Web\u30b3\u30de\u30f3\u30c9\u306e\u30b9\u30b3\u30fc\u30d7",level:2}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"4D\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30e1\u30a4\u30f3 (\u30db\u30b9\u30c8) \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304a\u3088\u3073\u3001\u30db\u30b9\u30c8\u3055\u308c\u305f\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e Web\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u305f\u3068\u3048\u3070\u3001\u30e1\u30a4\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b 2\u3064\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u6700\u5927 3\u3064\u306e\u72ec\u7acb\u3057\u305f Web\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e Web\u30b5\u30fc\u30d0\u30fc\u30921\u3064"}),"\n",(0,s.jsx)(n.li,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8#1 \u306e Web\u30b5\u30fc\u30d0\u30fc\u30921\u3064"}),"\n",(0,s.jsx)(n.li,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8#2 \u306e Web\u30b5\u30fc\u30d0\u30fc\u30921\u3064"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"1\u3064\u306e 4D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u63a5\u7d9a\u3067\u304d\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6570\u3001\u3064\u307e\u308a Web\u30b5\u30fc\u30d0\u30fc\u306e\u6570\u306b\u306f\u3001\u30e1\u30e2\u30ea\u4ee5\u5916\u306e\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30e1\u30a4\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e Web\u30b5\u30fc\u30d0\u30fc\u3092\u542b\u3080\u3001\u5404 4D Web\u30b5\u30fc\u30d0\u30fc\u306f\u3001",(0,s.jsx)(n.code,{children:"4D.WebServer"})," \u30af\u30e9\u30b9\u306e ",(0,s.jsx)(n.strong,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u3068\u3057\u3066\u516c\u958b\u3055\u308c\u307e\u3059\u3002 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u305f Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass",children:"\u591a\u6570\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3084\u95a2\u6570"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ab\u30ec\u30f3\u30c8\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u4efb\u610f\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u64cd\u4f5c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["4D\u30e9\u30f3\u30b2\u30fc\u30b8\u306e\u5f93\u6765\u306e ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.ja.html",children:"WEB\u30b3\u30de\u30f3\u30c9"})," \u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u305d\u306e\u5bfe\u8c61\u3068\u306a\u308b Web\u30b5\u30fc\u30d0\u30fc\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093 (\u5f8c\u8ff0\u53c2\u7167)\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5404 Web\u30b5\u30fc\u30d0\u30fc (\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8) \u306f\u3001\u500b\u5225\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u4ee5\u4e0b\u304c\u542b\u307e\u308c\u307e\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"On Web Authentication"})," \u304a\u3088\u3073 ",(0,s.jsx)(n.code,{children:"On Web Connection"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306e\u547c\u3073\u51fa\u3057"]}),"\n",(0,s.jsx)(n.li,{children:"4D\u30bf\u30b0\u306e\u51e6\u7406\u3068\u30e1\u30bd\u30c3\u30c9\u306e\u547c\u3073\u51fa\u3057"}),"\n",(0,s.jsx)(n.li,{children:"Web\u30bb\u30c3\u30b7\u30e7\u30f3\u3084 TLS\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u7ba1\u7406"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001\u72ec\u81ea\u306e Web\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u5099\u3048\u305f\u72ec\u7acb\u3057\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u6a5f\u80fd\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316",children:"Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316"}),"\n",(0,s.jsx)(n.p,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 (\u30c7\u30d5\u30a9\u30eb\u30c8Web\u30b5\u30fc\u30d0\u30fc) \u306e Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30014D \u8d77\u52d5\u6642\u306b\u81ea\u52d5\u7684\u306b\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002 \u3057\u305f\u304c\u3063\u3066\u3001\u65b0\u898f\u4f5c\u6210\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u6b21\u306e\u3088\u3046\u306b\u66f8\u3044\u305f\u5834\u5408:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$nbSrv:=WEB Server list.length   \n//$nbSrv \u306e\u5024\u306f 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#web-server",children:(0,s.jsx)(n.code,{children:"WEB Server"})})," \u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\t// 4D.WebServer \u30af\u30e9\u30b9\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5909\u6570\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\nvar webServer : 4D.WebServer \n\t// \u30ab\u30ec\u30f3\u30c8\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304b\u3089 Web\u30b5\u30fc\u30d0\u30fc\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\nwebServer:=WEB Server  \n\n\t// \u4ee5\u4e0b\u3068\u540c\u3058\u3067\u3059\nwebServer:=WEB Server(Web server database)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306b:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e Web\u30b5\u30fc\u30d0\u30fc\u3092\u547c\u3073\u51fa\u3059\u5834\u5408\u3084"}),"\n",(0,s.jsx)(n.li,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f\u30b5\u30fc\u30d0\u30fc (\u3069\u306e\u30b5\u30fc\u30d0\u30fc\u3067\u3082) \u3092\u547c\u3073\u51fa\u3059\u5834\u5408"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6b21\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var webServer : 4D.WebServer \n    // \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u30db\u30b9\u30c8\u306e Web\u30b5\u30fc\u30d0\u30fc\u3092\u547c\u3073\u51fa\u3059  \nwebServer:=WEB Server(Web server host database)  \n    // \u30bf\u30fc\u30b2\u30c3\u30c8\u306e Web\u30b5\u30fc\u30d0\u30fc\u3092\u547c\u3073\u51fa\u3059\nwebServer:=WEB Server(Web server receiving request)  \n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Web\u30b5\u30fc\u30d0\u30fc\u95a2\u6570",children:"Web\u30b5\u30fc\u30d0\u30fc\u95a2\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"API/webServerClass.md#web%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"Web\u30b5\u30fc\u30d0\u30fc\u30af\u30e9\u30b9\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})," \u306b\u306f\u3001\u4ee5\u4e0b\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u95a2\u6570"}),(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u623b\u308a\u5024"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"start()"})})}),(0,s.jsx)(n.td,{children:"settings (\u30aa\u30d6\u30b8\u30a7\u30af\u30c8)"}),(0,s.jsx)(n.td,{children:"status (\u30aa\u30d6\u30b8\u30a7\u30af\u30c8)"}),(0,s.jsx)(n.td,{children:"Web\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3057\u307e\u3059"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"stop()"})})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Web\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3057\u307e\u3059"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Web\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u30fb\u505c\u6b62\u3059\u308b\u306b\u306f\u3001Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e ",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"start()"})})," \u304a\u3088\u3073 ",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#stop",children:(0,s.jsx)(n.code,{children:"stop()"})})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3060\u3051\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"var $status : Object\n    // \u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u8a2d\u5b9a\u3067 Web\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u5834\u5408\n$status:=webServer.start()\n    // \u30ab\u30b9\u30bf\u30e0\u8a2d\u5b9a\u3067 Web\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b\u5834\u5408  \n    // $settings \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001Wev\u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u683c\u7d0d\u3057\u307e\u3059\nwebServer.start($settings)\n\n    // Web\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3057\u307e\u3059\n$status:=webServer.stop()\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Web\u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3",children:"Web\u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\n",(0,s.jsxs)(n.p,{children:["Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001Web\u30b5\u30fc\u30d0\u30fc\u3092\u69cb\u6210\u3059\u308b ",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#web%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",children:"\u3055\u307e\u3056\u307e\u306a\u30d7\u30ed\u30d1\u30c6\u30a3"})," \u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5b9a\u7fa9\u3057\u307e\u3059:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:".start()"})})," \u95a2\u6570\u306e ",(0,s.jsx)(n.code,{children:"settings"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u5b9a\u7fa9\u3057\u307e\u3059 (\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9664\u304f\u3001\u5f8c\u8ff0\u53c2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0a\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001",(0,s.jsx)(n.code,{children:"WEB SET OPTION"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u5b9a\u7fa9\u3057\u307e\u3059 (\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u307f)\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4e0a\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8a2d\u5b9a\u3067\u5b9a\u7fa9\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Web\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u306f Web\u30b5\u30fc\u30d0\u30fc\u306e\u6b21\u56de\u8d77\u52d5\u6642\u306b\u4f7f\u7528\u3055\u308c\u308b\u5024\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["Web\u30b5\u30fc\u30d0\u30fc\u304c\u8d77\u52d5\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u306f Web\u30b5\u30fc\u30d0\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b\u5b9f\u969b\u306e\u5024\u304c\u542b\u307e\u308c\u307e\u3059 (\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5b9a\u306f ",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:".start()"})})," \u95a2\u6570\u306e ",(0,s.jsx)(n.code,{children:"settings"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306b\u3088\u3063\u3066\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059)\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"isRunning"}),"\u3001",(0,s.jsx)(n.em,{children:"name"}),"\u3001",(0,s.jsx)(n.em,{children:"openSSLVersion"}),"\u3001",(0,s.jsx)(n.em,{children:"perfectForwardSecrecy"})," \u306f\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/API/WebServerClass#start",children:(0,s.jsx)(n.code,{children:"start()"})}),"\u95a2\u6570\u306e ",(0,s.jsx)(n.code,{children:"settings"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3067\u4e8b\u524d\u306b\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4D-Web\u30b3\u30de\u30f3\u30c9\u306e\u30b9\u30b3\u30fc\u30d7",children:"4D Web\u30b3\u30de\u30f3\u30c9\u306e\u30b9\u30b3\u30fc\u30d7"}),"\n",(0,s.jsxs)(n.p,{children:["4D\u30e9\u30f3\u30b2\u30fc\u30b8\u306b\u306f\u3001Web\u30b5\u30fc\u30d0\u30fc\u306e\u5236\u5fa1\u306b\u4f7f\u7528\u3067\u304d\u308b ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.ja.html",children:"\u3044\u304f\u3064\u304b\u306e\u30b3\u30de\u30f3\u30c9"})," \u304c\u3042\u308a\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u3053\u308c\u3089\u306e\u30b3\u30de\u30f3\u30c9\u306f 1\u3064\u306e (\u30c7\u30d5\u30a9\u30eb\u30c8) Web\u30b5\u30fc\u30d0\u30fc\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30b3\u30de\u30f3\u30c9\u3092 Web\u30b5\u30fc\u30d0\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u305d\u306e\u30b9\u30b3\u30fc\u30d7\u304c\u9069\u5207\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30b3\u30de\u30f3\u30c9"}),(0,s.jsx)(n.th,{children:"\u30b9\u30b3\u30fc\u30d7"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SET DATABASE PARAMETER"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB CLOSE SESSION"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET BODY PART"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get body part count"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get Current Session ID"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET HTTP BODY"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET HTTP HEADER"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET OPTION"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get server info"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET SESSION EXPIRATION"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Get session process count"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET STATISTICS"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB GET VARIABLES"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Is secured connection"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Is server running"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND BLOB"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND FILE"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND HTTP REDIRECT"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND RAW DATA"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SEND TEXT"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET HOME PAGE"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET HTTP HEADER"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET OPTION"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB SET ROOT FOLDER"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB START SERVER"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB STOP SERVER"})}),(0,s.jsx)(n.td,{children:"\u30db\u30b9\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 Web\u30b5\u30fc\u30d0\u30fc"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"WEB Validate digest"})}),(0,s.jsx)(n.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f Web\u30b5\u30fc\u30d0\u30fc"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},221020:(e,n,r)=>{var s=r(296540),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var s,c={},h=null,j=null;for(s in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(j=n.ref),n)l.call(n,s)&&!i.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:d,type:e,key:h,ref:j,props:c,_owner:t.current}}n.Fragment=c,n.jsx=h,n.jsxs=h},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var s=r(296540);const d={},c=s.createContext(d);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);