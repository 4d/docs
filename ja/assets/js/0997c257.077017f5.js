"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81999"],{392597:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>d,assets:()=>l,toc:()=>i,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/send-variable","title":"SEND VARIABLE","description":"SEND VARIABLE ( variable )","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/send-variable.md","sourceDirName":"commands-legacy","slug":"/commands/send-variable","permalink":"/docs/ja/commands/send-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-variable","title":"SEND VARIABLE","slug":"/commands/send-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND RECORD","permalink":"/docs/ja/commands/send-record"},"next":{"title":"SET CHANNEL","permalink":"/docs/ja/commands/set-channel"}}'),r=s("785893"),t=s("250065");let c={id:"send-variable",title:"SEND VARIABLE",slug:"/commands/send-variable",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SEND VARIABLE"})," ( ",(0,r.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"variable"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u9001\u4FE1\u3059\u308B\u5909\u6570"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["SEND VARIABLE \u306F\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u3067\u958B\u3044\u305F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u307E\u305F\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B",(0,r.jsx)(n.em,{children:"variable"}),"\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002\u5909\u6570\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"}),"\u3067\u306A\u3051\u308C\u3070\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u306E\u3067\u304D\u306A\u3044\u7279\u5225\u306A\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u9001\u4FE1\u3055\u308C\u307E\u3059\u3002SEND VARIABLE\u306F\u3001\uFF08\u578B\u3068\u5024\u3092\u542B\u3080\uFF09\u5B8C\u5168\u306A\u5909\u6570\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5909\u6570\u3092\u9001\u4FE1\u3059\u308B\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u958B\u304B\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/append-document",title:"Append document",children:"Append document"})," \u307E\u305F\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/create-document",title:"Create document",children:"Create document"}),"\u3067\u958B\u304B\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u3001SEND VARIABLE\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u914D\u5217\u5909\u6570\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3084\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u7D4C\u7531\u3067\u914D\u5217\u306E\u9001\u53D7\u4FE1\u3092\u884C\u3044\u305F\u3044\u5834\u5408\u306F\u3001\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"\u306E\u4F8B\u984C\u53C2\u7167"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",children:"RECEIVE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/send-record",children:"SEND RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-channel",children:"SET CHANNEL"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"80"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var d=s(667294);let r={},t=d.createContext(r);function c(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);