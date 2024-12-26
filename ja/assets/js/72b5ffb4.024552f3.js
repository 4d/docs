"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95911"],{79073:function(e,n,t){t.r(n),t.d(n,{metadata:()=>c,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>o,frontMatter:()=>s});var c=JSON.parse('{"id":"commands-legacy/encrypt-blob","title":"ENCRYPT BLOB","description":"ENCRYPT BLOB ( toEncrypt ; sendPrivKey {; recipPubKey} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/encrypt-blob.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-blob","permalink":"/docs/ja/commands/encrypt-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"encrypt-blob","title":"ENCRYPT BLOB","slug":"/commands/encrypt-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOCUMENT TO BLOB","permalink":"/docs/ja/commands/document-to-blob"},"next":{"title":"EXPAND BLOB","permalink":"/docs/ja/commands/expand-blob"}}'),r=t("785893"),d=t("250065");let s={id:"encrypt-blob",title:"ENCRYPT BLOB",slug:"/commands/encrypt-blob",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u6697\u53F7\u5316\u30B3\u30DE\u30F3\u30C9\u306E\u6700\u9069\u5316",id:"\u6697\u53F7\u5316\u30B3\u30DE\u30F3\u30C9\u306E\u6700\u9069\u5316",level:5},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ENCRYPT BLOB"})," ( ",(0,r.jsx)(n.em,{children:"toEncrypt"})," ; ",(0,r.jsx)(n.em,{children:"sendPrivKey"})," {; ",(0,r.jsx)(n.em,{children:"recipPubKey"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"toEncrypt"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"\u6697\u53F7\u5316\u3059\u308B\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sendPrivKey"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9001\u4FE1\u8005\u306E\u79D8\u5BC6\u9375"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recipPubKey"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u53D7\u4FE1\u8005\u306E\u516C\u958B\u9375"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["ENCRYPT BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(n.em,{children:"toEncrypt"})," BLOB\u306E\u5185\u5BB9\u3092\u9001\u4FE1\u8005\u306E\u79D8\u5BC6\u9375",(0,r.jsx)(n.em,{children:"sendPrivKey"}),"\u3092\u4F7F\u7528\u3057\u3066\u6697\u53F7\u5316\u3057\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u3001\u540C\u6642\u306B\u53D7\u4FE1\u8005\u306E\u516C\u958B\u9375",(0,r.jsx)(n.em,{children:"recipPubKey"}),"\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u9375\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," \uFF08\u30BB\u30AD\u30E5\u30A2\u30D7\u30ED\u30C8\u30B3\u30EB\u30C6\u30FC\u30DE\uFF09\u3092\u4F7F\u7528\u3057\u3066\u751F\u6210\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u3001TLS\u30D7\u30ED\u30C8\u30B3\u30EB\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u304A\u3088\u3073\u6697\u53F7\u5316\u6A5F\u80FD\u3092\u5229\u7528\u3057\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u306F\u30014D Web\u30B5\u30FC\u30D0\u901A\u4FE1\u306BTLS\u3092\u4F7F\u7528\u3057\u306A\u3044\u5834\u5408\u3067\u3082\u3001TLS\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u5FC5\u8981\u3068\u306A\u308B\u5404\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u30DE\u30B7\u30F3\u4E0A\u306B\u6B63\u3057\u304F\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u3064\u3044\u3066\u306E\u8A73\u7D30\u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," \u306E\u7BC0\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9001\u4FE1\u8005\u306E\u79D8\u5BC6\u9375\u306E\u307F\u3092\u6697\u53F7\u5316\u306B\u4F7F\u7528\u3055\u308C\u308B\u3068\u3001\u516C\u958B\u9375\u306E\u6240\u6709\u8005\u3060\u3051\u304C\u3053\u306E\u60C5\u5831\u3092\u8AAD\u307F\u53D6\u308C\u307E\u3059\u3002\u3053\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u3088\u308A\u3001\u9001\u4FE1\u8005\u81EA\u8EAB\u304C\u60C5\u5831\u306E\u6697\u53F7\u5316\u3092\u884C\u3063\u305F\u3068\u3044\u3046\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u9001\u4FE1\u8005\u306E\u79D8\u5BC6\u9375\u3068\u53D7\u4FE1\u8005\u306E\u516C\u958B\u9375\u3092\u540C\u6642\u306B\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u60C5\u5831\u306E\u8AAD\u307F\u53D6\u308A\u3092\u884C\u3048\u308B\u306E\u306F1\u4EBA\u306E\u53D7\u4FE1\u8005\u3060\u3051\u3067\u3042\u308B\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9375\u3092\u7D0D\u3081\u308BBLOB\u306F\u3001PKCS\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u3059\u3002\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u3042\u308B\u3053\u306E\u5F62\u5F0F\u3067\u306F\u3001\u96FB\u5B50\u30E1\u30FC\u30EB\u3084\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u306B\u30B3\u30D4\u30FC\uFF06\u30DA\u30FC\u30B9\u30C8\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u7C21\u5358\u306B\u9375\u306E\u3084\u308A\u53D6\u308A\u3084\u51E6\u7406\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3068\u3001BLOB ",(0,r.jsx)(n.em,{children:"toEncrypt"}),"\u306B\u306F\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u30C7\u30FC\u30BF\u306E\u89E3\u8AAD\u306F\u3001\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305F\u9001\u4FE1\u8005\u306E\u516C\u958B\u9375\u3092\u4F7F\u7528\u3057\u305F\u4E0A\u3067",(0,r.jsx)(n.a,{href:"/docs/ja/commands/decrypt-blob",children:"DECRYPT BLOB"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u306E\u307F\u884C\u3048\u307E\u3059\u3002\u3055\u3089\u306B\u3001\u60C5\u5831\u306E\u6697\u53F7\u5316\u306E\u969B\u306B\u30AA\u30D7\u30B7\u30E7\u30F3\u3067\u3042\u308B\u53D7\u4FE1\u8005\u306E\u516C\u958B\u9375\u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u89E3\u8AAD\u306B\u306F\u53D7\u4FE1\u8005\u306E\u79D8\u5BC6\u9375\u3082\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u201CAlice\u201D\u3068\u201CBob\u201D\u306E\u9593\u3067\u884C\u308F\u308C\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u4EA4\u63DB\u306E\u305F\u3081\u306E\u3001\u516C\u958B\u53CA\u3073\u79D8\u5BC6\u9375\u3092\u4F7F\u7528\u3057\u305F\u6697\u53F7\u5316\u306E\u539F\u5247"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(425926).Z+"",width:"391",height:"230"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": BLOB\u5185\u5BB9\u306E\u5909\u66F4\uFF08\u610F\u56F3\u7684\u304B\u3069\u3046\u304B\u306B\u95A2\u308F\u3089\u305A\uFF09\u3092\u9632\u3050\u305F\u3081\u3001\u6697\u53F7\u306B\u306F\u30C1\u30A7\u30C3\u30AF\u30B5\u30E0\u6A5F\u80FD\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u3001\u6697\u53F7\u5316\u3055\u308C\u305FBLOB\u306F\u5909\u66F4\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u5909\u66F4\u3092\u884C\u3046\u3068\u3001\u89E3\u8AAD\u3067\u304D\u306A\u304F\u306A\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.h5,{id:"\u6697\u53F7\u5316\u30B3\u30DE\u30F3\u30C9\u306E\u6700\u9069\u5316",children:"\u6697\u53F7\u5316\u30B3\u30DE\u30F3\u30C9\u306E\u6700\u9069\u5316"}),"\n",(0,r.jsx)(n.p,{children:"\u30C7\u30FC\u30BF\u306E\u6697\u53F7\u5316\u3092\u884C\u3046\u3068\u3001\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9F\u884C\u901F\u5EA6\u304C\u4F4E\u4E0B\u3057\u30012\u3064\u306E\u9375\u3092\u4F7F\u7528\u3057\u305F\u5834\u5408\u306F\u7279\u306B\u9045\u304F\u306A\u308A\u307E\u3059\u3002\u3057\u304B\u3057\u3001\u4EE5\u4E0B\u306E\u6700\u9069\u5316\u306B\u95A2\u3059\u308B\u30D2\u30F3\u30C8\u3092\u8003\u616E\u3057\u3066\u307F\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u73FE\u6642\u70B9\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u306B\u5FDC\u3058\u3066\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u201C\u540C\u671F\u201D\u30E2\u30FC\u30C9\u307E\u305F\u306F\u201C\u975E\u540C\u671F\u201D\u30E2\u30FC\u30C9\u3067\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n\u975E\u540C\u671F\u30E2\u30FC\u30C9\u3067\u306F\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u4E2D\u65AD\u3057\u306A\u3044\u306E\u3067\u3001\u3088\u308A\u9AD8\u901F\u306B\u306A\u308A\u307E\u3059\u3002\u4F7F\u7528\u53EF\u80FD\u306A\u30E1\u30E2\u30EA\u304C\u3001\u6697\u53F7\u5316\u3059\u308B\u30C7\u30FC\u30BF\u306E\u5C11\u306A\u304F\u3068\u30822\u500D\u3042\u308B\u5834\u5408\u3001\u3053\u306E\u30E2\u30FC\u30C9\u304C\u81EA\u52D5\u7684\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n\u30E1\u30E2\u30EA\u304C\u305D\u308C\u4EE5\u4E0B\u306E\u5834\u5408\u3001\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u3001\u540C\u671F\u30E2\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u4ED6\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u4E2D\u65AD\u3059\u308B\u305F\u3081\u3001\u901F\u5EA6\u306F\u3088\u308A\u4F4E\u4E0B\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"BLOB\u306E\u30B5\u30A4\u30BA\u304C\u5927\u304D\u3044\u5834\u5408\u3001BLOB\u306E\u91CD\u8981\u306A\u5C0F\u3055\u306A\u90E8\u5206\u306E\u307F\u3092\u6697\u53F7\u5316\u3057\u3066\u3001\u51E6\u7406\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u30C7\u30FC\u30BF\u91CF\u3084\u6642\u9593\u3092\u6E1B\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4E00\u3064\u306E\u30AD\u30FC\u3092\u4F7F\u7528\u3059\u308B"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F1A\u793E\u3067\u30014D\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u683C\u7D0D\u3055\u308C\u308B\u30C7\u30FC\u30BF\u3092\u79D8\u5BC6\u306B\u3057\u3066\u304A\u304D\u305F\u3044\u3068\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3053\u308C\u3089\u306E\u60C5\u5831\u3092\u30D5\u30A1\u30A4\u30EB\u306B\u3057\u3066\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u7D4C\u7531\u3067\u5B50\u4F1A\u793E\u306B\u9001\u4FE1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4F1A\u793E\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",children:"GENERATE ENCRYPTION KEYPAIR"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u4E00\u7D44\u306E\u9375\u3092\u751F\u6210\u3057\u307E\u3059:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method GENERATE_KEYS_TXT\n\xa0var $BPublicKey;$BPrivateKey : Blob\n\xa0GENERATE ENCRYPTION KEYPAIR($BPrivateKey;$BPublicKey)\n\xa0BLOB TO DOCUMENT("PublicKey.txt";$BPublicKey)\n\xa0BLOB TO DOCUMENT("PrivateKey.txt";$BPrivateKey)\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4F1A\u793E\u5074\u306F\u79D8\u5BC6\u9375\u3092\u4FDD\u5B58\u3057\u3001\u5404\u5B50\u4F1A\u793E\u3078\u306F\u516C\u958B\u9375\u3092\u542B\u3080\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u30B3\u30D4\u30FC\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002\u6700\u9AD8\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u7DAD\u6301\u3059\u308B\u305F\u3081\u3001\u9375\u306F\u5B50\u4F1A\u793E\u306B\u624B\u6E21\u3059\u30C7\u30A3\u30B9\u30AF\u306B\u30B3\u30D4\u30FC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6B21\u306B\u3001\u6A5F\u5BC6\u60C5\u5831\uFF08\u4F8B\u3048\u3070\u3001\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u4FDD\u5B58\u3057\u305F\u3082\u306E\uFF09\u3092BLOB\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002\u3053\u306E\u60C5\u5831\u306F\u3001\u79D8\u5BC6\u9375\u3092\u4F7F\u7528\u3057\u3066\u6697\u53F7\u5316\u3055\u308C\u307E\u3059:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method ENCRYPT_INFO\n\xa0var $vbEncrypted;$vbPrivateKey : Blob\n\xa0var $vtEncrypted : Text\n\xa0$vtEncrypted:=[Private]Info\n\xa0VARIABLE TO BLOB($vtEncrypted;$vbEncrypted)\n\xa0DOCUMENT TO BLOB("PrivateKey.txt";$vbPrivateKey)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ENCRYPT BLOB($vbEncrypted;$vbPrivateKey)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("Update.txt";$vbEncrypted)\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u66F4\u65B0\u7528\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u3088\u3046\u306A\u975E\u6697\u53F7\u5316\u30C1\u30E3\u30CD\u30EB\u3067\u5B50\u4F1A\u793E\u306B\u9001\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4E07\u4E00\u3001\u7B2C\u4E09\u8005\u304C\u3053\u306E\u6697\u53F7\u5316\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3092\u5165\u624B\u3057\u305F\u5834\u5408\u3067\u3082\u3001\u516C\u958B\u9375\u306A\u3057\u3067\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u8AAD\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5404\u5B50\u4F1A\u793E\u3067\u306F\u3001\u516C\u958B\u9375\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u89E3\u8AAD\u304C\u53EF\u80FD\u3067\u3059:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method DECRYPT_INFO\n\xa0var $vbEncrypted;$vbPublicKey : Blob\n\xa0var $vtDecrytped : Text\n\xa0var $vtDocRef : Time\n\xa0ALERT("Please select an encrypted document.")\n\xa0$vtDocRef:=Open document("")\xa0//Select Update.txt\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vtDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbEncrypted)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB("PublicKey.txt";$vbPublicKey)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DECRYPT BLOB($vbEncrypted;$vbPublicKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vbEncrypted;$vtDecrypted)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Private])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Private]Info:=$vtDecrypted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Private])\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u30AD\u30FC\u30DA\u30A2",(0,r.jsx)(n.strong,{children:"\u3092\u4F7F\u7528"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u3042\u308B\u4F1A\u793E\u304C\u60C5\u5831\u306E\u3084\u308A\u53D6\u308A\u306B\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u3092\u5229\u7528\u3057\u305F\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u5404\u5B50\u4F1A\u793E\u306F\u6A5F\u5BC6\u60C5\u5831\u3092\u53D7\u4FE1\u3057\u3001\u307E\u305F\u672C\u793E\u3078\u60C5\u5831\u306E\u9001\u4FE1\u3082\u884C\u3044\u307E\u3059\u3002\u3057\u305F\u304C\u3063\u3066\u8981\u4EF6\u306F\u6B21\u306E2 \u3064\u3067\u3059:",(0,r.jsx)(n.br,{}),"\n- \u53D7\u4FE1\u3060\u3051\u304C\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8AAD\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",(0,r.jsx)(n.br,{}),"\n- \u53D7\u4FE1\u5074\u306F\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u9001\u4FE1\u304C\u9001\u4FE1\u8005\u81EA\u8EAB\u306B\u3088\u3063\u3066\u884C\u308F\u308C\u305F\u3068\u3044\u3046\u8A3C\u62E0\u3092\u53D6\u5F97\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u672C\u793E\u304A\u3088\u3073\u5404\u5B50\u4F1A\u793E\u3067\u306F\u3001\u305D\u308C\u305E\u308C\u72EC\u81EA\u306E\u9375\u306E\u30DA\u30A2\u3092\u751F\u6210\u3057\u307E\u3059\uFF08GENERATE_KEYS_TXTGENERATE_KEYS_TXT\u30E1\u30BD\u30C3\u30C9\u3092\u4F7F\u7528\uFF09\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u79D8\u5BC6\u9375\u306F\u53CC\u65B9\u3067\u79D8\u5BC6\u306B\u3057\u3066\u304A\u304D\u307E\u3059\u3002\u5404\u5B50\u4F1A\u793E\u306F\u3001\u81EA\u5206\u306E\u516C\u958B\u9375\u3092\u672C\u793E\u3078\u9001\u308A\u3001\u672C\u793E\u3082\u307E\u305F\u72EC\u81EA\u306E\u516C\u958B\u9375\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002\u516C\u958B\u9375\u3067\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u89E3\u8AAD\u3059\u308B\u306E\u306B\u5341\u5206\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u9375\u306E\u8EE2\u9001\u306B\u6697\u53F7\u5316\u306E\u30C1\u30E3\u30CD\u30EB\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9001\u4FE1\u3059\u308B\u60C5\u5831\u3092\u6697\u53F7\u5316\u3059\u308B\u305F\u3081\u3001\u5B50\u4F1A\u793E\u3084\u672C\u793E\u3067\u306FENCRYPT_INFO_2\u30E1\u30BD\u30C3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u3053\u306E\u30E1\u30BD\u30C3\u30C9\u306F\u3001\u9001\u4FE1\u5074\u306E\u79D8\u5BC6\u9375\u3068\u53D7\u4FE1\u5074\u306E\u516C\u958B\u9375\u3092\u4F7F\u7528\u3057\u3066\u60C5\u5831\u306E\u6697\u53F7\u5316\u3092\u884C\u3044\u307E\u3059:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method ENCRYPT_INFO_2\n\xa0var $vbEncrypted;$vbPrivateKey;$vbPublicKey : Blob\n\xa0var $vtEncrypt)C_TIME($vtDocRef : Text\n\xa0$vtEncrypt:=[Private]Info\n\xa0VARIABLE TO BLOB($vtEncrypt;$vbEncrypted)\n\xa0\xa0// Your own private key is loaded...\n\xa0DOCUMENT TO BLOB("PrivateKey.txt";$vbPrivateKey)\n\xa0If(OK=1)\n\xa0\xa0// ...and the recipient\u2019s public key\n\xa0\xa0\xa0\xa0ALERT("Please select the recipient\u2019s public key.")\n\xa0\xa0\xa0\xa0$vhDocRef:=Open document("")\xa0//Public key to load\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vtDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbPublicKey)\n\xa0\xa0//BLOB encryption with the two keys as parameters\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ENCRYPT BLOB($vbEncrypted;$vbPrivateKey;$vbPublicKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("Update.txt";$vbEncrypted)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6697\u53F7\u5316\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u304C\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u7D4C\u7531\u3067\u53D7\u4FE1\u5074\u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002\u4E07\u304C\u4E00\u7B2C\u4E09\u8005\u304C\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u5165\u624B\u3057\u305F\u5834\u5408\u3001\u305F\u3068\u3048\u516C\u958B\u9375\u3092\u6301\u3063\u3066\u3044\u305F\u3068\u3057\u3066\u3082\u3001\u53D7\u4FE1\u5074\u306E\u79D8\u5BC6\u9375\u3082\u5FC5\u8981\u3068\u306A\u308B\u305F\u3081\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u89E3\u8AAD\u3067\u304D\u307E\u305B\u3093\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53D7\u4FE1\u5074\u306F\u305D\u308C\u305E\u308C\u3001\u72EC\u81EA\u306E\u79D8\u5BC6\u9375\u3068\u9001\u4FE1\u5074\u306E\u516C\u958B\u9375\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u89E3\u8AAD\u304C\u53EF\u80FD\u3067\u3059:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method DECRYPT_INFO_2\n\xa0var $vbEncrypted;$vbPublicKey;$vbPrivateKey : Blob\n\xa0var $vtDecrypted : Text\n\xa0var $vhDocRef : Time\n\xa0ALERT("Please select the encrypted document.")\n\xa0$vhDocRef:=Open document("")\xa0//Select the Update.txt file\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbEncrypted)\n\xa0\xa0//Your own private key is loaded\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB("PrivateKey.txt";$vbPrivateKey)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0// ...and the sender\u2019s public key\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Please select the sender\u2019s public key.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Open document("")\xa0//Public key to load\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbPublicKey)\n\xa0\xa0//Decrypting the BLOB with two keys as parameters\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DECRYPT BLOB($vbEncrypted;$vbPublicKey;$vbPrivateKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vbEncrypted;$vtDecrypted)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Private])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Private]Info:=$vtDecrypted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Private])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"689"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},425926:function(e,n,t){t.d(n,{Z:function(){return c}});let c="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var c=t(667294);let r={},d=c.createContext(r);function s(e){let n=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);