"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84904"],{545033:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>t});var s=JSON.parse('{"id":"commands-legacy/send-record","title":"SEND RECORD","description":"SEND RECORD {( aTable )}","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/send-record.md","sourceDirName":"commands-legacy","slug":"/commands/send-record","permalink":"/docs/ja/commands/send-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-record","title":"SEND RECORD","slug":"/commands/send-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND PACKET","permalink":"/docs/ja/commands/send-packet"},"next":{"title":"SEND VARIABLE","permalink":"/docs/ja/commands/send-variable"}}'),r=d("785893"),c=d("250065");let t={id:"send-record",title:"SEND RECORD",slug:"/commands/send-record",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C",id:"\u4F8B\u984C",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4},{value:"\u30D7\u30ED\u30D1\u30C6\u30A3",id:"\u30D7\u30ED\u30D1\u30C6\u30A3",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SEND RECORD"})," {( ",(0,r.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092\u9001\u4FE1\u3059\u308B\u30C6\u30FC\u30D6\u30EB, \u307E\u305F\u306F \u7701\u7565\u3057\u305F\u5834\u5408\u30C7\u30D5\u30A9\u30EB\u30C8\u30C6\u30FC\u30D6\u30EB"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:["SEND RECORD \u306F\u3001",(0,r.jsx)(n.em,{children:"aTable"}),"\u306E\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u3092",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3067\u958B\u3044\u305F\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u307E\u305F\u306F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u9001\u4FE1\u3057\u307E\u3059\u3002\u30EC\u30B3\u30FC\u30C9\u306F\u7279\u5225\u306A\u5185\u90E8\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u9001\u4FE1\u3055\u308C\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"\u3067\u306E\u307F\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30AB\u30EC\u30F3\u30C8\u30EC\u30B3\u30FC\u30C9\u304C\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u3001SEND RECORD\u306F\u4F55\u3082\u884C\u3044\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5B8C\u5168\u306A\u30EC\u30B3\u30FC\u30C9\u3092\u9001\u4FE1\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u30EC\u30B3\u30FC\u30C9\u306B\u3042\u308B\u3044\u306F\u30EC\u30B3\u30FC\u30C9\u3068\u3068\u3082\u306B\u683C\u7D0D\u3055\u308C\u305F\u30D4\u30AF\u30C1\u30E3\u3084BLOB\u3082\u9001\u4FE1\u3057\u307E\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u91CD\u8981"}),": SEND RECORD \u3068 ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"\u3092\u4F7F\u7528\u3057\u3066\u30EC\u30B3\u30FC\u30C9\u304C\u9001\u53D7\u4FE1\u3055\u308C\u308B\u5834\u5408\u3001\u9001\u4FE1\u5143\u3068\u9001\u4FE1\u5148\u306E\u30C6\u30FC\u30D6\u30EB\u69CB\u9020\u306F\u4E92\u63DB\u6027\u306E\u3042\u308B\u3082\u306E\u3067\u306A\u304F\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u4E92\u63DB\u6027\u304C\u306A\u3044\u5834\u5408\u3001",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u5B9F\u884C\u66424D\u304C\u30C6\u30FC\u30D6\u30EB\u5B9A\u7FA9\u306B\u5FDC\u3058\u3066\u5024\u3092\u5909\u63DB\u3057\u307E\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notes:"})," \u3053\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u30EC\u30B3\u30FC\u30C9\u3092\u9001\u4FE1\u3059\u308B\u5834\u5408\u3001\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F",(0,r.jsx)(n.a,{href:"/docs/ja/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),"\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u958B\u304B\u308C\u3066\u3044\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",(0,r.jsx)(n.a,{href:"/docs/ja/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/append-document",title:"Append document",children:"Append document"})," \u307E\u305F\u306F ",(0,r.jsx)(n.a,{href:"/docs/ja/commands/create-document",title:"Create document",children:"Create document"}),"\u3067\u958B\u304B\u308C\u305F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u3001SEND RECORD\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4E92\u63DB\u6027\u306B\u95A2\u3059\u308B\u6CE8\u610F:"})," 4D\u30D0\u30FC\u30B8\u30E7\u30F311\u3088\u308A\u3001\u3053\u306E\u30B3\u30DE\u30F3\u30C9\u306F\u30B5\u30D6\u30C6\u30FC\u30D6\u30EB\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u305B\u3093\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C",children:"\u4F8B\u984C"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"\u30B3\u30DE\u30F3\u30C9\u306E\u4F8B\u984C\u3092\u53C2\u7167"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-record",children:"RECEIVE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,r.jsx)(n.h4,{id:"\u30D7\u30ED\u30D1\u30C6\u30A3",children:"\u30D7\u30ED\u30D1\u30C6\u30A3"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B3\u30DE\u30F3\u30C9\u756A\u53F7"}),(0,r.jsx)(n.td,{children:"78"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u30B9\u30EC\u30C3\u30C9\u30BB\u30FC\u30D5\u3067\u3042\u308B"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return a},a:function(){return t}});var s=d(667294);let r={},c=s.createContext(r);function t(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);