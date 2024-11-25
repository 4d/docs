"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36030"],{10964:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>t});var d=JSON.parse('{"id":"commands-legacy/expand-blob","title":"EXPAND BLOB","description":"EXPAND BLOB ( BLOB )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/expand-blob.md","sourceDirName":"commands-legacy","slug":"/commands/expand-blob","permalink":"/docs/ja/commands/expand-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexpand-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"expand-blob","title":"EXPAND BLOB","slug":"/commands/expand-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENCRYPT BLOB","permalink":"/docs/ja/commands/encrypt-blob"},"next":{"title":"INSERT IN BLOB","permalink":"/docs/ja/commands/insert-in-blob"}}'),l=s("785893"),r=s("250065");let t={id:"expand-blob",title:"EXPAND BLOB",slug:"/commands/expand-blob",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"EXPAND BLOB"})," ( ",(0,l.jsx)(n.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5F15\u6570"}),(0,l.jsx)(n.th,{children:"\u578B"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"Blob"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"\u5C55\u958B\u3059\u308BBLOB"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,l.jsxs)(n.p,{children:["EXPAND BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,l.jsx)(n.a,{href:"/docs/ja/commands/compress-blob",title:"COMPRESS BLOB",children:"COMPRESS BLOB"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u65E2\u306B\u5727\u7E2E\u3055\u308C\u3066\u3044\u308B",(0,l.jsx)(n.em,{children:"blob"}),"\u3092\u89E3\u51CD\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u547C\u3073\u51FA\u3057\u5F8C\u3001BLOB\u304C\u89E3\u51CD\u3055\u308C\u305F\u5834\u5408\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F1\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002BLOB\u304C\u89E3\u51CD\u3067\u304D\u306A\u304B\u3063\u305F\u5834\u5408\u306F\u3001\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306F0\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u30E1\u30E2\u30EA\u4E0D\u8DB3\u3067\u89E3\u51CD\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u3001\u30A8\u30E9\u30FC\u304C\u8868\u793A\u3055\u308C\u305A\u3001\u30E1\u30BD\u30C3\u30C9\u5B9F\u884C\u3092\u30EC\u30B8\u30E5\u30FC\u30E0\u3057\u307E\u3059\u3002",(0,l.jsx)(n.br,{}),"\n(BLOB\u304C\u5727\u7E2E\u3055\u308C\u3066\u3044\u306A\u304B\u3063\u305F\u308A\u58CA\u308C\u3066\u3044\u305F\u308A\u3059\u308B\u306A\u3069) \u305D\u306E\u4ED6\u306E\u5834\u5408\u3001-10600\u306E\u30A8\u30E9\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F\u3001",(0,l.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["BLOB\u304C\u5727\u7E2E\u3055\u308C\u3066\u3044\u308B\u304B\u3092\u691C\u8A3C\u3059\u308B\u306B\u306F\u3001",(0,l.jsx)(n.a,{href:"/docs/ja/commands/blob-properties",title:"BLOB PROPERTIES",children:"BLOB PROPERTIES"})," \u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u306E\u4F8B\u984C\u306FBLOB ",(0,l.jsx)(n.em,{children:"vxMyBlob"})," \u304C\u5727\u7E2E\u3055\u308C\u3066\u3044\u308B\u304B\u30C6\u30B9\u30C8\u3057\u3001\u5727\u7E2E\u3055\u308C\u3066\u3044\u308C\u3070\u89E3\u51CD\u3057\u307E\u3059:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)\n\xa0If($vlCompressed#Is not compressed)\n\xa0\xa0\xa0\xa0EXPAND BLOB(vxMyBlob)\n\xa0End if\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306E\u4F8B\u984C\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u9078\u629E\u3055\u305B\u3001\u5727\u7E2E\u3055\u308C\u3066\u3044\u308C\u3070\u89E3\u51CD\u3057\u307E\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB PROPERTIES(vxBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCompressed#Is not compressed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EXPAND BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,l.jsx)(n.h4,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,l.jsx)(n.p,{children:"BLOB\u304C\u6B63\u3057\u304F\u89E3\u51CD\u3055\u308C\u308B\u3068OK\u5909\u6570\u306F1\u306B\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/ja/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/ja/commands/compress-blob",children:"COMPRESS BLOB"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var d=s(667294);let l={},r=d.createContext(l);function t(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);