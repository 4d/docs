"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47890"],{225120:function(n,e,t){t.r(e),t.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>a,toc:()=>i,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/encrypt-data-blob","title":"Encrypt data BLOB","description":"Encrypt data BLOB ( blobToEncrypt ; keyObject | passPhrase ; salt ; encryptedBLOB ) : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/encrypt-data-blob.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-blob","permalink":"/docs/ja/commands/encrypt-data-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"encrypt-data-blob","title":"Encrypt data BLOB","slug":"/commands/encrypt-data-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Discover data key","permalink":"/docs/ja/commands/discover-data-key"},"next":{"title":"Encrypt data file","permalink":"/docs/ja/commands/encrypt-data-file"}}'),r=t("785893"),s=t("250065");let c={id:"encrypt-data-blob",title:"Encrypt data BLOB",slug:"/commands/encrypt-data-blob",displayed_sidebar:"docs"},l=void 0,a={},i=[{value:"\u8A73\u7D30",id:"\u8A73\u7D30",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Encrypt data BLOB"})," ( ",(0,r.jsx)(e.em,{children:"blobToEncrypt"})," ; keyObject | passPhrase ; ",(0,r.jsx)(e.em,{children:"salt"})," ; ",(0,r.jsx)(e.em,{children:"encryptedBLOB"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5F15\u6570"}),(0,r.jsx)(e.th,{children:"\u578B"}),(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"blobToEncrypt"}),(0,r.jsx)(e.td,{children:"Blob"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u6697\u53F7\u5316\u3057\u305F\u3044BLOB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"keyObject | passPhrase"}),(0,r.jsx)(e.td,{children:"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8, \u30C6\u30AD\u30B9\u30C8"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u6697\u53F7\u5316\u9375\u3092\u683C\u7D0D\u3057\u305FJSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3001\u307E\u305F\u306F\u76F4\u63A5\u6697\u53F7\u5316\u9375\u3092\u751F\u6210\u3059\u308B\u305F\u3081\u306E\u30D1\u30B9\u30D5\u30EC\u30FC\u30BA(\u30C6\u30AD\u30B9\u30C8)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"salt"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"\u2192"}),(0,r.jsx)(e.td,{children:"\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u305F\u3081\u306E\u8FFD\u52A0\u306Esalt"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"encryptedBlob"}),(0,r.jsx)(e.td,{children:"Blob"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u6697\u53F7\u5316\u3055\u308C\u305FBLOB"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"\u2190"}),(0,r.jsx)(e.td,{children:"\u6697\u53F7\u5316\u304C\u6B63\u5E38\u306B\u5B9F\u884C\u3055\u308C\u305F\u5834\u5408\u306B\u306FTrue\u3001\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306B\u306FFalse"})]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"\u8A73\u7D30",children:"\u8A73\u7D30"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Encrypt data BLOB"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,r.jsx)(e.em,{children:"blobToEncrypt"})," \u5F15\u6570\u306EBLOB \u3092\u30014D \u304C\u30C7\u30FC\u30BF\u306E\u6697\u53F7\u5316\u306B\u4F7F\u7528\u3059\u308B\u306E\u3068\u540C\u3058\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0(AES-256) \u3092\u4F7F\u7528\u3057\u3066\u6697\u53F7\u5316\u3057\u3001\u305D\u306E\u7D50\u679C\u3092",(0,r.jsx)(e.em,{children:"encryptedBlob"})," \u5F15\u6570\u306B\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["BLOB \u3092\u6697\u53F7\u5316\u3059\u308B\u306E\u306B\u306F\u3001",(0,r.jsx)(e.em,{children:"keyObject"})," \u307E\u305F\u306F ",(0,r.jsx)(e.em,{children:"passPhrase"})," \u306E\u3044\u3065\u308C\u304B\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"keyObject"}),": \u6697\u53F7\u9375\u3092\u683C\u7D0D\u3057\u305FJSON \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002\u305D\u306E\u69CB\u9020\u306F\u3001",(0,r.jsx)(e.a,{href:"/docs/ja/commands/new-data-key",children:"New data key"})," \u30B3\u30DE\u30F3\u30C9\u306B\u3088\u3063\u3066\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u540C\u3058\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"passPhrase"}),": \u6697\u53F7\u9375\u3092\u751F\u6210\u3059\u308B\u306E\u306B\u4F7F\u7528\u3057\u305F\u6587\u5B57\u5217\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"salt"})," \u5F15\u6570\u306B\u306F\u3001\u6697\u53F7\u5316\u3092\u3088\u308A\u5805\u7262\u306B\u3059\u308B\u305F\u3081\u306B\u4F7F\u7528\u3055\u308C\u308B\u6570\u5B57\u3092\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6697\u53F7\u5316\u306B\u6210\u529F\u3057\u305F\u5834\u5408\u3001\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306F",(0,r.jsx)(e.em,{children:"encryptedBlob"})," \u5F15\u6570\u306B\u8FD4\u3055\u308C\u3001\u30B3\u30DE\u30F3\u30C9\u306FTrue \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u305F\u5834\u5408\u306B\u306F\u3001\u7A7A\u306EBLOB \u304C\u8FD4\u3055\u308C\u3001\u30B3\u30DE\u30F3\u30C9\u306FFalse \u3092\u8FD4\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6CE8:"})," ",(0,r.jsx)(e.strong,{children:"Encrypt data BLOB"})," \u3092\u4F7F\u7528\u3057\u3066BLOB \u3092\u6697\u53F7\u5316\u3059\u308B\u5834\u5408\u3001\u8FD4\u3055\u308C\u308B",(0,r.jsx)(e.em,{children:"encryptedBlob"})," \u5F15\u6570\u5185\u306EBLOB \u306F\u300116 \u30D0\u30A4\u30C8\u306E\u6574\u6570\u500D\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u6697\u53F7\u5316\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306B\u3088\u308B\u3082\u306E\u3067\u3059\u3002\u7D50\u679C\u3068\u3057\u3066\u3001\u3082\u3057",(0,r.jsx)(e.em,{children:"blobToEncrypt"})," \u5F15\u6570\u306B\u6E21\u3059BLOB \u304C16 \u30D0\u30A4\u30C8\u306E\u6574\u6570\u500D\u3067\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u30B3\u30DE\u30F3\u30C9\u306F\u81EA\u52D5\u7684\u306B\u672B\u5C3E\u306Bnull \u30D0\u30A4\u30C8\u3092\u8FFD\u52A0\u3057\u3066BLOB \u309216\u30D0\u30A4\u30C8\u306E\u6574\u6570\u500D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002BLOB \u3092",(0,r.jsx)(e.a,{href:"/docs/ja/commands/decrypt-data-blob",children:"Decrypt data BLOB"})," \u3067\u5FA9\u53F7\u5316\u3059\u308B\u969B\u306B\u30A8\u30E9\u30FC\u304C\u8D77\u304D\u308B\u306E\u3092\u907F\u3051\u308B\u305F\u3081\u3001\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3067\u306F\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3059\u308B\u969B\u306B\u306F",(0,r.jsx)(e.em,{children:"blobToEncrypt"})," \u5F15\u6570\u306E\u30B5\u30A4\u30BA\u3092\u7BA1\u7406\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306E\u8A73\u7D30\u306A\u3084\u308A\u65B9\u306B\u3064\u3044\u3066\u306F\u3001",(0,r.jsx)(e.a,{href:"https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/",children:"\u3053\u3061\u3089\u306E\u30D6\u30ED\u30B0\u8A18\u4E8B(\u82F1\u6587)"})," \u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsx)(e.p,{children:"\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306ERESOURCES \u30D5\u30A9\u30EB\u30C0\u5185\u306B\u3042\u308B\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u6697\u53F7\u5316\u3059\u308B\u5834\u5408\u3092\u8003\u3048\u307E\u3059:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-4d",children:'\xa0var $fileToEncrypt;$encryptedFile : 4D.File\n\xa0var $blobToEncrypt;$encryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToEncrypt:=File("/RESOURCES/confidential.txt")\n\xa0$encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0\n\xa0$blobToencrypt:=$fileToEncrypt.getContent()\n\xa0\n\xa0$result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)\n\xa0$encryptedFile.setContent($encryptedBlob)\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/ja/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/encrypt-data-file",children:"Encrypt data file"}),(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.a,{href:"/docs/ja/commands/new-data-key",children:"New data key"})]}),"\n",(0,r.jsx)(e.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{}),(0,r.jsx)(e.th,{})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(e.td,{children:"1773"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return c}});var d=t(667294);let r={},s=d.createContext(r);function c(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);