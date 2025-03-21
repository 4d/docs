"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3233"],{968578:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/generate-encryption-keypair","title":"GENERATE ENCRYPTION KEYPAIR","description":"GENERATE ENCRYPTION KEYPAIR ( privKey ; pubKey {; length} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-encryption-keypair.md","sourceDirName":"commands-legacy","slug":"/commands/generate-encryption-keypair","permalink":"/docs/ja/20-R7/commands/generate-encryption-keypair","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-encryption-keypair.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-encryption-keypair","title":"GENERATE ENCRYPTION KEYPAIR","slug":"/commands/generate-encryption-keypair","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GENERATE CERTIFICATE REQUEST","permalink":"/docs/ja/20-R7/commands/generate-certificate-request"},"next":{"title":"\u30BB\u30EC\u30AF\u30B7\u30E7\u30F3","permalink":"/docs/ja/20-R7/commands/theme/Selection"}}'),t=r("785893"),d=r("250065");let c={id:"generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",slug:"/commands/generate-encryption-keypair",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"RSA\u3001\u79D8\u5BC6\u9375\u3001\u304A\u3088\u3073\u516C\u958B\u9375\u306B\u3064\u3044\u3066",id:"rsa\u79D8\u5BC6\u9375\u304A\u3088\u3073\u516C\u958B\u9375\u306B\u3064\u3044\u3066",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," ( ",(0,t.jsx)(n.em,{children:"privKey"})," ; ",(0,t.jsx)(n.em,{children:"pubKey"})," {; ",(0,t.jsx)(n.em,{children:"length"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"privKey"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u79D8\u5BC6\u9375\u3092\u53D7\u3051\u53D6\u308BBLOB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pubKey"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"\u516C\u958B\u9375\u3092\u53D7\u3051\u53D6\u308BBLOB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"length"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u30AD\u30FC\u9577 (\u30D3\u30C3\u30C8) [512...2048] \u30C7\u30D5\u30A9\u30EB\u30C8\u5024 = 512"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsx)(n.p,{children:"GENERATE ENCRYPTION KEYPAIR \u30B3\u30DE\u30F3\u30C9\u306F\u65B0\u3057\u304F1\u5BFE\u306ERSA\u9375\u3092\u751F\u6210\u3057\u307E\u3059\u30024D\u306E\u975E\u5BFE\u79F0\u6697\u53F7\u5316\u6A5F\u80FD\u306F\u3053\u306E\u9375\u3092\u5143\u306B\u3057\u3066\u3044\u3066\u3001\u4E00\u822C\u7684\u306B\u3053\u308C\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8D8A\u3057\u306B\u5B89\u5168\u306A\u30C7\u30FC\u30BF\u4EA4\u63DB\u3092\u884C\u3046\u969B(\u4F8B: 4D Web \u30B5\u30FC\u30D0\u30FC\u3068TLS\u30D7\u30ED\u30C8\u30B3\u30EB\u3092\u4F7F\u7528\u3059\u308B)\u306B\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6CE8:"})," \u30C7\u30A3\u30B9\u30AF\u4E0A\u306E\u30C7\u30FC\u30BF\u3092\u6697\u53F7\u5316\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u30014D \u304C\u63D0\u4F9B\u3059\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u6697\u53F7\u5316\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044(",(0,t.jsx)(n.em,{children:"\u30C7\u30FC\u30BF\u306E\u6697\u53F7\u5316"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167)\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30B3\u30DE\u30F3\u30C9\u304C\u5B9F\u884C\u3055\u308C\u308B\u3068\u3001",(0,t.jsx)(n.em,{children:"privKey"}),"\u3068",(0,t.jsx)(n.em,{children:"pubKey"}),"\u306B\u6E21\u3055\u308C\u305FBLOB\u306B\u306F\u65B0\u3057\u30441\u5BFE\u306E\u6697\u53F7\u9375\u304C\u7D0D\u3081\u3089\u308C\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E\u5F15\u6570",(0,t.jsx)(n.em,{children:"length"}),"\u3092\u4F7F\u7528\u3057\u3066\u9375\u306E\u30B5\u30A4\u30BA (\u30D3\u30C3\u30C8\u5358\u4F4D) \u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u9375\u304C\u5927\u304D\u3044\u307B\u3069\u6697\u53F7\u30B3\u30FC\u30C9\u306E\u89E3\u8AAD\u306F\u56F0\u96E3\u306B\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u305F\u3060\u3057\u9375\u304C\u5927\u304D\u304F\u306A\u308B\u3068\u5B9F\u884C\u6642\u9593\u3084\u5FDC\u7B54\u6642\u9593\u304C\u9577\u304F\u306A\u308A\u3001\u7279\u306B\u4FDD\u8B77\u3055\u308C\u305F\u63A5\u7D9A\u3067\u306F\u3053\u308C\u304C\u9855\u8457\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F (",(0,t.jsx)(n.em,{children:"length"}),"\u3092\u7701\u7565\u3057\u305F\u5834\u5408)\u3001\u751F\u6210\u3055\u308C\u308B\u9375\u306E\u30B5\u30A4\u30BA\u306F512\u30D3\u30C3\u30C8\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u6697\u53F7\u306E\u5B89\u5168\u6027\u3092\u9AD8\u3081\u308B\u305F\u3081\u306B\u983B\u7E41\u306B\u3001\u4F8B\u3048\u30706\u304B\u6708\u3054\u3068\u306B\u9375\u3092\u4EA4\u63DB\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u30022,048\u30D3\u30C3\u30C8\u306E\u9375\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u304C\u3001Web\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u63A5\u7D9A\u901F\u5EA6\u306F\u4F4E\u4E0B\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306Fbase64\u3067\u6697\u53F7\u5316\u3055\u308C\u305FPKCS\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u9375\u3092\u751F\u6210\u3057\u3001\u305D\u306E\u5185\u5BB9\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u306A\u304F\u96FB\u5B50\u30E1\u30FC\u30EB\u306B\u30B3\u30D4\u30FC\uFF06\u30DA\u30FC\u30B9\u30C8\u3067\u304D\u307E\u3059\u3002\u4E00\u5BFE\u306E\u9375\u304C\u751F\u6210\u3055\u308C\u305F\u3089 (\u4F8B\u3048\u3070",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/blob-to-document",children:"BLOB TO DOCUMENT"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066) PEM\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u3053\u308C\u3089\u306E\u9375\u3092\u5B89\u5168\u306A\u5834\u6240\u306B\u4FDD\u7BA1\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8B66\u544A:"})," \u79D8\u5BC6\u9375\u306F\u5E38\u306B\u79D8\u5BC6\u306B\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"rsa\u79D8\u5BC6\u9375\u304A\u3088\u3073\u516C\u958B\u9375\u306B\u3064\u3044\u3066",children:"RSA\u3001\u79D8\u5BC6\u9375\u3001\u304A\u3088\u3073\u516C\u958B\u9375\u306B\u3064\u3044\u3066"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," \u3067\u4F7F\u7528\u3059\u308BRSA\u6697\u53F7\u65B9 \u5F0F\u306F\u3001\u79D8\u5BC6\u9375\u3068\u516C\u958B\u9375\u3068\u3044\u3046\u4E8C\u91CD\u9375\u6697\u53F7\u30B7\u30B9\u30C6\u30E0\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002\u305D\u306E\u540D\u304C\u793A\u3059\u901A\u308A\u3001\u516C\u958B\u9375\u306F\u7B2C\u4E09\u8005\u306B\u6E21\u3055\u308C\u3001\u60C5\u5831\u306E\u5FA9\u53F7\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002\u516C\u958B\u9375\u306F\u60C5\u5831\u306E\u6697\u53F7\u5316\u306B\u4F7F\u308F\u308C\u308B\u30E6\u30CB\u30FC\u30AF\u306A\u79D8\u5BC6\u9375\u3068\u4E00\u5BFE\u3067\u3059\u3002\u3053\u306E\u3088\u3046\u306B\u3001\u79D8\u5BC6\u9375\u306F\u6697\u53F7\u5316\u306B\u4F7F\u7528\u3055\u308C\u3001\u516C\u958B\u9375\u306F\u5FA9\u53F7\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059 (\u307E\u305F\u306F\u305D\u306E\u9006)\u3002\u4E00\u65B9\u306E\u9375\u3092\u4F7F\u3063\u3066\u6697\u53F7\u5316\u3055\u308C\u305F\u60C5\u5831\u306F\u3001\u3082\u3046\u4E00\u65B9\u306E\u9375\u3092\u4F7F\u7528\u3057\u306A\u3051\u308C\u3070\u89E3\u8AAD\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["TLS/SSL\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u6697\u53F7\u5316\u6A5F\u80FD\u306F\u3053\u306E\u539F\u7406\u306B\u57FA\u3065\u3044\u3066\u304A\u308A\u3001\u8A3C\u660E\u66F8\u306B\u7D0D\u3081\u3089\u308C\u305F\u516C\u958B\u9375\u304C\u30D6\u30E9\u30A6\u30B6\u306B\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002(\u8A73\u7D30\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"\u306E\u7BC0\u3092\u53C2\u7167)\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306E\u6697\u53F7\u5316\u30E2\u30FC\u30C9\u306F\u3001",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/encrypt-blob",children:"ENCRYPT BLOB"}),"\u304A\u3088\u3073",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/decrypt-blob",children:"DECRYPT BLOB"}),"\u306E1\u756A\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u3082\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u7528\u3044\u308B\u516C\u958B\u9375\u306F\u6975\u79D8\u306B\u767A\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",(0,t.jsx)(n.br,{}),"\n\u7279\u5B9A\u306E\u53D7\u4FE1\u8005\u3092\u5FA9\u53F7\u53EF\u80FD\u306A\u552F\u4E00\u306E\u4EBA\u3068\u3057\u3001\u304B\u3064\u9001\u4FE1\u8005\u304C\u6697\u53F7\u5316\u3092\u884C\u3063\u305F\u4EBA\u3067\u3042\u308B\u3053\u3068\u3092\u4FDD\u8A3C\u3059\u308B\u305F\u3081\u306B\u30012\u4EBA\u306E\u516C\u958B\u9375\u3068\u79D8\u5BC6\u9375\u3092\u5408\u308F\u305B\u3066\u60C5\u5831\u306E\u6697\u53F7\u5316\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u539F\u7406\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/encrypt-blob",children:"ENCRYPT BLOB"}),"\u304A\u3088\u3073",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/decrypt-blob",children:"DECRYPT BLOB"}),"\u306E2\u756A\u76EE\u306E\u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u3067\u793A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/encrypt-blob",title:"ENCRYPT BLOB",children:"ENCRYPT BLOB"}),"\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ja/20-R7/commands/generate-certificate-request",children:"GENERATE CERTIFICATE REQUEST"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,t.jsx)(n.td,{children:"688"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);