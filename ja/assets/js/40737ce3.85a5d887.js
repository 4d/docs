"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31211],{60847:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=n(474848),r=n(28453);const d={id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},l=void 0,c={id:"REST/authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3",description:"\u30bb\u30c3\u30b7\u30e7\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/REST/authUsers.md",sourceDirName:"REST",slug:"/REST/authUsers",permalink:"/docs/ja/20-R6/REST/authUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FauthUsers.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"authUsers",title:"\u30e6\u30fc\u30b6\u30fc\u3068\u30bb\u30c3\u30b7\u30e7\u30f3"},sidebar:"docs",previous:{title:"\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",permalink:"/docs/ja/20-R6/REST/configuration"},next:{title:"\u30b5\u30fc\u30d0\u30fc\u60c5\u5831\u306e\u53d6\u5f97",permalink:"/docs/ja/20-R6/REST/genInfo"}},t={},o=[{value:"\u30bb\u30c3\u30b7\u30e7\u30f3",id:"\u30bb\u30c3\u30b7\u30e7\u30f3",level:2},{value:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",id:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",level:2},{value:"\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8",id:"\u8a18\u8ff0\u7684rest\u30ea\u30af\u30a8\u30b9\u30c8",level:3},{value:"<code>Function authentify</code>",id:"function-authentify",level:2},{value:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"\u30bb\u30c3\u30b7\u30e7\u30f3",children:"\u30bb\u30c3\u30b7\u30e7\u30f3"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96",children:"\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u6709\u52b9"})," \u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408 (\u63a8\u5968)\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/WebServer/sessions",children:"Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3"})," \u3092\u4f5c\u6210\u30fb\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u8907\u6570\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u51e6\u7406\u3084\u3001Web\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u30c7\u30fc\u30bf\u5171\u6709\u3001\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u306e\u5236\u5fa1\u306a\u3069\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u958b\u304b\u308c\u305f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u3001",(0,i.jsx)(s.code,{children:"Session"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068 ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/API/SessionClass",children:"Session API"})," \u3092\u4ecb\u3057\u3066\u64cd\u4f5c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5f8c\u7d9a\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u540c\u3058\u30bb\u30c3\u30b7\u30e7\u30f3cookie \u3092\u518d\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u6b63\u5e38\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u5f8c\u306b\u958b\u304b\u308c\u307e\u3059 (\u5f8c\u8ff0\u53c2\u7167)\u3002"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["4D Server \u4e0a\u3067\u306f\u3001\u958b\u304b\u308c\u308b REST\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u3064\u304d\u30014D\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30bb\u30f3\u30b9\u304c 1 \u6d88\u8cbb\u3055\u308c\u307e\u3059\u3002",(0,i.jsx)(s.br,{})]}),"\n",(0,i.jsx)(s.li,{children:"\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc\u306e 4D \u3067\u306f\u3001\u30c6\u30b9\u30c8\u76ee\u7684\u3067 REST\u30bb\u30c3\u30b7\u30e7\u30f3\u3092 3\u3064\u307e\u3067\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9",children:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"}),"\n",(0,i.jsx)(s.admonition,{title:"\u4e92\u63db\u6027",type:"note",children:(0,i.jsxs)(s.p,{children:["4D 20 R6 \u4ee5\u964d\u3001",(0,i.jsx)(s.code,{children:"On REST Authentication"})," \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u306b\u57fa\u3065\u304f\u5f93\u6765\u306e\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u306f ",(0,i.jsx)(s.strong,{children:"\u975e\u63a8\u5968"})," \u3068\u306a\u308a\u307e\u3057\u305f\u3002 \u73fe\u5728\u306f\u3001",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/ORDA/privileges#rolesjson-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB",children:(0,i.jsx)(s.strong,{children:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9"})})," \u306e\u4f7f\u7528 (\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u81ea\u52d5\u7684\u306b\u6709\u52b9) \u304a\u3088\u3073 ",(0,i.jsxs)(s.a,{href:"#dsauthentify",children:[(0,i.jsx)(s.code,{children:"ds.authentify()"}),"\u95a2\u6570"]})," \u306e\u5b9f\u88c5\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u5909\u63db\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/settings/web#dsauthentify-%E9%96%A2%E6%95%B0%E3%81%AB%E3%82%88%E3%81%A3%E3%81%A6-rest%E8%AA%8D%E8%A8%BC%E3%82%92%E6%9C%89%E5%8A%B9%E5%8C%96%E3%81%99%E3%82%8B",children:"\u8a2d\u5b9a\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306e\u30dc\u30bf\u30f3"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u69cb\u6210\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 Qodly Studio for 4D \u3067\u306f\u3001\u6a29\u9650\u30d1\u30cd\u30eb\u306e ",(0,i.jsxs)(s.a,{href:"/docs/ja/20-R6/WebServer/qodly-studio#force-login",children:[(0,i.jsx)(s.strong,{children:"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"]})," \u3092\u4f7f\u7528\u3057\u3066\u30ed\u30b0\u30a4\u30f3\u30e2\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(s.p,{children:"\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u30b7\u30fc\u30b1\u30f3\u30b9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:['\u6700\u521d\u306e REST\u30b3\u30fc\u30eb (\u305f\u3068\u3048\u3070 Qodly\u30da\u30fc\u30b8\u30b3\u30fc\u30eb) \u3067\u306f\u3001"\u30b2\u30b9\u30c8" Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 ',(0,i.jsx)(s.a,{href:"#%E8%A8%98%E8%BF%B0%E7%9A%84rest%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88",children:"\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8"})," \u4ee5\u5916\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u6a29\u9650\u3082\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6d88\u8cbb\u3082\u3042\u308a\u307e\u305b\u3093\u3002",(0,i.jsx)(s.br,{}),'\n\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8 \u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u6d88\u8cbb\u3059\u308b Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u304b\u308c\u3066\u3044\u306a\u304f\u3066\u3082\u3001\u5e38\u306b\u30b5\u30fc\u30d0\u30fc\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u305d\u308c\u3089\u306f "\u30b2\u30b9\u30c8" \u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4ecb\u3057\u3066\u51e6\u7406\u3055\u308c\u307e\u3059\u3002']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u4e8b\u524d\u306b\u7528\u610f\u3057\u305f ",(0,i.jsxs)(s.a,{href:"#authentify",children:[(0,i.jsx)(s.code,{children:"authentify()"})," \u95a2\u6570"]})," \u3092\u547c\u3073\u51fa\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u8cc7\u683c\u60c5\u5831\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u3001\u9069\u5207\u306a\u6a29\u9650\u3067",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 ",(0,i.jsx)(s.code,{children:"authentify()"})," \u306f\u516c\u958b\u3055\u308c\u305f ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/ORDA/ordaClasses#datastore-%E3%82%AF%E3%83%A9%E3%82%B9",children:"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u30af\u30e9\u30b9\u95a2\u6570"})," \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"/rest/$catalog/authentify"})," \u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u8cc7\u683c\u60c5\u5831\u3068\u5171\u306b\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u306a\u3044\u57fa\u672c\u7684\u306a\u30ed\u30b0\u30a4\u30f3\u30d5\u30a9\u30fc\u30e0\u306e\u307f\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,i.jsx)(s.code,{children:"/rest/$getWebForm"}),"\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4ecb\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u308b ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/WebServer/qodly-studio",children:"Qodly\u30da\u30fc\u30b8"})," \u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u6b63\u5e38\u306b\u8a8d\u8a3c\u3055\u308c\u305f\u5834\u5408\u30014D\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u6d88\u8cbb\u3055\u308c\u3001\u3059\u3079\u3066\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u53d7\u3051\u5165\u308c\u3089\u308c\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(986839).A+"",width:"1344",height:"756"})}),"\n",(0,i.jsxs)(s.p,{children:["\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u306e\u6bb5\u968e\u3067\u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6d88\u8cbb\u306f Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304b\u3089\u5207\u308a\u96e2\u3055\u308c\u307e\u3059\u3002 \u30e9\u30a4\u30bb\u30f3\u30b9\u306f\u3001",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," \u304c\u5b9f\u884c\u3055\u308c\u305f\u6642\u306b\u306e\u307f\u5fc5\u8981\u306a\u305f\u3081\u3001\u4f7f\u7528\u3055\u308c\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6570\u3092\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u4ed6\u306e\u3059\u3079\u3066\u306e REST\u30ea\u30af\u30a8\u30b9\u30c8 (\u30c7\u30fc\u30bf\u51e6\u7406\u3084\u95a2\u6570\u306e\u5b9f\u884c) \u306f\u3001\u9069\u5207\u306a\u6a29\u9650\u3092\u6301\u3064 Web\u30bb\u30c3\u30b7\u30e7\u30f3\u5185\u3067\u5b9f\u884c\u3055\u308c\u305f\u5834\u5408\u306b\u306e\u307f\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059 Web\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u308b\u306b\u306f\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066 ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," \u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u3068\u30014D\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u6d88\u8cbb\u304c\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u8a18\u8ff0\u7684rest\u30ea\u30af\u30a8\u30b9\u30c8",children:"\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,i.jsx)(s.p,{children:'\u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044 Web\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3 ("\u30b2\u30b9\u30c8" \u30bb\u30c3\u30b7\u30e7\u30f3) \u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u8a18\u8ff0\u7684REST\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u306f\u4ee5\u4e0b\u306e\u3082\u306e\u3092\u6307\u3057\u307e\u3059:'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/REST/catalog",children:(0,i.jsx)(s.code,{children:"/rest/$catalog"})})," \u30ea\u30af\u30a8\u30b9\u30c8 (\u4f8b: ",(0,i.jsx)(s.code,{children:"/rest/$catalog/$all"}),") - \u5229\u7528\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/rest/$catalog/authentify"})," - \u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u30a4\u30f3\u306b\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u95a2\u6570"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"/rest/$getWebForm"})," - Qodly\u30da\u30fc\u30b8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"alt-text",src:n(249146).A+"",width:"1171",height:"302"})}),"\n",(0,i.jsx)(s.h2,{id:"function-authentify",children:(0,i.jsx)(s.code,{children:"Function authentify"})}),"\n",(0,i.jsx)(s.h3,{id:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9",children:"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"exposed Function authentify({params : type}) {-> result : type}\n    // \u30b3\u30fc\u30c9\n\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"authentify()"})," \u95a2\u6570\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/ORDA/ordaClasses#datastore-%E3%82%AF%E3%83%A9%E3%82%B9",children:"DataStore \u30af\u30e9\u30b9"})," \u306b\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u3001REST\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u4ecb\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.p,{children:'"\u5f37\u5236\u30ed\u30b0\u30a4\u30f3" \u30e2\u30fc\u30c9\u304c\u6709\u52b9\u306a\u5834\u5408\u3001\u3053\u306e\u95a2\u6570\u306f\u3001REST\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u304b\u3089\u552f\u4e00\u306e\u5229\u7528\u53ef\u80fd\u306a\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u3067\u3059\u3002\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u9069\u5207\u306a\u6a29\u9650\u3092\u53d6\u5f97\u3059\u308b\u307e\u3067\u3001\u4ed6\u306e\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u3084\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u306f\u62d2\u5426\u3055\u308c\u307e\u3059\u3002'}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.a,{href:"/docs/ja/20-R6/ORDA/privileges#rolesjson-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB",children:[(0,i.jsx)(s.code,{children:"roles.json"}),"\u30d5\u30a1\u30a4\u30eb"]})," \u306e\u6a29\u9650\u8a2d\u5b9a\u306b\u304b\u304b\u308f\u3089\u305a\u3001REST\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306f\u5e38\u306b ",(0,i.jsx)(s.code,{children:"authentify()"})," \u95a2\u6570\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,i.jsxs)(s.p,{children:["\u3053\u306e\u95a2\u6570\u306f\u3001\u4efb\u610f\u306e\u8a8d\u8a3c\u307e\u305f\u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u60c5\u5831\u3092 ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/REST/classFunctions#%E5%BC%95%E6%95%B0",children:"\u5f15\u6570"})," \u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u3001\u4efb\u610f\u306e\u5024\u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u95a2\u6570\u306f REST\u30ea\u30af\u30a8\u30b9\u30c8\u304b\u3089\u306e\u307f\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u305f\u3081\u3001\u5f15\u6570\u306f POST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u672c\u6587\u3067\u6e21\u3055\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u3053\u306e\u95a2\u6570\u306f 2\u90e8\u69cb\u6210\u3067\u66f8\u304b\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"REST\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u9001\u4fe1\u5143\u3092\u8b58\u5225\u3057\u3001\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9"}),"\n",(0,i.jsxs)(s.li,{children:["\u8a8d\u8a3c\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u9069\u5207\u306a\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u308b ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," \u306e\u547c\u3073\u51fa\u3057"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\u95a2\u6570\u304c ",(0,i.jsx)(s.a,{href:"/docs/ja/20-R6/API/SessionClass#setprivileges",children:(0,i.jsx)(s.code,{children:"Session.setPrivileges()"})})," \u3092\u547c\u3073\u51fa\u3055\u306a\u3044\u5834\u5408\u3001\u6a29\u9650\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u306a\u3044\u305f\u3081\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3082\u6d88\u8cbb\u3055\u308c\u305a\u3001\u5f8c\u7d9a\u306e\u8a18\u8ff0\u7684\u3067\u306a\u3044 REST\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u62d2\u5426\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,i.jsxs)(s.p,{children:["\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067 Web\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u304f\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002 DataStore \u30af\u30e9\u30b9\u306b\u6b21\u306e ",(0,i.jsx)(s.code,{children:"authentify()"})," \u95a2\u6570\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'exposed Function authentify($credentials : Object) : Text\n\nvar $users : cs.UsersSelection\nvar $user : cs.UsersEntity\n\n$users:=ds.Users.query("name = :1"; $credentials.name)\n$user:=$users.first()\n\nIf ($user#Null) // \u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u5834\u5408\n    If (Verify password hash($credentials.password; $user.password))\n        Session.setPrivileges("vip")\n    Else \n        return "\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u8aa4\u308a\u304c\u3042\u308a\u307e\u3059"\n    End if \nElse \n        return "\u767b\u9332\u3055\u308c\u3066\u3044\u306a\u3044\u30e6\u30fc\u30b6\u30fc\u3067\u3059"\nEnd if\n'})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"authentify()"})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u306b\u306f:"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"POST"})," ",(0,i.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/authentify"})]}),"\n",(0,i.jsx)(s.p,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30dc\u30c7\u30a3:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'[{"name":"Henry",\n"password":"123"}]\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},249146:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/force-login-1-f9e377d9d1294c166d2e316a30d4eef4.jpeg"},986839:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/force-login-2-c615d4581880aa201c1e7abd591f6146.jpeg"},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var i=n(296540);const r={},d=i.createContext(r);function l(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);