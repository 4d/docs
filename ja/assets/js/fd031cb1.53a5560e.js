"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19789],{969953:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=r(474848),t=r(28453);const c={id:"generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",slug:"/commands/generate-encryption-keypair",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",description:"GENERATE ENCRYPTION KEYPAIR ( privKey ; pubKey {; length} )",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-encryption-keypair.md",sourceDirName:"commands-legacy",slug:"/commands/generate-encryption-keypair",permalink:"/docs/ja/commands/generate-encryption-keypair",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-encryption-keypair.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",slug:"/commands/generate-encryption-keypair",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GENERATE CERTIFICATE REQUEST",permalink:"/docs/ja/commands/generate-certificate-request"},next:{title:"ALL RECORDS",permalink:"/docs/ja/commands/all-records"}},l={},a=[{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:"RSA\u3001\u79d8\u5bc6\u9375\u3001\u304a\u3088\u3073\u516c\u958b\u9375\u306b\u3064\u3044\u3066",id:"rsa\u79d8\u5bc6\u9375\u304a\u3088\u3073\u516c\u958b\u9375\u306b\u3064\u3044\u3066",level:4},{value:"\u4f8b\u984c",id:"\u4f8b\u984c",level:4},{value:"\u53c2\u7167",id:"\u53c2\u7167",level:4}];function o(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," ( ",(0,s.jsx)(n.em,{children:"privKey"})," ; ",(0,s.jsx)(n.em,{children:"pubKey"})," {; ",(0,s.jsx)(n.em,{children:"length"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5f15\u6570"}),(0,s.jsx)(n.th,{children:"\u578b"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"privKey"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u79d8\u5bc6\u9375\u3092\u53d7\u3051\u53d6\u308bBLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pubKey"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"\u516c\u958b\u9375\u3092\u53d7\u3051\u53d6\u308bBLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"length"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u30ad\u30fc\u9577 (\u30d3\u30c3\u30c8) [512...2048] \u30c7\u30d5\u30a9\u30eb\u30c8\u5024 = 512"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,s.jsx)(n.p,{children:"GENERATE ENCRYPTION KEYPAIR \u30b3\u30de\u30f3\u30c9\u306f\u65b0\u3057\u304f1\u5bfe\u306eRSA\u9375\u3092\u751f\u6210\u3057\u307e\u3059\u30024D\u306e\u975e\u5bfe\u79f0\u6697\u53f7\u5316\u6a5f\u80fd\u306f\u3053\u306e\u9375\u3092\u5143\u306b\u3057\u3066\u3044\u3066\u3001\u4e00\u822c\u7684\u306b\u3053\u308c\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8d8a\u3057\u306b\u5b89\u5168\u306a\u30c7\u30fc\u30bf\u4ea4\u63db\u3092\u884c\u3046\u969b(\u4f8b: 4D Web \u30b5\u30fc\u30d0\u30fc\u3068TLS\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3059\u308b)\u306b\u5fc5\u8981\u3068\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8:"})," \u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u6697\u53f7\u5316\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u30014D \u304c\u63d0\u4f9b\u3059\u308b\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u6697\u53f7\u5316\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044(",(0,s.jsx)(n.em,{children:"\u30c7\u30fc\u30bf\u306e\u6697\u53f7\u5316"})," \u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30b3\u30de\u30f3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001",(0,s.jsx)(n.em,{children:"privKey"}),"\u3068",(0,s.jsx)(n.em,{children:"pubKey"}),"\u306b\u6e21\u3055\u308c\u305fBLOB\u306b\u306f\u65b0\u3057\u30441\u5bfe\u306e\u6697\u53f7\u9375\u304c\u7d0d\u3081\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5f15\u6570",(0,s.jsx)(n.em,{children:"length"}),"\u3092\u4f7f\u7528\u3057\u3066\u9375\u306e\u30b5\u30a4\u30ba (\u30d3\u30c3\u30c8\u5358\u4f4d) \u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u9375\u304c\u5927\u304d\u3044\u307b\u3069\u6697\u53f7\u30b3\u30fc\u30c9\u306e\u89e3\u8aad\u306f\u56f0\u96e3\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u305f\u3060\u3057\u9375\u304c\u5927\u304d\u304f\u306a\u308b\u3068\u5b9f\u884c\u6642\u9593\u3084\u5fdc\u7b54\u6642\u9593\u304c\u9577\u304f\u306a\u308a\u3001\u7279\u306b\u4fdd\u8b77\u3055\u308c\u305f\u63a5\u7d9a\u3067\u306f\u3053\u308c\u304c\u9855\u8457\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f (",(0,s.jsx)(n.em,{children:"length"}),"\u3092\u7701\u7565\u3057\u305f\u5834\u5408)\u3001\u751f\u6210\u3055\u308c\u308b\u9375\u306e\u30b5\u30a4\u30ba\u306f512\u30d3\u30c3\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u6697\u53f7\u306e\u5b89\u5168\u6027\u3092\u9ad8\u3081\u308b\u305f\u3081\u306b\u983b\u7e41\u306b\u3001\u4f8b\u3048\u30706\u304b\u6708\u3054\u3068\u306b\u9375\u3092\u4ea4\u63db\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u30022,048\u30d3\u30c3\u30c8\u306e\u9375\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u304c\u3001Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u63a5\u7d9a\u901f\u5ea6\u306f\u4f4e\u4e0b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306fbase64\u3067\u6697\u53f7\u5316\u3055\u308c\u305fPKCS\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u9375\u3092\u751f\u6210\u3057\u3001\u305d\u306e\u5185\u5bb9\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u306a\u304f\u96fb\u5b50\u30e1\u30fc\u30eb\u306b\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002\u4e00\u5bfe\u306e\u9375\u304c\u751f\u6210\u3055\u308c\u305f\u3089 (\u4f8b\u3048\u3070",(0,s.jsx)(n.a,{href:"/docs/ja/commands/blob-to-document",children:"BLOB TO DOCUMENT"})," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066) PEM\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30c6\u30ad\u30b9\u30c8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u308c\u3089\u306e\u9375\u3092\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u7ba1\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8b66\u544a:"})," \u79d8\u5bc6\u9375\u306f\u5e38\u306b\u79d8\u5bc6\u306b\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"rsa\u79d8\u5bc6\u9375\u304a\u3088\u3073\u516c\u958b\u9375\u306b\u3064\u3044\u3066",children:"RSA\u3001\u79d8\u5bc6\u9375\u3001\u304a\u3088\u3073\u516c\u958b\u9375\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," \u3067\u4f7f\u7528\u3059\u308bRSA\u6697\u53f7\u65b9 \u5f0f\u306f\u3001\u79d8\u5bc6\u9375\u3068\u516c\u958b\u9375\u3068\u3044\u3046\u4e8c\u91cd\u9375\u6697\u53f7\u30b7\u30b9\u30c6\u30e0\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u540d\u304c\u793a\u3059\u901a\u308a\u3001\u516c\u958b\u9375\u306f\u7b2c\u4e09\u8005\u306b\u6e21\u3055\u308c\u3001\u60c5\u5831\u306e\u5fa9\u53f7\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u516c\u958b\u9375\u306f\u60c5\u5831\u306e\u6697\u53f7\u5316\u306b\u4f7f\u308f\u308c\u308b\u30e6\u30cb\u30fc\u30af\u306a\u79d8\u5bc6\u9375\u3068\u4e00\u5bfe\u3067\u3059\u3002\u3053\u306e\u3088\u3046\u306b\u3001\u79d8\u5bc6\u9375\u306f\u6697\u53f7\u5316\u306b\u4f7f\u7528\u3055\u308c\u3001\u516c\u958b\u9375\u306f\u5fa9\u53f7\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059 (\u307e\u305f\u306f\u305d\u306e\u9006)\u3002\u4e00\u65b9\u306e\u9375\u3092\u4f7f\u3063\u3066\u6697\u53f7\u5316\u3055\u308c\u305f\u60c5\u5831\u306f\u3001\u3082\u3046\u4e00\u65b9\u306e\u9375\u3092\u4f7f\u7528\u3057\u306a\u3051\u308c\u3070\u89e3\u8aad\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["TLS/SSL\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u6697\u53f7\u5316\u6a5f\u80fd\u306f\u3053\u306e\u539f\u7406\u306b\u57fa\u3065\u3044\u3066\u304a\u308a\u3001\u8a3c\u660e\u66f8\u306b\u7d0d\u3081\u3089\u308c\u305f\u516c\u958b\u9375\u304c\u30d6\u30e9\u30a6\u30b6\u306b\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002(\u8a73\u7d30\u306f",(0,s.jsx)(n.a,{href:"/docs/ja/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"\u306e\u7bc0\u3092\u53c2\u7167)\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u6697\u53f7\u5316\u30e2\u30fc\u30c9\u306f\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",children:"ENCRYPT BLOB"}),"\u304a\u3088\u3073",(0,s.jsx)(n.a,{href:"/docs/ja/commands/decrypt-blob",children:"DECRYPT BLOB"}),"\u306e1\u756a\u76ee\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u3082\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u7528\u3044\u308b\u516c\u958b\u9375\u306f\u6975\u79d8\u306b\u767a\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,s.jsx)(n.br,{}),"\n\u7279\u5b9a\u306e\u53d7\u4fe1\u8005\u3092\u5fa9\u53f7\u53ef\u80fd\u306a\u552f\u4e00\u306e\u4eba\u3068\u3057\u3001\u304b\u3064\u9001\u4fe1\u8005\u304c\u6697\u53f7\u5316\u3092\u884c\u3063\u305f\u4eba\u3067\u3042\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u306b\u30012\u4eba\u306e\u516c\u958b\u9375\u3068\u79d8\u5bc6\u9375\u3092\u5408\u308f\u305b\u3066\u60c5\u5831\u306e\u6697\u53f7\u5316\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u539f\u7406\u306f",(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",children:"ENCRYPT BLOB"}),"\u304a\u3088\u3073",(0,s.jsx)(n.a,{href:"/docs/ja/commands/decrypt-blob",children:"DECRYPT BLOB"}),"\u306e2\u756a\u76ee\u306e\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3067\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4f8b\u984c",children:"\u4f8b\u984c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",title:"ENCRYPT BLOB",children:"ENCRYPT BLOB"}),"\u306e\u4f8b\u984c\u53c2\u7167"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u7167",children:"\u53c2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/generate-certificate-request",children:"GENERATE CERTIFICATE REQUEST"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(296540);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);