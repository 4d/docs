/*! For license information please see 4e017f52.9b1703f5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5589],{882204:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(474848),d=s(28453);const c={id:"variables",title:"\u5909\u6570"},l=void 0,i={id:"Concepts/variables",title:"\u5909\u6570",description:"4D \u306e\u30c7\u30fc\u30bf\u306f\u3001\u6839\u672c\u7684\u306b\u7570\u306a\u3063\u3066\u3044\u308b 2\u3064\u306e\u65b9\u6cd5\u3067\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002 \u30d5\u30a3\u30fc\u30eb\u30c9 \u306f\u30c7\u30a3\u30b9\u30af\u306b\u6c38\u7d9a\u7684\u306b\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u306e\u306b\u5bfe\u3057\u3001\u5909\u6570 \u306f\u30e1\u30e2\u30ea\u4e0a\u306b\u4e00\u6642\u7684\u306b\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R5/Concepts/variables.md",sourceDirName:"Concepts",slug:"/Concepts/variables",permalink:"/docs/ja/20-R5/Concepts/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fvariables.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"variables",title:"\u5909\u6570"},sidebar:"docs",previous:{title:"\u30d0\u30ea\u30a2\u30f3\u30c8",permalink:"/docs/ja/20-R5/Concepts/variant"},next:{title:"\u914d\u5217",permalink:"/docs/ja/20-R5/Concepts/arrays"}},t={},a=[{value:"\u5909\u6570\u306e\u5ba3\u8a00",id:"\u5909\u6570\u306e\u5ba3\u8a00",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:3},{value:"\u5ba3\u8a00\u3068\u540c\u6642\u306b\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b",id:"\u5ba3\u8a00\u3068\u540c\u6642\u306b\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b",level:2},{value:"\u5909\u6570\u3078\u306e\u4ee3\u5165",id:"\u5909\u6570\u3078\u306e\u4ee3\u5165",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u3001\u30d7\u30ed\u30bb\u30b9\u3001\u304a\u3088\u3073\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570",id:"\u30ed\u30fc\u30ab\u30eb\u30d7\u30ed\u30bb\u30b9\u304a\u3088\u3073\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570",id:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570",level:3},{value:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570",id:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570",level:3},{value:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570",id:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["4D \u306e\u30c7\u30fc\u30bf\u306f\u3001\u6839\u672c\u7684\u306b\u7570\u306a\u3063\u3066\u3044\u308b 2\u3064\u306e\u65b9\u6cd5\u3067\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002 ",(0,r.jsx)(n.strong,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"})," \u306f\u30c7\u30a3\u30b9\u30af\u306b\u6c38\u7d9a\u7684\u306b\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u306e\u306b\u5bfe\u3057\u3001",(0,r.jsx)(n.strong,{children:"\u5909\u6570"})," \u306f\u30e1\u30e2\u30ea\u4e0a\u306b\u4e00\u6642\u7684\u306b\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u306f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u540d\u524d\u3068\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u540c\u69d8\u306b\u3001\u5909\u6570\u306b\u3082\u540d\u524d\u3068 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/data-types",children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7"})," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3044\u3063\u305f\u3093\u4f5c\u6210\u3055\u308c\u305f\u5909\u6570\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5fc5\u8981\u3068\u3055\u308c\u308b\u5834\u6240\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30c6\u30ad\u30b9\u30c8\u5909\u6570\u3092\u540c\u3058\u30bf\u30a4\u30d7\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u683c\u7d0d\u3059\u308b\u306b\u306f\u6b21\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" [MyTable]MyField:=MyText\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u306f\u30e9\u30f3\u30b2\u30fc\u30b8\u306e\u8981\u7d20\u3067\u3059\u3002\u753b\u9762\u4e0a\u306b\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u306e\u306a\u3044\u3001\u88cf\u65b9\u306b\u5fb9\u3057\u305f\u5909\u6570\u3092\u4f5c\u6210\u30fb\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3082\u3061\u308d\u3093\u3001\u30d5\u30a9\u30fc\u30e0\u4e0a\u306b\u5909\u6570\u306e\u5024\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059 (\u30dd\u30a4\u30f3\u30bf\u30fc\u3084BLOB\u3092\u9664\u304f)\u3002\u307e\u305f\u3001\u5909\u6570\u306b\u5024\u3092\u5165\u529b\u3057\u305f\u308a\u3001\u5909\u6570\u306e\u5024\u3092\u30ec\u30dd\u30fc\u30c8\u306b\u5370\u5237\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002 \u3053\u306e\u3068\u304d\u3001\u5165\u529b\u53ef\u3084\u5165\u529b\u4e0d\u53ef\u306e\u5909\u6570\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u540c\u69d8\u306b\u632f\u821e\u3044\u3001\u63d0\u4f9b\u3055\u308c\u308b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3082\u985e\u4f3c\u3057\u3066\u3044\u307e\u3059\u3002 \u30d5\u30a9\u30fc\u30e0\u4e0a\u306e\u30dc\u30bf\u30f3\u3001\u30ea\u30b9\u30c8\u30dc\u30c3\u30af\u30b9\u3001\u30b9\u30af\u30ed\u30fc\u30eb\u30a8\u30ea\u30a2\u3001\u30d4\u30af\u30c1\u30e3\u30fc\u30dc\u30bf\u30f3\u306a\u3069\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3082\u5909\u6570\u3092\u4f7f\u3063\u3066\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u307b\u304b\u3001\u4fdd\u5b58\u4e0d\u8981\u306a\u8a08\u7b97\u7d50\u679c\u3092\u8868\u793a\u3055\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5909\u6570\u306e\u5ba3\u8a00",children:"\u5909\u6570\u306e\u5ba3\u8a00"}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u306e\u4f5c\u6210\u306f\u901a\u5e38\u3001\u5ba3\u8a00\u306b\u3088\u3063\u3066\u304a\u3053\u306a\u3044\u307e\u3059\u3002 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u3067\u306f\u3001\u5909\u6570\u306e\u5ba3\u8a00\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"var"})," \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u3063\u305f\u5ba3\u8a00 (\u63a8\u5968\u3001\u3068\u304f\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3084\u30af\u30e9\u30b9\u3092\u30b3\u30fc\u30c9\u3067\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306b\u3088\u308a\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u63d0\u6848\u3084\u81ea\u52d5\u88dc\u5b8c\u6a5f\u80fd\u304c\u5f37\u5316\u3055\u308c\u307e\u3059)"]}),"\n",(0,r.jsx)(n.li,{children:'"\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc" \u3084 "\u914d\u5217" \u30c6\u30fc\u30de\u306e 4D \u30e9\u30f3\u30b2\u30fc\u30b8\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u305f\u5ba3\u8a00 (\u65e7\u30b7\u30f3\u30bf\u30c3\u30af\u30b9)\u3002'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5909\u6570\u306f\u5ba3\u8a00\u3055\u308c\u308b\u3068\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/data-types#%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E5%80%A4",children:(0,r.jsx)(n.strong,{children:"\u305d\u306e\u578b\u306b\u5bfe\u5fdc\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u5024"})})," \u306b\u521d\u671f\u5316\u3055\u308c\u307e\u3059\u3002\u5225\u306e\u5024\u304c ",(0,r.jsx)(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%B8%E3%81%AE%E4%BB%A3%E5%85%A5",children:"\u4ee3\u5165"})," \u3055\u308c\u306a\u3044\u9650\u308a\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u4e2d\u306f\u3053\u306e\u5024\u304c\u4fdd\u6301\u3055\u308c\u307e\u3059\u3002 \u3042\u308b\u3044\u306f\u3001\u5909\u6570\u3092\u5ba3\u8a00\u3059\u308b\u3068\u304d\u306b\u3001\u30c7\u30fc\u30bf\u578b\u3068\u5024\u30921\u884c\u3067 ",(0,r.jsx)(n.a,{href:"#%E5%AE%A3%E8%A8%80%E3%81%A8%E5%90%8C%E6%99%82%E3%81%AB%E5%A4%89%E6%95%B0%E3%82%92%E5%88%9D%E6%9C%9F%E5%8C%96%E3%81%99%E3%82%8B",children:"\u521d\u671f\u5316"})," \u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:'\u3053\u306e\u65b9\u6cd5\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u304c\u3001\u305f\u3060 "\u4f7f\u7528\u3059\u308b" \u3053\u3068\u306b\u3088\u3063\u3066\u5909\u6570\u3092\u5ba3\u8a00\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u6b63\u5f0f\u306b\u305d\u308c\u3089\u3092\u5ba3\u8a00\u3059\u308b\u3053\u3068\u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u305f\u3068\u3048\u3070\u3001\u4eca\u65e5\u306e\u65e5\u4ed8\u306b30\u65e5\u8db3\u3057\u305f\u5024\u3092\u683c\u7d0d\u3057\u305f\u5909\u6570\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059:'}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" MyDate:=Current date+30 //  MyDate\u3092\u4f5c\u6210\u3057\u307e\u3059\n // \u3053\u308c\u306f\u65e5\u4ed8\u578b\u306e\u5909\u6570\u3067\u3042\u308b\u3068 4D \u306f\u63a8\u6e2c\u3057\u307e\u3059 \n // 30\u65e5\u5f8c\u306e\u65e5\u4ed8\u304c\u4ee3\u5165\u3055\u308c\u307e\u3059\n"})}),(0,r.jsx)(n.p,{children:"\u5ba3\u8a00\u524d\u306b\u5909\u6570\u304c\u4f5c\u6210\u3055\u308c\u305f\u5834\u5408\u3001\u5ba3\u8a00\u306b\u3088\u308b\u521d\u671f\u5316\u306f\u304a\u3053\u306a\u308f\u308c\u307e\u305b\u3093\u3002"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u3092\u5ba3\u8a00\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3092\u7528\u3044\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"var <varName>{; <varName2>;...}{ : <varType>}"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $myText : Text  // \u30c6\u30ad\u30b9\u30c8\u5909\u6570\nvar myDate1; myDate2 : Date  // \u8907\u6570\u306e\u65e5\u4ed8\u5909\u6570\nvar $myFile : 4D.File  // File \u30af\u30e9\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5909\u6570\nvar $myVar // \u30d0\u30ea\u30a2\u30f3\u30c8\u578b\u5909\u6570\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"varName"})," \u306b\u6307\u5b9a\u3059\u308b\u5909\u6570\u540d\u306f 4D\u306e ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/identifiers",children:"\u8b58\u5225\u5b50\u306e\u547d\u540d\u898f\u5247"})," \u306b\u5f93\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306f ",(0,r.jsx)(n.a,{href:"#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E5%A4%89%E6%95%B0%E3%81%A8%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E5%A4%89%E6%95%B0",children:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u3068\u30d7\u30ed\u30bb\u30b9\u5909\u6570"})," \u306e\u5ba3\u8a00\u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"#%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E5%A4%89%E6%95%B0",children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570"})," \u304a\u3088\u3073 ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/arrays",children:"\u914d\u5217"})," \u306b\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"varType"})," \u306b\u306f\u6b21\u304c\u6307\u5b9a\u3067\u304d\u307e\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/data-types",children:"\u57fa\u672c\u306e\u30c7\u30fc\u30bf\u578b"}),": \u5909\u6570\u306b\u306f\u3001\u5ba3\u8a00\u3055\u308c\u305f\u578b\u306e\u5024\u304c\u683c\u7d0d\u3055\u308c\u307e\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/classes",children:"\u30af\u30e9\u30b9\u53c2\u7167"})," (4D\u30af\u30e9\u30b9\u307e\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u30af\u30e9\u30b9): \u5909\u6570\u306b\u306f\u3001\u5b9a\u7fa9\u3055\u308c\u305f\u30af\u30e9\u30b9\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u53c2\u7167\u304c\u683c\u7d0d\u3055\u308c\u307e\u3059"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"varType"})," \u3092\u7701\u7565\u3059\u308b\u3068\u3001",(0,r.jsx)(n.strong,{children:"variant"})," \u578b\u306e\u5909\u6570\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b ",(0,r.jsx)(n.code,{children:"varType"})," \u5024\u306e\u4e00\u89a7\u3067\u3059:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"varType"}),(0,r.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Text"})}),(0,r.jsx)(n.td,{children:"\u30c6\u30ad\u30b9\u30c8\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Date"})}),(0,r.jsx)(n.td,{children:"\u65e5\u4ed8\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Time"})}),(0,r.jsx)(n.td,{children:"\u6642\u9593\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:"\u30d6\u30fc\u30eb\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:"\u500d\u9577\u6574\u6570\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Real"})}),(0,r.jsx)(n.td,{children:"\u5b9f\u6570\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Pointer"})}),(0,r.jsx)(n.td,{children:"\u30dd\u30a4\u30f3\u30bf\u30fc\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Picture"})}),(0,r.jsx)(n.td,{children:"\u30d4\u30af\u30c1\u30e3\u30fc\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Blob"})}),(0,r.jsx)(n.td,{children:"\u30b9\u30ab\u30e9\u30fcBLOB\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Collection"})}),(0,r.jsx)(n.td,{children:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Variant"})}),(0,r.jsx)(n.td,{children:"\u30d0\u30ea\u30a2\u30f3\u30c8\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Object"})}),(0,r.jsx)(n.td,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30af\u30e9\u30b9 (4D.Object) \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"4D.<className>"})}),(0,r.jsx)(n.td,{children:"4D\u30af\u30e9\u30b9\u540d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cs.<className>"})}),(0,r.jsx)(n.td,{children:"\u30e6\u30fc\u30b6\u30fc\u30af\u30e9\u30b9\u540d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cs.<namespace><className>"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"<namespace>"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30af\u30e9\u30b9\u540d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u57fa\u672c\u306e\u30c7\u30fc\u30bf\u578b\u306e\u3001\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u304a\u3088\u3073\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306e\u5ba3\u8a00:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $myText; myText; $vt : Text\nvar myVar //variant\n\nvar $o : Object    \n// \u6b21\u3068\u540c\u7fa9\u3067\u3059:\nvar $o : 4D.Object\n// C_OBJECT($o) \u3068\u3082\u540c\u7fa9\u3067\u3059\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"4D\u30af\u30e9\u30b9\u578b\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5909\u6570\u306e\u5ba3\u8a00:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $myFolder : 4D.Folder\nvar $myFile : 4D.File\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30af\u30e9\u30b9\u578b\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5909\u6570\u306e\u5ba3\u8a00:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $myClass : cs.MyClass\nvar $dataclass : cs.Employee\nvar $entity : cs.EmployeeEntity\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5ba3\u8a00\u3068\u540c\u6642\u306b\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b",children:"\u5ba3\u8a00\u3068\u540c\u6642\u306b\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u3092\u5ba3\u8a00\u3059\u308b\u969b\u306b\u306f\u30011\u3064\u306e\u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3067\u30c7\u30fc\u30bf\u578b\u3068\u521d\u671f\u5024\u306e\u4e21\u65b9\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u6b21\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $a : Text:="hello"\nvar $b : Date:=!2023-09-12!\nvar $c : Object:=New object()\nvar $d : cs.Customer:=cs.Customer.new()\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5909\u6570\u306f\u3001\u30c7\u30fc\u30bf\u578b\u3092\u660e\u793a\u7684\u306b\u6307\u5b9a\u305b\u305a\u306b\u5ba3\u8a00\u304a\u3088\u3073\u521d\u671f\u5316\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u3001\u5909\u6570\u306e\u578b\u306f 4D \u306b\u3088\u3063\u3066\u63a8\u8ad6\u3055\u308c\u307e\u3059\u3002 \u6b21\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $text:="hello"  // \u30c6\u30ad\u30b9\u30c8\u3068\u63a8\u8ad6\u3055\u308c\u307e\u3059\nvar $number:=20  // \u5b9f\u6570\u3068\u63a8\u8ad6\u3055\u308c\u307e\u3059\nvar $obj:={}  // \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u63a8\u8ad6\u3055\u308c\u307e\u3059\nvar $mycol:=[]  // \u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3068\u63a8\u8ad6\u3055\u308c\u307e\u3059\n\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["\u5024\u306e\u8a55\u4fa1\u304c\u3042\u3044\u307e\u3044\u3067\u3042\u308b\u5834\u5408\u3001\u63a8\u8ad6\u3055\u308c\u308b\u578b\u306f ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/interpreted-compiled",children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30e2\u30fc\u30c9"})," \u3067\u7570\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u306b\u3088\u3063\u3066\u8b66\u544a\u304c\u751f\u6210\u3055\u308c\u3001\u30d0\u30ea\u30a2\u30f3\u30c8\u578b\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u6b21\u306e $a \u306e\u578b\u306f\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3067\u306f\u6b63\u3057\u304f\u30c6\u30ad\u30b9\u30c8\u578b\u3068\u63a8\u8ad6\u3055\u308c\u307e\u3059\u304c\u3001\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u30c1\u30a7\u30c3\u30af\u3092\u5b9f\u884c\u3059\u308b\u3068\u8b66\u544a\u304c\u751f\u6210\u3055\u308c\u3001$a \u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30e2\u30fc\u30c9\u3067\u30d0\u30ea\u30a2\u30f3\u30c8\u3068\u3057\u3066\u578b\u4ed8\u3051\u3055\u308c\u307e\u3059\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $class:={test: "a"}\nvar $a:=$class.test\n\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["4D \u306f\u6700\u3082\u4e00\u822c\u7684\u306a\u30bf\u30a4\u30d7\u3092\u63a8\u8ad6\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u5909\u6570\u304c\u6574\u6570\u5024\u3067\u521d\u671f\u5316\u3055\u308c\u308b\u5834\u5408\u3001\u6574\u6570\u578b\u3067\u306f\u306a\u304f\u5b9f\u6570\u578b\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059 (\u4f8b: ",(0,r.jsx)(n.code,{children:"var $a:=10 //\u5b9f\u6570\u578b\u304c\u63a8\u8ad6\u3055\u308c\u307e\u3059"}),")\u3002 \u3053\u306e\u3088\u3046\u306a\u5834\u5408\u3084\u3001\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u306a\u3069\u8907\u96d1\u306a\u578b\u3092\u6301\u3064\u5909\u6570\u3092\u521d\u671f\u5316\u3059\u308b\u5834\u5408\u306f\u3001\u660e\u793a\u7684\u306b\u578b\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u5909\u6570\u306e\u578b\u306f\u81ea\u52d5\u7684\u306b\u6c7a\u307e\u308a\u307e\u3059\u3002 \u4f8b\u5916\u306f\u3001\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u3084\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306b\u5024\u3092\u4ee3\u5165\u3057\u305f\u5834\u5408\u3067\u3001\u305d\u306e\u5834\u5408\u306f\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"\u8907\u6570\u540c\u6642\u306e\u4ee3\u5165\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"var $a; $b : Integer:=15 //\u30a8\u30e9\u30fc\n\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5909\u6570\u3078\u306e\u4ee3\u5165",children:"\u5909\u6570\u3078\u306e\u4ee3\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u5909\u6570\u3092\u5bfe\u8c61\u306b\u3001\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3057\u305f\u308a\u3001\u683c\u7d0d\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5225\u306e\u5bfe\u8c61\u306b\u30b3\u30d4\u30fc\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5909\u6570\u306b\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3059\u308b\u3053\u3068\u3092\u3001",(0,r.jsx)(n.strong,{children:"\u5909\u6570\u306b\u30c7\u30fc\u30bf\u3092\u4ee3\u5165\u3059\u308b"})," \u3068\u8a00\u3044\u3001\u4ee3\u5165\u6f14\u7b97\u5b50 (:=) \u3092\u4f7f\u3063\u3066\u304a\u3053\u306a\u3044\u307e\u3059\u3002 \u4ee3\u5165\u6f14\u7b97\u5b50\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5bfe\u3057\u3066\u30c7\u30fc\u30bf\u3092\u4ee3\u5165\u3059\u308b\u5834\u5408\u306b\u3082\u4f7f\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u5165\u6f14\u7b97\u5b50\u306f\u3001\u5909\u6570\u3092\u4f5c\u6210\u3057\u3001\u5909\u6570\u306b\u30c7\u30fc\u30bf\u3092\u4ee3\u5165\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u4f5c\u6210\u3059\u308b\u5909\u6570\u540d\u3092\u4ee3\u5165\u6f14\u7b97\u5b50\u306e\u5de6\u5074\u306b\u66f8\u304d\u307e\u3059\u3002 \u4f8b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"MyNumber:=3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u306f\u5909\u6570 ",(0,r.jsx)(n.em,{children:"MyNumber"})," \u3092\u4f5c\u6210\u3057\u3001\u6570\u5024 3\u3092\u4ee3\u5165\u3057\u307e\u3059\u3002 MyNumber \u304c\u65e2\u306b\u5b58\u5728\u3057\u3066\u3044\u308c\u3070\u3001\u305d\u3053\u306b\u6570\u5024 3\u304c\u4ee3\u5165\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#%E5%A4%89%E6%95%B0%E3%81%AE%E5%AE%A3%E8%A8%80",children:"\u30c7\u30fc\u30bf\u578b\u306e\u5ba3\u8a00"})," \u3092\u305b\u305a\u306b\u5909\u6570\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u901a\u5e38\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3082\u3061\u308d\u3093\u3001\u5909\u6570\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u306a\u3051\u308c\u3070\u3001\u4fbf\u5229\u3068\u306f\u3044\u3048\u307e\u305b\u3093\u3002 \u518d\u5ea6\u4ee3\u5165\u6f14\u7b97\u5b50\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 [Products]Size \u3068\u3044\u3046\u30d5\u30a3\u30fc\u30eb\u30c9\u306b ",(0,r.jsx)(n.em,{children:"MyNumber"})," \u5909\u6570\u306e\u5024\u3092\u4ee3\u5165\u3059\u308b\u306b\u306f\u3001\u4ee3\u5165\u6f14\u7b97\u5b50\u306e\u53f3\u5074\u306b MyNumber \u3092\u66f8\u304d\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"[Products]Size:=MyNumber\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u3067\u3001",(0,r.jsx)(n.em,{children:"[Products]Size"})," \u306e\u5024\u306f 3 \u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u4f8b\u306f\u3068\u3066\u3082\u5358\u7d14\u3067\u3059\u304c\u3001\u3042\u308b\u5834\u6240\u304b\u3089\u5225\u306e\u5834\u6240\u3078\u30e9\u30f3\u30b2\u30fc\u30b8\u306b\u3088\u3063\u3066\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3055\u305b\u308b\u57fa\u672c\u7684\u306a\u624b\u9806\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u5217\u8981\u7d20\u306b\u30c7\u30fc\u30bf\u3092\u4ee3\u5165\u3059\u308b\u306b\u306f\u4e2d\u30ab\u30c3\u30b3 ({...}) \u3092\u4f7f\u7528\u3057\u307e\u3059:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'atNames{1}:="Richard"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30ed\u30fc\u30ab\u30eb\u30d7\u30ed\u30bb\u30b9\u304a\u3088\u3073\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570",children:"\u30ed\u30fc\u30ab\u30eb\u3001\u30d7\u30ed\u30bb\u30b9\u3001\u304a\u3088\u3073\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u30ed\u30fc\u30ab\u30eb"}),"\u3001",(0,r.jsx)(n.strong,{children:"\u30d7\u30ed\u30bb\u30b9"}),"\u3001\u304a\u3088\u3073 ",(0,r.jsx)(n.strong,{children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9"})," \u3068\u3044\u3046\u30013\u7a2e\u985e\u306e\u5909\u6570\u306e\u5909\u6570\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u5909\u6570\u306e\u9055\u3044\u306f\u4f7f\u7528\u3067\u304d\u308b\u30b9\u30b3\u30fc\u30d7\u306b\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001\u305d\u308c\u3089\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3082\u7570\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570",children:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306f\u305d\u306e\u540d\u306e\u3068\u304a\u308a\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30ed\u30fc\u30ab\u30eb\u3067\u3042\u308a\u3001\u5909\u6570\u304c\u4f5c\u6210\u3055\u308c\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u7bc4\u56f2\u5185\u3067\u306e\u307f\u4f7f\u7528\u53ef\u80fd\u3067\u3001\u305d\u306e\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u306f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002 \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u30ed\u30fc\u30ab\u30eb\u3067\u3042\u308b\u3068\u3044\u3046\u306e\u306f\u3001\u6b63\u5f0f\u306b\u306f\u300c\u30b9\u30b3\u30fc\u30d7\u304c\u30ed\u30fc\u30ab\u30eb\u3067\u3042\u308b\u300d\u3068\u3044\u3044\u307e\u3059\u3002 \u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306f\u3001\u305d\u306e\u4f7f\u7528\u7bc4\u56f2\u3092\u30e1\u30bd\u30c3\u30c9\u5185\u306b\u9650\u5b9a\u3059\u308b\u305f\u3081\u306b\u7528\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u76ee\u7684\u306e\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ed6\u306e\u5909\u6570\u540d\u3068\u306e\u91cd\u8907\u3092\u907f\u3051\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30c7\u30fc\u30bf\u3092\u4e00\u6642\u7684\u306b\u4f7f\u7528\u3059\u308b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306e\u6570\u3092\u6e1b\u3089\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306e\u540d\u524d\u306f\u5fc5\u305a\u30c9\u30eb\u8a18\u53f7 ($) \u3067\u59cb\u3081\u3001\u3053\u306e\u8a18\u53f7\u3092\u9664\u304f31\u6587\u5b57\u307e\u3067\u306e\u6587\u5b57\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3088\u308a\u9577\u3044\u540d\u524d\u3092\u6307\u5b9a\u3059\u308b\u3068\u30014D \u306f\u4f59\u5206\u306e32\u6587\u5b57\u4ee5\u964d\u3092\u5207\u308a\u6368\u3066\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u591a\u304f\u306e\u30e1\u30bd\u30c3\u30c9\u3084\u5909\u6570\u3092\u6301\u3064\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f5c\u696d\u3059\u308b\u5834\u5408\u3001\u73fe\u5728\u4f5c\u696d\u3057\u3066\u3044\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u7bc4\u56f2\u5185\u3067\u4e00\u6642\u7684\u306b\u5909\u6570\u304c\u5fc5\u8981\u3068\u306a\u308b\u5834\u5408\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u5834\u5408\u3001\u540c\u3058\u5909\u6570\u540d\u304c\u4ed6\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u3069\u3046\u304b\u3092\u6c17\u306b\u3059\u308b\u3053\u3068\u306a\u304f\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3057\u3070\u3057\u3070\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u5c11\u91cf\u306e\u30c7\u30fc\u30bf\u5165\u529b\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.jsx)(n.code,{children:"Request"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u3001\u3053\u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u30c7\u30fc\u30bf\u5165\u529b\u3092\u6c42\u3081\u308b\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3092\u8868\u793a\u3057\u3001 \u30e6\u30fc\u30b6\u30fc\u304c\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3059\u308b\u3068\u3001\u305d\u306e\u60c5\u5831\u3092\u623b\u308a\u5024\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u306f\u901a\u5e38\u3001\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u9577\u6642\u9593\u7dad\u6301\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3053\u308c\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u3092\u4f7f\u7528\u3059\u308b\u5178\u578b\u7684\u306a\u4f8b\u3068\u3044\u3048\u307e\u3059\u3002 \u6b21\u306b\u4f8b\u3092\u793a\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $vsID:=Request("ID \u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044:")\n If(OK=1)\n    QUERY([People];[People]ID =$vsID)\n End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306b ID \u3092\u5165\u529b\u3059\u308b\u3088\u3046\u306b\u8981\u6c42\u3057\u307e\u3059\u3002 \u30ed\u30fc\u30ab\u30eb\u5909\u6570 $vsID \u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u4ee3\u5165\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u5165\u529b\u3057\u305f ID \u306b\u57fa\u3065\u3044\u305f\u691c\u7d22\u304c\u304a\u3053\u306a\u308f\u308c\u307e\u3059\u3002 \u3053\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u7d42\u4e86\u3057\u305f\u6642\u70b9\u3067\u3001$vsID \u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306f\u30e1\u30e2\u30ea\u304b\u3089\u6d88\u53bb\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u5909\u6570\u306f 1\u56de\u306e\u307f\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u3057\u304b\u4f7f\u308f\u308c\u306a\u3044\u305f\u3081\u3001\u3053\u308c\u4ee5\u4e0a\u7dad\u6301\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8:"})," \u30e1\u30bd\u30c3\u30c9\u306b\u6e21\u3055\u308c\u308b $1, $2...\u7b49\u306e\u5f15\u6570\u306f \u30ed\u30fc\u30ab\u30eb\u5909\u6570\u3067\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,r.jsx)(n.a,{href:"/docs/ja/20-R5/Concepts/parameters",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"})," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570",children:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306f\u3001\u540c\u3058\u30d7\u30ed\u30bb\u30b9\u306e\u7bc4\u56f2\u5185\u306b\u9650\u308a\u4f7f\u7528\u53ef\u80fd\u3067\u3059\u3002 \u3053\u306e\u5909\u6570\u306f\u30d7\u30ed\u30bb\u30b9\u30e1\u30bd\u30c3\u30c9\u3068\u3001\u305d\u306e\u30d7\u30ed\u30bb\u30b9\u5185\u3067\u547c\u3073\u51fa\u3055\u308c\u305f\u4ed6\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306b\u306f\u540d\u524d\u306b\u4ed8\u3051\u308b\u63a5\u982d\u8f9e\u304c\u3042\u308a\u307e\u305b\u3093\u3002 \u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306e\u540d\u524d\u306f\u3001\u6700\u592731\u6587\u5b57\u307e\u3067\u306e\u9577\u3055\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3067\u306f\u3001\u5909\u6570\u306f\u52d5\u7684\u306b\u30e1\u30e2\u30ea\u4e0a\u306b\u4f5c\u6210\u30fb\u6d88\u53bb\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u306b\u5bfe\u3057\u3066\u30b3\u30f3\u30d1\u30a4\u30eb\u30e2\u30fc\u30c9\u3067\u306f\u3001\u4f5c\u6210\u3057\u305f\u3059\u3079\u3066\u306e\u30d7\u30ed\u30bb\u30b9 (\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30bb\u30b9) \u3067\u540c\u3058\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u5b9a\u7fa9\u304c\u5171\u6709\u3055\u308c\u307e\u3059\u304c\u3001\u5909\u6570\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30d7\u30ed\u30bb\u30b9\u6bce\u306b\u7570\u306a\u308b\u3082\u306e\u3068\u306a\u308a\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001\u30d7\u30ed\u30bb\u30b9P_1 \u3068\u30d7\u30ed\u30bb\u30b9P_2 \u306e\u4e21\u65b9\u306b\u304a\u3044\u3066\u30d7\u30ed\u30bb\u30b9\u5909\u6570 myVar \u304c\u5b58\u5728\u3057\u3066\u3044\u3066\u3082\u3001\u305d\u308c\u3089\u306f\u305d\u308c\u305e\u308c\u5225\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GET PROCESS VARIABLE"})," \u3084 ",(0,r.jsx)(n.code,{children:"SET PROCESS VARIABLE"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u3042\u308b\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u4ed6\u306e\u30d7\u30ed\u30bb\u30b9\u306e\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306e\u5024\u3092\u53d6\u5f97\u3057\u305f\u308a\u3001\u8a2d\u5b9a\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30b3\u30de\u30f3\u30c9\u306e\u5229\u7528\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u72b6\u6cc1\u306b\u9650\u5b9a\u3059\u308b\u3053\u3068\u304c\u3001\u826f\u3044\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u4f5c\u6cd5\u3067\u3059:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30b3\u30fc\u30c9\u5185\u306e\u7279\u5b9a\u306e\u7b87\u6240\u306b\u304a\u3051\u308b\u30d7\u30ed\u30bb\u30b9\u9593\u901a\u4fe1"}),"\n",(0,r.jsx)(n.li,{children:"\u30d7\u30ed\u30bb\u30b9\u9593\u306e\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u51e6\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u306b\u304a\u3044\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30de\u30b7\u30f3\u4e0a\u306e\u30d7\u30ed\u30bb\u30b9\u3068\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u4e0a\u306e\u30b9\u30c8\u30a2\u30c9\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u30fc\u9593\u306e\u901a\u4fe1"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f ",(0,r.jsx)(n.strong,{children:"\u30d7\u30ed\u30bb\u30b9"})," \u306e\u7ae0\u3068\u3001\u5404\u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570",children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u3059\u3079\u3066\u306e\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u3067\u5171\u6709\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u4e3b\u3068\u3057\u3066\u30d7\u30ed\u30bb\u30b9\u9593\u3067\u60c5\u5831\u3092\u5171\u6709\u3059\u308b\u305f\u3081\u306b\u4f7f\u308f\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3044\u3066\u306f\u4f7f\u7528\u3067\u304d\u306a\u3044\u3053\u3068\u3068\u3001\u30b3\u30fc\u30c9\u306e\u4fdd\u5b88\u7ba1\u7406\u3092\u7169\u96d1\u306b\u3059\u308b\u3053\u3068\u304b\u3089\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306e\u4f7f\u7528\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u306e\u540d\u524d\u306f\u3001\u5fc5\u305a\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u8a18\u53f7 (",(0,r.jsx)(n.code,{children:"<>"}),") \u3067\u59cb\u3081\u307e\u3059\u3002\u8a18\u53f7\u306e\u5f8c\u306b31\u30d0\u30a4\u30c8\u307e\u3067\u306e\u540d\u524d\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8/\u30b5\u30fc\u30d0\u30fc\u3067\u306f\u3001\u5404\u30de\u30b7\u30f3 (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30de\u30b7\u30f3\u3068\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3) \u3067\u540c\u3058\u30a4\u30f3\u30bf\u30fc\u30d7\u30ed\u30bb\u30b9\u5909\u6570\u5b9a\u7fa9\u3092\u5171\u6709\u3057\u307e\u3059\u304c\u3001\u30de\u30b7\u30f3\u3054\u3068\u306b\u5404\u5909\u6570\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5b58\u5728\u3057\u307e\u3059\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var r=s(296540),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,c={},a=null,h=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,r)&&!t.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:d,type:e,key:a,ref:h,props:c,_owner:i.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(296540);const d={},c=r.createContext(d);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);