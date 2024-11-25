"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87312"],{532990:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"commands-legacy/set-blob-size","title":"SET BLOB SIZE","description":"SET BLOB SIZE ( BLOB ; size {; filler} )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-blob-size.md","sourceDirName":"commands-legacy","slug":"/commands/set-blob-size","permalink":"/docs/ja/commands/set-blob-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-blob-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-blob-size","title":"SET BLOB SIZE","slug":"/commands/set-blob-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REAL TO BLOB","permalink":"/docs/ja/commands/real-to-blob"},"next":{"title":"TEXT TO BLOB","permalink":"/docs/ja/commands/text-to-blob"}}'),t=s("785893"),d=s("250065");let i={id:"set-blob-size",title:"SET BLOB SIZE",slug:"/commands/set-blob-size",displayed_sidebar:"docs"},r=void 0,c={},o=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u6CE8",id:"\u6CE8",level:5},{value:"\u30A8\u30E9\u30FC\u51E6\u7406",id:"\u30A8\u30E9\u30FC\u51E6\u7406",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET BLOB SIZE"})," ( ",(0,t.jsx)(n.em,{children:"BLOB"})," ; ",(0,t.jsx)(n.em,{children:"size"})," {; ",(0,t.jsx)(n.em,{children:"filler"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5F15\u6570"}),(0,t.jsx)(n.th,{children:"\u578B"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB\u30D5\u30A3\u30FC\u30EB\u30C9\u307E\u305F\u306F\u5909\u6570"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"size"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB\u306E\u65B0\u3057\u3044\u30B5\u30A4\u30BA"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"filler"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"\u57CB\u3081\u8FBC\u307F\u6587\u5B57\u306EASCII\u30B3\u30FC\u30C9"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,t.jsxs)(n.p,{children:["SET BLOB SIZE \u30B3\u30DE\u30F3\u30C9\u306F\u3001",(0,t.jsx)(n.em,{children:"size"}),"\u5F15\u6570\u306B\u6E21\u3055\u308C\u305F\u5024\u306B\u5F93\u3063\u3066\u3001BLOB ",(0,t.jsx)(n.em,{children:"blob"}),"\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["BLOB\u306B\u65B0\u3057\u3044\u30D0\u30A4\u30C8\u3092\u5272\u308A\u5F53\u3066\u3001\u305D\u308C\u3089\u306E\u30D0\u30A4\u30C8\u3092\u7279\u5B9A\u306E\u5024\u3067\u521D\u671F\u5316\u3057\u305F\u3044\u5834\u5408\u306B\u306F\u3001\u305D\u306E\u5024 (0..255) \u3092\u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570\u306E",(0,t.jsx)(n.em,{children:"filler"}),"\u306B\u6E21\u3057\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h5,{id:"\u6CE8",children:"\u6CE8"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u5F15\u6570\u3068\u3057\u3066\u6E21\u3055\u308C\u305FBlob \u3092\u5909\u66F4\u3059\u308B\u305F\u3081\u3001Blob \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8(4D.Blob \u578B)\u306F\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002developer.4d.com \u3067\u306E\u306E ",(0,t.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," \u306E\u30DA\u30FC\u30B8\u3092\u53C2\u7167\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u30A8\u30E9\u30FC\u51E6\u7406",children:"\u30A8\u30E9\u30FC\u51E6\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["\u30E1\u30E2\u30EA\u304C\u8DB3\u308A\u305A\u3001BLOB\u306E\u30EA\u30B5\u30A4\u30BA\u304C\u3067\u304D\u306A\u3044\u3068\u304D\u3001\u30A8\u30E9\u30FC-108\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u30A8\u30E9\u30FC\u306F",(0,t.jsx)(n.a,{href:"/docs/ja/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u3067\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,t.jsx)(n.p,{children:"\u5927\u304D\u306ABLOB\u30D7\u30ED\u30BB\u30B9\u307E\u305F\u306F\u30A4\u30F3\u30BF\u30FC\u30D7\u30ED\u30BB\u30B9\u5909\u6570\u306E\u51E6\u7406\u3092\u7D42\u4E86\u3057\u305F\u5F8C\u3001\u5360\u6709\u3057\u3066\u3044\u305F\u30E1\u30E2\u30EA\u3092\u89E3\u653E\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3057\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(aProcessBLOB;0)\n\xa0SET BLOB SIZE(<>anInterprocessBLOB;0)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0B\u306E\u4F8B\u3067\u306F\u30010xFF\u304C\u57CB\u3081\u8FBC\u307E\u308C\u305F16KB\u306EBLOB\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var vxData : Blob\n\xa0SET BLOB SIZE(vxData;16*1024;0xFF)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ja/commands/blob-size",children:"BLOB size"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var l=s(667294);let t={},d=l.createContext(t);function i(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);