/*! For license information please see 942f3f00.9a4fdd1f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10175],{502277:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(474848),l=s(28453);const r={id:"client-server-optimization",title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u306e\u6700\u9069\u5316"},i=void 0,c={id:"ORDA/client-server-optimization",title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u306e\u6700\u9069\u5316",description:"4D\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306b\u304a\u3044\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3001\u3042\u308b\u3044\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8aad\u307f\u8fbc\u3080 ORDA\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3064\u3044\u3066\u6700\u9069\u5316\u3059\u308b\u6a5f\u69cb\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u6700\u9069\u5316\u6a5f\u69cb\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u9593\u3067\u3084\u308a\u53d6\u308a\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306e\u91cf\u3092\u5927\u5e45\u306b\u7e2e\u5c0f\u3055\u305b\u308b\u3053\u3068\u3067 4D\u306e\u5b9f\u884c\u901f\u5ea6\u3092\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002 \u3053\u308c\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6a5f\u80fd\u304c\u542b\u307e\u308c\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/ORDA/client-server-optimization.md",sourceDirName:"ORDA",slug:"/ORDA/client-server-optimization",permalink:"/docs/ja/20-R5/ORDA/client-server-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"client-server-optimization",title:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u306e\u6700\u9069\u5316"},sidebar:"docs",previous:{title:"\u6a29\u9650",permalink:"/docs/ja/20-R5/ORDA/privileges"},next:{title:"\u7528\u8a9e\u96c6",permalink:"/docs/ja/20-R5/ORDA/glossary"}},a={},d=[{value:"\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc",id:"\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc",level:2},{value:"\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",id:"\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"context\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",id:"context\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",level:3},{value:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",id:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",level:3},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e8b\u524d\u8a2d\u5b9a",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e8b\u524d\u8a2d\u5b9a",level:3},{value:"ORDA\u30ad\u30e3\u30c3\u30b7\u30e5",id:"orda\u30ad\u30e3\u30c3\u30b7\u30e5",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"4D\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306b\u304a\u3044\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3001\u3042\u308b\u3044\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8aad\u307f\u8fbc\u3080 ORDA\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3064\u3044\u3066\u6700\u9069\u5316\u3059\u308b\u6a5f\u69cb\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u6700\u9069\u5316\u6a5f\u69cb\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u9593\u3067\u3084\u308a\u53d6\u308a\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306e\u91cf\u3092\u5927\u5e45\u306b\u7e2e\u5c0f\u3055\u305b\u308b\u3053\u3068\u3067 4D\u306e\u5b9f\u884c\u901f\u5ea6\u3092\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002 \u3053\u308c\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6a5f\u80fd\u304c\u542b\u307e\u308c\u307e\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"ORDA\u30ad\u30e3\u30c3\u30b7\u30e5"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc",children:"\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u9069\u5316\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b ORDA\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30fc\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["4D\u30ea\u30e2\u30fc\u30c8\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#ds",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ds"})})})," \u3092\u4ecb\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u30b5\u30fc\u30d0\u30fc\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#open-datastore",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Open datastore"})})})," \u3092\u4ecb\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/ORDA/datastores",children:"\u30ea\u30e2\u30fc\u30c8\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"})," (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8REST\u30ea\u30af\u30a8\u30b9\u30c8)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8",children:"\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u3001\u4ee5\u4e0b\u306e\u5b9f\u88c5\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308b\u3068\u30014D \u306f\u30b3\u30fc\u30c9\u5b9f\u884c\u306e\u9014\u4e2d\u3067\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u3069\u306e\u5c5e\u6027\u304c\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u5b9f\u969b\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u81ea\u52d5\u7684\u306b "\u5b66\u7fd2" \u3057\u3001\u305d\u308c\u306b\u5bfe\u5fdc\u3057\u305f "\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8" \u3092\u30d3\u30eb\u30c9\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u4ed8\u968f\u3057\u3001\u4f7f\u7528\u3055\u308c\u305f\u5c5e\u6027\u3092\u4fdd\u5b58\u3057\u3066\u3044\u304d\u307e\u3059\u3002 \u4ed6\u306e\u5c5e\u6027\u304c\u3042\u3068\u3067\u4f7f\u7528\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u81ea\u52d5\u7684\u306b\u60c5\u5831\u3092\u66f4\u65b0\u3057\u3066\u3044\u304d\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u30e1\u30bd\u30c3\u30c9\u3084\u95a2\u6570\u304c\u5b66\u7fd2\u306e\u30c8\u30ea\u30ac\u30fc\u3068\u306a\u308a\u307e\u3059:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#create-entity-selection",children:(0,t.jsx)(n.code,{children:"Create entity selection"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#fromcollection",children:(0,t.jsx)(n.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#all",children:(0,t.jsx)(n.code,{children:"dataClass.all()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#get",children:(0,t.jsx)(n.code,{children:"dataClass.get()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#query",children:(0,t.jsx)(n.code,{children:"dataClass.query()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#query",children:(0,t.jsx)(n.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u540c\u3058\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u305d\u306e\u5f8c\u306b\u9001\u3089\u308c\u305f\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u518d\u5229\u7528\u3057\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u5fc5\u8981\u306a\u5c5e\u6027\u306e\u307f\u3092\u53d6\u5f97\u3057\u3066\u3044\u304f\u3053\u3068\u3067\u3001\u51e6\u7406\u3092\u901f\u304f\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001",(0,t.jsx)(n.a,{href:"#%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%E3%82%BB%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E5%9E%8B%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9",children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u306e\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"})," \u3067\u306f\u3001\u5148\u982d\u884c\u306e\u8868\u793a\u4e2d\u306b\u5b66\u7fd2\u304c\u304a\u3053\u306a\u308f\u308c\u307e\u3059\u3002 \u6b21\u306e\u884c\u304b\u3089\u306f\u3001\u8868\u793a\u304c\u6700\u9069\u5316\u3055\u308c\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u95a2\u6570\u306f\u3001\u30bd\u30fc\u30b9\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u623b\u308a\u5024\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u81ea\u52d5\u7684\u306b\u4ed8\u4e0e\u3057\u307e\u3059:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#and",children:(0,t.jsx)(n.code,{children:"entitySelection.and()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#minus",children:(0,t.jsx)(n.code,{children:"entitySelection.minus()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#or",children:(0,t.jsx)(n.code,{children:"entitySelection.or()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#orderBy",children:(0,t.jsx)(n.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#slice",children:(0,t.jsx)(n.code,{children:"entitySelection.slice()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#drop",children:(0,t.jsx)(n.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u65e2\u5b58\u306e\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u3001\u540c\u3058\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u4ed6\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3042\u308c\u3070\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u5b66\u7fd2\u30d5\u30a7\u30fc\u30ba\u3092\u7701\u7565\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3088\u308a\u901f\u304f\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (\u4ee5\u4e0b\u306e ",(0,t.jsx)(n.a,{href:"#context%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%AE%E4%BD%BF%E7%94%A8",children:"context\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#setremotecontextinfo",children:(0,t.jsx)(n.code,{children:"dataStore.setRemoteContextInfo()"})})," \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u624b\u52d5\u3067\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059 (",(0,t.jsx)(n.a,{href:"#%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%AE%E4%BA%8B%E5%89%8D%E8%A8%AD%E5%AE%9A",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e8b\u524d\u8a2d\u5b9a"})," \u53c2\u7167)\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(783999).A+"",width:"3439",height:"2018"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u4e92\u63db\u6027\u306b\u95a2\u3059\u308b\u6ce8\u610f",type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#open-datastore",children:(0,t.jsx)(n.code,{children:"Open datastore"})})," \u3067\u78ba\u7acb\u3055\u308c\u305f\u63a5\u7d9a\u3067\u6271\u308f\u308c\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u3001\u30e1\u30b8\u30e3\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u5171\u901a\u3059\u308b 4D \u3067\u306e\u307f\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u30014D 20.x \u30ea\u30e2\u30fc\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30014D Server 20.x \u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u307f\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u304c\u3042\u308b\u3068\u304d:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer \u306f Company \u30c6\u30fc\u30d6\u30eb\u3092\u53c2\u7167\u3057\u307e\u3059\n End for each\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u9069\u5316\u6a5f\u69cb\u306e\u304a\u304b\u3052\u3067\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u3001\u30eb\u30fc\u30d7\u306e 2\u56de\u76ee\u306e\u7e70\u308a\u8fd4\u3057\u3088\u308a\u3001",(0,t.jsx)(n.em,{children:"$sel"})," \u306e\u4e2d\u3067\u5b9f\u969b\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5c5e\u6027 (firstname, lastname, employer, employer.name) \u306e\u30c7\u30fc\u30bf\u306e\u307f\u3092\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"context\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528",children:"context\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4f7f\u7528"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"context"}),' \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u6700\u9069\u5316\u306e\u5229\u70b9\u3092\u3055\u3089\u306b\u5897\u5e45\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u3042\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u7528\u306b "\u5b66\u7fd2\u3057\u305f" \u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u53c2\u7167\u3057\u307e\u3059\u3002 \u3053\u308c\u3092\u65b0\u3057\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3059 ORDA\u95a2\u6570\u306b\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u3067\u3001\u305d\u306e\u8fd4\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u306f\u5b66\u7fd2\u30d5\u30a7\u30fc\u30ba\u3092\u6700\u521d\u304b\u3089\u7701\u7565\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u5c5e\u6027\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002']}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#setremotecontextinfo",children:(0,t.jsx)(n.code,{children:".setRemoteContextInfo()"})})," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u6271\u3046\u3059\u3079\u3066\u306e ORDA\u95a2\u6570\u306f\u3001",(0,t.jsx)(n.strong,{"x-id":"1",children:"context"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059 (\u305f\u3068\u3048\u3070 ",(0,t.jsx)(n.a,{href:"../API/DataClassClass.md#query",children:(0,t.jsx)(n.code,{children:"dataClass.query( )"})})," \u3042\u308b\u3044\u306f ",(0,t.jsx)(n.a,{href:"../API/DataClassClass.md#all",children:(0,t.jsx)(n.code,{children:"dataClass.all( )"})})," \u306a\u3069)\u3002 \u540c\u3058\u6700\u9069\u5316 context \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u540c\u3058\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u3067\u3042\u308c\u3070\u3069\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u3082\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001 \u30b3\u30fc\u30c9\u306e\u4ed6\u306e\u90e8\u5206\u3067\u65b0\u3057\u3044\u5c5e\u6027\u304c\u4f7f\u7528\u3055\u308c\u305f\u969b\u306b\u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u308b\u3068\u3044\u3046\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u540c\u3058\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u7570\u306a\u308b\u30b3\u30fc\u30c9\u3067\u518d\u5229\u7528\u3057\u3059\u304e\u308b\u3068\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u8aad\u307f\u8fbc\u307f\u904e\u304e\u3066\u3001\u7d50\u679c\u3068\u3057\u3066\u52b9\u7387\u304c\u843d\u3061\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u540c\u69d8\u306e\u6a5f\u69cb\u306f\u8aad\u307f\u8fbc\u307e\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u3082\u5b9f\u88c5\u3055\u308c\u3066\u304a\u308a\u3001\u305d\u308c\u306b\u3088\u3063\u3066\u4f7f\u7528\u3057\u305f\u5c5e\u6027\u306e\u307f\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059 (",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#get",children:(0,t.jsx)(n.code,{children:"dataClass.get( )"})})," \u95a2\u6570\u53c2\u7167)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"dataClass.query( )"})," \u3092\u4f7f\u7528\u3057\u305f\u4f8b:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // extractData \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u6700\u9069\u5316\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u3001\n // \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 "shortList" \u306b\u7d10\u3065\u3051\u3089\u308c\u307e\u3059\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // extractData \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u6700\u9069\u5316\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u3001\n // \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 "shortList" \u306b\u7d10\u3065\u3051\u3089\u308c\u307e\u3059\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // extractDetailedData \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u6700\u9069\u5316\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u3001\n // \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 "longList" \u306b\u7d10\u3065\u3051\u3089\u308c\u307e\u3059\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // extractDetailedData \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u6700\u9069\u5316\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u3001\n // \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 "longList" \u306b\u7d10\u3065\u3051\u3089\u308c\u307e\u3059\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9",children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"}),"\n",(0,t.jsx)(n.p,{children:"4D \u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306b\u304a\u3044\u3066\u306f\u3001\u305d\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u307e\u305f\u306f\u30b9\u30af\u30ed\u30fc\u30eb\u3059\u308b\u969b\u306b\u3001\u6700\u9069\u5316\u304c\u81ea\u52d5\u7684\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5c5e\u6027\u306e\u307f\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u307e\u305f\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e ",(0,t.jsx)(n.strong,{children:"\u30ab\u30ec\u30f3\u30c8\u306e\u9805\u76ee"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u5f0f (",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/FormObjects/listboxOverview#%E3%83%AA%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AE%E5%9E%8B",children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3/\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u578b\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9"}),' \u53c2\u7167) \u3092\u4ecb\u3057\u3066\u30ab\u30ec\u30f3\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u5c02\u7528\u306e "\u30da\u30fc\u30b8\u30e2\u30fc\u30c9" \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u3063\u3066\u3001"\u30da\u30fc\u30b8" \u304c\u8ffd\u52a0\u5c5e\u6027\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066\u3082\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u30aa\u30fc\u30d0\u30fc\u30ed\u30fc\u30c9\u304c\u907f\u3051\u3089\u308c\u307e\u3059\u3002 \u306a\u304a\u3001\u30da\u30fc\u30b8\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u751f\u6210/\u4f7f\u7528\u306f ',(0,t.jsx)(n.strong,{children:"\u30ab\u30ec\u30f3\u30c8\u306e\u9805\u76ee"})," \u5f0f\u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u306b\u9650\u308a\u307e\u3059 (\u305f\u3068\u3048\u3070\u3001",(0,t.jsx)(n.code,{children:"entitySelection[index]"})," \u3092\u4ecb\u3057\u3066\u540c\u3058\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u305f\u5834\u5408\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u5909\u5316\u3057\u307e\u3059)\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u305d\u306e\u5f8c\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8d70\u67fb\u3059\u308b\u95a2\u6570\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3082\u3001\u540c\u3058\u6700\u9069\u5316\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u95a2\u6570\u306f\u3001\u30bd\u30fc\u30b9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u3001\u623b\u308a\u5024\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u81ea\u52d5\u7684\u306b\u4ed8\u4e0e\u3057\u307e\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntityClass#next",children:(0,t.jsx)(n.code,{children:"entity.next()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntityClass#first",children:(0,t.jsx)(n.code,{children:"entity.first()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntityClass#last",children:(0,t.jsx)(n.code,{children:"entity.last()"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntityClass#previous",children:(0,t.jsx)(n.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u305f\u3068\u3048\u3070\u3001\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u9078\u629e\u3057\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ed\u30fc\u30c9\u3057\u3001\u6240\u5c5e\u3057\u3066\u3044\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30bb\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8d70\u67fb\u3057\u307e\u3059\u3002 \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u72ec\u81ea\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u30ed\u30fc\u30c9\u3055\u308c\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u5f71\u97ff\u3055\u308c\u307e\u305b\u3093:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" $myEntity:=Form.currentElement // \u30ab\u30ec\u30f3\u30c8\u9805\u76ee\u306e\u5f0f\n  //... \u306a\u3093\u3089\u304b\u306e\u51e6\u7406\n $myEntity:=$myEntity.next() // \u6b21\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3082\u540c\u3058\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e8b\u524d\u8a2d\u5b9a",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306e\u4e8b\u524d\u8a2d\u5b9a"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u9ad8\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5f97\u308b\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a5f\u80fd\u307e\u305f\u306f\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3054\u3068\u306b\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u3042\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u9867\u5ba2\u306b\u95a2\u3059\u308b\u30af\u30a8\u30ea\u306b\u3001\u5225\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u5546\u54c1\u306b\u95a2\u3059\u308b\u30af\u30a8\u30ea\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u9ad8\u30ec\u30d9\u30eb\u306b\u6700\u9069\u5316\u3055\u308c\u305f\u6700\u7d42\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u305f\u3044\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4e8b\u524d\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001\u5b66\u7fd2\u30d5\u30a7\u30fc\u30ba\u3092\u7701\u7565\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3001\u81ea\u52d5\u5b66\u7fd2\u30e1\u30ab\u30cb\u30ba\u30e0\u306b\u6700\u9069\u5316\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4f5c\u6210\u3055\u305b\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#getremotecontextinfo",children:(0,t.jsx)(n.code,{children:"dataStore.getRemoteContextInfo()"})})," \u307e\u305f\u306f ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#getallremotecontexts",children:(0,t.jsx)(n.code,{children:"dataStore.getAllRemoteContexts()"})})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u53ce\u96c6\u3057\u307e\u3059\u3002 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntitySelectionClass#getremotecontextattributes",children:(0,t.jsx)(n.code,{children:"entitySelection.getRemoteContextAttributes()"})})," \u3068 ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/EntityClass#getremotecontextattributes",children:(0,t.jsx)(n.code,{children:"entity.getRemoteContextAttributes()"})})," \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u304c\u3069\u306e\u3088\u3046\u306b\u5c5e\u6027\u3092\u4f7f\u7528\u3059\u308b\u304b\u3092\u5206\u6790\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6700\u5f8c\u306b\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8d77\u52d5\u6642\u306b ",(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataStoreClass#setremotecontextinfo",children:(0,t.jsx)(n.code,{children:"dataStore.setRemoteContextInfo()"})})," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u69cb\u7bc9\u3057\u3001",(0,t.jsx)(n.a,{href:"#context%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%AE%E5%86%8D%E5%88%A9%E7%94%A8",children:"\u3053\u308c\u3089\u3092\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u4f7f\u7528\u3057\u307e\u3059"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"orda\u30ad\u30e3\u30c3\u30b7\u30e5",children:"ORDA\u30ad\u30e3\u30c3\u30b7\u30e5"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u9069\u5316\u306e\u305f\u3081\u3001ORDA\u7d4c\u7531\u3067\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u305f\u30c7\u30fc\u30bf\u306f\u3001(4D\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u306f\u7570\u306a\u308b) ORDA\u30ea\u30e2\u30fc\u30c8\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002 ORDA\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u30c7\u30fc\u30bf\u30af\u30e9\u30b9\u3054\u3068\u306b\u69cb\u6210\u3055\u308c\u300130\u79d2\u5f8c\u306b\u5931\u52b9\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306f\u3001\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306b\u9054\u3059\u308b\u3068\u671f\u9650\u5207\u308c\u3068\u307f\u306a\u3055\u308c\u307e\u3059\u3002 \u671f\u9650\u5207\u308c\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002 \u671f\u9650\u5207\u308c\u30c7\u30fc\u30bf\u306f\u3001\u30b9\u30da\u30fc\u30b9\u304c\u5fc5\u8981\u306b\u306a\u308b\u307e\u3067\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u6b8b\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001ORDA\u30ad\u30e3\u30c3\u30b7\u30e5\u306f 4D \u306b\u3088\u3063\u3066\u900f\u904e\u7684\u306b\u51e6\u7406\u3055\u308c\u307e\u3059\u3002 \u3057\u304b\u3057\u3001\u4ee5\u4e0b\u306e ORDA\u30af\u30e9\u30b9\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u305d\u306e\u5185\u5bb9\u3092\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/ja/20-R5/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var t=s(296540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,r={},d=null,o=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:l,type:e,key:d,ref:o,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},783999:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(296540);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);