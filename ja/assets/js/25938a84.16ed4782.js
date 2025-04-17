"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72108"],{137644:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/delete-from-blob","title":"DELETE FROM BLOB","description":"DELETE FROM BLOB ( BLOB ; offset ; len )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-from-blob.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-blob","permalink":"/docs/ja/20-R8/commands/delete-from-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-from-blob","title":"DELETE FROM BLOB","slug":"/commands/delete-from-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DECRYPT BLOB","permalink":"/docs/ja/20-R8/commands/decrypt-blob"},"next":{"title":"DOCUMENT TO BLOB","permalink":"/docs/ja/20-R8/commands/document-to-blob"}}'),d=t("785893"),l=t("250065");let r={id:"delete-from-blob",title:"DELETE FROM BLOB",slug:"/commands/delete-from-blob",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u6CE8",id:"\u6CE8",level:3},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function h(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FROM BLOB"})," ( ",(0,d.jsx)(n.em,{children:"BLOB"})," ; ",(0,d.jsx)(n.em,{children:"offset"})," ; ",(0,d.jsx)(n.em,{children:"len"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D0\u30A4\u30C8\u5217\u3092\u524A\u9664\u3059\u308BBLOB"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"offset"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u30D0\u30A4\u30C8\u524A\u9664\u958B\u59CB\u4F4D\u7F6E"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"len"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"\u524A\u9664\u3059\u308B\u30D0\u30A4\u30C8\u6570"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["DELETE FROM BLOB \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,d.jsx)(n.em,{children:"len"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D0\u30A4\u30C8\u6570\u3092\u3001",(0,d.jsx)(n.em,{children:"blob"}),"\u306E",(0,d.jsx)(n.em,{children:"offset"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u4F4D\u7F6E\uFF08BLOB\u306E\u6700\u521D\u304B\u3089\u76F8\u5BFE\u7684\u306A\u4F4D\u7F6E\u3068\u3057\u3066\u8868\u3055\u308C\u308B\uFF09\u304B\u3089\u524A\u9664\u3057\u307E\u3059\u3002BLOB\u306F",(0,d.jsx)(n.em,{children:"len"}),"\u3067\u6307\u5B9A\u3055\u308C\u305F\u30D0\u30A4\u30C8\u6570\u5206\u3060\u3051\u7E2E\u5C0F\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305FBlob \u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001Blob \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(4D.Blob \u578B)\u306F\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002developer.4d.com \u3067\u306E\u306E ",(0,d.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/insert-in-blob",children:"INSERT IN BLOB"})}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"560"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var s=t(667294);let d={},l=s.createContext(d);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);