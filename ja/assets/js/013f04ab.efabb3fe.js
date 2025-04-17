"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78916"],{243766:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/receive-variable","title":"RECEIVE VARIABLE","description":"RECEIVE VARIABLE ( variable )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/receive-variable.md","sourceDirName":"commands-legacy","slug":"/commands/receive-variable","permalink":"/docs/ja/20-R8/commands/receive-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"receive-variable","title":"RECEIVE VARIABLE","slug":"/commands/receive-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE RECORD","permalink":"/docs/ja/20-R8/commands/receive-record"},"next":{"title":"SEND PACKET","permalink":"/docs/ja/20-R8/commands/send-packet"}}'),d=r("785893"),c=r("250065");let t={id:"receive-variable",title:"RECEIVE VARIABLE",slug:"/commands/receive-variable",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:2},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:2},{value:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",level:2},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:2},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"RECEIVE VARIABLE"})," ( ",(0,d.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u5F15\u6570"}),(0,d.jsx)(n.th,{children:"\u578B"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"variable"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u3059\u308B\u5909\u6570"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,d.jsxs)(n.p,{children:["RECEIVE VARIABLE \u306F\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u3067\u958B\u3044\u305F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u307E\u305F\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u3089\u3001",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u9001\u4FE1\u3057\u305F",(0,d.jsx)(n.em,{children:"variable"}),"\u3092\u53D7\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9\u3067\u306F\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u30B3\u30FC\u30EB\u524D\u306B\u5909\u6570\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u5909\u6570\u304C\u4F5C\u6210\u3055\u308C\u3001\u53D7\u4FE1\u5185\u5BB9\u306B\u5FDC\u3058\u305F\u30BF\u30A4\u30D7\u4ED8\u3051\u304C\u884C\u308F\u308C\u307E\u3059\u3002\u30B3\u30F3\u30D1\u30A4\u30EB\u5F8C\u30E2\u30FC\u30C9\u3067\u306F\u3001\u5909\u6570\u306E\u30BF\u30A4\u30D7\u306F\u53D7\u4FE1\u3059\u308B\u3082\u306E\u3068\u540C\u3058\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u4E21\u65B9\u306E\u5834\u5408\u3068\u3082\u3001\u5909\u6570\u306E\u5185\u5BB9\u306F\u53D7\u4FE1\u3057\u305F\u5024\u3067\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u30A4\u30F3\u30BF\u30D7\u30EA\u30BF\u30E2\u30FC\u30C9\u3067\u306F\u3001RECEIVE VARIABLE\u306E\u547C\u3073\u51FA\u3057\u524D\u306B\u5909\u6570\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u3001\u5909\u6570\u304C\u4F5C\u6210\u3055\u308C\u3001\u53D7\u4FE1\u5185\u5BB9\u306B\u5FDC\u3058\u305F\u578B\u4ED8\u3051\u304C\u884C\u308F\u308C\u3001\u4EE3\u5165\u3055\u308C\u307E\u3059\u3002\u30B3\u30F3\u30D1\u30A4\u30EB\u30E2\u30FC\u30C9\u3067\u306F\u3001\u5909\u6570\u306E\u30BF\u30A4\u30D7\u306F\u53D7\u4FE1\u3059\u308B\u3082\u306E\u3068\u540C\u3058\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u4E21\u65B9\u306E\u5834\u5408\u3068\u3082\u3001\u5909\u6570\u306E\u5185\u5BB9\u306F\u53D7\u4FE1\u3057\u305F\u5024\u3067\u7F6E\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304B\u3089\u5909\u6570\u3092\u53D7\u4FE1\u3059\u308B\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u958B\u304B\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/append-document",title:"Append document",children:"Append document"})," \u307E\u305F\u306F ",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/create-document",title:"Create document",children:"Create document"}),"\u3067\u958B\u304B\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u3001RECEIVE VARIABLE\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3084\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u3092\u4ECB\u3057\u3066\u914D\u5217\u3092\u9001\u53D7\u4FE1\u3057\u305F\u3044\u5834\u5408\u3001",(0,d.jsx)(n.em,{children:"BLOB\u30B3\u30DE\u30F3\u30C9"}),"\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["RECEIVE VARIABLE\u306E\u5B9F\u884C\u4E2D\u3001Ctrl-Alt-Shift (Windows) \u307E\u305F\u306FCommand-Option-Shift (Macintosh) \u3092\u62BC\u3057\u3066\u3001\u53D7\u4FE1\u3092\u4E2D\u65AD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4E2D\u65AD\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u30A8\u30E9\u30FC-9994\u304C\u751F\u6210\u3055\u308C\u307E\u3059\u3002",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"\u3092\u4F7F\u7528\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u30A8\u30E9\u30FC\u51E6\u7406\u30E1\u30BD\u30C3\u30C9\u306B\u3088\u308A\u3001\u3053\u306E\u30A8\u30E9\u30FC\u3092\u3068\u3089\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u901A\u5E38\u3001\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u7D4C\u7531\u3067\u306E\u901A\u4FE1\u306E\u5834\u5408\u306B\u306E\u307F\u3001\u53D7\u4FE1\u306E\u4E2D\u65AD\u51E6\u7406\u3092\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"})," \u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u3092\u53C2\u7167"]}),"\n",(0,d.jsx)(n.h2,{id:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8",children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u304A\u3088\u3073\u30BB\u30C3\u30C8"}),"\n",(0,d.jsx)(n.p,{children:"\u5909\u6570\u3092\u53D7\u4FE1\u3059\u308B\u3068\u30B7\u30B9\u30C6\u30E0\u5909\u6570OK\u306B1\u304C\u8A2D\u5B9A\u3055\u308C\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u30700\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/on-err-call",children:"ON ERR CALL"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/ja/20-R8/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,d.jsx)(n.td,{children:"81"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u66F4\u65B0\u3059\u308B"}),(0,d.jsx)(n.td,{children:"OK\u3001error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var s=r(667294);let d={},c=s.createContext(d);function t(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);