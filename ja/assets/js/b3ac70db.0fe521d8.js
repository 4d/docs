"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68848"],{614790:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/discover-data-key","title":"Discover data key","description":"Discover data key  : Boolean","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/discover-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/discover-data-key","permalink":"/docs/ja/20-R7/commands/discover-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdiscover-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"discover-data-key","title":"Discover data key","slug":"/commands/discover-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Decrypt data BLOB","permalink":"/docs/ja/20-R7/commands/decrypt-data-blob"},"next":{"title":"Encrypt data BLOB","permalink":"/docs/ja/20-R7/commands/encrypt-data-blob"}}'),d=s("785893"),r=s("250065");let a={id:"discover-data-key",title:"Discover data key",slug:"/commands/discover-data-key",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Discover data key"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3059\u308B\u6709\u52B9\u306A\u6697\u53F7\u5316\u30AD\u30FC\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306B\u306FTrue\u3001\u305D\u3046\u3067\u306A\u3044\u5834\u5408\u306B\u306FFalse"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Discover data key"})," \u30B3\u30DE\u30F3\u30C9\u306F\u3001\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u5FDC\u3059\u308B\u6709\u52B9\u306A\u6697\u53F7\u5316\u30AD\u30FC\u3092\u3001\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u5168\u3066\u306E\u30C7\u30D0\u30A4\u30B9\u306E\u30EB\u30FC\u30C8\u30EC\u30D9\u30EB\u3067\u691C\u7D22\u3057\u3001\u305D\u308C\u306B\u6210\u529F\u3057\u305F\u5834\u5408\u306B\u306F",(0,d.jsx)(n.strong,{children:"True"})," \u3092\u8FD4\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u691C\u7D22\u5BFE\u8C61\u3068\u306A\u308B\u63A5\u7D9A\u3055\u308C\u305F\u30C7\u30D0\u30A4\u30B9\u306B\u306F\u3001USB\u30AD\u30FC\u3084\u5916\u90E8\u30C7\u30A3\u30B9\u30AF\u3082\u542B\u307E\u308C\u307E\u3059\u3002\u6709\u52B9\u306A\u6697\u53F7\u5316\u30AD\u30FC\u306F\u3001\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3078\u306E\u8AAD\u307F/\u66F8\u304D\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u884C\u3046\u305F\u3081\u306B\u306F\u5FC5\u8981\u3067\u3059\u3002\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u4F8B\u3048\u3070\u3001\u30E6\u30FC\u30B6\u30FC\u304CUSB \u30AD\u30FC\u3092\u633F\u5165\u3057\u305F\u5F8C\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u6642\u306A\u3069\u306B\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"}),"\n",(0,d.jsxs)(n.p,{children:['\u30AD\u30FC\u30D5\u30A1\u30A4\u30EB(".4DKeyChain" \u62E1\u5F35\u5B50\u306E\u30D5\u30A1\u30A4\u30EB)\u306F\u63A5\u7D9A\u3055\u308C\u305F\u30C7\u30D0\u30A4\u30B9\u306E\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(\u30D5\u30A9\u30EB\u30C0\u968E\u5C64\u306E\u4E2D\u307E\u3067\u306F\u691C\u7D22\u3055\u308C\u307E\u305B\u3093)\u3002\u6697\u53F7\u5316\u30AD\u30FC\u306FJSON \u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059(',(0,d.jsx)(n.em,{children:"4D \u30C7\u30B6\u30A4\u30F3\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"}),"\u306E",(0,d.jsx)(n.em,{children:"\u30C7\u30FC\u30BF\u6697\u53F7\u5316\u30AD\u30FC\u3092\u30D5\u30A1\u30A4\u30EB\u306B\u4FDD\u5B58\u3059\u308B"})," \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044)\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8FD4\u3055\u308C\u308B\u5024"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u6709\u52B9\u306A\u6697\u53F7\u5316\u30AD\u30FC\u304C\u898B\u3064\u304B\u3063\u305F\u5834\u5408\u306B\u306F",(0,d.jsx)(n.strong,{children:"True"}),"\u3092\u8FD4\u3057\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059:\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u6697\u53F7\u5316\u30AD\u30FC\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B(\u8AAD\u307F/\u66F8\u304D\u64CD\u4F5C\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u53EF\u80FD)\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u6697\u53F7\u5316\u30AD\u30FC\u306F4D \u30AD\u30FC\u30C1\u30A7\u30FC\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u73FE\u5728\u958B\u304B\u308C\u3066\u3044\u308B\u30C7\u30FC\u30BF\u30D5\u30A1\u30A4\u30EB\u306B\u5BFE\u3057\u3066\u6709\u52B9\u306A\u6697\u53F7\u5316\u30AD\u30FC\u304C\u898B\u3064\u304B\u3089\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u306F",(0,d.jsx)(n.strong,{children:"False"})," \u304C\u8FD4\u3055\u308C\u3001\u3053\u306E\u5834\u5408\u306B\u306F\u30C7\u30FC\u30BF\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u4E0D\u53EF\u80FD\u3068\u306A\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0var $keyFound : Boolean\n\xa0\n\xa0$status:=ds.encryptionStatus()\n\xa0\n\xa0If(($status.isEncrypted)&(Not($status.keyProvided)))\xa0// \u30AD\u30FC\u304C\u63D0\u4F9B\u3055\u308C\u3066\u3044\u306A\u3044\n\xa0\xa0// \u30AD\u30FC\u304C\u306A\u3044\u306E\u3067\u6697\u53F7\u5316\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3078\u306F\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u3044\n\xa0\xa0\xa0\xa0$keyFound:=Discover data key\xa0// \u30AD\u30FC\u3092\u691C\u7D22\n\xa0\xa0\xa0\xa0If($keyFound=True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("A valid encryption key has been found.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R7/commands/new-data-key",children:"New data key"})}),"\n",(0,d.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"1639"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var t=s(667294);let d={},r=t.createContext(d);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);