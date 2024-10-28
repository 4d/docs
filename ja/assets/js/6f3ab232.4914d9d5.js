"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60244],{381334:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>a,metadata:()=>h,toc:()=>i});var r=n(474848),d=n(28453);const a={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},t=void 0,h={id:"commands-legacy/verify-password-hash",title:"Verify password hash",description:"Verify password hash ( password ; hash ) -> \u623b\u308a\u5024",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/verify-password-hash.md",sourceDirName:"commands-legacy",slug:"/commands/verify-password-hash",permalink:"/docs/ja/commands/verify-password-hash",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"STOP MONITORING ACTIVITY",permalink:"/docs/ja/commands/stop-monitoring-activity"},next:{title:"Active transaction",permalink:"/docs/ja/commands/active-transaction"}},c={},i=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"\u30a8\u30e9\u30fc\u7ba1\u7406",id:"\u30a8\u30e9\u30fc\u7ba1\u7406",level:5},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(s){const e={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Verify password hash"})," ( ",(0,r.jsx)(e.em,{children:"password"})," ; ",(0,r.jsx)(e.em,{children:"hash"})," ) -> \u623b\u308a\u5024"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5f15\u6570"}),(0,r.jsx)(e.th,{children:"\u578b"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"password"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3002\u6700\u521d\u306e72\u6587\u5b57\u306e\u307f\u4f7f\u7528\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"hash"}),(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30cf\u30c3\u30b7\u30e5"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623b\u308a\u5024"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u30cf\u30c3\u30b7\u30e5\u304c\u5408\u81f4\u3059\u308b\u5834\u5408\u306b\u306fTRUE\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306b\u306fFALSE\u3002"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Verify password hash"})," \u30d5\u30a1\u30f3\u30af\u30b7\u30e7\u30f3\u306f\u3001",(0,r.jsx)(e.em,{children:"hash"})," \u5f15\u6570\u3067\u6e21\u3055\u308c\u305f\u30cf\u30c3\u30b7\u30e5\u5024\u304c\u3001",(0,r.jsx)(e.em,{children:"password"})," \u5f15\u6570\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u5408\u81f4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306e\u30d5\u30a1\u30f3\u30af\u30b7\u30e7\u30f3\u306f",(0,r.jsx)(e.em,{children:"password"})," \u5f15\u6570\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})," \u30d5\u30a1\u30f3\u30af\u30b7\u30e7\u30f3\u3067\u751f\u6210\u3055\u308c\u305f",(0,r.jsx)(e.em,{children:"hash"})," \u5f15\u6570\u306e\u30cf\u30c3\u30b7\u30e5\u3068\u6bd4\u8f03\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h5,{id:"\u30a8\u30e9\u30fc\u7ba1\u7406",children:"\u30a8\u30e9\u30fc\u7ba1\u7406"}),"\n",(0,r.jsxs)(e.p,{children:["\u4ee5\u4e0b\u306e\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u306f",(0,r.jsx)(e.a,{href:"/docs/ja/commands/last-errors",children:"Last errors"}),"  \u304a\u3088\u3073 ",(0,r.jsx)(e.a,{href:"/docs/ja/commands/on-err-call",children:"ON ERR CALL"})," \u30b3\u30de\u30f3\u30c9\u3067\u5206\u6790\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u756a\u53f7"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u30e1\u30c3\u30bb\u30fc\u30b8"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"850"}),(0,r.jsx)(e.td,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9-\u30cf\u30c3\u30b7\u30e5: \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3067\u3059\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"851"}),(0,r.jsx)(e.td,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9-\u30cf\u30c3\u30b7\u30e5: \u4e00\u8cab\u6027\u306e\u30c1\u30a7\u30c3\u30af\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6ce8:"})," \u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306fbcrypt \u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u307f\u3067\u3059\u3002\u30cf\u30c3\u30b7\u30e5\u304cbcrypt \u3092\u4f7f\u7528\u3057\u3066\u751f\u6210\u3055\u308c\u305f\u3082\u306e\u3067\u306f\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306e\u4f8b\u984c\u3067\u306f",(0,r.jsx)(e.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})," \u30b3\u30de\u30f3\u30c9\u3067\u4f5c\u6210\u6e08\u307f\u3067[Users] \u30c6\u30fc\u30d6\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30d1\u30b9\u30ef\u30fc\u30c9\u30cf\u30c3\u30b7\u30e5\u3092\u3001\u65b0\u305f\u306b\u5165\u529b\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u691c\u8a3c\u3059\u308b\u5834\u5408\u3092\u8003\u3048\u307e\u3059:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Please enter your password")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Good password")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Password error")\n\xa0End if\n'})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6ce8:"})," \u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u30c7\u30a3\u30b9\u30af\u4e0a\u306b\u4fdd\u5b58\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4fdd\u5b58\u3055\u308c\u308b\u306e\u306f\u30cf\u30c3\u30b7\u30e5\u306e\u307f\u3067\u3059\u3002\u30ea\u30e2\u30fc\u30c84D \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30cf\u30c3\u30b7\u30e5\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u751f\u6210\u3055\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u30024D \u306e\u4ee3\u308f\u308a\u306b\u4f8b\u3048\u3070JavaScript\u30d9\u30fc\u30b9\u306e(\u3042\u308b\u3044\u306f\u305d\u308c\u306b\u985e\u4f3c\u3057\u305f)\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u7684\u306a\u89b3\u70b9\u304b\u3089\u307f\u305f\u6700\u9069\u306a\u65b9\u6cd5\u306f\u3001\u30cf\u30c3\u30b7\u30e5\u3092\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u7121\u8ad6\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u305f\u3081\u306bTLS \u6697\u53f7\u5316\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u63a5\u7d9a\u3092\u4f7f\u7528\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u3053\u306e\u5834\u5408\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u3067\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u901a\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3089\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/ja/commands/generate-password-hash",children:"Generate password hash"})})]})}function l(s={}){const{wrapper:e}={...(0,d.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(o,{...s})}):o(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>h});var r=n(296540);const d={},a=r.createContext(d);function t(s){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function h(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(d):s.components||d:t(s.components),r.createElement(a.Provider,{value:e},s.children)}}}]);