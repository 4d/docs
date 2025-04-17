"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85943"],{613859:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/insert-in-blob","title":"INSERT IN BLOB","description":"INSERT IN BLOB ( BLOB ; offset ; len {; filler} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/insert-in-blob.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-blob","permalink":"/docs/ja/20-R8/commands/insert-in-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"insert-in-blob","title":"INSERT IN BLOB","slug":"/commands/insert-in-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPAND BLOB","permalink":"/docs/ja/20-R8/commands/expand-blob"},"next":{"title":"INTEGER TO BLOB","permalink":"/docs/ja/20-R8/commands/integer-to-blob"}}'),d=s("785893"),l=s("250065");let r={id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u6CE8",id:"\u6CE8",level:3},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(n){let e={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"INSERT IN BLOB"})," ( ",(0,d.jsx)(e.em,{children:"BLOB"})," ; ",(0,d.jsx)(e.em,{children:"offset"})," ; ",(0,d.jsx)(e.em,{children:"len"})," {; ",(0,d.jsx)(e.em,{children:"filler"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5F15\u6570"}),(0,d.jsx)(e.th,{children:"\u578B"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"Blob"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D0\u30A4\u30C8\u5217\u3092\u633F\u5165\u3059\u308BBLOB"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"offset"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30D0\u30A4\u30C8\u5217\u633F\u5165\u958B\u59CB\u4F4D\u7F6E"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"len"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u633F\u5165\u3059\u308B\u30D0\u30A4\u30C8\u6570"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"filler"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"\u2192"}),(0,d.jsx)(e.td,{children:"\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D0\u30A4\u30C8\u5024 (0x00..0xFF) \u7701\u7565\u3057\u305F\u5834\u54080x00"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(e.p,{children:["INSERT IN BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(e.em,{children:"blob"}),"\u306E",(0,d.jsx)(e.em,{children:"offset"}),"\u3067\u6307\u5B9A\u3057\u305F\u4F4D\u7F6E\u306B\u3001",(0,d.jsx)(e.em,{children:"len"}),"\u3067\u6307\u5B9A\u3057\u305F\u6570\u306E\u30D0\u30A4\u30C8\u3092\u633F\u5165\u3057\u307E\u3059\u3002BLOB\u306F",(0,d.jsx)(e.em,{children:"len"}),"\u30D0\u30A4\u30C8\u3060\u3051\u5927\u304D\u304F\u306A\u308A\u307E\u3059\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u30AA\u30D7\u30B7\u30E7\u30F3\u306E",(0,d.jsx)(e.em,{children:"filler"}),"\u5F15\u6570\u3092\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u3001BLOB\u306B\u633F\u5165\u3055\u308C\u308B\u30D0\u30A4\u30C8\u306F0x00\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u3001",(0,d.jsx)(e.em,{children:"filler"}),"\u306B\u6E21\u3057\u305F\u5024\u306B\u8A2D\u5B9A\u3055\u308C\u307E\u3059 (\u30E2\u30B8\u30E5\u30FC\u30ED 256 - 0..255)\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u547C\u3073\u51FA\u3057\u524D\u306B\u3001",(0,d.jsx)(e.em,{children:"offset"}),"\u5F15\u6570\u306B\u306FBLOB\u306E\u5148\u982D\u304B\u3089\u76F8\u5BFE\u7684\u306A\u633F\u5165\u4F4D\u7F6E\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305FBlob \u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001Blob \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(4D.Blob \u578B)\u306F\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002developer.4d.com \u3067\u306E\u306E ",(0,d.jsx)(e.em,{children:"Passing blobs and blob objects to 4D commands"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.a,{href:"/docs/ja/20-R8/commands/delete-from-blob",children:"DELETE FROM BLOB"})}),"\n",(0,d.jsx)(e.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(e.td,{children:"559"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function x(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return r}});var t=s(667294);let d={},l=t.createContext(d);function r(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);