"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31273"],{366120:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>i,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/decrypt-blob","title":"DECRYPT BLOB","description":"DECRYPT BLOB ( toDecrypt ; sendPubKey {; recipPrivKey} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/decrypt-blob.md","sourceDirName":"commands-legacy","slug":"/commands/decrypt-blob","permalink":"/docs/ja/commands/decrypt-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdecrypt-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"decrypt-blob","title":"DECRYPT BLOB","slug":"/commands/decrypt-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY BLOB","permalink":"/docs/ja/commands/copy-blob"},"next":{"title":"DELETE FROM BLOB","permalink":"/docs/ja/commands/delete-from-blob"}}'),s=t("785893"),r=t("250065");let c={id:"decrypt-blob",title:"DECRYPT BLOB",slug:"/commands/decrypt-blob",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DECRYPT BLOB"})," ( ",(0,s.jsx)(n.em,{children:"toDecrypt"})," ; ",(0,s.jsx)(n.em,{children:"sendPubKey"})," {; ",(0,s.jsx)(n.em,{children:"recipPrivKey"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5F15\u6570"}),(0,s.jsx)(n.th,{children:"\u578B"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"toDecrypt"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"\u5FA9\u53F7\u3059\u308B\u30C7\u30FC\u30BF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"\u8907\u5408\u3055\u308C\u305F\u30C7\u30FC\u30BF"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sendPubKey"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u9001\u4FE1\u8005\u306E\u516C\u958B\u9375"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recipPrivKey"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u53D7\u4FE1\u8005\u306E\u79D8\u5BC6\u9375"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,s.jsxs)(n.p,{children:["DECRYPT BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u3001BLOB ",(0,s.jsx)(n.em,{children:"toDecrypt"}),"\u306E\u5185\u5BB9\u3092\u9001\u4FE1\u8005\u306E\u516C\u958B\u9375",(0,s.jsx)(n.em,{children:"sendPubKey"}),"\u3092\u4F7F\u7528\u3057\u3066\u89E3\u8AAD\u3057\u307E\u3059\u3002\u30AA\u30D7\u30B7\u30E7\u30F3\u3068\u3057\u3066\u3001\u53D7\u4FE1\u8005\u306E\u79D8\u5BC6\u9375",(0,s.jsx)(n.em,{children:"recipPrivKey"}),"\u3082\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9001\u4FE1\u8005\u306E\u516C\u958B\u9375\u3092\u7D0D\u3081\u305FBLOB\u3092\u5F15\u6570",(0,s.jsx)(n.em,{children:"sendPubKey"}),"\u306B\u6E21\u3057\u307E\u3059\u3002\u3053\u306E\u9375\u306F\u3001\u9001\u4FE1\u8005\u304C",(0,s.jsx)(n.a,{href:"/docs/ja/commands/generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",children:"GENERATE ENCRYPTION KEYPAIR"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u751F\u6210\u3057\u3001\u53D7\u4FE1\u8005\u306B\u9001\u4FE1\u3057\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53D7\u4FE1\u8005\u306E\u79D8\u5BC6\u9375\u3092\u7D0D\u3081\u305FBLOB\u3092\u5F15\u6570",(0,s.jsx)(n.em,{children:"recipPrivKey"}),"\u306B\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5F15\u6570\u3092\u6E21\u3059\u5834\u5408\u3001\u53D7\u4FE1\u8005\u306F",(0,s.jsx)(n.a,{href:"/docs/ja/commands/generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",children:"GENERATE ENCRYPTION KEYPAIR"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u4E00\u7D44\u306E\u6697\u53F7\u5316\u9375\u3092\u751F\u6210\u3057\u3001\u516C\u958B\u9375\u3092\u9001\u4FE1\u8005\u306B\u9001\u3063\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u4E00\u7D44\u306E\u9375\u3092\u3082\u3068\u306B\u3057\u305F\u6697\u53F7\u5316\u30B7\u30B9\u30C6\u30E0\u3067\u306F\u3001\u9001\u4FE1\u8005\u306E\u307F\u304C\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u6697\u53F7\u5316\u3092\u884C\u3044\u3001\u304B\u3064\u53D7\u4FE1\u8005\u3060\u3051\u304C\u305D\u306E\u5FA9\u53F7\u3092\u884C\u3048\u308B\u3068\u3044\u3046\u3053\u3068\u304C\u4FDD\u8A3C\u3055\u308C\u307E\u3059\u3002\u4E00\u7D44\u306E\u9375\u3092\u3082\u3068\u306B\u3057\u305F\u6697\u53F7\u5316\u30B7\u30B9\u30C6\u30E0\u306B\u95A2\u3059\u308B\u8A73\u7D30\u306F\u3001",(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",title:"ENCRYPT BLOB",children:"ENCRYPT BLOB"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"DECRYPT BLOB\u30B3\u30DE\u30F3\u30C9\u306F\u3001\uFF08\u610F\u56F3\u7684\u304B\u3069\u3046\u304B\u306B\u95A2\u308F\u3089\u305A\uFF09BLOB\u5185\u5BB9\u306E\u5909\u66F4\u3092\u9632\u3050\u305F\u3081\u3001\u30C1\u30A7\u30C3\u30AF\u30B5\u30E0\u6A5F\u80FD\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u6697\u53F7\u5316\u3057\u305FBLOB\u304C\u640D\u50B7\u3057\u305F\u308A\u5909\u66F4\u3055\u308C\u3066\u3044\u308B\u3068\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F55\u3082\u884C\u308F\u305A\u3001\u30A8\u30E9\u30FC\u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",title:"ENCRYPT BLOB",children:"ENCRYPT BLOB"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u3092\u53C2\u7167"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ja/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ja/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})]}),"\n",(0,s.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,s.jsx)(n.td,{children:"690"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var d=t(667294);let s={},r=d.createContext(s);function c(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);