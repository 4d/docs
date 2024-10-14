"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31483],{536396:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var s=r(474848),d=r(28453);const c={id:"error-handling",title:"\u30a8\u30e9\u30fc\u51e6\u7406"},i=void 0,t={id:"Concepts/error-handling",title:"\u30a8\u30e9\u30fc\u51e6\u7406",description:"\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30a8\u30e9\u30fc\u306b\u5099\u3048\u3001\u5bfe\u51e6\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30e9\u30f3\u30bf\u30a4\u30e0\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u306e\u30ad\u30e3\u30c3\u30c1\u3084\u5831\u544a\u3001\u307e\u305f\u305d\u308c\u3089\u306e\u6761\u4ef6\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u30014D\u306f\u5305\u62ec\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R6/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/ja/Concepts/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"error-handling",title:"\u30a8\u30e9\u30fc\u51e6\u7406"},sidebar:"docs",previous:{title:"\u5236\u5fa1\u30d5\u30ed\u30fc",permalink:"/docs/ja/Concepts/control-flow"},next:{title:"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30e2\u30fc\u30c9",permalink:"/docs/ja/Concepts/interpreted-compiled"}},o={},l=[{value:"\u30a8\u30e9\u30fc/\u30b9\u30c6\u30fc\u30bf\u30b9",id:"\u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9",level:2},{value:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5",id:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5",level:2},{value:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406",id:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406",level:3},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9",id:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9",level:3},{value:"Try(expression)",id:"tryexpression",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-1",level:3},{value:"Try...Catch...End try",id:"trycatchend-try",level:2},{value:"\u4f8b\u984c",id:"\u4f8b\u984c-2",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30a8\u30e9\u30fc\u51e6\u7406\u3068\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u3067\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u30a8\u30e9\u30fc\u306b\u5099\u3048\u3001\u5bfe\u51e6\u3059\u308b\u3053\u3068\u3067\u3059\u3002 \u30e9\u30f3\u30bf\u30a4\u30e0\u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u306e\u30ad\u30e3\u30c3\u30c1\u3084\u5831\u544a\u3001\u307e\u305f\u305d\u308c\u3089\u306e\u6761\u4ef6\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u30014D\u306f\u5305\u62ec\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u30a8\u30e9\u30fc\u51e6\u7406\u306f\u6b21\u306e2\u3064\u306e\u8981\u671b\u306b\u5fdc\u3048\u307e\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u958b\u767a\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u3001\u554f\u984c\u3068\u306a\u308a\u3046\u308b\u30b3\u30fc\u30c9\u306e\u30a8\u30e9\u30fc\u3084\u30d0\u30b0\u3092\u767a\u898b\u3057\u3066\u4fee\u6b63\u3057\u305f\u3044\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u904b\u7528\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u3001\u4e88\u671f\u3057\u306a\u3044\u30a8\u30e9\u30fc\u3092\u691c\u77e5\u3057\u3066\u56de\u5fa9\u3057\u305f\u3044\u3002\u3068\u304f\u306b\u3001\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0 (\u30c7\u30a3\u30b9\u30af\u304c\u4e00\u676f\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u306a\u3044\u3001\u306a\u3069)  \u3092\u72ec\u81ea\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306b\u7f6e\u63db\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u57fa\u672c\u7684\u306b\u30014D \u3067\u30a8\u30e9\u30fc\u51e6\u7406\u3059\u308b\u65b9\u6cd5\u306f 2\u3064\u3042\u308a\u307e\u3059\u3002 \u6b21\u306e\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#installing-an-error-handling-method",children:"install an error-handling method"}),", or"]}),"\n",(0,s.jsxs)(n.li,{children:["use a ",(0,s.jsxs)(n.a,{href:"#tryexpression",children:[(0,s.jsx)(n.code,{children:"Try()"})," keyword"]})," or a ",(0,s.jsxs)(n.a,{href:"#trycatchend-try",children:[(0,s.jsx)(n.code,{children:"Try/Catch"})," structure"]})," before pieces of code that call a function, method, or expression that can throw an error."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u30b0\u30c3\u30c9\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u305f\u3081\u30014D Server \u306b\u306f\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u5f37\u304f\u63a8\u5968\u3055\u308c\u307e\u3059\u3002 4D Server \u304c ",(0,s.jsx)(n.a,{href:"/docs/ja/Admin/cli",children:"\u30d8\u30c3\u30c9\u30ec\u30b9"})," \u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408 (\u3064\u307e\u308a\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/ServerWindow/overview",children:"\u7ba1\u7406\u753b\u9762"})," \u4ed8\u304d\u3067\u8d77\u52d5\u3055\u308c\u3066\u3044\u308b\u5834\u5408)\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u3063\u3066\u3001\u4e88\u671f\u305b\u306c\u30c0\u30a4\u30a2\u30ed\u30b0\u304c\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u4e0a\u306b\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u3092\u9632\u304e\u307e\u3059\u3002 \u30d8\u30c3\u30c9\u30ec\u30b9\u30e2\u30fc\u30c9\u3067\u306f\u3001\u30a8\u30e9\u30fc\u306f\u89e3\u6790\u306e\u305f\u3081 ",(0,s.jsx)(n.a,{href:"/docs/ja/Debugging/debugLogFiles#4ddebuglogtxt-standard",children:"4DDebugLog \u30d5\u30a1\u30a4\u30eb"})," \u306b\u8a18\u9332\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc\u30b9\u30c6\u30fc\u30bf\u30b9",children:"\u30a8\u30e9\u30fc/\u30b9\u30c6\u30fc\u30bf\u30b9"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"entity.save()"})," \u3084 ",(0,s.jsx)(n.code,{children:"transporter.send()"})," \u306a\u3069\u3001\u304a\u304a\u304f\u306e 4D \u30af\u30e9\u30b9\u95a2\u6570\u306f ",(0,s.jsx)(n.em,{children:"status"}),' \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002 \u30e9\u30f3\u30bf\u30a4\u30e0\u306b\u304a\u3044\u3066 "\u60f3\u5b9a\u3055\u308c\u308b"\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u5b9f\u884c\u3092\u505c\u6b62\u3055\u305b\u306a\u3044\u30a8\u30e9\u30fc (\u7121\u52b9\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u30ed\u30c3\u30af\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306a\u3069) \u304c\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u3078\u306e\u5bfe\u5fdc\u306f\u3001\u901a\u5e38\u306e\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u304a\u3053\u306a\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002']}),"\n",(0,s.jsxs)(n.p,{children:['\u30c7\u30a3\u30b9\u30af\u66f8\u304d\u8fbc\u307f\u30a8\u30e9\u30fc\u3084\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u554f\u984c\u306a\u3069\u306e\u30a4\u30ec\u30ae\u30e5\u30e9\u30fc\u306a\u4e2d\u65ad\u306f "\u60f3\u5b9a\u3055\u308c\u306a\u3044" \u30a8\u30e9\u30fc\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u306f\u4f8b\u5916\u3092\u767a\u751f\u3055\u305b\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3084 ',(0,s.jsx)(n.code,{children:"Try()"})," \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4ecb\u3057\u3066\u5bfe\u5fdc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5",children:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["4D \u306b\u304a\u3044\u3066\u306f\u3001\u30a8\u30e9\u30fc\u5c02\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3067\u3042\u308b ",(0,s.jsx)(n.strong,{children:"\u30a8\u30e9\u30fc\u51e6\u7406"})," (\u307e\u305f\u306f ",(0,s.jsx)(n.strong,{children:"\u30a8\u30e9\u30fc\u30ad\u30e3\u30c3\u30c1"}),") \u30e1\u30bd\u30c3\u30c9\u5185\u3067\u3059\u3079\u3066\u306e\u30a8\u30e9\u30fc\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u3001\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30e2\u30fc\u30c9\u307e\u305f\u306f\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u30e2\u30fc\u30c9\u3067\u81ea\u52d5\u7684\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002 \u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u5fdc\u3058\u3066\u3001\u7570\u306a\u308b\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059 (\u5f8c\u8ff0\u53c2\u7167)\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30a8\u30e9\u30fc\u51e6\u7406\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3092 ",(0,s.jsx)(n.em,{children:"\u5b9f\u88c5"})," \u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page155.html",children:(0,s.jsx)(n.code,{children:"ON ERR CALL"})})," \u30b3\u30de\u30f3\u30c9\u3092\u30b3\u30fc\u30eb\u3057\u3001\u5f53\u8a72\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u540d\u3068 (\u4efb\u610f\u3067) \u30b9\u30b3\u30fc\u30d7\u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3057\u307e\u3059\u3002 \u4f8b:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) // \u30ed\u30fc\u30ab\u30eb\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u307e\u3059\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066\u30a8\u30e9\u30fc\u306e\u691c\u77e5\u3092\u4e2d\u6b62\u3059\u308b\u306b\u306f\u3001\u7a7a\u306e\u6587\u5b57\u5217\u3092\u6307\u5b9a\u3057\u3066\u518d\u5ea6 ",(0,s.jsx)(n.code,{children:"ON ERR CALL"})," \u30b3\u30de\u30f3\u30c9\u3092\u30b3\u30fc\u30eb\u3057\u307e\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("";ek local) // \u30ed\u30fc\u30ab\u30eb\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3044\u3066\u30a8\u30e9\u30fc\u306e\u691c\u77e5\u3092\u4e2d\u6b62\u3057\u307e\u3059\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The  ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page704.html",children:(0,s.jsx)(n.code,{children:"Method called on error"})})," command allows you to know the name of the method installed by ",(0,s.jsx)(n.code,{children:"ON ERR CALL"})," for the current process. \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u6c4e\u7528\u7684\u306a\u30b3\u30fc\u30c9\u3067\u3068\u304f\u306b\u6709\u7528\u3067\u3059\u3002\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u4e00\u6642\u7684\u306b\u5909\u66f4\u3057\u3001\u5f8c\u3067\u5fa9\u5143\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  // \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u958b\u3051\u306a\u3044\u5834\u5408\u306b\u30a8\u30e9\u30fc\u304c\u751f\u6210\u3055\u308c\u307e\u3059\n $ref:=Open document("MyDocument")\n  // \u524d\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306b\u623b\u3057\u307e\u3059\n ON ERR CALL($methCurrent;ek local)\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",children:"\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3054\u3068\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9"})," - \u30ed\u30fc\u30ab\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u306f\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u3067\u767a\u751f\u3057\u305f\u30a8\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u306e\u307f\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53"})," - \u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u767a\u751f\u3057\u305f\u3059\u3079\u3066\u306e\u30a8\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"})," - \u3053\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u306f\u30db\u30b9\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u304a\u3044\u3066\u5b9a\u7fa9\u3055\u308c\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u3067\u767a\u751f\u3057\u305f\u3059\u3079\u3066\u306e\u30a8\u30e9\u30fc\u306b\u5bfe\u3057\u3066\u3001(\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5185\u306e\u30cf\u30f3\u30c9\u30e9\u30fc\u3067\u51e6\u7406\u3055\u308c\u306a\u3044\u5834\u5408\u306b) \u30db\u30b9\u30c8\u5185\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) // \u30ed\u30fc\u30ab\u30eb\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\nON ERR CALL("globalHandler";ek global) // \u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\nON ERR CALL("componentHandler";ek errors from components) // \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\n'})}),"\n",(0,s.jsx)(n.p,{children:'"\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af" \u3068\u3057\u3066\u6a5f\u80fd\u3059\u308b\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3068\u3001\u7279\u5b9a\u30d7\u30ed\u30bb\u30b9\u5c02\u7528\u306e\u30ed\u30fc\u30ab\u30eb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u3092\u540c\u6642\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30e9\u30fc\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u4ed8\u304d\u3067\u30b5\u30fc\u30d0\u30fc\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0\u306e\u8868\u793a\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u3082\u6709\u52b9\u3067\u3059\u3002'}),"\n",(0,s.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u304a\u3044\u3066\u4e00\u3064\u306e\u30a8\u30e9\u30fc\u30ad\u30e3\u30c3\u30c1\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3046\u3084\u308a\u65b9\u3082\u3042\u308c\u3070\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3054\u3068\u306b\u9055\u3046\u30e1\u30bd\u30c3\u30c9\u3092\u5b9a\u7fa9\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u4e00\u3064\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u4e00\u3064\u306e\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u3064\u304d\u5b9f\u88c5\u3067\u304d\u308b\u306e\u306f\u4e00\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u56f3\u306e\u3088\u3046\u306b 1\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"error management",src:r(754761).A+"",width:"1195",height:"578"})}),"\n",(0,s.jsx)(n.h3,{id:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406",children:"\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30fc\u51e6\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u72ec\u81ea\u306b\u4f5c\u6210\u3057\u305f\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306f\u3001\u30a8\u30e9\u30fc\u3092\u8abf\u67fb\u3059\u308b\u305f\u3081\u306e\u60c5\u5831\u304c\u3044\u304f\u3064\u304b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c02\u7528\u306e\u30b7\u30b9\u30c6\u30e0\u5909\u6570:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Error"})," (\u500d\u9577\u6574\u6570): \u30a8\u30e9\u30fc\u30b3\u30fc\u30c9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Error method"})," (\u30c6\u30ad\u30b9\u30c8): \u30a8\u30e9\u30fc\u3092\u751f\u6210\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u540d\u79f0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Error line"})," (\u500d\u9577\u6574\u6570): \u30a8\u30e9\u30fc\u3092\u751f\u6210\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u884c\u756a\u53f7"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Error formula"})," (\u30c6\u30ad\u30b9\u30c8): \u30a8\u30e9\u30fc\u306e\u5143\u3068\u306a\u3063\u305f 4D \u30b3\u30fc\u30c9\u306e\u30d5\u30a9\u30fc\u30df\u30e5\u30e9 (\u30c6\u30ad\u30b9\u30c8)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["4D \u306f\u3001\u3044\u304f\u3064\u304b\u306e ",(0,s.jsx)(n.a,{href:"/docs/ja/Concepts/variables#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%A4%89%E6%95%B0",children:(0,s.jsx)(n.strong,{children:"\u30b7\u30b9\u30c6\u30e0\u5909\u6570"})})," \u3068\u547c\u3070\u308c\u308b\u5c02\u7528\u306e\u5909\u6570\u3092\u81ea\u52d5\u7684\u306b\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page1799.html",children:(0,s.jsx)(n.code,{children:"Last errors"})})," \u30b3\u30de\u30f3\u30c9\u306f\u30014D\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ab\u30ec\u30f3\u30c8\u30a8\u30e9\u30fc\u30b9\u30bf\u30c3\u30af\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3068\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u540c\u3058\u60c5\u5831\u3092\u914d\u5217\u3068\u3057\u3066\u8fd4\u3059 ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/ja/page1015.html",children:(0,s.jsx)(n.code,{children:"GET LAST ERROR STACK"})})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Get call chain"})," \u30b3\u30de\u30f3\u30c9\u306f\u3001\u30ab\u30ec\u30f3\u30c8\u30d7\u30ed\u30bb\u30b9\u5185\u306b\u304a\u3051\u308b\u3001\u30e1\u30bd\u30c3\u30c9\u547c\u3073\u51fa\u3057\u30c1\u30a7\u30fc\u30f3\u306e\u5404\u30b9\u30c6\u30c3\u30d7\u3092\u8a73\u7d30\u306b\u8aac\u660e\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsx)(n.p,{children:"\u7c21\u5358\u306a\u30a8\u30e9\u30fc\u51e6\u7406\u30b7\u30b9\u30c6\u30e0\u306e\u4f8b\u3067\u3059:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// \u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\n ON ERR CALL("errorMethod")\n //... \u30b3\u30fc\u30c9\u306e\u5b9f\u884c\n ON ERR CALL("") // \u30a8\u30e9\u30fc\u306e\u691c\u77e5\u3092\u4e2d\u6b62\u3057\u307e\u3059\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// errorMethod \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\n If(Error#1006) // \u3053\u308c\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u308b\u5272\u308a\u8fbc\u307f\u3067\u306f\u3042\u308a\u307e\u305b\u3093\n    ALERT("\u30a8\u30e9\u30fc "+String(Error)+" \u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u554f\u984c\u3068\u306a\u3063\u305f\u30b3\u30fc\u30c9\u306f\u3053\u3061\u3089\u3067\u3059: \\""+Error formula+"\\"")\n End if\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9",children:"\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9"}),"\n",(0,s.jsxs)(n.p,{children:["\u6a19\u6e96\u306e\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u8868\u793a\u3055\u305b\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u306b\u306f\u3001\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3059\u308b\u3060\u3051\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002 ",(0,s.jsx)(n.code,{children:"Error"})," \u30b7\u30b9\u30c6\u30e0\u5909\u6570\u306f\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u4ee5\u5916\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3082\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") // emptyMethod \u306f\u7a7a\u306e\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3067\u3059\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n ALERT("\u30d5\u30a1\u30a4\u30eb\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002")\nEnd if\nON ERR CALL("")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tryexpression",children:"Try(expression)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Try(expression)"})," \u6587\u306f\u3001\u5b9f\u969b\u306e\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8 (\u7279\u306b\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306e\u5024\u3092\u542b\u3080) \u3067\u5358\u4e00\u884c\u306e\u5f0f\u3092\u30c6\u30b9\u30c8\u3057\u3001\u30b9\u30ed\u30fc\u3055\u308c\u308b\u30a8\u30e9\u30fc\u3092\u30ad\u30e3\u30c3\u30c1\u3059\u308b\u3053\u3068\u3067\u30014D \u306e\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3067\u304d\u307e\u3059\u3002 ",(0,s.jsx)(n.code,{children:"Try(expression)"})," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u975e\u5e38\u306b\u5c11\u306a\u3044\u30b3\u30fc\u30c9\u3067\u5358\u7d14\u306a\u30a8\u30e9\u30fc\u30b1\u30fc\u30b9\u3092\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you want to try a more complex code than a single-line expression, you might consider using a ",(0,s.jsxs)(n.a,{href:"#trycatchend-try",children:[(0,s.jsx)(n.code,{children:"Try/Catch"})," structure"]}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Try(expression)"})," \u6587\u306e\u6b63\u5f0f\u306a\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u306f\u3001\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\nTry (expression) : any | Undefined\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"expression"})," \u306b\u306f\u4efb\u610f\u306e\u6709\u52b9\u306a\u5f0f\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5b9f\u884c\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"Try()"})," \u306e\u547c\u3073\u51fa\u3057\u524d\u306b ",(0,s.jsx)(n.a,{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%A6%E7%90%86%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%9F%E8%A3%85",children:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9"})," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u30a8\u30e9\u30fc\u30c0\u30a4\u30a2\u30ed\u30b0\u306f\u8868\u793a\u3055\u308c\u305a\u3001\u30a8\u30e9\u30fc\u306f\u30ad\u30e3\u30c3\u30c1\u3055\u308c\u307e\u3059\u3002 ",(0,s.jsx)(n.em,{children:"expression"})," \u304c\u5024\u3092\u8fd4\u3059\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"Try()"})," \u306f\u6700\u5f8c\u306b\u8a55\u4fa1\u3055\u308c\u305f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002\u5024\u304c\u8fd4\u3055\u308c\u306a\u3044\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"Try()"})," \u306f ",(0,s.jsx)(n.code,{children:"Undefined"})," \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30a8\u30e9\u30fc\u306f\u3001",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/ja/page1799.html",children:(0,s.jsx)(n.code,{children:"Last errors"})})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u51e6\u7406\u3067\u304d\u307e\u3059\u3002 ",(0,s.jsx)(n.em,{children:"expression"})," \u304c ",(0,s.jsx)(n.code,{children:"Try()"})," \u306e\u30b9\u30bf\u30c3\u30af\u5185\u3067\u30a8\u30e9\u30fc\u3092\u30b9\u30ed\u30fc\u3057\u305f\u5834\u5408\u3001\u5b9f\u884c\u30d5\u30ed\u30fc\u306f\u505c\u6b62\u3057\u3001\u6700\u5f8c\u306b\u5b9f\u884c\u3055\u308c\u305f ",(0,s.jsx)(n.code,{children:"Try()"})," (\u30b3\u30fc\u30eb\u30b9\u30bf\u30c3\u30af\u5185\u3067\u6700\u521d\u306b\u898b\u3064\u304b\u3063\u305f\u3082\u306e) \u306b\u623b\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u3082\u3057 ",(0,s.jsx)(n.em,{children:"expression"})," \u306b\u3088\u3063\u3066 ",(0,s.jsx)(n.a,{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%A6%E7%90%86%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AE%E5%AE%9F%E8%A3%85",children:"\u30a8\u30e9\u30fc\u51e6\u7406\u30e1\u30bd\u30c3\u30c9"})," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u767a\u751f\u6642\u306b\u306f\u305d\u308c\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f8b\u984c-1",children:"\u4f8b\u984c"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u30d5\u30a1\u30a4\u30eb\u3092\u30a8\u30e9\u30fc\u306a\u304f\u958b\u304f\u3053\u3068\u304c\u3067\u304d\u3001\u305d\u306e\u5185\u5bb9\u304c\u8aad\u307f\u53d6\u308a\u53ef\u80fd\u306a\u5834\u5408\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u8868\u793a\u3057\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $text : Text\nvar $file : 4D.File := File("/RESOURCES/myFile.txt")\nvar $fileHandle : 4D.FileHandle := Try($file.open())\nIf ($fileHandle # Null)\n  $text:=Try($fileHandle.readText()) || "\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f\u30a8\u30e9\u30fc"\nEnd if\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u30bc\u30ed\u9664\u7b97\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3057\u307e\u3059\u3002 \u3053\u3053\u3067\u306f 0 \u3092\u8fd4\u3057\u3001\u30a8\u30e9\u30fc\u3092\u30b9\u30ed\u30fc\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'function divide( $p1: real; $p2: real)-> $result: real\n  if ($p2=0)\n     $result:=0 // \u53ef\u8aad\u6027\u306e\u305f\u3081 (\u5b9f\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f 0 \u3067\u3059)\n     throw(-12345; "\u30bc\u30ed\u9664\u7b97")\n  else\n    $result:=$p1/$p2\n  end if\n\nfunction test()\n  $result:=Try(divide($p1;$p2))\n  If (Last errors # null)\n    ALERT("\u30a8\u30e9\u30fc")\n  End if\n\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9",children:"\u4e88\u6e2c\u53ef\u80fd\u306a\u30a8\u30e9\u30fc\u3068\u4e88\u6e2c\u4e0d\u53ef\u80fd\u306a\u30a8\u30e9\u30fc"})," \u306e\u4e21\u65b9\u3092\u51e6\u7406\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $e:=ds.Employee.new()\n$e.name:="Smith"\n$status:=Try($e.save()) // \u4e88\u6e2c\u53ef\u80fd\u306a\u30a8\u30e9\u30fc\u3068\u4e88\u6e2c\u4e0d\u53ef\u80fd\u306a\u30a8\u30e9\u30fc\u3092\u30ad\u30e3\u30c3\u30c1\u3057\u307e\u3059\nIf ($status.success)\n   ALERT( "\u6210\u529f")\nElse\n   ALERT( "\u30a8\u30e9\u30fc: "+JSON Stringify($status.errors))\nEnd if\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"trycatchend-try",children:"Try...Catch...End try"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Try...Catch...End try"})," structure allows you to test a block code in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed."]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike the ",(0,s.jsx)(n.code,{children:"Try(expression)"})," keyword that evaluates a single-line expression, the ",(0,s.jsx)(n.code,{children:"Try...Catch...End try"})," structure allows you to evaluate any code block, from the most simple to the most complex, without requiring an error-handling method. In addition, the ",(0,s.jsx)(n.code,{children:"Catch"})," block can be used to handle the error in any custom way."]}),"\n",(0,s.jsxs)(n.p,{children:["The formal syntax of the ",(0,s.jsx)(n.code,{children:"Try...Catch...End try"})," structure is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\nTry \n statement(s) // \u8a55\u4fa1\u3059\u308b\u30b3\u30fc\u30c9\nCatch\n statement(s) // \u30a8\u30e9\u30fc\u306e\u5834\u5408\u306b\u5b9f\u884c\u3059\u308b\u30b3\u30fc\u30c9\nEnd try\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code placed between the ",(0,s.jsx)(n.code,{children:"Try"})," and the ",(0,s.jsx)(n.code,{children:"Catch"})," keywords is first executed, then the flow depends on the error(s) encountered during this execution."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If no error is thrown, the code execution continues after the corresponding ",(0,s.jsx)(n.code,{children:"End try"})," keyword. The code placed between the ",(0,s.jsx)(n.code,{children:"Catch"})," and the ",(0,s.jsx)(n.code,{children:"End try"})," keywords is not executed."]}),"\n",(0,s.jsxs)(n.li,{children:["If the code block execution throws a ",(0,s.jsx)(n.em,{children:"non-deferred error"}),", the execution flow stops and executes the corresponding ",(0,s.jsx)(n.code,{children:"Catch"})," code block."]}),"\n",(0,s.jsxs)(n.li,{children:["If the code block execution throws a ",(0,s.jsx)(n.em,{children:"deferred error"}),", the execution flow continues until the end of the ",(0,s.jsx)(n.code,{children:"Try"})," block and then executes the corresponding ",(0,s.jsx)(n.code,{children:"Catch"})," code block."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.em,{children:"deferred"})," error is thrown outside of the ",(0,s.jsx)(n.code,{children:"Try"})," block, the code execution continues until the end of the method or function."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For more information on ",(0,s.jsx)(n.em,{children:"deferred"})," and ",(0,s.jsx)(n.em,{children:"non-deferred"})," errors, please refer to the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page1805.html",children:(0,s.jsx)(n.code,{children:"throw"})})," command description."]})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"Catch"})," code block, you can handle the error(s) using standard error handling commands. The ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html",children:(0,s.jsx)(n.code,{children:"Last errors"})})," function contains the last errors collection. You can ",(0,s.jsx)(n.a,{href:"#installing-an-error-handling-method",children:"declare an error-handling method"})," in this code block, in which case it is called in case of error (otherwise the 4D error dialog box is displayed)."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.a,{href:"#installing-an-error-handling-method",children:"error-handling method"})," is installed in the code placed between the ",(0,s.jsx)(n.code,{children:"Try"})," and the ",(0,s.jsx)(n.code,{children:"Catch"})," keywords, it is called in case of error."]})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f8b\u984c-2",children:"\u4f8b\u984c"}),"\n",(0,s.jsxs)(n.p,{children:["Combining transactions and ",(0,s.jsx)(n.code,{children:"Try...Catch...End try"})," structures allows writing secured code for critical features."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity\n\tvar $newInvoice : cs.invoiceEntity\n\tvar $newInvoiceLine : cs.invoiceLineEntity\n\tvar $item : Object\n\tds.startTransaction()\n\tTry\n\t\t$newInvoice:=This.new()\n\t\t$newInvoice.customer:=$customer\n\t\t$newInvoice.invoiceRef:=$invoiceRef\n\t\tFor each ($item; $items)\n\t\t\t$newInvoiceLine:=ds.invoiceLine.new()\n\t\t\t$newInvoiceLine.item:=$item.item\n\t\t\t$newInvoiceLine.amount:=$item.amount\n\t\t\t$newInvoiceLine.invoice:=$newInvoice\n                        // \u30a4\u30f3\u30dc\u30a4\u30b9\u9805\u76ee\u3092\u691c\u8a3c\u3059\u308b\u305d\u306e\u4ed6\u306e\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\n\t\t\t$newInvoiceLine.save()\n\t\tEnd for each \n\t\t$newInvoice.save()\n\t\tds.validateTransaction()\n\tCatch\n\t\tds.cancelTransaction()\n\t\tds.logErrors(Last errors)\n\t\t$newInvoice:=Null\n\tEnd try\n\treturn $newInvoice\n\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},754761:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var s=r(296540);const d={},c=s.createContext(d);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);