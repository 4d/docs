"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79551],{701416:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(474848),l=i(28453);const t={id:"develop-plug-ins",title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u958b\u767a"},r=void 0,d={id:"Extensions/develop-plug-ins",title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u958b\u767a",description:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5fc5\u8981\u6027",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/ja/20-R6/Extensions/develop-plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"develop-plug-ins",title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u958b\u767a"},sidebar:"docs",previous:{title:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u958b\u767a",permalink:"/docs/ja/20-R6/Extensions/develop-components"},next:{title:"Web Applications",permalink:"/docs/ja/20-R6/category/web-applications"}},o={},c=[{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5fc5\u8981\u6027",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5fc5\u8981\u6027",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b",level:2},{value:"\u91cd\u8981\u306a\u6ce8\u8a18",id:"\u91cd\u8981\u306a\u6ce8\u8a18",level:3},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u308a\u65b9",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u308a\u65b9",level:2},{value:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5171\u6709",id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5171\u6709",level:2}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5fc5\u8981\u6027",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5fc5\u8981\u6027"}),"\n",(0,s.jsx)(e.p,{children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084\u30ec\u30b3\u30fc\u30c9\u306e\u64cd\u4f5c\u3001\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u5b9f\u88c5\u306e\u305f\u3081\u30014D \u306f\u6570\u767e\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b3\u30de\u30f3\u30c9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3055\u3089\u306b\u7279\u6b8a\u306a\u6a5f\u80fd (\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4f9d\u5b58\u306e\u3082\u306e\u306a\u3069) \u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001Windows\u4e0a\u306eODBC \u3001macOS\u4e0a\u306e\u30a2\u30c3\u30d7\u30eb\u30b5\u30fc\u30d3\u30b9\u3001\u7279\u6b8a\u306a\u7d71\u8a08\u6a5f\u80fd\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ed\u30b0\u30a4\u30f3\u3001\u6c7a\u6e08\u7528\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4ecb\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u30a2\u30af\u30bb\u30b9\u3001\u7279\u6b8a\u306a\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3001\u72ec\u81ea\u306e\u30d4\u30af\u30c1\u30e3\u30fc\u69cb\u9020\u306a\u3069\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308c\u3089\u306e\u6a5f\u80fd\u3092\u3059\u3079\u3066\u3001macOS \u3068 Windows \u306e\u4e21\u65b9\u3067 4D \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3057\u3088\u3046\u3068\u3057\u305f\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u6570\u306f\u6570\u5343\u306b\u81a8\u308c\u4e0a\u304c\u308b\u3068\u540c\u6642\u306b\u3001\u307b\u3068\u3093\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u305d\u308c\u3089\u306e\u8ffd\u52a0\u6a5f\u80fd\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044\u3067\u3057\u3087\u3046\u3002 \u307e\u305f\u3001\u305d\u306e\u3088\u3046\u306a\u4e07\u80fd\u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u4e0a\u3052\u305f\u3068\u3057\u3066\u3082\u3001\u305d\u306e\u7d50\u679c\u3068\u3057\u3066 4D \u74b0\u5883\u306f\u8907\u96d1\u5316\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u30014D \u306e\u5b66\u7fd2\u304c\u56f0\u96e3\u306b\u306a\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u6210\u679c\u304c\u5f97\u3089\u308c\u308b\u307e\u3067\u6642\u9593\u3092\u8981\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.p,{children:"4D \u74b0\u5883\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u6027\u306b\u3088\u308a\u3001\u57fa\u790e\u7684\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306f\u3082\u3061\u308d\u3093\u306e\u3053\u3068\u3001\u975e\u5e38\u306b\u8907\u96d1\u306a\u30b7\u30b9\u30c6\u30e0\u306e\u958b\u767a\u3082\u53ef\u80fd\u3067\u3059\u3002 4D \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306b\u3088\u3063\u3066\u30014D \u74b0\u5883\u306f\u3042\u3089\u3086\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u3057\u3066\u958b\u304b\u308c\u3066\u3044\u307e\u3059\u3002 4D \u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u3088\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30e6\u30fc\u30b6\u30fc\u306e\u751f\u7523\u6027\u3092\u98db\u8e8d\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u4f55\u304b"}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306f\u30014D \u8d77\u52d5\u6642\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u3053\u3068\u3067\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u30014D \u306b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u5e38\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306f:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"4D \u304c\u3067\u304d\u306a\u3044\u3053\u3068\u3092\u51e6\u7406\u3057\u307e\u3059 (\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7279\u6709\u306e\u6280\u8853\u306a\u3069)"}),"\n",(0,s.jsx)(e.li,{children:"4D \u3060\u3051\u3067\u306f\u96e3\u3057\u3044\u3053\u3068\u3092\u5b9f\u73fe\u3057\u307e\u3059"}),"\n",(0,s.jsx)(e.li,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u306e\u5f62\u3067\u306e\u307f\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u306f\u901a\u5e38\u8907\u6570\u306e\u30eb\u30fc\u30c1\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u5916\u90e8\u30a8\u30ea\u30a2\u3092\u64cd\u4f5c\u3067\u304d\u3001\u5916\u90e8\u30d7\u30ed\u30bb\u30b9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30eb\u30fc\u30c1\u30f3"})," \u3068\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u8a00\u8a9e (\u901a\u5e38\u306f C \u3042\u308b\u3044\u306f C++) \u3067\u66f8\u304b\u308c\u305f\u30eb\u30fc\u30c1\u30f3\u3067\u3001\u306a\u3093\u3089\u304b\u306e\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5916\u90e8\u30a8\u30ea\u30a2"})," \u3068\u306f\u30d5\u30a9\u30fc\u30e0\u306e\u4e00\u90e8\u3067\u3001\u3042\u3089\u3086\u308b\u3082\u306e\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30e6\u30fc\u30b6\u30fc\u64cd\u4f5c\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5916\u90e8\u30d7\u30ed\u30bb\u30b9"})," \u3068\u306f\u3001\u901a\u5e38\u306f\u30eb\u30fc\u30d7\u5f62\u5f0f\u3067\u5358\u72ec\u5b9f\u884c\u3055\u308c\u308b\u30d7\u30ed\u30bb\u30b9\u306e\u3053\u3068\u3067\u3059\u3002 \u30d7\u30ed\u30bb\u30b9\u306e\u30b3\u30fc\u30c9\u306f\u3059\u3079\u3066\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u5c5e\u3057\u3066\u304a\u308a\u30014D \u306f\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u3066\u30a4\u30d9\u30f3\u30c8\u3092\u9001\u53d7\u4fe1\u3059\u308b\u3060\u3051\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u91cd\u8981\u306a\u6ce8\u8a18",children:"\u91cd\u8981\u306a\u6ce8\u8a18"}),"\n",(0,s.jsxs)(e.p,{children:["\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u3001\u5c0f\u3055\u306a\u51e6\u7406\u3092\u304a\u3053\u306a\u3046\u4e00\u3064\u306e\u30eb\u30fc\u30c1\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3060\u3051\u306e\u3001\u3068\u3066\u3082\u7c21\u5358\u306a\u3082\u306e\u3067\u3042\u308a\u3048\u307e\u3059\u3002\u307e\u305f\u3001\u767e\u4ee5\u4e0a\u306e\u30eb\u30fc\u30c1\u30f3\u3068\u30a8\u30ea\u30a2\u3092\u6271\u3046\u3088\u3046\u306a\u3001\u975e\u5e38\u306b\u8907\u96d1\u306a\u3082\u306e\u3067\u3082\u3042\u308a\u3048\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u6a5f\u80fd\u306b\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u958b\u767a\u306b\u3042\u305f\u3063\u3066\u306f\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u3042\u304f\u307e\u3067\u5f93\u305f\u308b\u30b3\u30fc\u30c9\u3067\u3042\u308b\u3053\u3068\u306b\u7559\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f 4D \u5185\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u72ec\u7acb\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u306a\u304f\u30014D \u306e\u4e00\u90e8\u3067\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u3001\u4ed6\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3084 4D \u81ea\u8eab\u3068 CPU \u6642\u9593\u3068\u30e1\u30e2\u30ea\u3092\u5171\u6709\u3057\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30b3\u30fc\u30c9\u306f\u3001\u5fc5\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u3060\u3051\u3092\u4f7f\u7528\u3059\u308b\u63a7\u3048\u3081\u306a\u30b3\u30fc\u30c9\u3067\u3042\u308b\u3079\u304d\u3067\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u975e\u5e38\u306b\u9577\u3044\u30eb\u30fc\u30d7\u51e6\u7406\u306b\u304a\u3044\u3066\u306f (\u305d\u306e\u91cd\u8981\u6027\u304c\u7d76\u5bfe\u7684\u306a\u512a\u5148\u6a29\u3092\u8981\u6c42\u3057\u306a\u3044\u304b\u304e\u308a)\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306f ",(0,s.jsx)(e.code,{children:"PA_Yield()"})," \u3092\u547c\u3073\u51fa\u3057\u3066\u30014D \u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30e9\u30fc\u306b\u3082\u51e6\u7406\u6642\u9593\u3092\u5272\u308a\u5f53\u3066\u308b\u3079\u304d\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u308a\u65b9",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f5c\u308a\u65b9"}),"\n",(0,s.jsxs)(e.p,{children:["4D \u306f GitHub \u4e0a\u306b\u30014D Plugin API \u3068 the 4D Plugin Wizard \u3092\u542b\u3093\u3060\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e ",(0,s.jsx)(e.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:(0,s.jsx)(e.strong,{children:"\u30d7\u30e9\u30b0\u30a4\u30f3 SDK"})})," (\u82f1\u8a9e) \u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,s.jsx)(e.strong,{children:"4D Plugin API"})})," \u306f C \u3067\u66f8\u304b\u308c\u3066\u304a\u308a\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u958b\u767a\u3092\u52a9\u3051\u308b\u305f\u3081\u306e\u6a5f\u80fd\u3092400\u4ee5\u4e0a\u8ffd\u52a0\u3057\u307e\u3059\u3002 4D Plug-in API \u306e\u6a5f\u80fd\u306f\u30014D \u3068\u30d7\u30e9\u30b0\u30a4\u30f3\u9593\u306e\u901a\u4fe1\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,s.jsx)(e.strong,{children:"4D Plugin Wizard"})})," \u306f\u30014D \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u958b\u767a\u3092\u7c21\u7565\u5316\u3059\u308b\u305f\u3081\u306b\u4e0d\u53ef\u6b20\u306a\u30c4\u30fc\u30eb\u3067\u3059\u3002 \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u30ed\u30fc\u30c9\u3084\u3001\u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u306e\u901a\u4fe1\u306b 4D \u304c\u5fc5\u8981\u3068\u3059\u308b\u30b3\u30fc\u30c9\u304c\u30c4\u30fc\u30eb\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u308b\u3053\u3068\u3067\u3001\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u306f\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u6839\u5e79\u3092\u306a\u3059\u30b3\u30fc\u30c9\u306b\u96c6\u4e2d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5171\u6709",children:"\u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u5171\u6709"}),"\n",(0,s.jsxs)(e.p,{children:["\u958b\u767a\u3057\u305f\u30d7\u30e9\u30b0\u30a4\u30f3\u3092 ",(0,s.jsx)(e.a,{href:"https://github.com/topics/4d-plugin",children:"GitHub"})," \u3067\u516c\u958b\u3057\u30014D\u958b\u767a\u8005\u306e\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u6b63\u3057\u304f\u53c2\u7167\u3055\u308c\u308b\u305f\u3081\u306b\u306f\u3001",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.code,{children:"4d-plugin"})})," \u30c8\u30d4\u30c3\u30af\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"]})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>d});var s=i(296540);const l={},t=s.createContext(l);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);